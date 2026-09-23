import { useState } from "react";
import { Reveal, Section } from "@/components/layout/reveal";
import { cn } from "@/lib/utils";
import { levelCopy, skillGroups, type SkillLevel } from "@/data/skills";

const bar: Record<SkillLevel, string> = {
  production: "w-[94%]",
  strong: "w-[78%]",
  working: "w-[58%]",
  learning: "w-[34%]",
};

export function Skills() {
  const [open, setOpen] = useState(skillGroups[0]?.id ?? "windows");
  const active = skillGroups.find((g) => g.id === open) ?? skillGroups[0];

  return (
    <Section
      id="skills"
      eyebrow="Expertise"
      title="What I run, and what I am adding."
      kicker="Production skills from daily operations. An honest learning track for automation — not a list of logos I have hovered over."
    >
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="flex flex-wrap gap-2 lg:col-span-4 lg:flex-col lg:items-stretch">
          {skillGroups.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setOpen(g.id)}
              className={cn(
                "rounded-md px-4 py-3 text-left text-sm transition-colors duration-150",
                open === g.id ? "bg-fg text-bg" : "text-muted hover:bg-elevated hover:text-fg",
              )}
            >
              {g.title}
            </button>
          ))}
        </div>
        <Reveal className="lg:col-span-8">
          {active ? (
            <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] md:p-8">
              <h3 className="text-xl font-medium">{active.title}</h3>
              <p className="mt-2 text-sm text-muted">{active.blurb}</p>
              <ul className="mt-8 space-y-5">
                {active.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-baseline justify-between gap-3 text-sm">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs text-muted">{levelCopy[item.level]}</span>
                    </div>
                    <div className="mt-2 h-1 rounded-full bg-elevated">
                      <div className={cn("h-1 rounded-full bg-primary", bar[item.level])} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Reveal>
      </div>
    </Section>
  );
}
