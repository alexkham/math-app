// // // logic.js
// // // Pure helpers + state + selectors + hook for the inequality visualizer.
// // // Has no domain knowledge of specific inequality types — selectors take a `type` config.

// // import { useReducer, useCallback, useEffect, useRef, useMemo } from 'react';

// // // ============================================================
// // // FORMATTING HELPERS
// // // ============================================================
// // export const sup = n => ({ 2: '\u00B2', 3: '\u00B3', 4: '\u2074' })[n] || ('^' + n);
// // export const round2 = n => Math.round(n * 100) / 100;
// // export const fmt = n => {
// //   if (!isFinite(n)) return n > 0 ? '\u221E' : '\u2212\u221E';
// //   return Number.isInteger(n) ? String(n) : round2(n).toFixed(2);
// // };
// // export const facStr = r => `(x ${r < 0 ? '+' : '\u2212'} ${Math.abs(r)})`;
// // export const uniqSorted = a => [...new Set(a)].sort((x, y) => x - y);

// // export const quadRoots = (a, b, c) => {
// //   if (a === 0) {
// //     if (b === 0) return null;
// //     return { distinct: [-c / b], double: false };
// //   }
// //   const d = b * b - 4 * a * c;
// //   if (d < 0) return null;
// //   if (d === 0) return { distinct: [-b / (2 * a)], double: true };
// //   const s = Math.sqrt(d);
// //   return { distinct: uniqSorted([(-b - s) / (2 * a), (-b + s) / (2 * a)]), double: false };
// // };

// // export const quadExprStr = p => {
// //   const a = p.a === 0 ? '' : (p.a === 1 ? 'x\u00B2' : (p.a === -1 ? '\u2212x\u00B2' : `${p.a}x\u00B2`));
// //   const b = p.b === 0 ? '' : ` ${p.b < 0 ? '\u2212' : '+'} ${Math.abs(p.b) === 1 ? '' : Math.abs(p.b)}x`;
// //   const c = p.c === 0 ? '' : ` ${p.c < 0 ? '\u2212' : '+'} ${Math.abs(p.c)}`;
// //   return (a + b + c).trim() || '0';
// // };

// // export const niceTickStep = (range, targetCount = 5) => {
// //   const rawStep = range / targetCount;
// //   const mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
// //   const norm = rawStep / mag;
// //   if (norm < 1.5) return 1 * mag;
// //   if (norm < 3) return 2 * mag;
// //   if (norm < 4) return 2.5 * mag;
// //   if (norm < 7) return 5 * mag;
// //   return 10 * mag;
// // };

// // export const formatTick = v => {
// //   if (Math.abs(v) < 1e-9) return '0';
// //   const av = Math.abs(v);
// //   if (av >= 100 || av < 0.01) return v.toExponential(0);
// //   if (Number.isInteger(v)) return String(v);
// //   return round2(v).toString();
// // };

// // export const signSymOf = v => {
// //   if (Number.isNaN(v)) return '\u00D7';
// //   if (Math.abs(v) < 1e-9) return '0';
// //   return v > 0 ? '+' : '\u2212';
// // };
// // export const signClassOf = v => {
// //   if (Number.isNaN(v)) return 'undef';
// //   if (Math.abs(v) < 1e-9) return 'sz';
// //   return v > 0 ? 'sp' : 'sn';
// // };

// // // substitute the literal letter x in a label with a numeric value
// // export const subText = (label, x) => {
// //   const sub = x < 0 ? `(${fmt(x)})` : fmt(x);
// //   return label.replace(/\bx\b/g, sub);
// // };

// // // ============================================================
// // // GEOMETRY (SVG layout for number line + curve)
// // // ============================================================
// // export const G = {
// //   W: 980,
// //   padX: 46,
// //   curveTop: 16,
// //   curveBottom: 98,
// //   axisY: 128,
// //   tickLabelY: 144,
// //   trailY: 162,
// //   marbleY: 198,
// //   totalH: 225,
// //   FOCUS_TOLERANCE: 0.2,
// // };
// // G.curveZero = (G.curveTop + G.curveBottom) / 2;

// // export const X = (v, vr) =>
// //   G.padX + (v - vr.lo) / (vr.hi - vr.lo) * (G.W - 2 * G.padX);
// // export const Xinv = (px, vr) =>
// //   vr.lo + (px - G.padX) / (G.W - 2 * G.padX) * (vr.hi - vr.lo);
// // export const Y_at = (v, yR) => {
// //   if (!Number.isFinite(v)) return null;
// //   const t = (v - yR.min) / (yR.max - yR.min);
// //   return G.curveBottom - t * (G.curveBottom - G.curveTop);
// // };

// // // ============================================================
// // // SELECTORS — pure functions taking (state, type)
// // // ============================================================
// // const inDomainP = (x, state, type) => {
// //   const d = type.domain(state.p);
// //   if (d.excluded && d.excluded.some(e => Math.abs(e - x) < 1e-9)) return false;
// //   if (d.lo !== undefined && x < d.lo - 1e-9) return false;
// //   return !Number.isNaN(type.f(state.p)(x));
// // };
// // const holdsP = (x, state, type) => {
// //   if (!inDomainP(x, state, type)) return false;
// //   const v = type.f(state.p)(x);
// //   if (Number.isNaN(v)) return false;
// //   if (Math.abs(v) < 1e-9) return !state.strict;
// //   return state.dir === 'lt' ? v < -1e-9 : v > 1e-9;
// // };

// // export const sel = {
// //   factors: (state, type) => type.factors(state.p),

// //   critXs: (state, type) =>
// //     uniqSorted(type.factors(state.p).flatMap(f => f.criticalXs).filter(isFinite)),

// //   criticalInfo: (state, type) => {
// //     const all = [];
// //     type.factors(state.p).forEach(f =>
// //       f.criticalXs.forEach(x => all.push({ x, kind: f.kind, mult: f.mult, factorId: f.id }))
// //     );
// //     return all.sort((a, b) => a.x - b.x);
// //   },

// //   allCrit: (state, type) => {
// //     const xs = sel.critXs(state, type);
// //     const dom = type.domain(state.p);
// //     return uniqSorted([...xs, ...(dom.lo !== undefined ? [dom.lo] : [])]);
// //   },

// //   F: (state, type) => type.f(state.p),
// //   inDomain: inDomainP,
// //   holds: holdsP,

// //   opSym: state => state.strict
// //     ? (state.dir === 'lt' ? '<' : '>')
// //     : (state.dir === 'lt' ? '\u2264' : '\u2265'),

// //   sampleAt: (i, crit) => {
// //     if (crit.length === 0) return 0;
// //     if (i === 0) return crit[0] - 1;
// //     if (i === crit.length) return crit[crit.length - 1] + 1;
// //     return (crit[i - 1] + crit[i]) / 2;
// //   },

// //   solution: (state, type) => {
// //     const crit = sel.allCrit(state, type);
// //     const bounds = [-Infinity, ...crit, Infinity];
// //     const segs = [];
// //     for (let i = 0; i < bounds.length - 1; i++) {
// //       const mid = (isFinite(bounds[i]) && isFinite(bounds[i + 1]))
// //         ? (bounds[i] + bounds[i + 1]) / 2
// //         : (isFinite(bounds[i]) ? bounds[i] + 1 : bounds[i + 1] - 1);
// //       if (holdsP(mid, state, type)) {
// //         segs.push({ lo: bounds[i], hi: bounds[i + 1], openLo: true, openHi: true });
// //       }
// //     }
// //     const poles = sel.criticalInfo(state, type)
// //       .filter(c => c.kind !== 'zero').map(c => c.x);
// //     if (!state.strict) {
// //       segs.forEach(s => {
// //         if (isFinite(s.lo) && !poles.includes(s.lo) && holdsP(s.lo, state, type)) s.openLo = false;
// //         if (isFinite(s.hi) && !poles.includes(s.hi) && holdsP(s.hi, state, type)) s.openHi = false;
// //       });
// //     }
// //     segs.sort((a, b) => a.lo - b.lo);
// //     const merged = [];
// //     segs.forEach(s => {
// //       const last = merged[merged.length - 1];
// //       if (last && isFinite(last.hi) && isFinite(s.lo) && last.hi === s.lo && !last.openHi && !s.openLo) {
// //         last.hi = s.hi;
// //         last.openHi = s.openHi;
// //       } else {
// //         merged.push({ ...s });
// //       }
// //     });
// //     return merged;
// //   },

// //   intervalNotation: (state, type) => {
// //     const segs = sel.solution(state, type);
// //     if (segs.length === 0) return '\u2205  (no solution)';
// //     if (segs.length === 1 && !isFinite(segs[0].lo) && !isFinite(segs[0].hi)) return '(\u2212\u221E, \u221E)';
// //     return segs.map(s =>
// //       `${s.openLo ? '(' : '['}${isFinite(s.lo) ? fmt(s.lo) : '\u2212\u221E'}, ${isFinite(s.hi) ? fmt(s.hi) : '\u221E'}${s.openHi ? ')' : ']'}`
// //     ).join('  \u222A  ');
// //   },

// //   setBuilder: state => `{ x \u2208 \u211D : f(x) ${sel.opSym(state)} 0 }`,

// //   focusInfo: (state, type) => {
// //     const x = state.marble;
// //     if (!inDomainP(x, state, type)) return { kind: 'out', x };
// //     const facs = type.factors(state.p);
// //     for (const f of facs) {
// //       for (const cx of f.criticalXs) {
// //         if (Math.abs(x - cx) < G.FOCUS_TOLERANCE) {
// //           return { kind: 'critical', factorId: f.id, factorKind: f.kind, criticalX: cx, x };
// //         }
// //       }
// //     }
// //     const dom = type.domain(state.p);
// //     if (dom.lo !== undefined && Math.abs(x - dom.lo) < G.FOCUS_TOLERANCE) {
// //       return { kind: 'critical', factorId: facs[0].id, factorKind: 'domain', criticalX: dom.lo, x };
// //     }
// //     const crit = sel.allCrit(state, type);
// //     let idx = 0;
// //     for (let i = 0; i < crit.length; i++) if (x > crit[i]) idx = i + 1;
// //     return { kind: 'interval', intervalIdx: idx, x };
// //   },

// //   stepStops: (state, type) => {
// //     const c = sel.allCrit(state, type);
// //     if (c.length === 0) return [
// //       { x: -2, label: 'test point' },
// //       { x: 0, label: 'test point' },
// //       { x: 2, label: 'test point' },
// //     ];
// //     const stops = [];
// //     const dom = type.domain(state.p);
// //     const critInfo = sel.criticalInfo(state, type);
// //     const kindFor = x => {
// //       const ci = critInfo.find(z => Math.abs(z.x - x) < 1e-9);
// //       if (ci) return ci.kind;
// //       if (dom.lo !== undefined && Math.abs(dom.lo - x) < 1e-9) return 'domain';
// //       return 'zero';
// //     };
// //     stops.push({ x: c[0] - 2, label: 'left test point' });
// //     for (let i = 0; i < c.length; i++) {
// //       const k = kindFor(c[i]);
// //       const lab = k === 'pole' ? `pole x=${fmt(c[i])}`
// //         : k === 'domain' ? `domain edge x=${fmt(c[i])}`
// //         : `critical point x=${fmt(c[i])}`;
// //       stops.push({ x: c[i], label: lab });
// //       if (i < c.length - 1) {
// //         stops.push({
// //           x: (c[i] + c[i + 1]) / 2,
// //           label: `test point in (${fmt(c[i])}, ${fmt(c[i + 1])})`,
// //         });
// //       }
// //     }
// //     stops.push({ x: c[c.length - 1] + 2, label: 'right test point' });
// //     return stops;
// //   },

// //   viewRange: (state, type) => {
// //     const c = sel.allCrit(state, type);
// //     return {
// //       lo: c.length ? Math.min(...c) - 2.5 : -5,
// //       hi: c.length ? Math.max(...c) + 2.5 : 5,
// //     };
// //   },

// //   curveYRange: (state, type) => {
// //     const vr = sel.viewRange(state, type);
// //     const f = type.f(state.p);
// //     const N = 240;
// //     const vals = [];
// //     for (let i = 0; i <= N; i++) {
// //       const x = vr.lo + (vr.hi - vr.lo) * i / N;
// //       if (!inDomainP(x, state, type)) continue;
// //       const y = f(x);
// //       if (Number.isFinite(y)) vals.push(y);
// //     }
// //     if (!vals.length) return { min: -1, max: 1 };
// //     let mn = Math.min(...vals), mx = Math.max(...vals);
// //     const sorted = [...vals].sort((a, b) => a - b);
// //     const p5 = sorted[Math.floor(sorted.length * 0.05)];
// //     const p95 = sorted[Math.floor(sorted.length * 0.95)];
// //     if (mx - mn > 10 * (p95 - p5)) { mn = p5; mx = p95; }
// //     const mag = Math.max(Math.abs(mn), Math.abs(mx), 0.5);
// //     return { min: -mag, max: mag };
// //   },

// //   curveSegments: (state, type) => {
// //     const vr = sel.viewRange(state, type);
// //     const yR = sel.curveYRange(state, type);
// //     const f = type.f(state.p);
// //     const N = 260;
// //     const segs = [];
// //     let cur = [];
// //     const dom = type.domain(state.p);
// //     for (let i = 0; i <= N; i++) {
// //       const x = vr.lo + (vr.hi - vr.lo) * i / N;
// //       let breakHere = false;
// //       if (!inDomainP(x, state, type)) breakHere = true;
// //       if (dom.excluded) dom.excluded.forEach(e => {
// //         if (i > 0) {
// //           const xPrev = vr.lo + (vr.hi - vr.lo) * (i - 1) / N;
// //           if ((xPrev - e) * (x - e) < 0) breakHere = true;
// //         }
// //       });
// //       if (breakHere) {
// //         if (cur.length > 1) segs.push(cur);
// //         cur = [];
// //         continue;
// //       }
// //       const y = f(x);
// //       if (!Number.isFinite(y)) {
// //         if (cur.length > 1) segs.push(cur);
// //         cur = [];
// //         continue;
// //       }
// //       const yc = Math.max(yR.min, Math.min(yR.max, y));
// //       cur.push({ x, y: yc });
// //     }
// //     if (cur.length > 1) segs.push(cur);
// //     return { segs, range: yR };
// //   },
// // };

// // // ============================================================
// // // STATE
// // // ============================================================
// // export const createInitialState = (types, override = {}) => {
// //   const typeId = override.typeId || 'poly';
// //   const tpl = override.tpl ?? 0;
// //   const p = override.p || { ...types[typeId].templates[tpl].vals };
// //   const tempState = { typeId, p, strict: true, dir: 'lt', marble: 0 };
// //   const stops = sel.stepStops(tempState, types[typeId]);
// //   return {
// //     typeId,
// //     tpl,
// //     p,
// //     paramMode: {},
// //     strict: override.strict ?? true,
// //     dir: override.dir || 'lt',
// //     mode: 'drag',
// //     autoPlaying: false,
// //     autoSpeed: 0.6,
// //     marble: stops[0]?.x ?? 0,
// //     marbleDir: 1,
// //     trail: [],
// //     lastX: null,
// //     stepIdx: 0,
// //     tour: false,
// //     explainTab: 'live',
// //   };
// // };

// // const trailExtend = (state, x) => {
// //   if (state.lastX === null) return { marble: x, lastX: x, trail: state.trail };
// //   const x0 = Math.min(state.lastX, x);
// //   const x1 = Math.max(state.lastX, x);
// //   if (x1 - x0 < 1e-4) return { marble: x, lastX: x, trail: state.trail };
// //   return { marble: x, lastX: x, trail: [...state.trail, { x0, x1 }] };
// // };

// // export const reducer = (state, action) => {
// //   switch (action.type) {
// //     case 'SET_TYPE':
// //       return {
// //         ...state,
// //         typeId: action.typeId,
// //         tpl: 0,
// //         p: { ...action.defaultParams },
// //         paramMode: {},
// //         strict: true,
// //         dir: 'lt',
// //         trail: [],
// //         lastX: null,
// //         mode: 'drag',
// //         autoPlaying: false,
// //         tour: false,
// //         stepIdx: 0,
// //         marble: action.initialMarble ?? state.marble,
// //       };
// //     case 'SET_TEMPLATE':
// //       return {
// //         ...state,
// //         tpl: action.tpl,
// //         p: { ...action.vals },
// //         trail: [],
// //         lastX: null,
// //         marble: action.initialMarble ?? state.marble,
// //       };
// //     case 'SET_PARAM': {
// //       const v = Number(action.value);
// //       const cl = action.min != null && action.max != null
// //         ? Math.max(action.min, Math.min(action.max, v))
// //         : v;
// //       return { ...state, p: { ...state.p, [action.key]: cl }, trail: [], lastX: null };
// //     }
// //     case 'SET_PARAM_MODE':
// //       return { ...state, paramMode: { ...state.paramMode, [action.key]: action.mode } };
// //     case 'TOGGLE_STRICT':
// //       return { ...state, strict: !state.strict, trail: [], lastX: null };
// //     case 'TOGGLE_DIR':
// //       return { ...state, dir: state.dir === 'lt' ? 'gt' : 'lt', trail: [], lastX: null };
// //     case 'SET_MODE': {
// //       const m = action.mode;
// //       const s = { ...state, mode: m, autoPlaying: m === 'auto' };
// //       if (m === 'step' && action.initialMarble !== undefined) {
// //         s.stepIdx = 0;
// //         s.marble = action.initialMarble;
// //         s.lastX = action.initialMarble;
// //       }
// //       if (m !== 'step') s.tour = false;
// //       return s;
// //     }
// //     case 'TOGGLE_PLAY':
// //       return { ...state, autoPlaying: !state.autoPlaying };
// //     case 'SET_SPEED':
// //       return { ...state, autoSpeed: Number(action.speed) };
// //     case 'SET_MARBLE': {
// //       const x = action.x;
// //       if (action.noTrail) return { ...state, marble: x, lastX: x };
// //       return { ...state, ...trailExtend(state, x) };
// //     }
// //     case 'SET_MARBLE_DIR':
// //       return { ...state, marbleDir: action.dir };
// //     case 'CLEAR_TRAIL':
// //       return { ...state, trail: [], lastX: null };
// //     case 'SET_STEP_IDX':
// //       return { ...state, stepIdx: action.idx };
// //     case 'TOGGLE_TOUR':
// //       return { ...state, tour: !state.tour };
// //     case 'SET_EXPLAIN_TAB':
// //       return { ...state, explainTab: action.tab };
// //     case 'RESET':
// //       return {
// //         ...state,
// //         p: { ...action.defaults },
// //         strict: true,
// //         dir: 'lt',
// //         trail: [],
// //         lastX: null,
// //       };
// //     default:
// //       return state;
// //   }
// // };

// // // ============================================================
// // // URL STATE
// // // ============================================================
// // export const writeUrl = (state, type) => {
// //   if (typeof window === 'undefined') return;
// //   const parts = [`t=${state.typeId}`, `s=${state.strict ? 1 : 0}`, `d=${state.dir}`];
// //   type.params.forEach(pr => parts.push(`${pr.key}=${state.p[pr.key]}`));
// //   history.replaceState(null, '', '#' + parts.join('&'));
// // };

// // export const readUrl = (types) => {
// //   if (typeof window === 'undefined' || !location.hash) return null;
// //   const parts = location.hash.slice(1).split('&');
// //   const kv = {};
// //   parts.forEach(p => {
// //     const [k, v] = p.split('=');
// //     kv[k] = v;
// //   });
// //   const typeId = kv.t && types[kv.t] ? kv.t : 'poly';
// //   const t = types[typeId];
// //   const p = { ...t.templates[0].vals };
// //   t.params.forEach(pr => {
// //     if (kv[pr.key] !== undefined) p[pr.key] = Number(kv[pr.key]);
// //   });
// //   return {
// //     typeId,
// //     p,
// //     strict: kv.s !== undefined ? kv.s === '1' : true,
// //     dir: kv.d || 'lt',
// //   };
// // };

// // // ============================================================
// // // THE HOOK
// // // ============================================================
// // export function useInequality(types, options = {}) {
// //   const initFromUrl = useMemo(() => readUrl(types), [types]);
// //   const [state, baseDispatch] = useReducer(
// //     reducer,
// //     null,
// //     () => createInitialState(types, { ...(initFromUrl || {}), ...(options.initial || {}) })
// //   );

// //   const type = types[state.typeId];

// //   // ref for inside RAF / timers, where we want the latest state
// //   const stateRef = useRef(state);
// //   useEffect(() => { stateRef.current = state; }, [state]);

// //   // dispatch wrapper: injects context (default params, initial marble, slider bounds, etc.)
// //   const dispatch = useCallback((action) => {
// //     const s = stateRef.current;
// //     switch (action.type) {
// //       case 'SET_TYPE': {
// //         const t = types[action.typeId];
// //         const vals = t.templates[0].vals;
// //         const tempState = { typeId: action.typeId, p: { ...vals }, strict: true, dir: 'lt', marble: 0 };
// //         const stops = sel.stepStops(tempState, t);
// //         baseDispatch({ ...action, defaultParams: vals, initialMarble: stops[0]?.x ?? 0 });
// //         break;
// //       }
// //       case 'SET_TEMPLATE': {
// //         const t = types[s.typeId];
// //         const vals = t.templates[action.tpl].vals;
// //         const tempState = { ...s, p: { ...vals } };
// //         const stops = sel.stepStops(tempState, t);
// //         baseDispatch({ ...action, vals, initialMarble: stops[0]?.x ?? 0 });
// //         break;
// //       }
// //       case 'SET_PARAM': {
// //         const t = types[s.typeId];
// //         const pr = t.params.find(pp => pp.key === action.key);
// //         baseDispatch({ ...action, min: pr?.min, max: pr?.max });
// //         break;
// //       }
// //       case 'SET_MODE': {
// //         const t = types[s.typeId];
// //         if (action.mode === 'step') {
// //           const stops = sel.stepStops(s, t);
// //           baseDispatch({ ...action, initialMarble: stops[0]?.x });
// //         } else {
// //           baseDispatch(action);
// //         }
// //         break;
// //       }
// //       case 'RESET': {
// //         const t = types[s.typeId];
// //         baseDispatch({ ...action, defaults: t.templates[s.tpl].vals });
// //         break;
// //       }
// //       default:
// //         baseDispatch(action);
// //     }
// //   }, [types]);

// //   // memoize the heavy selectors keyed on the values they actually depend on
// //   const computed = useMemo(() => ({
// //     factors: sel.factors(state, type),
// //     criticalInfo: sel.criticalInfo(state, type),
// //     allCrit: sel.allCrit(state, type),
// //     solution: sel.solution(state, type),
// //     intervalNotation: sel.intervalNotation(state, type),
// //     setBuilder: sel.setBuilder(state),
// //     stepStops: sel.stepStops(state, type),
// //     viewRange: sel.viewRange(state, type),
// //     curveYRange: sel.curveYRange(state, type),
// //     curveSegments: sel.curveSegments(state, type),
// //     opSym: sel.opSym(state),
// //   }), [state.typeId, state.p, state.strict, state.dir, type]);

// //   const focus = useMemo(
// //     () => sel.focusInfo(state, type),
// //     [state.marble, state.p, state.typeId, state.strict, state.dir, type]
// //   );

// //   const F = useMemo(() => sel.F(state, type), [state.p, type]);
// //   const inDomain = useCallback(x => sel.inDomain(x, state, type), [state, type]);
// //   const holds = useCallback(x => sel.holds(x, state, type), [state, type]);

// //   // auto-sweep RAF loop — only attaches when in auto+playing
// //   useEffect(() => {
// //     if (state.mode !== 'auto' || !state.autoPlaying) return;
// //     let raf;
// //     const tick = () => {
// //       const s = stateRef.current;
// //       const t = types[s.typeId];
// //       const vr = sel.viewRange(s, t);
// //       let nx = s.marble + s.marbleDir * (vr.hi - vr.lo) / 360 * s.autoSpeed;
// //       let nd = s.marbleDir;
// //       if (nx > vr.hi - 0.2) { nx = vr.hi - 0.2; nd = -1; }
// //       if (nx < vr.lo + 0.2) { nx = vr.lo + 0.2; nd = 1; }
// //       if (nd !== s.marbleDir) baseDispatch({ type: 'SET_MARBLE_DIR', dir: nd });
// //       baseDispatch({ type: 'SET_MARBLE', x: nx });
// //       raf = requestAnimationFrame(tick);
// //     };
// //     raf = requestAnimationFrame(tick);
// //     return () => cancelAnimationFrame(raf);
// //   }, [state.mode, state.autoPlaying, types]);

// //   // tour — one setTimeout per step
// //   useEffect(() => {
// //     if (!state.tour) return;
// //     const stops = sel.stepStops(state, type);
// //     if (state.stepIdx >= stops.length - 1) {
// //       baseDispatch({ type: 'TOGGLE_TOUR' });
// //       return;
// //     }
// //     const id = setTimeout(() => {
// //       const nextIdx = state.stepIdx + 1;
// //       const next = stops[nextIdx];
// //       baseDispatch({ type: 'SET_STEP_IDX', idx: nextIdx });
// //       baseDispatch({ type: 'SET_MARBLE', x: next.x });
// //     }, 1400);
// //     return () => clearTimeout(id);
// //   }, [state.tour, state.stepIdx, state.typeId, state.p, type]);

// //   // URL writeback
// //   useEffect(() => {
// //     writeUrl(state, type);
// //   }, [state.typeId, state.p, state.strict, state.dir, type]);

// //   return { state, dispatch, type, computed, focus, F, inDomain, holds };
// // }


// // logic.js
// // Pure helpers + state + selectors + hook for the inequality visualizer.
// // Has no domain knowledge of specific inequality types — selectors take a `type` config.

// import { useReducer, useCallback, useEffect, useRef, useMemo } from 'react';

// // ============================================================
// // FORMATTING HELPERS
// // ============================================================
// export const sup = n => ({ 2: '\u00B2', 3: '\u00B3', 4: '\u2074' })[n] || ('^' + n);
// export const round2 = n => Math.round(n * 100) / 100;
// export const fmt = n => {
//   if (!isFinite(n)) return n > 0 ? '\u221E' : '\u2212\u221E';
//   return Number.isInteger(n) ? String(n) : round2(n).toFixed(2);
// };
// export const facStr = r => `(x ${r < 0 ? '+' : '\u2212'} ${Math.abs(r)})`;
// export const uniqSorted = a => [...new Set(a)].sort((x, y) => x - y);

// export const quadRoots = (a, b, c) => {
//   if (a === 0) {
//     if (b === 0) return null;
//     return { distinct: [-c / b], double: false };
//   }
//   const d = b * b - 4 * a * c;
//   if (d < 0) return null;
//   if (d === 0) return { distinct: [-b / (2 * a)], double: true };
//   const s = Math.sqrt(d);
//   return { distinct: uniqSorted([(-b - s) / (2 * a), (-b + s) / (2 * a)]), double: false };
// };

// export const quadExprStr = p => {
//   const a = p.a === 0 ? '' : (p.a === 1 ? 'x\u00B2' : (p.a === -1 ? '\u2212x\u00B2' : `${p.a}x\u00B2`));
//   const b = p.b === 0 ? '' : ` ${p.b < 0 ? '\u2212' : '+'} ${Math.abs(p.b) === 1 ? '' : Math.abs(p.b)}x`;
//   const c = p.c === 0 ? '' : ` ${p.c < 0 ? '\u2212' : '+'} ${Math.abs(p.c)}`;
//   return (a + b + c).trim() || '0';
// };

// export const niceTickStep = (range, targetCount = 5) => {
//   const rawStep = range / targetCount;
//   const mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
//   const norm = rawStep / mag;
//   if (norm < 1.5) return 1 * mag;
//   if (norm < 3) return 2 * mag;
//   if (norm < 4) return 2.5 * mag;
//   if (norm < 7) return 5 * mag;
//   return 10 * mag;
// };

// export const formatTick = v => {
//   if (Math.abs(v) < 1e-9) return '0';
//   const av = Math.abs(v);
//   if (av >= 100 || av < 0.01) return v.toExponential(0);
//   if (Number.isInteger(v)) return String(v);
//   return round2(v).toString();
// };

// export const signSymOf = v => {
//   if (Number.isNaN(v)) return '\u00D7';
//   if (Math.abs(v) < 1e-9) return '0';
//   return v > 0 ? '+' : '\u2212';
// };
// export const signClassOf = v => {
//   if (Number.isNaN(v)) return 'undef';
//   if (Math.abs(v) < 1e-9) return 'sz';
//   return v > 0 ? 'sp' : 'sn';
// };

// // substitute the literal letter x in a label with a numeric value
// export const subText = (label, x) => {
//   const sub = x < 0 ? `(${fmt(x)})` : fmt(x);
//   return label.replace(/\bx\b/g, sub);
// };

// // ============================================================
// // GEOMETRY (SVG layout for number line + curve)
// // ============================================================
// export const G = {
//   W: 980,
//   padX: 46,
//   curveTop: 20,
//   curveBottom: 200,
//   axisY: 232,
//   tickLabelY: 250,
//   trailY: 268,
//   marbleY: 304,
//   totalH: 332,
//   FOCUS_TOLERANCE: 0.2,
// };
// G.curveZero = (G.curveTop + G.curveBottom) / 2;

// export const X = (v, vr) =>
//   G.padX + (v - vr.lo) / (vr.hi - vr.lo) * (G.W - 2 * G.padX);
// export const Xinv = (px, vr) =>
//   vr.lo + (px - G.padX) / (G.W - 2 * G.padX) * (vr.hi - vr.lo);
// export const Y_at = (v, yR) => {
//   if (!Number.isFinite(v)) return null;
//   const t = (v - yR.min) / (yR.max - yR.min);
//   return G.curveBottom - t * (G.curveBottom - G.curveTop);
// };

// // ============================================================
// // SELECTORS — pure functions taking (state, type)
// // ============================================================
// const inDomainP = (x, state, type) => {
//   const d = type.domain(state.p);
//   if (d.excluded && d.excluded.some(e => Math.abs(e - x) < 1e-9)) return false;
//   if (d.lo !== undefined && x < d.lo - 1e-9) return false;
//   return !Number.isNaN(type.f(state.p)(x));
// };
// const holdsP = (x, state, type) => {
//   if (!inDomainP(x, state, type)) return false;
//   const v = type.f(state.p)(x);
//   if (Number.isNaN(v)) return false;
//   if (Math.abs(v) < 1e-9) return !state.strict;
//   return state.dir === 'lt' ? v < -1e-9 : v > 1e-9;
// };

// export const sel = {
//   factors: (state, type) => type.factors(state.p),

//   critXs: (state, type) =>
//     uniqSorted(type.factors(state.p).flatMap(f => f.criticalXs).filter(isFinite)),

//   criticalInfo: (state, type) => {
//     const all = [];
//     type.factors(state.p).forEach(f =>
//       f.criticalXs.forEach(x => all.push({ x, kind: f.kind, mult: f.mult, factorId: f.id }))
//     );
//     return all.sort((a, b) => a.x - b.x);
//   },

//   allCrit: (state, type) => {
//     const xs = sel.critXs(state, type);
//     const dom = type.domain(state.p);
//     return uniqSorted([...xs, ...(dom.lo !== undefined ? [dom.lo] : [])]);
//   },

//   F: (state, type) => type.f(state.p),
//   inDomain: inDomainP,
//   holds: holdsP,

//   opSym: state => state.strict
//     ? (state.dir === 'lt' ? '<' : '>')
//     : (state.dir === 'lt' ? '\u2264' : '\u2265'),

//   sampleAt: (i, crit) => {
//     if (crit.length === 0) return 0;
//     if (i === 0) return crit[0] - 1;
//     if (i === crit.length) return crit[crit.length - 1] + 1;
//     return (crit[i - 1] + crit[i]) / 2;
//   },

//   solution: (state, type) => {
//     const crit = sel.allCrit(state, type);
//     const bounds = [-Infinity, ...crit, Infinity];
//     const segs = [];
//     for (let i = 0; i < bounds.length - 1; i++) {
//       const mid = (isFinite(bounds[i]) && isFinite(bounds[i + 1]))
//         ? (bounds[i] + bounds[i + 1]) / 2
//         : (isFinite(bounds[i]) ? bounds[i] + 1 : bounds[i + 1] - 1);
//       if (holdsP(mid, state, type)) {
//         segs.push({ lo: bounds[i], hi: bounds[i + 1], openLo: true, openHi: true });
//       }
//     }
//     const poles = sel.criticalInfo(state, type)
//       .filter(c => c.kind !== 'zero').map(c => c.x);
//     if (!state.strict) {
//       segs.forEach(s => {
//         if (isFinite(s.lo) && !poles.includes(s.lo) && holdsP(s.lo, state, type)) s.openLo = false;
//         if (isFinite(s.hi) && !poles.includes(s.hi) && holdsP(s.hi, state, type)) s.openHi = false;
//       });
//     }
//     segs.sort((a, b) => a.lo - b.lo);
//     const merged = [];
//     segs.forEach(s => {
//       const last = merged[merged.length - 1];
//       if (last && isFinite(last.hi) && isFinite(s.lo) && last.hi === s.lo && !last.openHi && !s.openLo) {
//         last.hi = s.hi;
//         last.openHi = s.openHi;
//       } else {
//         merged.push({ ...s });
//       }
//     });
//     return merged;
//   },

//   intervalNotation: (state, type) => {
//     const segs = sel.solution(state, type);
//     if (segs.length === 0) return '\u2205  (no solution)';
//     if (segs.length === 1 && !isFinite(segs[0].lo) && !isFinite(segs[0].hi)) return '(\u2212\u221E, \u221E)';
//     return segs.map(s =>
//       `${s.openLo ? '(' : '['}${isFinite(s.lo) ? fmt(s.lo) : '\u2212\u221E'}, ${isFinite(s.hi) ? fmt(s.hi) : '\u221E'}${s.openHi ? ')' : ']'}`
//     ).join('  \u222A  ');
//   },

//   setBuilder: state => `{ x \u2208 \u211D : f(x) ${sel.opSym(state)} 0 }`,

//   focusInfo: (state, type) => {
//     const x = state.marble;
//     if (!inDomainP(x, state, type)) return { kind: 'out', x };
//     const facs = type.factors(state.p);
//     for (const f of facs) {
//       for (const cx of f.criticalXs) {
//         if (Math.abs(x - cx) < G.FOCUS_TOLERANCE) {
//           return { kind: 'critical', factorId: f.id, factorKind: f.kind, criticalX: cx, x };
//         }
//       }
//     }
//     const dom = type.domain(state.p);
//     if (dom.lo !== undefined && Math.abs(x - dom.lo) < G.FOCUS_TOLERANCE) {
//       return { kind: 'critical', factorId: facs[0].id, factorKind: 'domain', criticalX: dom.lo, x };
//     }
//     const crit = sel.allCrit(state, type);
//     let idx = 0;
//     for (let i = 0; i < crit.length; i++) if (x > crit[i]) idx = i + 1;
//     return { kind: 'interval', intervalIdx: idx, x };
//   },

//   stepStops: (state, type) => {
//     const c = sel.allCrit(state, type);
//     if (c.length === 0) return [
//       { x: -2, label: 'test point' },
//       { x: 0, label: 'test point' },
//       { x: 2, label: 'test point' },
//     ];
//     const stops = [];
//     const dom = type.domain(state.p);
//     const critInfo = sel.criticalInfo(state, type);
//     const kindFor = x => {
//       const ci = critInfo.find(z => Math.abs(z.x - x) < 1e-9);
//       if (ci) return ci.kind;
//       if (dom.lo !== undefined && Math.abs(dom.lo - x) < 1e-9) return 'domain';
//       return 'zero';
//     };
//     stops.push({ x: c[0] - 2, label: 'left test point' });
//     for (let i = 0; i < c.length; i++) {
//       const k = kindFor(c[i]);
//       const lab = k === 'pole' ? `pole x=${fmt(c[i])}`
//         : k === 'domain' ? `domain edge x=${fmt(c[i])}`
//         : `critical point x=${fmt(c[i])}`;
//       stops.push({ x: c[i], label: lab });
//       if (i < c.length - 1) {
//         stops.push({
//           x: (c[i] + c[i + 1]) / 2,
//           label: `test point in (${fmt(c[i])}, ${fmt(c[i + 1])})`,
//         });
//       }
//     }
//     stops.push({ x: c[c.length - 1] + 2, label: 'right test point' });
//     return stops;
//   },

//   viewRange: (state, type) => {
//     const c = sel.allCrit(state, type);
//     return {
//       lo: c.length ? Math.min(...c) - 2.5 : -5,
//       hi: c.length ? Math.max(...c) + 2.5 : 5,
//     };
//   },

//   curveYRange: (state, type) => {
//     const vr = sel.viewRange(state, type);
//     const f = type.f(state.p);
//     const N = 240;
//     const vals = [];
//     for (let i = 0; i <= N; i++) {
//       const x = vr.lo + (vr.hi - vr.lo) * i / N;
//       if (!inDomainP(x, state, type)) continue;
//       const y = f(x);
//       if (Number.isFinite(y)) vals.push(y);
//     }
//     if (!vals.length) return { min: -1, max: 1 };
//     let mn = Math.min(...vals), mx = Math.max(...vals);
//     const sorted = [...vals].sort((a, b) => a - b);
//     const p5 = sorted[Math.floor(sorted.length * 0.05)];
//     const p95 = sorted[Math.floor(sorted.length * 0.95)];
//     if (mx - mn > 10 * (p95 - p5)) { mn = p5; mx = p95; }
//     const mag = Math.max(Math.abs(mn), Math.abs(mx), 0.5);
//     return { min: -mag, max: mag };
//   },

//   curveSegments: (state, type) => {
//     const vr = sel.viewRange(state, type);
//     const yR = sel.curveYRange(state, type);
//     const f = type.f(state.p);
//     const N = 260;
//     const segs = [];
//     let cur = [];
//     const dom = type.domain(state.p);
//     for (let i = 0; i <= N; i++) {
//       const x = vr.lo + (vr.hi - vr.lo) * i / N;
//       let breakHere = false;
//       if (!inDomainP(x, state, type)) breakHere = true;
//       if (dom.excluded) dom.excluded.forEach(e => {
//         if (i > 0) {
//           const xPrev = vr.lo + (vr.hi - vr.lo) * (i - 1) / N;
//           if ((xPrev - e) * (x - e) < 0) breakHere = true;
//         }
//       });
//       if (breakHere) {
//         if (cur.length > 1) segs.push(cur);
//         cur = [];
//         continue;
//       }
//       const y = f(x);
//       if (!Number.isFinite(y)) {
//         if (cur.length > 1) segs.push(cur);
//         cur = [];
//         continue;
//       }
//       const yc = Math.max(yR.min, Math.min(yR.max, y));
//       cur.push({ x, y: yc });
//     }
//     if (cur.length > 1) segs.push(cur);
//     return { segs, range: yR };
//   },
// };

// // ============================================================
// // STATE
// // ============================================================
// export const createInitialState = (types, override = {}) => {
//   const typeId = override.typeId || 'poly';
//   const tpl = override.tpl ?? 0;
//   const p = override.p || { ...types[typeId].templates[tpl].vals };
//   const tempState = { typeId, p, strict: true, dir: 'lt', marble: 0 };
//   const stops = sel.stepStops(tempState, types[typeId]);
//   return {
//     typeId,
//     tpl,
//     p,
//     paramMode: {},
//     strict: override.strict ?? true,
//     dir: override.dir || 'lt',
//     mode: 'drag',
//     autoPlaying: false,
//     autoSpeed: 0.6,
//     marble: stops[0]?.x ?? 0,
//     marbleDir: 1,
//     trail: [],
//     lastX: null,
//     stepIdx: 0,
//     tour: false,
//     explainTab: 'live',
//   };
// };

// const trailExtend = (state, x) => {
//   if (state.lastX === null) return { marble: x, lastX: x, trail: state.trail };
//   const x0 = Math.min(state.lastX, x);
//   const x1 = Math.max(state.lastX, x);
//   if (x1 - x0 < 1e-4) return { marble: x, lastX: x, trail: state.trail };
//   return { marble: x, lastX: x, trail: [...state.trail, { x0, x1 }] };
// };

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_TYPE':
//       return {
//         ...state,
//         typeId: action.typeId,
//         tpl: 0,
//         p: { ...action.defaultParams },
//         paramMode: {},
//         strict: true,
//         dir: 'lt',
//         trail: [],
//         lastX: null,
//         mode: 'drag',
//         autoPlaying: false,
//         tour: false,
//         stepIdx: 0,
//         marble: action.initialMarble ?? state.marble,
//       };
//     case 'SET_TEMPLATE':
//       return {
//         ...state,
//         tpl: action.tpl,
//         p: { ...action.vals },
//         trail: [],
//         lastX: null,
//         marble: action.initialMarble ?? state.marble,
//       };
//     case 'SET_PARAM': {
//       const v = Number(action.value);
//       const cl = action.min != null && action.max != null
//         ? Math.max(action.min, Math.min(action.max, v))
//         : v;
//       return { ...state, p: { ...state.p, [action.key]: cl }, trail: [], lastX: null };
//     }
//     case 'SET_PARAM_MODE':
//       return { ...state, paramMode: { ...state.paramMode, [action.key]: action.mode } };
//     case 'TOGGLE_STRICT':
//       return { ...state, strict: !state.strict, trail: [], lastX: null };
//     case 'TOGGLE_DIR':
//       return { ...state, dir: state.dir === 'lt' ? 'gt' : 'lt', trail: [], lastX: null };
//     case 'SET_MODE': {
//       const m = action.mode;
//       const s = { ...state, mode: m, autoPlaying: m === 'auto' };
//       if (m === 'step' && action.initialMarble !== undefined) {
//         s.stepIdx = 0;
//         s.marble = action.initialMarble;
//         s.lastX = action.initialMarble;
//       }
//       if (m !== 'step') s.tour = false;
//       return s;
//     }
//     case 'TOGGLE_PLAY':
//       return { ...state, autoPlaying: !state.autoPlaying };
//     case 'SET_SPEED':
//       return { ...state, autoSpeed: Number(action.speed) };
//     case 'SET_MARBLE': {
//       const x = action.x;
//       if (action.noTrail) return { ...state, marble: x, lastX: x };
//       return { ...state, ...trailExtend(state, x) };
//     }
//     case 'SET_MARBLE_DIR':
//       return { ...state, marbleDir: action.dir };
//     case 'CLEAR_TRAIL':
//       return { ...state, trail: [], lastX: null };
//     case 'SET_STEP_IDX':
//       return { ...state, stepIdx: action.idx };
//     case 'TOGGLE_TOUR':
//       return { ...state, tour: !state.tour };
//     case 'SET_EXPLAIN_TAB':
//       return { ...state, explainTab: action.tab };
//     case 'RESET':
//       return {
//         ...state,
//         p: { ...action.defaults },
//         strict: true,
//         dir: 'lt',
//         trail: [],
//         lastX: null,
//       };
//     default:
//       return state;
//   }
// };

// // ============================================================
// // URL STATE
// // ============================================================
// export const writeUrl = (state, type) => {
//   if (typeof window === 'undefined') return;
//   const parts = [`t=${state.typeId}`, `s=${state.strict ? 1 : 0}`, `d=${state.dir}`];
//   type.params.forEach(pr => parts.push(`${pr.key}=${state.p[pr.key]}`));
//   history.replaceState(null, '', '#' + parts.join('&'));
// };

// export const readUrl = (types) => {
//   if (typeof window === 'undefined' || !location.hash) return null;
//   const parts = location.hash.slice(1).split('&');
//   const kv = {};
//   parts.forEach(p => {
//     const [k, v] = p.split('=');
//     kv[k] = v;
//   });
//   const typeId = kv.t && types[kv.t] ? kv.t : 'poly';
//   const t = types[typeId];
//   const p = { ...t.templates[0].vals };
//   t.params.forEach(pr => {
//     if (kv[pr.key] !== undefined) p[pr.key] = Number(kv[pr.key]);
//   });
//   return {
//     typeId,
//     p,
//     strict: kv.s !== undefined ? kv.s === '1' : true,
//     dir: kv.d || 'lt',
//   };
// };

// // ============================================================
// // THE HOOK
// // ============================================================
// export function useInequality(types, options = {}) {
//   const initFromUrl = useMemo(() => readUrl(types), [types]);
//   const [state, baseDispatch] = useReducer(
//     reducer,
//     null,
//     () => createInitialState(types, { ...(initFromUrl || {}), ...(options.initial || {}) })
//   );

//   const type = types[state.typeId];

//   // ref for inside RAF / timers, where we want the latest state
//   const stateRef = useRef(state);
//   useEffect(() => { stateRef.current = state; }, [state]);

//   // dispatch wrapper: injects context (default params, initial marble, slider bounds, etc.)
//   const dispatch = useCallback((action) => {
//     const s = stateRef.current;
//     switch (action.type) {
//       case 'SET_TYPE': {
//         const t = types[action.typeId];
//         const vals = t.templates[0].vals;
//         const tempState = { typeId: action.typeId, p: { ...vals }, strict: true, dir: 'lt', marble: 0 };
//         const stops = sel.stepStops(tempState, t);
//         baseDispatch({ ...action, defaultParams: vals, initialMarble: stops[0]?.x ?? 0 });
//         break;
//       }
//       case 'SET_TEMPLATE': {
//         const t = types[s.typeId];
//         const vals = t.templates[action.tpl].vals;
//         const tempState = { ...s, p: { ...vals } };
//         const stops = sel.stepStops(tempState, t);
//         baseDispatch({ ...action, vals, initialMarble: stops[0]?.x ?? 0 });
//         break;
//       }
//       case 'SET_PARAM': {
//         const t = types[s.typeId];
//         const pr = t.params.find(pp => pp.key === action.key);
//         baseDispatch({ ...action, min: pr?.min, max: pr?.max });
//         break;
//       }
//       case 'SET_MODE': {
//         const t = types[s.typeId];
//         if (action.mode === 'step') {
//           const stops = sel.stepStops(s, t);
//           baseDispatch({ ...action, initialMarble: stops[0]?.x });
//         } else {
//           baseDispatch(action);
//         }
//         break;
//       }
//       case 'RESET': {
//         const t = types[s.typeId];
//         baseDispatch({ ...action, defaults: t.templates[s.tpl].vals });
//         break;
//       }
//       default:
//         baseDispatch(action);
//     }
//   }, [types]);

//   // memoize the heavy selectors keyed on the values they actually depend on
//   const computed = useMemo(() => ({
//     factors: sel.factors(state, type),
//     criticalInfo: sel.criticalInfo(state, type),
//     allCrit: sel.allCrit(state, type),
//     solution: sel.solution(state, type),
//     intervalNotation: sel.intervalNotation(state, type),
//     setBuilder: sel.setBuilder(state),
//     stepStops: sel.stepStops(state, type),
//     viewRange: sel.viewRange(state, type),
//     curveYRange: sel.curveYRange(state, type),
//     curveSegments: sel.curveSegments(state, type),
//     opSym: sel.opSym(state),
//   }), [state.typeId, state.p, state.strict, state.dir, type]);

//   const focus = useMemo(
//     () => sel.focusInfo(state, type),
//     [state.marble, state.p, state.typeId, state.strict, state.dir, type]
//   );

//   const F = useMemo(() => sel.F(state, type), [state.p, type]);
//   const inDomain = useCallback(x => sel.inDomain(x, state, type), [state, type]);
//   const holds = useCallback(x => sel.holds(x, state, type), [state, type]);

//   // auto-sweep RAF loop — only attaches when in auto+playing
//   useEffect(() => {
//     if (state.mode !== 'auto' || !state.autoPlaying) return;
//     let raf;
//     const tick = () => {
//       const s = stateRef.current;
//       const t = types[s.typeId];
//       const vr = sel.viewRange(s, t);
//       let nx = s.marble + s.marbleDir * (vr.hi - vr.lo) / 360 * s.autoSpeed;
//       let nd = s.marbleDir;
//       if (nx > vr.hi - 0.2) { nx = vr.hi - 0.2; nd = -1; }
//       if (nx < vr.lo + 0.2) { nx = vr.lo + 0.2; nd = 1; }
//       if (nd !== s.marbleDir) baseDispatch({ type: 'SET_MARBLE_DIR', dir: nd });
//       baseDispatch({ type: 'SET_MARBLE', x: nx });
//       raf = requestAnimationFrame(tick);
//     };
//     raf = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(raf);
//   }, [state.mode, state.autoPlaying, types]);

//   // tour — one setTimeout per step
//   useEffect(() => {
//     if (!state.tour) return;
//     const stops = sel.stepStops(state, type);
//     if (state.stepIdx >= stops.length - 1) {
//       baseDispatch({ type: 'TOGGLE_TOUR' });
//       return;
//     }
//     const id = setTimeout(() => {
//       const nextIdx = state.stepIdx + 1;
//       const next = stops[nextIdx];
//       baseDispatch({ type: 'SET_STEP_IDX', idx: nextIdx });
//       baseDispatch({ type: 'SET_MARBLE', x: next.x });
//     }, 1400);
//     return () => clearTimeout(id);
//   }, [state.tour, state.stepIdx, state.typeId, state.p, type]);

//   // URL writeback
//   useEffect(() => {
//     writeUrl(state, type);
//   }, [state.typeId, state.p, state.strict, state.dir, type]);

//   return { state, dispatch, type, computed, focus, F, inDomain, holds };
// }


// logic.js
// Pure helpers + state + selectors + hook for the inequality visualizer.
// Has no domain knowledge of specific inequality types — selectors take a `type` config.

import { useReducer, useCallback, useEffect, useRef, useMemo } from 'react';

// ============================================================
// FORMATTING HELPERS
// ============================================================
export const sup = n => ({ 2: '\u00B2', 3: '\u00B3', 4: '\u2074' })[n] || ('^' + n);
export const round2 = n => Math.round(n * 100) / 100;
export const fmt = n => {
  if (!isFinite(n)) return n > 0 ? '\u221E' : '\u2212\u221E';
  return Number.isInteger(n) ? String(n) : round2(n).toFixed(2);
};
export const facStr = r => `(x ${r < 0 ? '+' : '\u2212'} ${Math.abs(r)})`;
export const uniqSorted = a => [...new Set(a)].sort((x, y) => x - y);

export const quadRoots = (a, b, c) => {
  if (a === 0) {
    if (b === 0) return null;
    return { distinct: [-c / b], double: false };
  }
  const d = b * b - 4 * a * c;
  if (d < 0) return null;
  if (d === 0) return { distinct: [-b / (2 * a)], double: true };
  const s = Math.sqrt(d);
  return { distinct: uniqSorted([(-b - s) / (2 * a), (-b + s) / (2 * a)]), double: false };
};

export const quadExprStr = p => {
  const a = p.a === 0 ? '' : (p.a === 1 ? 'x\u00B2' : (p.a === -1 ? '\u2212x\u00B2' : `${p.a}x\u00B2`));
  const b = p.b === 0 ? '' : ` ${p.b < 0 ? '\u2212' : '+'} ${Math.abs(p.b) === 1 ? '' : Math.abs(p.b)}x`;
  const c = p.c === 0 ? '' : ` ${p.c < 0 ? '\u2212' : '+'} ${Math.abs(p.c)}`;
  return (a + b + c).trim() || '0';
};

export const niceTickStep = (range, targetCount = 5) => {
  const rawStep = range / targetCount;
  const mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const norm = rawStep / mag;
  if (norm < 1.5) return 1 * mag;
  if (norm < 3) return 2 * mag;
  if (norm < 4) return 2.5 * mag;
  if (norm < 7) return 5 * mag;
  return 10 * mag;
};

export const formatTick = v => {
  if (Math.abs(v) < 1e-9) return '0';
  const av = Math.abs(v);
  if (av >= 100 || av < 0.01) return v.toExponential(0);
  if (Number.isInteger(v)) return String(v);
  return round2(v).toString();
};

export const signSymOf = v => {
  if (Number.isNaN(v)) return '\u00D7';
  if (Math.abs(v) < 1e-9) return '0';
  return v > 0 ? '+' : '\u2212';
};
export const signClassOf = v => {
  if (Number.isNaN(v)) return 'undef';
  if (Math.abs(v) < 1e-9) return 'sz';
  return v > 0 ? 'sp' : 'sn';
};

// substitute the literal letter x in a label with a numeric value
export const subText = (label, x) => {
  const sub = x < 0 ? `(${fmt(x)})` : fmt(x);
  return label.replace(/\bx\b/g, sub);
};

// ============================================================
// GEOMETRY (SVG layout for number line + curve)
// ============================================================
export const G = {
  W: 980,
  padX: 46,
  curveTop: 20,
  curveBottom: 200,
  axisY: 232,
  tickLabelY: 250,
  trailY: 268,
  marbleY: 304,
  totalH: 332,
  FOCUS_TOLERANCE: 0.2,
};
G.curveZero = (G.curveTop + G.curveBottom) / 2;

export const X = (v, vr) =>
  G.padX + (v - vr.lo) / (vr.hi - vr.lo) * (G.W - 2 * G.padX);
export const Xinv = (px, vr) =>
  vr.lo + (px - G.padX) / (G.W - 2 * G.padX) * (vr.hi - vr.lo);
export const Y_at = (v, yR) => {
  if (!Number.isFinite(v)) return null;
  const t = (v - yR.min) / (yR.max - yR.min);
  return G.curveBottom - t * (G.curveBottom - G.curveTop);
};

// ============================================================
// SELECTORS — pure functions taking (state, type)
// ============================================================
const inDomainP = (x, state, type) => {
  const d = type.domain(state.p);
  if (d.excluded && d.excluded.some(e => Math.abs(e - x) < 1e-9)) return false;
  if (d.lo !== undefined && x < d.lo - 1e-9) return false;
  return !Number.isNaN(type.f(state.p)(x));
};
const holdsP = (x, state, type) => {
  if (!inDomainP(x, state, type)) return false;
  const v = type.f(state.p)(x);
  if (Number.isNaN(v)) return false;
  if (Math.abs(v) < 1e-9) return !state.strict;
  return state.dir === 'lt' ? v < -1e-9 : v > 1e-9;
};

export const sel = {
  factors: (state, type) => type.factors(state.p),

  critXs: (state, type) =>
    uniqSorted(type.factors(state.p).flatMap(f => f.criticalXs).filter(isFinite)),

  criticalInfo: (state, type) => {
    const all = [];
    type.factors(state.p).forEach(f =>
      f.criticalXs.forEach(x => all.push({ x, kind: f.kind, mult: f.mult, factorId: f.id }))
    );
    return all.sort((a, b) => a.x - b.x);
  },

  allCrit: (state, type) => {
    const xs = sel.critXs(state, type);
    const dom = type.domain(state.p);
    return uniqSorted([...xs, ...(dom.lo !== undefined ? [dom.lo] : [])]);
  },

  F: (state, type) => type.f(state.p),
  inDomain: inDomainP,
  holds: holdsP,

  opSym: state => state.strict
    ? (state.dir === 'lt' ? '<' : '>')
    : (state.dir === 'lt' ? '\u2264' : '\u2265'),

  sampleAt: (i, crit) => {
    if (crit.length === 0) return 0;
    if (i === 0) return crit[0] - 1;
    if (i === crit.length) return crit[crit.length - 1] + 1;
    return (crit[i - 1] + crit[i]) / 2;
  },

  solution: (state, type) => {
    const crit = sel.allCrit(state, type);
    const bounds = [-Infinity, ...crit, Infinity];
    const segs = [];
    for (let i = 0; i < bounds.length - 1; i++) {
      const mid = (isFinite(bounds[i]) && isFinite(bounds[i + 1]))
        ? (bounds[i] + bounds[i + 1]) / 2
        : (isFinite(bounds[i]) ? bounds[i] + 1 : bounds[i + 1] - 1);
      if (holdsP(mid, state, type)) {
        segs.push({ lo: bounds[i], hi: bounds[i + 1], openLo: true, openHi: true });
      }
    }
    const poles = sel.criticalInfo(state, type)
      .filter(c => c.kind !== 'zero').map(c => c.x);
    if (!state.strict) {
      segs.forEach(s => {
        if (isFinite(s.lo) && !poles.includes(s.lo) && holdsP(s.lo, state, type)) s.openLo = false;
        if (isFinite(s.hi) && !poles.includes(s.hi) && holdsP(s.hi, state, type)) s.openHi = false;
      });
    }
    segs.sort((a, b) => a.lo - b.lo);
    const merged = [];
    segs.forEach(s => {
      const last = merged[merged.length - 1];
      if (last && isFinite(last.hi) && isFinite(s.lo) && last.hi === s.lo && !last.openHi && !s.openLo) {
        last.hi = s.hi;
        last.openHi = s.openHi;
      } else {
        merged.push({ ...s });
      }
    });
    return merged;
  },

  intervalNotation: (state, type) => {
    const segs = sel.solution(state, type);
    if (segs.length === 0) return '\u2205  (no solution)';
    if (segs.length === 1 && !isFinite(segs[0].lo) && !isFinite(segs[0].hi)) return '(\u2212\u221E, \u221E)';
    return segs.map(s =>
      `${s.openLo ? '(' : '['}${isFinite(s.lo) ? fmt(s.lo) : '\u2212\u221E'}, ${isFinite(s.hi) ? fmt(s.hi) : '\u221E'}${s.openHi ? ')' : ']'}`
    ).join('  \u222A  ');
  },

  setBuilder: state => `{ x \u2208 \u211D : f(x) ${sel.opSym(state)} 0 }`,

  focusInfo: (state, type) => {
    const x = state.marble;
    if (!inDomainP(x, state, type)) return { kind: 'out', x };
    const facs = type.factors(state.p);
    for (const f of facs) {
      for (const cx of f.criticalXs) {
        if (Math.abs(x - cx) < G.FOCUS_TOLERANCE) {
          return { kind: 'critical', factorId: f.id, factorKind: f.kind, criticalX: cx, x };
        }
      }
    }
    const dom = type.domain(state.p);
    if (dom.lo !== undefined && Math.abs(x - dom.lo) < G.FOCUS_TOLERANCE) {
      return { kind: 'critical', factorId: facs[0].id, factorKind: 'domain', criticalX: dom.lo, x };
    }
    const crit = sel.allCrit(state, type);
    let idx = 0;
    for (let i = 0; i < crit.length; i++) if (x > crit[i]) idx = i + 1;
    return { kind: 'interval', intervalIdx: idx, x };
  },

  stepStops: (state, type) => {
    const c = sel.allCrit(state, type);
    if (c.length === 0) return [
      { x: -2, label: 'test point' },
      { x: 0, label: 'test point' },
      { x: 2, label: 'test point' },
    ];
    const stops = [];
    const dom = type.domain(state.p);
    const critInfo = sel.criticalInfo(state, type);
    const kindFor = x => {
      const ci = critInfo.find(z => Math.abs(z.x - x) < 1e-9);
      if (ci) return ci.kind;
      if (dom.lo !== undefined && Math.abs(dom.lo - x) < 1e-9) return 'domain';
      return 'zero';
    };
    stops.push({ x: c[0] - 2, label: 'left test point' });
    for (let i = 0; i < c.length; i++) {
      const k = kindFor(c[i]);
      const lab = k === 'pole' ? `pole x=${fmt(c[i])}`
        : k === 'domain' ? `domain edge x=${fmt(c[i])}`
        : `critical point x=${fmt(c[i])}`;
      stops.push({ x: c[i], label: lab });
      if (i < c.length - 1) {
        stops.push({
          x: (c[i] + c[i + 1]) / 2,
          label: `test point in (${fmt(c[i])}, ${fmt(c[i + 1])})`,
        });
      }
    }
    stops.push({ x: c[c.length - 1] + 2, label: 'right test point' });
    return stops;
  },

  viewRange: (state, type) => {
    const c = sel.allCrit(state, type);
    return {
      lo: c.length ? Math.min(...c) - 2.5 : -5,
      hi: c.length ? Math.max(...c) + 2.5 : 5,
    };
  },

  curveYRange: (state, type) => {
    const vr = sel.viewRange(state, type);
    const f = type.f(state.p);
    const N = 240;
    const vals = [];
    for (let i = 0; i <= N; i++) {
      const x = vr.lo + (vr.hi - vr.lo) * i / N;
      if (!inDomainP(x, state, type)) continue;
      const y = f(x);
      if (Number.isFinite(y)) vals.push(y);
    }
    if (!vals.length) return { min: -1, max: 1 };
    let mn = Math.min(...vals), mx = Math.max(...vals);
    const sorted = [...vals].sort((a, b) => a - b);
    const p5 = sorted[Math.floor(sorted.length * 0.05)];
    const p95 = sorted[Math.floor(sorted.length * 0.95)];
    if (mx - mn > 10 * (p95 - p5)) { mn = p5; mx = p95; }
    const mag = Math.max(Math.abs(mn), Math.abs(mx), 0.5);
    return { min: -mag, max: mag };
  },

  curveSegments: (state, type) => {
    const vr = sel.viewRange(state, type);
    const yR = sel.curveYRange(state, type);
    const f = type.f(state.p);
    const N = 260;
    const segs = [];
    let cur = [];
    const dom = type.domain(state.p);
    for (let i = 0; i <= N; i++) {
      const x = vr.lo + (vr.hi - vr.lo) * i / N;
      let breakHere = false;
      if (!inDomainP(x, state, type)) breakHere = true;
      if (dom.excluded) dom.excluded.forEach(e => {
        if (i > 0) {
          const xPrev = vr.lo + (vr.hi - vr.lo) * (i - 1) / N;
          if ((xPrev - e) * (x - e) < 0) breakHere = true;
        }
      });
      if (breakHere) {
        if (cur.length > 1) segs.push(cur);
        cur = [];
        continue;
      }
      const y = f(x);
      if (!Number.isFinite(y)) {
        if (cur.length > 1) segs.push(cur);
        cur = [];
        continue;
      }
      const yc = Math.max(yR.min, Math.min(yR.max, y));
      cur.push({ x, y: yc });
    }
    if (cur.length > 1) segs.push(cur);
    return { segs, range: yR };
  },
};

// ============================================================
// STATE
// ============================================================
export const createInitialState = (types, override = {}) => {
  const typeId = override.typeId || 'poly';
  const tpl = override.tpl ?? 0;
  const p = override.p || { ...types[typeId].templates[tpl].vals };
  const tempState = { typeId, p, strict: true, dir: 'lt', marble: 0 };
  const stops = sel.stepStops(tempState, types[typeId]);
  return {
    typeId,
    tpl,
    p,
    paramMode: {},
    strict: override.strict ?? true,
    dir: override.dir || 'lt',
    mode: 'drag',
    autoPlaying: false,
    autoSpeed: 0.6,
    marble: stops[0]?.x ?? 0,
    marbleDir: 1,
    trail: [],
    lastX: null,
    stepIdx: 0,
    tour: false,
    explainTab: 'live',
  };
};

const trailExtend = (state, x) => {
  if (state.lastX === null) return { marble: x, lastX: x, trail: state.trail };
  const x0 = Math.min(state.lastX, x);
  const x1 = Math.max(state.lastX, x);
  if (x1 - x0 < 1e-4) return { marble: x, lastX: x, trail: state.trail };
  return { marble: x, lastX: x, trail: [...state.trail, { x0, x1 }] };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TYPE':
      return {
        ...state,
        typeId: action.typeId,
        tpl: 0,
        p: { ...action.defaultParams },
        paramMode: {},
        strict: true,
        dir: 'lt',
        trail: [],
        lastX: null,
        mode: 'drag',
        autoPlaying: false,
        tour: false,
        stepIdx: 0,
        marble: action.initialMarble ?? state.marble,
      };
    case 'SET_TEMPLATE':
      return {
        ...state,
        tpl: action.tpl,
        p: { ...action.vals },
        trail: [],
        lastX: null,
        marble: action.initialMarble ?? state.marble,
      };
    case 'SET_PARAM': {
      const v = Number(action.value);
      const cl = action.min != null && action.max != null
        ? Math.max(action.min, Math.min(action.max, v))
        : v;
      return { ...state, p: { ...state.p, [action.key]: cl }, trail: [], lastX: null };
    }
    case 'SET_PARAM_MODE':
      return { ...state, paramMode: { ...state.paramMode, [action.key]: action.mode } };
    case 'TOGGLE_STRICT':
      return { ...state, strict: !state.strict, trail: [], lastX: null };
    case 'TOGGLE_DIR':
      return { ...state, dir: state.dir === 'lt' ? 'gt' : 'lt', trail: [], lastX: null };
    case 'SET_MODE': {
      const m = action.mode;
      const s = { ...state, mode: m, autoPlaying: m === 'auto' };
      if (m === 'step' && action.initialMarble !== undefined) {
        s.stepIdx = 0;
        s.marble = action.initialMarble;
        s.lastX = action.initialMarble;
      }
      if (m !== 'step') s.tour = false;
      return s;
    }
    case 'TOGGLE_PLAY':
      return { ...state, autoPlaying: !state.autoPlaying };
    case 'SET_SPEED':
      return { ...state, autoSpeed: Number(action.speed) };
    case 'SET_MARBLE': {
      const x = action.x;
      if (action.noTrail) return { ...state, marble: x, lastX: x };
      return { ...state, ...trailExtend(state, x) };
    }
    case 'SET_MARBLE_DIR':
      return { ...state, marbleDir: action.dir };
    case 'CLEAR_TRAIL':
      return { ...state, trail: [], lastX: null };
    case 'SET_STEP_IDX':
      return { ...state, stepIdx: action.idx };
    case 'TOGGLE_TOUR':
      return { ...state, tour: !state.tour };
    case 'SET_EXPLAIN_TAB':
      return { ...state, explainTab: action.tab };
    case 'RESET':
      return {
        ...state,
        p: { ...action.defaults },
        strict: true,
        dir: 'lt',
        trail: [],
        lastX: null,
      };
    default:
      return state;
  }
};

// ============================================================
// URL STATE
// ============================================================
export const writeUrl = (state, type) => {
  if (typeof window === 'undefined') return;
  const parts = [`t=${state.typeId}`, `s=${state.strict ? 1 : 0}`, `d=${state.dir}`];
  type.params.forEach(pr => parts.push(`${pr.key}=${state.p[pr.key]}`));
  history.replaceState(null, '', '#' + parts.join('&'));
};

export const readUrl = (types) => {
  if (typeof window === 'undefined' || !location.hash) return null;
  const parts = location.hash.slice(1).split('&');
  const kv = {};
  parts.forEach(p => {
    const [k, v] = p.split('=');
    kv[k] = v;
  });
  const typeId = kv.t && types[kv.t] ? kv.t : 'poly';
  const t = types[typeId];
  const p = { ...t.templates[0].vals };
  t.params.forEach(pr => {
    if (kv[pr.key] !== undefined) p[pr.key] = Number(kv[pr.key]);
  });
  return {
    typeId,
    p,
    strict: kv.s !== undefined ? kv.s === '1' : true,
    dir: kv.d || 'lt',
  };
};

// ============================================================
// THE HOOK
// ============================================================
export function useInequality(types, options = {}) {
  const initFromUrl = useMemo(() => readUrl(types), [types]);
  const [state, baseDispatch] = useReducer(
    reducer,
    null,
    () => createInitialState(types, { ...(initFromUrl || {}), ...(options.initial || {}) })
  );

  const type = types[state.typeId];

  // ref for inside RAF / timers, where we want the latest state
  const stateRef = useRef(state);
  useEffect(() => { stateRef.current = state; }, [state]);

  // dispatch wrapper: injects context (default params, initial marble, slider bounds, etc.)
  const dispatch = useCallback((action) => {
    const s = stateRef.current;
    switch (action.type) {
      case 'SET_TYPE': {
        const t = types[action.typeId];
        const vals = t.templates[0].vals;
        const tempState = { typeId: action.typeId, p: { ...vals }, strict: true, dir: 'lt', marble: 0 };
        const stops = sel.stepStops(tempState, t);
        baseDispatch({ ...action, defaultParams: vals, initialMarble: stops[0]?.x ?? 0 });
        break;
      }
      case 'SET_TEMPLATE': {
        const t = types[s.typeId];
        const vals = t.templates[action.tpl].vals;
        const tempState = { ...s, p: { ...vals } };
        const stops = sel.stepStops(tempState, t);
        baseDispatch({ ...action, vals, initialMarble: stops[0]?.x ?? 0 });
        break;
      }
      case 'SET_PARAM': {
        const t = types[s.typeId];
        const pr = t.params.find(pp => pp.key === action.key);
        baseDispatch({ ...action, min: pr?.min, max: pr?.max });
        break;
      }
      case 'SET_MODE': {
        const t = types[s.typeId];
        if (action.mode === 'step') {
          const stops = sel.stepStops(s, t);
          baseDispatch({ ...action, initialMarble: stops[0]?.x });
        } else {
          baseDispatch(action);
        }
        break;
      }
      case 'RESET': {
        const t = types[s.typeId];
        baseDispatch({ ...action, defaults: t.templates[s.tpl].vals });
        break;
      }
      default:
        baseDispatch(action);
    }
  }, [types]);

  // memoize the heavy selectors keyed on the values they actually depend on
  const computed = useMemo(() => ({
    factors: sel.factors(state, type),
    criticalInfo: sel.criticalInfo(state, type),
    allCrit: sel.allCrit(state, type),
    solution: sel.solution(state, type),
    intervalNotation: sel.intervalNotation(state, type),
    setBuilder: sel.setBuilder(state),
    stepStops: sel.stepStops(state, type),
    viewRange: sel.viewRange(state, type),
    curveYRange: sel.curveYRange(state, type),
    curveSegments: sel.curveSegments(state, type),
    opSym: sel.opSym(state),
  }), [state.typeId, state.p, state.strict, state.dir, type]);

  const focus = useMemo(
    () => sel.focusInfo(state, type),
    [state.marble, state.p, state.typeId, state.strict, state.dir, type]
  );

  const F = useMemo(() => sel.F(state, type), [state.p, type]);
  const inDomain = useCallback(x => sel.inDomain(x, state, type), [state, type]);
  const holds = useCallback(x => sel.holds(x, state, type), [state, type]);

  // auto-sweep RAF loop — only attaches when in auto+playing
  useEffect(() => {
    if (state.mode !== 'auto' || !state.autoPlaying) return;
    let raf;
    const tick = () => {
      const s = stateRef.current;
      const t = types[s.typeId];
      const vr = sel.viewRange(s, t);
      let nx = s.marble + s.marbleDir * (vr.hi - vr.lo) / 360 * s.autoSpeed;
      let nd = s.marbleDir;
      if (nx > vr.hi - 0.2) { nx = vr.hi - 0.2; nd = -1; }
      if (nx < vr.lo + 0.2) { nx = vr.lo + 0.2; nd = 1; }
      if (nd !== s.marbleDir) baseDispatch({ type: 'SET_MARBLE_DIR', dir: nd });
      baseDispatch({ type: 'SET_MARBLE', x: nx });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [state.mode, state.autoPlaying, types]);

  // tour — one setTimeout per step
  useEffect(() => {
    if (!state.tour) return;
    const stops = sel.stepStops(state, type);
    if (state.stepIdx >= stops.length - 1) {
      baseDispatch({ type: 'TOGGLE_TOUR' });
      return;
    }
    const id = setTimeout(() => {
      const nextIdx = state.stepIdx + 1;
      const next = stops[nextIdx];
      baseDispatch({ type: 'SET_STEP_IDX', idx: nextIdx });
      baseDispatch({ type: 'SET_MARBLE', x: next.x });
    }, 1400);
    return () => clearTimeout(id);
  }, [state.tour, state.stepIdx, state.typeId, state.p, type]);

  // URL writeback
  useEffect(() => {
    writeUrl(state, type);
  }, [state.typeId, state.p, state.strict, state.dir, type]);

  return { state, dispatch, type, computed, focus, F, inDomain, holds };
}