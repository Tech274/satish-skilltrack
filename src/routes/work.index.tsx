import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/reveal";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { filters, projects, type ProjectFilter } from "@/data/projects";

export const Route = createFileRoute("/work/")({ component: WorkIndex });

function WorkIndex() {
  const [active, setActive] = useState<ProjectFilter>("all");
  const list = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.filters.includes(active))),
    [active],
  );

  return (
    <Section
      eyebrow="Work"
      title="Case studies from production."
      kicker="Cloud operations, virtualization, identity, storage, and the incident loop that holds them together."
      className="pt-28"
    >
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActive(f.id)}
            className={cn(
              "rounded-full px-3.5 py-2 text-sm transition-colors duration-150",
              active === f.id ? "bg-fg text-bg" : "text-muted shadow-[var(--shadow-border)] hover:text-fg",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {list.map((p) => (
          <Link
            key={p.slug}
            to="/work/$slug"
            params={{ slug: p.slug }}
            className="group overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)] transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-border-hover)]"
          >
            <img
              src={p.image}
              alt={p.imageAlt}
              className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="p-6">
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                {p.kicker} · {p.year}
              </p>
              <h2 className="mt-2 flex items-start justify-between gap-3 text-xl font-medium">
                {p.title}
                <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted" />
              </h2>
              <p className="mt-2 text-sm text-muted">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.slice(0, 3).map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
