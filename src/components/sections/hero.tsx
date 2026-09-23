import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Portrait } from "@/components/layout/portrait";
import { profile, stats } from "@/data/site";

function useTyped(words: string[], enabled: boolean) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [dir, setDir] = useState<"in" | "out">("in");

  useEffect(() => {
    if (!enabled) {
      setText(words[0] ?? "");
      return;
    }
    const word = words[index % words.length] ?? "";
    if (dir === "in") {
      if (text === word) {
        const t = window.setTimeout(() => setDir("out"), 1600);
        return () => window.clearTimeout(t);
      }
      const t = window.setTimeout(() => setText(word.slice(0, text.length + 1)), 38);
      return () => window.clearTimeout(t);
    }
    if (text.length === 0) {
      setIndex((i) => i + 1);
      setDir("in");
      return;
    }
    const t = window.setTimeout(() => setText(word.slice(0, text.length - 1)), 22);
    return () => window.clearTimeout(t);
  }, [text, dir, index, words, enabled]);

  return text;
}

export function Hero() {
  const reduce = useReducedMotion();
  const typed = useTyped(profile.roles, !reduce);

  return (
    <section className="hero-scene relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <img
        src="/images/cloud-campus.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="hero-veil absolute inset-0" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-28">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <motion.p
              className="text-[11px] font-medium uppercase tracking-[0.24em] text-[color:var(--hero-muted)]"
              initial={reduce ? false : { opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Facilitator · Not a trainer
            </motion.p>
            <motion.h1
              className="font-display mt-5 max-w-xl text-4xl leading-[0.98] text-[color:var(--hero-fg)] sm:text-5xl md:text-6xl lg:text-7xl"
              initial={reduce ? false : { opacity: 0, y: 14, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              Satish Rao N
            </motion.h1>
            <motion.p
              className="mt-6 max-w-xl text-base text-[color:var(--hero-muted)] md:text-lg"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
            >
              Helping people arrive at the certification. Satish left the IT desk to facilitate certifications — Salesforce, AWS, Azure, Microsoft, ServiceNow, Cisco, and Oracle. Experience taught him the right approach. The practices he built from it assure 98%.
            </motion.p>
            <motion.p
              className="mt-4 h-7 font-mono text-sm text-[color:var(--hero-fg)]"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.22 }}
            >
              <span className="text-[color:var(--hero-muted)]">role/</span>
              {typed}
              <span className="ml-0.5 inline-block h-4 w-px translate-y-0.5 bg-[color:var(--hero-fg)]" />
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.45 }}
            >
              <Button asChild size="lg">
                <Link to="/work">View work</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-0 bg-[color:var(--hero-fg)]/8 text-[color:var(--hero-fg)] shadow-[0_0_0_1px_rgba(255,255,255,0.16)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.28)]"
              >
                <Link to="/resume">
                  <Download />
                  Resume
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-[color:var(--hero-fg)] hover:bg-[color:var(--hero-fg)]/8 hover:text-[color:var(--hero-fg)]"
              >
                <Link to="/contact">Contact</Link>
              </Button>
            </motion.div>
          </div>

          <motion.figure
            className="order-1 mx-auto w-[min(100%,15.25rem)] lg:order-2 lg:col-span-5 lg:mx-0 lg:w-full"
            initial={reduce ? false : { opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-xl bg-[color:var(--hero-fg)]/8 p-1.5 shadow-[var(--shadow-elevated)]">
              <Portrait
                src={profile.portraits.shirt}
                alt="Satish Rao N, certification facilitator"
                className="rounded-lg"
                imgClassName="aspect-[4/5]"
                priority
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-3 text-[color:var(--hero-muted)]">
              <span className="text-sm font-medium text-[color:var(--hero-fg)]">{profile.name}</span>
              <span className="text-xs tracking-wide">Salesforce · AWS · Azure · Oracle</span>
            </figcaption>
          </motion.figure>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-[color:var(--hero-fg)]/12 pt-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--hero-muted)]">{s.label}</dt>
              <dd className="mt-2 font-display text-2xl text-[color:var(--hero-fg)]">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a
        href="#about"
        className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[color:var(--hero-muted)] xl:flex"
      >
        Scroll
        <ArrowDown className="size-3.5" />
      </a>
    </section>
  );
}
