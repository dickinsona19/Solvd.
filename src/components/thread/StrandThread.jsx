import { useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useReducedMotion,
} from 'framer-motion'

/*
 * The single bright strand running vertically down the left margin through
 * the Services -> Case study run. Draws with scroll progress on a spring so
 * the light travels rather than teleports. Static and complete under
 * prefers-reduced-motion.
 */
export default function StrandThread({ children }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.75', 'end 0.55'],
  })
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  })

  return (
    <div ref={ref} className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-4 hidden w-[1.5px] md:block xl:left-[calc(50vw-36rem+1rem)]"
      >
        <motion.div
          style={reduce ? undefined : { scaleY }}
          className="h-full w-full origin-top bg-signal [filter:drop-shadow(0_0_7px_rgba(61,123,253,0.35))]"
        />
      </div>
      {children}
    </div>
  )
}
