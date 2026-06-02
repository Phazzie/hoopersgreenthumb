# Hooper's Green Thumb — Agent & Project Inventory

> This file is the canonical reference for every AI agent, tool, decision, and
> deliverable produced for this project. Keep it current whenever new agents are
> created or the site changes significantly.

---

## Project Overview

| Field | Value |
|---|---|
| Business | Hooper's Green Thumb |
| Owner | Thomas Hooper |
| Location | Kalamazoo, Michigan |
| Email | thomas@hoopersgreenthumb.com |
| Domain (pending) | hoopersgreenthumb.com |
| GitHub | github.com/Phazzie/hoopersgreenthumb |
| Stack | Next.js 14, Tailwind CSS, TypeScript |
| Deploy | Vercel (auto-deploy on push to main) |

---

## Agents

### 1. Hooper's Green Thumb — Site Manager
- **Platform:** Hyperagent
- **Model:** Sonnet (latest)
- **Role:** Ongoing site management — blog posts, seasonal updates, image swaps, GitHub pushes, bug fixes
- **GitHub:** Integrated (toggle off/on in agent settings if it loses connection)
- **Tools:** Image generation, web search, code execution
- **System prompt covers:** Full codebase map, brand guidelines, all image URLs, seasonal banner schedule, outstanding setup tasks for Thomas
- **When to use:** Any time the site needs updating — new blog post, phone number added, before/after photos swapped, seasonal banner changed

### 2. Hyperagent Claude (general thread)
- **Role:** Built the initial site in this thread — all design decisions, image generation, and architecture happened here
- **Thread ID:** cmpq3992f070407ad673ddwqo
- **Thread URL:** https://hyperagent.com/thread/cmpq3992f070407ad673ddwqo

---

## Site Architecture

### Routes
| Route | Description |
|---|---|
| `/` | Main homepage with all sections |
| `/blog` | Blog index — all articles |
| `/blog/[slug]` | Individual blog post |
| `/api/contact` | Contact form endpoint (Resend-ready) |

### Component Map
```
app/
  layout.tsx          — Root layout, fonts, LocalBusiness JSON-LD schema, OG meta
  page.tsx            — Homepage, assembles all sections in order
  globals.css         — Tailwind + global brand styles
  api/contact/
    route.ts          — Email API (set RESEND_API_KEY in Vercel env vars)
  blog/
    page.tsx          — Blog index page
    [slug]/page.tsx   — Individual post page

components/
  SeasonalBanner.tsx  — Gold top banner (update message + active flag per season)
  Nav.tsx             — Sticky nav (set const PHONE when Google Voice is ready)
  Hero.tsx            — Full-bleed CSS background hero
  TrustBar.tsx        — 4 trust signals strip
  Services.tsx        — 6-service hover grid
  Pricing.tsx         — Transparent price range cards
  HowItWorks.tsx      — 4-step process section
  BeforeAfter.tsx     — 3 before/after photo pairs
  About.tsx           — Thomas portrait + story
  Gallery.tsx         — 4-photo asymmetric editorial grid
  Testimonials.tsx    — 3 review cards
  FAQ.tsx             — 8-question accordion (client component)
  WhyUs.tsx           — 3 differentiators
  BlogPreview.tsx     — Latest 3 posts from lib/posts.ts
  CtaBand.tsx         — Gold CTA section
  MapSection.tsx      — Service area map + neighborhood tags
  ContactSection.tsx  — Quote request form (client component)
  Footer.tsx          — 4-column footer
  FloatingCTA.tsx     — Mobile sticky bar (client component)

lib/
  posts.ts            — Blog post data (add new posts here)

public/
  images/             — All site images committed here (no external CDN dependency)
    hero.jpg          — Thomas in manicured yard (hero background)
    portrait.jpg      — Thomas headshot (About section)
    trimming.jpg      — Thomas trimming shrubs (Gallery)
    garden.jpg        — Thomas planting garden bed (Gallery)
    before-lawn.jpg   — Overgrown lawn (Before/After)
    after-lawn.jpg    — Manicured lawn (Before/After)
    before-garden.jpg — Neglected garden bed (Before/After)
    after-garden.jpg  — Fresh garden bed (Before/After)
    before-shrubs.jpg — Overgrown shrubs (Before/After)
    after-shrubs.jpg  — Sculpted shrubs (Before/After)
    og-image.jpg      — Social share image (OG/Twitter meta)
```

---

## Brand System

### Colors
| Token | Hex | Usage |
|---|---|---|
| `dark` | `#060D07` | Main background |
| `forest` | `#1B4332` | Alternate section background |
| `forest-mid` | `#2D6A4F` | Hover states |
| `gold` | `#C9A84C` | Primary accent, CTAs |
| `gold-light` | `#E8C76A` | Gold hover |
| `cream` | `#F5F0E8` | Primary text |
| `cream-muted` | `#B8B0A3` | Secondary text |
| `muted` | `#5E7057` | Tertiary text, descriptions |

### Typography
- **Headings:** Space Grotesk (700)
- **Body:** Inter (400, 500)
- **Eyebrows:** Space Grotesk (700, 0.22em tracking, uppercase)

### Voice
Bold but not flashy. Premium but approachable. Confident without arrogance.
Tagline: *"Your neighbors are going to notice."*
Never generic. Always specific and human.

---

## Blog

Posts live in `lib/posts.ts` as TypeScript objects.

### Existing Articles (4)
1. When to Aerate Your Lawn in Kalamazoo, Michigan — `/blog/when-to-aerate-your-lawn-kalamazoo`
2. 5 Signs Your Kalamazoo Yard Needs Professional Help — `/blog/5-signs-your-kalamazoo-yard-needs-professional-landscaping`
3. The Best Mulch for Michigan Gardens — `/blog/best-mulch-for-michigan-gardens`
4. Spring Lawn Care Checklist for Kalamazoo Homeowners — `/blog/spring-lawn-care-checklist-kalamazoo`

### Adding a New Post
```typescript
// In lib/posts.ts, append to the posts array:
{
  slug: 'url-friendly-slug',
  title: 'Full Post Title',
  date: 'YYYY-MM-DD',
  excerpt: 'One-sentence summary.',
  readTime: 'X min read',
  category: 'Lawn Care' | 'Landscaping' | 'Garden Beds' | 'Seasonal',
  content: '<p>HTML content...</p><h2>Section</h2><p>More content...</p>',
}
```

---

## Deliverables Produced

| Deliverable | Status | Notes |
|---|---|---|
| Website — Next.js full build | ✅ Complete | github.com/Phazzie/hoopersgreenthumb |
| Hero image (Thomas in yard) | ✅ Generated | public/images/hero.jpg |
| Portrait (Thomas headshot) | ✅ Generated | public/images/portrait.jpg |
| Trimming action shot | ✅ Generated | public/images/trimming.jpg |
| Garden work shot | ✅ Generated | public/images/garden.jpg |
| 6 Before/After images | ✅ Generated | public/images/before-*.jpg / after-*.jpg |
| OG/Social share image | ✅ Generated | public/images/og-image.jpg |
| Door-hanger flyer | ✅ Built | HTML, print-ready |
| Full-page flyer | ✅ Built | HTML, print-ready, 8.5×11 |
| 3 Ad campaign concepts | ✅ Written | Facebook, Nextdoor, Google |
| Blog — 4 SEO articles | ✅ Written | Kalamazoo-specific topics |
| Site Manager Agent | ✅ Created | Hyperagent |
| Project memory | ✅ Saved | Hyperagent knowledge base |
| LocalBusiness JSON-LD schema | ✅ Live | In layout.tsx head |
| OpenGraph / Twitter meta | ✅ Live | In layout.tsx |
| Kalamazoo service area map | ✅ Generated | Embedded in MapSection |

---

## Outstanding Setup Tasks (Thomas)

These require Thomas's action — not code:

1. **Google Voice number** — Get a (269) Kalamazoo number at voice.google.com.
   Then open `components/Nav.tsx` and `components/FloatingCTA.tsx`, set `const PHONE = '(269) xxx-xxxx'`, commit.

2. **Resend email** — Sign up at resend.com (free tier: 100 emails/day).
   Verify `hoopersgreenthumb.com` domain. Add `RESEND_API_KEY` to Vercel environment variables.

3. **Connect domain** — In Vercel dashboard → Settings → Domains → add `hoopersgreenthumb.com`.

4. **Google Business Profile** — Set up at business.google.com.
   Add photos (use the generated images), services, and hours.
   This is the single most important free marketing action available.

5. **Nextdoor introduction** — Post a personal intro in Vine, Milwood, Oakwood, and Westwood groups.
   Template: *"Hey Kalamazoo neighbors — my name is Thomas Hooper and I just launched Hooper's Green Thumb..."*

6. **Real customer photos** — As jobs are completed, replace AI images in `components/BeforeAfter.tsx`
   and `components/Gallery.tsx` with real before/after photos.

7. **Real reviews** — When customers leave Google or Nextdoor reviews, update `components/Testimonials.tsx`.

---

## Seasonal Maintenance (Site Manager Agent handles this)

Update `components/SeasonalBanner.tsx` each season:

| Season | Message |
|---|---|
| Spring (Apr–May) | `🌱 Spring cleanup season is here — book before spots fill up.` |
| Summer (Jun–Aug) | `☀️ Summer booking is open — limited spots available in Kalamazoo.` |
| Fall (Sep–Oct) | `🍂 Fall cleanup season — get your yard ready for winter.` |
| Winter (Nov–Mar) | Set `active: false` to hide the banner |

---

## Ad Campaign Concepts

### 1. Facebook & Instagram — "The Neighbor Effect"
- **Targeting:** Kalamazoo homeowners 30–65, home improvement/gardening interests
- **Headline:** *"Your neighbors just hired the Green Thumb. Your yard is next."*
- **Budget:** $5–8/day, Tuesday–Thursday
- **CTA:** Get Quote

### 2. Nextdoor — "The Neighbor Introduction"
- **Strategy:** Free business page + personal neighborhood intro posts
- **Most powerful action:** After every job, ask customer for a Nextdoor recommendation
- **One recommendation generates 3–5 new leads**

### 3. Google Local Services Ads
- **Setup:** business.google.com → Local Services Ads → Lawn Care category
- **Pay per lead** (~$15–40/lead), not per click
- **Budget:** $200–300/month to start
- **Keywords:** "lawn care Kalamazoo," "landscaping near me," "garden maintenance Kalamazoo"

---

## Launch Playbook

| Week | Action |
|---|---|
| Week 1 | Set up Google Business Profile |
| Week 1 | Post Nextdoor intro in 4 neighborhoods |
| Week 2 | Print 200 door hangers, distribute Vine + Oakwood |
| Week 2–3 | Boost one Facebook post, $5/day |
| Month 2 | First customers → request Nextdoor reviews |
| Month 2 | Turn on Google Local Services Ads |
| Month 3 | Scale what's working |

---

*Last updated: June 2026*
*Maintained by: Hooper's Green Thumb — Site Manager (Hyperagent)*
