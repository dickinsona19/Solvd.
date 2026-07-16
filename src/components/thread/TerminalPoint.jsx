import { motion, useReducedMotion } from 'framer-motion'

/*
 * The thread's ending: a short vertical arrival and the page's final point
 * of light, placed directly beside the CTA. The story ends on the action.
 */
export default function TerminalPoint() {
  const reduce = useReducedMotion()

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none flex flex-col items-center [filter:drop-shadow(0_0_7px_rgba(61,123,253,0.35))]"
    >
      <motion.div
        initial={reduce ? false : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.3, 0, 0.2, 1] }}
        className="h-14 w-[1.5px] origin-top bg-signal"
      />
      <motion.span
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ delay: reduce ? 0 : 0.7, duration: 0.3 }}
        className="-mt-0.5 block h-1.5 w-1.5 rounded-full bg-signal-core [filter:drop-shadow(0_0_12px_rgba(156,194,255,0.9))]"
      />
    </div>
  )
}
