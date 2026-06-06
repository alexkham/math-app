'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

// =====================================================================
//  SECTION 1  ::  Math2D
// =====================================================================
const Math2D = {
  apply: (M, p) => [M[0][0] * p[0] + M[0][1] * p[1], M[1][0] * p[0] + M[1][1] * p[1]],
  det: (M) => M[0][0] * M[1][1] - M[0][1] * M[1][0],

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

  fmt(x) {
    if (Math.abs(x) < 1e-9) return '0';
    const r = Math.round(x * 100) / 100;
    return r.toFixed(2).replace(/\.?0+$/, '') || '0';
  },

  fmtPair(p) { return `(${Math2D.fmt(p[0])}, ${Math2D.fmt(p[1])})`; },

  rotMatrix(deg) {
    const r = deg * Math.PI / 180;
    const c = Math.cos(r), s = Math.sin(r);
    return [[c, -s], [s, c]];
  },
};

// =====================================================================
//  SECTION 2  ::  SVGRender
// =====================================================================
const DEFAULT_GEOM = { size: 460, scale: 40, gridR: 6 };

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
      const cls = i === 0 ? 'ki-grid-axis' : 'ki-grid-line';
      const [x1, y1] = tx([-R, i]);
      const [x2, y2] = tx([R, i]);
      s += `<line class="${cls}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
      const [x3, y3] = tx([i, -R]);
      const [x4, y4] = tx([i, R]);
      s += `<line class="${cls}" x1="${x3}" y1="${y3}" x2="${x4}" y2="${y4}"/>`;
    }
    return s;
  },

  lineThroughOrigin(dir, lineCls, haloCls, geom) {
    const tx = SVGRender._proj(geom);
    const R = geom.gridR;
    const [x1, y1] = tx([-R * dir[0], -R * dir[1]]);
    const [x2, y2] = tx([R * dir[0], R * dir[1]]);
    return `<line class="${haloCls}" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`
      + `<line class="${lineCls}" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
  },

  labelOnLine(dir, text, cls, geom) {
    const tx = SVGRender._proj(geom);
    const perp = [-dir[1], dir[0]];
    const p = [4.6 * dir[0] + 0.55 * perp[0], 4.6 * dir[1] + 0.55 * perp[1]];
    const [x, y] = tx(p);
    return `<text class="${cls}" x="${x.toFixed(2)}" y="${y.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">${text}</text>`;
  },

  origin(geom) {
    const tx = SVGRender._proj(geom);
    const [ox, oy] = tx([0, 0]);
    return `<circle class="ki-origin-dot" cx="${ox}" cy="${oy}" r="2.5"/>`;
  },

  kerLayer(A, showLabels, geom) {
    const ki = Math2D.kerImg(A);
    const tx = SVGRender._proj(geom);
    if (ki.rank === 1) {
      let s = SVGRender.lineThroughOrigin(ki.ker, 'ki-kernel-line', 'ki-kernel-halo', geom);
      if (showLabels) s += SVGRender.labelOnLine(ki.ker, 'ker A', 'ki-ker-label', geom);
      return s;
    }
    if (ki.rank === 0) {
      const [ox, oy] = tx([0, 0]);
      let s = '';
      s += `<circle class="ki-zero-ring" cx="${ox}" cy="${oy}" r="36"/>`;
      s += `<circle class="ki-zero-ring" cx="${ox}" cy="${oy}" r="72"/>`;
      s += `<circle class="ki-zero-ring" cx="${ox}" cy="${oy}" r="118"/>`;
      if (showLabels) s += `<text class="ki-ker-label" x="${ox}" y="${oy - 138}" text-anchor="middle">ker A = \u211D\u00B2</text>`;
      return s;
    }
    // rank 2 — trivial
    const [ox, oy] = tx([0, 0]);
    let s = `<circle class="ki-trivial-ring" cx="${ox}" cy="${oy}" r="12"/>`;
    if (showLabels) s += `<text class="ki-trivial-label" x="${ox + 18}" y="${oy - 12}">ker A = {0}</text>`;
    return s;
  },

  imgLayer(A, showLabels, geom) {
    const ki = Math2D.kerImg(A);
    const tx = SVGRender._proj(geom);
    if (ki.rank === 1) {
      let s = SVGRender.lineThroughOrigin(ki.img, 'ki-image-line', 'ki-image-halo', geom);
      if (showLabels) s += SVGRender.labelOnLine(ki.img, 'im A', 'ki-img-label', geom);
      return s;
    }
    if (ki.rank === 0) {
      const [ox, oy] = tx([0, 0]);
      let s = '';
      s += `<circle cx="${ox}" cy="${oy}" r="14" fill="#059669" opacity="0.14"/>`;
      s += `<circle cx="${ox}" cy="${oy}" r="22" fill="none" stroke="#059669" stroke-width="1" opacity="0.55" stroke-dasharray="3 3"/>`;
      if (showLabels) s += `<text class="ki-img-label" x="${ox}" y="${oy - 32}" text-anchor="middle">im A = {0}</text>`;
      return s;
    }
    return '';
  },

  swarm(A, side, swarmPoints, geom) {
    const tx = SVGRender._proj(geom);
    let s = '';
    for (const p of swarmPoints) {
      const q = side === 'codomain' ? Math2D.apply(A, p) : p;
      const [x, y] = tx(q);
      const cls = side === 'codomain' ? 'ki-swarm-dot-out' : 'ki-swarm-dot-in';
      s += `<circle class="${cls}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.2"/>`;
    }
    return s;
  },

  trail(trail, side, geom) {
    if (!trail || !trail.length) return '';
    const tx = SVGRender._proj(geom);
    const n = trail.length;
    let s = '';
    for (let i = 0; i < n; i++) {
      const entry = trail[i];
      const age = (n - i) / n;
      const opacity = Math.max(0.06, 0.55 * (1 - age * 0.85));
      const p = side === 'domain' ? entry.v : entry.av;
      const [x, y] = tx(p);
      const cls = side === 'domain' ? 'ki-trail-dot-v' : 'ki-trail-dot-av';
      s += `<circle class="${cls}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.2" opacity="${opacity.toFixed(2)}"/>`;
    }
    return s;
  },

  vArrow(v, showLabels, geom) {
    const tx = SVGRender._proj(geom);
    const [ox, oy] = tx([0, 0]);
    const [tipX, tipY] = tx(v);
    let s = '';
    s += `<line class="ki-v-shaft" x1="${ox}" y1="${oy}" x2="${tipX.toFixed(2)}" y2="${tipY.toFixed(2)}" marker-end="url(#ki-arr-v)"/>`;
    s += `<circle class="ki-v-handle" cx="${tipX.toFixed(2)}" cy="${tipY.toFixed(2)}" r="7"/>`;
    if (showLabels) {
      const lx = v[0] + (v[0] >= 0 ? 0.32 : -0.32);
      const ly = v[1] + (v[1] >= 0 ? 0.32 : -0.32);
      const [px, py] = tx([lx, ly]);
      s += `<text class="ki-v-label" x="${px.toFixed(2)}" y="${py.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">v</text>`;
    }
    return s;
  },

  avArrow(A, v, showLabels, geom) {
    const tx = SVGRender._proj(geom);
    const [ox, oy] = tx([0, 0]);
    const Av = Math2D.apply(A, v);
    const mag = Math.hypot(Av[0], Av[1]);
    let s = '';
    if (mag < 1e-3) {
      s += `<circle class="ki-collapsed-ring" cx="${ox}" cy="${oy}" r="11"/>`;
      s += `<circle class="ki-collapsed-ring" cx="${ox}" cy="${oy}" r="20"/>`;
      if (showLabels) s += `<text class="ki-av-label" x="${ox}" y="${oy + 36}" text-anchor="middle" fill="#dc2626">Av = 0</text>`;
    } else {
      const [tipX, tipY] = tx(Av);
      s += `<line class="ki-av-shaft" x1="${ox}" y1="${oy}" x2="${tipX.toFixed(2)}" y2="${tipY.toFixed(2)}" marker-end="url(#ki-arr-av)"/>`;
      s += `<circle class="ki-av-tip" cx="${tipX.toFixed(2)}" cy="${tipY.toFixed(2)}" r="6"/>`;
      if (showLabels) {
        const lx = Av[0] + (Av[0] >= 0 ? 0.36 : -0.36);
        const ly = Av[1] + (Av[1] >= 0 ? 0.36 : -0.36);
        const [px, py] = tx([lx, ly]);
        s += `<text class="ki-av-label" x="${px.toFixed(2)}" y="${py.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">Av</text>`;
      }
    }
    return s;
  },
};

// =====================================================================
//  SECTION 3  ::  Scenarios + constants
// =====================================================================
const SQ = Math.SQRT1_2;
const COS30 = Math.cos(Math.PI / 6);
const SIN30 = Math.sin(Math.PI / 6);

const SCENARIOS = {
  identity: {
    A: () => [[1, 0], [0, 1]], group: 'full', label: 'Identity',
    title: 'Identity', tag: 'rank 2 \u00B7 det 1',
    body: 'The identity matrix maps every vector to itself. Drag <span class="ki-v">v</span> anywhere \u2014 <span class="ki-av">Av</span> follows exactly. The <span class="ki-ker">kernel</span> is just the origin; the <span class="ki-img">image</span> is the entire codomain.',
  },
  rotate: {
    A: (angle) => Math2D.rotMatrix(angle || 45), group: 'full', label: 'Rotate', isAngular: true,
    title: (angle) => `Rotate ${angle || 45}\u00B0`, tag: 'rank 2 \u00B7 det 1 \u00B7 rigid',
    body: (angle) => `A rigid rotation by ${angle || 45}\u00B0. Lengths and angles preserved. <span class="ki-ker">ker</span> = {0}, <span class="ki-img">im</span> = &#8477;&sup2;. No direction is collapsed.`,
  },
  shearX: {
    A: () => [[1, 1], [0, 1]], group: 'full', label: 'Shear x',
    title: 'Horizontal shear', tag: 'rank 2 \u00B7 det 1',
    body: 'Maps (x, y) to (x + y, y). The x-axis is fixed pointwise. Still full rank, so <span class="ki-ker">ker</span> = {0}.',
  },
  mix: {
    A: () => [[1.2, -0.7], [0.7, 1.2]], group: 'full', label: 'Rotate & stretch',
    title: 'Rotate &amp; stretch', tag: 'rank 2 \u00B7 det \u2248 1.93',
    body: 'A generic invertible matrix. <span class="ki-ker">ker</span> = {0}; the unit area scales by det A.',
  },
  projectX: {
    A: () => [[1, 0], [0, 0]], group: 'rank1', label: 'Project to x',
    title: 'Projection onto x-axis', tag: 'rank 1 \u00B7 det 0',
    body: 'Crushes the y-component: <code>(x, y) \u2192 (x, 0)</code>. The <span class="ki-ker">kernel</span> is the y-axis \u2014 drag <span class="ki-v">v</span> there to see <span class="ki-av">Av</span> collapse to the origin. The <span class="ki-img">image</span> is the x-axis.',
  },
  projectDiag: {
    A: () => [[0.5, 0.5], [0.5, 0.5]], group: 'rank1', label: 'Project to y = x',
    title: 'Projection onto y = x', tag: 'rank 1 \u00B7 symmetric',
    body: 'Each point maps to its closest point on the diagonal. <span class="ki-ker">ker</span> is the line y = \u2212x; <span class="ki-img">im</span> is y = x. Perpendicular \u2014 this is an orthogonal projection.',
  },
  project30: {
    A: () => [[COS30 * COS30, COS30 * SIN30], [COS30 * SIN30, SIN30 * SIN30]],
    group: 'rank1', label: 'Project to 30\u00B0 line',
    title: 'Projection onto 30\u00B0 line', tag: 'rank 1 \u00B7 symmetric',
    body: 'Projects orthogonally onto the line through the origin at 30\u00B0. <span class="ki-ker">ker</span> is perpendicular to <span class="ki-img">im</span>.',
  },
  outer: {
    A: () => [[2, 1], [4, 2]], group: 'rank1', label: 'Outer product',
    title: 'Outer product', tag: 'rank 1 \u00B7 oblique',
    body: 'Both rows are multiples of (2, 1); both columns are multiples of (1, 2). <span class="ki-img">Image</span> is the line through (1, 2). <span class="ki-ker">Kernel</span> is the line through (\u22121, 2).',
  },
  nilpotent: {
    A: () => [[0, 1], [0, 0]], group: 'rank1', label: 'Nilpotent (ker = im)',
    title: 'Nilpotent matrix', tag: 'rank 1 \u00B7 A&sup2; = 0',
    body: 'Sends (x, y) to (y, 0). <span class="ki-ker">Kernel</span> and <span class="ki-img">image</span> are <em>the same line</em> \u2014 the x-axis. Apply A twice and everything is annihilated.',
  },
  zero: {
    A: () => [[0, 0], [0, 0]], group: 'zero', label: 'Zero map',
    title: 'Zero map', tag: 'rank 0 \u00B7 det 0',
    body: 'Sends every vector to the origin. <span class="ki-ker">ker</span> = &#8477;&sup2;, <span class="ki-img">im</span> = {0}.',
  },
};

const SCENARIO_GROUPS = [
  { key: 'full',  label: 'Full rank',       tag: 'rank 2 \u00B7 ker = {0}', tagClass: 'full' },
  { key: 'rank1', label: 'Image is a line', tag: 'rank 1',                  tagClass: 'rank1' },
  { key: 'zero',  label: 'Image is origin', tag: 'rank 0',                  tagClass: 'zero' },
];

const ROTATE_ANGLES = [30, 45, 60, 90, 120, 180, 270];

const DEFAULT_LAYERS = {
  grid: true, kernel: true, image: true, trail: true, swarm: false, labels: true,
};

const ALL_LAYER_DEFS = [
  { key: 'grid', label: 'grid' },
  { key: 'kernel', label: 'kernel', swatch: '#dc2626' },
  { key: 'image', label: 'image', swatch: '#059669' },
  { key: 'trail', label: 'trail' },
  { key: 'swarm', label: 'swarm', swatch: 'linear-gradient(to right,rgba(234,88,12,.5) 50%,rgba(8,145,178,.6) 50%)' },
  { key: 'labels', label: 'labels' },
];

const SWARM_POINTS = (() => {
  let seed = 424242;
  const rand = () => {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const pts = [];
  for (let i = 0; i < 140; i++) pts.push([(rand() - 0.5) * 9, (rand() - 0.5) * 9]);
  return pts;
})();

// =====================================================================
//  SECTION 4  ::  Hooks
// =====================================================================
function useKernelImageState(options = {}) {
  const {
    initialA = [[1, 0], [0, 1]],
    initialPreset = 'identity',
    initialRotateAngle = 45,
    initialLayers = DEFAULT_LAYERS,
    scenarios = SCENARIOS,
  } = options;

  const [A, setAInternal] = useState(initialA);
  const [preset, setPresetInternal] = useState(initialPreset);
  const [rotateAngle, setRotateAngle] = useState(initialRotateAngle);
  const [layers, setLayers] = useState(initialLayers);

  const setA = useCallback((next) => {
    setAInternal(next);
    setPresetInternal(null);
  }, []);

  const selectScenario = useCallback((key, opts = {}) => {
    const sc = scenarios[key];
    if (!sc) return;
    const arg = key === 'rotate' ? (opts.angle != null ? opts.angle : rotateAngle) : undefined;
    if (key === 'rotate' && opts.angle != null) setRotateAngle(opts.angle);
    const newA = sc.A(arg);
    setAInternal([newA[0].slice(), newA[1].slice()]);
    setPresetInternal(key);
  }, [scenarios, rotateAngle]);

  return { A, preset, rotateAngle, layers, setA, selectScenario, setRotateAngle, setLayers };
}

function useSweep(A, options = {}) {
  const {
    initialV = [1.5, 1],
    step = Math.PI / 6,
    duration = 3600,
    maxTrail = 120,
  } = options;

  const [v, setVState] = useState(initialV);
  const [trail, setTrail] = useState([]);
  const [angle, setAngleState] = useState(0);
  const [playing, setPlayingState] = useState(false);

  const sweepRef = useRef({ baseAngle: 0, radius: 1.8, initialized: false });
  const vRef = useRef(initialV);
  const angleRef = useRef(0);
  const playingRef = useRef(false);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(0);
  const ARef = useRef(A);

  useEffect(() => { vRef.current = v; }, [v]);
  useEffect(() => { ARef.current = A; }, [A]);

  const cancel = useCallback(() => {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    playingRef.current = false;
    setPlayingState(false);
  }, []);

  // Reset on A change (preset switch, matrix edit)
  useEffect(() => {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    playingRef.current = false;
    setPlayingState(false);
    sweepRef.current.initialized = false;
    sweepRef.current.baseAngle = 0;
    sweepRef.current.radius = 1.8;
    angleRef.current = 0;
    setAngleState(0);
    setTrail([]);
  }, [A]);

  // Cleanup on unmount
  useEffect(() => () => {
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
  }, []);

  const ensureInit = useCallback(() => {
    if (sweepRef.current.initialized) return;
    const cur = vRef.current;
    const mag = Math.hypot(cur[0], cur[1]);
    sweepRef.current.radius = Math.max(0.6, Math.min(3.5, mag || 1.8));
    sweepRef.current.baseAngle = mag > 1e-6 ? Math.atan2(cur[1], cur[0]) : 0;
    sweepRef.current.initialized = true;
    angleRef.current = 0;
    setAngleState(0);
  }, []);

  const applyAngle = useCallback((a, addTrail) => {
    let normalized = a;
    if (normalized < 0) normalized = ((normalized % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    if (normalized > 2 * Math.PI) normalized = normalized % (2 * Math.PI);
    angleRef.current = normalized;
    setAngleState(normalized);
    const theta = sweepRef.current.baseAngle + normalized;
    const r = sweepRef.current.radius;
    const newV = [r * Math.cos(theta), r * Math.sin(theta)];
    setVState(newV);
    vRef.current = newV;
    if (addTrail) {
      const Av = Math2D.apply(ARef.current, newV);
      setTrail((prev) => {
        const next = prev.concat([{ v: newV, av: Av }]);
        if (next.length > maxTrail) next.shift();
        return next;
      });
    }
  }, [maxTrail]);

  const play = useCallback(() => {
    ensureInit();
    if (playingRef.current) return;
    if (angleRef.current >= 2 * Math.PI - 1e-3) {
      setTrail([]);
      angleRef.current = 0;
      setAngleState(0);
    }
    playingRef.current = true;
    setPlayingState(true);
    lastTimeRef.current = typeof performance !== 'undefined' ? performance.now() : Date.now();
    const frame = (now) => {
      if (!playingRef.current) return;
      const dt = now - lastTimeRef.current;
      lastTimeRef.current = now;
      const delta = (dt / duration) * 2 * Math.PI;
      const next = angleRef.current + delta;
      if (next >= 2 * Math.PI) {
        applyAngle(2 * Math.PI - 1e-6, true);
        playingRef.current = false;
        setPlayingState(false);
        rafRef.current = null;
        return;
      }
      applyAngle(next, true);
      rafRef.current = requestAnimationFrame(frame);
    };
    rafRef.current = requestAnimationFrame(frame);
  }, [ensureInit, applyAngle, duration]);

  const pause = cancel;

  const togglePlay = useCallback(() => {
    if (playingRef.current) pause();
    else play();
  }, [play, pause]);

  const stepFwd = useCallback(() => {
    ensureInit();
    cancel();
    const next = Math.min(2 * Math.PI - 1e-6, Math.floor(angleRef.current / step + 1.0001) * step);
    applyAngle(next, true);
  }, [ensureInit, cancel, applyAngle, step]);

  const stepBack = useCallback(() => {
    ensureInit();
    cancel();
    const prev = Math.max(0, Math.ceil(angleRef.current / step - 1.0001) * step);
    applyAngle(prev, true);
  }, [ensureInit, cancel, applyAngle, step]);

  const reset = useCallback(() => {
    cancel();
    sweepRef.current.initialized = false;
    angleRef.current = 0;
    setAngleState(0);
    setTrail([]);
  }, [cancel]);

  const scrubDeg = useCallback((deg) => {
    ensureInit();
    cancel();
    applyAngle(deg * Math.PI / 180, false);
  }, [ensureInit, cancel, applyAngle]);

  // Manual drag: set v directly, reset sweep state
  const setV = useCallback((newV) => {
    cancel();
    sweepRef.current.initialized = false;
    angleRef.current = 0;
    setAngleState(0);
    setTrail([]);
    setVState(newV);
    vRef.current = newV;
  }, [cancel]);

  return {
    v, trail, angle, playing,
    play, pause, togglePlay, stepFwd, stepBack, reset, scrubDeg,
    setV,
    step,
  };
}

// =====================================================================
//  SECTION 5  ::  Component CSS
// =====================================================================
const COMPONENT_CSS = `
.ki-root{
  --bg:#f0f6fc; --surface:#fff; --surface-2:#f8fafc; --surface-3:#eff6ff;
  --border:#cbd5e1; --border-soft:#e2e8f0;
  --text:#0f172a; --text-soft:#1e293b; --text-dim:#475569; --text-faint:#64748b;
  --accent:#2563eb; --accent-hover:#1d4ed8; --accent-soft:#dbeafe; --accent-subtle:#eff6ff;
  --vColor:#ea580c; --avColor:#0891b2;
  --vSoft:rgba(234,88,12,.08); --vBorder:rgba(234,88,12,.25);
  --avSoft:rgba(8,145,178,.08); --avBorder:rgba(8,145,178,.25);
  --kernel:#dc2626; --image:#059669;
  --grid:#e2e8f0; --grid-axis:#94a3b8; --unit:#6366f1;
  --font-display:'Fraunces',Georgia,serif;
  --font-body:'IBM Plex Sans',-apple-system,sans-serif;
  --font-mono:'JetBrains Mono',Menlo,monospace;
  --shadow-card:0 1px 2px rgba(15,23,42,.04),0 1px 3px rgba(15,23,42,.06);
  --shadow-canvas:0 1px 3px rgba(15,23,42,.05),0 4px 12px rgba(37,99,235,.06);
  color:var(--text); font-family:var(--font-body); line-height:1.5;
  -webkit-font-smoothing:antialiased;
}
.ki-root *{box-sizing:border-box}

.ki-app{
  height:100vh; display:grid; grid-template-rows:auto auto 1fr auto;
  gap:8px; padding:10px 22px 12px; max-width:1500px; margin:0 auto;
  background:var(--bg);
  background-image:
    radial-gradient(circle at 12% 8%,rgba(147,197,253,.25) 0%,transparent 35%),
    radial-gradient(circle at 88% 92%,rgba(191,219,254,.22) 0%,transparent 40%);
}

.ki-lede{display:flex;align-items:baseline;gap:12px;font-size:12.5px;color:var(--text-dim);line-height:1.4}
.ki-crumb{font-family:var(--font-mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--text-faint)}
.ki-crumb .ki-dot{color:var(--accent);margin:0 6px}
.ki-body{flex:1}
.ki-lede strong{color:var(--text);font-weight:500}
.ki-lede .ki-ker{color:var(--kernel);font-weight:500}
.ki-lede .ki-img{color:var(--image);font-weight:500}
.ki-lede .ki-v{color:var(--vColor);font-weight:500}
.ki-lede .ki-av{color:var(--avColor);font-weight:500}

.ki-chips-strip{
  display:flex;flex-wrap:wrap;gap:4px;padding:4px 8px;
  background:var(--surface);border:1px solid var(--border-soft);
  border-radius:6px;box-shadow:var(--shadow-card);
}
.ki-chip{
  display:inline-flex;align-items:center;gap:5px;padding:4px 9px;
  font-family:var(--font-mono);font-size:10px;letter-spacing:.04em;
  color:var(--text-faint);background:transparent;border:1px solid transparent;
  border-radius:4px;cursor:pointer;user-select:none;transition:all .12s;
}
.ki-chip input{width:11px;height:11px;margin:0;accent-color:var(--accent);cursor:pointer}
.ki-chip:hover,.ki-chip:has(input:checked){color:var(--text);background:var(--accent-subtle)}
.ki-chip .ki-sw{display:inline-block;width:10px;height:3px;border-radius:1px}

.ki-main{display:grid;grid-template-columns:minmax(0,1fr) 470px minmax(0,1fr);gap:14px;min-height:0;align-items:stretch}

.ki-canvas-col{display:flex;flex-direction:column;gap:8px;min-width:0;min-height:0;align-items:center}
.ki-canvas-caption{display:flex;justify-content:space-between;align-items:baseline;gap:8px;font-family:var(--font-mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--text-faint);width:100%;max-width:520px}
.ki-canvas-caption .ki-space{font-weight:500}
.ki-canvas-caption.ki-domain .ki-space{color:var(--vColor)}
.ki-canvas-caption.ki-codomain .ki-space{color:var(--avColor)}
.ki-canvas-wrap{flex:1;display:flex;align-items:center;justify-content:center;min-height:0;width:100%}
.ki-canvas{height:100%;aspect-ratio:1/1;max-height:100%;max-width:100%;background:linear-gradient(135deg,#fff 0%,#f0f7fc 100%);border:1px solid var(--border-soft);border-radius:8px;box-shadow:var(--shadow-canvas);display:block}
.ki-canvas-domain{cursor:crosshair;touch-action:none}

.ki-canvas-readout{
  display:flex;align-items:baseline;gap:10px;
  font-family:var(--font-mono);font-size:15px;font-weight:600;letter-spacing:.02em;
  padding:6px 14px;border-radius:5px;border:1px solid transparent;
}
.ki-readout-label{font-family:var(--font-display);font-style:italic;font-size:18px;font-weight:500}
.ki-canvas-readout .ki-eq{color:var(--text-faint);font-weight:400}
.ki-canvas-readout .ki-val{font-variant-numeric:tabular-nums}
.ki-canvas-readout.ki-domain{color:var(--vColor);background:var(--vSoft);border-color:var(--vBorder)}
.ki-canvas-readout.ki-codomain{color:var(--avColor);background:var(--avSoft);border-color:var(--avBorder)}

.ki-sweep-playback{
  display:flex;align-items:center;gap:8px;
  background:var(--vSoft);border:1px solid var(--vBorder);
  border-radius:6px;padding:5px 8px;
}
.ki-sw-btn{
  display:inline-flex;align-items:center;justify-content:center;
  width:26px;height:26px;border:1px solid var(--vBorder);
  background:#fff;border-radius:4px;cursor:pointer;
  color:var(--vColor);transition:all .12s;padding:0;
}
.ki-sw-btn:hover{background:var(--vColor);color:#fff;border-color:var(--vColor)}
.ki-sw-btn:active{transform:scale(.94)}
.ki-sw-btn:disabled{opacity:.4;cursor:not-allowed;transform:none}
.ki-sw-btn svg{width:13px;height:13px;fill:currentColor}
.ki-sw-btn.ki-primary{background:var(--vColor);color:#fff;border-color:var(--vColor)}
.ki-sw-btn.ki-primary:hover{background:#c2410c;border-color:#c2410c}
.ki-sw-slider{
  flex:1;-webkit-appearance:none;appearance:none;height:4px;
  border-radius:2px;outline:none;cursor:pointer;min-width:80px;
  background:linear-gradient(to right,var(--vColor) 0%,var(--vColor) var(--ki-fill,0%),var(--border) var(--ki-fill,0%),var(--border) 100%);
}
.ki-sw-slider::-webkit-slider-thumb{
  -webkit-appearance:none;width:14px;height:14px;border-radius:50%;
  background:var(--vColor);cursor:pointer;border:2px solid #fff;
  box-shadow:0 0 0 1px var(--vColor),0 1px 2px rgba(15,23,42,.15);
}
.ki-sw-slider::-moz-range-thumb{
  width:12px;height:12px;border-radius:50%;background:var(--vColor);
  cursor:pointer;border:2px solid #fff;
}
.ki-sw-angle{
  font-family:var(--font-mono);font-size:11px;font-weight:600;
  color:var(--vColor);min-width:42px;text-align:right;letter-spacing:.02em;
  font-variant-numeric:tabular-nums;
}

.ki-center-col{display:flex;flex-direction:column;gap:8px;min-width:0;min-height:0}
.ki-card{background:var(--surface);border:1px solid var(--border-soft);border-radius:8px;box-shadow:var(--shadow-card);padding:12px 14px;min-height:0}
.ki-card h2{font-family:var(--font-mono);font-size:9px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--text-faint);margin:0 0 10px;display:flex;align-items:center;justify-content:space-between}
.ki-badge{color:var(--accent);margin-right:6px}

.ki-mult-card{padding:14px 12px 12px}
.ki-mult-eq{display:flex;align-items:center;justify-content:center;gap:7px;font-family:var(--font-mono);font-size:12px;color:var(--text);overflow-x:auto;padding:4px 0}
.ki-av-lab{font-family:var(--font-display);font-style:italic;font-size:20px;font-weight:500;color:var(--text);margin-right:2px}
.ki-opx{color:var(--text-faint);font-weight:500;padding:0 1px;font-size:14px}

.ki-eq-mat{display:grid;gap:3px 10px;padding:8px 10px;position:relative;font-family:var(--font-mono);font-size:12px}
.ki-eq-mat::before,.ki-eq-mat::after{content:'';position:absolute;top:3px;bottom:3px;width:5px;border:1.2px solid var(--text-dim)}
.ki-eq-mat::before{left:0;border-right:none;border-radius:2px 0 0 2px}
.ki-eq-mat::after{right:0;border-left:none;border-radius:0 2px 2px 0}
.ki-eq-mat.ki-col-1{grid-template-columns:auto}
.ki-eq-mat.ki-col-2{grid-template-columns:auto auto}
.ki-eq-mat .ki-cell{text-align:center;min-width:30px}
.ki-eq-mat input.ki-cell{width:38px;padding:3px 4px;background:var(--surface-2);border:1px solid var(--border);border-radius:3px;color:var(--text);font-family:var(--font-mono);font-size:12px;text-align:center;outline:none;-moz-appearance:textfield;transition:border-color .15s,background .15s}
.ki-eq-mat input.ki-cell::-webkit-outer-spin-button,.ki-eq-mat input.ki-cell::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}
.ki-eq-mat input.ki-cell:focus{border-color:var(--accent);background:var(--accent-subtle)}
.ki-eq-mat.ki-v-vec{background:var(--vSoft);border-radius:3px}
.ki-eq-mat.ki-v-vec .ki-cell{color:var(--vColor);font-weight:600;min-width:36px}
.ki-eq-mat.ki-av-vec{background:var(--avSoft);border-radius:3px}
.ki-eq-mat.ki-av-vec .ki-cell{color:var(--avColor);font-weight:600;min-width:42px}
.ki-eq-mat.ki-expansion .ki-cell{font-size:11px;letter-spacing:.01em;white-space:nowrap;min-width:96px;text-align:left;padding:1px 4px}
.ki-eq-mat.ki-expansion .ki-aval{color:var(--text);font-weight:500}
.ki-eq-mat.ki-expansion .ki-vval{color:var(--vColor);font-weight:600}
.ki-eq-mat.ki-expansion .ki-op{color:var(--text-faint);margin:0 2px}

.ki-mult-caption{font-family:var(--font-mono);font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:var(--text-faint);text-align:center;margin-top:10px}
.ki-mult-caption .ki-v{color:var(--vColor);font-weight:500}
.ki-mult-caption .ki-av{color:var(--avColor);font-weight:500}

.ki-ex-card{flex:1;overflow-y:auto;min-height:0}
.ki-ex-header{display:flex;align-items:baseline;justify-content:space-between;gap:10px;margin-bottom:8px;padding-bottom:8px;border-bottom:1px solid var(--border-soft)}
.ki-ex-header h3{font-family:var(--font-display);font-weight:500;font-size:17px;color:var(--text);margin:0;letter-spacing:-.01em;line-height:1.15}
.ki-ex-tag{font-family:var(--font-mono);font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:var(--text-faint);white-space:nowrap}
.ki-ex-body{color:var(--text-soft);font-size:12.5px;line-height:1.55;margin:0}
.ki-ex-body .ki-ker{color:var(--kernel);font-weight:500}
.ki-ex-body .ki-img{color:var(--image);font-weight:500}
.ki-ex-body .ki-v{color:var(--vColor);font-weight:500}
.ki-ex-body .ki-av{color:var(--avColor);font-weight:500}
.ki-ex-body code{font-family:var(--font-mono);font-size:11px;background:var(--accent-subtle);color:var(--accent-hover);padding:1px 4px;border-radius:3px}

.ki-props-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px 16px;align-items:baseline}
.ki-pkey{font-family:var(--font-mono);font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--text-faint)}
.ki-pval{font-family:var(--font-mono);font-size:12px;color:var(--text);font-weight:500;text-align:right}
.ki-pval.ki-ker{color:var(--kernel)}
.ki-pval.ki-img{color:var(--image)}
.ki-pval.ki-collapsed{color:var(--kernel);font-weight:600}
.ki-rank-nullity{font-family:var(--font-mono);font-size:10.5px;color:var(--text-faint);margin-top:8px;padding-top:8px;border-top:1px solid var(--border-soft);letter-spacing:.04em;text-align:center}
.ki-rank-nullity .ki-eq{color:var(--text)}
.ki-rank-nullity .ki-num{color:var(--text);font-weight:500}

.ki-scenarios-card{display:grid;grid-template-columns:1.4fr 2fr 1fr;gap:18px;align-items:start;padding:14px 18px}
.ki-scenarios-card h2{grid-column:1/-1;margin-bottom:4px;display:block;font-size:10px}
.ki-scen-section{min-width:0}
.ki-scen-section-label{display:flex;align-items:center;justify-content:space-between;gap:8px;font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--text-dim);margin-bottom:8px}
.ki-scen-section-label .ki-tag{
  padding:3px 9px;border-radius:4px;font-size:10px;font-weight:700;
  letter-spacing:.06em;text-transform:uppercase;
  border:1px solid transparent;white-space:nowrap;
}
.ki-scen-section-label .ki-tag.full{background:rgba(99,102,241,.14);color:var(--unit);border-color:rgba(99,102,241,.35)}
.ki-scen-section-label .ki-tag.rank1{background:rgba(5,150,105,.14);color:var(--image);border-color:rgba(5,150,105,.4)}
.ki-scen-section-label .ki-tag.zero{background:rgba(220,38,38,.12);color:var(--kernel);border-color:rgba(220,38,38,.4)}

.ki-presets-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.ki-preset-btn{display:block;background:var(--surface-2);border:1px solid var(--border-soft);color:var(--text-soft);padding:9px 12px;font-family:var(--font-body);font-size:13px;font-weight:500;cursor:pointer;border-radius:5px;text-align:left;transition:all .12s}
.ki-preset-btn:hover{background:var(--accent-subtle);border-color:var(--accent);color:var(--accent)}
.ki-preset-btn.ki-active{background:var(--accent-soft);border-color:var(--accent);color:var(--accent-hover);font-weight:600}
.ki-preset-btn.rank1{border-left:3px solid var(--image)}
.ki-preset-btn.rank1:hover{border-color:var(--image);color:var(--image);background:rgba(5,150,105,.06)}
.ki-preset-btn.rank1.ki-active{background:rgba(5,150,105,.12);border-color:var(--image);color:var(--image)}
.ki-preset-btn.zero{border-left:3px solid var(--kernel)}
.ki-preset-btn.zero:hover{border-color:var(--kernel);color:var(--kernel);background:rgba(220,38,38,.06)}
.ki-preset-btn.zero.ki-active{background:rgba(220,38,38,.10);border-color:var(--kernel);color:var(--kernel)}

.ki-preset-rotate{
  display:flex;align-items:center;gap:8px;background:var(--surface-2);
  border:1px solid var(--border-soft);color:var(--text-soft);
  padding:8px 8px 8px 12px;font-family:var(--font-body);font-size:13px;font-weight:500;
  cursor:pointer;border-radius:5px;transition:all .12s;justify-content:space-between;
}
.ki-preset-rotate:hover{background:var(--accent-subtle);border-color:var(--accent);color:var(--accent)}
.ki-preset-rotate.ki-active{background:var(--accent-soft);border-color:var(--accent);color:var(--accent-hover);font-weight:600}
.ki-angle-pill{
  display:inline-flex;align-items:center;gap:5px;
  background:#fff;border:1px solid var(--border);border-radius:4px;
  padding:3px 8px 3px 9px;color:var(--text);font-weight:600;font-size:13px;
  transition:all .12s;
}
.ki-preset-rotate:hover .ki-angle-pill{border-color:var(--accent);color:var(--accent)}
.ki-preset-rotate.ki-active .ki-angle-pill{border-color:var(--accent);color:var(--accent-hover);background:#fff}
.ki-angle-pill::after{content:'\\25BE';font-size:10px;opacity:.7}
.ki-preset-rotate select{
  background:transparent;border:none;color:inherit;font:inherit;
  font-weight:600;cursor:pointer;outline:none;padding:0;margin:0;
  -webkit-appearance:none;-moz-appearance:none;appearance:none;
}

.ki-grid-line{stroke:var(--grid);stroke-width:1;fill:none}
.ki-grid-axis{stroke:var(--grid-axis);stroke-width:1.4;fill:none}
.ki-kernel-line{stroke:var(--kernel);stroke-width:2;stroke-dasharray:8 5;fill:none;opacity:.9}
.ki-kernel-halo{stroke:var(--kernel);stroke-width:10;fill:none;opacity:.10}
.ki-image-line{stroke:var(--image);stroke-width:2.2;fill:none;opacity:.95}
.ki-image-halo{stroke:var(--image);stroke-width:12;fill:none;opacity:.13}
.ki-ker-label{fill:var(--kernel);font-family:var(--font-display);font-style:italic;font-size:14px;font-weight:500}
.ki-img-label{fill:var(--image);font-family:var(--font-display);font-style:italic;font-size:14px;font-weight:500}
.ki-zero-ring{fill:none;stroke:var(--kernel);stroke-width:1.2;stroke-dasharray:3 4;opacity:.55}
.ki-trivial-ring{fill:none;stroke:var(--kernel);stroke-width:1.2;stroke-dasharray:2 3;opacity:.6}
.ki-trivial-label{fill:var(--kernel);font-family:var(--font-display);font-style:italic;font-size:11px;font-weight:500;opacity:.85}
.ki-swarm-dot-in{fill:rgba(234,88,12,.35)}
.ki-swarm-dot-out{fill:rgba(8,145,178,.45)}
.ki-trail-dot-v{fill:var(--vColor);stroke:none}
.ki-trail-dot-av{fill:var(--avColor);stroke:none}
.ki-v-shaft{stroke:var(--vColor);stroke-width:2.6;fill:none;stroke-linecap:round}
.ki-av-shaft{stroke:var(--avColor);stroke-width:2.6;fill:none;stroke-linecap:round}
.ki-v-handle{fill:var(--vColor);stroke:#fff;stroke-width:2;cursor:grab}
.ki-v-handle:active{cursor:grabbing}
.ki-av-tip{fill:var(--avColor);stroke:#fff;stroke-width:2}
.ki-v-label{fill:var(--vColor);font-family:var(--font-display);font-style:italic;font-size:16px;font-weight:600}
.ki-av-label{fill:var(--avColor);font-family:var(--font-display);font-style:italic;font-size:16px;font-weight:600}
.ki-origin-dot{fill:var(--text-soft)}
.ki-collapsed-ring{fill:none;stroke:var(--kernel);stroke-width:2;stroke-dasharray:4 3}

.ki-card::-webkit-scrollbar,.ki-ex-card::-webkit-scrollbar{width:6px}
.ki-card::-webkit-scrollbar-thumb,.ki-ex-card::-webkit-scrollbar-thumb{background:var(--border);border-radius:3px}

@media (max-height:820px){
  .ki-app{padding:8px 18px;gap:7px}
  .ki-card{padding:10px 12px}
  .ki-mult-eq{font-size:11px;gap:5px}
  .ki-eq-mat input.ki-cell{width:34px;font-size:11px}
  .ki-eq-mat.ki-v-vec .ki-cell,.ki-eq-mat.ki-av-vec .ki-cell{min-width:32px;font-size:11px}
  .ki-eq-mat.ki-expansion .ki-cell{font-size:10px;min-width:86px}
  .ki-av-lab{font-size:17px}
  .ki-ex-header h3{font-size:15px}
  .ki-ex-body{font-size:12px}
}
@media (max-width:1200px){
  .ki-main{grid-template-columns:1fr 410px 1fr}
}
`;

// =====================================================================
//  SECTION 6  ::  Sub-components
// =====================================================================

// ---- CellInput (safe mid-edit) ----
function CellInput({ value, onCommit, step = 0.1 }) {
  const [str, setStr] = useState(String(value));
  useEffect(() => { setStr(String(value)); }, [value]);
  return (
    <input
      type="number"
      step={step}
      value={str}
      className="ki-cell"
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

// ---- DomainCanvas (draggable v) ----
function DomainCanvas({
  A = [[1, 0], [0, 1]],
  v = [1.5, 1],
  trail = [],
  layers = DEFAULT_LAYERS,
  geom = DEFAULT_GEOM,
  swarmPoints = SWARM_POINTS,
  onVChange,
  draggable = true,
  className,
  style,
}) {
  const svgRef = useRef(null);
  const draggingRef = useRef(false);

  const pointerToMath = (e) => {
    if (!svgRef.current) return [0, 0];
    const rect = svgRef.current.getBoundingClientRect();
    const xSvg = (e.clientX - rect.left) * (geom.size / rect.width);
    const ySvg = (e.clientY - rect.top) * (geom.size / rect.height);
    const cx = geom.size / 2, cy = geom.size / 2;
    return [(xSvg - cx) / geom.scale, (cy - ySvg) / geom.scale];
  };

  const onPointerDown = (e) => {
    if (!draggable || !onVChange) return;
    draggingRef.current = true;
    try { e.target.setPointerCapture(e.pointerId); } catch (_) {}
    onVChange(pointerToMath(e));
  };
  const onPointerMove = (e) => {
    if (!draggingRef.current || !onVChange) return;
    onVChange(pointerToMath(e));
  };
  const onPointerUp = (e) => {
    draggingRef.current = false;
    try { e.target.releasePointerCapture(e.pointerId); } catch (_) {}
  };

  let inner = '';
  if (layers.grid) inner += SVGRender.grid(geom);
  if (layers.kernel) inner += SVGRender.kerLayer(A, layers.labels, geom);
  if (layers.swarm) inner += SVGRender.swarm(A, 'domain', swarmPoints, geom);
  if (layers.trail) inner += SVGRender.trail(trail, 'domain', geom);
  inner += SVGRender.origin(geom);
  inner += SVGRender.vArrow(v, layers.labels, geom);

  return (
    <svg
      ref={svgRef}
      className={'ki-canvas ki-canvas-domain' + (className ? ' ' + className : '')}
      style={style}
      viewBox={`0 0 ${geom.size} ${geom.size}`}
      xmlns="http://www.w3.org/2000/svg"
      onPointerDown={draggable ? onPointerDown : undefined}
      onPointerMove={draggable ? onPointerMove : undefined}
      onPointerUp={draggable ? onPointerUp : undefined}
      onPointerCancel={draggable ? onPointerUp : undefined}
    >
      <defs>
        <marker id="ki-arr-v" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
          <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#ea580c" />
        </marker>
      </defs>
      <g dangerouslySetInnerHTML={{ __html: inner }} />
    </svg>
  );
}

// ---- CodomainCanvas (read-only) ----
function CodomainCanvas({
  A = [[1, 0], [0, 1]],
  v = [1.5, 1],
  trail = [],
  layers = DEFAULT_LAYERS,
  geom = DEFAULT_GEOM,
  swarmPoints = SWARM_POINTS,
  className,
  style,
}) {
  let inner = '';
  if (layers.grid) inner += SVGRender.grid(geom);
  if (layers.image) inner += SVGRender.imgLayer(A, layers.labels, geom);
  if (layers.swarm) inner += SVGRender.swarm(A, 'codomain', swarmPoints, geom);
  if (layers.trail) inner += SVGRender.trail(trail, 'codomain', geom);
  inner += SVGRender.origin(geom);
  inner += SVGRender.avArrow(A, v, layers.labels, geom);

  return (
    <svg
      className={'ki-canvas ki-canvas-codomain' + (className ? ' ' + className : '')}
      style={style}
      viewBox={`0 0 ${geom.size} ${geom.size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="ki-arr-av" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
          <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#0891b2" />
        </marker>
      </defs>
      <g dangerouslySetInnerHTML={{ __html: inner }} />
    </svg>
  );
}

// ---- LayerChips ----
function LayerChips({ layers = {}, onChange = () => {}, enabledLayers, layerDefs = ALL_LAYER_DEFS }) {
  const defs = enabledLayers ? layerDefs.filter((d) => enabledLayers.includes(d.key)) : layerDefs;
  return (
    <div className="ki-chips-strip">
      {defs.map((d) => (
        <label key={d.key} className="ki-chip">
          <input
            type="checkbox"
            checked={!!layers[d.key]}
            onChange={(e) => onChange({ ...layers, [d.key]: e.target.checked })}
          />
          {d.label}
          {d.swatch && <span className="ki-sw" style={{ background: d.swatch }} />}
        </label>
      ))}
    </div>
  );
}

// ---- CanvasCaption ----
function CanvasCaption({ kind = 'domain', title = 'Domain', suffix = '\u00B7 \u211D\u00B2', note }) {
  return (
    <div className={`ki-canvas-caption ki-${kind}`}>
      <span>{title} <span className="ki-space">{suffix}</span></span>
      {note && <span>{note}</span>}
    </div>
  );
}

// ---- CanvasReadout ----
function CanvasReadout({ kind = 'domain', label = 'v', value = '(0, 0)' }) {
  return (
    <div className={`ki-canvas-readout ki-${kind}`}>
      <span className="ki-readout-label">{label}</span>
      <span className="ki-eq">=</span>
      <span className="ki-val">{value}</span>
    </div>
  );
}

// ---- MultiplicationBlock ----
function MultiplicationBlock({
  A = [[1, 0], [0, 1]],
  v = [1.5, 1],
  onAChange = () => {},
  step = 0.1,
}) {
  const Av = Math2D.apply(A, v);
  const expansion = (a, b) => (
    <>
      <span className="ki-aval">{Math2D.fmt(a)}</span>
      <span className="ki-op">{'\u00B7'}</span>
      <span className="ki-vval">{Math2D.fmt(v[0])}</span>
      {' '}<span className="ki-op">+</span>{' '}
      <span className="ki-aval">{Math2D.fmt(b)}</span>
      <span className="ki-op">{'\u00B7'}</span>
      <span className="ki-vval">{Math2D.fmt(v[1])}</span>
    </>
  );
  return (
    <div className="ki-card ki-mult-card">
      <h2><span><span className="ki-badge">A</span>Multiplication</span></h2>
      <div className="ki-mult-eq">
        <span className="ki-av-lab">Av</span>
        <span className="ki-opx">=</span>
        <div className="ki-eq-mat ki-col-2">
          {[[0, 0], [0, 1], [1, 0], [1, 1]].map(([r, c]) => (
            <CellInput
              key={`${r}-${c}`}
              value={A[r][c]}
              step={step}
              onCommit={(val) => {
                const next = A.map((row) => row.slice());
                next[r][c] = val;
                onAChange(next);
              }}
            />
          ))}
        </div>
        <div className="ki-eq-mat ki-col-1 ki-v-vec">
          <div className="ki-cell">{Math2D.fmt(v[0])}</div>
          <div className="ki-cell">{Math2D.fmt(v[1])}</div>
        </div>
        <span className="ki-opx">=</span>
        <div className="ki-eq-mat ki-col-1 ki-expansion">
          <div className="ki-cell">{expansion(A[0][0], A[0][1])}</div>
          <div className="ki-cell">{expansion(A[1][0], A[1][1])}</div>
        </div>
        <span className="ki-opx">=</span>
        <div className="ki-eq-mat ki-col-1 ki-av-vec">
          <div className="ki-cell">{Math2D.fmt(Av[0])}</div>
          <div className="ki-cell">{Math2D.fmt(Av[1])}</div>
        </div>
      </div>
      <div className="ki-mult-caption">
        Top row of A dotted with <span className="ki-v">v</span> &rarr; first entry of <span className="ki-av">Av</span>. Same for bottom row.
      </div>
    </div>
  );
}

// ---- ExplanationCard ----
function ExplanationCard({
  A,
  preset = 'identity',
  rotateAngle = 45,
  scenarios = SCENARIOS,
  override,
}) {
  let sc = scenarios[preset] || scenarios.identity;
  if (override && override.byPreset && override.byPreset[preset]) sc = override.byPreset[preset];
  const arg = preset === 'rotate' ? rotateAngle : undefined;
  const title = typeof sc.title === 'function' ? sc.title(arg) : sc.title;
  const tag = typeof sc.tag === 'function' ? sc.tag(arg) : sc.tag;
  const body = typeof sc.body === 'function' ? sc.body(arg) : sc.body;
  return (
    <div className="ki-card ki-ex-card">
      <div className="ki-ex-header">
        <h3 dangerouslySetInnerHTML={{ __html: title }} />
        <span className="ki-ex-tag" dangerouslySetInnerHTML={{ __html: tag }} />
      </div>
      <p className="ki-ex-body" dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
}

// ---- PropertiesCard ----
function PropertiesCard({ A = [[1, 0], [0, 1]], v = [1.5, 1] }) {
  const ki = Math2D.kerImg(A);
  const Av = Math2D.apply(A, v);
  const dimKer = 2 - ki.rank;
  const dimIm = ki.rank;
  const collapsed = Math.hypot(Av[0], Av[1]) < 1e-3 && Math.hypot(v[0], v[1]) > 1e-6;
  let inKer = { text: 'no', cls: 'ki-pval' };
  if (ki.rank === 0) inKer = { text: 'always', cls: 'ki-pval ki-collapsed' };
  else if (ki.rank === 2) inKer = { text: 'no (trivial)', cls: 'ki-pval' };
  else if (collapsed) inKer = { text: 'yes \u2014 collapses', cls: 'ki-pval ki-collapsed' };
  return (
    <div className="ki-card">
      <h2><span><span className="ki-badge">02</span>Properties</span></h2>
      <div className="ki-props-grid">
        <span className="ki-pkey">Rank A</span><span className="ki-pval">{ki.rank}</span>
        <span className="ki-pkey">dim ker A</span><span className="ki-pval ki-ker">{dimKer}</span>
        <span className="ki-pkey">dim im A</span><span className="ki-pval ki-img">{dimIm}</span>
        <span className="ki-pkey">Determinant</span><span className="ki-pval">{Math2D.fmt(Math2D.det(A))}</span>
        <span className="ki-pkey">v &isin; ker A?</span><span className={inKer.cls}>{inKer.text}</span>
      </div>
      <div className="ki-rank-nullity">
        <span className="ki-eq">dim ker + dim im</span> = <span className="ki-num">{dimKer}</span> + <span className="ki-num">{dimIm}</span> = <span className="ki-num">2</span>
      </div>
    </div>
  );
}

// ---- ScenariosPanel ----
function ScenariosPanel({
  scenarios = SCENARIOS,
  groups = SCENARIO_GROUPS,
  rotateAngles = ROTATE_ANGLES,
  preset = null,
  rotateAngle = 45,
  onSelect = () => {},
  visibleScenarios,
}) {
  const visible = visibleScenarios
    ? Object.fromEntries(visibleScenarios.map((k) => [k, scenarios[k]]).filter(([, s]) => s))
    : scenarios;
  return (
    <div className="ki-card ki-scenarios-card">
      <h2><span><span className="ki-badge">01</span>Scenarios</span></h2>
      {groups.map((g) => {
        const items = Object.entries(visible).filter(([, sc]) => sc.group === g.key);
        if (!items.length) return null;
        return (
          <div className="ki-scen-section" key={g.key}>
            <div className="ki-scen-section-label">
              <span>{g.label}</span>
              <span className={`ki-tag ${g.tagClass}`} dangerouslySetInnerHTML={{ __html: g.tag }} />
            </div>
            <div className="ki-presets-grid">
              {items.map(([key, sc]) => {
                if (sc.isAngular) {
                  return (
                    <label
                      key={key}
                      className={`ki-preset-rotate${preset === key ? ' ki-active' : ''}`}
                      onClick={(e) => {
                        if (e.target.tagName !== 'SELECT' && e.target.tagName !== 'OPTION') {
                          onSelect(key, { angle: rotateAngle });
                        }
                      }}
                    >
                      <span>{sc.label}</span>
                      <span className="ki-angle-pill">
                        <select
                          value={rotateAngle}
                          onChange={(e) => {
                            const angle = parseInt(e.target.value, 10);
                            onSelect(key, { angle });
                          }}
                        >
                          {rotateAngles.map((a) => (
                            <option key={a} value={a}>{a}&deg;</option>
                          ))}
                        </select>
                      </span>
                    </label>
                  );
                }
                return (
                  <button
                    key={key}
                    className={`ki-preset-btn ${g.tagClass}${preset === key ? ' ki-active' : ''}`}
                    onClick={() => onSelect(key)}
                  >
                    {sc.label}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ---- SweepPlayback ----
const ICON_RESET = <svg viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" /></svg>;
const ICON_BACK  = <svg viewBox="0 0 24 24"><path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z" /></svg>;
const ICON_FWD   = <svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6h2v12h-2V6z" /></svg>;
const ICON_PLAY  = <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>;
const ICON_PAUSE = <svg viewBox="0 0 24 24"><path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" /></svg>;

function SweepPlayback({
  angle = 0, playing = false,
  onPlay = () => {}, onPause = () => {},
  onStepFwd = () => {}, onStepBack = () => {},
  onReset = () => {}, onScrub = () => {},
}) {
  const deg = Math.round(angle * 180 / Math.PI);
  const fill = ((deg / 360) * 100).toFixed(2) + '%';
  return (
    <div className="ki-sweep-playback">
      <button className="ki-sw-btn" onClick={onReset} aria-label="Reset" title="Reset">{ICON_RESET}</button>
      <button className="ki-sw-btn" onClick={onStepBack} disabled={deg <= 0} aria-label="Step back" title="Step back 30°">{ICON_BACK}</button>
      <button
        className="ki-sw-btn ki-primary"
        onClick={playing ? onPause : onPlay}
        aria-label={playing ? 'Pause' : 'Play'}
        title="Play / Pause"
      >
        {playing ? ICON_PAUSE : ICON_PLAY}
      </button>
      <button className="ki-sw-btn" onClick={onStepFwd} disabled={deg >= 360} aria-label="Step forward" title="Step forward 30°">{ICON_FWD}</button>
      <input
        type="range" min={0} max={360} step={1} value={deg}
        className="ki-sw-slider"
        style={{ '--ki-fill': fill }}
        onChange={(e) => onScrub(parseFloat(e.target.value))}
        aria-label="Sweep angle"
      />
      <span className="ki-sw-angle">{deg}&deg;</span>
    </div>
  );
}

// =====================================================================
//  SECTION 7  ::  Core + Wrapper
// =====================================================================
const DEFAULT_LEDE = {
  crumb: 'Linear Algebra<span class="ki-dot">&middot;</span>Demo',
  body: 'The <span class="ki-ker">kernel</span> sits in the domain. The <span class="ki-img">image</span> sits in the codomain. Drag <span class="ki-v">v</span> on the left, watch <span class="ki-av">Av</span> move on the right.',
};

export function KernelImageCore({
  initialA, initialPreset, initialRotateAngle, initialLayers, scenarios,
  initialV, step, duration, maxTrail,
  children,
}) {
  const transform = useKernelImageState({
    initialA, initialPreset, initialRotateAngle, initialLayers, scenarios,
  });
  const sweep = useSweep(transform.A, { initialV, step, duration, maxTrail });

  if (typeof children === 'function') {
    return children({
      A: transform.A,
      preset: transform.preset,
      rotateAngle: transform.rotateAngle,
      layers: transform.layers,
      setA: transform.setA,
      selectScenario: transform.selectScenario,
      setRotateAngle: transform.setRotateAngle,
      setLayers: transform.setLayers,
      v: sweep.v,
      trail: sweep.trail,
      sweepAngle: sweep.angle,
      sweepPlaying: sweep.playing,
      setV: sweep.setV,
      sweep,
    });
  }
  return null;
}

export default function KernelImage({
  // header
  lede,
  ledeCrumb = DEFAULT_LEDE.crumb,
  ledeBody = DEFAULT_LEDE.body,
  // core options
  initialA, initialPreset, initialRotateAngle, initialLayers, scenarios,
  initialV, step, duration, maxTrail,
  // slot overrides (undefined = default, JSX = replace, null = hide)
  layerChips, domainCanvas, codomainCanvas,
  multiplication, explanation, properties, scenariosPanel, playback,
  // atomization helpers
  visibleScenarios, enabledLayers, explanationOverride,
  // layout escape
  layout,
  // outer
  className, style,
}) {
  return (
    <KernelImageCore
      initialA={initialA}
      initialPreset={initialPreset}
      initialRotateAngle={initialRotateAngle}
      initialLayers={initialLayers}
      scenarios={scenarios}
      initialV={initialV}
      step={step}
      duration={duration}
      maxTrail={maxTrail}
    >
      {(ctx) => {
        const renderLede = () => {
          if (lede !== undefined) return lede;
          if (ledeCrumb === null && ledeBody === null) return null;
          return (
            <div className="ki-lede">
              {ledeCrumb && <span className="ki-crumb" dangerouslySetInnerHTML={{ __html: ledeCrumb }} />}
              {ledeBody && <span className="ki-body" dangerouslySetInnerHTML={{ __html: ledeBody }} />}
            </div>
          );
        };

        const slotChips = layerChips !== undefined ? layerChips : (
          <LayerChips
            layers={ctx.layers}
            onChange={ctx.setLayers}
            enabledLayers={enabledLayers}
          />
        );
        const slotDomain = domainCanvas !== undefined ? domainCanvas : (
          <DomainCanvas
            A={ctx.A}
            v={ctx.v}
            trail={ctx.trail}
            layers={ctx.layers}
            onVChange={ctx.setV}
          />
        );
        const slotCodomain = codomainCanvas !== undefined ? codomainCanvas : (
          <CodomainCanvas
            A={ctx.A}
            v={ctx.v}
            trail={ctx.trail}
            layers={ctx.layers}
          />
        );
        const slotMult = multiplication !== undefined ? multiplication : (
          <MultiplicationBlock A={ctx.A} v={ctx.v} onAChange={ctx.setA} />
        );
        const slotExp = explanation !== undefined ? explanation : (
          <ExplanationCard
            A={ctx.A}
            preset={ctx.preset}
            rotateAngle={ctx.rotateAngle}
            scenarios={scenarios || SCENARIOS}
            override={explanationOverride}
          />
        );
        const slotProps = properties !== undefined ? properties : (
          <PropertiesCard A={ctx.A} v={ctx.v} />
        );
        const slotScenarios = scenariosPanel !== undefined ? scenariosPanel : (
          <ScenariosPanel
            scenarios={scenarios || SCENARIOS}
            preset={ctx.preset}
            rotateAngle={ctx.rotateAngle}
            onSelect={ctx.selectScenario}
            visibleScenarios={visibleScenarios}
          />
        );
        const slotPlayback = playback !== undefined ? playback : (
          <SweepPlayback
            angle={ctx.sweepAngle}
            playing={ctx.sweepPlaying}
            onPlay={ctx.sweep.play}
            onPause={ctx.sweep.pause}
            onStepFwd={ctx.sweep.stepFwd}
            onStepBack={ctx.sweep.stepBack}
            onReset={ctx.sweep.reset}
            onScrub={ctx.sweep.scrubDeg}
          />
        );

        if (typeof layout === 'function') {
          return (
            <div className={'ki-root ' + (className || '')} style={style}>
              <style dangerouslySetInnerHTML={{ __html: COMPONENT_CSS }} />
              {layout(ctx)}
            </div>
          );
        }

        return (
          <div className={'ki-root ' + (className || '')} style={style}>
            <style dangerouslySetInnerHTML={{ __html: COMPONENT_CSS }} />
            <div className="ki-app">
              {renderLede()}
              {slotChips}
              <main className="ki-main">
                <section className="ki-canvas-col">
                  <CanvasCaption kind="domain" title="Domain" note="input" />
                  <div className="ki-canvas-wrap">{slotDomain}</div>
                  <CanvasReadout kind="domain" label="v" value={Math2D.fmtPair(ctx.v)} />
                  {slotPlayback}
                </section>
                <section className="ki-center-col">
                  {slotMult}
                  {slotExp}
                  {slotProps}
                </section>
                <section className="ki-canvas-col">
                  <CanvasCaption kind="codomain" title="Codomain" note="output" />
                  <div className="ki-canvas-wrap">{slotCodomain}</div>
                  <CanvasReadout kind="codomain" label="Av" value={Math2D.fmtPair(Math2D.apply(ctx.A, ctx.v))} />
                </section>
              </main>
              {slotScenarios}
            </div>
          </div>
        );
      }}
    </KernelImageCore>
  );
}

export {
  // Sub-components
  DomainCanvas, CodomainCanvas, LayerChips, MultiplicationBlock,
  ExplanationCard, PropertiesCard, ScenariosPanel, SweepPlayback,
  CanvasCaption, CanvasReadout, CellInput,
  // Hooks
  useKernelImageState, useSweep,
  // Helpers
  Math2D, SVGRender,
  // Data
  SCENARIOS, SCENARIO_GROUPS, DEFAULT_LAYERS, DEFAULT_GEOM,
  ROTATE_ANGLES, SWARM_POINTS, ALL_LAYER_DEFS,
};