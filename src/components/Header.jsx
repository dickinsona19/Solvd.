import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'What We Fix', href: '#leaks' },
  { label: 'Services', href: '#services' },
  { label: 'Local Impact', href: '#local-impact' },
]

function Logo() {
  return (
    <a href="#top" className="font-display text-xl font-bold tracking-tight text-ink">
      Solvd<span className="text-sky-400">.</span>
    </a>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-mist transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#audit"
            className="rounded-lg bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 transition-all hover:bg-sky-300 hover:shadow-[0_0_24px_rgba(56,189,248,0.35)]"
          >
            Get Solvd
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
        <div className="border-t border-white/5 bg-slate-950/95 px-5 pb-5 pt-3 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-mist transition-colors hover:bg-white/5 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#audit"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-sky-400 px-4 py-3 text-center text-sm font-semibold text-slate-950"
            >
              Get Solvd
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
