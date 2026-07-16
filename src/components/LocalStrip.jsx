import FadeIn from './FadeIn'

export default function LocalStrip() {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <p className="label-mono text-center">
            Based in Charlotte, NC. We come to your building and work on your
            real systems.
          </p>
        </FadeIn>
      </div>
    </div>
  )
}
