module.exports = {
  webpack5: true,
  images: {
    domains: ['www.notion.so', 'i.scdn.co', 's3.us-west-2.amazonaws.com'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap') // eslint-disable-line
      require('./scripts/generate-rss') // eslint-disable-line
    }

    return config
  },
}
