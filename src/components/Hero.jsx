import { useLayoutEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import HeroThread from './thread/HeroThread'
import SolvdWordmark from './SolvdWordmark'

/**
 * Measure resting wordmark width, then pick an intro scale.
 * The brand mark is a PNG (~292px) — keep intro scale modest so it
 * stays sharp (big CSS scale = soft edges).
 */
function useIntroLogoScale(reduce, maxScale = 1.35, maxViewportShare = 0.55) {
  const markRef = useRef(null)
  const [scale, setScale] = useState(reduce ? 1 : null)

  useLayoutEffect(() => {
    if (reduce) {
      setScale(1)
      return undefined
    }
    const el = markRef.current
    if (!el) return undefined

    const natural = el.offsetWidth
    if (!natural) return undefined
    const pad = 40
    const maxW = Math.max(160, window.innerWidth * maxViewportShare - pad)
    setScale(Math.min(maxScale, maxW / natural))
    return undefined
  }, [reduce, maxScale, maxViewportShare])

  return { markRef, scale, ready: scale != null }
}

/*
 * Timeline (seconds):
 *   0.0 - 1.1  massive logo: letters rise + signal underline draws
 *   1.25 - 2.1 logo spring-shrinks into resting size
 *   2.2 - 3.5  blue thread draws across the field
 *   3.55+      headline letters rise, then subline + CTAs
 */

const HERO_T = {
  logoLetter: 0.08,
  logoLetterStagger: 0.07,
  logoLetterDur: 0.7,
  logoUnderline: 0.55,
  logoShrink: 1.25,
  logoShrinkDur: 0.95,
  line: 2.25,
  headline: 3.55,
  perLetter: 0.016,
  letterDur: 0.55,
  underline: 4.25,
  subline: 4.35,
  ctas: 4.5,
}

/* Mobile: same choreography, text block starts ~0.45s earlier */
const HERO_T_MOBILE = {
  ...HERO_T,
  headline: 3.1,
  perLetter: 0.012,
  letterDur: 0.45,
  underline: 3.7,
  subline: 3.8,
  ctas: 3.95,
}

function useHeroTiming() {
  const [mobile, setMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 640,
  )

  useLayoutEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)')
    const update = () => setMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return mobile ? HERO_T_MOBILE : HERO_T
}

const HEADLINE = [
  { text: 'AI that actually' },
  { text: 'ships', accent: true },
  { text: 'inside your systems.' },
]

const HEADLINE_PLAIN = 'AI that actually ships inside your systems.'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1]
const SPRING_SHRINK = { type: 'spring', stiffness: 70, damping: 16, mass: 0.9 }

function HeroLogo({ reduce, t }) {
  const { markRef, scale: introScale, ready } = useIntroLogoScale(reduce)

  return (
    <div className="relative mx-auto w-full max-w-[min(78vw,22rem)] sm:max-w-[min(100%,26rem)]">
      <motion.div
        className="relative origin-center"
        key={ready ? 'logo-intro' : 'logo-measure'}
        initial={
          reduce || !ready ? false : { scale: introScale, opacity: 0 }
        }
        animate={{ scale: 1, opacity: 1 }}
        transition={
          reduce || !ready
            ? { duration: 0 }
            : {
                opacity: {
                  duration: 0.45,
                  delay: t.logoLetter,
                  ease: 'easeOut',
                },
                scale: {
                  ...SPRING_SHRINK,
                  delay: t.logoShrink,
                },
              }
        }
      >
        {/* Official brand PNG — same asset as the header */}
        <div ref={markRef} className={ready ? undefined : 'opacity-0'}>
          <SolvdWordmark className="mx-auto h-[clamp(1.75rem,5.5vw,3.25rem)] w-auto select-none" />
        </div>

        {/* Underline sits clearly below the mark — never through letters */}
        {ready && (
          <motion.span
            aria-hidden="true"
            initial={reduce ? false : { scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: reduce ? 0 : t.logoUnderline,
              ease: [0.3, 0, 0.2, 1],
            }}
            className="mx-auto mt-6 block h-[2px] w-[85%] origin-left bg-signal [filter:drop-shadow(0_0_8px_rgba(61,123,253,0.55))] sm:mt-7"
          />
        )}
      </motion.div>
    </div>
  )
}

function AnimatedHeadline({ reduce, t }) {
  let letterIndex = 0

  return (
    <h1
      aria-label={HEADLINE_PLAIN}
      className="display-xl mx-auto mt-10 max-w-5xl text-ink"
    >
      {HEADLINE.map((segment, s) => (
        <span key={s} aria-hidden="true">
          {segment.text.split(' ').map((word, w) => {
            const letters = word.split('')
            const wordEl = (
              <span
                key={`${s}-${w}`}
                className={`relative inline-block overflow-hidden py-[0.12em] -my-[0.12em] align-bottom ${
                  segment.accent ? 'text-signal' : ''
                }`}
              >
                {letters.map((letter, l) => {
                  const delay = t.headline + t.perLetter * letterIndex++
                  return (
                    <motion.span
                      key={l}
                      className="inline-block"
                      initial={reduce ? false : { y: '115%' }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: t.letterDur,
                        delay: reduce ? 0 : delay,
                        ease: EASE_OUT_EXPO,
                      }}
                    >
                      {letter}
                    </motion.span>
                  )
                })}

                {segment.accent && (
                  <motion.span
                    aria-hidden="true"
                    initial={reduce ? false : { scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: reduce ? 0 : t.underline,
                      ease: [0.3, 0, 0.2, 1],
                    }}
                    className="absolute bottom-[0.06em] left-0 h-[2px] w-full origin-left bg-signal [filter:drop-shadow(0_0_7px_rgba(61,123,253,0.35))]"
                  />
                )}
              </span>
            )
            return [wordEl, ' ']
          })}
        </span>
      ))}
    </h1>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const t = useHeroTiming()
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const fieldY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const fieldOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.1])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 48])

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
      <HeroThread y={fieldY} opacity={fieldOpacity} startAt={t.line} />

      <motion.div
        style={reduce ? undefined : { y: contentY }}
        className="relative z-10 mx-auto w-full max-w-6xl px-5 py-20 text-center sm:px-8"
      >
        <HeroLogo reduce={reduce} t={t} />

        <AnimatedHeadline reduce={reduce} t={t} />

        <motion.p
          {...fadeUp(t.subline)}
          className="mx-auto mt-8 max-w-[52ch] text-pretty leading-relaxed text-body"
        >
          Complex systems in, one working solution out: custom AI automation
          built by systems architects, not slide-deck consultants.
        </motion.p>

        <motion.div
          {...fadeUp(t.ctas)}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
        >
          <a
            href="#audit"
            className="inline-flex w-full items-center justify-center rounded-md bg-ink px-7 py-3.5 font-medium text-void transition-colors duration-150 hover:bg-white sm:w-auto"
          >
            Book an AI Systems Audit
          </a>
          <a
            href="#services"
            className="group inline-flex items-center justify-center gap-2 px-2 py-3.5 font-medium text-body transition-colors duration-150 hover:text-signal"
          >
            See what we do
            <ArrowRight
              size={16}
              className="transition-transform duration-150 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
