'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

// =====================================================================
//  SECTION 1  ::  Math2D
// =====================================================================
const Math2D = {
  det: (a, b) => a[0] * b[1] - a[1] * b[0],

  rank2(a, b) {
    const ma = Math.hypot(a[0], a[1]);
    const mb = Math.hypot(b[0], b[1]);
    if (ma < 1e-9 && mb < 1e-9) return 0;
    if (Math.abs(Math2D.det(a, b)) > 1e-6) return 2;
    return 1;
  },

  area: (a, b) => Math.abs(Math2D.det(a, b)),

  angleBetween(a, b) {
    const ma = Math.hypot(a[0], a[1]);
    const mb = Math.hypot(b[0], b[1]);
    if (ma < 1e-9 || mb < 1e-9) return 0;
    const cos = (a[0] * b[0] + a[1] * b[1]) / (ma * mb);
    return Math.acos(Math.max(-1, Math.min(1, cos))) * 180 / Math.PI;
  },

  // Direction of the span line when rank=1 (unit vector)
  spanDir(a, b) {
    const ma = Math.hypot(a[0], a[1]);
    if (ma > 1e-9) return [a[0] / ma, a[1] / ma];
    const mb = Math.hypot(b[0], b[1]);
    if (mb > 1e-9) return [b[0] / mb, b[1] / mb];
    return [1, 0];
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

  grid(geom) {
    const tx = SVGRender._proj(geom);
    const R = geom.gridR;
    let s = '';
    for (let i = -R; i <= R; i++) {
      const cls = i === 0 ? 'sp-grid-axis' : 'sp-grid-line';
      const [x1, y1] = tx([-R, i]);
      const [x2, y2] = tx([R, i]);
      s += `<line class="${cls}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
      const [x3, y3] = tx([i, -R]);
      const [x4, y4] = tx([i, R]);
      s += `<line class="${cls}" x1="${x3}" y1="${y3}" x2="${x4}" y2="${y4}"/>`;
    }
    return s;
  },

  // Faint full-plane wash signaling span = R^2 when independent
  spanShade(geom) {
    return `<rect class="sp-span-shade" x="0" y="0" width="${geom.size}" height="${geom.size}"/>`;
  },

  // Dashed span line through origin in direction `dir` (unit), with halo
  spanLine(dir, geom) {
    const tx = SVGRender._proj(geom);
    const R = geom.gridR;
    const [x1, y1] = tx([-R * dir[0], -R * dir[1]]);
    const [x2, y2] = tx([R * dir[0], R * dir[1]]);
    return `<line class="sp-span-halo" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`
      + `<line class="sp-span-line" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
  },

  // Lattice points c*a + d*b for c,d in [-N..N]
  lattice(a, b, geom, N = 2) {
    const tx = SVGRender._proj(geom);
    let s = '';
    for (let c = -N; c <= N; c++) {
      for (let d = -N; d <= N; d++) {
        if (c === 0 && d === 0) continue;
        const p = [c * a[0] + d * b[0], c * a[1] + d * b[1]];
        const [x, y] = tx(p);
        s += `<circle class="sp-lattice-dot" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2"/>`;
      }
    }
    return s;
  },

  // Parallelogram with sign-of-det coloring
  parallelogram(a, b, geom) {
    const tx = SVGRender._proj(geom);
    const c0 = tx([0, 0]);
    const c1 = tx(a);
    const c2 = tx([a[0] + b[0], a[1] + b[1]]);
    const c3 = tx(b);
    const pts = [c0, c1, c2, c3].map((p) => `${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(' ');
    const d = Math2D.det(a, b);
    let cls;
    if (d > 1e-3) cls = 'sp-para-pos';
    else if (d < -1e-3) cls = 'sp-para-neg';
    else cls = 'sp-para-zero';
    return `<polygon class="sp-parallelogram ${cls}" points="${pts}"/>`;
  },

  // Faint sweep circle (radius = |b|) around origin, only when sweeping/has trail
  sweepCircle(radius, geom) {
    if (!(radius > 0.1)) return '';
    const tx = SVGRender._proj(geom);
    const [cx, cy] = tx([0, 0]);
    const r = radius * geom.scale;
    return `<circle class="sp-sweep-circle" cx="${cx}" cy="${cy}" r="${r.toFixed(2)}"/>`;
  },

  // Angle arc from a-direction to b-direction (small, near origin)
  angleArc(a, b, geom) {
    const ma = Math.hypot(a[0], a[1]);
    const mb = Math.hypot(b[0], b[1]);
    if (ma < 0.3 || mb < 0.3) return '';
    const tx = SVGRender._proj(geom);
    const [ox, oy] = tx([0, 0]);
    const aAng = Math.atan2(a[1], a[0]);
    const bAng = Math.atan2(b[1], b[0]);
    let delta = bAng - aAng;
    while (delta > Math.PI) delta -= 2 * Math.PI;
    while (delta < -Math.PI) delta += 2 * Math.PI;
    const arcR = Math.min(56, Math.min(ma, mb) * geom.scale * 0.45);
    const startMath = [arcR * Math.cos(aAng), arcR * Math.sin(aAng)];
    const endMath   = [arcR * Math.cos(bAng), arcR * Math.sin(bAng)];
    const [sx, sy] = [ox + startMath[0], oy - startMath[1]];
    const [ex, ey] = [ox + endMath[0],   oy - endMath[1]];
    const largeArc = Math.abs(delta) > Math.PI ? 1 : 0;
    const sweepFlag = delta > 0 ? 0 : 1; // SVG y is flipped
    let s = `<path class="sp-angle-arc" d="M ${sx.toFixed(1)} ${sy.toFixed(1)} A ${arcR.toFixed(1)} ${arcR.toFixed(1)} 0 ${largeArc} ${sweepFlag} ${ex.toFixed(1)} ${ey.toFixed(1)}"/>`;
    // phi label at midpoint
    const midAng = aAng + delta / 2;
    const labelR = arcR + 12;
    const lx = ox + labelR * Math.cos(midAng);
    const ly = oy - labelR * Math.sin(midAng);
    s += `<text class="sp-angle-label" x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="middle" dominant-baseline="middle">&#966;</text>`;
    return s;
  },

  // Trail: faint past parallelogram outlines + small fading b-dots
  trail(trailEntries, a, geom) {
    if (!trailEntries || !trailEntries.length) return '';
    const tx = SVGRender._proj(geom);
    const n = trailEntries.length;
    let polys = '';
    let dots = '';
    // Stride past parallelograms so we don't draw too many
    const polyStride = Math.max(1, Math.floor(n / 8));
    for (let i = 0; i < n; i++) {
      const entry = trailEntries[i];
      const age = (n - i) / n;
      const opacity = Math.max(0.05, 0.5 * (1 - age * 0.85));
      const [bx, by] = tx(entry.b);
      dots += `<circle class="sp-trail-dot" cx="${bx.toFixed(1)}" cy="${by.toFixed(1)}" r="2.2" opacity="${opacity.toFixed(2)}"/>`;
      if (i % polyStride === 0 && i < n - 1) {
        const c0 = tx([0, 0]);
        const c1 = tx(a);
        const c2 = tx([a[0] + entry.b[0], a[1] + entry.b[1]]);
        const c3 = tx(entry.b);
        const pts = [c0, c1, c2, c3].map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
        const pOp = Math.max(0.04, 0.18 * (1 - age * 0.9));
        polys += `<polygon class="sp-trail-poly" points="${pts}" opacity="${pOp.toFixed(2)}"/>`;
      }
    }
    return polys + dots;
  },

  // a arrow (orange)
  aArrow(a, showLabel, geom) {
    const tx = SVGRender._proj(geom);
    const [ox, oy] = tx([0, 0]);
    const [tipX, tipY] = tx(a);
    let s = '';
    s += `<line class="sp-a-shaft" x1="${ox}" y1="${oy}" x2="${tipX.toFixed(2)}" y2="${tipY.toFixed(2)}" marker-end="url(#sp-arr-a)"/>`;
    s += `<circle class="sp-a-handle" cx="${tipX.toFixed(2)}" cy="${tipY.toFixed(2)}" r="7"/>`;
    if (showLabel) {
      const lx = a[0] + (a[0] >= 0 ? 0.32 : -0.32);
      const ly = a[1] + (a[1] >= 0 ? 0.32 : -0.32);
      const [px, py] = tx([lx, ly]);
      s += `<text class="sp-a-label" x="${px.toFixed(2)}" y="${py.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">a</text>`;
    }
    return s;
  },

  // Small dashed anchor indicator next to a's tip, when sweep is active or has trail
  aAnchor(a, geom) {
    const tx = SVGRender._proj(geom);
    const [tipX, tipY] = tx(a);
    const offX = 16, offY = 12;
    return `<g class="sp-a-anchor">`
      + `<circle cx="${(tipX + offX).toFixed(1)}" cy="${(tipY + offY).toFixed(1)}" r="6.5"/>`
      + `<text x="${(tipX + offX).toFixed(1)}" y="${(tipY + offY + 3).toFixed(1)}" text-anchor="middle">anchor</text>`
      + `</g>`;
  },

  // b arrow (cyan)
  bArrow(b, showLabel, geom) {
    const tx = SVGRender._proj(geom);
    const [ox, oy] = tx([0, 0]);
    const mag = Math.hypot(b[0], b[1]);
    if (mag < 1e-3) {
      // Degenerate: b is zero. Render a small ring at origin to indicate it.
      return `<circle class="sp-b-zero" cx="${ox}" cy="${oy}" r="11"/>`;
    }
    const [tipX, tipY] = tx(b);
    let s = '';
    s += `<line class="sp-b-shaft" x1="${ox}" y1="${oy}" x2="${tipX.toFixed(2)}" y2="${tipY.toFixed(2)}" marker-end="url(#sp-arr-b)"/>`;
    s += `<circle class="sp-b-handle" cx="${tipX.toFixed(2)}" cy="${tipY.toFixed(2)}" r="7"/>`;
    if (showLabel) {
      const lx = b[0] + (b[0] >= 0 ? 0.32 : -0.32);
      const ly = b[1] + (b[1] >= 0 ? 0.32 : -0.32);
      const [px, py] = tx([lx, ly]);
      s += `<text class="sp-b-label" x="${px.toFixed(2)}" y="${py.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">b</text>`;
    }
    return s;
  },

  origin(geom) {
    const tx = SVGRender._proj(geom);
    const [ox, oy] = tx([0, 0]);
    return `<circle class="sp-origin-dot" cx="${ox}" cy="${oy}" r="2.5"/>`;
  },

  // Bottom-right corner label: "span = R^2" / "span = line" / "span = {0}"
  spanLabel(rank, geom) {
    const x = geom.size - 16;
    const y = geom.size - 16;
    let text, cls;
    if (rank === 2)      { text = 'span = &#8477;&sup2;'; cls = 'sp-spanlbl-indep'; }
    else if (rank === 1) { text = 'span = line';          cls = 'sp-spanlbl-dep'; }
    else                 { text = 'span = {0}';           cls = 'sp-spanlbl-zero'; }
    return `<text class="${cls}" x="${x}" y="${y}" text-anchor="end">${text}</text>`;
  },
};

// =====================================================================
//  SECTION 3  ::  Scenarios + constants
// =====================================================================
const COS60 = Math.cos(Math.PI / 3);
const SIN60 = Math.sin(Math.PI / 3);
const COS15 = Math.cos(Math.PI / 12);
const SIN15 = Math.sin(Math.PI / 12);

const SCENARIOS = {
  orthogonal: {
    a: [2, 1], b: [-1, 2], group: 'independent', label: 'Orthogonal', tag: '90\u00B0',
    title: 'Orthogonal vectors', exTag: 'independent \u00B7 angle 90\u00B0',
    body: '<span class="sp-ac">a</span> and <span class="sp-bc">b</span> point in genuinely different directions. Every point in the plane is a unique combination <code>c&middot;a + d&middot;b</code> \u2014 that&apos;s what <span class="sp-ic">independent</span> means.',
    insight: 'The <span class="sp-spc">span</span> of <span class="sp-ac">a</span> and <span class="sp-bc">b</span> is the set of <em>all</em> their linear combinations. When the parallelogram has positive area, that set is the entire plane.',
  },
  oblique60: {
    a: [2, 0], b: [2 * COS60, 2 * SIN60], group: 'independent', label: 'Oblique', tag: '60\u00B0',
    title: 'Oblique pair', exTag: 'independent \u00B7 angle 60\u00B0',
    body: 'Same story as orthogonal \u2014 just not perpendicular. The parallelogram shrinks (smaller sin&phi;), but its area is still positive, so the <span class="sp-spc">span</span> is still all of &#8477;&sup2;.',
    insight: 'Area of the parallelogram = <code>|a| &middot; |b| &middot; sin&phi;</code>. As long as sin&phi; \u2260 0, the vectors are independent.',
  },
  nearAligned15: {
    a: [2, 0], b: [2 * COS15, 2 * SIN15], group: 'independent', label: 'Near-aligned', tag: '15\u00B0',
    title: 'Near-aligned', exTag: 'independent \u00B7 angle 15\u00B0',
    body: 'Only 15&deg; apart. The parallelogram is a thin sliver, area is tiny, but it&apos;s <em>not</em> zero. Still <span class="sp-ic">independent</span>, still spans the plane.',
    insight: 'Near-dependence is fragile. Tiny numerical errors can flip rank from 2 to 1 \u2014 a recurring issue when working with floats.',
  },
  standardBasis: {
    a: [1, 0], b: [0, 1], group: 'independent', label: 'Standard basis', tag: 'e\u2081, e\u2082',
    title: 'Standard basis', exTag: 'independent \u00B7 unit square',
    body: 'The canonical pair: <code>e&#8321; = (1, 0)</code>, <code>e&#8322; = (0, 1)</code>. Their parallelogram is the unit square, area = 1.',
    insight: 'Every vector in &#8477;&sup2; is <code>x&middot;e&#8321; + y&middot;e&#8322;</code>. The coordinates <em>are</em> the coefficients.',
  },
  bTwoA: {
    a: [1.5, 1], b: [3, 2], group: 'dependent', label: 'b = 2a', tag: 'parallel',
    title: 'b is a multiple of a', exTag: 'dependent \u00B7 parallel',
    body: '<span class="sp-bc">b</span> = 2&middot;<span class="sp-ac">a</span>. They point the same way, so the parallelogram has <span class="sp-dc">zero area</span>. The <span class="sp-spc">span</span> collapses to a single line.',
    insight: 'No matter how you combine <span class="sp-ac">a</span> and <span class="sp-bc">b</span>, you can only reach points on the line they share. The plane is not spanned.',
  },
  bNegA: {
    a: [1.5, 1], b: [-2.25, -1.5], group: 'dependent', label: 'b = \u22121.5a', tag: 'anti',
    title: 'Anti-parallel', exTag: 'dependent \u00B7 anti-parallel',
    body: '<span class="sp-bc">b</span> = \u22121.5&middot;<span class="sp-ac">a</span>. Opposite direction is still a scalar multiple. Direction doesn&apos;t matter for dependence \u2014 only that they lie on the same line.',
    insight: 'Dependence is about <em>direction</em>, not orientation. A scalar of any sign (positive, negative, zero) still produces a dependent pair.',
  },
  sameLine: {
    a: [2, 1], b: [-1, -0.5], group: 'dependent', label: 'Same line', tag: 'det = 0',
    title: 'Same line', exTag: 'dependent \u00B7 det = 0',
    body: 'Both vectors live on the line <code>y = x/2</code>. Any combination stays on that line. det = 0, area = 0, rank = 1.',
    insight: 'The algebraic test (det = 0) and the geometric test (collapsed parallelogram) are the same statement seen two ways.',
  },
  aZero: {
    a: [0, 0], b: [1.5, 1], group: 'edge', label: 'a = 0', tag: 'span = b',
    title: 'a is the zero vector', exTag: 'degenerate \u00B7 rank 1',
    body: 'The zero vector contributes nothing. The <span class="sp-spc">span</span> is just the line through <span class="sp-bc">b</span>. Still <span class="sp-dc">dependent</span>, by the formal definition \u2014 zero is a trivial linear combination.',
    insight: 'Any set containing the zero vector is linearly dependent. There&apos;s no way for the zero vector to point in a &quot;new&quot; direction.',
  },
  bZero: {
    a: [1.5, 1], b: [0, 0], group: 'edge', label: 'b = 0', tag: 'span = a',
    title: 'b is the zero vector', exTag: 'degenerate \u00B7 rank 1',
    body: 'Symmetric to the previous case. <span class="sp-bc">b</span> = 0 means the <span class="sp-spc">span</span> reduces to the line through <span class="sp-ac">a</span>.',
    insight: 'Rank counts independent directions. With one vector zero, you have at most one direction \u2014 rank 1, no matter what the other vector is.',
  },
};

const SCENARIO_GROUPS = [
  { key: 'independent', label: 'Independent', tag: 'span = &#8477;&sup2;', tagClass: 'independent' },
  { key: 'dependent',   label: 'Dependent',   tag: 'span = line',          tagClass: 'dependent' },
  { key: 'edge',        label: 'Edge cases',  tag: 'degenerate',           tagClass: 'edge' },
];

const DEFAULT_LAYERS = {
  grid: true, parallelogram: true, lattice: true, trail: true, spanLine: true, labels: true,
};

const ALL_LAYER_DEFS = [
  { key: 'grid', label: 'grid' },
  { key: 'parallelogram', label: 'parallelogram', swatch: '#6366f1' },
  { key: 'lattice', label: 'lattice' },
  { key: 'trail', label: 'trail' },
  { key: 'spanLine', label: 'span line', swatch: '#dc2626' },
  { key: 'labels', label: 'labels' },
];

const DEFAULT_LEDE = {
  crumb: 'Linear Algebra<span class="sp-dot">&middot;</span>Span &amp; independence',
  body: 'Two vectors. Are they pointing in genuinely different directions, or is <span class="sp-bc">b</span> just a multiple of <span class="sp-ac">a</span>?',
};

// =====================================================================
//  SECTION 4  ::  Hooks
// =====================================================================
function useSpanState(options = {}) {
  const {
    initialA = [2, 1],
    initialB = [-1, 2],
    initialPreset = 'orthogonal',
    initialLayers = DEFAULT_LAYERS,
    scenarios = SCENARIOS,
    step = Math.PI / 6,
    duration = 3600,
    maxTrail = 120,
  } = options;

  // ----- core state -----
  const [a, setAState] = useState(initialA);
  const [b, setBState] = useState(initialB);
  const [preset, setPresetState] = useState(initialPreset);
  const [layers, setLayers] = useState(initialLayers);

  // ----- sweep state -----
  const [phi, setPhiState] = useState(0);          // sweep angle in radians, 0..2π
  const [trail, setTrail] = useState([]);
  const [playing, setPlayingState] = useState(false);

  // refs
  const sweepRef = useRef({ initialized: false, baseAngle: 0, radius: 1.8 });
  const aRef = useRef(a);
  const bRef = useRef(b);
  const phiRef = useRef(0);
  const playingRef = useRef(false);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(0);

  useEffect(() => { aRef.current = a; }, [a]);
  useEffect(() => { bRef.current = b; }, [b]);

  // ----- sweep helpers -----
  const cancelRaf = useCallback(() => {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    playingRef.current = false;
    setPlayingState(false);
  }, []);

  const resetSweepInternal = useCallback(() => {
    cancelRaf();
    sweepRef.current.initialized = false;
    sweepRef.current.baseAngle = 0;
    sweepRef.current.radius = 1.8;
    phiRef.current = 0;
    setPhiState(0);
    setTrail([]);
  }, [cancelRaf]);

  // ----- public setters: clear preset, reset sweep -----
  const setA = useCallback((next) => {
    setAState(next);
    setPresetState(null);
    resetSweepInternal();
  }, [resetSweepInternal]);

  const setB = useCallback((next) => {
    setBState(next);
    setPresetState(null);
    resetSweepInternal();
  }, [resetSweepInternal]);

  const selectPreset = useCallback((key) => {
    const sc = scenarios[key];
    if (!sc) return;
    setAState(sc.a.slice());
    setBState(sc.b.slice());
    setPresetState(key);
    resetSweepInternal();
  }, [scenarios, resetSweepInternal]);

  // ----- sweep internals -----
  const ensureInit = useCallback(() => {
    if (sweepRef.current.initialized) return;
    const cur = bRef.current;
    const mag = Math.hypot(cur[0], cur[1]);
    sweepRef.current.radius = Math.max(0.5, Math.min(3.6, mag || 1.8));
    sweepRef.current.baseAngle = mag > 1e-6 ? Math.atan2(cur[1], cur[0]) : 0;
    sweepRef.current.initialized = true;
    phiRef.current = 0;
    setPhiState(0);
  }, []);

  const applyPhi = useCallback((rad, addTrail) => {
    let normalized = rad;
    if (normalized < 0) normalized = ((normalized % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    if (normalized > 2 * Math.PI) normalized = normalized % (2 * Math.PI);
    phiRef.current = normalized;
    setPhiState(normalized);
    const theta = sweepRef.current.baseAngle + normalized;
    const r = sweepRef.current.radius;
    const newB = [r * Math.cos(theta), r * Math.sin(theta)];
    setBState(newB);
    bRef.current = newB;
    if (addTrail) {
      setTrail((prev) => {
        const next = prev.concat([{ b: newB }]);
        if (next.length > maxTrail) next.shift();
        return next;
      });
    }
  }, [maxTrail]);

  const play = useCallback(() => {
    ensureInit();
    if (playingRef.current) return;
    if (phiRef.current >= 2 * Math.PI - 1e-3) {
      setTrail([]);
      phiRef.current = 0;
      setPhiState(0);
    }
    playingRef.current = true;
    setPlayingState(true);
    lastTimeRef.current = typeof performance !== 'undefined' ? performance.now() : Date.now();
    const frame = (now) => {
      if (!playingRef.current) return;
      const dt = now - lastTimeRef.current;
      lastTimeRef.current = now;
      const delta = (dt / duration) * 2 * Math.PI;
      const next = phiRef.current + delta;
      if (next >= 2 * Math.PI) {
        applyPhi(2 * Math.PI - 1e-6, true);
        playingRef.current = false;
        setPlayingState(false);
        rafRef.current = null;
        return;
      }
      applyPhi(next, true);
      rafRef.current = requestAnimationFrame(frame);
    };
    rafRef.current = requestAnimationFrame(frame);
  }, [ensureInit, applyPhi, duration]);

  const pause = cancelRaf;

  const stepFwd = useCallback(() => {
    ensureInit();
    cancelRaf();
    const next = Math.min(2 * Math.PI - 1e-6, Math.floor(phiRef.current / step + 1.0001) * step);
    applyPhi(next, true);
  }, [ensureInit, cancelRaf, applyPhi, step]);

  const stepBack = useCallback(() => {
    ensureInit();
    cancelRaf();
    const prev = Math.max(0, Math.ceil(phiRef.current / step - 1.0001) * step);
    applyPhi(prev, true);
  }, [ensureInit, cancelRaf, applyPhi, step]);

  const resetSweep = useCallback(() => {
    resetSweepInternal();
  }, [resetSweepInternal]);

  const scrubDeg = useCallback((deg) => {
    ensureInit();
    cancelRaf();
    applyPhi(deg * Math.PI / 180, false);
  }, [ensureInit, cancelRaf, applyPhi]);

  useEffect(() => () => {
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
  }, []);

  // is sweep "active" in the sense of having state to show (trail, anchor, etc.)?
  const sweepActive = sweepRef.current.initialized && (trail.length > 0 || playing);

  return {
    // core
    a, b, preset, layers,
    setA, setB, selectPreset, setLayers,
    // sweep
    phi, trail, playing, sweepActive,
    play, pause, stepFwd, stepBack, resetSweep, scrubDeg,
    step,
  };
}

// =====================================================================
//  SECTION 5  ::  Component CSS
// =====================================================================
const COMPONENT_CSS = `
.sp-root{
  --bg:#f7f9fc;--surface:#fff;--surface-2:#f3f6fa;
  --border:#dde3ec;--border-strong:#c4cdda;
  --text:#0f1729;--text-soft:#243049;--text-dim:#4a5673;--text-faint:#7989a3;
  --accent:#2b5bd7;--accent-hover:#1e46b3;--accent-soft:#eaf0fb;--accent-line:#c8d6f1;
  --a:#ea580c;--b:#0891b2;--indep:#6366f1;--dep:#dc2626;--span:#059669;
  --aSoft:rgba(234,88,12,.10);--bSoft:rgba(8,145,178,.10);
  --indepSoft:rgba(99,102,241,.15);--depSoft:rgba(220,38,38,.10);
  --grid:#e2e8f0;--grid-axis:#94a3b8;
  --font-display:'Fraunces',Georgia,serif;
  --font-body:'IBM Plex Sans',-apple-system,BlinkMacSystemFont,sans-serif;
  --font-mono:'JetBrains Mono',Menlo,monospace;
  --shadow-card:0 1px 0 rgba(15,23,41,.04),0 1px 2px rgba(15,23,41,.04);
  --radius:6px;
  color:var(--text);font-family:var(--font-body);line-height:1.5;
  -webkit-font-smoothing:antialiased;background:var(--bg);
}
.sp-root *{box-sizing:border-box}

.sp-app{display:grid;grid-template-rows:auto auto;gap:10px;padding:14px 24px;max-width:1340px;margin:0 auto;background:var(--bg)}

.sp-lede{display:flex;align-items:baseline;gap:14px;font-size:14px;color:var(--text-dim);line-height:1.45}
.sp-crumb{font-family:var(--font-mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--text-faint);white-space:nowrap}
.sp-crumb .sp-dot{color:var(--accent);margin:0 6px}
.sp-lede .sp-ac{color:var(--a);font-weight:500}
.sp-lede .sp-bc{color:var(--b);font-weight:500}

.sp-main{display:grid;gap:14px;align-items:start;grid-template-columns:230px 620px minmax(360px,1fr)}
.sp-scen-col,.sp-canvas-col,.sp-info-col{display:flex;flex-direction:column;gap:10px;min-width:0}
@media (max-width:1240px){.sp-main{grid-template-columns:1fr}}

.sp-canvas-wrap{width:100%;display:flex;align-items:center;justify-content:center}
.sp-canvas{width:100%;aspect-ratio:1/1;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow-card);display:block;touch-action:none}
.sp-canvas.dragging-a,.sp-canvas.dragging-b{cursor:grabbing}

.sp-readouts{display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%}
.sp-readout{background:var(--surface);border:1px solid var(--border);border-left:3px solid currentColor;padding:8px 12px;border-radius:5px;display:flex;align-items:baseline;gap:10px;font-family:var(--font-mono);font-size:13.5px;font-weight:600;min-width:0}
.sp-readout .sp-lab{font-family:var(--font-display);font-style:italic;font-size:17px;font-weight:500;flex-shrink:0}
.sp-readout .sp-eq{color:var(--text-faint);font-weight:400}
.sp-readout .sp-val{color:var(--text);font-weight:500;font-variant-numeric:tabular-nums;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sp-readout.sp-a{color:var(--a)}
.sp-readout.sp-b{color:var(--b)}

.sp-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow-card);padding:12px 14px}
.sp-card h2{font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--text-faint);margin:0 0 10px;display:flex;align-items:center;justify-content:space-between}
.sp-badge{color:var(--accent);margin-right:6px;font-weight:600}
.sp-card h2 .sp-note{font-weight:500;letter-spacing:.04em;text-transform:none;font-size:11px;color:var(--text-dim);font-family:var(--font-mono)}

/* ---- Animation card ---- */
.sp-anim-card{padding:12px 14px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow-card)}
.sp-anim-head{font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--text-faint);margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;gap:10px}
.sp-anim-head .sp-t-readout{font-weight:500;letter-spacing:.05em;text-transform:none;color:var(--accent);font-family:var(--font-mono)}
.sp-anim-head .sp-det-tick{color:var(--text-faint);font-weight:500;margin-left:8px;font-family:var(--font-mono);text-transform:none;letter-spacing:.02em;font-size:10.5px}
.sp-anim-head .sp-det-tick .sp-b-mark{color:var(--dep);font-weight:600}

.sp-anim-progress{height:6px;background:var(--surface-2);border-radius:3px;position:relative;margin-bottom:10px}
.sp-anim-progress .sp-fill{position:absolute;left:0;top:0;bottom:0;border-radius:3px;background:linear-gradient(90deg,var(--indep),var(--dep) 50%,var(--indep));transition:width .08s linear}
.sp-anim-progress .sp-zero-mark{position:absolute;top:-3px;bottom:-3px;width:2px;background:var(--dep);border-radius:1px;transform:translateX(-50%)}
.sp-anim-progress .sp-zero-label{position:absolute;top:-15px;font-family:var(--font-mono);font-size:9px;font-weight:600;color:var(--dep);letter-spacing:.04em;transform:translateX(-50%);white-space:nowrap}

.sp-anim-controls{display:flex;gap:6px;align-items:center}
.sp-ctrl-btn{background:var(--surface-2);border:1px solid var(--border);width:30px;height:28px;border-radius:4px;cursor:pointer;color:var(--text-dim);font-weight:600;display:inline-flex;align-items:center;justify-content:center;padding:0;transition:all .12s}
.sp-ctrl-btn:hover{background:var(--accent-soft);color:var(--accent);border-color:var(--accent-line)}
.sp-ctrl-btn:disabled{opacity:.4;cursor:not-allowed}
.sp-ctrl-btn svg{width:11px;height:11px;fill:currentColor}
.sp-ctrl-btn.sp-primary{background:var(--accent);border-color:var(--accent);color:#fff;width:auto;padding:0 14px;font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;font-family:var(--font-mono)}
.sp-ctrl-btn.sp-primary:hover{background:var(--accent-hover);border-color:var(--accent-hover);color:#fff}

.sp-slider{flex:1;-webkit-appearance:none;appearance:none;height:4px;border-radius:2px;outline:none;cursor:pointer;min-width:60px;margin:0 4px}
.sp-slider::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:var(--accent);border:2px solid #fff;cursor:pointer;box-shadow:0 0 0 1px var(--accent)}
.sp-slider::-moz-range-thumb{width:12px;height:12px;border-radius:50%;background:var(--accent);border:2px solid #fff;cursor:pointer}
.sp-t-label{font-family:var(--font-mono);font-size:11px;color:var(--text-faint);min-width:70px;text-align:right;font-variant-numeric:tabular-nums}
.sp-t-label .sp-val{color:var(--text);font-weight:600}

/* sparkline below controls */
.sp-sparkline{margin-top:10px;padding-top:8px;border-top:1px dashed var(--border)}
.sp-sparkline-label{display:flex;justify-content:space-between;font-family:var(--font-mono);font-size:9px;color:var(--text-faint);letter-spacing:.08em;text-transform:uppercase;margin-bottom:3px}
.sp-sparkline-label .sp-val{color:var(--text);font-weight:600;text-transform:none;letter-spacing:.02em}
.sp-sparkline-label .sp-val.sp-pos{color:var(--indep)}
.sp-sparkline-label .sp-val.sp-neg{color:var(--dep)}
.sp-sparkline svg{display:block;width:100%;height:42px}

/* ---- Chips ---- */
.sp-chips-strip{display:flex;flex-wrap:wrap;gap:2px;padding:4px 8px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow-card)}
.sp-chip{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;font-family:var(--font-mono);font-size:11px;letter-spacing:.04em;color:var(--text-faint);background:transparent;border:1px solid transparent;border-radius:4px;cursor:pointer;user-select:none;transition:all .12s}
.sp-chip input{width:12px;height:12px;margin:0;accent-color:var(--accent);cursor:pointer}
.sp-chip:hover,.sp-chip:has(input:checked){color:var(--text);background:var(--accent-soft)}
.sp-chip .sp-sw{display:inline-block;width:11px;height:3px;border-radius:1px}

/* ---- Explanation card ---- */
.sp-ex-header{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--border)}
.sp-ex-header h3{font-family:var(--font-display);font-weight:500;font-size:19px;color:var(--text);margin:0;letter-spacing:-.01em;line-height:1.2}
.sp-ex-tag{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--text-faint);white-space:nowrap}
.sp-ex-body{color:var(--text-soft);font-size:13.5px;line-height:1.55;margin:0 0 10px}
.sp-ex-body .sp-ac{color:var(--a);font-weight:500}
.sp-ex-body .sp-bc{color:var(--b);font-weight:500}
.sp-ex-body .sp-ic{color:var(--indep);font-weight:500}
.sp-ex-body .sp-dc{color:var(--dep);font-weight:500}
.sp-ex-body .sp-spc{color:var(--span);font-weight:500}
.sp-ex-body code,.sp-ex-block code{font-family:var(--font-mono);font-size:11.5px;background:var(--accent-soft);color:var(--accent-hover);padding:1px 4px;border-radius:3px}
.sp-ex-block{margin-top:10px;padding-top:10px;border-top:1px dashed var(--border)}
.sp-ex-block-label{font-family:var(--font-mono);font-size:9.5px;letter-spacing:.15em;text-transform:uppercase;color:var(--accent);margin-bottom:4px}
.sp-ex-block p{margin:0;font-size:12.5px;color:var(--text-soft);line-height:1.55}
.sp-ex-block .sp-ac{color:var(--a);font-weight:500}
.sp-ex-block .sp-bc{color:var(--b);font-weight:500}
.sp-ex-block .sp-ic{color:var(--indep);font-weight:500}
.sp-ex-block .sp-dc{color:var(--dep);font-weight:500}
.sp-ex-block .sp-spc{color:var(--span);font-weight:500}

/* ---- Vectors editor card ---- */
.sp-vec-grid{display:grid;grid-template-columns:auto auto;gap:8px 12px;align-items:center;padding:2px 0;justify-content:center}
.sp-vec-lab{font-family:var(--font-display);font-style:italic;font-size:18px;font-weight:500}
.sp-vec-lab.sp-a{color:var(--a)}
.sp-vec-lab.sp-b{color:var(--b)}
.sp-vec-bracket{display:grid;grid-template-columns:auto auto;gap:3px 8px;padding:5px 11px;position:relative;font-family:var(--font-mono);font-size:12px}
.sp-vec-bracket::before,.sp-vec-bracket::after{content:'';position:absolute;top:3px;bottom:3px;width:5px;border:1.3px solid var(--text-dim)}
.sp-vec-bracket::before{left:0;border-right:none;border-radius:2px 0 0 2px}
.sp-vec-bracket::after{right:0;border-left:none;border-radius:0 2px 2px 0}
.sp-vec-bracket input{width:54px;padding:4px 5px;background:var(--surface-2);border:1px solid var(--border);border-radius:3px;color:var(--text);font-family:var(--font-mono);font-size:12px;text-align:center;outline:none;-moz-appearance:textfield}
.sp-vec-bracket input::-webkit-outer-spin-button,.sp-vec-bracket input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}
.sp-vec-bracket input:focus{border-color:var(--accent);background:var(--accent-soft)}

/* ---- Live card ---- */
.sp-live-grid{display:grid;grid-template-columns:auto 1fr;gap:5px 14px;align-items:baseline}
.sp-lk{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--text-faint)}
.sp-lv{font-family:var(--font-mono);font-size:12.5px;color:var(--text);font-weight:500;text-align:right;font-variant-numeric:tabular-nums}
.sp-lv.sp-a-val{color:var(--a)}
.sp-lv.sp-b-val{color:var(--b)}
.sp-lv.sp-live{color:var(--accent)}
.sp-lv.sp-indep{color:var(--indep);font-weight:600}
.sp-lv.sp-dep{color:var(--dep);font-weight:600}

.sp-status-strip{margin-top:10px;padding:9px 12px;border-radius:5px;display:flex;align-items:center;gap:8px;font-family:var(--font-mono);font-size:12px;font-weight:600;letter-spacing:.04em}
.sp-status-strip.sp-indep{background:var(--indepSoft);border:1px solid rgba(99,102,241,.4);color:var(--indep)}
.sp-status-strip.sp-dep{background:var(--depSoft);border:1px solid rgba(220,38,38,.4);color:var(--dep)}
.sp-status-strip.sp-zero{background:var(--surface-2);border:1px solid var(--border-strong);color:var(--text-dim)}
.sp-status-strip .sp-pill{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;color:#fff;font-weight:700;font-size:11px}
.sp-status-strip.sp-indep .sp-pill{background:var(--indep)}
.sp-status-strip.sp-dep .sp-pill{background:var(--dep)}
.sp-status-strip.sp-zero .sp-pill{background:var(--text-dim)}

/* ---- Scenarios panel ---- */
.sp-scenarios-card h2{margin-bottom:8px}
.sp-scen-sections{display:flex;flex-direction:column;gap:13px}
.sp-scen-section-label{display:flex;align-items:center;justify-content:space-between;gap:6px;font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--text-dim);margin-bottom:6px}
.sp-tag{padding:2px 7px;border-radius:3px;font-size:9.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;border:1px solid transparent;white-space:nowrap}
.sp-tag.independent{background:var(--indepSoft);color:var(--indep);border-color:rgba(99,102,241,.4)}
.sp-tag.dependent{background:var(--depSoft);color:var(--dep);border-color:rgba(220,38,38,.4)}
.sp-tag.edge{background:var(--surface-2);color:var(--text-dim);border-color:var(--border-strong)}
.sp-preset-grid{display:flex;flex-direction:column;gap:4px}
.sp-preset-btn{
  background:var(--surface-2);border:1px solid var(--border);border-left:3px solid var(--border-strong);
  color:var(--text-soft);padding:6px 10px;
  font-family:var(--font-body);font-size:12.5px;font-weight:500;
  cursor:pointer;border-radius:4px;text-align:left;transition:all .12s;
  display:flex;justify-content:space-between;align-items:baseline;gap:6px;
}
.sp-preset-btn .sp-ptag{font-family:var(--font-mono);font-size:9.5px;color:var(--text-faint)}
.sp-preset-btn.independent{border-left-color:var(--indep)}
.sp-preset-btn.dependent{border-left-color:var(--dep)}
.sp-preset-btn.edge{border-left-color:var(--text-faint)}
.sp-preset-btn:hover{background:var(--accent-soft);border-color:var(--accent-line);color:var(--accent-hover)}
.sp-preset-btn.sp-active{background:var(--accent-soft);border-color:var(--accent-line);color:var(--accent-hover);font-weight:600;border-left-color:var(--accent)}
.sp-preset-btn.sp-active .sp-ptag{color:var(--accent)}

/* ---- SVG primitives ---- */
.sp-grid-line{stroke:var(--grid);stroke-width:1;fill:none}
.sp-grid-axis{stroke:var(--grid-axis);stroke-width:1.3;fill:none}
.sp-span-shade{fill:#6366f1;opacity:.03}
.sp-span-line{stroke:var(--dep);stroke-width:2.2;fill:none;opacity:.9;stroke-dasharray:8 5}
.sp-span-halo{stroke:var(--dep);stroke-width:12;fill:none;opacity:.10}
.sp-lattice-dot{fill:var(--indep);opacity:.42}
.sp-parallelogram{stroke-width:1.5}
.sp-para-pos{fill:rgba(99,102,241,0.18);stroke:#6366f1}
.sp-para-neg{fill:rgba(124,58,237,0.16);stroke:#7c3aed}
.sp-para-zero{fill:rgba(148,163,184,0.18);stroke:#94a3b8}
.sp-sweep-circle{fill:none;stroke:var(--b);stroke-width:1;stroke-dasharray:3 4;opacity:.30}
.sp-angle-arc{fill:none;stroke:var(--text-faint);stroke-width:1.2;stroke-dasharray:2 3}
.sp-angle-label{fill:var(--text-faint);font-family:var(--font-mono);font-size:11px;font-weight:600}
.sp-trail-dot{fill:var(--b);stroke:none}
.sp-trail-poly{fill:none;stroke:var(--indep);stroke-width:1}
.sp-a-shaft{stroke:var(--a);stroke-width:2.6;fill:none;stroke-linecap:round}
.sp-a-handle{fill:var(--a);stroke:#fff;stroke-width:2;cursor:grab}
.sp-a-handle:active{cursor:grabbing}
.sp-a-label{fill:var(--a);font-family:var(--font-display);font-style:italic;font-size:17px;font-weight:600}
.sp-a-anchor circle{fill:none;stroke:var(--a);stroke-width:1;stroke-dasharray:2 2;opacity:.7}
.sp-a-anchor text{fill:var(--a);font-family:var(--font-mono);font-size:8px;font-weight:700;opacity:.85}
.sp-b-shaft{stroke:var(--b);stroke-width:2.6;fill:none;stroke-linecap:round}
.sp-b-handle{fill:var(--b);stroke:#fff;stroke-width:2;cursor:grab}
.sp-b-handle:active{cursor:grabbing}
.sp-b-label{fill:var(--b);font-family:var(--font-display);font-style:italic;font-size:17px;font-weight:600}
.sp-b-zero{fill:none;stroke:var(--dep);stroke-width:2;stroke-dasharray:3 3}
.sp-origin-dot{fill:var(--text-soft)}
.sp-spanlbl-indep{fill:var(--indep);font-family:var(--font-display);font-style:italic;font-size:14px;font-weight:500}
.sp-spanlbl-dep{fill:var(--dep);font-family:var(--font-display);font-style:italic;font-size:14px;font-weight:500}
.sp-spanlbl-zero{fill:var(--text-dim);font-family:var(--font-display);font-style:italic;font-size:14px;font-weight:500}
`;

// =====================================================================
//  SECTION 6  ::  Sub-components
// =====================================================================

// --- CellInput: numeric input with local-string buffer ---
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

// --- SpanCanvas: main canvas with two draggable handles ---
function SpanCanvas({
  a = [2, 1],
  b = [-1, 2],
  trail = [],
  layers = DEFAULT_LAYERS,
  geom = DEFAULT_GEOM,
  sweepActive = false,
  sweepRadius = null,
  onAChange,
  onBChange,
  draggable = true,
  className,
  style,
}) {
  const svgRef = useRef(null);
  const draggingRef = useRef(null); // 'a' | 'b' | null
  const [draggingState, setDraggingState] = useState(null);

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
    if (handle !== 'a' && handle !== 'b') return;
    draggingRef.current = handle;
    setDraggingState(handle);
    try { e.target.setPointerCapture(e.pointerId); } catch (_) {}
    if (handle === 'a' && onAChange) onAChange(pointerToMath(e));
    if (handle === 'b' && onBChange) onBChange(pointerToMath(e));
  };
  const onPointerMove = (e) => {
    const handle = draggingRef.current;
    if (!handle) return;
    if (handle === 'a' && onAChange) onAChange(pointerToMath(e));
    if (handle === 'b' && onBChange) onBChange(pointerToMath(e));
  };
  const onPointerUp = (e) => {
    if (!draggingRef.current) return;
    try { e.target.releasePointerCapture(e.pointerId); } catch (_) {}
    draggingRef.current = null;
    setDraggingState(null);
  };

  const rank = Math2D.rank2(a, b);
  const spanDir = rank === 1 ? Math2D.spanDir(a, b) : null;
  const radiusForCircle = sweepActive && sweepRadius != null ? sweepRadius : null;

  let inner = '';
  if (layers.grid) inner += SVGRender.grid(geom);
  if (rank === 2) inner += SVGRender.spanShade(geom);
  if (layers.spanLine && rank === 1) inner += SVGRender.spanLine(spanDir, geom);
  if (layers.lattice) inner += SVGRender.lattice(a, b, geom);
  if (layers.parallelogram) inner += SVGRender.parallelogram(a, b, geom);
  if (radiusForCircle != null) inner += SVGRender.sweepCircle(radiusForCircle, geom);
  if (layers.trail) inner += SVGRender.trail(trail, a, geom);
  if (sweepActive) inner += SVGRender.aAnchor(a, geom);
  // angle arc only when both vectors have meaningful magnitude
  inner += SVGRender.angleArc(a, b, geom);
  inner += SVGRender.aArrow(a, layers.labels, geom);
  inner += SVGRender.bArrow(b, layers.labels, geom);
  inner += SVGRender.origin(geom);
  if (layers.labels) inner += SVGRender.spanLabel(rank, geom);

  // hit circles rendered in React so we can attach data-handle
  const tx = SVGRender._proj(geom);
  const [ax, ay] = tx(a);
  const [bx, by] = tx(b);

  const canvasClass = 'sp-canvas'
    + (draggingState === 'a' ? ' dragging-a' : '')
    + (draggingState === 'b' ? ' dragging-b' : '')
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
        <marker id="sp-arr-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
          <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#ea580c" />
        </marker>
        <marker id="sp-arr-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
          <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#0891b2" />
        </marker>
      </defs>
      <g dangerouslySetInnerHTML={{ __html: inner }} />
      {draggable && onAChange && (
        <circle data-handle="a" cx={ax} cy={ay} r={14} fill="transparent" style={{ cursor: 'grab' }} />
      )}
      {draggable && onBChange && (
        <circle data-handle="b" cx={bx} cy={by} r={14} fill="transparent" style={{ cursor: 'grab' }} />
      )}
    </svg>
  );
}

// --- LayerChips ---
function LayerChips({ layers = {}, onChange = () => {}, enabledLayers, layerDefs = ALL_LAYER_DEFS }) {
  const defs = enabledLayers ? layerDefs.filter((d) => enabledLayers.includes(d.key)) : layerDefs;
  return (
    <div className="sp-chips-strip">
      {defs.map((d) => (
        <label key={d.key} className="sp-chip">
          <input
            type="checkbox"
            checked={!!layers[d.key]}
            onChange={(e) => onChange({ ...layers, [d.key]: e.target.checked })}
          />
          {d.label}
          {d.swatch && <span className="sp-sw" style={{ background: d.swatch }} />}
        </label>
      ))}
    </div>
  );
}

// --- CanvasReadout ---
function CanvasReadout({ kind = 'a', label = 'a', value = '(0, 0)' }) {
  return (
    <div className={`sp-readout sp-${kind}`}>
      <span className="sp-lab">{label}</span>
      <span className="sp-eq">=</span>
      <span className="sp-val">{value}</span>
    </div>
  );
}

// --- VectorsCard: two-row a, b editor ---
function VectorsCard({ a = [2, 1], b = [-1, 2], onAChange = () => {}, onBChange = () => {}, step = 0.1 }) {
  return (
    <div className="sp-card">
      <h2><span><span className="sp-badge">A</span>Vectors</span></h2>
      <div className="sp-vec-grid">
        <span className="sp-vec-lab sp-a">a</span>
        <div className="sp-vec-bracket">
          <CellInput value={a[0]} step={step} onCommit={(v) => onAChange([v, a[1]])} />
          <CellInput value={a[1]} step={step} onCommit={(v) => onAChange([a[0], v])} />
        </div>
        <span className="sp-vec-lab sp-b">b</span>
        <div className="sp-vec-bracket">
          <CellInput value={b[0]} step={step} onCommit={(v) => onBChange([v, b[1]])} />
          <CellInput value={b[1]} step={step} onCommit={(v) => onBChange([b[0], v])} />
        </div>
      </div>
    </div>
  );
}

// --- LiveCard ---
function LiveCard({ a = [2, 1], b = [-1, 2] }) {
  const magA = Math.hypot(a[0], a[1]);
  const magB = Math.hypot(b[0], b[1]);
  const angle = Math2D.angleBetween(a, b);
  const det = Math2D.det(a, b);
  const area = Math.abs(det);
  const rank = Math2D.rank2(a, b);

  let status, statusCls, statusPill, statusText;
  if (rank === 2) {
    status = 'INDEPENDENT'; statusCls = 'sp-indep'; statusPill = '\u2713';
    statusText = <span>INDEPENDENT &middot; span = &#8477;&sup2;</span>;
  } else if (rank === 1) {
    status = 'DEPENDENT'; statusCls = 'sp-dep'; statusPill = '\u2715';
    statusText = <span>DEPENDENT &middot; span = line</span>;
  } else {
    status = 'DEGENERATE'; statusCls = 'sp-zero'; statusPill = '\u00B7';
    statusText = <span>DEGENERATE &middot; span = {'{'}0{'}'}</span>;
  }

  return (
    <div className="sp-card">
      <h2><span><span className="sp-badge">04</span>Live</span><span className="sp-note">drag a, b</span></h2>
      <div className="sp-live-grid">
        <span className="sp-lk">|a|</span><span className="sp-lv sp-a-val">{Math2D.fmt(magA)}</span>
        <span className="sp-lk">|b|</span><span className="sp-lv sp-b-val">{Math2D.fmt(magB)}</span>
        <span className="sp-lk">angle(a, b)</span><span className="sp-lv">{Math2D.fmt(angle)}&deg;</span>
        <span className="sp-lk">det [a b]</span><span className="sp-lv sp-live">{Math2D.fmt(det)}</span>
        <span className="sp-lk">area of &#9649;</span><span className="sp-lv">{Math2D.fmt(area)}</span>
        <span className="sp-lk">rank [a b]</span>
        <span className={'sp-lv ' + (rank === 2 ? 'sp-indep' : (rank === 1 ? 'sp-dep' : ''))}>{rank}</span>
      </div>
      <div className={'sp-status-strip ' + statusCls}>
        <span className="sp-pill">{statusPill}</span>
        {statusText}
      </div>
    </div>
  );
}

// --- ExplanationCard ---
function ExplanationCard({ preset = 'orthogonal', scenarios = SCENARIOS, override }) {
  let sc = scenarios[preset];
  if (!sc) sc = scenarios[Object.keys(scenarios)[0]];
  if (override && override.byPreset && override.byPreset[preset]) sc = override.byPreset[preset];
  return (
    <div className="sp-card">
      <div className="sp-ex-header">
        <h3 dangerouslySetInnerHTML={{ __html: sc.title }} />
        <span className="sp-ex-tag" dangerouslySetInnerHTML={{ __html: sc.exTag || sc.tag }} />
      </div>
      <p className="sp-ex-body" dangerouslySetInnerHTML={{ __html: sc.body }} />
      {sc.insight && (
        <div className="sp-ex-block">
          <div className="sp-ex-block-label">Insight</div>
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
  title = 'Vectors',
}) {
  const visible = visibleScenarios
    ? Object.fromEntries(visibleScenarios.map((k) => [k, scenarios[k]]).filter(([, s]) => s))
    : scenarios;
  return (
    <div className="sp-card sp-scenarios-card">
      <h2><span><span className="sp-badge">{badge}</span>{title}</span></h2>
      <div className="sp-scen-sections">
        {groups.map((g) => {
          const items = Object.entries(visible).filter(([, sc]) => sc.group === g.key);
          if (!items.length) return null;
          return (
            <div className="sp-scen-section" key={g.key}>
              <div className="sp-scen-section-label">
                <span>{g.label}</span>
                <span className={'sp-tag ' + g.tagClass} dangerouslySetInnerHTML={{ __html: g.tag }} />
              </div>
              <div className="sp-preset-grid">
                {items.map(([key, sc]) => (
                  <button
                    key={key}
                    className={'sp-preset-btn ' + g.tagClass + (preset === key ? ' sp-active' : '')}
                    onClick={() => onSelect(key)}
                    type="button"
                  >
                    <span dangerouslySetInnerHTML={{ __html: sc.label }} />
                    <span className="sp-ptag" dangerouslySetInnerHTML={{ __html: sc.tag }} />
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

// --- AnimationCard ---
const ICON_RESET = <svg viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" /></svg>;
const ICON_BACK  = <svg viewBox="0 0 24 24"><path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z" /></svg>;
const ICON_FWD   = <svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6h2v12h-2V6z" /></svg>;

// Compute the next zero-crossing of det as phi increases from current.
// Phase = angle from a to b at sweep_angle = 0; det(phi) = |a||b|·sin(phase + phi).
// Zero crossings of det in [0, 2π): phi = (k·π - phase) mod 2π for k = 0, 1, 2.
function computeZeroCrossings(a, b, baseB) {
  const phaseA = (a[0] === 0 && a[1] === 0) ? 0 : Math.atan2(a[1], a[0]);
  // baseB is the (cos baseAngle, sin baseAngle) reference; phase = baseAngle - phaseA
  // If baseB is null, use current b
  const refAng = baseB ? Math.atan2(baseB[1], baseB[0]) : Math.atan2(b[1], b[0]);
  let phase = refAng - phaseA;
  while (phase < 0) phase += 2 * Math.PI;
  while (phase >= 2 * Math.PI) phase -= 2 * Math.PI;
  const zeros = [];
  for (let k = 0; k < 3; k++) {
    let z = k * Math.PI - phase;
    while (z < 0) z += 2 * Math.PI;
    while (z >= 2 * Math.PI) z -= 2 * Math.PI;
    zeros.push(z);
  }
  return Array.from(new Set(zeros.map((z) => Math.round(z * 180 / Math.PI)))).sort((x, y) => x - y);
}

function DetSparkline({ a = [1, 0], b = [0, 1], phi = 0, zeros = [0, 180, 360] }) {
  // amplitude based on current |a| * |b|
  const amp = Math.hypot(a[0], a[1]) * Math.hypot(b[0], b[1]);
  // Compute phase = current angle from a to b minus current phi
  // det(phi_x) = amp · sin(phase + phi_x)
  const phaseA = (a[0] === 0 && a[1] === 0) ? 0 : Math.atan2(a[1], a[0]);
  const phaseB = (b[0] === 0 && b[1] === 0) ? 0 : Math.atan2(b[1], b[0]);
  let initPhase = (phaseB - phaseA) - phi;
  while (initPhase < 0) initPhase += 2 * Math.PI;
  while (initPhase >= 2 * Math.PI) initPhase -= 2 * Math.PI;

  // Build curve in viewBox 0..360 horizontally, -1..1 mapped to y range
  const yBase = 21;
  const yAmp = 14;
  const steps = 73;
  let pathPos = `M 0 ${yBase}`;
  let pathNeg = `M 180 ${yBase}`;
  const curvePts = [];
  for (let i = 0; i <= steps; i++) {
    const xDeg = i * (360 / steps);
    const xRad = xDeg * Math.PI / 180;
    const y = yBase - yAmp * Math.sin(initPhase + xRad);
    curvePts.push(`${xDeg.toFixed(2)},${y.toFixed(2)}`);
  }
  const curvePath = 'M ' + curvePts.join(' L ');

  // Filled lobes: just connect curve to baseline at zero crossings
  // For simplicity, build polygons that follow the curve and close to baseline
  const lobePathFromCurve = (startDeg, endDeg) => {
    const startIdx = Math.round(startDeg / 360 * steps);
    const endIdx = Math.round(endDeg / 360 * steps);
    const slice = curvePts.slice(startIdx, endIdx + 1);
    if (!slice.length) return '';
    return `M ${startDeg.toFixed(1)} ${yBase} L ${slice.join(' L ')} L ${endDeg.toFixed(1)} ${yBase} Z`;
  };

  // Determine sign at midpoint of each [zero_i, zero_{i+1}] segment
  const sortedZeros = [0, ...zeros.filter((z) => z > 0 && z < 360), 360];
  const lobes = [];
  for (let i = 0; i < sortedZeros.length - 1; i++) {
    const z1 = sortedZeros[i];
    const z2 = sortedZeros[i + 1];
    if (z2 - z1 < 0.5) continue;
    const mid = (z1 + z2) / 2;
    const valAtMid = amp * Math.sin(initPhase + mid * Math.PI / 180);
    if (valAtMid > 0) lobes.push({ d: lobePathFromCurve(z1, z2), cls: 'sp-lobe-pos' });
    else if (valAtMid < 0) lobes.push({ d: lobePathFromCurve(z1, z2), cls: 'sp-lobe-neg' });
  }

  const playheadX = (phi * 180 / Math.PI) / 360 * 360;

  return (
    <svg viewBox="0 0 360 42" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1={yBase} x2="360" y2={yBase} stroke="#dde3ec" strokeWidth="1" />
      {lobes.map((l, i) => (
        <path key={i} d={l.d} fill={l.cls === 'sp-lobe-pos' ? '#6366f1' : '#dc2626'} opacity={l.cls === 'sp-lobe-pos' ? 0.18 : 0.15} />
      ))}
      <path d={curvePath} fill="none" stroke="#7989a3" strokeWidth="1.2" />
      {zeros.map((z, i) => (
        <circle key={'z' + i} cx={z} cy={yBase} r="2.5" fill="#dc2626" />
      ))}
      <line x1={playheadX} y1="0" x2={playheadX} y2="42" stroke="#2b5bd7" strokeWidth="1.4" />
      <circle cx={playheadX} cy="3.5" r="3" fill="#2b5bd7" />
    </svg>
  );
}

function AnimationCard({
  a = [1, 0], b = [0, 1], phi = 0, playing = false,
  onPlay = () => {}, onPause = () => {},
  onStepFwd = () => {}, onStepBack = () => {},
  onReset = () => {}, onScrub = () => {},
  title = 'Sweep b around origin',
}) {
  const deg = Math.round(phi * 180 / Math.PI);
  const pct = (deg / 360) * 100;
  const sliderBg = `linear-gradient(to right, var(--accent) 0%, var(--accent) ${pct}%, var(--border) ${pct}%, var(--border) 100%)`;

  // current det
  const det = Math2D.det(a, b);
  const detSign = det > 1e-3 ? 'pos' : (det < -1e-3 ? 'neg' : 'zero');
  const detLabel = detSign === 'pos' ? 'sp-pos' : (detSign === 'neg' ? 'sp-neg' : '');

  // zero crossings
  const zeros = useMemo(() => {
    // approximate zeros based on current state
    const phaseA = (a[0] === 0 && a[1] === 0) ? 0 : Math.atan2(a[1], a[0]);
    const phaseB = (b[0] === 0 && b[1] === 0) ? 0 : Math.atan2(b[1], b[0]);
    let initPhase = (phaseB - phaseA) - phi;
    while (initPhase < 0) initPhase += 2 * Math.PI;
    while (initPhase >= 2 * Math.PI) initPhase -= 2 * Math.PI;
    const zs = [];
    for (let k = 0; k < 3; k++) {
      let z = k * Math.PI - initPhase;
      while (z < 0) z += 2 * Math.PI;
      while (z >= 2 * Math.PI) z -= 2 * Math.PI;
      const d = Math.round(z * 180 / Math.PI);
      if (!zs.includes(d)) zs.push(d);
    }
    if (!zs.includes(360)) zs.push(360);
    zs.sort((x, y) => x - y);
    return zs;
  }, [a, b, phi]);

  // next zero after current phi
  const nextZero = (() => {
    const filtered = zeros.filter((z) => z > deg + 0.5 && z < 360 + 0.5);
    if (filtered.length) return filtered[0];
    return null;
  })();

  return (
    <div className="sp-anim-card">
      <div className="sp-anim-head">
        <span><span className="sp-badge">&#9656;</span>{title}</span>
        <span className="sp-t-readout">
          &phi; = {deg}&deg;
          {nextZero != null && (
            <span className="sp-det-tick">next det = <span className="sp-b-mark">0</span> at {nextZero}&deg;</span>
          )}
        </span>
      </div>

      <div className="sp-anim-progress">
        <div className="sp-fill" style={{ width: pct + '%' }} />
        {zeros.map((z, i) => (
          <span key={'zm' + i}>
            <span className="sp-zero-mark" style={{ left: (z / 360 * 100) + '%' }} />
            <span className="sp-zero-label" style={{ left: (z / 360 * 100) + '%' }}>{z}&deg;</span>
          </span>
        ))}
      </div>

      <div className="sp-anim-controls">
        <button className="sp-ctrl-btn" onClick={onReset} title="Reset" type="button">{ICON_RESET}</button>
        <button className="sp-ctrl-btn" onClick={onStepBack} disabled={deg <= 0} title="Step back" type="button">{ICON_BACK}</button>
        <button className="sp-ctrl-btn sp-primary" onClick={playing ? onPause : onPlay} title="Play / Pause" type="button">
          {playing ? 'Pause' : 'Play'}
        </button>
        <button className="sp-ctrl-btn" onClick={onStepFwd} disabled={deg >= 360} title="Step forward" type="button">{ICON_FWD}</button>
        <input
          type="range" min={0} max={360} step={1} value={deg}
          className="sp-slider" style={{ background: sliderBg }}
          onChange={(e) => onScrub(parseFloat(e.target.value))}
        />
        <span className="sp-t-label">&phi; = <span className="sp-val">{deg}&deg;</span></span>
      </div>

      <div className="sp-sparkline">
        <div className="sp-sparkline-label">
          <span>det(&phi;) = |a|&middot;|b|&middot;sin&phi;</span>
          <span>now <span className={'sp-val ' + detLabel}>{Math2D.fmt(det)}</span></span>
        </div>
        <DetSparkline a={a} b={b} phi={phi} zeros={zeros} />
      </div>
    </div>
  );
}

// =====================================================================
//  SECTION 7  ::  Core + Wrapper
// =====================================================================
export function SpanIndependenceCore({
  initialA, initialB, initialPreset, initialLayers, scenarios,
  step, duration, maxTrail,
  children,
}) {
  const state = useSpanState({
    initialA, initialB, initialPreset, initialLayers, scenarios,
    step, duration, maxTrail,
  });
  if (typeof children === 'function') return children({ state });
  return null;
}

export default function SpanIndependence({
  lede,
  ledeCrumb = DEFAULT_LEDE.crumb,
  ledeBody  = DEFAULT_LEDE.body,
  initialA, initialB, initialPreset, initialLayers, scenarios,
  step, duration, maxTrail,
  layerChips, canvas, explanation, liveCard, scenariosPanel, animation, vectorsCard,
  visibleScenarios, enabledLayers, explanationOverride,
  layout,
  className, style,
}) {
  return (
    <SpanIndependenceCore
      initialA={initialA}
      initialB={initialB}
      initialPreset={initialPreset}
      initialLayers={initialLayers}
      scenarios={scenarios}
      step={step} duration={duration} maxTrail={maxTrail}
    >
      {({ state }) => {
        const renderLede = () => {
          if (lede !== undefined) return lede;
          if (ledeCrumb === null && ledeBody === null) return null;
          return (
            <div className="sp-lede">
              {ledeCrumb && <span className="sp-crumb" dangerouslySetInnerHTML={{ __html: ledeCrumb }} />}
              {ledeBody && <span dangerouslySetInnerHTML={{ __html: ledeBody }} />}
            </div>
          );
        };

        // sweep circle radius: use captured radius if sweep is initialized; else null
        const sweepRadius = state.sweepActive ? Math.hypot(state.b[0], state.b[1]) : null;

        const slotChips = layerChips !== undefined ? layerChips : (
          <LayerChips layers={state.layers} onChange={state.setLayers} enabledLayers={enabledLayers} />
        );
        const slotCanvas = canvas !== undefined ? canvas : (
          <SpanCanvas
            a={state.a}
            b={state.b}
            trail={state.trail}
            layers={state.layers}
            sweepActive={state.sweepActive}
            sweepRadius={sweepRadius}
            onAChange={state.setA}
            onBChange={state.setB}
          />
        );
        const slotExp = explanation !== undefined ? explanation : (
          <ExplanationCard preset={state.preset} scenarios={scenarios || SCENARIOS} override={explanationOverride} />
        );
        const slotLive = liveCard !== undefined ? liveCard : (
          <LiveCard a={state.a} b={state.b} />
        );
        const slotScenarios = scenariosPanel !== undefined ? scenariosPanel : (
          <ScenariosPanel
            scenarios={scenarios || SCENARIOS}
            preset={state.preset}
            onSelect={state.selectPreset}
            visibleScenarios={visibleScenarios}
          />
        );
        const slotVectors = vectorsCard !== undefined ? vectorsCard : (
          <VectorsCard a={state.a} b={state.b} onAChange={state.setA} onBChange={state.setB} />
        );
        const slotAnim = animation !== undefined ? animation : (
          <AnimationCard
            a={state.a} b={state.b}
            phi={state.phi} playing={state.playing}
            onPlay={state.play} onPause={state.pause}
            onStepFwd={state.stepFwd} onStepBack={state.stepBack}
            onReset={state.resetSweep} onScrub={state.scrubDeg}
          />
        );

        if (typeof layout === 'function') {
          return (
            <div className={'sp-root ' + (className || '')} style={style}>
              <style dangerouslySetInnerHTML={{ __html: COMPONENT_CSS }} />
              {layout({ state })}
            </div>
          );
        }

        return (
          <div className={'sp-root ' + (className || '')} style={style}>
            <style dangerouslySetInnerHTML={{ __html: COMPONENT_CSS }} />
            <div className="sp-app">
              {renderLede()}
              <main className="sp-main">
                <aside className="sp-scen-col">{slotScenarios}</aside>
                <section className="sp-canvas-col">
                  <div className="sp-canvas-wrap">{slotCanvas}</div>
                  <div className="sp-readouts">
                    <CanvasReadout kind="a" label="a" value={Math2D.fmtPair(state.a)} />
                    <CanvasReadout kind="b" label="b" value={Math2D.fmtPair(state.b)} />
                  </div>
                  {slotAnim}
                </section>
                <section className="sp-info-col">
                  {slotExp}
                  {slotChips}
                  {slotVectors}
                  {slotLive}
                </section>
              </main>
            </div>
          </div>
        );
      }}
    </SpanIndependenceCore>
  );
}

export {
  SpanCanvas, LayerChips, CanvasReadout, VectorsCard,
  LiveCard, ExplanationCard, ScenariosPanel, AnimationCard, DetSparkline, CellInput,
  useSpanState,
  Math2D, SVGRender,
  SCENARIOS, SCENARIO_GROUPS, DEFAULT_LAYERS, DEFAULT_GEOM, ALL_LAYER_DEFS,
};