import { useState, useEffect, useMemo, useRef, Fragment } from 'react';
import QuizWidget from '../examples/quiz/QuizWidget'
import generateMultiplicationQuestion from '../examples/quiz/questions/multiplicationQuestions';

// =========================================================
//   MultiplicationTablesPage
//   Main page component for /tables/arithmetics/multiplication.
//   Props:
//     relatedReferences  array  [{ title, sub, href }] — sidebar links
// =========================================================

// ---------- Theme: indigo ----------
const C = {
  primary:      '#4f46e5',
  primaryDark:  '#3730a3',
  primaryLight: '#eef2ff',
  bg:           '#fafbff',
  border:       '#e0e7ff',
  borderSoft:   '#eef0f7',
  text:         '#1e1b4b',
  textMuted:    '#64748b',
  success:      '#10b981',
  successBg:    '#d1fae5',
  error:        '#ef4444',
  errorBg:      '#fee2e2',
  errorText:    '#991b1b',
  warn:         '#f59e0b',
  warnBg:       '#fef3c7',
  warnText:     '#92400e',
  shadowSm:     '0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)',
  shadowMd:     '0 4px 12px rgba(15,23,42,0.08)',
  shadowLg:     '0 8px 24px rgba(15,23,42,0.10)',
};

// ---------- Helpers ----------
const isPrime = (n) => {
  if (n < 2) return false;
  if (n < 4) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i * i <= n; i += 2) if (n % i === 0) return false;
  return true;
};
const factorPairCount = (p, max) => {
  let count = 0;
  for (let a = 1; a <= max; a++) {
    const b = p / a;
    if (Number.isInteger(b) && b >= 1 && b <= max) count++;
  }
  return count;
};
const allFactorPairs = (p) => {
  const pairs = [];
  for (let a = 1; a * a <= p; a++) {
    if (p % a === 0) pairs.push([a, p / a]);
  }
  return pairs;
};

const GRID_SIZES = [10, 12, 15, 20];
const DEFAULT_GRID_SIZE = 12;
const ROW_PAGE_SIZE = 20;
const MAX_MULTIPLICAND = 999;
const MAX_ROW_LENGTH = 100;

// ---------- Filter defs (match fn used at render time, set sizes computed per gridSize) ----------
const FILTER_DEFS = [
  { id: 'squares', icon: '\u25C6', title: 'Perfect squares',
    desc: 'The diagonal of the grid \u2014 cells where row equals column.',
    match: (r, c) => r === c },
  { id: 'prime', icon: 'p', title: 'Prime products',
    desc: 'Cells whose product is itself prime. Only in row 1 and column 1.',
    match: (r, c) => isPrime(r * c) },
  { id: 'even', icon: '2k', title: 'Even products',
    desc: 'Cells whose product is even. Happens whenever either factor is even.',
    match: (r, c) => (r * c) % 2 === 0 },
  { id: 'odd', icon: '2k+1', title: 'Odd products',
    desc: 'Cells whose product is odd. Both factors must be odd.',
    match: (r, c) => (r * c) % 2 === 1 },
  { id: 'highComp', icon: '\u03A3', title: 'Highly composite products',
    desc: 'Products that show up in many cells \u2014 numbers with the most factor pairs inside the grid.',
    match: (r, c, gridSize) => factorPairCount(r * c, gridSize) >= 5 },
];

const PROPERTY_CARDS = [
  {
    icon: '\u21CB',
    title: 'Commutative property',
    body: 'a &times; b = b &times; a. The grid is a mirror image of itself across the diagonal \u2014 every cell has a twin on the other side.',
    code: '3 \u00D7 7 = 21  \u00B7  7 \u00D7 3 = 21',
    hasMirror: true,
  },
  {
    icon: '\u25C6',
    title: 'The diagonal is the squares',
    body: 'Cells where row equals column are perfect squares: 1, 4, 9, 16, 25\u2026 See the full <a href="/tables/arithmetics/perfect-squares" style="color:#4f46e5;font-weight:600;text-decoration:none;">perfect squares page</a>.',
    code: '1\u00B2=1, 2\u00B2=4, 3\u00B2=9, 4\u00B2=16, 5\u00B2=25',
  },
  {
    icon: '1',
    title: 'Identity element',
    body: 'Multiplying any number by 1 returns the number unchanged. The first row and first column are the integers themselves, in order.',
    code: '1 \u00D7 n = n \u00D7 1 = n',
  },
  {
    icon: '\u2295',
    title: 'Distributive property',
    body: 'a &times; (b + c) = a &times; b + a &times; c. The classic mental-math trick: break one factor into a sum.',
    code: '7 \u00D7 12 = 7 \u00D7 10 + 7 \u00D7 2 = 70 + 14 = 84',
  },
];

const TOC_ITEMS = [
  { id: 'sec-tool',       label: 'Multiplication tool' },
  { id: 'sec-table',      label: 'The grid' },
  { id: 'sec-patterns',   label: 'Patterns & filters' },
  { id: 'sec-properties', label: 'Properties' },
  { id: 'sec-quiz',       label: 'Test yourself' },
];

// ---------- Inline styles ----------
const S = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '28px 24px 80px',
    position: 'relative',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    color: C.text,
  },
  pageLayout: { position: 'relative' },
  sidebar: {
    position: 'absolute',
    top: 0,
    right: '100%',
    width: '240px',
    height: '100%',
    marginRight: '40px',
  },
  sidebarSticky: {
    position: 'sticky',
    top: '20px',
    maxHeight: 'calc(100vh - 40px)',
    overflowY: 'auto',
    paddingRight: '4px',
  },
  sidebarBlock: { marginBottom: '32px' },
  sidebarLabel: {
    fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.2px',
    color: C.textMuted, fontWeight: 700, marginBottom: '14px', paddingLeft: '14px',
  },
  tocList: { listStyle: 'none', margin: 0, padding: 0 },
  tocLinkBase: {
    display: 'flex', alignItems: 'center', gap: '10px',
    padding: '9px 0 9px 14px', borderLeft: `2px solid ${C.borderSoft}`,
    color: C.textMuted, textDecoration: 'none', fontSize: '14px',
    lineHeight: 1.3, cursor: 'pointer', transition: 'all 0.15s',
  },
  tocNumBase: {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: '22px', height: '22px', borderRadius: '50%',
    background: C.borderSoft, color: C.textMuted,
    fontSize: '11px', fontWeight: 700, flexShrink: 0, transition: 'all 0.15s',
  },
  relatedMini: {
    display: 'block', padding: '11px 14px', background: 'white',
    border: `1px solid ${C.borderSoft}`, borderRadius: '9px',
    textDecoration: 'none', color: 'inherit',
    marginBottom: '8px', transition: 'all 0.15s', cursor: 'pointer',
  },
  relatedMiniTitle: { fontWeight: 600, color: C.primaryDark, fontSize: '13px', marginBottom: '2px' },
  relatedMiniSub: { fontSize: '12px', color: C.textMuted },
  mainCol: { minWidth: 0, width: '100%' },
  toolSection: {
    background: 'linear-gradient(135deg, #eef2ff 0%, #f0f9ff 100%)',
    border: `1px solid ${C.border}`, borderRadius: '20px',
    padding: '28px 32px', marginBottom: '36px',
    position: 'relative', overflow: 'hidden',
  },
  toolHeader: { position: 'relative', zIndex: 1, marginBottom: '18px' },
  toolH2: {
    fontFamily: "'Crimson Pro', serif", fontSize: '26px',
    color: C.primaryDark, margin: '0 0 4px 0', fontWeight: 700,
  },
  toolSub: { color: C.textMuted, fontSize: '14px', margin: 0 },
  modeTabsWrap: {
    position: 'relative', zIndex: 1, display: 'inline-flex',
    background: 'white', borderRadius: '12px', padding: '4px',
    marginBottom: '14px', border: `1px solid ${C.border}`,
    boxShadow: C.shadowSm, gap: '2px', flexWrap: 'wrap',
  },
  modeTabBase: {
    padding: '9px 18px', borderRadius: '9px', fontSize: '14px',
    fontWeight: 600, cursor: 'pointer', background: 'transparent',
    border: 'none', transition: 'all 0.18s',
    fontFamily: 'inherit', color: C.textMuted,
  },
  modeTabActive: {
    background: C.primary, color: 'white',
    boxShadow: '0 2px 6px rgba(79, 70, 229, 0.30)',
  },
  inputBlock: {
    display: 'flex', gap: '12px', marginBottom: '8px',
    position: 'relative', zIndex: 1,
    alignItems: 'flex-end', flexWrap: 'wrap',
  },
  labeledBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    flex: 1,
    minWidth: '140px',
  },
  inputLabel: {
    fontSize: '11px',
    fontWeight: 700,
    color: C.textMuted,
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
  },
  inputField: {
    padding: '13px 18px',
    border: `2px solid ${C.border}`, borderRadius: '11px',
    fontSize: '15px', outline: 'none', background: 'white',
    transition: 'border-color 0.15s, box-shadow 0.15s',
    fontFamily: 'inherit', color: C.text,
    width: '100%',
  },
  inputFieldInline: {
    flex: 1,
    minWidth: '100px',
    width: 'auto',
  },
  inputBtn: {
    padding: '13px 26px', background: C.primary, color: 'white',
    border: 'none', borderRadius: '11px',
    fontWeight: 600, fontSize: '15px', cursor: 'pointer',
    transition: 'background 0.15s, transform 0.1s',
    fontFamily: 'inherit', whiteSpace: 'nowrap',
  },
  rangeSep: {
    color: C.textMuted, fontWeight: 700, fontSize: '18px',
    padding: '0 4px', alignSelf: 'center',
  },
  toolStatus: {
    marginTop: '12px', padding: '11px 14px',
    background: 'rgba(255, 255, 255, 0.75)',
    border: `1px solid ${C.border}`, borderRadius: '10px',
    display: 'flex', alignItems: 'flex-start', gap: '10px',
    fontSize: '14px', color: C.text, lineHeight: 1.55,
    position: 'relative', zIndex: 1,
  },
  statusIcon: {
    width: '22px', height: '22px', borderRadius: '50%',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    color: 'white', fontSize: '13px', fontWeight: 700,
    flexShrink: 0, marginTop: '1px',
  },
  legend: {
    background: 'white', borderRadius: '16px', padding: '18px 22px',
    marginBottom: '22px', border: `1px solid ${C.borderSoft}`,
    boxShadow: C.shadowSm,
    display: 'flex',
    flexWrap: 'wrap',
    gap: '18px',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  legendLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  legendTitle: {
    fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px',
    color: C.textMuted, fontWeight: 700,
  },
  legendNote: { fontSize: '14px', color: C.textMuted, margin: 0, maxWidth: '540px' },
  sizeToggle: {
    display: 'inline-flex',
    background: C.bg,
    borderRadius: '10px',
    padding: '3px',
    border: `1px solid ${C.border}`,
    gap: '2px',
  },
  sizeBtnBase: {
    padding: '7px 14px',
    borderRadius: '7px',
    fontSize: '13px',
    fontWeight: 600,
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    fontFamily: 'inherit',
    color: C.textMuted,
    transition: 'all 0.15s',
  },
  sizeBtnActive: {
    background: C.primary,
    color: 'white',
    boxShadow: '0 2px 4px rgba(79,70,229,0.25)',
  },
  filterStatus: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '12px 18px',
    background: 'linear-gradient(90deg, #fef3c7 0%, #fffbeb 100%)',
    border: `1px solid ${C.warn}`, borderRadius: '10px',
    marginBottom: '16px', fontSize: '14px',
  },
  filterStatusText: { color: C.warnText, fontWeight: 600 },
  filterClear: {
    background: 'white', border: `1px solid ${C.warn}`,
    color: C.warnText, padding: '5px 12px', borderRadius: '7px',
    fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
  },
  gridWrap: {
    overflowX: 'auto',
    marginBottom: '24px',
    padding: '4px',
  },
  grid: {
    display: 'grid',
    gap: '3px',
    background: C.bg,
    borderRadius: '12px',
    padding: '8px',
    border: `1px solid ${C.borderSoft}`,
    margin: '0 auto',
  },
  cellBase: {
    aspectRatio: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    borderRadius: '5px',
    background: 'white',
    color: C.text,
    cursor: 'pointer',
    transition: 'transform 0.12s, box-shadow 0.12s, border-color 0.12s, opacity 0.2s',
    border: `1px solid ${C.borderSoft}`,
    position: 'relative',
    userSelect: 'none',
  },
  cellDiagonal: {
    background: C.primaryLight,
    color: C.primaryDark,
  },
  cellHeader: {
    background: `linear-gradient(135deg, ${C.primary} 0%, #6366f1 100%)`,
    color: 'white',
    fontWeight: 700,
    cursor: 'default',
    borderColor: 'transparent',
  },
  cellHeaderCorner: {
    background: C.primaryDark,
    color: 'white',
    fontStyle: 'italic',
  },
  rowList: {
    background: 'white',
    border: `1px solid ${C.borderSoft}`,
    borderRadius: '14px',
    padding: '20px 24px',
    marginBottom: '32px',
    boxShadow: C.shadowSm,
  },
  rowListTitle: {
    fontFamily: "'Crimson Pro', serif",
    fontSize: '22px',
    color: C.primaryDark,
    margin: '0 0 14px',
    fontWeight: 700,
  },
  rowListItems: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '6px',
  },
  rowListItem: {
    padding: '8px 12px',
    background: C.bg,
    borderRadius: '7px',
    fontFamily: "'Menlo', 'Monaco', monospace",
    fontSize: '14px',
    color: C.text,
    border: `1px solid ${C.borderSoft}`,
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '18px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  paginationBtnBase: {
    padding: '8px 14px',
    border: `1px solid ${C.border}`,
    background: 'white',
    color: C.primary,
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '13px',
    fontFamily: 'inherit',
    transition: 'all 0.15s',
  },
  paginationBtnDisabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
  pageInfo: {
    color: C.textMuted,
    fontWeight: 500,
    fontSize: '13px',
    padding: '0 8px',
  },
  cellDetails: {
    background: 'white', border: `1px solid ${C.border}`,
    borderRadius: '18px', padding: '28px',
    marginBottom: '44px', position: 'relative', boxShadow: C.shadowLg,
  },
  closeDetails: {
    position: 'absolute', top: '16px', right: '16px',
    width: '32px', height: '32px', border: 'none',
    background: C.borderSoft, borderRadius: '50%',
    fontSize: '20px', cursor: 'pointer', color: C.textMuted,
    lineHeight: 1, transition: 'background 0.15s', fontFamily: 'inherit',
  },
  detailsH3: {
    fontFamily: "'Crimson Pro', serif", fontSize: '30px',
    color: C.primaryDark, fontWeight: 700, margin: '0 0 20px 0',
  },
  detailGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '12px',
  },
  detailItem: {
    padding: '14px 16px', background: C.bg,
    borderRadius: '10px', border: `1px solid ${C.borderSoft}`,
  },
  detailLabel: {
    fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.8px',
    color: C.textMuted, marginBottom: '6px', fontWeight: 700,
  },
  detailValue: { fontSize: '16px', fontWeight: 700, color: C.text },
  propertyBadges: { display: 'flex', flexWrap: 'wrap', gap: '8px' },
  badge: {
    padding: '5px 12px', background: C.primaryLight,
    color: C.primaryDark, borderRadius: '9999px',
    fontSize: '12px', fontWeight: 600, border: `1px solid ${C.border}`,
  },
  sectionH: {
    fontFamily: "'Crimson Pro', serif", fontSize: '30px',
    color: '#1e3a8a', fontWeight: 700, letterSpacing: '-0.3px',
    margin: '0 0 8px 0',
  },
  sectionSub: { color: C.textMuted, marginBottom: '26px', fontSize: '15px' },
  filterGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '16px', marginBottom: '40px',
  },
  filterCard: {
    background: 'white', border: `2px solid ${C.borderSoft}`,
    borderRadius: '14px', padding: '20px',
    cursor: 'pointer', transition: 'all 0.18s',
    position: 'relative', boxShadow: C.shadowSm,
  },
  filterIcon: {
    width: '44px', height: '44px',
    background: `linear-gradient(135deg, ${C.primary} 0%, #6366f1 100%)`,
    color: 'white', borderRadius: '12px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '15px', fontWeight: 700,
    fontFamily: "'Crimson Pro', serif", marginBottom: '14px',
    boxShadow: '0 4px 10px rgba(79,70,229,0.25)',
  },
  filterCardH3: { fontSize: '16px', fontWeight: 700, color: C.text, margin: '0 0 6px 0' },
  filterCardP: { color: C.textMuted, fontSize: '13px', marginBottom: '14px', lineHeight: 1.5 },
  filterCardFooter: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    paddingTop: '12px', borderTop: `1px solid ${C.borderSoft}`,
  },
  filterCount: { fontSize: '13px', fontWeight: 700, color: C.primaryDark },
  filterAction: {
    fontSize: '12px', color: C.textMuted,
    textTransform: 'uppercase', letterSpacing: '0.6px', fontWeight: 600,
  },
  propertiesSection: { marginTop: '32px' },
  propertyGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '16px',
  },
  propertyCard: {
    background: 'white', border: `1px solid ${C.borderSoft}`,
    borderRadius: '14px', padding: '22px', boxShadow: C.shadowSm,
  },
  propertyCardIcon: {
    width: '36px', height: '36px',
    background: C.primaryLight, color: C.primaryDark, borderRadius: '9px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '17px', fontWeight: 700,
    fontFamily: "'Crimson Pro', serif", marginBottom: '12px',
  },
  propertyCardH4: { fontSize: '15px', fontWeight: 700, color: C.text, margin: '0 0 6px 0' },
  propertyCardP: { color: C.textMuted, fontSize: '13px', lineHeight: 1.55, margin: 0 },
  propertyCardCode: {
    display: 'block', fontFamily: "'Menlo', 'Monaco', monospace",
    background: C.bg, padding: '7px 11px', borderRadius: '6px',
    fontSize: '12px', marginTop: '8px',
    color: C.primaryDark, fontWeight: 600,
  },
  mirrorGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '2px',
    marginTop: '10px',
    maxWidth: '180px',
    padding: '6px',
    background: C.bg,
    borderRadius: '8px',
  },
  mirrorCellBase: {
    aspectRatio: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '9px',
    fontWeight: 700,
    borderRadius: '3px',
    background: 'white',
    color: C.textMuted,
  },
  mirrorCellDiag:  { background: C.primary, color: 'white' },
  mirrorCellPairA: { background: '#fef3c7', color: C.warnText },
  mirrorCellPairB: { background: '#ffe4e6', color: '#9f1239' },
  quizSection: { marginTop: '56px' },
};

// ---------- CSS (pseudo-classes, hover, media queries) ----------
const CSS = `
.mtp-toc-link:hover { color: ${C.primary}; }
.mtp-related-mini:hover {
  border-color: ${C.primary} !important;
  transform: translateX(2px);
  box-shadow: ${C.shadowSm};
}
.mtp-input-field:focus {
  border-color: ${C.primary} !important;
  box-shadow: 0 0 0 4px rgba(79,70,229,0.12);
}
.mtp-input-btn:hover { background: ${C.primaryDark} !important; }
.mtp-input-btn:active { transform: translateY(1px); }
.mtp-mode-tab:not(.active):hover { color: ${C.primary} !important; }
.mtp-cell:not(.header):hover {
  transform: scale(1.08);
  box-shadow: 0 4px 12px rgba(15,23,42,0.10);
  border-color: ${C.primary};
  z-index: 5;
}
.mtp-cell.highlight {
  border: 2px solid ${C.warn} !important;
  background: ${C.warnBg} !important;
  color: ${C.warnText} !important;
  box-shadow: 0 0 0 3px rgba(245,158,11,0.30), 0 4px 12px rgba(245,158,11,0.25);
  transform: scale(1.08);
  z-index: 4;
}
.mtp-cell.filter-match {
  border: 2px solid ${C.warn} !important;
  background: ${C.warnBg} !important;
  color: ${C.warnText} !important;
  box-shadow: 0 3px 10px rgba(245,158,11,0.30);
  transform: scale(1.05);
  z-index: 3;
}
.mtp-cell.filter-dim { opacity: 0.25; }
.mtp-cell.header.row-hover, .mtp-cell.header.col-hover {
  background: linear-gradient(135deg, ${C.warn} 0%, #fb923c 100%) !important;
}
.mtp-filter-card:hover {
  transform: translateY(-3px);
  box-shadow: ${C.shadowMd};
  border-color: ${C.border} !important;
}
.mtp-filter-card.active {
  border-color: ${C.warn} !important;
  background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%) !important;
  box-shadow: 0 0 0 4px rgba(245,158,11,0.18), ${C.shadowMd};
}
.mtp-filter-card.active::after {
  content: '\u25CF Active';
  position: absolute;
  top: 12px;
  right: 14px;
  font-size: 11px;
  font-weight: 700;
  color: ${C.warnText};
  letter-spacing: 0.5px;
}
.mtp-filter-card.active .mtp-filter-icon {
  background: linear-gradient(135deg, ${C.warn} 0%, #fb923c 100%) !important;
  box-shadow: 0 4px 10px rgba(245,158,11,0.3) !important;
}
.mtp-filter-card.active .mtp-filter-count,
.mtp-filter-card.active .mtp-filter-action {
  color: ${C.warnText} !important;
}
.mtp-size-btn:not(.active):hover { color: ${C.primary}; }
.mtp-pagination-btn:not(:disabled):hover {
  background: ${C.primaryLight} !important;
  border-color: ${C.primary} !important;
}
.mtp-sidebar-sticky::-webkit-scrollbar { width: 4px; }
.mtp-sidebar-sticky::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 4px; }
.mtp-close-details:hover { background: #e5e7eb !important; color: ${C.text} !important; }
@keyframes mtpSlideIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}
.mtp-cell-details { animation: mtpSlideIn 0.25s ease; }

/* Hide the absolute sidebar when the viewport is too narrow to fit it */
@media (max-width: 1320px) {
  .mtp-sidebar { display: none !important; }
}
@media (max-width: 640px) {
  .mtp-input-block { flex-direction: column !important; align-items: stretch !important; }
  .mtp-labeled-block { min-width: 0 !important; }
  .mtp-input-block button { width: 100% !important; }
  .mtp-mode-tab { padding: 9px 14px !important; font-size: 13px !important; }
}
`;

// ---------- Mirror grid component (for the commutative property card) ----------
const MirrorGrid = () => {
  const cells = [];
  for (let r = 1; r <= 5; r++) {
    for (let c = 1; c <= 5; c++) {
      let style = { ...S.mirrorCellBase };
      if (r === c) style = { ...style, ...S.mirrorCellDiag };
      else if ((r === 2 && c === 4) || (r === 4 && c === 2)) style = { ...style, ...S.mirrorCellPairA };
      else if ((r === 1 && c === 3) || (r === 3 && c === 1)) style = { ...style, ...S.mirrorCellPairB };
      cells.push(<div key={`${r}-${c}`} style={style}>{r * c}</div>);
    }
  }
  return <div style={S.mirrorGrid}>{cells}</div>;
};

// ---------- Cell font size helper ----------
const getCellFontSize = (size) => {
  if (size <= 10) return '17px';
  if (size <= 12) return '15px';
  if (size <= 15) return '13px';
  return '11px';
};

// ---------- Component ----------
const MultiplicationTablesPage = ({ relatedReferences = [] }) => {
  // Grid size
  const [gridSize, setGridSize] = useState(DEFAULT_GRID_SIZE);

  // Mode (row is default — highest-intent flow)
  const [mode, setMode] = useState('row');

  // Row mode inputs
  const [multiplicandInput, setMultiplicandInput] = useState('5');
  const [rowLengthInput, setRowLengthInput] = useState('12');
  const [currentRowPage, setCurrentRowPage] = useState(1);

  // Product mode inputs
  const [aInput, setAInput] = useState('');
  const [bInput, setBInput] = useState('');

  // Factors mode input
  const [factorsInput, setFactorsInput] = useState('');

  // Status
  const [statusKind, setStatusKind] = useState(null);
  const [statusIcon, setStatusIcon] = useState('');
  const [statusHtml, setStatusHtml] = useState('');

  // Grid state
  const [highlighted, setHighlighted] = useState(() => new Set());
  const [activeFilter, setActiveFilter] = useState(null);
  const [detailsCell, setDetailsCell] = useState(null);

  // TOC + scroll
  const [activeSection, setActiveSection] = useState('sec-tool');
  const [pendingScroll, setPendingScroll] = useState(null);

  const cellRefs = useRef({});
  const sectionRefs = useRef({});

  // ===== Derived: parsed inputs =====
  const multiplicand = (() => {
    const m = parseInt(multiplicandInput, 10);
    if (isNaN(m) || m < 1 || m > MAX_MULTIPLICAND) return null;
    return m;
  })();
  const rowLength = (() => {
    const l = parseInt(rowLengthInput, 10);
    if (isNaN(l) || l < 1 || l > MAX_ROW_LENGTH) return null;
    return l;
  })();

  // ===== Derived: row data and pagination =====
  const rowData = useMemo(() => {
    if (multiplicand === null || rowLength === null) return null;
    return Array.from({ length: rowLength }, (_, i) => ({
      multiplier: i + 1,
      product: multiplicand * (i + 1),
    }));
  }, [multiplicand, rowLength]);

  const totalPages = rowData ? Math.ceil(rowData.length / ROW_PAGE_SIZE) : 0;
  const startIndex = (currentRowPage - 1) * ROW_PAGE_SIZE;
  const currentPageData = rowData
    ? rowData.slice(startIndex, startIndex + ROW_PAGE_SIZE)
    : [];

  // Reset to page 1 whenever inputs change
  useEffect(() => {
    setCurrentRowPage(1);
  }, [multiplicand, rowLength]);

  // ===== Row mode highlight effect =====
  useEffect(() => {
    if (mode !== 'row') return;
    if (multiplicand === null || multiplicand > gridSize) {
      setHighlighted(new Set());
      return;
    }
    const set = new Set();
    for (let c = 1; c <= gridSize; c++) set.add(`${multiplicand},${c}`);
    setHighlighted(set);
    setActiveFilter(null);
  }, [mode, multiplicand, gridSize]);

  // ===== Helpers =====
  const setStatus = (kind, icon, html) => {
    setStatusKind(kind); setStatusIcon(icon); setStatusHtml(html);
  };
  const hideStatus = () => {
    setStatusKind(null); setStatusIcon(''); setStatusHtml('');
  };
  const clearTableHighlights = () => {
    setActiveFilter(null);
    setHighlighted(new Set());
    setDetailsCell(null);
  };

  // ===== Scroll resolver =====
  useEffect(() => {
    if (!pendingScroll) return;
    let el = null;
    if (pendingScroll.type === 'cell') {
      el = cellRefs.current[pendingScroll.key];
    } else if (pendingScroll.type === 'table') {
      el = sectionRefs.current['sec-table'];
    } else if (pendingScroll.type === 'details') {
      el = document.getElementById('mtp-cell-details');
    }
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: pendingScroll.type === 'table' ? 'start' : 'center',
      });
    }
    setPendingScroll(null);
  }, [pendingScroll]);

  // ===== TOC active state =====
  useEffect(() => {
    const sections = TOC_ITEMS
      .map((item) => sectionRefs.current[item.id])
      .filter(Boolean);
    if (sections.length === 0) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActiveSection(e.target.id);
      });
    }, { rootMargin: '-25% 0px -65% 0px' });
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // ===== Mode change =====
  const handleModeChange = (next) => {
    setMode(next);
    hideStatus();
    setDetailsCell(null);
    setActiveFilter(null);
    if (next !== 'row') {
      setHighlighted(new Set());
    }
  };

  // ===== Tool: Product (A × B) =====
  const runProduct = () => {
    const a = parseInt(aInput, 10);
    const b = parseInt(bInput, 10);
    if (isNaN(a) || isNaN(b) || a < 1 || b < 1) {
      setStatus('error', '!', 'Please enter two positive integers.');
      return;
    }
    setActiveFilter(null);
    setDetailsCell(null);

    const p = a * b;
    const inGrid = a <= gridSize && b <= gridSize;
    const set = new Set();
    if (inGrid) {
      set.add(`${a},${b}`);
      if (a !== b) set.add(`${b},${a}`);
      setPendingScroll({ type: 'cell', key: `${a},${b}` });
    }
    setHighlighted(set);

    if (inGrid) {
      setStatus('success', '\u2713',
        `<strong>${a} &times; ${b} = ${p.toLocaleString()}</strong>. Cell highlighted (with its commutative partner if different).`);
    } else {
      setStatus('success', '\u2713',
        `<strong>${a} &times; ${b} = ${p.toLocaleString()}</strong>. Outside the current ${gridSize}&times;${gridSize} grid \u2014 try a larger grid size.`);
    }
  };

  // ===== Tool: Factor pairs of N =====
  const runFactors = () => {
    const n = parseInt(factorsInput, 10);
    if (isNaN(n) || n < 1) {
      setStatus('error', '!', 'Please enter a positive integer.');
      return;
    }
    setActiveFilter(null);
    setDetailsCell(null);

    const matches = [];
    const set = new Set();
    for (let a = 1; a <= gridSize; a++) {
      if (n % a === 0) {
        const b = n / a;
        if (Number.isInteger(b) && b >= 1 && b <= gridSize) {
          matches.push([a, b]);
          set.add(`${a},${b}`);
        }
      }
    }
    setHighlighted(set);

    if (matches.length === 0) {
      setStatus('info', '\u2211',
        `${n} has no factor pairs (a, b) with both a, b in 1\u2013${gridSize}. Try a larger grid size.`);
    } else {
      const pairsStr = matches.map(([a, b]) => `${a}&times;${b}`).join(', ');
      setStatus('success', '\u2211',
        `${n} = ${pairsStr}. <strong>${matches.length}</strong> cell${matches.length === 1 ? '' : 's'} highlighted.`);
      setPendingScroll({ type: 'table' });
    }
  };

  // ===== Filter cards =====
  const toggleFilter = (id) => {
    setHighlighted(new Set());
    setDetailsCell(null);
    if (activeFilter === id) {
      setActiveFilter(null);
      hideStatus();
    } else {
      setActiveFilter(id);
      hideStatus();
      setPendingScroll({ type: 'table' });
    }
  };

  const handleClearHighlights = () => {
    clearTableHighlights();
    hideStatus();
    // If still in row mode, the effect will re-apply row highlights
  };

  // ===== Cell click =====
  const handleCellClick = (r, c) => {
    const set = new Set([`${r},${c}`]);
    if (r !== c) set.add(`${c},${r}`);
    setHighlighted(set);
    setActiveFilter(null);
    setDetailsCell({ r, c });
    setPendingScroll({ type: 'details' });
  };

  // ===== Derived: filter match counts (memoized) =====
  const filterCounts = useMemo(() => {
    const counts = {};
    FILTER_DEFS.forEach((f) => {
      let count = 0;
      for (let r = 1; r <= gridSize; r++) {
        for (let c = 1; c <= gridSize; c++) {
          if (f.match(r, c, gridSize)) count++;
        }
      }
      counts[f.id] = count;
    });
    return counts;
  }, [gridSize]);

  // ===== Derived: cell class =====
  const getCellClass = (r, c) => {
    let cls = 'mtp-cell';
    if (r === c) cls += ' diagonal';
    if (highlighted.has(`${r},${c}`)) cls += ' highlight';
    if (activeFilter) {
      const def = FILTER_DEFS.find(f => f.id === activeFilter);
      if (def.match(r, c, gridSize)) cls += ' filter-match';
      else cls += ' filter-dim';
    }
    return cls;
  };

  // ===== TOC styles =====
  const tocLinkStyle = (id) => {
    const base = { ...S.tocLinkBase };
    if (activeSection === id) {
      base.color = C.primaryDark;
      base.borderLeftColor = C.primary;
      base.fontWeight = 600;
      base.background = `linear-gradient(90deg, ${C.primaryLight} 0%, transparent 100%)`;
    }
    return base;
  };
  const tocNumStyle = (id) => {
    const base = { ...S.tocNumBase };
    if (activeSection === id) {
      base.background = C.primary;
      base.color = 'white';
    }
    return base;
  };

  // ===== Banner =====
  let bannerText = '';
  if (activeFilter) {
    const def = FILTER_DEFS.find((f) => f.id === activeFilter);
    bannerText = `Filtering: ${def.title} \u2014 ${filterCounts[def.id]} cell${filterCounts[def.id] === 1 ? '' : 's'} highlighted`;
  } else if (highlighted.size > 0) {
    bannerText = `${highlighted.size} cell${highlighted.size === 1 ? '' : 's'} highlighted`;
  }
  const showBanner = activeFilter !== null || (highlighted.size > 0 && mode !== 'row');

  // ===== Details content =====
  const detailsContent = (() => {
    if (!detailsCell) return null;
    const { r, c } = detailsCell;
    const p = r * c;
    const pairs = allFactorPairs(p);
    const props = [];
    if (r === c) props.push('Perfect square');
    if (isPrime(p)) props.push('Prime product');
    props.push(p % 2 === 0 ? 'Even' : 'Odd');
    if (factorPairCount(p, gridSize) >= 5) props.push('Highly composite');
    return { r, c, p, pairs, props };
  })();

  // ===== Status icon bg =====
  const statusIconBg = {
    success: C.success,
    error:   C.error,
    info:    C.primary,
  }[statusKind] || C.primary;

  const modeTabs = [
    { id: 'row',     label: 'Single-row table' },
    { id: 'product', label: 'Product of A \u00D7 B' },
    { id: 'factors', label: 'Factor pairs of N' },
  ];

  // ===== Grid cells =====
  const cellSizeFont = getCellFontSize(gridSize);
  const gridStyle = {
    ...S.grid,
    gridTemplateColumns: `repeat(${gridSize + 1}, 1fr)`,
    fontSize: cellSizeFont,
    maxWidth: '100%',
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div style={S.container}>
        <div className="mtp-layout" style={S.pageLayout}>

          {/* ===== SIDEBAR ===== */}
          <aside className="mtp-sidebar" style={S.sidebar}>
            <div className="mtp-sidebar-sticky" style={S.sidebarSticky}>
              <div style={S.sidebarBlock}>
                <div style={S.sidebarLabel}>On this page</div>
                <ul style={S.tocList}>
                  {TOC_ITEMS.map((item, idx) => (
                    <li key={item.id}>
                      <a
                        className={`mtp-toc-link ${activeSection === item.id ? 'active' : ''}`}
                        style={tocLinkStyle(item.id)}
                        onClick={(e) => {
                          e.preventDefault();
                          const t = sectionRefs.current[item.id];
                          if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                      >
                        <span style={tocNumStyle(item.id)}>{idx + 1}</span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {relatedReferences && relatedReferences.length > 0 && (
                <div style={S.sidebarBlock}>
                  <div style={S.sidebarLabel}>Related references</div>
                  {relatedReferences.map((ref, idx) => (
                    <a
                      key={idx}
                      href={ref.href}
                      className="mtp-related-mini"
                      style={S.relatedMini}
                    >
                      <div style={S.relatedMiniTitle}>{ref.title}</div>
                      {ref.sub && <div style={S.relatedMiniSub}>{ref.sub}</div>}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </aside>

          {/* ===== MAIN ===== */}
          <div style={S.mainCol}>

            {/* TOOL */}
            <section
              id="sec-tool"
              ref={(el) => { sectionRefs.current['sec-tool'] = el; }}
              style={S.toolSection}
            >
              <div style={S.toolHeader}>
                <h2 style={S.toolH2}>Multiplication Tool</h2>
                <p style={S.toolSub}>Every answer takes you to the grid. Pick a question:</p>
              </div>

              <div style={S.modeTabsWrap} role="tablist">
                {modeTabs.map((tab) => {
                  const isActive = mode === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      className={`mtp-mode-tab ${isActive ? 'active' : ''}`}
                      style={{ ...S.modeTabBase, ...(isActive ? S.modeTabActive : {}) }}
                      onClick={() => handleModeChange(tab.id)}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {mode === 'row' && (
                <div className="mtp-input-block" style={S.inputBlock}>
                  <div className="mtp-labeled-block" style={S.labeledBlock}>
                    <label style={S.inputLabel}>Multiplicand (1&ndash;{MAX_MULTIPLICAND})</label>
                    <input
                      type="number"
                      className="mtp-input-field"
                      style={S.inputField}
                      placeholder="e.g., 5"
                      min="1"
                      max={MAX_MULTIPLICAND}
                      value={multiplicandInput}
                      onChange={(e) => setMultiplicandInput(e.target.value)}
                    />
                  </div>
                  <div className="mtp-labeled-block" style={S.labeledBlock}>
                    <label style={S.inputLabel}>Up to (1&ndash;{MAX_ROW_LENGTH})</label>
                    <input
                      type="number"
                      className="mtp-input-field"
                      style={S.inputField}
                      placeholder="e.g., 12"
                      min="1"
                      max={MAX_ROW_LENGTH}
                      value={rowLengthInput}
                      onChange={(e) => setRowLengthInput(e.target.value)}
                    />
                  </div>
                </div>
              )}

              {mode === 'product' && (
                <div className="mtp-input-block" style={S.inputBlock}>
                  <input
                    type="number"
                    className="mtp-input-field"
                    style={{ ...S.inputField, ...S.inputFieldInline }}
                    placeholder="A"
                    min="1"
                    value={aInput}
                    onChange={(e) => setAInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') runProduct(); }}
                  />
                  <span style={S.rangeSep}>&times;</span>
                  <input
                    type="number"
                    className="mtp-input-field"
                    style={{ ...S.inputField, ...S.inputFieldInline }}
                    placeholder="B"
                    min="1"
                    value={bInput}
                    onChange={(e) => setBInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') runProduct(); }}
                  />
                  <button
                    type="button"
                    className="mtp-input-btn"
                    style={S.inputBtn}
                    onClick={runProduct}
                  >
                    Compute
                  </button>
                </div>
              )}

              {mode === 'factors' && (
                <div className="mtp-input-block" style={S.inputBlock}>
                  <input
                    type="number"
                    className="mtp-input-field"
                    style={{ ...S.inputField, ...S.inputFieldInline }}
                    placeholder="Enter a number (e.g., 24)"
                    min="1"
                    value={factorsInput}
                    onChange={(e) => setFactorsInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') runFactors(); }}
                  />
                  <button
                    type="button"
                    className="mtp-input-btn"
                    style={S.inputBtn}
                    onClick={runFactors}
                  >
                    Find pairs
                  </button>
                </div>
              )}

              {statusKind && (
                <div style={S.toolStatus}>
                  <span style={{ ...S.statusIcon, background: statusIconBg }}>{statusIcon}</span>
                  <span dangerouslySetInnerHTML={{ __html: statusHtml }} />
                </div>
              )}
            </section>

            {/* TABLE / GRID */}
            <section
              id="sec-table"
              ref={(el) => { sectionRefs.current['sec-table'] = el; }}
            >
              <div style={S.legend}>
                <div style={S.legendLeft}>
                  <div style={S.legendTitle}>Grid</div>
                  <p style={S.legendNote}>
                    The cell at row a, column b shows a &times; b. The diagonal holds perfect squares; the grid is symmetric about it (a &times; b = b &times; a).
                  </p>
                </div>
                <div className="mtp-size-toggle" style={S.sizeToggle}>
                  {GRID_SIZES.map((size) => {
                    const isActive = gridSize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        className={`mtp-size-btn ${isActive ? 'active' : ''}`}
                        style={{
                          ...S.sizeBtnBase,
                          ...(isActive ? S.sizeBtnActive : {}),
                        }}
                        onClick={() => setGridSize(size)}
                      >
                        {size}&times;{size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {showBanner && (
                <div style={S.filterStatus}>
                  <span style={S.filterStatusText}>{bannerText}</span>
                  <button
                    type="button"
                    style={S.filterClear}
                    onClick={handleClearHighlights}
                  >
                    Clear highlight
                  </button>
                </div>
              )}

              <div style={S.gridWrap}>
                <div className="mtp-grid" style={gridStyle}>
                  <div className="mtp-cell header header-corner"
                    style={{ ...S.cellBase, ...S.cellHeader, ...S.cellHeaderCorner }}>
                    &times;
                  </div>
                  {Array.from({ length: gridSize }, (_, i) => i + 1).map((c) => (
                    <div
                      key={`hc-${c}`}
                      className="mtp-cell header"
                      style={{ ...S.cellBase, ...S.cellHeader }}
                    >
                      {c}
                    </div>
                  ))}
                  {Array.from({ length: gridSize }, (_, i) => i + 1).map((r) => (
                    <Fragment key={`row-${r}`}>
                      <div
                        className="mtp-cell header"
                        style={{ ...S.cellBase, ...S.cellHeader }}
                      >
                        {r}
                      </div>
                      {Array.from({ length: gridSize }, (_, j) => j + 1).map((c) => {
                        const key = `${r},${c}`;
                        const cellStyle = { ...S.cellBase };
                        if (r === c) Object.assign(cellStyle, S.cellDiagonal);
                        return (
                          <div
                            key={key}
                            ref={(el) => { cellRefs.current[key] = el; }}
                            className={getCellClass(r, c)}
                            style={cellStyle}
                            onClick={() => handleCellClick(r, c)}
                          >
                            {r * c}
                          </div>
                        );
                      })}
                    </Fragment>
                  ))}
                </div>
              </div>

              {/* Row list (only in row mode, when inputs valid) */}
              {mode === 'row' && rowData && multiplicand !== null && (
                <div style={S.rowList}>
                  <h3 style={S.rowListTitle}>
                    {multiplicand} times table
                    {totalPages > 1 && (
                      <span style={{ fontSize: '14px', fontWeight: 500, color: C.textMuted, marginLeft: '12px' }}>
                        showing {startIndex + 1}&ndash;{Math.min(startIndex + ROW_PAGE_SIZE, rowData.length)} of {rowData.length}
                      </span>
                    )}
                  </h3>
                  <ul style={S.rowListItems}>
                    {currentPageData.map((item) => (
                      <li key={item.multiplier} style={S.rowListItem}>
                        {multiplicand} &times; {item.multiplier} = {item.product.toLocaleString()}
                      </li>
                    ))}
                  </ul>
                  {totalPages > 1 && (
                    <div style={S.pagination}>
                      <button
                        type="button"
                        className="mtp-pagination-btn"
                        style={{
                          ...S.paginationBtnBase,
                          ...(currentRowPage === 1 ? S.paginationBtnDisabled : {}),
                        }}
                        onClick={() => setCurrentRowPage(1)}
                        disabled={currentRowPage === 1}
                      >
                        First
                      </button>
                      <button
                        type="button"
                        className="mtp-pagination-btn"
                        style={{
                          ...S.paginationBtnBase,
                          ...(currentRowPage === 1 ? S.paginationBtnDisabled : {}),
                        }}
                        onClick={() => setCurrentRowPage((p) => Math.max(1, p - 1))}
                        disabled={currentRowPage === 1}
                      >
                        &larr; Prev
                      </button>
                      <span style={S.pageInfo}>
                        Page {currentRowPage} of {totalPages}
                      </span>
                      <button
                        type="button"
                        className="mtp-pagination-btn"
                        style={{
                          ...S.paginationBtnBase,
                          ...(currentRowPage === totalPages ? S.paginationBtnDisabled : {}),
                        }}
                        onClick={() => setCurrentRowPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentRowPage === totalPages}
                      >
                        Next &rarr;
                      </button>
                      <button
                        type="button"
                        className="mtp-pagination-btn"
                        style={{
                          ...S.paginationBtnBase,
                          ...(currentRowPage === totalPages ? S.paginationBtnDisabled : {}),
                        }}
                        onClick={() => setCurrentRowPage(totalPages)}
                        disabled={currentRowPage === totalPages}
                      >
                        Last
                      </button>
                    </div>
                  )}
                </div>
              )}

              {detailsContent && (
                <div id="mtp-cell-details" className="mtp-cell-details" style={S.cellDetails}>
                  <button
                    type="button"
                    className="mtp-close-details"
                    style={S.closeDetails}
                    onClick={() => setDetailsCell(null)}
                  >
                    &times;
                  </button>
                  <h3 style={S.detailsH3}>
                    {detailsContent.r} &times; {detailsContent.c} = {detailsContent.p.toLocaleString()}
                  </h3>
                  <div style={S.detailGrid}>
                    <div style={S.detailItem}>
                      <div style={S.detailLabel}>Factors</div>
                      <div style={S.detailValue}>{detailsContent.r}, {detailsContent.c}</div>
                    </div>
                    <div style={S.detailItem}>
                      <div style={S.detailLabel}>Product</div>
                      <div style={S.detailValue}>{detailsContent.p.toLocaleString()}</div>
                    </div>
                    <div style={S.detailItem}>
                      <div style={S.detailLabel}>Commutative partner</div>
                      <div style={S.detailValue}>
                        {detailsContent.c} &times; {detailsContent.r} = {detailsContent.p.toLocaleString()}
                      </div>
                    </div>
                    <div style={S.detailItem}>
                      <div style={S.detailLabel}>All factor pairs of {detailsContent.p}</div>
                      <div style={S.detailValue}>
                        {detailsContent.pairs.map(([a, b]) => `${a}\u00D7${b}`).join(', ')}
                      </div>
                    </div>
                    {detailsContent.props.length > 0 && (
                      <div style={{ ...S.detailItem, gridColumn: '1 / -1' }}>
                        <div style={S.detailLabel}>Properties</div>
                        <div style={S.propertyBadges}>
                          {detailsContent.props.map((p, i) => (
                            <span key={i} style={S.badge}>{p}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </section>

            {/* PATTERNS */}
            <section
              id="sec-patterns"
              ref={(el) => { sectionRefs.current['sec-patterns'] = el; }}
            >
              <h2 style={S.sectionH}>Patterns to explore</h2>
              <p style={S.sectionSub}>Click a card to highlight every matching cell in the grid above.</p>
              <div style={S.filterGrid}>
                {FILTER_DEFS.map((f) => {
                  const isActive = activeFilter === f.id;
                  return (
                    <div
                      key={f.id}
                      className={`mtp-filter-card ${isActive ? 'active' : ''}`}
                      style={S.filterCard}
                      onClick={() => toggleFilter(f.id)}
                    >
                      <div className="mtp-filter-icon" style={S.filterIcon}>{f.icon}</div>
                      <h3 style={S.filterCardH3}>{f.title}</h3>
                      <p style={S.filterCardP}>{f.desc}</p>
                      <div style={S.filterCardFooter}>
                        <span className="mtp-filter-count" style={S.filterCount}>
                          {filterCounts[f.id]} match{filterCounts[f.id] === 1 ? '' : 'es'}
                        </span>
                        <span className="mtp-filter-action" style={S.filterAction}>
                          Click to highlight
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* PROPERTIES */}
            <section
              id="sec-properties"
              ref={(el) => { sectionRefs.current['sec-properties'] = el; }}
              style={S.propertiesSection}
            >
              <h2 style={S.sectionH}>Properties of multiplication</h2>
              <p style={S.sectionSub}>Why the grid looks the way it does.</p>
              <div style={S.propertyGrid}>
                {PROPERTY_CARDS.map((card, i) => (
                  <div key={i} style={S.propertyCard}>
                    <div style={S.propertyCardIcon}>{card.icon}</div>
                    <h4 style={S.propertyCardH4}>{card.title}</h4>
                    <p
                      style={S.propertyCardP}
                      dangerouslySetInnerHTML={{ __html: card.body }}
                    />
                    {card.code && (
                      <code
                        style={S.propertyCardCode}
                        dangerouslySetInnerHTML={{ __html: card.code }}
                      />
                    )}
                    {card.hasMirror && <MirrorGrid />}
                  </div>
                ))}
              </div>
            </section>

            {/* QUIZ */}
            <section
              id="sec-quiz"
              ref={(el) => { sectionRefs.current['sec-quiz'] = el; }}
              style={S.quizSection}
            >
              <QuizWidget
                generator={generateMultiplicationQuestion}
                title="Test yourself"
                subtitle="Three question types, rotated at random."
                allowReset={true}
                historyLimit={30}
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiplicationTablesPage;