// import React from 'react';

// // =====================================================
// // Central registry of sequence descriptors.
// // Add new sequences here as named exports, then include
// // them in the default-exported lookup map at the bottom.
// // =====================================================

// // Deterministic thousands-separator. Avoids toLocaleString
// // hydration mismatches between Node SSR and browser.
// const fmt = (n) => {
//   if (!Number.isFinite(n)) return String(n);
//   return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// };

// // =====================================================
// // Triangular numbers
// // =====================================================
// export const triangular = {

//   // ---------- identity ----------
//   name: 'Triangular numbers',
//   memberLabel: 'a triangular number',
//   notation: 'T',
//   formulaDisplay: (<>T<sub>n</sub> = n(n+1)/2</>),
//   meta: 'closed form \u00b7 unbounded',

//   // ---------- math ----------
//   getTerm: (n) => n * (n + 1) / 2,

//   isMember: (m) => {
//     if (!Number.isFinite(m) || !Number.isInteger(m) || m < 1) return null;
//     const d = 8 * m + 1;
//     const s = Math.sqrt(d);
//     const sr = Math.round(s);
//     if (sr * sr !== d) return null;
//     const n = (sr - 1) / 2;
//     if (!Number.isInteger(n) || n < 1) return null;
//     return n;
//   },

//   nearestNeighbors: (m) => {
//     if (m < 1) return null;
//     const k = Math.floor((Math.sqrt(8 * m + 1) - 1) / 2);
//     return {
//       low: { index: k, value: k * (k + 1) / 2 },
//       high: { index: k + 1, value: (k + 1) * (k + 2) / 2 },
//     };
//   },

//   // ---------- initial inputs ----------
//   initialInputs: {
//     browse: '20',
//     rangeFrom: '5',
//     rangeTo: '15',
//     member: '120',
//     lookup: '42',
//   },

//   // ---------- mode-switching explanations ----------
//   // Each mode has:
//   //   theory:            static markdown+LaTeX string (what this mode does)
//   //   renderWalkthrough: (result) => markdown+LaTeX string using current values
//   // Both rendered via processContent for KaTeX math.
//   modeExplanations: {

//     browse: {
//       theory:
//         'Browse computes the first $N$ terms by applying the closed form ' +
//         '$T_k = \\dfrac{k(k+1)}{2}$ for $k = 1, 2, \\ldots, N$.',
//       renderWalkthrough: ({ count, max, maxIndex, sum }) =>
//         `First $${count}$ terms requested.\n\n` +
//         `Last term: $T_{${maxIndex}} = \\dfrac{${maxIndex} \\cdot ${maxIndex + 1}}{2} = ${fmt(max)}$.\n\n` +
//         `Sum of all $${count}$ terms: $${fmt(sum)}$.`,
//     },

//     range: {
//       theory:
//         'Range lists $T_a, T_{a+1}, \\ldots, T_b$ for the given indexes $a$ and $b$.',
//       renderWalkthrough: ({ error, count, min, minIndex, max, maxIndex }) => {
//         if (error) return `**Cannot compute:** ${error}`;
//         return (
//           `Indexes $${minIndex}$ through $${maxIndex}$ \u2014 $${count}$ terms.\n\n` +
//           `Smallest: $T_{${minIndex}} = ${fmt(min)}$.\n\n` +
//           `Largest: $T_{${maxIndex}} = ${fmt(max)}$.`
//         );
//       },
//     },

//     member: {
//       theory:
//         'A positive integer $m$ is triangular if and only if $8m + 1$ is a perfect square. ' +
//         'When it is, the index is $n = \\dfrac{\\sqrt{8m + 1} - 1}{2}$.',
//       renderWalkthrough: ({ error, value, isMember, index, nearest }) => {
//         if (error) return `**Cannot compute:** ${error}`;
//         const d = 8 * value + 1;
//         const s = Math.sqrt(d);
//         if (isMember) {
//           const sr = Math.round(s);
//           return (
//             `Testing $m = ${fmt(value)}$:\n\n` +
//             `$8m + 1 = ${fmt(d)}$.\n\n` +
//             `$\\sqrt{${fmt(d)}} = ${sr}$ \u2014 perfect square.\n\n` +
//             `$n = \\dfrac{${sr} - 1}{2} = ${index}$.\n\n` +
//             `So $${fmt(value)} = T_{${index}}$.`
//           );
//         }
//         let out =
//           `Testing $m = ${fmt(value)}$:\n\n` +
//           `$8m + 1 = ${fmt(d)}$.\n\n` +
//           `$\\sqrt{${fmt(d)}} \\approx ${s.toFixed(3)}$ \u2014 not an integer.\n\n` +
//           `So $${fmt(value)}$ is not triangular.`;
//         if (nearest) {
//           out +=
//             `\n\nNearest below: $T_{${nearest.low.index}} = ${fmt(nearest.low.value)}$.\n\n` +
//             `Nearest above: $T_{${nearest.high.index}} = ${fmt(nearest.high.value)}$.`;
//         }
//         return out;
//       },
//     },

//     lookup: {
//       theory:
//         'Direct computation using the closed form $T_n = \\dfrac{n(n+1)}{2}$.',
//       renderWalkthrough: ({ error, index, value }) => {
//         if (error) return `**Cannot compute:** ${error}`;
//         return (
//           `For $n = ${fmt(index)}$:\n\n` +
//           `$T_{${index}} = \\dfrac{${index} \\cdot ${index + 1}}{2} = ` +
//           `\\dfrac{${fmt(index * (index + 1))}}{2} = ${fmt(value)}$.`
//         );
//       },
//     },
//   },

//   // ---------- optional caps (defaults: 200) ----------
//   // maxBrowseCount: 200,
//   // maxRangeSpan:   200,
// };

// // =====================================================
// // Lookup map — what the component imports
// // =====================================================
// const sequences = {
//   triangular,
// };

// export default sequences;



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
// Fibonacci numbers (BigInt — exact for any safe-integer index)
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
    // Confirmed Fibonacci — find the index. (F_1 = F_2 = 1; return the first.)
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

  // F_200 has 43 digits — beyond ~100 the grid gets cramped.
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
  fibonacci,
  primes,
};

export default sequences;