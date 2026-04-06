/**
 * solveLinearSystem.js
 *
 * Solves systems of linear equations using various methods.
 * Each solver returns:
 *   {
 *     type:     'unique' | 'infinite' | 'none' | 'error',
 *     solution: number[] | null,
 *     steps:    string[],            // human-readable step log
 *     rankA:    number,
 *     rankAug:  number,
 *     detail:   string,
 *   }
 *
 * Input matrices use 2-D arrays: coeffs[row][col], constants[row].
 */

/* ── tiny helpers ──────────────────────────────────────────── */

function clone2D(m) {
  return m.map((r) => [...r]);
}

function fmtNum(v) {
  if (v === 0) return '0';
  if (Number.isInteger(v)) return String(v);
  return parseFloat(v.toFixed(6)).toString();
}

function fmtRow(row) {
  return '[' + row.map(fmtNum).join(', ') + ']';
}

function fmtAug(aug) {
  return aug.map((r) => '  ' + fmtRow(r)).join('\n');
}

/* Build augmented matrix from coeffs + constants */
function buildAug(coeffs, constants) {
  return coeffs.map((row, i) => [...row, constants[i]]);
}

/* ── rank via row-echelon ─────────────────────────────────── */

function computeRank(matrix) {
  const m = clone2D(matrix);
  const rows = m.length;
  const cols = m[0].length;
  let rank = 0;
  const eps = 1e-10;

  for (let col = 0; col < cols && rank < rows; col++) {
    let pivotRow = -1;
    let pivotVal = eps;
    for (let r = rank; r < rows; r++) {
      if (Math.abs(m[r][col]) > pivotVal) {
        pivotVal = Math.abs(m[r][col]);
        pivotRow = r;
      }
    }
    if (pivotRow === -1) continue;

    [m[rank], m[pivotRow]] = [m[pivotRow], m[rank]];
    const scale = m[rank][col];
    for (let c = col; c < cols; c++) m[rank][c] /= scale;
    for (let r = 0; r < rows; r++) {
      if (r === rank) continue;
      const f = m[r][col];
      for (let c = col; c < cols; c++) m[r][c] -= f * m[rank][c];
    }
    rank++;
  }
  return rank;
}

/* ── classify system ──────────────────────────────────────── */

function classify(coeffs, constants) {
  const n = coeffs.length;
  const vars = coeffs[0].length;
  const rankA = computeRank(coeffs);
  const aug = buildAug(coeffs, constants);
  const rankAug = computeRank(aug);

  if (rankA < rankAug) return { type: 'none', rankA, rankAug, vars };
  if (rankA < vars) return { type: 'infinite', rankA, rankAug, vars };
  return { type: 'unique', rankA, rankAug, vars };
}

/* ── Gaussian Elimination ─────────────────────────────────── */

function gaussianElimination(coeffs, constants) {
  const info = classify(coeffs, constants);
  const steps = [];
  const n = coeffs.length;
  const vars = coeffs[0].length;
  const aug = buildAug(coeffs, constants);
  const eps = 1e-10;

  steps.push('Augmented matrix [A|b]:');
  steps.push(fmtAug(aug));

  if (info.type !== 'unique') {
    return {
      ...info,
      solution: null,
      steps,
      detail:
        info.type === 'none'
          ? `Inconsistent system: rank(A) = ${info.rankA}, rank([A|b]) = ${info.rankAug}`
          : `Infinite solutions: rank(A) = ${info.rankA} < ${vars} variables`,
    };
  }

  // Forward elimination
  for (let col = 0; col < vars; col++) {
    // Partial pivoting
    let maxRow = col;
    for (let r = col + 1; r < n; r++) {
      if (Math.abs(aug[r][col]) > Math.abs(aug[maxRow][col])) maxRow = r;
    }
    if (maxRow !== col) {
      [aug[col], aug[maxRow]] = [aug[maxRow], aug[col]];
      steps.push('');
      steps.push(`Swap R\u2081\u208A${col} \u2194 R\u2081\u208A${maxRow}  (partial pivoting)`
        .replace(/\u2081\u208A(\d)/g, (_, d) => subscript(+d + 1)));
    }

    for (let r = col + 1; r < n; r++) {
      if (Math.abs(aug[r][col]) < eps) continue;
      const factor = aug[r][col] / aug[col][col];
      steps.push('');
      steps.push(`R${subscript(r + 1)} \u2190 R${subscript(r + 1)} - (${fmtNum(factor)})R${subscript(col + 1)}`);
      for (let c = col; c <= vars; c++) {
        aug[r][c] -= factor * aug[col][c];
      }
      steps.push(fmtAug(aug));
    }
  }

  // Back-substitution
  const solution = new Array(vars).fill(0);
  steps.push('');
  steps.push('Back-substitution:');

  for (let i = vars - 1; i >= 0; i--) {
    let sum = aug[i][vars];
    for (let j = i + 1; j < vars; j++) {
      sum -= aug[i][j] * solution[j];
    }
    solution[i] = sum / aug[i][i];
    steps.push(`  x${subscript(i + 1)} = ${fmtNum(solution[i])}`);
  }

  return {
    type: 'unique',
    solution: solution.map((v) => parseFloat(v.toFixed(10))),
    steps,
    rankA: info.rankA,
    rankAug: info.rankAug,
    detail: `rank(A) = rank([A|b]) = ${info.rankA} = number of unknowns`,
  };
}

/* ── Gauss-Jordan (full RREF) ─────────────────────────────── */

function gaussJordan(coeffs, constants) {
  const info = classify(coeffs, constants);
  const steps = [];
  const n = coeffs.length;
  const vars = coeffs[0].length;
  const aug = buildAug(coeffs, constants);
  const eps = 1e-10;

  steps.push('Augmented matrix [A|b]:');
  steps.push(fmtAug(aug));

  if (info.type !== 'unique') {
    return {
      ...info,
      solution: null,
      steps,
      detail:
        info.type === 'none'
          ? `Inconsistent system: rank(A) = ${info.rankA}, rank([A|b]) = ${info.rankAug}`
          : `Infinite solutions: rank(A) = ${info.rankA} < ${vars} variables`,
    };
  }

  for (let col = 0; col < vars; col++) {
    // Partial pivoting
    let maxRow = col;
    for (let r = col + 1; r < n; r++) {
      if (Math.abs(aug[r][col]) > Math.abs(aug[maxRow][col])) maxRow = r;
    }
    if (maxRow !== col) {
      [aug[col], aug[maxRow]] = [aug[maxRow], aug[col]];
      steps.push('');
      steps.push(`Swap R${subscript(col + 1)} \u2194 R${subscript(maxRow + 1)}`);
    }

    // Scale pivot to 1
    const pivot = aug[col][col];
    if (Math.abs(pivot) < eps) continue;
    if (Math.abs(pivot - 1) > eps) {
      steps.push('');
      steps.push(`R${subscript(col + 1)} \u2190 R${subscript(col + 1)} / ${fmtNum(pivot)}`);
      for (let c = col; c <= vars; c++) aug[col][c] /= pivot;
    }

    // Eliminate entire column (above and below)
    for (let r = 0; r < n; r++) {
      if (r === col || Math.abs(aug[r][col]) < eps) continue;
      const factor = aug[r][col];
      steps.push(`R${subscript(r + 1)} \u2190 R${subscript(r + 1)} - (${fmtNum(factor)})R${subscript(col + 1)}`);
      for (let c = col; c <= vars; c++) {
        aug[r][c] -= factor * aug[col][c];
      }
    }
    steps.push(fmtAug(aug));
  }

  const solution = aug.map((row) => parseFloat(row[vars].toFixed(10)));

  steps.push('');
  steps.push('RREF reached — read solution directly:');
  solution.forEach((v, i) => steps.push(`  x${subscript(i + 1)} = ${fmtNum(v)}`));

  return {
    type: 'unique',
    solution,
    steps,
    rankA: info.rankA,
    rankAug: info.rankAug,
    detail: `rank(A) = rank([A|b]) = ${info.rankA} = number of unknowns`,
  };
}

/* ── Cramer's Rule ────────────────────────────────────────── */

function det(matrix) {
  const n = matrix.length;
  if (n === 1) return matrix[0][0];
  if (n === 2) return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];

  let result = 0;
  for (let j = 0; j < n; j++) {
    const sub = matrix.slice(1).map((row) => [...row.slice(0, j), ...row.slice(j + 1)]);
    result += (j % 2 === 0 ? 1 : -1) * matrix[0][j] * det(sub);
  }
  return result;
}

function cramersRule(coeffs, constants) {
  const steps = [];
  const n = coeffs.length;
  const vars = coeffs[0].length;

  if (n !== vars) {
    return {
      type: 'error',
      solution: null,
      steps: [],
      rankA: 0,
      rankAug: 0,
      detail: "Cramer's Rule requires a square system (equations = variables)",
    };
  }

  const detA = det(coeffs);
  steps.push(`det(A) = ${fmtNum(detA)}`);

  if (Math.abs(detA) < 1e-10) {
    const info = classify(coeffs, constants);
    return {
      ...info,
      solution: null,
      steps,
      detail: `det(A) = 0 — system is ${info.type === 'none' ? 'inconsistent' : 'underdetermined'}`,
    };
  }

  const solution = [];
  for (let i = 0; i < vars; i++) {
    const modified = clone2D(coeffs);
    for (let r = 0; r < n; r++) modified[r][i] = constants[r];
    const detI = det(modified);
    solution.push(parseFloat((detI / detA).toFixed(10)));
    steps.push('');
    steps.push(`A${subscript(i + 1)} = A with col ${i + 1} replaced by b`);
    steps.push(`det(A${subscript(i + 1)}) = ${fmtNum(detI)}`);
    steps.push(`x${subscript(i + 1)} = ${fmtNum(detI)} / ${fmtNum(detA)} = ${fmtNum(solution[i])}`);
  }

  return {
    type: 'unique',
    solution,
    steps,
    rankA: vars,
    rankAug: vars,
    detail: `det(A) = ${fmtNum(detA)} \u2260 0 — unique solution via Cramer's Rule`,
  };
}

/* ── Inverse Method  A\u207B\xB9b ─────────────────────────────── */

function invertMatrix(m) {
  const n = m.length;
  const aug = m.map((row, i) => {
    const id = new Array(n).fill(0);
    id[i] = 1;
    return [...row, ...id];
  });

  for (let col = 0; col < n; col++) {
    let maxRow = col;
    for (let r = col + 1; r < n; r++) {
      if (Math.abs(aug[r][col]) > Math.abs(aug[maxRow][col])) maxRow = r;
    }
    [aug[col], aug[maxRow]] = [aug[maxRow], aug[col]];

    const pivot = aug[col][col];
    if (Math.abs(pivot) < 1e-10) return null;
    for (let c = 0; c < 2 * n; c++) aug[col][c] /= pivot;

    for (let r = 0; r < n; r++) {
      if (r === col) continue;
      const f = aug[r][col];
      for (let c = 0; c < 2 * n; c++) aug[r][c] -= f * aug[col][c];
    }
  }

  return aug.map((row) => row.slice(n));
}

function inverseMethod(coeffs, constants) {
  const steps = [];
  const n = coeffs.length;
  const vars = coeffs[0].length;

  if (n !== vars) {
    return {
      type: 'error',
      solution: null,
      steps: [],
      rankA: 0,
      rankAug: 0,
      detail: 'Inverse method requires a square system (equations = variables)',
    };
  }

  const detA = det(coeffs);
  steps.push(`det(A) = ${fmtNum(detA)}`);

  if (Math.abs(detA) < 1e-10) {
    const info = classify(coeffs, constants);
    return {
      ...info,
      solution: null,
      steps,
      detail: `det(A) = 0 — matrix is singular, cannot invert`,
    };
  }

  const inv = invertMatrix(coeffs);
  steps.push('');
  steps.push('A\u207B\xB9 =');
  steps.push(fmtAug(inv));

  // x = A^-1 * b
  const solution = inv.map((row) => {
    let sum = 0;
    for (let j = 0; j < vars; j++) sum += row[j] * constants[j];
    return parseFloat(sum.toFixed(10));
  });

  steps.push('');
  steps.push('x = A\u207B\xB9 \u00B7 b =');
  solution.forEach((v, i) => steps.push(`  x${subscript(i + 1)} = ${fmtNum(v)}`));

  return {
    type: 'unique',
    solution,
    steps,
    rankA: vars,
    rankAug: vars,
    detail: `det(A) = ${fmtNum(detA)} \u2260 0 — solved via x = A\u207B\xB9b`,
  };
}

/* ── subscript helper ─────────────────────────────────────── */

const SUBSCRIPTS = '\u2080\u2081\u2082\u2083\u2084\u2085\u2086\u2087\u2088\u2089';

function subscript(num) {
  return String(num)
    .split('')
    .map((d) => SUBSCRIPTS[+d] || d)
    .join('');
}

/* ── public API ───────────────────────────────────────────── */

const solvers = {
  'Gaussian Elimination': gaussianElimination,
  'Gauss-Jordan': gaussJordan,
  "Cramer's Rule": cramersRule,
  'Inverse Method': inverseMethod,
};

export default function solveLinearSystem(method, coeffs, constants) {
  const solver = solvers[method];
  if (!solver) {
    return {
      type: 'error',
      solution: null,
      steps: [],
      rankA: 0,
      rankAug: 0,
      detail: `Unknown method: ${method}`,
    };
  }
  try {
    return solver(coeffs, constants);
  } catch (err) {
    return {
      type: 'error',
      solution: null,
      steps: [],
      rankA: 0,
      rankAug: 0,
      detail: `Computation error: ${err.message}`,
    };
  }
}

export { subscript, fmtNum };