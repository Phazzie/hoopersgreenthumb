# Hooper's Green Thumb — Agent Working Memory

## Project Overview
Residential landscaping website for Thomas Hooper, Kalamazoo MI.
Stack: Next.js 14 App Router · Tailwind CSS · TypeScript · Vercel

**Repo:** github.com/Phazzie/hoopersgreenthumb (branch: main)  
**Live:** hoopersgreenthumb.com (Vercel, auto-deploys on push to main)

---

## Brand Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `dark` | `#060D07` | Near-black background |
| `forest` | `#1B4332` | Deep green sections |
| `forest-mid` | `#2D6A4F` | Mid-tone green |
| `gold` | `#C9A84C` | Primary accent |
| `gold-light` | `#E8C76A` | Hover / highlight |
| `cream` | `#F5F0E8` | Primary text |
| `cream-muted` | `#B8B0A3` | Secondary text |
| `muted` | `#5E7057` | Muted UI elements |

Fonts: **Space Grotesk** (display/headings) · **Inter** (body) — loaded via `next/font/google`

---

## Component Map (`components/`)
Nav, SeasonalBanner, Hero, TrustBar, Services, Pricing, HowItWorks,
BeforeAfter, About, Gallery, Testimonials, FAQ, WhyUs, BlogPreview,
CtaBand, MapSection, ContactSection, Footer, FloatingCTA

---

## Key Files
- `app/api/contact/route.ts` — contact form handler (requires `RESEND_API_KEY` in Vercel env)
- `lib/posts.ts` — blog posts array (4 articles written; add new posts here)
- `tailwind.config.ts` — brand color tokens
- `next.config.mjs` — `unoptimized: true` set (bypasses Vercel image proxy)
- `components/SeasonalBanner.tsx` — edit `message` + set `active: true/false` per season

---

## Thomas's Contact Info
- **Email:** thomas@hoopersgreenthumb.com
- **Phone:** TBD — needs Google Voice (269) area code
  - Set `const PHONE = '(269) xxx-xxxx'` in `Nav.tsx` + `FloatingCTA.tsx`

---

## Services
Lawn mowing & edging · Landscaping design & installation ·
Garden bed planting & maintenance · Mulching & soil work ·
Tree & shrub trimming · Seasonal cleanup (spring/fall)

---

## Outstanding Setup Tasks (Thomas's action items)
1. Get Google Voice **(269)** number → update `PHONE` const in `Nav.tsx` + `FloatingCTA.tsx` → push
2. Sign up at resend.com → add `RESEND_API_KEY` to Vercel env vars → redeploy
3. Connect `hoopersgreenthumb.com` domain in Vercel dashboard
4. Set up Google Business Profile at business.google.com
5. Post Nextdoor introduction in Vine, Milwood, Oakwood, Westwood neighborhoods
6. Replace placeholder testimonials with real customer reviews as they come in

---

## Image URLs (Hyperagent CDN — must be PublishFilePublicly'd before embedding in prod)
All generated images live on thread `cmpq3992f070407ad673ddwqo`.
See Hyperagent memory "HOOPER'S GREEN THUMB — Full Project Context" for full URL list.

> **Deploy rule:** Never embed `hyperagent.com/api/files/usergenerated/...` URLs directly —
> they require auth and render blank on Vercel. Always commit images to `public/images/`
> with local paths, or use `pub.hyperagent.com` share URLs.

---

## Blog
4 articles written in `lib/posts.ts`. Route: `/blog` and `/blog/[slug]`.

---

## Tagline
> "Your neighbors are going to notice."
