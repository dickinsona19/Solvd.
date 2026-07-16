import { motion, useReducedMotion } from 'framer-motion'

/*
 * The densest tangle on the page, behind the problem statement: dim strands
 * crossing, one bright strand finding its way through.
 */

const DIM_STRANDS = [
  'M-20 40 C 90 120, 180 -10, 290 80 S 460 160, 560 60',
  'M-20 110 C 100 30, 200 150, 320 70 S 470 20, 570 90',
  'M-20 70 C 80 160, 210 40, 330 120 S 480 140, 575 75',
  'M-20 140 C 110 60, 230 170, 350 90 S 490 40, 580 110',
  'M-20 90 C 120 10, 240 130, 370 50 S 500 120, 585 85',
]

const BRIGHT_PATH =
  'M-20 100 C 100 140, 220 40, 340 96 S 500 80, 700 88 L 1160 88'

export default function TangleThread() {
  const reduce = useReducedMotion()

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 180"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      className="pointer-events-none absolute inset-x-0 bottom-0 w-full [filter:drop-shadow(0_0_7px_rgba(61,123,253,0.3))]"
    >
      {DIM_STRANDS.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="#3D7BFD"
          strokeOpacity="0.12"
          strokeWidth="1.5"
          className={i > 2 ? 'hidden sm:block' : undefined}
        />
      ))}

      <motion.path
        d={BRIGHT_PATH}
        stroke="#3D7BFD"
        strokeWidth="1.5"
        initial={reduce ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.4, ease: [0.3, 0, 0.2, 1] }}
      />
    </svg>
  )
}
