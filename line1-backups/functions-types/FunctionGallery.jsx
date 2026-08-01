// // // import React, { useState, useMemo } from 'react';
// // // import { VisualizerWithControls } from '../FunctionVisualizerCoreImproved';
// // // import InfoPanel from '../InfoPanel';

// // // /* =====================================================
// // //    FUNCTION GALLERY

// // //    PROPS (all optional)
// // //      initialFamily      : string
// // //      families           : object             — override built-in FAMILIES
// // //      explanations       : { [key]: string }  — override per-family explanation text
// // //      visualizerProps    : object             — forwarded to VisualizerWithControls
// // //      infoPanelProps     : object             — forwarded to InfoPanel
// // //      extraTabs          : TabDef[]           — appended to per-family tabs
// // //      darkMode           : boolean
// // //      showPicker         : boolean
// // //      showSliders        : boolean
// // //      showInfoPanel      : boolean
// // //      onFamilyChange     : (key, family) => void
// // //      onParamsChange     : (paramVals) => void

// // //    Requires the engine file to export VisualizerWithControls.
// // //    ===================================================== */

// // // const ACCENT = '#3b82f6';

// // // const DEFAULT_FAMILIES = {
// // //   linear: {
// // //     name: 'Linear',
// // //     glyph: 'M2,22 L24,4',
// // //     params: [
// // //       { k: 'a', label: 'slope a', min: -4, max: 4, step: 0.1, def: 1 },
// // //       { k: 'b', label: 'intercept b', min: -8, max: 8, step: 0.5, def: 0 },
// // //     ],
// // //     fn: p => x => p.a * x + p.b,
// // //     eq: p => `f(x) = ${fmt(p.a)}x ${sign(p.b)} ${fmt(Math.abs(p.b))}`,
// // //     explanation:
// // //       '## Linear\n' +
// // //       'A **straight line**: $f(x) = ax + b$.\n' +
// // //       'The slope **a** sets the tilt — every step right of 1 moves the line up by $a$. ' +
// // //       'The intercept **b** slides the whole line vertically; it is the value where the line crosses the $y$-axis.\n' +
// // //       '- Constant rate of change everywhere\n' +
// // //       '- Exactly one root (unless $a = 0$)',
// // //     links: [{ label: 'Linear functions', url: 'https://en.wikipedia.org/wiki/Linear_function', tag: 'wiki' }],
// // //   },
// // //   quadratic: {
// // //     name: 'Quadratic',
// // //     glyph: 'M2,4 Q13,30 24,4',
// // //     params: [
// // //       { k: 'a', label: 'a', min: -2, max: 2, step: 0.1, def: 0.3 },
// // //       { k: 'b', label: 'b', min: -5, max: 5, step: 0.5, def: 0 },
// // //       { k: 'c', label: 'c', min: -8, max: 8, step: 0.5, def: -3 },
// // //     ],
// // //     fn: p => x => p.a * x * x + p.b * x + p.c,
// // //     eq: p => `f(x) = ${fmt(p.a)}x² ${sign(p.b)} ${fmt(Math.abs(p.b))}x ${sign(p.c)} ${fmt(Math.abs(p.c))}`,
// // //     explanation:
// // //       '## Quadratic\n' +
// // //       'A **parabola**: $f(x) = ax^2 + bx + c$.\n' +
// // //       'The sign of **a** decides whether it opens up or down; $|a|$ controls how narrow it is. ' +
// // //       'It has a single turning point — the **vertex** — at $x = -\\frac{b}{2a}$.\n' +
// // //       '- Zero, one, or two roots depending on the discriminant $b^2 - 4ac$',
// // //     links: [{ label: 'Quadratic functions', url: 'https://en.wikipedia.org/wiki/Quadratic_function', tag: 'wiki' }],
// // //   },
// // //   cubic: {
// // //     name: 'Cubic',
// // //     glyph: 'M2,22 C8,2 16,30 24,8',
// // //     params: [
// // //       { k: 'a', label: 'a', min: -1, max: 1, step: 0.05, def: 0.2 },
// // //       { k: 'b', label: 'b', min: -6, max: 6, step: 0.5, def: -2 },
// // //     ],
// // //     fn: p => x => p.a * x * x * x + p.b * x,
// // //     eq: p => `f(x) = ${fmt(p.a)}x³ ${sign(p.b)} ${fmt(Math.abs(p.b))}x`,
// // //     explanation:
// // //       '## Cubic\n' +
// // //       'An odd-degree **polynomial**: $f(x) = ax^3 + bx$.\n' +
// // //       'The two ends head in **opposite** directions. There can be up to two turning points, and always an ' +
// // //       '**inflection point** where the curve switches concavity.',
// // //     links: [{ label: 'Cubic functions', url: 'https://en.wikipedia.org/wiki/Cubic_function', tag: 'wiki' }],
// // //   },
// // //   power: {
// // //     name: 'Power',
// // //     glyph: 'M2,26 Q14,26 24,2',
// // //     params: [
// // //       { k: 'a', label: 'coefficient a', min: -3, max: 3, step: 0.1, def: 1 },
// // //       { k: 'n', label: 'exponent n', min: -3, max: 4, step: 0.5, def: 2 },
// // //     ],
// // //     fn: p => x => p.a * Math.pow(x, p.n),
// // //     eq: p => `f(x) = ${fmt(p.a)}·x^${fmt(p.n)}`,
// // //     explanation:
// // //       '## Power\n' +
// // //       'The family $f(x) = ax^n$.\n' +
// // //       'Integer **n** gives polynomials; **negative n** gives reciprocals with asymptotes; ' +
// // //       '**fractional n** gives roots. The behavior right around $x = 0$ is the tell-tale of which kind you have.',
// // //     links: [{ label: 'Power functions', url: 'https://en.wikipedia.org/wiki/Power_function', tag: 'wiki' }],
// // //   },
// // //   rational: {
// // //     name: 'Rational',
// // //     glyph: 'M2,4 Q11,4 13,14 M15,14 Q17,26 24,26',
// // //     params: [
// // //       { k: 'a', label: 'numerator a', min: -6, max: 6, step: 0.5, def: 1 },
// // //       { k: 'h', label: 'shift h', min: -6, max: 6, step: 0.5, def: 0 },
// // //     ],
// // //     fn: p => x => p.a / (x - p.h),
// // //     eq: p => `f(x) = ${fmt(p.a)} / (x ${sign(-p.h)} ${fmt(Math.abs(p.h))})`,
// // //     explanation:
// // //       '## Rational\n' +
// // //       'A **reciprocal** curve: $f(x) = \\dfrac{a}{x - h}$.\n' +
// // //       'The denominator hits zero at $x = h$ — a **vertical asymptote**. Far from there the curve flattens ' +
// // //       'toward the **horizontal asymptote** $y = 0$. Two disconnected branches.',
// // //     links: [{ label: 'Rational functions', url: 'https://en.wikipedia.org/wiki/Rational_function', tag: 'wiki' }],
// // //   },
// // //   exponential: {
// // //     name: 'Exponential',
// // //     glyph: 'M2,26 Q16,26 24,2',
// // //     params: [
// // //       { k: 'a', label: 'coefficient a', min: -4, max: 4, step: 0.25, def: 1 },
// // //       { k: 'base', label: 'base', min: 0.2, max: 4, step: 0.1, def: 2 },
// // //     ],
// // //     fn: p => x => p.a * Math.pow(p.base, x),
// // //     eq: p => `f(x) = ${fmt(p.a)}·${fmt(p.base)}^x`,
// // //     explanation:
// // //       '## Exponential\n' +
// // //       'Constant **multiplicative** growth: $f(x) = a\\,b^x$.\n' +
// // //       'Base $b > 1$ grows, $0 < b < 1$ decays. The curve approaches — but never touches — the $x$-axis on one side, ' +
// // //       'so it has a **horizontal asymptote** and no root.',
// // //     links: [{ label: 'Exponential functions', url: 'https://en.wikipedia.org/wiki/Exponential_function', tag: 'wiki' }],
// // //   },
// // //   logarithmic: {
// // //     name: 'Logarithmic',
// // //     glyph: 'M2,2 Q10,26 24,26',
// // //     params: [
// // //       { k: 'a', label: 'scale a', min: -4, max: 4, step: 0.25, def: 1 },
// // //       { k: 'd', label: 'shift d', min: -6, max: 6, step: 0.5, def: 0 },
// // //     ],
// // //     fn: p => x => (x > 0 ? p.a * Math.log(x) + p.d : NaN),
// // //     eq: p => `f(x) = ${fmt(p.a)}·ln(x) ${sign(p.d)} ${fmt(Math.abs(p.d))}`,
// // //     explanation:
// // //       '## Logarithmic\n' +
// // //       'The **inverse of the exponential**: $f(x) = a\\ln(x) + d$.\n' +
// // //       'Defined only for $x > 0$, with a **vertical asymptote** at $x = 0$. It grows without bound, but ever more ' +
// // //       'slowly — the mirror image of exponential growth across $y = x$.',
// // //     links: [{ label: 'Logarithm', url: 'https://en.wikipedia.org/wiki/Logarithm', tag: 'wiki' }],
// // //   },
// // //   trig: {
// // //     name: 'Trigonometric',
// // //     glyph: 'M2,14 Q7,2 12,14 Q17,26 22,14',
// // //     params: [
// // //       { k: 'A', label: 'amplitude A', min: 0, max: 5, step: 0.25, def: 2 },
// // //       { k: 'B', label: 'frequency B', min: 0.25, max: 4, step: 0.25, def: 1 },
// // //       { k: 'C', label: 'phase C', min: -3.14, max: 3.14, step: 0.1, def: 0 },
// // //       { k: 'D', label: 'offset D', min: -5, max: 5, step: 0.5, def: 0 },
// // //     ],
// // //     fn: p => x => p.A * Math.sin(p.B * x + p.C) + p.D,
// // //     eq: p => `f(x) = ${fmt(p.A)}·sin(${fmt(p.B)}x ${sign(p.C)} ${fmt(Math.abs(p.C))}) ${sign(p.D)} ${fmt(Math.abs(p.D))}`,
// // //     explanation:
// // //       '## Trigonometric\n' +
// // //       'The general sinusoid: $f(x) = A\\sin(Bx + C) + D$.\n' +
// // //       '- **A** — amplitude (height of the wave)\n' +
// // //       '- **B** — frequency (squeezes the period to $\\frac{2\\pi}{B}$)\n' +
// // //       '- **C** — phase (slides it sideways)\n' +
// // //       '- **D** — vertical offset (lifts the midline)\n' +
// // //       'Periodic and bounded between $D - A$ and $D + A$.',
// // //     links: [{ label: 'Sine wave', url: 'https://en.wikipedia.org/wiki/Sine_wave', tag: 'wiki' }],
// // //   },
// // //   absolute: {
// // //     name: 'Absolute value',
// // //     glyph: 'M2,4 L13,24 L24,4',
// // //     params: [
// // //       { k: 'a', label: 'a', min: -3, max: 3, step: 0.1, def: 1 },
// // //       { k: 'h', label: 'shift h', min: -6, max: 6, step: 0.5, def: 0 },
// // //     ],
// // //     fn: p => x => p.a * Math.abs(x - p.h),
// // //     eq: p => `f(x) = ${fmt(p.a)}·|x ${sign(-p.h)} ${fmt(Math.abs(p.h))}|`,
// // //     explanation:
// // //       '## Absolute value\n' +
// // //       'A sharp **V shape**: $f(x) = a\\,|x - h|$.\n' +
// // //       'The corner sits at $x = h$. The function is **not differentiable** at the vertex — the slope jumps ' +
// // //       'straight from $-a$ to $+a$ with no smooth transition.',
// // //     links: [{ label: 'Absolute value', url: 'https://en.wikipedia.org/wiki/Absolute_value', tag: 'wiki' }],
// // //   },
// // //   sqrt: {
// // //     name: 'Square root',
// // //     glyph: 'M2,24 Q4,8 24,4',
// // //     params: [
// // //       { k: 'a', label: 'a', min: -3, max: 3, step: 0.1, def: 1 },
// // //       { k: 'h', label: 'shift h', min: -6, max: 6, step: 0.5, def: 0 },
// // //     ],
// // //     fn: p => x => (x - p.h >= 0 ? p.a * Math.sqrt(x - p.h) : NaN),
// // //     eq: p => `f(x) = ${fmt(p.a)}·√(x ${sign(-p.h)} ${fmt(Math.abs(p.h))})`,
// // //     explanation:
// // //       '## Square root\n' +
// // //       'Half a sideways parabola: $f(x) = a\\sqrt{x - h}$.\n' +
// // //       'Defined only where $x \\ge h$. Steep right at the start, then flattening as $x$ grows — it is the ' +
// // //       '**inverse** of $x^2$ restricted to non-negative inputs.',
// // //     links: [{ label: 'Square root', url: 'https://en.wikipedia.org/wiki/Square_root', tag: 'wiki' }],
// // //   },
// // // };

// // // function fmt(v) {
// // //   const r = Math.round(v * 1e6) / 1e6;
// // //   return Math.abs(r - Math.round(r)) < 1e-4 ? String(Math.round(r)) : String(r);
// // // }
// // // function sign(v) { return v >= 0 ? '+' : '−'; }

// // // function FamilyGlyph({ d, active }) {
// // //   return (
// // //     <svg width="26" height="26" viewBox="0 0 26 28" aria-hidden="true">
// // //       <path d={d} fill="none" stroke={active ? ACCENT : '#94a3b8'}
// // //             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// // //     </svg>
// // //   );
// // // }

// // // export default function FunctionGallery({
// // //   initialFamily = 'linear',
// // //   families = DEFAULT_FAMILIES,
// // //   explanations = {},
// // //   visualizerProps = {},
// // //   infoPanelProps = {},
// // //   extraTabs = [],
// // //   darkMode = false,
// // //   showPicker = true,
// // //   showSliders = true,
// // //   showInfoPanel = true,
// // //   onFamilyChange,
// // //   onParamsChange,
// // // }) {
// // //   const familyKeys = Object.keys(families);
// // //   const startKey = families[initialFamily] ? initialFamily : familyKeys[0];

// // //   const [current, setCurrent] = useState(startKey);
// // //   const [paramVals, setParamVals] = useState(() => {
// // //     const init = {};
// // //     (families[startKey]?.params || []).forEach(p => (init[p.k] = p.def));
// // //     return init;
// // //   });

// // //   const fam = families[current] || families[familyKeys[0]];

// // //   const selectFamily = key => {
// // //     setCurrent(key);
// // //     const next = {};
// // //     (families[key].params || []).forEach(p => (next[p.k] = p.def));
// // //     setParamVals(next);
// // //     if (onFamilyChange) onFamilyChange(key, families[key]);
// // //     if (onParamsChange) onParamsChange(next);
// // //   };

// // //   const setParam = (k, v) => {
// // //     const next = { ...paramVals, [k]: v };
// // //     setParamVals(next);
// // //     if (onParamsChange) onParamsChange(next);
// // //   };

// // //   const formula = fam.eq(paramVals);

// // //   const functions = useMemo(
// // //     () => [{ fn: fam.fn(paramVals), color: ACCENT, label: 'f', formula, visible: true }],
// // //     // eslint-disable-next-line react-hooks/exhaustive-deps
// // //     [current, paramVals, formula]
// // //   );

// // //   const tabs = useMemo(() => {
// // //     const base = [
// // //       {
// // //         key: 'explanation',
// // //         label: 'Explanation',
// // //         order: 0,
// // //         content: explanations[current] != null ? explanations[current] : fam.explanation,
// // //       },
// // //       {
// // //         key: 'resources',
// // //         label: 'Resources',
// // //         order: 10,
// // //         content: '',
// // //         links: fam.links,
// // //         visible: !!(fam.links && fam.links.length),
// // //       },
// // //     ];
// // //     return [...base, ...extraTabs];
// // //   }, [fam, extraTabs, explanations, current]);

// // //   const fontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
// // //   const panelShadow = '0 1px 3px rgba(15,23,42,0.05), 0 8px 24px rgba(15,23,42,0.05)';
// // //   const card = {
// // //     background: darkMode ? '#0f172a' : '#fff',
// // //     border: `1px solid ${darkMode ? '#1e293b' : '#f1f5f9'}`,
// // //     borderRadius: 12,
// // //     boxShadow: panelShadow,
// // //   };
// // //   const famBtn = active => ({
// // //     display: 'flex', alignItems: 'center', gap: 10, width: '100%', textAlign: 'left',
// // //     border: '1px solid transparent',
// // //     background: active ? (darkMode ? '#1e293b' : '#eff6ff') : 'none',
// // //     borderColor: active ? (darkMode ? '#334155' : '#dbeafe') : 'transparent',
// // //     borderRadius: 8, padding: '9px 10px', cursor: 'pointer', fontFamily: 'inherit',
// // //     fontSize: 13, fontWeight: active ? 600 : 400,
// // //     color: active ? (darkMode ? '#dbeafe' : '#1e3a8a') : (darkMode ? '#cbd5e1' : '#334155'),
// // //     transition: 'background 0.12s, border-color 0.12s',
// // //   });

// // //   return (
// // //     <div style={{
// // //       display: 'flex', gap: 20, padding: 20, fontFamily: fontStack,
// // //       background: darkMode ? '#020617' : '#f6f7f9', minHeight: '100vh', alignItems: 'flex-start',
// // //     }}>
// // //       {showPicker && (
// // //         <nav style={{ ...card, width: 232, padding: 10, flexShrink: 0 }}>
// // //           <div style={{
// // //             fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
// // //             color: darkMode ? '#64748b' : '#94a3b8', fontWeight: 600, margin: '6px 8px 10px',
// // //           }}>
// // //             Families
// // //           </div>
// // //           {Object.entries(families).map(([key, f]) => (
// // //             <button key={key} style={famBtn(key === current)} onClick={() => selectFamily(key)}>
// // //               <FamilyGlyph d={f.glyph} active={key === current} />
// // //               <span>{f.name}</span>
// // //             </button>
// // //           ))}
// // //         </nav>
// // //       )}

// // //       <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
// // //         <div style={{ ...card, padding: 18 }}>
// // //           <div style={{
// // //             display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
// // //             marginBottom: 14, flexWrap: 'wrap', gap: 8,
// // //           }}>
// // //             <span style={{ fontSize: 16, letterSpacing: '-0.01em', color: darkMode ? '#e2e8f0' : '#0f172a' }}>
// // //               {fam.name}
// // //             </span>
// // //             <span style={{
// // //               fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace', fontSize: 13,
// // //               color: ACCENT, background: darkMode ? '#1e293b' : '#eff6ff',
// // //               padding: '4px 10px', borderRadius: 6,
// // //             }}>
// // //               {formula}
// // //             </span>
// // //           </div>

// // //           <VisualizerWithControls
// // //             functions={functions}
// // //             zoom={10}
// // //             showAxisLabels
// // //             showCrosshair
// // //             showCurveTooltip
// // //             labelMode="legend"
// // //             {...visualizerProps}
// // //           />

// // //           {showSliders && (
// // //             <div style={{
// // //               marginTop: 16, display: 'grid',
// // //               gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px 22px',
// // //             }}>
// // //               {fam.params.map(p => (
// // //                 <div key={p.k}>
// // //                   <label style={{
// // //                     display: 'flex', justifyContent: 'space-between', fontSize: 12,
// // //                     color: darkMode ? '#cbd5e1' : '#334155', marginBottom: 5,
// // //                     fontVariantNumeric: 'tabular-nums',
// // //                   }}>
// // //                     <span>{p.label}</span>
// // //                     <span style={{ fontFamily: 'ui-monospace, monospace', color: ACCENT, fontWeight: 600 }}>
// // //                       {fmt(paramVals[p.k])}
// // //                     </span>
// // //                   </label>
// // //                   <input
// // //                     type="range"
// // //                     min={p.min} max={p.max} step={p.step}
// // //                     value={paramVals[p.k]}
// // //                     onChange={e => setParam(p.k, parseFloat(e.target.value))}
// // //                     style={{ width: '100%', accentColor: ACCENT, cursor: 'pointer' }}
// // //                   />
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {showInfoPanel && (
// // //         <aside style={{ ...card, width: 320, padding: 18, flexShrink: 0 }}>
// // //           <InfoPanel tabs={tabs} darkMode={darkMode} {...infoPanelProps} />
// // //         </aside>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // import React, { useState, useMemo } from 'react';
// // import { VisualizerWithControls } from '../FunctionVisualizerCoreImproved';
// // import InfoPanel from '../InfoPanel';

// // /* =====================================================
// //    FUNCTION GALLERY  (v4)
// //    - Overall width capped (maxWidth prop, default 80vw)
// //    - Larger default canvas so the core fills most of the
// //      visualizer card instead of leaving dead space

// //    PROPS (all optional)
// //      initialFamily   : string
// //      families        : object
// //      explanations    : { [key]: string }
// //      visualizerProps : object               — forwarded to VisualizerWithControls
// //      infoPanelProps  : object
// //      extraTabs       : TabDef[]
// //      darkMode        : boolean
// //      showPicker      : boolean
// //      showSliders     : boolean
// //      showInfoPanel   : boolean
// //      maxWidth        : string|number        — wrapper cap; default '80vw'
// //      onFamilyChange  : (key, family) => void
// //      onParamsChange  : (paramVals) => void

// //    Requires the engine file to export VisualizerWithControls.
// //    ===================================================== */

// // const ACCENT = '#3b82f6';

// // const DEFAULT_FAMILIES = {
// //   linear: {
// //     name: 'Linear',
// //     glyph: 'M2,22 L24,4',
// //     params: [
// //       { k: 'a', label: 'slope a', min: -4, max: 4, step: 0.1, def: 1 },
// //       { k: 'b', label: 'intercept b', min: -8, max: 8, step: 0.5, def: 0 },
// //     ],
// //     fn: p => x => p.a * x + p.b,
// //     eq: p => `f(x) = ${fmt(p.a)}x ${sign(p.b)} ${fmt(Math.abs(p.b))}`,
// //     explanation:
// //       '## Linear\n' +
// //       'A **straight line**: $f(x) = ax + b$.\n' +
// //       'The slope **a** sets the tilt — every step right of 1 moves the line up by $a$. ' +
// //       'The intercept **b** slides the whole line vertically; it is the value where the line crosses the $y$-axis.\n' +
// //       '- Constant rate of change everywhere\n' +
// //       '- Exactly one root (unless $a = 0$)',
// //     links: [{ label: 'Linear functions', url: 'https://en.wikipedia.org/wiki/Linear_function', tag: 'wiki' }],
// //   },
// //   quadratic: {
// //     name: 'Quadratic',
// //     glyph: 'M2,4 Q13,30 24,4',
// //     params: [
// //       { k: 'a', label: 'a', min: -2, max: 2, step: 0.1, def: 0.3 },
// //       { k: 'b', label: 'b', min: -5, max: 5, step: 0.5, def: 0 },
// //       { k: 'c', label: 'c', min: -8, max: 8, step: 0.5, def: -3 },
// //     ],
// //     fn: p => x => p.a * x * x + p.b * x + p.c,
// //     eq: p => `f(x) = ${fmt(p.a)}x² ${sign(p.b)} ${fmt(Math.abs(p.b))}x ${sign(p.c)} ${fmt(Math.abs(p.c))}`,
// //     explanation:
// //       '## Quadratic\n' +
// //       'A **parabola**: $f(x) = ax^2 + bx + c$.\n' +
// //       'The sign of **a** decides whether it opens up or down; $|a|$ controls how narrow it is. ' +
// //       'It has a single turning point — the **vertex** — at $x = -\\frac{b}{2a}$.\n' +
// //       '- Zero, one, or two roots depending on the discriminant $b^2 - 4ac$',
// //     links: [{ label: 'Quadratic functions', url: 'https://en.wikipedia.org/wiki/Quadratic_function', tag: 'wiki' }],
// //   },
// //   cubic: {
// //     name: 'Cubic',
// //     glyph: 'M2,22 C8,2 16,30 24,8',
// //     params: [
// //       { k: 'a', label: 'a', min: -1, max: 1, step: 0.05, def: 0.2 },
// //       { k: 'b', label: 'b', min: -6, max: 6, step: 0.5, def: -2 },
// //     ],
// //     fn: p => x => p.a * x * x * x + p.b * x,
// //     eq: p => `f(x) = ${fmt(p.a)}x³ ${sign(p.b)} ${fmt(Math.abs(p.b))}x`,
// //     explanation:
// //       '## Cubic\n' +
// //       'An odd-degree **polynomial**: $f(x) = ax^3 + bx$.\n' +
// //       'The two ends head in **opposite** directions. There can be up to two turning points, and always an ' +
// //       '**inflection point** where the curve switches concavity.',
// //     links: [{ label: 'Cubic functions', url: 'https://en.wikipedia.org/wiki/Cubic_function', tag: 'wiki' }],
// //   },
// //   power: {
// //     name: 'Power',
// //     glyph: 'M2,26 Q14,26 24,2',
// //     params: [
// //       { k: 'a', label: 'coefficient a', min: -3, max: 3, step: 0.1, def: 1 },
// //       { k: 'n', label: 'exponent n', min: -3, max: 4, step: 0.5, def: 2 },
// //     ],
// //     fn: p => x => p.a * Math.pow(x, p.n),
// //     eq: p => `f(x) = ${fmt(p.a)}·x^${fmt(p.n)}`,
// //     explanation:
// //       '## Power\n' +
// //       'The family $f(x) = ax^n$.\n' +
// //       'Integer **n** gives polynomials; **negative n** gives reciprocals with asymptotes; ' +
// //       '**fractional n** gives roots. The behavior right around $x = 0$ is the tell-tale of which kind you have.',
// //     links: [{ label: 'Power functions', url: 'https://en.wikipedia.org/wiki/Power_function', tag: 'wiki' }],
// //   },
// //   rational: {
// //     name: 'Rational',
// //     glyph: 'M2,4 Q11,4 13,14 M15,14 Q17,26 24,26',
// //     params: [
// //       { k: 'a', label: 'numerator a', min: -6, max: 6, step: 0.5, def: 1 },
// //       { k: 'h', label: 'shift h', min: -6, max: 6, step: 0.5, def: 0 },
// //     ],
// //     fn: p => x => p.a / (x - p.h),
// //     eq: p => `f(x) = ${fmt(p.a)} / (x ${sign(-p.h)} ${fmt(Math.abs(p.h))})`,
// //     explanation:
// //       '## Rational\n' +
// //       'A **reciprocal** curve: $f(x) = \\dfrac{a}{x - h}$.\n' +
// //       'The denominator hits zero at $x = h$ — a **vertical asymptote**. Far from there the curve flattens ' +
// //       'toward the **horizontal asymptote** $y = 0$. Two disconnected branches.',
// //     links: [{ label: 'Rational functions', url: 'https://en.wikipedia.org/wiki/Rational_function', tag: 'wiki' }],
// //   },
// //   exponential: {
// //     name: 'Exponential',
// //     glyph: 'M2,26 Q16,26 24,2',
// //     params: [
// //       { k: 'a', label: 'coefficient a', min: -4, max: 4, step: 0.25, def: 1 },
// //       { k: 'base', label: 'base', min: 0.2, max: 4, step: 0.1, def: 2 },
// //     ],
// //     fn: p => x => p.a * Math.pow(p.base, x),
// //     eq: p => `f(x) = ${fmt(p.a)}·${fmt(p.base)}^x`,
// //     explanation:
// //       '## Exponential\n' +
// //       'Constant **multiplicative** growth: $f(x) = a\\,b^x$.\n' +
// //       'Base $b > 1$ grows, $0 < b < 1$ decays. The curve approaches — but never touches — the $x$-axis on one side, ' +
// //       'so it has a **horizontal asymptote** and no root.',
// //     links: [{ label: 'Exponential functions', url: 'https://en.wikipedia.org/wiki/Exponential_function', tag: 'wiki' }],
// //   },
// //   logarithmic: {
// //     name: 'Logarithmic',
// //     glyph: 'M2,2 Q10,26 24,26',
// //     params: [
// //       { k: 'a', label: 'scale a', min: -4, max: 4, step: 0.25, def: 1 },
// //       { k: 'd', label: 'shift d', min: -6, max: 6, step: 0.5, def: 0 },
// //     ],
// //     fn: p => x => (x > 0 ? p.a * Math.log(x) + p.d : NaN),
// //     eq: p => `f(x) = ${fmt(p.a)}·ln(x) ${sign(p.d)} ${fmt(Math.abs(p.d))}`,
// //     explanation:
// //       '## Logarithmic\n' +
// //       'The **inverse of the exponential**: $f(x) = a\\ln(x) + d$.\n' +
// //       'Defined only for $x > 0$, with a **vertical asymptote** at $x = 0$. It grows without bound, but ever more ' +
// //       'slowly — the mirror image of exponential growth across $y = x$.',
// //     links: [{ label: 'Logarithm', url: 'https://en.wikipedia.org/wiki/Logarithm', tag: 'wiki' }],
// //   },
// //   trig: {
// //     name: 'Trigonometric',
// //     glyph: 'M2,14 Q7,2 12,14 Q17,26 22,14',
// //     params: [
// //       { k: 'A', label: 'amplitude A', min: 0, max: 5, step: 0.25, def: 2 },
// //       { k: 'B', label: 'frequency B', min: 0.25, max: 4, step: 0.25, def: 1 },
// //       { k: 'C', label: 'phase C', min: -3.14, max: 3.14, step: 0.1, def: 0 },
// //       { k: 'D', label: 'offset D', min: -5, max: 5, step: 0.5, def: 0 },
// //     ],
// //     fn: p => x => p.A * Math.sin(p.B * x + p.C) + p.D,
// //     eq: p => `f(x) = ${fmt(p.A)}·sin(${fmt(p.B)}x ${sign(p.C)} ${fmt(Math.abs(p.C))}) ${sign(p.D)} ${fmt(Math.abs(p.D))}`,
// //     explanation:
// //       '## Trigonometric\n' +
// //       'The general sinusoid: $f(x) = A\\sin(Bx + C) + D$.\n' +
// //       '- **A** — amplitude (height of the wave)\n' +
// //       '- **B** — frequency (squeezes the period to $\\frac{2\\pi}{B}$)\n' +
// //       '- **C** — phase (slides it sideways)\n' +
// //       '- **D** — vertical offset (lifts the midline)\n' +
// //       'Periodic and bounded between $D - A$ and $D + A$.',
// //     links: [{ label: 'Sine wave', url: 'https://en.wikipedia.org/wiki/Sine_wave', tag: 'wiki' }],
// //   },
// //   absolute: {
// //     name: 'Absolute value',
// //     glyph: 'M2,4 L13,24 L24,4',
// //     params: [
// //       { k: 'a', label: 'a', min: -3, max: 3, step: 0.1, def: 1 },
// //       { k: 'h', label: 'shift h', min: -6, max: 6, step: 0.5, def: 0 },
// //     ],
// //     fn: p => x => p.a * Math.abs(x - p.h),
// //     eq: p => `f(x) = ${fmt(p.a)}·|x ${sign(-p.h)} ${fmt(Math.abs(p.h))}|`,
// //     explanation:
// //       '## Absolute value\n' +
// //       'A sharp **V shape**: $f(x) = a\\,|x - h|$.\n' +
// //       'The corner sits at $x = h$. The function is **not differentiable** at the vertex — the slope jumps ' +
// //       'straight from $-a$ to $+a$ with no smooth transition.',
// //     links: [{ label: 'Absolute value', url: 'https://en.wikipedia.org/wiki/Absolute_value', tag: 'wiki' }],
// //   },
// //   sqrt: {
// //     name: 'Square root',
// //     glyph: 'M2,24 Q4,8 24,4',
// //     params: [
// //       { k: 'a', label: 'a', min: -3, max: 3, step: 0.1, def: 1 },
// //       { k: 'h', label: 'shift h', min: -6, max: 6, step: 0.5, def: 0 },
// //     ],
// //     fn: p => x => (x - p.h >= 0 ? p.a * Math.sqrt(x - p.h) : NaN),
// //     eq: p => `f(x) = ${fmt(p.a)}·√(x ${sign(-p.h)} ${fmt(Math.abs(p.h))})`,
// //     explanation:
// //       '## Square root\n' +
// //       'Half a sideways parabola: $f(x) = a\\sqrt{x - h}$.\n' +
// //       'Defined only where $x \\ge h$. Steep right at the start, then flattening as $x$ grows — it is the ' +
// //       '**inverse** of $x^2$ restricted to non-negative inputs.',
// //     links: [{ label: 'Square root', url: 'https://en.wikipedia.org/wiki/Square_root', tag: 'wiki' }],
// //   },
// // };

// // function fmt(v) {
// //   const r = Math.round(v * 1e6) / 1e6;
// //   return Math.abs(r - Math.round(r)) < 1e-4 ? String(Math.round(r)) : String(r);
// // }
// // function sign(v) { return v >= 0 ? '+' : '−'; }

// // function FamilyGlyph({ d, active }) {
// //   return (
// //     <svg width="26" height="26" viewBox="0 0 26 28" aria-hidden="true">
// //       <path d={d} fill="none" stroke={active ? ACCENT : '#94a3b8'}
// //             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// //     </svg>
// //   );
// // }

// // export default function FunctionGallery({
// //   initialFamily = 'linear',
// //   families = DEFAULT_FAMILIES,
// //   explanations = {},
// //   visualizerProps = {},
// //   infoPanelProps = {},
// //   extraTabs = [],
// //   darkMode = false,
// //   showPicker = true,
// //   showSliders = true,
// //   showInfoPanel = true,
// //   maxWidth = '80vw',
// //   onFamilyChange,
// //   onParamsChange,
// // }) {
// //   const familyKeys = Object.keys(families);
// //   const startKey = families[initialFamily] ? initialFamily : familyKeys[0];

// //   const [current, setCurrent] = useState(startKey);
// //   const [paramVals, setParamVals] = useState(() => {
// //     const init = {};
// //     (families[startKey]?.params || []).forEach(p => (init[p.k] = p.def));
// //     return init;
// //   });

// //   const fam = families[current] || families[familyKeys[0]];

// //   const selectFamily = key => {
// //     setCurrent(key);
// //     const next = {};
// //     (families[key].params || []).forEach(p => (next[p.k] = p.def));
// //     setParamVals(next);
// //     if (onFamilyChange) onFamilyChange(key, families[key]);
// //     if (onParamsChange) onParamsChange(next);
// //   };

// //   const setParam = (k, v) => {
// //     const next = { ...paramVals, [k]: v };
// //     setParamVals(next);
// //     if (onParamsChange) onParamsChange(next);
// //   };

// //   const formula = fam.eq(paramVals);

// //   const functions = useMemo(
// //     () => [{ fn: fam.fn(paramVals), color: ACCENT, label: 'f', formula, visible: true }],
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //     [current, paramVals, formula]
// //   );

// //   const tabs = useMemo(() => {
// //     const base = [
// //       {
// //         key: 'explanation',
// //         label: 'Explanation',
// //         order: 0,
// //         content: explanations[current] != null ? explanations[current] : fam.explanation,
// //       },
// //       {
// //         key: 'resources',
// //         label: 'Resources',
// //         order: 10,
// //         content: '',
// //         links: fam.links,
// //         visible: !!(fam.links && fam.links.length),
// //       },
// //     ];
// //     return [...base, ...extraTabs];
// //   }, [fam, extraTabs, explanations, current]);

// //   const fontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
// //   const panelShadow = '0 1px 3px rgba(15,23,42,0.05), 0 8px 24px rgba(15,23,42,0.05)';
// //   const card = {
// //     background: darkMode ? '#0f172a' : '#fff',
// //     border: `1px solid ${darkMode ? '#1e293b' : '#f1f5f9'}`,
// //     borderRadius: 12,
// //     boxShadow: panelShadow,
// //   };
// //   const famBtn = active => ({
// //     display: 'flex', alignItems: 'center', gap: 10, width: '100%', textAlign: 'left',
// //     border: '1px solid transparent',
// //     background: active ? (darkMode ? '#1e293b' : '#eff6ff') : 'none',
// //     borderColor: active ? (darkMode ? '#334155' : '#dbeafe') : 'transparent',
// //     borderRadius: 8, padding: '9px 10px', cursor: 'pointer', fontFamily: 'inherit',
// //     fontSize: 13, fontWeight: active ? 600 : 400,
// //     color: active ? (darkMode ? '#dbeafe' : '#1e3a8a') : (darkMode ? '#cbd5e1' : '#334155'),
// //     transition: 'background 0.12s, border-color 0.12s',
// //   });

// //   /* Larger default canvas so it fills the visualizer card.
// //      Caller can still override via visualizerProps.defaultWidth/Height. */
// //   const mergedVisualizerProps = {
// //     defaultWidth: 900,
// //     defaultHeight: 620,
// //     ...visualizerProps,
// //   };

// //   return (
// //     <div style={{
// //       width: '100%',
// //       background: darkMode ? '#020617' : '#f6f7f9',
// //       minHeight: '100vh',
// //       fontFamily: fontStack,
// //       display: 'flex',
// //       justifyContent: 'center',
// //       padding: '20px 0',
// //       boxSizing: 'border-box',
// //     }}>
// //       <div style={{
// //         width: '100%',
// //         maxWidth,
// //         display: 'flex',
// //         gap: 20,
// //         padding: '0 20px',
// //         alignItems: 'flex-start',
// //         boxSizing: 'border-box',
// //       }}>
// //         {showPicker && (
// //           <nav style={{ ...card, width: 232, padding: 10, flexShrink: 0 }}>
// //             <div style={{
// //               fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
// //               color: darkMode ? '#64748b' : '#94a3b8', fontWeight: 600, margin: '6px 8px 10px',
// //             }}>
// //               Families
// //             </div>
// //             {Object.entries(families).map(([key, f]) => (
// //               <button key={key} style={famBtn(key === current)} onClick={() => selectFamily(key)}>
// //                 <FamilyGlyph d={f.glyph} active={key === current} />
// //                 <span>{f.name}</span>
// //               </button>
// //             ))}
// //           </nav>
// //         )}

// //         <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
// //           <div style={{ ...card, padding: 18 }}>
// //             <div style={{
// //               display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
// //               marginBottom: 14, flexWrap: 'wrap', gap: 8,
// //             }}>
// //               <span style={{ fontSize: 16, letterSpacing: '-0.01em', color: darkMode ? '#e2e8f0' : '#0f172a' }}>
// //                 {fam.name}
// //               </span>
// //               <span style={{
// //                 fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace', fontSize: 13,
// //                 color: ACCENT, background: darkMode ? '#1e293b' : '#eff6ff',
// //                 padding: '4px 10px', borderRadius: 6,
// //               }}>
// //                 {formula}
// //               </span>
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

// //             {showSliders && (
// //               <div style={{
// //                 marginTop: 16, display: 'grid',
// //                 gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px 22px',
// //               }}>
// //                 {fam.params.map(p => (
// //                   <div key={p.k}>
// //                     <label style={{
// //                       display: 'flex', justifyContent: 'space-between', fontSize: 12,
// //                       color: darkMode ? '#cbd5e1' : '#334155', marginBottom: 5,
// //                       fontVariantNumeric: 'tabular-nums',
// //                     }}>
// //                       <span>{p.label}</span>
// //                       <span style={{ fontFamily: 'ui-monospace, monospace', color: ACCENT, fontWeight: 600 }}>
// //                         {fmt(paramVals[p.k])}
// //                       </span>
// //                     </label>
// //                     <input
// //                       type="range"
// //                       min={p.min} max={p.max} step={p.step}
// //                       value={paramVals[p.k]}
// //                       onChange={e => setParam(p.k, parseFloat(e.target.value))}
// //                       style={{ width: '100%', accentColor: ACCENT, cursor: 'pointer' }}
// //                     />
// //                   </div>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         {showInfoPanel && (
// //           <aside style={{ ...card, width: 320, padding: 18, flexShrink: 0 }}>
// //             <InfoPanel tabs={tabs} darkMode={darkMode} {...infoPanelProps} />
// //           </aside>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState, useMemo } from 'react';
// import { VisualizerWithControls } from '../FunctionVisualizerCoreImproved';
// import InfoPanel from '../InfoPanel';

// /* =====================================================
//    FUNCTION GALLERY  (v5)
//    - Trigonometric split into Sine, Cosine, Tangent
//    - Family objects can carry a `group` string; picker renders
//      a header when group changes between adjacent items
//    - Width capped (maxWidth prop, default 80vw)
//    - Larger default canvas (900×620)

//    PROPS (all optional)
//      initialFamily   : string
//      families        : object
//      explanations    : { [key]: string }
//      visualizerProps : object
//      infoPanelProps  : object
//      extraTabs       : TabDef[]
//      darkMode        : boolean
//      showPicker      : boolean
//      showSliders     : boolean
//      showInfoPanel   : boolean
//      maxWidth        : string|number
//      onFamilyChange  : (key, family) => void
//      onParamsChange  : (paramVals) => void

//    Requires the engine file to export VisualizerWithControls.
//    ===================================================== */

// const ACCENT = '#3b82f6';

// export const FAMILIES = {
//   linear: {
//     name: 'Linear',
//     glyph: 'M2,22 L24,4',
//     params: [
//       { k: 'a', label: 'slope a', min: -4, max: 4, step: 0.1, def: 1 },
//       { k: 'b', label: 'intercept b', min: -8, max: 8, step: 0.5, def: 0 },
//     ],
//     fn: p => x => p.a * x + p.b,
//     eq: p => `f(x) = ${fmt(p.a)}x ${sign(p.b)} ${fmt(Math.abs(p.b))}`,
//     explanation:
//       '## Linear\n' +
//       'A **straight line**: $f(x) = ax + b$.\n' +
//       'The slope **a** sets the tilt — every step right of 1 moves the line up by $a$. ' +
//       'The intercept **b** slides the whole line vertically; it is the value where the line crosses the $y$-axis.\n' +
//       '- Constant rate of change everywhere\n' +
//       '- Exactly one root (unless $a = 0$)',
//     links: [{ label: 'Linear functions', url: 'https://en.wikipedia.org/wiki/Linear_function', tag: 'wiki' }],
//   },
//   quadratic: {
//     name: 'Quadratic',
//     glyph: 'M2,4 Q13,30 24,4',
//     params: [
//       { k: 'a', label: 'a', min: -2, max: 2, step: 0.1, def: 0.3 },
//       { k: 'b', label: 'b', min: -5, max: 5, step: 0.5, def: 0 },
//       { k: 'c', label: 'c', min: -8, max: 8, step: 0.5, def: -3 },
//     ],
//     fn: p => x => p.a * x * x + p.b * x + p.c,
//     eq: p => `f(x) = ${fmt(p.a)}x² ${sign(p.b)} ${fmt(Math.abs(p.b))}x ${sign(p.c)} ${fmt(Math.abs(p.c))}`,
//     explanation:
//       '## Quadratic\n' +
//       'A **parabola**: $f(x) = ax^2 + bx + c$.\n' +
//       'The sign of **a** decides whether it opens up or down; $|a|$ controls how narrow it is. ' +
//       'It has a single turning point — the **vertex** — at $x = -\\frac{b}{2a}$.\n' +
//       '- Zero, one, or two roots depending on the discriminant $b^2 - 4ac$',
//     links: [{ label: 'Quadratic functions', url: 'https://en.wikipedia.org/wiki/Quadratic_function', tag: 'wiki' }],
//   },
//   cubic: {
//     name: 'Cubic',
//     glyph: 'M2,22 C8,2 16,30 24,8',
//     params: [
//       { k: 'a', label: 'a', min: -1, max: 1, step: 0.05, def: 0.2 },
//       { k: 'b', label: 'b', min: -6, max: 6, step: 0.5, def: -2 },
//     ],
//     fn: p => x => p.a * x * x * x + p.b * x,
//     eq: p => `f(x) = ${fmt(p.a)}x³ ${sign(p.b)} ${fmt(Math.abs(p.b))}x`,
//     explanation:
//       '## Cubic\n' +
//       'An odd-degree **polynomial**: $f(x) = ax^3 + bx$.\n' +
//       'The two ends head in **opposite** directions. There can be up to two turning points, and always an ' +
//       '**inflection point** where the curve switches concavity.',
//     links: [{ label: 'Cubic functions', url: 'https://en.wikipedia.org/wiki/Cubic_function', tag: 'wiki' }],
//   },
//   power: {
//     name: 'Power',
//     glyph: 'M2,26 Q14,26 24,2',
//     params: [
//       { k: 'a', label: 'coefficient a', min: -3, max: 3, step: 0.1, def: 1 },
//       { k: 'n', label: 'exponent n', min: -3, max: 4, step: 0.5, def: 2 },
//     ],
//     fn: p => x => p.a * Math.pow(x, p.n),
//     eq: p => `f(x) = ${fmt(p.a)}·x^${fmt(p.n)}`,
//     explanation:
//       '## Power\n' +
//       'The family $f(x) = ax^n$.\n' +
//       'Integer **n** gives polynomials; **negative n** gives reciprocals with asymptotes; ' +
//       '**fractional n** gives roots. The behavior right around $x = 0$ is the tell-tale of which kind you have.',
//     links: [{ label: 'Power functions', url: 'https://en.wikipedia.org/wiki/Power_function', tag: 'wiki' }],
//   },
//   rational: {
//     name: 'Rational',
//     glyph: 'M2,4 Q11,4 13,14 M15,14 Q17,26 24,26',
//     params: [
//       { k: 'a', label: 'numerator a', min: -6, max: 6, step: 0.5, def: 1 },
//       { k: 'h', label: 'shift h', min: -6, max: 6, step: 0.5, def: 0 },
//     ],
//     fn: p => x => p.a / (x - p.h),
//     eq: p => `f(x) = ${fmt(p.a)} / (x ${sign(-p.h)} ${fmt(Math.abs(p.h))})`,
//     explanation:
//       '## Rational\n' +
//       'A **reciprocal** curve: $f(x) = \\dfrac{a}{x - h}$.\n' +
//       'The denominator hits zero at $x = h$ — a **vertical asymptote**. Far from there the curve flattens ' +
//       'toward the **horizontal asymptote** $y = 0$. Two disconnected branches.',
//     links: [{ label: 'Rational functions', url: 'https://en.wikipedia.org/wiki/Rational_function', tag: 'wiki' }],
//   },
//   exponential: {
//     name: 'Exponential',
//     glyph: 'M2,26 Q16,26 24,2',
//     params: [
//       { k: 'a', label: 'coefficient a', min: -4, max: 4, step: 0.25, def: 1 },
//       { k: 'base', label: 'base', min: 0.2, max: 4, step: 0.1, def: 2 },
//     ],
//     fn: p => x => p.a * Math.pow(p.base, x),
//     eq: p => `f(x) = ${fmt(p.a)}·${fmt(p.base)}^x`,
//     explanation:
//       '## Exponential\n' +
//       'Constant **multiplicative** growth: $f(x) = a\\,b^x$.\n' +
//       'Base $b > 1$ grows, $0 < b < 1$ decays. The curve approaches — but never touches — the $x$-axis on one side, ' +
//       'so it has a **horizontal asymptote** and no root.',
//     links: [{ label: 'Exponential functions', url: 'https://en.wikipedia.org/wiki/Exponential_function', tag: 'wiki' }],
//   },
//   logarithmic: {
//     name: 'Logarithmic',
//     glyph: 'M2,2 Q10,26 24,26',
//     params: [
//       { k: 'a', label: 'scale a', min: -4, max: 4, step: 0.25, def: 1 },
//       { k: 'd', label: 'shift d', min: -6, max: 6, step: 0.5, def: 0 },
//     ],
//     fn: p => x => (x > 0 ? p.a * Math.log(x) + p.d : NaN),
//     eq: p => `f(x) = ${fmt(p.a)}·ln(x) ${sign(p.d)} ${fmt(Math.abs(p.d))}`,
//     explanation:
//       '## Logarithmic\n' +
//       'The **inverse of the exponential**: $f(x) = a\\ln(x) + d$.\n' +
//       'Defined only for $x > 0$, with a **vertical asymptote** at $x = 0$. It grows without bound, but ever more ' +
//       'slowly — the mirror image of exponential growth across $y = x$.',
//     links: [{ label: 'Logarithm', url: 'https://en.wikipedia.org/wiki/Logarithm', tag: 'wiki' }],
//   },

//   sine: {
//     name: 'Sine',
//     group: 'Trigonometric',
//     glyph: 'M2,14 Q7,2 12,14 Q17,26 22,14',
//     params: [
//       { k: 'A', label: 'amplitude A', min: 0, max: 5, step: 0.25, def: 1 },
//       { k: 'B', label: 'frequency B', min: 0.25, max: 4, step: 0.25, def: 1 },
//       { k: 'C', label: 'phase C', min: -3.14, max: 3.14, step: 0.1, def: 0 },
//       { k: 'D', label: 'offset D', min: -5, max: 5, step: 0.5, def: 0 },
//     ],
//     fn: p => x => p.A * Math.sin(p.B * x + p.C) + p.D,
//     eq: p => `f(x) = ${fmt(p.A)}·sin(${fmt(p.B)}x ${sign(p.C)} ${fmt(Math.abs(p.C))}) ${sign(p.D)} ${fmt(Math.abs(p.D))}`,
//     explanation:
//       '## Sine\n' +
//       'The general sinusoid: $f(x) = A\\sin(Bx + C) + D$.\n' +
//       '- **A** — amplitude (height of the wave)\n' +
//       '- **B** — frequency (squeezes the period to $\\frac{2\\pi}{B}$)\n' +
//       '- **C** — phase (slides it sideways)\n' +
//       '- **D** — vertical offset (lifts the midline)\n' +
//       'Periodic and bounded between $D - A$ and $D + A$. Crosses zero at $x = 0$ when $C = D = 0$.',
//     links: [{ label: 'Sine', url: 'https://en.wikipedia.org/wiki/Sine_and_cosine', tag: 'wiki' }],
//   },
//   cosine: {
//     name: 'Cosine',
//     group: 'Trigonometric',
//     glyph: 'M2,4 Q7,16 12,4 Q17,-8 22,4',
//     params: [
//       { k: 'A', label: 'amplitude A', min: 0, max: 5, step: 0.25, def: 1 },
//       { k: 'B', label: 'frequency B', min: 0.25, max: 4, step: 0.25, def: 1 },
//       { k: 'C', label: 'phase C', min: -3.14, max: 3.14, step: 0.1, def: 0 },
//       { k: 'D', label: 'offset D', min: -5, max: 5, step: 0.5, def: 0 },
//     ],
//     fn: p => x => p.A * Math.cos(p.B * x + p.C) + p.D,
//     eq: p => `f(x) = ${fmt(p.A)}·cos(${fmt(p.B)}x ${sign(p.C)} ${fmt(Math.abs(p.C))}) ${sign(p.D)} ${fmt(Math.abs(p.D))}`,
//     explanation:
//       '## Cosine\n' +
//       '$f(x) = A\\cos(Bx + C) + D$.\n' +
//       'Same shape as sine but **shifted by $\\frac{\\pi}{2}$**: $\\cos(x) = \\sin(x + \\frac{\\pi}{2})$. ' +
//       'At $x = 0$ the value is $A + D$, not zero.\n' +
//       '- **A** — amplitude\n' +
//       '- **B** — frequency (period $\\frac{2\\pi}{B}$)\n' +
//       '- **C** — phase shift\n' +
//       '- **D** — vertical offset',
//     links: [{ label: 'Cosine', url: 'https://en.wikipedia.org/wiki/Sine_and_cosine', tag: 'wiki' }],
//   },
//   tangent: {
//     name: 'Tangent',
//     group: 'Trigonometric',
//     glyph: 'M2,26 Q11,18 12,14 Q13,10 22,2',
//     params: [
//       { k: 'A', label: 'amplitude A', min: 0, max: 5, step: 0.25, def: 1 },
//       { k: 'B', label: 'frequency B', min: 0.25, max: 4, step: 0.25, def: 1 },
//       { k: 'C', label: 'phase C', min: -3.14, max: 3.14, step: 0.1, def: 0 },
//       { k: 'D', label: 'offset D', min: -5, max: 5, step: 0.5, def: 0 },
//     ],
//     fn: p => x => p.A * Math.tan(p.B * x + p.C) + p.D,
//     eq: p => `f(x) = ${fmt(p.A)}·tan(${fmt(p.B)}x ${sign(p.C)} ${fmt(Math.abs(p.C))}) ${sign(p.D)} ${fmt(Math.abs(p.D))}`,
//     explanation:
//       '## Tangent\n' +
//       '$f(x) = A\\tan(Bx + C) + D$, with $\\tan(x) = \\dfrac{\\sin(x)}{\\cos(x)}$.\n' +
//       'The denominator hits zero at $x = \\frac{\\pi}{2} + k\\pi$, giving **vertical asymptotes** there. ' +
//       'Unbounded, with period $\\pi$ (not $2\\pi$ like sine and cosine).\n' +
//       '- **A** — vertical scale\n' +
//       '- **B** — frequency (period $\\frac{\\pi}{B}$)\n' +
//       '- **C** — phase shift\n' +
//       '- **D** — vertical offset',
//     links: [{ label: 'Tangent', url: 'https://en.wikipedia.org/wiki/Trigonometric_functions', tag: 'wiki' }],
//   },

//   absolute: {
//     name: 'Absolute value',
//     glyph: 'M2,4 L13,24 L24,4',
//     params: [
//       { k: 'a', label: 'a', min: -3, max: 3, step: 0.1, def: 1 },
//       { k: 'h', label: 'shift h', min: -6, max: 6, step: 0.5, def: 0 },
//     ],
//     fn: p => x => p.a * Math.abs(x - p.h),
//     eq: p => `f(x) = ${fmt(p.a)}·|x ${sign(-p.h)} ${fmt(Math.abs(p.h))}|`,
//     explanation:
//       '## Absolute value\n' +
//       'A sharp **V shape**: $f(x) = a\\,|x - h|$.\n' +
//       'The corner sits at $x = h$. The function is **not differentiable** at the vertex — the slope jumps ' +
//       'straight from $-a$ to $+a$ with no smooth transition.',
//     links: [{ label: 'Absolute value', url: 'https://en.wikipedia.org/wiki/Absolute_value', tag: 'wiki' }],
//   },
//   sqrt: {
//     name: 'Square root',
//     glyph: 'M2,24 Q4,8 24,4',
//     params: [
//       { k: 'a', label: 'a', min: -3, max: 3, step: 0.1, def: 1 },
//       { k: 'h', label: 'shift h', min: -6, max: 6, step: 0.5, def: 0 },
//     ],
//     fn: p => x => (x - p.h >= 0 ? p.a * Math.sqrt(x - p.h) : NaN),
//     eq: p => `f(x) = ${fmt(p.a)}·√(x ${sign(-p.h)} ${fmt(Math.abs(p.h))})`,
//     explanation:
//       '## Square root\n' +
//       'Half a sideways parabola: $f(x) = a\\sqrt{x - h}$.\n' +
//       'Defined only where $x \\ge h$. Steep right at the start, then flattening as $x$ grows — it is the ' +
//       '**inverse** of $x^2$ restricted to non-negative inputs.',
//     links: [{ label: 'Square root', url: 'https://en.wikipedia.org/wiki/Square_root', tag: 'wiki' }],
//   },
// };

// const DEFAULT_FAMILIES = FAMILIES;

// function fmt(v) {
//   const r = Math.round(v * 1e6) / 1e6;
//   return Math.abs(r - Math.round(r)) < 1e-4 ? String(Math.round(r)) : String(r);
// }
// function sign(v) { return v >= 0 ? '+' : '−'; }

// function FamilyGlyph({ d, active }) {
//   return (
//     <svg width="26" height="26" viewBox="0 0 26 28" aria-hidden="true">
//       <path d={d} fill="none" stroke={active ? ACCENT : '#94a3b8'}
//             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }

// export default function FunctionGallery({
//   initialFamily = 'linear',
//   families = DEFAULT_FAMILIES,
//   explanations = {},
//   visualizerProps = {},
//   infoPanelProps = {},
//   extraTabs = [],
//   darkMode = false,
//   showPicker = true,
//   showSliders = true,
//   showInfoPanel = true,
//   maxWidth = '80vw',
//   onFamilyChange,
//   onParamsChange,
// }) {
//   const familyKeys = Object.keys(families);
//   const startKey = families[initialFamily] ? initialFamily : familyKeys[0];

//   const [current, setCurrent] = useState(startKey);
//   const [paramVals, setParamVals] = useState(() => {
//     const init = {};
//     (families[startKey]?.params || []).forEach(p => (init[p.k] = p.def));
//     return init;
//   });

//   const fam = families[current] || families[familyKeys[0]];

//   const selectFamily = key => {
//     setCurrent(key);
//     const next = {};
//     (families[key].params || []).forEach(p => (next[p.k] = p.def));
//     setParamVals(next);
//     if (onFamilyChange) onFamilyChange(key, families[key]);
//     if (onParamsChange) onParamsChange(next);
//   };

//   const setParam = (k, v) => {
//     const next = { ...paramVals, [k]: v };
//     setParamVals(next);
//     if (onParamsChange) onParamsChange(next);
//   };

//   const formula = fam.eq(paramVals);

//   const functions = useMemo(
//     () => [{ fn: fam.fn(paramVals), color: ACCENT, label: 'f', formula, visible: true }],
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     [current, paramVals, formula]
//   );

//   const tabs = useMemo(() => {
//     const base = [
//       {
//         key: 'explanation',
//         label: 'Explanation',
//         order: 0,
//         content: explanations[current] != null ? explanations[current] : fam.explanation,
//       },
//       {
//         key: 'resources',
//         label: 'Resources',
//         order: 10,
//         content: '',
//         links: fam.links,
//         visible: !!(fam.links && fam.links.length),
//       },
//     ];
//     return [...base, ...extraTabs];
//   }, [fam, extraTabs, explanations, current]);

//   const fontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
//   const panelShadow = '0 1px 3px rgba(15,23,42,0.05), 0 8px 24px rgba(15,23,42,0.05)';
//   const card = {
//     background: darkMode ? '#0f172a' : '#fff',
//     border: `1px solid ${darkMode ? '#1e293b' : '#f1f5f9'}`,
//     borderRadius: 12,
//     boxShadow: panelShadow,
//   };
//   const famBtn = active => ({
//     display: 'flex', alignItems: 'center', gap: 10, width: '100%', textAlign: 'left',
//     border: '1px solid transparent',
//     background: active ? (darkMode ? '#1e293b' : '#eff6ff') : 'none',
//     borderColor: active ? (darkMode ? '#334155' : '#dbeafe') : 'transparent',
//     borderRadius: 8, padding: '9px 10px', cursor: 'pointer', fontFamily: 'inherit',
//     fontSize: 13, fontWeight: active ? 600 : 400,
//     color: active ? (darkMode ? '#dbeafe' : '#1e3a8a') : (darkMode ? '#cbd5e1' : '#334155'),
//     transition: 'background 0.12s, border-color 0.12s',
//   });
//   const groupHeader = {
//     fontSize: 10.5,
//     textTransform: 'uppercase',
//     letterSpacing: '0.06em',
//     color: darkMode ? '#64748b' : '#94a3b8',
//     fontWeight: 600,
//     margin: '10px 8px 4px',
//   };

//   const mergedVisualizerProps = {
//     defaultWidth: 900,
//     defaultHeight: 620,
//     ...visualizerProps,
//   };

//   /* Build picker list with group headers inserted where group changes */
//   const pickerEntries = [];
//   let lastGroup = undefined;
//   Object.entries(families).forEach(([key, f]) => {
//     if (f.group && f.group !== lastGroup) {
//       pickerEntries.push({ type: 'header', label: f.group, key: `__hdr_${f.group}` });
//       lastGroup = f.group;
//     } else if (!f.group) {
//       lastGroup = undefined;
//     }
//     pickerEntries.push({ type: 'item', key, fam: f });
//   });

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
//         gap: 20,
//         padding: '0 20px',
//         alignItems: 'flex-start',
//         boxSizing: 'border-box',
//       }}>
//         {showPicker && (
//           <nav style={{ ...card, width: 232, padding: 10, flexShrink: 0 }}>
//             <div style={{ ...groupHeader, margin: '6px 8px 10px' }}>Families</div>
//             {pickerEntries.map(e =>
//               e.type === 'header' ? (
//                 <div key={e.key} style={groupHeader}>{e.label}</div>
//               ) : (
//                 <button key={e.key} style={famBtn(e.key === current)} onClick={() => selectFamily(e.key)}>
//                   <FamilyGlyph d={e.fam.glyph} active={e.key === current} />
//                   <span>{e.fam.name}</span>
//                 </button>
//               )
//             )}
//           </nav>
//         )}

//         <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
//           <div style={{ ...card, padding: 18 }}>
//             <div style={{
//               display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
//               marginBottom: 14, flexWrap: 'wrap', gap: 8,
//             }}>
//               <span style={{ fontSize: 16, letterSpacing: '-0.01em', color: darkMode ? '#e2e8f0' : '#0f172a' }}>
//                 {fam.name}
//               </span>
//               <span style={{
//                 fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace', fontSize: 13,
//                 color: ACCENT, background: darkMode ? '#1e293b' : '#eff6ff',
//                 padding: '4px 10px', borderRadius: 6,
//               }}>
//                 {formula}
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

//             {showSliders && (
//               <div style={{
//                 marginTop: 16, display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px 22px',
//               }}>
//                 {fam.params.map(p => (
//                   <div key={p.k}>
//                     <label style={{
//                       display: 'flex', justifyContent: 'space-between', fontSize: 12,
//                       color: darkMode ? '#cbd5e1' : '#334155', marginBottom: 5,
//                       fontVariantNumeric: 'tabular-nums',
//                     }}>
//                       <span>{p.label}</span>
//                       <span style={{ fontFamily: 'ui-monospace, monospace', color: ACCENT, fontWeight: 600 }}>
//                         {fmt(paramVals[p.k])}
//                       </span>
//                     </label>
//                     <input
//                       type="range"
//                       min={p.min} max={p.max} step={p.step}
//                       value={paramVals[p.k]}
//                       onChange={e => setParam(p.k, parseFloat(e.target.value))}
//                       style={{ width: '100%', accentColor: ACCENT, cursor: 'pointer' }}
//                     />
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {showInfoPanel && (
//           <aside style={{ ...card, width: 320, padding: 18, flexShrink: 0 }}>
//             <InfoPanel tabs={tabs} darkMode={darkMode} {...infoPanelProps} />
//           </aside>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState, useMemo } from 'react';
import { VisualizerWithControls } from '../FunctionVisualizerCoreImproved';
import InfoPanel from '../InfoPanel';

/* =====================================================
   FUNCTION GALLERY  (v6)

   Changes from v5:
     1. Grouped families (Sine / Cosine / Tangent under
        "Trigonometric") are rendered inside a bordered,
        tinted section box with a header on top. Items
        outside the group (Absolute, Square root) sit
        plainly below — visually unambiguous.
     2. Sliders are moved out of the visualizer card and
        into the left column, directly under the family
        picker, when showPicker is true. Keeps them above
        the fold and frees vertical space for the canvas.
        Falls back to the original in-card grid when the
        picker is hidden.

   PROPS (all optional)
     initialFamily   : string
     families        : object
     explanations    : { [key]: string }
     visualizerProps : object
     infoPanelProps  : object
     extraTabs       : TabDef[]
     darkMode        : boolean
     showPicker      : boolean
     showSliders     : boolean
     showInfoPanel   : boolean
     maxWidth        : string|number
     onFamilyChange  : (key, family) => void
     onParamsChange  : (paramVals) => void

   Family object may carry an optional `group` string. Consecutive
   families sharing the same group value are wrapped together.
   ===================================================== */

const ACCENT = '#3b82f6';

export const FAMILIES = {
  linear: {
    name: 'Linear',
    glyph: 'M2,22 L24,4',
    params: [
      { k: 'a', label: 'slope a', min: -4, max: 4, step: 0.1, def: 1 },
      { k: 'b', label: 'intercept b', min: -8, max: 8, step: 0.5, def: 0 },
    ],
    fn: p => x => p.a * x + p.b,
    eq: p => `f(x) = ${fmt(p.a)}x ${sign(p.b)} ${fmt(Math.abs(p.b))}`,
    explanation:
      '## Linear\n' +
      'A **straight line**: $f(x) = ax + b$.\n' +
      'The slope **a** sets the tilt — every step right of 1 moves the line up by $a$. ' +
      'The intercept **b** slides the whole line vertically; it is the value where the line crosses the $y$-axis.\n' +
      '- Constant rate of change everywhere\n' +
      '- Exactly one root (unless $a = 0$)',
    links: [{ label: 'Linear functions', url: 'https://en.wikipedia.org/wiki/Linear_function', tag: 'wiki' }],
  },
  quadratic: {
    name: 'Quadratic',
    glyph: 'M2,4 Q13,30 24,4',
    params: [
      { k: 'a', label: 'a', min: -2, max: 2, step: 0.1, def: 0.3 },
      { k: 'b', label: 'b', min: -5, max: 5, step: 0.5, def: 0 },
      { k: 'c', label: 'c', min: -8, max: 8, step: 0.5, def: -3 },
    ],
    fn: p => x => p.a * x * x + p.b * x + p.c,
    eq: p => `f(x) = ${fmt(p.a)}x² ${sign(p.b)} ${fmt(Math.abs(p.b))}x ${sign(p.c)} ${fmt(Math.abs(p.c))}`,
    explanation:
      '## Quadratic\n' +
      'A **parabola**: $f(x) = ax^2 + bx + c$.\n' +
      'The sign of **a** decides whether it opens up or down; $|a|$ controls how narrow it is. ' +
      'It has a single turning point — the **vertex** — at $x = -\\frac{b}{2a}$.\n' +
      '- Zero, one, or two roots depending on the discriminant $b^2 - 4ac$',
    links: [{ label: 'Quadratic functions', url: 'https://en.wikipedia.org/wiki/Quadratic_function', tag: 'wiki' }],
  },
  cubic: {
    name: 'Cubic',
    glyph: 'M2,22 C8,2 16,30 24,8',
    params: [
      { k: 'a', label: 'a', min: -1, max: 1, step: 0.05, def: 0.2 },
      { k: 'b', label: 'b', min: -6, max: 6, step: 0.5, def: -2 },
    ],
    fn: p => x => p.a * x * x * x + p.b * x,
    eq: p => `f(x) = ${fmt(p.a)}x³ ${sign(p.b)} ${fmt(Math.abs(p.b))}x`,
    explanation:
      '## Cubic\n' +
      'An odd-degree **polynomial**: $f(x) = ax^3 + bx$.\n' +
      'The two ends head in **opposite** directions. There can be up to two turning points, and always an ' +
      '**inflection point** where the curve switches concavity.',
    links: [{ label: 'Cubic functions', url: 'https://en.wikipedia.org/wiki/Cubic_function', tag: 'wiki' }],
  },
  power: {
    name: 'Power',
    glyph: 'M2,26 Q14,26 24,2',
    params: [
      { k: 'a', label: 'coefficient a', min: -3, max: 3, step: 0.1, def: 1 },
      { k: 'n', label: 'exponent n', min: -3, max: 4, step: 0.5, def: 2 },
    ],
    fn: p => x => p.a * Math.pow(x, p.n),
    eq: p => `f(x) = ${fmt(p.a)}·x^${fmt(p.n)}`,
    explanation:
      '## Power\n' +
      'The family $f(x) = ax^n$.\n' +
      'Integer **n** gives polynomials; **negative n** gives reciprocals with asymptotes; ' +
      '**fractional n** gives roots. The behavior right around $x = 0$ is the tell-tale of which kind you have.',
    links: [{ label: 'Power functions', url: 'https://en.wikipedia.org/wiki/Power_function', tag: 'wiki' }],
  },
  rational: {
    name: 'Rational',
    glyph: 'M2,4 Q11,4 13,14 M15,14 Q17,26 24,26',
    params: [
      { k: 'a', label: 'numerator a', min: -6, max: 6, step: 0.5, def: 1 },
      { k: 'h', label: 'shift h', min: -6, max: 6, step: 0.5, def: 0 },
    ],
    fn: p => x => p.a / (x - p.h),
    eq: p => `f(x) = ${fmt(p.a)} / (x ${sign(-p.h)} ${fmt(Math.abs(p.h))})`,
    explanation:
      '## Rational\n' +
      'A **reciprocal** curve: $f(x) = \\dfrac{a}{x - h}$.\n' +
      'The denominator hits zero at $x = h$ — a **vertical asymptote**. Far from there the curve flattens ' +
      'toward the **horizontal asymptote** $y = 0$. Two disconnected branches.',
    links: [{ label: 'Rational functions', url: 'https://en.wikipedia.org/wiki/Rational_function', tag: 'wiki' }],
  },
  exponential: {
    name: 'Exponential',
    glyph: 'M2,26 Q16,26 24,2',
    params: [
      { k: 'a', label: 'coefficient a', min: -4, max: 4, step: 0.25, def: 1 },
      { k: 'base', label: 'base', min: 0.2, max: 4, step: 0.1, def: 2 },
    ],
    fn: p => x => p.a * Math.pow(p.base, x),
    eq: p => `f(x) = ${fmt(p.a)}·${fmt(p.base)}^x`,
    explanation:
      '## Exponential\n' +
      'Constant **multiplicative** growth: $f(x) = a\\,b^x$.\n' +
      'Base $b > 1$ grows, $0 < b < 1$ decays. The curve approaches — but never touches — the $x$-axis on one side, ' +
      'so it has a **horizontal asymptote** and no root.',
    links: [{ label: 'Exponential functions', url: 'https://en.wikipedia.org/wiki/Exponential_function', tag: 'wiki' }],
  },
  logarithmic: {
    name: 'Logarithmic',
    glyph: 'M2,2 Q10,26 24,26',
    params: [
      { k: 'a', label: 'scale a', min: -4, max: 4, step: 0.25, def: 1 },
      { k: 'd', label: 'shift d', min: -6, max: 6, step: 0.5, def: 0 },
    ],
    fn: p => x => (x > 0 ? p.a * Math.log(x) + p.d : NaN),
    eq: p => `f(x) = ${fmt(p.a)}·ln(x) ${sign(p.d)} ${fmt(Math.abs(p.d))}`,
    explanation:
      '## Logarithmic\n' +
      'The **inverse of the exponential**: $f(x) = a\\ln(x) + d$.\n' +
      'Defined only for $x > 0$, with a **vertical asymptote** at $x = 0$. It grows without bound, but ever more ' +
      'slowly — the mirror image of exponential growth across $y = x$.',
    links: [{ label: 'Logarithm', url: 'https://en.wikipedia.org/wiki/Logarithm', tag: 'wiki' }],
  },

  sine: {
    name: 'Sine',
    group: 'Trigonometric',
    glyph: 'M2,14 Q7,2 12,14 Q17,26 22,14',
    params: [
      { k: 'A', label: 'amplitude A', min: 0, max: 5, step: 0.25, def: 1 },
      { k: 'B', label: 'frequency B', min: 0.25, max: 4, step: 0.25, def: 1 },
      { k: 'C', label: 'phase C', min: -3.14, max: 3.14, step: 0.1, def: 0 },
      { k: 'D', label: 'offset D', min: -5, max: 5, step: 0.5, def: 0 },
    ],
    fn: p => x => p.A * Math.sin(p.B * x + p.C) + p.D,
    eq: p => `f(x) = ${fmt(p.A)}·sin(${fmt(p.B)}x ${sign(p.C)} ${fmt(Math.abs(p.C))}) ${sign(p.D)} ${fmt(Math.abs(p.D))}`,
    explanation:
      '## Sine\n' +
      'The general sinusoid: $f(x) = A\\sin(Bx + C) + D$.\n' +
      '- **A** — amplitude (height of the wave)\n' +
      '- **B** — frequency (squeezes the period to $\\frac{2\\pi}{B}$)\n' +
      '- **C** — phase (slides it sideways)\n' +
      '- **D** — vertical offset (lifts the midline)\n' +
      'Periodic and bounded between $D - A$ and $D + A$. Crosses zero at $x = 0$ when $C = D = 0$.',
    links: [{ label: 'Sine', url: 'https://en.wikipedia.org/wiki/Sine_and_cosine', tag: 'wiki' }],
  },
  cosine: {
    name: 'Cosine',
    group: 'Trigonometric',
    glyph: 'M2,4 Q7,16 12,4 Q17,-8 22,4',
    params: [
      { k: 'A', label: 'amplitude A', min: 0, max: 5, step: 0.25, def: 1 },
      { k: 'B', label: 'frequency B', min: 0.25, max: 4, step: 0.25, def: 1 },
      { k: 'C', label: 'phase C', min: -3.14, max: 3.14, step: 0.1, def: 0 },
      { k: 'D', label: 'offset D', min: -5, max: 5, step: 0.5, def: 0 },
    ],
    fn: p => x => p.A * Math.cos(p.B * x + p.C) + p.D,
    eq: p => `f(x) = ${fmt(p.A)}·cos(${fmt(p.B)}x ${sign(p.C)} ${fmt(Math.abs(p.C))}) ${sign(p.D)} ${fmt(Math.abs(p.D))}`,
    explanation:
      '## Cosine\n' +
      '$f(x) = A\\cos(Bx + C) + D$.\n' +
      'Same shape as sine but **shifted by $\\frac{\\pi}{2}$**: $\\cos(x) = \\sin(x + \\frac{\\pi}{2})$. ' +
      'At $x = 0$ the value is $A + D$, not zero.\n' +
      '- **A** — amplitude\n' +
      '- **B** — frequency (period $\\frac{2\\pi}{B}$)\n' +
      '- **C** — phase shift\n' +
      '- **D** — vertical offset',
    links: [{ label: 'Cosine', url: 'https://en.wikipedia.org/wiki/Sine_and_cosine', tag: 'wiki' }],
  },
  tangent: {
    name: 'Tangent',
    group: 'Trigonometric',
    glyph: 'M2,26 Q11,18 12,14 Q13,10 22,2',
    params: [
      { k: 'A', label: 'amplitude A', min: 0, max: 5, step: 0.25, def: 1 },
      { k: 'B', label: 'frequency B', min: 0.25, max: 4, step: 0.25, def: 1 },
      { k: 'C', label: 'phase C', min: -3.14, max: 3.14, step: 0.1, def: 0 },
      { k: 'D', label: 'offset D', min: -5, max: 5, step: 0.5, def: 0 },
    ],
    fn: p => x => p.A * Math.tan(p.B * x + p.C) + p.D,
    eq: p => `f(x) = ${fmt(p.A)}·tan(${fmt(p.B)}x ${sign(p.C)} ${fmt(Math.abs(p.C))}) ${sign(p.D)} ${fmt(Math.abs(p.D))}`,
    explanation:
      '## Tangent\n' +
      '$f(x) = A\\tan(Bx + C) + D$, with $\\tan(x) = \\dfrac{\\sin(x)}{\\cos(x)}$.\n' +
      'The denominator hits zero at $x = \\frac{\\pi}{2} + k\\pi$, giving **vertical asymptotes** there. ' +
      'Unbounded, with period $\\pi$ (not $2\\pi$ like sine and cosine).\n' +
      '- **A** — vertical scale\n' +
      '- **B** — frequency (period $\\frac{\\pi}{B}$)\n' +
      '- **C** — phase shift\n' +
      '- **D** — vertical offset',
    links: [{ label: 'Tangent', url: 'https://en.wikipedia.org/wiki/Trigonometric_functions', tag: 'wiki' }],
  },

  absolute: {
    name: 'Absolute value',
    glyph: 'M2,4 L13,24 L24,4',
    params: [
      { k: 'a', label: 'a', min: -3, max: 3, step: 0.1, def: 1 },
      { k: 'h', label: 'shift h', min: -6, max: 6, step: 0.5, def: 0 },
    ],
    fn: p => x => p.a * Math.abs(x - p.h),
    eq: p => `f(x) = ${fmt(p.a)}·|x ${sign(-p.h)} ${fmt(Math.abs(p.h))}|`,
    explanation:
      '## Absolute value\n' +
      'A sharp **V shape**: $f(x) = a\\,|x - h|$.\n' +
      'The corner sits at $x = h$. The function is **not differentiable** at the vertex — the slope jumps ' +
      'straight from $-a$ to $+a$ with no smooth transition.',
    links: [{ label: 'Absolute value', url: 'https://en.wikipedia.org/wiki/Absolute_value', tag: 'wiki' }],
  },
  sqrt: {
    name: 'Square root',
    glyph: 'M2,24 Q4,8 24,4',
    params: [
      { k: 'a', label: 'a', min: -3, max: 3, step: 0.1, def: 1 },
      { k: 'h', label: 'shift h', min: -6, max: 6, step: 0.5, def: 0 },
    ],
    fn: p => x => (x - p.h >= 0 ? p.a * Math.sqrt(x - p.h) : NaN),
    eq: p => `f(x) = ${fmt(p.a)}·√(x ${sign(-p.h)} ${fmt(Math.abs(p.h))})`,
    explanation:
      '## Square root\n' +
      'Half a sideways parabola: $f(x) = a\\sqrt{x - h}$.\n' +
      'Defined only where $x \\ge h$. Steep right at the start, then flattening as $x$ grows — it is the ' +
      '**inverse** of $x^2$ restricted to non-negative inputs.',
    links: [{ label: 'Square root', url: 'https://en.wikipedia.org/wiki/Square_root', tag: 'wiki' }],
  },
};

const DEFAULT_FAMILIES = FAMILIES;

function fmt(v) {
  const r = Math.round(v * 1e6) / 1e6;
  return Math.abs(r - Math.round(r)) < 1e-4 ? String(Math.round(r)) : String(r);
}
function sign(v) { return v >= 0 ? '+' : '−'; }

function FamilyGlyph({ d, active }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 28" aria-hidden="true">
      <path d={d} fill="none" stroke={active ? ACCENT : '#94a3b8'}
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Build an ordered list of picker sections from a families object.
   Consecutive entries sharing the same `group` collapse into one
   grouped section; entries with no group each become their own
   ungrouped section (so they render plainly).                       */
function buildPickerSections(families) {
  const sections = [];
  let currentGrouped = null;
  Object.entries(families).forEach(([key, fam]) => {
    const g = fam.group || null;
    if (g) {
      if (!currentGrouped || currentGrouped.group !== g) {
        currentGrouped = { kind: 'grouped', group: g, items: [] };
        sections.push(currentGrouped);
      }
      currentGrouped.items.push({ key, fam });
    } else {
      sections.push({ kind: 'plain', items: [{ key, fam }] });
      currentGrouped = null;
    }
  });
  return sections;
}

export default function FunctionGallery({
  initialFamily = 'linear',
  families = DEFAULT_FAMILIES,
  explanations = {},
  visualizerProps = {},
  infoPanelProps = {},
  extraTabs = [],
  darkMode = false,
  showPicker = true,
  showSliders = true,
  showInfoPanel = true,
  maxWidth = '80vw',
  onFamilyChange,
  onParamsChange,
}) {
  const familyKeys = Object.keys(families);
  const startKey = families[initialFamily] ? initialFamily : familyKeys[0];

  const [current, setCurrent] = useState(startKey);
  const [paramVals, setParamVals] = useState(() => {
    const init = {};
    (families[startKey]?.params || []).forEach(p => (init[p.k] = p.def));
    return init;
  });

  const fam = families[current] || families[familyKeys[0]];

  const selectFamily = key => {
    setCurrent(key);
    const next = {};
    (families[key].params || []).forEach(p => (next[p.k] = p.def));
    setParamVals(next);
    if (onFamilyChange) onFamilyChange(key, families[key]);
    if (onParamsChange) onParamsChange(next);
  };

  const setParam = (k, v) => {
    const next = { ...paramVals, [k]: v };
    setParamVals(next);
    if (onParamsChange) onParamsChange(next);
  };

  const formula = fam.eq(paramVals);

  const functions = useMemo(
    () => [{ fn: fam.fn(paramVals), color: ACCENT, label: 'f', formula, visible: true }],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [current, paramVals, formula]
  );

  const tabs = useMemo(() => {
    const base = [
      {
        key: 'explanation',
        label: 'Explanation',
        order: 0,
        content: explanations[current] != null ? explanations[current] : fam.explanation,
      },
      {
        key: 'resources',
        label: 'Resources',
        order: 10,
        content: '',
        links: fam.links,
        visible: !!(fam.links && fam.links.length),
      },
    ];
    return [...base, ...extraTabs];
  }, [fam, extraTabs, explanations, current]);

  const fontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  const panelShadow = '0 1px 3px rgba(15,23,42,0.05), 0 8px 24px rgba(15,23,42,0.05)';
  const card = {
    background: darkMode ? '#0f172a' : '#fff',
    border: `1px solid ${darkMode ? '#1e293b' : '#f1f5f9'}`,
    borderRadius: 12,
    boxShadow: panelShadow,
  };
  const famBtn = active => ({
    display: 'flex', alignItems: 'center', gap: 10, width: '100%', textAlign: 'left',
    border: '1px solid transparent',
    background: active ? (darkMode ? '#1e293b' : '#eff6ff') : 'none',
    borderColor: active ? (darkMode ? '#334155' : '#dbeafe') : 'transparent',
    borderRadius: 8, padding: '9px 10px', cursor: 'pointer', fontFamily: 'inherit',
    fontSize: 13, fontWeight: active ? 600 : 400,
    color: active ? (darkMode ? '#dbeafe' : '#1e3a8a') : (darkMode ? '#cbd5e1' : '#334155'),
    transition: 'background 0.12s, border-color 0.12s',
  });

  const sectionTitle = {
    fontSize: 10.5,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    color: darkMode ? '#64748b' : '#94a3b8',
    fontWeight: 600,
    margin: '6px 8px 8px',
  };

  /* Grouped section: bordered + tinted container with header,
     so the items inside it read as belonging together. */
  const groupedBox = {
    margin: '6px 0',
    padding: '4px 4px 6px',
    background: darkMode ? 'rgba(30,41,59,0.45)' : 'rgba(239,246,255,0.55)',
    border: `1px solid ${darkMode ? '#1e293b' : '#dbeafe'}`,
    borderRadius: 10,
  };
  const groupedTitle = {
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: darkMode ? '#93c5fd' : '#1e3a8a',
    fontWeight: 700,
    margin: '4px 6px 6px',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  };
  const groupedDot = {
    display: 'inline-block',
    width: 6, height: 6, borderRadius: '50%',
    background: ACCENT,
    flexShrink: 0,
  };

  const mergedVisualizerProps = {
    defaultWidth: 900,
    defaultHeight: 620,
    ...visualizerProps,
  };

  const pickerSections = buildPickerSections(families);
  const slidersInSidebar = showPicker && showSliders;

  const renderSliders = (compact) => (
    <div style={compact
      ? { display: 'flex', flexDirection: 'column', gap: 12 }
      : { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px 22px' }
    }>
      {fam.params.map(p => (
        <div key={p.k}>
          <label style={{
            display: 'flex', justifyContent: 'space-between', fontSize: 12,
            color: darkMode ? '#cbd5e1' : '#334155', marginBottom: 5,
            fontVariantNumeric: 'tabular-nums',
          }}>
            <span>{p.label}</span>
            <span style={{ fontFamily: 'ui-monospace, monospace', color: ACCENT, fontWeight: 600 }}>
              {fmt(paramVals[p.k])}
            </span>
          </label>
          <input
            type="range"
            min={p.min} max={p.max} step={p.step}
            value={paramVals[p.k]}
            onChange={e => setParam(p.k, parseFloat(e.target.value))}
            style={{ width: '100%', accentColor: ACCENT, cursor: 'pointer' }}
          />
        </div>
      ))}
    </div>
  );

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
        gap: 20,
        padding: '0 20px',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
      }}>
        {showPicker && (
          <nav style={{ ...card, width: 232, padding: 10, flexShrink: 0 }}>
            <div style={sectionTitle}>Families</div>

            {pickerSections.map((sec, si) => {
              if (sec.kind === 'grouped') {
                return (
                  <div key={`g-${si}`} style={groupedBox}>
                    <div style={groupedTitle}>
                      <span style={groupedDot} />
                      <span>{sec.group}</span>
                    </div>
                    {sec.items.map(({ key, fam: f }) => (
                      <button
                        key={key}
                        style={famBtn(key === current)}
                        onClick={() => selectFamily(key)}
                      >
                        <FamilyGlyph d={f.glyph} active={key === current} />
                        <span>{f.name}</span>
                      </button>
                    ))}
                  </div>
                );
              }
              return sec.items.map(({ key, fam: f }) => (
                <button
                  key={key}
                  style={famBtn(key === current)}
                  onClick={() => selectFamily(key)}
                >
                  <FamilyGlyph d={f.glyph} active={key === current} />
                  <span>{f.name}</span>
                </button>
              ));
            })}

            {slidersInSidebar && (
              <div style={{
                marginTop: 14,
                paddingTop: 12,
                borderTop: `1px solid ${darkMode ? '#1e293b' : '#e2e8f0'}`,
              }}>
                <div style={sectionTitle}>Parameters</div>
                {renderSliders(true)}
              </div>
            )}
          </nav>
        )}

        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ ...card, padding: 18 }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              marginBottom: 14, flexWrap: 'wrap', gap: 8,
            }}>
              <span style={{ fontSize: 16, letterSpacing: '-0.01em', color: darkMode ? '#e2e8f0' : '#0f172a' }}>
                {fam.name}
              </span>
              <span style={{
                fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace', fontSize: 13,
                color: ACCENT, background: darkMode ? '#1e293b' : '#eff6ff',
                padding: '4px 10px', borderRadius: 6,
              }}>
                {formula}
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

            {showSliders && !slidersInSidebar && (
              <div style={{ marginTop: 16 }}>
                {renderSliders(false)}
              </div>
            )}
          </div>
        </div>

        {showInfoPanel && (
          <aside style={{ ...card, width: 320, padding: 18, flexShrink: 0 }}>
            <InfoPanel tabs={tabs} darkMode={darkMode} {...infoPanelProps} />
          </aside>
        )}
      </div>
    </div>
  );
}