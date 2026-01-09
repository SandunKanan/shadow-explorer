import { useCallback, useEffect, useMemo, useRef } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Position,
  Handle
} from "reactflow";

const ROOT_ID = "type8";
const ACCENTS = ["#6fa8dc", "#7ec8b6", "#f2a07b", "#d79072", "#9cc39b"];

function computeDepths(rawNodes, rawEdges, rootId) {
  const nodesById = new Set(rawNodes.map((n) => n.id));
  const outgoing = new Map();

  for (const e of rawEdges) {
    if (!nodesById.has(e.source) || !nodesById.has(e.target)) continue;
    outgoing.set(e.source, [...(outgoing.get(e.source) || []), e.target]);
  }

  const fallbackRoot = rawNodes[0]?.id;
  const start = nodesById.has(rootId) ? rootId : fallbackRoot;
  const depth = new Map();

  if (!start) return depth;
  depth.set(start, 0);
  const queue = [start];

  while (queue.length) {
    const current = queue.shift();
    const next = outgoing.get(current) || [];
    for (const n of next) {
      if (depth.has(n)) continue;
      depth.set(n, (depth.get(current) || 0) + 1);
      queue.push(n);
    }
  }

  return depth;
}

function buildRadialPositions(rawNodes, depthMap) {
  const levels = new Map();
  let maxDepth = 0;

  for (const n of rawNodes) {
    const d = depthMap.get(n.id) ?? 3;
    maxDepth = Math.max(maxDepth, d);
    levels.set(d, [...(levels.get(d) || []), n.id]);
  }

  const positions = new Map();
  const baseRadius = 170;
  const ringGap = 210;
  for (const [depth, ids] of [...levels.entries()].sort((a, b) => a[0] - b[0])) {
    const sorted = [...ids].sort();
    if (depth === 0) {
      positions.set(sorted[0], { x: 0, y: 0 });
      continue;
    }

    const count = sorted.length;
    const circumference = Math.max(count * 200, 1);
    const radius = Math.max(baseRadius + (depth - 1) * ringGap, circumference / (Math.PI * 2));
    const step = (Math.PI * 2) / Math.max(1, count);
    sorted.forEach((id, index) => {
      const angle = index * step + depth * 0.35;
      positions.set(id, {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius
      });
    });
  }

  return positions;
}

function buildFlowNodes(rawNodes, rawEdges, selectedId) {
  const depthMap = computeDepths(rawNodes, rawEdges, ROOT_ID);
  const positions = buildRadialPositions(rawNodes, depthMap);

  return rawNodes.map((n) => {
    const depth = depthMap.get(n.id) ?? 3;
    const size = 160;
    const accent = ACCENTS[depth % ACCENTS.length];

    return {
      id: n.id,
      type: "keyNode",
      position: positions.get(n.id) || { x: 0, y: 0 },
      data: {
        label: n.label,
        kind: n.kind,
        depth
      },
      style: {
        width: size,
        height: size,
        aspectRatio: "1 / 1",
        padding: 10,
        borderRadius: "50%",
        border: "none",
        "--node-accent": accent,
        "--node-depth": depth
      }
    };
  });
}

function buildFlowEdges(rawEdges) {
  return rawEdges.map((e) => ({
    id: e.id,
    source: e.source,
    target: e.target,
    label: e.label,
    animated: true,
    style: { stroke: "rgba(66, 90, 112, 0.6)", strokeWidth: 1.1 },
    labelStyle: { fill: "rgba(66, 90, 112, 0.9)", fontSize: 10 }
  }));
}

function KeyNode({ data, selected }) {
  return (
    <div className={`keyNode ${selected ? "isSelected" : ""}`}>
      <Handle type="target" position={Position.Top} />
      <div className="keyNode__label">{data.label}</div>
      <div className="keyNode__kind">{data.kind}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default function GraphView({ rawNodes, rawEdges, selectedId, onSelect }) {
  const flowRef = useRef(null);
  const flowNodes = useMemo(
    () => buildFlowNodes(rawNodes, rawEdges, selectedId),
    [rawNodes, rawEdges, selectedId]
  );
  const flowEdges = useMemo(() => buildFlowEdges(rawEdges), [rawEdges]);

  const onNodeClick = useCallback((_, node) => onSelect(node.id), [onSelect]);

  // Optional: click an edge to jump to its target
  const onEdgeClick = useCallback(
    (_, edge) => onSelect(edge.target),
    [onSelect]
  );

  useEffect(() => {
    const focus = flowNodes.find((n) => n.id === selectedId);
    if (!focus) return;
    const depth = focus.data?.depth ?? 0;
    const padding = Math.max(0.32, 0.72 - depth * 0.08);
    flowRef.current?.fitView({ nodes: [focus], padding, duration: 650 });
  }, [selectedId, flowNodes]);

  return (
    <ReactFlow
      className="graphCanvas"
      nodes={flowNodes}
      edges={flowEdges}
      onInit={(instance) => {
        flowRef.current = instance;
      }}
      nodeTypes={{ keyNode: KeyNode }}
      onNodeClick={onNodeClick}
      onEdgeClick={onEdgeClick}
      fitView
      fitViewOptions={{ padding: 0.4 }}
      minZoom={0.35}
      maxZoom={1.8}
      panOnScroll
      zoomOnScroll
      zoomOnPinch
    >
      <Background variant="dots" gap={18} size={1.2} />
      <MiniMap pannable zoomable />
      <Controls />
    </ReactFlow>
  );
}
