import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Cpu,
  LayoutDashboard,
  Sparkles,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react'
import FadeIn from './FadeIn'

const servicesData = [
  {
    id: '01',
    title: 'Workflow Automation',
    icon: Cpu,
    description:
      'Stop burning payroll on manual data entry, manual report creation, and copying info between systems. We build bulletproof automated pipelines that connect your tools and run your routine business operations on autopilot.',
    engagements: [
      {
        type: '3-Week Sprint',
        desc: 'Rapid setup. We target your single most expensive administrative bottleneck, map the business logic, and deploy automated workflows directly into your current systems.',
      },
      {
        type: 'Ongoing Retainer',
        desc: 'Continuous automation. We monitor your pipelines, handle third-party API changes, and continuously automate new workflows across other departments as you grow.',
      },
    ],
  },
  {
    id: '02',
    title: 'Custom Internal Portals',
    icon: LayoutDashboard,
    description:
      'Stop letting critical operational metrics sit scattered across multiple platforms. We build clean, private internal web apps, scheduling systems, staff dashboards, and inventory tracking tools tailored to how you actually run.',
    engagements: [
      {
        type: '6-Week Sprint',
        desc: 'Full build & launch. We design and build a single, lightweight, mobile-responsive internal tool or custom admin portal complete with secure staff login.',
      },
      {
        type: 'Ongoing Retainer',
        desc: 'Portal management. Covers server hosting maintenance, security patches, role-based permission updates, and dedicated bandwidth to build out new features.',
      },
    ],
  },
  {
    id: '03',
    title: 'AI Automations',
    icon: Sparkles,
    description:
      'Your team spends hours on work that requires reading and judgment, not just clicks. We deploy AI agents that summarize documents, draft emails and quotes, triage inbound requests, and extract data from messy files, all connected safely to your existing systems.',
    engagements: [
      {
        type: '4-Week Sprint',
        desc: 'AI pilot sprint. We identify your highest-value AI use case, build and deploy a production-ready AI workflow, and train your staff to work alongside it.',
      },
      {
        type: 'Ongoing Retainer',
        desc: 'AI operations. Includes accuracy monitoring, prompt and model tuning as your business changes, and rollout of new AI workflows across additional departments.',
      },
    ],
  },
  {
    id: '04',
    title: 'Fractional Technical Partner',
    icon: ShieldAlert,
    description:
      'Get senior software engineering depth and strategic technical oversight without the crippling overhead, benefits burden, and long hiring cycles of a full-time CTO or principal developer.',
    engagements: [
      {
        type: 'Strategic Audit',
        desc: 'Deep-dive evaluation. We audit your existing business systems, identify security risks and hidden billing leaks, and deliver a clean, build-ready technical roadmap.',
      },
      {
        type: 'Fractional CTO',
        desc: 'Ongoing leadership. Guaranteed weekly advisory hours, technical architecture planning, system oversight, and on-demand software engineering.',
      },
    ],
  },
]

function EngagementCard({ engagement, compact = false }) {
  return (
    <div
      className={`rounded-xl border border-slate-800/80 bg-slate-800/20 transition-colors hover:border-slate-700 ${
        compact ? 'p-4' : 'p-5'
      }`}
    >
      <h4
        className={`mb-2 font-semibold text-ink ${compact ? 'text-xs' : 'text-sm sm:text-base'}`}
      >
        {engagement.type}
      </h4>
      <p
        className={`leading-relaxed text-mist ${compact ? 'text-[11px]' : 'text-xs'}`}
      >
        {engagement.desc}
      </p>
    </div>
  )
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('01')
  const currentService =
    servicesData.find((s) => s.id === activeTab) ?? servicesData[0]

  return (
    <section id="services" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <FadeIn className="mb-14 sm:mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Services
          </p>
          <h2 className="font-display mt-3 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            How We Optimize Your Operations
          </h2>
        </FadeIn>

        {/* Desktop: split-screen vertical stepper */}
        <FadeIn className="hidden md:block">
          <div className="grid grid-cols-12 items-start gap-8">
            {/* Left navigation tabs */}
            <div className="relative col-span-4 space-y-1 border-l border-slate-800">
              {servicesData.map((service) => {
                const isActive = service.id === activeTab
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`group relative w-full py-4 pl-6 text-left transition-colors duration-200 ${
                      isActive ? 'text-sky-400' : 'text-mist hover:text-ink'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 top-0 w-[2px] bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.6)]"
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs tracking-wider opacity-60">
                        {service.id}
                      </span>
                      <span className="text-lg font-medium tracking-tight">
                        {service.title}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Right dynamic panel */}
            <div className="col-span-8 flex min-h-[500px] flex-col justify-between rounded-2xl border border-slate-800/60 bg-slate-800/10 p-8 backdrop-blur-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-1 flex-col justify-between space-y-8"
                >
                  <div>
                    <div className="mb-4 flex items-center gap-4">
                      <span className="font-mono text-4xl font-bold text-sky-400/20">
                        {currentService.id}
                      </span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-400">
                        <currentService.icon size={20} />
                      </div>
                      <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
                        {currentService.title}
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed text-mist">
                      {currentService.description}
                    </p>
                  </div>

                  <div className="mt-auto space-y-4">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-sky-400/80">
                      Two Ways to Engage:
                    </span>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {currentService.engagements.map((eng) => (
                        <EngagementCard key={eng.type} engagement={eng} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>

        {/* Mobile: vertical accordion */}
        <div className="space-y-4 md:hidden">
          {servicesData.map((service, i) => {
            const isOpen = activeTab === service.id
            return (
              <FadeIn key={service.id} delay={i * 0.08}>
                <div className="overflow-hidden rounded-xl border border-slate-800/60 bg-slate-800/10">
                  <button
                    onClick={() => setActiveTab(isOpen ? '' : service.id)}
                    className="flex w-full items-center justify-between bg-slate-800/20 p-5 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-sky-400">
                        {service.id}
                      </span>
                      <h3 className="text-sm font-bold tracking-tight text-ink sm:text-base">
                        {service.title}
                      </h3>
                    </div>
                    <span
                      className={`text-sky-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-90' : ''
                      }`}
                    >
                      <ArrowRight size={16} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="space-y-6 border-t border-slate-900 bg-slate-950/40 p-5">
                          <p className="text-xs leading-relaxed text-mist sm:text-sm">
                            {service.description}
                          </p>
                          <div className="space-y-3">
                            <span className="block text-[10px] font-bold uppercase tracking-wider text-sky-400/80">
                              Engagement Options:
                            </span>
                            {service.engagements.map((eng) => (
                              <EngagementCard
                                key={eng.type}
                                engagement={eng}
                                compact
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
