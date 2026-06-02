export default function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] flex items-end pb-[8vh] overflow-hidden">

      {/* Background image — served from /public/images/ via Vercel */}
      <div
        className="absolute inset-0 animate-slowzoom bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')", backgroundPosition: 'center 25%' }}
        aria-hidden="true"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/60 to-forest/30" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-dark to-transparent" />

      {/* Content */}
      <div className="relative z-10 px-[5%] max-w-4xl">
        <p className="eyebrow mb-5 animate-[fadeup_.6s_.1s_ease_both]" style={{ animationFillMode: 'both' }}>
          Kalamazoo, Michigan
        </p>
        <h1
          className="text-[clamp(3.2rem,7.5vw,7rem)] text-cream font-display font-bold leading-[1.05] tracking-tight mb-6
                     animate-[fadeup_.7s_.2s_ease_both]"
          style={{ animationFillMode: 'both' }}
        >
          Your neighbors
          <em className="text-gold not-italic block">are going to</em>
          notice.
        </h1>
        <p
          className="text-[clamp(1rem,1.8vw,1.15rem)] text-cream-muted max-w-lg leading-[1.75] mb-10
                     animate-[fadeup_.7s_.35s_ease_both]"
          style={{ animationFillMode: 'both' }}
        >
          Residential landscaping done with real pride. One craftsman, every job —
          lawn care, garden beds, trimming, and seasonal cleanup handled the way
          you&apos;d do it yourself if you had the time.
        </p>
        <div
          className="flex gap-4 flex-wrap animate-[fadeup_.7s_.5s_ease_both]"
          style={{ animationFillMode: 'both' }}
        >
          <a href="#contact" className="btn btn-gold btn-lg">Get a Free Quote</a>
          <a href="#work"    className="btn btn-outline btn-lg">See the Work</a>
        </div>
      </div>
    </section>
  )
}
