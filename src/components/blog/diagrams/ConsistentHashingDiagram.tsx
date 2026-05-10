const A = 'hsl(var(--muted-foreground))';
const C = {
  ring: 'hsl(var(--muted))',
  node: '#2563eb',
  key: '#d97706',
  line: '#ef4444',
  text: 'hsl(var(--foreground))',
  label: 'hsl(var(--muted-foreground))',
};

const NODES = [
  { label: 'Node A', angle: 50, color: '#2563eb' },
  { label: 'Node B', angle: 170, color: '#059669' },
  { label: 'Node C', angle: 290, color: '#7c3aed' },
];

const KEYS = [
  { label: 'key1', angle: 20, mapsTo: 0 },
  { label: 'key2', angle: 110, mapsTo: 1 },
  { label: 'key3', angle: 220, mapsTo: 2 },
  { label: 'key4', angle: 330, mapsTo: 0 },
  { label: 'key5', angle: 140, mapsTo: 1 },
];

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export function ConsistentHashingDiagram() {
  const cx = 280, cy = 210, r = 140;

  return (
    <figure className="not-prose my-8">
      <div className="overflow-x-auto rounded-xl border border-border bg-card p-6 shadow-sm">
        <svg
          viewBox="0 0 560 420"
          style={{ minWidth: '480px', width: '100%', maxWidth: '560px', display: 'block', margin: '0 auto' }}
          aria-label="Consistent hashing ring: keys mapped to nodes in clockwise order"
        >
          <defs>
            <marker id="ch-arr" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
              <polygon points="0 0,7 2.5,0 5" fill={A} />
            </marker>
          </defs>

          <circle cx={cx} cy={cy} r={r} fill="none" stroke={C.ring} strokeWidth="3" />
          <text x={cx} y={cy - r - 14} textAnchor="middle" fill={C.label} fontSize="12" fontWeight="600" fontFamily="system-ui,sans-serif">
            Hash Ring (0 → 2³²-1, wraps around)
          </text>

          {KEYS.map((key) => {
            const keyPos = polarToCartesian(cx, cy, r - 16, key.angle);
            const labelPos = polarToCartesian(cx, cy, r - 40, key.angle);
            const targetNode = NODES[key.mapsTo];
            const nodePos = polarToCartesian(cx, cy, r, targetNode.angle);
            return (
              <g key={key.label}>
                <line
                  x1={keyPos.x} y1={keyPos.y}
                  x2={nodePos.x} y2={nodePos.y}
                  stroke={C.line}
                  strokeWidth="1"
                  strokeDasharray="4 3"
                  opacity="0.5"
                  markerEnd="url(#ch-arr)"
                />
                <circle cx={keyPos.x} cy={keyPos.y} r="5" fill={C.key} />
                <text
                  x={labelPos.x}
                  y={labelPos.y + 3}
                  textAnchor="middle"
                  fill={C.key}
                  fontSize="9"
                  fontWeight="600"
                  fontFamily="system-ui,sans-serif"
                >
                  {key.label}
                </text>
              </g>
            );
          })}

          {NODES.map((node) => {
            const pos = polarToCartesian(cx, cy, r, node.angle);
            const labelPos = polarToCartesian(cx, cy, r + 28, node.angle);
            return (
              <g key={node.label}>
                <circle cx={pos.x} cy={pos.y} r="13" fill={node.color} />
                <circle cx={pos.x} cy={pos.y} r="18" fill="none" stroke={node.color} strokeWidth="2" opacity="0.3" />
                <text
                  x={labelPos.x}
                  y={labelPos.y + 4}
                  textAnchor="middle"
                  fill={node.color}
                  fontSize="11"
                  fontWeight="700"
                  fontFamily="system-ui,sans-serif"
                >
                  {node.label}
                </text>
              </g>
            );
          })}

          <rect x="20" y="370" width="260" height="36" rx="6" fill="hsl(var(--secondary))" />
          <circle cx="36" cy="388" r="6" fill={C.node} />
          <text x="48" y="392" fill={C.text} fontSize="10" fontFamily="system-ui,sans-serif">Node</text>
          <circle cx="90" cy="388" r="5" fill={C.key} />
          <text x="100" y="392" fill={C.text} fontSize="10" fontFamily="system-ui,sans-serif">Key</text>
          <line x1="136" y1="384" x2="156" y2="384" stroke={C.line} strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
          <text x="160" y="392" fill={C.text} fontSize="10" fontFamily="system-ui,sans-serif">Maps to (clockwise)</text>

        </svg>
      </div>
      <figcaption className="mt-2 text-center text-sm text-muted-foreground">
        Consistent hashing: keys are assigned to the next node in clockwise order on the hash ring
      </figcaption>
    </figure>
  );
}
