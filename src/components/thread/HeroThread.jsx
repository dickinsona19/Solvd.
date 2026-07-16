import { useEffect } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'framer-motion'

/*
 * The hero stage: the brand artwork at viewport scale. A field of tangled
 * strands sweeps across the whole screen and converges into the one bright
 * line, which runs to the terminal point of light. Paths are stretched to
 * the viewport (preserveAspectRatio="none") with non-scaling strokes so the
 * geometry adapts to any screen without the lines getting fat or thin.
 * Everything animates transform / opacity / pathLength only.
 */

const CONVERGE = 'S 800 420, 880 378'

const DIM_STRANDS = [
  `M-20 60 C 240 180, 420 40, 620 250 ${CONVERGE}`,
  `M-20 220 C 200 90, 400 320, 580 180 S 790 330, 880 378`,
  `M-20 360 C 180 480, 360 240, 560 360 S 780 300, 880 378`,
  `M-20 500 C 220 380, 380 560, 600 460 ${CONVERGE}`,
  `M-20 650 C 240 760, 420 520, 640 600 S 820 460, 880 378`,
  `M-20 790 C 200 640, 440 820, 660 640 S 810 480, 880 378`,
  `M-20 870 C 260 780, 460 880, 680 700 S 830 500, 880 378`,
  `M-20 140 C 300 300, 460 120, 640 300 S 800 380, 880 378`,
]

const BRIGHT_PATH =
  'M-20 430 C 200 560, 340 260, 520 420 S 740 320, 880 378 L 1380 378'

export default function HeroThread({ y, opacity }) {
  const reduce = useReducedMotion()

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const px = useSpring(mx, { stiffness: 45, damping: 22 })
  const py = useSpring(my, { stiffness: 45, damping: 22 })

  useEffect(() => {
    if (reduce) return undefined
    const onMove = (e) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 18)
      my.set((e.clientY / window.innerHeight - 0.5) * 12)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduce, mx, my])

  return (
    <motion.div
      aria-hidden="true"
      style={{ y, opacity }}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Parallax layer: the whole field leans gently toward the cursor */}
      <motion.div
        style={reduce ? undefined : { x: px, y: py }}
        className="absolute -inset-6"
      >
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
          className="h-full w-full [filter:drop-shadow(0_0_7px_rgba(61,123,253,0.3))]"
        >
          {/* The tangle: dim strands drifting slowly, converging on the line */}
          <motion.g
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          >
            {DIM_STRANDS.map((d, i) => (
              <motion.path
                key={i}
                d={d}
                stroke="#3D7BFD"
                strokeOpacity={0.07 + (i % 3) * 0.03}
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
                initial={reduce ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.2,
                  delay: reduce ? 0 : 0.08 * i,
                  ease: [0.3, 0, 0.2, 1],
                }}
                className={i > 4 ? 'hidden sm:block' : undefined}
              />
            ))}
          </motion.g>

          {/* The one bright strand resolving out of the tangle */}
          <motion.path
            d={BRIGHT_PATH}
            stroke="#3D7BFD"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            initial={reduce ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: reduce ? 0 : 0.15, ease: [0.3, 0, 0.2, 1] }}
          />
        </svg>

        {/* Terminal point of light, breathing once the line lands.
            HTML so it stays perfectly round despite the stretched SVG. */}
        <motion.span
          initial={reduce ? false : { opacity: 0 }}
          animate={
            reduce
              ? { opacity: 1 }
              : { opacity: [0.45, 1, 0.45] }
          }
          transition={
            reduce
              ? undefined
              : { duration: 3, repeat: Infinity, delay: 1.5, ease: 'easeInOut' }
          }
          className="absolute left-[95.8%] top-[42%] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-core [filter:drop-shadow(0_0_12px_rgba(156,194,255,0.9))]"
        />
      </motion.div>
    </motion.div>
  )
}
