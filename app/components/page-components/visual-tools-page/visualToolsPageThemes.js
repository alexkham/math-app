/**
 * VisualToolsPage themes
 *
 * Each theme is a complete color set used by every part of VisualToolsPage:
 * page header, QuickNav, ToolsHeader (intro + tip + article), group headers,
 * mini-cards, big cards, and sidebar.
 *
 * Field reference:
 *   accent           primary color (group border, pills, buttons, sidebar active link)
 *   accentSecondary  gradient companion for icon boxes
 *   accentHover      darker shade for hover states
 *   pageTitle        h1 color
 *   bgSubtle         soft background (QuickNav, ToolsHeader intro, article inner)
 *   bgMuted          slightly darker soft bg (article outer wrapper)
 *   border           dividers / outlines
 *   borderStrong     emphasized borders (QuickNav, article inner)
 *   text             primary body text
 *   textSecondary    descriptions, muted body text
 *   textMuted        hints, count chips, helper text
 *   cardBg           card fill (mini + big)
 *   cardText         card foreground
 *   sidebarBg        sidebar background
 *   sidebarText      sidebar primary text (links, brand)
 *   sidebarTextMuted sidebar secondary text (group headings, brandSub)
 *   sidebarHoverBg   sidebar hover background
 *   sidebarDivider   sidebar group divider
 *   tipBg            tip box background
 *   tipText          tip box text
 *   chipBg           "N tools" chip in QuickNav
 *   chipText         "N tools" chip text
 */

export const themes = {
  deepBlue: {
    accent: '#2c5d99',
    accentSecondary: '#3a72b8',
    accentHover: '#1e4170',
    pageTitle: '#143a66',
    bgSubtle: '#f8fafc',
    bgMuted: '#e2e8f0',
    border: '#cbd5e1',
    borderStrong: '#94a3b8',
    text: '#1e293b',
    textSecondary: '#64748b',
    textMuted: '#475569',
    cardBg: '#2c5d99',
    cardText: '#ffffff',
    sidebarBg: '#1e293b',
    sidebarText: 'rgba(255,255,255,0.85)',
    sidebarTextMuted: 'rgba(255,255,255,0.45)',
    sidebarHoverBg: 'rgba(255,255,255,0.06)',
    sidebarDivider: 'rgba(255,255,255,0.08)',
    tipBg: '#ffffff',
    tipText: '#475569',
    chipBg: '#e2e8f0',
    chipText: '#334155',
  },

  slate: {
    accent: '#475569',
    accentSecondary: '#64748b',
    accentHover: '#334155',
    pageTitle: '#1e293b',
    bgSubtle: '#f8fafc',
    bgMuted: '#e2e8f0',
    border: '#cbd5e1',
    borderStrong: '#94a3b8',
    text: '#0f172a',
    textSecondary: '#64748b',
    textMuted: '#475569',
    cardBg: '#475569',
    cardText: '#ffffff',
    sidebarBg: '#0f172a',
    sidebarText: 'rgba(255,255,255,0.85)',
    sidebarTextMuted: 'rgba(255,255,255,0.45)',
    sidebarHoverBg: 'rgba(255,255,255,0.06)',
    sidebarDivider: 'rgba(255,255,255,0.08)',
    tipBg: '#ffffff',
    tipText: '#475569',
    chipBg: '#e2e8f0',
    chipText: '#334155',
  },

  emerald: {
    accent: '#059669',
    accentSecondary: '#10b981',
    accentHover: '#047857',
    pageTitle: '#064e3b',
    bgSubtle: '#f0fdf4',
    bgMuted: '#dcfce7',
    border: '#bbf7d0',
    borderStrong: '#86efac',
    text: '#064e3b',
    textSecondary: '#475569',
    textMuted: '#525252',
    cardBg: '#059669',
    cardText: '#ffffff',
    sidebarBg: '#064e3b',
    sidebarText: 'rgba(255,255,255,0.85)',
    sidebarTextMuted: 'rgba(255,255,255,0.45)',
    sidebarHoverBg: 'rgba(255,255,255,0.06)',
    sidebarDivider: 'rgba(255,255,255,0.08)',
    tipBg: '#ffffff',
    tipText: '#475569',
    chipBg: '#dcfce7',
    chipText: '#065f46',
  },

  amber: {
    accent: '#b45309',
    accentSecondary: '#d97706',
    accentHover: '#92400e',
    pageTitle: '#78350f',
    bgSubtle: '#fffbeb',
    bgMuted: '#fef3c7',
    border: '#fde68a',
    borderStrong: '#fcd34d',
    text: '#78350f',
    textSecondary: '#78716c',
    textMuted: '#57534e',
    cardBg: '#b45309',
    cardText: '#ffffff',
    sidebarBg: '#78350f',
    sidebarText: 'rgba(255,255,255,0.85)',
    sidebarTextMuted: 'rgba(255,255,255,0.45)',
    sidebarHoverBg: 'rgba(255,255,255,0.06)',
    sidebarDivider: 'rgba(255,255,255,0.08)',
    tipBg: '#ffffff',
    tipText: '#78716c',
    chipBg: '#fef3c7',
    chipText: '#92400e',
  },

  violet: {
    accent: '#7c3aed',
    accentSecondary: '#a78bfa',
    accentHover: '#5b21b6',
    pageTitle: '#4c1d95',
    bgSubtle: '#faf5ff',
    bgMuted: '#ede9fe',
    border: '#ddd6fe',
    borderStrong: '#c4b5fd',
    text: '#4c1d95',
    textSecondary: '#6b7280',
    textMuted: '#52525b',
    cardBg: '#7c3aed',
    cardText: '#ffffff',
    sidebarBg: '#3b0764',
    sidebarText: 'rgba(255,255,255,0.85)',
    sidebarTextMuted: 'rgba(255,255,255,0.45)',
    sidebarHoverBg: 'rgba(255,255,255,0.06)',
    sidebarDivider: 'rgba(255,255,255,0.08)',
    tipBg: '#ffffff',
    tipText: '#6b7280',
    chipBg: '#ede9fe',
    chipText: '#5b21b6',
  },

  rose: {
    accent: '#be123c',
    accentSecondary: '#e11d48',
    accentHover: '#9f1239',
    pageTitle: '#881337',
    bgSubtle: '#fff1f2',
    bgMuted: '#ffe4e6',
    border: '#fecdd3',
    borderStrong: '#fda4af',
    text: '#881337',
    textSecondary: '#737373',
    textMuted: '#525252',
    cardBg: '#be123c',
    cardText: '#ffffff',
    sidebarBg: '#4c0519',
    sidebarText: 'rgba(255,255,255,0.85)',
    sidebarTextMuted: 'rgba(255,255,255,0.45)',
    sidebarHoverBg: 'rgba(255,255,255,0.06)',
    sidebarDivider: 'rgba(255,255,255,0.08)',
    tipBg: '#ffffff',
    tipText: '#737373',
    chipBg: '#ffe4e6',
    chipText: '#9f1239',
  },

  graphite: {
    accent: '#1f2937',
    accentSecondary: '#374151',
    accentHover: '#111827',
    pageTitle: '#111827',
    bgSubtle: '#f9fafb',
    bgMuted: '#e5e7eb',
    border: '#d1d5db',
    borderStrong: '#9ca3af',
    text: '#111827',
    textSecondary: '#6b7280',
    textMuted: '#4b5563',
    cardBg: '#1f2937',
    cardText: '#ffffff',
    sidebarBg: '#030712',
    sidebarText: 'rgba(255,255,255,0.85)',
    sidebarTextMuted: 'rgba(255,255,255,0.45)',
    sidebarHoverBg: 'rgba(255,255,255,0.06)',
    sidebarDivider: 'rgba(255,255,255,0.08)',
    tipBg: '#ffffff',
    tipText: '#6b7280',
    chipBg: '#e5e7eb',
    chipText: '#1f2937',
  },
};

/**
 * Resolve a theme.
 *   getTheme()                 → deepBlue (default)
 *   getTheme('emerald')        → emerald preset
 *   getTheme({...})            → custom theme object (merged onto deepBlue)
 *   getTheme('emerald', {...}) → emerald + per-field overrides
 */
export const getTheme = (themeOrName, overrides) => {
  const base = themes.deepBlue;
  let resolved = base;

  if (typeof themeOrName === 'string' && themes[themeOrName]) {
    resolved = themes[themeOrName];
  } else if (themeOrName && typeof themeOrName === 'object') {
    resolved = { ...base, ...themeOrName };
  }

  if (overrides && typeof overrides === 'object') {
    resolved = { ...resolved, ...overrides };
  }

  return resolved;
};

export default themes;