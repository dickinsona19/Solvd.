import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import FadeIn from './FadeIn'

/*
 * Assess -> Build -> Operate. The delivery rail down the left edge is this
 * section's segment of the thread: one line, mono phase markers, drawn once
 * on entry. The audit card is the emphasized entry offering; everything
 * else stays quiet.
 */

const audit = {
  marker: '01 · Assess',
  tag: 'Start here',
  title: 'Technology & AI Opportunity Audit',
  hook: 'Know exactly where technology and AI will pay off, before you spend a dollar building.',
  desc: 'A fixed-price, 2 to 3 week assessment of your entire operational stack. We map your workflows, data, cloud posture, and security, then hand you a prioritized roadmap of the automation and system opportunities with the highest ROI: each one scoped and quoted, ready to build.',
  includes: [
    'Workflow and process mapping across your teams',
    'Data readiness and security review',
    'Cloud and infrastructure assessment',
    'Prioritized roadmap with projected ROI per opportunity',
    'Fixed-scope build quotes for your top opportunities',
  ],
  cta: 'Book an audit',
  meta: 'Fixed price · 2–3 weeks',
}

const services = [
  {
    marker: '02 · Build',
    title: 'Custom AI & Agent Systems',
    hook: 'AI that actually ships, built to bank-grade standards.',
    desc: "We design and build production AI systems: agentic workflows that execute multi-step processes, copilots trained on your company's data, and intake and document automation that removes hours of manual work. Built with the security, governance, and human-in-the-loop controls that regulated enterprises require, because that's where we come from.",
    includes: [
      'Agentic workflow automation across your existing tools',
      'Internal copilots and assistants over your company data',
      'Document, intake, and communication automation',
      'Governance, access controls, and human-in-the-loop review built in',
      'Integration with your current CRM, ERP, and systems of record',
    ],
    cta: 'Scope a build',
  },
  {
    marker: '03 · Build',
    title: 'Internal Systems & Custom Business Platforms',
    hook: 'Replace the spreadsheets and duct-taped SaaS with a system built for how you actually operate.',
    desc: "Custom CRMs, operations portals, admin dashboards, billing systems, and employee tools, designed around your workflows instead of forcing your business into someone else's software. Clean, structured systems that also lay the data foundation for AI when you're ready.",
    includes: [
      'Custom CRM and operations platforms',
      'Admin dashboards and internal reporting',
      'Billing, scheduling, and workflow tooling',
      'Mobile and web apps for your team and customers',
      "Data architecture that's AI-ready from day one",
    ],
    cta: 'Discuss your system',
  },
  {
    marker: '04 · Operate',
    tag: 'Existing clients',
    title: 'Fractional CTO & Technology Advisory',
    hook: 'Senior technical leadership, without the full-time hire.',
    desc: "Ongoing strategic partnership for companies without technical leadership: technology roadmap, architecture review, vendor and build-vs-buy decisions, and hiring support. Offered selectively to clients we've already built with, so the advice comes from engineers who know your systems from the inside.",
    includes: [
      'Technology roadmap and quarterly planning',
      'Architecture and security review',
      'Vendor evaluation and build-vs-buy guidance',
      'Technical hiring support and team mentorship',
    ],
    cta: 'Ask about advisory',
  },
]

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-signal/10 px-3 py-1 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-signal-core">
      {children}
    </span>
  )
}

function Marker({ children }) {
  return <p className="label-mono">{children}</p>
}

function IncludesList({ items, className = '' }) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-body">
          <span
            aria-hidden="true"
            className="mt-2.5 h-px w-4 shrink-0 bg-line-strong"
          />
          {item}
        </li>
      ))}
    </ul>
  )
}

function TextCta({ children }) {
  return (
    <a
      href="#audit"
      className="group inline-flex items-center gap-2 text-sm font-medium text-body transition-colors duration-150 hover:text-signal"
    >
      {children}
      <ArrowRight
        size={14}
        strokeWidth={1.5}
        className="transition-transform duration-150 group-hover:translate-x-0.5"
      />
    </a>
  )
}

export default function ServicesSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-16 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <FadeIn>
          <p className="label-mono">What we do</p>
          <h2 id="services-heading" className="display mt-4 text-ink">
            Assess. Build. Operate.
          </h2>
          <p className="mt-5 max-w-[60ch] leading-relaxed text-body">
            We find the highest-leverage opportunities in your business, build
            the systems to capture them, and keep those systems running.
          </p>
        </FadeIn>

        {/* Card stack with the delivery rail on the left */}
        <div className="relative mt-14 lg:pl-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-[1.5px] lg:block"
          >
            <motion.div
              initial={reduce ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.2, ease: [0.3, 0, 0.2, 1] }}
              className="h-full w-full origin-top bg-signal [filter:drop-shadow(0_0_7px_rgba(61,123,253,0.35))]"
            />
          </div>

          {/* 01: the emphasized entry offering */}
          <FadeIn>
            <Marker>{audit.marker}</Marker>
            <article className="mt-3 rounded-xl border border-line-strong bg-panel-2 p-6 transition-colors duration-200 hover:border-muted sm:p-10">
              <Tag>{audit.tag}</Tag>
              <h3 className="mt-5 text-2xl font-semibold text-ink">
                {audit.title}
              </h3>

              <div className="mt-4 gap-10 lg:grid lg:grid-cols-[11fr_9fr]">
                <div>
                  <p className="font-medium leading-relaxed text-ink">
                    {audit.hook}
                  </p>
                  <p className="mt-3 max-w-[62ch] text-[0.9375rem] leading-relaxed text-body">
                    {audit.desc}
                  </p>
                </div>
                <IncludesList
                  items={audit.includes}
                  className="mt-8 border-t border-line pt-6 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"
                />
              </div>

              <div className="mt-8 flex flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href="#audit"
                  className="inline-flex items-center justify-center rounded-md bg-ink px-6 py-3.5 font-medium text-void transition-colors duration-150 hover:bg-white"
                >
                  {audit.cta}
                </a>
                <p className="label-mono">{audit.meta}</p>
              </div>
            </article>
          </FadeIn>

          {/* 02-04: build and operate */}
          <div className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={0.06 * i} className="flex h-full flex-col">
                <Marker>{service.marker}</Marker>
                <article className="mt-3 flex flex-1 flex-col rounded-xl border border-line bg-panel p-6 transition-all duration-150 hover:-translate-y-0.5 hover:border-line-strong sm:p-8">
                  {service.tag && (
                    <div className="mb-4">
                      <Tag>{service.tag}</Tag>
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-ink">
                    {service.hook}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {service.desc}
                  </p>
                  <IncludesList
                    items={service.includes}
                    className="mt-6 border-t border-line pt-6"
                  />
                  <div className="mt-auto pt-8">
                    <TextCta>{service.cta}</TextCta>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
