// /**
//  * TangentLine — v1
//  *
//  * Tangent Line Explorer. Pick a function family, transform it with
//  * the usual (a, k, b, h) sliders, then drag x₀ along the x-axis to
//  * see the tangent line at that point — drawn live alongside the
//  * function. Two forms of the tangent equation are displayed:
//  *
//  *   point-slope     :  y = m (x − x₀) + y₀
//  *   slope-intercept :  y = m x + (y₀ − m x₀)
//  *
//  * Built from the same primitives as FunctionInverse v3:
//  * VisualizerWithControls + InfoPanel + family picker with grouped
//  * sections + left-column sliders so nothing scrolls off.
//  *
//  * PROPS (all optional)
//  *   initialFamily   : string
//  *   families        : object        — override built-in FAMILIES
//  *   visualizerProps : object        — forwarded to VisualizerWithControls
//  *   infoPanelProps  : object        — forwarded to InfoPanel
//  *   darkMode        : boolean
//  *   showPicker      : boolean
//  *   showSliders     : boolean
//  *   showInfoPanel   : boolean
//  *   maxWidth        : string|number — wrapper cap; default '80vw'
//  *
//  * RULES OBSERVED (lessons from prior tools):
//  *   - Never put $...$ inside **...**  (renders broken).
//  *   - <style> blocks use dangerouslySetInnerHTML (avoids hydration mismatch).
//  *   - Default graph height kept modest so chip strips stay above the fold.
//  */

// import React, { useState, useMemo } from 'react';
// import { VisualizerWithControls } from '../FunctionVisualizerCoreImproved';
// import InfoPanel from '../InfoPanel';


// /* ================================================================
//    COLORS
//    ================================================================ */

// const COL = {
//   f:       '#3b82f6', // function curve
//   tangent: '#f59e0b', // tangent line
//   point:   '#ef4444', // contact point (for chip emphasis)
//   mirror:  '#94a3b8',
// };


// /* ================================================================
//    FORMATTING
//    ================================================================ */

// function fmt(v) {
//   if (!Number.isFinite(v)) return '—';
//   const r = Math.round(v * 100) / 100;
//   return Math.abs(r - Math.round(r)) < 1e-4 ? String(Math.round(r)) : String(r);
// }

// function fmtSigned(v) {
//   if (!Number.isFinite(v)) return '— ?';
//   if (v === 0) return '+ 0';
//   return v >= 0 ? `+ ${fmt(v)}` : `− ${fmt(-v)}`;
// }


// /* ================================================================
//    PARAMETERS
//    ================================================================ */

// const PARAM_DEFS = {
//   a:  { label: 'vertical scale a',     min: -3,  max: 3,  step: 0.05, def: 1, group: 'tx' },
//   k:  { label: 'vertical shift k',     min: -6,  max: 6,  step: 0.1,  def: 0, group: 'tx' },
//   b:  { label: 'horizontal scale b',   min: -3,  max: 3,  step: 0.05, def: 1, group: 'tx' },
//   h:  { label: 'horizontal shift h',   min: -6,  max: 6,  step: 0.1,  def: 0, group: 'tx' },
//   x0: { label: 'tangent point x₀',     min: -10, max: 10, step: 0.05, def: 1, group: 'pt' },
// };

// const DEFAULT_PARAMS = { a: 1, k: 0, b: 1, h: 0, x0: 1 };


// /* ================================================================
//    FAMILIES
//    ================================================================
//    Each family declares:
//      - name, glyph, group?
//      - base(x), baseDeriv(x)   : f and f'
//      - eqBase, derivEqBase     : pretty base strings
//      - bodyOf(i), derivBodyOf(i): substitution-style strings
//      - domainOk(x)             : optional — false → tangent undefined
// */

// export const FAMILIES = {
//   identity: {
//     name: 'Identity',
//     glyph: 'M2,22 L24,4',
//     base: x => x,
//     baseDeriv: () => 1,
//     eqBase: 'x',
//     derivEqBase: '1',
//     bodyOf: i => i,
//     derivBodyOf: () => '1',
//   },
//   linearScale: {
//     name: 'Linear (2x)',
//     glyph: 'M2,24 L24,2',
//     base: x => 2 * x,
//     baseDeriv: () => 2,
//     eqBase: '2x',
//     derivEqBase: '2',
//     bodyOf: i => `2·${i}`,
//     derivBodyOf: () => '2',
//   },
//   quadratic: {
//     name: 'Quadratic',
//     glyph: 'M2,4 Q13,30 24,4',
//     base: x => x * x,
//     baseDeriv: x => 2 * x,
//     eqBase: 'x²',
//     derivEqBase: '2x',
//     bodyOf: i => `(${i})²`,
//     derivBodyOf: i => `2(${i})`,
//   },
//   cubic: {
//     name: 'Cubic',
//     glyph: 'M2,22 C8,2 16,30 24,8',
//     base: x => x * x * x,
//     baseDeriv: x => 3 * x * x,
//     eqBase: 'x³',
//     derivEqBase: '3x²',
//     bodyOf: i => `(${i})³`,
//     derivBodyOf: i => `3(${i})²`,
//   },
//   reciprocal: {
//     name: 'Reciprocal',
//     glyph: 'M2,4 Q11,4 13,14 M15,14 Q17,26 24,26',
//     base: x => (x === 0 ? NaN : 1 / x),
//     baseDeriv: x => (x === 0 ? NaN : -1 / (x * x)),
//     eqBase: '1/x',
//     derivEqBase: '−1/x²',
//     bodyOf: i => `1/(${i})`,
//     derivBodyOf: i => `−1/(${i})²`,
//     domainOk: x => x !== 0,
//   },
//   exponential: {
//     name: 'Exponential',
//     glyph: 'M2,26 Q16,26 24,2',
//     base: x => Math.exp(x),
//     baseDeriv: x => Math.exp(x),
//     eqBase: 'eˣ',
//     derivEqBase: 'eˣ',
//     bodyOf: i => `e^(${i})`,
//     derivBodyOf: i => `e^(${i})`,
//   },
//   logarithmic: {
//     name: 'Logarithmic',
//     glyph: 'M2,2 Q10,26 24,26',
//     base: x => (x > 0 ? Math.log(x) : NaN),
//     baseDeriv: x => (x > 0 ? 1 / x : NaN),
//     eqBase: 'ln(x)',
//     derivEqBase: '1/x',
//     bodyOf: i => `ln(${i})`,
//     derivBodyOf: i => `1/(${i})`,
//     domainOk: x => x > 0,
//   },
//   sqrt: {
//     name: 'Square root',
//     glyph: 'M2,24 Q4,8 24,4',
//     base: x => (x >= 0 ? Math.sqrt(x) : NaN),
//     // Vertical tangent at x = 0; undefined there.
//     baseDeriv: x => (x > 0 ? 1 / (2 * Math.sqrt(x)) : NaN),
//     eqBase: '√x',
//     derivEqBase: '1 / (2√x)',
//     bodyOf: i => `√(${i})`,
//     derivBodyOf: i => `1/(2√(${i}))`,
//     domainOk: x => x > 0,
//   },
//   absolute: {
//     name: 'Absolute',
//     glyph: 'M2,4 L13,24 L24,4',
//     base: x => Math.abs(x),
//     // Not differentiable at 0 — the V has a corner.
//     baseDeriv: x => (x > 0 ? 1 : x < 0 ? -1 : NaN),
//     eqBase: '|x|',
//     derivEqBase: 'sign(x)',
//     bodyOf: i => `|${i}|`,
//     derivBodyOf: i => `sign(${i})`,
//     domainOk: x => x !== 0,
//   },
//   sine: {
//     name: 'Sine',
//     group: 'Trigonometric',
//     glyph: 'M2,14 Q7,2 12,14 Q17,26 22,14',
//     base: x => Math.sin(x),
//     baseDeriv: x => Math.cos(x),
//     eqBase: 'sin(x)',
//     derivEqBase: 'cos(x)',
//     bodyOf: i => `sin(${i})`,
//     derivBodyOf: i => `cos(${i})`,
//   },
//   cosine: {
//     name: 'Cosine',
//     group: 'Trigonometric',
//     glyph: 'M2,4 Q7,16 12,4 Q17,-8 22,4',
//     base: x => Math.cos(x),
//     baseDeriv: x => -Math.sin(x),
//     eqBase: 'cos(x)',
//     derivEqBase: '−sin(x)',
//     bodyOf: i => `cos(${i})`,
//     derivBodyOf: i => `−sin(${i})`,
//   },
// };

// const DEFAULT_FAMILIES = FAMILIES;


// /* ================================================================
//    EQUATION BUILDERS
//    ================================================================ */

// function buildForwardEq(fam, p) {
//   const { a, b, h, k } = p;
//   let inner = 'x';
//   if (h !== 0) inner = `x ${h >= 0 ? '−' : '+'} ${fmt(Math.abs(h))}`;
//   if (b !== 1) inner = h !== 0 ? `${fmt(b)}(${inner})` : `${fmt(b)}x`;
//   let body = fam.bodyOf(inner);
//   let out;
//   if (a === -1) out = `−${body}`;
//   else if (a !== 1) out = `${fmt(a)}·${body}`;
//   else out = body;
//   if (k !== 0) out += ` ${k >= 0 ? '+' : '−'} ${fmt(Math.abs(k))}`;
//   return out;
// }

// function buildDerivEq(fam, p) {
//   // g'(x) = a · b · f'(b(x − h))
//   const { a, b, h } = p;
//   let inner = 'x';
//   if (h !== 0) inner = `x ${h >= 0 ? '−' : '+'} ${fmt(Math.abs(h))}`;
//   if (b !== 1) inner = h !== 0 ? `${fmt(b)}(${inner})` : `${fmt(b)}x`;
//   const factor = a * b;
//   const body = fam.derivBodyOf(inner);
//   if (factor === 1) return body;
//   if (factor === -1) return `−${body}`;
//   return `${fmt(factor)}·${body}`;
// }

// function buildTangentPointSlope(m, x0, y0) {
//   if (!Number.isFinite(m) || !Number.isFinite(y0)) return null;
//   // y = m (x − x₀) + y₀
//   let core;
//   const xPart = x0 === 0 ? 'x' : `(x ${x0 >= 0 ? '−' : '+'} ${fmt(Math.abs(x0))})`;
//   if (m === 0)        core = '';
//   else if (m === 1)   core = xPart;
//   else if (m === -1)  core = `−${xPart}`;
//   else                core = `${fmt(m)}·${xPart}`;

//   if (m === 0) return `y = ${fmt(y0)}`;
//   if (y0 === 0) return `y = ${core}`;
//   return `y = ${core} ${fmtSigned(y0)}`;
// }

// function buildTangentSlopeIntercept(m, b) {
//   if (!Number.isFinite(m) || !Number.isFinite(b)) return null;
//   if (m === 0) return `y = ${fmt(b)}`;
//   let core;
//   if (m === 1)       core = 'x';
//   else if (m === -1) core = '−x';
//   else               core = `${fmt(m)}x`;
//   if (b === 0) return `y = ${core}`;
//   return `y = ${core} ${fmtSigned(b)}`;
// }


// /* ================================================================
//    PICKER GROUPING
//    ================================================================ */

// function buildPickerEntries(families) {
//   const out = [];
//   let lastGroup;
//   Object.entries(families).forEach(([key, f]) => {
//     if (f.group && f.group !== lastGroup) {
//       out.push({ type: 'header', label: f.group, key: `__hdr_${f.group}` });
//       lastGroup = f.group;
//     } else if (!f.group) {
//       lastGroup = undefined;
//     }
//     out.push({ type: 'item', key, fam: f });
//   });
//   return out;
// }


// /* ================================================================
//    GLYPH
//    ================================================================ */

// function FamilyGlyph({ d, active, darkMode }) {
//   return (
//     <svg width="22" height="22" viewBox="0 0 26 28" aria-hidden="true">
//       <path d={d} fill="none"
//             stroke={active ? COL.f : (darkMode ? '#64748b' : '#94a3b8')}
//             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }


// /* ================================================================
//    MAIN
//    ================================================================ */

// export default function TangentLine({
//   initialFamily = 'quadratic',
//   families = DEFAULT_FAMILIES,
//   visualizerProps = {},
//   infoPanelProps = {},
//   darkMode = false,
//   showPicker = true,
//   showSliders = true,
//   showInfoPanel = true,
//   maxWidth = '80vw',
// }) {
//   const familyKeys = Object.keys(families);
//   const startKey = families[initialFamily] ? initialFamily : familyKeys[0];

//   const [current, setCurrent] = useState(startKey);
//   const [params, setParams] = useState({ ...DEFAULT_PARAMS });
//   const [visible, setVisible] = useState({ f: true, tangent: true });

//   const fam = families[current] || families[familyKeys[0]];

//   /* ---- Derived numbers (point of tangency, slope, intercept) ---- */
//   const { a, b, h, k, x0 } = params;
//   const forwardFn = useMemo(() => {
//     if (a === 0 || b === 0) return () => NaN;
//     return x => a * fam.base(b * (x - h)) + k;
//   }, [fam, a, b, h, k]);

//   const derivAt = (x) => {
//     if (a === 0 || b === 0) return NaN;
//     const inner = b * (x - h);
//     const inDomain = fam.domainOk ? fam.domainOk(inner) : true;
//     if (!inDomain) return NaN;
//     return a * b * fam.baseDeriv(inner);
//   };

//   const y0 = useMemo(() => forwardFn(x0), [forwardFn, x0]);
//   const m  = useMemo(() => derivAt(x0),    [fam, a, b, h, x0]);   // eslint-disable-line react-hooks/exhaustive-deps
//   const yIntercept = Number.isFinite(m) && Number.isFinite(y0) ? y0 - m * x0 : NaN;

//   const tangentDefined = Number.isFinite(m) && Number.isFinite(y0);
//   const isCritical = tangentDefined && Math.abs(m) < 1e-9;

//   const tangentFn = useMemo(() => {
//     if (!tangentDefined) return () => NaN;
//     return x => m * (x - x0) + y0;
//   }, [tangentDefined, m, x0, y0]);

//   /* ---- Equation strings ---- */
//   const forwardEq = useMemo(() => buildForwardEq(fam, params), [fam, params]);
//   const derivEq   = useMemo(() => buildDerivEq(fam, params),   [fam, params]);
//   const tangentPS = useMemo(() => buildTangentPointSlope(m, x0, y0), [m, x0, y0]);
//   const tangentSI = useMemo(() => buildTangentSlopeIntercept(m, yIntercept), [m, yIntercept]);

//   /* ---- Functions array fed to the visualizer ---- */
//   const functions = useMemo(() => ([
//     {
//       fn: forwardFn,
//       color: COL.f,
//       label: 'f',
//       formula: `f(x) = ${forwardEq}`,
//       visible: visible.f,
//       stroke: 2.25,
//     },
//     {
//       fn: tangentFn,
//       color: COL.tangent,
//       label: 'tangent',
//       formula: tangentPS || 'tangent undefined',
//       visible: visible.tangent && tangentDefined,
//       stroke: 2,
//     },
//   ]), [forwardFn, tangentFn, forwardEq, tangentPS, visible, tangentDefined]);

//   /* ---- InfoPanel content ---- */
//   const explanationContent = useMemo(() => {
//     let body =
//       `## ${fam.name} — tangent at x₀ = ${fmt(x0)}\n\n` +
//       `**Function** · $f(x) = ${forwardEq}$\n\n` +
//       `**Derivative** · $f'(x) = ${derivEq}$\n\n`;

//     if (!tangentDefined) {
//       body += `### Tangent undefined here\n` +
//               `At $x_0 = ${fmt(x0)}$ the derivative is **not defined** for this function — either the point lies outside the domain, or the function has a corner or vertical tangent there. Slide $x_0$ to a point where the curve is smooth.\n\n`;
//     } else {
//       body +=
//         `### At this point\n` +
//         `- $x_0 = ${fmt(x0)}$, so $y_0 = f(x_0) = ${fmt(y0)}$\n` +
//         `- slope $m = f'(x_0) = ${fmt(m)}$\n` +
//         `- y-intercept of the tangent: $y_0 - m \\cdot x_0 = ${fmt(yIntercept)}$\n\n` +
//         `### Tangent equation\n` +
//         `- Point-slope: $${tangentPS.replace(/^y\s*=\s*/, 'y = ')}$\n` +
//         `- Slope-intercept: $${tangentSI.replace(/^y\s*=\s*/, 'y = ')}$\n\n` +
//         (isCritical
//           ? `### Critical point\n` +
//             `The slope here is **zero** — the tangent is horizontal. This is a candidate **critical point** (local max, local min, or saddle, depending on what happens just before and after).\n\n`
//           : '');
//     }
//     return body;
//   }, [fam, params, forwardEq, derivEq, x0, y0, m, yIntercept, tangentPS, tangentSI, tangentDefined, isCritical]);

//   const conceptsContent =
//     '## What the tangent line means\n\n' +
//     'At any smooth point on a curve, the **tangent line** is the unique straight line that "kisses" the curve — touching it at that point and matching its direction. The slope of that line is the **instantaneous rate of change** of the function there, also known as the derivative.\n\n' +
//     '### From secants to tangents\n' +
//     'Pick two points on the curve, $(x_0, f(x_0))$ and $(x_0 + \\Delta x, f(x_0 + \\Delta x))$. The line through them is a **secant**, with slope:\n' +
//     '$$\\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}$$\n\n' +
//     'As $\\Delta x \\to 0$ the secant rotates to become the **tangent**, and its slope becomes the derivative:\n' +
//     '$$f\'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}$$\n\n' +
//     '### Two forms of the tangent equation\n' +
//     'Once you know the slope $m = f\'(x_0)$ and the point $(x_0, y_0)$ on the curve, the tangent line is:\n' +
//     '- Point-slope form: $y = m(x - x_0) + y_0$\n' +
//     '- Slope-intercept form: $y = m x + (y_0 - m x_0)$\n\n' +
//     'Same line, two ways to write it. Point-slope is what you derive; slope-intercept is the simplification.\n\n' +
//     '### When the tangent fails to exist\n' +
//     'Some places have no well-defined tangent:\n' +
//     '- **Corners** — like $|x|$ at $x = 0$: the slope jumps and no single line fits.\n' +
//     '- **Vertical tangents** — like $\\sqrt{x}$ at $x = 0$: the slope is infinite.\n' +
//     '- **Outside the domain** — like $\\ln(x)$ at $x \\le 0$: the function itself is undefined.\n\n' +
//     'In all three cases the derivative does not exist at that point.';

//   const infoTabs = useMemo(() => ([
//     { key: 'explanation', label: 'Explanation', order: 0, content: explanationContent },
//     { key: 'concepts',    label: 'Concepts',    order: 10, content: conceptsContent },
//   ]), [explanationContent]);

//   /* ---- Styling ---- */
//   const fontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
//   const monoStack = 'ui-monospace, "SF Mono", Menlo, monospace';
//   const panelShadow = '0 1px 3px rgba(15,23,42,0.05), 0 8px 24px rgba(15,23,42,0.05)';
//   const card = {
//     background: darkMode ? '#0f172a' : '#fff',
//     border: `1px solid ${darkMode ? '#1e293b' : '#f1f5f9'}`,
//     borderRadius: 12,
//     boxShadow: panelShadow,
//   };
//   const c = {
//     ink: darkMode ? '#e2e8f0' : '#0f172a',
//     inkSoft: darkMode ? '#cbd5e1' : '#334155',
//     muted: darkMode ? '#64748b' : '#94a3b8',
//     soft: darkMode ? '#1e293b' : '#f8fafc',
//     softer: darkMode ? '#0f172a' : '#f1f5f9',
//     border: darkMode ? '#334155' : '#e2e8f0',
//     borderSoft: darkMode ? '#1e293b' : '#f1f5f9',
//     accentSoft: darkMode ? '#1e293b' : '#eff6ff',
//     accentBorder: darkMode ? '#334155' : '#dbeafe',
//     accentText: darkMode ? '#dbeafe' : '#1e3a8a',
//     tangentSoft: darkMode ? '#1e293b' : '#fef3c7',
//     tangentText: darkMode ? '#fbbf24' : '#92400e',
//   };

//   const famBtn = active => ({
//     display: 'flex', alignItems: 'center', gap: 10, width: '100%', textAlign: 'left',
//     border: '1px solid transparent',
//     background: active ? c.accentSoft : 'none',
//     borderColor: active ? c.accentBorder : 'transparent',
//     borderRadius: 8, padding: '9px 10px', cursor: 'pointer', fontFamily: 'inherit',
//     fontSize: 13, fontWeight: active ? 600 : 400,
//     color: active ? c.accentText : c.inkSoft,
//     transition: 'background 0.12s, border-color 0.12s',
//   });

//   const sectionTitle = {
//     fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
//     color: c.muted, fontWeight: 600, margin: '10px 8px 4px',
//   };

//   const mergedVisualizerProps = {
//     defaultWidth: 880,
//     defaultHeight: 500,
//     ...visualizerProps,
//   };

//   const pickerEntries = buildPickerEntries(families);

//   const selectFamily = (key) => {
//     setCurrent(key);
//     setParams({ ...DEFAULT_PARAMS });
//   };

//   const setParam = (k, v) => setParams(prev => ({ ...prev, [k]: v }));
//   const resetParams = () => setParams({ ...DEFAULT_PARAMS });
//   const resetX0     = () => setParam('x0', DEFAULT_PARAMS.x0);

//   const LegendChip = ({ k, label, formula, color }) => {
//     const on = visible[k];
//     return (
//       <button
//         onClick={() => setVisible(v => ({ ...v, [k]: !v[k] }))}
//         style={{
//           display: 'inline-flex', alignItems: 'center', gap: 8,
//           padding: '6px 10px', borderRadius: 8,
//           border: `1px solid ${on ? color : c.borderSoft}`,
//           background: on
//             ? (darkMode ? 'rgba(255,255,255,0.04)' : '#fff')
//             : (darkMode ? '#0f172a' : c.softer),
//           color: on ? c.ink : c.muted,
//           opacity: on ? 1 : 0.6,
//           cursor: 'pointer',
//           fontFamily: 'inherit',
//           fontSize: 12,
//           transition: 'all 0.15s',
//         }}
//         title={on ? 'Click to hide' : 'Click to show'}
//       >
//         <svg width="22" height="6" aria-hidden="true">
//           <line x1="0" y1="3" x2="22" y2="3" stroke={color} strokeWidth="3" />
//         </svg>
//         <span style={{ fontWeight: 600 }}>{label}</span>
//         <span style={{ fontFamily: monoStack, fontSize: 11, color: on ? c.inkSoft : c.muted }}>
//           {formula}
//         </span>
//       </button>
//     );
//   };

//   const Chip = ({ k, valueOverride, accent }) => {
//     const value = valueOverride !== undefined ? valueOverride : params[k];
//     const def = PARAM_DEFS[k];
//     const active = def ? value !== def.def : true;
//     const tone = accent || (active ? COL.f : c.muted);
//     return (
//       <span style={{
//         fontFamily: monoStack, fontSize: 11,
//         padding: '3px 9px', borderRadius: 5,
//         display: 'inline-flex', alignItems: 'center', gap: 5,
//         color: active ? c.accentText : c.muted,
//         background: active ? c.accentSoft : 'transparent',
//         border: `1px solid ${active ? c.accentBorder : c.borderSoft}`,
//         fontWeight: active ? 600 : 400,
//       }}>
//         <span style={{ fontWeight: 600, color: tone }}>{k}</span>
//         <span>=</span>
//         <span>{fmt(value)}</span>
//       </span>
//     );
//   };

//   const renderSlider = (key) => {
//     const def = PARAM_DEFS[key];
//     return (
//       <div key={key}>
//         <label style={{
//           display: 'flex', justifyContent: 'space-between', fontSize: 12,
//           color: c.inkSoft, marginBottom: 4, fontVariantNumeric: 'tabular-nums',
//         }}>
//           <span>{def.label}</span>
//           <span style={{ fontFamily: monoStack, color: key === 'x0' ? COL.tangent : COL.f, fontWeight: 600 }}>
//             {fmt(params[key])}
//           </span>
//         </label>
//         <input
//           type="range" min={def.min} max={def.max} step={def.step}
//           value={params[key]}
//           onChange={e => setParam(key, parseFloat(e.target.value))}
//           style={{ width: '100%', accentColor: key === 'x0' ? COL.tangent : COL.f, cursor: 'pointer' }}
//         />
//       </div>
//     );
//   };

//   return (
//     <div style={{
//       width: '100%',
//       background: darkMode ? '#020617' : '#f6f7f9',
//       minHeight: '100vh',
//       fontFamily: fontStack,
//       display: 'flex',
//       justifyContent: 'center',
//       padding: '20px 0',
//       boxSizing: 'border-box',
//     }}>
//       <div style={{
//         width: '100%',
//         maxWidth,
//         display: 'flex',
//         gap: 16,
//         padding: '0 16px',
//         alignItems: 'flex-start',
//         boxSizing: 'border-box',
//       }}>

//         {showPicker && (
//           <nav style={{ ...card, width: 220, padding: 10, flexShrink: 0 }}>
//             <div style={{ ...sectionTitle, margin: '6px 8px 10px' }}>Function</div>
//             {pickerEntries.map(e =>
//               e.type === 'header'
//                 ? <div key={e.key} style={sectionTitle}>{e.label}</div>
//                 : (
//                   <button
//                     key={e.key}
//                     style={famBtn(e.key === current)}
//                     onClick={() => selectFamily(e.key)}
//                   >
//                     <FamilyGlyph d={e.fam.glyph} active={e.key === current} darkMode={darkMode} />
//                     <span>{e.fam.name}</span>
//                   </button>
//                 )
//             )}

//             {showSliders && (
//               <>
//                 <div style={{
//                   marginTop: 12,
//                   paddingTop: 12,
//                   borderTop: `1px solid ${c.borderSoft}`,
//                 }}>
//                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 4px 8px' }}>
//                     <div style={{
//                       fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
//                       color: c.muted, fontWeight: 600,
//                     }}>Parameters</div>
//                     <button onClick={resetParams} style={{
//                       background: darkMode ? '#0f172a' : '#fff',
//                       border: `1px solid ${c.border}`, color: c.inkSoft,
//                       padding: '3px 8px', borderRadius: 5,
//                       fontFamily: 'inherit', fontSize: 10.5, cursor: 'pointer',
//                     }}>Reset</button>
//                   </div>
//                   <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '0 4px' }}>
//                     {['a', 'k', 'b', 'h'].map(renderSlider)}
//                   </div>
//                 </div>

//                 <div style={{
//                   marginTop: 12,
//                   paddingTop: 12,
//                   borderTop: `1px solid ${c.borderSoft}`,
//                 }}>
//                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 4px 8px' }}>
//                     <div style={{
//                       fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
//                       color: COL.tangent, fontWeight: 700,
//                     }}>Tangent point</div>
//                     <button onClick={resetX0} style={{
//                       background: darkMode ? '#0f172a' : '#fff',
//                       border: `1px solid ${c.border}`, color: c.inkSoft,
//                       padding: '3px 8px', borderRadius: 5,
//                       fontFamily: 'inherit', fontSize: 10.5, cursor: 'pointer',
//                     }}>Reset</button>
//                   </div>
//                   <div style={{ padding: '0 4px' }}>
//                     {renderSlider('x0')}
//                   </div>
//                 </div>
//               </>
//             )}
//           </nav>
//         )}

//         <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
//           <div style={{ ...card, padding: 16 }}>

//             <div style={{
//               display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
//               marginBottom: 12, flexWrap: 'wrap', gap: 8,
//             }}>
//               <span style={{ fontSize: 15, letterSpacing: '-0.01em', color: c.ink }}>
//                 {fam.name}
//                 {isCritical && (
//                   <span style={{
//                     marginLeft: 10, fontSize: 11, fontWeight: 500,
//                     padding: '2px 8px', borderRadius: 4,
//                     background: darkMode ? '#1e293b' : '#dcfce7',
//                     color: darkMode ? '#86efac' : '#166534',
//                     verticalAlign: 'middle',
//                   }}>critical point</span>
//                 )}
//                 {!tangentDefined && (
//                   <span style={{
//                     marginLeft: 10, fontSize: 11, fontWeight: 500,
//                     padding: '2px 8px', borderRadius: 4,
//                     background: darkMode ? '#1e293b' : '#fee2e2',
//                     color: darkMode ? '#fca5a5' : '#991b1b',
//                     verticalAlign: 'middle',
//                   }}>tangent undefined</span>
//                 )}
//               </span>
//               <span style={{
//                 fontFamily: monoStack, fontSize: 11.5,
//                 padding: '3px 8px', borderRadius: 5,
//                 color: COL.f, background: c.softer,
//                 display: 'inline-flex', alignItems: 'center', gap: 6,
//               }}>
//                 <span style={{ width: 8, height: 8, borderRadius: '50%', background: COL.f }} />
//                 f(x) = {forwardEq}
//               </span>
//             </div>

//             <VisualizerWithControls
//               functions={functions}
//               zoom={10}
//               showAxisLabels
//               showCrosshair
//               showCurveTooltip
//               labelMode="legend"
//               {...mergedVisualizerProps}
//             />

//             {/* ---- TANGENT EQUATION CARD (the centerpiece) ---- */}
//             <div style={{
//               marginTop: 12,
//               background: c.tangentSoft,
//               border: `1px solid ${darkMode ? '#334155' : '#fde68a'}`,
//               borderLeft: `4px solid ${COL.tangent}`,
//               borderRadius: 8,
//               padding: '12px 16px',
//             }}>
//               <div style={{
//                 display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
//                 gap: 8, marginBottom: tangentDefined ? 8 : 0,
//               }}>
//                 <span style={{
//                   fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.08em',
//                   color: c.tangentText, fontWeight: 700,
//                 }}>
//                   Tangent line at x₀ = {fmt(x0)}
//                 </span>
//                 {tangentDefined && (
//                   <span style={{
//                     fontFamily: monoStack, fontSize: 11,
//                     color: c.tangentText, fontWeight: 600,
//                   }}>
//                     slope m = {fmt(m)}
//                   </span>
//                 )}
//               </div>

//               {tangentDefined ? (
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
//                   <div style={{
//                     fontFamily: monoStack, fontSize: 14,
//                     color: c.ink, fontWeight: 600,
//                   }}>
//                     {tangentPS}
//                     <span style={{
//                       marginLeft: 10, fontSize: 10, fontWeight: 600,
//                       color: c.muted, letterSpacing: '0.04em', textTransform: 'uppercase',
//                     }}>point-slope</span>
//                   </div>
//                   <div style={{
//                     fontFamily: monoStack, fontSize: 14,
//                     color: c.ink, fontWeight: 600,
//                   }}>
//                     {tangentSI}
//                     <span style={{
//                       marginLeft: 10, fontSize: 10, fontWeight: 600,
//                       color: c.muted, letterSpacing: '0.04em', textTransform: 'uppercase',
//                     }}>slope-intercept</span>
//                   </div>
//                 </div>
//               ) : (
//                 <div style={{
//                   fontSize: 12, color: c.inkSoft, marginTop: 4,
//                 }}>
//                   The derivative is not defined at this $x_0$ — corner, vertical tangent, or outside the domain. Slide $x_0$ to a smooth part of the curve.
//                 </div>
//               )}
//             </div>

//             {/* ---- APPLIED CHIP STRIP ---- */}
//             <div style={{
//               display: 'flex', gap: 6, flexWrap: 'wrap',
//               marginTop: 12, padding: '8px 10px',
//               background: c.soft, border: `1px solid ${c.borderSoft}`,
//               borderRadius: 8, alignItems: 'center',
//             }}>
//               <span style={{
//                 fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
//                 color: c.muted, fontWeight: 600, marginRight: 4,
//               }}>Applied</span>
//               {['a', 'k', 'b', 'h'].map(k => <Chip key={k} k={k} />)}
//               <span style={{ width: 1, height: 16, background: c.border, margin: '0 2px' }} />
//               <Chip k="x₀" valueOverride={x0} accent={COL.tangent} />
//               <Chip k="y₀" valueOverride={y0} accent={COL.f} />
//               <Chip k="m"  valueOverride={m}  accent={COL.tangent} />
//             </div>

//             {/* ---- VISIBILITY LEGEND ---- */}
//             <div style={{
//               display: 'flex', gap: 6, flexWrap: 'wrap',
//               marginTop: 12, padding: '8px 10px',
//               background: c.soft, border: `1px solid ${c.borderSoft}`,
//               borderRadius: 8, alignItems: 'center',
//             }}>
//               <span style={{
//                 fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
//                 color: c.muted, fontWeight: 600, marginRight: 4,
//               }}>Show</span>
//               <LegendChip k="f"       label="f"       formula={forwardEq} color={COL.f} />
//               <LegendChip k="tangent" label="tangent" formula={tangentPS || '—'} color={COL.tangent} />
//             </div>
//           </div>
//         </div>

//         {showInfoPanel && (
//           <aside style={{ ...card, width: 360, padding: 16, flexShrink: 0 }}>
//             <InfoPanel
//               tabs={infoTabs}
//               darkMode={darkMode}
//               {...infoPanelProps}
//             />
//           </aside>
//         )}
//       </div>
//     </div>
//   );
// }


/**
 * TangentLine — v2
 *
 * Changes from v1:
 *   - Moved the x₀ slider out of the left sidebar (where it was
 *     stacked under a, k, b, h and could fall below the fold) and
 *     placed it directly under the graph as the visual lead-in to
 *     the tangent equation. x₀ is the primary interaction of the
 *     tool, so it now lives where the user's eye lands.
 *   - The slider and the equation share one amber-themed card,
 *     visually wiring "this control" to "this output."
 *
 * Tangent Line Explorer. Pick a function family, transform it with
 * the usual (a, k, b, h) sliders, then drag x₀ along the x-axis to
 * see the tangent line at that point — drawn live alongside the
 * function. Two forms of the tangent equation are displayed:
 *
 *   point-slope     :  y = m (x − x₀) + y₀
 *   slope-intercept :  y = m x + (y₀ − m x₀)
 *
 * Built from the same primitives as FunctionInverse v3:
 * VisualizerWithControls + InfoPanel + family picker with grouped
 * sections + left-column sliders so nothing scrolls off.
 *
 * PROPS (all optional)
 *   initialFamily   : string
 *   families        : object        — override built-in FAMILIES
 *   visualizerProps : object        — forwarded to VisualizerWithControls
 *   infoPanelProps  : object        — forwarded to InfoPanel
 *   darkMode        : boolean
 *   showPicker      : boolean
 *   showSliders     : boolean
 *   showInfoPanel   : boolean
 *   maxWidth        : string|number — wrapper cap; default '80vw'
 *
 * RULES OBSERVED (lessons from prior tools):
 *   - Never put $...$ inside **...**  (renders broken).
 *   - <style> blocks use dangerouslySetInnerHTML (avoids hydration mismatch).
 *   - Default graph height kept modest so chip strips stay above the fold.
 */

import React, { useState, useMemo } from 'react';
import { VisualizerWithControls } from '../FunctionVisualizerCoreImproved';
import InfoPanel from '../InfoPanel';


/* ================================================================
   COLORS
   ================================================================ */

const COL = {
  f:       '#3b82f6', // function curve
  tangent: '#f59e0b', // tangent line
  point:   '#ef4444', // contact point (for chip emphasis)
  mirror:  '#94a3b8',
};


/* ================================================================
   FORMATTING
   ================================================================ */

function fmt(v) {
  if (!Number.isFinite(v)) return '—';
  const r = Math.round(v * 100) / 100;
  return Math.abs(r - Math.round(r)) < 1e-4 ? String(Math.round(r)) : String(r);
}

function fmtSigned(v) {
  if (!Number.isFinite(v)) return '— ?';
  if (v === 0) return '+ 0';
  return v >= 0 ? `+ ${fmt(v)}` : `− ${fmt(-v)}`;
}


/* ================================================================
   PARAMETERS
   ================================================================ */

const PARAM_DEFS = {
  a:  { label: 'vertical scale a',     min: -3,  max: 3,  step: 0.05, def: 1, group: 'tx' },
  k:  { label: 'vertical shift k',     min: -6,  max: 6,  step: 0.1,  def: 0, group: 'tx' },
  b:  { label: 'horizontal scale b',   min: -3,  max: 3,  step: 0.05, def: 1, group: 'tx' },
  h:  { label: 'horizontal shift h',   min: -6,  max: 6,  step: 0.1,  def: 0, group: 'tx' },
  x0: { label: 'tangent point x₀',     min: -10, max: 10, step: 0.05, def: 1, group: 'pt' },
};

const DEFAULT_PARAMS = { a: 1, k: 0, b: 1, h: 0, x0: 1 };


/* ================================================================
   FAMILIES
   ================================================================
   Each family declares:
     - name, glyph, group?
     - base(x), baseDeriv(x)   : f and f'
     - eqBase, derivEqBase     : pretty base strings
     - bodyOf(i), derivBodyOf(i): substitution-style strings
     - domainOk(x)             : optional — false → tangent undefined
*/

export const FAMILIES = {
  identity: {
    name: 'Identity',
    glyph: 'M2,22 L24,4',
    base: x => x,
    baseDeriv: () => 1,
    eqBase: 'x',
    derivEqBase: '1',
    bodyOf: i => i,
    derivBodyOf: () => '1',
  },
  linearScale: {
    name: 'Linear (2x)',
    glyph: 'M2,24 L24,2',
    base: x => 2 * x,
    baseDeriv: () => 2,
    eqBase: '2x',
    derivEqBase: '2',
    bodyOf: i => `2·${i}`,
    derivBodyOf: () => '2',
  },
  quadratic: {
    name: 'Quadratic',
    glyph: 'M2,4 Q13,30 24,4',
    base: x => x * x,
    baseDeriv: x => 2 * x,
    eqBase: 'x²',
    derivEqBase: '2x',
    bodyOf: i => `(${i})²`,
    derivBodyOf: i => `2(${i})`,
  },
  cubic: {
    name: 'Cubic',
    glyph: 'M2,22 C8,2 16,30 24,8',
    base: x => x * x * x,
    baseDeriv: x => 3 * x * x,
    eqBase: 'x³',
    derivEqBase: '3x²',
    bodyOf: i => `(${i})³`,
    derivBodyOf: i => `3(${i})²`,
  },
  reciprocal: {
    name: 'Reciprocal',
    glyph: 'M2,4 Q11,4 13,14 M15,14 Q17,26 24,26',
    base: x => (x === 0 ? NaN : 1 / x),
    baseDeriv: x => (x === 0 ? NaN : -1 / (x * x)),
    eqBase: '1/x',
    derivEqBase: '−1/x²',
    bodyOf: i => `1/(${i})`,
    derivBodyOf: i => `−1/(${i})²`,
    domainOk: x => x !== 0,
  },
  exponential: {
    name: 'Exponential',
    glyph: 'M2,26 Q16,26 24,2',
    base: x => Math.exp(x),
    baseDeriv: x => Math.exp(x),
    eqBase: 'eˣ',
    derivEqBase: 'eˣ',
    bodyOf: i => `e^(${i})`,
    derivBodyOf: i => `e^(${i})`,
  },
  logarithmic: {
    name: 'Logarithmic',
    glyph: 'M2,2 Q10,26 24,26',
    base: x => (x > 0 ? Math.log(x) : NaN),
    baseDeriv: x => (x > 0 ? 1 / x : NaN),
    eqBase: 'ln(x)',
    derivEqBase: '1/x',
    bodyOf: i => `ln(${i})`,
    derivBodyOf: i => `1/(${i})`,
    domainOk: x => x > 0,
  },
  sqrt: {
    name: 'Square root',
    glyph: 'M2,24 Q4,8 24,4',
    base: x => (x >= 0 ? Math.sqrt(x) : NaN),
    // Vertical tangent at x = 0; undefined there.
    baseDeriv: x => (x > 0 ? 1 / (2 * Math.sqrt(x)) : NaN),
    eqBase: '√x',
    derivEqBase: '1 / (2√x)',
    bodyOf: i => `√(${i})`,
    derivBodyOf: i => `1/(2√(${i}))`,
    domainOk: x => x > 0,
  },
  absolute: {
    name: 'Absolute',
    glyph: 'M2,4 L13,24 L24,4',
    base: x => Math.abs(x),
    // Not differentiable at 0 — the V has a corner.
    baseDeriv: x => (x > 0 ? 1 : x < 0 ? -1 : NaN),
    eqBase: '|x|',
    derivEqBase: 'sign(x)',
    bodyOf: i => `|${i}|`,
    derivBodyOf: i => `sign(${i})`,
    domainOk: x => x !== 0,
  },
  sine: {
    name: 'Sine',
    group: 'Trigonometric',
    glyph: 'M2,14 Q7,2 12,14 Q17,26 22,14',
    base: x => Math.sin(x),
    baseDeriv: x => Math.cos(x),
    eqBase: 'sin(x)',
    derivEqBase: 'cos(x)',
    bodyOf: i => `sin(${i})`,
    derivBodyOf: i => `cos(${i})`,
  },
  cosine: {
    name: 'Cosine',
    group: 'Trigonometric',
    glyph: 'M2,4 Q7,16 12,4 Q17,-8 22,4',
    base: x => Math.cos(x),
    baseDeriv: x => -Math.sin(x),
    eqBase: 'cos(x)',
    derivEqBase: '−sin(x)',
    bodyOf: i => `cos(${i})`,
    derivBodyOf: i => `−sin(${i})`,
  },
};

const DEFAULT_FAMILIES = FAMILIES;


/* ================================================================
   EQUATION BUILDERS
   ================================================================ */

function buildForwardEq(fam, p) {
  const { a, b, h, k } = p;
  let inner = 'x';
  if (h !== 0) inner = `x ${h >= 0 ? '−' : '+'} ${fmt(Math.abs(h))}`;
  if (b !== 1) inner = h !== 0 ? `${fmt(b)}(${inner})` : `${fmt(b)}x`;
  let body = fam.bodyOf(inner);
  let out;
  if (a === -1) out = `−${body}`;
  else if (a !== 1) out = `${fmt(a)}·${body}`;
  else out = body;
  if (k !== 0) out += ` ${k >= 0 ? '+' : '−'} ${fmt(Math.abs(k))}`;
  return out;
}

function buildDerivEq(fam, p) {
  // g'(x) = a · b · f'(b(x − h))
  const { a, b, h } = p;
  let inner = 'x';
  if (h !== 0) inner = `x ${h >= 0 ? '−' : '+'} ${fmt(Math.abs(h))}`;
  if (b !== 1) inner = h !== 0 ? `${fmt(b)}(${inner})` : `${fmt(b)}x`;
  const factor = a * b;
  const body = fam.derivBodyOf(inner);
  if (factor === 1) return body;
  if (factor === -1) return `−${body}`;
  return `${fmt(factor)}·${body}`;
}

function buildTangentPointSlope(m, x0, y0) {
  if (!Number.isFinite(m) || !Number.isFinite(y0)) return null;
  // y = m (x − x₀) + y₀
  let core;
  const xPart = x0 === 0 ? 'x' : `(x ${x0 >= 0 ? '−' : '+'} ${fmt(Math.abs(x0))})`;
  if (m === 0)        core = '';
  else if (m === 1)   core = xPart;
  else if (m === -1)  core = `−${xPart}`;
  else                core = `${fmt(m)}·${xPart}`;

  if (m === 0) return `y = ${fmt(y0)}`;
  if (y0 === 0) return `y = ${core}`;
  return `y = ${core} ${fmtSigned(y0)}`;
}

function buildTangentSlopeIntercept(m, b) {
  if (!Number.isFinite(m) || !Number.isFinite(b)) return null;
  if (m === 0) return `y = ${fmt(b)}`;
  let core;
  if (m === 1)       core = 'x';
  else if (m === -1) core = '−x';
  else               core = `${fmt(m)}x`;
  if (b === 0) return `y = ${core}`;
  return `y = ${core} ${fmtSigned(b)}`;
}


/* ================================================================
   PICKER GROUPING
   ================================================================ */

function buildPickerEntries(families) {
  const out = [];
  let lastGroup;
  Object.entries(families).forEach(([key, f]) => {
    if (f.group && f.group !== lastGroup) {
      out.push({ type: 'header', label: f.group, key: `__hdr_${f.group}` });
      lastGroup = f.group;
    } else if (!f.group) {
      lastGroup = undefined;
    }
    out.push({ type: 'item', key, fam: f });
  });
  return out;
}


/* ================================================================
   GLYPH
   ================================================================ */

function FamilyGlyph({ d, active, darkMode }) {
  return (
    <svg width="22" height="22" viewBox="0 0 26 28" aria-hidden="true">
      <path d={d} fill="none"
            stroke={active ? COL.f : (darkMode ? '#64748b' : '#94a3b8')}
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


/* ================================================================
   MAIN
   ================================================================ */

export default function TangentLine({
  initialFamily = 'quadratic',
  families = DEFAULT_FAMILIES,
  visualizerProps = {},
  infoPanelProps = {},
  darkMode = false,
  showPicker = true,
  showSliders = true,
  showInfoPanel = true,
  maxWidth = '80vw',
}) {
  const familyKeys = Object.keys(families);
  const startKey = families[initialFamily] ? initialFamily : familyKeys[0];

  const [current, setCurrent] = useState(startKey);
  const [params, setParams] = useState({ ...DEFAULT_PARAMS });
  const [visible, setVisible] = useState({ f: true, tangent: true });

  const fam = families[current] || families[familyKeys[0]];

  /* ---- Derived numbers (point of tangency, slope, intercept) ---- */
  const { a, b, h, k, x0 } = params;
  const forwardFn = useMemo(() => {
    if (a === 0 || b === 0) return () => NaN;
    return x => a * fam.base(b * (x - h)) + k;
  }, [fam, a, b, h, k]);

  const derivAt = (x) => {
    if (a === 0 || b === 0) return NaN;
    const inner = b * (x - h);
    const inDomain = fam.domainOk ? fam.domainOk(inner) : true;
    if (!inDomain) return NaN;
    return a * b * fam.baseDeriv(inner);
  };

  const y0 = useMemo(() => forwardFn(x0), [forwardFn, x0]);
  const m  = useMemo(() => derivAt(x0),    [fam, a, b, h, x0]);   // eslint-disable-line react-hooks/exhaustive-deps
  const yIntercept = Number.isFinite(m) && Number.isFinite(y0) ? y0 - m * x0 : NaN;

  const tangentDefined = Number.isFinite(m) && Number.isFinite(y0);
  const isCritical = tangentDefined && Math.abs(m) < 1e-9;

  const tangentFn = useMemo(() => {
    if (!tangentDefined) return () => NaN;
    return x => m * (x - x0) + y0;
  }, [tangentDefined, m, x0, y0]);

  /* ---- Equation strings ---- */
  const forwardEq = useMemo(() => buildForwardEq(fam, params), [fam, params]);
  const derivEq   = useMemo(() => buildDerivEq(fam, params),   [fam, params]);
  const tangentPS = useMemo(() => buildTangentPointSlope(m, x0, y0), [m, x0, y0]);
  const tangentSI = useMemo(() => buildTangentSlopeIntercept(m, yIntercept), [m, yIntercept]);

  /* ---- Functions array fed to the visualizer ---- */
  const functions = useMemo(() => ([
    {
      fn: forwardFn,
      color: COL.f,
      label: 'f',
      formula: `f(x) = ${forwardEq}`,
      visible: visible.f,
      stroke: 2.25,
    },
    {
      fn: tangentFn,
      color: COL.tangent,
      label: 'tangent',
      formula: tangentPS || 'tangent undefined',
      visible: visible.tangent && tangentDefined,
      stroke: 2,
    },
  ]), [forwardFn, tangentFn, forwardEq, tangentPS, visible, tangentDefined]);

  /* ---- InfoPanel content ---- */
  const explanationContent = useMemo(() => {
    let body =
      `## ${fam.name} — tangent at x₀ = ${fmt(x0)}\n\n` +
      `**Function** · $f(x) = ${forwardEq}$\n\n` +
      `**Derivative** · $f'(x) = ${derivEq}$\n\n`;

    if (!tangentDefined) {
      body += `### Tangent undefined here\n` +
              `At $x_0 = ${fmt(x0)}$ the derivative is **not defined** for this function — either the point lies outside the domain, or the function has a corner or vertical tangent there. Slide $x_0$ to a point where the curve is smooth.\n\n`;
    } else {
      body +=
        `### At this point\n` +
        `- $x_0 = ${fmt(x0)}$, so $y_0 = f(x_0) = ${fmt(y0)}$\n` +
        `- slope $m = f'(x_0) = ${fmt(m)}$\n` +
        `- y-intercept of the tangent: $y_0 - m \\cdot x_0 = ${fmt(yIntercept)}$\n\n` +
        `### Tangent equation\n` +
        `- Point-slope: $${tangentPS.replace(/^y\s*=\s*/, 'y = ')}$\n` +
        `- Slope-intercept: $${tangentSI.replace(/^y\s*=\s*/, 'y = ')}$\n\n` +
        (isCritical
          ? `### Critical point\n` +
            `The slope here is **zero** — the tangent is horizontal. This is a candidate **critical point** (local max, local min, or saddle, depending on what happens just before and after).\n\n`
          : '');
    }
    return body;
  }, [fam, params, forwardEq, derivEq, x0, y0, m, yIntercept, tangentPS, tangentSI, tangentDefined, isCritical]);

  const conceptsContent =
    '## What the tangent line means\n\n' +
    'At any smooth point on a curve, the **tangent line** is the unique straight line that "kisses" the curve — touching it at that point and matching its direction. The slope of that line is the **instantaneous rate of change** of the function there, also known as the derivative.\n\n' +
    '### From secants to tangents\n' +
    'Pick two points on the curve, $(x_0, f(x_0))$ and $(x_0 + \\Delta x, f(x_0 + \\Delta x))$. The line through them is a **secant**, with slope:\n' +
    '$$\\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}$$\n\n' +
    'As $\\Delta x \\to 0$ the secant rotates to become the **tangent**, and its slope becomes the derivative:\n' +
    '$$f\'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}$$\n\n' +
    '### Two forms of the tangent equation\n' +
    'Once you know the slope $m = f\'(x_0)$ and the point $(x_0, y_0)$ on the curve, the tangent line is:\n' +
    '- Point-slope form: $y = m(x - x_0) + y_0$\n' +
    '- Slope-intercept form: $y = m x + (y_0 - m x_0)$\n\n' +
    'Same line, two ways to write it. Point-slope is what you derive; slope-intercept is the simplification.\n\n' +
    '### When the tangent fails to exist\n' +
    'Some places have no well-defined tangent:\n' +
    '- **Corners** — like $|x|$ at $x = 0$: the slope jumps and no single line fits.\n' +
    '- **Vertical tangents** — like $\\sqrt{x}$ at $x = 0$: the slope is infinite.\n' +
    '- **Outside the domain** — like $\\ln(x)$ at $x \\le 0$: the function itself is undefined.\n\n' +
    'In all three cases the derivative does not exist at that point.';

  const infoTabs = useMemo(() => ([
    { key: 'explanation', label: 'Explanation', order: 0, content: explanationContent },
    { key: 'concepts',    label: 'Concepts',    order: 10, content: conceptsContent },
  ]), [explanationContent]);

  /* ---- Styling ---- */
  const fontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  const monoStack = 'ui-monospace, "SF Mono", Menlo, monospace';
  const panelShadow = '0 1px 3px rgba(15,23,42,0.05), 0 8px 24px rgba(15,23,42,0.05)';
  const card = {
    background: darkMode ? '#0f172a' : '#fff',
    border: `1px solid ${darkMode ? '#1e293b' : '#f1f5f9'}`,
    borderRadius: 12,
    boxShadow: panelShadow,
  };
  const c = {
    ink: darkMode ? '#e2e8f0' : '#0f172a',
    inkSoft: darkMode ? '#cbd5e1' : '#334155',
    muted: darkMode ? '#64748b' : '#94a3b8',
    soft: darkMode ? '#1e293b' : '#f8fafc',
    softer: darkMode ? '#0f172a' : '#f1f5f9',
    border: darkMode ? '#334155' : '#e2e8f0',
    borderSoft: darkMode ? '#1e293b' : '#f1f5f9',
    accentSoft: darkMode ? '#1e293b' : '#eff6ff',
    accentBorder: darkMode ? '#334155' : '#dbeafe',
    accentText: darkMode ? '#dbeafe' : '#1e3a8a',
    tangentSoft: darkMode ? '#1e293b' : '#fef3c7',
    tangentText: darkMode ? '#fbbf24' : '#92400e',
  };

  const famBtn = active => ({
    display: 'flex', alignItems: 'center', gap: 10, width: '100%', textAlign: 'left',
    border: '1px solid transparent',
    background: active ? c.accentSoft : 'none',
    borderColor: active ? c.accentBorder : 'transparent',
    borderRadius: 8, padding: '9px 10px', cursor: 'pointer', fontFamily: 'inherit',
    fontSize: 13, fontWeight: active ? 600 : 400,
    color: active ? c.accentText : c.inkSoft,
    transition: 'background 0.12s, border-color 0.12s',
  });

  const sectionTitle = {
    fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
    color: c.muted, fontWeight: 600, margin: '10px 8px 4px',
  };

  const mergedVisualizerProps = {
    defaultWidth: 880,
    defaultHeight: 500,
    ...visualizerProps,
  };

  const pickerEntries = buildPickerEntries(families);

  const selectFamily = (key) => {
    setCurrent(key);
    setParams({ ...DEFAULT_PARAMS });
  };

  const setParam = (k, v) => setParams(prev => ({ ...prev, [k]: v }));
  const resetParams = () => setParams({ ...DEFAULT_PARAMS });
  const resetX0     = () => setParam('x0', DEFAULT_PARAMS.x0);

  const LegendChip = ({ k, label, formula, color }) => {
    const on = visible[k];
    return (
      <button
        onClick={() => setVisible(v => ({ ...v, [k]: !v[k] }))}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 10px', borderRadius: 8,
          border: `1px solid ${on ? color : c.borderSoft}`,
          background: on
            ? (darkMode ? 'rgba(255,255,255,0.04)' : '#fff')
            : (darkMode ? '#0f172a' : c.softer),
          color: on ? c.ink : c.muted,
          opacity: on ? 1 : 0.6,
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: 12,
          transition: 'all 0.15s',
        }}
        title={on ? 'Click to hide' : 'Click to show'}
      >
        <svg width="22" height="6" aria-hidden="true">
          <line x1="0" y1="3" x2="22" y2="3" stroke={color} strokeWidth="3" />
        </svg>
        <span style={{ fontWeight: 600 }}>{label}</span>
        <span style={{ fontFamily: monoStack, fontSize: 11, color: on ? c.inkSoft : c.muted }}>
          {formula}
        </span>
      </button>
    );
  };

  const Chip = ({ k, valueOverride, accent }) => {
    const value = valueOverride !== undefined ? valueOverride : params[k];
    const def = PARAM_DEFS[k];
    const active = def ? value !== def.def : true;
    const tone = accent || (active ? COL.f : c.muted);
    return (
      <span style={{
        fontFamily: monoStack, fontSize: 11,
        padding: '3px 9px', borderRadius: 5,
        display: 'inline-flex', alignItems: 'center', gap: 5,
        color: active ? c.accentText : c.muted,
        background: active ? c.accentSoft : 'transparent',
        border: `1px solid ${active ? c.accentBorder : c.borderSoft}`,
        fontWeight: active ? 600 : 400,
      }}>
        <span style={{ fontWeight: 600, color: tone }}>{k}</span>
        <span>=</span>
        <span>{fmt(value)}</span>
      </span>
    );
  };

  const renderSlider = (key) => {
    const def = PARAM_DEFS[key];
    return (
      <div key={key}>
        <label style={{
          display: 'flex', justifyContent: 'space-between', fontSize: 12,
          color: c.inkSoft, marginBottom: 4, fontVariantNumeric: 'tabular-nums',
        }}>
          <span>{def.label}</span>
          <span style={{ fontFamily: monoStack, color: key === 'x0' ? COL.tangent : COL.f, fontWeight: 600 }}>
            {fmt(params[key])}
          </span>
        </label>
        <input
          type="range" min={def.min} max={def.max} step={def.step}
          value={params[key]}
          onChange={e => setParam(key, parseFloat(e.target.value))}
          style={{ width: '100%', accentColor: key === 'x0' ? COL.tangent : COL.f, cursor: 'pointer' }}
        />
      </div>
    );
  };

  return (
    <div style={{
      width: '100%',
      background: darkMode ? '#020617' : '#f6f7f9',
      minHeight: '100vh',
      fontFamily: fontStack,
      display: 'flex',
      justifyContent: 'center',
      padding: '20px 0',
      boxSizing: 'border-box',
    }}>
      <div style={{
        width: '100%',
        maxWidth,
        display: 'flex',
        gap: 16,
        padding: '0 16px',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
      }}>

        {showPicker && (
          <nav style={{ ...card, width: 220, padding: 10, flexShrink: 0 }}>
            <div style={{ ...sectionTitle, margin: '6px 8px 10px' }}>Function</div>
            {pickerEntries.map(e =>
              e.type === 'header'
                ? <div key={e.key} style={sectionTitle}>{e.label}</div>
                : (
                  <button
                    key={e.key}
                    style={famBtn(e.key === current)}
                    onClick={() => selectFamily(e.key)}
                  >
                    <FamilyGlyph d={e.fam.glyph} active={e.key === current} darkMode={darkMode} />
                    <span>{e.fam.name}</span>
                  </button>
                )
            )}

            {showSliders && (
              <div style={{
                marginTop: 12,
                paddingTop: 12,
                borderTop: `1px solid ${c.borderSoft}`,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 4px 8px' }}>
                  <div style={{
                    fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: c.muted, fontWeight: 600,
                  }}>Parameters</div>
                  <button onClick={resetParams} style={{
                    background: darkMode ? '#0f172a' : '#fff',
                    border: `1px solid ${c.border}`, color: c.inkSoft,
                    padding: '3px 8px', borderRadius: 5,
                    fontFamily: 'inherit', fontSize: 10.5, cursor: 'pointer',
                  }}>Reset</button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '0 4px' }}>
                  {['a', 'k', 'b', 'h'].map(renderSlider)}
                </div>
              </div>
            )}
          </nav>
        )}

        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ ...card, padding: 16 }}>

            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              marginBottom: 12, flexWrap: 'wrap', gap: 8,
            }}>
              <span style={{ fontSize: 15, letterSpacing: '-0.01em', color: c.ink }}>
                {fam.name}
                {isCritical && (
                  <span style={{
                    marginLeft: 10, fontSize: 11, fontWeight: 500,
                    padding: '2px 8px', borderRadius: 4,
                    background: darkMode ? '#1e293b' : '#dcfce7',
                    color: darkMode ? '#86efac' : '#166534',
                    verticalAlign: 'middle',
                  }}>critical point</span>
                )}
                {!tangentDefined && (
                  <span style={{
                    marginLeft: 10, fontSize: 11, fontWeight: 500,
                    padding: '2px 8px', borderRadius: 4,
                    background: darkMode ? '#1e293b' : '#fee2e2',
                    color: darkMode ? '#fca5a5' : '#991b1b',
                    verticalAlign: 'middle',
                  }}>tangent undefined</span>
                )}
              </span>
              <span style={{
                fontFamily: monoStack, fontSize: 11.5,
                padding: '3px 8px', borderRadius: 5,
                color: COL.f, background: c.softer,
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: COL.f }} />
                f(x) = {forwardEq}
              </span>
            </div>

            <VisualizerWithControls
              functions={functions}
              zoom={10}
              showAxisLabels
              showCrosshair
              showCurveTooltip
              labelMode="legend"
              {...mergedVisualizerProps}
            />

            {/* ---- TANGENT CARD: x₀ slider + equation, one unified block ---- */}
            <div style={{
              marginTop: 12,
              background: c.tangentSoft,
              border: `1px solid ${darkMode ? '#334155' : '#fde68a'}`,
              borderLeft: `4px solid ${COL.tangent}`,
              borderRadius: 8,
              padding: '14px 16px',
            }}>
              {/* x₀ slider — the primary interaction */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                gap: 12, marginBottom: 6,
              }}>
                <span style={{
                  fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.08em',
                  color: c.tangentText, fontWeight: 700,
                }}>
                  Tangent point
                </span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                  <span style={{
                    fontFamily: monoStack, fontSize: 18,
                    color: c.ink, fontWeight: 700,
                    fontVariantNumeric: 'tabular-nums',
                  }}>
                    x₀ = {fmt(x0)}
                  </span>
                  <button onClick={resetX0} style={{
                    background: darkMode ? '#0f172a' : '#fff',
                    border: `1px solid ${c.border}`, color: c.inkSoft,
                    padding: '3px 9px', borderRadius: 5,
                    fontFamily: 'inherit', fontSize: 10.5, cursor: 'pointer',
                  }}>Reset</button>
                </div>
              </div>
              <input
                type="range"
                min={PARAM_DEFS.x0.min}
                max={PARAM_DEFS.x0.max}
                step={PARAM_DEFS.x0.step}
                value={x0}
                onChange={e => setParam('x0', parseFloat(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: COL.tangent,
                  cursor: 'pointer',
                  height: 6,
                }}
              />
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                fontFamily: monoStack, fontSize: 10,
                color: c.muted, marginTop: 2,
              }}>
                <span>{PARAM_DEFS.x0.min}</span>
                <span>{PARAM_DEFS.x0.max}</span>
              </div>

              {/* Divider */}
              <div style={{
                height: 1,
                background: darkMode ? '#334155' : '#fde68a',
                margin: '14px -16px 14px',
              }} />

              {/* Tangent equation block */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                gap: 8, marginBottom: tangentDefined ? 8 : 0,
              }}>
                <span style={{
                  fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.08em',
                  color: c.tangentText, fontWeight: 700,
                }}>
                  Tangent line
                </span>
                {tangentDefined && (
                  <span style={{
                    fontFamily: monoStack, fontSize: 11,
                    color: c.tangentText, fontWeight: 600,
                  }}>
                    slope m = {fmt(m)}
                  </span>
                )}
              </div>

              {tangentDefined ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{
                    fontFamily: monoStack, fontSize: 14,
                    color: c.ink, fontWeight: 600,
                  }}>
                    {tangentPS}
                    <span style={{
                      marginLeft: 10, fontSize: 10, fontWeight: 600,
                      color: c.muted, letterSpacing: '0.04em', textTransform: 'uppercase',
                    }}>point-slope</span>
                  </div>
                  <div style={{
                    fontFamily: monoStack, fontSize: 14,
                    color: c.ink, fontWeight: 600,
                  }}>
                    {tangentSI}
                    <span style={{
                      marginLeft: 10, fontSize: 10, fontWeight: 600,
                      color: c.muted, letterSpacing: '0.04em', textTransform: 'uppercase',
                    }}>slope-intercept</span>
                  </div>
                </div>
              ) : (
                <div style={{
                  fontSize: 12, color: c.inkSoft, marginTop: 4,
                }}>
                  The derivative is not defined at this x₀ — corner, vertical tangent, or outside the domain. Slide x₀ to a smooth part of the curve.
                </div>
              )}
            </div>

            {/* ---- APPLIED CHIP STRIP ---- */}
            <div style={{
              display: 'flex', gap: 6, flexWrap: 'wrap',
              marginTop: 12, padding: '8px 10px',
              background: c.soft, border: `1px solid ${c.borderSoft}`,
              borderRadius: 8, alignItems: 'center',
            }}>
              <span style={{
                fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
                color: c.muted, fontWeight: 600, marginRight: 4,
              }}>Applied</span>
              {['a', 'k', 'b', 'h'].map(k => <Chip key={k} k={k} />)}
              <span style={{ width: 1, height: 16, background: c.border, margin: '0 2px' }} />
              <Chip k="x₀" valueOverride={x0} accent={COL.tangent} />
              <Chip k="y₀" valueOverride={y0} accent={COL.f} />
              <Chip k="m"  valueOverride={m}  accent={COL.tangent} />
            </div>

            {/* ---- VISIBILITY LEGEND ---- */}
            <div style={{
              display: 'flex', gap: 6, flexWrap: 'wrap',
              marginTop: 12, padding: '8px 10px',
              background: c.soft, border: `1px solid ${c.borderSoft}`,
              borderRadius: 8, alignItems: 'center',
            }}>
              <span style={{
                fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
                color: c.muted, fontWeight: 600, marginRight: 4,
              }}>Show</span>
              <LegendChip k="f"       label="f"       formula={forwardEq} color={COL.f} />
              <LegendChip k="tangent" label="tangent" formula={tangentPS || '—'} color={COL.tangent} />
            </div>
          </div>
        </div>

        {showInfoPanel && (
          <aside style={{ ...card, width: 360, padding: 16, flexShrink: 0 }}>
            <InfoPanel
              tabs={infoTabs}
              darkMode={darkMode}
              {...infoPanelProps}
            />
          </aside>
        )}
      </div>
    </div>
  );
}