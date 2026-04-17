const A = 'hsl(var(--muted-foreground))';

const GROUPS = [
  { label: 'Inventory', sub: 'Group A', color: '#059669' },
  { label: 'Email',     sub: 'Group B', color: '#d97706' },
  { label: 'Analytics', sub: 'Group C', color: '#7c3aed' },
];

export function KafkaFanoutDiagram() {
  return (
    <figure className="not-prose my-8">
      <div className="overflow-x-auto rounded-xl border border-border bg-card p-6 shadow-sm">
        <svg
          viewBox="0 0 420 210"
          style={{ minWidth: '340px', width: '100%', maxWidth: '420px', display: 'block', margin: '0 auto' }}
          aria-label="Kafka fan-out: one event is consumed independently by Inventory, Email, and Analytics services"
        >
          <defs>
            <marker id="kf-arr" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
              <polygon points="0 0,7 2.5,0 5" fill={A} />
            </marker>
          </defs>

          {/* Event */}
          <rect x="110" y="8" width="200" height="36" rx="8" fill="#2563eb" />
          <text x="210" y="30" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="system-ui,sans-serif">Order Created Event</text>

          {/* Down arrow */}
          <line x1="210" y1="44" x2="210" y2="64" stroke={A} strokeWidth="2" markerEnd="url(#kf-arr)" />

          {/* Kafka Topic */}
          <rect x="130" y="66" width="160" height="36" rx="8" fill="#7c3aed" />
          <text x="210" y="88" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="system-ui,sans-serif">Kafka Topic</text>

          {/* Fan-out */}
          <line x1="210" y1="102" x2="210" y2="118" stroke={A} strokeWidth="2" />
          <line x1="65" y1="118" x2="355" y2="118" stroke={A} strokeWidth="2" />
          {[65, 210, 355].map((x) => (
            <line key={x} x1={x} y1="118" x2={x} y2="150" stroke={A} strokeWidth="2" markerEnd="url(#kf-arr)" />
          ))}

          {/* Consumer groups */}
          {GROUPS.map(({ label, sub, color }, i) => (
            <g key={label}>
              <rect x={10 + i * 145} y="152" width="110" height="44" rx="8" fill={color} />
              <text x={65 + i * 145} y="172" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="system-ui,sans-serif">{label}</text>
              <text x={65 + i * 145} y="188" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="10" fontFamily="system-ui,sans-serif">{sub}</text>
            </g>
          ))}

          <text x="210" y="207" textAnchor="middle" fill={A} fontSize="10" fontFamily="system-ui,sans-serif">
            Each group reads every event independently
          </text>
        </svg>
      </div>
      <figcaption className="mt-2 text-center text-sm text-muted-foreground">
        Kafka fan-out: all consumer groups receive all events at their own pace
      </figcaption>
    </figure>
  );
}
