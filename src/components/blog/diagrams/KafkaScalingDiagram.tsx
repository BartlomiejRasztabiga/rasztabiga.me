const A = 'hsl(var(--muted-foreground))';

const ROWS = [
  { broker: 'Broker 1', p0: 'P0', p1: 'P1', c0: 'Consumer 1', c1: 'Consumer 2' },
  { broker: 'Broker 2', p0: 'P2', p1: 'P3', c0: 'Consumer 3', c1: 'Consumer 4' },
  { broker: 'Broker 3', p0: 'P4', p1: 'P5', c0: 'Consumer 5', c1: 'Consumer 6' },
];

const ROW_H = 73;
const ROW_OFFSET = 15;

export function KafkaScalingDiagram() {
  return (
    <figure className="not-prose my-8">
      <div className="overflow-x-auto rounded-xl border border-border bg-card p-6 shadow-sm">
        <svg
          viewBox="0 0 385 240"
          style={{ minWidth: '320px', width: '100%', maxWidth: '385px', display: 'block', margin: '0 auto' }}
          aria-label="Kafka scaling: 3 brokers each hold 2 partitions, each partition consumed by a dedicated consumer"
        >
          <defs>
            <marker id="ks-arr" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
              <polygon points="0 0,7 2.5,0 5" fill={A} />
            </marker>
          </defs>

          {/* Column headers */}
          {[
            { x: 40,  label: 'Brokers' },
            { x: 138, label: 'Partitions' },
            { x: 290, label: 'Consumers' },
          ].map(({ x, label }) => (
            <text key={label} x={x} y="12" textAnchor="middle" fill={A} fontSize="10" fontWeight="600" fontFamily="system-ui,sans-serif" letterSpacing="0.04em">
              {label.toUpperCase()}
            </text>
          ))}

          {ROWS.map(({ broker, p0, p1, c0, c1 }, i) => {
            const y = ROW_OFFSET + i * ROW_H;
            return (
              <g key={broker}>
                {/* Broker box */}
                <rect x="5" y={y} width="70" height="58" rx="8" fill="#1e40af" />
                <text x="40" y={y + 26} textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui,sans-serif">{broker.split(' ')[0]}</text>
                <text x="40" y={y + 40} textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="11" fontWeight="700" fontFamily="system-ui,sans-serif">{broker.split(' ')[1]}</text>

                {/* Partition boxes */}
                {[p0, p1].map((p, j) => (
                  <g key={p}>
                    <rect x={88 + j * 56} y={y + 10} width="48" height="38" rx="6" fill="#2563eb" />
                    <text x={112 + j * 56} y={y + 33} textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="system-ui,sans-serif">{p}</text>
                  </g>
                ))}

                {/* Arrow */}
                <line x1="194" y1={y + 29} x2="214" y2={y + 29} stroke={A} strokeWidth="2" markerEnd="url(#ks-arr)" />

                {/* Consumer boxes */}
                {[c0, c1].map((c, j) => (
                  <g key={c}>
                    <rect x="216" y={y + 5 + j * 28} width="160" height="22" rx="5" fill="#059669" />
                    <text x="296" y={y + 20 + j * 28} textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="system-ui,sans-serif">{c}</text>
                  </g>
                ))}
              </g>
            );
          })}

          <text x="192" y="234" textAnchor="middle" fill={A} fontSize="10" fontFamily="system-ui,sans-serif">
            Add a broker + rebalance partitions = linear throughput scale
          </text>
        </svg>
      </div>
      <figcaption className="mt-2 text-center text-sm text-muted-foreground">
        Kafka: 6 partitions across 3 brokers, each partition read by one consumer
      </figcaption>
    </figure>
  );
}
