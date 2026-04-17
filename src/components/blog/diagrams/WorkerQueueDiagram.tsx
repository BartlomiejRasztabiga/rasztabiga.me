const A = 'hsl(var(--muted-foreground))';

export function WorkerQueueDiagram() {
  return (
    <figure className="not-prose my-8">
      <div className="overflow-x-auto rounded-xl border border-border bg-card p-6 shadow-sm">
        <svg
          viewBox="0 0 380 195"
          style={{ minWidth: '300px', width: '100%', maxWidth: '380px', display: 'block', margin: '0 auto' }}
          aria-label="Task queue: API service sends to RabbitMQ queue, workers compete for jobs"
        >
          <defs>
            <marker id="wq-arr" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
              <polygon points="0 0,7 2.5,0 5" fill={A} />
            </marker>
          </defs>

          {/* API Service */}
          <rect x="140" y="8" width="100" height="36" rx="8" fill="#2563eb" />
          <text x="190" y="30" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="system-ui,sans-serif">API Service</text>

          {/* Down arrow */}
          <line x1="190" y1="44" x2="190" y2="64" stroke={A} strokeWidth="2" markerEnd="url(#wq-arr)" />

          {/* Queue */}
          <rect x="125" y="66" width="130" height="36" rx="8" fill="#7c3aed" />
          <text x="190" y="88" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="system-ui,sans-serif">RabbitMQ Queue</text>

          {/* Fan-out */}
          <line x1="190" y1="102" x2="190" y2="116" stroke={A} strokeWidth="2" />
          <line x1="68" y1="116" x2="312" y2="116" stroke={A} strokeWidth="2" />
          {[68, 190, 312].map((x) => (
            <line key={x} x1={x} y1="116" x2={x} y2="148" stroke={A} strokeWidth="2" markerEnd="url(#wq-arr)" />
          ))}

          {/* Workers */}
          {['Worker 1', 'Worker 2', 'Worker 3'].map((label, i) => (
            <g key={label}>
              <rect x={23 + i * 122} y="150" width="90" height="36" rx="8" fill="#059669" />
              <text x={68 + i * 122} y="172" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="system-ui,sans-serif">{label}</text>
            </g>
          ))}

          <text x="190" y="194" textAnchor="middle" fill={A} fontSize="10" fontFamily="system-ui,sans-serif">
            Only one worker processes each job
          </text>
        </svg>
      </div>
      <figcaption className="mt-2 text-center text-sm text-muted-foreground">
        Worker queue: jobs distributed across available workers
      </figcaption>
    </figure>
  );
}
