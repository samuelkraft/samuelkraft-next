const { withContentlayer } = require('next-contentlayer')
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')

const withVanillaExtract = createVanillaExtractPlugin()

module.exports = withVanillaExtract(
  withContentlayer()({
    webpack5: true,
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
  }),
)
