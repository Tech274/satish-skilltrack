import { useEffect } from "react";
import type { ReactNode } from "react";
import { SiteNav } from "@/components/layout/nav";
import { SiteFooter } from "@/components/layout/footer";
import { CommandPalette } from "@/components/layout/command-palette";
import { TerminalOverlay } from "@/components/layout/terminal";
import { AssistantDrawer } from "@/components/layout/assistant";
import { ChromeProvider, useChrome } from "@/lib/chrome";
import { ThemeProvider } from "@/lib/theme";

function EscapeListener() {
  const { paletteOpen, setPaletteOpen, terminalOpen, setTerminalOpen, assistantOpen, setAssistantOpen } =
    useChrome();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (paletteOpen) setPaletteOpen(false);
      else if (assistantOpen) setAssistantOpen(false);
      else if (terminalOpen) setTerminalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [paletteOpen, terminalOpen, assistantOpen, setPaletteOpen, setTerminalOpen, setAssistantOpen]);
  return null;
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <ChromeProvider>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-fg focus:px-3 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <SiteNav />
        <main id="main">{children}</main>
        <SiteFooter />
        <CommandPalette />
        <TerminalOverlay />
        <AssistantDrawer />
        <EscapeListener />
      </ChromeProvider>
    </ThemeProvider>
  );
}
