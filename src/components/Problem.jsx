import FadeIn from './FadeIn'
import TangleThread from './thread/TangleThread'

export default function Problem() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <p className="display mx-auto max-w-[22ch] text-center text-ink">
            Most AI projects fail at the integration layer: the gap between the
            demo and the fifteen-year-old systems a business actually runs on.
          </p>
          <p className="mx-auto mt-8 max-w-[36ch] text-center text-lg leading-relaxed text-body">
            SOLVD exists for that gap.
          </p>
        </FadeIn>
      </div>

      {/* Densest tangle on the page: the failure mode illustrated */}
      <div className="relative mx-auto mt-10 h-36 max-w-5xl sm:mt-14 sm:h-40">
        <TangleThread />
      </div>
    </section>
  )
}
