// Graph Studio — engine / numerics
//
// The numerical methods, all working in screen space (pixels), so the
// amount of work follows what a person can actually see.
//
//   sampleCurve        one adaptive sampler for y = f(x), x = g(y),
//                      parametric and polar curves
//   contour            implicit curves F(x, y) = 0 (marching squares)
//   regionRuns         filled area of an inequality
//   explicitSpecialPoints, intersectionsX
//                      roots, extrema, y-intercept, intersections
//
// No React, no DOM.

const BIG = 1e6;

function dist(a, b) { const dx = a[0] - b[0], dy = a[1] - b[1]; return Math.sqrt(dx * dx + dy * dy); }

// Which side(s) of the canvas a point lies beyond, with a one-canvas margin.
function outCode(p, W, H) {
  return (p[0] < -W ? 1 : 0) | (p[0] > 2 * W ? 2 : 0) | (p[1] < -H ? 4 : 0) | (p[1] > 2 * H ? 8 : 0);
}

// ------------------------------------------------------------
// World ↔ screen
// ------------------------------------------------------------
// bounds: { xMin, xMax, yMin, yMax }. Screen values are clamped so a
// curve shooting to infinity never produces unusable coordinates.
export function makeTransform(bounds, W, H) {
  const { xMin, xMax, yMin, yMax } = bounds;
  const kx = W / (xMax - xMin), ky = H / (yMax - yMin);
  const clamp = v => (v > BIG ? BIG : v < -BIG ? -BIG : v);
  return {
    sx: x => clamp((x - xMin) * kx),
    sy: y => clamp((yMax - y) * ky),
    wx: px => xMin + px / kx,
    wy: py => yMax - py / ky
  };
}

// ------------------------------------------------------------
// Adaptive curve sampler
// ------------------------------------------------------------
// evalScreen(t) returns the screen point [sx, sy] for parameter t, or
// null where the curve is undefined. The result is a list of paths;
// each path is a flat array [sx0, sy0, sx1, sy1, …]. A new path starts
// wherever the curve really breaks.
//
//   • a segment is split while its midpoint is more than 0.4 px off the
//     straight line, or while it is longer than 6 px
//   • when splitting has to stop and the segment is still long, the
//     jump test decides: a real jump (floor, tan, sign) breaks the
//     path, a steep but continuous stretch is drawn
//   • between a defined and an undefined sample the last defined point
//     is found by bisection, so sqrt(x) reaches x = 0
export function sampleCurve(evalScreen, t0, t1, opts) {
  const { W, H, base = 400, maxDepth = 12, budget = 150000, spanAxis = null, minSpan = 0.1, dropSpecks = false } = opts;
  const paths = [];
  let cur = null, evals = 0;

  const ev = t => { evals++; return evalScreen(t); };
  const start = p => { cur = [p[0], p[1]]; paths.push(cur); };
  const lineTo = p => { if (!cur) start(p); else cur.push(p[0], p[1]); };
  const breakPath = () => { cur = null; };

  // Last defined point when moving from a defined t toward an undefined one.
  const edge = (tDef, pDef, tUndef) => {
    let a = tDef, pa = pDef, b = tUndef;
    for (let i = 0; i < 40; i++) {
      const m = (a + b) / 2;
      if (m === a || m === b) break;
      const pm = ev(m);
      if (pm) { a = m; pa = pm; } else b = m;
    }
    return { t: a, p: pa };
  };

  // Bisect toward the half with the bigger jump until the interval is
  // as small as numbers allow. A jump that survives is a real break.
  const isJump = (ta, pa, tb, pb) => {
    for (let i = 0; i < 60; i++) {
      const tm = (ta + tb) / 2;
      if (tm === ta || tm === tb) break;
      const pm = ev(tm);
      if (!pm) return true;
      if (dist(pa, pm) > dist(pm, pb)) { tb = tm; pb = pm; } else { ta = tm; pa = pm; }
    }
    return dist(pa, pb) > 2;
  };

  const refine = (ta, pa, tb, pb, depth) => {
    if (!pa || !pb) {
      if (!pa && !pb) {
        if (depth < 4 && evals < budget) {
          const tm = (ta + tb) / 2, pm = ev(tm);
          if (pm) { refine(ta, null, tm, pm, depth + 1); refine(tm, pm, tb, null, depth + 1); return; }
        }
        breakPath();
        return;
      }
      if (pa) {
        const e = edge(ta, pa, tb);
        if (e.t !== ta) refine(ta, pa, e.t, e.p, depth + 1);
        breakPath();
      } else {
        const e = edge(tb, pb, ta);
        breakPath();
        start(e.p);
        if (e.t !== tb) refine(e.t, e.p, tb, pb, depth + 1);
      }
      return;
    }

    if (evals > budget || (outCode(pa, W, H) & outCode(pb, W, H))) { lineTo(pb); return; }

    const tm = (ta + tb) / 2;
    const pm = ev(tm);
    if (!pm) {
      if (depth < maxDepth) { refine(ta, pa, tm, null, depth + 1); refine(tm, null, tb, pb, depth + 1); }
      else { breakPath(); start(pb); }
      return;
    }

    const mx = (pa[0] + pb[0]) / 2, my = (pa[1] + pb[1]) / 2;
    const dev = Math.hypot(pm[0] - mx, pm[1] - my);
    const len = dist(pa, pb);
    const span = spanAxis === null ? len : Math.abs(pb[spanAxis] - pa[spanAxis]);
    const canSplit = depth < maxDepth && span > minSpan;

    if (canSplit && (dev > 0.4 || len > 6)) {
      refine(ta, pa, tm, pm, depth + 1);
      refine(tm, pm, tb, pb, depth + 1);
      return;
    }
    if (len > 6 && isJump(ta, pa, tb, pb)) { breakPath(); start(pb); return; }
    lineTo(pm);
    lineTo(pb);
  };

  const n = base;
  let tPrev = t0, pPrev = ev(t0);
  if (pPrev) start(pPrev);
  for (let i = 1; i <= n; i++) {
    const t = t0 + (t1 - t0) * (i / n);
    const p = ev(t);
    refine(tPrev, pPrev, t, p, 0);
    tPrev = t; pPrev = p;
  }
  if (!dropSpecks) return { paths, evals };
  // A path that never leaves one pixel is a stray defined value inside
  // an undefined stretch (x^x at a negative fraction), not a curve.
  const kept = paths.filter(p => {
    let x0 = p[0], x1 = p[0], y0 = p[1], y1 = p[1];
    for (let i = 2; i < p.length; i += 2) {
      if (p[i] < x0) x0 = p[i]; else if (p[i] > x1) x1 = p[i];
      if (p[i + 1] < y0) y0 = p[i + 1]; else if (p[i + 1] > y1) y1 = p[i + 1];
    }
    return x1 - x0 >= 0.75 || y1 - y0 >= 0.75;
  });
  return { paths: kept, evals };
}

export function sampleExplicitX(f, bounds, W, H) {
  const T = makeTransform(bounds, W, H);
  const pad = (bounds.xMax - bounds.xMin) * 0.01;
  return sampleCurve(
    x => { const y = f(x); return Number.isFinite(y) ? [T.sx(x), T.sy(y)] : null; },
    bounds.xMin - pad, bounds.xMax + pad,
    { W, H, base: Math.ceil(W / 2), maxDepth: 14, spanAxis: 0, minSpan: 0.08, dropSpecks: true }
  );
}

export function sampleExplicitY(g, bounds, W, H) {
  const T = makeTransform(bounds, W, H);
  const pad = (bounds.yMax - bounds.yMin) * 0.01;
  return sampleCurve(
    y => { const x = g(y); return Number.isFinite(x) ? [T.sx(x), T.sy(y)] : null; },
    bounds.yMin - pad, bounds.yMax + pad,
    { W, H, base: Math.ceil(H / 2), maxDepth: 14, spanAxis: 1, minSpan: 0.08, dropSpecks: true }
  );
}

export function sampleParametric(xy, t0, t1, bounds, W, H) {
  const T = makeTransform(bounds, W, H);
  return sampleCurve(
    t => { const p = xy(t); return p && Number.isFinite(p[0]) && Number.isFinite(p[1]) ? [T.sx(p[0]), T.sy(p[1])] : null; },
    t0, t1,
    { W, H, base: 600, maxDepth: 10 }
  );
}

// ------------------------------------------------------------
// Implicit curves F(x, y) = 0
// ------------------------------------------------------------
// Marching squares on a grid of `cell`-pixel squares. Each crossing is
// refined along its edge, and a crossing where |F| does not shrink is
// thrown away: there F changes sign by passing through infinity, not
// through zero (y = tan(x) written implicitly would otherwise get false
// vertical lines).
//
// Returns a flat array of segments [x0, y0, x1, y1, …] in pixels.

// corner bits: top-left 8, top-right 4, bottom-right 2, bottom-left 1
// edges: T top, R right, B bottom, L left
const SQUARE_TABLE = {
  1: [['L', 'B']], 2: [['B', 'R']], 3: [['L', 'R']], 4: [['T', 'R']],
  6: [['T', 'B']], 7: [['T', 'L']], 8: [['T', 'L']], 9: [['T', 'B']],
  11: [['T', 'R']], 12: [['L', 'R']], 13: [['B', 'R']], 14: [['L', 'B']]
};

export function contour(F, bounds, W, H, cell = 4) {
  const T = makeTransform(bounds, W, H);
  const nx = Math.ceil(W / cell) + 1, ny = Math.ceil(H / cell) + 1;
  const vals = new Float64Array(nx * ny);
  for (let j = 0; j < ny; j++) {
    const wy = T.wy(j * cell);
    for (let i = 0; i < nx; i++) vals[j * nx + i] = F(T.wx(i * cell), wy);
  }
  const segs = [];

  // Where F changes sign along one edge of a square. The edge is halved
  // eight times. Through a real zero the two values at the ends of the
  // shrinking piece come together; through a pole or a jump they do not,
  // and the crossing is thrown away.
  const crossing = (sx0, sy0, v0, sx1, sy1, v1) => {
    let a = 0, b = 1, fa = v0, fb = v1;
    for (let k = 0; k < 8; k++) {
      const t = (a + b) / 2;
      const ft = F(T.wx(sx0 + (sx1 - sx0) * t), T.wy(sy0 + (sy1 - sy0) * t));
      if (!Number.isFinite(ft)) return null;
      if ((ft > 0) === (fa > 0)) { a = t; fa = ft; } else { b = t; fb = ft; }
    }
    if (Math.abs(fa - fb) > 0.5 * Math.abs(v0 - v1)) return null;
    const t = fa === fb ? a : a + (b - a) * (fa / (fa - fb));
    return [sx0 + (sx1 - sx0) * t, sy0 + (sy1 - sy0) * t];
  };

  for (let j = 0; j < ny - 1; j++) {
    for (let i = 0; i < nx - 1; i++) {
      const va = vals[j * nx + i], vb = vals[j * nx + i + 1];
      const vc = vals[(j + 1) * nx + i + 1], vd = vals[(j + 1) * nx + i];
      if (!(Number.isFinite(va) && Number.isFinite(vb) && Number.isFinite(vc) && Number.isFinite(vd))) continue;
      const code = (va > 0 ? 8 : 0) | (vb > 0 ? 4 : 0) | (vc > 0 ? 2 : 0) | (vd > 0 ? 1 : 0);
      if (code === 0 || code === 15) continue;

      const x0 = i * cell, y0 = j * cell, x1 = x0 + cell, y1 = y0 + cell;
      const pt = {
        T: () => crossing(x0, y0, va, x1, y0, vb),
        R: () => crossing(x1, y0, vb, x1, y1, vc),
        B: () => crossing(x0, y1, vd, x1, y1, vc),
        L: () => crossing(x0, y0, va, x0, y1, vd)
      };

      let pairs = SQUARE_TABLE[code];
      if (code === 5 || code === 10) {
        // two opposite corners positive: the centre value decides how to pair
        const cPos = F(T.wx(x0 + cell / 2), T.wy(y0 + cell / 2)) > 0;
        if (code === 5) pairs = cPos ? [['T', 'L'], ['B', 'R']] : [['T', 'R'], ['L', 'B']];
        else pairs = cPos ? [['T', 'R'], ['L', 'B']] : [['T', 'L'], ['B', 'R']];
      }
      for (const [e1, e2] of pairs) {
        const p = pt[e1](), q = pt[e2]();
        if (p && q) segs.push(p[0], p[1], q[0], q[1]);
      }
    }
  }
  return segs;
}

// ------------------------------------------------------------
// Regions (inequalities)
// ------------------------------------------------------------
// The condition is tested at the centre of every `cell`-pixel square.
// The result is a flat array of horizontal runs [x, y, width, height, …]
// in pixels — plain rectangles, so the canvas and the SVG renderer draw
// exactly the same area. The edge of the area is stepped at `cell`
// pixels; the boundary line drawn on top hides the steps.
export function regionRuns(cond, bounds, W, H, cell = 2) {
  const T = makeTransform(bounds, W, H);
  const nx = Math.ceil(W / cell), ny = Math.ceil(H / cell);
  const runs = [];
  for (let j = 0; j < ny; j++) {
    const wy = T.wy((j + 0.5) * cell);
    let startI = -1;
    for (let i = 0; i <= nx; i++) {
      const inside = i < nx && cond(T.wx((i + 0.5) * cell), wy);
      if (inside && startI < 0) startI = i;
      else if (!inside && startI >= 0) {
        runs.push(startI * cell, j * cell, (i - startI) * cell, cell);
        startI = -1;
      }
    }
  }
  return runs;
}

// ------------------------------------------------------------
// Special points of y = f(x) inside the view
// ------------------------------------------------------------
function bisectRoot(h, a, b, ha) {
  for (let i = 0; i < 80; i++) {
    const m = (a + b) / 2;
    if (m === a || m === b) break;
    const hm = h(m);
    if (!Number.isFinite(hm)) return null;
    if (hm === 0) return m;
    if ((hm > 0) === (ha > 0)) { a = m; ha = hm; } else b = m;
  }
  return (a + b) / 2;
}

function golden(f, a, b, sign) {
  const g = (Math.sqrt(5) - 1) / 2;
  let c = b - g * (b - a), d = a + g * (b - a);
  for (let i = 0; i < 80; i++) {
    if (sign * f(c) > sign * f(d)) b = d; else a = c;
    c = b - g * (b - a); d = a + g * (b - a);
    if (Math.abs(b - a) < 1e-13 * (1 + Math.abs(a))) break;
  }
  return (a + b) / 2;
}

// One sample per pixel; a sign change is refined by bisection and kept
// only when |h| really becomes small there (otherwise it is a pole).
function signChanges(h, bounds, W) {
  const out = [];
  const n = Math.ceil(W);
  const dx = (bounds.xMax - bounds.xMin) / n;
  let xa = bounds.xMin, ha = h(xa), hPrev = NaN;
  for (let i = 1; i <= n; i++) {
    const xb = bounds.xMin + i * dx, hb = h(xb);
    if (Number.isFinite(ha) && Number.isFinite(hb)) {
      if (ha === 0) {
        // a sample exactly on zero is a root only when it stands alone;
        // a flat stretch lying on the axis (floor(x) on 0…1) has none
        if (hb !== 0 && hPrev !== 0) out.push(xa);
      } else if (ha * hb < 0) {
        // the value must really shrink to zero: a jump through zero
        // (sign(x)) and a pole (1/x) both change sign without a root
        const r = bisectRoot(h, xa, xb, ha);
        if (r !== null && Math.abs(h(r)) <= 1e-4 * Math.min(Math.abs(ha), Math.abs(hb))) out.push(r);
      }
    }
    hPrev = ha; xa = xb; ha = hb;
  }
  if (ha === 0 && hPrev !== 0 && Number.isFinite(hPrev)) out.push(xa);
  return out;
}

// Returns [{ x, y, kind }] with kind 'root' | 'max' | 'min' | 'y-intercept'.
export function explicitSpecialPoints(f, bounds, W) {
  const pts = [];
  for (const x of signChanges(f, bounds, W)) pts.push({ x, y: 0, kind: 'root' });

  const n = Math.ceil(W);
  const dx = (bounds.xMax - bounds.xMin) / n;
  const ys = new Float64Array(n + 1);
  for (let i = 0; i <= n; i++) ys[i] = f(bounds.xMin + i * dx);
  const yRange = bounds.yMax - bounds.yMin;
  for (let i = 1; i < n; i++) {
    const y0 = ys[i - 1], y1 = ys[i], y2 = ys[i + 1];
    if (!Number.isFinite(y0) || !Number.isFinite(y1) || !Number.isFinite(y2)) continue;
    if (Math.abs(y2 - y0) > yRange) continue; // next to a big jump
    const isMax = y1 > y0 && y1 >= y2, isMin = y1 < y0 && y1 <= y2;
    if (!isMax && !isMin) continue;
    const x = golden(f, bounds.xMin + (i - 1) * dx, bounds.xMin + (i + 1) * dx, isMax ? 1 : -1);
    const y = f(x);
    if (!Number.isFinite(y)) continue;
    // a turning point is strictly above (below) both neighbours one
    // pixel away: this drops the flat steps of floor(x)
    const yl = f(x - dx), yr = f(x + dx);
    if (!(isMax ? y > yl && y > yr : y < yl && y < yr)) continue;
    // and the curve does not jump right beside it: this drops the top
    // of a sawtooth, which is approached but never reached
    const tiny = dx * 1e-3, spread = Math.max(Math.abs(y - yl), Math.abs(y - yr));
    if (Math.abs(f(x - tiny) - y) > 0.1 * spread || Math.abs(f(x + tiny) - y) > 0.1 * spread) continue;
    // a curve that only touches the axis has a root at its extremum
    if (Math.abs(y) < 1e-9 * yRange && !pts.some(p => Math.abs(p.x - x) < dx)) pts.push({ x, y: 0, kind: 'root' });
    pts.push({ x, y, kind: isMax ? 'max' : 'min' });
  }

  if (bounds.xMin < 0 && bounds.xMax > 0) {
    const y0 = f(0);
    if (Number.isFinite(y0)) pts.push({ x: 0, y: y0, kind: 'y-intercept' });
  }
  return pts;
}

export function intersectionsX(f, g, bounds, W) {
  return signChanges(x => f(x) - g(x), bounds, W).map(x => ({ x, y: f(x), kind: 'intersection' }));
}
