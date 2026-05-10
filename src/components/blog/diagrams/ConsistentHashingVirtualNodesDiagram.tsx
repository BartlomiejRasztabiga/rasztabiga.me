const A = 'hsl(var(--muted-foreground))';
const C = {
  ring: 'hsl(var(--muted))',
  text: 'hsl(var(--foreground))',
  label: 'hsl(var(--muted-foreground))',
};

const PHYSICAL = [
  { label: 'Node A', color: '#2563eb' },
  { label: 'Node B', color: '#059669' },
  { label: 'Node C', color: '#7c3aed' },
];

const VIRTUAL = [
  { physical: 0, angle: 30, label: 'A₁' },
  { physical: 0, angle: 120, label: 'A₂' },
  { physical: 0, angle: 280, label: 'A₃' },
  { physical: 1, angle: 70, label: 'B₁' },
  { physical: 1, angle: 200, label: 'B₂' },
  { physical: 1, angle: 310, label: 'B₃' },
  { physical: 2, angle: 160, label: 'C₁' },
  { physical: 2, angle: 230, label: 'C₂' },
  { physical: 2, angle: 340, label: 'C₃' },
];

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export function ConsistentHashingVirtualNodesDiagram() {
  const cx = 280, cy = 190, r = 140;
  const labelY = 410;
  const annotationY = cy + r + 20;

  return (
    <figure className="not-prose my-8">
      <div className="overflow-x-auto rounded-xl border border-border bg-card p-6 shadow-sm">
        <svg
          viewBox="0 0 560 460"
          style={{ minWidth: '480px', width: '100%', maxWidth: '560px', display: 'block', margin: '0 auto' }}
          aria-label="Consistent hashing with virtual nodes: each physical node appears multiple times on the ring for even distribution"
        >
          <circle cx={cx} cy={cy} r={r} fill="none" stroke={C.ring} strokeWidth="3" />
          <text x={cx} y={cy - r - 16} textAnchor="middle" fill={C.label} fontSize="12" fontWeight="600" fontFamily="system-ui,sans-serif">
            Hash Ring with Virtual Nodes
          </text>

          {VIRTUAL.map((vn) => {
            const pos = polarToCartesian(cx, cy, r, vn.angle);
            const color = PHYSICAL[vn.physical].color;
            return (
              <g key={vn.label}>
                <circle cx={pos.x} cy={pos.y} r="8" fill={color} opacity="0.7" />
                <text
                  x={pos.x}
                  y={pos.y - 14}
                  textAnchor="middle"
                  fill={color}
                  fontSize="8"
                  fontWeight="700"
                  fontFamily="system-ui,sans-serif"
                >
                  {vn.label}
                </text>
              </g>
            );
          })}

          <text x={cx} y={annotationY} textAnchor="middle" fill={C.label} fontSize="10" fontFamily="system-ui,sans-serif">
            Virtual nodes spread evenly → better load distribution
          </text>

          {PHYSICAL.map((node, i) => (
            <g key={node.label}>
              <rect x={20 + i * 170} y={labelY} width="150" height="36" rx="6" fill={node.color} opacity="0.15" stroke={node.color} strokeWidth="1.5" />
              <text x={95 + i * 170} y={labelY + 24} textAnchor="middle" fill={node.color} fontSize="11" fontWeight="700" fontFamily="system-ui,sans-serif">
                {node.label}: 3 virtual nodes
              </text>
            </g>
          ))}

        </svg>
      </div>
      <figcaption className="mt-2 text-center text-sm text-muted-foreground">
        Virtual nodes: each physical node appears multiple times on the ring, reducing skew
      </figcaption>
    </figure>
  );
}
