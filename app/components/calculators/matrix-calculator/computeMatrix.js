// /**
//  * computeMatrix.js
//  *
//  * Main dispatcher for matrix operations.
//  * Converts flat data arrays to 2D matrices, routes to category files.
//  *
//  * ── SKIPPED OPERATIONS (not yet implemented) ──────────────────
//  *
//  * Single:
//  *   - Eigenvalues          — requires QR algorithm (iterative)
//  *   - Eigenvectors         — depends on eigenvalues
//  *   - Characteristic Polynomial — requires Faddeev–LeVerrier or similar
//  *   - QR Decomposition     — Gram-Schmidt variant, numerical stability concerns
//  *   - Singular Value Decomposition — depends on eigenvalue decomposition of AᵀA
//  *
//  * Two:
//  *   - Matrix Power         — ambiguous semantics in two-matrix context;
//  *                            use Matrix Power (Scalar) instead
//  *
//  * Scalar:
//  *   - Exponential          — Taylor series truncation, convergence issues
//  *   - Logarithm            — inverse of matrix exponential, restrictive conditions
//  *
//  * These operations are not rendered in the UI.
//  * See README.md in the component folder for details.
//  * ──────────────────────────────────────────────────────────────
//  */

// import { singleOps } from './computeMatrixSingle';
// import { twoOps } from './computeMatrixTwo';
// import { scalarOps } from './computeMatrixScalar';
// import { systemOps } from './computeMatrixSystem';

// // ─────────────────────────────────────────────────────────────
// // Shared helpers (exported for use by category files)
// // ─────────────────────────────────────────────────────────────

// export function toMatrix(data, rows, cols) {
//   const m = [];
//   for (let r = 0; r < rows; r++) {
//     m.push(data.slice(r * cols, r * cols + cols));
//   }
//   return m;
// }

// export function fmt(n) {
//   if (n === undefined || n === null || isNaN(n)) return 0;
//   if (Number.isInteger(n)) return n;
//   return parseFloat(n.toFixed(8));
// }

// export function fmtMatrix(m) {
//   return m.map(row => row.map(fmt));
// }

// export function transpose(m) {
//   const rows = m.length;
//   const cols = m[0].length;
//   const t = [];
//   for (let c = 0; c < cols; c++) {
//     const row = [];
//     for (let r = 0; r < rows; r++) {
//       row.push(m[r][c]);
//     }
//     t.push(row);
//   }
//   return t;
// }

// export function matMultiply(a, b) {
//   const rows = a.length;
//   const inner = a[0].length;
//   const cols = b[0].length;
//   const result = Array.from({ length: rows }, () => new Array(cols).fill(0));
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       let sum = 0;
//       for (let k = 0; k < inner; k++) {
//         sum += a[i][k] * b[k][j];
//       }
//       result[i][j] = sum;
//     }
//   }
//   return result;
// }

// export function determinant(m) {
//   const n = m.length;
//   if (n === 1) return m[0][0];
//   if (n === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];

//   // Gaussian elimination approach for n >= 3
//   const copy = m.map(r => [...r]);
//   let det = 1;
//   let swaps = 0;

//   for (let col = 0; col < n; col++) {
//     let maxRow = col;
//     for (let r = col + 1; r < n; r++) {
//       if (Math.abs(copy[r][col]) > Math.abs(copy[maxRow][col])) maxRow = r;
//     }
//     if (Math.abs(copy[maxRow][col]) < 1e-10) return 0;
//     if (maxRow !== col) {
//       [copy[col], copy[maxRow]] = [copy[maxRow], copy[col]];
//       swaps++;
//     }
//     det *= copy[col][col];
//     for (let r = col + 1; r < n; r++) {
//       const factor = copy[r][col] / copy[col][col];
//       for (let j = col + 1; j < n; j++) {
//         copy[r][j] -= factor * copy[col][j];
//       }
//     }
//   }

//   return swaps % 2 === 0 ? det : -det;
// }

// export function inverse(m) {
//   const n = m.length;
//   // Build augmented [A | I]
//   const aug = m.map((row, i) => {
//     const ident = new Array(n).fill(0);
//     ident[i] = 1;
//     return [...row, ...ident];
//   });

//   for (let col = 0; col < n; col++) {
//     let maxRow = col;
//     for (let r = col + 1; r < n; r++) {
//       if (Math.abs(aug[r][col]) > Math.abs(aug[maxRow][col])) maxRow = r;
//     }
//     if (Math.abs(aug[maxRow][col]) < 1e-10) return null; // singular
//     if (maxRow !== col) {
//       [aug[col], aug[maxRow]] = [aug[maxRow], aug[col]];
//     }

//     const scale = aug[col][col];
//     for (let j = 0; j < 2 * n; j++) aug[col][j] /= scale;

//     for (let r = 0; r < n; r++) {
//       if (r === col) continue;
//       const factor = aug[r][col];
//       for (let j = 0; j < 2 * n; j++) aug[r][j] -= factor * aug[col][j];
//     }
//   }

//   return aug.map(row => row.slice(n));
// }

// export function rowReduce(matrix) {
//   const m = matrix.map(r => [...r]);
//   const rows = m.length;
//   const cols = m[0].length;
//   const pivotCols = [];
//   let pivotRow = 0;

//   for (let col = 0; col < cols && pivotRow < rows; col++) {
//     let maxRow = pivotRow;
//     for (let r = pivotRow + 1; r < rows; r++) {
//       if (Math.abs(m[r][col]) > Math.abs(m[maxRow][col])) maxRow = r;
//     }
//     if (Math.abs(m[maxRow][col]) < 1e-10) continue;

//     [m[pivotRow], m[maxRow]] = [m[maxRow], m[pivotRow]];

//     const scale = m[pivotRow][col];
//     for (let j = col; j < cols; j++) m[pivotRow][j] /= scale;

//     for (let r = 0; r < rows; r++) {
//       if (r === pivotRow) continue;
//       const factor = m[r][col];
//       for (let j = col; j < cols; j++) m[r][j] -= factor * m[pivotRow][j];
//     }

//     pivotCols.push(col);
//     pivotRow++;
//   }

//   return { rref: m, pivotCols, rank: pivotCols.length };
// }

// export function identityMatrix(n) {
//   return Array.from({ length: n }, (_, i) => {
//     const row = new Array(n).fill(0);
//     row[i] = 1;
//     return row;
//   });
// }

// // ─────────────────────────────────────────────────────────────
// // Dispatcher
// // ─────────────────────────────────────────────────────────────

// /**
//  * @param {Object} params
//  * @param {string}   params.operation
//  * @param {string}   params.operationType  — 'single' | 'two' | 'scalar' | 'system'
//  * @param {Object}   params.dimensions     — { rows, cols }
//  * @param {Array}    params.matrices       — [{ rows, cols, data: number[] }, ...]
//  * @param {number|null} params.scalarValue
//  * @returns {{ type: string, value: any, label?: string, rows?: number, cols?: number }}
//  */
// export default function computeMatrix({ operation, operationType, matrices, scalarValue }) {
//   try {
//     // Convert flat arrays to 2D matrices
//     const mats = matrices.map(m => toMatrix(m.data, m.rows, m.cols));

//     if (operationType === 'single') {
//       const fn = singleOps[operation];
//       if (!fn) return { type: 'error', value: `Unknown operation: ${operation}` };
//       return fn(mats[0], matrices[0]);
//     }

//     if (operationType === 'two') {
//       const fn = twoOps[operation];
//       if (!fn) return { type: 'error', value: `Unknown operation: ${operation}` };
//       return fn(mats[0], mats[1], matrices[0], matrices[1]);
//     }

//     if (operationType === 'scalar') {
//       const fn = scalarOps[operation];
//       if (!fn) return { type: 'error', value: `Unknown operation: ${operation}` };
//       return fn(mats[0], scalarValue, matrices[0]);
//     }

//     if (operationType === 'system') {
//       const fn = systemOps[operation];
//       if (!fn) return { type: 'error', value: `Unknown operation: ${operation}` };
//       return fn(mats, matrices);
//     }

//     return { type: 'error', value: `Unknown operation type: ${operationType}` };
//   } catch (err) {
//     return { type: 'error', value: `Calculation error: ${err.message}` };
//   }
// }


/**
 * computeMatrix.js
 *
 * Main dispatcher for matrix operations.
 * Converts flat data arrays to 2D matrices, routes to category files.
 *
 * ── SKIPPED OPERATIONS (not yet implemented) ──────────────────
 *
 * Single:
 *   - Eigenvalues          — requires QR algorithm (iterative)
 *   - Eigenvectors         — depends on eigenvalues
 *   - Characteristic Polynomial — requires Faddeev–LeVerrier or similar
 *   - QR Decomposition     — Gram-Schmidt variant, numerical stability concerns
 *   - Singular Value Decomposition — depends on eigenvalue decomposition of AᵀA
 *
 * Two:
 *   - Matrix Power         — ambiguous semantics in two-matrix context;
 *                            use Matrix Power (Scalar) instead
 *
 * Scalar:
 *   - Exponential          — Taylor series truncation, convergence issues
 *   - Logarithm            — inverse of matrix exponential, restrictive conditions
 *
 * These operations are not rendered in the UI.
 * See README.md in the component folder for details.
 * ──────────────────────────────────────────────────────────────
 */

import { toMatrix } from './matrixHelpers';
import { singleOps } from './computeMatrixSingle';
import { twoOps } from './computeMatrixTwo';
import { scalarOps } from './computeMatrixScalar';
import { systemOps } from './computeMatrixSystem';

/**
 * @param {Object} params
 * @param {string}   params.operation
 * @param {string}   params.operationType  — 'single' | 'two' | 'scalar' | 'system'
 * @param {Object}   params.dimensions     — { rows, cols }
 * @param {Array}    params.matrices       — [{ rows, cols, data: number[] }, ...]
 * @param {number|null} params.scalarValue
 * @returns {{ type: string, value: any, label?: string, rows?: number, cols?: number }}
 */
export default function computeMatrix({ operation, operationType, matrices, scalarValue }) {
  try {
    const mats = matrices.map(m => toMatrix(m.data, m.rows, m.cols));

    if (operationType === 'single') {
      const fn = singleOps[operation];
      if (!fn) return { type: 'error', value: `Unknown operation: ${operation}` };
      return fn(mats[0], matrices[0]);
    }

    if (operationType === 'two') {
      const fn = twoOps[operation];
      if (!fn) return { type: 'error', value: `Unknown operation: ${operation}` };
      return fn(mats[0], mats[1], matrices[0], matrices[1]);
    }

    if (operationType === 'scalar') {
      const fn = scalarOps[operation];
      if (!fn) return { type: 'error', value: `Unknown operation: ${operation}` };
      return fn(mats[0], scalarValue, matrices[0]);
    }

    if (operationType === 'system') {
      const fn = systemOps[operation];
      if (!fn) return { type: 'error', value: `Unknown operation: ${operation}` };
      return fn(mats, matrices);
    }

    return { type: 'error', value: `Unknown operation type: ${operationType}` };
  } catch (err) {
    return { type: 'error', value: `Calculation error: ${err.message}` };
  }
}