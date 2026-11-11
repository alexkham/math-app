// mathAnimationScenes_v2.js
// Scenes as data for MathAnimation. Each factory takes options and returns a scene object,
// so one scene definition serves many pages: matrixMultiplyScene({ a: [[2, 0], [1, 3]], b: [[1, 4], [5, 2]] }).

const clamp01 = (value) => Math.max(0, Math.min(1, value));
const seg = (t, a, b) => clamp01((t - a) / (b - a));
const smooth = (t) => t * t * (3 - 2 * t);

// ---------------------------------------------------------------------------------------------
// Layout helpers for symbol scenes (pixel layout). Widths are estimates, so scenes can be built
// without a canvas (server rendering included).
// ---------------------------------------------------------------------------------------------

const charWidth = (ch) => (ch === '(' || ch === ')' ? 0.34 : ch === '.' || ch === ',' ? 0.28 : 0.58);

export const textWidth = (text, size = 28) => String(text).split('').reduce((sum, ch) => sum + charWidth(ch), 0) * size;

// Numbers get a real minus sign and at most two decimals; anything else is shown as given.
export const formatEntry = (value) => (typeof value !== 'number'
  ? String(value)
  : (value < 0 ? '−' : '') + String(Math.round(Math.abs(value) * 100) / 100));

// Column centres, row centres and bracket edges of a matrix whose left bracket sits at x.
export function layoutMatrix(options) {
  const { widths, rows, x, cy, rowGap = 70, colGap = 30, pad = 16 } = options;
  const cols = [];
  let cursor = x + pad;
  widths.forEach((width, index) => {
    cols.push(cursor + width / 2);
    cursor += width + (index < widths.length - 1 ? colGap : 0);
  });
  const ys = Array.from({ length: rows }, (unused, i) => cy + (i - (rows - 1) / 2) * rowGap);
  const half = ((rows - 1) * rowGap) / 2 + 34;
  return { cols, ys, left: x, right: cursor + pad, top: cy - half, bottom: cy + half };
}

// Slot offsets of "(a)(b) + (a)(b) + ..." measured from the left edge of the expression.
export function layoutProductSum(aWidths, bWidths, size = 28) {
  const paren = textWidth('(', size);
  const gap = size * 0.2;
  const between = size * 0.16;
  const plusWidth = size * 2.07;
  let cursor = 0;
  const terms = aWidths.map((aWidth, j) => {
    const slot = {};
    if (j > 0) {
      slot.plus = cursor + plusWidth / 2;
      cursor += plusWidth;
    }
    slot.lp = cursor + paren / 2;
    cursor += paren + gap;
    slot.a = cursor + aWidth / 2;
    cursor += aWidth + gap;
    slot.rp = cursor + paren / 2;
    cursor += paren + between;
    slot.lp2 = cursor + paren / 2;
    cursor += paren + gap;
    slot.b = cursor + bWidths[j] / 2;
    cursor += bWidths[j] + gap;
    slot.rp2 = cursor + paren / 2;
    cursor += paren;
    return slot;
  });
  return { terms, width: cursor };
}

// ---------------------------------------------------------------------------------------------
// Matrix multiplication: each pair is highlighted, copies fly into the result and group into
// products; optionally every entry then collapses to its value.
// a: m x n array. b: n x p array, or a flat array for a column vector. Entries: numbers or strings.
// ---------------------------------------------------------------------------------------------
export function matrixMultiplyScene(options = {}) {
  const {
    a = [[1, -3], [2, 4]],
    b = [5, 7],
    collapse = true,
    stepMs = 2200,
    size = 28,
    rowGap = 70,
    arc = 26,
  } = options;

  const B = Array.isArray(b[0]) ? b : b.map((value) => [value]);
  const m = a.length;
  const n = a[0].length;
  const pCols = B[0].length;
  if (B.length !== n) {
    throw new Error('matrixMultiplyScene: a has ' + n + ' columns but b has ' + B.length + ' rows');
  }

  const fa = a.map((row) => row.map(formatEntry));
  const fb = B.map((row) => row.map(formatEntry));
  const numeric = a.every((row) => row.every((v) => typeof v === 'number'))
    && B.every((row) => row.every((v) => typeof v === 'number'));
  const doCollapse = collapse && numeric;
  const fr = doCollapse
    ? a.map((row) => B[0].map((unused, c) => formatEntry(row.reduce((sum, v, j) => sum + v * B[j][c], 0))))
    : null;

  const minWidth = size * 0.7;
  const colWidths = (matrix) => matrix[0].map((unused, j) => Math.max(minWidth, ...matrix.map((row) => textWidth(row[j], size))));
  const range = (count) => Array.from({ length: count }, (unused, i) => i);

  const aWidths = colWidths(fa);
  const expressions = range(pCols).map((c) => layoutProductSum(aWidths, fb.map((row) => textWidth(row[c], size)), size));

  const rowsMax = Math.max(m, n);
  const ph = (rowsMax - 1) * rowGap + 240;
  const cy = ph / 2;
  const LA = layoutMatrix({ widths: aWidths, rows: m, x: 10, cy, rowGap });
  const LB = layoutMatrix({ widths: colWidths(fb), rows: n, x: LA.right + 20, cy, rowGap });
  const eqX = LB.right + 24;
  const LR = layoutMatrix({ widths: expressions.map((e) => e.width), rows: m, x: eqX + 24, cy, rowGap, colGap: 48, pad: 20 });
  const LN = doCollapse ? layoutMatrix({ widths: colWidths(fr), rows: m, x: eqX + 24, cy, rowGap }) : LR;
  const pw = LR.right + 10;

  const terms = m * pCols * n;
  const duration = 1500 + terms * stepMs + (doCollapse ? 2200 : 0) + 500;
  const qStart = 1500 / duration;
  const qEnd = (1500 + terms * stepMs) / duration;
  const eStart = qEnd + 300 / duration;

  const tracks = [
    { param: 'a0', to: 1, start: 0, end: 1200 / duration },
    { param: 'q', to: terms, start: qStart, end: qEnd, ease: 'linear' },
  ];
  if (doCollapse) tracks.push({ param: 'e', to: 1, start: eStart, end: eStart + 1700 / duration, ease: 'linear' });

  const intro = (p) => p.a0;
  const fade = (p) => 1 - seg(p.e, 0, 0.4);
  const chips = [];
  const flying = [];

  let k = 0;
  range(m).forEach((i) => range(pCols).forEach((c) => range(n).forEach((j) => {
    const step = k;
    k += 1;
    const local = (p) => clamp01(p.q - step);
    const chipAlpha = (p) => {
      const l = p.q - step;
      return l <= 0 || l >= 1 ? 0 : Math.min(seg(l, 0, 0.12), 1 - seg(l, 0.85, 1));
    };
    const slot = expressions[c].terms[j];
    const left = LR.cols[c] - expressions[c].width / 2;
    const y = LR.ys[i];
    const fromA = [LA.cols[j], LA.ys[i]];
    const fromB = [LB.cols[c], LB.ys[j]];
    const blend = (p) => seg(local(p), 0.92, 1);
    const symbolAlpha = (p) => smooth(seg(local(p), 0.55, 0.8)) * fade(p);
    const flyAlpha = (p) => seg(local(p), 0.14, 0.22) * fade(p);
    const fly = (from, toX) => (p) => {
      const u = smooth(seg(local(p), 0.18, 0.7));
      return [from[0] + (toX - from[0]) * u, from[1] + (y - from[1]) * u - arc * Math.sin(Math.PI * u)];
    };
    const moving = { type: 'token', size, color: 'accent', colorTo: 'primary', blend };
    const symbol = (text, x) => ({ ...moving, symbol: true, text, at: [left + x, y], opacity: symbolAlpha });

    chips.push({ type: 'chip', size, text: fa[i][j], at: fromA, opacity: chipAlpha });
    chips.push({ type: 'chip', size, text: fb[j][c], at: fromB, opacity: chipAlpha });
    if (j > 0) flying.push(symbol('+', slot.plus));
    flying.push(symbol('(', slot.lp), symbol(')', slot.rp), symbol('(', slot.lp2), symbol(')', slot.rp2));
    flying.push({ ...moving, text: fa[i][j], at: fly(fromA, left + slot.a), opacity: flyAlpha });
    flying.push({ ...moving, text: fb[j][c], at: fly(fromB, left + slot.b), opacity: flyAlpha });
  })));

  const bracketPair = (layout) => [
    { type: 'bracket', side: 'left', x: layout.left, y0: layout.top, y1: layout.bottom, opacity: intro },
    { type: 'bracket', side: 'right', x: layout.right, y0: layout.top, y1: layout.bottom, opacity: intro },
  ];
  const entries = (formatted, layout) => formatted.flatMap((row, i) => row.map((text, j) => (
    { type: 'token', size, text, at: [layout.cols[j], layout.ys[i]], opacity: intro }
  )));

  const objects = [
    ...chips,
    ...bracketPair(LA),
    ...bracketPair(LB),
    { type: 'bracket', side: 'left', x: LR.left, y0: LR.top, y1: LR.bottom, opacity: intro },
    {
      type: 'bracket',
      side: 'right',
      x: (p) => LR.right + (LN.right - LR.right) * smooth(seg(p.e, 0.3, 0.8)),
      y0: LR.top,
      y1: LR.bottom,
      opacity: intro,
    },
    { type: 'token', size, symbol: true, text: '=', at: [eqX, cy], opacity: intro },
    ...entries(fa, LA),
    ...entries(fb, LB),
    ...flying,
  ];
  if (doCollapse) {
    fr.forEach((row, i) => row.forEach((text, c) => objects.push(
      { type: 'token', size, text, color: 'accent', at: [LN.cols[c], LN.ys[i]], opacity: (p) => seg(p.e, 0.5, 0.9) },
    )));
  }

  return {
    duration,
    height: ph,
    view: { px: [pw, ph], shift: (p) => [((LR.right - LN.right) / 2) * smooth(seg(p.e, 0.3, 0.8)), 0] },
    params: { a0: 0, q: 0, e: 0 },
    tracks,
    objects,
  };
}

// ---------------------------------------------------------------------------------------------
// Linear transformation of the plane.
// matrix = [a, b, c, d]: basis vector i lands on (a, b), basis vector j lands on (c, d).
// ---------------------------------------------------------------------------------------------
export function linearTransformScene(options = {}) {
  const { matrix = [2, 1, -1, 1], duration = 7000, ghost = true } = options;
  const unitSquare = [[0, 0], [1, 0], [1, 1], [0, 1]];
  const M = (p) => [
    1 + (matrix[0] - 1) * p.k,
    matrix[1] * p.k,
    matrix[2] * p.k,
    1 + (matrix[3] - 1) * p.k,
  ];
  return {
    duration,
    view: { x: [-7.1, 7.1], y: [-3.96, 3.96], equal: true },
    params: { g: 0, v: 0, s: 0, k: 0 },
    tracks: [
      { param: 'g', to: 1, start: 0, end: 0.2 },
      { param: 'v', to: 1, start: 0.2, end: 0.35 },
      { param: 's', to: 1, start: 0.35, end: 0.45, ease: 'linear' },
      { param: 'k', to: 1, start: 0.5, end: 0.9 },
    ],
    objects: [
      { type: 'baseGrid' },
      { type: 'grid', matrix: M, progress: (p) => p.g },
      { type: 'polygon', points: unitSquare, color: 'ghost', fill: false, dashed: true, opacity: (p) => (ghost ? 0.7 * p.k : 0) },
      { type: 'polygon', points: unitSquare, matrix: M, color: 'accent', opacity: (p) => p.s },
      { type: 'vector', to: (p) => [p.v, 0], matrix: M, color: 'primary', label: 'i', labelOffset: [14, 15] },
      { type: 'vector', to: (p) => [0, p.v], matrix: M, color: 'accent', label: 'j', labelOffset: [-16, -11] },
    ],
  };
}

// ---------------------------------------------------------------------------------------------
// Derivative: the secant through (a, f(a)) and (a + h, f(a + h)) settles into the tangent as h -> 0.
// ---------------------------------------------------------------------------------------------
export function derivativeScene(options = {}) {
  const {
    fn = (x) => 0.25 * x * x + 0.4,
    a = 1.2,
    h0 = 2,
    domain = [0, 3.45],
    view = { x: [0, 4.4], y: [0, 3.5], equal: false, pad: [28, 30, 45, 56] },
    duration = 9000,
  } = options;
  const slope = (h) => (h > 1e-4 ? (fn(a + h) - fn(a)) / h : (fn(a + 1e-4) - fn(a - 1e-4)) / 2e-4);
  return {
    duration,
    view,
    params: { g: 0, c: 0, s: 0, h: h0 },
    tracks: [
      { param: 'g', to: 1, start: 0, end: 0.15 },
      { param: 'c', to: 1, start: 0.15, end: 0.38 },
      { param: 's', to: 1, start: 0.4, end: 0.5 },
      { param: 'h', to: 0, start: 0.5, end: 0.9 },
    ],
    derive: (p) => ({ m: slope(p.h) }),
    objects: [
      { type: 'baseGrid' },
      { type: 'axes', progress: (p) => p.g },
      { type: 'curve', fn, domain, progress: (p) => p.c },
      {
        type: 'polygon',
        points: (p) => [[a, fn(a)], [a + p.h, fn(a)], [a + p.h, fn(a + p.h)]],
        closed: false,
        dashed: true,
        color: 'axis',
        opacity: (p) => 0.6 * p.s * Math.min(1, p.h / 0.5),
      },
      { type: 'line', through: [a, fn(a)], slope: (p) => p.m, extend: true, color: 'accent', opacity: (p) => p.s },
      { type: 'point', at: (p) => [a + p.h, fn(a + p.h)], color: 'accent', scale: (p) => p.s },
      { type: 'point', at: [a, fn(a)], color: 'primary', r: 4.5, scale: (p) => p.s },
      {
        type: 'readout',
        lines: (p) => ['h = ' + p.h.toFixed(2), { text: 'slope = ' + p.m.toFixed(2), color: 'accent' }],
        opacity: (p) => p.s,
      },
    ],
  };
}

// ---------------------------------------------------------------------------------------------
// Integral: left Riemann sums refine through the given steps, then dissolve into the exact area.
// ---------------------------------------------------------------------------------------------
export function riemannScene(options = {}) {
  const {
    fn = (x) => 1.7 + 0.9 * Math.sin(1.3 * x) + 0.12 * x,
    from = 0.5,
    to = 3.9,
    steps = [4, 8, 16, 32, 64],
    domain = [0, 4.2],
    view = { x: [0, 4.4], y: [0, 3.5], equal: false, pad: [28, 30, 45, 56] },
    duration = 9000,
  } = options;
  const sum = (count, shift) => {
    const w = (to - from) / count;
    let total = 0;
    for (let i = 0; i < count; i++) total += fn(from + (i + shift) * w) * w;
    return total;
  };
  const area = sum(4000, 0.5);
  const last = steps.length - 1;
  return {
    duration,
    view,
    params: { g: 0, c: 0, q: 0, e: 0 },
    tracks: [
      { param: 'g', to: 1, start: 0, end: 0.15 },
      { param: 'c', to: 1, start: 0.15, end: 0.38 },
      { param: 'q', to: steps.length, start: 0.4, end: 0.85, ease: 'linear' },
      { param: 'e', to: 1, start: 0.87, end: 0.97 },
    ],
    derive: (p) => {
      const idx = Math.min(last, Math.floor(p.q));
      const u = p.q - idx;
      return { idx, u, fin: Math.min(1, u * 3), on: p.t >= 0.4 ? 1 : 0 };
    },
    objects: [
      { type: 'baseGrid' },
      { type: 'axes', progress: (p) => p.g },
      {
        type: 'rects',
        fn,
        from,
        to,
        n: (p) => steps[Math.max(0, p.idx - 1)],
        opacity: (p) => (p.idx > 0 ? p.on * (1 - p.fin) * (1 - p.e) : 0),
      },
      {
        type: 'rects',
        fn,
        from,
        to,
        n: (p) => steps[p.idx],
        grow: (p) => (p.idx === 0 ? smooth(Math.min(1, p.u * 1.5)) : 1),
        opacity: (p) => p.on * (p.idx === 0 ? 1 : p.fin) * (1 - p.e),
      },
      { type: 'area', fn, from, to, fillOpacity: 0.3, opacity: (p) => p.e },
      { type: 'curve', fn, domain, progress: (p) => p.c },
      {
        type: 'readout',
        lines: (p) => (p.e > 0.5
          ? ['n → ∞', { text: 'area = ' + area.toFixed(3), color: 'accent' }]
          : ['n = ' + steps[p.idx], { text: 'sum = ' + sum(steps[p.idx], 0).toFixed(3), color: 'accent' }]),
        opacity: (p) => p.on,
      },
    ],
  };
}

export const scenes = {
  matrixMultiply: matrixMultiplyScene(),
  linearTransform: linearTransformScene(),
  derivative: derivativeScene(),
  riemann: riemannScene(),
};
