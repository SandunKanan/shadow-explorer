import { useMemo, useState } from "react";
import GraphView from "./components/GraphView.jsx";
import SidePanel from "./components/SidePanel.jsx";
import { simplified } from "./data/maindata.js";
import "./App.css";

const VIEW_OPTIONS = [
  { id: "rays", label: "Rays" },
  { id: "enneagram", label: "Enneagram" },
  { id: "geneKeys", label: "Gene Keys" }
];

const VIEW_COLORS = {
  rays: "#5c9b84",
  enneagram: "#4f7cc2",
  geneKeys: "#cf6a58"
};

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function extractTagKeywords(tagline) {
  if (!tagline) return [];
  return tagline
    .split(/[;,]/)
    .map((part) => part.trim().replace(/\.$/, ""))
    .filter(Boolean);
}

function buildConnectedNodes(node, viewId) {
  if (!node) return [];
  let labels = [];

  if (viewId === "rays") {
    labels = node.keywords || [];
  } else if (viewId === "geneKeys") {
    labels = node.keynotes || [];
  } else {
    labels = extractTagKeywords(node.tagline);
  }

  return labels.map((label) => ({
    id: `${node.id}-kw-${slugify(label)}`,
    label,
    kind: "keyword",
    selectable: false,
    isKeyword: true,
    accent: node.accent
  }));
}

export default function App() {
  const [viewId, setViewId] = useState("rays");
  const [selectedId, setSelectedId] = useState(null);

  const baseNodes = useMemo(() => {
    let source = [];
    let kind = "ray";

    if (viewId === "enneagram") {
      source = simplified.enneagramTypes;
      kind = "enneagram";
    } else if (viewId === "geneKeys") {
      source = simplified.geneKeysLines;
      kind = "geneKey";
    } else {
      source = simplified.divineRays;
      kind = "ray";
    }

    const accent = VIEW_COLORS[viewId] || "#6fa8dc";
    return source.map((node) => ({
      ...node,
      kind,
      selectable: true,
      accent
    }));
  }, [viewId]);

  const activeId = selectedId;
  const selectedNode = useMemo(
    () => baseNodes.find((node) => node.id === activeId) || null,
    [baseNodes, activeId]
  );

  const connectedNodes = useMemo(
    () => buildConnectedNodes(selectedNode, viewId),
    [selectedNode, viewId]
  );

  const displayNodes = useMemo(() => {
    if (selectedNode) return [selectedNode, ...connectedNodes];
    return baseNodes;
  }, [selectedNode, connectedNodes, baseNodes]);

  const edges = useMemo(() => {
    if (!selectedNode) return [];
    return connectedNodes.map((node) => ({
      id: `${selectedNode.id}__${node.id}`,
      source: selectedNode.id,
      target: node.id
    }));
  }, [selectedNode, connectedNodes]);

  const related = connectedNodes.map((node) => ({
    id: node.id,
    label: node.label
  }));

  return (
    <div className="appShell">
      <header className="appHeader">
        <div className="viewToggle">
          {VIEW_OPTIONS.map((option) => (
            <button
              key={option.id}
              type="button"
              className={viewId === option.id ? "isActive" : ""}
              onClick={() => {
                setViewId(option.id);
                setSelectedId(null);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="zoomOut"
          onClick={() => {
            setSelectedId(null);
          }}
          disabled={!selectedNode}
        >
          Zoom out
        </button>
      </header>

      <div className="appBody">
        <div className="graphPane">
          <GraphView
            nodes={displayNodes}
            edges={edges}
            selectedId={selectedId}
            onSelect={(id) => {
              if (selectedId === id) return;
              setSelectedId(id);
            }}
          />
        </div>

        <div className="sidePane">
          <SidePanel node={selectedNode} related={related} />
        </div>
      </div>
    </div>
  );
}
