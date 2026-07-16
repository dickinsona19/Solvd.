import FadeIn from './FadeIn'

export default function Problem() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <p className="max-w-4xl text-balance font-semibold leading-[1.15] tracking-[-0.02em] text-ink [font-size:clamp(1.75rem,3.5vw,2.75rem)]">
            Most AI projects fail at the integration layer: the gap between
            the demo and the fifteen-year-old systems a business actually runs
            on. <span className="text-muted">SOLVD exists for that gap.</span>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
