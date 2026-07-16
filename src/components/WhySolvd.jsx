import FadeIn from './FadeIn'

const disciplines = [
  {
    title: 'Systems architecture',
    desc: 'Legacy integration, data pipelines, and production infrastructure. The unglamorous engineering that decides whether an AI system survives contact with your real operation.',
  },
  {
    title: 'Applied AI',
    desc: 'Model selection, agentic workflows, and automation that fits how the business already runs. Built into your systems, not bolted on beside them.',
  },
]

export default function WhySolvd() {
  return (
    <section id="why-solvd" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <h2 className="max-w-3xl text-balance font-semibold tracking-[-0.02em] text-ink [font-size:clamp(2rem,4vw,3rem)]">
            AI fails at the integration layer. We built SOLVD around both
            halves of the problem.
          </h2>
        </FadeIn>

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-0">
          <FadeIn className="h-full">
            <div className="h-full rounded-2xl border border-border bg-surface p-8 transition-colors duration-200 hover:border-border-strong sm:p-10">
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink">
                {disciplines[0].title}
              </h3>
              <p className="mt-3 leading-relaxed text-body">
                {disciplines[0].desc}
              </p>
            </div>
          </FadeIn>

          {/* One thin accent connector between the two halves */}
          <div aria-hidden="true" className="hidden items-center md:flex">
            <div className="h-px w-16 bg-accent/40" />
          </div>

          <FadeIn delay={0.1} className="h-full">
            <div className="h-full rounded-2xl border border-border bg-surface p-8 transition-colors duration-200 hover:border-border-strong sm:p-10">
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink">
                {disciplines[1].title}
              </h3>
              <p className="mt-3 leading-relaxed text-body">
                {disciplines[1].desc}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
