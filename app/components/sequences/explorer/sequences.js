

import React from 'react';
import primesArray from './primes.js';

// =====================================================
// Central registry of sequence descriptors.
// =====================================================

// Deterministic thousands-separator. Now handles BigInt as well.
const fmt = (n) => {
  if (typeof n === 'bigint') {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  if (!Number.isFinite(n)) return String(n);
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// =====================================================
// BigInt math helpers (used by Fibonacci)
// =====================================================
function isqrtBig(n) {
  if (n < 0n) throw new Error('negative');
  if (n < 2n) return n;
  let x = n;
  let y = (x + 1n) / 2n;
  while (y < x) {
    x = y;
    y = (x + n / x) / 2n;
  }
  return x;
}

function isPerfectSquareBig(n) {
  if (n < 0n) return false;
  const s = isqrtBig(n);
  return s * s === n;
}

// =====================================================
// Triangular numbers
// =====================================================
export const triangular = {

  name: 'Triangular numbers',
  memberLabel: 'a triangular number',
  notation: 'T',
  formulaDisplay: (<>T<sub>n</sub> = n(n+1)/2</>),
  meta: 'closed form \u00b7 unbounded',

  getTerm: (n) => n * (n + 1) / 2,

  isMember: (m) => {
    if (!Number.isFinite(m) || !Number.isInteger(m) || m < 1) return null;
    const d = 8 * m + 1;
    const s = Math.sqrt(d);
    const sr = Math.round(s);
    if (sr * sr !== d) return null;
    const n = (sr - 1) / 2;
    if (!Number.isInteger(n) || n < 1) return null;
    return n;
  },

  nearestNeighbors: (m) => {
    if (m < 1) return null;
    const k = Math.floor((Math.sqrt(8 * m + 1) - 1) / 2);
    return {
      low: { index: k, value: k * (k + 1) / 2 },
      high: { index: k + 1, value: (k + 1) * (k + 2) / 2 },
    };
  },

  initialInputs: {
    browse: '20',
    rangeFrom: '5',
    rangeTo: '15',
    member: '120',
    lookup: '42',
  },

  modeExplanations: {
    browse: {
      theory:
        'Browse computes the first $N$ terms by applying the closed form ' +
        '$T_k = \\dfrac{k(k+1)}{2}$ for $k = 1, 2, \\ldots, N$.',
      renderWalkthrough: ({ count, max, maxIndex, sum }) =>
        `First $${count}$ terms requested.\n\n` +
        `Last term: $T_{${maxIndex}} = \\dfrac{${maxIndex} \\cdot ${maxIndex + 1}}{2} = ${fmt(max)}$.\n\n` +
        `Sum of all $${count}$ terms: $${fmt(sum)}$.`,
    },
    range: {
      theory:
        'Range lists $T_a, T_{a+1}, \\ldots, T_b$ for the given indexes $a$ and $b$.',
      renderWalkthrough: ({ error, count, min, minIndex, max, maxIndex }) => {
        if (error) return `**Cannot compute:** ${error}`;
        return (
          `Indexes $${minIndex}$ through $${maxIndex}$ \u2014 $${count}$ terms.\n\n` +
          `Smallest: $T_{${minIndex}} = ${fmt(min)}$.\n\n` +
          `Largest: $T_{${maxIndex}} = ${fmt(max)}$.`
        );
      },
    },
    member: {
      theory:
        'A positive integer $m$ is triangular if and only if $8m + 1$ is a perfect square. ' +
        'When it is, the index is $n = \\dfrac{\\sqrt{8m + 1} - 1}{2}$.',
      renderWalkthrough: ({ error, value, isMember, index, nearest }) => {
        if (error) return `**Cannot compute:** ${error}`;
        const d = 8 * value + 1;
        const s = Math.sqrt(d);
        if (isMember) {
          const sr = Math.round(s);
          return (
            `Testing $m = ${fmt(value)}$:\n\n` +
            `$8m + 1 = ${fmt(d)}$.\n\n` +
            `$\\sqrt{${fmt(d)}} = ${sr}$ \u2014 perfect square.\n\n` +
            `$n = \\dfrac{${sr} - 1}{2} = ${index}$.\n\n` +
            `So $${fmt(value)} = T_{${index}}$.`
          );
        }
        let out =
          `Testing $m = ${fmt(value)}$:\n\n` +
          `$8m + 1 = ${fmt(d)}$.\n\n` +
          `$\\sqrt{${fmt(d)}} \\approx ${s.toFixed(3)}$ \u2014 not an integer.\n\n` +
          `So $${fmt(value)}$ is not triangular.`;
        if (nearest) {
          out +=
            `\n\nNearest below: $T_{${nearest.low.index}} = ${fmt(nearest.low.value)}$.\n\n` +
            `Nearest above: $T_{${nearest.high.index}} = ${fmt(nearest.high.value)}$.`;
        }
        return out;
      },
    },
    lookup: {
      theory:
        'Direct computation using the closed form $T_n = \\dfrac{n(n+1)}{2}$.',
      renderWalkthrough: ({ error, index, value }) => {
        if (error) return `**Cannot compute:** ${error}`;
        return (
          `For $n = ${fmt(index)}$:\n\n` +
          `$T_{${index}} = \\dfrac{${index} \\cdot ${index + 1}}{2} = ` +
          `\\dfrac{${fmt(index * (index + 1))}}{2} = ${fmt(value)}$.`
        );
      },
    },
  },
};

// =====================================================
// Square numbers
// =====================================================
export const square = {

  name: 'Square numbers',
  memberLabel: 'a square number',
  notation: 'S',
  formulaDisplay: (<>S<sub>n</sub> = n<sup>2</sup></>),
  meta: 'closed form \u00b7 unbounded',

  getTerm: (n) => n * n,

  isMember: (m) => {
    if (!Number.isFinite(m) || !Number.isInteger(m) || m < 1) return null;
    const s = Math.round(Math.sqrt(m));
    if (s < 1) return null;
    if (s * s !== m) return null;
    return s;
  },

  nearestNeighbors: (m) => {
    if (m < 1) return null;
    const k = Math.floor(Math.sqrt(m));
    return {
      low: { index: k, value: k * k },
      high: { index: k + 1, value: (k + 1) * (k + 1) },
    };
  },

  initialInputs: {
    browse: '20',
    rangeFrom: '5',
    rangeTo: '15',
    member: '169',
    lookup: '25',
  },

  modeExplanations: {
    browse: {
      theory:
        'Browse computes the first $N$ terms by applying the closed form ' +
        '$S_k = k^2$ for $k = 1, 2, \\ldots, N$.',
      renderWalkthrough: ({ count, max, maxIndex, sum }) =>
        `First $${count}$ terms requested.\n\n` +
        `Last term: $S_{${maxIndex}} = ${maxIndex}^2 = ${fmt(max)}$.\n\n` +
        `Sum of all $${count}$ terms: $${fmt(sum)}$ ` +
        `(matches $\\dfrac{${count}(${count}+1)(2 \\cdot ${count}+1)}{6}$).`,
    },
    range: {
      theory:
        'Range lists $S_a, S_{a+1}, \\ldots, S_b$ for the given indexes $a$ and $b$.',
      renderWalkthrough: ({ error, count, min, minIndex, max, maxIndex }) => {
        if (error) return `**Cannot compute:** ${error}`;
        return (
          `Indexes $${minIndex}$ through $${maxIndex}$ \u2014 $${count}$ terms.\n\n` +
          `Smallest: $S_{${minIndex}} = ${fmt(min)}$.\n\n` +
          `Largest: $S_{${maxIndex}} = ${fmt(max)}$.`
        );
      },
    },
    member: {
      theory:
        'A positive integer $m$ is a square number if and only if $\\sqrt{m}$ is itself a positive integer. ' +
        'When it is, the index is $n = \\sqrt{m}$.',
      renderWalkthrough: ({ error, value, isMember, index, nearest }) => {
        if (error) return `**Cannot compute:** ${error}`;
        const s = Math.sqrt(value);
        if (isMember) {
          return (
            `Testing $m = ${fmt(value)}$:\n\n` +
            `$\\sqrt{${fmt(value)}} = ${index}$ \u2014 an integer.\n\n` +
            `So $${fmt(value)} = ${index}^2 = S_{${index}}$.`
          );
        }
        let out =
          `Testing $m = ${fmt(value)}$:\n\n` +
          `$\\sqrt{${fmt(value)}} \\approx ${s.toFixed(3)}$ \u2014 not an integer.\n\n` +
          `So $${fmt(value)}$ is not a square number.`;
        if (nearest) {
          out +=
            `\n\nNearest below: $S_{${nearest.low.index}} = ${fmt(nearest.low.value)}$.\n\n` +
            `Nearest above: $S_{${nearest.high.index}} = ${fmt(nearest.high.value)}$.`;
        }
        return out;
      },
    },
    lookup: {
      theory:
        'Direct computation using the closed form $S_n = n^2$.',
      renderWalkthrough: ({ error, index, value }) => {
        if (error) return `**Cannot compute:** ${error}`;
        return (
          `For $n = ${fmt(index)}$:\n\n` +
          `$S_{${index}} = ${index}^2 = ${fmt(value)}$.`
        );
      },
    },
  },
};

// =====================================================
// Pentagonal numbers
// =====================================================
// P_n = n(3n-1)/2.
// Membership: 24m + 1 must be a perfect square s with (1 + s) divisible by 6.
// Then n = (1 + s) / 6.
function pentaAt(n) {
  return n * (3 * n - 1) / 2;
}

export const pentagonal = {

  name: 'Pentagonal numbers',
  memberLabel: 'a pentagonal number',
  notation: 'P',
  formulaDisplay: (<>P<sub>n</sub> = n(3n\u22121)/2</>),
  meta: 'closed form \u00b7 unbounded',

  getTerm: (n) => pentaAt(n),

  isMember: (m) => {
    if (!Number.isFinite(m) || !Number.isInteger(m) || m < 1) return null;
    const d = 24 * m + 1;
    const sr = Math.round(Math.sqrt(d));
    if (sr * sr !== d) return null;
    const num = 1 + sr;
    if (num % 6 !== 0) return null;
    const n = num / 6;
    if (!Number.isInteger(n) || n < 1) return null;
    return n;
  },

  nearestNeighbors: (m) => {
    if (m < 1) return null;
    let k = Math.max(1, Math.floor((1 + Math.sqrt(24 * m + 1)) / 6));
    while (k > 1 && pentaAt(k) > m) k--;
    while (pentaAt(k + 1) <= m) k++;
    return {
      low: { index: k, value: pentaAt(k) },
      high: { index: k + 1, value: pentaAt(k + 1) },
    };
  },

  initialInputs: {
    browse: '20',
    rangeFrom: '5',
    rangeTo: '15',
    member: '117',
    lookup: '25',
  },

  modeExplanations: {
    browse: {
      theory:
        'Browse computes the first $N$ terms by applying the closed form ' +
        '$P_k = \\dfrac{k(3k-1)}{2}$ for $k = 1, 2, \\ldots, N$.',
      renderWalkthrough: ({ count, max, maxIndex, sum }) =>
        `First $${count}$ terms requested.\n\n` +
        `Last term: $P_{${maxIndex}} = \\dfrac{${maxIndex} \\cdot ${3 * maxIndex - 1}}{2} = ${fmt(max)}$.\n\n` +
        `Sum of all $${count}$ terms: $${fmt(sum)}$.`,
    },
    range: {
      theory:
        'Range lists $P_a, P_{a+1}, \\ldots, P_b$ for the given indexes $a$ and $b$.',
      renderWalkthrough: ({ error, count, min, minIndex, max, maxIndex }) => {
        if (error) return `**Cannot compute:** ${error}`;
        return (
          `Indexes $${minIndex}$ through $${maxIndex}$ \u2014 $${count}$ terms.\n\n` +
          `Smallest: $P_{${minIndex}} = ${fmt(min)}$.\n\n` +
          `Largest: $P_{${maxIndex}} = ${fmt(max)}$.`
        );
      },
    },
    member: {
      theory:
        'A positive integer $m$ is pentagonal if and only if $24m + 1$ is a perfect square ' +
        'and $1 + \\sqrt{24m+1}$ is divisible by $6$. ' +
        'The index is then $n = \\dfrac{1 + \\sqrt{24m+1}}{6}$.',
      renderWalkthrough: ({ error, value, isMember, index, nearest }) => {
        if (error) return `**Cannot compute:** ${error}`;
        const d = 24 * value + 1;
        const s = Math.sqrt(d);
        const sr = Math.round(s);
        const isSquare = sr * sr === d;
        if (isMember) {
          return (
            `Testing $m = ${fmt(value)}$:\n\n` +
            `$24m + 1 = ${fmt(d)}$.\n\n` +
            `$\\sqrt{${fmt(d)}} = ${sr}$ \u2014 perfect square.\n\n` +
            `$n = \\dfrac{1 + ${sr}}{6} = ${index}$.\n\n` +
            `So $${fmt(value)} = P_{${index}}$.`
          );
        }
        let out = `Testing $m = ${fmt(value)}$:\n\n$24m + 1 = ${fmt(d)}$.\n\n`;
        if (!isSquare) {
          out +=
            `$\\sqrt{${fmt(d)}} \\approx ${s.toFixed(3)}$ \u2014 not a perfect square.\n\n` +
            `So $${fmt(value)}$ is not pentagonal.`;
        } else {
          out +=
            `$\\sqrt{${fmt(d)}} = ${sr}$ \u2014 perfect square.\n\n` +
            `$\\dfrac{1 + ${sr}}{6} = ${((1 + sr) / 6).toFixed(3)}$ \u2014 not an integer.\n\n` +
            `So $${fmt(value)}$ is not pentagonal.`;
        }
        if (nearest) {
          out +=
            `\n\nNearest below: $P_{${nearest.low.index}} = ${fmt(nearest.low.value)}$.\n\n` +
            `Nearest above: $P_{${nearest.high.index}} = ${fmt(nearest.high.value)}$.`;
        }
        return out;
      },
    },
    lookup: {
      theory:
        'Direct computation using the closed form $P_n = \\dfrac{n(3n-1)}{2}$.',
      renderWalkthrough: ({ error, index, value }) => {
        if (error) return `**Cannot compute:** ${error}`;
        return (
          `For $n = ${fmt(index)}$:\n\n` +
          `$P_{${index}} = \\dfrac{${index} \\cdot ${3 * index - 1}}{2} = ` +
          `\\dfrac{${fmt(index * (3 * index - 1))}}{2} = ${fmt(value)}$.`
        );
      },
    },
  },
};

// =====================================================
// Hexagonal numbers
// =====================================================
// H_n = n(2n-1).
// Membership: 8m + 1 must be a perfect square s with (1 + s) divisible by 4.
// Then n = (1 + s) / 4.
function hexaAt(n) {
  return n * (2 * n - 1);
}

export const hexagonal = {

  name: 'Hexagonal numbers',
  memberLabel: 'a hexagonal number',
  notation: 'H',
  formulaDisplay: (<>H<sub>n</sub> = n(2n\u22121)</>),
  meta: 'closed form \u00b7 unbounded',

  getTerm: (n) => hexaAt(n),

  isMember: (m) => {
    if (!Number.isFinite(m) || !Number.isInteger(m) || m < 1) return null;
    const d = 8 * m + 1;
    const sr = Math.round(Math.sqrt(d));
    if (sr * sr !== d) return null;
    const num = 1 + sr;
    if (num % 4 !== 0) return null;
    const n = num / 4;
    if (!Number.isInteger(n) || n < 1) return null;
    return n;
  },

  nearestNeighbors: (m) => {
    if (m < 1) return null;
    let k = Math.max(1, Math.floor((1 + Math.sqrt(8 * m + 1)) / 4));
    while (k > 1 && hexaAt(k) > m) k--;
    while (hexaAt(k + 1) <= m) k++;
    return {
      low: { index: k, value: hexaAt(k) },
      high: { index: k + 1, value: hexaAt(k + 1) },
    };
  },

  initialInputs: {
    browse: '20',
    rangeFrom: '5',
    rangeTo: '15',
    member: '190',
    lookup: '25',
  },

  modeExplanations: {
    browse: {
      theory:
        'Browse computes the first $N$ terms by applying the closed form ' +
        '$H_k = k(2k-1)$ for $k = 1, 2, \\ldots, N$. ' +
        'Every hexagonal number is also triangular: $H_n = T_{2n-1}$.',
      renderWalkthrough: ({ count, max, maxIndex, sum }) =>
        `First $${count}$ terms requested.\n\n` +
        `Last term: $H_{${maxIndex}} = ${maxIndex} \\cdot ${2 * maxIndex - 1} = ${fmt(max)}$.\n\n` +
        `Sum of all $${count}$ terms: $${fmt(sum)}$.`,
    },
    range: {
      theory:
        'Range lists $H_a, H_{a+1}, \\ldots, H_b$ for the given indexes $a$ and $b$.',
      renderWalkthrough: ({ error, count, min, minIndex, max, maxIndex }) => {
        if (error) return `**Cannot compute:** ${error}`;
        return (
          `Indexes $${minIndex}$ through $${maxIndex}$ \u2014 $${count}$ terms.\n\n` +
          `Smallest: $H_{${minIndex}} = ${fmt(min)}$.\n\n` +
          `Largest: $H_{${maxIndex}} = ${fmt(max)}$.`
        );
      },
    },
    member: {
      theory:
        'A positive integer $m$ is hexagonal if and only if $8m + 1$ is a perfect square ' +
        'and $1 + \\sqrt{8m+1}$ is divisible by $4$. ' +
        'The index is then $n = \\dfrac{1 + \\sqrt{8m+1}}{4}$.',
      renderWalkthrough: ({ error, value, isMember, index, nearest }) => {
        if (error) return `**Cannot compute:** ${error}`;
        const d = 8 * value + 1;
        const s = Math.sqrt(d);
        const sr = Math.round(s);
        const isSquare = sr * sr === d;
        if (isMember) {
          return (
            `Testing $m = ${fmt(value)}$:\n\n` +
            `$8m + 1 = ${fmt(d)}$.\n\n` +
            `$\\sqrt{${fmt(d)}} = ${sr}$ \u2014 perfect square.\n\n` +
            `$n = \\dfrac{1 + ${sr}}{4} = ${index}$.\n\n` +
            `So $${fmt(value)} = H_{${index}}$.`
          );
        }
        let out = `Testing $m = ${fmt(value)}$:\n\n$8m + 1 = ${fmt(d)}$.\n\n`;
        if (!isSquare) {
          out +=
            `$\\sqrt{${fmt(d)}} \\approx ${s.toFixed(3)}$ \u2014 not a perfect square.\n\n` +
            `So $${fmt(value)}$ is not hexagonal.`;
        } else {
          out +=
            `$\\sqrt{${fmt(d)}} = ${sr}$ \u2014 perfect square.\n\n` +
            `$\\dfrac{1 + ${sr}}{4} = ${((1 + sr) / 4).toFixed(3)}$ \u2014 not an integer.\n\n` +
            `So $${fmt(value)}$ is not hexagonal ` +
            `(though every hexagonal number is triangular, the reverse fails here).`;
        }
        if (nearest) {
          out +=
            `\n\nNearest below: $H_{${nearest.low.index}} = ${fmt(nearest.low.value)}$.\n\n` +
            `Nearest above: $H_{${nearest.high.index}} = ${fmt(nearest.high.value)}$.`;
        }
        return out;
      },
    },
    lookup: {
      theory:
        'Direct computation using the closed form $H_n = n(2n-1)$.',
      renderWalkthrough: ({ error, index, value }) => {
        if (error) return `**Cannot compute:** ${error}`;
        return (
          `For $n = ${fmt(index)}$:\n\n` +
          `$H_{${index}} = ${index} \\cdot ${2 * index - 1} = ${fmt(value)}$.`
        );
      },
    },
  },
};

// =====================================================
// Heptagonal numbers
// =====================================================
// Hp_n = n(5n-3)/2.
// Membership: 40m + 9 must be a perfect square s with (3 + s) divisible by 10.
// Then n = (3 + s) / 10.
function heptaAt(n) {
  return n * (5 * n - 3) / 2;
}

export const heptagonal = {

  name: 'Heptagonal numbers',
  memberLabel: 'a heptagonal number',
  notation: 'Hp',
  formulaDisplay: (<>Hp<sub>n</sub> = n(5n\u22123)/2</>),
  meta: 'closed form \u00b7 unbounded',

  getTerm: (n) => heptaAt(n),

  isMember: (m) => {
    if (!Number.isFinite(m) || !Number.isInteger(m) || m < 1) return null;
    const d = 40 * m + 9;
    const sr = Math.round(Math.sqrt(d));
    if (sr * sr !== d) return null;
    const num = 3 + sr;
    if (num % 10 !== 0) return null;
    const n = num / 10;
    if (!Number.isInteger(n) || n < 1) return null;
    return n;
  },

  nearestNeighbors: (m) => {
    if (m < 1) return null;
    let k = Math.max(1, Math.floor((3 + Math.sqrt(40 * m + 9)) / 10));
    while (k > 1 && heptaAt(k) > m) k--;
    while (heptaAt(k + 1) <= m) k++;
    return {
      low: { index: k, value: heptaAt(k) },
      high: { index: k + 1, value: heptaAt(k + 1) },
    };
  },

  initialInputs: {
    browse: '20',
    rangeFrom: '5',
    rangeTo: '15',
    member: '189',
    lookup: '25',
  },

  modeExplanations: {
    browse: {
      theory:
        'Browse computes the first $N$ terms by applying the closed form ' +
        '$\\mathrm{Hp}_k = \\dfrac{k(5k-3)}{2}$ for $k = 1, 2, \\ldots, N$.',
      renderWalkthrough: ({ count, max, maxIndex, sum }) =>
        `First $${count}$ terms requested.\n\n` +
        `Last term: $\\mathrm{Hp}_{${maxIndex}} = ` +
        `\\dfrac{${maxIndex} \\cdot ${5 * maxIndex - 3}}{2} = ${fmt(max)}$.\n\n` +
        `Sum of all $${count}$ terms: $${fmt(sum)}$.`,
    },
    range: {
      theory:
        'Range lists $\\mathrm{Hp}_a, \\mathrm{Hp}_{a+1}, \\ldots, \\mathrm{Hp}_b$ ' +
        'for the given indexes $a$ and $b$.',
      renderWalkthrough: ({ error, count, min, minIndex, max, maxIndex }) => {
        if (error) return `**Cannot compute:** ${error}`;
        return (
          `Indexes $${minIndex}$ through $${maxIndex}$ \u2014 $${count}$ terms.\n\n` +
          `Smallest: $\\mathrm{Hp}_{${minIndex}} = ${fmt(min)}$.\n\n` +
          `Largest: $\\mathrm{Hp}_{${maxIndex}} = ${fmt(max)}$.`
        );
      },
    },
    member: {
      theory:
        'A positive integer $m$ is heptagonal if and only if $40m + 9$ is a perfect square ' +
        'and $3 + \\sqrt{40m+9}$ is divisible by $10$. ' +
        'The index is then $n = \\dfrac{3 + \\sqrt{40m+9}}{10}$.',
      renderWalkthrough: ({ error, value, isMember, index, nearest }) => {
        if (error) return `**Cannot compute:** ${error}`;
        const d = 40 * value + 9;
        const s = Math.sqrt(d);
        const sr = Math.round(s);
        const isSquare = sr * sr === d;
        if (isMember) {
          return (
            `Testing $m = ${fmt(value)}$:\n\n` +
            `$40m + 9 = ${fmt(d)}$.\n\n` +
            `$\\sqrt{${fmt(d)}} = ${sr}$ \u2014 perfect square.\n\n` +
            `$n = \\dfrac{3 + ${sr}}{10} = ${index}$.\n\n` +
            `So $${fmt(value)} = \\mathrm{Hp}_{${index}}$.`
          );
        }
        let out = `Testing $m = ${fmt(value)}$:\n\n$40m + 9 = ${fmt(d)}$.\n\n`;
        if (!isSquare) {
          out +=
            `$\\sqrt{${fmt(d)}} \\approx ${s.toFixed(3)}$ \u2014 not a perfect square.\n\n` +
            `So $${fmt(value)}$ is not heptagonal.`;
        } else {
          out +=
            `$\\sqrt{${fmt(d)}} = ${sr}$ \u2014 perfect square.\n\n` +
            `$\\dfrac{3 + ${sr}}{10} = ${((3 + sr) / 10).toFixed(3)}$ \u2014 not an integer.\n\n` +
            `So $${fmt(value)}$ is not heptagonal.`;
        }
        if (nearest) {
          out +=
            `\n\nNearest below: $\\mathrm{Hp}_{${nearest.low.index}} = ${fmt(nearest.low.value)}$.\n\n` +
            `Nearest above: $\\mathrm{Hp}_{${nearest.high.index}} = ${fmt(nearest.high.value)}$.`;
        }
        return out;
      },
    },
    lookup: {
      theory:
        'Direct computation using the closed form $\\mathrm{Hp}_n = \\dfrac{n(5n-3)}{2}$.',
      renderWalkthrough: ({ error, index, value }) => {
        if (error) return `**Cannot compute:** ${error}`;
        return (
          `For $n = ${fmt(index)}$:\n\n` +
          `$\\mathrm{Hp}_{${index}} = \\dfrac{${index} \\cdot ${5 * index - 3}}{2} = ` +
          `\\dfrac{${fmt(index * (5 * index - 3))}}{2} = ${fmt(value)}$.`
        );
      },
    },
  },
};

// =====================================================
// Octagonal numbers
// =====================================================
// O_n = n(3n-2).
// Membership: 3m + 1 must be a perfect square s with (1 + s) divisible by 3.
// Then n = (1 + s) / 3.
function octaAt(n) {
  return n * (3 * n - 2);
}

export const octagonal = {

  name: 'Octagonal numbers',
  memberLabel: 'an octagonal number',
  notation: 'O',
  formulaDisplay: (<>O<sub>n</sub> = n(3n\u22122)</>),
  meta: 'closed form \u00b7 unbounded',

  getTerm: (n) => octaAt(n),

  isMember: (m) => {
    if (!Number.isFinite(m) || !Number.isInteger(m) || m < 1) return null;
    const d = 3 * m + 1;
    const sr = Math.round(Math.sqrt(d));
    if (sr * sr !== d) return null;
    const num = 1 + sr;
    if (num % 3 !== 0) return null;
    const n = num / 3;
    if (!Number.isInteger(n) || n < 1) return null;
    return n;
  },

  nearestNeighbors: (m) => {
    if (m < 1) return null;
    let k = Math.max(1, Math.floor((1 + Math.sqrt(3 * m + 1)) / 3));
    while (k > 1 && octaAt(k) > m) k--;
    while (octaAt(k + 1) <= m) k++;
    return {
      low: { index: k, value: octaAt(k) },
      high: { index: k + 1, value: octaAt(k + 1) },
    };
  },

  initialInputs: {
    browse: '20',
    rangeFrom: '5',
    rangeTo: '15',
    member: '225',
    lookup: '25',
  },

  modeExplanations: {
    browse: {
      theory:
        'Browse computes the first $N$ terms by applying the closed form ' +
        '$O_k = k(3k-2)$ for $k = 1, 2, \\ldots, N$.',
      renderWalkthrough: ({ count, max, maxIndex, sum }) =>
        `First $${count}$ terms requested.\n\n` +
        `Last term: $O_{${maxIndex}} = ${maxIndex} \\cdot ${3 * maxIndex - 2} = ${fmt(max)}$.\n\n` +
        `Sum of all $${count}$ terms: $${fmt(sum)}$.`,
    },
    range: {
      theory:
        'Range lists $O_a, O_{a+1}, \\ldots, O_b$ for the given indexes $a$ and $b$.',
      renderWalkthrough: ({ error, count, min, minIndex, max, maxIndex }) => {
        if (error) return `**Cannot compute:** ${error}`;
        return (
          `Indexes $${minIndex}$ through $${maxIndex}$ \u2014 $${count}$ terms.\n\n` +
          `Smallest: $O_{${minIndex}} = ${fmt(min)}$.\n\n` +
          `Largest: $O_{${maxIndex}} = ${fmt(max)}$.`
        );
      },
    },
    member: {
      theory:
        'A positive integer $m$ is octagonal if and only if $3m + 1$ is a perfect square ' +
        'and $1 + \\sqrt{3m+1}$ is divisible by $3$. ' +
        'The index is then $n = \\dfrac{1 + \\sqrt{3m+1}}{3}$.',
      renderWalkthrough: ({ error, value, isMember, index, nearest }) => {
        if (error) return `**Cannot compute:** ${error}`;
        const d = 3 * value + 1;
        const s = Math.sqrt(d);
        const sr = Math.round(s);
        const isSquare = sr * sr === d;
        if (isMember) {
          return (
            `Testing $m = ${fmt(value)}$:\n\n` +
            `$3m + 1 = ${fmt(d)}$.\n\n` +
            `$\\sqrt{${fmt(d)}} = ${sr}$ \u2014 perfect square.\n\n` +
            `$n = \\dfrac{1 + ${sr}}{3} = ${index}$.\n\n` +
            `So $${fmt(value)} = O_{${index}}$.`
          );
        }
        let out = `Testing $m = ${fmt(value)}$:\n\n$3m + 1 = ${fmt(d)}$.\n\n`;
        if (!isSquare) {
          out +=
            `$\\sqrt{${fmt(d)}} \\approx ${s.toFixed(3)}$ \u2014 not a perfect square.\n\n` +
            `So $${fmt(value)}$ is not octagonal.`;
        } else {
          out +=
            `$\\sqrt{${fmt(d)}} = ${sr}$ \u2014 perfect square.\n\n` +
            `$\\dfrac{1 + ${sr}}{3} = ${((1 + sr) / 3).toFixed(3)}$ \u2014 not an integer.\n\n` +
            `So $${fmt(value)}$ is not octagonal.`;
        }
        if (nearest) {
          out +=
            `\n\nNearest below: $O_{${nearest.low.index}} = ${fmt(nearest.low.value)}$.\n\n` +
            `Nearest above: $O_{${nearest.high.index}} = ${fmt(nearest.high.value)}$.`;
        }
        return out;
      },
    },
    lookup: {
      theory:
        'Direct computation using the closed form $O_n = n(3n-2)$.',
      renderWalkthrough: ({ error, index, value }) => {
        if (error) return `**Cannot compute:** ${error}`;
        return (
          `For $n = ${fmt(index)}$:\n\n` +
          `$O_{${index}} = ${index} \\cdot ${3 * index - 2} = ${fmt(value)}$.`
        );
      },
    },
  },
};

// =====================================================
// Tetrahedral numbers
// =====================================================
// Te_n = n(n+1)(n+2)/6 \u2014 the running total of triangular numbers.
// Membership has no clean closed form: estimate n via cube root, then verify.
function tetraAt(n) {
  return n * (n + 1) * (n + 2) / 6;
}

export const tetrahedral = {

  name: 'Tetrahedral numbers',
  memberLabel: 'a tetrahedral number',
  notation: 'Te',
  formulaDisplay: (<>Te<sub>n</sub> = n(n+1)(n+2)/6</>),
  meta: 'closed form \u00b7 unbounded',

  getTerm: (n) => tetraAt(n),

  isMember: (m) => {
    if (!Number.isFinite(m) || !Number.isInteger(m) || m < 1) return null;
    // Estimate via cube root: Te_n \u2248 n^3 / 6 \u2192 n \u2248 (6m)^(1/3).
    const est = Math.round(Math.cbrt(6 * m));
    for (let k = est - 1; k <= est + 1; k++) {
      if (k >= 1 && tetraAt(k) === m) return k;
    }
    return null;
  },

  nearestNeighbors: (m) => {
    if (m < 1) return null;
    let k = Math.max(1, Math.floor(Math.cbrt(6 * m)));
    // Walk down until Te_k <= m, then up until Te_{k+1} > m.
    while (k > 1 && tetraAt(k) > m) k--;
    while (tetraAt(k + 1) <= m) k++;
    return {
      low: { index: k, value: tetraAt(k) },
      high: { index: k + 1, value: tetraAt(k + 1) },
    };
  },

  initialInputs: {
    browse: '20',
    rangeFrom: '5',
    rangeTo: '15',
    member: '120',
    lookup: '20',
  },

  modeExplanations: {
    browse: {
      theory:
        'Browse computes the first $N$ tetrahedral numbers via the closed form ' +
        '$\\mathrm{Te}_k = \\dfrac{k(k+1)(k+2)}{6}$ for $k = 1, 2, \\ldots, N$. ' +
        '$\\mathrm{Te}_k$ is also the sum of the first $k$ triangular numbers.',
      renderWalkthrough: ({ count, max, maxIndex, sum }) =>
        `First $${count}$ terms requested.\n\n` +
        `Last term: $\\mathrm{Te}_{${maxIndex}} = ` +
        `\\dfrac{${maxIndex} \\cdot ${maxIndex + 1} \\cdot ${maxIndex + 2}}{6} = ${fmt(max)}$.\n\n` +
        `Sum of all $${count}$ terms: $${fmt(sum)}$.`,
    },
    range: {
      theory:
        'Range lists $\\mathrm{Te}_a, \\mathrm{Te}_{a+1}, \\ldots, \\mathrm{Te}_b$ ' +
        'for the given indexes $a$ and $b$.',
      renderWalkthrough: ({ error, count, min, minIndex, max, maxIndex }) => {
        if (error) return `**Cannot compute:** ${error}`;
        return (
          `Indexes $${minIndex}$ through $${maxIndex}$ \u2014 $${count}$ terms.\n\n` +
          `Smallest: $\\mathrm{Te}_{${minIndex}} = ${fmt(min)}$.\n\n` +
          `Largest: $\\mathrm{Te}_{${maxIndex}} = ${fmt(max)}$.`
        );
      },
    },
    member: {
      theory:
        'There is no simple closed-form inverse for $\\mathrm{Te}_n$. ' +
        'The test estimates $n \\approx \\sqrt[3]{6m}$ from $\\mathrm{Te}_n \\approx n^3/6$, ' +
        'then verifies $\\mathrm{Te}_k = m$ for $k$ near the estimate.',
      renderWalkthrough: ({ error, value, isMember, index, nearest }) => {
        if (error) return `**Cannot compute:** ${error}`;
        const est = Math.cbrt(6 * value);
        if (isMember) {
          return (
            `Testing $m = ${fmt(value)}$:\n\n` +
            `Estimate $n \\approx \\sqrt[3]{6 \\cdot ${fmt(value)}} \\approx ${est.toFixed(3)}$.\n\n` +
            `Checking $\\mathrm{Te}_{${index}} = ` +
            `\\dfrac{${index} \\cdot ${index + 1} \\cdot ${index + 2}}{6} = ${fmt(value)}$ \u2014 match.\n\n` +
            `So $${fmt(value)} = \\mathrm{Te}_{${index}}$.`
          );
        }
        let out =
          `Testing $m = ${fmt(value)}$:\n\n` +
          `Estimate $n \\approx \\sqrt[3]{6 \\cdot ${fmt(value)}} \\approx ${est.toFixed(3)}$.\n\n` +
          `No integer $k$ near this estimate gives $\\mathrm{Te}_k = ${fmt(value)}$.\n\n` +
          `So $${fmt(value)}$ is not a tetrahedral number.`;
        if (nearest) {
          out +=
            `\n\nNearest below: $\\mathrm{Te}_{${nearest.low.index}} = ${fmt(nearest.low.value)}$.\n\n` +
            `Nearest above: $\\mathrm{Te}_{${nearest.high.index}} = ${fmt(nearest.high.value)}$.`;
        }
        return out;
      },
    },
    lookup: {
      theory:
        'Direct computation using the closed form $\\mathrm{Te}_n = \\dfrac{n(n+1)(n+2)}{6}$.',
      renderWalkthrough: ({ error, index, value }) => {
        if (error) return `**Cannot compute:** ${error}`;
        const numer = index * (index + 1) * (index + 2);
        return (
          `For $n = ${fmt(index)}$:\n\n` +
          `$\\mathrm{Te}_{${index}} = \\dfrac{${index} \\cdot ${index + 1} \\cdot ${index + 2}}{6} = ` +
          `\\dfrac{${fmt(numer)}}{6} = ${fmt(value)}$.`
        );
      },
    },
  },
};

// =====================================================
// Fibonacci numbers (BigInt \u2014 exact for any safe-integer index)
// =====================================================
export const fibonacci = {

  name: 'Fibonacci numbers',
  memberLabel: 'a Fibonacci number',
  notation: 'F',
  formulaDisplay: (<>F<sub>n</sub> = F<sub>n-1</sub> + F<sub>n-2</sub></>),
  meta: 'recursive \u00b7 F\u2081 = F\u2082 = 1',

  // Zero element used by the shell for sums (Number sequences default to 0).
  zero: 0n,

  getTerm: (n) => {
    if (n < 1) return 0n;
    if (n <= 2) return 1n;
    let a = 1n, b = 1n;
    for (let i = 3; i <= n; i++) {
      const c = a + b;
      a = b;
      b = c;
    }
    return b;
  },

  isMember: (m) => {
    if (!Number.isFinite(m) || !Number.isInteger(m) || m < 1) return null;
    const mb = BigInt(m);
    const a = 5n * mb * mb + 4n;
    const b = 5n * mb * mb - 4n;
    if (!isPerfectSquareBig(a) && !isPerfectSquareBig(b)) return null;
    // Confirmed Fibonacci \u2014 find the index. (F_1 = F_2 = 1; return the first.)
    if (mb === 1n) return 1;
    let prev = 1n, curr = 1n, i = 2;
    while (curr < mb) {
      const next = prev + curr;
      prev = curr;
      curr = next;
      i++;
    }
    return curr === mb ? i : null;
  },

  nearestNeighbors: (m) => {
    if (!Number.isInteger(m) || m < 1) return null;
    const mb = BigInt(m);
    let prev = 1n, curr = 1n, iPrev = 1, iCurr = 2;
    while (curr < mb) {
      const next = prev + curr;
      prev = curr;
      curr = next;
      iPrev = iCurr;
      iCurr++;
    }
    return {
      low: { index: iPrev, value: prev },
      high: { index: iCurr, value: curr },
    };
  },

  initialInputs: {
    browse: '20',
    rangeFrom: '5',
    rangeTo: '15',
    member: '144',
    lookup: '50',
  },

  // F_200 has 43 digits \u2014 beyond ~100 the grid gets cramped.
  maxBrowseCount: 100,
  maxRangeSpan: 100,

  modeExplanations: {
    browse: {
      theory:
        'Browse computes the first $N$ Fibonacci numbers via the recurrence ' +
        '$F_1 = F_2 = 1$, $F_n = F_{n-1} + F_{n-2}$. ' +
        'Values are computed with arbitrary-precision integers, so they remain exact at any index.',
      renderWalkthrough: ({ count, max, maxIndex, sum }) =>
        `First $${count}$ terms requested.\n\n` +
        `Last term: $F_{${maxIndex}} = ${fmt(max)}$.\n\n` +
        `Sum of all $${count}$ terms: $${fmt(sum)}$.`,
    },
    range: {
      theory:
        'Range iterates the Fibonacci recurrence from $F_1$ up to $F_b$, ' +
        'keeping the slice from index $a$ onward.',
      renderWalkthrough: ({ error, count, min, minIndex, max, maxIndex }) => {
        if (error) return `**Cannot compute:** ${error}`;
        return (
          `Indexes $${minIndex}$ through $${maxIndex}$ \u2014 $${count}$ terms.\n\n` +
          `Smallest: $F_{${minIndex}} = ${fmt(min)}$.\n\n` +
          `Largest: $F_{${maxIndex}} = ${fmt(max)}$.`
        );
      },
    },
    member: {
      theory:
        'A positive integer $m$ is a Fibonacci number if and only if ' +
        '$5m^2 + 4$ or $5m^2 - 4$ is a perfect square. ' +
        'If one of them is, the index $n$ is found by iterating the recurrence until $F_n = m$.',
      renderWalkthrough: ({ error, value, isMember, index, nearest }) => {
        if (error) return `**Cannot compute:** ${error}`;
        const mb = BigInt(value);
        const a = 5n * mb * mb + 4n;
        const b = 5n * mb * mb - 4n;
        const aSquare = isPerfectSquareBig(a);
        const bSquare = isPerfectSquareBig(b);
        if (isMember) {
          const which = aSquare ? `$5m^2 + 4 = ${fmt(a)}$ is a perfect square` :
                                  `$5m^2 - 4 = ${fmt(b)}$ is a perfect square`;
          return (
            `Testing $m = ${fmt(value)}$:\n\n` +
            `${which}.\n\n` +
            `Iterating the recurrence: $F_{${index}} = ${fmt(value)}$.`
          );
        }
        let out =
          `Testing $m = ${fmt(value)}$:\n\n` +
          `$5m^2 + 4 = ${fmt(a)}$ \u2014 ${aSquare ? 'perfect square' : 'not a perfect square'}.\n\n` +
          `$5m^2 - 4 = ${fmt(b)}$ \u2014 ${bSquare ? 'perfect square' : 'not a perfect square'}.\n\n` +
          `So $${fmt(value)}$ is not a Fibonacci number.`;
        if (nearest) {
          out +=
            `\n\nNearest below: $F_{${nearest.low.index}} = ${fmt(nearest.low.value)}$.\n\n` +
            `Nearest above: $F_{${nearest.high.index}} = ${fmt(nearest.high.value)}$.`;
        }
        return out;
      },
    },
    lookup: {
      theory:
        'Iterates the recurrence $F_n = F_{n-1} + F_{n-2}$ from $F_1 = F_2 = 1$ up to the requested index $n$.',
      renderWalkthrough: ({ error, index, value }) => {
        if (error) return `**Cannot compute:** ${error}`;
        const digits = value.toString().length;
        return (
          `For $n = ${fmt(index)}$:\n\n` +
          `Computed by iterating the recurrence ${index - 2 > 0 ? `${index - 2}` : '0'} times.\n\n` +
          `$F_{${index}} = ${fmt(value)}$ ` +
          `(${digits} digit${digits === 1 ? '' : 's'}).`
        );
      },
    },
  },
};

// =====================================================
// Primes (precomputed: first 10,000 primes, max value 104,729)
// =====================================================
const primeSet = new Set(primesArray);
const primeIndex = new Map();
primesArray.forEach((p, i) => primeIndex.set(p, i + 1));
const PRIMES_MAX = primesArray[primesArray.length - 1];
const PRIMES_COUNT = primesArray.length;

export const primes = {

  name: 'Prime numbers',
  memberLabel: 'prime',
  notation: 'p',
  formulaDisplay: (<>p<sub>n</sub> = n-th prime</>),
  meta: `first ${fmt(PRIMES_COUNT)} \u00b7 max ${fmt(PRIMES_MAX)}`,

  getTerm: (n) => primesArray[n - 1],

  isMember: (m) => {
    if (!Number.isFinite(m) || !Number.isInteger(m) || m < 2) return null;
    if (m > PRIMES_MAX) return null;
    return primeIndex.get(m) ?? null;
  },

  nearestNeighbors: (m) => {
    if (!Number.isInteger(m) || m < 2) return null;
    if (m > PRIMES_MAX) return null;
    let lo = 0, hi = primesArray.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (primesArray[mid] < m) lo = mid + 1;
      else hi = mid;
    }
    // primesArray[lo] is the smallest prime >= m.
    const low = lo > 0
      ? { index: lo, value: primesArray[lo - 1] }
      : null;
    const high = lo < primesArray.length
      ? { index: lo + 1, value: primesArray[lo] }
      : null;
    if (!low || !high) return null;
    return { low, high };
  },

  initialInputs: {
    browse: '25',
    rangeFrom: '10',
    rangeTo: '30',
    member: '97',
    lookup: '100',
  },

  maxBrowseCount: 1000,
  maxRangeSpan: 1000,

  modeExplanations: {
    browse: {
      theory:
        `Browse reads the first $N$ primes from a precomputed list of the first ` +
        `$${fmt(PRIMES_COUNT)}$ primes (maximum value $${fmt(PRIMES_MAX)}$). ` +
        `Lookup is $O(1)$ per term.`,
      renderWalkthrough: ({ count, max, maxIndex, sum }) =>
        `First $${count}$ primes requested.\n\n` +
        `Last prime: $p_{${maxIndex}} = ${fmt(max)}$.\n\n` +
        `Sum of all $${count}$ primes: $${fmt(sum)}$.`,
    },
    range: {
      theory:
        'Range returns primes at positions $a$ through $b$ from the precomputed list.',
      renderWalkthrough: ({ error, count, min, minIndex, max, maxIndex }) => {
        if (error) return `**Cannot compute:** ${error}`;
        return (
          `Positions $${minIndex}$ through $${maxIndex}$ \u2014 $${count}$ primes.\n\n` +
          `Smallest: $p_{${minIndex}} = ${fmt(min)}$.\n\n` +
          `Largest: $p_{${maxIndex}} = ${fmt(max)}$.`
        );
      },
    },
    member: {
      theory:
        `Primality is checked by a hash-set lookup against the precomputed list ` +
        `(values up to $${fmt(PRIMES_MAX)}$). ` +
        `For $m > ${fmt(PRIMES_MAX)}$ this explorer cannot determine primality and reports the input as out of range.`,
      renderWalkthrough: ({ error, value, isMember, index, nearest }) => {
        if (error) return `**Cannot compute:** ${error}`;
        if (value > PRIMES_MAX) {
          return (
            `Testing $m = ${fmt(value)}$:\n\n` +
            `**Out of range** \u2014 this explorer only verifies primality up to $${fmt(PRIMES_MAX)}$ ` +
            `(the largest value in the precomputed list of the first $${fmt(PRIMES_COUNT)}$ primes). ` +
            `For larger numbers a primality-testing tool is needed.`
          );
        }
        if (isMember) {
          return (
            `Testing $m = ${fmt(value)}$:\n\n` +
            `Found in the precomputed list of primes.\n\n` +
            `It is the ${index}${ordinalSuffix(index)} prime: $p_{${index}} = ${fmt(value)}$.`
          );
        }
        let out =
          `Testing $m = ${fmt(value)}$:\n\n` +
          `Not present in the precomputed list of primes \u2014 so $${fmt(value)}$ is composite.`;
        if (nearest) {
          out +=
            `\n\nNearest prime below: $p_{${nearest.low.index}} = ${fmt(nearest.low.value)}$.\n\n` +
            `Nearest prime above: $p_{${nearest.high.index}} = ${fmt(nearest.high.value)}$.`;
        }
        return out;
      },
    },
    lookup: {
      theory:
        `Direct array access. The list holds the first $${fmt(PRIMES_COUNT)}$ primes, ` +
        `so any index $n$ in $[1, ${fmt(PRIMES_COUNT)}]$ is returned in $O(1)$ time.`,
      renderWalkthrough: ({ error, index, value }) => {
        if (error) return `**Cannot compute:** ${error}`;
        if (value === undefined) {
          return (
            `Index $n = ${fmt(index)}$ is out of range. ` +
            `This explorer holds only the first $${fmt(PRIMES_COUNT)}$ primes.`
          );
        }
        return (
          `For $n = ${fmt(index)}$:\n\n` +
          `$p_{${index}} = ${fmt(value)}$ (read directly from position $${index - 1}$ of the precomputed array).`
        );
      },
    },
  },
};

// Tiny helper for primes' member walkthrough.
function ordinalSuffix(n) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}

// =====================================================
// Lookup map — what the component imports
// =====================================================
const sequences = {
  triangular,
  square,
  pentagonal,
  hexagonal,
  heptagonal,
  octagonal,
  tetrahedral,
  fibonacci,
  primes,
};

export default sequences;