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
  index.css                # Tailwind + design tokens (source: DESIGN.md)
  hooks/
    useCountUp.js          # IntersectionObserver count-up (reduced-motion aware)
  components/
    Header.jsx             # Sticky nav with mobile menu
    Hero.jsx               # Thesis headline + CTAs
    Problem.jsx            # Integration-layer bridge statement
    ServicesSection.jsx    # AI Systems Audit spearhead + capabilities row
    CaseStudy.jsx          # "0 → 400" signature moment
    WhySolvd.jsx           # Two-discipline capability cards
    TrustBar.jsx           # Quiet mono brand strip
    LocalStrip.jsx         # One-line Charlotte trust signal
    ContactForm.jsx        # Audit booking form (FormSubmit)
    Footer.jsx
    Eyebrow.jsx            # Mono section label
    FadeIn.jsx             # Scroll fade-in wrapper (reduced-motion aware)
    Background.jsx         # Base color + faint masked grid
```

## Notes

- The form submits via [FormSubmit](https://formsubmit.co/) and delivers to
  `contact@getsolvd.io`. The first submission triggers a one-time activation
  email to that inbox — click the confirmation link in it to start receiving
  entries.
- Accent usage is budgeted (roughly once per section, often zero). If you add
  color somewhere, remove it somewhere else. See DESIGN.md §2.
