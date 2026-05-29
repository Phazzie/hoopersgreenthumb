import Link from 'next/link'

const quickLinks = [
  { href: '#services',  label: 'Services'    },
  { href: '#about',     label: 'About Thomas'},
  { href: '#work',      label: 'Our Work'    },
  { href: '#how',       label: 'How It Works'},
  { href: '#contact',   label: 'Get a Quote' },
]

const services = [
  'Lawn Mowing & Edging',
  'Landscaping Design',
  'Garden Bed Planting',
  'Mulching & Soil Work',
  'Tree & Shrub Trimming',
  'Seasonal Cleanup',
]

const serviceAreas = [
  'Vine', 'Milwood', 'Oakwood',
  'Portage', 'Comstock', 'Oshtemo',
  'Richland', 'Kalamazoo Township',
]

export default function Footer() {
  return (
    <footer className="bg-[#030805] border-t border-gold/8 pt-16 pb-8 px-[5%]">

      {/* Main columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 font-display font-bold text-cream text-lg mb-4">
            <span>🌿</span>
            Hooper&apos;s<br />Green Thumb
          </div>
          <p className="text-muted text-[0.82rem] leading-relaxed mb-5">
            Residential landscaping in Kalamazoo, MI.
            One craftsman, every job.
          </p>
          <a
            href="mailto:thomas@hoopersgreenthumb.com"
            className="text-gold text-[0.82rem] no-underline hover:text-gold-light transition-colors"
          >
            thomas@hoopersgreenthumb.com
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-display font-bold text-cream text-[0.75rem] tracking-widest uppercase mb-4">
            Quick Links
          </p>
          <ul className="flex flex-col gap-2.5 list-none">
            {quickLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-muted text-[0.82rem] no-underline hover:text-cream transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="font-display font-bold text-cream text-[0.75rem] tracking-widest uppercase mb-4">
            Services
          </p>
          <ul className="flex flex-col gap-2.5 list-none">
            {services.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="text-muted text-[0.82rem] no-underline hover:text-cream transition-colors duration-200"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Area */}
        <div>
          <p className="font-display font-bold text-cream text-[0.75rem] tracking-widest uppercase mb-4">
            Service Area
          </p>
          <ul className="flex flex-col gap-2 list-none">
            {serviceAreas.map((n) => (
              <li key={n} className="text-muted text-[0.82rem]">{n}</li>
            ))}
          </ul>
          <a
            href="#contact"
            className="text-gold text-[0.78rem] no-underline hover:text-gold-light transition-colors mt-3 block"
          >
            + More areas →
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-muted text-[0.78rem]">
          © {new Date().getFullYear()} Hooper&apos;s Green Thumb · Kalamazoo, Michigan
        </p>
        <p className="text-muted text-[0.78rem]">
          Built by{' '}
          <span className="text-gold/60">Hooper&apos;s Green Thumb</span>
        </p>
      </div>
    </footer>
  )
}
