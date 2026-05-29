const neighborhoods = [
  'Vine', 'Milwood', 'Oakwood', 'Westwood',
  'Northside', 'Portage', 'Comstock', 'Richland',
  'Kalamazoo Township', 'Oshtemo', 'Texas Township',
]

// Map embed URL from generated map artifact
const MAP_URL =
  'https://hyperagent.com/api/files/usergenerated/threads/cmpq3992f070407ad673ddwqo/artifacts/dfc5b538-9ad2-4b5a-9202-6b3b600177e7.html'

export default function MapSection() {
  return (
    <section className="bg-forest py-24 px-[5%]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center max-w-6xl mx-auto">

        {/* Left — text + tags */}
        <div>
          <p className="eyebrow">Service Area</p>
          <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] mt-3 mb-4">
            Proudly serving Kalamazoo<br />and surrounding areas.
          </h2>
          <p className="text-cream/60 text-[0.95rem] leading-relaxed mb-8">
            If you&apos;re in the greater Kalamazoo area, we&apos;re your people.
            Not sure if we cover your neighborhood?{' '}
            <a href="#contact" className="text-gold hover:text-gold-light transition-colors no-underline">
              Just ask.
            </a>
          </p>

          <div className="flex flex-wrap gap-2">
            {neighborhoods.map((n) => (
              <span
                key={n}
                className="
                  bg-dark/45 border border-gold/20 text-cream-muted
                  px-4 py-1.5 rounded-full text-[0.8rem] font-medium
                  hover:border-gold/50 hover:text-cream transition-colors duration-200
                "
              >
                {n}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3 text-cream/50 text-[0.82rem]">
            <span className="text-gold text-base">📍</span>
            Not seeing your neighborhood?{' '}
            <a href="#contact" className="text-gold underline-offset-2 hover:text-gold-light transition-colors">
              Send a message
            </a>
            — we may still be able to help.
          </div>
        </div>

        {/* Right — map */}
        <div className="rounded-lg overflow-hidden border border-gold/15 h-[380px] shadow-[0_0_40px_rgba(0,0,0,.4)]">
          <iframe
            src={MAP_URL}
            className="w-full h-full border-0"
            title="Hooper's Green Thumb service area map"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
