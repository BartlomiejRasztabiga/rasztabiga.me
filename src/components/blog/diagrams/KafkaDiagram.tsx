const ARROW_COLOR = 'hsl(var(--muted-foreground))';
const LABEL_COLOR = 'hsl(var(--muted-foreground))';

const C = {
  producer: '#2563eb',
  partition: '#1e40af',
  msgBlock: '#93c5fd',
  groupA: '#059669',
  groupB: '#d97706',
  topicBg: 'hsl(var(--muted))',
  partitionBg: 'hsl(var(--secondary))',
  text: 'hsl(var(--foreground))',
};

const PARTITIONS = [
  { label: 'Partition 0', y: 48, msgs: 5 },
  { label: 'Partition 1', y: 110, msgs: 4 },
  { label: 'Partition 2', y: 172, msgs: 5 },
];

export function KafkaDiagram() {
  return (
    <figure className="not-prose my-8">
      <div className="overflow-x-auto rounded-xl border border-border bg-card p-6 shadow-sm">
        <svg
          viewBox="0 0 660 240"
          style={{ minWidth: '480px', width: '100%', maxWidth: '660px', display: 'block', margin: '0 auto' }}
          aria-label="Kafka architecture: Producer writes to Topic partitions, multiple Consumer Groups read independently"
        >
          <defs>
            <marker id="kafka-arr" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
              <polygon points="0 0, 7 2.5, 0 5" fill={ARROW_COLOR} />
            </marker>
          </defs>

          {/* ── Producer ── */}
          <rect x="8" y="100" width="96" height="40" rx="8" fill={C.producer} />
          <text x="56" y="122" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="system-ui,sans-serif">Producer</text>

          {/* Producer → fan-out to partitions */}
          <line x1="104" y1="120" x2="122" y2="120" stroke={ARROW_COLOR} strokeWidth="2" />
          <line x1="122" y1="67"  x2="122" y2="192" stroke={ARROW_COLOR} strokeWidth="2" />
          {PARTITIONS.map((p) => (
            <line key={p.label} x1="122" y1={p.y + 21} x2="152" y2={p.y + 21} stroke={ARROW_COLOR} strokeWidth="2" markerEnd="url(#kafka-arr)" />
          ))}

          {/* ── Topic container ── */}
          <rect x="154" y="18" width="295" height="204" rx="10" fill={C.topicBg} />
          <text x="302" y="38" textAnchor="middle" fill={LABEL_COLOR} fontSize="11" fontWeight="600" fontFamily="system-ui,sans-serif" letterSpacing="0.05em">
            TOPIC: orders
          </text>

          {/* ── Partitions ── */}
          {PARTITIONS.map((p) => (
            <g key={p.label}>
              {/* Strip background */}
              <rect x="168" y={p.y} width="266" height="44" rx="6" fill={C.partitionBg} />

              {/* Partition label */}
              <text x="180" y={p.y + 26} fill={LABEL_COLOR} fontSize="10" fontWeight="600" fontFamily="system-ui,sans-serif">
                {p.label}
              </text>

              {/* Message blocks (log entries) */}
              {Array.from({ length: p.msgs }).map((_, i) => (
                <rect key={i} x={242 + i * 22} y={p.y + 9} width="16" height="26" rx="3" fill={C.msgBlock} opacity="0.85" />
              ))}

              {/* Append direction arrow */}
              <text x="419" y={p.y + 26} fill={LABEL_COLOR} fontSize="13" fontFamily="system-ui,sans-serif">›</text>
            </g>
          ))}

          {/* ── Distribution spine (right of topic) ── */}
          {/* Horizontal connectors from each partition to spine at x=452 */}
          {PARTITIONS.map((p) => (
            <line key={p.label} x1="449" y1={p.y + 22} x2="458" y2={p.y + 22} stroke={ARROW_COLOR} strokeWidth="1.5" />
          ))}
          {/* Vertical spine */}
          <line x1="458" y1={PARTITIONS[0].y + 22} x2="458" y2={PARTITIONS[2].y + 22} stroke={ARROW_COLOR} strokeWidth="1.5" />
          {/* Arrows to consumer groups */}
          <line x1="458" y1="90"  x2="480" y2="90"  stroke={ARROW_COLOR} strokeWidth="2" markerEnd="url(#kafka-arr)" />
          <line x1="458" y1="175" x2="480" y2="175" stroke={ARROW_COLOR} strokeWidth="2" markerEnd="url(#kafka-arr)" />

          {/* ── Consumer Group A ── */}
          <rect x="482" y="48" width="160" height="84" rx="8" stroke={C.groupA} strokeWidth="2" fill="none" />
          <text x="562" y="72" textAnchor="middle" fill={C.groupA} fontSize="11" fontWeight="700" fontFamily="system-ui,sans-serif">Consumer Group A</text>
          <text x="562" y="92" textAnchor="middle" fill={LABEL_COLOR} fontSize="10" fontFamily="system-ui,sans-serif">offset: 5 / 4 / 5</text>
          <text x="562" y="110" textAnchor="middle" fill={LABEL_COLOR} fontSize="10" fontFamily="system-ui,sans-serif">reads all partitions</text>

          {/* ── Consumer Group B ── */}
          <rect x="482" y="143" width="160" height="84" rx="8" stroke={C.groupB} strokeWidth="2" fill="none" />
          <text x="562" y="167" textAnchor="middle" fill={C.groupB} fontSize="11" fontWeight="700" fontFamily="system-ui,sans-serif">Consumer Group B</text>
          <text x="562" y="187" textAnchor="middle" fill={LABEL_COLOR} fontSize="10" fontFamily="system-ui,sans-serif">offset: 2 / 1 / 3</text>
          <text x="562" y="205" textAnchor="middle" fill={LABEL_COLOR} fontSize="10" fontFamily="system-ui,sans-serif">reads independently</text>

        </svg>
      </div>
      <figcaption className="mt-2 text-center text-sm text-muted-foreground">
        Kafka: Producer → Topic (partitions as append-only log) → Consumer Groups
      </figcaption>
    </figure>
  );
}
