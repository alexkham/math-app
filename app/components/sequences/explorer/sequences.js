import React from 'react';

// =====================================================
// Central registry of sequence descriptors.
// Add new sequences here as named exports, then include
// them in the default-exported lookup map at the bottom.
// =====================================================

// Deterministic thousands-separator. Avoids toLocaleString
// hydration mismatches between Node SSR and browser.
const fmt = (n) => {
  if (!Number.isFinite(n)) return String(n);
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// =====================================================
// Triangular numbers
// =====================================================
export const triangular = {

  // ---------- identity ----------
  name: 'Triangular numbers',
  memberLabel: 'a triangular number',
  notation: 'T',
  formulaDisplay: (<>T<sub>n</sub> = n(n+1)/2</>),
  meta: 'closed form \u00b7 unbounded',

  // ---------- math ----------
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

  // ---------- initial inputs ----------
  initialInputs: {
    browse: '20',
    rangeFrom: '5',
    rangeTo: '15',
    member: '120',
    lookup: '42',
  },

  // ---------- mode-switching explanations ----------
  // Each mode has:
  //   theory:            static markdown+LaTeX string (what this mode does)
  //   renderWalkthrough: (result) => markdown+LaTeX string using current values
  // Both rendered via processContent for KaTeX math.
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

  // ---------- optional caps (defaults: 200) ----------
  // maxBrowseCount: 200,
  // maxRangeSpan:   200,
};

// =====================================================
// Lookup map — what the component imports
// =====================================================
const sequences = {
  triangular,
};

export default sequences;