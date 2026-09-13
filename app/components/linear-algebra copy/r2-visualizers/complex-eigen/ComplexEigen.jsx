'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

// =====================================================================
//  ComplexEigen v1 — complex eigenvalues of a 2×2 matrix as rotation-scaling
//
//  A real 2×2 matrix with complex eigenvalues λ = a ± bi has no real
//  eigenvector. What it does instead is rotate and scale, in a skewed
//  coordinate system: A = P C P⁻¹ with C = [[a, −b], [b, a]] = r·R(θ),
//  r = |λ| = √(det A), θ = arg λ, and P = [Re v | Im v] for a complex
//  eigenvector v of λ = a − bi. The orbit x₀, Ax₀, A²x₀, … spirals
//  outward (r > 1), inward (r < 1) or runs round an ellipse (r = 1),
//  and the ellipse is the image under P of a circle.
//
//  Self-contained: own Math2D, SVGRender, hooks, CSS (ce- prefix) and
//  sub-components. Exports the pieces the frozen-diagram module needs.
// =====================================================================

// =====================================================================
//  SECTION 1  ::  Math2D
// =====================================================================
const Math2D = {
  apply: (M, p) => [M[0][0] * p[0] + M[0][1] * p[1], M[1][0] * p[0] + M[1][1] * p[1]],
  mul: (X, Y) => [
    [X[0][0] * Y[0][0] + X[0][1] * Y[1][0], X[0][0] * Y[0][1] + X[0][1] * Y[1][1]],
    [X[1][0] * Y[0][0] + X[1][1] * Y[1][0], X[1][0] * Y[0][1] + X[1][1] * Y[1][1]],
  ],
  det: (M) => M[0][0] * M[1][1] - M[0][1] * M[1][0],
  trace: (M) => M[0][0] + M[1][1],
  inv(M) {
    const d = Math2D.det(M);
    if (Math.abs(d) < 1e-12) return null;
    return [[M[1][1] / d, -M[0][1] / d], [-M[1][0] / d, M[0][0] / d]];
  },
  rot: (theta) => [[Math.cos(theta), -Math.sin(theta)], [Math.sin(theta), Math.cos(theta)]],

  // eigenvalues of a 2×2: { complex, a, b } with λ = a ± bi when complex
  eig(M) {
    const tr = Math2D.trace(M), dt = Math2D.det(M);
    const disc = tr * tr - 4 * dt;
    if (disc < -1e-12) return { complex: true, a: tr / 2, b: Math.sqrt(-disc) / 2, disc };
    const s = Math.sqrt(Math.max(0, disc));
    return { complex: false, l1: (tr + s) / 2, l2: (tr - s) / 2, disc };
  },

  // rotation-scaling form A = P C P⁻¹ (only when the eigenvalues are complex)
  decompose(M) {
    const e = Math2D.eig(M);
    if (!e.complex) return { complex: false, eig: e };
    const { a, b } = e;
    const p = M[0][0], q = M[0][1], s = M[1][0], t = M[1][1];
    // eigenvector for λ = a − bi: (q, λ − p) if q ≠ 0, else (λ − t, s)
    let re, im;
    if (Math.abs(q) > 1e-9) { re = [q, a - p]; im = [0, -b]; }
    else { re = [a - t, s]; im = [-b, 0]; }
    // scale so the real column points right (cosmetic; any complex multiple of v works)
    if (re[0] < 0 || (Math.abs(re[0]) < 1e-9 && re[1] < 0)) { re = [-re[0], -re[1]]; im = [-im[0], -im[1]]; }
    const P = [[re[0], im[0]], [re[1], im[1]]];
    const Pinv = Math2D.inv(P);
    const r = Math.hypot(a, b);
    const theta = Math.atan2(b, a);
    const C = [[a, -b], [b, a]];
    return { complex: true, eig: e, a, b, r, theta, C, P, Pinv, re, im };
  },

  // A^k for real k via P (r^k R(kθ)) P⁻¹; falls back to integer powers otherwise
  powK(M, k, dec) {
    if (dec && dec.complex) {
      const Ck = Math2D.rot(k * dec.theta).map((row) => row.map((x) => x * Math.pow(dec.r, k)));
      return Math2D.mul(Math2D.mul(dec.P, Ck), dec.Pinv);
    }
    const n = Math.max(0, Math.round(k));
    let R = [[1, 0], [0, 1]];
    for (let i = 0; i < n; i++) R = Math2D.mul(R, M);
    return R;
  },

  orbit(M, x0, N) {
    const pts = [x0];
    let x = x0;
    for (let i = 0; i < N; i++) { x = Math2D.apply(M, x); pts.push(x); }
    return pts;
  },

  fmt(x, p = 2) {
    if (!Number.isFinite(x)) return '—';
    if (Math.abs(x) < 1e-9) return '0';
    const r = Math.round(x * Math.pow(10, p)) / Math.pow(10, p);
    return (r.toFixed(p).replace(/\.?0+$/, '') || '0').replace(/-/g, '−');
  },
  fmtPair: (p) => `(${Math2D.fmt(p[0])}, ${Math2D.fmt(p[1])})`,
  deg: (t) => t * 180 / Math.PI,
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

  grid(geom) {
    const tx = SVGRender._proj(geom);
    const R = geom.gridR;
    let s = '';
    for (let i = -R; i <= R; i++) {
      const cls = i === 0 ? 'ce-grid-axis' : 'ce-grid-line';
      const [x1, y1] = tx([-R, i]); const [x2, y2] = tx([R, i]);
      s += `<line class="${cls}" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
      const [x3, y3] = tx([i, -R]); const [x4, y4] = tx([i, R]);
      s += `<line class="${cls}" x1="${x3.toFixed(2)}" y1="${y3.toFixed(2)}" x2="${x4.toFixed(2)}" y2="${y4.toFixed(2)}"/>`;
    }
    return s;
  },

  // the columns of P as dashed lines through the origin: the skewed "axes"
  axes(dec, geom, showLabels) {
    if (!dec.complex) return '';
    const tx = SVGRender._proj(geom);
    const R = geom.gridR * 1.5;
    let s = '';
    [['re', dec.re, 'Re v'], ['im', dec.im, 'Im v']].forEach(([key, d, label]) => {
      const len = Math.hypot(d[0], d[1]);
      if (len < 1e-9) return;
      const u = [d[0] / len, d[1] / len];
      const [x1, y1] = tx([-R * u[0], -R * u[1]]); const [x2, y2] = tx([R * u[0], R * u[1]]);
      s += `<line class="ce-axis-line ce-axis-${key}" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
      // the column itself as a short arrow
      const [ox, oy] = tx([0, 0]); const [ex, ey] = tx(d);
      s += `<line class="ce-axis-vec ce-axis-${key}" x1="${ox}" y1="${oy}" x2="${ex.toFixed(2)}" y2="${ey.toFixed(2)}" marker-end="url(#ce-arr-${key})"/>`;
      if (showLabels) {
        const [lx, ly] = tx([d[0] * 1.18 + 0.15, d[1] * 1.18 + 0.15]);
        s += `<text class="ce-axis-label ce-axis-${key}" x="${lx.toFixed(2)}" y="${ly.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">${label}</text>`;
      }
    });
    return s;
  },

  // the ellipse through x0: P applied to the circle of radius |P⁻¹ x0|
  ellipse(dec, x0, geom) {
    if (!dec.complex || !dec.Pinv) return '';
    const tx = SVGRender._proj(geom);
    const y = Math2D.apply(dec.Pinv, x0);
    const rho = Math.hypot(y[0], y[1]);
    if (rho < 1e-6) return '';
    const N = 90;
    const pts = [];
    for (let i = 0; i <= N; i++) {
      const phi = (2 * Math.PI * i) / N;
      const p = Math2D.apply(dec.P, [rho * Math.cos(phi), rho * Math.sin(phi)]);
      pts.push(tx(p).map((v) => v.toFixed(2)).join(','));
    }
    return `<polyline class="ce-ellipse" points="${pts.join(' ')}"/>`;
  },

  // the continuous spiral x(k) = A^k x0 for real k in [0, K]
  spiral(M, dec, x0, K, geom) {
    const tx = SVGRender._proj(geom);
    if (!dec.complex || K <= 0) return '';
    const sub = 16;
    const n = Math.max(1, Math.round(K * sub));
    const pts = [];
    for (let i = 0; i <= n; i++) {
      const k = (K * i) / n;
      const p = Math2D.apply(Math2D.powK(M, k, dec), x0);
      if (!Number.isFinite(p[0]) || !Number.isFinite(p[1]) || Math.abs(p[0]) > 60 || Math.abs(p[1]) > 60) break;
      pts.push(tx(p).map((v) => v.toFixed(2)).join(','));
    }
    return `<polyline class="ce-spiral" points="${pts.join(' ')}"/>`;
  },

  // the discrete orbit: dots at A^k x0, joined by a faint polyline
  orbit(points, upTo, geom, showLabels) {
    const tx = SVGRender._proj(geom);
    const vis = points.slice(0, Math.max(1, Math.min(points.length, upTo + 1)));
    let s = '';
    const joined = vis.map((p) => tx(p).map((v) => v.toFixed(2)).join(',')).join(' ');
    if (vis.length > 1) s += `<polyline class="ce-orbit-path" points="${joined}"/>`;
    vis.forEach((p, k) => {
      const [x, y] = tx(p);
      s += `<circle class="ce-orbit-dot${k === 0 ? ' ce-orbit-start' : ''}" cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${k === 0 ? 4 : 3.2}"/>`;
      if (showLabels && k > 0 && k <= 9) {
        s += `<text class="ce-orbit-label" x="${(x + 7).toFixed(2)}" y="${(y - 7).toFixed(2)}">${k}</text>`;
      }
    });
    return s;
  },

  origin(geom) {
    const tx = SVGRender._proj(geom);
    const [ox, oy] = tx([0, 0]);
    return `<circle class="ce-origin-dot" cx="${ox}" cy="${oy}" r="2.5"/>`;
  },

  vArrow(v, geom, showLabel) {
    const tx = SVGRender._proj(geom);
    const [ox, oy] = tx([0, 0]);
    const [tipX, tipY] = tx(v);
    let s = `<line class="ce-v-shaft" x1="${ox}" y1="${oy}" x2="${tipX.toFixed(2)}" y2="${tipY.toFixed(2)}" marker-end="url(#ce-arr-v)"/>`;
    s += `<circle class="ce-v-handle" cx="${tipX.toFixed(2)}" cy="${tipY.toFixed(2)}" r="7"/>`;
    if (showLabel) {
      const [px, py] = tx([v[0] + (v[0] >= 0 ? 0.34 : -0.34), v[1] + (v[1] >= 0 ? 0.34 : -0.34)]);
      s += `<text class="ce-v-label" x="${px.toFixed(2)}" y="${py.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">x₀</text>`;
    }
    return s;
  },

  kArrow(w, geom, showLabel, label) {
    const tx = SVGRender._proj(geom);
    const [ox, oy] = tx([0, 0]);
    const [tipX, tipY] = tx(w);
    let s = `<line class="ce-k-shaft" x1="${ox}" y1="${oy}" x2="${tipX.toFixed(2)}" y2="${tipY.toFixed(2)}" marker-end="url(#ce-arr-k)"/>`;
    s += `<circle class="ce-k-tip" cx="${tipX.toFixed(2)}" cy="${tipY.toFixed(2)}" r="6"/>`;
    if (showLabel) {
      const [px, py] = tx([w[0] + (w[0] >= 0 ? 0.4 : -0.4), w[1] + (w[1] >= 0 ? 0.4 : -0.4)]);
      s += `<text class="ce-k-label" x="${px.toFixed(2)}" y="${py.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">${label}</text>`;
    }
    return s;
  },
};

// =====================================================================
//  SECTION 3  ::  Scenarios
// =====================================================================
const SCENARIOS = {
  rotate90: {
    label: 'Rotate 90°', A: [[0, -1], [1, 0]], group: 'circle', tag: 'λ = ±i',
    title: 'A quarter turn', exTag: 'r = 1 · θ = 90°',
    body: 'The plain rotation. <code>λ = ±i</code>, so <span class="ce-r">r = |λ| = 1</span> and <span class="ce-th">θ = 90°</span>. Here <code>P = I</code>: the rotation-scaling form is the matrix itself, and the orbit of <span class="ce-v">x₀</span> walks round a circle, four steps to a lap.',
    insight: 'Every real 2×2 matrix with complex eigenvalues is a rotation-scaling seen through a change of basis. The rotation is the simplest case, where the basis is the standard one.',
  },
  rotate45: {
    label: 'Rotate 45°', A: [[0.7071, -0.7071], [0.7071, 0.7071]], group: 'circle', tag: 'θ = 45°',
    title: 'An eighth of a turn', exTag: 'r = 1 · θ = 45°',
    body: '<code>λ = cos 45° ± i sin 45°</code>. The angle of the eigenvalue <em>is</em> the angle of rotation: eight steps close the circle. The trace, <code>2 cos θ = 1.414</code>, and the determinant, <code>r² = 1</code>, hold the two numbers between them.',
    insight: 'For any matrix with complex eigenvalues, <code>trace = 2r cos θ</code> and <code>det = r²</code>. Read r from the determinant and θ from the trace before computing anything else.',
  },
  ellipse: {
    label: 'Skewed rotation', A: [[1.366, -1.732], [0.866, -0.366]], group: 'circle', tag: 'ellipse',
    title: 'A rotation in a skewed basis', exTag: 'r = 1 · θ = 60°',
    body: 'Not a rotation matrix, but <code>det = 1</code> and <code>trace = 1 = 2 cos 60°</code>: the eigenvalues are <code>e^{±i·60°}</code>. The orbit runs round an <span class="ce-el">ellipse</span>, six steps to a lap, because <code>A = P R(60°) P⁻¹</code> with a non-orthogonal <code>P</code>: a rotation of a circle, seen through <code>P</code>.',
    insight: 'The <span class="ce-el">ellipse</span> is the image under P of a circle. The dashed <span class="ce-ax">axes</span> are the columns of P, Re v and Im v; in those coordinates A is exactly the 60° rotation.',
  },
  decay: {
    label: 'Spiral in', A: [[0.72, -0.54], [0.54, 0.72]], group: 'inward', tag: 'r = 0.9',
    title: 'Rotate and shrink', exTag: 'r = 0.9 · θ = 36.9°',
    body: '<code>0.9 × R(36.9°)</code>. Each step turns by <span class="ce-th">36.9°</span> and multiplies the length by <span class="ce-r">0.9</span>, so the orbit spirals into the origin. The eigenvalues <code>0.72 ± 0.54i</code> have modulus 0.9 — inside the unit circle.',
    insight: '|λ| < 1 is the stability condition: every orbit tends to zero, whatever x₀. The dynamical system xₖ₊₁ = Axₖ is a damped oscillation.',
  },
  skewIn: {
    label: 'Skewed spiral in', A: [[0.5, -1], [0.5, 0.5]], group: 'inward', tag: 'r = 0.87',
    title: 'A damped oscillation in a skewed basis', exTag: 'r = 0.87 · θ = 54.7°',
    body: '<code>λ = 0.5 ± 0.707i</code>, <span class="ce-r">r = √0.75 = 0.866</span>. The spiral is an ellipse being shrunk: the orbit crosses a family of nested <span class="ce-el">ellipses</span>, each 0.866 times the last, all with the same shape given by P.',
    insight: 'The shape of the ellipse comes from P, the rate from r, the angle per step from θ. Three separate facts, and only r decides whether the orbit dies out.',
  },
  growth: {
    label: 'Spiral out', A: [[1.1, -0.5], [0.5, 1.1]], group: 'outward', tag: 'r = 1.21',
    title: 'Rotate and grow', exTag: 'r = 1.21 · θ = 24.4°',
    body: '<code>λ = 1.1 ± 0.5i</code>, modulus <span class="ce-r">1.208</span>. Each step turns by <span class="ce-th">24.4°</span> and stretches by 21%, so the orbit spirals outward, roughly doubling in length every four steps.',
    insight: '|λ| > 1 means the origin is an unstable spiral point: every non-zero x₀ is flung outward, rotating as it goes. Growth rate r per step, <code>ln 2 / ln r</code> steps to double.',
  },
  skewOut: {
    label: 'Skewed spiral out', A: [[1.25, -0.92], [0.74, 0.51]], group: 'outward', tag: 'r = 1.15',
    title: 'An unstable spiral in a skewed basis', exTag: 'r = 1.15 · θ ≈ 40°',
    body: 'Built as <code>P (1.15 R(40°)) P⁻¹</code> with a sheared P. The matrix looks unremarkable; the determinant <code>1.32 = 1.15²</code> and trace <code>1.76 = 2·1.15·cos 40°</code> give it away. The orbit spirals out along ellipses tilted by P.',
    insight: 'Because r and θ depend only on trace and determinant, they are invariant under change of basis. P carries everything else.',
  },
};

const SCENARIO_GROUPS = [
  { key: 'circle',  label: 'On an ellipse', tag: 'r = 1',  tagClass: 'circle' },
  { key: 'inward',  label: 'Spiral in',     tag: 'r < 1',  tagClass: 'inward' },
  { key: 'outward', label: 'Spiral out',    tag: 'r > 1',  tagClass: 'outward' },
];

const DEFAULT_LAYERS = {
  grid: true, orbit: true, spiral: true, ellipse: true, axes: true, labels: true,
};

const ALL_LAYER_DEFS = [
  { key: 'grid', label: 'grid' },
  { key: 'orbit', label: 'orbit', swatch: '#2b5bd7' },
  { key: 'spiral', label: 'spiral', swatch: '#64748b' },
  { key: 'ellipse', label: 'ellipse', swatch: '#7c3aed' },
  { key: 'axes', label: 'Re v, Im v', swatch: '#16a34a' },
  { key: 'labels', label: 'labels' },
];

const DEFAULT_LEDE = {
  crumb: 'Linear Algebra<span class="ce-dot">&middot;</span>Complex eigenvalues',
  body: 'No real eigenvector, so <span class="ce-v">x₀</span> is never just scaled: it is rotated by <span class="ce-th">θ</span> and scaled by <span class="ce-r">r = |λ|</span> each step, in the skewed basis of <code>P</code>. <code>A = P C P⁻¹</code>, <code>C = r·R(θ)</code>.',
};

const DEFAULT_STEPS = 8;
const DEFAULT_X0 = [2, 0.5];

// =====================================================================
//  SECTION 4  ::  Hooks
// =====================================================================
function useComplexState(options = {}) {
  const {
    initialA,
    initialPreset = 'ellipse',
    initialX0 = DEFAULT_X0,
    initialLayers = DEFAULT_LAYERS,
    initialSteps = DEFAULT_STEPS,
    scenarios = SCENARIOS,
  } = options;

  const seed = initialA || (scenarios[initialPreset] ? scenarios[initialPreset].A : scenarios[Object.keys(scenarios)[0]].A);
  const [A, setAInternal] = useState(seed.map((r) => r.slice()));
  const [preset, setPreset] = useState(initialA ? null : initialPreset);
  const [x0, setX0] = useState(initialX0);
  const [layers, setLayers] = useState(initialLayers);
  const [steps, setSteps] = useState(initialSteps);

  const setA = useCallback((next) => { setAInternal(next); setPreset(null); }, []);
  const selectPreset = useCallback((key) => {
    const sc = scenarios[key];
    if (!sc) return;
    setAInternal(sc.A.map((r) => r.slice()));
    setPreset(key);
  }, [scenarios]);

  return { A, preset, x0, layers, steps, setA, selectPreset, setX0, setLayers, setSteps };
}

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function useAnimationState(options = {}) {
  const { duration = 3200, initialT = 1 } = options;
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
      const localT = Math.min(1, (now - startTime) / dur);
      const newT = tStart + (target - tStart) * easeInOutCubic(localT);
      tRef.current = newT;
      setTState(newT);
      if (localT < 1) animRef.current = requestAnimationFrame(frame);
      else { animRef.current = null; setPlaying(false); }
    };
    animRef.current = requestAnimationFrame(frame);
  }, [duration]);

  const reset = useCallback(() => { cancel(); tRef.current = 0; setTState(0); }, [cancel]);
  const stepFwd = useCallback((step) => {
    cancel();
    const next = Math.min(1, Math.floor(tRef.current / step + 1 + 1e-6) * step);
    tRef.current = next; setTState(next);
  }, [cancel]);
  const stepBack = useCallback((step) => {
    cancel();
    const prev = Math.max(0, Math.ceil(tRef.current / step - 1 - 1e-6) * step);
    tRef.current = prev; setTState(prev);
  }, [cancel]);
  const play = useCallback(() => {
    if (tRef.current >= 0.999) {
      tRef.current = 0; setTState(0);
      requestAnimationFrame(() => animateTo(1, duration));
    } else {
      animateTo(1, duration * (1 - tRef.current));
    }
  }, [duration, animateTo]);
  const setT = useCallback((newT) => { cancel(); tRef.current = newT; setTState(newT); }, [cancel]);

  useEffect(() => () => { if (animRef.current !== null) cancelAnimationFrame(animRef.current); }, []);

  return { t, playing, animateTo, cancel, reset, stepFwd, stepBack, play, setT };
}

// =====================================================================
//  SECTION 5  ::  Component CSS
// =====================================================================
const COMPONENT_CSS = `
.ce-root{
  --bg:#f7f9fc;--surface:#fff;--surface-2:#f3f6fa;
  --border:#dde3ec;--border-strong:#c4cdda;
  --text:#0f1729;--text-soft:#243049;--text-dim:#4a5673;--text-faint:#7989a3;
  --accent:#2b5bd7;--accent-hover:#1e46b3;--accent-soft:#eaf0fb;--accent-line:#c8d6f1;
  --v:#ea580c;--k:#0891b2;--orbit:#2b5bd7;--el:#7c3aed;--ax:#16a34a;--sp:#64748b;
  --r:#b45309;--th:#0e7490;
  --vSoft:rgba(234,88,12,.08);--kSoft:rgba(8,145,178,.08);--elSoft:rgba(124,58,237,.12);
  --grid:#e2e8f0;--grid-axis:#94a3b8;
  --font-display:'Fraunces',Georgia,serif;
  --font-body:'IBM Plex Sans',-apple-system,BlinkMacSystemFont,sans-serif;
  --font-mono:'JetBrains Mono',Menlo,monospace;
  --shadow-card:0 1px 0 rgba(15,23,41,.04),0 1px 2px rgba(15,23,41,.04);
  --radius:6px;
  color:var(--text);font-family:var(--font-body);line-height:1.5;
  -webkit-font-smoothing:antialiased;background:var(--bg);
}
.ce-root *{box-sizing:border-box}
.ce-app{display:grid;grid-template-rows:auto auto;gap:10px;padding:14px 24px;max-width:1340px;margin:0 auto;background:var(--bg)}

.ce-lede{display:flex;align-items:baseline;gap:14px;font-size:14px;color:var(--text-dim);line-height:1.45}
.ce-crumb{font-family:var(--font-mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--text-faint);white-space:nowrap}
.ce-crumb .ce-dot{color:var(--accent);margin:0 6px}
.ce-lede .ce-v,.ce-ex-body .ce-v{color:var(--v);font-weight:500}
.ce-lede .ce-r,.ce-ex-body .ce-r{color:var(--r);font-weight:500}
.ce-lede .ce-th,.ce-ex-body .ce-th{color:var(--th);font-weight:500}
.ce-ex-body .ce-el{color:var(--el);font-weight:500}
.ce-ex-body .ce-ax{color:var(--ax);font-weight:500}
.ce-lede code{font-family:var(--font-mono);font-size:13px;background:var(--accent-soft);color:var(--accent-hover);padding:1px 6px;border-radius:3px}

.ce-main{display:grid;gap:14px;align-items:start;grid-template-columns:230px 620px minmax(360px,1fr)}
.ce-scen-col,.ce-canvas-col,.ce-info-col{display:flex;flex-direction:column;gap:10px;min-width:0}
@media (max-width:1240px){.ce-main{grid-template-columns:1fr}}

.ce-canvas-wrap{width:100%;display:flex;align-items:center;justify-content:center}
.ce-canvas{width:100%;aspect-ratio:1/1;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow-card);display:block;touch-action:none}
.ce-canvas.dragging{cursor:grabbing}

.ce-readouts{display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%}
.ce-readout{background:var(--surface);border:1px solid var(--border);border-left:3px solid currentColor;padding:8px 12px;border-radius:5px;display:flex;align-items:baseline;gap:10px;font-family:var(--font-mono);font-size:13.5px;font-weight:600;min-width:0}
.ce-readout .ce-lab{font-family:var(--font-display);font-style:italic;font-size:17px;font-weight:500;flex-shrink:0}
.ce-readout .ce-eq{color:var(--text-faint);font-weight:400}
.ce-readout .ce-val{color:var(--text);font-weight:500;font-variant-numeric:tabular-nums;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ce-readout.ce-v{color:var(--v)}
.ce-readout.ce-k{color:var(--k)}

.ce-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow-card);padding:12px 14px}
.ce-card h2{font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--text-faint);margin:0 0 10px;display:flex;align-items:center;justify-content:space-between}
.ce-badge{color:var(--accent);margin-right:6px;font-weight:600}
.ce-card h2 .ce-note{font-weight:500;letter-spacing:.04em;text-transform:none;font-size:11px;color:var(--text-dim);font-family:var(--font-mono)}

.ce-anim-card{padding:12px 14px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow-card)}
.ce-anim-head{font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--text-faint);margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;gap:8px}
.ce-anim-head .ce-t-readout{font-weight:500;letter-spacing:.05em;text-transform:none;color:var(--accent);font-family:var(--font-mono)}
.ce-anim-progress{height:5px;background:var(--surface-2);border-radius:3px;overflow:hidden;position:relative;margin-bottom:10px}
.ce-anim-progress .ce-fill{position:absolute;left:0;top:0;bottom:0;background:linear-gradient(90deg,var(--v),var(--k));border-radius:3px;transition:width .12s linear}
.ce-anim-controls{display:flex;gap:6px;align-items:center;flex-wrap:wrap}
.ce-ctrl-btn{background:var(--surface-2);border:1px solid var(--border);width:30px;height:28px;border-radius:4px;cursor:pointer;color:var(--text-dim);font-weight:600;display:inline-flex;align-items:center;justify-content:center;padding:0;transition:all .12s}
.ce-ctrl-btn:hover{background:var(--accent-soft);color:var(--accent);border-color:var(--accent-line)}
.ce-ctrl-btn:disabled{opacity:.4;cursor:not-allowed}
.ce-ctrl-btn svg{width:11px;height:11px;fill:currentColor}
.ce-ctrl-btn.ce-primary{background:var(--accent);border-color:var(--accent);color:#fff;width:auto;padding:0 14px;font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;font-family:var(--font-mono)}
.ce-ctrl-btn.ce-primary:hover{background:var(--accent-hover);border-color:var(--accent-hover);color:#fff}
.ce-slider{flex:1;-webkit-appearance:none;appearance:none;height:4px;border-radius:2px;outline:none;cursor:pointer;min-width:60px;margin:0 4px}
.ce-slider::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:var(--accent);border:2px solid #fff;cursor:pointer;box-shadow:0 0 0 1px var(--accent)}
.ce-slider::-moz-range-thumb{width:12px;height:12px;border-radius:50%;background:var(--accent);border:2px solid #fff;cursor:pointer}
.ce-t-label{font-family:var(--font-mono);font-size:11px;color:var(--text-faint);min-width:78px;text-align:right;font-variant-numeric:tabular-nums}
.ce-t-label .ce-val{color:var(--text);font-weight:600}
.ce-steps-row{display:flex;align-items:center;gap:8px;margin-top:10px;padding-top:8px;border-top:1px dashed var(--border);font-family:var(--font-mono);font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--text-faint)}
.ce-steps-row input{flex:1}
.ce-steps-row .ce-val{color:var(--accent);font-weight:600;min-width:24px;text-align:right}

.ce-chips-strip{display:flex;flex-wrap:wrap;gap:2px;padding:4px 8px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow-card)}
.ce-chip{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;font-family:var(--font-mono);font-size:11px;letter-spacing:.04em;color:var(--text-faint);background:transparent;border:1px solid transparent;border-radius:4px;cursor:pointer;user-select:none;transition:all .12s}
.ce-chip input{width:12px;height:12px;margin:0;accent-color:var(--accent);cursor:pointer}
.ce-chip:hover,.ce-chip:has(input:checked){color:var(--text);background:var(--accent-soft)}
.ce-chip .ce-sw{display:inline-block;width:11px;height:3px;border-radius:1px}

.ce-ex-header{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--border)}
.ce-ex-header h3{font-family:var(--font-display);font-weight:500;font-size:19px;color:var(--text);margin:0;letter-spacing:-.01em;line-height:1.2}
.ce-ex-tag{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--text-faint);white-space:nowrap}
.ce-ex-body{color:var(--text-soft);font-size:13.5px;line-height:1.55;margin:0 0 10px}
.ce-ex-body code,.ce-ex-block code{font-family:var(--font-mono);font-size:11.5px;background:var(--accent-soft);color:var(--accent-hover);padding:1px 4px;border-radius:3px}
.ce-ex-block{margin-top:10px;padding-top:10px;border-top:1px dashed var(--border)}
.ce-ex-block-label{font-family:var(--font-mono);font-size:9.5px;letter-spacing:.15em;text-transform:uppercase;color:var(--accent);margin-bottom:4px}
.ce-ex-block p{margin:0;font-size:12.5px;color:var(--text-soft);line-height:1.55}

.ce-matrix-card{padding:12px 14px}
.ce-matrix-wrap{display:flex;justify-content:center;align-items:center;gap:8px;padding:2px 0;flex-wrap:wrap}
.ce-matrix-eq{font-family:var(--font-display);font-style:italic;font-size:18px;font-weight:500;color:var(--text)}
.ce-matrix-op{color:var(--text-faint);font-size:14px}
.ce-matrix-bracket{display:grid;grid-template-columns:auto auto;gap:3px 8px;padding:6px 12px;position:relative;font-family:var(--font-mono);font-size:12px}
.ce-matrix-bracket::before,.ce-matrix-bracket::after{content:'';position:absolute;top:3px;bottom:3px;width:5px;border:1.3px solid var(--text-dim)}
.ce-matrix-bracket::before{left:0;border-right:none;border-radius:2px 0 0 2px}
.ce-matrix-bracket::after{right:0;border-left:none;border-radius:0 2px 2px 0}
.ce-matrix-bracket span{text-align:right;min-width:44px;color:var(--accent);font-weight:600;font-variant-numeric:tabular-nums}
.ce-matrix-bracket.ce-small span{min-width:40px;font-size:11px;color:var(--text-soft)}
.ce-matrix-bracket input{width:52px;height:26px;text-align:center;border:1px solid var(--border);border-radius:4px;font-family:var(--font-mono);font-size:12px;color:var(--accent);font-weight:600;background:var(--surface);outline:none}
.ce-matrix-bracket input:focus{border-color:var(--accent);box-shadow:0 0 0 2px var(--accent-soft)}
.ce-form-row{display:flex;align-items:center;justify-content:center;gap:6px;padding:8px 0 0;margin-top:8px;border-top:1px dashed var(--border);flex-wrap:wrap}
.ce-form-note{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--text-faint);width:100%;text-align:center;margin-bottom:2px}
.ce-form-real{font-family:var(--font-mono);font-size:11.5px;color:var(--r);text-align:center;padding:6px 0 0;margin-top:8px;border-top:1px dashed var(--border)}

.ce-live-grid{display:grid;grid-template-columns:auto 1fr;gap:5px 14px;align-items:baseline}
.ce-lk{font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--text-faint)}
.ce-lv{font-family:var(--font-mono);font-size:12.5px;color:var(--text);font-weight:500;text-align:right;font-variant-numeric:tabular-nums}
.ce-lv.ce-v{color:var(--v)}
.ce-lv.ce-k{color:var(--k)}
.ce-lv.ce-r{color:var(--r);font-weight:600}
.ce-lv.ce-th{color:var(--th);font-weight:600}
.ce-lv.ce-live{color:var(--accent)}
.ce-check-row{margin-top:10px;padding:7px 11px;border-radius:5px;display:flex;align-items:center;gap:8px;font-family:var(--font-mono);font-size:11px;background:var(--kSoft);border:1px solid rgba(8,145,178,.4);color:var(--k);font-weight:600}
.ce-check-row .ce-ok{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;background:var(--k);color:#fff;font-weight:700;font-size:11px;flex-shrink:0}
.ce-check-row.ce-warn{background:rgba(180,83,9,.08);border-color:rgba(180,83,9,.4);color:var(--r)}
.ce-check-row.ce-warn .ce-ok{background:var(--r)}

.ce-scenarios-card h2{margin-bottom:8px}
.ce-scen-sections{display:flex;flex-direction:column;gap:13px}
.ce-scen-section-label{display:flex;align-items:center;justify-content:space-between;gap:6px;font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--text-dim);margin-bottom:6px}
.ce-scen-section-label .ce-tag{padding:2px 7px;border-radius:3px;font-size:9.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;border:1px solid var(--accent-line);background:var(--accent-soft);color:var(--accent-hover);white-space:nowrap}
.ce-preset-grid{display:flex;flex-direction:column;gap:4px}
.ce-preset-btn{
  background:var(--surface-2);border:1px solid var(--border);border-left:3px solid var(--orbit);
  color:var(--text-soft);padding:6px 10px;
  font-family:var(--font-body);font-size:12.5px;font-weight:500;
  cursor:pointer;border-radius:4px;text-align:left;transition:all .12s;
  display:flex;justify-content:space-between;align-items:baseline;gap:6px;
}
.ce-preset-btn.ce-inward{border-left-color:var(--k)}
.ce-preset-btn.ce-outward{border-left-color:var(--v)}
.ce-preset-btn:hover{background:var(--accent-soft);border-color:var(--accent-line);color:var(--accent-hover)}
.ce-preset-btn.ce-active{background:var(--accent-soft);border-color:var(--accent-line);color:var(--accent-hover);font-weight:600;border-left-color:var(--accent)}
.ce-preset-btn .ce-ptag{font-family:var(--font-mono);font-size:9.5px;color:var(--text-faint)}
.ce-preset-btn.ce-active .ce-ptag{color:var(--accent)}

/* SVG primitives */
.ce-grid-line{stroke:var(--grid);stroke-width:1;fill:none}
.ce-grid-axis{stroke:var(--grid-axis);stroke-width:1.3;fill:none}
.ce-axis-line{stroke-width:1.2;fill:none;stroke-dasharray:6 5;opacity:.55}
.ce-axis-vec{stroke-width:2;fill:none;stroke-linecap:round}
.ce-axis-re{stroke:var(--ax)}
.ce-axis-im{stroke:var(--ax);opacity:.8}
.ce-axis-label{fill:var(--ax);font-family:var(--font-display);font-style:italic;font-size:12.5px;font-weight:600;stroke:none}
.ce-ellipse{stroke:var(--el);stroke-width:1.6;fill:var(--elSoft);opacity:.9}
.ce-spiral{stroke:var(--sp);stroke-width:1.4;fill:none;opacity:.7}
.ce-orbit-path{stroke:var(--orbit);stroke-width:1;fill:none;opacity:.35;stroke-dasharray:3 3}
.ce-orbit-dot{fill:var(--orbit);stroke:#fff;stroke-width:1.2}
.ce-orbit-start{fill:var(--v)}
.ce-orbit-label{fill:var(--orbit);font-family:var(--font-mono);font-size:10px;font-weight:600}
.ce-v-shaft{stroke:var(--v);stroke-width:2.6;fill:none;stroke-linecap:round}
.ce-v-handle{fill:var(--v);stroke:#fff;stroke-width:2;cursor:grab}
.ce-v-handle:active{cursor:grabbing}
.ce-v-label{fill:var(--v);font-family:var(--font-display);font-style:italic;font-size:16px;font-weight:600}
.ce-k-shaft{stroke:var(--k);stroke-width:2.6;fill:none;stroke-linecap:round}
.ce-k-tip{fill:var(--k);stroke:#fff;stroke-width:2}
.ce-k-label{fill:var(--k);font-family:var(--font-display);font-style:italic;font-size:15px;font-weight:600}
.ce-origin-dot{fill:var(--text-soft)}
`;

// =====================================================================
//  SECTION 6  ::  Sub-components
// =====================================================================
const SUPS = '⁰¹²³⁴⁵⁶⁷⁸⁹';
const sup = (k) => String(k).split('').map((ch) => SUPS[Number(ch)] || ch).join('');

// everything the canvas draws, as an SVG inner string (shared with the frozen diagrams)
function composeScene({ A, x0, t = 1, steps = DEFAULT_STEPS, layers = DEFAULT_LAYERS, geom = DEFAULT_GEOM }) {
  const dec = Math2D.decompose(A);
  const K = t * steps;
  const points = Math2D.orbit(A, x0, steps);
  const xk = dec.complex ? Math2D.apply(Math2D.powK(A, K, dec), x0) : points[Math.min(points.length - 1, Math.round(K))];

  let inner = '';
  if (layers.grid) inner += SVGRender.grid(geom);
  if (layers.axes) inner += SVGRender.axes(dec, geom, layers.labels);
  if (layers.ellipse) inner += SVGRender.ellipse(dec, x0, geom);
  if (layers.spiral) inner += SVGRender.spiral(A, dec, x0, K, geom);
  if (layers.orbit) inner += SVGRender.orbit(points, Math.floor(K + 1e-6), geom, layers.labels);
  if (K > 1e-3) inner += SVGRender.kArrow(xk, geom, layers.labels, `A${Number.isInteger(+K.toFixed(6)) ? sup(Math.round(K)) : 'ᵏ'}x₀`);
  inner += SVGRender.vArrow(x0, geom, layers.labels);
  inner += SVGRender.origin(geom);
  return { inner, dec, points, xk, K };
}

const MARKERS = (
  <defs>
    <marker id="ce-arr-v" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
      <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#ea580c" />
    </marker>
    <marker id="ce-arr-k" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
      <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#0891b2" />
    </marker>
    <marker id="ce-arr-re" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto" markerUnits="strokeWidth">
      <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#16a34a" />
    </marker>
    <marker id="ce-arr-im" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto" markerUnits="strokeWidth">
      <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#16a34a" />
    </marker>
  </defs>
);

function ComplexCanvas({
  A, x0 = DEFAULT_X0, t = 1, steps = DEFAULT_STEPS,
  layers = DEFAULT_LAYERS, geom = DEFAULT_GEOM,
  onX0Change, draggable = true, className, style,
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
    if (handle !== 'v' || !onX0Change) return;
    draggingRef.current = true; setIsDragging(true);
    try { e.target.setPointerCapture(e.pointerId); } catch (_) {}
    onX0Change(pointerToMath(e));
  };
  const onPointerMove = (e) => { if (draggingRef.current && onX0Change) onX0Change(pointerToMath(e)); };
  const onPointerUp = (e) => {
    if (!draggingRef.current) return;
    try { e.target.releasePointerCapture(e.pointerId); } catch (_) {}
    draggingRef.current = false; setIsDragging(false);
  };

  const { inner } = composeScene({ A, x0, t, steps, layers, geom });
  const tx = SVGRender._proj(geom);
  const [hx, hy] = tx(x0);

  return (
    <svg
      ref={svgRef}
      className={'ce-canvas' + (isDragging ? ' dragging' : '') + (className ? ' ' + className : '')}
      style={style}
      viewBox={`0 0 ${geom.size} ${geom.size}`}
      xmlns="http://www.w3.org/2000/svg"
      onPointerDown={draggable ? onPointerDown : undefined}
      onPointerMove={draggable ? onPointerMove : undefined}
      onPointerUp={draggable ? onPointerUp : undefined}
      onPointerCancel={draggable ? onPointerUp : undefined}
    >
      {MARKERS}
      <g dangerouslySetInnerHTML={{ __html: inner }} />
      {draggable && onX0Change && <circle data-handle="v" cx={hx} cy={hy} r={14} fill="transparent" style={{ cursor: 'grab' }} />}
    </svg>
  );
}

function LayerChips({ layers = {}, onChange = () => {}, enabledLayers, layerDefs = ALL_LAYER_DEFS }) {
  const defs = enabledLayers ? layerDefs.filter((d) => enabledLayers.includes(d.key)) : layerDefs;
  return (
    <div className="ce-chips-strip">
      {defs.map((d) => (
        <label key={d.key} className="ce-chip">
          <input type="checkbox" checked={!!layers[d.key]} onChange={(e) => onChange({ ...layers, [d.key]: e.target.checked })} />
          {d.label}
          {d.swatch && <span className="ce-sw" style={{ background: d.swatch }} />}
        </label>
      ))}
    </div>
  );
}

function CanvasReadout({ kind = 'v', label = 'x₀', value = '(0, 0)' }) {
  return (
    <div className={`ce-readout ce-${kind}`}>
      <span className="ce-lab">{label}</span>
      <span className="ce-eq">=</span>
      <span className="ce-val">{value}</span>
    </div>
  );
}

const ICON_RESET = <svg viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/></svg>;
const ICON_BACK  = <svg viewBox="0 0 24 24"><path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z"/></svg>;
const ICON_FWD   = <svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6h2v12h-2V6z"/></svg>;

function AnimationCard({
  t = 0, playing = false, steps = DEFAULT_STEPS,
  onPlay = () => {}, onPause = () => {},
  onStepFwd = () => {}, onStepBack = () => {},
  onReset = () => {}, onScrub = () => {}, onSteps = () => {},
  title = 'Orbit xₖ = Aᵏ x₀',
}) {
  const pct = (Math.max(0, Math.min(1, t)) * 100).toFixed(2);
  const sliderBg = `linear-gradient(to right, var(--accent) 0%, var(--accent) ${pct}%, var(--border) ${pct}%, var(--border) 100%)`;
  const k = t * steps;
  const stepSize = 1 / steps;
  return (
    <div className="ce-anim-card">
      <div className="ce-anim-head">
        <span><span className="ce-badge">&#9656;</span>{title}</span>
        <span className="ce-t-readout">k = {k.toFixed(2)} of {steps}</span>
      </div>
      <div className="ce-anim-progress"><div className="ce-fill" style={{ width: pct + '%' }} /></div>
      <div className="ce-anim-controls">
        <button className="ce-ctrl-btn" onClick={onReset} title="Reset" type="button">{ICON_RESET}</button>
        <button className="ce-ctrl-btn" onClick={() => onStepBack(stepSize)} disabled={t <= 1e-4} title="Previous step" type="button">{ICON_BACK}</button>
        <button className="ce-ctrl-btn ce-primary" onClick={playing ? onPause : onPlay} title="Play / Pause" type="button">
          {playing ? 'Pause' : 'Play'}
        </button>
        <button className="ce-ctrl-btn" onClick={() => onStepFwd(stepSize)} disabled={t >= 1 - 1e-4} title="Next step" type="button">{ICON_FWD}</button>
        <input type="range" min={0} max={1} step={0.001} value={t}
          className="ce-slider" style={{ background: sliderBg }}
          onChange={(e) => onScrub(parseFloat(e.target.value))} />
        <span className="ce-t-label">k = <span className="ce-val">{k.toFixed(2)}</span></span>
      </div>
      <div className="ce-steps-row">
        <span>steps</span>
        <input type="range" min={2} max={24} step={1} value={steps} className="ce-slider"
          onChange={(e) => onSteps(parseInt(e.target.value, 10))} />
        <span className="ce-val">{steps}</span>
      </div>
    </div>
  );
}

function Bracket({ M, small, cls }) {
  return (
    <div className={'ce-matrix-bracket' + (small ? ' ce-small' : '') + (cls ? ' ' + cls : '')}>
      <span>{Math2D.fmt(M[0][0])}</span><span>{Math2D.fmt(M[0][1])}</span>
      <span>{Math2D.fmt(M[1][0])}</span><span>{Math2D.fmt(M[1][1])}</span>
    </div>
  );
}

function MatrixCard({ A, onAChange = () => {} }) {
  const [drafts, setDrafts] = useState({});
  const dec = Math2D.decompose(A);
  const edit = (i, j, raw) => {
    setDrafts((d) => ({ ...d, [`${i},${j}`]: raw }));
    const num = parseFloat(raw);
    const v = Number.isFinite(num) ? num : (raw === '' || raw === '-' ? 0 : null);
    if (v !== null) { const next = A.map((r) => r.slice()); next[i][j] = v; onAChange(next); }
  };
  const commit = (i, j) => setDrafts((d) => { const n = { ...d }; delete n[`${i},${j}`]; return n; });
  const cell = (i, j) => (
    <input
      key={`${i}${j}`}
      type="text"
      inputMode="decimal"
      value={drafts[`${i},${j}`] !== undefined ? drafts[`${i},${j}`] : String(Math.round(A[i][j] * 1000) / 1000)}
      onChange={(e) => edit(i, j, e.target.value)}
      onBlur={() => commit(i, j)}
      aria-label={`entry ${i + 1},${j + 1}`}
    />
  );
  return (
    <div className="ce-card ce-matrix-card">
      <h2><span><span className="ce-badge">A</span>Matrix</span><span className="ce-note">edit the entries</span></h2>
      <div className="ce-matrix-wrap">
        <span className="ce-matrix-eq">A</span>
        <span className="ce-matrix-op">=</span>
        <div className="ce-matrix-bracket">{cell(0, 0)}{cell(0, 1)}{cell(1, 0)}{cell(1, 1)}</div>
      </div>
      {dec.complex ? (
        <div className="ce-form-row">
          <div className="ce-form-note">A = P &middot; C &middot; P&#8315;&#185;, &nbsp; C = r&middot;R(&theta;)</div>
          <span className="ce-matrix-eq" style={{ fontSize: 15 }}>P</span>
          <Bracket M={dec.P} small />
          <span className="ce-matrix-eq" style={{ fontSize: 15 }}>C</span>
          <Bracket M={dec.C} small />
        </div>
      ) : (
        <div className="ce-form-real">
          real eigenvalues {Math2D.fmt(dec.eig.l1)} and {Math2D.fmt(dec.eig.l2)} &mdash; no rotation; see the eigenvector tool
        </div>
      )}
    </div>
  );
}

function ExplanationCard({ preset, scenarios = SCENARIOS, override }) {
  let sc = scenarios[preset];
  if (!sc) sc = {
    title: 'Custom matrix', exTag: 'edited',
    body: 'Read <span class="ce-r">r</span> from the determinant and <span class="ce-th">θ</span> from the trace: <code>det = r²</code>, <code>trace = 2r cos θ</code>. If <code>trace² < 4 det</code> the eigenvalues are complex and the orbit rotates; otherwise they are real and the eigenvector tool is the one to use.',
    insight: 'r > 1 spirals out, r < 1 spirals in, r = 1 stays on its ellipse. θ sets how far round each step goes.',
  };
  if (override && override.byPreset && override.byPreset[preset]) sc = override.byPreset[preset];
  return (
    <div className="ce-card">
      <div className="ce-ex-header">
        <h3 dangerouslySetInnerHTML={{ __html: sc.title }} />
        <span className="ce-ex-tag" dangerouslySetInnerHTML={{ __html: sc.exTag || sc.tag || '' }} />
      </div>
      <p className="ce-ex-body" dangerouslySetInnerHTML={{ __html: sc.body }} />
      {sc.insight && (
        <div className="ce-ex-block">
          <div className="ce-ex-block-label">Insight</div>
          <p dangerouslySetInnerHTML={{ __html: sc.insight }} />
        </div>
      )}
    </div>
  );
}

function LiveCard({ A, x0 = DEFAULT_X0, steps = DEFAULT_STEPS }) {
  const dec = Math2D.decompose(A);
  const x1 = Math2D.apply(A, x0);
  const n0 = Math.hypot(x0[0], x0[1]);
  const n1 = Math.hypot(x1[0], x1[1]);
  const xN = Math2D.apply(Math2D.powK(A, steps, dec), x0);
  const nN = Math.hypot(xN[0], xN[1]);
  const angle = n0 > 1e-9 && n1 > 1e-9
    ? Math2D.deg(Math.atan2(x0[0] * x1[1] - x0[1] * x1[0], x0[0] * x1[0] + x0[1] * x1[1]))
    : 0;
  return (
    <div className="ce-card">
      <h2><span><span className="ce-badge">04</span>Live</span><span className="ce-note">drag x₀</span></h2>
      <div className="ce-live-grid">
        {dec.complex ? (
          <>
            <span className="ce-lk">&lambda;</span><span className="ce-lv ce-live">{Math2D.fmt(dec.a)} &plusmn; {Math2D.fmt(dec.b)}i</span>
            <span className="ce-lk">r = |&lambda;| = &radic;det</span><span className="ce-lv ce-r">{Math2D.fmt(dec.r, 3)}</span>
            <span className="ce-lk">&theta; = arg &lambda;</span><span className="ce-lv ce-th">{Math2D.fmt(Math2D.deg(dec.theta), 1)}&deg;</span>
            <span className="ce-lk">steps per turn</span><span className="ce-lv">{Math2D.fmt(360 / Math.abs(Math2D.deg(dec.theta)), 2)}</span>
          </>
        ) : (
          <>
            <span className="ce-lk">&lambda;</span><span className="ce-lv ce-live">{Math2D.fmt(dec.eig.l1)}, {Math2D.fmt(dec.eig.l2)}</span>
            <span className="ce-lk">real</span><span className="ce-lv ce-r">no rotation</span>
          </>
        )}
        <span className="ce-lk">det A</span><span className="ce-lv">{Math2D.fmt(Math2D.det(A), 3)}</span>
        <span className="ce-lk">trace A</span><span className="ce-lv">{Math2D.fmt(Math2D.trace(A), 3)}</span>
        <span className="ce-lk">|x₀|</span><span className="ce-lv ce-v">{Math2D.fmt(n0)}</span>
        <span className="ce-lk">|Ax₀| / |x₀|</span><span className="ce-lv ce-k">{n0 > 1e-9 ? Math2D.fmt(n1 / n0, 3) : '—'}</span>
        <span className="ce-lk">angle x₀ → Ax₀</span><span className="ce-lv ce-k">{Math2D.fmt(angle, 1)}&deg;</span>
        <span className="ce-lk">|A{sup(steps)}x₀| / |x₀|</span><span className="ce-lv">{n0 > 1e-9 ? Math2D.fmt(nN / n0, 3) : '—'}</span>
      </div>
      {dec.complex ? (
        <div className="ce-check-row">
          <span className="ce-ok">&#10003;</span>
          <span>
            {Math.abs(dec.r - 1) < 1e-3
              ? 'r = 1: the orbit stays on its ellipse'
              : dec.r < 1
                ? `r < 1: spirals in, halves every ${Math2D.fmt(Math.log(0.5) / Math.log(dec.r), 1)} steps`
                : `r > 1: spirals out, doubles every ${Math2D.fmt(Math.log(2) / Math.log(dec.r), 1)} steps`}
          </span>
        </div>
      ) : (
        <div className="ce-check-row ce-warn">
          <span className="ce-ok">!</span>
          <span>real eigenvalues: no rotation-scaling form</span>
        </div>
      )}
    </div>
  );
}

function ScenariosPanel({
  scenarios = SCENARIOS, groups = SCENARIO_GROUPS, preset = null, onSelect = () => {},
  visibleScenarios, badge = '03', title = 'Matrices',
}) {
  const visible = visibleScenarios
    ? Object.fromEntries(visibleScenarios.map((k) => [k, scenarios[k]]).filter(([, s]) => s))
    : scenarios;
  return (
    <div className="ce-card ce-scenarios-card">
      <h2><span><span className="ce-badge">{badge}</span>{title}</span></h2>
      <div className="ce-scen-sections">
        {groups.map((g) => {
          const items = Object.entries(visible).filter(([, sc]) => sc.group === g.key);
          if (!items.length) return null;
          return (
            <div className="ce-scen-section" key={g.key}>
              <div className="ce-scen-section-label">
                <span>{g.label}</span>
                <span className="ce-tag">{g.tag}</span>
              </div>
              <div className="ce-preset-grid">
                {items.map(([key, sc]) => (
                  <button
                    key={key}
                    className={'ce-preset-btn ce-' + g.key + (preset === key ? ' ce-active' : '')}
                    onClick={() => onSelect(key)}
                  >
                    <span>{sc.label}</span>
                    <span className="ce-ptag">{sc.tag}</span>
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
export function ComplexEigenCore({
  initialA, initialPreset, initialX0, initialLayers, initialSteps, scenarios,
  duration = 3200, initialT = 1,
  children,
}) {
  const state = useComplexState({ initialA, initialPreset, initialX0, initialLayers, initialSteps, scenarios });
  const anim = useAnimationState({ duration, initialT });

  useEffect(() => {
    if (!state.preset) return;
    anim.setT(0);
    requestAnimationFrame(() => anim.animateTo(1, duration));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.preset]);

  if (typeof children === 'function') return children({ state, anim });
  return null;
}

export default function ComplexEigen({
  lede,
  ledeCrumb = DEFAULT_LEDE.crumb,
  ledeBody  = DEFAULT_LEDE.body,
  initialA, initialPreset, initialX0, initialLayers, initialSteps, scenarios,
  duration, initialT,
  layerChips, canvas, explanation, liveCard, scenariosPanel, animation, matrixCard,
  visibleScenarios, enabledLayers, explanationOverride,
  layout,
  className, style,
}) {
  return (
    <ComplexEigenCore
      initialA={initialA}
      initialPreset={initialPreset}
      initialX0={initialX0}
      initialLayers={initialLayers}
      initialSteps={initialSteps}
      scenarios={scenarios}
      duration={duration} initialT={initialT}
    >
      {({ state, anim }) => {
        const renderLede = () => {
          if (lede !== undefined) return lede;
          if (ledeCrumb === null && ledeBody === null) return null;
          return (
            <div className="ce-lede">
              {ledeCrumb && <span className="ce-crumb" dangerouslySetInnerHTML={{ __html: ledeCrumb }} />}
              {ledeBody && <span dangerouslySetInnerHTML={{ __html: ledeBody }} />}
            </div>
          );
        };

        const dec = Math2D.decompose(state.A);
        const K = anim.t * state.steps;
        const xk = dec.complex
          ? Math2D.apply(Math2D.powK(state.A, K, dec), state.x0)
          : Math2D.orbit(state.A, state.x0, state.steps)[Math.round(K)];

        const slotChips = layerChips !== undefined ? layerChips : (
          <LayerChips layers={state.layers} onChange={state.setLayers} enabledLayers={enabledLayers} />
        );
        const slotCanvas = canvas !== undefined ? canvas : (
          <ComplexCanvas A={state.A} x0={state.x0} t={anim.t} steps={state.steps} layers={state.layers} onX0Change={state.setX0} />
        );
        const slotExp = explanation !== undefined ? explanation : (
          <ExplanationCard preset={state.preset} scenarios={scenarios || SCENARIOS} override={explanationOverride} />
        );
        const slotLive = liveCard !== undefined ? liveCard : (
          <LiveCard A={state.A} x0={state.x0} steps={state.steps} />
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
          <MatrixCard A={state.A} onAChange={state.setA} />
        );
        const slotAnim = animation !== undefined ? animation : (
          <AnimationCard
            t={anim.t} playing={anim.playing} steps={state.steps}
            onPlay={anim.play} onPause={anim.cancel}
            onStepFwd={anim.stepFwd} onStepBack={anim.stepBack}
            onReset={anim.reset} onScrub={anim.setT} onSteps={state.setSteps}
          />
        );

        if (typeof layout === 'function') {
          return (
            <div className={'ce-root ' + (className || '')} style={style}>
              <style dangerouslySetInnerHTML={{ __html: COMPONENT_CSS }} />
              {layout({ state, anim })}
            </div>
          );
        }

        return (
          <div className={'ce-root ' + (className || '')} style={style}>
            <style dangerouslySetInnerHTML={{ __html: COMPONENT_CSS }} />
            <div className="ce-app">
              {renderLede()}
              <main className="ce-main">
                <aside className="ce-scen-col">{slotScenarios}</aside>
                <section className="ce-canvas-col">
                  <div className="ce-canvas-wrap">{slotCanvas}</div>
                  <div className="ce-readouts">
                    <CanvasReadout kind="v" label={'x₀'} value={Math2D.fmtPair(state.x0)} />
                    <CanvasReadout kind="k" label={`A${Number.isInteger(+K.toFixed(6)) ? sup(Math.round(K)) : 'ᵏ'}x₀`} value={Math2D.fmtPair(xk)} />
                  </div>
                  {slotAnim}
                </section>
                <section className="ce-info-col">
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
    </ComplexEigenCore>
  );
}

export {
  ComplexCanvas, LayerChips, CanvasReadout,
  AnimationCard, MatrixCard, ExplanationCard, LiveCard, ScenariosPanel,
  useComplexState, useAnimationState, composeScene,
  Math2D, SVGRender,
  SCENARIOS, SCENARIO_GROUPS, DEFAULT_LAYERS, DEFAULT_GEOM, ALL_LAYER_DEFS, DEFAULT_STEPS, DEFAULT_X0,
};
