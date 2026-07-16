/**
 * Site-wide environment: blue-tinted base with a soft light-blue wash from
 * the top and a single faint engineering grid. CSS only, fixed behind all
 * content.
 */
export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 bg-base"
    >
      {/* Light blue ambient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(3,105,161,0.09),transparent_65%)]" />

      {/* Faint engineering grid, fading toward the edges */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,23,42,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.6) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage:
            'radial-gradient(ellipse 90% 70% at 50% 0%, black, transparent)',
        }}
      />
    </div>
  )
}
