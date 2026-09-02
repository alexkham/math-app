// Frozen-state SVGs for the Optimization tool (Line 1 anchor mesh).
//
// FunctionOptimization hands a declarative scene to FunctionVisualizerCorePro,
// so this module rebuilds the same scene per family — f solid, f′ dashed, f″
// dotted, the faint band over the search interval, a drop line at each critical
// point, and a marker per critical point coloured by its classification — then
// serialises it through the core's own generateSVG (see ../frozenSvg).
//
// findCriticalPoints, classify and autoYBounds are ported verbatim, so the
// points marked here are the ones the tool finds and the labels are the ones it
// assigns, including the inconclusive and touch-zero cases.
//
// Every state uses that family's own defaultInterval.

import { FAMILIES } from './FunctionOptimization';
import frozenSvg from '../frozenSvg';

const COL = { f: '#3b82f6', fp: '#1e3a8a', fpp: '#60a5fa', link: '#94a3b8' };
const KIND_COLORS = {
  max: COL.fp,
  min: COL.f,
  infl: COL.fpp,
  inconclusive: '#94a3b8',
};

const fmt = (v, d = 3) => {
  if (!Number.isFinite(v)) return '—';
  const r = Math.round(v * Math.pow(10, d)) / Math.pow(10, d);
  return Math.abs(r - Math.round(r)) < 1e-9 ? String(Math.round(r)) : String(r);
};

// findCriticalPoints, ported verbatim (sign-change zeros plus touch zeros)
function findCriticalPoints(fam, a, b, samples = 800) {
  if (!(b > a)) return [];
  const dx = (b - a) / samples;
  const roots = [];

  let prevV = fam.dfn(a), prevX = a;
  for (let i = 1; i <= samples; i++) {
    const x = a + i * dx;
    const v = fam.dfn(x);
    if (!Number.isFinite(prevV) || !Number.isFinite(v)) { prevV = v; prevX = x; continue; }
    if (prevV === 0) { roots.push(prevX); prevV = v; prevX = x; continue; }
    if (prevV * v < 0) {
      let lo = prevX, hi = x;
      for (let j = 0; j < 50; j++) {
        const mid = (lo + hi) / 2;
        const gm = fam.dfn(mid);
        if (!Number.isFinite(gm) || Math.abs(gm) < 1e-12) { lo = hi = mid; break; }
        if (fam.dfn(lo) * gm < 0) hi = mid; else lo = mid;
      }
      roots.push((lo + hi) / 2);
    }
    prevV = v; prevX = x;
  }

  const N = 200;
  const ddx = (b - a) / N;
  for (let i = 1; i < N; i++) {
    const xL = a + (i - 1) * ddx, xM = a + i * ddx, xR = a + (i + 1) * ddx;
    const vL = Math.abs(fam.dfn(xL));
    const vM = Math.abs(fam.dfn(xM));
    const vR = Math.abs(fam.dfn(xR));
    if (vM < 1e-3 && vM < vL && vM < vR) {
      let lo = xL, hi = xR;
      for (let j = 0; j < 40; j++) {
        const m1 = lo + (hi - lo) / 3;
        const m2 = hi - (hi - lo) / 3;
        if (Math.abs(fam.dfn(m1)) < Math.abs(fam.dfn(m2))) hi = m2;
        else lo = m1;
      }
      const xT = (lo + hi) / 2;
      if (Math.abs(fam.dfn(xT)) < 1e-4) {
        if (!roots.some((r) => Math.abs(r - xT) < dx * 3)) roots.push(xT);
      }
    }
  }

  roots.sort((p, q) => p - q);
  const out = [];
  for (const r of roots) {
    if (!out.length || Math.abs(r - out[out.length - 1]) > Math.max(dx * 2, 1e-4)) out.push(r);
  }
  return out;
}

// classify, ported verbatim (2nd-derivative test with 1st-derivative fallback)
function classify(fam, x) {
  const fpp = fam.ddfn(x);
  if (Math.abs(fpp) < 1e-6) {
    const eps = 1e-3;
    const left = fam.dfn(x - eps);
    const right = fam.dfn(x + eps);
    if (left * right > 0) return { kind: 'infl', label: 'inflection (touch)' };
    if (left > 0 && right < 0) return { kind: 'max', label: 'local max' };
    if (left < 0 && right > 0) return { kind: 'min', label: 'local min' };
    return { kind: 'inconclusive', label: 'inconclusive' };
  }
  if (fpp > 0) return { kind: 'min', label: 'local min' };
  return { kind: 'max', label: 'local max' };
}

// autoYBounds, ported verbatim — fits f, f′ and f″ together
function autoYBounds(fam, xMin, xMax) {
  let lo = Infinity, hi = -Infinity;
  const N = 300;
  for (let i = 0; i <= N; i++) {
    const t = xMin + (i / N) * (xMax - xMin);
    [fam.fn(t), fam.dfn(t), fam.ddfn(t)].forEach((y) => {
      if (Number.isFinite(y)) { if (y < lo) lo = y; if (y > hi) hi = y; }
    });
  }
  hi = Math.min(hi, 20);
  lo = Math.max(lo, -20);
  lo = Math.min(lo, 0);
  hi = Math.max(hi, 0);
  const pad = (hi - lo) * 0.15 + 0.5;
  return { yMin: lo - pad, yMax: hi + pad };
}

function criticalPointsFor(key) {
  const fam = FAMILIES[key];
  const [a, b] = fam.defaultInterval;
  return findCriticalPoints(fam, a, b).map((x) => ({
    x, fx: fam.fn(x), fppx: fam.ddfn(x), ...classify(fam, x),
  }));
}

function freeze(key) {
  const fam = FAMILIES[key];
  const [a, b] = fam.defaultInterval;
  const cps = criticalPointsFor(key);

  const functions = [
    { fn: fam.fn, color: COL.f, label: 'f', formula: fam.eq, visible: true, stroke: 2.25 },
    { fn: fam.dfn, color: COL.fp, label: "f'", formula: "f'(x)", visible: true, stroke: 2, pattern: [9, 5] },
    { fn: fam.ddfn, color: COL.fpp, label: "f''", formula: "f''(x)", visible: true, stroke: 2, pattern: [2, 4] },
  ];

  return frozenSvg({
    functions,
    viewport: { xMin: -5, xMax: 5, ...autoYBounds(fam, -5, 5) },
    shadedRegions: [{ type: 'xRange', from: a, to: b, color: 'rgba(59, 130, 246, 0.05)' }],
    verticalLines: cps.map((cp) => ({ x: cp.x, color: COL.link, stroke: 1, pattern: [3, 4] })),
    customPoints: cps.map((cp, i) => ({
      x: cp.x, y: cp.fx, color: KIND_COLORS[cp.kind], label: `${i + 1}: ${cp.label}`,
    })),
    width: 880,
    height: 460,
    labelMode: 'none',
  });
}

// what the tool finds in each frozen state, so the page prose quotes it
export const criticalPoints = Object.fromEntries(
  Object.keys(FAMILIES).map((k) => [k, {
    interval: FAMILIES[k].defaultInterval,
    points: criticalPointsFor(k).map((cp) => ({
      x: cp.x, fx: cp.fx, fpp: cp.fppx, kind: cp.kind, label: cp.label, show: fmt(cp.x),
    })),
  }])
);

const functionOptimizationDiagrams = {
  quadratic: freeze('quadratic'),
  'cubic-bump': freeze('cubic-bump'),
  cubic: freeze('cubic'),
  'quartic-w': freeze('quartic-w'),
  sine: freeze('sine'),
  gaussian: freeze('gaussian'),
};

export default functionOptimizationDiagrams;
