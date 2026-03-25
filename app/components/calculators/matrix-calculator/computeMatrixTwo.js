// /**
//  * computeMatrixTwo.js
//  *
//  * Two matrix operations.
//  * Implemented: Addition, Subtraction, Multiplication, Element-wise Multiplication,
//  *              Kronecker Product, Commutator, Anti-commutator
//  */

// import { fmt, fmtMatrix, matMultiply } from './computeMatrix';

// // ─────────────────────────────────────────────────────────────
// // Operations
// // ─────────────────────────────────────────────────────────────

// function calcAddition(a, b, metaA, metaB) {
//   if (metaA.rows !== metaB.rows || metaA.cols !== metaB.cols) {
//     return { type: 'error', value: 'Matrices must have the same dimensions for addition' };
//   }
//   const result = a.map((row, i) => row.map((val, j) => val + b[i][j]));
//   return {
//     type: 'matrix',
//     value: fmtMatrix(result),
//     label: 'A + B',
//     rows: result.length,
//     cols: result[0].length,
//   };
// }

// function calcSubtraction(a, b, metaA, metaB) {
//   if (metaA.rows !== metaB.rows || metaA.cols !== metaB.cols) {
//     return { type: 'error', value: 'Matrices must have the same dimensions for subtraction' };
//   }
//   const result = a.map((row, i) => row.map((val, j) => val - b[i][j]));
//   return {
//     type: 'matrix',
//     value: fmtMatrix(result),
//     label: 'A \u2212 B',
//     rows: result.length,
//     cols: result[0].length,
//   };
// }

// function calcMultiplication(a, b, metaA, metaB) {
//   if (metaA.cols !== metaB.rows) {
//     return { type: 'error', value: `Cannot multiply: A is ${metaA.rows}\u00D7${metaA.cols}, B is ${metaB.rows}\u00D7${metaB.cols}. Columns of A must equal rows of B.` };
//   }
//   const result = matMultiply(a, b);
//   return {
//     type: 'matrix',
//     value: fmtMatrix(result),
//     label: 'AB',
//     rows: result.length,
//     cols: result[0].length,
//   };
// }

// function calcElementWise(a, b, metaA, metaB) {
//   if (metaA.rows !== metaB.rows || metaA.cols !== metaB.cols) {
//     return { type: 'error', value: 'Matrices must have the same dimensions for element-wise multiplication' };
//   }
//   const result = a.map((row, i) => row.map((val, j) => val * b[i][j]));
//   return {
//     type: 'matrix',
//     value: fmtMatrix(result),
//     label: 'A \u2299 B (Hadamard)',
//     rows: result.length,
//     cols: result[0].length,
//   };
// }

// function calcKronecker(a, b) {
//   const rA = a.length;
//   const cA = a[0].length;
//   const rB = b.length;
//   const cB = b[0].length;
//   const result = [];

//   for (let i = 0; i < rA; i++) {
//     for (let bi = 0; bi < rB; bi++) {
//       const row = [];
//       for (let j = 0; j < cA; j++) {
//         for (let bj = 0; bj < cB; bj++) {
//           row.push(a[i][j] * b[bi][bj]);
//         }
//       }
//       result.push(row);
//     }
//   }

//   return {
//     type: 'matrix',
//     value: fmtMatrix(result),
//     label: `A \u2297 B (${result.length}\u00D7${result[0].length})`,
//     rows: result.length,
//     cols: result[0].length,
//   };
// }

// function calcCommutator(a, b, metaA, metaB) {
//   if (metaA.rows !== metaA.cols || metaB.rows !== metaB.cols) {
//     return { type: 'error', value: 'Commutator requires both matrices to be square' };
//   }
//   if (metaA.rows !== metaB.rows) {
//     return { type: 'error', value: 'Matrices must be the same size for commutator' };
//   }
//   const ab = matMultiply(a, b);
//   const ba = matMultiply(b, a);
//   const result = ab.map((row, i) => row.map((val, j) => val - ba[i][j]));
//   return {
//     type: 'matrix',
//     value: fmtMatrix(result),
//     label: '[A, B] = AB \u2212 BA',
//     rows: result.length,
//     cols: result[0].length,
//   };
// }

// function calcAntiCommutator(a, b, metaA, metaB) {
//   if (metaA.rows !== metaA.cols || metaB.rows !== metaB.cols) {
//     return { type: 'error', value: 'Anti-commutator requires both matrices to be square' };
//   }
//   if (metaA.rows !== metaB.rows) {
//     return { type: 'error', value: 'Matrices must be the same size for anti-commutator' };
//   }
//   const ab = matMultiply(a, b);
//   const ba = matMultiply(b, a);
//   const result = ab.map((row, i) => row.map((val, j) => val + ba[i][j]));
//   return {
//     type: 'matrix',
//     value: fmtMatrix(result),
//     label: '{A, B} = AB + BA',
//     rows: result.length,
//     cols: result[0].length,
//   };
// }

// // ─────────────────────────────────────────────────────────────
// // Export map
// // ─────────────────────────────────────────────────────────────

// export const twoOps = {
//   'Addition': calcAddition,
//   'Subtraction': calcSubtraction,
//   'Multiplication': calcMultiplication,
//   'Element-wise Multiplication': calcElementWise,
//   'Kronecker Product': calcKronecker,
//   'Commutator': calcCommutator,
//   'Anti-commutator': calcAntiCommutator,
// };


/**
 * computeMatrixTwo.js
 *
 * Two matrix operations.
 * Implemented: Addition, Subtraction, Multiplication, Element-wise Multiplication,
 *              Kronecker Product, Commutator, Anti-commutator
 */

import { fmt, fmtMatrix, matMultiply } from './matrixHelpers';

// ─────────────────────────────────────────────────────────────
// Operations
// ─────────────────────────────────────────────────────────────

function calcAddition(a, b, metaA, metaB) {
  if (metaA.rows !== metaB.rows || metaA.cols !== metaB.cols) {
    return { type: 'error', value: 'Matrices must have the same dimensions for addition' };
  }
  const result = a.map((row, i) => row.map((val, j) => val + b[i][j]));
  return {
    type: 'matrix',
    value: fmtMatrix(result),
    label: 'A + B',
    rows: result.length,
    cols: result[0].length,
  };
}

function calcSubtraction(a, b, metaA, metaB) {
  if (metaA.rows !== metaB.rows || metaA.cols !== metaB.cols) {
    return { type: 'error', value: 'Matrices must have the same dimensions for subtraction' };
  }
  const result = a.map((row, i) => row.map((val, j) => val - b[i][j]));
  return {
    type: 'matrix',
    value: fmtMatrix(result),
    label: 'A \u2212 B',
    rows: result.length,
    cols: result[0].length,
  };
}

function calcMultiplication(a, b, metaA, metaB) {
  if (metaA.cols !== metaB.rows) {
    return { type: 'error', value: `Cannot multiply: A is ${metaA.rows}\u00D7${metaA.cols}, B is ${metaB.rows}\u00D7${metaB.cols}. Columns of A must equal rows of B.` };
  }
  const result = matMultiply(a, b);
  return {
    type: 'matrix',
    value: fmtMatrix(result),
    label: 'AB',
    rows: result.length,
    cols: result[0].length,
  };
}

function calcElementWise(a, b, metaA, metaB) {
  if (metaA.rows !== metaB.rows || metaA.cols !== metaB.cols) {
    return { type: 'error', value: 'Matrices must have the same dimensions for element-wise multiplication' };
  }
  const result = a.map((row, i) => row.map((val, j) => val * b[i][j]));
  return {
    type: 'matrix',
    value: fmtMatrix(result),
    label: 'A \u2299 B (Hadamard)',
    rows: result.length,
    cols: result[0].length,
  };
}

function calcKronecker(a, b) {
  const rA = a.length;
  const cA = a[0].length;
  const rB = b.length;
  const cB = b[0].length;
  const result = [];

  for (let i = 0; i < rA; i++) {
    for (let bi = 0; bi < rB; bi++) {
      const row = [];
      for (let j = 0; j < cA; j++) {
        for (let bj = 0; bj < cB; bj++) {
          row.push(a[i][j] * b[bi][bj]);
        }
      }
      result.push(row);
    }
  }

  return {
    type: 'matrix',
    value: fmtMatrix(result),
    label: `A \u2297 B (${result.length}\u00D7${result[0].length})`,
    rows: result.length,
    cols: result[0].length,
  };
}

function calcCommutator(a, b, metaA, metaB) {
  if (metaA.rows !== metaA.cols || metaB.rows !== metaB.cols) {
    return { type: 'error', value: 'Commutator requires both matrices to be square' };
  }
  if (metaA.rows !== metaB.rows) {
    return { type: 'error', value: 'Matrices must be the same size for commutator' };
  }
  const ab = matMultiply(a, b);
  const ba = matMultiply(b, a);
  const result = ab.map((row, i) => row.map((val, j) => val - ba[i][j]));
  return {
    type: 'matrix',
    value: fmtMatrix(result),
    label: '[A, B] = AB \u2212 BA',
    rows: result.length,
    cols: result[0].length,
  };
}

function calcAntiCommutator(a, b, metaA, metaB) {
  if (metaA.rows !== metaA.cols || metaB.rows !== metaB.cols) {
    return { type: 'error', value: 'Anti-commutator requires both matrices to be square' };
  }
  if (metaA.rows !== metaB.rows) {
    return { type: 'error', value: 'Matrices must be the same size for anti-commutator' };
  }
  const ab = matMultiply(a, b);
  const ba = matMultiply(b, a);
  const result = ab.map((row, i) => row.map((val, j) => val + ba[i][j]));
  return {
    type: 'matrix',
    value: fmtMatrix(result),
    label: '{A, B} = AB + BA',
    rows: result.length,
    cols: result[0].length,
  };
}

// ─────────────────────────────────────────────────────────────
// Export map
// ─────────────────────────────────────────────────────────────

export const twoOps = {
  'Addition': calcAddition,
  'Subtraction': calcSubtraction,
  'Multiplication': calcMultiplication,
  'Element-wise Multiplication': calcElementWise,
  'Kronecker Product': calcKronecker,
  'Commutator': calcCommutator,
  'Anti-commutator': calcAntiCommutator,
};