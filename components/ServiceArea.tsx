const neighborhoods = [
  'Vine', 'Milwood', 'Oakwood', 'Westwood', 'Northside',
  'Portage', 'Comstock', 'Richland', 'Kalamazoo Township',
  'Oshtemo', 'Texas Township',
]

export default function ServiceArea() {
  return (
    <section className="bg-forest py-20 px-[5%] text-center">
      <p className="eyebrow">Where We Work</p>
      <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] mt-3 mb-4">
        Proudly serving Kalamazoo<br />and surrounding neighborhoods.
      </h2>
      <p className="text-cream/62 mb-8">If you&apos;re in the greater Kalamazoo area, we&apos;re your people.</p>
      <div className="flex flex-wrap justify-center gap-2.5">
        {neighborhoods.map((n) => (
          <span
            key={n}
            className="
              bg-dark/45 border border-gold/22 text-cream-muted
              px-5 py-2 rounded-full text-[0.82rem] font-medium
            "
          >
            {n}
          </span>
        ))}
      </div>
    </section>
  )
}
