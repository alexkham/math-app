
// // ============================================================
// // FunctionExplorer.jsx  (v3)
// // Changes from v2:
// //   - Restored Export and Maximize header buttons. Always rendered.
// //     Sensible built-in defaults: Export downloads the graph canvas as
// //     PNG; Maximize toggles fullscreen on the outer container. Props
// //     onExport / onMaximize override the defaults.
// //   - Added a containerRef on the outer div so the default handlers
// //     can reach the canvas element and toggle fullscreen.
// //   - Guarded VisualizerCore: if the import resolved to undefined
// //     (wrong path or default vs named export mismatch), the graph pane
// //     renders a readable message instead of crashing SSR.
// // ============================================================

// import React, {
//   useState,
//   useMemo,
//   useCallback,
//   useEffect,
//   useRef,
//   createContext,
// } from 'react';
// import { parse, derivative } from 'mathjs';
// import { VisualizerCore } from '../FunctionVisualizerCoreImproved';

// import {
//   Header,
//   Funcbar,
//   LeftRail,
//   GraphViewSwitch,
//   RightTabs,
//   RightPanel,
//   InsightsStrip,
//   StatusBar,
//   NumericTable,
//   MappingDiagram,
//   injectStyles,
// } from './ExplorerAtoms';

// import {
//   AboutPanel,
//   DomainRangePanel,
//   ZerosPanel,
//   SymmetryPanel,
//   ContinuityPanel,
//   AsymptotesPanel,
//   MonotonicityPanel,
//   ConcavityPanel,
//   BoundednessPanel,
//   InvertibilityPanel,
//   ParentTransformsPanel,
//   OperationsPanel,
//   DerivativePanel,
//   SecondDerivativePanel,
//   AntiderivativePanel,
//   TangentApproxPanel,
//   TheoryReadingList,
// } from './ExplorerPanels';

// // ============================================================
// // DESIGN TOKENS
// // ============================================================
// export const T = {
//   bg: {
//     app:       '#f4f5f7',
//     panel:     '#ffffff',
//     graph:     '#fcfcfd',
//     subtle:    '#f8fafc',
//     hover:     '#eef2f6',
//     pressed:   '#e2e8f0',
//     tintBlue:  '#eff6ff',
//     tintBlue2: '#dbeafe',
//   },
//   border: {
//     soft:    '#f1f5f9',
//     mid:     '#e2e8f0',
//     strong:  '#cbd5e1',
//     blue:    '#bfdbfe',
//   },
//   text: {
//     strong: '#0f172a',
//     body:   '#334155',
//     muted:  '#64748b',
//     faint:  '#94a3b8',
//   },
//   c: {
//     blue:    '#3b82f6',
//     blueD:   '#1d4ed8',
//     blueL:   '#60a5fa',
//     slate:   '#475569',
//     slateD:  '#1e293b',
//   },
//   font: {
//     sans: '"Geist", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
//     mono: '"Geist Mono", ui-monospace, "SF Mono", Menlo, monospace',
//   },
//   radius: { sm: 5, md: 7, lg: 10 },
//   shadow: {
//     s1: '0 1px 2px rgba(15, 23, 42, 0.04)',
//     s2: '0 1px 3px rgba(15,23,42,0.06), 0 4px 12px rgba(15,23,42,0.04)',
//   },
//   width: { rail: 46, rtabs: 44, rpanel: 410 },
//   height: { header: 48, funcbar: 44, insights: 78, status: 28 },
// };

// // ============================================================
// // ENGINE STYLE OVERRIDE
// // ============================================================
// export const EXPLORER_STYLES = {
//   canvas:    { background: T.bg.app },
//   graphArea: { background: T.bg.graph },
//   grid: {
//     color:       T.border.mid,
//     minorColor:  T.border.soft,
//     stroke:      1,
//     minorStroke: 1,
//     pattern:     [],
//   },
//   axes:   { color: T.c.slate, stroke: 1.5, pattern: [] },
//   labels: {
//     color:        T.text.muted,
//     color2:       T.text.body,
//     font:         `10.5px ${T.font.mono}`,
//     axisNameFont: `italic 13px Cambria, "Times New Roman", serif`,
//   },
//   crosshair: {
//     color:           'rgba(59, 130, 246, 0.45)',
//     stroke:          1,
//     pattern:         [4, 4],
//     labelBackground: 'rgba(255, 255, 255, 0.96)',
//     labelBorder:     T.c.blue,
//     labelColor:      T.text.strong,
//     labelFont:       `11.5px ${T.font.sans}`,
//   },
//   curve: { stroke: 1.75, pattern: [], hoverStroke: 2.75, hoverGlow: true },
//   tooltip: {
//     background: 'rgba(255, 255, 255, 0.97)',
//     border:     T.border.strong,
//     color:      T.text.strong,
//     font:       `11.5px ${T.font.sans}`,
//     padding:    8,
//     radius:     6,
//   },
//   point: { radius: 4, stroke: 2, strokeColor: '#fff' },
//   legend: {
//     background: 'rgba(255, 255, 255, 0.96)',
//     border:     T.border.mid,
//     color:      T.c.slateD,
//     font:       `11.5px ${T.font.sans}`,
//     padding:    10,
//     radius:     6,
//   },
//   specialPoint: {
//     root:       { radius: 5, fill: '#fff', stroke: T.c.blueD,  strokeWidth: 2.25 },
//     extremum:   { radius: 5, fill: '#fff', stroke: T.c.slateD, strokeWidth: 2.25 },
//     inflection: { radius: 5, fill: '#fff', stroke: T.c.slate,  strokeWidth: 2.25 },
//     custom:     { radius: 5, fill: '#fff', stroke: T.c.blue,   strokeWidth: 2.25 },
//     labelFont:  `10px ${T.font.mono}`,
//     labelBackground: 'rgba(255, 255, 255, 0.96)',
//     labelPadding: 4,
//   },
//   line: {
//     asymptote: { color: T.c.slateD, stroke: 1.25, pattern: [6, 4] },
//     tangent:   { color: T.c.slateD, stroke: 1.5,  pattern: [3, 3] },
//     secant:    { color: T.c.slate,  stroke: 1.5,  pattern: [4, 4] },
//   },
//   shadedRegion: {
//     defaultColor:       'rgba(59, 130, 246, 0.15)',
//     defaultStroke:      'rgba(59, 130, 246, 0.45)',
//     defaultStrokeWidth: 1,
//   },
// };

// // ============================================================
// // EXPLORER CONTEXT
// // ============================================================
// export const ExplorerContext = createContext({
//   pin: () => {},
//   unpin: () => {},
//   isPinned: () => false,
//   density: 'compact',
//   routes: {
//     theoryBase:     '/functions',
//     toolsBase:      '/visual-tools',
//     calculusBase:   '/calculus',
//     calculatorBase: 'https://calc.learnmathclass.com',
//   },
// });

// // ============================================================
// // MATH PIPELINE HELPERS
// // ============================================================
// function safe(f, x) {
//   try {
//     const y = f(x);
//     return (typeof y === 'number' && isFinite(y)) ? y : null;
//   } catch { return null; }
// }

// function findRoots(fn, xMin, xMax, samples = 600, tol = 1e-7) {
//   const roots = [];
//   const step = (xMax - xMin) / samples;
//   for (let i = 0; i < samples; i++) {
//     const x1 = xMin + i * step, x2 = x1 + step;
//     const y1 = safe(fn, x1), y2 = safe(fn, x2);
//     if (y1 === null || y2 === null) continue;
//     if (y1 * y2 < 0) {
//       let a = x1, b = x2;
//       for (let j = 0; j < 60; j++) {
//         const mid = (a + b) / 2;
//         const ym = safe(fn, mid);
//         if (ym === null) break;
//         if (Math.abs(ym) < tol) { a = b = mid; break; }
//         if (ym * safe(fn, a) < 0) b = mid; else a = mid;
//       }
//       roots.push((a + b) / 2);
//     } else if (Math.abs(y1) < tol && (roots.length === 0 || Math.abs(roots[roots.length - 1] - x1) > step)) {
//       roots.push(x1);
//     }
//   }
//   return roots;
// }

// function findExtrema(fn, xMin, xMax, samples = 400) {
//   const ext = [];
//   const step = (xMax - xMin) / samples;
//   const h = step / 20;
//   const fp = (x) => {
//     const a = safe(fn, x + h), b = safe(fn, x - h);
//     return (a !== null && b !== null) ? (a - b) / (2 * h) : null;
//   };
//   for (let i = 1; i < samples - 1; i++) {
//     const x = xMin + i * step;
//     const d1 = fp(x - step / 2);
//     const d2 = fp(x + step / 2);
//     if (d1 === null || d2 === null) continue;
//     if (d1 * d2 < 0) {
//       let a = x - step / 2, b = x + step / 2;
//       for (let j = 0; j < 40; j++) {
//         const mid = (a + b) / 2;
//         const dm = fp(mid);
//         if (dm === null) break;
//         if (Math.abs(dm) < 1e-7) { a = b = mid; break; }
//         if (dm * fp(a) < 0) b = mid; else a = mid;
//       }
//       const xe = (a + b) / 2;
//       const ye = safe(fn, xe);
//       if (ye !== null) {
//         ext.push({ x: xe, y: ye, kind: d1 > 0 ? 'max' : 'min' });
//       }
//     }
//   }
//   return ext;
// }

// function findInflections(fn, xMin, xMax, samples = 400) {
//   const out = [];
//   const step = (xMax - xMin) / samples;
//   const h = step / 20;
//   const f2 = (x) => {
//     const a = safe(fn, x + h), b = safe(fn, x), c = safe(fn, x - h);
//     return (a !== null && b !== null && c !== null) ? (a - 2 * b + c) / (h * h) : null;
//   };
//   for (let i = 2; i < samples - 1; i++) {
//     const x = xMin + i * step;
//     const d1 = f2(x - step / 2);
//     const d2 = f2(x + step / 2);
//     if (d1 === null || d2 === null) continue;
//     if (d1 * d2 < 0) {
//       const xe = x;
//       const ye = safe(fn, xe);
//       if (ye !== null) out.push({ x: xe, y: ye });
//     }
//   }
//   return out;
// }

// function findVerticalAsymptotes(fn, xMin, xMax, samples = 800) {
//   const out = [];
//   const step = (xMax - xMin) / samples;
//   const threshold = 1e4;
//   for (let i = 1; i < samples; i++) {
//     const x1 = xMin + (i - 1) * step;
//     const x2 = xMin + i * step;
//     const y1 = safe(fn, x1), y2 = safe(fn, x2);
//     const oneFinite = (y1 === null) !== (y2 === null);
//     const bigJump = (y1 !== null && y2 !== null && Math.abs(y2 - y1) > threshold);
//     if (oneFinite || bigJump) {
//       const x = (x1 + x2) / 2;
//       if (!out.some(a => Math.abs(a - x) < step * 2)) out.push(x);
//     }
//   }
//   return out;
// }

// // ============================================================
// // FAMILY DETECTION
// // ============================================================
// function detectFamily(node) {
//   const s = node.toString();
//   const has = (re) => re.test(s);
//   if (has(/\bsin\b|\bcos\b|\btan\b|\bcot\b|\bsec\b|\bcsc\b/)) return 'Trigonometric';
//   if (has(/\b(exp|e\s*\^)/)) return 'Exponential';
//   if (has(/\b(log|ln)\b/)) return 'Logarithmic';
//   if (has(/sqrt|\^\s*0?\.5|\^\s*\(\s*1\s*\/\s*2\s*\)/)) return 'Radical';
//   const hasNegativeExp = detectNegativeExponent(node);
//   if (hasNegativeExp) return 'Rational';
//   if (has(/\//) && /x/.test(s)) {
//     if (denominatorContainsX(node)) return 'Rational';
//   }
//   if (has(/\babs\b|\|/)) return 'Absolute value';
//   const deg = polynomialDegree(node);
//   if (deg === 1) return 'Linear';
//   if (deg === 2) return 'Quadratic';
//   if (deg === 3) return 'Cubic';
//   if (deg >= 4) return `Polynomial (deg ${deg})`;
//   return 'General';
// }

// function detectNegativeExponent(node) {
//   let found = false;
//   const walk = (n) => {
//     if (!n || found) return;
//     if (n.type === 'OperatorNode' && n.op === '^') {
//       const [base, exp] = n.args;
//       if (base.type === 'SymbolNode' && base.name === 'x') {
//         if (exp.type === 'ConstantNode' && exp.value < 0) found = true;
//         if (exp.type === 'OperatorNode' && exp.op === '-' && exp.args.length === 1) found = true;
//       }
//     }
//     if (n.args) n.args.forEach(walk);
//   };
//   walk(node);
//   return found;
// }

// function denominatorContainsX(node) {
//   let found = false;
//   const walk = (n) => {
//     if (!n || found) return;
//     if (n.type === 'OperatorNode' && n.op === '/') {
//       const denom = n.args[1];
//       const str = denom.toString();
//       if (/\bx\b/.test(str)) found = true;
//     }
//     if (n.args) n.args.forEach(walk);
//   };
//   walk(node);
//   return found;
// }

// function polynomialDegree(node) {
//   let max = 0;
//   const walk = (n) => {
//     if (!n) return;
//     if (n.type === 'OperatorNode' && n.op === '^') {
//       const [base, exp] = n.args;
//       if (base.type === 'SymbolNode' && base.name === 'x' &&
//           exp.type === 'ConstantNode' && Number.isInteger(exp.value) && exp.value > 0) {
//         if (exp.value > max) max = exp.value;
//       }
//     }
//     if (n.type === 'SymbolNode' && n.name === 'x' && max < 1) max = 1;
//     if (n.args) n.args.forEach(walk);
//   };
//   walk(node);
//   return max;
// }

// // ============================================================
// // PARITY / PERIODICITY
// // ============================================================
// function detectParity(fn) {
//   const xs = [0.3, 0.7, 1.4, 2.1, 3.5, 5.2];
//   let even = true, odd = true;
//   for (const x of xs) {
//     const yp = safe(fn, x), yn = safe(fn, -x);
//     if (yp === null || yn === null) { even = odd = false; break; }
//     if (Math.abs(yp - yn) > 1e-6) even = false;
//     if (Math.abs(yp + yn) > 1e-6) odd = false;
//   }
//   return even ? 'even' : (odd ? 'odd' : 'neither');
// }

// function detectPeriod(fn) {
//   const candidates = [
//     { T: Math.PI,       label: '\u03C0' },
//     { T: 2 * Math.PI,   label: '2\u03C0' },
//     { T: Math.PI / 2,   label: '\u03C0/2' },
//     { T: 1,             label: '1' },
//     { T: 2,             label: '2' },
//   ];
//   const probes = [-3.7, -1.4, 0.6, 2.3, 4.1];
//   for (const cand of candidates) {
//     let ok = true;
//     for (const x of probes) {
//       const y1 = safe(fn, x);
//       const y2 = safe(fn, x + cand.T);
//       if (y1 === null || y2 === null) { ok = false; break; }
//       if (Math.abs(y1 - y2) > 1e-4) { ok = false; break; }
//     }
//     if (ok) return { periodic: true, T: cand.T, label: cand.label };
//   }
//   return { periodic: false, T: null, label: null };
// }

// // ============================================================
// // SAMPLING PASSES
// // ============================================================
// function sampleRange(fn, xMin, xMax, samples = 400) {
//   let lo = Infinity, hi = -Infinity, missingAt = [];
//   const step = (xMax - xMin) / samples;
//   for (let i = 0; i <= samples; i++) {
//     const x = xMin + i * step;
//     const y = safe(fn, x);
//     if (y === null) { missingAt.push(x); continue; }
//     if (y < lo) lo = y;
//     if (y > hi) hi = y;
//   }
//   return { lo, hi, missingAt };
// }

// function signIntervals(fn, roots, xMin, xMax) {
//   const breaks = [xMin, ...roots, xMax];
//   const out = [];
//   for (let i = 0; i < breaks.length - 1; i++) {
//     const a = breaks[i], b = breaks[i + 1];
//     const mid = (a + b) / 2;
//     const y = safe(fn, mid);
//     const sign = y === null ? 'undef' : (y > 0 ? '+' : (y < 0 ? '-' : '0'));
//     out.push({ from: a, to: b, sign });
//   }
//   return out;
// }

// function monotonicityIntervals(fn, extrema, xMin, xMax) {
//   const breaks = [xMin, ...extrema.map(e => e.x), xMax];
//   const out = [];
//   const step = 1e-3;
//   for (let i = 0; i < breaks.length - 1; i++) {
//     const a = breaks[i], b = breaks[i + 1];
//     const mid = (a + b) / 2;
//     const yl = safe(fn, mid - step), yr = safe(fn, mid + step);
//     if (yl === null || yr === null) { out.push({ from: a, to: b, dir: 'undef' }); continue; }
//     out.push({ from: a, to: b, dir: yr > yl ? 'inc' : (yr < yl ? 'dec' : 'const') });
//   }
//   return out;
// }

// // ============================================================
// // END BEHAVIOR
// // ============================================================
// function analyzeEnd(fn, sign) {
//   const probes = [10, 100, 1000, 10000];
//   const ys = [];
//   for (const p of probes) {
//     const y = safe(fn, sign * p);
//     if (y === null) return { direction: 'oscillate', value: null };
//     ys.push(y);
//   }
//   const diffs = [];
//   for (let i = 1; i < ys.length; i++) diffs.push(Math.abs(ys[i] - ys[i - 1]));
//   const shrinking = diffs[diffs.length - 1] < diffs[0] * 0.5;
//   const lastDiffSmall = diffs[diffs.length - 1] < 1e-3;
//   if (shrinking && lastDiffSmall) {
//     return { direction: 'converge', value: ys[ys.length - 1] };
//   }
//   const growing = Math.abs(ys[ys.length - 1]) > Math.abs(ys[0]) * 5;
//   if (growing) {
//     return {
//       direction: ys[ys.length - 1] > 0 ? 'diverge+' : 'diverge-',
//       value: null,
//     };
//   }
//   return { direction: 'oscillate', value: null };
// }

// // ============================================================
// // MAIN PIPELINE BUILD
// // ============================================================
// export function buildPipeline(expression, opts = {}) {
//   const xMin = opts.xMin ?? -10;
//   const xMax = opts.xMax ?? 10;

//   let node, fn, fnPrime, fnDoublePrime, derivStr, deriv2Str;
//   try {
//     node = parse(expression);
//     fn = (x) => { try { return node.evaluate({ x }); } catch { return NaN; } };
//     const d1 = derivative(node, 'x');
//     derivStr = d1.toString();
//     fnPrime = (x) => { try { return d1.evaluate({ x }); } catch { return NaN; } };
//     const d2 = derivative(d1, 'x');
//     deriv2Str = d2.toString();
//     fnDoublePrime = (x) => { try { return d2.evaluate({ x }); } catch { return NaN; } };
//   } catch (err) {
//     return { error: err.message || String(err), expression };
//   }

//   const family = detectFamily(node);
//   const roots = findRoots(fn, xMin, xMax);
//   const extrema = findExtrema(fn, xMin, xMax);
//   const inflections = findInflections(fn, xMin, xMax);
//   const vertAsymptotes = findVerticalAsymptotes(fn, xMin, xMax);
//   const parity = detectParity(fn);
//   const period = detectPeriod(fn);
//   const { lo, hi, missingAt } = sampleRange(fn, xMin, xMax);
//   const sign = signIntervals(fn, roots, xMin, xMax);
//   const mono = monotonicityIntervals(fn, extrema, xMin, xMax);
//   const yInt = safe(fn, 0);

//   const endRight = analyzeEnd(fn, +1);
//   const endLeft  = analyzeEnd(fn, -1);
//   const horizAsymptotes = [];
//   if (endRight.direction === 'converge') horizAsymptotes.push({ y: endRight.value, side: 'right' });
//   if (endLeft.direction === 'converge')  horizAsymptotes.push({ y: endLeft.value,  side: 'left'  });

//   const continuous = (vertAsymptotes.length === 0) && (missingAt.length === 0);

//   const concavityBreaks = [xMin, ...inflections.map(p => p.x), xMax];
//   const concavity = [];
//   for (let i = 0; i < concavityBreaks.length - 1; i++) {
//     const a = concavityBreaks[i], b = concavityBreaks[i + 1];
//     const mid = (a + b) / 2;
//     const c = safe(fnDoublePrime, mid);
//     concavity.push({ from: a, to: b, kind: c === null ? 'undef' : (c > 0 ? 'up' : (c < 0 ? 'down' : 'flat')) });
//   }

//   const unboundedAbove =
//     endLeft.direction === 'diverge+' || endRight.direction === 'diverge+';
//   const unboundedBelow =
//     endLeft.direction === 'diverge-' || endRight.direction === 'diverge-';

//   const extremaMinY = extrema.filter(e => e.kind === 'min').reduce(
//     (acc, e) => e.y < acc ? e.y : acc, Infinity
//   );
//   const extremaMaxY = extrema.filter(e => e.kind === 'max').reduce(
//     (acc, e) => e.y > acc ? e.y : acc, -Infinity
//   );

//   const analyticLo = unboundedBelow ? -Infinity :
//     (isFinite(extremaMinY) ? extremaMinY : lo);
//   const analyticHi = unboundedAbove ? +Infinity :
//     (isFinite(extremaMaxY) ? extremaMaxY : hi);

//   const bounded = isFinite(analyticLo) && isFinite(analyticHi);

//   let symmetryAxis = null;
//   if (parity === 'even') symmetryAxis = 0;
//   else if (extrema.length === 1) symmetryAxis = extrema[0].x;

//   const bounds = {
//     lo: analyticLo,
//     hi: analyticHi,
//     bounded,
//     sampledLo: lo,
//     sampledHi: hi,
//     loSource: unboundedBelow ? 'analytic' : (isFinite(extremaMinY) ? 'analytic' : 'sampled'),
//     hiSource: unboundedAbove ? 'analytic' : (isFinite(extremaMaxY) ? 'analytic' : 'sampled'),
//   };

//   const monoDirs = new Set(mono.map(m => m.dir));
//   monoDirs.delete('undef');
//   const injective = monoDirs.size === 1;

//   const allAsymptotes = [...vertAsymptotes];
//   const missingSet = missingAt.slice(0, 3).map(x => x.toFixed(2));
//   let domainStr;
//   if (allAsymptotes.length > 0) {
//     domainStr = `\u211D \\ {${allAsymptotes.map(x => x.toFixed(3)).join(', ')}}`;
//   } else if (missingAt.length > 0) {
//     domainStr = `\u211D \\ {${missingSet.join(', ')}${missingAt.length > 3 ? ', \u2026' : ''}}`;
//   } else {
//     domainStr = '\u211D';
//   }

//   let rangeStr;
//   if (period.periodic && isFinite(analyticLo) && isFinite(analyticHi)) {
//     rangeStr = `[${analyticLo.toFixed(3)}, ${analyticHi.toFixed(3)}]`;
//   } else if (bounded) {
//     rangeStr = `[${analyticLo.toFixed(3)}, ${analyticHi.toFixed(3)}]`;
//   } else if (isFinite(analyticLo)) {
//     rangeStr = `[${analyticLo.toFixed(3)}, +\u221E)`;
//   } else if (isFinite(analyticHi)) {
//     rangeStr = `(\u2212\u221E, ${analyticHi.toFixed(3)}]`;
//   } else {
//     rangeStr = '\u211D';
//   }

//   return {
//     expression,
//     formula: node.toString(),
//     family,
//     fn,
//     fnPrime,    derivStr,
//     fnDoublePrime, deriv2Str,
//     domain: domainStr,
//     range: rangeStr,
//     codomain: '\u211D',
//     parity,
//     period,
//     symmetryAxis,
//     roots, extrema, inflections,
//     asymptotes: vertAsymptotes,
//     horizAsymptotes,
//     yIntercept: yInt,
//     sign, mono, concavity,
//     bounded, bounds,
//     continuous,
//     endLeft, endRight,
//     injective,
//     xMin, xMax,
//   };
// }

// // ============================================================
// // STATE HOOK
// // ============================================================
// function useExplorerState(initial = {}) {
//   const [expression, setExpression] = useState(initial.expression || '0.1x^2 - 2');
//   const [activeTab, setActiveTab]   = useState('properties');
//   const [density,   setDensity]     = useState('compact');
//   const [view,      setView]        = useState('graph');

//   const [overlays, setOverlays] = useState({
//     fp: false, fpp: false, anti: false, inv: false,
//   });
//   const [annotations, setAnnotations] = useState({
//     roots: true, extrema: true, inflect: false, asymp: false, tangent: true, area: false,
//   });

//   const [cursor, setCursor] = useState({ x: 0, y: 0 });
//   const [viewport, setViewport] = useState({ xMin: -10, xMax: 10, yMin: -10, yMax: 10 });

//   const [pinned, setPinned] = useState([]);

//   const toggleOverlay = useCallback((k) => setOverlays(p => ({ ...p, [k]: !p[k] })), []);
//   const toggleAnnot   = useCallback((k) => setAnnotations(p => ({ ...p, [k]: !p[k] })), []);
//   const resetRail = useCallback(() => {
//     setOverlays({ fp: false, fpp: false, anti: false, inv: false });
//     setAnnotations({ roots: false, extrema: false, inflect: false, asymp: false, tangent: false, area: false });
//   }, []);

//   const pin = useCallback((card) => {
//     setPinned(prev => {
//       if (prev.some(p => p.id === card.id)) return prev;
//       return [...prev, card];
//     });
//   }, []);
//   const unpin = useCallback((id) => setPinned(p => p.filter(x => x.id !== id)), []);
//   const isPinned = useCallback((id) => pinned.some(p => p.id === id), [pinned]);

//   return {
//     expression, setExpression,
//     activeTab, setActiveTab,
//     density, setDensity,
//     view, setView,
//     overlays, toggleOverlay,
//     annotations, toggleAnnot,
//     resetRail,
//     cursor, setCursor,
//     viewport, setViewport,
//     pinned, setPinned, pin, unpin, isPinned,
//   };
// }

// // ============================================================
// // MAIN COMPONENT
// // ============================================================
// export function FunctionExplorer(props) {
//   const {
//     initialExpression = '0.1x^2 - 2',
//     width  = '100%',
//     height = 820,
//     theoryBase     = '/functions',
//     toolsBase      = '/visual-tools',
//     calculusBase   = '/calculus',
//     calculatorBase = 'https://calc.learnmathclass.com',
//     onSearch,
//     onSettings,
//     onExport,
//     onMaximize,
//     onCompare,
//     onAnimate,
//   } = props;

//   useEffect(() => { injectStyles(); }, []);

//   const state = useExplorerState({ expression: initialExpression });

//   const data = useMemo(
//     () => buildPipeline(state.expression, { xMin: state.viewport.xMin, xMax: state.viewport.xMax }),
//     [state.expression, state.viewport.xMin, state.viewport.xMax]
//   );

//   useEffect(() => {
//     if (data.error || !data.fn) return;
//     if (state.cursor.x === 0 && state.cursor.y === 0) {
//       const x0 = 0;
//       const y0 = safe(data.fn, x0);
//       state.setCursor({ x: x0, y: y0 === null ? 0 : y0 });
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [data.fn, data.error]);

//   useEffect(() => {
//     if (data.error || !data.fn) return;
//     const y = safe(data.fn, state.cursor.x);
//     if (y !== null && Math.abs(y - state.cursor.y) > 1e-9) {
//       state.setCursor({ x: state.cursor.x, y });
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [data.fn, state.cursor.x]);

//   // Container ref for default Export / Maximize handlers.
//   const containerRef = useRef(null);

//   const defaultOnMaximize = useCallback(() => {
//     const el = containerRef.current;
//     if (!el || typeof document === 'undefined') return;
//     if (document.fullscreenElement) {
//       document.exitFullscreen && document.exitFullscreen();
//     } else {
//       el.requestFullscreen && el.requestFullscreen();
//     }
//   }, []);

//   const defaultOnExport = useCallback(() => {
//     const el = containerRef.current;
//     if (!el || typeof document === 'undefined') return;
//     const canvas = el.querySelector('canvas');
//     if (!canvas) {
//       // eslint-disable-next-line no-console
//       console.warn('FunctionExplorer: no canvas found to export.');
//       return;
//     }
//     try {
//       const url = canvas.toDataURL('image/png');
//       const link = document.createElement('a');
//       link.download = `function-explorer-${Date.now()}.png`;
//       link.href = url;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } catch (err) {
//       // eslint-disable-next-line no-console
//       console.warn('FunctionExplorer: canvas export failed.', err);
//     }
//   }, []);

//   const engineFunctions = useMemo(() => {
//     if (data.error) return [];
//     const list = [
//       { fn: data.fn, color: T.c.blue, label: 'f', formula: `f(x) = ${data.formula}`, visible: true, stroke: 1.75 },
//     ];
//     if (state.overlays.fp && data.fnPrime) {
//       list.push({ fn: data.fnPrime, color: T.c.slate, label: "f'", formula: `f'(x) = ${data.derivStr}`, visible: true, stroke: 1.5 });
//     }
//     if (state.overlays.fpp && data.fnDoublePrime) {
//       list.push({ fn: data.fnDoublePrime, color: T.c.slateD, label: 'f\u2033', formula: `f''(x) = ${data.deriv2Str}`, visible: true, stroke: 1.4 });
//     }
//     if (state.overlays.anti && data.fn) {
//       const F = makeAntiderivative(data.fn, state.viewport.xMin, state.viewport.xMax);
//       list.push({ fn: F, color: T.c.blueL, label: 'F', formula: 'F(x) = \u222Bf(x)dx', visible: true, stroke: 1.4 });
//     }
//     if (state.overlays.inv && data.fn && data.injective) {
//       const invFn = makeInverse(data.fn, state.viewport.xMin, state.viewport.xMax);
//       if (invFn) {
//         list.push({
//           fn: invFn, color: T.c.blueD, label: 'f\u207B\u00B9',
//           formula: 'f\u207B\u00B9(x)  (numeric, reflection across y = x)',
//           visible: true, stroke: 1.4,
//         });
//       }
//     }
//     return list;
//   }, [data, state.overlays, state.viewport.xMin, state.viewport.xMax]);

//   const shadedRegion = useMemo(() => {
//     if (!state.annotations.area || data.error) return [];
//     let xStart, xEnd;
//     if (data.roots && data.roots.length >= 2) {
//       xStart = data.roots[0];
//       xEnd   = data.roots[1];
//     } else {
//       const span = state.viewport.xMax - state.viewport.xMin;
//       xStart = state.viewport.xMin + span * 0.3;
//       xEnd   = state.viewport.xMin + span * 0.7;
//     }
//     return [{ type: 'underCurve', functionIndex: 0, xStart, xEnd }];
//   }, [state.annotations.area, data, state.viewport]);

//   const engineAnnotations = useMemo(() => ({
//     showRoots:       state.annotations.roots,
//     showExtrema:     state.annotations.extrema,
//     showInflections: state.annotations.inflect,
//     showAsymptotes:  state.annotations.asymp,
//     tangentAt:       state.annotations.tangent ? { functionIndex: 0, x: state.cursor.x } : null,
//     shadedRegions:   shadedRegion,
//   }), [state.annotations, state.cursor.x, shadedRegion]);

//   const handleEngineHover = useCallback((info) => {
//     if (typeof info?.x === 'number' && typeof info?.y === 'number') {
//       state.setCursor({ x: info.x, y: info.y });
//     }
//   }, [state]);

//   const handleEngineViewport = useCallback((vp) => {
//     state.setViewport(vp);
//   }, [state]);

//   const ctxValue = useMemo(() => ({
//     pin: state.pin,
//     unpin: state.unpin,
//     isPinned: state.isPinned,
//     density: state.density,
//     routes: { theoryBase, toolsBase, calculusBase, calculatorBase },
//   }), [state.pin, state.unpin, state.isPinned, state.density, theoryBase, toolsBase, calculusBase, calculatorBase]);

//   const modeLabel = state.view === 'graph' ? 'graph \u00B7 pan/zoom'
//                   : state.view === 'table' ? 'numeric table'
//                   : 'mapping diagram';

//   return (
//     <ExplorerContext.Provider value={ctxValue}>
//       <div
//         ref={containerRef}
//         style={{
//           background: T.bg.panel,
//           border: `1px solid ${T.border.soft}`,
//           borderRadius: T.radius.lg,
//           boxShadow: T.shadow.s2,
//           overflow: 'hidden',
//           display: 'grid',
//           gridTemplateRows: `${T.height.header}px ${T.height.funcbar}px 1fr ${T.height.insights}px ${T.height.status}px`,
//           width,
//           height,
//           maxHeight: 'calc(100vh - 40px)',
//           fontFamily: T.font.sans,
//           fontSize: 13,
//           color: T.text.body,
//         }}
//       >
//         <Header
//           brandName="Function Explorer"
//           formula={data.error ? '(invalid)' : data.formula}
//           formulaLabel={data.error ? 'error' : 'f(x) ='}
//           onSearch={onSearch}
//           onSettings={onSettings}
//           onExport={onExport || defaultOnExport}
//           onMaximize={onMaximize || defaultOnMaximize}
//         />

//         <Funcbar
//           expression={state.expression}
//           onExpressionChange={state.setExpression}
//           family={data.error ? null : data.family}
//           onCompare={onCompare}
//           onAnimate={onAnimate}
//         />

//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: `${T.width.rail}px 1fr ${T.width.rtabs}px ${T.width.rpanel}px`,
//             minHeight: 0,
//             borderBottom: `1px solid ${T.border.soft}`,
//           }}
//         >
//           <LeftRail
//             overlays={state.overlays}
//             annotations={state.annotations}
//             onToggleOverlay={state.toggleOverlay}
//             onToggleAnnot={state.toggleAnnot}
//             onReset={state.resetRail}
//             invDisabled={!data.injective}
//           />

//           <div style={{ position: 'relative', background: T.bg.graph, overflow: 'hidden' }}>
//             <GraphViewSwitch value={state.view} onChange={state.setView} />

//             {state.view === 'graph' && !data.error && VisualizerCore && (
//               <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                 <VisualizerCore
//                   functions={engineFunctions}
//                   xMin={state.viewport.xMin}
//                   xMax={state.viewport.xMax}
//                   yMin={state.viewport.yMin}
//                   yMax={state.viewport.yMax}
//                   width={700}
//                   height={520}
//                   showGrid
//                   showMinorGrid
//                   showAxes
//                   showAxisLabels
//                   showCrosshair
//                   showCurveTooltip
//                   labelMode="legend"
//                   legendPosition="top-left"
//                   {...engineAnnotations}
//                   onHover={handleEngineHover}
//                   onViewportChange={handleEngineViewport}
//                   styles={EXPLORER_STYLES}
//                 />
//               </div>
//             )}

//             {state.view === 'graph' && !data.error && !VisualizerCore && (
//               <div style={{ padding: 24, color: T.text.muted, fontFamily: T.font.mono, fontSize: 12, lineHeight: 1.6 }}>
//                 VisualizerCore is undefined. Check the import in
//                 {' '}<code style={{ color: T.text.strong }}>FunctionExplorer.jsx</code>:
//                 the path may be wrong, or the component may be a default export
//                 (use <code style={{ color: T.text.strong }}>{'import VisualizerCore from ...'}</code>{' '}
//                 instead of <code style={{ color: T.text.strong }}>{'import { VisualizerCore } from ...'}</code>).
//               </div>
//             )}

//             {state.view === 'table' && !data.error && (
//               <NumericTable
//                 fn={data.fn}
//                 xMin={state.viewport.xMin}
//                 xMax={state.viewport.xMax}
//               />
//             )}

//             {state.view === 'map' && !data.error && (
//               <MappingDiagram
//                 fn={data.fn}
//                 xMin={state.viewport.xMin}
//                 xMax={state.viewport.xMax}
//               />
//             )}

//             {data.error && (
//               <div style={{ padding: 24, color: T.text.muted, fontFamily: T.font.mono, fontSize: 12 }}>
//                 parse error: {data.error}
//               </div>
//             )}
//           </div>

//           <RightTabs active={state.activeTab} onChange={state.setActiveTab} />

//           <RightPanel
//             title={titleFor(state.activeTab)}
//             subtitle={subtitleFor(state.activeTab)}
//             density={state.density}
//             onDensityChange={state.setDensity}
//           >
//             {state.activeTab === 'properties' && (
//               <>
//                 <AboutPanel data={data} />
//                 <DomainRangePanel data={data} />
//                 <ZerosPanel data={data} />
//                 <SymmetryPanel data={data} />
//                 <ContinuityPanel data={data} />
//                 <AsymptotesPanel data={data} />
//                 <MonotonicityPanel data={data} />
//                 <ConcavityPanel data={data} />
//                 <BoundednessPanel data={data} />
//                 <InvertibilityPanel data={data} />
//               </>
//             )}
//             {state.activeTab === 'transforms' && (
//               <>
//                 <ParentTransformsPanel data={data} />
//                 <OperationsPanel data={data} />
//               </>
//             )}
//             {state.activeTab === 'calculus' && (
//               <>
//                 <DerivativePanel    data={data} cursor={state.cursor} />
//                 <SecondDerivativePanel data={data} />
//                 <AntiderivativePanel data={data} viewport={state.viewport} />
//                 <TangentApproxPanel data={data} cursor={state.cursor} />
//               </>
//             )}
//             {state.activeTab === 'theory' && (
//               <TheoryReadingList data={data} />
//             )}
//           </RightPanel>
//         </div>

//         <InsightsStrip
//           defaults={defaultInsightsFor(data)}
//           pinned={state.pinned}
//           onUnpin={state.unpin}
//         />

//         <StatusBar
//           cursor={state.cursor}
//           viewport={state.viewport}
//           mode={modeLabel}
//         />
//       </div>
//     </ExplorerContext.Provider>
//   );
// }

// // ============================================================
// // HELPERS
// // ============================================================
// function titleFor(tab) {
//   switch (tab) {
//     case 'properties': return 'Properties';
//     case 'transforms': return 'Transformations & ops';
//     case 'calculus':   return 'Calculus bridge';
//     case 'theory':     return 'Theory & reading';
//     default: return tab;
//   }
// }
// function subtitleFor(tab) {
//   switch (tab) {
//     case 'properties': return '10 aspects \u00B7 excerpts \u00B7 links out';
//     case 'transforms': return 'parent / shifts / scales / compose';
//     case 'calculus':   return 'mention only \u00B7 links to /calculus';
//     case 'theory':     return 'curated for this function';
//     default: return '';
//   }
// }

// function defaultInsightsFor(data) {
//   if (!data || data.error) return [];
//   const cards = [];
//   cards.push({ id: 'domain', label: 'Domain', value: data.domain, sub: '' });
//   if (data.roots.length === 1) {
//     cards.push({ id: 'roots', label: 'Root', value: data.roots[0].toFixed(3), sub: '' });
//   } else if (data.roots.length > 1) {
//     const sample = data.roots.slice(0, 2).map(r => r.toFixed(2)).join(', ');
//     cards.push({ id: 'roots', label: 'Roots', value: `${data.roots.length} roots`, sub: sample });
//   }
//   if (data.extrema.length > 0) {
//     const e = data.extrema[0];
//     cards.push({ id: 'ext0', label: e.kind === 'min' ? 'Min' : 'Max', value: `(${e.x.toFixed(2)}, ${e.y.toFixed(2)})`, sub: '' });
//   }
//   cards.push({ id: 'parity', label: 'Symmetry', value: data.parity, sub: data.period.periodic ? `period ${data.period.label}` : '' });
//   cards.push({ id: 'continuity', label: 'Continuity', value: data.continuous ? 'continuous' : 'has gaps', sub: '' });
//   return cards;
// }

// function makeAntiderivative(f, xMin, xMax) {
//   const samples = 400;
//   const step = (xMax - xMin) / samples;
//   const xs = [];
//   const ys = [];
//   let acc = 0;
//   let prevY = safe(f, xMin);
//   xs.push(xMin); ys.push(0);
//   for (let i = 1; i <= samples; i++) {
//     const x = xMin + i * step;
//     const y = safe(f, x);
//     if (y !== null && prevY !== null) acc += (y + prevY) / 2 * step;
//     xs.push(x); ys.push(acc);
//     prevY = y;
//   }
//   return (x) => {
//     if (x <= xMin) return 0;
//     if (x >= xMax) return ys[ys.length - 1];
//     const t = (x - xMin) / step;
//     const i = Math.floor(t);
//     const frac = t - i;
//     return ys[i] + (ys[i + 1] - ys[i]) * frac;
//   };
// }

// function makeInverse(f, xMin, xMax) {
//   const samples = 400;
//   const step = (xMax - xMin) / samples;
//   const pts = [];
//   for (let i = 0; i <= samples; i++) {
//     const u = xMin + i * step;
//     const v = safe(f, u);
//     if (v !== null) pts.push([v, u]);
//   }
//   if (pts.length < 2) return null;
//   pts.sort((a, b) => a[0] - b[0]);
//   return (x) => {
//     if (x < pts[0][0] || x > pts[pts.length - 1][0]) return NaN;
//     let lo = 0, hi = pts.length - 1;
//     while (hi - lo > 1) {
//       const mid = (lo + hi) >> 1;
//       if (pts[mid][0] <= x) lo = mid; else hi = mid;
//     }
//     const [x0, u0] = pts[lo], [x1, u1] = pts[hi];
//     if (x1 === x0) return u0;
//     return u0 + (u1 - u0) * (x - x0) / (x1 - x0);
//   };
// }

// export default FunctionExplorer;


// ============================================================
// FunctionExplorer.jsx  (v4)
// Changes from v3:
//   - New `links` prop: fully granular per-link override tree.
//     Shape: { theory?, tools?, calculus?, calculator? } — each a flat
//     map of aspect-key -> absolute URL. Any missing key falls back to
//     `${<base>}/<default-slug>` built from theoryBase/toolsBase/
//     calculusBase/calculatorBase.
//   - buildDefaultLinks() enumerates every link the Explorer exposes,
//     grouped by destination. mergeLinks() shallow-merges each group so
//     partial overrides are safe (e.g. links={{ tools:{ domain:'/x' } }}
//     leaves every other link at its default).
//   - Context now provides `links` (resolved tree) in addition to
//     `routes` (base paths). Panels should read ctx.links.<group>.<key>
//     directly; ctx.routes stays for anything still building URLs by
//     concatenation.
// ============================================================

import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
  createContext,
} from 'react';
import { parse, derivative } from 'mathjs';
import { VisualizerCore } from '../FunctionVisualizerCoreImproved';

import {
  Header,
  Funcbar,
  LeftRail,
  GraphViewSwitch,
  RightTabs,
  RightPanel,
  InsightsStrip,
  StatusBar,
  NumericTable,
  MappingDiagram,
  injectStyles,
} from './ExplorerAtoms';

import {
  AboutPanel,
  DomainRangePanel,
  ZerosPanel,
  SymmetryPanel,
  ContinuityPanel,
  AsymptotesPanel,
  MonotonicityPanel,
  ConcavityPanel,
  BoundednessPanel,
  InvertibilityPanel,
  ParentTransformsPanel,
  OperationsPanel,
  DerivativePanel,
  SecondDerivativePanel,
  AntiderivativePanel,
  TangentApproxPanel,
  TheoryReadingList,
} from './ExplorerPanels';

// ============================================================
// DESIGN TOKENS
// ============================================================
export const T = {
  bg: {
    app:       '#f4f5f7',
    panel:     '#ffffff',
    graph:     '#fcfcfd',
    subtle:    '#f8fafc',
    hover:     '#eef2f6',
    pressed:   '#e2e8f0',
    tintBlue:  '#eff6ff',
    tintBlue2: '#dbeafe',
  },
  border: {
    soft:    '#f1f5f9',
    mid:     '#e2e8f0',
    strong:  '#cbd5e1',
    blue:    '#bfdbfe',
  },
  text: {
    strong: '#0f172a',
    body:   '#334155',
    muted:  '#64748b',
    faint:  '#94a3b8',
  },
  c: {
    blue:    '#3b82f6',
    blueD:   '#1d4ed8',
    blueL:   '#60a5fa',
    slate:   '#475569',
    slateD:  '#1e293b',
  },
  font: {
    sans: '"Geist", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    mono: '"Geist Mono", ui-monospace, "SF Mono", Menlo, monospace',
  },
  radius: { sm: 5, md: 7, lg: 10 },
  shadow: {
    s1: '0 1px 2px rgba(15, 23, 42, 0.04)',
    s2: '0 1px 3px rgba(15,23,42,0.06), 0 4px 12px rgba(15,23,42,0.04)',
  },
  width: { rail: 46, rtabs: 44, rpanel: 410 },
  height: { header: 48, funcbar: 44, insights: 78, status: 28 },
};

// ============================================================
// ENGINE STYLE OVERRIDE
// ============================================================
export const EXPLORER_STYLES = {
  canvas:    { background: T.bg.app },
  graphArea: { background: T.bg.graph },
  grid: {
    color:       T.border.mid,
    minorColor:  T.border.soft,
    stroke:      1,
    minorStroke: 1,
    pattern:     [],
  },
  axes:   { color: T.c.slate, stroke: 1.5, pattern: [] },
  labels: {
    color:        T.text.muted,
    color2:       T.text.body,
    font:         `10.5px ${T.font.mono}`,
    axisNameFont: `italic 13px Cambria, "Times New Roman", serif`,
  },
  crosshair: {
    color:           'rgba(59, 130, 246, 0.45)',
    stroke:          1,
    pattern:         [4, 4],
    labelBackground: 'rgba(255, 255, 255, 0.96)',
    labelBorder:     T.c.blue,
    labelColor:      T.text.strong,
    labelFont:       `11.5px ${T.font.sans}`,
  },
  curve: { stroke: 1.75, pattern: [], hoverStroke: 2.75, hoverGlow: true },
  tooltip: {
    background: 'rgba(255, 255, 255, 0.97)',
    border:     T.border.strong,
    color:      T.text.strong,
    font:       `11.5px ${T.font.sans}`,
    padding:    8,
    radius:     6,
  },
  point: { radius: 4, stroke: 2, strokeColor: '#fff' },
  legend: {
    background: 'rgba(255, 255, 255, 0.96)',
    border:     T.border.mid,
    color:      T.c.slateD,
    font:       `11.5px ${T.font.sans}`,
    padding:    10,
    radius:     6,
  },
  specialPoint: {
    root:       { radius: 5, fill: '#fff', stroke: T.c.blueD,  strokeWidth: 2.25 },
    extremum:   { radius: 5, fill: '#fff', stroke: T.c.slateD, strokeWidth: 2.25 },
    inflection: { radius: 5, fill: '#fff', stroke: T.c.slate,  strokeWidth: 2.25 },
    custom:     { radius: 5, fill: '#fff', stroke: T.c.blue,   strokeWidth: 2.25 },
    labelFont:  `10px ${T.font.mono}`,
    labelBackground: 'rgba(255, 255, 255, 0.96)',
    labelPadding: 4,
  },
  line: {
    asymptote: { color: T.c.slateD, stroke: 1.25, pattern: [6, 4] },
    tangent:   { color: T.c.slateD, stroke: 1.5,  pattern: [3, 3] },
    secant:    { color: T.c.slate,  stroke: 1.5,  pattern: [4, 4] },
  },
  shadedRegion: {
    defaultColor:       'rgba(59, 130, 246, 0.15)',
    defaultStroke:      'rgba(59, 130, 246, 0.45)',
    defaultStrokeWidth: 1,
  },
};

// ============================================================
// LINK SYSTEM
// ============================================================
// Every URL the Explorer emits, grouped by destination site.
// Each key is the aspect slug; overrides are shallow-merged per group.
export function buildDefaultLinks(bases) {
  const { theoryBase, toolsBase, calculusBase, calculatorBase } = bases;
  return {
    // Theory pages on the portal (learnmathclass.com/functions/*)
    theory: {
      about:           `${theoryBase}/about`,
      domain:          `${theoryBase}/domain`,
      range:           `${theoryBase}/range`,
      codomain:        `${theoryBase}/codomain`,
      zeros:           `${theoryBase}/zeros`,
      yIntercept:      `${theoryBase}/y-intercept`,
      symmetry:        `${theoryBase}/symmetry`,
      parity:          `${theoryBase}/parity`,
      periodicity:     `${theoryBase}/periodicity`,
      continuity:      `${theoryBase}/continuity`,
      asymptotes:      `${theoryBase}/asymptotes`,
      monotonicity:    `${theoryBase}/monotonicity`,
      concavity:       `${theoryBase}/concavity`,
      inflection:      `${theoryBase}/inflection-points`,
      extrema:         `${theoryBase}/extrema`,
      boundedness:     `${theoryBase}/boundedness`,
      invertibility:   `${theoryBase}/invertibility`,
      inverse:         `${theoryBase}/inverse`,
      transformations: `${theoryBase}/transformations`,
      composition:     `${theoryBase}/composition`,
      operations:      `${theoryBase}/operations`,
      endBehavior:     `${theoryBase}/end-behavior`,
      piecewise:       `${theoryBase}/piecewise`,
    },
    // Per-aspect visualizers under /functions/visual-tools/*
    tools: {
      asymptotes:      `${toolsBase}/asymptotes`,
      composition:     `${toolsBase}/composition`,
      domain:          `${toolsBase}/domain`,
      inverse:         `${toolsBase}/inverse-function`,
      piecewise:       `${toolsBase}/piecewise`,
      range:           `${toolsBase}/range`,
      reflections:     `${toolsBase}/reflections`,
      symmetry:        `${toolsBase}/symmetry`,
      tangentLine:     `${toolsBase}/tangent-line`,
      transformations: `${toolsBase}/transformations`,
    },
    // Calculus bridge pages under /calculus/*
    calculus: {
      derivative:       `${calculusBase}/derivative`,
      secondDerivative: `${calculusBase}/second-derivative`,
      antiderivative:   `${calculusBase}/antiderivative`,
      integral:         `${calculusBase}/integral`,
      tangentLine:      `${calculusBase}/tangent-line`,
      linearization:    `${calculusBase}/linearization`,
      taylor:           `${calculusBase}/taylor-series`,
      limits:           `${calculusBase}/limits`,
      criticalPoints:   `${calculusBase}/critical-points`,
      meanValue:        `${calculusBase}/mean-value-theorem`,
    },
    // Per-aspect calculators on the niche subdomain
    calculator: {
      domain:      `${calculatorBase}/domain`,
      range:       `${calculatorBase}/range`,
      roots:       `${calculatorBase}/roots`,
      inverse:     `${calculatorBase}/inverse`,
      derivative:  `${calculatorBase}/derivative`,
      integral:    `${calculatorBase}/integral`,
      asymptotes:  `${calculatorBase}/asymptotes`,
      extrema:     `${calculatorBase}/extrema`,
      inflection:  `${calculatorBase}/inflection`,
      symmetry:    `${calculatorBase}/symmetry`,
      composition: `${calculatorBase}/composition`,
      period:      `${calculatorBase}/period`,
    },
  };
}

// Shallow-merge each group so partial overrides preserve every other key.
export function mergeLinks(defaults, overrides) {
  if (!overrides) return defaults;
  const out = {};
  const groups = new Set([...Object.keys(defaults), ...Object.keys(overrides)]);
  for (const g of groups) {
    out[g] = { ...(defaults[g] || {}), ...(overrides[g] || {}) };
  }
  return out;
}

// ============================================================
// EXPLORER CONTEXT
// ============================================================
export const ExplorerContext = createContext({
  pin: () => {},
  unpin: () => {},
  isPinned: () => false,
  density: 'compact',
  routes: {
    theoryBase:     '/functions',
    toolsBase:      '/functions/visual-tools',
    calculusBase:   '/calculus',
    calculatorBase: 'https://calc.learnmathclass.com',
  },
  links: buildDefaultLinks({
    theoryBase:     '/functions',
    toolsBase:      '/functions/visual-tools',
    calculusBase:   '/calculus',
    calculatorBase: 'https://calc.learnmathclass.com',
  }),
});

// ============================================================
// MATH PIPELINE HELPERS
// ============================================================
function safe(f, x) {
  try {
    const y = f(x);
    return (typeof y === 'number' && isFinite(y)) ? y : null;
  } catch { return null; }
}

function findRoots(fn, xMin, xMax, samples = 600, tol = 1e-7) {
  const roots = [];
  const step = (xMax - xMin) / samples;
  for (let i = 0; i < samples; i++) {
    const x1 = xMin + i * step, x2 = x1 + step;
    const y1 = safe(fn, x1), y2 = safe(fn, x2);
    if (y1 === null || y2 === null) continue;
    if (y1 * y2 < 0) {
      let a = x1, b = x2;
      for (let j = 0; j < 60; j++) {
        const mid = (a + b) / 2;
        const ym = safe(fn, mid);
        if (ym === null) break;
        if (Math.abs(ym) < tol) { a = b = mid; break; }
        if (ym * safe(fn, a) < 0) b = mid; else a = mid;
      }
      roots.push((a + b) / 2);
    } else if (Math.abs(y1) < tol && (roots.length === 0 || Math.abs(roots[roots.length - 1] - x1) > step)) {
      roots.push(x1);
    }
  }
  return roots;
}

function findExtrema(fn, xMin, xMax, samples = 400) {
  const ext = [];
  const step = (xMax - xMin) / samples;
  const h = step / 20;
  const fp = (x) => {
    const a = safe(fn, x + h), b = safe(fn, x - h);
    return (a !== null && b !== null) ? (a - b) / (2 * h) : null;
  };
  for (let i = 1; i < samples - 1; i++) {
    const x = xMin + i * step;
    const d1 = fp(x - step / 2);
    const d2 = fp(x + step / 2);
    if (d1 === null || d2 === null) continue;
    if (d1 * d2 < 0) {
      let a = x - step / 2, b = x + step / 2;
      for (let j = 0; j < 40; j++) {
        const mid = (a + b) / 2;
        const dm = fp(mid);
        if (dm === null) break;
        if (Math.abs(dm) < 1e-7) { a = b = mid; break; }
        if (dm * fp(a) < 0) b = mid; else a = mid;
      }
      const xe = (a + b) / 2;
      const ye = safe(fn, xe);
      if (ye !== null) {
        ext.push({ x: xe, y: ye, kind: d1 > 0 ? 'max' : 'min' });
      }
    }
  }
  return ext;
}

function findInflections(fn, xMin, xMax, samples = 400) {
  const out = [];
  const step = (xMax - xMin) / samples;
  const h = step / 20;
  const f2 = (x) => {
    const a = safe(fn, x + h), b = safe(fn, x), c = safe(fn, x - h);
    return (a !== null && b !== null && c !== null) ? (a - 2 * b + c) / (h * h) : null;
  };
  for (let i = 2; i < samples - 1; i++) {
    const x = xMin + i * step;
    const d1 = f2(x - step / 2);
    const d2 = f2(x + step / 2);
    if (d1 === null || d2 === null) continue;
    if (d1 * d2 < 0) {
      const xe = x;
      const ye = safe(fn, xe);
      if (ye !== null) out.push({ x: xe, y: ye });
    }
  }
  return out;
}

function findVerticalAsymptotes(fn, xMin, xMax, samples = 800) {
  const out = [];
  const step = (xMax - xMin) / samples;
  const threshold = 1e4;
  for (let i = 1; i < samples; i++) {
    const x1 = xMin + (i - 1) * step;
    const x2 = xMin + i * step;
    const y1 = safe(fn, x1), y2 = safe(fn, x2);
    const oneFinite = (y1 === null) !== (y2 === null);
    const bigJump = (y1 !== null && y2 !== null && Math.abs(y2 - y1) > threshold);
    if (oneFinite || bigJump) {
      const x = (x1 + x2) / 2;
      if (!out.some(a => Math.abs(a - x) < step * 2)) out.push(x);
    }
  }
  return out;
}

// ============================================================
// FAMILY DETECTION
// ============================================================
function detectFamily(node) {
  const s = node.toString();
  const has = (re) => re.test(s);
  if (has(/\bsin\b|\bcos\b|\btan\b|\bcot\b|\bsec\b|\bcsc\b/)) return 'Trigonometric';
  if (has(/\b(exp|e\s*\^)/)) return 'Exponential';
  if (has(/\b(log|ln)\b/)) return 'Logarithmic';
  if (has(/sqrt|\^\s*0?\.5|\^\s*\(\s*1\s*\/\s*2\s*\)/)) return 'Radical';
  const hasNegativeExp = detectNegativeExponent(node);
  if (hasNegativeExp) return 'Rational';
  if (has(/\//) && /x/.test(s)) {
    if (denominatorContainsX(node)) return 'Rational';
  }
  if (has(/\babs\b|\|/)) return 'Absolute value';
  const deg = polynomialDegree(node);
  if (deg === 1) return 'Linear';
  if (deg === 2) return 'Quadratic';
  if (deg === 3) return 'Cubic';
  if (deg >= 4) return `Polynomial (deg ${deg})`;
  return 'General';
}

function detectNegativeExponent(node) {
  let found = false;
  const walk = (n) => {
    if (!n || found) return;
    if (n.type === 'OperatorNode' && n.op === '^') {
      const [base, exp] = n.args;
      if (base.type === 'SymbolNode' && base.name === 'x') {
        if (exp.type === 'ConstantNode' && exp.value < 0) found = true;
        if (exp.type === 'OperatorNode' && exp.op === '-' && exp.args.length === 1) found = true;
      }
    }
    if (n.args) n.args.forEach(walk);
  };
  walk(node);
  return found;
}

function denominatorContainsX(node) {
  let found = false;
  const walk = (n) => {
    if (!n || found) return;
    if (n.type === 'OperatorNode' && n.op === '/') {
      const denom = n.args[1];
      const str = denom.toString();
      if (/\bx\b/.test(str)) found = true;
    }
    if (n.args) n.args.forEach(walk);
  };
  walk(node);
  return found;
}

function polynomialDegree(node) {
  let max = 0;
  const walk = (n) => {
    if (!n) return;
    if (n.type === 'OperatorNode' && n.op === '^') {
      const [base, exp] = n.args;
      if (base.type === 'SymbolNode' && base.name === 'x' &&
          exp.type === 'ConstantNode' && Number.isInteger(exp.value) && exp.value > 0) {
        if (exp.value > max) max = exp.value;
      }
    }
    if (n.type === 'SymbolNode' && n.name === 'x' && max < 1) max = 1;
    if (n.args) n.args.forEach(walk);
  };
  walk(node);
  return max;
}

// ============================================================
// PARITY / PERIODICITY
// ============================================================
function detectParity(fn) {
  const xs = [0.3, 0.7, 1.4, 2.1, 3.5, 5.2];
  let even = true, odd = true;
  for (const x of xs) {
    const yp = safe(fn, x), yn = safe(fn, -x);
    if (yp === null || yn === null) { even = odd = false; break; }
    if (Math.abs(yp - yn) > 1e-6) even = false;
    if (Math.abs(yp + yn) > 1e-6) odd = false;
  }
  return even ? 'even' : (odd ? 'odd' : 'neither');
}

function detectPeriod(fn) {
  const candidates = [
    { T: Math.PI,       label: '\u03C0' },
    { T: 2 * Math.PI,   label: '2\u03C0' },
    { T: Math.PI / 2,   label: '\u03C0/2' },
    { T: 1,             label: '1' },
    { T: 2,             label: '2' },
  ];
  const probes = [-3.7, -1.4, 0.6, 2.3, 4.1];
  for (const cand of candidates) {
    let ok = true;
    for (const x of probes) {
      const y1 = safe(fn, x);
      const y2 = safe(fn, x + cand.T);
      if (y1 === null || y2 === null) { ok = false; break; }
      if (Math.abs(y1 - y2) > 1e-4) { ok = false; break; }
    }
    if (ok) return { periodic: true, T: cand.T, label: cand.label };
  }
  return { periodic: false, T: null, label: null };
}

// ============================================================
// SAMPLING PASSES
// ============================================================
function sampleRange(fn, xMin, xMax, samples = 400) {
  let lo = Infinity, hi = -Infinity, missingAt = [];
  const step = (xMax - xMin) / samples;
  for (let i = 0; i <= samples; i++) {
    const x = xMin + i * step;
    const y = safe(fn, x);
    if (y === null) { missingAt.push(x); continue; }
    if (y < lo) lo = y;
    if (y > hi) hi = y;
  }
  return { lo, hi, missingAt };
}

function signIntervals(fn, roots, xMin, xMax) {
  const breaks = [xMin, ...roots, xMax];
  const out = [];
  for (let i = 0; i < breaks.length - 1; i++) {
    const a = breaks[i], b = breaks[i + 1];
    const mid = (a + b) / 2;
    const y = safe(fn, mid);
    const sign = y === null ? 'undef' : (y > 0 ? '+' : (y < 0 ? '-' : '0'));
    out.push({ from: a, to: b, sign });
  }
  return out;
}

function monotonicityIntervals(fn, extrema, xMin, xMax) {
  const breaks = [xMin, ...extrema.map(e => e.x), xMax];
  const out = [];
  const step = 1e-3;
  for (let i = 0; i < breaks.length - 1; i++) {
    const a = breaks[i], b = breaks[i + 1];
    const mid = (a + b) / 2;
    const yl = safe(fn, mid - step), yr = safe(fn, mid + step);
    if (yl === null || yr === null) { out.push({ from: a, to: b, dir: 'undef' }); continue; }
    out.push({ from: a, to: b, dir: yr > yl ? 'inc' : (yr < yl ? 'dec' : 'const') });
  }
  return out;
}

// ============================================================
// END BEHAVIOR
// ============================================================
function analyzeEnd(fn, sign) {
  const probes = [10, 100, 1000, 10000];
  const ys = [];
  for (const p of probes) {
    const y = safe(fn, sign * p);
    if (y === null) return { direction: 'oscillate', value: null };
    ys.push(y);
  }
  const diffs = [];
  for (let i = 1; i < ys.length; i++) diffs.push(Math.abs(ys[i] - ys[i - 1]));
  const shrinking = diffs[diffs.length - 1] < diffs[0] * 0.5;
  const lastDiffSmall = diffs[diffs.length - 1] < 1e-3;
  if (shrinking && lastDiffSmall) {
    return { direction: 'converge', value: ys[ys.length - 1] };
  }
  const growing = Math.abs(ys[ys.length - 1]) > Math.abs(ys[0]) * 5;
  if (growing) {
    return {
      direction: ys[ys.length - 1] > 0 ? 'diverge+' : 'diverge-',
      value: null,
    };
  }
  return { direction: 'oscillate', value: null };
}

// ============================================================
// MAIN PIPELINE BUILD
// ============================================================
export function buildPipeline(expression, opts = {}) {
  const xMin = opts.xMin ?? -10;
  const xMax = opts.xMax ?? 10;

  let node, fn, fnPrime, fnDoublePrime, derivStr, deriv2Str;
  try {
    node = parse(expression);
    fn = (x) => { try { return node.evaluate({ x }); } catch { return NaN; } };
    const d1 = derivative(node, 'x');
    derivStr = d1.toString();
    fnPrime = (x) => { try { return d1.evaluate({ x }); } catch { return NaN; } };
    const d2 = derivative(d1, 'x');
    deriv2Str = d2.toString();
    fnDoublePrime = (x) => { try { return d2.evaluate({ x }); } catch { return NaN; } };
  } catch (err) {
    return { error: err.message || String(err), expression };
  }

  const family = detectFamily(node);
  const roots = findRoots(fn, xMin, xMax);
  const extrema = findExtrema(fn, xMin, xMax);
  const inflections = findInflections(fn, xMin, xMax);
  const vertAsymptotes = findVerticalAsymptotes(fn, xMin, xMax);
  const parity = detectParity(fn);
  const period = detectPeriod(fn);
  const { lo, hi, missingAt } = sampleRange(fn, xMin, xMax);
  const sign = signIntervals(fn, roots, xMin, xMax);
  const mono = monotonicityIntervals(fn, extrema, xMin, xMax);
  const yInt = safe(fn, 0);

  const endRight = analyzeEnd(fn, +1);
  const endLeft  = analyzeEnd(fn, -1);
  const horizAsymptotes = [];
  if (endRight.direction === 'converge') horizAsymptotes.push({ y: endRight.value, side: 'right' });
  if (endLeft.direction === 'converge')  horizAsymptotes.push({ y: endLeft.value,  side: 'left'  });

  const continuous = (vertAsymptotes.length === 0) && (missingAt.length === 0);

  const concavityBreaks = [xMin, ...inflections.map(p => p.x), xMax];
  const concavity = [];
  for (let i = 0; i < concavityBreaks.length - 1; i++) {
    const a = concavityBreaks[i], b = concavityBreaks[i + 1];
    const mid = (a + b) / 2;
    const c = safe(fnDoublePrime, mid);
    concavity.push({ from: a, to: b, kind: c === null ? 'undef' : (c > 0 ? 'up' : (c < 0 ? 'down' : 'flat')) });
  }

  const unboundedAbove =
    endLeft.direction === 'diverge+' || endRight.direction === 'diverge+';
  const unboundedBelow =
    endLeft.direction === 'diverge-' || endRight.direction === 'diverge-';

  const extremaMinY = extrema.filter(e => e.kind === 'min').reduce(
    (acc, e) => e.y < acc ? e.y : acc, Infinity
  );
  const extremaMaxY = extrema.filter(e => e.kind === 'max').reduce(
    (acc, e) => e.y > acc ? e.y : acc, -Infinity
  );

  const analyticLo = unboundedBelow ? -Infinity :
    (isFinite(extremaMinY) ? extremaMinY : lo);
  const analyticHi = unboundedAbove ? +Infinity :
    (isFinite(extremaMaxY) ? extremaMaxY : hi);

  const bounded = isFinite(analyticLo) && isFinite(analyticHi);

  let symmetryAxis = null;
  if (parity === 'even') symmetryAxis = 0;
  else if (extrema.length === 1) symmetryAxis = extrema[0].x;

  const bounds = {
    lo: analyticLo,
    hi: analyticHi,
    bounded,
    sampledLo: lo,
    sampledHi: hi,
    loSource: unboundedBelow ? 'analytic' : (isFinite(extremaMinY) ? 'analytic' : 'sampled'),
    hiSource: unboundedAbove ? 'analytic' : (isFinite(extremaMaxY) ? 'analytic' : 'sampled'),
  };

  const monoDirs = new Set(mono.map(m => m.dir));
  monoDirs.delete('undef');
  const injective = monoDirs.size === 1;

  const allAsymptotes = [...vertAsymptotes];
  const missingSet = missingAt.slice(0, 3).map(x => x.toFixed(2));
  let domainStr;
  if (allAsymptotes.length > 0) {
    domainStr = `\u211D \\ {${allAsymptotes.map(x => x.toFixed(3)).join(', ')}}`;
  } else if (missingAt.length > 0) {
    domainStr = `\u211D \\ {${missingSet.join(', ')}${missingAt.length > 3 ? ', \u2026' : ''}}`;
  } else {
    domainStr = '\u211D';
  }

  let rangeStr;
  if (period.periodic && isFinite(analyticLo) && isFinite(analyticHi)) {
    rangeStr = `[${analyticLo.toFixed(3)}, ${analyticHi.toFixed(3)}]`;
  } else if (bounded) {
    rangeStr = `[${analyticLo.toFixed(3)}, ${analyticHi.toFixed(3)}]`;
  } else if (isFinite(analyticLo)) {
    rangeStr = `[${analyticLo.toFixed(3)}, +\u221E)`;
  } else if (isFinite(analyticHi)) {
    rangeStr = `(\u2212\u221E, ${analyticHi.toFixed(3)}]`;
  } else {
    rangeStr = '\u211D';
  }

  return {
    expression,
    formula: node.toString(),
    family,
    fn,
    fnPrime,    derivStr,
    fnDoublePrime, deriv2Str,
    domain: domainStr,
    range: rangeStr,
    codomain: '\u211D',
    parity,
    period,
    symmetryAxis,
    roots, extrema, inflections,
    asymptotes: vertAsymptotes,
    horizAsymptotes,
    yIntercept: yInt,
    sign, mono, concavity,
    bounded, bounds,
    continuous,
    endLeft, endRight,
    injective,
    xMin, xMax,
  };
}

// ============================================================
// STATE HOOK
// ============================================================
function useExplorerState(initial = {}) {
  const [expression, setExpression] = useState(initial.expression || '0.1x^2 - 2');
  const [activeTab, setActiveTab]   = useState('properties');
  const [density,   setDensity]     = useState('compact');
  const [view,      setView]        = useState('graph');

  const [overlays, setOverlays] = useState({
    fp: false, fpp: false, anti: false, inv: false,
  });
  const [annotations, setAnnotations] = useState({
    roots: true, extrema: true, inflect: false, asymp: false, tangent: true, area: false,
  });

  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [viewport, setViewport] = useState({ xMin: -10, xMax: 10, yMin: -10, yMax: 10 });

  const [pinned, setPinned] = useState([]);

  const toggleOverlay = useCallback((k) => setOverlays(p => ({ ...p, [k]: !p[k] })), []);
  const toggleAnnot   = useCallback((k) => setAnnotations(p => ({ ...p, [k]: !p[k] })), []);
  const resetRail = useCallback(() => {
    setOverlays({ fp: false, fpp: false, anti: false, inv: false });
    setAnnotations({ roots: false, extrema: false, inflect: false, asymp: false, tangent: false, area: false });
  }, []);

  const pin = useCallback((card) => {
    setPinned(prev => {
      if (prev.some(p => p.id === card.id)) return prev;
      return [...prev, card];
    });
  }, []);
  const unpin = useCallback((id) => setPinned(p => p.filter(x => x.id !== id)), []);
  const isPinned = useCallback((id) => pinned.some(p => p.id === id), [pinned]);

  return {
    expression, setExpression,
    activeTab, setActiveTab,
    density, setDensity,
    view, setView,
    overlays, toggleOverlay,
    annotations, toggleAnnot,
    resetRail,
    cursor, setCursor,
    viewport, setViewport,
    pinned, setPinned, pin, unpin, isPinned,
  };
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export function FunctionExplorer(props) {
  const {
    initialExpression = '0.1x^2 - 2',
    width  = '100%',
    height = 820,
    theoryBase     = '/functions',
    toolsBase      = '/functions/visual-tools',
    calculusBase   = '/calculus',
    calculatorBase = 'https://calc.learnmathclass.com',
    links,   // NEW: fully granular per-link override tree
    onSearch,
    onSettings,
    onExport,
    onMaximize,
    onCompare,
    onAnimate,
  } = props;

  useEffect(() => { injectStyles(); }, []);

  const state = useExplorerState({ expression: initialExpression });

  const data = useMemo(
    () => buildPipeline(state.expression, { xMin: state.viewport.xMin, xMax: state.viewport.xMax }),
    [state.expression, state.viewport.xMin, state.viewport.xMax]
  );

  useEffect(() => {
    if (data.error || !data.fn) return;
    if (state.cursor.x === 0 && state.cursor.y === 0) {
      const x0 = 0;
      const y0 = safe(data.fn, x0);
      state.setCursor({ x: x0, y: y0 === null ? 0 : y0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.fn, data.error]);

  useEffect(() => {
    if (data.error || !data.fn) return;
    const y = safe(data.fn, state.cursor.x);
    if (y !== null && Math.abs(y - state.cursor.y) > 1e-9) {
      state.setCursor({ x: state.cursor.x, y });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.fn, state.cursor.x]);

  const containerRef = useRef(null);

  const defaultOnMaximize = useCallback(() => {
    const el = containerRef.current;
    if (!el || typeof document === 'undefined') return;
    if (document.fullscreenElement) {
      document.exitFullscreen && document.exitFullscreen();
    } else {
      el.requestFullscreen && el.requestFullscreen();
    }
  }, []);

  const defaultOnExport = useCallback(() => {
    const el = containerRef.current;
    if (!el || typeof document === 'undefined') return;
    const canvas = el.querySelector('canvas');
    if (!canvas) {
      // eslint-disable-next-line no-console
      console.warn('FunctionExplorer: no canvas found to export.');
      return;
    }
    try {
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `function-explorer-${Date.now()}.png`;
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('FunctionExplorer: canvas export failed.', err);
    }
  }, []);

  const engineFunctions = useMemo(() => {
    if (data.error) return [];
    const list = [
      { fn: data.fn, color: T.c.blue, label: 'f', formula: `f(x) = ${data.formula}`, visible: true, stroke: 1.75 },
    ];
    if (state.overlays.fp && data.fnPrime) {
      list.push({ fn: data.fnPrime, color: T.c.slate, label: "f'", formula: `f'(x) = ${data.derivStr}`, visible: true, stroke: 1.5 });
    }
    if (state.overlays.fpp && data.fnDoublePrime) {
      list.push({ fn: data.fnDoublePrime, color: T.c.slateD, label: 'f\u2033', formula: `f''(x) = ${data.deriv2Str}`, visible: true, stroke: 1.4 });
    }
    if (state.overlays.anti && data.fn) {
      const F = makeAntiderivative(data.fn, state.viewport.xMin, state.viewport.xMax);
      list.push({ fn: F, color: T.c.blueL, label: 'F', formula: 'F(x) = \u222Bf(x)dx', visible: true, stroke: 1.4 });
    }
    if (state.overlays.inv && data.fn && data.injective) {
      const invFn = makeInverse(data.fn, state.viewport.xMin, state.viewport.xMax);
      if (invFn) {
        list.push({
          fn: invFn, color: T.c.blueD, label: 'f\u207B\u00B9',
          formula: 'f\u207B\u00B9(x)  (numeric, reflection across y = x)',
          visible: true, stroke: 1.4,
        });
      }
    }
    return list;
  }, [data, state.overlays, state.viewport.xMin, state.viewport.xMax]);

  const shadedRegion = useMemo(() => {
    if (!state.annotations.area || data.error) return [];
    let xStart, xEnd;
    if (data.roots && data.roots.length >= 2) {
      xStart = data.roots[0];
      xEnd   = data.roots[1];
    } else {
      const span = state.viewport.xMax - state.viewport.xMin;
      xStart = state.viewport.xMin + span * 0.3;
      xEnd   = state.viewport.xMin + span * 0.7;
    }
    return [{ type: 'underCurve', functionIndex: 0, xStart, xEnd }];
  }, [state.annotations.area, data, state.viewport]);

  const engineAnnotations = useMemo(() => ({
    showRoots:       state.annotations.roots,
    showExtrema:     state.annotations.extrema,
    showInflections: state.annotations.inflect,
    showAsymptotes:  state.annotations.asymp,
    tangentAt:       state.annotations.tangent ? { functionIndex: 0, x: state.cursor.x } : null,
    shadedRegions:   shadedRegion,
  }), [state.annotations, state.cursor.x, shadedRegion]);

  const handleEngineHover = useCallback((info) => {
    if (typeof info?.x === 'number' && typeof info?.y === 'number') {
      state.setCursor({ x: info.x, y: info.y });
    }
  }, [state]);

  const handleEngineViewport = useCallback((vp) => {
    state.setViewport(vp);
  }, [state]);

  // --- resolved link tree: defaults from base paths, then user overrides ---
  const resolvedLinks = useMemo(
    () => mergeLinks(
      buildDefaultLinks({ theoryBase, toolsBase, calculusBase, calculatorBase }),
      links,
    ),
    [theoryBase, toolsBase, calculusBase, calculatorBase, links],
  );

  const ctxValue = useMemo(() => ({
    pin: state.pin,
    unpin: state.unpin,
    isPinned: state.isPinned,
    density: state.density,
    routes: { theoryBase, toolsBase, calculusBase, calculatorBase },
    links: resolvedLinks,
  }), [
    state.pin, state.unpin, state.isPinned, state.density,
    theoryBase, toolsBase, calculusBase, calculatorBase,
    resolvedLinks,
  ]);

  const modeLabel = state.view === 'graph' ? 'graph \u00B7 pan/zoom'
                  : state.view === 'table' ? 'numeric table'
                  : 'mapping diagram';

  return (
    <ExplorerContext.Provider value={ctxValue}>
      <div
        ref={containerRef}
        style={{
          background: T.bg.panel,
          border: `1px solid ${T.border.soft}`,
          borderRadius: T.radius.lg,
          boxShadow: T.shadow.s2,
          overflow: 'hidden',
          display: 'grid',
          gridTemplateRows: `${T.height.header}px ${T.height.funcbar}px 1fr ${T.height.insights}px ${T.height.status}px`,
          width,
          height,
          maxHeight: 'calc(100vh - 40px)',
          fontFamily: T.font.sans,
          fontSize: 13,
          color: T.text.body,
        }}
      >
        <Header
          brandName="Function Explorer"
          formula={data.error ? '(invalid)' : data.formula}
          formulaLabel={data.error ? 'error' : 'f(x) ='}
          onSearch={onSearch}
          onSettings={onSettings}
          onExport={onExport || defaultOnExport}
          onMaximize={onMaximize || defaultOnMaximize}
        />

        <Funcbar
          expression={state.expression}
          onExpressionChange={state.setExpression}
          family={data.error ? null : data.family}
          onCompare={onCompare}
          onAnimate={onAnimate}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `${T.width.rail}px 1fr ${T.width.rtabs}px ${T.width.rpanel}px`,
            minHeight: 0,
            borderBottom: `1px solid ${T.border.soft}`,
          }}
        >
          <LeftRail
            overlays={state.overlays}
            annotations={state.annotations}
            onToggleOverlay={state.toggleOverlay}
            onToggleAnnot={state.toggleAnnot}
            onReset={state.resetRail}
            invDisabled={!data.injective}
          />

          <div style={{ position: 'relative', background: T.bg.graph, overflow: 'hidden' }}>
            <GraphViewSwitch value={state.view} onChange={state.setView} />

            {state.view === 'graph' && !data.error && VisualizerCore && (
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <VisualizerCore
                  functions={engineFunctions}
                  xMin={state.viewport.xMin}
                  xMax={state.viewport.xMax}
                  yMin={state.viewport.yMin}
                  yMax={state.viewport.yMax}
                  width={700}
                  height={520}
                  showGrid
                  showMinorGrid
                  showAxes
                  showAxisLabels
                  showCrosshair
                  showCurveTooltip
                  labelMode="legend"
                  legendPosition="top-left"
                  {...engineAnnotations}
                  onHover={handleEngineHover}
                  onViewportChange={handleEngineViewport}
                  styles={EXPLORER_STYLES}
                />
              </div>
            )}

            {state.view === 'graph' && !data.error && !VisualizerCore && (
              <div style={{ padding: 24, color: T.text.muted, fontFamily: T.font.mono, fontSize: 12, lineHeight: 1.6 }}>
                VisualizerCore is undefined. Check the import in
                {' '}<code style={{ color: T.text.strong }}>FunctionExplorer.jsx</code>:
                the path may be wrong, or the component may be a default export
                (use <code style={{ color: T.text.strong }}>{'import VisualizerCore from ...'}</code>{' '}
                instead of <code style={{ color: T.text.strong }}>{'import { VisualizerCore } from ...'}</code>).
              </div>
            )}

            {state.view === 'table' && !data.error && (
              <NumericTable
                fn={data.fn}
                xMin={state.viewport.xMin}
                xMax={state.viewport.xMax}
              />
            )}

            {state.view === 'map' && !data.error && (
              <MappingDiagram
                fn={data.fn}
                xMin={state.viewport.xMin}
                xMax={state.viewport.xMax}
              />
            )}

            {data.error && (
              <div style={{ padding: 24, color: T.text.muted, fontFamily: T.font.mono, fontSize: 12 }}>
                parse error: {data.error}
              </div>
            )}
          </div>

          <RightTabs active={state.activeTab} onChange={state.setActiveTab} />

          <RightPanel
            title={titleFor(state.activeTab)}
            subtitle={subtitleFor(state.activeTab)}
            density={state.density}
            onDensityChange={state.setDensity}
          >
            {state.activeTab === 'properties' && (
              <>
                <AboutPanel data={data} />
                <DomainRangePanel data={data} />
                <ZerosPanel data={data} />
                <SymmetryPanel data={data} />
                <ContinuityPanel data={data} />
                <AsymptotesPanel data={data} />
                <MonotonicityPanel data={data} />
                <ConcavityPanel data={data} />
                <BoundednessPanel data={data} />
                <InvertibilityPanel data={data} />
              </>
            )}
            {state.activeTab === 'transforms' && (
              <>
                <ParentTransformsPanel data={data} />
                <OperationsPanel data={data} />
              </>
            )}
            {state.activeTab === 'calculus' && (
              <>
                <DerivativePanel    data={data} cursor={state.cursor} />
                <SecondDerivativePanel data={data} />
                <AntiderivativePanel data={data} viewport={state.viewport} />
                <TangentApproxPanel data={data} cursor={state.cursor} />
              </>
            )}
            {state.activeTab === 'theory' && (
              <TheoryReadingList data={data} />
            )}
          </RightPanel>
        </div>

        <InsightsStrip
          defaults={defaultInsightsFor(data)}
          pinned={state.pinned}
          onUnpin={state.unpin}
        />

        <StatusBar
          cursor={state.cursor}
          viewport={state.viewport}
          mode={modeLabel}
        />
      </div>
    </ExplorerContext.Provider>
  );
}

// ============================================================
// HELPERS
// ============================================================
function titleFor(tab) {
  switch (tab) {
    case 'properties': return 'Properties';
    case 'transforms': return 'Transformations & ops';
    case 'calculus':   return 'Calculus bridge';
    case 'theory':     return 'Theory & reading';
    default: return tab;
  }
}
function subtitleFor(tab) {
  switch (tab) {
    case 'properties': return '10 aspects \u00B7 excerpts \u00B7 links out';
    case 'transforms': return 'parent / shifts / scales / compose';
    case 'calculus':   return 'mention only \u00B7 links to /calculus';
    case 'theory':     return 'curated for this function';
    default: return '';
  }
}

function defaultInsightsFor(data) {
  if (!data || data.error) return [];
  const cards = [];
  cards.push({ id: 'domain', label: 'Domain', value: data.domain, sub: '' });
  if (data.roots.length === 1) {
    cards.push({ id: 'roots', label: 'Root', value: data.roots[0].toFixed(3), sub: '' });
  } else if (data.roots.length > 1) {
    const sample = data.roots.slice(0, 2).map(r => r.toFixed(2)).join(', ');
    cards.push({ id: 'roots', label: 'Roots', value: `${data.roots.length} roots`, sub: sample });
  }
  if (data.extrema.length > 0) {
    const e = data.extrema[0];
    cards.push({ id: 'ext0', label: e.kind === 'min' ? 'Min' : 'Max', value: `(${e.x.toFixed(2)}, ${e.y.toFixed(2)})`, sub: '' });
  }
  cards.push({ id: 'parity', label: 'Symmetry', value: data.parity, sub: data.period.periodic ? `period ${data.period.label}` : '' });
  cards.push({ id: 'continuity', label: 'Continuity', value: data.continuous ? 'continuous' : 'has gaps', sub: '' });
  return cards;
}

function makeAntiderivative(f, xMin, xMax) {
  const samples = 400;
  const step = (xMax - xMin) / samples;
  const xs = [];
  const ys = [];
  let acc = 0;
  let prevY = safe(f, xMin);
  xs.push(xMin); ys.push(0);
  for (let i = 1; i <= samples; i++) {
    const x = xMin + i * step;
    const y = safe(f, x);
    if (y !== null && prevY !== null) acc += (y + prevY) / 2 * step;
    xs.push(x); ys.push(acc);
    prevY = y;
  }
  return (x) => {
    if (x <= xMin) return 0;
    if (x >= xMax) return ys[ys.length - 1];
    const t = (x - xMin) / step;
    const i = Math.floor(t);
    const frac = t - i;
    return ys[i] + (ys[i + 1] - ys[i]) * frac;
  };
}

function makeInverse(f, xMin, xMax) {
  const samples = 400;
  const step = (xMax - xMin) / samples;
  const pts = [];
  for (let i = 0; i <= samples; i++) {
    const u = xMin + i * step;
    const v = safe(f, u);
    if (v !== null) pts.push([v, u]);
  }
  if (pts.length < 2) return null;
  pts.sort((a, b) => a[0] - b[0]);
  return (x) => {
    if (x < pts[0][0] || x > pts[pts.length - 1][0]) return NaN;
    let lo = 0, hi = pts.length - 1;
    while (hi - lo > 1) {
      const mid = (lo + hi) >> 1;
      if (pts[mid][0] <= x) lo = mid; else hi = mid;
    }
    const [x0, u0] = pts[lo], [x1, u1] = pts[hi];
    if (x1 === x0) return u0;
    return u0 + (u1 - u0) * (x - x0) / (x1 - x0);
  };
}

export default FunctionExplorer;