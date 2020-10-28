/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const { withPlugins } = require('next-compose-plugins');
const withPWA = require('next-pwa');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
const runtimeCaching = require('next-pwa/cache');
runtimeCaching[0].handler = 'StaleWhileRevalidate';
runtimeCaching[0].urlPattern = '/';
const production = process.env.NODE_ENV === 'production';

const nextConfig = {
  target: 'experimental-serverless-trace',
  webpack: (config, { isServer, defaultLoaders }) => {
    defaultLoaders.babel.options.plugins = [require('babel-plugin-macros'), require('babel-plugin-styled-components')];
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }
    return config;
  },
};

module.exports = withPlugins(
  [
    [
      withMDX,
      {
        pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
      },
    ],
    [
      withPWA,
      {
        pwa: {
          disable: !production,
          runtimeCaching,
          dest: 'public',
          modifyURLPrefix: {
            'static/': '_next/static/',
            '../public/': '/',
          },
          publicExcludes: ['!robots.txt', '!sitemap.xml.gz'],
          register: false,
          skipWaiting: false,
        },
      },
    ],
  ],
  nextConfig
);
