import { useMemo, useState } from "react";
import GraphView from "./components/GraphView.jsx";
import SidePanel from "./components/SidePanel.jsx";
import { nodes as rawNodes, edges as rawEdges } from "./data/graph.js";
import "./App.css";

export default function App() {
  const [selectedId, setSelectedId] = useState("type8");

  // Index for fast lookup
  const index = useMemo(() => {
    const byId = new Map(rawNodes.map((n) => [n.id, n]));
    const outgoing = new Map();
    const incoming = new Map();

    for (const e of rawEdges) {
      outgoing.set(e.source, [...(outgoing.get(e.source) || []), e.target]);
      incoming.set(e.target, [...(incoming.get(e.target) || []), e.source]);
    }

    return { byId, outgoing, incoming };
  }, []);

  const selectedNode = index.byId.get(selectedId) || null;

  const related = useMemo(() => {
    if (!selectedId) return [];
    const out = index.outgoing.get(selectedId) || [];
    const inc = index.incoming.get(selectedId) || [];
    const ids = Array.from(new Set([...out, ...inc]));
    return ids.map((id) => index.byId.get(id)).filter(Boolean);
  }, [selectedId, index]);

  return (
    <div className="appShell">
      <div className="graphPane">
        <GraphView
          rawNodes={rawNodes}
          rawEdges={rawEdges}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </div>

      <div className="sidePane">
        <SidePanel
          node={selectedNode}
          related={related}
          onSelect={setSelectedId}
        />
      </div>
    </div>
  );
}
