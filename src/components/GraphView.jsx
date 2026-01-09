import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Position,
  Handle
} from "reactflow";

const ACCENTS = ["#6fa8dc", "#7ec8b6", "#f2a07b", "#d79072", "#9cc39b"];
const BASE_SIZE = 160;
const KEYWORD_SIZE = 120;

function radialLayout(ids, radius, offset = 0) {
  const positions = new Map();
  const count = ids.length;
  const step = (Math.PI * 2) / Math.max(1, count);

  ids.forEach((id, index) => {
    const angle = index * step + offset;
    positions.set(id, {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    });
  });

  return positions;
}

function buildPositions(nodes, focusId) {
  if (nodes.length === 0) return new Map();
  if (!focusId) {
    const radius = Math.max(260, (nodes.length * 170) / (Math.PI * 2));
    return radialLayout(
      nodes.map((n) => n.id),
      radius,
      0.25
    );
  }

  const positions = new Map();
  positions.set(focusId, { x: 0, y: 0 });
  const satellites = nodes.filter((n) => n.id !== focusId);
  if (satellites.length === 0) return positions;

  const radius = Math.max(220, (satellites.length * 150) / (Math.PI * 2));
  const ring = radialLayout(
    satellites.map((n) => n.id),
    radius,
    0.4
  );
  for (const [id, pos] of ring.entries()) {
    positions.set(id, pos);
  }

  return positions;
}

function buildFlowNodes(nodes, positions, focusId, fadeIn) {
  return nodes.map((n, index) => {
    const size = n.isKeyword ? KEYWORD_SIZE : BASE_SIZE;
    const accent = n.accent || ACCENTS[index % ACCENTS.length];
    const isFocused = n.id === focusId;
    const shouldFade = Boolean(focusId) && !isFocused;
    const isHidden = shouldFade && !fadeIn;
    const className = isHidden ? "node--hidden" : "node--visible";

    return {
      id: n.id,
      type: "keyNode",
      className,
      position: positions.get(n.id) || { x: 0, y: 0 },
      data: {
        label: n.label,
        kind: n.kind,
        selectable: n.selectable
      },
      style: {
        width: size,
        height: size,
        padding: 10,
        borderRadius: "50%",
        border: "none",
        "--node-accent": accent
      }
    };
  });
}

function buildFlowEdges(edges) {
  return edges.map((e) => ({
    id: e.id,
    source: e.source,
    target: e.target,
    animated: true,
    style: { stroke: "rgba(66, 90, 112, 0.6)", strokeWidth: 1.1 }
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

export default function GraphView({ nodes, edges, selectedId, onSelect }) {
  const flowRef = useRef(null);
  const [fadeIn, setFadeIn] = useState(true);
  const positions = useMemo(
    () => buildPositions(nodes, selectedId),
    [nodes, selectedId]
  );
  const flowNodes = useMemo(
    () => buildFlowNodes(nodes, positions, selectedId, fadeIn),
    [nodes, positions, selectedId, fadeIn]
  );
  const flowEdges = useMemo(() => buildFlowEdges(edges), [edges]);
  const selectableById = useMemo(() => {
    const map = new Map();
    flowNodes.forEach((node) => {
      map.set(node.id, node.data?.selectable !== false);
    });
    return map;
  }, [flowNodes]);

  const onNodeClick = useCallback(
    (_, node) => {
      if (node.data?.selectable === false) return;
      onSelect(node.id);
    },
    [onSelect]
  );

  const onEdgeClick = useCallback(
    (_, edge) => {
      if (!selectableById.get(edge.target)) return;
      onSelect(edge.target);
    },
    [onSelect, selectableById]
  );

  useEffect(() => {
    if (!selectedId) {
      setFadeIn(true);
      return;
    }

    setFadeIn(false);
    const timer = setTimeout(() => setFadeIn(true), 180);
    return () => clearTimeout(timer);
  }, [selectedId]);

  useEffect(() => {
    if (!flowRef.current || flowNodes.length === 0) return;
    const padding = selectedId ? 0.55 : 0.8;
    flowRef.current.fitView({ nodes: flowNodes, padding, duration: 650 });
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
