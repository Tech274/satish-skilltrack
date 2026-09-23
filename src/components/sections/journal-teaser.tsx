import { Link } from "@tanstack/react-router";
import { Reveal, Section } from "@/components/layout/reveal";
import { articles } from "@/data/articles";

export function JournalTeaser() {
  return (
    <Section
      id="journal"
      eyebrow="Journal"
      title="Notes from the queue."
      kicker="Operating ideas, not vendor recaps."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {articles.map((a, i) => (
          <Reveal key={a.slug} delay={i * 0.04}>
            <Link
              to="/journal/$slug"
              params={{ slug: a.slug }}
              className="block h-full rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-border-hover)]"
            >
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                {a.date} · {a.read}
              </p>
              <h3 className="mt-3 text-xl font-medium">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{a.dek}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
