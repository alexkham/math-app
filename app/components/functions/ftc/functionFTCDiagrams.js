// Frozen-state SVGs for the Fundamental Theorem tool (Line 1 anchor mesh).
//
// FunctionFTC hands a declarative scene to FunctionVisualizerCorePro, so this
// module rebuilds the same scene per family — the integrand f solid, the
// accumulator F dashed, the shaded region under f from a to x, the dashed
// verticals at a and x, and the two marker dots at (x, f(x)) and (x, F(x)) —
// then serialises it through the core's own generateSVG (see ../frozenSvg).
// The tool's FAMILIES table is imported and autoYBounds is ported verbatim, so
// the curves and the framing are the tool's own.
//
// Every state uses the component's defaults: a = 0, x = 2.

import { FAMILIES } from './FunctionFTC';
import frozenSvg from '../frozenSvg';

const COL = {
  f: '#3b82f6',
  F: '#1e3a8a',
  link: '#94a3b8',
  shade: 'rgba(59, 130, 246, 0.22)',
  shadeBorder: 'rgba(59, 130, 246, 0.6)',
};

const A = 0, X = 2;

// fmt, ported from the component
function fmt(v, d = 3) {
  if (!Number.isFinite(v)) return '—';
  const r = Math.round(v * Math.pow(10, d)) / Math.pow(10, d);
  return Math.abs(r - Math.round(r)) < 1e-9 ? String(Math.round(r)) : String(r);
}

// autoYBounds, ported verbatim — note it fits BOTH f and F, which is why the
// exponential state is framed so much taller than the polynomial ones
function autoYBounds(fam, a, xMin, xMax) {
  let lo = Infinity, hi = -Infinity;
  const N = 300;
  for (let i = 0; i <= N; i++) {
    const t = xMin + (i / N) * (xMax - xMin);
    const y1 = fam.fn(t);
    const y2 = fam.F(a, t);
    if (Number.isFinite(y1)) { if (y1 < lo) lo = y1; if (y1 > hi) hi = y1; }
    if (Number.isFinite(y2)) { if (y2 < lo) lo = y2; if (y2 > hi) hi = y2; }
  }
  hi = Math.min(hi, 15);
  lo = Math.max(lo, -15);
  lo = Math.min(lo, 0);
  hi = Math.max(hi, 0);
  const pad = (hi - lo) * 0.15 + 0.5;
  return { yMin: lo - pad, yMax: hi + pad };
}

function freeze(key) {
  const fam = FAMILIES[key];
  const fx = fam.fn(X);
  const Fx = fam.F(A, X);

  const functions = [
    { fn: fam.fn, color: COL.f, label: 'f', formula: fam.eq, visible: true, stroke: 2.25 },
    { fn: (t) => fam.F(A, t), color: COL.F, label: 'F', formula: fam.Feq, visible: true, stroke: 2, pattern: [9, 5] },
  ];

  const shadedRegions = [{
    type: 'underCurve',
    functionIndex: 0,
    from: Math.min(A, X),
    to: Math.max(A, X),
    color: COL.shade,
    borderColor: COL.shadeBorder,
    borderStroke: 1,
  }];

  const verticalLines = [
    { x: A, color: COL.link, stroke: 1, pattern: [4, 4], label: `a = ${fmt(A, 2)}` },
    { x: X, color: COL.link, stroke: 1.5, pattern: [5, 4], label: `x = ${fmt(X, 2)}` },
  ];

  const customPoints = [];
  if (Number.isFinite(fx)) customPoints.push({ x: X, y: fx, color: COL.f, label: `f(x) = ${fmt(fx)}` });
  if (Number.isFinite(Fx)) customPoints.push({ x: X, y: Fx, color: COL.F, label: `F(x) = ${fmt(Fx)}` });

  return frozenSvg({
    functions,
    viewport: { xMin: -5, xMax: 5, ...autoYBounds(fam, A, -5, 5) },
    shadedRegions,
    verticalLines,
    customPoints,
    width: 880,
    height: 460,
    labelMode: 'none',
  });
}

// the readings each frozen state shows, so the page prose quotes the tool
export const readings = Object.fromEntries(
  Object.keys(FAMILIES).map((k) => {
    const fam = FAMILIES[k];
    return [k, { a: A, x: X, fx: fam.fn(X), Fx: fam.F(A, X), eq: fam.eq, Feq: fam.Feq }];
  })
);

const functionFTCDiagrams = {
  identity: freeze('identity'),
  quadratic: freeze('quadratic'),
  cubic: freeze('cubic'),
  sine: freeze('sine'),
  cosine: freeze('cosine'),
  exponential: freeze('exponential'),
};

export default functionFTCDiagrams;
