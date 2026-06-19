// import { useState, useEffect, useRef } from 'react';
// import QuizWidget from '../examples/quiz/QuizWidget'
// import generatePerfectCubeQuestion from '../examples/quiz/questions/perfectCubesQuestions';

// // =========================================================
// //   PerfectCubesPage
// //   Main page component for /tables/arithmetics/perfect-cubes.
// //   Props:
// //     relatedReferences  array  [{ title, sub, href }] — sidebar links
// // =========================================================

// // ---------- Theme: brilliant blue ----------
// const C = {
//   primary:      '#2563eb',
//   primaryDark:  '#1e40af',
//   primaryLight: '#dbeafe',
//   bg:           '#f8fbff',
//   border:       '#bfdbfe',
//   borderSoft:   '#e0ecfd',
//   text:         '#172554',
//   textMuted:    '#64748b',
//   success:      '#10b981',
//   successBg:    '#d1fae5',
//   error:        '#ef4444',
//   errorBg:      '#fee2e2',
//   warn:         '#f59e0b',
//   warnBg:       '#fef3c7',
//   warnText:     '#92400e',
//   shadowSm:     '0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)',
//   shadowMd:     '0 4px 12px rgba(15,23,42,0.08)',
//   shadowLg:     '0 8px 24px rgba(15,23,42,0.10)',
// };

// // Cell background by ROOT's last digit (root % 10).
// // Fixed digits (0,1,4,5,6,9) → blue; swap 2↔8 → amber; swap 3↔7 → pink.
// const LD_BG = {
//   0: '#eff6ff', 1: '#eff6ff', 4: '#eff6ff',
//   5: '#eff6ff', 6: '#eff6ff', 9: '#eff6ff',
//   2: '#fef3c7', 8: '#fef3c7',
//   3: '#fce7f3', 7: '#fce7f3',
// };

// const DOT_COLORS = ['#1e40af', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd'];

// // ---------- Helpers ----------
// const isPrime = (n) => {
//   if (n < 2) return false;
//   for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
//   return true;
// };
// const isPalindromeStr = (n) => {
//   const s = String(n);
//   return s.length > 1 && s === [...s].reverse().join('');
// };
// const isTriangular = (n) => {
//   if (n < 1) return false;
//   const x = 8 * n + 1;
//   const r = Math.sqrt(x);
//   return Number.isInteger(r) && (r - 1) % 2 === 0;
// };
// const isPerfectSquare = (n) => {
//   if (n < 0) return false;
//   const r = Math.sqrt(n);
//   return Number.isInteger(r);
// };
// const isPerfectCube = (n) => {
//   if (n < 0) return false;
//   const r = Math.round(Math.cbrt(n));
//   return r * r * r === n;
// };
// const primeFactor = (n) => {
//   const f = {};
//   let x = n;
//   for (let p = 2; p * p <= x; p++) {
//     while (x % p === 0) { f[p] = (f[p] || 0) + 1; x = x / p; }
//   }
//   if (x > 1) f[x] = (f[x] || 0) + 1;
//   return f;
// };
// const fmtFactors = (f) => {
//   const entries = Object.entries(f);
//   if (entries.length === 0) return '1';
//   return entries.map(([p, e]) => e === 1 ? p : `${p}<sup>${e}</sup>`).join(' &times; ');
// };

// // ---------- Precomputed: table cells (cubes 1 to 1,000,000) ----------
// const STACKS = (() => {
//   const out = [];
//   for (let s = 0; s < 10; s++) {
//     const start = s * 10 + 1;
//     const stack = [];
//     for (let i = 0; i < 10; i++) {
//       const root = start + i;
//       const cube = root * root * root;
//       stack.push({ root, cube, rootLastDigit: root % 10 });
//     }
//     out.push(stack);
//   }
//   return out;
// })();

// // ---------- Precomputed: filter sets ----------
// const FILTER_SETS = (() => {
//   const sets = {
//     palindrome:     new Set(),
//     sixthPower:     new Set(),
//     primeRoot:      new Set(),
//     triangularRoot: new Set(),
//     fixedDigit:     new Set(),
//   };
//   for (let root = 1; root <= 100; root++) {
//     const cube = root * root * root;
//     if (isPalindromeStr(cube))   sets.palindrome.add(cube);
//     if (isPerfectSquare(cube))   sets.sixthPower.add(cube);
//     if (isPrime(root))           sets.primeRoot.add(cube);
//     if (isTriangular(root))      sets.triangularRoot.add(cube);
//     const ld = root % 10;
//     if ([0, 1, 4, 5, 6, 9].includes(ld)) sets.fixedDigit.add(cube);
//   }
//   return sets;
// })();

// const FILTER_DEFS = [
//   { id: 'palindrome',     icon: '\u2194',     title: 'Palindromic cubes',
//     desc: 'Cubes that read the same forwards and backwards.' },
//   { id: 'sixthPower',     icon: 'n\u2076',    title: 'Cubes that are also squares',
//     desc: 'Sixth powers \u2014 cubes whose root is itself a perfect square.' },
//   { id: 'primeRoot',      icon: 'p',          title: 'Cubes with prime roots',
//     desc: 'Cubes of prime numbers \u2014 their only divisors are 1, p, p\u00B2, and p\u00B3.' },
//   { id: 'triangularRoot', icon: '\u25B3',     title: 'Cubes of triangular numbers',
//     desc: 'Cubes whose root is triangular: 1, 3, 6, 10, 15, 21\u2026' },
//   { id: 'fixedDigit',     icon: '=',          title: 'Cubes preserving root\u2019s last digit',
//     desc: 'Cubes whose last digit matches their root \u2014 happens for roots ending in 0, 1, 4, 5, 6, 9.' },
// ];

// const PROPERTY_CARDS = [
//   {
//     icon: '\u03A3',
//     title: 'Sum of consecutive odd numbers',
//     body: 'n\u00B3 equals the sum of n consecutive odd numbers. 1\u00B3=1; 2\u00B3=3+5; 3\u00B3=7+9+11; 4\u00B3=13+15+17+19.',
//     hasOddPyramid: true,
//   },
//   {
//     icon: 'd',
//     title: 'Last-digit involution',
//     body: 'Cubing preserves the last digit for 0, 1, 4, 5, 6, 9 and swaps 2\u2194 8 and 3\u2194 7. So a cube\u2019s last digit fully determines its root\u2019s last digit.',
//     code: '\u221B27 ends in 3 \u2192 root ends in 3 \u00B7 \u221B512 ends in 2 \u2192 root ends in 8',
//   },
//   {
//     icon: '\u0394',
//     title: 'Gap = 3n\u00B2 + 3n + 1',
//     body: 'The difference between n\u00B3 and (n+1)\u00B3 is always 3n\u00B2 + 3n + 1.',
//     code: '10\u00B3=1000, 11\u00B3=1331, gap=331=3(100)+3(10)+1',
//   },
//   {
//     icon: 'mod',
//     title: 'Mod 9 rule',
//     body: 'Every perfect cube is 0, 1, or 8 mod 9 \u2014 never 2, 3, 4, 5, 6, or 7. A fast rejection test.',
//     code: '1543 mod 9 = 7 \u2192 not a cube',
//   },
// ];

// const TOC_ITEMS = [
//   { id: 'sec-tool',       label: 'Cube tool' },
//   { id: 'sec-table',      label: 'The table' },
//   { id: 'sec-patterns',   label: 'Patterns & filters' },
//   { id: 'sec-properties', label: 'Properties' },
//   { id: 'sec-quiz',       label: 'Test yourself' },
// ];

// // LD pills for cubes — show the involution: 10 pills, color-grouped.
// const LD_PILLS = [
//   { from: 0, to: 0, kind: 'fixed' },
//   { from: 1, to: 1, kind: 'fixed' },
//   { from: 2, to: 8, kind: 'swap28' },
//   { from: 3, to: 7, kind: 'swap37' },
//   { from: 4, to: 4, kind: 'fixed' },
//   { from: 5, to: 5, kind: 'fixed' },
//   { from: 6, to: 6, kind: 'fixed' },
//   { from: 7, to: 3, kind: 'swap37' },
//   { from: 8, to: 2, kind: 'swap28' },
//   { from: 9, to: 9, kind: 'fixed' },
// ];
// const PILL_STYLES = {
//   fixed:  { bg: '#dbeafe', fg: '#1e40af' },
//   swap28: { bg: '#fef3c7', fg: '#92400e' },
//   swap37: { bg: '#fce7f3', fg: '#9d174d' },
// };

// const TABLE_MAX = 1000000; // 100³

// // ---------- Inline styles ----------
// const S = {
//   container: {
//     maxWidth: '1000px',
//     margin: '0 auto',
//     padding: '28px 24px 80px',
//     position: 'relative',
//     fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
//     color: C.text,
//   },
//   breadcrumb: { fontSize: '14px', color: C.textMuted, marginBottom: '24px' },
//   breadcrumbLink: { color: C.primary, textDecoration: 'none', fontWeight: 500, cursor: 'pointer' },
//   pageLayout: {
//     position: 'relative',
//   },
//   sidebar: {
//     position: 'absolute',
//     top: 0,
//     right: '100%',
//     width: '240px',
//     height: '100%',
//     marginRight: '40px',
//   },
//   sidebarSticky: {
//     position: 'sticky',
//     top: '20px',
//     maxHeight: 'calc(100vh - 40px)',
//     overflowY: 'auto',
//     paddingRight: '4px',
//   },
//   sidebarBlock: { marginBottom: '32px' },
//   sidebarLabel: {
//     fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.2px',
//     color: C.textMuted, fontWeight: 700, marginBottom: '14px', paddingLeft: '14px',
//   },
//   tocList: { listStyle: 'none', margin: 0, padding: 0 },
//   tocLinkBase: {
//     display: 'flex', alignItems: 'center', gap: '10px',
//     padding: '9px 0 9px 14px', borderLeft: `2px solid ${C.borderSoft}`,
//     color: C.textMuted, textDecoration: 'none', fontSize: '14px',
//     lineHeight: 1.3, cursor: 'pointer', transition: 'all 0.15s',
//   },
//   tocNumBase: {
//     display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
//     width: '22px', height: '22px', borderRadius: '50%',
//     background: C.borderSoft, color: C.textMuted,
//     fontSize: '11px', fontWeight: 700, flexShrink: 0, transition: 'all 0.15s',
//   },
//   relatedMini: {
//     display: 'block', padding: '11px 14px', background: 'white',
//     border: `1px solid ${C.borderSoft}`, borderRadius: '9px',
//     textDecoration: 'none', color: 'inherit',
//     marginBottom: '8px', transition: 'all 0.15s', cursor: 'pointer',
//   },
//   relatedMiniTitle: { fontWeight: 600, color: C.primaryDark, fontSize: '13px', marginBottom: '2px' },
//   relatedMiniSub: { fontSize: '12px', color: C.textMuted },
//   mainCol: { minWidth: 0, width: '100%' },
//   pageTitle: {
//     fontFamily: "'Crimson Pro', Georgia, serif",
//     fontSize: '44px', fontWeight: 700, color: '#1e3a8a',
//     textAlign: 'center', margin: '0 0 24px 0', letterSpacing: '-0.5px',
//   },
//   aboutTable: {
//     maxWidth: '620px', margin: '0 auto 36px', background: 'white',
//     border: `1px solid ${C.border}`, borderRadius: '14px',
//     overflow: 'hidden', boxShadow: C.shadowSm,
//   },
//   aboutSummary: {
//     padding: '14px 22px', cursor: 'pointer',
//     display: 'flex', alignItems: 'center', gap: '12px',
//     color: C.primary, fontWeight: 600, listStyle: 'none',
//   },
//   aboutIcon: {
//     display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
//     width: '26px', height: '26px', background: C.primary, color: 'white',
//     borderRadius: '50%', fontSize: '14px', fontWeight: 700,
//   },
//   aboutToggle: { marginLeft: 'auto', fontSize: '22px', lineHeight: 1 },
//   aboutContent: {
//     padding: '16px 22px 22px', color: C.textMuted,
//     borderTop: `1px solid ${C.borderSoft}`, fontSize: '15px',
//   },
//   toolSection: {
//     background: 'linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)',
//     border: `1px solid ${C.border}`, borderRadius: '20px',
//     padding: '28px 32px', marginBottom: '36px',
//     position: 'relative', overflow: 'hidden',
//   },
//   toolHeader: { position: 'relative', zIndex: 1, marginBottom: '18px' },
//   toolH2: {
//     fontFamily: "'Crimson Pro', serif", fontSize: '26px',
//     color: C.primaryDark, margin: '0 0 4px 0', fontWeight: 700,
//   },
//   toolSub: { color: C.textMuted, fontSize: '14px', margin: 0 },
//   modeTabsWrap: {
//     position: 'relative', zIndex: 1, display: 'inline-flex',
//     background: 'white', borderRadius: '12px', padding: '4px',
//     marginBottom: '14px', border: `1px solid ${C.border}`,
//     boxShadow: C.shadowSm, gap: '2px', flexWrap: 'wrap',
//   },
//   modeTabBase: {
//     padding: '9px 18px', borderRadius: '9px', fontSize: '14px',
//     fontWeight: 600, cursor: 'pointer', background: 'transparent',
//     border: 'none', transition: 'all 0.18s',
//     fontFamily: 'inherit', color: C.textMuted,
//   },
//   modeTabActive: {
//     background: C.primary, color: 'white',
//     boxShadow: '0 2px 6px rgba(37, 99, 235, 0.30)',
//   },
//   inputBlock: {
//     display: 'flex', gap: '10px', marginBottom: '8px',
//     position: 'relative', zIndex: 1,
//     alignItems: 'center', flexWrap: 'wrap',
//   },
//   inputField: {
//     flex: 1, minWidth: '140px', padding: '13px 18px',
//     border: `2px solid ${C.border}`, borderRadius: '11px',
//     fontSize: '15px', outline: 'none', background: 'white',
//     transition: 'border-color 0.15s, box-shadow 0.15s',
//     fontFamily: 'inherit', color: C.text,
//   },
//   inputBtn: {
//     padding: '13px 26px', background: C.primary, color: 'white',
//     border: 'none', borderRadius: '11px',
//     fontWeight: 600, fontSize: '15px', cursor: 'pointer',
//     transition: 'background 0.15s, transform 0.1s',
//     fontFamily: 'inherit', whiteSpace: 'nowrap',
//   },
//   rangeSep: { color: C.textMuted, fontWeight: 600, fontSize: '14px', padding: '0 2px' },
//   toolStatus: {
//     marginTop: '12px', padding: '11px 14px',
//     background: 'rgba(255, 255, 255, 0.75)',
//     border: `1px solid ${C.border}`, borderRadius: '10px',
//     display: 'flex', alignItems: 'flex-start', gap: '10px',
//     fontSize: '14px', color: C.text, lineHeight: 1.55,
//     position: 'relative', zIndex: 1,
//   },
//   statusIcon: {
//     width: '22px', height: '22px', borderRadius: '50%',
//     display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
//     color: 'white', fontSize: '13px', fontWeight: 700,
//     flexShrink: 0, marginTop: '1px',
//   },
//   legend: {
//     background: 'white', borderRadius: '16px', padding: '18px 22px',
//     marginBottom: '22px', border: `1px solid ${C.borderSoft}`,
//     boxShadow: C.shadowSm,
//   },
//   legendTitle: {
//     fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px',
//     color: C.textMuted, fontWeight: 700, marginBottom: '12px',
//   },
//   legendRow: { display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' },
//   legendPillBase: { padding: '6px 13px', borderRadius: '9999px', fontSize: '13px', fontWeight: 600 },
//   legendNote: { fontSize: '14px', color: C.textMuted, margin: 0 },
//   filterStatus: {
//     display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//     padding: '12px 18px',
//     background: 'linear-gradient(90deg, #fef3c7 0%, #fffbeb 100%)',
//     border: `1px solid ${C.warn}`, borderRadius: '10px',
//     marginBottom: '16px', fontSize: '14px',
//   },
//   filterStatusText: { color: C.warnText, fontWeight: 600 },
//   filterClear: {
//     background: 'white', border: `1px solid ${C.warn}`,
//     color: C.warnText, padding: '5px 12px', borderRadius: '7px',
//     fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
//   },
//   tableGrid: {
//     display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
//     gap: '26px 12px', marginBottom: '36px',
//   },
//   stack: { display: 'flex', flexDirection: 'column', gap: '6px' },
//   stackTitle: {
//     background: `linear-gradient(135deg, ${C.primary} 0%, #3b82f6 100%)`,
//     color: 'white', padding: '10px 12px', borderRadius: '10px',
//     textAlign: 'center', fontSize: '12px', fontWeight: 700,
//     letterSpacing: '0.3px', marginBottom: '6px',
//     boxShadow: '0 4px 12px rgba(37,99,235,0.22)',
//   },
//   cell: {
//     padding: '9px 8px',
//     border: `1px solid ${C.borderSoft}`, borderRadius: '8px',
//     fontSize: '12px', textAlign: 'center', cursor: 'pointer',
//     position: 'relative',
//     transition: 'transform 0.15s, box-shadow 0.15s, border-color 0.15s, opacity 0.2s',
//   },
//   cbrtSym: { color: C.primary, fontWeight: 700 },
//   cellRoot: { fontWeight: 700 },
//   cellDetails: {
//     background: 'white', border: `1px solid ${C.border}`,
//     borderRadius: '18px', padding: '28px',
//     marginBottom: '44px', position: 'relative', boxShadow: C.shadowLg,
//   },
//   closeDetails: {
//     position: 'absolute', top: '16px', right: '16px',
//     width: '32px', height: '32px', border: 'none',
//     background: C.borderSoft, borderRadius: '50%',
//     fontSize: '20px', cursor: 'pointer', color: C.textMuted,
//     lineHeight: 1, transition: 'background 0.15s', fontFamily: 'inherit',
//   },
//   detailsH3: {
//     fontFamily: "'Crimson Pro', serif", fontSize: '30px',
//     color: C.primaryDark, fontWeight: 700, margin: '0 0 20px 0',
//   },
//   detailGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//     gap: '12px',
//   },
//   detailItem: {
//     padding: '14px 16px', background: C.bg,
//     borderRadius: '10px', border: `1px solid ${C.borderSoft}`,
//   },
//   detailLabel: {
//     fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.8px',
//     color: C.textMuted, marginBottom: '6px', fontWeight: 700,
//   },
//   detailValue: { fontSize: '16px', fontWeight: 700, color: C.text },
//   propertyBadges: { display: 'flex', flexWrap: 'wrap', gap: '8px' },
//   badge: {
//     padding: '5px 12px', background: C.primaryLight,
//     color: C.primaryDark, borderRadius: '9999px',
//     fontSize: '12px', fontWeight: 600, border: `1px solid ${C.border}`,
//   },
//   sectionH: {
//     fontFamily: "'Crimson Pro', serif", fontSize: '30px',
//     color: '#1e3a8a', fontWeight: 700, letterSpacing: '-0.3px',
//     margin: '0 0 8px 0',
//   },
//   sectionSub: { color: C.textMuted, marginBottom: '26px', fontSize: '15px' },
//   filterGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
//     gap: '16px', marginBottom: '40px',
//   },
//   filterCard: {
//     background: 'white', border: `2px solid ${C.borderSoft}`,
//     borderRadius: '14px', padding: '20px',
//     cursor: 'pointer', transition: 'all 0.18s',
//     position: 'relative', boxShadow: C.shadowSm,
//   },
//   filterIcon: {
//     width: '44px', height: '44px',
//     background: `linear-gradient(135deg, ${C.primary} 0%, #3b82f6 100%)`,
//     color: 'white', borderRadius: '12px',
//     display: 'flex', alignItems: 'center', justifyContent: 'center',
//     fontSize: '19px', fontWeight: 700,
//     fontFamily: "'Crimson Pro', serif", marginBottom: '14px',
//     boxShadow: '0 4px 10px rgba(37,99,235,0.25)',
//   },
//   filterCardH3: { fontSize: '16px', fontWeight: 700, color: C.text, margin: '0 0 6px 0' },
//   filterCardP: { color: C.textMuted, fontSize: '13px', marginBottom: '14px', lineHeight: 1.5 },
//   filterCardFooter: {
//     display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//     paddingTop: '12px', borderTop: `1px solid ${C.borderSoft}`,
//   },
//   filterCount: { fontSize: '13px', fontWeight: 700, color: C.primaryDark },
//   filterAction: {
//     fontSize: '12px', color: C.textMuted,
//     textTransform: 'uppercase', letterSpacing: '0.6px', fontWeight: 600,
//   },
//   propertiesSection: { marginTop: '32px' },
//   propertyGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
//     gap: '16px',
//   },
//   propertyCard: {
//     background: 'white', border: `1px solid ${C.borderSoft}`,
//     borderRadius: '14px', padding: '22px', boxShadow: C.shadowSm,
//   },
//   propertyCardIcon: {
//     width: '36px', height: '36px',
//     background: C.primaryLight, color: C.primaryDark, borderRadius: '9px',
//     display: 'flex', alignItems: 'center', justifyContent: 'center',
//     fontSize: '17px', fontWeight: 700,
//     fontFamily: "'Crimson Pro', serif", marginBottom: '12px',
//   },
//   propertyCardH4: { fontSize: '15px', fontWeight: 700, color: C.text, margin: '0 0 6px 0' },
//   propertyCardP: { color: C.textMuted, fontSize: '13px', lineHeight: 1.55, margin: 0 },
//   propertyCardCode: {
//     display: 'block', fontFamily: "'Menlo', 'Monaco', monospace",
//     background: C.bg, padding: '7px 11px', borderRadius: '6px',
//     fontSize: '12px', marginTop: '8px',
//     color: C.primaryDark, fontWeight: 600,
//   },
//   oddPyramidSvg: {
//     display: 'block', margin: '10px 0 0',
//     background: C.bg, borderRadius: '8px', padding: '8px',
//     width: '180px', height: '130px',
//   },
//   quizSection: { marginTop: '56px' },
// };

// // ---------- CSS (pseudo-classes, hover, media queries) ----------
// const CSS = `
// .pcp-toc-link:hover {
//   color: ${C.primary};
// }
// .pcp-related-mini:hover {
//   border-color: ${C.primary} !important;
//   transform: translateX(2px);
//   box-shadow: ${C.shadowSm};
// }
// .pcp-input-field:focus {
//   border-color: ${C.primary} !important;
//   box-shadow: 0 0 0 4px rgba(37,99,235,0.15);
// }
// .pcp-input-btn:hover { background: ${C.primaryDark} !important; }
// .pcp-input-btn:active { transform: translateY(1px); }
// .pcp-mode-tab:not(.active):hover { color: ${C.primary} !important; }
// .pcp-cell:hover {
//   transform: translateY(-2px);
//   box-shadow: 0 6px 16px rgba(15,23,42,0.10);
//   border-color: ${C.primary};
//   z-index: 5;
// }
// .pcp-cell::after {
//   content: attr(data-tooltip);
//   position: absolute;
//   bottom: calc(100% + 8px);
//   left: 50%;
//   transform: translateX(-50%);
//   background: #172554;
//   color: white;
//   padding: 7px 12px;
//   border-radius: 6px;
//   font-size: 12px;
//   white-space: nowrap;
//   opacity: 0;
//   pointer-events: none;
//   transition: opacity 0.15s;
//   z-index: 20;
//   font-weight: 500;
// }
// .pcp-cell:hover::after { opacity: 1; }
// .pcp-cell.highlight {
//   border: 2px solid ${C.warn} !important;
//   box-shadow: 0 0 0 3px rgba(245,158,11,0.35), 0 6px 16px rgba(245,158,11,0.25);
//   transform: scale(1.05);
//   z-index: 4;
// }
// .pcp-cell.filter-match {
//   border: 2px solid ${C.warn} !important;
//   box-shadow: 0 4px 14px rgba(245,158,11,0.35);
//   transform: scale(1.04);
//   z-index: 3;
// }
// .pcp-cell.filter-dim { opacity: 0.28; }
// .pcp-filter-card:hover {
//   transform: translateY(-3px);
//   box-shadow: ${C.shadowMd};
//   border-color: ${C.border} !important;
// }
// .pcp-filter-card.active {
//   border-color: ${C.warn} !important;
//   background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%) !important;
//   box-shadow: 0 0 0 4px rgba(245,158,11,0.18), ${C.shadowMd};
// }
// .pcp-filter-card.active::after {
//   content: '\u25CF Active';
//   position: absolute;
//   top: 12px;
//   right: 14px;
//   font-size: 11px;
//   font-weight: 700;
//   color: ${C.warnText};
//   letter-spacing: 0.5px;
// }
// .pcp-filter-card.active .pcp-filter-icon {
//   background: linear-gradient(135deg, ${C.warn} 0%, #fb923c 100%) !important;
//   box-shadow: 0 4px 10px rgba(245,158,11,0.3) !important;
// }
// .pcp-filter-card.active .pcp-filter-count,
// .pcp-filter-card.active .pcp-filter-action {
//   color: ${C.warnText} !important;
// }
// .pcp-about-summary::-webkit-details-marker { display: none; }
// .pcp-sidebar-sticky::-webkit-scrollbar { width: 4px; }
// .pcp-sidebar-sticky::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 4px; }
// .pcp-close-details:hover { background: #e5e7eb !important; color: ${C.text} !important; }
// @keyframes pcpSlideIn {
//   from { opacity: 0; transform: translateY(-8px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// .pcp-cell-details { animation: pcpSlideIn 0.25s ease; }

// /* Hide the absolute sidebar when the viewport is too narrow to fit it */
// @media (max-width: 1320px) {
//   .pcp-sidebar { display: none !important; }
// }
// @media (max-width: 640px) {
//   .pcp-page-title { font-size: 32px !important; }
//   .pcp-table-grid { grid-template-columns: repeat(2, 1fr) !important; }
//   .pcp-input-block { flex-direction: column !important; align-items: stretch !important; }
//   .pcp-input-block input { width: 100% !important; }
//   .pcp-input-block button { width: 100% !important; }
//   .pcp-range-sep { text-align: center; }
//   .pcp-mode-tab { padding: 9px 14px !important; font-size: 13px !important; }
// }
// @media (max-width: 900px) {
//   .pcp-table-grid { grid-template-columns: repeat(3, 1fr) !important; }
// }
// `;

// // ---------- Component ----------
// const PerfectCubesPage = ({ relatedReferences = [] }) => {
//   // Tool state
//   const [mode, setMode] = useState('isCube');
//   const [isCubeInput, setIsCubeInput] = useState('');
//   const [cubeOfInput, setCubeOfInput] = useState('');
//   const [rangeFromInput, setRangeFromInput] = useState('');
//   const [rangeToInput, setRangeToInput] = useState('');

//   const [statusKind, setStatusKind] = useState(null);
//   const [statusIcon, setStatusIcon] = useState('');
//   const [statusHtml, setStatusHtml] = useState('');

//   // Table state
//   const [detailsRoot, setDetailsRoot] = useState(null);
//   const [highlightedRoots, setHighlightedRoots] = useState(() => new Set());
//   const [activeFilter, setActiveFilter] = useState(null);
//   const [activeRange, setActiveRange] = useState(null);

//   // TOC + scroll plumbing
//   const [activeSection, setActiveSection] = useState('sec-tool');
//   const [pendingScroll, setPendingScroll] = useState(null);

//   const cellRefs = useRef({});
//   const sectionRefs = useRef({});

//   // ===== Helpers =====
//   const setStatus = (kind, icon, html) => {
//     setStatusKind(kind); setStatusIcon(icon); setStatusHtml(html);
//   };
//   const hideStatus = () => {
//     setStatusKind(null); setStatusIcon(''); setStatusHtml('');
//   };
//   const clearTableHighlights = () => {
//     setActiveFilter(null);
//     setActiveRange(null);
//     setHighlightedRoots(new Set());
//     setDetailsRoot(null);
//   };

//   // ===== Scroll resolver =====
//   useEffect(() => {
//     if (!pendingScroll) return;
//     let el = null;
//     if (pendingScroll.type === 'cell') {
//       el = cellRefs.current[pendingScroll.root];
//     } else if (pendingScroll.type === 'table') {
//       el = sectionRefs.current['sec-table'];
//     } else if (pendingScroll.type === 'details') {
//       el = document.getElementById('pcp-cell-details');
//     }
//     if (el) {
//       el.scrollIntoView({
//         behavior: 'smooth',
//         block: pendingScroll.type === 'table' ? 'start' : 'center',
//       });
//     }
//     setPendingScroll(null);
//   }, [pendingScroll]);

//   // ===== TOC active state =====
//   useEffect(() => {
//     const sections = TOC_ITEMS
//       .map((item) => sectionRefs.current[item.id])
//       .filter(Boolean);
//     if (sections.length === 0) return;
//     const obs = new IntersectionObserver((entries) => {
//       entries.forEach((e) => {
//         if (e.isIntersecting) setActiveSection(e.target.id);
//       });
//     }, { rootMargin: '-25% 0px -65% 0px' });
//     sections.forEach((s) => obs.observe(s));
//     return () => obs.disconnect();
//   }, []);

//   // ===== Mode change =====
//   const handleModeChange = (next) => {
//     setMode(next);
//     hideStatus();
//   };

//   // ===== Tool: Mode 1 (Is N a cube?) =====
//   const runIsCube = () => {
//     const n = parseInt(isCubeInput, 10);
//     if (isNaN(n) || n < 0) {
//       setStatus('error', '!', 'Please enter a non-negative integer.');
//       return;
//     }
//     setActiveFilter(null);
//     setActiveRange(null);

//     if (isPerfectCube(n)) {
//       const root = Math.round(Math.cbrt(n));
//       if (n <= TABLE_MAX && root >= 1) {
//         setHighlightedRoots(new Set([root]));
//         setDetailsRoot(root);
//         setPendingScroll({ type: 'cell', root });
//         setStatus('success', '\u2713',
//           `<strong>${n.toLocaleString()}</strong> is a perfect cube &mdash; &#8731;${n} = <strong>${root}</strong>. Cell highlighted and details opened below.`);
//       } else {
//         setHighlightedRoots(new Set());
//         setDetailsRoot(null);
//         setStatus('success', '\u2713',
//           `<strong>${n.toLocaleString()}</strong> is a perfect cube &mdash; &#8731;${n.toLocaleString()} = <strong>${root}</strong>. Outside this 1&ndash;1,000,000 table.`);
//       }
//     } else {
//       const cbrt = Math.cbrt(n);
//       const lower = Math.floor(cbrt);
//       const upper = lower + 1;
//       const lowerCube = lower * lower * lower;
//       const upperCube = upper * upper * upper;
//       const lowerIn = lowerCube <= TABLE_MAX && lowerCube > 0;
//       const upperIn = upperCube <= TABLE_MAX;

//       const roots = new Set();
//       if (lowerIn) roots.add(lower);
//       if (upperIn) roots.add(upper);
//       setHighlightedRoots(roots);
//       setDetailsRoot(null);

//       if (lowerIn)      setPendingScroll({ type: 'cell', root: lower });
//       else if (upperIn) setPendingScroll({ type: 'cell', root: upper });

//       let msg = `<strong>${n.toLocaleString()}</strong> is not a perfect cube (&#8731; &asymp; ${cbrt.toFixed(4)}). `;
//       if (lowerIn && upperIn) {
//         msg += `Nearest: <strong>${lowerCube.toLocaleString()}</strong> = ${lower}&sup3; and <strong>${upperCube.toLocaleString()}</strong> = ${upper}&sup3;. Both highlighted below.`;
//       } else if (lowerIn) {
//         msg += `Nearest in table: <strong>${lowerCube.toLocaleString()}</strong> = ${lower}&sup3; (highlighted). ${upperCube.toLocaleString()} = ${upper}&sup3; is outside the table.`;
//       } else if (upperIn) {
//         msg += `Nearest in table: <strong>${upperCube.toLocaleString()}</strong> = ${upper}&sup3; (highlighted). ${lowerCube.toLocaleString()} = ${lower}&sup3; is outside the table.`;
//       } else {
//         msg += `Nearest perfect cubes (${lowerCube.toLocaleString()} and ${upperCube.toLocaleString()}) are outside this table.`;
//       }
//       setStatus('error', '\u2717', msg);
//     }
//   };

//   // ===== Tool: Mode 2 (Cube of N) =====
//   const runCubeOf = () => {
//     const n = parseInt(cubeOfInput, 10);
//     if (isNaN(n) || n < 0) {
//       setStatus('error', '!', 'Please enter a non-negative integer.');
//       return;
//     }
//     setActiveFilter(null);
//     setActiveRange(null);

//     const cube = n * n * n;
//     if (cube <= TABLE_MAX && n >= 1) {
//       setHighlightedRoots(new Set([n]));
//       setDetailsRoot(n);
//       setPendingScroll({ type: 'cell', root: n });
//       setStatus('success', '=',
//         `<strong>${n}&sup3; = ${cube.toLocaleString()}</strong>. Cell highlighted and details opened below.`);
//     } else {
//       setHighlightedRoots(new Set());
//       setDetailsRoot(null);
//       setStatus('info', '=',
//         `<strong>${n}&sup3; = ${cube.toLocaleString()}</strong>. Outside this 1&ndash;1,000,000 table.`);
//     }
//   };

//   // ===== Tool: Mode 3 (Range) =====
//   const runRange = () => {
//     let from = parseInt(rangeFromInput, 10);
//     let to = parseInt(rangeToInput, 10);
//     if (isNaN(from) || isNaN(to) || from < 0 || to < 0) {
//       setStatus('error', '!', 'Please enter two non-negative integers.');
//       return;
//     }
//     if (from > to) [from, to] = [to, from];

//     setHighlightedRoots(new Set());
//     setDetailsRoot(null);

//     const lowRoot = Math.ceil(Math.cbrt(from));
//     const highRoot = Math.floor(Math.cbrt(to));
//     const allMatches = [];
//     const inTableMatches = [];
//     for (let r = lowRoot; r <= highRoot; r++) {
//       const cube = r * r * r;
//       allMatches.push({ root: r, cube });
//       if (cube <= TABLE_MAX) inTableMatches.push({ root: r, cube });
//     }

//     setActiveFilter(null);

//     if (inTableMatches.length > 0) {
//       setActiveRange({ from, to, matches: inTableMatches });
//       setPendingScroll({ type: 'table' });
//     } else {
//       setActiveRange(null);
//     }

//     if (allMatches.length === 0) {
//       setStatus('info', '\u2211',
//         `No perfect cubes fall between <strong>${from.toLocaleString()}</strong> and <strong>${to.toLocaleString()}</strong>.`);
//     } else if (inTableMatches.length === 0) {
//       setStatus('info', '\u2211',
//         `<strong>${allMatches.length}</strong> perfect cube${allMatches.length === 1 ? '' : 's'} between <strong>${from.toLocaleString()}</strong> and <strong>${to.toLocaleString()}</strong>, but none in this 1&ndash;1,000,000 table.`);
//     } else {
//       const outside = allMatches.length - inTableMatches.length;
//       let msg = `<strong>${inTableMatches.length}</strong> perfect cube${inTableMatches.length === 1 ? '' : 's'} highlighted in the table below`;
//       if (outside > 0) msg += ` (${outside} more fall outside the 1&ndash;1,000,000 range)`;
//       msg += '.';
//       setStatus('success', '\u2211', msg);
//     }
//   };

//   // ===== Filter cards =====
//   const toggleFilter = (id) => {
//     setHighlightedRoots(new Set());
//     setDetailsRoot(null);
//     setActiveRange(null);
//     if (activeFilter === id) {
//       setActiveFilter(null);
//       hideStatus();
//     } else {
//       setActiveFilter(id);
//       hideStatus();
//       setPendingScroll({ type: 'table' });
//     }
//   };

//   const handleClearHighlights = () => {
//     clearTableHighlights();
//     hideStatus();
//   };

//   // ===== Cell interaction =====
//   const handleCellClick = (root) => {
//     setDetailsRoot(root);
//     setPendingScroll({ type: 'details' });
//   };

//   // ===== Derived =====
//   const getCellClass = (root, cube) => {
//     let cls = 'pcp-cell';
//     if (highlightedRoots.has(root)) cls += ' highlight';
//     if (activeFilter) {
//       if (FILTER_SETS[activeFilter].has(cube)) cls += ' filter-match';
//       else cls += ' filter-dim';
//     } else if (activeRange) {
//       if (cube >= activeRange.from && cube <= activeRange.to) cls += ' filter-match';
//       else cls += ' filter-dim';
//     }
//     return cls;
//   };
//   const getCellBg = (root, cube, rootLastDigit) => {
//     if (highlightedRoots.has(root)) return '#fef3c7';
//     if (activeFilter && FILTER_SETS[activeFilter].has(cube)) return '#fef3c7';
//     if (activeRange && cube >= activeRange.from && cube <= activeRange.to) return '#fef3c7';
//     return LD_BG[rootLastDigit] || 'white';
//   };
//   const tocLinkStyle = (id) => {
//     const base = { ...S.tocLinkBase };
//     if (activeSection === id) {
//       base.color = C.primaryDark;
//       base.borderLeftColor = C.primary;
//       base.fontWeight = 600;
//       base.background = `linear-gradient(90deg, ${C.primaryLight} 0%, transparent 100%)`;
//     }
//     return base;
//   };
//   const tocNumStyle = (id) => {
//     const base = { ...S.tocNumBase };
//     if (activeSection === id) {
//       base.background = C.primary;
//       base.color = 'white';
//     }
//     return base;
//   };

//   let bannerText = '';
//   if (activeFilter) {
//     const def = FILTER_DEFS.find((f) => f.id === activeFilter);
//     const count = FILTER_SETS[activeFilter].size;
//     bannerText = `Filtering: ${def.title} \u2014 ${count} match${count === 1 ? '' : 'es'} highlighted`;
//   } else if (activeRange) {
//     bannerText = `Range ${activeRange.from.toLocaleString()}\u2013${activeRange.to.toLocaleString()}: ${activeRange.matches.length} perfect cube${activeRange.matches.length === 1 ? '' : 's'} highlighted`;
//   }
//   const showBanner = activeFilter !== null || activeRange !== null;

//   const detailsContent = (() => {
//     if (detailsRoot === null) return null;
//     const root = detailsRoot;
//     const cube = root * root * root;
//     const props = [];
//     if (FILTER_SETS.palindrome.has(cube))     props.push('Palindrome');
//     if (FILTER_SETS.sixthPower.has(cube))     props.push('Sixth power (also a square)');
//     if (FILTER_SETS.primeRoot.has(cube))      props.push('Prime root');
//     if (FILTER_SETS.triangularRoot.has(cube)) props.push('Triangular root');
//     if (FILTER_SETS.fixedDigit.has(cube))     props.push('Preserves last digit');
//     return {
//       root, cube,
//       factors: primeFactor(cube),
//       rootFactors: primeFactor(root),
//       digitSum: cube.toString().split('').reduce((a, b) => a + parseInt(b, 10), 0),
//       cubeLastDigit: cube % 10,
//       rootLastDigit: root % 10,
//       mod9: cube % 9,
//       props,
//     };
//   })();

//   const statusIconBg = {
//     success: C.success,
//     error:   C.error,
//     info:    C.primary,
//   }[statusKind] || C.primary;

//   const modeTabs = [
//     { id: 'isCube', label: 'Is N a cube?' },
//     { id: 'cubeOf', label: 'Cube of N' },
//     { id: 'range',  label: 'Range' },
//   ];

//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: CSS }} />
//       <div style={S.container}>
//         <div className="pcp-layout" style={S.pageLayout}>

//           {/* ===== SIDEBAR (absolute, anchored to the container's left edge) ===== */}
//           <aside className="pcp-sidebar" style={S.sidebar}>
//             <div className="pcp-sidebar-sticky" style={S.sidebarSticky}>
//               <div style={S.sidebarBlock}>
//                 <div style={S.sidebarLabel}>On this page</div>
//                 <ul style={S.tocList}>
//                   {TOC_ITEMS.map((item, idx) => (
//                     <li key={item.id}>
//                       <a
//                         className={`pcp-toc-link ${activeSection === item.id ? 'active' : ''}`}
//                         style={tocLinkStyle(item.id)}
//                         onClick={(e) => {
//                           e.preventDefault();
//                           const t = sectionRefs.current[item.id];
//                           if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
//                         }}
//                       >
//                         <span style={tocNumStyle(item.id)}>{idx + 1}</span>
//                         {item.label}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {relatedReferences && relatedReferences.length > 0 && (
//                 <div style={S.sidebarBlock}>
//                   <div style={S.sidebarLabel}>Related references</div>
//                   {relatedReferences.map((ref, idx) => (
//                     <a
//                       key={idx}
//                       href={ref.href}
//                       className="pcp-related-mini"
//                       style={S.relatedMini}
//                     >
//                       <div style={S.relatedMiniTitle}>{ref.title}</div>
//                       {ref.sub && <div style={S.relatedMiniSub}>{ref.sub}</div>}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </aside>

//           {/* ===== MAIN ===== */}
//           <div style={S.mainCol}>

//             {/* TOOL */}
//             <section
//               id="sec-tool"
//               ref={(el) => { sectionRefs.current['sec-tool'] = el; }}
//               style={S.toolSection}
//             >
//               <div style={S.toolHeader}>
//                 <h2 style={S.toolH2}>Perfect Cube Tool</h2>
//                 <p style={S.toolSub}>Every answer takes you to the table. Pick a question:</p>
//               </div>

//               <div style={S.modeTabsWrap} role="tablist">
//                 {modeTabs.map((tab) => {
//                   const isActive = mode === tab.id;
//                   return (
//                     <button
//                       key={tab.id}
//                       type="button"
//                       className={`pcp-mode-tab ${isActive ? 'active' : ''}`}
//                       style={{ ...S.modeTabBase, ...(isActive ? S.modeTabActive : {}) }}
//                       onClick={() => handleModeChange(tab.id)}
//                     >
//                       {tab.label}
//                     </button>
//                   );
//                 })}
//               </div>

//               {mode === 'isCube' && (
//                 <div className="pcp-input-block" style={S.inputBlock}>
//                   <input
//                     type="number"
//                     className="pcp-input-field"
//                     style={S.inputField}
//                     placeholder="Enter a number to test (e.g., 9261)"
//                     min="0"
//                     value={isCubeInput}
//                     onChange={(e) => setIsCubeInput(e.target.value)}
//                     onKeyDown={(e) => { if (e.key === 'Enter') runIsCube(); }}
//                   />
//                   <button
//                     type="button"
//                     className="pcp-input-btn"
//                     style={S.inputBtn}
//                     onClick={runIsCube}
//                   >
//                     Test
//                   </button>
//                 </div>
//               )}

//               {mode === 'cubeOf' && (
//                 <div className="pcp-input-block" style={S.inputBlock}>
//                   <input
//                     type="number"
//                     className="pcp-input-field"
//                     style={S.inputField}
//                     placeholder="Enter a number to cube (e.g., 21)"
//                     min="0"
//                     value={cubeOfInput}
//                     onChange={(e) => setCubeOfInput(e.target.value)}
//                     onKeyDown={(e) => { if (e.key === 'Enter') runCubeOf(); }}
//                   />
//                   <button
//                     type="button"
//                     className="pcp-input-btn"
//                     style={S.inputBtn}
//                     onClick={runCubeOf}
//                   >
//                     Compute
//                   </button>
//                 </div>
//               )}

//               {mode === 'range' && (
//                 <div className="pcp-input-block" style={S.inputBlock}>
//                   <input
//                     type="number"
//                     className="pcp-input-field"
//                     style={S.inputField}
//                     placeholder="From..."
//                     min="0"
//                     value={rangeFromInput}
//                     onChange={(e) => setRangeFromInput(e.target.value)}
//                     onKeyDown={(e) => { if (e.key === 'Enter') runRange(); }}
//                   />
//                   <span className="pcp-range-sep" style={S.rangeSep}>to</span>
//                   <input
//                     type="number"
//                     className="pcp-input-field"
//                     style={S.inputField}
//                     placeholder="To..."
//                     min="0"
//                     value={rangeToInput}
//                     onChange={(e) => setRangeToInput(e.target.value)}
//                     onKeyDown={(e) => { if (e.key === 'Enter') runRange(); }}
//                   />
//                   <button
//                     type="button"
//                     className="pcp-input-btn"
//                     style={S.inputBtn}
//                     onClick={runRange}
//                   >
//                     Find
//                   </button>
//                 </div>
//               )}

//               {statusKind && (
//                 <div style={S.toolStatus}>
//                   <span style={{ ...S.statusIcon, background: statusIconBg }}>{statusIcon}</span>
//                   <span dangerouslySetInnerHTML={{ __html: statusHtml }} />
//                 </div>
//               )}
//             </section>

//             {/* TABLE */}
//             <section
//               id="sec-table"
//               ref={(el) => { sectionRefs.current['sec-table'] = el; }}
//             >
//               <div style={S.legend}>
//                 <div style={S.legendTitle}>Last-digit involution</div>
//                 <div style={S.legendRow}>
//                   {LD_PILLS.map((p, i) => {
//                     const st = PILL_STYLES[p.kind];
//                     return (
//                       <span
//                         key={i}
//                         style={{ ...S.legendPillBase, background: st.bg, color: st.fg }}
//                       >
//                         {p.from}&sup3; ends in {p.to}
//                       </span>
//                     );
//                   })}
//                 </div>
//                 <p style={S.legendNote}>
//                   Every digit 0&ndash;9 can be the last digit of a cube. The last digit of n&sup3; is fully determined by the last digit of n: it stays the same for 0, 1, 4, 5, 6, 9 and swaps for 2&harr;8 and 3&harr;7.
//                 </p>
//               </div>

//               {showBanner && (
//                 <div style={S.filterStatus}>
//                   <span style={S.filterStatusText}>{bannerText}</span>
//                   <button
//                     type="button"
//                     style={S.filterClear}
//                     onClick={handleClearHighlights}
//                   >
//                     Clear highlight
//                   </button>
//                 </div>
//               )}

//               <div className="pcp-table-grid" style={S.tableGrid}>
//                 {STACKS.map((stack, si) => {
//                   const firstCube = stack[0].cube;
//                   const lastCube = stack[stack.length - 1].cube;
//                   return (
//                     <div key={si} style={S.stack}>
//                       <div style={S.stackTitle}>
//                         {firstCube.toLocaleString()} &mdash; {lastCube.toLocaleString()}
//                       </div>
//                       {stack.map((cell) => {
//                         const nextRoot = cell.root + 1;
//                         const nextCube = nextRoot * nextRoot * nextRoot;
//                         const gap = nextCube - cell.cube;
//                         const tooltip = `Next: \u221B${nextCube.toLocaleString()} = ${nextRoot} (gap +${gap.toLocaleString()})`;
//                         return (
//                           <div
//                             key={cell.root}
//                             ref={(el) => { cellRefs.current[cell.root] = el; }}
//                             className={getCellClass(cell.root, cell.cube)}
//                             style={{
//                               ...S.cell,
//                               background: getCellBg(cell.root, cell.cube, cell.rootLastDigit),
//                             }}
//                             data-tooltip={tooltip}
//                             onClick={() => handleCellClick(cell.root)}
//                           >
//                             <span style={S.cbrtSym}>&#8731;</span>{cell.cube.toLocaleString()} ={' '}
//                             <span style={S.cellRoot}>{cell.root}</span>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   );
//                 })}
//               </div>

//               {detailsContent && (
//                 <div id="pcp-cell-details" className="pcp-cell-details" style={S.cellDetails}>
//                   <button
//                     type="button"
//                     className="pcp-close-details"
//                     style={S.closeDetails}
//                     onClick={() => setDetailsRoot(null)}
//                   >
//                     &times;
//                   </button>
//                   <h3 style={S.detailsH3}>
//                     {detailsContent.cube.toLocaleString()} = {detailsContent.root}<sup>3</sup>
//                   </h3>
//                   <div style={S.detailGrid}>
//                     <div style={S.detailItem}>
//                       <div style={S.detailLabel}>Prime factorization (cube)</div>
//                       <div
//                         style={S.detailValue}
//                         dangerouslySetInnerHTML={{ __html: fmtFactors(detailsContent.factors) }}
//                       />
//                     </div>
//                     <div style={S.detailItem}>
//                       <div style={S.detailLabel}>Prime factorization (root)</div>
//                       <div
//                         style={S.detailValue}
//                         dangerouslySetInnerHTML={{ __html: fmtFactors(detailsContent.rootFactors) }}
//                       />
//                     </div>
//                     <div style={S.detailItem}>
//                       <div style={S.detailLabel}>Sum of digits</div>
//                       <div style={S.detailValue}>{detailsContent.digitSum}</div>
//                     </div>
//                     <div style={S.detailItem}>
//                       <div style={S.detailLabel}>Last digit (root &rarr; cube)</div>
//                       <div style={S.detailValue}>
//                         {detailsContent.rootLastDigit} &rarr; {detailsContent.cubeLastDigit}
//                       </div>
//                     </div>
//                     <div style={S.detailItem}>
//                       <div style={S.detailLabel}>Mod 9</div>
//                       <div style={S.detailValue}>{detailsContent.mod9}</div>
//                     </div>
//                     {detailsContent.props.length > 0 && (
//                       <div style={{ ...S.detailItem, gridColumn: '1 / -1' }}>
//                         <div style={S.detailLabel}>Properties</div>
//                         <div style={S.propertyBadges}>
//                           {detailsContent.props.map((p, i) => (
//                             <span key={i} style={S.badge}>{p}</span>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </section>

//             {/* PATTERNS */}
//             <section
//               id="sec-patterns"
//               ref={(el) => { sectionRefs.current['sec-patterns'] = el; }}
//             >
//               <h2 style={S.sectionH}>Patterns to explore</h2>
//               <p style={S.sectionSub}>Click a card to highlight every matching cube in the table above.</p>
//               <div style={S.filterGrid}>
//                 {FILTER_DEFS.map((f) => {
//                   const isActive = activeFilter === f.id;
//                   return (
//                     <div
//                       key={f.id}
//                       className={`pcp-filter-card ${isActive ? 'active' : ''}`}
//                       style={S.filterCard}
//                       onClick={() => toggleFilter(f.id)}
//                     >
//                       <div className="pcp-filter-icon" style={S.filterIcon}>{f.icon}</div>
//                       <h3 style={S.filterCardH3}>{f.title}</h3>
//                       <p style={S.filterCardP}>{f.desc}</p>
//                       <div style={S.filterCardFooter}>
//                         <span className="pcp-filter-count" style={S.filterCount}>{FILTER_SETS[f.id].size} in table</span>
//                         <span className="pcp-filter-action" style={S.filterAction}>Click to highlight</span>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </section>

//             {/* PROPERTIES */}
//             <section
//               id="sec-properties"
//               ref={(el) => { sectionRefs.current['sec-properties'] = el; }}
//               style={S.propertiesSection}
//             >
//               <h2 style={S.sectionH}>Properties of perfect cubes</h2>
//               <p style={S.sectionSub}>Facts true of every perfect cube &mdash; useful for spotting them and ruling them out.</p>
//               <div style={S.propertyGrid}>
//                 {PROPERTY_CARDS.map((card, i) => (
//                   <div key={i} style={S.propertyCard}>
//                     <div style={S.propertyCardIcon}>{card.icon}</div>
//                     <h4 style={S.propertyCardH4}>{card.title}</h4>
//                     <p
//                       style={S.propertyCardP}
//                       dangerouslySetInnerHTML={{ __html: card.body }}
//                     />
//                     {card.code && (
//                       <code
//                         style={S.propertyCardCode}
//                         dangerouslySetInnerHTML={{ __html: card.code }}
//                       />
//                     )}
//                     {card.hasOddPyramid && (
//                       <svg viewBox="0 0 200 140" style={S.oddPyramidSvg}>
//                         {/* Row 1: 1³ = 1 */}
//                         <g>
//                           <circle cx="100" cy="20" r="11" fill={DOT_COLORS[0]} />
//                           <text x="100" y="24" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">1</text>
//                         </g>
//                         {/* Row 2: 2³ = 3 + 5 */}
//                         <g>
//                           <circle cx="85" cy="50" r="11" fill={DOT_COLORS[1]} />
//                           <text x="85" y="54" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">3</text>
//                           <circle cx="115" cy="50" r="11" fill={DOT_COLORS[1]} />
//                           <text x="115" y="54" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">5</text>
//                         </g>
//                         {/* Row 3: 3³ = 7 + 9 + 11 */}
//                         <g>
//                           <circle cx="70" cy="80" r="11" fill={DOT_COLORS[2]} />
//                           <text x="70" y="84" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">7</text>
//                           <circle cx="100" cy="80" r="11" fill={DOT_COLORS[2]} />
//                           <text x="100" y="84" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">9</text>
//                           <circle cx="130" cy="80" r="11" fill={DOT_COLORS[2]} />
//                           <text x="130" y="84" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">11</text>
//                         </g>
//                         {/* Row 4: 4³ = 13 + 15 + 17 + 19 */}
//                         <g>
//                           <circle cx="55" cy="110" r="11" fill={DOT_COLORS[3]} />
//                           <text x="55" y="114" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">13</text>
//                           <circle cx="85" cy="110" r="11" fill={DOT_COLORS[3]} />
//                           <text x="85" y="114" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">15</text>
//                           <circle cx="115" cy="110" r="11" fill={DOT_COLORS[3]} />
//                           <text x="115" y="114" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">17</text>
//                           <circle cx="145" cy="110" r="11" fill={DOT_COLORS[3]} />
//                           <text x="145" y="114" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">19</text>
//                         </g>
//                       </svg>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </section>

//             {/* QUIZ */}
//             <section
//               id="sec-quiz"
//               ref={(el) => { sectionRefs.current['sec-quiz'] = el; }}
//               style={S.quizSection}
//             >
//               <QuizWidget
//                 generator={generatePerfectCubeQuestion}
//                 title="Test yourself"
//                 subtitle="Memorize the table by playing. Score persists during your visit."
//                 allowReset={true}
//                 historyLimit={25}
//               />
//             </section>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PerfectCubesPage;


import { useState, useEffect, useRef } from 'react';
import QuizWidget from '../examples/quiz/QuizWidget'
import generatePerfectCubeQuestion from '../examples/quiz/questions/perfectCubesQuestions';
import {processContent } from '../../utils/contentProcessor'

// =========================================================
//   PerfectCubesPage
//   Main page component for /tables/arithmetics/perfect-cubes.
//   Props:
//     relatedReferences  array  [{ title, sub, href }] — sidebar links
// =========================================================

// ---------- Theme: indigo (matches PerfectSquaresPage) ----------
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
  warn:         '#f59e0b',
  warnBg:       '#fef3c7',
  warnText:     '#92400e',
  shadowSm:     '0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)',
  shadowMd:     '0 4px 12px rgba(15,23,42,0.08)',
  shadowLg:     '0 8px 24px rgba(15,23,42,0.10)',
};

// Cell background by ROOT's last digit (root % 10).
// Fixed digits (0,1,4,5,6,9) → pale indigo; swap 2↔8 → amber; swap 3↔7 → pink.
const LD_BG = {
  0: '#eef2ff', 1: '#eef2ff', 4: '#eef2ff',
  5: '#eef2ff', 6: '#eef2ff', 9: '#eef2ff',
  2: '#fef3c7', 8: '#fef3c7',
  3: '#fce7f3', 7: '#fce7f3',
};

const DOT_COLORS = ['#3730a3', '#4f46e5', '#6366f1', '#8b5cf6', '#a78bfa'];

// ---------- Helpers ----------
const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
  return true;
};
const isPalindromeStr = (n) => {
  const s = String(n);
  return s.length > 1 && s === [...s].reverse().join('');
};
const isTriangular = (n) => {
  if (n < 1) return false;
  const x = 8 * n + 1;
  const r = Math.sqrt(x);
  return Number.isInteger(r) && (r - 1) % 2 === 0;
};
const isPerfectSquare = (n) => {
  if (n < 0) return false;
  const r = Math.sqrt(n);
  return Number.isInteger(r);
};
const isPerfectCube = (n) => {
  if (n < 0) return false;
  const r = Math.round(Math.cbrt(n));
  return r * r * r === n;
};
const primeFactor = (n) => {
  const f = {};
  let x = n;
  for (let p = 2; p * p <= x; p++) {
    while (x % p === 0) { f[p] = (f[p] || 0) + 1; x = x / p; }
  }
  if (x > 1) f[x] = (f[x] || 0) + 1;
  return f;
};
const fmtFactors = (f) => {
  const entries = Object.entries(f);
  if (entries.length === 0) return '1';
  return entries.map(([p, e]) => e === 1 ? p : `${p}<sup>${e}</sup>`).join(' &times; ');
};

// ---------- Precomputed: table cells (cubes 1 to 1,000,000) ----------
const STACKS = (() => {
  const out = [];
  for (let s = 0; s < 10; s++) {
    const start = s * 10 + 1;
    const stack = [];
    for (let i = 0; i < 10; i++) {
      const root = start + i;
      const cube = root * root * root;
      stack.push({ root, cube, rootLastDigit: root % 10 });
    }
    out.push(stack);
  }
  return out;
})();

// ---------- Precomputed: filter sets ----------
const FILTER_SETS = (() => {
  const sets = {
    palindrome:     new Set(),
    sixthPower:     new Set(),
    primeRoot:      new Set(),
    triangularRoot: new Set(),
    fixedDigit:     new Set(),
  };
  for (let root = 1; root <= 100; root++) {
    const cube = root * root * root;
    if (isPalindromeStr(cube))   sets.palindrome.add(cube);
    if (isPerfectSquare(cube))   sets.sixthPower.add(cube);
    if (isPrime(root))           sets.primeRoot.add(cube);
    if (isTriangular(root))      sets.triangularRoot.add(cube);
    const ld = root % 10;
    if ([0, 1, 4, 5, 6, 9].includes(ld)) sets.fixedDigit.add(cube);
  }
  return sets;
})();

const FILTER_DEFS = [
  { id: 'palindrome',     icon: '\u2194',     title: 'Palindromic cubes',
    desc: 'Cubes that read the same forwards and backwards.' },
  { id: 'sixthPower',     icon: 'n\u2076',    title: 'Cubes that are also squares',
    desc: 'Sixth powers \u2014 cubes whose root is itself a perfect square.' },
  { id: 'primeRoot',      icon: 'p',          title: 'Cubes with prime roots',
    desc: 'Cubes of prime numbers \u2014 their only divisors are 1, p, p\u00B2, and p\u00B3.' },
  { id: 'triangularRoot', icon: '\u25B3',     title: 'Cubes of triangular numbers',
    desc: 'Cubes whose root is triangular: 1, 3, 6, 10, 15, 21\u2026' },
  { id: 'fixedDigit',     icon: '=',          title: 'Cubes preserving root\u2019s last digit',
    desc: 'Cubes whose last digit matches their root \u2014 happens for roots ending in 0, 1, 4, 5, 6, 9.' },
];

const PROPERTY_CARDS = [
  {
    icon: '\u03A3',
    title: 'Sum of consecutive odd numbers',
    body: 'n\u00B3 equals the sum of n consecutive odd numbers. 1\u00B3=1; 2\u00B3=3+5; 3\u00B3=7+9+11; 4\u00B3=13+15+17+19.',
    hasOddPyramid: true,
  },
  {
    icon: 'd',
    title: 'Last-digit involution',
    body: 'Cubing preserves the last digit for 0, 1, 4, 5, 6, 9 and swaps 2\u2194 8 and 3\u2194 7. So a cube\u2019s last digit fully determines its root\u2019s last digit.',
    code: '\u221B27 ends in 3 \u2192 root ends in 3 \u00B7 \u221B512 ends in 2 \u2192 root ends in 8',
  },
  {
    icon: '\u0394',
    title: 'Gap = 3n\u00B2 + 3n + 1',
    body: 'The difference between n\u00B3 and (n+1)\u00B3 is always 3n\u00B2 + 3n + 1.',
    code: '10\u00B3=1000, 11\u00B3=1331, gap=331=3(100)+3(10)+1',
  },
  {
    icon: 'mod',
    title: 'Mod 9 rule',
    body: 'Every perfect cube is 0, 1, or 8 mod 9 \u2014 never 2, 3, 4, 5, 6, or 7. A fast rejection test.',
    code: '1543 mod 9 = 7 \u2192 not a cube',
  },
];

const TOC_ITEMS = [
  { id: 'sec-tool',       label: 'Cube tool' },
  { id: 'sec-table',      label: 'The table' },
  { id: 'sec-patterns',   label: 'Patterns & filters' },
  { id: 'sec-properties', label: 'Properties' },
  { id: 'sec-quiz',       label: 'Test yourself' },
];

// LD pills for cubes — show the involution: 10 pills, color-grouped.
const LD_PILLS = [
  { from: 0, to: 0, kind: 'fixed' },
  { from: 1, to: 1, kind: 'fixed' },
  { from: 2, to: 8, kind: 'swap28' },
  { from: 3, to: 7, kind: 'swap37' },
  { from: 4, to: 4, kind: 'fixed' },
  { from: 5, to: 5, kind: 'fixed' },
  { from: 6, to: 6, kind: 'fixed' },
  { from: 7, to: 3, kind: 'swap37' },
  { from: 8, to: 2, kind: 'swap28' },
  { from: 9, to: 9, kind: 'fixed' },
];
const PILL_STYLES = {
  fixed:  { bg: '#eef2ff', fg: '#3730a3' },
  swap28: { bg: '#fef3c7', fg: '#92400e' },
  swap37: { bg: '#fce7f3', fg: '#9d174d' },
};

const TABLE_MAX = 1000000; // 100³

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
  breadcrumb: { fontSize: '14px', color: C.textMuted, marginBottom: '24px' },
  breadcrumbLink: { color: C.primary, textDecoration: 'none', fontWeight: 500, cursor: 'pointer' },
  pageLayout: {
    position: 'relative',
  },
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
  pageTitle: {
    fontFamily: "'Crimson Pro', Georgia, serif",
    fontSize: '44px', fontWeight: 700, color: '#1e3a8a',
    textAlign: 'center', margin: '0 0 24px 0', letterSpacing: '-0.5px',
  },
  aboutTable: {
    maxWidth: '620px', margin: '0 auto 36px', background: 'white',
    border: `1px solid ${C.border}`, borderRadius: '14px',
    overflow: 'hidden', boxShadow: C.shadowSm,
  },
  aboutSummary: {
    padding: '14px 22px', cursor: 'pointer',
    display: 'flex', alignItems: 'center', gap: '12px',
    color: C.primary, fontWeight: 600, listStyle: 'none',
  },
  aboutIcon: {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: '26px', height: '26px', background: C.primary, color: 'white',
    borderRadius: '50%', fontSize: '14px', fontWeight: 700,
  },
  aboutToggle: { marginLeft: 'auto', fontSize: '22px', lineHeight: 1 },
  aboutContent: {
    padding: '16px 22px 22px', color: C.textMuted,
    borderTop: `1px solid ${C.borderSoft}`, fontSize: '15px',
  },
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
  tableGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '26px 12px', marginBottom: '36px',
  },
  stack: { display: 'flex', flexDirection: 'column', gap: '6px' },
  stackTitle: {
    background: `linear-gradient(135deg, ${C.primary} 0%, #6366f1 100%)`,
    color: 'white', padding: '10px 12px', borderRadius: '10px',
    textAlign: 'center', fontSize: '12px', fontWeight: 700,
    letterSpacing: '0.3px', marginBottom: '6px',
    boxShadow: '0 4px 12px rgba(79,70,229,0.22)',
  },
  cell: {
    padding: '9px 8px',
    border: `1px solid ${C.borderSoft}`, borderRadius: '8px',
    fontSize: '12px', textAlign: 'center', cursor: 'pointer',
    position: 'relative',
    transition: 'transform 0.15s, box-shadow 0.15s, border-color 0.15s, opacity 0.2s',
  },
  cbrtSym: { color: C.primary, fontWeight: 700 },
  cellRoot: { fontWeight: 700 },
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
    fontSize: '19px', fontWeight: 700,
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
  oddPyramidSvg: {
    display: 'block', margin: '10px 0 0',
    background: C.bg, borderRadius: '8px', padding: '8px',
    width: '180px', height: '130px',
  },
  quizSection: { marginTop: '56px' },
};

// ---------- CSS (pseudo-classes, hover, media queries) ----------
const CSS = `
.pcp-toc-link:hover {
  color: ${C.primary};
}
.pcp-related-mini:hover {
  border-color: ${C.primary} !important;
  transform: translateX(2px);
  box-shadow: ${C.shadowSm};
}
.pcp-input-field:focus {
  border-color: ${C.primary} !important;
  box-shadow: 0 0 0 4px rgba(79,70,229,0.12);
}
.pcp-input-btn:hover { background: ${C.primaryDark} !important; }
.pcp-input-btn:active { transform: translateY(1px); }
.pcp-mode-tab:not(.active):hover { color: ${C.primary} !important; }
.pcp-cell:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(15,23,42,0.10);
  border-color: ${C.primary};
  z-index: 5;
}
.pcp-cell::after {
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
.pcp-cell:hover::after { opacity: 1; }
.pcp-cell.highlight {
  border: 2px solid ${C.warn} !important;
  box-shadow: 0 0 0 3px rgba(245,158,11,0.35), 0 6px 16px rgba(245,158,11,0.25);
  transform: scale(1.05);
  z-index: 4;
}
.pcp-cell.filter-match {
  border: 2px solid ${C.warn} !important;
  box-shadow: 0 4px 14px rgba(245,158,11,0.35);
  transform: scale(1.04);
  z-index: 3;
}
.pcp-cell.filter-dim { opacity: 0.28; }
.pcp-filter-card:hover {
  transform: translateY(-3px);
  box-shadow: ${C.shadowMd};
  border-color: ${C.border} !important;
}
.pcp-filter-card.active {
  border-color: ${C.warn} !important;
  background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%) !important;
  box-shadow: 0 0 0 4px rgba(245,158,11,0.18), ${C.shadowMd};
}
.pcp-filter-card.active::after {
  content: '\u25CF Active';
  position: absolute;
  top: 12px;
  right: 14px;
  font-size: 11px;
  font-weight: 700;
  color: ${C.warnText};
  letter-spacing: 0.5px;
}
.pcp-filter-card.active .pcp-filter-icon {
  background: linear-gradient(135deg, ${C.warn} 0%, #fb923c 100%) !important;
  box-shadow: 0 4px 10px rgba(245,158,11,0.3) !important;
}
.pcp-filter-card.active .pcp-filter-count,
.pcp-filter-card.active .pcp-filter-action {
  color: ${C.warnText} !important;
}
.pcp-about-summary::-webkit-details-marker { display: none; }
.pcp-sidebar-sticky::-webkit-scrollbar { width: 4px; }
.pcp-sidebar-sticky::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 4px; }
.pcp-close-details:hover { background: #e5e7eb !important; color: ${C.text} !important; }
@keyframes pcpSlideIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}
.pcp-cell-details { animation: pcpSlideIn 0.25s ease; }

/* Hide the absolute sidebar when the viewport is too narrow to fit it */
@media (max-width: 1320px) {
  .pcp-sidebar { display: none !important; }
}
@media (max-width: 640px) {
  .pcp-page-title { font-size: 32px !important; }
  .pcp-table-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .pcp-input-block { flex-direction: column !important; align-items: stretch !important; }
  .pcp-input-block input { width: 100% !important; }
  .pcp-input-block button { width: 100% !important; }
  .pcp-range-sep { text-align: center; }
  .pcp-mode-tab { padding: 9px 14px !important; font-size: 13px !important; }
}
@media (max-width: 900px) {
  .pcp-table-grid { grid-template-columns: repeat(3, 1fr) !important; }
}
`;

// ---------- Component ----------
const PerfectCubesPage = ({ relatedReferences = [] }) => {
  // Tool state
  const [mode, setMode] = useState('isCube');
  const [isCubeInput, setIsCubeInput] = useState('');
  const [cubeOfInput, setCubeOfInput] = useState('');
  const [rangeFromInput, setRangeFromInput] = useState('');
  const [rangeToInput, setRangeToInput] = useState('');

  const [statusKind, setStatusKind] = useState(null);
  const [statusIcon, setStatusIcon] = useState('');
  const [statusHtml, setStatusHtml] = useState('');

  // Table state
  const [detailsRoot, setDetailsRoot] = useState(null);
  const [highlightedRoots, setHighlightedRoots] = useState(() => new Set());
  const [activeFilter, setActiveFilter] = useState(null);
  const [activeRange, setActiveRange] = useState(null);

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
    setActiveRange(null);
    setHighlightedRoots(new Set());
    setDetailsRoot(null);
  };

  // ===== Scroll resolver =====
  useEffect(() => {
    if (!pendingScroll) return;
    let el = null;
    if (pendingScroll.type === 'cell') {
      el = cellRefs.current[pendingScroll.root];
    } else if (pendingScroll.type === 'table') {
      el = sectionRefs.current['sec-table'];
    } else if (pendingScroll.type === 'details') {
      el = document.getElementById('pcp-cell-details');
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

  // ===== Tool: Mode 1 (Is N a cube?) =====
  const runIsCube = () => {
    const n = parseInt(isCubeInput, 10);
    if (isNaN(n) || n < 0) {
      setStatus('error', '!', 'Please enter a non-negative integer.');
      return;
    }
    setActiveFilter(null);
    setActiveRange(null);

    if (isPerfectCube(n)) {
      const root = Math.round(Math.cbrt(n));
      if (n <= TABLE_MAX && root >= 1) {
        setHighlightedRoots(new Set([root]));
        setDetailsRoot(root);
        setPendingScroll({ type: 'cell', root });
        setStatus('success', '\u2713',
          `<strong>${n.toLocaleString()}</strong> is a perfect cube &mdash; &#8731;${n} = <strong>${root}</strong>. Cell highlighted and details opened below.`);
      } else {
        setHighlightedRoots(new Set());
        setDetailsRoot(null);
        setStatus('success', '\u2713',
          `<strong>${n.toLocaleString()}</strong> is a perfect cube &mdash; &#8731;${n.toLocaleString()} = <strong>${root}</strong>. Outside this 1&ndash;1,000,000 table.`);
      }
    } else {
      const cbrt = Math.cbrt(n);
      const lower = Math.floor(cbrt);
      const upper = lower + 1;
      const lowerCube = lower * lower * lower;
      const upperCube = upper * upper * upper;
      const lowerIn = lowerCube <= TABLE_MAX && lowerCube > 0;
      const upperIn = upperCube <= TABLE_MAX;

      const roots = new Set();
      if (lowerIn) roots.add(lower);
      if (upperIn) roots.add(upper);
      setHighlightedRoots(roots);
      setDetailsRoot(null);

      if (lowerIn)      setPendingScroll({ type: 'cell', root: lower });
      else if (upperIn) setPendingScroll({ type: 'cell', root: upper });

      let msg = `<strong>${n.toLocaleString()}</strong> is not a perfect cube (&#8731; &asymp; ${cbrt.toFixed(4)}). `;
      if (lowerIn && upperIn) {
        msg += `Nearest: <strong>${lowerCube.toLocaleString()}</strong> = ${lower}&sup3; and <strong>${upperCube.toLocaleString()}</strong> = ${upper}&sup3;. Both highlighted below.`;
      } else if (lowerIn) {
        msg += `Nearest in table: <strong>${lowerCube.toLocaleString()}</strong> = ${lower}&sup3; (highlighted). ${upperCube.toLocaleString()} = ${upper}&sup3; is outside the table.`;
      } else if (upperIn) {
        msg += `Nearest in table: <strong>${upperCube.toLocaleString()}</strong> = ${upper}&sup3; (highlighted). ${lowerCube.toLocaleString()} = ${lower}&sup3; is outside the table.`;
      } else {
        msg += `Nearest perfect cubes (${lowerCube.toLocaleString()} and ${upperCube.toLocaleString()}) are outside this table.`;
      }
      setStatus('error', '\u2717', msg);
    }
  };

  // ===== Tool: Mode 2 (Cube of N) =====
  const runCubeOf = () => {
    const n = parseInt(cubeOfInput, 10);
    if (isNaN(n) || n < 0) {
      setStatus('error', '!', 'Please enter a non-negative integer.');
      return;
    }
    setActiveFilter(null);
    setActiveRange(null);

    const cube = n * n * n;
    if (cube <= TABLE_MAX && n >= 1) {
      setHighlightedRoots(new Set([n]));
      setDetailsRoot(n);
      setPendingScroll({ type: 'cell', root: n });
      setStatus('success', '=',
        `<strong>${n}&sup3; = ${cube.toLocaleString()}</strong>. Cell highlighted and details opened below.`);
    } else {
      setHighlightedRoots(new Set());
      setDetailsRoot(null);
      setStatus('info', '=',
        `<strong>${n}&sup3; = ${cube.toLocaleString()}</strong>. Outside this 1&ndash;1,000,000 table.`);
    }
  };

  // ===== Tool: Mode 3 (Range) =====
  const runRange = () => {
    let from = parseInt(rangeFromInput, 10);
    let to = parseInt(rangeToInput, 10);
    if (isNaN(from) || isNaN(to) || from < 0 || to < 0) {
      setStatus('error', '!', 'Please enter two non-negative integers.');
      return;
    }
    if (from > to) [from, to] = [to, from];

    setHighlightedRoots(new Set());
    setDetailsRoot(null);

    const lowRoot = Math.ceil(Math.cbrt(from));
    const highRoot = Math.floor(Math.cbrt(to));
    const allMatches = [];
    const inTableMatches = [];
    for (let r = lowRoot; r <= highRoot; r++) {
      const cube = r * r * r;
      allMatches.push({ root: r, cube });
      if (cube <= TABLE_MAX) inTableMatches.push({ root: r, cube });
    }

    setActiveFilter(null);

    if (inTableMatches.length > 0) {
      setActiveRange({ from, to, matches: inTableMatches });
      setPendingScroll({ type: 'table' });
    } else {
      setActiveRange(null);
    }

    if (allMatches.length === 0) {
      setStatus('info', '\u2211',
        `No perfect cubes fall between <strong>${from.toLocaleString()}</strong> and <strong>${to.toLocaleString()}</strong>.`);
    } else if (inTableMatches.length === 0) {
      setStatus('info', '\u2211',
        `<strong>${allMatches.length}</strong> perfect cube${allMatches.length === 1 ? '' : 's'} between <strong>${from.toLocaleString()}</strong> and <strong>${to.toLocaleString()}</strong>, but none in this 1&ndash;1,000,000 table.`);
    } else {
      const outside = allMatches.length - inTableMatches.length;
      let msg = `<strong>${inTableMatches.length}</strong> perfect cube${inTableMatches.length === 1 ? '' : 's'} highlighted in the table below`;
      if (outside > 0) msg += ` (${outside} more fall outside the 1&ndash;1,000,000 range)`;
      msg += '.';
      setStatus('success', '\u2211', msg);
    }
  };

  // ===== Filter cards =====
  const toggleFilter = (id) => {
    setHighlightedRoots(new Set());
    setDetailsRoot(null);
    setActiveRange(null);
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
  const handleCellClick = (root) => {
    setDetailsRoot(root);
    setPendingScroll({ type: 'details' });
  };

  // ===== Derived =====
  const getCellClass = (root, cube) => {
    let cls = 'pcp-cell';
    if (highlightedRoots.has(root)) cls += ' highlight';
    if (activeFilter) {
      if (FILTER_SETS[activeFilter].has(cube)) cls += ' filter-match';
      else cls += ' filter-dim';
    } else if (activeRange) {
      if (cube >= activeRange.from && cube <= activeRange.to) cls += ' filter-match';
      else cls += ' filter-dim';
    }
    return cls;
  };
  const getCellBg = (root, cube, rootLastDigit) => {
    if (highlightedRoots.has(root)) return '#fef3c7';
    if (activeFilter && FILTER_SETS[activeFilter].has(cube)) return '#fef3c7';
    if (activeRange && cube >= activeRange.from && cube <= activeRange.to) return '#fef3c7';
    return LD_BG[rootLastDigit] || 'white';
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
  } else if (activeRange) {
    bannerText = `Range ${activeRange.from.toLocaleString()}\u2013${activeRange.to.toLocaleString()}: ${activeRange.matches.length} perfect cube${activeRange.matches.length === 1 ? '' : 's'} highlighted`;
  }
  const showBanner = activeFilter !== null || activeRange !== null;

  const detailsContent = (() => {
    if (detailsRoot === null) return null;
    const root = detailsRoot;
    const cube = root * root * root;
    const props = [];
    if (FILTER_SETS.palindrome.has(cube))     props.push('Palindrome');
    if (FILTER_SETS.sixthPower.has(cube))     props.push('Sixth power (also a square)');
    if (FILTER_SETS.primeRoot.has(cube))      props.push('Prime root');
    if (FILTER_SETS.triangularRoot.has(cube)) props.push('Triangular root');
    if (FILTER_SETS.fixedDigit.has(cube))     props.push('Preserves last digit');
    return {
      root, cube,
      factors: primeFactor(cube),
      rootFactors: primeFactor(root),
      digitSum: cube.toString().split('').reduce((a, b) => a + parseInt(b, 10), 0),
      cubeLastDigit: cube % 10,
      rootLastDigit: root % 10,
      mod9: cube % 9,
      props,
    };
  })();

  const statusIconBg = {
    success: C.success,
    error:   C.error,
    info:    C.primary,
  }[statusKind] || C.primary;

  const modeTabs = [
    { id: 'isCube', label: 'Is N a cube?' },
    { id: 'cubeOf', label: 'Cube of N' },
    { id: 'range',  label: 'Range' },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div style={S.container}>
        <div className="pcp-layout" style={S.pageLayout}>

          {/* ===== SIDEBAR (absolute, anchored to the container's left edge) ===== */}
          <aside className="pcp-sidebar" style={S.sidebar}>
            <div className="pcp-sidebar-sticky" style={S.sidebarSticky}>
              <div style={S.sidebarBlock}>
                <div style={S.sidebarLabel}>On this page</div>
                <ul style={S.tocList}>
                  {TOC_ITEMS.map((item, idx) => (
                    <li key={item.id}>
                      <a
                        className={`pcp-toc-link ${activeSection === item.id ? 'active' : ''}`}
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
                      className="pcp-related-mini"
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
                <h2 style={S.toolH2}>Perfect Cube Tool</h2>
                <p style={S.toolSub}>Every answer takes you to the table. Pick a question:</p>
              </div>

              <div style={S.modeTabsWrap} role="tablist">
                {modeTabs.map((tab) => {
                  const isActive = mode === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      className={`pcp-mode-tab ${isActive ? 'active' : ''}`}
                      style={{ ...S.modeTabBase, ...(isActive ? S.modeTabActive : {}) }}
                      onClick={() => handleModeChange(tab.id)}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {mode === 'isCube' && (
                <div className="pcp-input-block" style={S.inputBlock}>
                  <input
                    type="number"
                    className="pcp-input-field"
                    style={S.inputField}
                    placeholder="Enter a number to test (e.g., 9261)"
                    min="0"
                    value={isCubeInput}
                    onChange={(e) => setIsCubeInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') runIsCube(); }}
                  />
                  <button
                    type="button"
                    className="pcp-input-btn"
                    style={S.inputBtn}
                    onClick={runIsCube}
                  >
                    Test
                  </button>
                </div>
              )}

              {mode === 'cubeOf' && (
                <div className="pcp-input-block" style={S.inputBlock}>
                  <input
                    type="number"
                    className="pcp-input-field"
                    style={S.inputField}
                    placeholder="Enter a number to cube (e.g., 21)"
                    min="0"
                    value={cubeOfInput}
                    onChange={(e) => setCubeOfInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') runCubeOf(); }}
                  />
                  <button
                    type="button"
                    className="pcp-input-btn"
                    style={S.inputBtn}
                    onClick={runCubeOf}
                  >
                    Compute
                  </button>
                </div>
              )}

              {mode === 'range' && (
                <div className="pcp-input-block" style={S.inputBlock}>
                  <input
                    type="number"
                    className="pcp-input-field"
                    style={S.inputField}
                    placeholder="From..."
                    min="0"
                    value={rangeFromInput}
                    onChange={(e) => setRangeFromInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') runRange(); }}
                  />
                  <span className="pcp-range-sep" style={S.rangeSep}>to</span>
                  <input
                    type="number"
                    className="pcp-input-field"
                    style={S.inputField}
                    placeholder="To..."
                    min="0"
                    value={rangeToInput}
                    onChange={(e) => setRangeToInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') runRange(); }}
                  />
                  <button
                    type="button"
                    className="pcp-input-btn"
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
                <div style={S.legendTitle}>Last-digit involution</div>
                <div style={S.legendRow}>
                  {LD_PILLS.map((p, i) => {
                    const st = PILL_STYLES[p.kind];
                    return (
                      <span
                        key={i}
                        style={{ ...S.legendPillBase, background: st.bg, color: st.fg }}
                      >
                        {p.from}&sup3; ends in {p.to}
                      </span>
                    );
                  })}
                </div>
                <p style={S.legendNote}>
                  Every digit 0&ndash;9 can be the last digit of a cube. The last digit of n&sup3; is fully determined by the last digit of n: it stays the same for 0, 1, 4, 5, 6, 9 and swaps for 2&harr;8 and 3&harr;7.
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

              <div className="pcp-table-grid" style={S.tableGrid}>
                {STACKS.map((stack, si) => {
                  const firstCube = stack[0].cube;
                  const lastCube = stack[stack.length - 1].cube;
                  return (
                    <div key={si} style={S.stack}>
                      <div style={S.stackTitle}>
                        {firstCube.toLocaleString()} &mdash; {lastCube.toLocaleString()}
                      </div>
                      {stack.map((cell) => {
                        const nextRoot = cell.root + 1;
                        const nextCube = nextRoot * nextRoot * nextRoot;
                        const gap = nextCube - cell.cube;
                        const tooltip = `Next: \u221B${nextCube.toLocaleString()} = ${nextRoot} (gap +${gap.toLocaleString()})`;
                        return (
                          <div
                            key={cell.root}
                            ref={(el) => { cellRefs.current[cell.root] = el; }}
                            className={getCellClass(cell.root, cell.cube)}
                            style={{
                              ...S.cell,
                              background: getCellBg(cell.root, cell.cube, cell.rootLastDigit),
                            }}
                            data-tooltip={tooltip}
                            onClick={() => handleCellClick(cell.root)}
                          >
                            <span style={S.cbrtSym}>&#8731;</span>{cell.cube.toLocaleString()} ={' '}
                            <span style={S.cellRoot}>{cell.root}</span>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>

              {detailsContent && (
                <div id="pcp-cell-details" className="pcp-cell-details" style={S.cellDetails}>
                  <button
                    type="button"
                    className="pcp-close-details"
                    style={S.closeDetails}
                    onClick={() => setDetailsRoot(null)}
                  >
                    &times;
                  </button>
                  <h3 style={S.detailsH3}>
                    {detailsContent.cube.toLocaleString()} = {detailsContent.root}<sup>3</sup>
                  </h3>
                  <div style={S.detailGrid}>
                    <div style={S.detailItem}>
                      <div style={S.detailLabel}>Prime factorization (cube)</div>
                      <div
                        style={S.detailValue}
                        dangerouslySetInnerHTML={{ __html: fmtFactors(detailsContent.factors) }}
                      />
                    </div>
                    <div style={S.detailItem}>
                      <div style={S.detailLabel}>Prime factorization (root)</div>
                      <div
                        style={S.detailValue}
                        dangerouslySetInnerHTML={{ __html: fmtFactors(detailsContent.rootFactors) }}
                      />
                    </div>
                    <div style={S.detailItem}>
                      <div style={S.detailLabel}>Sum of digits</div>
                      <div style={S.detailValue}>{detailsContent.digitSum}</div>
                    </div>
                    <div style={S.detailItem}>
                      <div style={S.detailLabel}>Last digit (root &rarr; cube)</div>
                      <div style={S.detailValue}>
                        {detailsContent.rootLastDigit} &rarr; {detailsContent.cubeLastDigit}
                      </div>
                    </div>
                    <div style={S.detailItem}>
                      <div style={S.detailLabel}>Mod 9</div>
                      <div style={S.detailValue}>{detailsContent.mod9}</div>
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
              <p style={S.sectionSub}>Click a card to highlight every matching cube in the table above.</p>
              <div style={S.filterGrid}>
                {FILTER_DEFS.map((f) => {
                  const isActive = activeFilter === f.id;
                  return (
                    <div
                      key={f.id}
                      className={`pcp-filter-card ${isActive ? 'active' : ''}`}
                      style={S.filterCard}
                      onClick={() => toggleFilter(f.id)}
                    >
                      <div className="pcp-filter-icon" style={S.filterIcon}>{f.icon}</div>
                      <h3 style={S.filterCardH3}>{f.title}</h3>
                      <p style={S.filterCardP}>{f.desc}</p>
                      <div style={S.filterCardFooter}>
                        <span className="pcp-filter-count" style={S.filterCount}>{FILTER_SETS[f.id].size} in table</span>
                        <span className="pcp-filter-action" style={S.filterAction}>Click to highlight</span>
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
              <h2 style={S.sectionH}>Properties of perfect cubes</h2>
              <p style={S.sectionSub}>Facts true of every perfect cube &mdash; useful for spotting them and ruling them out.</p>
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
                    {card.hasOddPyramid && (
                      <svg viewBox="0 0 200 140" style={S.oddPyramidSvg}>
                        {/* Row 1: 1³ = 1 */}
                        <g>
                          <circle cx="100" cy="20" r="11" fill={DOT_COLORS[0]} />
                          <text x="100" y="24" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">1</text>
                        </g>
                        {/* Row 2: 2³ = 3 + 5 */}
                        <g>
                          <circle cx="85" cy="50" r="11" fill={DOT_COLORS[1]} />
                          <text x="85" y="54" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">3</text>
                          <circle cx="115" cy="50" r="11" fill={DOT_COLORS[1]} />
                          <text x="115" y="54" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">5</text>
                        </g>
                        {/* Row 3: 3³ = 7 + 9 + 11 */}
                        <g>
                          <circle cx="70" cy="80" r="11" fill={DOT_COLORS[2]} />
                          <text x="70" y="84" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">7</text>
                          <circle cx="100" cy="80" r="11" fill={DOT_COLORS[2]} />
                          <text x="100" y="84" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">9</text>
                          <circle cx="130" cy="80" r="11" fill={DOT_COLORS[2]} />
                          <text x="130" y="84" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">11</text>
                        </g>
                        {/* Row 4: 4³ = 13 + 15 + 17 + 19 */}
                        <g>
                          <circle cx="55" cy="110" r="11" fill={DOT_COLORS[3]} />
                          <text x="55" y="114" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">13</text>
                          <circle cx="85" cy="110" r="11" fill={DOT_COLORS[3]} />
                          <text x="85" y="114" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">15</text>
                          <circle cx="115" cy="110" r="11" fill={DOT_COLORS[3]} />
                          <text x="115" y="114" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">17</text>
                          <circle cx="145" cy="110" r="11" fill={DOT_COLORS[3]} />
                          <text x="145" y="114" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">19</text>
                        </g>
                      </svg>
                    )}
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
                generator={generatePerfectCubeQuestion}
                title="Test yourself"
                subtitle="Memorize the table by playing. Score persists during your visit."
                allowReset={true}
                historyLimit={25}
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfectCubesPage;