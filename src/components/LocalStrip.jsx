import FadeIn from './FadeIn'

export default function LocalStrip() {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <p className="text-center font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-muted">
            Charlotte, NC. We work in your building, not just your browser.
          </p>
        </FadeIn>
      </div>
    </div>
  )
}
