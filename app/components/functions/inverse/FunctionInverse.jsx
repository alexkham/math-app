// // /**
// //  * FunctionInverse — v1 (demo)
// //  *
// //  * Inverse Function Visualizer. Pick a family; the visualizer shows
// //  *   - f(x)
// //  *   - f⁻¹(x)
// //  *   - y = x (the mirror line)
// //  * together, so the inverse-as-reflection is immediate.
// //  *
// //  * For families that aren't one-to-one (quadratic, |x|, sin, cos), the
// //  * inverse only exists on a restricted domain. The tool auto-restricts,
// //  * draws the rest of f in a faded style to expose the failed horizontal
// //  * line test, and bolds the branch that actually gets inverted. The
// //  * InfoPanel explains the restriction.
// //  *
// //  * Built from the same primitives as FunctionGallery / Transformations /
// //  * Composition: VisualizerWithControls + InfoPanel + family-picker.
// //  *
// //  * PROPS (all optional)
// //  *   initialFamily   : string
// //  *   families        : object        — override built-in FAMILIES
// //  *   visualizerProps : object        — forwarded to VisualizerWithControls
// //  *   infoPanelProps  : object        — forwarded to InfoPanel
// //  *   darkMode        : boolean
// //  *   showPicker      : boolean
// //  *   showInfoPanel   : boolean
// //  *   maxWidth        : string|number — wrapper cap; default '80vw'
// //  */

// // import React, { useState, useMemo } from 'react';
// // import { VisualizerWithControls } from '../FunctionVisualizerCoreImproved';
// // import InfoPanel from '../InfoPanel';


// // /* ================================================================
// //    COLORS
// //    ================================================================ */

// // const COL = {
// //   fFaded: '#cbd5e1', // unrestricted f (the part we don't invert)
// //   f:      '#3b82f6', // f, or the restricted branch we do invert
// //   inv:    '#f59e0b', // f⁻¹
// //   mirror: '#94a3b8', // y = x
// // };


// // /* ================================================================
// //    FAMILIES
// //    ================================================================
// //    Each family declares:
// //      - name, glyph
// //      - fn(x)            : numeric f
// //      - invFn(x)         : numeric f⁻¹  (returns NaN outside its domain)
// //      - eq, invEq        : pretty strings, "f(x) = …" / "f⁻¹(x) = …"
// //      - restricted       : boolean — true when f needed domain restriction
// //      - branchFn(x)      : numeric f restricted to the invertible branch
// //                           (only defined when restricted = true)
// //      - domain           : { f, inv } human-readable domain strings
// //      - restrictionNote  : markdown explaining the cut (when restricted)
// //      - selfInverse      : boolean (highlighted in the explanation)
// // */

// // export const FAMILIES = {
// //   identity: {
// //     name: 'Identity (x)',
// //     glyph: 'M2,22 L24,4',
// //     fn: x => x,
// //     invFn: x => x,
// //     eq: 'x',
// //     invEq: 'x',
// //     restricted: false,
// //     domain: { f: 'all real x', inv: 'all real x' },
// //     selfInverse: true,
// //   },
// //   linearScale: {
// //     name: 'Linear (2x)',
// //     glyph: 'M2,24 L24,2',
// //     fn: x => 2 * x,
// //     invFn: x => x / 2,
// //     eq: '2x',
// //     invEq: 'x/2',
// //     restricted: false,
// //     domain: { f: 'all real x', inv: 'all real x' },
// //   },
// //   cubic: {
// //     name: 'Cubic',
// //     glyph: 'M2,22 C8,2 16,30 24,8',
// //     fn: x => x * x * x,
// //     invFn: x => Math.cbrt(x),
// //     eq: 'x³',
// //     invEq: '∛x',
// //     restricted: false,
// //     domain: { f: 'all real x', inv: 'all real x' },
// //   },
// //   reciprocal: {
// //     name: 'Reciprocal',
// //     glyph: 'M2,4 Q11,4 13,14 M15,14 Q17,26 24,26',
// //     fn: x => (x === 0 ? NaN : 1 / x),
// //     invFn: x => (x === 0 ? NaN : 1 / x),
// //     eq: '1/x',
// //     invEq: '1/x',
// //     restricted: false,
// //     domain: { f: 'x ≠ 0', inv: 'x ≠ 0' },
// //     selfInverse: true,
// //   },
// //   exponential: {
// //     name: 'Exponential',
// //     glyph: 'M2,26 Q16,26 24,2',
// //     fn: x => Math.exp(x),
// //     invFn: x => (x > 0 ? Math.log(x) : NaN),
// //     eq: 'eˣ',
// //     invEq: 'ln(x)',
// //     restricted: false,
// //     domain: { f: 'all real x', inv: 'x > 0' },
// //   },
// //   logarithmic: {
// //     name: 'Logarithmic',
// //     glyph: 'M2,2 Q10,26 24,26',
// //     fn: x => (x > 0 ? Math.log(x) : NaN),
// //     invFn: x => Math.exp(x),
// //     eq: 'ln(x)',
// //     invEq: 'eˣ',
// //     restricted: false,
// //     domain: { f: 'x > 0', inv: 'all real x' },
// //   },

// //   quadratic: {
// //     name: 'Quadratic',
// //     glyph: 'M2,4 Q13,30 24,4',
// //     fn: x => x * x,
// //     invFn: x => (x >= 0 ? Math.sqrt(x) : NaN),
// //     eq: 'x²',
// //     invEq: '√x',
// //     restricted: true,
// //     branchFn: x => (x >= 0 ? x * x : NaN),
// //     domain: { f: 'restricted to x ≥ 0', inv: 'x ≥ 0' },
// //     restrictionNote:
// //       'The parabola fails the **horizontal line test** — every positive output corresponds to two inputs ' +
// //       '($x$ and $-x$). To make it invertible we keep only the right half, $x \\ge 0$. The inverse is then ' +
// //       'the principal square root $\\sqrt{x}$. The left half (faded) is the part we cut off.',
// //   },
// //   sqrt: {
// //     name: 'Square root',
// //     glyph: 'M2,24 Q4,8 24,4',
// //     fn: x => (x >= 0 ? Math.sqrt(x) : NaN),
// //     invFn: x => (x >= 0 ? x * x : NaN),
// //     eq: '√x',
// //     invEq: 'x²  (for x ≥ 0)',
// //     restricted: false,
// //     domain: { f: 'x ≥ 0', inv: 'x ≥ 0' },
// //   },
// //   absolute: {
// //     name: 'Absolute value',
// //     glyph: 'M2,4 L13,24 L24,4',
// //     fn: x => Math.abs(x),
// //     invFn: x => (x >= 0 ? x : NaN),
// //     eq: '|x|',
// //     invEq: 'x  (for x ≥ 0)',
// //     restricted: true,
// //     branchFn: x => (x >= 0 ? x : NaN),
// //     domain: { f: 'restricted to x ≥ 0', inv: 'x ≥ 0' },
// //     restrictionNote:
// //       'On its full domain $|x|$ is not invertible — both $+a$ and $-a$ map to the same value $a$. Restricting ' +
// //       'to $x \\ge 0$ makes it the identity on that half, so the inverse is also the identity on $[0, \\infty)$. ' +
// //       'The left half (faded) collapses onto the right half under $|x|$.',
// //   },
// //   sine: {
// //     name: 'Sine',
// //     group: 'Trigonometric',
// //     glyph: 'M2,14 Q7,2 12,14 Q17,26 22,14',
// //     fn: x => Math.sin(x),
// //     invFn: x => (x >= -1 && x <= 1 ? Math.asin(x) : NaN),
// //     eq: 'sin(x)',
// //     invEq: 'arcsin(x)',
// //     restricted: true,
// //     branchFn: x => (x >= -Math.PI / 2 && x <= Math.PI / 2 ? Math.sin(x) : NaN),
// //     domain: { f: 'restricted to [−π/2, π/2]', inv: '[−1, 1]' },
// //     restrictionNote:
// //       'Sine is periodic, so every output in $[-1, 1]$ is hit infinitely many times. The standard restriction ' +
// //       'is the **principal branch** $[-\\pi/2, \\pi/2]$, where sine is strictly increasing. The inverse is then ' +
// //       '$\\arcsin(x)$, defined on $[-1, 1]$ with values in $[-\\pi/2, \\pi/2]$.',
// //   },
// //   cosine: {
// //     name: 'Cosine',
// //     group: 'Trigonometric',
// //     glyph: 'M2,4 Q7,16 12,4 Q17,-8 22,4',
// //     fn: x => Math.cos(x),
// //     invFn: x => (x >= -1 && x <= 1 ? Math.acos(x) : NaN),
// //     eq: 'cos(x)',
// //     invEq: 'arccos(x)',
// //     restricted: true,
// //     branchFn: x => (x >= 0 && x <= Math.PI ? Math.cos(x) : NaN),
// //     domain: { f: 'restricted to [0, π]', inv: '[−1, 1]' },
// //     restrictionNote:
// //       'Cosine is also periodic. The standard restriction is $[0, \\pi]$, where cosine is strictly decreasing. ' +
// //       'The inverse is $\\arccos(x)$, defined on $[-1, 1]$ with values in $[0, \\pi]$.',
// //   },
// // };

// // const DEFAULT_FAMILIES = FAMILIES;


// // /* ================================================================
// //    PICKER ENTRIES (groups)
// //    ================================================================ */

// // function buildPickerEntries(families) {
// //   const out = [];
// //   let lastGroup;
// //   Object.entries(families).forEach(([key, f]) => {
// //     if (f.group && f.group !== lastGroup) {
// //       out.push({ type: 'header', label: f.group, key: `__hdr_${f.group}` });
// //       lastGroup = f.group;
// //     } else if (!f.group) {
// //       lastGroup = undefined;
// //     }
// //     out.push({ type: 'item', key, fam: f });
// //   });
// //   return out;
// // }


// // /* ================================================================
// //    GLYPH
// //    ================================================================ */

// // function FamilyGlyph({ d, active, darkMode }) {
// //   return (
// //     <svg width="22" height="22" viewBox="0 0 26 28" aria-hidden="true">
// //       <path d={d} fill="none"
// //             stroke={active ? COL.f : (darkMode ? '#64748b' : '#94a3b8')}
// //             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// //     </svg>
// //   );
// // }


// // /* ================================================================
// //    MAIN
// //    ================================================================ */

// // const IDENTITY_FN = x => x;

// // export default function FunctionInverse({
// //   initialFamily = 'quadratic',
// //   families = DEFAULT_FAMILIES,
// //   visualizerProps = {},
// //   infoPanelProps = {},
// //   darkMode = false,
// //   showPicker = true,
// //   showInfoPanel = true,
// //   maxWidth = '80vw',
// // }) {
// //   const familyKeys = Object.keys(families);
// //   const startKey = families[initialFamily] ? initialFamily : familyKeys[0];

// //   const [current, setCurrent] = useState(startKey);
// //   const [visible, setVisible] = useState({
// //     fFull: true,     // unrestricted f (only relevant when fam.restricted)
// //     f: true,         // f (or restricted branch when fam.restricted)
// //     inv: true,       // f⁻¹
// //     mirror: true,    // y = x
// //   });

// //   const fam = families[current] || families[familyKeys[0]];

// //   const functions = useMemo(() => {
// //     const out = [];
// //     out.push({
// //       fn: IDENTITY_FN,
// //       color: COL.mirror,
// //       label: 'y = x',
// //       formula: 'y = x',
// //       visible: visible.mirror,
// //       stroke: 1,
// //       pattern: [3, 4],
// //     });
// //     if (fam.restricted) {
// //       // Faded full f (so the user sees what was cut)
// //       out.push({
// //         fn: fam.fn,
// //         color: COL.fFaded,
// //         label: 'f (full)',
// //         formula: `f(x) = ${fam.eq}`,
// //         visible: visible.fFull,
// //         stroke: 1.25,
// //         pattern: [5, 4],
// //       });
// //       // Bold restricted branch — the part actually being inverted
// //       out.push({
// //         fn: fam.branchFn,
// //         color: COL.f,
// //         label: 'f (branch)',
// //         formula: `f(x) = ${fam.eq}  ·  ${fam.domain.f}`,
// //         visible: visible.f,
// //         stroke: 2.5,
// //       });
// //     } else {
// //       out.push({
// //         fn: fam.fn,
// //         color: COL.f,
// //         label: 'f',
// //         formula: `f(x) = ${fam.eq}`,
// //         visible: visible.f,
// //         stroke: 2.25,
// //       });
// //     }
// //     out.push({
// //       fn: fam.invFn,
// //       color: COL.inv,
// //       label: 'f⁻¹',
// //       formula: `f⁻¹(x) = ${fam.invEq}`,
// //       visible: visible.inv,
// //       stroke: 2.25,
// //     });
// //     return out;
// //   }, [fam, visible]);

// //   /* ---- Info panel ---- */
// //   const explanationContent = useMemo(() => {
// //     let body =
// //       `## ${fam.name}\n\n` +
// //       `- $f(x) = ${fam.eq}$ — domain: ${fam.domain.f}\n` +
// //       `- $f^{-1}(x) = ${fam.invEq}$ — domain: ${fam.domain.inv}\n\n`;

// //     if (fam.selfInverse) {
// //       body += `### Self-inverse\nThis function is its **own inverse**: $f(f(x)) = x$. Graphically, $f$ is symmetric about the line $y = x$ — its reflection is itself.\n\n`;
// //     }

// //     if (fam.restricted) {
// //       body += `### Why a restriction?\n${fam.restrictionNote}\n\n`;
// //     } else {
// //       body += `### One-to-one\nNo restriction needed — every output corresponds to exactly one input, so $f$ passes the **horizontal line test** on its full domain and has a global inverse.\n\n`;
// //     }

// //     body +=
// //       `### Check\nWithin the valid domain, the two functions undo each other:\n` +
// //       `$$f(f^{-1}(x)) = x \\quad \\text{and} \\quad f^{-1}(f(x)) = x$$`;
// //     return body;
// //   }, [fam]);

// //   const conceptsContent =
// //     '## How to read this\n\n' +
// //     'The inverse $f^{-1}$ is the **reflection of $f$ across the line $y = x$**. Every point $(a, b)$ on $f$ becomes $(b, a)$ on $f^{-1}$ — input and output swap.\n\n' +
// //     '### Horizontal line test\n' +
// //     'A function $f$ has an inverse **as a function** only if every horizontal line crosses its graph at most once. If a horizontal line hits $f$ twice, two different inputs share an output — the inverse would have to send one input to two values, which a function can\'t do.\n\n' +
// //     '### When the test fails\n' +
// //     'Functions that fail the test (parabolas, $|x|$, sine, cosine) can still be inverted on a **restricted domain**. Pick a piece where the function is strictly monotonic, and on that piece the inverse exists. The standard restrictions:\n' +
// //     '- $x^2 \\to \\sqrt{x}$ on $[0, \\infty)$\n' +
// //     '- $|x| \\to x$ on $[0, \\infty)$\n' +
// //     '- $\\sin x \\to \\arcsin x$ on $[-\\pi/2, \\pi/2]$\n' +
// //     '- $\\cos x \\to \\arccos x$ on $[0, \\pi]$\n\n' +
// //     '### The mirror identity\n' +
// //     'On the valid domain, $f \\circ f^{-1}$ and $f^{-1} \\circ f$ both collapse to the identity $y = x$. That\'s where the mirror line gets its meaning — it\'s the graph of the composition that always works.';

// //   const infoTabs = useMemo(() => ([
// //     { key: 'explanation', label: 'Explanation', order: 0, content: explanationContent },
// //     { key: 'concepts',    label: 'Concepts',    order: 10, content: conceptsContent },
// //   ]), [explanationContent]);

// //   /* ---- Styling (matches Composition / Transformations) ---- */
// //   const fontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
// //   const monoStack = 'ui-monospace, "SF Mono", Menlo, monospace';
// //   const panelShadow = '0 1px 3px rgba(15,23,42,0.05), 0 8px 24px rgba(15,23,42,0.05)';
// //   const card = {
// //     background: darkMode ? '#0f172a' : '#fff',
// //     border: `1px solid ${darkMode ? '#1e293b' : '#f1f5f9'}`,
// //     borderRadius: 12,
// //     boxShadow: panelShadow,
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

// //   const sectionTitle = {
// //     fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
// //     color: c.muted, fontWeight: 600, margin: '10px 8px 4px',
// //   };

// //   const mergedVisualizerProps = {
// //     defaultWidth: 880,
// //     defaultHeight: 600,
// //     ...visualizerProps,
// //   };

// //   const pickerEntries = buildPickerEntries(families);

// //   /* Legend chip: toggles one curve on/off. */
// //   const LegendChip = ({ k, label, formula, color, pattern }) => {
// //     const on = visible[k];
// //     return (
// //       <button
// //         onClick={() => setVisible(v => ({ ...v, [k]: !v[k] }))}
// //         style={{
// //           display: 'inline-flex', alignItems: 'center', gap: 8,
// //           padding: '6px 10px', borderRadius: 8,
// //           border: `1px solid ${on ? color : c.borderSoft}`,
// //           background: on
// //             ? (darkMode ? 'rgba(255,255,255,0.04)' : '#fff')
// //             : (darkMode ? '#0f172a' : c.softer),
// //           color: on ? c.ink : c.muted,
// //           opacity: on ? 1 : 0.6,
// //           cursor: 'pointer',
// //           fontFamily: 'inherit',
// //           fontSize: 12,
// //           transition: 'all 0.15s',
// //         }}
// //         title={on ? 'Click to hide' : 'Click to show'}
// //       >
// //         <svg width="22" height="6" aria-hidden="true">
// //           <line x1="0" y1="3" x2="22" y2="3"
// //                 stroke={color} strokeWidth="3"
// //                 strokeDasharray={pattern || undefined} />
// //         </svg>
// //         <span style={{ fontWeight: 600 }}>{label}</span>
// //         <span style={{ fontFamily: monoStack, fontSize: 11, color: on ? c.inkSoft : c.muted }}>
// //           {formula}
// //         </span>
// //       </button>
// //     );
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
// //         gap: 16,
// //         padding: '0 16px',
// //         alignItems: 'flex-start',
// //         boxSizing: 'border-box',
// //       }}>

// //         {showPicker && (
// //           <nav style={{ ...card, width: 220, padding: 10, flexShrink: 0 }}>
// //             <div style={{ ...sectionTitle, margin: '6px 8px 10px' }}>Function</div>
// //             {pickerEntries.map(e =>
// //               e.type === 'header'
// //                 ? <div key={e.key} style={sectionTitle}>{e.label}</div>
// //                 : (
// //                   <button
// //                     key={e.key}
// //                     style={famBtn(e.key === current)}
// //                     onClick={() => setCurrent(e.key)}
// //                   >
// //                     <FamilyGlyph d={e.fam.glyph} active={e.key === current} darkMode={darkMode} />
// //                     <span>{e.fam.name}</span>
// //                     {e.fam.restricted && (
// //                       <span style={{
// //                         marginLeft: 'auto',
// //                         fontSize: 9,
// //                         textTransform: 'uppercase',
// //                         letterSpacing: '0.04em',
// //                         color: c.muted,
// //                         background: c.softer,
// //                         padding: '2px 5px',
// //                         borderRadius: 3,
// //                         fontWeight: 600,
// //                       }}>R</span>
// //                     )}
// //                   </button>
// //                 )
// //             )}
// //             <div style={{
// //               marginTop: 12, padding: '8px 10px',
// //               borderTop: `1px solid ${c.borderSoft}`,
// //               fontSize: 10.5, color: c.muted, lineHeight: 1.5,
// //             }}>
// //               <strong style={{ color: c.inkSoft }}>R</strong> = needs a domain restriction to be invertible.
// //             </div>
// //           </nav>
// //         )}

// //         <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
// //           <div style={{ ...card, padding: 16 }}>

// //             <div style={{
// //               display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
// //               marginBottom: 12, flexWrap: 'wrap', gap: 8,
// //             }}>
// //               <span style={{ fontSize: 15, letterSpacing: '-0.01em', color: c.ink }}>
// //                 {fam.name}
// //                 {fam.restricted && (
// //                   <span style={{
// //                     marginLeft: 10,
// //                     fontSize: 11,
// //                     fontWeight: 500,
// //                     padding: '2px 8px',
// //                     borderRadius: 4,
// //                     background: darkMode ? '#1e293b' : '#fef3c7',
// //                     color: darkMode ? '#fbbf24' : '#92400e',
// //                     verticalAlign: 'middle',
// //                   }}>
// //                     domain restricted
// //                   </span>
// //                 )}
// //                 {fam.selfInverse && (
// //                   <span style={{
// //                     marginLeft: 10,
// //                     fontSize: 11,
// //                     fontWeight: 500,
// //                     padding: '2px 8px',
// //                     borderRadius: 4,
// //                     background: darkMode ? '#1e293b' : '#dcfce7',
// //                     color: darkMode ? '#86efac' : '#166534',
// //                     verticalAlign: 'middle',
// //                   }}>
// //                     self-inverse
// //                   </span>
// //                 )}
// //               </span>
// //               <span style={{
// //                 fontFamily: monoStack, fontSize: 12,
// //                 padding: '3px 8px', borderRadius: 5,
// //                 color: c.inkSoft, background: c.softer,
// //               }}>
// //                 f(x) = {fam.eq}  ·  f⁻¹(x) = {fam.invEq}
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

// //             <div style={{
// //               marginTop: 12, padding: '8px 10px',
// //               background: c.soft, border: `1px solid ${c.borderSoft}`,
// //               borderRadius: 8,
// //               display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center',
// //             }}>
// //               <span style={{
// //                 fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
// //                 color: c.muted, fontWeight: 600, marginRight: 4,
// //               }}>Show</span>

// //               {fam.restricted && (
// //                 <LegendChip
// //                   k="fFull"
// //                   label="f (full)"
// //                   formula={fam.eq}
// //                   color={COL.fFaded}
// //                   pattern="5,4"
// //                 />
// //               )}
// //               <LegendChip
// //                 k="f"
// //                 label={fam.restricted ? 'f (branch)' : 'f'}
// //                 formula={fam.eq}
// //                 color={COL.f}
// //               />
// //               <LegendChip
// //                 k="inv"
// //                 label="f⁻¹"
// //                 formula={fam.invEq}
// //                 color={COL.inv}
// //               />
// //               <LegendChip
// //                 k="mirror"
// //                 label="y = x"
// //                 formula="mirror"
// //                 color={COL.mirror}
// //                 pattern="3,4"
// //               />
// //             </div>
// //           </div>
// //         </div>

// //         {showInfoPanel && (
// //           <aside style={{ ...card, width: 360, padding: 16, flexShrink: 0 }}>
// //             <InfoPanel
// //               tabs={infoTabs}
// //               darkMode={darkMode}
// //               {...infoPanelProps}
// //             />
// //           </aside>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }



// /**
//  * FunctionInverse — v2
//  *
//  * Changes from v1:
//  *   - Added parameter sliders (a, k, b, h) that transform f, with the
//  *     inverse re-derived live so users see how f's parameters map to
//  *     f⁻¹'s parameters.
//  *
//  *     Forward:  g(x) = a · base(b · (x − h)) + k
//  *     Inverse:  g⁻¹(x) = h + baseInv((x − k) / a) / b
//  *
//  *     The "Parameters" tab in the InfoPanel spells out the
//  *     correspondence: a vertical scale on f becomes a horizontal
//  *     scale on f⁻¹, a vertical shift on f becomes a horizontal shift
//  *     on f⁻¹, and so on — exactly the swap of axes that "reflect
//  *     across y = x" implies.
//  *   - Sliders live in the left column under the family picker so they
//  *     stay above the fold (lesson from FunctionTransformations v2).
//  *   - "Applied" chip bar under the graph reads the current parameters
//  *     at a glance.
//  *   - Self-inverse pill is shown only when the base is self-inverse
//  *     AND parameters are at defaults (transforming a self-inverse
//  *     function generally breaks that property).
//  *
//  *  PROPS (all optional)
//  *    initialFamily   : string
//  *    families        : object        — override built-in FAMILIES
//  *    visualizerProps : object        — forwarded to VisualizerWithControls
//  *    infoPanelProps  : object        — forwarded to InfoPanel
//  *    darkMode        : boolean
//  *    showPicker      : boolean
//  *    showSliders     : boolean
//  *    showInfoPanel   : boolean
//  *    maxWidth        : string|number — wrapper cap; default '80vw'
//  */

// import React, { useState, useMemo } from 'react';
// import { VisualizerWithControls } from '../FunctionVisualizerCoreImproved';
// import InfoPanel from '../InfoPanel';


// /* ================================================================
//    COLORS
//    ================================================================ */

// const COL = {
//   fFaded: '#cbd5e1',
//   f:      '#3b82f6',
//   inv:    '#f59e0b',
//   mirror: '#94a3b8',
// };


// /* ================================================================
//    FORMATTING
//    ================================================================ */

// function fmt(v) {
//   const r = Math.round(v * 100) / 100;
//   return Math.abs(r - Math.round(r)) < 1e-4 ? String(Math.round(r)) : String(r);
// }


// /* ================================================================
//    PARAMETERS
//    ================================================================ */

// const PARAM_DEFS = {
//   a: { label: 'vertical scale a',     short: 'a', min: -3, max: 3, step: 0.05, def: 1 },
//   k: { label: 'vertical shift k',     short: 'k', min: -6, max: 6, step: 0.1,  def: 0 },
//   b: { label: 'horizontal scale b',   short: 'b', min: -3, max: 3, step: 0.05, def: 1 },
//   h: { label: 'horizontal shift h',   short: 'h', min: -6, max: 6, step: 0.1,  def: 0 },
// };

// const DEFAULT_PARAMS = { a: 1, k: 0, b: 1, h: 0 };


// /* ================================================================
//    FAMILIES
//    ================================================================
//    Each family declares:
//      - name, glyph, group?
//      - base(x)         : the unparameterized f
//      - baseInv(x)      : the unparameterized f⁻¹ (NaN outside its domain)
//      - baseBranch(x)   : present iff restricted — base restricted to the
//                          invertible branch
//      - eqBase, invEqBase    : pretty base strings ("x²", "√x")
//      - bodyOf(inner)        : how base reads when its input is `inner`
//      - invBodyOf(inner)     : how baseInv reads when its input is `inner`
//      - restricted      : boolean
//      - selfInverse     : boolean — true for bases satisfying base(base(x))=x
//      - restrictionNote : markdown explaining the cut (when restricted)
//      - domainBase      : { f, inv } human-readable domains of the BASE
//                          (informational; transformations may shift them)
// */

// export const FAMILIES = {
//   identity: {
//     name: 'Identity',
//     glyph: 'M2,22 L24,4',
//     base: x => x,
//     baseInv: x => x,
//     eqBase: 'x',
//     invEqBase: 'x',
//     bodyOf: i => i,
//     invBodyOf: i => i,
//     restricted: false,
//     selfInverse: true,
//     domainBase: { f: 'all real x', inv: 'all real x' },
//   },
//   linearScale: {
//     name: 'Linear (2x)',
//     glyph: 'M2,24 L24,2',
//     base: x => 2 * x,
//     baseInv: x => x / 2,
//     eqBase: '2x',
//     invEqBase: 'x/2',
//     bodyOf: i => `2·${i}`,
//     invBodyOf: i => `${i}/2`,
//     restricted: false,
//     selfInverse: false,
//     domainBase: { f: 'all real x', inv: 'all real x' },
//   },
//   cubic: {
//     name: 'Cubic',
//     glyph: 'M2,22 C8,2 16,30 24,8',
//     base: x => x * x * x,
//     baseInv: x => Math.cbrt(x),
//     eqBase: 'x³',
//     invEqBase: '∛x',
//     bodyOf: i => `(${i})³`,
//     invBodyOf: i => `∛(${i})`,
//     restricted: false,
//     selfInverse: false,
//     domainBase: { f: 'all real x', inv: 'all real x' },
//   },
//   reciprocal: {
//     name: 'Reciprocal',
//     glyph: 'M2,4 Q11,4 13,14 M15,14 Q17,26 24,26',
//     base: x => (x === 0 ? NaN : 1 / x),
//     baseInv: x => (x === 0 ? NaN : 1 / x),
//     eqBase: '1/x',
//     invEqBase: '1/x',
//     bodyOf: i => `1/(${i})`,
//     invBodyOf: i => `1/(${i})`,
//     restricted: false,
//     selfInverse: true,
//     domainBase: { f: 'x ≠ 0', inv: 'x ≠ 0' },
//   },
//   exponential: {
//     name: 'Exponential',
//     glyph: 'M2,26 Q16,26 24,2',
//     base: x => Math.exp(x),
//     baseInv: x => (x > 0 ? Math.log(x) : NaN),
//     eqBase: 'eˣ',
//     invEqBase: 'ln(x)',
//     bodyOf: i => `e^(${i})`,
//     invBodyOf: i => `ln(${i})`,
//     restricted: false,
//     selfInverse: false,
//     domainBase: { f: 'all real x', inv: 'x > 0' },
//   },
//   logarithmic: {
//     name: 'Logarithmic',
//     glyph: 'M2,2 Q10,26 24,26',
//     base: x => (x > 0 ? Math.log(x) : NaN),
//     baseInv: x => Math.exp(x),
//     eqBase: 'ln(x)',
//     invEqBase: 'eˣ',
//     bodyOf: i => `ln(${i})`,
//     invBodyOf: i => `e^(${i})`,
//     restricted: false,
//     selfInverse: false,
//     domainBase: { f: 'x > 0', inv: 'all real x' },
//   },
//   quadratic: {
//     name: 'Quadratic',
//     glyph: 'M2,4 Q13,30 24,4',
//     base: x => x * x,
//     baseInv: x => (x >= 0 ? Math.sqrt(x) : NaN),
//     baseBranch: x => (x >= 0 ? x * x : NaN),
//     eqBase: 'x²',
//     invEqBase: '√x',
//     bodyOf: i => `(${i})²`,
//     invBodyOf: i => `√(${i})`,
//     restricted: true,
//     selfInverse: false,
//     restrictionNote:
//       'The parabola fails the **horizontal line test** — every positive output corresponds to two inputs. ' +
//       'Restricting to the right half $x \\ge 0$ makes the inverse $\\sqrt{x}$. The left half (faded) is the part we cut off.',
//     domainBase: { f: 'restricted to x ≥ 0', inv: 'x ≥ 0' },
//   },
//   sqrt: {
//     name: 'Square root',
//     glyph: 'M2,24 Q4,8 24,4',
//     base: x => (x >= 0 ? Math.sqrt(x) : NaN),
//     baseInv: x => (x >= 0 ? x * x : NaN),
//     eqBase: '√x',
//     invEqBase: 'x²  (x ≥ 0)',
//     bodyOf: i => `√(${i})`,
//     invBodyOf: i => `(${i})²`,
//     restricted: false,
//     selfInverse: false,
//     domainBase: { f: 'x ≥ 0', inv: 'x ≥ 0' },
//   },
//   absolute: {
//     name: 'Absolute',
//     glyph: 'M2,4 L13,24 L24,4',
//     base: x => Math.abs(x),
//     baseInv: x => (x >= 0 ? x : NaN),
//     baseBranch: x => (x >= 0 ? x : NaN),
//     eqBase: '|x|',
//     invEqBase: 'x  (x ≥ 0)',
//     bodyOf: i => `|${i}|`,
//     invBodyOf: i => `${i}`,
//     restricted: true,
//     selfInverse: false,
//     restrictionNote:
//       'Both $+a$ and $-a$ map to the same value. Restricting to $x \\ge 0$ makes $|x|$ act as the identity on that half, ' +
//       'so the inverse is also the identity on $[0, \\infty)$.',
//     domainBase: { f: 'restricted to x ≥ 0', inv: 'x ≥ 0' },
//   },
//   sine: {
//     name: 'Sine',
//     group: 'Trigonometric',
//     glyph: 'M2,14 Q7,2 12,14 Q17,26 22,14',
//     base: x => Math.sin(x),
//     baseInv: x => (x >= -1 && x <= 1 ? Math.asin(x) : NaN),
//     baseBranch: x => (x >= -Math.PI / 2 && x <= Math.PI / 2 ? Math.sin(x) : NaN),
//     eqBase: 'sin(x)',
//     invEqBase: 'arcsin(x)',
//     bodyOf: i => `sin(${i})`,
//     invBodyOf: i => `arcsin(${i})`,
//     restricted: true,
//     selfInverse: false,
//     restrictionNote:
//       'Sine is periodic — every output in $[-1, 1]$ is hit infinitely often. The **principal branch** $[-\\pi/2, \\pi/2]$ ' +
//       'is the standard choice (sine is strictly increasing there). The inverse $\\arcsin(x)$ lives on $[-1, 1]$.',
//     domainBase: { f: 'restricted to [−π/2, π/2]', inv: '[−1, 1]' },
//   },
//   cosine: {
//     name: 'Cosine',
//     group: 'Trigonometric',
//     glyph: 'M2,4 Q7,16 12,4 Q17,-8 22,4',
//     base: x => Math.cos(x),
//     baseInv: x => (x >= -1 && x <= 1 ? Math.acos(x) : NaN),
//     baseBranch: x => (x >= 0 && x <= Math.PI ? Math.cos(x) : NaN),
//     eqBase: 'cos(x)',
//     invEqBase: 'arccos(x)',
//     bodyOf: i => `cos(${i})`,
//     invBodyOf: i => `arccos(${i})`,
//     restricted: true,
//     selfInverse: false,
//     restrictionNote:
//       'The principal branch is $[0, \\pi]$, where cosine is strictly decreasing. The inverse $\\arccos(x)$ lives on $[-1, 1]$.',
//     domainBase: { f: 'restricted to [0, π]', inv: '[−1, 1]' },
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

// function buildInverseEq(fam, p) {
//   const { a, b, h, k } = p;
//   // g⁻¹(x) = h + baseInv((x − k) / a) / b
//   let inner = 'x';
//   if (k !== 0) inner = `x ${k >= 0 ? '−' : '+'} ${fmt(Math.abs(k))}`;
//   if (a !== 1) inner = k !== 0 ? `(${inner})/${fmt(a)}` : `x/${fmt(a)}`;
//   let body = fam.invBodyOf(inner);
//   if (b !== 1) body = `(${body})/${fmt(b)}`;
//   if (h !== 0) body = `${fmt(h)} ${h >= 0 ? '+' : '−'} ${body.replace(/^−/, '')}`.replace(/\+\s*−/, '− ');
//   return body;
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

// const IDENTITY_FN = x => x;

// export default function FunctionInverse({
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
//   const [visible, setVisible] = useState({
//     fFull: true,
//     f: true,
//     inv: true,
//     mirror: true,
//   });

//   const fam = families[current] || families[familyKeys[0]];

//   const isAtDefaults = useMemo(
//     () => Object.keys(DEFAULT_PARAMS).every(k => params[k] === DEFAULT_PARAMS[k]),
//     [params]
//   );

//   /* Parameterized functions */
//   const forwardFn = useMemo(() => {
//     const { a, b, h, k } = params;
//     if (a === 0 || b === 0) return () => NaN;
//     return x => a * fam.base(b * (x - h)) + k;
//   }, [fam, params]);

//   const inverseFn = useMemo(() => {
//     const { a, b, h, k } = params;
//     if (a === 0 || b === 0) return () => NaN;
//     return x => {
//       const inner = fam.baseInv((x - k) / a);
//       if (!Number.isFinite(inner)) return NaN;
//       return h + inner / b;
//     };
//   }, [fam, params]);

//   const branchFn = useMemo(() => {
//     if (!fam.restricted || !fam.baseBranch) return null;
//     const { a, b, h, k } = params;
//     if (a === 0 || b === 0) return () => NaN;
//     return x => {
//       const inner = fam.baseBranch(b * (x - h));
//       if (!Number.isFinite(inner)) return NaN;
//       return a * inner + k;
//     };
//   }, [fam, params]);

//   const forwardEq = useMemo(() => buildForwardEq(fam, params), [fam, params]);
//   const inverseEq = useMemo(() => buildInverseEq(fam, params), [fam, params]);

//   /* Functions array fed to the visualizer */
//   const functions = useMemo(() => {
//     const out = [];
//     out.push({
//       fn: IDENTITY_FN,
//       color: COL.mirror,
//       label: 'y = x',
//       formula: 'y = x',
//       visible: visible.mirror,
//       stroke: 1,
//       pattern: [3, 4],
//     });
//     if (fam.restricted && branchFn) {
//       out.push({
//         fn: forwardFn,
//         color: COL.fFaded,
//         label: 'g (full)',
//         formula: `g(x) = ${forwardEq}`,
//         visible: visible.fFull,
//         stroke: 1.25,
//         pattern: [5, 4],
//       });
//       out.push({
//         fn: branchFn,
//         color: COL.f,
//         label: 'g (branch)',
//         formula: `g(x) = ${forwardEq}  ·  branch`,
//         visible: visible.f,
//         stroke: 2.5,
//       });
//     } else {
//       out.push({
//         fn: forwardFn,
//         color: COL.f,
//         label: 'g',
//         formula: `g(x) = ${forwardEq}`,
//         visible: visible.f,
//         stroke: 2.25,
//       });
//     }
//     out.push({
//       fn: inverseFn,
//       color: COL.inv,
//       label: 'g⁻¹',
//       formula: `g⁻¹(x) = ${inverseEq}`,
//       visible: visible.inv,
//       stroke: 2.25,
//     });
//     return out;
//   }, [fam, forwardFn, inverseFn, branchFn, forwardEq, inverseEq, visible]);

//   /* ---- Info panel content ---- */
//   const explanationContent = useMemo(() => {
//     const { a, b, h, k } = params;
//     let body =
//       `## ${fam.name}\n\n` +
//       `**Base** — $f(x) = ${fam.eqBase}$ · $f^{-1}(x) = ${fam.invEqBase}$\n\n` +
//       `**With parameters** — \n` +
//       `- $g(x) = ${forwardEq}$\n` +
//       `- $g^{-1}(x) = ${inverseEq}$\n\n`;

//     if (fam.selfInverse && isAtDefaults) {
//       body += `### Self-inverse base\nThe base $f$ is its own inverse, so at default parameters $g = g^{-1}$. Move any slider and that symmetry breaks — $g$ and $g^{-1}$ are still mirror images across $y = x$, just no longer the same curve.\n\n`;
//     }

//     if (fam.restricted) {
//       body += `### Domain restriction\n${fam.restrictionNote}\n\n` +
//               `The restriction also moves under the parameters: scaling and shifting $f$ shifts the boundary of the branch on the $x$-axis.\n\n`;
//     }

//     body +=
//       `### Check\nOn the valid domain:\n` +
//       `$$g(g^{-1}(x)) = x \\quad \\text{and} \\quad g^{-1}(g(x)) = x$$`;
//     return body;
//   }, [fam, params, forwardEq, inverseEq, isAtDefaults]);

//   const parametersContent = useMemo(() => {
//     const { a, b, h, k } = params;
//     const changed = [];
//     if (a !== 1) changed.push('a');
//     if (k !== 0) changed.push('k');
//     if (b !== 1) changed.push('b');
//     if (h !== 0) changed.push('h');

//     let body =
//       '## How parameters of f become parameters of f⁻¹\n\n' +
//       'The general rule comes from solving $y = a \\cdot f(b(x - h)) + k$ for $x$:\n\n' +
//       '$$g^{-1}(x) = h + \\frac{1}{b} \\cdot f^{-1}\\!\\left(\\frac{x - k}{a}\\right)$$\n\n' +
//       'Each transformation on $f$ has a **mirrored** counterpart on $f^{-1}$ — the axes swap, so the roles of vertical and horizontal swap:\n\n' +
//       '| On $f$ | becomes on $f^{-1}$ |\n' +
//       '|---|---|\n' +
//       '| vertical scale $a$ | horizontal scale $1/a$ |\n' +
//       '| vertical shift $k$ | horizontal shift $k$ |\n' +
//       '| horizontal scale $b$ | vertical scale $1/b$ |\n' +
//       '| horizontal shift $h$ | vertical shift $h$ |\n\n' +
//       '### Current parameters\n' +
//       `- $a = ${fmt(a)}$ — ${a !== 1 ? `f scaled vertically by ${fmt(a)}; in f⁻¹ the input gets divided by ${fmt(a)} (horizontal scale ${fmt(1/a)})` : 'unchanged'}\n` +
//       `- $k = ${fmt(k)}$ — ${k !== 0 ? `f shifted up by ${fmt(k)}; in f⁻¹ the input gets shifted by the same amount (horizontal shift of ${fmt(k)})` : 'unchanged'}\n` +
//       `- $b = ${fmt(b)}$ — ${b !== 1 ? `f input scaled by ${fmt(b)}; in f⁻¹ the output is divided by ${fmt(b)} (vertical scale ${fmt(1/b)})` : 'unchanged'}\n` +
//       `- $h = ${fmt(h)}$ — ${h !== 0 ? `f shifted right by ${fmt(h)}; in f⁻¹ the output is shifted up by ${fmt(h)}` : 'unchanged'}\n`;

//     if (changed.length === 0) {
//       body += '\n*All sliders are at defaults. Move one to see the rule in action.*';
//     }
//     return body;
//   }, [params]);

//   const conceptsContent =
//     '## How to read this\n\n' +
//     'The inverse $f^{-1}$ is the **reflection of $f$ across $y = x$**. Every point $(a, b)$ on $f$ becomes $(b, a)$ on $f^{-1}$ — input and output swap.\n\n' +
//     '### Horizontal line test\n' +
//     'A function has a single-valued inverse only if no horizontal line meets its graph more than once. If a line hits $f$ twice, two inputs share an output and the inverse would have to map one input to two values — impossible for a function.\n\n' +
//     '### Restricted branches\n' +
//     'Functions that fail the test can still be inverted on a piece where they are strictly monotonic:\n' +
//     '- $x^2$ on $[0, \\infty) \\to \\sqrt{x}$\n' +
//     '- $|x|$ on $[0, \\infty) \\to$ identity\n' +
//     '- $\\sin x$ on $[-\\pi/2, \\pi/2] \\to \\arcsin x$\n' +
//     '- $\\cos x$ on $[0, \\pi] \\to \\arccos x$\n\n' +
//     'When you transform $f$ with parameters, the restriction boundary moves too — the branch follows the transformation.\n\n' +
//     '### Mirror identity\n' +
//     'On the valid domain, $g \\circ g^{-1}$ and $g^{-1} \\circ g$ both collapse to the identity $y = x$. That\'s where the mirror line gets its meaning.';

//   const infoTabs = useMemo(() => ([
//     { key: 'explanation', label: 'Explanation', order: 0, content: explanationContent },
//     { key: 'parameters',  label: 'Parameters',  order: 5, content: parametersContent },
//     { key: 'concepts',    label: 'Concepts',    order: 10, content: conceptsContent },
//   ]), [explanationContent, parametersContent]);

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
//     defaultHeight: 600,
//     ...visualizerProps,
//   };

//   const pickerEntries = buildPickerEntries(families);

//   const selectFamily = (key) => {
//     setCurrent(key);
//     setParams({ ...DEFAULT_PARAMS });
//   };

//   const setParam = (k, v) => setParams(prev => ({ ...prev, [k]: v }));
//   const resetParams = () => setParams({ ...DEFAULT_PARAMS });

//   const LegendChip = ({ k, label, formula, color, pattern }) => {
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
//           <line x1="0" y1="3" x2="22" y2="3"
//                 stroke={color} strokeWidth="3"
//                 strokeDasharray={pattern || undefined} />
//         </svg>
//         <span style={{ fontWeight: 600 }}>{label}</span>
//         <span style={{ fontFamily: monoStack, fontSize: 11, color: on ? c.inkSoft : c.muted }}>
//           {formula}
//         </span>
//       </button>
//     );
//   };

//   const Chip = ({ k }) => {
//     const value = params[k];
//     const active = value !== PARAM_DEFS[k].def;
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
//         <span style={{ fontWeight: 600, color: active ? COL.f : c.muted }}>{k}</span>
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
//           <span style={{ fontFamily: monoStack, color: COL.f, fontWeight: 600 }}>
//             {fmt(params[key])}
//           </span>
//         </label>
//         <input
//           type="range" min={def.min} max={def.max} step={def.step}
//           value={params[key]}
//           onChange={e => setParam(key, parseFloat(e.target.value))}
//           style={{ width: '100%', accentColor: COL.f, cursor: 'pointer' }}
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
//                     {e.fam.restricted && (
//                       <span style={{
//                         marginLeft: 'auto',
//                         fontSize: 9,
//                         textTransform: 'uppercase',
//                         letterSpacing: '0.04em',
//                         color: c.muted,
//                         background: c.softer,
//                         padding: '2px 5px',
//                         borderRadius: 3,
//                         fontWeight: 600,
//                       }}>R</span>
//                     )}
//                   </button>
//                 )
//             )}
//             <div style={{
//               marginTop: 8, padding: '6px 10px',
//               borderTop: `1px solid ${c.borderSoft}`,
//               fontSize: 10.5, color: c.muted, lineHeight: 1.5,
//             }}>
//               <strong style={{ color: c.inkSoft }}>R</strong> = needs a domain restriction to be invertible.
//             </div>

//             {showSliders && (
//               <div style={{
//                 marginTop: 12,
//                 paddingTop: 12,
//                 borderTop: `1px solid ${c.borderSoft}`,
//               }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 4px 8px' }}>
//                   <div style={{
//                     fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
//                     color: c.muted, fontWeight: 600,
//                   }}>Parameters</div>
//                   <button onClick={resetParams} style={{
//                     background: darkMode ? '#0f172a' : '#fff',
//                     border: `1px solid ${c.border}`, color: c.inkSoft,
//                     padding: '3px 8px', borderRadius: 5,
//                     fontFamily: 'inherit', fontSize: 10.5, cursor: 'pointer',
//                   }}>Reset</button>
//                 </div>
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '0 4px' }}>
//                   {['a', 'k', 'b', 'h'].map(renderSlider)}
//                 </div>
//               </div>
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
//                 {fam.restricted && (
//                   <span style={{
//                     marginLeft: 10, fontSize: 11, fontWeight: 500,
//                     padding: '2px 8px', borderRadius: 4,
//                     background: darkMode ? '#1e293b' : '#fef3c7',
//                     color: darkMode ? '#fbbf24' : '#92400e',
//                     verticalAlign: 'middle',
//                   }}>domain restricted</span>
//                 )}
//                 {fam.selfInverse && isAtDefaults && (
//                   <span style={{
//                     marginLeft: 10, fontSize: 11, fontWeight: 500,
//                     padding: '2px 8px', borderRadius: 4,
//                     background: darkMode ? '#1e293b' : '#dcfce7',
//                     color: darkMode ? '#86efac' : '#166534',
//                     verticalAlign: 'middle',
//                   }}>self-inverse (at defaults)</span>
//                 )}
//               </span>
//               <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end' }}>
//                 <span style={{
//                   fontFamily: monoStack, fontSize: 11.5,
//                   padding: '3px 8px', borderRadius: 5,
//                   color: COL.f, background: c.softer,
//                   display: 'inline-flex', alignItems: 'center', gap: 6,
//                 }}>
//                   <span style={{ width: 8, height: 8, borderRadius: '50%', background: COL.f }} />
//                   g(x) = {forwardEq}
//                 </span>
//                 <span style={{
//                   fontFamily: monoStack, fontSize: 11.5,
//                   padding: '3px 8px', borderRadius: 5,
//                   color: COL.inv, background: darkMode ? '#1e293b' : '#fef3c7',
//                   display: 'inline-flex', alignItems: 'center', gap: 6,
//                 }}>
//                   <span style={{ width: 8, height: 8, borderRadius: '50%', background: COL.inv }} />
//                   g⁻¹(x) = {inverseEq}
//                 </span>
//               </div>
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
//             </div>

//             <div style={{
//               marginTop: 12, padding: '8px 10px',
//               background: c.soft, border: `1px solid ${c.borderSoft}`,
//               borderRadius: 8,
//               display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center',
//             }}>
//               <span style={{
//                 fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
//                 color: c.muted, fontWeight: 600, marginRight: 4,
//               }}>Show</span>

//               {fam.restricted && (
//                 <LegendChip
//                   k="fFull"
//                   label="g (full)"
//                   formula={forwardEq}
//                   color={COL.fFaded}
//                   pattern="5,4"
//                 />
//               )}
//               <LegendChip
//                 k="f"
//                 label={fam.restricted ? 'g (branch)' : 'g'}
//                 formula={forwardEq}
//                 color={COL.f}
//               />
//               <LegendChip
//                 k="inv"
//                 label="g⁻¹"
//                 formula={inverseEq}
//                 color={COL.inv}
//               />
//               <LegendChip
//                 k="mirror"
//                 label="y = x"
//                 formula="mirror"
//                 color={COL.mirror}
//                 pattern="3,4"
//               />
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



// /**
//  * FunctionInverse — v3
//  *
//  * Changes from v2:
//  *   - Fixed a markdown rendering bug in the Concepts tab: math
//  *     expressions ($...$) inside bold (**...**) don't render
//  *     correctly (the dollar signs leak through). Bold now wraps
//  *     only the concept word; the math sits outside.
//  *     RULE: never put $...$ inside **...**.
//  *   - Reduced graph default height 600 → 500 so the "Applied" and
//  *     "Show" chip strips below the canvas stay above the fold
//  *     instead of being scrolled off.
//  *
//  * Changes from v1:
//  *   - Added parameter sliders (a, k, b, h) that transform f, with the
//  *     inverse re-derived live so users see how f's parameters map to
//  *     f⁻¹'s parameters.
//  *
//  *     Forward:  g(x) = a · base(b · (x − h)) + k
//  *     Inverse:  g⁻¹(x) = h + baseInv((x − k) / a) / b
//  *
//  *     The "Parameters" tab in the InfoPanel spells out the
//  *     correspondence: a vertical scale on f becomes a horizontal
//  *     scale on f⁻¹, a vertical shift on f becomes a horizontal shift
//  *     on f⁻¹, and so on — exactly the swap of axes that "reflect
//  *     across y = x" implies.
//  *   - Sliders live in the left column under the family picker so they
//  *     stay above the fold (lesson from FunctionTransformations v2).
//  *   - "Applied" chip bar under the graph reads the current parameters
//  *     at a glance.
//  *   - Self-inverse pill is shown only when the base is self-inverse
//  *     AND parameters are at defaults (transforming a self-inverse
//  *     function generally breaks that property).
//  *
//  *  PROPS (all optional)
//  *    initialFamily   : string
//  *    families        : object        — override built-in FAMILIES
//  *    visualizerProps : object        — forwarded to VisualizerWithControls
//  *    infoPanelProps  : object        — forwarded to InfoPanel
//  *    darkMode        : boolean
//  *    showPicker      : boolean
//  *    showSliders     : boolean
//  *    showInfoPanel   : boolean
//  *    maxWidth        : string|number — wrapper cap; default '80vw'
//  */

// import React, { useState, useMemo } from 'react';
// import { VisualizerWithControls } from '../FunctionVisualizerCoreImproved';
// import InfoPanel from '../InfoPanel';


// /* ================================================================
//    COLORS
//    ================================================================ */

// const COL = {
//   fFaded: '#cbd5e1',
//   f:      '#3b82f6',
//   inv:    '#f59e0b',
//   mirror: '#94a3b8',
// };


// /* ================================================================
//    FORMATTING
//    ================================================================ */

// function fmt(v) {
//   const r = Math.round(v * 100) / 100;
//   return Math.abs(r - Math.round(r)) < 1e-4 ? String(Math.round(r)) : String(r);
// }


// /* ================================================================
//    PARAMETERS
//    ================================================================ */

// const PARAM_DEFS = {
//   a: { label: 'vertical scale a',     short: 'a', min: -3, max: 3, step: 0.05, def: 1 },
//   k: { label: 'vertical shift k',     short: 'k', min: -6, max: 6, step: 0.1,  def: 0 },
//   b: { label: 'horizontal scale b',   short: 'b', min: -3, max: 3, step: 0.05, def: 1 },
//   h: { label: 'horizontal shift h',   short: 'h', min: -6, max: 6, step: 0.1,  def: 0 },
// };

// const DEFAULT_PARAMS = { a: 1, k: 0, b: 1, h: 0 };


// /* ================================================================
//    FAMILIES
//    ================================================================
//    Each family declares:
//      - name, glyph, group?
//      - base(x)         : the unparameterized f
//      - baseInv(x)      : the unparameterized f⁻¹ (NaN outside its domain)
//      - baseBranch(x)   : present iff restricted — base restricted to the
//                          invertible branch
//      - eqBase, invEqBase    : pretty base strings ("x²", "√x")
//      - bodyOf(inner)        : how base reads when its input is `inner`
//      - invBodyOf(inner)     : how baseInv reads when its input is `inner`
//      - restricted      : boolean
//      - selfInverse     : boolean — true for bases satisfying base(base(x))=x
//      - restrictionNote : markdown explaining the cut (when restricted)
//      - domainBase      : { f, inv } human-readable domains of the BASE
//                          (informational; transformations may shift them)
// */

// export const FAMILIES = {
//   identity: {
//     name: 'Identity',
//     glyph: 'M2,22 L24,4',
//     base: x => x,
//     baseInv: x => x,
//     eqBase: 'x',
//     invEqBase: 'x',
//     bodyOf: i => i,
//     invBodyOf: i => i,
//     restricted: false,
//     selfInverse: true,
//     domainBase: { f: 'all real x', inv: 'all real x' },
//   },
//   linearScale: {
//     name: 'Linear (2x)',
//     glyph: 'M2,24 L24,2',
//     base: x => 2 * x,
//     baseInv: x => x / 2,
//     eqBase: '2x',
//     invEqBase: 'x/2',
//     bodyOf: i => `2·${i}`,
//     invBodyOf: i => `${i}/2`,
//     restricted: false,
//     selfInverse: false,
//     domainBase: { f: 'all real x', inv: 'all real x' },
//   },
//   cubic: {
//     name: 'Cubic',
//     glyph: 'M2,22 C8,2 16,30 24,8',
//     base: x => x * x * x,
//     baseInv: x => Math.cbrt(x),
//     eqBase: 'x³',
//     invEqBase: '∛x',
//     bodyOf: i => `(${i})³`,
//     invBodyOf: i => `∛(${i})`,
//     restricted: false,
//     selfInverse: false,
//     domainBase: { f: 'all real x', inv: 'all real x' },
//   },
//   reciprocal: {
//     name: 'Reciprocal',
//     glyph: 'M2,4 Q11,4 13,14 M15,14 Q17,26 24,26',
//     base: x => (x === 0 ? NaN : 1 / x),
//     baseInv: x => (x === 0 ? NaN : 1 / x),
//     eqBase: '1/x',
//     invEqBase: '1/x',
//     bodyOf: i => `1/(${i})`,
//     invBodyOf: i => `1/(${i})`,
//     restricted: false,
//     selfInverse: true,
//     domainBase: { f: 'x ≠ 0', inv: 'x ≠ 0' },
//   },
//   exponential: {
//     name: 'Exponential',
//     glyph: 'M2,26 Q16,26 24,2',
//     base: x => Math.exp(x),
//     baseInv: x => (x > 0 ? Math.log(x) : NaN),
//     eqBase: 'eˣ',
//     invEqBase: 'ln(x)',
//     bodyOf: i => `e^(${i})`,
//     invBodyOf: i => `ln(${i})`,
//     restricted: false,
//     selfInverse: false,
//     domainBase: { f: 'all real x', inv: 'x > 0' },
//   },
//   logarithmic: {
//     name: 'Logarithmic',
//     glyph: 'M2,2 Q10,26 24,26',
//     base: x => (x > 0 ? Math.log(x) : NaN),
//     baseInv: x => Math.exp(x),
//     eqBase: 'ln(x)',
//     invEqBase: 'eˣ',
//     bodyOf: i => `ln(${i})`,
//     invBodyOf: i => `e^(${i})`,
//     restricted: false,
//     selfInverse: false,
//     domainBase: { f: 'x > 0', inv: 'all real x' },
//   },
//   quadratic: {
//     name: 'Quadratic',
//     glyph: 'M2,4 Q13,30 24,4',
//     base: x => x * x,
//     baseInv: x => (x >= 0 ? Math.sqrt(x) : NaN),
//     baseBranch: x => (x >= 0 ? x * x : NaN),
//     eqBase: 'x²',
//     invEqBase: '√x',
//     bodyOf: i => `(${i})²`,
//     invBodyOf: i => `√(${i})`,
//     restricted: true,
//     selfInverse: false,
//     restrictionNote:
//       'The parabola fails the **horizontal line test** — every positive output corresponds to two inputs. ' +
//       'Restricting to the right half $x \\ge 0$ makes the inverse $\\sqrt{x}$. The left half (faded) is the part we cut off.',
//     domainBase: { f: 'restricted to x ≥ 0', inv: 'x ≥ 0' },
//   },
//   sqrt: {
//     name: 'Square root',
//     glyph: 'M2,24 Q4,8 24,4',
//     base: x => (x >= 0 ? Math.sqrt(x) : NaN),
//     baseInv: x => (x >= 0 ? x * x : NaN),
//     eqBase: '√x',
//     invEqBase: 'x²  (x ≥ 0)',
//     bodyOf: i => `√(${i})`,
//     invBodyOf: i => `(${i})²`,
//     restricted: false,
//     selfInverse: false,
//     domainBase: { f: 'x ≥ 0', inv: 'x ≥ 0' },
//   },
//   absolute: {
//     name: 'Absolute',
//     glyph: 'M2,4 L13,24 L24,4',
//     base: x => Math.abs(x),
//     baseInv: x => (x >= 0 ? x : NaN),
//     baseBranch: x => (x >= 0 ? x : NaN),
//     eqBase: '|x|',
//     invEqBase: 'x  (x ≥ 0)',
//     bodyOf: i => `|${i}|`,
//     invBodyOf: i => `${i}`,
//     restricted: true,
//     selfInverse: false,
//     restrictionNote:
//       'Both $+a$ and $-a$ map to the same value. Restricting to $x \\ge 0$ makes $|x|$ act as the identity on that half, ' +
//       'so the inverse is also the identity on $[0, \\infty)$.',
//     domainBase: { f: 'restricted to x ≥ 0', inv: 'x ≥ 0' },
//   },
//   sine: {
//     name: 'Sine',
//     group: 'Trigonometric',
//     glyph: 'M2,14 Q7,2 12,14 Q17,26 22,14',
//     base: x => Math.sin(x),
//     baseInv: x => (x >= -1 && x <= 1 ? Math.asin(x) : NaN),
//     baseBranch: x => (x >= -Math.PI / 2 && x <= Math.PI / 2 ? Math.sin(x) : NaN),
//     eqBase: 'sin(x)',
//     invEqBase: 'arcsin(x)',
//     bodyOf: i => `sin(${i})`,
//     invBodyOf: i => `arcsin(${i})`,
//     restricted: true,
//     selfInverse: false,
//     restrictionNote:
//       'Sine is periodic — every output in $[-1, 1]$ is hit infinitely often. The **principal branch** $[-\\pi/2, \\pi/2]$ ' +
//       'is the standard choice (sine is strictly increasing there). The inverse $\\arcsin(x)$ lives on $[-1, 1]$.',
//     domainBase: { f: 'restricted to [−π/2, π/2]', inv: '[−1, 1]' },
//   },
//   cosine: {
//     name: 'Cosine',
//     group: 'Trigonometric',
//     glyph: 'M2,4 Q7,16 12,4 Q17,-8 22,4',
//     base: x => Math.cos(x),
//     baseInv: x => (x >= -1 && x <= 1 ? Math.acos(x) : NaN),
//     baseBranch: x => (x >= 0 && x <= Math.PI ? Math.cos(x) : NaN),
//     eqBase: 'cos(x)',
//     invEqBase: 'arccos(x)',
//     bodyOf: i => `cos(${i})`,
//     invBodyOf: i => `arccos(${i})`,
//     restricted: true,
//     selfInverse: false,
//     restrictionNote:
//       'The principal branch is $[0, \\pi]$, where cosine is strictly decreasing. The inverse $\\arccos(x)$ lives on $[-1, 1]$.',
//     domainBase: { f: 'restricted to [0, π]', inv: '[−1, 1]' },
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

// function buildInverseEq(fam, p) {
//   const { a, b, h, k } = p;
//   // g⁻¹(x) = h + baseInv((x − k) / a) / b
//   let inner = 'x';
//   if (k !== 0) inner = `x ${k >= 0 ? '−' : '+'} ${fmt(Math.abs(k))}`;
//   if (a !== 1) inner = k !== 0 ? `(${inner})/${fmt(a)}` : `x/${fmt(a)}`;
//   let body = fam.invBodyOf(inner);
//   if (b !== 1) body = `(${body})/${fmt(b)}`;
//   if (h !== 0) body = `${fmt(h)} ${h >= 0 ? '+' : '−'} ${body.replace(/^−/, '')}`.replace(/\+\s*−/, '− ');
//   return body;
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

// const IDENTITY_FN = x => x;

// export default function FunctionInverse({
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
//   const [visible, setVisible] = useState({
//     fFull: true,
//     f: true,
//     inv: true,
//     mirror: true,
//   });

//   const fam = families[current] || families[familyKeys[0]];

//   const isAtDefaults = useMemo(
//     () => Object.keys(DEFAULT_PARAMS).every(k => params[k] === DEFAULT_PARAMS[k]),
//     [params]
//   );

//   /* Parameterized functions */
//   const forwardFn = useMemo(() => {
//     const { a, b, h, k } = params;
//     if (a === 0 || b === 0) return () => NaN;
//     return x => a * fam.base(b * (x - h)) + k;
//   }, [fam, params]);

//   const inverseFn = useMemo(() => {
//     const { a, b, h, k } = params;
//     if (a === 0 || b === 0) return () => NaN;
//     return x => {
//       const inner = fam.baseInv((x - k) / a);
//       if (!Number.isFinite(inner)) return NaN;
//       return h + inner / b;
//     };
//   }, [fam, params]);

//   const branchFn = useMemo(() => {
//     if (!fam.restricted || !fam.baseBranch) return null;
//     const { a, b, h, k } = params;
//     if (a === 0 || b === 0) return () => NaN;
//     return x => {
//       const inner = fam.baseBranch(b * (x - h));
//       if (!Number.isFinite(inner)) return NaN;
//       return a * inner + k;
//     };
//   }, [fam, params]);

//   const forwardEq = useMemo(() => buildForwardEq(fam, params), [fam, params]);
//   const inverseEq = useMemo(() => buildInverseEq(fam, params), [fam, params]);

//   /* Functions array fed to the visualizer */
//   const functions = useMemo(() => {
//     const out = [];
//     out.push({
//       fn: IDENTITY_FN,
//       color: COL.mirror,
//       label: 'y = x',
//       formula: 'y = x',
//       visible: visible.mirror,
//       stroke: 1,
//       pattern: [3, 4],
//     });
//     if (fam.restricted && branchFn) {
//       out.push({
//         fn: forwardFn,
//         color: COL.fFaded,
//         label: 'g (full)',
//         formula: `g(x) = ${forwardEq}`,
//         visible: visible.fFull,
//         stroke: 1.25,
//         pattern: [5, 4],
//       });
//       out.push({
//         fn: branchFn,
//         color: COL.f,
//         label: 'g (branch)',
//         formula: `g(x) = ${forwardEq}  ·  branch`,
//         visible: visible.f,
//         stroke: 2.5,
//       });
//     } else {
//       out.push({
//         fn: forwardFn,
//         color: COL.f,
//         label: 'g',
//         formula: `g(x) = ${forwardEq}`,
//         visible: visible.f,
//         stroke: 2.25,
//       });
//     }
//     out.push({
//       fn: inverseFn,
//       color: COL.inv,
//       label: 'g⁻¹',
//       formula: `g⁻¹(x) = ${inverseEq}`,
//       visible: visible.inv,
//       stroke: 2.25,
//     });
//     return out;
//   }, [fam, forwardFn, inverseFn, branchFn, forwardEq, inverseEq, visible]);

//   /* ---- Info panel content ---- */
//   const explanationContent = useMemo(() => {
//     const { a, b, h, k } = params;
//     let body =
//       `## ${fam.name}\n\n` +
//       `**Base** — $f(x) = ${fam.eqBase}$ · $f^{-1}(x) = ${fam.invEqBase}$\n\n` +
//       `**With parameters** — \n` +
//       `- $g(x) = ${forwardEq}$\n` +
//       `- $g^{-1}(x) = ${inverseEq}$\n\n`;

//     if (fam.selfInverse && isAtDefaults) {
//       body += `### Self-inverse base\nThe base $f$ is its own inverse, so at default parameters $g = g^{-1}$. Move any slider and that symmetry breaks — $g$ and $g^{-1}$ are still mirror images across $y = x$, just no longer the same curve.\n\n`;
//     }

//     if (fam.restricted) {
//       body += `### Domain restriction\n${fam.restrictionNote}\n\n` +
//               `The restriction also moves under the parameters: scaling and shifting $f$ shifts the boundary of the branch on the $x$-axis.\n\n`;
//     }

//     body +=
//       `### Check\nOn the valid domain:\n` +
//       `$$g(g^{-1}(x)) = x \\quad \\text{and} \\quad g^{-1}(g(x)) = x$$`;
//     return body;
//   }, [fam, params, forwardEq, inverseEq, isAtDefaults]);

//   const parametersContent = useMemo(() => {
//     const { a, b, h, k } = params;
//     const changed = [];
//     if (a !== 1) changed.push('a');
//     if (k !== 0) changed.push('k');
//     if (b !== 1) changed.push('b');
//     if (h !== 0) changed.push('h');

//     let body =
//       '## How parameters of f become parameters of f⁻¹\n\n' +
//       'The general rule comes from solving $y = a \\cdot f(b(x - h)) + k$ for $x$:\n\n' +
//       '$$g^{-1}(x) = h + \\frac{1}{b} \\cdot f^{-1}\\!\\left(\\frac{x - k}{a}\\right)$$\n\n' +
//       'Each transformation on $f$ has a **mirrored** counterpart on $f^{-1}$ — the axes swap, so the roles of vertical and horizontal swap:\n\n' +
//       '| On $f$ | becomes on $f^{-1}$ |\n' +
//       '|---|---|\n' +
//       '| vertical scale $a$ | horizontal scale $1/a$ |\n' +
//       '| vertical shift $k$ | horizontal shift $k$ |\n' +
//       '| horizontal scale $b$ | vertical scale $1/b$ |\n' +
//       '| horizontal shift $h$ | vertical shift $h$ |\n\n' +
//       '### Current parameters\n' +
//       `- $a = ${fmt(a)}$ — ${a !== 1 ? `f scaled vertically by ${fmt(a)}; in f⁻¹ the input gets divided by ${fmt(a)} (horizontal scale ${fmt(1/a)})` : 'unchanged'}\n` +
//       `- $k = ${fmt(k)}$ — ${k !== 0 ? `f shifted up by ${fmt(k)}; in f⁻¹ the input gets shifted by the same amount (horizontal shift of ${fmt(k)})` : 'unchanged'}\n` +
//       `- $b = ${fmt(b)}$ — ${b !== 1 ? `f input scaled by ${fmt(b)}; in f⁻¹ the output is divided by ${fmt(b)} (vertical scale ${fmt(1/b)})` : 'unchanged'}\n` +
//       `- $h = ${fmt(h)}$ — ${h !== 0 ? `f shifted right by ${fmt(h)}; in f⁻¹ the output is shifted up by ${fmt(h)}` : 'unchanged'}\n`;

//     if (changed.length === 0) {
//       body += '\n*All sliders are at defaults. Move one to see the rule in action.*';
//     }
//     return body;
//   }, [params]);

//   const conceptsContent =
//     '## How to read this\n\n' +
//     'The inverse $f^{-1}$ is the **reflection** of $f$ across the line $y = x$. Every point $(a, b)$ on $f$ becomes $(b, a)$ on $f^{-1}$ — input and output swap.\n\n' +
//     '### Horizontal line test\n' +
//     'A function has a single-valued inverse only if no horizontal line meets its graph more than once. If a line hits $f$ twice, two inputs share an output and the inverse would have to map one input to two values — impossible for a function.\n\n' +
//     '### Restricted branches\n' +
//     'Functions that fail the test can still be inverted on a piece where they are strictly monotonic:\n' +
//     '- $x^2$ on $[0, \\infty) \\to \\sqrt{x}$\n' +
//     '- $|x|$ on $[0, \\infty) \\to$ identity\n' +
//     '- $\\sin x$ on $[-\\pi/2, \\pi/2] \\to \\arcsin x$\n' +
//     '- $\\cos x$ on $[0, \\pi] \\to \\arccos x$\n\n' +
//     'When you transform $f$ with parameters, the restriction boundary moves too — the branch follows the transformation.\n\n' +
//     '### Mirror identity\n' +
//     'On the valid domain, $g \\circ g^{-1}$ and $g^{-1} \\circ g$ both collapse to the identity $y = x$. That\'s where the mirror line gets its meaning.';

//   const infoTabs = useMemo(() => ([
//     { key: 'explanation', label: 'Explanation', order: 0, content: explanationContent },
//     { key: 'parameters',  label: 'Parameters',  order: 5, content: parametersContent },
//     { key: 'concepts',    label: 'Concepts',    order: 10, content: conceptsContent },
//   ]), [explanationContent, parametersContent]);

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

//   const LegendChip = ({ k, label, formula, color, pattern }) => {
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
//           <line x1="0" y1="3" x2="22" y2="3"
//                 stroke={color} strokeWidth="3"
//                 strokeDasharray={pattern || undefined} />
//         </svg>
//         <span style={{ fontWeight: 600 }}>{label}</span>
//         <span style={{ fontFamily: monoStack, fontSize: 11, color: on ? c.inkSoft : c.muted }}>
//           {formula}
//         </span>
//       </button>
//     );
//   };

//   const Chip = ({ k }) => {
//     const value = params[k];
//     const active = value !== PARAM_DEFS[k].def;
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
//         <span style={{ fontWeight: 600, color: active ? COL.f : c.muted }}>{k}</span>
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
//           <span style={{ fontFamily: monoStack, color: COL.f, fontWeight: 600 }}>
//             {fmt(params[key])}
//           </span>
//         </label>
//         <input
//           type="range" min={def.min} max={def.max} step={def.step}
//           value={params[key]}
//           onChange={e => setParam(key, parseFloat(e.target.value))}
//           style={{ width: '100%', accentColor: COL.f, cursor: 'pointer' }}
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
//                     {e.fam.restricted && (
//                       <span style={{
//                         marginLeft: 'auto',
//                         fontSize: 9,
//                         textTransform: 'uppercase',
//                         letterSpacing: '0.04em',
//                         color: c.muted,
//                         background: c.softer,
//                         padding: '2px 5px',
//                         borderRadius: 3,
//                         fontWeight: 600,
//                       }}>R</span>
//                     )}
//                   </button>
//                 )
//             )}
//             <div style={{
//               marginTop: 8, padding: '6px 10px',
//               borderTop: `1px solid ${c.borderSoft}`,
//               fontSize: 10.5, color: c.muted, lineHeight: 1.5,
//             }}>
//               <strong style={{ color: c.inkSoft }}>R</strong> = needs a domain restriction to be invertible.
//             </div>

//             {showSliders && (
//               <div style={{
//                 marginTop: 12,
//                 paddingTop: 12,
//                 borderTop: `1px solid ${c.borderSoft}`,
//               }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 4px 8px' }}>
//                   <div style={{
//                     fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
//                     color: c.muted, fontWeight: 600,
//                   }}>Parameters</div>
//                   <button onClick={resetParams} style={{
//                     background: darkMode ? '#0f172a' : '#fff',
//                     border: `1px solid ${c.border}`, color: c.inkSoft,
//                     padding: '3px 8px', borderRadius: 5,
//                     fontFamily: 'inherit', fontSize: 10.5, cursor: 'pointer',
//                   }}>Reset</button>
//                 </div>
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '0 4px' }}>
//                   {['a', 'k', 'b', 'h'].map(renderSlider)}
//                 </div>
//               </div>
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
//                 {fam.restricted && (
//                   <span style={{
//                     marginLeft: 10, fontSize: 11, fontWeight: 500,
//                     padding: '2px 8px', borderRadius: 4,
//                     background: darkMode ? '#1e293b' : '#fef3c7',
//                     color: darkMode ? '#fbbf24' : '#92400e',
//                     verticalAlign: 'middle',
//                   }}>domain restricted</span>
//                 )}
//                 {fam.selfInverse && isAtDefaults && (
//                   <span style={{
//                     marginLeft: 10, fontSize: 11, fontWeight: 500,
//                     padding: '2px 8px', borderRadius: 4,
//                     background: darkMode ? '#1e293b' : '#dcfce7',
//                     color: darkMode ? '#86efac' : '#166534',
//                     verticalAlign: 'middle',
//                   }}>self-inverse (at defaults)</span>
//                 )}
//               </span>
//               <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end' }}>
//                 <span style={{
//                   fontFamily: monoStack, fontSize: 11.5,
//                   padding: '3px 8px', borderRadius: 5,
//                   color: COL.f, background: c.softer,
//                   display: 'inline-flex', alignItems: 'center', gap: 6,
//                 }}>
//                   <span style={{ width: 8, height: 8, borderRadius: '50%', background: COL.f }} />
//                   g(x) = {forwardEq}
//                 </span>
//                 <span style={{
//                   fontFamily: monoStack, fontSize: 11.5,
//                   padding: '3px 8px', borderRadius: 5,
//                   color: COL.inv, background: darkMode ? '#1e293b' : '#fef3c7',
//                   display: 'inline-flex', alignItems: 'center', gap: 6,
//                 }}>
//                   <span style={{ width: 8, height: 8, borderRadius: '50%', background: COL.inv }} />
//                   g⁻¹(x) = {inverseEq}
//                 </span>
//               </div>
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
//             </div>

//             <div style={{
//               marginTop: 12, padding: '8px 10px',
//               background: c.soft, border: `1px solid ${c.borderSoft}`,
//               borderRadius: 8,
//               display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center',
//             }}>
//               <span style={{
//                 fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
//                 color: c.muted, fontWeight: 600, marginRight: 4,
//               }}>Show</span>

//               {fam.restricted && (
//                 <LegendChip
//                   k="fFull"
//                   label="g (full)"
//                   formula={forwardEq}
//                   color={COL.fFaded}
//                   pattern="5,4"
//                 />
//               )}
//               <LegendChip
//                 k="f"
//                 label={fam.restricted ? 'g (branch)' : 'g'}
//                 formula={forwardEq}
//                 color={COL.f}
//               />
//               <LegendChip
//                 k="inv"
//                 label="g⁻¹"
//                 formula={inverseEq}
//                 color={COL.inv}
//               />
//               <LegendChip
//                 k="mirror"
//                 label="y = x"
//                 formula="mirror"
//                 color={COL.mirror}
//                 pattern="3,4"
//               />
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
 * FunctionInverse — v4
 *
 * Changes from v3:
 *   - FIX hydration mismatch caused by raw Unicode math symbols
 *     (√, ², ³, ∛, ˣ, ≥, etc.) being interpolated INTO $...$ math
 *     mode in the InfoPanel's explanationContent. KaTeX with
 *     strict:'warn' couldn't parse those characters in math mode,
 *     and the fallback rendered differently on the server vs the
 *     client, producing a "Text content does not match server-
 *     rendered HTML" warning and a full client re-render.
 *
 *     Each family now carries a parallel set of TeX strings used
 *     ONLY where the value ends up inside $...$:
 *
 *       eqBase     ↔ eqBaseTex      (e.g. 'x²'  ↔ 'x^2')
 *       invEqBase  ↔ invEqBaseTex   (e.g. '√x'  ↔ '\\sqrt{x}')
 *       bodyOf     ↔ bodyOfTex      (e.g. '(x)²' ↔ '(x)^2')
 *       invBodyOf  ↔ invBodyOfTex   (e.g. '√(x)' ↔ '\\sqrt{x}')
 *
 *     The non-Tex variants are unchanged and still drive the
 *     inline equation pills under the title (so users still see
 *     nicely-formatted Unicode there, not raw LaTeX).
 *
 *     A parallel pair `buildForwardEqTex` / `buildInverseEqTex`
 *     produces the TeX strings; they're memoized alongside the
 *     Unicode strings.
 *
 *   - No layout / behavior / styling changes. Pure data + plumbing.
 *
 * Changes from v2 (kept):
 *   - Markdown bug: never put $...$ inside **...**.
 *   - Graph default height 500 so chip strips stay above the fold.
 *
 * Changes from v1 (kept):
 *   - Parameter sliders (a, k, b, h) that transform f, with the
 *     inverse re-derived live so users see how f's parameters map to
 *     f⁻¹'s parameters.
 *
 *     Forward:  g(x) = a · base(b · (x − h)) + k
 *     Inverse:  g⁻¹(x) = h + baseInv((x − k) / a) / b
 *
 *  PROPS (all optional)
 *    initialFamily   : string
 *    families        : object        — override built-in FAMILIES
 *    visualizerProps : object        — forwarded to VisualizerWithControls
 *    infoPanelProps  : object        — forwarded to InfoPanel
 *    darkMode        : boolean
 *    showPicker      : boolean
 *    showSliders     : boolean
 *    showInfoPanel   : boolean
 *    maxWidth        : string|number — wrapper cap; default '80vw'
 */

import React, { useState, useMemo } from 'react';
import { VisualizerWithControls } from '../FunctionVisualizerCoreImproved';
import InfoPanel from '../InfoPanel';


/* ================================================================
   COLORS
   ================================================================ */

const COL = {
  fFaded: '#cbd5e1',
  f:      '#3b82f6',
  inv:    '#f59e0b',
  mirror: '#94a3b8',
};


/* ================================================================
   FORMATTING
   ================================================================ */

function fmt(v) {
  const r = Math.round(v * 100) / 100;
  return Math.abs(r - Math.round(r)) < 1e-4 ? String(Math.round(r)) : String(r);
}


/* ================================================================
   PARAMETERS
   ================================================================ */

const PARAM_DEFS = {
  a: { label: 'vertical scale a',     short: 'a', min: -3, max: 3, step: 0.05, def: 1 },
  k: { label: 'vertical shift k',     short: 'k', min: -6, max: 6, step: 0.1,  def: 0 },
  b: { label: 'horizontal scale b',   short: 'b', min: -3, max: 3, step: 0.05, def: 1 },
  h: { label: 'horizontal shift h',   short: 'h', min: -6, max: 6, step: 0.1,  def: 0 },
};

const DEFAULT_PARAMS = { a: 1, k: 0, b: 1, h: 0 };


/* ================================================================
   FAMILIES
   ================================================================
   Each family declares:
     - name, glyph, group?
     - base(x)         : the unparameterized f
     - baseInv(x)      : the unparameterized f⁻¹ (NaN outside its domain)
     - baseBranch(x)   : present iff restricted — base restricted to the
                         invertible branch
     - eqBase, invEqBase    : pretty base strings using Unicode for the
                              inline equation pills ("x²", "√x")
     - bodyOf, invBodyOf    : same, but applied to a given inner string
     - eqBaseTex, invEqBaseTex     : LaTeX versions for $...$ contexts
     - bodyOfTex, invBodyOfTex     : same, LaTeX
     - restricted      : boolean
     - selfInverse     : boolean — true for bases satisfying base(base(x))=x
     - restrictionNote : markdown explaining the cut (when restricted)
     - domainBase      : { f, inv } human-readable domains of the BASE
                         (informational; transformations may shift them)
*/

export const FAMILIES = {
  identity: {
    name: 'Identity',
    glyph: 'M2,22 L24,4',
    base: x => x,
    baseInv: x => x,
    eqBase: 'x',
    invEqBase: 'x',
    bodyOf: i => i,
    invBodyOf: i => i,
    eqBaseTex: 'x',
    invEqBaseTex: 'x',
    bodyOfTex: i => i,
    invBodyOfTex: i => i,
    restricted: false,
    selfInverse: true,
    domainBase: { f: 'all real x', inv: 'all real x' },
  },
  linearScale: {
    name: 'Linear (2x)',
    glyph: 'M2,24 L24,2',
    base: x => 2 * x,
    baseInv: x => x / 2,
    eqBase: '2x',
    invEqBase: 'x/2',
    bodyOf: i => `2·${i}`,
    invBodyOf: i => `${i}/2`,
    eqBaseTex: '2x',
    invEqBaseTex: 'x/2',
    bodyOfTex: i => `2 \\cdot ${i}`,
    invBodyOfTex: i => `${i}/2`,
    restricted: false,
    selfInverse: false,
    domainBase: { f: 'all real x', inv: 'all real x' },
  },
  cubic: {
    name: 'Cubic',
    glyph: 'M2,22 C8,2 16,30 24,8',
    base: x => x * x * x,
    baseInv: x => Math.cbrt(x),
    eqBase: 'x³',
    invEqBase: '∛x',
    bodyOf: i => `(${i})³`,
    invBodyOf: i => `∛(${i})`,
    eqBaseTex: 'x^3',
    invEqBaseTex: '\\sqrt[3]{x}',
    bodyOfTex: i => `(${i})^3`,
    invBodyOfTex: i => `\\sqrt[3]{${i}}`,
    restricted: false,
    selfInverse: false,
    domainBase: { f: 'all real x', inv: 'all real x' },
  },
  reciprocal: {
    name: 'Reciprocal',
    glyph: 'M2,4 Q11,4 13,14 M15,14 Q17,26 24,26',
    base: x => (x === 0 ? NaN : 1 / x),
    baseInv: x => (x === 0 ? NaN : 1 / x),
    eqBase: '1/x',
    invEqBase: '1/x',
    bodyOf: i => `1/(${i})`,
    invBodyOf: i => `1/(${i})`,
    eqBaseTex: '1/x',
    invEqBaseTex: '1/x',
    bodyOfTex: i => `1/(${i})`,
    invBodyOfTex: i => `1/(${i})`,
    restricted: false,
    selfInverse: true,
    domainBase: { f: 'x ≠ 0', inv: 'x ≠ 0' },
  },
  exponential: {
    name: 'Exponential',
    glyph: 'M2,26 Q16,26 24,2',
    base: x => Math.exp(x),
    baseInv: x => (x > 0 ? Math.log(x) : NaN),
    eqBase: 'eˣ',
    invEqBase: 'ln(x)',
    bodyOf: i => `e^(${i})`,
    invBodyOf: i => `ln(${i})`,
    eqBaseTex: 'e^{x}',
    invEqBaseTex: '\\ln(x)',
    bodyOfTex: i => `e^{${i}}`,
    invBodyOfTex: i => `\\ln(${i})`,
    restricted: false,
    selfInverse: false,
    domainBase: { f: 'all real x', inv: 'x > 0' },
  },
  logarithmic: {
    name: 'Logarithmic',
    glyph: 'M2,2 Q10,26 24,26',
    base: x => (x > 0 ? Math.log(x) : NaN),
    baseInv: x => Math.exp(x),
    eqBase: 'ln(x)',
    invEqBase: 'eˣ',
    bodyOf: i => `ln(${i})`,
    invBodyOf: i => `e^(${i})`,
    eqBaseTex: '\\ln(x)',
    invEqBaseTex: 'e^{x}',
    bodyOfTex: i => `\\ln(${i})`,
    invBodyOfTex: i => `e^{${i}}`,
    restricted: false,
    selfInverse: false,
    domainBase: { f: 'x > 0', inv: 'all real x' },
  },
  quadratic: {
    name: 'Quadratic',
    glyph: 'M2,4 Q13,30 24,4',
    base: x => x * x,
    baseInv: x => (x >= 0 ? Math.sqrt(x) : NaN),
    baseBranch: x => (x >= 0 ? x * x : NaN),
    eqBase: 'x²',
    invEqBase: '√x',
    bodyOf: i => `(${i})²`,
    invBodyOf: i => `√(${i})`,
    eqBaseTex: 'x^2',
    invEqBaseTex: '\\sqrt{x}',
    bodyOfTex: i => `(${i})^2`,
    invBodyOfTex: i => `\\sqrt{${i}}`,
    restricted: true,
    selfInverse: false,
    restrictionNote:
      'The parabola fails the **horizontal line test** — every positive output corresponds to two inputs. ' +
      'Restricting to the right half $x \\ge 0$ makes the inverse $\\sqrt{x}$. The left half (faded) is the part we cut off.',
    domainBase: { f: 'restricted to x ≥ 0', inv: 'x ≥ 0' },
  },
  sqrt: {
    name: 'Square root',
    glyph: 'M2,24 Q4,8 24,4',
    base: x => (x >= 0 ? Math.sqrt(x) : NaN),
    baseInv: x => (x >= 0 ? x * x : NaN),
    eqBase: '√x',
    invEqBase: 'x²  (x ≥ 0)',
    bodyOf: i => `√(${i})`,
    invBodyOf: i => `(${i})²`,
    eqBaseTex: '\\sqrt{x}',
    invEqBaseTex: 'x^2 \\quad (x \\ge 0)',
    bodyOfTex: i => `\\sqrt{${i}}`,
    invBodyOfTex: i => `(${i})^2`,
    restricted: false,
    selfInverse: false,
    domainBase: { f: 'x ≥ 0', inv: 'x ≥ 0' },
  },
  absolute: {
    name: 'Absolute',
    glyph: 'M2,4 L13,24 L24,4',
    base: x => Math.abs(x),
    baseInv: x => (x >= 0 ? x : NaN),
    baseBranch: x => (x >= 0 ? x : NaN),
    eqBase: '|x|',
    invEqBase: 'x  (x ≥ 0)',
    bodyOf: i => `|${i}|`,
    invBodyOf: i => `${i}`,
    eqBaseTex: '|x|',
    invEqBaseTex: 'x \\quad (x \\ge 0)',
    bodyOfTex: i => `|${i}|`,
    invBodyOfTex: i => `${i}`,
    restricted: true,
    selfInverse: false,
    restrictionNote:
      'Both $+a$ and $-a$ map to the same value. Restricting to $x \\ge 0$ makes $|x|$ act as the identity on that half, ' +
      'so the inverse is also the identity on $[0, \\infty)$.',
    domainBase: { f: 'restricted to x ≥ 0', inv: 'x ≥ 0' },
  },
  sine: {
    name: 'Sine',
    group: 'Trigonometric',
    glyph: 'M2,14 Q7,2 12,14 Q17,26 22,14',
    base: x => Math.sin(x),
    baseInv: x => (x >= -1 && x <= 1 ? Math.asin(x) : NaN),
    baseBranch: x => (x >= -Math.PI / 2 && x <= Math.PI / 2 ? Math.sin(x) : NaN),
    eqBase: 'sin(x)',
    invEqBase: 'arcsin(x)',
    bodyOf: i => `sin(${i})`,
    invBodyOf: i => `arcsin(${i})`,
    eqBaseTex: '\\sin(x)',
    invEqBaseTex: '\\arcsin(x)',
    bodyOfTex: i => `\\sin(${i})`,
    invBodyOfTex: i => `\\arcsin(${i})`,
    restricted: true,
    selfInverse: false,
    restrictionNote:
      'Sine is periodic — every output in $[-1, 1]$ is hit infinitely often. The **principal branch** $[-\\pi/2, \\pi/2]$ ' +
      'is the standard choice (sine is strictly increasing there). The inverse $\\arcsin(x)$ lives on $[-1, 1]$.',
    domainBase: { f: 'restricted to [−π/2, π/2]', inv: '[−1, 1]' },
  },
  cosine: {
    name: 'Cosine',
    group: 'Trigonometric',
    glyph: 'M2,4 Q7,16 12,4 Q17,-8 22,4',
    base: x => Math.cos(x),
    baseInv: x => (x >= -1 && x <= 1 ? Math.acos(x) : NaN),
    baseBranch: x => (x >= 0 && x <= Math.PI ? Math.cos(x) : NaN),
    eqBase: 'cos(x)',
    invEqBase: 'arccos(x)',
    bodyOf: i => `cos(${i})`,
    invBodyOf: i => `arccos(${i})`,
    eqBaseTex: '\\cos(x)',
    invEqBaseTex: '\\arccos(x)',
    bodyOfTex: i => `\\cos(${i})`,
    invBodyOfTex: i => `\\arccos(${i})`,
    restricted: true,
    selfInverse: false,
    restrictionNote:
      'The principal branch is $[0, \\pi]$, where cosine is strictly decreasing. The inverse $\\arccos(x)$ lives on $[-1, 1]$.',
    domainBase: { f: 'restricted to [0, π]', inv: '[−1, 1]' },
  },
};

const DEFAULT_FAMILIES = FAMILIES;


/* ================================================================
   EQUATION BUILDERS — Unicode (for inline pills)
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

function buildInverseEq(fam, p) {
  const { a, b, h, k } = p;
  // g⁻¹(x) = h + baseInv((x − k) / a) / b
  let inner = 'x';
  if (k !== 0) inner = `x ${k >= 0 ? '−' : '+'} ${fmt(Math.abs(k))}`;
  if (a !== 1) inner = k !== 0 ? `(${inner})/${fmt(a)}` : `x/${fmt(a)}`;
  let body = fam.invBodyOf(inner);
  if (b !== 1) body = `(${body})/${fmt(b)}`;
  if (h !== 0) body = `${fmt(h)} ${h >= 0 ? '+' : '−'} ${body.replace(/^−/, '')}`.replace(/\+\s*−/, '− ');
  return body;
}


/* ================================================================
   EQUATION BUILDERS — LaTeX (for $...$ math mode contexts)
   ================================================================
   Mirrors the Unicode builders 1:1 but uses ASCII '-' (renders as a
   proper minus in TeX math mode) and the family's *Tex variants. */

function buildForwardEqTex(fam, p) {
  const { a, b, h, k } = p;
  let inner = 'x';
  if (h !== 0) inner = `x ${h >= 0 ? '-' : '+'} ${fmt(Math.abs(h))}`;
  if (b !== 1) inner = h !== 0 ? `${fmt(b)}(${inner})` : `${fmt(b)}x`;
  let body = fam.bodyOfTex(inner);
  let out;
  if (a === -1) out = `-${body}`;
  else if (a !== 1) out = `${fmt(a)} \\cdot ${body}`;
  else out = body;
  if (k !== 0) out += ` ${k >= 0 ? '+' : '-'} ${fmt(Math.abs(k))}`;
  return out;
}

function buildInverseEqTex(fam, p) {
  const { a, b, h, k } = p;
  let inner = 'x';
  if (k !== 0) inner = `x ${k >= 0 ? '-' : '+'} ${fmt(Math.abs(k))}`;
  if (a !== 1) inner = k !== 0 ? `(${inner})/${fmt(a)}` : `x/${fmt(a)}`;
  let body = fam.invBodyOfTex(inner);
  if (b !== 1) body = `(${body})/${fmt(b)}`;
  if (h !== 0) body = `${fmt(h)} ${h >= 0 ? '+' : '-'} ${body.replace(/^-/, '')}`.replace(/\+\s*-/, '- ');
  return body;
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

const IDENTITY_FN = x => x;

export default function FunctionInverse({
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
  const [visible, setVisible] = useState({
    fFull: true,
    f: true,
    inv: true,
    mirror: true,
  });

  const fam = families[current] || families[familyKeys[0]];

  const isAtDefaults = useMemo(
    () => Object.keys(DEFAULT_PARAMS).every(k => params[k] === DEFAULT_PARAMS[k]),
    [params]
  );

  /* Parameterized functions */
  const forwardFn = useMemo(() => {
    const { a, b, h, k } = params;
    if (a === 0 || b === 0) return () => NaN;
    return x => a * fam.base(b * (x - h)) + k;
  }, [fam, params]);

  const inverseFn = useMemo(() => {
    const { a, b, h, k } = params;
    if (a === 0 || b === 0) return () => NaN;
    return x => {
      const inner = fam.baseInv((x - k) / a);
      if (!Number.isFinite(inner)) return NaN;
      return h + inner / b;
    };
  }, [fam, params]);

  const branchFn = useMemo(() => {
    if (!fam.restricted || !fam.baseBranch) return null;
    const { a, b, h, k } = params;
    if (a === 0 || b === 0) return () => NaN;
    return x => {
      const inner = fam.baseBranch(b * (x - h));
      if (!Number.isFinite(inner)) return NaN;
      return a * inner + k;
    };
  }, [fam, params]);

  const forwardEq = useMemo(() => buildForwardEq(fam, params), [fam, params]);
  const inverseEq = useMemo(() => buildInverseEq(fam, params), [fam, params]);
  const forwardEqTex = useMemo(() => buildForwardEqTex(fam, params), [fam, params]);
  const inverseEqTex = useMemo(() => buildInverseEqTex(fam, params), [fam, params]);

  /* Functions array fed to the visualizer */
  const functions = useMemo(() => {
    const out = [];
    out.push({
      fn: IDENTITY_FN,
      color: COL.mirror,
      label: 'y = x',
      formula: 'y = x',
      visible: visible.mirror,
      stroke: 1,
      pattern: [3, 4],
    });
    if (fam.restricted && branchFn) {
      out.push({
        fn: forwardFn,
        color: COL.fFaded,
        label: 'g (full)',
        formula: `g(x) = ${forwardEq}`,
        visible: visible.fFull,
        stroke: 1.25,
        pattern: [5, 4],
      });
      out.push({
        fn: branchFn,
        color: COL.f,
        label: 'g (branch)',
        formula: `g(x) = ${forwardEq}  ·  branch`,
        visible: visible.f,
        stroke: 2.5,
      });
    } else {
      out.push({
        fn: forwardFn,
        color: COL.f,
        label: 'g',
        formula: `g(x) = ${forwardEq}`,
        visible: visible.f,
        stroke: 2.25,
      });
    }
    out.push({
      fn: inverseFn,
      color: COL.inv,
      label: 'g⁻¹',
      formula: `g⁻¹(x) = ${inverseEq}`,
      visible: visible.inv,
      stroke: 2.25,
    });
    return out;
  }, [fam, forwardFn, inverseFn, branchFn, forwardEq, inverseEq, visible]);

  /* ---- Info panel content ---- */
  const explanationContent = useMemo(() => {
    let body =
      `## ${fam.name}\n\n` +
      `**Base** — $f(x) = ${fam.eqBaseTex}$ · $f^{-1}(x) = ${fam.invEqBaseTex}$\n\n` +
      `**With parameters** — \n` +
      `- $g(x) = ${forwardEqTex}$\n` +
      `- $g^{-1}(x) = ${inverseEqTex}$\n\n`;

    if (fam.selfInverse && isAtDefaults) {
      body += `### Self-inverse base\nThe base $f$ is its own inverse, so at default parameters $g = g^{-1}$. Move any slider and that symmetry breaks — $g$ and $g^{-1}$ are still mirror images across $y = x$, just no longer the same curve.\n\n`;
    }

    if (fam.restricted) {
      body += `### Domain restriction\n${fam.restrictionNote}\n\n` +
              `The restriction also moves under the parameters: scaling and shifting $f$ shifts the boundary of the branch on the $x$-axis.\n\n`;
    }

    body +=
      `### Check\nOn the valid domain:\n` +
      `$$g(g^{-1}(x)) = x \\quad \\text{and} \\quad g^{-1}(g(x)) = x$$`;
    return body;
  }, [fam, forwardEqTex, inverseEqTex, isAtDefaults]);

  const parametersContent = useMemo(() => {
    const { a, b, h, k } = params;
    const changed = [];
    if (a !== 1) changed.push('a');
    if (k !== 0) changed.push('k');
    if (b !== 1) changed.push('b');
    if (h !== 0) changed.push('h');

    let body =
      '## How parameters of f become parameters of f⁻¹\n\n' +
      'The general rule comes from solving $y = a \\cdot f(b(x - h)) + k$ for $x$:\n\n' +
      '$$g^{-1}(x) = h + \\frac{1}{b} \\cdot f^{-1}\\!\\left(\\frac{x - k}{a}\\right)$$\n\n' +
      'Each transformation on $f$ has a **mirrored** counterpart on $f^{-1}$ — the axes swap, so the roles of vertical and horizontal swap:\n\n' +
      '| On $f$ | becomes on $f^{-1}$ |\n' +
      '|---|---|\n' +
      '| vertical scale $a$ | horizontal scale $1/a$ |\n' +
      '| vertical shift $k$ | horizontal shift $k$ |\n' +
      '| horizontal scale $b$ | vertical scale $1/b$ |\n' +
      '| horizontal shift $h$ | vertical shift $h$ |\n\n' +
      '### Current parameters\n' +
      `- $a = ${fmt(a)}$ — ${a !== 1 ? `f scaled vertically by ${fmt(a)}; in f⁻¹ the input gets divided by ${fmt(a)} (horizontal scale ${fmt(1/a)})` : 'unchanged'}\n` +
      `- $k = ${fmt(k)}$ — ${k !== 0 ? `f shifted up by ${fmt(k)}; in f⁻¹ the input gets shifted by the same amount (horizontal shift of ${fmt(k)})` : 'unchanged'}\n` +
      `- $b = ${fmt(b)}$ — ${b !== 1 ? `f input scaled by ${fmt(b)}; in f⁻¹ the output is divided by ${fmt(b)} (vertical scale ${fmt(1/b)})` : 'unchanged'}\n` +
      `- $h = ${fmt(h)}$ — ${h !== 0 ? `f shifted right by ${fmt(h)}; in f⁻¹ the output is shifted up by ${fmt(h)}` : 'unchanged'}\n`;

    if (changed.length === 0) {
      body += '\n*All sliders are at defaults. Move one to see the rule in action.*';
    }
    return body;
  }, [params]);

  const conceptsContent =
    '## How to read this\n\n' +
    'The inverse $f^{-1}$ is the **reflection** of $f$ across the line $y = x$. Every point $(a, b)$ on $f$ becomes $(b, a)$ on $f^{-1}$ — input and output swap.\n\n' +
    '### Horizontal line test\n' +
    'A function has a single-valued inverse only if no horizontal line meets its graph more than once. If a line hits $f$ twice, two inputs share an output and the inverse would have to map one input to two values — impossible for a function.\n\n' +
    '### Restricted branches\n' +
    'Functions that fail the test can still be inverted on a piece where they are strictly monotonic:\n' +
    '- $x^2$ on $[0, \\infty) \\to \\sqrt{x}$\n' +
    '- $|x|$ on $[0, \\infty) \\to$ identity\n' +
    '- $\\sin x$ on $[-\\pi/2, \\pi/2] \\to \\arcsin x$\n' +
    '- $\\cos x$ on $[0, \\pi] \\to \\arccos x$\n\n' +
    'When you transform $f$ with parameters, the restriction boundary moves too — the branch follows the transformation.\n\n' +
    '### Mirror identity\n' +
    'On the valid domain, $g \\circ g^{-1}$ and $g^{-1} \\circ g$ both collapse to the identity $y = x$. That\'s where the mirror line gets its meaning.';

  const infoTabs = useMemo(() => ([
    { key: 'explanation', label: 'Explanation', order: 0, content: explanationContent },
    { key: 'parameters',  label: 'Parameters',  order: 5, content: parametersContent },
    { key: 'concepts',    label: 'Concepts',    order: 10, content: conceptsContent },
  ]), [explanationContent, parametersContent]);

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

  const LegendChip = ({ k, label, formula, color, pattern }) => {
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
          <line x1="0" y1="3" x2="22" y2="3"
                stroke={color} strokeWidth="3"
                strokeDasharray={pattern || undefined} />
        </svg>
        <span style={{ fontWeight: 600 }}>{label}</span>
        <span style={{ fontFamily: monoStack, fontSize: 11, color: on ? c.inkSoft : c.muted }}>
          {formula}
        </span>
      </button>
    );
  };

  const Chip = ({ k }) => {
    const value = params[k];
    const active = value !== PARAM_DEFS[k].def;
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
        <span style={{ fontWeight: 600, color: active ? COL.f : c.muted }}>{k}</span>
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
          <span style={{ fontFamily: monoStack, color: COL.f, fontWeight: 600 }}>
            {fmt(params[key])}
          </span>
        </label>
        <input
          type="range" min={def.min} max={def.max} step={def.step}
          value={params[key]}
          onChange={e => setParam(key, parseFloat(e.target.value))}
          style={{ width: '100%', accentColor: COL.f, cursor: 'pointer' }}
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
                    {e.fam.restricted && (
                      <span style={{
                        marginLeft: 'auto',
                        fontSize: 9,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        color: c.muted,
                        background: c.softer,
                        padding: '2px 5px',
                        borderRadius: 3,
                        fontWeight: 600,
                      }}>R</span>
                    )}
                  </button>
                )
            )}
            <div style={{
              marginTop: 8, padding: '6px 10px',
              borderTop: `1px solid ${c.borderSoft}`,
              fontSize: 10.5, color: c.muted, lineHeight: 1.5,
            }}>
              <strong style={{ color: c.inkSoft }}>R</strong> = needs a domain restriction to be invertible.
            </div>

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
                {fam.restricted && (
                  <span style={{
                    marginLeft: 10, fontSize: 11, fontWeight: 500,
                    padding: '2px 8px', borderRadius: 4,
                    background: darkMode ? '#1e293b' : '#fef3c7',
                    color: darkMode ? '#fbbf24' : '#92400e',
                    verticalAlign: 'middle',
                  }}>domain restricted</span>
                )}
                {fam.selfInverse && isAtDefaults && (
                  <span style={{
                    marginLeft: 10, fontSize: 11, fontWeight: 500,
                    padding: '2px 8px', borderRadius: 4,
                    background: darkMode ? '#1e293b' : '#dcfce7',
                    color: darkMode ? '#86efac' : '#166534',
                    verticalAlign: 'middle',
                  }}>self-inverse (at defaults)</span>
                )}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end' }}>
                <span style={{
                  fontFamily: monoStack, fontSize: 11.5,
                  padding: '3px 8px', borderRadius: 5,
                  color: COL.f, background: c.softer,
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: COL.f }} />
                  g(x) = {forwardEq}
                </span>
                <span style={{
                  fontFamily: monoStack, fontSize: 11.5,
                  padding: '3px 8px', borderRadius: 5,
                  color: COL.inv, background: darkMode ? '#1e293b' : '#fef3c7',
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: COL.inv }} />
                  g⁻¹(x) = {inverseEq}
                </span>
              </div>
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
            </div>

            <div style={{
              marginTop: 12, padding: '8px 10px',
              background: c.soft, border: `1px solid ${c.borderSoft}`,
              borderRadius: 8,
              display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center',
            }}>
              <span style={{
                fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
                color: c.muted, fontWeight: 600, marginRight: 4,
              }}>Show</span>

              {fam.restricted && (
                <LegendChip
                  k="fFull"
                  label="g (full)"
                  formula={forwardEq}
                  color={COL.fFaded}
                  pattern="5,4"
                />
              )}
              <LegendChip
                k="f"
                label={fam.restricted ? 'g (branch)' : 'g'}
                formula={forwardEq}
                color={COL.f}
              />
              <LegendChip
                k="inv"
                label="g⁻¹"
                formula={inverseEq}
                color={COL.inv}
              />
              <LegendChip
                k="mirror"
                label="y = x"
                formula="mirror"
                color={COL.mirror}
                pattern="3,4"
              />
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