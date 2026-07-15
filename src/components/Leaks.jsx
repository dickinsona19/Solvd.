import { LayoutDashboard, Plug, Workflow } from 'lucide-react'
import FadeIn from './FadeIn'

const pillars = [
  {
    icon: LayoutDashboard,
    label: 'Pillar 1',
    title: 'Custom Internal Tools & Dashboards',
    description:
      'Stop wrestling with five different software platforms. We build unified custom dashboards and internal portals that centralize your data, inventory, or operations into one secure place.',
  },
  {
    icon: Workflow,
    label: 'Pillar 2',
    title: 'Zero-Loss Workflow Automation',
    description:
      'If your staff is manually copying data from emails, PDFs, or forms into your database, you are wasting payroll. We automate your pipelines so data moves instantly and accurately.',
  },
  {
    icon: Plug,
    label: 'Pillar 3',
    title: 'Database & API Integrations',
    description:
      'We write the custom middleware and APIs that force your existing, legacy software platforms to talk to each other in real-time, eliminating manual bottlenecks.',
  },
]

export default function Leaks() {
  return (
    <section id="leaks" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            What We Fix
          </p>
          <h2 className="font-display mt-3 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Three pillars of an operation that runs itself
          </h2>
          <p className="mt-4 text-pretty text-mist">
            Most mid-sized businesses don't have a growth problem. They have
            an infrastructure problem. Here's how we engineer it away.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.12}>
              <div className="group flex h-full flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.05] hover:shadow-[0_8px_40px_rgba(56,189,248,0.08)]">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-400 transition-colors group-hover:bg-sky-400/20">
                  <pillar.icon size={22} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-sky-400/80">
                  {pillar.label}
                </p>
                <h3 className="mt-2 text-lg font-bold text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  {pillar.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
