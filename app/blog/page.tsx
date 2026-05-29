import type { Metadata } from 'next'
import Link from 'next/link'
import { posts } from '@/lib/posts'

export const metadata: Metadata = {
  title: "Lawn Care Tips & Landscaping Advice | Hooper's Green Thumb — Kalamazoo, MI",
  description:
    'Practical lawn care and landscaping tips for Kalamazoo, Michigan homeowners. Advice on aeration, mulching, seasonal cleanup, and more from a local expert.',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-dark">
      {/* Header */}
      <div className="bg-forest pt-36 pb-20 px-[5%]">
        <div className="max-w-4xl">
          <p className="eyebrow mb-4">From the Field</p>
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-bold text-cream leading-tight">
            Lawn care tips for<br />Kalamazoo homeowners.
          </h1>
          <p className="text-cream/60 mt-5 text-[1.05rem] max-w-xl leading-relaxed">
            Practical advice from someone who works in these yards every week.
            No fluff, no generic content — stuff that actually applies to Southwest Michigan.
          </p>
        </div>
      </div>

      {/* Posts grid */}
      <section className="px-[5%] py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="
                group block bg-forest/15 border border-gold/12 rounded-lg overflow-hidden
                hover:border-gold/35 transition-all duration-300 no-underline
              "
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-5">
                  <span className="
                    bg-gold/15 text-gold
                    font-display text-[0.65rem] font-bold tracking-[0.15em] uppercase
                    px-3 py-1 rounded-full
                  ">
                    {post.category}
                  </span>
                  <span className="text-muted text-[0.78rem]">{post.readTime}</span>
                </div>

                <h2 className="
                  font-display font-bold text-[1.18rem] text-cream leading-snug mb-3
                  group-hover:text-gold transition-colors duration-200
                ">
                  {post.title}
                </h2>

                <p className="text-muted text-[0.88rem] leading-[1.7] mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-muted text-[0.75rem]">{formatDate(post.date)}</span>
                  <span className="text-gold text-sm font-display font-semibold group-hover:translate-x-1 transition-transform duration-200">
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-forest/30 border-y border-gold/10 py-16 px-[5%] text-center">
        <h2 className="font-display font-bold text-[1.8rem] text-cream mb-3">
          Ready to stop reading and start fixing?
        </h2>
        <p className="text-cream/60 mb-8">Thomas does free quotes across Kalamazoo and surrounding areas.</p>
        <Link href="/#contact" className="btn btn-gold btn-lg">Get a Free Quote</Link>
      </div>
    </main>
  )
}
