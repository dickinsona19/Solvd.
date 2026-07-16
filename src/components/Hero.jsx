import { ArrowRight } from 'lucide-react'
import FadeIn from './FadeIn'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-center pt-16">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 text-center sm:px-8">
        <FadeIn>
          <h1 className="mx-auto max-w-4xl text-balance font-semibold leading-[1.04] tracking-[-0.03em] text-ink [font-size:clamp(2.75rem,7vw,5.5rem)]">
            AI that actually <span className="text-accent">ships</span> inside
            your systems.
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mx-auto mt-8 max-w-[52ch] text-pretty text-lg leading-relaxed text-body">
            Custom AI automation for mid-sized companies, built and integrated
            by systems architects, not slide-deck consultants.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a
              href="#audit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-7 py-4 text-base font-semibold text-white transition-colors duration-150 hover:bg-accent-hover sm:w-auto"
            >
              Book an AI Systems Audit
            </a>
            <a
              href="#case-study"
              className="group inline-flex items-center justify-center gap-2 px-2 py-4 text-base font-medium text-body transition-colors duration-150 hover:text-ink"
            >
              See our work
              <ArrowRight
                size={16}
                className="transition-transform duration-150 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
