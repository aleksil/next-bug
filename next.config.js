/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  experimental: {
    scrollRestoration: true,
  },
  i18n: {
    locales: ['nb', 'sv', 'default'],
    defaultLocale: 'default',
    localeDetection: false,
  },
}

module.exports = nextConfig
