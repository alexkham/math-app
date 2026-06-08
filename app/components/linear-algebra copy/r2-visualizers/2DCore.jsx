
'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

// =====================================================================
//   SECTION 1  ::  Math2D
// =====================================================================
export const Math2D = {
  apply: (M, p) => [M[0][0] * p[0] + M[0][1] * p[1], M[1][0] * p[0] + M[1][1] * p[1]],
  det: (M) => M[0][0] * M[1][1] - M[0][1] * M[1][0],
  trace: (M) => M[0][0] + M[1][1],

  inverse(M) {
    const d = Math2D.det(M);
    if (Math.abs(d) < 1e-7) return null;
    return [[M[1][1] / d, -M[0][1] / d], [-M[1][0] / d, M[0][0] / d]];
  },

  fmt(x) {
    if (Math.abs(x) < 1e-9) return '0';
    const r = Math.round(x * 100) / 100;
    return r.toFixed(2).replace(/\.?0+$/, '') || '0';
  },
  fmtPair(p) { return `(${Math2D.fmt(p[0])}, ${Math2D.fmt(p[1])})`; },

  rank(A) {
    const isZero = Math.abs(A[0][0]) + Math.abs(A[0][1]) + Math.abs(A[1][0]) + Math.abs(A[1][1]) < 1e-9;
    if (isZero) return 0;
    if (Math.abs(Math2D.det(A)) > 1e-6) return 2;
    return 1;
  },

  kerImg(A) {
    const r = Math2D.rank(A);
    if (r !== 1) return { rank: r };
    let ker;
    if (Math.hypot(A[0][0], A[0][1]) > 1e-9) ker = [-A[0][1], A[0][0]];
    else ker = [-A[1][1], A[1][0]];
    let n = Math.hypot(ker[0], ker[1]) || 1;
    ker = [ker[0] / n, ker[1] / n];
    let img;
    if (Math.hypot(A[0][0], A[1][0]) > 1e-9) img = [A[0][0], A[1][0]];
    else img = [A[0][1], A[1][1]];
    n = Math.hypot(img[0], img[1]) || 1;
    img = [img[0] / n, img[1] / n];
    return { rank: 1, ker, img };
  },

  classify(A) {
    const r = Math2D.rank(A);
    const d = Math2D.det(A);
    if (r === 0) return 'zero map';
    if (r === 1) return 'rank 1';
    if (d < 0) return 'orientation-reversing';
    return `det ${Math2D.fmt(d)}`;
  },

  eigenvalues(A) {
    const tr = Math2D.trace(A);
    const det = Math2D.det(A);
    const disc = tr * tr - 4 * det;
    if (disc >= -1e-9) {
      const r = Math.sqrt(Math.max(0, disc));
      return { type: 'real', vals: [(tr + r) / 2, (tr - r) / 2], disc, tr, det };
    }
    const r = Math.sqrt(-disc);
    return { type: 'complex', vals: [{ re: tr / 2, im: r / 2 }, { re: tr / 2, im: -r / 2 }], disc, tr, det };
  },

  eigenvector(A, lam) {
    const a = A[0][0], b = A[0][1], c = A[1][0], d = A[1][1];
    const tol = 1e-7;
    if (Math.abs(b) > tol) {
      const u = [b, lam - a];
      const n = Math.hypot(u[0], u[1]);
      if (n > tol) return [u[0] / n, u[1] / n];
    }
    if (Math.abs(c) > tol) {
      const u = [lam - d, c];
      const n = Math.hypot(u[0], u[1]);
      if (n > tol) return [u[0] / n, u[1] / n];
    }
    if (Math.abs(lam - a) < tol) return [1, 0];
    if (Math.abs(lam - d) < tol) return [0, 1];
    return null;
  },

  eigenStructure(A) {
    const ev = Math2D.eigenvalues(A);
    if (ev.type === 'complex') return { kind: 'complex', ev };
    const isIsotropic = Math.abs(A[0][1]) < 1e-9 && Math.abs(A[1][0]) < 1e-9 && Math.abs(A[0][0] - A[1][1]) < 1e-9;
    if (isIsotropic) return { kind: 'isotropic', lambda: A[0][0], ev };
    const repeated = Math.abs(ev.vals[0] - ev.vals[1]) < 1e-7;
    if (repeated) {
      const vec = Math2D.eigenvector(A, ev.vals[0]);
      return { kind: 'defective', lambda: ev.vals[0], vec, ev };
    }
    const v1 = Math2D.eigenvector(A, ev.vals[0]);
    const v2 = Math2D.eigenvector(A, ev.vals[1]);
    return { kind: 'distinct', lambdas: ev.vals, vecs: [v1, v2], ev };
  },

  alignment(A, v) {
    const Av = Math2D.apply(A, v);
    const vMag = Math.hypot(v[0], v[1]);
    const aMag = Math.hypot(Av[0], Av[1]);
    if (aMag < 1e-6 && vMag > 1e-6) {
      return { Av, vMag, aMag, angleDeg: 0, aligned: true, lambda: 0 };
    }
    if (vMag < 1e-6 || aMag < 1e-6) {
      return { Av, vMag, aMag, angleDeg: 0, aligned: false, lambda: null };
    }
    const cross = v[0] * Av[1] - v[1] * Av[0];
    const dot = v[0] * Av[0] + v[1] * Av[1];
    const sinTheta = cross / (vMag * aMag);
    const angleDeg = Math.atan2(cross, dot) * 180 / Math.PI;
    const aligned = Math.abs(sinTheta) < Math.sin(4 * Math.PI / 180);
    const lambda = aligned ? dot / (vMag * vMag) : null;
    return { Av, vMag, aMag, angleDeg, aligned, lambda };
  },

  snapToEigen(A, v) {
    const es = Math2D.eigenStructure(A);
    let dirs = [];
    if (es.kind === 'distinct') dirs = es.vecs;
    else if (es.kind === 'defective') dirs = [es.vec];
    else if (es.kind === 'isotropic') return v.slice();
    else return null;
    const vMag = Math.hypot(v[0], v[1]) || 1.5;
    let best = null, bestScore = -Infinity;
    for (const d of dirs) {
      if (!d) continue;
      const dot = v[0] * d[0] + v[1] * d[1];
      const abs = Math.abs(dot);
      if (abs > bestScore) {
        bestScore = abs;
        const sgn = dot >= 0 ? 1 : -1;
        best = [d[0] * sgn, d[1] * sgn];
      }
    }
    if (!best) return null;
    return [best[0] * vMag, best[1] * vMag];
  },

  basisMatrix(b1, b2) {
    return [[b1[0], b2[0]], [b1[1], b2[1]]];
  },

  coordsInBasis(b1, b2, v) {
    const Binv = Math2D.inverse(Math2D.basisMatrix(b1, b2));
    if (!Binv) return null;
    return Math2D.apply(Binv, v);
  },

  orthInfo(b1, b2) {
    const B = Math2D.basisMatrix(b1, b2);
    const d = Math2D.det(B);
    if (Math.abs(d) < 1e-7) return { kind: 'singular', det: d };
    const dot = b1[0] * b2[0] + b1[1] * b2[1];
    const m1 = Math.hypot(b1[0], b1[1]);
    const m2 = Math.hypot(b2[0], b2[1]);
    if (Math.abs(dot) < 1e-3) {
      if (Math.abs(m1 - 1) < 1e-3 && Math.abs(m2 - 1) < 1e-3) return { kind: 'orthonormal', det: d };
      return { kind: 'orthogonal', det: d };
    }
    const ang = Math.acos(Math.max(-1, Math.min(1, dot / (m1 * m2)))) * 180 / Math.PI;
    return { kind: 'oblique', angle: ang, det: d };
  },

  rotMatrix(deg) {
    const r = deg * Math.PI / 180;
    const c = Math.cos(r), s = Math.sin(r);
    return [[c, -s], [s, c]];
  },

  interp(t, A) {
    return [
      [1 + t * (A[0][0] - 1), t * A[0][1]],
      [t * A[1][0], 1 + t * (A[1][1] - 1)],
    ];
  },
};

// =====================================================================
//   SECTION 2  ::  Geom + SVGRender  ::  rectangular viewport
// =====================================================================
// Geom is now rectangular: width/height in SVG units, gridRx/gridRy in math units.
// Both axes share the same `scale` (px per unit) so squares stay square.
export const DEFAULT_GEOM = { width: 700, height: 500, scale: 50, gridRx: 7, gridRy: 5 };

export function projection(geom) {
  const cx = geom.width / 2, cy = geom.height / 2;
  return (p) => [cx + geom.scale * p[0], cy - geom.scale * p[1]];
}

export function pointerToMath(svgRef, e, geom) {
  if (!svgRef.current) return [0, 0];
  const rect = svgRef.current.getBoundingClientRect();
  const xSvg = (e.clientX - rect.left) * (geom.width / rect.width);
  const ySvg = (e.clientY - rect.top) * (geom.height / rect.height);
  const cx = geom.width / 2, cy = geom.height / 2;
  return [(xSvg - cx) / geom.scale, (cy - ySvg) / geom.scale];
}

export const SVGRender = {
  grid(geom, gridClass = 'r2-grid-line', axisClass = 'r2-grid-axis') {
    const tx = projection(geom);
    const Rx = geom.gridRx, Ry = geom.gridRy;
    let s = '';
    // horizontal lines: i ranges over y-units
    for (let i = -Ry; i <= Ry; i++) {
      const cls = i === 0 ? axisClass : gridClass;
      const [x1, y1] = tx([-Rx, i]);
      const [x2, y2] = tx([Rx, i]);
      s += `<line class="${cls}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
    }
    // vertical lines: i ranges over x-units
    for (let i = -Rx; i <= Rx; i++) {
      const cls = i === 0 ? axisClass : gridClass;
      const [x1, y1] = tx([i, -Ry]);
      const [x2, y2] = tx([i, Ry]);
      s += `<line class="${cls}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
    }
    return s;
  },

  origin(geom, cls = 'r2-origin-dot') {
    const tx = projection(geom);
    const [ox, oy] = tx([0, 0]);
    return `<circle class="${cls}" cx="${ox}" cy="${oy}" r="2.5"/>`;
  },

  lineThroughOrigin(dir, lineCls, haloCls, geom) {
    const tx = projection(geom);
    const R = Math.max(geom.gridRx, geom.gridRy) * 1.5;
    const [x1, y1] = tx([-R * dir[0], -R * dir[1]]);
    const [x2, y2] = tx([R * dir[0], R * dir[1]]);
    let s = '';
    if (haloCls) s += `<line class="${haloCls}" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
    s += `<line class="${lineCls}" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
    return s;
  },

  labelOnLine(dir, text, cls, geom, dist = 4.4, offset = 0.5) {
    const tx = projection(geom);
    const perp = [-dir[1], dir[0]];
    const p = [dist * dir[0] + offset * perp[0], dist * dir[1] + offset * perp[1]];
    const [x, y] = tx(p);
    return `<text class="${cls}" x="${x.toFixed(2)}" y="${y.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">${text}</text>`;
  },

  arrow(p, opts, geom) {
    const { shaftCls, tipCls, markerId, label, labelCls, showLabel, aligned } = opts;
    const tx = projection(geom);
    const [ox, oy] = tx([0, 0]);
    const mag = Math.hypot(p[0], p[1]);
    if (mag < 0.02) {
      return `<circle class="${tipCls}" cx="${ox}" cy="${oy}" r="6"/>`;
    }
    const [tipX, tipY] = tx(p);
    const a = aligned ? ' aligned' : '';
    let s = `<line class="${shaftCls}${a}" x1="${ox}" y1="${oy}" x2="${tipX.toFixed(2)}" y2="${tipY.toFixed(2)}" marker-end="url(#${markerId})"/>`;
    s += `<circle class="${tipCls}${a}" cx="${tipX.toFixed(2)}" cy="${tipY.toFixed(2)}" r="6"/>`;
    if (showLabel && label) {
      const lx = p[0] + (p[0] >= 0 ? 0.3 : -0.3);
      const ly = p[1] + (p[1] >= 0 ? 0.3 : -0.3);
      const [px, py] = tx([lx, ly]);
      s += `<text class="${labelCls}${a}" x="${px.toFixed(2)}" y="${py.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">${label}</text>`;
    }
    return s;
  },

  basisGrid(b1, b2, geom, cls1 = 'r2-bgrid-1', cls2 = 'r2-bgrid-2') {
    const B = Math2D.basisMatrix(b1, b2);
    if (Math.abs(Math2D.det(B)) < 1e-7) return '';
    const tx = projection(geom);
    const R = Math.max(geom.gridRx, geom.gridRy) * 2;
    let s = '';
    for (let k = -R; k <= R; k++) {
      const p1 = Math2D.apply(B, [-R, k]);
      const p2 = Math2D.apply(B, [R, k]);
      const [x1, y1] = tx(p1);
      const [x2, y2] = tx(p2);
      const c = k === 0 ? `${cls1} axis` : cls1;
      s += `<line class="${c}" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
    }
    for (let k = -R; k <= R; k++) {
      const p1 = Math2D.apply(B, [k, -R]);
      const p2 = Math2D.apply(B, [k, R]);
      const [x1, y1] = tx(p1);
      const [x2, y2] = tx(p2);
      const c = k === 0 ? `${cls2} axis` : cls2;
      s += `<line class="${c}" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
    }
    return s;
  },
};

// =====================================================================
//   SECTION 3  ::  useDrag
// =====================================================================
export function useDrag({ geom = DEFAULT_GEOM, onDrag, dataAttr = 'handle' }) {
  const svgRef = useRef(null);
  const draggingRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const onPointerDown = (e) => {
    const h = e.target.dataset && e.target.dataset[dataAttr];
    if (!h) return;
    draggingRef.current = h;
    setIsDragging(true);
    try { e.target.setPointerCapture(e.pointerId); } catch (_) {}
    if (onDrag) onDrag(h, pointerToMath(svgRef, e, geom), e);
  };
  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    if (onDrag) onDrag(draggingRef.current, pointerToMath(svgRef, e, geom), e);
  };
  const onPointerUp = (e) => {
    if (!draggingRef.current) return;
    try { e.target.releasePointerCapture(e.pointerId); } catch (_) {}
    draggingRef.current = null;
    setIsDragging(false);
  };

  return {
    svgRef,
    isDragging,
    activeHandle: draggingRef.current,
    handlers: { onPointerDown, onPointerMove, onPointerUp, onPointerCancel: onPointerUp },
  };
}

// =====================================================================
//   SECTION 4  ::  Shared CSS
// =====================================================================
export const SHARED_CSS = `
.r2-root{
  --bg:#f7f9fc;
  --surface:#ffffff;
  --surface-2:#f3f6fa;
  --border:#dde3ec;
  --border-strong:#c4cdda;

  --text:#0f1729;
  --text-soft:#243049;
  --text-dim:#4a5673;
  --text-faint:#7989a3;

  --accent:#2b5bd7;
  --accent-hover:#1e46b3;
  --accent-soft:#eaf0fb;
  --accent-line:#c8d6f1;

  --v:#b54708;
  --av:#0e6e8a;
  --b1:#0e6e8a;
  --b2:#5b34c4;
  --eigen:#057a55;
  --align:#a05a00;
  --warn:#a8201d;

  --v-tint:#fbeee3;--v-line:#ebd2b7;
  --b1-tint:#eaf3f6;--b1-line:#cce1e7;
  --b2-tint:#f0ebf9;--b2-line:#dfd3f1;
  --eigen-tint:#e7f4ee;--eigen-line:#c8e2d4;
  --warn-tint:#faedec;--warn-line:#ecd0cf;

  --grid:#eef2f7;--grid-axis:#a3b0c5;

  --font-display:'Fraunces',Georgia,serif;
  --font-body:'IBM Plex Sans',-apple-system,BlinkMacSystemFont,sans-serif;
  --font-mono:'JetBrains Mono',Menlo,monospace;

  --shadow-sm:0 1px 0 rgba(15,23,41,.03);
  --shadow-card:0 1px 0 rgba(15,23,41,.04), 0 1px 2px rgba(15,23,41,.04);
  --radius:6px;

  color:var(--text);font-family:var(--font-body);line-height:1.5;
  -webkit-font-smoothing:antialiased;
  background:var(--bg);
}
.r2-root *{box-sizing:border-box}

.r2-app{
  display:grid;
  grid-template-rows:auto auto auto auto;
  gap:10px;padding:14px 24px;max-width:1320px;margin:0 auto;
  background:var(--bg);
}

/* ---- Lede ---- */
.r2-lede{display:flex;align-items:baseline;gap:14px;font-size:14px;color:var(--text-dim);line-height:1.45}
.r2-crumb{font-family:var(--font-mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--text-faint);white-space:nowrap}
.r2-crumb .r2-dot{color:var(--accent);margin:0 6px}
.r2-lede strong{color:var(--text);font-weight:500}
.r2-lede code{font-family:var(--font-mono);font-size:13px;background:var(--accent-soft);color:var(--accent-hover);padding:1px 6px;border-radius:3px}
.r2-lede em{font-style:italic;color:var(--text)}
.r2-lede .v{color:var(--v);font-weight:500}
.r2-lede .av{color:var(--av);font-weight:500}
.r2-lede .b1{color:var(--b1);font-weight:500}
.r2-lede .b2{color:var(--b2);font-weight:500}
.r2-lede .eig{color:var(--eigen);font-weight:500}
.r2-lede .ker{color:var(--warn);font-weight:500}
.r2-lede .img{color:var(--eigen);font-weight:500}

/* ---- Chips ---- */
.r2-chips-strip{
  display:flex;flex-wrap:wrap;gap:2px;padding:4px 8px;
  background:var(--surface);border:1px solid var(--border);
  border-radius:var(--radius);box-shadow:var(--shadow-sm);
}
.r2-chip{
  display:inline-flex;align-items:center;gap:6px;padding:4px 10px;
  font-family:var(--font-mono);font-size:11px;letter-spacing:.04em;
  color:var(--text-faint);background:transparent;border:1px solid transparent;
  border-radius:4px;cursor:pointer;user-select:none;transition:all .12s;
}
.r2-chip input{width:12px;height:12px;margin:0;accent-color:var(--accent);cursor:pointer}
.r2-chip:hover,.r2-chip:has(input:checked){color:var(--text);background:var(--accent-soft)}
.r2-chip .r2-sw{display:inline-block;width:11px;height:3px;border-radius:1px}

/* ---- Main: left column fixed 700px (canvas + scenarios), right column 360px (info) ---- */
.r2-main{display:grid;gap:14px;align-items:start;justify-content:center}
.r2-main.cols-2{grid-template-columns:700px 340px}
.r2-main.cols-2-wide{grid-template-columns:700px 360px}
.r2-main.cols-3-kernel{grid-template-columns:minmax(0,1fr) 410px minmax(0,1fr)}
.r2-main.cols-3-lt{grid-template-columns:minmax(0,1fr) 420px 1fr}
.r2-canvas-col{display:flex;flex-direction:column;gap:10px;align-items:stretch;min-width:0}
.r2-info-col{display:flex;flex-direction:column;gap:10px;min-width:0}
.r2-center-col{display:flex;flex-direction:column;gap:8px;min-width:0}

/* ---- Canvas: fills column width, 7:5 aspect ---- */
.r2-canvas-wrap{display:flex;align-items:center;justify-content:center;width:100%}
.r2-canvas{
  width:100%;
  aspect-ratio:7/5;
  background:var(--surface);
  border:1px solid var(--border);border-radius:var(--radius);
  box-shadow:var(--shadow-card);
  display:block;touch-action:none;
}
.r2-canvas.dragging,.r2-canvas.dragging .r2-tip-hit{cursor:grabbing}
.r2-tip-hit{fill:transparent;cursor:grab}

/* ---- Caption + readouts ---- */
.r2-canvas-caption{
  display:flex;justify-content:space-between;align-items:baseline;gap:8px;
  font-family:var(--font-mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;
  color:var(--text-faint);width:100%;
}
.r2-canvas-caption .r2-space{font-weight:500}
.r2-canvas-caption.kind-v .r2-space,.r2-canvas-caption.kind-domain .r2-space{color:var(--v)}
.r2-canvas-caption.kind-av .r2-space,.r2-canvas-caption.kind-codomain .r2-space{color:var(--av)}

.r2-readouts{display:flex;gap:8px;width:100%}
.r2-readouts.cols-3{display:grid;grid-template-columns:1fr 1fr 1fr}
.r2-readout{
  flex:1;display:flex;align-items:baseline;gap:8px;
  font-family:var(--font-mono);font-size:14px;font-weight:600;
  padding:8px 12px;border-radius:5px;
  background:var(--surface);
  border:1px solid var(--border);
  border-left:3px solid currentColor;
  min-width:0;
}
.r2-readout .r2-lab{font-family:var(--font-display);font-style:italic;font-size:18px;font-weight:500;flex-shrink:0}
.r2-readout .r2-lab .sub{font-size:12px;vertical-align:sub;font-weight:400;color:var(--text-faint)}
.r2-readout .r2-eq{color:var(--text-faint);font-weight:400;flex-shrink:0}
.r2-readout .r2-val{
  color:var(--text);font-weight:500;font-variant-numeric:tabular-nums;
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
}
.r2-readout.kind-v{color:var(--v)}
.r2-readout.kind-av{color:var(--av)}
.r2-readout.kind-b1{color:var(--b1)}
.r2-readout.kind-b2{color:var(--b2)}
.r2-readout.kind-domain{color:var(--v)}
.r2-readout.kind-codomain{color:var(--av)}

/* ---- Card ---- */
.r2-card{
  background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);
  box-shadow:var(--shadow-card);padding:12px 14px;
}
.r2-card h2{
  font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.18em;
  text-transform:uppercase;color:var(--text-faint);margin-bottom:10px;
  display:flex;align-items:center;justify-content:space-between;
}
.r2-badge{color:var(--accent);margin-right:6px;font-weight:600}
.r2-card h2 .r2-note{font-weight:500;letter-spacing:.04em;text-transform:none;font-size:11px;color:var(--text-dim)}

/* ---- Explanation card ---- */
.r2-ex-card{flex:0 0 auto}
.r2-ex-header{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:8px;padding-bottom:8px;border-bottom:1px solid var(--border)}
.r2-ex-header h3{font-family:var(--font-display);font-weight:500;font-size:19px;color:var(--text);margin:0;letter-spacing:-.01em;line-height:1.2}
.r2-ex-tag{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--text-faint);white-space:nowrap}
.r2-ex-body{color:var(--text-soft);font-size:14px;line-height:1.6;margin:0}
.r2-ex-body .v{color:var(--v);font-weight:500}
.r2-ex-body .av{color:var(--av);font-weight:500}
.r2-ex-body .b1{color:var(--b1);font-weight:500}
.r2-ex-body .b2{color:var(--b2);font-weight:500}
.r2-ex-body .eig{color:var(--eigen);font-weight:500}
.r2-ex-body .ker{color:var(--warn);font-weight:500}
.r2-ex-body .img{color:var(--eigen);font-weight:500}
.r2-ex-body .complex{color:var(--b2);font-weight:500}
.r2-ex-body .defective{color:#9d244f;font-weight:500}
.r2-ex-body .warn{color:var(--warn);font-weight:500}
.r2-ex-body code{font-family:var(--font-mono);font-size:12px;background:var(--accent-soft);color:var(--accent-hover);padding:1px 5px;border-radius:3px}
.r2-ex-body em{font-style:italic;color:var(--text)}

/* ---- Scenarios panel ---- */
.r2-scenarios-card{padding:12px 18px}
.r2-scenarios-card h2{margin-bottom:8px;display:flex;font-size:11px}
.r2-scen-sections{display:grid;gap:18px;align-items:start}
.r2-scen-sections.cols-3{grid-template-columns:repeat(3,1fr)}
.r2-scen-sections.cols-4{grid-template-columns:repeat(4,1fr)}
.r2-scen-section{min-width:0}
.r2-scen-section-label{
  display:flex;align-items:center;justify-content:space-between;gap:6px;
  font-family:var(--font-mono);font-size:11.5px;font-weight:600;letter-spacing:.08em;
  text-transform:uppercase;color:var(--text-dim);margin-bottom:7px;
}
.r2-tag{
  padding:2px 8px;border-radius:3px;font-size:10px;font-weight:700;
  letter-spacing:.05em;text-transform:uppercase;white-space:nowrap;
  background:var(--tag-bg,var(--surface-2));
  color:var(--tag-color,var(--text-dim));
  border:1px solid var(--tag-border,var(--border));
}

.r2-preset-grid{display:flex;flex-direction:column;gap:4px}
.r2-preset-grid.cols-2{display:grid;grid-template-columns:1fr 1fr;gap:5px}
.r2-preset-btn{
  background:var(--surface-2);border:1px solid var(--border);color:var(--text-soft);
  padding:7px 11px;font-family:var(--font-body);font-size:13px;font-weight:500;
  cursor:pointer;border-radius:4px;text-align:left;transition:all .12s;
  display:flex;justify-content:space-between;align-items:baseline;gap:8px;
  border-left:3px solid var(--tag-color,var(--border-strong));
}
.r2-preset-btn:hover{
  background:var(--accent-soft);
  border-color:var(--accent-line);
  color:var(--accent-hover);
  border-left-color:var(--tag-color,var(--accent));
}
.r2-preset-btn.active{
  background:var(--accent-soft);
  border-color:var(--accent-line);
  color:var(--accent-hover);
  border-left-color:var(--tag-color,var(--accent));
  font-weight:600;
}
.r2-preset-btn .r2-ptag{font-family:var(--font-mono);font-size:10px;letter-spacing:.02em;color:var(--text-faint)}
.r2-preset-btn.active .r2-ptag,.r2-preset-btn:hover .r2-ptag{color:var(--accent)}

/* ---- Status strip ---- */
.r2-status-strip{
  margin-top:10px;padding:8px 12px;border-radius:5px;
  display:flex;align-items:center;gap:10px;
  font-family:var(--font-mono);font-size:12px;letter-spacing:.04em;
  border:1px solid var(--border);background:var(--surface-2);color:var(--text-dim);
  transition:all .15s;
}
.r2-status-strip.aligned{background:#fbf2e3;border-color:#ecd8b3;color:var(--align);font-weight:600}
.r2-status-strip.warn{background:var(--warn-tint);border-color:var(--warn-line);color:var(--warn);font-weight:600}
.r2-status-strip .r2-status-badge{
  display:inline-flex;align-items:center;justify-content:center;
  width:20px;height:20px;border-radius:50%;color:#fff;font-weight:700;font-size:11px;
  background:var(--align);
}
.r2-status-strip.warn .r2-status-badge{background:var(--warn)}

/* ---- Bracket matrix ---- */
.r2-mat{
  display:grid;gap:3px 12px;padding:7px 10px;position:relative;
  font-family:var(--font-mono);font-size:13.5px;
}
.r2-mat::before,.r2-mat::after{content:'';position:absolute;top:3px;bottom:3px;width:5px;border:1.2px solid var(--text-dim)}
.r2-mat::before{left:0;border-right:none;border-radius:2px 0 0 2px}
.r2-mat::after{right:0;border-left:none;border-radius:0 2px 2px 0}
.r2-mat.cols-1{grid-template-columns:auto}
.r2-mat.cols-2{grid-template-columns:auto auto}
.r2-mat .cell{text-align:center;min-width:38px;padding:1px 3px;font-variant-numeric:tabular-nums;border-radius:3px;font-weight:600}
.r2-mat input.cell{
  width:40px;background:var(--surface-2);border:1px solid var(--border);
  font-family:var(--font-mono);font-size:13.5px;outline:none;font-weight:600;
  -moz-appearance:textfield;transition:border-color .15s,background .15s;
}
.r2-mat input.cell::-webkit-outer-spin-button,.r2-mat input.cell::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}
.r2-mat input.cell:focus{border-color:var(--accent);background:var(--accent-soft)}

/* ---- Base SVG primitives ---- */
.r2-grid-line{stroke:var(--grid);stroke-width:1;fill:none}
.r2-grid-axis{stroke:var(--grid-axis);stroke-width:1.2;fill:none}
.r2-origin-dot{fill:var(--text-soft)}

@media (max-width:1100px){
  .r2-main.cols-2,.r2-main.cols-2-wide{grid-template-columns:minmax(0,700px);justify-content:center}
  .r2-main.cols-3-kernel,.r2-main.cols-3-lt{grid-template-columns:1fr}
  .r2-scen-sections.cols-4{grid-template-columns:repeat(2,1fr)}
}
`;

// =====================================================================
//   SECTION 5  ::  Shared React components
// =====================================================================

export function AppShell({
  lede, ledeCrumb, ledeBody, chips, scenarios, extraCSS,
  children, className, style,
}) {
  return (
    <div className={'r2-root ' + (className || '')} style={style}>
      <style dangerouslySetInnerHTML={{ __html: SHARED_CSS }} />
      {extraCSS && <style dangerouslySetInnerHTML={{ __html: extraCSS }} />}
      <div className="r2-app">
        {lede !== undefined ? lede : <Lede crumb={ledeCrumb} body={ledeBody} />}
        {chips}
        {children}
        {scenarios}
      </div>
    </div>
  );
}

export function Lede({ crumb, body }) {
  if (crumb == null && body == null) return null;
  return (
    <div className="r2-lede">
      {crumb && <span className="r2-crumb" dangerouslySetInnerHTML={{ __html: crumb }} />}
      {body && <span dangerouslySetInnerHTML={{ __html: body }} />}
    </div>
  );
}

export function Card({ badge, title, note, children, className, scroll }) {
  return (
    <div className={'r2-card' + (scroll ? ' scroll' : '') + (className ? ' ' + className : '')}>
      {(badge || title || note) && (
        <h2>
          <span>{badge && <span className="r2-badge">{badge}</span>}{title}</span>
          {note && <span className="r2-note">{note}</span>}
        </h2>
      )}
      {children}
    </div>
  );
}

export function LayerChips({ layers = {}, onChange = () => {}, defs = [], enabled }) {
  const visible = enabled ? defs.filter((d) => enabled.includes(d.key)) : defs;
  return (
    <div className="r2-chips-strip">
      {visible.map((d) => (
        <label key={d.key} className="r2-chip">
          <input
            type="checkbox"
            checked={!!layers[d.key]}
            onChange={(e) => onChange({ ...layers, [d.key]: e.target.checked })}
          />
          {d.label}
          {d.swatch && <span className="r2-sw" style={{ background: d.swatch }} />}
        </label>
      ))}
    </div>
  );
}

export function CanvasReadout({ kind = 'v', label = 'v', sub, value = '(0, 0)', className, style }) {
  return (
    <div className={`r2-readout kind-${kind}` + (className ? ' ' + className : '')} style={style}>
      <span className="r2-lab">{label}{sub != null && <span className="sub">{sub}</span>}</span>
      <span className="r2-eq">=</span>
      <span className="r2-val">{value}</span>
    </div>
  );
}

export function CanvasCaption({ kind = 'v', title = '', suffix = '\u00B7 \u211D\u00B2', note }) {
  return (
    <div className={`r2-canvas-caption kind-${kind}`}>
      <span>{title} <span className="r2-space">{suffix}</span></span>
      {note && <span>{note}</span>}
    </div>
  );
}

export function ScenariosPanel({
  scenarios = {}, groups = [], preset = null, onSelect = () => {},
  visibleKeys, renderItem, columns = groups.length, badge = '01', title = 'Scenarios',
}) {
  const visible = visibleKeys
    ? Object.fromEntries(visibleKeys.map((k) => [k, scenarios[k]]).filter(([, s]) => s))
    : scenarios;
  return (
    <div className="r2-card r2-scenarios-card">
      <h2><span><span className="r2-badge">{badge}</span>{title}</span></h2>
      <div className={`r2-scen-sections cols-${columns}`}>
        {groups.map((g) => {
          const items = Object.entries(visible).filter(([, sc]) => sc.group === g.key);
          if (!items.length) return null;
          const tagStyle = {
            '--tag-color': g.color || 'var(--text-dim)',
            '--tag-bg':    g.softBg || 'var(--surface-2)',
            '--tag-border': g.border || 'var(--border)',
          };
          return (
            <div className="r2-scen-section" key={g.key}>
              <div className="r2-scen-section-label">
                <span>{g.label}</span>
                <span className="r2-tag" style={tagStyle} dangerouslySetInnerHTML={{ __html: g.tag }} />
              </div>
              <div className={`r2-preset-grid${g.gridCols === 2 ? ' cols-2' : ''}`}>
                {items.map(([key, sc]) => {
                  const active = preset === key;
                  if (renderItem) {
                    const node = renderItem({ key, scenario: sc, group: g, active, onSelect });
                    if (node !== undefined) return <span key={key}>{node}</span>;
                  }
                  if (sc.render) {
                    return <span key={key}>{sc.render({ active, onSelect, group: g })}</span>;
                  }
                  return (
                    <button
                      key={key}
                      className={`r2-preset-btn${active ? ' active' : ''}`}
                      style={tagStyle}
                      onClick={() => onSelect(key)}
                    >
                      <span>{sc.label}</span>
                      {sc.tag && <span className="r2-ptag">{sc.tag}</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ExplanationCard({
  preset, scenarios = {}, override, argument,
  fallback = {
    title: 'Custom configuration',
    exTag: 'user-edited',
    body: 'You\u2019ve set custom values. Pick a preset for annotated examples.',
  },
  badge = '\u00B7', className,
}) {
  let sc = preset != null ? scenarios[preset] : null;
  if (preset != null && override && override.byPreset && override.byPreset[preset]) {
    sc = override.byPreset[preset];
  }
  if (!sc) sc = fallback;
  const title = typeof sc.title === 'function' ? sc.title(argument) : (sc.title || sc.label || '');
  const tag   = typeof sc.exTag === 'function' ? sc.exTag(argument) : (sc.exTag || sc.tag || '');
  const body  = typeof sc.body === 'function' ? sc.body(argument) : (sc.body || '');
  return (
    <div className={'r2-card r2-ex-card' + (className ? ' ' + className : '')}>
      <div className="r2-ex-header">
        <h3 dangerouslySetInnerHTML={{ __html: title }} />
        <span className="r2-ex-tag" dangerouslySetInnerHTML={{ __html: tag }} />
      </div>
      <p className="r2-ex-body" dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
}

export function CellInput({ value, onCommit, step = 0.1, className }) {
  const [str, setStr] = useState(String(value));
  useEffect(() => { setStr(String(value)); }, [value]);
  return (
    <input
      type="number"
      step={step}
      value={str}
      className={'cell ' + (className || '')}
      onChange={(e) => {
        const next = e.target.value;
        setStr(next);
        if (next === '' || next === '-' || next === '.') return;
        const v = parseFloat(next);
        if (!Number.isNaN(v)) onCommit(v);
      }}
      onBlur={() => {
        const v = parseFloat(str);
        if (Number.isNaN(v)) setStr(String(value));
        else if (v !== value) onCommit(v);
      }}
    />
  );
}