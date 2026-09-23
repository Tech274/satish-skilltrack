import { useEffect, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { Section } from "@/components/layout/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { profile } from "@/data/site";
import { Portrait } from "@/components/layout/portrait";

const schema = z.object({
  name: z.string().min(2, "Please add your name"),
  email: z.string().email("A valid email is required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  position: z.string().optional(),
  project: z.string().optional(),
  subject: z.enum(["conversation", "interview", "resume", "other"]),
  message: z.string().min(12, "A little more context helps"),
});

type Values = z.infer<typeof schema>;

const subjects = {
  conversation: "Open a conversation",
  interview: "Interview request",
  resume: "Resume request",
  other: "Something else",
} as const;

function mailToSatish(values: Values) {
  const lines = [
    values.message.trim(),
    "",
    `From: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    values.phone?.trim() ? `Phone: ${values.phone.trim()}` : "",
    values.company?.trim() ? `Company: ${values.company.trim()}` : "",
    values.position?.trim() ? `Role: ${values.position.trim()}` : "",
    values.project?.trim() ? `Regarding: ${values.project.trim()}` : "",
  ].filter(Boolean);
  const subject = `${subjects[values.subject]} — ${values.name.trim()}`;
  return `${profile.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

export function ContactBlock({ standalone = false }: { standalone?: boolean }) {
  const [mailto, setMailto] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      position: "",
      project: "",
      subject: "conversation",
      message: "",
    },
  });

  const onSubmit = (values: Values) => {
    const href = mailToSatish(values);
    try {
      const key = "srn-inquiries";
      const prev = JSON.parse(localStorage.getItem(key) || "[]") as unknown[];
      localStorage.setItem(
        key,
        JSON.stringify([{ ...values, at: new Date().toISOString() }, ...prev].slice(0, 20)),
      );
    } catch {
      /* ignore */
    }
    setMailto(href);
    window.location.href = href;
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={standalone ? "Let’s talk about the pathway." : "Open a conversation."}
      kicker="A conversation about a certification path — Salesforce, AWS, Azure, Microsoft, ServiceNow, Cisco, or Oracle."
      className={standalone ? "pt-28" : undefined}
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Portrait
            src={profile.portraits.studio}
            alt="Satish Rao N"
            className="mb-8 max-w-[18rem] rounded-xl lg:max-w-none"
            imgClassName="aspect-[4/5]"
          />
          <p className="text-sm text-muted">Direct</p>
          <a href={profile.emailHref} className="mt-2 block text-lg font-medium hover:text-primary">
            {profile.email}
          </a>
          <a href={profile.phoneHref} className="mt-1 block text-lg font-medium hover:text-primary">
            {profile.phone}
          </a>
          <p className="mt-6 text-sm text-muted">{profile.headline}</p>
          <a href="/resume" className="mt-6 inline-block text-sm font-medium underline-offset-4 hover:underline">
            Read the practice résumé
          </a>
        </div>
        <div className="lg:col-span-8">
          {!mounted ? (
            <div className="min-h-64 rounded-xl bg-surface p-8 shadow-[var(--shadow-border)]" />
          ) : mailto ? (
            <div className="flex min-h-64 flex-col items-start justify-center rounded-xl bg-surface p-8 shadow-[var(--shadow-border)]">
              <span className="flex size-10 items-center justify-center rounded-full bg-fg text-bg">
                <Check className="size-5" />
              </span>
              <h3 className="mt-5 text-2xl font-medium">Ready to send.</h3>
              <p className="mt-2 max-w-md text-sm text-muted">
                Your email app should open a message to {profile.email}. Send it there and Satish has it. If nothing opened, use the link.
              </p>
              <a href={mailto} className="mt-6 text-sm font-medium text-primary underline-offset-4 hover:underline">
                Open email to Satish
              </a>
              <button
                type="button"
                className="mt-4 text-sm text-muted underline-offset-4 hover:underline"
                onClick={() => setMailto(null)}
              >
                Edit message
              </button>
            </div>
          ) : (
            <form
              className="grid gap-4 rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] md:grid-cols-2 md:p-8"
              onSubmit={form.handleSubmit(onSubmit)}
              noValidate
            >
              <Field label="Name" error={form.formState.errors.name?.message}>
                <Input {...form.register("name")} autoComplete="name" />
              </Field>
              <Field label="Email" error={form.formState.errors.email?.message}>
                <Input type="email" {...form.register("email")} autoComplete="email" />
              </Field>
              <Field label="Phone">
                <Input type="tel" {...form.register("phone")} autoComplete="tel" />
              </Field>
              <Field label="Company">
                <Input {...form.register("company")} autoComplete="organization" />
              </Field>
              <Field label="Your role">
                <Input {...form.register("position")} />
              </Field>
              <Field label="Role or project">
                <Input {...form.register("project")} />
              </Field>
              <div className="md:col-span-2">
                <Label htmlFor="subject">Subject</Label>
                <select
                  id="subject"
                  className="mt-1.5 flex h-11 w-full rounded-md bg-elevated px-3.5 text-sm shadow-[var(--shadow-border)]"
                  {...form.register("subject")}
                >
                  <option value="conversation">{subjects.conversation}</option>
                  <option value="interview">{subjects.interview}</option>
                  <option value="resume">{subjects.resume}</option>
                  <option value="other">{subjects.other}</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <Field label="Message" error={form.formState.errors.message?.message}>
                  <Textarea rows={5} {...form.register("message")} />
                </Field>
              </div>
              <div className="md:col-span-2 flex flex-col items-start gap-2">
                <Button type="submit" size="lg">
                  Send to Satish
                </Button>
                <p className="text-xs text-muted">Opens an email to {profile.email} with your message filled in.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      {children}
      {error ? <p className="text-xs text-danger">{error}</p> : null}
    </div>
  );
}
