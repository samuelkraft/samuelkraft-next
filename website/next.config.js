// const { withContentlayer } = require("next-contentlayer");
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "tsx", "md", "mdx"],
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
};

module.exports = withVanillaExtract(nextConfig);
