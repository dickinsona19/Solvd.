export default function Footer() {
  return (
    <footer className="pb-10 pt-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <p className="text-base font-semibold tracking-[-0.02em] text-ink">
          SOLVD
        </p>
        <div className="flex flex-col items-center gap-3 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted sm:flex-row sm:gap-8">
          <a
            href="mailto:contact@getsolvd.io"
            className="transition-colors duration-150 hover:text-ink"
          >
            contact@getsolvd.io
          </a>
          <p>Charlotte, NC</p>
          <p>&copy; {new Date().getFullYear()} SOLVD</p>
        </div>
      </div>
    </footer>
  )
}
