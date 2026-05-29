import Image from 'next/image'

const pairs = [
  {
    label: 'Lawn Mowing & Edging',
    location: 'Milwood',
    before: {
      src: 'https://hyperagent.com/api/files/usergenerated/threads/cmpq3992f070407ad673ddwqo/images/aafcd4d5-493f-49ed-b3b6-f16485c43e1e.png',
      alt: 'Overgrown lawn before Hooper\'s Green Thumb',
    },
    after: {
      src: 'https://hyperagent.com/api/files/usergenerated/threads/cmpq3992f070407ad673ddwqo/images/d35a3077-d2d3-4447-acf1-a0fdd3b97123.png',
      alt: 'Beautifully manicured lawn after Hooper\'s Green Thumb',
    },
  },
  {
    label: 'Garden Bed + Fresh Mulch',
    location: 'Vine Neighborhood',
    before: {
      src: 'https://hyperagent.com/api/files/usergenerated/threads/cmpq3992f070407ad673ddwqo/images/ab854bef-8540-48c8-900b-4310c3f200d2.png',
      alt: 'Neglected garden bed before treatment',
    },
    after: {
      src: 'https://hyperagent.com/api/files/usergenerated/threads/cmpq3992f070407ad673ddwqo/images/917160a6-0e68-4d7c-ae81-b89d1e5b9bb1.png',
      alt: 'Fresh mulch and planted garden bed after',
    },
  },
  {
    label: 'Shrub Trim & Shaping',
    location: 'Portage',
    before: {
      src: 'https://hyperagent.com/api/files/usergenerated/threads/cmpq3992f070407ad673ddwqo/images/4d75a633-0e72-459d-9d4f-602838090bc9.png',
      alt: 'Overgrown scraggly shrubs before trimming',
    },
    after: {
      src: 'https://hyperagent.com/api/files/usergenerated/threads/cmpq3992f070407ad673ddwqo/images/9e37dc2c-c49c-4316-87ae-4c72c29326c9.png',
      alt: 'Perfectly sculpted shrubs after trimming',
    },
  },
]

export default function BeforeAfter() {
  return (
    <section className="bg-dark py-24 px-[5%]">
      <div className="mb-14">
        <p className="eyebrow">Real Results</p>
        <h2 className="text-[clamp(2rem,4vw,3.2rem)] mt-3">
          Before &amp; after.<br />
          Real yards. Right here in Kalamazoo.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {pairs.map((pair) => (
          <div
            key={pair.label}
            className="border border-gold/12 rounded overflow-hidden bg-dark group"
          >
            {/* Images side by side */}
            <div className="grid grid-cols-2 h-52">
              {/* Before */}
              <div className="relative overflow-hidden">
                <Image
                  src={pair.before.src}
                  alt={pair.before.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 17vw"
                />
                <span className="
                  absolute bottom-2 left-2 z-10
                  bg-dark/85 text-cream-muted
                  font-display text-[0.58rem] font-bold tracking-[0.14em] uppercase
                  px-2 py-1 rounded
                ">
                  Before
                </span>
              </div>

              {/* After */}
              <div className="relative overflow-hidden">
                <Image
                  src={pair.after.src}
                  alt={pair.after.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 17vw"
                />
                <span className="
                  absolute bottom-2 right-2 z-10
                  bg-gold text-dark
                  font-display text-[0.58rem] font-bold tracking-[0.14em] uppercase
                  px-2 py-1 rounded
                ">
                  After
                </span>
              </div>

              {/* Divider line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/60 z-10 pointer-events-none" style={{ position: 'absolute' }} />
            </div>

            {/* Card info */}
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
        These are placeholder images. Real project photos added as Thomas completes jobs.
      </p>
    </section>
  )
}
