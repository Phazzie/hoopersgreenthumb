/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // All images are already hosted and sized correctly — skip Next.js
    // optimization so external URLs load directly without proxying through Vercel.
    unoptimized: true,
  },
}

export default nextConfig
