import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Send, ShieldCheck } from 'lucide-react'
import FadeIn from './FadeIn'

const headacheOptions = [
  { value: '', label: 'Select your biggest headache…' },
  { value: 'delinquency', label: 'Unpaid Dues / Delinquency' },
  { value: 'staffing', label: 'Staffing / Scheduling' },
  { value: 'admin', label: 'Manual Admin / Data' },
  { value: 'other', label: 'Other' },
]

const initialForm = {
  name: '',
  business: '',
  website: '',
  email: '',
  headache: '',
}

const inputClasses =
  'w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-ink placeholder:text-mist/60 outline-none transition-all focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/20'

function Field({ label, optional, children }) {
  return (
    <label className="block">
      <span className="mb-2 flex items-baseline gap-2 text-sm font-medium text-ink">
        {label}
        {optional && (
          <span className="text-xs font-normal text-mist">Optional</span>
        )}
      </span>
      {children}
    </label>
  )
}

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/contact@getsolvd.io'

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const submitted = status === 'success'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New leaks audit request from ${form.business}`,
          _template: 'table',
          name: form.name,
          business: form.business,
          website: form.website || 'Not provided',
          email: form.email,
          headache:
            headacheOptions.find((o) => o.value === form.headache)?.label ??
            form.headache,
        }),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="audit" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-xl">
          <FadeIn className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
              Free 15-Minute Leaks Audit
            </p>
            <h2 className="font-display mt-3 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Find out where your business is leaking money
            </h2>
            <p className="mt-4 text-pretty text-mist">
              Tell us a little about your operation. We'll take a look and come
              back with the fastest leak to plug — no obligation, no pitch
              deck.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-10">
            <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.03] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)] sm:p-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent"
              />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center py-12 text-center"
                  >
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-sky-400/25 bg-sky-400/10 text-sky-400">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-ink">Thank you!</h3>
                    <p className="mt-3 max-w-sm text-pretty text-mist">
                      We'll reach out in 24 hours to schedule your free
                      15-minute leaks audit.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Name">
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className={inputClasses}
                        />
                      </Field>
                      <Field label="Business Name">
                        <input
                          type="text"
                          name="business"
                          required
                          value={form.business}
                          onChange={handleChange}
                          placeholder="Queen City Fitness"
                          className={inputClasses}
                        />
                      </Field>
                    </div>

                    <Field label="Website" optional>
                      <input
                        type="url"
                        name="website"
                        value={form.website}
                        onChange={handleChange}
                        placeholder="https://yourbusiness.com"
                        className={inputClasses}
                      />
                    </Field>

                    <Field label="Email">
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@yourbusiness.com"
                        className={inputClasses}
                      />
                    </Field>

                    <Field label="What is your biggest operational headache right now?">
                      <select
                        name="headache"
                        required
                        value={form.headache}
                        onChange={handleChange}
                        className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22/%3E%3C/svg%3E')] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-11 ${
                          form.headache === '' ? 'text-mist/60' : ''
                        }`}
                      >
                        {headacheOptions.map((opt) => (
                          <option
                            key={opt.value}
                            value={opt.value}
                            disabled={opt.value === ''}
                            className="bg-slate-950 text-ink"
                          >
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-400 px-6 py-4 text-base font-semibold text-slate-950 transition-all hover:bg-sky-300 hover:shadow-[0_0_36px_rgba(56,189,248,0.4)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-sky-400 disabled:hover:shadow-none"
                    >
                      {status === 'sending'
                        ? 'Sending…'
                        : "Let's get your problem Solvd."}
                      <Send
                        size={17}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </button>

                    {status === 'error' && (
                      <p className="text-center text-xs text-red-400">
                        Something went wrong sending your request. Please try
                        again, or email us directly at{' '}
                        <a
                          href="mailto:contact@getsolvd.io"
                          className="underline"
                        >
                          contact@getsolvd.io
                        </a>
                        .
                      </p>
                    )}

                    <p className="flex items-center justify-center gap-1.5 text-center text-xs text-mist">
                      <ShieldCheck size={14} className="text-sky-400/80" />
                      No spam. No sales pressure. Just a straight answer.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
