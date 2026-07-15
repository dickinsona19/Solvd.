import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'

/* Editorial stacked headline — alternating emphasis per line,
   revealed one line at a time. */
const headlineLines = [
  { text: 'We engineer', tone: 'ink' },
  { text: 'the internal systems', tone: 'muted' },
  { text: 'that run your business', tone: 'muted' },
  { text: 'on autopilot.', tone: 'accent' },
]

const toneClasses = {
  ink: 'text-ink',
  muted: 'text-slate-500',
  accent:
    'bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent',
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.2 } },
}

const line = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] },
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

      <div className="container relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <div className="max-w-4xl">
          {/* Glass pill badge */}
          <motion.div {...fadeUp(0.05)}>
            <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-slate-700/40 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-mist shadow-[inset_0_1px_0_rgba(248,250,252,0.06)] backdrop-blur-md sm:text-sm">
              <MapPin size={14} className="text-sky-400" />
              Serving local businesses in Charlotte, NC and surrounding areas
            </div>
          </motion.div>

          {/* Stacked editorial headline */}
          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {headlineLines.map((l) => (
              <span key={l.text} className="block overflow-hidden pb-1">
                <motion.span
                  variants={line}
                  className={`block ${toneClasses[l.tone]}`}
                >
                  {l.text}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            {...fadeUp(0.95)}
            className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-mist sm:text-lg"
          >
            No off-the-shelf software that almost fits. No duct-taped
            spreadsheets. We design and build the internal software your
            business actually runs on — custom tools, dashboards, and
            automations engineered around your exact operations.
          </motion.p>

          <motion.div
            {...fadeUp(1.15)}
            className="mt-10 flex flex-col items-start gap-7 sm:flex-row sm:items-center"
          >
            {/* Primary CTA — solid cyan with hover glow */}
            <a href="#audit" className="group relative w-full sm:w-auto">
              <span
                aria-hidden="true"
                className="absolute -inset-0.5 rounded-xl bg-sky-400 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-50"
              />
              <span className="relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-400 px-7 py-4 text-base font-semibold text-slate-950 transition-colors duration-300 group-hover:bg-sky-300 sm:w-auto">
                Let's get your problem Solvd.
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </a>

            {/* Secondary CTA — understated editorial link */}
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
