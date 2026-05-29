import Link from 'next/link'
import { posts } from '@/lib/posts'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  })
}

export default function BlogPreview() {
  const preview = posts.slice(0, 3)

  return (
    <section className="bg-dark py-24 px-[5%]">
      <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
        <div>
          <p className="eyebrow">From the Field</p>
          <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] mt-3">
            Lawn care tips for<br />Kalamazoo homeowners.
          </h2>
        </div>
        <Link
          href="/blog"
          className="text-gold font-display font-semibold text-sm no-underline hover:text-gold-light transition-colors"
        >
          All articles →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {preview.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="
              group block bg-forest/15 border border-gold/10 rounded-lg p-6
              hover:border-gold/30 transition-all duration-300 no-underline
            "
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="
                bg-gold/12 text-gold
                font-display text-[0.6rem] font-bold tracking-widest uppercase
                px-2.5 py-1 rounded-full
              ">
                {post.category}
              </span>
            </div>

            <h3 className="
              font-display font-bold text-cream text-[1rem] leading-snug mb-3
              group-hover:text-gold transition-colors duration-200
            ">
              {post.title}
            </h3>

            <p className="text-muted text-[0.82rem] leading-relaxed line-clamp-3 mb-5">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-muted text-[0.72rem]">{formatDate(post.date)}</span>
              <span className="text-gold text-sm font-display font-semibold group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
