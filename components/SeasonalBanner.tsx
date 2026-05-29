// Update `message` and `href` each season.
// Summer → fall cleanup, fall → spring prep, spring → aeration season, etc.
const BANNER = {
  message: '☀️ Summer booking is open — limited spots available in Kalamazoo.',
  cta: 'Reserve your slot →',
  href: '#contact',
  active: true, // set false to hide
}

export default function SeasonalBanner() {
  if (!BANNER.active) return null

  return (
    <div className="bg-gold text-dark text-center py-2.5 px-4 text-[0.82rem] font-display font-semibold">
      {BANNER.message}{' '}
      <a
        href={BANNER.href}
        className="underline underline-offset-2 hover:opacity-75 transition-opacity ml-1"
      >
        {BANNER.cta}
      </a>
    </div>
  )
}
