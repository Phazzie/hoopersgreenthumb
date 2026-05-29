const reasons = [
  {
    title: 'You know who\'s coming.',
    body:  'No mystery crew, no strangers in your yard. Thomas does every job himself — which means every job gets done the way he\'d want his own property done.',
  },
  {
    title: 'Local, not just licensed.',
    body:  'Thomas grew up here. He knows Kalamazoo neighborhoods, the soil, the seasons, and why your yard looks the way it does. That context matters more than people think.',
  },
  {
    title: 'The details don\'t get skipped.',
    body:  'Edging, cleanup, the corners — the stuff most people don\'t notice until it isn\'t done. When you care about your work, you notice everything. Thomas does.',
  },
]

export default function WhyUs() {
  return (
    <section className="bg-dark py-24 px-[5%]">
      <div className="mb-14">
        <p className="eyebrow">Why Hooper&apos;s</p>
        <h2 className="text-[clamp(2rem,4vw,3.2rem)] mt-3">
          The difference isn&apos;t the price.<br />It&apos;s the person.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
        {reasons.map((r) => (
          <div key={r.title} className="border-t-2 border-gold pt-6">
            <h3 className="text-[1.18rem] mb-3 text-cream">{r.title}</h3>
            <p className="text-muted text-[0.9rem] leading-[1.75]">{r.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
