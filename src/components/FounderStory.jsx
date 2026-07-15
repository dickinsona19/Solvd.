import { Clock, CreditCard, MapPin, Users } from 'lucide-react'
import FadeIn from './FadeIn'

const metrics = [
  {
    icon: Users,
    stat: '0 to 400+ Active Clients',
    detail: 'Scaled the client base seamlessly with automated onboarding.',
  },
  {
    icon: CreditCard,
    stat: '100% Automated Billing',
    detail:
      'Eliminated manual outreach and awkward phone calls for expired cards.',
  },
  {
    icon: Clock,
    stat: '10+ Hours Saved Weekly',
    detail:
      'Shifted admin work to autopilot so the team could focus on growth, not grunt work.',
  },
]

export default function FounderStory() {
  return (
    <section id="local-impact" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — facility photo frame with glowing cyan border */}
          <FadeIn>
            <div className="group relative">
              {/* Glow behind the frame */}
              <div
                aria-hidden="true"
                className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-sky-400/40 via-sky-400/10 to-cyan-300/30 opacity-60 blur-md transition-opacity duration-500 group-hover:opacity-90"
              />

              <div className="relative overflow-hidden rounded-3xl border border-sky-400/30 shadow-[0_24px_80px_rgba(2,6,23,0.8)]">
                {/* CSS-graded for the brand: desaturated, cooled, contrast-boosted */}
                <img
                  src="/clt-lifting-club.png"
                  alt="The CLT Lifting Club community gathered at our Charlotte training facility"
                  className="aspect-[4/5] w-full object-cover object-[50%_68%] brightness-[0.8] contrast-[1.12] grayscale-[35%] saturate-[0.6] transition-transform duration-500 group-hover:scale-105"
                />

                {/* Cool blue tone wash to align with the icy palette */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-sky-900/25 mix-blend-color"
                />

                {/* Fade the bright sky and turf into the slate background */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"
                />

                {/* Vignette to sink the background and focus the crowd */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_40px_rgba(2,6,23,0.55)]"
                />

                {/* Location tag pinned to the frame */}
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-slate-700/40 bg-slate-950/70 px-3.5 py-1.5 text-xs font-medium text-ink backdrop-blur-md">
                  <MapPin size={13} className="text-sky-400" />
                  Charlotte, NC
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — the growth story */}
          <div>
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
                Proven in the Trenches
              </p>
              <h2 className="font-display mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                From 0 to Scale.{' '}
                <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                  Built and proven in Charlotte.
                </span>
              </h2>
              <p className="mt-5 text-pretty leading-relaxed text-mist">
                How we engineered custom backend operations and internal
                infrastructure to help a local Charlotte brand scale to
                hundreds of active clients without adding administrative
                headcount. We ran into the same walls you are hitting — manual
                data entry, billing leaks, and scheduling friction — and
                instead of hiring more staff or buying bloated software, we
                built the systems ourselves.
              </p>
            </FadeIn>

            {/* Metric badges */}
            <div className="mt-8 space-y-4">
              {metrics.map((metric, i) => (
                <FadeIn key={metric.stat} delay={0.1 + i * 0.12}>
                  <div className="group flex items-center gap-5 rounded-2xl border border-slate-700/40 bg-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(248,250,252,0.05)] backdrop-blur-md transition-all duration-300 hover:border-sky-400/30 hover:bg-white/[0.05]">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-400 transition-colors group-hover:bg-sky-400/20">
                      <metric.icon size={21} />
                    </div>
                    <div>
                      <p className="font-display text-lg font-bold text-ink">
                        {metric.stat}
                      </p>
                      <p className="mt-0.5 text-sm leading-snug text-mist">
                        {metric.detail}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
