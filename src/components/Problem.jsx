import FadeIn from './FadeIn'
import TangleThread from './thread/TangleThread'

export default function Problem() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Offset grid: the thread owns the left, content sits right of it */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="md:grid md:grid-cols-12">
          <FadeIn className="md:col-span-9 md:col-start-4">
            <p className="display max-w-[24ch] text-ink">
              Most AI projects fail at the integration layer: the gap between
              the demo and the fifteen-year-old systems a business actually
              runs on.{' '}
              <span className="text-muted">SOLVD exists for that gap.</span>
            </p>
          </FadeIn>
        </div>
      </div>

      {/* The densest tangle on the page */}
      <div className="relative mt-4 h-40 sm:h-44">
        <TangleThread />
      </div>
    </section>
  )
}
