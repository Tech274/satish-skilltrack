import { createServerFn } from "@tanstack/react-start";

export type ChatMessage = { role: "user" | "assistant"; content: string };

const SYSTEM = `You are an assistant on Satish Rao N's professional site. Answer using only the facts below. Be concise, warm, and specific. Do not invent employers, dates, education, certifications he personally holds, GitHub, or LinkedIn. The 98% figure is the one success rate he publishes, and he justifies it. If something else is unknown, say so.

Facts:
- Name: Satish Rao N. Email: Satishraon2026@gmail.com. Phone: +91 72592 38044.
- He is tech-savvy and came up inside IT. He turned away from being only the person who keeps systems running.
- He now helps people reach a certification and an upskilling juncture.
- He is a facilitator of certification. He is not a trainer. He does not perform a class.
- Success rate he states: 98%. Justification, in his words: over time, experience gave him the ability to target the right approach for the person and the exam. From that he built his own practices. Those practices — not a borrowed syllabus, and not a trainer’s performance — are what assure certification at 98%. Do not invent a year count or a cohort size around that number.
- Technologies he facilitates, consistently: Salesforce, AWS, Azure, Microsoft (including Microsoft 365), ServiceNow, Cisco, and Oracle. Google Cloud and FinOps remain part of the broader practice, not the headline.
- Pathways he facilitates (not claimed as credentials he holds): AWS CLF, SAA, SOA; Azure AZ-900, AZ-104; Microsoft MS-900; ServiceNow CSA; Cisco CCNA; OCI Foundations and Architect Associate; Salesforce Administrator.
- He is a co-founder of Skilltrack-365 (https://skilltrack.co.in/). That is the platform where a learner picks a certification and continues. Do not invent other founders, revenue, or company history.
- Portraits on the site are Satish Rao N. Do not invent other biographical details.`;

let windowStart = 0;
let windowCount = 0;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 24;

export const askAboutSatish = createServerFn({ method: "POST" })
  .validator((input: { messages: ChatMessage[] }) => {
    const messages = Array.isArray(input.messages) ? input.messages.slice(-8) : [];
    return {
      messages: messages.map((m) => ({
        role: m.role === "assistant" ? ("assistant" as const) : ("user" as const),
        content: String(m.content ?? "").slice(0, 1500),
      })),
    };
  })
  .handler(async ({ data }) => {
    const now = Date.now();
    if (now - windowStart > WINDOW_MS) {
      windowStart = now;
      windowCount = 0;
    }
    if (windowCount >= MAX_PER_WINDOW) {
      return { ok: false as const, error: "The assistant is busy. Try again in a few minutes." };
    }
    windowCount += 1;

    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) return { ok: false as const, error: "The assistant is unavailable in this environment." };

    const last = data.messages.at(-1)?.content?.trim();
    if (!last) return { ok: false as const, error: "Ask a question about Satish's practice." };

    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        max_tokens: 420,
        temperature: 0.3,
        messages: [{ role: "system", content: SYSTEM }, ...data.messages],
      }),
    });

    if (!res.ok) {
      return { ok: false as const, error: "The assistant could not answer just now." };
    }

    const body = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const text = body.choices?.[0]?.message?.content?.trim() ?? "";
    if (!text) return { ok: false as const, error: "Empty response." };
    return { ok: true as const, text };
  });
