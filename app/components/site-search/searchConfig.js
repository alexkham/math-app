/**
 * Data for the site search UI. Data only, no JSX.
 *
 * TOKENS      colour tokens taken from the live site (navbar and page components)
 * KIND_META   label, action label and colours per result kind
 * TABS        category tabs in display order
 * TRY_ASKING  example questions shown while the query is empty (fill the input)
 * POPULAR     quick links shown while the query is empty (navigate directly)
 * UI_TEXT     every visible string, in one place
 */

export const TOKENS = {
  brand: '#4d4dff',
  brandHover: '#3d3de6',
  brandTint: '#eef0ff',
  brandLine: '#c7cbff',
  highlight: '#dfe2ff',
  blue: '#2563eb',
  blueTint: '#eff6ff',
  navy: '#0d47a1',
  navyTint: '#e3edfb',
  slate: '#475569',
  ink: '#1e293b',
  body: '#334155',
  muted: '#64748b',
  dim: '#94a3b8',
  line: '#e2e8f0',
  surface: '#f8fafc',
  surface2: '#f1f5f9',
  white: '#ffffff',
  backdrop: 'rgba(15, 23, 42, 0.42)',
  panelShadow: '0 32px 80px rgba(15, 23, 42, 0.28)',
  pillShadow: '0 12px 30px rgba(77, 77, 255, 0.35)',
  heroShadow: '0 10px 30px rgba(77, 77, 255, 0.12)',
};

export const KIND_META = {
  tool: {
    label: 'Tool',
    plural: 'Tools',
    action: 'Open tool',
    color: TOKENS.brand,
    background: TOKENS.brandTint,
  },
  definition: {
    label: 'Definition',
    plural: 'Definitions',
    action: 'Go to definition',
    color: TOKENS.navy,
    background: TOKENS.navyTint,
  },
  section: {
    label: 'Section',
    plural: 'Sections',
    action: 'Jump to section',
    color: TOKENS.blue,
    background: TOKENS.blueTint,
  },
  page: {
    label: 'Page',
    plural: 'Pages',
    action: 'Open page',
    color: TOKENS.slate,
    background: TOKENS.surface2,
  },
};

export const TABS = [
  { key: 'all', label: 'All' },
  { key: 'tool', label: 'Tools' },
  { key: 'definition', label: 'Definitions' },
  { key: 'section', label: 'Sections' },
  { key: 'page', label: 'Pages' },
];

export const TRY_ASKING = [
  'how do two variables move together',
  'chance of the first success on try 3',
  'derivative of sine',
  'what stretches a vector without turning it',
];

export const POPULAR = [
  { kind: 'tool', title: 'Unit Circle Visualizer', url: '/visual-tools/unit-circle' },
  { kind: 'tool', title: 'Matrix Multiplication', url: '/visual-tools/matrix-multiplication' },
  { kind: 'page', title: 'Covariance', url: '/probability/covariance' },
  { kind: 'page', title: 'Eigenvalues & Eigenvectors', url: '/linear-algebra/eigen' },
];

export const UI_TEXT = {
  dialogLabel: 'Site search',
  placeholder: 'Ask anything: "how do two variables move together?"',
  triggerLabel: 'Search by meaning',
  triggerHint: 'Ctrl K',
  askLabel: 'Ask Learn Math',
  heroPlaceholder: 'Search by meaning',
  heroButton: 'Search',
  clear: 'Clear search',
  close: 'Close search',
  escHint: 'Esc',
  tryAsking: 'Try asking',
  popular: 'Popular right now',
  understands: 'Understands meaning',
  footerNavigate: 'navigate',
  footerOpen: 'open',
  footerTab: 'next category',
  footerClose: 'close',
  footerNote: 'Search by meaning across the whole site',
  searching: 'Searching',
  emptyCategory: 'Nothing in this category. Other tabs have results.',
  noResults: 'Nothing close enough. Try describing the idea in other words.',
  rateLimited: 'Too many searches, wait a moment.',
  unavailable: 'Search is not available right now. Try again in a moment.',
  fallbackNote: 'Showing pages whose address matches your words.',
};

// Request behaviour. The API caps limit at 20 and answers source "none" under 2 characters.
export const SEARCH_LIMIT = 20;
export const DEBOUNCE_MS = 250;
export const MIN_QUERY_LENGTH = 2;

// Words ignored when highlighting query terms in titles.
export const STOP_WORDS = ['the', 'and', 'how', 'what', 'for', 'does', 'with', 'its', 'without', 'is', 'of', 'a', 'an', 'to', 'in', 'on'];
