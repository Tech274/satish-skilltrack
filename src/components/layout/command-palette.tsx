import { Command } from "cmdk";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useChrome } from "@/lib/chrome";
import { useTheme } from "@/lib/theme";
import { profile } from "@/data/site";
import { projects } from "@/data/projects";

export function CommandPalette() {
  const { paletteOpen, setPaletteOpen, setTerminalOpen, setAssistantOpen } = useChrome();
  const { toggle } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen(!paletteOpen);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [paletteOpen, setPaletteOpen]);

  const go = (path: string) => {
    setPaletteOpen(false);
    void navigate({ to: path });
  };

  if (!paletteOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[18vh]">
      <button
        type="button"
        className="absolute inset-0 bg-bg/70"
        aria-label="Close command palette"
        onClick={() => setPaletteOpen(false)}
      />
      <Command
        label="Command palette"
        className="relative z-10 w-full max-w-xl overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-elevated),var(--shadow-border)]"
      >
        <Command.Input
          autoFocus
          placeholder="Search work, pages, actions…"
          className="h-12 w-full border-b border-border bg-transparent px-4 text-sm text-fg outline-none placeholder:text-subtle"
        />
        <Command.List className="max-h-80 overflow-y-auto p-2">
          <Command.Empty className="px-3 py-6 text-sm text-muted">No results.</Command.Empty>
          <Command.Group heading="Go" className="px-1 py-1 text-[11px] uppercase tracking-[0.16em] text-muted">
            <Item onSelect={() => go("/")}>Home</Item>
            <Item onSelect={() => go("/work")}>Work</Item>
            <Item onSelect={() => go("/resume")}>Resume</Item>
            <Item onSelect={() => go("/journal")}>Journal</Item>
            <Item onSelect={() => go("/contact")}>Contact</Item>
          </Command.Group>
          <Command.Group heading="Work" className="px-1 py-1 text-[11px] uppercase tracking-[0.16em] text-muted">
            {projects.slice(0, 8).map((p) => (
              <Item key={p.slug} onSelect={() => go(`/work/${p.slug}`)}>
                {p.title}
              </Item>
            ))}
          </Command.Group>
          <Command.Group heading="Actions" className="px-1 py-1 text-[11px] uppercase tracking-[0.16em] text-muted">
            <Item
              onSelect={() => {
                setPaletteOpen(false);
                setTerminalOpen(true);
              }}
            >
              Open terminal
            </Item>
            <Item
              onSelect={() => {
                setPaletteOpen(false);
                setAssistantOpen(true);
              }}
            >
              Ask about Satish
            </Item>
            <Item
              onSelect={() => {
                setPaletteOpen(false);
                toggle();
              }}
            >
              Toggle theme
            </Item>
            <Item
              onSelect={() => {
                void navigator.clipboard.writeText(profile.email);
                setPaletteOpen(false);
              }}
            >
              Copy email
            </Item>
            <Item
              onSelect={() => {
                window.location.assign("/resume");
                setPaletteOpen(false);
              }}
            >
              Open résumé
            </Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}

function Item({ children, onSelect }: { children: string; onSelect: () => void }) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex cursor-pointer items-center rounded-md px-3 py-2.5 text-sm text-fg data-[selected=true]:bg-elevated"
    >
      {children}
    </Command.Item>
  );
}
