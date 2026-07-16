# SOLVD — Design System & Direction

The single source of truth for the SOLVD marketing site redesign. Every visual
decision on the site should be traceable to a rule on this page. If something
on the page can't be justified by this document, remove it.

**Positioning:** SOLVD is an AI consulting and implementation firm in
Charlotte, NC. Two disciplines under one roof — systems architecture and
applied AI. The firm is the brand; capability carries credibility, not
founders. The buyer is an operator ($3M–$150M revenue) who is skeptical of AI
hype and afraid of vendors who can't handle their messy internal systems.

**Register:** minimal luxury, engineering-grade. The Stripe / Linear school —
light, precise, quiet confidence — executed with restraint. The luxury comes
from whitespace, typography, and what we *don't* put on the page.

---

## 1. Principles

1. **One idea per section.** Each section makes exactly one claim. If a
   section needs two accents or two focal points, it's two sections or it's
   overbuilt.
2. **Specificity is the aesthetic.** "0 → 400 active users" outperforms any
   adjective. Numbers, timeframes, and named deliverables replace hype words.
   Banned vocabulary: *revolutionary, cutting-edge, passionate, world-class,
   supercharge, unlock, seamless.*
3. **Whitespace is a feature, not leftover space.** When in doubt, add
   spacing, not elements.
4. **Restraint reads as confidence.** One gradient moment per section at
   most, usually zero. No glows, no drop shadows, no decorative icons.
5. **Motion is physics, not theater.** Fast, small, and honest. One
   orchestrated scroll moment on the whole page (the case-study counter).
   Everything else is a 150–200ms hover or a subtle fade.
6. **The final edit.** Before shipping any section: remove one element. If it
   still works, it was decoration.

---

## 2. Color tokens

Light theme only. No pure white surfaces on a pure white page — the base is
soft off-white and cards sit on it in true white. Defined in `src/index.css`
under `@theme` — components must use tokens, never one-off hex values.

### Background layers

Blue-tinted neutrals. The page carries a soft light-blue ambient wash
(radial, from the top) rendered in `Background.jsx`.

| Token          | Value                     | Use                                    |
| -------------- | ------------------------- | -------------------------------------- |
| `--color-base` | `#F1F6FB`                 | Page background (blue-tinted)          |
| `--color-surface` | `#FFFFFF`              | Cards, elevated panels                 |
| `--color-surface-2` | `#E7EFF7`            | Hover state of surfaces, inputs        |

### Borders

No drop shadows anywhere. Depth comes from background steps and 1px borders.
Borders belong to components (cards, stat blocks, list separators, the header
bar). Sections are separated by whitespace only, never by rules.

| Token             | Value       | Use                          |
| ----------------- | ----------- | ---------------------------- |
| `--color-border`  | `#D9E4EF`   | Default hairline borders     |
| `--color-border-strong` | `#C0D2E2` | Hovered/focused borders   |

### Text

| Token              | Value       | Use                                     |
| ------------------ | ----------- | --------------------------------------- |
| `--color-ink`      | `#0F172A`   | Headlines, primary text                 |
| `--color-body`     | `#43586C`   | Body copy, secondary text               |
| `--color-muted`    | `#5B7189`   | Labels, captions, footer micro-text     |

### Accent — the entire budget

One committed blue, used as a solid. No gradient text anywhere (solid color
carries emphasis; weight and size do the rest).

| Token                  | Value       | Use                                  |
| ---------------------- | ----------- | ------------------------------------ |
| `--color-accent`       | `#0369A1`   | CTA buttons, the one accent word/number per key section, focus rings |
| `--color-accent-hover` | `#075985`   | CTA hover state                      |
| `--color-accent-2`     | `#1E40AF`   | Reserved second step (data viz, future needs) |

**Accent budget (hard limit — one use per section, often zero):**

- Hero: the word "ships" in solid accent, plus the primary CTA button.
- Case study: the "400" in solid accent.
- Why SOLVD: one thin `accent/40` connector line between the two cards.
- CTA buttons are solid accent blue with white text; everything else is
  monochrome ink/body/muted.

---

## 3. Typography

Two faces, loaded via Google Fonts with `display=swap`, preconnected.

| Role    | Face             | Rules                                                        |
| ------- | ---------------- | ------------------------------------------------------------ |
| Sans    | **Inter**        | Everything. Display weight 600–700, letter-spacing `-0.03em` on headlines. Body 400–500, line-height 1.6, `max-width: 65ch`. |
| Mono    | **Geist Mono** (fallback: JetBrains Mono) | Eyebrow labels, stat labels, small data. Always uppercase, `letter-spacing: 0.14em`, 11–12px, `--color-muted`. |

Space Grotesk is retired.

### Scale (fluid, via `clamp()`)

| Level          | Size                             | Use                        |
| -------------- | -------------------------------- | -------------------------- |
| Display XL     | `clamp(3rem, 8vw, 6rem)`         | Hero headline only         |
| Stat           | `clamp(5rem, 14vw, 11rem)`       | Case-study "0 → 400" only  |
| Display        | `clamp(2rem, 4vw, 3rem)`         | Section headlines          |
| Title          | `1.25rem / 600`                  | Card titles                |
| Body           | `1rem–1.125rem / 400`            | Paragraphs                 |
| Label (mono)   | `0.6875rem–0.75rem / uppercase`  | Eyebrows, stat labels      |

Mono labels are reserved for data: the case-study kicker and stat labels,
the trust strip, and the local line. Section headlines stand on their own —
no eyebrow above every heading (repeated eyebrows are AI scaffolding, not
rhythm).

Copy uses no em dashes. Reach for a period, comma, or colon instead.

---

## 4. Spacing & layout

- **8px grid.** All spacing values are multiples of 8 (Tailwind default scale
  already enforces this — no arbitrary values like `py-[52px]`).
- **Section padding:** `py-24` minimum on desktop, `py-32` for major sections
  (hero, case study, final CTA). Mobile may compress to `py-16`/`py-20`.
- **Container:** `max-w-6xl` with `px-5 sm:px-8`. Text blocks cap at
  `max-w-[65ch]`; subheadlines at `~55ch`.
- **Radii:** `rounded-2xl` for cards, `rounded-lg` for buttons and inputs.
  Nothing rounder — no pills except mono tags, no circles except intentional
  marks.
- **Dividers:** sections separate by whitespace only. No section-to-section
  rules, borders, or divider elements of any kind.

---

## 5. Motion

- **Hovers:** 150–200ms ease-out. Allowed effects: border brighten
  (`--color-border` → `--color-border-strong`), background step up
  (`surface` → `surface-2`), 1–2px `translate-y`, arrow `translate-x`.
  Banned: scale-ups, glow blooms, color flooding.
- **Scroll reveals:** single fade-up (12–16px, ~0.5s), staggered at most
  ~80ms between siblings. `once: true` — nothing replays.
- **The one orchestrated moment:** the case-study counter animates 0 → 400
  over ~1.5s when it enters the viewport (IntersectionObserver). This is the
  only "big" animation on the page.
- **`prefers-reduced-motion`:** everything above collapses to instant/no
  animation. The counter renders "400" statically. Non-negotiable.

---

## 6. Voice & copy rules

- Plain verbs. "We build," "we ship," "we integrate." Never "we empower."
- Speak to time and money, not technology. The owner at $5M revenue doesn't
  buy "agentic workflows," they buy "your team stops retyping invoices."
- Claims must be checkable: a number, a timeframe, a deliverable, a place.
- No founder story, photos, or bios on the homepage. Capability-framed only.
- Sentence case for headlines. No exclamation marks. No emoji.
- The AI skeptic is the reader. Acknowledge the failure mode (most AI
  projects die at the integration layer) before claiming the fix.

---

## 7. Page architecture (homepage)

Order is fixed. Each row lists the section's single job and its accent usage.

| # | Section        | Job                                                    | Accent |
| - | -------------- | ------------------------------------------------------ | ------ |
| 1 | Hero           | The thesis: "AI that actually ships inside your systems." Centered, full viewport. | "ships" in solid accent + blue CTA |
| 2 | Trust strip    | One quiet mono line of brand names, directly under the hero. | None |
| 3 | Problem bridge | Name the failure mode (integration layer). Large type, no card. | None |
| 4 | Services       | One spearhead: **AI Systems Audit** (fixed scope, ~3 weeks). Quiet capabilities row beneath. | Blue CTA |
| 5 | Case study     | "0 → 400" enormous. Count-up on scroll. Three mono stat blocks. One quiet link. No card, no images. | "400" in solid accent |
| 6 | Why SOLVD      | Two capability cards: systems architecture / applied AI. | Thin `accent/40` connector |
| 7 | Local strip    | One line: "Charlotte, NC. We work in your building, not just your browser." | None |
| 8 | Final CTA      | One headline, one button: "Book an AI Systems Audit" → on-page form. | Blue CTA |
| 9 | Footer         | Mono micro-labels, minimal links. No top border. | None |

The case study is the signature moment of the page. If any other section
competes with it visually, quiet the other section.

---

## 8. Components

- **Buttons.** Primary: solid `--color-ink` background, `--color-base` text,
  `rounded-lg`, medium weight — no glow, no gradient fill. Secondary/ghost:
  transparent with hairline border, brightens on hover. Text link: mono or
  small sans with `→` that translates 2px on hover.
- **Cards.** `--color-surface` background, 1px `--color-border`,
  `rounded-2xl`, generous internal padding (`p-8`). Hover: border to
  `--color-border-strong`. Never shadowed, never glowing.
- **Eyebrows.** Mono, uppercase, tracked out, `--color-muted`. Optionally
  prefixed with a 16px hairline dash.
- **Inputs.** `--color-surface` background, hairline border, `rounded-lg`,
  visible `:focus-visible` ring in `--color-accent`.
- **Background.** Base color plus at most one ambient element: a faint grid
  (opacity ≤ 0.03, masked toward edges) *or* one slow-drifting gradient orb.
  CSS only. The current five-blob mesh is retired.

---

## 9. Quality floor (unannounced, always)

- Fully responsive, mobile-first; test at 360px, 768px, 1280px, 1920px.
- Semantic HTML: one `h1`, ordered heading levels, `nav`/`main`/`footer`
  landmarks, labeled form fields.
- Visible `:focus-visible` states on every interactive element.
- `prefers-reduced-motion` honored globally.
- Real favicon, correct `<title>` and meta description matching the new
  positioning.
- Text contrast ≥ 4.5:1 for body, ≥ 3:1 for large display text.
- No new dependencies for decoration. Framer Motion (already installed) only
  for fades; the counter uses a hand-rolled IntersectionObserver hook.
