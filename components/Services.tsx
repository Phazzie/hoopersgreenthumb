const services = [
  {
    num: '01',
    icon: '🌿',
    title: 'Lawn Mowing & Edging',
    desc:  'Clean cuts, razor-sharp edges, and a finish that makes your whole block look better. Every single visit.',
  },
  {
    num: '02',
    icon: '🏡',
    title: 'Landscaping Design & Installation',
    desc:  'From a bare patch of dirt to something you actually want to look at. We design and build outdoor spaces that fit your home.',
  },
  {
    num: '03',
    icon: '🌸',
    title: 'Garden Bed Planting & Care',
    desc:  'Seasonal color, perennial structure, and the kind of detail work that turns a yard into a garden worth noticing.',
  },
  {
    num: '04',
    icon: '🪴',
    title: 'Mulching & Soil Work',
    desc:  'Fresh mulch that holds moisture, stops weeds, and makes every bed look like it was just installed. Because it was.',
  },
  {
    num: '05',
    icon: '✂️',
    title: 'Tree & Shrub Trimming',
    desc:  'Precise shaping that keeps your trees and shrubs healthy, structured, and looking like someone with a plan touched them.',
  },
  {
    num: '06',
    icon: '🍂',
    title: 'Seasonal Cleanup',
    desc:  'Spring and fall cleanups that reset your yard for the season ahead. You shouldn\'t have to deal with that.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-dark py-24 px-[5%]">
      <div className="mb-14">
        <p className="eyebrow">What We Do</p>
        <h2 className="text-[clamp(2rem,4vw,3.4rem)] mt-3">
          Six ways to make your<br />yard unforgettable.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-gold/12 gap-px bg-gold/12">
        {services.map((svc) => (
          <div
            key={svc.num}
            className="
              relative bg-dark p-10 overflow-hidden
              transition-colors duration-300
              hover:bg-forest/35
              group
            "
          >
            {/* Gold underline on hover */}
            <span className="
              absolute bottom-0 left-0 right-0 h-[3px] bg-gold
              scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300
            " />

            <p className="font-display text-[0.7rem] font-bold tracking-widest text-gold/40 mb-5">
              {svc.num}
            </p>
            <span className="text-[2.2rem] mb-4 block">{svc.icon}</span>
            <h3 className="text-[1.12rem] mb-3 text-cream">{svc.title}</h3>
            <p className="text-muted text-sm leading-[1.75]">{svc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
