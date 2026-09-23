import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/layout/reveal";
import { articles } from "@/data/articles";

export const Route = createFileRoute("/journal/")({ component: JournalIndex });

function JournalIndex() {
  return (
    <Section
      eyebrow="Journal"
      title="Notes from production."
      kicker="Operating ideas from the queue — incidents, images, identity, and the path from the data center to cloud."
      className="pt-28"
    >
      <div className="grid gap-4">
        {articles.map((a) => (
          <Link
            key={a.slug}
            to="/journal/$slug"
            params={{ slug: a.slug }}
            className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-border-hover)] md:p-8"
          >
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
              {a.date} · {a.read} · {a.tags.join(" · ")}
            </p>
            <h2 className="mt-3 text-2xl font-medium">{a.title}</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted md:text-base">{a.dek}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
