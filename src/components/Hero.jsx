import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
})

/* Thin flowing strokes sweeping across the hero, drawn in on load. */
function FlowLines() {
  const paths = [
    'M-100 520 C 250 480, 520 300, 780 330 S 1250 520, 1540 380',
    'M-100 580 C 280 540, 560 350, 820 385 S 1280 590, 1560 440',
    'M-100 640 C 300 610, 600 410, 860 445 S 1300 660, 1580 505',
    'M-100 250 C 350 290, 700 130, 1000 190 S 1400 330, 1600 240',
    'M-100 190 C 380 240, 740 80, 1040 140 S 1420 280, 1620 190',
  ]
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 800"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke={i % 2 === 0 ? 'rgba(56,189,248,0.14)' : 'rgba(148,163,184,0.10)'}
          strokeWidth="1.2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 2.2, delay: 0.3 + i * 0.18, ease: 'easeInOut' },
            opacity: { duration: 0.6, delay: 0.3 + i * 0.18 },
          }}
        />
      ))}
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* Ambient spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-10%] top-[-30%] h-[520px] w-[720px] rounded-full bg-sky-400/[0.06] blur-[130px]"
      />
      <FlowLines />

      <div className="container relative mx-auto max-w-6xl px-5 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
        <div className="max-w-3xl">
          <motion.p
            {...fadeUp(0)}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400"
          >
            Software studio &mdash; Charlotte, NC
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-display text-balance text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            We build the software your business actually runs on.
          </motion.h1>

          <motion.p
            {...fadeUp(0.25)}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-mist sm:text-lg"
          >
            Internal tools, automations, and AI workflows built around how your
            operation works &mdash; not another subscription you have to bend
            your business around.
          </motion.p>

          <motion.div
            {...fadeUp(0.4)}
            className="mt-10 flex flex-col items-start gap-7 sm:flex-row sm:items-center"
          >
            {/* Primary CTA */}
            <a
              href="#audit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-400 px-7 py-4 text-base font-semibold text-slate-950 transition-colors duration-300 hover:bg-sky-300 sm:w-auto"
            >
              Let's get your problem Solvd.
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            {/* Secondary CTA */}
            <a
              href="#leaks"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-400 transition-colors hover:text-sky-300"
            >
              <span className="border-b border-sky-400/40 pb-1 transition-colors group-hover:border-sky-300">
                See What We Fix
              </span>
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
