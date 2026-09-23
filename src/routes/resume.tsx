import { createFileRoute } from "@tanstack/react-router";
import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/site";
import { Avatar } from "@/components/layout/portrait";
import { education, timeline } from "@/data/timeline";
import { skillGroups } from "@/data/skills";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/resume")({ component: ResumePage });

function ResumePage() {
  return (
    <div className="px-5 pb-24 pt-28 md:px-8">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-center gap-5">
          <Avatar src={profile.portraits.square} alt="Satish Rao N" className="size-20 rounded-xl" />
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Resume</p>
            <h1 className="font-display mt-2 text-4xl md:text-5xl">{profile.name}</h1>
            <p className="mt-2 text-muted">{profile.headline}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => window.print()}>
            <Printer />
            Print
          </Button>
        </div>
      </div>

      <article className="mx-auto mt-12 max-w-4xl rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] md:p-10 print:shadow-none">
        <header className="border-b border-border pb-6">
          <p className="text-sm text-muted">
            {profile.email} · {profile.phone}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fg">{profile.summary}</p>
        </header>

        <section className="mt-8">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">Practice</h2>
          <div className="mt-5 space-y-8">
            {timeline.map((r) => (
              <div key={r.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-medium">
                    {r.title} · {r.company}
                  </h3>
                  <p className="text-xs text-muted">{r.period}</p>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-muted">
                  {r.highlights.map((h) => (
                    <li key={h}>– {h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">Selected work</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {projects
              .filter((p) => p.featured)
              .map((p) => (
                <li key={p.slug}>
                  <span className="font-medium">{p.title}.</span>{" "}
                  <span className="text-muted">{p.summary}</span>
                </li>
              ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">Capabilities</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {skillGroups
              .filter((g) => g.id !== "future")
              .flatMap((g) => g.items)
              .filter((i) => i.level === "production" || i.level === "strong")
              .map((i) => (
                <Badge key={i.name}>{i.name}</Badge>
              ))}
          </div>
        </section>

        {education.length > 0 ? (
          <section className="mt-10">
            <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">Education</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {education.map((e) => (
                <li key={e.title}>
                  <span className="font-medium">{e.title}</span>
                  <span className="text-muted">
                    {" "}
                    — {e.school} ({e.year})
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </article>
    </div>
  );
}
