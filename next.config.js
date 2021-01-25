module.exports = {
  images: {
    domains: ['www.notion.so'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap') // eslint-disable-line
    }

    return config
  },
}
