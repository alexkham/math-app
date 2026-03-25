// /**
//  * computeMatrixSystem.js
//  *
//  * System of equations operations.
//  * Implemented: Solve Linear System, Gaussian Elimination, Gauss-Jordan,
//  *              Cramer's Rule, Matrix Equation AX=B, Least Squares Solution
//  *
//  * Convention: matrices[0] = A (coefficient), matrices[1] = b (RHS vector)
//  */

// import {
//   fmt, fmtMatrix, transpose, matMultiply, determinant, inverse, rowReduce,
// } from './computeMatrix';

// // ─────────────────────────────────────────────────────────────
// // Helpers
// // ─────────────────────────────────────────────────────────────

// /** Build augmented matrix [A | b] */
// function augment(a, b) {
//   return a.map((row, i) => [...row, ...(b[i] || [0])]);
// }

// /** Extract solution vector from RREF augmented matrix, if unique */
// function extractSolution(rref, pivotCols, numVars) {
//   const rows = rref.length;
//   const augCols = rref[0].length;

//   // Check for inconsistency: a row like [0 0 ... 0 | c] where c ≠ 0
//   for (let r = 0; r < rows; r++) {
//     const allZeroLeft = rref[r].slice(0, numVars).every(v => Math.abs(v) < 1e-10);
//     const rhsVal = rref[r][augCols - 1];
//     if (allZeroLeft && Math.abs(rhsVal) > 1e-10) {
//       return { type: 'inconsistent' };
//     }
//   }

//   // Check for unique vs infinite solutions
//   if (pivotCols.length < numVars) {
//     return { type: 'infinite', rank: pivotCols.length, numVars };
//   }

//   // Unique solution: read from RHS column
//   const solution = [];
//   for (let i = 0; i < numVars; i++) {
//     solution.push(rref[i][augCols - 1]);
//   }
//   return { type: 'unique', solution };
// }

// // ─────────────────────────────────────────────────────────────
// // Operations
// // ─────────────────────────────────────────────────────────────

// function calcSolveSystem(mats, metas) {
//   const a = mats[0];
//   const b = mats[1];
//   const augmented = augment(a, b);
//   const { rref, pivotCols } = rowReduce(augmented);
//   const numVars = a[0].length;
//   const sol = extractSolution(rref, pivotCols, numVars);

//   if (sol.type === 'inconsistent') {
//     return { type: 'error', value: 'System is inconsistent \u2014 no solution exists' };
//   }

//   if (sol.type === 'infinite') {
//     return {
//       type: 'boolean',
//       value: false,
//       detail: `System has infinitely many solutions (rank ${sol.rank} < ${sol.numVars} variables). See Gauss-Jordan for the RREF.`,
//       label: 'Solve Ax = b',
//     };
//   }

//   return {
//     type: 'vector',
//     value: sol.solution.map(fmt),
//     label: 'x = solution of Ax = b',
//     variables: sol.solution.map((_, i) => `x${i + 1}`),
//   };
// }

// function calcGaussianElim(mats) {
//   const a = mats[0];
//   const b = mats[1];
//   const augmented = augment(a, b);

//   // Row echelon form (not reduced — only eliminate below pivots)
//   const m = augmented.map(r => [...r]);
//   const rows = m.length;
//   const cols = m[0].length;
//   let pivotRow = 0;

//   for (let col = 0; col < cols - 1 && pivotRow < rows; col++) {
//     let maxRow = pivotRow;
//     for (let r = pivotRow + 1; r < rows; r++) {
//       if (Math.abs(m[r][col]) > Math.abs(m[maxRow][col])) maxRow = r;
//     }
//     if (Math.abs(m[maxRow][col]) < 1e-10) continue;
//     [m[pivotRow], m[maxRow]] = [m[maxRow], m[pivotRow]];

//     for (let r = pivotRow + 1; r < rows; r++) {
//       const factor = m[r][col] / m[pivotRow][col];
//       for (let j = col; j < cols; j++) {
//         m[r][j] -= factor * m[pivotRow][j];
//       }
//     }
//     pivotRow++;
//   }

//   return {
//     type: 'matrix',
//     value: fmtMatrix(m),
//     label: 'Row Echelon Form [A | b]',
//     rows: m.length,
//     cols: m[0].length,
//   };
// }

// function calcGaussJordan(mats) {
//   const a = mats[0];
//   const b = mats[1];
//   const augmented = augment(a, b);
//   const { rref } = rowReduce(augmented);

//   return {
//     type: 'matrix',
//     value: fmtMatrix(rref),
//     label: 'Reduced Row Echelon Form [A | b]',
//     rows: rref.length,
//     cols: rref[0].length,
//   };
// }

// function calcCramersRule(mats) {
//   const a = mats[0];
//   const b = mats[1];

//   if (a.length !== a[0].length) {
//     return { type: 'error', value: "Cramer's Rule requires a square coefficient matrix" };
//   }

//   const n = a.length;
//   const detA = determinant(a);
//   if (Math.abs(detA) < 1e-10) {
//     return { type: 'error', value: "Cramer's Rule requires det(A) \u2260 0. The matrix is singular." };
//   }

//   // Extract b as column vector
//   const bCol = b.map(row => row[0]);

//   const solution = [];
//   const details = [`det(A) = ${fmt(detA)}`];

//   for (let i = 0; i < n; i++) {
//     // Replace column i of A with b
//     const modified = a.map((row, r) => {
//       const newRow = [...row];
//       newRow[i] = bCol[r];
//       return newRow;
//     });
//     const detMod = determinant(modified);
//     const xi = detMod / detA;
//     solution.push(xi);
//     details.push(`x${i + 1} = det(A${i + 1}) / det(A) = ${fmt(detMod)} / ${fmt(detA)} = ${fmt(xi)}`);
//   }

//   return {
//     type: 'vector',
//     value: solution.map(fmt),
//     label: "Cramer's Rule: x",
//     variables: solution.map((_, i) => `x${i + 1}`),
//     detail: details.join('\n'),
//   };
// }

// function calcMatrixEquation(mats) {
//   const a = mats[0];
//   const b = mats[1];

//   if (a.length !== a[0].length) {
//     return { type: 'error', value: 'Matrix equation AX = B requires A to be square' };
//   }

//   const det = determinant(a);
//   if (Math.abs(det) < 1e-10) {
//     return { type: 'error', value: 'A is singular (det = 0), cannot compute A\u207B\u00B9B' };
//   }

//   const inv = inverse(a);
//   if (!inv) {
//     return { type: 'error', value: 'Failed to compute inverse of A' };
//   }

//   const x = matMultiply(inv, b);
//   return {
//     type: 'matrix',
//     value: fmtMatrix(x),
//     label: 'X = A\u207B\u00B9B',
//     rows: x.length,
//     cols: x[0].length,
//   };
// }

// function calcLeastSquares(mats) {
//   const a = mats[0];
//   const b = mats[1];

//   // x = (AᵀA)⁻¹ Aᵀb
//   const at = transpose(a);
//   const ata = matMultiply(at, a);

//   // Check if AᵀA is invertible
//   if (ata.length !== ata[0].length) {
//     return { type: 'error', value: 'A\u1D40A is not square \u2014 unexpected error' };
//   }

//   const det = determinant(ata);
//   if (Math.abs(det) < 1e-10) {
//     return { type: 'error', value: 'A\u1D40A is singular \u2014 columns of A are linearly dependent' };
//   }

//   const ataInv = inverse(ata);
//   if (!ataInv) {
//     return { type: 'error', value: 'Failed to invert A\u1D40A' };
//   }

//   const atb = matMultiply(at, b);
//   const x = matMultiply(ataInv, atb);

//   // Compute residual ||Ax - b||
//   const ax = matMultiply(a, x);
//   let residualSq = 0;
//   for (let i = 0; i < ax.length; i++) {
//     const diff = ax[i][0] - b[i][0];
//     residualSq += diff * diff;
//   }

//   return {
//     type: 'vector',
//     value: x.map(row => fmt(row[0])),
//     label: 'x\u0302 = (A\u1D40A)\u207B\u00B9A\u1D40b  (least squares)',
//     variables: x.map((_, i) => `x${i + 1}`),
//     detail: `Residual ||Ax\u0302 \u2212 b|| = ${fmt(Math.sqrt(residualSq))}`,
//   };
// }

// // ─────────────────────────────────────────────────────────────
// // Export map
// // ─────────────────────────────────────────────────────────────

// export const systemOps = {
//   'Solve Linear System': calcSolveSystem,
//   'Gaussian Elimination': calcGaussianElim,
//   'Gauss-Jordan': calcGaussJordan,
//   "Cramer's Rule": calcCramersRule,
//   'Matrix Equation AX=B': calcMatrixEquation,
//   'Least Squares Solution': calcLeastSquares,
// };


/**
 * computeMatrixSystem.js
 *
 * System of equations operations.
 * Implemented: Solve Linear System, Gaussian Elimination, Gauss-Jordan,
 *              Cramer's Rule, Matrix Equation AX=B, Least Squares Solution
 *
 * Convention: matrices[0] = A (coefficient), matrices[1] = b (RHS vector)
 */

import {
  fmt, fmtMatrix, transpose, matMultiply, determinant, inverse, rowReduce,
} from './matrixHelpers';

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────

/** Build augmented matrix [A | b] */
function augment(a, b) {
  return a.map((row, i) => [...row, ...(b[i] || [0])]);
}

/** Extract solution vector from RREF augmented matrix, if unique */
function extractSolution(rref, pivotCols, numVars) {
  const rows = rref.length;
  const augCols = rref[0].length;

  // Check for inconsistency: a row like [0 0 ... 0 | c] where c ≠ 0
  for (let r = 0; r < rows; r++) {
    const allZeroLeft = rref[r].slice(0, numVars).every(v => Math.abs(v) < 1e-10);
    const rhsVal = rref[r][augCols - 1];
    if (allZeroLeft && Math.abs(rhsVal) > 1e-10) {
      return { type: 'inconsistent' };
    }
  }

  // Check for unique vs infinite solutions
  if (pivotCols.length < numVars) {
    return { type: 'infinite', rank: pivotCols.length, numVars };
  }

  // Unique solution: read from RHS column
  const solution = [];
  for (let i = 0; i < numVars; i++) {
    solution.push(rref[i][augCols - 1]);
  }
  return { type: 'unique', solution };
}

// ─────────────────────────────────────────────────────────────
// Operations
// ─────────────────────────────────────────────────────────────

function calcSolveSystem(mats, metas) {
  const a = mats[0];
  const b = mats[1];
  const augmented = augment(a, b);
  const { rref, pivotCols } = rowReduce(augmented);
  const numVars = a[0].length;
  const sol = extractSolution(rref, pivotCols, numVars);

  if (sol.type === 'inconsistent') {
    return { type: 'error', value: 'System is inconsistent \u2014 no solution exists' };
  }

  if (sol.type === 'infinite') {
    return {
      type: 'boolean',
      value: false,
      detail: `System has infinitely many solutions (rank ${sol.rank} < ${sol.numVars} variables). See Gauss-Jordan for the RREF.`,
      label: 'Solve Ax = b',
    };
  }

  return {
    type: 'vector',
    value: sol.solution.map(fmt),
    label: 'x = solution of Ax = b',
    variables: sol.solution.map((_, i) => `x${i + 1}`),
  };
}

function calcGaussianElim(mats) {
  const a = mats[0];
  const b = mats[1];
  const augmented = augment(a, b);

  // Row echelon form (not reduced — only eliminate below pivots)
  const m = augmented.map(r => [...r]);
  const rows = m.length;
  const cols = m[0].length;
  let pivotRow = 0;

  for (let col = 0; col < cols - 1 && pivotRow < rows; col++) {
    let maxRow = pivotRow;
    for (let r = pivotRow + 1; r < rows; r++) {
      if (Math.abs(m[r][col]) > Math.abs(m[maxRow][col])) maxRow = r;
    }
    if (Math.abs(m[maxRow][col]) < 1e-10) continue;
    [m[pivotRow], m[maxRow]] = [m[maxRow], m[pivotRow]];

    for (let r = pivotRow + 1; r < rows; r++) {
      const factor = m[r][col] / m[pivotRow][col];
      for (let j = col; j < cols; j++) {
        m[r][j] -= factor * m[pivotRow][j];
      }
    }
    pivotRow++;
  }

  return {
    type: 'matrix',
    value: fmtMatrix(m),
    label: 'Row Echelon Form [A | b]',
    rows: m.length,
    cols: m[0].length,
  };
}

function calcGaussJordan(mats) {
  const a = mats[0];
  const b = mats[1];
  const augmented = augment(a, b);
  const { rref } = rowReduce(augmented);

  return {
    type: 'matrix',
    value: fmtMatrix(rref),
    label: 'Reduced Row Echelon Form [A | b]',
    rows: rref.length,
    cols: rref[0].length,
  };
}

function calcCramersRule(mats) {
  const a = mats[0];
  const b = mats[1];

  if (a.length !== a[0].length) {
    return { type: 'error', value: "Cramer's Rule requires a square coefficient matrix" };
  }

  const n = a.length;
  const detA = determinant(a);
  if (Math.abs(detA) < 1e-10) {
    return { type: 'error', value: "Cramer's Rule requires det(A) \u2260 0. The matrix is singular." };
  }

  // Extract b as column vector
  const bCol = b.map(row => row[0]);

  const solution = [];
  const details = [`det(A) = ${fmt(detA)}`];

  for (let i = 0; i < n; i++) {
    // Replace column i of A with b
    const modified = a.map((row, r) => {
      const newRow = [...row];
      newRow[i] = bCol[r];
      return newRow;
    });
    const detMod = determinant(modified);
    const xi = detMod / detA;
    solution.push(xi);
    details.push(`x${i + 1} = det(A${i + 1}) / det(A) = ${fmt(detMod)} / ${fmt(detA)} = ${fmt(xi)}`);
  }

  return {
    type: 'vector',
    value: solution.map(fmt),
    label: "Cramer's Rule: x",
    variables: solution.map((_, i) => `x${i + 1}`),
    detail: details.join('\n'),
  };
}

function calcMatrixEquation(mats) {
  const a = mats[0];
  const b = mats[1];

  if (a.length !== a[0].length) {
    return { type: 'error', value: 'Matrix equation AX = B requires A to be square' };
  }

  const det = determinant(a);
  if (Math.abs(det) < 1e-10) {
    return { type: 'error', value: 'A is singular (det = 0), cannot compute A\u207B\u00B9B' };
  }

  const inv = inverse(a);
  if (!inv) {
    return { type: 'error', value: 'Failed to compute inverse of A' };
  }

  const x = matMultiply(inv, b);
  return {
    type: 'matrix',
    value: fmtMatrix(x),
    label: 'X = A\u207B\u00B9B',
    rows: x.length,
    cols: x[0].length,
  };
}

function calcLeastSquares(mats) {
  const a = mats[0];
  const b = mats[1];

  // x = (AᵀA)⁻¹ Aᵀb
  const at = transpose(a);
  const ata = matMultiply(at, a);

  // Check if AᵀA is invertible
  if (ata.length !== ata[0].length) {
    return { type: 'error', value: 'A\u1D40A is not square \u2014 unexpected error' };
  }

  const det = determinant(ata);
  if (Math.abs(det) < 1e-10) {
    return { type: 'error', value: 'A\u1D40A is singular \u2014 columns of A are linearly dependent' };
  }

  const ataInv = inverse(ata);
  if (!ataInv) {
    return { type: 'error', value: 'Failed to invert A\u1D40A' };
  }

  const atb = matMultiply(at, b);
  const x = matMultiply(ataInv, atb);

  // Compute residual ||Ax - b||
  const ax = matMultiply(a, x);
  let residualSq = 0;
  for (let i = 0; i < ax.length; i++) {
    const diff = ax[i][0] - b[i][0];
    residualSq += diff * diff;
  }

  return {
    type: 'vector',
    value: x.map(row => fmt(row[0])),
    label: 'x\u0302 = (A\u1D40A)\u207B\u00B9A\u1D40b  (least squares)',
    variables: x.map((_, i) => `x${i + 1}`),
    detail: `Residual ||Ax\u0302 \u2212 b|| = ${fmt(Math.sqrt(residualSq))}`,
  };
}

// ─────────────────────────────────────────────────────────────
// Export map
// ─────────────────────────────────────────────────────────────

export const systemOps = {
  'Solve Linear System': calcSolveSystem,
  'Gaussian Elimination': calcGaussianElim,
  'Gauss-Jordan': calcGaussJordan,
  "Cramer's Rule": calcCramersRule,
  'Matrix Equation AX=B': calcMatrixEquation,
  'Least Squares Solution': calcLeastSquares,
};