




const nextConfig = {
  trailingSlash: false,
  poweredByHeader: false,

  // 👇 Add ONLY this (keep ESLint)
  typescript: {
    ignoreBuildErrors: true,
  },

  webpack: (config, { isServer }) => {
    if (!isServer) config.resolve.fallback.fs = false;
    return config;
  },
  async rewrites() { return []; },
  async redirects() {
    return [
      {
        source: '/set-theory/venn-generator',
        destination: '/set-theory/visual-tools/venn-generator',
        permanent: true,
      },
      // 2026-09-13: low-traffic top-level visual tools relocated into their
      // sections (Search Console 90-day clicks: 29, 5, 10). The high-traffic
      // ones (unit-circle, matrix-multiplication, fractions-visualizer,
      // square-root) stay at /visual-tools/* on purpose.
      {
        source: '/visual-tools/gauss-elimination',
        destination: '/linear-algebra/visual-tools/gauss-elimination',
        permanent: true,
      },
      {
        source: '/visual-tools/matrix-types',
        destination: '/linear-algebra/visual-tools/matrix-types',
        permanent: true,
      },
      {
        source: '/visual-tools/base-converter',
        destination: '/arithmetic/visual-tools/base-converter',
        permanent: true,
      },
      // 2026-09-13: the top-level determinant calculator (8 clicks, 8,808
      // impressions) was merged into the section-local determinant page.
      {
        source: '/visual-tools/determinant-calculator',
        destination: '/linear-algebra/visual-tools/matrix-determinant',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['www.learnmathclass.com', 'learnmathclass.com'],
    remotePatterns: [{ protocol: 'https', hostname: '**.learnmathclass.com' }],
  },
  experimental: {}
}
module.exports = nextConfig