const { withContentlayer } = require('next-contentlayer') // eslint-disable-line
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin') // eslint-disable-line
const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
    appDir: true,
  },
  images: {
    domains: ['www.notion.so', 'i.scdn.co'],
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap') // eslint-disable-line
      require('./scripts/generate-rss') // eslint-disable-line
    }

    return config
  },
}

module.exports = withContentlayer(withVanillaExtract(nextConfig))
