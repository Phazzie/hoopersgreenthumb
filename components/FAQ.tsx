'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Do I need to be home when Thomas comes?',
    a: "No — as long as Thomas can access the yard, you don't need to be there. Most customers aren't. If there's anything specific to discuss, a quick text or email before the appointment handles it.",
  },
  {
    q: 'Are you insured?',
    a: 'Yes. Hooper\'s Green Thumb carries liability insurance. You can ask for proof of coverage before any work begins — that\'s a completely reasonable request and Thomas is happy to provide it.',
  },
  {
    q: 'Do you do one-time jobs or just ongoing contracts?',
    a: "Both. Thomas does one-time cleanups, single-service visits, and regular scheduled maintenance. There's no pressure to sign a contract — plenty of customers start with a one-time job and go from there.",
  },
  {
    q: 'How quickly can you get to my yard?',
    a: "Response to quote requests is typically within 4 hours. Scheduling depends on the time of season — spring and early summer book fast. If you need something urgent, mention that in your message and Thomas will do his best.",
  },
  {
    q: 'How do I pay?',
    a: 'Payment is due upon completion of work. Thomas accepts cash, check, Venmo, and Zelle. No deposits required for standard residential jobs.',
  },
  {
    q: 'What if I\'m not happy with the work?',
    a: "Tell Thomas directly — same day if possible. He stands behind his work and will come back to make it right. That's the advantage of dealing with the owner directly.",
  },
  {
    q: 'Do you bring your own equipment?',
    a: "Yes, Thomas brings everything needed for the job. You don't need to supply anything.",
  },
  {
    q: 'What areas do you serve?',
    a: "Kalamazoo and surrounding neighborhoods including Portage, Comstock, Oshtemo, Texas Township, Milwood, Vine, Oakwood, and Richland. Not sure if you're in range? Just ask.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-dark py-24 px-[5%]">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <p className="eyebrow">Got Questions</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] mt-3">
            The answers you&apos;re probably looking for.
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-gold/10 border border-gold/10 rounded-lg overflow-hidden">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-forest/10">
              <button
                className="
                  w-full text-left px-6 py-5
                  flex justify-between items-center gap-4
                  hover:bg-forest/25 transition-colors duration-200
                  group
                "
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-display font-semibold text-[0.97rem] text-cream leading-snug">
                  {faq.q}
                </span>
                <span className={`
                  text-gold text-xl font-light flex-shrink-0 transition-transform duration-300
                  ${open === i ? 'rotate-45' : 'rotate-0'}
                `}>
                  +
                </span>
              </button>

              <div className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${open === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}
              `}>
                <p className="px-6 pb-5 text-cream/65 text-[0.9rem] leading-[1.75]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted text-sm mt-8">
          Still have a question?{' '}
          <a href="#contact" className="text-gold no-underline hover:text-gold-light transition-colors">
            Just ask Thomas directly →
          </a>
        </p>
      </div>
    </section>
  )
}
