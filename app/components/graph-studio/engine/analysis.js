// Graph Studio — engine: analysis of one function of x
//
// Everything the Explorer shell says about a function comes from here:
// family, domain, range, zeros, sign, symmetry, period, continuity,
// asymptotes, monotonicity, concavity, bounds, invertibility, the first
// and second derivative. The Graph draws markers from the same result,
// so the panels and the picture cannot disagree.
//
//   const data = analyzeFunction('0.1x^2 - 2');            // window [-10, 10]
//   const data = analyzeFunction('tan(x)', { xMin: -20, xMax: 20 });
//   data.error            set when the text cannot be read
//   data.fn(x)            the function, read by the same language as the Graph
//   data.roots, data.extrema, data.mono, …   see the returned object below
//
// The text is read by language.js (so 2x, sin2x, ln, |x| mean the same
// as everywhere else in Graph Studio). The numeric method (sections 1
// to 4) is the one of the earlier Function Explorer, moved here as it
// was (one addition: a^x counts as exponential). Derivatives are symbolic through math.js where it knows
// the functions used, numeric otherwise.
//
// The analysis runs on a fixed window, never on what is on screen, so
// the properties stay put while the reader pans or zooms.
//
// Pure JavaScript: no React, no DOM.

import { derivative } from 'mathjs';
import { sliderRange } from './scene.js';
import { classify, compileNode, nodeToTex, freeSymbols, scanDefinitions, CONSTANTS, RESERVED_VARS } from './language.js';

// ============================================================
// 1 – 4. NUMERIC METHOD
// ============================================================
//   - singularities are classified (pole / hole / jump / domain
//     boundary) before roots are accepted, so a sign change across a
//     pole is never reported as a root;
//   - even poles (1/x², sec-type) are found by refining local maxima
//     of |f|;
//   - extrema and inflections next to a singularity are discarded;
//   - range is built per continuous piece and unioned, with open ends
//     where the function only approaches a value;
//   - the fundamental period is searched (π-multiples, rationals, then
//     a numeric scan), smallest first.
function safe(f, x) {
  try {
    const y = f(x);
    return (typeof y === 'number' && isFinite(y)) ? y : null;
  } catch { return null; }
}

const BIG = 1e6;          // |f| above this near a point → treated as ∞
const ZERO = 1e-10;       // |f| below this → zero

// Snap numerically-found x values to 0, integers and π/12 multiples.
function snapX(x) {
  if (Math.abs(x) < 1e-9) return 0;
  const r = Math.round(x);
  if (Math.abs(x - r) < 1e-7) return r;
  const m = x / Math.PI;
  for (const d of [1, 2, 3, 4, 6, 12]) {
    const n = m * d;
    if (Math.abs(n - Math.round(n)) < 1e-7) return (Math.round(n) * Math.PI) / d;
  }
  return x;
}

// Label an x value exactly when it is a π-fraction or an integer.
function labelX(x) {
  if (Math.abs(x) < 1e-9) return '0';
  const m = x / Math.PI;
  for (const d of [1, 2, 3, 4, 6, 12]) {
    const n = m * d;
    if (Math.abs(n - Math.round(n)) < 1e-7) {
      const k = Math.round(n);
      const sign = k < 0 ? '\u2212' : '';
      const a = Math.abs(k);
      const num = a === 1 ? '' : String(a);
      return d === 1 ? `${sign}${num}\u03C0` : `${sign}${num}\u03C0/${d}`;
    }
  }
  const r = Math.round(x);
  if (Math.abs(x - r) < 1e-7) return String(r);
  return x.toFixed(3);
}

function labelPeriod(T) {
  const m = T / Math.PI;
  for (const d of [1, 2, 3, 4, 5, 6, 8, 12]) {
    const n = m * d;
    if (Math.abs(n - Math.round(n)) < 1e-9 && Math.round(n) > 0) {
      const k = Math.round(n);
      const num = k === 1 ? '' : String(k);
      return d === 1 ? `${num}\u03C0` : `${num}\u03C0/${d}`;
    }
  }
  for (const d of [1, 2, 3, 4, 5, 6, 8]) {
    const n = T * d;
    if (Math.abs(n - Math.round(n)) < 1e-9) return d === 1 ? String(Math.round(n)) : `${Math.round(n)}/${d}`;
  }
  return `\u2248 ${T.toFixed(4)}`;
}

function dedupe(xs, eps) {
  const s = [...xs].sort((a, b) => a - b);
  const out = [];
  for (const x of s) if (!out.length || Math.abs(x - out[out.length - 1]) > eps) out.push(x);
  return out;
}

// ---------- pass 1: sample the window ----------
function sampleGrid(fn, xMin, xMax, N) {
  const step = (xMax - xMin) / N;
  const xs = new Array(N + 1);
  const ys = new Array(N + 1);
  for (let i = 0; i <= N; i++) {
    const x = xMin + i * step;
    xs[i] = x;
    ys[i] = safe(fn, x);
  }
  return { xs, ys, step };
}

// Boundary between a defined point xd and an undefined point xu.
function bisectBoundary(fn, xd, xu) {
  let a = xd, b = xu;
  for (let j = 0; j < 70; j++) {
    const m = (a + b) / 2;
    if (safe(fn, m) === null) b = m; else a = m;
  }
  return { x: (a + b) / 2, inside: a };
}

// Does |f| grow without bound approaching x from side dir (+1 right, −1 left)?
// Monotone growth that is either huge or keeps adding (log-type) counts.
function blowsUp(fn, x, dir) {
  const sc = Math.max(1, Math.abs(x));
  const v = [];
  for (const d of [1e-3, 1e-5, 1e-7, 1e-9, 1e-11]) {
    const y = safe(fn, x + dir * d * sc);
    if (y === null) return false;
    v.push(Math.abs(y));
  }
  for (let i = 1; i < v.length; i++) if (!(v[i] > v[i - 1])) return false;
  return v[v.length - 1] > BIG || v[v.length - 1] - v[0] > 8;
}

// Classify a point singularity at s from its one-sided behaviour.
function classifyPoint(fn, s) {
  const e = 1e-7 * Math.max(1, Math.abs(s));
  const yl = safe(fn, s - e), yr = safe(fn, s + e);
  if (blowsUp(fn, s, -1) || blowsUp(fn, s, +1)) return 'pole';
  if (yl !== null && yr !== null && Math.abs(yl - yr) < 1e-4 * (1 + Math.abs(yl))) return 'hole';
  return 'jump';
}

// ---------- pass 2: singularities and domain gaps ----------
function findSingularities(fn, grid) {
  const { xs, ys, step } = grid;
  const N = xs.length - 1;
  const points = [];     // { x, kind: 'pole'|'hole'|'jump' }
  const gaps = [];       // { from, to, fromAsym, toAsym, fromEdge, toEdge }

  // runs of undefined samples
  let i = 0;
  while (i <= N) {
    if (ys[i] !== null) { i++; continue; }
    let j = i;
    while (j + 1 <= N && ys[j + 1] === null) j++;
    const hasL = i - 1 >= 0, hasR = j + 1 <= N;
    if (hasL && hasR && j - i <= 2) {
      const bl = bisectBoundary(fn, xs[i - 1], xs[i]).x;
      const br = bisectBoundary(fn, xs[j + 1], xs[j]).x;
      const s = snapX((bl + br) / 2);
      points.push({ x: s, kind: classifyPoint(fn, s) });
    } else {
      const g = { from: xs[i], to: xs[j], fromAsym: false, toAsym: false, fromEdge: !hasL, toEdge: !hasR };
      if (hasL) {
        const b = bisectBoundary(fn, xs[i - 1], xs[i]);
        g.from = snapX(b.x);
        g.fromAsym = blowsUp(fn, g.from, -1);
        g.fromClosed = safe(fn, g.from) !== null;
      }
      if (hasR) {
        const b = bisectBoundary(fn, xs[j + 1], xs[j]);
        g.to = snapX(b.x);
        g.toAsym = blowsUp(fn, g.to, +1);
        g.toClosed = safe(fn, g.to) !== null;
      }
      gaps.push(g);
    }
    i = j + 1;
  }

  // odd poles and jumps: sign changes whose bisection ends on huge values
  const near = (x) => points.some((p) => Math.abs(p.x - x) < 2 * step);
  for (let k = 0; k < N; k++) {
    const y1 = ys[k], y2 = ys[k + 1];
    if (y1 === null || y2 === null || y1 * y2 >= 0) continue;
    let a = xs[k], b = xs[k + 1], ya = y1;
    let undef = false;
    for (let t = 0; t < 90; t++) {
      const m = (a + b) / 2;
      const ym = safe(fn, m);
      if (ym === null) { undef = true; break; }
      if (ym === 0) { a = b = m; break; }
      if ((ym > 0) === (ya > 0)) { a = m; ya = ym; } else b = m;
    }
    if (undef) continue; // handled by the undefined-run pass
    const fa = safe(fn, a), fb = safe(fn, b);
    const big = fa !== null && fb !== null && Math.abs(fa) > BIG && Math.abs(fb) > BIG;
    const x = snapX((a + b) / 2);
    if (big && !near(x)) points.push({ x, kind: 'pole' });
    else if (!big && fa !== null && fb !== null && Math.min(Math.abs(fa), Math.abs(fb)) > 1e-3 && !near(x)) {
      points.push({ x, kind: 'jump' });
    }
  }

  // even poles: local maxima of |f| that grow without bound
  for (let k = 1; k < N; k++) {
    const y0 = ys[k - 1], y1 = ys[k], y2 = ys[k + 1];
    if (y0 === null || y1 === null || y2 === null) continue;
    const a1 = Math.abs(y1);
    if (!(a1 > 100 && a1 >= Math.abs(y0) && a1 >= Math.abs(y2))) continue;
    let a = xs[k - 1], b = xs[k + 1];
    for (let t = 0; t < 120; t++) {
      const m1 = a + (b - a) / 3, m2 = b - (b - a) / 3;
      const f1 = safe(fn, m1), f2 = safe(fn, m2);
      const v1 = f1 === null ? Infinity : Math.abs(f1);
      const v2 = f2 === null ? Infinity : Math.abs(f2);
      if (v1 < v2) a = m1; else b = m2;
    }
    const x = snapX((a + b) / 2);
    const e = 1e-7 * Math.max(1, Math.abs(x));
    const yl = safe(fn, x - e), yr = safe(fn, x + e);
    const huge = (yl === null || Math.abs(yl) > BIG) && (yr === null || Math.abs(yr) > BIG);
    if (huge && !near(x)) points.push({ x, kind: 'pole' });
  }

  points.sort((p, q) => p.x - q.x);
  return { points, gaps };
}

// ---------- pass 3: roots ----------
function findRootsV1(fn, grid, sing) {
  const { xs, ys, step } = grid;
  const N = xs.length - 1;
  const bad = (x) => sing.points.some((p) => Math.abs(p.x - x) < 2 * step);
  const roots = [];

  for (let k = 0; k <= N; k++) {
    const y = ys[k];
    if (y !== null && Math.abs(y) < ZERO && !bad(xs[k])) roots.push(xs[k]);
  }
  for (let k = 0; k < N; k++) {
    const y1 = ys[k], y2 = ys[k + 1];
    if (y1 === null || y2 === null || y1 * y2 >= 0) continue;
    let a = xs[k], b = xs[k + 1], ya = y1;
    for (let t = 0; t < 90; t++) {
      const m = (a + b) / 2;
      const ym = safe(fn, m);
      if (ym === null) break;
      if (ym === 0) { a = b = m; break; }
      if ((ym > 0) === (ya > 0)) { a = m; ya = ym; } else b = m;
    }
    const x = (a + b) / 2;
    const fx = safe(fn, x);
    if (fx !== null && Math.abs(fx) < 1e-6 && !bad(x)) roots.push(x);
  }
  // touching roots: local minima of |f| that reach zero
  for (let k = 1; k < N; k++) {
    const y0 = ys[k - 1], y1 = ys[k], y2 = ys[k + 1];
    if (y0 === null || y1 === null || y2 === null) continue;
    const a1 = Math.abs(y1);
    if (!(a1 < 1e-2 && a1 <= Math.abs(y0) && a1 <= Math.abs(y2)) || y0 * y2 < 0) continue;
    let a = xs[k - 1], b = xs[k + 1];
    for (let t = 0; t < 120; t++) {
      const m1 = a + (b - a) / 3, m2 = b - (b - a) / 3;
      const f1 = safe(fn, m1), f2 = safe(fn, m2);
      const v1 = f1 === null ? Infinity : Math.abs(f1);
      const v2 = f2 === null ? Infinity : Math.abs(f2);
      if (v1 > v2) a = m1; else b = m2;
    }
    const x = (a + b) / 2;
    const fx = safe(fn, x);
    if (fx !== null && Math.abs(fx) < 1e-9 && !bad(x)) roots.push(x);
  }
  // closed domain boundaries that are zeros (e.g. √x at 0)
  for (const g of sing.gaps) {
    for (const b of [g.from, g.to]) {
      const y = safe(fn, b);
      if (y !== null && Math.abs(y) < ZERO) roots.push(b);
    }
  }
  return dedupe(roots.map(snapX), step / 2);
}

// ---------- pass 4: critical and inflection points ----------
function signChangesOf(g, fn, grid, sing, kindOf) {
  const { xs, step } = grid;
  const N = xs.length - 1;
  const bad = (x) =>
    sing.points.some((p) => Math.abs(p.x - x) < 3 * step) ||
    sing.gaps.some((q) => x > q.from - 3 * step && x < q.to + 3 * step);
  const vals = xs.map((x) => safe(g, x));
  const out = [];
  for (let k = 1; k < N; k++) {
    const d0 = vals[k - 1], d = vals[k], d2 = vals[k + 1];
    if (d === null || d0 === null || d2 === null) continue;
    if (Math.abs(d) < 1e-13 && d0 * d2 < 0) {
      const x = snapX(xs[k]);
      if (bad(x)) continue;
      const y = safe(fn, x);
      if (y === null || Math.abs(y) > BIG) continue;
      out.push({ x, y, ...(kindOf ? { kind: kindOf(d0) } : {}) });
      vals[k] = null; // consumed: keep the pairwise scan from counting it again
    }
  }
  for (let k = 0; k < N; k++) {
    const d1 = vals[k], d2 = vals[k + 1];
    if (d1 === null || d2 === null || d1 * d2 >= 0) continue;
    let a = xs[k], b = xs[k + 1], da = d1;
    for (let t = 0; t < 70; t++) {
      const m = (a + b) / 2;
      const dm = safe(g, m);
      if (dm === null) break;
      if (dm === 0) { a = b = m; break; }
      if ((dm > 0) === (da > 0)) { a = m; da = dm; } else b = m;
    }
    const x = snapX((a + b) / 2);
    if (bad(x)) continue;
    const y = safe(fn, x);
    if (y === null || Math.abs(y) > BIG) continue;
    out.push({ x, y, ...(kindOf ? { kind: kindOf(d1) } : {}) });
  }
  return out.sort((p, q) => p.x - q.x);
}

function numericDeriv(fn, h) {
  return (x) => {
    const a = safe(fn, x + h), b = safe(fn, x - h);
    return (a !== null && b !== null) ? (a - b) / (2 * h) : NaN;
  };
}
function numericDeriv2(fn, h) {
  return (x) => {
    const a = safe(fn, x + h), b = safe(fn, x), c = safe(fn, x - h);
    return (a !== null && b !== null && c !== null) ? (a - 2 * b + c) / (h * h) : NaN;
  };
}

// ---------- pass 5: parity and period ----------
function detectParity(fn) {
  const xs = [0.3, 0.7, 1.4, 2.1, 3.5, 5.2, 6.9];
  let even = true, odd = true, used = 0;
  for (const x of xs) {
    const yp = safe(fn, x), yn = safe(fn, -x);
    if (yp === null && yn === null) continue;
    if (yp === null || yn === null) return 'neither';
    const tol = 1e-6 * (1 + Math.abs(yp));
    if (Math.abs(yp - yn) > tol) even = false;
    if (Math.abs(yp + yn) > tol) odd = false;
    used++;
  }
  if (used < 3) return 'neither';
  return even ? 'even' : (odd ? 'odd' : 'neither');
}

const PERIOD_PROBES = [-7.31, -5.87, -4.42, -3.13, -2.27, -1.61, -0.93, -0.37, 0.41, 1.07, 1.73, 2.49, 3.37, 4.61, 5.53, 6.71];

function periodHolds(fn, T, tol) {
  let used = 0;
  for (const x of PERIOD_PROBES) {
    const y1 = safe(fn, x), y2 = safe(fn, x + T);
    if (y1 === null && y2 === null) continue;
    if (y1 === null || y2 === null) return false;
    if (Math.abs(y1) > 1e5 || Math.abs(y2) > 1e5) continue;
    if (Math.abs(y1 - y2) > tol * (1 + Math.abs(y1))) return false;
    used++;
  }
  return used >= 6;
}

let PERIOD_CANDIDATES = null;
function periodCandidates() {
  if (PERIOD_CANDIDATES) return PERIOD_CANDIDATES;
  const c = [];
  for (let k = 1; k <= 12; k++) for (let m = 1; m <= 12; m++) c.push((k * Math.PI) / m);
  for (let k = 1; k <= 30; k++) for (let m = 1; m <= 8; m++) c.push(k / m);
  PERIOD_CANDIDATES = dedupe(c.filter((T) => T > 0.05 && T <= 40), 1e-12);
  return PERIOD_CANDIDATES;
}

function detectPeriod(fn, { constant, endsOscillate }) {
  const none = { periodic: false, T: null, label: null };
  if (constant) return { ...none, constant: true };
  for (const T of periodCandidates()) {
    if (periodHolds(fn, T, 1e-7)) return { periodic: true, T, label: labelPeriod(T) };
  }
  if (!endsOscillate) return none;
  // numeric scan for non-standard periods
  const err = (T) => {
    let s = 0, n = 0;
    for (const x of PERIOD_PROBES) {
      const y1 = safe(fn, x), y2 = safe(fn, x + T);
      if (y1 === null || y2 === null || Math.abs(y1) > 1e5 || Math.abs(y2) > 1e5) continue;
      s += Math.abs(y1 - y2) / (1 + Math.abs(y1)); n++;
    }
    return n >= 6 ? s / n : Infinity;
  };
  let prev = err(0.05), cur = err(0.055);
  for (let T = 0.06; T <= 20; T += 0.005) {
    const next = err(T);
    if (cur < prev && cur <= next && cur < 5e-3) {
      let a = T - 0.01, b = T;
      for (let t = 0; t < 80; t++) {
        const m1 = a + (b - a) / 3, m2 = b - (b - a) / 3;
        if (err(m1) < err(m2)) b = m2; else a = m1;
      }
      const Tp = (a + b) / 2;
      if (periodHolds(fn, Tp, 1e-6)) return { periodic: true, T: Tp, label: labelPeriod(Tp) };
    }
    prev = cur; cur = next;
  }
  return none;
}

// Express singular points of a periodic function as p + kT families.
function periodicFamily(xsIn, T) {
  const reps = dedupe(xsIn.map((x) => ((x % T) + T) % T).map((x) => (Math.abs(x - T) < 1e-6 ? 0 : x)), 1e-6);
  if (!reps.length) return null;
  const c = reps.length;
  const d = T / c;
  const evenly = reps.every((r, i) => Math.abs(r - (reps[0] + i * d)) < 1e-6);
  const step = evenly ? d : T;
  const list = evenly ? [reps[0]] : reps;
  const stepLabel = labelPeriod(step);
  const kStep = stepLabel === '\u03C0' ? 'k\u03C0' : (stepLabel === '1' ? 'k' : `k\u00B7${stepLabel}`);
  return list.map((p) => (Math.abs(p) < 1e-9 ? kStep : `${labelX(snapX(p))} + ${kStep}`)).join(', ');
}

// ---------- pass 6: end behaviour ----------
function analyzeEnd(fn, sign) {
  const probes = [10, 100, 1000, 10000];
  const ys = [];
  for (const p of probes) {
    let y;
    try { y = fn(sign * p); } catch { y = NaN; }
    if (typeof y !== 'number' || Number.isNaN(y)) {
      if (ys.length === 0) return { direction: 'undefined', value: null };
      break;
    }
    if (y === Infinity) return { direction: 'diverge+', value: null };
    if (y === -Infinity) return { direction: 'diverge-', value: null };
    ys.push(y);
  }
  if (ys.length < 3) return { direction: 'oscillate', value: null };
  const diffs = [];
  for (let i = 1; i < ys.length; i++) diffs.push(ys[i] - ys[i - 1]);
  const last = Math.abs(diffs[diffs.length - 1]);
  if (last < 1e-3 && last <= Math.abs(diffs[0]) * 0.5 + 1e-12) {
    return { direction: 'converge', value: ys[ys.length - 1] };
  }
  const allUp = diffs.every((d) => d > 0);
  const allDown = diffs.every((d) => d < 0);
  if (allUp) return { direction: 'diverge+', value: null };
  if (allDown) return { direction: 'diverge-', value: null };
  return { direction: 'oscillate', value: null };
}

// ---------- pass 7: pieces, range, bounds ----------
// Split the window into maximal defined pieces between singularities and gaps.
function buildPieces(xMin, xMax, sing) {
  const cuts = [];
  for (const p of sing.points) cuts.push({ at: p.x, kind: p.kind });
  let pieces = [{ from: xMin, to: xMax, left: 'edge', right: 'edge' }];
  // remove gaps
  for (const g of sing.gaps) {
    const next = [];
    for (const pc of pieces) {
      if (g.to <= pc.from || g.from >= pc.to) { next.push(pc); continue; }
      if (g.from > pc.from) next.push({ ...pc, to: g.from, right: g.fromAsym ? 'asym' : 'boundary' });
      if (g.to < pc.to) next.push({ ...pc, from: g.to, left: g.toAsym ? 'asym' : 'boundary' });
    }
    pieces = next;
  }
  // split at point singularities
  for (const c of cuts) {
    const next = [];
    for (const pc of pieces) {
      if (c.at <= pc.from || c.at >= pc.to) { next.push(pc); continue; }
      next.push({ ...pc, to: c.at, right: c.kind });
      next.push({ ...pc, from: c.at, left: c.kind });
    }
    pieces = next;
  }
  return pieces.filter((pc) => pc.to - pc.from > 1e-9);
}

function pieceRange(fn, pc, grid, extremaY, ends, periodic) {
  const cand = []; // { v, open }
  for (let k = 0; k < grid.xs.length; k++) {
    const x = grid.xs[k], y = grid.ys[k];
    if (x > pc.from && x < pc.to && y !== null && Math.abs(y) <= BIG) cand.push({ v: y, open: false });
  }
  for (const e of extremaY) if (e.x > pc.from && e.x < pc.to) cand.push({ v: e.y, open: false });
  const side = (x, dir, kind, end) => {
    if (kind === 'edge') {
      if (periodic || !end) return;
      if (end.direction === 'converge') cand.push({ v: end.value, open: true });
      else if (end.direction === 'diverge+') cand.push({ v: Infinity, open: true });
      else if (end.direction === 'diverge-') cand.push({ v: -Infinity, open: true });
      return;
    }
    if (kind === 'boundary') {
      const y = safe(fn, x);
      if (y !== null) cand.push({ v: y, open: false });
      return;
    }
    const e = 1e-7 * Math.max(1, Math.abs(x));
    const y = safe(fn, x + dir * e);
    if (y === null) return;
    if (blowsUp(fn, x, dir)) cand.push({ v: y > 0 ? Infinity : -Infinity, open: true });
    else cand.push({ v: y, open: true });
  };
  side(pc.from, +1, pc.left, pc.left === 'edge' && pc.from === grid.xs[0] ? ends.left : null);
  side(pc.to, -1, pc.right, pc.right === 'edge' && pc.to === grid.xs[grid.xs.length - 1] ? ends.right : null);
  if (!cand.length) return null;
  let lo = cand[0], hi = cand[0];
  for (const c of cand) {
    if (c.v < lo.v - 1e-12 || (Math.abs(c.v - lo.v) <= 1e-12 && !c.open)) lo = c;
    if (c.v > hi.v + 1e-12 || (Math.abs(c.v - hi.v) <= 1e-12 && !c.open)) hi = c;
  }
  return { lo: lo.v, loOpen: lo.open, hi: hi.v, hiOpen: hi.open };
}

function unionRanges(rs) {
  const s = rs.filter(Boolean).sort((a, b) => a.lo - b.lo);
  const out = [];
  for (const r of s) {
    const last = out[out.length - 1];
    if (last && (r.lo < last.hi - 1e-9 || (Math.abs(r.lo - last.hi) <= 1e-9 && !(r.loOpen && last.hiOpen)))) {
      if (r.hi > last.hi + 1e-12 || (Math.abs(r.hi - last.hi) <= 1e-12 && !r.hiOpen)) { last.hi = r.hi; last.hiOpen = r.hiOpen; }
      if (Math.abs(r.lo - last.lo) <= 1e-12 && !r.loOpen) last.loOpen = false;
    } else out.push({ ...r });
  }
  return out;
}

function fmtBound(v) {
  if (v === Infinity) return '+\u221E';
  if (v === -Infinity) return '\u2212\u221E';
  return (Math.abs(v) < 5e-4 ? 0 : v).toFixed(3);
}

function rangeString(union) {
  if (!union.length) return '\u2205';
  if (union.length === 1 && union[0].lo === -Infinity && union[0].hi === Infinity) return '\u211D';
  return union
    .map((r) => `${r.loOpen || r.lo === -Infinity ? '(' : '['}${fmtBound(r.lo)}, ${fmtBound(r.hi)}${r.hiOpen || r.hi === Infinity ? ')' : ']'}`)
    .join(' \u222A ');
}

function domainString(sing, period, xMin, xMax) {
  const pts = sing.points;
  if (period.periodic && pts.length && !sing.gaps.length) {
    const fam = periodicFamily(pts.map((p) => p.x), period.T);
    if (fam) return `\u211D \\ {${fam}}`;
  }
  const ptsStr = pts.length ? ` \\ {${pts.map((p) => labelX(p.x)).join(', ')}}` : '';
  if (!sing.gaps.length) return pts.length ? `\u211D${ptsStr}` : '\u211D';
  // defined pieces between gaps
  let segs = [{ from: -Infinity, to: Infinity, lc: false, rc: false }];
  for (const g of sing.gaps) {
    const gFrom = g.fromEdge ? -Infinity : g.from;
    const gTo = g.toEdge ? Infinity : g.to;
    const next = [];
    for (const s of segs) {
      if (gTo <= s.from || gFrom >= s.to) { next.push(s); continue; }
      if (gFrom > s.from) next.push({ ...s, to: gFrom, rc: !g.fromAsym && g.fromClosed });
      if (gTo < s.to) next.push({ ...s, from: gTo, lc: !g.toAsym && g.toClosed });
    }
    segs = next;
  }
  const iv = segs.map((s) => {
    const a = s.from === -Infinity ? '(\u2212\u221E' : `${s.lc ? '[' : '('}${labelX(s.from)}`;
    const b = s.to === Infinity ? '+\u221E)' : `${labelX(s.to)}${s.rc ? ']' : ')'}`;
    return `${a}, ${b}`;
  }).join(' \u222A ');
  return `${iv}${ptsStr}`;
}

// ---------- intervals of sign / monotonicity / concavity ----------
function intervalsBy(xMin, xMax, breaks, sing, classify) {
  const bs = dedupe([xMin, ...breaks.filter((b) => b > xMin && b < xMax), xMax], 1e-9);
  const out = [];
  for (let i = 0; i < bs.length - 1; i++) {
    const a = bs[i], b = bs[i + 1];
    const mid = (a + b) / 2;
    if (sing.gaps.some((g) => mid > g.from && mid < g.to)) continue;
    out.push({ from: a, to: b, ...classify(mid) });
  }
  return out;
}

function injectivity(fn, mono, pieces, period, grid, extrema, ends) {
  if (period.periodic) return false;
  const dirs = new Set(mono.map((m) => m.dir));
  if (dirs.has('const') || dirs.has('undef') || dirs.size !== 1) return false;
  // one direction everywhere: pieces must not overlap in value
  const rs = pieces.map((pc) => pieceRange(fn, pc, grid, extrema, ends, false)).filter(Boolean);
  for (let i = 0; i < rs.length; i++) {
    for (let j = i + 1; j < rs.length; j++) {
      const a = rs[i], b = rs[j];
      if (Math.min(a.hi, b.hi) - Math.max(a.lo, b.lo) > 1e-9) return false;
    }
  }
  return true;
}

// ============================================================
// FAMILY DETECTION
// ============================================================
function detectFamily(node) {
  const s = node.toString();
  const has = (re) => re.test(s);
  if (has(/\bsin\b|\bcos\b|\btan\b|\bcot\b|\bsec\b|\bcsc\b/)) return 'Trigonometric';
  if (has(/\b(exp|e\s*\^)/) || exponentContainsX(node)) return 'Exponential';
  if (has(/\b(log|ln)\b/)) return 'Logarithmic';
  if (has(/sqrt|\^\s*0?\.5|\^\s*\(\s*1\s*\/\s*2\s*\)/)) return 'Radical';
  const hasNegativeExp = detectNegativeExponent(node);
  if (hasNegativeExp) return 'Rational';
  if (has(/\//) && /x/.test(s)) {
    if (denominatorContainsX(node)) return 'Rational';
  }
  if (has(/\babs\b|\|/)) return 'Absolute value';
  const deg = polynomialDegree(node);
  if (deg === 1) return 'Linear';
  if (deg === 2) return 'Quadratic';
  if (deg === 3) return 'Cubic';
  if (deg >= 4) return `Polynomial (deg ${deg})`;
  return 'General';
}

// 2^x, 3^(x+1): the variable sits in an exponent.
function exponentContainsX(node) {
  let found = false;
  node.traverse(n => {
    if (n.type === 'OperatorNode' && n.op === '^' && /\bx\b/.test(n.args[1].toString())) found = true;
  });
  return found;
}

function detectNegativeExponent(node) {
  let found = false;
  const walk = (n) => {
    if (!n || found) return;
    if (n.type === 'OperatorNode' && n.op === '^') {
      const [base, exp] = n.args;
      if (base.type === 'SymbolNode' && base.name === 'x') {
        if (exp.type === 'ConstantNode' && exp.value < 0) found = true;
        if (exp.type === 'OperatorNode' && exp.op === '-' && exp.args.length === 1) found = true;
      }
    }
    if (n.args) n.args.forEach(walk);
  };
  walk(node);
  return found;
}

function denominatorContainsX(node) {
  let found = false;
  const walk = (n) => {
    if (!n || found) return;
    if (n.type === 'OperatorNode' && n.op === '/') {
      const denom = n.args[1];
      const str = denom.toString();
      if (/\bx\b/.test(str)) found = true;
    }
    if (n.args) n.args.forEach(walk);
  };
  walk(node);
  return found;
}

function polynomialDegree(node) {
  let max = 0;
  const walk = (n) => {
    if (!n) return;
    if (n.type === 'OperatorNode' && n.op === '^') {
      const [base, exp] = n.args;
      if (base.type === 'SymbolNode' && base.name === 'x' &&
          exp.type === 'ConstantNode' && Number.isInteger(exp.value) && exp.value > 0) {
        if (exp.value > max) max = exp.value;
      }
    }
    if (n.type === 'SymbolNode' && n.name === 'x' && max < 1) max = 1;
    if (n.args) n.args.forEach(walk);
  };
  walk(node);
  return max;
}


// ============================================================
// 5. READING THE TEXT
// ============================================================
// Accepts "x^2 - 1", "y = x^2 - 1" and "f(x) = x^2 - 1".
//
// Letters other than x are parameters: in "a sin(bx) + c" these are a,
// b and c. `values` gives their numbers ({ a: 2, b: 0.5 }); one that is
// missing counts as 1.
//
// Returns { node, f, env, parameters: ['a', 'b', 'c'], usesX } or { error }.
export function readFunction(text, values = {}) {
  const c = classify(text, scanDefinitions([text || '']));
  if (c.kind === 'empty') return { error: 'Type a function of x, such as x^2 - 1' };
  if (c.kind === 'error') return { error: c.error };
  let node = null;
  if (c.kind === 'bare') node = c.node;
  else if (c.kind === 'funcdef' && c.param === 'x') node = c.node;
  else if (c.kind === 'equation' && c.lhsText === 'y') node = c.rhs;
  else if (c.kind === 'equation' && c.rhsText === 'y') node = c.lhs;
  if (!node) return { error: 'The explorer takes one function of x, such as x^2 - 1' };
  if (c.condNodes.length) return { error: 'Restrictions in braces are not analysed here' };
  const symbols = [...freeSymbols(node)];
  const parameters = symbols.filter(s => s !== 'x' && !(s in CONSTANTS)).sort();
  const taken = parameters.filter(s => RESERVED_VARS.includes(s));
  if (taken.length) return { error: `The variable here is x; ${taken.join(', ')} cannot be used as a parameter` };
  const S = {};
  for (const name of parameters) S[name] = Number.isFinite(values[name]) ? values[name] : 1;
  const env = { S, F: {}, userVars: new Set(parameters), userFuncs: new Set() };
  try {
    return { node, f: compileNode(node, ['x'], env), env, parameters, usesX: symbols.includes('x') };
  } catch (e) {
    return { error: e.message || String(e) };
  }
}

// A row that only gives a letter a number: "a = 2", "k = -0.5".
const SLIDER_ROW = /^\s*([A-Za-z](?:_[A-Za-z0-9]+)?)\s*=\s*(-?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)\s*$/;

// Finds in a scene a function of x that can be studied on its own: a
// row whose only other letters are sliders of that scene. The row with
// id `preferId` is taken when it qualifies, otherwise the first that does.
//
// Returns { text, params: { a: { value, min, max } } } or null.
export function pickFunction(scene, preferId = null) {
  if (!scene || !Array.isArray(scene.expressions)) return null;
  const sliders = new Map();
  for (const row of scene.expressions) {
    const m = SLIDER_ROW.exec(row.text || '');
    if (!m || RESERVED_VARS.includes(m[1]) || m[1] in CONSTANTS) continue;
    const range = sliderRange(row);
    const value = Number(m[2]);
    sliders.set(m[1], { value, min: Math.min(range.min, value), max: Math.max(range.max, value) });
  }
  const fit = row => {
    if (!row || SLIDER_ROW.test(row.text || '')) return null;
    const read = readFunction(row.text);
    if (read.error || !read.usesX || !read.parameters.every(p => sliders.has(p))) return null;
    const params = {};
    for (const p of read.parameters) params[p] = sliders.get(p);
    return { text: row.text, params };
  };
  const preferred = preferId !== null ? fit(scene.expressions.find(e => e.id === preferId)) : null;
  if (preferred) return preferred;
  for (const row of scene.expressions) {
    const got = fit(row);
    if (got) return got;
  }
  return null;
}

// The rows of a scene that holds one function and its sliders — what a
// link from one tool to another carries.
export function functionRows(text, params = {}) {
  const rows = Object.keys(params).sort().map(name => ({
    text: `${name} = ${numberText(params[name].value)}`,
    slider: { min: params[name].min, max: params[name].max, step: 0 }
  }));
  rows.push({ text });
  return rows;
}

// A number as row text: no stray digits, never in exponent form.
export function numberText(v) {
  if (!Number.isFinite(v)) return '0';
  const r = Number(v.toPrecision(10));
  const s = String(r);
  return /e/i.test(s) ? r.toFixed(12).replace(/\.?0+$/, '') : s;
}

// ============================================================
// 6. SYMBOLIC DERIVATIVE
// ============================================================
// math.js differentiates; it writes the natural logarithm as log and
// the decimal one as log10, so names are translated on the way in and
// back on the way out.
function mapTree(node, fn) {
  return fn(node.map(child => mapTree(child, fn)));
}
function renameFunction(node, name) {
  const FunctionNode = node.constructor, SymbolNode = node.fn.constructor;
  return new FunctionNode(new SymbolNode(name), node.args);
}
const INTO = { ln: 'log', arcsin: 'asin', arccos: 'acos' };
function toMathjs(node) {
  return mapTree(node, n => {
    if (n.type !== 'FunctionNode' || !n.fn || !n.fn.name) return n;
    const name = n.fn.name;
    if (name === 'log' && n.args.length === 1) return renameFunction(n, 'log10');
    if (name === 'arctan' && n.args.length === 1) return renameFunction(n, 'atan');
    return INTO[name] ? renameFunction(n, INTO[name]) : n;
  });
}
function fromMathjs(node) {
  return mapTree(node, n => {
    if (n.type === 'FunctionNode' && n.fn && n.fn.name) {
      if (n.fn.name === 'log' && n.args.length === 1) return renameFunction(n, 'ln');
      if (n.fn.name === 'log10') return renameFunction(n, 'log');
    }
    // 0.2 * x is shown as 0.2x, 3 * x^2 as 3x²
    // … and a * b * cos(b x) as ab cos(bx)
    const l0 = n.type === 'OperatorNode' && n.fn === 'multiply' && n.args.length === 2 ? n.args[0] : null;
    if (l0 && (l0.type === 'ConstantNode' || l0.type === 'SymbolNode' || (l0.type === 'OperatorNode' && l0.fn === 'multiply' && l0.implicit))) {
      const r = n.args[1];
      const plain = r.type === 'SymbolNode' || r.type === 'FunctionNode' || r.type === 'ParenthesisNode' ||
        (r.type === 'OperatorNode' && r.fn === 'pow' && r.args[0].type !== 'ConstantNode');
      if (plain) n.implicit = true;
    }
    return n;
  });
}

// For showing only: long decimals such as 0.6931471805599453 are cut
// to six significant digits. The compiled function keeps full precision.
function roundedForDisplay(node) {
  return mapTree(node, n => {
    if (n.type !== 'ConstantNode' || typeof n.value !== 'number' || Number.isInteger(n.value)) return n;
    const ConstantNode = n.constructor;
    return new ConstantNode(Number(n.value.toPrecision(6)));
  });
}

// { node, f, tex, text } or null when math.js cannot differentiate it.
// Parameters stay as letters in the formula and take their values from env.
function differentiate(node, env) {
  try {
    const d = fromMathjs(derivative(toMathjs(node), 'x'));
    const f = compileNode(d, ['x'], env);
    let tex = null;
    const shown = roundedForDisplay(d);
    try { tex = nodeToTex(shown); } catch { tex = null; }
    return { node: d, f, tex, text: shown.toString() };
  } catch {
    return null;
  }
}

// ============================================================
// 7. THE ANALYSIS
// ============================================================
// opts: { xMin = -10, xMax = 10, samples = 4000, params: { a: 2, … } }
export function analyzeFunction(expression, opts = {}) {
  const xMin = opts.xMin ?? -10;
  const xMax = opts.xMax ?? 10;
  const N = opts.samples ?? 4000;

  const read = readFunction(expression, opts.params || {});
  if (read.error) return { error: read.error, expression };
  const node = read.node;
  const fn = x => { try { const v = read.f(x); return typeof v === 'number' ? v : NaN; } catch { return NaN; } };

  let formulaTex = null;
  try { formulaTex = nodeToTex(node); } catch { formulaTex = null; }

  // brackets say nothing about the kind of function: (x) / (x - 2) is still rational
  const family = detectFamily(mapTree(node, n => (n.type === 'ParenthesisNode' ? n.content : n)));
  const grid = sampleGrid(fn, xMin, xMax, N);
  const sing = findSingularities(fn, grid);

  // derivatives: symbolic where possible, numeric otherwise
  const h = grid.step / 20;
  const nd1 = numericDeriv(fn, h), nd2 = numericDeriv2(fn, h);
  const s1 = differentiate(node, read.env);
  const s2 = s1 ? differentiate(s1.node, read.env) : null;
  const d1 = x => { const v = s1 ? safe(s1.f, x) : null; return v === null ? nd1(x) : v; };
  const d2 = x => { const v = s2 ? safe(s2.f, x) : null; return v === null ? nd2(x) : v; };

  const roots = findRootsV1(fn, grid, sing);
  const extrema = signChangesOf(d1, fn, grid, sing, dLeft => (dLeft > 0 ? 'max' : 'min'));
  const inflections = signChangesOf(d2, fn, grid, sing, null);

  const vertAsymptotes = dedupe([
    ...sing.points.filter(p => p.kind === 'pole').map(p => p.x),
    ...sing.gaps.filter(g => g.fromAsym).map(g => g.from),
    ...sing.gaps.filter(g => g.toAsym).map(g => g.to)
  ], 1e-9);

  const parity = detectParity(fn);

  const endRight = analyzeEnd(fn, +1);
  const endLeft = analyzeEnd(fn, -1);
  const horizAsymptotes = [];
  if (endRight.direction === 'converge') horizAsymptotes.push({ y: endRight.value, side: 'right' });
  if (endLeft.direction === 'converge') horizAsymptotes.push({ y: endLeft.value, side: 'left' });

  const finite = grid.ys.filter(y => y !== null);
  const constant = finite.length > 0 && finite.every(y => Math.abs(y - finite[0]) < 1e-12);
  const endsOscillate = endLeft.direction === 'oscillate' && endRight.direction === 'oscillate';
  const period = detectPeriod(fn, { constant, endsOscillate });

  // pieces → range and bounds
  const pieces = buildPieces(xMin, xMax, sing);
  const ends = { left: endLeft, right: endRight };
  const union = unionRanges(pieces.map(pc => pieceRange(fn, pc, grid, extrema, ends, period.periodic)));
  const rangeStr = rangeString(union);
  const lo = union.length ? Math.min(...union.map(r => r.lo)) : NaN;
  const hi = union.length ? Math.max(...union.map(r => r.hi)) : NaN;
  const sampled = finite.filter(y => Math.abs(y) <= BIG);
  const bounded = isFinite(lo) && isFinite(hi);
  const bounds = {
    lo, hi, bounded,
    sampledLo: sampled.length ? Math.min(...sampled) : NaN,
    sampledHi: sampled.length ? Math.max(...sampled) : NaN,
    loSource: 'analytic',
    hiSource: 'analytic'
  };

  const domainStr = domainString(sing, period, xMin, xMax);

  // intervals
  const singX = sing.points.map(p => p.x);
  const gapX = sing.gaps.flatMap(g => [g.from, g.to]);
  const sign = intervalsBy(xMin, xMax, [...roots, ...singX, ...gapX], sing, m => {
    const y = safe(fn, m);
    return { sign: y === null ? 'undef' : (y > 0 ? '+' : (y < 0 ? '-' : '0')) };
  });
  const mono = intervalsBy(xMin, xMax, [...extrema.map(e => e.x), ...singX, ...gapX], sing, m => {
    const v = d1(m);
    return { dir: !isFinite(v) ? 'undef' : (Math.abs(v) < 1e-12 ? 'const' : (v > 0 ? 'inc' : 'dec')) };
  });
  const concavity = intervalsBy(xMin, xMax, [...inflections.map(p => p.x), ...singX, ...gapX], sing, m => {
    const v = d2(m);
    return { kind: !isFinite(v) ? 'undef' : (Math.abs(v) < 1e-12 ? 'flat' : (v > 0 ? 'up' : 'down')) };
  });

  const continuous = sing.points.length === 0;
  const injective = injectivity(fn, mono, pieces, period, grid, extrema, ends);
  const yInt = safe(fn, 0);

  let symmetryAxis = null;
  if (parity === 'even') symmetryAxis = 0;
  else if (extrema.length === 1) symmetryAxis = extrema[0].x;

  return {
    expression,
    formula: node.toString(),
    formulaTex,
    parameters: read.parameters,
    values: { ...read.env.S },
    family,
    fn,
    fnPrime: d1, derivStr: s1 ? s1.text : 'numeric only', derivTex: s1 ? s1.tex : null,
    fnDoublePrime: d2, deriv2Str: s2 ? s2.text : 'numeric only', deriv2Tex: s2 ? s2.tex : null,
    domain: domainStr,
    range: rangeStr,
    codomain: 'ℝ',
    parity,
    period,
    symmetryAxis,
    roots, extrema, inflections,
    asymptotes: vertAsymptotes,
    singularities: sing.points,
    horizAsymptotes,
    yIntercept: yInt,
    sign, mono, concavity,
    bounded, bounds,
    continuous,
    endLeft, endRight,
    injective,
    xMin, xMax
  };
}

// ============================================================
// 8. WHAT THE GRAPH DRAWS FROM AN ANALYSIS
// ============================================================

// Value of the function, or null where it has none.
export function valueAt(data, x) {
  return data && data.fn ? safe(data.fn, x) : null;
}

// Roots, extrema, inflection points and vertical asymptotes that fall
// in [xFrom, xTo]. A periodic function repeats its markers across the
// whole stretch; others show those found in the analysis window.
export function markersIn(data, xFrom, xTo) {
  const out = { roots: [], extrema: [], inflections: [], asymptotes: [] };
  if (!data || data.error || !data.fn) return out;
  const periodic = data.period && data.period.periodic;
  const P = periodic ? data.period.T : 0;
  const repeat = xs => {
    if (!periodic) return xs.filter(x => x >= xFrom && x <= xTo);
    const base = xs.filter(x => x >= data.xMin && x < data.xMin + P - 1e-9);
    const all = [];
    for (const b of base) {
      const k0 = Math.ceil((xFrom - b) / P), k1 = Math.floor((xTo - b) / P);
      if (k1 - k0 > 2000) continue;
      for (let k = k0; k <= k1; k++) all.push(b + k * P);
    }
    return all;
  };
  out.roots = repeat(data.roots).map(x => ({ x, y: 0 }));
  const kinds = data.extrema.map(e => e);
  for (const x of repeat(data.extrema.map(e => e.x))) {
    const y = safe(data.fn, x);
    if (y === null) continue;
    let src = kinds.find(e => e.x === x);
    if (!src && periodic) src = kinds.find(e => Math.abs(((x - e.x) / P) - Math.round((x - e.x) / P)) < 1e-9);
    out.extrema.push({ x, y, kind: src ? src.kind : 'max' });
  }
  for (const x of repeat(data.inflections.map(p => p.x))) {
    const y = safe(data.fn, x);
    if (y !== null) out.inflections.push({ x, y });
  }
  out.asymptotes = repeat(data.asymptotes);
  return out;
}

// F(x) = ∫ from c to x of f, by the trapezoid rule on the analysis
// window. c is 0 when the function is continuous there, otherwise the
// middle of the widest unbroken stretch. F exists only on the unbroken
// stretch around c: an area cannot be carried across a pole or a jump.
// Returns the function with two extra fields: F.from (c) and F.piece.
export function antiderivative(data, samples = 2000) {
  const f = data.fn, a = data.xMin, b = data.xMax;
  const breaks = [...new Set([...(data.singularities || []).map(p => p.x), ...(data.asymptotes || [])])]
    .filter(x => x > a && x < b).sort((p, q) => p - q);
  const edges = [a, ...breaks, b];
  let lo = a, hi = b, c = 0;
  const holds0 = a <= 0 && b >= 0 && !breaks.some(x => Math.abs(x) < 1e-9) && safe(f, 0) !== null;
  if (holds0) {
    for (let i = 0; i < edges.length - 1; i++) if (edges[i] <= 0 && 0 <= edges[i + 1]) { lo = edges[i]; hi = edges[i + 1]; }
  } else {
    let best = -1;
    for (let i = 0; i < edges.length - 1; i++) {
      const mid = (edges[i] + edges[i + 1]) / 2;
      if (edges[i + 1] - edges[i] > best && safe(f, mid) !== null) { best = edges[i + 1] - edges[i]; lo = edges[i]; hi = edges[i + 1]; c = mid; }
    }
  }
  const step = (b - a) / samples;
  const ys = new Float64Array(samples + 1);
  let acc = 0, prev = safe(f, a);
  for (let i = 1; i <= samples; i++) {
    const y = safe(f, a + i * step);
    if (y !== null && prev !== null && Math.abs(y) < BIG && Math.abs(prev) < BIG) acc += ((y + prev) / 2) * step;
    ys[i] = acc;
    prev = y;
  }
  const at = x => {
    const t = (x - a) / step, i = Math.min(samples - 1, Math.max(0, Math.floor(t)));
    return ys[i] + (ys[i + 1] - ys[i]) * (t - i);
  };
  const shift = at(c);
  const inner = lo > a || hi < b;   // open ends at a break
  const F = x => {
    if (x < lo || x > hi || (inner && ((lo > a && x <= lo) || (hi < b && x >= hi)))) return NaN;
    return safe(f, x) === null ? NaN : at(x) - shift;
  };
  F.from = c;
  F.piece = [lo, hi];
  return F;
}

// Corner points of the area between the curve and the x-axis over
// [from, to], for a `polygon` annotation.
export function areaPolygon(data, from, to, samples = 240) {
  const pts = [[from, 0]];
  for (let i = 0; i <= samples; i++) {
    const x = from + ((to - from) * i) / samples;
    const y = safe(data.fn, x);
    pts.push([x, y === null ? 0 : y]);
  }
  pts.push([to, 0]);
  return pts;
}

// ∫ from a to b of f, Simpson's rule.
export function integrate(data, a, b, n = 400) {
  const f = x => { const v = safe(data.fn, x); return v === null ? 0 : v; };
  const h = (b - a) / n;
  let s = f(a) + f(b);
  for (let i = 1; i < n; i++) s += f(a + i * h) * (i % 2 ? 4 : 2);
  return (s * h) / 3;
}

// ============================================================
// Two functions side by side
// ============================================================
//
// compareFunctions(f, g, xMin, xMax) looks at f − g between xMin and
// xMax and says where the graphs meet and which one is higher between
// the meetings:
//   { same,                      true when f and g agree everywhere they were tried
//     crossings: [{ x, y }],     points the graphs share (crossing or touching)
//     intervals: [{ from, to, rel }] }   rel: 'above' (f is higher) | 'below' | 'equal' | 'undefined'
export function compareFunctions(f, g, xMin, xMax, samples = 800) {
  const out = { same: false, crossings: [], intervals: [] };
  if (typeof f !== 'function' || typeof g !== 'function' || !(xMax > xMin)) return out;
  const d = x => {
    const a = safe(f, x), b = safe(g, x);
    return Number.isFinite(a) && Number.isFinite(b) ? a - b : NaN;
  };
  const size = x => { const a = safe(f, x); return 1 + (Number.isFinite(a) ? Math.abs(a) : 0); };
  const span = xMax - xMin, step = span / samples;
  const xs = [], ds = [];
  for (let i = 0; i <= samples; i++) { const x = xMin + i * step; xs.push(x); ds.push(d(x)); }

  const finite = ds.filter(Number.isFinite);
  if (finite.length && finite.every((v, i) => Math.abs(v) < 1e-9 * size(xs[i]))) {
    out.same = true;
    out.intervals.push({ from: xMin, to: xMax, rel: 'equal' });
    return out;
  }

  const found = [];
  const add = x => { if (!found.some(c => Math.abs(c - x) < span * 1e-6)) found.push(x); };
  for (let i = 0; i < samples; i++) {
    const a = ds[i], b = ds[i + 1];
    if (!Number.isFinite(a) || !Number.isFinite(b)) continue;
    if (a === 0) { add(xs[i]); continue; }
    if (a * b < 0) {
      // a change of sign: a crossing, unless one of the two jumps there
      let lo = xs[i], hi = xs[i + 1], dlo = a;
      for (let k = 0; k < 60; k++) {
        const mid = (lo + hi) / 2, dm = d(mid);
        if (!Number.isFinite(dm)) { lo = NaN; break; }
        if (dm === 0) { lo = hi = mid; break; }
        if (dlo * dm < 0) hi = mid; else { lo = mid; dlo = dm; }
      }
      if (Number.isFinite(lo)) {
        const x = (lo + hi) / 2, dx = d(x);
        if (Number.isFinite(dx) && Math.abs(dx) < 1e-6 * size(x)) add(x);
      }
    } else if (i > 0 && Number.isFinite(ds[i - 1]) && Math.abs(a) < Math.abs(ds[i - 1]) && Math.abs(a) <= Math.abs(b)) {
      // no change of sign, but the gap has a smallest value here: touching?
      let lo = xs[i - 1], hi = xs[i + 1];
      for (let k = 0; k < 60; k++) {
        const m1 = lo + (hi - lo) / 3, m2 = hi - (hi - lo) / 3;
        if (Math.abs(d(m1)) < Math.abs(d(m2))) hi = m2; else lo = m1;
      }
      const x = (lo + hi) / 2, dx = d(x);
      if (Number.isFinite(dx) && Math.abs(dx) < 1e-7 * size(x)) add(x);
    }
  }
  if (ds[samples] === 0) add(xs[samples]);
  found.sort((p, q) => p - q);
  out.crossings = found.map(x => ({ x: snapX(x), y: safe(f, snapX(x)) })).filter(p => Number.isFinite(p.y));

  // which is higher, sample by sample, joined into runs
  const relAt = v => (!Number.isFinite(v) ? 'undefined' : v > 0 ? 'above' : v < 0 ? 'below' : 'equal');
  const cuts = out.crossings.map(c => c.x);
  let from = xMin, rel = null;
  for (let i = 0; i <= samples; i++) {
    let r = relAt(ds[i]);
    if (r === 'equal') r = rel || 'equal';          // a single meeting point belongs to the run it is in
    if (rel === null) { rel = r; continue; }
    if (r !== rel) {
      const cut = cuts.find(c => c >= xs[i - 1] - step * 1e-6 && c <= xs[i] + step * 1e-6);
      const at = cut !== undefined ? cut : (xs[i - 1] + xs[i]) / 2;
      if (at > from) out.intervals.push({ from, to: at, rel });
      from = at; rel = r;
    }
  }
  if (rel !== null && xMax > from) out.intervals.push({ from, to: xMax, rel });

  // A single point where one of the two is not defined (a pole, a hole)
  // is a boundary between runs, not a run of its own.
  const runs = [];
  out.intervals.forEach((iv, i, all) => {
    const inside = i > 0 && i < all.length - 1;
    if (iv.rel === 'undefined' && inside && iv.to - iv.from <= step * 2.5) {
      const at = snapX((iv.from + iv.to) / 2);
      runs[runs.length - 1].to = at;
      all[i + 1] = { ...all[i + 1], from: at };
      return;
    }
    const prev = runs[runs.length - 1];
    if (prev && prev.rel === all[i].rel && prev.to === all[i].from && !out.crossings.some(c => c.x === prev.to)) prev.to = all[i].to;
    else runs.push({ ...all[i] });
  });
  out.intervals = runs;
  return out;
}
