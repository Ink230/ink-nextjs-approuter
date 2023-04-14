/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    domains: [
      {
        domain: 'localhost',
        defaultLocale: 'en',
      },
    ],
    localeDetection: false,
  },
};

module.exports = nextConfig;
