import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { ArchitectureDiagram } from "@/components/layout/architecture";
import { Badge } from "@/components/ui/badge";
import { projectBySlug, projects } from "@/data/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: CaseStudy,
});

function CaseStudy() {
  const { project } = Route.useLoaderData();
  const more = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <article className="pt-24">
      <div className="hero-scene relative">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-[42vh] min-h-72 w-full object-cover md:h-[52vh]"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-5 pb-10 md:px-8">
          <Link to="/work" className="inline-flex items-center gap-2 text-sm text-[color:var(--hero-muted)] hover:text-[color:var(--hero-fg)]">
            <ArrowLeft className="size-4" />
            All work
          </Link>
          <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-[color:var(--hero-muted)]">
            {project.kicker} · {project.year}
          </p>
          <h1 className="font-display mt-3 max-w-4xl text-4xl text-[color:var(--hero-fg)] md:text-6xl">{project.title}</h1>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="space-y-10 md:col-span-7">
          <Block title="The problem" body={project.problem} />
          <Block title="The constraint" body={project.challenge} />
          <Block title="The approach" body={project.solution} />
        </div>
        <aside className="md:col-span-5">
          <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted">Stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
            <p className="mt-8 text-[11px] uppercase tracking-[0.16em] text-muted">After</p>
            <ul className="mt-3 space-y-2 text-sm text-fg">
              {project.impact.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-8 md:px-8">
        <h2 className="text-xl font-medium">Architecture</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">A simplified map of the system in this story. Select a node.</p>
        <ArchitectureDiagram nodes={project.architecture} edges={project.edges} className="mt-6" />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <h2 className="text-xl font-medium">What it taught</h2>
        <ul className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-muted md:text-base">
          {project.lessons.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-6xl border-t border-border px-5 py-16 md:px-8">
        <p className="text-[11px] uppercase tracking-[0.16em] text-muted">Continue</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {more.map((p) => (
            <Link
              key={p.slug}
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
            >
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted">{p.kicker}</p>
              <h3 className="mt-2 font-medium">{p.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <h2 className="text-xl font-medium">{title}</h2>
      <p className="mt-3 text-base leading-relaxed text-muted">{body}</p>
    </section>
  );
}
