// // import { useState, useEffect, useRef } from 'react';
// // import QuizWidget from '../examples/quiz/QuizWidget'
// // import generatePerfectSquareQuestion from '../examples/quiz/questions/perfectSquareQuestions';

// // // =========================================================
// // //   PerfectSquaresPage
// // //   Main page component for /tables/arithmetics/perfect-squares.
// // //   Props:
// // //     relatedReferences  array  [{ title, sub, href }] — sidebar links
// // // =========================================================

// // // ---------- Theme ----------
// // const C = {
// //   primary:      '#4f46e5',
// //   primaryDark:  '#3730a3',
// //   primaryLight: '#eef2ff',
// //   bg:           '#fafbff',
// //   border:       '#e0e7ff',
// //   borderSoft:   '#eef0f7',
// //   text:         '#1e1b4b',
// //   textMuted:    '#64748b',
// //   success:      '#10b981',
// //   successBg:    '#d1fae5',
// //   error:        '#ef4444',
// //   errorBg:      '#fee2e2',
// //   warn:         '#f59e0b',
// //   warnBg:       '#fef3c7',
// //   warnText:     '#92400e',
// //   shadowSm:     '0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)',
// //   shadowMd:     '0 4px 12px rgba(15,23,42,0.08)',
// //   shadowLg:     '0 8px 24px rgba(15,23,42,0.10)',
// // };

// // const LD_BG = {
// //   0: '#f8fafc', 1: '#eff6ff', 4: '#ecfdf5',
// //   5: '#fffbeb', 6: '#fff1f2', 9: '#f5f3ff',
// // };

// // const DOT_COLORS = ['#3730a3', '#4f46e5', '#6366f1', '#8b5cf6', '#a78bfa'];

// // // ---------- Helpers ----------
// // const isPrime = (n) => {
// //   if (n < 2) return false;
// //   for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
// //   return true;
// // };
// // const isPalindromeStr = (n) => {
// //   const s = String(n);
// //   return s.length > 1 && s === [...s].reverse().join('');
// // };
// // const primeFactor = (n) => {
// //   const f = {};
// //   let x = n;
// //   for (let p = 2; p * p <= x; p++) {
// //     while (x % p === 0) { f[p] = (f[p] || 0) + 1; x = x / p; }
// //   }
// //   if (x > 1) f[x] = (f[x] || 0) + 1;
// //   return f;
// // };
// // const fmtFactors = (f) => {
// //   const entries = Object.entries(f);
// //   if (entries.length === 0) return '1';
// //   return entries.map(([p, e]) => e === 1 ? p : `${p}<sup>${e}</sup>`).join(' &times; ');
// // };

// // // ---------- Precomputed: table cells ----------
// // const STACKS = (() => {
// //   const out = [];
// //   for (let s = 0; s < 10; s++) {
// //     const start = s * 10 + 1;
// //     const stack = [];
// //     for (let i = 0; i < 10; i++) {
// //       const root = start + i;
// //       const square = root * root;
// //       stack.push({ root, square, lastDigit: square % 10 });
// //     }
// //     out.push(stack);
// //   }
// //   return out;
// // })();

// // // ---------- Precomputed: filter sets ----------
// // const FILTER_SETS = (() => {
// //   const sets = {
// //     palindrome:        new Set(),
// //     endsIn25:          new Set(),
// //     pythagoreanMember: new Set(),
// //     primeRoot:         new Set(),
// //     squareTriangular:  new Set([1, 36, 1225]),
// //   };
// //   for (let c = 1; c <= 100; c++) {
// //     for (let a = 1; a < c; a++) {
// //       const bsq = c * c - a * a;
// //       const b = Math.sqrt(bsq);
// //       if (Number.isInteger(b) && b > 0 && b <= 100) {
// //         sets.pythagoreanMember.add(a * a);
// //         sets.pythagoreanMember.add(b * b);
// //         sets.pythagoreanMember.add(c * c);
// //       }
// //     }
// //   }
// //   for (let root = 1; root <= 100; root++) {
// //     const sq = root * root;
// //     if (isPalindromeStr(sq))    sets.palindrome.add(sq);
// //     if (sq % 100 === 25)        sets.endsIn25.add(sq);
// //     if (isPrime(root))          sets.primeRoot.add(sq);
// //   }
// //   return sets;
// // })();

// // const FILTER_DEFS = [
// //   { id: 'palindrome',        icon: '\u2194',        title: 'Palindromic squares',
// //     desc: 'Squares that read the same forwards and backwards.' },
// //   { id: 'endsIn25',          icon: '25',            title: 'Squares ending in 25',
// //     desc: 'Every square of a number ending in 5 ends in 25.' },
// //   { id: 'pythagoreanMember', icon: 'a\u00B2+b\u00B2', title: 'Pythagorean triple members',
// //     desc: 'Squares whose root appears in an integer right triangle.' },
// //   { id: 'primeRoot',         icon: 'p',             title: 'Squares with prime roots',
// //     desc: 'Squares of prime numbers \u2014 their only divisors are 1, p, and p\u00B2.' },
// //   { id: 'squareTriangular',  icon: '\u25B3\u25A1',  title: 'Square triangular numbers',
// //     desc: 'Both a perfect square and a triangular number (1+2+...+n).' },
// // ];

// // const PROPERTY_CARDS = [
// //   {
// //     icon: '\u03A3',
// //     title: 'Sum of consecutive odd numbers',
// //     body: 'n\u00B2 equals the sum of the first n odd numbers. So 1+3+5+7+9 = 25 = 5\u00B2.',
// //     hasDotGrid: true,
// //   },
// //   {
// //     icon: 'd',
// //     title: 'Odd number of divisors',
// //     body: 'Perfect squares are the <em>only</em> positive integers with an odd count of divisors. 36 has 9 divisors: 1, 2, 3, 4, 6, 9, 12, 18, 36.',
// //   },
// //   {
// //     icon: '\u0394',
// //     title: 'Gap = next odd number',
// //     body: 'The difference between n\u00B2 and (n+1)\u00B2 is always 2n+1 \u2014 the next odd number.',
// //     code: '10\u00B2=100, 11\u00B2=121, gap=21',
// //   },
// //   {
// //     icon: 'mod',
// //     title: 'Mod 4 rule',
// //     body: 'Every perfect square is 0 or 1 mod 4 \u2014 never 2 or 3. Combined with the last-digit rule, this rejects most non-squares instantly.',
// //     code: '1543 mod 4 = 3 \u2192 not a square',
// //   },
// // ];

// // const TOC_ITEMS = [
// //   { id: 'sec-tool',       label: 'Square tool' },
// //   { id: 'sec-table',      label: 'The table' },
// //   { id: 'sec-patterns',   label: 'Patterns & filters' },
// //   { id: 'sec-properties', label: 'Properties' },
// //   { id: 'sec-quiz',       label: 'Test yourself' },
// // ];

// // const LD_PILLS = [
// //   { d: 0, bg: '#f1f5f9', fg: '#475569' },
// //   { d: 1, bg: '#dbeafe', fg: '#1e40af' },
// //   { d: 4, bg: '#d1fae5', fg: '#065f46' },
// //   { d: 5, bg: '#fef3c7', fg: '#92400e' },
// //   { d: 6, bg: '#ffe4e6', fg: '#9f1239' },
// //   { d: 9, bg: '#ede9fe', fg: '#5b21b6' },
// // ];

// // // ---------- Inline styles ----------
// // const S = {
// //   container: {
// //     maxWidth: '1340px', margin: '0 auto', padding: '28px 24px 80px',
// //     fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
// //     color: C.text,
// //   },
// //   breadcrumb: { fontSize: '14px', color: C.textMuted, marginBottom: '24px' },
// //   breadcrumbLink: { color: C.primary, textDecoration: 'none', fontWeight: 500, cursor: 'pointer' },
// //   pageLayout: { display: 'grid', gridTemplateColumns: '240px 1fr', gap: '40px', alignItems: 'start' },
// //   sidebar: {
// //     position: 'sticky', top: '20px', alignSelf: 'start',
// //     maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', paddingRight: '4px',
// //   },
// //   sidebarBlock: { marginBottom: '32px' },
// //   sidebarLabel: {
// //     fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.2px',
// //     color: C.textMuted, fontWeight: 700, marginBottom: '14px', paddingLeft: '14px',
// //   },
// //   tocList: { listStyle: 'none', margin: 0, padding: 0 },
// //   tocLinkBase: {
// //     display: 'flex', alignItems: 'center', gap: '10px',
// //     padding: '9px 0 9px 14px', borderLeft: `2px solid ${C.borderSoft}`,
// //     color: C.textMuted, textDecoration: 'none', fontSize: '14px',
// //     lineHeight: 1.3, cursor: 'pointer', transition: 'all 0.15s',
// //   },
// //   tocNumBase: {
// //     display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
// //     width: '22px', height: '22px', borderRadius: '50%',
// //     background: C.borderSoft, color: C.textMuted,
// //     fontSize: '11px', fontWeight: 700, flexShrink: 0, transition: 'all 0.15s',
// //   },
// //   relatedMini: {
// //     display: 'block', padding: '11px 14px', background: 'white',
// //     border: `1px solid ${C.borderSoft}`, borderRadius: '9px',
// //     textDecoration: 'none', color: 'inherit',
// //     marginBottom: '8px', transition: 'all 0.15s', cursor: 'pointer',
// //   },
// //   relatedMiniTitle: { fontWeight: 600, color: C.primaryDark, fontSize: '13px', marginBottom: '2px' },
// //   relatedMiniSub: { fontSize: '12px', color: C.textMuted },
// //   mainCol: { minWidth: 0 },
// //   pageTitle: {
// //     fontFamily: "'Crimson Pro', Georgia, serif",
// //     fontSize: '44px', fontWeight: 700, color: '#1e3a8a',
// //     textAlign: 'center', margin: '0 0 24px 0', letterSpacing: '-0.5px',
// //   },
// //   aboutTable: {
// //     maxWidth: '620px', margin: '0 auto 36px', background: 'white',
// //     border: `1px solid ${C.border}`, borderRadius: '14px',
// //     overflow: 'hidden', boxShadow: C.shadowSm,
// //   },
// //   aboutSummary: {
// //     padding: '14px 22px', cursor: 'pointer',
// //     display: 'flex', alignItems: 'center', gap: '12px',
// //     color: C.primary, fontWeight: 600, listStyle: 'none',
// //   },
// //   aboutIcon: {
// //     display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
// //     width: '26px', height: '26px', background: C.primary, color: 'white',
// //     borderRadius: '50%', fontSize: '14px', fontWeight: 700,
// //   },
// //   aboutToggle: { marginLeft: 'auto', fontSize: '22px', lineHeight: 1 },
// //   aboutContent: {
// //     padding: '16px 22px 22px', color: C.textMuted,
// //     borderTop: `1px solid ${C.borderSoft}`, fontSize: '15px',
// //   },
// //   toolSection: {
// //     background: 'linear-gradient(135deg, #eef2ff 0%, #f0f9ff 100%)',
// //     border: `1px solid ${C.border}`, borderRadius: '20px',
// //     padding: '28px 32px', marginBottom: '36px',
// //     position: 'relative', overflow: 'hidden',
// //   },
// //   toolHeader: { position: 'relative', zIndex: 1, marginBottom: '18px' },
// //   toolH2: {
// //     fontFamily: "'Crimson Pro', serif", fontSize: '26px',
// //     color: C.primaryDark, margin: '0 0 4px 0', fontWeight: 700,
// //   },
// //   toolSub: { color: C.textMuted, fontSize: '14px', margin: 0 },
// //   modeTabsWrap: {
// //     position: 'relative', zIndex: 1, display: 'inline-flex',
// //     background: 'white', borderRadius: '12px', padding: '4px',
// //     marginBottom: '14px', border: `1px solid ${C.border}`,
// //     boxShadow: C.shadowSm, gap: '2px', flexWrap: 'wrap',
// //   },
// //   modeTabBase: {
// //     padding: '9px 18px', borderRadius: '9px', fontSize: '14px',
// //     fontWeight: 600, cursor: 'pointer', background: 'transparent',
// //     border: 'none', transition: 'all 0.18s',
// //     fontFamily: 'inherit', color: C.textMuted,
// //   },
// //   modeTabActive: {
// //     background: C.primary, color: 'white',
// //     boxShadow: '0 2px 6px rgba(79, 70, 229, 0.30)',
// //   },
// //   inputBlock: {
// //     display: 'flex', gap: '10px', marginBottom: '8px',
// //     position: 'relative', zIndex: 1,
// //     alignItems: 'center', flexWrap: 'wrap',
// //   },
// //   inputField: {
// //     flex: 1, minWidth: '140px', padding: '13px 18px',
// //     border: `2px solid ${C.border}`, borderRadius: '11px',
// //     fontSize: '15px', outline: 'none', background: 'white',
// //     transition: 'border-color 0.15s, box-shadow 0.15s',
// //     fontFamily: 'inherit', color: C.text,
// //   },
// //   inputBtn: {
// //     padding: '13px 26px', background: C.primary, color: 'white',
// //     border: 'none', borderRadius: '11px',
// //     fontWeight: 600, fontSize: '15px', cursor: 'pointer',
// //     transition: 'background 0.15s, transform 0.1s',
// //     fontFamily: 'inherit', whiteSpace: 'nowrap',
// //   },
// //   rangeSep: { color: C.textMuted, fontWeight: 600, fontSize: '14px', padding: '0 2px' },
// //   toolStatus: {
// //     marginTop: '12px', padding: '11px 14px',
// //     background: 'rgba(255, 255, 255, 0.75)',
// //     border: `1px solid ${C.border}`, borderRadius: '10px',
// //     display: 'flex', alignItems: 'flex-start', gap: '10px',
// //     fontSize: '14px', color: C.text, lineHeight: 1.55,
// //     position: 'relative', zIndex: 1,
// //   },
// //   statusIcon: {
// //     width: '22px', height: '22px', borderRadius: '50%',
// //     display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
// //     color: 'white', fontSize: '13px', fontWeight: 700,
// //     flexShrink: 0, marginTop: '1px',
// //   },
// //   legend: {
// //     background: 'white', borderRadius: '16px', padding: '18px 22px',
// //     marginBottom: '22px', border: `1px solid ${C.borderSoft}`,
// //     boxShadow: C.shadowSm,
// //   },
// //   legendTitle: {
// //     fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px',
// //     color: C.textMuted, fontWeight: 700, marginBottom: '12px',
// //   },
// //   legendRow: { display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' },
// //   legendPillBase: { padding: '6px 13px', borderRadius: '9999px', fontSize: '13px', fontWeight: 600 },
// //   legendNote: { fontSize: '14px', color: C.textMuted, margin: 0 },
// //   filterStatus: {
// //     display: 'flex', alignItems: 'center', justifyContent: 'space-between',
// //     padding: '12px 18px',
// //     background: 'linear-gradient(90deg, #fef3c7 0%, #fffbeb 100%)',
// //     border: `1px solid ${C.warn}`, borderRadius: '10px',
// //     marginBottom: '16px', fontSize: '14px',
// //   },
// //   filterStatusText: { color: C.warnText, fontWeight: 600 },
// //   filterClear: {
// //     background: 'white', border: `1px solid ${C.warn}`,
// //     color: C.warnText, padding: '5px 12px', borderRadius: '7px',
// //     fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
// //   },
// //   tableGrid: {
// //     display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
// //     gap: '26px 12px', marginBottom: '36px',
// //   },
// //   stack: { display: 'flex', flexDirection: 'column', gap: '6px' },
// //   stackTitle: {
// //     background: `linear-gradient(135deg, ${C.primary} 0%, #6366f1 100%)`,
// //     color: 'white', padding: '10px 12px', borderRadius: '10px',
// //     textAlign: 'center', fontSize: '13px', fontWeight: 700,
// //     letterSpacing: '0.3px', marginBottom: '6px',
// //     boxShadow: '0 4px 12px rgba(79,70,229,0.22)',
// //   },
// //   cell: {
// //     padding: '9px 10px',
// //     border: `1px solid ${C.borderSoft}`, borderRadius: '8px',
// //     fontSize: '13px', textAlign: 'center', cursor: 'pointer',
// //     position: 'relative',
// //     transition: 'transform 0.15s, box-shadow 0.15s, border-color 0.15s, opacity 0.2s',
// //   },
// //   sqrtSym: { color: C.primary, fontWeight: 700 },
// //   cellRoot: { fontWeight: 700 },
// //   cellDetails: {
// //     background: 'white', border: `1px solid ${C.border}`,
// //     borderRadius: '18px', padding: '28px',
// //     marginBottom: '44px', position: 'relative', boxShadow: C.shadowLg,
// //   },
// //   closeDetails: {
// //     position: 'absolute', top: '16px', right: '16px',
// //     width: '32px', height: '32px', border: 'none',
// //     background: C.borderSoft, borderRadius: '50%',
// //     fontSize: '20px', cursor: 'pointer', color: C.textMuted,
// //     lineHeight: 1, transition: 'background 0.15s', fontFamily: 'inherit',
// //   },
// //   detailsH3: {
// //     fontFamily: "'Crimson Pro', serif", fontSize: '30px',
// //     color: C.primaryDark, fontWeight: 700, margin: '0 0 20px 0',
// //   },
// //   detailGrid: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
// //     gap: '12px',
// //   },
// //   detailItem: {
// //     padding: '14px 16px', background: C.bg,
// //     borderRadius: '10px', border: `1px solid ${C.borderSoft}`,
// //   },
// //   detailLabel: {
// //     fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.8px',
// //     color: C.textMuted, marginBottom: '6px', fontWeight: 700,
// //   },
// //   detailValue: { fontSize: '16px', fontWeight: 700, color: C.text },
// //   propertyBadges: { display: 'flex', flexWrap: 'wrap', gap: '8px' },
// //   badge: {
// //     padding: '5px 12px', background: C.primaryLight,
// //     color: C.primaryDark, borderRadius: '9999px',
// //     fontSize: '12px', fontWeight: 600, border: `1px solid ${C.border}`,
// //   },
// //   sectionH: {
// //     fontFamily: "'Crimson Pro', serif", fontSize: '30px',
// //     color: '#1e3a8a', fontWeight: 700, letterSpacing: '-0.3px',
// //     margin: '0 0 8px 0',
// //   },
// //   sectionSub: { color: C.textMuted, marginBottom: '26px', fontSize: '15px' },
// //   filterGrid: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
// //     gap: '16px', marginBottom: '40px',
// //   },
// //   filterCard: {
// //     background: 'white', border: `2px solid ${C.borderSoft}`,
// //     borderRadius: '14px', padding: '20px',
// //     cursor: 'pointer', transition: 'all 0.18s',
// //     position: 'relative', boxShadow: C.shadowSm,
// //   },
// //   filterIcon: {
// //     width: '44px', height: '44px',
// //     background: `linear-gradient(135deg, ${C.primary} 0%, #6366f1 100%)`,
// //     color: 'white', borderRadius: '12px',
// //     display: 'flex', alignItems: 'center', justifyContent: 'center',
// //     fontSize: '19px', fontWeight: 700,
// //     fontFamily: "'Crimson Pro', serif", marginBottom: '14px',
// //     boxShadow: '0 4px 10px rgba(79,70,229,0.25)',
// //   },
// //   filterCardH3: { fontSize: '16px', fontWeight: 700, color: C.text, margin: '0 0 6px 0' },
// //   filterCardP: { color: C.textMuted, fontSize: '13px', marginBottom: '14px', lineHeight: 1.5 },
// //   filterCardFooter: {
// //     display: 'flex', alignItems: 'center', justifyContent: 'space-between',
// //     paddingTop: '12px', borderTop: `1px solid ${C.borderSoft}`,
// //   },
// //   filterCount: { fontSize: '13px', fontWeight: 700, color: C.primaryDark },
// //   filterAction: {
// //     fontSize: '12px', color: C.textMuted,
// //     textTransform: 'uppercase', letterSpacing: '0.6px', fontWeight: 600,
// //   },
// //   propertiesSection: { marginTop: '32px' },
// //   propertyGrid: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
// //     gap: '16px',
// //   },
// //   propertyCard: {
// //     background: 'white', border: `1px solid ${C.borderSoft}`,
// //     borderRadius: '14px', padding: '22px', boxShadow: C.shadowSm,
// //   },
// //   propertyCardIcon: {
// //     width: '36px', height: '36px',
// //     background: C.primaryLight, color: C.primaryDark, borderRadius: '9px',
// //     display: 'flex', alignItems: 'center', justifyContent: 'center',
// //     fontSize: '17px', fontWeight: 700,
// //     fontFamily: "'Crimson Pro', serif", marginBottom: '12px',
// //   },
// //   propertyCardH4: { fontSize: '15px', fontWeight: 700, color: C.text, margin: '0 0 6px 0' },
// //   propertyCardP: { color: C.textMuted, fontSize: '13px', lineHeight: 1.55, margin: 0 },
// //   propertyCardCode: {
// //     display: 'block', fontFamily: "'Menlo', 'Monaco', monospace",
// //     background: C.bg, padding: '7px 11px', borderRadius: '6px',
// //     fontSize: '12px', marginTop: '8px',
// //     color: C.primaryDark, fontWeight: 600,
// //   },
// //   dotGridSvg: {
// //     display: 'block', margin: '10px 0 0',
// //     background: C.bg, borderRadius: '8px', padding: '8px',
// //     width: '130px', height: '130px',
// //   },
// //   quizSection: { marginTop: '56px' },
// // };

// // // ---------- CSS (pseudo-classes, hover, media queries) ----------
// // const CSS = `
// // .psp-toc-link:hover {
// //   color: ${C.primary};
// // }
// // .psp-related-mini:hover {
// //   border-color: ${C.primary} !important;
// //   transform: translateX(2px);
// //   box-shadow: ${C.shadowSm};
// // }
// // .psp-input-field:focus {
// //   border-color: ${C.primary} !important;
// //   box-shadow: 0 0 0 4px rgba(79,70,229,0.12);
// // }
// // .psp-input-btn:hover { background: ${C.primaryDark} !important; }
// // .psp-input-btn:active { transform: translateY(1px); }
// // .psp-mode-tab:not(.active):hover { color: ${C.primary} !important; }
// // .psp-cell:hover {
// //   transform: translateY(-2px);
// //   box-shadow: 0 6px 16px rgba(15,23,42,0.10);
// //   border-color: ${C.primary};
// //   z-index: 5;
// // }
// // .psp-cell::after {
// //   content: attr(data-tooltip);
// //   position: absolute;
// //   bottom: calc(100% + 8px);
// //   left: 50%;
// //   transform: translateX(-50%);
// //   background: #1e1b4b;
// //   color: white;
// //   padding: 7px 12px;
// //   border-radius: 6px;
// //   font-size: 12px;
// //   white-space: nowrap;
// //   opacity: 0;
// //   pointer-events: none;
// //   transition: opacity 0.15s;
// //   z-index: 20;
// //   font-weight: 500;
// // }
// // .psp-cell:hover::after { opacity: 1; }
// // .psp-cell.highlight {
// //   border: 2px solid ${C.warn} !important;
// //   box-shadow: 0 0 0 3px rgba(245,158,11,0.35), 0 6px 16px rgba(245,158,11,0.25);
// //   transform: scale(1.05);
// //   z-index: 4;
// // }
// // .psp-cell.filter-match {
// //   border: 2px solid ${C.warn} !important;
// //   box-shadow: 0 4px 14px rgba(245,158,11,0.35);
// //   transform: scale(1.04);
// //   z-index: 3;
// // }
// // .psp-cell.filter-dim { opacity: 0.28; }
// // .psp-filter-card:hover {
// //   transform: translateY(-3px);
// //   box-shadow: ${C.shadowMd};
// //   border-color: ${C.border} !important;
// // }
// // .psp-filter-card.active {
// //   border-color: ${C.warn} !important;
// //   background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%) !important;
// //   box-shadow: 0 0 0 4px rgba(245,158,11,0.18), ${C.shadowMd};
// // }
// // .psp-filter-card.active::after {
// //   content: '\u25CF Active';
// //   position: absolute;
// //   top: 12px;
// //   right: 14px;
// //   font-size: 11px;
// //   font-weight: 700;
// //   color: ${C.warnText};
// //   letter-spacing: 0.5px;
// // }
// // .psp-filter-card.active .psp-filter-icon {
// //   background: linear-gradient(135deg, ${C.warn} 0%, #fb923c 100%) !important;
// //   box-shadow: 0 4px 10px rgba(245,158,11,0.3) !important;
// // }
// // .psp-filter-card.active .psp-filter-count,
// // .psp-filter-card.active .psp-filter-action {
// //   color: ${C.warnText} !important;
// // }
// // .psp-about-summary::-webkit-details-marker { display: none; }
// // .psp-sidebar::-webkit-scrollbar { width: 4px; }
// // .psp-sidebar::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 4px; }
// // .psp-close-details:hover { background: #e5e7eb !important; color: ${C.text} !important; }
// // @keyframes pspSlideIn {
// //   from { opacity: 0; transform: translateY(-8px); }
// //   to { opacity: 1; transform: translateY(0); }
// // }
// // .psp-cell-details { animation: pspSlideIn 0.25s ease; }

// // @media (max-width: 1024px) {
// //   .psp-layout { grid-template-columns: 1fr !important; }
// //   .psp-sidebar {
// //     position: static !important;
// //     max-height: none !important;
// //     overflow-y: visible !important;
// //     display: grid !important;
// //     grid-template-columns: 1fr 1fr;
// //     gap: 24px;
// //   }
// //   .psp-table-grid { grid-template-columns: repeat(3, 1fr) !important; }
// // }
// // @media (max-width: 640px) {
// //   .psp-page-title { font-size: 32px !important; }
// //   .psp-sidebar { grid-template-columns: 1fr !important; }
// //   .psp-table-grid { grid-template-columns: repeat(2, 1fr) !important; }
// //   .psp-input-block { flex-direction: column !important; align-items: stretch !important; }
// //   .psp-input-block input { width: 100% !important; }
// //   .psp-input-block button { width: 100% !important; }
// //   .psp-range-sep { text-align: center; }
// //   .psp-mode-tab { padding: 9px 14px !important; font-size: 13px !important; }
// // }
// // `;

// // // ---------- Component ----------
// // const PerfectSquaresPage = ({ relatedReferences = [] }) => {
// //   // Tool state
// //   const [mode, setMode] = useState('isSquare');
// //   const [isSquareInput, setIsSquareInput] = useState('');
// //   const [squareOfInput, setSquareOfInput] = useState('');
// //   const [rangeFromInput, setRangeFromInput] = useState('');
// //   const [rangeToInput, setRangeToInput] = useState('');

// //   const [statusKind, setStatusKind] = useState(null);
// //   const [statusIcon, setStatusIcon] = useState('');
// //   const [statusHtml, setStatusHtml] = useState('');

// //   // Table state
// //   const [detailsRoot, setDetailsRoot] = useState(null);
// //   const [highlightedRoots, setHighlightedRoots] = useState(() => new Set());
// //   const [activeFilter, setActiveFilter] = useState(null);
// //   const [activeRange, setActiveRange] = useState(null);

// //   // TOC + scroll plumbing
// //   const [activeSection, setActiveSection] = useState('sec-tool');
// //   const [pendingScroll, setPendingScroll] = useState(null);

// //   const cellRefs = useRef({});
// //   const sectionRefs = useRef({});

// //   // ===== Helpers =====
// //   const setStatus = (kind, icon, html) => {
// //     setStatusKind(kind); setStatusIcon(icon); setStatusHtml(html);
// //   };
// //   const hideStatus = () => {
// //     setStatusKind(null); setStatusIcon(''); setStatusHtml('');
// //   };
// //   const clearTableHighlights = () => {
// //     setActiveFilter(null);
// //     setActiveRange(null);
// //     setHighlightedRoots(new Set());
// //     setDetailsRoot(null);
// //   };

// //   // ===== Scroll resolver =====
// //   useEffect(() => {
// //     if (!pendingScroll) return;
// //     let el = null;
// //     if (pendingScroll.type === 'cell') {
// //       el = cellRefs.current[pendingScroll.root];
// //     } else if (pendingScroll.type === 'table') {
// //       el = sectionRefs.current['sec-table'];
// //     } else if (pendingScroll.type === 'details') {
// //       el = document.getElementById('psp-cell-details');
// //     }
// //     if (el) {
// //       el.scrollIntoView({
// //         behavior: 'smooth',
// //         block: pendingScroll.type === 'table' ? 'start' : 'center',
// //       });
// //     }
// //     setPendingScroll(null);
// //   }, [pendingScroll]);

// //   // ===== TOC active state =====
// //   useEffect(() => {
// //     const sections = TOC_ITEMS
// //       .map((item) => sectionRefs.current[item.id])
// //       .filter(Boolean);
// //     if (sections.length === 0) return;
// //     const obs = new IntersectionObserver((entries) => {
// //       entries.forEach((e) => {
// //         if (e.isIntersecting) setActiveSection(e.target.id);
// //       });
// //     }, { rootMargin: '-25% 0px -65% 0px' });
// //     sections.forEach((s) => obs.observe(s));
// //     return () => obs.disconnect();
// //   }, []);

// //   // ===== Mode change =====
// //   const handleModeChange = (next) => {
// //     setMode(next);
// //     hideStatus();
// //   };

// //   // ===== Tool: Mode 1 (Is N a square?) =====
// //   const runIsSquare = () => {
// //     const n = parseInt(isSquareInput, 10);
// //     if (isNaN(n) || n < 0) {
// //       setStatus('error', '!', 'Please enter a non-negative integer.');
// //       return;
// //     }
// //     setActiveFilter(null);
// //     setActiveRange(null);

// //     const sqrt = Math.sqrt(n);
// //     if (Number.isInteger(sqrt)) {
// //       if (n <= 10000 && sqrt >= 1) {
// //         setHighlightedRoots(new Set([sqrt]));
// //         setDetailsRoot(sqrt);
// //         setPendingScroll({ type: 'cell', root: sqrt });
// //         setStatus('success', '\u2713',
// //           `<strong>${n.toLocaleString()}</strong> is a perfect square &mdash; &#8730;${n} = <strong>${sqrt}</strong>. Cell highlighted and details opened below.`);
// //       } else {
// //         setHighlightedRoots(new Set());
// //         setDetailsRoot(null);
// //         setStatus('success', '\u2713',
// //           `<strong>${n.toLocaleString()}</strong> is a perfect square &mdash; &#8730;${n} = <strong>${sqrt}</strong>. Outside this 1&ndash;10,000 table.`);
// //       }
// //     } else {
// //       const lower = Math.floor(sqrt);
// //       const upper = lower + 1;
// //       const lowerSq = lower * lower;
// //       const upperSq = upper * upper;
// //       const lowerIn = lowerSq <= 10000 && lowerSq > 0;
// //       const upperIn = upperSq <= 10000;

// //       const roots = new Set();
// //       if (lowerIn) roots.add(lower);
// //       if (upperIn) roots.add(upper);
// //       setHighlightedRoots(roots);
// //       setDetailsRoot(null);

// //       if (lowerIn)      setPendingScroll({ type: 'cell', root: lower });
// //       else if (upperIn) setPendingScroll({ type: 'cell', root: upper });

// //       let msg = `<strong>${n.toLocaleString()}</strong> is not a perfect square (&#8730; &asymp; ${sqrt.toFixed(4)}). `;
// //       if (lowerIn && upperIn) {
// //         msg += `Nearest: <strong>${lowerSq.toLocaleString()}</strong> = ${lower}&sup2; and <strong>${upperSq.toLocaleString()}</strong> = ${upper}&sup2;. Both highlighted below.`;
// //       } else if (lowerIn) {
// //         msg += `Nearest in table: <strong>${lowerSq.toLocaleString()}</strong> = ${lower}&sup2; (highlighted). ${upperSq.toLocaleString()} = ${upper}&sup2; is outside the table.`;
// //       } else if (upperIn) {
// //         msg += `Nearest in table: <strong>${upperSq.toLocaleString()}</strong> = ${upper}&sup2; (highlighted). ${lowerSq.toLocaleString()} = ${lower}&sup2; is outside the table.`;
// //       } else {
// //         msg += `Nearest perfect squares (${lowerSq.toLocaleString()} and ${upperSq.toLocaleString()}) are outside this table.`;
// //       }
// //       setStatus('error', '\u2717', msg);
// //     }
// //   };

// //   // ===== Tool: Mode 2 (Square of N) =====
// //   const runSquareOf = () => {
// //     const n = parseInt(squareOfInput, 10);
// //     if (isNaN(n) || n < 0) {
// //       setStatus('error', '!', 'Please enter a non-negative integer.');
// //       return;
// //     }
// //     setActiveFilter(null);
// //     setActiveRange(null);

// //     const square = n * n;
// //     if (square <= 10000 && n >= 1) {
// //       setHighlightedRoots(new Set([n]));
// //       setDetailsRoot(n);
// //       setPendingScroll({ type: 'cell', root: n });
// //       setStatus('success', '=',
// //         `<strong>${n}&sup2; = ${square.toLocaleString()}</strong>. Cell highlighted and details opened below.`);
// //     } else {
// //       setHighlightedRoots(new Set());
// //       setDetailsRoot(null);
// //       setStatus('info', '=',
// //         `<strong>${n}&sup2; = ${square.toLocaleString()}</strong>. Outside this 1&ndash;10,000 table.`);
// //     }
// //   };

// //   // ===== Tool: Mode 3 (Range) =====
// //   const runRange = () => {
// //     let from = parseInt(rangeFromInput, 10);
// //     let to = parseInt(rangeToInput, 10);
// //     if (isNaN(from) || isNaN(to) || from < 0 || to < 0) {
// //       setStatus('error', '!', 'Please enter two non-negative integers.');
// //       return;
// //     }
// //     if (from > to) [from, to] = [to, from];

// //     setHighlightedRoots(new Set());
// //     setDetailsRoot(null);

// //     const lowRoot = Math.ceil(Math.sqrt(from));
// //     const highRoot = Math.floor(Math.sqrt(to));
// //     const allMatches = [];
// //     const inTableMatches = [];
// //     for (let r = lowRoot; r <= highRoot; r++) {
// //       const sq = r * r;
// //       allMatches.push({ root: r, square: sq });
// //       if (sq <= 10000) inTableMatches.push({ root: r, square: sq });
// //     }

// //     setActiveFilter(null);

// //     if (inTableMatches.length > 0) {
// //       setActiveRange({ from, to, matches: inTableMatches });
// //       setPendingScroll({ type: 'table' });
// //     } else {
// //       setActiveRange(null);
// //     }

// //     if (allMatches.length === 0) {
// //       setStatus('info', '\u2211',
// //         `No perfect squares fall between <strong>${from.toLocaleString()}</strong> and <strong>${to.toLocaleString()}</strong>.`);
// //     } else if (inTableMatches.length === 0) {
// //       setStatus('info', '\u2211',
// //         `<strong>${allMatches.length}</strong> perfect square${allMatches.length === 1 ? '' : 's'} between <strong>${from.toLocaleString()}</strong> and <strong>${to.toLocaleString()}</strong>, but none in this 1&ndash;10,000 table.`);
// //     } else {
// //       const outside = allMatches.length - inTableMatches.length;
// //       let msg = `<strong>${inTableMatches.length}</strong> perfect square${inTableMatches.length === 1 ? '' : 's'} highlighted in the table below`;
// //       if (outside > 0) msg += ` (${outside} more fall outside the 1&ndash;10,000 range)`;
// //       msg += '.';
// //       setStatus('success', '\u2211', msg);
// //     }
// //   };

// //   // ===== Filter cards =====
// //   const toggleFilter = (id) => {
// //     setHighlightedRoots(new Set());
// //     setDetailsRoot(null);
// //     setActiveRange(null);
// //     if (activeFilter === id) {
// //       setActiveFilter(null);
// //       hideStatus();
// //     } else {
// //       setActiveFilter(id);
// //       hideStatus();
// //       setPendingScroll({ type: 'table' });
// //     }
// //   };

// //   const handleClearHighlights = () => {
// //     clearTableHighlights();
// //     hideStatus();
// //   };

// //   // ===== Cell interaction =====
// //   const handleCellClick = (root) => {
// //     setDetailsRoot(root);
// //     setPendingScroll({ type: 'details' });
// //   };

// //   // ===== Derived =====
// //   const getCellClass = (root, square) => {
// //     let cls = 'psp-cell';
// //     if (highlightedRoots.has(root)) cls += ' highlight';
// //     if (activeFilter) {
// //       if (FILTER_SETS[activeFilter].has(square)) cls += ' filter-match';
// //       else cls += ' filter-dim';
// //     } else if (activeRange) {
// //       if (square >= activeRange.from && square <= activeRange.to) cls += ' filter-match';
// //       else cls += ' filter-dim';
// //     }
// //     return cls;
// //   };
// //   const getCellBg = (root, square, lastDigit) => {
// //     if (highlightedRoots.has(root)) return '#fef3c7';
// //     if (activeFilter && FILTER_SETS[activeFilter].has(square)) return '#fef3c7';
// //     if (activeRange && square >= activeRange.from && square <= activeRange.to) return '#fef3c7';
// //     return LD_BG[lastDigit] || 'white';
// //   };
// //   const tocLinkStyle = (id) => {
// //     const base = { ...S.tocLinkBase };
// //     if (activeSection === id) {
// //       base.color = C.primaryDark;
// //       base.borderLeftColor = C.primary;
// //       base.fontWeight = 600;
// //       base.background = `linear-gradient(90deg, ${C.primaryLight} 0%, transparent 100%)`;
// //     }
// //     return base;
// //   };
// //   const tocNumStyle = (id) => {
// //     const base = { ...S.tocNumBase };
// //     if (activeSection === id) {
// //       base.background = C.primary;
// //       base.color = 'white';
// //     }
// //     return base;
// //   };

// //   let bannerText = '';
// //   if (activeFilter) {
// //     const def = FILTER_DEFS.find((f) => f.id === activeFilter);
// //     const count = FILTER_SETS[activeFilter].size;
// //     bannerText = `Filtering: ${def.title} \u2014 ${count} match${count === 1 ? '' : 'es'} highlighted`;
// //   } else if (activeRange) {
// //     bannerText = `Range ${activeRange.from.toLocaleString()}\u2013${activeRange.to.toLocaleString()}: ${activeRange.matches.length} perfect square${activeRange.matches.length === 1 ? '' : 's'} highlighted`;
// //   }
// //   const showBanner = activeFilter !== null || activeRange !== null;

// //   const detailsContent = (() => {
// //     if (detailsRoot === null) return null;
// //     const root = detailsRoot;
// //     const square = root * root;
// //     const props = [];
// //     if (FILTER_SETS.palindrome.has(square))        props.push('Palindrome');
// //     if (FILTER_SETS.pythagoreanMember.has(square)) props.push('Pythagorean triple member');
// //     if (FILTER_SETS.primeRoot.has(square))         props.push('Prime root');
// //     if (FILTER_SETS.squareTriangular.has(square))  props.push('Square triangular');
// //     if (FILTER_SETS.endsIn25.has(square))          props.push('Ends in 25');
// //     return {
// //       root, square,
// //       factors: primeFactor(square),
// //       rootFactors: primeFactor(root),
// //       digitSum: square.toString().split('').reduce((a, b) => a + parseInt(b, 10), 0),
// //       props,
// //     };
// //   })();

// //   const statusIconBg = {
// //     success: C.success,
// //     error:   C.error,
// //     info:    C.primary,
// //   }[statusKind] || C.primary;

// //   const modeTabs = [
// //     { id: 'isSquare', label: 'Is N a square?' },
// //     { id: 'squareOf', label: 'Square of N' },
// //     { id: 'range',    label: 'Range' },
// //   ];

// //   return (
// //     <>
// //       <style dangerouslySetInnerHTML={{ __html: CSS }} />
// //       <div style={S.container}>
// //         <nav style={S.breadcrumb}>
// //           <a style={S.breadcrumbLink}>Home</a> / <a style={S.breadcrumbLink}>tables</a> / <a style={S.breadcrumbLink}>arithmetics</a> / <span>perfect-squares</span>
// //         </nav>

// //         <div className="psp-layout" style={S.pageLayout}>

// //           {/* ===== SIDEBAR ===== */}
// //           <aside className="psp-sidebar" style={S.sidebar}>
// //             <div style={S.sidebarBlock}>
// //               <div style={S.sidebarLabel}>On this page</div>
// //               <ul style={S.tocList}>
// //                 {TOC_ITEMS.map((item, idx) => (
// //                   <li key={item.id}>
// //                     <a
// //                       className={`psp-toc-link ${activeSection === item.id ? 'active' : ''}`}
// //                       style={tocLinkStyle(item.id)}
// //                       onClick={(e) => {
// //                         e.preventDefault();
// //                         const t = sectionRefs.current[item.id];
// //                         if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
// //                       }}
// //                     >
// //                       <span style={tocNumStyle(item.id)}>{idx + 1}</span>
// //                       {item.label}
// //                     </a>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>

// //             {relatedReferences && relatedReferences.length > 0 && (
// //               <div style={S.sidebarBlock}>
// //                 <div style={S.sidebarLabel}>Related references</div>
// //                 {relatedReferences.map((ref, idx) => (
// //                   <a
// //                     key={idx}
// //                     href={ref.href}
// //                     className="psp-related-mini"
// //                     style={S.relatedMini}
// //                   >
// //                     <div style={S.relatedMiniTitle}>{ref.title}</div>
// //                     {ref.sub && <div style={S.relatedMiniSub}>{ref.sub}</div>}
// //                   </a>
// //                 ))}
// //               </div>
// //             )}
// //           </aside>

// //           {/* ===== MAIN ===== */}
// //           <div style={S.mainCol}>
// //             <h1 className="psp-page-title" style={S.pageTitle}>Perfect Squares 1 &mdash; 10000</h1>

// //             <details style={S.aboutTable}>
// //               <summary className="psp-about-summary" style={S.aboutSummary}>
// //                 <span style={S.aboutIcon}>?</span>
// //                 About This Table
// //                 <span style={S.aboutToggle}>+</span>
// //               </summary>
// //               <div style={S.aboutContent}>
// //                 Every perfect square from 1 to 10,000 with its square root. Use the tool below to navigate by question: is a number a perfect square, what is N&sup2;, or which squares fall in a range. Each answer highlights the relevant cell(s) and opens its details panel.
// //               </div>
// //             </details>

// //             {/* TOOL */}
// //             <section
// //               id="sec-tool"
// //               ref={(el) => { sectionRefs.current['sec-tool'] = el; }}
// //               style={S.toolSection}
// //             >
// //               <div style={S.toolHeader}>
// //                 <h2 style={S.toolH2}>Perfect Square Tool</h2>
// //                 <p style={S.toolSub}>Every answer takes you to the table. Pick a question:</p>
// //               </div>

// //               <div style={S.modeTabsWrap} role="tablist">
// //                 {modeTabs.map((tab) => {
// //                   const isActive = mode === tab.id;
// //                   return (
// //                     <button
// //                       key={tab.id}
// //                       type="button"
// //                       className={`psp-mode-tab ${isActive ? 'active' : ''}`}
// //                       style={{ ...S.modeTabBase, ...(isActive ? S.modeTabActive : {}) }}
// //                       onClick={() => handleModeChange(tab.id)}
// //                     >
// //                       {tab.label}
// //                     </button>
// //                   );
// //                 })}
// //               </div>

// //               {mode === 'isSquare' && (
// //                 <div className="psp-input-block" style={S.inputBlock}>
// //                   <input
// //                     type="number"
// //                     className="psp-input-field"
// //                     style={S.inputField}
// //                     placeholder="Enter a number to test (e.g., 1764)"
// //                     min="0"
// //                     value={isSquareInput}
// //                     onChange={(e) => setIsSquareInput(e.target.value)}
// //                     onKeyDown={(e) => { if (e.key === 'Enter') runIsSquare(); }}
// //                   />
// //                   <button
// //                     type="button"
// //                     className="psp-input-btn"
// //                     style={S.inputBtn}
// //                     onClick={runIsSquare}
// //                   >
// //                     Test
// //                   </button>
// //                 </div>
// //               )}

// //               {mode === 'squareOf' && (
// //                 <div className="psp-input-block" style={S.inputBlock}>
// //                   <input
// //                     type="number"
// //                     className="psp-input-field"
// //                     style={S.inputField}
// //                     placeholder="Enter a number to square (e.g., 47)"
// //                     min="0"
// //                     value={squareOfInput}
// //                     onChange={(e) => setSquareOfInput(e.target.value)}
// //                     onKeyDown={(e) => { if (e.key === 'Enter') runSquareOf(); }}
// //                   />
// //                   <button
// //                     type="button"
// //                     className="psp-input-btn"
// //                     style={S.inputBtn}
// //                     onClick={runSquareOf}
// //                   >
// //                     Compute
// //                   </button>
// //                 </div>
// //               )}

// //               {mode === 'range' && (
// //                 <div className="psp-input-block" style={S.inputBlock}>
// //                   <input
// //                     type="number"
// //                     className="psp-input-field"
// //                     style={S.inputField}
// //                     placeholder="From..."
// //                     min="0"
// //                     value={rangeFromInput}
// //                     onChange={(e) => setRangeFromInput(e.target.value)}
// //                     onKeyDown={(e) => { if (e.key === 'Enter') runRange(); }}
// //                   />
// //                   <span className="psp-range-sep" style={S.rangeSep}>to</span>
// //                   <input
// //                     type="number"
// //                     className="psp-input-field"
// //                     style={S.inputField}
// //                     placeholder="To..."
// //                     min="0"
// //                     value={rangeToInput}
// //                     onChange={(e) => setRangeToInput(e.target.value)}
// //                     onKeyDown={(e) => { if (e.key === 'Enter') runRange(); }}
// //                   />
// //                   <button
// //                     type="button"
// //                     className="psp-input-btn"
// //                     style={S.inputBtn}
// //                     onClick={runRange}
// //                   >
// //                     Find
// //                   </button>
// //                 </div>
// //               )}

// //               {statusKind && (
// //                 <div style={S.toolStatus}>
// //                   <span style={{ ...S.statusIcon, background: statusIconBg }}>{statusIcon}</span>
// //                   <span dangerouslySetInnerHTML={{ __html: statusHtml }} />
// //                 </div>
// //               )}
// //             </section>

// //             {/* TABLE */}
// //             <section
// //               id="sec-table"
// //               ref={(el) => { sectionRefs.current['sec-table'] = el; }}
// //             >
// //               <div style={S.legend}>
// //                 <div style={S.legendTitle}>Last-digit color guide</div>
// //                 <div style={S.legendRow}>
// //                   {LD_PILLS.map((p) => (
// //                     <span key={p.d} style={{ ...S.legendPillBase, background: p.bg, color: p.fg }}>
// //                       ends in {p.d}
// //                     </span>
// //                   ))}
// //                 </div>
// //                 <p style={S.legendNote}>
// //                   Every perfect square ends in one of these six digits. Numbers ending in 2, 3, 7, or 8 are never perfect squares.
// //                 </p>
// //               </div>

// //               {showBanner && (
// //                 <div style={S.filterStatus}>
// //                   <span style={S.filterStatusText}>{bannerText}</span>
// //                   <button
// //                     type="button"
// //                     style={S.filterClear}
// //                     onClick={handleClearHighlights}
// //                   >
// //                     Clear highlight
// //                   </button>
// //                 </div>
// //               )}

// //               <div className="psp-table-grid" style={S.tableGrid}>
// //                 {STACKS.map((stack, si) => {
// //                   const firstSq = stack[0].square;
// //                   const lastSq = stack[stack.length - 1].square;
// //                   return (
// //                     <div key={si} style={S.stack}>
// //                       <div style={S.stackTitle}>{firstSq} &mdash; {lastSq}</div>
// //                       {stack.map((cell) => {
// //                         const nextRoot = cell.root + 1;
// //                         const nextSquare = nextRoot * nextRoot;
// //                         const gap = nextSquare - cell.square;
// //                         const tooltip = `Next: \u221A${nextSquare} = ${nextRoot} (gap +${gap})`;
// //                         return (
// //                           <div
// //                             key={cell.root}
// //                             ref={(el) => { cellRefs.current[cell.root] = el; }}
// //                             className={getCellClass(cell.root, cell.square)}
// //                             style={{
// //                               ...S.cell,
// //                               background: getCellBg(cell.root, cell.square, cell.lastDigit),
// //                             }}
// //                             data-tooltip={tooltip}
// //                             onClick={() => handleCellClick(cell.root)}
// //                           >
// //                             <span style={S.sqrtSym}>&#8730;</span>{cell.square} ={' '}
// //                             <span style={S.cellRoot}>{cell.root}</span>
// //                           </div>
// //                         );
// //                       })}
// //                     </div>
// //                   );
// //                 })}
// //               </div>

// //               {detailsContent && (
// //                 <div id="psp-cell-details" className="psp-cell-details" style={S.cellDetails}>
// //                   <button
// //                     type="button"
// //                     className="psp-close-details"
// //                     style={S.closeDetails}
// //                     onClick={() => setDetailsRoot(null)}
// //                   >
// //                     &times;
// //                   </button>
// //                   <h3 style={S.detailsH3}>
// //                     {detailsContent.square.toLocaleString()} = {detailsContent.root}<sup>2</sup>
// //                   </h3>
// //                   <div style={S.detailGrid}>
// //                     <div style={S.detailItem}>
// //                       <div style={S.detailLabel}>Prime factorization (square)</div>
// //                       <div
// //                         style={S.detailValue}
// //                         dangerouslySetInnerHTML={{ __html: fmtFactors(detailsContent.factors) }}
// //                       />
// //                     </div>
// //                     <div style={S.detailItem}>
// //                       <div style={S.detailLabel}>Prime factorization (root)</div>
// //                       <div
// //                         style={S.detailValue}
// //                         dangerouslySetInnerHTML={{ __html: fmtFactors(detailsContent.rootFactors) }}
// //                       />
// //                     </div>
// //                     <div style={S.detailItem}>
// //                       <div style={S.detailLabel}>Sum of digits</div>
// //                       <div style={S.detailValue}>{detailsContent.digitSum}</div>
// //                     </div>
// //                     <div style={S.detailItem}>
// //                       <div style={S.detailLabel}>Last digit</div>
// //                       <div style={S.detailValue}>{detailsContent.square % 10}</div>
// //                     </div>
// //                     {detailsContent.props.length > 0 && (
// //                       <div style={{ ...S.detailItem, gridColumn: '1 / -1' }}>
// //                         <div style={S.detailLabel}>Properties</div>
// //                         <div style={S.propertyBadges}>
// //                           {detailsContent.props.map((p, i) => (
// //                             <span key={i} style={S.badge}>{p}</span>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     )}
// //                   </div>
// //                 </div>
// //               )}
// //             </section>

// //             {/* PATTERNS */}
// //             <section
// //               id="sec-patterns"
// //               ref={(el) => { sectionRefs.current['sec-patterns'] = el; }}
// //             >
// //               <h2 style={S.sectionH}>Patterns to explore</h2>
// //               <p style={S.sectionSub}>Click a card to highlight every matching square in the table above.</p>
// //               <div style={S.filterGrid}>
// //                 {FILTER_DEFS.map((f) => {
// //                   const isActive = activeFilter === f.id;
// //                   return (
// //                     <div
// //                       key={f.id}
// //                       className={`psp-filter-card ${isActive ? 'active' : ''}`}
// //                       style={S.filterCard}
// //                       onClick={() => toggleFilter(f.id)}
// //                     >
// //                       <div className="psp-filter-icon" style={S.filterIcon}>{f.icon}</div>
// //                       <h3 style={S.filterCardH3}>{f.title}</h3>
// //                       <p style={S.filterCardP}>{f.desc}</p>
// //                       <div style={S.filterCardFooter}>
// //                         <span className="psp-filter-count" style={S.filterCount}>{FILTER_SETS[f.id].size} in table</span>
// //                         <span className="psp-filter-action" style={S.filterAction}>Click to highlight</span>
// //                       </div>
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //             </section>

// //             {/* PROPERTIES */}
// //             <section
// //               id="sec-properties"
// //               ref={(el) => { sectionRefs.current['sec-properties'] = el; }}
// //               style={S.propertiesSection}
// //             >
// //               <h2 style={S.sectionH}>Properties of perfect squares</h2>
// //               <p style={S.sectionSub}>Facts true of every perfect square &mdash; useful for spotting them and ruling them out.</p>
// //               <div style={S.propertyGrid}>
// //                 {PROPERTY_CARDS.map((card, i) => (
// //                   <div key={i} style={S.propertyCard}>
// //                     <div style={S.propertyCardIcon}>{card.icon}</div>
// //                     <h4 style={S.propertyCardH4}>{card.title}</h4>
// //                     <p
// //                       style={S.propertyCardP}
// //                       dangerouslySetInnerHTML={{ __html: card.body }}
// //                     />
// //                     {card.code && (
// //                       <code
// //                         style={S.propertyCardCode}
// //                         dangerouslySetInnerHTML={{ __html: card.code }}
// //                       />
// //                     )}
// //                     {card.hasDotGrid && (
// //                       <svg viewBox="0 0 160 160" style={S.dotGridSvg}>
// //                         {Array.from({ length: 5 }, (_, row) =>
// //                           Array.from({ length: 5 }, (_, col) => {
// //                             const layer = Math.max(row, col);
// //                             return (
// //                               <circle
// //                                 key={`${row}-${col}`}
// //                                 cx={16 + col * 28}
// //                                 cy={16 + row * 28}
// //                                 r="9"
// //                                 fill={DOT_COLORS[layer]}
// //                               />
// //                             );
// //                           })
// //                         )}
// //                       </svg>
// //                     )}
// //                   </div>
// //                 ))}
// //               </div>
// //             </section>

// //             {/* QUIZ */}
// //             <section
// //               id="sec-quiz"
// //               ref={(el) => { sectionRefs.current['sec-quiz'] = el; }}
// //               style={S.quizSection}
// //             >
// //               <QuizWidget
// //                 generator={generatePerfectSquareQuestion}
// //                 title="Test yourself"
// //                 subtitle="Memorize the table by playing. Score persists during your visit."
// //               />
// //             </section>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default PerfectSquaresPage;


// import { useState, useEffect, useRef } from 'react';
// import QuizWidget from '../examples/quiz/QuizWidget'
// import generatePerfectSquareQuestion from '../examples/quiz/questions/perfectSquareQuestions';

// // =========================================================
// //   PerfectSquaresPage
// //   Main page component for /tables/arithmetics/perfect-squares.
// //   Props:
// //     relatedReferences  array  [{ title, sub, href }] — sidebar links
// // =========================================================

// // ---------- Theme ----------
// const C = {
//   primary:      '#4f46e5',
//   primaryDark:  '#3730a3',
//   primaryLight: '#eef2ff',
//   bg:           '#fafbff',
//   border:       '#e0e7ff',
//   borderSoft:   '#eef0f7',
//   text:         '#1e1b4b',
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

// const LD_BG = {
//   0: '#f8fafc', 1: '#eff6ff', 4: '#ecfdf5',
//   5: '#fffbeb', 6: '#fff1f2', 9: '#f5f3ff',
// };

// const DOT_COLORS = ['#3730a3', '#4f46e5', '#6366f1', '#8b5cf6', '#a78bfa'];

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

// // ---------- Precomputed: table cells ----------
// const STACKS = (() => {
//   const out = [];
//   for (let s = 0; s < 10; s++) {
//     const start = s * 10 + 1;
//     const stack = [];
//     for (let i = 0; i < 10; i++) {
//       const root = start + i;
//       const square = root * root;
//       stack.push({ root, square, lastDigit: square % 10 });
//     }
//     out.push(stack);
//   }
//   return out;
// })();

// // ---------- Precomputed: filter sets ----------
// const FILTER_SETS = (() => {
//   const sets = {
//     palindrome:        new Set(),
//     endsIn25:          new Set(),
//     pythagoreanMember: new Set(),
//     primeRoot:         new Set(),
//     squareTriangular:  new Set([1, 36, 1225]),
//   };
//   for (let c = 1; c <= 100; c++) {
//     for (let a = 1; a < c; a++) {
//       const bsq = c * c - a * a;
//       const b = Math.sqrt(bsq);
//       if (Number.isInteger(b) && b > 0 && b <= 100) {
//         sets.pythagoreanMember.add(a * a);
//         sets.pythagoreanMember.add(b * b);
//         sets.pythagoreanMember.add(c * c);
//       }
//     }
//   }
//   for (let root = 1; root <= 100; root++) {
//     const sq = root * root;
//     if (isPalindromeStr(sq))    sets.palindrome.add(sq);
//     if (sq % 100 === 25)        sets.endsIn25.add(sq);
//     if (isPrime(root))          sets.primeRoot.add(sq);
//   }
//   return sets;
// })();

// const FILTER_DEFS = [
//   { id: 'palindrome',        icon: '\u2194',        title: 'Palindromic squares',
//     desc: 'Squares that read the same forwards and backwards.' },
//   { id: 'endsIn25',          icon: '25',            title: 'Squares ending in 25',
//     desc: 'Every square of a number ending in 5 ends in 25.' },
//   { id: 'pythagoreanMember', icon: 'a\u00B2+b\u00B2', title: 'Pythagorean triple members',
//     desc: 'Squares whose root appears in an integer right triangle.' },
//   { id: 'primeRoot',         icon: 'p',             title: 'Squares with prime roots',
//     desc: 'Squares of prime numbers \u2014 their only divisors are 1, p, and p\u00B2.' },
//   { id: 'squareTriangular',  icon: '\u25B3\u25A1',  title: 'Square triangular numbers',
//     desc: 'Both a perfect square and a triangular number (1+2+...+n).' },
// ];

// const PROPERTY_CARDS = [
//   {
//     icon: '\u03A3',
//     title: 'Sum of consecutive odd numbers',
//     body: 'n\u00B2 equals the sum of the first n odd numbers. So 1+3+5+7+9 = 25 = 5\u00B2.',
//     hasDotGrid: true,
//   },
//   {
//     icon: 'd',
//     title: 'Odd number of divisors',
//     body: 'Perfect squares are the <em>only</em> positive integers with an odd count of divisors. 36 has 9 divisors: 1, 2, 3, 4, 6, 9, 12, 18, 36.',
//   },
//   {
//     icon: '\u0394',
//     title: 'Gap = next odd number',
//     body: 'The difference between n\u00B2 and (n+1)\u00B2 is always 2n+1 \u2014 the next odd number.',
//     code: '10\u00B2=100, 11\u00B2=121, gap=21',
//   },
//   {
//     icon: 'mod',
//     title: 'Mod 4 rule',
//     body: 'Every perfect square is 0 or 1 mod 4 \u2014 never 2 or 3. Combined with the last-digit rule, this rejects most non-squares instantly.',
//     code: '1543 mod 4 = 3 \u2192 not a square',
//   },
// ];

// const TOC_ITEMS = [
//   { id: 'sec-tool',       label: 'Square tool' },
//   { id: 'sec-table',      label: 'The table' },
//   { id: 'sec-patterns',   label: 'Patterns & filters' },
//   { id: 'sec-properties', label: 'Properties' },
//   { id: 'sec-quiz',       label: 'Test yourself' },
// ];

// const LD_PILLS = [
//   { d: 0, bg: '#f1f5f9', fg: '#475569' },
//   { d: 1, bg: '#dbeafe', fg: '#1e40af' },
//   { d: 4, bg: '#d1fae5', fg: '#065f46' },
//   { d: 5, bg: '#fef3c7', fg: '#92400e' },
//   { d: 6, bg: '#ffe4e6', fg: '#9f1239' },
//   { d: 9, bg: '#ede9fe', fg: '#5b21b6' },
// ];

// // ---------- Inline styles ----------
// const S = {
//   container: {
//     maxWidth: '1340px', margin: '0 auto', padding: '28px 24px 80px',
//     fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
//     color: C.text,
//   },
//   breadcrumb: { fontSize: '14px', color: C.textMuted, marginBottom: '24px' },
//   breadcrumbLink: { color: C.primary, textDecoration: 'none', fontWeight: 500, cursor: 'pointer' },
//   pageLayout: { display: 'grid', gridTemplateColumns: '240px 1fr', gap: '40px', alignItems: 'start' },
//   sidebar: {
//     position: 'sticky', top: '20px', alignSelf: 'start',
//     maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', paddingRight: '4px',
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
//   mainCol: { minWidth: 0 },
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
//     background: 'linear-gradient(135deg, #eef2ff 0%, #f0f9ff 100%)',
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
//     boxShadow: '0 2px 6px rgba(79, 70, 229, 0.30)',
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
//     background: `linear-gradient(135deg, ${C.primary} 0%, #6366f1 100%)`,
//     color: 'white', padding: '10px 12px', borderRadius: '10px',
//     textAlign: 'center', fontSize: '13px', fontWeight: 700,
//     letterSpacing: '0.3px', marginBottom: '6px',
//     boxShadow: '0 4px 12px rgba(79,70,229,0.22)',
//   },
//   cell: {
//     padding: '9px 10px',
//     border: `1px solid ${C.borderSoft}`, borderRadius: '8px',
//     fontSize: '13px', textAlign: 'center', cursor: 'pointer',
//     position: 'relative',
//     transition: 'transform 0.15s, box-shadow 0.15s, border-color 0.15s, opacity 0.2s',
//   },
//   sqrtSym: { color: C.primary, fontWeight: 700 },
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
//     background: `linear-gradient(135deg, ${C.primary} 0%, #6366f1 100%)`,
//     color: 'white', borderRadius: '12px',
//     display: 'flex', alignItems: 'center', justifyContent: 'center',
//     fontSize: '19px', fontWeight: 700,
//     fontFamily: "'Crimson Pro', serif", marginBottom: '14px',
//     boxShadow: '0 4px 10px rgba(79,70,229,0.25)',
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
//   dotGridSvg: {
//     display: 'block', margin: '10px 0 0',
//     background: C.bg, borderRadius: '8px', padding: '8px',
//     width: '130px', height: '130px',
//   },
//   quizSection: { marginTop: '56px' },
// };

// // ---------- CSS (pseudo-classes, hover, media queries) ----------
// const CSS = `
// .psp-toc-link:hover {
//   color: ${C.primary};
// }
// .psp-related-mini:hover {
//   border-color: ${C.primary} !important;
//   transform: translateX(2px);
//   box-shadow: ${C.shadowSm};
// }
// .psp-input-field:focus {
//   border-color: ${C.primary} !important;
//   box-shadow: 0 0 0 4px rgba(79,70,229,0.12);
// }
// .psp-input-btn:hover { background: ${C.primaryDark} !important; }
// .psp-input-btn:active { transform: translateY(1px); }
// .psp-mode-tab:not(.active):hover { color: ${C.primary} !important; }
// .psp-cell:hover {
//   transform: translateY(-2px);
//   box-shadow: 0 6px 16px rgba(15,23,42,0.10);
//   border-color: ${C.primary};
//   z-index: 5;
// }
// .psp-cell::after {
//   content: attr(data-tooltip);
//   position: absolute;
//   bottom: calc(100% + 8px);
//   left: 50%;
//   transform: translateX(-50%);
//   background: #1e1b4b;
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
// .psp-cell:hover::after { opacity: 1; }
// .psp-cell.highlight {
//   border: 2px solid ${C.warn} !important;
//   box-shadow: 0 0 0 3px rgba(245,158,11,0.35), 0 6px 16px rgba(245,158,11,0.25);
//   transform: scale(1.05);
//   z-index: 4;
// }
// .psp-cell.filter-match {
//   border: 2px solid ${C.warn} !important;
//   box-shadow: 0 4px 14px rgba(245,158,11,0.35);
//   transform: scale(1.04);
//   z-index: 3;
// }
// .psp-cell.filter-dim { opacity: 0.28; }
// .psp-filter-card:hover {
//   transform: translateY(-3px);
//   box-shadow: ${C.shadowMd};
//   border-color: ${C.border} !important;
// }
// .psp-filter-card.active {
//   border-color: ${C.warn} !important;
//   background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%) !important;
//   box-shadow: 0 0 0 4px rgba(245,158,11,0.18), ${C.shadowMd};
// }
// .psp-filter-card.active::after {
//   content: '\u25CF Active';
//   position: absolute;
//   top: 12px;
//   right: 14px;
//   font-size: 11px;
//   font-weight: 700;
//   color: ${C.warnText};
//   letter-spacing: 0.5px;
// }
// .psp-filter-card.active .psp-filter-icon {
//   background: linear-gradient(135deg, ${C.warn} 0%, #fb923c 100%) !important;
//   box-shadow: 0 4px 10px rgba(245,158,11,0.3) !important;
// }
// .psp-filter-card.active .psp-filter-count,
// .psp-filter-card.active .psp-filter-action {
//   color: ${C.warnText} !important;
// }
// .psp-about-summary::-webkit-details-marker { display: none; }
// .psp-sidebar::-webkit-scrollbar { width: 4px; }
// .psp-sidebar::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 4px; }
// .psp-close-details:hover { background: #e5e7eb !important; color: ${C.text} !important; }
// @keyframes pspSlideIn {
//   from { opacity: 0; transform: translateY(-8px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// .psp-cell-details { animation: pspSlideIn 0.25s ease; }

// @media (max-width: 1024px) {
//   .psp-layout { grid-template-columns: 1fr !important; }
//   .psp-sidebar {
//     position: static !important;
//     max-height: none !important;
//     overflow-y: visible !important;
//     display: grid !important;
//     grid-template-columns: 1fr 1fr;
//     gap: 24px;
//   }
//   .psp-table-grid { grid-template-columns: repeat(3, 1fr) !important; }
// }
// @media (max-width: 640px) {
//   .psp-page-title { font-size: 32px !important; }
//   .psp-sidebar { grid-template-columns: 1fr !important; }
//   .psp-table-grid { grid-template-columns: repeat(2, 1fr) !important; }
//   .psp-input-block { flex-direction: column !important; align-items: stretch !important; }
//   .psp-input-block input { width: 100% !important; }
//   .psp-input-block button { width: 100% !important; }
//   .psp-range-sep { text-align: center; }
//   .psp-mode-tab { padding: 9px 14px !important; font-size: 13px !important; }
// }
// `;

// // ---------- Component ----------
// const PerfectSquaresPage = ({ relatedReferences = [] }) => {
//   // Tool state
//   const [mode, setMode] = useState('isSquare');
//   const [isSquareInput, setIsSquareInput] = useState('');
//   const [squareOfInput, setSquareOfInput] = useState('');
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
//       el = document.getElementById('psp-cell-details');
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

//   // ===== Tool: Mode 1 (Is N a square?) =====
//   const runIsSquare = () => {
//     const n = parseInt(isSquareInput, 10);
//     if (isNaN(n) || n < 0) {
//       setStatus('error', '!', 'Please enter a non-negative integer.');
//       return;
//     }
//     setActiveFilter(null);
//     setActiveRange(null);

//     const sqrt = Math.sqrt(n);
//     if (Number.isInteger(sqrt)) {
//       if (n <= 10000 && sqrt >= 1) {
//         setHighlightedRoots(new Set([sqrt]));
//         setDetailsRoot(sqrt);
//         setPendingScroll({ type: 'cell', root: sqrt });
//         setStatus('success', '\u2713',
//           `<strong>${n.toLocaleString()}</strong> is a perfect square &mdash; &#8730;${n} = <strong>${sqrt}</strong>. Cell highlighted and details opened below.`);
//       } else {
//         setHighlightedRoots(new Set());
//         setDetailsRoot(null);
//         setStatus('success', '\u2713',
//           `<strong>${n.toLocaleString()}</strong> is a perfect square &mdash; &#8730;${n} = <strong>${sqrt}</strong>. Outside this 1&ndash;10,000 table.`);
//       }
//     } else {
//       const lower = Math.floor(sqrt);
//       const upper = lower + 1;
//       const lowerSq = lower * lower;
//       const upperSq = upper * upper;
//       const lowerIn = lowerSq <= 10000 && lowerSq > 0;
//       const upperIn = upperSq <= 10000;

//       const roots = new Set();
//       if (lowerIn) roots.add(lower);
//       if (upperIn) roots.add(upper);
//       setHighlightedRoots(roots);
//       setDetailsRoot(null);

//       if (lowerIn)      setPendingScroll({ type: 'cell', root: lower });
//       else if (upperIn) setPendingScroll({ type: 'cell', root: upper });

//       let msg = `<strong>${n.toLocaleString()}</strong> is not a perfect square (&#8730; &asymp; ${sqrt.toFixed(4)}). `;
//       if (lowerIn && upperIn) {
//         msg += `Nearest: <strong>${lowerSq.toLocaleString()}</strong> = ${lower}&sup2; and <strong>${upperSq.toLocaleString()}</strong> = ${upper}&sup2;. Both highlighted below.`;
//       } else if (lowerIn) {
//         msg += `Nearest in table: <strong>${lowerSq.toLocaleString()}</strong> = ${lower}&sup2; (highlighted). ${upperSq.toLocaleString()} = ${upper}&sup2; is outside the table.`;
//       } else if (upperIn) {
//         msg += `Nearest in table: <strong>${upperSq.toLocaleString()}</strong> = ${upper}&sup2; (highlighted). ${lowerSq.toLocaleString()} = ${lower}&sup2; is outside the table.`;
//       } else {
//         msg += `Nearest perfect squares (${lowerSq.toLocaleString()} and ${upperSq.toLocaleString()}) are outside this table.`;
//       }
//       setStatus('error', '\u2717', msg);
//     }
//   };

//   // ===== Tool: Mode 2 (Square of N) =====
//   const runSquareOf = () => {
//     const n = parseInt(squareOfInput, 10);
//     if (isNaN(n) || n < 0) {
//       setStatus('error', '!', 'Please enter a non-negative integer.');
//       return;
//     }
//     setActiveFilter(null);
//     setActiveRange(null);

//     const square = n * n;
//     if (square <= 10000 && n >= 1) {
//       setHighlightedRoots(new Set([n]));
//       setDetailsRoot(n);
//       setPendingScroll({ type: 'cell', root: n });
//       setStatus('success', '=',
//         `<strong>${n}&sup2; = ${square.toLocaleString()}</strong>. Cell highlighted and details opened below.`);
//     } else {
//       setHighlightedRoots(new Set());
//       setDetailsRoot(null);
//       setStatus('info', '=',
//         `<strong>${n}&sup2; = ${square.toLocaleString()}</strong>. Outside this 1&ndash;10,000 table.`);
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

//     const lowRoot = Math.ceil(Math.sqrt(from));
//     const highRoot = Math.floor(Math.sqrt(to));
//     const allMatches = [];
//     const inTableMatches = [];
//     for (let r = lowRoot; r <= highRoot; r++) {
//       const sq = r * r;
//       allMatches.push({ root: r, square: sq });
//       if (sq <= 10000) inTableMatches.push({ root: r, square: sq });
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
//         `No perfect squares fall between <strong>${from.toLocaleString()}</strong> and <strong>${to.toLocaleString()}</strong>.`);
//     } else if (inTableMatches.length === 0) {
//       setStatus('info', '\u2211',
//         `<strong>${allMatches.length}</strong> perfect square${allMatches.length === 1 ? '' : 's'} between <strong>${from.toLocaleString()}</strong> and <strong>${to.toLocaleString()}</strong>, but none in this 1&ndash;10,000 table.`);
//     } else {
//       const outside = allMatches.length - inTableMatches.length;
//       let msg = `<strong>${inTableMatches.length}</strong> perfect square${inTableMatches.length === 1 ? '' : 's'} highlighted in the table below`;
//       if (outside > 0) msg += ` (${outside} more fall outside the 1&ndash;10,000 range)`;
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
//   const getCellClass = (root, square) => {
//     let cls = 'psp-cell';
//     if (highlightedRoots.has(root)) cls += ' highlight';
//     if (activeFilter) {
//       if (FILTER_SETS[activeFilter].has(square)) cls += ' filter-match';
//       else cls += ' filter-dim';
//     } else if (activeRange) {
//       if (square >= activeRange.from && square <= activeRange.to) cls += ' filter-match';
//       else cls += ' filter-dim';
//     }
//     return cls;
//   };
//   const getCellBg = (root, square, lastDigit) => {
//     if (highlightedRoots.has(root)) return '#fef3c7';
//     if (activeFilter && FILTER_SETS[activeFilter].has(square)) return '#fef3c7';
//     if (activeRange && square >= activeRange.from && square <= activeRange.to) return '#fef3c7';
//     return LD_BG[lastDigit] || 'white';
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
//     bannerText = `Range ${activeRange.from.toLocaleString()}\u2013${activeRange.to.toLocaleString()}: ${activeRange.matches.length} perfect square${activeRange.matches.length === 1 ? '' : 's'} highlighted`;
//   }
//   const showBanner = activeFilter !== null || activeRange !== null;

//   const detailsContent = (() => {
//     if (detailsRoot === null) return null;
//     const root = detailsRoot;
//     const square = root * root;
//     const props = [];
//     if (FILTER_SETS.palindrome.has(square))        props.push('Palindrome');
//     if (FILTER_SETS.pythagoreanMember.has(square)) props.push('Pythagorean triple member');
//     if (FILTER_SETS.primeRoot.has(square))         props.push('Prime root');
//     if (FILTER_SETS.squareTriangular.has(square))  props.push('Square triangular');
//     if (FILTER_SETS.endsIn25.has(square))          props.push('Ends in 25');
//     return {
//       root, square,
//       factors: primeFactor(square),
//       rootFactors: primeFactor(root),
//       digitSum: square.toString().split('').reduce((a, b) => a + parseInt(b, 10), 0),
//       props,
//     };
//   })();

//   const statusIconBg = {
//     success: C.success,
//     error:   C.error,
//     info:    C.primary,
//   }[statusKind] || C.primary;

//   const modeTabs = [
//     { id: 'isSquare', label: 'Is N a square?' },
//     { id: 'squareOf', label: 'Square of N' },
//     { id: 'range',    label: 'Range' },
//   ];

//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: CSS }} />
//       <div style={S.container}>
//         <div className="psp-layout" style={S.pageLayout}>

//           {/* ===== SIDEBAR ===== */}
//           <aside className="psp-sidebar" style={S.sidebar}>
//             <div style={S.sidebarBlock}>
//               <div style={S.sidebarLabel}>On this page</div>
//               <ul style={S.tocList}>
//                 {TOC_ITEMS.map((item, idx) => (
//                   <li key={item.id}>
//                     <a
//                       className={`psp-toc-link ${activeSection === item.id ? 'active' : ''}`}
//                       style={tocLinkStyle(item.id)}
//                       onClick={(e) => {
//                         e.preventDefault();
//                         const t = sectionRefs.current[item.id];
//                         if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
//                       }}
//                     >
//                       <span style={tocNumStyle(item.id)}>{idx + 1}</span>
//                       {item.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {relatedReferences && relatedReferences.length > 0 && (
//               <div style={S.sidebarBlock}>
//                 <div style={S.sidebarLabel}>Related references</div>
//                 {relatedReferences.map((ref, idx) => (
//                   <a
//                     key={idx}
//                     href={ref.href}
//                     className="psp-related-mini"
//                     style={S.relatedMini}
//                   >
//                     <div style={S.relatedMiniTitle}>{ref.title}</div>
//                     {ref.sub && <div style={S.relatedMiniSub}>{ref.sub}</div>}
//                   </a>
//                 ))}
//               </div>
//             )}
//           </aside>

//           {/* ===== MAIN ===== */}
//           <div style={S.mainCol}>
//             {/* <h1 className="psp-page-title" style={S.pageTitle}>Perfect Squares 1 &mdash; 10000</h1> */}

//             {/* <details style={S.aboutTable}>
//               <summary className="psp-about-summary" style={S.aboutSummary}>
//                 <span style={S.aboutIcon}>?</span>
//                 About This Table
//                 <span style={S.aboutToggle}>+</span>
//               </summary>
//               <div style={S.aboutContent}>
//                 Every perfect square from 1 to 10,000 with its square root. Use the tool below to navigate by question: is a number a perfect square, what is N&sup2;, or which squares fall in a range. Each answer highlights the relevant cell(s) and opens its details panel.
//               </div>
//             </details> */}

//             {/* TOOL */}
//             <section
//               id="sec-tool"
//               ref={(el) => { sectionRefs.current['sec-tool'] = el; }}
//               style={S.toolSection}
//             >
//               <div style={S.toolHeader}>
//                 <h2 style={S.toolH2}>Perfect Square Tool</h2>
//                 <p style={S.toolSub}>Every answer takes you to the table. Pick a question:</p>
//               </div>

//               <div style={S.modeTabsWrap} role="tablist">
//                 {modeTabs.map((tab) => {
//                   const isActive = mode === tab.id;
//                   return (
//                     <button
//                       key={tab.id}
//                       type="button"
//                       className={`psp-mode-tab ${isActive ? 'active' : ''}`}
//                       style={{ ...S.modeTabBase, ...(isActive ? S.modeTabActive : {}) }}
//                       onClick={() => handleModeChange(tab.id)}
//                     >
//                       {tab.label}
//                     </button>
//                   );
//                 })}
//               </div>

//               {mode === 'isSquare' && (
//                 <div className="psp-input-block" style={S.inputBlock}>
//                   <input
//                     type="number"
//                     className="psp-input-field"
//                     style={S.inputField}
//                     placeholder="Enter a number to test (e.g., 1764)"
//                     min="0"
//                     value={isSquareInput}
//                     onChange={(e) => setIsSquareInput(e.target.value)}
//                     onKeyDown={(e) => { if (e.key === 'Enter') runIsSquare(); }}
//                   />
//                   <button
//                     type="button"
//                     className="psp-input-btn"
//                     style={S.inputBtn}
//                     onClick={runIsSquare}
//                   >
//                     Test
//                   </button>
//                 </div>
//               )}

//               {mode === 'squareOf' && (
//                 <div className="psp-input-block" style={S.inputBlock}>
//                   <input
//                     type="number"
//                     className="psp-input-field"
//                     style={S.inputField}
//                     placeholder="Enter a number to square (e.g., 47)"
//                     min="0"
//                     value={squareOfInput}
//                     onChange={(e) => setSquareOfInput(e.target.value)}
//                     onKeyDown={(e) => { if (e.key === 'Enter') runSquareOf(); }}
//                   />
//                   <button
//                     type="button"
//                     className="psp-input-btn"
//                     style={S.inputBtn}
//                     onClick={runSquareOf}
//                   >
//                     Compute
//                   </button>
//                 </div>
//               )}

//               {mode === 'range' && (
//                 <div className="psp-input-block" style={S.inputBlock}>
//                   <input
//                     type="number"
//                     className="psp-input-field"
//                     style={S.inputField}
//                     placeholder="From..."
//                     min="0"
//                     value={rangeFromInput}
//                     onChange={(e) => setRangeFromInput(e.target.value)}
//                     onKeyDown={(e) => { if (e.key === 'Enter') runRange(); }}
//                   />
//                   <span className="psp-range-sep" style={S.rangeSep}>to</span>
//                   <input
//                     type="number"
//                     className="psp-input-field"
//                     style={S.inputField}
//                     placeholder="To..."
//                     min="0"
//                     value={rangeToInput}
//                     onChange={(e) => setRangeToInput(e.target.value)}
//                     onKeyDown={(e) => { if (e.key === 'Enter') runRange(); }}
//                   />
//                   <button
//                     type="button"
//                     className="psp-input-btn"
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
//                 <div style={S.legendTitle}>Last-digit color guide</div>
//                 <div style={S.legendRow}>
//                   {LD_PILLS.map((p) => (
//                     <span key={p.d} style={{ ...S.legendPillBase, background: p.bg, color: p.fg }}>
//                       ends in {p.d}
//                     </span>
//                   ))}
//                 </div>
//                 <p style={S.legendNote}>
//                   Every perfect square ends in one of these six digits. Numbers ending in 2, 3, 7, or 8 are never perfect squares.
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

//               <div className="psp-table-grid" style={S.tableGrid}>
//                 {STACKS.map((stack, si) => {
//                   const firstSq = stack[0].square;
//                   const lastSq = stack[stack.length - 1].square;
//                   return (
//                     <div key={si} style={S.stack}>
//                       <div style={S.stackTitle}>{firstSq} &mdash; {lastSq}</div>
//                       {stack.map((cell) => {
//                         const nextRoot = cell.root + 1;
//                         const nextSquare = nextRoot * nextRoot;
//                         const gap = nextSquare - cell.square;
//                         const tooltip = `Next: \u221A${nextSquare} = ${nextRoot} (gap +${gap})`;
//                         return (
//                           <div
//                             key={cell.root}
//                             ref={(el) => { cellRefs.current[cell.root] = el; }}
//                             className={getCellClass(cell.root, cell.square)}
//                             style={{
//                               ...S.cell,
//                               background: getCellBg(cell.root, cell.square, cell.lastDigit),
//                             }}
//                             data-tooltip={tooltip}
//                             onClick={() => handleCellClick(cell.root)}
//                           >
//                             <span style={S.sqrtSym}>&#8730;</span>{cell.square} ={' '}
//                             <span style={S.cellRoot}>{cell.root}</span>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   );
//                 })}
//               </div>

//               {detailsContent && (
//                 <div id="psp-cell-details" className="psp-cell-details" style={S.cellDetails}>
//                   <button
//                     type="button"
//                     className="psp-close-details"
//                     style={S.closeDetails}
//                     onClick={() => setDetailsRoot(null)}
//                   >
//                     &times;
//                   </button>
//                   <h3 style={S.detailsH3}>
//                     {detailsContent.square.toLocaleString()} = {detailsContent.root}<sup>2</sup>
//                   </h3>
//                   <div style={S.detailGrid}>
//                     <div style={S.detailItem}>
//                       <div style={S.detailLabel}>Prime factorization (square)</div>
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
//                       <div style={S.detailLabel}>Last digit</div>
//                       <div style={S.detailValue}>{detailsContent.square % 10}</div>
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
//               <p style={S.sectionSub}>Click a card to highlight every matching square in the table above.</p>
//               <div style={S.filterGrid}>
//                 {FILTER_DEFS.map((f) => {
//                   const isActive = activeFilter === f.id;
//                   return (
//                     <div
//                       key={f.id}
//                       className={`psp-filter-card ${isActive ? 'active' : ''}`}
//                       style={S.filterCard}
//                       onClick={() => toggleFilter(f.id)}
//                     >
//                       <div className="psp-filter-icon" style={S.filterIcon}>{f.icon}</div>
//                       <h3 style={S.filterCardH3}>{f.title}</h3>
//                       <p style={S.filterCardP}>{f.desc}</p>
//                       <div style={S.filterCardFooter}>
//                         <span className="psp-filter-count" style={S.filterCount}>{FILTER_SETS[f.id].size} in table</span>
//                         <span className="psp-filter-action" style={S.filterAction}>Click to highlight</span>
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
//               <h2 style={S.sectionH}>Properties of perfect squares</h2>
//               <p style={S.sectionSub}>Facts true of every perfect square &mdash; useful for spotting them and ruling them out.</p>
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
//                     {card.hasDotGrid && (
//                       <svg viewBox="0 0 160 160" style={S.dotGridSvg}>
//                         {Array.from({ length: 5 }, (_, row) =>
//                           Array.from({ length: 5 }, (_, col) => {
//                             const layer = Math.max(row, col);
//                             return (
//                               <circle
//                                 key={`${row}-${col}`}
//                                 cx={16 + col * 28}
//                                 cy={16 + row * 28}
//                                 r="9"
//                                 fill={DOT_COLORS[layer]}
//                               />
//                             );
//                           })
//                         )}
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
//                 generator={generatePerfectSquareQuestion}
//                 title="Test yourself"
//                 subtitle="Memorize the table by playing. Score persists during your visit."
//                 allowReset={true}
//               />
//             </section>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PerfectSquaresPage;


import { useState, useEffect, useRef } from 'react';
import QuizWidget from '../examples/quiz/QuizWidget'
import generatePerfectSquareQuestion from '../examples/quiz/questions/perfectSquareQuestions';

// =========================================================
//   PerfectSquaresPage
//   Main page component for /tables/arithmetics/perfect-squares.
//   Props:
//     relatedReferences  array  [{ title, sub, href }] — sidebar links
// =========================================================

// ---------- Theme ----------
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

const LD_BG = {
  0: '#f8fafc', 1: '#eff6ff', 4: '#ecfdf5',
  5: '#fffbeb', 6: '#fff1f2', 9: '#f5f3ff',
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

// ---------- Precomputed: table cells ----------
const STACKS = (() => {
  const out = [];
  for (let s = 0; s < 10; s++) {
    const start = s * 10 + 1;
    const stack = [];
    for (let i = 0; i < 10; i++) {
      const root = start + i;
      const square = root * root;
      stack.push({ root, square, lastDigit: square % 10 });
    }
    out.push(stack);
  }
  return out;
})();

// ---------- Precomputed: filter sets ----------
const FILTER_SETS = (() => {
  const sets = {
    palindrome:        new Set(),
    endsIn25:          new Set(),
    pythagoreanMember: new Set(),
    primeRoot:         new Set(),
    squareTriangular:  new Set([1, 36, 1225]),
  };
  for (let c = 1; c <= 100; c++) {
    for (let a = 1; a < c; a++) {
      const bsq = c * c - a * a;
      const b = Math.sqrt(bsq);
      if (Number.isInteger(b) && b > 0 && b <= 100) {
        sets.pythagoreanMember.add(a * a);
        sets.pythagoreanMember.add(b * b);
        sets.pythagoreanMember.add(c * c);
      }
    }
  }
  for (let root = 1; root <= 100; root++) {
    const sq = root * root;
    if (isPalindromeStr(sq))    sets.palindrome.add(sq);
    if (sq % 100 === 25)        sets.endsIn25.add(sq);
    if (isPrime(root))          sets.primeRoot.add(sq);
  }
  return sets;
})();

const FILTER_DEFS = [
  { id: 'palindrome',        icon: '\u2194',        title: 'Palindromic squares',
    desc: 'Squares that read the same forwards and backwards.' },
  { id: 'endsIn25',          icon: '25',            title: 'Squares ending in 25',
    desc: 'Every square of a number ending in 5 ends in 25.' },
  { id: 'pythagoreanMember', icon: 'a\u00B2+b\u00B2', title: 'Pythagorean triple members',
    desc: 'Squares whose root appears in an integer right triangle.' },
  { id: 'primeRoot',         icon: 'p',             title: 'Squares with prime roots',
    desc: 'Squares of prime numbers \u2014 their only divisors are 1, p, and p\u00B2.' },
  { id: 'squareTriangular',  icon: '\u25B3\u25A1',  title: 'Square triangular numbers',
    desc: 'Both a perfect square and a triangular number (1+2+...+n).' },
];

const PROPERTY_CARDS = [
  {
    icon: '\u03A3',
    title: 'Sum of consecutive odd numbers',
    body: 'n\u00B2 equals the sum of the first n odd numbers. So 1+3+5+7+9 = 25 = 5\u00B2.',
    hasDotGrid: true,
  },
  {
    icon: 'd',
    title: 'Odd number of divisors',
    body: 'Perfect squares are the <em>only</em> positive integers with an odd count of divisors. 36 has 9 divisors: 1, 2, 3, 4, 6, 9, 12, 18, 36.',
  },
  {
    icon: '\u0394',
    title: 'Gap = next odd number',
    body: 'The difference between n\u00B2 and (n+1)\u00B2 is always 2n+1 \u2014 the next odd number.',
    code: '10\u00B2=100, 11\u00B2=121, gap=21',
  },
  {
    icon: 'mod',
    title: 'Mod 4 rule',
    body: 'Every perfect square is 0 or 1 mod 4 \u2014 never 2 or 3. Combined with the last-digit rule, this rejects most non-squares instantly.',
    code: '1543 mod 4 = 3 \u2192 not a square',
  },
];

const TOC_ITEMS = [
  { id: 'sec-tool',       label: 'Square tool' },
  { id: 'sec-table',      label: 'The table' },
  { id: 'sec-patterns',   label: 'Patterns & filters' },
  { id: 'sec-properties', label: 'Properties' },
  { id: 'sec-quiz',       label: 'Test yourself' },
];

const LD_PILLS = [
  { d: 0, bg: '#f1f5f9', fg: '#475569' },
  { d: 1, bg: '#dbeafe', fg: '#1e40af' },
  { d: 4, bg: '#d1fae5', fg: '#065f46' },
  { d: 5, bg: '#fef3c7', fg: '#92400e' },
  { d: 6, bg: '#ffe4e6', fg: '#9f1239' },
  { d: 9, bg: '#ede9fe', fg: '#5b21b6' },
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
    textAlign: 'center', fontSize: '13px', fontWeight: 700,
    letterSpacing: '0.3px', marginBottom: '6px',
    boxShadow: '0 4px 12px rgba(79,70,229,0.22)',
  },
  cell: {
    padding: '9px 10px',
    border: `1px solid ${C.borderSoft}`, borderRadius: '8px',
    fontSize: '13px', textAlign: 'center', cursor: 'pointer',
    position: 'relative',
    transition: 'transform 0.15s, box-shadow 0.15s, border-color 0.15s, opacity 0.2s',
  },
  sqrtSym: { color: C.primary, fontWeight: 700 },
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
  dotGridSvg: {
    display: 'block', margin: '10px 0 0',
    background: C.bg, borderRadius: '8px', padding: '8px',
    width: '130px', height: '130px',
  },
  quizSection: { marginTop: '56px' },
};

// ---------- CSS (pseudo-classes, hover, media queries) ----------
const CSS = `
.psp-toc-link:hover {
  color: ${C.primary};
}
.psp-related-mini:hover {
  border-color: ${C.primary} !important;
  transform: translateX(2px);
  box-shadow: ${C.shadowSm};
}
.psp-input-field:focus {
  border-color: ${C.primary} !important;
  box-shadow: 0 0 0 4px rgba(79,70,229,0.12);
}
.psp-input-btn:hover { background: ${C.primaryDark} !important; }
.psp-input-btn:active { transform: translateY(1px); }
.psp-mode-tab:not(.active):hover { color: ${C.primary} !important; }
.psp-cell:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(15,23,42,0.10);
  border-color: ${C.primary};
  z-index: 5;
}
.psp-cell::after {
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
.psp-cell:hover::after { opacity: 1; }
.psp-cell.highlight {
  border: 2px solid ${C.warn} !important;
  box-shadow: 0 0 0 3px rgba(245,158,11,0.35), 0 6px 16px rgba(245,158,11,0.25);
  transform: scale(1.05);
  z-index: 4;
}
.psp-cell.filter-match {
  border: 2px solid ${C.warn} !important;
  box-shadow: 0 4px 14px rgba(245,158,11,0.35);
  transform: scale(1.04);
  z-index: 3;
}
.psp-cell.filter-dim { opacity: 0.28; }
.psp-filter-card:hover {
  transform: translateY(-3px);
  box-shadow: ${C.shadowMd};
  border-color: ${C.border} !important;
}
.psp-filter-card.active {
  border-color: ${C.warn} !important;
  background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%) !important;
  box-shadow: 0 0 0 4px rgba(245,158,11,0.18), ${C.shadowMd};
}
.psp-filter-card.active::after {
  content: '\u25CF Active';
  position: absolute;
  top: 12px;
  right: 14px;
  font-size: 11px;
  font-weight: 700;
  color: ${C.warnText};
  letter-spacing: 0.5px;
}
.psp-filter-card.active .psp-filter-icon {
  background: linear-gradient(135deg, ${C.warn} 0%, #fb923c 100%) !important;
  box-shadow: 0 4px 10px rgba(245,158,11,0.3) !important;
}
.psp-filter-card.active .psp-filter-count,
.psp-filter-card.active .psp-filter-action {
  color: ${C.warnText} !important;
}
.psp-about-summary::-webkit-details-marker { display: none; }
.psp-sidebar-sticky::-webkit-scrollbar { width: 4px; }
.psp-sidebar-sticky::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 4px; }
.psp-close-details:hover { background: #e5e7eb !important; color: ${C.text} !important; }
@keyframes pspSlideIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}
.psp-cell-details { animation: pspSlideIn 0.25s ease; }

/* Hide the absolute sidebar when the viewport is too narrow to fit it */
@media (max-width: 1320px) {
  .psp-sidebar { display: none !important; }
}
@media (max-width: 640px) {
  .psp-page-title { font-size: 32px !important; }
  .psp-table-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .psp-input-block { flex-direction: column !important; align-items: stretch !important; }
  .psp-input-block input { width: 100% !important; }
  .psp-input-block button { width: 100% !important; }
  .psp-range-sep { text-align: center; }
  .psp-mode-tab { padding: 9px 14px !important; font-size: 13px !important; }
}
@media (max-width: 900px) {
  .psp-table-grid { grid-template-columns: repeat(3, 1fr) !important; }
}
`;

// ---------- Component ----------
const PerfectSquaresPage = ({ relatedReferences = [] }) => {
  // Tool state
  const [mode, setMode] = useState('isSquare');
  const [isSquareInput, setIsSquareInput] = useState('');
  const [squareOfInput, setSquareOfInput] = useState('');
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
      el = document.getElementById('psp-cell-details');
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

  // ===== Tool: Mode 1 (Is N a square?) =====
  const runIsSquare = () => {
    const n = parseInt(isSquareInput, 10);
    if (isNaN(n) || n < 0) {
      setStatus('error', '!', 'Please enter a non-negative integer.');
      return;
    }
    setActiveFilter(null);
    setActiveRange(null);

    const sqrt = Math.sqrt(n);
    if (Number.isInteger(sqrt)) {
      if (n <= 10000 && sqrt >= 1) {
        setHighlightedRoots(new Set([sqrt]));
        setDetailsRoot(sqrt);
        setPendingScroll({ type: 'cell', root: sqrt });
        setStatus('success', '\u2713',
          `<strong>${n.toLocaleString()}</strong> is a perfect square &mdash; &#8730;${n} = <strong>${sqrt}</strong>. Cell highlighted and details opened below.`);
      } else {
        setHighlightedRoots(new Set());
        setDetailsRoot(null);
        setStatus('success', '\u2713',
          `<strong>${n.toLocaleString()}</strong> is a perfect square &mdash; &#8730;${n} = <strong>${sqrt}</strong>. Outside this 1&ndash;10,000 table.`);
      }
    } else {
      const lower = Math.floor(sqrt);
      const upper = lower + 1;
      const lowerSq = lower * lower;
      const upperSq = upper * upper;
      const lowerIn = lowerSq <= 10000 && lowerSq > 0;
      const upperIn = upperSq <= 10000;

      const roots = new Set();
      if (lowerIn) roots.add(lower);
      if (upperIn) roots.add(upper);
      setHighlightedRoots(roots);
      setDetailsRoot(null);

      if (lowerIn)      setPendingScroll({ type: 'cell', root: lower });
      else if (upperIn) setPendingScroll({ type: 'cell', root: upper });

      let msg = `<strong>${n.toLocaleString()}</strong> is not a perfect square (&#8730; &asymp; ${sqrt.toFixed(4)}). `;
      if (lowerIn && upperIn) {
        msg += `Nearest: <strong>${lowerSq.toLocaleString()}</strong> = ${lower}&sup2; and <strong>${upperSq.toLocaleString()}</strong> = ${upper}&sup2;. Both highlighted below.`;
      } else if (lowerIn) {
        msg += `Nearest in table: <strong>${lowerSq.toLocaleString()}</strong> = ${lower}&sup2; (highlighted). ${upperSq.toLocaleString()} = ${upper}&sup2; is outside the table.`;
      } else if (upperIn) {
        msg += `Nearest in table: <strong>${upperSq.toLocaleString()}</strong> = ${upper}&sup2; (highlighted). ${lowerSq.toLocaleString()} = ${lower}&sup2; is outside the table.`;
      } else {
        msg += `Nearest perfect squares (${lowerSq.toLocaleString()} and ${upperSq.toLocaleString()}) are outside this table.`;
      }
      setStatus('error', '\u2717', msg);
    }
  };

  // ===== Tool: Mode 2 (Square of N) =====
  const runSquareOf = () => {
    const n = parseInt(squareOfInput, 10);
    if (isNaN(n) || n < 0) {
      setStatus('error', '!', 'Please enter a non-negative integer.');
      return;
    }
    setActiveFilter(null);
    setActiveRange(null);

    const square = n * n;
    if (square <= 10000 && n >= 1) {
      setHighlightedRoots(new Set([n]));
      setDetailsRoot(n);
      setPendingScroll({ type: 'cell', root: n });
      setStatus('success', '=',
        `<strong>${n}&sup2; = ${square.toLocaleString()}</strong>. Cell highlighted and details opened below.`);
    } else {
      setHighlightedRoots(new Set());
      setDetailsRoot(null);
      setStatus('info', '=',
        `<strong>${n}&sup2; = ${square.toLocaleString()}</strong>. Outside this 1&ndash;10,000 table.`);
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

    const lowRoot = Math.ceil(Math.sqrt(from));
    const highRoot = Math.floor(Math.sqrt(to));
    const allMatches = [];
    const inTableMatches = [];
    for (let r = lowRoot; r <= highRoot; r++) {
      const sq = r * r;
      allMatches.push({ root: r, square: sq });
      if (sq <= 10000) inTableMatches.push({ root: r, square: sq });
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
        `No perfect squares fall between <strong>${from.toLocaleString()}</strong> and <strong>${to.toLocaleString()}</strong>.`);
    } else if (inTableMatches.length === 0) {
      setStatus('info', '\u2211',
        `<strong>${allMatches.length}</strong> perfect square${allMatches.length === 1 ? '' : 's'} between <strong>${from.toLocaleString()}</strong> and <strong>${to.toLocaleString()}</strong>, but none in this 1&ndash;10,000 table.`);
    } else {
      const outside = allMatches.length - inTableMatches.length;
      let msg = `<strong>${inTableMatches.length}</strong> perfect square${inTableMatches.length === 1 ? '' : 's'} highlighted in the table below`;
      if (outside > 0) msg += ` (${outside} more fall outside the 1&ndash;10,000 range)`;
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
  const getCellClass = (root, square) => {
    let cls = 'psp-cell';
    if (highlightedRoots.has(root)) cls += ' highlight';
    if (activeFilter) {
      if (FILTER_SETS[activeFilter].has(square)) cls += ' filter-match';
      else cls += ' filter-dim';
    } else if (activeRange) {
      if (square >= activeRange.from && square <= activeRange.to) cls += ' filter-match';
      else cls += ' filter-dim';
    }
    return cls;
  };
  const getCellBg = (root, square, lastDigit) => {
    if (highlightedRoots.has(root)) return '#fef3c7';
    if (activeFilter && FILTER_SETS[activeFilter].has(square)) return '#fef3c7';
    if (activeRange && square >= activeRange.from && square <= activeRange.to) return '#fef3c7';
    return LD_BG[lastDigit] || 'white';
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
    bannerText = `Range ${activeRange.from.toLocaleString()}\u2013${activeRange.to.toLocaleString()}: ${activeRange.matches.length} perfect square${activeRange.matches.length === 1 ? '' : 's'} highlighted`;
  }
  const showBanner = activeFilter !== null || activeRange !== null;

  const detailsContent = (() => {
    if (detailsRoot === null) return null;
    const root = detailsRoot;
    const square = root * root;
    const props = [];
    if (FILTER_SETS.palindrome.has(square))        props.push('Palindrome');
    if (FILTER_SETS.pythagoreanMember.has(square)) props.push('Pythagorean triple member');
    if (FILTER_SETS.primeRoot.has(square))         props.push('Prime root');
    if (FILTER_SETS.squareTriangular.has(square))  props.push('Square triangular');
    if (FILTER_SETS.endsIn25.has(square))          props.push('Ends in 25');
    return {
      root, square,
      factors: primeFactor(square),
      rootFactors: primeFactor(root),
      digitSum: square.toString().split('').reduce((a, b) => a + parseInt(b, 10), 0),
      props,
    };
  })();

  const statusIconBg = {
    success: C.success,
    error:   C.error,
    info:    C.primary,
  }[statusKind] || C.primary;

  const modeTabs = [
    { id: 'isSquare', label: 'Is N a square?' },
    { id: 'squareOf', label: 'Square of N' },
    { id: 'range',    label: 'Range' },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div style={S.container}>
        <div className="psp-layout" style={S.pageLayout}>

          {/* ===== SIDEBAR (absolute, anchored to the container's left edge) ===== */}
          <aside className="psp-sidebar" style={S.sidebar}>
            <div className="psp-sidebar-sticky" style={S.sidebarSticky}>
              <div style={S.sidebarBlock}>
                <div style={S.sidebarLabel}>On this page</div>
                <ul style={S.tocList}>
                  {TOC_ITEMS.map((item, idx) => (
                    <li key={item.id}>
                      <a
                        className={`psp-toc-link ${activeSection === item.id ? 'active' : ''}`}
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
                      className="psp-related-mini"
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
            {/* <h1 className="psp-page-title" style={S.pageTitle}>Perfect Squares 1 &mdash; 10000</h1> */}

            {/* <details style={S.aboutTable}>
              <summary className="psp-about-summary" style={S.aboutSummary}>
                <span style={S.aboutIcon}>?</span>
                About This Table
                <span style={S.aboutToggle}>+</span>
              </summary>
              <div style={S.aboutContent}>
                Every perfect square from 1 to 10,000 with its square root. Use the tool below to navigate by question: is a number a perfect square, what is N&sup2;, or which squares fall in a range. Each answer highlights the relevant cell(s) and opens its details panel.
              </div>
            </details> */}

            {/* TOOL */}
            <section
              id="sec-tool"
              ref={(el) => { sectionRefs.current['sec-tool'] = el; }}
              style={S.toolSection}
            >
              <div style={S.toolHeader}>
                <h2 style={S.toolH2}>Perfect Square Tool</h2>
                <p style={S.toolSub}>Every answer takes you to the table. Pick a question:</p>
              </div>

              <div style={S.modeTabsWrap} role="tablist">
                {modeTabs.map((tab) => {
                  const isActive = mode === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      className={`psp-mode-tab ${isActive ? 'active' : ''}`}
                      style={{ ...S.modeTabBase, ...(isActive ? S.modeTabActive : {}) }}
                      onClick={() => handleModeChange(tab.id)}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {mode === 'isSquare' && (
                <div className="psp-input-block" style={S.inputBlock}>
                  <input
                    type="number"
                    className="psp-input-field"
                    style={S.inputField}
                    placeholder="Enter a number to test (e.g., 1764)"
                    min="0"
                    value={isSquareInput}
                    onChange={(e) => setIsSquareInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') runIsSquare(); }}
                  />
                  <button
                    type="button"
                    className="psp-input-btn"
                    style={S.inputBtn}
                    onClick={runIsSquare}
                  >
                    Test
                  </button>
                </div>
              )}

              {mode === 'squareOf' && (
                <div className="psp-input-block" style={S.inputBlock}>
                  <input
                    type="number"
                    className="psp-input-field"
                    style={S.inputField}
                    placeholder="Enter a number to square (e.g., 47)"
                    min="0"
                    value={squareOfInput}
                    onChange={(e) => setSquareOfInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') runSquareOf(); }}
                  />
                  <button
                    type="button"
                    className="psp-input-btn"
                    style={S.inputBtn}
                    onClick={runSquareOf}
                  >
                    Compute
                  </button>
                </div>
              )}

              {mode === 'range' && (
                <div className="psp-input-block" style={S.inputBlock}>
                  <input
                    type="number"
                    className="psp-input-field"
                    style={S.inputField}
                    placeholder="From..."
                    min="0"
                    value={rangeFromInput}
                    onChange={(e) => setRangeFromInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') runRange(); }}
                  />
                  <span className="psp-range-sep" style={S.rangeSep}>to</span>
                  <input
                    type="number"
                    className="psp-input-field"
                    style={S.inputField}
                    placeholder="To..."
                    min="0"
                    value={rangeToInput}
                    onChange={(e) => setRangeToInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') runRange(); }}
                  />
                  <button
                    type="button"
                    className="psp-input-btn"
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
                    <span key={p.d} style={{ ...S.legendPillBase, background: p.bg, color: p.fg }}>
                      ends in {p.d}
                    </span>
                  ))}
                </div>
                <p style={S.legendNote}>
                  Every perfect square ends in one of these six digits. Numbers ending in 2, 3, 7, or 8 are never perfect squares.
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

              <div className="psp-table-grid" style={S.tableGrid}>
                {STACKS.map((stack, si) => {
                  const firstSq = stack[0].square;
                  const lastSq = stack[stack.length - 1].square;
                  return (
                    <div key={si} style={S.stack}>
                      <div style={S.stackTitle}>{firstSq} &mdash; {lastSq}</div>
                      {stack.map((cell) => {
                        const nextRoot = cell.root + 1;
                        const nextSquare = nextRoot * nextRoot;
                        const gap = nextSquare - cell.square;
                        const tooltip = `Next: \u221A${nextSquare} = ${nextRoot} (gap +${gap})`;
                        return (
                          <div
                            key={cell.root}
                            ref={(el) => { cellRefs.current[cell.root] = el; }}
                            className={getCellClass(cell.root, cell.square)}
                            style={{
                              ...S.cell,
                              background: getCellBg(cell.root, cell.square, cell.lastDigit),
                            }}
                            data-tooltip={tooltip}
                            onClick={() => handleCellClick(cell.root)}
                          >
                            <span style={S.sqrtSym}>&#8730;</span>{cell.square} ={' '}
                            <span style={S.cellRoot}>{cell.root}</span>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>

              {detailsContent && (
                <div id="psp-cell-details" className="psp-cell-details" style={S.cellDetails}>
                  <button
                    type="button"
                    className="psp-close-details"
                    style={S.closeDetails}
                    onClick={() => setDetailsRoot(null)}
                  >
                    &times;
                  </button>
                  <h3 style={S.detailsH3}>
                    {detailsContent.square.toLocaleString()} = {detailsContent.root}<sup>2</sup>
                  </h3>
                  <div style={S.detailGrid}>
                    <div style={S.detailItem}>
                      <div style={S.detailLabel}>Prime factorization (square)</div>
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
                      <div style={S.detailLabel}>Last digit</div>
                      <div style={S.detailValue}>{detailsContent.square % 10}</div>
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
              <p style={S.sectionSub}>Click a card to highlight every matching square in the table above.</p>
              <div style={S.filterGrid}>
                {FILTER_DEFS.map((f) => {
                  const isActive = activeFilter === f.id;
                  return (
                    <div
                      key={f.id}
                      className={`psp-filter-card ${isActive ? 'active' : ''}`}
                      style={S.filterCard}
                      onClick={() => toggleFilter(f.id)}
                    >
                      <div className="psp-filter-icon" style={S.filterIcon}>{f.icon}</div>
                      <h3 style={S.filterCardH3}>{f.title}</h3>
                      <p style={S.filterCardP}>{f.desc}</p>
                      <div style={S.filterCardFooter}>
                        <span className="psp-filter-count" style={S.filterCount}>{FILTER_SETS[f.id].size} in table</span>
                        <span className="psp-filter-action" style={S.filterAction}>Click to highlight</span>
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
              <h2 style={S.sectionH}>Properties of perfect squares</h2>
              <p style={S.sectionSub}>Facts true of every perfect square &mdash; useful for spotting them and ruling them out.</p>
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
                    {card.hasDotGrid && (
                      <svg viewBox="0 0 160 160" style={S.dotGridSvg}>
                        {Array.from({ length: 5 }, (_, row) =>
                          Array.from({ length: 5 }, (_, col) => {
                            const layer = Math.max(row, col);
                            return (
                              <circle
                                key={`${row}-${col}`}
                                cx={16 + col * 28}
                                cy={16 + row * 28}
                                r="9"
                                fill={DOT_COLORS[layer]}
                              />
                            );
                          })
                        )}
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
                generator={generatePerfectSquareQuestion}
                title="Test yourself"
                subtitle="Memorize the table by playing. Score persists during your visit."
                allowReset={true}
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfectSquaresPage;