/**
 * matrixExplanations.js
 *
 * Two exports:
 *
 *   1. descriptions  — static theory text per category/operation.
 *      Can be overridden via component props (e.g. from getStaticProps).
 *      Structure: { [category]: { _default, [operation]: string } }
 *
 *   2. steps  — dynamic step-by-step breakdowns using real-time numbers.
 *      Always used from this file, never overridable.
 *      Structure: { [category]: { [operation]: (mats, result, extras?) => string[] } }
 *      Each function returns an array of step strings.
 */

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────

function fmt(n) {
  if (n === undefined || n === null || isNaN(n)) return '?';
  if (Number.isInteger(n)) return String(n);
  return parseFloat(n.toFixed(6)).toString();
}

function fmtRow(row) {
  return '[ ' + row.map(fmt).join(', ') + ' ]';
}

function fmtMat(m) {
  return m.map(fmtRow).join('\n');
}

function fmtMatCompact(m) {
  if (m.length <= 3 && m[0].length <= 3) {
    return '[ ' + m.map(row => row.map(fmt).join(', ')).join(' | ') + ' ]';
  }
  return `${m.length}\u00D7${m[0].length} matrix`;
}

function dot(a, b) {
  return a.reduce((s, v, i) => s + v * b[i], 0);
}

function mag(v) {
  return Math.sqrt(v.reduce((s, c) => s + c * c, 0));
}

// ─────────────────────────────────────────────────────────────
// 1. DESCRIPTIONS  (static — overridable via props)
// ─────────────────────────────────────────────────────────────

export const descriptions = {

  // ── Single ──
  single: {
    _default:
      'Single matrix operations work on one matrix at a time. Choose an operation to see a detailed explanation.',
    Transpose:
      'The transpose flips a matrix over its diagonal, turning rows into columns and vice versa: (A\u1D40)\u1D62\u2C7C = A\u2C7C\u1D62. If A is m\u00D7n, then A\u1D40 is n\u00D7m. Transposing twice returns the original matrix.',
    Determinant:
      'The determinant is a scalar value that encodes properties of a square matrix. It is zero if and only if the matrix is singular (non-invertible). Geometrically, |det(A)| gives the scale factor by which A transforms volumes.',
    Inverse:
      'The inverse A\u207B\u00B9 satisfies AA\u207B\u00B9 = A\u207B\u00B9A = I. It exists only for square matrices with non-zero determinant. Computing the inverse uses Gauss-Jordan elimination on the augmented matrix [A | I].',
    Trace:
      'The trace is the sum of the diagonal elements: tr(A) = \u03A3 a\u1D62\u1D62. It equals the sum of the eigenvalues and is invariant under similarity transformations. Defined only for square matrices.',
    Rank:
      'The rank is the number of linearly independent rows (equivalently, columns). Found by row reducing to echelon form and counting pivot positions. Rank tells you the dimension of the column space.',
    'LU Decomposition':
      'LU decomposition factors A into PA = LU where P is a permutation matrix, L is lower triangular with 1s on the diagonal, and U is upper triangular. Used for efficient solving of multiple systems with the same coefficient matrix.',
  },

  // ── Two ──
  two: {
    _default:
      'Two-matrix operations take a pair of matrices and produce a new matrix or scalar. Choose an operation to learn more.',
    Addition:
      'Matrix addition sums corresponding elements: (A+B)\u1D62\u2C7C = a\u1D62\u2C7C + b\u1D62\u2C7C. Both matrices must have identical dimensions. Addition is commutative (A+B = B+A) and associative.',
    Subtraction:
      'Matrix subtraction finds the difference of corresponding elements: (A\u2212B)\u1D62\u2C7C = a\u1D62\u2C7C \u2212 b\u1D62\u2C7C. Both matrices must have identical dimensions.',
    Multiplication:
      'Matrix multiplication AB requires columns of A to equal rows of B. The result has dimensions m\u00D7p for m\u00D7n and n\u00D7p matrices. Element (i,j) of AB is the dot product of row i of A with column j of B. Not commutative in general.',
    'Element-wise Multiplication':
      'The Hadamard product (A\u2299B) multiplies corresponding elements: (A\u2299B)\u1D62\u2C7C = a\u1D62\u2C7C \u00B7 b\u1D62\u2C7C. Both matrices must have identical dimensions. Unlike standard multiplication, it is commutative.',
    'Kronecker Product':
      'The Kronecker product A\u2297B creates a block matrix by replacing each element a\u1D62\u2C7C of A with the block a\u1D62\u2C7C\u00B7B. If A is m\u00D7n and B is p\u00D7q, the result is mp\u00D7nq.',
    Commutator:
      'The commutator [A,B] = AB \u2212 BA measures how much the order of multiplication matters. It is zero when A and B commute. Important in Lie algebra and quantum mechanics.',
    'Anti-commutator':
      'The anti-commutator {A,B} = AB + BA is the symmetric counterpart of the commutator. Used extensively in quantum mechanics, particularly for fermionic operators.',
  },

  // ── Scalar ──
  scalar: {
    _default:
      'Scalar operations combine a matrix with a single number. Choose an operation to see details.',
    'Scalar Multiplication':
      'Scalar multiplication multiplies every element of the matrix by the scalar: (cA)\u1D62\u2C7C = c \u00B7 a\u1D62\u2C7C. It scales the entire matrix uniformly. The determinant of cA equals c\u207F \u00B7 det(A) for an n\u00D7n matrix.',
    'Scalar Addition':
      'Scalar addition adds the scalar to every element of the matrix: (A + c)\u1D62\u2C7C = a\u1D62\u2C7C + c. This shifts every entry by the same amount.',
    'Scalar Subtraction':
      'Scalar subtraction subtracts the scalar from every element: (A \u2212 c)\u1D62\u2C7C = a\u1D62\u2C7C \u2212 c.',
    'Matrix Power (Scalar)':
      'Matrix power raises a square matrix to a non-negative integer exponent by repeated multiplication: A\u207F = A\u00B7A\u00B7\u2026\u00B7A (n times). A\u2070 = I (identity). Computed efficiently using exponentiation by squaring.',
  },

  // ── System ──
  system: {
    _default:
      'System operations solve or analyse systems of linear equations Ax = b. Choose an operation to see details.',
    'Solve Linear System':
      'Finds the vector x satisfying Ax = b. Uses Gauss-Jordan elimination on the augmented matrix [A|b]. Reports whether the system has a unique solution, infinitely many solutions, or no solution.',
    'Gaussian Elimination':
      'Reduces the augmented matrix [A|b] to row echelon form (REF) using elementary row operations: row swapping, row scaling, and row addition. The result is upper triangular with leading 1s.',
    'Gauss-Jordan':
      'Extends Gaussian elimination to reduced row echelon form (RREF). Every pivot is 1 and is the only non-zero entry in its column. The solution can be read directly from the final augmented matrix.',
    "Cramer's Rule":
      'Solves a system with a unique solution by computing x\u1D62 = det(A\u1D62) / det(A), where A\u1D62 is A with column i replaced by b. Requires A to be square and non-singular.',
    'Matrix Equation AX=B':
      'Solves AX = B for X by computing X = A\u207B\u00B9B. Requires A to be square and invertible (det(A) \u2260 0).',
    'Least Squares Solution':
      'Finds x\u0302 that minimizes ||Ax \u2212 b||\u00B2 using the normal equation: x\u0302 = (A\u1D40A)\u207B\u00B9A\u1D40b. Works for overdetermined systems (more equations than unknowns). Reports the residual norm.',
  },
};

// ─────────────────────────────────────────────────────────────
// 2. STEPS  (dynamic — always from this file, never overridable)
// ─────────────────────────────────────────────────────────────

export const steps = {

  // ── Single matrix steps ──
  single: {

    Transpose: (mats) => {
      const m = mats[0];
      const lines = [
        `Given A (${m.length}\u00D7${m[0].length}):`,
        fmtMat(m),
        '',
        `Swap rows and columns: (A\u1D40)\u1D62\u2C7C = A\u2C7C\u1D62`,
        '',
        `Result A\u1D40 (${m[0].length}\u00D7${m.length}):`,
      ];
      const t = [];
      for (let c = 0; c < m[0].length; c++) {
        const row = [];
        for (let r = 0; r < m.length; r++) row.push(m[r][c]);
        t.push(row);
      }
      lines.push(fmtMat(t));
      return lines;
    },

    Determinant: (mats) => {
      const m = mats[0];
      const n = m.length;
      const lines = [
        `Given A (${n}\u00D7${n}):`,
        fmtMat(m),
        '',
      ];
      if (n === 1) {
        lines.push(`det(A) = ${fmt(m[0][0])}`);
      } else if (n === 2) {
        lines.push(`det(A) = a\u2081\u2081\u00B7a\u2082\u2082 \u2212 a\u2081\u2082\u00B7a\u2082\u2081`);
        lines.push(`       = ${fmt(m[0][0])}\u00D7${fmt(m[1][1])} \u2212 ${fmt(m[0][1])}\u00D7${fmt(m[1][0])}`);
        lines.push(`       = ${fmt(m[0][0] * m[1][1])} \u2212 ${fmt(m[0][1] * m[1][0])}`);
        lines.push(`       = ${fmt(m[0][0] * m[1][1] - m[0][1] * m[1][0])}`);
      } else {
        lines.push(`Using Gaussian elimination with partial pivoting:`);
        lines.push(`Row reduce to upper triangular form.`);
        lines.push(`det = product of diagonal entries \u00D7 (\u22121)^swaps`);

        const copy = m.map(r => [...r]);
        let det = 1;
        let swaps = 0;
        for (let col = 0; col < n; col++) {
          let maxRow = col;
          for (let r = col + 1; r < n; r++) {
            if (Math.abs(copy[r][col]) > Math.abs(copy[maxRow][col])) maxRow = r;
          }
          if (maxRow !== col) {
            [copy[col], copy[maxRow]] = [copy[maxRow], copy[col]];
            swaps++;
            lines.push(`  Swap rows ${col + 1} and ${maxRow + 1}`);
          }
          if (Math.abs(copy[col][col]) < 1e-10) {
            lines.push(`  Pivot is zero at column ${col + 1} \u2192 det = 0`);
            return lines;
          }
          det *= copy[col][col];
          for (let r = col + 1; r < n; r++) {
            const factor = copy[r][col] / copy[col][col];
            for (let j = col + 1; j < n; j++) copy[r][j] -= factor * copy[col][j];
          }
        }
        lines.push(`Diagonal product: ${fmt(det)}`);
        lines.push(`Swaps: ${swaps} \u2192 sign = ${swaps % 2 === 0 ? '+' : '\u2212'}`);
        lines.push(`det(A) = ${fmt(swaps % 2 === 0 ? det : -det)}`);
      }
      return lines;
    },

    Inverse: (mats) => {
      const m = mats[0];
      const n = m.length;
      return [
        `Given A (${n}\u00D7${n}):`,
        fmtMat(m),
        '',
        `Method: Gauss-Jordan elimination on [A | I]`,
        `Build augmented matrix [A | I\u2099]`,
        `Row reduce left side to I`,
        `Right side becomes A\u207B\u00B9`,
        '',
        `Verify: AA\u207B\u00B9 should equal I`,
      ];
    },

    Trace: (mats) => {
      const m = mats[0];
      const n = m.length;
      const diag = [];
      for (let i = 0; i < n; i++) diag.push(m[i][i]);
      const terms = diag.map((d, i) => `a${i + 1}${i + 1} = ${fmt(d)}`);
      const sum = diag.reduce((s, v) => s + v, 0);
      return [
        `Given A (${n}\u00D7${n}):`,
        fmtMat(m),
        '',
        `Diagonal elements: ${terms.join(', ')}`,
        `tr(A) = ${diag.map(fmt).join(' + ')}`,
        `      = ${fmt(sum)}`,
      ];
    },

    Rank: (mats) => {
      const m = mats[0];
      return [
        `Given A (${m.length}\u00D7${m[0].length}):`,
        fmtMat(m),
        '',
        `Method: Row reduce to RREF and count pivot positions.`,
        `Each pivot corresponds to a linearly independent row/column.`,
      ];
    },

    'LU Decomposition': (mats) => {
      const m = mats[0];
      const n = m.length;
      return [
        `Given A (${n}\u00D7${n}):`,
        fmtMat(m),
        '',
        `Method: Gaussian elimination with partial pivoting.`,
        `Factor PA = LU where:`,
        `  P = permutation matrix (tracks row swaps)`,
        `  L = lower triangular (1s on diagonal, multipliers below)`,
        `  U = upper triangular (result of elimination)`,
        '',
        `For each column k:`,
        `  1. Find largest pivot in column k (rows k..n)`,
        `  2. Swap rows if needed (update P)`,
        `  3. Eliminate entries below pivot (store multipliers in L)`,
      ];
    },
  },

  // ── Two matrix steps ──
  two: {

    Addition: (mats) => {
      const [a, b] = mats;
      const result = a.map((row, i) => row.map((v, j) => v + b[i][j]));
      return [
        `Given A (${a.length}\u00D7${a[0].length}):`,
        fmtMat(a),
        '',
        `Given B (${b.length}\u00D7${b[0].length}):`,
        fmtMat(b),
        '',
        `(A+B)\u1D62\u2C7C = a\u1D62\u2C7C + b\u1D62\u2C7C for each element`,
        '',
        `Result:`,
        fmtMat(result),
      ];
    },

    Subtraction: (mats) => {
      const [a, b] = mats;
      const result = a.map((row, i) => row.map((v, j) => v - b[i][j]));
      return [
        `Given A:`,
        fmtMat(a),
        '',
        `Given B:`,
        fmtMat(b),
        '',
        `(A\u2212B)\u1D62\u2C7C = a\u1D62\u2C7C \u2212 b\u1D62\u2C7C for each element`,
        '',
        `Result:`,
        fmtMat(result),
      ];
    },

    Multiplication: (mats) => {
      const [a, b] = mats;
      const lines = [
        `Given A (${a.length}\u00D7${a[0].length}) and B (${b.length}\u00D7${b[0].length}):`,
        '',
        `Result is ${a.length}\u00D7${b[0].length}`,
        `(AB)\u1D62\u2C7C = \u03A3\u2096 a\u1D62\u2096 \u00B7 b\u2096\u2C7C`,
        '',
      ];
      // Show a few element calculations for small matrices
      if (a.length <= 3 && b[0].length <= 3) {
        for (let i = 0; i < a.length; i++) {
          for (let j = 0; j < b[0].length; j++) {
            const terms = a[i].map((v, k) => `${fmt(v)}\u00D7${fmt(b[k][j])}`).join(' + ');
            const val = a[i].reduce((s, v, k) => s + v * b[k][j], 0);
            lines.push(`  (${i + 1},${j + 1}): ${terms} = ${fmt(val)}`);
          }
        }
      } else {
        lines.push(`  (showing formula only for large matrices)`);
      }
      return lines;
    },

    'Element-wise Multiplication': (mats) => {
      const [a, b] = mats;
      return [
        `Given A and B (${a.length}\u00D7${a[0].length}):`,
        '',
        `Hadamard product: (A\u2299B)\u1D62\u2C7C = a\u1D62\u2C7C \u00B7 b\u1D62\u2C7C`,
        `Multiply each element of A by the corresponding element of B.`,
      ];
    },

    'Kronecker Product': (mats) => {
      const [a, b] = mats;
      return [
        `Given A (${a.length}\u00D7${a[0].length}) and B (${b.length}\u00D7${b[0].length}):`,
        '',
        `A\u2297B replaces each element a\u1D62\u2C7C with the block a\u1D62\u2C7C\u00B7B`,
        `Result size: ${a.length * b.length}\u00D7${a[0].length * b[0].length}`,
      ];
    },

    Commutator: (mats) => {
      const [a, b] = mats;
      return [
        `Given A and B (${a.length}\u00D7${a[0].length}):`,
        '',
        `[A, B] = AB \u2212 BA`,
        `Step 1: Compute AB`,
        `Step 2: Compute BA`,
        `Step 3: Subtract: AB \u2212 BA`,
        '',
        `If result is all zeros, A and B commute.`,
      ];
    },

    'Anti-commutator': (mats) => {
      const [a, b] = mats;
      return [
        `Given A and B (${a.length}\u00D7${a[0].length}):`,
        '',
        `{A, B} = AB + BA`,
        `Step 1: Compute AB`,
        `Step 2: Compute BA`,
        `Step 3: Add: AB + BA`,
      ];
    },
  },

  // ── Scalar steps ──
  scalar: {

    'Scalar Multiplication': (mats, result, extras) => {
      const m = mats[0];
      const c = extras?.scalarValue;
      return [
        `Given A (${m.length}\u00D7${m[0].length}) and scalar c = ${fmt(c)}:`,
        fmtMat(m),
        '',
        `(cA)\u1D62\u2C7C = ${fmt(c)} \u00D7 a\u1D62\u2C7C for each element`,
      ];
    },

    'Scalar Addition': (mats, result, extras) => {
      const m = mats[0];
      const c = extras?.scalarValue;
      return [
        `Given A (${m.length}\u00D7${m[0].length}) and scalar c = ${fmt(c)}:`,
        fmtMat(m),
        '',
        `(A + c)\u1D62\u2C7C = a\u1D62\u2C7C + ${fmt(c)} for each element`,
      ];
    },

    'Scalar Subtraction': (mats, result, extras) => {
      const m = mats[0];
      const c = extras?.scalarValue;
      return [
        `Given A (${m.length}\u00D7${m[0].length}) and scalar c = ${fmt(c)}:`,
        fmtMat(m),
        '',
        `(A \u2212 c)\u1D62\u2C7C = a\u1D62\u2C7C \u2212 ${fmt(c)} for each element`,
      ];
    },

    'Matrix Power (Scalar)': (mats, result, extras) => {
      const m = mats[0];
      const n = extras?.scalarValue;
      const p = Math.round(n);
      const lines = [
        `Given A (${m.length}\u00D7${m[0].length}) and power n = ${p}:`,
        fmtMat(m),
        '',
      ];
      if (p === 0) {
        lines.push(`A\u2070 = I (identity matrix)`);
      } else if (p === 1) {
        lines.push(`A\u00B9 = A (no change)`);
      } else {
        lines.push(`Method: Exponentiation by squaring`);
        lines.push(`A${p} = A multiplied by itself ${p} times`);
        lines.push(`Efficient: uses O(log n) multiplications instead of O(n)`);
      }
      return lines;
    },
  },

  // ── System steps ──
  system: {

    'Solve Linear System': (mats) => {
      const a = mats[0];
      const b = mats[1];
      return [
        `Given A (${a.length}\u00D7${a[0].length}):`,
        fmtMat(a),
        '',
        `Given b:`,
        fmtMat(b),
        '',
        `Method: Row reduce augmented matrix [A | b] to RREF`,
        `Check for:`,
        `  - Unique solution (rank = number of variables)`,
        `  - Infinite solutions (rank < variables, consistent)`,
        `  - No solution (inconsistent row: [0 0 ... 0 | c])`,
      ];
    },

    'Gaussian Elimination': (mats) => {
      const a = mats[0];
      const b = mats[1];
      return [
        `Given [A | b] (${a.length}\u00D7${a[0].length + 1}):`,
        '',
        `Method: Forward elimination only`,
        `For each column (left to right):`,
        `  1. Find largest absolute value in column (partial pivot)`,
        `  2. Swap rows if needed`,
        `  3. Eliminate all entries BELOW the pivot`,
        `Result: Row Echelon Form (upper triangular)`,
      ];
    },

    'Gauss-Jordan': (mats) => {
      const a = mats[0];
      return [
        `Given augmented matrix [A | b]:`,
        '',
        `Method: Full elimination (forward + backward)`,
        `For each column:`,
        `  1. Find pivot, swap rows`,
        `  2. Scale pivot row so pivot = 1`,
        `  3. Eliminate ALL other entries in column (above and below)`,
        `Result: Reduced Row Echelon Form (RREF)`,
        `Solution readable directly from rightmost column`,
      ];
    },

    "Cramer's Rule": (mats) => {
      const a = mats[0];
      const b = mats[1];
      const n = a.length;
      const lines = [
        `Given A (${n}\u00D7${n}) and b:`,
        fmtMat(a),
        '',
        `b = ${fmtRow(b.map(r => r[0]))}`,
        '',
        `Method: x\u1D62 = det(A\u1D62) / det(A)`,
        `where A\u1D62 = A with column i replaced by b`,
        '',
      ];
      for (let i = 0; i < n; i++) {
        lines.push(`  x${i + 1}: Replace column ${i + 1} of A with b, compute det`);
      }
      return lines;
    },

    'Matrix Equation AX=B': (mats) => {
      const a = mats[0];
      const b = mats[1];
      return [
        `Given A (${a.length}\u00D7${a[0].length}) and B (${b.length}\u00D7${b[0].length}):`,
        '',
        `Solve AX = B for X`,
        `Method: X = A\u207B\u00B9B`,
        `Step 1: Compute A\u207B\u00B9 (inverse of A)`,
        `Step 2: Multiply A\u207B\u00B9 \u00B7 B`,
        '',
        `Requires: A is square and det(A) \u2260 0`,
      ];
    },

    'Least Squares Solution': (mats) => {
      const a = mats[0];
      const b = mats[1];
      return [
        `Given A (${a.length}\u00D7${a[0].length}) and b (${b.length}\u00D71):`,
        '',
        `Minimize ||Ax \u2212 b||\u00B2`,
        `Normal equation: A\u1D40Ax\u0302 = A\u1D40b`,
        `Solution: x\u0302 = (A\u1D40A)\u207B\u00B9 A\u1D40b`,
        '',
        `Step 1: Compute A\u1D40 (transpose)`,
        `Step 2: Compute A\u1D40A (${a[0].length}\u00D7${a[0].length} matrix)`,
        `Step 3: Compute A\u1D40b (${a[0].length}\u00D71 vector)`,
        `Step 4: Solve (A\u1D40A)x\u0302 = A\u1D40b via inverse`,
        `Step 5: Compute residual ||Ax\u0302 \u2212 b||`,
      ];
    },
  },
};