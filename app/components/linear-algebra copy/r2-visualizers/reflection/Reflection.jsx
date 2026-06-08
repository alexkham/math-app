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

  // Reflection across line at angle theta: R = 2uu^T - I = [[cos2θ, sin2θ], [sin2θ, -cos2θ]]
  reflMatrix(theta) {
    const c2 = Math.cos(2 * theta), s2 = Math.sin(2 * theta);
    return [[c2, s2], [s2, -c2]];
  },

  // Projection (= midpoint of v and Rv when applied to v)
  projMatrix(theta) {
    const c = Math.cos(theta), s = Math.sin(theta);
    return [[c * c, c * s], [c * s, s * s]];
  },

  unitFromAngle(theta) { return [Math.cos(theta), Math.sin(theta)]; },

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
      const cls = i === 0 ? 'rf-grid-axis' : 'rf-grid-line';
      const [x1, y1] = tx(Math2D.apply(M, [-R, i]));
      const [x2, y2] = tx(Math2D.apply(M, [R, i]));
      s += `<line class="${cls}" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
      const [x3, y3] = tx(Math2D.apply(M, [i, -R]));
      const [x4, y4] = tx(Math2D.apply(M, [i, R]));
      s += `<line class="${cls}" x1="${x3.toFixed(2)}" y1="${y3.toFixed(2)}" x2="${x4.toFixed(2)}" y2="${y4.toFixed(2)}"/>`;
    }
    return s;
  },

  mirrorLine(dir, geom) {
    const tx = SVGRender._proj(geom);
    const R = geom.gridR;
    const [x1, y1] = tx([-R * dir[0], -R * dir[1]]);
    const [x2, y2] = tx([R * dir[0], R * dir[1]]);
    return `<line class="rf-mirror-halo" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`
      + `<line class="rf-mirror-line" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
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
    else if (dM < -1e-3) { fill = 'rgba(124,58,237,0.18)'; stroke = '#7c3aed'; }
    else { fill = 'rgba(148,163,184,0.15)'; stroke = '#94a3b8'; }
    return `<polygon class="rf-unit-square" points="${pts}" fill="${fill}" stroke="${stroke}"/>`;
  },

  perpThrough(v, Rv, mid, geom) {
    const tx = SVGRender._proj(geom);
    const [vx, vy] = tx(v);
    const [rvx, rvy] = tx(Rv);
    let s = `<line class="rf-perp" x1="${vx.toFixed(2)}" y1="${vy.toFixed(2)}" x2="${rvx.toFixed(2)}" y2="${rvy.toFixed(2)}"/>`;
    // Right-angle marker at the midpoint (where perp meets mirror)
    const dx = rvx - vx, dy = rvy - vy;
    const len = Math.hypot(dx, dy);
    if (len > 12) {
      const ux = dx / len, uy = dy / len;
      const px = -uy, py = ux;
      const SZ = 8;
      const [mx, my] = tx(mid);
      // Two perpendicular ticks forming a corner on one side of the line
      const a1x = mx + ux * SZ, a1y = my + uy * SZ;
      const a2x = mx + ux * SZ + px * SZ, a2y = my + uy * SZ + py * SZ;
      const a3x = mx + px * SZ, a3y = my + py * SZ;
      s += `<polyline class="rf-right-angle" points="${a1x.toFixed(1)},${a1y.toFixed(1)} ${a2x.toFixed(1)},${a2y.toFixed(1)} ${a3x.toFixed(1)},${a3y.toFixed(1)}"/>`;
    }
    return s;
  },

  midpoint(mid, geom, showLabel) {
    const tx = SVGRender._proj(geom);
    const [mx, my] = tx(mid);
    let s = `<circle class="rf-mid-dot" cx="${mx.toFixed(2)}" cy="${my.toFixed(2)}" r="4"/>`;
    if (showLabel && Math.hypot(mid[0], mid[1]) > 0.15) {
      const lx = mid[0] + 0.3, ly = mid[1] + 0.3;
      const [px, py] = tx([lx, ly]);
      s += `<text class="rf-mid-label" x="${px.toFixed(2)}" y="${py.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">Pv</text>`;
    }
    return s;
  },

  origin(geom) {
    const tx = SVGRender._proj(geom);
    const [ox, oy] = tx([0, 0]);
    return `<circle class="rf-origin-dot" cx="${ox}" cy="${oy}" r="2.5"/>`;
  },

  vArrow(v, geom, showLabel) {
    const tx = SVGRender._proj(geom);
    const [ox, oy] = tx([0, 0]);
    const [tipX, tipY] = tx(v);
    let s = '';
    s += `<line class="rf-v-shaft" x1="${ox}" y1="${oy}" x2="${tipX.toFixed(2)}" y2="${tipY.toFixed(2)}" marker-end="url(#rf-arr-v)"/>`;
    s += `<circle class="rf-v-handle" cx="${tipX.toFixed(2)}" cy="${tipY.toFixed(2)}" r="7"/>`;
    if (showLabel) {
      const lx = v[0] + (v[0] >= 0 ? 0.32 : -0.32);
      const ly = v[1] + (v[1] >= 0 ? 0.32 : -0.32);
      const [px, py] = tx([lx, ly]);
      s += `<text class="rf-v-label" x="${px.toFixed(2)}" y="${py.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">v</text>`;
    }
    return s;
  },

  rvArrow(Rv, geom, showLabel) {
    const tx = SVGRender._proj(geom);
    const [ox, oy] = tx([0, 0]);
    const [tipX, tipY] = tx(Rv);
    let s = '';
    s += `<line class="rf-rv-shaft" x1="${ox}" y1="${oy}" x2="${tipX.toFixed(2)}" y2="${tipY.toFixed(2)}" marker-end="url(#rf-arr-rv)"/>`;
    s += `<circle class="rf-rv-tip" cx="${tipX.toFixed(2)}" cy="${tipY.toFixed(2)}" r="6"/>`;
    if (showLabel) {
      const lx = Rv[0] + (Rv[0] >= 0 ? 0.36 : -0.36);
      const ly = Rv[1] + (Rv[1] >= 0 ? 0.36 : -0.36);
      const [px, py] = tx([lx, ly]);
      s += `<text class="rf-rv-label" x="${px.toFixed(2)}" y="${py.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">Rv</text>`;
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
    title: 'Reflect across the x-axis', exTag: 'det \u22121 \u00B7 \u03BB = \u00B11',
    body: 'Flips the y-component: <code>(x, y) \u21A6 (x, \u2212y)</code>. The x-axis is the fixed mirror; the y-axis is flipped.',
    insight: 'Eigenvalues are +1 (mirror direction) and \u22121 (perpendicular). The two eigendirections are always perpendicular for any reflection.',
  },
  yAxis: {
    theta: Math.PI / 2, label: 'y-axis', group: 'axes', tag: '90\u00B0',
    title: 'Reflect across the y-axis', exTag: 'det \u22121 \u00B7 \u03BB = \u00B11',
    body: 'Flips the x-component: <code>(x, y) \u21A6 (\u2212x, y)</code>. The y-axis is the mirror; the x-axis is reversed.',
    insight: 'Composing two reflections \u2014 first across the x-axis, then the y-axis \u2014 gives a 180\u00B0 rotation. Two reflections at angle \u03B1 apart compose to a rotation by 2\u03B1.',
  },
  diag: {
    theta: Math.PI / 4, label: 'y = x', group: 'diagonals', tag: '45\u00B0',
    title: 'Reflect across y = x', exTag: 'det \u22121 \u00B7 involution',
    body: 'Swaps coordinates: <code>(x, y) \u21A6 (y, x)</code>. The <span class="rf-mirror">diagonal</span> is fixed; the anti-diagonal flips.',
    insight: 'R = 2P \u2212 I. Halfway through the I\u2192R morph (t = 0.5) the map equals the projection P itself. The <span class="rf-mid">midpoint</span> of v and Rv is exactly Pv.',
  },
  antiDiag: {
    theta: 3 * Math.PI / 4, label: 'y = \u2212x', group: 'diagonals', tag: '135\u00B0',
    title: 'Reflect across y = \u2212x', exTag: 'det \u22121 \u00B7 involution',
    body: 'Mirror is the anti-diagonal y = \u2212x. Equivalent to: <code>(x, y) \u21A6 (\u2212y, \u2212x)</code>. Compose with the y = x reflection to get a 90\u00B0 rotation.',
    insight: 'Any two perpendicular reflections compose to a 180\u00B0 rotation \u2014 because 2 \u00D7 90\u00B0 = 180\u00B0.',
  },
  deg30: {
    theta: Math.PI / 6, label: '30\u00B0 line', group: 'custom', tag: '\u03C0/6',
    title: 'Reflect across 30\u00B0 line', exTag: 'det \u22121',
    body: 'Mirror through origin at 30\u00B0. The fixed direction rotates with \u03B8; the flipped direction is always perpendicular.',
    insight: 'Off-axis reflection matrix: <code>R = [[cos 2\u03B8, sin 2\u03B8], [sin 2\u03B8, \u2212cos 2\u03B8]]</code>. Trace = 0 and det = \u22121 for every angle.',
  },
  deg60: {
    theta: Math.PI / 3, label: '60\u00B0 line', group: 'custom', tag: '\u03C0/3',
    title: 'Reflect across 60\u00B0 line', exTag: 'det \u22121',
    body: 'Mirror at 60\u00B0. Compose with the 30\u00B0 reflection to get a 60\u00B0 rotation (twice the angle between mirrors).',
    insight: 'Reflections are involutions: <code>R\u00B2 = I</code>. Applying R twice returns every vector to itself.',
  },
  deg120: {
    theta: 2 * Math.PI / 3, label: '120\u00B0 line', group: 'custom', tag: '2\u03C0/3',
    title: 'Reflect across 120\u00B0 line', exTag: 'det \u22121',
    body: 'Mirror at 120\u00B0. Reflections preserve length but reverse orientation; the unit square comes back the same shape but flipped (det = \u22121).',
    insight: 'The unit-square fill changes color to mark the orientation flip: filled purple at t = 1 vs blue at t = 0.',
  },
};

const SCENARIO_GROUPS = [
  { key: 'axes',      label: 'Coord axes',   tag: '2 axes',  tagClass: 'axes' },
  { key: 'diagonals', label: 'Diagonals',    tag: '\u00B145\u00B0', tagClass: 'diagonals' },
  { key: 'custom',    label: 'Custom angle', tag: 'drag',    tagClass: 'custom' },
];

const DEFAULT_LAYERS = {
  grid: true, mirror: true, perp: true, midpoint: true, square: true, labels: true,
};

const ALL_LAYER_DEFS = [
  { key: 'grid', label: 'grid' },
  { key: 'mirror', label: 'mirror', swatch: '#2b5bd7' },
  { key: 'perp', label: 'perp' },
  { key: 'midpoint', label: 'midpoint', swatch: '#7c3aed' },
  { key: 'square', label: 'unit sq' },
  { key: 'labels', label: 'labels' },
];

const DEFAULT_LEDE = {
  crumb: 'Linear Algebra<span class="rf-dot">&middot;</span>Reflection',
  body: 'Flip <span class="rf-v">v</span> across the <span class="rf-mirror">mirror</span>; same distance, other side. Reflection is its own inverse: <code>R&sup2; = I</code>.',
};

// =====================================================================
//  SECTION 4  ::  Hooks
// =====================================================================
function useReflectionState(options = {}) {
  const {
    initialTheta = Math.PI / 4,
    initialPreset = 'diag',
    initialV = [1.5, 2],
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
.rf-root{
  --bg:#f7f9fc;--surface:#fff;--surface-2:#f3f6fa;
  --border:#dde3ec;--border-strong:#c4cdda;
  --text:#0f1729;--text-soft:#243049;--text-dim:#4a5673;--text-faint:#7989a3;
  --accent:#2b5bd7;--accent-hover:#1e46b3;--accent-soft:#eaf0fb;--accent-line:#c8d6f1;
  --v:#ea580c;--rv:#0891b2;--line:#2b5bd7;--perp:#dc2626;--mid:#7c3aed;
  --vSoft:rgba(234,88,12,.08);--rvSoft:rgba(8,145,178,.08);--midSoft:rgba(124,58,237,.12);
  --grid:#e2e8f0;--grid-axis:#94a3b8;
  --font-display:'Fraunces',Georgia,serif;
  --font-body:'IBM Plex Sans',-apple-system,BlinkMacSystemFont,sans-serif;
  --font-mono:'JetBrains Mono',Menlo,monospace;
  --shadow-card:0 1px 0 rgba(15,23,41,.04),0 1px 2px rgba(15,23,41,.04);
  --radius:6px;
  color:var(--text);font-family:var(--font-body);line-height:1.5;
  -webkit-font-smoothing:antialiased;background:var(--bg);
}
.rf-root *{box-sizing:border-box}
.rf-app{display:grid;grid-template-rows:auto auto;gap:10px;padding:14px 24px;max-width:1340px;margin:0 auto;background:var(--bg)}

.rf-lede{display:flex;align-items:baseline;gap:14px;font-size:14px;color:var(--text-dim);line-height:1.45}
.rf-crumb{font-family:var(--font-mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--text-faint);white-space:nowrap}
.rf-crumb .rf-dot{color:var(--accent);margin:0 6px}
.rf-lede .rf-v{color:var(--v);font-weight:500}
.rf-lede .rf-rv{color:var(--rv);font-weight:500}
.rf-lede .rf-mirror{color:var(--line);font-weight:500}
.rf-lede code{font-family:var(--font-mono);font-size:13px;background:var(--accent-soft);color:var(--accent-hover);padding:1px 6px;border-radius:3px}

.rf-main{display:grid;gap:14px;align-items:start;grid-template-columns:230px 620px minmax(360px,1fr)}
.rf-scen-col,.rf-canvas-col,.rf-info-col{display:flex;flex-direction:column;gap:10px;min-width:0}
@media (max-width:1240px){.rf-main{grid-template-columns:1fr}}

.rf-canvas-wrap{width:100%;display:flex;align-items:center;justify-content:center}
.rf-canvas{width:100%;aspect-ratio:1/1;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow-card);display:block;touch-action:none}
.rf-canvas.dragging{cursor:grabbing}

.rf-readouts{display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%}
.rf-readout{background:var(--surface);border:1px solid var(--border);border-left:3px solid currentColor;padding:8px 12px;border-radius:5px;display:flex;align-items:baseline;gap:10px;font-family:var(--font-mono);font-size:13.5px;font-weight:600;min-width:0}
.rf-readout .rf-lab{font-family:var(--font-display);font-style:italic;font-size:17px;font-weight:500;flex-shrink:0}
.rf-readout .rf-eq{color:var(--text-faint);font-weight:400}
.rf-readout .rf-val{color:var(--text);font-weight:500;font-variant-numeric:tabular-nums;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.rf-readout.rf-v{color:var(--v)}
.rf-readout.rf-rv{color:var(--rv)}

.rf-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow-card);padding:12px 14px}
.rf-card h2{font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--text-faint);margin:0 0 10px;display:flex;align-items:center;justify-content:space-between}
.rf-badge{color:var(--accent);margin-right:6px;font-weight:600}
.rf-card h2 .rf-note{font-weight:500;letter-spacing:.04em;text-transform:none;font-size:11px;color:var(--text-dim);font-family:var(--font-mono)}

.rf-anim-card{padding:12px 14px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow-card)}
.rf-anim-head{font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--text-faint);margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;gap:8px}
.rf-anim-head .rf-t-readout{font-weight:500;letter-spacing:.05em;text-transform:none;color:var(--accent);font-family:var(--font-mono)}
.rf-anim-head .rf-t-readout .rf-half{color:var(--mid);font-weight:600;margin-left:8px}
.rf-anim-progress{height:5px;background:var(--surface-2);border-radius:3px;overflow:hidden;position:relative;margin-bottom:10px}
.rf-anim-progress .rf-fill{position:absolute;left:0;top:0;bottom:0;background:linear-gradient(90deg,var(--v),var(--mid) 50%,var(--rv));border-radius:3px;transition:width .12s linear}
.rf-anim-progress .rf-half-tick{position:absolute;top:-2px;bottom:-2px;left:50%;width:2px;background:var(--mid);opacity:.6}
.rf-anim-controls{display:flex;gap:6px;align-items:center}
.rf-ctrl-btn{background:var(--surface-2);border:1px solid var(--border);width:30px;height:28px;border-radius:4px;cursor:pointer;color:var(--text-dim);font-weight:600;display:inline-flex;align-items:center;justify-content:center;padding:0;transition:all .12s}
.rf-ctrl-btn:hover{background:var(--accent-soft);color:var(--accent);border-color:var(--accent-line)}
.rf-ctrl-btn:disabled{opacity:.4;cursor:not-allowed}
.rf-ctrl-btn svg{width:11px;height:11px;fill:currentColor}
.rf-ctrl-btn.rf-primary{background:var(--accent);border-color:var(--accent);color:#fff;width:auto;padding:0 14px;font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;font-family:var(--font-mono)}
.rf-ctrl-btn.rf-primary:hover{background:var(--accent-hover);border-color:var(--accent-hover);color:#fff}
.rf-slider{flex:1;-webkit-appearance:none;appearance:none;height:4px;border-radius:2px;outline:none;cursor:pointer;min-width:60px;margin:0 4px}
.rf-slider::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:var(--accent);border:2px solid #fff;cursor:pointer;box-shadow:0 0 0 1px var(--accent)}
.rf-slider::-moz-range-thumb{width:12px;height:12px;border-radius:50%;background:var(--accent);border:2px solid #fff;cursor:pointer}
.rf-t-label{font-family:var(--font-mono);font-size:11px;color:var(--text-faint);min-width:70px;text-align:right;font-variant-numeric:tabular-nums}
.rf-t-label .rf-val{color:var(--text);font-weight:600}

.rf-chips-strip{display:flex;flex-wrap:wrap;gap:2px;padding:4px 8px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow-card)}
.rf-chip{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;font-family:var(--font-mono);font-size:11px;letter-spacing:.04em;color:var(--text-faint);background:transparent;border:1px solid transparent;border-radius:4px;cursor:pointer;user-select:none;transition:all .12s}
.rf-chip input{width:12px;height:12px;margin:0;accent-color:var(--accent);cursor:pointer}
.rf-chip:hover,.rf-chip:has(input:checked){color:var(--text);background:var(--accent-soft)}
.rf-chip .rf-sw{display:inline-block;width:11px;height:3px;border-radius:1px}

.rf-ex-header{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--border)}
.rf-ex-header h3{font-family:var(--font-display);font-weight:500;font-size:19px;color:var(--text);margin:0;letter-spacing:-.01em;line-height:1.2}
.rf-ex-tag{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--text-faint);white-space:nowrap}
.rf-ex-body{color:var(--text-soft);font-size:13.5px;line-height:1.55;margin:0 0 10px}
.rf-ex-body .rf-mirror{color:var(--line);font-weight:500}
.rf-ex-body .rf-v{color:var(--v);font-weight:500}
.rf-ex-body .rf-rv{color:var(--rv);font-weight:500}
.rf-ex-body .rf-mid{color:var(--mid);font-weight:500}
.rf-ex-body code,.rf-ex-block code{font-family:var(--font-mono);font-size:11.5px;background:var(--accent-soft);color:var(--accent-hover);padding:1px 4px;border-radius:3px}
.rf-ex-block{margin-top:10px;padding-top:10px;border-top:1px dashed var(--border)}
.rf-ex-block-label{font-family:var(--font-mono);font-size:9.5px;letter-spacing:.15em;text-transform:uppercase;color:var(--accent);margin-bottom:4px}
.rf-ex-block p{margin:0;font-size:12.5px;color:var(--text-soft);line-height:1.55}

.rf-matrix-card{padding:12px 14px}
.rf-matrix-wrap{display:flex;justify-content:center;align-items:center;gap:10px;padding:2px 0}
.rf-matrix-eq{font-family:var(--font-display);font-style:italic;font-size:18px;font-weight:500;color:var(--text)}
.rf-matrix-op{color:var(--text-faint);font-size:14px}
.rf-matrix-bracket{display:grid;grid-template-columns:auto auto;gap:3px 10px;padding:6px 12px;position:relative;font-family:var(--font-mono);font-size:12px}
.rf-matrix-bracket::before,.rf-matrix-bracket::after{content:'';position:absolute;top:3px;bottom:3px;width:5px;border:1.3px solid var(--text-dim)}
.rf-matrix-bracket::before{left:0;border-right:none;border-radius:2px 0 0 2px}
.rf-matrix-bracket::after{right:0;border-left:none;border-radius:0 2px 2px 0}
.rf-matrix-bracket span{text-align:right;min-width:46px;color:var(--accent);font-weight:600;font-variant-numeric:tabular-nums}
.rf-angle-row{display:flex;align-items:center;gap:10px;padding:8px 0 0;margin-top:8px;border-top:1px dashed var(--border)}
.rf-angle-lbl{font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--text-faint);min-width:46px}
.rf-angle-slider{flex:1;-webkit-appearance:none;appearance:none;height:4px;border-radius:2px;outline:none;cursor:pointer}
.rf-angle-slider::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:var(--line);border:2px solid #fff;cursor:pointer;box-shadow:0 0 0 1px var(--line)}
.rf-angle-slider::-moz-range-thumb{width:12px;height:12px;border-radius:50%;background:var(--line);border:2px solid #fff;cursor:pointer}
.rf-angle-val{font-family:var(--font-mono);font-size:12px;font-weight:600;color:var(--line);min-width:42px;text-align:right;font-variant-numeric:tabular-nums}

.rf-live-grid{display:grid;grid-template-columns:auto 1fr;gap:5px 14px;align-items:baseline}
.rf-lk{font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--text-faint)}
.rf-lv{font-family:var(--font-mono);font-size:12.5px;color:var(--text);font-weight:500;text-align:right;font-variant-numeric:tabular-nums}
.rf-lv.rf-v{color:var(--v)}
.rf-lv.rf-rv{color:var(--rv)}
.rf-lv.rf-perp{color:var(--perp)}
.rf-lv.rf-live{color:var(--accent)}
.rf-lv.rf-flip{color:var(--mid);font-weight:600}
.rf-check-row{margin-top:10px;padding:7px 11px;border-radius:5px;display:flex;align-items:center;gap:8px;font-family:var(--font-mono);font-size:11px;background:var(--rvSoft);border:1px solid rgba(8,145,178,.4);color:var(--rv);font-weight:600}
.rf-check-row .rf-ok{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;background:var(--rv);color:#fff;font-weight:700;font-size:11px}

.rf-scenarios-card h2{margin-bottom:8px}
.rf-scen-sections{display:flex;flex-direction:column;gap:13px}
.rf-scen-section-label{display:flex;align-items:center;justify-content:space-between;gap:6px;font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--text-dim);margin-bottom:6px}
.rf-scen-section-label .rf-tag{padding:2px 7px;border-radius:3px;font-size:9.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;border:1px solid var(--accent-line);background:var(--accent-soft);color:var(--accent-hover);white-space:nowrap}
.rf-preset-grid{display:flex;flex-direction:column;gap:4px}
.rf-preset-btn{
  background:var(--surface-2);border:1px solid var(--border);border-left:3px solid var(--line);
  color:var(--text-soft);padding:6px 10px;
  font-family:var(--font-body);font-size:12.5px;font-weight:500;
  cursor:pointer;border-radius:4px;text-align:left;transition:all .12s;
  display:flex;justify-content:space-between;align-items:baseline;gap:6px;
}
.rf-preset-btn:hover{background:var(--accent-soft);border-color:var(--accent-line);color:var(--accent-hover)}
.rf-preset-btn.rf-active{background:var(--accent-soft);border-color:var(--accent-line);color:var(--accent-hover);font-weight:600;border-left-color:var(--accent)}
.rf-preset-btn .rf-ptag{font-family:var(--font-mono);font-size:9.5px;color:var(--text-faint)}
.rf-preset-btn.rf-active .rf-ptag{color:var(--accent)}

/* SVG primitives */
.rf-grid-line{stroke:var(--grid);stroke-width:1;fill:none}
.rf-grid-axis{stroke:var(--grid-axis);stroke-width:1.3;fill:none}
.rf-mirror-line{stroke:var(--line);stroke-width:2.2;fill:none;opacity:.9;stroke-dasharray:8 5}
.rf-mirror-halo{stroke:var(--line);stroke-width:12;fill:none;opacity:.10}
.rf-mirror-label{fill:var(--line);font-family:var(--font-display);font-style:italic;font-size:14px;font-weight:500}
.rf-unit-square{stroke-width:1.5}
.rf-perp{stroke:var(--perp);stroke-width:1.5;fill:none;stroke-dasharray:4 4;opacity:.75}
.rf-right-angle{stroke:var(--perp);stroke-width:1.4;fill:none;opacity:.65}
.rf-mid-dot{fill:var(--mid);stroke:#fff;stroke-width:1.5}
.rf-mid-label{fill:var(--mid);font-family:var(--font-display);font-style:italic;font-size:13px;font-weight:600}
.rf-v-shaft{stroke:var(--v);stroke-width:2.6;fill:none;stroke-linecap:round}
.rf-v-handle{fill:var(--v);stroke:#fff;stroke-width:2;cursor:grab}
.rf-v-handle:active{cursor:grabbing}
.rf-v-label{fill:var(--v);font-family:var(--font-display);font-style:italic;font-size:16px;font-weight:600}
.rf-rv-shaft{stroke:var(--rv);stroke-width:2.6;fill:none;stroke-linecap:round}
.rf-rv-tip{fill:var(--rv);stroke:#fff;stroke-width:2}
.rf-rv-label{fill:var(--rv);font-family:var(--font-display);font-style:italic;font-size:16px;font-weight:600}
.rf-origin-dot{fill:var(--text-soft)}
`;

// =====================================================================
//  SECTION 6  ::  Sub-components
// =====================================================================

function ReflectionCanvas({
  theta = Math.PI / 4,
  v = [1.5, 2],
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

  const R = Math2D.reflMatrix(theta);
  const P = Math2D.projMatrix(theta);
  const M = Math2D.interp(t, R);
  const u = Math2D.unitFromAngle(theta);
  const Rv = Math2D.apply(R, v);
  const mid = Math2D.apply(P, v); // midpoint of v and Rv = Pv

  let inner = '';
  if (layers.grid) inner += SVGRender.grid(M, geom);
  if (layers.mirror) {
    inner += SVGRender.mirrorLine(u, geom);
    if (layers.labels) inner += SVGRender.labelOnLine(u, 'mirror', 'rf-mirror-label', geom);
  }
  if (layers.square) inner += SVGRender.unitSquare(M, geom);
  if (layers.perp && Math.hypot(v[0] - Rv[0], v[1] - Rv[1]) > 1e-3) {
    inner += SVGRender.perpThrough(v, Rv, mid, geom);
  }
  if (layers.midpoint) inner += SVGRender.midpoint(mid, geom, layers.labels);
  inner += SVGRender.rvArrow(Rv, geom, layers.labels);
  inner += SVGRender.vArrow(v, geom, layers.labels);
  inner += SVGRender.origin(geom);

  return (
    <svg
      ref={svgRef}
      className={'rf-canvas' + (isDragging ? ' dragging' : '') + (className ? ' ' + className : '')}
      style={style}
      viewBox={`0 0 ${geom.size} ${geom.size}`}
      xmlns="http://www.w3.org/2000/svg"
      onPointerDown={draggable ? onPointerDown : undefined}
      onPointerMove={draggable ? onPointerMove : undefined}
      onPointerUp={draggable ? onPointerUp : undefined}
      onPointerCancel={draggable ? onPointerUp : undefined}
    >
      <defs>
        <marker id="rf-arr-v" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
          <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#ea580c" />
        </marker>
        <marker id="rf-arr-rv" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
          <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#0891b2" />
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
    <div className="rf-chips-strip">
      {defs.map((d) => (
        <label key={d.key} className="rf-chip">
          <input type="checkbox" checked={!!layers[d.key]} onChange={(e) => onChange({ ...layers, [d.key]: e.target.checked })} />
          {d.label}
          {d.swatch && <span className="rf-sw" style={{ background: d.swatch }} />}
        </label>
      ))}
    </div>
  );
}

function CanvasReadout({ kind = 'v', label = 'v', value = '(0, 0)' }) {
  return (
    <div className={`rf-readout rf-${kind}`}>
      <span className="rf-lab">{label}</span>
      <span className="rf-eq">=</span>
      <span className="rf-val">{value}</span>
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
  title = 'Morph I \u2192 R',
}) {
  const pct = (Math.max(0, Math.min(1, t)) * 100).toFixed(2);
  const sliderBg = `linear-gradient(to right, var(--accent) 0%, var(--accent) ${pct}%, var(--border) ${pct}%, var(--border) 100%)`;
  const atHalf = Math.abs(t - 0.5) < 1e-3;
  return (
    <div className="rf-anim-card">
      <div className="rf-anim-head">
        <span><span className="rf-badge">&#9656;</span>{title}</span>
        <span className="rf-t-readout">
          t = {t.toFixed(3)}
          {atHalf && <span className="rf-half">M = P</span>}
        </span>
      </div>
      <div className="rf-anim-progress">
        <div className="rf-fill" style={{ width: pct + '%' }} />
        <div className="rf-half-tick" />
      </div>
      <div className="rf-anim-controls">
        <button className="rf-ctrl-btn" onClick={onReset} title="Reset" type="button">{ICON_RESET}</button>
        <button className="rf-ctrl-btn" onClick={onStepBack} disabled={t <= 1e-4} title="Step back" type="button">{ICON_BACK}</button>
        <button className="rf-ctrl-btn rf-primary" onClick={playing ? onPause : onPlay} title="Play / Pause" type="button">
          {playing ? 'Pause' : 'Play'}
        </button>
        <button className="rf-ctrl-btn" onClick={onStepFwd} disabled={t >= 1 - 1e-4} title="Step forward" type="button">{ICON_FWD}</button>
        <input type="range" min={0} max={1} step={0.001} value={t}
          className="rf-slider" style={{ background: sliderBg }}
          onChange={(e) => onScrub(parseFloat(e.target.value))} />
        <span className="rf-t-label">t = <span className="rf-val">{t.toFixed(3)}</span></span>
      </div>
    </div>
  );
}

function ReflectionMatrixCard({ theta = Math.PI / 4, onThetaChange = () => {} }) {
  const R = Math2D.reflMatrix(theta);
  const deg = Math.round(theta * 180 / Math.PI);
  return (
    <div className="rf-card rf-matrix-card">
      <h2><span><span className="rf-badge">A</span>Reflection matrix</span><span className="rf-note">R = 2uu&#7488; &minus; I</span></h2>
      <div className="rf-matrix-wrap">
        <span className="rf-matrix-eq">R</span>
        <span className="rf-matrix-op">=</span>
        <div className="rf-matrix-bracket">
          <span>{Math2D.fmt(R[0][0])}</span>
          <span>{Math2D.fmt(R[0][1])}</span>
          <span>{Math2D.fmt(R[1][0])}</span>
          <span>{Math2D.fmt(R[1][1])}</span>
        </div>
      </div>
      <div className="rf-angle-row">
        <span className="rf-angle-lbl">&theta;</span>
        <input type="range" min={0} max={180} step={1} value={deg}
          className="rf-angle-slider"
          onChange={(e) => onThetaChange(parseFloat(e.target.value) * Math.PI / 180)} />
        <span className="rf-angle-val">{deg}&deg;</span>
      </div>
    </div>
  );
}

function ExplanationCard({ preset = 'diag', scenarios = SCENARIOS, override }) {
  let sc = scenarios[preset];
  if (!sc) sc = scenarios[Object.keys(scenarios)[0]];
  if (override && override.byPreset && override.byPreset[preset]) sc = override.byPreset[preset];
  return (
    <div className="rf-card">
      <div className="rf-ex-header">
        <h3 dangerouslySetInnerHTML={{ __html: sc.title }} />
        <span className="rf-ex-tag" dangerouslySetInnerHTML={{ __html: sc.exTag || sc.tag }} />
      </div>
      <p className="rf-ex-body" dangerouslySetInnerHTML={{ __html: sc.body }} />
      {sc.insight && (
        <div className="rf-ex-block">
          <div className="rf-ex-block-label">Insight</div>
          <p dangerouslySetInnerHTML={{ __html: sc.insight }} />
        </div>
      )}
    </div>
  );
}

function LiveCard({ theta = Math.PI / 4, v = [1, 0] }) {
  const R = Math2D.reflMatrix(theta);
  const Rv = Math2D.apply(R, v);
  const vMag = Math.hypot(v[0], v[1]);
  const rvMag = Math.hypot(Rv[0], Rv[1]);
  const dist = Math.hypot(v[0] - Rv[0], v[1] - Rv[1]);
  const u = Math2D.unitFromAngle(theta);
  const dot = v[0] * u[0] + v[1] * u[1];
  const angleVLine = vMag > 1e-6 ? Math.acos(Math.max(-1, Math.min(1, Math.abs(dot) / vMag))) * 180 / Math.PI : 0;
  return (
    <div className="rf-card">
      <h2><span><span className="rf-badge">04</span>Live</span><span className="rf-note">drag v</span></h2>
      <div className="rf-live-grid">
        <span className="rf-lk">|v|</span><span className="rf-lv rf-v">{Math2D.fmt(vMag)}</span>
        <span className="rf-lk">|Rv|</span><span className="rf-lv rf-rv">{Math2D.fmt(rvMag)}</span>
        <span className="rf-lk">|v &minus; Rv|</span><span className="rf-lv rf-perp">{Math2D.fmt(dist)}</span>
        <span className="rf-lk">angle(v, mirror)</span><span className="rf-lv">{Math2D.fmt(angleVLine)}&deg;</span>
        <span className="rf-lk">det R</span><span className="rf-lv rf-flip">{Math2D.fmt(Math2D.det(R))}</span>
        <span className="rf-lk">trace R</span><span className="rf-lv rf-live">{Math2D.fmt(Math2D.trace(R))}</span>
      </div>
      <div className="rf-check-row">
        <span className="rf-ok">&#10003;</span>
        <span>R&sup2;v = v &middot; involution verified</span>
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
  title = 'Reflect across',
}) {
  const visible = visibleScenarios
    ? Object.fromEntries(visibleScenarios.map((k) => [k, scenarios[k]]).filter(([, s]) => s))
    : scenarios;
  return (
    <div className="rf-card rf-scenarios-card">
      <h2><span><span className="rf-badge">{badge}</span>{title}</span></h2>
      <div className="rf-scen-sections">
        {groups.map((g) => {
          const items = Object.entries(visible).filter(([, sc]) => sc.group === g.key);
          if (!items.length) return null;
          return (
            <div className="rf-scen-section" key={g.key}>
              <div className="rf-scen-section-label">
                <span>{g.label}</span>
                <span className="rf-tag">{g.tag}</span>
              </div>
              <div className="rf-preset-grid">
                {items.map(([key, sc]) => (
                  <button
                    key={key}
                    className={'rf-preset-btn' + (preset === key ? ' rf-active' : '')}
                    onClick={() => onSelect(key)}
                  >
                    <span>{sc.label}</span>
                    <span className="rf-ptag">{sc.tag}</span>
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
export function ReflectionCore({
  initialTheta, initialPreset, initialV, initialLayers, scenarios,
  step = 0.1, duration = 1600, initialT = 1,
  children,
}) {
  const state = useReflectionState({ initialTheta, initialPreset, initialV, initialLayers, scenarios });
  const anim = useAnimationState({ step, duration, initialT });

  useEffect(() => {
    if (!state.preset) return;
    anim.setT(0);
    requestAnimationFrame(() => anim.animateTo(1, duration));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.preset]);

  if (typeof children === 'function') return children({ state, anim });
  return null;
}

export default function Reflection({
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
    <ReflectionCore
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
            <div className="rf-lede">
              {ledeCrumb && <span className="rf-crumb" dangerouslySetInnerHTML={{ __html: ledeCrumb }} />}
              {ledeBody && <span dangerouslySetInnerHTML={{ __html: ledeBody }} />}
            </div>
          );
        };

        const Rv = Math2D.apply(Math2D.reflMatrix(state.theta), state.v);

        const slotChips = layerChips !== undefined ? layerChips : (
          <LayerChips layers={state.layers} onChange={state.setLayers} enabledLayers={enabledLayers} />
        );
        const slotCanvas = canvas !== undefined ? canvas : (
          <ReflectionCanvas theta={state.theta} v={state.v} t={anim.t} layers={state.layers} onVChange={state.setV} />
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
          <ReflectionMatrixCard theta={state.theta} onThetaChange={state.setTheta} />
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
            <div className={'rf-root ' + (className || '')} style={style}>
              <style dangerouslySetInnerHTML={{ __html: COMPONENT_CSS }} />
              {layout({ state, anim })}
            </div>
          );
        }

        return (
          <div className={'rf-root ' + (className || '')} style={style}>
            <style dangerouslySetInnerHTML={{ __html: COMPONENT_CSS }} />
            <div className="rf-app">
              {renderLede()}
              <main className="rf-main">
                <aside className="rf-scen-col">{slotScenarios}</aside>
                <section className="rf-canvas-col">
                  <div className="rf-canvas-wrap">{slotCanvas}</div>
                  <div className="rf-readouts">
                    <CanvasReadout kind="v" label="v" value={Math2D.fmtPair(state.v)} />
                    <CanvasReadout kind="rv" label="Rv" value={Math2D.fmtPair(Rv)} />
                  </div>
                  {slotAnim}
                </section>
                <section className="rf-info-col">
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
    </ReflectionCore>
  );
}

export {
  ReflectionCanvas, LayerChips, CanvasReadout,
  AnimationCard, ReflectionMatrixCard, ExplanationCard, LiveCard, ScenariosPanel,
  useReflectionState, useAnimationState,
  Math2D, SVGRender,
  SCENARIOS, SCENARIO_GROUPS, DEFAULT_LAYERS, DEFAULT_GEOM, ALL_LAYER_DEFS,
};