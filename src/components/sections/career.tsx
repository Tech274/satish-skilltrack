import { Reveal, Section } from "@/components/layout/reveal";
import { Badge } from "@/components/ui/badge";
import { education, timeline } from "@/data/timeline";

export function Career() {
  return (
    <Section
      id="career"
      eyebrow="Practice"
      title="Four lines. One habit."
      kicker="Experience, over time, is how he targets the right approach and why the practices he built himself assure certification at 98%."
    >
      <ol className="relative space-y-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border md:before:left-[11px]">
        {timeline.map((role, i) => (
          <li key={role.id} className="relative pl-8 md:pl-12">
            <span className="absolute left-0 top-2 size-4 rounded-full bg-surface shadow-[var(--shadow-border)] md:size-6">
              <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary md:size-2" />
            </span>
            <Reveal delay={i * 0.04}>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">{role.period}</p>
              <h3 className="mt-1 text-xl font-medium">{role.title}</h3>
              <p className="text-sm text-muted">
                {role.company} · {role.location}
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted md:text-base">{role.summary}</p>
              <ul className="mt-4 max-w-3xl space-y-2 text-sm text-fg">
                {role.highlights.map((h) => (
                  <li key={h} className="pl-4 before:absolute before:ml-[-1rem] before:text-muted before:content-['–'] relative">
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {role.stack.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      {education.length > 0 ? (
        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {education.map((e) => (
            <article key={e.title} className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted">{e.year}</p>
              <h3 className="mt-2 text-base font-medium">{e.title}</h3>
              <p className="mt-1 text-sm text-muted">{e.school}</p>
            </article>
          ))}
        </div>
      ) : null}
    </Section>
  );
}
