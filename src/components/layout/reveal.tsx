import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  kicker,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  kicker?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 px-5 py-24 md:px-8 md:py-32", className)}>
      <div className="mx-auto w-full max-w-6xl">
        {(eyebrow || title || kicker) && (
          <Reveal className="max-w-3xl">
            {eyebrow ? (
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="font-display mt-3 text-4xl text-fg md:text-5xl">{title}</h2>
            ) : null}
            {kicker ? <p className="mt-4 max-w-2xl text-base text-muted md:text-lg">{kicker}</p> : null}
          </Reveal>
        )}
        <div className={title || kicker || eyebrow ? "mt-12 md:mt-14" : undefined}>{children}</div>
      </div>
    </section>
  );
}
