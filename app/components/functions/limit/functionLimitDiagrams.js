// Frozen-state SVGs for the Limit Explorer (Line 1 anchor mesh).
//
// FunctionLimit hands a declarative scene to FunctionVisualizerCorePro, so this
// module rebuilds the same scene per family — the curve(s) with their piecewise
// domains, the dashed vertical at x = c, the L⁻/L⁺ reference lines, the f(c)
// marker, and the two approach markers at c ± ε — then serialises it through
// the core's own generateSVG (see ../frozenSvg). The tool's FAMILIES table is
// imported, so the curves and limit values here are the tool's own.
//
// Every state is frozen at the component's initialEps = 0.5, the ε the tool
// opens with, and at that family's own centre c.

import { FAMILIES } from './FunctionLimit';
import frozenSvg from '../frozenSvg';

const COL = { f: '#3b82f6', fp: '#1e3a8a', limit: '#60a5fa', link: '#94a3b8', approach: '#3b82f6' };
const EPS = 0.5;

// fmt, ported from the component
const fmt = (v, d = 2) => {
  if (v === null || v === undefined) return 'DNE';
  if (Number.isNaN(v)) return 'undefined';
  if (!Number.isFinite(v)) return v > 0 ? '+∞' : '−∞';
  const r = Math.round(v * 1e6) / 1e6;
  return Math.abs(r - Math.round(r)) < 1e-9 ? String(Math.round(r)) : r.toFixed(d);
};

// autoViewBounds, ported from the component
function autoViewBounds(fam) {
  const half = 4;
  let yMin = -4, yMax = 4;
  if (fam.type === 'continuous' || fam.type === 'removable') { yMin = -1; yMax = 4; }
  else if (fam.type === 'onesided') { yMin = -1; yMax = 3; }
  else if (fam.type === 'oscillating') { yMin = -1.5; yMax = 1.5; }
  return { xMin: fam.c - half, xMax: fam.c + half, yMin, yMax };
}

// pickCurveAt / evalAt, ported from the component (domain-aware evaluation)
function pickCurveAt(fam, x) {
  for (const cv of fam.curves) {
    const d = cv.domain;
    if (!d) return cv;
    if (Number.isFinite(d.from)) {
      if (d.fromKind === 'open' && !(x > d.from)) continue;
      if (d.fromKind !== 'open' && !(x >= d.from)) continue;
    }
    if (Number.isFinite(d.to)) {
      if (d.toKind === 'open' && !(x < d.to)) continue;
      if (d.toKind !== 'open' && !(x <= d.to)) continue;
    }
    return cv;
  }
  return fam.curves[0];
}
function evalAt(fam, x) {
  const cv = pickCurveAt(fam, x);
  if (!cv) return NaN;
  try { return cv.fn(x); } catch { return NaN; }
}

function freeze(key) {
  const fam = FAMILIES[key];

  const functions = fam.curves.map((cv, i) => ({
    fn: cv.fn,
    color: COL.f,
    label: i === 0 ? 'f' : undefined,
    formula: i === 0 ? fam.eq : undefined,
    visible: true,
    stroke: 2.25,
    domain: cv.domain,
  }));

  const verticalLines = [
    { x: fam.c, color: COL.link, stroke: 1.5, pattern: [5, 4], label: `c = ${fam.c}` },
  ];

  const horizontalLines = [];
  if (Number.isFinite(fam.Lminus)) {
    horizontalLines.push({ y: fam.Lminus, color: COL.limit, stroke: 1.5, pattern: [6, 4], label: `L⁻ = ${fmt(fam.Lminus)}` });
  }
  if (Number.isFinite(fam.Lplus) && fam.Lplus !== fam.Lminus) {
    horizontalLines.push({ y: fam.Lplus, color: COL.limit, stroke: 1.5, pattern: [6, 4], label: `L⁺ = ${fmt(fam.Lplus)}` });
  }

  const customPoints = [];
  if (Number.isFinite(fam.Lminus)) customPoints.push({ x: fam.c, y: fam.Lminus, color: COL.f, label: `L⁻ = ${fmt(fam.Lminus)}` });
  if (Number.isFinite(fam.Lplus) && fam.Lplus !== fam.Lminus) customPoints.push({ x: fam.c, y: fam.Lplus, color: COL.f, label: `L⁺ = ${fmt(fam.Lplus)}` });
  if (Number.isFinite(fam.Fc) && fam.Fc !== fam.Lminus && fam.Fc !== fam.Lplus) {
    customPoints.push({ x: fam.c, y: fam.Fc, color: COL.fp, label: `f(c) = ${fmt(fam.Fc)}` });
  }
  const yL = evalAt(fam, fam.c - EPS), yR = evalAt(fam, fam.c + EPS);
  if (Number.isFinite(yL)) customPoints.push({ x: fam.c - EPS, y: yL, color: COL.approach, label: 'x → c⁻' });
  if (Number.isFinite(yR)) customPoints.push({ x: fam.c + EPS, y: yR, color: COL.approach, label: 'x → c⁺' });

  return frozenSvg({
    functions,
    viewport: autoViewBounds(fam),
    verticalLines,
    horizontalLines,
    customPoints,
    width: 880,
    height: 460,
    labelMode: 'none',
    // sin(1/x) packs unbounded oscillation into the approach to c; at the
    // default sampling the frozen curve would understate it badly.
    samples: fam.type === 'oscillating' ? 1200 : undefined,
  });
}

// the ε-readings each frozen state shows, so the page can quote the tool
export const approaches = Object.fromEntries(
  Object.keys(FAMILIES).map((k) => {
    const fam = FAMILIES[k];
    return [k, {
      c: fam.c,
      eps: EPS,
      fLeft: evalAt(fam, fam.c - EPS),
      fRight: evalAt(fam, fam.c + EPS),
      Lminus: fam.Lminus,
      Lplus: fam.Lplus,
      Fc: fam.Fc,
      type: fam.type,
    }];
  })
);

const functionLimitDiagrams = {
  continuous: freeze('continuous'),
  removable: freeze('removable'),
  jump: freeze('jump'),
  'infinite-pos': freeze('infinite-pos'),
  'infinite-jump': freeze('infinite-jump'),
  oscillating: freeze('oscillating'),
  onesided: freeze('onesided'),
};

export default functionLimitDiagrams;
