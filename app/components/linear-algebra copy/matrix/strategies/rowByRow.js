// strategies/rowByRow.js
// "Row by row" strategy.
// Outer loop: row i of C. For each i, we build the entire row at once
// by viewing it as row i of A multiplied by B.
//
//   row_i(C) = row_i(A) · B
//
// Visual story per row i:
//   1) Announce: "Building row i of C"
//   2) Highlight row i of A and row i of C (target)
//   3) For each k = 0..aCols-1:
//        - Highlight cell (i, k) of A as scalar (pairA)
//        - Highlight row k of B (pairB)
//        - Each cell of row i of C receives a contribution
//          row_i(C) += a_{i,k} * row_k(B)
//   4) Complete row i (mark target solid green)
// Final scene: all rows done.

function buildRowFormula(ci, aCols, activeK, aSymbol, bSymbol, cSymbol) {
  // row_i(C) = sum_k a_{i,k} * row_k(B)
  const parts = [
    `row<sub>${ci + 1}</sub>(<span style="font-style:italic">${cSymbol}</span>) = `
  ];
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
      `<span style="font-style:italic">${aSymbol}</span><sub>${ci + 1},${k + 1}</sub>·` +
      `row<sub>${k + 1}</sub>(<span style="font-style:italic">${bSymbol}</span>)` +
      `</span>`
    );
    if (k < aCols - 1) parts.push(' + ');
  }
  return parts.join('');
}

export function buildRowByRowScenes(aRows, aCols, bCols, order = 'AB') {
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

  const allCPending = () => {
    const out = [];
    for (let i = 0; i < aRows; i++) {
      for (let j = 0; j < bCols; j++) {
        out.push([i, j, 'targetPending']);
      }
    }
    return out;
  };

  // Rows state: rows 0..completedThrough solid target; activeRow as activeStyle;
  // remaining rows targetPending.
  const rowsState = (completedThrough, activeRow = null, activeStyle = 'target') => {
    const out = [];
    for (let i = 0; i < aRows; i++) {
      for (let j = 0; j < bCols; j++) {
        if (i <= completedThrough) {
          out.push([i, j, 'target']);
        } else if (i === activeRow) {
          out.push([i, j, activeStyle]);
        } else {
          out.push([i, j, 'targetPending']);
        }
      }
    }
    return out;
  };

  const scenes = [];

  scenes.push({
    matrices, layout,
    highlights: { C: { cells: allCPending() } },
    overlays: [],
    title: `Row-by-row: ${aLabel} × ${bLabel} = C`,
    formula: `Build C one row at a time. Row i of C = row i of ${aLabel} times ${bLabel}. ${aRows} rows to build.`
  });

  for (let ci = 0; ci < aRows; ci++) {
    // Announce: row ci of A and C highlighted.
    scenes.push({
      matrices, layout,
      highlights: {
        A: { rows: [[ci, 'row']] },
        C: { cells: rowsState(ci - 1, ci, 'targetPending') }
      },
      overlays: [],
      title: `Building row ${ci + 1} of C`,
      formula: `row<sub>${ci + 1}</sub>(<span style="font-style:italic">${cSymbol}</span>) = row<sub>${ci + 1}</sub>(<span style="font-style:italic">${aSymbol}</span>) · <span style="font-style:italic">${bLabel}</span>`
    });

    // Walk k = 0..aCols-1
    for (let k = 0; k < aCols; k++) {
      // Arrows: each cell of row k of B → matching cell of row ci of C,
      //         plus curved arrow from a_{ci,k} (scalar) to leftmost cell of row ci of C.
      const overlays = [];
      for (let j = 0; j < bCols; j++) {
        overlays.push({
          type: 'cell-arrow',
          from: { matrix: 'B', row: k, col: j },
          to: { matrix: 'C', row: ci, col: j },
          style: 'secondary'
        });
      }
      overlays.push({
        type: 'cell-arrow-curve',
        from: { matrix: 'A', row: ci, col: k },
        to: { matrix: 'C', row: ci, col: 0 },
        style: 'primary',
        curveOffset: 50
      });

      const bCells = [];
      for (let j = 0; j < bCols; j++) bCells.push([k, j, 'pairB']);

      scenes.push({
        matrices, layout,
        highlights: {
          A: { rows: [[ci, 'row']], cells: [[ci, k, 'pairA']] },
          B: { rows: [[k, 'row']], cells: bCells },
          C: { cells: rowsState(ci - 1, ci, 'target') }
        },
        overlays,
        title: `row ${ci + 1} of C — term ${k + 1} of ${aCols}`,
        formula: buildRowFormula(ci, aCols, k, aSymbol, bSymbol, cSymbol)
      });
    }

    // Row complete
    scenes.push({
      matrices, layout,
      highlights: { C: { cells: rowsState(ci) } },
      overlays: [],
      title: `Row ${ci + 1} of C complete &nbsp;✓`,
      formula: buildRowFormula(ci, aCols, aCols, aSymbol, bSymbol, cSymbol)
    });
  }

  const allTarget = [];
  for (let i = 0; i < aRows; i++) {
    for (let j = 0; j < bCols; j++) {
      allTarget.push([i, j, 'target']);
    }
  }
  scenes.push({
    matrices, layout,
    highlights: { C: { cells: allTarget } },
    overlays: [],
    title: 'All rows built — multiplication complete',
    formula: `Each row of C is a linear combination of ${bLabel}'s rows, weighted by the matching row of ${aLabel}.`
  });

  return scenes;
}