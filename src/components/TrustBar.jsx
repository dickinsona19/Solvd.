import FadeIn from './FadeIn'

const brands = ["Lowe's", 'Ally', 'Automation LP', 'CLT Lifting Club']

export default function TrustBar() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <div className="flex flex-col items-center gap-5 text-center">
            <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-muted">
              Systems by our team have run at
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
              {brands.map((brand) => (
                <li
                  key={brand}
                  className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-body"
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
