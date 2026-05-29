/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hyperagent.com',
        pathname: '/api/files/**',
      },
    ],
  },
}

export default nextConfig
