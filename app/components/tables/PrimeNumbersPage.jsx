import { useState, useEffect, useRef } from 'react';
import QuizWidget from '../examples/quiz/QuizWidget'
import generatePrimeQuestion from '../examples/quiz/questions/primeQuestions';

// =========================================================
//   PrimeNumbersPage
//   Main page component for /tables/arithmetics/prime-numbers.
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
const isPalindromeStr = (n) => {
  const s = String(n);
  return s.length > 1 && s === [...s].reverse().join('');
};
const smallestDivisor = (n) => {
  if (n < 2) return null;
  if (n % 2 === 0) return 2;
  for (let i = 3; i * i <= n; i += 2) if (n % i === 0) return i;
  return n;
};
const findSumOfTwoSquares = (p) => {
  if (p === 2) return { a: 1, b: 1 };
  if (p % 4 !== 1) return null;
  for (let a = 1; 2 * a * a <= p; a++) {
    const bsq = p - a * a;
    const b = Math.round(Math.sqrt(bsq));
    if (b * b === bsq && b >= a) return { a, b };
  }
  return null;
};

const TABLE_MAX = 1000;

// ---------- Precomputed: primes ----------
const PRIMES_EXT = (() => {
  const out = [];
  for (let n = 2; n <= 2010; n++) if (isPrime(n)) out.push(n);
  return out;
})();
const PRIME_SET = new Set(PRIMES_EXT);
const PRIMES = PRIMES_EXT
  .filter((p) => p <= TABLE_MAX)
  .map((value, idx) => ({ value, index: idx + 1, lastDigit: value % 10 }));

// Known Mersenne prime exponents under 1000
const MERSENNE_EXPONENTS = new Set([
  2, 3, 5, 7, 13, 17, 19, 31, 61, 89, 107, 127, 521, 607,
]);

// ---------- Precomputed: filter sets ----------
const FILTER_SETS = (() => {
  const sets = {
    twin:          new Set(),
    sophieGermain: new Set(),
    palindromic:   new Set(),
    fourKplus1:    new Set(),
    mersenneExp:   new Set(),
  };
  for (const { value: p } of PRIMES) {
    if (PRIME_SET.has(p + 2) || PRIME_SET.has(p - 2)) sets.twin.add(p);
    if (PRIME_SET.has(2 * p + 1)) sets.sophieGermain.add(p);
    if (isPalindromeStr(p)) sets.palindromic.add(p);
    if (p % 4 === 1) sets.fourKplus1.add(p);
    if (MERSENNE_EXPONENTS.has(p)) sets.mersenneExp.add(p);
  }
  return sets;
})();

const FILTER_DEFS = [
  { id: 'twin', icon: '\u2261', title: 'Twin primes',
    desc: 'Primes p where p+2 or p\u22122 is also prime \u2014 pairs like (3,5), (11,13), (17,19), (29,31).' },
  { id: 'sophieGermain', icon: '2p+1', title: 'Sophie Germain primes',
    desc: 'Primes p where 2p+1 is also prime. Key in number theory and cryptography.' },
  { id: 'palindromic', icon: '\u2194', title: 'Palindromic primes',
    desc: 'Primes that read the same forwards and backwards (excluding single digits).' },
  { id: 'fourKplus1', icon: '4k+1', title: 'Primes \u2261 1 (mod 4)',
    desc: 'Primes of the form 4k+1. By Fermat\u2019s theorem, exactly these are expressible as a sum of two squares.' },
  { id: 'mersenneExp', icon: '2\u1D56\u22121', title: 'Mersenne exponents',
    desc: 'Primes p where 2\u1D56 \u2212 1 is also prime \u2014 the exponents of Mersenne primes.' },
];

const PROPERTY_CARDS = [
  {
    icon: '\u221E',
    title: 'Infinitely many primes',
    body: 'Euclid\u2019s proof: suppose only finitely many primes p\u2081, p\u2082, \u2026, p\u2099. Then N = p\u2081 p\u2082 \u22EF p\u2099 + 1 isn\u2019t divisible by any of them, so either N is prime or has a new prime divisor. Either way, a contradiction.',
  },
  {
    icon: '\u03C0',
    title: 'Prime counting function',
    body: '\u03C0(n), the count of primes \u2264 n, grows like n/ln(n). The 25 highlighted cells below are the primes under 100 \u2014 25% density that thins out as n grows.',
    code: '\u03C0(100)=25, \u03C0(1000)=168, \u03C0(10000)=1229',
    hasSieve: true,
  },
  {
    icon: 'd',
    title: 'Last-digit rule',
    body: 'Every prime greater than 5 ends in 1, 3, 7, or 9. Numbers ending in 0, 2, 4, 5, 6, or 8 are composite (with 2 and 5 themselves as the only exceptions).',
    code: '127, 131, 137, 139 \u2014 four consecutive valid endings',
  },
  {
    icon: '\u2A0D',
    title: 'Sum of two squares',
    body: 'A prime p &gt; 2 can be written as a\u00B2 + b\u00B2 for positive integers a, b iff p \u2261 1 (mod 4). Fermat\u2019s theorem on sums of two squares.',
    code: '5 = 1\u00B2 + 2\u00B2  \u00B7  13 = 2\u00B2 + 3\u00B2  \u00B7  29 = 2\u00B2 + 5\u00B2',
  },
];

const TOC_ITEMS = [
  { id: 'sec-tool',       label: 'Prime tool' },
  { id: 'sec-table',      label: 'The table' },
  { id: 'sec-patterns',   label: 'Patterns & filters' },
  { id: 'sec-properties', label: 'Properties' },
  { id: 'sec-quiz',       label: 'Test yourself' },
];

const LD_PILLS = [
  { kind: 'two',   bg: '#fef3c7', fg: '#92400e', label: '2 (only even prime)' },
  { kind: 'five',  bg: '#fce7f3', fg: '#9d174d', label: '5 (only prime in 5)' },
  { kind: 'one',   bg: '#dbeafe', fg: '#1e40af', label: 'ends in 1' },
  { kind: 'three', bg: '#d1fae5', fg: '#065f46', label: 'ends in 3' },
  { kind: 'seven', bg: '#ffe4e6', fg: '#9f1239', label: 'ends in 7' },
  { kind: 'nine',  bg: '#ede9fe', fg: '#5b21b6', label: 'ends in 9' },
];

const getCellBg = (value, lastDigit) => {
  if (value === 2) return '#fef3c7';
  if (value === 5) return '#fce7f3';
  if (lastDigit === 1) return '#eff6ff';
  if (lastDigit === 3) return '#ecfdf5';
  if (lastDigit === 7) return '#fff1f2';
  if (lastDigit === 9) return '#f5f3ff';
  return 'white';
};

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
    display: 'flex', gap: '10px', marginBottom: '8px',
    position: 'relative', zIndex: 1,
    alignItems: 'center', flexWrap: 'wrap',
  },
  inputField: {
    flex: 1, minWidth: '140px', padding: '13px 18px',
    border: `2px solid ${C.border}`, borderRadius: '11px',
    fontSize: '15px', outline: 'none', background: 'white',
    transition: 'border-color 0.15s, box-shadow 0.15s',
    fontFamily: 'inherit', color: C.text,
  },
  inputBtn: {
    padding: '13px 26px', background: C.primary, color: 'white',
    border: 'none', borderRadius: '11px',
    fontWeight: 600, fontSize: '15px', cursor: 'pointer',
    transition: 'background 0.15s, transform 0.1s',
    fontFamily: 'inherit', whiteSpace: 'nowrap',
  },
  rangeSep: { color: C.textMuted, fontWeight: 600, fontSize: '14px', padding: '0 2px' },
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
  },
  legendTitle: {
    fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px',
    color: C.textMuted, fontWeight: 700, marginBottom: '12px',
  },
  legendRow: { display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' },
  legendPillBase: { padding: '6px 13px', borderRadius: '9999px', fontSize: '13px', fontWeight: 600 },
  legendNote: { fontSize: '14px', color: C.textMuted, margin: 0 },
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
  primesGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)',
    gap: '6px', marginBottom: '36px',
  },
  cell: {
    padding: '8px 4px',
    border: `1px solid ${C.borderSoft}`, borderRadius: '6px',
    fontSize: '13px', textAlign: 'center', cursor: 'pointer',
    fontWeight: 600,
    position: 'relative',
    transition: 'transform 0.15s, box-shadow 0.15s, border-color 0.15s, opacity 0.2s',
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
  sieveGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)',
    gap: '2px',
    marginTop: '10px',
    background: C.bg,
    padding: '6px',
    borderRadius: '8px',
    maxWidth: '240px',
  },
  sieveCellBase: {
    aspectRatio: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '9px',
    fontWeight: 600,
    borderRadius: '3px',
    color: C.textMuted,
    background: 'white',
  },
  sieveCellPrime: { background: C.primary, color: 'white' },
  sieveCellOne:   { background: '#f1f5f9', color: C.textMuted },
  quizSection: { marginTop: '56px' },
};

// ---------- CSS (pseudo-classes, hover, media queries) ----------
const CSS = `
.pnp-toc-link:hover {
  color: ${C.primary};
}
.pnp-related-mini:hover {
  border-color: ${C.primary} !important;
  transform: translateX(2px);
  box-shadow: ${C.shadowSm};
}
.pnp-input-field:focus {
  border-color: ${C.primary} !important;
  box-shadow: 0 0 0 4px rgba(79,70,229,0.12);
}
.pnp-input-btn:hover { background: ${C.primaryDark} !important; }
.pnp-input-btn:active { transform: translateY(1px); }
.pnp-mode-tab:not(.active):hover { color: ${C.primary} !important; }
.pnp-cell:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(15,23,42,0.10);
  border-color: ${C.primary};
  z-index: 5;
}
.pnp-cell::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: #1e1b4b;
  color: white;
  padding: 7px 12px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s;
  z-index: 20;
  font-weight: 500;
}
.pnp-cell:hover::after { opacity: 1; }
.pnp-cell.highlight {
  border: 2px solid ${C.warn} !important;
  box-shadow: 0 0 0 3px rgba(245,158,11,0.35), 0 6px 16px rgba(245,158,11,0.25);
  transform: scale(1.08);
  z-index: 4;
}
.pnp-cell.filter-match {
  border: 2px solid ${C.warn} !important;
  box-shadow: 0 4px 14px rgba(245,158,11,0.35);
  transform: scale(1.05);
  z-index: 3;
}
.pnp-cell.filter-dim { opacity: 0.28; }
.pnp-filter-card:hover {
  transform: translateY(-3px);
  box-shadow: ${C.shadowMd};
  border-color: ${C.border} !important;
}
.pnp-filter-card.active {
  border-color: ${C.warn} !important;
  background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%) !important;
  box-shadow: 0 0 0 4px rgba(245,158,11,0.18), ${C.shadowMd};
}
.pnp-filter-card.active::after {
  content: '\u25CF Active';
  position: absolute;
  top: 12px;
  right: 14px;
  font-size: 11px;
  font-weight: 700;
  color: ${C.warnText};
  letter-spacing: 0.5px;
}
.pnp-filter-card.active .pnp-filter-icon {
  background: linear-gradient(135deg, ${C.warn} 0%, #fb923c 100%) !important;
  box-shadow: 0 4px 10px rgba(245,158,11,0.3) !important;
}
.pnp-filter-card.active .pnp-filter-count,
.pnp-filter-card.active .pnp-filter-action {
  color: ${C.warnText} !important;
}
.pnp-sidebar-sticky::-webkit-scrollbar { width: 4px; }
.pnp-sidebar-sticky::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 4px; }
.pnp-close-details:hover { background: #e5e7eb !important; color: ${C.text} !important; }
@keyframes pnpSlideIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}
.pnp-cell-details { animation: pnpSlideIn 0.25s ease; }

/* Hide the absolute sidebar when the viewport is too narrow to fit it */
@media (max-width: 1320px) {
  .pnp-sidebar { display: none !important; }
}
@media (max-width: 900px) {
  .pnp-primes-grid { grid-template-columns: repeat(7, 1fr) !important; }
}
@media (max-width: 640px) {
  .pnp-primes-grid { grid-template-columns: repeat(5, 1fr) !important; }
  .pnp-input-block { flex-direction: column !important; align-items: stretch !important; }
  .pnp-input-block input { width: 100% !important; }
  .pnp-input-block button { width: 100% !important; }
  .pnp-range-sep { text-align: center; }
  .pnp-mode-tab { padding: 9px 14px !important; font-size: 13px !important; }
}
`;

// ---------- Sieve (10x10 of 1-100 with primes highlighted) ----------
const Sieve = () => {
  const cells = [];
  for (let n = 1; n <= 100; n++) {
    const style = { ...S.sieveCellBase };
    if (n === 1) Object.assign(style, S.sieveCellOne);
    else if (isPrime(n)) Object.assign(style, S.sieveCellPrime);
    cells.push(<div key={n} style={style}>{n}</div>);
  }
  return <div style={S.sieveGrid}>{cells}</div>;
};

// ---------- Component ----------
const PrimeNumbersPage = ({ relatedReferences = [] }) => {
  // Tool state
  const [mode, setMode] = useState('isPrime');
  const [isPrimeInput, setIsPrimeInput] = useState('');
  const [nextInput, setNextInput] = useState('');
  const [rangeFromInput, setRangeFromInput] = useState('');
  const [rangeToInput, setRangeToInput] = useState('');

  const [statusKind, setStatusKind] = useState(null);
  const [statusIcon, setStatusIcon] = useState('');
  const [statusHtml, setStatusHtml] = useState('');

  // Table state
  const [detailsValue, setDetailsValue] = useState(null);
  const [highlighted, setHighlighted] = useState(() => new Set());
  const [activeFilter, setActiveFilter] = useState(null);

  // TOC + scroll plumbing
  const [activeSection, setActiveSection] = useState('sec-tool');
  const [pendingScroll, setPendingScroll] = useState(null);

  const cellRefs = useRef({});
  const sectionRefs = useRef({});

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
    setDetailsValue(null);
  };

  // ===== Scroll resolver =====
  useEffect(() => {
    if (!pendingScroll) return;
    let el = null;
    if (pendingScroll.type === 'cell') {
      el = cellRefs.current[pendingScroll.value];
    } else if (pendingScroll.type === 'table') {
      el = sectionRefs.current['sec-table'];
    } else if (pendingScroll.type === 'details') {
      el = document.getElementById('pnp-cell-details');
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
  };

  // ===== Tool: Mode 1 (Is N prime?) =====
  const runIsPrime = () => {
    const n = parseInt(isPrimeInput, 10);
    if (isNaN(n) || n < 1) {
      setStatus('error', '!', 'Please enter a positive integer.');
      return;
    }
    setActiveFilter(null);
    setDetailsValue(null);

    if (n === 1) {
      setHighlighted(new Set());
      setStatus('info', '!',
        `<strong>1</strong> is not prime by convention (it has only one divisor, itself).`);
      return;
    }

    if (isPrime(n)) {
      if (n <= TABLE_MAX) {
        setHighlighted(new Set([n]));
        setDetailsValue(n);
        setPendingScroll({ type: 'cell', value: n });
        setStatus('success', '\u2713',
          `<strong>${n.toLocaleString()}</strong> is prime. Cell highlighted and details opened below.`);
      } else {
        setHighlighted(new Set());
        setStatus('success', '\u2713',
          `<strong>${n.toLocaleString()}</strong> is prime, but outside this 1&ndash;${TABLE_MAX} table.`);
      }
    } else {
      const div = smallestDivisor(n);
      const quotient = n / div;
      // Find nearest primes (lower and upper) and highlight if in table
      let lower = n - 1;
      while (lower >= 2 && !isPrime(lower)) lower--;
      let upper = n + 1;
      while (!isPrime(upper)) upper++;
      const lowerIn = lower >= 2 && lower <= TABLE_MAX;
      const upperIn = upper <= TABLE_MAX;
      const newSet = new Set();
      if (lowerIn) newSet.add(lower);
      if (upperIn) newSet.add(upper);
      setHighlighted(newSet);
      if (lowerIn)      setPendingScroll({ type: 'cell', value: lower });
      else if (upperIn) setPendingScroll({ type: 'cell', value: upper });

      let msg = `<strong>${n.toLocaleString()}</strong> is not prime &mdash; ${n.toLocaleString()} = ${div} &times; ${quotient.toLocaleString()}. `;
      if (lowerIn && upperIn) {
        msg += `Nearest primes: <strong>${lower}</strong> and <strong>${upper}</strong>. Both highlighted below.`;
      } else if (lowerIn) {
        msg += `Nearest prime in table: <strong>${lower}</strong> (highlighted). ${upper} is outside the table.`;
      } else if (upperIn) {
        msg += `Nearest prime in table: <strong>${upper}</strong> (highlighted). ${lower} is outside the table.`;
      } else {
        msg += `Nearest primes (${lower} and ${upper}) are outside this table.`;
      }
      setStatus('error', '\u2717', msg);
    }
  };

  // ===== Tool: Mode 2 (Next prime after N) =====
  const runNextPrime = () => {
    const n = parseInt(nextInput, 10);
    if (isNaN(n) || n < 0) {
      setStatus('error', '!', 'Please enter a non-negative integer.');
      return;
    }
    setActiveFilter(null);
    setDetailsValue(null);

    let next = n + 1;
    while (!isPrime(next)) next++;
    const gap = next - n;

    if (next <= TABLE_MAX) {
      setHighlighted(new Set([next]));
      setDetailsValue(next);
      setPendingScroll({ type: 'cell', value: next });
      setStatus('success', '\u2192',
        `The smallest prime greater than <strong>${n.toLocaleString()}</strong> is <strong>${next}</strong> (gap +${gap}). Cell highlighted below.`);
    } else {
      setHighlighted(new Set());
      setStatus('success', '\u2192',
        `The smallest prime greater than <strong>${n.toLocaleString()}</strong> is <strong>${next.toLocaleString()}</strong> (gap +${gap}). Outside this 1&ndash;${TABLE_MAX} table.`);
    }
  };

  // ===== Tool: Mode 3 (Primes in range) =====
  const runRange = () => {
    let from = parseInt(rangeFromInput, 10);
    let to = parseInt(rangeToInput, 10);
    if (isNaN(from) || isNaN(to) || from < 0 || to < 0) {
      setStatus('error', '!', 'Please enter two non-negative integers.');
      return;
    }
    if (from > to) [from, to] = [to, from];
    setActiveFilter(null);
    setDetailsValue(null);

    const inTable = [];
    const all = [];
    for (let p of PRIMES_EXT) {
      if (p >= from && p <= to) {
        all.push(p);
        if (p <= TABLE_MAX) inTable.push(p);
      }
    }
    setHighlighted(new Set(inTable));

    if (inTable.length > 0) {
      setPendingScroll({ type: 'table' });
    }

    if (all.length === 0) {
      setStatus('info', '\u2211',
        `No primes between <strong>${from.toLocaleString()}</strong> and <strong>${to.toLocaleString()}</strong>.`);
    } else if (inTable.length === 0) {
      setStatus('info', '\u2211',
        `<strong>${all.length}</strong> prime${all.length === 1 ? '' : 's'} between <strong>${from.toLocaleString()}</strong> and <strong>${to.toLocaleString()}</strong>, but none in this 1&ndash;${TABLE_MAX} table.`);
    } else {
      const outside = all.length - inTable.length;
      let msg = `<strong>${inTable.length}</strong> prime${inTable.length === 1 ? '' : 's'} highlighted in the table below`;
      if (outside > 0) msg += ` (${outside} more fall outside the 1&ndash;${TABLE_MAX} range)`;
      msg += '.';
      setStatus('success', '\u2211', msg);
    }
  };

  // ===== Filter cards =====
  const toggleFilter = (id) => {
    setHighlighted(new Set());
    setDetailsValue(null);
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
  };

  // ===== Cell interaction =====
  const handleCellClick = (value) => {
    setDetailsValue(value);
    setPendingScroll({ type: 'details' });
  };

  // ===== Derived =====
  const getCellClass = (value) => {
    let cls = 'pnp-cell';
    if (highlighted.has(value)) cls += ' highlight';
    if (activeFilter) {
      if (FILTER_SETS[activeFilter].has(value)) cls += ' filter-match';
      else cls += ' filter-dim';
    }
    return cls;
  };
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

  let bannerText = '';
  if (activeFilter) {
    const def = FILTER_DEFS.find((f) => f.id === activeFilter);
    const count = FILTER_SETS[activeFilter].size;
    bannerText = `Filtering: ${def.title} \u2014 ${count} match${count === 1 ? '' : 'es'} highlighted`;
  } else if (highlighted.size > 0) {
    bannerText = `${highlighted.size} prime${highlighted.size === 1 ? '' : 's'} highlighted by tool`;
  }
  const showBanner = activeFilter !== null || highlighted.size > 0;

  const detailsContent = (() => {
    if (detailsValue === null) return null;
    const p = detailsValue;
    if (!isPrime(p)) return null;
    const meta = PRIMES.find(x => x.value === p);
    const index = meta ? meta.index : null;

    // Next/prev prime
    let nextP = p + 1;
    while (!isPrime(nextP)) nextP++;
    let prevP = p - 1;
    while (prevP >= 2 && !isPrime(prevP)) prevP--;
    const hasPrev = prevP >= 2;

    const twoSquares = findSumOfTwoSquares(p);

    const props = [];
    if (FILTER_SETS.twin.has(p))          props.push('Twin prime');
    if (FILTER_SETS.sophieGermain.has(p)) props.push('Sophie Germain');
    if (FILTER_SETS.palindromic.has(p))   props.push('Palindromic');
    if (FILTER_SETS.fourKplus1.has(p))    props.push('4k+1');
    if (FILTER_SETS.mersenneExp.has(p))   props.push('Mersenne exponent');

    return { p, index, nextP, prevP, hasPrev, twoSquares, props };
  })();

  const statusIconBg = {
    success: C.success,
    error:   C.error,
    info:    C.primary,
  }[statusKind] || C.primary;

  const modeTabs = [
    { id: 'isPrime', label: 'Is N prime?' },
    { id: 'next',    label: 'Next prime after N' },
    { id: 'range',   label: 'Range' },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div style={S.container}>
        <div className="pnp-layout" style={S.pageLayout}>

          {/* ===== SIDEBAR ===== */}
          <aside className="pnp-sidebar" style={S.sidebar}>
            <div className="pnp-sidebar-sticky" style={S.sidebarSticky}>
              <div style={S.sidebarBlock}>
                <div style={S.sidebarLabel}>On this page</div>
                <ul style={S.tocList}>
                  {TOC_ITEMS.map((item, idx) => (
                    <li key={item.id}>
                      <a
                        className={`pnp-toc-link ${activeSection === item.id ? 'active' : ''}`}
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
                      className="pnp-related-mini"
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
                <h2 style={S.toolH2}>Prime Number Tool</h2>
                <p style={S.toolSub}>Every answer takes you to the table. Pick a question:</p>
              </div>

              <div style={S.modeTabsWrap} role="tablist">
                {modeTabs.map((tab) => {
                  const isActive = mode === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      className={`pnp-mode-tab ${isActive ? 'active' : ''}`}
                      style={{ ...S.modeTabBase, ...(isActive ? S.modeTabActive : {}) }}
                      onClick={() => handleModeChange(tab.id)}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {mode === 'isPrime' && (
                <div className="pnp-input-block" style={S.inputBlock}>
                  <input
                    type="number"
                    className="pnp-input-field"
                    style={S.inputField}
                    placeholder="Enter a number to test (e.g., 91)"
                    min="1"
                    value={isPrimeInput}
                    onChange={(e) => setIsPrimeInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') runIsPrime(); }}
                  />
                  <button
                    type="button"
                    className="pnp-input-btn"
                    style={S.inputBtn}
                    onClick={runIsPrime}
                  >
                    Test
                  </button>
                </div>
              )}

              {mode === 'next' && (
                <div className="pnp-input-block" style={S.inputBlock}>
                  <input
                    type="number"
                    className="pnp-input-field"
                    style={S.inputField}
                    placeholder="Enter a number (e.g., 100)"
                    min="0"
                    value={nextInput}
                    onChange={(e) => setNextInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') runNextPrime(); }}
                  />
                  <button
                    type="button"
                    className="pnp-input-btn"
                    style={S.inputBtn}
                    onClick={runNextPrime}
                  >
                    Find next
                  </button>
                </div>
              )}

              {mode === 'range' && (
                <div className="pnp-input-block" style={S.inputBlock}>
                  <input
                    type="number"
                    className="pnp-input-field"
                    style={S.inputField}
                    placeholder="From..."
                    min="0"
                    value={rangeFromInput}
                    onChange={(e) => setRangeFromInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') runRange(); }}
                  />
                  <span className="pnp-range-sep" style={S.rangeSep}>to</span>
                  <input
                    type="number"
                    className="pnp-input-field"
                    style={S.inputField}
                    placeholder="To..."
                    min="0"
                    value={rangeToInput}
                    onChange={(e) => setRangeToInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') runRange(); }}
                  />
                  <button
                    type="button"
                    className="pnp-input-btn"
                    style={S.inputBtn}
                    onClick={runRange}
                  >
                    Find
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

            {/* TABLE */}
            <section
              id="sec-table"
              ref={(el) => { sectionRefs.current['sec-table'] = el; }}
            >
              <div style={S.legend}>
                <div style={S.legendTitle}>Last-digit color guide</div>
                <div style={S.legendRow}>
                  {LD_PILLS.map((p) => (
                    <span
                      key={p.kind}
                      style={{ ...S.legendPillBase, background: p.bg, color: p.fg }}
                    >
                      {p.label}
                    </span>
                  ))}
                </div>
                <p style={S.legendNote}>
                  Every prime greater than 5 ends in 1, 3, 7, or 9. The primes 2 and 5 are the only exceptions &mdash; the only ones ending in their respective digits. Showing all {PRIMES.length} primes up to {TABLE_MAX}.
                </p>
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

              <div className="pnp-primes-grid" style={S.primesGrid}>
                {PRIMES.map((prime) => {
                  let nextP = prime.value + 1;
                  while (!isPrime(nextP)) nextP++;
                  const gap = nextP - prime.value;
                  const tooltip = `#${prime.index} \u00B7 next: ${nextP} (gap +${gap})`;
                  return (
                    <div
                      key={prime.value}
                      ref={(el) => { cellRefs.current[prime.value] = el; }}
                      className={getCellClass(prime.value)}
                      style={{
                        ...S.cell,
                        background: getCellBg(prime.value, prime.lastDigit),
                      }}
                      data-tooltip={tooltip}
                      onClick={() => handleCellClick(prime.value)}
                    >
                      {prime.value}
                    </div>
                  );
                })}
              </div>

              {detailsContent && (
                <div id="pnp-cell-details" className="pnp-cell-details" style={S.cellDetails}>
                  <button
                    type="button"
                    className="pnp-close-details"
                    style={S.closeDetails}
                    onClick={() => setDetailsValue(null)}
                  >
                    &times;
                  </button>
                  <h3 style={S.detailsH3}>
                    {detailsContent.p} <span style={{ color: C.textMuted, fontSize: '20px', fontWeight: 500 }}>
                      &mdash; the {detailsContent.index}{ordinalSuffix(detailsContent.index)} prime
                    </span>
                  </h3>
                  <div style={S.detailGrid}>
                    <div style={S.detailItem}>
                      <div style={S.detailLabel}>Last digit</div>
                      <div style={S.detailValue}>{detailsContent.p % 10}</div>
                    </div>
                    <div style={S.detailItem}>
                      <div style={S.detailLabel}>Mod 6</div>
                      <div style={S.detailValue}>{detailsContent.p % 6}</div>
                    </div>
                    <div style={S.detailItem}>
                      <div style={S.detailLabel}>Next prime</div>
                      <div style={S.detailValue}>
                        {detailsContent.nextP}{' '}
                        <span style={{ color: C.textMuted, fontSize: '13px', fontWeight: 500 }}>
                          (+{detailsContent.nextP - detailsContent.p})
                        </span>
                      </div>
                    </div>
                    {detailsContent.hasPrev && (
                      <div style={S.detailItem}>
                        <div style={S.detailLabel}>Previous prime</div>
                        <div style={S.detailValue}>
                          {detailsContent.prevP}{' '}
                          <span style={{ color: C.textMuted, fontSize: '13px', fontWeight: 500 }}>
                            (\u2212{detailsContent.p - detailsContent.prevP})
                          </span>
                        </div>
                      </div>
                    )}
                    {detailsContent.twoSquares && (
                      <div style={S.detailItem}>
                        <div style={S.detailLabel}>Sum of two squares</div>
                        <div style={S.detailValue}>
                          {detailsContent.twoSquares.a}<sup>2</sup> + {detailsContent.twoSquares.b}<sup>2</sup>
                        </div>
                      </div>
                    )}
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
              <p style={S.sectionSub}>Click a card to highlight every matching prime in the table above.</p>
              <div style={S.filterGrid}>
                {FILTER_DEFS.map((f) => {
                  const isActive = activeFilter === f.id;
                  return (
                    <div
                      key={f.id}
                      className={`pnp-filter-card ${isActive ? 'active' : ''}`}
                      style={S.filterCard}
                      onClick={() => toggleFilter(f.id)}
                    >
                      <div className="pnp-filter-icon" style={S.filterIcon}>{f.icon}</div>
                      <h3 style={S.filterCardH3}>{f.title}</h3>
                      <p style={S.filterCardP}>{f.desc}</p>
                      <div style={S.filterCardFooter}>
                        <span className="pnp-filter-count" style={S.filterCount}>{FILTER_SETS[f.id].size} in table</span>
                        <span className="pnp-filter-action" style={S.filterAction}>Click to highlight</span>
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
              <h2 style={S.sectionH}>Properties of primes</h2>
              <p style={S.sectionSub}>Foundational facts that govern the distribution of prime numbers.</p>
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
                    {card.hasSieve && <Sieve />}
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
                generator={generatePrimeQuestion}
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

// Tiny helper for "1st / 2nd / 3rd / nth" in details
function ordinalSuffix(n) {
  if (n === null || n === undefined) return '';
  const j = n % 10, k = n % 100;
  if (j === 1 && k !== 11) return 'st';
  if (j === 2 && k !== 12) return 'nd';
  if (j === 3 && k !== 13) return 'rd';
  return 'th';
}

export default PrimeNumbersPage;