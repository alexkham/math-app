// strategies/sumOfOuterProducts.js
// "Sum of outer products" strategy.
// Outer loop: k = 0..aCols-1. At each step k, form the rank-1 outer product
//
//   M_k = col_k(A) · row_k(B)        (n×1 times 1×m  →  n×m)
//
// and accumulate it into C:
//
//   C = M_1 + M_2 + ... + M_{aCols}
//
// Visual story per k:
//   1) Announce: "Outer product k of aCols"
//   2) Highlight col k of A entirely (pairA) and row k of B entirely (pairB).
//   3) Show every cell of C receiving a contribution: c_{i,j} += a_{i,k} * b_{k,j}.
//      Use arrows from (col k of A, cell i) and (row k of B, cell j) to (i,j) of C —
//      one cell of C at a time would be too many; we instead draw one representative
//      pair of arrows pointing to the (0, 0) cell of C and rely on the bulk highlight
//      to communicate that all of C receives a contribution at this step.
//   4) Mark C as "after k contributions" (use 'target' style to signal C now contains
//      a partial sum). After the last k, C is complete.
// Final scene: all rank-1 contributions summed.

function buildOuterFormula(aCols, activeK, aSymbol, bSymbol, cSymbol, aLabel, bLabel) {
  // C = sum_{k=1..aCols} col_k(A) · row_k(B)
  const parts = [`<span style="font-style:italic">${cSymbol}</span> = `];
  for (let k = 0; k < aCols; k++) {
    let bg = 'transparent';
    let weight = 'normal';
    if (activeK === k) {
      bg = '#dbeafe';
      weight = '700';
    } else if ((activeK > k && activeK !== -1) || activeK === aCols) {
      bg = '#e0e7ef';
    }
    parts.push(
      `<span style="background:${bg};padding:1px 4px;border-radius:3px;font-weight:${weight};transition:background 0.25s ease">` +
      `col<sub>${k + 1}</sub>(<span style="font-style:italic">${aSymbol}</span>)·` +
      `row<sub>${k + 1}</sub>(<span style="font-style:italic">${bSymbol}</span>)` +
      `</span>`
    );
    if (k < aCols - 1) parts.push(' + ');
  }
  return parts.join('');
}

export function buildSumOfOuterProductsScenes(aRows, aCols, bCols, order = 'AB') {
  const aSymbol = order === 'BA' ? 'b' : 'a';
  const bSymbol = order === 'BA' ? 'a' : 'b';
  const cSymbol = 'c';
  const aLabel = order === 'BA' ? 'B' : 'A';
  const bLabel = order === 'BA' ? 'A' : 'B';

  const matrices = {
    A: { symbol: aSymbol, label: aLabel, rows: aRows, cols: aCols, bracketColor: '#1e40af' },
    B: { symbol: bSymbol, label: bLabel, rows: aCols, cols: bCols, bracketColor: '#475569' },
    C: { symbol: cSymbol, label: 'C', rows: aRows, cols: bCols, bracketColor: '#16a34a' }
  };

  const layout = [
    { type: 'matrix', ref: 'A' },
    { type: 'operator', symbol: '×' },
    { type: 'matrix', ref: 'B' },
    { type: 'operator', symbol: '=' },
    { type: 'matrix', ref: 'C' }
  ];

  // All cells of C with a single uniform style.
  const allCWithStyle = (style) => {
    const out = [];
    for (let i = 0; i < aRows; i++) {
      for (let j = 0; j < bCols; j++) {
        out.push([i, j, style]);
      }
    }
    return out;
  };

  const scenes = [];

  // Intro
  scenes.push({
    matrices, layout,
    highlights: { C: { cells: allCWithStyle('targetPending') } },
    overlays: [],
    title: `Sum of outer products: ${aLabel} × ${bLabel} = C`,
    formula: `C is the sum of ${aCols} rank-1 outer products: col k of ${aLabel} times row k of ${bLabel}, for k = 1..${aCols}.`
  });

  for (let k = 0; k < aCols; k++) {
    // Announce step k
    const aCellsK = [];
    for (let i = 0; i < aRows; i++) aCellsK.push([i, k, 'pairA']);
    const bCellsK = [];
    for (let j = 0; j < bCols; j++) bCellsK.push([k, j, 'pairB']);

    scenes.push({
      matrices, layout,
      highlights: {
        A: { cols: [[k, 'col']], cells: aCellsK },
        B: { rows: [[k, 'row']], cells: bCellsK },
        // C still shows partial accumulation state from previous k's.
        C: { cells: allCWithStyle(k === 0 ? 'targetPending' : 'target') }
      },
      overlays: [],
      title: `Outer product ${k + 1} of ${aCols}`,
      formula: `col<sub>${k + 1}</sub>(<span style="font-style:italic">${aSymbol}</span>) · row<sub>${k + 1}</sub>(<span style="font-style:italic">${bSymbol}</span>) — adds a rank-1 matrix to C`
    });

    // Show contribution: arrows from col k of A and row k of B converging onto C.
    // We draw one representative arrow from col k of A (top cell) and one from
    // row k of B (leftmost cell) to the top-left corner of C, to keep overlays
    // readable. The bulk-highlight on A's column and B's row carries the message
    // that every cell of C receives a contribution.
    const overlays = [
      {
        type: 'cell-arrow-curve',
        from: { matrix: 'A', row: 0, col: k },
        to: { matrix: 'C', row: 0, col: 0 },
        style: 'primary',
        curveOffset: 60
      },
      {
        type: 'cell-arrow-curve',
        from: { matrix: 'B', row: k, col: 0 },
        to: { matrix: 'C', row: 0, col: 0 },
        style: 'secondary',
        curveOffset: 60
      }
    ];

    scenes.push({
      matrices, layout,
      highlights: {
        A: { cols: [[k, 'col']], cells: aCellsK },
        B: { rows: [[k, 'row']], cells: bCellsK },
        C: { cells: allCWithStyle('target') }
      },
      overlays,
      title: `Adding rank-1 contribution ${k + 1}`,
      formula: buildOuterFormula(aCols, k, aSymbol, bSymbol, cSymbol, aLabel, bLabel)
    });

    // Completed-through-k state
    scenes.push({
      matrices, layout,
      highlights: { C: { cells: allCWithStyle('target') } },
      overlays: [],
      title: k === aCols - 1
        ? 'All rank-1 contributions added &nbsp;✓'
        : `After ${k + 1} of ${aCols} contributions`,
      formula: buildOuterFormula(aCols, k === aCols - 1 ? aCols : k, aSymbol, bSymbol, cSymbol, aLabel, bLabel)
    });
  }

  // Final scene
  scenes.push({
    matrices, layout,
    highlights: { C: { cells: allCWithStyle('target') } },
    overlays: [],
    title: 'Multiplication complete',
    formula: `C is built as the sum of ${aCols} rank-1 outer products — each one a column of ${aLabel} times the matching row of ${bLabel}.`
  });

  return scenes;
}