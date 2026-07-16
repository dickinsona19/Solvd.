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
    <section id="why-solvd" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <h2 className="display max-w-3xl text-ink">
            AI fails at the integration layer. We built SOLVD around both
            halves of the problem.
          </h2>
        </FadeIn>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-0">
          <FadeIn className="h-full">
            <div className="h-full rounded-xl border border-line bg-panel p-8 transition-colors duration-200 hover:border-line-strong hover:bg-panel-2 sm:p-10">
              <h3 className="text-xl font-semibold text-ink">
                {disciplines[0].title}
              </h3>
              <p className="mt-3 leading-relaxed text-body">
                {disciplines[0].desc}
              </p>
            </div>
          </FadeIn>

          {/* The thread passes between the two halves */}
          <div aria-hidden="true" className="hidden items-center md:flex">
            <div className="h-[1.5px] w-16 bg-signal [filter:drop-shadow(0_0_7px_rgba(61,123,253,0.35))]" />
          </div>

          <FadeIn delay={0.1} className="h-full">
            <div className="h-full rounded-xl border border-line bg-panel p-8 transition-colors duration-200 hover:border-line-strong hover:bg-panel-2 sm:p-10">
              <h3 className="text-xl font-semibold text-ink">
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
