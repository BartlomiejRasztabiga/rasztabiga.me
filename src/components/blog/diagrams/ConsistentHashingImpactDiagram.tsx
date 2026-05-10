const A = 'hsl(var(--muted-foreground))';
const C = {
  text: 'hsl(var(--foreground))',
  label: 'hsl(var(--muted-foreground))',
  bad: '#ef4444',
  good: '#059669',
  bucket: 'hsl(var(--muted))',
};

const KEYS = ['k1', 'k2', 'k3', 'k4', 'k5', 'k6', 'k7', 'k8', 'k9', 'k10'];

const TRAD_3 = KEYS.map((k, i) => ({ key: k, node: i % 3 }));
const TRAD_4 = KEYS.map((k, i) => ({ key: k, node: i % 4 }));

const CONS_3 = KEYS.map((k, i) => ({ key: k, node: i % 3 }));
const CONS_4 = KEYS.map((k, i) => {
  if (k === 'k3' || k === 'k7') return { key: k, node: 3 };
  return { key: k, node: i % 3 };
});

const NODE_WIDTH = 100;
const NODE_HEIGHT = 74;
const KEY_SIZE = 7;

function renderBuckets(
  data: { key: string; node: number }[],
  x: number,
  y: number,
  title: string,
  color: string,
  movedKeys: string[] = []
) {
  const nodes = [0, 1, 2, 3];
  const visibleNodes = nodes.filter((n) => n <= 2 || data.some((d) => d.node === n));

  return (
    <g key={title}>
      <text x={x + (visibleNodes.length * (NODE_WIDTH + 8)) / 2} y={y - 10} textAnchor="middle" fill={C.text} fontSize="12" fontWeight="700" fontFamily="system-ui,sans-serif">
        {title}
      </text>
      {visibleNodes.map((n) => {
        const idx = visibleNodes.indexOf(n);
        const nx = x + idx * (NODE_WIDTH + 8);
        const items = data.filter((d) => d.node === n);
        return (
          <g key={n}>
            <rect x={nx} y={y} width={NODE_WIDTH} height={NODE_HEIGHT} rx="6" fill={C.bucket} stroke={color} strokeWidth="2" />
            <text x={nx + NODE_WIDTH / 2} y={y + 15} textAnchor="middle" fill={color} fontSize="10" fontWeight="700" fontFamily="system-ui,sans-serif">
              Node {n}
            </text>
            {items.map((item, i) => (
              <circle
                key={item.key}
                cx={nx + 14 + (i % 5) * 16}
                cy={y + 32 + Math.floor(i / 5) * 16}
                r={KEY_SIZE}
                fill={movedKeys.includes(item.key) ? C.bad : color}
                opacity={movedKeys.includes(item.key) ? 1 : 0.6}
              />
            ))}
            {items.map((item, i) => (
              <text
                key={item.key}
                x={nx + 14 + (i % 5) * 16}
                y={y + 36 + Math.floor(i / 5) * 16}
                textAnchor="middle"
                fill="white"
                fontSize="6"
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
  const tradMoved = ['k4', 'k5', 'k6', 'k7', 'k8', 'k9', 'k10'];
  const consMoved = ['k3', 'k7'];

  const bucketWidth3 = 3 * (NODE_WIDTH + 8);
  const bucketWidth4 = 4 * (NODE_WIDTH + 8);
  const maxBucketWidth = Math.max(bucketWidth3, bucketWidth4);

  const tradX = (maxBucketWidth - bucketWidth3) / 2 + 10;
  const trad4X = (maxBucketWidth - bucketWidth4) / 2 + 10;

  const section1Y = 30;
  const arrow1Y = section1Y + NODE_HEIGHT + 10;
  const section2Y = arrow1Y + 44;
  const sepY = section2Y + NODE_HEIGHT + 24;
  const section3Y = sepY + 24;
  const arrow2Y = section3Y + NODE_HEIGHT + 10;
  const section4Y = arrow2Y + 44;
  const totalHeight = section4Y + NODE_HEIGHT + 20;

  const svgWidth = maxBucketWidth + 100;

  return (
    <figure className="not-prose my-8">
      <div className="overflow-x-auto rounded-xl border border-border bg-card p-6 shadow-sm">
        <svg
          viewBox={`0 0 ${svgWidth} ${totalHeight}`}
          style={{ minWidth: '480px', width: '100%', maxWidth: `${svgWidth}px`, display: 'block', margin: '0 auto' }}
          aria-label="Impact comparison: traditional hashing remaps most keys when nodes change, consistent hashing remaps only a fraction"
        >
          <defs>
            <marker id="imp-arr" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
              <polygon points="0 0,7 2.5,0 5" fill={A} />
            </marker>
          </defs>

          {renderBuckets(TRAD_3, tradX, section1Y, 'Traditional: 3 nodes', C.good)}
          <line x1={svgWidth / 2} y1={arrow1Y} x2={svgWidth / 2} y2={arrow1Y + 18} stroke={A} strokeWidth="2" markerEnd="url(#imp-arr)" />
          <text x={svgWidth / 2 + 10} y={arrow1Y + 14} textAnchor="start" fill={C.bad} fontSize="10" fontWeight="700" fontFamily="system-ui,sans-serif">
            Add Node 3
          </text>
          {renderBuckets(TRAD_4, trad4X, section2Y, 'Traditional: 4 nodes', C.bad, tradMoved)}

          <text x={svgWidth - 40} y={section1Y + NODE_HEIGHT / 2 + section2Y - section1Y - NODE_HEIGHT} textAnchor="middle" fill={C.bad} fontSize="10" fontWeight="600" fontFamily="system-ui,sans-serif" transform={`rotate(90,${svgWidth - 40},${(section1Y + section2Y + NODE_HEIGHT) / 2})`}>
            7/10 keys remapped!
          </text>

          <line x1="10" y1={sepY} x2={svgWidth - 10} y2={sepY} stroke={C.label} strokeWidth="1" strokeDasharray="4 2" />

          {renderBuckets(CONS_3, tradX, section3Y, 'Consistent: 3 nodes', C.good)}
          <line x1={svgWidth / 2} y1={arrow2Y} x2={svgWidth / 2} y2={arrow2Y + 18} stroke={A} strokeWidth="2" markerEnd="url(#imp-arr)" />
          <text x={svgWidth / 2 + 10} y={arrow2Y + 14} textAnchor="start" fill={C.bad} fontSize="10" fontWeight="700" fontFamily="system-ui,sans-serif">
            Add Node 3
          </text>
          {renderBuckets(CONS_4, trad4X, section4Y, 'Consistent: 4 nodes', C.good, consMoved)}

          <text x={svgWidth - 40} y={section3Y + NODE_HEIGHT / 2 + section4Y - section3Y - NODE_HEIGHT} textAnchor="middle" fill={C.good} fontSize="10" fontWeight="600" fontFamily="system-ui,sans-serif" transform={`rotate(90,${svgWidth - 40},${(section3Y + section4Y + NODE_HEIGHT) / 2})`}>
            Only 2/10 remapped
          </text>

        </svg>
      </div>
      <figcaption className="mt-2 text-center text-sm text-muted-foreground">
        Traditional hashing remaps most keys on node change; consistent hashing minimizes the impact
      </figcaption>
    </figure>
  );
}
