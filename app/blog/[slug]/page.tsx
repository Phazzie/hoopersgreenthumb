import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllSlugs, posts } from '@/lib/posts'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Hooper's Green Thumb`,
    description: post.excerpt,
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <main className="min-h-screen bg-dark">
      {/* Hero */}
      <div className="bg-forest pt-36 pb-16 px-[5%]">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/blog" className="text-gold text-sm no-underline hover:text-gold-light transition-colors">
              ← All Articles
            </Link>
            <span className="text-muted text-sm">/</span>
            <span className="
              bg-gold/15 text-gold
              font-display text-[0.65rem] font-bold tracking-[0.15em] uppercase
              px-3 py-1 rounded-full
            ">
              {post.category}
            </span>
          </div>
          <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-display font-bold text-cream leading-tight mb-5">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-muted text-sm">
            <span>By Thomas Hooper</span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="px-[5%] py-16 max-w-3xl mx-auto">
        <div
          className="
            prose prose-invert max-w-none
            prose-p:text-cream/70 prose-p:leading-[1.85] prose-p:text-[0.97rem] prose-p:mb-5
            prose-h2:font-display prose-h2:font-bold prose-h2:text-cream prose-h2:text-[1.35rem] prose-h2:mt-10 prose-h2:mb-4
            prose-ul:text-cream/70 prose-ul:text-[0.95rem] prose-li:mb-2
            prose-a:text-gold prose-a:no-underline hover:prose-a:text-gold-light
            prose-strong:text-cream prose-strong:font-semibold
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Author card */}
      <div className="px-[5%] pb-16 max-w-3xl mx-auto">
        <div className="bg-forest/20 border border-gold/12 rounded-xl p-6 flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-2xl flex-shrink-0">
            🌿
          </div>
          <div>
            <p className="font-display font-bold text-cream mb-1">Thomas Hooper</p>
            <p className="text-muted text-[0.85rem] leading-relaxed">
              Owner of Hooper&apos;s Green Thumb. Residential landscaping in Kalamazoo, MI.
              Every job done by Thomas — no crew, no surprises.{' '}
              <Link href="/#contact" className="text-gold no-underline hover:text-gold-light transition-colors">
                Get a free quote →
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <div className="px-[5%] pb-20 max-w-3xl mx-auto">
          <p className="eyebrow mb-6">More Articles</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="group block bg-forest/15 border border-gold/12 rounded-lg p-5 no-underline hover:border-gold/30 transition-all duration-200"
              >
                <p className="eyebrow text-[0.6rem] mb-2">{r.category}</p>
                <h3 className="font-display font-bold text-cream text-[0.95rem] leading-snug group-hover:text-gold transition-colors duration-200">
                  {r.title}
                </h3>
                <p className="text-gold text-sm mt-3 font-display font-semibold">Read →</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}
