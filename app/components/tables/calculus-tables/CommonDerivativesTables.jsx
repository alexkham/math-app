// // // 'use client';
// // // import { useState, useEffect, useMemo, useRef, Fragment } from 'react';
// // // import { processContent } from '../../../utils/contentProcessor';
// // // import QuizWidget from '../../examples/quiz/QuizWidget';
// // // import generateDerivativeQuestion from '../../examples/quiz/questions/commonDerivativesQuestions';

// // // // =========================================================
// // // //   CommonDerivativesPage  (v2 — full 30-entry list)
// // // //   Page component for /tables/calculus/common-derivatives.
// // // //   View toggle: Reference (cards) <-> Puzzle (matching).
// // // //   All math rendered via processContent with $...$ LaTeX.
// // // //   Props:
// // // //     relatedReferences  array  [{ title, sub, href }] — sidebar links
// // // //     articleHref        string — URL of the canonical article page
// // // // =========================================================

// // // // ---------- Theme ----------
// // // const C = {
// // //   primary:      '#4f46e5',
// // //   primaryDark:  '#3730a3',
// // //   primaryLight: '#eef2ff',
// // //   bg:           '#fafbff',
// // //   border:       '#e0e7ff',
// // //   borderSoft:   '#eef0f7',
// // //   text:         '#1e1b4b',
// // //   textMuted:    '#64748b',
// // //   success:      '#10b981',
// // //   successBg:    '#d1fae5',
// // //   successText:  '#065f46',
// // //   error:        '#ef4444',
// // //   errorBg:      '#fee2e2',
// // //   errorText:    '#991b1b',
// // //   warn:         '#f59e0b',
// // //   warnBg:       '#fef3c7',
// // //   warnText:     '#92400e',
// // //   shadowSm:     '0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)',
// // //   shadowMd:     '0 4px 12px rgba(15,23,42,0.08)',
// // //   shadowLg:     '0 8px 24px rgba(15,23,42,0.10)',

// // //   catPolyBg:    '#dbeafe', catPolyFg: '#1e40af',
// // //   catExpBg:     '#ede9fe', catExpFg:  '#5b21b6',
// // //   catTrigBg:    '#d1fae5', catTrigFg: '#065f46',
// // //   catInvBg:     '#ffe4e6', catInvFg:  '#9f1239',
// // //   catHypBg:     '#ffedd5', catHypFg:  '#9a3412',
// // //   catIHypBg:    '#cffafe', catIHypFg: '#155e75',
// // // };

// // // // ---------- Data: 30 common derivatives ----------
// // // const DERIVATIVES = [
// // //   // ===== Polynomial (5) =====
// // //   { id: 0,  fx: 'c',                dfx: '0',
// // //     cat: 'polynomial',
// // //     fxAlt: ['constant'], dfxAlt: ['zero'],
// // //     tip:  'The derivative of any constant is zero — constants don&apos;t change with $x$.',
// // //     link: '/calculus/derivatives/constant-rule' },
// // //   { id: 1,  fx: 'x',                dfx: '1',
// // //     cat: 'polynomial',
// // //     fxAlt: ['identity'], dfxAlt: ['one'],
// // //     tip:  'The identity function changes at a constant rate of 1.',
// // //     link: '/calculus/derivatives/identity' },
// // //   { id: 2,  fx: 'x^n',              dfx: 'nx^{n-1}',
// // //     cat: 'polynomial',
// // //     fxAlt: ['power', 'xn'], dfxAlt: ['nxn-1'],
// // //     tip:  'The power rule: bring the exponent down as a coefficient, then subtract one from the exponent.',
// // //     link: '/calculus/derivatives/power-rule' },
// // //   { id: 3,  fx: '\\frac{1}{x}',     dfx: '-\\frac{1}{x^2}',
// // //     cat: 'polynomial',
// // //     fxAlt: ['1/x', 'reciprocal'], dfxAlt: ['-1/x^2', '-1/x2'],
// // //     tip:  'Rewrite $\\frac{1}{x}$ as $x^{-1}$, then apply the power rule: $-1 \\cdot x^{-2} = -\\frac{1}{x^2}$.',
// // //     link: '/calculus/derivatives/reciprocal' },
// // //   { id: 4,  fx: '\\sqrt{x}',        dfx: '\\frac{1}{2\\sqrt{x}}',
// // //     cat: 'polynomial',
// // //     fxAlt: ['sqrt', 'root', 'square root'], dfxAlt: ['1/(2sqrt(x))'],
// // //     tip:  '$\\sqrt{x} = x^{1/2}$. Power rule: $(1/2) \\cdot x^{-1/2} = \\frac{1}{2\\sqrt{x}}$. Defined for $x > 0$.',
// // //     link: '/calculus/derivatives/square-root' },

// // //   // ===== Exponential & Log (4) =====
// // //   { id: 5,  fx: 'e^x',              dfx: 'e^x',
// // //     cat: 'exp',
// // //     fxAlt: ['exp', 'ex'], dfxAlt: ['exp', 'ex'],
// // //     tip:  'The natural exponential is its own derivative — the defining property of $e$.',
// // //     link: '/calculus/derivatives/exponential' },
// // //   { id: 6,  fx: 'a^x',              dfx: 'a^x \\ln(a)',
// // //     cat: 'exp',
// // //     fxAlt: ['ax', 'general exponential'], dfxAlt: ['ax ln', 'a^x ln(a)'],
// // //     tip:  'General exponential rule. When $a = e$, $\\ln(a) = 1$, recovering $\\frac{d}{dx}[e^x] = e^x$.',
// // //     link: '/calculus/derivatives/general-exponential' },
// // //   { id: 7,  fx: '\\ln(x)',          dfx: '\\frac{1}{x}',
// // //     cat: 'exp',
// // //     fxAlt: ['ln', 'natural log'], dfxAlt: ['1/x'],
// // //     tip:  'The derivative of the natural logarithm is the reciprocal of its argument. Defined for $x > 0$.',
// // //     link: '/calculus/derivatives/logarithm' },
// // //   { id: 8,  fx: '\\log_a(x)',       dfx: '\\frac{1}{x \\ln(a)}',
// // //     cat: 'exp',
// // //     fxAlt: ['log a', 'general log'], dfxAlt: ['1/(x ln a)'],
// // //     tip:  'General logarithm. Change-of-base gives $\\log_a(x) = \\ln(x)/\\ln(a)$, so the derivative is $\\frac{1}{x \\ln(a)}$.',
// // //     link: '/calculus/derivatives/general-logarithm' },

// // //   // ===== Trig (6) =====
// // //   { id: 9,  fx: '\\sin(x)',         dfx: '\\cos(x)',
// // //     cat: 'trig',
// // //     fxAlt: ['sine'], dfxAlt: ['cosine'],
// // //     tip:  'The classic trig derivative. Cosine is the rate of change of sine.',
// // //     link: '/calculus/derivatives/sine' },
// // //   { id: 10, fx: '\\cos(x)',         dfx: '-\\sin(x)',
// // //     cat: 'trig',
// // //     fxAlt: ['cosine'], dfxAlt: ['negative sine', '-sin'],
// // //     tip:  'Cosine&apos;s derivative is negative sine — the sign flip reflects the 90° phase shift between the two.',
// // //     link: '/calculus/derivatives/cosine' },
// // //   { id: 11, fx: '\\tan(x)',         dfx: '\\sec^2(x)',
// // //     cat: 'trig',
// // //     fxAlt: ['tangent'], dfxAlt: ['sec squared', 'sec^2'],
// // //     tip:  'Derived from the quotient rule on $\\sin / \\cos$: $\\frac{\\cos^2 + \\sin^2}{\\cos^2} = \\frac{1}{\\cos^2} = \\sec^2$.',
// // //     link: '/calculus/derivatives/tangent' },
// // //   { id: 12, fx: '\\cot(x)',         dfx: '-\\csc^2(x)',
// // //     cat: 'trig',
// // //     fxAlt: ['cotangent'], dfxAlt: ['negative csc squared', '-csc^2'],
// // //     tip:  'Sister identity to $\\tan$. The negative sign and the $\\csc$-vs-$\\sec$ swap reflect the symmetry between $\\tan/\\cot$ and $\\sin/\\cos$.',
// // //     link: '/calculus/derivatives/cotangent' },
// // //   { id: 13, fx: '\\sec(x)',         dfx: '\\sec(x)\\tan(x)',
// // //     cat: 'trig',
// // //     fxAlt: ['secant'], dfxAlt: ['sec tan'],
// // //     tip:  'From the chain rule on $(\\cos x)^{-1}$. Memorable because the result keeps both $\\sec$ and $\\tan$.',
// // //     link: '/calculus/derivatives/secant' },
// // //   { id: 14, fx: '\\csc(x)',         dfx: '-\\csc(x)\\cot(x)',
// // //     cat: 'trig',
// // //     fxAlt: ['cosecant'], dfxAlt: ['negative csc cot', '-csc cot'],
// // //     tip:  'Sister to $\\sec$. Like $\\sec$, the result is a product — but with a negative sign, mirroring the $\\cos$ vs $\\sin$ asymmetry.',
// // //     link: '/calculus/derivatives/cosecant' },

// // //   // ===== Inverse Trig (6) =====
// // //   { id: 15, fx: '\\arcsin(x)',      dfx: '\\frac{1}{\\sqrt{1-x^2}}',
// // //     cat: 'inverse',
// // //     fxAlt: ['arcsine', 'inverse sine'], dfxAlt: ['1/sqrt(1-x^2)'],
// // //     tip:  'Inverse function derivative formula. Defined for $|x| < 1$.',
// // //     link: '/calculus/derivatives/arcsine' },
// // //   { id: 16, fx: '\\arccos(x)',      dfx: '-\\frac{1}{\\sqrt{1-x^2}}',
// // //     cat: 'inverse',
// // //     fxAlt: ['arccosine', 'inverse cosine'], dfxAlt: ['-1/sqrt(1-x^2)'],
// // //     tip:  'Sign-flipped twin of $\\arcsin$. Since $\\arcsin(x) + \\arccos(x) = \\pi/2$ is constant, their derivatives cancel.',
// // //     link: '/calculus/derivatives/arccosine' },
// // //   { id: 17, fx: '\\arctan(x)',      dfx: '\\frac{1}{1+x^2}',
// // //     cat: 'inverse',
// // //     fxAlt: ['arctangent', 'inverse tan'], dfxAlt: ['1/(1+x^2)'],
// // //     tip:  'A beautiful derivative — rational, defined for all real $x$, central to many integration tricks.',
// // //     link: '/calculus/derivatives/arctangent' },
// // //   { id: 18, fx: '\\operatorname{arccot}(x)',  dfx: '-\\frac{1}{1+x^2}',
// // //     cat: 'inverse',
// // //     fxAlt: ['arccotangent', 'inverse cot'], dfxAlt: ['-1/(1+x^2)'],
// // //     tip:  'Sign-flipped twin of $\\arctan$. Like arcsin/arccos, $\\arctan(x) + \\operatorname{arccot}(x) = \\pi/2$.',
// // //     link: '/calculus/derivatives/arccotangent' },
// // //   { id: 19, fx: '\\operatorname{arcsec}(x)',  dfx: '\\frac{1}{|x|\\sqrt{x^2-1}}',
// // //     cat: 'inverse',
// // //     fxAlt: ['arcsecant', 'inverse sec'], dfxAlt: ['1/(|x|sqrt(x^2-1))'],
// // //     tip:  'Defined for $|x| \\geq 1$. The absolute value keeps the derivative positive on both branches.',
// // //     link: '/calculus/derivatives/arcsecant' },
// // //   { id: 20, fx: '\\operatorname{arccsc}(x)',  dfx: '-\\frac{1}{|x|\\sqrt{x^2-1}}',
// // //     cat: 'inverse',
// // //     fxAlt: ['arccosecant', 'inverse csc'], dfxAlt: ['-1/(|x|sqrt(x^2-1))'],
// // //     tip:  'Sign-flipped twin of $\\operatorname{arcsec}$, just as arccos is to arcsin.',
// // //     link: '/calculus/derivatives/arccosecant' },

// // //   // ===== Hyperbolic (6) =====
// // //   { id: 21, fx: '\\sinh(x)',        dfx: '\\cosh(x)',
// // //     cat: 'hyperbolic',
// // //     fxAlt: ['hyperbolic sine'], dfxAlt: ['hyperbolic cosine'],
// // //     tip:  'Hyperbolic analog of $\\sin \\to \\cos$. No sign flips — $\\cosh$ relates to $\\sinh$ as $\\cos$ does to $\\sin$, but without the negative.',
// // //     link: '/calculus/derivatives/sinh' },
// // //   { id: 22, fx: '\\cosh(x)',        dfx: '\\sinh(x)',
// // //     cat: 'hyperbolic',
// // //     fxAlt: ['hyperbolic cosine'], dfxAlt: ['hyperbolic sine'],
// // //     tip:  'Hyperbolic cosine differentiates to $\\sinh$ — no negative sign, unlike the trig version.',
// // //     link: '/calculus/derivatives/cosh' },
// // //   { id: 23, fx: '\\tanh(x)',        dfx: '\\operatorname{sech}^2(x)',
// // //     cat: 'hyperbolic',
// // //     fxAlt: ['hyperbolic tangent'], dfxAlt: ['sech squared', 'sech^2'],
// // //     tip:  'Direct analog of $\\frac{d}{dx}[\\tan(x)] = \\sec^2(x)$, with hyperbolic functions in place of trig.',
// // //     link: '/calculus/derivatives/tanh' },
// // //   { id: 24, fx: '\\coth(x)',        dfx: '-\\operatorname{csch}^2(x)',
// // //     cat: 'hyperbolic',
// // //     fxAlt: ['hyperbolic cotangent'], dfxAlt: ['negative csch squared'],
// // //     tip:  'Hyperbolic analog of $\\cot$. The negative sign matches the trig case.',
// // //     link: '/calculus/derivatives/coth' },
// // //   { id: 25, fx: '\\operatorname{sech}(x)',  dfx: '-\\operatorname{sech}(x)\\tanh(x)',
// // //     cat: 'hyperbolic',
// // //     fxAlt: ['hyperbolic secant'], dfxAlt: ['negative sech tanh'],
// // //     tip:  'Hyperbolic analog of $\\sec$, but with a negative sign — opposite of the trig version.',
// // //     link: '/calculus/derivatives/sech' },
// // //   { id: 26, fx: '\\operatorname{csch}(x)',  dfx: '-\\operatorname{csch}(x)\\coth(x)',
// // //     cat: 'hyperbolic',
// // //     fxAlt: ['hyperbolic cosecant'], dfxAlt: ['negative csch coth'],
// // //     tip:  'Hyperbolic analog of $\\csc$. Like $\\csc$, the result is a product, and the sign also matches.',
// // //     link: '/calculus/derivatives/csch' },

// // //   // ===== Inverse Hyperbolic (3) =====
// // //   { id: 27, fx: '\\operatorname{arcsinh}(x)',  dfx: '\\frac{1}{\\sqrt{x^2+1}}',
// // //     cat: 'inverseHyperbolic',
// // //     fxAlt: ['arc sinh', 'inverse hyperbolic sine'], dfxAlt: ['1/sqrt(x^2+1)'],
// // //     tip:  'Note the $+1$ inside the radical (vs $-1$ for $\\arcsin$). Defined for all real $x$.',
// // //     link: '/calculus/derivatives/arcsinh' },
// // //   { id: 28, fx: '\\operatorname{arccosh}(x)',  dfx: '\\frac{1}{\\sqrt{x^2-1}}',
// // //     cat: 'inverseHyperbolic',
// // //     fxAlt: ['arc cosh', 'inverse hyperbolic cosine'], dfxAlt: ['1/sqrt(x^2-1)'],
// // //     tip:  'Defined for $x > 1$. The radical is $x^2 - 1$, the reverse of $\\arcsin$&apos;s domain.',
// // //     link: '/calculus/derivatives/arccosh' },
// // //   { id: 29, fx: '\\operatorname{arctanh}(x)',  dfx: '\\frac{1}{1-x^2}',
// // //     cat: 'inverseHyperbolic',
// // //     fxAlt: ['arc tanh', 'inverse hyperbolic tangent'], dfxAlt: ['1/(1-x^2)'],
// // //     tip:  'Defined for $|x| < 1$. Same denominator structure as $\\arctan$, but with subtraction inside.',
// // //     link: '/calculus/derivatives/arctanh' },
// // // ];

// // // const CATEGORIES = {
// // //   polynomial:        { label: 'Polynomial',     bg: C.catPolyBg, fg: C.catPolyFg },
// // //   exp:               { label: 'Exp / Log',      bg: C.catExpBg,  fg: C.catExpFg  },
// // //   trig:              { label: 'Trig',           bg: C.catTrigBg, fg: C.catTrigFg },
// // //   inverse:           { label: 'Inverse trig',   bg: C.catInvBg,  fg: C.catInvFg  },
// // //   hyperbolic:        { label: 'Hyperbolic',     bg: C.catHypBg,  fg: C.catHypFg  },
// // //   inverseHyperbolic: { label: 'Inverse hyp.',   bg: C.catIHypBg, fg: C.catIHypFg },
// // // };

// // // const FILTER_DEFS = [
// // //   { id: 'polynomial', icon: 'x^n', title: 'Polynomial',
// // //     desc: 'Constants, powers, roots, and reciprocals.',
// // //     match: (d) => d.cat === 'polynomial' },
// // //   { id: 'exp', icon: 'e^x', title: 'Exponential & log',
// // //     desc: 'Exponentials and logarithms, natural and general.',
// // //     match: (d) => d.cat === 'exp' },
// // //   { id: 'trig', icon: 'sin', title: 'Trigonometric',
// // //     desc: 'All six basic trig functions.',
// // //     match: (d) => d.cat === 'trig' },
// // //   { id: 'inverse', icon: 'sin\u207B\u00B9', title: 'Inverse trig',
// // //     desc: 'Inverse trig: $\\arcsin$ through $\\operatorname{arccsc}$.',
// // //     match: (d) => d.cat === 'inverse' },
// // //   { id: 'hyperbolic', icon: 'sinh', title: 'Hyperbolic',
// // //     desc: 'Hyperbolic sine, cosine, tan, and their reciprocals.',
// // //     match: (d) => d.cat === 'hyperbolic' },
// // //   { id: 'inverseHyperbolic', icon: 'sinh\u207B\u00B9', title: 'Inverse hyperbolic',
// // //     desc: 'Inverse hyperbolic functions: $\\operatorname{arcsinh}$, $\\operatorname{arccosh}$, $\\operatorname{arctanh}$.',
// // //     match: (d) => d.cat === 'inverseHyperbolic' },
// // //   { id: 'reciprocal', icon: '1/x', title: 'Reciprocal forms',
// // //     desc: 'Derivatives whose result is a fraction \u2014 a quotient form.',
// // //     match: (d) => /^-?\\frac\{/.test(d.dfx) },
// // // ];

// // // const PROPERTY_CARDS = [
// // //   {
// // //     icon: '\u2295',
// // //     title: 'Linearity',
// // //     body: 'The derivative of a sum is the sum of derivatives. Constants pull out: $\\frac{d}{dx}[c \\cdot f(x)] = c \\cdot f\'(x)$.',
// // //     example: '$\\frac{d}{dx}[3x^2 + 5x] = 6x + 5$',
// // //   },
// // //   {
// // //     icon: '\u00D7',
// // //     title: 'Product rule',
// // //     body: '$\\frac{d}{dx}[fg] = f\'g + fg\'$. Differentiate one factor, leave the other alone, then sum.',
// // //     example: '$\\frac{d}{dx}[x \\sin(x)] = \\sin(x) + x\\cos(x)$',
// // //   },
// // //   {
// // //     icon: '\u00F7',
// // //     title: 'Quotient rule',
// // //     body: '$\\frac{d}{dx}\\!\\left[\\frac{f}{g}\\right] = \\frac{f\'g - fg\'}{g^2}$. Mnemonic: low d-high minus high d-low, over low squared.',
// // //     example: '$\\frac{d}{dx}\\!\\left[\\frac{\\sin(x)}{x}\\right] = \\frac{x\\cos(x) - \\sin(x)}{x^2}$',
// // //   },
// // //   {
// // //     icon: '\u2218',
// // //     title: 'Chain rule',
// // //     body: '$\\frac{d}{dx}[f(g(x))] = f\'(g(x)) \\cdot g\'(x)$. Differentiate the outside, then multiply by the derivative of the inside.',
// // //     example: '$\\frac{d}{dx}[\\sin(x^2)] = \\cos(x^2) \\cdot 2x$',
// // //   },
// // // ];

// // // const TOC_ITEMS = [
// // //   { id: 'sec-tool',       label: 'Derivative tool' },
// // //   { id: 'sec-table',      label: 'The table' },
// // //   { id: 'sec-patterns',   label: 'Categories' },
// // //   { id: 'sec-properties', label: 'Differentiation rules' },
// // //   { id: 'sec-quiz',       label: 'Test yourself' },
// // // ];

// // // // ---------- Helpers ----------
// // // function normalize(s) {
// // //   return String(s).toLowerCase()
// // //     .replace(/\\/g, '')
// // //     .replace(/[\s\u00B7]/g, '')
// // //     .replace(/[{}]/g, '')
// // //     .replace(/operatorname/g, '');
// // // }
// // // function matchAgainst(query, key, altKey) {
// // //   const q = normalize(query);
// // //   if (!q) return [];
// // //   return DERIVATIVES.filter((d) => {
// // //     const main = normalize(d[key]);
// // //     const alts = (d[altKey] || []).map(normalize);
// // //     return main.includes(q) || alts.some((a) => a.includes(q));
// // //   });
// // // }

// // // // ---------- Inline styles ----------
// // // const S = {
// // //   container: {
// // //     maxWidth: '1000px',
// // //     margin: '0 auto',
// // //     padding: '28px 24px 80px',
// // //     position: 'relative',
// // //     fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
// // //     color: C.text,
// // //   },
// // //   pageLayout: { position: 'relative' },
// // //   sidebar: {
// // //     position: 'absolute',
// // //     top: 0,
// // //     right: '100%',
// // //     width: '240px',
// // //     height: '100%',
// // //     marginRight: '40px',
// // //   },
// // //   sidebarSticky: {
// // //     position: 'sticky',
// // //     top: '20px',
// // //     maxHeight: 'calc(100vh - 40px)',
// // //     overflowY: 'auto',
// // //     paddingRight: '4px',
// // //   },
// // //   sidebarBlock: { marginBottom: '32px' },
// // //   sidebarLabel: {
// // //     fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.2px',
// // //     color: C.textMuted, fontWeight: 700, marginBottom: '14px', paddingLeft: '14px',
// // //   },
// // //   tocList: { listStyle: 'none', margin: 0, padding: 0 },
// // //   tocLinkBase: {
// // //     display: 'flex', alignItems: 'center', gap: '10px',
// // //     padding: '9px 0 9px 14px', borderLeft: `2px solid ${C.borderSoft}`,
// // //     color: C.textMuted, textDecoration: 'none', fontSize: '14px',
// // //     lineHeight: 1.3, cursor: 'pointer', transition: 'all 0.15s',
// // //   },
// // //   tocNumBase: {
// // //     display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
// // //     width: '22px', height: '22px', borderRadius: '50%',
// // //     background: C.borderSoft, color: C.textMuted,
// // //     fontSize: '11px', fontWeight: 700, flexShrink: 0, transition: 'all 0.15s',
// // //   },
// // //   relatedMini: {
// // //     display: 'block', padding: '11px 14px', background: 'white',
// // //     border: `1px solid ${C.borderSoft}`, borderRadius: '9px',
// // //     textDecoration: 'none', color: 'inherit',
// // //     marginBottom: '8px', transition: 'all 0.15s', cursor: 'pointer',
// // //   },
// // //   relatedMiniTitle: { fontWeight: 600, color: C.primaryDark, fontSize: '13px', marginBottom: '2px' },
// // //   relatedMiniSub: { fontSize: '12px', color: C.textMuted },
// // //   mainCol: { minWidth: 0, width: '100%' },

// // //   pageIntro: {
// // //     textAlign: 'center', color: C.textMuted, fontSize: '15px',
// // //     margin: '0 auto 32px', maxWidth: '620px',
// // //   },
// // //   pageIntroLink: { color: C.primary, textDecoration: 'none', fontWeight: 600 },

// // //   toolSection: {
// // //     background: 'linear-gradient(135deg, #eef2ff 0%, #f0f9ff 100%)',
// // //     border: `1px solid ${C.border}`, borderRadius: '20px',
// // //     padding: '28px 32px', marginBottom: '36px',
// // //   },
// // //   toolH2: {
// // //     fontFamily: "'Crimson Pro', serif", fontSize: '26px',
// // //     color: C.primaryDark, margin: '0 0 4px', fontWeight: 700,
// // //   },
// // //   toolSub: { color: C.textMuted, fontSize: '14px', margin: '0 0 18px' },
// // //   modeTabsWrap: {
// // //     display: 'inline-flex', background: 'white', borderRadius: '12px',
// // //     padding: '4px', marginBottom: '14px',
// // //     border: `1px solid ${C.border}`, boxShadow: C.shadowSm,
// // //     gap: '2px', flexWrap: 'wrap',
// // //   },
// // //   modeTabBase: {
// // //     padding: '9px 18px', borderRadius: '9px', fontSize: '14px',
// // //     fontWeight: 600, cursor: 'pointer', background: 'transparent',
// // //     border: 'none', transition: 'all 0.18s',
// // //     fontFamily: 'inherit', color: C.textMuted,
// // //   },
// // //   modeTabActive: {
// // //     background: C.primary, color: 'white',
// // //     boxShadow: '0 2px 6px rgba(79,70,229,0.30)',
// // //   },
// // //   inputBlock: {
// // //     display: 'flex', gap: '10px', marginBottom: '8px',
// // //     alignItems: 'center', flexWrap: 'wrap',
// // //   },
// // //   inputField: {
// // //     flex: 1, minWidth: '200px',
// // //     padding: '13px 18px',
// // //     border: `2px solid ${C.border}`, borderRadius: '11px',
// // //     fontSize: '15px', outline: 'none', background: 'white',
// // //     fontFamily: 'inherit', color: C.text,
// // //     transition: 'border-color 0.15s, box-shadow 0.15s',
// // //   },
// // //   inputBtn: {
// // //     padding: '13px 26px', background: C.primary, color: 'white',
// // //     border: 'none', borderRadius: '11px',
// // //     fontWeight: 600, fontSize: '15px', cursor: 'pointer',
// // //     fontFamily: 'inherit', whiteSpace: 'nowrap',
// // //     transition: 'background 0.15s',
// // //   },
// // //   toolStatus: {
// // //     marginTop: '12px', padding: '11px 14px',
// // //     background: 'rgba(255,255,255,0.75)',
// // //     border: `1px solid ${C.border}`, borderRadius: '10px',
// // //     display: 'flex', alignItems: 'flex-start', gap: '10px',
// // //     fontSize: '14px', color: C.text, lineHeight: 1.55,
// // //   },
// // //   statusIcon: {
// // //     width: '22px', height: '22px', borderRadius: '50%',
// // //     display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
// // //     color: 'white', fontSize: '13px', fontWeight: 700,
// // //     flexShrink: 0, marginTop: '1px',
// // //   },

// // //   legend: {
// // //     background: 'white', borderRadius: '16px', padding: '18px 22px',
// // //     marginBottom: '22px', border: `1px solid ${C.borderSoft}`,
// // //     boxShadow: C.shadowSm,
// // //     display: 'flex', flexWrap: 'wrap', gap: '18px',
// // //     alignItems: 'center', justifyContent: 'space-between',
// // //   },
// // //   legendLeft: { display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '540px' },
// // //   legendTitle: {
// // //     fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px',
// // //     color: C.textMuted, fontWeight: 700,
// // //   },
// // //   legendNote: { fontSize: '14px', color: C.textMuted, margin: 0 },
// // //   viewToggle: {
// // //     display: 'inline-flex',
// // //     background: C.bg, borderRadius: '10px', padding: '3px',
// // //     border: `1px solid ${C.border}`, gap: '2px',
// // //   },
// // //   viewBtnBase: {
// // //     padding: '7px 16px', borderRadius: '7px',
// // //     fontSize: '13px', fontWeight: 600, cursor: 'pointer',
// // //     background: 'transparent', border: 'none', fontFamily: 'inherit',
// // //     color: C.textMuted, transition: 'all 0.15s',
// // //   },
// // //   viewBtnActive: {
// // //     background: C.primary, color: 'white',
// // //     boxShadow: '0 2px 4px rgba(79,70,229,0.25)',
// // //   },

// // //   filterStatus: {
// // //     display: 'flex', alignItems: 'center', justifyContent: 'space-between',
// // //     padding: '12px 18px',
// // //     background: 'linear-gradient(90deg, #fef3c7 0%, #fffbeb 100%)',
// // //     border: `1px solid ${C.warn}`, borderRadius: '10px',
// // //     marginBottom: '16px', fontSize: '14px',
// // //   },
// // //   filterStatusText: { color: C.warnText, fontWeight: 600 },
// // //   filterClear: {
// // //     background: 'white', border: `1px solid ${C.warn}`,
// // //     color: C.warnText, padding: '5px 12px', borderRadius: '7px',
// // //     fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
// // //   },

// // //   refGrid: {
// // //     display: 'grid',
// // //     gridTemplateColumns: 'repeat(3, 1fr)',
// // //     gap: '14px', marginBottom: '36px',
// // //   },
// // //   derivCard: {
// // //     background: 'white', border: `1px solid ${C.borderSoft}`,
// // //     borderRadius: '12px', padding: '18px 14px 14px',
// // //     cursor: 'pointer',
// // //     transition: 'transform 0.15s, box-shadow 0.15s, border-color 0.15s, opacity 0.2s',
// // //     position: 'relative',
// // //     display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
// // //   },
// // //   catBadge: {
// // //     position: 'absolute', top: '8px', right: '8px',
// // //     fontSize: '9px', fontWeight: 700, textTransform: 'uppercase',
// // //     letterSpacing: '0.5px', padding: '2px 7px', borderRadius: '4px',
// // //   },
// // //   derivFormula: {
// // //     fontSize: '15px', marginTop: '14px',
// // //     color: C.text, textAlign: 'center', lineHeight: 1.2,
// // //   },
// // //   derivArrow: { color: C.primary, fontSize: '14px', fontWeight: 700 },
// // //   derivResult: {
// // //     fontSize: '18px', fontWeight: 700,
// // //     color: C.primaryDark, textAlign: 'center', lineHeight: 1.2,
// // //   },

// // //   cellDetails: {
// // //     background: 'white', border: `1px solid ${C.border}`,
// // //     borderRadius: '18px', padding: '28px',
// // //     marginBottom: '44px', position: 'relative', boxShadow: C.shadowLg,
// // //   },
// // //   closeDetails: {
// // //     position: 'absolute', top: '16px', right: '16px',
// // //     width: '32px', height: '32px', border: 'none',
// // //     background: C.borderSoft, borderRadius: '50%',
// // //     fontSize: '20px', cursor: 'pointer', color: C.textMuted,
// // //     lineHeight: 1, fontFamily: 'inherit',
// // //   },
// // //   detailsH3: {
// // //     fontSize: '28px',
// // //     color: C.primaryDark, fontWeight: 700, margin: '0 0 16px',
// // //     textAlign: 'center',
// // //   },
// // //   detailsTip: {
// // //     color: C.textMuted, fontSize: '15px',
// // //     lineHeight: 1.65, marginBottom: '16px',
// // //   },
// // //   detailsGrid: {
// // //     display: 'grid',
// // //     gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
// // //     gap: '12px', marginBottom: '16px',
// // //   },
// // //   detailItem: {
// // //     padding: '14px 16px', background: C.bg,
// // //     borderRadius: '10px', border: `1px solid ${C.borderSoft}`,
// // //   },
// // //   detailLabel: {
// // //     fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.8px',
// // //     color: C.textMuted, marginBottom: '6px', fontWeight: 700,
// // //   },
// // //   detailValue: { fontSize: '17px', fontWeight: 700, color: C.text },
// // //   learnMore: {
// // //     display: 'inline-block', color: C.primary, textDecoration: 'none',
// // //     fontWeight: 600, fontSize: '14px',
// // //     padding: '8px 16px', background: C.primaryLight, borderRadius: '8px',
// // //   },

// // //   puzzleControls: {
// // //     display: 'flex', gap: '12px', marginBottom: '16px',
// // //     alignItems: 'center', flexWrap: 'wrap',
// // //   },
// // //   puzzleBtn: {
// // //     padding: '9px 18px', background: C.primary, color: 'white',
// // //     border: 'none', borderRadius: '9px',
// // //     fontWeight: 600, fontSize: '14px', cursor: 'pointer',
// // //     fontFamily: 'inherit',
// // //   },
// // //   puzzleProgress: { color: C.textMuted, fontSize: '14px', fontWeight: 500 },
// // //   puzzleBoard: {
// // //     background: 'white', border: `1px solid ${C.borderSoft}`,
// // //     borderRadius: '14px', padding: '16px',
// // //     marginBottom: '24px', boxShadow: C.shadowSm,
// // //     position: 'relative', transition: 'box-shadow 0.4s ease',
// // //   },
// // //   puzzleRow: {
// // //     display: 'grid',
// // //     gridTemplateColumns: '1fr auto 1fr',
// // //     gap: '12px', marginBottom: '10px', alignItems: 'stretch',
// // //   },
// // //   puzzleLhs: {
// // //     background: C.primaryLight, color: C.primaryDark,
// // //     borderRadius: '8px', padding: '14px 18px',
// // //     fontSize: '16px', fontWeight: 600,
// // //     display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
// // //   },
// // //   puzzleEquals: {
// // //     color: C.primary, fontWeight: 700, fontSize: '22px',
// // //     display: 'flex', alignItems: 'center', padding: '0 4px',
// // //   },
// // //   puzzleSlot: {
// // //     background: C.bg, border: `2px dashed ${C.border}`,
// // //     borderRadius: '8px', padding: '4px',
// // //     minHeight: '54px',
// // //     display: 'flex', alignItems: 'stretch',
// // //     transition: 'border-color 0.15s, background 0.15s',
// // //     position: 'relative',
// // //   },
// // //   puzzleTileBase: {
// // //     position: 'relative', background: C.primary, color: 'white',
// // //     border: '2px solid transparent', borderRadius: '6px',
// // //     padding: '10px 16px', fontSize: '16px',
// // //     cursor: 'grab', width: '100%',
// // //     display: 'flex', alignItems: 'center', justifyContent: 'center',
// // //     userSelect: 'none',
// // //     transition: 'background 0.2s, transform 0.2s, border-color 0.2s',
// // //   },
// // //   solvedBanner: {
// // //     marginTop: '20px', padding: '16px 22px',
// // //     background: `linear-gradient(90deg, ${C.primaryLight} 0%, #f0f9ff 100%)`,
// // //     border: `1px solid ${C.primary}`, borderRadius: '12px',
// // //     color: C.primaryDark, fontWeight: 600, fontSize: '15px',
// // //     textAlign: 'center',
// // //   },
// // //   backToRef: {
// // //     color: C.primary, textDecoration: 'none', fontWeight: 600,
// // //     marginLeft: '8px', cursor: 'pointer',
// // //   },

// // //   sectionH: {
// // //     fontFamily: "'Crimson Pro', serif", fontSize: '30px',
// // //     color: '#1e3a8a', fontWeight: 700, letterSpacing: '-0.3px',
// // //     margin: '0 0 8px',
// // //   },
// // //   sectionSub: { color: C.textMuted, marginBottom: '26px', fontSize: '15px' },

// // //   filtersDisabledNote: {
// // //     marginBottom: '16px', padding: '10px 16px',
// // //     background: C.bg, border: `1px dashed ${C.border}`,
// // //     borderRadius: '8px', color: C.textMuted,
// // //     fontSize: '13px', textAlign: 'center',
// // //   },
// // //   filterGrid: {
// // //     display: 'grid',
// // //     gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
// // //     gap: '16px', marginBottom: '40px',
// // //   },
// // //   filterCard: {
// // //     background: 'white', border: `2px solid ${C.borderSoft}`,
// // //     borderRadius: '14px', padding: '20px',
// // //     cursor: 'pointer', transition: 'all 0.18s',
// // //     position: 'relative', boxShadow: C.shadowSm,
// // //   },
// // //   filterIcon: {
// // //     width: '44px', height: '44px',
// // //     background: `linear-gradient(135deg, ${C.primary} 0%, #6366f1 100%)`,
// // //     color: 'white', borderRadius: '12px',
// // //     display: 'flex', alignItems: 'center', justifyContent: 'center',
// // //     fontSize: '14px', fontWeight: 700,
// // //     marginBottom: '14px',
// // //     boxShadow: '0 4px 10px rgba(79,70,229,0.25)',
// // //   },
// // //   filterCardH3: { fontSize: '16px', fontWeight: 700, color: C.text, margin: '0 0 6px' },
// // //   filterCardP: { color: C.textMuted, fontSize: '13px', marginBottom: '14px', lineHeight: 1.5 },
// // //   filterCardFooter: {
// // //     display: 'flex', alignItems: 'center', justifyContent: 'space-between',
// // //     paddingTop: '12px', borderTop: `1px solid ${C.borderSoft}`,
// // //   },
// // //   filterCount: { fontSize: '13px', fontWeight: 700, color: C.primaryDark },
// // //   filterAction: {
// // //     fontSize: '12px', color: C.textMuted,
// // //     textTransform: 'uppercase', letterSpacing: '0.6px', fontWeight: 600,
// // //   },

// // //   propertiesSection: { marginTop: '32px' },
// // //   propertyGrid: {
// // //     display: 'grid',
// // //     gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
// // //     gap: '16px',
// // //   },
// // //   propertyCard: {
// // //     background: 'white', border: `1px solid ${C.borderSoft}`,
// // //     borderRadius: '14px', padding: '22px', boxShadow: C.shadowSm,
// // //   },
// // //   propertyCardIcon: {
// // //     width: '36px', height: '36px',
// // //     background: C.primaryLight, color: C.primaryDark, borderRadius: '9px',
// // //     display: 'flex', alignItems: 'center', justifyContent: 'center',
// // //     fontSize: '17px', fontWeight: 700, marginBottom: '12px',
// // //   },
// // //   propertyCardH4: { fontSize: '15px', fontWeight: 700, color: C.text, margin: '0 0 6px' },
// // //   propertyCardP: { color: C.textMuted, fontSize: '13px', lineHeight: 1.6, margin: 0 },
// // //   propertyCardExample: {
// // //     background: C.bg, padding: '10px 14px', borderRadius: '6px',
// // //     fontSize: '14px', marginTop: '10px',
// // //     color: C.primaryDark, textAlign: 'center',
// // //     border: `1px solid ${C.borderSoft}`,
// // //   },
// // //   quizSection: { marginTop: '56px' },
// // // };

// // // // ---------- CSS (pseudo-classes, hover, media queries) ----------
// // // const CSS = `
// // // .cdp-toc-link:hover { color: ${C.primary}; }
// // // .cdp-related-mini:hover {
// // //   border-color: ${C.primary} !important;
// // //   transform: translateX(2px);
// // //   box-shadow: ${C.shadowSm};
// // // }
// // // .cdp-input-field:focus {
// // //   border-color: ${C.primary} !important;
// // //   box-shadow: 0 0 0 4px rgba(79,70,229,0.12);
// // // }
// // // .cdp-input-btn:hover { background: ${C.primaryDark} !important; }
// // // .cdp-mode-tab:not(.active):hover { color: ${C.primary} !important; }
// // // .cdp-view-btn:not(.active):hover { color: ${C.primary}; }

// // // .cdp-deriv-card:hover {
// // //   transform: translateY(-2px);
// // //   box-shadow: 0 6px 16px rgba(15,23,42,0.10);
// // //   border-color: ${C.primary};
// // //   z-index: 5;
// // // }
// // // .cdp-deriv-card.highlight {
// // //   border: 2px solid ${C.warn} !important;
// // //   box-shadow: 0 0 0 3px rgba(245,158,11,0.35), 0 6px 16px rgba(245,158,11,0.25);
// // //   transform: scale(1.05);
// // //   z-index: 4;
// // // }
// // // .cdp-deriv-card.filter-match {
// // //   border: 2px solid ${C.warn} !important;
// // //   box-shadow: 0 4px 14px rgba(245,158,11,0.35);
// // //   transform: scale(1.04);
// // //   z-index: 3;
// // // }
// // // .cdp-deriv-card.filter-dim { opacity: 0.25; }

// // // .cdp-filter-card:hover {
// // //   transform: translateY(-3px);
// // //   box-shadow: ${C.shadowMd};
// // //   border-color: ${C.border} !important;
// // // }
// // // .cdp-filter-card.active {
// // //   border-color: ${C.warn} !important;
// // //   background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%) !important;
// // //   box-shadow: 0 0 0 4px rgba(245,158,11,0.18), ${C.shadowMd};
// // // }
// // // .cdp-filter-card.active::after {
// // //   content: '\u25CF Active';
// // //   position: absolute; top: 12px; right: 14px;
// // //   font-size: 11px; font-weight: 700;
// // //   color: ${C.warnText}; letter-spacing: 0.5px;
// // // }
// // // .cdp-filter-card.active .cdp-filter-icon {
// // //   background: linear-gradient(135deg, ${C.warn} 0%, #fb923c 100%) !important;
// // //   box-shadow: 0 4px 10px rgba(245,158,11,0.3) !important;
// // // }
// // // .cdp-filter-card.active .cdp-filter-count,
// // // .cdp-filter-card.active .cdp-filter-action {
// // //   color: ${C.warnText} !important;
// // // }
// // // .cdp-filter-card.disabled {
// // //   opacity: 0.5; cursor: not-allowed; pointer-events: none;
// // // }

// // // .cdp-close-details:hover { background: #e5e7eb !important; color: ${C.text} !important; }
// // // .cdp-learn-more:hover { background: ${C.border} !important; }

// // // .cdp-puzzle-board.solved {
// // //   box-shadow: 0 0 0 3px ${C.primary}, 0 0 30px 8px rgba(79,70,229,0.35);
// // // }
// // // .cdp-puzzle-btn:hover { background: ${C.primaryDark} !important; }
// // // .cdp-puzzle-slot.drag-over {
// // //   border-color: ${C.primary} !important;
// // //   background: ${C.primaryLight} !important;
// // // }
// // // .cdp-puzzle-tile:hover { background: ${C.primaryDark}; }
// // // .cdp-puzzle-tile:active { cursor: grabbing; }
// // // .cdp-puzzle-tile.dragging { opacity: 0.3; }
// // // .cdp-puzzle-tile.correct {
// // //   background: ${C.successBg} !important;
// // //   color: ${C.successText} !important;
// // //   border-color: ${C.success} !important;
// // //   cursor: default !important;
// // // }
// // // .cdp-puzzle-tile.correct:hover { background: ${C.successBg} !important; }
// // // .cdp-puzzle-tile.just-placed { animation: cdpTilePulse 0.7s ease; }
// // // @keyframes cdpTilePulse {
// // //   0%   { transform: scale(1);    box-shadow: 0 0 0 0 rgba(16,185,129,0.45); }
// // //   40%  { transform: scale(1.04); box-shadow: 0 0 0 8px rgba(16,185,129,0.45); }
// // //   100% { transform: scale(1);    box-shadow: 0 0 0 0 transparent; }
// // // }

// // // .cdp-tile-strip {
// // //   position: absolute; bottom: -1px; left: 50%;
// // //   transform: translate(-50%, 50%);
// // //   background: ${C.success}; color: white;
// // //   padding: 2px 10px; border-radius: 4px;
// // //   font-size: 10px; font-weight: 700;
// // //   letter-spacing: 0.5px; text-transform: uppercase;
// // //   white-space: nowrap; z-index: 1;
// // //   display: flex; align-items: center; gap: 6px;
// // // }
// // // .cdp-see-why {
// // //   color: white; text-decoration: underline;
// // //   background: none; border: none; padding: 0;
// // //   cursor: pointer; font-family: inherit;
// // //   font-size: 10px; font-weight: 700; text-transform: uppercase;
// // // }
// // // .cdp-help-btn {
// // //   position: absolute; top: 4px; left: 6px;
// // //   width: 16px; height: 16px;
// // //   border-radius: 50%; border: 1.5px solid currentColor;
// // //   background: transparent;
// // //   color: rgba(255,255,255,0.85);
// // //   font-size: 10px; font-weight: 700; font-family: inherit;
// // //   cursor: pointer;
// // //   display: flex; align-items: center; justify-content: center;
// // //   padding: 0; line-height: 1;
// // // }
// // // .cdp-help-btn:hover { color: white; background: rgba(255,255,255,0.2); }

// // // .cdp-popover {
// // //   position: absolute;
// // //   bottom: calc(100% + 8px); left: 50%;
// // //   transform: translateX(-50%);
// // //   background: #0f172a; color: #f1f5f9;
// // //   border: 1px solid #334155;
// // //   border-radius: 8px;
// // //   padding: 12px 28px 12px 14px;
// // //   width: 280px;
// // //   font-size: 13px; line-height: 1.5;
// // //   font-family: 'Inter', sans-serif;
// // //   text-align: left;
// // //   box-shadow: 0 12px 30px rgba(0,0,0,0.35);
// // //   z-index: 100;
// // //   white-space: normal;
// // // }
// // // .cdp-popover-close {
// // //   position: absolute; top: 4px; right: 6px;
// // //   background: transparent; border: none;
// // //   color: #94a3b8; cursor: pointer;
// // //   font-size: 16px; padding: 0; line-height: 1;
// // //   font-family: inherit;
// // // }
// // // .cdp-popover a {
// // //   display: inline-block; margin-top: 8px;
// // //   color: #93c5fd; text-decoration: none; font-weight: 600;
// // // }
// // // .cdp-popover a:hover { text-decoration: underline; }

// // // .cdp-back-to-ref:hover { text-decoration: underline; }
// // // .cdp-sidebar-sticky::-webkit-scrollbar { width: 4px; }
// // // .cdp-sidebar-sticky::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 4px; }

// // // @keyframes cdpSlideIn {
// // //   from { opacity: 0; transform: translateY(-8px); }
// // //   to   { opacity: 1; transform: translateY(0); }
// // // }
// // // .cdp-cell-details { animation: cdpSlideIn 0.25s ease; }

// // // @media (max-width: 1320px) {
// // //   .cdp-sidebar { display: none !important; }
// // // }
// // // @media (max-width: 900px) {
// // //   .cdp-ref-grid { grid-template-columns: repeat(2, 1fr) !important; }
// // //   .cdp-puzzle-row { grid-template-columns: 1fr !important; gap: 6px !important; }
// // //   .cdp-puzzle-lhs { justify-content: center !important; }
// // //   .cdp-puzzle-equals { display: none !important; }
// // // }
// // // @media (max-width: 640px) {
// // //   .cdp-ref-grid { grid-template-columns: 1fr !important; }
// // //   .cdp-input-block { flex-direction: column !important; align-items: stretch !important; }
// // //   .cdp-input-block input, .cdp-input-block button { width: 100% !important; }
// // //   .cdp-mode-tab { padding: 9px 14px !important; font-size: 13px !important; }
// // // }
// // // `;

// // // // ---------- Component ----------
// // // const CommonDerivativesPage = ({ relatedReferences = [], articleHref = '/calculus/derivatives/common' }) => {
// // //   const [viewMode, setViewMode] = useState('reference');
// // //   const [mode, setMode] = useState('byF');

// // //   const [fInput, setFInput] = useState('');
// // //   const [dfInput, setDfInput] = useState('');

// // //   const [statusKind, setStatusKind] = useState(null);
// // //   const [statusIcon, setStatusIcon] = useState('');
// // //   const [statusContent, setStatusContent] = useState(null);

// // //   const [highlightedIds, setHighlightedIds] = useState(() => new Set());
// // //   const [activeFilter, setActiveFilter] = useState(null);
// // //   const [detailsId, setDetailsId] = useState(null);

// // //   const [slots, setSlots] = useState(() => DERIVATIVES.map((d) => d.id));
// // //   const [prevCorrect, setPrevCorrect] = useState(() => new Set(DERIVATIVES.map((d) => d.id)));
// // //   const [justPlacedId, setJustPlacedId] = useState(null);
// // //   const [draggedFromSlot, setDraggedFromSlot] = useState(null);
// // //   const [dragOverSlot, setDragOverSlot] = useState(null);
// // //   const [openTipId, setOpenTipId] = useState(null);

// // //   const [activeSection, setActiveSection] = useState('sec-tool');
// // //   const [pendingScroll, setPendingScroll] = useState(null);

// // //   const cardRefs = useRef({});
// // //   const sectionRefs = useRef({});
// // //   const justPlacedTimer = useRef(null);

// // //   const isSolved = useMemo(
// // //     () => slots.every((tileId, slotIdx) => tileId === slotIdx),
// // //     [slots]
// // //   );
// // //   const correctCount = useMemo(
// // //     () => slots.filter((tileId, slotIdx) => tileId === slotIdx).length,
// // //     [slots]
// // //   );
// // //   const filterCounts = useMemo(() => {
// // //     const counts = {};
// // //     FILTER_DEFS.forEach((f) => {
// // //       counts[f.id] = DERIVATIVES.filter(f.match).length;
// // //     });
// // //     return counts;
// // //   }, []);

// // //   useEffect(() => {
// // //     if (!pendingScroll) return;
// // //     let el = null;
// // //     if (pendingScroll.type === 'card') {
// // //       el = cardRefs.current[pendingScroll.id];
// // //     } else if (pendingScroll.type === 'section') {
// // //       el = sectionRefs.current[pendingScroll.id];
// // //     } else if (pendingScroll.type === 'details') {
// // //       el = document.getElementById('cdp-cell-details');
// // //     }
// // //     if (el) {
// // //       el.scrollIntoView({
// // //         behavior: 'smooth',
// // //         block: pendingScroll.type === 'section' ? 'start' : 'center',
// // //       });
// // //     }
// // //     setPendingScroll(null);
// // //   }, [pendingScroll]);

// // //   useEffect(() => {
// // //     const sections = TOC_ITEMS
// // //       .map((it) => sectionRefs.current[it.id])
// // //       .filter(Boolean);
// // //     if (sections.length === 0) return;
// // //     const obs = new IntersectionObserver((entries) => {
// // //       entries.forEach((e) => {
// // //         if (e.isIntersecting) setActiveSection(e.target.id);
// // //       });
// // //     }, { rootMargin: '-25% 0px -65% 0px' });
// // //     sections.forEach((s) => obs.observe(s));
// // //     return () => obs.disconnect();
// // //   }, []);

// // //   useEffect(() => {
// // //     if (openTipId === null) return;
// // //     const handler = (e) => {
// // //       if (!e.target.closest('.cdp-popover') &&
// // //           !e.target.closest('.cdp-help-btn') &&
// // //           !e.target.closest('.cdp-see-why')) {
// // //         setOpenTipId(null);
// // //       }
// // //     };
// // //     const onKey = (e) => { if (e.key === 'Escape') setOpenTipId(null); };
// // //     document.addEventListener('mousedown', handler);
// // //     document.addEventListener('keydown', onKey);
// // //     return () => {
// // //       document.removeEventListener('mousedown', handler);
// // //       document.removeEventListener('keydown', onKey);
// // //     };
// // //   }, [openTipId]);

// // //   useEffect(() => () => {
// // //     if (justPlacedTimer.current) clearTimeout(justPlacedTimer.current);
// // //   }, []);

// // //   const setStatus = (kind, icon, content) => {
// // //     setStatusKind(kind);
// // //     setStatusIcon(icon);
// // //     setStatusContent(content);
// // //   };
// // //   const hideStatus = () => {
// // //     setStatusKind(null);
// // //     setStatusIcon('');
// // //     setStatusContent(null);
// // //   };

// // //   const handleModeChange = (next) => {
// // //     setMode(next);
// // //     hideStatus();
// // //   };

// // //   const handleViewChange = (next) => {
// // //     setViewMode(next);
// // //     setOpenTipId(null);
// // //     if (next === 'puzzle') {
// // //       setActiveFilter(null);
// // //       setHighlightedIds(new Set());
// // //       setDetailsId(null);
// // //       hideStatus();
// // //       if (slots.every((t, i) => t === i)) shufflePuzzle();
// // //     }
// // //   };

// // //   const runFind = (query, type) => {
// // //     if (!query.trim()) {
// // //       setStatus('error', '!', 'Please enter something to search.');
// // //       return;
// // //     }
// // //     if (viewMode === 'puzzle') setViewMode('reference');
// // //     setActiveFilter(null);
// // //     setDetailsId(null);
// // //     const matches = type === 'byF'
// // //       ? matchAgainst(query, 'fx', 'fxAlt')
// // //       : matchAgainst(query, 'dfx', 'dfxAlt');
// // //     setHighlightedIds(new Set(matches.map((d) => d.id)));
// // //     if (matches.length === 0) {
// // //       setStatus('info', '\u2211',
// // //         processContent(`No entries match **${query}**. Try another expression.`));
// // //     } else if (matches.length === 1) {
// // //       const d = matches[0];
// // //       setStatus('success', '\u2713',
// // //         processContent(`Found: **$\\frac{d}{dx}[${d.fx}] = ${d.dfx}$**. Card highlighted below.`));
// // //       setPendingScroll({ type: 'card', id: d.id });
// // //     } else {
// // //       setStatus('success', '\u2211',
// // //         processContent(`**${matches.length}** matches highlighted below.`));
// // //       setPendingScroll({ type: 'section', id: 'sec-table' });
// // //     }
// // //   };

// // //   const toggleFilter = (id) => {
// // //     setHighlightedIds(new Set());
// // //     setDetailsId(null);
// // //     if (activeFilter === id) {
// // //       setActiveFilter(null);
// // //       hideStatus();
// // //     } else {
// // //       setActiveFilter(id);
// // //       hideStatus();
// // //       setPendingScroll({ type: 'section', id: 'sec-table' });
// // //     }
// // //   };
// // //   const handleClearHighlights = () => {
// // //     setActiveFilter(null);
// // //     setHighlightedIds(new Set());
// // //     setDetailsId(null);
// // //     hideStatus();
// // //   };

// // //   const handleCardClick = (id) => {
// // //     setDetailsId(id);
// // //     setHighlightedIds(new Set([id]));
// // //     setActiveFilter(null);
// // //     setPendingScroll({ type: 'details' });
// // //   };

// // //   const shufflePuzzle = () => {
// // //     const ids = DERIVATIVES.map((d) => d.id);
// // //     for (let i = ids.length - 1; i > 0; i--) {
// // //       const j = Math.floor(Math.random() * (i + 1));
// // //       [ids[i], ids[j]] = [ids[j], ids[i]];
// // //     }
// // //     setSlots(ids);
// // //     setOpenTipId(null);
// // //     setJustPlacedId(null);
// // //     setDraggedFromSlot(null);
// // //     setDragOverSlot(null);
// // //     const initialCorrect = new Set();
// // //     ids.forEach((tid, sidx) => { if (tid === sidx) initialCorrect.add(tid); });
// // //     setPrevCorrect(initialCorrect);
// // //   };

// // //   const handleDragStart = (e, slotIdx) => {
// // //     if (slots[slotIdx] === slotIdx) return;
// // //     setDraggedFromSlot(slotIdx);
// // //     e.dataTransfer.effectAllowed = 'move';
// // //     setOpenTipId(null);
// // //   };
// // //   const handleDragEnd = () => {
// // //     setDraggedFromSlot(null);
// // //     setDragOverSlot(null);
// // //   };
// // //   const handleDragOver = (e, slotIdx) => {
// // //     if (draggedFromSlot === null) return;
// // //     if (slots[slotIdx] === slotIdx) return;
// // //     e.preventDefault();
// // //     e.dataTransfer.dropEffect = 'move';
// // //     if (dragOverSlot !== slotIdx) setDragOverSlot(slotIdx);
// // //   };
// // //   const handleDragLeave = (slotIdx) => {
// // //     if (dragOverSlot === slotIdx) setDragOverSlot(null);
// // //   };
// // //   const handleDrop = (e, slotIdx) => {
// // //     e.preventDefault();
// // //     setDragOverSlot(null);
// // //     if (draggedFromSlot === null) return;
// // //     if (slotIdx === draggedFromSlot) return;
// // //     if (slots[slotIdx] === slotIdx) return;
// // //     const newSlots = [...slots];
// // //     const tmp = newSlots[draggedFromSlot];
// // //     newSlots[draggedFromSlot] = newSlots[slotIdx];
// // //     newSlots[slotIdx] = tmp;
// // //     const movedTileId = newSlots[slotIdx];
// // //     const becameCorrect = (movedTileId === slotIdx) && !prevCorrect.has(movedTileId);
// // //     const newCorrect = new Set();
// // //     newSlots.forEach((tid, sidx) => { if (tid === sidx) newCorrect.add(tid); });
// // //     setSlots(newSlots);
// // //     setPrevCorrect(newCorrect);
// // //     setDraggedFromSlot(null);
// // //     if (becameCorrect) {
// // //       setJustPlacedId(movedTileId);
// // //       if (justPlacedTimer.current) clearTimeout(justPlacedTimer.current);
// // //       justPlacedTimer.current = setTimeout(() => {
// // //         setJustPlacedId(null);
// // //         justPlacedTimer.current = null;
// // //       }, 700);
// // //     }
// // //   };
// // //   const handleTipToggle = (tileId) => {
// // //     setOpenTipId(openTipId === tileId ? null : tileId);
// // //   };

// // //   const tocLinkStyle = (id) => {
// // //     const base = { ...S.tocLinkBase };
// // //     if (activeSection === id) {
// // //       base.color = C.primaryDark;
// // //       base.borderLeftColor = C.primary;
// // //       base.fontWeight = 600;
// // //       base.background = `linear-gradient(90deg, ${C.primaryLight} 0%, transparent 100%)`;
// // //     }
// // //     return base;
// // //   };
// // //   const tocNumStyle = (id) => {
// // //     const base = { ...S.tocNumBase };
// // //     if (activeSection === id) {
// // //       base.background = C.primary;
// // //       base.color = 'white';
// // //     }
// // //     return base;
// // //   };

// // //   let bannerText = '';
// // //   if (activeFilter) {
// // //     const def = FILTER_DEFS.find((f) => f.id === activeFilter);
// // //     bannerText = `Filtering: ${def.title} \u2014 ${filterCounts[def.id]} match${filterCounts[def.id] === 1 ? '' : 'es'} highlighted`;
// // //   } else if (highlightedIds.size > 0) {
// // //     bannerText = `${highlightedIds.size} entr${highlightedIds.size === 1 ? 'y' : 'ies'} highlighted by tool`;
// // //   }
// // //   const showBanner = (activeFilter !== null || highlightedIds.size > 0) && viewMode === 'reference';

// // //   const statusIconBg = ({
// // //     success: C.success, error: C.error, info: C.primary,
// // //   })[statusKind] || C.primary;

// // //   const renderCard = (d) => {
// // //     const cls = ['cdp-deriv-card'];
// // //     if (highlightedIds.has(d.id)) cls.push('highlight');
// // //     if (activeFilter) {
// // //       const def = FILTER_DEFS.find((f) => f.id === activeFilter);
// // //       if (def.match(d)) cls.push('filter-match');
// // //       else cls.push('filter-dim');
// // //     }
// // //     const cat = CATEGORIES[d.cat];
// // //     return (
// // //       <div
// // //         key={d.id}
// // //         ref={(el) => { cardRefs.current[d.id] = el; }}
// // //         className={cls.join(' ')}
// // //         style={S.derivCard}
// // //         onClick={() => handleCardClick(d.id)}
// // //       >
// // //         <span style={{ ...S.catBadge, background: cat.bg, color: cat.fg }}>
// // //           {cat.label}
// // //         </span>
// // //         <div style={S.derivFormula}>
// // //           {processContent(`$\\frac{d}{dx}\\!\\left[${d.fx}\\right]$`)}
// // //         </div>
// // //         <div style={S.derivArrow}>&darr;</div>
// // //         <div style={S.derivResult}>
// // //           {processContent(`$${d.dfx}$`)}
// // //         </div>
// // //       </div>
// // //     );
// // //   };

// // //   const detailsDeriv = detailsId !== null ? DERIVATIVES.find((d) => d.id === detailsId) : null;
// // //   const detailsCat = detailsDeriv ? CATEGORIES[detailsDeriv.cat] : null;

// // //   const renderPuzzleRow = (tileId, slotIdx) => {
// // //     const correctDeriv = DERIVATIVES[slotIdx];
// // //     const tile = DERIVATIVES[tileId];
// // //     const correct = tileId === slotIdx;
// // //     const justPlaced = correct && justPlacedId === tileId;
// // //     const dragging = draggedFromSlot === slotIdx;
// // //     const dragOver = dragOverSlot === slotIdx;
// // //     const tipOpen = openTipId === tileId;

// // //     const tileCls = ['cdp-puzzle-tile'];
// // //     if (correct) tileCls.push('correct');
// // //     if (justPlaced) tileCls.push('just-placed');
// // //     if (dragging) tileCls.push('dragging');

// // //     const slotCls = ['cdp-puzzle-slot'];
// // //     if (dragOver) slotCls.push('drag-over');

// // //     return (
// // //       <div key={slotIdx} className="cdp-puzzle-row" style={S.puzzleRow}>
// // //         <div className="cdp-puzzle-lhs" style={S.puzzleLhs}>
// // //           {processContent(`$\\frac{d}{dx}\\!\\left[${correctDeriv.fx}\\right]$`)}
// // //         </div>
// // //         <div className="cdp-puzzle-equals" style={S.puzzleEquals}>=</div>
// // //         <div
// // //           className={slotCls.join(' ')}
// // //           style={S.puzzleSlot}
// // //           data-slot={slotIdx}
// // //           onDragOver={(e) => handleDragOver(e, slotIdx)}
// // //           onDragLeave={() => handleDragLeave(slotIdx)}
// // //           onDrop={(e) => handleDrop(e, slotIdx)}
// // //         >
// // //           <div
// // //             className={tileCls.join(' ')}
// // //             style={S.puzzleTileBase}
// // //             draggable={!correct}
// // //             onDragStart={(e) => handleDragStart(e, slotIdx)}
// // //             onDragEnd={handleDragEnd}
// // //           >
// // //             {!correct && tile.tip && (
// // //               <button
// // //                 type="button"
// // //                 className="cdp-help-btn"
// // //                 title="Get a hint"
// // //                 draggable={false}
// // //                 onMouseDown={(e) => e.stopPropagation()}
// // //                 onDragStart={(e) => e.preventDefault()}
// // //                 onClick={(e) => { e.stopPropagation(); handleTipToggle(tile.id); }}
// // //               >
// // //                 ?
// // //               </button>
// // //             )}
// // //             <span>{processContent(`$${tile.dfx}$`)}</span>
// // //             {correct && (
// // //               <div className="cdp-tile-strip">
// // //                 <span>&#10003; In place</span>
// // //                 {tile.tip && (
// // //                   <>
// // //                     <span style={{ opacity: 0.6 }}>&mdash;</span>
// // //                     <button
// // //                       type="button"
// // //                       className="cdp-see-why"
// // //                       title="See why"
// // //                       draggable={false}
// // //                       onMouseDown={(e) => e.stopPropagation()}
// // //                       onDragStart={(e) => e.preventDefault()}
// // //                       onClick={(e) => { e.stopPropagation(); handleTipToggle(tile.id); }}
// // //                     >
// // //                       see why
// // //                     </button>
// // //                   </>
// // //                 )}
// // //               </div>
// // //             )}
// // //             {tipOpen && tile.tip && (
// // //               <div className="cdp-popover" onMouseDown={(e) => e.stopPropagation()}>
// // //                 <button
// // //                   type="button"
// // //                   className="cdp-popover-close"
// // //                   onClick={(e) => { e.stopPropagation(); setOpenTipId(null); }}
// // //                   aria-label="Close"
// // //                 >
// // //                   &times;
// // //                 </button>
// // //                 <div>{processContent(tile.tip)}</div>
// // //                 {tile.link && (
// // //                   <a href={tile.link} target="_blank" rel="noopener noreferrer">
// // //                     Learn more &rarr;
// // //                   </a>
// // //                 )}
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   };

// // //   const modeTabs = [
// // //     { id: 'byF',  label: 'Find by f(x)' },
// // //     { id: 'byDF', label: <>Find by f&apos;(x)</> },
// // //   ];

// // //   return (
// // //     <>
// // //       <style dangerouslySetInnerHTML={{ __html: CSS }} />
// // //       <div style={S.container}>

// // //         <p style={S.pageIntro}>
// // //           Reference table of the most-used derivative identities. Try
// // //           {' '}<strong>puzzle</strong> mode to drill, or read the full{' '}
// // //           <a href={articleHref} style={S.pageIntroLink}>derivatives explanation &rarr;</a>
// // //         </p>

// // //         <div className="cdp-layout" style={S.pageLayout}>

// // //           <aside className="cdp-sidebar" style={S.sidebar}>
// // //             <div className="cdp-sidebar-sticky" style={S.sidebarSticky}>
// // //               <div style={S.sidebarBlock}>
// // //                 <div style={S.sidebarLabel}>On this page</div>
// // //                 <ul style={S.tocList}>
// // //                   {TOC_ITEMS.map((item, idx) => (
// // //                     <li key={item.id}>
// // //                       <a
// // //                         className={`cdp-toc-link ${activeSection === item.id ? 'active' : ''}`}
// // //                         style={tocLinkStyle(item.id)}
// // //                         onClick={(e) => {
// // //                           e.preventDefault();
// // //                           const t = sectionRefs.current[item.id];
// // //                           if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
// // //                         }}
// // //                       >
// // //                         <span style={tocNumStyle(item.id)}>{idx + 1}</span>
// // //                         {item.label}
// // //                       </a>
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //               </div>

// // //               {relatedReferences && relatedReferences.length > 0 && (
// // //                 <div style={S.sidebarBlock}>
// // //                   <div style={S.sidebarLabel}>Related references</div>
// // //                   {relatedReferences.map((ref, idx) => (
// // //                     <a
// // //                       key={idx}
// // //                       href={ref.href}
// // //                       className="cdp-related-mini"
// // //                       style={S.relatedMini}
// // //                     >
// // //                       <div style={S.relatedMiniTitle}>{ref.title}</div>
// // //                       {ref.sub && <div style={S.relatedMiniSub}>{ref.sub}</div>}
// // //                     </a>
// // //                   ))}
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </aside>

// // //           <div style={S.mainCol}>

// // //             <section
// // //               id="sec-tool"
// // //               ref={(el) => { sectionRefs.current['sec-tool'] = el; }}
// // //               style={S.toolSection}
// // //             >
// // //               <h2 style={S.toolH2}>Derivative Tool</h2>
// // //               <p style={S.toolSub}>Every answer takes you to the table. Pick a question:</p>

// // //               <div style={S.modeTabsWrap}>
// // //                 {modeTabs.map((tab) => {
// // //                   const isActive = mode === tab.id;
// // //                   return (
// // //                     <button
// // //                       key={tab.id}
// // //                       type="button"
// // //                       className={`cdp-mode-tab ${isActive ? 'active' : ''}`}
// // //                       style={{ ...S.modeTabBase, ...(isActive ? S.modeTabActive : {}) }}
// // //                       onClick={() => handleModeChange(tab.id)}
// // //                     >
// // //                       {tab.label}
// // //                     </button>
// // //                   );
// // //                 })}
// // //               </div>

// // //               {mode === 'byF' && (
// // //                 <div className="cdp-input-block" style={S.inputBlock}>
// // //                   <input
// // //                     type="text"
// // //                     className="cdp-input-field"
// // //                     style={S.inputField}
// // //                     placeholder="Enter f(x) (e.g., sin, ln, tanh, arcsin)"
// // //                     value={fInput}
// // //                     onChange={(e) => setFInput(e.target.value)}
// // //                     onKeyDown={(e) => { if (e.key === 'Enter') runFind(fInput, 'byF'); }}
// // //                   />
// // //                   <button
// // //                     type="button"
// // //                     className="cdp-input-btn"
// // //                     style={S.inputBtn}
// // //                     onClick={() => runFind(fInput, 'byF')}
// // //                   >
// // //                     Find
// // //                   </button>
// // //                 </div>
// // //               )}

// // //               {mode === 'byDF' && (
// // //                 <div className="cdp-input-block" style={S.inputBlock}>
// // //                   <input
// // //                     type="text"
// // //                     className="cdp-input-field"
// // //                     style={S.inputField}
// // //                     placeholder="Enter f&apos;(x) (e.g., cos, 1/x, sech^2)"
// // //                     value={dfInput}
// // //                     onChange={(e) => setDfInput(e.target.value)}
// // //                     onKeyDown={(e) => { if (e.key === 'Enter') runFind(dfInput, 'byDF'); }}
// // //                   />
// // //                   <button
// // //                     type="button"
// // //                     className="cdp-input-btn"
// // //                     style={S.inputBtn}
// // //                     onClick={() => runFind(dfInput, 'byDF')}
// // //                   >
// // //                     Find
// // //                   </button>
// // //                 </div>
// // //               )}

// // //               {statusKind && (
// // //                 <div style={S.toolStatus}>
// // //                   <span style={{ ...S.statusIcon, background: statusIconBg }}>{statusIcon}</span>
// // //                   <span>{statusContent}</span>
// // //                 </div>
// // //               )}
// // //             </section>

// // //             <section
// // //               id="sec-table"
// // //               ref={(el) => { sectionRefs.current['sec-table'] = el; }}
// // //             >
// // //               <div style={S.legend}>
// // //                 <div style={S.legendLeft}>
// // //                   <div style={S.legendTitle}>View</div>
// // //                   <p style={S.legendNote}>
// // //                     {viewMode === 'reference'
// // //                       ? 'Reference mode: browse every common derivative, click any card for the proof link.'
// // //                       : 'Puzzle mode: drag the right-column tiles to match each f(x) with its derivative. Filters are paused.'}
// // //                   </p>
// // //                 </div>
// // //                 <div style={S.viewToggle}>
// // //                   {['reference', 'puzzle'].map((v) => {
// // //                     const isActive = viewMode === v;
// // //                     return (
// // //                       <button
// // //                         key={v}
// // //                         type="button"
// // //                         className={`cdp-view-btn ${isActive ? 'active' : ''}`}
// // //                         style={{ ...S.viewBtnBase, ...(isActive ? S.viewBtnActive : {}) }}
// // //                         onClick={() => handleViewChange(v)}
// // //                       >
// // //                         {v === 'reference' ? 'Reference' : 'Puzzle'}
// // //                       </button>
// // //                     );
// // //                   })}
// // //                 </div>
// // //               </div>

// // //               {showBanner && (
// // //                 <div style={S.filterStatus}>
// // //                   <span style={S.filterStatusText}>{bannerText}</span>
// // //                   <button
// // //                     type="button"
// // //                     style={S.filterClear}
// // //                     onClick={handleClearHighlights}
// // //                   >
// // //                     Clear highlight
// // //                   </button>
// // //                 </div>
// // //               )}

// // //               {viewMode === 'reference' && (
// // //                 <>
// // //                   <div className="cdp-ref-grid" style={S.refGrid}>
// // //                     {DERIVATIVES.map(renderCard)}
// // //                   </div>

// // //                   {detailsDeriv && (
// // //                     <div
// // //                       id="cdp-cell-details"
// // //                       className="cdp-cell-details"
// // //                       style={S.cellDetails}
// // //                     >
// // //                       <button
// // //                         type="button"
// // //                         className="cdp-close-details"
// // //                         style={S.closeDetails}
// // //                         onClick={() => setDetailsId(null)}
// // //                       >
// // //                         &times;
// // //                       </button>
// // //                       <h3 style={S.detailsH3}>
// // //                         {processContent(`$\\frac{d}{dx}\\!\\left[${detailsDeriv.fx}\\right] = ${detailsDeriv.dfx}$`)}
// // //                       </h3>
// // //                       <div style={S.detailsTip}>
// // //                         {processContent(detailsDeriv.tip)}
// // //                       </div>
// // //                       <div style={S.detailsGrid}>
// // //                         <div style={S.detailItem}>
// // //                           <div style={S.detailLabel}>f(x)</div>
// // //                           <div style={S.detailValue}>
// // //                             {processContent(`$${detailsDeriv.fx}$`)}
// // //                           </div>
// // //                         </div>
// // //                         <div style={S.detailItem}>
// // //                           <div style={S.detailLabel}>f&prime;(x)</div>
// // //                           <div style={S.detailValue}>
// // //                             {processContent(`$${detailsDeriv.dfx}$`)}
// // //                           </div>
// // //                         </div>
// // //                         <div style={S.detailItem}>
// // //                           <div style={S.detailLabel}>Category</div>
// // //                           <div style={S.detailValue}>{detailsCat.label}</div>
// // //                         </div>
// // //                       </div>
// // //                       <a
// // //                         className="cdp-learn-more"
// // //                         style={S.learnMore}
// // //                         href={detailsDeriv.link}
// // //                       >
// // //                         Read the full derivation &rarr;
// // //                       </a>
// // //                     </div>
// // //                   )}
// // //                 </>
// // //               )}

// // //               {viewMode === 'puzzle' && (
// // //                 <>
// // //                   <div style={S.puzzleControls}>
// // //                     <button
// // //                       type="button"
// // //                       className="cdp-puzzle-btn"
// // //                       style={S.puzzleBtn}
// // //                       onClick={shufflePuzzle}
// // //                     >
// // //                       Shuffle
// // //                     </button>
// // //                     <span style={S.puzzleProgress}>
// // //                       {isSolved ? (
// // //                         <>
// // //                           <strong style={{ color: C.primaryDark }}>&#10003; Solved!</strong>{' '}
// // //                           All {DERIVATIVES.length} derivatives matched.{' '}
// // //                           <a
// // //                             className="cdp-back-to-ref"
// // //                             style={S.backToRef}
// // //                             onClick={(e) => { e.preventDefault(); handleViewChange('reference'); }}
// // //                           >
// // //                             Back to reference view
// // //                           </a>
// // //                         </>
// // //                       ) : (
// // //                         <>
// // //                           <strong style={{ color: C.primaryDark }}>{correctCount}</strong>
// // //                           {' '}/ {DERIVATIVES.length} in place
// // //                         </>
// // //                       )}
// // //                     </span>
// // //                   </div>
// // //                   <div
// // //                     className={`cdp-puzzle-board ${isSolved ? 'solved' : ''}`}
// // //                     style={S.puzzleBoard}
// // //                   >
// // //                     {slots.map(renderPuzzleRow)}
// // //                   </div>
// // //                 </>
// // //               )}
// // //             </section>

// // //             <section
// // //               id="sec-patterns"
// // //               ref={(el) => { sectionRefs.current['sec-patterns'] = el; }}
// // //             >
// // //               <h2 style={S.sectionH}>Categories</h2>
// // //               <p style={S.sectionSub}>Click a card to highlight matching entries in the table above.</p>

// // //               {viewMode === 'puzzle' && (
// // //                 <div style={S.filtersDisabledNote}>
// // //                   Filters are available in <strong>Reference</strong> view.
// // //                 </div>
// // //               )}

// // //               <div style={S.filterGrid}>
// // //                 {FILTER_DEFS.map((f) => {
// // //                   const isActive = activeFilter === f.id;
// // //                   const disabled = viewMode === 'puzzle';
// // //                   const cls = ['cdp-filter-card'];
// // //                   if (isActive) cls.push('active');
// // //                   if (disabled) cls.push('disabled');
// // //                   return (
// // //                     <div
// // //                       key={f.id}
// // //                       className={cls.join(' ')}
// // //                       style={S.filterCard}
// // //                       onClick={() => !disabled && toggleFilter(f.id)}
// // //                     >
// // //                       <div className="cdp-filter-icon" style={S.filterIcon}>
// // //                         {f.icon}
// // //                       </div>
// // //                       <h3 style={S.filterCardH3}>{f.title}</h3>
// // //                       <p style={S.filterCardP}>{processContent(f.desc)}</p>
// // //                       <div style={S.filterCardFooter}>
// // //                         <span className="cdp-filter-count" style={S.filterCount}>
// // //                           {filterCounts[f.id]} match{filterCounts[f.id] === 1 ? '' : 'es'}
// // //                         </span>
// // //                         <span className="cdp-filter-action" style={S.filterAction}>
// // //                           Click to highlight
// // //                         </span>
// // //                       </div>
// // //                     </div>
// // //                   );
// // //                 })}
// // //               </div>
// // //             </section>

// // //             <section
// // //               id="sec-properties"
// // //               ref={(el) => { sectionRefs.current['sec-properties'] = el; }}
// // //               style={S.propertiesSection}
// // //             >
// // //               <h2 style={S.sectionH}>Differentiation rules</h2>
// // //               <p style={S.sectionSub}>The four structural rules that combine and extend the identities above.</p>
// // //               <div style={S.propertyGrid}>
// // //                 {PROPERTY_CARDS.map((card, i) => (
// // //                   <div key={i} style={S.propertyCard}>
// // //                     <div style={S.propertyCardIcon}>{card.icon}</div>
// // //                     <h4 style={S.propertyCardH4}>{card.title}</h4>
// // //                     <p style={S.propertyCardP}>{processContent(card.body)}</p>
// // //                     {card.example && (
// // //                       <div style={S.propertyCardExample}>
// // //                         {processContent(card.example)}
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </section>

// // //             <section
// // //               id="sec-quiz"
// // //               ref={(el) => { sectionRefs.current['sec-quiz'] = el; }}
// // //               style={S.quizSection}
// // //             >
// // //               <QuizWidget
// // //                 generator={generateDerivativeQuestion}
// // //                 title="Test yourself"
// // //                 subtitle="Three question types, rotated at random."
// // //                 allowReset={true}
// // //                 historyLimit={30}
// // //               />
// // //             </section>

// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default CommonDerivativesPage;


// // 'use client';
// // import { useState, useEffect, useMemo, useRef, Fragment } from 'react';
// // import { processContent } from '../../../utils/contentProcessor';
// // import QuizWidget from '../../examples/quiz/QuizWidget';
// // import generateDerivativeQuestion from '../../examples/quiz/questions/commonDerivativesQuestions';

// // // =========================================================
// // //   CommonDerivativesPage  (v3)
// // //   - Mesh puzzle layout (3 cols × 10 rows desktop, adaptive)
// // //   - Centered LHS in each puzzle pair
// // //   - Auto-scroll page during drag so off-screen targets are reachable
// // //   - Visible borders on reference cards
// // // =========================================================

// // const C = {
// //   primary:      '#4f46e5',
// //   primaryDark:  '#3730a3',
// //   primaryLight: '#eef2ff',
// //   bg:           '#fafbff',
// //   border:       '#e0e7ff',
// //   borderSoft:   '#eef0f7',
// //   cardBorder:   '#c7d2fe',  // <- stronger, visible card border (indigo-200)
// //   text:         '#1e1b4b',
// //   textMuted:    '#64748b',
// //   success:      '#10b981',
// //   successBg:    '#d1fae5',
// //   successText:  '#065f46',
// //   error:        '#ef4444',
// //   errorBg:      '#fee2e2',
// //   errorText:    '#991b1b',
// //   warn:         '#f59e0b',
// //   warnBg:       '#fef3c7',
// //   warnText:     '#92400e',
// //   shadowSm:     '0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)',
// //   shadowMd:     '0 4px 12px rgba(15,23,42,0.08)',
// //   shadowLg:     '0 8px 24px rgba(15,23,42,0.10)',

// //   catPolyBg:    '#dbeafe', catPolyFg: '#1e40af',
// //   catExpBg:     '#ede9fe', catExpFg:  '#5b21b6',
// //   catTrigBg:    '#d1fae5', catTrigFg: '#065f46',
// //   catInvBg:     '#ffe4e6', catInvFg:  '#9f1239',
// //   catHypBg:     '#ffedd5', catHypFg:  '#9a3412',
// //   catIHypBg:    '#cffafe', catIHypFg: '#155e75',
// // };

// // const DERIVATIVES = [
// //   { id: 0,  fx: 'c',                dfx: '0',
// //     cat: 'polynomial',
// //     fxAlt: ['constant'], dfxAlt: ['zero'],
// //     tip:  'The derivative of any constant is zero — constants don&apos;t change with $x$.',
// //     link: '/calculus/derivatives/constant-rule' },
// //   { id: 1,  fx: 'x',                dfx: '1',
// //     cat: 'polynomial',
// //     fxAlt: ['identity'], dfxAlt: ['one'],
// //     tip:  'The identity function changes at a constant rate of 1.',
// //     link: '/calculus/derivatives/identity' },
// //   { id: 2,  fx: 'x^n',              dfx: 'nx^{n-1}',
// //     cat: 'polynomial',
// //     fxAlt: ['power', 'xn'], dfxAlt: ['nxn-1'],
// //     tip:  'The power rule: bring the exponent down as a coefficient, then subtract one from the exponent.',
// //     link: '/calculus/derivatives/power-rule' },
// //   { id: 3,  fx: '\\frac{1}{x}',     dfx: '-\\frac{1}{x^2}',
// //     cat: 'polynomial',
// //     fxAlt: ['1/x', 'reciprocal'], dfxAlt: ['-1/x^2', '-1/x2'],
// //     tip:  'Rewrite $\\frac{1}{x}$ as $x^{-1}$, then apply the power rule: $-1 \\cdot x^{-2} = -\\frac{1}{x^2}$.',
// //     link: '/calculus/derivatives/reciprocal' },
// //   { id: 4,  fx: '\\sqrt{x}',        dfx: '\\frac{1}{2\\sqrt{x}}',
// //     cat: 'polynomial',
// //     fxAlt: ['sqrt', 'root', 'square root'], dfxAlt: ['1/(2sqrt(x))'],
// //     tip:  '$\\sqrt{x} = x^{1/2}$. Power rule: $(1/2) \\cdot x^{-1/2} = \\frac{1}{2\\sqrt{x}}$. Defined for $x > 0$.',
// //     link: '/calculus/derivatives/square-root' },

// //   { id: 5,  fx: 'e^x',              dfx: 'e^x',
// //     cat: 'exp',
// //     fxAlt: ['exp', 'ex'], dfxAlt: ['exp', 'ex'],
// //     tip:  'The natural exponential is its own derivative — the defining property of $e$.',
// //     link: '/calculus/derivatives/exponential' },
// //   { id: 6,  fx: 'a^x',              dfx: 'a^x \\ln(a)',
// //     cat: 'exp',
// //     fxAlt: ['ax', 'general exponential'], dfxAlt: ['ax ln', 'a^x ln(a)'],
// //     tip:  'General exponential rule. When $a = e$, $\\ln(a) = 1$, recovering $\\frac{d}{dx}[e^x] = e^x$.',
// //     link: '/calculus/derivatives/general-exponential' },
// //   { id: 7,  fx: '\\ln(x)',          dfx: '\\frac{1}{x}',
// //     cat: 'exp',
// //     fxAlt: ['ln', 'natural log'], dfxAlt: ['1/x'],
// //     tip:  'The derivative of the natural logarithm is the reciprocal of its argument. Defined for $x > 0$.',
// //     link: '/calculus/derivatives/logarithm' },
// //   { id: 8,  fx: '\\log_a(x)',       dfx: '\\frac{1}{x \\ln(a)}',
// //     cat: 'exp',
// //     fxAlt: ['log a', 'general log'], dfxAlt: ['1/(x ln a)'],
// //     tip:  'General logarithm. Change-of-base gives $\\log_a(x) = \\ln(x)/\\ln(a)$, so the derivative is $\\frac{1}{x \\ln(a)}$.',
// //     link: '/calculus/derivatives/general-logarithm' },

// //   { id: 9,  fx: '\\sin(x)',         dfx: '\\cos(x)',
// //     cat: 'trig',
// //     fxAlt: ['sine'], dfxAlt: ['cosine'],
// //     tip:  'The classic trig derivative. Cosine is the rate of change of sine.',
// //     link: '/calculus/derivatives/sine' },
// //   { id: 10, fx: '\\cos(x)',         dfx: '-\\sin(x)',
// //     cat: 'trig',
// //     fxAlt: ['cosine'], dfxAlt: ['negative sine', '-sin'],
// //     tip:  'Cosine&apos;s derivative is negative sine — the sign flip reflects the 90° phase shift between the two.',
// //     link: '/calculus/derivatives/cosine' },
// //   { id: 11, fx: '\\tan(x)',         dfx: '\\sec^2(x)',
// //     cat: 'trig',
// //     fxAlt: ['tangent'], dfxAlt: ['sec squared', 'sec^2'],
// //     tip:  'Derived from the quotient rule on $\\sin / \\cos$: $\\frac{\\cos^2 + \\sin^2}{\\cos^2} = \\frac{1}{\\cos^2} = \\sec^2$.',
// //     link: '/calculus/derivatives/tangent' },
// //   { id: 12, fx: '\\cot(x)',         dfx: '-\\csc^2(x)',
// //     cat: 'trig',
// //     fxAlt: ['cotangent'], dfxAlt: ['negative csc squared', '-csc^2'],
// //     tip:  'Sister identity to $\\tan$. The negative sign and the $\\csc$-vs-$\\sec$ swap reflect the symmetry between $\\tan/\\cot$ and $\\sin/\\cos$.',
// //     link: '/calculus/derivatives/cotangent' },
// //   { id: 13, fx: '\\sec(x)',         dfx: '\\sec(x)\\tan(x)',
// //     cat: 'trig',
// //     fxAlt: ['secant'], dfxAlt: ['sec tan'],
// //     tip:  'From the chain rule on $(\\cos x)^{-1}$. Memorable because the result keeps both $\\sec$ and $\\tan$.',
// //     link: '/calculus/derivatives/secant' },
// //   { id: 14, fx: '\\csc(x)',         dfx: '-\\csc(x)\\cot(x)',
// //     cat: 'trig',
// //     fxAlt: ['cosecant'], dfxAlt: ['negative csc cot', '-csc cot'],
// //     tip:  'Sister to $\\sec$. Like $\\sec$, the result is a product — but with a negative sign, mirroring the $\\cos$ vs $\\sin$ asymmetry.',
// //     link: '/calculus/derivatives/cosecant' },

// //   { id: 15, fx: '\\arcsin(x)',      dfx: '\\frac{1}{\\sqrt{1-x^2}}',
// //     cat: 'inverse',
// //     fxAlt: ['arcsine', 'inverse sine'], dfxAlt: ['1/sqrt(1-x^2)'],
// //     tip:  'Inverse function derivative formula. Defined for $|x| < 1$.',
// //     link: '/calculus/derivatives/arcsine' },
// //   { id: 16, fx: '\\arccos(x)',      dfx: '-\\frac{1}{\\sqrt{1-x^2}}',
// //     cat: 'inverse',
// //     fxAlt: ['arccosine', 'inverse cosine'], dfxAlt: ['-1/sqrt(1-x^2)'],
// //     tip:  'Sign-flipped twin of $\\arcsin$. Since $\\arcsin(x) + \\arccos(x) = \\pi/2$ is constant, their derivatives cancel.',
// //     link: '/calculus/derivatives/arccosine' },
// //   { id: 17, fx: '\\arctan(x)',      dfx: '\\frac{1}{1+x^2}',
// //     cat: 'inverse',
// //     fxAlt: ['arctangent', 'inverse tan'], dfxAlt: ['1/(1+x^2)'],
// //     tip:  'A beautiful derivative — rational, defined for all real $x$, central to many integration tricks.',
// //     link: '/calculus/derivatives/arctangent' },
// //   { id: 18, fx: '\\operatorname{arccot}(x)',  dfx: '-\\frac{1}{1+x^2}',
// //     cat: 'inverse',
// //     fxAlt: ['arccotangent', 'inverse cot'], dfxAlt: ['-1/(1+x^2)'],
// //     tip:  'Sign-flipped twin of $\\arctan$. Like arcsin/arccos, $\\arctan(x) + \\operatorname{arccot}(x) = \\pi/2$.',
// //     link: '/calculus/derivatives/arccotangent' },
// //   { id: 19, fx: '\\operatorname{arcsec}(x)',  dfx: '\\frac{1}{|x|\\sqrt{x^2-1}}',
// //     cat: 'inverse',
// //     fxAlt: ['arcsecant', 'inverse sec'], dfxAlt: ['1/(|x|sqrt(x^2-1))'],
// //     tip:  'Defined for $|x| \\geq 1$. The absolute value keeps the derivative positive on both branches.',
// //     link: '/calculus/derivatives/arcsecant' },
// //   { id: 20, fx: '\\operatorname{arccsc}(x)',  dfx: '-\\frac{1}{|x|\\sqrt{x^2-1}}',
// //     cat: 'inverse',
// //     fxAlt: ['arccosecant', 'inverse csc'], dfxAlt: ['-1/(|x|sqrt(x^2-1))'],
// //     tip:  'Sign-flipped twin of $\\operatorname{arcsec}$, just as arccos is to arcsin.',
// //     link: '/calculus/derivatives/arccosecant' },

// //   { id: 21, fx: '\\sinh(x)',        dfx: '\\cosh(x)',
// //     cat: 'hyperbolic',
// //     fxAlt: ['hyperbolic sine'], dfxAlt: ['hyperbolic cosine'],
// //     tip:  'Hyperbolic analog of $\\sin \\to \\cos$. No sign flips — $\\cosh$ relates to $\\sinh$ as $\\cos$ does to $\\sin$, but without the negative.',
// //     link: '/calculus/derivatives/sinh' },
// //   { id: 22, fx: '\\cosh(x)',        dfx: '\\sinh(x)',
// //     cat: 'hyperbolic',
// //     fxAlt: ['hyperbolic cosine'], dfxAlt: ['hyperbolic sine'],
// //     tip:  'Hyperbolic cosine differentiates to $\\sinh$ — no negative sign, unlike the trig version.',
// //     link: '/calculus/derivatives/cosh' },
// //   { id: 23, fx: '\\tanh(x)',        dfx: '\\operatorname{sech}^2(x)',
// //     cat: 'hyperbolic',
// //     fxAlt: ['hyperbolic tangent'], dfxAlt: ['sech squared', 'sech^2'],
// //     tip:  'Direct analog of $\\frac{d}{dx}[\\tan(x)] = \\sec^2(x)$, with hyperbolic functions in place of trig.',
// //     link: '/calculus/derivatives/tanh' },
// //   { id: 24, fx: '\\coth(x)',        dfx: '-\\operatorname{csch}^2(x)',
// //     cat: 'hyperbolic',
// //     fxAlt: ['hyperbolic cotangent'], dfxAlt: ['negative csch squared'],
// //     tip:  'Hyperbolic analog of $\\cot$. The negative sign matches the trig case.',
// //     link: '/calculus/derivatives/coth' },
// //   { id: 25, fx: '\\operatorname{sech}(x)',  dfx: '-\\operatorname{sech}(x)\\tanh(x)',
// //     cat: 'hyperbolic',
// //     fxAlt: ['hyperbolic secant'], dfxAlt: ['negative sech tanh'],
// //     tip:  'Hyperbolic analog of $\\sec$, but with a negative sign — opposite of the trig version.',
// //     link: '/calculus/derivatives/sech' },
// //   { id: 26, fx: '\\operatorname{csch}(x)',  dfx: '-\\operatorname{csch}(x)\\coth(x)',
// //     cat: 'hyperbolic',
// //     fxAlt: ['hyperbolic cosecant'], dfxAlt: ['negative csch coth'],
// //     tip:  'Hyperbolic analog of $\\csc$. Like $\\csc$, the result is a product, and the sign also matches.',
// //     link: '/calculus/derivatives/csch' },

// //   { id: 27, fx: '\\operatorname{arcsinh}(x)',  dfx: '\\frac{1}{\\sqrt{x^2+1}}',
// //     cat: 'inverseHyperbolic',
// //     fxAlt: ['arc sinh', 'inverse hyperbolic sine'], dfxAlt: ['1/sqrt(x^2+1)'],
// //     tip:  'Note the $+1$ inside the radical (vs $-1$ for $\\arcsin$). Defined for all real $x$.',
// //     link: '/calculus/derivatives/arcsinh' },
// //   { id: 28, fx: '\\operatorname{arccosh}(x)',  dfx: '\\frac{1}{\\sqrt{x^2-1}}',
// //     cat: 'inverseHyperbolic',
// //     fxAlt: ['arc cosh', 'inverse hyperbolic cosine'], dfxAlt: ['1/sqrt(x^2-1)'],
// //     tip:  'Defined for $x > 1$. The radical is $x^2 - 1$, the reverse of $\\arcsin$&apos;s domain.',
// //     link: '/calculus/derivatives/arccosh' },
// //   { id: 29, fx: '\\operatorname{arctanh}(x)',  dfx: '\\frac{1}{1-x^2}',
// //     cat: 'inverseHyperbolic',
// //     fxAlt: ['arc tanh', 'inverse hyperbolic tangent'], dfxAlt: ['1/(1-x^2)'],
// //     tip:  'Defined for $|x| < 1$. Same denominator structure as $\\arctan$, but with subtraction inside.',
// //     link: '/calculus/derivatives/arctanh' },
// // ];

// // const CATEGORIES = {
// //   polynomial:        { label: 'Polynomial',     bg: C.catPolyBg, fg: C.catPolyFg },
// //   exp:               { label: 'Exp / Log',      bg: C.catExpBg,  fg: C.catExpFg  },
// //   trig:              { label: 'Trig',           bg: C.catTrigBg, fg: C.catTrigFg },
// //   inverse:           { label: 'Inverse trig',   bg: C.catInvBg,  fg: C.catInvFg  },
// //   hyperbolic:        { label: 'Hyperbolic',     bg: C.catHypBg,  fg: C.catHypFg  },
// //   inverseHyperbolic: { label: 'Inverse hyp.',   bg: C.catIHypBg, fg: C.catIHypFg },
// // };

// // const FILTER_DEFS = [
// //   { id: 'polynomial', icon: 'x^n', title: 'Polynomial',
// //     desc: 'Constants, powers, roots, and reciprocals.',
// //     match: (d) => d.cat === 'polynomial' },
// //   { id: 'exp', icon: 'e^x', title: 'Exponential & log',
// //     desc: 'Exponentials and logarithms, natural and general.',
// //     match: (d) => d.cat === 'exp' },
// //   { id: 'trig', icon: 'sin', title: 'Trigonometric',
// //     desc: 'All six basic trig functions.',
// //     match: (d) => d.cat === 'trig' },
// //   { id: 'inverse', icon: 'sin\u207B\u00B9', title: 'Inverse trig',
// //     desc: 'Inverse trig: $\\arcsin$ through $\\operatorname{arccsc}$.',
// //     match: (d) => d.cat === 'inverse' },
// //   { id: 'hyperbolic', icon: 'sinh', title: 'Hyperbolic',
// //     desc: 'Hyperbolic sine, cosine, tan, and their reciprocals.',
// //     match: (d) => d.cat === 'hyperbolic' },
// //   { id: 'inverseHyperbolic', icon: 'sinh\u207B\u00B9', title: 'Inverse hyperbolic',
// //     desc: 'Inverse hyperbolic functions: $\\operatorname{arcsinh}$, $\\operatorname{arccosh}$, $\\operatorname{arctanh}$.',
// //     match: (d) => d.cat === 'inverseHyperbolic' },
// //   { id: 'reciprocal', icon: '1/x', title: 'Reciprocal forms',
// //     desc: 'Derivatives whose result is a fraction \u2014 a quotient form.',
// //     match: (d) => /^-?\\frac\{/.test(d.dfx) },
// // ];

// // const PROPERTY_CARDS = [
// //   {
// //     icon: '\u2295',
// //     title: 'Linearity',
// //     body: 'The derivative of a sum is the sum of derivatives. Constants pull out: $\\frac{d}{dx}[c \\cdot f(x)] = c \\cdot f\'(x)$.',
// //     example: '$\\frac{d}{dx}[3x^2 + 5x] = 6x + 5$',
// //   },
// //   {
// //     icon: '\u00D7',
// //     title: 'Product rule',
// //     body: '$\\frac{d}{dx}[fg] = f\'g + fg\'$. Differentiate one factor, leave the other alone, then sum.',
// //     example: '$\\frac{d}{dx}[x \\sin(x)] = \\sin(x) + x\\cos(x)$',
// //   },
// //   {
// //     icon: '\u00F7',
// //     title: 'Quotient rule',
// //     body: '$\\frac{d}{dx}\\!\\left[\\frac{f}{g}\\right] = \\frac{f\'g - fg\'}{g^2}$. Mnemonic: low d-high minus high d-low, over low squared.',
// //     example: '$\\frac{d}{dx}\\!\\left[\\frac{\\sin(x)}{x}\\right] = \\frac{x\\cos(x) - \\sin(x)}{x^2}$',
// //   },
// //   {
// //     icon: '\u2218',
// //     title: 'Chain rule',
// //     body: '$\\frac{d}{dx}[f(g(x))] = f\'(g(x)) \\cdot g\'(x)$. Differentiate the outside, then multiply by the derivative of the inside.',
// //     example: '$\\frac{d}{dx}[\\sin(x^2)] = \\cos(x^2) \\cdot 2x$',
// //   },
// // ];

// // const TOC_ITEMS = [
// //   { id: 'sec-tool',       label: 'Derivative tool' },
// //   { id: 'sec-table',      label: 'The table' },
// //   { id: 'sec-patterns',   label: 'Categories' },
// //   { id: 'sec-properties', label: 'Differentiation rules' },
// //   { id: 'sec-quiz',       label: 'Test yourself' },
// // ];

// // function normalize(s) {
// //   return String(s).toLowerCase()
// //     .replace(/\\/g, '')
// //     .replace(/[\s\u00B7]/g, '')
// //     .replace(/[{}]/g, '')
// //     .replace(/operatorname/g, '');
// // }
// // function matchAgainst(query, key, altKey) {
// //   const q = normalize(query);
// //   if (!q) return [];
// //   return DERIVATIVES.filter((d) => {
// //     const main = normalize(d[key]);
// //     const alts = (d[altKey] || []).map(normalize);
// //     return main.includes(q) || alts.some((a) => a.includes(q));
// //   });
// // }

// // const S = {
// //   container: {
// //     maxWidth: '1000px', margin: '0 auto', padding: '28px 24px 80px',
// //     position: 'relative',
// //     fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
// //     color: C.text,
// //   },
// //   pageLayout: { position: 'relative' },
// //   sidebar: {
// //     position: 'absolute', top: 0, right: '100%',
// //     width: '240px', height: '100%', marginRight: '40px',
// //   },
// //   sidebarSticky: {
// //     position: 'sticky', top: '20px',
// //     maxHeight: 'calc(100vh - 40px)', overflowY: 'auto',
// //     paddingRight: '4px',
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
// //   mainCol: { minWidth: 0, width: '100%' },

// //   pageIntro: {
// //     textAlign: 'center', color: C.textMuted, fontSize: '15px',
// //     margin: '0 auto 32px', maxWidth: '620px',
// //   },
// //   pageIntroLink: { color: C.primary, textDecoration: 'none', fontWeight: 600 },

// //   toolSection: {
// //     background: 'linear-gradient(135deg, #eef2ff 0%, #f0f9ff 100%)',
// //     border: `1px solid ${C.border}`, borderRadius: '20px',
// //     padding: '28px 32px', marginBottom: '36px',
// //   },
// //   toolH2: {
// //     fontFamily: "'Crimson Pro', serif", fontSize: '26px',
// //     color: C.primaryDark, margin: '0 0 4px', fontWeight: 700,
// //   },
// //   toolSub: { color: C.textMuted, fontSize: '14px', margin: '0 0 18px' },
// //   modeTabsWrap: {
// //     display: 'inline-flex', background: 'white', borderRadius: '12px',
// //     padding: '4px', marginBottom: '14px',
// //     border: `1px solid ${C.border}`, boxShadow: C.shadowSm,
// //     gap: '2px', flexWrap: 'wrap',
// //   },
// //   modeTabBase: {
// //     padding: '9px 18px', borderRadius: '9px', fontSize: '14px',
// //     fontWeight: 600, cursor: 'pointer', background: 'transparent',
// //     border: 'none', transition: 'all 0.18s',
// //     fontFamily: 'inherit', color: C.textMuted,
// //   },
// //   modeTabActive: {
// //     background: C.primary, color: 'white',
// //     boxShadow: '0 2px 6px rgba(79,70,229,0.30)',
// //   },
// //   inputBlock: {
// //     display: 'flex', gap: '10px', marginBottom: '8px',
// //     alignItems: 'center', flexWrap: 'wrap',
// //   },
// //   inputField: {
// //     flex: 1, minWidth: '200px',
// //     padding: '13px 18px',
// //     border: `2px solid ${C.border}`, borderRadius: '11px',
// //     fontSize: '15px', outline: 'none', background: 'white',
// //     fontFamily: 'inherit', color: C.text,
// //     transition: 'border-color 0.15s, box-shadow 0.15s',
// //   },
// //   inputBtn: {
// //     padding: '13px 26px', background: C.primary, color: 'white',
// //     border: 'none', borderRadius: '11px',
// //     fontWeight: 600, fontSize: '15px', cursor: 'pointer',
// //     fontFamily: 'inherit', whiteSpace: 'nowrap',
// //     transition: 'background 0.15s',
// //   },
// //   toolStatus: {
// //     marginTop: '12px', padding: '11px 14px',
// //     background: 'rgba(255,255,255,0.75)',
// //     border: `1px solid ${C.border}`, borderRadius: '10px',
// //     display: 'flex', alignItems: 'flex-start', gap: '10px',
// //     fontSize: '14px', color: C.text, lineHeight: 1.55,
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
// //     display: 'flex', flexWrap: 'wrap', gap: '18px',
// //     alignItems: 'center', justifyContent: 'space-between',
// //   },
// //   legendLeft: { display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '540px' },
// //   legendTitle: {
// //     fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px',
// //     color: C.textMuted, fontWeight: 700,
// //   },
// //   legendNote: { fontSize: '14px', color: C.textMuted, margin: 0 },
// //   viewToggle: {
// //     display: 'inline-flex',
// //     background: C.bg, borderRadius: '10px', padding: '3px',
// //     border: `1px solid ${C.border}`, gap: '2px',
// //   },
// //   viewBtnBase: {
// //     padding: '7px 16px', borderRadius: '7px',
// //     fontSize: '13px', fontWeight: 600, cursor: 'pointer',
// //     background: 'transparent', border: 'none', fontFamily: 'inherit',
// //     color: C.textMuted, transition: 'all 0.15s',
// //   },
// //   viewBtnActive: {
// //     background: C.primary, color: 'white',
// //     boxShadow: '0 2px 4px rgba(79,70,229,0.25)',
// //   },

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

// //   refGrid: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(3, 1fr)',
// //     gap: '14px', marginBottom: '36px',
// //   },
// //   // ===== Reference card — stronger visible border =====
// //   derivCard: {
// //     background: 'white',
// //     border: `1.5px solid ${C.cardBorder}`,   // <- was 1px borderSoft, now visible indigo
// //     borderRadius: '12px',
// //     padding: '18px 14px 14px',
// //     cursor: 'pointer',
// //     transition: 'transform 0.15s, box-shadow 0.15s, border-color 0.15s, opacity 0.2s',
// //     position: 'relative',
// //     display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
// //     boxShadow: C.shadowSm,
// //   },
// //   catBadge: {
// //     position: 'absolute', top: '8px', right: '8px',
// //     fontSize: '9px', fontWeight: 700, textTransform: 'uppercase',
// //     letterSpacing: '0.5px', padding: '2px 7px', borderRadius: '4px',
// //   },
// //   derivFormula: {
// //     fontSize: '15px', marginTop: '14px',
// //     color: C.text, textAlign: 'center', lineHeight: 1.2,
// //   },
// //   derivArrow: { color: C.primary, fontSize: '14px', fontWeight: 700 },
// //   derivResult: {
// //     fontSize: '18px', fontWeight: 700,
// //     color: C.primaryDark, textAlign: 'center', lineHeight: 1.2,
// //   },

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
// //     lineHeight: 1, fontFamily: 'inherit',
// //   },
// //   detailsH3: {
// //     fontSize: '28px',
// //     color: C.primaryDark, fontWeight: 700, margin: '0 0 16px',
// //     textAlign: 'center',
// //   },
// //   detailsTip: {
// //     color: C.textMuted, fontSize: '15px',
// //     lineHeight: 1.65, marginBottom: '16px',
// //   },
// //   detailsGrid: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
// //     gap: '12px', marginBottom: '16px',
// //   },
// //   detailItem: {
// //     padding: '14px 16px', background: C.bg,
// //     borderRadius: '10px', border: `1px solid ${C.borderSoft}`,
// //   },
// //   detailLabel: {
// //     fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.8px',
// //     color: C.textMuted, marginBottom: '6px', fontWeight: 700,
// //   },
// //   detailValue: { fontSize: '17px', fontWeight: 700, color: C.text },
// //   learnMore: {
// //     display: 'inline-block', color: C.primary, textDecoration: 'none',
// //     fontWeight: 600, fontSize: '14px',
// //     padding: '8px 16px', background: C.primaryLight, borderRadius: '8px',
// //   },

// //   // ===== Puzzle: mesh layout =====
// //   puzzleControls: {
// //     display: 'flex', gap: '12px', marginBottom: '14px',
// //     alignItems: 'center', flexWrap: 'wrap',
// //   },
// //   puzzleBtn: {
// //     padding: '9px 18px', background: C.primary, color: 'white',
// //     border: 'none', borderRadius: '9px',
// //     fontWeight: 600, fontSize: '14px', cursor: 'pointer',
// //     fontFamily: 'inherit',
// //   },
// //   puzzleProgress: { color: C.textMuted, fontSize: '14px', fontWeight: 500 },
// //   puzzleBoard: {
// //     background: 'white', border: `1px solid ${C.borderSoft}`,
// //     borderRadius: '14px', padding: '12px',
// //     marginBottom: '24px', boxShadow: C.shadowSm,
// //     position: 'relative', transition: 'box-shadow 0.4s ease',
// //     // Mesh: 3-column grid of pairs (adaptive via media query below)
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
// //     gap: '8px',
// //   },
// //   puzzlePair: {
// //     display: 'grid',
// //     gridTemplateColumns: 'minmax(0, 1.35fr) auto minmax(0, 1fr)',
// //     gap: '6px',
// //     alignItems: 'stretch',
// //     minHeight: '46px',
// //   },
// //   puzzleLhs: {
// //     background: C.primaryLight, color: C.primaryDark,
// //     borderRadius: '7px', padding: '8px 10px',
// //     fontSize: '14px', fontWeight: 600,
// //     display: 'flex', alignItems: 'center',
// //     justifyContent: 'center',          // <- centered
// //     overflow: 'hidden',
// //   },
// //   puzzleEquals: {
// //     color: C.primary, fontWeight: 700, fontSize: '18px',
// //     display: 'flex', alignItems: 'center', padding: '0 2px',
// //   },
// //   puzzleSlot: {
// //     background: C.bg, border: `2px dashed ${C.border}`,
// //     borderRadius: '7px', padding: '3px',
// //     minHeight: '46px',
// //     display: 'flex', alignItems: 'stretch',
// //     transition: 'border-color 0.15s, background 0.15s',
// //     position: 'relative',
// //   },
// //   puzzleTileBase: {
// //     position: 'relative', background: C.primary, color: 'white',
// //     border: '2px solid transparent', borderRadius: '5px',
// //     padding: '6px 10px', fontSize: '14px',
// //     cursor: 'grab', width: '100%',
// //     display: 'flex', alignItems: 'center', justifyContent: 'center',
// //     userSelect: 'none', overflow: 'hidden',
// //     transition: 'background 0.2s, transform 0.2s, border-color 0.2s',
// //   },

// //   backToRef: {
// //     color: C.primary, textDecoration: 'none', fontWeight: 600,
// //     marginLeft: '8px', cursor: 'pointer',
// //   },

// //   sectionH: {
// //     fontFamily: "'Crimson Pro', serif", fontSize: '30px',
// //     color: '#1e3a8a', fontWeight: 700, letterSpacing: '-0.3px',
// //     margin: '0 0 8px',
// //   },
// //   sectionSub: { color: C.textMuted, marginBottom: '26px', fontSize: '15px' },

// //   filtersDisabledNote: {
// //     marginBottom: '16px', padding: '10px 16px',
// //     background: C.bg, border: `1px dashed ${C.border}`,
// //     borderRadius: '8px', color: C.textMuted,
// //     fontSize: '13px', textAlign: 'center',
// //   },
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
// //     fontSize: '14px', fontWeight: 700,
// //     marginBottom: '14px',
// //     boxShadow: '0 4px 10px rgba(79,70,229,0.25)',
// //   },
// //   filterCardH3: { fontSize: '16px', fontWeight: 700, color: C.text, margin: '0 0 6px' },
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
// //     fontSize: '17px', fontWeight: 700, marginBottom: '12px',
// //   },
// //   propertyCardH4: { fontSize: '15px', fontWeight: 700, color: C.text, margin: '0 0 6px' },
// //   propertyCardP: { color: C.textMuted, fontSize: '13px', lineHeight: 1.6, margin: 0 },
// //   propertyCardExample: {
// //     background: C.bg, padding: '10px 14px', borderRadius: '6px',
// //     fontSize: '14px', marginTop: '10px',
// //     color: C.primaryDark, textAlign: 'center',
// //     border: `1px solid ${C.borderSoft}`,
// //   },
// //   quizSection: { marginTop: '56px' },
// // };

// // const CSS = `
// // .cdp-toc-link:hover { color: ${C.primary}; }
// // .cdp-related-mini:hover {
// //   border-color: ${C.primary} !important;
// //   transform: translateX(2px);
// //   box-shadow: ${C.shadowSm};
// // }
// // .cdp-input-field:focus {
// //   border-color: ${C.primary} !important;
// //   box-shadow: 0 0 0 4px rgba(79,70,229,0.12);
// // }
// // .cdp-input-btn:hover { background: ${C.primaryDark} !important; }
// // .cdp-mode-tab:not(.active):hover { color: ${C.primary} !important; }
// // .cdp-view-btn:not(.active):hover { color: ${C.primary}; }

// // .cdp-deriv-card:hover {
// //   transform: translateY(-2px);
// //   box-shadow: 0 6px 16px rgba(15,23,42,0.10);
// //   border-color: ${C.primary};
// //   z-index: 5;
// // }
// // .cdp-deriv-card.highlight {
// //   border: 2px solid ${C.warn} !important;
// //   box-shadow: 0 0 0 3px rgba(245,158,11,0.35), 0 6px 16px rgba(245,158,11,0.25);
// //   transform: scale(1.05);
// //   z-index: 4;
// // }
// // .cdp-deriv-card.filter-match {
// //   border: 2px solid ${C.warn} !important;
// //   box-shadow: 0 4px 14px rgba(245,158,11,0.35);
// //   transform: scale(1.04);
// //   z-index: 3;
// // }
// // .cdp-deriv-card.filter-dim { opacity: 0.25; }

// // .cdp-filter-card:hover {
// //   transform: translateY(-3px);
// //   box-shadow: ${C.shadowMd};
// //   border-color: ${C.border} !important;
// // }
// // .cdp-filter-card.active {
// //   border-color: ${C.warn} !important;
// //   background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%) !important;
// //   box-shadow: 0 0 0 4px rgba(245,158,11,0.18), ${C.shadowMd};
// // }
// // .cdp-filter-card.active::after {
// //   content: '\u25CF Active';
// //   position: absolute; top: 12px; right: 14px;
// //   font-size: 11px; font-weight: 700;
// //   color: ${C.warnText}; letter-spacing: 0.5px;
// // }
// // .cdp-filter-card.active .cdp-filter-icon {
// //   background: linear-gradient(135deg, ${C.warn} 0%, #fb923c 100%) !important;
// //   box-shadow: 0 4px 10px rgba(245,158,11,0.3) !important;
// // }
// // .cdp-filter-card.active .cdp-filter-count,
// // .cdp-filter-card.active .cdp-filter-action {
// //   color: ${C.warnText} !important;
// // }
// // .cdp-filter-card.disabled {
// //   opacity: 0.5; cursor: not-allowed; pointer-events: none;
// // }

// // .cdp-close-details:hover { background: #e5e7eb !important; color: ${C.text} !important; }
// // .cdp-learn-more:hover { background: ${C.border} !important; }

// // .cdp-puzzle-board.solved {
// //   box-shadow: 0 0 0 3px ${C.primary}, 0 0 30px 8px rgba(79,70,229,0.35);
// // }
// // .cdp-puzzle-btn:hover { background: ${C.primaryDark} !important; }
// // .cdp-puzzle-slot.drag-over {
// //   border-color: ${C.primary} !important;
// //   background: ${C.primaryLight} !important;
// // }
// // .cdp-puzzle-tile:hover { background: ${C.primaryDark}; }
// // .cdp-puzzle-tile:active { cursor: grabbing; }
// // .cdp-puzzle-tile.dragging { opacity: 0.3; }
// // .cdp-puzzle-tile.correct {
// //   background: ${C.successBg} !important;
// //   color: ${C.successText} !important;
// //   border-color: ${C.success} !important;
// //   cursor: default !important;
// // }
// // .cdp-puzzle-tile.correct:hover { background: ${C.successBg} !important; }
// // .cdp-puzzle-tile.just-placed { animation: cdpTilePulse 0.7s ease; }
// // @keyframes cdpTilePulse {
// //   0%   { transform: scale(1);    box-shadow: 0 0 0 0 rgba(16,185,129,0.45); }
// //   40%  { transform: scale(1.04); box-shadow: 0 0 0 8px rgba(16,185,129,0.45); }
// //   100% { transform: scale(1);    box-shadow: 0 0 0 0 transparent; }
// // }

// // .cdp-tile-strip {
// //   position: absolute; bottom: -1px; left: 50%;
// //   transform: translate(-50%, 50%);
// //   background: ${C.success}; color: white;
// //   padding: 2px 8px; border-radius: 4px;
// //   font-size: 9px; font-weight: 700;
// //   letter-spacing: 0.4px; text-transform: uppercase;
// //   white-space: nowrap; z-index: 2;
// //   display: flex; align-items: center; gap: 5px;
// // }
// // .cdp-see-why {
// //   color: white; text-decoration: underline;
// //   background: none; border: none; padding: 0;
// //   cursor: pointer; font-family: inherit;
// //   font-size: 9px; font-weight: 700; text-transform: uppercase;
// // }
// // .cdp-help-btn {
// //   position: absolute; top: 2px; left: 4px;
// //   width: 14px; height: 14px;
// //   border-radius: 50%; border: 1.5px solid currentColor;
// //   background: transparent;
// //   color: rgba(255,255,255,0.85);
// //   font-size: 9px; font-weight: 700; font-family: inherit;
// //   cursor: pointer;
// //   display: flex; align-items: center; justify-content: center;
// //   padding: 0; line-height: 1; z-index: 2;
// // }
// // .cdp-help-btn:hover { color: white; background: rgba(255,255,255,0.2); }

// // .cdp-popover {
// //   position: absolute;
// //   bottom: calc(100% + 8px); left: 50%;
// //   transform: translateX(-50%);
// //   background: #0f172a; color: #f1f5f9;
// //   border: 1px solid #334155;
// //   border-radius: 8px;
// //   padding: 12px 28px 12px 14px;
// //   width: 260px;
// //   font-size: 13px; line-height: 1.5;
// //   font-family: 'Inter', sans-serif;
// //   text-align: left;
// //   box-shadow: 0 12px 30px rgba(0,0,0,0.35);
// //   z-index: 100;
// //   white-space: normal;
// // }
// // .cdp-popover-close {
// //   position: absolute; top: 4px; right: 6px;
// //   background: transparent; border: none;
// //   color: #94a3b8; cursor: pointer;
// //   font-size: 16px; padding: 0; line-height: 1;
// //   font-family: inherit;
// // }
// // .cdp-popover a {
// //   display: inline-block; margin-top: 8px;
// //   color: #93c5fd; text-decoration: none; font-weight: 600;
// // }
// // .cdp-popover a:hover { text-decoration: underline; }

// // .cdp-back-to-ref:hover { text-decoration: underline; }
// // .cdp-sidebar-sticky::-webkit-scrollbar { width: 4px; }
// // .cdp-sidebar-sticky::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 4px; }

// // @keyframes cdpSlideIn {
// //   from { opacity: 0; transform: translateY(-8px); }
// //   to   { opacity: 1; transform: translateY(0); }
// // }
// // .cdp-cell-details { animation: cdpSlideIn 0.25s ease; }

// // @media (max-width: 1320px) {
// //   .cdp-sidebar { display: none !important; }
// // }
// // @media (max-width: 900px) {
// //   .cdp-ref-grid { grid-template-columns: repeat(2, 1fr) !important; }
// //   .cdp-puzzle-board { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
// // }
// // @media (max-width: 600px) {
// //   .cdp-ref-grid { grid-template-columns: 1fr !important; }
// //   .cdp-puzzle-board { grid-template-columns: 1fr !important; }
// //   .cdp-input-block { flex-direction: column !important; align-items: stretch !important; }
// //   .cdp-input-block input, .cdp-input-block button { width: 100% !important; }
// //   .cdp-mode-tab { padding: 9px 14px !important; font-size: 13px !important; }
// // }
// // `;

// // const CommonDerivativesPage = ({ relatedReferences = [], articleHref = '/calculus/derivatives/common' }) => {
// //   const [viewMode, setViewMode] = useState('reference');
// //   const [mode, setMode] = useState('byF');

// //   const [fInput, setFInput] = useState('');
// //   const [dfInput, setDfInput] = useState('');

// //   const [statusKind, setStatusKind] = useState(null);
// //   const [statusIcon, setStatusIcon] = useState('');
// //   const [statusContent, setStatusContent] = useState(null);

// //   const [highlightedIds, setHighlightedIds] = useState(() => new Set());
// //   const [activeFilter, setActiveFilter] = useState(null);
// //   const [detailsId, setDetailsId] = useState(null);

// //   const [slots, setSlots] = useState(() => DERIVATIVES.map((d) => d.id));
// //   const [prevCorrect, setPrevCorrect] = useState(() => new Set(DERIVATIVES.map((d) => d.id)));
// //   const [justPlacedId, setJustPlacedId] = useState(null);
// //   const [draggedFromSlot, setDraggedFromSlot] = useState(null);
// //   const [dragOverSlot, setDragOverSlot] = useState(null);
// //   const [openTipId, setOpenTipId] = useState(null);

// //   const [activeSection, setActiveSection] = useState('sec-tool');
// //   const [pendingScroll, setPendingScroll] = useState(null);

// //   const cardRefs = useRef({});
// //   const sectionRefs = useRef({});
// //   const justPlacedTimer = useRef(null);

// //   const isSolved = useMemo(
// //     () => slots.every((tileId, slotIdx) => tileId === slotIdx),
// //     [slots]
// //   );
// //   const correctCount = useMemo(
// //     () => slots.filter((tileId, slotIdx) => tileId === slotIdx).length,
// //     [slots]
// //   );
// //   const filterCounts = useMemo(() => {
// //     const counts = {};
// //     FILTER_DEFS.forEach((f) => {
// //       counts[f.id] = DERIVATIVES.filter(f.match).length;
// //     });
// //     return counts;
// //   }, []);

// //   useEffect(() => {
// //     if (!pendingScroll) return;
// //     let el = null;
// //     if (pendingScroll.type === 'card') {
// //       el = cardRefs.current[pendingScroll.id];
// //     } else if (pendingScroll.type === 'section') {
// //       el = sectionRefs.current[pendingScroll.id];
// //     } else if (pendingScroll.type === 'details') {
// //       el = document.getElementById('cdp-cell-details');
// //     }
// //     if (el) {
// //       el.scrollIntoView({
// //         behavior: 'smooth',
// //         block: pendingScroll.type === 'section' ? 'start' : 'center',
// //       });
// //     }
// //     setPendingScroll(null);
// //   }, [pendingScroll]);

// //   useEffect(() => {
// //     const sections = TOC_ITEMS
// //       .map((it) => sectionRefs.current[it.id])
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

// //   useEffect(() => {
// //     if (openTipId === null) return;
// //     const handler = (e) => {
// //       if (!e.target.closest('.cdp-popover') &&
// //           !e.target.closest('.cdp-help-btn') &&
// //           !e.target.closest('.cdp-see-why')) {
// //         setOpenTipId(null);
// //       }
// //     };
// //     const onKey = (e) => { if (e.key === 'Escape') setOpenTipId(null); };
// //     document.addEventListener('mousedown', handler);
// //     document.addEventListener('keydown', onKey);
// //     return () => {
// //       document.removeEventListener('mousedown', handler);
// //       document.removeEventListener('keydown', onKey);
// //     };
// //   }, [openTipId]);

// //   useEffect(() => () => {
// //     if (justPlacedTimer.current) clearTimeout(justPlacedTimer.current);
// //   }, []);

// //   // ===== Auto-scroll viewport during drag =====
// //   // When the dragged pointer nears the top or bottom of the visible viewport,
// //   // smoothly scroll the page so off-screen drop targets become reachable.
// //   useEffect(() => {
// //     if (draggedFromSlot === null) return;

// //     const SCROLL_ZONE = 90;     // px from edge where scrolling kicks in
// //     const MAX_SPEED   = 14;     // px per frame at max
// //     let velocity = 0;
// //     let rafId = null;
// //     let lastClientY = null;

// //     const updateVelocity = (clientY) => {
// //       const vh = window.innerHeight;
// //       if (clientY < SCROLL_ZONE) {
// //         const intensity = (SCROLL_ZONE - clientY) / SCROLL_ZONE;
// //         velocity = -MAX_SPEED * Math.min(1, Math.max(0, intensity));
// //       } else if (clientY > vh - SCROLL_ZONE) {
// //         const intensity = (clientY - (vh - SCROLL_ZONE)) / SCROLL_ZONE;
// //         velocity = MAX_SPEED * Math.min(1, Math.max(0, intensity));
// //       } else {
// //         velocity = 0;
// //       }
// //     };
// //     const animate = () => {
// //       if (velocity !== 0) window.scrollBy(0, velocity);
// //       rafId = requestAnimationFrame(animate);
// //     };
// //     const onDragOverDoc = (e) => {
// //       lastClientY = e.clientY;
// //       updateVelocity(e.clientY);
// //     };

// //     document.addEventListener('dragover', onDragOverDoc);
// //     rafId = requestAnimationFrame(animate);

// //     return () => {
// //       document.removeEventListener('dragover', onDragOverDoc);
// //       if (rafId) cancelAnimationFrame(rafId);
// //       velocity = 0;
// //     };
// //   }, [draggedFromSlot]);

// //   const setStatus = (kind, icon, content) => {
// //     setStatusKind(kind);
// //     setStatusIcon(icon);
// //     setStatusContent(content);
// //   };
// //   const hideStatus = () => {
// //     setStatusKind(null);
// //     setStatusIcon('');
// //     setStatusContent(null);
// //   };

// //   const handleModeChange = (next) => {
// //     setMode(next);
// //     hideStatus();
// //   };

// //   const handleViewChange = (next) => {
// //     setViewMode(next);
// //     setOpenTipId(null);
// //     if (next === 'puzzle') {
// //       setActiveFilter(null);
// //       setHighlightedIds(new Set());
// //       setDetailsId(null);
// //       hideStatus();
// //       if (slots.every((t, i) => t === i)) shufflePuzzle();
// //     }
// //   };

// //   const runFind = (query, type) => {
// //     if (!query.trim()) {
// //       setStatus('error', '!', 'Please enter something to search.');
// //       return;
// //     }
// //     if (viewMode === 'puzzle') setViewMode('reference');
// //     setActiveFilter(null);
// //     setDetailsId(null);
// //     const matches = type === 'byF'
// //       ? matchAgainst(query, 'fx', 'fxAlt')
// //       : matchAgainst(query, 'dfx', 'dfxAlt');
// //     setHighlightedIds(new Set(matches.map((d) => d.id)));
// //     if (matches.length === 0) {
// //       setStatus('info', '\u2211',
// //         processContent(`No entries match **${query}**. Try another expression.`));
// //     } else if (matches.length === 1) {
// //       const d = matches[0];
// //       setStatus('success', '\u2713',
// //         processContent(`Found: **$\\frac{d}{dx}[${d.fx}] = ${d.dfx}$**. Card highlighted below.`));
// //       setPendingScroll({ type: 'card', id: d.id });
// //     } else {
// //       setStatus('success', '\u2211',
// //         processContent(`**${matches.length}** matches highlighted below.`));
// //       setPendingScroll({ type: 'section', id: 'sec-table' });
// //     }
// //   };

// //   const toggleFilter = (id) => {
// //     setHighlightedIds(new Set());
// //     setDetailsId(null);
// //     if (activeFilter === id) {
// //       setActiveFilter(null);
// //       hideStatus();
// //     } else {
// //       setActiveFilter(id);
// //       hideStatus();
// //       setPendingScroll({ type: 'section', id: 'sec-table' });
// //     }
// //   };
// //   const handleClearHighlights = () => {
// //     setActiveFilter(null);
// //     setHighlightedIds(new Set());
// //     setDetailsId(null);
// //     hideStatus();
// //   };

// //   const handleCardClick = (id) => {
// //     setDetailsId(id);
// //     setHighlightedIds(new Set([id]));
// //     setActiveFilter(null);
// //     setPendingScroll({ type: 'details' });
// //   };

// //   const shufflePuzzle = () => {
// //     const ids = DERIVATIVES.map((d) => d.id);
// //     for (let i = ids.length - 1; i > 0; i--) {
// //       const j = Math.floor(Math.random() * (i + 1));
// //       [ids[i], ids[j]] = [ids[j], ids[i]];
// //     }
// //     setSlots(ids);
// //     setOpenTipId(null);
// //     setJustPlacedId(null);
// //     setDraggedFromSlot(null);
// //     setDragOverSlot(null);
// //     const initialCorrect = new Set();
// //     ids.forEach((tid, sidx) => { if (tid === sidx) initialCorrect.add(tid); });
// //     setPrevCorrect(initialCorrect);
// //   };

// //   const handleDragStart = (e, slotIdx) => {
// //     if (slots[slotIdx] === slotIdx) return;
// //     setDraggedFromSlot(slotIdx);
// //     e.dataTransfer.effectAllowed = 'move';
// //     setOpenTipId(null);
// //   };
// //   const handleDragEnd = () => {
// //     setDraggedFromSlot(null);
// //     setDragOverSlot(null);
// //   };
// //   const handleDragOver = (e, slotIdx) => {
// //     if (draggedFromSlot === null) return;
// //     if (slots[slotIdx] === slotIdx) return;
// //     e.preventDefault();
// //     e.dataTransfer.dropEffect = 'move';
// //     if (dragOverSlot !== slotIdx) setDragOverSlot(slotIdx);
// //   };
// //   const handleDragLeave = (slotIdx) => {
// //     if (dragOverSlot === slotIdx) setDragOverSlot(null);
// //   };
// //   const handleDrop = (e, slotIdx) => {
// //     e.preventDefault();
// //     setDragOverSlot(null);
// //     if (draggedFromSlot === null) return;
// //     if (slotIdx === draggedFromSlot) return;
// //     if (slots[slotIdx] === slotIdx) return;
// //     const newSlots = [...slots];
// //     const tmp = newSlots[draggedFromSlot];
// //     newSlots[draggedFromSlot] = newSlots[slotIdx];
// //     newSlots[slotIdx] = tmp;
// //     const movedTileId = newSlots[slotIdx];
// //     const becameCorrect = (movedTileId === slotIdx) && !prevCorrect.has(movedTileId);
// //     const newCorrect = new Set();
// //     newSlots.forEach((tid, sidx) => { if (tid === sidx) newCorrect.add(tid); });
// //     setSlots(newSlots);
// //     setPrevCorrect(newCorrect);
// //     setDraggedFromSlot(null);
// //     if (becameCorrect) {
// //       setJustPlacedId(movedTileId);
// //       if (justPlacedTimer.current) clearTimeout(justPlacedTimer.current);
// //       justPlacedTimer.current = setTimeout(() => {
// //         setJustPlacedId(null);
// //         justPlacedTimer.current = null;
// //       }, 700);
// //     }
// //   };
// //   const handleTipToggle = (tileId) => {
// //     setOpenTipId(openTipId === tileId ? null : tileId);
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
// //     bannerText = `Filtering: ${def.title} \u2014 ${filterCounts[def.id]} match${filterCounts[def.id] === 1 ? '' : 'es'} highlighted`;
// //   } else if (highlightedIds.size > 0) {
// //     bannerText = `${highlightedIds.size} entr${highlightedIds.size === 1 ? 'y' : 'ies'} highlighted by tool`;
// //   }
// //   const showBanner = (activeFilter !== null || highlightedIds.size > 0) && viewMode === 'reference';

// //   const statusIconBg = ({
// //     success: C.success, error: C.error, info: C.primary,
// //   })[statusKind] || C.primary;

// //   const renderCard = (d) => {
// //     const cls = ['cdp-deriv-card'];
// //     if (highlightedIds.has(d.id)) cls.push('highlight');
// //     if (activeFilter) {
// //       const def = FILTER_DEFS.find((f) => f.id === activeFilter);
// //       if (def.match(d)) cls.push('filter-match');
// //       else cls.push('filter-dim');
// //     }
// //     const cat = CATEGORIES[d.cat];
// //     return (
// //       <div
// //         key={d.id}
// //         ref={(el) => { cardRefs.current[d.id] = el; }}
// //         className={cls.join(' ')}
// //         style={S.derivCard}
// //         onClick={() => handleCardClick(d.id)}
// //       >
// //         <span style={{ ...S.catBadge, background: cat.bg, color: cat.fg }}>
// //           {cat.label}
// //         </span>
// //         <div style={S.derivFormula}>
// //           {processContent(`$\\frac{d}{dx}\\!\\left[${d.fx}\\right]$`)}
// //         </div>
// //         <div style={S.derivArrow}>&darr;</div>
// //         <div style={S.derivResult}>
// //           {processContent(`$${d.dfx}$`)}
// //         </div>
// //       </div>
// //     );
// //   };

// //   const detailsDeriv = detailsId !== null ? DERIVATIVES.find((d) => d.id === detailsId) : null;
// //   const detailsCat = detailsDeriv ? CATEGORIES[detailsDeriv.cat] : null;

// //   // ===== Puzzle pair — single cell in the mesh =====
// //   const renderPuzzlePair = (tileId, slotIdx) => {
// //     const correctDeriv = DERIVATIVES[slotIdx];
// //     const tile = DERIVATIVES[tileId];
// //     const correct = tileId === slotIdx;
// //     const justPlaced = correct && justPlacedId === tileId;
// //     const dragging = draggedFromSlot === slotIdx;
// //     const dragOver = dragOverSlot === slotIdx;
// //     const tipOpen = openTipId === tileId;

// //     const tileCls = ['cdp-puzzle-tile'];
// //     if (correct) tileCls.push('correct');
// //     if (justPlaced) tileCls.push('just-placed');
// //     if (dragging) tileCls.push('dragging');

// //     const slotCls = ['cdp-puzzle-slot'];
// //     if (dragOver) slotCls.push('drag-over');

// //     return (
// //       <div key={slotIdx} className="cdp-puzzle-pair" style={S.puzzlePair}>
// //         <div className="cdp-puzzle-lhs" style={S.puzzleLhs}>
// //           {processContent(`$\\frac{d}{dx}\\!\\left[${correctDeriv.fx}\\right]$`)}
// //         </div>
// //         <div className="cdp-puzzle-equals" style={S.puzzleEquals}>=</div>
// //         <div
// //           className={slotCls.join(' ')}
// //           style={S.puzzleSlot}
// //           data-slot={slotIdx}
// //           onDragOver={(e) => handleDragOver(e, slotIdx)}
// //           onDragLeave={() => handleDragLeave(slotIdx)}
// //           onDrop={(e) => handleDrop(e, slotIdx)}
// //         >
// //           <div
// //             className={tileCls.join(' ')}
// //             style={S.puzzleTileBase}
// //             draggable={!correct}
// //             onDragStart={(e) => handleDragStart(e, slotIdx)}
// //             onDragEnd={handleDragEnd}
// //           >
// //             {!correct && tile.tip && (
// //               <button
// //                 type="button"
// //                 className="cdp-help-btn"
// //                 title="Get a hint"
// //                 draggable={false}
// //                 onMouseDown={(e) => e.stopPropagation()}
// //                 onDragStart={(e) => e.preventDefault()}
// //                 onClick={(e) => { e.stopPropagation(); handleTipToggle(tile.id); }}
// //               >
// //                 ?
// //               </button>
// //             )}
// //             <span>{processContent(`$${tile.dfx}$`)}</span>
// //             {correct && (
// //               <div className="cdp-tile-strip">
// //                 <span>&#10003; In place</span>
// //                 {tile.tip && (
// //                   <>
// //                     <span style={{ opacity: 0.6 }}>&mdash;</span>
// //                     <button
// //                       type="button"
// //                       className="cdp-see-why"
// //                       title="See why"
// //                       draggable={false}
// //                       onMouseDown={(e) => e.stopPropagation()}
// //                       onDragStart={(e) => e.preventDefault()}
// //                       onClick={(e) => { e.stopPropagation(); handleTipToggle(tile.id); }}
// //                     >
// //                       see why
// //                     </button>
// //                   </>
// //                 )}
// //               </div>
// //             )}
// //             {tipOpen && tile.tip && (
// //               <div className="cdp-popover" onMouseDown={(e) => e.stopPropagation()}>
// //                 <button
// //                   type="button"
// //                   className="cdp-popover-close"
// //                   onClick={(e) => { e.stopPropagation(); setOpenTipId(null); }}
// //                   aria-label="Close"
// //                 >
// //                   &times;
// //                 </button>
// //                 <div>{processContent(tile.tip)}</div>
// //                 {tile.link && (
// //                   <a href={tile.link} target="_blank" rel="noopener noreferrer">
// //                     Learn more &rarr;
// //                   </a>
// //                 )}
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   };

// //   const modeTabs = [
// //     { id: 'byF',  label: 'Find by f(x)' },
// //     { id: 'byDF', label: <>Find by f&apos;(x)</> },
// //   ];

// //   return (
// //     <>
// //       <style dangerouslySetInnerHTML={{ __html: CSS }} />
// //       <div style={S.container}>

// //         <p style={S.pageIntro}>
// //           Reference table of the most-used derivative identities. Try
// //           {' '}<strong>puzzle</strong> mode to drill, or read the full{' '}
// //           <a href={articleHref} style={S.pageIntroLink}>derivatives explanation &rarr;</a>
// //         </p>

// //         <div className="cdp-layout" style={S.pageLayout}>

// //           <aside className="cdp-sidebar" style={S.sidebar}>
// //             <div className="cdp-sidebar-sticky" style={S.sidebarSticky}>
// //               <div style={S.sidebarBlock}>
// //                 <div style={S.sidebarLabel}>On this page</div>
// //                 <ul style={S.tocList}>
// //                   {TOC_ITEMS.map((item, idx) => (
// //                     <li key={item.id}>
// //                       <a
// //                         className={`cdp-toc-link ${activeSection === item.id ? 'active' : ''}`}
// //                         style={tocLinkStyle(item.id)}
// //                         onClick={(e) => {
// //                           e.preventDefault();
// //                           const t = sectionRefs.current[item.id];
// //                           if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
// //                         }}
// //                       >
// //                         <span style={tocNumStyle(item.id)}>{idx + 1}</span>
// //                         {item.label}
// //                       </a>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>

// //               {relatedReferences && relatedReferences.length > 0 && (
// //                 <div style={S.sidebarBlock}>
// //                   <div style={S.sidebarLabel}>Related references</div>
// //                   {relatedReferences.map((ref, idx) => (
// //                     <a
// //                       key={idx}
// //                       href={ref.href}
// //                       className="cdp-related-mini"
// //                       style={S.relatedMini}
// //                     >
// //                       <div style={S.relatedMiniTitle}>{ref.title}</div>
// //                       {ref.sub && <div style={S.relatedMiniSub}>{ref.sub}</div>}
// //                     </a>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>
// //           </aside>

// //           <div style={S.mainCol}>

// //             <section
// //               id="sec-tool"
// //               ref={(el) => { sectionRefs.current['sec-tool'] = el; }}
// //               style={S.toolSection}
// //             >
// //               <h2 style={S.toolH2}>Derivative Tool</h2>
// //               <p style={S.toolSub}>Every answer takes you to the table. Pick a question:</p>

// //               <div style={S.modeTabsWrap}>
// //                 {modeTabs.map((tab) => {
// //                   const isActive = mode === tab.id;
// //                   return (
// //                     <button
// //                       key={tab.id}
// //                       type="button"
// //                       className={`cdp-mode-tab ${isActive ? 'active' : ''}`}
// //                       style={{ ...S.modeTabBase, ...(isActive ? S.modeTabActive : {}) }}
// //                       onClick={() => handleModeChange(tab.id)}
// //                     >
// //                       {tab.label}
// //                     </button>
// //                   );
// //                 })}
// //               </div>

// //               {mode === 'byF' && (
// //                 <div className="cdp-input-block" style={S.inputBlock}>
// //                   <input
// //                     type="text"
// //                     className="cdp-input-field"
// //                     style={S.inputField}
// //                     placeholder="Enter f(x) (e.g., sin, ln, tanh, arcsin)"
// //                     value={fInput}
// //                     onChange={(e) => setFInput(e.target.value)}
// //                     onKeyDown={(e) => { if (e.key === 'Enter') runFind(fInput, 'byF'); }}
// //                   />
// //                   <button
// //                     type="button"
// //                     className="cdp-input-btn"
// //                     style={S.inputBtn}
// //                     onClick={() => runFind(fInput, 'byF')}
// //                   >
// //                     Find
// //                   </button>
// //                 </div>
// //               )}

// //               {mode === 'byDF' && (
// //                 <div className="cdp-input-block" style={S.inputBlock}>
// //                   <input
// //                     type="text"
// //                     className="cdp-input-field"
// //                     style={S.inputField}
// //                     placeholder="Enter f&apos;(x) (e.g., cos, 1/x, sech^2)"
// //                     value={dfInput}
// //                     onChange={(e) => setDfInput(e.target.value)}
// //                     onKeyDown={(e) => { if (e.key === 'Enter') runFind(dfInput, 'byDF'); }}
// //                   />
// //                   <button
// //                     type="button"
// //                     className="cdp-input-btn"
// //                     style={S.inputBtn}
// //                     onClick={() => runFind(dfInput, 'byDF')}
// //                   >
// //                     Find
// //                   </button>
// //                 </div>
// //               )}

// //               {statusKind && (
// //                 <div style={S.toolStatus}>
// //                   <span style={{ ...S.statusIcon, background: statusIconBg }}>{statusIcon}</span>
// //                   <span>{statusContent}</span>
// //                 </div>
// //               )}
// //             </section>

// //             <section
// //               id="sec-table"
// //               ref={(el) => { sectionRefs.current['sec-table'] = el; }}
// //             >
// //               <div style={S.legend}>
// //                 <div style={S.legendLeft}>
// //                   <div style={S.legendTitle}>View</div>
// //                   <p style={S.legendNote}>
// //                     {viewMode === 'reference'
// //                       ? 'Reference mode: browse every common derivative, click any card for the proof link.'
// //                       : 'Puzzle mode: drag tiles into the matching slot. The page auto-scrolls when you drag near the edge.'}
// //                   </p>
// //                 </div>
// //                 <div style={S.viewToggle}>
// //                   {['reference', 'puzzle'].map((v) => {
// //                     const isActive = viewMode === v;
// //                     return (
// //                       <button
// //                         key={v}
// //                         type="button"
// //                         className={`cdp-view-btn ${isActive ? 'active' : ''}`}
// //                         style={{ ...S.viewBtnBase, ...(isActive ? S.viewBtnActive : {}) }}
// //                         onClick={() => handleViewChange(v)}
// //                       >
// //                         {v === 'reference' ? 'Reference' : 'Puzzle'}
// //                       </button>
// //                     );
// //                   })}
// //                 </div>
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

// //               {viewMode === 'reference' && (
// //                 <>
// //                   <div className="cdp-ref-grid" style={S.refGrid}>
// //                     {DERIVATIVES.map(renderCard)}
// //                   </div>

// //                   {detailsDeriv && (
// //                     <div
// //                       id="cdp-cell-details"
// //                       className="cdp-cell-details"
// //                       style={S.cellDetails}
// //                     >
// //                       <button
// //                         type="button"
// //                         className="cdp-close-details"
// //                         style={S.closeDetails}
// //                         onClick={() => setDetailsId(null)}
// //                       >
// //                         &times;
// //                       </button>
// //                       <h3 style={S.detailsH3}>
// //                         {processContent(`$\\frac{d}{dx}\\!\\left[${detailsDeriv.fx}\\right] = ${detailsDeriv.dfx}$`)}
// //                       </h3>
// //                       <div style={S.detailsTip}>
// //                         {processContent(detailsDeriv.tip)}
// //                       </div>
// //                       <div style={S.detailsGrid}>
// //                         <div style={S.detailItem}>
// //                           <div style={S.detailLabel}>f(x)</div>
// //                           <div style={S.detailValue}>
// //                             {processContent(`$${detailsDeriv.fx}$`)}
// //                           </div>
// //                         </div>
// //                         <div style={S.detailItem}>
// //                           <div style={S.detailLabel}>f&prime;(x)</div>
// //                           <div style={S.detailValue}>
// //                             {processContent(`$${detailsDeriv.dfx}$`)}
// //                           </div>
// //                         </div>
// //                         <div style={S.detailItem}>
// //                           <div style={S.detailLabel}>Category</div>
// //                           <div style={S.detailValue}>{detailsCat.label}</div>
// //                         </div>
// //                       </div>
// //                       <a
// //                         className="cdp-learn-more"
// //                         style={S.learnMore}
// //                         href={detailsDeriv.link}
// //                       >
// //                         Read the full derivation &rarr;
// //                       </a>
// //                     </div>
// //                   )}
// //                 </>
// //               )}

// //               {viewMode === 'puzzle' && (
// //                 <>
// //                   <div style={S.puzzleControls}>
// //                     <button
// //                       type="button"
// //                       className="cdp-puzzle-btn"
// //                       style={S.puzzleBtn}
// //                       onClick={shufflePuzzle}
// //                     >
// //                       Shuffle
// //                     </button>
// //                     <span style={S.puzzleProgress}>
// //                       {isSolved ? (
// //                         <>
// //                           <strong style={{ color: C.primaryDark }}>&#10003; Solved!</strong>{' '}
// //                           All {DERIVATIVES.length} derivatives matched.{' '}
// //                           <a
// //                             className="cdp-back-to-ref"
// //                             style={S.backToRef}
// //                             onClick={(e) => { e.preventDefault(); handleViewChange('reference'); }}
// //                           >
// //                             Back to reference view
// //                           </a>
// //                         </>
// //                       ) : (
// //                         <>
// //                           <strong style={{ color: C.primaryDark }}>{correctCount}</strong>
// //                           {' '}/ {DERIVATIVES.length} in place
// //                         </>
// //                       )}
// //                     </span>
// //                   </div>
// //                   <div
// //                     className={`cdp-puzzle-board ${isSolved ? 'solved' : ''}`}
// //                     style={S.puzzleBoard}
// //                   >
// //                     {slots.map(renderPuzzlePair)}
// //                   </div>
// //                 </>
// //               )}
// //             </section>

// //             <section
// //               id="sec-patterns"
// //               ref={(el) => { sectionRefs.current['sec-patterns'] = el; }}
// //             >
// //               <h2 style={S.sectionH}>Categories</h2>
// //               <p style={S.sectionSub}>Click a card to highlight matching entries in the table above.</p>

// //               {viewMode === 'puzzle' && (
// //                 <div style={S.filtersDisabledNote}>
// //                   Filters are available in <strong>Reference</strong> view.
// //                 </div>
// //               )}

// //               <div style={S.filterGrid}>
// //                 {FILTER_DEFS.map((f) => {
// //                   const isActive = activeFilter === f.id;
// //                   const disabled = viewMode === 'puzzle';
// //                   const cls = ['cdp-filter-card'];
// //                   if (isActive) cls.push('active');
// //                   if (disabled) cls.push('disabled');
// //                   return (
// //                     <div
// //                       key={f.id}
// //                       className={cls.join(' ')}
// //                       style={S.filterCard}
// //                       onClick={() => !disabled && toggleFilter(f.id)}
// //                     >
// //                       <div className="cdp-filter-icon" style={S.filterIcon}>
// //                         {f.icon}
// //                       </div>
// //                       <h3 style={S.filterCardH3}>{f.title}</h3>
// //                       <p style={S.filterCardP}>{processContent(f.desc)}</p>
// //                       <div style={S.filterCardFooter}>
// //                         <span className="cdp-filter-count" style={S.filterCount}>
// //                           {filterCounts[f.id]} match{filterCounts[f.id] === 1 ? '' : 'es'}
// //                         </span>
// //                         <span className="cdp-filter-action" style={S.filterAction}>
// //                           Click to highlight
// //                         </span>
// //                       </div>
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //             </section>

// //             <section
// //               id="sec-properties"
// //               ref={(el) => { sectionRefs.current['sec-properties'] = el; }}
// //               style={S.propertiesSection}
// //             >
// //               <h2 style={S.sectionH}>Differentiation rules</h2>
// //               <p style={S.sectionSub}>The four structural rules that combine and extend the identities above.</p>
// //               <div style={S.propertyGrid}>
// //                 {PROPERTY_CARDS.map((card, i) => (
// //                   <div key={i} style={S.propertyCard}>
// //                     <div style={S.propertyCardIcon}>{card.icon}</div>
// //                     <h4 style={S.propertyCardH4}>{card.title}</h4>
// //                     <p style={S.propertyCardP}>{processContent(card.body)}</p>
// //                     {card.example && (
// //                       <div style={S.propertyCardExample}>
// //                         {processContent(card.example)}
// //                       </div>
// //                     )}
// //                   </div>
// //                 ))}
// //               </div>
// //             </section>

// //             <section
// //               id="sec-quiz"
// //               ref={(el) => { sectionRefs.current['sec-quiz'] = el; }}
// //               style={S.quizSection}
// //             >
// //               <QuizWidget
// //                 generator={generateDerivativeQuestion}
// //                 title="Test yourself"
// //                 subtitle="Three question types, rotated at random."
// //                 allowReset={true}
// //                 historyLimit={30}
// //               />
// //             </section>

// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default CommonDerivativesPage;


// 'use client';
// import { useState, useEffect, useMemo, useRef, Fragment } from 'react';
// import { processContent } from '../../../utils/contentProcessor';
// import QuizWidget from '../../examples/quiz/QuizWidget';
// import generateDerivativeQuestion from '../../examples/quiz/questions/commonDerivativesQuestions';

// // =========================================================
// //   CommonDerivativesPage  (v4)
// //   - Larger RHS tile cards, smaller LHS condition cards
// //   - "In place" strip lives INSIDE the tile (no clipping)
// //   - Help "?" button no longer hijacked by drag
// // =========================================================

// const C = {
//   primary:      '#4f46e5',
//   primaryDark:  '#3730a3',
//   primaryLight: '#eef2ff',
//   bg:           '#fafbff',
//   border:       '#e0e7ff',
//   borderSoft:   '#eef0f7',
//   cardBorder:   '#c7d2fe',
//   text:         '#1e1b4b',
//   textMuted:    '#64748b',
//   success:      '#10b981',
//   successBg:    '#d1fae5',
//   successText:  '#065f46',
//   error:        '#ef4444',
//   errorBg:      '#fee2e2',
//   errorText:    '#991b1b',
//   warn:         '#f59e0b',
//   warnBg:       '#fef3c7',
//   warnText:     '#92400e',
//   shadowSm:     '0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)',
//   shadowMd:     '0 4px 12px rgba(15,23,42,0.08)',
//   shadowLg:     '0 8px 24px rgba(15,23,42,0.10)',

//   catPolyBg:    '#dbeafe', catPolyFg: '#1e40af',
//   catExpBg:     '#ede9fe', catExpFg:  '#5b21b6',
//   catTrigBg:    '#d1fae5', catTrigFg: '#065f46',
//   catInvBg:     '#ffe4e6', catInvFg:  '#9f1239',
//   catHypBg:     '#ffedd5', catHypFg:  '#9a3412',
//   catIHypBg:    '#cffafe', catIHypFg: '#155e75',
// };

// const DERIVATIVES = [
//   { id: 0,  fx: 'c',                dfx: '0',
//     cat: 'polynomial',
//     fxAlt: ['constant'], dfxAlt: ['zero'],
//     tip:  'The derivative of any constant is zero — constants don&apos;t change with $x$.',
//     link: '/calculus/derivatives/constant-rule' },
//   { id: 1,  fx: 'x',                dfx: '1',
//     cat: 'polynomial',
//     fxAlt: ['identity'], dfxAlt: ['one'],
//     tip:  'The identity function changes at a constant rate of 1.',
//     link: '/calculus/derivatives/identity' },
//   { id: 2,  fx: 'x^n',              dfx: 'nx^{n-1}',
//     cat: 'polynomial',
//     fxAlt: ['power', 'xn'], dfxAlt: ['nxn-1'],
//     tip:  'The power rule: bring the exponent down as a coefficient, then subtract one from the exponent.',
//     link: '/calculus/derivatives/power-rule' },
//   { id: 3,  fx: '\\frac{1}{x}',     dfx: '-\\frac{1}{x^2}',
//     cat: 'polynomial',
//     fxAlt: ['1/x', 'reciprocal'], dfxAlt: ['-1/x^2', '-1/x2'],
//     tip:  'Rewrite $\\frac{1}{x}$ as $x^{-1}$, then apply the power rule: $-1 \\cdot x^{-2} = -\\frac{1}{x^2}$.',
//     link: '/calculus/derivatives/reciprocal' },
//   { id: 4,  fx: '\\sqrt{x}',        dfx: '\\frac{1}{2\\sqrt{x}}',
//     cat: 'polynomial',
//     fxAlt: ['sqrt', 'root', 'square root'], dfxAlt: ['1/(2sqrt(x))'],
//     tip:  '$\\sqrt{x} = x^{1/2}$. Power rule: $(1/2) \\cdot x^{-1/2} = \\frac{1}{2\\sqrt{x}}$. Defined for $x > 0$.',
//     link: '/calculus/derivatives/square-root' },

//   { id: 5,  fx: 'e^x',              dfx: 'e^x',
//     cat: 'exp',
//     fxAlt: ['exp', 'ex'], dfxAlt: ['exp', 'ex'],
//     tip:  'The natural exponential is its own derivative — the defining property of $e$.',
//     link: '/calculus/derivatives/exponential' },
//   { id: 6,  fx: 'a^x',              dfx: 'a^x \\ln(a)',
//     cat: 'exp',
//     fxAlt: ['ax', 'general exponential'], dfxAlt: ['ax ln', 'a^x ln(a)'],
//     tip:  'General exponential rule. When $a = e$, $\\ln(a) = 1$, recovering $\\frac{d}{dx}[e^x] = e^x$.',
//     link: '/calculus/derivatives/general-exponential' },
//   { id: 7,  fx: '\\ln(x)',          dfx: '\\frac{1}{x}',
//     cat: 'exp',
//     fxAlt: ['ln', 'natural log'], dfxAlt: ['1/x'],
//     tip:  'The derivative of the natural logarithm is the reciprocal of its argument. Defined for $x > 0$.',
//     link: '/calculus/derivatives/logarithm' },
//   { id: 8,  fx: '\\log_a(x)',       dfx: '\\frac{1}{x \\ln(a)}',
//     cat: 'exp',
//     fxAlt: ['log a', 'general log'], dfxAlt: ['1/(x ln a)'],
//     tip:  'General logarithm. Change-of-base gives $\\log_a(x) = \\ln(x)/\\ln(a)$, so the derivative is $\\frac{1}{x \\ln(a)}$.',
//     link: '/calculus/derivatives/general-logarithm' },

//   { id: 9,  fx: '\\sin(x)',         dfx: '\\cos(x)',
//     cat: 'trig',
//     fxAlt: ['sine'], dfxAlt: ['cosine'],
//     tip:  'The classic trig derivative. Cosine is the rate of change of sine.',
//     link: '/calculus/derivatives/sine' },
//   { id: 10, fx: '\\cos(x)',         dfx: '-\\sin(x)',
//     cat: 'trig',
//     fxAlt: ['cosine'], dfxAlt: ['negative sine', '-sin'],
//     tip:  'Cosine&apos;s derivative is negative sine — the sign flip reflects the 90° phase shift between the two.',
//     link: '/calculus/derivatives/cosine' },
//   { id: 11, fx: '\\tan(x)',         dfx: '\\sec^2(x)',
//     cat: 'trig',
//     fxAlt: ['tangent'], dfxAlt: ['sec squared', 'sec^2'],
//     tip:  'Derived from the quotient rule on $\\sin / \\cos$: $\\frac{\\cos^2 + \\sin^2}{\\cos^2} = \\frac{1}{\\cos^2} = \\sec^2$.',
//     link: '/calculus/derivatives/tangent' },
//   { id: 12, fx: '\\cot(x)',         dfx: '-\\csc^2(x)',
//     cat: 'trig',
//     fxAlt: ['cotangent'], dfxAlt: ['negative csc squared', '-csc^2'],
//     tip:  'Sister identity to $\\tan$. The negative sign and the $\\csc$-vs-$\\sec$ swap reflect the symmetry between $\\tan/\\cot$ and $\\sin/\\cos$.',
//     link: '/calculus/derivatives/cotangent' },
//   { id: 13, fx: '\\sec(x)',         dfx: '\\sec(x)\\tan(x)',
//     cat: 'trig',
//     fxAlt: ['secant'], dfxAlt: ['sec tan'],
//     tip:  'From the chain rule on $(\\cos x)^{-1}$. Memorable because the result keeps both $\\sec$ and $\\tan$.',
//     link: '/calculus/derivatives/secant' },
//   { id: 14, fx: '\\csc(x)',         dfx: '-\\csc(x)\\cot(x)',
//     cat: 'trig',
//     fxAlt: ['cosecant'], dfxAlt: ['negative csc cot', '-csc cot'],
//     tip:  'Sister to $\\sec$. Like $\\sec$, the result is a product — but with a negative sign, mirroring the $\\cos$ vs $\\sin$ asymmetry.',
//     link: '/calculus/derivatives/cosecant' },

//   { id: 15, fx: '\\arcsin(x)',      dfx: '\\frac{1}{\\sqrt{1-x^2}}',
//     cat: 'inverse',
//     fxAlt: ['arcsine', 'inverse sine'], dfxAlt: ['1/sqrt(1-x^2)'],
//     tip:  'Inverse function derivative formula. Defined for $|x| < 1$.',
//     link: '/calculus/derivatives/arcsine' },
//   { id: 16, fx: '\\arccos(x)',      dfx: '-\\frac{1}{\\sqrt{1-x^2}}',
//     cat: 'inverse',
//     fxAlt: ['arccosine', 'inverse cosine'], dfxAlt: ['-1/sqrt(1-x^2)'],
//     tip:  'Sign-flipped twin of $\\arcsin$. Since $\\arcsin(x) + \\arccos(x) = \\pi/2$ is constant, their derivatives cancel.',
//     link: '/calculus/derivatives/arccosine' },
//   { id: 17, fx: '\\arctan(x)',      dfx: '\\frac{1}{1+x^2}',
//     cat: 'inverse',
//     fxAlt: ['arctangent', 'inverse tan'], dfxAlt: ['1/(1+x^2)'],
//     tip:  'A beautiful derivative — rational, defined for all real $x$, central to many integration tricks.',
//     link: '/calculus/derivatives/arctangent' },
//   { id: 18, fx: '\\operatorname{arccot}(x)',  dfx: '-\\frac{1}{1+x^2}',
//     cat: 'inverse',
//     fxAlt: ['arccotangent', 'inverse cot'], dfxAlt: ['-1/(1+x^2)'],
//     tip:  'Sign-flipped twin of $\\arctan$. Like arcsin/arccos, $\\arctan(x) + \\operatorname{arccot}(x) = \\pi/2$.',
//     link: '/calculus/derivatives/arccotangent' },
//   { id: 19, fx: '\\operatorname{arcsec}(x)',  dfx: '\\frac{1}{|x|\\sqrt{x^2-1}}',
//     cat: 'inverse',
//     fxAlt: ['arcsecant', 'inverse sec'], dfxAlt: ['1/(|x|sqrt(x^2-1))'],
//     tip:  'Defined for $|x| \\geq 1$. The absolute value keeps the derivative positive on both branches.',
//     link: '/calculus/derivatives/arcsecant' },
//   { id: 20, fx: '\\operatorname{arccsc}(x)',  dfx: '-\\frac{1}{|x|\\sqrt{x^2-1}}',
//     cat: 'inverse',
//     fxAlt: ['arccosecant', 'inverse csc'], dfxAlt: ['-1/(|x|sqrt(x^2-1))'],
//     tip:  'Sign-flipped twin of $\\operatorname{arcsec}$, just as arccos is to arcsin.',
//     link: '/calculus/derivatives/arccosecant' },

//   { id: 21, fx: '\\sinh(x)',        dfx: '\\cosh(x)',
//     cat: 'hyperbolic',
//     fxAlt: ['hyperbolic sine'], dfxAlt: ['hyperbolic cosine'],
//     tip:  'Hyperbolic analog of $\\sin \\to \\cos$. No sign flips — $\\cosh$ relates to $\\sinh$ as $\\cos$ does to $\\sin$, but without the negative.',
//     link: '/calculus/derivatives/sinh' },
//   { id: 22, fx: '\\cosh(x)',        dfx: '\\sinh(x)',
//     cat: 'hyperbolic',
//     fxAlt: ['hyperbolic cosine'], dfxAlt: ['hyperbolic sine'],
//     tip:  'Hyperbolic cosine differentiates to $\\sinh$ — no negative sign, unlike the trig version.',
//     link: '/calculus/derivatives/cosh' },
//   { id: 23, fx: '\\tanh(x)',        dfx: '\\operatorname{sech}^2(x)',
//     cat: 'hyperbolic',
//     fxAlt: ['hyperbolic tangent'], dfxAlt: ['sech squared', 'sech^2'],
//     tip:  'Direct analog of $\\frac{d}{dx}[\\tan(x)] = \\sec^2(x)$, with hyperbolic functions in place of trig.',
//     link: '/calculus/derivatives/tanh' },
//   { id: 24, fx: '\\coth(x)',        dfx: '-\\operatorname{csch}^2(x)',
//     cat: 'hyperbolic',
//     fxAlt: ['hyperbolic cotangent'], dfxAlt: ['negative csch squared'],
//     tip:  'Hyperbolic analog of $\\cot$. The negative sign matches the trig case.',
//     link: '/calculus/derivatives/coth' },
//   { id: 25, fx: '\\operatorname{sech}(x)',  dfx: '-\\operatorname{sech}(x)\\tanh(x)',
//     cat: 'hyperbolic',
//     fxAlt: ['hyperbolic secant'], dfxAlt: ['negative sech tanh'],
//     tip:  'Hyperbolic analog of $\\sec$, but with a negative sign — opposite of the trig version.',
//     link: '/calculus/derivatives/sech' },
//   { id: 26, fx: '\\operatorname{csch}(x)',  dfx: '-\\operatorname{csch}(x)\\coth(x)',
//     cat: 'hyperbolic',
//     fxAlt: ['hyperbolic cosecant'], dfxAlt: ['negative csch coth'],
//     tip:  'Hyperbolic analog of $\\csc$. Like $\\csc$, the result is a product, and the sign also matches.',
//     link: '/calculus/derivatives/csch' },

//   { id: 27, fx: '\\operatorname{arcsinh}(x)',  dfx: '\\frac{1}{\\sqrt{x^2+1}}',
//     cat: 'inverseHyperbolic',
//     fxAlt: ['arc sinh', 'inverse hyperbolic sine'], dfxAlt: ['1/sqrt(x^2+1)'],
//     tip:  'Note the $+1$ inside the radical (vs $-1$ for $\\arcsin$). Defined for all real $x$.',
//     link: '/calculus/derivatives/arcsinh' },
//   { id: 28, fx: '\\operatorname{arccosh}(x)',  dfx: '\\frac{1}{\\sqrt{x^2-1}}',
//     cat: 'inverseHyperbolic',
//     fxAlt: ['arc cosh', 'inverse hyperbolic cosine'], dfxAlt: ['1/sqrt(x^2-1)'],
//     tip:  'Defined for $x > 1$. The radical is $x^2 - 1$, the reverse of $\\arcsin$&apos;s domain.',
//     link: '/calculus/derivatives/arccosh' },
//   { id: 29, fx: '\\operatorname{arctanh}(x)',  dfx: '\\frac{1}{1-x^2}',
//     cat: 'inverseHyperbolic',
//     fxAlt: ['arc tanh', 'inverse hyperbolic tangent'], dfxAlt: ['1/(1-x^2)'],
//     tip:  'Defined for $|x| < 1$. Same denominator structure as $\\arctan$, but with subtraction inside.',
//     link: '/calculus/derivatives/arctanh' },
// ];

// const CATEGORIES = {
//   polynomial:        { label: 'Polynomial',     bg: C.catPolyBg, fg: C.catPolyFg },
//   exp:               { label: 'Exp / Log',      bg: C.catExpBg,  fg: C.catExpFg  },
//   trig:              { label: 'Trig',           bg: C.catTrigBg, fg: C.catTrigFg },
//   inverse:           { label: 'Inverse trig',   bg: C.catInvBg,  fg: C.catInvFg  },
//   hyperbolic:        { label: 'Hyperbolic',     bg: C.catHypBg,  fg: C.catHypFg  },
//   inverseHyperbolic: { label: 'Inverse hyp.',   bg: C.catIHypBg, fg: C.catIHypFg },
// };

// const FILTER_DEFS = [
//   { id: 'polynomial', icon: 'x^n', title: 'Polynomial',
//     desc: 'Constants, powers, roots, and reciprocals.',
//     match: (d) => d.cat === 'polynomial' },
//   { id: 'exp', icon: 'e^x', title: 'Exponential & log',
//     desc: 'Exponentials and logarithms, natural and general.',
//     match: (d) => d.cat === 'exp' },
//   { id: 'trig', icon: 'sin', title: 'Trigonometric',
//     desc: 'All six basic trig functions.',
//     match: (d) => d.cat === 'trig' },
//   { id: 'inverse', icon: 'sin\u207B\u00B9', title: 'Inverse trig',
//     desc: 'Inverse trig: $\\arcsin$ through $\\operatorname{arccsc}$.',
//     match: (d) => d.cat === 'inverse' },
//   { id: 'hyperbolic', icon: 'sinh', title: 'Hyperbolic',
//     desc: 'Hyperbolic sine, cosine, tan, and their reciprocals.',
//     match: (d) => d.cat === 'hyperbolic' },
//   { id: 'inverseHyperbolic', icon: 'sinh\u207B\u00B9', title: 'Inverse hyperbolic',
//     desc: 'Inverse hyperbolic functions: $\\operatorname{arcsinh}$, $\\operatorname{arccosh}$, $\\operatorname{arctanh}$.',
//     match: (d) => d.cat === 'inverseHyperbolic' },
//   { id: 'reciprocal', icon: '1/x', title: 'Reciprocal forms',
//     desc: 'Derivatives whose result is a fraction \u2014 a quotient form.',
//     match: (d) => /^-?\\frac\{/.test(d.dfx) },
// ];

// const PROPERTY_CARDS = [
//   {
//     icon: '\u2295',
//     title: 'Linearity',
//     body: 'The derivative of a sum is the sum of derivatives. Constants pull out: $\\frac{d}{dx}[c \\cdot f(x)] = c \\cdot f\'(x)$.',
//     example: '$\\frac{d}{dx}[3x^2 + 5x] = 6x + 5$',
//   },
//   {
//     icon: '\u00D7',
//     title: 'Product rule',
//     body: '$\\frac{d}{dx}[fg] = f\'g + fg\'$. Differentiate one factor, leave the other alone, then sum.',
//     example: '$\\frac{d}{dx}[x \\sin(x)] = \\sin(x) + x\\cos(x)$',
//   },
//   {
//     icon: '\u00F7',
//     title: 'Quotient rule',
//     body: '$\\frac{d}{dx}\\!\\left[\\frac{f}{g}\\right] = \\frac{f\'g - fg\'}{g^2}$. Mnemonic: low d-high minus high d-low, over low squared.',
//     example: '$\\frac{d}{dx}\\!\\left[\\frac{\\sin(x)}{x}\\right] = \\frac{x\\cos(x) - \\sin(x)}{x^2}$',
//   },
//   {
//     icon: '\u2218',
//     title: 'Chain rule',
//     body: '$\\frac{d}{dx}[f(g(x))] = f\'(g(x)) \\cdot g\'(x)$. Differentiate the outside, then multiply by the derivative of the inside.',
//     example: '$\\frac{d}{dx}[\\sin(x^2)] = \\cos(x^2) \\cdot 2x$',
//   },
// ];

// const TOC_ITEMS = [
//   { id: 'sec-tool',       label: 'Derivative tool' },
//   { id: 'sec-table',      label: 'The table' },
//   { id: 'sec-patterns',   label: 'Categories' },
//   { id: 'sec-properties', label: 'Differentiation rules' },
//   { id: 'sec-quiz',       label: 'Test yourself' },
// ];

// function normalize(s) {
//   return String(s).toLowerCase()
//     .replace(/\\/g, '')
//     .replace(/[\s\u00B7]/g, '')
//     .replace(/[{}]/g, '')
//     .replace(/operatorname/g, '');
// }
// function matchAgainst(query, key, altKey) {
//   const q = normalize(query);
//   if (!q) return [];
//   return DERIVATIVES.filter((d) => {
//     const main = normalize(d[key]);
//     const alts = (d[altKey] || []).map(normalize);
//     return main.includes(q) || alts.some((a) => a.includes(q));
//   });
// }

// const S = {
//   container: {
//     maxWidth: '1000px', margin: '0 auto', padding: '28px 24px 80px',
//     position: 'relative',
//     fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
//     color: C.text,
//   },
//   pageLayout: { position: 'relative' },
//   sidebar: {
//     position: 'absolute', top: 0, right: '100%',
//     width: '240px', height: '100%', marginRight: '40px',
//   },
//   sidebarSticky: {
//     position: 'sticky', top: '20px',
//     maxHeight: 'calc(100vh - 40px)', overflowY: 'auto',
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

//   pageIntro: {
//     textAlign: 'center', color: C.textMuted, fontSize: '15px',
//     margin: '0 auto 32px', maxWidth: '620px',
//   },
//   pageIntroLink: { color: C.primary, textDecoration: 'none', fontWeight: 600 },

//   toolSection: {
//     background: 'linear-gradient(135deg, #eef2ff 0%, #f0f9ff 100%)',
//     border: `1px solid ${C.border}`, borderRadius: '20px',
//     padding: '28px 32px', marginBottom: '36px',
//   },
//   toolH2: {
//     fontFamily: "'Crimson Pro', serif", fontSize: '26px',
//     color: C.primaryDark, margin: '0 0 4px', fontWeight: 700,
//   },
//   toolSub: { color: C.textMuted, fontSize: '14px', margin: '0 0 18px' },
//   modeTabsWrap: {
//     display: 'inline-flex', background: 'white', borderRadius: '12px',
//     padding: '4px', marginBottom: '14px',
//     border: `1px solid ${C.border}`, boxShadow: C.shadowSm,
//     gap: '2px', flexWrap: 'wrap',
//   },
//   modeTabBase: {
//     padding: '9px 18px', borderRadius: '9px', fontSize: '14px',
//     fontWeight: 600, cursor: 'pointer', background: 'transparent',
//     border: 'none', transition: 'all 0.18s',
//     fontFamily: 'inherit', color: C.textMuted,
//   },
//   modeTabActive: {
//     background: C.primary, color: 'white',
//     boxShadow: '0 2px 6px rgba(79,70,229,0.30)',
//   },
//   inputBlock: {
//     display: 'flex', gap: '10px', marginBottom: '8px',
//     alignItems: 'center', flexWrap: 'wrap',
//   },
//   inputField: {
//     flex: 1, minWidth: '200px',
//     padding: '13px 18px',
//     border: `2px solid ${C.border}`, borderRadius: '11px',
//     fontSize: '15px', outline: 'none', background: 'white',
//     fontFamily: 'inherit', color: C.text,
//     transition: 'border-color 0.15s, box-shadow 0.15s',
//   },
//   inputBtn: {
//     padding: '13px 26px', background: C.primary, color: 'white',
//     border: 'none', borderRadius: '11px',
//     fontWeight: 600, fontSize: '15px', cursor: 'pointer',
//     fontFamily: 'inherit', whiteSpace: 'nowrap',
//     transition: 'background 0.15s',
//   },
//   toolStatus: {
//     marginTop: '12px', padding: '11px 14px',
//     background: 'rgba(255,255,255,0.75)',
//     border: `1px solid ${C.border}`, borderRadius: '10px',
//     display: 'flex', alignItems: 'flex-start', gap: '10px',
//     fontSize: '14px', color: C.text, lineHeight: 1.55,
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
//     display: 'flex', flexWrap: 'wrap', gap: '18px',
//     alignItems: 'center', justifyContent: 'space-between',
//   },
//   legendLeft: { display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '540px' },
//   legendTitle: {
//     fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px',
//     color: C.textMuted, fontWeight: 700,
//   },
//   legendNote: { fontSize: '14px', color: C.textMuted, margin: 0 },
//   viewToggle: {
//     display: 'inline-flex',
//     background: C.bg, borderRadius: '10px', padding: '3px',
//     border: `1px solid ${C.border}`, gap: '2px',
//   },
//   viewBtnBase: {
//     padding: '7px 16px', borderRadius: '7px',
//     fontSize: '13px', fontWeight: 600, cursor: 'pointer',
//     background: 'transparent', border: 'none', fontFamily: 'inherit',
//     color: C.textMuted, transition: 'all 0.15s',
//   },
//   viewBtnActive: {
//     background: C.primary, color: 'white',
//     boxShadow: '0 2px 4px rgba(79,70,229,0.25)',
//   },

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

//   refGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gap: '14px', marginBottom: '36px',
//   },
//   derivCard: {
//     background: 'white',
//     border: `1.5px solid ${C.cardBorder}`,
//     borderRadius: '12px',
//     padding: '18px 14px 14px',
//     cursor: 'pointer',
//     transition: 'transform 0.15s, box-shadow 0.15s, border-color 0.15s, opacity 0.2s',
//     position: 'relative',
//     display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
//     boxShadow: C.shadowSm,
//   },
//   catBadge: {
//     position: 'absolute', top: '8px', right: '8px',
//     fontSize: '9px', fontWeight: 700, textTransform: 'uppercase',
//     letterSpacing: '0.5px', padding: '2px 7px', borderRadius: '4px',
//   },
//   derivFormula: {
//     fontSize: '15px', marginTop: '14px',
//     color: C.text, textAlign: 'center', lineHeight: 1.2,
//   },
//   derivArrow: { color: C.primary, fontSize: '14px', fontWeight: 700 },
//   derivResult: {
//     fontSize: '18px', fontWeight: 700,
//     color: C.primaryDark, textAlign: 'center', lineHeight: 1.2,
//   },

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
//     lineHeight: 1, fontFamily: 'inherit',
//   },
//   detailsH3: {
//     fontSize: '28px',
//     color: C.primaryDark, fontWeight: 700, margin: '0 0 16px',
//     textAlign: 'center',
//   },
//   detailsTip: {
//     color: C.textMuted, fontSize: '15px',
//     lineHeight: 1.65, marginBottom: '16px',
//   },
//   detailsGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//     gap: '12px', marginBottom: '16px',
//   },
//   detailItem: {
//     padding: '14px 16px', background: C.bg,
//     borderRadius: '10px', border: `1px solid ${C.borderSoft}`,
//   },
//   detailLabel: {
//     fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.8px',
//     color: C.textMuted, marginBottom: '6px', fontWeight: 700,
//   },
//   detailValue: { fontSize: '17px', fontWeight: 700, color: C.text },
//   learnMore: {
//     display: 'inline-block', color: C.primary, textDecoration: 'none',
//     fontWeight: 600, fontSize: '14px',
//     padding: '8px 16px', background: C.primaryLight, borderRadius: '8px',
//   },

//   // ===== Puzzle: mesh — RHS dominant =====
//   puzzleControls: {
//     display: 'flex', gap: '12px', marginBottom: '14px',
//     alignItems: 'center', flexWrap: 'wrap',
//   },
//   puzzleBtn: {
//     padding: '9px 18px', background: C.primary, color: 'white',
//     border: 'none', borderRadius: '9px',
//     fontWeight: 600, fontSize: '14px', cursor: 'pointer',
//     fontFamily: 'inherit',
//   },
//   puzzleProgress: { color: C.textMuted, fontSize: '14px', fontWeight: 500 },
//   puzzleBoard: {
//     background: 'white', border: `1px solid ${C.borderSoft}`,
//     borderRadius: '14px', padding: '14px',
//     marginBottom: '24px', boxShadow: C.shadowSm,
//     position: 'relative', transition: 'box-shadow 0.4s ease',
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
//     gap: '10px',
//   },
//   puzzlePair: {
//     display: 'grid',
//     gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1.4fr)',
//     gap: '8px',
//     alignItems: 'stretch',
//   },
//   puzzleLhs: {
//     background: C.primaryLight, color: C.primaryDark,
//     borderRadius: '7px', padding: '6px 8px',
//     fontSize: '13px', fontWeight: 600,
//     display: 'flex', alignItems: 'center',
//     justifyContent: 'center',
//     overflow: 'hidden',
//   },
//   puzzleEquals: {
//     color: C.primary, fontWeight: 700, fontSize: '18px',
//     display: 'flex', alignItems: 'center', padding: '0 2px',
//   },
//   puzzleSlot: {
//     background: C.bg, border: `2px dashed ${C.border}`,
//     borderRadius: '7px', padding: '4px',
//     minHeight: '68px',
//     display: 'flex', alignItems: 'stretch',
//     transition: 'border-color 0.15s, background 0.15s',
//     position: 'relative',
//   },
//   puzzleTileBase: {
//     position: 'relative', background: C.primary, color: 'white',
//     border: '2px solid transparent', borderRadius: '6px',
//     padding: '8px 12px', fontSize: '16px',
//     cursor: 'grab', width: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center', justifyContent: 'center',
//     gap: '5px',
//     userSelect: 'none', overflow: 'hidden',
//     transition: 'background 0.2s, transform 0.2s, border-color 0.2s',
//   },

//   backToRef: {
//     color: C.primary, textDecoration: 'none', fontWeight: 600,
//     marginLeft: '8px', cursor: 'pointer',
//   },

//   sectionH: {
//     fontFamily: "'Crimson Pro', serif", fontSize: '30px',
//     color: '#1e3a8a', fontWeight: 700, letterSpacing: '-0.3px',
//     margin: '0 0 8px',
//   },
//   sectionSub: { color: C.textMuted, marginBottom: '26px', fontSize: '15px' },

//   filtersDisabledNote: {
//     marginBottom: '16px', padding: '10px 16px',
//     background: C.bg, border: `1px dashed ${C.border}`,
//     borderRadius: '8px', color: C.textMuted,
//     fontSize: '13px', textAlign: 'center',
//   },
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
//     fontSize: '14px', fontWeight: 700,
//     marginBottom: '14px',
//     boxShadow: '0 4px 10px rgba(79,70,229,0.25)',
//   },
//   filterCardH3: { fontSize: '16px', fontWeight: 700, color: C.text, margin: '0 0 6px' },
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
//     fontSize: '17px', fontWeight: 700, marginBottom: '12px',
//   },
//   propertyCardH4: { fontSize: '15px', fontWeight: 700, color: C.text, margin: '0 0 6px' },
//   propertyCardP: { color: C.textMuted, fontSize: '13px', lineHeight: 1.6, margin: 0 },
//   propertyCardExample: {
//     background: C.bg, padding: '10px 14px', borderRadius: '6px',
//     fontSize: '14px', marginTop: '10px',
//     color: C.primaryDark, textAlign: 'center',
//     border: `1px solid ${C.borderSoft}`,
//   },
//   quizSection: { marginTop: '56px' },
// };

// const CSS = `
// .cdp-toc-link:hover { color: ${C.primary}; }
// .cdp-related-mini:hover {
//   border-color: ${C.primary} !important;
//   transform: translateX(2px);
//   box-shadow: ${C.shadowSm};
// }
// .cdp-input-field:focus {
//   border-color: ${C.primary} !important;
//   box-shadow: 0 0 0 4px rgba(79,70,229,0.12);
// }
// .cdp-input-btn:hover { background: ${C.primaryDark} !important; }
// .cdp-mode-tab:not(.active):hover { color: ${C.primary} !important; }
// .cdp-view-btn:not(.active):hover { color: ${C.primary}; }

// .cdp-deriv-card:hover {
//   transform: translateY(-2px);
//   box-shadow: 0 6px 16px rgba(15,23,42,0.10);
//   border-color: ${C.primary};
//   z-index: 5;
// }
// .cdp-deriv-card.highlight {
//   border: 2px solid ${C.warn} !important;
//   box-shadow: 0 0 0 3px rgba(245,158,11,0.35), 0 6px 16px rgba(245,158,11,0.25);
//   transform: scale(1.05);
//   z-index: 4;
// }
// .cdp-deriv-card.filter-match {
//   border: 2px solid ${C.warn} !important;
//   box-shadow: 0 4px 14px rgba(245,158,11,0.35);
//   transform: scale(1.04);
//   z-index: 3;
// }
// .cdp-deriv-card.filter-dim { opacity: 0.25; }

// .cdp-filter-card:hover {
//   transform: translateY(-3px);
//   box-shadow: ${C.shadowMd};
//   border-color: ${C.border} !important;
// }
// .cdp-filter-card.active {
//   border-color: ${C.warn} !important;
//   background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%) !important;
//   box-shadow: 0 0 0 4px rgba(245,158,11,0.18), ${C.shadowMd};
// }
// .cdp-filter-card.active::after {
//   content: '\u25CF Active';
//   position: absolute; top: 12px; right: 14px;
//   font-size: 11px; font-weight: 700;
//   color: ${C.warnText}; letter-spacing: 0.5px;
// }
// .cdp-filter-card.active .cdp-filter-icon {
//   background: linear-gradient(135deg, ${C.warn} 0%, #fb923c 100%) !important;
//   box-shadow: 0 4px 10px rgba(245,158,11,0.3) !important;
// }
// .cdp-filter-card.active .cdp-filter-count,
// .cdp-filter-card.active .cdp-filter-action {
//   color: ${C.warnText} !important;
// }
// .cdp-filter-card.disabled {
//   opacity: 0.5; cursor: not-allowed; pointer-events: none;
// }

// .cdp-close-details:hover { background: #e5e7eb !important; color: ${C.text} !important; }
// .cdp-learn-more:hover { background: ${C.border} !important; }

// .cdp-puzzle-board.solved {
//   box-shadow: 0 0 0 3px ${C.primary}, 0 0 30px 8px rgba(79,70,229,0.35);
// }
// .cdp-puzzle-btn:hover { background: ${C.primaryDark} !important; }
// .cdp-puzzle-slot.drag-over {
//   border-color: ${C.primary} !important;
//   background: ${C.primaryLight} !important;
// }
// .cdp-puzzle-tile:hover { background: ${C.primaryDark}; }
// .cdp-puzzle-tile:active { cursor: grabbing; }
// .cdp-puzzle-tile.dragging { opacity: 0.3; }
// .cdp-puzzle-tile.correct {
//   background: ${C.successBg} !important;
//   color: ${C.successText} !important;
//   border-color: ${C.success} !important;
//   cursor: default !important;
// }
// .cdp-puzzle-tile.correct:hover { background: ${C.successBg} !important; }
// .cdp-puzzle-tile.just-placed { animation: cdpTilePulse 0.7s ease; }
// @keyframes cdpTilePulse {
//   0%   { transform: scale(1);    box-shadow: 0 0 0 0 rgba(16,185,129,0.45); }
//   40%  { transform: scale(1.04); box-shadow: 0 0 0 8px rgba(16,185,129,0.45); }
//   100% { transform: scale(1);    box-shadow: 0 0 0 0 transparent; }
// }

// /* In-flow strip — lives inside the tile, never clipped */
// .cdp-tile-strip {
//   flex: 0 0 auto;
//   background: ${C.success};
//   color: white;
//   padding: 2px 10px;
//   border-radius: 4px;
//   font-size: 10px;
//   font-weight: 700;
//   letter-spacing: 0.4px;
//   text-transform: uppercase;
//   white-space: nowrap;
//   display: inline-flex;
//   align-items: center;
//   gap: 5px;
//   line-height: 1.4;
// }
// .cdp-see-why {
//   color: white;
//   text-decoration: underline;
//   background: none;
//   border: none;
//   padding: 0;
//   cursor: pointer;
//   font-family: inherit;
//   font-size: 10px;
//   font-weight: 700;
//   text-transform: uppercase;
//   letter-spacing: 0.4px;
// }
// .cdp-see-why:hover { color: rgba(255,255,255,0.85); }

// /* Help button — larger, more visible */
// .cdp-help-btn {
//   position: absolute;
//   top: 4px;
//   left: 5px;
//   width: 18px;
//   height: 18px;
//   border-radius: 50%;
//   border: 1.5px solid white;
//   background: rgba(255,255,255,0.18);
//   color: white;
//   font-size: 11px;
//   font-weight: 700;
//   font-family: inherit;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0;
//   line-height: 1;
//   z-index: 4;
//   transition: background 0.15s;
// }
// .cdp-help-btn:hover { background: rgba(255,255,255,0.42); }

// .cdp-popover {
//   position: absolute;
//   bottom: calc(100% + 8px); left: 50%;
//   transform: translateX(-50%);
//   background: #0f172a; color: #f1f5f9;
//   border: 1px solid #334155;
//   border-radius: 8px;
//   padding: 12px 28px 12px 14px;
//   width: 260px;
//   font-size: 13px; line-height: 1.5;
//   font-family: 'Inter', sans-serif;
//   text-align: left;
//   box-shadow: 0 12px 30px rgba(0,0,0,0.35);
//   z-index: 100;
//   white-space: normal;
// }
// .cdp-popover-close {
//   position: absolute; top: 4px; right: 6px;
//   background: transparent; border: none;
//   color: #94a3b8; cursor: pointer;
//   font-size: 16px; padding: 0; line-height: 1;
//   font-family: inherit;
// }
// .cdp-popover a {
//   display: inline-block; margin-top: 8px;
//   color: #93c5fd; text-decoration: none; font-weight: 600;
// }
// .cdp-popover a:hover { text-decoration: underline; }

// .cdp-back-to-ref:hover { text-decoration: underline; }
// .cdp-sidebar-sticky::-webkit-scrollbar { width: 4px; }
// .cdp-sidebar-sticky::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 4px; }

// @keyframes cdpSlideIn {
//   from { opacity: 0; transform: translateY(-8px); }
//   to   { opacity: 1; transform: translateY(0); }
// }
// .cdp-cell-details { animation: cdpSlideIn 0.25s ease; }

// @media (max-width: 1320px) {
//   .cdp-sidebar { display: none !important; }
// }
// @media (max-width: 900px) {
//   .cdp-ref-grid { grid-template-columns: repeat(2, 1fr) !important; }
//   .cdp-puzzle-board { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
// }
// @media (max-width: 600px) {
//   .cdp-ref-grid { grid-template-columns: 1fr !important; }
//   .cdp-puzzle-board { grid-template-columns: 1fr !important; }
//   .cdp-input-block { flex-direction: column !important; align-items: stretch !important; }
//   .cdp-input-block input, .cdp-input-block button { width: 100% !important; }
//   .cdp-mode-tab { padding: 9px 14px !important; font-size: 13px !important; }
// }
// `;

// const CommonDerivativesPage = ({ relatedReferences = [], articleHref = '/calculus/derivatives/common' }) => {
//   const [viewMode, setViewMode] = useState('reference');
//   const [mode, setMode] = useState('byF');

//   const [fInput, setFInput] = useState('');
//   const [dfInput, setDfInput] = useState('');

//   const [statusKind, setStatusKind] = useState(null);
//   const [statusIcon, setStatusIcon] = useState('');
//   const [statusContent, setStatusContent] = useState(null);

//   const [highlightedIds, setHighlightedIds] = useState(() => new Set());
//   const [activeFilter, setActiveFilter] = useState(null);
//   const [detailsId, setDetailsId] = useState(null);

//   const [slots, setSlots] = useState(() => DERIVATIVES.map((d) => d.id));
//   const [prevCorrect, setPrevCorrect] = useState(() => new Set(DERIVATIVES.map((d) => d.id)));
//   const [justPlacedId, setJustPlacedId] = useState(null);
//   const [draggedFromSlot, setDraggedFromSlot] = useState(null);
//   const [dragOverSlot, setDragOverSlot] = useState(null);
//   const [openTipId, setOpenTipId] = useState(null);

//   const [activeSection, setActiveSection] = useState('sec-tool');
//   const [pendingScroll, setPendingScroll] = useState(null);

//   const cardRefs = useRef({});
//   const sectionRefs = useRef({});
//   const justPlacedTimer = useRef(null);

//   const isSolved = useMemo(
//     () => slots.every((tileId, slotIdx) => tileId === slotIdx),
//     [slots]
//   );
//   const correctCount = useMemo(
//     () => slots.filter((tileId, slotIdx) => tileId === slotIdx).length,
//     [slots]
//   );
//   const filterCounts = useMemo(() => {
//     const counts = {};
//     FILTER_DEFS.forEach((f) => {
//       counts[f.id] = DERIVATIVES.filter(f.match).length;
//     });
//     return counts;
//   }, []);

//   useEffect(() => {
//     if (!pendingScroll) return;
//     let el = null;
//     if (pendingScroll.type === 'card') {
//       el = cardRefs.current[pendingScroll.id];
//     } else if (pendingScroll.type === 'section') {
//       el = sectionRefs.current[pendingScroll.id];
//     } else if (pendingScroll.type === 'details') {
//       el = document.getElementById('cdp-cell-details');
//     }
//     if (el) {
//       el.scrollIntoView({
//         behavior: 'smooth',
//         block: pendingScroll.type === 'section' ? 'start' : 'center',
//       });
//     }
//     setPendingScroll(null);
//   }, [pendingScroll]);

//   useEffect(() => {
//     const sections = TOC_ITEMS
//       .map((it) => sectionRefs.current[it.id])
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

//   useEffect(() => {
//     if (openTipId === null) return;
//     const handler = (e) => {
//       if (!e.target.closest('.cdp-popover') &&
//           !e.target.closest('.cdp-help-btn') &&
//           !e.target.closest('.cdp-see-why')) {
//         setOpenTipId(null);
//       }
//     };
//     const onKey = (e) => { if (e.key === 'Escape') setOpenTipId(null); };
//     document.addEventListener('mousedown', handler);
//     document.addEventListener('keydown', onKey);
//     return () => {
//       document.removeEventListener('mousedown', handler);
//       document.removeEventListener('keydown', onKey);
//     };
//   }, [openTipId]);

//   useEffect(() => () => {
//     if (justPlacedTimer.current) clearTimeout(justPlacedTimer.current);
//   }, []);

//   // ===== Auto-scroll viewport during drag =====
//   useEffect(() => {
//     if (draggedFromSlot === null) return;

//     const SCROLL_ZONE = 90;
//     const MAX_SPEED   = 14;
//     let velocity = 0;
//     let rafId = null;

//     const updateVelocity = (clientY) => {
//       const vh = window.innerHeight;
//       if (clientY < SCROLL_ZONE) {
//         const intensity = (SCROLL_ZONE - clientY) / SCROLL_ZONE;
//         velocity = -MAX_SPEED * Math.min(1, Math.max(0, intensity));
//       } else if (clientY > vh - SCROLL_ZONE) {
//         const intensity = (clientY - (vh - SCROLL_ZONE)) / SCROLL_ZONE;
//         velocity = MAX_SPEED * Math.min(1, Math.max(0, intensity));
//       } else {
//         velocity = 0;
//       }
//     };
//     const animate = () => {
//       if (velocity !== 0) window.scrollBy(0, velocity);
//       rafId = requestAnimationFrame(animate);
//     };
//     const onDragOverDoc = (e) => {
//       updateVelocity(e.clientY);
//     };

//     document.addEventListener('dragover', onDragOverDoc);
//     rafId = requestAnimationFrame(animate);

//     return () => {
//       document.removeEventListener('dragover', onDragOverDoc);
//       if (rafId) cancelAnimationFrame(rafId);
//       velocity = 0;
//     };
//   }, [draggedFromSlot]);

//   const setStatus = (kind, icon, content) => {
//     setStatusKind(kind);
//     setStatusIcon(icon);
//     setStatusContent(content);
//   };
//   const hideStatus = () => {
//     setStatusKind(null);
//     setStatusIcon('');
//     setStatusContent(null);
//   };

//   const handleModeChange = (next) => {
//     setMode(next);
//     hideStatus();
//   };

//   const handleViewChange = (next) => {
//     setViewMode(next);
//     setOpenTipId(null);
//     if (next === 'puzzle') {
//       setActiveFilter(null);
//       setHighlightedIds(new Set());
//       setDetailsId(null);
//       hideStatus();
//       if (slots.every((t, i) => t === i)) shufflePuzzle();
//     }
//   };

//   const runFind = (query, type) => {
//     if (!query.trim()) {
//       setStatus('error', '!', 'Please enter something to search.');
//       return;
//     }
//     if (viewMode === 'puzzle') setViewMode('reference');
//     setActiveFilter(null);
//     setDetailsId(null);
//     const matches = type === 'byF'
//       ? matchAgainst(query, 'fx', 'fxAlt')
//       : matchAgainst(query, 'dfx', 'dfxAlt');
//     setHighlightedIds(new Set(matches.map((d) => d.id)));
//     if (matches.length === 0) {
//       setStatus('info', '\u2211',
//         processContent(`No entries match **${query}**. Try another expression.`));
//     } else if (matches.length === 1) {
//       const d = matches[0];
//       setStatus('success', '\u2713',
//         processContent(`Found: **$\\frac{d}{dx}[${d.fx}] = ${d.dfx}$**. Card highlighted below.`));
//       setPendingScroll({ type: 'card', id: d.id });
//     } else {
//       setStatus('success', '\u2211',
//         processContent(`**${matches.length}** matches highlighted below.`));
//       setPendingScroll({ type: 'section', id: 'sec-table' });
//     }
//   };

//   const toggleFilter = (id) => {
//     setHighlightedIds(new Set());
//     setDetailsId(null);
//     if (activeFilter === id) {
//       setActiveFilter(null);
//       hideStatus();
//     } else {
//       setActiveFilter(id);
//       hideStatus();
//       setPendingScroll({ type: 'section', id: 'sec-table' });
//     }
//   };
//   const handleClearHighlights = () => {
//     setActiveFilter(null);
//     setHighlightedIds(new Set());
//     setDetailsId(null);
//     hideStatus();
//   };

//   const handleCardClick = (id) => {
//     setDetailsId(id);
//     setHighlightedIds(new Set([id]));
//     setActiveFilter(null);
//     setPendingScroll({ type: 'details' });
//   };

//   const shufflePuzzle = () => {
//     const ids = DERIVATIVES.map((d) => d.id);
//     for (let i = ids.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [ids[i], ids[j]] = [ids[j], ids[i]];
//     }
//     setSlots(ids);
//     setOpenTipId(null);
//     setJustPlacedId(null);
//     setDraggedFromSlot(null);
//     setDragOverSlot(null);
//     const initialCorrect = new Set();
//     ids.forEach((tid, sidx) => { if (tid === sidx) initialCorrect.add(tid); });
//     setPrevCorrect(initialCorrect);
//   };

//   // ===== Drag handlers — guard against starting drag from a button =====
//   const handleDragStart = (e, slotIdx) => {
//     // If user grabbed a button inside the tile, cancel the drag
//     if (e.target.closest && e.target.closest('.cdp-help-btn, .cdp-see-why')) {
//       e.preventDefault();
//       return;
//     }
//     if (slots[slotIdx] === slotIdx) return;
//     setDraggedFromSlot(slotIdx);
//     e.dataTransfer.effectAllowed = 'move';
//     setOpenTipId(null);
//   };
//   const handleDragEnd = () => {
//     setDraggedFromSlot(null);
//     setDragOverSlot(null);
//   };
//   const handleDragOver = (e, slotIdx) => {
//     if (draggedFromSlot === null) return;
//     if (slots[slotIdx] === slotIdx) return;
//     e.preventDefault();
//     e.dataTransfer.dropEffect = 'move';
//     if (dragOverSlot !== slotIdx) setDragOverSlot(slotIdx);
//   };
//   const handleDragLeave = (slotIdx) => {
//     if (dragOverSlot === slotIdx) setDragOverSlot(null);
//   };
//   const handleDrop = (e, slotIdx) => {
//     e.preventDefault();
//     setDragOverSlot(null);
//     if (draggedFromSlot === null) return;
//     if (slotIdx === draggedFromSlot) return;
//     if (slots[slotIdx] === slotIdx) return;
//     const newSlots = [...slots];
//     const tmp = newSlots[draggedFromSlot];
//     newSlots[draggedFromSlot] = newSlots[slotIdx];
//     newSlots[slotIdx] = tmp;
//     const movedTileId = newSlots[slotIdx];
//     const becameCorrect = (movedTileId === slotIdx) && !prevCorrect.has(movedTileId);
//     const newCorrect = new Set();
//     newSlots.forEach((tid, sidx) => { if (tid === sidx) newCorrect.add(tid); });
//     setSlots(newSlots);
//     setPrevCorrect(newCorrect);
//     setDraggedFromSlot(null);
//     if (becameCorrect) {
//       setJustPlacedId(movedTileId);
//       if (justPlacedTimer.current) clearTimeout(justPlacedTimer.current);
//       justPlacedTimer.current = setTimeout(() => {
//         setJustPlacedId(null);
//         justPlacedTimer.current = null;
//       }, 700);
//     }
//   };
//   const handleTipToggle = (tileId) => {
//     setOpenTipId(openTipId === tileId ? null : tileId);
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
//     bannerText = `Filtering: ${def.title} \u2014 ${filterCounts[def.id]} match${filterCounts[def.id] === 1 ? '' : 'es'} highlighted`;
//   } else if (highlightedIds.size > 0) {
//     bannerText = `${highlightedIds.size} entr${highlightedIds.size === 1 ? 'y' : 'ies'} highlighted by tool`;
//   }
//   const showBanner = (activeFilter !== null || highlightedIds.size > 0) && viewMode === 'reference';

//   const statusIconBg = ({
//     success: C.success, error: C.error, info: C.primary,
//   })[statusKind] || C.primary;

//   const renderCard = (d) => {
//     const cls = ['cdp-deriv-card'];
//     if (highlightedIds.has(d.id)) cls.push('highlight');
//     if (activeFilter) {
//       const def = FILTER_DEFS.find((f) => f.id === activeFilter);
//       if (def.match(d)) cls.push('filter-match');
//       else cls.push('filter-dim');
//     }
//     const cat = CATEGORIES[d.cat];
//     return (
//       <div
//         key={d.id}
//         ref={(el) => { cardRefs.current[d.id] = el; }}
//         className={cls.join(' ')}
//         style={S.derivCard}
//         onClick={() => handleCardClick(d.id)}
//       >
//         <span style={{ ...S.catBadge, background: cat.bg, color: cat.fg }}>
//           {cat.label}
//         </span>
//         <div style={S.derivFormula}>
//           {processContent(`$\\frac{d}{dx}\\!\\left[${d.fx}\\right]$`)}
//         </div>
//         <div style={S.derivArrow}>&darr;</div>
//         <div style={S.derivResult}>
//           {processContent(`$${d.dfx}$`)}
//         </div>
//       </div>
//     );
//   };

//   const detailsDeriv = detailsId !== null ? DERIVATIVES.find((d) => d.id === detailsId) : null;
//   const detailsCat = detailsDeriv ? CATEGORIES[detailsDeriv.cat] : null;

//   const renderPuzzlePair = (tileId, slotIdx) => {
//     const correctDeriv = DERIVATIVES[slotIdx];
//     const tile = DERIVATIVES[tileId];
//     const correct = tileId === slotIdx;
//     const justPlaced = correct && justPlacedId === tileId;
//     const dragging = draggedFromSlot === slotIdx;
//     const dragOver = dragOverSlot === slotIdx;
//     const tipOpen = openTipId === tileId;

//     const tileCls = ['cdp-puzzle-tile'];
//     if (correct) tileCls.push('correct');
//     if (justPlaced) tileCls.push('just-placed');
//     if (dragging) tileCls.push('dragging');

//     const slotCls = ['cdp-puzzle-slot'];
//     if (dragOver) slotCls.push('drag-over');

//     return (
//       <div key={slotIdx} className="cdp-puzzle-pair" style={S.puzzlePair}>
//         <div className="cdp-puzzle-lhs" style={S.puzzleLhs}>
//           {processContent(`$\\frac{d}{dx}\\!\\left[${correctDeriv.fx}\\right]$`)}
//         </div>
//         <div className="cdp-puzzle-equals" style={S.puzzleEquals}>=</div>
//         <div
//           className={slotCls.join(' ')}
//           style={S.puzzleSlot}
//           data-slot={slotIdx}
//           onDragOver={(e) => handleDragOver(e, slotIdx)}
//           onDragLeave={() => handleDragLeave(slotIdx)}
//           onDrop={(e) => handleDrop(e, slotIdx)}
//         >
//           <div
//             className={tileCls.join(' ')}
//             style={S.puzzleTileBase}
//             draggable={!correct}
//             onDragStart={(e) => handleDragStart(e, slotIdx)}
//             onDragEnd={handleDragEnd}
//           >
//             {!correct && tile.tip && (
//               <button
//                 type="button"
//                 className="cdp-help-btn"
//                 title="Get a hint"
//                 draggable={false}
//                 onMouseDown={(e) => e.stopPropagation()}
//                 onPointerDown={(e) => e.stopPropagation()}
//                 onDragStart={(e) => e.preventDefault()}
//                 onClick={(e) => { e.stopPropagation(); handleTipToggle(tile.id); }}
//               >
//                 ?
//               </button>
//             )}
//             <span>{processContent(`$${tile.dfx}$`)}</span>
//             {correct && (
//               <div className="cdp-tile-strip">
//                 <span>&#10003; In place</span>
//                 {tile.tip && (
//                   <>
//                     <span style={{ opacity: 0.6 }}>&mdash;</span>
//                     <button
//                       type="button"
//                       className="cdp-see-why"
//                       title="See why"
//                       draggable={false}
//                       onMouseDown={(e) => e.stopPropagation()}
//                       onClick={(e) => { e.stopPropagation(); handleTipToggle(tile.id); }}
//                     >
//                       see why
//                     </button>
//                   </>
//                 )}
//               </div>
//             )}
//             {tipOpen && tile.tip && (
//               <div className="cdp-popover" onMouseDown={(e) => e.stopPropagation()}>
//                 <button
//                   type="button"
//                   className="cdp-popover-close"
//                   onClick={(e) => { e.stopPropagation(); setOpenTipId(null); }}
//                   aria-label="Close"
//                 >
//                   &times;
//                 </button>
//                 <div>{processContent(tile.tip)}</div>
//                 {tile.link && (
//                   <a href={tile.link} target="_blank" rel="noopener noreferrer">
//                     Learn more &rarr;
//                   </a>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const modeTabs = [
//     { id: 'byF',  label: 'Find by f(x)' },
//     { id: 'byDF', label: <>Find by f&apos;(x)</> },
//   ];

//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: CSS }} />
//       <div style={S.container}>

//         <p style={S.pageIntro}>
//           Reference table of the most-used derivative identities. Try
//           {' '}<strong>puzzle</strong> mode to drill, or read the full{' '}
//           <a href={articleHref} style={S.pageIntroLink}>derivatives explanation &rarr;</a>
//         </p>

//         <div className="cdp-layout" style={S.pageLayout}>

//           <aside className="cdp-sidebar" style={S.sidebar}>
//             <div className="cdp-sidebar-sticky" style={S.sidebarSticky}>
//               <div style={S.sidebarBlock}>
//                 <div style={S.sidebarLabel}>On this page</div>
//                 <ul style={S.tocList}>
//                   {TOC_ITEMS.map((item, idx) => (
//                     <li key={item.id}>
//                       <a
//                         className={`cdp-toc-link ${activeSection === item.id ? 'active' : ''}`}
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
//                       className="cdp-related-mini"
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

//           <div style={S.mainCol}>

//             <section
//               id="sec-tool"
//               ref={(el) => { sectionRefs.current['sec-tool'] = el; }}
//               style={S.toolSection}
//             >
//               <h2 style={S.toolH2}>Derivative Tool</h2>
//               <p style={S.toolSub}>Every answer takes you to the table. Pick a question:</p>

//               <div style={S.modeTabsWrap}>
//                 {modeTabs.map((tab) => {
//                   const isActive = mode === tab.id;
//                   return (
//                     <button
//                       key={tab.id}
//                       type="button"
//                       className={`cdp-mode-tab ${isActive ? 'active' : ''}`}
//                       style={{ ...S.modeTabBase, ...(isActive ? S.modeTabActive : {}) }}
//                       onClick={() => handleModeChange(tab.id)}
//                     >
//                       {tab.label}
//                     </button>
//                   );
//                 })}
//               </div>

//               {mode === 'byF' && (
//                 <div className="cdp-input-block" style={S.inputBlock}>
//                   <input
//                     type="text"
//                     className="cdp-input-field"
//                     style={S.inputField}
//                     placeholder="Enter f(x) (e.g., sin, ln, tanh, arcsin)"
//                     value={fInput}
//                     onChange={(e) => setFInput(e.target.value)}
//                     onKeyDown={(e) => { if (e.key === 'Enter') runFind(fInput, 'byF'); }}
//                   />
//                   <button
//                     type="button"
//                     className="cdp-input-btn"
//                     style={S.inputBtn}
//                     onClick={() => runFind(fInput, 'byF')}
//                   >
//                     Find
//                   </button>
//                 </div>
//               )}

//               {mode === 'byDF' && (
//                 <div className="cdp-input-block" style={S.inputBlock}>
//                   <input
//                     type="text"
//                     className="cdp-input-field"
//                     style={S.inputField}
//                     placeholder="Enter f&apos;(x) (e.g., cos, 1/x, sech^2)"
//                     value={dfInput}
//                     onChange={(e) => setDfInput(e.target.value)}
//                     onKeyDown={(e) => { if (e.key === 'Enter') runFind(dfInput, 'byDF'); }}
//                   />
//                   <button
//                     type="button"
//                     className="cdp-input-btn"
//                     style={S.inputBtn}
//                     onClick={() => runFind(dfInput, 'byDF')}
//                   >
//                     Find
//                   </button>
//                 </div>
//               )}

//               {statusKind && (
//                 <div style={S.toolStatus}>
//                   <span style={{ ...S.statusIcon, background: statusIconBg }}>{statusIcon}</span>
//                   <span>{statusContent}</span>
//                 </div>
//               )}
//             </section>

//             <section
//               id="sec-table"
//               ref={(el) => { sectionRefs.current['sec-table'] = el; }}
//             >
//               <div style={S.legend}>
//                 <div style={S.legendLeft}>
//                   <div style={S.legendTitle}>View</div>
//                   <p style={S.legendNote}>
//                     {viewMode === 'reference'
//                       ? 'Reference mode: browse every common derivative, click any card for the proof link.'
//                       : 'Puzzle mode: drag tiles into the matching slot. The page auto-scrolls when you drag near the edge.'}
//                   </p>
//                 </div>
//                 <div style={S.viewToggle}>
//                   {['reference', 'puzzle'].map((v) => {
//                     const isActive = viewMode === v;
//                     return (
//                       <button
//                         key={v}
//                         type="button"
//                         className={`cdp-view-btn ${isActive ? 'active' : ''}`}
//                         style={{ ...S.viewBtnBase, ...(isActive ? S.viewBtnActive : {}) }}
//                         onClick={() => handleViewChange(v)}
//                       >
//                         {v === 'reference' ? 'Reference' : 'Puzzle'}
//                       </button>
//                     );
//                   })}
//                 </div>
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

//               {viewMode === 'reference' && (
//                 <>
//                   <div className="cdp-ref-grid" style={S.refGrid}>
//                     {DERIVATIVES.map(renderCard)}
//                   </div>

//                   {detailsDeriv && (
//                     <div
//                       id="cdp-cell-details"
//                       className="cdp-cell-details"
//                       style={S.cellDetails}
//                     >
//                       <button
//                         type="button"
//                         className="cdp-close-details"
//                         style={S.closeDetails}
//                         onClick={() => setDetailsId(null)}
//                       >
//                         &times;
//                       </button>
//                       <h3 style={S.detailsH3}>
//                         {processContent(`$\\frac{d}{dx}\\!\\left[${detailsDeriv.fx}\\right] = ${detailsDeriv.dfx}$`)}
//                       </h3>
//                       <div style={S.detailsTip}>
//                         {processContent(detailsDeriv.tip)}
//                       </div>
//                       <div style={S.detailsGrid}>
//                         <div style={S.detailItem}>
//                           <div style={S.detailLabel}>f(x)</div>
//                           <div style={S.detailValue}>
//                             {processContent(`$${detailsDeriv.fx}$`)}
//                           </div>
//                         </div>
//                         <div style={S.detailItem}>
//                           <div style={S.detailLabel}>f&prime;(x)</div>
//                           <div style={S.detailValue}>
//                             {processContent(`$${detailsDeriv.dfx}$`)}
//                           </div>
//                         </div>
//                         <div style={S.detailItem}>
//                           <div style={S.detailLabel}>Category</div>
//                           <div style={S.detailValue}>{detailsCat.label}</div>
//                         </div>
//                       </div>
//                       <a
//                         className="cdp-learn-more"
//                         style={S.learnMore}
//                         href={detailsDeriv.link}
//                       >
//                         Read the full derivation &rarr;
//                       </a>
//                     </div>
//                   )}
//                 </>
//               )}

//               {viewMode === 'puzzle' && (
//                 <>
//                   <div style={S.puzzleControls}>
//                     <button
//                       type="button"
//                       className="cdp-puzzle-btn"
//                       style={S.puzzleBtn}
//                       onClick={shufflePuzzle}
//                     >
//                       Shuffle
//                     </button>
//                     <span style={S.puzzleProgress}>
//                       {isSolved ? (
//                         <>
//                           <strong style={{ color: C.primaryDark }}>&#10003; Solved!</strong>{' '}
//                           All {DERIVATIVES.length} derivatives matched.{' '}
//                           <a
//                             className="cdp-back-to-ref"
//                             style={S.backToRef}
//                             onClick={(e) => { e.preventDefault(); handleViewChange('reference'); }}
//                           >
//                             Back to reference view
//                           </a>
//                         </>
//                       ) : (
//                         <>
//                           <strong style={{ color: C.primaryDark }}>{correctCount}</strong>
//                           {' '}/ {DERIVATIVES.length} in place
//                         </>
//                       )}
//                     </span>
//                   </div>
//                   <div
//                     className={`cdp-puzzle-board ${isSolved ? 'solved' : ''}`}
//                     style={S.puzzleBoard}
//                   >
//                     {slots.map(renderPuzzlePair)}
//                   </div>
//                 </>
//               )}
//             </section>

//             <section
//               id="sec-patterns"
//               ref={(el) => { sectionRefs.current['sec-patterns'] = el; }}
//             >
//               <h2 style={S.sectionH}>Categories</h2>
//               <p style={S.sectionSub}>Click a card to highlight matching entries in the table above.</p>

//               {viewMode === 'puzzle' && (
//                 <div style={S.filtersDisabledNote}>
//                   Filters are available in <strong>Reference</strong> view.
//                 </div>
//               )}

//               <div style={S.filterGrid}>
//                 {FILTER_DEFS.map((f) => {
//                   const isActive = activeFilter === f.id;
//                   const disabled = viewMode === 'puzzle';
//                   const cls = ['cdp-filter-card'];
//                   if (isActive) cls.push('active');
//                   if (disabled) cls.push('disabled');
//                   return (
//                     <div
//                       key={f.id}
//                       className={cls.join(' ')}
//                       style={S.filterCard}
//                       onClick={() => !disabled && toggleFilter(f.id)}
//                     >
//                       <div className="cdp-filter-icon" style={S.filterIcon}>
//                         {f.icon}
//                       </div>
//                       <h3 style={S.filterCardH3}>{f.title}</h3>
//                       <p style={S.filterCardP}>{processContent(f.desc)}</p>
//                       <div style={S.filterCardFooter}>
//                         <span className="cdp-filter-count" style={S.filterCount}>
//                           {filterCounts[f.id]} match{filterCounts[f.id] === 1 ? '' : 'es'}
//                         </span>
//                         <span className="cdp-filter-action" style={S.filterAction}>
//                           Click to highlight
//                         </span>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </section>

//             <section
//               id="sec-properties"
//               ref={(el) => { sectionRefs.current['sec-properties'] = el; }}
//               style={S.propertiesSection}
//             >
//               <h2 style={S.sectionH}>Differentiation rules</h2>
//               <p style={S.sectionSub}>The four structural rules that combine and extend the identities above.</p>
//               <div style={S.propertyGrid}>
//                 {PROPERTY_CARDS.map((card, i) => (
//                   <div key={i} style={S.propertyCard}>
//                     <div style={S.propertyCardIcon}>{card.icon}</div>
//                     <h4 style={S.propertyCardH4}>{card.title}</h4>
//                     <p style={S.propertyCardP}>{processContent(card.body)}</p>
//                     {card.example && (
//                       <div style={S.propertyCardExample}>
//                         {processContent(card.example)}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </section>

//             <section
//               id="sec-quiz"
//               ref={(el) => { sectionRefs.current['sec-quiz'] = el; }}
//               style={S.quizSection}
//             >
//               <QuizWidget
//                 generator={generateDerivativeQuestion}
//                 title="Test yourself"
//                 subtitle="Three question types, rotated at random."
//                 allowReset={true}
//                 historyLimit={30}
//               />
//             </section>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CommonDerivativesPage;


'use client';
import { useState, useEffect, useMemo, useRef } from 'react';
import { processContent } from '../../../utils/contentProcessor';
import QuizWidget from '../../examples/quiz/QuizWidget';
import generateDerivativeQuestion from '../../examples/quiz/questions/commonDerivativesQuestions';
import DerivativesPuzzle from './DerivativesPuzzle';

const C = {
  primary:      '#4f46e5',
  primaryDark:  '#3730a3',
  primaryLight: '#eef2ff',
  bg:           '#fafbff',
  border:       '#e0e7ff',
  borderSoft:   '#eef0f7',
  cardBorder:   '#c7d2fe',
  text:         '#1e1b4b',
  textMuted:    '#64748b',
  success:      '#10b981',
  error:        '#ef4444',
  errorBg:      '#fee2e2',
  errorText:    '#991b1b',
  warn:         '#f59e0b',
  warnBg:       '#fef3c7',
  warnText:     '#92400e',
  shadowSm:     '0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)',
  shadowMd:     '0 4px 12px rgba(15,23,42,0.08)',

  catPolyBg:    '#dbeafe', catPolyFg: '#1e40af',
  catExpBg:     '#ede9fe', catExpFg:  '#5b21b6',
  catTrigBg:    '#d1fae5', catTrigFg: '#065f46',
  catInvBg:     '#ffe4e6', catInvFg:  '#9f1239',
  catHypBg:     '#ffedd5', catHypFg:  '#9a3412',
  catIHypBg:    '#cffafe', catIHypFg: '#155e75',
};

const DERIVATIVES = [
  { id: 0,  fx: 'c',                dfx: '0',
    cat: 'polynomial',
    fxAlt: ['constant'], dfxAlt: ['zero'],
    tip:  'The derivative of any constant is zero — constants don&apos;t change with $x$.',
    link: '/calculus/derivatives/constant-rule' },
  { id: 1,  fx: 'x',                dfx: '1',
    cat: 'polynomial',
    fxAlt: ['identity'], dfxAlt: ['one'],
    tip:  'The identity function changes at a constant rate of 1.',
    link: '/calculus/derivatives/identity' },
  { id: 2,  fx: 'x^n',              dfx: 'nx^{n-1}',
    cat: 'polynomial',
    fxAlt: ['power', 'xn'], dfxAlt: ['nxn-1'],
    tip:  'The power rule: bring the exponent down as a coefficient, then subtract one from the exponent.',
    link: '/calculus/derivatives/power-rule' },
  { id: 3,  fx: '\\frac{1}{x}',     dfx: '-\\frac{1}{x^2}',
    cat: 'polynomial',
    fxAlt: ['1/x', 'reciprocal'], dfxAlt: ['-1/x^2', '-1/x2'],
    tip:  'Rewrite $\\frac{1}{x}$ as $x^{-1}$, then apply the power rule: $-1 \\cdot x^{-2} = -\\frac{1}{x^2}$.',
    link: '/calculus/derivatives/reciprocal' },
  { id: 4,  fx: '\\sqrt{x}',        dfx: '\\frac{1}{2\\sqrt{x}}',
    cat: 'polynomial',
    fxAlt: ['sqrt', 'root', 'square root'], dfxAlt: ['1/(2sqrt(x))'],
    tip:  '$\\sqrt{x} = x^{1/2}$. Power rule: $(1/2) \\cdot x^{-1/2} = \\frac{1}{2\\sqrt{x}}$. Defined for $x > 0$.',
    link: '/calculus/derivatives/square-root' },

  { id: 5,  fx: 'e^x',              dfx: 'e^x',
    cat: 'exp',
    fxAlt: ['exp', 'ex'], dfxAlt: ['exp', 'ex'],
    tip:  'The natural exponential is its own derivative — the defining property of $e$.',
    link: '/calculus/derivatives/exponential' },
  { id: 6,  fx: 'a^x',              dfx: 'a^x \\ln(a)',
    cat: 'exp',
    fxAlt: ['ax', 'general exponential'], dfxAlt: ['ax ln', 'a^x ln(a)'],
    tip:  'General exponential rule. When $a = e$, $\\ln(a) = 1$, recovering $\\frac{d}{dx}[e^x] = e^x$.',
    link: '/calculus/derivatives/general-exponential' },
  { id: 7,  fx: '\\ln(x)',          dfx: '\\frac{1}{x}',
    cat: 'exp',
    fxAlt: ['ln', 'natural log'], dfxAlt: ['1/x'],
    tip:  'The derivative of the natural logarithm is the reciprocal of its argument. Defined for $x > 0$.',
    link: '/calculus/derivatives/logarithm' },
  { id: 8,  fx: '\\log_a(x)',       dfx: '\\frac{1}{x \\ln(a)}',
    cat: 'exp',
    fxAlt: ['log a', 'general log'], dfxAlt: ['1/(x ln a)'],
    tip:  'General logarithm. Change-of-base gives $\\log_a(x) = \\ln(x)/\\ln(a)$, so the derivative is $\\frac{1}{x \\ln(a)}$.',
    link: '/calculus/derivatives/general-logarithm' },

  { id: 9,  fx: '\\sin(x)',         dfx: '\\cos(x)',
    cat: 'trig',
    fxAlt: ['sine'], dfxAlt: ['cosine'],
    tip:  'The classic trig derivative. Cosine is the rate of change of sine.',
    link: '/calculus/derivatives/sine' },
  { id: 10, fx: '\\cos(x)',         dfx: '-\\sin(x)',
    cat: 'trig',
    fxAlt: ['cosine'], dfxAlt: ['negative sine', '-sin'],
    tip:  'Cosine&apos;s derivative is negative sine — the sign flip reflects the 90° phase shift between the two.',
    link: '/calculus/derivatives/cosine' },
  { id: 11, fx: '\\tan(x)',         dfx: '\\sec^2(x)',
    cat: 'trig',
    fxAlt: ['tangent'], dfxAlt: ['sec squared', 'sec^2'],
    tip:  'Derived from the quotient rule on $\\sin / \\cos$: $\\frac{\\cos^2 + \\sin^2}{\\cos^2} = \\frac{1}{\\cos^2} = \\sec^2$.',
    link: '/calculus/derivatives/tangent' },
  { id: 12, fx: '\\cot(x)',         dfx: '-\\csc^2(x)',
    cat: 'trig',
    fxAlt: ['cotangent'], dfxAlt: ['negative csc squared', '-csc^2'],
    tip:  'Sister identity to $\\tan$. The negative sign and the $\\csc$-vs-$\\sec$ swap reflect the symmetry between $\\tan/\\cot$ and $\\sin/\\cos$.',
    link: '/calculus/derivatives/cotangent' },
  { id: 13, fx: '\\sec(x)',         dfx: '\\sec(x)\\tan(x)',
    cat: 'trig',
    fxAlt: ['secant'], dfxAlt: ['sec tan'],
    tip:  'From the chain rule on $(\\cos x)^{-1}$. Memorable because the result keeps both $\\sec$ and $\\tan$.',
    link: '/calculus/derivatives/secant' },
  { id: 14, fx: '\\csc(x)',         dfx: '-\\csc(x)\\cot(x)',
    cat: 'trig',
    fxAlt: ['cosecant'], dfxAlt: ['negative csc cot', '-csc cot'],
    tip:  'Sister to $\\sec$. Like $\\sec$, the result is a product — but with a negative sign, mirroring the $\\cos$ vs $\\sin$ asymmetry.',
    link: '/calculus/derivatives/cosecant' },

  { id: 15, fx: '\\arcsin(x)',      dfx: '\\frac{1}{\\sqrt{1-x^2}}',
    cat: 'inverse',
    fxAlt: ['arcsine', 'inverse sine'], dfxAlt: ['1/sqrt(1-x^2)'],
    tip:  'Inverse function derivative formula. Defined for $|x| < 1$.',
    link: '/calculus/derivatives/arcsine' },
  { id: 16, fx: '\\arccos(x)',      dfx: '-\\frac{1}{\\sqrt{1-x^2}}',
    cat: 'inverse',
    fxAlt: ['arccosine', 'inverse cosine'], dfxAlt: ['-1/sqrt(1-x^2)'],
    tip:  'Sign-flipped twin of $\\arcsin$. Since $\\arcsin(x) + \\arccos(x) = \\pi/2$ is constant, their derivatives cancel.',
    link: '/calculus/derivatives/arccosine' },
  { id: 17, fx: '\\arctan(x)',      dfx: '\\frac{1}{1+x^2}',
    cat: 'inverse',
    fxAlt: ['arctangent', 'inverse tan'], dfxAlt: ['1/(1+x^2)'],
    tip:  'A beautiful derivative — rational, defined for all real $x$, central to many integration tricks.',
    link: '/calculus/derivatives/arctangent' },
  { id: 18, fx: '\\operatorname{arccot}(x)',  dfx: '-\\frac{1}{1+x^2}',
    cat: 'inverse',
    fxAlt: ['arccotangent', 'inverse cot'], dfxAlt: ['-1/(1+x^2)'],
    tip:  'Sign-flipped twin of $\\arctan$. Like arcsin/arccos, $\\arctan(x) + \\operatorname{arccot}(x) = \\pi/2$.',
    link: '/calculus/derivatives/arccotangent' },
  { id: 19, fx: '\\operatorname{arcsec}(x)',  dfx: '\\frac{1}{|x|\\sqrt{x^2-1}}',
    cat: 'inverse',
    fxAlt: ['arcsecant', 'inverse sec'], dfxAlt: ['1/(|x|sqrt(x^2-1))'],
    tip:  'Defined for $|x| \\geq 1$. The absolute value keeps the derivative positive on both branches.',
    link: '/calculus/derivatives/arcsecant' },
  { id: 20, fx: '\\operatorname{arccsc}(x)',  dfx: '-\\frac{1}{|x|\\sqrt{x^2-1}}',
    cat: 'inverse',
    fxAlt: ['arccosecant', 'inverse csc'], dfxAlt: ['-1/(|x|sqrt(x^2-1))'],
    tip:  'Sign-flipped twin of $\\operatorname{arcsec}$, just as arccos is to arcsin.',
    link: '/calculus/derivatives/arccosecant' },

  { id: 21, fx: '\\sinh(x)',        dfx: '\\cosh(x)',
    cat: 'hyperbolic',
    fxAlt: ['hyperbolic sine'], dfxAlt: ['hyperbolic cosine'],
    tip:  'Hyperbolic analog of $\\sin \\to \\cos$. No sign flips — $\\cosh$ relates to $\\sinh$ as $\\cos$ does to $\\sin$, but without the negative.',
    link: '/calculus/derivatives/sinh' },
  { id: 22, fx: '\\cosh(x)',        dfx: '\\sinh(x)',
    cat: 'hyperbolic',
    fxAlt: ['hyperbolic cosine'], dfxAlt: ['hyperbolic sine'],
    tip:  'Hyperbolic cosine differentiates to $\\sinh$ — no negative sign, unlike the trig version.',
    link: '/calculus/derivatives/cosh' },
  { id: 23, fx: '\\tanh(x)',        dfx: '\\operatorname{sech}^2(x)',
    cat: 'hyperbolic',
    fxAlt: ['hyperbolic tangent'], dfxAlt: ['sech squared', 'sech^2'],
    tip:  'Direct analog of $\\frac{d}{dx}[\\tan(x)] = \\sec^2(x)$, with hyperbolic functions in place of trig.',
    link: '/calculus/derivatives/tanh' },
  { id: 24, fx: '\\coth(x)',        dfx: '-\\operatorname{csch}^2(x)',
    cat: 'hyperbolic',
    fxAlt: ['hyperbolic cotangent'], dfxAlt: ['negative csch squared'],
    tip:  'Hyperbolic analog of $\\cot$. The negative sign matches the trig case.',
    link: '/calculus/derivatives/coth' },
  { id: 25, fx: '\\operatorname{sech}(x)',  dfx: '-\\operatorname{sech}(x)\\tanh(x)',
    cat: 'hyperbolic',
    fxAlt: ['hyperbolic secant'], dfxAlt: ['negative sech tanh'],
    tip:  'Hyperbolic analog of $\\sec$, but with a negative sign — opposite of the trig version.',
    link: '/calculus/derivatives/sech' },
  { id: 26, fx: '\\operatorname{csch}(x)',  dfx: '-\\operatorname{csch}(x)\\coth(x)',
    cat: 'hyperbolic',
    fxAlt: ['hyperbolic cosecant'], dfxAlt: ['negative csch coth'],
    tip:  'Hyperbolic analog of $\\csc$. Like $\\csc$, the result is a product, and the sign also matches.',
    link: '/calculus/derivatives/csch' },

  { id: 27, fx: '\\operatorname{arcsinh}(x)',  dfx: '\\frac{1}{\\sqrt{x^2+1}}',
    cat: 'inverseHyperbolic',
    fxAlt: ['arc sinh', 'inverse hyperbolic sine'], dfxAlt: ['1/sqrt(x^2+1)'],
    tip:  'Note the $+1$ inside the radical (vs $-1$ for $\\arcsin$). Defined for all real $x$.',
    link: '/calculus/derivatives/arcsinh' },
  { id: 28, fx: '\\operatorname{arccosh}(x)',  dfx: '\\frac{1}{\\sqrt{x^2-1}}',
    cat: 'inverseHyperbolic',
    fxAlt: ['arc cosh', 'inverse hyperbolic cosine'], dfxAlt: ['1/sqrt(x^2-1)'],
    tip:  'Defined for $x > 1$. The radical is $x^2 - 1$, the reverse of $\\arcsin$&apos;s domain.',
    link: '/calculus/derivatives/arccosh' },
  { id: 29, fx: '\\operatorname{arctanh}(x)',  dfx: '\\frac{1}{1-x^2}',
    cat: 'inverseHyperbolic',
    fxAlt: ['arc tanh', 'inverse hyperbolic tangent'], dfxAlt: ['1/(1-x^2)'],
    tip:  'Defined for $|x| < 1$. Same denominator structure as $\\arctan$, but with subtraction inside.',
    link: '/calculus/derivatives/arctanh' },
];

const CATEGORIES = {
  polynomial:        { label: 'Polynomial',     bg: C.catPolyBg, fg: C.catPolyFg },
  exp:               { label: 'Exp / Log',      bg: C.catExpBg,  fg: C.catExpFg  },
  trig:              { label: 'Trig',           bg: C.catTrigBg, fg: C.catTrigFg },
  inverse:           { label: 'Inverse trig',   bg: C.catInvBg,  fg: C.catInvFg  },
  hyperbolic:        { label: 'Hyperbolic',     bg: C.catHypBg,  fg: C.catHypFg  },
  inverseHyperbolic: { label: 'Inverse hyp.',   bg: C.catIHypBg, fg: C.catIHypFg },
};

const FILTER_DEFS = [
  { id: 'polynomial', icon: 'x^n', title: 'Polynomial',
    desc: 'Constants, powers, roots, and reciprocals.',
    match: (d) => d.cat === 'polynomial' },
  { id: 'exp', icon: 'e^x', title: 'Exponential & log',
    desc: 'Exponentials and logarithms, natural and general.',
    match: (d) => d.cat === 'exp' },
  { id: 'trig', icon: 'sin', title: 'Trigonometric',
    desc: 'All six basic trig functions.',
    match: (d) => d.cat === 'trig' },
  { id: 'inverse', icon: 'sin\u207B\u00B9', title: 'Inverse trig',
    desc: 'Inverse trig: $\\arcsin$ through $\\operatorname{arccsc}$.',
    match: (d) => d.cat === 'inverse' },
  { id: 'hyperbolic', icon: 'sinh', title: 'Hyperbolic',
    desc: 'Hyperbolic sine, cosine, tan, and their reciprocals.',
    match: (d) => d.cat === 'hyperbolic' },
  { id: 'inverseHyperbolic', icon: 'sinh\u207B\u00B9', title: 'Inverse hyperbolic',
    desc: 'Inverse hyperbolic: $\\operatorname{arcsinh}$, $\\operatorname{arccosh}$, $\\operatorname{arctanh}$.',
    match: (d) => d.cat === 'inverseHyperbolic' },
  { id: 'reciprocal', icon: '1/x', title: 'Reciprocal forms',
    desc: 'Derivatives whose result is a fraction \u2014 a quotient form.',
    match: (d) => /^-?\\frac\{/.test(d.dfx) },
];

const PROPERTY_CARDS = [
  { icon: '\u2295', title: 'Linearity',
    body: 'The derivative of a sum is the sum of derivatives. Constants pull out: $\\frac{d}{dx}[c \\cdot f(x)] = c \\cdot f\'(x)$.',
    example: '$\\frac{d}{dx}[3x^2 + 5x] = 6x + 5$' },
  { icon: '\u00D7', title: 'Product rule',
    body: '$\\frac{d}{dx}[fg] = f\'g + fg\'$. Differentiate one factor, leave the other alone, then sum.',
    example: '$\\frac{d}{dx}[x \\sin(x)] = \\sin(x) + x\\cos(x)$' },
  { icon: '\u00F7', title: 'Quotient rule',
    body: '$\\frac{d}{dx}\\!\\left[\\frac{f}{g}\\right] = \\frac{f\'g - fg\'}{g^2}$. Mnemonic: low d-high minus high d-low, over low squared.',
    example: '$\\frac{d}{dx}\\!\\left[\\frac{\\sin(x)}{x}\\right] = \\frac{x\\cos(x) - \\sin(x)}{x^2}$' },
  { icon: '\u2218', title: 'Chain rule',
    body: '$\\frac{d}{dx}[f(g(x))] = f\'(g(x)) \\cdot g\'(x)$. Differentiate the outside, then multiply by the derivative of the inside.',
    example: '$\\frac{d}{dx}[\\sin(x^2)] = \\cos(x^2) \\cdot 2x$' },
];

const TOC_ITEMS = [
  { id: 'sec-tool',       label: 'Derivative tool' },
  { id: 'sec-table',      label: 'The table' },
  { id: 'sec-patterns',   label: 'Categories' },
  { id: 'sec-properties', label: 'Differentiation rules' },
  { id: 'sec-quiz',       label: 'Test yourself' },
];

function normalize(s) {
  return String(s).toLowerCase()
    .replace(/\\/g, '')
    .replace(/[\s\u00B7]/g, '')
    .replace(/[{}]/g, '')
    .replace(/operatorname/g, '');
}
function matchAgainst(query, key, altKey) {
  const q = normalize(query);
  if (!q) return [];
  return DERIVATIVES.filter((d) => {
    const main = normalize(d[key]);
    const alts = (d[altKey] || []).map(normalize);
    return main.includes(q) || alts.some((a) => a.includes(q));
  });
}
function getResponsiveCols() {
  if (typeof window === 'undefined') return 3;
  const w = window.innerWidth;
  if (w <= 600) return 1;
  if (w <= 900) return 2;
  return 3;
}

const S = {
  container: {
    maxWidth: '1000px', margin: '0 auto', padding: '28px 24px 80px',
    position: 'relative',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    color: C.text,
  },
  pageLayout: { position: 'relative' },
  sidebar: {
    position: 'absolute', top: 0, right: '100%',
    width: '240px', height: '100%', marginRight: '40px',
  },
  sidebarSticky: {
    position: 'sticky', top: '20px',
    maxHeight: 'calc(100vh - 40px)', overflowY: 'auto',
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

  pageIntro: {
    textAlign: 'center', color: C.textMuted, fontSize: '15px',
    margin: '0 auto 32px', maxWidth: '620px',
  },
  pageIntroLink: { color: C.primary, textDecoration: 'none', fontWeight: 600 },

  toolSection: {
    background: 'linear-gradient(135deg, #eef2ff 0%, #f0f9ff 100%)',
    border: `1px solid ${C.border}`, borderRadius: '20px',
    padding: '28px 32px', marginBottom: '36px',
  },
  toolH2: {
    fontFamily: "'Crimson Pro', serif", fontSize: '26px',
    color: C.primaryDark, margin: '0 0 4px', fontWeight: 700,
  },
  toolSub: { color: C.textMuted, fontSize: '14px', margin: '0 0 18px' },
  modeTabsWrap: {
    display: 'inline-flex', background: 'white', borderRadius: '12px',
    padding: '4px', marginBottom: '14px',
    border: `1px solid ${C.border}`, boxShadow: C.shadowSm,
    gap: '2px', flexWrap: 'wrap',
  },
  modeTabBase: {
    padding: '9px 18px', borderRadius: '9px', fontSize: '14px',
    fontWeight: 600, cursor: 'pointer', background: 'transparent',
    border: 'none', transition: 'all 0.18s',
    fontFamily: 'inherit', color: C.textMuted,
  },
  modeTabActive: {
    background: C.primary, color: 'white',
    boxShadow: '0 2px 6px rgba(79,70,229,0.30)',
  },
  inputBlock: {
    display: 'flex', gap: '10px', marginBottom: '8px',
    alignItems: 'center', flexWrap: 'wrap',
  },
  inputField: {
    flex: 1, minWidth: '200px', padding: '13px 18px',
    border: `2px solid ${C.border}`, borderRadius: '11px',
    fontSize: '15px', outline: 'none', background: 'white',
    fontFamily: 'inherit', color: C.text,
    transition: 'border-color 0.15s, box-shadow 0.15s',
  },
  inputBtn: {
    padding: '13px 26px', background: C.primary, color: 'white',
    border: 'none', borderRadius: '11px',
    fontWeight: 600, fontSize: '15px', cursor: 'pointer',
    fontFamily: 'inherit', whiteSpace: 'nowrap',
    transition: 'background 0.15s',
  },
  toolStatus: {
    marginTop: '12px', padding: '11px 14px',
    background: 'rgba(255,255,255,0.75)',
    border: `1px solid ${C.border}`, borderRadius: '10px',
    display: 'flex', alignItems: 'flex-start', gap: '10px',
    fontSize: '14px', color: C.text, lineHeight: 1.55,
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
    display: 'flex', flexWrap: 'wrap', gap: '18px',
    alignItems: 'center', justifyContent: 'space-between',
  },
  legendLeft: { display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '540px' },
  legendTitle: {
    fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px',
    color: C.textMuted, fontWeight: 700,
  },
  legendNote: { fontSize: '14px', color: C.textMuted, margin: 0 },
  viewToggle: {
    display: 'inline-flex', background: C.bg, borderRadius: '10px', padding: '3px',
    border: `1px solid ${C.border}`, gap: '2px',
  },
  viewBtnBase: {
    padding: '7px 16px', borderRadius: '7px',
    fontSize: '13px', fontWeight: 600, cursor: 'pointer',
    background: 'transparent', border: 'none', fontFamily: 'inherit',
    color: C.textMuted, transition: 'all 0.15s',
  },
  viewBtnActive: {
    background: C.primary, color: 'white',
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

  refGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '14px', marginBottom: '36px',
  },
  derivCard: {
    background: 'white',
    border: `1.5px solid ${C.cardBorder}`,
    borderRadius: '12px',
    padding: '18px 14px 14px',
    cursor: 'pointer',
    transition: 'transform 0.15s, box-shadow 0.15s, border-color 0.15s, opacity 0.2s',
    position: 'relative',
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
    boxShadow: C.shadowSm,
  },
  catBadge: {
    position: 'absolute', top: '8px', right: '8px',
    fontSize: '9px', fontWeight: 700, textTransform: 'uppercase',
    letterSpacing: '0.5px', padding: '2px 7px', borderRadius: '4px',
  },
  derivFormula: {
    fontSize: '15px', marginTop: '14px',
    color: C.text, textAlign: 'center', lineHeight: 1.2,
  },
  derivArrow: { color: C.primary, fontSize: '14px', fontWeight: 700 },
  derivResult: {
    fontSize: '18px', fontWeight: 700,
    color: C.primaryDark, textAlign: 'center', lineHeight: 1.2,
  },

  // Inline details panel
  inlineDetails: {
    gridColumn: '1 / -1',
    background: 'linear-gradient(135deg, #f0f9ff 0%, #eef2ff 100%)',
    border: `1.5px solid ${C.primary}`,
    borderRadius: '14px',
    padding: '22px 26px 20px',
    position: 'relative',
    boxShadow: C.shadowMd,
    margin: '4px 0',
  },
  inlineDetailsHeader: {
    display: 'flex', alignItems: 'flex-start',
    justifyContent: 'space-between', gap: '16px',
    marginBottom: '14px',
  },
  inlineDetailsTitle: {
    fontSize: '22px',
    color: C.primaryDark, fontWeight: 700,
    margin: 0, flex: 1, minWidth: 0,
  },
  inlineDetailsClose: {
    display: 'inline-flex', alignItems: 'center', gap: '6px',
    padding: '8px 14px',
    background: 'white', color: C.text,
    border: `1.5px solid ${C.border}`, borderRadius: '10px',
    cursor: 'pointer', fontFamily: 'inherit',
    fontSize: '13px', fontWeight: 600,
    transition: 'all 0.15s',
    boxShadow: C.shadowSm,
    flexShrink: 0,
  },
  inlineDetailsCloseX: { fontSize: '18px', lineHeight: 1, fontWeight: 700 },
  inlineDetailsTip: {
    color: C.text, fontSize: '14px',
    lineHeight: 1.6, marginBottom: '14px',
  },
  inlineDetailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '10px', marginBottom: '14px',
  },
  inlineDetailItem: {
    padding: '10px 14px', background: 'white',
    borderRadius: '8px', border: `1px solid ${C.border}`,
  },
  inlineDetailLabel: {
    fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.8px',
    color: C.textMuted, marginBottom: '4px', fontWeight: 700,
  },
  inlineDetailValue: { fontSize: '15px', fontWeight: 700, color: C.text },
  inlineLearnMore: {
    display: 'inline-block', color: 'white', textDecoration: 'none',
    fontWeight: 600, fontSize: '13px',
    padding: '8px 16px', background: C.primary, borderRadius: '8px',
    transition: 'background 0.15s',
  },

  sectionH: {
    fontFamily: "'Crimson Pro', serif", fontSize: '30px',
    color: '#1e3a8a', fontWeight: 700, letterSpacing: '-0.3px',
    margin: '0 0 8px',
  },
  sectionSub: { color: C.textMuted, marginBottom: '26px', fontSize: '15px' },

  filtersDisabledNote: {
    marginBottom: '16px', padding: '10px 16px',
    background: C.bg, border: `1px dashed ${C.border}`,
    borderRadius: '8px', color: C.textMuted,
    fontSize: '13px', textAlign: 'center',
  },
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
    fontSize: '14px', fontWeight: 700,
    marginBottom: '14px',
    boxShadow: '0 4px 10px rgba(79,70,229,0.25)',
  },
  filterCardH3: { fontSize: '16px', fontWeight: 700, color: C.text, margin: '0 0 6px' },
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
    fontSize: '17px', fontWeight: 700, marginBottom: '12px',
  },
  propertyCardH4: { fontSize: '15px', fontWeight: 700, color: C.text, margin: '0 0 6px' },
  propertyCardP: { color: C.textMuted, fontSize: '13px', lineHeight: 1.6, margin: 0 },
  propertyCardExample: {
    background: C.bg, padding: '10px 14px', borderRadius: '6px',
    fontSize: '14px', marginTop: '10px',
    color: C.primaryDark, textAlign: 'center',
    border: `1px solid ${C.borderSoft}`,
  },
  quizSection: { marginTop: '56px' },
};

const CSS = `
.cdp-toc-link:hover { color: ${C.primary}; }
.cdp-related-mini:hover {
  border-color: ${C.primary} !important;
  transform: translateX(2px);
  box-shadow: ${C.shadowSm};
}
.cdp-input-field:focus {
  border-color: ${C.primary} !important;
  box-shadow: 0 0 0 4px rgba(79,70,229,0.12);
}
.cdp-input-btn:hover { background: ${C.primaryDark} !important; }
.cdp-mode-tab:not(.active):hover { color: ${C.primary} !important; }
.cdp-view-btn:not(.active):hover { color: ${C.primary}; }

.cdp-deriv-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(15,23,42,0.10);
  border-color: ${C.primary};
}
.cdp-deriv-card.active {
  border-color: ${C.primary} !important;
  box-shadow: 0 0 0 3px ${C.primaryLight}, 0 6px 16px rgba(79,70,229,0.18) !important;
  transform: translateY(-2px);
}
.cdp-deriv-card.highlight {
  border-color: ${C.warn} !important;
  box-shadow: 0 0 0 3px rgba(245,158,11,0.35), 0 6px 16px rgba(245,158,11,0.25) !important;
  transform: scale(1.05);
}
.cdp-deriv-card.filter-match {
  border-color: ${C.warn} !important;
  box-shadow: 0 4px 14px rgba(245,158,11,0.35) !important;
  transform: scale(1.04);
}
.cdp-deriv-card.filter-dim { opacity: 0.25; }

.cdp-filter-card:hover {
  transform: translateY(-3px);
  box-shadow: ${C.shadowMd};
  border-color: ${C.border} !important;
}
.cdp-filter-card.active {
  border-color: ${C.warn} !important;
  background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%) !important;
  box-shadow: 0 0 0 4px rgba(245,158,11,0.18), ${C.shadowMd};
}
.cdp-filter-card.active::after {
  content: '\u25CF Active';
  position: absolute; top: 12px; right: 14px;
  font-size: 11px; font-weight: 700;
  color: ${C.warnText}; letter-spacing: 0.5px;
}
.cdp-filter-card.active .cdp-filter-icon {
  background: linear-gradient(135deg, ${C.warn} 0%, #fb923c 100%) !important;
  box-shadow: 0 4px 10px rgba(245,158,11,0.3) !important;
}
.cdp-filter-card.active .cdp-filter-count,
.cdp-filter-card.active .cdp-filter-action {
  color: ${C.warnText} !important;
}
.cdp-filter-card.disabled {
  opacity: 0.5; cursor: not-allowed; pointer-events: none;
}

.cdp-inline-details-close:hover {
  background: ${C.errorBg} !important;
  color: ${C.errorText} !important;
  border-color: ${C.error} !important;
}
.cdp-inline-learn-more:hover { background: ${C.primaryDark} !important; }
@keyframes cdpDetailsExpand {
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
}
.cdp-inline-details { animation: cdpDetailsExpand 0.25s ease; }

.cdp-sidebar-sticky::-webkit-scrollbar { width: 4px; }
.cdp-sidebar-sticky::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 4px; }

@media (max-width: 1320px) {
  .cdp-sidebar { display: none !important; }
}
@media (max-width: 900px) {
  .cdp-ref-grid { grid-template-columns: repeat(2, 1fr) !important; }
}
@media (max-width: 600px) {
  .cdp-ref-grid { grid-template-columns: 1fr !important; }
  .cdp-input-block { flex-direction: column !important; align-items: stretch !important; }
  .cdp-input-block input, .cdp-input-block button { width: 100% !important; }
  .cdp-mode-tab { padding: 9px 14px !important; font-size: 13px !important; }
}
`;

const CommonDerivativesPage = ({ relatedReferences = [], articleHref = '/calculus/derivatives/common' }) => {
  const [viewMode, setViewMode] = useState('reference');
  const [mode, setMode] = useState('byF');
  const [fInput, setFInput] = useState('');
  const [dfInput, setDfInput] = useState('');

  const [statusKind, setStatusKind] = useState(null);
  const [statusIcon, setStatusIcon] = useState('');
  const [statusContent, setStatusContent] = useState(null);

  const [highlightedIds, setHighlightedIds] = useState(() => new Set());
  const [activeFilter, setActiveFilter] = useState(null);
  const [detailsId, setDetailsId] = useState(null);

  const [activeSection, setActiveSection] = useState('sec-tool');
  const [pendingScroll, setPendingScroll] = useState(null);
  const [cols, setCols] = useState(3);

  const cardRefs = useRef({});
  const sectionRefs = useRef({});

  const filterCounts = useMemo(() => {
    const counts = {};
    FILTER_DEFS.forEach((f) => { counts[f.id] = DERIVATIVES.filter(f.match).length; });
    return counts;
  }, []);

  useEffect(() => {
    setCols(getResponsiveCols());
    const onResize = () => setCols(getResponsiveCols());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!pendingScroll) return;
    let el = null;
    if (pendingScroll.type === 'card') el = cardRefs.current[pendingScroll.id];
    else if (pendingScroll.type === 'section') el = sectionRefs.current[pendingScroll.id];
    if (el) el.scrollIntoView({
      behavior: 'smooth',
      block: pendingScroll.type === 'section' ? 'start' : 'center',
    });
    setPendingScroll(null);
  }, [pendingScroll]);

  useEffect(() => {
    const sections = TOC_ITEMS.map((it) => sectionRefs.current[it.id]).filter(Boolean);
    if (sections.length === 0) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
    }, { rootMargin: '-25% 0px -65% 0px' });
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (detailsId === null) return;
    const onKey = (e) => { if (e.key === 'Escape') setDetailsId(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [detailsId]);

  const setStatus = (kind, icon, content) => {
    setStatusKind(kind); setStatusIcon(icon); setStatusContent(content);
  };
  const hideStatus = () => { setStatusKind(null); setStatusIcon(''); setStatusContent(null); };

  const handleModeChange = (next) => { setMode(next); hideStatus(); };

  const handleViewChange = (next) => {
    setViewMode(next);
    if (next === 'puzzle') {
      setActiveFilter(null);
      setHighlightedIds(new Set());
      setDetailsId(null);
      hideStatus();
    }
  };

  const runFind = (query, type) => {
    if (!query.trim()) { setStatus('error', '!', 'Please enter something to search.'); return; }
    if (viewMode === 'puzzle') setViewMode('reference');
    setActiveFilter(null);
    setDetailsId(null);
    const matches = type === 'byF'
      ? matchAgainst(query, 'fx', 'fxAlt')
      : matchAgainst(query, 'dfx', 'dfxAlt');
    setHighlightedIds(new Set(matches.map((d) => d.id)));
    if (matches.length === 0) {
      setStatus('info', '\u2211', processContent(`No entries match **${query}**. Try another expression.`));
    } else if (matches.length === 1) {
      const d = matches[0];
      setStatus('success', '\u2713', processContent(`Found: **$\\frac{d}{dx}[${d.fx}] = ${d.dfx}$**. Card highlighted below.`));
      setPendingScroll({ type: 'card', id: d.id });
    } else {
      setStatus('success', '\u2211', processContent(`**${matches.length}** matches highlighted below.`));
      setPendingScroll({ type: 'section', id: 'sec-table' });
    }
  };

  const toggleFilter = (id) => {
    setHighlightedIds(new Set());
    setDetailsId(null);
    if (activeFilter === id) { setActiveFilter(null); hideStatus(); }
    else { setActiveFilter(id); hideStatus(); setPendingScroll({ type: 'section', id: 'sec-table' }); }
  };
  const handleClearHighlights = () => {
    setActiveFilter(null); setHighlightedIds(new Set()); setDetailsId(null); hideStatus();
  };

  const handleCardClick = (id) => {
    if (detailsId === id) { setDetailsId(null); return; }
    setDetailsId(id);
    setHighlightedIds(new Set([id]));
    setActiveFilter(null);
    setPendingScroll({ type: 'card', id });
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
    if (activeSection === id) { base.background = C.primary; base.color = 'white'; }
    return base;
  };

  let bannerText = '';
  if (activeFilter) {
    const def = FILTER_DEFS.find((f) => f.id === activeFilter);
    bannerText = `Filtering: ${def.title} \u2014 ${filterCounts[def.id]} match${filterCounts[def.id] === 1 ? '' : 'es'} highlighted`;
  } else if (highlightedIds.size > 0) {
    bannerText = `${highlightedIds.size} entr${highlightedIds.size === 1 ? 'y' : 'ies'} highlighted by tool`;
  }
  const showBanner = (activeFilter !== null || highlightedIds.size > 0) && viewMode === 'reference';

  const statusIconBg = ({ success: C.success, error: C.error, info: C.primary })[statusKind] || C.primary;

  const renderCard = (d) => {
    const cls = ['cdp-deriv-card'];
    if (detailsId === d.id) cls.push('active');
    if (highlightedIds.has(d.id)) cls.push('highlight');
    if (activeFilter) {
      const def = FILTER_DEFS.find((f) => f.id === activeFilter);
      if (def.match(d)) cls.push('filter-match');
      else cls.push('filter-dim');
    }
    const cat = CATEGORIES[d.cat];
    return (
      <div
        key={d.id}
        ref={(el) => { cardRefs.current[d.id] = el; }}
        className={cls.join(' ')}
        style={S.derivCard}
        onClick={() => handleCardClick(d.id)}
      >
        <span style={{ ...S.catBadge, background: cat.bg, color: cat.fg }}>{cat.label}</span>
        <div style={S.derivFormula}>
          {processContent(`$\\frac{d}{dx}\\!\\left[${d.fx}\\right]$`)}
        </div>
        <div style={S.derivArrow}>&darr;</div>
        <div style={S.derivResult}>{processContent(`$${d.dfx}$`)}</div>
      </div>
    );
  };

  const renderInlineDetails = (d) => {
    const cat = CATEGORIES[d.cat];
    return (
      <div
        key={`details-${d.id}`}
        className="cdp-inline-details"
        style={S.inlineDetails}
      >
        <div style={S.inlineDetailsHeader}>
          <div style={S.inlineDetailsTitle}>
            {processContent(`$\\frac{d}{dx}\\!\\left[${d.fx}\\right] = ${d.dfx}$`)}
          </div>
          <button
            type="button"
            className="cdp-inline-details-close"
            style={S.inlineDetailsClose}
            onClick={() => setDetailsId(null)}
            title="Close (Esc)"
          >
            <span style={S.inlineDetailsCloseX}>&times;</span>
            <span>Close</span>
          </button>
        </div>
        <div style={S.inlineDetailsTip}>{processContent(d.tip)}</div>
        <div style={S.inlineDetailsGrid}>
          <div style={S.inlineDetailItem}>
            <div style={S.inlineDetailLabel}>f(x)</div>
            <div style={S.inlineDetailValue}>{processContent(`$${d.fx}$`)}</div>
          </div>
          <div style={S.inlineDetailItem}>
            <div style={S.inlineDetailLabel}>f&prime;(x)</div>
            <div style={S.inlineDetailValue}>{processContent(`$${d.dfx}$`)}</div>
          </div>
          <div style={S.inlineDetailItem}>
            <div style={S.inlineDetailLabel}>Category</div>
            <div style={S.inlineDetailValue}>{cat.label}</div>
          </div>
        </div>
        <a
          className="cdp-inline-learn-more"
          style={S.inlineLearnMore}
          href={d.link}
        >
          Read the full derivation &rarr;
        </a>
      </div>
    );
  };

  const renderRefGrid = () => {
    const activeIdx = detailsId !== null
      ? DERIVATIVES.findIndex((dd) => dd.id === detailsId)
      : -1;
    const activeRow = activeIdx >= 0 ? Math.floor(activeIdx / cols) : -1;
    const detailsDeriv = activeIdx >= 0 ? DERIVATIVES[activeIdx] : null;

    return (
      <div className="cdp-ref-grid" style={S.refGrid}>
        {DERIVATIVES.flatMap((d, idx) => {
          const elements = [renderCard(d)];
          if (detailsDeriv) {
            const thisRow = Math.floor(idx / cols);
            const isLastInRow = ((idx + 1) % cols === 0) || (idx === DERIVATIVES.length - 1);
            if (thisRow === activeRow && isLastInRow) {
              elements.push(renderInlineDetails(detailsDeriv));
            }
          }
          return elements;
        })}
      </div>
    );
  };

  const modeTabs = [
    { id: 'byF',  label: 'Find by f(x)' },
    { id: 'byDF', label: <>Find by f&apos;(x)</> },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div style={S.container}>
        <p style={S.pageIntro}>
          Reference table of the most-used derivative identities. Try
          {' '}<strong>puzzle</strong> mode to drill, or read the full{' '}
          <a href={articleHref} style={S.pageIntroLink}>derivatives explanation &rarr;</a>
        </p>

        <div className="cdp-layout" style={S.pageLayout}>
          <aside className="cdp-sidebar" style={S.sidebar}>
            <div className="cdp-sidebar-sticky" style={S.sidebarSticky}>
              <div style={S.sidebarBlock}>
                <div style={S.sidebarLabel}>On this page</div>
                <ul style={S.tocList}>
                  {TOC_ITEMS.map((item, idx) => (
                    <li key={item.id}>
                      <a
                        className={`cdp-toc-link ${activeSection === item.id ? 'active' : ''}`}
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
                    <a key={idx} href={ref.href} className="cdp-related-mini" style={S.relatedMini}>
                      <div style={S.relatedMiniTitle}>{ref.title}</div>
                      {ref.sub && <div style={S.relatedMiniSub}>{ref.sub}</div>}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </aside>

          <div style={S.mainCol}>
            <section
              id="sec-tool"
              ref={(el) => { sectionRefs.current['sec-tool'] = el; }}
              style={S.toolSection}
            >
              <h2 style={S.toolH2}>Derivative Tool</h2>
              <p style={S.toolSub}>Every answer takes you to the table. Pick a question:</p>
              <div style={S.modeTabsWrap}>
                {modeTabs.map((tab) => {
                  const isActive = mode === tab.id;
                  return (
                    <button
                      key={tab.id} type="button"
                      className={`cdp-mode-tab ${isActive ? 'active' : ''}`}
                      style={{ ...S.modeTabBase, ...(isActive ? S.modeTabActive : {}) }}
                      onClick={() => handleModeChange(tab.id)}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
              {mode === 'byF' && (
                <div className="cdp-input-block" style={S.inputBlock}>
                  <input
                    type="text" className="cdp-input-field" style={S.inputField}
                    placeholder="Enter f(x) (e.g., sin, ln, tanh, arcsin)"
                    value={fInput}
                    onChange={(e) => setFInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') runFind(fInput, 'byF'); }}
                  />
                  <button type="button" className="cdp-input-btn" style={S.inputBtn}
                    onClick={() => runFind(fInput, 'byF')}>Find</button>
                </div>
              )}
              {mode === 'byDF' && (
                <div className="cdp-input-block" style={S.inputBlock}>
                  <input
                    type="text" className="cdp-input-field" style={S.inputField}
                    placeholder="Enter f&apos;(x) (e.g., cos, 1/x, sech^2)"
                    value={dfInput}
                    onChange={(e) => setDfInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') runFind(dfInput, 'byDF'); }}
                  />
                  <button type="button" className="cdp-input-btn" style={S.inputBtn}
                    onClick={() => runFind(dfInput, 'byDF')}>Find</button>
                </div>
              )}
              {statusKind && (
                <div style={S.toolStatus}>
                  <span style={{ ...S.statusIcon, background: statusIconBg }}>{statusIcon}</span>
                  <span>{statusContent}</span>
                </div>
              )}
            </section>

            <section id="sec-table" ref={(el) => { sectionRefs.current['sec-table'] = el; }}>
              <div style={S.legend}>
                <div style={S.legendLeft}>
                  <div style={S.legendTitle}>View</div>
                  <p style={S.legendNote}>
                    {viewMode === 'reference'
                      ? 'Reference mode: click any card to see the explanation right there.'
                      : 'Puzzle mode: drag tiles into the matching slot. The page auto-scrolls when you drag near the edge.'}
                  </p>
                </div>
                <div style={S.viewToggle}>
                  {['reference', 'puzzle'].map((v) => {
                    const isActive = viewMode === v;
                    return (
                      <button
                        key={v} type="button"
                        className={`cdp-view-btn ${isActive ? 'active' : ''}`}
                        style={{ ...S.viewBtnBase, ...(isActive ? S.viewBtnActive : {}) }}
                        onClick={() => handleViewChange(v)}
                      >
                        {v === 'reference' ? 'Reference' : 'Puzzle'}
                      </button>
                    );
                  })}
                </div>
              </div>

              {showBanner && (
                <div style={S.filterStatus}>
                  <span style={S.filterStatusText}>{bannerText}</span>
                  <button type="button" style={S.filterClear} onClick={handleClearHighlights}>
                    Clear highlight
                  </button>
                </div>
              )}

              {viewMode === 'reference' && renderRefGrid()}

              {viewMode === 'puzzle' && (
                <DerivativesPuzzle
                  derivatives={DERIVATIVES}
                  onExit={() => handleViewChange('reference')}
                />
              )}
            </section>

            <section id="sec-patterns" ref={(el) => { sectionRefs.current['sec-patterns'] = el; }}>
              <h2 style={S.sectionH}>Categories</h2>
              <p style={S.sectionSub}>Click a card to highlight matching entries in the table above.</p>
              {viewMode === 'puzzle' && (
                <div style={S.filtersDisabledNote}>
                  Filters are available in <strong>Reference</strong> view.
                </div>
              )}
              <div style={S.filterGrid}>
                {FILTER_DEFS.map((f) => {
                  const isActive = activeFilter === f.id;
                  const disabled = viewMode === 'puzzle';
                  const cls = ['cdp-filter-card'];
                  if (isActive) cls.push('active');
                  if (disabled) cls.push('disabled');
                  return (
                    <div key={f.id} className={cls.join(' ')} style={S.filterCard}
                      onClick={() => !disabled && toggleFilter(f.id)}>
                      <div className="cdp-filter-icon" style={S.filterIcon}>{f.icon}</div>
                      <h3 style={S.filterCardH3}>{f.title}</h3>
                      <p style={S.filterCardP}>{processContent(f.desc)}</p>
                      <div style={S.filterCardFooter}>
                        <span className="cdp-filter-count" style={S.filterCount}>
                          {filterCounts[f.id]} match{filterCounts[f.id] === 1 ? '' : 'es'}
                        </span>
                        <span className="cdp-filter-action" style={S.filterAction}>
                          Click to highlight
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section
              id="sec-properties"
              ref={(el) => { sectionRefs.current['sec-properties'] = el; }}
              style={S.propertiesSection}
            >
              <h2 style={S.sectionH}>Differentiation rules</h2>
              <p style={S.sectionSub}>The four structural rules that combine and extend the identities above.</p>
              <div style={S.propertyGrid}>
                {PROPERTY_CARDS.map((card, i) => (
                  <div key={i} style={S.propertyCard}>
                    <div style={S.propertyCardIcon}>{card.icon}</div>
                    <h4 style={S.propertyCardH4}>{card.title}</h4>
                    <p style={S.propertyCardP}>{processContent(card.body)}</p>
                    {card.example && (
                      <div style={S.propertyCardExample}>{processContent(card.example)}</div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section
              id="sec-quiz"
              ref={(el) => { sectionRefs.current['sec-quiz'] = el; }}
              style={S.quizSection}
            >
              <QuizWidget
                generator={generateDerivativeQuestion}
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

export default CommonDerivativesPage;