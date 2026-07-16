import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import FadeIn from './FadeIn'
import TerminalPoint from './thread/TerminalPoint'

const initialForm = {
  name: '',
  email: '',
  focus: '',
}

const inputClasses =
  'w-full rounded-md border border-line bg-panel px-4 py-3.5 text-sm text-ink placeholder:text-muted outline-none transition-colors duration-150 focus:border-line-strong'

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
          _subject: `New AI Systems Audit request from ${form.name}`,
          _template: 'table',
          name: form.name,
          email: form.email,
          focus: form.focus || 'Not provided',
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
          {/* The thread arrives and ends here */}
          <TerminalPoint />

          <FadeIn>
            <h2 className="display mt-8 text-center text-ink">
              Find out what AI is actually worth to your operation
            </h2>
            <p className="mx-auto mt-5 max-w-[52ch] text-center text-pretty leading-relaxed text-body">
              Fixed scope, three weeks, one prioritized roadmap. Tell us a
              little about your operation and we&rsquo;ll come back within one
              business day.
            </p>
          </FadeIn>

          <FadeIn delay={0.12} className="mt-12">
            <div className="rounded-xl border border-line bg-panel p-6 sm:p-9">
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

                    <Field label="Work email">
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

                    <Field label="Where does your team lose the most time?" optional>
                      <input
                        type="text"
                        name="focus"
                        value={form.focus}
                        onChange={handleChange}
                        placeholder="Retyping orders from email into our ERP"
                        className={inputClasses}
                      />
                    </Field>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="inline-flex w-full items-center justify-center rounded-md bg-ink px-6 py-4 font-medium text-void transition-colors duration-150 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-ink"
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

                    <p className="label-mono text-center">
                      An engineer reads every request and replies personally.
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
