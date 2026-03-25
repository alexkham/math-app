// /**
//  * computeMatrixScalar.js
//  *
//  * Scalar-matrix operations.
//  * Implemented: Scalar Multiplication, Scalar Addition, Scalar Subtraction,
//  *              Matrix Power (Scalar)
//  */

// import { fmt, fmtMatrix, matMultiply, identityMatrix } from './computeMatrix';

// // ─────────────────────────────────────────────────────────────
// // Operations
// // ─────────────────────────────────────────────────────────────

// function calcScalarMultiply(m, scalar) {
//   const result = m.map(row => row.map(val => val * scalar));
//   return {
//     type: 'matrix',
//     value: fmtMatrix(result),
//     label: `${fmt(scalar)} \u00B7 A`,
//     rows: result.length,
//     cols: result[0].length,
//   };
// }

// function calcScalarAdd(m, scalar) {
//   const result = m.map(row => row.map(val => val + scalar));
//   return {
//     type: 'matrix',
//     value: fmtMatrix(result),
//     label: `A + ${fmt(scalar)}`,
//     rows: result.length,
//     cols: result[0].length,
//   };
// }

// function calcScalarSubtract(m, scalar) {
//   const result = m.map(row => row.map(val => val - scalar));
//   return {
//     type: 'matrix',
//     value: fmtMatrix(result),
//     label: `A \u2212 ${fmt(scalar)}`,
//     rows: result.length,
//     cols: result[0].length,
//   };
// }

// function calcMatrixPower(m, scalar) {
//   if (m.length !== m[0].length) {
//     return { type: 'error', value: 'Matrix Power requires a square matrix' };
//   }

//   const n = Math.round(scalar);
//   if (n !== scalar || n < 0) {
//     return { type: 'error', value: 'Power must be a non-negative integer' };
//   }

//   const size = m.length;

//   if (n === 0) {
//     return {
//       type: 'matrix',
//       value: fmtMatrix(identityMatrix(size)),
//       label: 'A\u2070 = I',
//       rows: size,
//       cols: size,
//     };
//   }

//   if (n === 1) {
//     return {
//       type: 'matrix',
//       value: fmtMatrix(m),
//       label: 'A\u00B9 = A',
//       rows: size,
//       cols: size,
//     };
//   }

//   // Exponentiation by squaring
//   let result = identityMatrix(size);
//   let base = m.map(r => [...r]);
//   let power = n;

//   while (power > 0) {
//     if (power % 2 === 1) {
//       result = matMultiply(result, base);
//     }
//     base = matMultiply(base, base);
//     power = Math.floor(power / 2);
//   }

//   // Build superscript label
//   const superscripts = '\u2070\u00B9\u00B2\u00B3\u2074\u2075\u2076\u2077\u2078\u2079';
//   const supStr = String(n).split('').map(d => superscripts[parseInt(d)]).join('');

//   return {
//     type: 'matrix',
//     value: fmtMatrix(result),
//     label: `A${supStr}`,
//     rows: result.length,
//     cols: result[0].length,
//   };
// }

// // ─────────────────────────────────────────────────────────────
// // Export map
// // ─────────────────────────────────────────────────────────────

// export const scalarOps = {
//   'Scalar Multiplication': calcScalarMultiply,
//   'Scalar Addition': calcScalarAdd,
//   'Scalar Subtraction': calcScalarSubtract,
//   'Matrix Power (Scalar)': calcMatrixPower,
// };



/**
 * computeMatrixScalar.js
 *
 * Scalar-matrix operations.
 * Implemented: Scalar Multiplication, Scalar Addition, Scalar Subtraction,
 *              Matrix Power (Scalar)
 */

import { fmt, fmtMatrix, matMultiply, identityMatrix } from './matrixHelpers';

// ─────────────────────────────────────────────────────────────
// Operations
// ─────────────────────────────────────────────────────────────

function calcScalarMultiply(m, scalar) {
  const result = m.map(row => row.map(val => val * scalar));
  return {
    type: 'matrix',
    value: fmtMatrix(result),
    label: `${fmt(scalar)} \u00B7 A`,
    rows: result.length,
    cols: result[0].length,
  };
}

function calcScalarAdd(m, scalar) {
  const result = m.map(row => row.map(val => val + scalar));
  return {
    type: 'matrix',
    value: fmtMatrix(result),
    label: `A + ${fmt(scalar)}`,
    rows: result.length,
    cols: result[0].length,
  };
}

function calcScalarSubtract(m, scalar) {
  const result = m.map(row => row.map(val => val - scalar));
  return {
    type: 'matrix',
    value: fmtMatrix(result),
    label: `A \u2212 ${fmt(scalar)}`,
    rows: result.length,
    cols: result[0].length,
  };
}

function calcMatrixPower(m, scalar) {
  if (m.length !== m[0].length) {
    return { type: 'error', value: 'Matrix Power requires a square matrix' };
  }

  const n = Math.round(scalar);
  if (n !== scalar || n < 0) {
    return { type: 'error', value: 'Power must be a non-negative integer' };
  }

  const size = m.length;

  if (n === 0) {
    return {
      type: 'matrix',
      value: fmtMatrix(identityMatrix(size)),
      label: 'A\u2070 = I',
      rows: size,
      cols: size,
    };
  }

  if (n === 1) {
    return {
      type: 'matrix',
      value: fmtMatrix(m),
      label: 'A\u00B9 = A',
      rows: size,
      cols: size,
    };
  }

  // Exponentiation by squaring
  let result = identityMatrix(size);
  let base = m.map(r => [...r]);
  let power = n;

  while (power > 0) {
    if (power % 2 === 1) {
      result = matMultiply(result, base);
    }
    base = matMultiply(base, base);
    power = Math.floor(power / 2);
  }

  // Build superscript label
  const superscripts = '\u2070\u00B9\u00B2\u00B3\u2074\u2075\u2076\u2077\u2078\u2079';
  const supStr = String(n).split('').map(d => superscripts[parseInt(d)]).join('');

  return {
    type: 'matrix',
    value: fmtMatrix(result),
    label: `A${supStr}`,
    rows: result.length,
    cols: result[0].length,
  };
}

// ─────────────────────────────────────────────────────────────
// Export map
// ─────────────────────────────────────────────────────────────

export const scalarOps = {
  'Scalar Multiplication': calcScalarMultiply,
  'Scalar Addition': calcScalarAdd,
  'Scalar Subtraction': calcScalarSubtract,
  'Matrix Power (Scalar)': calcMatrixPower,
};