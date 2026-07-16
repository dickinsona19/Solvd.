import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Case study', href: '#case-study' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'border-b border-line bg-void/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center">
          <img
            src="/solvd-wordmark.png"
            alt="SOLVD"
            className="h-4 w-auto"
            width="292"
            height="56"
          />
        </a>

        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden text-sm font-medium text-body transition-colors duration-150 hover:text-ink md:block"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#audit"
            className="rounded-md border border-line-strong px-4 py-2 text-sm font-medium text-ink transition-colors duration-150 hover:border-muted hover:bg-panel"
          >
            Book an audit
          </a>
        </div>
      </nav>
    </header>
  )
}
