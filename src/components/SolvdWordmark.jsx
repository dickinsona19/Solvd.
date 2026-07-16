/**
 * Brand wordmark — the official PNG asset (stencil letterforms).
 * Used at small/medium sizes. Hero intro uses a capped scale so it
 * doesn't soft-blur when enlarged.
 */
export default function SolvdWordmark({
  className = 'h-4 w-auto',
  alt = 'SOLVD',
}) {
  return (
    <img
      src="/solvd-wordmark.png"
      alt={alt}
      width={292}
      height={56}
      className={className}
      draggable={false}
    />
  )
}
