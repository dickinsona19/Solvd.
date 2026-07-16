import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import HeroThread from './thread/HeroThread'
import SolvdWordmark from './SolvdWordmark'

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

const HEADLINE = [
  { text: 'AI that actually' },
  { text: 'ships', accent: true },
  { text: 'inside your systems.' },
]

const HEADLINE_PLAIN = 'AI that actually ships inside your systems.'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1]
const SPRING_SHRINK = { type: 'spring', stiffness: 70, damping: 16, mass: 0.9 }

function HeroLogo({ reduce }) {
  return (
    <div className="relative mx-auto flex h-[min(18vw,88px)] items-center justify-center sm:h-[72px]">
      {/* Soft signal wash behind the mark during the intro */}
      {!reduce && (
        <motion.span
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: [0, 0.55, 0.2], scale: [0.6, 1.15, 1] }}
          transition={{
            duration: 1.4,
            delay: HERO_T.logoLetter,
            ease: 'easeOut',
            times: [0, 0.45, 1],
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-[min(80vw,420px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(61,123,253,0.35),transparent_70%)]"
        />
      )}

      <motion.div
        className="relative origin-center"
        initial={reduce ? false : { scale: 2.8 }}
        animate={{ scale: 1 }}
        transition={
          reduce
            ? { duration: 0 }
            : {
                ...SPRING_SHRINK,
                delay: HERO_T.logoShrink,
              }
        }
      >
        <SolvdWordmark
          className="text-[clamp(2.75rem,8vw,4.25rem)]"
          renderLetter={(letter, i) => (
            <motion.span
              key={letter}
              className="inline-block overflow-hidden"
              style={{ marginRight: i === 4 ? '-0.2em' : undefined }}
            >
              <motion.span
                className="inline-block"
                initial={reduce ? false : { y: '120%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: HERO_T.logoLetterDur,
                  delay: reduce
                    ? 0
                    : HERO_T.logoLetter + i * HERO_T.logoLetterStagger,
                  ease: EASE_OUT_EXPO,
                }}
              >
                {letter}
              </motion.span>
            </motion.span>
          )}
        />

        {/* Signal underline draws under the wordmark */}
        <motion.span
          aria-hidden="true"
          initial={reduce ? false : { scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: reduce ? 0 : HERO_T.logoUnderline,
            ease: [0.3, 0, 0.2, 1],
          }}
          className="mx-auto mt-3 block h-[2px] w-[92%] origin-left bg-signal [filter:drop-shadow(0_0_8px_rgba(61,123,253,0.55))]"
        />

        {/* Light comet that rides the underline as it draws */}
        {!reduce && (
          <motion.span
            aria-hidden="true"
            initial={{ left: '4%', opacity: 0 }}
            animate={{ left: '96%', opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 0.7,
              delay: HERO_T.logoUnderline,
              ease: [0.3, 0, 0.2, 1],
            }}
            className="absolute bottom-[-2px] h-2 w-2 -translate-x-1/2 rounded-full bg-signal-core [filter:drop-shadow(0_0_10px_rgba(156,194,255,0.95))]"
          />
        )}
      </motion.div>
    </div>
  )
}

function AnimatedHeadline({ reduce }) {
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
                  const delay = HERO_T.headline + HERO_T.perLetter * letterIndex++
                  return (
                    <motion.span
                      key={l}
                      className="inline-block"
                      initial={reduce ? false : { y: '115%' }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: HERO_T.letterDur,
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
                      delay: reduce ? 0 : HERO_T.underline,
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
      <HeroThread y={fieldY} opacity={fieldOpacity} startAt={HERO_T.line} />

      <motion.div
        style={reduce ? undefined : { y: contentY }}
        className="relative z-10 mx-auto w-full max-w-6xl px-5 py-20 text-center sm:px-8"
      >
        <HeroLogo reduce={reduce} />

        <AnimatedHeadline reduce={reduce} />

        <motion.p
          {...fadeUp(HERO_T.subline)}
          className="mx-auto mt-8 max-w-[52ch] text-pretty leading-relaxed text-body"
        >
          Complex systems in, one working solution out: custom AI automation
          built by systems architects, not slide-deck consultants.
        </motion.p>

        <motion.div
          {...fadeUp(HERO_T.ctas)}
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
