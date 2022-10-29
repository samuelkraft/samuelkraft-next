const { withContentlayer } = require('next-contentlayer') // eslint-disable-line

module.exports = withContentlayer({
  experimental: {
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
})
