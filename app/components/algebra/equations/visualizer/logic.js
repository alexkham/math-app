// logic.js
// Pure math/geometry helpers + the useEquation hook (reducer + computed
// selectors). No JSX. The TYPES registry is passed in from outside so this
// module stays generic across tool variants.

import { useReducer, useMemo, useEffect, useRef } from 'react';

// ============================================================
// GEOMETRY CONSTANTS
// ============================================================
export const G = {
  W: 980,
  padX: 46,
  curveTop: 18,
  curveBottom: 202,
  axisY: 232,
  trailY: 282,
  marbleY: 304,
  tickLabelY: 250,
  totalH: 332,
};

export const VIEW_DEFAULT = { lo: -8, hi: 8 };

// Tolerance the marble must come within of a solution to "satisfy" the
// equation (used for trail color, "is this a solution?" badge, etc.).
export const HOLD_TOL = 0.5;

// Numerical root-finding precision.
export const ROOT_TOL = 1e-7;

// ============================================================
// COORDINATE MAPPING
// ============================================================
export function X(x, vr) {
  return G.padX + (x - vr.lo) / (vr.hi - vr.lo) * (G.W - 2 * G.padX);
}
export function Xinv(px, vr) {
  return vr.lo + (px - G.padX) / (G.W - 2 * G.padX) * (vr.hi - vr.lo);
}
export function Y_at(y, yR) {
  if (y < yR.min || y > yR.max) return null;
  return G.curveTop + (1 - (y - yR.min) / (yR.max - yR.min)) * (G.curveBottom - G.curveTop);
}
export function Y_clip(y, yR) {
  const c = Math.max(yR.min, Math.min(yR.max, y));
  return G.curveTop + (1 - (c - yR.min) / (yR.max - yR.min)) * (G.curveBottom - G.curveTop);
}

// ============================================================
// FORMATTING
// ============================================================
export function fmt(x) {
  if (!Number.isFinite(x)) return '\u2014';
  if (Math.abs(x) < 1e-9) return '0';
  if (Math.abs(x - Math.round(x)) < 1e-4) return String(Math.round(x));
  return x.toFixed(2);
}
export function formatTick(v) {
  if (Math.abs(v) < 1e-9) return '0';
  if (Math.abs(v) >= 1000 || (Math.abs(v) > 0 && Math.abs(v) < 0.01)) {
    return v.toExponential(0).replace('+', '');
  }
  if (Math.abs(v - Math.round(v)) < 1e-4) return String(Math.round(v));
  return v.toFixed(1);
}
export function niceTickStep(range, target = 5) {
  const raw = range / target;
  const exp = Math.floor(Math.log10(raw));
  const base = raw / Math.pow(10, exp);
  const nice = base < 1.5 ? 1 : base < 3.5 ? 2 : base < 7 ? 5 : 10;
  return nice * Math.pow(10, exp);
}
export function signSymOf(v) {
  if (!Number.isFinite(v)) return '\u00D7';
  if (Math.abs(v) < 1e-9) return '0';
  return v > 0 ? '+' : '\u2212';
}
export function signClassOf(v) {
  if (!Number.isFinite(v)) return 'undef';
  if (Math.abs(v) < 1e-9) return 'sz';
  return v > 0 ? 'sp' : 'sn';
}

// ============================================================
// SAMPLING + Y-RANGE
// ============================================================
export function computeYRange(f, n, vr) {
  let mn = n, mx = n;
  const N = 280;
  for (let i = 0; i <= N; i++) {
    const x = vr.lo + (vr.hi - vr.lo) * i / N;
    const y = f(x);
    if (Number.isFinite(y)) {
      mn = Math.min(mn, y);
      mx = Math.max(mx, y);
    }
  }
  if (mx - mn < 4) {
    const c = (mx + mn) / 2;
    mn = c - 2;
    mx = c + 2;
  }
  const pad = Math.max(1, (mx - mn) * 0.1);
  return { min: mn - pad, max: mx + pad };
}

export function sampleCurve(f, vr) {
  const N = 260;
  const pts = [];
  let cur = [];
  for (let i = 0; i <= N; i++) {
    const x = vr.lo + (vr.hi - vr.lo) * i / N;
    const y = f(x);
    if (!Number.isFinite(y)) {
      if (cur.length) pts.push(cur);
      cur = [];
    } else {
      cur.push({ x, y });
    }
  }
  if (cur.length) pts.push(cur);
  return { segs: pts };
}

// ============================================================
// ROOT FINDING — solutions of f(x) = n on the view range
// ============================================================
export function findRoots(f, n, vr) {
  const h = x => f(x) - n;
  const N = 1400;
  const xs = [];
  let prev = null;
  for (let i = 0; i <= N; i++) {
    const x = vr.lo + (vr.hi - vr.lo) * i / N;
    const v = h(x);
    if (!Number.isFinite(v)) { prev = null; continue; }
    if (prev !== null) {
      const [px, pv] = prev;
      if (Math.abs(v) < ROOT_TOL) {
        xs.push(x);
      } else if (pv * v < 0) {
        // bisect between px and x
        let lo = px, hi = x, flo = pv;
        for (let k = 0; k < 60; k++) {
          const m = 0.5 * (lo + hi);
          const fm = h(m);
          if (!Number.isFinite(fm)) break;
          if (Math.abs(fm) < ROOT_TOL) { lo = hi = m; break; }
          if (flo * fm < 0) { hi = m; } else { lo = m; flo = fm; }
        }
        xs.push(0.5 * (lo + hi));
      }
    }
    prev = [x, v];
  }
  // dedupe
  const out = [];
  for (const x of xs) {
    if (!out.some(y => Math.abs(y - x) < 1e-4)) out.push(x);
  }
  return out.sort((a, b) => a - b);
}

// ============================================================
// STEP STOPS — meaningful x-values to cycle through with [/]
// ============================================================
export function buildStepStops(roots, vr) {
  const stops = [];
  // left test point
  if (roots.length === 0) {
    stops.push({ x: vr.lo + (vr.hi - vr.lo) * 0.25, label: 'left' });
  } else {
    stops.push({ x: 0.5 * (vr.lo + roots[0]), label: 'left of first solution' });
  }
  // each root + a midpoint after
  for (let i = 0; i < roots.length; i++) {
    stops.push({ x: roots[i], label: `solution x = ${fmt(roots[i])}` });
    const nextX = i + 1 < roots.length ? roots[i + 1] : vr.hi;
    if (nextX - roots[i] > 0.2) {
      stops.push({ x: 0.5 * (roots[i] + nextX), label: i + 1 < roots.length ? 'between solutions' : 'right of last solution' });
    }
  }
  if (roots.length === 0) {
    stops.push({ x: 0.5 * (vr.lo + vr.hi), label: 'middle' });
    stops.push({ x: vr.hi - (vr.hi - vr.lo) * 0.25, label: 'right' });
  }
  return stops;
}

// ============================================================
// SELECTORS (small object, kept around for tests / convenience)
// ============================================================
export const sel = {
  // sample point inside interval i (intervals separated by roots).
  sampleAt(i, roots, vr) {
    const lo = i === 0 ? vr.lo : roots[i - 1];
    const hi = i >= roots.length ? vr.hi : roots[i];
    return 0.5 * (lo + hi);
  },
};

// ============================================================
// REDUCER
// ============================================================
function initialState(TYPES, opts) {
  const typeId = opts.initial?.typeId || Object.keys(TYPES)[0];
  const type = TYPES[typeId];
  const tplIdx = 0;
  const p = {};
  type.params.forEach(pr => {
    p[pr.key] = type.templates[tplIdx].vals[pr.key];
  });
  if (opts.initial?.p) Object.assign(p, opts.initial.p);
  return {
    typeId,
    tpl: tplIdx,
    p,
    paramMode: {}, // per-param: 'slider' | 'input'
    marble: 0,
    trail: [],
    lastX: null,
    mode: 'drag',
    stepIdx: 0,
    autoPlaying: false,
    autoDir: 1,
    autoSpeed: 0.6,
    explainTab: 'live',
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_TYPE': {
      const TYPES = action.TYPES;
      const type = TYPES[action.typeId];
      const tplIdx = 0;
      const p = {};
      type.params.forEach(pr => { p[pr.key] = type.templates[tplIdx].vals[pr.key]; });
      return { ...state, typeId: action.typeId, tpl: tplIdx, p, paramMode: {}, marble: 0, trail: [], lastX: null, stepIdx: 0 };
    }
    case 'SET_TEMPLATE': {
      const type = action.TYPES[state.typeId];
      const p = {};
      type.params.forEach(pr => { p[pr.key] = type.templates[action.tpl].vals[pr.key]; });
      return { ...state, tpl: action.tpl, p, trail: [], lastX: null, stepIdx: 0 };
    }
    case 'SET_PARAM': {
      const v = Number(action.value);
      const cl = action.min != null && action.max != null
        ? Math.max(action.min, Math.min(action.max, v))
        : v;
      return { ...state, p: { ...state.p, [action.key]: cl }, trail: [], lastX: null };
    }
    case 'SET_PARAM_MODE':
      return { ...state, paramMode: { ...state.paramMode, [action.key]: action.mode } };
    case 'SET_MARBLE': {
      const x = action.x;
      if (action.noTrail) {
        return { ...state, marble: x, lastX: x };
      }
      const last = state.lastX;
      let trail = state.trail;
      if (last != null && Math.abs(x - last) > 0.005) {
        trail = [...state.trail, { x0: Math.min(last, x), x1: Math.max(last, x) }];
        if (trail.length > 400) trail = trail.slice(-300);
      }
      return { ...state, marble: x, lastX: x, trail };
    }
    case 'CLEAR_TRAIL':
      return { ...state, trail: [], lastX: null };
    case 'SET_MODE': {
      const m = action.mode;
      return { ...state, mode: m, autoPlaying: m === 'auto' };
    }
    case 'SET_STEP_IDX':
      return { ...state, stepIdx: action.idx };
    case 'TOGGLE_PLAY':
      return { ...state, autoPlaying: !state.autoPlaying };
    case 'SET_SPEED':
      return { ...state, autoSpeed: Number(action.speed) };
    case 'SET_EXPLAIN_TAB':
      return { ...state, explainTab: action.tab };
    case 'RESET': {
      const type = action.TYPES[state.typeId];
      const p = {};
      type.params.forEach(pr => { p[pr.key] = type.templates[state.tpl].vals[pr.key]; });
      return { ...state, p, trail: [], lastX: null, stepIdx: 0 };
    }
    default:
      return state;
  }
}

// ============================================================
// HOOK
// ============================================================
export function useEquation(TYPES, opts = {}) {
  const [stateRaw, dispatchRaw] = useReducer(reducer, undefined, () => initialState(TYPES, opts));

  // wrap dispatch so SET_TYPE / SET_TEMPLATE / RESET can see TYPES without it
  // being threaded through every call site.
  const dispatch = (action) => dispatchRaw({ ...action, TYPES });
  const state = stateRaw;

  const type = TYPES[state.typeId];
  const F = useMemo(() => type.f(state.p), [type, state.p]);
  const N = state.p.n;

  const computed = useMemo(() => {
    const viewRange = VIEW_DEFAULT;
    const curveYRange = computeYRange(F, N, viewRange);
    const curveSegments = sampleCurve(F, viewRange);
    const solutions = findRoots(F, N, viewRange);
    const stepStops = buildStepStops(solutions, viewRange);
    return { viewRange, curveYRange, curveSegments, solutions, stepStops };
  }, [F, N]);

  const holds = (x) => Math.abs(F(x) - N) < HOLD_TOL;
  const inDomain = () => true; // polynomials/abs are defined everywhere

  // focus: which interval is the marble in? on a solution?
  const focus = useMemo(() => {
    const x = state.marble;
    for (const s of computed.solutions) {
      if (Math.abs(x - s) < 0.05) return { kind: 'solution', x: s };
    }
    let i = 0;
    for (const s of computed.solutions) {
      if (x < s) break;
      i++;
    }
    return { kind: 'interval', intervalIdx: i };
  }, [state.marble, computed.solutions]);

  // Auto-sweep ticker
  const rafRef = useRef(null);
  const lastTsRef = useRef(null);
  useEffect(() => {
    if (!(state.mode === 'auto' && state.autoPlaying)) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
      return;
    }
    const tick = (ts) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;
      const vr = computed.viewRange;
      let nx = state.marble + state.autoDir * state.autoSpeed * dt * 3;
      let dir = state.autoDir;
      if (nx > vr.hi) { nx = vr.hi; dir = -1; }
      if (nx < vr.lo) { nx = vr.lo; dir = 1; }
      dispatchRaw({ type: 'SET_MARBLE', x: nx });
      if (dir !== state.autoDir) dispatchRaw({ type: 'SET_AUTO_DIR', dir });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [state.mode, state.autoPlaying, state.autoSpeed, state.marble, state.autoDir, computed.viewRange]);

  return { state, dispatch, type, computed, focus, F, N, holds, inDomain };
}