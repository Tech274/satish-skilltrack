import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type ChromeState = {
  paletteOpen: boolean;
  terminalOpen: boolean;
  assistantOpen: boolean;
  setPaletteOpen: (v: boolean) => void;
  setTerminalOpen: (v: boolean) => void;
  setAssistantOpen: (v: boolean) => void;
};

const ChromeContext = createContext<ChromeState | null>(null);

export function ChromeProvider({ children }: { children: ReactNode }) {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(false);

  const value = useMemo(
    () => ({
      paletteOpen,
      terminalOpen,
      assistantOpen,
      setPaletteOpen,
      setTerminalOpen,
      setAssistantOpen,
    }),
    [paletteOpen, terminalOpen, assistantOpen],
  );

  return <ChromeContext.Provider value={value}>{children}</ChromeContext.Provider>;
}

export function useChrome() {
  const ctx = useContext(ChromeContext);
  if (!ctx) throw new Error("useChrome must be used within ChromeProvider");
  return ctx;
}
