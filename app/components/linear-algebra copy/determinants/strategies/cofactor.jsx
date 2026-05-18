// strategies/cofactor.jsx
//
// Cofactor expansion along a row or a column. Generic over n ∈ {3, 4, 5}.
//
// One level only: minor entries display their original A indices,
// but the minor's determinant is not expanded further — the symbol
// det(M_{i,j}) stands in for the inner computation. A student who
// wants to see a minor expanded can re-run the wrapper with size
// (n−1) on that minor.
//
// Per cell visited along the expansion axis, three sub-scenes:
//   STRIKE  — A with pivot row and pivot column greyed/struck;
//             pivot cell highlighted primary. No minor visible.
//             Running formula unchanged.
//   MINOR   — minor matrix M_{i,j} appears alongside A.
//             Running formula unchanged.
//   TERM    — running formula gains the new cofactor term
//             (signed) and the cell becomes "current".
//
// Plus three framing scenes:
//   INTRO         — A alone
//   SIGN PATTERN  — standalone matrix showing checkerboard signs
//   OUTRO         — result framed
//
// Total: 1 + 1 + 3n + 1 = 3n + 3 scenes
//   n=3 → 12, n=4 → 15, n=5 → 18.

import React from 'react';
import { buildTermPills, aSymbol, aDisplay, detEquals } from './_shared';

// ---- minor matrix label ---------------------------------------------------

function minorLabel(iStar, jStar) {
  return (
    <>
      M
      <span style={{
        fontSize: '0.7em',
        verticalAlign: 'sub',
        lineHeight: 0,
        fontStyle: 'normal'
      }}>
        {iStar + 1},{jStar + 1}
      </span>
    </>
  );
}

function minorHTML(iStar, jStar) {
  return `<i>M</i><sub>${iStar + 1},${jStar + 1}</sub>`;
}

// ---- index helpers --------------------------------------------------------

function survivingIndices(n, exclude) {
  const out = [];
  for (let i = 0; i < n; i++) if (i !== exclude) out.push(i);
  return out;
}

// ---- cellOverride builders -----------------------------------------------

// A with row/col struck through. Pivot cell stays as engine default
// (highlighted via cell highlights, not via overrides). All other
// cells in the pivot's row OR column get line-through + 50% opacity.
function buildStrikeOverrides(n, iStar, jStar) {
  const overrides = {};
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const isPivot = (r === iStar && c === jStar);
      const struck = !isPivot && (r === iStar || c === jStar);
      if (struck) {
        overrides[`${r},${c}`] = {
          display: aDisplay(r, c),
          style: { textDecoration: 'line-through', opacity: 0.5 }
        };
      }
    }
  }
  return overrides;
}

// Highlights for A in the struck state: pivot 'primary', struck
// cells 'muted'. Untouched cells fall back to default 'none'.
function buildStrikeHighlightCells(n, iStar, jStar) {
  const cells = [];
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const isPivot = (r === iStar && c === jStar);
      if (isPivot) {
        cells.push([r, c, 'primary']);
      } else if (r === iStar || c === jStar) {
        cells.push([r, c, 'muted']);
      }
    }
  }
  return cells;
}

// Minor matrix M_{iStar, jStar}: an (n−1)×(n−1) grid where each cell
// (mi, mj) displays the original A entry from the surviving row mi
// and surviving column mj (keeping original A indices).
function buildMinorOverrides(n, iStar, jStar) {
  const survR = survivingIndices(n, iStar);
  const survC = survivingIndices(n, jStar);
  const overrides = {};
  for (let mi = 0; mi < survR.length; mi++) {
    for (let mj = 0; mj < survC.length; mj++) {
      overrides[`${mi},${mj}`] = {
        display: aDisplay(survR[mi], survC[mj])
      };
    }
  }
  return overrides;
}

// Sign-pattern matrix: each cell shows '+' or '−'.
function buildSignPatternOverrides(n) {
  const overrides = {};
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const positive = (r + c) % 2 === 0;
      overrides[`${r},${c}`] = {
        display: positive ? '+' : '\u2212',
        fontStyle: 'normal',
        style: {
          fontSize: '22px',
          fontWeight: '700',
          color: positive ? '#16a34a' : '#dc2626'
        }
      };
    }
  }
  return overrides;
}

// ---- spec builders --------------------------------------------------------

function specA(n, cellOverrides = {}) {
  return {
    A: {
      symbol: 'a',
      label: 'A',
      rows: n,
      cols: n,
      bracketColor: '#1e40af',
      cellOverrides
    }
  };
}

function specAWithMinor(n, iStar, jStar, strikeOverrides) {
  return {
    A: {
      symbol: 'a',
      label: 'A',
      rows: n,
      cols: n,
      bracketColor: '#1e40af',
      cellOverrides: strikeOverrides
    },
    M: {
      symbol: 'a',
      label: minorLabel(iStar, jStar),
      rows: n - 1,
      cols: n - 1,
      bracketColor: '#16a34a',
      cellOverrides: buildMinorOverrides(n, iStar, jStar)
    }
  };
}

function specSignPattern(n) {
  return {
    A: {
      symbol: 'a',
      label: 'sign pattern',
      rows: n,
      cols: n,
      bracketColor: '#94a3b8',
      cellOverrides: buildSignPatternOverrides(n)
    }
  };
}

// ---- term construction ----------------------------------------------------

// expansionTerms: list of { iStar, jStar, sign } visited in order
// when expanding along the chosen axis.
function expansionTerms(n, axis, expansionIdx) {
  const terms = [];
  for (let k = 0; k < n; k++) {
    const i = axis === 'row' ? expansionIdx : k;
    const j = axis === 'row' ? k : expansionIdx;
    const positive = (i + j) % 2 === 0;
    terms.push({ iStar: i, jStar: j, sign: positive ? '+' : '-' });
  }
  return terms;
}

// Convert expansion terms into the { html, sign } shape expected by
// buildTermPills. First term: leading '-' shown if negative, else
// no leading operator (sign: null). Subsequent terms: sign always rendered.
function termPillData(termsList) {
  return termsList.map((t, idx) => {
    const inner =
      aSymbol(t.iStar, t.jStar) +
      ' &middot; det(' + minorHTML(t.iStar, t.jStar) + ')';
    return {
      html: inner,
      sign: idx === 0 ? (t.sign === '-' ? '-' : null) : t.sign
    };
  });
}

// ---- main builder ---------------------------------------------------------

export function buildCofactorScenes(n, options) {
  const axis = options?.axis || 'row';
  // Clamp expansionIndex so out-of-range stored state doesn't crash
  const rawIdx = options?.expansionIndex ?? 0;
  const expansionIdx = Math.max(0, Math.min(rawIdx, n - 1));

  const axisLabel = axis === 'row' ? 'row' : 'column';
  const axisIndexDisplay = expansionIdx + 1;

  // Static caption (same on every scene of this configuration)
  const headerTitle =
    `Determinant by cofactor expansion along ${axisLabel} ${axisIndexDisplay}`;
  const headerFormula =
    `det(<i>A</i>) = &sum;<sub style="font-style:normal">` +
    `${axis === 'row' ? 'j' : 'i'}</sub> ` +
    `(&minus;1)<sup style="font-style:normal;font-size:0.7em">i+j</sup> ` +
    `&middot; <i>a</i><sub>i,j</sub> &middot; det(<i>M</i><sub>i,j</sub>). ` +
    `Walk ${axisLabel} ${axisIndexDisplay}; each entry contributes a signed ` +
    `product of itself and the determinant of its ${n - 1}&times;${n - 1} minor.`;

  // Pre-compute terms
  const expTerms = expansionTerms(n, axis, expansionIdx);
  const pillTerms = termPillData(expTerms);
  const runningFormula = (currentIdx) =>
    detEquals() + buildTermPills(pillTerms, currentIdx);

  const layoutAlone = [{ type: 'matrix', ref: 'A' }];
  const layoutWithMinor = [
    { type: 'matrix', ref: 'A' },
    { type: 'operator', symbol: '->' },
    { type: 'matrix', ref: 'M' }
  ];

  const scenes = [];

  // ----- 1. INTRO -----
  scenes.push({
    title: headerTitle,
    formula: headerFormula,
    matrices: specA(n),
    layout: layoutAlone,
    highlights: {},
    overlays: [],
    stepTitle: `Intro &mdash; cofactor along ${axisLabel} ${axisIndexDisplay}`,
    stepFormula:
      `We will sum ${n} signed cofactor terms. Each term picks one entry of ` +
      `${axisLabel} ${axisIndexDisplay}, multiplies it by the determinant of the minor ` +
      `obtained by deleting its row and column, and applies the checkerboard sign.`
  });

  // ----- 2. SIGN PATTERN -----
  scenes.push({
    title: headerTitle,
    formula: headerFormula,
    matrices: specSignPattern(n),
    layout: layoutAlone,
    highlights: {},
    overlays: [],
    stepTitle: 'Sign pattern (&minus;1)<sup style="font-style:normal;font-size:0.7em">i+j</sup>',
    stepFormula:
      'The checkerboard sign attaches to every cofactor term. Top-left is +; ' +
      'signs alternate row by row and column by column. Each entry of A picks ' +
      'up the sign of its position.'
  });

  // ----- 3..3+3n. Per-cell triplet -----
  expTerms.forEach((t, idx) => {
    const { iStar, jStar } = t;
    const strikeOv = buildStrikeOverrides(n, iStar, jStar);
    const strikeH = { A: { cells: buildStrikeHighlightCells(n, iStar, jStar) } };

    // STRIKE
    scenes.push({
      title: headerTitle,
      formula: headerFormula,
      matrices: specA(n, strikeOv),
      layout: layoutAlone,
      highlights: strikeH,
      overlays: [],
      stepTitle:
        `Cell (${iStar + 1}, ${jStar + 1}): strike ` +
        (axis === 'row'
          ? `column ${jStar + 1}`
          : `row ${iStar + 1}`),
      stepFormula:
        `Pivot ${aSymbol(iStar, jStar)} stays; the other entries of its row ` +
        `and column are crossed out. What remains is the minor ` +
        `${minorHTML(iStar, jStar)}.`
    });

    // MINOR
    scenes.push({
      title: headerTitle,
      formula: headerFormula,
      matrices: specAWithMinor(n, iStar, jStar, strikeOv),
      layout: layoutWithMinor,
      highlights: strikeH,
      overlays: [],
      stepTitle:
        `Cell (${iStar + 1}, ${jStar + 1}): extract minor ${minorHTML(iStar, jStar)}`,
      stepFormula:
        `${minorHTML(iStar, jStar)} is the ${n - 1}&times;${n - 1} matrix of ` +
        `the surviving entries, keeping their original indices from <i>A</i>. ` +
        `Its determinant is the symbol det(${minorHTML(iStar, jStar)}); ` +
        `we do not expand it further here.`
    });

    // TERM
    const termSignDisplay = t.sign === '-' ? '&minus;' : (idx === 0 ? '' : '+');
    scenes.push({
      title: headerTitle,
      formula: headerFormula,
      matrices: specAWithMinor(n, iStar, jStar, strikeOv),
      layout: layoutWithMinor,
      highlights: strikeH,
      overlays: [],
      stepTitle:
        `Term ${idx + 1}: ${termSignDisplay}` +
        `${aSymbol(iStar, jStar)} &middot; det(${minorHTML(iStar, jStar)})`,
      stepFormula: runningFormula(idx)
    });
  });

  // ----- LAST. OUTRO -----
  scenes.push({
    title: headerTitle,
    formula: headerFormula,
    matrices: specA(n),
    layout: layoutAlone,
    highlights: {},
    overlays: [
      {
        type: 'group-bracket',
        matrices: ['A'],
        label: 'det(<i>A</i>)',
        style: 'accent',
        variant: 'solid',
        padding: 16,
        labelOffset: 8
      }
    ],
    stepTitle: 'Result &mdash; all cofactor terms summed',
    stepFormula: runningFormula(pillTerms.length)
  });

  return scenes;
}