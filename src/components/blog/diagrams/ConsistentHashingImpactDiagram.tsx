const A = 'hsl(var(--muted-foreground))';
const C = {
  text: 'hsl(var(--foreground))',
  label: 'hsl(var(--muted-foreground))',
  bad: '#ef4444',
  good: '#059669',
  bucket: 'hsl(var(--muted))',
};

const KEYS = ['k1', 'k2', 'k3', 'k4', 'k5', 'k6', 'k7', 'k8', 'k9', 'k10'];

// Traditional: hash % 3 → when adding 4th node, most keys remap
const TRAD_3 = KEYS.map((k, i) => ({ key: k, node: i % 3 }));
const TRAD_4 = KEYS.map((k, i) => ({ key: k, node: i % 4 }));

// Consistent: only keys near new node remap
const CONS_3 = KEYS.map((k, i) => ({ key: k, node: i % 3 }));
const CONS_4 = KEYS.map((k, i) => {
  // Simulate: only k3 and k7 move when adding node 3
  if (k === 'k3' || k === 'k7') return { key: k, node: 3 };
  return { key: k, node: i % 3 };
});

function renderBuckets(
  svg: any,
  data: { key: string; node: number }[],
  x: number,
  y: number,
  title: string,
  color: string,
  movedKeys: string[] = []
) {
  const nodes = [0, 1, 2, 3];
  const nodeWidth = 110;
  const nodeHeight = 80;
  const keySize = 8;

  return (
    <g key={title}>
      <text x={x + 220} y={y - 8} textAnchor="middle" fill={C.text} fontSize="12" fontWeight="700" fontFamily="system-ui,sans-serif">
        {title}
      </text>
      {nodes.map((n) => {
        if (n > 2 && !data.some((d) => d.node === n)) return null;
        const nx = x + n * (nodeWidth + 10);
        const items = data.filter((d) => d.node === n);
        return (
          <g key={n}>
            <rect x={nx} y={y} width={nodeWidth} height={nodeHeight} rx="6" fill={C.bucket} stroke={color} strokeWidth="2" />
            <text x={nx + nodeWidth / 2} y={y + 16} textAnchor="middle" fill={color} fontSize="10" fontWeight="700" fontFamily="system-ui,sans-serif">
              Node {n}
            </text>
            {items.map((item, i) => (
              <circle
                key={item.key}
                cx={nx + 16 + (i % 5) * 18}
                cy={y + 34 + Math.floor(i / 5) * 18}
                r={keySize}
                fill={movedKeys.includes(item.key) ? C.bad : color}
                opacity={movedKeys.includes(item.key) ? 1 : 0.6}
              />
            ))}
            {items.map((item, i) => (
              <text
                key={item.key}
                x={nx + 16 + (i % 5) * 18}
                y={y + 38 + Math.floor(i / 5) * 18}
                textAnchor="middle"
                fill="white"
                fontSize="7"
                fontWeight="700"
                fontFamily="system-ui,sans-serif"
              >
                {item.key}
              </text>
            ))}
          </g>
        );
      })}
    </g>
  );
}

export function ConsistentHashingImpactDiagram() {
  const tradMoved = ['k4', 'k5', 'k6', 'k7', 'k8', 'k9', 'k10']; // most keys move
  const consMoved = ['k3', 'k7']; // only 2 keys move

  return (
    <figure className="not-prose my-8">
      <div className="overflow-x-auto rounded-xl border border-border bg-card p-6 shadow-sm">
        <svg
          viewBox="0 0 500 320"
          style={{ minWidth: '480px', width: '100%', maxWidth: '500px', display: 'block', margin: '0 auto' }}
          aria-label="Impact comparison: traditional hashing remaps most keys when nodes change, consistent hashing remaps only a fraction"
        >
          <defs>
            <marker id="imp-arr" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
              <polygon points="0 0,7 2.5,0 5" fill={A} />
            </marker>
          </defs>

          {/* Traditional hashing */}
          {renderBuckets(null, TRAD_3, 10, 30, 'Traditional: 3 nodes', C.good)}
          <line x1="250" y1="120" x2="250" y2="140" stroke={A} strokeWidth="2" markerEnd="url(#imp-arr)" />
          <text x="250" y="136" textAnchor="middle" fill={C.bad} fontSize="10" fontWeight="700" fontFamily="system-ui,sans-serif">
            Add Node 3
          </text>
          {renderBuckets(null, TRAD_4, 10, 150, 'Traditional: 4 nodes', C.bad, tradMoved)}

          {/* Annotation */}
          <text x="470" y="100" textAnchor="middle" fill={C.bad} fontSize="10" fontFamily="system-ui,sans-serif" transform="rotate(90,470,100)">
            7/10 keys remapped!
          </text>

          {/* Separator */}
          <line x1="10" y1="245" x2="490" y2="245" stroke={C.label} strokeWidth="1" strokeDasharray="4 2" />

          {/* Consistent hashing */}
          {renderBuckets(null, CONS_3, 10, 260, 'Consistent: 3 nodes', C.good)}
          <line x1="250" y1="350" x2="250" y2="370" stroke={A} strokeWidth="2" markerEnd="url(#imp-arr)" />
          <text x="250" y="366" textAnchor="middle" fill={C.bad} fontSize="10" fontWeight="700" fontFamily="system-ui,sans-serif">
            Add Node 3
          </text>
          {renderBuckets(null, CONS_4, 10, 380, 'Consistent: 4 nodes', C.good, consMoved)}

          {/* Annotation */}
          <text x="470" y="350" textAnchor="middle" fill={C.good} fontSize="10" fontFamily="system-ui,sans-serif" transform="rotate(90,470,350)">
            Only 2/10 keys remapped
          </text>

        </svg>
      </div>
      <figcaption className="mt-2 text-center text-sm text-muted-foreground">
        Traditional hashing remaps most keys on node change; consistent hashing minimizes the impact
      </figcaption>
    </figure>
  );
}
