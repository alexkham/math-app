/**
 * computeVector.js
 *
 * Pure math utility for vector operations.
 * Takes { operation, vectors, dimensionality, coefficients? } and returns
 * { type, value, label } where type is 'scalar' | 'vector' | 'matrix' | 'boolean'.
 *
 * Categories:
 *   1. Single vector operations   (lines ~20–100)
 *   2. Two vector operations      (lines ~105–220)
 *   3. Multiple vector operations (lines ~225–400)
 */

// ─────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────

function dotProduct(a, b) {
  return a.reduce((sum, val, i) => sum + val * b[i], 0);
}

function magnitude(v) {
  return Math.sqrt(v.reduce((sum, val) => sum + val * val, 0));
}

function scaleVector(v, scalar) {
  return v.map(c => c * scalar);
}

function subtractVectors(a, b) {
  return a.map((val, i) => val - b[i]);
}

function addVectors(a, b) {
  return a.map((val, i) => val + b[i]);
}

function formatNum(n) {
  if (Number.isInteger(n)) return n;
  return parseFloat(n.toFixed(8));
}

function formatVector(v) {
  return v.map(formatNum);
}

// ─────────────────────────────────────────────────────────────────
// 1. SINGLE VECTOR OPERATIONS
// ─────────────────────────────────────────────────────────────────

function calcMagnitude(v) {
  const mag = magnitude(v);
  return { type: 'scalar', value: formatNum(mag), label: '||v||' };
}

function calcUnitVector(v) {
  const mag = magnitude(v);
  if (mag === 0) return { type: 'error', value: 'Cannot compute unit vector of a zero vector' };
  const unit = scaleVector(v, 1 / mag);
  return { type: 'vector', value: formatVector(unit), label: 'û = v / ||v||' };
}

function calcNormalize(v) {
  const mag = magnitude(v);
  if (mag === 0) return { type: 'error', value: 'Cannot normalize a zero vector' };
  const norm = scaleVector(v, 1 / mag);
  return { type: 'vector', value: formatVector(norm), label: 'Normalized v (||v̂|| = 1)' };
}

function calcSumOfComponents(v) {
  const sum = v.reduce((acc, val) => acc + val, 0);
  return { type: 'scalar', value: formatNum(sum), label: 'Σ vᵢ' };
}

function calcL1Norm(v) {
  const norm = v.reduce((acc, val) => acc + Math.abs(val), 0);
  return { type: 'scalar', value: formatNum(norm), label: '||v||₁' };
}

function calcL2Norm(v) {
  const norm = magnitude(v);
  return { type: 'scalar', value: formatNum(norm), label: '||v||₂' };
}

function calcInfinityNorm(v) {
  const norm = Math.max(...v.map(Math.abs));
  return { type: 'scalar', value: formatNum(norm), label: '||v||∞' };
}

// ─────────────────────────────────────────────────────────────────
// 2. TWO VECTOR OPERATIONS
// ─────────────────────────────────────────────────────────────────

function calcAddition(a, b) {
  const result = addVectors(a, b);
  return { type: 'vector', value: formatVector(result), label: 'a + b' };
}

function calcSubtraction(a, b) {
  const result = subtractVectors(a, b);
  return { type: 'vector', value: formatVector(result), label: 'a − b' };
}

function calcDotProduct(a, b) {
  const result = dotProduct(a, b);
  return { type: 'scalar', value: formatNum(result), label: 'a · b' };
}

function calcCrossProduct(a, b) {
  if (a.length !== 3 || b.length !== 3) {
    return { type: 'error', value: 'Cross product is only defined for 3D vectors' };
  }
  const result = [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
  return { type: 'vector', value: formatVector(result), label: 'a × b' };
}

function calcAngleBetween(a, b) {
  const magA = magnitude(a);
  const magB = magnitude(b);
  if (magA === 0 || magB === 0) {
    return { type: 'error', value: 'Cannot compute angle with a zero vector' };
  }
  const cosTheta = Math.max(-1, Math.min(1, dotProduct(a, b) / (magA * magB)));
  const radians = Math.acos(cosTheta);
  const degrees = radians * (180 / Math.PI);
  return {
    type: 'scalar',
    value: `${formatNum(radians)} rad (${formatNum(degrees)}°)`,
    label: 'θ = arccos((a · b) / (||a|| · ||b||))',
  };
}

function calcDistance(a, b) {
  const diff = subtractVectors(a, b);
  const dist = magnitude(diff);
  return { type: 'scalar', value: formatNum(dist), label: 'd(a, b) = ||a − b||' };
}

function calcProjection(a, b) {
  const bDotB = dotProduct(b, b);
  if (bDotB === 0) {
    return { type: 'error', value: 'Cannot project onto a zero vector' };
  }
  const scalar = dotProduct(a, b) / bDotB;
  const proj = scaleVector(b, scalar);
  return { type: 'vector', value: formatVector(proj), label: 'proj_b(a) = ((a·b)/(b·b)) · b' };
}

function calcRejection(a, b) {
  const bDotB = dotProduct(b, b);
  if (bDotB === 0) {
    return { type: 'error', value: 'Cannot compute rejection from a zero vector' };
  }
  const scalar = dotProduct(a, b) / bDotB;
  const proj = scaleVector(b, scalar);
  const rej = subtractVectors(a, proj);
  return { type: 'vector', value: formatVector(rej), label: 'rej_b(a) = a − proj_b(a)' };
}

// ─────────────────────────────────────────────────────────────────
// 3. MULTIPLE VECTOR OPERATIONS
// ─────────────────────────────────────────────────────────────────

function calcLinearCombination(vectors, coefficients) {
  if (!coefficients || coefficients.length !== vectors.length) {
    return { type: 'error', value: 'Please provide one coefficient per vector' };
  }
  const dim = vectors[0].length;
  const result = new Array(dim).fill(0);
  for (let i = 0; i < vectors.length; i++) {
    for (let j = 0; j < dim; j++) {
      result[j] += coefficients[i] * vectors[i][j];
    }
  }
  const terms = coefficients.map((c, i) => `${formatNum(c)}·v${String.fromCharCode(65 + i)}`).join(' + ');
  return { type: 'vector', value: formatVector(result), label: terms };
}

/**
 * Row-reduce a matrix (Gaussian elimination) — returns { rref, pivotCols }.
 * Used internally by Span Check and Linear Independence.
 */
function rowReduce(matrix) {
  const m = matrix.map(row => [...row]); // deep copy
  const rows = m.length;
  const cols = m[0].length;
  const pivotCols = [];
  let pivotRow = 0;

  for (let col = 0; col < cols && pivotRow < rows; col++) {
    // Find pivot
    let maxRow = pivotRow;
    for (let r = pivotRow + 1; r < rows; r++) {
      if (Math.abs(m[r][col]) > Math.abs(m[maxRow][col])) maxRow = r;
    }
    if (Math.abs(m[maxRow][col]) < 1e-10) continue;

    // Swap rows
    [m[pivotRow], m[maxRow]] = [m[maxRow], m[pivotRow]];

    // Scale pivot row
    const scale = m[pivotRow][col];
    for (let j = col; j < cols; j++) m[pivotRow][j] /= scale;

    // Eliminate column
    for (let r = 0; r < rows; r++) {
      if (r === pivotRow) continue;
      const factor = m[r][col];
      for (let j = col; j < cols; j++) m[r][j] -= factor * m[pivotRow][j];
    }

    pivotCols.push(col);
    pivotRow++;
  }

  return { rref: m, pivotCols, rank: pivotCols.length };
}

function calcLinearIndependence(vectors) {
  const matrix = vectors.map(v => [...v]);
  const { rank } = rowReduce(matrix);
  const independent = rank === vectors.length;
  return {
    type: 'boolean',
    value: independent,
    detail: independent
      ? `The ${vectors.length} vectors are linearly independent (rank = ${rank})`
      : `The vectors are linearly dependent (rank ${rank} < ${vectors.length} vectors)`,
    label: 'Linear Independence',
  };
}

function calcSpanCheck(vectors, targetVector) {
  if (!targetVector || targetVector.length !== vectors[0].length) {
    return { type: 'error', value: 'Please provide a target vector with matching dimensionality' };
  }
  // Build augmented matrix: each vector as a column, target as last column
  const dim = vectors[0].length;
  const augmented = [];
  for (let row = 0; row < dim; row++) {
    const r = [];
    for (let col = 0; col < vectors.length; col++) {
      r.push(vectors[col][row]);
    }
    r.push(targetVector[row]);
    augmented.push(r);
  }

  // Build column matrix (vectors as columns, transposed into rows for row reduction)
  const colMatrix = [];
  for (let row = 0; row < dim; row++) {
    const r = [];
    for (let col = 0; col < vectors.length; col++) {
      r.push(vectors[col][row]);
    }
    colMatrix.push(r);
  }
  const { rank: rankA } = rowReduce(colMatrix);
  const { rank: rankAug } = rowReduce(augmented);

  const inSpan = rankA === rankAug;
  return {
    type: 'boolean',
    value: inSpan,
    detail: inSpan
      ? 'The target vector IS in the span of the given vectors'
      : 'The target vector is NOT in the span of the given vectors',
    label: 'Span Check',
  };
}

function calcOrthogonalityCheck(vectors) {
  const nonOrthogonalPairs = [];
  for (let i = 0; i < vectors.length; i++) {
    for (let j = i + 1; j < vectors.length; j++) {
      const dp = dotProduct(vectors[i], vectors[j]);
      if (Math.abs(dp) > 1e-10) {
        nonOrthogonalPairs.push(
          `${String.fromCharCode(65 + i)}·${String.fromCharCode(65 + j)} = ${formatNum(dp)}`
        );
      }
    }
  }
  const orthogonal = nonOrthogonalPairs.length === 0;
  return {
    type: 'boolean',
    value: orthogonal,
    detail: orthogonal
      ? 'All vectors are mutually orthogonal'
      : `Non-orthogonal pairs: ${nonOrthogonalPairs.join(', ')}`,
    label: 'Orthogonality Check',
  };
}

function calcGramSchmidt(vectors) {
  const orthogonal = [];

  for (let i = 0; i < vectors.length; i++) {
    let u = [...vectors[i]];

    // Subtract projections of previous orthogonal vectors
    for (let j = 0; j < orthogonal.length; j++) {
      const uj = orthogonal[j];
      const scalar = dotProduct(vectors[i], uj) / dotProduct(uj, uj);
      const proj = scaleVector(uj, scalar);
      u = subtractVectors(u, proj);
    }

    // Check for zero vector (linear dependence)
    const mag = magnitude(u);
    if (mag < 1e-10) {
      return {
        type: 'error',
        value: `Vector ${String.fromCharCode(65 + i)} is linearly dependent on the previous vectors. Gram-Schmidt requires linearly independent input.`,
      };
    }

    // Normalize to get orthonormal vector
    u = scaleVector(u, 1 / mag);
    orthogonal.push(u);
  }

  return {
    type: 'matrix',
    value: orthogonal.map(formatVector),
    label: 'Orthonormal set (Gram–Schmidt)',
    rowLabels: orthogonal.map((_, i) => `e${i + 1}`),
  };
}

function calcMatrixForm(vectors) {
  // Vectors as rows of a matrix
  return {
    type: 'matrix',
    value: vectors.map(formatVector),
    label: 'Matrix (vectors as rows)',
    rowLabels: vectors.map((_, i) => String.fromCharCode(65 + i)),
  };
}

// ─────────────────────────────────────────────────────────────────
// Dispatcher
// ─────────────────────────────────────────────────────────────────

/**
 * @param {Object} params
 * @param {string}   params.operation      — operation name
 * @param {string}   params.operationType  — 'single' | 'two' | 'multiple'
 * @param {number}   params.dimensionality — vector size
 * @param {number[][]} params.vectors      — array of numeric vectors
 * @param {number[]}  [params.coefficients]— for Linear Combination
 * @param {number[]}  [params.targetVector]— for Span Check
 * @returns {{ type: string, value: any, label?: string, detail?: string }}
 */
export default function computeVector({ operation, operationType, vectors, coefficients, targetVector }) {
  try {
    // ── Single ──
    if (operationType === 'single') {
      const v = vectors[0];
      switch (operation) {
        case 'Magnitude':         return calcMagnitude(v);
        case 'Unit Vector':       return calcUnitVector(v);
        case 'Normalize':         return calcNormalize(v);
        case 'Sum of Components': return calcSumOfComponents(v);
        case 'L1 Norm':           return calcL1Norm(v);
        case 'L2 Norm':           return calcL2Norm(v);
        case 'Infinity Norm':     return calcInfinityNorm(v);
        default:                  return { type: 'error', value: `Unknown operation: ${operation}` };
      }
    }

    // ── Two ──
    if (operationType === 'two') {
      const [a, b] = vectors;
      switch (operation) {
        case 'Addition':      return calcAddition(a, b);
        case 'Subtraction':   return calcSubtraction(a, b);
        case 'Dot Product':   return calcDotProduct(a, b);
        case 'Cross Product': return calcCrossProduct(a, b);
        case 'Angle Between': return calcAngleBetween(a, b);
        case 'Distance':      return calcDistance(a, b);
        case 'Projection':    return calcProjection(a, b);
        case 'Rejection':     return calcRejection(a, b);
        default:              return { type: 'error', value: `Unknown operation: ${operation}` };
      }
    }

    // ── Multiple ──
    if (operationType === 'multiple') {
      switch (operation) {
        case 'Linear Combination':  return calcLinearCombination(vectors, coefficients);
        case 'Span Check':          return calcSpanCheck(vectors, targetVector);
        case 'Linear Independence': return calcLinearIndependence(vectors);
        case 'Orthogonality Check': return calcOrthogonalityCheck(vectors);
        case 'Gram-Schmidt':        return calcGramSchmidt(vectors);
        case 'Matrix Form':         return calcMatrixForm(vectors);
        default:                    return { type: 'error', value: `Unknown operation: ${operation}` };
      }
    }

    return { type: 'error', value: `Unknown operation type: ${operationType}` };
  } catch (err) {
    return { type: 'error', value: `Calculation error: ${err.message}` };
  }
}