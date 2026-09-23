import { useEffect, useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { Reveal, Section } from "@/components/layout/reveal";

const attention = [
  { d: "Mon", v: 42 },
  { d: "Tue", v: 55 },
  { d: "Wed", v: 48 },
  { d: "Thu", v: 70 },
  { d: "Fri", v: 64 },
  { d: "Sat", v: 30 },
  { d: "Sun", v: 28 },
];

const queues = [
  { label: "Clouds in the review", value: "AWS · Azure · GCP" },
  { label: "First question", value: "Who owns it?" },
  { label: "Then", value: "Is it tagged?" },
  { label: "Commitments", value: "After waste" },
];

export function OpsDashboard() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <Section
      id="ops"
      eyebrow="FinOps week"
      title="How I look at the bill."
      kicker="Not a live billing feed and not a savings claim. A model of the questions: owner, tag, waste, then commitment."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {queues.map((q) => (
          <Reveal key={q.label}>
            <article className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted">{q.label}</p>
              <p className="mt-3 font-display text-2xl">{q.value}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-4 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] md:p-6">
        <p className="text-[11px] uppercase tracking-[0.16em] text-muted">Attention on spend · illustrative, not a metric</p>
        <div className="mt-4 h-48">
          {mounted ? (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={attention} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="av" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.28} />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="d" tick={{ fill: "currentColor", fontSize: 11 }} stroke="transparent" />
                <Tooltip
                  contentStyle={{
                    background: "var(--surface)",
                    border: "none",
                    boxShadow: "var(--shadow-border)",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                />
                <Area type="monotone" dataKey="v" stroke="var(--primary)" fill="url(#av)" strokeWidth={1.6} />
              </AreaChart>
            </ResponsiveContainer>
          ) : null}
        </div>
      </Reveal>
    </Section>
  );
}
