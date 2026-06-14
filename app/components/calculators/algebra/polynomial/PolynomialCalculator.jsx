// // // 'use client';

// // // import { useState, useEffect, useRef, useCallback } from 'react';
// // // import { processContent } from '../../../../utils/contentProcessor';

// // // /* ============================================================================
// // //    PolynomialCalculator — v5
// // //    Fixes from v4:
// // //    - Polynomial row now runs the saved string through exprToDisplayLatex
// // //      before rendering, so multi-digit exponents (x^15, x^16, …) render
// // //      correctly. Previously they came through as raw "x^15" and KaTeX
// // //      superscripted only the first digit, giving "x¹5".
// // //    - Dial-insert button now uses a controlled column flex layout with an
// // //      explicit gap and line-height: 1 on the math span, so the "Tap to
// // //      insert" label is no longer clipped by KaTeX&apos;s superscript metrics.
// // // ============================================================================ */

// // // /* ===== Math utilities ==================================================== */

// // // const SUPER_MAP_TO = { '⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9' };
// // // const SUPER_MAP_FROM = { '0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹' };
// // // function toSuper(n) {
// // //   return String(n).split('').map(d => SUPER_MAP_FROM[d] || d).join('');
// // // }

// // // /** Parse a polynomial string into a descending coefficient array. */
// // // function parsePolynomial(text) {
// // //   if (text == null) return null;
// // //   let s = String(text).trim();
// // //   if (!s) return null;
// // //   s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, run => '^' + run.split('').map(c => SUPER_MAP_TO[c]).join(''));
// // //   s = s.replace(/\*\*/g, '^').replace(/[−–—]/g, '-').replace(/\s+/g, '').replace(/\*/g, '');
// // //   // strip explicit braces from inputs like x^{15}
// // //   s = s.replace(/\^\{(-?\d+)\}/g, '^$1');
// // //   if (!s) return null;
// // //   let w = s.replace(/-/g, '+-');
// // //   if (w.startsWith('+')) w = w.slice(1);
// // //   const terms = w.split('+').filter(t => t.length > 0);
// // //   if (!terms.length) return null;

// // //   const TERM_RE = /^(-?)(\d*\.?\d*)([a-zA-Z]?)(?:\^(-?\d+))?$/;
// // //   const byPow = {};
// // //   for (const t of terms) {
// // //     const m = t.match(TERM_RE);
// // //     if (!m) return null;
// // //     const [, sign, numStr, variable, powerStr] = m;
// // //     let coef;
// // //     if (numStr === '' || numStr === '.') {
// // //       if (!variable) return null;
// // //       coef = 1;
// // //     } else {
// // //       coef = parseFloat(numStr);
// // //       if (isNaN(coef)) return null;
// // //     }
// // //     if (sign === '-') coef = -coef;
// // //     let pow;
// // //     if (!variable) pow = 0;
// // //     else if (powerStr == null || powerStr === '') pow = 1;
// // //     else {
// // //       pow = parseInt(powerStr, 10);
// // //       if (isNaN(pow) || pow < 0) return null;
// // //     }
// // //     byPow[pow] = (byPow[pow] || 0) + coef;
// // //   }
// // //   const powers = Object.keys(byPow).map(Number);
// // //   if (!powers.length) return null;
// // //   const maxPow = Math.max(...powers);
// // //   const coefs = [];
// // //   for (let p = maxPow; p >= 0; p--) coefs.push(byPow[p] || 0);
// // //   return coefs;
// // // }

// // // /** Coefficient array → user-friendly input string. */
// // // function coefsToInputString(coefs) {
// // //   if (!coefs || !coefs.length) return '0';
// // //   const degree = coefs.length - 1;
// // //   const parts = [];
// // //   coefs.forEach((c, i) => {
// // //     const power = degree - i;
// // //     if (c === 0) return;
// // //     const absC = Math.abs(c);
// // //     let term;
// // //     if (power === 0)      term = `${absC}`;
// // //     else if (power === 1) term = absC === 1 ? 'x'        : `${absC}x`;
// // //     else                  term = absC === 1 ? `x^${power}` : `${absC}x^${power}`;
// // //     if (parts.length === 0) parts.push(c < 0 ? `-${term}` : term);
// // //     else                    parts.push(c < 0 ? ` - ${term}` : ` + ${term}`);
// // //   });
// // //   return parts.length ? parts.join('') : '0';
// // // }

// // // /** Coefficient array → LaTeX string for KaTeX rendering. */
// // // function coefsToLatex(coefs) {
// // //   if (!coefs || !coefs.length) return '0';
// // //   const degree = coefs.length - 1;
// // //   const parts = [];
// // //   coefs.forEach((c, i) => {
// // //     const power = degree - i;
// // //     if (c === 0) return;
// // //     const absC = Math.abs(c);
// // //     let term;
// // //     if (power === 0)      term = `${absC}`;
// // //     else if (power === 1) term = absC === 1 ? 'x'              : `${absC}x`;
// // //     else                  term = absC === 1 ? `x^{${power}}`   : `${absC}x^{${power}}`;
// // //     if (parts.length === 0) parts.push(c < 0 ? `-${term}` : term);
// // //     else                    parts.push(c < 0 ? `- ${term}` : `+ ${term}`);
// // //   });
// // //   return parts.length ? parts.join(' ') : '0';
// // // }

// // // /** Raw user input → KaTeX-safe LaTeX (wrap multi-digit exponents in braces). */
// // // function exprToDisplayLatex(expr) {
// // //   if (!expr) return '';
// // //   let s = String(expr);
// // //   // unicode superscript runs → ^N
// // //   s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, run => '^' + run.split('').map(c => SUPER_MAP_TO[c]).join(''));
// // //   // wrap ANY exponent in braces (so x^15 → x^{15}, x^3 → x^{3})
// // //   s = s.replace(/\^(-?\d+)/g, '^{$1}');
// // //   s = s.replace(/\*/g, ' \\cdot ');
// // //   s = s.replace(/[−–—]/g, '-');
// // //   return s;
// // // }

// // // function isExprParseable(expr) {
// // //   if (!expr || !expr.trim()) return false;
// // //   return parsePolynomial(expr) !== null;
// // // }

// // // /* ===== Operation data ==================================================== */

// // // const OPERATION_ORDER = [
// // //   'add', 'subtract', 'multiply',
// // //   'long_div', 'synth_div',
// // //   'factor', 'zeros', 'simplify',
// // // ];

// // // const OPERATIONS = {
// // //   add: {
// // //     label: 'Add',
// // //     title: 'Adding polynomials',
// // //     sub: 'Sum two or more polynomials, combining like terms across matching degrees.',
// // //     learnMoreHref: '#',
// // //     mode: 'multi',
// // //     symbol: '+',
// // //     inputHeader: 'Polynomials to add',
// // //     actionLabel: 'Add',
// // //     hasGraph: false,
// // //     demoInputs: ['2x^2 + 3x - 1', 'x^2 - 5x + 4'],
// // //     result: {
// // //       primaryLabel: 'Sum',
// // //       primaryMath: '3x^2 - 2x + 3',
// // //       meta: [
// // //         { label: 'Degree', value: '2' },
// // //         { label: 'Leading', value: '3' },
// // //         { label: 'Constant', value: '3' },
// // //       ],
// // //     },
// // //     steps: [
// // //       { title: 'Line up by degree', math: '$2x^2 + 3x - 1$ + $x^2 - 5x + 4$', note: 'Group every term with the same power of $x$ together.' },
// // //       { title: 'Sum coefficients of $x^2$', math: '$(2 + 1)x^2 = 3x^2$', note: 'Two and one — straightforward.' },
// // //       { title: 'Sum coefficients of $x$', math: '$(3 + (-5))x = -2x$', note: 'The negative sign comes through with the term.' },
// // //       { title: 'Sum the constants', math: '$(-1) + 4 = 3$', note: '' },
// // //       { title: 'Write in standard form', math: '$3x^2 - 2x + 3$', note: 'Highest degree first, descending.' },
// // //     ],
// // //     about: {
// // //       text: 'Addition of polynomials is term-by-term. Match exponents, sum coefficients, drop any zero terms. The result&apos;s degree is at most the max of the inputs&apos; degrees.',
// // //       formula: '\\deg(P_1 + P_2) \\le \\max(\\deg P_1, \\deg P_2)',
// // //     },
// // //     pitfalls: [
// // //       'Adding unlike terms (e.g. treating $x^2$ and $x$ as the same)',
// // //       'Dropping a sign when one term is negative',
// // //       'Forgetting placeholder zeros when one polynomial skips a degree',
// // //     ],
// // //     related: ['Subtract polynomials', 'Simplify polynomial', 'Find degree'],
// // //   },

// // //   subtract: {
// // //     label: 'Subtract',
// // //     title: 'Subtracting polynomials',
// // //     sub: 'Subtract polynomials in order, distributing the minus sign across every term.',
// // //     learnMoreHref: '#',
// // //     mode: 'multi',
// // //     symbol: '-',
// // //     inputHeader: 'Polynomials to subtract',
// // //     actionLabel: 'Subtract',
// // //     hasGraph: false,
// // //     demoInputs: ['3x^2 + 2x - 5', 'x^2 - 4x + 1'],
// // //     result: {
// // //       primaryLabel: 'Difference',
// // //       primaryMath: '2x^2 + 6x - 6',
// // //       meta: [
// // //         { label: 'Degree', value: '2' },
// // //         { label: 'Leading', value: '2' },
// // //         { label: 'Constant', value: '−6' },
// // //       ],
// // //     },
// // //     steps: [
// // //       { title: 'Distribute the minus over $P_2$', math: '$3x^2 + 2x - 5 - (x^2 - 4x + 1)$', note: 'Every sign in $P_2$ flips.' },
// // //       { title: 'Rewrite without the parentheses', math: '$3x^2 + 2x - 5 - x^2 + 4x - 1$', note: 'Now it&apos;s pure addition.' },
// // //       { title: 'Group like terms', math: '$(3 - 1)x^2 + (2 + 4)x + (-5 - 1)$', note: '' },
// // //       { title: 'Simplify each coefficient', math: '$2x^2 + 6x - 6$', note: 'Final answer in standard form.' },
// // //     ],
// // //     about: {
// // //       text: 'Subtraction is addition of the additive inverse. Flip every sign in the subtrahend, then add. Skipping the parenthesis-distribution step is the source of most sign errors.',
// // //       formula: 'P_1 - P_2 = P_1 + (-P_2)',
// // //     },
// // //     pitfalls: [
// // //       'Only negating the leading term of $P_2$ instead of every term',
// // //       'Forgetting that subtraction is not commutative',
// // //       'Combining $x^2$ and $-x^2$ as $-x^4$ (powers don&apos;t subtract)',
// // //     ],
// // //     related: ['Add polynomials', 'Simplify polynomial', 'Multiply polynomials'],
// // //   },

// // //   multiply: {
// // //     label: 'Multiply',
// // //     title: 'Multiplying polynomials',
// // //     sub: 'Multiply two or more polynomials and see each pairwise expansion, term-by-term, until the final product is fully simplified.',
// // //     learnMoreHref: '#',
// // //     mode: 'multi',
// // //     symbol: '\\times',
// // //     inputHeader: 'Polynomials to multiply',
// // //     actionLabel: 'Multiply',
// // //     hasGraph: true,
// // //     demoInputs: ['x + 2', 'x - 3', '2x + 1'],
// // //     result: {
// // //       primaryLabel: 'Product',
// // //       primaryMath: '2x^3 - 3x^2 - 13x - 6',
// // //       meta: [
// // //         { label: 'Degree', value: '3' },
// // //         { label: 'Leading', value: '2' },
// // //         { label: 'Constant', value: '−6' },
// // //       ],
// // //     },
// // //     steps: [
// // //       { title: 'Set up the first pair', math: '$(x + 2)(x - 3)$', note: 'Start with the leftmost two polynomials.' },
// // //       { title: 'Apply FOIL', math: '$x \\cdot x + x \\cdot (-3) + 2 \\cdot x + 2 \\cdot (-3)$', note: 'First, Outer, Inner, Last — each term of the first across each term of the second.' },
// // //       { title: 'Simplify the first product', math: '$x^2 - x - 6$', note: 'Combine like terms: $-3x + 2x = -x$.' },
// // //       { title: 'Bring in $P_3$', math: '$(x^2 - x - 6)(2x + 1)$', note: 'Distribute every trinomial term across every binomial term.' },
// // //       { title: 'Distribute term by term', math: '$2x^3 + x^2 - 2x^2 - x - 12x - 6$', note: 'Six products total — three from each term of the trinomial.' },
// // //       { title: 'Group by degree', math: '$2x^3 + (1 - 2)x^2 + (-1 - 12)x - 6$', note: 'Collect coefficients of matching powers.' },
// // //       { title: 'Combine like terms', math: '$2x^3 - 3x^2 - 13x - 6$', note: 'Now we have the final simplified cubic.' },
// // //     ],
// // //     about: {
// // //       text: 'When multiplying three or more polynomials, expand them pairwise from the left. Multiplication is associative, so any grouping works — but left-to-right keeps intermediate degrees small.',
// // //       formula: 'P_1 \\cdot P_2 \\cdot P_3 = ((P_1 \\cdot P_2) \\cdot P_3)',
// // //     },
// // //     pitfalls: [
// // //       'Forgetting to distribute the sign with a negative term',
// // //       'Mismatching exponents when adding like terms ($x^2$ and $x$ are not alike)',
// // //       'Dropping the constant term — every term in $P_1$ multiplies <em>every</em> term in $P_2$',
// // //     ],
// // //     related: ['Factor result', 'Find zeros of result', 'FOIL method'],
// // //   },

// // //   long_div: {
// // //     label: 'Long division',
// // //     title: 'Polynomial long division',
// // //     sub: 'Divide one polynomial by another and see every line of the work — leading-term division, multiply-and-subtract, bring-down — until the remainder degree is less than the divisor&apos;s.',
// // //     learnMoreHref: '#',
// // //     mode: 'dual',
// // //     symbol: '\\div',
// // //     inputHeader: 'Divide polynomial',
// // //     inputLabels: ['Dividend', 'Divisor'],
// // //     actionLabel: 'Divide',
// // //     hasGraph: true,
// // //     demoInputs: ['x^3 - 2x^2 + 4', 'x - 1'],
// // //     result: {
// // //       primaryLabel: 'Quotient',
// // //       primaryMath: 'x^2 - x - 1',
// // //       extras: [{ label: 'Remainder', math: '3' }],
// // //       identity: '\\dfrac{x^3 - 2x^2 + 4}{x - 1} = x^2 - x - 1 + \\dfrac{3}{x - 1}',
// // //       meta: [
// // //         { label: 'Quotient degree', value: '2' },
// // //         { label: 'Remainder degree', value: '0' },
// // //       ],
// // //     },
// // //     steps: [
// // //       { title: 'Insert placeholder zeros', math: '$x^3 - 2x^2 + 0x + 4$', note: 'Make sure every degree from the top down has a coefficient. Missing terms break the line-up.' },
// // //       { title: 'Divide leading terms', math: '$\\dfrac{x^3}{x} = x^2$', note: 'First term of the quotient.' },
// // //       { title: 'Multiply and subtract', math: '$x^2(x - 1) = x^3 - x^2$, so $(x^3 - 2x^2) - (x^3 - x^2) = -x^2$', note: 'Bring down the next term.' },
// // //       { title: 'Divide leading terms again', math: '$\\dfrac{-x^2}{x} = -x$', note: 'Second term of the quotient.' },
// // //       { title: 'Multiply and subtract', math: '$-x(x - 1) = -x^2 + x$, so result is $-x$', note: 'Bring down the next term.' },
// // //       { title: 'Final leading-term division', math: '$\\dfrac{-x}{x} = -1$', note: 'Third term of the quotient.' },
// // //       { title: 'Multiply, subtract, stop', math: '$-1(x - 1) = -x + 1$, remainder $3$', note: 'Remainder degree (0) is less than divisor degree (1), so we stop.' },
// // //     ],
// // //     about: {
// // //       text: 'Long division of polynomials mirrors long division of integers. The quotient&apos;s degree is $\\deg P_1 - \\deg P_2$ when the leading coefficients divide cleanly; otherwise you carry a remainder.',
// // //       formula: 'P_1 = P_2 \\cdot Q + R, \\quad \\deg R < \\deg P_2',
// // //     },
// // //     pitfalls: [
// // //       'Forgetting placeholder zeros for missing degrees',
// // //       'Subtracting instead of adding when you bring down terms',
// // //       'Stopping early — continue until the remainder degree drops below the divisor&apos;s',
// // //     ],
// // //     related: ['Synthetic division', 'Factor polynomial', 'Remainder theorem'],
// // //   },

// // //   synth_div: {
// // //     label: 'Synthetic',
// // //     title: 'Synthetic division',
// // //     sub: 'A faster division algorithm when the divisor is linear, $(x - c)$. Works only when the divisor has degree 1 and leading coefficient 1.',
// // //     learnMoreHref: '#',
// // //     mode: 'dual',
// // //     symbol: '\\div',
// // //     inputHeader: 'Synthetic division',
// // //     inputLabels: ['Dividend', 'Divisor (x − c)'],
// // //     actionLabel: 'Divide',
// // //     hasGraph: true,
// // //     demoInputs: ['x^3 - 2x^2 + 4', 'x - 1'],
// // //     result: {
// // //       primaryLabel: 'Quotient',
// // //       primaryMath: 'x^2 - x - 1',
// // //       extras: [{ label: 'Remainder', math: '3' }],
// // //       meta: [
// // //         { label: 'Quotient degree', value: '2' },
// // //       ],
// // //     },
// // //     steps: [
// // //       { title: 'Identify $c$', math: 'Divisor is $x - 1$, so $c = 1$', note: 'Sign flips: $(x - c)$ pattern.' },
// // //       { title: 'Write the coefficients', math: '$1, -2, 0, 4$', note: 'Including placeholder zero for the missing $x$ term.' },
// // //       { title: 'Bring down the first', math: '$1$', note: '' },
// // //       { title: 'Multiply by $c$, add to next', math: '$1 \\cdot 1 = 1$, then $-2 + 1 = -1$', note: '' },
// // //       { title: 'Repeat for the next column', math: '$-1 \\cdot 1 = -1$, then $0 + (-1) = -1$', note: '' },
// // //       { title: 'Last column gives the remainder', math: '$-1 \\cdot 1 = -1$, then $4 + (-1) = 3$', note: 'Final value is the remainder.' },
// // //       { title: 'Read off the quotient', math: 'Coefficients $1, -1, -1$ → $x^2 - x - 1$', note: 'Degree drops by one from the dividend.' },
// // //     ],
// // //     about: {
// // //       text: 'Synthetic division is a shortcut for dividing by a linear factor. It only works when the divisor is monic and linear; for higher-degree or non-monic divisors, fall back to long division.',
// // //       formula: 'P(x) \\div (x - c): \\text{ remainder } = P(c)',
// // //     },
// // //     pitfalls: [
// // //       'Using synthetic division with a non-linear divisor — it doesn&apos;t work',
// // //       'Sign of $c$: divisor $x + 2$ means $c = -2$, not $+2$',
// // //       'Missing placeholder zeros in the coefficient list',
// // //     ],
// // //     related: ['Long division', 'Remainder theorem', 'Factor polynomial'],
// // //   },

// // //   factor: {
// // //     label: 'Factor',
// // //     title: 'Factoring polynomials',
// // //     sub: 'Factor a polynomial into its irreducible components, trying GCF, grouping, special forms, and rational roots in sequence.',
// // //     learnMoreHref: '#',
// // //     mode: 'single',
// // //     symbol: null,
// // //     inputHeader: 'Polynomial to factor',
// // //     actionLabel: 'Factor',
// // //     hasGraph: true,
// // //     demoInputs: ['x^3 - 2x^2 - x + 2'],
// // //     result: {
// // //       primaryLabel: 'Factored form',
// // //       primaryMath: '(x - 1)(x + 1)(x - 2)',
// // //       meta: [
// // //         { label: 'Roots', value: '1, −1, 2' },
// // //         { label: 'Degree', value: '3' },
// // //       ],
// // //     },
// // //     steps: [
// // //       { title: 'Check for a GCF', math: '$x^3 - 2x^2 - x + 2$', note: 'No common factor across all terms — move on.' },
// // //       { title: 'Try grouping', math: '$x^2(x - 2) - 1(x - 2)$', note: 'Group first two and last two, factor each pair.' },
// // //       { title: 'Factor out the common binomial', math: '$(x - 2)(x^2 - 1)$', note: 'Both pairs share $(x - 2)$.' },
// // //       { title: 'Apply difference of squares', math: '$x^2 - 1 = (x - 1)(x + 1)$', note: 'A standard special form.' },
// // //       { title: 'Final factored form', math: '$(x - 1)(x + 1)(x - 2)$', note: 'Three linear factors — the polynomial has three real roots.' },
// // //     ],
// // //     about: {
// // //       text: 'Factoring strategies, in order of preference: greatest common factor, grouping, special forms (difference of squares, sum/difference of cubes, perfect square trinomial), then rational root theorem for higher degrees.',
// // //       formula: '\\text{GCF} \\to \\text{Grouping} \\to \\text{Special forms} \\to \\text{Rational roots}',
// // //     },
// // //     pitfalls: [
// // //       'Stopping after one factoring step when further factoring is possible',
// // //       'Forgetting to factor out a GCF before applying other methods',
// // //       'Confusing sum of squares ($x^2 + 1$, irreducible over reals) with difference of squares',
// // //     ],
// // //     related: ['Find zeros', 'Polynomial long division', 'Rational root theorem'],
// // //   },

// // //   zeros: {
// // //     label: 'Find zeros',
// // //     title: 'Find polynomial zeros',
// // //     sub: 'Find every real and complex root of a polynomial, including multiplicities.',
// // //     learnMoreHref: '#',
// // //     mode: 'single',
// // //     symbol: null,
// // //     inputHeader: 'Polynomial',
// // //     actionLabel: 'Find zeros',
// // //     hasGraph: true,
// // //     demoInputs: ['x^3 - 2x^2 - x + 2'],
// // //     result: {
// // //       primaryLabel: 'Zeros',
// // //       primaryMath: 'x = 1, \\; x = -1, \\; x = 2',
// // //       meta: [
// // //         { label: 'Real roots', value: '3' },
// // //         { label: 'Complex roots', value: '0' },
// // //       ],
// // //     },
// // //     steps: [
// // //       { title: 'List rational root candidates', math: 'Candidates: $\\pm 1, \\pm 2$', note: 'Rational roots are $\\pm \\frac{p}{q}$ where $p$ divides the constant and $q$ divides the leading coefficient.' },
// // //       { title: 'Test $x = 1$', math: '$P(1) = 1 - 2 - 1 + 2 = 0$', note: '$x = 1$ is a root.' },
// // //       { title: 'Divide out $(x - 1)$', math: '$P(x) / (x - 1) = x^2 - x - 2$', note: 'Synthetic division by the found root.' },
// // //       { title: 'Factor the quotient', math: '$x^2 - x - 2 = (x - 2)(x + 1)$', note: '' },
// // //       { title: 'Read off all zeros', math: '$x = 1, x = 2, x = -1$', note: 'Three distinct real roots, each with multiplicity 1.' },
// // //     ],
// // //     about: {
// // //       text: 'Every polynomial of degree $n$ has exactly $n$ roots over the complex numbers, counted with multiplicity. Real polynomials with odd degree always have at least one real root.',
// // //       formula: '\\text{deg}(P) = n \\Rightarrow n \\text{ complex roots (with multiplicity)}',
// // //     },
// // //     pitfalls: [
// // //       'Forgetting that some roots may be complex even when the polynomial has real coefficients',
// // //       'Counting a repeated root only once',
// // //       'Stopping at the first root without dividing it out and continuing',
// // //     ],
// // //     related: ['Factor polynomial', 'Rational root theorem', 'Synthetic division'],
// // //   },

// // //   simplify: {
// // //     label: 'Simplify',
// // //     title: 'Simplify polynomial',
// // //     sub: 'Combine like terms and rewrite the polynomial in standard form, descending by degree.',
// // //     learnMoreHref: '#',
// // //     mode: 'single',
// // //     symbol: null,
// // //     inputHeader: 'Polynomial to simplify',
// // //     actionLabel: 'Simplify',
// // //     hasGraph: false,
// // //     demoInputs: ['3x + 2x^2 - 5 + x - 2x^2 + 4'],
// // //     result: {
// // //       primaryLabel: 'Simplified',
// // //       primaryMath: '4x - 1',
// // //       meta: [
// // //         { label: 'Degree', value: '1' },
// // //         { label: 'Leading', value: '4' },
// // //         { label: 'Constant', value: '−1' },
// // //       ],
// // //     },
// // //     steps: [
// // //       { title: 'List every term', math: '$3x, \\; 2x^2, \\; -5, \\; x, \\; -2x^2, \\; 4$', note: 'Pull them apart so each can be sorted by degree.' },
// // //       { title: 'Group like terms', math: '$x^2$: $2 - 2$; $x$: $3 + 1$; constants: $-5 + 4$', note: '' },
// // //       { title: 'Combine each group', math: '$0x^2 + 4x - 1$', note: 'The $x^2$ terms cancel completely.' },
// // //       { title: 'Drop zero terms, write in standard form', math: '$4x - 1$', note: 'No $x^2$ term remains, so the result is degree 1.' },
// // //     ],
// // //     about: {
// // //       text: 'A polynomial is in standard form when its terms appear in descending degree order, with no like terms left to combine and no zero terms written out.',
// // //       formula: 'a_n x^n + a_{n-1} x^{n-1} + \\ldots + a_1 x + a_0',
// // //     },
// // //     pitfalls: [
// // //       'Leaving like terms uncombined in the final answer',
// // //       'Writing terms in ascending instead of descending degree',
// // //       'Including a $0x^k$ term in the simplified form',
// // //     ],
// // //     related: ['Add polynomials', 'Find degree', 'Standard form'],
// // //   },
// // // };

// // // /* ===== Styles ============================================================ */
// // // const CSS = `
// // // .pcalc-page {
// // //   width: 90%;
// // //   max-width: 1400px;
// // //   margin: 0 auto;
// // //   padding: 1.5rem 0 3rem;
// // //   font-family: var(--ms-font-sans, 'Inter', -apple-system, BlinkMacSystemFont, sans-serif);
// // //   font-size: 0.95rem;
// // //   line-height: 1.5;
// // //   color: var(--ms-text, #0f172a);
// // //   -webkit-font-smoothing: antialiased;
// // // }
// // // .pcalc-page * { box-sizing: border-box; }

// // // .pcalc-header { margin-bottom: 1rem; }
// // // .pcalc-eyebrow {
// // //   font-size: 0.7rem; font-weight: 600; letter-spacing: 0.14em;
// // //   text-transform: uppercase; color: var(--ms-primary, #1d4ed8);
// // //   margin-bottom: 0.35rem;
// // // }
// // // .pcalc-title-row { display: flex; align-items: center; gap: 0.55rem; position: relative; }
// // // .pcalc-title {
// // //   font-family: var(--ms-font-serif, 'Playfair Display', Georgia, serif);
// // //   font-weight: 700; font-size: 1.65rem; margin: 0; letter-spacing: -0.005em;
// // // }

// // // .pcalc-help-wrap { position: relative; display: inline-block; }
// // // .pcalc-help-btn {
// // //   width: 22px; height: 22px; border-radius: 50%;
// // //   background: transparent;
// // //   border: 1.5px solid var(--ms-primary-light, #dbeafe);
// // //   color: var(--ms-primary, #1d4ed8);
// // //   font-family: inherit; font-size: 0.78rem; font-weight: 700;
// // //   cursor: pointer; padding: 0; line-height: 1;
// // //   display: inline-flex; align-items: center; justify-content: center;
// // //   transition: all 0.12s;
// // // }
// // // .pcalc-help-btn:hover,
// // // .pcalc-help-wrap.is-open .pcalc-help-btn {
// // //   background: var(--ms-primary-light, #dbeafe);
// // //   border-color: var(--ms-primary, #1d4ed8);
// // // }
// // // .pcalc-tooltip {
// // //   position: absolute; top: calc(100% + 10px); left: 50%; transform: translateX(-50%);
// // //   width: 320px; max-width: 90vw;
// // //   background: rgba(15, 23, 42, 0.94);
// // //   color: rgba(241, 245, 249, 0.95);
// // //   border-radius: 8px; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.28);
// // //   padding: 0.8rem 0.95rem; font-size: 0.86rem; line-height: 1.45;
// // //   z-index: 100; opacity: 0; pointer-events: none;
// // //   transition: opacity 0.15s;
// // //   backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
// // // }
// // // .pcalc-tooltip::before {
// // //   content: ''; position: absolute; top: -5px; left: 50%;
// // //   transform: translateX(-50%) rotate(45deg);
// // //   width: 10px; height: 10px;
// // //   background: rgba(15, 23, 42, 0.94);
// // // }
// // // .pcalc-tooltip::after {
// // //   content: ''; position: absolute; top: -14px;
// // //   left: 0; right: 0; height: 14px;
// // // }
// // // .pcalc-help-wrap:hover .pcalc-tooltip,
// // // .pcalc-help-wrap.is-open .pcalc-tooltip,
// // // .pcalc-help-btn:focus-visible + .pcalc-tooltip {
// // //   opacity: 1; pointer-events: auto;
// // // }
// // // .pcalc-tooltip p { margin: 0 0 0.6rem; color: rgba(241, 245, 249, 0.88); }
// // // .pcalc-tooltip-link {
// // //   display: inline-flex; align-items: center; gap: 0.25rem;
// // //   color: #93c5fd; font-weight: 600; font-size: 0.84rem; text-decoration: none;
// // // }
// // // .pcalc-tooltip-link:hover { color: #dbeafe; text-decoration: underline; }

// // // .pcalc-ops {
// // //   display: flex; align-items: center; gap: 0.7rem; flex-wrap: wrap;
// // //   margin: 1.2rem 0 1.2rem; padding: 0.5rem 0.65rem 0.5rem 0.85rem;
// // //   background: var(--ms-card-bg, #fff); border: 1px solid var(--ms-border, #e2e8f0);
// // //   border-radius: 8px; box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
// // // }
// // // .pcalc-ops-label {
// // //   font-size: 0.66rem; font-weight: 700; letter-spacing: 0.16em;
// // //   text-transform: uppercase; color: var(--ms-text-muted, #64748b);
// // //   padding: 0.1rem 0.85rem 0.1rem 0;
// // //   border-right: 1px solid var(--ms-border, #e2e8f0);
// // //   align-self: stretch; display: inline-flex; align-items: center;
// // // }
// // // .pcalc-ops-list { display: flex; flex-wrap: wrap; gap: 0.25rem; }
// // // .pcalc-op-btn {
// // //   font-family: inherit; font-size: 0.84rem; font-weight: 500;
// // //   padding: 0.42rem 0.85rem; background: transparent;
// // //   border: 1px solid transparent; border-radius: 5px;
// // //   color: var(--ms-text-soft, #475569); cursor: pointer;
// // //   transition: all 0.1s; white-space: nowrap;
// // // }
// // // .pcalc-op-btn:hover { background: var(--ms-primary-light, #dbeafe); color: var(--ms-primary-dark, #1e3a8a); }
// // // .pcalc-op-btn.is-active { background: var(--ms-primary, #1d4ed8); color: #fff; }

// // // .pcalc-grid { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: start; }
// // // @media (max-width: 980px) { .pcalc-grid { grid-template-columns: 1fr; } }

// // // .pcalc-card {
// // //   background: var(--ms-card-bg, #fff); border: 1px solid var(--ms-border, #e2e8f0);
// // //   border-radius: 11px; box-shadow: 0 2px 6px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04);
// // //   margin-bottom: 1.1rem; overflow: hidden;
// // // }
// // // .pcalc-card-header {
// // //   background: var(--ms-primary, #1d4ed8); color: #fff;
// // //   padding: 0.7rem 1.15rem;
// // //   font-family: var(--ms-font-serif, 'Playfair Display', Georgia, serif);
// // //   font-weight: 600; font-size: 1.02rem;
// // // }
// // // .pcalc-card-body { padding: 1.05rem 1.2rem; }

// // // .pcalc-input-toolbar {
// // //   display: flex; justify-content: flex-end; align-items: center;
// // //   margin-bottom: 0.85rem; gap: 0.65rem; flex-wrap: wrap;
// // // }
// // // .pcalc-mode-toggle {
// // //   display: inline-flex; background: #f1f5f9;
// // //   border-radius: 8px; padding: 2px;
// // // }
// // // .pcalc-mode-toggle button {
// // //   font-family: inherit; font-size: 0.8rem; font-weight: 500;
// // //   padding: 0.35rem 0.75rem; border-radius: 6px; border: none;
// // //   background: transparent; color: var(--ms-text-soft, #475569);
// // //   cursor: pointer; display: inline-flex; align-items: center; gap: 0.3rem;
// // // }
// // // .pcalc-mode-toggle button.is-active {
// // //   background: #fff; color: var(--ms-text, #0f172a);
// // //   box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
// // // }

// // // .pcalc-poly-list { display: flex; flex-direction: column; gap: 0.6rem; }
// // // .pcalc-poly-row {
// // //   display: grid; grid-template-columns: 36px 1fr 30px; gap: 0.55rem; align-items: stretch;
// // // }
// // // .pcalc-poly-row.is-dual { grid-template-columns: 96px 1fr; }
// // // .pcalc-poly-row.is-single { grid-template-columns: 36px 1fr; }
// // // .pcalc-poly-row.is-editing { grid-template-columns: 1fr; }
// // // .pcalc-poly-row.is-editing > .pcalc-poly-tag,
// // // .pcalc-poly-row.is-editing > .pcalc-poly-remove { display: none; }

// // // .pcalc-poly-tag {
// // //   display: inline-flex; align-items: center; justify-content: center;
// // //   background: var(--ms-primary-light, #dbeafe);
// // //   color: var(--ms-primary-dark, #1e3a8a);
// // //   border-radius: 5px;
// // //   font-family: var(--ms-font-mono, 'JetBrains Mono', monospace);
// // //   font-size: 0.86rem; font-weight: 600;
// // // }
// // // .pcalc-poly-tag.role { font-family: inherit; font-size: 0.72rem; padding: 0 0.4rem; text-align: center; }

// // // .pcalc-poly-box {
// // //   position: relative; display: flex; align-items: center;
// // //   padding: 0.65rem 0.95rem; min-height: 54px;
// // //   background: #fff; border: 2px dashed var(--ms-border-strong, #cbd5e1);
// // //   border-radius: 8px; font-size: 1.15rem;
// // //   transition: all 0.12s; cursor: pointer;
// // // }
// // // .pcalc-poly-box:hover { border-color: var(--ms-primary, #1d4ed8); background: #f8faff; }
// // // .pcalc-poly-placeholder-tag {
// // //   position: absolute; top: 0.35rem; left: 0.7rem;
// // //   font-family: var(--ms-font-sans, sans-serif);
// // //   font-size: 0.6rem; font-weight: 600; letter-spacing: 0.1em;
// // //   text-transform: uppercase; color: var(--ms-text-muted, #64748b);
// // // }
// // // .pcalc-poly-edit-hint {
// // //   position: absolute; right: 0.7rem; bottom: 0.35rem;
// // //   font-family: var(--ms-font-sans, sans-serif);
// // //   font-size: 0.7rem; color: var(--ms-text-muted, #64748b);
// // // }
// // // .pcalc-poly-content {
// // //   width: 100%; display: flex; align-items: center; padding: 0.2rem 0;
// // // }
// // // .pcalc-poly-remove {
// // //   display: inline-flex; align-items: center; justify-content: center;
// // //   width: 30px; height: 30px; align-self: center;
// // //   border-radius: 50%; border: 1.5px solid var(--ms-border-strong, #cbd5e1);
// // //   background: #fff; color: var(--ms-text-muted, #64748b);
// // //   cursor: pointer; font-size: 0.82rem; transition: all 0.12s;
// // // }
// // // .pcalc-poly-remove:hover {
// // //   background: var(--ms-error-bg, #fee2e2);
// // //   color: var(--ms-error, #b91c1c);
// // //   border-color: var(--ms-error, #b91c1c);
// // // }
// // // .pcalc-poly-remove.is-hidden { visibility: hidden; }

// // // .pcalc-poly-op { display: grid; grid-template-columns: 36px 1fr 30px; gap: 0.55rem; }
// // // .pcalc-poly-op.is-dual { grid-template-columns: 96px 1fr; }
// // // .pcalc-poly-op-symbol {
// // //   grid-column: 2;
// // //   font-family: var(--ms-font-serif, 'Playfair Display', Georgia, serif);
// // //   font-size: 1.2rem; color: var(--ms-text-soft, #475569); padding: 0.05rem 0;
// // // }

// // // .pcalc-add-poly {
// // //   display: flex; align-items: center; justify-content: center; gap: 0.35rem;
// // //   margin-top: 0.6rem; padding: 0.6rem; width: 100%;
// // //   font-family: inherit; font-size: 0.85rem; font-weight: 600;
// // //   background: transparent; color: var(--ms-primary, #1d4ed8);
// // //   border: 1.5px dashed var(--ms-primary, #1d4ed8); border-radius: 8px;
// // //   cursor: pointer; transition: all 0.12s;
// // // }
// // // .pcalc-add-poly:hover { background: var(--ms-primary-light, #dbeafe); }

// // // .pcalc-actions { display: flex; gap: 0.55rem; margin-top: 1rem; flex-wrap: wrap; }
// // // .pcalc-btn {
// // //   font-family: inherit; font-size: 0.9rem; font-weight: 600;
// // //   padding: 0.6rem 1.2rem; border-radius: 8px;
// // //   border: 1.5px solid transparent; cursor: pointer; transition: all 0.1s;
// // // }
// // // .pcalc-btn:active { transform: translateY(1px); }
// // // .pcalc-btn:disabled { opacity: 0.5; cursor: not-allowed; }
// // // .pcalc-btn-primary { background: var(--ms-primary, #1d4ed8); color: #fff; }
// // // .pcalc-btn-primary:hover:not(:disabled) { background: var(--ms-primary-hover, #1e40af); }
// // // .pcalc-btn-secondary {
// // //   background: #fff; color: var(--ms-text-soft, #475569);
// // //   border-color: var(--ms-border-strong, #cbd5e1);
// // // }
// // // .pcalc-btn-secondary:hover { background: #f8fafc; color: var(--ms-text, #0f172a); border-color: var(--ms-text-muted, #64748b); }

// // // .pcalc-result {
// // //   background: linear-gradient(180deg, #eff6ff 0%, #f0f9ff 100%);
// // //   border-left: 3px solid var(--ms-primary, #1d4ed8);
// // //   padding: 1rem 1.15rem;
// // // }
// // // .pcalc-result-eyebrow {
// // //   font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em;
// // //   text-transform: uppercase; color: var(--ms-primary, #1d4ed8);
// // //   margin-bottom: 0.4rem;
// // // }
// // // .pcalc-result-math { font-size: 1.35rem; color: var(--ms-text, #0f172a); margin-bottom: 0.35rem; }
// // // .pcalc-result-extras { display: flex; flex-direction: column; gap: 0.25rem; margin-top: 0.5rem; }
// // // .pcalc-result-extra { display: flex; align-items: baseline; gap: 0.5rem; font-size: 0.88rem; }
// // // .pcalc-result-extra-label { font-weight: 600; color: var(--ms-text-soft, #475569); min-width: 90px; }
// // // .pcalc-result-identity {
// // //   margin-top: 0.55rem; padding-top: 0.55rem;
// // //   border-top: 1px solid rgba(29, 78, 216, 0.15);
// // //   font-size: 1.05rem;
// // // }
// // // .pcalc-result-subline {
// // //   font-size: 0.82rem; color: var(--ms-text-soft, #475569);
// // //   display: flex; gap: 0.85rem; flex-wrap: wrap; margin-top: 0.5rem;
// // // }
// // // .pcalc-result-actions { display: flex; gap: 0.4rem; margin-top: 0.75rem; flex-wrap: wrap; }
// // // .pcalc-icon-btn {
// // //   display: inline-flex; align-items: center; gap: 0.3rem;
// // //   font-family: inherit; font-size: 0.78rem; font-weight: 500;
// // //   padding: 0.35rem 0.7rem;
// // //   background: rgba(255, 255, 255, 0.75);
// // //   border: 1px solid var(--ms-primary-light, #dbeafe);
// // //   color: var(--ms-primary, #1d4ed8);
// // //   border-radius: 8px; cursor: pointer; transition: all 0.12s;
// // // }
// // // .pcalc-icon-btn:hover { background: #fff; border-color: var(--ms-primary, #1d4ed8); }

// // // .pcalc-section-block { padding: 0.85rem 0; border-bottom: 1px solid var(--ms-border, #e2e8f0); }
// // // .pcalc-section-block:first-child { padding-top: 0; }
// // // .pcalc-section-block:last-child { padding-bottom: 0; border-bottom: none; }
// // // .pcalc-section-title {
// // //   font-family: var(--ms-font-serif, 'Playfair Display', Georgia, serif);
// // //   font-size: 0.94rem; font-weight: 600; color: var(--ms-text, #0f172a);
// // //   margin: 0 0 0.65rem; display: flex; align-items: center; gap: 0.4rem;
// // // }
// // // .pcalc-section-badge {
// // //   font-family: var(--ms-font-sans, sans-serif);
// // //   font-size: 0.62rem; font-weight: 600; letter-spacing: 0.1em;
// // //   text-transform: uppercase;
// // //   background: var(--ms-primary-light, #dbeafe);
// // //   color: var(--ms-primary-dark, #1e3a8a);
// // //   padding: 0.15rem 0.45rem; border-radius: 999px;
// // // }

// // // .pcalc-steps-section { position: relative; }
// // // .pcalc-steps-scroll {
// // //   max-height: 360px; overflow-y: auto; padding-right: 0.25rem;
// // //   scrollbar-width: none; -ms-overflow-style: none;
// // // }
// // // .pcalc-steps-scroll::-webkit-scrollbar { width: 0; height: 0; display: none; }
// // // .pcalc-steps-fade {
// // //   pointer-events: none; position: absolute;
// // //   left: 0; right: 0; bottom: 0; height: 50px;
// // //   background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, var(--ms-card-bg, #fff) 75%);
// // //   opacity: 0; transition: opacity 0.15s;
// // // }
// // // .pcalc-steps-fade.is-visible { opacity: 1; }
// // // .pcalc-steps-chevron {
// // //   position: absolute; bottom: 4px; left: 50%;
// // //   transform: translateX(-50%) translateY(0);
// // //   display: inline-flex; align-items: center; justify-content: center;
// // //   width: 36px; height: 22px; padding: 0;
// // //   background: transparent; border: none;
// // //   color: var(--ms-primary, #1d4ed8);
// // //   cursor: pointer; opacity: 0; pointer-events: none;
// // //   border-radius: 4px; transition: opacity 0.18s, background 0.15s;
// // //   z-index: 2;
// // // }
// // // .pcalc-steps-chevron.is-visible {
// // //   opacity: 0.7; pointer-events: auto;
// // //   animation: pcalc-chevron-bounce 1.8s ease-in-out infinite;
// // // }
// // // .pcalc-steps-chevron:hover { opacity: 1; background: rgba(29, 78, 216, 0.08); }
// // // .pcalc-steps-chevron svg { display: block; }
// // // @keyframes pcalc-chevron-bounce {
// // //   0%, 100% { transform: translateX(-50%) translateY(0); }
// // //   50%      { transform: translateX(-50%) translateY(3px); }
// // // }

// // // .pcalc-step {
// // //   display: grid; grid-template-columns: 28px 1fr; gap: 0.6rem;
// // //   padding: 0.65rem 0; border-bottom: 1px solid var(--ms-border, #e2e8f0);
// // // }
// // // .pcalc-step:last-child { border-bottom: none; }
// // // .pcalc-step-num {
// // //   width: 24px; height: 24px; border-radius: 50%;
// // //   background: var(--ms-primary, #1d4ed8); color: #fff;
// // //   font-family: var(--ms-font-serif, 'Playfair Display', Georgia, serif);
// // //   font-weight: 600; font-size: 0.78rem;
// // //   display: inline-flex; align-items: center; justify-content: center;
// // // }
// // // .pcalc-step-title {
// // //   font-family: var(--ms-font-serif, 'Playfair Display', Georgia, serif);
// // //   font-weight: 600; font-size: 0.92rem; margin: 0 0 0.35rem;
// // // }
// // // .pcalc-step-math {
// // //   background: #f8fafc; border: 1px solid var(--ms-border, #e2e8f0);
// // //   border-radius: 8px; padding: 0.5rem 0.7rem;
// // //   margin-bottom: 0.3rem; font-size: 0.98rem; overflow-x: auto;
// // // }
// // // .pcalc-step-note { color: var(--ms-text-soft, #475569); font-size: 0.82rem; margin: 0; }

// // // .pcalc-method-text { font-size: 0.88rem; color: var(--ms-text-soft, #475569); margin: 0 0 0.55rem; }
// // // .pcalc-method-text:last-child { margin-bottom: 0; }
// // // .pcalc-method-formula {
// // //   background: #f8fafc; border: 1px solid var(--ms-border, #e2e8f0);
// // //   border-radius: 8px; padding: 0.6rem 0.85rem; font-size: 1rem; margin: 0.55rem 0;
// // // }

// // // .pcalc-pitfall-list { margin: 0; padding-left: 1.05rem; }
// // // .pcalc-pitfall-list li { margin: 0.35rem 0; font-size: 0.85rem; color: var(--ms-text-soft, #475569); }

// // // .pcalc-related-row { display: flex; flex-wrap: wrap; gap: 0.4rem; }
// // // .pcalc-related-chip {
// // //   font-family: inherit; font-size: 0.78rem; font-weight: 500;
// // //   padding: 0.35rem 0.75rem;
// // //   background: var(--ms-primary-light, #dbeafe);
// // //   color: var(--ms-primary-dark, #1e3a8a);
// // //   border: 1px solid transparent; border-radius: 999px;
// // //   cursor: pointer; transition: all 0.12s;
// // // }
// // // .pcalc-related-chip:hover { background: #bfdbfe; }

// // // /* ===== Editor shared ===== */
// // // .pcalc-editor {
// // //   border: 2px solid var(--ms-primary, #1d4ed8);
// // //   border-radius: 10px;
// // //   background: #fafcff;
// // //   padding: 0.85rem 1rem;
// // //   display: flex; flex-direction: column; gap: 0.75rem;
// // // }
// // // .pcalc-editor-head {
// // //   display: flex; justify-content: space-between; align-items: center;
// // //   gap: 0.6rem; flex-wrap: wrap;
// // // }
// // // .pcalc-editor-head-title {
// // //   font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
// // //   text-transform: uppercase; color: var(--ms-primary, #1d4ed8);
// // // }
// // // .pcalc-editor-head-actions { display: flex; gap: 0.4rem; }
// // // .pcalc-editor-head-actions button {
// // //   font-family: inherit; font-size: 0.82rem; font-weight: 500;
// // //   padding: 0.42rem 0.95rem; border-radius: 6px;
// // //   border: 1.5px solid var(--ms-border-strong, #cbd5e1);
// // //   background: #fff; color: var(--ms-text-soft, #475569);
// // //   cursor: pointer; transition: all 0.1s;
// // // }
// // // .pcalc-editor-head-actions button:disabled { opacity: 0.45; cursor: not-allowed; }
// // // .pcalc-editor-head-actions .is-primary {
// // //   background: var(--ms-primary, #1d4ed8); color: #fff;
// // //   border-color: var(--ms-primary, #1d4ed8);
// // // }
// // // .pcalc-editor-head-actions .is-primary:hover:not(:disabled) {
// // //   background: var(--ms-primary-hover, #1e40af);
// // // }

// // // /* ===== Keypad editor ===== */
// // // .pcalc-kp-display {
// // //   width: 100%; min-height: 64px;
// // //   padding: 0.7rem 1rem;
// // //   background: #fff; border: 1.5px solid var(--ms-primary, #1d4ed8);
// // //   border-radius: 8px;
// // //   display: flex; align-items: center;
// // //   font-size: 1.35rem; overflow-x: auto;
// // //   box-shadow: inset 0 1px 0 rgba(255,255,255,0.8), 0 1px 3px rgba(29,78,216,0.07);
// // //   position: relative;
// // // }
// // // .pcalc-kp-display.is-empty {
// // //   justify-content: center;
// // //   font-family: var(--ms-font-sans, sans-serif);
// // //   font-style: italic; font-size: 0.9rem;
// // //   color: var(--ms-text-muted, #64748b);
// // //   border-style: dashed; border-color: var(--ms-border-strong, #cbd5e1);
// // // }
// // // .pcalc-kp-display.is-invalid { border-color: #fca5a5; background: #fffbfb; }

// // // .pcalc-kp-layout {
// // //   display: grid; grid-template-columns: 1fr 1.05fr; gap: 0.75rem;
// // // }
// // // @media (max-width: 720px) {
// // //   .pcalc-kp-layout { grid-template-columns: 1fr; }
// // // }

// // // .pcalc-dial-card {
// // //   background: linear-gradient(180deg, #f0f5ff 0%, #eff6ff 100%);
// // //   border: 1.5px solid var(--ms-primary-light, #dbeafe);
// // //   border-radius: 8px; padding: 0.8rem 0.9rem;
// // // }
// // // .pcalc-dial-title {
// // //   font-size: 0.66rem; font-weight: 700; letter-spacing: 0.12em;
// // //   text-transform: uppercase; color: var(--ms-primary, #1d4ed8);
// // //   margin-bottom: 0.6rem;
// // // }
// // // .pcalc-dial-row {
// // //   display: flex; align-items: center; justify-content: center;
// // //   gap: 0.55rem; margin-bottom: 0.7rem;
// // // }
// // // .pcalc-dial-step {
// // //   width: 34px; height: 34px; border-radius: 50%;
// // //   border: 1.5px solid var(--ms-primary, #1d4ed8);
// // //   background: #fff; color: var(--ms-primary, #1d4ed8);
// // //   font-size: 1.1rem; font-weight: 600; cursor: pointer; line-height: 1;
// // //   display: inline-flex; align-items: center; justify-content: center;
// // //   transition: all 0.12s;
// // // }
// // // .pcalc-dial-step:hover:not(:disabled) { background: var(--ms-primary, #1d4ed8); color: #fff; }
// // // .pcalc-dial-step:disabled { opacity: 0.35; cursor: not-allowed; }

// // // /* The big primary insert button — fixed layout so KaTeX doesn&apos;t overlap label */
// // // .pcalc-dial-insert {
// // //   min-width: 112px;
// // //   height: 72px;
// // //   padding: 0.35rem 0.7rem;
// // //   background: var(--ms-primary, #1d4ed8); color: #fff;
// // //   border: none; border-radius: 8px;
// // //   cursor: pointer;
// // //   display: inline-flex; align-items: center; justify-content: center;
// // //   transition: all 0.12s; box-shadow: 0 2px 6px rgba(29, 78, 216, 0.2);
// // // }
// // // .pcalc-dial-insert:hover { background: var(--ms-primary-hover, #1e40af); }
// // // .pcalc-dial-insert-stack {
// // //   display: flex; flex-direction: column;
// // //   align-items: center; justify-content: center;
// // //   gap: 0.25rem;
// // //   line-height: 1;
// // // }
// // // .pcalc-dial-insert-label {
// // //   font-family: var(--ms-font-sans, sans-serif);
// // //   font-size: 0.6rem; font-weight: 600;
// // //   letter-spacing: 0.1em; text-transform: uppercase;
// // //   opacity: 0.85;
// // //   margin: 0; line-height: 1;
// // //   display: block;
// // // }
// // // .pcalc-dial-insert-math {
// // //   display: inline-block;
// // //   font-size: 1.35rem;
// // //   line-height: 1;
// // // }
// // // .pcalc-dial-insert-math .katex { line-height: 1; }

// // // .pcalc-dial-quick-label { font-size: 0.72rem; font-weight: 600; color: var(--ms-text-soft, #475569); margin-bottom: 0.4rem; }
// // // .pcalc-dial-quick { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.4rem; }
// // // .pcalc-dial-chip {
// // //   height: 38px;
// // //   background: #fff; border: 1.5px solid var(--ms-border-strong, #cbd5e1);
// // //   border-radius: 6px; font-size: 1.02rem;
// // //   color: var(--ms-text, #0f172a); cursor: pointer;
// // //   display: flex; align-items: center; justify-content: center;
// // //   font-family: inherit;
// // //   box-shadow: 0 1px 2px rgba(15,23,42,0.05);
// // //   transition: all 0.1s;
// // // }
// // // .pcalc-dial-chip:hover {
// // //   background: var(--ms-primary-light, #dbeafe);
// // //   border-color: var(--ms-primary, #1d4ed8);
// // //   color: var(--ms-primary-dark, #1e3a8a);
// // // }
// // // .pcalc-dial-chip.is-active {
// // //   background: var(--ms-primary, #1d4ed8); border-color: var(--ms-primary, #1d4ed8); color: #fff;
// // // }

// // // .pcalc-dial-custom {
// // //   margin-top: 0.7rem; padding-top: 0.7rem;
// // //   border-top: 1px solid var(--ms-primary-light, #dbeafe);
// // //   display: flex; align-items: center; gap: 0.45rem;
// // //   font-size: 0.78rem; color: var(--ms-text-soft, #475569); flex-wrap: wrap;
// // // }
// // // .pcalc-dial-custom input {
// // //   width: 54px; height: 30px; padding: 0 0.4rem;
// // //   font-family: var(--ms-font-mono, monospace); font-size: 0.95rem; text-align: center;
// // //   background: #fff; border: 1.5px solid var(--ms-border-strong, #cbd5e1);
// // //   border-radius: 5px; outline: none;
// // //   -moz-appearance: textfield;
// // // }
// // // .pcalc-dial-custom input::-webkit-outer-spin-button,
// // // .pcalc-dial-custom input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
// // // .pcalc-dial-custom input:focus { border-color: var(--ms-primary, #1d4ed8); box-shadow: 0 0 0 3px rgba(29,78,216,0.14); }

// // // .pcalc-kp-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 0.4rem; align-content: start; }
// // // .pcalc-kp-btn {
// // //   height: 42px; font-family: var(--ms-font-mono, monospace); font-size: 1rem; font-weight: 500;
// // //   background: #fff; border: 1.5px solid var(--ms-border-strong, #cbd5e1);
// // //   border-radius: 7px; color: var(--ms-text, #0f172a);
// // //   cursor: pointer; transition: all 0.08s;
// // //   display: flex; align-items: center; justify-content: center;
// // //   box-shadow: 0 1px 2px rgba(15,23,42,0.04);
// // // }
// // // .pcalc-kp-btn:hover { background: var(--ms-primary-light, #dbeafe); border-color: var(--ms-primary, #1d4ed8); color: var(--ms-primary-dark, #1e3a8a); }
// // // .pcalc-kp-btn:active { transform: translateY(1px); }
// // // .pcalc-kp-btn.op { background: #f1f5f9; }
// // // .pcalc-kp-btn.cmd { background: #fef2f2; color: #b91c1c; border-color: #fca5a5; }
// // // .pcalc-kp-btn.cmd:hover { background: #fee2e2; }
// // // .pcalc-kp-btn.zero { grid-column: span 2; }

// // // /* ===== Slots editor ===== */
// // // .pcalc-sl-row {
// // //   display: flex; flex-wrap: wrap; align-items: center; gap: 0.4rem;
// // //   padding: 0.65rem 0.85rem; background: #fff;
// // //   border: 1.5px solid var(--ms-border, #e2e8f0);
// // //   border-radius: 8px; min-height: 64px;
// // // }
// // // .pcalc-sl-group { display: inline-flex; align-items: center; gap: 0.3rem; }
// // // .pcalc-sl-slot input {
// // //   width: 60px; height: 44px; text-align: center;
// // //   font-family: var(--ms-font-mono, monospace); font-size: 1.05rem; font-weight: 500;
// // //   background: #fff; border: 1.5px solid var(--ms-border-strong, #cbd5e1);
// // //   border-radius: 7px; color: var(--ms-text, #0f172a); outline: none;
// // //   -moz-appearance: textfield; transition: all 0.12s;
// // // }
// // // .pcalc-sl-slot input::-webkit-outer-spin-button,
// // // .pcalc-sl-slot input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
// // // .pcalc-sl-slot input:focus { border-color: var(--ms-primary, #1d4ed8); box-shadow: 0 0 0 3px rgba(29,78,216,0.16); }
// // // .pcalc-sl-slot input.is-zero { background: #f1f5f9; color: var(--ms-text-muted, #64748b); }
// // // .pcalc-sl-slot input.is-neg { background: #fef2f2; color: #b91c1c; }
// // // .pcalc-sl-power { font-size: 1.05rem; color: var(--ms-text, #0f172a); }
// // // .pcalc-sl-op {
// // //   font-family: var(--ms-font-mono, monospace); font-size: 1.2rem;
// // //   color: var(--ms-text-muted, #64748b); padding: 0 0.15rem;
// // // }
// // // .pcalc-sl-meta { display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; flex-wrap: wrap; }
// // // .pcalc-sl-degree {
// // //   display: inline-flex; align-items: center; gap: 0.4rem;
// // //   font-size: 0.82rem; color: var(--ms-text-soft, #475569);
// // // }
// // // .pcalc-sl-degbtn {
// // //   width: 28px; height: 28px; border-radius: 50%;
// // //   border: 1.5px solid var(--ms-border-strong, #cbd5e1);
// // //   background: #fff; color: var(--ms-text-soft, #475569);
// // //   cursor: pointer; font-size: 1rem; line-height: 1;
// // //   display: inline-flex; align-items: center; justify-content: center;
// // //   transition: all 0.12s;
// // // }
// // // .pcalc-sl-degbtn:hover:not(:disabled) { border-color: var(--ms-primary, #1d4ed8); color: var(--ms-primary, #1d4ed8); background: var(--ms-primary-light, #dbeafe); }
// // // .pcalc-sl-degbtn:disabled { opacity: 0.35; cursor: not-allowed; }
// // // .pcalc-sl-preview {
// // //   padding: 0.5rem 0.8rem;
// // //   background: #f8fafc; border: 1px solid var(--ms-border, #e2e8f0);
// // //   border-radius: 7px; font-size: 1.05rem; min-height: 2.2rem;
// // //   display: flex; align-items: center; gap: 0.5rem;
// // // }
// // // .pcalc-sl-preview-label {
// // //   font-size: 0.68rem; font-weight: 600; letter-spacing: 0.08em;
// // //   text-transform: uppercase; color: var(--ms-text-muted, #64748b);
// // // }

// // // .pcalc-skeleton { min-height: 720px; }
// // // `;

// // // /* ===== Slots input ======================================================= */

// // // function SlotsInput({ initialValue, label, onSave, onCancel }) {
// // //   const parsedInit = parsePolynomial(initialValue) || [0];
// // //   const [coefs, setCoefs] = useState(parsedInit);

// // //   const degree = coefs.length - 1;

// // //   const updateCoef = (i, v) => {
// // //     const next = coefs.slice();
// // //     const parsed = v === '' || v === '-' ? 0 : parseFloat(v);
// // //     next[i] = isNaN(parsed) ? 0 : parsed;
// // //     setCoefs(next);
// // //   };
// // //   const incDegree = () => setCoefs([0, ...coefs]);
// // //   const decDegree = () => { if (coefs.length > 1) setCoefs(coefs.slice(1)); };
// // //   const handleSave = () => onSave(coefsToInputString(coefs));

// // //   return (
// // //     <div className="pcalc-editor">
// // //       <div className="pcalc-editor-head">
// // //         <div className="pcalc-editor-head-title">Editing {label} · Slots</div>
// // //         <div className="pcalc-editor-head-actions">
// // //           <button type="button" onClick={onCancel}>Cancel</button>
// // //           <button type="button" className="is-primary" onClick={handleSave}>Save</button>
// // //         </div>
// // //       </div>

// // //       <div className="pcalc-sl-meta">
// // //         <div className="pcalc-sl-degree">
// // //           <button type="button" className="pcalc-sl-degbtn" onClick={decDegree} disabled={coefs.length <= 1} aria-label="Decrease degree">−</button>
// // //           <span>Degree <strong>{degree}</strong></span>
// // //           <button type="button" className="pcalc-sl-degbtn" onClick={incDegree} aria-label="Increase degree">+</button>
// // //         </div>
// // //       </div>

// // //       <div className="pcalc-sl-row">
// // //         {coefs.map((c, i) => {
// // //           const power = degree - i;
// // //           return (
// // //             <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
// // //               <span className="pcalc-sl-group">
// // //                 <span className="pcalc-sl-slot">
// // //                   <input
// // //                     type="number"
// // //                     value={c}
// // //                     step="any"
// // //                     className={Number(c) === 0 ? 'is-zero' : Number(c) < 0 ? 'is-neg' : ''}
// // //                     onChange={e => updateCoef(i, e.target.value)}
// // //                     aria-label={power === 0 ? 'Constant' : `Coefficient of x^${power}`}
// // //                   />
// // //                 </span>
// // //                 {power > 0 && (
// // //                   <span className="pcalc-sl-power">
// // //                     {processContent('$' + (power === 1 ? 'x' : `x^{${power}}`) + '$')}
// // //                   </span>
// // //                 )}
// // //               </span>
// // //               {i < coefs.length - 1 && <span className="pcalc-sl-op">+</span>}
// // //             </span>
// // //           );
// // //         })}
// // //       </div>

// // //       <div className="pcalc-sl-preview">
// // //         <span className="pcalc-sl-preview-label">Reads as</span>
// // //         <span>{processContent('$' + coefsToLatex(coefs) + '$')}</span>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // /* ===== Keypad input ====================================================== */

// // // function KeypadInput({ initialValue, label, onSave, onCancel }) {
// // //   const [expr, setExpr] = useState(initialValue || '');
// // //   const [power, setPower] = useState(3);

// // //   const valid = isExprParseable(expr);

// // //   const append = (s) => setExpr(prev => prev + s);
// // //   const backspace = () => setExpr(prev => prev.slice(0, -1));
// // //   const clearAll = () => setExpr('');
// // //   const insertVar = () => {
// // //     const token = power <= 1 ? 'x' : 'x^' + power;
// // //     setExpr(prev => prev + token);
// // //   };
// // //   const insertVarAt = (p) => {
// // //     const token = p <= 1 ? 'x' : 'x^' + p;
// // //     setExpr(prev => prev + token);
// // //     setPower(p);
// // //   };

// // //   const dialLatex = power <= 1 ? 'x' : `x^{${power}}`;
// // //   const displayLatex = exprToDisplayLatex(expr);

// // //   const handleSave = () => {
// // //     if (!valid) return;
// // //     onSave(expr);
// // //   };

// // //   return (
// // //     <div className="pcalc-editor">
// // //       <div className="pcalc-editor-head">
// // //         <div className="pcalc-editor-head-title">Editing {label} · Keypad</div>
// // //         <div className="pcalc-editor-head-actions">
// // //           <button type="button" onClick={onCancel}>Cancel</button>
// // //           <button type="button" className="is-primary" onClick={handleSave} disabled={!valid}>Save</button>
// // //         </div>
// // //       </div>

// // //       <div className={
// // //         'pcalc-kp-display' +
// // //         (!expr.trim() ? ' is-empty' : '') +
// // //         (expr.trim() && !valid ? ' is-invalid' : '')
// // //       }>
// // //         {expr.trim()
// // //           ? processContent('$' + displayLatex + '$')
// // //           : 'Tap buttons to build a polynomial'}
// // //       </div>

// // //       <div className="pcalc-kp-layout">
// // //         <div className="pcalc-dial-card">
// // //           <div className="pcalc-dial-title">Insert x to the power</div>
// // //           <div className="pcalc-dial-row">
// // //             <button type="button" className="pcalc-dial-step" onClick={() => setPower(p => Math.max(1, p - 1))} disabled={power <= 1} aria-label="Decrease power">−</button>
// // //             <button type="button" className="pcalc-dial-insert" onClick={insertVar} aria-label="Insert at current power">
// // //               <span className="pcalc-dial-insert-stack">
// // //                 <span className="pcalc-dial-insert-label">Tap to insert</span>
// // //                 <span className="pcalc-dial-insert-math">{processContent('$' + dialLatex + '$')}</span>
// // //               </span>
// // //             </button>
// // //             <button type="button" className="pcalc-dial-step" onClick={() => setPower(p => Math.min(99, p + 1))} disabled={power >= 99} aria-label="Increase power">+</button>
// // //           </div>

// // //           <div className="pcalc-dial-quick-label">Quick presets</div>
// // //           <div className="pcalc-dial-quick">
// // //             {[1, 2, 3, 4, 5, 6].map(p => (
// // //               <button
// // //                 key={p}
// // //                 type="button"
// // //                 className={'pcalc-dial-chip' + (power === p ? ' is-active' : '')}
// // //                 onClick={() => insertVarAt(p)}
// // //               >
// // //                 {p === 1 ? 'x' : 'x' + toSuper(p)}
// // //               </button>
// // //             ))}
// // //           </div>

// // //           <div className="pcalc-dial-custom">
// // //             <span>Custom power:</span>
// // //             <input
// // //               type="number"
// // //               min="1"
// // //               max="99"
// // //               step="1"
// // //               value={power}
// // //               onChange={e => {
// // //                 const v = parseInt(e.target.value, 10);
// // //                 if (!isNaN(v) && v >= 1 && v <= 99) setPower(v);
// // //               }}
// // //             />
// // //           </div>
// // //         </div>

// // //         <div className="pcalc-kp-grid">
// // //           <button type="button" className="pcalc-kp-btn" onClick={() => append('7')}>7</button>
// // //           <button type="button" className="pcalc-kp-btn" onClick={() => append('8')}>8</button>
// // //           <button type="button" className="pcalc-kp-btn" onClick={() => append('9')}>9</button>
// // //           <button type="button" className="pcalc-kp-btn op" onClick={() => append(' + ')}>+</button>
// // //           <button type="button" className="pcalc-kp-btn op" onClick={() => append(' - ')}>−</button>
// // //           <button type="button" className="pcalc-kp-btn cmd" onClick={backspace} aria-label="Backspace">←</button>

// // //           <button type="button" className="pcalc-kp-btn" onClick={() => append('4')}>4</button>
// // //           <button type="button" className="pcalc-kp-btn" onClick={() => append('5')}>5</button>
// // //           <button type="button" className="pcalc-kp-btn" onClick={() => append('6')}>6</button>
// // //           <button type="button" className="pcalc-kp-btn op" onClick={() => append('*')}>×</button>
// // //           <button type="button" className="pcalc-kp-btn op" onClick={() => append('/')}>÷</button>
// // //           <button type="button" className="pcalc-kp-btn cmd" onClick={clearAll} aria-label="Clear">C</button>

// // //           <button type="button" className="pcalc-kp-btn" onClick={() => append('1')}>1</button>
// // //           <button type="button" className="pcalc-kp-btn" onClick={() => append('2')}>2</button>
// // //           <button type="button" className="pcalc-kp-btn" onClick={() => append('3')}>3</button>
// // //           <button type="button" className="pcalc-kp-btn op" onClick={() => append('(')}>(</button>
// // //           <button type="button" className="pcalc-kp-btn op" onClick={() => append(')')}>)</button>
// // //           <button type="button" className="pcalc-kp-btn op" onClick={() => append('.')}>.</button>

// // //           <button type="button" className="pcalc-kp-btn zero" onClick={() => append('0')}>0</button>
// // //           <button type="button" className="pcalc-kp-btn op" onClick={() => append('^')}>^</button>
// // //           <button type="button" className="pcalc-kp-btn op" onClick={() => append('=')}>=</button>
// // //           <button type="button" className="pcalc-kp-btn op" onClick={() => append(' ')}>␣</button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // /* ===== Main component ==================================================== */

// // // export default function PolynomialCalculator({ defaultOperation = 'multiply' }) {
// // //   const [mounted, setMounted] = useState(false);
// // //   const [opKey, setOpKey] = useState(defaultOperation);
// // //   const [inputMode, setInputMode] = useState('keypad');
// // //   const [polynomials, setPolynomials] = useState(() => OPERATIONS[defaultOperation].demoInputs);
// // //   const [editingIndex, setEditingIndex] = useState(null);
// // //   const [showFade, setShowFade] = useState(false);
// // //   const [helpOpen, setHelpOpen] = useState(false);

// // //   const stepsScrollRef = useRef(null);
// // //   const helpWrapRef = useRef(null);
// // //   const op = OPERATIONS[opKey];

// // //   useEffect(() => { setMounted(true); }, []);

// // //   useEffect(() => {
// // //     setPolynomials(OPERATIONS[opKey].demoInputs);
// // //     setEditingIndex(null);
// // //     setHelpOpen(false);
// // //   }, [opKey]);

// // //   const updateFade = useCallback(() => {
// // //     const el = stepsScrollRef.current;
// // //     if (!el) return;
// // //     const overflowing = el.scrollHeight > el.clientHeight + 2;
// // //     const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 4;
// // //     setShowFade(overflowing && !atBottom);
// // //   }, []);

// // //   useEffect(() => {
// // //     if (!mounted) return;
// // //     updateFade();
// // //     const el = stepsScrollRef.current;
// // //     if (el) el.addEventListener('scroll', updateFade);
// // //     window.addEventListener('resize', updateFade);
// // //     return () => {
// // //       if (el) el.removeEventListener('scroll', updateFade);
// // //       window.removeEventListener('resize', updateFade);
// // //     };
// // //   }, [mounted, opKey, updateFade]);

// // //   useEffect(() => {
// // //     if (!helpOpen) return;
// // //     const onDocClick = (e) => {
// // //       if (helpWrapRef.current && !helpWrapRef.current.contains(e.target)) {
// // //         setHelpOpen(false);
// // //       }
// // //     };
// // //     document.addEventListener('mousedown', onDocClick);
// // //     return () => document.removeEventListener('mousedown', onDocClick);
// // //   }, [helpOpen]);

// // //   const handleAddPolynomial = () => setPolynomials(prev => [...prev, 'x + 1']);
// // //   const handleRemovePolynomial = (idx) => {
// // //     setPolynomials(prev => prev.filter((_, i) => i !== idx));
// // //     if (editingIndex === idx) setEditingIndex(null);
// // //   };
// // //   const handleEditPolynomial = (idx) => setEditingIndex(idx);
// // //   const handleCloseEditor = () => setEditingIndex(null);
// // //   const handleSavePolynomial = (idx, newValue) => {
// // //     setPolynomials(prev => {
// // //       const next = prev.slice();
// // //       next[idx] = newValue;
// // //       return next;
// // //     });
// // //     setEditingIndex(null);
// // //   };

// // //   const handleScrollStepsDown = () => {
// // //     const el = stepsScrollRef.current;
// // //     if (!el) return;
// // //     el.scrollBy({ top: Math.max(120, el.clientHeight * 0.7), behavior: 'smooth' });
// // //   };

// // //   if (!mounted) return <div className="pcalc-page pcalc-skeleton" aria-busy="true" />;

// // //   const renderEditor = (idx, label, value) => {
// // //     const props = {
// // //       initialValue: value,
// // //       label,
// // //       onSave: (v) => handleSavePolynomial(idx, v),
// // //       onCancel: handleCloseEditor,
// // //     };
// // //     return inputMode === 'keypad' ? <KeypadInput {...props} /> : <SlotsInput {...props} />;
// // //   };

// // //   /* FIX: run saved polynomial string through exprToDisplayLatex so that
// // //      multi-digit exponents (x^15, x^16, …) render correctly. */
// // //   const renderPolyBox = (idx, label, poly) => (
// // //     <div className="pcalc-poly-box" onClick={() => handleEditPolynomial(idx)} role="button" tabIndex={0}>
// // //       <span className="pcalc-poly-placeholder-tag">{label}</span>
// // //       <span className="pcalc-poly-content">
// // //         {processContent('$' + exprToDisplayLatex(poly) + '$')}
// // //       </span>
// // //       <span className="pcalc-poly-edit-hint">✎ Tap to edit</span>
// // //     </div>
// // //   );

// // //   const buildRow = (idx, opts) => {
// // //     const { tag, label, poly, single, dual, role } = opts;
// // //     const isEditing = editingIndex === idx;
// // //     const rowClass = 'pcalc-poly-row' +
// // //       (single ? ' is-single' : '') +
// // //       (dual ? ' is-dual' : '') +
// // //       (isEditing ? ' is-editing' : '');

// // //     return (
// // //       <div key={`row-${idx}`} className={rowClass}>
// // //         {!isEditing && (
// // //           <div className={'pcalc-poly-tag' + (role ? ' role' : '')}>
// // //             {role ? tag : <>P<sub>{idx + 1}</sub></>}
// // //           </div>
// // //         )}
// // //         {isEditing ? renderEditor(idx, label, poly) : renderPolyBox(idx, label, poly)}
// // //         {!single && !dual && !isEditing && (
// // //           <button
// // //             className={'pcalc-poly-remove' + (polynomials.length <= 2 ? ' is-hidden' : '')}
// // //             onClick={() => handleRemovePolynomial(idx)}
// // //             aria-label="Remove polynomial"
// // //             type="button"
// // //           >✕</button>
// // //         )}
// // //       </div>
// // //     );
// // //   };

// // //   const renderInputs = () => {
// // //     if (op.mode === 'single') {
// // //       return [buildRow(0, { tag: 'P', label: 'Polynomial', poly: polynomials[0], single: true })];
// // //     }
// // //     if (op.mode === 'dual') {
// // //       const labels = op.inputLabels || ['Top', 'Bottom'];
// // //       return [
// // //         buildRow(0, { tag: labels[0], label: labels[0], poly: polynomials[0], dual: true, role: true }),
// // //         <div key="op-0" className="pcalc-poly-op is-dual">
// // //           <span className="pcalc-poly-op-symbol">{processContent('$' + op.symbol + '$')}</span>
// // //         </div>,
// // //         buildRow(1, { tag: labels[1], label: labels[1], poly: polynomials[1], dual: true, role: true }),
// // //       ];
// // //     }
// // //     const out = [];
// // //     polynomials.forEach((poly, idx) => {
// // //       out.push(buildRow(idx, {
// // //         tag: 'P' + (idx + 1),
// // //         label: `Polynomial ${idx + 1}`,
// // //         poly,
// // //       }));
// // //       if (idx < polynomials.length - 1) {
// // //         out.push(
// // //           <div key={`op-${idx}`} className="pcalc-poly-op">
// // //             <span className="pcalc-poly-op-symbol">{processContent('$' + op.symbol + '$')}</span>
// // //           </div>
// // //         );
// // //       }
// // //     });
// // //     return out;
// // //   };

// // //   return (
// // //     <>
// // //       <style>{CSS}</style>
// // //       <div className="pcalc-page">

// // //         <header className="pcalc-header">
// // //           <div className="pcalc-eyebrow">Algebra · Polynomial tools</div>
// // //           <div className="pcalc-title-row">
// // //             <h1 className="pcalc-title">{op.title}</h1>
// // //             <div className={'pcalc-help-wrap' + (helpOpen ? ' is-open' : '')} ref={helpWrapRef}>
// // //               <button
// // //                 type="button"
// // //                 className="pcalc-help-btn"
// // //                 aria-label="More info about this operation"
// // //                 aria-expanded={helpOpen}
// // //                 onClick={() => setHelpOpen(o => !o)}
// // //               >?</button>
// // //               <div className="pcalc-tooltip" role="tooltip">
// // //                 <p>{processContent(op.sub)}</p>
// // //                 <a href={op.learnMoreHref || '#'} className="pcalc-tooltip-link">Learn more →</a>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </header>

// // //         {/*
// // //           Folder tabs — commented out until content sub-pages exist.

// // //           <nav className="pcalc-tabs" role="tablist">
// // //             <button className="pcalc-tab is-active" type="button">Calculator</button>
// // //             <button className="pcalc-tab" type="button">How it works</button>
// // //             <button className="pcalc-tab" type="button">Worked examples</button>
// // //           </nav>
// // //         */}

// // //         <div className="pcalc-ops">
// // //           <div className="pcalc-ops-label">Operation</div>
// // //           <div className="pcalc-ops-list">
// // //             {OPERATION_ORDER.map(key => (
// // //               <button
// // //                 key={key}
// // //                 type="button"
// // //                 className={'pcalc-op-btn' + (key === opKey ? ' is-active' : '')}
// // //                 onClick={() => setOpKey(key)}
// // //               >
// // //                 {OPERATIONS[key].label}
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <div className="pcalc-grid">

// // //           <div>
// // //             <section className="pcalc-card">
// // //               <div className="pcalc-card-header">{op.inputHeader}</div>
// // //               <div className="pcalc-card-body">

// // //                 <div className="pcalc-input-toolbar">
// // //                   <div className="pcalc-mode-toggle">
// // //                     <button type="button" className={inputMode === 'keypad' ? 'is-active' : ''} onClick={() => setInputMode('keypad')}>⌨ Keypad</button>
// // //                     <button type="button" className={inputMode === 'slots' ? 'is-active' : ''} onClick={() => setInputMode('slots')}>▦ Slots</button>
// // //                   </div>
// // //                 </div>

// // //                 <div className="pcalc-poly-list">
// // //                   {renderInputs()}
// // //                 </div>

// // //                 {op.mode === 'multi' && (
// // //                   <button type="button" className="pcalc-add-poly" onClick={handleAddPolynomial}>
// // //                     + Add another polynomial
// // //                   </button>
// // //                 )}

// // //                 <div className="pcalc-actions">
// // //                   <button type="button" className="pcalc-btn pcalc-btn-primary">{op.actionLabel}</button>
// // //                   <button type="button" className="pcalc-btn pcalc-btn-secondary" onClick={() => setPolynomials(op.demoInputs)}>Clear</button>
// // //                 </div>

// // //               </div>
// // //             </section>

// // //             <section className="pcalc-card">
// // //               <div className="pcalc-card-header">Result</div>
// // //               <div className="pcalc-card-body" style={{ padding: 0 }}>
// // //                 <div className="pcalc-result">
// // //                   <div className="pcalc-result-eyebrow">{op.result.primaryLabel}</div>
// // //                   <div className="pcalc-result-math">
// // //                     {processContent('$' + op.result.primaryMath + '$')}
// // //                   </div>
// // //                   {op.result.extras && op.result.extras.length > 0 && (
// // //                     <div className="pcalc-result-extras">
// // //                       {op.result.extras.map((ex, i) => (
// // //                         <div className="pcalc-result-extra" key={i}>
// // //                           <span className="pcalc-result-extra-label">{ex.label}:</span>
// // //                           <span>{processContent('$' + ex.math + '$')}</span>
// // //                         </div>
// // //                       ))}
// // //                     </div>
// // //                   )}
// // //                   {op.result.identity && (
// // //                     <div className="pcalc-result-identity">
// // //                       {processContent('$' + op.result.identity + '$')}
// // //                     </div>
// // //                   )}
// // //                   {op.result.meta && op.result.meta.length > 0 && (
// // //                     <div className="pcalc-result-subline">
// // //                       {op.result.meta.map((m, i) => (
// // //                         <span key={i}>{m.label}: <strong>{m.value}</strong></span>
// // //                       ))}
// // //                     </div>
// // //                   )}
// // //                   <div className="pcalc-result-actions">
// // //                     <button type="button" className="pcalc-icon-btn">⧉ Copy LaTeX</button>
// // //                     <button type="button" className="pcalc-icon-btn">↗ Share</button>
// // //                     {op.hasGraph && (
// // //                       <button type="button" className="pcalc-icon-btn">📈 Graph</button>
// // //                     )}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </section>
// // //           </div>

// // //           <div>
// // //             <section className="pcalc-card">
// // //               <div className="pcalc-card-header">Solution &amp; explanation</div>
// // //               <div className="pcalc-card-body">

// // //                 <div className="pcalc-section-block pcalc-steps-section">
// // //                   <h3 className="pcalc-section-title">
// // //                     Step-by-step
// // //                     <span className="pcalc-section-badge">{op.steps.length} steps</span>
// // //                   </h3>
// // //                   <div className="pcalc-steps-scroll" ref={stepsScrollRef}>
// // //                     {op.steps.map((step, i) => (
// // //                       <div className="pcalc-step" key={i}>
// // //                         <div className="pcalc-step-num">{i + 1}</div>
// // //                         <div>
// // //                           <h4 className="pcalc-step-title">{processContent(step.title)}</h4>
// // //                           <div className="pcalc-step-math">{processContent(step.math)}</div>
// // //                           {step.note && (
// // //                             <p className="pcalc-step-note">{processContent(step.note)}</p>
// // //                           )}
// // //                         </div>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                   <div className={'pcalc-steps-fade' + (showFade ? ' is-visible' : '')} />
// // //                   <button
// // //                     type="button"
// // //                     className={'pcalc-steps-chevron' + (showFade ? ' is-visible' : '')}
// // //                     onClick={handleScrollStepsDown}
// // //                     aria-label="Scroll for more steps"
// // //                     tabIndex={showFade ? 0 : -1}
// // //                   >
// // //                     <svg width="20" height="10" viewBox="0 0 20 10" aria-hidden="true">
// // //                       <path d="M2 2 L10 8 L18 2" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
// // //                     </svg>
// // //                   </button>
// // //                 </div>

// // //                 <div className="pcalc-section-block">
// // //                   <h3 className="pcalc-section-title">About this method</h3>
// // //                   <p className="pcalc-method-text">{processContent(op.about.text)}</p>
// // //                   {op.about.formula && (
// // //                     <div className="pcalc-method-formula">
// // //                       {processContent('$' + op.about.formula + '$')}
// // //                     </div>
// // //                   )}
// // //                 </div>

// // //                 <div className="pcalc-section-block">
// // //                   <h3 className="pcalc-section-title">Common pitfalls</h3>
// // //                   <ul className="pcalc-pitfall-list">
// // //                     {op.pitfalls.map((p, i) => (
// // //                       <li key={i}>{processContent(p)}</li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>

// // //                 <div className="pcalc-section-block">
// // //                   <h3 className="pcalc-section-title">Related tools</h3>
// // //                   <div className="pcalc-related-row">
// // //                     {op.related.map((r, i) => (
// // //                       <button type="button" className="pcalc-related-chip" key={i}>{r}</button>
// // //                     ))}
// // //                   </div>
// // //                 </div>

// // //               </div>
// // //             </section>
// // //           </div>

// // //         </div>

// // //       </div>
// // //     </>
// // //   );
// // // }



// // 'use client';

// // import { useState, useEffect, useRef, useCallback } from 'react';
// // import { processContent } from '../../../../utils/contentProcessor';

// // /* ============================================================================
// //    PolynomialCalculator — v6
// //    Fixes from v5:
// //    - Slot inputs now store text strings (not numbers), so user can clear a
// //      slot, type "-" first, type a decimal point, etc. Select-on-focus so
// //      clicking a slot containing "0" lets the next keystroke replace it.
// //      Visual classes (zero / negative) derive from the parsed value, not
// //      the raw text.
// //    - Dial-insert "Tap to insert" button no longer routes through KaTeX —
// //      uses plain unicode superscripts with an italic serif so vertical
// //      metrics are predictable and the label can&apos;t be clipped by KaTeX&apos;s
// //      strut. Button uses min-height + generous padding.
// // ============================================================================ */

// // /* ===== Math utilities ==================================================== */

// // const SUPER_MAP_TO = { '⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9' };
// // const SUPER_MAP_FROM = { '0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹' };
// // function toSuper(n) {
// //   return String(n).split('').map(d => SUPER_MAP_FROM[d] || d).join('');
// // }

// // function parsePolynomial(text) {
// //   if (text == null) return null;
// //   let s = String(text).trim();
// //   if (!s) return null;
// //   s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, run => '^' + run.split('').map(c => SUPER_MAP_TO[c]).join(''));
// //   s = s.replace(/\*\*/g, '^').replace(/[−–—]/g, '-').replace(/\s+/g, '').replace(/\*/g, '');
// //   s = s.replace(/\^\{(-?\d+)\}/g, '^$1');
// //   if (!s) return null;
// //   let w = s.replace(/-/g, '+-');
// //   if (w.startsWith('+')) w = w.slice(1);
// //   const terms = w.split('+').filter(t => t.length > 0);
// //   if (!terms.length) return null;

// //   const TERM_RE = /^(-?)(\d*\.?\d*)([a-zA-Z]?)(?:\^(-?\d+))?$/;
// //   const byPow = {};
// //   for (const t of terms) {
// //     const m = t.match(TERM_RE);
// //     if (!m) return null;
// //     const [, sign, numStr, variable, powerStr] = m;
// //     let coef;
// //     if (numStr === '' || numStr === '.') {
// //       if (!variable) return null;
// //       coef = 1;
// //     } else {
// //       coef = parseFloat(numStr);
// //       if (isNaN(coef)) return null;
// //     }
// //     if (sign === '-') coef = -coef;
// //     let pow;
// //     if (!variable) pow = 0;
// //     else if (powerStr == null || powerStr === '') pow = 1;
// //     else {
// //       pow = parseInt(powerStr, 10);
// //       if (isNaN(pow) || pow < 0) return null;
// //     }
// //     byPow[pow] = (byPow[pow] || 0) + coef;
// //   }
// //   const powers = Object.keys(byPow).map(Number);
// //   if (!powers.length) return null;
// //   const maxPow = Math.max(...powers);
// //   const coefs = [];
// //   for (let p = maxPow; p >= 0; p--) coefs.push(byPow[p] || 0);
// //   return coefs;
// // }

// // function coefsToInputString(coefs) {
// //   if (!coefs || !coefs.length) return '0';
// //   const degree = coefs.length - 1;
// //   const parts = [];
// //   coefs.forEach((c, i) => {
// //     const power = degree - i;
// //     if (c === 0) return;
// //     const absC = Math.abs(c);
// //     let term;
// //     if (power === 0)      term = `${absC}`;
// //     else if (power === 1) term = absC === 1 ? 'x'        : `${absC}x`;
// //     else                  term = absC === 1 ? `x^${power}` : `${absC}x^${power}`;
// //     if (parts.length === 0) parts.push(c < 0 ? `-${term}` : term);
// //     else                    parts.push(c < 0 ? ` - ${term}` : ` + ${term}`);
// //   });
// //   return parts.length ? parts.join('') : '0';
// // }

// // function coefsToLatex(coefs) {
// //   if (!coefs || !coefs.length) return '0';
// //   const degree = coefs.length - 1;
// //   const parts = [];
// //   coefs.forEach((c, i) => {
// //     const power = degree - i;
// //     if (c === 0) return;
// //     const absC = Math.abs(c);
// //     let term;
// //     if (power === 0)      term = `${absC}`;
// //     else if (power === 1) term = absC === 1 ? 'x'              : `${absC}x`;
// //     else                  term = absC === 1 ? `x^{${power}}`   : `${absC}x^{${power}}`;
// //     if (parts.length === 0) parts.push(c < 0 ? `-${term}` : term);
// //     else                    parts.push(c < 0 ? `- ${term}` : `+ ${term}`);
// //   });
// //   return parts.length ? parts.join(' ') : '0';
// // }

// // function exprToDisplayLatex(expr) {
// //   if (!expr) return '';
// //   let s = String(expr);
// //   s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, run => '^' + run.split('').map(c => SUPER_MAP_TO[c]).join(''));
// //   s = s.replace(/\^(-?\d+)/g, '^{$1}');
// //   s = s.replace(/\*/g, ' \\cdot ');
// //   s = s.replace(/[−–—]/g, '-');
// //   return s;
// // }

// // function isExprParseable(expr) {
// //   if (!expr || !expr.trim()) return false;
// //   return parsePolynomial(expr) !== null;
// // }

// // /** Slot text → numeric coefficient. Empty / lone "-" / lone "." → 0. */
// // function slotTextToNum(t) {
// //   if (t == null || t === '' || t === '-' || t === '.' || t === '-.') return 0;
// //   const n = parseFloat(t);
// //   return isNaN(n) ? 0 : n;
// // }

// // /** Regex of permitted intermediate states for a slot. */
// // const SLOT_INPUT_RE = /^-?\d*\.?\d*$/;

// // /* ===== Operation data ==================================================== */

// // const OPERATION_ORDER = [
// //   'add', 'subtract', 'multiply',
// //   'long_div', 'synth_div',
// //   'factor', 'zeros', 'simplify',
// // ];

// // const OPERATIONS = {
// //   add: {
// //     label: 'Add',
// //     title: 'Adding polynomials',
// //     sub: 'Sum two or more polynomials, combining like terms across matching degrees.',
// //     learnMoreHref: '#',
// //     mode: 'multi',
// //     symbol: '+',
// //     inputHeader: 'Polynomials to add',
// //     actionLabel: 'Add',
// //     hasGraph: false,
// //     demoInputs: ['2x^2 + 3x - 1', 'x^2 - 5x + 4'],
// //     result: {
// //       primaryLabel: 'Sum',
// //       primaryMath: '3x^2 - 2x + 3',
// //       meta: [
// //         { label: 'Degree', value: '2' },
// //         { label: 'Leading', value: '3' },
// //         { label: 'Constant', value: '3' },
// //       ],
// //     },
// //     steps: [
// //       { title: 'Line up by degree', math: '$2x^2 + 3x - 1$ + $x^2 - 5x + 4$', note: 'Group every term with the same power of $x$ together.' },
// //       { title: 'Sum coefficients of $x^2$', math: '$(2 + 1)x^2 = 3x^2$', note: 'Two and one — straightforward.' },
// //       { title: 'Sum coefficients of $x$', math: '$(3 + (-5))x = -2x$', note: 'The negative sign comes through with the term.' },
// //       { title: 'Sum the constants', math: '$(-1) + 4 = 3$', note: '' },
// //       { title: 'Write in standard form', math: '$3x^2 - 2x + 3$', note: 'Highest degree first, descending.' },
// //     ],
// //     about: {
// //       text: 'Addition of polynomials is term-by-term. Match exponents, sum coefficients, drop any zero terms. The result&apos;s degree is at most the max of the inputs&apos; degrees.',
// //       formula: '\\deg(P_1 + P_2) \\le \\max(\\deg P_1, \\deg P_2)',
// //     },
// //     pitfalls: [
// //       'Adding unlike terms (e.g. treating $x^2$ and $x$ as the same)',
// //       'Dropping a sign when one term is negative',
// //       'Forgetting placeholder zeros when one polynomial skips a degree',
// //     ],
// //     related: ['Subtract polynomials', 'Simplify polynomial', 'Find degree'],
// //   },

// //   subtract: {
// //     label: 'Subtract',
// //     title: 'Subtracting polynomials',
// //     sub: 'Subtract polynomials in order, distributing the minus sign across every term.',
// //     learnMoreHref: '#',
// //     mode: 'multi',
// //     symbol: '-',
// //     inputHeader: 'Polynomials to subtract',
// //     actionLabel: 'Subtract',
// //     hasGraph: false,
// //     demoInputs: ['3x^2 + 2x - 5', 'x^2 - 4x + 1'],
// //     result: {
// //       primaryLabel: 'Difference',
// //       primaryMath: '2x^2 + 6x - 6',
// //       meta: [
// //         { label: 'Degree', value: '2' },
// //         { label: 'Leading', value: '2' },
// //         { label: 'Constant', value: '−6' },
// //       ],
// //     },
// //     steps: [
// //       { title: 'Distribute the minus over $P_2$', math: '$3x^2 + 2x - 5 - (x^2 - 4x + 1)$', note: 'Every sign in $P_2$ flips.' },
// //       { title: 'Rewrite without the parentheses', math: '$3x^2 + 2x - 5 - x^2 + 4x - 1$', note: 'Now it&apos;s pure addition.' },
// //       { title: 'Group like terms', math: '$(3 - 1)x^2 + (2 + 4)x + (-5 - 1)$', note: '' },
// //       { title: 'Simplify each coefficient', math: '$2x^2 + 6x - 6$', note: 'Final answer in standard form.' },
// //     ],
// //     about: {
// //       text: 'Subtraction is addition of the additive inverse. Flip every sign in the subtrahend, then add. Skipping the parenthesis-distribution step is the source of most sign errors.',
// //       formula: 'P_1 - P_2 = P_1 + (-P_2)',
// //     },
// //     pitfalls: [
// //       'Only negating the leading term of $P_2$ instead of every term',
// //       'Forgetting that subtraction is not commutative',
// //       'Combining $x^2$ and $-x^2$ as $-x^4$ (powers don&apos;t subtract)',
// //     ],
// //     related: ['Add polynomials', 'Simplify polynomial', 'Multiply polynomials'],
// //   },

// //   multiply: {
// //     label: 'Multiply',
// //     title: 'Multiplying polynomials',
// //     sub: 'Multiply two or more polynomials and see each pairwise expansion, term-by-term, until the final product is fully simplified.',
// //     learnMoreHref: '#',
// //     mode: 'multi',
// //     symbol: '\\times',
// //     inputHeader: 'Polynomials to multiply',
// //     actionLabel: 'Multiply',
// //     hasGraph: true,
// //     demoInputs: ['x + 2', 'x - 3', '2x + 1'],
// //     result: {
// //       primaryLabel: 'Product',
// //       primaryMath: '2x^3 - 3x^2 - 13x - 6',
// //       meta: [
// //         { label: 'Degree', value: '3' },
// //         { label: 'Leading', value: '2' },
// //         { label: 'Constant', value: '−6' },
// //       ],
// //     },
// //     steps: [
// //       { title: 'Set up the first pair', math: '$(x + 2)(x - 3)$', note: 'Start with the leftmost two polynomials.' },
// //       { title: 'Apply FOIL', math: '$x \\cdot x + x \\cdot (-3) + 2 \\cdot x + 2 \\cdot (-3)$', note: 'First, Outer, Inner, Last — each term of the first across each term of the second.' },
// //       { title: 'Simplify the first product', math: '$x^2 - x - 6$', note: 'Combine like terms: $-3x + 2x = -x$.' },
// //       { title: 'Bring in $P_3$', math: '$(x^2 - x - 6)(2x + 1)$', note: 'Distribute every trinomial term across every binomial term.' },
// //       { title: 'Distribute term by term', math: '$2x^3 + x^2 - 2x^2 - x - 12x - 6$', note: 'Six products total — three from each term of the trinomial.' },
// //       { title: 'Group by degree', math: '$2x^3 + (1 - 2)x^2 + (-1 - 12)x - 6$', note: 'Collect coefficients of matching powers.' },
// //       { title: 'Combine like terms', math: '$2x^3 - 3x^2 - 13x - 6$', note: 'Now we have the final simplified cubic.' },
// //     ],
// //     about: {
// //       text: 'When multiplying three or more polynomials, expand them pairwise from the left. Multiplication is associative, so any grouping works — but left-to-right keeps intermediate degrees small.',
// //       formula: 'P_1 \\cdot P_2 \\cdot P_3 = ((P_1 \\cdot P_2) \\cdot P_3)',
// //     },
// //     pitfalls: [
// //       'Forgetting to distribute the sign with a negative term',
// //       'Mismatching exponents when adding like terms ($x^2$ and $x$ are not alike)',
// //       'Dropping the constant term — every term in $P_1$ multiplies <em>every</em> term in $P_2$',
// //     ],
// //     related: ['Factor result', 'Find zeros of result', 'FOIL method'],
// //   },

// //   long_div: {
// //     label: 'Long division',
// //     title: 'Polynomial long division',
// //     sub: 'Divide one polynomial by another and see every line of the work — leading-term division, multiply-and-subtract, bring-down — until the remainder degree is less than the divisor&apos;s.',
// //     learnMoreHref: '#',
// //     mode: 'dual',
// //     symbol: '\\div',
// //     inputHeader: 'Divide polynomial',
// //     inputLabels: ['Dividend', 'Divisor'],
// //     actionLabel: 'Divide',
// //     hasGraph: true,
// //     demoInputs: ['x^3 - 2x^2 + 4', 'x - 1'],
// //     result: {
// //       primaryLabel: 'Quotient',
// //       primaryMath: 'x^2 - x - 1',
// //       extras: [{ label: 'Remainder', math: '3' }],
// //       identity: '\\dfrac{x^3 - 2x^2 + 4}{x - 1} = x^2 - x - 1 + \\dfrac{3}{x - 1}',
// //       meta: [
// //         { label: 'Quotient degree', value: '2' },
// //         { label: 'Remainder degree', value: '0' },
// //       ],
// //     },
// //     steps: [
// //       { title: 'Insert placeholder zeros', math: '$x^3 - 2x^2 + 0x + 4$', note: 'Make sure every degree from the top down has a coefficient. Missing terms break the line-up.' },
// //       { title: 'Divide leading terms', math: '$\\dfrac{x^3}{x} = x^2$', note: 'First term of the quotient.' },
// //       { title: 'Multiply and subtract', math: '$x^2(x - 1) = x^3 - x^2$, so $(x^3 - 2x^2) - (x^3 - x^2) = -x^2$', note: 'Bring down the next term.' },
// //       { title: 'Divide leading terms again', math: '$\\dfrac{-x^2}{x} = -x$', note: 'Second term of the quotient.' },
// //       { title: 'Multiply and subtract', math: '$-x(x - 1) = -x^2 + x$, so result is $-x$', note: 'Bring down the next term.' },
// //       { title: 'Final leading-term division', math: '$\\dfrac{-x}{x} = -1$', note: 'Third term of the quotient.' },
// //       { title: 'Multiply, subtract, stop', math: '$-1(x - 1) = -x + 1$, remainder $3$', note: 'Remainder degree (0) is less than divisor degree (1), so we stop.' },
// //     ],
// //     about: {
// //       text: 'Long division of polynomials mirrors long division of integers. The quotient&apos;s degree is $\\deg P_1 - \\deg P_2$ when the leading coefficients divide cleanly; otherwise you carry a remainder.',
// //       formula: 'P_1 = P_2 \\cdot Q + R, \\quad \\deg R < \\deg P_2',
// //     },
// //     pitfalls: [
// //       'Forgetting placeholder zeros for missing degrees',
// //       'Subtracting instead of adding when you bring down terms',
// //       'Stopping early — continue until the remainder degree drops below the divisor&apos;s',
// //     ],
// //     related: ['Synthetic division', 'Factor polynomial', 'Remainder theorem'],
// //   },

// //   synth_div: {
// //     label: 'Synthetic',
// //     title: 'Synthetic division',
// //     sub: 'A faster division algorithm when the divisor is linear, $(x - c)$. Works only when the divisor has degree 1 and leading coefficient 1.',
// //     learnMoreHref: '#',
// //     mode: 'dual',
// //     symbol: '\\div',
// //     inputHeader: 'Synthetic division',
// //     inputLabels: ['Dividend', 'Divisor (x − c)'],
// //     actionLabel: 'Divide',
// //     hasGraph: true,
// //     demoInputs: ['x^3 - 2x^2 + 4', 'x - 1'],
// //     result: {
// //       primaryLabel: 'Quotient',
// //       primaryMath: 'x^2 - x - 1',
// //       extras: [{ label: 'Remainder', math: '3' }],
// //       meta: [
// //         { label: 'Quotient degree', value: '2' },
// //       ],
// //     },
// //     steps: [
// //       { title: 'Identify $c$', math: 'Divisor is $x - 1$, so $c = 1$', note: 'Sign flips: $(x - c)$ pattern.' },
// //       { title: 'Write the coefficients', math: '$1, -2, 0, 4$', note: 'Including placeholder zero for the missing $x$ term.' },
// //       { title: 'Bring down the first', math: '$1$', note: '' },
// //       { title: 'Multiply by $c$, add to next', math: '$1 \\cdot 1 = 1$, then $-2 + 1 = -1$', note: '' },
// //       { title: 'Repeat for the next column', math: '$-1 \\cdot 1 = -1$, then $0 + (-1) = -1$', note: '' },
// //       { title: 'Last column gives the remainder', math: '$-1 \\cdot 1 = -1$, then $4 + (-1) = 3$', note: 'Final value is the remainder.' },
// //       { title: 'Read off the quotient', math: 'Coefficients $1, -1, -1$ → $x^2 - x - 1$', note: 'Degree drops by one from the dividend.' },
// //     ],
// //     about: {
// //       text: 'Synthetic division is a shortcut for dividing by a linear factor. It only works when the divisor is monic and linear; for higher-degree or non-monic divisors, fall back to long division.',
// //       formula: 'P(x) \\div (x - c): \\text{ remainder } = P(c)',
// //     },
// //     pitfalls: [
// //       'Using synthetic division with a non-linear divisor — it doesn&apos;t work',
// //       'Sign of $c$: divisor $x + 2$ means $c = -2$, not $+2$',
// //       'Missing placeholder zeros in the coefficient list',
// //     ],
// //     related: ['Long division', 'Remainder theorem', 'Factor polynomial'],
// //   },

// //   factor: {
// //     label: 'Factor',
// //     title: 'Factoring polynomials',
// //     sub: 'Factor a polynomial into its irreducible components, trying GCF, grouping, special forms, and rational roots in sequence.',
// //     learnMoreHref: '#',
// //     mode: 'single',
// //     symbol: null,
// //     inputHeader: 'Polynomial to factor',
// //     actionLabel: 'Factor',
// //     hasGraph: true,
// //     demoInputs: ['x^3 - 2x^2 - x + 2'],
// //     result: {
// //       primaryLabel: 'Factored form',
// //       primaryMath: '(x - 1)(x + 1)(x - 2)',
// //       meta: [
// //         { label: 'Roots', value: '1, −1, 2' },
// //         { label: 'Degree', value: '3' },
// //       ],
// //     },
// //     steps: [
// //       { title: 'Check for a GCF', math: '$x^3 - 2x^2 - x + 2$', note: 'No common factor across all terms — move on.' },
// //       { title: 'Try grouping', math: '$x^2(x - 2) - 1(x - 2)$', note: 'Group first two and last two, factor each pair.' },
// //       { title: 'Factor out the common binomial', math: '$(x - 2)(x^2 - 1)$', note: 'Both pairs share $(x - 2)$.' },
// //       { title: 'Apply difference of squares', math: '$x^2 - 1 = (x - 1)(x + 1)$', note: 'A standard special form.' },
// //       { title: 'Final factored form', math: '$(x - 1)(x + 1)(x - 2)$', note: 'Three linear factors — the polynomial has three real roots.' },
// //     ],
// //     about: {
// //       text: 'Factoring strategies, in order of preference: greatest common factor, grouping, special forms (difference of squares, sum/difference of cubes, perfect square trinomial), then rational root theorem for higher degrees.',
// //       formula: '\\text{GCF} \\to \\text{Grouping} \\to \\text{Special forms} \\to \\text{Rational roots}',
// //     },
// //     pitfalls: [
// //       'Stopping after one factoring step when further factoring is possible',
// //       'Forgetting to factor out a GCF before applying other methods',
// //       'Confusing sum of squares ($x^2 + 1$, irreducible over reals) with difference of squares',
// //     ],
// //     related: ['Find zeros', 'Polynomial long division', 'Rational root theorem'],
// //   },

// //   zeros: {
// //     label: 'Find zeros',
// //     title: 'Find polynomial zeros',
// //     sub: 'Find every real and complex root of a polynomial, including multiplicities.',
// //     learnMoreHref: '#',
// //     mode: 'single',
// //     symbol: null,
// //     inputHeader: 'Polynomial',
// //     actionLabel: 'Find zeros',
// //     hasGraph: true,
// //     demoInputs: ['x^3 - 2x^2 - x + 2'],
// //     result: {
// //       primaryLabel: 'Zeros',
// //       primaryMath: 'x = 1, \\; x = -1, \\; x = 2',
// //       meta: [
// //         { label: 'Real roots', value: '3' },
// //         { label: 'Complex roots', value: '0' },
// //       ],
// //     },
// //     steps: [
// //       { title: 'List rational root candidates', math: 'Candidates: $\\pm 1, \\pm 2$', note: 'Rational roots are $\\pm \\frac{p}{q}$ where $p$ divides the constant and $q$ divides the leading coefficient.' },
// //       { title: 'Test $x = 1$', math: '$P(1) = 1 - 2 - 1 + 2 = 0$', note: '$x = 1$ is a root.' },
// //       { title: 'Divide out $(x - 1)$', math: '$P(x) / (x - 1) = x^2 - x - 2$', note: 'Synthetic division by the found root.' },
// //       { title: 'Factor the quotient', math: '$x^2 - x - 2 = (x - 2)(x + 1)$', note: '' },
// //       { title: 'Read off all zeros', math: '$x = 1, x = 2, x = -1$', note: 'Three distinct real roots, each with multiplicity 1.' },
// //     ],
// //     about: {
// //       text: 'Every polynomial of degree $n$ has exactly $n$ roots over the complex numbers, counted with multiplicity. Real polynomials with odd degree always have at least one real root.',
// //       formula: '\\text{deg}(P) = n \\Rightarrow n \\text{ complex roots (with multiplicity)}',
// //     },
// //     pitfalls: [
// //       'Forgetting that some roots may be complex even when the polynomial has real coefficients',
// //       'Counting a repeated root only once',
// //       'Stopping at the first root without dividing it out and continuing',
// //     ],
// //     related: ['Factor polynomial', 'Rational root theorem', 'Synthetic division'],
// //   },

// //   simplify: {
// //     label: 'Simplify',
// //     title: 'Simplify polynomial',
// //     sub: 'Combine like terms and rewrite the polynomial in standard form, descending by degree.',
// //     learnMoreHref: '#',
// //     mode: 'single',
// //     symbol: null,
// //     inputHeader: 'Polynomial to simplify',
// //     actionLabel: 'Simplify',
// //     hasGraph: false,
// //     demoInputs: ['3x + 2x^2 - 5 + x - 2x^2 + 4'],
// //     result: {
// //       primaryLabel: 'Simplified',
// //       primaryMath: '4x - 1',
// //       meta: [
// //         { label: 'Degree', value: '1' },
// //         { label: 'Leading', value: '4' },
// //         { label: 'Constant', value: '−1' },
// //       ],
// //     },
// //     steps: [
// //       { title: 'List every term', math: '$3x, \\; 2x^2, \\; -5, \\; x, \\; -2x^2, \\; 4$', note: 'Pull them apart so each can be sorted by degree.' },
// //       { title: 'Group like terms', math: '$x^2$: $2 - 2$; $x$: $3 + 1$; constants: $-5 + 4$', note: '' },
// //       { title: 'Combine each group', math: '$0x^2 + 4x - 1$', note: 'The $x^2$ terms cancel completely.' },
// //       { title: 'Drop zero terms, write in standard form', math: '$4x - 1$', note: 'No $x^2$ term remains, so the result is degree 1.' },
// //     ],
// //     about: {
// //       text: 'A polynomial is in standard form when its terms appear in descending degree order, with no like terms left to combine and no zero terms written out.',
// //       formula: 'a_n x^n + a_{n-1} x^{n-1} + \\ldots + a_1 x + a_0',
// //     },
// //     pitfalls: [
// //       'Leaving like terms uncombined in the final answer',
// //       'Writing terms in ascending instead of descending degree',
// //       'Including a $0x^k$ term in the simplified form',
// //     ],
// //     related: ['Add polynomials', 'Find degree', 'Standard form'],
// //   },
// // };

// // /* ===== Styles ============================================================ */
// // const CSS = `
// // .pcalc-page {
// //   width: 90%;
// //   max-width: 1400px;
// //   margin: 0 auto;
// //   padding: 1.5rem 0 3rem;
// //   font-family: var(--ms-font-sans, 'Inter', -apple-system, BlinkMacSystemFont, sans-serif);
// //   font-size: 0.95rem;
// //   line-height: 1.5;
// //   color: var(--ms-text, #0f172a);
// //   -webkit-font-smoothing: antialiased;
// // }
// // .pcalc-page * { box-sizing: border-box; }

// // .pcalc-header { margin-bottom: 1rem; }
// // .pcalc-eyebrow {
// //   font-size: 0.7rem; font-weight: 600; letter-spacing: 0.14em;
// //   text-transform: uppercase; color: var(--ms-primary, #1d4ed8);
// //   margin-bottom: 0.35rem;
// // }
// // .pcalc-title-row { display: flex; align-items: center; gap: 0.55rem; position: relative; }
// // .pcalc-title {
// //   font-family: var(--ms-font-serif, 'Playfair Display', Georgia, serif);
// //   font-weight: 700; font-size: 1.65rem; margin: 0; letter-spacing: -0.005em;
// // }

// // .pcalc-help-wrap { position: relative; display: inline-block; }
// // .pcalc-help-btn {
// //   width: 22px; height: 22px; border-radius: 50%;
// //   background: transparent;
// //   border: 1.5px solid var(--ms-primary-light, #dbeafe);
// //   color: var(--ms-primary, #1d4ed8);
// //   font-family: inherit; font-size: 0.78rem; font-weight: 700;
// //   cursor: pointer; padding: 0; line-height: 1;
// //   display: inline-flex; align-items: center; justify-content: center;
// //   transition: all 0.12s;
// // }
// // .pcalc-help-btn:hover,
// // .pcalc-help-wrap.is-open .pcalc-help-btn {
// //   background: var(--ms-primary-light, #dbeafe);
// //   border-color: var(--ms-primary, #1d4ed8);
// // }
// // .pcalc-tooltip {
// //   position: absolute; top: calc(100% + 10px); left: 50%; transform: translateX(-50%);
// //   width: 320px; max-width: 90vw;
// //   background: rgba(15, 23, 42, 0.94);
// //   color: rgba(241, 245, 249, 0.95);
// //   border-radius: 8px; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.28);
// //   padding: 0.8rem 0.95rem; font-size: 0.86rem; line-height: 1.45;
// //   z-index: 100; opacity: 0; pointer-events: none;
// //   transition: opacity 0.15s;
// //   backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
// // }
// // .pcalc-tooltip::before {
// //   content: ''; position: absolute; top: -5px; left: 50%;
// //   transform: translateX(-50%) rotate(45deg);
// //   width: 10px; height: 10px;
// //   background: rgba(15, 23, 42, 0.94);
// // }
// // .pcalc-tooltip::after {
// //   content: ''; position: absolute; top: -14px;
// //   left: 0; right: 0; height: 14px;
// // }
// // .pcalc-help-wrap:hover .pcalc-tooltip,
// // .pcalc-help-wrap.is-open .pcalc-tooltip,
// // .pcalc-help-btn:focus-visible + .pcalc-tooltip {
// //   opacity: 1; pointer-events: auto;
// // }
// // .pcalc-tooltip p { margin: 0 0 0.6rem; color: rgba(241, 245, 249, 0.88); }
// // .pcalc-tooltip-link {
// //   display: inline-flex; align-items: center; gap: 0.25rem;
// //   color: #93c5fd; font-weight: 600; font-size: 0.84rem; text-decoration: none;
// // }
// // .pcalc-tooltip-link:hover { color: #dbeafe; text-decoration: underline; }

// // .pcalc-ops {
// //   display: flex; align-items: center; gap: 0.7rem; flex-wrap: wrap;
// //   margin: 1.2rem 0 1.2rem; padding: 0.5rem 0.65rem 0.5rem 0.85rem;
// //   background: var(--ms-card-bg, #fff); border: 1px solid var(--ms-border, #e2e8f0);
// //   border-radius: 8px; box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
// // }
// // .pcalc-ops-label {
// //   font-size: 0.66rem; font-weight: 700; letter-spacing: 0.16em;
// //   text-transform: uppercase; color: var(--ms-text-muted, #64748b);
// //   padding: 0.1rem 0.85rem 0.1rem 0;
// //   border-right: 1px solid var(--ms-border, #e2e8f0);
// //   align-self: stretch; display: inline-flex; align-items: center;
// // }
// // .pcalc-ops-list { display: flex; flex-wrap: wrap; gap: 0.25rem; }
// // .pcalc-op-btn {
// //   font-family: inherit; font-size: 0.84rem; font-weight: 500;
// //   padding: 0.42rem 0.85rem; background: transparent;
// //   border: 1px solid transparent; border-radius: 5px;
// //   color: var(--ms-text-soft, #475569); cursor: pointer;
// //   transition: all 0.1s; white-space: nowrap;
// // }
// // .pcalc-op-btn:hover { background: var(--ms-primary-light, #dbeafe); color: var(--ms-primary-dark, #1e3a8a); }
// // .pcalc-op-btn.is-active { background: var(--ms-primary, #1d4ed8); color: #fff; }

// // .pcalc-grid { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: start; }
// // @media (max-width: 980px) { .pcalc-grid { grid-template-columns: 1fr; } }

// // .pcalc-card {
// //   background: var(--ms-card-bg, #fff); border: 1px solid var(--ms-border, #e2e8f0);
// //   border-radius: 11px; box-shadow: 0 2px 6px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04);
// //   margin-bottom: 1.1rem; overflow: hidden;
// // }
// // .pcalc-card-header {
// //   background: var(--ms-primary, #1d4ed8); color: #fff;
// //   padding: 0.7rem 1.15rem;
// //   font-family: var(--ms-font-serif, 'Playfair Display', Georgia, serif);
// //   font-weight: 600; font-size: 1.02rem;
// // }
// // .pcalc-card-body { padding: 1.05rem 1.2rem; }

// // .pcalc-input-toolbar {
// //   display: flex; justify-content: flex-end; align-items: center;
// //   margin-bottom: 0.85rem; gap: 0.65rem; flex-wrap: wrap;
// // }
// // .pcalc-mode-toggle {
// //   display: inline-flex; background: #f1f5f9;
// //   border-radius: 8px; padding: 2px;
// // }
// // .pcalc-mode-toggle button {
// //   font-family: inherit; font-size: 0.8rem; font-weight: 500;
// //   padding: 0.35rem 0.75rem; border-radius: 6px; border: none;
// //   background: transparent; color: var(--ms-text-soft, #475569);
// //   cursor: pointer; display: inline-flex; align-items: center; gap: 0.3rem;
// // }
// // .pcalc-mode-toggle button.is-active {
// //   background: #fff; color: var(--ms-text, #0f172a);
// //   box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
// // }

// // .pcalc-poly-list { display: flex; flex-direction: column; gap: 0.6rem; }
// // .pcalc-poly-row {
// //   display: grid; grid-template-columns: 36px 1fr 30px; gap: 0.55rem; align-items: stretch;
// // }
// // .pcalc-poly-row.is-dual { grid-template-columns: 96px 1fr; }
// // .pcalc-poly-row.is-single { grid-template-columns: 36px 1fr; }
// // .pcalc-poly-row.is-editing { grid-template-columns: 1fr; }
// // .pcalc-poly-row.is-editing > .pcalc-poly-tag,
// // .pcalc-poly-row.is-editing > .pcalc-poly-remove { display: none; }

// // .pcalc-poly-tag {
// //   display: inline-flex; align-items: center; justify-content: center;
// //   background: var(--ms-primary-light, #dbeafe);
// //   color: var(--ms-primary-dark, #1e3a8a);
// //   border-radius: 5px;
// //   font-family: var(--ms-font-mono, 'JetBrains Mono', monospace);
// //   font-size: 0.86rem; font-weight: 600;
// // }
// // .pcalc-poly-tag.role { font-family: inherit; font-size: 0.72rem; padding: 0 0.4rem; text-align: center; }

// // .pcalc-poly-box {
// //   position: relative; display: flex; align-items: center;
// //   padding: 0.65rem 0.95rem; min-height: 54px;
// //   background: #fff; border: 2px dashed var(--ms-border-strong, #cbd5e1);
// //   border-radius: 8px; font-size: 1.15rem;
// //   transition: all 0.12s; cursor: pointer;
// // }
// // .pcalc-poly-box:hover { border-color: var(--ms-primary, #1d4ed8); background: #f8faff; }
// // .pcalc-poly-placeholder-tag {
// //   position: absolute; top: 0.35rem; left: 0.7rem;
// //   font-family: var(--ms-font-sans, sans-serif);
// //   font-size: 0.6rem; font-weight: 600; letter-spacing: 0.1em;
// //   text-transform: uppercase; color: var(--ms-text-muted, #64748b);
// // }
// // .pcalc-poly-edit-hint {
// //   position: absolute; right: 0.7rem; bottom: 0.35rem;
// //   font-family: var(--ms-font-sans, sans-serif);
// //   font-size: 0.7rem; color: var(--ms-text-muted, #64748b);
// // }
// // .pcalc-poly-content {
// //   width: 100%; display: flex; align-items: center; padding: 0.2rem 0;
// // }
// // .pcalc-poly-remove {
// //   display: inline-flex; align-items: center; justify-content: center;
// //   width: 30px; height: 30px; align-self: center;
// //   border-radius: 50%; border: 1.5px solid var(--ms-border-strong, #cbd5e1);
// //   background: #fff; color: var(--ms-text-muted, #64748b);
// //   cursor: pointer; font-size: 0.82rem; transition: all 0.12s;
// // }
// // .pcalc-poly-remove:hover {
// //   background: var(--ms-error-bg, #fee2e2);
// //   color: var(--ms-error, #b91c1c);
// //   border-color: var(--ms-error, #b91c1c);
// // }
// // .pcalc-poly-remove.is-hidden { visibility: hidden; }

// // .pcalc-poly-op { display: grid; grid-template-columns: 36px 1fr 30px; gap: 0.55rem; }
// // .pcalc-poly-op.is-dual { grid-template-columns: 96px 1fr; }
// // .pcalc-poly-op-symbol {
// //   grid-column: 2;
// //   font-family: var(--ms-font-serif, 'Playfair Display', Georgia, serif);
// //   font-size: 1.2rem; color: var(--ms-text-soft, #475569); padding: 0.05rem 0;
// // }

// // .pcalc-add-poly {
// //   display: flex; align-items: center; justify-content: center; gap: 0.35rem;
// //   margin-top: 0.6rem; padding: 0.6rem; width: 100%;
// //   font-family: inherit; font-size: 0.85rem; font-weight: 600;
// //   background: transparent; color: var(--ms-primary, #1d4ed8);
// //   border: 1.5px dashed var(--ms-primary, #1d4ed8); border-radius: 8px;
// //   cursor: pointer; transition: all 0.12s;
// // }
// // .pcalc-add-poly:hover { background: var(--ms-primary-light, #dbeafe); }

// // .pcalc-actions { display: flex; gap: 0.55rem; margin-top: 1rem; flex-wrap: wrap; }
// // .pcalc-btn {
// //   font-family: inherit; font-size: 0.9rem; font-weight: 600;
// //   padding: 0.6rem 1.2rem; border-radius: 8px;
// //   border: 1.5px solid transparent; cursor: pointer; transition: all 0.1s;
// // }
// // .pcalc-btn:active { transform: translateY(1px); }
// // .pcalc-btn:disabled { opacity: 0.5; cursor: not-allowed; }
// // .pcalc-btn-primary { background: var(--ms-primary, #1d4ed8); color: #fff; }
// // .pcalc-btn-primary:hover:not(:disabled) { background: var(--ms-primary-hover, #1e40af); }
// // .pcalc-btn-secondary {
// //   background: #fff; color: var(--ms-text-soft, #475569);
// //   border-color: var(--ms-border-strong, #cbd5e1);
// // }
// // .pcalc-btn-secondary:hover { background: #f8fafc; color: var(--ms-text, #0f172a); border-color: var(--ms-text-muted, #64748b); }

// // .pcalc-result {
// //   background: linear-gradient(180deg, #eff6ff 0%, #f0f9ff 100%);
// //   border-left: 3px solid var(--ms-primary, #1d4ed8);
// //   padding: 1rem 1.15rem;
// // }
// // .pcalc-result-eyebrow {
// //   font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em;
// //   text-transform: uppercase; color: var(--ms-primary, #1d4ed8);
// //   margin-bottom: 0.4rem;
// // }
// // .pcalc-result-math { font-size: 1.35rem; color: var(--ms-text, #0f172a); margin-bottom: 0.35rem; }
// // .pcalc-result-extras { display: flex; flex-direction: column; gap: 0.25rem; margin-top: 0.5rem; }
// // .pcalc-result-extra { display: flex; align-items: baseline; gap: 0.5rem; font-size: 0.88rem; }
// // .pcalc-result-extra-label { font-weight: 600; color: var(--ms-text-soft, #475569); min-width: 90px; }
// // .pcalc-result-identity {
// //   margin-top: 0.55rem; padding-top: 0.55rem;
// //   border-top: 1px solid rgba(29, 78, 216, 0.15);
// //   font-size: 1.05rem;
// // }
// // .pcalc-result-subline {
// //   font-size: 0.82rem; color: var(--ms-text-soft, #475569);
// //   display: flex; gap: 0.85rem; flex-wrap: wrap; margin-top: 0.5rem;
// // }
// // .pcalc-result-actions { display: flex; gap: 0.4rem; margin-top: 0.75rem; flex-wrap: wrap; }
// // .pcalc-icon-btn {
// //   display: inline-flex; align-items: center; gap: 0.3rem;
// //   font-family: inherit; font-size: 0.78rem; font-weight: 500;
// //   padding: 0.35rem 0.7rem;
// //   background: rgba(255, 255, 255, 0.75);
// //   border: 1px solid var(--ms-primary-light, #dbeafe);
// //   color: var(--ms-primary, #1d4ed8);
// //   border-radius: 8px; cursor: pointer; transition: all 0.12s;
// // }
// // .pcalc-icon-btn:hover { background: #fff; border-color: var(--ms-primary, #1d4ed8); }

// // .pcalc-section-block { padding: 0.85rem 0; border-bottom: 1px solid var(--ms-border, #e2e8f0); }
// // .pcalc-section-block:first-child { padding-top: 0; }
// // .pcalc-section-block:last-child { padding-bottom: 0; border-bottom: none; }
// // .pcalc-section-title {
// //   font-family: var(--ms-font-serif, 'Playfair Display', Georgia, serif);
// //   font-size: 0.94rem; font-weight: 600; color: var(--ms-text, #0f172a);
// //   margin: 0 0 0.65rem; display: flex; align-items: center; gap: 0.4rem;
// // }
// // .pcalc-section-badge {
// //   font-family: var(--ms-font-sans, sans-serif);
// //   font-size: 0.62rem; font-weight: 600; letter-spacing: 0.1em;
// //   text-transform: uppercase;
// //   background: var(--ms-primary-light, #dbeafe);
// //   color: var(--ms-primary-dark, #1e3a8a);
// //   padding: 0.15rem 0.45rem; border-radius: 999px;
// // }

// // .pcalc-steps-section { position: relative; }
// // .pcalc-steps-scroll {
// //   max-height: 360px; overflow-y: auto; padding-right: 0.25rem;
// //   scrollbar-width: none; -ms-overflow-style: none;
// // }
// // .pcalc-steps-scroll::-webkit-scrollbar { width: 0; height: 0; display: none; }
// // .pcalc-steps-fade {
// //   pointer-events: none; position: absolute;
// //   left: 0; right: 0; bottom: 0; height: 50px;
// //   background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, var(--ms-card-bg, #fff) 75%);
// //   opacity: 0; transition: opacity 0.15s;
// // }
// // .pcalc-steps-fade.is-visible { opacity: 1; }
// // .pcalc-steps-chevron {
// //   position: absolute; bottom: 4px; left: 50%;
// //   transform: translateX(-50%) translateY(0);
// //   display: inline-flex; align-items: center; justify-content: center;
// //   width: 36px; height: 22px; padding: 0;
// //   background: transparent; border: none;
// //   color: var(--ms-primary, #1d4ed8);
// //   cursor: pointer; opacity: 0; pointer-events: none;
// //   border-radius: 4px; transition: opacity 0.18s, background 0.15s;
// //   z-index: 2;
// // }
// // .pcalc-steps-chevron.is-visible {
// //   opacity: 0.7; pointer-events: auto;
// //   animation: pcalc-chevron-bounce 1.8s ease-in-out infinite;
// // }
// // .pcalc-steps-chevron:hover { opacity: 1; background: rgba(29, 78, 216, 0.08); }
// // .pcalc-steps-chevron svg { display: block; }
// // @keyframes pcalc-chevron-bounce {
// //   0%, 100% { transform: translateX(-50%) translateY(0); }
// //   50%      { transform: translateX(-50%) translateY(3px); }
// // }

// // .pcalc-step {
// //   display: grid; grid-template-columns: 28px 1fr; gap: 0.6rem;
// //   padding: 0.65rem 0; border-bottom: 1px solid var(--ms-border, #e2e8f0);
// // }
// // .pcalc-step:last-child { border-bottom: none; }
// // .pcalc-step-num {
// //   width: 24px; height: 24px; border-radius: 50%;
// //   background: var(--ms-primary, #1d4ed8); color: #fff;
// //   font-family: var(--ms-font-serif, 'Playfair Display', Georgia, serif);
// //   font-weight: 600; font-size: 0.78rem;
// //   display: inline-flex; align-items: center; justify-content: center;
// // }
// // .pcalc-step-title {
// //   font-family: var(--ms-font-serif, 'Playfair Display', Georgia, serif);
// //   font-weight: 600; font-size: 0.92rem; margin: 0 0 0.35rem;
// // }
// // .pcalc-step-math {
// //   background: #f8fafc; border: 1px solid var(--ms-border, #e2e8f0);
// //   border-radius: 8px; padding: 0.5rem 0.7rem;
// //   margin-bottom: 0.3rem; font-size: 0.98rem; overflow-x: auto;
// // }
// // .pcalc-step-note { color: var(--ms-text-soft, #475569); font-size: 0.82rem; margin: 0; }

// // .pcalc-method-text { font-size: 0.88rem; color: var(--ms-text-soft, #475569); margin: 0 0 0.55rem; }
// // .pcalc-method-text:last-child { margin-bottom: 0; }
// // .pcalc-method-formula {
// //   background: #f8fafc; border: 1px solid var(--ms-border, #e2e8f0);
// //   border-radius: 8px; padding: 0.6rem 0.85rem; font-size: 1rem; margin: 0.55rem 0;
// // }

// // .pcalc-pitfall-list { margin: 0; padding-left: 1.05rem; }
// // .pcalc-pitfall-list li { margin: 0.35rem 0; font-size: 0.85rem; color: var(--ms-text-soft, #475569); }

// // .pcalc-related-row { display: flex; flex-wrap: wrap; gap: 0.4rem; }
// // .pcalc-related-chip {
// //   font-family: inherit; font-size: 0.78rem; font-weight: 500;
// //   padding: 0.35rem 0.75rem;
// //   background: var(--ms-primary-light, #dbeafe);
// //   color: var(--ms-primary-dark, #1e3a8a);
// //   border: 1px solid transparent; border-radius: 999px;
// //   cursor: pointer; transition: all 0.12s;
// // }
// // .pcalc-related-chip:hover { background: #bfdbfe; }

// // /* ===== Editor shared ===== */
// // .pcalc-editor {
// //   border: 2px solid var(--ms-primary, #1d4ed8);
// //   border-radius: 10px;
// //   background: #fafcff;
// //   padding: 0.85rem 1rem;
// //   display: flex; flex-direction: column; gap: 0.75rem;
// // }
// // .pcalc-editor-head {
// //   display: flex; justify-content: space-between; align-items: center;
// //   gap: 0.6rem; flex-wrap: wrap;
// // }
// // .pcalc-editor-head-title {
// //   font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
// //   text-transform: uppercase; color: var(--ms-primary, #1d4ed8);
// // }
// // .pcalc-editor-head-actions { display: flex; gap: 0.4rem; }
// // .pcalc-editor-head-actions button {
// //   font-family: inherit; font-size: 0.82rem; font-weight: 500;
// //   padding: 0.42rem 0.95rem; border-radius: 6px;
// //   border: 1.5px solid var(--ms-border-strong, #cbd5e1);
// //   background: #fff; color: var(--ms-text-soft, #475569);
// //   cursor: pointer; transition: all 0.1s;
// // }
// // .pcalc-editor-head-actions button:disabled { opacity: 0.45; cursor: not-allowed; }
// // .pcalc-editor-head-actions .is-primary {
// //   background: var(--ms-primary, #1d4ed8); color: #fff;
// //   border-color: var(--ms-primary, #1d4ed8);
// // }
// // .pcalc-editor-head-actions .is-primary:hover:not(:disabled) {
// //   background: var(--ms-primary-hover, #1e40af);
// // }

// // /* ===== Keypad editor ===== */
// // .pcalc-kp-display {
// //   width: 100%; min-height: 64px;
// //   padding: 0.7rem 1rem;
// //   background: #fff; border: 1.5px solid var(--ms-primary, #1d4ed8);
// //   border-radius: 8px;
// //   display: flex; align-items: center;
// //   font-size: 1.35rem; overflow-x: auto;
// //   box-shadow: inset 0 1px 0 rgba(255,255,255,0.8), 0 1px 3px rgba(29,78,216,0.07);
// //   position: relative;
// // }
// // .pcalc-kp-display.is-empty {
// //   justify-content: center;
// //   font-family: var(--ms-font-sans, sans-serif);
// //   font-style: italic; font-size: 0.9rem;
// //   color: var(--ms-text-muted, #64748b);
// //   border-style: dashed; border-color: var(--ms-border-strong, #cbd5e1);
// // }
// // .pcalc-kp-display.is-invalid { border-color: #fca5a5; background: #fffbfb; }

// // .pcalc-kp-layout {
// //   display: grid; grid-template-columns: 1fr 1.05fr; gap: 0.75rem;
// // }
// // @media (max-width: 720px) {
// //   .pcalc-kp-layout { grid-template-columns: 1fr; }
// // }

// // .pcalc-dial-card {
// //   background: linear-gradient(180deg, #f0f5ff 0%, #eff6ff 100%);
// //   border: 1.5px solid var(--ms-primary-light, #dbeafe);
// //   border-radius: 8px; padding: 0.8rem 0.9rem;
// // }
// // .pcalc-dial-title {
// //   font-size: 0.66rem; font-weight: 700; letter-spacing: 0.12em;
// //   text-transform: uppercase; color: var(--ms-primary, #1d4ed8);
// //   margin-bottom: 0.6rem;
// // }
// // .pcalc-dial-row {
// //   display: flex; align-items: center; justify-content: center;
// //   gap: 0.55rem; margin-bottom: 0.7rem;
// // }
// // .pcalc-dial-step {
// //   width: 34px; height: 34px; border-radius: 50%;
// //   border: 1.5px solid var(--ms-primary, #1d4ed8);
// //   background: #fff; color: var(--ms-primary, #1d4ed8);
// //   font-size: 1.1rem; font-weight: 600; cursor: pointer; line-height: 1;
// //   display: inline-flex; align-items: center; justify-content: center;
// //   transition: all 0.12s;
// // }
// // .pcalc-dial-step:hover:not(:disabled) { background: var(--ms-primary, #1d4ed8); color: #fff; }
// // .pcalc-dial-step:disabled { opacity: 0.35; cursor: not-allowed; }

// // /* The big primary insert button — no KaTeX involvement; unicode superscripts only */
// // .pcalc-dial-insert {
// //   min-width: 118px;
// //   min-height: 78px;
// //   padding: 0.7rem 1rem;
// //   background: var(--ms-primary, #1d4ed8); color: #fff;
// //   border: none; border-radius: 8px;
// //   cursor: pointer;
// //   display: inline-flex; align-items: center; justify-content: center;
// //   transition: all 0.12s; box-shadow: 0 2px 6px rgba(29, 78, 216, 0.2);
// //   overflow: hidden;
// // }
// // .pcalc-dial-insert:hover { background: var(--ms-primary-hover, #1e40af); }
// // .pcalc-dial-insert-stack {
// //   display: flex; flex-direction: column;
// //   align-items: center; justify-content: center;
// //   gap: 0.4rem;
// //   line-height: 1;
// // }
// // .pcalc-dial-insert-label {
// //   font-family: var(--ms-font-sans, sans-serif);
// //   font-size: 0.58rem; font-weight: 600;
// //   letter-spacing: 0.1em; text-transform: uppercase;
// //   opacity: 0.88;
// //   margin: 0; line-height: 1;
// //   white-space: nowrap;
// // }
// // .pcalc-dial-insert-math {
// //   font-family: 'Times New Roman', 'STIX Two Math', Georgia, serif;
// //   font-style: italic;
// //   font-size: 1.5rem;
// //   font-weight: 500;
// //   line-height: 1;
// //   letter-spacing: 0.01em;
// // }

// // .pcalc-dial-quick-label { font-size: 0.72rem; font-weight: 600; color: var(--ms-text-soft, #475569); margin-bottom: 0.4rem; }
// // .pcalc-dial-quick { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.4rem; }
// // .pcalc-dial-chip {
// //   height: 38px;
// //   background: #fff; border: 1.5px solid var(--ms-border-strong, #cbd5e1);
// //   border-radius: 6px; font-size: 1.02rem;
// //   color: var(--ms-text, #0f172a); cursor: pointer;
// //   display: flex; align-items: center; justify-content: center;
// //   font-family: inherit;
// //   box-shadow: 0 1px 2px rgba(15,23,42,0.05);
// //   transition: all 0.1s;
// // }
// // .pcalc-dial-chip:hover {
// //   background: var(--ms-primary-light, #dbeafe);
// //   border-color: var(--ms-primary, #1d4ed8);
// //   color: var(--ms-primary-dark, #1e3a8a);
// // }
// // .pcalc-dial-chip.is-active {
// //   background: var(--ms-primary, #1d4ed8); border-color: var(--ms-primary, #1d4ed8); color: #fff;
// // }

// // .pcalc-dial-custom {
// //   margin-top: 0.7rem; padding-top: 0.7rem;
// //   border-top: 1px solid var(--ms-primary-light, #dbeafe);
// //   display: flex; align-items: center; gap: 0.45rem;
// //   font-size: 0.78rem; color: var(--ms-text-soft, #475569); flex-wrap: wrap;
// // }
// // .pcalc-dial-custom input {
// //   width: 54px; height: 30px; padding: 0 0.4rem;
// //   font-family: var(--ms-font-mono, monospace); font-size: 0.95rem; text-align: center;
// //   background: #fff; border: 1.5px solid var(--ms-border-strong, #cbd5e1);
// //   border-radius: 5px; outline: none;
// //   -moz-appearance: textfield;
// // }
// // .pcalc-dial-custom input::-webkit-outer-spin-button,
// // .pcalc-dial-custom input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
// // .pcalc-dial-custom input:focus { border-color: var(--ms-primary, #1d4ed8); box-shadow: 0 0 0 3px rgba(29,78,216,0.14); }

// // .pcalc-kp-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 0.4rem; align-content: start; }
// // .pcalc-kp-btn {
// //   height: 42px; font-family: var(--ms-font-mono, monospace); font-size: 1rem; font-weight: 500;
// //   background: #fff; border: 1.5px solid var(--ms-border-strong, #cbd5e1);
// //   border-radius: 7px; color: var(--ms-text, #0f172a);
// //   cursor: pointer; transition: all 0.08s;
// //   display: flex; align-items: center; justify-content: center;
// //   box-shadow: 0 1px 2px rgba(15,23,42,0.04);
// // }
// // .pcalc-kp-btn:hover { background: var(--ms-primary-light, #dbeafe); border-color: var(--ms-primary, #1d4ed8); color: var(--ms-primary-dark, #1e3a8a); }
// // .pcalc-kp-btn:active { transform: translateY(1px); }
// // .pcalc-kp-btn.op { background: #f1f5f9; }
// // .pcalc-kp-btn.cmd { background: #fef2f2; color: #b91c1c; border-color: #fca5a5; }
// // .pcalc-kp-btn.cmd:hover { background: #fee2e2; }
// // .pcalc-kp-btn.zero { grid-column: span 2; }

// // /* ===== Slots editor ===== */
// // .pcalc-sl-row {
// //   display: flex; flex-wrap: wrap; align-items: center; gap: 0.4rem;
// //   padding: 0.65rem 0.85rem; background: #fff;
// //   border: 1.5px solid var(--ms-border, #e2e8f0);
// //   border-radius: 8px; min-height: 64px;
// // }
// // .pcalc-sl-group { display: inline-flex; align-items: center; gap: 0.3rem; }
// // .pcalc-sl-slot input {
// //   width: 64px; height: 44px; text-align: center;
// //   padding: 0 0.4rem;
// //   font-family: var(--ms-font-mono, monospace); font-size: 1.05rem; font-weight: 500;
// //   background: #fff; border: 1.5px solid var(--ms-border-strong, #cbd5e1);
// //   border-radius: 7px; color: var(--ms-text, #0f172a); outline: none;
// //   transition: all 0.12s;
// // }
// // .pcalc-sl-slot input::placeholder {
// //   color: var(--ms-text-muted, #64748b);
// //   opacity: 0.5;
// // }
// // .pcalc-sl-slot input:focus { border-color: var(--ms-primary, #1d4ed8); box-shadow: 0 0 0 3px rgba(29,78,216,0.16); }
// // .pcalc-sl-slot input.is-zero { background: #f1f5f9; color: var(--ms-text-muted, #64748b); }
// // .pcalc-sl-slot input.is-neg { background: #fef2f2; color: #b91c1c; }
// // .pcalc-sl-power { font-size: 1.05rem; color: var(--ms-text, #0f172a); }
// // .pcalc-sl-op {
// //   font-family: var(--ms-font-mono, monospace); font-size: 1.2rem;
// //   color: var(--ms-text-muted, #64748b); padding: 0 0.15rem;
// // }
// // .pcalc-sl-meta { display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; flex-wrap: wrap; }
// // .pcalc-sl-degree {
// //   display: inline-flex; align-items: center; gap: 0.4rem;
// //   font-size: 0.82rem; color: var(--ms-text-soft, #475569);
// // }
// // .pcalc-sl-degbtn {
// //   width: 28px; height: 28px; border-radius: 50%;
// //   border: 1.5px solid var(--ms-border-strong, #cbd5e1);
// //   background: #fff; color: var(--ms-text-soft, #475569);
// //   cursor: pointer; font-size: 1rem; line-height: 1;
// //   display: inline-flex; align-items: center; justify-content: center;
// //   transition: all 0.12s;
// // }
// // .pcalc-sl-degbtn:hover:not(:disabled) { border-color: var(--ms-primary, #1d4ed8); color: var(--ms-primary, #1d4ed8); background: var(--ms-primary-light, #dbeafe); }
// // .pcalc-sl-degbtn:disabled { opacity: 0.35; cursor: not-allowed; }
// // .pcalc-sl-preview {
// //   padding: 0.5rem 0.8rem;
// //   background: #f8fafc; border: 1px solid var(--ms-border, #e2e8f0);
// //   border-radius: 7px; font-size: 1.05rem; min-height: 2.2rem;
// //   display: flex; align-items: center; gap: 0.5rem;
// // }
// // .pcalc-sl-preview-label {
// //   font-size: 0.68rem; font-weight: 600; letter-spacing: 0.08em;
// //   text-transform: uppercase; color: var(--ms-text-muted, #64748b);
// // }

// // .pcalc-skeleton { min-height: 720px; }
// // `;

// // /* ===== Slots input ======================================================= */

// // function SlotsInput({ initialValue, label, onSave, onCancel }) {
// //   const parsedInit = parsePolynomial(initialValue) || [0];
// //   // Store the raw TEXT per slot so we can represent transient states
// //   // like "", "-", "-.", and the user is never blocked by a phantom "0".
// //   const [coefTexts, setCoefTexts] = useState(() => parsedInit.map(c => String(c)));

// //   const degree = coefTexts.length - 1;
// //   const coefNums = coefTexts.map(slotTextToNum);

// //   const updateCoef = (i, raw) => {
// //     if (!SLOT_INPUT_RE.test(raw)) return; // reject invalid intermediates
// //     const next = coefTexts.slice();
// //     next[i] = raw;
// //     setCoefTexts(next);
// //   };

// //   const incDegree = () => setCoefTexts(['0', ...coefTexts]);
// //   const decDegree = () => { if (coefTexts.length > 1) setCoefTexts(coefTexts.slice(1)); };
// //   const handleSave = () => onSave(coefsToInputString(coefNums));

// //   return (
// //     <div className="pcalc-editor">
// //       <div className="pcalc-editor-head">
// //         <div className="pcalc-editor-head-title">Editing {label} · Slots</div>
// //         <div className="pcalc-editor-head-actions">
// //           <button type="button" onClick={onCancel}>Cancel</button>
// //           <button type="button" className="is-primary" onClick={handleSave}>Save</button>
// //         </div>
// //       </div>

// //       <div className="pcalc-sl-meta">
// //         <div className="pcalc-sl-degree">
// //           <button type="button" className="pcalc-sl-degbtn" onClick={decDegree} disabled={coefTexts.length <= 1} aria-label="Decrease degree">−</button>
// //           <span>Degree <strong>{degree}</strong></span>
// //           <button type="button" className="pcalc-sl-degbtn" onClick={incDegree} aria-label="Increase degree">+</button>
// //         </div>
// //       </div>

// //       <div className="pcalc-sl-row">
// //         {coefTexts.map((txt, i) => {
// //           const power = degree - i;
// //           const num = coefNums[i];
// //           const visualClass =
// //             num === 0 ? 'is-zero' :
// //             num < 0   ? 'is-neg'  : '';
// //           return (
// //             <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
// //               <span className="pcalc-sl-group">
// //                 <span className="pcalc-sl-slot">
// //                   <input
// //                     type="text"
// //                     inputMode="decimal"
// //                     value={txt}
// //                     placeholder="0"
// //                     autoComplete="off"
// //                     spellCheck={false}
// //                     onChange={e => updateCoef(i, e.target.value)}
// //                     onFocus={e => e.target.select()}
// //                     className={visualClass}
// //                     aria-label={power === 0 ? 'Constant' : `Coefficient of x^${power}`}
// //                   />
// //                 </span>
// //                 {power > 0 && (
// //                   <span className="pcalc-sl-power">
// //                     {processContent('$' + (power === 1 ? 'x' : `x^{${power}}`) + '$')}
// //                   </span>
// //                 )}
// //               </span>
// //               {i < coefTexts.length - 1 && <span className="pcalc-sl-op">+</span>}
// //             </span>
// //           );
// //         })}
// //       </div>

// //       <div className="pcalc-sl-preview">
// //         <span className="pcalc-sl-preview-label">Reads as</span>
// //         <span>{processContent('$' + coefsToLatex(coefNums) + '$')}</span>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ===== Keypad input ====================================================== */

// // function KeypadInput({ initialValue, label, onSave, onCancel }) {
// //   const [expr, setExpr] = useState(initialValue || '');
// //   const [power, setPower] = useState(3);

// //   const valid = isExprParseable(expr);

// //   const append = (s) => setExpr(prev => prev + s);
// //   const backspace = () => setExpr(prev => prev.slice(0, -1));
// //   const clearAll = () => setExpr('');
// //   const insertVar = () => {
// //     const token = power <= 1 ? 'x' : 'x^' + power;
// //     setExpr(prev => prev + token);
// //   };
// //   const insertVarAt = (p) => {
// //     const token = p <= 1 ? 'x' : 'x^' + p;
// //     setExpr(prev => prev + token);
// //     setPower(p);
// //   };

// //   // Plain text rendering for the dial preview — no KaTeX involvement,
// //   // so vertical metrics inside the button are predictable.
// //   const dialPlainText = power <= 1 ? 'x' : 'x' + toSuper(power);
// //   const displayLatex = exprToDisplayLatex(expr);

// //   const handleSave = () => {
// //     if (!valid) return;
// //     onSave(expr);
// //   };

// //   return (
// //     <div className="pcalc-editor">
// //       <div className="pcalc-editor-head">
// //         <div className="pcalc-editor-head-title">Editing {label} · Keypad</div>
// //         <div className="pcalc-editor-head-actions">
// //           <button type="button" onClick={onCancel}>Cancel</button>
// //           <button type="button" className="is-primary" onClick={handleSave} disabled={!valid}>Save</button>
// //         </div>
// //       </div>

// //       <div className={
// //         'pcalc-kp-display' +
// //         (!expr.trim() ? ' is-empty' : '') +
// //         (expr.trim() && !valid ? ' is-invalid' : '')
// //       }>
// //         {expr.trim()
// //           ? processContent('$' + displayLatex + '$')
// //           : 'Tap buttons to build a polynomial'}
// //       </div>

// //       <div className="pcalc-kp-layout">
// //         <div className="pcalc-dial-card">
// //           <div className="pcalc-dial-title">Insert x to the power</div>
// //           <div className="pcalc-dial-row">
// //             <button type="button" className="pcalc-dial-step" onClick={() => setPower(p => Math.max(1, p - 1))} disabled={power <= 1} aria-label="Decrease power">−</button>
// //             <button type="button" className="pcalc-dial-insert" onClick={insertVar} aria-label="Insert at current power">
// //               <span className="pcalc-dial-insert-stack">
// //                 <span className="pcalc-dial-insert-label">Tap to insert</span>
// //                 <span className="pcalc-dial-insert-math">{dialPlainText}</span>
// //               </span>
// //             </button>
// //             <button type="button" className="pcalc-dial-step" onClick={() => setPower(p => Math.min(99, p + 1))} disabled={power >= 99} aria-label="Increase power">+</button>
// //           </div>

// //           <div className="pcalc-dial-quick-label">Quick presets</div>
// //           <div className="pcalc-dial-quick">
// //             {[1, 2, 3, 4, 5, 6].map(p => (
// //               <button
// //                 key={p}
// //                 type="button"
// //                 className={'pcalc-dial-chip' + (power === p ? ' is-active' : '')}
// //                 onClick={() => insertVarAt(p)}
// //               >
// //                 {p === 1 ? 'x' : 'x' + toSuper(p)}
// //               </button>
// //             ))}
// //           </div>

// //           <div className="pcalc-dial-custom">
// //             <span>Custom power:</span>
// //             <input
// //               type="number"
// //               min="1"
// //               max="99"
// //               step="1"
// //               value={power}
// //               onChange={e => {
// //                 const v = parseInt(e.target.value, 10);
// //                 if (!isNaN(v) && v >= 1 && v <= 99) setPower(v);
// //               }}
// //             />
// //           </div>
// //         </div>

// //         <div className="pcalc-kp-grid">
// //           <button type="button" className="pcalc-kp-btn" onClick={() => append('7')}>7</button>
// //           <button type="button" className="pcalc-kp-btn" onClick={() => append('8')}>8</button>
// //           <button type="button" className="pcalc-kp-btn" onClick={() => append('9')}>9</button>
// //           <button type="button" className="pcalc-kp-btn op" onClick={() => append(' + ')}>+</button>
// //           <button type="button" className="pcalc-kp-btn op" onClick={() => append(' - ')}>−</button>
// //           <button type="button" className="pcalc-kp-btn cmd" onClick={backspace} aria-label="Backspace">←</button>

// //           <button type="button" className="pcalc-kp-btn" onClick={() => append('4')}>4</button>
// //           <button type="button" className="pcalc-kp-btn" onClick={() => append('5')}>5</button>
// //           <button type="button" className="pcalc-kp-btn" onClick={() => append('6')}>6</button>
// //           <button type="button" className="pcalc-kp-btn op" onClick={() => append('*')}>×</button>
// //           <button type="button" className="pcalc-kp-btn op" onClick={() => append('/')}>÷</button>
// //           <button type="button" className="pcalc-kp-btn cmd" onClick={clearAll} aria-label="Clear">C</button>

// //           <button type="button" className="pcalc-kp-btn" onClick={() => append('1')}>1</button>
// //           <button type="button" className="pcalc-kp-btn" onClick={() => append('2')}>2</button>
// //           <button type="button" className="pcalc-kp-btn" onClick={() => append('3')}>3</button>
// //           <button type="button" className="pcalc-kp-btn op" onClick={() => append('(')}>(</button>
// //           <button type="button" className="pcalc-kp-btn op" onClick={() => append(')')}>)</button>
// //           <button type="button" className="pcalc-kp-btn op" onClick={() => append('.')}>.</button>

// //           <button type="button" className="pcalc-kp-btn zero" onClick={() => append('0')}>0</button>
// //           <button type="button" className="pcalc-kp-btn op" onClick={() => append('^')}>^</button>
// //           <button type="button" className="pcalc-kp-btn op" onClick={() => append('=')}>=</button>
// //           <button type="button" className="pcalc-kp-btn op" onClick={() => append(' ')}>␣</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ===== Main component ==================================================== */

// // export default function PolynomialCalculator({ defaultOperation = 'multiply' }) {
// //   const [mounted, setMounted] = useState(false);
// //   const [opKey, setOpKey] = useState(defaultOperation);
// //   const [inputMode, setInputMode] = useState('keypad');
// //   const [polynomials, setPolynomials] = useState(() => OPERATIONS[defaultOperation].demoInputs);
// //   const [editingIndex, setEditingIndex] = useState(null);
// //   const [showFade, setShowFade] = useState(false);
// //   const [helpOpen, setHelpOpen] = useState(false);

// //   const stepsScrollRef = useRef(null);
// //   const helpWrapRef = useRef(null);
// //   const op = OPERATIONS[opKey];

// //   useEffect(() => { setMounted(true); }, []);

// //   useEffect(() => {
// //     setPolynomials(OPERATIONS[opKey].demoInputs);
// //     setEditingIndex(null);
// //     setHelpOpen(false);
// //   }, [opKey]);

// //   const updateFade = useCallback(() => {
// //     const el = stepsScrollRef.current;
// //     if (!el) return;
// //     const overflowing = el.scrollHeight > el.clientHeight + 2;
// //     const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 4;
// //     setShowFade(overflowing && !atBottom);
// //   }, []);

// //   useEffect(() => {
// //     if (!mounted) return;
// //     updateFade();
// //     const el = stepsScrollRef.current;
// //     if (el) el.addEventListener('scroll', updateFade);
// //     window.addEventListener('resize', updateFade);
// //     return () => {
// //       if (el) el.removeEventListener('scroll', updateFade);
// //       window.removeEventListener('resize', updateFade);
// //     };
// //   }, [mounted, opKey, updateFade]);

// //   useEffect(() => {
// //     if (!helpOpen) return;
// //     const onDocClick = (e) => {
// //       if (helpWrapRef.current && !helpWrapRef.current.contains(e.target)) {
// //         setHelpOpen(false);
// //       }
// //     };
// //     document.addEventListener('mousedown', onDocClick);
// //     return () => document.removeEventListener('mousedown', onDocClick);
// //   }, [helpOpen]);

// //   const handleAddPolynomial = () => setPolynomials(prev => [...prev, 'x + 1']);
// //   const handleRemovePolynomial = (idx) => {
// //     setPolynomials(prev => prev.filter((_, i) => i !== idx));
// //     if (editingIndex === idx) setEditingIndex(null);
// //   };
// //   const handleEditPolynomial = (idx) => setEditingIndex(idx);
// //   const handleCloseEditor = () => setEditingIndex(null);
// //   const handleSavePolynomial = (idx, newValue) => {
// //     setPolynomials(prev => {
// //       const next = prev.slice();
// //       next[idx] = newValue;
// //       return next;
// //     });
// //     setEditingIndex(null);
// //   };

// //   const handleScrollStepsDown = () => {
// //     const el = stepsScrollRef.current;
// //     if (!el) return;
// //     el.scrollBy({ top: Math.max(120, el.clientHeight * 0.7), behavior: 'smooth' });
// //   };

// //   if (!mounted) return <div className="pcalc-page pcalc-skeleton" aria-busy="true" />;

// //   const renderEditor = (idx, label, value) => {
// //     const props = {
// //       initialValue: value,
// //       label,
// //       onSave: (v) => handleSavePolynomial(idx, v),
// //       onCancel: handleCloseEditor,
// //     };
// //     return inputMode === 'keypad' ? <KeypadInput {...props} /> : <SlotsInput {...props} />;
// //   };

// //   const renderPolyBox = (idx, label, poly) => (
// //     <div className="pcalc-poly-box" onClick={() => handleEditPolynomial(idx)} role="button" tabIndex={0}>
// //       <span className="pcalc-poly-placeholder-tag">{label}</span>
// //       <span className="pcalc-poly-content">
// //         {processContent('$' + exprToDisplayLatex(poly) + '$')}
// //       </span>
// //       <span className="pcalc-poly-edit-hint">✎ Tap to edit</span>
// //     </div>
// //   );

// //   const buildRow = (idx, opts) => {
// //     const { tag, label, poly, single, dual, role } = opts;
// //     const isEditing = editingIndex === idx;
// //     const rowClass = 'pcalc-poly-row' +
// //       (single ? ' is-single' : '') +
// //       (dual ? ' is-dual' : '') +
// //       (isEditing ? ' is-editing' : '');

// //     return (
// //       <div key={`row-${idx}`} className={rowClass}>
// //         {!isEditing && (
// //           <div className={'pcalc-poly-tag' + (role ? ' role' : '')}>
// //             {role ? tag : <>P<sub>{idx + 1}</sub></>}
// //           </div>
// //         )}
// //         {isEditing ? renderEditor(idx, label, poly) : renderPolyBox(idx, label, poly)}
// //         {!single && !dual && !isEditing && (
// //           <button
// //             className={'pcalc-poly-remove' + (polynomials.length <= 2 ? ' is-hidden' : '')}
// //             onClick={() => handleRemovePolynomial(idx)}
// //             aria-label="Remove polynomial"
// //             type="button"
// //           >✕</button>
// //         )}
// //       </div>
// //     );
// //   };

// //   const renderInputs = () => {
// //     if (op.mode === 'single') {
// //       return [buildRow(0, { tag: 'P', label: 'Polynomial', poly: polynomials[0], single: true })];
// //     }
// //     if (op.mode === 'dual') {
// //       const labels = op.inputLabels || ['Top', 'Bottom'];
// //       return [
// //         buildRow(0, { tag: labels[0], label: labels[0], poly: polynomials[0], dual: true, role: true }),
// //         <div key="op-0" className="pcalc-poly-op is-dual">
// //           <span className="pcalc-poly-op-symbol">{processContent('$' + op.symbol + '$')}</span>
// //         </div>,
// //         buildRow(1, { tag: labels[1], label: labels[1], poly: polynomials[1], dual: true, role: true }),
// //       ];
// //     }
// //     const out = [];
// //     polynomials.forEach((poly, idx) => {
// //       out.push(buildRow(idx, {
// //         tag: 'P' + (idx + 1),
// //         label: `Polynomial ${idx + 1}`,
// //         poly,
// //       }));
// //       if (idx < polynomials.length - 1) {
// //         out.push(
// //           <div key={`op-${idx}`} className="pcalc-poly-op">
// //             <span className="pcalc-poly-op-symbol">{processContent('$' + op.symbol + '$')}</span>
// //           </div>
// //         );
// //       }
// //     });
// //     return out;
// //   };

// //   return (
// //     <>
// //       <style>{CSS}</style>
// //       <div className="pcalc-page">

// //         <header className="pcalc-header">
// //           <div className="pcalc-eyebrow">Algebra · Polynomial tools</div>
// //           <div className="pcalc-title-row">
// //             <h1 className="pcalc-title">{op.title}</h1>
// //             <div className={'pcalc-help-wrap' + (helpOpen ? ' is-open' : '')} ref={helpWrapRef}>
// //               <button
// //                 type="button"
// //                 className="pcalc-help-btn"
// //                 aria-label="More info about this operation"
// //                 aria-expanded={helpOpen}
// //                 onClick={() => setHelpOpen(o => !o)}
// //               >?</button>
// //               <div className="pcalc-tooltip" role="tooltip">
// //                 <p>{processContent(op.sub)}</p>
// //                 <a href={op.learnMoreHref || '#'} className="pcalc-tooltip-link">Learn more →</a>
// //               </div>
// //             </div>
// //           </div>
// //         </header>

// //         {/*
// //           Folder tabs — commented out until content sub-pages exist.

// //           <nav className="pcalc-tabs" role="tablist">
// //             <button className="pcalc-tab is-active" type="button">Calculator</button>
// //             <button className="pcalc-tab" type="button">How it works</button>
// //             <button className="pcalc-tab" type="button">Worked examples</button>
// //           </nav>
// //         */}

// //         <div className="pcalc-ops">
// //           <div className="pcalc-ops-label">Operation</div>
// //           <div className="pcalc-ops-list">
// //             {OPERATION_ORDER.map(key => (
// //               <button
// //                 key={key}
// //                 type="button"
// //                 className={'pcalc-op-btn' + (key === opKey ? ' is-active' : '')}
// //                 onClick={() => setOpKey(key)}
// //               >
// //                 {OPERATIONS[key].label}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="pcalc-grid">

// //           <div>
// //             <section className="pcalc-card">
// //               <div className="pcalc-card-header">{op.inputHeader}</div>
// //               <div className="pcalc-card-body">

// //                 <div className="pcalc-input-toolbar">
// //                   <div className="pcalc-mode-toggle">
// //                     <button type="button" className={inputMode === 'keypad' ? 'is-active' : ''} onClick={() => setInputMode('keypad')}>⌨ Keypad</button>
// //                     <button type="button" className={inputMode === 'slots' ? 'is-active' : ''} onClick={() => setInputMode('slots')}>▦ Slots</button>
// //                   </div>
// //                 </div>

// //                 <div className="pcalc-poly-list">
// //                   {renderInputs()}
// //                 </div>

// //                 {op.mode === 'multi' && (
// //                   <button type="button" className="pcalc-add-poly" onClick={handleAddPolynomial}>
// //                     + Add another polynomial
// //                   </button>
// //                 )}

// //                 <div className="pcalc-actions">
// //                   <button type="button" className="pcalc-btn pcalc-btn-primary">{op.actionLabel}</button>
// //                   <button type="button" className="pcalc-btn pcalc-btn-secondary" onClick={() => setPolynomials(op.demoInputs)}>Clear</button>
// //                 </div>

// //               </div>
// //             </section>

// //             <section className="pcalc-card">
// //               <div className="pcalc-card-header">Result</div>
// //               <div className="pcalc-card-body" style={{ padding: 0 }}>
// //                 <div className="pcalc-result">
// //                   <div className="pcalc-result-eyebrow">{op.result.primaryLabel}</div>
// //                   <div className="pcalc-result-math">
// //                     {processContent('$' + op.result.primaryMath + '$')}
// //                   </div>
// //                   {op.result.extras && op.result.extras.length > 0 && (
// //                     <div className="pcalc-result-extras">
// //                       {op.result.extras.map((ex, i) => (
// //                         <div className="pcalc-result-extra" key={i}>
// //                           <span className="pcalc-result-extra-label">{ex.label}:</span>
// //                           <span>{processContent('$' + ex.math + '$')}</span>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   )}
// //                   {op.result.identity && (
// //                     <div className="pcalc-result-identity">
// //                       {processContent('$' + op.result.identity + '$')}
// //                     </div>
// //                   )}
// //                   {op.result.meta && op.result.meta.length > 0 && (
// //                     <div className="pcalc-result-subline">
// //                       {op.result.meta.map((m, i) => (
// //                         <span key={i}>{m.label}: <strong>{m.value}</strong></span>
// //                       ))}
// //                     </div>
// //                   )}
// //                   <div className="pcalc-result-actions">
// //                     <button type="button" className="pcalc-icon-btn">⧉ Copy LaTeX</button>
// //                     <button type="button" className="pcalc-icon-btn">↗ Share</button>
// //                     {op.hasGraph && (
// //                       <button type="button" className="pcalc-icon-btn">📈 Graph</button>
// //                     )}
// //                   </div>
// //                 </div>
// //               </div>
// //             </section>
// //           </div>

// //           <div>
// //             <section className="pcalc-card">
// //               <div className="pcalc-card-header">Solution &amp; explanation</div>
// //               <div className="pcalc-card-body">

// //                 <div className="pcalc-section-block pcalc-steps-section">
// //                   <h3 className="pcalc-section-title">
// //                     Step-by-step
// //                     <span className="pcalc-section-badge">{op.steps.length} steps</span>
// //                   </h3>
// //                   <div className="pcalc-steps-scroll" ref={stepsScrollRef}>
// //                     {op.steps.map((step, i) => (
// //                       <div className="pcalc-step" key={i}>
// //                         <div className="pcalc-step-num">{i + 1}</div>
// //                         <div>
// //                           <h4 className="pcalc-step-title">{processContent(step.title)}</h4>
// //                           <div className="pcalc-step-math">{processContent(step.math)}</div>
// //                           {step.note && (
// //                             <p className="pcalc-step-note">{processContent(step.note)}</p>
// //                           )}
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                   <div className={'pcalc-steps-fade' + (showFade ? ' is-visible' : '')} />
// //                   <button
// //                     type="button"
// //                     className={'pcalc-steps-chevron' + (showFade ? ' is-visible' : '')}
// //                     onClick={handleScrollStepsDown}
// //                     aria-label="Scroll for more steps"
// //                     tabIndex={showFade ? 0 : -1}
// //                   >
// //                     <svg width="20" height="10" viewBox="0 0 20 10" aria-hidden="true">
// //                       <path d="M2 2 L10 8 L18 2" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
// //                     </svg>
// //                   </button>
// //                 </div>

// //                 <div className="pcalc-section-block">
// //                   <h3 className="pcalc-section-title">About this method</h3>
// //                   <p className="pcalc-method-text">{processContent(op.about.text)}</p>
// //                   {op.about.formula && (
// //                     <div className="pcalc-method-formula">
// //                       {processContent('$' + op.about.formula + '$')}
// //                     </div>
// //                   )}
// //                 </div>

// //                 <div className="pcalc-section-block">
// //                   <h3 className="pcalc-section-title">Common pitfalls</h3>
// //                   <ul className="pcalc-pitfall-list">
// //                     {op.pitfalls.map((p, i) => (
// //                       <li key={i}>{processContent(p)}</li>
// //                     ))}
// //                   </ul>
// //                 </div>

// //                 <div className="pcalc-section-block">
// //                   <h3 className="pcalc-section-title">Related tools</h3>
// //                   <div className="pcalc-related-row">
// //                     {op.related.map((r, i) => (
// //                       <button type="button" className="pcalc-related-chip" key={i}>{r}</button>
// //                     ))}
// //                   </div>
// //                 </div>

// //               </div>
// //             </section>
// //           </div>

// //         </div>

// //       </div>
// //     </>
// //   );
// // }




// 'use client';

// import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
// import { processContent } from '../../../../utils/contentProcessor';
// import { DEFAULT_OPERATIONS, DEFAULT_OPERATION_ORDER } from './polynomialCalculatorData';

// /* ============================================================================
//    PolynomialCalculator — v7
//    Changes from v6:
//    - All default operation data lives in polynomialCalculatorData.js and
//      gets imported. The component itself no longer carries the dataset.
//    - Component accepts two new props:
//        operations      — partial override map, merged two levels deep with
//                          the defaults (top-level fields + nested result/about
//                          field-merge). Any operation key the caller omits
//                          falls back to the default entirely.
//        operationOrder  — replaces the default order array if passed.
//    - Every dependent field is now optional and renders only when present:
//        learnMoreHref (tooltip Learn more link)
//        hasGraph      (graph button on the result card)
//        related       (whole Related tools section; chips become links when
//                       they carry an href, plain buttons otherwise)
//        about         (whole About this method section; formula sub-optional)
//        pitfalls      (whole Common pitfalls section)
//        steps         (whole Step-by-step section)
//        result.extras / result.identity / result.meta
//        inputLabels   (only relevant in dual mode)
// ============================================================================ */

// /* ===== Math utilities ==================================================== */

// const SUPER_MAP_TO = { '⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9' };
// const SUPER_MAP_FROM = { '0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹' };
// function toSuper(n) {
//   return String(n).split('').map(d => SUPER_MAP_FROM[d] || d).join('');
// }

// function parsePolynomial(text) {
//   if (text == null) return null;
//   let s = String(text).trim();
//   if (!s) return null;
//   s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, run => '^' + run.split('').map(c => SUPER_MAP_TO[c]).join(''));
//   s = s.replace(/\*\*/g, '^').replace(/[−–—]/g, '-').replace(/\s+/g, '').replace(/\*/g, '');
//   s = s.replace(/\^\{(-?\d+)\}/g, '^$1');
//   if (!s) return null;
//   let w = s.replace(/-/g, '+-');
//   if (w.startsWith('+')) w = w.slice(1);
//   const terms = w.split('+').filter(t => t.length > 0);
//   if (!terms.length) return null;

//   const TERM_RE = /^(-?)(\d*\.?\d*)([a-zA-Z]?)(?:\^(-?\d+))?$/;
//   const byPow = {};
//   for (const t of terms) {
//     const m = t.match(TERM_RE);
//     if (!m) return null;
//     const [, sign, numStr, variable, powerStr] = m;
//     let coef;
//     if (numStr === '' || numStr === '.') {
//       if (!variable) return null;
//       coef = 1;
//     } else {
//       coef = parseFloat(numStr);
//       if (isNaN(coef)) return null;
//     }
//     if (sign === '-') coef = -coef;
//     let pow;
//     if (!variable) pow = 0;
//     else if (powerStr == null || powerStr === '') pow = 1;
//     else {
//       pow = parseInt(powerStr, 10);
//       if (isNaN(pow) || pow < 0) return null;
//     }
//     byPow[pow] = (byPow[pow] || 0) + coef;
//   }
//   const powers = Object.keys(byPow).map(Number);
//   if (!powers.length) return null;
//   const maxPow = Math.max(...powers);
//   const coefs = [];
//   for (let p = maxPow; p >= 0; p--) coefs.push(byPow[p] || 0);
//   return coefs;
// }

// function coefsToInputString(coefs) {
//   if (!coefs || !coefs.length) return '0';
//   const degree = coefs.length - 1;
//   const parts = [];
//   coefs.forEach((c, i) => {
//     const power = degree - i;
//     if (c === 0) return;
//     const absC = Math.abs(c);
//     let term;
//     if (power === 0)      term = `${absC}`;
//     else if (power === 1) term = absC === 1 ? 'x'        : `${absC}x`;
//     else                  term = absC === 1 ? `x^${power}` : `${absC}x^${power}`;
//     if (parts.length === 0) parts.push(c < 0 ? `-${term}` : term);
//     else                    parts.push(c < 0 ? ` - ${term}` : ` + ${term}`);
//   });
//   return parts.length ? parts.join('') : '0';
// }

// function coefsToLatex(coefs) {
//   if (!coefs || !coefs.length) return '0';
//   const degree = coefs.length - 1;
//   const parts = [];
//   coefs.forEach((c, i) => {
//     const power = degree - i;
//     if (c === 0) return;
//     const absC = Math.abs(c);
//     let term;
//     if (power === 0)      term = `${absC}`;
//     else if (power === 1) term = absC === 1 ? 'x'              : `${absC}x`;
//     else                  term = absC === 1 ? `x^{${power}}`   : `${absC}x^{${power}}`;
//     if (parts.length === 0) parts.push(c < 0 ? `-${term}` : term);
//     else                    parts.push(c < 0 ? `- ${term}` : `+ ${term}`);
//   });
//   return parts.length ? parts.join(' ') : '0';
// }

// function exprToDisplayLatex(expr) {
//   if (!expr) return '';
//   let s = String(expr);
//   s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, run => '^' + run.split('').map(c => SUPER_MAP_TO[c]).join(''));
//   s = s.replace(/\^(-?\d+)/g, '^{$1}');
//   s = s.replace(/\*/g, ' \\cdot ');
//   s = s.replace(/[−–—]/g, '-');
//   return s;
// }

// function isExprParseable(expr) {
//   if (!expr || !expr.trim()) return false;
//   return parsePolynomial(expr) !== null;
// }

// function slotTextToNum(t) {
//   if (t == null || t === '' || t === '-' || t === '.' || t === '-.') return 0;
//   const n = parseFloat(t);
//   return isNaN(n) ? 0 : n;
// }

// const SLOT_INPUT_RE = /^-?\d*\.?\d*$/;

// /* ===== Operation merge =================================================== */

// /** Merge a partial operations override into the defaults. Two levels deep:
//  *  top-level fields win, and nested `result` / `about` objects are also
//  *  field-merged so callers can override just `result.primaryMath` without
//  *  rewriting the whole result object. */
// function mergeOperations(defaults, override) {
//   if (!override) return defaults;
//   const merged = { ...defaults };
//   for (const key of Object.keys(override)) {
//     const defOp = defaults[key];
//     const ovOp = override[key];
//     if (!defOp) {
//       merged[key] = ovOp;
//       continue;
//     }
//     merged[key] = { ...defOp, ...ovOp };
//     if (defOp.result && ovOp.result) {
//       merged[key].result = { ...defOp.result, ...ovOp.result };
//     }
//     if (defOp.about && ovOp.about) {
//       merged[key].about = { ...defOp.about, ...ovOp.about };
//     }
//   }
//   return merged;
// }

// /* ===== Styles ============================================================ */
// const CSS = `
// .pcalc-page {
//   width: 90%;
//   max-width: 1400px;
//   margin: 0 auto;
//   padding: 1.5rem 0 3rem;
//   font-family: var(--ms-font-sans, 'Inter', -apple-system, BlinkMacSystemFont, sans-serif);
//   font-size: 0.95rem;
//   line-height: 1.5;
//   color: var(--ms-text, #0f172a);
//   -webkit-font-smoothing: antialiased;
// }
// .pcalc-page * { box-sizing: border-box; }

// .pcalc-header { margin-bottom: 1rem; }
// .pcalc-eyebrow {
//   font-size: 0.7rem; font-weight: 600; letter-spacing: 0.14em;
//   text-transform: uppercase; color: var(--ms-primary, #1d4ed8);
//   margin-bottom: 0.35rem;
// }
// .pcalc-title-row { display: flex; align-items: center; gap: 0.55rem; position: relative; }
// .pcalc-title {
//   font-family: var(--ms-font-serif, 'Playfair Display', Georgia, serif);
//   font-weight: 700; font-size: 1.65rem; margin: 0; letter-spacing: -0.005em;
// }

// .pcalc-help-wrap { position: relative; display: inline-block; }
// .pcalc-help-btn {
//   width: 22px; height: 22px; border-radius: 50%;
//   background: transparent;
//   border: 1.5px solid var(--ms-primary-light, #dbeafe);
//   color: var(--ms-primary, #1d4ed8);
//   font-family: inherit; font-size: 0.78rem; font-weight: 700;
//   cursor: pointer; padding: 0; line-height: 1;
//   display: inline-flex; align-items: center; justify-content: center;
//   transition: all 0.12s;
// }
// .pcalc-help-btn:hover,
// .pcalc-help-wrap.is-open .pcalc-help-btn {
//   background: var(--ms-primary-light, #dbeafe);
//   border-color: var(--ms-primary, #1d4ed8);
// }
// .pcalc-tooltip {
//   position: absolute; top: calc(100% + 10px); left: 50%; transform: translateX(-50%);
//   width: 320px; max-width: 90vw;
//   background: rgba(15, 23, 42, 0.94);
//   color: rgba(241, 245, 249, 0.95);
//   border-radius: 8px; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.28);
//   padding: 0.8rem 0.95rem; font-size: 0.86rem; line-height: 1.45;
//   z-index: 100; opacity: 0; pointer-events: none;
//   transition: opacity 0.15s;
//   backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
// }
// .pcalc-tooltip::before {
//   content: ''; position: absolute; top: -5px; left: 50%;
//   transform: translateX(-50%) rotate(45deg);
//   width: 10px; height: 10px;
//   background: rgba(15, 23, 42, 0.94);
// }
// .pcalc-tooltip::after {
//   content: ''; position: absolute; top: -14px;
//   left: 0; right: 0; height: 14px;
// }
// .pcalc-help-wrap:hover .pcalc-tooltip,
// .pcalc-help-wrap.is-open .pcalc-tooltip,
// .pcalc-help-btn:focus-visible + .pcalc-tooltip {
//   opacity: 1; pointer-events: auto;
// }
// .pcalc-tooltip p { margin: 0 0 0.6rem; color: rgba(241, 245, 249, 0.88); }
// .pcalc-tooltip p:last-child { margin-bottom: 0; }
// .pcalc-tooltip-link {
//   display: inline-flex; align-items: center; gap: 0.25rem;
//   color: #93c5fd; font-weight: 600; font-size: 0.84rem; text-decoration: none;
// }
// .pcalc-tooltip-link:hover { color: #dbeafe; text-decoration: underline; }

// .pcalc-ops {
//   display: flex; align-items: center; gap: 0.7rem; flex-wrap: wrap;
//   margin: 1.2rem 0 1.2rem; padding: 0.5rem 0.65rem 0.5rem 0.85rem;
//   background: var(--ms-card-bg, #fff); border: 1px solid var(--ms-border, #e2e8f0);
//   border-radius: 8px; box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
// }
// .pcalc-ops-label {
//   font-size: 0.66rem; font-weight: 700; letter-spacing: 0.16em;
//   text-transform: uppercase; color: var(--ms-text-muted, #64748b);
//   padding: 0.1rem 0.85rem 0.1rem 0;
//   border-right: 1px solid var(--ms-border, #e2e8f0);
//   align-self: stretch; display: inline-flex; align-items: center;
// }
// .pcalc-ops-list { display: flex; flex-wrap: wrap; gap: 0.25rem; }
// .pcalc-op-btn {
//   font-family: inherit; font-size: 0.84rem; font-weight: 500;
//   padding: 0.42rem 0.85rem; background: transparent;
//   border: 1px solid transparent; border-radius: 5px;
//   color: var(--ms-text-soft, #475569); cursor: pointer;
//   transition: all 0.1s; white-space: nowrap;
// }
// .pcalc-op-btn:hover { background: var(--ms-primary-light, #dbeafe); color: var(--ms-primary-dark, #1e3a8a); }
// .pcalc-op-btn.is-active { background: var(--ms-primary, #1d4ed8); color: #fff; }

// .pcalc-grid { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: start; }
// @media (max-width: 980px) { .pcalc-grid { grid-template-columns: 1fr; } }

// .pcalc-card {
//   background: var(--ms-card-bg, #fff); border: 1px solid var(--ms-border, #e2e8f0);
//   border-radius: 11px; box-shadow: 0 2px 6px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04);
//   margin-bottom: 1.1rem; overflow: hidden;
// }
// .pcalc-card-header {
//   background: var(--ms-primary, #1d4ed8); color: #fff;
//   padding: 0.7rem 1.15rem;
//   font-family: var(--ms-font-serif, 'Playfair Display', Georgia, serif);
//   font-weight: 600; font-size: 1.02rem;
// }
// .pcalc-card-body { padding: 1.05rem 1.2rem; }

// .pcalc-input-toolbar {
//   display: flex; justify-content: flex-end; align-items: center;
//   margin-bottom: 0.85rem; gap: 0.65rem; flex-wrap: wrap;
// }
// .pcalc-mode-toggle {
//   display: inline-flex; background: #f1f5f9;
//   border-radius: 8px; padding: 2px;
// }
// .pcalc-mode-toggle button {
//   font-family: inherit; font-size: 0.8rem; font-weight: 500;
//   padding: 0.35rem 0.75rem; border-radius: 6px; border: none;
//   background: transparent; color: var(--ms-text-soft, #475569);
//   cursor: pointer; display: inline-flex; align-items: center; gap: 0.3rem;
// }
// .pcalc-mode-toggle button.is-active {
//   background: #fff; color: var(--ms-text, #0f172a);
//   box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
// }

// .pcalc-poly-list { display: flex; flex-direction: column; gap: 0.6rem; }
// .pcalc-poly-row {
//   display: grid; grid-template-columns: 36px 1fr 30px; gap: 0.55rem; align-items: stretch;
// }
// .pcalc-poly-row.is-dual { grid-template-columns: 96px 1fr; }
// .pcalc-poly-row.is-single { grid-template-columns: 36px 1fr; }
// .pcalc-poly-row.is-editing { grid-template-columns: 1fr; }
// .pcalc-poly-row.is-editing > .pcalc-poly-tag,
// .pcalc-poly-row.is-editing > .pcalc-poly-remove { display: none; }

// .pcalc-poly-tag {
//   display: inline-flex; align-items: center; justify-content: center;
//   background: var(--ms-primary-light, #dbeafe);
//   color: var(--ms-primary-dark, #1e3a8a);
//   border-radius: 5px;
//   font-family: var(--ms-font-mono, 'JetBrains Mono', monospace);
//   font-size: 0.86rem; font-weight: 600;
// }
// .pcalc-poly-tag.role { font-family: inherit; font-size: 0.72rem; padding: 0 0.4rem; text-align: center; }

// .pcalc-poly-box {
//   position: relative; display: flex; align-items: center;
//   padding: 0.65rem 0.95rem; min-height: 54px;
//   background: #fff; border: 2px dashed var(--ms-border-strong, #cbd5e1);
//   border-radius: 8px; font-size: 1.15rem;
//   transition: all 0.12s; cursor: pointer;
// }
// .pcalc-poly-box:hover { border-color: var(--ms-primary, #1d4ed8); background: #f8faff; }
// .pcalc-poly-placeholder-tag {
//   position: absolute; top: 0.35rem; left: 0.7rem;
//   font-family: var(--ms-font-sans, sans-serif);
//   font-size: 0.6rem; font-weight: 600; letter-spacing: 0.1em;
//   text-transform: uppercase; color: var(--ms-text-muted, #64748b);
// }
// .pcalc-poly-edit-hint {
//   position: absolute; right: 0.7rem; bottom: 0.35rem;
//   font-family: var(--ms-font-sans, sans-serif);
//   font-size: 0.7rem; color: var(--ms-text-muted, #64748b);
// }
// .pcalc-poly-content {
//   width: 100%; display: flex; align-items: center; padding: 0.2rem 0;
// }
// .pcalc-poly-remove {
//   display: inline-flex; align-items: center; justify-content: center;
//   width: 30px; height: 30px; align-self: center;
//   border-radius: 50%; border: 1.5px solid var(--ms-border-strong, #cbd5e1);
//   background: #fff; color: var(--ms-text-muted, #64748b);
//   cursor: pointer; font-size: 0.82rem; transition: all 0.12s;
// }
// .pcalc-poly-remove:hover {
//   background: var(--ms-error-bg, #fee2e2);
//   color: var(--ms-error, #b91c1c);
//   border-color: var(--ms-error, #b91c1c);
// }
// .pcalc-poly-remove.is-hidden { visibility: hidden; }

// .pcalc-poly-op { display: grid; grid-template-columns: 36px 1fr 30px; gap: 0.55rem; }
// .pcalc-poly-op.is-dual { grid-template-columns: 96px 1fr; }
// .pcalc-poly-op-symbol {
//   grid-column: 2;
//   font-family: var(--ms-font-serif, 'Playfair Display', Georgia, serif);
//   font-size: 1.2rem; color: var(--ms-text-soft, #475569); padding: 0.05rem 0;
// }

// .pcalc-add-poly {
//   display: flex; align-items: center; justify-content: center; gap: 0.35rem;
//   margin-top: 0.6rem; padding: 0.6rem; width: 100%;
//   font-family: inherit; font-size: 0.85rem; font-weight: 600;
//   background: transparent; color: var(--ms-primary, #1d4ed8);
//   border: 1.5px dashed var(--ms-primary, #1d4ed8); border-radius: 8px;
//   cursor: pointer; transition: all 0.12s;
// }
// .pcalc-add-poly:hover { background: var(--ms-primary-light, #dbeafe); }

// .pcalc-actions { display: flex; gap: 0.55rem; margin-top: 1rem; flex-wrap: wrap; }
// .pcalc-btn {
//   font-family: inherit; font-size: 0.9rem; font-weight: 600;
//   padding: 0.6rem 1.2rem; border-radius: 8px;
//   border: 1.5px solid transparent; cursor: pointer; transition: all 0.1s;
// }
// .pcalc-btn:active { transform: translateY(1px); }
// .pcalc-btn:disabled { opacity: 0.5; cursor: not-allowed; }
// .pcalc-btn-primary { background: var(--ms-primary, #1d4ed8); color: #fff; }
// .pcalc-btn-primary:hover:not(:disabled) { background: var(--ms-primary-hover, #1e40af); }
// .pcalc-btn-secondary {
//   background: #fff; color: var(--ms-text-soft, #475569);
//   border-color: var(--ms-border-strong, #cbd5e1);
// }
// .pcalc-btn-secondary:hover { background: #f8fafc; color: var(--ms-text, #0f172a); border-color: var(--ms-text-muted, #64748b); }

// .pcalc-result {
//   background: linear-gradient(180deg, #eff6ff 0%, #f0f9ff 100%);
//   border-left: 3px solid var(--ms-primary, #1d4ed8);
//   padding: 1rem 1.15rem;
// }
// .pcalc-result-eyebrow {
//   font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em;
//   text-transform: uppercase; color: var(--ms-primary, #1d4ed8);
//   margin-bottom: 0.4rem;
// }
// .pcalc-result-math { font-size: 1.35rem; color: var(--ms-text, #0f172a); margin-bottom: 0.35rem; }
// .pcalc-result-extras { display: flex; flex-direction: column; gap: 0.25rem; margin-top: 0.5rem; }
// .pcalc-result-extra { display: flex; align-items: baseline; gap: 0.5rem; font-size: 0.88rem; }
// .pcalc-result-extra-label { font-weight: 600; color: var(--ms-text-soft, #475569); min-width: 90px; }
// .pcalc-result-identity {
//   margin-top: 0.55rem; padding-top: 0.55rem;
//   border-top: 1px solid rgba(29, 78, 216, 0.15);
//   font-size: 1.05rem;
// }
// .pcalc-result-subline {
//   font-size: 0.82rem; color: var(--ms-text-soft, #475569);
//   display: flex; gap: 0.85rem; flex-wrap: wrap; margin-top: 0.5rem;
// }
// .pcalc-result-actions { display: flex; gap: 0.4rem; margin-top: 0.75rem; flex-wrap: wrap; }
// .pcalc-icon-btn {
//   display: inline-flex; align-items: center; gap: 0.3rem;
//   font-family: inherit; font-size: 0.78rem; font-weight: 500;
//   padding: 0.35rem 0.7rem;
//   background: rgba(255, 255, 255, 0.75);
//   border: 1px solid var(--ms-primary-light, #dbeafe);
//   color: var(--ms-primary, #1d4ed8);
//   border-radius: 8px; cursor: pointer; transition: all 0.12s;
// }
// .pcalc-icon-btn:hover { background: #fff; border-color: var(--ms-primary, #1d4ed8); }

// .pcalc-section-block { padding: 0.85rem 0; border-bottom: 1px solid var(--ms-border, #e2e8f0); }
// .pcalc-section-block:first-child { padding-top: 0; }
// .pcalc-section-block:last-child { padding-bottom: 0; border-bottom: none; }
// .pcalc-section-title {
//   font-family: var(--ms-font-serif, 'Playfair Display', Georgia, serif);
//   font-size: 0.94rem; font-weight: 600; color: var(--ms-text, #0f172a);
//   margin: 0 0 0.65rem; display: flex; align-items: center; gap: 0.4rem;
// }
// .pcalc-section-badge {
//   font-family: var(--ms-font-sans, sans-serif);
//   font-size: 0.62rem; font-weight: 600; letter-spacing: 0.1em;
//   text-transform: uppercase;
//   background: var(--ms-primary-light, #dbeafe);
//   color: var(--ms-primary-dark, #1e3a8a);
//   padding: 0.15rem 0.45rem; border-radius: 999px;
// }

// .pcalc-steps-section { position: relative; }
// .pcalc-steps-scroll {
//   max-height: 360px; overflow-y: auto; padding-right: 0.25rem;
//   scrollbar-width: none; -ms-overflow-style: none;
// }
// .pcalc-steps-scroll::-webkit-scrollbar { width: 0; height: 0; display: none; }
// .pcalc-steps-fade {
//   pointer-events: none; position: absolute;
//   left: 0; right: 0; bottom: 0; height: 50px;
//   background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, var(--ms-card-bg, #fff) 75%);
//   opacity: 0; transition: opacity 0.15s;
// }
// .pcalc-steps-fade.is-visible { opacity: 1; }
// .pcalc-steps-chevron {
//   position: absolute; bottom: 4px; left: 50%;
//   transform: translateX(-50%) translateY(0);
//   display: inline-flex; align-items: center; justify-content: center;
//   width: 36px; height: 22px; padding: 0;
//   background: transparent; border: none;
//   color: var(--ms-primary, #1d4ed8);
//   cursor: pointer; opacity: 0; pointer-events: none;
//   border-radius: 4px; transition: opacity 0.18s, background 0.15s;
//   z-index: 2;
// }
// .pcalc-steps-chevron.is-visible {
//   opacity: 0.7; pointer-events: auto;
//   animation: pcalc-chevron-bounce 1.8s ease-in-out infinite;
// }
// .pcalc-steps-chevron:hover { opacity: 1; background: rgba(29, 78, 216, 0.08); }
// .pcalc-steps-chevron svg { display: block; }
// @keyframes pcalc-chevron-bounce {
//   0%, 100% { transform: translateX(-50%) translateY(0); }
//   50%      { transform: translateX(-50%) translateY(3px); }
// }

// .pcalc-step {
//   display: grid; grid-template-columns: 28px 1fr; gap: 0.6rem;
//   padding: 0.65rem 0; border-bottom: 1px solid var(--ms-border, #e2e8f0);
// }
// .pcalc-step:last-child { border-bottom: none; }
// .pcalc-step-num {
//   width: 24px; height: 24px; border-radius: 50%;
//   background: var(--ms-primary, #1d4ed8); color: #fff;
//   font-family: var(--ms-font-serif, 'Playfair Display', Georgia, serif);
//   font-weight: 600; font-size: 0.78rem;
//   display: inline-flex; align-items: center; justify-content: center;
// }
// .pcalc-step-title {
//   font-family: var(--ms-font-serif, 'Playfair Display', Georgia, serif);
//   font-weight: 600; font-size: 0.92rem; margin: 0 0 0.35rem;
// }
// .pcalc-step-math {
//   background: #f8fafc; border: 1px solid var(--ms-border, #e2e8f0);
//   border-radius: 8px; padding: 0.5rem 0.7rem;
//   margin-bottom: 0.3rem; font-size: 0.98rem; overflow-x: auto;
// }
// .pcalc-step-note { color: var(--ms-text-soft, #475569); font-size: 0.82rem; margin: 0; }

// .pcalc-method-text { font-size: 0.88rem; color: var(--ms-text-soft, #475569); margin: 0 0 0.55rem; }
// .pcalc-method-text:last-child { margin-bottom: 0; }
// .pcalc-method-formula {
//   background: #f8fafc; border: 1px solid var(--ms-border, #e2e8f0);
//   border-radius: 8px; padding: 0.6rem 0.85rem; font-size: 1rem; margin: 0.55rem 0;
// }

// .pcalc-pitfall-list { margin: 0; padding-left: 1.05rem; }
// .pcalc-pitfall-list li { margin: 0.35rem 0; font-size: 0.85rem; color: var(--ms-text-soft, #475569); }

// .pcalc-related-row { display: flex; flex-wrap: wrap; gap: 0.4rem; }
// .pcalc-related-chip {
//   font-family: inherit; font-size: 0.78rem; font-weight: 500;
//   padding: 0.35rem 0.75rem;
//   background: var(--ms-primary-light, #dbeafe);
//   color: var(--ms-primary-dark, #1e3a8a);
//   border: 1px solid transparent; border-radius: 999px;
//   cursor: pointer; transition: all 0.12s;
//   text-decoration: none;
//   display: inline-flex; align-items: center;
// }
// .pcalc-related-chip:hover { background: #bfdbfe; }

// /* ===== Editor shared ===== */
// .pcalc-editor {
//   border: 2px solid var(--ms-primary, #1d4ed8);
//   border-radius: 10px;
//   background: #fafcff;
//   padding: 0.85rem 1rem;
//   display: flex; flex-direction: column; gap: 0.75rem;
// }
// .pcalc-editor-head {
//   display: flex; justify-content: space-between; align-items: center;
//   gap: 0.6rem; flex-wrap: wrap;
// }
// .pcalc-editor-head-title {
//   font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
//   text-transform: uppercase; color: var(--ms-primary, #1d4ed8);
// }
// .pcalc-editor-head-actions { display: flex; gap: 0.4rem; }
// .pcalc-editor-head-actions button {
//   font-family: inherit; font-size: 0.82rem; font-weight: 500;
//   padding: 0.42rem 0.95rem; border-radius: 6px;
//   border: 1.5px solid var(--ms-border-strong, #cbd5e1);
//   background: #fff; color: var(--ms-text-soft, #475569);
//   cursor: pointer; transition: all 0.1s;
// }
// .pcalc-editor-head-actions button:disabled { opacity: 0.45; cursor: not-allowed; }
// .pcalc-editor-head-actions .is-primary {
//   background: var(--ms-primary, #1d4ed8); color: #fff;
//   border-color: var(--ms-primary, #1d4ed8);
// }
// .pcalc-editor-head-actions .is-primary:hover:not(:disabled) {
//   background: var(--ms-primary-hover, #1e40af);
// }

// /* ===== Keypad editor ===== */
// .pcalc-kp-display {
//   width: 100%; min-height: 64px;
//   padding: 0.7rem 1rem;
//   background: #fff; border: 1.5px solid var(--ms-primary, #1d4ed8);
//   border-radius: 8px;
//   display: flex; align-items: center;
//   font-size: 1.35rem; overflow-x: auto;
//   box-shadow: inset 0 1px 0 rgba(255,255,255,0.8), 0 1px 3px rgba(29,78,216,0.07);
//   position: relative;
// }
// .pcalc-kp-display.is-empty {
//   justify-content: center;
//   font-family: var(--ms-font-sans, sans-serif);
//   font-style: italic; font-size: 0.9rem;
//   color: var(--ms-text-muted, #64748b);
//   border-style: dashed; border-color: var(--ms-border-strong, #cbd5e1);
// }
// .pcalc-kp-display.is-invalid { border-color: #fca5a5; background: #fffbfb; }

// .pcalc-kp-layout {
//   display: grid; grid-template-columns: 1fr 1.05fr; gap: 0.75rem;
// }
// @media (max-width: 720px) {
//   .pcalc-kp-layout { grid-template-columns: 1fr; }
// }

// .pcalc-dial-card {
//   background: linear-gradient(180deg, #f0f5ff 0%, #eff6ff 100%);
//   border: 1.5px solid var(--ms-primary-light, #dbeafe);
//   border-radius: 8px; padding: 0.8rem 0.9rem;
// }
// .pcalc-dial-title {
//   font-size: 0.66rem; font-weight: 700; letter-spacing: 0.12em;
//   text-transform: uppercase; color: var(--ms-primary, #1d4ed8);
//   margin-bottom: 0.6rem;
// }
// .pcalc-dial-row {
//   display: flex; align-items: center; justify-content: center;
//   gap: 0.55rem; margin-bottom: 0.7rem;
// }
// .pcalc-dial-step {
//   width: 34px; height: 34px; border-radius: 50%;
//   border: 1.5px solid var(--ms-primary, #1d4ed8);
//   background: #fff; color: var(--ms-primary, #1d4ed8);
//   font-size: 1.1rem; font-weight: 600; cursor: pointer; line-height: 1;
//   display: inline-flex; align-items: center; justify-content: center;
//   transition: all 0.12s;
// }
// .pcalc-dial-step:hover:not(:disabled) { background: var(--ms-primary, #1d4ed8); color: #fff; }
// .pcalc-dial-step:disabled { opacity: 0.35; cursor: not-allowed; }

// .pcalc-dial-insert {
//   min-width: 118px;
//   min-height: 78px;
//   padding: 0.7rem 1rem;
//   background: var(--ms-primary, #1d4ed8); color: #fff;
//   border: none; border-radius: 8px;
//   cursor: pointer;
//   display: inline-flex; align-items: center; justify-content: center;
//   transition: all 0.12s; box-shadow: 0 2px 6px rgba(29, 78, 216, 0.2);
//   overflow: hidden;
// }
// .pcalc-dial-insert:hover { background: var(--ms-primary-hover, #1e40af); }
// .pcalc-dial-insert-stack {
//   display: flex; flex-direction: column;
//   align-items: center; justify-content: center;
//   gap: 0.4rem;
//   line-height: 1;
// }
// .pcalc-dial-insert-label {
//   font-family: var(--ms-font-sans, sans-serif);
//   font-size: 0.58rem; font-weight: 600;
//   letter-spacing: 0.1em; text-transform: uppercase;
//   opacity: 0.88;
//   margin: 0; line-height: 1;
//   white-space: nowrap;
// }
// .pcalc-dial-insert-math {
//   font-family: 'Times New Roman', 'STIX Two Math', Georgia, serif;
//   font-style: italic;
//   font-size: 1.5rem;
//   font-weight: 500;
//   line-height: 1;
//   letter-spacing: 0.01em;
// }

// .pcalc-dial-quick-label { font-size: 0.72rem; font-weight: 600; color: var(--ms-text-soft, #475569); margin-bottom: 0.4rem; }
// .pcalc-dial-quick { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.4rem; }
// .pcalc-dial-chip {
//   height: 38px;
//   background: #fff; border: 1.5px solid var(--ms-border-strong, #cbd5e1);
//   border-radius: 6px; font-size: 1.02rem;
//   color: var(--ms-text, #0f172a); cursor: pointer;
//   display: flex; align-items: center; justify-content: center;
//   font-family: inherit;
//   box-shadow: 0 1px 2px rgba(15,23,42,0.05);
//   transition: all 0.1s;
// }
// .pcalc-dial-chip:hover {
//   background: var(--ms-primary-light, #dbeafe);
//   border-color: var(--ms-primary, #1d4ed8);
//   color: var(--ms-primary-dark, #1e3a8a);
// }
// .pcalc-dial-chip.is-active {
//   background: var(--ms-primary, #1d4ed8); border-color: var(--ms-primary, #1d4ed8); color: #fff;
// }

// .pcalc-dial-custom {
//   margin-top: 0.7rem; padding-top: 0.7rem;
//   border-top: 1px solid var(--ms-primary-light, #dbeafe);
//   display: flex; align-items: center; gap: 0.45rem;
//   font-size: 0.78rem; color: var(--ms-text-soft, #475569); flex-wrap: wrap;
// }
// .pcalc-dial-custom input {
//   width: 54px; height: 30px; padding: 0 0.4rem;
//   font-family: var(--ms-font-mono, monospace); font-size: 0.95rem; text-align: center;
//   background: #fff; border: 1.5px solid var(--ms-border-strong, #cbd5e1);
//   border-radius: 5px; outline: none;
//   -moz-appearance: textfield;
// }
// .pcalc-dial-custom input::-webkit-outer-spin-button,
// .pcalc-dial-custom input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
// .pcalc-dial-custom input:focus { border-color: var(--ms-primary, #1d4ed8); box-shadow: 0 0 0 3px rgba(29,78,216,0.14); }

// .pcalc-kp-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 0.4rem; align-content: start; }
// .pcalc-kp-btn {
//   height: 42px; font-family: var(--ms-font-mono, monospace); font-size: 1rem; font-weight: 500;
//   background: #fff; border: 1.5px solid var(--ms-border-strong, #cbd5e1);
//   border-radius: 7px; color: var(--ms-text, #0f172a);
//   cursor: pointer; transition: all 0.08s;
//   display: flex; align-items: center; justify-content: center;
//   box-shadow: 0 1px 2px rgba(15,23,42,0.04);
// }
// .pcalc-kp-btn:hover { background: var(--ms-primary-light, #dbeafe); border-color: var(--ms-primary, #1d4ed8); color: var(--ms-primary-dark, #1e3a8a); }
// .pcalc-kp-btn:active { transform: translateY(1px); }
// .pcalc-kp-btn.op { background: #f1f5f9; }
// .pcalc-kp-btn.cmd { background: #fef2f2; color: #b91c1c; border-color: #fca5a5; }
// .pcalc-kp-btn.cmd:hover { background: #fee2e2; }
// .pcalc-kp-btn.zero { grid-column: span 2; }

// /* ===== Slots editor ===== */
// .pcalc-sl-row {
//   display: flex; flex-wrap: wrap; align-items: center; gap: 0.4rem;
//   padding: 0.65rem 0.85rem; background: #fff;
//   border: 1.5px solid var(--ms-border, #e2e8f0);
//   border-radius: 8px; min-height: 64px;
// }
// .pcalc-sl-group { display: inline-flex; align-items: center; gap: 0.3rem; }
// .pcalc-sl-slot input {
//   width: 64px; height: 44px; text-align: center;
//   padding: 0 0.4rem;
//   font-family: var(--ms-font-mono, monospace); font-size: 1.05rem; font-weight: 500;
//   background: #fff; border: 1.5px solid var(--ms-border-strong, #cbd5e1);
//   border-radius: 7px; color: var(--ms-text, #0f172a); outline: none;
//   transition: all 0.12s;
// }
// .pcalc-sl-slot input::placeholder {
//   color: var(--ms-text-muted, #64748b);
//   opacity: 0.5;
// }
// .pcalc-sl-slot input:focus { border-color: var(--ms-primary, #1d4ed8); box-shadow: 0 0 0 3px rgba(29,78,216,0.16); }
// .pcalc-sl-slot input.is-zero { background: #f1f5f9; color: var(--ms-text-muted, #64748b); }
// .pcalc-sl-slot input.is-neg { background: #fef2f2; color: #b91c1c; }
// .pcalc-sl-power { font-size: 1.05rem; color: var(--ms-text, #0f172a); }
// .pcalc-sl-op {
//   font-family: var(--ms-font-mono, monospace); font-size: 1.2rem;
//   color: var(--ms-text-muted, #64748b); padding: 0 0.15rem;
// }
// .pcalc-sl-meta { display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; flex-wrap: wrap; }
// .pcalc-sl-degree {
//   display: inline-flex; align-items: center; gap: 0.4rem;
//   font-size: 0.82rem; color: var(--ms-text-soft, #475569);
// }
// .pcalc-sl-degbtn {
//   width: 28px; height: 28px; border-radius: 50%;
//   border: 1.5px solid var(--ms-border-strong, #cbd5e1);
//   background: #fff; color: var(--ms-text-soft, #475569);
//   cursor: pointer; font-size: 1rem; line-height: 1;
//   display: inline-flex; align-items: center; justify-content: center;
//   transition: all 0.12s;
// }
// .pcalc-sl-degbtn:hover:not(:disabled) { border-color: var(--ms-primary, #1d4ed8); color: var(--ms-primary, #1d4ed8); background: var(--ms-primary-light, #dbeafe); }
// .pcalc-sl-degbtn:disabled { opacity: 0.35; cursor: not-allowed; }
// .pcalc-sl-preview {
//   padding: 0.5rem 0.8rem;
//   background: #f8fafc; border: 1px solid var(--ms-border, #e2e8f0);
//   border-radius: 7px; font-size: 1.05rem; min-height: 2.2rem;
//   display: flex; align-items: center; gap: 0.5rem;
// }
// .pcalc-sl-preview-label {
//   font-size: 0.68rem; font-weight: 600; letter-spacing: 0.08em;
//   text-transform: uppercase; color: var(--ms-text-muted, #64748b);
// }

// .pcalc-skeleton { min-height: 720px; }
// `;

// /* ===== Slots input ======================================================= */

// function SlotsInput({ initialValue, label, onSave, onCancel }) {
//   const parsedInit = parsePolynomial(initialValue) || [0];
//   const [coefTexts, setCoefTexts] = useState(() => parsedInit.map(c => String(c)));

//   const degree = coefTexts.length - 1;
//   const coefNums = coefTexts.map(slotTextToNum);

//   const updateCoef = (i, raw) => {
//     if (!SLOT_INPUT_RE.test(raw)) return;
//     const next = coefTexts.slice();
//     next[i] = raw;
//     setCoefTexts(next);
//   };

//   const incDegree = () => setCoefTexts(['0', ...coefTexts]);
//   const decDegree = () => { if (coefTexts.length > 1) setCoefTexts(coefTexts.slice(1)); };
//   const handleSave = () => onSave(coefsToInputString(coefNums));

//   return (
//     <div className="pcalc-editor">
//       <div className="pcalc-editor-head">
//         <div className="pcalc-editor-head-title">Editing {label} · Slots</div>
//         <div className="pcalc-editor-head-actions">
//           <button type="button" onClick={onCancel}>Cancel</button>
//           <button type="button" className="is-primary" onClick={handleSave}>Save</button>
//         </div>
//       </div>

//       <div className="pcalc-sl-meta">
//         <div className="pcalc-sl-degree">
//           <button type="button" className="pcalc-sl-degbtn" onClick={decDegree} disabled={coefTexts.length <= 1} aria-label="Decrease degree">−</button>
//           <span>Degree <strong>{degree}</strong></span>
//           <button type="button" className="pcalc-sl-degbtn" onClick={incDegree} aria-label="Increase degree">+</button>
//         </div>
//       </div>

//       <div className="pcalc-sl-row">
//         {coefTexts.map((txt, i) => {
//           const power = degree - i;
//           const num = coefNums[i];
//           const visualClass =
//             num === 0 ? 'is-zero' :
//             num < 0   ? 'is-neg'  : '';
//           return (
//             <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
//               <span className="pcalc-sl-group">
//                 <span className="pcalc-sl-slot">
//                   <input
//                     type="text"
//                     inputMode="decimal"
//                     value={txt}
//                     placeholder="0"
//                     autoComplete="off"
//                     spellCheck={false}
//                     onChange={e => updateCoef(i, e.target.value)}
//                     onFocus={e => e.target.select()}
//                     className={visualClass}
//                     aria-label={power === 0 ? 'Constant' : `Coefficient of x^${power}`}
//                   />
//                 </span>
//                 {power > 0 && (
//                   <span className="pcalc-sl-power">
//                     {processContent('$' + (power === 1 ? 'x' : `x^{${power}}`) + '$')}
//                   </span>
//                 )}
//               </span>
//               {i < coefTexts.length - 1 && <span className="pcalc-sl-op">+</span>}
//             </span>
//           );
//         })}
//       </div>

//       <div className="pcalc-sl-preview">
//         <span className="pcalc-sl-preview-label">Reads as</span>
//         <span>{processContent('$' + coefsToLatex(coefNums) + '$')}</span>
//       </div>
//     </div>
//   );
// }

// /* ===== Keypad input ====================================================== */

// function KeypadInput({ initialValue, label, onSave, onCancel }) {
//   const [expr, setExpr] = useState(initialValue || '');
//   const [power, setPower] = useState(3);

//   const valid = isExprParseable(expr);

//   const append = (s) => setExpr(prev => prev + s);
//   const backspace = () => setExpr(prev => prev.slice(0, -1));
//   const clearAll = () => setExpr('');
//   const insertVar = () => {
//     const token = power <= 1 ? 'x' : 'x^' + power;
//     setExpr(prev => prev + token);
//   };
//   const insertVarAt = (p) => {
//     const token = p <= 1 ? 'x' : 'x^' + p;
//     setExpr(prev => prev + token);
//     setPower(p);
//   };

//   const dialPlainText = power <= 1 ? 'x' : 'x' + toSuper(power);
//   const displayLatex = exprToDisplayLatex(expr);

//   const handleSave = () => {
//     if (!valid) return;
//     onSave(expr);
//   };

//   return (
//     <div className="pcalc-editor">
//       <div className="pcalc-editor-head">
//         <div className="pcalc-editor-head-title">Editing {label} · Keypad</div>
//         <div className="pcalc-editor-head-actions">
//           <button type="button" onClick={onCancel}>Cancel</button>
//           <button type="button" className="is-primary" onClick={handleSave} disabled={!valid}>Save</button>
//         </div>
//       </div>

//       <div className={
//         'pcalc-kp-display' +
//         (!expr.trim() ? ' is-empty' : '') +
//         (expr.trim() && !valid ? ' is-invalid' : '')
//       }>
//         {expr.trim()
//           ? processContent('$' + displayLatex + '$')
//           : 'Tap buttons to build a polynomial'}
//       </div>

//       <div className="pcalc-kp-layout">
//         <div className="pcalc-dial-card">
//           <div className="pcalc-dial-title">Insert x to the power</div>
//           <div className="pcalc-dial-row">
//             <button type="button" className="pcalc-dial-step" onClick={() => setPower(p => Math.max(1, p - 1))} disabled={power <= 1} aria-label="Decrease power">−</button>
//             <button type="button" className="pcalc-dial-insert" onClick={insertVar} aria-label="Insert at current power">
//               <span className="pcalc-dial-insert-stack">
//                 <span className="pcalc-dial-insert-label">Tap to insert</span>
//                 <span className="pcalc-dial-insert-math">{dialPlainText}</span>
//               </span>
//             </button>
//             <button type="button" className="pcalc-dial-step" onClick={() => setPower(p => Math.min(99, p + 1))} disabled={power >= 99} aria-label="Increase power">+</button>
//           </div>

//           <div className="pcalc-dial-quick-label">Quick presets</div>
//           <div className="pcalc-dial-quick">
//             {[1, 2, 3, 4, 5, 6].map(p => (
//               <button
//                 key={p}
//                 type="button"
//                 className={'pcalc-dial-chip' + (power === p ? ' is-active' : '')}
//                 onClick={() => insertVarAt(p)}
//               >
//                 {p === 1 ? 'x' : 'x' + toSuper(p)}
//               </button>
//             ))}
//           </div>

//           <div className="pcalc-dial-custom">
//             <span>Custom power:</span>
//             <input
//               type="number"
//               min="1"
//               max="99"
//               step="1"
//               value={power}
//               onChange={e => {
//                 const v = parseInt(e.target.value, 10);
//                 if (!isNaN(v) && v >= 1 && v <= 99) setPower(v);
//               }}
//             />
//           </div>
//         </div>

//         <div className="pcalc-kp-grid">
//           <button type="button" className="pcalc-kp-btn" onClick={() => append('7')}>7</button>
//           <button type="button" className="pcalc-kp-btn" onClick={() => append('8')}>8</button>
//           <button type="button" className="pcalc-kp-btn" onClick={() => append('9')}>9</button>
//           <button type="button" className="pcalc-kp-btn op" onClick={() => append(' + ')}>+</button>
//           <button type="button" className="pcalc-kp-btn op" onClick={() => append(' - ')}>−</button>
//           <button type="button" className="pcalc-kp-btn cmd" onClick={backspace} aria-label="Backspace">←</button>

//           <button type="button" className="pcalc-kp-btn" onClick={() => append('4')}>4</button>
//           <button type="button" className="pcalc-kp-btn" onClick={() => append('5')}>5</button>
//           <button type="button" className="pcalc-kp-btn" onClick={() => append('6')}>6</button>
//           <button type="button" className="pcalc-kp-btn op" onClick={() => append('*')}>×</button>
//           <button type="button" className="pcalc-kp-btn op" onClick={() => append('/')}>÷</button>
//           <button type="button" className="pcalc-kp-btn cmd" onClick={clearAll} aria-label="Clear">C</button>

//           <button type="button" className="pcalc-kp-btn" onClick={() => append('1')}>1</button>
//           <button type="button" className="pcalc-kp-btn" onClick={() => append('2')}>2</button>
//           <button type="button" className="pcalc-kp-btn" onClick={() => append('3')}>3</button>
//           <button type="button" className="pcalc-kp-btn op" onClick={() => append('(')}>(</button>
//           <button type="button" className="pcalc-kp-btn op" onClick={() => append(')')}>)</button>
//           <button type="button" className="pcalc-kp-btn op" onClick={() => append('.')}>.</button>

//           <button type="button" className="pcalc-kp-btn zero" onClick={() => append('0')}>0</button>
//           <button type="button" className="pcalc-kp-btn op" onClick={() => append('^')}>^</button>
//           <button type="button" className="pcalc-kp-btn op" onClick={() => append('=')}>=</button>
//           <button type="button" className="pcalc-kp-btn op" onClick={() => append(' ')}>␣</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ===== Main component ==================================================== */

// export default function PolynomialCalculator({
//   defaultOperation = 'multiply',
//   operations: operationsProp,
//   operationOrder: operationOrderProp,
// }) {
//   const [mounted, setMounted] = useState(false);

//   // Merge default operations with caller-supplied overrides (two levels deep).
//   const operations = useMemo(
//     () => mergeOperations(DEFAULT_OPERATIONS, operationsProp),
//     [operationsProp]
//   );
//   const operationOrder = useMemo(
//     () => (operationOrderProp && operationOrderProp.length ? operationOrderProp : DEFAULT_OPERATION_ORDER),
//     [operationOrderProp]
//   );

//   // Sanity check the requested defaultOperation against what&apos;s available.
//   const initialOp = operations[defaultOperation] ? defaultOperation : operationOrder[0];

//   const [opKey, setOpKey] = useState(initialOp);
//   const [inputMode, setInputMode] = useState('keypad');
//   const [polynomials, setPolynomials] = useState(() => operations[initialOp].demoInputs);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [showFade, setShowFade] = useState(false);
//   const [helpOpen, setHelpOpen] = useState(false);

//   const stepsScrollRef = useRef(null);
//   const helpWrapRef = useRef(null);
//   const op = operations[opKey];

//   useEffect(() => { setMounted(true); }, []);

//   useEffect(() => {
//     if (!operations[opKey]) return;
//     setPolynomials(operations[opKey].demoInputs);
//     setEditingIndex(null);
//     setHelpOpen(false);
//   }, [opKey, operations]);

//   const updateFade = useCallback(() => {
//     const el = stepsScrollRef.current;
//     if (!el) return;
//     const overflowing = el.scrollHeight > el.clientHeight + 2;
//     const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 4;
//     setShowFade(overflowing && !atBottom);
//   }, []);

//   useEffect(() => {
//     if (!mounted) return;
//     updateFade();
//     const el = stepsScrollRef.current;
//     if (el) el.addEventListener('scroll', updateFade);
//     window.addEventListener('resize', updateFade);
//     return () => {
//       if (el) el.removeEventListener('scroll', updateFade);
//       window.removeEventListener('resize', updateFade);
//     };
//   }, [mounted, opKey, updateFade]);

//   useEffect(() => {
//     if (!helpOpen) return;
//     const onDocClick = (e) => {
//       if (helpWrapRef.current && !helpWrapRef.current.contains(e.target)) {
//         setHelpOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', onDocClick);
//     return () => document.removeEventListener('mousedown', onDocClick);
//   }, [helpOpen]);

//   const handleAddPolynomial = () => setPolynomials(prev => [...prev, 'x + 1']);
//   const handleRemovePolynomial = (idx) => {
//     setPolynomials(prev => prev.filter((_, i) => i !== idx));
//     if (editingIndex === idx) setEditingIndex(null);
//   };
//   const handleEditPolynomial = (idx) => setEditingIndex(idx);
//   const handleCloseEditor = () => setEditingIndex(null);
//   const handleSavePolynomial = (idx, newValue) => {
//     setPolynomials(prev => {
//       const next = prev.slice();
//       next[idx] = newValue;
//       return next;
//     });
//     setEditingIndex(null);
//   };

//   const handleScrollStepsDown = () => {
//     const el = stepsScrollRef.current;
//     if (!el) return;
//     el.scrollBy({ top: Math.max(120, el.clientHeight * 0.7), behavior: 'smooth' });
//   };

//   if (!mounted) return <div className="pcalc-page pcalc-skeleton" aria-busy="true" />;

//   const renderEditor = (idx, label, value) => {
//     const props = {
//       initialValue: value,
//       label,
//       onSave: (v) => handleSavePolynomial(idx, v),
//       onCancel: handleCloseEditor,
//     };
//     return inputMode === 'keypad' ? <KeypadInput {...props} /> : <SlotsInput {...props} />;
//   };

//   const renderPolyBox = (idx, label, poly) => (
//     <div className="pcalc-poly-box" onClick={() => handleEditPolynomial(idx)} role="button" tabIndex={0}>
//       <span className="pcalc-poly-placeholder-tag">{label}</span>
//       <span className="pcalc-poly-content">
//         {processContent('$' + exprToDisplayLatex(poly) + '$')}
//       </span>
//       <span className="pcalc-poly-edit-hint">✎ Tap to edit</span>
//     </div>
//   );

//   const buildRow = (idx, opts) => {
//     const { tag, label, poly, single, dual, role } = opts;
//     const isEditing = editingIndex === idx;
//     const rowClass = 'pcalc-poly-row' +
//       (single ? ' is-single' : '') +
//       (dual ? ' is-dual' : '') +
//       (isEditing ? ' is-editing' : '');

//     return (
//       <div key={`row-${idx}`} className={rowClass}>
//         {!isEditing && (
//           <div className={'pcalc-poly-tag' + (role ? ' role' : '')}>
//             {role ? tag : <>P<sub>{idx + 1}</sub></>}
//           </div>
//         )}
//         {isEditing ? renderEditor(idx, label, poly) : renderPolyBox(idx, label, poly)}
//         {!single && !dual && !isEditing && (
//           <button
//             className={'pcalc-poly-remove' + (polynomials.length <= 2 ? ' is-hidden' : '')}
//             onClick={() => handleRemovePolynomial(idx)}
//             aria-label="Remove polynomial"
//             type="button"
//           >✕</button>
//         )}
//       </div>
//     );
//   };

//   const renderInputs = () => {
//     if (op.mode === 'single') {
//       return [buildRow(0, { tag: 'P', label: 'Polynomial', poly: polynomials[0], single: true })];
//     }
//     if (op.mode === 'dual') {
//       const labels = op.inputLabels || ['Top', 'Bottom'];
//       return [
//         buildRow(0, { tag: labels[0], label: labels[0], poly: polynomials[0], dual: true, role: true }),
//         <div key="op-0" className="pcalc-poly-op is-dual">
//           <span className="pcalc-poly-op-symbol">{processContent('$' + op.symbol + '$')}</span>
//         </div>,
//         buildRow(1, { tag: labels[1], label: labels[1], poly: polynomials[1], dual: true, role: true }),
//       ];
//     }
//     const out = [];
//     polynomials.forEach((poly, idx) => {
//       out.push(buildRow(idx, {
//         tag: 'P' + (idx + 1),
//         label: `Polynomial ${idx + 1}`,
//         poly,
//       }));
//       if (idx < polynomials.length - 1) {
//         out.push(
//           <div key={`op-${idx}`} className="pcalc-poly-op">
//             <span className="pcalc-poly-op-symbol">{processContent('$' + op.symbol + '$')}</span>
//           </div>
//         );
//       }
//     });
//     return out;
//   };

//   const hasSteps    = Array.isArray(op.steps) && op.steps.length > 0;
//   const hasAbout    = !!op.about && (op.about.text || op.about.formula);
//   const hasPitfalls = Array.isArray(op.pitfalls) && op.pitfalls.length > 0;
//   const hasRelated  = Array.isArray(op.related) && op.related.length > 0;

//   return (
//     <>
//       <style>{CSS}</style>
//       <div className="pcalc-page">

//         <header className="pcalc-header">
//           <div className="pcalc-eyebrow">Algebra · Polynomial tools</div>
//           <div className="pcalc-title-row">
//             <h1 className="pcalc-title">{op.title}</h1>
//             <div className={'pcalc-help-wrap' + (helpOpen ? ' is-open' : '')} ref={helpWrapRef}>
//               <button
//                 type="button"
//                 className="pcalc-help-btn"
//                 aria-label="More info about this operation"
//                 aria-expanded={helpOpen}
//                 onClick={() => setHelpOpen(o => !o)}
//               >?</button>
//               <div className="pcalc-tooltip" role="tooltip">
//                 <p>{processContent(op.sub)}</p>
//                 {op.learnMoreHref && (
//                   <a href={op.learnMoreHref} className="pcalc-tooltip-link">Learn more →</a>
//                 )}
//               </div>
//             </div>
//           </div>
//         </header>

//         {/*
//           Folder tabs — commented out until content sub-pages exist.

//           <nav className="pcalc-tabs" role="tablist">
//             <button className="pcalc-tab is-active" type="button">Calculator</button>
//             <button className="pcalc-tab" type="button">How it works</button>
//             <button className="pcalc-tab" type="button">Worked examples</button>
//           </nav>
//         */}

//         <div className="pcalc-ops">
//           <div className="pcalc-ops-label">Operation</div>
//           <div className="pcalc-ops-list">
//             {operationOrder.filter(k => operations[k]).map(key => (
//               <button
//                 key={key}
//                 type="button"
//                 className={'pcalc-op-btn' + (key === opKey ? ' is-active' : '')}
//                 onClick={() => setOpKey(key)}
//               >
//                 {operations[key].label}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="pcalc-grid">

//           <div>
//             <section className="pcalc-card">
//               <div className="pcalc-card-header">{op.inputHeader}</div>
//               <div className="pcalc-card-body">

//                 <div className="pcalc-input-toolbar">
//                   <div className="pcalc-mode-toggle">
//                     <button type="button" className={inputMode === 'keypad' ? 'is-active' : ''} onClick={() => setInputMode('keypad')}>⌨ Keypad</button>
//                     <button type="button" className={inputMode === 'slots' ? 'is-active' : ''} onClick={() => setInputMode('slots')}>▦ Slots</button>
//                   </div>
//                 </div>

//                 <div className="pcalc-poly-list">
//                   {renderInputs()}
//                 </div>

//                 {op.mode === 'multi' && (
//                   <button type="button" className="pcalc-add-poly" onClick={handleAddPolynomial}>
//                     + Add another polynomial
//                   </button>
//                 )}

//                 <div className="pcalc-actions">
//                   <button type="button" className="pcalc-btn pcalc-btn-primary">{op.actionLabel}</button>
//                   <button type="button" className="pcalc-btn pcalc-btn-secondary" onClick={() => setPolynomials(op.demoInputs)}>Clear</button>
//                 </div>

//               </div>
//             </section>

//             <section className="pcalc-card">
//               <div className="pcalc-card-header">Result</div>
//               <div className="pcalc-card-body" style={{ padding: 0 }}>
//                 <div className="pcalc-result">
//                   <div className="pcalc-result-eyebrow">{op.result.primaryLabel}</div>
//                   <div className="pcalc-result-math">
//                     {processContent('$' + op.result.primaryMath + '$')}
//                   </div>
//                   {op.result.extras && op.result.extras.length > 0 && (
//                     <div className="pcalc-result-extras">
//                       {op.result.extras.map((ex, i) => (
//                         <div className="pcalc-result-extra" key={i}>
//                           <span className="pcalc-result-extra-label">{ex.label}:</span>
//                           <span>{processContent('$' + ex.math + '$')}</span>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                   {op.result.identity && (
//                     <div className="pcalc-result-identity">
//                       {processContent('$' + op.result.identity + '$')}
//                     </div>
//                   )}
//                   {op.result.meta && op.result.meta.length > 0 && (
//                     <div className="pcalc-result-subline">
//                       {op.result.meta.map((m, i) => (
//                         <span key={i}>{m.label}: <strong>{m.value}</strong></span>
//                       ))}
//                     </div>
//                   )}
//                   <div className="pcalc-result-actions">
//                     <button type="button" className="pcalc-icon-btn">⧉ Copy LaTeX</button>
//                     <button type="button" className="pcalc-icon-btn">↗ Share</button>
//                     {op.hasGraph && (
//                       <button type="button" className="pcalc-icon-btn">📈 Graph</button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>

//           <div>
//             <section className="pcalc-card">
//               <div className="pcalc-card-header">Solution &amp; explanation</div>
//               <div className="pcalc-card-body">

//                 {hasSteps && (
//                   <div className="pcalc-section-block pcalc-steps-section">
//                     <h3 className="pcalc-section-title">
//                       Step-by-step
//                       <span className="pcalc-section-badge">{op.steps.length} steps</span>
//                     </h3>
//                     <div className="pcalc-steps-scroll" ref={stepsScrollRef}>
//                       {op.steps.map((step, i) => (
//                         <div className="pcalc-step" key={i}>
//                           <div className="pcalc-step-num">{i + 1}</div>
//                           <div>
//                             <h4 className="pcalc-step-title">{processContent(step.title)}</h4>
//                             <div className="pcalc-step-math">{processContent(step.math)}</div>
//                             {step.note && (
//                               <p className="pcalc-step-note">{processContent(step.note)}</p>
//                             )}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                     <div className={'pcalc-steps-fade' + (showFade ? ' is-visible' : '')} />
//                     <button
//                       type="button"
//                       className={'pcalc-steps-chevron' + (showFade ? ' is-visible' : '')}
//                       onClick={handleScrollStepsDown}
//                       aria-label="Scroll for more steps"
//                       tabIndex={showFade ? 0 : -1}
//                     >
//                       <svg width="20" height="10" viewBox="0 0 20 10" aria-hidden="true">
//                         <path d="M2 2 L10 8 L18 2" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                     </button>
//                   </div>
//                 )}

//                 {hasAbout && (
//                   <div className="pcalc-section-block">
//                     <h3 className="pcalc-section-title">About this method</h3>
//                     {op.about.text && (
//                       <p className="pcalc-method-text">{processContent(op.about.text)}</p>
//                     )}
//                     {op.about.formula && (
//                       <div className="pcalc-method-formula">
//                         {processContent('$' + op.about.formula + '$')}
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 {hasPitfalls && (
//                   <div className="pcalc-section-block">
//                     <h3 className="pcalc-section-title">Common pitfalls</h3>
//                     <ul className="pcalc-pitfall-list">
//                       {op.pitfalls.map((p, i) => (
//                         <li key={i}>{processContent(p)}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {hasRelated && (
//                   <div className="pcalc-section-block">
//                     <h3 className="pcalc-section-title">Related tools</h3>
//                     <div className="pcalc-related-row">
//                       {op.related.map((r, i) => {
//                         const isObj = r && typeof r === 'object';
//                         const chipLabel = isObj ? r.label : r;
//                         const chipHref  = isObj ? r.href  : null;
//                         return chipHref ? (
//                           <a key={i} href={chipHref} className="pcalc-related-chip">{chipLabel}</a>
//                         ) : (
//                           <button key={i} type="button" className="pcalc-related-chip">{chipLabel}</button>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 )}

//               </div>
//             </section>
//           </div>

//         </div>

//       </div>
//     </>
//   );
// }



'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { processContent } from '../../../../utils/contentProcessor';
import { DEFAULT_OPERATIONS, DEFAULT_OPERATION_ORDER } from './polynomialCalculatorData';

/* ============================================================================
   PolynomialCalculator — v10
   API matches the combinatorics-calculator pattern:
     initialOperation   — 1-indexed number, default 1. Falls back to 1 if
                          out of range. A useEffect syncs prop → state, so
                          the parent can change this at any time.
     operations         — partial override map, merged two levels deep.
     operationOrder     — replaces the default order array if passed.
============================================================================ */

/* ===== Math utilities ==================================================== */

const SUPER_MAP_TO = { '⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9' };
const SUPER_MAP_FROM = { '0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹' };
function toSuper(n) {
  return String(n).split('').map(d => SUPER_MAP_FROM[d] || d).join('');
}

function parsePolynomial(text) {
  if (text == null) return null;
  let s = String(text).trim();
  if (!s) return null;
  s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, run => '^' + run.split('').map(c => SUPER_MAP_TO[c]).join(''));
  s = s.replace(/\*\*/g, '^').replace(/[−–—]/g, '-').replace(/\s+/g, '').replace(/\*/g, '');
  s = s.replace(/\^\{(-?\d+)\}/g, '^$1');
  if (!s) return null;
  let w = s.replace(/-/g, '+-');
  if (w.startsWith('+')) w = w.slice(1);
  const terms = w.split('+').filter(t => t.length > 0);
  if (!terms.length) return null;

  const TERM_RE = /^(-?)(\d*\.?\d*)([a-zA-Z]?)(?:\^(-?\d+))?$/;
  const byPow = {};
  for (const t of terms) {
    const m = t.match(TERM_RE);
    if (!m) return null;
    const [, sign, numStr, variable, powerStr] = m;
    let coef;
    if (numStr === '' || numStr === '.') {
      if (!variable) return null;
      coef = 1;
    } else {
      coef = parseFloat(numStr);
      if (isNaN(coef)) return null;
    }
    if (sign === '-') coef = -coef;
    let pow;
    if (!variable) pow = 0;
    else if (powerStr == null || powerStr === '') pow = 1;
    else {
      pow = parseInt(powerStr, 10);
      if (isNaN(pow) || pow < 0) return null;
    }
    byPow[pow] = (byPow[pow] || 0) + coef;
  }
  const powers = Object.keys(byPow).map(Number);
  if (!powers.length) return null;
  const maxPow = Math.max(...powers);
  const coefs = [];
  for (let p = maxPow; p >= 0; p--) coefs.push(byPow[p] || 0);
  return coefs;
}

function coefsToInputString(coefs) {
  if (!coefs || !coefs.length) return '0';
  const degree = coefs.length - 1;
  const parts = [];
  coefs.forEach((c, i) => {
    const power = degree - i;
    if (c === 0) return;
    const absC = Math.abs(c);
    let term;
    if (power === 0)      term = `${absC}`;
    else if (power === 1) term = absC === 1 ? 'x'        : `${absC}x`;
    else                  term = absC === 1 ? `x^${power}` : `${absC}x^${power}`;
    if (parts.length === 0) parts.push(c < 0 ? `-${term}` : term);
    else                    parts.push(c < 0 ? ` - ${term}` : ` + ${term}`);
  });
  return parts.length ? parts.join('') : '0';
}

function coefsToLatex(coefs) {
  if (!coefs || !coefs.length) return '0';
  const degree = coefs.length - 1;
  const parts = [];
  coefs.forEach((c, i) => {
    const power = degree - i;
    if (c === 0) return;
    const absC = Math.abs(c);
    let term;
    if (power === 0)      term = `${absC}`;
    else if (power === 1) term = absC === 1 ? 'x'              : `${absC}x`;
    else                  term = absC === 1 ? `x^{${power}}`   : `${absC}x^{${power}}`;
    if (parts.length === 0) parts.push(c < 0 ? `-${term}` : term);
    else                    parts.push(c < 0 ? `- ${term}` : `+ ${term}`);
  });
  return parts.length ? parts.join(' ') : '0';
}

function exprToDisplayLatex(expr) {
  if (!expr) return '';
  let s = String(expr);
  s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, run => '^' + run.split('').map(c => SUPER_MAP_TO[c]).join(''));
  s = s.replace(/\^(-?\d+)/g, '^{$1}');
  s = s.replace(/\*/g, ' \\cdot ');
  s = s.replace(/[−–—]/g, '-');
  return s;
}

function isExprParseable(expr) {
  if (!expr || !expr.trim()) return false;
  return parsePolynomial(expr) !== null;
}

function slotTextToNum(t) {
  if (t == null || t === '' || t === '-' || t === '.' || t === '-.') return 0;
  const n = parseFloat(t);
  return isNaN(n) ? 0 : n;
}

const SLOT_INPUT_RE = /^-?\d*\.?\d*$/;

/* ===== Operation merge =================================================== */

function mergeOperations(defaults, override) {
  if (!override) return defaults;
  const merged = { ...defaults };
  for (const key of Object.keys(override)) {
    const defOp = defaults[key];
    const ovOp = override[key];
    if (!defOp) {
      merged[key] = ovOp;
      continue;
    }
    merged[key] = { ...defOp, ...ovOp };
    if (defOp.result && ovOp.result) {
      merged[key].result = { ...defOp.result, ...ovOp.result };
    }
    if (defOp.about && ovOp.about) {
      merged[key].about = { ...defOp.about, ...ovOp.about };
    }
  }
  return merged;
}

/* ===== Styles ============================================================ */
const CSS = `
.pcalc-page {
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.5rem 0 3rem;
  font-family: var(--ms-font-sans, 'Inter', -apple-system, BlinkMacSystemFont, sans-serif);
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--ms-text, #0f172a);
  -webkit-font-smoothing: antialiased;
}
.pcalc-page * { box-sizing: border-box; }

.pcalc-header { margin-bottom: 1rem; }
.pcalc-eyebrow {
  font-size: 0.7rem; font-weight: 600; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--ms-primary, #1d4ed8);
  margin-bottom: 0.35rem;
}
.pcalc-title-row { display: flex; align-items: center; gap: 0.55rem; position: relative; }
.pcalc-title {
  font-family: var(--ms-font-serif, 'Playfair Display', Georgia, serif);
  font-weight: 700; font-size: 1.65rem; margin: 0; letter-spacing: -0.005em;
}

.pcalc-help-wrap { position: relative; display: inline-block; }
.pcalc-help-btn {
  width: 22px; height: 22px; border-radius: 50%;
  background: transparent;
  border: 1.5px solid var(--ms-primary-light, #dbeafe);
  color: var(--ms-primary, #1d4ed8);
  font-family: inherit; font-size: 0.78rem; font-weight: 700;
  cursor: pointer; padding: 0; line-height: 1;
  display: inline-flex; align-items: center; justify-content: center;
  transition: all 0.12s;
}
.pcalc-help-btn:hover,
.pcalc-help-wrap.is-open .pcalc-help-btn {
  background: var(--ms-primary-light, #dbeafe);
  border-color: var(--ms-primary, #1d4ed8);
}
.pcalc-tooltip {
  position: absolute; top: calc(100% + 10px); left: 50%; transform: translateX(-50%);
  width: 320px; max-width: 90vw;
  background: rgba(15, 23, 42, 0.94);
  color: rgba(241, 245, 249, 0.95);
  border-radius: 8px; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.28);
  padding: 0.8rem 0.95rem; font-size: 0.86rem; line-height: 1.45;
  z-index: 100; opacity: 0; pointer-events: none;
  transition: opacity 0.15s;
  backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
}
.pcalc-tooltip::before {
  content: ''; position: absolute; top: -5px; left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 10px; height: 10px;
  background: rgba(15, 23, 42, 0.94);
}
.pcalc-tooltip::after {
  content: ''; position: absolute; top: -14px;
  left: 0; right: 0; height: 14px;
}
.pcalc-help-wrap:hover .pcalc-tooltip,
.pcalc-help-wrap.is-open .pcalc-tooltip,
.pcalc-help-btn:focus-visible + .pcalc-tooltip {
  opacity: 1; pointer-events: auto;
}
.pcalc-tooltip p { margin: 0 0 0.6rem; color: rgba(241, 245, 249, 0.88); }
.pcalc-tooltip p:last-child { margin-bottom: 0; }
.pcalc-tooltip-link {
  display: inline-flex; align-items: center; gap: 0.25rem;
  color: #93c5fd; font-weight: 600; font-size: 0.84rem; text-decoration: none;
}
.pcalc-tooltip-link:hover { color: #dbeafe; text-decoration: underline; }

.pcalc-ops {
  display: flex; align-items: center; gap: 0.7rem; flex-wrap: wrap;
  margin: 1.2rem 0 1.2rem; padding: 0.5rem 0.65rem 0.5rem 0.85rem;
  background: var(--ms-card-bg, #fff); border: 1px solid var(--ms-border, #e2e8f0);
  border-radius: 8px; box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
}
.pcalc-ops-label {
  font-size: 0.66rem; font-weight: 700; letter-spacing: 0.16em;
  text-transform: uppercase; color: var(--ms-text-muted, #64748b);
  padding: 0.1rem 0.85rem 0.1rem 0;
  border-right: 1px solid var(--ms-border, #e2e8f0);
  align-self: stretch; display: inline-flex; align-items: center;
}
.pcalc-ops-list { display: flex; flex-wrap: wrap; gap: 0.25rem; }
.pcalc-op-btn {
  font-family: inherit; font-size: 0.84rem; font-weight: 500;
  padding: 0.42rem 0.85rem; background: transparent;
  border: 1px solid transparent; border-radius: 5px;
  color: var(--ms-text-soft, #475569); cursor: pointer;
  transition: all 0.1s; white-space: nowrap;
}
.pcalc-op-btn:hover { background: var(--ms-primary-light, #dbeafe); color: var(--ms-primary-dark, #1e3a8a); }
.pcalc-op-btn.is-active { background: var(--ms-primary, #1d4ed8); color: #fff; }

.pcalc-grid { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: start; }
@media (max-width: 980px) { .pcalc-grid { grid-template-columns: 1fr; } }

.pcalc-card {
  background: var(--ms-card-bg, #fff); border: 1px solid var(--ms-border, #e2e8f0);
  border-radius: 11px; box-shadow: 0 2px 6px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04);
  margin-bottom: 1.1rem; overflow: hidden;
}
.pcalc-card-header {
  background: var(--ms-primary, #1d4ed8); color: #fff;
  padding: 0.7rem 1.15rem;
  font-family: var(--ms-font-serif, 'Playfair Display', Georgia, serif);
  font-weight: 600; font-size: 1.02rem;
}
.pcalc-card-body { padding: 1.05rem 1.2rem; }

.pcalc-input-toolbar {
  display: flex; justify-content: flex-end; align-items: center;
  margin-bottom: 0.85rem; gap: 0.65rem; flex-wrap: wrap;
}
.pcalc-mode-toggle {
  display: inline-flex; background: #f1f5f9;
  border-radius: 8px; padding: 2px;
}
.pcalc-mode-toggle button {
  font-family: inherit; font-size: 0.8rem; font-weight: 500;
  padding: 0.35rem 0.75rem; border-radius: 6px; border: none;
  background: transparent; color: var(--ms-text-soft, #475569);
  cursor: pointer; display: inline-flex; align-items: center; gap: 0.3rem;
}
.pcalc-mode-toggle button.is-active {
  background: #fff; color: var(--ms-text, #0f172a);
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
}

.pcalc-poly-list { display: flex; flex-direction: column; gap: 0.6rem; }
.pcalc-poly-row {
  display: grid; grid-template-columns: 36px 1fr 30px; gap: 0.55rem; align-items: stretch;
}
.pcalc-poly-row.is-dual { grid-template-columns: 96px 1fr; }
.pcalc-poly-row.is-single { grid-template-columns: 36px 1fr; }
.pcalc-poly-row.is-editing { grid-template-columns: 1fr; }
.pcalc-poly-row.is-editing > .pcalc-poly-tag,
.pcalc-poly-row.is-editing > .pcalc-poly-remove { display: none; }

.pcalc-poly-tag {
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--ms-primary-light, #dbeafe);
  color: var(--ms-primary-dark, #1e3a8a);
  border-radius: 5px;
  font-family: var(--ms-font-mono, 'JetBrains Mono', monospace);
  font-size: 0.86rem; font-weight: 600;
}
.pcalc-poly-tag.role { font-family: inherit; font-size: 0.72rem; padding: 0 0.4rem; text-align: center; }

.pcalc-poly-box {
  position: relative; display: flex; align-items: center;
  padding: 0.65rem 0.95rem; min-height: 54px;
  background: #fff; border: 2px dashed var(--ms-border-strong, #cbd5e1);
  border-radius: 8px; font-size: 1.15rem;
  transition: all 0.12s; cursor: pointer;
}
.pcalc-poly-box:hover { border-color: var(--ms-primary, #1d4ed8); background: #f8faff; }
.pcalc-poly-placeholder-tag {
  position: absolute; top: 0.35rem; left: 0.7rem;
  font-family: var(--ms-font-sans, sans-serif);
  font-size: 0.6rem; font-weight: 600; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--ms-text-muted, #64748b);
}
.pcalc-poly-edit-hint {
  position: absolute; right: 0.7rem; bottom: 0.35rem;
  font-family: var(--ms-font-sans, sans-serif);
  font-size: 0.7rem; color: var(--ms-text-muted, #64748b);
}
.pcalc-poly-content {
  width: 100%; display: flex; align-items: center; padding: 0.2rem 0;
}
.pcalc-poly-remove {
  display: inline-flex; align-items: center; justify-content: center;
  width: 30px; height: 30px; align-self: center;
  border-radius: 50%; border: 1.5px solid var(--ms-border-strong, #cbd5e1);
  background: #fff; color: var(--ms-text-muted, #64748b);
  cursor: pointer; font-size: 0.82rem; transition: all 0.12s;
}
.pcalc-poly-remove:hover {
  background: var(--ms-error-bg, #fee2e2);
  color: var(--ms-error, #b91c1c);
  border-color: var(--ms-error, #b91c1c);
}
.pcalc-poly-remove.is-hidden { visibility: hidden; }

.pcalc-poly-op { display: grid; grid-template-columns: 36px 1fr 30px; gap: 0.55rem; }
.pcalc-poly-op.is-dual { grid-template-columns: 96px 1fr; }
.pcalc-poly-op-symbol {
  grid-column: 2;
  font-family: var(--ms-font-serif, 'Playfair Display', Georgia, serif);
  font-size: 1.2rem; color: var(--ms-text-soft, #475569); padding: 0.05rem 0;
}

.pcalc-add-poly {
  display: flex; align-items: center; justify-content: center; gap: 0.35rem;
  margin-top: 0.6rem; padding: 0.6rem; width: 100%;
  font-family: inherit; font-size: 0.85rem; font-weight: 600;
  background: transparent; color: var(--ms-primary, #1d4ed8);
  border: 1.5px dashed var(--ms-primary, #1d4ed8); border-radius: 8px;
  cursor: pointer; transition: all 0.12s;
}
.pcalc-add-poly:hover { background: var(--ms-primary-light, #dbeafe); }

.pcalc-actions { display: flex; gap: 0.55rem; margin-top: 1rem; flex-wrap: wrap; }
.pcalc-btn {
  font-family: inherit; font-size: 0.9rem; font-weight: 600;
  padding: 0.6rem 1.2rem; border-radius: 8px;
  border: 1.5px solid transparent; cursor: pointer; transition: all 0.1s;
}
.pcalc-btn:active { transform: translateY(1px); }
.pcalc-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.pcalc-btn-primary { background: var(--ms-primary, #1d4ed8); color: #fff; }
.pcalc-btn-primary:hover:not(:disabled) { background: var(--ms-primary-hover, #1e40af); }
.pcalc-btn-secondary {
  background: #fff; color: var(--ms-text-soft, #475569);
  border-color: var(--ms-border-strong, #cbd5e1);
}
.pcalc-btn-secondary:hover { background: #f8fafc; color: var(--ms-text, #0f172a); border-color: var(--ms-text-muted, #64748b); }

.pcalc-result {
  background: linear-gradient(180deg, #eff6ff 0%, #f0f9ff 100%);
  border-left: 3px solid var(--ms-primary, #1d4ed8);
  padding: 1rem 1.15rem;
}
.pcalc-result-eyebrow {
  font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--ms-primary, #1d4ed8);
  margin-bottom: 0.4rem;
}
.pcalc-result-math { font-size: 1.35rem; color: var(--ms-text, #0f172a); margin-bottom: 0.35rem; }
.pcalc-result-extras { display: flex; flex-direction: column; gap: 0.25rem; margin-top: 0.5rem; }
.pcalc-result-extra { display: flex; align-items: baseline; gap: 0.5rem; font-size: 0.88rem; }
.pcalc-result-extra-label { font-weight: 600; color: var(--ms-text-soft, #475569); min-width: 90px; }
.pcalc-result-identity {
  margin-top: 0.55rem; padding-top: 0.55rem;
  border-top: 1px solid rgba(29, 78, 216, 0.15);
  font-size: 1.05rem;
}
.pcalc-result-subline {
  font-size: 0.82rem; color: var(--ms-text-soft, #475569);
  display: flex; gap: 0.85rem; flex-wrap: wrap; margin-top: 0.5rem;
}
.pcalc-result-actions { display: flex; gap: 0.4rem; margin-top: 0.75rem; flex-wrap: wrap; }
.pcalc-icon-btn {
  display: inline-flex; align-items: center; gap: 0.3rem;
  font-family: inherit; font-size: 0.78rem; font-weight: 500;
  padding: 0.35rem 0.7rem;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid var(--ms-primary-light, #dbeafe);
  color: var(--ms-primary, #1d4ed8);
  border-radius: 8px; cursor: pointer; transition: all 0.12s;
}
.pcalc-icon-btn:hover { background: #fff; border-color: var(--ms-primary, #1d4ed8); }

.pcalc-section-block { padding: 0.85rem 0; border-bottom: 1px solid var(--ms-border, #e2e8f0); }
.pcalc-section-block:first-child { padding-top: 0; }
.pcalc-section-block:last-child { padding-bottom: 0; border-bottom: none; }
.pcalc-section-title {
  font-family: var(--ms-font-serif, 'Playfair Display', Georgia, serif);
  font-size: 0.94rem; font-weight: 600; color: var(--ms-text, #0f172a);
  margin: 0 0 0.65rem; display: flex; align-items: center; gap: 0.4rem;
}
.pcalc-section-badge {
  font-family: var(--ms-font-sans, sans-serif);
  font-size: 0.62rem; font-weight: 600; letter-spacing: 0.1em;
  text-transform: uppercase;
  background: var(--ms-primary-light, #dbeafe);
  color: var(--ms-primary-dark, #1e3a8a);
  padding: 0.15rem 0.45rem; border-radius: 999px;
}

.pcalc-steps-section { position: relative; }
.pcalc-steps-scroll {
  max-height: 360px; overflow-y: auto; padding-right: 0.25rem;
  scrollbar-width: none; -ms-overflow-style: none;
}
.pcalc-steps-scroll::-webkit-scrollbar { width: 0; height: 0; display: none; }
.pcalc-steps-fade {
  pointer-events: none; position: absolute;
  left: 0; right: 0; bottom: 0; height: 50px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, var(--ms-card-bg, #fff) 75%);
  opacity: 0; transition: opacity 0.15s;
}
.pcalc-steps-fade.is-visible { opacity: 1; }
.pcalc-steps-chevron {
  position: absolute; bottom: 4px; left: 50%;
  transform: translateX(-50%) translateY(0);
  display: inline-flex; align-items: center; justify-content: center;
  width: 36px; height: 22px; padding: 0;
  background: transparent; border: none;
  color: var(--ms-primary, #1d4ed8);
  cursor: pointer; opacity: 0; pointer-events: none;
  border-radius: 4px; transition: opacity 0.18s, background 0.15s;
  z-index: 2;
}
.pcalc-steps-chevron.is-visible {
  opacity: 0.7; pointer-events: auto;
  animation: pcalc-chevron-bounce 1.8s ease-in-out infinite;
}
.pcalc-steps-chevron:hover { opacity: 1; background: rgba(29, 78, 216, 0.08); }
.pcalc-steps-chevron svg { display: block; }
@keyframes pcalc-chevron-bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%      { transform: translateX(-50%) translateY(3px); }
}

.pcalc-step {
  display: grid; grid-template-columns: 28px 1fr; gap: 0.6rem;
  padding: 0.65rem 0; border-bottom: 1px solid var(--ms-border, #e2e8f0);
}
.pcalc-step:last-child { border-bottom: none; }
.pcalc-step-num {
  width: 24px; height: 24px; border-radius: 50%;
  background: var(--ms-primary, #1d4ed8); color: #fff;
  font-family: var(--ms-font-serif, 'Playfair Display', Georgia, serif);
  font-weight: 600; font-size: 0.78rem;
  display: inline-flex; align-items: center; justify-content: center;
}
.pcalc-step-title {
  font-family: var(--ms-font-serif, 'Playfair Display', Georgia, serif);
  font-weight: 600; font-size: 0.92rem; margin: 0 0 0.35rem;
}
.pcalc-step-math {
  background: #f8fafc; border: 1px solid var(--ms-border, #e2e8f0);
  border-radius: 8px; padding: 0.5rem 0.7rem;
  margin-bottom: 0.3rem; font-size: 0.98rem; overflow-x: auto;
}
.pcalc-step-note { color: var(--ms-text-soft, #475569); font-size: 0.82rem; margin: 0; }

.pcalc-method-text { font-size: 0.88rem; color: var(--ms-text-soft, #475569); margin: 0 0 0.55rem; }
.pcalc-method-text:last-child { margin-bottom: 0; }
.pcalc-method-formula {
  background: #f8fafc; border: 1px solid var(--ms-border, #e2e8f0);
  border-radius: 8px; padding: 0.6rem 0.85rem; font-size: 1rem; margin: 0.55rem 0;
}

.pcalc-pitfall-list { margin: 0; padding-left: 1.05rem; }
.pcalc-pitfall-list li { margin: 0.35rem 0; font-size: 0.85rem; color: var(--ms-text-soft, #475569); }

.pcalc-related-row { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.pcalc-related-chip {
  font-family: inherit; font-size: 0.78rem; font-weight: 500;
  padding: 0.35rem 0.75rem;
  background: var(--ms-primary-light, #dbeafe);
  color: var(--ms-primary-dark, #1e3a8a);
  border: 1px solid transparent; border-radius: 999px;
  cursor: pointer; transition: all 0.12s;
  text-decoration: none;
  display: inline-flex; align-items: center;
}
.pcalc-related-chip:hover { background: #bfdbfe; }

/* ===== Editor shared ===== */
.pcalc-editor {
  border: 2px solid var(--ms-primary, #1d4ed8);
  border-radius: 10px;
  background: #fafcff;
  padding: 0.85rem 1rem;
  display: flex; flex-direction: column; gap: 0.75rem;
}
.pcalc-editor-head {
  display: flex; justify-content: space-between; align-items: center;
  gap: 0.6rem; flex-wrap: wrap;
}
.pcalc-editor-head-title {
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--ms-primary, #1d4ed8);
}
.pcalc-editor-head-actions { display: flex; gap: 0.4rem; }
.pcalc-editor-head-actions button {
  font-family: inherit; font-size: 0.82rem; font-weight: 500;
  padding: 0.42rem 0.95rem; border-radius: 6px;
  border: 1.5px solid var(--ms-border-strong, #cbd5e1);
  background: #fff; color: var(--ms-text-soft, #475569);
  cursor: pointer; transition: all 0.1s;
}
.pcalc-editor-head-actions button:disabled { opacity: 0.45; cursor: not-allowed; }
.pcalc-editor-head-actions .is-primary {
  background: var(--ms-primary, #1d4ed8); color: #fff;
  border-color: var(--ms-primary, #1d4ed8);
}
.pcalc-editor-head-actions .is-primary:hover:not(:disabled) {
  background: var(--ms-primary-hover, #1e40af);
}

/* ===== Keypad editor ===== */
.pcalc-kp-display {
  width: 100%; min-height: 64px;
  padding: 0.7rem 1rem;
  background: #fff; border: 1.5px solid var(--ms-primary, #1d4ed8);
  border-radius: 8px;
  display: flex; align-items: center;
  font-size: 1.35rem; overflow-x: auto;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.8), 0 1px 3px rgba(29,78,216,0.07);
  position: relative;
}
.pcalc-kp-display.is-empty {
  justify-content: center;
  font-family: var(--ms-font-sans, sans-serif);
  font-style: italic; font-size: 0.9rem;
  color: var(--ms-text-muted, #64748b);
  border-style: dashed; border-color: var(--ms-border-strong, #cbd5e1);
}
.pcalc-kp-display.is-invalid { border-color: #fca5a5; background: #fffbfb; }

.pcalc-kp-layout {
  display: grid; grid-template-columns: 1fr 1.05fr; gap: 0.75rem;
}
@media (max-width: 720px) {
  .pcalc-kp-layout { grid-template-columns: 1fr; }
}

.pcalc-dial-card {
  background: linear-gradient(180deg, #f0f5ff 0%, #eff6ff 100%);
  border: 1.5px solid var(--ms-primary-light, #dbeafe);
  border-radius: 8px; padding: 0.8rem 0.9rem;
}
.pcalc-dial-title {
  font-size: 0.66rem; font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--ms-primary, #1d4ed8);
  margin-bottom: 0.6rem;
}
.pcalc-dial-row {
  display: flex; align-items: center; justify-content: center;
  gap: 0.55rem; margin-bottom: 0.7rem;
}
.pcalc-dial-step {
  width: 34px; height: 34px; border-radius: 50%;
  border: 1.5px solid var(--ms-primary, #1d4ed8);
  background: #fff; color: var(--ms-primary, #1d4ed8);
  font-size: 1.1rem; font-weight: 600; cursor: pointer; line-height: 1;
  display: inline-flex; align-items: center; justify-content: center;
  transition: all 0.12s;
}
.pcalc-dial-step:hover:not(:disabled) { background: var(--ms-primary, #1d4ed8); color: #fff; }
.pcalc-dial-step:disabled { opacity: 0.35; cursor: not-allowed; }

.pcalc-dial-insert {
  min-width: 118px;
  min-height: 78px;
  padding: 0.7rem 1rem;
  background: var(--ms-primary, #1d4ed8); color: #fff;
  border: none; border-radius: 8px;
  cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center;
  transition: all 0.12s; box-shadow: 0 2px 6px rgba(29, 78, 216, 0.2);
  overflow: hidden;
}
.pcalc-dial-insert:hover { background: var(--ms-primary-hover, #1e40af); }
.pcalc-dial-insert-stack {
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 0.4rem;
  line-height: 1;
}
.pcalc-dial-insert-label {
  font-family: var(--ms-font-sans, sans-serif);
  font-size: 0.58rem; font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase;
  opacity: 0.88;
  margin: 0; line-height: 1;
  white-space: nowrap;
}
.pcalc-dial-insert-math {
  font-family: 'Times New Roman', 'STIX Two Math', Georgia, serif;
  font-style: italic;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.01em;
}

.pcalc-dial-quick-label { font-size: 0.72rem; font-weight: 600; color: var(--ms-text-soft, #475569); margin-bottom: 0.4rem; }
.pcalc-dial-quick { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.4rem; }
.pcalc-dial-chip {
  height: 38px;
  background: #fff; border: 1.5px solid var(--ms-border-strong, #cbd5e1);
  border-radius: 6px; font-size: 1.02rem;
  color: var(--ms-text, #0f172a); cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  font-family: inherit;
  box-shadow: 0 1px 2px rgba(15,23,42,0.05);
  transition: all 0.1s;
}
.pcalc-dial-chip:hover {
  background: var(--ms-primary-light, #dbeafe);
  border-color: var(--ms-primary, #1d4ed8);
  color: var(--ms-primary-dark, #1e3a8a);
}
.pcalc-dial-chip.is-active {
  background: var(--ms-primary, #1d4ed8); border-color: var(--ms-primary, #1d4ed8); color: #fff;
}

.pcalc-dial-custom {
  margin-top: 0.7rem; padding-top: 0.7rem;
  border-top: 1px solid var(--ms-primary-light, #dbeafe);
  display: flex; align-items: center; gap: 0.45rem;
  font-size: 0.78rem; color: var(--ms-text-soft, #475569); flex-wrap: wrap;
}
.pcalc-dial-custom input {
  width: 54px; height: 30px; padding: 0 0.4rem;
  font-family: var(--ms-font-mono, monospace); font-size: 0.95rem; text-align: center;
  background: #fff; border: 1.5px solid var(--ms-border-strong, #cbd5e1);
  border-radius: 5px; outline: none;
  -moz-appearance: textfield;
}
.pcalc-dial-custom input::-webkit-outer-spin-button,
.pcalc-dial-custom input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
.pcalc-dial-custom input:focus { border-color: var(--ms-primary, #1d4ed8); box-shadow: 0 0 0 3px rgba(29,78,216,0.14); }

.pcalc-kp-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 0.4rem; align-content: start; }
.pcalc-kp-btn {
  height: 42px; font-family: var(--ms-font-mono, monospace); font-size: 1rem; font-weight: 500;
  background: #fff; border: 1.5px solid var(--ms-border-strong, #cbd5e1);
  border-radius: 7px; color: var(--ms-text, #0f172a);
  cursor: pointer; transition: all 0.08s;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 1px 2px rgba(15,23,42,0.04);
}
.pcalc-kp-btn:hover { background: var(--ms-primary-light, #dbeafe); border-color: var(--ms-primary, #1d4ed8); color: var(--ms-primary-dark, #1e3a8a); }
.pcalc-kp-btn:active { transform: translateY(1px); }
.pcalc-kp-btn.op { background: #f1f5f9; }
.pcalc-kp-btn.cmd { background: #fef2f2; color: #b91c1c; border-color: #fca5a5; }
.pcalc-kp-btn.cmd:hover { background: #fee2e2; }
.pcalc-kp-btn.zero { grid-column: span 2; }

/* ===== Slots editor ===== */
.pcalc-sl-row {
  display: flex; flex-wrap: wrap; align-items: center; gap: 0.4rem;
  padding: 0.65rem 0.85rem; background: #fff;
  border: 1.5px solid var(--ms-border, #e2e8f0);
  border-radius: 8px; min-height: 64px;
}
.pcalc-sl-group { display: inline-flex; align-items: center; gap: 0.3rem; }
.pcalc-sl-slot input {
  width: 64px; height: 44px; text-align: center;
  padding: 0 0.4rem;
  font-family: var(--ms-font-mono, monospace); font-size: 1.05rem; font-weight: 500;
  background: #fff; border: 1.5px solid var(--ms-border-strong, #cbd5e1);
  border-radius: 7px; color: var(--ms-text, #0f172a); outline: none;
  transition: all 0.12s;
}
.pcalc-sl-slot input::placeholder {
  color: var(--ms-text-muted, #64748b);
  opacity: 0.5;
}
.pcalc-sl-slot input:focus { border-color: var(--ms-primary, #1d4ed8); box-shadow: 0 0 0 3px rgba(29,78,216,0.16); }
.pcalc-sl-slot input.is-zero { background: #f1f5f9; color: var(--ms-text-muted, #64748b); }
.pcalc-sl-slot input.is-neg { background: #fef2f2; color: #b91c1c; }
.pcalc-sl-power { font-size: 1.05rem; color: var(--ms-text, #0f172a); }
.pcalc-sl-op {
  font-family: var(--ms-font-mono, monospace); font-size: 1.2rem;
  color: var(--ms-text-muted, #64748b); padding: 0 0.15rem;
}
.pcalc-sl-meta { display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; flex-wrap: wrap; }
.pcalc-sl-degree {
  display: inline-flex; align-items: center; gap: 0.4rem;
  font-size: 0.82rem; color: var(--ms-text-soft, #475569);
}
.pcalc-sl-degbtn {
  width: 28px; height: 28px; border-radius: 50%;
  border: 1.5px solid var(--ms-border-strong, #cbd5e1);
  background: #fff; color: var(--ms-text-soft, #475569);
  cursor: pointer; font-size: 1rem; line-height: 1;
  display: inline-flex; align-items: center; justify-content: center;
  transition: all 0.12s;
}
.pcalc-sl-degbtn:hover:not(:disabled) { border-color: var(--ms-primary, #1d4ed8); color: var(--ms-primary, #1d4ed8); background: var(--ms-primary-light, #dbeafe); }
.pcalc-sl-degbtn:disabled { opacity: 0.35; cursor: not-allowed; }
.pcalc-sl-preview {
  padding: 0.5rem 0.8rem;
  background: #f8fafc; border: 1px solid var(--ms-border, #e2e8f0);
  border-radius: 7px; font-size: 1.05rem; min-height: 2.2rem;
  display: flex; align-items: center; gap: 0.5rem;
}
.pcalc-sl-preview-label {
  font-size: 0.68rem; font-weight: 600; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--ms-text-muted, #64748b);
}

.pcalc-skeleton { min-height: 720px; }
`;

/* ===== Slots input ======================================================= */

function SlotsInput({ initialValue, label, onSave, onCancel }) {
  const parsedInit = parsePolynomial(initialValue) || [0];
  const [coefTexts, setCoefTexts] = useState(() => parsedInit.map(c => String(c)));

  const degree = coefTexts.length - 1;
  const coefNums = coefTexts.map(slotTextToNum);

  const updateCoef = (i, raw) => {
    if (!SLOT_INPUT_RE.test(raw)) return;
    const next = coefTexts.slice();
    next[i] = raw;
    setCoefTexts(next);
  };

  const incDegree = () => setCoefTexts(['0', ...coefTexts]);
  const decDegree = () => { if (coefTexts.length > 1) setCoefTexts(coefTexts.slice(1)); };
  const handleSave = () => onSave(coefsToInputString(coefNums));

  return (
    <div className="pcalc-editor">
      <div className="pcalc-editor-head">
        <div className="pcalc-editor-head-title">Editing {label} · Slots</div>
        <div className="pcalc-editor-head-actions">
          <button type="button" onClick={onCancel}>Cancel</button>
          <button type="button" className="is-primary" onClick={handleSave}>Save</button>
        </div>
      </div>

      <div className="pcalc-sl-meta">
        <div className="pcalc-sl-degree">
          <button type="button" className="pcalc-sl-degbtn" onClick={decDegree} disabled={coefTexts.length <= 1} aria-label="Decrease degree">−</button>
          <span>Degree <strong>{degree}</strong></span>
          <button type="button" className="pcalc-sl-degbtn" onClick={incDegree} aria-label="Increase degree">+</button>
        </div>
      </div>

      <div className="pcalc-sl-row">
        {coefTexts.map((txt, i) => {
          const power = degree - i;
          const num = coefNums[i];
          const visualClass =
            num === 0 ? 'is-zero' :
            num < 0   ? 'is-neg'  : '';
          return (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <span className="pcalc-sl-group">
                <span className="pcalc-sl-slot">
                  <input
                    type="text"
                    inputMode="decimal"
                    value={txt}
                    placeholder="0"
                    autoComplete="off"
                    spellCheck={false}
                    onChange={e => updateCoef(i, e.target.value)}
                    onFocus={e => e.target.select()}
                    className={visualClass}
                    aria-label={power === 0 ? 'Constant' : `Coefficient of x^${power}`}
                  />
                </span>
                {power > 0 && (
                  <span className="pcalc-sl-power">
                    {processContent('$' + (power === 1 ? 'x' : `x^{${power}}`) + '$')}
                  </span>
                )}
              </span>
              {i < coefTexts.length - 1 && <span className="pcalc-sl-op">+</span>}
            </span>
          );
        })}
      </div>

      <div className="pcalc-sl-preview">
        <span className="pcalc-sl-preview-label">Reads as</span>
        <span>{processContent('$' + coefsToLatex(coefNums) + '$')}</span>
      </div>
    </div>
  );
}

/* ===== Keypad input ====================================================== */

function KeypadInput({ initialValue, label, onSave, onCancel }) {
  const [expr, setExpr] = useState(initialValue || '');
  const [power, setPower] = useState(3);

  const valid = isExprParseable(expr);

  const append = (s) => setExpr(prev => prev + s);
  const backspace = () => setExpr(prev => prev.slice(0, -1));
  const clearAll = () => setExpr('');
  const insertVar = () => {
    const token = power <= 1 ? 'x' : 'x^' + power;
    setExpr(prev => prev + token);
  };
  const insertVarAt = (p) => {
    const token = p <= 1 ? 'x' : 'x^' + p;
    setExpr(prev => prev + token);
    setPower(p);
  };

  const dialPlainText = power <= 1 ? 'x' : 'x' + toSuper(power);
  const displayLatex = exprToDisplayLatex(expr);

  const handleSave = () => {
    if (!valid) return;
    onSave(expr);
  };

  return (
    <div className="pcalc-editor">
      <div className="pcalc-editor-head">
        <div className="pcalc-editor-head-title">Editing {label} · Keypad</div>
        <div className="pcalc-editor-head-actions">
          <button type="button" onClick={onCancel}>Cancel</button>
          <button type="button" className="is-primary" onClick={handleSave} disabled={!valid}>Save</button>
        </div>
      </div>

      <div className={
        'pcalc-kp-display' +
        (!expr.trim() ? ' is-empty' : '') +
        (expr.trim() && !valid ? ' is-invalid' : '')
      }>
        {expr.trim()
          ? processContent('$' + displayLatex + '$')
          : 'Tap buttons to build a polynomial'}
      </div>

      <div className="pcalc-kp-layout">
        <div className="pcalc-dial-card">
          <div className="pcalc-dial-title">Insert x to the power</div>
          <div className="pcalc-dial-row">
            <button type="button" className="pcalc-dial-step" onClick={() => setPower(p => Math.max(1, p - 1))} disabled={power <= 1} aria-label="Decrease power">−</button>
            <button type="button" className="pcalc-dial-insert" onClick={insertVar} aria-label="Insert at current power">
              <span className="pcalc-dial-insert-stack">
                <span className="pcalc-dial-insert-label">Tap to insert</span>
                <span className="pcalc-dial-insert-math">{dialPlainText}</span>
              </span>
            </button>
            <button type="button" className="pcalc-dial-step" onClick={() => setPower(p => Math.min(99, p + 1))} disabled={power >= 99} aria-label="Increase power">+</button>
          </div>

          <div className="pcalc-dial-quick-label">Quick presets</div>
          <div className="pcalc-dial-quick">
            {[1, 2, 3, 4, 5, 6].map(p => (
              <button
                key={p}
                type="button"
                className={'pcalc-dial-chip' + (power === p ? ' is-active' : '')}
                onClick={() => insertVarAt(p)}
              >
                {p === 1 ? 'x' : 'x' + toSuper(p)}
              </button>
            ))}
          </div>

          <div className="pcalc-dial-custom">
            <span>Custom power:</span>
            <input
              type="number"
              min="1"
              max="99"
              step="1"
              value={power}
              onChange={e => {
                const v = parseInt(e.target.value, 10);
                if (!isNaN(v) && v >= 1 && v <= 99) setPower(v);
              }}
            />
          </div>
        </div>

        <div className="pcalc-kp-grid">
          <button type="button" className="pcalc-kp-btn" onClick={() => append('7')}>7</button>
          <button type="button" className="pcalc-kp-btn" onClick={() => append('8')}>8</button>
          <button type="button" className="pcalc-kp-btn" onClick={() => append('9')}>9</button>
          <button type="button" className="pcalc-kp-btn op" onClick={() => append(' + ')}>+</button>
          <button type="button" className="pcalc-kp-btn op" onClick={() => append(' - ')}>−</button>
          <button type="button" className="pcalc-kp-btn cmd" onClick={backspace} aria-label="Backspace">←</button>

          <button type="button" className="pcalc-kp-btn" onClick={() => append('4')}>4</button>
          <button type="button" className="pcalc-kp-btn" onClick={() => append('5')}>5</button>
          <button type="button" className="pcalc-kp-btn" onClick={() => append('6')}>6</button>
          <button type="button" className="pcalc-kp-btn op" onClick={() => append('*')}>×</button>
          <button type="button" className="pcalc-kp-btn op" onClick={() => append('/')}>÷</button>
          <button type="button" className="pcalc-kp-btn cmd" onClick={clearAll} aria-label="Clear">C</button>

          <button type="button" className="pcalc-kp-btn" onClick={() => append('1')}>1</button>
          <button type="button" className="pcalc-kp-btn" onClick={() => append('2')}>2</button>
          <button type="button" className="pcalc-kp-btn" onClick={() => append('3')}>3</button>
          <button type="button" className="pcalc-kp-btn op" onClick={() => append('(')}>(</button>
          <button type="button" className="pcalc-kp-btn op" onClick={() => append(')')}>)</button>
          <button type="button" className="pcalc-kp-btn op" onClick={() => append('.')}>.</button>

          <button type="button" className="pcalc-kp-btn zero" onClick={() => append('0')}>0</button>
          <button type="button" className="pcalc-kp-btn op" onClick={() => append('^')}>^</button>
          <button type="button" className="pcalc-kp-btn op" onClick={() => append('=')}>=</button>
          <button type="button" className="pcalc-kp-btn op" onClick={() => append(' ')}>␣</button>
        </div>
      </div>
    </div>
  );
}

/* ===== Main component ==================================================== */

export default function PolynomialCalculator({
  initialOperation = 1,
  operations: operationsProp,
  operationOrder: operationOrderProp,
}) {
  const [mounted, setMounted] = useState(false);

  const operations = useMemo(
    () => mergeOperations(DEFAULT_OPERATIONS, operationsProp),
    [operationsProp]
  );
  const operationOrder = useMemo(
    () => (operationOrderProp && operationOrderProp.length ? operationOrderProp : DEFAULT_OPERATION_ORDER),
    [operationOrderProp]
  );

  const indexToKey = useCallback((n) => {
    const idx = Number(n) - 1;
    if (idx >= 0 && idx < operationOrder.length && operations[operationOrder[idx]]) {
      return operationOrder[idx];
    }
    return operationOrder[0];
  }, [operationOrder, operations]);

  const [opKey, setOpKey] = useState(() => indexToKey(initialOperation));
  const [inputMode, setInputMode] = useState('keypad');
  const [polynomials, setPolynomials] = useState(() => operations[indexToKey(initialOperation)].demoInputs);
  const [editingIndex, setEditingIndex] = useState(null);
  const [showFade, setShowFade] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  const stepsScrollRef = useRef(null);
  const helpWrapRef = useRef(null);
  const op = operations[opKey];

  useEffect(() => { setMounted(true); }, []);

  // Sync prop → state. Combinatorics-calculator pattern.
  useEffect(() => {
    setOpKey(indexToKey(initialOperation));
  }, [initialOperation, indexToKey]);

  useEffect(() => {
    if (!operations[opKey]) return;
    setPolynomials(operations[opKey].demoInputs);
    setEditingIndex(null);
    setHelpOpen(false);
  }, [opKey, operations]);

  const updateFade = useCallback(() => {
    const el = stepsScrollRef.current;
    if (!el) return;
    const overflowing = el.scrollHeight > el.clientHeight + 2;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 4;
    setShowFade(overflowing && !atBottom);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    updateFade();
    const el = stepsScrollRef.current;
    if (el) el.addEventListener('scroll', updateFade);
    window.addEventListener('resize', updateFade);
    return () => {
      if (el) el.removeEventListener('scroll', updateFade);
      window.removeEventListener('resize', updateFade);
    };
  }, [mounted, opKey, updateFade]);

  useEffect(() => {
    if (!helpOpen) return;
    const onDocClick = (e) => {
      if (helpWrapRef.current && !helpWrapRef.current.contains(e.target)) {
        setHelpOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [helpOpen]);

  const handleOpClick = (newKey) => {
    if (newKey === opKey) return;
    setOpKey(newKey);
  };

  const handleAddPolynomial = () => setPolynomials(prev => [...prev, 'x + 1']);
  const handleRemovePolynomial = (idx) => {
    setPolynomials(prev => prev.filter((_, i) => i !== idx));
    if (editingIndex === idx) setEditingIndex(null);
  };
  const handleEditPolynomial = (idx) => setEditingIndex(idx);
  const handleCloseEditor = () => setEditingIndex(null);
  const handleSavePolynomial = (idx, newValue) => {
    setPolynomials(prev => {
      const next = prev.slice();
      next[idx] = newValue;
      return next;
    });
    setEditingIndex(null);
  };

  const handleScrollStepsDown = () => {
    const el = stepsScrollRef.current;
    if (!el) return;
    el.scrollBy({ top: Math.max(120, el.clientHeight * 0.7), behavior: 'smooth' });
  };

  if (!mounted) return <div className="pcalc-page pcalc-skeleton" aria-busy="true" />;

  const renderEditor = (idx, label, value) => {
    const props = {
      initialValue: value,
      label,
      onSave: (v) => handleSavePolynomial(idx, v),
      onCancel: handleCloseEditor,
    };
    return inputMode === 'keypad' ? <KeypadInput {...props} /> : <SlotsInput {...props} />;
  };

  const renderPolyBox = (idx, label, poly) => (
    <div className="pcalc-poly-box" onClick={() => handleEditPolynomial(idx)} role="button" tabIndex={0}>
      <span className="pcalc-poly-placeholder-tag">{label}</span>
      <span className="pcalc-poly-content">
        {processContent('$' + exprToDisplayLatex(poly) + '$')}
      </span>
      <span className="pcalc-poly-edit-hint">✎ Tap to edit</span>
    </div>
  );

  const buildRow = (idx, opts) => {
    const { tag, label, poly, single, dual, role } = opts;
    const isEditing = editingIndex === idx;
    const rowClass = 'pcalc-poly-row' +
      (single ? ' is-single' : '') +
      (dual ? ' is-dual' : '') +
      (isEditing ? ' is-editing' : '');

    return (
      <div key={`row-${idx}`} className={rowClass}>
        {!isEditing && (
          <div className={'pcalc-poly-tag' + (role ? ' role' : '')}>
            {role ? tag : <>P<sub>{idx + 1}</sub></>}
          </div>
        )}
        {isEditing ? renderEditor(idx, label, poly) : renderPolyBox(idx, label, poly)}
        {!single && !dual && !isEditing && (
          <button
            className={'pcalc-poly-remove' + (polynomials.length <= 2 ? ' is-hidden' : '')}
            onClick={() => handleRemovePolynomial(idx)}
            aria-label="Remove polynomial"
            type="button"
          >✕</button>
        )}
      </div>
    );
  };

  const renderInputs = () => {
    if (op.mode === 'single') {
      return [buildRow(0, { tag: 'P', label: 'Polynomial', poly: polynomials[0], single: true })];
    }
    if (op.mode === 'dual') {
      const labels = op.inputLabels || ['Top', 'Bottom'];
      return [
        buildRow(0, { tag: labels[0], label: labels[0], poly: polynomials[0], dual: true, role: true }),
        <div key="op-0" className="pcalc-poly-op is-dual">
          <span className="pcalc-poly-op-symbol">{processContent('$' + op.symbol + '$')}</span>
        </div>,
        buildRow(1, { tag: labels[1], label: labels[1], poly: polynomials[1], dual: true, role: true }),
      ];
    }
    const out = [];
    polynomials.forEach((poly, idx) => {
      out.push(buildRow(idx, {
        tag: 'P' + (idx + 1),
        label: `Polynomial ${idx + 1}`,
        poly,
      }));
      if (idx < polynomials.length - 1) {
        out.push(
          <div key={`op-${idx}`} className="pcalc-poly-op">
            <span className="pcalc-poly-op-symbol">{processContent('$' + op.symbol + '$')}</span>
          </div>
        );
      }
    });
    return out;
  };

  const hasSteps    = Array.isArray(op.steps) && op.steps.length > 0;
  const hasAbout    = !!op.about && (op.about.text || op.about.formula);
  const hasPitfalls = Array.isArray(op.pitfalls) && op.pitfalls.length > 0;
  const hasRelated  = Array.isArray(op.related) && op.related.length > 0;

  return (
    <>
      <style>{CSS}</style>
      <div className="pcalc-page">

        <header className="pcalc-header">
          <div className="pcalc-eyebrow">Algebra · Polynomial tools</div>
          <div className="pcalc-title-row">
            <h1 className="pcalc-title">{op.title}</h1>
            <div className={'pcalc-help-wrap' + (helpOpen ? ' is-open' : '')} ref={helpWrapRef}>
              <button
                type="button"
                className="pcalc-help-btn"
                aria-label="More info about this operation"
                aria-expanded={helpOpen}
                onClick={() => setHelpOpen(o => !o)}
              >?</button>
              <div className="pcalc-tooltip" role="tooltip">
                <p>{processContent(op.sub)}</p>
                {op.learnMoreHref && (
                  <a href={op.learnMoreHref} className="pcalc-tooltip-link">Learn more →</a>
                )}
              </div>
            </div>
          </div>
        </header>

        {/*
          Folder tabs — commented out until content sub-pages exist.

          <nav className="pcalc-tabs" role="tablist">
            <button className="pcalc-tab is-active" type="button">Calculator</button>
            <button className="pcalc-tab" type="button">How it works</button>
            <button className="pcalc-tab" type="button">Worked examples</button>
          </nav>
        */}

        <div className="pcalc-ops">
          <div className="pcalc-ops-label">Operation</div>
          <div className="pcalc-ops-list">
            {operationOrder.filter(k => operations[k]).map(key => (
              <button
                key={key}
                type="button"
                className={'pcalc-op-btn' + (key === opKey ? ' is-active' : '')}
                onClick={() => handleOpClick(key)}
              >
                {operations[key].label}
              </button>
            ))}
          </div>
        </div>

        <div className="pcalc-grid">

          <div>
            <section className="pcalc-card">
              <div className="pcalc-card-header">{op.inputHeader}</div>
              <div className="pcalc-card-body">

                <div className="pcalc-input-toolbar">
                  <div className="pcalc-mode-toggle">
                    <button type="button" className={inputMode === 'keypad' ? 'is-active' : ''} onClick={() => setInputMode('keypad')}>⌨ Keypad</button>
                    <button type="button" className={inputMode === 'slots' ? 'is-active' : ''} onClick={() => setInputMode('slots')}>▦ Slots</button>
                  </div>
                </div>

                <div className="pcalc-poly-list">
                  {renderInputs()}
                </div>

                {op.mode === 'multi' && (
                  <button type="button" className="pcalc-add-poly" onClick={handleAddPolynomial}>
                    + Add another polynomial
                  </button>
                )}

                <div className="pcalc-actions">
                  <button type="button" className="pcalc-btn pcalc-btn-primary">{op.actionLabel}</button>
                  <button type="button" className="pcalc-btn pcalc-btn-secondary" onClick={() => setPolynomials(op.demoInputs)}>Clear</button>
                </div>

              </div>
            </section>

            <section className="pcalc-card">
              <div className="pcalc-card-header">Result</div>
              <div className="pcalc-card-body" style={{ padding: 0 }}>
                <div className="pcalc-result">
                  <div className="pcalc-result-eyebrow">{op.result.primaryLabel}</div>
                  <div className="pcalc-result-math">
                    {processContent('$' + op.result.primaryMath + '$')}
                  </div>
                  {op.result.extras && op.result.extras.length > 0 && (
                    <div className="pcalc-result-extras">
                      {op.result.extras.map((ex, i) => (
                        <div className="pcalc-result-extra" key={i}>
                          <span className="pcalc-result-extra-label">{ex.label}:</span>
                          <span>{processContent('$' + ex.math + '$')}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {op.result.identity && (
                    <div className="pcalc-result-identity">
                      {processContent('$' + op.result.identity + '$')}
                    </div>
                  )}
                  {op.result.meta && op.result.meta.length > 0 && (
                    <div className="pcalc-result-subline">
                      {op.result.meta.map((m, i) => (
                        <span key={i}>{m.label}: <strong>{m.value}</strong></span>
                      ))}
                    </div>
                  )}
                  <div className="pcalc-result-actions">
                    <button type="button" className="pcalc-icon-btn">⧉ Copy LaTeX</button>
                    <button type="button" className="pcalc-icon-btn">↗ Share</button>
                    {op.hasGraph && (
                      <button type="button" className="pcalc-icon-btn">📈 Graph</button>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div>
            <section className="pcalc-card">
              <div className="pcalc-card-header">Solution &amp; explanation</div>
              <div className="pcalc-card-body">

                {hasSteps && (
                  <div className="pcalc-section-block pcalc-steps-section">
                    <h3 className="pcalc-section-title">
                      Step-by-step
                      <span className="pcalc-section-badge">{op.steps.length} steps</span>
                    </h3>
                    <div className="pcalc-steps-scroll" ref={stepsScrollRef}>
                      {op.steps.map((step, i) => (
                        <div className="pcalc-step" key={i}>
                          <div className="pcalc-step-num">{i + 1}</div>
                          <div>
                            <h4 className="pcalc-step-title">{processContent(step.title)}</h4>
                            <div className="pcalc-step-math">{processContent(step.math)}</div>
                            {step.note && (
                              <p className="pcalc-step-note">{processContent(step.note)}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className={'pcalc-steps-fade' + (showFade ? ' is-visible' : '')} />
                    <button
                      type="button"
                      className={'pcalc-steps-chevron' + (showFade ? ' is-visible' : '')}
                      onClick={handleScrollStepsDown}
                      aria-label="Scroll for more steps"
                      tabIndex={showFade ? 0 : -1}
                    >
                      <svg width="20" height="10" viewBox="0 0 20 10" aria-hidden="true">
                        <path d="M2 2 L10 8 L18 2" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                )}

                {hasAbout && (
                  <div className="pcalc-section-block">
                    <h3 className="pcalc-section-title">About this method</h3>
                    {op.about.text && (
                      <p className="pcalc-method-text">{processContent(op.about.text)}</p>
                    )}
                    {op.about.formula && (
                      <div className="pcalc-method-formula">
                        {processContent('$' + op.about.formula + '$')}
                      </div>
                    )}
                  </div>
                )}

                {hasPitfalls && (
                  <div className="pcalc-section-block">
                    <h3 className="pcalc-section-title">Common pitfalls</h3>
                    <ul className="pcalc-pitfall-list">
                      {op.pitfalls.map((p, i) => (
                        <li key={i}>{processContent(p)}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {hasRelated && (
                  <div className="pcalc-section-block">
                    <h3 className="pcalc-section-title">Related tools</h3>
                    <div className="pcalc-related-row">
                      {op.related.map((r, i) => {
                        const isObj = r && typeof r === 'object';
                        const chipLabel = isObj ? r.label : r;
                        const chipHref  = isObj ? r.href  : null;
                        return chipHref ? (
                          <a key={i} href={chipHref} className="pcalc-related-chip">{chipLabel}</a>
                        ) : (
                          <button key={i} type="button" className="pcalc-related-chip">{chipLabel}</button>
                        );
                      })}
                    </div>
                  </div>
                )}

              </div>
            </section>
          </div>

        </div>

      </div>
    </>
  );
}