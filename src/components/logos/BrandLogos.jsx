/**
 * Monochrome brand marks for the trust strip.
 * Take currentColor so they sit silver on navy and brighten on hover.
 */

export function LowesLogo({ className }) {
  return (
    <svg viewBox="0 0 120 32" aria-label="Lowe's" className={className}>
      <text
        x="60"
        y="22"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Geist, ui-sans-serif, system-ui, sans-serif"
        fontSize="20"
        fontWeight="600"
        letterSpacing="0.08em"
      >
        {"LOWE'S"}
      </text>
    </svg>
  )
}

export function AllyLogo({ className }) {
  return (
    <svg viewBox="0 0 88 32" aria-label="Ally" className={className}>
      <text
        x="44"
        y="22"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Geist, ui-sans-serif, system-ui, sans-serif"
        fontSize="20"
        fontWeight="600"
        letterSpacing="0.14em"
      >
        ALLY
      </text>
    </svg>
  )
}

export function AutomationLpLogo({ className }) {
  return (
    <svg viewBox="0 0 168 32" aria-label="Automation LP" className={className}>
      <text
        x="84"
        y="22"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Geist, ui-sans-serif, system-ui, sans-serif"
        fontSize="15"
        fontWeight="600"
        letterSpacing="0.1em"
      >
        AUTOMATION LP
      </text>
    </svg>
  )
}

export function DukeLogo({ className }) {
  return (
    <svg viewBox="0 0 112 32" aria-label="Duke" className={className}>
      {/* Duke Energy-style D mark + word */}
      <path
        fill="currentColor"
        d="M4 4h9.5c7.4 0 12.2 4.2 12.2 11.2S20.9 26.4 13.5 26.4H4V4zm5 4.2v14h4.5c4.2 0 7-2.4 7-7s-2.8-7-7-7H9z"
      />
      <text
        x="74"
        y="22"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Geist, ui-sans-serif, system-ui, sans-serif"
        fontSize="18"
        fontWeight="600"
        letterSpacing="0.16em"
      >
        DUKE
      </text>
    </svg>
  )
}

export function CltLiftingClubLogo({ className }) {
  return (
    <svg viewBox="0 0 196 32" aria-label="CLT Lifting Club" className={className}>
      {/* Barbell mark */}
      <g fill="currentColor">
        <rect x="2" y="9" width="3" height="14" rx="0.6" />
        <rect x="5.4" y="11.5" width="2.2" height="9" rx="0.4" />
        <rect x="8" y="14.5" width="16" height="2.2" rx="1.1" />
        <rect x="24.4" y="11.5" width="2.2" height="9" rx="0.4" />
        <rect x="27" y="9" width="3" height="14" rx="0.6" />
      </g>
      <text
        x="118"
        y="22"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Geist, ui-sans-serif, system-ui, sans-serif"
        fontSize="13"
        fontWeight="600"
        letterSpacing="0.08em"
      >
        CLT LIFTING CLUB
      </text>
    </svg>
  )
}
