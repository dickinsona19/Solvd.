import { MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <p className="font-display text-lg font-bold tracking-tight text-ink">
          Solvd<span className="text-sky-400">.</span>
        </p>
        <p className="flex items-center gap-1.5 text-xs text-mist">
          <MapPin size={13} className="text-sky-400/80" />
          Charlotte, NC &amp; surrounding areas
        </p>
        <p className="text-xs text-mist">
          &copy; {new Date().getFullYear()} Solvd. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
