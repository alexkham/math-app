import * as R from '../../rational';

// ===========================================================
// rankScenes.js
//
// Engine for computing the rank of a matrix via row reduction.
// Exports a single function, buildRankScenes, plus the small
// private helpers it needs.
//
// Approach: forward elimination to row echelon form (REF).
//   - Walk columns left to right, keeping a current pivot row.
//   - In each column, pick a pivot at or below the current row.
//     * none available -> that column has no pivot; move on
//       (same pivot row), it contributes a free variable.
//     * found -> swap into place, scale to 1, eliminate the
//       entries BELOW it, advance the pivot row.
//   - rank = number of pivots found = number of nonzero rows
//     in the resulting echelon form.
//
// Works for any m x n matrix (rectangular). rank <= min(m, n).
//
// Scene shape mirrors gaussJordan.js / buildInverseScenes:
//   { title, formula, matrices, layout, highlights, overlays }
// but with a single matrix (no augmented right half).
// Highlight vocabulary reused: pairA, pairB, accent,
// targetPending, muted.
// ===========================================================

// -----------------------------------------------------------
// Private helpers
// -----------------------------------------------------------
function cellDims(maxDim) {
  return maxDim <= 3 ? { cellPx: 54, fontPx: 15 } : { cellPx: 46, fontPx: 13 };
}

function matrixHeight(rows, cellPx) {
  return rows * cellPx + (rows - 1) * 3;
}

function toDisplayMatrix(matrix) {
  return matrix.map((row) => row.map(R.toDisplay));
}

// Pick the best pivot in `col` at or below `startRow`.
// Prefers unit entries, then integers, then larger magnitude —
// same heuristic as gaussJordan.selectPivot, generalised to
// rectangular matrices (uses matrix[r].length implicitly via col).
function selectPivot(matrix, col, startRow) {
  let bestRow = -1;
  let bestRank = -1;
  let bestMag = R.ZERO;
  for (let r = startRow; r < matrix.length; r++) {
    const v = matrix[r][col];
    if (R.isZero(v)) continue;
    let rank;
    if (R.isUnit(v))         rank = 3;
    else if (R.isInteger(v)) rank = 2;
    else                     rank = 1;
    const mag = R.abs(v);
    if (
      rank > bestRank ||
      (rank === bestRank && R.compare(mag, bestMag) > 0)
    ) {
      bestRow = r;
      bestRank = rank;
      bestMag = mag;
    }
  }
  return bestRow;
}

// Single-matrix scene factory.
//   M        : rational matrix (rows x cols)
//   rows,cols: dimensions
//   title,formula : strings (HTML allowed)
//   hl       : highlight object for the matrix, e.g.
//              { rows: [[i,'pairA']], cells: [[i,j,'accent']] }
//   extraOverlays : optional overlay array
function rankScene(M, rows, cols, title, formula, hl, extraOverlays) {
  const maxDim = Math.max(rows, cols);
  const { cellPx, fontPx } = cellDims(maxDim);

  return {
    title,
    formula,
    matrices: {
      A: {
        rows,
        cols,
        values: toDisplayMatrix(M),
        readOnly: true,
        cellSize: cellPx,
        fontSize: fontPx,
        showDimensions: false,
        symbol: null,
        label: null
      }
    },
    layout: [{ type: 'matrix', ref: 'A' }],
    highlights: { A: hl || {} },
    overlays: extraOverlays || []
  };
}

// ===========================================================
// buildRankScenes — REF reduction, counting pivots.
//
//   inputMatrix : m x n array of numbers/strings (editable)
//   onChange    : handler wired to scene 0's editable matrix
// ===========================================================
export function buildRankScenes(inputMatrix, onChange) {
  // -------- validation --------
  const valid =
    Array.isArray(inputMatrix) &&
    inputMatrix.length > 0 &&
    Array.isArray(inputMatrix[0]) &&
    inputMatrix[0].length > 0 &&
    inputMatrix.every(
      (row) => Array.isArray(row) && row.length === inputMatrix[0].length
    );

  if (!valid) {
    return [{
      title: 'Invalid input',
      formula: 'Matrix must be non-empty and rectangular (all rows the same length).',
      matrices: {},
      layout: []
    }];
  }

  const rows = inputMatrix.length;
  const cols = inputMatrix[0].length;
  const maxDim = Math.max(rows, cols);
  const { cellPx, fontPx } = cellDims(maxDim);
  const scenes = [];

  // -------- Scene 0: editable input matrix A --------
  scenes.push({
    title: 'Input matrix <i>A</i>',
    formula:
      'Edit cells directly, or use the panel above to resize or randomize <i>A</i>. ' +
      'Then step through the reduction to find the rank \u2014 the number of ' +
      'independent rows, equal to the number of pivots.',
    matrices: {
      A: {
        rows,
        cols,
        values: inputMatrix,
        symbol: 'A',
        label: 'A',
        readOnly: false,
        cellSize: cellPx,
        fontSize: fontPx,
        showDimensions: true
      }
    },
    layout: [{ type: 'matrix', ref: 'A' }],
    onChange: { A: onChange },
    highlights: {},
    overlays: []
  });

  // -------- Convert to rationals --------
  let M = inputMatrix.map((row) =>
    row.map((v) => {
      if (typeof v === 'number') return R.fromNumber(v);
      if (typeof v === 'string') return R.fromString(v);
      return R.ZERO;
    })
  );

  scenes.push(rankScene(
    M, rows, cols,
    'Reduce to row echelon form',
    'Use row operations to create a staircase of leading 1s (pivots). ' +
    'Each pivot marks one independent row. The rank is how many pivots ' +
    'we end up with \u2014 at most min(' + rows + ', ' + cols + ') = ' +
    Math.min(rows, cols) + '.'
  ));

  // -------- Forward elimination (REF) --------
  let pivotRow = 0;
  const pivotPositions = []; // [row, col] of each pivot found

  for (let col = 0; col < cols && pivotRow < rows; col++) {
    const pr = selectPivot(M, col, pivotRow);

    if (pr === -1) {
      // No pivot available in this column at or below pivotRow.
      scenes.push(rankScene(
        M, rows, cols,
        `Column ${col + 1}: no pivot`,
        `Every entry in column ${col + 1} at or below row ${pivotRow + 1} is zero, ` +
        `so this column has no pivot. It contributes a free variable. ` +
        `Move to the next column without advancing the pivot row.`,
        { cols: [[col, 'targetPending']] }
      ));
      continue;
    }

    // Swap into pivot position if needed.
    if (pr !== pivotRow) {
      scenes.push(rankScene(
        M, rows, cols,
        `Swap R<sub>${pivotRow + 1}</sub> &harr; R<sub>${pr + 1}</sub>`,
        `Bring a nonzero value into the pivot position (row ${pivotRow + 1}, column ${col + 1}).`,
        { rows: [[pivotRow, 'pairA'], [pr, 'pairB']] },
        [
          {
            type: 'cell-arrow-curve',
            from: { matrix: 'A', row: pivotRow, col },
            to:   { matrix: 'A', row: pr, col },
            style: 'primary',
            curveOffset: 60
          }
        ]
      ));
      [M[pivotRow], M[pr]] = [M[pr], M[pivotRow]];
    }

    // Scale pivot to 1.
    const pivot = M[pivotRow][col];
    if (!R.isOne(pivot)) {
      let title, formula;
      if (R.isNegOne(pivot)) {
        title = `R<sub>${pivotRow + 1}</sub> &larr; &minus;R<sub>${pivotRow + 1}</sub>`;
        formula = `Negate row ${pivotRow + 1} so the pivot becomes 1.`;
      } else {
        title = `R<sub>${pivotRow + 1}</sub> &larr; R<sub>${pivotRow + 1}</sub> / (${R.toDisplay(pivot)})`;
        formula = `Divide row ${pivotRow + 1} by ${R.toDisplay(pivot)} so the pivot becomes 1.`;
      }
      scenes.push(rankScene(
        M, rows, cols, title, formula,
        { rows: [[pivotRow, 'pairA']], cells: [[pivotRow, col, 'accent']] }
      ));
      const inv = R.inv(pivot);
      M[pivotRow] = M[pivotRow].map((v) => R.mul(v, inv));
    }

    // Eliminate entries BELOW the pivot (REF: forward only).
    for (let i = pivotRow + 1; i < rows; i++) {
      const c = M[i][col];
      if (R.isZero(c)) continue;

      const negC = R.neg(c);
      let title;
      if (R.isOne(c)) {
        title = `R<sub>${i + 1}</sub> &larr; R<sub>${i + 1}</sub> &minus; R<sub>${pivotRow + 1}</sub>`;
      } else if (R.isNegOne(c)) {
        title = `R<sub>${i + 1}</sub> &larr; R<sub>${i + 1}</sub> + R<sub>${pivotRow + 1}</sub>`;
      } else if (c.n > 0) {
        title = `R<sub>${i + 1}</sub> &larr; R<sub>${i + 1}</sub> &minus; ${R.toDisplay(c)}&middot;R<sub>${pivotRow + 1}</sub>`;
      } else {
        title = `R<sub>${i + 1}</sub> &larr; R<sub>${i + 1}</sub> + ${R.toDisplay(negC)}&middot;R<sub>${pivotRow + 1}</sub>`;
      }

      scenes.push(rankScene(
        M, rows, cols, title,
        `Zero out the entry below the pivot at (${i + 1}, ${col + 1}).`,
        {
          rows: [[pivotRow, 'pairA'], [i, 'pairB']],
          cells: [[pivotRow, col, 'accent'], [i, col, 'targetPending']]
        },
        [{
          type: 'cell-arrow',
          from: { matrix: 'A', row: pivotRow, col },
          to:   { matrix: 'A', row: i, col },
          style: 'primary'
        }]
      ));

      M[i] = M[i].map((v, j) => R.sub(v, R.mul(c, M[pivotRow][j])));
    }

    // Pivot fixed for this column.
    pivotPositions.push([pivotRow, col]);
    const fixedCells = pivotPositions.map(([r, c]) => [r, c, 'muted']);
    scenes.push(rankScene(
      M, rows, cols,
      `Pivot ${pivotPositions.length} placed (column ${col + 1})`,
      `Row ${pivotRow + 1} now leads with a pivot in column ${col + 1}, and every ` +
      `entry below it is zero. That is ${pivotPositions.length} pivot` +
      `${pivotPositions.length > 1 ? 's' : ''} so far.`,
      { cells: fixedCells }
    ));

    pivotRow++;
  }

  // -------- Final: report the rank --------
  const rank = pivotPositions.length;
  const pivotCells = pivotPositions.map(([r, c]) => [r, c, 'accent']);
  const zeroRowCells = [];
  for (let i = rank; i < rows; i++) {
    zeroRowCells.push([i, 'muted']);
  }

  scenes.push(rankScene(
    M, rows, cols,
    `rank(<i>A</i>) = ${rank}`,
    `The echelon form has ${rank} pivot${rank === 1 ? '' : 's'} ` +
    `(highlighted), so ${rank} row${rank === 1 ? '' : 's'} ` +
    `${rank === 1 ? 'is' : 'are'} independent: <strong>rank(<i>A</i>) = ${rank}</strong>. ` +
    (rank < rows
      ? `The remaining ${rows - rank} row${rows - rank === 1 ? '' : 's'} ` +
        `reduced to zero. `
      : '') +
    (rank === Math.min(rows, cols)
      ? `This is full rank for a ${rows}\u00D7${cols} matrix.`
      : `Since ${rank} &lt; min(${rows}, ${cols}), <i>A</i> is rank-deficient.`),
    {
      cells: pivotCells,
      rows: zeroRowCells
    }
  ));

  return scenes;
}