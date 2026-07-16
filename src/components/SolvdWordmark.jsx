/**
 * Vector SOLVD wordmark (Archivo, expanded). Stays sharp at any scale —
 * the raster PNG softens when the hero blows it up.
 */
const LETTERS = ['S', 'O', 'L', 'V', 'D']

export default function SolvdWordmark({
  className = '',
  letterClassName = '',
  renderLetter,
}) {
  return (
    <span
      aria-label="SOLVD"
      className={`inline-flex items-baseline justify-center text-ink ${className}`}
      style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 300,
        fontStretch: '125%',
        letterSpacing: '0.2em',
        lineHeight: 1,
      }}
    >
      {LETTERS.map((letter, i) => {
        if (renderLetter) {
          return renderLetter(letter, i)
        }
        return (
          <span
            key={letter}
            className={`inline-block ${letterClassName}`}
            style={{
              marginRight: i === LETTERS.length - 1 ? '-0.2em' : undefined,
            }}
          >
            {letter}
          </span>
        )
      })}
    </span>
  )
}
