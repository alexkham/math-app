'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

// =====================================================================
//  SECTION 1  ::  Math2D
// =====================================================================
const Math2D = {
  apply: (M, p) => [M[0][0] * p[0] + M[0][1] * p[1], M[1][0] * p[0] + M[1][1] * p[1]],
  mul: (A, B) => [
    [A[0][0] * B[0][0] + A[0][1] * B[1][0], A[0][0] * B[0][1] + A[0][1] * B[1][1]],
    [A[1][0] * B[0][0] + A[1][1] * B[1][0], A[1][0] * B[0][1] + A[1][1] * B[1][1]],
  ],
  det: (M) => M[0][0] * M[1][1] - M[0][1] * M[1][0],

  // Interpolate from identity toward M as t goes 0..1
  interp: (t, M) => [
    [(1 - t) + t * M[0][0], t * M[0][1]],
    [t * M[1][0], (1 - t) + t * M[1][1]],
  ],

  rotMatrix(deg) {
    const r = deg * Math.PI / 180;
    const c = Math.cos(r), s = Math.sin(r);
    return [[c, -s], [s, c]];
  },

  matEquals(A, B, eps = 1e-3) {
    return Math.abs(A[0][0] - B[0][0]) < eps && Math.abs(A[0][1] - B[0][1]) < eps
        && Math.abs(A[1][0] - B[1][0]) < eps && Math.abs(A[1][1] - B[1][1]) < eps;
  },

  fmt(x, p = 2) {
    if (Math.abs(x) < 1e-9) return '0';
    const r = Math.round(x * Math.pow(10, p)) / Math.pow(10, p);
    return r.toFixed(p).replace(/\.?0+$/, '') || '0';
  },
  fmtPair: (p) => `(${Math2D.fmt(p[0])}, ${Math2D.fmt(p[1])})`,
};

// --- two-phase composition math ---
// Returns the partially-applied matrices at time t in [0, 1]
//   Phase 1: t in [0, 0.5]  → first matrix interpolates I → first
//   Phase 2: t in [0.5, 1]  → second matrix interpolates I → second, on top of full first
function phaseMatrices(t, first, second) {
  const tFirst = Math.min(1, Math.max(0, t * 2));
  const tSecond = Math.min(1, Math.max(0, (t - 0.5) * 2));
  const Mfirst = Math2D.interp(tFirst, first);
  const Msecond = Math2D.interp(tSecond, second);
  const Mcomposed = Math2D.mul(Msecond, Mfirst);
  return { Mfirst, Msecond, Mcomposed, tFirst, tSecond };
}

// =====================================================================
//  SECTION 2  ::  SVGRender
// =====================================================================
const DEFAULT_GEOM = { size: 600, scale: 50, gridR: 8 };

// SVG transform matrix that applies math-coord matrix M around (size/2, size/2)
function svgMatrixTransform(M, geom) {
  const cx = geom.size / 2, cy = geom.size / 2;
  const a = M[0][0];
  const b = -M[1][0];
  const c = -M[0][1];
  const d = M[1][1];
  const e = cx - cx * a - cy * c;
  const f = cy - cx * b - cy * d;
  return `matrix(${a} ${b} ${c} ${d} ${e} ${f})`;
}

const SVGRender = {
  _proj(geom) {
    const cx = geom.size / 2, cy = geom.size / 2;
    return (p) => [cx + geom.scale * p[0], cy - geom.scale * p[1]];
  },

  gridIdentity(geom) {
    const R = geom.gridR;
    const half = geom.size / 2;
    const step = geom.scale;
    let s = '';
    for (let i = -R; i <= R; i++) {
      const cls = i === 0 ? 'mc-grid-axis' : 'mc-grid-line';
      // horizontal line y = i
      const y = half - i * step;
      s += `<line class="${cls}" x1="${-R * step + half}" y1="${y}" x2="${R * step + half}" y2="${y}"/>`;
      // vertical line x = i
      const x = half + i * step;
      s += `<line class="${cls}" x1="${x}" y1="${-R * step + half}" x2="${x}" y2="${R * step + half}"/>`;
    }
    return s;
  },

  // Wrap inner SVG content in a group with M applied around center
  morphedGroup(M, geom, innerSvg) {
    return `<g transform="${svgMatrixTransform(M, geom)}">${innerSvg}</g>`;
  },

  unitSquare(M, geom, cls = 'mc-unit-square') {
    const tx = SVGRender._proj(geom);
    const corners = [[0, 0], [1, 0], [1, 1], [0, 1]];
    const pts = corners.map((c) => tx(Math2D.apply(M, c)).map((v) => v.toFixed(2)).join(',')).join(' ');
    return `<polygon class="${cls}" points="${pts}"/>`;
  },

  origin(geom) {
    const tx = SVGRender._proj(geom);
    const [ox, oy] = tx([0, 0]);
    return `<circle class="mc-origin-dot" cx="${ox}" cy="${oy}" r="2.5"/>`;
  },

  // Single arrow from origin to p, with optional handle + label
  vectorArrow(p, color, label, arrId, geom, showHandle) {
    const tx = SVGRender._proj(geom);
    const [ox, oy] = tx([0, 0]);
    const [tipX, tipY] = tx(p);
    let s = '';
    s += `<line stroke="${color}" stroke-width="2.6" stroke-linecap="round" x1="${ox}" y1="${oy}" x2="${tipX.toFixed(2)}" y2="${tipY.toFixed(2)}" marker-end="url(#${arrId})"/>`;
    if (showHandle) {
      s += `<circle class="mc-v-handle" cx="${tipX.toFixed(2)}" cy="${tipY.toFixed(2)}" r="7" fill="${color}" stroke="#fff" stroke-width="2"/>`;
    } else {
      s += `<circle cx="${tipX.toFixed(2)}" cy="${tipY.toFixed(2)}" r="5" fill="${color}" stroke="#fff" stroke-width="1.5"/>`;
    }
    if (label) {
      const lx = p[0] + (p[0] >= 0 ? 0.32 : -0.32);
      const ly = p[1] + (p[1] >= 0 ? 0.32 : -0.32);
      const [px, py] = tx([lx, ly]);
      s += `<text class="mc-v-label" x="${px.toFixed(2)}" y="${py.toFixed(2)}" fill="${color}" text-anchor="middle" dominant-baseline="middle">${label}</text>`;
    }
    return s;
  },

  // Ghost circle (dashed or solid border) at math point p
  ghost(p, color, geom, opts = {}) {
    const { solid = false, withInnerDot = false, label, labelOffset = [0, 18], radius = 6, opacity = 1, labelOpacity = 1 } = opts;
    const tx = SVGRender._proj(geom);
    const [x, y] = tx(p);
    let s = `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${radius}" fill="#fff" stroke="${color}" stroke-width="${solid ? 2 : 1.7}"${solid ? '' : ' stroke-dasharray="2 2"'} opacity="${opacity}"/>`;
    if (withInnerDot) {
      s += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3" fill="${color}" opacity="${opacity}"/>`;
    }
    if (label) {
      const lx = x + labelOffset[0];
      const ly = y + labelOffset[1];
      s += `<text class="mc-ghost-label" x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" fill="${color}" opacity="${labelOpacity}" text-anchor="middle">${label}</text>`;
    }
    return s;
  },

  // Two-segment path in Trail view
  trailPath(t, v0, vMid, vEnd, vNow, firstColor, secondColor, geom) {
    const tx = SVGRender._proj(geom);
    const p0 = tx(v0);
    const pMid = tx(vMid);
    const pEnd = tx(vEnd);
    const pNow = tx(vNow);
    let s = '';
    if (t <= 0.5) {
      // Solid v0 → vNow (firstColor)
      s += `<line stroke="${firstColor}" stroke-width="2.6" stroke-linecap="round" x1="${p0[0].toFixed(1)}" y1="${p0[1].toFixed(1)}" x2="${pNow[0].toFixed(1)}" y2="${pNow[1].toFixed(1)}"/>`;
      // Dashed vNow → vMid (firstColor preview)
      s += `<line stroke="${firstColor}" stroke-width="2" stroke-dasharray="5 4" opacity="0.55" stroke-linecap="round" x1="${pNow[0].toFixed(1)}" y1="${pNow[1].toFixed(1)}" x2="${pMid[0].toFixed(1)}" y2="${pMid[1].toFixed(1)}"/>`;
      // Dashed vMid → vEnd (secondColor preview)
      s += `<line stroke="${secondColor}" stroke-width="2" stroke-dasharray="5 4" opacity="0.55" stroke-linecap="round" x1="${pMid[0].toFixed(1)}" y1="${pMid[1].toFixed(1)}" x2="${pEnd[0].toFixed(1)}" y2="${pEnd[1].toFixed(1)}"/>`;
    } else {
      // Solid v0 → vMid (firstColor)
      s += `<line stroke="${firstColor}" stroke-width="2.6" stroke-linecap="round" x1="${p0[0].toFixed(1)}" y1="${p0[1].toFixed(1)}" x2="${pMid[0].toFixed(1)}" y2="${pMid[1].toFixed(1)}"/>`;
      // Solid vMid → vNow (secondColor)
      s += `<line stroke="${secondColor}" stroke-width="2.6" stroke-linecap="round" x1="${pMid[0].toFixed(1)}" y1="${pMid[1].toFixed(1)}" x2="${pNow[0].toFixed(1)}" y2="${pNow[1].toFixed(1)}"/>`;
      // Dashed vNow → vEnd (secondColor preview)
      s += `<line stroke="${secondColor}" stroke-width="2" stroke-dasharray="5 4" opacity="0.55" stroke-linecap="round" x1="${pNow[0].toFixed(1)}" y1="${pNow[1].toFixed(1)}" x2="${pEnd[0].toFixed(1)}" y2="${pEnd[1].toFixed(1)}"/>`;
    }
    return s;
  },

  // Alternate (overlay) full path v0 → vAltMid → vAltEnd (dashed throughout, faded)
  altPath(v0, vAltMid, vAltEnd, firstColor, secondColor, geom) {
    const tx = SVGRender._proj(geom);
    const p0 = tx(v0);
    const pM = tx(vAltMid);
    const pE = tx(vAltEnd);
    let s = '';
    s += `<line stroke="${firstColor}" stroke-width="1.6" stroke-dasharray="5 4" opacity="0.55" x1="${p0[0].toFixed(1)}" y1="${p0[1].toFixed(1)}" x2="${pM[0].toFixed(1)}" y2="${pM[1].toFixed(1)}"/>`;
    s += `<line stroke="${secondColor}" stroke-width="1.6" stroke-dasharray="5 4" opacity="0.55" x1="${pM[0].toFixed(1)}" y1="${pM[1].toFixed(1)}" x2="${pE[0].toFixed(1)}" y2="${pE[1].toFixed(1)}"/>`;
    return s;
  },
};

// =====================================================================
//  SECTION 3  ::  Scenarios
// =====================================================================
const SCENARIOS = {
  // ---- Commutative ----
  twoRotations: {
    A: () => Math2D.rotMatrix(60),
    B: () => Math2D.rotMatrix(30),
    group: 'commute', label: 'Two rotations', tag: '30\u00B0, 60\u00B0',
    title: 'Rotations always commute', exTag: 'commutative',
    body: 'Both <span class="mc-ac">A</span> and <span class="mc-bc">B</span> are rotations. Composing them just adds the angles \u2014 order doesn&apos;t matter.',
    insight: 'Rotations of the plane form an abelian group. AB and BA produce the same combined rotation.',
  },
  twoScales: {
    A: () => [[2, 0], [0, 1]],
    B: () => [[1, 0], [0, 3]],
    group: 'commute', label: 'Two scales', tag: 'diag',
    title: 'Diagonal matrices commute', exTag: 'commutative',
    body: 'Stretch x by 2, stretch y by 3. The order doesn&apos;t affect the final shape \u2014 the two axes are scaled independently.',
    insight: 'Diagonal matrices commute with each other in any dimension because they act on independent axes.',
  },
  uniformScaleRotate: {
    A: () => [[1.4, 0], [0, 1.4]],
    B: () => Math2D.rotMatrix(45),
    group: 'commute', label: 'Uniform scale \u00D7 rotate', tag: '\u00D71.4, 45\u00B0',
    title: 'Uniform scale commutes with rotation', exTag: 'commutative',
    body: 'Scaling uniformly (same factor in every direction) is isotropic. Rotation doesn&apos;t care which way you scale first.',
    insight: 'Uniform scaling is kI for a scalar k. Constant multiples of the identity commute with every matrix.',
  },
  // ---- Non-commutative ----
  shearRotate: {
    A: () => Math2D.rotMatrix(45),
    B: () => [[1, 0.5], [0, 1]],
    group: 'noncommute', label: 'Shear \u00D7 rotate', tag: 'default',
    title: 'Shear, then rotate', exTag: 'non-commutative',
    body: 'First <span class="mc-bc">B</span> shears horizontally, then <span class="mc-ac">A</span> rotates 45&deg;. The reverse order produces a different shape.',
    insight: 'Shears and rotations deform the plane in incompatible ways. AB and BA differ both in the final position of every vector and in the matrix entries.',
  },
  twoPerpShears: {
    A: () => [[1, 0.6], [0, 1]],
    B: () => [[1, 0], [0.6, 1]],
    group: 'noncommute', label: 'Two perp shears', tag: 'x, y',
    title: 'Perpendicular shears do not commute', exTag: 'non-commutative',
    body: 'Shear horizontally, then vertically &mdash; or the reverse. The composite picks up a rotational component, and the order determines which way it twists.',
    insight: 'Composing two shears can produce a transformation that isn&apos;t a shear at all. AB and BA both have det = 1 but different off-diagonal entries.',
  },
  projectRotate: {
    A: () => Math2D.rotMatrix(45),
    B: () => [[1, 0], [0, 0]],
    group: 'noncommute', label: 'Project \u00D7 rotate', tag: 'drastic',
    title: 'Project, then rotate', exTag: 'non-commutative \u00B7 rank 1',
    body: 'Projecting onto the x-axis first collapses everything to a line. Rotating that line gives a tilted line. Reverse the order and the collapsed line points elsewhere.',
    insight: 'Composing a rank-1 matrix with anything stays rank 1, but the image line depends entirely on order.',
  },
  reflectRotate: {
    A: () => Math2D.rotMatrix(45),
    B: () => [[0, 1], [1, 0]],
    group: 'noncommute', label: 'Reflect \u00D7 rotate', tag: 'swap axes',
    title: 'Reflect, then rotate', exTag: 'non-commutative',
    body: 'A reflection followed by a rotation isn&apos;t the same as a rotation followed by the same reflection. Orientation handedness gets shuffled.',
    insight: 'Reflections have det = \u22121, rotations have det = +1. Composing always gives det = \u00B11, but the resulting transformation differs depending on order.',
  },
  // ---- Reveals ----
  twoReflections: {
    A: () => [[0, 1], [1, 0]],
    B: () => [[1, 0], [0, -1]],
    group: 'reveal', label: 'Two reflections', tag: '= rotation',
    title: 'Two reflections compose to a rotation', exTag: 'reveal',
    body: 'Reflect across the x-axis, then across y = x. The result is a rotation by 90&deg;. Two reflections always compose to a rotation by twice the angle between the mirror lines.',
    insight: 'Every rotation can be written as a product of two reflections. This is a foundational theorem of plane geometry.',
  },
  shearInverse: {
    A: () => [[1, -0.6], [0, 1]],
    B: () => [[1, 0.6], [0, 1]],
    group: 'reveal', label: 'Shear \u00D7 inverse', tag: '= I',
    title: 'A matrix times its inverse is the identity', exTag: 'reveal',
    body: 'Shear by k = 0.6, then shear back by k = \u22120.6. They cancel exactly: the composition is the identity, and every vector returns to itself.',
    insight: 'For any invertible matrix M, M&middot;M\u207B\u00B9 = I. The undoing is built into matrix arithmetic.',
  },
};

const SCENARIO_GROUPS = [
  { key: 'commute',    label: 'Commutative',    tag: 'AB = BA',  tagClass: 'commute' },
  { key: 'noncommute', label: 'Non-commutative', tag: 'AB &ne; BA', tagClass: 'noncommute' },
  { key: 'reveal',     label: 'Reveals',         tag: 'surprise', tagClass: 'reveal' },
];

const DEFAULT_LAYERS = {
  grid: true,
  unitSquare: true,
  ghosts: true,
  primaryPath: true,
  altPath: true,
  labels: true,
};

const ALL_LAYER_DEFS = [
  { key: 'grid', label: 'grid' },
  { key: 'unitSquare', label: 'unit sq' },
  { key: 'ghosts', label: 'ghosts' },
  { key: 'primaryPath', label: 'AB path', swatchPair: ['#0d9488', '#7c3aed'] },
  { key: 'altPath', label: 'BA path' },
  { key: 'labels', label: 'labels' },
];

const DEFAULT_LEDE = {
  crumb: 'Linear Algebra<span class="mc-dot">&middot;</span>Matrix composition',
  body: 'Two matrices stacked. <span class="mc-ac">A</span> applied to (<span class="mc-bc">B</span> applied to <span class="mc-vc">v</span>) equals the single matrix <span class="mc-ac">A</span><span class="mc-bc">B</span> applied to <span class="mc-vc">v</span>. That&apos;s why matrix multiplication is defined the way it is.',
};

// =====================================================================
//  SECTION 4  ::  Hooks
// =====================================================================
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function useCompositionState(options = {}) {
  const {
    initialA,
    initialB,
    initialV = [1.5, 1],
    initialPreset = 'shearRotate',
    initialMode = 'AB',
    initialView = 'trail',
    initialLayers = DEFAULT_LAYERS,
    initialT = 0,
    scenarios = SCENARIOS,
    duration = 2400,
    step = 0.1,
  } = options;

  // Resolve initial A, B from preset if not explicitly given
  const presetAB = (() => {
    const sc = scenarios[initialPreset];
    if (!sc) return { A: [[1, 0], [0, 1]], B: [[1, 0], [0, 1]] };
    return { A: sc.A(), B: sc.B() };
  })();
  const startA = initialA || presetAB.A;
  const startB = initialB || presetAB.B;

  const [A, setAState] = useState(startA);
  const [B, setBState] = useState(startB);
  const [v, setVState] = useState(initialV);
  const [preset, setPresetState] = useState(initialPreset);
  const [mode, setModeState] = useState(initialMode);
  const [view, setViewState] = useState(initialView);
  const [layers, setLayers] = useState(initialLayers);

  // animation
  const [t, setTState] = useState(initialT);
  const [playing, setPlayingState] = useState(false);
  const rafRef = useRef(null);
  const tRef = useRef(initialT);
  useEffect(() => { tRef.current = t; }, [t]);

  const cancelAnim = useCallback(() => {
    if (rafRef.current !== null) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
    setPlayingState(false);
  }, []);

  const animateTo = useCallback((target, dur = duration) => {
    if (rafRef.current !== null) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
    const tStart = tRef.current;
    const startTime = typeof performance !== 'undefined' ? performance.now() : Date.now();
    setPlayingState(true);
    const frame = (now) => {
      const elapsed = now - startTime;
      const localT = Math.min(1, elapsed / dur);
      const eased = easeInOutCubic(localT);
      const newT = tStart + (target - tStart) * eased;
      tRef.current = newT;
      setTState(newT);
      if (localT < 1) rafRef.current = requestAnimationFrame(frame);
      else { rafRef.current = null; setPlayingState(false); }
    };
    rafRef.current = requestAnimationFrame(frame);
  }, [duration]);

  const resetT = useCallback(() => {
    cancelAnim();
    tRef.current = 0;
    setTState(0);
  }, [cancelAnim]);

  const setT = useCallback((newT) => {
    cancelAnim();
    tRef.current = newT;
    setTState(newT);
  }, [cancelAnim]);

  const play = useCallback(() => {
    if (tRef.current >= 0.999) {
      tRef.current = 0;
      setTState(0);
      requestAnimationFrame(() => animateTo(1, duration));
    } else {
      animateTo(1, duration);
    }
  }, [animateTo, duration]);

  const pause = cancelAnim;

  const stepFwd = useCallback(() => {
    cancelAnim();
    const next = Math.min(1, Math.floor(tRef.current / step + 1) * step);
    tRef.current = next; setTState(next);
  }, [cancelAnim, step]);

  const stepBack = useCallback(() => {
    cancelAnim();
    const prev = Math.max(0, Math.ceil(tRef.current / step - 1) * step);
    tRef.current = prev; setTState(prev);
  }, [cancelAnim, step]);

  useEffect(() => () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current); }, []);

  // ----- matrix setters -----
  const setA = useCallback((M) => {
    setAState(M);
    setPresetState(null);
    resetT();
  }, [resetT]);

  const setB = useCallback((M) => {
    setBState(M);
    setPresetState(null);
    resetT();
  }, [resetT]);

  // setV does NOT clear preset (preset specifies matrices, not v); does reset t
  const setV = useCallback((newV) => {
    setVState(newV);
    resetT();
  }, [resetT]);

  const selectPreset = useCallback((key) => {
    const sc = scenarios[key];
    if (!sc) return;
    setAState(sc.A());
    setBState(sc.B());
    setPresetState(key);
    resetT();
  }, [scenarios, resetT]);

  // Mode change: reset t and auto-play to show new composition unfolding
  const setMode = useCallback((newMode) => {
    setModeState(newMode);
    tRef.current = 0;
    setTState(0);
    requestAnimationFrame(() => animateTo(1, duration));
  }, [animateTo, duration]);

  // View change: purely visual, no state reset
  const setView = useCallback((newView) => {
    setViewState(newView);
  }, []);

  // Auto-play on preset change
  useEffect(() => {
    if (!preset) return;
    tRef.current = 0;
    setTState(0);
    requestAnimationFrame(() => animateTo(1, duration));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preset]);

  return {
    A, B, v, t, playing, mode, view, preset, layers,
    setA, setB, setV, selectPreset, setMode, setView, setLayers,
    play, pause, stepFwd, stepBack, setT, resetT, animateTo,
    step, duration,
  };
}

// =====================================================================
//  SECTION 5  ::  Component CSS
// =====================================================================
const COMPONENT_CSS = `
.mc-root{
  --bg:#f7f9fc;--surface:#fff;--surface-2:#f3f6fa;
  --border:#dde3ec;--border-strong:#c4cdda;
  --text:#0f1729;--text-soft:#243049;--text-dim:#4a5673;--text-faint:#7989a3;
  --accent:#2b5bd7;--accent-hover:#1e46b3;--accent-soft:#eaf0fb;--accent-line:#c8d6f1;
  --v:#ea580c;
  --aMat:#7c3aed;--aMatSoft:rgba(124,58,237,.10);--aMatLine:rgba(124,58,237,.40);
  --bMat:#0d9488;--bMatSoft:rgba(13,148,136,.10);--bMatLine:rgba(13,148,136,.40);
  --final:#6366f1;
  --diff:#dc2626;--diffSoft:rgba(220,38,38,.10);
  --grid:#e2e8f0;--grid-axis:#94a3b8;
  --font-display:'Fraunces',Georgia,serif;
  --font-body:'IBM Plex Sans',-apple-system,BlinkMacSystemFont,sans-serif;
  --font-mono:'JetBrains Mono',Menlo,monospace;
  --shadow-card:0 1px 0 rgba(15,23,41,.04),0 1px 2px rgba(15,23,41,.04);
  --radius:6px;
  color:var(--text);font-family:var(--font-body);line-height:1.5;
  -webkit-font-smoothing:antialiased;background:var(--bg);
}
.mc-root *{box-sizing:border-box}

.mc-app{display:grid;grid-template-rows:auto auto auto;gap:10px;padding:14px 24px;max-width:1340px;margin:0 auto;background:var(--bg)}

.mc-lede{display:flex;align-items:baseline;gap:14px;font-size:14px;color:var(--text-dim);line-height:1.45}
.mc-crumb{font-family:var(--font-mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--text-faint);white-space:nowrap}
.mc-crumb .mc-dot{color:var(--accent);margin:0 6px}
.mc-lede .mc-ac{color:var(--aMat);font-weight:500}
.mc-lede .mc-bc{color:var(--bMat);font-weight:500}
.mc-lede .mc-vc{color:var(--v);font-weight:500}

/* Top bar */
.mc-topbar{display:flex;justify-content:space-between;align-items:center;gap:18px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow-card);padding:9px 16px;flex-wrap:wrap}
.mc-composition-formula{font-family:var(--font-display);font-style:italic;font-size:17px;color:var(--text);display:flex;align-items:center;gap:8px}
.mc-composition-formula .mc-ac{color:var(--aMat);font-weight:600}
.mc-composition-formula .mc-bc{color:var(--bMat);font-weight:600}
.mc-composition-formula .mc-vc{color:var(--v);font-weight:600}
.mc-composition-formula .mc-eq{color:var(--text-faint);margin:0 4px;font-style:normal;font-family:var(--font-mono);font-size:13px}
.mc-toggles{display:flex;align-items:center;gap:10px}
.mc-toggle-label{font-family:var(--font-mono);font-size:9px;letter-spacing:.16em;text-transform:uppercase;color:var(--text-faint);font-weight:600;padding:0 6px 0 4px}
.mc-mode-toggle{display:flex;gap:0;background:var(--surface-2);border:1px solid var(--border);border-radius:5px;padding:2px;align-items:center}
.mc-mode-btn{padding:5px 12px;font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.06em;color:var(--text-dim);background:transparent;border:none;border-radius:3px;cursor:pointer;display:inline-flex;align-items:center;gap:5px;transition:all .12s}
.mc-mode-btn:hover{color:var(--text)}
.mc-mode-btn.mc-active{background:#fff;color:var(--accent);box-shadow:0 1px 2px rgba(15,23,41,.06)}
.mc-mode-btn .mc-icon{width:11px;height:11px;fill:currentColor;display:inline-block}
.mc-view-toggle .mc-mode-btn.mc-active{color:var(--final)}

/* Main layouts (Trail vs Stages) */
.mc-main-trail{display:grid;gap:14px;align-items:start;grid-template-columns:230px 620px minmax(360px,1fr)}
.mc-main-stages{display:grid;gap:14px;align-items:start;grid-template-columns:230px 1fr}
@media (max-width:1240px){
  .mc-main-trail,.mc-main-stages{grid-template-columns:1fr}
}
.mc-scen-col,.mc-canvas-col,.mc-info-col,.mc-stages-col{display:flex;flex-direction:column;gap:10px;min-width:0}

.mc-canvases-row{display:grid;grid-template-columns:1fr 50px 1fr 50px 1fr;gap:0;align-items:stretch}
.mc-canvas-cell{display:flex;flex-direction:column;gap:6px;min-width:0}
.mc-canvas-caption{display:flex;justify-content:space-between;align-items:baseline;gap:8px;font-family:var(--font-mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--text-faint);padding:0 2px}
.mc-canvas-caption .mc-lbl{font-family:var(--font-display);font-style:italic;font-size:16px;font-weight:500;text-transform:none;letter-spacing:0}
.mc-canvas-caption.mc-input .mc-lbl{color:var(--v)}
.mc-canvas-caption.mc-inter .mc-lbl{color:var(--bMat)}
.mc-canvas-caption.mc-inter.mc-altmode .mc-lbl{color:var(--aMat)}
.mc-canvas-caption.mc-final .mc-lbl{color:var(--final)}
.mc-canvas-caption .mc-stage-tag{font-weight:600;letter-spacing:.14em}
.mc-canvas-caption.mc-input .mc-stage-tag{color:var(--v)}
.mc-canvas-caption.mc-inter .mc-stage-tag{color:var(--bMat)}
.mc-canvas-caption.mc-inter.mc-altmode .mc-stage-tag{color:var(--aMat)}
.mc-canvas-caption.mc-final .mc-stage-tag{color:var(--final)}

.mc-chevron{align-self:center;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;padding:0 4px}
.mc-chevron .mc-arrow-svg{width:34px;height:34px}
.mc-chevron .mc-matrix-pill{margin-top:3px;font-family:var(--font-display);font-style:italic;font-size:15px;font-weight:600;padding:2px 8px;border-radius:4px;background:#fff;border:1.5px solid currentColor;color:currentColor}
.mc-chevron.mc-b-step{color:var(--bMat)}
.mc-chevron.mc-a-step{color:var(--aMat)}
.mc-chevron .mc-step-label{margin-top:2px;font-family:var(--font-mono);font-size:8px;letter-spacing:.10em;text-transform:uppercase;color:var(--text-faint);font-weight:600}

.mc-canvas{width:100%;aspect-ratio:1/1;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow-card);display:block;touch-action:none}
.mc-canvas.mc-inter{border-color:var(--bMatLine)}
.mc-canvas.mc-inter.mc-altmode{border-color:var(--aMatLine)}
.mc-canvas.mc-final{border-color:rgba(99,102,241,.4)}
.mc-canvas.mc-dragging{cursor:grabbing}

.mc-readouts-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px}
.mc-readouts-1{display:grid;grid-template-columns:1fr;gap:8px}
.mc-readout{background:var(--surface);border:1px solid var(--border);border-left:3px solid currentColor;padding:6px 10px;border-radius:5px;font-family:var(--font-mono);font-size:12px;font-weight:600;display:flex;gap:6px;align-items:baseline;min-width:0}
.mc-readout .mc-lab{font-family:var(--font-display);font-style:italic;font-size:14px;font-weight:500;flex-shrink:0}
.mc-readout .mc-eq{color:var(--text-faint);font-weight:400}
.mc-readout .mc-val{color:var(--text);font-weight:500;font-variant-numeric:tabular-nums;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.mc-readout .mc-stage-mini{font-family:var(--font-mono);font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:var(--text-faint);margin-left:auto}
.mc-readout.mc-v-r{color:var(--v)}
.mc-readout.mc-bv-r{color:var(--bMat)}
.mc-readout.mc-bv-r.mc-altmode{color:var(--aMat)}
.mc-readout.mc-abv-r{color:var(--final)}

/* Animation card */
.mc-anim-card{padding:12px 14px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow-card)}
.mc-anim-head{font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--text-faint);margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap}
.mc-badge{color:var(--accent);margin-right:6px;font-weight:600}
.mc-anim-head .mc-t-readout{font-weight:500;letter-spacing:.05em;text-transform:none;color:var(--accent);font-family:var(--font-mono)}
.mc-anim-head .mc-phase-tag{font-family:var(--font-mono);font-size:10px;font-weight:600;letter-spacing:.05em;padding:2px 8px;border-radius:3px;text-transform:none;margin-left:8px}
.mc-anim-head .mc-phase-tag.mc-b-phase{background:var(--bMatSoft);color:var(--bMat);border:1px solid var(--bMatLine)}
.mc-anim-head .mc-phase-tag.mc-a-phase{background:var(--aMatSoft);color:var(--aMat);border:1px solid var(--aMatLine)}

.mc-anim-progress{height:8px;background:var(--surface-2);border-radius:4px;position:relative;margin-bottom:10px;overflow:visible}
.mc-anim-progress .mc-fill{position:absolute;left:0;top:0;bottom:0;border-radius:4px;background:linear-gradient(90deg,var(--bMat) 0%,var(--bMat) 50%,var(--aMat) 50%,var(--aMat) 100%);transition:width .08s linear}
.mc-anim-progress .mc-fill.mc-flipped{background:linear-gradient(90deg,var(--aMat) 0%,var(--aMat) 50%,var(--bMat) 50%,var(--bMat) 100%)}
.mc-anim-progress .mc-half-tick{position:absolute;left:50%;top:-4px;bottom:-4px;width:2px;background:var(--text-soft);border-radius:1px;transform:translateX(-50%)}
.mc-anim-progress .mc-half-label{position:absolute;top:-17px;left:50%;font-family:var(--font-mono);font-size:9px;font-weight:700;color:var(--text-soft);letter-spacing:.04em;transform:translateX(-50%);white-space:nowrap}
.mc-anim-progress .mc-phase-band{position:absolute;top:-20px;font-family:var(--font-mono);font-size:9px;font-weight:600;letter-spacing:.1em;text-transform:uppercase}
.mc-anim-progress .mc-phase-band.mc-left{left:25%;transform:translateX(-50%)}
.mc-anim-progress .mc-phase-band.mc-right{left:75%;transform:translateX(-50%)}

.mc-anim-controls{display:flex;gap:6px;align-items:center}
.mc-ctrl-btn{background:var(--surface-2);border:1px solid var(--border);width:30px;height:28px;border-radius:4px;cursor:pointer;color:var(--text-dim);font-weight:600;display:inline-flex;align-items:center;justify-content:center;padding:0;transition:all .12s}
.mc-ctrl-btn:hover{background:var(--accent-soft);color:var(--accent);border-color:var(--accent-line)}
.mc-ctrl-btn:disabled{opacity:.4;cursor:not-allowed}
.mc-ctrl-btn svg{width:11px;height:11px;fill:currentColor}
.mc-ctrl-btn.mc-primary{background:var(--accent);border-color:var(--accent);color:#fff;width:auto;padding:0 14px;font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;font-family:var(--font-mono)}
.mc-ctrl-btn.mc-primary:hover{background:var(--accent-hover);border-color:var(--accent-hover);color:#fff}
.mc-slider{flex:1;-webkit-appearance:none;appearance:none;height:5px;border-radius:3px;outline:none;cursor:pointer;min-width:60px;margin:0 6px}
.mc-slider::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:var(--accent);border:2px solid #fff;cursor:pointer;box-shadow:0 0 0 1px var(--accent)}
.mc-slider::-moz-range-thumb{width:12px;height:12px;border-radius:50%;background:var(--accent);border:2px solid #fff;cursor:pointer}
.mc-t-label{font-family:var(--font-mono);font-size:11px;color:var(--text-faint);font-variant-numeric:tabular-nums;min-width:64px;text-align:right}
.mc-t-label .mc-val{color:var(--text);font-weight:600}

/* Cards */
.mc-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow-card);padding:12px 14px}
.mc-card h2{font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--text-faint);margin:0 0 10px;display:flex;align-items:center;justify-content:space-between;gap:6px}
.mc-card h2 .mc-note{font-weight:500;letter-spacing:.04em;text-transform:none;font-size:11px;color:var(--text-dim);font-family:var(--font-mono)}

/* Scenarios */
.mc-scen-card h2{margin-bottom:8px}
.mc-scen-sections{display:flex;flex-direction:column;gap:13px}
.mc-scen-section-label{display:flex;align-items:center;justify-content:space-between;gap:6px;font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--text-dim);margin-bottom:6px}
.mc-tag{padding:2px 7px;border-radius:3px;font-size:9.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;border:1px solid transparent;white-space:nowrap}
.mc-tag.commute{background:var(--accent-soft);color:var(--accent);border-color:var(--accent-line)}
.mc-tag.noncommute{background:var(--diffSoft);color:var(--diff);border-color:rgba(220,38,38,.4)}
.mc-tag.reveal{background:rgba(99,102,241,.15);color:var(--final);border-color:rgba(99,102,241,.4)}
.mc-preset-grid{display:flex;flex-direction:column;gap:4px}
.mc-preset-btn{background:var(--surface-2);border:1px solid var(--border);border-left:3px solid var(--border-strong);padding:6px 10px;font-family:var(--font-body);font-size:12.5px;color:var(--text-soft);font-weight:500;text-align:left;cursor:pointer;border-radius:4px;transition:all .12s;display:flex;justify-content:space-between;align-items:baseline;gap:6px}
.mc-preset-btn:hover{background:var(--accent-soft);border-color:var(--accent-line);color:var(--accent-hover)}
.mc-preset-btn.mc-active{background:var(--accent-soft);border-color:var(--accent-line);color:var(--accent-hover);font-weight:600;border-left-color:var(--accent)}
.mc-preset-btn.commute{border-left-color:var(--accent)}
.mc-preset-btn.noncommute{border-left-color:var(--diff)}
.mc-preset-btn.reveal{border-left-color:var(--final)}
.mc-preset-btn .mc-ptag{font-family:var(--font-mono);font-size:9.5px;color:var(--text-faint)}
.mc-preset-btn.mc-active .mc-ptag{color:var(--accent)}

/* Explanation */
.mc-ex-header{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--border)}
.mc-ex-header h3{font-family:var(--font-display);font-weight:500;font-size:19px;color:var(--text);margin:0;letter-spacing:-.01em;line-height:1.2}
.mc-ex-tag{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--text-faint);white-space:nowrap}
.mc-ex-body{color:var(--text-soft);font-size:13.5px;line-height:1.55;margin:0 0 10px}
.mc-ex-body .mc-ac{color:var(--aMat);font-weight:500}
.mc-ex-body .mc-bc{color:var(--bMat);font-weight:500}
.mc-ex-body .mc-vc{color:var(--v);font-weight:500}
.mc-ex-body .mc-dc{color:var(--diff);font-weight:500}
.mc-ex-body code,.mc-ex-block code{font-family:var(--font-mono);font-size:11.5px;background:var(--accent-soft);color:var(--accent-hover);padding:1px 4px;border-radius:3px}
.mc-ex-block{margin-top:10px;padding-top:10px;border-top:1px dashed var(--border)}
.mc-ex-block-label{font-family:var(--font-mono);font-size:9.5px;letter-spacing:.15em;text-transform:uppercase;color:var(--accent);margin-bottom:4px}
.mc-ex-block p{margin:0;font-size:12.5px;color:var(--text-soft);line-height:1.55}
.mc-ex-block .mc-ac{color:var(--aMat);font-weight:500}
.mc-ex-block .mc-bc{color:var(--bMat);font-weight:500}
.mc-ex-block .mc-dc{color:var(--diff);font-weight:500}

/* Chips */
.mc-chips-strip{display:flex;flex-wrap:wrap;gap:2px;padding:4px 8px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow-card)}
.mc-chip{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;font-family:var(--font-mono);font-size:11px;letter-spacing:.04em;color:var(--text-faint);background:transparent;border:1px solid transparent;border-radius:4px;cursor:pointer;user-select:none;transition:all .12s}
.mc-chip input{width:12px;height:12px;margin:0;accent-color:var(--accent);cursor:pointer}
.mc-chip:hover,.mc-chip:has(input:checked){color:var(--text);background:var(--accent-soft)}
.mc-chip .mc-sw{display:inline-block;width:11px;height:3px;border-radius:1px}
.mc-chip .mc-sw-pair{display:inline-flex;width:14px;height:3px;border-radius:1px;overflow:hidden}
.mc-chip .mc-sw-pair span{flex:1;display:block}

/* Matrices editor */
.mc-mat-block{display:flex;align-items:center;gap:10px;padding:5px 0;justify-content:center}
.mc-mat-block + .mc-mat-block{border-top:1px dashed var(--border);margin-top:4px;padding-top:8px}
.mc-mat-label{font-family:var(--font-display);font-style:italic;font-size:20px;font-weight:600;min-width:22px}
.mc-mat-label.mc-a-lbl{color:var(--aMat)}
.mc-mat-label.mc-b-lbl{color:var(--bMat)}
.mc-mat-label.mc-ab-lbl{color:var(--final)}
.mc-mat-eq{font-family:var(--font-mono);font-size:13px;color:var(--text-faint)}
.mc-mat-bracket{display:grid;grid-template-columns:auto auto;gap:3px 8px;padding:5px 11px;position:relative;font-family:var(--font-mono);font-size:12px}
.mc-mat-bracket::before,.mc-mat-bracket::after{content:'';position:absolute;top:3px;bottom:3px;width:5px;border:1.3px solid var(--text-dim)}
.mc-mat-bracket::before{left:0;border-right:none;border-radius:2px 0 0 2px}
.mc-mat-bracket::after{right:0;border-left:none;border-radius:0 2px 2px 0}
.mc-mat-bracket input{width:54px;padding:4px 5px;background:var(--surface-2);border:1px solid var(--border);border-radius:3px;color:var(--text);font-family:var(--font-mono);font-size:12px;text-align:center;outline:none;-moz-appearance:textfield}
.mc-mat-bracket input::-webkit-outer-spin-button,.mc-mat-bracket input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}
.mc-mat-bracket input:focus{border-color:var(--accent);background:var(--accent-soft)}
.mc-mat-bracket.mc-readonly{background:rgba(99,102,241,.10);border-radius:3px}
.mc-mat-bracket.mc-readonly span{display:block;text-align:center;color:var(--final);font-weight:600;font-variant-numeric:tabular-nums;min-width:48px;padding:2px 4px}
.mc-compose-divider{display:flex;align-items:center;justify-content:center;gap:10px;padding:8px 0 4px;border-top:1px solid var(--border);margin-top:4px}
.mc-compose-divider .mc-lbl-sm{font-family:var(--font-mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);font-weight:600}

/* Live card */
.mc-live-section + .mc-live-section{margin-top:10px;padding-top:10px;border-top:1px dashed var(--border)}
.mc-live-section-head{font-family:var(--font-mono);font-size:9.5px;letter-spacing:.15em;text-transform:uppercase;color:var(--text-faint);margin-bottom:6px}
.mc-matrix-side-by-side{display:grid;grid-template-columns:auto auto;gap:6px 12px;align-items:center;justify-content:center;padding:2px 0}
.mc-matrix-side-by-side .mc-mat-label{font-size:14px;min-width:18px}
.mc-live-mat{display:grid;grid-template-columns:auto auto;gap:3px 8px;padding:5px 10px;position:relative;font-family:var(--font-mono);font-size:11px}
.mc-live-mat::before,.mc-live-mat::after{content:'';position:absolute;top:3px;bottom:3px;width:5px;border:1.3px solid var(--text-dim)}
.mc-live-mat::before{left:0;border-right:none;border-radius:2px 0 0 2px}
.mc-live-mat::after{right:0;border-left:none;border-radius:0 2px 2px 0}
.mc-live-mat span{text-align:right;min-width:38px;color:var(--text);font-variant-numeric:tabular-nums}
.mc-live-mat.mc-active span{color:var(--final);font-weight:600}
.mc-live-mat.mc-inactive span{color:var(--text-dim);font-weight:500}
.mc-endpoint-row{display:grid;grid-template-columns:auto 1fr;gap:4px 12px;align-items:baseline;margin-top:8px}
.mc-ep-key{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--text-faint)}
.mc-ep-val{font-family:var(--font-mono);font-size:12px;color:var(--text);font-weight:500;text-align:right;font-variant-numeric:tabular-nums}
.mc-ep-val.mc-active{color:var(--final);font-weight:600}
.mc-ep-val.mc-inactive{color:var(--text-dim)}
.mc-ep-val.mc-diff{color:var(--diff);font-weight:600}
.mc-commute-strip{margin-top:10px;padding:8px 11px;border-radius:5px;display:flex;align-items:center;gap:8px;font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.04em;background:var(--diffSoft);border:1px solid rgba(220,38,38,.4);color:var(--diff)}
.mc-commute-strip.mc-commute{background:var(--accent-soft);border-color:var(--accent-line);color:var(--accent-hover)}
.mc-commute-strip .mc-pill{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;color:#fff;font-weight:700;font-size:11px;background:var(--diff)}
.mc-commute-strip.mc-commute .mc-pill{background:var(--accent)}

/* Stages info row */
.mc-stages-info-row{display:grid;grid-template-columns:300px 1fr 320px;gap:12px;align-items:start}
@media (max-width:1000px){.mc-stages-info-row{grid-template-columns:1fr}}

/* SVG primitives */
.mc-grid-line{stroke:var(--grid);stroke-width:1;fill:none}
.mc-grid-axis{stroke:var(--grid-axis);stroke-width:1.3;fill:none}
.mc-unit-square{stroke-width:1.5;fill:rgba(148,163,184,0.12);stroke:#94a3b8}
.mc-unit-square.mc-b-square{fill:rgba(13,148,136,0.16);stroke:#0d9488}
.mc-unit-square.mc-a-square{fill:rgba(124,58,237,0.16);stroke:#7c3aed}
.mc-unit-square.mc-final-square{fill:rgba(99,102,241,0.18);stroke:#6366f1}
.mc-origin-dot{fill:var(--text-soft)}
.mc-v-handle{cursor:grab}
.mc-v-handle:active{cursor:grabbing}
.mc-v-label{font-family:var(--font-display);font-style:italic;font-size:16px;font-weight:600}
.mc-ghost-label{font-family:var(--font-mono);font-size:10px;font-weight:600}
`;

// =====================================================================
//  SECTION 6  ::  Sub-components
// =====================================================================

// --- CellInput ---
function CellInput({ value, onCommit, step = 0.1 }) {
  const [str, setStr] = useState(String(value));
  useEffect(() => { setStr(String(value)); }, [value]);
  return (
    <input
      type="number"
      step={step}
      value={str}
      onChange={(e) => {
        const next = e.target.value;
        setStr(next);
        if (next === '' || next === '-' || next === '.') return;
        const val = parseFloat(next);
        if (!Number.isNaN(val)) onCommit(val);
      }}
      onBlur={() => {
        const val = parseFloat(str);
        if (Number.isNaN(val)) setStr(String(value));
        else if (val !== value) onCommit(val);
      }}
    />
  );
}

// --- TopBar ---
function TopBar({ mode = 'AB', view = 'trail', onModeChange = () => {}, onViewChange = () => {} }) {
  const formula = mode === 'AB'
    ? (<>
        <span className="mc-ac">A</span>(<span className="mc-bc">B</span><span className="mc-vc">v</span>)
        <span className="mc-eq">=</span>
        (<span className="mc-ac">A</span><span className="mc-bc">B</span>)<span className="mc-vc">v</span>
      </>)
    : (<>
        <span className="mc-bc">B</span>(<span className="mc-ac">A</span><span className="mc-vc">v</span>)
        <span className="mc-eq">=</span>
        (<span className="mc-bc">B</span><span className="mc-ac">A</span>)<span className="mc-vc">v</span>
      </>);
  return (
    <div className="mc-topbar">
      <div className="mc-composition-formula">{formula}</div>
      <div className="mc-toggles">
        <div className="mc-mode-toggle">
          <span className="mc-toggle-label">order</span>
          <button type="button" className={'mc-mode-btn' + (mode === 'AB' ? ' mc-active' : '')} onClick={() => onModeChange('AB')}>AB</button>
          <button type="button" className={'mc-mode-btn' + (mode === 'BA' ? ' mc-active' : '')} onClick={() => onModeChange('BA')}>BA</button>
        </div>
        <div className="mc-mode-toggle mc-view-toggle">
          <span className="mc-toggle-label">view</span>
          <button type="button" className={'mc-mode-btn' + (view === 'stages' ? ' mc-active' : '')} onClick={() => onViewChange('stages')}>
            <svg className="mc-icon" viewBox="0 0 16 16"><rect x="1" y="3" width="3.5" height="10" rx="0.5"/><rect x="6.25" y="3" width="3.5" height="10" rx="0.5"/><rect x="11.5" y="3" width="3.5" height="10" rx="0.5"/></svg>
            Stages
          </button>
          <button type="button" className={'mc-mode-btn' + (view === 'trail' ? ' mc-active' : '')} onClick={() => onViewChange('trail')}>
            <svg className="mc-icon" viewBox="0 0 16 16"><path d="M 2 12 L 6 7 L 10 9 L 14 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="2" cy="12" r="1.5"/><circle cx="6" cy="7" r="1.5"/><circle cx="10" cy="9" r="1.5"/><circle cx="14" cy="4" r="1.5"/></svg>
            Trail
          </button>
        </div>
      </div>
    </div>
  );
}

// --- TrailCanvas ---
function TrailCanvas({
  A = [[1, 0], [0, 1]],
  B = [[1, 0], [0, 1]],
  v = [1.5, 1],
  t = 0,
  mode = 'AB',
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

  const first = mode === 'AB' ? B : A;
  const second = mode === 'AB' ? A : B;
  const firstColor = mode === 'AB' ? '#0d9488' : '#7c3aed';
  const secondColor = mode === 'AB' ? '#7c3aed' : '#0d9488';
  const otherFirst = mode === 'AB' ? A : B;
  const otherSecond = mode === 'AB' ? B : A;
  const otherFirstColor = mode === 'AB' ? '#7c3aed' : '#0d9488';
  const otherSecondColor = mode === 'AB' ? '#0d9488' : '#7c3aed';

  const { Mcomposed } = phaseMatrices(t, first, second);

  const vMid = Math2D.apply(first, v);
  const vEnd = Math2D.apply(Math2D.mul(second, first), v);
  const vNow = Math2D.apply(Mcomposed, v);
  const vAltMid = Math2D.apply(otherFirst, v);
  const vAltEnd = Math2D.apply(Math2D.mul(otherSecond, otherFirst), v);

  const milestoneLabel = mode === 'AB' ? 'Bv' : 'Av';
  const endLabel = mode === 'AB' ? 'ABv' : 'BAv';
  const altMidLabel = mode === 'AB' ? 'Av' : 'Bv';
  const altEndLabel = mode === 'AB' ? 'BAv' : 'ABv';

  let inner = '';
  // morphed grid + unit square at current composed transform
  if (layers.grid) {
    inner += SVGRender.morphedGroup(Mcomposed, geom, SVGRender.gridIdentity(geom));
  }
  if (layers.unitSquare) {
    inner += SVGRender.unitSquare(Mcomposed, geom, 'mc-unit-square mc-final-square');
  }

  // alt path (drawn behind primary)
  if (layers.altPath) {
    inner += SVGRender.altPath(v, vAltMid, vAltEnd, otherFirstColor, otherSecondColor, geom);
    if (layers.ghosts) {
      inner += SVGRender.ghost(vAltMid, otherFirstColor, geom, {
        radius: 5, opacity: 0.7, labelOpacity: 0.8,
        label: layers.labels ? altMidLabel : null, labelOffset: [-12, -4],
      });
      inner += SVGRender.ghost(vAltEnd, otherSecondColor, geom, {
        radius: 5.5, opacity: 0.75, labelOpacity: 0.85,
        label: layers.labels ? altEndLabel : null, labelOffset: [14, -4],
      });
    }
  }

  // primary path
  if (layers.primaryPath) {
    inner += SVGRender.trailPath(t, v, vMid, vEnd, vNow, firstColor, secondColor, geom);
  }

  // ghosts on primary path
  if (layers.ghosts) {
    inner += SVGRender.ghost(v, '#ea580c', geom, {
      radius: 6, opacity: 1, labelOpacity: 1,
      label: layers.labels ? 'v\u2080' : null, labelOffset: [0, 18],
    });
    inner += SVGRender.ghost(vMid, firstColor, geom, {
      solid: t >= 0.5, withInnerDot: t >= 0.5, radius: 6.5,
      label: layers.labels ? milestoneLabel : null, labelOffset: [8, 16],
    });
    inner += SVGRender.ghost(vEnd, secondColor, geom, {
      solid: t >= 0.999, withInnerDot: t >= 0.999, opacity: t >= 0.999 ? 1 : 0.6, labelOpacity: t >= 0.999 ? 1 : 0.75,
      label: layers.labels ? endLabel : null, labelOffset: [0, -8],
    });
  }

  inner += SVGRender.origin(geom);

  // current v arrow (draggable handle)
  inner += SVGRender.vectorArrow(vNow, '#ea580c', layers.labels ? 'v' : null, 'mc-arr-v', geom, false);

  // hit circle for drag (rendered as React JSX outside the innerHTML)
  const tx = SVGRender._proj(geom);
  const [vnx, vny] = tx(vNow);

  const canvasClass = 'mc-canvas' + (isDragging ? ' mc-dragging' : '') + (className ? ' ' + className : '');

  return (
    <svg
      ref={svgRef}
      className={canvasClass}
      style={style}
      viewBox={`0 0 ${geom.size} ${geom.size}`}
      xmlns="http://www.w3.org/2000/svg"
      onPointerDown={draggable ? onPointerDown : undefined}
      onPointerMove={draggable ? onPointerMove : undefined}
      onPointerUp={draggable ? onPointerUp : undefined}
      onPointerCancel={draggable ? onPointerUp : undefined}
    >
      <defs>
        <marker id="mc-arr-v" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
          <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#ea580c" />
        </marker>
      </defs>
      <g dangerouslySetInnerHTML={{ __html: inner }} />
      {draggable && onVChange && (
        <circle data-handle="v" cx={vnx} cy={vny} r={14} fill="transparent" style={{ cursor: 'grab' }} />
      )}
    </svg>
  );
}

// --- StageCanvas: one of three canvases in Stages view ---
function StageCanvas({
  stage = 'input',           // 'input' | 'inter' | 'final'
  M = [[1, 0], [0, 1]],      // partial matrix applied to grid/square/v
  v = [1.5, 1],
  layers = DEFAULT_LAYERS,
  geom = DEFAULT_GEOM,
  squareClass = 'mc-unit-square',
  onVChange,                  // only on input stage
  draggable = false,
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

  const vTransformed = Math2D.apply(M, v);

  let inner = '';
  if (layers.grid) {
    inner += SVGRender.morphedGroup(M, geom, SVGRender.gridIdentity(geom));
  }
  if (layers.unitSquare) {
    inner += SVGRender.unitSquare(M, geom, squareClass);
  }
  inner += SVGRender.origin(geom);

  // ghost of identity-position v (only on inter/final to show "where v came from")
  if (stage !== 'input' && layers.ghosts) {
    const tx = SVGRender._proj(geom);
    const [vx, vy] = tx(v);
    const [tx2, ty2] = tx(vTransformed);
    inner += `<circle cx="${vx.toFixed(1)}" cy="${vy.toFixed(1)}" r="5" fill="none" stroke="#ea580c" stroke-width="1.6" stroke-dasharray="2 2" opacity="0.55"/>`;
    inner += `<line x1="${vx.toFixed(1)}" y1="${vy.toFixed(1)}" x2="${tx2.toFixed(1)}" y2="${ty2.toFixed(1)}" stroke="#ea580c" stroke-width="1.2" stroke-dasharray="2 2" opacity="0.5"/>`;
  }

  // arrow at transformed position
  let labelColor = '#ea580c';
  let labelText = 'v';
  if (stage === 'inter') { labelColor = squareClass.includes('mc-b-square') ? '#0d9488' : '#7c3aed'; labelText = squareClass.includes('mc-b-square') ? 'Bv' : 'Av'; }
  if (stage === 'final') { labelColor = '#6366f1'; labelText = squareClass.includes('mc-b-square') || true ? 'ABv' : 'BAv'; }
  // (labelText for final is set externally; ignore this approximation when caller wants different)

  inner += SVGRender.vectorArrow(vTransformed, '#ea580c', layers.labels ? labelText : null, 'mc-arr-v-stage', geom, !!onVChange);

  const tx = SVGRender._proj(geom);
  const [vnx, vny] = tx(vTransformed);

  const canvasClass = 'mc-canvas'
    + (stage === 'inter' ? ' mc-inter' : '')
    + (stage === 'final' ? ' mc-final' : '')
    + (isDragging ? ' mc-dragging' : '')
    + (className ? ' ' + className : '');

  return (
    <svg
      ref={svgRef}
      className={canvasClass}
      style={style}
      viewBox={`0 0 ${geom.size} ${geom.size}`}
      xmlns="http://www.w3.org/2000/svg"
      onPointerDown={draggable ? onPointerDown : undefined}
      onPointerMove={draggable ? onPointerMove : undefined}
      onPointerUp={draggable ? onPointerUp : undefined}
      onPointerCancel={draggable ? onPointerUp : undefined}
    >
      <defs>
        <marker id="mc-arr-v-stage" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
          <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#ea580c" />
        </marker>
      </defs>
      <g dangerouslySetInnerHTML={{ __html: inner }} />
      {draggable && onVChange && (
        <circle data-handle="v" cx={vnx} cy={vny} r={14} fill="transparent" style={{ cursor: 'grab' }} />
      )}
    </svg>
  );
}

// --- Chevron ---
function Chevron({ matrix = 'B', step: stepNum = 1, kind = 'b' }) {
  return (
    <div className={'mc-chevron ' + (kind === 'a' ? 'mc-a-step' : 'mc-b-step')}>
      <svg className="mc-arrow-svg" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
        <path d="M 8 21 L 30 21 M 22 13 L 30 21 L 22 29" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="mc-matrix-pill">{matrix}</span>
      <span className="mc-step-label">step {stepNum}</span>
    </div>
  );
}

// --- CanvasCaption (Stages) ---
function CanvasCaption({ kind = 'input', label = 'v', stageTag = 'domain', altMode = false }) {
  return (
    <div className={'mc-canvas-caption mc-' + kind + (altMode ? ' mc-altmode' : '')}>
      <span className="mc-lbl">{label}</span>
      <span className="mc-stage-tag">{stageTag}</span>
    </div>
  );
}

// --- CanvasReadout ---
function CanvasReadout({ kind = 'v-r', label = 'v', value = '(0, 0)', stageTag, altMode = false }) {
  return (
    <div className={'mc-readout mc-' + kind + (altMode ? ' mc-altmode' : '')}>
      <span className="mc-lab">{label}</span>
      <span className="mc-eq">=</span>
      <span className="mc-val">{value}</span>
      {stageTag && <span className="mc-stage-mini">{stageTag}</span>}
    </div>
  );
}

// --- AnimationCard ---
const ICON_RESET = <svg viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/></svg>;
const ICON_BACK  = <svg viewBox="0 0 24 24"><path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z"/></svg>;
const ICON_FWD   = <svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6h2v12h-2V6z"/></svg>;

function AnimationCard({
  t = 0, playing = false, mode = 'AB',
  onPlay = () => {}, onPause = () => {},
  onStepFwd = () => {}, onStepBack = () => {},
  onReset = () => {}, onScrub = () => {},
  title,
}) {
  const pct = (Math.max(0, Math.min(1, t)) * 100).toFixed(2);
  const sliderBg = `linear-gradient(to right, var(--accent) 0%, var(--accent) ${pct}%, var(--border) ${pct}%, var(--border) 100%)`;
  const inPhase2 = t > 0.5;
  const firstColorLabel = mode === 'AB' ? 'B' : 'A';
  const secondColorLabel = mode === 'AB' ? 'A' : 'B';
  const phaseClass = inPhase2
    ? (mode === 'AB' ? 'mc-a-phase' : 'mc-b-phase')
    : (mode === 'AB' ? 'mc-b-phase' : 'mc-a-phase');
  const phaseText = inPhase2 ? `phase 2 \u00B7 applying ${secondColorLabel}` : `phase 1 \u00B7 applying ${firstColorLabel}`;
  const fillClass = mode === 'AB' ? 'mc-fill' : 'mc-fill mc-flipped';
  const defaultTitle = `Composition I \u2192 ${firstColorLabel} \u2192 ${mode === 'AB' ? 'AB' : 'BA'}`;
  return (
    <div className="mc-anim-card">
      <div className="mc-anim-head">
        <span><span className="mc-badge">&#9656;</span>{title || defaultTitle}</span>
        <span className="mc-t-readout">
          t = {t.toFixed(3)}
          <span className={'mc-phase-tag ' + phaseClass}>{phaseText}</span>
        </span>
      </div>
      <div className="mc-anim-progress">
        <span className={'mc-phase-band mc-left ' + (mode === 'AB' ? 'mc-b-phase-band' : 'mc-a-phase-band')} style={{ color: mode === 'AB' ? 'var(--bMat)' : 'var(--aMat)' }}>apply {firstColorLabel}</span>
        <span className={'mc-phase-band mc-right ' + (mode === 'AB' ? 'mc-a-phase-band' : 'mc-b-phase-band')} style={{ color: mode === 'AB' ? 'var(--aMat)' : 'var(--bMat)' }}>apply {secondColorLabel}</span>
        <div className={fillClass} style={{ width: pct + '%' }} />
        <div className="mc-half-tick"></div>
        <div className="mc-half-label">M = {firstColorLabel}</div>
      </div>
      <div className="mc-anim-controls">
        <button className="mc-ctrl-btn" onClick={onReset} title="Reset" type="button">{ICON_RESET}</button>
        <button className="mc-ctrl-btn" onClick={onStepBack} disabled={t <= 1e-4} title="Step back" type="button">{ICON_BACK}</button>
        <button className="mc-ctrl-btn mc-primary" onClick={playing ? onPause : onPlay} title="Play / Pause" type="button">
          {playing ? 'Pause' : 'Play'}
        </button>
        <button className="mc-ctrl-btn" onClick={onStepFwd} disabled={t >= 1 - 1e-4} title="Step forward" type="button">{ICON_FWD}</button>
        <input type="range" min={0} max={1} step={0.001} value={t}
          className="mc-slider" style={{ background: sliderBg }}
          onChange={(e) => onScrub(parseFloat(e.target.value))} />
        <span className="mc-t-label">t = <span className="mc-val">{t.toFixed(3)}</span></span>
      </div>
    </div>
  );
}

// --- MatricesCard ---
function MatricesCard({ A = [[1, 0], [0, 1]], B = [[1, 0], [0, 1]], mode = 'AB', onAChange = () => {}, onBChange = () => {}, step = 0.1 }) {
  const composed = mode === 'AB' ? Math2D.mul(A, B) : Math2D.mul(B, A);
  const composedLabel = mode === 'AB' ? 'AB' : 'BA';
  return (
    <div className="mc-card">
      <h2><span><span className="mc-badge">A</span>Matrices</span><span className="mc-note">click to edit</span></h2>
      <div className="mc-mat-block">
        <span className="mc-mat-label mc-a-lbl">A</span>
        <span className="mc-mat-eq">=</span>
        <div className="mc-mat-bracket">
          {[[0, 0], [0, 1], [1, 0], [1, 1]].map(([r, c]) => (
            <CellInput key={`A${r}${c}`} value={A[r][c]} step={step} onCommit={(val) => {
              const next = A.map((row) => row.slice());
              next[r][c] = val;
              onAChange(next);
            }} />
          ))}
        </div>
      </div>
      <div className="mc-mat-block">
        <span className="mc-mat-label mc-b-lbl">B</span>
        <span className="mc-mat-eq">=</span>
        <div className="mc-mat-bracket">
          {[[0, 0], [0, 1], [1, 0], [1, 1]].map(([r, c]) => (
            <CellInput key={`B${r}${c}`} value={B[r][c]} step={step} onCommit={(val) => {
              const next = B.map((row) => row.slice());
              next[r][c] = val;
              onBChange(next);
            }} />
          ))}
        </div>
      </div>
      <div className="mc-compose-divider"><span className="mc-lbl-sm">auto-computed</span></div>
      <div className="mc-mat-block">
        <span className="mc-mat-label mc-ab-lbl">{composedLabel}</span>
        <span className="mc-mat-eq">=</span>
        <div className="mc-mat-bracket mc-readonly">
          <span>{Math2D.fmt(composed[0][0])}</span>
          <span>{Math2D.fmt(composed[0][1])}</span>
          <span>{Math2D.fmt(composed[1][0])}</span>
          <span>{Math2D.fmt(composed[1][1])}</span>
        </div>
      </div>
    </div>
  );
}

// --- LiveCard ---
function LiveCard({ A = [[1, 0], [0, 1]], B = [[1, 0], [0, 1]], v = [1.5, 1], mode = 'AB' }) {
  const AB = Math2D.mul(A, B);
  const BA = Math2D.mul(B, A);
  const ABv = Math2D.apply(AB, v);
  const BAv = Math2D.apply(BA, v);
  const diffMag = Math.hypot(ABv[0] - BAv[0], ABv[1] - BAv[1]);
  const commutes = Math2D.matEquals(AB, BA);
  const activeMat = mode === 'AB' ? AB : BA;
  const inactiveMat = mode === 'AB' ? BA : AB;
  const activeVec = mode === 'AB' ? ABv : BAv;
  const inactiveVec = mode === 'AB' ? BAv : ABv;
  const activeLabel = mode === 'AB' ? 'AB' : 'BA';
  const inactiveLabel = mode === 'AB' ? 'BA' : 'AB';

  return (
    <div className="mc-card">
      <h2><span><span className="mc-badge">04</span>Live</span><span className="mc-note">AB vs BA</span></h2>
      <div className="mc-live-section">
        <div className="mc-live-section-head">matrices side by side</div>
        <div className="mc-matrix-side-by-side">
          <span className={'mc-mat-label ' + (mode === 'AB' ? 'mc-ab-lbl' : 'mc-ab-lbl')}>{activeLabel}</span>
          <div className="mc-live-mat mc-active">
            <span>{Math2D.fmt(activeMat[0][0])}</span><span>{Math2D.fmt(activeMat[0][1])}</span>
            <span>{Math2D.fmt(activeMat[1][0])}</span><span>{Math2D.fmt(activeMat[1][1])}</span>
          </div>
          <span className="mc-mat-label" style={{ color: 'var(--text-dim)', fontStyle: 'italic' }}>{inactiveLabel}</span>
          <div className="mc-live-mat mc-inactive">
            <span>{Math2D.fmt(inactiveMat[0][0])}</span><span>{Math2D.fmt(inactiveMat[0][1])}</span>
            <span>{Math2D.fmt(inactiveMat[1][0])}</span><span>{Math2D.fmt(inactiveMat[1][1])}</span>
          </div>
        </div>
      </div>
      <div className="mc-live-section">
        <div className="mc-live-section-head">endpoint comparison</div>
        <div className="mc-endpoint-row">
          <span className="mc-ep-key">{activeLabel}v</span><span className="mc-ep-val mc-active">{Math2D.fmtPair(activeVec)}</span>
          <span className="mc-ep-key">{inactiveLabel}v</span><span className="mc-ep-val mc-inactive">{Math2D.fmtPair(inactiveVec)}</span>
          <span className="mc-ep-key">|{activeLabel}v &minus; {inactiveLabel}v|</span>
          <span className={'mc-ep-val ' + (commutes ? '' : 'mc-diff')}>{Math2D.fmt(diffMag)}</span>
        </div>
      </div>
      <div className={'mc-commute-strip' + (commutes ? ' mc-commute' : '')}>
        <span className="mc-pill">{commutes ? '=' : '\u2260'}</span>
        <span>{commutes ? 'A and B commute' : 'A and B do NOT commute'}</span>
      </div>
    </div>
  );
}

// --- ExplanationCard ---
function ExplanationCard({ preset, scenarios = SCENARIOS, override }) {
  let sc = preset ? scenarios[preset] : null;
  if (override && override.byPreset && override.byPreset[preset]) sc = override.byPreset[preset];
  if (!sc) {
    sc = {
      title: 'Custom matrices',
      exTag: 'custom',
      body: 'You&apos;ve edited <span class="mc-ac">A</span> or <span class="mc-bc">B</span> directly. Scrub through <em>t</em> to see how the composition unfolds.',
      insight: 'The half-tick at t = 0.5 marks the boundary: the first matrix is fully applied; the second begins.',
    };
  }
  return (
    <div className="mc-card">
      <div className="mc-ex-header">
        <h3 dangerouslySetInnerHTML={{ __html: sc.title }} />
        <span className="mc-ex-tag" dangerouslySetInnerHTML={{ __html: sc.exTag || '' }} />
      </div>
      <p className="mc-ex-body" dangerouslySetInnerHTML={{ __html: sc.body }} />
      {sc.insight && (
        <div className="mc-ex-block">
          <div className="mc-ex-block-label">Insight</div>
          <p dangerouslySetInnerHTML={{ __html: sc.insight }} />
        </div>
      )}
    </div>
  );
}

// --- ScenariosPanel ---
function ScenariosPanel({
  scenarios = SCENARIOS,
  groups = SCENARIO_GROUPS,
  preset = null,
  onSelect = () => {},
  visibleScenarios,
  badge = '03',
  title = 'Scenarios',
}) {
  const visible = visibleScenarios
    ? Object.fromEntries(visibleScenarios.map((k) => [k, scenarios[k]]).filter(([, s]) => s))
    : scenarios;
  return (
    <div className="mc-card mc-scen-card">
      <h2><span><span className="mc-badge">{badge}</span>{title}</span></h2>
      <div className="mc-scen-sections">
        {groups.map((g) => {
          const items = Object.entries(visible).filter(([, sc]) => sc.group === g.key);
          if (!items.length) return null;
          return (
            <div className="mc-scen-section" key={g.key}>
              <div className="mc-scen-section-label">
                <span>{g.label}</span>
                <span className={'mc-tag ' + g.tagClass} dangerouslySetInnerHTML={{ __html: g.tag }} />
              </div>
              <div className="mc-preset-grid">
                {items.map(([key, sc]) => (
                  <button
                    key={key}
                    type="button"
                    className={'mc-preset-btn ' + g.tagClass + (preset === key ? ' mc-active' : '')}
                    onClick={() => onSelect(key)}
                  >
                    <span dangerouslySetInnerHTML={{ __html: sc.label }} />
                    <span className="mc-ptag" dangerouslySetInnerHTML={{ __html: sc.tag }} />
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

// --- LayerChips ---
function LayerChips({ layers = {}, onChange = () => {}, enabledLayers, layerDefs = ALL_LAYER_DEFS }) {
  const defs = enabledLayers ? layerDefs.filter((d) => enabledLayers.includes(d.key)) : layerDefs;
  return (
    <div className="mc-chips-strip">
      {defs.map((d) => (
        <label key={d.key} className="mc-chip">
          <input
            type="checkbox"
            checked={!!layers[d.key]}
            onChange={(e) => onChange({ ...layers, [d.key]: e.target.checked })}
          />
          {d.label}
          {d.swatch && <span className="mc-sw" style={{ background: d.swatch }} />}
          {d.swatchPair && (
            <span className="mc-sw-pair">
              <span style={{ background: d.swatchPair[0] }} />
              <span style={{ background: d.swatchPair[1] }} />
            </span>
          )}
        </label>
      ))}
    </div>
  );
}

// =====================================================================
//  SECTION 7  ::  Core + Wrapper
// =====================================================================
export function MatrixCompositionCore({
  initialA, initialB, initialV, initialPreset, initialMode, initialView, initialLayers, initialT,
  scenarios, duration, step,
  children,
}) {
  const state = useCompositionState({
    initialA, initialB, initialV, initialPreset, initialMode, initialView, initialLayers, initialT,
    scenarios, duration, step,
  });
  if (typeof children === 'function') return children({ state });
  return null;
}

export default function MatrixComposition({
  lede,
  ledeCrumb = DEFAULT_LEDE.crumb,
  ledeBody  = DEFAULT_LEDE.body,
  initialA, initialB, initialV, initialPreset, initialMode, initialView, initialLayers, initialT,
  scenarios, duration, step,
  topBar, canvas, stagesCanvases, explanation, liveCard, scenariosPanel,
  animation, matricesCard, layerChips,
  visibleScenarios, enabledLayers, explanationOverride,
  layout,
  className, style,
}) {
  return (
    <MatrixCompositionCore
      initialA={initialA} initialB={initialB} initialV={initialV}
      initialPreset={initialPreset} initialMode={initialMode} initialView={initialView}
      initialLayers={initialLayers} initialT={initialT}
      scenarios={scenarios} duration={duration} step={step}
    >
      {({ state }) => {
        const sx = scenarios || SCENARIOS;
        // Derived: first / second based on mode
        const first = state.mode === 'AB' ? state.B : state.A;
        const second = state.mode === 'AB' ? state.A : state.B;
        const firstLabel = state.mode === 'AB' ? 'B' : 'A';
        const secondLabel = state.mode === 'AB' ? 'A' : 'B';
        const { Mfirst, Mcomposed } = phaseMatrices(state.t, first, second);
        const vMid = Math2D.apply(first, state.v);
        const vEnd = Math2D.apply(Math2D.mul(second, first), state.v);
        const vNow = Math2D.apply(Mcomposed, state.v);
        const milestoneLabel = state.mode === 'AB' ? 'Bv' : 'Av';
        const endLabel = state.mode === 'AB' ? 'ABv' : 'BAv';

        const renderLede = () => {
          if (lede !== undefined) return lede;
          if (ledeCrumb === null && ledeBody === null) return null;
          return (
            <div className="mc-lede">
              {ledeCrumb && <span className="mc-crumb" dangerouslySetInnerHTML={{ __html: ledeCrumb }} />}
              {ledeBody && <span dangerouslySetInnerHTML={{ __html: ledeBody }} />}
            </div>
          );
        };

        const slotTopBar = topBar !== undefined ? topBar : (
          <TopBar mode={state.mode} view={state.view} onModeChange={state.setMode} onViewChange={state.setView} />
        );
        const slotScenarios = scenariosPanel !== undefined ? scenariosPanel : (
          <ScenariosPanel
            scenarios={sx} preset={state.preset} onSelect={state.selectPreset}
            visibleScenarios={visibleScenarios}
          />
        );
        const slotExplanation = explanation !== undefined ? explanation : (
          <ExplanationCard preset={state.preset} scenarios={sx} override={explanationOverride} />
        );
        const slotLayerChips = layerChips !== undefined ? layerChips : (
          <LayerChips layers={state.layers} onChange={state.setLayers} enabledLayers={enabledLayers} />
        );
        const slotMatrices = matricesCard !== undefined ? matricesCard : (
          <MatricesCard A={state.A} B={state.B} mode={state.mode} onAChange={state.setA} onBChange={state.setB} />
        );
        const slotLive = liveCard !== undefined ? liveCard : (
          <LiveCard A={state.A} B={state.B} v={state.v} mode={state.mode} />
        );
        const slotAnimation = animation !== undefined ? animation : (
          <AnimationCard
            t={state.t} playing={state.playing} mode={state.mode}
            onPlay={state.play} onPause={state.pause}
            onStepFwd={state.stepFwd} onStepBack={state.stepBack}
            onReset={state.resetT} onScrub={state.setT}
          />
        );

        // Layout escape hatch
        if (typeof layout === 'function') {
          return (
            <div className={'mc-root ' + (className || '')} style={style}>
              <style dangerouslySetInnerHTML={{ __html: COMPONENT_CSS }} />
              {layout({ state })}
            </div>
          );
        }

        // ----- TRAIL VIEW -----
        if (state.view === 'trail') {
          const slotCanvas = canvas !== undefined ? canvas : (
            <TrailCanvas
              A={state.A} B={state.B} v={state.v} t={state.t} mode={state.mode}
              layers={state.layers} onVChange={state.setV}
            />
          );
          return (
            <div className={'mc-root ' + (className || '')} style={style}>
              <style dangerouslySetInnerHTML={{ __html: COMPONENT_CSS }} />
              <div className="mc-app">
                {renderLede()}
                {slotTopBar}
                <main className="mc-main-trail">
                  <aside className="mc-scen-col">{slotScenarios}</aside>
                  <section className="mc-canvas-col">
                    {slotCanvas}
                    <div className="mc-readouts-3">
                      <CanvasReadout kind="v-r" label="v\u2080" value={Math2D.fmtPair(state.v)} stageTag="start" />
                      <CanvasReadout kind="bv-r" label={milestoneLabel} value={Math2D.fmtPair(vMid)} stageTag={'after ' + firstLabel} altMode={state.mode === 'BA'} />
                      <CanvasReadout kind="abv-r" label={endLabel} value={Math2D.fmtPair(vEnd)} stageTag={'after ' + secondLabel + firstLabel} />
                    </div>
                    {slotAnimation}
                  </section>
                  <section className="mc-info-col">
                    {slotExplanation}
                    {slotLayerChips}
                    {slotMatrices}
                    {slotLive}
                  </section>
                </main>
              </div>
            </div>
          );
        }

        // ----- STAGES VIEW -----
        const interSquareCls = state.mode === 'AB' ? 'mc-unit-square mc-b-square' : 'mc-unit-square mc-a-square';
        const chevron1Kind = state.mode === 'AB' ? 'b' : 'a';
        const chevron2Kind = state.mode === 'AB' ? 'a' : 'b';

        // build the 3 stage canvases
        const inputCanvas = (
          <StageCanvas
            stage="input" M={[[1, 0], [0, 1]]} v={state.v}
            layers={state.layers} squareClass="mc-unit-square"
            onVChange={state.setV} draggable={true}
          />
        );
        const interCanvas = (
          <StageCanvas
            stage="inter" M={Mfirst} v={state.v}
            layers={state.layers} squareClass={interSquareCls}
          />
        );
        const finalCanvas = (
          <StageCanvas
            stage="final" M={Mcomposed} v={state.v}
            layers={state.layers} squareClass="mc-unit-square mc-final-square"
          />
        );

        const slotStages = stagesCanvases !== undefined ? stagesCanvases : (
          <div className="mc-canvases-row">
            <div className="mc-canvas-cell">
              <CanvasCaption kind="input" label="v" stageTag="domain" />
              {inputCanvas}
              <CanvasReadout kind="v-r" label="v" value={Math2D.fmtPair(state.v)} />
            </div>
            <Chevron matrix={firstLabel} step={1} kind={chevron1Kind} />
            <div className="mc-canvas-cell">
              <CanvasCaption kind="inter" label={milestoneLabel} stageTag={'after ' + firstLabel} altMode={state.mode === 'BA'} />
              {interCanvas}
              <CanvasReadout kind="bv-r" label={milestoneLabel} value={Math2D.fmtPair(vMid)} altMode={state.mode === 'BA'} />
            </div>
            <Chevron matrix={secondLabel} step={2} kind={chevron2Kind} />
            <div className="mc-canvas-cell">
              <CanvasCaption kind="final" label={endLabel} stageTag={'after ' + secondLabel + firstLabel} />
              {finalCanvas}
              <CanvasReadout kind="abv-r" label={endLabel} value={Math2D.fmtPair(vNow)} />
            </div>
          </div>
        );

        return (
          <div className={'mc-root ' + (className || '')} style={style}>
            <style dangerouslySetInnerHTML={{ __html: COMPONENT_CSS }} />
            <div className="mc-app">
              {renderLede()}
              {slotTopBar}
              <main className="mc-main-stages">
                <aside className="mc-scen-col">{slotScenarios}</aside>
                <section className="mc-stages-col">
                  {slotStages}
                  {slotAnimation}
                  <div className="mc-stages-info-row">
                    {slotMatrices}
                    {slotExplanation}
                    {slotLive}
                  </div>
                  {slotLayerChips}
                </section>
              </main>
            </div>
          </div>
        );
      }}
    </MatrixCompositionCore>
  );
}

export {
  TrailCanvas, StageCanvas, Chevron, TopBar, CanvasCaption, CanvasReadout,
  AnimationCard, MatricesCard, LiveCard, ExplanationCard, ScenariosPanel, LayerChips,
  CellInput,
  useCompositionState, phaseMatrices,
  Math2D, SVGRender,
  SCENARIOS, SCENARIO_GROUPS, DEFAULT_LAYERS, DEFAULT_GEOM, ALL_LAYER_DEFS,
};