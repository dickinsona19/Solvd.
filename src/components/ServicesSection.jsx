import FadeIn from './FadeIn'

const auditDeliverables = [
  'Every automation opportunity in your operation, ranked by return',
  'What each one costs to build and what it saves per year',
  'A build-ready roadmap, whether you build with us or not',
]

const capabilities = [
  {
    title: 'Internal automation & workflows',
    desc: 'Pipelines that move data between your systems without a person retyping it.',
  },
  {
    title: 'Custom AI tools & agents',
    desc: 'Models and agents that read, draft, triage, and decide inside your workflows.',
  },
  {
    title: 'Data infrastructure & AI readiness',
    desc: 'The clean data layer and integrations AI needs to work in production.',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <h2 className="max-w-3xl text-balance font-semibold tracking-[-0.02em] text-ink [font-size:clamp(2rem,4vw,3rem)]">
            Start with the audit. Build with certainty.
          </h2>
        </FadeIn>

        {/* Spearhead offer */}
        <FadeIn delay={0.12} className="mt-14">
          <div className="rounded-2xl border border-border bg-surface p-8 transition-colors duration-200 hover:border-border-strong sm:p-12">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                AI Systems Audit
              </h3>
              <p className="text-sm font-medium text-accent">
                Fixed scope, three weeks
              </p>
            </div>
            <p className="mt-4 max-w-[60ch] leading-relaxed text-body">
              Know exactly what AI is worth to your business before you build
              anything. We spend three weeks inside your operation and your
              systems, then hand you a prioritized roadmap of what to
              automate, what it costs, and what it returns.
            </p>

            <ul className="mt-8 space-y-3 border-t border-border pt-8">
              {auditDeliverables.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-body">
                  <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-border-strong" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#audit"
              className="mt-10 inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white transition-colors duration-150 hover:bg-accent-hover"
            >
              Book an AI Systems Audit
            </a>
          </div>
        </FadeIn>

        {/* Supporting capabilities */}
        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-3">
          {capabilities.map((cap, i) => (
            <FadeIn key={cap.title} delay={0.08 * i}>
              <div>
                <h4 className="text-base font-semibold text-ink">
                  {cap.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {cap.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
