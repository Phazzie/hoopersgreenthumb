# Hooper's Green Thumb

Residential landscaping website for Thomas Hooper, Kalamazoo MI.

Built with **Next.js 14**, **Tailwind CSS**, and deployed on **Vercel**.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub (already done)
2. Go to [vercel.com](https://vercel.com) → Import Project → select `phazzie/hoopersgreenthumb`
3. Vercel auto-detects Next.js — click Deploy

## Setting Up the Contact Form Email

The contact form posts to `/api/contact`. To enable real email delivery:

1. Sign up free at [resend.com](https://resend.com) (100 emails/day free)
2. Verify your domain (`hoopersgreenthumb.com`) in Resend
3. In Vercel: Settings → Environment Variables → add `RESEND_API_KEY` = your key
4. Redeploy

Until `RESEND_API_KEY` is set, form submissions are logged to the console but still return success to the user.

## Project Structure

```
app/
  layout.tsx          # Root layout, fonts, metadata
  page.tsx            # Home page (assembles all sections)
  globals.css         # Tailwind + global styles
  api/contact/
    route.ts          # Contact form API (email delivery via Resend)

components/
  Nav.tsx             # Sticky nav with scroll effect + mobile menu
  Hero.tsx            # Full-bleed hero with animated background
  TrustBar.tsx        # Trust signal strip
  Services.tsx        # 6-service grid
  About.tsx           # About Thomas split layout
  Gallery.tsx         # Asymmetric photo gallery
  WhyUs.tsx           # 3 differentiators
  CtaBand.tsx         # Gold CTA section
  ServiceArea.tsx     # Neighborhood tags
  ContactSection.tsx  # Quote request form
  Footer.tsx          # Footer
```

## Updating Images

Images currently reference hosted URLs. To use local images:
1. Add images to `/public/images/`
2. Update the `src` props in `Hero.tsx`, `About.tsx`, `Gallery.tsx`
3. Change `width` / `height` to match your files
