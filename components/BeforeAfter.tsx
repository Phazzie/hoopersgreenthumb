import Image from 'next/image'

const pairs = [
  {
    label: 'Lawn Mowing & Edging', location: 'Milwood',
    before: { src: '/images/before-lawn.jpg',   alt: 'Overgrown lawn before' },
    after:  { src: '/images/after-lawn.jpg',    alt: 'Manicured lawn after'  },
  },
  {
    label: 'Garden Bed + Fresh Mulch', location: 'Vine Neighborhood',
    before: { src: '/images/before-garden.jpg', alt: 'Neglected garden bed before' },
    after:  { src: '/images/after-garden.jpg',  alt: 'Fresh garden bed after'      },
  },
  {
    label: 'Shrub Trim & Shaping', location: 'Portage',
    before: { src: '/images/before-shrubs.jpg', alt: 'Overgrown shrubs before' },
    after:  { src: '/images/after-shrubs.jpg',  alt: 'Sculpted shrubs after'   },
  },
]

export default function BeforeAfter() {
  return (
    <section className="bg-dark py-24 px-[5%]">
      <div className="mb-14">
        <p className="eyebrow">Real Results</p>
        <h2 className="text-[clamp(2rem,4vw,3.2rem)] mt-3">
          Before &amp; after.<br />Real yards. Right here in Kalamazoo.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {pairs.map((pair) => (
          <div key={pair.label} className="border border-gold/12 rounded overflow-hidden bg-dark group">
            <div className="relative grid grid-cols-2 h-52">
              <div className="relative overflow-hidden">
                <Image src={pair.before.src} alt={pair.before.alt} fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 17vw" />
                <span className="absolute bottom-2 left-2 z-10 bg-dark/85 text-cream-muted font-display text-[0.58rem] font-bold tracking-[0.14em] uppercase px-2 py-1 rounded">
                  Before
                </span>
              </div>
              <div className="relative overflow-hidden">
                <Image src={pair.after.src} alt={pair.after.alt} fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 17vw" />
                <span className="absolute bottom-2 right-2 z-10 bg-gold text-dark font-display text-[0.58rem] font-bold tracking-[0.14em] uppercase px-2 py-1 rounded">
                  After
                </span>
              </div>
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/60 z-10 pointer-events-none" />
            </div>
            <div className="px-5 py-4 border-t border-gold/10 flex justify-between items-center">
              <div>
                <p className="font-display font-semibold text-[0.9rem] text-cream">{pair.label}</p>
                <p className="text-muted text-[0.75rem] mt-0.5">{pair.location}</p>
              </div>
              <span className="text-gold text-xl">★</span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-muted text-[0.8rem] text-center mt-6">
        Sample images — real project photos added as Thomas completes jobs.
      </p>
    </section>
  )
}
