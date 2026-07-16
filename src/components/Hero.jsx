import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import HeroThread from './thread/HeroThread'

/*
 * Timeline: the field draws (0 to ~1.5s), the light crosses and prints the
 * wordmark (1.0 to 1.9s), then headline, subline, and CTAs arrive. Under
 * reduced motion everything renders complete and still.
 */

export default function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef(null)

  // The field falls behind and dims as you scroll into the page
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const fieldY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const fieldOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.1])

  const fadeUp = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: reduce ? 0 : delay, ease: 'easeOut' },
  })

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden pt-16"
    >
      <HeroThread y={fieldY} opacity={fieldOpacity} />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-20 text-center sm:px-8">
        {/* The wordmark, printed by the light as it passes */}
        <div className="relative mx-auto w-[min(78vw,480px)]">
          <motion.img
            src="/solvd-wordmark.png"
            alt=""
            width="440"
            height="90"
            className="w-full mix-blend-screen"
            initial={reduce ? false : { clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 0.9, delay: reduce ? 0 : 1.0, ease: [0.3, 0, 0.2, 1] }}
          />
          {!reduce && (
            <motion.span
              aria-hidden="true"
              initial={{ left: '-12%', opacity: 0 }}
              animate={{ left: '104%', opacity: [0, 1, 1, 0] }}
              transition={{ duration: 0.9, delay: 1.0, ease: [0.3, 0, 0.2, 1] }}
              className="absolute inset-y-0 w-10 bg-gradient-to-r from-transparent via-signal-core/25 to-transparent"
            />
          )}
        </div>

        <motion.h1
          {...fadeUp(1.6)}
          className="display-xl mx-auto mt-10 max-w-5xl text-ink"
        >
          AI that actually <span className="text-signal">ships</span> inside
          your systems.
        </motion.h1>

        <motion.p
          {...fadeUp(1.75)}
          className="mx-auto mt-8 max-w-[52ch] text-pretty leading-relaxed text-body"
        >
          Complex systems in, one working solution out: custom AI automation
          built by systems architects, not slide-deck consultants.
        </motion.p>

        <motion.div
          {...fadeUp(1.9)}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
        >
          <a
            href="#audit"
            className="inline-flex w-full items-center justify-center rounded-md bg-ink px-7 py-3.5 font-medium text-void transition-colors duration-150 hover:bg-white sm:w-auto"
          >
            Book an AI Systems Audit
          </a>
          <a
            href="#case-study"
            className="group inline-flex items-center justify-center gap-2 px-2 py-3.5 font-medium text-body transition-colors duration-150 hover:text-signal"
          >
            See our work
            <ArrowRight
              size={16}
              className="transition-transform duration-150 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
