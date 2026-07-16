# SOLVD — Marketing Site

Single-page marketing site for SOLVD, an AI consulting and implementation firm
in Charlotte, NC. Design direction, tokens, and copy rules live in
[DESIGN.md](DESIGN.md) — read it before changing anything visual.

## Stack

- [React 19](https://react.dev/) (bootstrapped with [Vite](https://vite.dev/))
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- [Framer Motion](https://www.framer.com/motion/) — scroll fade-ins only
- [Lucide React](https://lucide.dev/) — icons

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (defaults to http://localhost:5173).

## Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Start local dev server         |
| `npm run build`   | Production build to `dist/`    |
| `npm run preview` | Preview the production build   |
| `npm run lint`    | Run oxlint                     |

## Structure

```
src/
  App.jsx                  # Page assembly (section order matters)
  index.css                # Tailwind + design tokens + type scale (source: DESIGN.md)
  hooks/
    useCountUp.js          # IntersectionObserver count-up (reduced-motion aware)
  components/
    thread/                # The signature system: one line, one journey
      HeroThread.jsx       # Tangle resolving to a line, draws on load
      TangleThread.jsx     # Densest tangle, behind the problem statement
      StrandThread.jsx     # Scroll-drawn vertical strand (Services -> Case study)
      TerminalPoint.jsx    # The point of light beside the final CTA
    Header.jsx             # Transparent -> blurred-void nav, no hamburger
    Hero.jsx               # Thesis headline + CTAs + hero thread
    Problem.jsx            # Integration-layer bridge statement
    ServicesSection.jsx    # AI Systems Audit spearhead + capabilities row
    CaseStudy.jsx          # "0 → 400" with thread-drawn underline
    WhySolvd.jsx           # Two capability panels, thread connector
    TrustBar.jsx           # Quiet mono brand strip
    LocalStrip.jsx         # One-line Charlotte trust signal
    ContactForm.jsx        # 3-field audit form (FormSubmit) + terminal point
    Footer.jsx
    FadeIn.jsx             # Scroll fade-in wrapper (reduced-motion aware)
    Background.jsx         # The void + film grain
```

## Notes

- The form submits via [FormSubmit](https://formsubmit.co/) and delivers to
  `contact@getsolvd.io`. The first submission triggers a one-time activation
  email to that inbox — click the confirmation link in it to start receiving
  entries.
- Accent usage is budgeted (roughly once per section, often zero). If you add
  color somewhere, remove it somewhere else. See DESIGN.md §2.
