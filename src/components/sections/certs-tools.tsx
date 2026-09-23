import { Reveal, Section } from "@/components/layout/reveal";
import { roadmap, tools } from "@/data/site";

export function CertsTools() {
  return (
    <>
      <Section
        id="roadmap"
        eyebrow="Pathways"
        title="Certifications I build toward — for learners."
        kicker="These exams organise the upskilling work. None are claimed as credentials held. A badge goes on this page only when it is on file."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {roadmap.map((c, i) => (
            <Reveal key={c.code} delay={i * 0.03}>
              <article className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
                <p className="text-[11px] uppercase tracking-[0.16em] text-muted">{c.vendor}</p>
                <h3 className="mt-3 text-base font-medium">{c.name}</h3>
                <p className="mt-1 font-mono text-xs text-muted">{c.code}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section eyebrow="Platforms" title="The technologies, by name.">
        <div className="flex flex-wrap gap-2">
          {tools.map((t) => (
            <span
              key={t}
              className="rounded-full px-3.5 py-2 text-sm text-fg shadow-[var(--shadow-border)]"
            >
              {t}
            </span>
          ))}
        </div>
      </Section>
    </>
  );
}
