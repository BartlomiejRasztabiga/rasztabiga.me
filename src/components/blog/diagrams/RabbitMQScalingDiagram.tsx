const A = 'hsl(var(--muted-foreground))';
const MUTED_BG = 'hsl(var(--muted))';
const BORDER = 'hsl(var(--border))';

export function RabbitMQScalingDiagram() {
  // 3 workers: centers at 318, 413, 508 — queue center aligns with W2 (413)
  const workerCxs = [318, 413, 508];

  return (
    <figure className="not-prose my-8">
      <div className="overflow-x-auto rounded-xl border border-border bg-card p-6 shadow-sm">
        <svg
          viewBox="0 0 555 190"
          style={{ minWidth: '420px', width: '100%', maxWidth: '555px', display: 'block', margin: '0 auto' }}
          aria-label="RabbitMQ scaling: adding consumers reduces backlog"
        >
          <defs>
            <marker id="scl-arr" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
              <polygon points="0 0,7 2.5,0 5" fill={A} />
            </marker>
          </defs>

          {/* Divider */}
          <line x1="272" y1="12" x2="272" y2="178" stroke={BORDER} strokeWidth="1" strokeDasharray="5,4" />

          {/* ── Left: Normal load ── */}
          <text x="132" y="22" textAnchor="middle" fill={A} fontSize="11" fontWeight="600" fontFamily="system-ui,sans-serif">Normal Load</text>

          <rect x="72" y="34" width="120" height="36" rx="8" fill="#7c3aed" />
          <text x="132" y="56" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="system-ui,sans-serif">Queue</text>

          <line x1="132" y1="70" x2="132" y2="94" stroke={A} strokeWidth="2" markerEnd="url(#scl-arr)" />

          <rect x="72" y="96" width="120" height="36" rx="8" fill="#059669" />
          <text x="132" y="118" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="system-ui,sans-serif">Worker 1</text>

          <rect x="47" y="155" width="170" height="20" rx="5" fill={MUTED_BG} />
          <text x="132" y="169" textAnchor="middle" fill={A} fontSize="10" fontFamily="system-ui,sans-serif">Backlog growing...</text>

          {/* ── Right: High load ── */}
          <text x="413" y="22" textAnchor="middle" fill={A} fontSize="11" fontWeight="600" fontFamily="system-ui,sans-serif">High Load (add consumers)</text>

          <rect x="353" y="34" width="120" height="36" rx="8" fill="#7c3aed" />
          <text x="413" y="56" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="system-ui,sans-serif">Queue</text>

          {/* Fan-out to 3 workers */}
          <line x1="413" y1="70" x2="413" y2="84" stroke={A} strokeWidth="2" />
          <line x1={workerCxs[0]} y1="84" x2={workerCxs[workerCxs.length - 1]} y2="84" stroke={A} strokeWidth="2" />
          {workerCxs.map((cx) => (
            <line key={cx} x1={cx} y1="84" x2={cx} y2="98" stroke={A} strokeWidth="2" markerEnd="url(#scl-arr)" />
          ))}

          {workerCxs.map((cx, i) => (
            <g key={cx}>
              <rect x={cx - 37} y="100" width="75" height="36" rx="8" fill="#059669" />
              <text x={cx} y="122" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="system-ui,sans-serif">Worker {i + 1}</text>
            </g>
          ))}

          <rect x="278" y="155" width="270" height="20" rx="5" fill={MUTED_BG} />
          <text x="413" y="169" textAnchor="middle" fill={A} fontSize="10" fontFamily="system-ui,sans-serif">Backlog cleared — no broker config change needed</text>
        </svg>
      </div>
      <figcaption className="mt-2 text-center text-sm text-muted-foreground">
        RabbitMQ scaling: just add consumers — the broker distributes automatically
      </figcaption>
    </figure>
  );
}
