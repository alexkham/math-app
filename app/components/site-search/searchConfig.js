/**
 * Data for the site search UI. Data only, no JSX.
 *
 * TOKENS      colour tokens taken from the live site (navbar and page components)
 * KIND_META   label, action label and colours per result kind
 * TABS        category tabs in display order
 * TRY_ASKING  example questions shown while the query is empty (fill the input)
 * POPULAR     quick links shown while the query is empty (navigate directly)
 * UI_TEXT     every visible string, in one place
 * ASK_SUGGESTIONS_PAGE / ASK_SUGGESTIONS_GENERAL   Ask AI welcome suggestions (with / without page context)
 * ASSIST      Ask AI request and rendering settings
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
  focusRing: '0 0 0 4px rgba(77, 77, 255, 0.08)',
  segmentShadow: '0 1px 3px rgba(15, 23, 42, 0.12)',
  askRowFrom: '#f5f6ff',
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
  dialogLabel: 'Search and Ask AI',
  placeholder: 'Ask anything: "how do two variables move together?"',
  triggerLabel: 'Search by meaning',
  triggerHint: 'Ctrl K',
  askLabel: 'Ask AI',
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
  footerClear: 'clear',
  footerNote: 'Search by meaning across the whole site',
  searching: 'Searching',
  emptyCategory: 'Nothing in this category. Other tabs have results.',
  noResults: 'Nothing close enough. Try describing the idea in other words.',
  rateLimited: 'Too many searches, wait a moment.',
  unavailable: 'Search is not available right now. Try again in a moment.',
  fallbackNote: 'Showing pages whose address matches your words.',
  // Ask AI mode (2026-10-05)
  modeSearch: 'Search',
  modeAsk: 'Ask AI',
  askRowTitle: 'Ask AI',
  askCardLabel: 'Want an explanation instead of links?',
  askCardSubtitle: 'Get a step-by-step answer built from Learn Math Class pages',
  footerAsk: 'ask AI',
  askWelcomeTitle: 'Ask about this page or any math topic',
  askWelcomeText: 'Answers are built from Learn Math Class pages and link to where each idea is explained.',
  askPlaceholder: 'Ask a math question…',
  askPlaceholderFollowUp: 'Ask a follow-up…',
  askDisclaimer: 'AI answers can contain mistakes. Check important results on the linked pages.',
  askUsingPage: 'Using this page:',
  askUsePage: 'Use this page',
  askUsePageTitle: 'Answers use this page first',
  askRemovePage: "Don't use this page",
  askNewChat: 'New chat',
  askSend: 'Send',
  askStop: 'Stop answer',
  askLooking: 'Looking for related pages',
  askReadingPages: 'Reading {n} pages from Learn Math Class',
  askReadingFallback: 'Reading Learn Math Class pages',
  askWritingFormula: 'Writing a formula…',
  askSourcesLabel: 'From Learn Math Class',
  askThisPage: 'This page',
  askMoreSources: '+{n} more',
  askCopy: 'Copy',
  askCopied: 'Copied',
  askHelpful: 'Helpful',
  askNotHelpful: 'Not helpful',
  askStopped: 'Stopped.',
  askCutShort: 'The answer was cut short. Ask a follow-up to continue.',
  askInterrupted: 'The answer was interrupted.',
  askReady: 'Answer ready',
  askErrorLimited: 'You asked a lot of questions in a short time. Wait a minute, then ask again.',
  askErrorBusy: 'Many people are asking right now. Try again in a minute.',
  askErrorUnavailable: 'Ask AI is not available right now. Search still works.',
  askErrorBadRequest: 'That message could not be sent. Try shortening it.',
  askRetry: 'Try again',
  askSearchInstead: 'Search instead',
};

// Request behaviour. The API caps limit at 20 and answers source "none" under 2 characters.
export const SEARCH_LIMIT = 20;
export const DEBOUNCE_MS = 250;
export const MIN_QUERY_LENGTH = 2;

// Words ignored when highlighting query terms in titles.
export const STOP_WORDS = ['the', 'and', 'how', 'what', 'for', 'does', 'with', 'its', 'without', 'is', 'of', 'a', 'an', 'to', 'in', 'on'];

// Ask AI mode (2026-10-05). Welcome suggestions: with page context the three page entries plus the
// first general one; without it the first four general ones.
export const ASK_SUGGESTIONS_PAGE = [
  'Explain this page in simple words',
  'Give me a worked example with numbers',
  'What should I learn before this?',
];

export const ASK_SUGGESTIONS_GENERAL = [
  'Why is sin²x + cos²x = 1?',
  'What is the difference between permutations and combinations?',
  'How do I find the eigenvalues of a 2×2 matrix?',
  'What does a derivative tell me about a graph?',
];

// POST /api/assist keeps the last 12 messages and cuts each to 2000 characters; the service keeps 8.
export const ASSIST = {
  endpoint: '/api/assist',
  maxQuestionChars: 1000,
  maxHistoryMessages: 12,
  visibleSources: 3,
  flushMs: 50,
  stickToBottomPx: 60,
};
