'use client'

import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactSection() {
  const [state, setState] = useState<FormState>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setState('success')
        form.reset()
      } else {
        setState('error')
      }
    } catch (_err) {
      setState('error')
    }
  }

  return (
    <section id="contact" className="bg-dark py-24 px-[5%]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-start">

        {/* Left — info */}
        <div>
          <p className="eyebrow mb-4">Get in Touch</p>
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] mb-6">
            Let&apos;s talk about<br />your yard.
          </h2>
          <p className="text-muted leading-[1.8] mb-8 text-[0.95rem]">
            Tell Thomas what you need — he&apos;ll get back to you within 24 hours.
            No automated responses, no call center. Just a real person who wants
            to see your yard look right.
          </p>
          <div className="flex flex-col gap-4">
            {[
              { icon: '📞', label: <a href="tel:2694400864" className="text-cream-muted hover:text-gold transition-colors no-underline">(269) 440-0864</a> },
              { icon: '✉️', label: <a href="mailto:thomas@hoopersgreenthumb.com" className="text-cream-muted hover:text-gold transition-colors no-underline">thomas@hoopersgreenthumb.com</a> },
              { icon: '📍', label: 'Kalamazoo, Michigan' },
              { icon: '⏱️', label: 'Response within 24 hours — usually faster' },
            ].map(({ icon, label }, i) => (
              <div key={i} className="flex items-center gap-3 text-cream-muted text-[0.92rem]">
                <span className="text-lg">{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="bg-forest/20 border border-gold/15 rounded-xl p-8 md:p-10">
          {state === 'success' ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-5">✅</div>
              <h3 className="text-xl mb-3">Message sent!</h3>
              <p className="text-muted text-sm">Thomas will be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field id="name"  label="Your Name"    type="text"  placeholder="Jane Smith"          required />
                <Field id="phone" label="Phone Number" type="tel"   placeholder="(269) 555-1234"      />
              </div>
              <Field id="email"   label="Email Address" type="email" placeholder="you@email.com"      required />
              <Field id="address" label="Property Address" type="text" placeholder="123 Oak St, Kalamazoo, MI" />

              <div className="flex flex-col gap-1.5">
                <label htmlFor="service" className="text-[0.72rem] font-semibold tracking-widest uppercase text-gold">
                  Service Needed
                </label>
                <select
                  id="service" name="service"
                  className="bg-dark/55 border border-gold/15 rounded-md px-4 py-3.5 text-cream font-body text-[0.92rem] outline-none focus:border-gold transition-colors"
                >
                  <option value="">Select a service…</option>
                  <option>Lawn Mowing & Edging</option>
                  <option>Landscaping Design & Installation</option>
                  <option>Garden Bed Planting & Maintenance</option>
                  <option>Mulching & Soil Work</option>
                  <option>Tree & Shrub Trimming</option>
                  <option>Seasonal Cleanup</option>
                  <option>Multiple Services / Not Sure Yet</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-[0.72rem] font-semibold tracking-widest uppercase text-gold">
                  Tell Me About Your Yard
                </label>
                <textarea
                  id="message" name="message" rows={4}
                  placeholder="What needs work? Any specific goals? Anything I should know…"
                  className="bg-dark/55 border border-gold/15 rounded-md px-4 py-3.5 text-cream font-body text-[0.92rem] outline-none focus:border-gold transition-colors resize-y placeholder-cream/25"
                />
              </div>

              {state === 'error' && (
                <p className="text-red-400 text-sm">Something went wrong — please try emailing thomas@hoopersgreenthumb.com directly.</p>
              )}

              <button
                type="submit"
                disabled={state === 'submitting'}
                className="btn btn-gold btn-lg w-full justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {state === 'submitting' ? 'Sending…' : 'Send My Quote Request →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  id, label, type, placeholder, required,
}: {
  id: string; label: string; type: string; placeholder: string; required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[0.72rem] font-semibold tracking-widest uppercase text-gold">
        {label}
      </label>
      <input
        id={id} name={id} type={type} placeholder={placeholder} required={required}
        className="bg-dark/55 border border-gold/15 rounded-md px-4 py-3.5 text-cream font-body text-[0.92rem] outline-none focus:border-gold transition-colors placeholder-cream/25"
      />
    </div>
  )
}
