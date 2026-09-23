import { useEffect, useRef, useState } from "react";
import { useChrome } from "@/lib/chrome";
import { profile, tools } from "@/data/site";
import { timeline } from "@/data/timeline";
import { skillGroups } from "@/data/skills";
import { projects } from "@/data/projects";

type Line = { kind: "in" | "out" | "sys"; text: string };

const help = [
  "whoami          name, role, location",
  "uptime          years in production",
  "experience      career timeline",
  "skills          production skill groups",
  "projects        featured work",
  "contact         email and phone",
  "tools           platforms",
  "cat resume      resume path",
  "clear           clear screen",
  "exit            close terminal",
];

function run(cmd: string): string[] {
  const c = cmd.trim().toLowerCase();
  if (!c) return [];
  if (c === "help" || c === "ls") return help;
  if (c === "whoami")
    return [
      `${profile.name}`,
      profile.headline,
      profile.location,
      profile.tagline.replace("\n", " "),
    ];
  if (c === "uptime") return ["Facilitator, not a trainer · own practices · 98% assured · Salesforce · AWS · Azure · Microsoft · ServiceNow · Cisco · Oracle"];
  if (c === "experience")
    return timeline.map((r) => `${r.period}  ${r.title} — ${r.company}`);
  if (c === "skills")
    return skillGroups
      .filter((g) => g.id !== "future")
      .map((g) => `${g.title}: ${g.items.map((i) => i.name).join(", ")}`);
  if (c === "projects") return projects.map((p) => `${p.slug}  —  ${p.title}`);
  if (c === "contact") return [profile.email, profile.phone, profile.location];
  if (c === "tools") return [tools.join("  ")];
  if (c === "cat resume" || c === "resume") return [profile.resumeHref];
  if (c === "date") return [new Date().toUTCString()];
  return [`command not found: ${cmd}  —  type help`];
}

export function TerminalOverlay() {
  const { terminalOpen, setTerminalOpen } = useChrome();
  const [lines, setLines] = useState<Line[]>([
    { kind: "sys", text: "srn@cloud — type help" },
  ]);
  const [value, setValue] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "`" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const tag = (e.target as HTMLElement | null)?.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA") return;
        e.preventDefault();
        setTerminalOpen(!terminalOpen);
      }
      if (e.key === "Escape" && terminalOpen) setTerminalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [terminalOpen, setTerminalOpen]);

  useEffect(() => {
    if (terminalOpen) {
      inputRef.current?.focus();
      endRef.current?.scrollIntoView({ block: "end" });
    }
  }, [terminalOpen, lines]);

  if (!terminalOpen) return null;

  const submit = () => {
    const cmd = value;
    if (cmd.trim().toLowerCase() === "exit") {
      setValue("");
      setTerminalOpen(false);
      return;
    }
    if (cmd.trim().toLowerCase() === "clear") {
      setLines([{ kind: "sys", text: "srn@cloud — type help" }]);
      setValue("");
      return;
    }
    const out = run(cmd);
    setLines((prev) => [
      ...prev,
      { kind: "in", text: `λ ${cmd}` },
      ...out.map((text) => ({ kind: "out" as const, text })),
    ]);
    setValue("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 md:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-bg/70"
        aria-label="Close terminal"
        onClick={() => setTerminalOpen(false)}
      />
      <div className="relative z-10 flex h-[min(560px,80vh)] w-full max-w-2xl flex-col overflow-hidden rounded-xl bg-[#0b0d10] text-[#d7dde6] shadow-[var(--shadow-elevated)]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <p className="font-mono text-[11px] tracking-[0.14em] text-[#8b939e]">TERMINAL · SRN</p>
          <button type="button" className="text-xs text-[#8b939e]" onClick={() => setTerminalOpen(false)}>
            close
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-3 font-mono text-[13px] leading-relaxed">
          {lines.map((l, i) => (
            <pre
              key={i}
              className={
                l.kind === "in" ? "mt-3 text-[#5b9dff]" : l.kind === "sys" ? "text-[#8b939e]" : "text-[#d7dde6]"
              }
            >
              {l.text}
            </pre>
          ))}
          <div ref={endRef} />
        </div>
        <form
          className="flex items-center gap-2 border-t border-white/10 px-4 py-3"
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <span className="font-mono text-[13px] text-[#5b9dff]">λ</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="h-8 flex-1 bg-transparent font-mono text-[13px] text-[#d7dde6] outline-none"
            aria-label="Terminal command"
            autoComplete="off"
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
}
