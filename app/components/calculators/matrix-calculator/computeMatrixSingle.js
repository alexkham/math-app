// /**
//  * computeMatrixSingle.js
//  *
//  * Single matrix operations.
//  * Implemented: Transpose, Determinant, Inverse, Trace, Rank, LU Decomposition
//  */

// import {
//   fmt, fmtMatrix, transpose, determinant, inverse, rowReduce,
// } from './computeMatrix';

// // ─────────────────────────────────────────────────────────────
// // Operations
// // ─────────────────────────────────────────────────────────────

// function calcTranspose(m) {
//   const result = transpose(m);
//   return {
//     type: 'matrix',
//     value: fmtMatrix(result),
//     label: 'A\u1D40',
//     rows: result.length,
//     cols: result[0].length,
//   };
// }

// function calcDeterminant(m) {
//   if (m.length !== m[0].length) {
//     return { type: 'error', value: 'Determinant requires a square matrix' };
//   }
//   const det = determinant(m);
//   return { type: 'scalar', value: fmt(det), label: 'det(A)' };
// }

// function calcInverse(m) {
//   if (m.length !== m[0].length) {
//     return { type: 'error', value: 'Inverse requires a square matrix' };
//   }
//   const det = determinant(m);
//   if (Math.abs(det) < 1e-10) {
//     return { type: 'error', value: 'Matrix is singular (det = 0), inverse does not exist' };
//   }
//   const inv = inverse(m);
//   if (!inv) {
//     return { type: 'error', value: 'Matrix is singular, inverse does not exist' };
//   }
//   return {
//     type: 'matrix',
//     value: fmtMatrix(inv),
//     label: 'A\u207B\u00B9',
//     rows: inv.length,
//     cols: inv[0].length,
//   };
// }

// function calcTrace(m) {
//   if (m.length !== m[0].length) {
//     return { type: 'error', value: 'Trace requires a square matrix' };
//   }
//   let tr = 0;
//   for (let i = 0; i < m.length; i++) {
//     tr += m[i][i];
//   }
//   return { type: 'scalar', value: fmt(tr), label: 'tr(A)' };
// }

// function calcRank(m) {
//   const { rank } = rowReduce(m);
//   return {
//     type: 'scalar',
//     value: rank,
//     label: `rank(A) — ${m.length}\u00D7${m[0].length} matrix`,
//   };
// }

// function calcLU(m) {
//   if (m.length !== m[0].length) {
//     return { type: 'error', value: 'LU Decomposition requires a square matrix' };
//   }
//   const n = m.length;
//   const L = Array.from({ length: n }, () => new Array(n).fill(0));
//   const U = m.map(r => [...r]);
//   const P = Array.from({ length: n }, (_, i) => {
//     const row = new Array(n).fill(0);
//     row[i] = 1;
//     return row;
//   });

//   // Initialize L diagonal
//   for (let i = 0; i < n; i++) L[i][i] = 1;

//   for (let col = 0; col < n; col++) {
//     // Partial pivoting
//     let maxRow = col;
//     for (let r = col + 1; r < n; r++) {
//       if (Math.abs(U[r][col]) > Math.abs(U[maxRow][col])) maxRow = r;
//     }
//     if (maxRow !== col) {
//       [U[col], U[maxRow]] = [U[maxRow], U[col]];
//       [P[col], P[maxRow]] = [P[maxRow], P[col]];
//       // Swap L entries below diagonal
//       for (let j = 0; j < col; j++) {
//         [L[col][j], L[maxRow][j]] = [L[maxRow][j], L[col][j]];
//       }
//     }

//     if (Math.abs(U[col][col]) < 1e-10) continue;

//     for (let r = col + 1; r < n; r++) {
//       const factor = U[r][col] / U[col][col];
//       L[r][col] = factor;
//       for (let j = col; j < n; j++) {
//         U[r][j] -= factor * U[col][j];
//       }
//     }
//   }

//   return {
//     type: 'decomposition',
//     value: {
//       P: { label: 'P (Permutation)', matrix: fmtMatrix(P) },
//       L: { label: 'L (Lower triangular)', matrix: fmtMatrix(L) },
//       U: { label: 'U (Upper triangular)', matrix: fmtMatrix(U) },
//     },
//     label: 'PA = LU',
//   };
// }

// // ─────────────────────────────────────────────────────────────
// // Export map
// // ─────────────────────────────────────────────────────────────

// export const singleOps = {
//   'Transpose': calcTranspose,
//   'Determinant': calcDeterminant,
//   'Inverse': calcInverse,
//   'Trace': calcTrace,
//   'Rank': calcRank,
//   'LU Decomposition': calcLU,
// };


/**
 * computeMatrixSingle.js
 *
 * Single matrix operations.
 * Implemented: Transpose, Determinant, Inverse, Trace, Rank, LU Decomposition
 */

import {
  fmt, fmtMatrix, transpose, determinant, inverse, rowReduce,
} from './matrixHelpers';

// ─────────────────────────────────────────────────────────────
// Operations
// ─────────────────────────────────────────────────────────────

function calcTranspose(m) {
  const result = transpose(m);
  return {
    type: 'matrix',
    value: fmtMatrix(result),
    label: 'A\u1D40',
    rows: result.length,
    cols: result[0].length,
  };
}

function calcDeterminant(m) {
  if (m.length !== m[0].length) {
    return { type: 'error', value: 'Determinant requires a square matrix' };
  }
  const det = determinant(m);
  return { type: 'scalar', value: fmt(det), label: 'det(A)' };
}

function calcInverse(m) {
  if (m.length !== m[0].length) {
    return { type: 'error', value: 'Inverse requires a square matrix' };
  }
  const det = determinant(m);
  if (Math.abs(det) < 1e-10) {
    return { type: 'error', value: 'Matrix is singular (det = 0), inverse does not exist' };
  }
  const inv = inverse(m);
  if (!inv) {
    return { type: 'error', value: 'Matrix is singular, inverse does not exist' };
  }
  return {
    type: 'matrix',
    value: fmtMatrix(inv),
    label: 'A\u207B\u00B9',
    rows: inv.length,
    cols: inv[0].length,
  };
}

function calcTrace(m) {
  if (m.length !== m[0].length) {
    return { type: 'error', value: 'Trace requires a square matrix' };
  }
  let tr = 0;
  for (let i = 0; i < m.length; i++) {
    tr += m[i][i];
  }
  return { type: 'scalar', value: fmt(tr), label: 'tr(A)' };
}

function calcRank(m) {
  const { rank } = rowReduce(m);
  return {
    type: 'scalar',
    value: rank,
    label: `rank(A) — ${m.length}\u00D7${m[0].length} matrix`,
  };
}

function calcLU(m) {
  if (m.length !== m[0].length) {
    return { type: 'error', value: 'LU Decomposition requires a square matrix' };
  }
  const n = m.length;
  const L = Array.from({ length: n }, () => new Array(n).fill(0));
  const U = m.map(r => [...r]);
  const P = Array.from({ length: n }, (_, i) => {
    const row = new Array(n).fill(0);
    row[i] = 1;
    return row;
  });

  // Initialize L diagonal
  for (let i = 0; i < n; i++) L[i][i] = 1;

  for (let col = 0; col < n; col++) {
    // Partial pivoting
    let maxRow = col;
    for (let r = col + 1; r < n; r++) {
      if (Math.abs(U[r][col]) > Math.abs(U[maxRow][col])) maxRow = r;
    }
    if (maxRow !== col) {
      [U[col], U[maxRow]] = [U[maxRow], U[col]];
      [P[col], P[maxRow]] = [P[maxRow], P[col]];
      // Swap L entries below diagonal
      for (let j = 0; j < col; j++) {
        [L[col][j], L[maxRow][j]] = [L[maxRow][j], L[col][j]];
      }
    }

    if (Math.abs(U[col][col]) < 1e-10) continue;

    for (let r = col + 1; r < n; r++) {
      const factor = U[r][col] / U[col][col];
      L[r][col] = factor;
      for (let j = col; j < n; j++) {
        U[r][j] -= factor * U[col][j];
      }
    }
  }

  return {
    type: 'decomposition',
    value: {
      P: { label: 'P (Permutation)', matrix: fmtMatrix(P) },
      L: { label: 'L (Lower triangular)', matrix: fmtMatrix(L) },
      U: { label: 'U (Upper triangular)', matrix: fmtMatrix(U) },
    },
    label: 'PA = LU',
  };
}

// ─────────────────────────────────────────────────────────────
// Export map
// ─────────────────────────────────────────────────────────────

export const singleOps = {
  'Transpose': calcTranspose,
  'Determinant': calcDeterminant,
  'Inverse': calcInverse,
  'Trace': calcTrace,
  'Rank': calcRank,
  'LU Decomposition': calcLU,
};