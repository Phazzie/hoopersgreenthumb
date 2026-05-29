import Image from 'next/image'

const images = [
  {
    src:  'https://hyperagent.com/api/files/usergenerated/threads/cmpq3992f070407ad673ddwqo/images/946fc226-8a6c-4753-b232-35470e3c03e0.png',
    alt:  'Thomas trimming hedges with precision',
    span: 'col-span-7',
  },
  {
    src:  'https://hyperagent.com/api/files/usergenerated/threads/cmpq3992f070407ad673ddwqo/images/9b1849ab-163f-455f-8a38-6269686397a3.png',
    alt:  'Thomas planting and maintaining garden beds',
    span: 'col-span-5',
  },
  {
    src:  'https://hyperagent.com/api/files/usergenerated/threads/cmpq3992f070407ad673ddwqo/images/10c5c50c-e247-43c7-8e93-b8ffa8b1f85b.png',
    alt:  'Thomas Hooper — Hooper\'s Green Thumb',
    span: 'col-span-4',
  },
  {
    src:  'https://hyperagent.com/api/files/usergenerated/threads/cmpq3992f070407ad673ddwqo/images/c5c05d47-2778-4f04-81e7-91230d4d346b.png',
    alt:  'A beautifully manicured Kalamazoo front yard',
    span: 'col-span-8',
  },
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

      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-12 gap-3">
        {images.map((img, i) => (
          <div
            key={i}
            className={`${img.span} ${i < 2 ? 'h-[400px]' : 'h-[300px]'} overflow-hidden rounded group`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Mobile: single column */}
      <div className="md:hidden flex flex-col gap-3">
        {images.map((img, i) => (
          <div key={i} className="h-64 overflow-hidden rounded">
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
