'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

// =====================================================================
//  SECTION 1  ::  Math2D
// =====================================================================
const Math2D = {
  apply: (M, p) => [M[0][0] * p[0] + M[0][1] * p[1], M[1][0] * p[0] + M[1][1] * p[1]],
  det: (M) => M[0][0] * M[1][1] - M[0][1] * M[1][0],
  trace: (M) => M[0][0] + M[1][1],

  fmt(x) {
    if (Math.abs(x) < 1e-9) return '0';
    const r = Math.round(x * 100) / 100;
    return r.toFixed(2).replace(/\.?0+$/, '') || '0';
  },
  fmtPair(p) { return `(${Math2D.fmt(p[0])}, ${Math2D.fmt(p[1])})`; },

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
      const cls = i === 0 ? 'ev-grid-axis' : 'ev-grid-line';
      const [x1, y1] = tx([-R, i]);
      const [x2, y2] = tx([R, i]);
      s += `<line class="${cls}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
      const [x3, y3] = tx([i, -R]);
      const [x4, y4] = tx([i, R]);
      s += `<line class="${cls}" x1="${x3}" y1="${y3}" x2="${x4}" y2="${y4}"/>`;
    }
    return s;
  },

  lineThroughOrigin(dir, cls, halo, geom) {
    const tx = SVGRender._proj(geom);
    const R = geom.gridR;
    const [x1, y1] = tx([-R * dir[0], -R * dir[1]]);
    const [x2, y2] = tx([R * dir[0], R * dir[1]]);
    let s = '';
    if (halo) s += `<line class="${halo}" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
    s += `<line class="${cls}" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
    return s;
  },

  origin(geom) {
    const tx = SVGRender._proj(geom);
    const [ox, oy] = tx([0, 0]);
    return `<circle class="ev-origin-dot" cx="${ox}" cy="${oy}" r="2.5"/>`;
  },

  eigLines(A, showLabels, geom) {
    const es = Math2D.eigenStructure(A);
    const tx = SVGRender._proj(geom);
    let s = '';
    if (es.kind === 'distinct') {
      s += SVGRender.lineThroughOrigin(es.vecs[0], 'ev-eig-line', 'ev-eig-halo', geom);
      s += SVGRender.lineThroughOrigin(es.vecs[1], 'ev-eig-line', 'ev-eig-halo', geom);
      if (showLabels) {
        const lbl = (vec, text) => {
          const perp = [-vec[1], vec[0]];
          const p = [4.4 * vec[0] + 0.5 * perp[0], 4.4 * vec[1] + 0.5 * perp[1]];
          const [lx, ly] = tx(p);
          s += `<text class="ev-eig-label" x="${lx.toFixed(2)}" y="${ly.toFixed(2)}" text-anchor="middle">${text}</text>`;
        };
        lbl(es.vecs[0], `\u03BB=${Math2D.fmt(es.lambdas[0])}`);
        lbl(es.vecs[1], `\u03BB=${Math2D.fmt(es.lambdas[1])}`);
      }
    } else if (es.kind === 'defective') {
      s += SVGRender.lineThroughOrigin(es.vec, 'ev-eig-line', 'ev-eig-halo', geom);
      if (showLabels) {
        const perp = [-es.vec[1], es.vec[0]];
        const p = [4.4 * es.vec[0] + 0.5 * perp[0], 4.4 * es.vec[1] + 0.5 * perp[1]];
        const [lx, ly] = tx(p);
        s += `<text class="ev-eig-label" x="${lx.toFixed(2)}" y="${ly.toFixed(2)}" text-anchor="middle">\u03BB=${Math2D.fmt(es.lambda)} (only)</text>`;
      }
    } else if (es.kind === 'isotropic') {
      const [ox, oy] = tx([0, 0]);
      s += `<circle class="ev-iso-ring" cx="${ox}" cy="${oy}" r="40"/>`;
      s += `<circle class="ev-iso-ring" cx="${ox}" cy="${oy}" r="80"/>`;
      s += `<circle class="ev-iso-ring" cx="${ox}" cy="${oy}" r="120"/>`;
      if (showLabels) s += `<text class="ev-eig-label" x="${ox + 90}" y="${oy - 100}">every direction \u00B7 \u03BB=${Math2D.fmt(es.lambda)}</text>`;
    }
    return s;
  },

  dirLines(v, Av, aligned, geom) {
    let s = '';
    const vMag = Math.hypot(v[0], v[1]);
    if (vMag > 1e-6) {
      const dir = [v[0] / vMag, v[1] / vMag];
      s += SVGRender.lineThroughOrigin(dir, 'ev-v-dir', null, geom);
    }
    const aMag = Math.hypot(Av[0], Av[1]);
    if (aMag > 1e-6 && !aligned) {
      const dir = [Av[0] / aMag, Av[1] / aMag];
      s += SVGRender.lineThroughOrigin(dir, 'ev-av-dir', null, geom);
    }
    return s;
  },

  angleArc(v, Av, geom) {
    const tx = SVGRender._proj(geom);
    const vMag = Math.hypot(v[0], v[1]);
    const aMag = Math.hypot(Av[0], Av[1]);
    if (vMag < 1e-3 || aMag < 1e-3) return '';
    const r = Math.min(0.7, Math.min(vMag, aMag) * 0.4);
    const a1 = Math.atan2(v[1], v[0]);
    const a2 = Math.atan2(Av[1], Av[0]);
    let delta = a2 - a1;
    while (delta > Math.PI) delta -= 2 * Math.PI;
    while (delta < -Math.PI) delta += 2 * Math.PI;
    if (Math.abs(delta) < 1e-3) return '';
    const N = 24;
    const pts = [];
    for (let i = 0; i <= N; i++) {
      const a = a1 + delta * i / N;
      pts.push(tx([r * Math.cos(a), r * Math.sin(a)]).map((n) => n.toFixed(2)).join(','));
    }
    return `<polyline class="ev-angle-arc" points="${pts.join(' ')}"/>`;
  },

  vectors(v, Av, aligned, showLabels, geom) {
    const tx = SVGRender._proj(geom);
    const [ox, oy] = tx([0, 0]);
    const a = aligned ? ' aligned' : '';
    const markerV = aligned ? 'ev-arr-align' : 'ev-arr-v';
    const markerA = aligned ? 'ev-arr-align' : 'ev-arr-av';
    let s = '';
    const aMag = Math.hypot(Av[0], Av[1]);
    if (aMag > 1e-3) {
      const [tipX, tipY] = tx(Av);
      s += `<line class="ev-av-shaft${a}" x1="${ox}" y1="${oy}" x2="${tipX.toFixed(2)}" y2="${tipY.toFixed(2)}" marker-end="url(#${markerA})"/>`;
      s += `<circle class="ev-av-tip${a}" cx="${tipX.toFixed(2)}" cy="${tipY.toFixed(2)}" r="5"/>`;
      if (showLabels) {
        const lx = Av[0] + (Av[0] >= 0 ? 0.32 : -0.32);
        const ly = Av[1] + (Av[1] >= 0 ? 0.32 : -0.32);
        const [px, py] = tx([lx, ly]);
        s += `<text class="ev-av-label${a}" x="${px.toFixed(2)}" y="${py.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">Av</text>`;
      }
    }
    const [tipX, tipY] = tx(v);
    s += `<line class="ev-v-shaft${a}" x1="${ox}" y1="${oy}" x2="${tipX.toFixed(2)}" y2="${tipY.toFixed(2)}" marker-end="url(#${markerV})"/>`;
    s += `<circle class="ev-v-handle${a}" cx="${tipX.toFixed(2)}" cy="${tipY.toFixed(2)}" r="7"/>`;
    if (showLabels) {
      const lx = v[0] + (v[0] >= 0 ? 0.32 : -0.32);
      const ly = v[1] + (v[1] >= 0 ? 0.32 : -0.32);
      const [px, py] = tx([lx, ly]);
      s += `<text class="ev-v-label${a}" x="${px.toFixed(2)}" y="${py.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">v</text>`;
    }
    return s;
  },
};

// =====================================================================
//  SECTION 3  ::  Scenarios + constants
// =====================================================================
const SCENARIOS = {
  diag: {
    label: 'Diagonal', A: [[2, 0], [0, 0.5]], group: 'distinct', tag: '\u03BB = 2, 0.5',
    title: 'Diagonal matrix', exTag: '2 distinct real \u00B7 \u03BB = 2, 0.5',
    body: 'A diagonal matrix scales each axis independently. The standard basis vectors are themselves <span class="ev-eig">eigenvectors</span>: <span class="ev-v">\u00EA\u2081</span> stretches by 2, <span class="ev-v">\u00EA\u2082</span> shrinks by 0.5. The <span class="ev-eig">eigendirections</span> are exactly the coordinate axes.',
  },
  symmetric: {
    label: 'Symmetric', A: [[2, 1], [1, 2]], group: 'distinct', tag: '\u03BB = 3, 1 \u22A5',
    title: 'Symmetric matrix', exTag: 'spectral theorem \u00B7 orthogonal eigenbasis',
    body: 'Every symmetric matrix has <em>perpendicular</em> <span class="ev-eig">eigenvectors</span> &mdash; that&apos;s the spectral theorem. Here the eigendirections are <code>y = x</code> (\u03BB = 3) and <code>y = \u2212x</code> (\u03BB = 1). Drag <span class="ev-v">v</span> onto either diagonal and watch <span class="ev-av">Av</span> snap.',
  },
  reflect: {
    label: 'Reflect y = x', A: [[0, 1], [1, 0]], group: 'distinct', tag: '\u03BB = 1, \u22121',
    title: 'Reflection across y = x', exTag: 'det = \u22121 \u00B7 orientation flips',
    body: 'A reflection has two <span class="ev-eig">eigendirections</span>: the mirror line itself (\u03BB = 1, vectors preserved) and the perpendicular direction (\u03BB = \u22121, vectors flipped). Determinant \u22121 confirms the orientation reversal.',
  },
  triUpper: {
    label: 'Upper triangular', A: [[3, 1], [0, 2]], group: 'distinct', tag: '\u03BB = 3, 2',
    title: 'Upper-triangular matrix', exTag: 'eigenvalues read off the diagonal',
    body: 'For triangular matrices the <span class="ev-eig">eigenvalues</span> sit on the diagonal: <code>\u03BB = 3</code> and <code>\u03BB = 2</code>. But the eigenvectors are <em>not</em> orthogonal &mdash; the off-diagonal 1 tilts the \u03BB = 2 direction away from the y-axis.',
  },
  identity: {
    label: 'Identity', A: [[1, 0], [0, 1]], group: 'repeated', tag: '\u03BB = 1',
    title: 'Identity', exTag: 'isotropic \u00B7 every direction',
    body: 'The identity maps every vector to itself. <em>Every</em> direction is an <span class="ev-eig">eigendirection</span> with \u03BB = 1. The eigenspace is all of \u211D\u00B2.',
  },
  scale2: {
    label: 'Uniform scale \u00D72', A: [[2, 0], [0, 2]], group: 'repeated', tag: '\u03BB = 2',
    title: 'Uniform scaling', exTag: 'isotropic \u00B7 \u03BB = 2 with multiplicity 2',
    body: 'Multiplies every vector by 2. Like the identity, every direction is preserved &mdash; just doubled. Repeated eigenvalue with a full 2D eigenspace: <em>diagonalizable</em>.',
  },
  shear: {
    label: 'Shear', A: [[1, 1], [0, 1]], group: 'defective', tag: '\u03BB = 1 (defective)',
    title: 'Shear', exTag: '\u03BB = 1 doubled \u00B7 one direction only',
    body: 'A shear has a <em>single</em> <span class="ev-defective">eigendirection</span> &mdash; the x-axis &mdash; with \u03BB = 1. The repeated eigenvalue yields only one independent eigenvector, so A is <span class="ev-defective">defective</span>: it can&apos;t be diagonalized. A generalized eigenvector is needed to complete the basis.',
  },
  defective2: {
    label: 'Defective \u22C5 2', A: [[2, 1], [0, 2]], group: 'defective', tag: '\u03BB = 2 (defective)',
    title: 'Defective scaling', exTag: '\u03BB = 2 doubled \u00B7 shear-on-scale',
    body: 'Repeated <span class="ev-defective">eigenvalue</span> \u03BB = 2, but only the x-axis works as an eigenvector. The off-diagonal 1 produces a shear on top of the uniform scaling \u2014 enough to collapse the second eigendirection.',
  },
  rotate30: {
    label: 'Rotate 30\u00B0',
    A: [[Math.cos(Math.PI / 6), -Math.sin(Math.PI / 6)], [Math.sin(Math.PI / 6), Math.cos(Math.PI / 6)]],
    group: 'complex', tag: 'complex \u03BB',
    title: 'Rotation by 30\u00B0', exTag: '\u03BB = e^{\u00B1i\u03B8} \u00B7 no real eigenvector',
    body: 'A rotation has <span class="ev-complex">no real eigenvectors</span> &mdash; every direction gets rotated, so nothing stays parallel to itself. The eigenvalues are complex: <code>\u03BB = cos 30\u00B0 \u00B1 i\u00B7sin 30\u00B0</code>. In \u2102\u00B2 eigenvectors exist; in \u211D\u00B2 they don&apos;t.',
  },
  rotate90: {
    label: 'Rotate 90\u00B0', A: [[0, -1], [1, 0]], group: 'complex', tag: '\u03BB = \u00B1i',
    title: 'Quarter turn', exTag: 'pure imaginary \u03BB = \u00B1i',
    body: 'A quarter-turn. Eigenvalues are <span class="ev-complex">\u00B1i</span> &mdash; pure imaginary. No vector in \u211D\u00B2 is mapped to a scalar multiple of itself; every direction lands 90\u00B0 away.',
  },
  spiral: {
    label: 'Spiral', A: [[1.1, -0.5], [0.5, 1.1]], group: 'complex', tag: 'complex \u03BB',
    title: 'Rotating spiral', exTag: '|\u03BB| > 1 \u00B7 outward spiral',
    body: 'Rotation combined with scaling. The <span class="ev-complex">complex eigenvalues</span> have magnitude greater than 1, so repeated application spirals outward. Still no real eigendirection &mdash; a hallmark of any genuine rotation component.',
  },
};

const SCENARIO_GROUPS = [
  { key: 'distinct',  label: 'Two distinct real',  tag: '2 directions',      tagClass: 'distinct' },
  { key: 'repeated',  label: 'Isotropic',          tag: 'every direction',   tagClass: 'repeated' },
  { key: 'defective', label: 'Defective',          tag: '1 direction',       tagClass: 'defective' },
  { key: 'complex',   label: 'Complex',            tag: 'no real',           tagClass: 'complex' },
];

const DEFAULT_LAYERS = {
  grid: true, eigLines: true, dirLines: true, arc: true, labels: true,
};

const ALL_LAYER_DEFS = [
  { key: 'grid', label: 'grid' },
  { key: 'eigLines', label: 'eigenlines', swatch: '#059669' },
  { key: 'dirLines', label: 'v / Av lines' },
  { key: 'arc', label: 'angle arc' },
  { key: 'labels', label: 'labels' },
];

const DEFAULT_ANIM_STEPS = [
  { num: '01', label: 'Start' },
  { num: '02', label: 'Sweep' },
  { num: '03', label: 'Snap \u03BB\u2081' },
  { num: '04', label: 'Snap \u03BB\u2082' },
];

const DEFAULT_LEDE = {
  crumb: 'Linear Algebra<span class="ev-dot">&middot;</span>Eigenvectors',
  body: 'An <span class="ev-eig"><strong>eigenvector</strong></span> is a direction <em>A</em> leaves alone &mdash; only stretches by some factor <span class="ev-eig"><em>&lambda;</em></span>. Drag <span class="ev-v">v</span> around. When <span class="ev-v">v</span> and <span class="ev-av">Av</span> line up, you&apos;ve found one. Eigenvalue is <code>|Av|/|v|</code> (signed).',
};

// =====================================================================
//  SECTION 4  ::  Hooks
// =====================================================================
function useEigenState(options = {}) {
  const {
    initialA = [[2, 0], [0, 0.5]],
    initialPreset = 'diag',
    initialLayers = DEFAULT_LAYERS,
    initialV = [2, 1],
    scenarios = SCENARIOS,
  } = options;

  const [A, setAInternal] = useState(initialA);
  const [preset, setPresetInternal] = useState(initialPreset);
  const [layers, setLayers] = useState(initialLayers);
  const [v, setV] = useState(initialV);

  const setA = useCallback((next) => {
    setAInternal(next);
    setPresetInternal(null);
  }, []);

  const selectPreset = useCallback((key) => {
    const sc = scenarios[key];
    if (!sc) return;
    setAInternal([sc.A[0].slice(), sc.A[1].slice()]);
    setPresetInternal(key);
  }, [scenarios]);

  const snapV = useCallback(() => {
    const next = Math2D.snapToEigen(A, v);
    if (next) setV(next);
  }, [A, v]);

  return { A, preset, layers, v, setA, selectPreset, setLayers, setV, snapV };
}

function useAnimState(options = {}) {
  const { initialStep = 0, initialProgress = 0, initialPlaying = false } = options;
  const [step, setStep] = useState(initialStep);
  const [progress, setProgress] = useState(initialProgress);
  const [isPlaying, setIsPlaying] = useState(initialPlaying);

  const playToggle = useCallback(() => setIsPlaying((p) => !p), []);
  const reset = useCallback(() => { setStep(0); setProgress(0); setIsPlaying(false); }, []);
  const prev = useCallback(() => setStep((s) => Math.max(0, s - 1)), []);
  const next = useCallback(() => setStep((s) => s + 1), []);

  return { step, progress, isPlaying, setStep, setProgress, setIsPlaying, playToggle, reset, prev, next };
}

// =====================================================================
//  SECTION 5  ::  Component CSS
// =====================================================================
const COMPONENT_CSS = `
.ev-root{
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

  --v:#ea580c;--av:#0891b2;
  --vSoft:rgba(234,88,12,.08);--vBorder:rgba(234,88,12,.28);
  --avSoft:rgba(8,145,178,.08);--avBorder:rgba(8,145,178,.28);
  --eigen:#059669;--eigenSoft:rgba(5,150,105,.08);--eigenBorder:rgba(5,150,105,.32);
  --align:#d97706;--alignSoft:rgba(217,119,6,.10);--alignBorder:rgba(217,119,6,.4);
  --complex:#7c3aed;--complexSoft:rgba(124,58,237,.10);--complexBorder:rgba(124,58,237,.35);
  --defective:#db2777;--defectiveSoft:rgba(219,39,119,.10);--defectiveBorder:rgba(219,39,119,.35);

  --grid:#e2e8f0;--grid-axis:#94a3b8;

  --font-display:'Fraunces',Georgia,serif;
  --font-body:'IBM Plex Sans',-apple-system,BlinkMacSystemFont,sans-serif;
  --font-mono:'JetBrains Mono',Menlo,monospace;

  --shadow-sm:0 1px 0 rgba(15,23,41,.03);
  --shadow-card:0 1px 0 rgba(15,23,41,.04),0 1px 2px rgba(15,23,41,.04);
  --radius:6px;

  color:var(--text);font-family:var(--font-body);line-height:1.5;
  -webkit-font-smoothing:antialiased;
  background:var(--bg);
}
.ev-root *{box-sizing:border-box}

.ev-app{
  display:grid;grid-template-rows:auto auto;
  gap:10px;padding:14px 24px;max-width:1340px;margin:0 auto;
  background:var(--bg);
}

/* ---- Lede ---- */
.ev-lede{display:flex;align-items:baseline;gap:14px;font-size:14px;color:var(--text-dim);line-height:1.45}
.ev-crumb{font-family:var(--font-mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--text-faint);white-space:nowrap}
.ev-crumb .ev-dot{color:var(--accent);margin:0 6px}
.ev-lede strong{color:var(--text);font-weight:500}
.ev-lede .ev-v{color:var(--v);font-weight:500}
.ev-lede .ev-av{color:var(--av);font-weight:500}
.ev-lede .ev-eig{color:var(--eigen);font-weight:500}
.ev-lede code{font-family:var(--font-mono);font-size:13px;background:var(--accent-soft);color:var(--accent-hover);padding:1px 6px;border-radius:3px}
.ev-lede em{font-style:italic;color:var(--text)}

/* ---- 3-col layout: scenarios sidebar | square canvas | info ---- */
.ev-main{
  display:grid;gap:14px;align-items:start;
  grid-template-columns:230px 620px minmax(360px,1fr);
}
.ev-scen-col,.ev-canvas-col,.ev-info-col{display:flex;flex-direction:column;gap:10px;min-width:0}
@media (max-width:1240px){
  .ev-main{grid-template-columns:1fr;justify-content:center}
}

/* ---- Canvas: 620 x 620, no padding ---- */
.ev-canvas-wrap{width:100%;display:flex;align-items:center;justify-content:center}
.ev-canvas{
  width:100%;aspect-ratio:1/1;
  background:var(--surface);
  border:1px solid var(--border);border-radius:var(--radius);
  box-shadow:var(--shadow-card);
  display:block;touch-action:none;
}
.ev-canvas.dragging{cursor:grabbing}
.ev-canvas.dragging .ev-tip-hit,.ev-canvas.dragging .ev-v-handle{cursor:grabbing}

/* ---- Readouts ---- */
.ev-readouts{display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%}
.ev-readout{
  background:var(--surface);border:1px solid var(--border);border-left:3px solid currentColor;
  padding:8px 12px;border-radius:5px;
  display:flex;align-items:baseline;gap:10px;
  font-family:var(--font-mono);font-size:14px;font-weight:600;min-width:0;
}
.ev-readout .ev-lab{font-family:var(--font-display);font-style:italic;font-size:18px;font-weight:500;flex-shrink:0}
.ev-readout .ev-eq{color:var(--text-faint);font-weight:400;flex-shrink:0}
.ev-readout .ev-val{color:var(--text);font-weight:500;font-variant-numeric:tabular-nums;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ev-readout.ev-v{color:var(--v)}
.ev-readout.ev-av{color:var(--av)}

/* ---- Card ---- */
.ev-card{
  background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);
  box-shadow:var(--shadow-card);padding:12px 14px;
}
.ev-card h2{
  font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.18em;
  text-transform:uppercase;color:var(--text-faint);margin:0 0 10px;
  display:flex;align-items:center;justify-content:space-between;
}
.ev-badge{color:var(--accent);margin-right:6px;font-weight:600}
.ev-card h2 .ev-note{font-weight:500;letter-spacing:.04em;text-transform:none;font-size:11px;color:var(--text-dim)}

/* ---- Chips (inside info col) ---- */
.ev-chips-strip{
  display:flex;flex-wrap:wrap;gap:2px;padding:4px 8px;
  background:var(--surface);border:1px solid var(--border);
  border-radius:var(--radius);box-shadow:var(--shadow-card);
}
.ev-chip{
  display:inline-flex;align-items:center;gap:6px;padding:4px 10px;
  font-family:var(--font-mono);font-size:11px;letter-spacing:.04em;
  color:var(--text-faint);background:transparent;border:1px solid transparent;
  border-radius:4px;cursor:pointer;user-select:none;transition:all .12s;
}
.ev-chip input{width:12px;height:12px;margin:0;accent-color:var(--accent);cursor:pointer}
.ev-chip:hover,.ev-chip:has(input:checked){color:var(--text);background:var(--accent-soft)}
.ev-chip .ev-sw{display:inline-block;width:11px;height:3px;border-radius:1px}

/* ---- Animation panel (in canvas col, under readouts) ---- */
.ev-anim-card{padding:12px 14px}
.ev-anim-head{
  font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;
  color:var(--text-faint);margin-bottom:10px;display:flex;align-items:center;
}
.ev-anim-head .ev-badge{color:var(--accent);margin-right:6px}
.ev-anim-steps{display:flex;gap:6px;align-items:center;margin-bottom:10px}
.ev-step-btn{
  flex:1;background:var(--surface-2);border:1px solid var(--border);
  padding:6px 8px;border-radius:4px;font-family:var(--font-mono);font-size:10.5px;
  letter-spacing:.04em;color:var(--text-dim);font-weight:600;cursor:pointer;text-align:center;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:all .12s;
}
.ev-step-btn:hover{background:var(--accent-soft);color:var(--accent);border-color:var(--accent-line)}
.ev-step-btn.active{background:var(--accent-soft);border-color:var(--accent-line);color:var(--accent-hover)}
.ev-step-btn .num{display:block;font-size:9px;color:var(--text-faint);margin-bottom:2px;letter-spacing:.1em}
.ev-step-btn.active .num{color:var(--accent)}
.ev-anim-progress{
  height:5px;background:var(--surface-2);border-radius:3px;overflow:hidden;position:relative;margin-bottom:10px;
}
.ev-anim-progress .fill{
  position:absolute;left:0;top:0;bottom:0;
  background:linear-gradient(90deg,var(--v),var(--eigen));border-radius:3px;
  transition:width .2s;
}
.ev-anim-controls{display:flex;gap:6px;align-items:center}
.ev-anim-ctrl{
  background:var(--surface-2);border:1px solid var(--border);
  width:30px;height:28px;border-radius:4px;cursor:pointer;
  font-family:var(--font-mono);font-size:12px;color:var(--text-dim);font-weight:600;
  display:inline-flex;align-items:center;justify-content:center;padding:0;transition:all .12s;
}
.ev-anim-ctrl:hover{background:var(--accent-soft);color:var(--accent);border-color:var(--accent-line)}
.ev-anim-ctrl.play{
  background:var(--accent);border-color:var(--accent);color:#fff;
  width:auto;padding:0 14px;letter-spacing:.08em;font-size:10.5px;text-transform:uppercase;
}
.ev-anim-ctrl.play:hover{background:var(--accent-hover);color:#fff;border-color:var(--accent-hover)}
.ev-anim-time{
  font-family:var(--font-mono);font-size:11px;color:var(--text-faint);
  font-variant-numeric:tabular-nums;margin-left:6px;
}
.ev-anim-ctrl.reset{margin-left:auto;width:auto;padding:0 10px;gap:6px;display:inline-flex;align-items:center}
.ev-anim-ctrl.reset .lbl{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;font-weight:600}
.ev-anim-ctrl.reset svg{display:block}

/* ---- Explanation ---- */
.ev-ex-card{}
.ev-ex-header{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:8px;padding-bottom:8px;border-bottom:1px solid var(--border)}
.ev-ex-header h3{font-family:var(--font-display);font-weight:500;font-size:19px;color:var(--text);margin:0;letter-spacing:-.01em;line-height:1.2}
.ev-ex-tag{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--text-faint);white-space:nowrap}
.ev-ex-body{color:var(--text-soft);font-size:13.5px;line-height:1.55;margin:0}
.ev-ex-body .ev-v{color:var(--v);font-weight:500}
.ev-ex-body .ev-av{color:var(--av);font-weight:500}
.ev-ex-body .ev-eig{color:var(--eigen);font-weight:500}
.ev-ex-body .ev-complex{color:var(--complex);font-weight:500}
.ev-ex-body .ev-defective{color:var(--defective);font-weight:500}
.ev-ex-body code{font-family:var(--font-mono);font-size:12px;background:var(--accent-soft);color:var(--accent-hover);padding:1px 5px;border-radius:3px}
.ev-ex-body em{font-style:italic;color:var(--text)}

/* ---- Live card ---- */
.ev-live-grid{display:grid;grid-template-columns:auto 1fr;gap:6px 14px;align-items:baseline}
.ev-live-key{font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--text-faint)}
.ev-live-val{font-family:var(--font-mono);font-size:12.5px;color:var(--text);font-weight:500;text-align:right;font-variant-numeric:tabular-nums}
.ev-live-val.ev-v{color:var(--v)}
.ev-live-val.ev-av{color:var(--av)}
.ev-live-val.ev-angle{font-weight:600}
.ev-status-strip{
  margin-top:10px;padding:8px 12px;border-radius:5px;
  display:flex;align-items:center;gap:8px;
  font-family:var(--font-mono);font-size:11.5px;letter-spacing:.04em;
  border:1px solid var(--border);background:var(--surface-2);color:var(--text-dim);
  transition:all .15s;
}
.ev-status-strip.aligned{background:var(--alignSoft);border-color:var(--alignBorder);color:var(--align);font-weight:600}
.ev-status-strip .ev-badge-eig{
  display:inline-flex;align-items:center;justify-content:center;
  width:18px;height:18px;border-radius:50%;background:var(--align);color:#fff;
  font-weight:700;font-size:11px;
}
.ev-status-strip .ev-stress{font-weight:600}

/* ---- Eigen structure ---- */
.ev-eigen-struct{display:flex;flex-direction:column;gap:8px}
.ev-eig-row{
  display:flex;align-items:center;gap:8px;
  font-family:var(--font-mono);font-size:11.5px;
  padding:6px 10px;border-radius:5px;background:var(--surface-2);
  border:1px solid var(--border);
}
.ev-eig-row.complex{background:var(--complexSoft);border-color:var(--complexBorder)}
.ev-eig-row.defective{background:var(--defectiveSoft);border-color:var(--defectiveBorder)}
.ev-eig-row.isotropic{background:var(--eigenSoft);border-color:var(--eigenBorder)}
.ev-eig-row .ev-lambda{font-family:var(--font-display);font-style:italic;font-size:15px;font-weight:500;color:var(--text)}
.ev-eig-row .ev-lambda.complex{color:var(--complex)}
.ev-eig-row .ev-lambda.defective{color:var(--defective)}
.ev-eig-row .ev-eq{color:var(--text-faint)}
.ev-eig-row .ev-val{color:var(--eigen);font-weight:600;font-variant-numeric:tabular-nums}
.ev-eig-row .ev-val.complex{color:var(--complex)}
.ev-eig-row .ev-val.defective{color:var(--defective)}
.ev-eig-row .ev-vec{margin-left:auto;font-size:10.5px;color:var(--text-dim)}
.ev-eig-row .ev-vec-arr{
  display:inline-flex;align-items:center;font-family:var(--font-mono);
  border:1px solid var(--border);background:#fff;border-radius:3px;
  padding:1px 6px;margin-left:4px;color:var(--eigen);font-weight:600;
  font-variant-numeric:tabular-nums;
}
.ev-eig-row.complex .ev-vec-arr{color:var(--complex)}
.ev-eig-row.defective .ev-vec-arr{color:var(--defective)}
.ev-eig-row .ev-aside{font-size:10.5px;color:var(--text-dim)}

.ev-snap-btn{
  margin-top:8px;padding:8px 12px;
  background:var(--eigen);color:#fff;border:none;border-radius:5px;
  font-family:var(--font-body);font-size:12.5px;font-weight:500;
  cursor:pointer;transition:all .12s;width:100%;
  display:flex;align-items:center;justify-content:center;gap:6px;
}
.ev-snap-btn:hover{background:#047857}
.ev-snap-btn:disabled{background:var(--surface-2);color:var(--text-faint);cursor:not-allowed;border:1px solid var(--border)}
.ev-snap-btn svg{width:13px;height:13px;fill:currentColor}

.ev-char-poly{
  font-family:var(--font-mono);font-size:11px;color:var(--text-dim);
  text-align:center;padding:6px 0;border-top:1px solid var(--border);
  margin-top:4px;letter-spacing:.02em;
}
.ev-char-poly code{color:var(--text);font-weight:500;background:var(--accent-soft);padding:1px 4px;border-radius:3px}

/* ---- Scenarios sidebar (single column) ---- */
.ev-scenarios-card{padding:12px 14px}
.ev-scenarios-card h2{margin-bottom:8px}
.ev-scen-sections{display:flex;flex-direction:column;gap:13px}
.ev-scen-section{min-width:0}
.ev-scen-section-label{
  display:flex;align-items:center;justify-content:space-between;gap:6px;
  font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.08em;
  text-transform:uppercase;color:var(--text-dim);margin-bottom:6px;
}
.ev-scen-section-label .ev-tag{
  padding:2px 7px;border-radius:3px;font-size:9.5px;font-weight:700;
  letter-spacing:.05em;text-transform:uppercase;
  border:1px solid transparent;white-space:nowrap;
}
.ev-scen-section-label .ev-tag.distinct{background:var(--eigenSoft);color:var(--eigen);border-color:var(--eigenBorder)}
.ev-scen-section-label .ev-tag.repeated{background:var(--accent-soft);color:var(--accent-hover);border-color:rgba(43,91,215,.35)}
.ev-scen-section-label .ev-tag.defective{background:var(--defectiveSoft);color:var(--defective);border-color:var(--defectiveBorder)}
.ev-scen-section-label .ev-tag.complex{background:var(--complexSoft);color:var(--complex);border-color:var(--complexBorder)}

.ev-preset-grid{display:flex;flex-direction:column;gap:4px}
.ev-preset-btn{
  background:var(--surface-2);border:1px solid var(--border);
  border-left:3px solid var(--border-strong);
  color:var(--text-soft);padding:6px 10px;
  font-family:var(--font-body);font-size:12.5px;font-weight:500;
  cursor:pointer;border-radius:4px;text-align:left;transition:all .12s;
  display:flex;justify-content:space-between;align-items:baseline;gap:6px;
}
.ev-preset-btn:hover{background:var(--accent-soft);border-color:var(--accent-line);color:var(--accent-hover)}
.ev-preset-btn.active{background:var(--accent-soft);border-color:var(--accent-line);color:var(--accent-hover);font-weight:600;border-left-color:var(--accent)}
.ev-preset-btn .ev-ptag{font-family:var(--font-mono);font-size:9.5px;letter-spacing:.02em;color:var(--text-faint)}
.ev-preset-btn.active .ev-ptag{color:var(--accent)}
.ev-preset-btn.distinct{border-left-color:var(--eigen)}
.ev-preset-btn.repeated{border-left-color:var(--accent)}
.ev-preset-btn.defective{border-left-color:var(--defective)}
.ev-preset-btn.complex{border-left-color:var(--complex)}

/* ---- SVG primitives ---- */
.ev-grid-line{stroke:var(--grid);stroke-width:1;fill:none}
.ev-grid-axis{stroke:var(--grid-axis);stroke-width:1.2;fill:none}
.ev-v-dir{stroke:var(--v);stroke-width:1.1;fill:none;stroke-dasharray:5 4;opacity:.45}
.ev-av-dir{stroke:var(--av);stroke-width:1.1;fill:none;stroke-dasharray:5 4;opacity:.45}
.ev-eig-line{stroke:var(--eigen);stroke-width:1.6;fill:none;stroke-dasharray:8 5;opacity:.7}
.ev-eig-halo{stroke:var(--eigen);stroke-width:9;fill:none;opacity:.08}
.ev-eig-label{fill:var(--eigen);font-family:var(--font-display);font-style:italic;font-size:13px;font-weight:600}
.ev-iso-ring{fill:none;stroke:var(--eigen);stroke-width:1.2;stroke-dasharray:3 3;opacity:.55}
.ev-v-shaft{stroke:var(--v);stroke-width:2.6;fill:none;stroke-linecap:round}
.ev-av-shaft{stroke:var(--av);stroke-width:2.6;fill:none;stroke-linecap:round}
.ev-v-shaft.aligned{stroke:var(--align);stroke-width:3}
.ev-av-shaft.aligned{stroke:var(--align);stroke-width:3}
.ev-v-handle{fill:var(--v);stroke:#fff;stroke-width:2;cursor:grab}
.ev-v-handle.aligned{fill:var(--align)}
.ev-av-tip{fill:var(--av);stroke:#fff;stroke-width:2}
.ev-av-tip.aligned{fill:var(--align)}
.ev-v-label{fill:var(--v);font-family:var(--font-display);font-style:italic;font-size:16px;font-weight:600}
.ev-av-label{fill:var(--av);font-family:var(--font-display);font-style:italic;font-size:16px;font-weight:600}
.ev-v-label.aligned,.ev-av-label.aligned{fill:var(--align)}
.ev-origin-dot{fill:var(--text-soft)}
.ev-angle-arc{fill:none;stroke:var(--text-faint);stroke-width:1.2;opacity:.5;stroke-dasharray:2 2}
.ev-tip-hit{fill:transparent;cursor:grab}
`;

// =====================================================================
//  SECTION 6  ::  Sub-components
// =====================================================================

function EigenCanvas({
  A = [[1, 0], [0, 1]],
  v = [1.5, 1],
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

  const align = Math2D.alignment(A, v);
  const Av = align.Av;
  const aligned = align.aligned;

  let inner = '';
  if (layers.grid) inner += SVGRender.grid(geom);
  if (layers.eigLines) inner += SVGRender.eigLines(A, layers.labels, geom);
  if (layers.dirLines) inner += SVGRender.dirLines(v, Av, aligned, geom);
  if (layers.arc) inner += SVGRender.angleArc(v, Av, geom);
  inner += SVGRender.vectors(v, Av, aligned, layers.labels, geom);
  inner += SVGRender.origin(geom);

  const tx = SVGRender._proj(geom);
  const [vHitX, vHitY] = tx(v);

  return (
    <svg
      ref={svgRef}
      className={'ev-canvas' + (isDragging ? ' dragging' : '') + (className ? ' ' + className : '')}
      style={style}
      viewBox={`0 0 ${geom.size} ${geom.size}`}
      xmlns="http://www.w3.org/2000/svg"
      onPointerDown={draggable ? onPointerDown : undefined}
      onPointerMove={draggable ? onPointerMove : undefined}
      onPointerUp={draggable ? onPointerUp : undefined}
      onPointerCancel={draggable ? onPointerUp : undefined}
    >
      <defs>
        <marker id="ev-arr-v" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
          <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#ea580c" />
        </marker>
        <marker id="ev-arr-av" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
          <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#0891b2" />
        </marker>
        <marker id="ev-arr-align" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
          <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#d97706" />
        </marker>
      </defs>
      <g dangerouslySetInnerHTML={{ __html: inner }} />
      {draggable && onVChange && (
        <circle className="ev-tip-hit" data-handle="v" cx={vHitX} cy={vHitY} r={14} />
      )}
    </svg>
  );
}

function LayerChips({ layers = {}, onChange = () => {}, enabledLayers, layerDefs = ALL_LAYER_DEFS }) {
  const defs = enabledLayers ? layerDefs.filter((d) => enabledLayers.includes(d.key)) : layerDefs;
  return (
    <div className="ev-chips-strip">
      {defs.map((d) => (
        <label key={d.key} className="ev-chip">
          <input
            type="checkbox"
            checked={!!layers[d.key]}
            onChange={(e) => onChange({ ...layers, [d.key]: e.target.checked })}
          />
          {d.label}
          {d.swatch && <span className="ev-sw" style={{ background: d.swatch }} />}
        </label>
      ))}
    </div>
  );
}

function CanvasReadout({ kind = 'v', label = 'v', value = '(0, 0)' }) {
  return (
    <div className={`ev-readout ev-${kind}`}>
      <span className="ev-lab">{label}</span>
      <span className="ev-eq">=</span>
      <span className="ev-val">{value}</span>
    </div>
  );
}

function AnimationCard({
  steps = DEFAULT_ANIM_STEPS,
  step = 0,
  progress = 0,
  isPlaying = false,
  onStep,
  onPlayToggle,
  onPrev,
  onNext,
  onReset,
  duration = 1,
}) {
  const pct = Math.max(0, Math.min(1, progress)) * 100;
  const time = (progress * duration).toFixed(2);
  const total = duration.toFixed(2);
  return (
    <div className="ev-card ev-anim-card">
      <div className="ev-anim-head"><span className="ev-badge">&#9656;</span>Animation</div>
      <div className="ev-anim-steps">
        {steps.map((s, i) => (
          <button
            key={i}
            className={'ev-step-btn' + (i === step ? ' active' : '')}
            onClick={() => onStep && onStep(i)}
            type="button"
          >
            <span className="num">{s.num}</span>{s.label}
          </button>
        ))}
      </div>
      <div className="ev-anim-progress">
        <div className="fill" style={{ width: pct + '%' }} />
      </div>
      <div className="ev-anim-controls">
        <button className="ev-anim-ctrl" title="Previous step" onClick={onPrev} type="button">&#9664;</button>
        <button className="ev-anim-ctrl play" onClick={onPlayToggle} type="button">{isPlaying ? 'Pause' : 'Play'}</button>
        <button className="ev-anim-ctrl" title="Next step" onClick={onNext} type="button">&#9654;</button>
        <span className="ev-anim-time">{time} / {total}</span>
        <button className="ev-anim-ctrl reset" title="Reset" onClick={onReset} type="button">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 1 0 3-6.7" />
            <polyline points="3 4 3 10 9 10" />
          </svg>
          <span className="lbl">Reset</span>
        </button>
      </div>
    </div>
  );
}

function LiveCard({ A = [[1, 0], [0, 1]], v = [1, 0] }) {
  const align = Math2D.alignment(A, v);
  return (
    <div className="ev-card">
      <h2>
        <span><span className="ev-badge">01</span>Live</span>
        <span className="ev-note">{align.aligned ? 'aligned' : 'drag v'}</span>
      </h2>
      <div className="ev-live-grid">
        <span className="ev-live-key">|v|</span>
        <span className="ev-live-val ev-v">{Math2D.fmt(align.vMag)}</span>
        <span className="ev-live-key">|Av|</span>
        <span className="ev-live-val ev-av">{Math2D.fmt(align.aMag)}</span>
        <span className="ev-live-key">|Av| / |v|</span>
        <span className="ev-live-val">{align.vMag > 1e-6 ? Math2D.fmt(align.aMag / align.vMag) : '\u2014'}</span>
        <span className="ev-live-key">angle(v, Av)</span>
        <span className="ev-live-val ev-angle">{Math2D.fmt(align.angleDeg)}&deg;</span>
      </div>
      <div className={'ev-status-strip' + (align.aligned ? ' aligned' : '')}>
        {align.aligned ? (
          <>
            <span className="ev-badge-eig">!</span>
            <span><strong>v is an eigenvector</strong> &middot; &lambda; &asymp; <span className="ev-stress">{Math2D.fmt(align.lambda)}</span></span>
          </>
        ) : (
          <span>Drag <span className="ev-stress">v</span> until <span className="ev-stress">Av</span> aligns with it.</span>
        )}
      </div>
    </div>
  );
}

const ICON_SNAP = <svg viewBox="0 0 24 24"><path d="M12 2L9 9H2l5.5 4-2 7L12 16l6.5 4-2-7L22 9h-7z" /></svg>;

function EigenStructureCard({ A = [[1, 0], [0, 1]], onSnap }) {
  const es = Math2D.eigenStructure(A);
  const tr = es.ev.tr, det = es.ev.det, disc = es.ev.disc;
  let rows = null;
  if (es.kind === 'distinct') {
    rows = es.ev.vals.map((lam, i) => {
      const vec = es.vecs[i];
      return (
        <div className="ev-eig-row" key={i}>
          <span className="ev-lambda">&lambda;<sub>{i + 1}</sub></span>
          <span className="ev-eq">=</span>
          <span className="ev-val">{Math2D.fmt(lam)}</span>
          <span className="ev-vec">v
            <span className="ev-vec-arr">({Math2D.fmt(vec[0])}, {Math2D.fmt(vec[1])})</span>
          </span>
        </div>
      );
    });
  } else if (es.kind === 'defective') {
    rows = (
      <>
        <div className="ev-eig-row defective">
          <span className="ev-lambda defective">&lambda;</span>
          <span className="ev-eq">=</span>
          <span className="ev-val defective">{Math2D.fmt(es.lambda)}</span>
          <span className="ev-vec">defective (one vec)
            <span className="ev-vec-arr">({Math2D.fmt(es.vec[0])}, {Math2D.fmt(es.vec[1])})</span>
          </span>
        </div>
        <div className="ev-eig-row defective">
          <span className="ev-aside">Generalized eigenvector needed for full basis.</span>
        </div>
      </>
    );
  } else if (es.kind === 'isotropic') {
    rows = (
      <div className="ev-eig-row isotropic">
        <span className="ev-lambda">&lambda;</span>
        <span className="ev-eq">=</span>
        <span className="ev-val">{Math2D.fmt(es.lambda)}</span>
        <span className="ev-vec">every direction is eigen</span>
      </div>
    );
  } else if (es.kind === 'complex') {
    const re = es.ev.vals[0].re;
    const im = Math.abs(es.ev.vals[0].im);
    rows = (
      <>
        <div className="ev-eig-row complex">
          <span className="ev-lambda complex">&lambda;</span>
          <span className="ev-eq">=</span>
          <span className="ev-val complex">{Math2D.fmt(re)} &plusmn; {Math2D.fmt(im)}i</span>
          <span className="ev-vec">no real eigenvector</span>
        </div>
        <div className="ev-eig-row complex">
          <span className="ev-aside">A rotates every direction; no fixed line in &#8477;&sup2;.</span>
        </div>
      </>
    );
  }

  const snapDisabled = es.kind === 'complex' || !onSnap;
  const snapLabel = es.kind === 'complex' ? 'No real eigenvectors' : 'Snap to nearest eigendirection';

  return (
    <div className="ev-card">
      <h2><span><span className="ev-badge">02</span>Eigen structure of A</span></h2>
      <div className="ev-eigen-struct">{rows}</div>
      <div className="ev-char-poly">
        &lambda;&sup2; &minus; <code>{Math2D.fmt(tr)}</code>&middot;&lambda; + <code>{Math2D.fmt(det)}</code> = 0
        &nbsp;&middot;&nbsp; &Delta; = {Math2D.fmt(disc)}
      </div>
      <button className="ev-snap-btn" onClick={onSnap} disabled={snapDisabled}>
        {ICON_SNAP}
        <span>{snapLabel}</span>
      </button>
    </div>
  );
}

function ExplanationCard({ preset = 'diag', scenarios = SCENARIOS, override }) {
  let sc = scenarios[preset] || scenarios[Object.keys(scenarios)[0]];
  if (override && override.byPreset && override.byPreset[preset]) sc = override.byPreset[preset];
  if (!sc) return null;
  const title = sc.title || sc.label;
  const tag = sc.exTag || sc.tag;
  const body = sc.body || '';
  return (
    <div className="ev-card ev-ex-card">
      <div className="ev-ex-header">
        <h3 dangerouslySetInnerHTML={{ __html: title }} />
        <span className="ev-ex-tag" dangerouslySetInnerHTML={{ __html: tag }} />
      </div>
      <p className="ev-ex-body" dangerouslySetInnerHTML={{ __html: body }} />
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
}) {
  const visible = visibleScenarios
    ? Object.fromEntries(visibleScenarios.map((k) => [k, scenarios[k]]).filter(([, s]) => s))
    : scenarios;
  return (
    <div className="ev-card ev-scenarios-card">
      <h2><span><span className="ev-badge">{badge}</span>Scenarios</span></h2>
      <div className="ev-scen-sections">
        {groups.map((g) => {
          const items = Object.entries(visible).filter(([, sc]) => sc.group === g.key);
          if (!items.length) return null;
          return (
            <div className="ev-scen-section" key={g.key}>
              <div className="ev-scen-section-label">
                <span>{g.label}</span>
                <span className={`ev-tag ${g.tagClass}`}>{g.tag}</span>
              </div>
              <div className="ev-preset-grid">
                {items.map(([key, sc]) => (
                  <button
                    key={key}
                    className={`ev-preset-btn ${g.tagClass}${preset === key ? ' active' : ''}`}
                    onClick={() => onSelect(key)}
                  >
                    <span>{sc.label}</span>
                    <span className="ev-ptag">{sc.tag}</span>
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
export function EigenVectorsCore({
  initialA, initialPreset, initialLayers, initialV, scenarios,
  children,
}) {
  const state = useEigenState({ initialA, initialPreset, initialLayers, initialV, scenarios });
  if (typeof children === 'function') return children(state);
  return null;
}

export default function EigenVectors({
  lede,
  ledeCrumb = DEFAULT_LEDE.crumb,
  ledeBody = DEFAULT_LEDE.body,
  initialA, initialPreset, initialLayers, initialV, scenarios,
  layerChips, canvas, explanation, liveCard, eigenStructure, scenariosPanel, animation,
  visibleScenarios, enabledLayers, explanationOverride,
  animSteps = DEFAULT_ANIM_STEPS,
  layout,
  className, style,
}) {
  const anim = useAnimState();

  return (
    <EigenVectorsCore
      initialA={initialA}
      initialPreset={initialPreset}
      initialLayers={initialLayers}
      initialV={initialV}
      scenarios={scenarios}
    >
      {(ctx) => {
        const renderLede = () => {
          if (lede !== undefined) return lede;
          if (ledeCrumb === null && ledeBody === null) return null;
          return (
            <div className="ev-lede">
              {ledeCrumb && <span className="ev-crumb" dangerouslySetInnerHTML={{ __html: ledeCrumb }} />}
              {ledeBody && <span dangerouslySetInnerHTML={{ __html: ledeBody }} />}
            </div>
          );
        };

        const slotChips = layerChips !== undefined ? layerChips : (
          <LayerChips layers={ctx.layers} onChange={ctx.setLayers} enabledLayers={enabledLayers} />
        );
        const slotCanvas = canvas !== undefined ? canvas : (
          <EigenCanvas A={ctx.A} v={ctx.v} layers={ctx.layers} onVChange={ctx.setV} />
        );
        const slotExp = explanation !== undefined ? explanation : (
          <ExplanationCard preset={ctx.preset} scenarios={scenarios || SCENARIOS} override={explanationOverride} />
        );
        const slotLive = liveCard !== undefined ? liveCard : (
          <LiveCard A={ctx.A} v={ctx.v} />
        );
        const slotStruct = eigenStructure !== undefined ? eigenStructure : (
          <EigenStructureCard A={ctx.A} onSnap={ctx.snapV} />
        );
        const slotScenarios = scenariosPanel !== undefined ? scenariosPanel : (
          <ScenariosPanel
            scenarios={scenarios || SCENARIOS}
            preset={ctx.preset}
            onSelect={ctx.selectPreset}
            visibleScenarios={visibleScenarios}
          />
        );
        const slotAnim = animation !== undefined ? animation : (
          <AnimationCard
            steps={animSteps}
            step={anim.step}
            progress={anim.progress}
            isPlaying={anim.isPlaying}
            onStep={anim.setStep}
            onPlayToggle={anim.playToggle}
            onPrev={anim.prev}
            onNext={anim.next}
            onReset={anim.reset}
          />
        );

        if (typeof layout === 'function') {
          return (
            <div className={'ev-root ' + (className || '')} style={style}>
              <style dangerouslySetInnerHTML={{ __html: COMPONENT_CSS }} />
              {layout(ctx)}
            </div>
          );
        }

        return (
          <div className={'ev-root ' + (className || '')} style={style}>
            <style dangerouslySetInnerHTML={{ __html: COMPONENT_CSS }} />
            <div className="ev-app">
              {renderLede()}
              <main className="ev-main">
                <aside className="ev-scen-col">
                  {slotScenarios}
                </aside>
                <section className="ev-canvas-col">
                  <div className="ev-canvas-wrap">{slotCanvas}</div>
                  <div className="ev-readouts">
                    <CanvasReadout kind="v" label="v" value={Math2D.fmtPair(ctx.v)} />
                    <CanvasReadout kind="av" label="Av" value={Math2D.fmtPair(Math2D.apply(ctx.A, ctx.v))} />
                  </div>
                  {slotAnim}
                </section>
                <section className="ev-info-col">
                  {slotExp}
                  {slotChips}
                  {slotLive}
                  {slotStruct}
                </section>
              </main>
            </div>
          </div>
        );
      }}
    </EigenVectorsCore>
  );
}

export {
  EigenCanvas, LayerChips, CanvasReadout,
  LiveCard, EigenStructureCard, ExplanationCard, ScenariosPanel, AnimationCard,
  useEigenState, useAnimState,
  Math2D, SVGRender,
  SCENARIOS, SCENARIO_GROUPS, DEFAULT_LAYERS, DEFAULT_GEOM, ALL_LAYER_DEFS, DEFAULT_ANIM_STEPS,
};