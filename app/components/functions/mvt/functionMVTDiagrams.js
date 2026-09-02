// Frozen-state SVGs for the Mean Value Theorem tool (Line 1 anchor mesh).
//
// FunctionMVT hands a declarative scene to FunctionVisualizerCorePro, so this
// module rebuilds the same scene per family — the curve, the secant through the
// two endpoints, one tangent line per solution c, the dashed verticals at a and
// b, and the endpoint / c markers — then serialises it through the core's own
// generateSVG (see ../frozenSvg). The tool's FAMILIES table is imported, and
// findCs / autoYBounds are ported verbatim, so the c values drawn here are the
// ones the tool finds, not an analytic shortcut.
//
// Every state uses that family's own defaultInterval, which is the [a, b] the
// tool loads when you pick it.

import { FAMILIES } from './FunctionMVT';
import frozenSvg from '../frozenSvg';

const COL = { f: '#3b82f6', sec: '#1e3a8a', tan: '#60a5fa', link: '#94a3b8' };

// fmt, ported from the component
function fmt(v, d = 3) {
  if (!Number.isFinite(v)) return '—';
  const r = Math.round(v * Math.pow(10, d)) / Math.pow(10, d);
  return Math.abs(r - Math.round(r)) < 1e-9 ? String(Math.round(r)) : String(r);
}

// findCs, ported verbatim: solve f'(c) = m on (a, b) by sampling + bisection
function findCs(fam, a, b, m, samples = 800) {
  if (!(b > a)) return [];
  const g = (x) => fam.dfn(x) - m;
  const dx = (b - a) / samples;
  const roots = [];
  let prev = g(a);
  for (let i = 1; i <= samples; i++) {
    const x = a + i * dx;
    const cur = g(x);
    if (!Number.isFinite(prev) || !Number.isFinite(cur)) { prev = cur; continue; }
    if (prev === 0) { roots.push(a + (i - 1) * dx); prev = cur; continue; }
    if (prev * cur < 0) {
      let lo = a + (i - 1) * dx, hi = x;
      for (let j = 0; j < 50; j++) {
        const mid = (lo + hi) / 2;
        const gm = g(mid);
        if (!Number.isFinite(gm) || Math.abs(gm) < 1e-12) { lo = hi = mid; break; }
        if (g(lo) * gm < 0) hi = mid; else lo = mid;
      }
      roots.push((lo + hi) / 2);
    }
    prev = cur;
  }
  const out = [];
  for (const r of roots) {
    if (!out.length || Math.abs(r - out[out.length - 1]) > Math.max(dx * 2, 1e-6)) out.push(r);
  }
  return out;
}

// autoYBounds, ported from the component
function autoYBounds(fam, xMin, xMax) {
  let lo = Infinity, hi = -Infinity;
  const N = 300;
  for (let i = 0; i <= N; i++) {
    const t = xMin + (i / N) * (xMax - xMin);
    const y = fam.fn(t);
    if (Number.isFinite(y)) { if (y < lo) lo = y; if (y > hi) hi = y; }
  }
  hi = Math.min(hi, 20);
  lo = Math.max(lo, -20);
  lo = Math.min(lo, 0);
  hi = Math.max(hi, 0);
  const pad = (hi - lo) * 0.18 + 0.5;
  return { yMin: lo - pad, yMax: hi + pad };
}

// Degenerate case: when f′ is constant it equals the secant slope at EVERY
// point of the interval, so findCs returns one root per sample step — several
// hundred of them, all describing the same line. The live tool draws them all;
// a static asset must not, since each tangent is a 500-point polyline. Above
// this many solutions the frozen scene keeps a small evenly-spaced subset,
// which is visually identical because the lines coincide.
const MAX_DRAWN_CS = 4;

function sceneFor(key) {
  const fam = FAMILIES[key];
  const [a, b] = fam.defaultInterval;
  const fa = fam.fn(a), fb = fam.fn(b);
  const m = (fb - fa) / (b - a);
  const all = findCs(fam, a, b, m);
  const degenerate = all.length > MAX_DRAWN_CS;
  const cs = degenerate
    ? Array.from({ length: MAX_DRAWN_CS }, (_, i) => all[Math.round((i + 0.5) * all.length / MAX_DRAWN_CS) - 1])
    : all;
  return { fam, a, b, fa, fb, m, cs, allCount: all.length, degenerate };
}

function freeze(key) {
  const { fam, a, b, fa, fb, m, cs } = sceneFor(key);

  const functions = [
    { fn: fam.fn, color: COL.f, label: 'f', formula: fam.eq, visible: true, stroke: 2.25 },
    {
      fn: (x) => fa + m * (x - a),
      color: COL.sec,
      label: 'secant',
      formula: `y = f(a) + ${fmt(m)}·(x − a)`,
      visible: true,
      stroke: 2,
    },
  ];
  cs.forEach((c, i) => {
    const fc = fam.fn(c);
    functions.push({
      fn: (x) => fc + m * (x - c),
      color: COL.tan,
      label: cs.length > 1 ? `tangent at c${i + 1}` : 'tangent at c',
      formula: `y = f(c) + ${fmt(m)}·(x − c)`,
      visible: true,
      stroke: 2,
    });
  });

  const verticalLines = [
    { x: a, color: COL.link, stroke: 1.25, pattern: [5, 4], label: `a = ${fmt(a, 2)}` },
    { x: b, color: COL.link, stroke: 1.25, pattern: [5, 4], label: `b = ${fmt(b, 2)}` },
  ];

  const customPoints = [];
  if (Number.isFinite(fa)) customPoints.push({ x: a, y: fa, color: COL.sec, label: `(a, f(a)) = (${fmt(a, 2)}, ${fmt(fa)})` });
  if (Number.isFinite(fb)) customPoints.push({ x: b, y: fb, color: COL.sec, label: `(b, f(b)) = (${fmt(b, 2)}, ${fmt(fb)})` });
  cs.forEach((c, i) => {
    const y = fam.fn(c);
    if (!Number.isFinite(y)) return;
    customPoints.push({ x: c, y, color: COL.tan, label: cs.length > 1 ? `c${i + 1} = ${fmt(c)}` : `c = ${fmt(c)}` });
  });

  return frozenSvg({
    functions,
    viewport: { xMin: -5, xMax: 5, ...autoYBounds(fam, -5, 5) },
    verticalLines,
    customPoints,
    width: 880,
    height: 460,
    labelMode: 'none',
  });
}

// what each frozen state reports, so the page prose quotes the tool
export const solutions = Object.fromEntries(
  Object.keys(FAMILIES).map((k) => {
    const { a, b, fa, fb, m, cs, allCount, degenerate } = sceneFor(k);
    return [k, { a, b, fa, fb, m, cs, drawn: cs.length, found: allCount, degenerate }];
  })
);

const functionMVTDiagrams = {
  identity: freeze('identity'),
  quadratic: freeze('quadratic'),
  cubic: freeze('cubic'),
  sine: freeze('sine'),
  cosine: freeze('cosine'),
  exponential: freeze('exponential'),
};

export default functionMVTDiagrams;
