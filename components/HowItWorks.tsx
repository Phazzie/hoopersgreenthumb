const steps = [
  {
    num: '01',
    icon: '📋',
    title: 'Request a Quote',
    desc: 'Fill out the form or send an email. Takes two minutes. No account needed, no commitment.',
  },
  {
    num: '02',
    icon: '🏡',
    title: 'Thomas Visits Your Property',
    desc: 'He walks the yard, listens to what you want, and takes a look at what\'s needed. No pressure, no pitch.',
  },
  {
    num: '03',
    icon: '📄',
    title: 'You Get a Clear Estimate',
    desc: 'Exact scope, exact price. No hidden fees, no surprises when the bill comes.',
  },
  {
    num: '04',
    icon: '✅',
    title: 'Thomas Does the Work',
    desc: 'He shows up when he says he will and doesn\'t leave until the job looks right.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-forest py-24 px-[5%]">
      <div className="mb-14 text-center max-w-2xl mx-auto">
        <p className="eyebrow">The Process</p>
        <h2 className="text-[clamp(2rem,4vw,3.2rem)] mt-3">
          Simple. Honest. Done right.
        </h2>
        <p className="text-cream/60 mt-4 text-[0.97rem] leading-relaxed">
          Here&apos;s exactly what happens when you reach out — no mystery, no runaround.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10 border border-gold/10 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className="bg-forest px-7 py-8 relative group hover:bg-forest-mid transition-colors duration-300"
          >
            {/* Connector arrow (hidden on last) */}
            {i < steps.length - 1 && (
              <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-gold/40 text-lg">
                →
              </span>
            )}

            <p className="font-display text-[0.65rem] font-bold tracking-[0.2em] text-gold/50 mb-4">
              STEP {step.num}
            </p>
            <span className="text-3xl mb-4 block">{step.icon}</span>
            <h3 className="font-display font-bold text-[1.05rem] text-cream mb-3 leading-snug">
              {step.title}
            </h3>
            <p className="text-cream/55 text-[0.85rem] leading-[1.7]">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a href="#contact" className="btn btn-gold btn-lg">
          Start With Step 01 →
        </a>
      </div>
    </section>
  )
}
