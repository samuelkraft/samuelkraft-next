const { withContentlayer } = require("next-contentlayer"); // eslint-disable-line

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dgtzuqphqg23d.cloudfront.net",
      },
      { protocol: "https", hostname: "image.mux.com" },
    ],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/generate-sitemap");
      require("./scripts/generate-rss");
    }

    return config;
  },
};

module.exports = withContentlayer(nextConfig);
