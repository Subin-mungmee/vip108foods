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
}

export default nextConfig
