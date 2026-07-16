import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Case study', href: '#case-study' },
  { label: 'Why SOLVD', href: '#why-solvd' },
]

function Logo() {
  return (
    <a
      href="#top"
      className="text-lg font-semibold tracking-[-0.02em] text-ink"
    >
      SOLVD
    </a>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-base/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-body transition-colors duration-150 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#audit"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-accent-hover"
          >
            Book an AI Systems Audit
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="p-2 text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-base/95 px-5 pb-5 pt-3 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-body transition-colors duration-150 hover:bg-surface-2 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#audit"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Book an AI Systems Audit
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
