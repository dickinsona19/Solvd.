import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import FadeIn from './FadeIn'
import useCountUp from '../hooks/useCountUp'

const stats = [
  { label: 'From scratch', value: 'Full build' },
  { label: 'Shipped', value: 'To production' },
  { label: 'Adopted', value: '400 users' },
]

export default function CaseStudy() {
  const { ref, value } = useCountUp(400, 1600)
  const reduce = useReducedMotion()

  return (
    <section id="case-study" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="md:grid md:grid-cols-12">
          <div className="md:col-span-10 md:col-start-2">
            <FadeIn>
              <p className="label-mono">Case study: CLT Lifting Club</p>
            </FadeIn>

            {/* The centerpiece */}
            <p ref={ref} className="stat-figure mt-10 text-ink">
              0{' '}
              <span aria-hidden="true" className="text-muted">
                &rarr;
              </span>{' '}
              <span className="relative inline-block text-signal">
                {value}
                {/* The thread draws the underline while the counter runs */}
                <motion.span
                  aria-hidden="true"
                  initial={reduce ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 1.6, ease: [0.3, 0, 0.2, 1] }}
                  className="absolute -bottom-3 left-0 block h-[1.5px] w-full origin-left bg-signal [filter:drop-shadow(0_0_7px_rgba(61,123,253,0.35))]"
                />
              </span>
            </p>

            <FadeIn delay={0.1}>
              <p className="mt-10 max-w-[52ch] leading-relaxed text-body">
                Active users on software we built from scratch for a Charlotte
                gym, from first commit to production.
              </p>
            </FadeIn>

            {/* Stat blocks: mono label above, number, hairline underline */}
            <div className="mt-14 grid gap-x-8 gap-y-8 sm:grid-cols-3">
              {stats.map((stat, i) => (
                <FadeIn key={stat.label} delay={0.08 * i}>
                  <div className="border-b border-line pb-5">
                    <p className="label-mono">{stat.label}</p>
                    <p className="mt-2 font-semibold text-ink">{stat.value}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.24}>
              <a
                href="#audit"
                className="group mt-12 inline-flex items-center gap-2 text-sm font-medium text-body transition-colors duration-150 hover:text-signal"
              >
                How we did it
                <ArrowRight
                  size={14}
                  className="transition-transform duration-150 group-hover:translate-x-0.5"
                />
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
