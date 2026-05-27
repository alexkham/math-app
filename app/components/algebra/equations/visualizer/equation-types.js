// equation-types.js
// Registry of equation types for the f(x) = n visualizer.
// Each type defines: label, description, genericForm, params (including n),
// templates, f(p)(x), factors(p) (single row description for the sign chart),
// invert (optional, drag a critical point to change params).
//
// Adding a new equation type = one new entry here.

export const TYPES = {
  linear: {
    id: 'linear',
    label: 'Linear',
    description: 'Solve ax + b = n. One real solution when a \u2260 0.',
    genericForm: 'f(x) = ax + b ;  solve f(x) = n',
    params: [
      { key: 'a', label: 'slope a', min: -5, max: 5, step: 1,
        tooltip: 'Slope of the line. When a = 0 the equation has no solution unless b = n.' },
      { key: 'b', label: 'intercept b', min: -8, max: 8, step: 1,
        tooltip: 'Where the line crosses x = 0.' },
      { key: 'n', label: 'level n', min: -10, max: 10, step: 1,
        tooltip: 'Right-hand side of the equation. Solutions are x where the curve reaches this y-value.' },
    ],
    templates: [
      { name: 'Basic',         vals: { a: 1,  b: 0,  n: 3 } },
      { name: 'Steep',         vals: { a: 3,  b: -2, n: 4 } },
      { name: 'Negative',      vals: { a: -1, b: 5,  n: 0 } },
    ],
    f: p => x => p.a * x + p.b,
    expr: p => formatLinear(p),
    rowLabel: 'f(x) \u2212 n',
  },

  quadratic: {
    id: 'quadratic',
    label: 'Quadratic',
    description: 'Solve ax\u00B2 + bx + c = n. Up to two real solutions.',
    genericForm: 'f(x) = ax\u00B2 + bx + c ;  solve f(x) = n',
    params: [
      { key: 'a', label: 'a (x\u00B2)', min: -3, max: 3, step: 1,
        tooltip: 'Coefficient of x\u00B2. Sign decides whether the parabola opens up or down.' },
      { key: 'b', label: 'b (x)', min: -5, max: 5, step: 1,
        tooltip: 'Coefficient of x.' },
      { key: 'c', label: 'c', min: -8, max: 8, step: 1,
        tooltip: 'Constant term \u2014 the y-intercept.' },
      { key: 'n', label: 'level n', min: -10, max: 10, step: 1,
        tooltip: 'Solutions are x where the parabola reaches this y-value.' },
    ],
    templates: [
      { name: 'Two solutions', vals: { a: 1,  b: 0,  c: -4, n: 0 } },
      { name: 'One solution',  vals: { a: 1,  b: 0,  c: 0,  n: 0 } },
      { name: 'No solution',   vals: { a: 1,  b: 0,  c: 4,  n: 0 } },
      { name: 'High level',    vals: { a: 1,  b: -2, c: -3, n: 5 } },
    ],
    f: p => x => p.a * x * x + p.b * x + p.c,
    expr: p => formatQuadratic(p),
    rowLabel: 'f(x) \u2212 n',
  },

  cubic: {
    id: 'cubic',
    label: 'Cubic',
    description: 'Solve ax\u00B3 + bx + c = n. Up to three real solutions.',
    genericForm: 'f(x) = ax\u00B3 + bx + c ;  solve f(x) = n',
    params: [
      { key: 'a', label: 'a (x\u00B3)', min: -2, max: 2, step: 1,
        tooltip: 'Leading coefficient. Sign decides the overall direction.' },
      { key: 'b', label: 'b (x)', min: -6, max: 6, step: 1,
        tooltip: 'Linear coefficient. Negative values create local extrema.' },
      { key: 'c', label: 'c', min: -6, max: 6, step: 1,
        tooltip: 'Constant term.' },
      { key: 'n', label: 'level n', min: -10, max: 10, step: 1,
        tooltip: 'Right-hand side.' },
    ],
    templates: [
      { name: 'Three roots',   vals: { a: 1, b: -3, c: 0,  n: 0 } },
      { name: 'One root',      vals: { a: 1, b: 0,  c: 0,  n: 0 } },
      { name: 'Shifted',       vals: { a: 1, b: -4, c: 0,  n: 3 } },
    ],
    f: p => x => p.a * x * x * x + p.b * x + p.c,
    expr: p => formatCubic(p),
    rowLabel: 'f(x) \u2212 n',
  },

  abs: {
    id: 'abs',
    label: 'Absolute value',
    description: 'Solve |x \u2212 h| + k = n. Up to two real solutions (when n \u2265 k).',
    genericForm: 'f(x) = |x \u2212 h| + k ;  solve f(x) = n',
    params: [
      { key: 'h', label: 'h (shift)', min: -6, max: 6, step: 1,
        tooltip: 'Horizontal shift of the V-shape vertex.' },
      { key: 'k', label: 'k (raise)', min: -4, max: 8, step: 1,
        tooltip: 'Vertical lift of the vertex.' },
      { key: 'n', label: 'level n', min: -2, max: 10, step: 1,
        tooltip: 'Right-hand side. No solutions when n < k.' },
    ],
    templates: [
      { name: 'Two solutions', vals: { h: 0, k: 0, n: 3 } },
      { name: 'One solution',  vals: { h: 0, k: 3, n: 3 } },
      { name: 'No solution',   vals: { h: 0, k: 5, n: 2 } },
    ],
    f: p => x => Math.abs(x - p.h) + p.k,
    expr: p => formatAbs(p),
    rowLabel: 'f(x) \u2212 n',
  },
};

// ---------- expression formatters (return arrays of {text, cls}) ----------
// cls: 'plain', 'n' (for the n parameter), or empty

function term(coef, varStr, isFirst) {
  if (coef === 0) return null;
  const abs = Math.abs(coef);
  const sign = coef < 0 ? '\u2212' : (isFirst ? '' : '+');
  const num = (abs === 1 && varStr) ? '' : String(abs);
  const prefix = isFirst ? sign : ` ${sign} `;
  return prefix + num + varStr;
}

function formatLinear(p) {
  const parts = [];
  const t1 = term(p.a, 'x', true);
  const t2 = term(p.b, '', t1 === null);
  if (t1) parts.push(t1);
  if (t2) parts.push(t2);
  if (parts.length === 0) parts.push('0');
  return parts.join('');
}

function formatQuadratic(p) {
  const parts = [];
  const t1 = term(p.a, 'x\u00B2', true);
  const t2 = term(p.b, 'x', t1 === null);
  const t3 = term(p.c, '', t1 === null && t2 === null);
  if (t1) parts.push(t1);
  if (t2) parts.push(t2);
  if (t3) parts.push(t3);
  if (parts.length === 0) parts.push('0');
  return parts.join('');
}

function formatCubic(p) {
  const parts = [];
  const t1 = term(p.a, 'x\u00B3', true);
  const t2 = term(p.b, 'x', t1 === null);
  const t3 = term(p.c, '', t1 === null && t2 === null);
  if (t1) parts.push(t1);
  if (t2) parts.push(t2);
  if (t3) parts.push(t3);
  if (parts.length === 0) parts.push('0');
  return parts.join('');
}

function formatAbs(p) {
  const inside = p.h === 0 ? 'x' : `x ${p.h < 0 ? '+' : '\u2212'} ${Math.abs(p.h)}`;
  let s = `|${inside}|`;
  if (p.k !== 0) s += ` ${p.k < 0 ? '\u2212' : '+'} ${Math.abs(p.k)}`;
  return s;
}