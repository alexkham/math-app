




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

      // 2026-10-11: old nested /tables/* URLs were flattened without redirects.
      // Search Console Apr-Jul 2026: powers-table 341 clicks, perfect-cubes 114,
      // perfect-squares 67, trigonometry/inverse 21, complement-angle 16.
      // Specific rules first, wildcards after.
      {
        source: '/tables/trigonometry/special-angles',
        destination: '/tables/special-angles',
        permanent: true,
      },
      {
        source: '/tables/special_angles',
        destination: '/tables/special-angles',
        permanent: true,
      },
      {
        source: '/tables/arithmetics/exponential-table',
        destination: '/tables/powers-table',
        permanent: true,
      },
      {
        source: '/tables/arithmetics/natural-logarithms',
        destination: '/tables/logarithm',
        permanent: true,
      },
      {
        source: '/tables/arithmetics/pythagorean-triples',
        destination: '/tables',
        permanent: true,
      },
      {
        source: '/tables/arithmetics',
        destination: '/tables',
        permanent: true,
      },
      {
        source: '/tables/arithmetics/:slug',
        destination: '/tables/:slug',
        permanent: true,
      },
      {
        source: '/tables/calculus',
        destination: '/tables',
        permanent: true,
      },
      {
        source: '/tables/calculus/:slug',
        destination: '/tables/:slug',
        permanent: true,
      },
      {
        source: '/tables/probability',
        destination: '/tables',
        permanent: true,
      },
      {
        source: '/tables/probability/:slug',
        destination: '/tables/:slug',
        permanent: true,
      },
      {
        source: '/tables/trigonometry',
        destination: '/tables/trigonometric-identities',
        permanent: true,
      },
      {
        source: '/tables/trigonometry/:slug',
        destination: '/tables/trigonometric-identities',
        permanent: true,
      },
      {
        source: '/tables/truth-tables',
        destination: '/logic/truth-tables',
        permanent: true,
      },
      {
        source: '/tables/truth-tables/:slug',
        destination: '/logic/truth-tables/:slug',
        permanent: true,
      },

      // 2026-10-11: old / renamed URLs reported as 404 in Search Console
      // (Indexing > Not found, export of 2026-10-11). Each points to the
      // closest current page.
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/calculus/derivatives/formulas',
        destination: '/calculus/formulas',
        permanent: true,
      },
      {
        source: '/calculus/derivatives/applications',
        destination: '/calculus/derivatives',
        permanent: true,
      },
      {
        source: '/calculus/integrals/common',
        destination: '/tables/common-integrals',
        permanent: true,
      },
      {
        source: '/trigonometry/half-angle',
        destination: '/trigonometry/identities',
        permanent: true,
      },
      {
        source: '/trigonometry/sum-angle',
        destination: '/trigonometry/identities',
        permanent: true,
      },
      {
        source: '/trigonometry/visual-tools/angle',
        destination: '/trigonometry/visual-tools/angle-explorer',
        permanent: true,
      },
      {
        source: '/trigonometry/visual-tools/triangle',
        destination: '/trigonometry/visual-tools/triangle-explorer',
        permanent: true,
      },
      {
        source: '/trigonometry/visual-tools/functions/signs',
        destination: '/trigonometry/visual-tools/functions-signs',
        permanent: true,
      },
      {
        source: '/sequences',
        destination: '/algebra/sequences',
        permanent: true,
      },
      {
        source: '/sequences/fibonacci-numbers',
        destination: '/algebra/sequences/fibonacci',
        permanent: true,
      },
      {
        source: '/algebra/powers-and-exponents',
        destination: '/algebra/powers',
        permanent: true,
      },
      {
        source: '/algebra/calculators/equations',
        destination: '/algebra/calculators',
        permanent: true,
      },
      {
        source: '/algebra/calculators/inequalities',
        destination: '/algebra/calculators',
        permanent: true,
      },
      {
        source: '/calculators/factoring-calculator',
        destination: '/algebra/calculators/factoring',
        permanent: true,
      },
      {
        source: '/calculators/polynomial-calculator',
        destination: '/algebra/calculators/polynomial',
        permanent: true,
      },
      {
        source: '/calculators/quadratic-equations',
        destination: '/algebra/calculators/equations/quadratic',
        permanent: true,
      },
      {
        source: '/set-theory/set-builder-notation',
        destination: '/set-theory/visual-tools/set-builder',
        permanent: true,
      },
      {
        source: '/complex-numbers/equations-and-polynomials',
        destination: '/complex-numbers/equations-polynomials',
        permanent: true,
      },
      {
        source: '/logic/propositional-logic/semantics/biconditional',
        destination: '/logic/truth-tables/biconditionals',
        permanent: true,
      },
      {
        source: '/latex/delimiters',
        destination: '/latex',
        permanent: true,
      },
      {
        source: '/tables/arithmetic/prime-numbers',
        destination: '/tables/prime-numbers',
        permanent: true,
      },
      {
        source: '/visual-tools/matrix-transposition',
        destination: '/linear-algebra/visual-tools/matrix-transpose',
        permanent: true,
      },
      {
        source: '/linear-algebra/matrix-multiplication',
        destination: '/visual-tools/matrix-multiplication',
        permanent: true,
      },
      {
        source: '/linear-algebra/eigenvalues-vectors',
        destination: '/linear-algebra/eigen',
        permanent: true,
      },
      {
        source: '/linear-algebra/matrix/properties',
        destination: '/linear-algebra/matrix',
        permanent: true,
      },
      {
        source: '/linear-algebra/linear-systems/gaussian-eliminations',
        destination: '/linear-algebra/linear-systems/gaussian-elimination',
        permanent: true,
      },
      {
        source: '/linear-algebra/linear-systems/homogenous',
        destination: '/linear-algebra/linear-systems/homogeneous',
        permanent: true,
      },
      {
        source: '/linear-algebra/visual-tools/linear-combination',
        destination: '/linear-algebra/visual-tools/vector-linear-combination',
        permanent: true,
      },
      {
        source: '/linear-algebra/visual-tools/inner-product',
        destination: '/linear-algebra/visual-tools/vectors-inner-product',
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