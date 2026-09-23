import { useMemo, useState } from "react";
import { Reveal, Section } from "@/components/layout/reveal";
import { cn } from "@/lib/utils";
import { topoEdges, topoNodes, type TopoNode } from "@/data/topology";

const groupLabel = {
  cloud: "Cloud",
  finops: "FinOps",
  platforms: "Platforms",
  upskill: "Upskilling",
} as const;

const columns: TopoNode["group"][] = ["cloud", "finops", "platforms", "upskill"];

export function Topology() {
  const [active, setActive] = useState("cost");
  const node = topoNodes.find((n) => n.id === active) ?? topoNodes[0];
  const byId = useMemo(() => new Map(topoNodes.map((n) => [n.id, n])), []);
  const connected = useMemo(() => {
    const set = new Set<string>();
    for (const [a, b] of topoEdges) {
      if (a === active) set.add(b);
      if (b === active) set.add(a);
    }
    return set;
  }, [active]);

  return (
    <Section
      id="topology"
      eyebrow="Estate"
      title="The map I teach from."
      kicker="Three hyperscalers, the bill, Oracle and Salesforce, and the pathway that makes it learnable. Select a node."
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-8">
          <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] md:p-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {columns.map((col) => (
                <div key={col}>
                  <p className="mb-3 text-[11px] uppercase tracking-[0.16em] text-muted">{groupLabel[col]}</p>
                  <ul className="space-y-2">
                    {topoNodes
                      .filter((n) => n.group === col)
                      .map((n) => {
                        const on = n.id === active;
                        const near = connected.has(n.id);
                        return (
                          <li key={n.id}>
                            <button
                              type="button"
                              onClick={() => setActive(n.id)}
                              className={cn(
                                "flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-left text-sm transition-colors duration-150",
                                on ? "bg-fg text-bg" : near ? "bg-elevated text-fg" : "text-muted hover:bg-elevated hover:text-fg",
                              )}
                            >
                              <span
                                className={cn(
                                  "size-1.5 shrink-0 rounded-full",
                                  on ? "bg-primary-fg" : "bg-primary",
                                )}
                              />
                              {n.label}
                            </button>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <aside className="lg:col-span-4">
          {node ? (
            <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted">{groupLabel[node.group]}</p>
              <h3 className="mt-2 text-xl font-medium">{node.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{node.detail}</p>
              <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-muted">Connected to</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[...connected].map((id) => {
                  const n = byId.get(id);
                  if (!n) return null;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setActive(id)}
                      className="rounded-full px-2.5 py-1 text-[11px] text-muted shadow-[var(--shadow-border)]"
                    >
                      {n.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}
        </aside>
      </div>
    </Section>
  );
}
