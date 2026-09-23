import { useState } from "react";
import { ArrowUp, X } from "lucide-react";
import { useChrome } from "@/lib/chrome";
import { askAboutSatish, type ChatMessage } from "@/lib/ai/ask";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/layout/portrait";
import { profile } from "@/data/site";

const starters = [
  "Is Satish a trainer?",
  "Why does he say 98%?",
  "Which certifications does he facilitate?",
  "Why did he leave the IT desk?",
];

export function AssistantDrawer() {
  const { assistantOpen, setAssistantOpen } = useChrome();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!assistantOpen) return null;

  const send = async (text: string) => {
    const content = text.trim();
    if (!content || pending) return;
    const next = [...messages, { role: "user" as const, content }];
    setMessages(next);
    setInput("");
    setPending(true);
    setError(null);
    try {
      const res = await askAboutSatish({ data: { messages: next } });
      if (res.ok) {
        setMessages([...next, { role: "assistant", content: res.text }]);
      } else {
        setError(res.error);
      }
    } catch {
      setError("The assistant could not answer just now.");
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        type="button"
        className="absolute inset-0 bg-bg/70"
        aria-label="Close assistant"
        onClick={() => setAssistantOpen(false)}
      />
      <aside className="relative z-10 flex h-full w-full max-w-md flex-col bg-surface shadow-[var(--shadow-elevated)]">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-3">
            <Avatar src={profile.portraits.square} alt="" className="size-10" />
            <div>
              <p className="text-sm font-medium">Ask about Satish</p>
              <p className="mt-0.5 text-xs text-muted">Grounded in this site. No invented metrics or certs.</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="size-10" onClick={() => setAssistantOpen(false)} aria-label="Close">
            <X />
          </Button>
        </div>
        <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
          {messages.length === 0 ? (
            <div className="space-y-2">
              {starters.map((s) => (
                <button
                  key={s}
                  type="button"
                  className="block w-full rounded-md px-3 py-3 text-left text-sm text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
                  onClick={() => void send(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          ) : (
            messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-8 rounded-lg bg-elevated px-3 py-2 text-sm"
                    : "mr-4 text-sm leading-relaxed text-fg"
                }
              >
                {m.content}
              </div>
            ))
          )}
          {pending ? <p className="text-sm text-muted">Thinking…</p> : null}
          {error ? <p className="text-sm text-danger">{error}</p> : null}
        </div>
        <form
          className="border-t border-border p-4"
          onSubmit={(e) => {
            e.preventDefault();
            void send(input);
          }}
        >
          <div className="flex items-center gap-2 rounded-md bg-elevated px-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a recruiter question"
              className="h-11 flex-1 bg-transparent px-2 text-sm outline-none"
              aria-label="Question"
            />
            <Button type="submit" size="icon" className="size-9" disabled={pending} aria-label="Send">
              <ArrowUp />
            </Button>
          </div>
        </form>
      </aside>
    </div>
  );
}
