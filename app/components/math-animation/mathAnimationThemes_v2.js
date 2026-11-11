// mathAnimationThemes_v2.js
// Themes for MathAnimation. Every visual decision of the engine lives here.
// Resolution order: sky (base) -> named theme -> scene.themeOverrides -> themeOverrides prop.

const sky = {
  colors: {
    bg: '#EAF4FD',
    baseGrid: 'rgba(37,99,235,0.08)',
    grid: 'rgba(37,99,235,0.38)',
    dots: '#2563EB',
    axis: '#1E3A8A',
    primary: '#1E3A8A',
    accent: '#E8710A',
    ghost: '#64748B',
    text: '#1E3A8A',
    frame: '#E2E8F0',
  },
  stroke: { baseGrid: 1, grid: 1, axis: 1.5, vector: 2.25, curve: 2.25, line: 2, outline: 1.25 },
  arrow: { head: 'chevron', size: 11, spread: 0.45, axisSize: 7 },
  grid: { dots: true, dotRadius: 1.75 },
  fill: { opacity: 0.2, strokeOpacity: 0.8 },
  point: { radius: 4 },
  dash: [5, 5],
  font: {
    sans: '"DM Sans", system-ui, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, monospace',
    weight: 500,
    label: 16,
    tick: 12,
    readout: 14,
    token: 28,
    tokenWeight: 500,
    symbolWeight: 400,
  },
  bracket: { width: 2, serif: 9 },
  chip: { height: 44, padX: 11, radius: 10, fillOpacity: 0.16, strokeOpacity: 0.9, strokeWidth: 1.5 },
  motion: { ease: 'smooth' },
};

const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);

export function mergeTheme(target, source) {
  if (!isObject(source)) return target;
  const result = { ...target };
  Object.keys(source).forEach((key) => {
    result[key] = isObject(source[key]) && isObject(target[key])
      ? mergeTheme(target[key], source[key])
      : source[key];
  });
  return result;
}

export const themes = {
  sky,
  ice: mergeTheme(sky, {
    colors: {
      bg: '#F4F9FE',
      baseGrid: 'rgba(56,138,221,0.10)',
      grid: 'rgba(56,138,221,0.45)',
      axis: '#0C447C',
      primary: '#0C447C',
      accent: '#2E9BDA',
      ghost: '#5B8DB8',
      text: '#0C447C',
    },
    stroke: { grid: 1.25, vector: 2.5 },
    arrow: { head: 'triangle', spread: 0.32 },
    grid: { dots: false },
  }),
  azure: mergeTheme(sky, {
    colors: {
      bg: '#CFE6FA',
      baseGrid: 'rgba(255,255,255,0.45)',
      grid: 'rgba(255,255,255,0.95)',
      axis: '#12305E',
      primary: '#12305E',
      accent: '#D9480F',
      ghost: '#12305E',
      text: '#12305E',
    },
    stroke: { grid: 1.5, vector: 2 },
    arrow: { head: 'dot' },
    grid: { dots: false },
  }),
  paper: mergeTheme(sky, {
    colors: {
      bg: '#F6F3EA',
      baseGrid: 'rgba(71,85,105,0.10)',
      grid: 'rgba(71,85,105,0.45)',
      dots: '#475569',
      axis: '#1E293B',
      primary: '#1E3A8A',
      accent: '#E8710A',
      ghost: '#64748B',
      text: '#1E293B',
    },
  }),
  blueprint: mergeTheme(sky, {
    colors: {
      bg: '#0F2742',
      baseGrid: 'rgba(255,255,255,0.07)',
      grid: 'rgba(147,197,253,0.5)',
      axis: '#FFFFFF',
      primary: '#FFFFFF',
      accent: '#FB923C',
      ghost: '#93C5FD',
      text: '#FFFFFF',
      frame: '#0F2742',
    },
    arrow: { head: 'dot' },
    grid: { dots: false },
  }),
  slate: mergeTheme(sky, {
    colors: {
      bg: '#EEF2F6',
      baseGrid: 'rgba(100,116,139,0.12)',
      grid: 'rgba(100,116,139,0.4)',
      axis: '#334155',
      primary: '#0F172A',
      accent: '#2563EB',
      ghost: '#64748B',
      text: '#334155',
    },
    stroke: { grid: 1.25, vector: 2.5 },
    arrow: { head: 'triangle', spread: 0.32 },
    grid: { dots: false },
  }),
};

export const DEFAULT_THEME = 'sky';

// theme: a theme name or a (partial) theme object. overrides: any number of partial theme objects.
export function resolveTheme(theme, ...overrides) {
  const named = typeof theme === 'string' ? themes[theme] || themes[DEFAULT_THEME] : mergeTheme(sky, theme);
  return overrides.reduce((result, partial) => mergeTheme(result, partial), named);
}
