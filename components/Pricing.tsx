const tiers = [
  {
    icon: '🌿',
    service: 'Lawn Mowing & Edging',
    range: '$40 – $95',
    note: 'Based on lot size',
    includes: ['Clean cut at ideal height', 'Sharp edge along drives & beds', 'Clipping cleanup'],
  },
  {
    icon: '🪴',
    service: 'Mulching & Bed Work',
    range: '$75 – $250',
    note: 'Based on bed area',
    includes: ['Fresh dark mulch installed', 'Weed pull before mulch', 'Clean bed borders'],
  },
  {
    icon: '✂️',
    service: 'Tree & Shrub Trimming',
    range: '$60 – $200',
    note: 'Based on scope',
    includes: ['Precision shaping', 'Debris removal', 'Clean site on exit'],
  },
  {
    icon: '🍂',
    service: 'Seasonal Cleanup',
    range: '$100 – $350',
    note: 'Spring or fall',
    includes: ['Debris & leaf removal', 'Bed cleanup & edging', 'Ready for the season'],
  },
  {
    icon: '🌸',
    service: 'Garden Bed Installation',
    range: 'Custom quote',
    note: 'Design included',
    includes: ['Design consultation', 'Plant selection for Michigan', 'Full installation'],
  },
  {
    icon: '🏡',
    service: 'Landscaping Design',
    range: 'Custom quote',
    note: 'Site visit required',
    includes: ['On-site assessment', 'Full plan walkthrough', 'Phased options available'],
  },
]

export default function Pricing() {
  return (
    <section className="bg-forest/20 py-24 px-[5%]">
      <div className="mb-12">
        <p className="eyebrow">Transparent Pricing</p>
        <h2 className="text-[clamp(2rem,4vw,3.2rem)] mt-3">
          No mystery quotes.<br />Just honest ranges.
        </h2>
        <p className="text-cream/55 mt-4 text-[0.95rem] max-w-xl leading-relaxed">
          Every yard is different — these are starting ranges. Thomas will give you an exact
          number after seeing your property. Free, no pressure.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tiers.map((tier) => (
          <div
            key={tier.service}
            className="
              bg-dark border border-gold/12 rounded-lg p-6
              hover:border-gold/30 transition-all duration-300
              flex flex-col
            "
          >
            <span className="text-3xl mb-4 block">{tier.icon}</span>
            <h3 className="font-display font-bold text-cream text-[1rem] mb-1">{tier.service}</h3>
            <p className="text-muted text-[0.75rem] mb-4">{tier.note}</p>

            <p className="font-display font-bold text-gold text-[1.6rem] mb-5">{tier.range}</p>

            <ul className="flex flex-col gap-2 mt-auto">
              {tier.includes.map((item) => (
                <li key={item} className="flex items-center gap-2 text-cream/60 text-[0.82rem]">
                  <span className="text-gold text-xs flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-dark/50 border border-gold/10 rounded-lg px-6 py-5">
        <p className="text-cream/60 text-[0.88rem]">
          <strong className="text-cream">All quotes are free.</strong>{' '}
          Thomas visits your property, walks through exactly what needs doing, and gives you a number — no obligation.
        </p>
        <a href="#contact" className="btn btn-gold whitespace-nowrap">Get My Quote</a>
      </div>
    </section>
  )
}
