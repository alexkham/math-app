// Frozen-state SVGs for the Riemann Sum tool (Line 1 anchor mesh).
//
// FunctionRiemann hands a declarative scene to FunctionVisualizerCorePro: the
// curve, an invisible piecewise "strip function" whose graph is the tops of the
// rectangles, and one underCurve shaded region per strip that fills between the
// axis and that strip function. This module rebuilds the same scene per method
// and serialises it through the core's own generateSVG (see ../frozenSvg), with
// makeStripFn / riemannSum / trueIntegral / autoViewBounds ported verbatim so
// the sums quoted on the page are the tool's own numbers.
//
// The four states are the four sampling rules on the component's own defaults:
// the quadratic family, a = 0, b = 3, n = 8.

import { FAMILIES, METHODS } from './FunctionRiemann';
import frozenSvg from '../frozenSvg';

const COL = { f: '#1e3a8a', rect: '#3b82f6' };

// the component's defaults: initialFamily / initialLo / initialHi / initialN
const FAMILY = 'quadratic';
const LO = 0, HI = 3, N = 8;

// panelTones for the default highlight colour #3b82f6
const FILL = 'rgba(59, 130, 246, 0.22)';
const STROKE = '#3b82f6';

// makeStripFn, ported verbatim
function makeStripFn(base, lo, hi, n, method) {
  const dx = (hi - lo) / n;
  if (dx === 0 || n < 1) return () => NaN;
  return (x) => {
    let i = Math.floor((x - lo) / dx);
    if (i < 0) i = 0;
    if (i > n - 1) i = n - 1;
    const x0 = lo + i * dx;
    const x1 = x0 + dx;
    if (method === 'left') return base(x0);
    if (method === 'right') return base(x1);
    if (method === 'mid') return base((x0 + x1) / 2);
    const t = (x - x0) / dx;
    return (1 - t) * base(x0) + t * base(x1);
  };
}

// riemannSum / trueIntegral, ported verbatim
function riemannSum(fn, lo, hi, n, method) {
  if (n < 1) return NaN;
  const dx = (hi - lo) / n;
  if (dx === 0) return 0;
  let s = 0;
  for (let i = 0; i < n; i++) {
    const x0 = lo + i * dx;
    const x1 = x0 + dx;
    let v;
    if (method === 'left') v = fn(x0);
    else if (method === 'right') v = fn(x1);
    else if (method === 'mid') v = fn((x0 + x1) / 2);
    else v = (fn(x0) + fn(x1)) / 2;
    if (!Number.isFinite(v)) continue;
    s += v;
  }
  return s * dx;
}
function trueIntegral(fam, lo, hi) {
  if (fam.integral) {
    const v = fam.integral(lo, hi);
    if (Number.isFinite(v)) return v;
  }
  return riemannSum(fam.base, lo, hi, 4000, 'trap');
}

// autoViewBounds, ported verbatim
function autoViewBounds(fam, lo, hi) {
  const a = Math.min(lo, hi), b = Math.max(lo, hi);
  const N_ = 200;
  const span = Math.max(0.1, b - a);
  let ymin = Infinity, ymax = -Infinity;
  for (let i = 0; i <= N_; i++) {
    const y = fam.base(a + (i / N_) * span);
    if (Number.isFinite(y)) { if (y < ymin) ymin = y; if (y > ymax) ymax = y; }
  }
  if (!Number.isFinite(ymin)) { ymin = -1; ymax = 1; }
  ymin = Math.min(ymin, 0);
  ymax = Math.max(ymax, 0);
  const yPad = (ymax - ymin) * 0.2 + 0.5;
  const xPad = Math.max(0.5, span * 0.25);
  return { xMin: a - xPad, xMax: b + xPad, yMin: ymin - yPad, yMax: ymax + yPad };
}

function freeze(method) {
  const fam = FAMILIES[FAMILY];
  const stripFn = makeStripFn(fam.base, LO, HI, N, method);

  const functions = [
    { fn: fam.base, color: COL.f, label: 'f', formula: `f(x) = ${fam.eqBase}`, visible: true, stroke: 2.25 },
    { fn: stripFn, color: STROKE, visible: false },
  ];

  const dxs = (HI - LO) / N;
  const shadedRegions = [];
  for (let i = 0; i < N; i++) {
    const xS = LO + i * dxs;
    shadedRegions.push({
      type: 'underCurve',
      functionIndex: 1,
      xStart: xS,
      xEnd: xS + dxs,
      color: FILL,
      strokeColor: STROKE,
      strokeWidth: 1,
    });
  }

  return frozenSvg({
    functions,
    viewport: autoViewBounds(fam, LO, HI),
    verticalLines: [
      { x: LO, color: '#94a3b8', stroke: 1, pattern: [4, 4], label: 'a' },
      { x: HI, color: '#94a3b8', stroke: 1, pattern: [4, 4], label: 'b' },
    ],
    shadedRegions,
    width: 880,
    height: 460,
    labelMode: 'none',
    // the strip function is a step function; too few samples and the risers
    // between strips get rounded off
    samples: 600,
  });
}

// the numbers each frozen state produces, so the page prose quotes the tool
export const sums = Object.fromEntries(
  Object.keys(METHODS).map((m) => {
    const fam = FAMILIES[FAMILY];
    const sn = riemannSum(fam.base, LO, HI, N, m);
    const I = trueIntegral(fam, LO, HI);
    return [m, { sn, I, err: sn - I, dx: (HI - LO) / N, n: N, lo: LO, hi: HI, order: METHODS[m].order }];
  })
);

const functionRiemannDiagrams = {
  left: freeze('left'),
  right: freeze('right'),
  mid: freeze('mid'),
  trap: freeze('trap'),
};

export default functionRiemannDiagrams;
