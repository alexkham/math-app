'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

// =====================================================================
//  SECTION 1  ::  Math2D
// =====================================================================
const Math2D = {
  apply: (M, p) => [M[0][0] * p[0] + M[0][1] * p[1], M[1][0] * p[0] + M[1][1] * p[1]],
  det: (M) => M[0][0] * M[1][1] - M[0][1] * M[1][0],
  trace: (M) => M[0][0] + M[1][1],
  interp: (t, A) => [
    [(1 - t) + t * A[0][0], t * A[0][1]],
    [t * A[1][0], (1 - t) + t * A[1][1]],
  ],

  // Projection matrix onto line of angle theta (radians)
  projMatrix(theta) {
    const c = Math.cos(theta), s = Math.sin(theta);
    return [[c * c, c * s], [c * s, s * s]];
  },

  unitFromAngle(theta) {
    return [Math.cos(theta), Math.sin(theta)];
  },

  fmt(x, p = 2) {
    if (Math.abs(x) < 1e-9) return '0';
    const r = Math.round(x * Math.pow(10, p)) / Math.pow(10, p);
    return r.toFixed(p).replace(/\.?0+$/, '') || '0';
  },
  fmtPair: (p) => `(${Math2D.fmt(p[0])}, ${Math2D.fmt(p[1])})`,
};

// =====================================================================
//  SECTION 2  ::  SVGRender
// =====================================================================
const DEFAULT_GEOM = { size: 600, scale: 50, gridR: 6 };

const SVGRender = {
  _proj(geom) {
    const cx = geom.size / 2, cy = geom.size / 2;
    return (p) => [cx + geom.scale * p[0], cy - geom.scale * p[1]];
  },

  grid(M, geom) {
    const tx = SVGRender._proj(geom);
    const R = geom.gridR;
    let s = '';
    for (let i = -R; i <= R; i++) {
      const cls = i === 0 ? 'pr-grid-axis' : 'pr-grid-line';
      const [x1, y1] = tx(Math2D.apply(M, [-R, i]));
      const [x2, y2] = tx(Math2D.apply(M, [R, i]));
      s += `<line class="${cls}" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
      const [x3, y3] = tx(Math2D.apply(M, [i, -R]));
      const [x4, y4] = tx(Math2D.apply(M, [i, R]));
      s += `<line class="${cls}" x1="${x3.toFixed(2)}" y1="${y3.toFixed(2)}" x2="${x4.toFixed(2)}" y2="${y4.toFixed(2)}"/>`;
    }
    return s;
  },

  lineThroughOrigin(dir, lineCls, haloCls, geom) {
    const tx = SVGRender._proj(geom);
    const R = geom.gridR;
    const [x1, y1] = tx([-R * dir[0], -R * dir[1]]);
    const [x2, y2] = tx([R * dir[0], R * dir[1]]);
    let s = '';
    if (haloCls) s += `<line class="${haloCls}" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
    s += `<line class="${lineCls}" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
    return s;
  },

  labelOnLine(dir, text, cls, geom, off = 0.55) {
    const tx = SVGRender._proj(geom);
    const perp = [-dir[1], dir[0]];
    const p = [4.5 * dir[0] + off * perp[0], 4.5 * dir[1] + off * perp[1]];
    const [x, y] = tx(p);
    return `<text class="${cls}" x="${x.toFixed(2)}" y="${y.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">${text}</text>`;
  },

  unitSquare(M, geom) {
    const tx = SVGRender._proj(geom);
    const corners = [[0, 0], [1, 0], [1, 1], [0, 1]];
    const pts = corners.map((c) => tx(Math2D.apply(M, c)).map((v) => v.toFixed(2)).join(',')).join(' ');
    const dM = Math2D.det(M);
    let fill, stroke;
    if (dM > 1e-3) { fill = 'rgba(99,102,241,0.15)'; stroke = '#6366f1'; }
    else { fill = 'rgba(148,163,184,0.15)'; stroke = '#94a3b8'; }
    return `<polygon class="pr-unit-square" points="${pts}" fill="${fill}" stroke="${stroke}"/>`;
  },

  origin(geom) {
    const tx = SVGRender._proj(geom);
    const [ox, oy] = tx([0, 0]);
    return `<circle class="pr-origin-dot" cx="${ox}" cy="${oy}" r="2.5"/>`;
  },

  dropline(v, Pv, geom) {
    const tx = SVGRender._proj(geom);
    const [vx, vy] = tx(v);
    const [pvx, pvy] = tx(Pv);
    let s = `<line class="pr-dropline" x1="${vx.toFixed(2)}" y1="${vy.toFixed(2)}" x2="${pvx.toFixed(2)}" y2="${pvy.toFixed(2)}"/>`;
    // Right-angle marker at Pv: 2 small segments forming a square corner
    const dx = vx - pvx, dy = vy - pvy;
    const len = Math.hypot(dx, dy);
    if (len > 8) {
      const ux = dx / len, uy = dy / len;
      const px = -uy, py = ux; // perpendicular in screen space
      const SZ = 9;
      const ax = pvx + ux * SZ, ay = pvy + uy * SZ;
      const bx = pvx + ux * SZ + px * SZ, by = pvy + uy * SZ + py * SZ;
      const cx = pvx + px * SZ, cy = pvy + py * SZ;
      // Try the other side (one of two will be on the line side)
      const bx2 = pvx + ux * SZ - px * SZ, by2 = pvy + uy * SZ - py * SZ;
      const cx2 = pvx - px * SZ, cy2 = pvy - py * SZ;
      // Pick the side that bends toward v
      s += `<polyline class="pr-right-angle" points="${ax.toFixed(1)},${ay.toFixed(1)} ${bx.toFixed(1)},${by.toFixed(1)} ${cx.toFixed(1)},${cy.toFixed(1)}"/>`;
      s += `<polyline class="pr-right-angle" points="${ax.toFixed(1)},${ay.toFixed(1)} ${bx2.toFixed(1)},${by2.toFixed(1)} ${cx2.toFixed(1)},${cy2.toFixed(1)}"/>`;
    }
    return s;
  },

  vArrow(v, geom, showLabel) {
    const tx = SVGRender._proj(geom);
    const [ox, oy] = tx([0, 0]);
    const [tipX, tipY] = tx(v);
    let s = '';
    s += `<line class="pr-v-shaft" x1="${ox}" y1="${oy}" x2="${tipX.toFixed(2)}" y2="${tipY.toFixed(2)}" marker-end="url(#pr-arr-v)"/>`;
    s += `<circle class="pr-v-handle" cx="${tipX.toFixed(2)}" cy="${tipY.toFixed(2)}" r="7"/>`;
    if (showLabel) {
      const lx = v[0] + (v[0] >= 0 ? 0.32 : -0.32);
      const ly = v[1] + (v[1] >= 0 ? 0.32 : -0.32);
      const [px, py] = tx([lx, ly]);
      s += `<text class="pr-v-label" x="${px.toFixed(2)}" y="${py.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">v</text>`;
    }
    return s;
  },

  pvArrow(Pv, geom, showLabel) {
    const tx = SVGRender._proj(geom);
    const [ox, oy] = tx([0, 0]);
    const mag = Math.hypot(Pv[0], Pv[1]);
    if (mag < 1e-3) {
      // Pv is at origin (v is in kernel)
      return `<circle class="pr-pv-collapsed" cx="${ox}" cy="${oy}" r="10"/>`;
    }
    const [tipX, tipY] = tx(Pv);
    let s = '';
    s += `<line class="pr-pv-shaft" x1="${ox}" y1="${oy}" x2="${tipX.toFixed(2)}" y2="${tipY.toFixed(2)}" marker-end="url(#pr-arr-pv)"/>`;
    s += `<circle class="pr-pv-tip" cx="${tipX.toFixed(2)}" cy="${tipY.toFixed(2)}" r="6"/>`;
    if (showLabel) {
      const lx = Pv[0] + (Pv[0] >= 0 ? 0.36 : -0.36);
      const ly = Pv[1] + (Pv[1] >= 0 ? 0.36 : -0.36);
      const [px, py] = tx([lx, ly]);
      s += `<text class="pr-pv-label" x="${px.toFixed(2)}" y="${py.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">Pv</text>`;
    }
    return s;
  },
};

// =====================================================================
//  SECTION 3  ::  Scenarios
// =====================================================================
const SCENARIOS = {
  xAxis: {
    theta: 0, label: 'x-axis', group: 'axes', tag: '0\u00B0',
    title: 'Project onto the x-axis', exTag: 'rank 1 \u00B7 P = diag(1, 0)',
    body: 'Crushes the y-component: <code>(x, y) \u21A6 (x, 0)</code>. The <span class="pr-img">image</span> is the x-axis; the <span class="pr-ker">kernel</span> is the y-axis.',
    insight: 'P is diagonal here. Both axes are eigendirections \u2014 the x-axis with \u03BB = 1, the y-axis with \u03BB = 0.',
  },
  yAxis: {
    theta: Math.PI / 2, label: 'y-axis', group: 'axes', tag: '90\u00B0',
    title: 'Project onto the y-axis', exTag: 'rank 1 \u00B7 P = diag(0, 1)',
    body: 'Crushes the x-component: <code>(x, y) \u21A6 (0, y)</code>. The <span class="pr-img">image</span> is the y-axis; the <span class="pr-ker">kernel</span> is the x-axis.',
    insight: 'The transpose situation of x-axis projection. Same idempotent / symmetric properties.',
  },
  diag: {
    theta: Math.PI / 4, label: 'y = x', group: 'diagonals', tag: '45\u00B0',
    title: 'Project onto y = x', exTag: 'rank 1 \u00B7 symmetric',
    body: 'Maps every point to its closest point on the diagonal. The <span class="pr-ker">kernel</span> is the line y = \u2212x; the <span class="pr-img">image</span> is y = x. Perpendicular \u2014 orthogonal projection.',
    insight: 'P is symmetric (P\u1D40 = P) and idempotent (P\u00B2 = P). Projecting twice changes nothing.',
  },
  antiDiag: {
    theta: 3 * Math.PI / 4, label: 'y = \u2212x', group: 'diagonals', tag: '135\u00B0',
    title: 'Project onto y = \u2212x', exTag: 'rank 1 \u00B7 symmetric',
    body: 'Image is the anti-diagonal y = \u2212x. Kernel is y = x \u2014 perpendicular to the image, as always for an orthogonal projection.',
    insight: 'Swap the diagonals and you get the complementary projection: P + P&apos; = I where P&apos; is projection onto y = x.',
  },
  deg30: {
    theta: Math.PI / 6, label: '30\u00B0 line', group: 'custom', tag: '\u03C0/6',
    title: 'Project onto 30\u00B0 line', exTag: 'rank 1 \u00B7 symmetric',
    body: 'Projection onto the line through the origin at 30\u00B0. The kernel is perpendicular, at 120\u00B0.',
    insight: 'Off-axis projections have off-diagonal entries: <code>P = [[c\u00B2, cs], [cs, s\u00B2]]</code> where c = cos\u03B8, s = sin\u03B8.',
  },
  deg60: {
    theta: Math.PI / 3, label: '60\u00B0 line', group: 'custom', tag: '\u03C0/3',
    title: 'Project onto 60\u00B0 line', exTag: 'rank 1 \u00B7 symmetric',
    body: 'Projection onto the line through the origin at 60\u00B0. Image and kernel both rotate by the line angle as \u03B8 changes.',
    insight: 'The trace of P is always 1 (= rank) and the determinant is always 0 \u2014 invariants under rotation of the projection line.',
  },
  deg120: {
    theta: 2 * Math.PI / 3, label: '120\u00B0 line', group: 'custom', tag: '2\u03C0/3',
    title: 'Project onto 120\u00B0 line', exTag: 'rank 1 \u00B7 symmetric',
    body: 'Projection onto the line at 120\u00B0. Equivalent (as a set) to projection onto the \u221260\u00B0 line \u2014 a line doesn&apos;t have an orientation.',
    insight: 'Doubling \u03B8 reflects across the y-axis in matrix form: P(\u03B8) and P(180\u00B0\u2212\u03B8) are different matrices but project to lines that share the same direction up to sign.',
  },
};

const SCENARIO_GROUPS = [
  { key: 'axes',      label: 'Coord axes',   tag: '2 axes',  tagClass: 'axes' },
  { key: 'diagonals', label: 'Diagonals',    tag: '\u00B145\u00B0', tagClass: 'diagonals' },
  { key: 'custom',    label: 'Custom angle', tag: 'drag',    tagClass: 'custom' },
];

const DEFAULT_LAYERS = {
  grid: true, line: true, kernel: true, square: true, dropline: true, labels: true,
};

const ALL_LAYER_DEFS = [
  { key: 'grid', label: 'grid' },
  { key: 'line', label: 'line', swatch: '#2b5bd7' },
  { key: 'kernel', label: 'kernel', swatch: '#dc2626' },
  { key: 'square', label: 'unit sq' },
  { key: 'dropline', label: 'dropline' },
  { key: 'labels', label: 'labels' },
];

const DEFAULT_LEDE = {
  crumb: 'Linear Algebra<span class="pr-dot">&middot;</span>Projection',
  body: 'Drop a perpendicular from <span class="pr-v">v</span> onto the <span class="pr-line">line</span>; the foot is <span class="pr-pv">Pv</span>. Projection is idempotent: <code>P&sup2; = P</code>.',
};

// =====================================================================
//  SECTION 4  ::  Hooks
// =====================================================================
function useProjectionState(options = {}) {
  const {
    initialTheta = Math.PI / 4,
    initialPreset = 'diag',
    initialV = [1.5, 1.5],
    initialLayers = DEFAULT_LAYERS,
    scenarios = SCENARIOS,
  } = options;

  const [theta, setThetaInternal] = useState(initialTheta);
  const [preset, setPresetInternal] = useState(initialPreset);
  const [v, setV] = useState(initialV);
  const [layers, setLayers] = useState(initialLayers);

  const setTheta = useCallback((next) => {
    setThetaInternal(next);
    setPresetInternal(null);
  }, []);

  const selectPreset = useCallback((key) => {
    const sc = scenarios[key];
    if (!sc) return;
    setThetaInternal(sc.theta);
    setPresetInternal(key);
  }, [scenarios]);

  return { theta, preset, v, layers, setTheta, selectPreset, setV, setLayers };
}

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function useAnimationState(options = {}) {
  const { step = 0.1, duration = 1600, initialT = 1 } = options;
  const [t, setTState] = useState(initialT);
  const [playing, setPlaying] = useState(false);
  const animRef = useRef(null);
  const tRef = useRef(initialT);
  useEffect(() => { tRef.current = t; }, [t]);

  const cancel = useCallback(() => {
    if (animRef.current !== null) { cancelAnimationFrame(animRef.current); animRef.current = null; }
    setPlaying(false);
  }, []);

  const animateTo = useCallback((target, dur = duration) => {
    if (animRef.current !== null) { cancelAnimationFrame(animRef.current); animRef.current = null; }
    const tStart = tRef.current;
    const startTime = typeof performance !== 'undefined' ? performance.now() : Date.now();
    setPlaying(true);
    const frame = (now) => {
      const elapsed = now - startTime;
      const localT = Math.min(1, elapsed / dur);
      const eased = easeInOutCubic(localT);
      const newT = tStart + (target - tStart) * eased;
      tRef.current = newT;
      setTState(newT);
      if (localT < 1) animRef.current = requestAnimationFrame(frame);
      else { animRef.current = null; setPlaying(false); }
    };
    animRef.current = requestAnimationFrame(frame);
  }, [duration]);

  const reset = useCallback(() => { cancel(); tRef.current = 0; setTState(0); }, [cancel]);
  const stepFwd = useCallback(() => {
    cancel();
    const next = Math.min(1, Math.floor(tRef.current / step + 1) * step);
    tRef.current = next; setTState(next);
  }, [step, cancel]);
  const stepBack = useCallback(() => {
    cancel();
    const prev = Math.max(0, Math.ceil(tRef.current / step - 1) * step);
    tRef.current = prev; setTState(prev);
  }, [step, cancel]);
  const play = useCallback(() => {
    if (tRef.current >= 0.999) {
      tRef.current = 0; setTState(0);
      requestAnimationFrame(() => animateTo(1, duration));
    } else {
      animateTo(1, duration);
    }
  }, [duration, animateTo]);
  const setT = useCallback((newT) => { cancel(); tRef.current = newT; setTState(newT); }, [cancel]);

  useEffect(() => () => { if (animRef.current !== null) cancelAnimationFrame(animRef.current); }, []);

  return { t, playing, step, animateTo, cancel, reset, stepFwd, stepBack, play, setT };
}

// =====================================================================
//  SECTION 5  ::  Component CSS
// =====================================================================
const COMPONENT_CSS = `
.pr-root{
  --bg:#f7f9fc;--surface:#fff;--surface-2:#f3f6fa;
  --border:#dde3ec;--border-strong:#c4cdda;
  --text:#0f1729;--text-soft:#243049;--text-dim:#4a5673;--text-faint:#7989a3;
  --accent:#2b5bd7;--accent-hover:#1e46b3;--accent-soft:#eaf0fb;--accent-line:#c8d6f1;
  --v:#ea580c;--pv:#059669;--line:#2b5bd7;--perp:#dc2626;
  --vSoft:rgba(234,88,12,.08);--pvSoft:rgba(5,150,105,.08);
  --grid:#e2e8f0;--grid-axis:#94a3b8;
  --font-display:'Fraunces',Georgia,serif;
  --font-body:'IBM Plex Sans',-apple-system,BlinkMacSystemFont,sans-serif;
  --font-mono:'JetBrains Mono',Menlo,monospace;
  --shadow-card:0 1px 0 rgba(15,23,41,.04),0 1px 2px rgba(15,23,41,.04);
  --radius:6px;
  color:var(--text);font-family:var(--font-body);line-height:1.5;
  -webkit-font-smoothing:antialiased;background:var(--bg);
}
.pr-root *{box-sizing:border-box}

.pr-app{display:grid;grid-template-rows:auto auto;gap:10px;padding:14px 24px;max-width:1340px;margin:0 auto;background:var(--bg)}

.pr-lede{display:flex;align-items:baseline;gap:14px;font-size:14px;color:var(--text-dim);line-height:1.45}
.pr-crumb{font-family:var(--font-mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--text-faint);white-space:nowrap}
.pr-crumb .pr-dot{color:var(--accent);margin:0 6px}
.pr-lede .pr-v{color:var(--v);font-weight:500}
.pr-lede .pr-pv{color:var(--pv);font-weight:500}
.pr-lede .pr-line{color:var(--line);font-weight:500}
.pr-lede code{font-family:var(--font-mono);font-size:13px;background:var(--accent-soft);color:var(--accent-hover);padding:1px 6px;border-radius:3px}

.pr-main{display:grid;gap:14px;align-items:start;grid-template-columns:230px 620px minmax(360px,1fr)}
.pr-scen-col,.pr-canvas-col,.pr-info-col{display:flex;flex-direction:column;gap:10px;min-width:0}
@media (max-width:1240px){.pr-main{grid-template-columns:1fr}}

.pr-canvas-wrap{width:100%;display:flex;align-items:center;justify-content:center}
.pr-canvas{width:100%;aspect-ratio:1/1;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow-card);display:block;touch-action:none}
.pr-canvas.dragging{cursor:grabbing}

.pr-readouts{display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%}
.pr-readout{background:var(--surface);border:1px solid var(--border);border-left:3px solid currentColor;padding:8px 12px;border-radius:5px;display:flex;align-items:baseline;gap:10px;font-family:var(--font-mono);font-size:13.5px;font-weight:600;min-width:0}
.pr-readout .pr-lab{font-family:var(--font-display);font-style:italic;font-size:17px;font-weight:500;flex-shrink:0}
.pr-readout .pr-eq{color:var(--text-faint);font-weight:400}
.pr-readout .pr-val{color:var(--text);font-weight:500;font-variant-numeric:tabular-nums;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.pr-readout.pr-v{color:var(--v)}
.pr-readout.pr-pv{color:var(--pv)}

.pr-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow-card);padding:12px 14px}
.pr-card h2{font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--text-faint);margin:0 0 10px;display:flex;align-items:center;justify-content:space-between}
.pr-badge{color:var(--accent);margin-right:6px;font-weight:600}
.pr-card h2 .pr-note{font-weight:500;letter-spacing:.04em;text-transform:none;font-size:11px;color:var(--text-dim);font-family:var(--font-mono)}

.pr-anim-card{padding:12px 14px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow-card)}
.pr-anim-head{font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--text-faint);margin-bottom:10px;display:flex;justify-content:space-between;align-items:center}
.pr-anim-head .pr-t-readout{font-weight:500;letter-spacing:.05em;text-transform:none;color:var(--accent)}
.pr-anim-progress{height:5px;background:var(--surface-2);border-radius:3px;overflow:hidden;position:relative;margin-bottom:10px}
.pr-anim-progress .pr-fill{position:absolute;left:0;top:0;bottom:0;background:linear-gradient(90deg,var(--v),var(--pv));border-radius:3px;transition:width .12s linear}
.pr-anim-controls{display:flex;gap:6px;align-items:center}
.pr-ctrl-btn{background:var(--surface-2);border:1px solid var(--border);width:30px;height:28px;border-radius:4px;cursor:pointer;color:var(--text-dim);font-weight:600;display:inline-flex;align-items:center;justify-content:center;padding:0;transition:all .12s}
.pr-ctrl-btn:hover{background:var(--accent-soft);color:var(--accent);border-color:var(--accent-line)}
.pr-ctrl-btn:disabled{opacity:.4;cursor:not-allowed}
.pr-ctrl-btn svg{width:11px;height:11px;fill:currentColor}
.pr-ctrl-btn.pr-primary{background:var(--accent);border-color:var(--accent);color:#fff;width:auto;padding:0 14px;font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;font-family:var(--font-mono)}
.pr-ctrl-btn.pr-primary:hover{background:var(--accent-hover);border-color:var(--accent-hover);color:#fff}
.pr-slider{flex:1;-webkit-appearance:none;appearance:none;height:4px;border-radius:2px;outline:none;cursor:pointer;min-width:60px;margin:0 4px}
.pr-slider::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:var(--accent);border:2px solid #fff;cursor:pointer;box-shadow:0 0 0 1px var(--accent)}
.pr-slider::-moz-range-thumb{width:12px;height:12px;border-radius:50%;background:var(--accent);border:2px solid #fff;cursor:pointer}
.pr-t-label{font-family:var(--font-mono);font-size:11px;color:var(--text-faint);min-width:70px;text-align:right;font-variant-numeric:tabular-nums}
.pr-t-label .pr-val{color:var(--text);font-weight:600}

.pr-chips-strip{display:flex;flex-wrap:wrap;gap:2px;padding:4px 8px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow-card)}
.pr-chip{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;font-family:var(--font-mono);font-size:11px;letter-spacing:.04em;color:var(--text-faint);background:transparent;border:1px solid transparent;border-radius:4px;cursor:pointer;user-select:none;transition:all .12s}
.pr-chip input{width:12px;height:12px;margin:0;accent-color:var(--accent);cursor:pointer}
.pr-chip:hover,.pr-chip:has(input:checked){color:var(--text);background:var(--accent-soft)}
.pr-chip .pr-sw{display:inline-block;width:11px;height:3px;border-radius:1px}

.pr-ex-header{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--border)}
.pr-ex-header h3{font-family:var(--font-display);font-weight:500;font-size:19px;color:var(--text);margin:0;letter-spacing:-.01em;line-height:1.2}
.pr-ex-tag{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--text-faint);white-space:nowrap}
.pr-ex-body{color:var(--text-soft);font-size:13.5px;line-height:1.55;margin:0 0 10px}
.pr-ex-body .pr-line{color:var(--line);font-weight:500}
.pr-ex-body .pr-ker{color:var(--perp);font-weight:500}
.pr-ex-body .pr-img{color:var(--pv);font-weight:500}
.pr-ex-body .pr-v{color:var(--v);font-weight:500}
.pr-ex-body code,.pr-ex-block code{font-family:var(--font-mono);font-size:11.5px;background:var(--accent-soft);color:var(--accent-hover);padding:1px 4px;border-radius:3px}
.pr-ex-block{margin-top:10px;padding-top:10px;border-top:1px dashed var(--border)}
.pr-ex-block-label{font-family:var(--font-mono);font-size:9.5px;letter-spacing:.15em;text-transform:uppercase;color:var(--accent);margin-bottom:4px}
.pr-ex-block p{margin:0;font-size:12.5px;color:var(--text-soft);line-height:1.55}

.pr-matrix-card{padding:12px 14px}
.pr-matrix-wrap{display:flex;justify-content:center;align-items:center;gap:10px;padding:2px 0}
.pr-matrix-eq{font-family:var(--font-display);font-style:italic;font-size:18px;font-weight:500;color:var(--text)}
.pr-matrix-op{color:var(--text-faint);font-size:14px}
.pr-matrix-bracket{display:grid;grid-template-columns:auto auto;gap:3px 10px;padding:6px 12px;position:relative;font-family:var(--font-mono);font-size:12px}
.pr-matrix-bracket::before,.pr-matrix-bracket::after{content:'';position:absolute;top:3px;bottom:3px;width:5px;border:1.3px solid var(--text-dim)}
.pr-matrix-bracket::before{left:0;border-right:none;border-radius:2px 0 0 2px}
.pr-matrix-bracket::after{right:0;border-left:none;border-radius:0 2px 2px 0}
.pr-matrix-bracket span{text-align:right;min-width:44px;color:var(--accent);font-weight:600;font-variant-numeric:tabular-nums}
.pr-angle-row{display:flex;align-items:center;gap:10px;padding:8px 0 0;margin-top:8px;border-top:1px dashed var(--border)}
.pr-angle-lbl{font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--text-faint);min-width:46px}
.pr-angle-slider{flex:1;-webkit-appearance:none;appearance:none;height:4px;border-radius:2px;outline:none;cursor:pointer}
.pr-angle-slider::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:var(--line);border:2px solid #fff;cursor:pointer;box-shadow:0 0 0 1px var(--line)}
.pr-angle-slider::-moz-range-thumb{width:12px;height:12px;border-radius:50%;background:var(--line);border:2px solid #fff;cursor:pointer}
.pr-angle-val{font-family:var(--font-mono);font-size:12px;font-weight:600;color:var(--line);min-width:42px;text-align:right;font-variant-numeric:tabular-nums}

.pr-live-grid{display:grid;grid-template-columns:auto 1fr;gap:5px 14px;align-items:baseline}
.pr-lk{font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--text-faint)}
.pr-lv{font-family:var(--font-mono);font-size:12.5px;color:var(--text);font-weight:500;text-align:right;font-variant-numeric:tabular-nums}
.pr-lv.pr-v{color:var(--v)}
.pr-lv.pr-pv{color:var(--pv)}
.pr-lv.pr-perp{color:var(--perp)}
.pr-lv.pr-live{color:var(--accent)}
.pr-check-row{margin-top:10px;padding:7px 11px;border-radius:5px;display:flex;align-items:center;gap:8px;font-family:var(--font-mono);font-size:11px;background:var(--pvSoft);border:1px solid rgba(5,150,105,.4);color:var(--pv);font-weight:600}
.pr-check-row .pr-ok{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;background:var(--pv);color:#fff;font-weight:700;font-size:11px}

.pr-scenarios-card h2{margin-bottom:8px}
.pr-scen-sections{display:flex;flex-direction:column;gap:13px}
.pr-scen-section-label{display:flex;align-items:center;justify-content:space-between;gap:6px;font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--text-dim);margin-bottom:6px}
.pr-scen-section-label .pr-tag{padding:2px 7px;border-radius:3px;font-size:9.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;border:1px solid var(--accent-line);background:var(--accent-soft);color:var(--accent-hover);white-space:nowrap}
.pr-preset-grid{display:flex;flex-direction:column;gap:4px}
.pr-preset-btn{
  background:var(--surface-2);border:1px solid var(--border);border-left:3px solid var(--line);
  color:var(--text-soft);padding:6px 10px;
  font-family:var(--font-body);font-size:12.5px;font-weight:500;
  cursor:pointer;border-radius:4px;text-align:left;transition:all .12s;
  display:flex;justify-content:space-between;align-items:baseline;gap:6px;
}
.pr-preset-btn:hover{background:var(--accent-soft);border-color:var(--accent-line);color:var(--accent-hover)}
.pr-preset-btn.pr-active{background:var(--accent-soft);border-color:var(--accent-line);color:var(--accent-hover);font-weight:600;border-left-color:var(--accent)}
.pr-preset-btn .pr-ptag{font-family:var(--font-mono);font-size:9.5px;color:var(--text-faint)}
.pr-preset-btn.pr-active .pr-ptag{color:var(--accent)}

/* SVG primitives */
.pr-grid-line{stroke:var(--grid);stroke-width:1;fill:none}
.pr-grid-axis{stroke:var(--grid-axis);stroke-width:1.3;fill:none}
.pr-line-line{stroke:var(--line);stroke-width:2.2;fill:none;opacity:.9;stroke-dasharray:8 5}
.pr-line-halo{stroke:var(--line);stroke-width:12;fill:none;opacity:.10}
.pr-ker-line{stroke:var(--perp);stroke-width:1.5;fill:none;stroke-dasharray:5 4;opacity:.55}
.pr-line-label{fill:var(--line);font-family:var(--font-display);font-style:italic;font-size:14px;font-weight:500}
.pr-ker-label{fill:var(--perp);font-family:var(--font-display);font-style:italic;font-size:13px;font-weight:500;opacity:.85}
.pr-unit-square{stroke-width:1.5}
.pr-dropline{stroke:var(--perp);stroke-width:1.5;fill:none;stroke-dasharray:4 4;opacity:.75}
.pr-right-angle{stroke:var(--perp);stroke-width:1.4;fill:none;opacity:.65}
.pr-v-shaft{stroke:var(--v);stroke-width:2.6;fill:none;stroke-linecap:round}
.pr-v-handle{fill:var(--v);stroke:#fff;stroke-width:2;cursor:grab}
.pr-v-handle:active{cursor:grabbing}
.pr-v-label{fill:var(--v);font-family:var(--font-display);font-style:italic;font-size:16px;font-weight:600}
.pr-pv-shaft{stroke:var(--pv);stroke-width:2.6;fill:none;stroke-linecap:round}
.pr-pv-tip{fill:var(--pv);stroke:#fff;stroke-width:2}
.pr-pv-label{fill:var(--pv);font-family:var(--font-display);font-style:italic;font-size:16px;font-weight:600}
.pr-pv-collapsed{fill:none;stroke:var(--perp);stroke-width:2;stroke-dasharray:3 3}
.pr-origin-dot{fill:var(--text-soft)}
`;

// =====================================================================
//  SECTION 6  ::  Sub-components
// =====================================================================

function ProjectionCanvas({
  theta = Math.PI / 4,
  v = [1.5, 1.5],
  t = 1,
  layers = DEFAULT_LAYERS,
  geom = DEFAULT_GEOM,
  onVChange,
  draggable = true,
  className,
  style,
}) {
  const svgRef = useRef(null);
  const draggingRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  const pointerToMath = (e) => {
    if (!svgRef.current) return [0, 0];
    const rect = svgRef.current.getBoundingClientRect();
    const xSvg = (e.clientX - rect.left) * (geom.size / rect.width);
    const ySvg = (e.clientY - rect.top) * (geom.size / rect.height);
    const cx = geom.size / 2, cy = geom.size / 2;
    return [(xSvg - cx) / geom.scale, (cy - ySvg) / geom.scale];
  };

  const onPointerDown = (e) => {
    const handle = e.target.dataset && e.target.dataset.handle;
    if (handle !== 'v' || !onVChange) return;
    draggingRef.current = true;
    setIsDragging(true);
    try { e.target.setPointerCapture(e.pointerId); } catch (_) {}
    onVChange(pointerToMath(e));
  };
  const onPointerMove = (e) => {
    if (!draggingRef.current || !onVChange) return;
    onVChange(pointerToMath(e));
  };
  const onPointerUp = (e) => {
    if (!draggingRef.current) return;
    try { e.target.releasePointerCapture(e.pointerId); } catch (_) {}
    draggingRef.current = false;
    setIsDragging(false);
  };

  const P = Math2D.projMatrix(theta);
  const M = Math2D.interp(t, P);
  const u = Math2D.unitFromAngle(theta);
  const uPerp = [-u[1], u[0]];
  const Pv = Math2D.apply(P, v);

  let inner = '';
  if (layers.grid) inner += SVGRender.grid(M, geom);
  if (layers.line) {
    inner += SVGRender.lineThroughOrigin(u, 'pr-line-line', 'pr-line-halo', geom);
    if (layers.labels) inner += SVGRender.labelOnLine(u, 'im P', 'pr-line-label', geom);
  }
  if (layers.kernel) {
    inner += SVGRender.lineThroughOrigin(uPerp, 'pr-ker-line', null, geom);
    if (layers.labels) inner += SVGRender.labelOnLine(uPerp, 'ker P', 'pr-ker-label', geom);
  }
  if (layers.square) inner += SVGRender.unitSquare(M, geom);
  if (layers.dropline && Math.hypot(v[0] - Pv[0], v[1] - Pv[1]) > 1e-3) {
    inner += SVGRender.dropline(v, Pv, geom);
  }
  inner += SVGRender.pvArrow(Pv, geom, layers.labels);
  inner += SVGRender.vArrow(v, geom, layers.labels);
  inner += SVGRender.origin(geom);

  return (
    <svg
      ref={svgRef}
      className={'pr-canvas' + (isDragging ? ' dragging' : '') + (className ? ' ' + className : '')}
      style={style}
      viewBox={`0 0 ${geom.size} ${geom.size}`}
      xmlns="http://www.w3.org/2000/svg"
      onPointerDown={draggable ? onPointerDown : undefined}
      onPointerMove={draggable ? onPointerMove : undefined}
      onPointerUp={draggable ? onPointerUp : undefined}
      onPointerCancel={draggable ? onPointerUp : undefined}
    >
      <defs>
        <marker id="pr-arr-v" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
          <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#ea580c" />
        </marker>
        <marker id="pr-arr-pv" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
          <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#059669" />
        </marker>
      </defs>
      <g dangerouslySetInnerHTML={{ __html: inner }} />
      {draggable && onVChange && (() => {
        const tx = SVGRender._proj(geom);
        const [vx, vy] = tx(v);
        return <circle data-handle="v" cx={vx} cy={vy} r={14} fill="transparent" style={{ cursor: 'grab' }} />;
      })()}
    </svg>
  );
}

function LayerChips({ layers = {}, onChange = () => {}, enabledLayers, layerDefs = ALL_LAYER_DEFS }) {
  const defs = enabledLayers ? layerDefs.filter((d) => enabledLayers.includes(d.key)) : layerDefs;
  return (
    <div className="pr-chips-strip">
      {defs.map((d) => (
        <label key={d.key} className="pr-chip">
          <input type="checkbox" checked={!!layers[d.key]} onChange={(e) => onChange({ ...layers, [d.key]: e.target.checked })} />
          {d.label}
          {d.swatch && <span className="pr-sw" style={{ background: d.swatch }} />}
        </label>
      ))}
    </div>
  );
}

function CanvasReadout({ kind = 'v', label = 'v', value = '(0, 0)' }) {
  return (
    <div className={`pr-readout pr-${kind}`}>
      <span className="pr-lab">{label}</span>
      <span className="pr-eq">=</span>
      <span className="pr-val">{value}</span>
    </div>
  );
}

const ICON_RESET = <svg viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/></svg>;
const ICON_BACK  = <svg viewBox="0 0 24 24"><path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z"/></svg>;
const ICON_FWD   = <svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6h2v12h-2V6z"/></svg>;

function AnimationCard({
  t = 0, playing = false,
  onPlay = () => {}, onPause = () => {},
  onStepFwd = () => {}, onStepBack = () => {},
  onReset = () => {}, onScrub = () => {},
  title = 'Morph I \u2192 P',
}) {
  const pct = (Math.max(0, Math.min(1, t)) * 100).toFixed(2);
  const sliderBg = `linear-gradient(to right, var(--accent) 0%, var(--accent) ${pct}%, var(--border) ${pct}%, var(--border) 100%)`;
  return (
    <div className="pr-anim-card">
      <div className="pr-anim-head">
        <span><span className="pr-badge">&#9656;</span>{title}</span>
        <span className="pr-t-readout">t = {t.toFixed(3)}</span>
      </div>
      <div className="pr-anim-progress"><div className="pr-fill" style={{ width: pct + '%' }} /></div>
      <div className="pr-anim-controls">
        <button className="pr-ctrl-btn" onClick={onReset} title="Reset" type="button">{ICON_RESET}</button>
        <button className="pr-ctrl-btn" onClick={onStepBack} disabled={t <= 1e-4} title="Step back" type="button">{ICON_BACK}</button>
        <button className="pr-ctrl-btn pr-primary" onClick={playing ? onPause : onPlay} title="Play / Pause" type="button">
          {playing ? 'Pause' : 'Play'}
        </button>
        <button className="pr-ctrl-btn" onClick={onStepFwd} disabled={t >= 1 - 1e-4} title="Step forward" type="button">{ICON_FWD}</button>
        <input type="range" min={0} max={1} step={0.001} value={t}
          className="pr-slider" style={{ background: sliderBg }}
          onChange={(e) => onScrub(parseFloat(e.target.value))} />
        <span className="pr-t-label">t = <span className="pr-val">{t.toFixed(3)}</span></span>
      </div>
    </div>
  );
}

function ProjectionMatrixCard({ theta = Math.PI / 4, onThetaChange = () => {} }) {
  const P = Math2D.projMatrix(theta);
  const deg = Math.round(theta * 180 / Math.PI);
  return (
    <div className="pr-card pr-matrix-card">
      <h2><span><span className="pr-badge">A</span>Projection matrix</span><span className="pr-note">P = uu&#7488;</span></h2>
      <div className="pr-matrix-wrap">
        <span className="pr-matrix-eq">P</span>
        <span className="pr-matrix-op">=</span>
        <div className="pr-matrix-bracket">
          <span>{Math2D.fmt(P[0][0])}</span>
          <span>{Math2D.fmt(P[0][1])}</span>
          <span>{Math2D.fmt(P[1][0])}</span>
          <span>{Math2D.fmt(P[1][1])}</span>
        </div>
      </div>
      <div className="pr-angle-row">
        <span className="pr-angle-lbl">&theta;</span>
        <input type="range" min={0} max={180} step={1} value={deg}
          className="pr-angle-slider"
          onChange={(e) => onThetaChange(parseFloat(e.target.value) * Math.PI / 180)} />
        <span className="pr-angle-val">{deg}&deg;</span>
      </div>
    </div>
  );
}

function ExplanationCard({ preset = 'diag', scenarios = SCENARIOS, override }) {
  let sc = scenarios[preset];
  if (!sc) sc = scenarios[Object.keys(scenarios)[0]];
  if (override && override.byPreset && override.byPreset[preset]) sc = override.byPreset[preset];
  return (
    <div className="pr-card">
      <div className="pr-ex-header">
        <h3 dangerouslySetInnerHTML={{ __html: sc.title }} />
        <span className="pr-ex-tag" dangerouslySetInnerHTML={{ __html: sc.exTag || sc.tag }} />
      </div>
      <p className="pr-ex-body" dangerouslySetInnerHTML={{ __html: sc.body }} />
      {sc.insight && (
        <div className="pr-ex-block">
          <div className="pr-ex-block-label">Insight</div>
          <p dangerouslySetInnerHTML={{ __html: sc.insight }} />
        </div>
      )}
    </div>
  );
}

function LiveCard({ theta = Math.PI / 4, v = [1, 0] }) {
  const P = Math2D.projMatrix(theta);
  const Pv = Math2D.apply(P, v);
  const vMag = Math.hypot(v[0], v[1]);
  const pvMag = Math.hypot(Pv[0], Pv[1]);
  const dist = Math.hypot(v[0] - Pv[0], v[1] - Pv[1]);
  const u = Math2D.unitFromAngle(theta);
  const dot = v[0] * u[0] + v[1] * u[1];
  const angleVLine = vMag > 1e-6 ? Math.acos(Math.max(-1, Math.min(1, Math.abs(dot) / vMag))) * 180 / Math.PI : 0;
  return (
    <div className="pr-card">
      <h2><span><span className="pr-badge">04</span>Live</span><span className="pr-note">drag v</span></h2>
      <div className="pr-live-grid">
        <span className="pr-lk">|v|</span><span className="pr-lv pr-v">{Math2D.fmt(vMag)}</span>
        <span className="pr-lk">|Pv|</span><span className="pr-lv pr-pv">{Math2D.fmt(pvMag)}</span>
        <span className="pr-lk">|v &minus; Pv|</span><span className="pr-lv pr-perp">{Math2D.fmt(dist)}</span>
        <span className="pr-lk">angle(v, line)</span><span className="pr-lv">{Math2D.fmt(angleVLine)}&deg;</span>
        <span className="pr-lk">det P</span><span className="pr-lv">{Math2D.fmt(Math2D.det(P))}</span>
        <span className="pr-lk">trace P</span><span className="pr-lv pr-live">{Math2D.fmt(Math2D.trace(P))}</span>
      </div>
      <div className="pr-check-row">
        <span className="pr-ok">&#10003;</span>
        <span>P&sup2;v = Pv &middot; idempotence verified</span>
      </div>
    </div>
  );
}

function ScenariosPanel({
  scenarios = SCENARIOS,
  groups = SCENARIO_GROUPS,
  preset = null,
  onSelect = () => {},
  visibleScenarios,
  badge = '03',
  title = 'Project onto',
}) {
  const visible = visibleScenarios
    ? Object.fromEntries(visibleScenarios.map((k) => [k, scenarios[k]]).filter(([, s]) => s))
    : scenarios;
  return (
    <div className="pr-card pr-scenarios-card">
      <h2><span><span className="pr-badge">{badge}</span>{title}</span></h2>
      <div className="pr-scen-sections">
        {groups.map((g) => {
          const items = Object.entries(visible).filter(([, sc]) => sc.group === g.key);
          if (!items.length) return null;
          return (
            <div className="pr-scen-section" key={g.key}>
              <div className="pr-scen-section-label">
                <span>{g.label}</span>
                <span className="pr-tag">{g.tag}</span>
              </div>
              <div className="pr-preset-grid">
                {items.map(([key, sc]) => (
                  <button
                    key={key}
                    className={'pr-preset-btn' + (preset === key ? ' pr-active' : '')}
                    onClick={() => onSelect(key)}
                  >
                    <span>{sc.label}</span>
                    <span className="pr-ptag">{sc.tag}</span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// =====================================================================
//  SECTION 7  ::  Core + Wrapper
// =====================================================================
export function ProjectionCore({
  initialTheta, initialPreset, initialV, initialLayers, scenarios,
  step = 0.1, duration = 1600, initialT = 1,
  children,
}) {
  const state = useProjectionState({ initialTheta, initialPreset, initialV, initialLayers, scenarios });
  const anim = useAnimationState({ step, duration, initialT });

  // Re-play morph when preset changes
  useEffect(() => {
    if (!state.preset) return;
    anim.setT(0);
    requestAnimationFrame(() => anim.animateTo(1, duration));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.preset]);

  if (typeof children === 'function') return children({ state, anim });
  return null;
}

export default function Projection({
  lede,
  ledeCrumb = DEFAULT_LEDE.crumb,
  ledeBody  = DEFAULT_LEDE.body,
  initialTheta, initialPreset, initialV, initialLayers, scenarios,
  step, duration, initialT,
  layerChips, canvas, explanation, liveCard, scenariosPanel, animation, matrixCard,
  visibleScenarios, enabledLayers, explanationOverride,
  layout,
  className, style,
}) {
  return (
    <ProjectionCore
      initialTheta={initialTheta}
      initialPreset={initialPreset}
      initialV={initialV}
      initialLayers={initialLayers}
      scenarios={scenarios}
      step={step} duration={duration} initialT={initialT}
    >
      {({ state, anim }) => {
        const renderLede = () => {
          if (lede !== undefined) return lede;
          if (ledeCrumb === null && ledeBody === null) return null;
          return (
            <div className="pr-lede">
              {ledeCrumb && <span className="pr-crumb" dangerouslySetInnerHTML={{ __html: ledeCrumb }} />}
              {ledeBody && <span dangerouslySetInnerHTML={{ __html: ledeBody }} />}
            </div>
          );
        };

        const Pv = Math2D.apply(Math2D.projMatrix(state.theta), state.v);

        const slotChips = layerChips !== undefined ? layerChips : (
          <LayerChips layers={state.layers} onChange={state.setLayers} enabledLayers={enabledLayers} />
        );
        const slotCanvas = canvas !== undefined ? canvas : (
          <ProjectionCanvas theta={state.theta} v={state.v} t={anim.t} layers={state.layers} onVChange={state.setV} />
        );
        const slotExp = explanation !== undefined ? explanation : (
          <ExplanationCard preset={state.preset} scenarios={scenarios || SCENARIOS} override={explanationOverride} />
        );
        const slotLive = liveCard !== undefined ? liveCard : (
          <LiveCard theta={state.theta} v={state.v} />
        );
        const slotScenarios = scenariosPanel !== undefined ? scenariosPanel : (
          <ScenariosPanel
            scenarios={scenarios || SCENARIOS}
            preset={state.preset}
            onSelect={state.selectPreset}
            visibleScenarios={visibleScenarios}
          />
        );
        const slotMatrix = matrixCard !== undefined ? matrixCard : (
          <ProjectionMatrixCard theta={state.theta} onThetaChange={state.setTheta} />
        );
        const slotAnim = animation !== undefined ? animation : (
          <AnimationCard
            t={anim.t} playing={anim.playing}
            onPlay={anim.play} onPause={anim.cancel}
            onStepFwd={anim.stepFwd} onStepBack={anim.stepBack}
            onReset={anim.reset} onScrub={anim.setT}
          />
        );

        if (typeof layout === 'function') {
          return (
            <div className={'pr-root ' + (className || '')} style={style}>
              <style dangerouslySetInnerHTML={{ __html: COMPONENT_CSS }} />
              {layout({ state, anim })}
            </div>
          );
        }

        return (
          <div className={'pr-root ' + (className || '')} style={style}>
            <style dangerouslySetInnerHTML={{ __html: COMPONENT_CSS }} />
            <div className="pr-app">
              {renderLede()}
              <main className="pr-main">
                <aside className="pr-scen-col">{slotScenarios}</aside>
                <section className="pr-canvas-col">
                  <div className="pr-canvas-wrap">{slotCanvas}</div>
                  <div className="pr-readouts">
                    <CanvasReadout kind="v" label="v" value={Math2D.fmtPair(state.v)} />
                    <CanvasReadout kind="pv" label="Pv" value={Math2D.fmtPair(Pv)} />
                  </div>
                  {slotAnim}
                </section>
                <section className="pr-info-col">
                  {slotExp}
                  {slotChips}
                  {slotMatrix}
                  {slotLive}
                </section>
              </main>
            </div>
          </div>
        );
      }}
    </ProjectionCore>
  );
}

export {
  ProjectionCanvas, LayerChips, CanvasReadout,
  AnimationCard, ProjectionMatrixCard, ExplanationCard, LiveCard, ScenariosPanel,
  useProjectionState, useAnimationState,
  Math2D, SVGRender,
  SCENARIOS, SCENARIO_GROUPS, DEFAULT_LAYERS, DEFAULT_GEOM, ALL_LAYER_DEFS,
};