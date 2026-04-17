const QUESTIONS = [
  { q: 'Do multiple independent services need the same events?', answer: 'Kafka',    color: 'bg-violet-600' },
  { q: 'Do you need to replay events later or audit history?',   answer: 'Kafka',    color: 'bg-violet-600' },
  { q: 'Is throughput > 100k msg/s?',                            answer: 'Kafka',    color: 'bg-violet-600' },
  { q: 'Do you need complex routing (topic patterns, headers)?', answer: 'RabbitMQ', color: 'bg-emerald-600' },
  { q: 'Do you need request-reply (RPC-over-messaging)?',        answer: 'RabbitMQ', color: 'bg-emerald-600' },
  { q: 'Is the message a task with a natural "done" state?',     answer: 'RabbitMQ', color: 'bg-emerald-600' },
  { q: 'Do you need sub-millisecond latency?',                   answer: 'RabbitMQ', color: 'bg-emerald-600' },
];

export function DecisionFlowchart() {
  return (
    <div className="not-prose my-8 rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="border-b border-border bg-muted/40 px-5 py-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Decision guide — answer top to bottom</p>
      </div>
      <div className="divide-y divide-border">
        {QUESTIONS.map(({ q, answer, color }) => (
          <div key={q} className="flex items-center gap-4 px-5 py-3">
            <span className="shrink-0 text-sm text-muted-foreground">?</span>
            <p className="flex-1 text-sm">{q}</p>
            <span className={`shrink-0 rounded-md px-2.5 py-1 text-xs font-bold text-white ${color}`}>
              YES → {answer}
            </span>
          </div>
        ))}
        <div className="flex items-start gap-4 bg-muted/30 px-5 py-4">
          <span className="shrink-0 text-sm text-muted-foreground mt-0.5">↓</span>
          <p className="text-sm">
            <span className="font-semibold">None of the above?</span> Default to{' '}
            <span className="font-bold text-emerald-600 dark:text-emerald-400">RabbitMQ</span> — it&apos;s simpler to operate.
            Reach for <span className="font-bold text-violet-600 dark:text-violet-400">Kafka</span> when you know the event
            log will become valuable later (replay, audit, new consumers).
          </p>
        </div>
      </div>
    </div>
  );
}
