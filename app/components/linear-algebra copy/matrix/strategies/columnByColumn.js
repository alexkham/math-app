// strategies/columnByColumn.js
// "Column by column" strategy.
// Outer loop: column j of C. For each j, we build the entire column at once
// by viewing it as A multiplied by column j of B.
//
//   col_j(C) = A · col_j(B)
//
// Visual story per column j:
//   1) Announce: "Building column j of C"
//   2) Highlight col j of B and col j of C (target)
//   3) For each k = 0..aCols-1:
//        - Highlight col k of A and cell (k, j) of B as scalar
//        - All cells in col j of C get the running-contribution treatment
//      (i.e., the k-th column of A scaled by b_{k,j} contributes to col_j(C))
//   4) Complete column j (mark target solid green)
// Final scene: all columns done.

function buildColumnFormula(cj, aCols, activeK, aSymbol, bSymbol, cSymbol, aRows) {
  // col_j(C) = sum_k b_{k,j} * col_k(A)
  const parts = [
    `col<sub>${cj + 1}</sub>(<span style="font-style:italic">${cSymbol}</span>) = `
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
      `<span style="font-style:italic">${bSymbol}</span><sub>${k + 1},${cj + 1}</sub>·` +
      `col<sub>${k + 1}</sub>(<span style="font-style:italic">${aSymbol}</span>)` +
      `</span>`
    );
    if (k < aCols - 1) parts.push(' + ');
  }
  return parts.join('');
}

export function buildColumnByColumnScenes(aRows, aCols, bCols, order = 'AB') {
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

  // Helper: every cell of C marked targetPending (dashed green outline, empty).
  const allCPending = () => {
    const out = [];
    for (let i = 0; i < aRows; i++) {
      for (let j = 0; j < bCols; j++) {
        out.push([i, j, 'targetPending']);
      }
    }
    return out;
  };

  // Helper: pending-but-with-column-cj-as-target (for "now building col cj").
  const pendingWithColumnTarget = (cj, targetStyle = 'targetPending') => {
    const out = [];
    for (let i = 0; i < aRows; i++) {
      for (let j = 0; j < bCols; j++) {
        if (j === cj) {
          out.push([i, j, targetStyle]);
        } else {
          out.push([i, j, 'targetPending']);
        }
      }
    }
    return out;
  };

  // Helper: completed-columns-so-far state, with optional in-progress column.
  // `completedThrough` = last fully-completed column index (-1 if none).
  // `activeCol` = currently-being-built column (style as `activeStyle`), or null.
  const columnsState = (completedThrough, activeCol = null, activeStyle = 'target') => {
    const out = [];
    for (let i = 0; i < aRows; i++) {
      for (let j = 0; j < bCols; j++) {
        if (j <= completedThrough) {
          out.push([i, j, 'target']);
        } else if (j === activeCol) {
          out.push([i, j, activeStyle]);
        } else {
          out.push([i, j, 'targetPending']);
        }
      }
    }
    return out;
  };

  const scenes = [];

  // Intro scene
  scenes.push({
    matrices, layout,
    highlights: { C: { cells: allCPending() } },
    overlays: [],
    title: `Column-by-column: ${aLabel} × ${bLabel} = C`,
    formula: `Build C one column at a time. Column j of C = ${aLabel} times column j of ${bLabel}. ${bCols} columns to build.`
  });

  for (let cj = 0; cj < bCols; cj++) {
    // Step 1: announce — column cj of B and C highlighted
    scenes.push({
      matrices, layout,
      highlights: {
        B: { cols: [[cj, 'col']] },
        C: { cells: columnsState(cj - 1, cj, 'targetPending') }
      },
      overlays: [],
      title: `Building column ${cj + 1} of C`,
      formula: `col<sub>${cj + 1}</sub>(<span style="font-style:italic">${cSymbol}</span>) = <span style="font-style:italic">${aLabel}</span> · col<sub>${cj + 1}</sub>(<span style="font-style:italic">${bSymbol}</span>)`
    });

    // Steps 2..aCols+1: walk k = 0..aCols-1, showing the rank-1 contribution
    //   b_{k,cj} * col_k(A) contributing to col_cj(C)
    for (let k = 0; k < aCols; k++) {
      // Highlight col k of A entirely (pairA), b_{k,cj} as scalar (pairB),
      // and column cj of C as "being built" (use target so it reads as active).
      const aCells = [];
      for (let i = 0; i < aRows; i++) aCells.push([i, k, 'pairA']);

      // Arrows from each cell of col k of A to the corresponding cell of col cj of C,
      // plus one arrow from b_{k,cj} to col cj of C (we'll draw to the top cell of col cj
      // as a representative anchor).
      const overlays = [];
      for (let i = 0; i < aRows; i++) {
        overlays.push({
          type: 'cell-arrow',
          from: { matrix: 'A', row: i, col: k },
          to: { matrix: 'C', row: i, col: cj },
          style: 'primary'
        });
      }
      // Scalar arrow — one curved arrow from b_{k,cj} to col cj of C (top cell).
      overlays.push({
        type: 'cell-arrow-curve',
        from: { matrix: 'B', row: k, col: cj },
        to: { matrix: 'C', row: 0, col: cj },
        style: 'secondary',
        curveOffset: 50
      });

      scenes.push({
        matrices, layout,
        highlights: {
          A: { cols: [[k, 'col']], cells: aCells },
          B: { cols: [[cj, 'col']], cells: [[k, cj, 'pairB']] },
          C: { cells: columnsState(cj - 1, cj, 'target') }
        },
        overlays,
        title: `col ${cj + 1} of C — term ${k + 1} of ${aCols}`,
        formula: buildColumnFormula(cj, aCols, k, aSymbol, bSymbol, cSymbol, aRows)
      });
    }

    // Column cj complete — clean state, target solid for cols 0..cj, pending for cols > cj.
    scenes.push({
      matrices, layout,
      highlights: { C: { cells: columnsState(cj) } },
      overlays: [],
      title: `Column ${cj + 1} of C complete &nbsp;✓`,
      formula: buildColumnFormula(cj, aCols, aCols, aSymbol, bSymbol, cSymbol, aRows)
    });
  }

  // Final scene — all done.
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
    title: 'All columns built — multiplication complete',
    formula: `Each column of C is a linear combination of ${aLabel}'s columns, weighted by the matching column of ${bLabel}.`
  });

  return scenes;
}