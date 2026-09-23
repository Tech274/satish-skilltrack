import { useState } from "react";
import { cn } from "@/lib/utils";

type Node = { id: string; label: string; x: number; y: number };

export function ArchitectureDiagram({
  nodes,
  edges,
  className,
}: {
  nodes: Node[];
  edges: [string, string][];
  className?: string;
}) {
  const [active, setActive] = useState<string | null>(nodes[0]?.id ?? null);
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const current = nodes.find((n) => n.id === active);

  return (
    <div className={cn("overflow-hidden rounded-xl bg-elevated", className)}>
      <svg viewBox="0 0 100 72" className="h-auto w-full" role="img" aria-label="Architecture diagram">
        {edges.map(([a, b]) => {
          const na = byId.get(a);
          const nb = byId.get(b);
          if (!na || !nb) return null;
          const lit = active === a || active === b;
          return (
            <line
              key={`${a}-${b}`}
              x1={na.x}
              y1={na.y * 0.72}
              x2={nb.x}
              y2={nb.y * 0.72}
              className={lit ? "stroke-primary" : "stroke-fg/20"}
              strokeWidth={lit ? 0.7 : 0.4}
            />
          );
        })}
        {nodes.map((n) => {
          const on = active === n.id;
          return (
            <g
              key={n.id}
              className="cursor-pointer"
              onClick={() => setActive(n.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(n.id);
                }
              }}
              tabIndex={0}
              role="button"
              aria-pressed={on}
              aria-label={n.label}
            >
              <circle
                cx={n.x}
                cy={n.y * 0.72}
                r={on ? 3.6 : 2.6}
                className={on ? "fill-primary" : "fill-surface stroke-fg/35"}
                strokeWidth={0.45}
              />
            </g>
          );
        })}
      </svg>
      <div className="flex flex-wrap gap-2 border-t border-border px-4 py-3">
        {nodes.map((n) => (
          <button
            key={n.id}
            type="button"
            onClick={() => setActive(n.id)}
            className={cn(
              "rounded-full px-2.5 py-1 text-[11px]",
              n.id === active ? "bg-fg text-bg" : "text-muted shadow-[var(--shadow-border)]",
            )}
          >
            {n.label}
          </button>
        ))}
      </div>
      {current ? (
        <p className="px-4 pb-4 text-sm text-muted">
          Selected: <span className="text-fg">{current.label}</span>
        </p>
      ) : null}
    </div>
  );
}
