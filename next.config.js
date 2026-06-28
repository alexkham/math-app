




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
  images: {
    domains: ['www.learnmathclass.com', 'learnmathclass.com'],
    remotePatterns: [{ protocol: 'https', hostname: '**.learnmathclass.com' }],
  },
  experimental: {}
}
module.exports = nextConfig