/**
 * Search index config for learnmathclass.com (math-app).
 *
 * Read by the shared indexer in /var/www/search-service/indexer/run.mjs,
 * which runs after `next build` and parses .next/server/pages/**.html.
 *
 * Rules are matched by page STRUCTURE where possible, not by route,
 * so new pages are picked up without touching this file.
 */

export default {
  site: 'math-app',

  pagesDir: '.next/server/pages',

  // Routes never indexed
  exclude: [/^\/api(\/|$)/, /^\/(test|test1|dev)(\/|$)/],

  // Removed from page titles: "Covariance | Learn Math Class" -> "Covariance"
  titleSuffix: /\s*\|\s*Learn Math Class\s*$/,

  // UI text that carries no meaning for search
  stripPatterns: [
    /↑ Back to top/g,
    /Open tool →/g,
    /Read more →/g,
    /See all[^\n]*→/g,
    /\n\s*\+\s*\n/g,
  ],

  rules: [
    // Content sections on every page (article pages, calculators, tool pages).
    // Visual-tools hubs use section#cat-* as card containers — handled by the tool rule instead.
    {
      kind: 'section',
      selector: 'section[id]:not([id^="cat-"])',
      titleSelector: 'h1, h2',
      skip: /\/definitions$/,
    },

    // Definitions pages: one block per term, anchored by term id (#covariance)
    {
      kind: 'definition',
      match: /\/definitions$/,
      selector: 'div[id]:has(> div > h3)',
      titleSelector: 'h3',
      stripSelectors: ['[style*="cursor:pointer"]'],
      keepShort: true,
    },

    // Tool cards on any hub page: result links to the tool itself
    {
      kind: 'tool',
      selector: '[id^="tool-"]',
      linkSelector: 'a[href]',
      titleSelector: 'h3',
      keepShort: true,
    },
  ],

  chunking: {
    maxChars: 1000,
    overlapChars: 150,
  },

  batchSize: 16,

  // Passed through to the search service in the index header
  settings: {
    vectorWeight: 0.6,
    keywordWeight: 0.4,
    boosts: {
      tool: 1.15,
      page: 1.1,
      definition: 1.05,
      section: 1,
    },
    defaultLimit: 10,
  },
};
