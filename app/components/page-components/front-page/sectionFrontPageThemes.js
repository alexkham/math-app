/**
 * sectionFrontPageThemes.js
 *
 * Theme definitions for SectionFrontPage.
 * Each theme is a flat object of color tokens consumed by the component.
 * Pass the theme key as a prop: <SectionFrontPage theme="slate" />
 * Default theme is 'deepBlue' (current brand).
 */

const themes = {

  deepBlue: {
    /* Hero + Sidebar */
    heroBg: '#0d47a1',
    sidebarBg: '#0d47a1',
    sidebarBgDark: '#0a3a84',
    sidebarAccent: '#5dade2',

    /* Strip */
    stripActiveColor: '#1565c0',
    stripActiveBg: '#f0f7ff',
    stripActiveBorder: '#3498db',
    stripTextColor: '#5d6d7e',

    /* Section header */
    headingColor: '#2c3e50',
    headerBorderColor: '#2c3e50',

    /* Cards */
    cardAccent: '#3498db',
    cardAccentHover: '#1565c0',

    /* Badges */
    badgeBg: '#e3f2fd',
    badgeColor: '#1565c0',

    /* Buttons */
    buttonBg: '#3498db',
    buttonBgHover: '#1565c0',

    /* Text */
    textPrimary: '#2c3e50',
    textSecondary: '#5d6d7e',
    textMuted: '#aab7c4',

    /* Content area */
    contentBg: '#f8f8f8',

    /* Definitions term color */
    termColor: '#0d47a1',

    /* Tool card accent */
    toolAccent: '#2a7a6a',
    toolAccentBg: '#e6f4f1',
  },

  slate: {
    heroBg: '#334155',
    sidebarBg: '#334155',
    sidebarBgDark: '#293548',
    sidebarAccent: '#94a3b8',

    stripActiveColor: '#475569',
    stripActiveBg: '#f1f5f9',
    stripActiveBorder: '#475569',
    stripTextColor: '#94a3b8',

    headingColor: '#1e293b',
    headerBorderColor: '#334155',

    cardAccent: '#64748b',
    cardAccentHover: '#475569',

    badgeBg: '#f1f5f9',
    badgeColor: '#475569',

    buttonBg: '#475569',
    buttonBgHover: '#334155',

    textPrimary: '#1e293b',
    textSecondary: '#64748b',
    textMuted: '#94a3b8',

    contentBg: '#fafafa',

    termColor: '#334155',

    toolAccent: '#475569',
    toolAccentBg: '#f1f5f9',
  },

  forest: {
    heroBg: '#1b4332',
    sidebarBg: '#1b4332',
    sidebarBgDark: '#153728',
    sidebarAccent: '#52b788',

    stripActiveColor: '#2d6a4f',
    stripActiveBg: '#f0fdf4',
    stripActiveBorder: '#2d6a4f',
    stripTextColor: '#6b7280',

    headingColor: '#1b4332',
    headerBorderColor: '#1b4332',

    cardAccent: '#40916c',
    cardAccentHover: '#2d6a4f',

    badgeBg: '#d1fae5',
    badgeColor: '#065f46',

    buttonBg: '#2d6a4f',
    buttonBgHover: '#1b4332',

    textPrimary: '#1b4332',
    textSecondary: '#6b7280',
    textMuted: '#9ca3af',

    contentBg: '#fafaf8',

    termColor: '#1b4332',

    toolAccent: '#2d6a4f',
    toolAccentBg: '#d1fae5',
  },

  burgundy: {
    heroBg: '#4a1525',
    sidebarBg: '#4a1525',
    sidebarBgDark: '#3b101e',
    sidebarAccent: '#e88a9a',

    stripActiveColor: '#7f1d1d',
    stripActiveBg: '#fef2f2',
    stripActiveBorder: '#7f1d1d',
    stripTextColor: '#9ca3af',

    headingColor: '#4a1525',
    headerBorderColor: '#4a1525',

    cardAccent: '#9f4054',
    cardAccentHover: '#7f1d1d',

    badgeBg: '#fce4ec',
    badgeColor: '#7f1d1d',

    buttonBg: '#7f1d1d',
    buttonBgHover: '#4a1525',

    textPrimary: '#4a1525',
    textSecondary: '#78716c',
    textMuted: '#a8a29e',

    contentBg: '#faf9f7',

    termColor: '#4a1525',

    toolAccent: '#7f1d1d',
    toolAccentBg: '#fce4ec',
  },

  navyInk: {
    heroBg: '#1e2a3a',
    sidebarBg: '#1e2a3a',
    sidebarBgDark: '#172230',
    sidebarAccent: '#60a5fa',

    stripActiveColor: '#2563eb',
    stripActiveBg: '#eff6ff',
    stripActiveBorder: '#2563eb',
    stripTextColor: '#9ca3af',

    headingColor: '#1e2a3a',
    headerBorderColor: '#1e2a3a',

    cardAccent: '#3b82f6',
    cardAccentHover: '#2563eb',

    badgeBg: '#e0e7ff',
    badgeColor: '#3730a3',

    buttonBg: '#2563eb',
    buttonBgHover: '#1d4ed8',

    textPrimary: '#1e2a3a',
    textSecondary: '#6b7280',
    textMuted: '#9ca3af',

    contentBg: '#f9fafb',

    termColor: '#1e2a3a',

    toolAccent: '#2563eb',
    toolAccentBg: '#e0e7ff',
  },

  charcoal: {
    heroBg: '#292524',
    sidebarBg: '#292524',
    sidebarBgDark: '#1c1917',
    sidebarAccent: '#a8a29e',

    stripActiveColor: '#44403c',
    stripActiveBg: '#fafaf9',
    stripActiveBorder: '#44403c',
    stripTextColor: '#a8a29e',

    headingColor: '#292524',
    headerBorderColor: '#292524',

    cardAccent: '#78716c',
    cardAccentHover: '#57534e',

    badgeBg: '#f5f5f4',
    badgeColor: '#57534e',

    buttonBg: '#57534e',
    buttonBgHover: '#44403c',

    textPrimary: '#292524',
    textSecondary: '#78716c',
    textMuted: '#a8a29e',

    contentBg: '#fafaf9',

    termColor: '#292524',

    toolAccent: '#57534e',
    toolAccentBg: '#f5f5f4',
  },

};

export const DEFAULT_THEME = 'deepBlue';

export function getTheme(key) {
  return themes[key] || themes[DEFAULT_THEME];
}

export default themes;