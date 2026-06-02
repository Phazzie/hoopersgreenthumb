import Image from 'next/image'

const images = [
  { src: '/images/trimming.jpg', alt: 'Thomas trimming hedges with precision',        span: 'col-span-7' },
  { src: '/images/garden.jpg',   alt: 'Thomas planting and maintaining garden beds',  span: 'col-span-5' },
  { src: '/images/portrait.jpg', alt: "Thomas Hooper — Hooper's Green Thumb",         span: 'col-span-4' },
  { src: '/images/hero.jpg',     alt: 'A beautifully manicured Kalamazoo front yard', span: 'col-span-8' },
]

export default function Gallery() {
  return (
    <section id="work" className="bg-forest/15 py-24 px-[5%]">
      <div className="mb-14">
        <p className="eyebrow">The Work</p>
        <h2 className="text-[clamp(2rem,4vw,3.4rem)] mt-3">
          Craftsmanship<br />you can see.
        </h2>
      </div>

      {/* Desktop */}
      <div className="hidden md:grid grid-cols-12 gap-3">
        {images.map((img, i) => (
          <div key={i} className={`${img.span} ${i < 2 ? 'h-[400px]' : 'h-[300px]'} overflow-hidden rounded group`}>
            <Image
              src={img.src} alt={img.alt}
              width={1200} height={800}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-3">
        {images.map((img, i) => (
          <div key={i} className="h-64 overflow-hidden rounded">
            <Image src={img.src} alt={img.alt} width={900} height={600} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}
