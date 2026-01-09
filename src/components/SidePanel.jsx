export default function SidePanel({ node, related }) {
  if (!node) {
    return (
      <div className="sidePanel sidePanel--empty">
        Select a bubble to explore its connections.
      </div>
    );
  }

  return (
    <div className="sidePanel">
      <h2 className="sidePanel__title">{node.label}</h2>
      <div className="sidePanel__meta">
        <strong>Type:</strong> {node.kind}
      </div>

      {(node.summary || node.tagline || node.short) && (
        <p className="sidePanel__summary">
          {node.summary || node.tagline || node.short}
        </p>
      )}

      {node.frequencyShift && (
        <div className="sidePanel__section">
          <h3>Frequency shift</h3>
          <p>{node.frequencyShift}</p>
        </div>
      )}

      {node.respondsBestTo && (
        <div className="sidePanel__section">
          <h3>Responds best to</h3>
          <p>{node.respondsBestTo}</p>
        </div>
      )}

      {node.coreWound && (
        <div className="sidePanel__section">
          <h3>Core wound</h3>
          <p>{node.coreWound}</p>
        </div>
      )}

      {node.guidance && (
        <div className="sidePanel__section">
          <h3>Guidance</h3>
          <p>{node.guidance}</p>
        </div>
      )}

      {(node.keywords?.length || node.keynotes?.length) && (
        <>
          <hr className="sidePanel__divider" />
          <h3>Key themes</h3>
          <div className="sidePanel__chips">
            {(node.keywords || node.keynotes).map((item) => (
              <span key={item} className="chip chip--static">
                {item}
              </span>
            ))}
          </div>
        </>
      )}

      {related.length > 0 && (
        <>
          <hr className="sidePanel__divider" />
          <h3>Connected nodes</h3>
          <div className="sidePanel__chips">
            {related.map((r) => (
              <span key={r.id} className="chip chip--static">
                {r.label}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
