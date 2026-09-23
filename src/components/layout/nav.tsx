import { Link, useRouterState } from "@tanstack/react-router";
import { Command, Moon, Sun, TerminalSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/layout/portrait";
import { useChrome } from "@/lib/chrome";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { profile } from "@/data/site";

const links = [
  { to: "/", hash: "about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/resume", label: "Resume" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const { setPaletteOpen, setTerminalOpen, setAssistantOpen } = useChrome();
  const { theme, toggle } = useTheme();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 bg-bg/80 shadow-[var(--shadow-border)] backdrop-blur-md transition-[background-color] duration-200",
        open && "bg-bg",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 md:h-[4.25rem] md:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Home">
          <Avatar src={profile.portraits.square} alt="" className="size-9" />
          <span className="hidden text-sm font-medium tracking-tight text-fg sm:block">
            {profile.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((l) => {
            const active = l.to !== "/" && pathname.startsWith(l.to);
            return (
              <Link
                key={l.label}
                to={l.to}
                hash={"hash" in l ? l.hash : undefined}
                className={cn(
                  "rounded-sm px-3 py-2 text-sm text-muted transition-colors duration-150 hover:text-fg",
                  active && "text-fg",
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="size-10"
            aria-label="Open command palette"
            onClick={() => setPaletteOpen(true)}
          >
            <Command />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-10"
            aria-label="Open terminal"
            onClick={() => setTerminalOpen(true)}
          >
            <TerminalSquare />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-10"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            onClick={toggle}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="hidden md:inline-flex"
            onClick={() => setAssistantOpen(true)}
          >
            Ask
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">Contact</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-4 flex-col gap-1.5">
              <span className={cn("h-px w-full bg-fg transition-transform", open && "translate-y-1 rotate-45")} />
              <span className={cn("h-px w-full bg-fg transition-transform", open && "-translate-y-1 -rotate-45")} />
            </span>
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-bg px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                hash={"hash" in l ? l.hash : undefined}
                className="rounded-md px-3 py-3 text-base text-fg"
              >
                {l.label}
              </Link>
            ))}
            <button
              type="button"
              className="rounded-md px-3 py-3 text-left text-base text-fg"
              onClick={() => {
                setOpen(false);
                setAssistantOpen(true);
              }}
            >
              Ask about Satish
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
