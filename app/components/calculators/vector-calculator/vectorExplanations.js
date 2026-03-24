/**
 * vectorExplanations.js
 *
 * Two exports:
 *
 *   1. descriptions  — static theory text per category/operation.
 *      Can be overridden via component props (e.g. from getStaticProps).
 *      Structure: { [category]: { _default, [operation]: string } }
 *
 *   2. steps  — dynamic step-by-step breakdowns using real-time numbers.
 *      Always used from this file, never overridable.
 *      Structure: { [category]: { [operation]: (vectors, result, extras?) => string[] } }
 *      Each function returns an array of step strings.
 */

// ─────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────

function fmt(n) {
  if (n === undefined || n === null || isNaN(n)) return '?';
  if (Number.isInteger(n)) return String(n);
  return parseFloat(n.toFixed(6)).toString();
}

function fmtVec(v) {
  if (!v || !Array.isArray(v)) return '(?)';
  return '(' + v.map(fmt).join(', ') + ')';
}

function dot(a, b) {
  return a.reduce((s, val, i) => s + val * b[i], 0);
}

function mag(v) {
  return Math.sqrt(v.reduce((s, val) => s + val * val, 0));
}

// ─────────────────────────────────────────────────────────────────
// 1. DESCRIPTIONS  (static — overridable via props)
// ─────────────────────────────────────────────────────────────────

export const descriptions = {

  // ── Single ──
  single: {
    _default:
      'Single vector operations work on one vector at a time. Choose an operation to see a detailed explanation.',
    Magnitude:
      'The magnitude (or length) of a vector is the square root of the sum of the squares of its components: ||v|| = \u221A(v\u2081\u00B2 + v\u2082\u00B2 + \u2026 + v\u2099\u00B2). It represents the Euclidean distance from the origin to the point defined by the vector.',
    'Unit Vector':
      'A unit vector has magnitude 1 and points in the same direction as the original. It is found by dividing each component by the magnitude: \u00FB = v / ||v||. Unit vectors are used to indicate direction without regard to length.',
    Normalize:
      'Normalization rescales a vector so its magnitude becomes 1 while preserving direction. Mathematically identical to computing the unit vector. Essential in many applications like machine learning, physics simulations, and computer graphics.',
    'Sum of Components':
      'The sum of components adds every element of the vector into a single scalar: \u03A3v\u1D62 = v\u2081 + v\u2082 + \u2026 + v\u2099. Sometimes used as a simple aggregate measure of a vector.',
    'L1 Norm':
      'The L1 norm (Manhattan or taxicab norm) sums the absolute values of all components: ||v||\u2081 = |v\u2081| + |v\u2082| + \u2026 + |v\u2099|. It measures distance along axis-aligned paths, like walking on a city grid.',
    'L2 Norm':
      'The L2 norm (Euclidean norm) is the most common norm and equals the magnitude: ||v||\u2082 = \u221A(v\u2081\u00B2 + v\u2082\u00B2 + \u2026 + v\u2099\u00B2). It measures the straight-line distance from the origin.',
    'Infinity Norm':
      'The infinity norm (Chebyshev norm, max norm) returns the largest absolute value among all components: ||v||\u221E = max(|v\u2081|, |v\u2082|, \u2026, |v\u2099|). It measures the maximum displacement along any single axis.',
  },

  // ── Two ──
  two: {
    _default:
      'Two-vector operations take a pair of vectors and produce a scalar, vector, or angle. Choose an operation to learn more.',
    Addition:
      'Vector addition sums corresponding components: a + b = (a\u2081+b\u2081, a\u2082+b\u2082, \u2026). Geometrically, it places the tail of b at the tip of a; the result points from the tail of a to the tip of b.',
    Subtraction:
      'Vector subtraction finds the difference of corresponding components: a \u2212 b = (a\u2081\u2212b\u2081, a\u2082\u2212b\u2082, \u2026). The result vector points from the tip of b to the tip of a.',
    'Dot Product':
      'The dot (scalar, inner) product multiplies corresponding components and sums the results: a\u00B7b = a\u2081b\u2081 + a\u2082b\u2082 + \u2026 + a\u2099b\u2099. The result is a scalar. If zero, the vectors are perpendicular.',
    'Cross Product':
      'The cross product is defined only in 3D. It returns a vector perpendicular to both inputs whose magnitude equals the area of the parallelogram they span: a\u00D7b = (a\u2082b\u2083\u2212a\u2083b\u2082, a\u2083b\u2081\u2212a\u2081b\u2083, a\u2081b\u2082\u2212a\u2082b\u2081).',
    'Angle Between':
      'The angle \u03B8 between two vectors is found via cos\u03B8 = (a\u00B7b) / (||a|| \u00B7 ||b||). The result ranges from 0 (parallel) to \u03C0 (anti-parallel). Useful for measuring similarity between directions.',
    Distance:
      'The Euclidean distance between two vectors is the magnitude of their difference: d = ||a \u2212 b||. It measures how far apart the endpoints of the two vectors are in space.',
    Projection:
      'The projection of a onto b gives the component of a in the direction of b: proj_b(a) = ((a\u00B7b)/(b\u00B7b)) \u00B7 b. The result is a vector parallel to b.',
    Rejection:
      'The rejection of a from b is the component of a perpendicular to b: rej_b(a) = a \u2212 proj_b(a). Together with the projection, it decomposes a into parallel and perpendicular components relative to b.',
  },

  // ── Multiple ──
  multiple: {
    _default:
      'Multiple-vector operations analyse sets of vectors for properties like independence, orthogonality, and span. Pick an operation to see details.',
    'Linear Combination':
      'A linear combination multiplies each vector by a scalar coefficient and sums the results: c\u2081v\u2081 + c\u2082v\u2082 + \u2026 + c\u2096v\u2096. It is the fundamental building block of linear algebra.',
    'Span Check':
      'The span of a set of vectors is the set of all possible linear combinations. This check determines whether a given target vector can be expressed as a linear combination of the input vectors, using rank comparison.',
    'Linear Independence':
      'Vectors are linearly independent if no vector in the set can be written as a linear combination of the others. Checked by row-reducing the matrix they form and comparing rank to the number of vectors.',
    'Orthogonality Check':
      'Vectors are mutually orthogonal if every pair has a dot product of zero. Orthogonal sets are important in decompositions, projections, and constructing coordinate systems.',
    'Gram-Schmidt':
      'The Gram\u2013Schmidt process takes a set of linearly independent vectors and produces an orthonormal set spanning the same subspace. Each vector is made orthogonal to all previous ones, then normalized.',
    'Matrix Form':
      'Arranges the input vectors as rows of a matrix. This representation is the gateway to further linear algebra operations such as computing the determinant, rank, eigenvalues, or solving systems of equations.',
  },
};

// ─────────────────────────────────────────────────────────────────
// 2. STEPS  (dynamic — always from this file, never overridable)
// ─────────────────────────────────────────────────────────────────

export const steps = {

  // ── Single vector steps ──
  single: {

    Magnitude: (vectors) => {
      const v = vectors[0];
      const squares = v.map(c => `${fmt(c)}\u00B2`).join(' + ');
      const squareVals = v.map(c => fmt(c * c)).join(' + ');
      const sumSq = v.reduce((s, c) => s + c * c, 0);
      return [
        `Given v = ${fmtVec(v)}`,
        `||v|| = \u221A(${squares})`,
        `     = \u221A(${squareVals})`,
        `     = \u221A(${fmt(sumSq)})`,
        `     = ${fmt(Math.sqrt(sumSq))}`,
      ];
    },

    'Unit Vector': (vectors) => {
      const v = vectors[0];
      const m = mag(v);
      if (m === 0) return ['Given v = ' + fmtVec(v), 'Magnitude is 0 \u2014 unit vector is undefined.'];
      const unit = v.map(c => c / m);
      return [
        `Given v = ${fmtVec(v)}`,
        `||v|| = ${fmt(m)}`,
        `\u00FB = v / ||v|| = ${fmtVec(v)} / ${fmt(m)}`,
        `\u00FB = ${fmtVec(unit)}`,
      ];
    },

    Normalize: (vectors) => {
      const v = vectors[0];
      const m = mag(v);
      if (m === 0) return ['Given v = ' + fmtVec(v), 'Magnitude is 0 \u2014 normalization is undefined.'];
      const norm = v.map(c => c / m);
      return [
        `Given v = ${fmtVec(v)}`,
        `||v|| = ${fmt(m)}`,
        `v\u0302 = v / ||v|| = ${fmtVec(norm)}`,
        `Verification: ||v\u0302|| = ${fmt(mag(norm))} \u2248 1`,
      ];
    },

    'Sum of Components': (vectors) => {
      const v = vectors[0];
      const terms = v.map(fmt).join(' + ');
      const sum = v.reduce((s, c) => s + c, 0);
      return [
        `Given v = ${fmtVec(v)}`,
        `\u03A3 v\u1D62 = ${terms}`,
        `      = ${fmt(sum)}`,
      ];
    },

    'L1 Norm': (vectors) => {
      const v = vectors[0];
      const absTerms = v.map(c => `|${fmt(c)}|`).join(' + ');
      const absVals = v.map(c => fmt(Math.abs(c))).join(' + ');
      const norm = v.reduce((s, c) => s + Math.abs(c), 0);
      return [
        `Given v = ${fmtVec(v)}`,
        `||v||\u2081 = ${absTerms}`,
        `      = ${absVals}`,
        `      = ${fmt(norm)}`,
      ];
    },

    'L2 Norm': (vectors) => {
      const v = vectors[0];
      const squares = v.map(c => `${fmt(c)}\u00B2`).join(' + ');
      const sumSq = v.reduce((s, c) => s + c * c, 0);
      return [
        `Given v = ${fmtVec(v)}`,
        `||v||\u2082 = \u221A(${squares})`,
        `      = \u221A(${fmt(sumSq)})`,
        `      = ${fmt(Math.sqrt(sumSq))}`,
      ];
    },

    'Infinity Norm': (vectors) => {
      const v = vectors[0];
      const absVals = v.map(c => `|${fmt(c)}| = ${fmt(Math.abs(c))}`);
      const norm = Math.max(...v.map(Math.abs));
      return [
        `Given v = ${fmtVec(v)}`,
        `Absolute values: ${absVals.join(', ')}`,
        `||v||\u221E = max(${v.map(c => fmt(Math.abs(c))).join(', ')})`,
        `      = ${fmt(norm)}`,
      ];
    },
  },

  // ── Two vector steps ──
  two: {

    Addition: (vectors) => {
      const [a, b] = vectors;
      const result = a.map((val, i) => val + b[i]);
      const terms = a.map((val, i) => `${fmt(val)} + ${fmt(b[i])} = ${fmt(result[i])}`);
      return [
        `Given a = ${fmtVec(a)}, b = ${fmtVec(b)}`,
        `Component-wise addition:`,
        ...terms.map((t, i) => `  x${i + 1}: ${t}`),
        `a + b = ${fmtVec(result)}`,
      ];
    },

    Subtraction: (vectors) => {
      const [a, b] = vectors;
      const result = a.map((val, i) => val - b[i]);
      const terms = a.map((val, i) => `${fmt(val)} \u2212 ${fmt(b[i])} = ${fmt(result[i])}`);
      return [
        `Given a = ${fmtVec(a)}, b = ${fmtVec(b)}`,
        `Component-wise subtraction:`,
        ...terms.map((t, i) => `  x${i + 1}: ${t}`),
        `a \u2212 b = ${fmtVec(result)}`,
      ];
    },

    'Dot Product': (vectors) => {
      const [a, b] = vectors;
      const products = a.map((val, i) => `${fmt(val)} \u00D7 ${fmt(b[i])}`);
      const productVals = a.map((val, i) => fmt(val * b[i]));
      const result = dot(a, b);
      return [
        `Given a = ${fmtVec(a)}, b = ${fmtVec(b)}`,
        `a \u00B7 b = ${products.join(' + ')}`,
        `      = ${productVals.join(' + ')}`,
        `      = ${fmt(result)}`,
      ];
    },

    'Cross Product': (vectors) => {
      const [a, b] = vectors;
      if (a.length !== 3) return ['Cross product requires 3D vectors.'];
      const r = [
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0],
      ];
      return [
        `Given a = ${fmtVec(a)}, b = ${fmtVec(b)}`,
        `i: a\u2082b\u2083 \u2212 a\u2083b\u2082 = ${fmt(a[1])}\u00D7${fmt(b[2])} \u2212 ${fmt(a[2])}\u00D7${fmt(b[1])} = ${fmt(a[1] * b[2])} \u2212 ${fmt(a[2] * b[1])} = ${fmt(r[0])}`,
        `j: a\u2083b\u2081 \u2212 a\u2081b\u2083 = ${fmt(a[2])}\u00D7${fmt(b[0])} \u2212 ${fmt(a[0])}\u00D7${fmt(b[2])} = ${fmt(a[2] * b[0])} \u2212 ${fmt(a[0] * b[2])} = ${fmt(r[1])}`,
        `k: a\u2081b\u2082 \u2212 a\u2082b\u2081 = ${fmt(a[0])}\u00D7${fmt(b[1])} \u2212 ${fmt(a[1])}\u00D7${fmt(b[0])} = ${fmt(a[0] * b[1])} \u2212 ${fmt(a[1] * b[0])} = ${fmt(r[2])}`,
        `a \u00D7 b = ${fmtVec(r)}`,
      ];
    },

    'Angle Between': (vectors) => {
      const [a, b] = vectors;
      const d = dot(a, b);
      const mA = mag(a);
      const mB = mag(b);
      if (mA === 0 || mB === 0) return ['Cannot compute angle with a zero vector.'];
      const cosT = Math.max(-1, Math.min(1, d / (mA * mB)));
      const rad = Math.acos(cosT);
      const deg = rad * (180 / Math.PI);
      return [
        `Given a = ${fmtVec(a)}, b = ${fmtVec(b)}`,
        `a \u00B7 b = ${fmt(d)}`,
        `||a|| = ${fmt(mA)}, ||b|| = ${fmt(mB)}`,
        `cos\u03B8 = (a \u00B7 b) / (||a|| \u00B7 ||b||) = ${fmt(d)} / (${fmt(mA)} \u00D7 ${fmt(mB)}) = ${fmt(cosT)}`,
        `\u03B8 = arccos(${fmt(cosT)}) = ${fmt(rad)} rad = ${fmt(deg)}\u00B0`,
      ];
    },

    Distance: (vectors) => {
      const [a, b] = vectors;
      const diff = a.map((val, i) => val - b[i]);
      const squares = diff.map(c => `${fmt(c)}\u00B2`).join(' + ');
      const sumSq = diff.reduce((s, c) => s + c * c, 0);
      return [
        `Given a = ${fmtVec(a)}, b = ${fmtVec(b)}`,
        `a \u2212 b = ${fmtVec(diff)}`,
        `d = ||a \u2212 b|| = \u221A(${squares})`,
        `  = \u221A(${fmt(sumSq)})`,
        `  = ${fmt(Math.sqrt(sumSq))}`,
      ];
    },

    Projection: (vectors) => {
      const [a, b] = vectors;
      const ab = dot(a, b);
      const bb = dot(b, b);
      if (bb === 0) return ['Cannot project onto a zero vector.'];
      const scalar = ab / bb;
      const proj = b.map(c => c * scalar);
      return [
        `Given a = ${fmtVec(a)}, b = ${fmtVec(b)}`,
        `a \u00B7 b = ${fmt(ab)}`,
        `b \u00B7 b = ${fmt(bb)}`,
        `Scalar = (a \u00B7 b) / (b \u00B7 b) = ${fmt(ab)} / ${fmt(bb)} = ${fmt(scalar)}`,
        `proj_b(a) = ${fmt(scalar)} \u00D7 ${fmtVec(b)} = ${fmtVec(proj)}`,
      ];
    },

    Rejection: (vectors) => {
      const [a, b] = vectors;
      const ab = dot(a, b);
      const bb = dot(b, b);
      if (bb === 0) return ['Cannot compute rejection from a zero vector.'];
      const scalar = ab / bb;
      const proj = b.map(c => c * scalar);
      const rej = a.map((val, i) => val - proj[i]);
      return [
        `Given a = ${fmtVec(a)}, b = ${fmtVec(b)}`,
        `proj_b(a) = ${fmtVec(proj)}  (see Projection steps)`,
        `rej_b(a) = a \u2212 proj_b(a)`,
        `         = ${fmtVec(a)} \u2212 ${fmtVec(proj)}`,
        `         = ${fmtVec(rej)}`,
      ];
    },
  },

  // ── Multiple vector steps ──
  multiple: {

    'Linear Combination': (vectors, result, extras) => {
      const coeffs = extras?.coefficients;
      if (!coeffs) return ['Coefficients not provided.'];
      const terms = coeffs.map((c, i) => `${fmt(c)} \u00D7 ${fmtVec(vectors[i])}`);
      const scaled = coeffs.map((c, i) => fmtVec(vectors[i].map(v => v * c)));
      const dim = vectors[0].length;
      const final = new Array(dim).fill(0);
      coeffs.forEach((c, i) => vectors[i].forEach((v, j) => { final[j] += c * v; }));
      return [
        `Given ${vectors.length} vectors with coefficients:`,
        ...terms.map((t, i) => `  ${t} = ${scaled[i]}`),
        `Sum: ${fmtVec(final)}`,
      ];
    },

    'Span Check': (vectors, result, extras) => {
      const t = extras?.targetVector;
      if (!t) return ['Target vector not provided.'];
      const labels = vectors.map((_, i) => String.fromCharCode(65 + i));
      return [
        `Given vectors: ${labels.map((l, i) => `${l} = ${fmtVec(vectors[i])}`).join(', ')}`,
        `Target: t = ${fmtVec(t)}`,
        `Method: Build matrix with vectors as columns, augment with target, row-reduce.`,
        `Compare rank of coefficient matrix vs augmented matrix.`,
        `Rank(coefficient) = rank(augmented) \u21D2 target IS in span.`,
        `Rank(coefficient) < rank(augmented) \u21D2 target is NOT in span.`,
        result?.detail || '',
      ].filter(Boolean);
    },

    'Linear Independence': (vectors) => {
      const labels = vectors.map((_, i) => String.fromCharCode(65 + i));
      return [
        `Given ${vectors.length} vectors:`,
        ...labels.map((l, i) => `  ${l} = ${fmtVec(vectors[i])}`),
        `Method: Arrange as rows of a matrix, row-reduce to echelon form.`,
        `Count pivot positions (rank).`,
        `If rank = ${vectors.length} (number of vectors) \u21D2 linearly independent.`,
        `If rank < ${vectors.length} \u21D2 linearly dependent.`,
      ];
    },

    'Orthogonality Check': (vectors) => {
      const labels = vectors.map((_, i) => String.fromCharCode(65 + i));
      const pairResults = [];
      for (let i = 0; i < vectors.length; i++) {
        for (let j = i + 1; j < vectors.length; j++) {
          const d = dot(vectors[i], vectors[j]);
          pairResults.push(`  ${labels[i]} \u00B7 ${labels[j]} = ${fmt(d)}${Math.abs(d) < 1e-10 ? ' \u2713' : ' \u2717 (not zero)'}`);
        }
      }
      return [
        `Given ${vectors.length} vectors:`,
        ...labels.map((l, i) => `  ${l} = ${fmtVec(vectors[i])}`),
        `Pairwise dot products:`,
        ...pairResults,
        `All zero \u21D2 mutually orthogonal.`,
      ];
    },

    'Gram-Schmidt': (vectors) => {
      const lines = [
        `Given ${vectors.length} vectors:`,
        ...vectors.map((v, i) => `  v${i + 1} = ${fmtVec(v)}`),
        ``,
      ];

      const ortho = [];
      for (let i = 0; i < vectors.length; i++) {
        lines.push(`Step ${i + 1}: Process v${i + 1}`);
        let u = [...vectors[i]];

        if (i > 0) {
          for (let j = 0; j < ortho.length; j++) {
            const uj = ortho[j];
            const d = dot(vectors[i], uj);
            const dd = dot(uj, uj);
            const sc = d / dd;
            const proj = uj.map(c => c * sc);
            lines.push(`  Subtract proj onto e${j + 1}: (${fmt(d)}/${fmt(dd)}) \u00D7 e${j + 1} = ${fmtVec(proj)}`);
            u = u.map((val, k) => val - proj[k]);
          }
          lines.push(`  After subtracting projections: u = ${fmtVec(u)}`);
        }

        const m = mag(u);
        if (m < 1e-10) {
          lines.push(`  Magnitude \u2248 0 \u2014 vector is linearly dependent. Process stops.`);
          return lines;
        }

        const normed = u.map(c => c / m);
        lines.push(`  ||u|| = ${fmt(m)}`);
        lines.push(`  e${i + 1} = u / ||u|| = ${fmtVec(normed)}`);
        lines.push('');
        ortho.push(normed);
      }

      return lines;
    },

    'Matrix Form': (vectors) => {
      const labels = vectors.map((_, i) => String.fromCharCode(65 + i));
      return [
        `Given ${vectors.length} vectors arranged as rows:`,
        ...labels.map((l, i) => `  Row ${i + 1} (${l}): ${fmtVec(vectors[i])}`),
        `Resulting matrix is ${vectors.length} \u00D7 ${vectors[0].length}.`,
      ];
    },
  },
};