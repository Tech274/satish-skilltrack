import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { skilltrack } from "@/data/site";

const marks = {
  oracle: (
    <span className="font-black tracking-tight text-[#C74634]" style={{ fontSize: "1.35rem" }}>
      ORACLE
    </span>
  ),
  aws: (
    <span className="relative inline-flex flex-col items-center">
      <span className="text-[1.65rem] font-semibold leading-none tracking-tight text-[#232F3E]">aws</span>
      <svg viewBox="0 0 64 16" className="mt-0.5 h-3 w-14" aria-hidden="true">
        <path d="M4 4c10 12 46 12 56 0" fill="none" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" />
        <path d="M54 2l8 3-6 5" fill="none" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  ),
  azure: (
    <svg viewBox="0 0 32 32" className="h-9 w-9" aria-hidden="true">
      <path fill="#0078D4" d="M13.2 3.2 27.6 28H18l-2.2-5.2H9.4L13.2 3.2z" />
      <path fill="#50E6FF" d="M3.5 28 12.2 16.4 17.2 28H3.5z" />
    </svg>
  ),
  microsoft: (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
      <rect x="1" y="1" width="10" height="10" fill="#F25022" />
      <rect x="13" y="1" width="10" height="10" fill="#7FBA00" />
      <rect x="1" y="13" width="10" height="10" fill="#00A4EF" />
      <rect x="13" y="13" width="10" height="10" fill="#FFB900" />
    </svg>
  ),
  salesforce: (
    <svg viewBox="0 0 72 40" className="h-9 w-16" aria-hidden="true">
      <path
        fill="#00A1E0"
        d="M22 30h28a10 10 0 0 0 1.6-19.8A12 12 0 0 0 30 8a11 11 0 0 0-16.2 8.2A8 8 0 0 0 16 30h6z"
      />
    </svg>
  ),
  servicenow: (
    <span className="text-[1.15rem] font-semibold tracking-tight text-[#293E40]">
      service<span className="text-[#62D84E]">now</span>
    </span>
  ),
  cisco: (
    <svg viewBox="0 0 72 28" className="h-7 w-16" aria-hidden="true">
      <g fill="#1BA0D7">
        <rect x="2" y="16" width="4" height="10" rx="0.5" />
        <rect x="8" y="12" width="4" height="14" rx="0.5" />
        <rect x="14" y="8" width="4" height="18" rx="0.5" />
        <rect x="20" y="5" width="4" height="21" rx="0.5" />
        <rect x="26" y="8" width="4" height="18" rx="0.5" />
        <path d="M32 18c6-10 16-10 22 0v8H32V18z" />
        <rect x="56" y="10" width="4" height="16" rx="0.5" />
        <rect x="62" y="14" width="4" height="12" rx="0.5" />
      </g>
    </svg>
  ),
} as const;

const platforms = [
  { id: "salesforce", name: "Salesforce" },
  { id: "aws", name: "AWS" },
  { id: "azure", name: "Azure" },
  { id: "microsoft", name: "Microsoft" },
  { id: "servicenow", name: "ServiceNow" },
  { id: "cisco", name: "Cisco" },
  { id: "oracle", name: "Oracle" },
] as const;

export function PlatformRail() {
  return (
    <section className="border-b border-border bg-bg px-5 py-10 md:px-8" aria-label="Platforms">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">Platforms learners recognise</p>
        <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
          {platforms.map((p) => (
            <li
              key={p.id}
              className="flex h-28 flex-col items-center justify-center gap-2 rounded-xl bg-white px-3 text-[#0b2545] shadow-[var(--shadow-border)]"
            >
              <span className="flex h-10 items-center justify-center">{marks[p.id]}</span>
              <span className="text-xs font-medium text-[#0b2545]">{p.name}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-2xl text-xs text-muted">
          The marks name the technologies Satish facilitates. They are not a partnership, a badge he holds, or an official endorsement.
        </p>
      </div>
    </section>
  );
}

export function SkilltrackNext() {
  return (
    <section className="px-5 py-8 md:px-8" aria-label="Skilltrack-365">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] md:flex-row md:items-center md:p-8">
        <img
          src={skilltrack.mark}
          alt="Skilltrack-365. Learn, grow, succeed."
          className="h-24 w-auto max-w-[16rem] shrink-0 rounded-lg bg-white object-contain md:h-28"
        />
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
            {skilltrack.role} · The next step
          </p>
          <h2 className="font-display mt-2 text-3xl text-fg md:text-4xl">Keep moving on Skilltrack-365.</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            This page is Satish. Skilltrack-365 is the platform he co-founded. Pick the certification there, then keep going. {skilltrack.line}.
          </p>
        </div>
        <Button asChild size="lg" variant="accent" className="shrink-0">
          <a href={skilltrack.url} target="_blank" rel="noreferrer">
            Continue
            <ArrowUpRight />
          </a>
        </Button>
      </div>
    </section>
  );
}
