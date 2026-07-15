import FadeIn from './FadeIn'

/*
 * Monochrome text wordmarks keep the strip lightweight and uniform.
 * Swap any entry for an official SVG (<img className="h-6 opacity-50 grayscale" />)
 * once brand assets are approved.
 */
const brands = [
  {
    name: "LOWE'S",
    className: 'font-sans text-lg font-extrabold tracking-[0.08em] sm:text-xl',
  },
  {
    name: 'ally',
    className: 'font-sans text-xl font-bold lowercase tracking-tight sm:text-2xl',
  },
  {
    name: 'Automation Limitless Possibilities',
    className:
      'font-display max-w-[180px] text-sm font-semibold leading-snug tracking-tight sm:text-base',
  },
  {
    name: 'CLT LIFTING CLUB',
    className:
      'font-display max-w-[150px] text-sm font-bold leading-snug tracking-[0.14em] sm:text-base',
  },
]

export default function TrustBar() {
  return (
    <section className="relative pb-16 pt-2 sm:pb-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
            Trusted by leaders. Systems developed by our team have powered
            workflows at:
          </p>

          <div className="mt-9 grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-8 md:grid-cols-4">
            {brands.map((brand) => (
              <span
                key={brand.name}
                className={`select-none text-center text-slate-400/60 grayscale transition-colors duration-300 hover:text-slate-300/80 ${brand.className}`}
              >
                {brand.name}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
