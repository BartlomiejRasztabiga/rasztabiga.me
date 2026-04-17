const ARROW_COLOR = 'hsl(var(--muted-foreground))';
const LABEL_COLOR = 'hsl(var(--muted-foreground))';

const BOX = {
  producer: '#2563eb',
  exchange: '#7c3aed',
  queue: '#d97706',
  consumer: '#059669',
};

export function RabbitMQDiagram() {
  return (
    <figure className="not-prose my-8">
      <div className="overflow-x-auto rounded-xl border border-border bg-card p-6 shadow-sm">
        <svg
          viewBox="0 0 540 215"
          style={{ minWidth: '420px', width: '100%', maxWidth: '540px', display: 'block', margin: '0 auto' }}
          aria-label="RabbitMQ architecture: Producer sends to Exchange which routes to multiple Queues, each consumed by one Consumer"
        >
          <defs>
            <marker id="rmq-arr" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
              <polygon points="0 0, 7 2.5, 0 5" fill={ARROW_COLOR} />
            </marker>
          </defs>

          {/* ── Producer ── */}
          <rect x="8" y="85" width="100" height="40" rx="8" fill={BOX.producer} />
          <text x="58" y="107" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="system-ui,sans-serif">Producer</text>

          {/* Producer → Exchange */}
          <line x1="108" y1="105" x2="147" y2="105" stroke={ARROW_COLOR} strokeWidth="2" markerEnd="url(#rmq-arr)" />

          {/* ── Exchange ── */}
          <rect x="149" y="85" width="112" height="40" rx="8" fill={BOX.exchange} />
          <text x="205" y="107" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="system-ui,sans-serif">Exchange</text>

          {/* Fan-out: Exchange → vertical spine → Queues */}
          <line x1="261" y1="105" x2="278" y2="105" stroke={ARROW_COLOR} strokeWidth="2" />
          <line x1="278" y1="37" x2="278" y2="173" stroke={ARROW_COLOR} strokeWidth="2" />
          <line x1="278" y1="37"  x2="308" y2="37"  stroke={ARROW_COLOR} strokeWidth="2" markerEnd="url(#rmq-arr)" />
          <line x1="278" y1="105" x2="308" y2="105" stroke={ARROW_COLOR} strokeWidth="2" markerEnd="url(#rmq-arr)" />
          <line x1="278" y1="173" x2="308" y2="173" stroke={ARROW_COLOR} strokeWidth="2" markerEnd="url(#rmq-arr)" />

          {/* ── Queues ── */}
          {(['Queue A', 'Queue B', 'Queue C'] as const).map((label, i) => (
            <g key={label}>
              <rect x="310" y={18 + i * 67} width="82" height="38" rx="8" fill={BOX.queue} />
              <text x="351" y={41 + i * 67} textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="system-ui,sans-serif">
                {label}
              </text>
            </g>
          ))}

          {/* Queues → Consumers */}
          {[37, 105, 173].map((y) => (
            <line key={y} x1="392" y1={y} x2="414" y2={y} stroke={ARROW_COLOR} strokeWidth="2" markerEnd="url(#rmq-arr)" />
          ))}

          {/* ── Consumers ── */}
          {(['Consumer 1', 'Consumer 2', 'Consumer 3'] as const).map((label, i) => (
            <g key={label}>
              <rect x="416" y={18 + i * 67} width="112" height="38" rx="8" fill={BOX.consumer} />
              <text x="472" y={41 + i * 67} textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="system-ui,sans-serif">
                {label}
              </text>
            </g>
          ))}

          {/* Caption */}
          <text x="270" y="207" textAnchor="middle" fill={LABEL_COLOR} fontSize="11" fontFamily="system-ui,sans-serif">
            One message → one consumer (competing consumers)
          </text>
        </svg>
      </div>
      <figcaption className="mt-2 text-center text-sm text-muted-foreground">
        RabbitMQ: Producer → Exchange routes to Queues → Consumers
      </figcaption>
    </figure>
  );
}
