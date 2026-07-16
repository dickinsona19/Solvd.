import { useReducedMotion } from 'framer-motion'
import FadeIn from './FadeIn'
import {
  AllyLogo,
  AutomationLpLogo,
  CltLiftingClubLogo,
  DukeLogo,
  LowesLogo,
} from './logos/BrandLogos'

const brands = [
  { name: "Lowe's", Logo: LowesLogo, width: 'w-[7.5rem]' },
  { name: 'Ally', Logo: AllyLogo, width: 'w-[5.5rem]' },
  { name: 'Duke', Logo: DukeLogo, width: 'w-24' },
  { name: 'Automation LP', Logo: AutomationLpLogo, width: 'w-[10.5rem]' },
  { name: 'CLT Lifting Club', Logo: CltLiftingClubLogo, width: 'w-[12rem]' },
]

function LogoItem({ brand }) {
  const { Logo, name, width } = brand
  return (
    <li className="flex shrink-0 items-center px-8 sm:px-12">
      <Logo
        className={`h-7 ${width} text-body/55 transition-colors duration-200 hover:text-ink`}
        title={name}
      />
      <span className="sr-only">{name}</span>
    </li>
  )
}

export default function TrustBar() {
  const reduce = useReducedMotion()
  // Duplicate the set so the marquee can loop seamlessly
  const loop = [...brands, ...brands]

  return (
    <section aria-label="Companies our team has shipped systems for" className="pb-20 pt-4">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <p className="label-mono text-center">
            Our team has shipped systems for
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.08} className="mt-8">
        {reduce ? (
          <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-6 px-5 sm:px-8">
            {brands.map((brand) => (
              <LogoItem key={brand.name} brand={brand} />
            ))}
          </ul>
        ) : (
          <div className="relative overflow-hidden">
            {/* Soft edge fades so logos dissolve into the void */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-void to-transparent sm:w-28"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-void to-transparent sm:w-28"
            />

            <ul className="trust-marquee flex w-max items-center">
              {loop.map((brand, i) => (
                <LogoItem key={`${brand.name}-${i}`} brand={brand} />
              ))}
            </ul>
          </div>
        )}
      </FadeIn>
    </section>
  )
}
