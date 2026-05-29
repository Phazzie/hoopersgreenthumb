const reviews = [
  {
    name: 'Jessica M.',
    location: 'Vine Neighborhood',
    stars: 5,
    text: 'Thomas transformed our garden beds. He\'s reliable, hard-working, and our yard has never looked this good. I appreciate that it\'s always him — not a different crew every time.',
  },
  {
    name: 'Mark R.',
    location: 'Portage',
    stars: 5,
    text: "Hooper's Green Thumb is the real deal. Great communication, shows up when he says he will, and the attention to detail is exactly what we were looking for.",
  },
  {
    name: 'Lisa C.',
    location: 'Oakwood',
    stars: 5,
    text: "I appreciate that Thomas does the work himself. You can tell he takes pride in every project — he doesn't just cut and go, he actually cares how it looks.",
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-gold text-[1.1rem]">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-dark py-24 px-[5%]">
      <div className="mb-14 text-center max-w-2xl mx-auto">
        <p className="eyebrow">What Neighbors Say</p>
        <h2 className="text-[clamp(2rem,4vw,3.2rem)] mt-3">
          Don&apos;t take our word for it.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="
              bg-forest/20 border border-gold/12 rounded-lg p-7
              flex flex-col
              hover:border-gold/30 transition-colors duration-300
            "
          >
            <Stars count={r.stars} />
            <p className="text-cream/75 text-[0.9rem] leading-[1.8] flex-1 italic">
              &ldquo;{r.text}&rdquo;
            </p>
            <div className="mt-5 pt-5 border-t border-gold/10">
              <p className="font-display font-semibold text-cream text-[0.9rem]">{r.name}</p>
              <p className="text-muted text-[0.75rem] mt-0.5">{r.location} · Kalamazoo, MI</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <p className="text-muted text-sm">
          Reviews coming in as Thomas builds his customer base.{' '}
          <a href="#contact" className="text-gold hover:text-gold-light transition-colors no-underline">
            Be an early customer →
          </a>
        </p>
      </div>
    </section>
  )
}
