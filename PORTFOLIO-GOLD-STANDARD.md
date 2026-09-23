# Portfolio Gold Standard

**Paste this first in a new Grok Build chat. Then paste the Subject Packet.**
Do not clone Chethan Kumar G. Clone the *bar*. Each site is a new person.

Shipped reference (Sep 2026): editorial engineer portfolio — recruiter-grade in 30 seconds, honest ops voice, systems thinking, portraits as product, no fake credentials.

---

## 0. How to use

1. This file = product doctrine. Non-negotiable.
2. Next message = **Subject Packet** (template at the end). Resume, photos, facts.
3. Build one site. Do not ask the user for ports, stacks, or screenshots.
4. Speak in product terms. Leave the preview running.

If the packet is incomplete: build from the resume as source of truth, mark gaps, **never invent**.

---

## 1. What this product is

A **hiring instrument**. Not a résumé in a tuxedo. Not a Dribbble shot. Not a personal brand playground.

A senior recruiter / hiring manager, cold, on a phone, must in **30 seconds**:

1. See the person (face).
2. Know the craft in one sentence.
3. Know the level (years, domain, seniority).
4. Trust the work is real.
5. Find Resume + Contact without hunting.

If any of those fail, the site fails.

**Positioning:** one specific craft, one specific level, one city. Not “full stack + AI + leader + creator.”

---

## 2. Hard rules (break these and it is not this bar)

**Truth**
- Resume and the user’s words are canon. Paraphrase; do not inflate.
- No certifications, logos, employers, titles, metrics, clients, or tools that are not in the packet.
- Learning / studying / roadmap ≠ earned. Label it **Roadmap**.
- No fake dashboards of “real” production numbers. If you show a chart, label it **illustrative** and make the copy the point.
- No testimonials you were not given.
- No LinkedIn / GitHub / social links you were not given.

**Voice**
- Short sentences. Concrete nouns. Verbs of ownership (`own`, `restore`, `standardise`, `ship`).
- No: passionate, results-driven, leveraging, synergy, ninja, rockstar, “I thrive”, “dynamic environment”, emoji, exclamation.
- No generic “About me”: hobbies, “when I’m not coding”, stock mission statements.
- First person in About / Journal. Hero may use the name in third person once, then work.
- Impact without invented numbers: describe the *change in the system*, not a fake SLA.

**Craft over decoration**
- Every module must teach the hiring manager how this person thinks.
- Chrome (command palette, terminal, AI assistant) is allowed **only if it is native to the craft**. Infra/SRE/dev → yes. Chef / architect / schoolteacher → no, unless the packet asks.
- AI assistant, if present, is **grounded in the resume**. Refuse invented metrics. Say so in the UI.

---

## 3. Information architecture

**Routes (keep this skeleton, rename to the craft):**

| Route | Job |
|---|---|
| `/` | Hire-me narrative, in order below |
| `/work` | Filterable case studies |
| `/work/:slug` | One system: problem → challenge → solution → impact → lessons → stack |
| `/resume` | Printable, downloadable PDF + HTML twin |
| `/journal` | 3–5 original essays in their voice (not SEO blog) |
| `/journal/:slug` | Full essay |
| `/contact` | Direct email + phone + form |

**Homepage sequence (do not shuffle):**

1. **Hero** — face + one-line craft + primary CTAs (Work, Resume, Contact) + 4 true stats
2. **About** — 3 short paragraphs + “how I work” principles + portraits
3. **Career** — timeline, newest first, ownership not task lists
4. **Skills** — grouped, **levelled** (`production` / `strong` / `working` / `learning`). Never a flat logo soup.
5. **Featured work** — 2–3 case studies
6. **Systems module** — craft-specific (see §7)
7. **Roadmap + tools** — honest
8. **Journal teaser** — 3 essays
9. **Contact**

Nav: name + circular portrait, links, theme toggle, (optional) command palette. Footer: portrait, one-liner, contact, back-to-top.

---

## 4. Visual system (lock this)

**Type**
- Display: *Instrument Serif* (or equivalent editorial serif). Headlines only. Weight 400. Tracking tight. Line-height ~1.08.
- Body: *Inter*. Letter-spacing `-0.011em`. Line-height 1.55.
- Mono: system mono, for a single role-ticker or prompt — not for body.

**Color**
- Dark editorial default (`bg` near `#07090c`, `fg` near `#eceef2`).
- Light theme fully implemented, not an afterthought.
- **One** accent. Cool, serious. Example: blue `#1d4ed8` / `#5b9dff`. Not purple gradient, not neon, not rainbow skills.
- Tokens only: `bg`, `fg`, `surface`, `elevated`, `muted`, `subtle`, `primary`, `border`, `ring`, `success`, `warn`, `danger`.
- No ad-hoc hex in components. No raw `bg-black`, `text-white`, `bg-blue-600`.
- Hairline elevation: 1px border-as-shadow, not drop shadows and not glow.

**Shape + space**
- Radius scale: 4 / 8 / 12 / 16 / 24. Concentric: parent radius = child radius + padding.
- Max content width ~ `72rem`. Page gutters `px-5 md:px-8`.
- Images: 1px inner outline `color-mix(in oklab, fg 10%, transparent)`.

**Motion**
- One entrance: opacity + 16px rise + 4px blur, 500ms, ease `[0.22, 1, 0.36, 1]`, once in view.
- Honor `prefers-reduced-motion` (typed text becomes static; no blur).
- No bounce, no springy cards, no infinite pulse.

**Hero**
- Full-viewport. Cinematic craft photograph as atmosphere (not a stock “laptop on desk”).
- Dark veil so type is `#f3f4f6` on the photo. Do not put body-token type on a photo.
- Split: copy left, **studio portrait** right (desktop). Mobile: portrait **first**, below nav, then headline.
- Nav must never crop the skull. Mobile `pt-32` minimum over a 64px nav.
- Portrait in a hairline frame, 4:5, caption = name + city.

**Do not**
- Gradient-mesh backgrounds, glassmorphism stacks, 12-column icon grids, Inter-only sites, card-shadow jungles, Lottie filler, “scroll to explore” gimmicks that hide the CTA.

---

## 5. Photography doctrine

Portraits are the product. Treat them like type.

**Roles**
| Asset | Use |
|---|---|
| Studio headshot (jacket) | Hero, Resume |
| Square crop of studio | Nav, footer, assistant, mobile contact |
| Clean shirt | About sidebar, Contact |
| Environmental / event | Gallery strip |
| Craft atmosphere (racks, workshop, set, kitchen, site) | Hero background + case study covers |

**Process**
- Crop generator watermarks (bottom-right) before shipping. Never show a Grok/Midjourney mark.
- Object-position by composition: face-left photo → `object-left`; face-right → `object-right`; headshot → `object-top`.
- Do not force a 16:9 environmental into a 4:5 frame. Use a real portrait there.
- Alt text: name + role + setting. Not “image1”.
- Compress. Hero portrait `fetchPriority=high`. Others lazy.

If no photos: generate **craft atmosphere only**. Do not generate a fake face of a real person. Use a monogram until real portraits arrive.

---

## 6. Copy patterns (steal the shape, not the sentences)

**Hero headline:** craft outcome, not a job title.
- Good: “Building highly available infrastructure.”
- Bad: “Welcome to my portfolio.” / “Cloud | DevOps | AWS | Azure”

**Subhead:** name + what they *keep running* / *ship* / *design*, end to end.

**Stats (4):** only true, non-numeric if needed (`Hybrid`, `AWS · Azure`, `5+`). Never “99.99%” unless the packet has it.

**About:** origin → through-line → direction. Three paragraphs. Then 4–5 principles as one-liners.

**Case study shape (required fields)**
- `problem` — the broken system
- `challenge` — the constraint
- `solution` — what *they* did (I / I)
- `impact[]` — system change, no fake KPIs
- `lessons[]` — what they now refuse to do
- `stack[]` — only tools they used

**Journal:** 4 essays, 4–6 short paragraphs each, one idea. Titles like arguments, not tags (“Restore first. Then explain it.”).

**Roadmap:** vendor, name, code. Section title must say they are **not yet certified**.

---

## 7. Signature modules (pick what the craft earns)

Always: hero, about, career, levelled skills, case studies, journal, resume, contact.

**Add one “how I think” module:**
- Infra / SRE / SysOps → estate topology (SVG, labelled, not a fake live map) + illustrative ops week
- Software → architecture diagram of a real shipped system
- Design → process (research → constraint → artefact) with real work, not Dribbble filler
- PM / ops → decision log or operating cadence
- Sales / CS → motion of a deal / account, anonymised if needed

**Optional chrome (craft-native only)**
- Command palette (`⌘K`): jump to pages, copy email, toggle theme, download resume
- Terminal overlay: 6–8 commands that print facts from data files (`whoami`, `skills`, `open resume`)
- “Ask about {name}”: answers **only** from resume + site data. UI discloses that.

If the chrome does not make the person more hireable, cut it.

---

## 8. Data + stack (keep boring)

- React + Vite + TanStack Router + Tailwind v4 + `motion` + shadcn-class buttons.
- All facts in `src/data/*` (`site`, `timeline`, `skills`, `projects`, `articles`). Pages do not hardcode biography.
- Theme via `html.dark` class, persist `localStorage`.
- Contact form: validate, persist inquiries to `localStorage`, success state. No fake “sent to our servers” unless a backend exists.
- Resume PDF at a stable public path. Header button downloads it. Print CSS hides chrome.
- SEO: title `{Name} — {Craft}`, real meta description, OG title. Canonical if known.
- No auth, no database, unless the packet asks for a private owner area.

---

## 9. Anti-patterns (instant fail)

- Purple/blue AI-slop gradient, glass cards, 5 font families
- Skill bars at 87%
- “Hi, I’m X and I love technology”
- Fake GitHub calendars, fake visitor counts, fake uptime
- Certification badges they do not hold
- Stock “diverse team high-fiving in a whiteboard room”
- Hamburger-only nav on desktop; missing contact on mobile
- LCP > photo+headline; portrait cropped by the nav
- Horizontal overflow at 390px
- Light theme that is just inverted badly — or no theme toggle when dark is default
- Duplicate case-study plots (same story, different title)
- Assistant that flatters or invents

---

## 10. Build order

1. Tokens + fonts + shell (nav, footer, theme, skip link)
2. Data files from the resume (do this before pretty UI)
3. Hero + About + portraits
4. Career + Skills
5. Work index + 4–6 case studies
6. Systems module
7. Journal (4 essays)
8. Resume page + PDF
9. Contact
10. Optional chrome
11. Mobile pass at **390×844** (this is how most recruiters will see it)
12. Light theme pass
13. Reduced-motion pass

**Mobile hero is the product.** Face, name, craft, two CTAs, no cropped skull.

---

## 11. QA before you call it done

- [ ] 30-second test: stranger can say who, what, where, how senior
- [ ] Every claim traceable to the packet
- [ ] Roadmap ≠ certified
- [ ] Portraits watermark-free, nav doesn’t clip the head
- [ ] 390px and 1280px: no overflow, no overlapping type, CTAs tappable
- [ ] Keyboard: skip link, focus rings, palette, form
- [ ] `prefers-reduced-motion` doesn’t leave a broken hero
- [ ] Resume downloads; email and phone are real `mailto:` / `tel:`
- [ ] Light + dark both look intentional
- [ ] Assistant (if any) refuses unknown numbers

---

## 12. Subject Packet — paste after this file

Copy, fill, send. Do not leave the model to guess.

```md
# Subject Packet

## Identity
- Full name:
- Short name:
- Headline (one line, craft not title salad):
- Location / timezone:
- Years in this craft:
- Target roles (2–4):
- Work mode (on-site / hybrid / remote):

## Contact (only what we may publish)
- Email:
- Phone:
- Resume PDF: (attach)
- LinkedIn / GitHub / site: (or “none”)

## Voice
- First person sounds like: (paste 5–10 sentences they actually wrote, or “match the resume”)
- Words to ban:
- Seniority posture: (operator / builder / lead / founder)

## Facts from resume (verbatim — attach the PDF too)
- Roles: title, company, location, dates, bullets
- Education
- Tools they actually used
- Certifications **held** (name, ID, year) vs **studying**
- Metrics we are allowed to print (or “none”)

## Work to feature (4–6)
For each: problem, what they did, what changed, stack, what must not be claimed.

## Photos
- Studio headshot:
- Alternate portrait:
- Environmental:
- Do not generate a face: yes/no

## Must never invent
- (e.g. certs, logos, client names, SLAs, headcount)

## Optional chrome
- Command palette / terminal / ask-assistant: yes/no (default: only if craft-native)

## Constraints
- Anything confidential to strip
- Languages
- Accent color if they have a brand; else pick one serious accent
```

---

## 13. One-line brief to start building

After the packet:

> Build {Name}’s portfolio to the Portfolio Gold Standard. Craft: {headline}. City: {location}. Canon: the attached resume. Do not invent certs or metrics. Ship the hiring instrument, not a template.

Then build. Do not wait for a moodboard.
