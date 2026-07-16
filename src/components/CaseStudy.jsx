import { ArrowRight } from 'lucide-react'
import FadeIn from './FadeIn'
import useCountUp from '../hooks/useCountUp'

const stats = [
  { label: 'From scratch', value: 'Full build' },
  { label: 'Shipped', value: 'To production' },
  { label: 'Adopted', value: '400 users' },
]

export default function CaseStudy() {
  const { ref, value } = useCountUp(400)

  return (
    <section id="case-study" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-muted">
            Case study: CLT Lifting Club
          </p>
        </FadeIn>

        {/* The centerpiece */}
        <p
          ref={ref}
          className="mt-10 font-semibold leading-none tracking-[-0.04em] text-ink [font-size:clamp(5rem,14vw,11rem)]"
        >
          0{' '}
          <span aria-hidden="true" className="text-muted">
            &rarr;
          </span>{' '}
          <span className="text-accent">{value}</span>
        </p>

        <FadeIn delay={0.1}>
          <p className="mt-8 max-w-[55ch] text-base leading-relaxed text-body sm:text-lg">
            Active users on custom software we designed, built, and shipped
            from zero.
          </p>
        </FadeIn>

        {/* Stat blocks */}
        <div className="mt-14 grid gap-x-8 gap-y-8 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={0.08 * i}>
              <div className="border-t border-border pt-5">
                <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-muted">
                  {stat.label}
                </p>
                <p className="mt-2 text-base font-semibold text-ink">
                  {stat.value}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.24}>
          <a
            href="#audit"
            className="group mt-12 inline-flex items-center gap-2 text-sm font-medium text-body transition-colors duration-150 hover:text-ink"
          >
            How we did it
            <ArrowRight
              size={14}
              className="transition-transform duration-150 group-hover:translate-x-0.5"
            />
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
