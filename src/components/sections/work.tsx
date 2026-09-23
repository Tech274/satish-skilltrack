import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Section } from "@/components/layout/reveal";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { featuredProjects } from "@/data/projects";

export function FeaturedWork() {
  const items = featuredProjects();
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Experiences, written as systems."
      kicker="Each engagement is a production story: the problem, the constraint, the restore path, and what the estate looks like after."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((p, i) => {
          const featured = i === 0;
          return (
            <Reveal key={p.slug} delay={i * 0.04} className={featured ? "md:col-span-2" : undefined}>
              <Link
                to="/work/$slug"
                params={{ slug: p.slug }}
                className={cn(
                  "group overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)] transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-border-hover)]",
                  featured && "md:grid md:grid-cols-2",
                )}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    className="aspect-[16/10] h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-end p-6 md:p-8">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                    {p.kicker} · {p.year}
                  </p>
                  <h3 className="mt-2 flex items-start justify-between gap-3 text-2xl font-medium">
                    {p.title}
                    <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.slice(0, 4).map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
      <div className="mt-10">
        <Link to="/work" className="text-sm font-medium text-fg underline-offset-4 hover:underline">
          All case studies
        </Link>
      </div>
    </Section>
  );
}
