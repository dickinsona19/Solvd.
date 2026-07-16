import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import FadeIn from './FadeIn'

const focusOptions = [
  { value: '', label: 'What should AI take off your team\u2019s plate?' },
  { value: 'data-entry', label: 'Manual data entry & document handling' },
  { value: 'communication', label: 'Customer communication & follow-ups' },
  { value: 'reporting', label: 'Reporting & internal visibility' },
  { value: 'unsure', label: 'Not sure yet, that\u2019s what the audit is for' },
  { value: 'other', label: 'Other' },
]

const initialForm = {
  name: '',
  business: '',
  website: '',
  email: '',
  focus: '',
}

const inputClasses =
  'w-full rounded-lg border border-border bg-surface px-4 py-3.5 text-sm text-ink placeholder:text-muted outline-none transition-colors duration-150 focus:border-border-strong focus-visible:outline-2 focus-visible:outline-accent'

function Field({ label, optional, children }) {
  return (
    <label className="block">
      <span className="mb-2 flex items-baseline gap-2 text-sm font-medium text-ink">
        {label}
        {optional && (
          <span className="text-xs font-normal text-muted">Optional</span>
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
  const reduceMotion = useReducedMotion()

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
          _subject: `New AI Systems Audit request from ${form.business}`,
          _template: 'table',
          name: form.name,
          business: form.business,
          website: form.website || 'Not provided',
          email: form.email,
          focus:
            focusOptions.find((o) => o.value === form.focus)?.label ??
            form.focus,
        }),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="audit" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-xl">
          <FadeIn>
            <h2 className="text-center text-balance font-semibold tracking-[-0.02em] text-ink [font-size:clamp(2rem,4vw,3rem)]">
              Find out what AI is actually worth to your operation
            </h2>
            <p className="mx-auto mt-5 max-w-[50ch] text-center text-pretty leading-relaxed text-body">
              Fixed scope, three weeks, one prioritized roadmap. Tell us a
              little about your operation and we&rsquo;ll come back within one
              business day.
            </p>
          </FadeIn>

          <FadeIn delay={0.12} className="mt-12">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-9">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={reduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center py-12 text-center"
                  >
                    <CheckCircle2 size={32} className="mb-5 text-ink" />
                    <h3 className="text-2xl font-semibold text-ink">
                      Request received
                    </h3>
                    <p className="mt-3 max-w-sm text-pretty text-body">
                      We&rsquo;ll reach out within one business day to
                      schedule your audit.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    exit={reduceMotion ? undefined : { opacity: 0 }}
                    transition={{ duration: 0.2 }}
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
                      <Field label="Company">
                        <input
                          type="text"
                          name="business"
                          required
                          value={form.business}
                          onChange={handleChange}
                          placeholder="Queen City Logistics"
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
                        placeholder="https://yourcompany.com"
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
                        placeholder="jane@yourcompany.com"
                        className={inputClasses}
                      />
                    </Field>

                    <Field label="Where does your team lose the most time?">
                      <select
                        name="focus"
                        required
                        value={form.focus}
                        onChange={handleChange}
                        className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22/%3E%3C/svg%3E')] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-11 ${
                          form.focus === '' ? 'text-muted' : ''
                        }`}
                      >
                        {focusOptions.map((opt) => (
                          <option
                            key={opt.value}
                            value={opt.value}
                            disabled={opt.value === ''}
                            className="bg-surface text-ink"
                          >
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-6 py-4 text-base font-semibold text-white transition-colors duration-150 hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-accent"
                    >
                      {status === 'sending'
                        ? 'Sending…'
                        : 'Book an AI Systems Audit'}
                    </button>

                    {status === 'error' && (
                      <p className="text-center text-xs text-body">
                        Something went wrong sending your request. Please try
                        again, or email us directly at{' '}
                        <a
                          href="mailto:contact@getsolvd.io"
                          className="text-ink underline"
                        >
                          contact@getsolvd.io
                        </a>
                        .
                      </p>
                    )}

                    <p className="text-center font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
                      No spam. No sales pressure. A straight answer.
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
