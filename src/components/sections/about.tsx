import { Reveal, Section } from "@/components/layout/reveal";
import { Portrait } from "@/components/layout/portrait";
import { principles, profile, values } from "@/data/site";

const gallery = [
  {
    src: profile.portraits.office,
    alt: "Satish Rao N at his desk",
    caption: "Practice",
  },
  {
    src: profile.portraits.shirt,
    alt: "Satish Rao N in the study",
    caption: "FinOps",
  },
  {
    src: profile.portraits.event,
    alt: "Satish Rao N with a laptop",
    caption: "Cloud",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="I turned away from the IT desk."
      kicker="Tech-savvy, still. The work now is other people — getting them to a certification, and to the moment the skill actually arrives."
    >
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <div className="space-y-5 text-base leading-relaxed text-muted md:text-[1.05rem]">
            <p>
              I grew up in IT. The tickets, the consoles, the late fixes. I am still that person in the tools — Salesforce, AWS, Azure, Microsoft, ServiceNow, Cisco, Oracle. What changed is who the work is for.
            </p>
            <p>
              I turned my back on being only the IT seat. I facilitate certifications. I am not a trainer, and I do not perform a class. I walk someone to the upskilling juncture: the path, the lab, the stall, the exam.
            </p>
            <p>
              The 98% is not a slogan. Over time, the work taught me how to target the right approach for the person and the exam — not a generic plan. From that experience I built my own practices. Those practices are what assure certification at 98%.
            </p>
            <p>
              The technologies change. The habit does not. If I cannot open the console with them, I am not facilitating. I am announcing. The place that path continues is Skilltrack-365. I am a co-founder.
            </p>
          </div>
          <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.18em] text-muted">How I work</p>
          <ul className="mt-4 space-y-3">
            {principles.map((p) => (
              <li key={p} className="relative border-l border-primary/50 pl-4 text-sm text-fg">
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="lg:col-span-5" delay={0.08}>
          <figure>
            <div className="rounded-xl p-1.5 shadow-[var(--shadow-border)]">
              <Portrait
                src={profile.portraits.office}
                alt="Satish Rao N, certification facilitator"
                className="rounded-lg"
                imgClassName="aspect-[4/5]"
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
              <span className="text-fg">{profile.name}</span>
              <span>Own practices · 98%</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-3 gap-2 md:gap-4">
        {gallery.map((g, i) => (
          <Reveal key={g.src} delay={i * 0.05}>
            <figure>
              <img src={g.src} alt={g.alt} className="aspect-[3/4] w-full rounded-lg object-cover md:rounded-xl" />
              <figcaption className="mt-2 text-[11px] uppercase tracking-[0.16em] text-muted">{g.caption}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.05}>
            <article className="h-full rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
              <h3 className="text-base font-medium">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
