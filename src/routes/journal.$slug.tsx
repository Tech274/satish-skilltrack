import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { articleBySlug, articles } from "@/data/articles";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const article = articleBySlug(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <article className="px-5 pb-24 pt-28 md:px-8">
      <div className="mx-auto max-w-2xl">
        <Link to="/journal" className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
          <ArrowLeft className="size-4" />
          Journal
        </Link>
        <p className="mt-8 text-[11px] uppercase tracking-[0.18em] text-muted">
          {article.date} · {article.read}
        </p>
        <h1 className="font-display mt-4 text-4xl md:text-5xl">{article.title}</h1>
        <p className="mt-4 text-lg text-muted">{article.dek}</p>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-fg">
          {article.body.map((p) => (
            <p key={p.slice(0, 24)} className="text-muted">
              {p}
            </p>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl gap-3">
        {more.map((a) => (
          <Link
            key={a.slug}
            to="/journal/$slug"
            params={{ slug: a.slug }}
            className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]"
          >
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted">{a.date}</p>
            <p className="mt-1 font-medium">{a.title}</p>
          </Link>
        ))}
      </div>
    </article>
  );
}
