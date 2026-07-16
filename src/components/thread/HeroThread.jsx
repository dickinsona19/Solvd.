import { useEffect } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion'

/*
 * The hero stage: the brand artwork at viewport scale, in two depth planes.
 * Drawing is delayed until `startAt` so the massive logo owns the opening.
 * Paths stretch to the viewport with non-scaling strokes.
 */

const BACK_STRANDS = [
  'M-20 60 C 240 180, 420 40, 620 250 S 800 300, 880 200',
  'M-20 360 C 180 480, 360 240, 560 360 S 780 240, 880 200',
  'M-20 650 C 240 760, 420 520, 640 600 S 820 320, 880 200',
  'M-20 870 C 260 780, 460 880, 680 700 S 830 340, 880 200',
]

const FRONT_STRANDS = [
  'M-20 220 C 200 90, 400 320, 580 180 S 790 260, 880 200',
  'M-20 500 C 220 380, 380 560, 600 460 S 800 280, 880 200',
  'M-20 790 C 200 640, 440 820, 660 640 S 810 320, 880 200',
  'M-20 140 C 300 300, 460 120, 640 300 S 800 220, 880 200',
]

const BRIGHT_PATH =
  'M-20 260 C 200 360, 340 120, 520 240 S 740 150, 880 200 L 1380 200'

const LINE_TOP = '22.2%'
const DOT_LEFT = '95.8%'

function Strands({ paths, opacityBase, reduce, delayBase }) {
  return paths.map((d, i) => (
    <motion.path
      key={i}
      d={d}
      stroke="#3D7BFD"
      strokeOpacity={opacityBase + (i % 2) * 0.03}
      strokeWidth="1.5"
      vectorEffect="non-scaling-stroke"
      initial={reduce ? false : { pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 1.1,
        delay: reduce ? 0 : delayBase + 0.09 * i,
        ease: [0.3, 0, 0.2, 1],
      }}
      className={i > 1 ? 'hidden sm:block' : undefined}
    />
  ))
}

export default function HeroThread({ y, opacity, startAt = 0 }) {
  const reduce = useReducedMotion()

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const px = useSpring(mx, { stiffness: 45, damping: 22 })
  const py = useSpring(my, { stiffness: 45, damping: 22 })
  const pxBack = useTransform(px, (v) => v * 0.45)
  const pyBack = useTransform(py, (v) => v * 0.45)

  useEffect(() => {
    if (reduce) return undefined
    const onMove = (e) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 20)
      my.set((e.clientY / window.innerHeight - 0.5) * 14)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduce, mx, my])

  const lineDelay = reduce ? 0 : startAt
  const pulseDelay = reduce ? 0 : startAt + 2.2
  const dotDelay = reduce ? 0 : startAt + 1.35

  return (
    <motion.div
      aria-hidden="true"
      style={{ y, opacity }}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -inset-8">
        <motion.svg
          style={reduce ? undefined : { x: pxBack, y: pyBack }}
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
          className="absolute inset-0 h-full w-full"
        >
          <motion.g
            animate={reduce ? undefined : { y: [0, -12, 0] }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: lineDelay,
            }}
          >
            <Strands
              paths={BACK_STRANDS}
              opacityBase={0.06}
              reduce={reduce}
              delayBase={lineDelay}
            />
          </motion.g>
        </motion.svg>

        <motion.svg
          style={reduce ? undefined : { x: px, y: py }}
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
          className="absolute inset-0 h-full w-full [filter:drop-shadow(0_0_7px_rgba(61,123,253,0.3))]"
        >
          <motion.g
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: lineDelay,
            }}
          >
            <Strands
              paths={FRONT_STRANDS}
              opacityBase={0.11}
              reduce={reduce}
              delayBase={lineDelay + 0.1}
            />
          </motion.g>

          <motion.path
            d={BRIGHT_PATH}
            stroke="#3D7BFD"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            initial={reduce ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.4,
              delay: lineDelay,
              ease: [0.3, 0, 0.2, 1],
            }}
          />
        </motion.svg>

        <motion.div
          style={reduce ? undefined : { x: px, y: py }}
          className="absolute inset-0"
        >
          {!reduce && (
            <motion.span
              initial={{ left: '46%', opacity: 0 }}
              animate={{
                left: ['46%', DOT_LEFT],
                opacity: [0, 0.9, 0.9, 0],
              }}
              transition={{
                duration: 1.8,
                delay: pulseDelay,
                repeat: Infinity,
                repeatDelay: 3.6,
                ease: 'easeInOut',
                times: [0, 0.15, 0.85, 1],
              }}
              style={{ top: LINE_TOP }}
              className="absolute h-[2px] w-24 -translate-x-full -translate-y-1/2 bg-gradient-to-r from-transparent to-signal-core/70"
            />
          )}

          <motion.span
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { opacity: [0.45, 1, 0.45] }}
            transition={
              reduce
                ? undefined
                : {
                    duration: 3,
                    repeat: Infinity,
                    delay: dotDelay,
                    ease: 'easeInOut',
                  }
            }
            style={{ top: LINE_TOP, left: DOT_LEFT }}
            className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-core [filter:drop-shadow(0_0_12px_rgba(156,194,255,0.9))]"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
