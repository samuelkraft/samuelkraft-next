module.exports = {
  experimental: { optimizeCss: true },
  webpack5: true,
  images: {
    domains: ['www.notion.so', 'i.scdn.co'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap') // eslint-disable-line
      require('./scripts/generate-rss') // eslint-disable-line
    }

    return config
  },
}
