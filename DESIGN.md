# SOLVD — Design System v3: "The Thread"

The single source of truth for the SOLVD marketing site. Every visual decision
must be traceable to a rule on this page. If an element can't be justified by
this document, remove it.

---

## 0. The brand image changes everything

The reference artwork defines the aesthetic: a matte deep-navy field, tangled
blue threads on the left resolving into one clean, luminous line that runs to
a single point of light, with a thin extended wordmark. That image *is* the
brand argument: complexity in, one clean solution out.

v2 got the discipline right but pointed it at the wrong world. This version
corrects course and commits fully to the artwork.

### Honest critique of v2 (what's being fixed)

1. **Aesthetic mismatch.** v2 was warm paper, editorial serif, Klein blue —
   a daylight stationery world. The brand is a midnight world: navy, silver,
   and one glowing signal. A serif headline sitting above that logo would
   read as two different companies. v3 is dark-first, end to end.
2. **Too many motifs.** v2 shipped three decorative systems (blueprint grid,
   crop marks, FIG. labels) while preaching "spend boldness in one place."
   That was self-contradictory. v3 has exactly one motif: the thread.
3. **Two accent blues was token debt.** IKB on paper plus a second bright
   blue for dark sections meant the accent changed meaning per section. v3
   has one signal blue with a defined glow treatment, used identically
   everywhere.
4. **The "blur-to-sharp" hero load** was theater and a paint-performance
   risk. Cut. The hero's drama now comes from the thread drawing itself.
5. **"No glows, ever" was wrong for this brand.** The brand image is
   literally a glowing line. The rule is now precise instead of absolute:
   glow belongs to the thread and only the thread.

---

## 1. Positioning (unchanged)

SOLVD is an AI consulting and implementation firm in Charlotte, NC. Two
disciplines under one roof: systems architecture and applied AI. The firm is
the brand; capability carries credibility, not founders. The buyer is an
operator ($3M–$150M revenue) who is skeptical of AI hype and afraid of
vendors who can't handle their messy internal systems.

**Register:** cinematic engineering. A control room at night, not a startup
landing page. Quiet, dark, exact, with one live signal running through it.

---

## 2. Principles

1. **One idea per section.** Each section makes exactly one claim.
2. **The thread is the only spectacle.** One continuous line travels down
   the entire page: tangled where we describe the problem, resolving to a
   straight luminous signal where we describe the work, ending in a point
   of light at the CTA. Everything else on the page is quiet so the thread
   can speak.
3. **Specificity is the aesthetic.** "0 → 400 active users" outperforms any
   adjective. Banned vocabulary: *revolutionary, cutting-edge, passionate,
   world-class, supercharge, unlock, seamless, empower.*
4. **Dark is a material, not a filter.** Depth comes from layered navy
   surfaces and hairlines, never from drop shadows. Text is off-white,
   never pure #FFF (pure white on navy halates and fatigues the eye).
5. **Glow budget: the thread only.** No glowing buttons, cards, borders, or
   headlines. The moment glow appears twice, it stops meaning "signal."
6. **Motion is the signal traveling.** Lines draw, numbers count, light
   moves along a path. Nothing bounces, scales, or floods with color.
7. **The final edit.** Before shipping any section: remove one element. If
   it still works, it was decoration.

---

## 3. Color tokens

Sampled from the brand artwork. Defined in `src/index.css` under `@theme` —
components use tokens, never one-off hex values.

### Surfaces (layered navy)

| Token               | Value     | Use                                          |
| ------------------- | --------- | -------------------------------------------- |
| `--color-void`      | `#070E1C` | Page background. The matte navy of the artwork |
| `--color-panel`     | `#0D1728` | Raised panels, cards, the audit offer block   |
| `--color-panel-2`   | `#132036` | Hover state of panels, inputs                 |

Depth ladder: void → panel → panel-2. Three steps, no more. A subtle film
grain (SVG turbulence noise, opacity ≤ 3%, `mix-blend-mode: overlay`) sits
over `--color-void` to match the matte photographic texture of the artwork.
CSS/SVG only, one shared element, no image files.

### Lines

| Token                   | Value     | Use                                    |
| ----------------------- | --------- | -------------------------------------- |
| `--color-line`          | `#1B2A42` | Default hairline borders               |
| `--color-line-strong`   | `#2A3D5C` | Hovered/focused borders                |

### Text

| Token              | Value     | Use                                          |
| ------------------ | --------- | -------------------------------------------- |
| `--color-ink`      | `#EAF0F8` | Headlines, primary text (off-white silver)   |
| `--color-body`     | `#A3B2C7` | Body copy                                    |
| `--color-muted`    | `#66758C` | Labels, captions, footer micro-text          |

### The signal — the entire accent budget

| Token                    | Value     | Use                                        |
| ------------------------ | --------- | ------------------------------------------ |
| `--color-signal`         | `#3D7BFD` | The thread, the accent word, focus rings, active states, link hovers |
| `--color-signal-core`    | `#9CC2FF` | The bright core of the thread's glow and its terminal point of light |
| `--color-signal-dim`     | `#3D7BFD` at 12% | The thread's tangled/unresolved strands, selection highlight |

**Glow recipe (thread only):** the line is a 1.5px stroke in
`--color-signal` with a wider soft echo (blur 6–8px at ~35% opacity) and,
at its terminal point, a 3px dot in `--color-signal-core` with a 12px soft
halo. Implemented as layered SVG strokes / CSS `filter: drop-shadow` on the
thread element exclusively. Nothing else on the page may use a glow.

**Accent budget (hard limit — one use per section, often zero):**

- Hero: one accent word in the headline in `--color-signal`, plus the
  thread emerging beneath.
- Case study: the "400" in `--color-signal`, its underline drawn by the
  thread itself.
- All other sections: the thread passing through *is* their accent. No
  additional color.
- Primary CTA buttons are silver-on-void (see Components), not blue. The
  signal is too precious to spend on buttons; the CTA earns the thread's
  terminal point of light instead.

---

## 4. Typography

Three faces, three voices, all echoing the wordmark's thin extended
letterforms.

| Role    | Face                          | Voice                                            |
| ------- | ----------------------------- | ------------------------------------------------ |
| Display | **Archivo** (variable: width 115–125%, weight 275–400) | The wordmark's sibling. Slightly expanded, light weight, set large. Headlines only. `letter-spacing: 0.01em` at display sizes (expanded faces need air, not negative tracking). |
| Body    | **Geist** (400–600)           | The engineer. All body copy, UI, buttons, navigation. Line-height 1.65, `max-width: 62ch`. |
| Mono    | **Geist Mono** (400–500)      | The annotation. Eyebrow labels, stat labels, trust strip, footer micro-text. Always uppercase, `letter-spacing: 0.16em`, 11–12px, `--color-muted`. |

Newsreader and Inter are retired. Loading: Google Fonts, `display=swap`,
preconnect, latin subset. Archivo must load with the `wdth` axis — the
expansion is what ties headlines to the logo.

### Scale (fluid, via `clamp()`)

| Level          | Size                              | Face / weight        | Use                       |
| -------------- | --------------------------------- | -------------------- | ------------------------- |
| Display XL     | `clamp(2.75rem, 7.5vw, 5.5rem)`   | Archivo 275, wdth 120 | Hero headline only        |
| Stat           | `clamp(5.5rem, 15vw, 12rem)`      | Archivo 300, wdth 115 | The "0 → 400" only        |
| Display        | `clamp(2rem, 4vw, 3.25rem)`       | Archivo 350, wdth 115 | Section headlines         |
| Title          | `1.25rem / Geist 600`             | —                    | Card titles               |
| Body           | `1rem–1.125rem / Geist 400`       | —                    | Paragraphs                |
| Label (mono)   | `0.6875rem–0.75rem / uppercase`   | Geist Mono 500       | Eyebrows, stat labels     |

Rules:

- Archivo is never used below 2rem; below that, everything is Geist.
- Dark-theme legibility floor: body text is 1.0625rem minimum on desktop.
  Light-on-dark reads smaller than dark-on-light at equal size.
- One mono eyebrow is allowed per section maximum, and only where it labels
  data or sequence. No eyebrow above every heading.
- Copy uses no em dashes. Reach for a period, comma, or colon instead.
- Sentence case for headlines. No exclamation marks. No emoji.

---

## 5. The thread (signature system)

One SVG path system, mounted once at the page level, positioned behind
content (`z-index` under text, above the grain).

- **Hero:** the thread enters from the left as a loose tangle (echoing the
  artwork), passes beneath the headline, and resolves into a straight line
  that exits the section right of center.
- **Problem bridge:** the tangle is at its densest here — 5–6 dim strands
  (`--color-signal-dim`) crossing, with the one bright strand finding its
  way through. This is the section that names the failure mode; the thread
  illustrates it.
- **Services → Case study:** a single straight strand, full brightness,
  running vertically down the left margin (desktop) past the audit offer,
  then drawing the underline of the "400" stat.
- **Final CTA:** the thread terminates in the point of light directly
  beside the CTA button. The page's entire visual argument ends on the
  action we want taken.
- **Scroll behavior:** the path draws with scroll progress
  (`stroke-dashoffset` mapped to scroll, or Framer Motion `useScroll` +
  `useTransform`). It never scrubs backward-jarringly: use a spring so the
  light feels like it travels, not teleports.
- **Mobile:** the tangle simplifies to 2–3 strands and the vertical run
  hugs the left edge at 16px. If a device reports
  `prefers-reduced-motion`, the thread renders fully drawn and static.
- **Discipline:** the thread is one continuous visual story. It never
  forks into decorations, never wraps cards, never underlines random
  words. One line, one journey, one point of light.

---

## 6. Spacing & layout

- **8px grid.** All spacing is multiples of 8. No arbitrary values.
- **Section padding:** `py-28` minimum on desktop, `py-36` for hero, case
  study, and final CTA. Mobile compresses to `py-16`/`py-20`.
- **Container:** `max-w-6xl`, `px-5 sm:px-8`. Text blocks cap at
  `max-w-[62ch]`; subheadlines at ~52ch.
- **Asymmetry follows the thread.** The thread runs left of center, so
  content sits right of it: headlines on a 6/12 column offset right on
  desktop in thread-adjacent sections. The hero and final CTA are centered.
- **Radii:** `rounded-xl` for panels, `rounded-md` for buttons and inputs.
- **Dividers:** sections separate by whitespace only. The thread is the
  page's continuity; it makes dividers redundant.

---

## 7. Motion

- **Hero load (the one page-load moment):** the thread draws in from the
  left over ~1.2s (tangle first, resolving to the straight line), then the
  headline fades up 12px (0.5s). Total under 1.8s, runs once. No blur
  effects.
- **Scroll:** the thread draws with scroll (Section 5). Content reveals are
  a single fade-up (12–16px, ~0.5s), staggered ≤ 80ms between siblings,
  `once: true`.
- **The counter:** "0 → 400" counts up over ~1.6s when it enters the
  viewport (hand-rolled IntersectionObserver hook) while the thread draws
  its underline. This and the hero draw are the only orchestrated moments.
- **Hovers:** 150–200ms ease-out. Allowed: border brighten, panel step up,
  1–2px translate-y, arrow translate-x, CTA dot brighten. Banned:
  scale-ups, glow blooms on non-thread elements, color flooding.
- **`prefers-reduced-motion`:** thread renders static and complete, counter
  renders "400", all reveals become instant. Non-negotiable.
- **Performance:** the thread animates `stroke-dashoffset` and `transform`
  only (compositor-friendly). No animated filters or box-shadows. Target
  LCP < 2.0s; the thread SVG is inline, not fetched.

---

## 8. Voice & copy rules

- Plain verbs. "We build," "we ship," "we integrate." Never "we empower."
- Speak to time and money, not technology. The owner at $5M revenue doesn't
  buy "agentic workflows," they buy "your team stops retyping invoices."
- Claims must be checkable: a number, a timeframe, a deliverable, a place.
- No founder story, photos, or bios on the homepage. Capability-framed only.
- The AI skeptic is the reader. Acknowledge the failure mode (most AI
  projects die at the integration layer) before claiming the fix.
- The copy may reference the thread's story exactly once, in the hero
  subline (e.g. "Complex systems in. One working solution out."). Don't
  narrate the metaphor anywhere else; the line does that job.

---

## 9. Page architecture (homepage)

Order is fixed. Each row lists the section's single job and its thread state.

| # | Section        | Job                                                | Thread state |
| - | -------------- | -------------------------------------------------- | ------------ |
| 1 | Hero           | The thesis: "AI that actually ships inside your systems." Display XL, centered, full viewport. | Tangle enters left, resolves under headline |
| 2 | Trust strip    | One quiet mono line of brand names.                 | Straight pass-through |
| 3 | Problem bridge | Name the failure mode (integration layer). Display type, offset grid, no card. | Densest tangle on the page |
| 4 | Services       | One spearhead: **AI Systems Audit** (fixed scope, ~3 weeks) in a `--color-panel` block. Quiet capabilities row beneath. | Single bright strand, left margin |
| 5 | Case study     | "0 → 400" enormous. Count-up on scroll. Three mono stat blocks. One quiet link. No card, no images. | Thread draws the 400's underline |
| 6 | Why SOLVD      | Two capability panels: systems architecture / applied AI. | Thread passes between them, connecting both |
| 7 | Local strip    | One line: "Charlotte, NC. We work in your building, not just your browser." Mono. | Straight pass-through |
| 8 | Final CTA      | One headline, one button: "Book an AI Systems Audit" → on-page form. | Terminates: point of light beside the CTA |
| 9 | Footer         | Mono micro-labels, minimal links. No top border.    | None (the story is over) |

The case study and the thread's terminal point are the page's two peaks. If
any other section competes visually, quiet it.

---

## 10. Components

- **Buttons.** Primary: `--color-ink` background (silver) with `--color-void`
  text, `rounded-md`, Geist 500 — a silver button on navy is more luxurious
  and higher-contrast than another blue rectangle. Hover: background to
  pure `#FFFFFF`, 150ms. Secondary/ghost: transparent, 1px
  `--color-line-strong`, brightens on hover. Text link: Geist or mono with
  `→` translating 2px on hover; hover color `--color-signal`.
- **Panels.** `--color-panel` background, 1px `--color-line`, `rounded-xl`,
  `p-8`. Hover: border to `--color-line-strong`, background to
  `--color-panel-2`. Never shadowed, never glowing.
- **Stat blocks.** No panel. Mono label above, Geist number,
  1px `--color-line` underline. Only the "400" gets the thread underline.
- **Eyebrows.** Mono, uppercase, tracked out, `--color-muted`. Maximum one
  per section, only where it labels data.
- **Inputs.** `--color-panel` background, hairline border, `rounded-md`,
  `:focus-visible` ring in `--color-signal`. Labels always visible —
  placeholder-only labels are banned. The audit form is 3 fields maximum
  (name, work email, one free-text line). Every extra field costs
  conversions.
- **Navigation.** Transparent over the hero; after 80px of scroll, a
  backdrop-blurred `--color-void` at 85% opacity with a bottom hairline.
  Wordmark left (thin, tracked, matching the artwork), two links + one
  ghost CTA right. Mobile: wordmark + CTA only, no hamburger — the page is
  one path, so in-page anchors are unnecessary chrome.
- **Background.** `--color-void` + grain + the thread. Nothing else. The
  v2 blueprint grid, crop marks, and FIG. labels are retired.

---

## 11. Quality floor (unannounced, always)

- Fully responsive, mobile-first; test at 360px, 768px, 1280px, 1920px.
  Verify the thread's path at every breakpoint — a broken signature is
  worse than no signature.
- Semantic HTML: one `h1`, ordered heading levels, `nav`/`main`/`footer`
  landmarks, labeled form fields. The thread SVG is `aria-hidden="true"`.
- Contrast (verify, don't assume): `--color-ink` on void ≈ 15:1 ✓;
  `--color-body` on void ≈ 7.5:1 ✓; `--color-muted` on void — use only at
  label sizes with tracking, never for sentences; `--color-signal` on void
  ≈ 4.6:1 — passes for large text and UI, don't set body copy in it.
- Visible `:focus-visible` on every interactive element, ring in
  `--color-signal`.
- `prefers-reduced-motion` honored globally (thread static, counter static).
- `<meta name="theme-color" content="#070E1C">` so mobile browser chrome
  matches the void. Favicon: the point of light (dot with halo) on void.
  OG image: crop the brand artwork to 1200×630.
- Performance: inline the thread SVG, subset fonts, no decorative
  dependencies. Framer Motion (installed) for fades and scroll mapping;
  counter is a hand-rolled IntersectionObserver hook.

---

## 12. Migration checklist (v2 plan → v3)

1. Do not implement v2's paper theme. Replace the token block with
   Section 3 above; grep out all v1/v2 hex values.
2. Swap fonts: remove Inter/Newsreader; add Archivo (`wdth,wght`) and
   Geist; keep Geist Mono.
3. Build the thread as one page-level SVG component with per-section path
   segments and a scroll-mapped draw. Ship the static version first, then
   add motion.
4. Add the grain overlay (one SVG filter element, ≤ 3% opacity).
5. Rebuild the nav (transparent → blurred void) and switch primary buttons
   to silver-on-void.
6. Convert the case study: Archivo stat, signal-blue "400," thread
   underline, mono stat blocks.
7. Delete every v2 motif reference: blueprint grid, crop marks, FIG.
   labels, dark-chapter inversion (the whole page is the dark chapter now).
8. Run the contrast, reduced-motion, and breakpoint checks in Section 11.
