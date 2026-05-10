const A = 'hsl(var(--muted-foreground))';
const C = {
  ring: 'hsl(var(--muted))',
  node: '#2563eb',
  key: '#d97706',
  line: '#ef4444',
  text: 'hsl(var(--foreground))',
  label: 'hsl(var(--muted-foreground))',
};

// Nodes placed at specific angles on the ring
const NODES = [
  { label: 'Node A', angle: 60, color: '#2563eb' },
  { label: 'Node B', angle: 150, color: '#059669' },
  { label: 'Node C', angle: 260, color: '#7c3aed' },
];

// Keys and which node they map to
const KEYS = [
  { label: 'key1', angle: 30, mapsTo: 0 },
  { label: 'key2', angle: 100, mapsTo: 1 },
  { label: 'key3', angle: 180, mapsTo: 2 },
  { label: 'key4', angle: 300, mapsTo: 0 },
  { label: 'key5', angle: 130, mapsTo: 1 },
];

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export function ConsistentHashingDiagram() {
  const cx = 280, cy = 200, r = 140;

  return (
    <figure className="not-prose my-8">
      <div className="overflow-x-auto rounded-xl border border-border bg-card p-6 shadow-sm">
        <svg
          viewBox="0 0 560 400"
          style={{ minWidth: '480px', width: '100%', maxWidth: '560px', display: 'block', margin: '0 auto' }}
          aria-label="Consistent hashing ring: keys mapped to nodes in clockwise order"
        >
          <defs>
            <marker id="ch-arr" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
              <polygon points="0 0,7 2.5,0 5" fill={A} />
            </marker>
          </defs>

          {/* Ring */}
          <circle cx={cx} cy={cy} r={r} fill="none" stroke={C.ring} strokeWidth="3" />
          <text x={cx} y={cy - r - 16} textAnchor="middle" fill={C.label} fontSize="12" fontWeight="600" fontFamily="system-ui,sans-serif">
            Hash Ring (0 → 2³²-1, wraps around)
          </text>

          {/* Nodes on ring */}
          {NODES.map((node, i) => {
            const pos = polarToCartesian(cx, cy, r, node.angle);
            const labelPos = polarToCartesian(cx, cy, r + 24, node.angle);
            return (
              <g key={node.label}>
                <circle cx={pos.x} cy={pos.y} r="12" fill={node.color} />
                <text
                  x={labelPos.x}
                  y={labelPos.y}
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

          {/* Keys on ring */}
          {KEYS.map((key) => {
            const pos = polarToCartesian(cx, cy, r, key.angle);
            const innerPos = polarToCartesian(cx, cy, r - 20, key.angle);
            const targetNode = NODES[key.mapsTo];
            const targetPos = polarToCartesian(cx, cy, r, targetNode.angle);
            return (
              <g key={key.label}>
                {/* Key dot */}
                <circle cx={pos.x} cy={pos.y} r="6" fill={C.key} />
                <text
                  x={innerPos.x}
                  y={innerPos.y}
                  textAnchor="middle"
                  fill={C.key}
                  fontSize="9"
                  fontWeight="600"
                  fontFamily="system-ui,sans-serif"
                >
                  {key.label}
                </text>
                {/* Arrow to assigned node */}
                <line
                  x1={pos.x} y1={pos.y}
                  x2={targetPos.x} y2={targetPos.y}
                  stroke={C.line}
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  markerEnd="url(#ch-arr)"
                />
              </g>
            );
          })}

          {/* Legend */}
          <rect x="20" y="350" width="200" height="36" rx="6" fill="hsl(var(--secondary))" />
          <circle cx="36" cy="368" r="6" fill={C.node} />
          <text x="48" y="372" fill={C.text} fontSize="10" fontFamily="system-ui,sans-serif">Node</text>
          <circle cx="86" cy="368" r="5" fill={C.key} />
          <text x="96" y="372" fill={C.text} fontSize="10" fontFamily="system-ui,sans-serif">Key</text>
          <line x1="130" y1="364" x2="148" y2="364" stroke={C.line} strokeWidth="1.5" strokeDasharray="3 2" />
          <text x="152" y="372" fill={C.text} fontSize="10" fontFamily="system-ui,sans-serif">Maps to (clockwise)</text>

        </svg>
      </div>
      <figcaption className="mt-2 text-center text-sm text-muted-foreground">
        Consistent hashing: keys are assigned to the next node in clockwise order on the hash ring
      </figcaption>
    </figure>
  );
}
