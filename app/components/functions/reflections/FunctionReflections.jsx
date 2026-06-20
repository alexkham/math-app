// // /**
// //  * FunctionReflections
// //  *
// //  * Six reflection types, each as a tab:
// //  *   1. Across x-axis       g(x) = −f(x)
// //  *   2. Across y-axis       g(x) = f(−x)
// //  *   3. Across y = c        g(x) = 2c − f(x)   (slider c)
// //  *   4. Across x = c        g(x) = f(2c − x)   (slider c)
// //  *   5. |f(x)|              partial reflection of negative output
// //  *   6. f(|x|)              right half mirrored to left half
// //  *
// //  * Notes about y = x are intentionally omitted — that's the inverse,
// //  * handled by the dedicated inverse-function tool.
// //  *
// //  * Same design principles as FunctionTransformations v4:
// //  *   - left family picker
// //  *   - graph + status chip
// //  *   - right column: InfoPanel + tab controls
// //  *   - styled tooltips on tabs (TT_STYLES via dangerouslySetInnerHTML)
// //  *   - time-based animation with speed presets (0.5× / 1× / 2× / 4×)
// //  *
// //  * Imports mirror the existing transformations component:
// //  *   import { VisualizerWithControls } from '../FunctionVisualizerCoreImproved';
// //  *   import InfoPanel from '../InfoPanel';
// //  */

// // import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
// // import { VisualizerWithControls } from '../FunctionVisualizerCoreImproved';
// // import InfoPanel from '../InfoPanel';

// // const ACCENT = '#3b82f6';
// // const BASE_COLOR = '#94a3b8';
// // const LINE_COLOR = '#f59e0b';  // reflection line (y = c)

// // function fmt(v) {
// //   const r = Math.round(v * 100) / 100;
// //   return Math.abs(r - Math.round(r)) < 1e-4 ? String(Math.round(r)) : String(r);
// // }

// // /* ===== Reflections registry ===== */
// // const REFLECTIONS = {
// //   xAxis: {
// //     title: 'Across the x-axis',
// //     short: 'x-axis',
// //     formulaPattern: 'g(x) = −f(x)',
// //     tooltip: 'Flips the curve upside down — every point (x, y) becomes (x, −y).',
// //     hasParam: false,
// //     body:
// //       'Negates every output. The whole curve flips upside down.\n' +
// //       '- Roots of $f$ stay roots of $g$ — they\'re on the x-axis already.\n' +
// //       '- Local maxima become local minima, and vice versa.\n' +
// //       '- For **odd functions**, this gives the same result as reflecting across the y-axis.',
// //     fn: base => x => -base(x),
// //     eqFor: fam => `g(x) = −${fam.bodyOf('x')}`,
// //   },
// //   yAxis: {
// //     title: 'Across the y-axis',
// //     short: 'y-axis',
// //     formulaPattern: 'g(x) = f(−x)',
// //     tooltip: 'Mirror image left ↔ right — every point (x, y) becomes (−x, y).',
// //     hasParam: false,
// //     body:
// //       'Replaces every input by its negative. Left and right swap.\n' +
// //       '- For **even functions** like $x^2$, $|x|$, $\\cos x$, the curve maps onto itself.\n' +
// //       '- For **odd functions** like $x$, $x^3$, $\\sin x$, the result equals the x-axis reflection.\n' +
// //       '- For one-sided functions like $\\sqrt{x}$ and $\\ln x$, the domain itself moves to the opposite side.',
// //     fn: base => x => base(-x),
// //     eqFor: fam => `g(x) = ${fam.bodyOf('−x')}`,
// //   },
// //   yLine: {
// //     title: 'Across the horizontal line y = c',
// //     short: 'y = c',
// //     formulaPattern: 'g(x) = 2c − f(x)',
// //     tooltip: 'Mirrors the curve across a horizontal line. Each (x, y) becomes (x, 2c − y).',
// //     hasParam: true,
// //     paramKey: 'cY',
// //     body:
// //       'The horizontal line $y = c$ becomes the axis of symmetry. Every point of $f$ has a mirror partner on $g$, the same horizontal distance from the line but on the opposite side.\n' +
// //       '- Equivalent to **reflecting across the x-axis, then shifting up by $2c$**.\n' +
// //       '- When $c = 0$, this reduces to the x-axis reflection.\n' +
// //       '- Points where $f(x) = c$ are **fixed points** — they sit on the line and don\'t move.',
// //     fn: (base, c) => x => 2 * c - base(x),
// //     eqFor: (fam, p) => `g(x) = ${fmt(2 * p.cY)} − ${fam.bodyOf('x')}`,
// //   },
// //   xLine: {
// //     title: 'Across the vertical line x = c',
// //     short: 'x = c',
// //     formulaPattern: 'g(x) = f(2c − x)',
// //     tooltip: 'Mirrors the curve across a vertical line. Each (x, y) becomes (2c − x, y).',
// //     hasParam: true,
// //     paramKey: 'cX',
// //     body:
// //       'The vertical line $x = c$ becomes the axis of symmetry. Every point of $f$ ends up at the same height on the other side of the line.\n' +
// //       '- Equivalent to **shifting left by $c$, reflecting across the y-axis, then shifting right by $c$**.\n' +
// //       '- When $c = 0$, this reduces to the y-axis reflection.\n' +
// //       '- Points where $x = c$ are fixed.',
// //     fn: (base, c) => x => base(2 * c - x),
// //     eqFor: (fam, p) => `g(x) = ${fam.bodyOf(`${fmt(2 * p.cX)} − x`)}`,
// //   },
// //   absF: {
// //     title: '|f(x)| — output absolute value',
// //     short: '|f|',
// //     formulaPattern: 'g(x) = |f(x)|',
// //     tooltip: 'Reflects only the parts of f below the x-axis. Non-negative parts stay put.',
// //     hasParam: false,
// //     body:
// //       'A **partial reflection**: only the pieces of $f$ that dip below the x-axis get flipped up. Non-negative pieces are unchanged.\n' +
// //       '- Where $f(x) \\geq 0$, $g(x) = f(x)$.\n' +
// //       '- Where $f(x) < 0$, $g(x) = -f(x)$.\n' +
// //       '- The roots of $f$ become **corners** of $g$ — the curve touches the x-axis and bounces.',
// //     fn: base => x => Math.abs(base(x)),
// //     eqFor: fam => `g(x) = |${fam.bodyOf('x')}|`,
// //   },
// //   fAbs: {
// //     title: 'f(|x|) — input absolute value',
// //     short: 'f(|·|)',
// //     formulaPattern: 'g(x) = f(|x|)',
// //     tooltip: 'Replaces the left half of the graph with a mirror copy of the right half.',
// //     hasParam: false,
// //     body:
// //       'For each input $x$, evaluate $f$ at $|x|$ instead. The right half of $f$ (for $x \\geq 0$) is used for **both** sides.\n' +
// //       '- For $x \\geq 0$, $g(x) = f(x)$ (unchanged).\n' +
// //       '- For $x < 0$, $g(x) = f(-x)$ — the right half mirrored over.\n' +
// //       '- The result is **always an even function**, regardless of what $f$ is.',
// //     fn: base => x => base(Math.abs(x)),
// //     eqFor: fam => `g(x) = ${fam.bodyOf('|x|')}`,
// //   },
// // };

// // const REFLECTION_ORDER = ['xAxis', 'yAxis', 'yLine', 'xLine', 'absF', 'fAbs'];

// // /* Single shared c-parameter shape (used independently for yLine and xLine). */
// // const C_DEF = {
// //   label: 'line offset c', min: -6, max: 6,
// //   step: 0.1, def: 1, animStep: 0.1, baseSpeed: 2.0,
// // };

// // const SPEED_PRESETS = [0.5, 1, 2, 4];
// // const DEFAULT_SPEED = 1;

// // /* ===== Bases with symmetry / sign metadata ===== */
// // export const BASES = {
// //   linear: {
// //     name: 'Linear', glyph: 'M2,22 L24,4',
// //     base: x => x, eqBase: 'f(x) = x', bodyOf: i => i,
// //     symmetry: 'odd', nonNegative: false,
// //   },
// //   quadratic: {
// //     name: 'Quadratic', glyph: 'M2,4 Q13,30 24,4',
// //     base: x => x*x, eqBase: 'f(x) = x²', bodyOf: i => `(${i})²`,
// //     symmetry: 'even', nonNegative: true,
// //   },
// //   cubic: {
// //     name: 'Cubic', glyph: 'M2,22 C8,2 16,30 24,8',
// //     base: x => x*x*x, eqBase: 'f(x) = x³', bodyOf: i => `(${i})³`,
// //     symmetry: 'odd', nonNegative: false,
// //   },
// //   reciprocal: {
// //     name: 'Reciprocal', glyph: 'M2,4 Q11,4 13,14 M15,14 Q17,26 24,26',
// //     base: x => 1/x, eqBase: 'f(x) = 1/x', bodyOf: i => `1/(${i})`,
// //     symmetry: 'odd', nonNegative: false,
// //   },
// //   exponential: {
// //     name: 'Exponential', glyph: 'M2,26 Q16,26 24,2',
// //     base: x => Math.exp(x), eqBase: 'f(x) = eˣ', bodyOf: i => `e^(${i})`,
// //     symmetry: 'none', nonNegative: true,
// //   },
// //   logarithmic: {
// //     name: 'Logarithmic', glyph: 'M2,2 Q10,26 24,26',
// //     base: x => x > 0 ? Math.log(x) : NaN, eqBase: 'f(x) = ln(x)', bodyOf: i => `ln(${i})`,
// //     symmetry: 'right-half', nonNegative: false,
// //   },
// //   sine: {
// //     name: 'Sine', group: 'Trigonometric', glyph: 'M2,14 Q7,2 12,14 Q17,26 22,14',
// //     base: x => Math.sin(x), eqBase: 'f(x) = sin(x)', bodyOf: i => `sin(${i})`,
// //     symmetry: 'odd', nonNegative: false,
// //   },
// //   cosine: {
// //     name: 'Cosine', group: 'Trigonometric', glyph: 'M2,4 Q7,16 12,4 Q17,-8 22,4',
// //     base: x => Math.cos(x), eqBase: 'f(x) = cos(x)', bodyOf: i => `cos(${i})`,
// //     symmetry: 'even', nonNegative: false,
// //   },
// //   absolute: {
// //     name: 'Absolute value', glyph: 'M2,4 L13,24 L24,4',
// //     base: x => Math.abs(x), eqBase: 'f(x) = |x|', bodyOf: i => `|${i}|`,
// //     symmetry: 'even', nonNegative: true,
// //   },
// //   sqrt: {
// //     name: 'Square root', glyph: 'M2,24 Q4,8 24,4',
// //     base: x => x >= 0 ? Math.sqrt(x) : NaN, eqBase: 'f(x) = √x', bodyOf: i => `√(${i})`,
// //     symmetry: 'right-half', nonNegative: true,
// //   },
// // };

// // const DEFAULT_BASES = BASES;

// // /* ===== Per-family applied note ===== */
// // function notesFor(refKey, fam, params) {
// //   if (refKey === 'xAxis') {
// //     if (fam.symmetry === 'odd') {
// //       return `**${fam.name}** is an **odd function** ($f(-x) = -f(x)$) — flipping across the x-axis gives the same result as reflecting across the y-axis.`;
// //     }
// //     return `Every output of ${fam.name.toLowerCase()} changes sign. The curve flips upside down through the x-axis.`;
// //   }
// //   if (refKey === 'yAxis') {
// //     if (fam.symmetry === 'even') {
// //       return `**${fam.name}** is an **even function** ($f(-x) = f(x)$) — y-axis reflection leaves it unchanged. The two curves sit exactly on top of each other.`;
// //     }
// //     if (fam.symmetry === 'odd') {
// //       return `**${fam.name}** is an **odd function** — y-axis reflection produces the same result as flipping across the x-axis. Switch tabs to compare.`;
// //     }
// //     if (fam.name === 'Exponential') {
// //       return `$e^{-x}$ is the classic **decay** curve — same shape as $e^x$, falling instead of rising.`;
// //     }
// //     if (fam.name === 'Logarithmic') {
// //       return `$\\ln(x)$ is only defined for $x > 0$. The reflection $\\ln(-x)$ is defined for $x < 0$ — same shape, on the left side instead of the right.`;
// //     }
// //     if (fam.name === 'Square root') {
// //       return `$\\sqrt{x}$ is only defined for $x \\geq 0$. The reflection $\\sqrt{-x}$ swaps the domain to $x \\leq 0$ — the curve now lives on the left.`;
// //     }
// //     return `Left and right swap. Where the curve was on one side, it now lives on the other.`;
// //   }
// //   if (refKey === 'yLine') {
// //     const c = params.cY;
// //     return `Reflecting ${fam.name.toLowerCase()} across the line $y = ${fmt(c)}$. Points where $f$ crosses $y = ${fmt(c)}$ are **fixed** — those are the intersections of $f$ and the orange dashed line on the graph.`;
// //   }
// //   if (refKey === 'xLine') {
// //     const c = params.cX;
// //     return `Reflecting ${fam.name.toLowerCase()} across the vertical line $x = ${fmt(c)}$. Each point of $f$ ends up at the same height on the other side of $x = ${fmt(c)}$.`;
// //   }
// //   if (refKey === 'absF') {
// //     if (fam.nonNegative) {
// //       return `**${fam.name}** is already non-negative wherever it's defined — taking $|f(x)|$ changes nothing.`;
// //     }
// //     return `Wherever ${fam.name.toLowerCase()} dips below the x-axis, that portion flips up. Look for the **corners** at the roots of $f$ — where the curve bounces off the axis.`;
// //   }
// //   if (refKey === 'fAbs') {
// //     if (fam.symmetry === 'even') {
// //       return `**${fam.name}** is already even, so $f(|x|) = f(x)$ — no change.`;
// //     }
// //     if (fam.symmetry === 'right-half') {
// //       return `**${fam.name}** is only defined for non-negative $x$. Using $f(|x|)$ uses that same right-side curve for both sides — the function becomes defined for all $x \\neq 0$.`;
// //     }
// //     return `The right half of ${fam.name.toLowerCase()} (for $x \\geq 0$) is mirrored to the left. The result is symmetric across the y-axis.`;
// //   }
// //   return '';
// // }

// // /* ===== Tooltip CSS ===== */
// // const TT_STYLES = `
// //   .fr-tt-wrap { position: relative; display: inline-flex; }
// //   .fr-tt {
// //     position: absolute;
// //     bottom: calc(100% + 8px);
// //     left: 50%;
// //     transform: translateX(-50%);
// //     background: #0f172a;
// //     color: #f1f5f9;
// //     font-size: 11.5px;
// //     font-weight: 400;
// //     line-height: 1.4;
// //     padding: 8px 10px;
// //     border-radius: 6px;
// //     white-space: normal;
// //     width: 220px;
// //     box-shadow: 0 4px 16px rgba(15, 23, 42, 0.22);
// //     opacity: 0;
// //     pointer-events: none;
// //     transition: opacity 0.14s ease, transform 0.14s ease;
// //     z-index: 100;
// //     text-align: left;
// //   }
// //   .fr-tt-wrap:hover .fr-tt,
// //   .fr-tt-wrap:focus-within .fr-tt {
// //     opacity: 1;
// //     transform: translateX(-50%) translateY(-2px);
// //   }
// //   .fr-tt::after {
// //     content: '';
// //     position: absolute;
// //     top: 100%;
// //     left: 50%;
// //     transform: translateX(-50%);
// //     border: 5px solid transparent;
// //     border-top-color: #0f172a;
// //   }
// //   .fr-tt-title {
// //     font-weight: 600;
// //     color: #fff;
// //     margin-bottom: 3px;
// //     font-size: 11.5px;
// //   }
// // `;

// // function FamilyGlyph({ d, active, darkMode }) {
// //   return (
// //     <svg width="26" height="26" viewBox="0 0 26 28" aria-hidden="true">
// //       <path d={d} fill="none"
// //             stroke={active ? ACCENT : (darkMode ? '#64748b' : '#94a3b8')}
// //             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// //     </svg>
// //   );
// // }

// // export default function FunctionReflections({
// //   initialFamily = 'quadratic',
// //   initialReflection = 'xAxis',
// //   families = DEFAULT_BASES,
// //   visualizerProps = {},
// //   infoPanelProps = {},
// //   extraTabs = [],
// //   darkMode = false,
// //   showPicker = true,
// //   showInfoPanel = true,
// //   maxWidth = '80vw',
// //   onFamilyChange,
// //   onReflectionChange,
// //   onParamsChange,
// // }) {
// //   const familyKeys = Object.keys(families);
// //   const startKey = families[initialFamily] ? initialFamily : familyKeys[0];
// //   const startRef = REFLECTIONS[initialReflection] ? initialReflection : 'xAxis';

// //   const [current, setCurrent] = useState(startKey);
// //   const [activeRef, setActiveRef] = useState(startRef);
// //   const [params, setParams] = useState({ cY: C_DEF.def, cX: C_DEF.def });
// //   const [mode, setMode] = useState({ yLine: 'manual', xLine: 'manual' });
// //   const [animKey, setAnimKey] = useState(null);
// //   const [animSpeed, setAnimSpeed] = useState(DEFAULT_SPEED);

// //   const animDirRef = useRef(1);
// //   const rafRef = useRef(null);
// //   const lastTimeRef = useRef(null);
// //   const paramsRef = useRef(params);
// //   paramsRef.current = params;
// //   const speedRef = useRef(animSpeed);
// //   speedRef.current = animSpeed;

// //   const fam = families[current] || families[familyKeys[0]];
// //   const refl = REFLECTIONS[activeRef];

// //   const stopAnim = useCallback(() => {
// //     if (rafRef.current) cancelAnimationFrame(rafRef.current);
// //     rafRef.current = null;
// //     lastTimeRef.current = null;
// //     setAnimKey(null);
// //   }, []);

// //   useEffect(() => () => stopAnim(), [stopAnim]);

// //   /* paramKey here is 'cY' or 'cX' */
// //   const startAnim = (paramKey) => {
// //     stopAnim();
// //     setAnimKey(paramKey);
// //     lastTimeRef.current = null;

// //     const tick = (ts) => {
// //       if (lastTimeRef.current == null) lastTimeRef.current = ts;
// //       const dt = (ts - lastTimeRef.current) / 1000;
// //       lastTimeRef.current = ts;

// //       const cur = paramsRef.current[paramKey];
// //       let v = cur + C_DEF.baseSpeed * speedRef.current * dt * animDirRef.current;
// //       if (v > C_DEF.max) { v = C_DEF.max; animDirRef.current = -1; }
// //       if (v < C_DEF.min) { v = C_DEF.min; animDirRef.current = 1; }
// //       setParams(p => {
// //         const next = { ...p, [paramKey]: v };
// //         if (onParamsChange) onParamsChange(next);
// //         return next;
// //       });
// //       rafRef.current = requestAnimationFrame(tick);
// //     };
// //     rafRef.current = requestAnimationFrame(tick);
// //   };

// //   const stepParam = (paramKey, dir) => {
// //     stopAnim();
// //     setParams(p => {
// //       let v = p[paramKey] + C_DEF.animStep * dir;
// //       if (v > C_DEF.max) v = C_DEF.max;
// //       if (v < C_DEF.min) v = C_DEF.min;
// //       const next = { ...p, [paramKey]: v };
// //       if (onParamsChange) onParamsChange(next);
// //       return next;
// //     });
// //   };

// //   const selectFamily = key => {
// //     stopAnim();
// //     setCurrent(key);
// //     if (onFamilyChange) onFamilyChange(key, families[key]);
// //   };

// //   const selectReflection = key => {
// //     stopAnim();
// //     setActiveRef(key);
// //     if (onReflectionChange) onReflectionChange(key);
// //   };

// //   const setParam = (k, v) => {
// //     setParams(p => {
// //       const next = { ...p, [k]: v };
// //       if (onParamsChange) onParamsChange(next);
// //       return next;
// //     });
// //   };

// //   const resetParam = () => {
// //     stopAnim();
// //     if (refl.hasParam) setParam(refl.paramKey, C_DEF.def);
// //   };

// //   const isDefault = () => refl.hasParam ? params[refl.paramKey] === C_DEF.def : true;

// //   /* ===== reflected function for the engine ===== */
// //   const reflectedFn = useMemo(() => {
// //     const base = fam.base;
// //     if (refl.hasParam) return refl.fn(base, params[refl.paramKey]);
// //     return refl.fn(base);
// //   }, [refl, fam, params]);

// //   const equationStr = useMemo(() => refl.eqFor(fam, params), [refl, fam, params]);

// //   const functions = useMemo(() => {
// //     const arr = [];
// //     /* horizontal reflection-line reference for y = c */
// //     if (activeRef === 'yLine') {
// //       const cv = params.cY;
// //       arr.push({
// //         fn: () => cv,
// //         color: LINE_COLOR,
// //         label: 'line',
// //         formula: `y = ${fmt(cv)}`,
// //         visible: true,
// //         stroke: 1,
// //         pattern: [3, 3],
// //       });
// //     }
// //     arr.push({ fn: fam.base,  color: BASE_COLOR, label: 'f', formula: fam.eqBase, visible: true, stroke: 1.5, pattern: [5, 5] });
// //     arr.push({ fn: reflectedFn, color: ACCENT,   label: 'g', formula: equationStr, visible: true, stroke: 2.25 });
// //     return arr;
// //   }, [fam, reflectedFn, equationStr, activeRef, params.cY]);

// //   /* InfoPanel content */
// //   const infoTabs = useMemo(() => {
// //     const content =
// //       `## ${refl.title}\n` +
// //       `\`${refl.formulaPattern}\`\n\n` +
// //       `### General\n${refl.body}\n\n` +
// //       `### Applied to ${fam.name.toLowerCase()}\n${notesFor(activeRef, fam, params)}`;
// //     return [
// //       { key: 'explanation', label: 'Explanation', order: 0, content },
// //       ...extraTabs,
// //     ];
// //   }, [activeRef, refl, fam, params, extraTabs]);

// //   /* ===== styles ===== */
// //   const fontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
// //   const monoStack = 'ui-monospace, "SF Mono", Menlo, monospace';
// //   const panelShadow = '0 1px 3px rgba(15,23,42,0.05), 0 8px 24px rgba(15,23,42,0.05)';
// //   const card = {
// //     background: darkMode ? '#0f172a' : '#fff',
// //     border: `1px solid ${darkMode ? '#1e293b' : '#f1f5f9'}`,
// //     borderRadius: 12, boxShadow: panelShadow,
// //   };
// //   const c = {
// //     ink: darkMode ? '#e2e8f0' : '#0f172a',
// //     inkSoft: darkMode ? '#cbd5e1' : '#334155',
// //     muted: darkMode ? '#64748b' : '#94a3b8',
// //     soft: darkMode ? '#1e293b' : '#f8fafc',
// //     softer: darkMode ? '#0f172a' : '#f1f5f9',
// //     border: darkMode ? '#334155' : '#e2e8f0',
// //     borderSoft: darkMode ? '#1e293b' : '#f1f5f9',
// //     accentSoft: darkMode ? '#1e293b' : '#eff6ff',
// //     accentBorder: darkMode ? '#334155' : '#dbeafe',
// //     accentText: darkMode ? '#dbeafe' : '#1e3a8a',
// //   };

// //   const famBtn = active => ({
// //     display: 'flex', alignItems: 'center', gap: 10, width: '100%', textAlign: 'left',
// //     border: '1px solid transparent',
// //     background: active ? c.accentSoft : 'none',
// //     borderColor: active ? c.accentBorder : 'transparent',
// //     borderRadius: 8, padding: '9px 10px', cursor: 'pointer', fontFamily: 'inherit',
// //     fontSize: 13, fontWeight: active ? 600 : 400,
// //     color: active ? c.accentText : c.inkSoft,
// //     transition: 'background 0.12s, border-color 0.12s',
// //   });
// //   const groupHeader = {
// //     fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
// //     color: c.muted, fontWeight: 600, margin: '10px 8px 4px',
// //   };

// //   const mergedVisualizerProps = {
// //     defaultWidth: 880, defaultHeight: 600,
// //     ...visualizerProps,
// //   };

// //   const pickerEntries = [];
// //   let lastGroup;
// //   Object.entries(families).forEach(([key, f]) => {
// //     if (f.group && f.group !== lastGroup) {
// //       pickerEntries.push({ type: 'header', label: f.group, key: `__hdr_${f.group}` });
// //       lastGroup = f.group;
// //     } else if (!f.group) lastGroup = undefined;
// //     pickerEntries.push({ type: 'item', key, fam: f });
// //   });

// //   /* ===== sub-renderers ===== */
// //   const TabButton = ({ refKey }) => {
// //     const r = REFLECTIONS[refKey];
// //     const active = activeRef === refKey;
// //     const showBadge = r.hasParam && params[r.paramKey] !== C_DEF.def;
// //     return (
// //       <span className="fr-tt-wrap" style={{ flex: 1 }}>
// //         <button
// //           onClick={() => selectReflection(refKey)}
// //           style={{
// //             width: '100%',
// //             padding: '8px 5px', border: 'none', borderRadius: 6,
// //             fontFamily: 'inherit', fontSize: 11, fontWeight: 500, cursor: 'pointer',
// //             background: active ? (darkMode ? '#334155' : '#fff') : 'transparent',
// //             color: active ? c.ink : c.muted,
// //             boxShadow: active ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
// //             transition: 'all 0.15s', textAlign: 'center',
// //             display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 4,
// //             minWidth: 0,
// //           }}
// //         >
// //           <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.short}</span>
// //           {showBadge && (
// //             <span style={{
// //               fontFamily: monoStack, fontSize: 10,
// //               padding: '1px 4px', borderRadius: 3,
// //               background: active ? ACCENT : c.accentSoft,
// //               color: active ? '#fff' : ACCENT,
// //               fontWeight: 600, flexShrink: 0,
// //             }}>{fmt(params[r.paramKey])}</span>
// //           )}
// //         </button>
// //         <span className="fr-tt" role="tooltip">
// //           <span className="fr-tt-title">{r.title}</span>
// //           {r.tooltip}
// //         </span>
// //       </span>
// //     );
// //   };

// //   const renderSlider = (paramKey) => (
// //     <div>
// //       <label style={{
// //         display: 'flex', justifyContent: 'space-between', fontSize: 12,
// //         color: c.inkSoft, marginBottom: 4, fontVariantNumeric: 'tabular-nums',
// //       }}>
// //         <span>{C_DEF.label}</span>
// //         <span style={{ fontFamily: monoStack, color: ACCENT, fontWeight: 600 }}>
// //           {fmt(params[paramKey])}
// //         </span>
// //       </label>
// //       <input
// //         type="range" min={C_DEF.min} max={C_DEF.max} step={C_DEF.step}
// //         value={params[paramKey]}
// //         disabled={mode[activeRef] === 'auto'}
// //         onChange={e => setParam(paramKey, parseFloat(e.target.value))}
// //         style={{
// //           width: '100%', accentColor: ACCENT, cursor: 'pointer',
// //           opacity: mode[activeRef] === 'auto' ? 0.5 : 1,
// //         }}
// //       />
// //     </div>
// //   );

// //   const renderSpeedControl = () => (
// //     <div style={{
// //       display: 'flex', gap: 6, justifyContent: 'center', alignItems: 'center',
// //       marginTop: 10,
// //     }}>
// //       <span style={{
// //         fontSize: 9.5, color: c.muted, textTransform: 'uppercase',
// //         letterSpacing: '0.06em', fontWeight: 600, marginRight: 4,
// //       }}>Speed</span>
// //       <div style={{
// //         display: 'inline-flex', gap: 2,
// //         background: c.border, borderRadius: 6, padding: 2,
// //       }}>
// //         {SPEED_PRESETS.map(sp => {
// //           const on = animSpeed === sp;
// //           return (
// //             <button
// //               key={sp}
// //               onClick={() => setAnimSpeed(sp)}
// //               style={{
// //                 padding: '4px 9px', border: 'none', borderRadius: 4,
// //                 fontFamily: monoStack, fontSize: 11, fontWeight: 600, cursor: 'pointer',
// //                 background: on ? (darkMode ? '#334155' : '#fff') : 'transparent',
// //                 color: on ? ACCENT : c.muted,
// //                 boxShadow: on ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
// //                 transition: 'all 0.15s',
// //                 minWidth: 32,
// //               }}
// //             >{sp}×</button>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );

// //   const renderParamTab = () => {
// //     const paramKey = refl.paramKey;
// //     const isAuto = mode[activeRef] === 'auto';
// //     const isPlaying = animKey === paramKey;
// //     const modeBtn = (m, label) => (
// //       <button
// //         onClick={() => {
// //           setMode(prev => ({ ...prev, [activeRef]: m }));
// //           if (m === 'manual') stopAnim();
// //         }}
// //         style={{
// //           padding: '5px 10px', border: 'none', borderRadius: 4,
// //           fontFamily: 'inherit', fontSize: 11, fontWeight: 500, cursor: 'pointer',
// //           background: mode[activeRef] === m ? (darkMode ? '#334155' : '#fff') : 'transparent',
// //           color: mode[activeRef] === m ? c.ink : c.muted,
// //           boxShadow: mode[activeRef] === m ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
// //           transition: 'all 0.15s',
// //         }}
// //       >{label}</button>
// //     );
// //     const animBtnStyle = (primary) => ({
// //       width: primary ? 40 : 32, height: 30,
// //       display: 'flex', alignItems: 'center', justifyContent: 'center',
// //       border: `1px solid ${primary ? ACCENT : c.border}`,
// //       background: primary ? ACCENT : (darkMode ? '#0f172a' : '#fff'),
// //       color: primary ? '#fff' : c.inkSoft,
// //       borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit', fontSize: 12,
// //       transition: 'all 0.12s',
// //     });

// //     return (
// //       <>
// //         <div style={{
// //           display: 'flex', justifyContent: 'space-between', alignItems: 'center',
// //           marginBottom: 12, flexWrap: 'wrap', gap: 8,
// //         }}>
// //           <div style={{
// //             display: 'inline-flex', gap: 2,
// //             background: c.border, borderRadius: 6, padding: 2,
// //           }}>
// //             {modeBtn('manual', 'Manual')}
// //             {modeBtn('auto', 'Auto')}
// //           </div>
// //           <button onClick={resetParam} style={{
// //             background: darkMode ? '#0f172a' : '#fff',
// //             border: `1px solid ${c.border}`, color: c.inkSoft,
// //             padding: '5px 10px', borderRadius: 6,
// //             fontFamily: 'inherit', fontSize: 11.5, cursor: 'pointer',
// //           }}>Reset</button>
// //         </div>
// //         {renderSlider(paramKey)}
// //         {isAuto && (
// //           <>
// //             <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 10 }}>
// //               <button onClick={() => stepParam(paramKey, -1)} style={animBtnStyle(false)} title="Step back">⏮</button>
// //               <button
// //                 onClick={() => isPlaying ? stopAnim() : startAnim(paramKey)}
// //                 style={animBtnStyle(true)}
// //                 title={isPlaying ? 'Pause' : 'Play'}
// //               >{isPlaying ? '⏸' : '▶'}</button>
// //               <button onClick={() => stepParam(paramKey, 1)} style={animBtnStyle(false)} title="Step forward">⏭</button>
// //             </div>
// //             {renderSpeedControl()}
// //           </>
// //         )}
// //       </>
// //     );
// //   };

// //   const renderParamlessTab = () => (
// //     <div style={{
// //       padding: '6px 4px',
// //       fontSize: 12, color: c.muted, fontStyle: 'italic', lineHeight: 1.5,
// //     }}>
// //       No parameters for this reflection — see the <strong style={{ color: c.inkSoft, fontStyle: 'normal' }}>Explanation</strong> panel.
// //     </div>
// //   );

// //   return (
// //     <div style={{
// //       width: '100%', background: darkMode ? '#020617' : '#f6f7f9',
// //       minHeight: '100vh', fontFamily: fontStack,
// //       display: 'flex', justifyContent: 'center',
// //       padding: '20px 0', boxSizing: 'border-box',
// //     }}>
// //       <style dangerouslySetInnerHTML={{ __html: TT_STYLES }} />
// //       <div style={{
// //         width: '100%', maxWidth,
// //         display: 'flex', gap: 16, padding: '0 16px',
// //         alignItems: 'flex-start', boxSizing: 'border-box',
// //       }}>
// //         {showPicker && (
// //           <nav style={{ ...card, width: 200, padding: 10, flexShrink: 0 }}>
// //             <div style={{ ...groupHeader, margin: '6px 8px 10px' }}>Base function</div>
// //             {pickerEntries.map(e =>
// //               e.type === 'header'
// //                 ? <div key={e.key} style={groupHeader}>{e.label}</div>
// //                 : (
// //                   <button key={e.key} style={famBtn(e.key === current)} onClick={() => selectFamily(e.key)}>
// //                     <FamilyGlyph d={e.fam.glyph} active={e.key === current} darkMode={darkMode} />
// //                     <span>{e.fam.name}</span>
// //                   </button>
// //                 )
// //             )}
// //           </nav>
// //         )}

// //         {/* CENTER */}
// //         <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
// //           <div style={{ ...card, padding: 16 }}>
// //             <div style={{
// //               display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
// //               marginBottom: 12, flexWrap: 'wrap', gap: 8,
// //             }}>
// //               <span style={{ fontSize: 15, letterSpacing: '-0.01em', color: c.ink }}>{fam.name}</span>
// //               <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end' }}>
// //                 <span style={{
// //                   fontFamily: monoStack, fontSize: 11.5,
// //                   padding: '3px 8px', borderRadius: 5,
// //                   color: BASE_COLOR, background: c.softer,
// //                   display: 'inline-flex', alignItems: 'center', gap: 6,
// //                 }}>
// //                   <span style={{ width: 8, height: 8, borderRadius: '50%', background: BASE_COLOR }} />
// //                   {fam.eqBase}
// //                 </span>
// //                 <span style={{
// //                   fontFamily: monoStack, fontSize: 11.5,
// //                   padding: '3px 8px', borderRadius: 5,
// //                   color: ACCENT, background: c.accentSoft,
// //                   display: 'inline-flex', alignItems: 'center', gap: 6,
// //                 }}>
// //                   <span style={{ width: 8, height: 8, borderRadius: '50%', background: ACCENT }} />
// //                   {equationStr}
// //                 </span>
// //               </div>
// //             </div>

// //             <VisualizerWithControls
// //               functions={functions}
// //               zoom={10}
// //               showAxisLabels
// //               showCrosshair
// //               showCurveTooltip
// //               labelMode="legend"
// //               {...mergedVisualizerProps}
// //             />

// //             <div style={{
// //               display: 'flex', gap: 8, flexWrap: 'wrap',
// //               marginTop: 12, padding: '8px 10px',
// //               background: c.soft, border: `1px solid ${c.borderSoft}`,
// //               borderRadius: 8, alignItems: 'center',
// //             }}>
// //               <span style={{
// //                 fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
// //                 color: c.muted, fontWeight: 600, marginRight: 4,
// //               }}>Reflecting</span>
// //               <span style={{
// //                 fontFamily: monoStack, fontSize: 11.5,
// //                 padding: '3px 9px', borderRadius: 5,
// //                 color: c.accentText, background: c.accentSoft,
// //                 border: `1px solid ${c.accentBorder}`, fontWeight: 600,
// //               }}>
// //                 {refl.formulaPattern}
// //               </span>
// //               <span style={{
// //                 fontSize: 11, color: c.muted,
// //               }}>· {refl.title.toLowerCase()}</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* RIGHT */}
// //         <div style={{ width: 360, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
// //           {showInfoPanel && (
// //             <aside style={{ ...card, padding: 16 }}>
// //               <InfoPanel tabs={infoTabs} darkMode={darkMode} {...infoPanelProps} />
// //             </aside>
// //           )}

// //           <div style={{ ...card, padding: 12 }}>
// //             <div style={{
// //               display: 'flex', gap: 2,
// //               background: c.border, borderRadius: 8, padding: 3,
// //             }}>
// //               {REFLECTION_ORDER.map(refKey => <TabButton key={refKey} refKey={refKey} />)}
// //             </div>

// //             <div style={{
// //               marginTop: 12, background: c.soft,
// //               border: `1px solid ${c.borderSoft}`,
// //               borderRadius: 8, padding: '12px',
// //             }}>
// //               {refl.hasParam ? renderParamTab() : renderParamlessTab()}
// //             </div>

// //             {/* note for inverse reflection (y = x) — links out */}
// //             <div style={{
// //               marginTop: 10, padding: '8px 10px',
// //               fontSize: 11, color: c.muted, lineHeight: 1.45,
// //               background: c.softer, borderRadius: 6,
// //               border: `1px solid ${c.borderSoft}`,
// //             }}>
// //               <strong style={{ color: c.inkSoft }}>y = x reflection</strong> swaps the roles of $x$ and $y$ — that's the inverse function. Handled by the dedicated <strong style={{ color: c.inkSoft }}>Inverse</strong> tool.
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// /**
//  * FunctionReflections — v2
//  *
//  * Fixes from v1:
//  *   1. Vertical reference line for x = c now drawn (via thin xRange
//  *      shadedRegion). Was previously only mentioned in the text.
//  *   2. Base curve color darkened (slate-600) and dashed pattern
//  *      removed so the original is clearly visible alongside the
//  *      reflected curve. Two distinct, equally readable colors.
//  *   3. y = x reflection added as a tab (the inverse-function case).
//  *      Each base family now carries an explicit `inverse` and
//  *      `inverseFormula`. Plotting uses the closed-form inverse —
//  *      no numerical inversion is needed. For non-one-to-one
//  *      families (quadratic, |x|, sin, cos), the principal branch
//  *      is shown.
//  *   4. Tab label corrected: 'f(|x|)' (was 'f(|·|)').
//  *
//  * Tab order: x-axis · y-axis · y = x · y = c · x = c · |f| · f(|x|).
//  *
//  * Imports unchanged:
//  *   import { VisualizerWithControls } from '../FunctionVisualizerCoreImproved';
//  *   import InfoPanel from '../InfoPanel';
//  */

// import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
// import { VisualizerWithControls } from '../FunctionVisualizerCoreImproved';
// import InfoPanel from '../InfoPanel';

// const ACCENT = '#3b82f6';       // reflected curve (g)
// const BASE_COLOR = '#475569';   // original curve (f) — slate-600, clearly visible
// const LINE_COLOR = '#f59e0b';   // reflection axis (y=c, x=c, y=x)

// function fmt(v) {
//   const r = Math.round(v * 100) / 100;
//   return Math.abs(r - Math.round(r)) < 1e-4 ? String(Math.round(r)) : String(r);
// }

// /* ===== Reflections registry ===== */
// const REFLECTIONS = {
//   xAxis: {
//     title: 'Across the x-axis',
//     short: 'x-axis',
//     formulaPattern: 'g(x) = −f(x)',
//     tooltip: 'Flips the curve upside down — every point (x, y) becomes (x, −y).',
//     hasParam: false,
//     body:
//       'Negates every output. The whole curve flips upside down.\n' +
//       '- Roots of $f$ stay roots of $g$ — they\'re on the x-axis already.\n' +
//       '- Local maxima become local minima, and vice versa.\n' +
//       '- For **odd functions**, this gives the same result as reflecting across the y-axis.',
//     fn: base => x => -base(x),
//     eqFor: fam => `g(x) = −${fam.bodyOf('x')}`,
//   },
//   yAxis: {
//     title: 'Across the y-axis',
//     short: 'y-axis',
//     formulaPattern: 'g(x) = f(−x)',
//     tooltip: 'Mirror image left ↔ right — every point (x, y) becomes (−x, y).',
//     hasParam: false,
//     body:
//       'Replaces every input by its negative. Left and right swap.\n' +
//       '- For **even functions** like $x^2$, $|x|$, $\\cos x$, the curve maps onto itself.\n' +
//       '- For **odd functions** like $x$, $x^3$, $\\sin x$, the result equals the x-axis reflection.\n' +
//       '- For one-sided functions like $\\sqrt{x}$ and $\\ln x$, the domain itself moves to the opposite side.',
//     fn: base => x => base(-x),
//     eqFor: fam => `g(x) = ${fam.bodyOf('−x')}`,
//   },
//   yEqX: {
//     title: 'Across the line y = x',
//     short: 'y = x',
//     formulaPattern: 'g(x) = f⁻¹(x)',
//     tooltip: 'Swaps the roles of x and y — produces the inverse function.',
//     hasParam: false,
//     body:
//       'Every point $(x, y)$ on $f$ becomes $(y, x)$ on $g$ — input and output swap.\n' +
//       '- The reflected curve is the **inverse function** $f^{-1}$.\n' +
//       '- For one-to-one functions, $f^{-1}$ is a function.\n' +
//       '- For non-one-to-one ones ($x^2$, $|x|$, $\\sin x$, $\\cos x$), only the **principal branch** is shown.\n' +
//       '- Fixed points of $f$ (where $f(x) = x$) lie on the line and stay put.',
//     fn: null,  // handled specially: uses fam.inverse
//     eqFor: fam => `g(x) = ${fam.inverseFormula}`,
//   },
//   yLine: {
//     title: 'Across the horizontal line y = c',
//     short: 'y = c',
//     formulaPattern: 'g(x) = 2c − f(x)',
//     tooltip: 'Mirrors the curve across a horizontal line. Each (x, y) becomes (x, 2c − y).',
//     hasParam: true,
//     paramKey: 'cY',
//     body:
//       'The horizontal line $y = c$ becomes the axis of symmetry. Every point of $f$ has a mirror partner on $g$, the same vertical distance from the line but on the opposite side.\n' +
//       '- Equivalent to **reflecting across the x-axis, then shifting up by $2c$**.\n' +
//       '- When $c = 0$, this reduces to the x-axis reflection.\n' +
//       '- Points where $f(x) = c$ are **fixed points** — they sit on the line and don\'t move.',
//     fn: (base, c) => x => 2 * c - base(x),
//     eqFor: (fam, p) => `g(x) = ${fmt(2 * p.cY)} − ${fam.bodyOf('x')}`,
//   },
//   xLine: {
//     title: 'Across the vertical line x = c',
//     short: 'x = c',
//     formulaPattern: 'g(x) = f(2c − x)',
//     tooltip: 'Mirrors the curve across a vertical line. Each (x, y) becomes (2c − x, y).',
//     hasParam: true,
//     paramKey: 'cX',
//     body:
//       'The vertical line $x = c$ becomes the axis of symmetry. Every point of $f$ ends up at the same height on the other side of the line.\n' +
//       '- Equivalent to **shifting left by $c$, reflecting across the y-axis, then shifting right by $c$**.\n' +
//       '- When $c = 0$, this reduces to the y-axis reflection.\n' +
//       '- Points where $x = c$ are fixed.',
//     fn: (base, c) => x => base(2 * c - x),
//     eqFor: (fam, p) => `g(x) = ${fam.bodyOf(`${fmt(2 * p.cX)} − x`)}`,
//   },
//   absF: {
//     title: '|f(x)| — output absolute value',
//     short: '|f|',
//     formulaPattern: 'g(x) = |f(x)|',
//     tooltip: 'Reflects only the parts of f below the x-axis. Non-negative parts stay put.',
//     hasParam: false,
//     body:
//       'A **partial reflection**: only the pieces of $f$ that dip below the x-axis get flipped up. Non-negative pieces are unchanged.\n' +
//       '- Where $f(x) \\geq 0$, $g(x) = f(x)$.\n' +
//       '- Where $f(x) < 0$, $g(x) = -f(x)$.\n' +
//       '- The roots of $f$ become **corners** of $g$ — the curve touches the x-axis and bounces.',
//     fn: base => x => Math.abs(base(x)),
//     eqFor: fam => `g(x) = |${fam.bodyOf('x')}|`,
//   },
//   fAbs: {
//     title: 'f(|x|) — input absolute value',
//     short: 'f(|x|)',
//     formulaPattern: 'g(x) = f(|x|)',
//     tooltip: 'Replaces the left half of the graph with a mirror copy of the right half.',
//     hasParam: false,
//     body:
//       'For each input $x$, evaluate $f$ at $|x|$ instead. The right half of $f$ (for $x \\geq 0$) is used for **both** sides.\n' +
//       '- For $x \\geq 0$, $g(x) = f(x)$ (unchanged).\n' +
//       '- For $x < 0$, $g(x) = f(-x)$ — the right half mirrored over.\n' +
//       '- The result is **always an even function**, regardless of what $f$ is.',
//     fn: base => x => base(Math.abs(x)),
//     eqFor: fam => `g(x) = ${fam.bodyOf('|x|')}`,
//   },
// };

// const REFLECTION_ORDER = ['xAxis', 'yAxis', 'yEqX', 'yLine', 'xLine', 'absF', 'fAbs'];

// const C_DEF = {
//   label: 'line offset c', min: -6, max: 6,
//   step: 0.1, def: 1, animStep: 0.1, baseSpeed: 2.0,
// };

// const SPEED_PRESETS = [0.5, 1, 2, 4];
// const DEFAULT_SPEED = 1;

// /* ===== Bases ===== */
// export const BASES = {
//   linear: {
//     name: 'Linear', glyph: 'M2,22 L24,4',
//     base: x => x, eqBase: 'f(x) = x', bodyOf: i => i,
//     symmetry: 'odd', nonNegative: false,
//     inverse: x => x, inverseFormula: 'x',
//   },
//   quadratic: {
//     name: 'Quadratic', glyph: 'M2,4 Q13,30 24,4',
//     base: x => x*x, eqBase: 'f(x) = x²', bodyOf: i => `(${i})²`,
//     symmetry: 'even', nonNegative: true,
//     inverse: x => x >= 0 ? Math.sqrt(x) : NaN, inverseFormula: '√x',
//   },
//   cubic: {
//     name: 'Cubic', glyph: 'M2,22 C8,2 16,30 24,8',
//     base: x => x*x*x, eqBase: 'f(x) = x³', bodyOf: i => `(${i})³`,
//     symmetry: 'odd', nonNegative: false,
//     inverse: x => Math.cbrt(x), inverseFormula: '∛x',
//   },
//   reciprocal: {
//     name: 'Reciprocal', glyph: 'M2,4 Q11,4 13,14 M15,14 Q17,26 24,26',
//     base: x => 1/x, eqBase: 'f(x) = 1/x', bodyOf: i => `1/(${i})`,
//     symmetry: 'odd', nonNegative: false,
//     inverse: x => x !== 0 ? 1/x : NaN, inverseFormula: '1/x',
//   },
//   exponential: {
//     name: 'Exponential', glyph: 'M2,26 Q16,26 24,2',
//     base: x => Math.exp(x), eqBase: 'f(x) = eˣ', bodyOf: i => `e^(${i})`,
//     symmetry: 'none', nonNegative: true,
//     inverse: x => x > 0 ? Math.log(x) : NaN, inverseFormula: 'ln(x)',
//   },
//   logarithmic: {
//     name: 'Logarithmic', glyph: 'M2,2 Q10,26 24,26',
//     base: x => x > 0 ? Math.log(x) : NaN, eqBase: 'f(x) = ln(x)', bodyOf: i => `ln(${i})`,
//     symmetry: 'right-half', nonNegative: false,
//     inverse: x => Math.exp(x), inverseFormula: 'eˣ',
//   },
//   sine: {
//     name: 'Sine', group: 'Trigonometric', glyph: 'M2,14 Q7,2 12,14 Q17,26 22,14',
//     base: x => Math.sin(x), eqBase: 'f(x) = sin(x)', bodyOf: i => `sin(${i})`,
//     symmetry: 'odd', nonNegative: false,
//     inverse: x => Math.abs(x) <= 1 ? Math.asin(x) : NaN, inverseFormula: 'arcsin(x)',
//   },
//   cosine: {
//     name: 'Cosine', group: 'Trigonometric', glyph: 'M2,4 Q7,16 12,4 Q17,-8 22,4',
//     base: x => Math.cos(x), eqBase: 'f(x) = cos(x)', bodyOf: i => `cos(${i})`,
//     symmetry: 'even', nonNegative: false,
//     inverse: x => Math.abs(x) <= 1 ? Math.acos(x) : NaN, inverseFormula: 'arccos(x)',
//   },
//   absolute: {
//     name: 'Absolute value', glyph: 'M2,4 L13,24 L24,4',
//     base: x => Math.abs(x), eqBase: 'f(x) = |x|', bodyOf: i => `|${i}|`,
//     symmetry: 'even', nonNegative: true,
//     inverse: x => x >= 0 ? x : NaN, inverseFormula: 'x  (for x ≥ 0)',
//   },
//   sqrt: {
//     name: 'Square root', glyph: 'M2,24 Q4,8 24,4',
//     base: x => x >= 0 ? Math.sqrt(x) : NaN, eqBase: 'f(x) = √x', bodyOf: i => `√(${i})`,
//     symmetry: 'right-half', nonNegative: true,
//     inverse: x => x >= 0 ? x*x : NaN, inverseFormula: 'x²  (for x ≥ 0)',
//   },
// };

// const DEFAULT_BASES = BASES;

// /* ===== Per-family applied note ===== */
// function notesFor(refKey, fam, params) {
//   if (refKey === 'xAxis') {
//     if (fam.symmetry === 'odd') {
//       return `**${fam.name}** is an **odd function** ($f(-x) = -f(x)$) — flipping across the x-axis gives the same result as reflecting across the y-axis.`;
//     }
//     return `Every output of ${fam.name.toLowerCase()} changes sign. The curve flips upside down through the x-axis.`;
//   }
//   if (refKey === 'yAxis') {
//     if (fam.symmetry === 'even') {
//       return `**${fam.name}** is an **even function** ($f(-x) = f(x)$) — y-axis reflection leaves it unchanged. The two curves sit exactly on top of each other.`;
//     }
//     if (fam.symmetry === 'odd') {
//       return `**${fam.name}** is an **odd function** — y-axis reflection produces the same result as flipping across the x-axis. Switch tabs to compare.`;
//     }
//     if (fam.name === 'Exponential') {
//       return `$e^{-x}$ is the classic **decay** curve — same shape as $e^x$, falling instead of rising.`;
//     }
//     if (fam.name === 'Logarithmic') {
//       return `$\\ln(x)$ is only defined for $x > 0$. The reflection $\\ln(-x)$ is defined for $x < 0$ — same shape, on the left side instead of the right.`;
//     }
//     if (fam.name === 'Square root') {
//       return `$\\sqrt{x}$ is only defined for $x \\geq 0$. The reflection $\\sqrt{-x}$ swaps the domain to $x \\leq 0$ — the curve now lives on the left.`;
//     }
//     return `Left and right swap. Where the curve was on one side, it now lives on the other.`;
//   }
//   if (refKey === 'yEqX') {
//     const oneToOne = ['Linear', 'Cubic', 'Reciprocal', 'Exponential', 'Logarithmic', 'Square root'].includes(fam.name);
//     if (oneToOne) {
//       return `Reflecting **${fam.name.toLowerCase()}** across $y = x$ gives its inverse $g(x) = ${fam.inverseFormula}$. The two curves are perfect mirror images across the orange line.`;
//     }
//     return `**${fam.name}** is not one-to-one, so its full inverse is multivalued. The reflection here shows only the **principal branch** $g(x) = ${fam.inverseFormula}$.`;
//   }
//   if (refKey === 'yLine') {
//     const c = params.cY;
//     return `Reflecting ${fam.name.toLowerCase()} across the line $y = ${fmt(c)}$. Points where $f$ crosses $y = ${fmt(c)}$ are **fixed** — those are the intersections of $f$ and the orange reference line on the graph.`;
//   }
//   if (refKey === 'xLine') {
//     const c = params.cX;
//     return `Reflecting ${fam.name.toLowerCase()} across the vertical line $x = ${fmt(c)}$ (orange marker on the graph). Each point of $f$ ends up at the same height on the other side of the line.`;
//   }
//   if (refKey === 'absF') {
//     if (fam.nonNegative) {
//       return `**${fam.name}** is already non-negative wherever it's defined — taking $|f(x)|$ changes nothing.`;
//     }
//     return `Wherever ${fam.name.toLowerCase()} dips below the x-axis, that portion flips up. Look for the **corners** at the roots of $f$ — where the curve bounces off the axis.`;
//   }
//   if (refKey === 'fAbs') {
//     if (fam.symmetry === 'even') {
//       return `**${fam.name}** is already even, so $f(|x|) = f(x)$ — no change.`;
//     }
//     if (fam.symmetry === 'right-half') {
//       return `**${fam.name}** is only defined for non-negative $x$. Using $f(|x|)$ uses that same right-side curve for both sides — the function becomes defined for all $x \\neq 0$.`;
//     }
//     return `The right half of ${fam.name.toLowerCase()} (for $x \\geq 0$) is mirrored to the left. The result is symmetric across the y-axis.`;
//   }
//   return '';
// }

// /* ===== Tooltip CSS ===== */
// const TT_STYLES = `
//   .fr-tt-wrap { position: relative; display: inline-flex; }
//   .fr-tt {
//     position: absolute;
//     bottom: calc(100% + 8px);
//     left: 50%;
//     transform: translateX(-50%);
//     background: #0f172a;
//     color: #f1f5f9;
//     font-size: 11.5px;
//     font-weight: 400;
//     line-height: 1.4;
//     padding: 8px 10px;
//     border-radius: 6px;
//     white-space: normal;
//     width: 220px;
//     box-shadow: 0 4px 16px rgba(15, 23, 42, 0.22);
//     opacity: 0;
//     pointer-events: none;
//     transition: opacity 0.14s ease, transform 0.14s ease;
//     z-index: 100;
//     text-align: left;
//   }
//   .fr-tt-wrap:hover .fr-tt,
//   .fr-tt-wrap:focus-within .fr-tt {
//     opacity: 1;
//     transform: translateX(-50%) translateY(-2px);
//   }
//   .fr-tt::after {
//     content: '';
//     position: absolute;
//     top: 100%;
//     left: 50%;
//     transform: translateX(-50%);
//     border: 5px solid transparent;
//     border-top-color: #0f172a;
//   }
//   .fr-tt-title {
//     font-weight: 600;
//     color: #fff;
//     margin-bottom: 3px;
//     font-size: 11.5px;
//   }
// `;

// function FamilyGlyph({ d, active, darkMode }) {
//   return (
//     <svg width="26" height="26" viewBox="0 0 26 28" aria-hidden="true">
//       <path d={d} fill="none"
//             stroke={active ? ACCENT : (darkMode ? '#64748b' : '#94a3b8')}
//             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }

// export default function FunctionReflections({
//   initialFamily = 'quadratic',
//   initialReflection = 'xAxis',
//   families = DEFAULT_BASES,
//   visualizerProps = {},
//   infoPanelProps = {},
//   extraTabs = [],
//   darkMode = false,
//   showPicker = true,
//   showInfoPanel = true,
//   maxWidth = '80vw',
//   onFamilyChange,
//   onReflectionChange,
//   onParamsChange,
// }) {
//   const familyKeys = Object.keys(families);
//   const startKey = families[initialFamily] ? initialFamily : familyKeys[0];
//   const startRef = REFLECTIONS[initialReflection] ? initialReflection : 'xAxis';

//   const [current, setCurrent] = useState(startKey);
//   const [activeRef, setActiveRef] = useState(startRef);
//   const [params, setParams] = useState({ cY: C_DEF.def, cX: C_DEF.def });
//   const [mode, setMode] = useState({ yLine: 'manual', xLine: 'manual' });
//   const [animKey, setAnimKey] = useState(null);
//   const [animSpeed, setAnimSpeed] = useState(DEFAULT_SPEED);

//   const animDirRef = useRef(1);
//   const rafRef = useRef(null);
//   const lastTimeRef = useRef(null);
//   const paramsRef = useRef(params);
//   paramsRef.current = params;
//   const speedRef = useRef(animSpeed);
//   speedRef.current = animSpeed;

//   const fam = families[current] || families[familyKeys[0]];
//   const refl = REFLECTIONS[activeRef];

//   const stopAnim = useCallback(() => {
//     if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     rafRef.current = null;
//     lastTimeRef.current = null;
//     setAnimKey(null);
//   }, []);

//   useEffect(() => () => stopAnim(), [stopAnim]);

//   const startAnim = (paramKey) => {
//     stopAnim();
//     setAnimKey(paramKey);
//     lastTimeRef.current = null;

//     const tick = (ts) => {
//       if (lastTimeRef.current == null) lastTimeRef.current = ts;
//       const dt = (ts - lastTimeRef.current) / 1000;
//       lastTimeRef.current = ts;

//       const cur = paramsRef.current[paramKey];
//       let v = cur + C_DEF.baseSpeed * speedRef.current * dt * animDirRef.current;
//       if (v > C_DEF.max) { v = C_DEF.max; animDirRef.current = -1; }
//       if (v < C_DEF.min) { v = C_DEF.min; animDirRef.current = 1; }
//       setParams(p => {
//         const next = { ...p, [paramKey]: v };
//         if (onParamsChange) onParamsChange(next);
//         return next;
//       });
//       rafRef.current = requestAnimationFrame(tick);
//     };
//     rafRef.current = requestAnimationFrame(tick);
//   };

//   const stepParam = (paramKey, dir) => {
//     stopAnim();
//     setParams(p => {
//       let v = p[paramKey] + C_DEF.animStep * dir;
//       if (v > C_DEF.max) v = C_DEF.max;
//       if (v < C_DEF.min) v = C_DEF.min;
//       const next = { ...p, [paramKey]: v };
//       if (onParamsChange) onParamsChange(next);
//       return next;
//     });
//   };

//   const selectFamily = key => {
//     stopAnim();
//     setCurrent(key);
//     if (onFamilyChange) onFamilyChange(key, families[key]);
//   };

//   const selectReflection = key => {
//     stopAnim();
//     setActiveRef(key);
//     if (onReflectionChange) onReflectionChange(key);
//   };

//   const setParam = (k, v) => {
//     setParams(p => {
//       const next = { ...p, [k]: v };
//       if (onParamsChange) onParamsChange(next);
//       return next;
//     });
//   };

//   const resetParam = () => {
//     stopAnim();
//     if (refl.hasParam) setParam(refl.paramKey, C_DEF.def);
//   };

//   /* ===== reflected function for the engine ===== */
//   const reflectedFn = useMemo(() => {
//     const base = fam.base;
//     if (activeRef === 'yEqX') return fam.inverse;
//     if (refl.hasParam) return refl.fn(base, params[refl.paramKey]);
//     return refl.fn(base);
//   }, [activeRef, refl, fam, params]);

//   const equationStr = useMemo(() => refl.eqFor(fam, params), [refl, fam, params]);

//   const functions = useMemo(() => {
//     const arr = [];
//     /* horizontal reflection-line reference for y = c */
//     if (activeRef === 'yLine') {
//       const cv = params.cY;
//       arr.push({
//         fn: () => cv, color: LINE_COLOR,
//         label: 'axis', formula: `y = ${fmt(cv)}`,
//         visible: true, stroke: 1.25,
//       });
//     }
//     /* y = x reference line */
//     if (activeRef === 'yEqX') {
//       arr.push({
//         fn: x => x, color: LINE_COLOR,
//         label: 'axis', formula: 'y = x',
//         visible: true, stroke: 1.25, pattern: [4, 4],
//       });
//     }
//     arr.push({
//       fn: fam.base, color: BASE_COLOR,
//       label: 'f', formula: fam.eqBase,
//       visible: true, stroke: 1.75,
//     });
//     arr.push({
//       fn: reflectedFn, color: ACCENT,
//       label: 'g', formula: equationStr,
//       visible: true, stroke: 2.25,
//     });
//     return arr;
//   }, [fam, reflectedFn, equationStr, activeRef, params.cY]);

//   /* vertical reference line for x = c — drawn via thin xRange shaded region */
//   const shadedRegions = useMemo(() => {
//     if (activeRef !== 'xLine') return [];
//     const c = params.cX;
//     return [{
//       type: 'xRange',
//       xStart: c - 0.035,
//       xEnd: c + 0.035,
//       color: LINE_COLOR,
//       strokeColor: LINE_COLOR,
//       strokeWidth: 0,
//     }];
//   }, [activeRef, params.cX]);

//   const infoTabs = useMemo(() => {
//     const content =
//       `## ${refl.title}\n` +
//       `\`${refl.formulaPattern}\`\n\n` +
//       `### General\n${refl.body}\n\n` +
//       `### Applied to ${fam.name.toLowerCase()}\n${notesFor(activeRef, fam, params)}`;
//     return [
//       { key: 'explanation', label: 'Explanation', order: 0, content },
//       ...extraTabs,
//     ];
//   }, [activeRef, refl, fam, params, extraTabs]);

//   /* ===== styles ===== */
//   const fontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
//   const monoStack = 'ui-monospace, "SF Mono", Menlo, monospace';
//   const panelShadow = '0 1px 3px rgba(15,23,42,0.05), 0 8px 24px rgba(15,23,42,0.05)';
//   const card = {
//     background: darkMode ? '#0f172a' : '#fff',
//     border: `1px solid ${darkMode ? '#1e293b' : '#f1f5f9'}`,
//     borderRadius: 12, boxShadow: panelShadow,
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
//   const groupHeader = {
//     fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
//     color: c.muted, fontWeight: 600, margin: '10px 8px 4px',
//   };

//   const mergedVisualizerProps = {
//     defaultWidth: 880, defaultHeight: 600,
//     ...visualizerProps,
//   };

//   const pickerEntries = [];
//   let lastGroup;
//   Object.entries(families).forEach(([key, f]) => {
//     if (f.group && f.group !== lastGroup) {
//       pickerEntries.push({ type: 'header', label: f.group, key: `__hdr_${f.group}` });
//       lastGroup = f.group;
//     } else if (!f.group) lastGroup = undefined;
//     pickerEntries.push({ type: 'item', key, fam: f });
//   });

//   /* ===== sub-renderers ===== */
//   const TabButton = ({ refKey }) => {
//     const r = REFLECTIONS[refKey];
//     const active = activeRef === refKey;
//     const showBadge = r.hasParam && params[r.paramKey] !== C_DEF.def;
//     return (
//       <span className="fr-tt-wrap" style={{ flex: 1 }}>
//         <button
//           onClick={() => selectReflection(refKey)}
//           style={{
//             width: '100%',
//             padding: '8px 4px', border: 'none', borderRadius: 6,
//             fontFamily: 'inherit', fontSize: 10.5, fontWeight: 500, cursor: 'pointer',
//             background: active ? (darkMode ? '#334155' : '#fff') : 'transparent',
//             color: active ? c.ink : c.muted,
//             boxShadow: active ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
//             transition: 'all 0.15s', textAlign: 'center',
//             display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 4,
//             minWidth: 0,
//           }}
//         >
//           <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.short}</span>
//           {showBadge && (
//             <span style={{
//               fontFamily: monoStack, fontSize: 9.5,
//               padding: '1px 4px', borderRadius: 3,
//               background: active ? ACCENT : c.accentSoft,
//               color: active ? '#fff' : ACCENT,
//               fontWeight: 600, flexShrink: 0,
//             }}>{fmt(params[r.paramKey])}</span>
//           )}
//         </button>
//         <span className="fr-tt" role="tooltip">
//           <span className="fr-tt-title">{r.title}</span>
//           {r.tooltip}
//         </span>
//       </span>
//     );
//   };

//   const renderSlider = (paramKey) => (
//     <div>
//       <label style={{
//         display: 'flex', justifyContent: 'space-between', fontSize: 12,
//         color: c.inkSoft, marginBottom: 4, fontVariantNumeric: 'tabular-nums',
//       }}>
//         <span>{C_DEF.label}</span>
//         <span style={{ fontFamily: monoStack, color: ACCENT, fontWeight: 600 }}>
//           {fmt(params[paramKey])}
//         </span>
//       </label>
//       <input
//         type="range" min={C_DEF.min} max={C_DEF.max} step={C_DEF.step}
//         value={params[paramKey]}
//         disabled={mode[activeRef] === 'auto'}
//         onChange={e => setParam(paramKey, parseFloat(e.target.value))}
//         style={{
//           width: '100%', accentColor: ACCENT, cursor: 'pointer',
//           opacity: mode[activeRef] === 'auto' ? 0.5 : 1,
//         }}
//       />
//     </div>
//   );

//   const renderSpeedControl = () => (
//     <div style={{
//       display: 'flex', gap: 6, justifyContent: 'center', alignItems: 'center',
//       marginTop: 10,
//     }}>
//       <span style={{
//         fontSize: 9.5, color: c.muted, textTransform: 'uppercase',
//         letterSpacing: '0.06em', fontWeight: 600, marginRight: 4,
//       }}>Speed</span>
//       <div style={{
//         display: 'inline-flex', gap: 2,
//         background: c.border, borderRadius: 6, padding: 2,
//       }}>
//         {SPEED_PRESETS.map(sp => {
//           const on = animSpeed === sp;
//           return (
//             <button
//               key={sp}
//               onClick={() => setAnimSpeed(sp)}
//               style={{
//                 padding: '4px 9px', border: 'none', borderRadius: 4,
//                 fontFamily: monoStack, fontSize: 11, fontWeight: 600, cursor: 'pointer',
//                 background: on ? (darkMode ? '#334155' : '#fff') : 'transparent',
//                 color: on ? ACCENT : c.muted,
//                 boxShadow: on ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
//                 transition: 'all 0.15s',
//                 minWidth: 32,
//               }}
//             >{sp}×</button>
//           );
//         })}
//       </div>
//     </div>
//   );

//   const renderParamTab = () => {
//     const paramKey = refl.paramKey;
//     const isAuto = mode[activeRef] === 'auto';
//     const isPlaying = animKey === paramKey;
//     const modeBtn = (m, label) => (
//       <button
//         onClick={() => {
//           setMode(prev => ({ ...prev, [activeRef]: m }));
//           if (m === 'manual') stopAnim();
//         }}
//         style={{
//           padding: '5px 10px', border: 'none', borderRadius: 4,
//           fontFamily: 'inherit', fontSize: 11, fontWeight: 500, cursor: 'pointer',
//           background: mode[activeRef] === m ? (darkMode ? '#334155' : '#fff') : 'transparent',
//           color: mode[activeRef] === m ? c.ink : c.muted,
//           boxShadow: mode[activeRef] === m ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
//           transition: 'all 0.15s',
//         }}
//       >{label}</button>
//     );
//     const animBtnStyle = (primary) => ({
//       width: primary ? 40 : 32, height: 30,
//       display: 'flex', alignItems: 'center', justifyContent: 'center',
//       border: `1px solid ${primary ? ACCENT : c.border}`,
//       background: primary ? ACCENT : (darkMode ? '#0f172a' : '#fff'),
//       color: primary ? '#fff' : c.inkSoft,
//       borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit', fontSize: 12,
//       transition: 'all 0.12s',
//     });

//     return (
//       <>
//         <div style={{
//           display: 'flex', justifyContent: 'space-between', alignItems: 'center',
//           marginBottom: 12, flexWrap: 'wrap', gap: 8,
//         }}>
//           <div style={{
//             display: 'inline-flex', gap: 2,
//             background: c.border, borderRadius: 6, padding: 2,
//           }}>
//             {modeBtn('manual', 'Manual')}
//             {modeBtn('auto', 'Auto')}
//           </div>
//           <button onClick={resetParam} style={{
//             background: darkMode ? '#0f172a' : '#fff',
//             border: `1px solid ${c.border}`, color: c.inkSoft,
//             padding: '5px 10px', borderRadius: 6,
//             fontFamily: 'inherit', fontSize: 11.5, cursor: 'pointer',
//           }}>Reset</button>
//         </div>
//         {renderSlider(paramKey)}
//         {isAuto && (
//           <>
//             <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 10 }}>
//               <button onClick={() => stepParam(paramKey, -1)} style={animBtnStyle(false)} title="Step back">⏮</button>
//               <button
//                 onClick={() => isPlaying ? stopAnim() : startAnim(paramKey)}
//                 style={animBtnStyle(true)}
//                 title={isPlaying ? 'Pause' : 'Play'}
//               >{isPlaying ? '⏸' : '▶'}</button>
//               <button onClick={() => stepParam(paramKey, 1)} style={animBtnStyle(false)} title="Step forward">⏭</button>
//             </div>
//             {renderSpeedControl()}
//           </>
//         )}
//       </>
//     );
//   };

//   const renderParamlessTab = () => (
//     <div style={{
//       padding: '6px 4px',
//       fontSize: 12, color: c.muted, fontStyle: 'italic', lineHeight: 1.5,
//     }}>
//       No parameters for this reflection — see the <strong style={{ color: c.inkSoft, fontStyle: 'normal' }}>Explanation</strong> panel.
//     </div>
//   );

//   return (
//     <div style={{
//       width: '100%', background: darkMode ? '#020617' : '#f6f7f9',
//       minHeight: '100vh', fontFamily: fontStack,
//       display: 'flex', justifyContent: 'center',
//       padding: '20px 0', boxSizing: 'border-box',
//     }}>
//       <style dangerouslySetInnerHTML={{ __html: TT_STYLES }} />
//       <div style={{
//         width: '100%', maxWidth,
//         display: 'flex', gap: 16, padding: '0 16px',
//         alignItems: 'flex-start', boxSizing: 'border-box',
//       }}>
//         {showPicker && (
//           <nav style={{ ...card, width: 200, padding: 10, flexShrink: 0 }}>
//             <div style={{ ...groupHeader, margin: '6px 8px 10px' }}>Base function</div>
//             {pickerEntries.map(e =>
//               e.type === 'header'
//                 ? <div key={e.key} style={groupHeader}>{e.label}</div>
//                 : (
//                   <button key={e.key} style={famBtn(e.key === current)} onClick={() => selectFamily(e.key)}>
//                     <FamilyGlyph d={e.fam.glyph} active={e.key === current} darkMode={darkMode} />
//                     <span>{e.fam.name}</span>
//                   </button>
//                 )
//             )}
//           </nav>
//         )}

//         {/* CENTER */}
//         <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
//           <div style={{ ...card, padding: 16 }}>
//             <div style={{
//               display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
//               marginBottom: 12, flexWrap: 'wrap', gap: 8,
//             }}>
//               <span style={{ fontSize: 15, letterSpacing: '-0.01em', color: c.ink }}>{fam.name}</span>
//               <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end' }}>
//                 <span style={{
//                   fontFamily: monoStack, fontSize: 11.5,
//                   padding: '3px 8px', borderRadius: 5,
//                   color: BASE_COLOR, background: c.softer,
//                   display: 'inline-flex', alignItems: 'center', gap: 6,
//                 }}>
//                   <span style={{ width: 8, height: 8, borderRadius: '50%', background: BASE_COLOR }} />
//                   {fam.eqBase}
//                 </span>
//                 <span style={{
//                   fontFamily: monoStack, fontSize: 11.5,
//                   padding: '3px 8px', borderRadius: 5,
//                   color: ACCENT, background: c.accentSoft,
//                   display: 'inline-flex', alignItems: 'center', gap: 6,
//                 }}>
//                   <span style={{ width: 8, height: 8, borderRadius: '50%', background: ACCENT }} />
//                   {equationStr}
//                 </span>
//               </div>
//             </div>

//             <VisualizerWithControls
//               functions={functions}
//               shadedRegions={shadedRegions}
//               zoom={10}
//               showAxisLabels
//               showCrosshair
//               showCurveTooltip
//               labelMode="legend"
//               {...mergedVisualizerProps}
//             />

//             <div style={{
//               display: 'flex', gap: 8, flexWrap: 'wrap',
//               marginTop: 12, padding: '8px 10px',
//               background: c.soft, border: `1px solid ${c.borderSoft}`,
//               borderRadius: 8, alignItems: 'center',
//             }}>
//               <span style={{
//                 fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
//                 color: c.muted, fontWeight: 600, marginRight: 4,
//               }}>Reflecting</span>
//               <span style={{
//                 fontFamily: monoStack, fontSize: 11.5,
//                 padding: '3px 9px', borderRadius: 5,
//                 color: c.accentText, background: c.accentSoft,
//                 border: `1px solid ${c.accentBorder}`, fontWeight: 600,
//               }}>
//                 {refl.formulaPattern}
//               </span>
//               <span style={{ fontSize: 11, color: c.muted }}>· {refl.title.toLowerCase()}</span>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div style={{ width: 360, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
//           {showInfoPanel && (
//             <aside style={{ ...card, padding: 16 }}>
//               <InfoPanel tabs={infoTabs} darkMode={darkMode} {...infoPanelProps} />
//             </aside>
//           )}

//           <div style={{ ...card, padding: 12 }}>
//             <div style={{
//               display: 'flex', gap: 2,
//               background: c.border, borderRadius: 8, padding: 3,
//             }}>
//               {REFLECTION_ORDER.map(refKey => <TabButton key={refKey} refKey={refKey} />)}
//             </div>

//             <div style={{
//               marginTop: 12, background: c.soft,
//               border: `1px solid ${c.borderSoft}`,
//               borderRadius: 8, padding: '12px',
//             }}>
//               {refl.hasParam ? renderParamTab() : renderParamlessTab()}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


/**
 * FunctionReflections — v3
 *
 * Fix from v2:
 *   - y = x reflection now draws the **full geometric reflection**
 *     of the curve, not just the principal-branch inverse.
 *     Each base family carries `inverseBranches`: an array of
 *     functions that together form the complete reflected set
 *     of points. For one-to-one bases it's a single function;
 *     for x², |x|, sin, cos it's multiple branches.
 *
 *     Quadratic:  ±√x  (sideways parabola — two branches)
 *     Absolute:   ±x  for x ≥ 0  (sideways V — two branches)
 *     Sine:       arcsin(x) + 2πk  and  π − arcsin(x) + 2πk
 *                 for k = −3..3  (sideways sine — 14 branches)
 *     Cosine:     ±arccos(x) + 2πk for k = −3..3  (14 branches)
 *
 *   - notesFor(yEqX) updated: "principal branch only" wording removed.
 *
 * No engine change required: each branch is plotted as a separate
 * single-valued function. The first branch carries the legend
 * label/formula; the others have empty label/formula so the
 * legend filter (`f.formula || f.label`) skips them.
 */

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { VisualizerWithControls } from '../FunctionVisualizerCoreImproved';
import InfoPanel from '../InfoPanel';

const ACCENT = '#3b82f6';
const BASE_COLOR = '#475569';
const LINE_COLOR = '#f59e0b';

function fmt(v) {
  const r = Math.round(v * 100) / 100;
  return Math.abs(r - Math.round(r)) < 1e-4 ? String(Math.round(r)) : String(r);
}

/* periodic-branch builders for sin and cos reflections */
function sineBranches(kMin = -3, kMax = 3) {
  const arr = [];
  for (let k = kMin; k <= kMax; k++) {
    arr.push(x => Math.abs(x) <= 1 ? Math.asin(x) + 2 * Math.PI * k : NaN);
    arr.push(x => Math.abs(x) <= 1 ? Math.PI - Math.asin(x) + 2 * Math.PI * k : NaN);
  }
  return arr;
}
function cosineBranches(kMin = -3, kMax = 3) {
  const arr = [];
  for (let k = kMin; k <= kMax; k++) {
    arr.push(x => Math.abs(x) <= 1 ? Math.acos(x) + 2 * Math.PI * k : NaN);
    arr.push(x => Math.abs(x) <= 1 ? -Math.acos(x) + 2 * Math.PI * k : NaN);
  }
  return arr;
}

/* ===== Reflections registry ===== */
const REFLECTIONS = {
  xAxis: {
    title: 'Across the x-axis',
    short: 'x-axis',
    formulaPattern: 'g(x) = −f(x)',
    tooltip: 'Flips the curve upside down — every point (x, y) becomes (x, −y).',
    hasParam: false,
    body:
      'Negates every output. The whole curve flips upside down.\n' +
      '- Roots of $f$ stay roots of $g$ — they\'re on the x-axis already.\n' +
      '- Local maxima become local minima, and vice versa.\n' +
      '- For **odd functions**, this gives the same result as reflecting across the y-axis.',
    fn: base => x => -base(x),
    eqFor: fam => `g(x) = −${fam.bodyOf('x')}`,
  },
  yAxis: {
    title: 'Across the y-axis',
    short: 'y-axis',
    formulaPattern: 'g(x) = f(−x)',
    tooltip: 'Mirror image left ↔ right — every point (x, y) becomes (−x, y).',
    hasParam: false,
    body:
      'Replaces every input by its negative. Left and right swap.\n' +
      '- For **even functions** like $x^2$, $|x|$, $\\cos x$, the curve maps onto itself.\n' +
      '- For **odd functions** like $x$, $x^3$, $\\sin x$, the result equals the x-axis reflection.\n' +
      '- For one-sided functions like $\\sqrt{x}$ and $\\ln x$, the domain itself moves to the opposite side.',
    fn: base => x => base(-x),
    eqFor: fam => `g(x) = ${fam.bodyOf('−x')}`,
  },
  yEqX: {
    title: 'Across the line y = x',
    short: 'y = x',
    formulaPattern: 'reflect (x, y) → (y, x)',
    tooltip: 'Swaps x and y coordinates. Reflects every point of f across the diagonal.',
    hasParam: false,
    body:
      'Every point $(x, y)$ on $f$ becomes $(y, x)$ on $g$. The reflected set is the **graph of $f$ rotated 90° across the diagonal**.\n' +
      '- For **one-to-one** functions, the reflection is itself a function — the **inverse** $f^{-1}$.\n' +
      '- For **non-one-to-one** functions (like $x^2$, $|x|$, $\\sin x$, $\\cos x$), the reflection is **multivalued** — multiple $y$ values for the same $x$. All branches are drawn.\n' +
      '- Points on the line $y = x$ (where $f(x) = x$) are fixed.',
    fn: null,
    eqFor: fam => `g: ${fam.inverseFormula}`,
  },
  yLine: {
    title: 'Across the horizontal line y = c',
    short: 'y = c',
    formulaPattern: 'g(x) = 2c − f(x)',
    tooltip: 'Mirrors the curve across a horizontal line. Each (x, y) becomes (x, 2c − y).',
    hasParam: true,
    paramKey: 'cY',
    body:
      'The horizontal line $y = c$ becomes the axis of symmetry. Every point of $f$ has a mirror partner on $g$, the same vertical distance from the line but on the opposite side.\n' +
      '- Equivalent to **reflecting across the x-axis, then shifting up by $2c$**.\n' +
      '- When $c = 0$, this reduces to the x-axis reflection.\n' +
      '- Points where $f(x) = c$ are **fixed points** — they sit on the line and don\'t move.',
    fn: (base, c) => x => 2 * c - base(x),
    eqFor: (fam, p) => `g(x) = ${fmt(2 * p.cY)} − ${fam.bodyOf('x')}`,
  },
  xLine: {
    title: 'Across the vertical line x = c',
    short: 'x = c',
    formulaPattern: 'g(x) = f(2c − x)',
    tooltip: 'Mirrors the curve across a vertical line. Each (x, y) becomes (2c − x, y).',
    hasParam: true,
    paramKey: 'cX',
    body:
      'The vertical line $x = c$ becomes the axis of symmetry. Every point of $f$ ends up at the same height on the other side of the line.\n' +
      '- Equivalent to **shifting left by $c$, reflecting across the y-axis, then shifting right by $c$**.\n' +
      '- When $c = 0$, this reduces to the y-axis reflection.\n' +
      '- Points where $x = c$ are fixed.',
    fn: (base, c) => x => base(2 * c - x),
    eqFor: (fam, p) => `g(x) = ${fam.bodyOf(`${fmt(2 * p.cX)} − x`)}`,
  },
  absF: {
    title: '|f(x)| — output absolute value',
    short: '|f|',
    formulaPattern: 'g(x) = |f(x)|',
    tooltip: 'Reflects only the parts of f below the x-axis. Non-negative parts stay put.',
    hasParam: false,
    body:
      'A **partial reflection**: only the pieces of $f$ that dip below the x-axis get flipped up. Non-negative pieces are unchanged.\n' +
      '- Where $f(x) \\geq 0$, $g(x) = f(x)$.\n' +
      '- Where $f(x) < 0$, $g(x) = -f(x)$.\n' +
      '- The roots of $f$ become **corners** of $g$ — the curve touches the x-axis and bounces.',
    fn: base => x => Math.abs(base(x)),
    eqFor: fam => `g(x) = |${fam.bodyOf('x')}|`,
  },
  fAbs: {
    title: 'f(|x|) — input absolute value',
    short: 'f(|x|)',
    formulaPattern: 'g(x) = f(|x|)',
    tooltip: 'Replaces the left half of the graph with a mirror copy of the right half.',
    hasParam: false,
    body:
      'For each input $x$, evaluate $f$ at $|x|$ instead. The right half of $f$ (for $x \\geq 0$) is used for **both** sides.\n' +
      '- For $x \\geq 0$, $g(x) = f(x)$ (unchanged).\n' +
      '- For $x < 0$, $g(x) = f(-x)$ — the right half mirrored over.\n' +
      '- The result is **always an even function**, regardless of what $f$ is.',
    fn: base => x => base(Math.abs(x)),
    eqFor: fam => `g(x) = ${fam.bodyOf('|x|')}`,
  },
};

const REFLECTION_ORDER = ['xAxis', 'yAxis', 'yEqX', 'yLine', 'xLine', 'absF', 'fAbs'];

const C_DEF = {
  label: 'line offset c', min: -6, max: 6,
  step: 0.1, def: 1, animStep: 0.1, baseSpeed: 2.0,
};

const SPEED_PRESETS = [0.5, 1, 2, 4];
const DEFAULT_SPEED = 1;

/* ===== Bases =====
   inverseBranches: list of single-valued functions whose union
   equals the reflection of f across y = x. */
export const BASES = {
  linear: {
    name: 'Linear', glyph: 'M2,22 L24,4',
    base: x => x, eqBase: 'f(x) = x', bodyOf: i => i,
    symmetry: 'odd', nonNegative: false,
    inverseBranches: [x => x],
    inverseFormula: 'y = x',
    oneToOne: true,
  },
  quadratic: {
    name: 'Quadratic', glyph: 'M2,4 Q13,30 24,4',
    base: x => x*x, eqBase: 'f(x) = x²', bodyOf: i => `(${i})²`,
    symmetry: 'even', nonNegative: true,
    inverseBranches: [
      x => x >= 0 ?  Math.sqrt(x) : NaN,
      x => x >= 0 ? -Math.sqrt(x) : NaN,
    ],
    inverseFormula: 'y = ±√x  (x ≥ 0)',
    oneToOne: false,
  },
  cubic: {
    name: 'Cubic', glyph: 'M2,22 C8,2 16,30 24,8',
    base: x => x*x*x, eqBase: 'f(x) = x³', bodyOf: i => `(${i})³`,
    symmetry: 'odd', nonNegative: false,
    inverseBranches: [x => Math.cbrt(x)],
    inverseFormula: 'y = ∛x',
    oneToOne: true,
  },
  reciprocal: {
    name: 'Reciprocal', glyph: 'M2,4 Q11,4 13,14 M15,14 Q17,26 24,26',
    base: x => 1/x, eqBase: 'f(x) = 1/x', bodyOf: i => `1/(${i})`,
    symmetry: 'odd', nonNegative: false,
    inverseBranches: [x => x !== 0 ? 1/x : NaN],
    inverseFormula: 'y = 1/x',
    oneToOne: true,
  },
  exponential: {
    name: 'Exponential', glyph: 'M2,26 Q16,26 24,2',
    base: x => Math.exp(x), eqBase: 'f(x) = eˣ', bodyOf: i => `e^(${i})`,
    symmetry: 'none', nonNegative: true,
    inverseBranches: [x => x > 0 ? Math.log(x) : NaN],
    inverseFormula: 'y = ln(x)',
    oneToOne: true,
  },
  logarithmic: {
    name: 'Logarithmic', glyph: 'M2,2 Q10,26 24,26',
    base: x => x > 0 ? Math.log(x) : NaN, eqBase: 'f(x) = ln(x)', bodyOf: i => `ln(${i})`,
    symmetry: 'right-half', nonNegative: false,
    inverseBranches: [x => Math.exp(x)],
    inverseFormula: 'y = eˣ',
    oneToOne: true,
  },
  sine: {
    name: 'Sine', group: 'Trigonometric', glyph: 'M2,14 Q7,2 12,14 Q17,26 22,14',
    base: x => Math.sin(x), eqBase: 'f(x) = sin(x)', bodyOf: i => `sin(${i})`,
    symmetry: 'odd', nonNegative: false,
    inverseBranches: sineBranches(),
    inverseFormula: 'y = arcsin(x) + 2πk,  π − arcsin(x) + 2πk',
    oneToOne: false,
  },
  cosine: {
    name: 'Cosine', group: 'Trigonometric', glyph: 'M2,4 Q7,16 12,4 Q17,-8 22,4',
    base: x => Math.cos(x), eqBase: 'f(x) = cos(x)', bodyOf: i => `cos(${i})`,
    symmetry: 'even', nonNegative: false,
    inverseBranches: cosineBranches(),
    inverseFormula: 'y = ±arccos(x) + 2πk',
    oneToOne: false,
  },
  absolute: {
    name: 'Absolute value', glyph: 'M2,4 L13,24 L24,4',
    base: x => Math.abs(x), eqBase: 'f(x) = |x|', bodyOf: i => `|${i}|`,
    symmetry: 'even', nonNegative: true,
    inverseBranches: [
      x => x >= 0 ?  x : NaN,
      x => x >= 0 ? -x : NaN,
    ],
    inverseFormula: 'y = ±x  (x ≥ 0)',
    oneToOne: false,
  },
  sqrt: {
    name: 'Square root', glyph: 'M2,24 Q4,8 24,4',
    base: x => x >= 0 ? Math.sqrt(x) : NaN, eqBase: 'f(x) = √x', bodyOf: i => `√(${i})`,
    symmetry: 'right-half', nonNegative: true,
    inverseBranches: [x => x >= 0 ? x*x : NaN],
    inverseFormula: 'y = x²  (x ≥ 0)',
    oneToOne: true,
  },
};

const DEFAULT_BASES = BASES;

/* ===== Per-family applied note ===== */
function notesFor(refKey, fam, params) {
  if (refKey === 'xAxis') {
    if (fam.symmetry === 'odd') {
      return `**${fam.name}** is an **odd function** ($f(-x) = -f(x)$) — flipping across the x-axis gives the same result as reflecting across the y-axis.`;
    }
    return `Every output of ${fam.name.toLowerCase()} changes sign. The curve flips upside down through the x-axis.`;
  }
  if (refKey === 'yAxis') {
    if (fam.symmetry === 'even') {
      return `**${fam.name}** is an **even function** ($f(-x) = f(x)$) — y-axis reflection leaves it unchanged. The two curves sit exactly on top of each other.`;
    }
    if (fam.symmetry === 'odd') {
      return `**${fam.name}** is an **odd function** — y-axis reflection produces the same result as flipping across the x-axis. Switch tabs to compare.`;
    }
    if (fam.name === 'Exponential') {
      return `$e^{-x}$ is the classic **decay** curve — same shape as $e^x$, falling instead of rising.`;
    }
    if (fam.name === 'Logarithmic') {
      return `$\\ln(x)$ is only defined for $x > 0$. The reflection $\\ln(-x)$ is defined for $x < 0$ — same shape, on the left side instead of the right.`;
    }
    if (fam.name === 'Square root') {
      return `$\\sqrt{x}$ is only defined for $x \\geq 0$. The reflection $\\sqrt{-x}$ swaps the domain to $x \\leq 0$ — the curve now lives on the left.`;
    }
    return `Left and right swap. Where the curve was on one side, it now lives on the other.`;
  }
  if (refKey === 'yEqX') {
    if (fam.oneToOne) {
      return `**${fam.name}** is one-to-one, so the reflection is a function — the inverse $g(x) = ${fam.inverseFormula.replace(/^y = /, '')}$. The two curves are mirror images across the orange diagonal.`;
    }
    return `**${fam.name}** is not one-to-one — the reflection has **multiple $y$ values for the same $x$** and is not itself a function. All branches are drawn together: ${fam.inverseFormula}.`;
  }
  if (refKey === 'yLine') {
    const c = params.cY;
    return `Reflecting ${fam.name.toLowerCase()} across the line $y = ${fmt(c)}$. Points where $f$ crosses $y = ${fmt(c)}$ are **fixed** — those are the intersections of $f$ and the orange reference line on the graph.`;
  }
  if (refKey === 'xLine') {
    const c = params.cX;
    return `Reflecting ${fam.name.toLowerCase()} across the vertical line $x = ${fmt(c)}$ (orange marker on the graph). Each point of $f$ ends up at the same height on the other side of the line.`;
  }
  if (refKey === 'absF') {
    if (fam.nonNegative) {
      return `**${fam.name}** is already non-negative wherever it's defined — taking $|f(x)|$ changes nothing.`;
    }
    return `Wherever ${fam.name.toLowerCase()} dips below the x-axis, that portion flips up. Look for the **corners** at the roots of $f$ — where the curve bounces off the axis.`;
  }
  if (refKey === 'fAbs') {
    if (fam.symmetry === 'even') {
      return `**${fam.name}** is already even, so $f(|x|) = f(x)$ — no change.`;
    }
    if (fam.symmetry === 'right-half') {
      return `**${fam.name}** is only defined for non-negative $x$. Using $f(|x|)$ uses that same right-side curve for both sides — the function becomes defined for all $x \\neq 0$.`;
    }
    return `The right half of ${fam.name.toLowerCase()} (for $x \\geq 0$) is mirrored to the left. The result is symmetric across the y-axis.`;
  }
  return '';
}

/* ===== Tooltip CSS ===== */
const TT_STYLES = `
  .fr-tt-wrap { position: relative; display: inline-flex; }
  .fr-tt {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: #0f172a;
    color: #f1f5f9;
    font-size: 11.5px;
    font-weight: 400;
    line-height: 1.4;
    padding: 8px 10px;
    border-radius: 6px;
    white-space: normal;
    width: 220px;
    box-shadow: 0 4px 16px rgba(15, 23, 42, 0.22);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.14s ease, transform 0.14s ease;
    z-index: 100;
    text-align: left;
  }
  .fr-tt-wrap:hover .fr-tt,
  .fr-tt-wrap:focus-within .fr-tt {
    opacity: 1;
    transform: translateX(-50%) translateY(-2px);
  }
  .fr-tt::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: #0f172a;
  }
  .fr-tt-title {
    font-weight: 600;
    color: #fff;
    margin-bottom: 3px;
    font-size: 11.5px;
  }
`;

function FamilyGlyph({ d, active, darkMode }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 28" aria-hidden="true">
      <path d={d} fill="none"
            stroke={active ? ACCENT : (darkMode ? '#64748b' : '#94a3b8')}
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FunctionReflections({
  initialFamily = 'quadratic',
  initialReflection = 'xAxis',
  families = DEFAULT_BASES,
  visualizerProps = {},
  infoPanelProps = {},
  extraTabs = [],
  darkMode = false,
  showPicker = true,
  showInfoPanel = true,
  maxWidth = '80vw',
  onFamilyChange,
  onReflectionChange,
  onParamsChange,
}) {
  const familyKeys = Object.keys(families);
  const startKey = families[initialFamily] ? initialFamily : familyKeys[0];
  const startRef = REFLECTIONS[initialReflection] ? initialReflection : 'xAxis';

  const [current, setCurrent] = useState(startKey);
  const [activeRef, setActiveRef] = useState(startRef);
  const [params, setParams] = useState({ cY: C_DEF.def, cX: C_DEF.def });
  const [mode, setMode] = useState({ yLine: 'manual', xLine: 'manual' });
  const [animKey, setAnimKey] = useState(null);
  const [animSpeed, setAnimSpeed] = useState(DEFAULT_SPEED);

  const animDirRef = useRef(1);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;
  const speedRef = useRef(animSpeed);
  speedRef.current = animSpeed;

  const fam = families[current] || families[familyKeys[0]];
  const refl = REFLECTIONS[activeRef];

  const stopAnim = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    lastTimeRef.current = null;
    setAnimKey(null);
  }, []);

  useEffect(() => () => stopAnim(), [stopAnim]);

  const startAnim = (paramKey) => {
    stopAnim();
    setAnimKey(paramKey);
    lastTimeRef.current = null;

    const tick = (ts) => {
      if (lastTimeRef.current == null) lastTimeRef.current = ts;
      const dt = (ts - lastTimeRef.current) / 1000;
      lastTimeRef.current = ts;

      const cur = paramsRef.current[paramKey];
      let v = cur + C_DEF.baseSpeed * speedRef.current * dt * animDirRef.current;
      if (v > C_DEF.max) { v = C_DEF.max; animDirRef.current = -1; }
      if (v < C_DEF.min) { v = C_DEF.min; animDirRef.current = 1; }
      setParams(p => {
        const next = { ...p, [paramKey]: v };
        if (onParamsChange) onParamsChange(next);
        return next;
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const stepParam = (paramKey, dir) => {
    stopAnim();
    setParams(p => {
      let v = p[paramKey] + C_DEF.animStep * dir;
      if (v > C_DEF.max) v = C_DEF.max;
      if (v < C_DEF.min) v = C_DEF.min;
      const next = { ...p, [paramKey]: v };
      if (onParamsChange) onParamsChange(next);
      return next;
    });
  };

  const selectFamily = key => {
    stopAnim();
    setCurrent(key);
    if (onFamilyChange) onFamilyChange(key, families[key]);
  };

  const selectReflection = key => {
    stopAnim();
    setActiveRef(key);
    if (onReflectionChange) onReflectionChange(key);
  };

  const setParam = (k, v) => {
    setParams(p => {
      const next = { ...p, [k]: v };
      if (onParamsChange) onParamsChange(next);
      return next;
    });
  };

  const resetParam = () => {
    stopAnim();
    if (refl.hasParam) setParam(refl.paramKey, C_DEF.def);
  };

  /* equation label for the chip + first-branch legend entry */
  const equationStr = useMemo(() => refl.eqFor(fam, params), [refl, fam, params]);

  /* Build the engine's `functions` array.
     For y = x, we plot each inverseBranches function separately;
     the first one carries the legend label, the rest are blank. */
  const functions = useMemo(() => {
    const arr = [];

    if (activeRef === 'yLine') {
      const cv = params.cY;
      arr.push({
        fn: () => cv, color: LINE_COLOR,
        label: 'axis', formula: `y = ${fmt(cv)}`,
        visible: true, stroke: 1.25,
      });
    }
    if (activeRef === 'yEqX') {
      arr.push({
        fn: x => x, color: LINE_COLOR,
        label: 'axis', formula: 'y = x',
        visible: true, stroke: 1.25, pattern: [4, 4],
      });
    }

    /* original */
    arr.push({
      fn: fam.base, color: BASE_COLOR,
      label: 'f', formula: fam.eqBase,
      visible: true, stroke: 1.75,
    });

    /* reflection — either one function or many branches */
    if (activeRef === 'yEqX') {
      fam.inverseBranches.forEach((br, i) => {
        arr.push({
          fn: br, color: ACCENT,
          label: i === 0 ? 'g' : '',
          formula: i === 0 ? `g: ${fam.inverseFormula}` : '',
          visible: true, stroke: 2.25,
        });
      });
    } else {
      const reflectedFn = refl.hasParam
        ? refl.fn(fam.base, params[refl.paramKey])
        : refl.fn(fam.base);
      arr.push({
        fn: reflectedFn, color: ACCENT,
        label: 'g', formula: equationStr,
        visible: true, stroke: 2.25,
      });
    }
    return arr;
  }, [fam, refl, activeRef, params, equationStr]);

  /* vertical reference line for x = c — drawn via thin xRange shaded region */
  const shadedRegions = useMemo(() => {
    if (activeRef !== 'xLine') return [];
    const c = params.cX;
    return [{
      type: 'xRange',
      xStart: c - 0.035,
      xEnd: c + 0.035,
      color: LINE_COLOR,
      strokeColor: LINE_COLOR,
      strokeWidth: 0,
    }];
  }, [activeRef, params.cX]);

  const infoTabs = useMemo(() => {
    const content =
      `## ${refl.title}\n` +
      `\`${refl.formulaPattern}\`\n\n` +
      `### General\n${refl.body}\n\n` +
      `### Applied to ${fam.name.toLowerCase()}\n${notesFor(activeRef, fam, params)}`;
    return [
      { key: 'explanation', label: 'Explanation', order: 0, content },
      ...extraTabs,
    ];
  }, [activeRef, refl, fam, params, extraTabs]);

  /* ===== styles ===== */
  const fontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  const monoStack = 'ui-monospace, "SF Mono", Menlo, monospace';
  const panelShadow = '0 1px 3px rgba(15,23,42,0.05), 0 8px 24px rgba(15,23,42,0.05)';
  const card = {
    background: darkMode ? '#0f172a' : '#fff',
    border: `1px solid ${darkMode ? '#1e293b' : '#f1f5f9'}`,
    borderRadius: 12, boxShadow: panelShadow,
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
  const groupHeader = {
    fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
    color: c.muted, fontWeight: 600, margin: '10px 8px 4px',
  };

  const mergedVisualizerProps = {
    defaultWidth: 880, defaultHeight: 600,
    ...visualizerProps,
  };

  const pickerEntries = [];
  let lastGroup;
  Object.entries(families).forEach(([key, f]) => {
    if (f.group && f.group !== lastGroup) {
      pickerEntries.push({ type: 'header', label: f.group, key: `__hdr_${f.group}` });
      lastGroup = f.group;
    } else if (!f.group) lastGroup = undefined;
    pickerEntries.push({ type: 'item', key, fam: f });
  });

  /* ===== sub-renderers ===== */
  const TabButton = ({ refKey }) => {
    const r = REFLECTIONS[refKey];
    const active = activeRef === refKey;
    const showBadge = r.hasParam && params[r.paramKey] !== C_DEF.def;
    return (
      <span className="fr-tt-wrap" style={{ flex: 1 }}>
        <button
          onClick={() => selectReflection(refKey)}
          style={{
            width: '100%',
            padding: '8px 4px', border: 'none', borderRadius: 6,
            fontFamily: 'inherit', fontSize: 10.5, fontWeight: 500, cursor: 'pointer',
            background: active ? (darkMode ? '#334155' : '#fff') : 'transparent',
            color: active ? c.ink : c.muted,
            boxShadow: active ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
            transition: 'all 0.15s', textAlign: 'center',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 4,
            minWidth: 0,
          }}
        >
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.short}</span>
          {showBadge && (
            <span style={{
              fontFamily: monoStack, fontSize: 9.5,
              padding: '1px 4px', borderRadius: 3,
              background: active ? ACCENT : c.accentSoft,
              color: active ? '#fff' : ACCENT,
              fontWeight: 600, flexShrink: 0,
            }}>{fmt(params[r.paramKey])}</span>
          )}
        </button>
        <span className="fr-tt" role="tooltip">
          <span className="fr-tt-title">{r.title}</span>
          {r.tooltip}
        </span>
      </span>
    );
  };

  const renderSlider = (paramKey) => (
    <div>
      <label style={{
        display: 'flex', justifyContent: 'space-between', fontSize: 12,
        color: c.inkSoft, marginBottom: 4, fontVariantNumeric: 'tabular-nums',
      }}>
        <span>{C_DEF.label}</span>
        <span style={{ fontFamily: monoStack, color: ACCENT, fontWeight: 600 }}>
          {fmt(params[paramKey])}
        </span>
      </label>
      <input
        type="range" min={C_DEF.min} max={C_DEF.max} step={C_DEF.step}
        value={params[paramKey]}
        disabled={mode[activeRef] === 'auto'}
        onChange={e => setParam(paramKey, parseFloat(e.target.value))}
        style={{
          width: '100%', accentColor: ACCENT, cursor: 'pointer',
          opacity: mode[activeRef] === 'auto' ? 0.5 : 1,
        }}
      />
    </div>
  );

  const renderSpeedControl = () => (
    <div style={{
      display: 'flex', gap: 6, justifyContent: 'center', alignItems: 'center',
      marginTop: 10,
    }}>
      <span style={{
        fontSize: 9.5, color: c.muted, textTransform: 'uppercase',
        letterSpacing: '0.06em', fontWeight: 600, marginRight: 4,
      }}>Speed</span>
      <div style={{
        display: 'inline-flex', gap: 2,
        background: c.border, borderRadius: 6, padding: 2,
      }}>
        {SPEED_PRESETS.map(sp => {
          const on = animSpeed === sp;
          return (
            <button
              key={sp}
              onClick={() => setAnimSpeed(sp)}
              style={{
                padding: '4px 9px', border: 'none', borderRadius: 4,
                fontFamily: monoStack, fontSize: 11, fontWeight: 600, cursor: 'pointer',
                background: on ? (darkMode ? '#334155' : '#fff') : 'transparent',
                color: on ? ACCENT : c.muted,
                boxShadow: on ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
                transition: 'all 0.15s',
                minWidth: 32,
              }}
            >{sp}×</button>
          );
        })}
      </div>
    </div>
  );

  const renderParamTab = () => {
    const paramKey = refl.paramKey;
    const isAuto = mode[activeRef] === 'auto';
    const isPlaying = animKey === paramKey;
    const modeBtn = (m, label) => (
      <button
        onClick={() => {
          setMode(prev => ({ ...prev, [activeRef]: m }));
          if (m === 'manual') stopAnim();
        }}
        style={{
          padding: '5px 10px', border: 'none', borderRadius: 4,
          fontFamily: 'inherit', fontSize: 11, fontWeight: 500, cursor: 'pointer',
          background: mode[activeRef] === m ? (darkMode ? '#334155' : '#fff') : 'transparent',
          color: mode[activeRef] === m ? c.ink : c.muted,
          boxShadow: mode[activeRef] === m ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
          transition: 'all 0.15s',
        }}
      >{label}</button>
    );
    const animBtnStyle = (primary) => ({
      width: primary ? 40 : 32, height: 30,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      border: `1px solid ${primary ? ACCENT : c.border}`,
      background: primary ? ACCENT : (darkMode ? '#0f172a' : '#fff'),
      color: primary ? '#fff' : c.inkSoft,
      borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit', fontSize: 12,
      transition: 'all 0.12s',
    });

    return (
      <>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: 12, flexWrap: 'wrap', gap: 8,
        }}>
          <div style={{
            display: 'inline-flex', gap: 2,
            background: c.border, borderRadius: 6, padding: 2,
          }}>
            {modeBtn('manual', 'Manual')}
            {modeBtn('auto', 'Auto')}
          </div>
          <button onClick={resetParam} style={{
            background: darkMode ? '#0f172a' : '#fff',
            border: `1px solid ${c.border}`, color: c.inkSoft,
            padding: '5px 10px', borderRadius: 6,
            fontFamily: 'inherit', fontSize: 11.5, cursor: 'pointer',
          }}>Reset</button>
        </div>
        {renderSlider(paramKey)}
        {isAuto && (
          <>
            <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 10 }}>
              <button onClick={() => stepParam(paramKey, -1)} style={animBtnStyle(false)} title="Step back">⏮</button>
              <button
                onClick={() => isPlaying ? stopAnim() : startAnim(paramKey)}
                style={animBtnStyle(true)}
                title={isPlaying ? 'Pause' : 'Play'}
              >{isPlaying ? '⏸' : '▶'}</button>
              <button onClick={() => stepParam(paramKey, 1)} style={animBtnStyle(false)} title="Step forward">⏭</button>
            </div>
            {renderSpeedControl()}
          </>
        )}
      </>
    );
  };

  const renderParamlessTab = () => (
    <div style={{
      padding: '6px 4px',
      fontSize: 12, color: c.muted, fontStyle: 'italic', lineHeight: 1.5,
    }}>
      No parameters for this reflection — see the <strong style={{ color: c.inkSoft, fontStyle: 'normal' }}>Explanation</strong> panel.
    </div>
  );

  return (
    <div style={{
      width: '100%', background: darkMode ? '#020617' : '#f6f7f9',
      minHeight: '100vh', fontFamily: fontStack,
      display: 'flex', justifyContent: 'center',
      padding: '20px 0', boxSizing: 'border-box',
    }}>
      <style dangerouslySetInnerHTML={{ __html: TT_STYLES }} />
      <div style={{
        width: '100%', maxWidth,
        display: 'flex', gap: 16, padding: '0 16px',
        alignItems: 'flex-start', boxSizing: 'border-box',
      }}>
        {showPicker && (
          <nav style={{ ...card, width: 200, padding: 10, flexShrink: 0 }}>
            <div style={{ ...groupHeader, margin: '6px 8px 10px' }}>Base function</div>
            {pickerEntries.map(e =>
              e.type === 'header'
                ? <div key={e.key} style={groupHeader}>{e.label}</div>
                : (
                  <button key={e.key} style={famBtn(e.key === current)} onClick={() => selectFamily(e.key)}>
                    <FamilyGlyph d={e.fam.glyph} active={e.key === current} darkMode={darkMode} />
                    <span>{e.fam.name}</span>
                  </button>
                )
            )}
          </nav>
        )}

        {/* CENTER */}
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ ...card, padding: 16 }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              marginBottom: 12, flexWrap: 'wrap', gap: 8,
            }}>
              <span style={{ fontSize: 15, letterSpacing: '-0.01em', color: c.ink }}>{fam.name}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end' }}>
                <span style={{
                  fontFamily: monoStack, fontSize: 11.5,
                  padding: '3px 8px', borderRadius: 5,
                  color: BASE_COLOR, background: c.softer,
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: BASE_COLOR }} />
                  {fam.eqBase}
                </span>
                <span style={{
                  fontFamily: monoStack, fontSize: 11.5,
                  padding: '3px 8px', borderRadius: 5,
                  color: ACCENT, background: c.accentSoft,
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: ACCENT }} />
                  {equationStr}
                </span>
              </div>
            </div>

            <VisualizerWithControls
              functions={functions}
              shadedRegions={shadedRegions}
              zoom={10}
              showAxisLabels
              showCrosshair
              showCurveTooltip
              labelMode="legend"
              {...mergedVisualizerProps}
            />

            <div style={{
              display: 'flex', gap: 8, flexWrap: 'wrap',
              marginTop: 12, padding: '8px 10px',
              background: c.soft, border: `1px solid ${c.borderSoft}`,
              borderRadius: 8, alignItems: 'center',
            }}>
              <span style={{
                fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
                color: c.muted, fontWeight: 600, marginRight: 4,
              }}>Reflecting</span>
              <span style={{
                fontFamily: monoStack, fontSize: 11.5,
                padding: '3px 9px', borderRadius: 5,
                color: c.accentText, background: c.accentSoft,
                border: `1px solid ${c.accentBorder}`, fontWeight: 600,
              }}>
                {refl.formulaPattern}
              </span>
              <span style={{ fontSize: 11, color: c.muted }}>· {refl.title.toLowerCase()}</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ width: 360, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {showInfoPanel && (
            <aside style={{ ...card, padding: 16 }}>
              <InfoPanel tabs={infoTabs} darkMode={darkMode} {...infoPanelProps} />
            </aside>
          )}

          <div style={{ ...card, padding: 12 }}>
            <div style={{
              display: 'flex', gap: 2,
              background: c.border, borderRadius: 8, padding: 3,
            }}>
              {REFLECTION_ORDER.map(refKey => <TabButton key={refKey} refKey={refKey} />)}
            </div>

            <div style={{
              marginTop: 12, background: c.soft,
              border: `1px solid ${c.borderSoft}`,
              borderRadius: 8, padding: '12px',
            }}>
              {refl.hasParam ? renderParamTab() : renderParamlessTab()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}