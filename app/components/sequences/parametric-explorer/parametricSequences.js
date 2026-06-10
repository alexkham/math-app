import React from 'react';

// =====================================================
// fmt — handles ints, decimals (rounded to suppress float noise), bigints
// =====================================================
const fmt = (n) => {
  if (typeof n === 'bigint') {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  if (n === undefined || n === null) return '';
  if (typeof n !== 'number') return String(n);
  if (!Number.isFinite(n)) return String(n);
  let val = n;
  if (!Number.isInteger(val)) val = Number(val.toFixed(10));
  const str = String(val);
  const [intPart, fracPart] = str.split('.');
  const formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return fracPart ? `${formatted}.${fracPart}` : formatted;
};

// =====================================================
// Arithmetic sequence
// =====================================================
export const arithmetic = {

  name: 'Arithmetic sequence',
  memberLabel: 'in this arithmetic sequence',
  notation: 'a',
  formulaDisplay: (<>a<sub>n</sub> = a<sub>1</sub> + (n &minus; 1) &middot; d</>),
  meta: 'parametric \u00b7 closed form',

  parameters: [
    { key: 'a1', label: 'First term a\u2081',         defaultValue: '2' },
    { key: 'd',  label: 'Common difference d',        defaultValue: '3' },
  ],

  getTerm: (n, p) => p.a1 + (n - 1) * p.d,

  isMember: (m, p) => {
    if (!Number.isFinite(m)) return null;
    if (p.d === 0) return m === p.a1 ? 1 : null;
    const k = (m - p.a1) / p.d;
    if (k < 0) return null;
    if (Math.abs(k - Math.round(k)) > 1e-9) return null;
    return Math.round(k) + 1;
  },

  nearestNeighbors: (m, p) => {
    if (!Number.isFinite(m) || p.d === 0) return null;
    const k = (m - p.a1) / p.d;
    const i1 = Math.floor(k) + 1;
    const i2 = i1 + 1;
    if (i1 < 1) return null;
    const v1 = p.a1 + (i1 - 1) * p.d;
    const v2 = p.a1 + (i2 - 1) * p.d;
    const [low, high] = v1 < v2
      ? [{ index: i1, value: v1 }, { index: i2, value: v2 }]
      : [{ index: i2, value: v2 }, { index: i1, value: v1 }];
    return { low, high };
  },

  initialInputs: {
    browse: '8',
    rangeFrom: '5',
    rangeTo: '12',
    member: '47',
    lookup: '20',
  },

  maxBrowseCount: 500,
  maxRangeSpan: 500,

  modeExplanations: {
    browse: {
      theory:
        'Browse computes the first $N$ terms via the closed form ' +
        '$a_k = a_1 + (k - 1) \\cdot d$.',
      renderWalkthrough: ({ count, max, maxIndex, sum }, p) =>
        `With $a_1 = ${fmt(p.a1)}$ and $d = ${fmt(p.d)}$.\n\n` +
        `Last term: $a_{${maxIndex}} = ${fmt(p.a1)} + ${maxIndex - 1} \\cdot ${fmt(p.d)} = ${fmt(max)}$.\n\n` +
        `Sum of all $${count}$ terms: $S_{${count}} = \\dfrac{${count}}{2}(a_1 + a_{${count}}) = ${fmt(sum)}$.`,
    },
    range: {
      theory:
        'Range lists $a_a, a_{a+1}, \\ldots, a_b$ using the same closed form.',
      renderWalkthrough: ({ error, count, min, minIndex, max, maxIndex }, p) => {
        if (error) return `**Cannot compute:** ${error}`;
        return (
          `With $a_1 = ${fmt(p.a1)}$, $d = ${fmt(p.d)}$.\n\n` +
          `Indexes $${minIndex}$ through $${maxIndex}$ \u2014 $${count}$ terms.\n\n` +
          `Smallest: $${fmt(min)}$ at index $${minIndex}$.\n\n` +
          `Largest: $${fmt(max)}$ at index $${maxIndex}$.`
        );
      },
    },
    member: {
      theory:
        'A number $m$ is in this arithmetic sequence iff $(m - a_1) / d$ is a non-negative integer. ' +
        'If so, the index is $n = (m - a_1)/d + 1$.',
      renderWalkthrough: ({ error, value, isMember, index, nearest }, p) => {
        if (error) return `**Cannot compute:** ${error}`;
        if (p.d === 0) {
          return `With $d = 0$, every term equals $a_1 = ${fmt(p.a1)}$. ` +
            `Testing $m = ${fmt(value)}$: ${isMember ? 'matches $a_1$.' : 'does not match $a_1$.'}`;
        }
        const k = (value - p.a1) / p.d;
        if (isMember) {
          return (
            `Testing $m = ${fmt(value)}$ with $a_1 = ${fmt(p.a1)}$, $d = ${fmt(p.d)}$:\n\n` +
            `$(m - a_1)/d = (${fmt(value)} - ${fmt(p.a1)})/${fmt(p.d)} = ${fmt(k)}$ \u2014 non-negative integer.\n\n` +
            `So $${fmt(value)} = a_{${index}}$.`
          );
        }
        let out =
          `Testing $m = ${fmt(value)}$ with $a_1 = ${fmt(p.a1)}$, $d = ${fmt(p.d)}$:\n\n` +
          `$(m - a_1)/d = ${fmt(k)}$ \u2014 not a non-negative integer.\n\n` +
          `So $${fmt(value)}$ is not in this sequence.`;
        if (nearest) {
          out +=
            `\n\nNearest below: $a_{${nearest.low.index}} = ${fmt(nearest.low.value)}$.\n\n` +
            `Nearest above: $a_{${nearest.high.index}} = ${fmt(nearest.high.value)}$.`;
        }
        return out;
      },
    },
    lookup: {
      theory: 'Direct substitution into $a_n = a_1 + (n - 1) \\cdot d$.',
      renderWalkthrough: ({ error, index, value }, p) => {
        if (error) return `**Cannot compute:** ${error}`;
        return (
          `For $n = ${fmt(index)}$ with $a_1 = ${fmt(p.a1)}$, $d = ${fmt(p.d)}$:\n\n` +
          `$a_{${index}} = ${fmt(p.a1)} + (${index} - 1) \\cdot ${fmt(p.d)} = ${fmt(value)}$.`
        );
      },
    },
  },

  solverModes: [
    {
      id: 'term',
      label: 'Find term (a\u2099)',
      intro: 'Relation: a\u2099 = a\u2081 + (n \u2212 1) \u00b7 d. Fill three, solve for the fourth.',
      defaultSolveFor: 'an',
      fields: [
        { key: 'a1', label: (<>a<sub>1</sub></>) },
        { key: 'd',  label: 'd' },
        { key: 'n',  label: 'n' },
        { key: 'an', label: (<>a<sub>n</sub></>) },
      ],
      compute: (f, solveFor) => {
        const { a1, d, n, an } = f;
        if (solveFor === 'an') return a1 + (n - 1) * d;
        if (solveFor === 'a1') return an - (n - 1) * d;
        if (solveFor === 'd') {
          if (n === 1) return { error: 'd is undefined when n = 1.' };
          return (an - a1) / (n - 1);
        }
        if (solveFor === 'n') {
          if (d === 0) return { error: 'With d = 0, n cannot be determined uniquely.' };
          const k = (an - a1) / d + 1;
          return k;
        }
      },
      renderResult: (r, f, solveFor) => {
        const labelMap = { a1: 'a\u2081', d: 'd', n: 'n', an: 'a\u2099' };
        return (<>{labelMap[solveFor]} = <strong>{fmt(r)}</strong></>);
      },
      theory:
        'The arithmetic term relation $a_n = a_1 + (n - 1) \\cdot d$ ties four quantities together. ' +
        'Given any three, the fourth is fixed by simple algebra.',
      renderWalkthrough: (r, f, solveFor) => {
        const { a1, d, n, an } = f;
        if (solveFor === 'an') {
          return `$a_n = a_1 + (n - 1) \\cdot d = ${fmt(parseFloat(a1))} + (${fmt(parseFloat(n))} - 1) \\cdot ${fmt(parseFloat(d))} = ${fmt(r)}$.`;
        }
        if (solveFor === 'a1') {
          return `Solving for $a_1$: $a_1 = a_n - (n - 1) \\cdot d = ${fmt(parseFloat(an))} - (${fmt(parseFloat(n))} - 1) \\cdot ${fmt(parseFloat(d))} = ${fmt(r)}$.`;
        }
        if (solveFor === 'd') {
          return `Solving for $d$: $d = \\dfrac{a_n - a_1}{n - 1} = \\dfrac{${fmt(parseFloat(an))} - ${fmt(parseFloat(a1))}}{${fmt(parseFloat(n))} - 1} = ${fmt(r)}$.`;
        }
        if (solveFor === 'n') {
          return `Solving for $n$: $n = \\dfrac{a_n - a_1}{d} + 1 = \\dfrac{${fmt(parseFloat(an))} - ${fmt(parseFloat(a1))}}{${fmt(parseFloat(d))}} + 1 = ${fmt(r)}$.`;
        }
      },
    },
    {
      id: 'sum',
      label: 'Sum S\u2099',
      intro: 'Relation: S\u2099 = (n / 2) \u00b7 (2a\u2081 + (n \u2212 1) \u00b7 d). Fill three, solve for the fourth.',
      defaultSolveFor: 'sn',
      fields: [
        { key: 'a1', label: (<>a<sub>1</sub></>) },
        { key: 'd',  label: 'd' },
        { key: 'n',  label: 'n' },
        { key: 'sn', label: (<>S<sub>n</sub></>) },
      ],
      compute: (f, solveFor) => {
        const { a1, d, n, sn } = f;
        if (solveFor === 'sn') return (n / 2) * (2 * a1 + (n - 1) * d);
        if (solveFor === 'a1') return (sn / n) - ((n - 1) * d) / 2;
        if (solveFor === 'd') {
          if (n === 1) return { error: 'd is undefined when n = 1.' };
          return (2 * (sn - n * a1)) / (n * (n - 1));
        }
        if (solveFor === 'n') {
          if (d === 0) {
            if (a1 === 0) return { error: 'a\u2081 = d = 0; n is undetermined.' };
            return sn / a1;
          }
          // Quadratic: d·n² + (2a1 − d)·n − 2sn = 0
          const A = d, B = 2 * a1 - d, C = -2 * sn;
          const disc = B * B - 4 * A * C;
          if (disc < 0) return { error: 'No real solution for n.' };
          const root1 = (-B + Math.sqrt(disc)) / (2 * A);
          const root2 = (-B - Math.sqrt(disc)) / (2 * A);
          const pos = [root1, root2].filter((x) => x > 0);
          if (pos.length === 0) return { error: 'No positive solution for n.' };
          return Math.min(...pos);
        }
      },
      renderResult: (r, f, solveFor) => {
        const labelMap = { a1: 'a\u2081', d: 'd', n: 'n', sn: 'S\u2099' };
        return (<>{labelMap[solveFor]} = <strong>{fmt(r)}</strong></>);
      },
      theory:
        'The arithmetic sum formula $S_n = \\dfrac{n}{2}(2a_1 + (n-1)d)$ links four quantities. ' +
        'Solving for $n$ requires the quadratic formula; the others are linear.',
      renderWalkthrough: (r, f, solveFor) => {
        const { a1, d, n, sn } = f;
        if (solveFor === 'sn') {
          return `$S_n = \\dfrac{n}{2}(2a_1 + (n-1)d) = \\dfrac{${fmt(parseFloat(n))}}{2}(2 \\cdot ${fmt(parseFloat(a1))} + (${fmt(parseFloat(n))} - 1) \\cdot ${fmt(parseFloat(d))}) = ${fmt(r)}$.`;
        }
        if (solveFor === 'a1') {
          return `Solving for $a_1$: $a_1 = \\dfrac{S_n}{n} - \\dfrac{(n-1)d}{2} = ${fmt(r)}$.`;
        }
        if (solveFor === 'd') {
          return `Solving for $d$: $d = \\dfrac{2(S_n - n a_1)}{n(n-1)} = ${fmt(r)}$.`;
        }
        if (solveFor === 'n') {
          return `Solving the quadratic $d n^2 + (2a_1 - d)n - 2 S_n = 0$ for $n$: $n = ${fmt(r)}$.`;
        }
      },
    },
  ],
};

// =====================================================
// Geometric sequence
// =====================================================
export const geometric = {

  name: 'Geometric sequence',
  memberLabel: 'in this geometric sequence',
  notation: 'a',
  formulaDisplay: (<>a<sub>n</sub> = a<sub>1</sub> &middot; r<sup>n &minus; 1</sup></>),
  meta: 'parametric \u00b7 closed form',

  parameters: [
    { key: 'a1', label: 'First term a\u2081',     defaultValue: '2' },
    { key: 'r',  label: 'Common ratio r',          defaultValue: '3' },
  ],

  getTerm: (n, p) => p.a1 * Math.pow(p.r, n - 1),

  isMember: (m, p) => {
    if (!Number.isFinite(m)) return null;
    if (p.a1 === 0) return m === 0 ? 1 : null;
    if (p.r === 1) return m === p.a1 ? 1 : null;
    if (p.r === 0) {
      if (m === p.a1) return 1;
      if (m === 0) return 2;
      return null;
    }
    // Brute-force iteration — handles r > 0, r < 0, and |r| anywhere.
    let curr = p.a1;
    const tol = Math.max(Math.abs(m), 1) * 1e-9;
    for (let i = 1; i <= 2000; i++) {
      if (Math.abs(curr - m) < tol) return i;
      const next = curr * p.r;
      // Diverging past m's scale with no chance of returning.
      if (Math.abs(p.r) > 1 && Math.abs(curr) > Math.abs(m) * 1e6) return null;
      // Converging to 0 past m's scale.
      if (Math.abs(p.r) < 1 && Math.abs(curr) < tol && m !== 0) return null;
      curr = next;
    }
    return null;
  },

  nearestNeighbors: (m, p) => {
    if (!Number.isFinite(m) || p.a1 === 0 || p.r === 0 || p.r === 1) return null;
    let prev = p.a1;
    let curr = p.a1;
    let iPrev = 1, iCurr = 1;
    const reaches = (val, target, ratio) => {
      // Walk until we cross m. Direction depends on r sign and magnitude.
      return false;
    };
    // Simple walk
    for (let i = 1; i <= 2000; i++) {
      const between =
        (prev <= m && m <= curr) || (curr <= m && m <= prev);
      if (between && i > 1) {
        const v1 = prev, v2 = curr;
        const [low, high] = v1 < v2
          ? [{ index: iPrev, value: v1 }, { index: iCurr, value: v2 }]
          : [{ index: iCurr, value: v2 }, { index: iPrev, value: v1 }];
        return { low, high };
      }
      prev = curr;
      iPrev = iCurr;
      curr = curr * p.r;
      iCurr = i + 1;
      if (Math.abs(p.r) > 1 && Math.abs(curr) > Math.abs(m) * 1e6) return null;
      if (Math.abs(p.r) < 1 && Math.abs(curr) < 1e-9 && m !== 0) return null;
    }
    return null;
  },

  initialInputs: {
    browse: '8',
    rangeFrom: '1',
    rangeTo: '6',
    member: '162',
    lookup: '10',
  },

  maxBrowseCount: 100,
  maxRangeSpan: 100,

  modeExplanations: {
    browse: {
      theory:
        'Browse computes the first $N$ terms via the closed form ' +
        '$a_k = a_1 \\cdot r^{k-1}$.',
      renderWalkthrough: ({ count, max, maxIndex, sum }, p) =>
        `With $a_1 = ${fmt(p.a1)}$ and $r = ${fmt(p.r)}$.\n\n` +
        `Last term: $a_{${maxIndex}} = ${fmt(p.a1)} \\cdot ${fmt(p.r)}^{${maxIndex - 1}} = ${fmt(max)}$.\n\n` +
        `Sum of all $${count}$ terms: $S_{${count}} = ${fmt(sum)}$.`,
    },
    range: {
      theory: 'Range lists $a_a, a_{a+1}, \\ldots, a_b$ using the same closed form.',
      renderWalkthrough: ({ error, count, min, minIndex, max, maxIndex }, p) => {
        if (error) return `**Cannot compute:** ${error}`;
        return (
          `With $a_1 = ${fmt(p.a1)}$, $r = ${fmt(p.r)}$.\n\n` +
          `Indexes $${minIndex}$ through $${maxIndex}$ \u2014 $${count}$ terms.\n\n` +
          `Smallest: $${fmt(min)}$ at index $${minIndex}$.\n\n` +
          `Largest: $${fmt(max)}$ at index $${maxIndex}$.`
        );
      },
    },
    member: {
      theory:
        'For $r > 0$, $r \\neq 1$, and $a_1 \\neq 0$: $m$ is a term iff $\\log_r(m/a_1)$ is a non-negative integer. ' +
        'This explorer also handles the special cases by iteration.',
      renderWalkthrough: ({ error, value, isMember, index, nearest }, p) => {
        if (error) return `**Cannot compute:** ${error}`;
        if (isMember) {
          return (
            `Testing $m = ${fmt(value)}$ with $a_1 = ${fmt(p.a1)}$, $r = ${fmt(p.r)}$:\n\n` +
            `Iteration finds $a_{${index}} = ${fmt(value)}$.`
          );
        }
        let out =
          `Testing $m = ${fmt(value)}$ with $a_1 = ${fmt(p.a1)}$, $r = ${fmt(p.r)}$:\n\n` +
          `Iteration does not match $m$ to any term of the sequence.`;
        if (nearest) {
          out +=
            `\n\nNearest below: $a_{${nearest.low.index}} = ${fmt(nearest.low.value)}$.\n\n` +
            `Nearest above: $a_{${nearest.high.index}} = ${fmt(nearest.high.value)}$.`;
        }
        return out;
      },
    },
    lookup: {
      theory: 'Direct substitution into $a_n = a_1 \\cdot r^{n-1}$.',
      renderWalkthrough: ({ error, index, value }, p) => {
        if (error) return `**Cannot compute:** ${error}`;
        return (
          `For $n = ${fmt(index)}$ with $a_1 = ${fmt(p.a1)}$, $r = ${fmt(p.r)}$:\n\n` +
          `$a_{${index}} = ${fmt(p.a1)} \\cdot ${fmt(p.r)}^{${index - 1}} = ${fmt(value)}$.`
        );
      },
    },
  },

  solverModes: [
    {
      id: 'term',
      label: 'Find term (a\u2099)',
      intro: 'Relation: a\u2099 = a\u2081 \u00b7 r^(n \u2212 1). Fill three, solve for the fourth.',
      defaultSolveFor: 'an',
      fields: [
        { key: 'a1', label: (<>a<sub>1</sub></>) },
        { key: 'r',  label: 'r' },
        { key: 'n',  label: 'n' },
        { key: 'an', label: (<>a<sub>n</sub></>) },
      ],
      compute: (f, solveFor) => {
        const { a1, r, n, an } = f;
        if (solveFor === 'an') return a1 * Math.pow(r, n - 1);
        if (solveFor === 'a1') return an / Math.pow(r, n - 1);
        if (solveFor === 'r') {
          if (n === 1) return { error: 'r is undefined when n = 1.' };
          if (a1 === 0) return { error: 'Cannot solve for r when a\u2081 = 0.' };
          const ratio = an / a1;
          if (ratio <= 0 && (n - 1) % 2 === 0) return { error: 'No real r yields the given a\u2099.' };
          const sign = ratio < 0 ? -1 : 1;
          return sign * Math.pow(Math.abs(ratio), 1 / (n - 1));
        }
        if (solveFor === 'n') {
          if (a1 === 0) return { error: 'Cannot solve for n when a\u2081 = 0.' };
          if (r === 1) return { error: 'With r = 1 every term equals a\u2081; n is undetermined.' };
          if (r <= 0) return { error: 'Solving for n with r \u2264 0 requires real-valued logarithm.' };
          const ratio = an / a1;
          if (ratio <= 0) return { error: 'an/a\u2081 must be positive when r > 0.' };
          return Math.log(ratio) / Math.log(r) + 1;
        }
      },
      renderResult: (r, f, solveFor) => {
        const labelMap = { a1: 'a\u2081', r: 'r', n: 'n', an: 'a\u2099' };
        return (<>{labelMap[solveFor]} = <strong>{fmt(r)}</strong></>);
      },
      theory:
        'The geometric term relation $a_n = a_1 \\cdot r^{n-1}$ links four quantities. ' +
        'Solving for $r$ uses an $(n-1)$-th root; solving for $n$ uses logarithms.',
      renderWalkthrough: (r, f, solveFor) => {
        const { a1, rr, n, an } = { a1: f.a1, rr: f.r, n: f.n, an: f.an };
        if (solveFor === 'an') return `$a_n = a_1 \\cdot r^{n-1} = ${fmt(parseFloat(a1))} \\cdot ${fmt(parseFloat(rr))}^{${fmt(parseFloat(n))} - 1} = ${fmt(r)}$.`;
        if (solveFor === 'a1') return `Solving for $a_1$: $a_1 = a_n / r^{n-1} = ${fmt(parseFloat(an))} / ${fmt(parseFloat(rr))}^{${fmt(parseFloat(n))} - 1} = ${fmt(r)}$.`;
        if (solveFor === 'r')  return `Solving for $r$: $r = (a_n / a_1)^{1/(n-1)} = ${fmt(r)}$.`;
        if (solveFor === 'n')  return `Solving for $n$: $n = \\dfrac{\\log(a_n / a_1)}{\\log r} + 1 = ${fmt(r)}$.`;
      },
    },
    {
      id: 'sum',
      label: 'Sum S\u2099',
      intro: 'Relation: S\u2099 = a\u2081 \u00b7 (r\u207f \u2212 1) / (r \u2212 1) for r \u2260 1; otherwise S\u2099 = n \u00b7 a\u2081.',
      defaultSolveFor: 'sn',
      fields: [
        { key: 'a1', label: (<>a<sub>1</sub></>) },
        { key: 'r',  label: 'r' },
        { key: 'n',  label: 'n' },
        { key: 'sn', label: (<>S<sub>n</sub></>) },
      ],
      compute: (f, solveFor) => {
        const { a1, r, n, sn } = f;
        if (solveFor === 'sn') {
          if (r === 1) return n * a1;
          return a1 * (Math.pow(r, n) - 1) / (r - 1);
        }
        if (solveFor === 'a1') {
          if (r === 1) return sn / n;
          return sn * (r - 1) / (Math.pow(r, n) - 1);
        }
        if (solveFor === 'n') {
          if (a1 === 0) return { error: 'Cannot solve for n when a\u2081 = 0.' };
          if (r === 1) return sn / a1;
          if (r <= 0) return { error: 'Solving for n with r \u2264 0 requires real-valued logarithm.' };
          const arg = sn * (r - 1) / a1 + 1;
          if (arg <= 0) return { error: 'No real solution for n.' };
          return Math.log(arg) / Math.log(r);
        }
        if (solveFor === 'r') {
          return { error: 'Solving for r in the sum formula is transcendental \u2014 not supported here.' };
        }
      },
      renderResult: (r, f, solveFor) => {
        const labelMap = { a1: 'a\u2081', r: 'r', n: 'n', sn: 'S\u2099' };
        return (<>{labelMap[solveFor]} = <strong>{fmt(r)}</strong></>);
      },
      theory:
        'Geometric finite sum: $S_n = a_1 \\cdot \\dfrac{r^n - 1}{r - 1}$ for $r \\neq 1$. ' +
        'Solving for $r$ is transcendental and is not provided here.',
      renderWalkthrough: (r, f, solveFor) => {
        const { a1, n, sn } = f;
        if (solveFor === 'sn') return `$S_n = a_1 \\dfrac{r^n - 1}{r - 1} = ${fmt(r)}$.`;
        if (solveFor === 'a1') return `Solving for $a_1$: $a_1 = S_n \\cdot \\dfrac{r - 1}{r^n - 1} = ${fmt(r)}$.`;
        if (solveFor === 'n')  return `Solving for $n$: $n = \\dfrac{\\log\\!\\left(\\tfrac{S_n (r-1)}{a_1} + 1\\right)}{\\log r} = ${fmt(r)}$.`;
        return '';
      },
    },
    {
      id: 'inf',
      label: 'Infinite sum S\u221e',
      intro: 'For |r| < 1: S\u221e = a\u2081 / (1 \u2212 r). Diverges otherwise.',
      defaultSolveFor: 's',
      fields: [
        { key: 'a1', label: (<>a<sub>1</sub></>) },
        { key: 'r',  label: 'r' },
        { key: 's',  label: (<>S<sub>&infin;</sub></>) },
      ],
      compute: (f, solveFor) => {
        const { a1, r, s } = f;
        if (solveFor === 's') {
          if (Math.abs(r) >= 1) return { error: 'Series diverges when |r| \u2265 1.' };
          return a1 / (1 - r);
        }
        if (solveFor === 'a1') return s * (1 - r);
        if (solveFor === 'r') {
          if (s === 0) return { error: 'Cannot solve for r when S\u221e = 0.' };
          const rr = 1 - a1 / s;
          if (Math.abs(rr) >= 1) return { error: 'Implied |r| \u2265 1 \u2014 series would not converge.' };
          return rr;
        }
      },
      renderResult: (r, f, solveFor) => {
        const labelMap = { a1: 'a\u2081', r: 'r', s: 'S\u221e' };
        return (<>{labelMap[solveFor]} = <strong>{fmt(r)}</strong></>);
      },
      theory:
        'For $|r| < 1$, the geometric series converges to $S_\\infty = \\dfrac{a_1}{1 - r}$. ' +
        'For $|r| \\geq 1$ the series diverges.',
      renderWalkthrough: (r, f, solveFor) => {
        const { a1, rr, s } = { a1: f.a1, rr: f.r, s: f.s };
        if (solveFor === 's')  return `$S_\\infty = \\dfrac{a_1}{1 - r} = \\dfrac{${fmt(parseFloat(a1))}}{1 - ${fmt(parseFloat(rr))}} = ${fmt(r)}$.`;
        if (solveFor === 'a1') return `Solving for $a_1$: $a_1 = S_\\infty (1 - r) = ${fmt(parseFloat(s))} \\cdot (1 - ${fmt(parseFloat(rr))}) = ${fmt(r)}$.`;
        if (solveFor === 'r')  return `Solving for $r$: $r = 1 - a_1 / S_\\infty = 1 - ${fmt(parseFloat(a1))} / ${fmt(parseFloat(s))} = ${fmt(r)}$.`;
        return '';
      },
    },
  ],
};

// =====================================================
// Lookup map — what the component imports
// =====================================================
const sequences = {
  arithmetic,
  geometric,
};

export default sequences;