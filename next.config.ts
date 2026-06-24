import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img2.pic.in.th',
      },
      {
        protocol: 'https',
        hostname: 'img5.pic.in.th',
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: '/VIP-108-FOODS-AND-MARKET.mp4',
        destination:
          'https://drive.google.com/uc?export=download&id=1jSAYHtUsKgX68GGfJIHIs6Y7oEGGCxQi',
      },
    ]
  },
}

export default nextConfig