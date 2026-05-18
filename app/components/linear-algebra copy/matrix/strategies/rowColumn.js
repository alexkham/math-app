// strategies/rowColumn.js
// "Row · Column" strategy — standard A × B = C cell-by-cell scene generation.
// Each c_ij is built as a dot product of row i of A with column j of B.

function buildFormula(ci, cj, aCols, activeK, aSymbol, bSymbol, cSymbol) {
  const parts = [`<span style="font-style:italic">${cSymbol}</span><sub>${ci + 1},${cj + 1}</sub> = `];
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
      `<span style="font-style:italic">${bSymbol}</span><sub>${k + 1},${cj + 1}</sub>` +
      `</span>`
    );
    if (k < aCols - 1) parts.push(' + ');
  }
  return parts.join('');
}

/**
 * Build scenes for A × B = C using row-by-column dot products.
 *
 * @param {number} aRows  rows of left factor
 * @param {number} aCols  cols of left factor / rows of right factor
 * @param {number} bCols  cols of right factor
 * @param {string} order  'AB' (default) or 'BA' — swaps which matrix is left
 * @returns {Array} scene objects consumable by SceneCanvas
 */
export function buildRowColumnScenes(aRows, aCols, bCols, order = 'AB') {
  // For BA: the left factor in the visualization is B (size aCols × bCols was wrong;
  // when called with order='BA' the caller has already swapped the inputs so that
  // (aRows, aCols, bCols) describes the LEFT × RIGHT product to display).
  // Symbols are flipped only to keep the math labels meaningful.
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

  const scenes = [];

  scenes.push({
    matrices, layout,
    highlights: { C: { cells: allCPending() } },
    overlays: [],
    title: `Matrix multiplication: ${aLabel} × ${bLabel} = C`,
    formula: `Each <span style="font-style:italic">${cSymbol}</span><sub>i,j</sub> = (row i of ${aLabel}) · (column j of ${bLabel}). ${aRows * bCols} cells to compute.`
  });

  for (let ci = 0; ci < aRows; ci++) {
    for (let cj = 0; cj < bCols; cj++) {
      const pendingMinusTarget = allCPending().filter(([i, j]) => !(i === ci && j === cj));

      scenes.push({
        matrices, layout,
        highlights: {
          A: { rows: [[ci, 'row']] },
          B: { cols: [[cj, 'col']] },
          C: { cells: [...pendingMinusTarget, [ci, cj, 'target']] }
        },
        overlays: [],
        title: `Computing <span style="font-style:italic">${cSymbol}</span><sub>${ci + 1},${cj + 1}</sub>`,
        formula: buildFormula(ci, cj, aCols, -1, aSymbol, bSymbol, cSymbol)
      });

      for (let k = 0; k < aCols; k++) {
        scenes.push({
          matrices, layout,
          highlights: {
            A: { rows: [[ci, 'row']], cells: [[ci, k, 'pairA']] },
            B: { cols: [[cj, 'col']], cells: [[k, cj, 'pairB']] },
            C: { cells: [...pendingMinusTarget, [ci, cj, 'target']] }
          },
          overlays: [
            { type: 'cell-arrow', from: { matrix: 'A', row: ci, col: k }, to: { matrix: 'C', row: ci, col: cj }, style: 'primary' },
            { type: 'cell-arrow', from: { matrix: 'B', row: k, col: cj }, to: { matrix: 'C', row: ci, col: cj }, style: 'secondary' }
          ],
          title: `<span style="font-style:italic">${cSymbol}</span><sub>${ci + 1},${cj + 1}</sub> — term ${k + 1} of ${aCols}`,
          formula: buildFormula(ci, cj, aCols, k, aSymbol, bSymbol, cSymbol)
        });
      }

      const completed = [];
      for (let i = 0; i < aRows; i++) {
        for (let j = 0; j < bCols; j++) {
          const before = i < ci || (i === ci && j <= cj);
          completed.push([i, j, before ? 'target' : 'targetPending']);
        }
      }
      scenes.push({
        matrices, layout,
        highlights: { C: { cells: completed } },
        overlays: [],
        title: `<span style="font-style:italic">${cSymbol}</span><sub>${ci + 1},${cj + 1}</sub> complete &nbsp;✓`,
        formula: buildFormula(ci, cj, aCols, aCols, aSymbol, bSymbol, cSymbol)
      });
    }
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
    title: 'All cells computed — multiplication complete',
    formula: `Result C is ${aRows}×${bCols}. Each entry is a dot product of a row from ${aLabel} and a column from ${bLabel}.`
  });

  return scenes;
}