// cleanTheme.js
// Design tokens for the "clean" variant of CalculationsExplorer.
// Site palette: deep blue / slate. No violet, no indigo.

export const CLEAN = {
  primary: '#06357a',
  accent: '#2c5d99',
  accentHover: '#1e4170',
  title: '#143a66',
  text: '#34495e',
  muted: '#6b7a8f',
  faint: '#94a3b8',
  tint: '#e8eef7',
  tintBorder: '#c8d4e8',
  border: '#d8e1ec',
  bgSubtle: '#f8fafc',
  bgMuted: '#e2e8f0',
  card: '#ffffff',
  serif: "Georgia, 'Times New Roman', serif",
  mono: "'Roboto Mono', ui-monospace, monospace",
  maxWidth: '1240px',
  gutter: '28px',
};

// Level chip colours. Unknown levels fall back to `composite`.
export const LEVEL_STYLES = {
  atomic: { color: '#55657a', border: '#cfd8e3', background: '#f3f6f9' },
  composite: { color: '#2c5d99', border: '#c8d4e8', background: '#e8eef7' },
  strategy: { color: '#1f6a6a', border: '#b9dcdc', background: '#ebf6f6' },
  applied: { color: '#8a5a12', border: '#ecd5ae', background: '#fbf4e7' },
};

export function levelStyle(level) {
  return LEVEL_STYLES[level] || LEVEL_STYLES.composite;
}
