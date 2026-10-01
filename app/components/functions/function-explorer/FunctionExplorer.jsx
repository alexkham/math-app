
// // // ============================================================
// // // FunctionExplorer.jsx  (v3)
// // // Changes from v2:
// // //   - Restored Export and Maximize header buttons. Always rendered.
// // //     Sensible built-in defaults: Export downloads the graph canvas as
// // //     PNG; Maximize toggles fullscreen on the outer container. Props
// // //     onExport / onMaximize override the defaults.
// // //   - Added a containerRef on the outer div so the default handlers
// // //     can reach the canvas element and toggle fullscreen.
// // //   - Guarded VisualizerCore: if the import resolved to undefined
// // //     (wrong path or default vs named export mismatch), the graph pane
// // //     renders a readable message instead of crashing SSR.
// // // ============================================================

// // import React, {
// //   useState,
// //   useMemo,
// //   useCallback,
// //   useEffect,
// //   useRef,
// //   createContext,
// // } from 'react';
// // import { parse, derivative } from 'mathjs';
// // import { VisualizerCore } from '../FunctionVisualizerCoreImproved';

// // import {
// //   Header,
// //   Funcbar,
// //   LeftRail,
// //   GraphViewSwitch,
// //   RightTabs,
// //   RightPanel,
// //   InsightsStrip,
// //   StatusBar,
// //   NumericTable,
// //   MappingDiagram,
// //   injectStyles,
// // } from './ExplorerAtoms';

// // import {
// //   AboutPanel,
// //   DomainRangePanel,
// //   ZerosPanel,
// //   SymmetryPanel,
// //   ContinuityPanel,
// //   AsymptotesPanel,
// //   MonotonicityPanel,
// //   ConcavityPanel,
// //   BoundednessPanel,
// //   InvertibilityPanel,
// //   ParentTransformsPanel,
// //   OperationsPanel,
// //   DerivativePanel,
// //   SecondDerivativePanel,
// //   AntiderivativePanel,
// //   TangentApproxPanel,
// //   TheoryReadingList,
// // } from './ExplorerPanels';

// // // ============================================================
// // // DESIGN TOKENS
// // // ============================================================
// // export const T = {
// //   bg: {
// //     app:       '#f4f5f7',
// //     panel:     '#ffffff',
// //     graph:     '#fcfcfd',
// //     subtle:    '#f8fafc',
// //     hover:     '#eef2f6',
// //     pressed:   '#e2e8f0',
// //     tintBlue:  '#eff6ff',
// //     tintBlue2: '#dbeafe',
// //   },
// //   border: {
// //     soft:    '#f1f5f9',
// //     mid:     '#e2e8f0',
// //     strong:  '#cbd5e1',
// //     blue:    '#bfdbfe',
// //   },
// //   text: {
// //     strong: '#0f172a',
// //     body:   '#334155',
// //     muted:  '#64748b',
// //     faint:  '#94a3b8',
// //   },
// //   c: {
// //     blue:    '#3b82f6',
// //     blueD:   '#1d4ed8',
// //     blueL:   '#60a5fa',
// //     slate:   '#475569',
// //     slateD:  '#1e293b',
// //   },
// //   font: {
// //     sans: '"Geist", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
// //     mono: '"Geist Mono", ui-monospace, "SF Mono", Menlo, monospace',
// //   },
// //   radius: { sm: 5, md: 7, lg: 10 },
// //   shadow: {
// //     s1: '0 1px 2px rgba(15, 23, 42, 0.04)',
// //     s2: '0 1px 3px rgba(15,23,42,0.06), 0 4px 12px rgba(15,23,42,0.04)',
// //   },
// //   width: { rail: 46, rtabs: 44, rpanel: 410 },
// //   height: { header: 48, funcbar: 44, insights: 78, status: 28 },
// // };

// // // ============================================================
// // // ENGINE STYLE OVERRIDE
// // // ============================================================
// // export const EXPLORER_STYLES = {
// //   canvas:    { background: T.bg.app },
// //   graphArea: { background: T.bg.graph },
// //   grid: {
// //     color:       T.border.mid,
// //     minorColor:  T.border.soft,
// //     stroke:      1,
// //     minorStroke: 1,
// //     pattern:     [],
// //   },
// //   axes:   { color: T.c.slate, stroke: 1.5, pattern: [] },
// //   labels: {
// //     color:        T.text.muted,
// //     color2:       T.text.body,
// //     font:         `10.5px ${T.font.mono}`,
// //     axisNameFont: `italic 13px Cambria, "Times New Roman", serif`,
// //   },
// //   crosshair: {
// //     color:           'rgba(59, 130, 246, 0.45)',
// //     stroke:          1,
// //     pattern:         [4, 4],
// //     labelBackground: 'rgba(255, 255, 255, 0.96)',
// //     labelBorder:     T.c.blue,
// //     labelColor:      T.text.strong,
// //     labelFont:       `11.5px ${T.font.sans}`,
// //   },
// //   curve: { stroke: 1.75, pattern: [], hoverStroke: 2.75, hoverGlow: true },
// //   tooltip: {
// //     background: 'rgba(255, 255, 255, 0.97)',
// //     border:     T.border.strong,
// //     color:      T.text.strong,
// //     font:       `11.5px ${T.font.sans}`,
// //     padding:    8,
// //     radius:     6,
// //   },
// //   point: { radius: 4, stroke: 2, strokeColor: '#fff' },
// //   legend: {
// //     background: 'rgba(255, 255, 255, 0.96)',
// //     border:     T.border.mid,
// //     color:      T.c.slateD,
// //     font:       `11.5px ${T.font.sans}`,
// //     padding:    10,
// //     radius:     6,
// //   },
// //   specialPoint: {
// //     root:       { radius: 5, fill: '#fff', stroke: T.c.blueD,  strokeWidth: 2.25 },
// //     extremum:   { radius: 5, fill: '#fff', stroke: T.c.slateD, strokeWidth: 2.25 },
// //     inflection: { radius: 5, fill: '#fff', stroke: T.c.slate,  strokeWidth: 2.25 },
// //     custom:     { radius: 5, fill: '#fff', stroke: T.c.blue,   strokeWidth: 2.25 },
// //     labelFont:  `10px ${T.font.mono}`,
// //     labelBackground: 'rgba(255, 255, 255, 0.96)',
// //     labelPadding: 4,
// //   },
// //   line: {
// //     asymptote: { color: T.c.slateD, stroke: 1.25, pattern: [6, 4] },
// //     tangent:   { color: T.c.slateD, stroke: 1.5,  pattern: [3, 3] },
// //     secant:    { color: T.c.slate,  stroke: 1.5,  pattern: [4, 4] },
// //   },
// //   shadedRegion: {
// //     defaultColor:       'rgba(59, 130, 246, 0.15)',
// //     defaultStroke:      'rgba(59, 130, 246, 0.45)',
// //     defaultStrokeWidth: 1,
// //   },
// // };

// // // ============================================================
// // // EXPLORER CONTEXT
// // // ============================================================
// // export const ExplorerContext = createContext({
// //   pin: () => {},
// //   unpin: () => {},
// //   isPinned: () => false,
// //   density: 'compact',
// //   routes: {
// //     theoryBase:     '/functions',
// //     toolsBase:      '/visual-tools',
// //     calculusBase:   '/calculus',
// //     calculatorBase: 'https://calc.learnmathclass.com',
// //   },
// // });

// // // ============================================================
// // // MATH PIPELINE HELPERS
// // // ============================================================
// // function safe(f, x) {
// //   try {
// //     const y = f(x);
// //     return (typeof y === 'number' && isFinite(y)) ? y : null;
// //   } catch { return null; }
// // }

// // function findRoots(fn, xMin, xMax, samples = 600, tol = 1e-7) {
// //   const roots = [];
// //   const step = (xMax - xMin) / samples;
// //   for (let i = 0; i < samples; i++) {
// //     const x1 = xMin + i * step, x2 = x1 + step;
// //     const y1 = safe(fn, x1), y2 = safe(fn, x2);
// //     if (y1 === null || y2 === null) continue;
// //     if (y1 * y2 < 0) {
// //       let a = x1, b = x2;
// //       for (let j = 0; j < 60; j++) {
// //         const mid = (a + b) / 2;
// //         const ym = safe(fn, mid);
// //         if (ym === null) break;
// //         if (Math.abs(ym) < tol) { a = b = mid; break; }
// //         if (ym * safe(fn, a) < 0) b = mid; else a = mid;
// //       }
// //       roots.push((a + b) / 2);
// //     } else if (Math.abs(y1) < tol && (roots.length === 0 || Math.abs(roots[roots.length - 1] - x1) > step)) {
// //       roots.push(x1);
// //     }
// //   }
// //   return roots;
// // }

// // function findExtrema(fn, xMin, xMax, samples = 400) {
// //   const ext = [];
// //   const step = (xMax - xMin) / samples;
// //   const h = step / 20;
// //   const fp = (x) => {
// //     const a = safe(fn, x + h), b = safe(fn, x - h);
// //     return (a !== null && b !== null) ? (a - b) / (2 * h) : null;
// //   };
// //   for (let i = 1; i < samples - 1; i++) {
// //     const x = xMin + i * step;
// //     const d1 = fp(x - step / 2);
// //     const d2 = fp(x + step / 2);
// //     if (d1 === null || d2 === null) continue;
// //     if (d1 * d2 < 0) {
// //       let a = x - step / 2, b = x + step / 2;
// //       for (let j = 0; j < 40; j++) {
// //         const mid = (a + b) / 2;
// //         const dm = fp(mid);
// //         if (dm === null) break;
// //         if (Math.abs(dm) < 1e-7) { a = b = mid; break; }
// //         if (dm * fp(a) < 0) b = mid; else a = mid;
// //       }
// //       const xe = (a + b) / 2;
// //       const ye = safe(fn, xe);
// //       if (ye !== null) {
// //         ext.push({ x: xe, y: ye, kind: d1 > 0 ? 'max' : 'min' });
// //       }
// //     }
// //   }
// //   return ext;
// // }

// // function findInflections(fn, xMin, xMax, samples = 400) {
// //   const out = [];
// //   const step = (xMax - xMin) / samples;
// //   const h = step / 20;
// //   const f2 = (x) => {
// //     const a = safe(fn, x + h), b = safe(fn, x), c = safe(fn, x - h);
// //     return (a !== null && b !== null && c !== null) ? (a - 2 * b + c) / (h * h) : null;
// //   };
// //   for (let i = 2; i < samples - 1; i++) {
// //     const x = xMin + i * step;
// //     const d1 = f2(x - step / 2);
// //     const d2 = f2(x + step / 2);
// //     if (d1 === null || d2 === null) continue;
// //     if (d1 * d2 < 0) {
// //       const xe = x;
// //       const ye = safe(fn, xe);
// //       if (ye !== null) out.push({ x: xe, y: ye });
// //     }
// //   }
// //   return out;
// // }

// // function findVerticalAsymptotes(fn, xMin, xMax, samples = 800) {
// //   const out = [];
// //   const step = (xMax - xMin) / samples;
// //   const threshold = 1e4;
// //   for (let i = 1; i < samples; i++) {
// //     const x1 = xMin + (i - 1) * step;
// //     const x2 = xMin + i * step;
// //     const y1 = safe(fn, x1), y2 = safe(fn, x2);
// //     const oneFinite = (y1 === null) !== (y2 === null);
// //     const bigJump = (y1 !== null && y2 !== null && Math.abs(y2 - y1) > threshold);
// //     if (oneFinite || bigJump) {
// //       const x = (x1 + x2) / 2;
// //       if (!out.some(a => Math.abs(a - x) < step * 2)) out.push(x);
// //     }
// //   }
// //   return out;
// // }

// // // ============================================================
// // // FAMILY DETECTION
// // // ============================================================
// // function detectFamily(node) {
// //   const s = node.toString();
// //   const has = (re) => re.test(s);
// //   if (has(/\bsin\b|\bcos\b|\btan\b|\bcot\b|\bsec\b|\bcsc\b/)) return 'Trigonometric';
// //   if (has(/\b(exp|e\s*\^)/)) return 'Exponential';
// //   if (has(/\b(log|ln)\b/)) return 'Logarithmic';
// //   if (has(/sqrt|\^\s*0?\.5|\^\s*\(\s*1\s*\/\s*2\s*\)/)) return 'Radical';
// //   const hasNegativeExp = detectNegativeExponent(node);
// //   if (hasNegativeExp) return 'Rational';
// //   if (has(/\//) && /x/.test(s)) {
// //     if (denominatorContainsX(node)) return 'Rational';
// //   }
// //   if (has(/\babs\b|\|/)) return 'Absolute value';
// //   const deg = polynomialDegree(node);
// //   if (deg === 1) return 'Linear';
// //   if (deg === 2) return 'Quadratic';
// //   if (deg === 3) return 'Cubic';
// //   if (deg >= 4) return `Polynomial (deg ${deg})`;
// //   return 'General';
// // }

// // function detectNegativeExponent(node) {
// //   let found = false;
// //   const walk = (n) => {
// //     if (!n || found) return;
// //     if (n.type === 'OperatorNode' && n.op === '^') {
// //       const [base, exp] = n.args;
// //       if (base.type === 'SymbolNode' && base.name === 'x') {
// //         if (exp.type === 'ConstantNode' && exp.value < 0) found = true;
// //         if (exp.type === 'OperatorNode' && exp.op === '-' && exp.args.length === 1) found = true;
// //       }
// //     }
// //     if (n.args) n.args.forEach(walk);
// //   };
// //   walk(node);
// //   return found;
// // }

// // function denominatorContainsX(node) {
// //   let found = false;
// //   const walk = (n) => {
// //     if (!n || found) return;
// //     if (n.type === 'OperatorNode' && n.op === '/') {
// //       const denom = n.args[1];
// //       const str = denom.toString();
// //       if (/\bx\b/.test(str)) found = true;
// //     }
// //     if (n.args) n.args.forEach(walk);
// //   };
// //   walk(node);
// //   return found;
// // }

// // function polynomialDegree(node) {
// //   let max = 0;
// //   const walk = (n) => {
// //     if (!n) return;
// //     if (n.type === 'OperatorNode' && n.op === '^') {
// //       const [base, exp] = n.args;
// //       if (base.type === 'SymbolNode' && base.name === 'x' &&
// //           exp.type === 'ConstantNode' && Number.isInteger(exp.value) && exp.value > 0) {
// //         if (exp.value > max) max = exp.value;
// //       }
// //     }
// //     if (n.type === 'SymbolNode' && n.name === 'x' && max < 1) max = 1;
// //     if (n.args) n.args.forEach(walk);
// //   };
// //   walk(node);
// //   return max;
// // }

// // // ============================================================
// // // PARITY / PERIODICITY
// // // ============================================================
// // function detectParity(fn) {
// //   const xs = [0.3, 0.7, 1.4, 2.1, 3.5, 5.2];
// //   let even = true, odd = true;
// //   for (const x of xs) {
// //     const yp = safe(fn, x), yn = safe(fn, -x);
// //     if (yp === null || yn === null) { even = odd = false; break; }
// //     if (Math.abs(yp - yn) > 1e-6) even = false;
// //     if (Math.abs(yp + yn) > 1e-6) odd = false;
// //   }
// //   return even ? 'even' : (odd ? 'odd' : 'neither');
// // }

// // function detectPeriod(fn) {
// //   const candidates = [
// //     { T: Math.PI,       label: '\u03C0' },
// //     { T: 2 * Math.PI,   label: '2\u03C0' },
// //     { T: Math.PI / 2,   label: '\u03C0/2' },
// //     { T: 1,             label: '1' },
// //     { T: 2,             label: '2' },
// //   ];
// //   const probes = [-3.7, -1.4, 0.6, 2.3, 4.1];
// //   for (const cand of candidates) {
// //     let ok = true;
// //     for (const x of probes) {
// //       const y1 = safe(fn, x);
// //       const y2 = safe(fn, x + cand.T);
// //       if (y1 === null || y2 === null) { ok = false; break; }
// //       if (Math.abs(y1 - y2) > 1e-4) { ok = false; break; }
// //     }
// //     if (ok) return { periodic: true, T: cand.T, label: cand.label };
// //   }
// //   return { periodic: false, T: null, label: null };
// // }

// // // ============================================================
// // // SAMPLING PASSES
// // // ============================================================
// // function sampleRange(fn, xMin, xMax, samples = 400) {
// //   let lo = Infinity, hi = -Infinity, missingAt = [];
// //   const step = (xMax - xMin) / samples;
// //   for (let i = 0; i <= samples; i++) {
// //     const x = xMin + i * step;
// //     const y = safe(fn, x);
// //     if (y === null) { missingAt.push(x); continue; }
// //     if (y < lo) lo = y;
// //     if (y > hi) hi = y;
// //   }
// //   return { lo, hi, missingAt };
// // }

// // function signIntervals(fn, roots, xMin, xMax) {
// //   const breaks = [xMin, ...roots, xMax];
// //   const out = [];
// //   for (let i = 0; i < breaks.length - 1; i++) {
// //     const a = breaks[i], b = breaks[i + 1];
// //     const mid = (a + b) / 2;
// //     const y = safe(fn, mid);
// //     const sign = y === null ? 'undef' : (y > 0 ? '+' : (y < 0 ? '-' : '0'));
// //     out.push({ from: a, to: b, sign });
// //   }
// //   return out;
// // }

// // function monotonicityIntervals(fn, extrema, xMin, xMax) {
// //   const breaks = [xMin, ...extrema.map(e => e.x), xMax];
// //   const out = [];
// //   const step = 1e-3;
// //   for (let i = 0; i < breaks.length - 1; i++) {
// //     const a = breaks[i], b = breaks[i + 1];
// //     const mid = (a + b) / 2;
// //     const yl = safe(fn, mid - step), yr = safe(fn, mid + step);
// //     if (yl === null || yr === null) { out.push({ from: a, to: b, dir: 'undef' }); continue; }
// //     out.push({ from: a, to: b, dir: yr > yl ? 'inc' : (yr < yl ? 'dec' : 'const') });
// //   }
// //   return out;
// // }

// // // ============================================================
// // // END BEHAVIOR
// // // ============================================================
// // function analyzeEnd(fn, sign) {
// //   const probes = [10, 100, 1000, 10000];
// //   const ys = [];
// //   for (const p of probes) {
// //     const y = safe(fn, sign * p);
// //     if (y === null) return { direction: 'oscillate', value: null };
// //     ys.push(y);
// //   }
// //   const diffs = [];
// //   for (let i = 1; i < ys.length; i++) diffs.push(Math.abs(ys[i] - ys[i - 1]));
// //   const shrinking = diffs[diffs.length - 1] < diffs[0] * 0.5;
// //   const lastDiffSmall = diffs[diffs.length - 1] < 1e-3;
// //   if (shrinking && lastDiffSmall) {
// //     return { direction: 'converge', value: ys[ys.length - 1] };
// //   }
// //   const growing = Math.abs(ys[ys.length - 1]) > Math.abs(ys[0]) * 5;
// //   if (growing) {
// //     return {
// //       direction: ys[ys.length - 1] > 0 ? 'diverge+' : 'diverge-',
// //       value: null,
// //     };
// //   }
// //   return { direction: 'oscillate', value: null };
// // }

// // // ============================================================
// // // MAIN PIPELINE BUILD
// // // ============================================================
// // export function buildPipeline(expression, opts = {}) {
// //   const xMin = opts.xMin ?? -10;
// //   const xMax = opts.xMax ?? 10;

// //   let node, fn, fnPrime, fnDoublePrime, derivStr, deriv2Str;
// //   try {
// //     node = parse(expression);
// //     fn = (x) => { try { return node.evaluate({ x }); } catch { return NaN; } };
// //     const d1 = derivative(node, 'x');
// //     derivStr = d1.toString();
// //     fnPrime = (x) => { try { return d1.evaluate({ x }); } catch { return NaN; } };
// //     const d2 = derivative(d1, 'x');
// //     deriv2Str = d2.toString();
// //     fnDoublePrime = (x) => { try { return d2.evaluate({ x }); } catch { return NaN; } };
// //   } catch (err) {
// //     return { error: err.message || String(err), expression };
// //   }

// //   const family = detectFamily(node);
// //   const roots = findRoots(fn, xMin, xMax);
// //   const extrema = findExtrema(fn, xMin, xMax);
// //   const inflections = findInflections(fn, xMin, xMax);
// //   const vertAsymptotes = findVerticalAsymptotes(fn, xMin, xMax);
// //   const parity = detectParity(fn);
// //   const period = detectPeriod(fn);
// //   const { lo, hi, missingAt } = sampleRange(fn, xMin, xMax);
// //   const sign = signIntervals(fn, roots, xMin, xMax);
// //   const mono = monotonicityIntervals(fn, extrema, xMin, xMax);
// //   const yInt = safe(fn, 0);

// //   const endRight = analyzeEnd(fn, +1);
// //   const endLeft  = analyzeEnd(fn, -1);
// //   const horizAsymptotes = [];
// //   if (endRight.direction === 'converge') horizAsymptotes.push({ y: endRight.value, side: 'right' });
// //   if (endLeft.direction === 'converge')  horizAsymptotes.push({ y: endLeft.value,  side: 'left'  });

// //   const continuous = (vertAsymptotes.length === 0) && (missingAt.length === 0);

// //   const concavityBreaks = [xMin, ...inflections.map(p => p.x), xMax];
// //   const concavity = [];
// //   for (let i = 0; i < concavityBreaks.length - 1; i++) {
// //     const a = concavityBreaks[i], b = concavityBreaks[i + 1];
// //     const mid = (a + b) / 2;
// //     const c = safe(fnDoublePrime, mid);
// //     concavity.push({ from: a, to: b, kind: c === null ? 'undef' : (c > 0 ? 'up' : (c < 0 ? 'down' : 'flat')) });
// //   }

// //   const unboundedAbove =
// //     endLeft.direction === 'diverge+' || endRight.direction === 'diverge+';
// //   const unboundedBelow =
// //     endLeft.direction === 'diverge-' || endRight.direction === 'diverge-';

// //   const extremaMinY = extrema.filter(e => e.kind === 'min').reduce(
// //     (acc, e) => e.y < acc ? e.y : acc, Infinity
// //   );
// //   const extremaMaxY = extrema.filter(e => e.kind === 'max').reduce(
// //     (acc, e) => e.y > acc ? e.y : acc, -Infinity
// //   );

// //   const analyticLo = unboundedBelow ? -Infinity :
// //     (isFinite(extremaMinY) ? extremaMinY : lo);
// //   const analyticHi = unboundedAbove ? +Infinity :
// //     (isFinite(extremaMaxY) ? extremaMaxY : hi);

// //   const bounded = isFinite(analyticLo) && isFinite(analyticHi);

// //   let symmetryAxis = null;
// //   if (parity === 'even') symmetryAxis = 0;
// //   else if (extrema.length === 1) symmetryAxis = extrema[0].x;

// //   const bounds = {
// //     lo: analyticLo,
// //     hi: analyticHi,
// //     bounded,
// //     sampledLo: lo,
// //     sampledHi: hi,
// //     loSource: unboundedBelow ? 'analytic' : (isFinite(extremaMinY) ? 'analytic' : 'sampled'),
// //     hiSource: unboundedAbove ? 'analytic' : (isFinite(extremaMaxY) ? 'analytic' : 'sampled'),
// //   };

// //   const monoDirs = new Set(mono.map(m => m.dir));
// //   monoDirs.delete('undef');
// //   const injective = monoDirs.size === 1;

// //   const allAsymptotes = [...vertAsymptotes];
// //   const missingSet = missingAt.slice(0, 3).map(x => x.toFixed(2));
// //   let domainStr;
// //   if (allAsymptotes.length > 0) {
// //     domainStr = `\u211D \\ {${allAsymptotes.map(x => x.toFixed(3)).join(', ')}}`;
// //   } else if (missingAt.length > 0) {
// //     domainStr = `\u211D \\ {${missingSet.join(', ')}${missingAt.length > 3 ? ', \u2026' : ''}}`;
// //   } else {
// //     domainStr = '\u211D';
// //   }

// //   let rangeStr;
// //   if (period.periodic && isFinite(analyticLo) && isFinite(analyticHi)) {
// //     rangeStr = `[${analyticLo.toFixed(3)}, ${analyticHi.toFixed(3)}]`;
// //   } else if (bounded) {
// //     rangeStr = `[${analyticLo.toFixed(3)}, ${analyticHi.toFixed(3)}]`;
// //   } else if (isFinite(analyticLo)) {
// //     rangeStr = `[${analyticLo.toFixed(3)}, +\u221E)`;
// //   } else if (isFinite(analyticHi)) {
// //     rangeStr = `(\u2212\u221E, ${analyticHi.toFixed(3)}]`;
// //   } else {
// //     rangeStr = '\u211D';
// //   }

// //   return {
// //     expression,
// //     formula: node.toString(),
// //     family,
// //     fn,
// //     fnPrime,    derivStr,
// //     fnDoublePrime, deriv2Str,
// //     domain: domainStr,
// //     range: rangeStr,
// //     codomain: '\u211D',
// //     parity,
// //     period,
// //     symmetryAxis,
// //     roots, extrema, inflections,
// //     asymptotes: vertAsymptotes,
// //     horizAsymptotes,
// //     yIntercept: yInt,
// //     sign, mono, concavity,
// //     bounded, bounds,
// //     continuous,
// //     endLeft, endRight,
// //     injective,
// //     xMin, xMax,
// //   };
// // }

// // // ============================================================
// // // STATE HOOK
// // // ============================================================
// // function useExplorerState(initial = {}) {
// //   const [expression, setExpression] = useState(initial.expression || '0.1x^2 - 2');
// //   const [activeTab, setActiveTab]   = useState('properties');
// //   const [density,   setDensity]     = useState('compact');
// //   const [view,      setView]        = useState('graph');

// //   const [overlays, setOverlays] = useState({
// //     fp: false, fpp: false, anti: false, inv: false,
// //   });
// //   const [annotations, setAnnotations] = useState({
// //     roots: true, extrema: true, inflect: false, asymp: false, tangent: true, area: false,
// //   });

// //   const [cursor, setCursor] = useState({ x: 0, y: 0 });
// //   const [viewport, setViewport] = useState({ xMin: -10, xMax: 10, yMin: -10, yMax: 10 });

// //   const [pinned, setPinned] = useState([]);

// //   const toggleOverlay = useCallback((k) => setOverlays(p => ({ ...p, [k]: !p[k] })), []);
// //   const toggleAnnot   = useCallback((k) => setAnnotations(p => ({ ...p, [k]: !p[k] })), []);
// //   const resetRail = useCallback(() => {
// //     setOverlays({ fp: false, fpp: false, anti: false, inv: false });
// //     setAnnotations({ roots: false, extrema: false, inflect: false, asymp: false, tangent: false, area: false });
// //   }, []);

// //   const pin = useCallback((card) => {
// //     setPinned(prev => {
// //       if (prev.some(p => p.id === card.id)) return prev;
// //       return [...prev, card];
// //     });
// //   }, []);
// //   const unpin = useCallback((id) => setPinned(p => p.filter(x => x.id !== id)), []);
// //   const isPinned = useCallback((id) => pinned.some(p => p.id === id), [pinned]);

// //   return {
// //     expression, setExpression,
// //     activeTab, setActiveTab,
// //     density, setDensity,
// //     view, setView,
// //     overlays, toggleOverlay,
// //     annotations, toggleAnnot,
// //     resetRail,
// //     cursor, setCursor,
// //     viewport, setViewport,
// //     pinned, setPinned, pin, unpin, isPinned,
// //   };
// // }

// // // ============================================================
// // // MAIN COMPONENT
// // // ============================================================
// // export function FunctionExplorer(props) {
// //   const {
// //     initialExpression = '0.1x^2 - 2',
// //     width  = '100%',
// //     height = 820,
// //     theoryBase     = '/functions',
// //     toolsBase      = '/visual-tools',
// //     calculusBase   = '/calculus',
// //     calculatorBase = 'https://calc.learnmathclass.com',
// //     onSearch,
// //     onSettings,
// //     onExport,
// //     onMaximize,
// //     onCompare,
// //     onAnimate,
// //   } = props;

// //   useEffect(() => { injectStyles(); }, []);

// //   const state = useExplorerState({ expression: initialExpression });

// //   const data = useMemo(
// //     () => buildPipeline(state.expression, { xMin: state.viewport.xMin, xMax: state.viewport.xMax }),
// //     [state.expression, state.viewport.xMin, state.viewport.xMax]
// //   );

// //   useEffect(() => {
// //     if (data.error || !data.fn) return;
// //     if (state.cursor.x === 0 && state.cursor.y === 0) {
// //       const x0 = 0;
// //       const y0 = safe(data.fn, x0);
// //       state.setCursor({ x: x0, y: y0 === null ? 0 : y0 });
// //     }
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [data.fn, data.error]);

// //   useEffect(() => {
// //     if (data.error || !data.fn) return;
// //     const y = safe(data.fn, state.cursor.x);
// //     if (y !== null && Math.abs(y - state.cursor.y) > 1e-9) {
// //       state.setCursor({ x: state.cursor.x, y });
// //     }
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [data.fn, state.cursor.x]);

// //   // Container ref for default Export / Maximize handlers.
// //   const containerRef = useRef(null);

// //   const defaultOnMaximize = useCallback(() => {
// //     const el = containerRef.current;
// //     if (!el || typeof document === 'undefined') return;
// //     if (document.fullscreenElement) {
// //       document.exitFullscreen && document.exitFullscreen();
// //     } else {
// //       el.requestFullscreen && el.requestFullscreen();
// //     }
// //   }, []);

// //   const defaultOnExport = useCallback(() => {
// //     const el = containerRef.current;
// //     if (!el || typeof document === 'undefined') return;
// //     const canvas = el.querySelector('canvas');
// //     if (!canvas) {
// //       // eslint-disable-next-line no-console
// //       console.warn('FunctionExplorer: no canvas found to export.');
// //       return;
// //     }
// //     try {
// //       const url = canvas.toDataURL('image/png');
// //       const link = document.createElement('a');
// //       link.download = `function-explorer-${Date.now()}.png`;
// //       link.href = url;
// //       document.body.appendChild(link);
// //       link.click();
// //       document.body.removeChild(link);
// //     } catch (err) {
// //       // eslint-disable-next-line no-console
// //       console.warn('FunctionExplorer: canvas export failed.', err);
// //     }
// //   }, []);

// //   const engineFunctions = useMemo(() => {
// //     if (data.error) return [];
// //     const list = [
// //       { fn: data.fn, color: T.c.blue, label: 'f', formula: `f(x) = ${data.formula}`, visible: true, stroke: 1.75 },
// //     ];
// //     if (state.overlays.fp && data.fnPrime) {
// //       list.push({ fn: data.fnPrime, color: T.c.slate, label: "f'", formula: `f'(x) = ${data.derivStr}`, visible: true, stroke: 1.5 });
// //     }
// //     if (state.overlays.fpp && data.fnDoublePrime) {
// //       list.push({ fn: data.fnDoublePrime, color: T.c.slateD, label: 'f\u2033', formula: `f''(x) = ${data.deriv2Str}`, visible: true, stroke: 1.4 });
// //     }
// //     if (state.overlays.anti && data.fn) {
// //       const F = makeAntiderivative(data.fn, state.viewport.xMin, state.viewport.xMax);
// //       list.push({ fn: F, color: T.c.blueL, label: 'F', formula: 'F(x) = \u222Bf(x)dx', visible: true, stroke: 1.4 });
// //     }
// //     if (state.overlays.inv && data.fn && data.injective) {
// //       const invFn = makeInverse(data.fn, state.viewport.xMin, state.viewport.xMax);
// //       if (invFn) {
// //         list.push({
// //           fn: invFn, color: T.c.blueD, label: 'f\u207B\u00B9',
// //           formula: 'f\u207B\u00B9(x)  (numeric, reflection across y = x)',
// //           visible: true, stroke: 1.4,
// //         });
// //       }
// //     }
// //     return list;
// //   }, [data, state.overlays, state.viewport.xMin, state.viewport.xMax]);

// //   const shadedRegion = useMemo(() => {
// //     if (!state.annotations.area || data.error) return [];
// //     let xStart, xEnd;
// //     if (data.roots && data.roots.length >= 2) {
// //       xStart = data.roots[0];
// //       xEnd   = data.roots[1];
// //     } else {
// //       const span = state.viewport.xMax - state.viewport.xMin;
// //       xStart = state.viewport.xMin + span * 0.3;
// //       xEnd   = state.viewport.xMin + span * 0.7;
// //     }
// //     return [{ type: 'underCurve', functionIndex: 0, xStart, xEnd }];
// //   }, [state.annotations.area, data, state.viewport]);

// //   const engineAnnotations = useMemo(() => ({
// //     showRoots:       state.annotations.roots,
// //     showExtrema:     state.annotations.extrema,
// //     showInflections: state.annotations.inflect,
// //     showAsymptotes:  state.annotations.asymp,
// //     tangentAt:       state.annotations.tangent ? { functionIndex: 0, x: state.cursor.x } : null,
// //     shadedRegions:   shadedRegion,
// //   }), [state.annotations, state.cursor.x, shadedRegion]);

// //   const handleEngineHover = useCallback((info) => {
// //     if (typeof info?.x === 'number' && typeof info?.y === 'number') {
// //       state.setCursor({ x: info.x, y: info.y });
// //     }
// //   }, [state]);

// //   const handleEngineViewport = useCallback((vp) => {
// //     state.setViewport(vp);
// //   }, [state]);

// //   const ctxValue = useMemo(() => ({
// //     pin: state.pin,
// //     unpin: state.unpin,
// //     isPinned: state.isPinned,
// //     density: state.density,
// //     routes: { theoryBase, toolsBase, calculusBase, calculatorBase },
// //   }), [state.pin, state.unpin, state.isPinned, state.density, theoryBase, toolsBase, calculusBase, calculatorBase]);

// //   const modeLabel = state.view === 'graph' ? 'graph \u00B7 pan/zoom'
// //                   : state.view === 'table' ? 'numeric table'
// //                   : 'mapping diagram';

// //   return (
// //     <ExplorerContext.Provider value={ctxValue}>
// //       <div
// //         ref={containerRef}
// //         style={{
// //           background: T.bg.panel,
// //           border: `1px solid ${T.border.soft}`,
// //           borderRadius: T.radius.lg,
// //           boxShadow: T.shadow.s2,
// //           overflow: 'hidden',
// //           display: 'grid',
// //           gridTemplateRows: `${T.height.header}px ${T.height.funcbar}px 1fr ${T.height.insights}px ${T.height.status}px`,
// //           width,
// //           height,
// //           maxHeight: 'calc(100vh - 40px)',
// //           fontFamily: T.font.sans,
// //           fontSize: 13,
// //           color: T.text.body,
// //         }}
// //       >
// //         <Header
// //           brandName="Function Explorer"
// //           formula={data.error ? '(invalid)' : data.formula}
// //           formulaLabel={data.error ? 'error' : 'f(x) ='}
// //           onSearch={onSearch}
// //           onSettings={onSettings}
// //           onExport={onExport || defaultOnExport}
// //           onMaximize={onMaximize || defaultOnMaximize}
// //         />

// //         <Funcbar
// //           expression={state.expression}
// //           onExpressionChange={state.setExpression}
// //           family={data.error ? null : data.family}
// //           onCompare={onCompare}
// //           onAnimate={onAnimate}
// //         />

// //         <div
// //           style={{
// //             display: 'grid',
// //             gridTemplateColumns: `${T.width.rail}px 1fr ${T.width.rtabs}px ${T.width.rpanel}px`,
// //             minHeight: 0,
// //             borderBottom: `1px solid ${T.border.soft}`,
// //           }}
// //         >
// //           <LeftRail
// //             overlays={state.overlays}
// //             annotations={state.annotations}
// //             onToggleOverlay={state.toggleOverlay}
// //             onToggleAnnot={state.toggleAnnot}
// //             onReset={state.resetRail}
// //             invDisabled={!data.injective}
// //           />

// //           <div style={{ position: 'relative', background: T.bg.graph, overflow: 'hidden' }}>
// //             <GraphViewSwitch value={state.view} onChange={state.setView} />

// //             {state.view === 'graph' && !data.error && VisualizerCore && (
// //               <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
// //                 <VisualizerCore
// //                   functions={engineFunctions}
// //                   xMin={state.viewport.xMin}
// //                   xMax={state.viewport.xMax}
// //                   yMin={state.viewport.yMin}
// //                   yMax={state.viewport.yMax}
// //                   width={700}
// //                   height={520}
// //                   showGrid
// //                   showMinorGrid
// //                   showAxes
// //                   showAxisLabels
// //                   showCrosshair
// //                   showCurveTooltip
// //                   labelMode="legend"
// //                   legendPosition="top-left"
// //                   {...engineAnnotations}
// //                   onHover={handleEngineHover}
// //                   onViewportChange={handleEngineViewport}
// //                   styles={EXPLORER_STYLES}
// //                 />
// //               </div>
// //             )}

// //             {state.view === 'graph' && !data.error && !VisualizerCore && (
// //               <div style={{ padding: 24, color: T.text.muted, fontFamily: T.font.mono, fontSize: 12, lineHeight: 1.6 }}>
// //                 VisualizerCore is undefined. Check the import in
// //                 {' '}<code style={{ color: T.text.strong }}>FunctionExplorer.jsx</code>:
// //                 the path may be wrong, or the component may be a default export
// //                 (use <code style={{ color: T.text.strong }}>{'import VisualizerCore from ...'}</code>{' '}
// //                 instead of <code style={{ color: T.text.strong }}>{'import { VisualizerCore } from ...'}</code>).
// //               </div>
// //             )}

// //             {state.view === 'table' && !data.error && (
// //               <NumericTable
// //                 fn={data.fn}
// //                 xMin={state.viewport.xMin}
// //                 xMax={state.viewport.xMax}
// //               />
// //             )}

// //             {state.view === 'map' && !data.error && (
// //               <MappingDiagram
// //                 fn={data.fn}
// //                 xMin={state.viewport.xMin}
// //                 xMax={state.viewport.xMax}
// //               />
// //             )}

// //             {data.error && (
// //               <div style={{ padding: 24, color: T.text.muted, fontFamily: T.font.mono, fontSize: 12 }}>
// //                 parse error: {data.error}
// //               </div>
// //             )}
// //           </div>

// //           <RightTabs active={state.activeTab} onChange={state.setActiveTab} />

// //           <RightPanel
// //             title={titleFor(state.activeTab)}
// //             subtitle={subtitleFor(state.activeTab)}
// //             density={state.density}
// //             onDensityChange={state.setDensity}
// //           >
// //             {state.activeTab === 'properties' && (
// //               <>
// //                 <AboutPanel data={data} />
// //                 <DomainRangePanel data={data} />
// //                 <ZerosPanel data={data} />
// //                 <SymmetryPanel data={data} />
// //                 <ContinuityPanel data={data} />
// //                 <AsymptotesPanel data={data} />
// //                 <MonotonicityPanel data={data} />
// //                 <ConcavityPanel data={data} />
// //                 <BoundednessPanel data={data} />
// //                 <InvertibilityPanel data={data} />
// //               </>
// //             )}
// //             {state.activeTab === 'transforms' && (
// //               <>
// //                 <ParentTransformsPanel data={data} />
// //                 <OperationsPanel data={data} />
// //               </>
// //             )}
// //             {state.activeTab === 'calculus' && (
// //               <>
// //                 <DerivativePanel    data={data} cursor={state.cursor} />
// //                 <SecondDerivativePanel data={data} />
// //                 <AntiderivativePanel data={data} viewport={state.viewport} />
// //                 <TangentApproxPanel data={data} cursor={state.cursor} />
// //               </>
// //             )}
// //             {state.activeTab === 'theory' && (
// //               <TheoryReadingList data={data} />
// //             )}
// //           </RightPanel>
// //         </div>

// //         <InsightsStrip
// //           defaults={defaultInsightsFor(data)}
// //           pinned={state.pinned}
// //           onUnpin={state.unpin}
// //         />

// //         <StatusBar
// //           cursor={state.cursor}
// //           viewport={state.viewport}
// //           mode={modeLabel}
// //         />
// //       </div>
// //     </ExplorerContext.Provider>
// //   );
// // }

// // // ============================================================
// // // HELPERS
// // // ============================================================
// // function titleFor(tab) {
// //   switch (tab) {
// //     case 'properties': return 'Properties';
// //     case 'transforms': return 'Transformations & ops';
// //     case 'calculus':   return 'Calculus bridge';
// //     case 'theory':     return 'Theory & reading';
// //     default: return tab;
// //   }
// // }
// // function subtitleFor(tab) {
// //   switch (tab) {
// //     case 'properties': return '10 aspects \u00B7 excerpts \u00B7 links out';
// //     case 'transforms': return 'parent / shifts / scales / compose';
// //     case 'calculus':   return 'mention only \u00B7 links to /calculus';
// //     case 'theory':     return 'curated for this function';
// //     default: return '';
// //   }
// // }

// // function defaultInsightsFor(data) {
// //   if (!data || data.error) return [];
// //   const cards = [];
// //   cards.push({ id: 'domain', label: 'Domain', value: data.domain, sub: '' });
// //   if (data.roots.length === 1) {
// //     cards.push({ id: 'roots', label: 'Root', value: data.roots[0].toFixed(3), sub: '' });
// //   } else if (data.roots.length > 1) {
// //     const sample = data.roots.slice(0, 2).map(r => r.toFixed(2)).join(', ');
// //     cards.push({ id: 'roots', label: 'Roots', value: `${data.roots.length} roots`, sub: sample });
// //   }
// //   if (data.extrema.length > 0) {
// //     const e = data.extrema[0];
// //     cards.push({ id: 'ext0', label: e.kind === 'min' ? 'Min' : 'Max', value: `(${e.x.toFixed(2)}, ${e.y.toFixed(2)})`, sub: '' });
// //   }
// //   cards.push({ id: 'parity', label: 'Symmetry', value: data.parity, sub: data.period.periodic ? `period ${data.period.label}` : '' });
// //   cards.push({ id: 'continuity', label: 'Continuity', value: data.continuous ? 'continuous' : 'has gaps', sub: '' });
// //   return cards;
// // }

// // function makeAntiderivative(f, xMin, xMax) {
// //   const samples = 400;
// //   const step = (xMax - xMin) / samples;
// //   const xs = [];
// //   const ys = [];
// //   let acc = 0;
// //   let prevY = safe(f, xMin);
// //   xs.push(xMin); ys.push(0);
// //   for (let i = 1; i <= samples; i++) {
// //     const x = xMin + i * step;
// //     const y = safe(f, x);
// //     if (y !== null && prevY !== null) acc += (y + prevY) / 2 * step;
// //     xs.push(x); ys.push(acc);
// //     prevY = y;
// //   }
// //   return (x) => {
// //     if (x <= xMin) return 0;
// //     if (x >= xMax) return ys[ys.length - 1];
// //     const t = (x - xMin) / step;
// //     const i = Math.floor(t);
// //     const frac = t - i;
// //     return ys[i] + (ys[i + 1] - ys[i]) * frac;
// //   };
// // }

// // function makeInverse(f, xMin, xMax) {
// //   const samples = 400;
// //   const step = (xMax - xMin) / samples;
// //   const pts = [];
// //   for (let i = 0; i <= samples; i++) {
// //     const u = xMin + i * step;
// //     const v = safe(f, u);
// //     if (v !== null) pts.push([v, u]);
// //   }
// //   if (pts.length < 2) return null;
// //   pts.sort((a, b) => a[0] - b[0]);
// //   return (x) => {
// //     if (x < pts[0][0] || x > pts[pts.length - 1][0]) return NaN;
// //     let lo = 0, hi = pts.length - 1;
// //     while (hi - lo > 1) {
// //       const mid = (lo + hi) >> 1;
// //       if (pts[mid][0] <= x) lo = mid; else hi = mid;
// //     }
// //     const [x0, u0] = pts[lo], [x1, u1] = pts[hi];
// //     if (x1 === x0) return u0;
// //     return u0 + (u1 - u0) * (x - x0) / (x1 - x0);
// //   };
// // }

// // export default FunctionExplorer;


// // ============================================================
// // FunctionExplorer.jsx  (v4)
// // Changes from v3:
// //   - New `links` prop: fully granular per-link override tree.
// //     Shape: { theory?, tools?, calculus?, calculator? } — each a flat
// //     map of aspect-key -> absolute URL. Any missing key falls back to
// //     `${<base>}/<default-slug>` built from theoryBase/toolsBase/
// //     calculusBase/calculatorBase.
// //   - buildDefaultLinks() enumerates every link the Explorer exposes,
// //     grouped by destination. mergeLinks() shallow-merges each group so
// //     partial overrides are safe (e.g. links={{ tools:{ domain:'/x' } }}
// //     leaves every other link at its default).
// //   - Context now provides `links` (resolved tree) in addition to
// //     `routes` (base paths). Panels should read ctx.links.<group>.<key>
// //     directly; ctx.routes stays for anything still building URLs by
// //     concatenation.
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
// // LINK SYSTEM
// // ============================================================
// // Every URL the Explorer emits, grouped by destination site.
// // Each key is the aspect slug; overrides are shallow-merged per group.
// export function buildDefaultLinks(bases) {
//   const { theoryBase, toolsBase, calculusBase, calculatorBase } = bases;
//   return {
//     // Theory pages on the portal (learnmathclass.com/functions/*)
//     theory: {
//       about:           `${theoryBase}/about`,
//       domain:          `${theoryBase}/domain`,
//       range:           `${theoryBase}/range`,
//       codomain:        `${theoryBase}/codomain`,
//       zeros:           `${theoryBase}/zeros`,
//       yIntercept:      `${theoryBase}/y-intercept`,
//       symmetry:        `${theoryBase}/symmetry`,
//       parity:          `${theoryBase}/parity`,
//       periodicity:     `${theoryBase}/periodicity`,
//       continuity:      `${theoryBase}/continuity`,
//       asymptotes:      `${theoryBase}/asymptotes`,
//       monotonicity:    `${theoryBase}/monotonicity`,
//       concavity:       `${theoryBase}/concavity`,
//       inflection:      `${theoryBase}/inflection-points`,
//       extrema:         `${theoryBase}/extrema`,
//       boundedness:     `${theoryBase}/boundedness`,
//       invertibility:   `${theoryBase}/invertibility`,
//       inverse:         `${theoryBase}/inverse`,
//       transformations: `${theoryBase}/transformations`,
//       composition:     `${theoryBase}/composition`,
//       operations:      `${theoryBase}/operations`,
//       endBehavior:     `${theoryBase}/end-behavior`,
//       piecewise:       `${theoryBase}/piecewise`,
//     },
//     // Per-aspect visualizers under /functions/visual-tools/*
//     tools: {
//       asymptotes:      `${toolsBase}/asymptotes`,
//       composition:     `${toolsBase}/composition`,
//       domain:          `${toolsBase}/domain`,
//       inverse:         `${toolsBase}/inverse-function`,
//       piecewise:       `${toolsBase}/piecewise`,
//       range:           `${toolsBase}/range`,
//       reflections:     `${toolsBase}/reflections`,
//       symmetry:        `${toolsBase}/symmetry`,
//       tangentLine:     `${toolsBase}/tangent-line`,
//       transformations: `${toolsBase}/transformations`,
//     },
//     // Calculus bridge pages under /calculus/*
//     calculus: {
//       derivative:       `${calculusBase}/derivative`,
//       secondDerivative: `${calculusBase}/second-derivative`,
//       antiderivative:   `${calculusBase}/antiderivative`,
//       integral:         `${calculusBase}/integral`,
//       tangentLine:      `${calculusBase}/tangent-line`,
//       linearization:    `${calculusBase}/linearization`,
//       taylor:           `${calculusBase}/taylor-series`,
//       limits:           `${calculusBase}/limits`,
//       criticalPoints:   `${calculusBase}/critical-points`,
//       meanValue:        `${calculusBase}/mean-value-theorem`,
//     },
//     // Per-aspect calculators on the niche subdomain
//     calculator: {
//       domain:      `${calculatorBase}/domain`,
//       range:       `${calculatorBase}/range`,
//       roots:       `${calculatorBase}/roots`,
//       inverse:     `${calculatorBase}/inverse`,
//       derivative:  `${calculatorBase}/derivative`,
//       integral:    `${calculatorBase}/integral`,
//       asymptotes:  `${calculatorBase}/asymptotes`,
//       extrema:     `${calculatorBase}/extrema`,
//       inflection:  `${calculatorBase}/inflection`,
//       symmetry:    `${calculatorBase}/symmetry`,
//       composition: `${calculatorBase}/composition`,
//       period:      `${calculatorBase}/period`,
//     },
//   };
// }

// // Shallow-merge each group so partial overrides preserve every other key.
// export function mergeLinks(defaults, overrides) {
//   if (!overrides) return defaults;
//   const out = {};
//   const groups = new Set([...Object.keys(defaults), ...Object.keys(overrides)]);
//   for (const g of groups) {
//     out[g] = { ...(defaults[g] || {}), ...(overrides[g] || {}) };
//   }
//   return out;
// }

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
//     toolsBase:      '/functions/visual-tools',
//     calculusBase:   '/calculus',
//     calculatorBase: 'https://calc.learnmathclass.com',
//   },
//   links: buildDefaultLinks({
//     theoryBase:     '/functions',
//     toolsBase:      '/functions/visual-tools',
//     calculusBase:   '/calculus',
//     calculatorBase: 'https://calc.learnmathclass.com',
//   }),
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
//     toolsBase      = '/functions/visual-tools',
//     calculusBase   = '/calculus',
//     calculatorBase = 'https://calc.learnmathclass.com',
//     links,   // NEW: fully granular per-link override tree
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

//   // --- resolved link tree: defaults from base paths, then user overrides ---
//   const resolvedLinks = useMemo(
//     () => mergeLinks(
//       buildDefaultLinks({ theoryBase, toolsBase, calculusBase, calculatorBase }),
//       links,
//     ),
//     [theoryBase, toolsBase, calculusBase, calculatorBase, links],
//   );

//   const ctxValue = useMemo(() => ({
//     pin: state.pin,
//     unpin: state.unpin,
//     isPinned: state.isPinned,
//     density: state.density,
//     routes: { theoryBase, toolsBase, calculusBase, calculatorBase },
//     links: resolvedLinks,
//   }), [
//     state.pin, state.unpin, state.isPinned, state.density,
//     theoryBase, toolsBase, calculusBase, calculatorBase,
//     resolvedLinks,
//   ]);

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
// v1 engine (audit fixes):
//   - singularities are classified (pole / hole / jump / domain
//     boundary) before roots are accepted, so a sign change across a
//     pole is never reported as a root;
//   - even poles (1/x², sec-type) are found by refining local maxima
//     of |f|;
//   - extrema and inflections next to a singularity are discarded;
//   - range is built per continuous piece and unioned, with open ends
//     where the function only approaches a value;
//   - the fundamental period is searched (π-multiples, rationals, then
//     a numeric scan), smallest first;
//   - the pipeline runs on a fixed analysis window, not the viewport.
// ============================================================
function safe(f, x) {
  try {
    const y = f(x);
    return (typeof y === 'number' && isFinite(y)) ? y : null;
  } catch { return null; }
}

const BIG = 1e6;          // |f| above this near a point → treated as ∞
const ZERO = 1e-10;       // |f| below this → zero

// Snap numerically-found x values to 0, integers and π/12 multiples.
function snapX(x) {
  if (Math.abs(x) < 1e-9) return 0;
  const r = Math.round(x);
  if (Math.abs(x - r) < 1e-7) return r;
  const m = x / Math.PI;
  for (const d of [1, 2, 3, 4, 6, 12]) {
    const n = m * d;
    if (Math.abs(n - Math.round(n)) < 1e-7) return (Math.round(n) * Math.PI) / d;
  }
  return x;
}

// Label an x value exactly when it is a π-fraction or an integer.
function labelX(x) {
  if (Math.abs(x) < 1e-9) return '0';
  const m = x / Math.PI;
  for (const d of [1, 2, 3, 4, 6, 12]) {
    const n = m * d;
    if (Math.abs(n - Math.round(n)) < 1e-7) {
      const k = Math.round(n);
      const sign = k < 0 ? '\u2212' : '';
      const a = Math.abs(k);
      const num = a === 1 ? '' : String(a);
      return d === 1 ? `${sign}${num}\u03C0` : `${sign}${num}\u03C0/${d}`;
    }
  }
  const r = Math.round(x);
  if (Math.abs(x - r) < 1e-7) return String(r);
  return x.toFixed(3);
}

function labelPeriod(T) {
  const m = T / Math.PI;
  for (const d of [1, 2, 3, 4, 5, 6, 8, 12]) {
    const n = m * d;
    if (Math.abs(n - Math.round(n)) < 1e-9 && Math.round(n) > 0) {
      const k = Math.round(n);
      const num = k === 1 ? '' : String(k);
      return d === 1 ? `${num}\u03C0` : `${num}\u03C0/${d}`;
    }
  }
  for (const d of [1, 2, 3, 4, 5, 6, 8]) {
    const n = T * d;
    if (Math.abs(n - Math.round(n)) < 1e-9) return d === 1 ? String(Math.round(n)) : `${Math.round(n)}/${d}`;
  }
  return `\u2248 ${T.toFixed(4)}`;
}

function dedupe(xs, eps) {
  const s = [...xs].sort((a, b) => a - b);
  const out = [];
  for (const x of s) if (!out.length || Math.abs(x - out[out.length - 1]) > eps) out.push(x);
  return out;
}

// ---------- pass 1: sample the window ----------
function sampleGrid(fn, xMin, xMax, N) {
  const step = (xMax - xMin) / N;
  const xs = new Array(N + 1);
  const ys = new Array(N + 1);
  for (let i = 0; i <= N; i++) {
    const x = xMin + i * step;
    xs[i] = x;
    ys[i] = safe(fn, x);
  }
  return { xs, ys, step };
}

// Boundary between a defined point xd and an undefined point xu.
function bisectBoundary(fn, xd, xu) {
  let a = xd, b = xu;
  for (let j = 0; j < 70; j++) {
    const m = (a + b) / 2;
    if (safe(fn, m) === null) b = m; else a = m;
  }
  return { x: (a + b) / 2, inside: a };
}

// Does |f| grow without bound approaching x from side dir (+1 right, −1 left)?
// Monotone growth that is either huge or keeps adding (log-type) counts.
function blowsUp(fn, x, dir) {
  const sc = Math.max(1, Math.abs(x));
  const v = [];
  for (const d of [1e-3, 1e-5, 1e-7, 1e-9, 1e-11]) {
    const y = safe(fn, x + dir * d * sc);
    if (y === null) return false;
    v.push(Math.abs(y));
  }
  for (let i = 1; i < v.length; i++) if (!(v[i] > v[i - 1])) return false;
  return v[v.length - 1] > BIG || v[v.length - 1] - v[0] > 8;
}

// Classify a point singularity at s from its one-sided behaviour.
function classifyPoint(fn, s) {
  const e = 1e-7 * Math.max(1, Math.abs(s));
  const yl = safe(fn, s - e), yr = safe(fn, s + e);
  if (blowsUp(fn, s, -1) || blowsUp(fn, s, +1)) return 'pole';
  if (yl !== null && yr !== null && Math.abs(yl - yr) < 1e-4 * (1 + Math.abs(yl))) return 'hole';
  return 'jump';
}

// ---------- pass 2: singularities and domain gaps ----------
function findSingularities(fn, grid) {
  const { xs, ys, step } = grid;
  const N = xs.length - 1;
  const points = [];     // { x, kind: 'pole'|'hole'|'jump' }
  const gaps = [];       // { from, to, fromAsym, toAsym, fromEdge, toEdge }

  // runs of undefined samples
  let i = 0;
  while (i <= N) {
    if (ys[i] !== null) { i++; continue; }
    let j = i;
    while (j + 1 <= N && ys[j + 1] === null) j++;
    const hasL = i - 1 >= 0, hasR = j + 1 <= N;
    if (hasL && hasR && j - i <= 2) {
      const bl = bisectBoundary(fn, xs[i - 1], xs[i]).x;
      const br = bisectBoundary(fn, xs[j + 1], xs[j]).x;
      const s = snapX((bl + br) / 2);
      points.push({ x: s, kind: classifyPoint(fn, s) });
    } else {
      const g = { from: xs[i], to: xs[j], fromAsym: false, toAsym: false, fromEdge: !hasL, toEdge: !hasR };
      if (hasL) {
        const b = bisectBoundary(fn, xs[i - 1], xs[i]);
        g.from = snapX(b.x);
        g.fromAsym = blowsUp(fn, g.from, -1);
        g.fromClosed = safe(fn, g.from) !== null;
      }
      if (hasR) {
        const b = bisectBoundary(fn, xs[j + 1], xs[j]);
        g.to = snapX(b.x);
        g.toAsym = blowsUp(fn, g.to, +1);
        g.toClosed = safe(fn, g.to) !== null;
      }
      gaps.push(g);
    }
    i = j + 1;
  }

  // odd poles and jumps: sign changes whose bisection ends on huge values
  const near = (x) => points.some((p) => Math.abs(p.x - x) < 2 * step);
  for (let k = 0; k < N; k++) {
    const y1 = ys[k], y2 = ys[k + 1];
    if (y1 === null || y2 === null || y1 * y2 >= 0) continue;
    let a = xs[k], b = xs[k + 1], ya = y1;
    let undef = false;
    for (let t = 0; t < 90; t++) {
      const m = (a + b) / 2;
      const ym = safe(fn, m);
      if (ym === null) { undef = true; break; }
      if (ym === 0) { a = b = m; break; }
      if ((ym > 0) === (ya > 0)) { a = m; ya = ym; } else b = m;
    }
    if (undef) continue; // handled by the undefined-run pass
    const fa = safe(fn, a), fb = safe(fn, b);
    const big = fa !== null && fb !== null && Math.abs(fa) > BIG && Math.abs(fb) > BIG;
    const x = snapX((a + b) / 2);
    if (big && !near(x)) points.push({ x, kind: 'pole' });
    else if (!big && fa !== null && fb !== null && Math.min(Math.abs(fa), Math.abs(fb)) > 1e-3 && !near(x)) {
      points.push({ x, kind: 'jump' });
    }
  }

  // even poles: local maxima of |f| that grow without bound
  for (let k = 1; k < N; k++) {
    const y0 = ys[k - 1], y1 = ys[k], y2 = ys[k + 1];
    if (y0 === null || y1 === null || y2 === null) continue;
    const a1 = Math.abs(y1);
    if (!(a1 > 100 && a1 >= Math.abs(y0) && a1 >= Math.abs(y2))) continue;
    let a = xs[k - 1], b = xs[k + 1];
    for (let t = 0; t < 120; t++) {
      const m1 = a + (b - a) / 3, m2 = b - (b - a) / 3;
      const f1 = safe(fn, m1), f2 = safe(fn, m2);
      const v1 = f1 === null ? Infinity : Math.abs(f1);
      const v2 = f2 === null ? Infinity : Math.abs(f2);
      if (v1 < v2) a = m1; else b = m2;
    }
    const x = snapX((a + b) / 2);
    const e = 1e-7 * Math.max(1, Math.abs(x));
    const yl = safe(fn, x - e), yr = safe(fn, x + e);
    const huge = (yl === null || Math.abs(yl) > BIG) && (yr === null || Math.abs(yr) > BIG);
    if (huge && !near(x)) points.push({ x, kind: 'pole' });
  }

  points.sort((p, q) => p.x - q.x);
  return { points, gaps };
}

// ---------- pass 3: roots ----------
function findRootsV1(fn, grid, sing) {
  const { xs, ys, step } = grid;
  const N = xs.length - 1;
  const bad = (x) => sing.points.some((p) => Math.abs(p.x - x) < 2 * step);
  const roots = [];

  for (let k = 0; k <= N; k++) {
    const y = ys[k];
    if (y !== null && Math.abs(y) < ZERO && !bad(xs[k])) roots.push(xs[k]);
  }
  for (let k = 0; k < N; k++) {
    const y1 = ys[k], y2 = ys[k + 1];
    if (y1 === null || y2 === null || y1 * y2 >= 0) continue;
    let a = xs[k], b = xs[k + 1], ya = y1;
    for (let t = 0; t < 90; t++) {
      const m = (a + b) / 2;
      const ym = safe(fn, m);
      if (ym === null) break;
      if (ym === 0) { a = b = m; break; }
      if ((ym > 0) === (ya > 0)) { a = m; ya = ym; } else b = m;
    }
    const x = (a + b) / 2;
    const fx = safe(fn, x);
    if (fx !== null && Math.abs(fx) < 1e-6 && !bad(x)) roots.push(x);
  }
  // touching roots: local minima of |f| that reach zero
  for (let k = 1; k < N; k++) {
    const y0 = ys[k - 1], y1 = ys[k], y2 = ys[k + 1];
    if (y0 === null || y1 === null || y2 === null) continue;
    const a1 = Math.abs(y1);
    if (!(a1 < 1e-2 && a1 <= Math.abs(y0) && a1 <= Math.abs(y2)) || y0 * y2 < 0) continue;
    let a = xs[k - 1], b = xs[k + 1];
    for (let t = 0; t < 120; t++) {
      const m1 = a + (b - a) / 3, m2 = b - (b - a) / 3;
      const f1 = safe(fn, m1), f2 = safe(fn, m2);
      const v1 = f1 === null ? Infinity : Math.abs(f1);
      const v2 = f2 === null ? Infinity : Math.abs(f2);
      if (v1 > v2) a = m1; else b = m2;
    }
    const x = (a + b) / 2;
    const fx = safe(fn, x);
    if (fx !== null && Math.abs(fx) < 1e-9 && !bad(x)) roots.push(x);
  }
  // closed domain boundaries that are zeros (e.g. √x at 0)
  for (const g of sing.gaps) {
    for (const b of [g.from, g.to]) {
      const y = safe(fn, b);
      if (y !== null && Math.abs(y) < ZERO) roots.push(b);
    }
  }
  return dedupe(roots.map(snapX), step / 2);
}

// ---------- pass 4: critical and inflection points ----------
function signChangesOf(g, fn, grid, sing, kindOf) {
  const { xs, step } = grid;
  const N = xs.length - 1;
  const bad = (x) =>
    sing.points.some((p) => Math.abs(p.x - x) < 3 * step) ||
    sing.gaps.some((q) => x > q.from - 3 * step && x < q.to + 3 * step);
  const vals = xs.map((x) => safe(g, x));
  const out = [];
  for (let k = 1; k < N; k++) {
    const d0 = vals[k - 1], d = vals[k], d2 = vals[k + 1];
    if (d === null || d0 === null || d2 === null) continue;
    if (Math.abs(d) < 1e-13 && d0 * d2 < 0) {
      const x = snapX(xs[k]);
      if (bad(x)) continue;
      const y = safe(fn, x);
      if (y === null || Math.abs(y) > BIG) continue;
      out.push({ x, y, ...(kindOf ? { kind: kindOf(d0) } : {}) });
      vals[k] = null; // consumed: keep the pairwise scan from counting it again
    }
  }
  for (let k = 0; k < N; k++) {
    const d1 = vals[k], d2 = vals[k + 1];
    if (d1 === null || d2 === null || d1 * d2 >= 0) continue;
    let a = xs[k], b = xs[k + 1], da = d1;
    for (let t = 0; t < 70; t++) {
      const m = (a + b) / 2;
      const dm = safe(g, m);
      if (dm === null) break;
      if (dm === 0) { a = b = m; break; }
      if ((dm > 0) === (da > 0)) { a = m; da = dm; } else b = m;
    }
    const x = snapX((a + b) / 2);
    if (bad(x)) continue;
    const y = safe(fn, x);
    if (y === null || Math.abs(y) > BIG) continue;
    out.push({ x, y, ...(kindOf ? { kind: kindOf(d1) } : {}) });
  }
  return out.sort((p, q) => p.x - q.x);
}

function numericDeriv(fn, h) {
  return (x) => {
    const a = safe(fn, x + h), b = safe(fn, x - h);
    return (a !== null && b !== null) ? (a - b) / (2 * h) : NaN;
  };
}
function numericDeriv2(fn, h) {
  return (x) => {
    const a = safe(fn, x + h), b = safe(fn, x), c = safe(fn, x - h);
    return (a !== null && b !== null && c !== null) ? (a - 2 * b + c) / (h * h) : NaN;
  };
}

// ---------- pass 5: parity and period ----------
function detectParity(fn) {
  const xs = [0.3, 0.7, 1.4, 2.1, 3.5, 5.2, 6.9];
  let even = true, odd = true, used = 0;
  for (const x of xs) {
    const yp = safe(fn, x), yn = safe(fn, -x);
    if (yp === null && yn === null) continue;
    if (yp === null || yn === null) return 'neither';
    const tol = 1e-6 * (1 + Math.abs(yp));
    if (Math.abs(yp - yn) > tol) even = false;
    if (Math.abs(yp + yn) > tol) odd = false;
    used++;
  }
  if (used < 3) return 'neither';
  return even ? 'even' : (odd ? 'odd' : 'neither');
}

const PERIOD_PROBES = [-7.31, -5.87, -4.42, -3.13, -2.27, -1.61, -0.93, -0.37, 0.41, 1.07, 1.73, 2.49, 3.37, 4.61, 5.53, 6.71];

function periodHolds(fn, T, tol) {
  let used = 0;
  for (const x of PERIOD_PROBES) {
    const y1 = safe(fn, x), y2 = safe(fn, x + T);
    if (y1 === null && y2 === null) continue;
    if (y1 === null || y2 === null) return false;
    if (Math.abs(y1) > 1e5 || Math.abs(y2) > 1e5) continue;
    if (Math.abs(y1 - y2) > tol * (1 + Math.abs(y1))) return false;
    used++;
  }
  return used >= 6;
}

let PERIOD_CANDIDATES = null;
function periodCandidates() {
  if (PERIOD_CANDIDATES) return PERIOD_CANDIDATES;
  const c = [];
  for (let k = 1; k <= 12; k++) for (let m = 1; m <= 12; m++) c.push((k * Math.PI) / m);
  for (let k = 1; k <= 30; k++) for (let m = 1; m <= 8; m++) c.push(k / m);
  PERIOD_CANDIDATES = dedupe(c.filter((T) => T > 0.05 && T <= 40), 1e-12);
  return PERIOD_CANDIDATES;
}

function detectPeriod(fn, { constant, endsOscillate }) {
  const none = { periodic: false, T: null, label: null };
  if (constant) return { ...none, constant: true };
  for (const T of periodCandidates()) {
    if (periodHolds(fn, T, 1e-7)) return { periodic: true, T, label: labelPeriod(T) };
  }
  if (!endsOscillate) return none;
  // numeric scan for non-standard periods
  const err = (T) => {
    let s = 0, n = 0;
    for (const x of PERIOD_PROBES) {
      const y1 = safe(fn, x), y2 = safe(fn, x + T);
      if (y1 === null || y2 === null || Math.abs(y1) > 1e5 || Math.abs(y2) > 1e5) continue;
      s += Math.abs(y1 - y2) / (1 + Math.abs(y1)); n++;
    }
    return n >= 6 ? s / n : Infinity;
  };
  let prev = err(0.05), cur = err(0.055);
  for (let T = 0.06; T <= 20; T += 0.005) {
    const next = err(T);
    if (cur < prev && cur <= next && cur < 5e-3) {
      let a = T - 0.01, b = T;
      for (let t = 0; t < 80; t++) {
        const m1 = a + (b - a) / 3, m2 = b - (b - a) / 3;
        if (err(m1) < err(m2)) b = m2; else a = m1;
      }
      const Tp = (a + b) / 2;
      if (periodHolds(fn, Tp, 1e-6)) return { periodic: true, T: Tp, label: labelPeriod(Tp) };
    }
    prev = cur; cur = next;
  }
  return none;
}

// Express singular points of a periodic function as p + kT families.
function periodicFamily(xsIn, T) {
  const reps = dedupe(xsIn.map((x) => ((x % T) + T) % T).map((x) => (Math.abs(x - T) < 1e-6 ? 0 : x)), 1e-6);
  if (!reps.length) return null;
  const c = reps.length;
  const d = T / c;
  const evenly = reps.every((r, i) => Math.abs(r - (reps[0] + i * d)) < 1e-6);
  const step = evenly ? d : T;
  const list = evenly ? [reps[0]] : reps;
  const stepLabel = labelPeriod(step);
  const kStep = stepLabel === '\u03C0' ? 'k\u03C0' : (stepLabel === '1' ? 'k' : `k\u00B7${stepLabel}`);
  return list.map((p) => (Math.abs(p) < 1e-9 ? kStep : `${labelX(snapX(p))} + ${kStep}`)).join(', ');
}

// ---------- pass 6: end behaviour ----------
function analyzeEnd(fn, sign) {
  const probes = [10, 100, 1000, 10000];
  const ys = [];
  for (const p of probes) {
    let y;
    try { y = fn(sign * p); } catch { y = NaN; }
    if (typeof y !== 'number' || Number.isNaN(y)) {
      if (ys.length === 0) return { direction: 'undefined', value: null };
      break;
    }
    if (y === Infinity) return { direction: 'diverge+', value: null };
    if (y === -Infinity) return { direction: 'diverge-', value: null };
    ys.push(y);
  }
  if (ys.length < 3) return { direction: 'oscillate', value: null };
  const diffs = [];
  for (let i = 1; i < ys.length; i++) diffs.push(ys[i] - ys[i - 1]);
  const last = Math.abs(diffs[diffs.length - 1]);
  if (last < 1e-3 && last <= Math.abs(diffs[0]) * 0.5 + 1e-12) {
    return { direction: 'converge', value: ys[ys.length - 1] };
  }
  const allUp = diffs.every((d) => d > 0);
  const allDown = diffs.every((d) => d < 0);
  if (allUp) return { direction: 'diverge+', value: null };
  if (allDown) return { direction: 'diverge-', value: null };
  return { direction: 'oscillate', value: null };
}

// ---------- pass 7: pieces, range, bounds ----------
// Split the window into maximal defined pieces between singularities and gaps.
function buildPieces(xMin, xMax, sing) {
  const cuts = [];
  for (const p of sing.points) cuts.push({ at: p.x, kind: p.kind });
  let pieces = [{ from: xMin, to: xMax, left: 'edge', right: 'edge' }];
  // remove gaps
  for (const g of sing.gaps) {
    const next = [];
    for (const pc of pieces) {
      if (g.to <= pc.from || g.from >= pc.to) { next.push(pc); continue; }
      if (g.from > pc.from) next.push({ ...pc, to: g.from, right: g.fromAsym ? 'asym' : 'boundary' });
      if (g.to < pc.to) next.push({ ...pc, from: g.to, left: g.toAsym ? 'asym' : 'boundary' });
    }
    pieces = next;
  }
  // split at point singularities
  for (const c of cuts) {
    const next = [];
    for (const pc of pieces) {
      if (c.at <= pc.from || c.at >= pc.to) { next.push(pc); continue; }
      next.push({ ...pc, to: c.at, right: c.kind });
      next.push({ ...pc, from: c.at, left: c.kind });
    }
    pieces = next;
  }
  return pieces.filter((pc) => pc.to - pc.from > 1e-9);
}

function pieceRange(fn, pc, grid, extremaY, ends, periodic) {
  const cand = []; // { v, open }
  for (let k = 0; k < grid.xs.length; k++) {
    const x = grid.xs[k], y = grid.ys[k];
    if (x > pc.from && x < pc.to && y !== null && Math.abs(y) <= BIG) cand.push({ v: y, open: false });
  }
  for (const e of extremaY) if (e.x > pc.from && e.x < pc.to) cand.push({ v: e.y, open: false });
  const side = (x, dir, kind, end) => {
    if (kind === 'edge') {
      if (periodic || !end) return;
      if (end.direction === 'converge') cand.push({ v: end.value, open: true });
      else if (end.direction === 'diverge+') cand.push({ v: Infinity, open: true });
      else if (end.direction === 'diverge-') cand.push({ v: -Infinity, open: true });
      return;
    }
    if (kind === 'boundary') {
      const y = safe(fn, x);
      if (y !== null) cand.push({ v: y, open: false });
      return;
    }
    const e = 1e-7 * Math.max(1, Math.abs(x));
    const y = safe(fn, x + dir * e);
    if (y === null) return;
    if (blowsUp(fn, x, dir)) cand.push({ v: y > 0 ? Infinity : -Infinity, open: true });
    else cand.push({ v: y, open: true });
  };
  side(pc.from, +1, pc.left, pc.left === 'edge' && pc.from === grid.xs[0] ? ends.left : null);
  side(pc.to, -1, pc.right, pc.right === 'edge' && pc.to === grid.xs[grid.xs.length - 1] ? ends.right : null);
  if (!cand.length) return null;
  let lo = cand[0], hi = cand[0];
  for (const c of cand) {
    if (c.v < lo.v - 1e-12 || (Math.abs(c.v - lo.v) <= 1e-12 && !c.open)) lo = c;
    if (c.v > hi.v + 1e-12 || (Math.abs(c.v - hi.v) <= 1e-12 && !c.open)) hi = c;
  }
  return { lo: lo.v, loOpen: lo.open, hi: hi.v, hiOpen: hi.open };
}

function unionRanges(rs) {
  const s = rs.filter(Boolean).sort((a, b) => a.lo - b.lo);
  const out = [];
  for (const r of s) {
    const last = out[out.length - 1];
    if (last && (r.lo < last.hi - 1e-9 || (Math.abs(r.lo - last.hi) <= 1e-9 && !(r.loOpen && last.hiOpen)))) {
      if (r.hi > last.hi + 1e-12 || (Math.abs(r.hi - last.hi) <= 1e-12 && !r.hiOpen)) { last.hi = r.hi; last.hiOpen = r.hiOpen; }
      if (Math.abs(r.lo - last.lo) <= 1e-12 && !r.loOpen) last.loOpen = false;
    } else out.push({ ...r });
  }
  return out;
}

function fmtBound(v) {
  if (v === Infinity) return '+\u221E';
  if (v === -Infinity) return '\u2212\u221E';
  return (Math.abs(v) < 5e-4 ? 0 : v).toFixed(3);
}

function rangeString(union) {
  if (!union.length) return '\u2205';
  if (union.length === 1 && union[0].lo === -Infinity && union[0].hi === Infinity) return '\u211D';
  return union
    .map((r) => `${r.loOpen || r.lo === -Infinity ? '(' : '['}${fmtBound(r.lo)}, ${fmtBound(r.hi)}${r.hiOpen || r.hi === Infinity ? ')' : ']'}`)
    .join(' \u222A ');
}

function domainString(sing, period, xMin, xMax) {
  const pts = sing.points;
  if (period.periodic && pts.length && !sing.gaps.length) {
    const fam = periodicFamily(pts.map((p) => p.x), period.T);
    if (fam) return `\u211D \\ {${fam}}`;
  }
  const ptsStr = pts.length ? ` \\ {${pts.map((p) => labelX(p.x)).join(', ')}}` : '';
  if (!sing.gaps.length) return pts.length ? `\u211D${ptsStr}` : '\u211D';
  // defined pieces between gaps
  let segs = [{ from: -Infinity, to: Infinity, lc: false, rc: false }];
  for (const g of sing.gaps) {
    const gFrom = g.fromEdge ? -Infinity : g.from;
    const gTo = g.toEdge ? Infinity : g.to;
    const next = [];
    for (const s of segs) {
      if (gTo <= s.from || gFrom >= s.to) { next.push(s); continue; }
      if (gFrom > s.from) next.push({ ...s, to: gFrom, rc: !g.fromAsym && g.fromClosed });
      if (gTo < s.to) next.push({ ...s, from: gTo, lc: !g.toAsym && g.toClosed });
    }
    segs = next;
  }
  const iv = segs.map((s) => {
    const a = s.from === -Infinity ? '(\u2212\u221E' : `${s.lc ? '[' : '('}${labelX(s.from)}`;
    const b = s.to === Infinity ? '+\u221E)' : `${labelX(s.to)}${s.rc ? ']' : ')'}`;
    return `${a}, ${b}`;
  }).join(' \u222A ');
  return `${iv}${ptsStr}`;
}

// ---------- intervals of sign / monotonicity / concavity ----------
function intervalsBy(xMin, xMax, breaks, sing, classify) {
  const bs = dedupe([xMin, ...breaks.filter((b) => b > xMin && b < xMax), xMax], 1e-9);
  const out = [];
  for (let i = 0; i < bs.length - 1; i++) {
    const a = bs[i], b = bs[i + 1];
    const mid = (a + b) / 2;
    if (sing.gaps.some((g) => mid > g.from && mid < g.to)) continue;
    out.push({ from: a, to: b, ...classify(mid) });
  }
  return out;
}

function injectivity(fn, mono, pieces, period, grid, extrema, ends) {
  if (period.periodic) return false;
  const dirs = new Set(mono.map((m) => m.dir));
  if (dirs.has('const') || dirs.has('undef') || dirs.size !== 1) return false;
  // one direction everywhere: pieces must not overlap in value
  const rs = pieces.map((pc) => pieceRange(fn, pc, grid, extrema, ends, false)).filter(Boolean);
  for (let i = 0; i < rs.length; i++) {
    for (let j = i + 1; j < rs.length; j++) {
      const a = rs[i], b = rs[j];
      if (Math.min(a.hi, b.hi) - Math.max(a.lo, b.lo) > 1e-9) return false;
    }
  }
  return true;
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
// MAIN PIPELINE BUILD
// ============================================================
// Runs on a fixed analysis window (opts.xMin / opts.xMax, default
// [−10, 10]) — never on the viewport — so the properties do not
// change while the reader pans or zooms.
export function buildPipeline(expression, opts = {}) {
  const xMin = opts.xMin ?? -10;
  const xMax = opts.xMax ?? 10;
  const N = opts.samples ?? 4000;

  let node, fn, fnPrime, fnDoublePrime, derivStr, deriv2Str;
  try {
    node = parse(expression);
    const code = node.compile();
    fn = (x) => { try { return code.evaluate({ x }); } catch { return NaN; } };
    const d1 = derivative(node, 'x');
    derivStr = d1.toString();
    const c1 = d1.compile();
    fnPrime = (x) => { try { return c1.evaluate({ x }); } catch { return NaN; } };
    const d2 = derivative(d1, 'x');
    deriv2Str = d2.toString();
    const c2 = d2.compile();
    fnDoublePrime = (x) => { try { return c2.evaluate({ x }); } catch { return NaN; } };
  } catch (err) {
    return { error: err.message || String(err), expression };
  }

  const family = detectFamily(node);
  const grid = sampleGrid(fn, xMin, xMax, N);
  const sing = findSingularities(fn, grid);

  // derivative with a numeric fallback where the symbolic one fails
  const h = grid.step / 20;
  const nd1 = numericDeriv(fn, h), nd2 = numericDeriv2(fn, h);
  const d1 = (x) => { const v = safe(fnPrime, x); return v === null ? nd1(x) : v; };
  const d2 = (x) => { const v = safe(fnDoublePrime, x); return v === null ? nd2(x) : v; };

  const roots = findRootsV1(fn, grid, sing);
  const extrema = signChangesOf(d1, fn, grid, sing, (dLeft) => (dLeft > 0 ? 'max' : 'min'));
  const inflections = signChangesOf(d2, fn, grid, sing, null);

  const vertAsymptotes = dedupe([
    ...sing.points.filter((p) => p.kind === 'pole').map((p) => p.x),
    ...sing.gaps.filter((g) => g.fromAsym).map((g) => g.from),
    ...sing.gaps.filter((g) => g.toAsym).map((g) => g.to),
  ], 1e-9);

  const parity = detectParity(fn);

  const endRight = analyzeEnd(fn, +1);
  const endLeft  = analyzeEnd(fn, -1);
  const horizAsymptotes = [];
  if (endRight.direction === 'converge') horizAsymptotes.push({ y: endRight.value, side: 'right' });
  if (endLeft.direction === 'converge')  horizAsymptotes.push({ y: endLeft.value,  side: 'left'  });

  const finite = grid.ys.filter((y) => y !== null);
  const constant = finite.length > 0 && finite.every((y) => Math.abs(y - finite[0]) < 1e-12);
  const endsOscillate = endLeft.direction === 'oscillate' && endRight.direction === 'oscillate';
  const period = detectPeriod(fn, { constant, endsOscillate });

  // pieces → range and bounds
  const pieces = buildPieces(xMin, xMax, sing);
  const ends = { left: endLeft, right: endRight };
  const union = unionRanges(pieces.map((pc) => pieceRange(fn, pc, grid, extrema, ends, period.periodic)));
  const rangeStr = rangeString(union);
  const lo = union.length ? Math.min(...union.map((r) => r.lo)) : NaN;
  const hi = union.length ? Math.max(...union.map((r) => r.hi)) : NaN;
  const sampled = finite.filter((y) => Math.abs(y) <= BIG);
  const bounded = isFinite(lo) && isFinite(hi);
  const bounds = {
    lo, hi, bounded,
    sampledLo: sampled.length ? Math.min(...sampled) : NaN,
    sampledHi: sampled.length ? Math.max(...sampled) : NaN,
    loSource: 'analytic',
    hiSource: 'analytic',
  };

  const domainStr = domainString(sing, period, xMin, xMax);

  // intervals
  const singX = sing.points.map((p) => p.x);
  const gapX = sing.gaps.flatMap((g) => [g.from, g.to]);
  const sign = intervalsBy(xMin, xMax, [...roots, ...singX, ...gapX], sing, (m) => {
    const y = safe(fn, m);
    return { sign: y === null ? 'undef' : (y > 0 ? '+' : (y < 0 ? '-' : '0')) };
  });
  const mono = intervalsBy(xMin, xMax, [...extrema.map((e) => e.x), ...singX, ...gapX], sing, (m) => {
    const v = d1(m);
    return { dir: !isFinite(v) ? 'undef' : (Math.abs(v) < 1e-12 ? 'const' : (v > 0 ? 'inc' : 'dec')) };
  });
  const concavity = intervalsBy(xMin, xMax, [...inflections.map((p) => p.x), ...singX, ...gapX], sing, (m) => {
    const v = d2(m);
    return { kind: !isFinite(v) ? 'undef' : (Math.abs(v) < 1e-12 ? 'flat' : (v > 0 ? 'up' : 'down')) };
  });

  const continuous = sing.points.length === 0;
  const injective = injectivity(fn, mono, pieces, period, grid, extrema, ends);
  const yInt = safe(fn, 0);

  let symmetryAxis = null;
  if (parity === 'even') symmetryAxis = 0;
  else if (extrema.length === 1) symmetryAxis = extrema[0].x;

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
    singularities: sing.points,
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
    analysisRange = [-10, 10],
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

  // Properties are computed on a fixed analysis window, not the viewport,
  // so they stay put while the reader pans or zooms.
  const data = useMemo(
    () => buildPipeline(state.expression, { xMin: analysisRange[0], xMax: analysisRange[1] }),
    [state.expression, analysisRange[0], analysisRange[1]]
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

  // Markers for f come from the analysis pipeline, not the engine's own
  // finders (which count poles as roots). Periodic functions repeat their
  // markers across the viewport; others show those in the analysis window.
  const markers = useMemo(() => {
    if (data.error || !data.fn) return { points: [], asym: [] };
    const { xMin, xMax } = state.viewport;
    const repeat = (xs) => {
      if (!data.period || !data.period.periodic) return xs;
      const T = data.period.T;
      const base = xs.filter((x) => x >= data.xMin && x < data.xMin + T - 1e-9);
      const out = [];
      for (const b of base) {
        const k0 = Math.ceil((xMin - b) / T), k1 = Math.floor((xMax - b) / T);
        for (let k = k0; k <= k1; k++) out.push(b + k * T);
      }
      return out;
    };
    const at = (x) => safe(data.fn, x);
    const points = [];
    const col = T.c.blue;
    if (state.annotations.roots) {
      repeat(data.roots).forEach((x) => points.push({ x, y: 0, type: 'root', color: col }));
    }
    if (state.annotations.extrema) {
      const kindAt = new Map(data.extrema.map((e) => [e.x, e.kind]));
      const base = data.extrema.map((e) => e.x);
      repeat(base).forEach((x) => {
        const y = at(x);
        if (y === null) return;
        let kind = kindAt.get(x);
        if (!kind && data.period && data.period.periodic) {
          const T = data.period.T;
          const src = base.find((b) => Math.abs(((x - b) / T) - Math.round((x - b) / T)) < 1e-9);
          kind = kindAt.get(src);
        }
        points.push({ x, y, type: 'extremum', subtype: kind, color: col });
      });
    }
    if (state.annotations.inflect) {
      repeat(data.inflections.map((p) => p.x)).forEach((x) => {
        const y = at(x);
        if (y !== null) points.push({ x, y, type: 'inflection', color: col });
      });
    }
    return { points, asym: repeat(data.asymptotes) };
  }, [data, state.viewport, state.annotations.roots, state.annotations.extrema, state.annotations.inflect]);

  const engineFunctions = useMemo(() => {
    if (data.error) return [];
    const list = [
      { fn: data.fn, color: T.c.blue, label: 'f', formula: `f(x) = ${data.formula}`, visible: true, stroke: 1.75, specialPoints: false, asymptotes: markers.asym },
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
  }, [data, state.overlays, state.viewport.xMin, state.viewport.xMax, markers.asym]);

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
    customPoints:    markers.points,
  }), [state.annotations, state.cursor.x, shadedRegion, markers.points]);

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