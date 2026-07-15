# Solvd. — Marketing Site

Single-page marketing website for Solvd, a B2B business optimization consultancy serving local businesses in Charlotte, NC.

## Stack

- [React 19](https://react.dev/) (bootstrapped with [Vite](https://vite.dev/))
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- [Framer Motion](https://www.framer.com/motion/) — scroll-triggered fade-ins
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
| `npm run lint`    | Run ESLint                     |

## Structure

```
src/
  App.jsx                  # Page assembly
  index.css                # Tailwind + brand theme tokens
  components/
    Header.jsx             # Sticky nav with mobile menu
    Hero.jsx               # Headline, CTA, local badge
    Leaks.jsx              # "Three Pillars" grid
    ServicesSection.jsx    # Vertical tabbed stepper with pricing (desktop) / accordion (mobile)
    FounderStory.jsx       # "Proven in the Trenches" founder story + metrics
    ContactForm.jsx        # Audit request form (React state + success view)
    Footer.jsx
    FadeIn.jsx             # Reusable scroll fade-in wrapper
```

## Notes

- The contact form currently handles submission client-side and shows a success state. Wire `handleSubmit` in `ContactForm.jsx` to your backend, form service (Formspree, Netlify Forms), or CRM when ready.
# Solvd.
