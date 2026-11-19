// Graph Studio — themes
//
// A theme is a plain object of colours and sizes. Both renderers
// (canvas and SVG) and every shell read their look from it, so one
// scene can be shown in any theme without touching the scene.
//
// Blue and slate palette only; no violet or indigo.
//
//   getTheme('dark')                       a built-in theme by name
//   getTheme({ background: '#fff8e1' })    default theme with overrides
//   getTheme({ base: 'dark', axis: '#fff' })
//   registerTheme('exam', { base: 'default', palette: [...] })

const FONT_UI = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
const FONT_MONO = 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';

const DEFAULT_THEME = {
  name: 'default',

  // ---- the graph ----
  background: '#ffffff',
  gridMinor: '#f1f5f9',
  gridMajor: '#dfe4ea',
  axis: '#334155',
  axisWidth: 1.5,
  label: '#475569',          // numbers along the axes
  labelHalo: '#ffffff',      // outline behind them
  font: FONT_UI,
  fontSize: 11,

  // Colours given to rows that do not name their own colour, by row order.
  palette: ['#2563EB', '#DC2626', '#059669', '#D97706', '#0891B2', '#475569'],

  curveWidth: 2.5,
  curveWidthSelected: 3.5,
  pointRadius: 5.5,
  regionOpacity: 0.22,
  dash: [8, 6],              // strict inequality boundary

  specialPoint: { fill: '#64748b', stroke: '#ffffff', radius: 4.5 },
  tooltip: { background: 'rgba(255,255,255,0.96)', border: '#cbd5e1', text: '#0f172a' },
  annotation: { line: '#64748b', band: '#2563EB', bandOpacity: 0.1, label: '#334155' },

  // ---- the chrome around the graph (shells) ----
  ui: {
    font: FONT_UI,
    fontMono: FONT_MONO,
    surface: '#ffffff',
    surfaceAlt: '#f8fafc',
    border: '#e2e8f0',
    borderStrong: '#cbd5e1',
    text: '#0f172a',
    textMuted: '#64748b',
    accent: '#2563EB',
    accentText: '#ffffff',
    accentSoft: '#eff6ff',
    error: '#b91c1c',
    errorSoft: '#fef2f2',
    radius: 8
  }
};

const DARK_THEME = {
  ...DEFAULT_THEME,
  name: 'dark',
  background: '#0f172a',
  gridMinor: '#172033',
  gridMajor: '#263449',
  axis: '#cbd5e1',
  label: '#94a3b8',
  labelHalo: '#0f172a',
  palette: ['#60a5fa', '#f87171', '#34d399', '#fbbf24', '#22d3ee', '#cbd5e1'],
  regionOpacity: 0.28,
  specialPoint: { fill: '#94a3b8', stroke: '#0f172a', radius: 4.5 },
  tooltip: { background: 'rgba(30,41,59,0.96)', border: '#475569', text: '#f1f5f9' },
  annotation: { line: '#94a3b8', band: '#60a5fa', bandOpacity: 0.14, label: '#e2e8f0' },
  ui: {
    ...DEFAULT_THEME.ui,
    surface: '#111c31',
    surfaceAlt: '#0f172a',
    border: '#263449',
    borderStrong: '#334155',
    text: '#f1f5f9',
    textMuted: '#94a3b8',
    accent: '#60a5fa',
    accentText: '#0f172a',
    accentSoft: '#172a46',
    error: '#fca5a5',
    errorSoft: '#3b1d1d'
  }
};

// The lesson-page colours of the site: blue, navy, amber.
const LESSON_THEME = {
  ...DEFAULT_THEME,
  name: 'lesson',
  gridMinor: '#f4f7fb',
  gridMajor: '#e3e9f2',
  axis: '#06357A',
  label: '#3b5278',
  palette: ['#2563EB', '#B45309', '#06357A', '#0891B2', '#059669', '#475569'],
  annotation: { line: '#06357A', band: '#2563EB', bandOpacity: 0.1, label: '#06357A' },
  ui: { ...DEFAULT_THEME.ui, text: '#06357A', accent: '#2563EB' }
};

// Thick lines and large text, for a classroom screen.
const PROJECTOR_THEME = {
  ...DEFAULT_THEME,
  name: 'projector',
  gridMinor: '#eef2f7',
  gridMajor: '#cbd5e1',
  axis: '#0f172a',
  axisWidth: 2.5,
  label: '#0f172a',
  fontSize: 16,
  curveWidth: 4.5,
  curveWidthSelected: 6,
  pointRadius: 8,
  specialPoint: { fill: '#334155', stroke: '#ffffff', radius: 6.5 }
};

const REGISTRY = {
  default: DEFAULT_THEME,
  dark: DARK_THEME,
  lesson: LESSON_THEME,
  projector: PROJECTOR_THEME
};

const NESTED = ['specialPoint', 'tooltip', 'annotation', 'ui'];

function merge(base, over) {
  const out = { ...base, ...over };
  for (const k of NESTED) out[k] = { ...base[k], ...(over[k] || {}) };
  return out;
}

export function themeNames() {
  return Object.keys(REGISTRY);
}

// Accepts a name, a partial theme object (optionally with `base`), or
// nothing. Always returns a complete theme.
export function getTheme(theme) {
  if (!theme) return DEFAULT_THEME;
  if (typeof theme === 'string') return REGISTRY[theme] || DEFAULT_THEME;
  const { base, ...over } = theme;
  return merge(REGISTRY[base] || DEFAULT_THEME, over);
}

export function registerTheme(name, theme) {
  REGISTRY[name] = { ...getTheme(theme), name };
  return REGISTRY[name];
}

// Colour of a row: its own colour when it names one, otherwise the
// theme palette by row order.
export function rowColor(theme, layerOrRow) {
  if (layerOrRow.color) return layerOrRow.color;
  const p = theme.palette;
  return p[(layerOrRow.index || 0) % p.length];
}
