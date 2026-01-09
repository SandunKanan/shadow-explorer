function CiteList({ cites }) {
  if (!cites?.length) return null;
  return (
    <ul className="sidePanel__cites">
      {cites.map((c) => (
        <li key={c}>{c}</li>
      ))}
    </ul>
  );
}

export default function SidePanel({ node, related, onSelect }) {
  if (!node) return <div className="sidePanel sidePanel--empty">Select a node…</div>;

  return (
    <div className="sidePanel">
      <h2 className="sidePanel__title">{node.label}</h2>
      <div className="sidePanel__meta">
        <strong>Type:</strong> {node.kind}
      </div>

      {node.summary && <p className="sidePanel__summary">{node.summary}</p>}

      {node.sections?.map((s) => (
        <div key={s.title} className="sidePanel__section">
          <h3>{s.title}</h3>
          <p>{s.body}</p>
          <CiteList cites={s.cites} />
        </div>
      ))}

      <hr className="sidePanel__divider" />

      <h3>Connected nodes</h3>
      <div className="sidePanel__chips">
        {related.map((r) => (
          <button
            key={r.id}
            onClick={() => onSelect(r.id)}
            className="chip"
          >
            {r.label}
          </button>
        ))}
      </div>
    </div>
  );
}
