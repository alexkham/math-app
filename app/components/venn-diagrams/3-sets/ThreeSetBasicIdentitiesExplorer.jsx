// 'use client';

// // ============================================================================
// // THREE-SET IDENTITIES EXPLORER — uses VennCoreEnhanced (auto-detects 3 sets)
// // ============================================================================

// import React, { useState, useMemo, useEffect } from 'react';
// import { VennCoreEnhanced, ExplanationsPanel } from './VennCoreEnhanced';

// const CIRCLE_STROKE = '#1e293b';
// const STROKE_W = 1;

// // ----------------------------------------------------------------------------
// // Geometry — symmetric three-circle Venn
// // ----------------------------------------------------------------------------

// const TRI_CX = 260, TRI_CY = 215, TRI_R = 90, TRI_OFF = 58;
// const place3 = (a) => ({
//   cx: TRI_CX + TRI_OFF * Math.cos(a),
//   cy: TRI_CY - TRI_OFF * Math.sin(a)
// });

// const STD_THREE_CIRCLES = {
//   A: { ...place3(Math.PI / 2),                   r: TRI_R, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W,
//        labelPosition: { x: TRI_CX,                   y: TRI_CY - TRI_OFF - TRI_R - 14 } },
//   B: { ...place3(Math.PI / 2 + 2 * Math.PI / 3), r: TRI_R, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W,
//        labelPosition: { x: TRI_CX - TRI_OFF - TRI_R + 10, y: TRI_CY + TRI_OFF + TRI_R + 4 } },
//   C: { ...place3(Math.PI / 2 - 2 * Math.PI / 3), r: TRI_R, label: 'C', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W,
//        labelPosition: { x: TRI_CX + TRI_OFF + TRI_R - 10, y: TRI_CY + TRI_OFF + TRI_R + 4 } }
// };

// // ----------------------------------------------------------------------------
// // Highlight aliases (3-set region keys)
// // ----------------------------------------------------------------------------

// const ALL_3     = ['A', 'B', 'C', 'A∩B', 'A∩C', 'B∩C', 'A∩B∩C'];
// const SET_A_3   = ['A', 'A∩B', 'A∩C', 'A∩B∩C'];
// const SET_B_3   = ['B', 'A∩B', 'B∩C', 'A∩B∩C'];
// const SET_C_3   = ['C', 'A∩C', 'B∩C', 'A∩B∩C'];
// const NOT_A_3   = ['outside', 'B', 'C', 'B∩C'];
// const NOT_B_3   = ['outside', 'A', 'C', 'A∩C'];
// const NOT_C_3   = ['outside', 'A', 'B', 'A∩B'];
// const AB_FULL_3 = ['A∩B', 'A∩B∩C'];
// const AC_FULL_3 = ['A∩C', 'A∩B∩C'];
// const BC_FULL_3 = ['B∩C', 'A∩B∩C'];

// // ----------------------------------------------------------------------------
// // Data
// // ----------------------------------------------------------------------------

// export const threeSetIdentitiesData = {
//   frame: {
//     title: 'Three-Set Identities',
//     subtitle: 'Regions of interest in three-set algebra'
//   },
//   defaults: {
//     width: 520, height: 440, margin: 12,
//     backgroundColor: '#ffffff',
//     universe: { label: 'U', labelPosition: { x: 30, y: 32 }, stroke: '#cbd5e1', strokeWidth: 1, labelFontSize: 18, labelColor: '#64748b' },
//     circles: STD_THREE_CIRCLES
//   },
//   theme: { color: '#2563eb', opacity: 0.85, neutralFill: '#ffffff', outsideNeutralFill: '#ffffff' },
//   scenarios: [
//     // Basic Sets
//     { id: 'set-a',    group: 'Basic Sets', name: 'Set A', symbol: 'A', definition: 'The set A.', example: 'A = {1,2,3}', highlight: SET_A_3 },
//     { id: 'set-b',    group: 'Basic Sets', name: 'Set B', symbol: 'B', definition: 'The set B.', example: 'B = {2,3,4}', highlight: SET_B_3 },
//     { id: 'set-c',    group: 'Basic Sets', name: 'Set C', symbol: 'C', definition: 'The set C.', example: 'C = {3,4,5}', highlight: SET_C_3 },
//     { id: 'universe', group: 'Basic Sets', name: 'Universal Set', symbol: 'U', definition: 'Every element under consideration.', highlight: ['outside', ...ALL_3] },
//     { id: 'empty',    group: 'Basic Sets', name: 'Empty Set', symbol: '∅', definition: 'The set with no elements.', highlight: [] },

//     // Complements
//     { id: 'a-comp', group: 'Complements', name: 'Complement of A', symbol: "A'", definition: 'Everything in U not in A.', highlight: NOT_A_3 },
//     { id: 'b-comp', group: 'Complements', name: 'Complement of B', symbol: "B'", definition: 'Everything in U not in B.', highlight: NOT_B_3 },
//     { id: 'c-comp', group: 'Complements', name: 'Complement of C', symbol: "C'", definition: 'Everything in U not in C.', highlight: NOT_C_3 },

//     // Intersection & Union
//     { id: 'inter-abc',  group: 'Intersection & Union', name: 'Triple Intersection', symbol: 'A ∩ B ∩ C', definition: 'Elements in all three sets.', example: 'A = {1,2,3}, B = {2,3,4}, C = {3,4,5} ⇒ {3}', highlight: ['A∩B∩C'] },
//     { id: 'inter-ab',   group: 'Intersection & Union', name: 'A intersect B', symbol: 'A ∩ B', definition: 'All elements in both A and B (regardless of C).', highlight: AB_FULL_3 },
//     { id: 'inter-ac',   group: 'Intersection & Union', name: 'A intersect C', symbol: 'A ∩ C', definition: 'All elements in both A and C (regardless of B).', highlight: AC_FULL_3 },
//     { id: 'inter-bc',   group: 'Intersection & Union', name: 'B intersect C', symbol: 'B ∩ C', definition: 'All elements in both B and C (regardless of A).', highlight: BC_FULL_3 },
//     { id: 'union-abc',  group: 'Intersection & Union', name: 'Triple Union', symbol: 'A ∪ B ∪ C', definition: 'Elements in at least one of A, B, C.', highlight: ALL_3 },
//     { id: 'union-ab',   group: 'Intersection & Union', name: 'A union B', symbol: 'A ∪ B', definition: 'Elements in A or B.', highlight: ['A', 'B', 'A∩B', 'A∩C', 'B∩C', 'A∩B∩C'] },
//     { id: 'union-ac',   group: 'Intersection & Union', name: 'A union C', symbol: 'A ∪ C', definition: 'Elements in A or C.', highlight: ['A', 'C', 'A∩B', 'A∩C', 'B∩C', 'A∩B∩C'] },
//     { id: 'union-bc',   group: 'Intersection & Union', name: 'B union C', symbol: 'B ∪ C', definition: 'Elements in B or C.', highlight: ['B', 'C', 'A∩B', 'A∩C', 'B∩C', 'A∩B∩C'] },

//     // Differences
//     { id: 'a-minus-b',    group: 'Differences', name: 'A minus B',  symbol: 'A \\ B', definition: 'In A but not in B.', highlight: ['A', 'A∩C'] },
//     { id: 'a-minus-c',    group: 'Differences', name: 'A minus C',  symbol: 'A \\ C', definition: 'In A but not in C.', highlight: ['A', 'A∩B'] },
//     { id: 'b-minus-a',    group: 'Differences', name: 'B minus A',  symbol: 'B \\ A', definition: 'In B but not in A.', highlight: ['B', 'B∩C'] },
//     { id: 'b-minus-c',    group: 'Differences', name: 'B minus C',  symbol: 'B \\ C', definition: 'In B but not in C.', highlight: ['B', 'A∩B'] },
//     { id: 'c-minus-a',    group: 'Differences', name: 'C minus A',  symbol: 'C \\ A', definition: 'In C but not in A.', highlight: ['C', 'B∩C'] },
//     { id: 'c-minus-b',    group: 'Differences', name: 'C minus B',  symbol: 'C \\ B', definition: 'In C but not in B.', highlight: ['C', 'A∩C'] },
//     { id: 'a-only-only',  group: 'Differences', name: 'A minus (B ∪ C)', symbol: 'A \\ (B ∪ C)', definition: 'In A only.', highlight: ['A'] },
//     { id: 'b-only-only',  group: 'Differences', name: 'B minus (A ∪ C)', symbol: 'B \\ (A ∪ C)', definition: 'In B only.', highlight: ['B'] },
//     { id: 'c-only-only',  group: 'Differences', name: 'C minus (A ∪ B)', symbol: 'C \\ (A ∪ B)', definition: 'In C only.', highlight: ['C'] },
//     { id: 'ab-minus-c',   group: 'Differences', name: '(A ∪ B) minus C', symbol: '(A ∪ B) \\ C', definition: 'In A or B but not in C.', highlight: ['A', 'B', 'A∩B'] },
//     { id: 'symdiff-ab',   group: 'Differences', name: 'A △ B', symbol: 'A △ B', definition: 'In exactly one of A or B (regardless of C).', highlight: ['A', 'A∩C', 'B', 'B∩C'] },
//     { id: 'symdiff-abc',  group: 'Differences', name: 'A △ B △ C', symbol: 'A △ B △ C', definition: 'In an odd number of A, B, C.', highlight: ['A', 'B', 'C', 'A∩B∩C'] },

//     // Compound
//     { id: 'ab-not-c',    group: 'Compound', name: 'A and B but not C', symbol: "A ∩ B ∩ C'", definition: 'In A and B but not in C.', highlight: ['A∩B'] },
//     { id: 'ac-not-b',    group: 'Compound', name: 'A and C but not B', symbol: "A ∩ B' ∩ C", definition: 'In A and C but not in B.', highlight: ['A∩C'] },
//     { id: 'bc-not-a',    group: 'Compound', name: 'B and C but not A', symbol: "A' ∩ B ∩ C", definition: 'In B and C but not in A.', highlight: ['B∩C'] },
//     { id: 'a-and-bORc',  group: 'Compound', name: 'A and (B or C)',    symbol: 'A ∩ (B ∪ C)', definition: 'In A and at least one of B or C.', highlight: ['A∩B', 'A∩C', 'A∩B∩C'] },
//     { id: 'aORb-and-c',  group: 'Compound', name: '(A or B) and C',    symbol: '(A ∪ B) ∩ C', definition: 'In C and at least one of A or B.', highlight: ['A∩C', 'B∩C', 'A∩B∩C'] },
//     { id: 'a-or-bANDc',  group: 'Compound', name: 'A or (B and C)',    symbol: 'A ∪ (B ∩ C)', definition: 'In A or in both B and C.', highlight: ['A', 'A∩B', 'A∩C', 'A∩B∩C', 'B∩C'] },
//     { id: 'exactly-one', group: 'Compound', name: 'Exactly one of A, B, C', symbol: 'exactly one', definition: 'In exactly one of A, B, C.', highlight: ['A', 'B', 'C'] },
//     { id: 'exactly-two', group: 'Compound', name: 'Exactly two of A, B, C', symbol: 'exactly two', definition: 'In exactly two of A, B, C.', highlight: ['A∩B', 'A∩C', 'B∩C'] },
//     { id: 'at-least-two', group: 'Compound', name: 'At least two of A, B, C', symbol: '≥ two', definition: 'In two or three of A, B, C.', highlight: ['A∩B', 'A∩C', 'B∩C', 'A∩B∩C'] },
//     { id: 'at-most-one', group: 'Compound', name: 'At most one of A, B, C', symbol: '≤ one', definition: 'In none or exactly one of A, B, C.', highlight: ['outside', 'A', 'B', 'C'] },

//     // De Morgan's
//     { id: 'dm-union', group: "De Morgan's Laws", name: 'Complement of Triple Union',        symbol: "(A ∪ B ∪ C)'", definition: 'Outside all three sets.', highlight: ['outside'] },
//     { id: 'dm-inter', group: "De Morgan's Laws", name: 'Complement of Triple Intersection', symbol: "(A ∩ B ∩ C)'", definition: 'Everything except the triple intersection.', highlight: ['outside', 'A', 'B', 'C', 'A∩B', 'A∩C', 'B∩C'] }
//   ]
// };

// const GROUP_ORDER = ['Basic Sets', 'Complements', 'Intersection & Union', 'Differences', 'Compound', "De Morgan's Laws"];

// // ----------------------------------------------------------------------------
// // Injected CSS
// // ----------------------------------------------------------------------------

// const CSS_ID = 'three-set-identities-explorer-css';
// const CSS = `
// .tsie-tab {
//   padding: 7px 12px;
//   font-size: 12px;
//   font-weight: 600;
//   color: #64748b;
//   background: transparent;
//   border: none;
//   border-bottom: 2px solid transparent;
//   margin-bottom: -2px;
//   cursor: pointer;
//   white-space: nowrap;
//   flex-shrink: 0;
//   outline: none;
// }
// .tsie-tab:hover { color: #334155; }
// .tsie-tab:focus, .tsie-tab:focus-visible { outline: none; }
// .tsie-tab.active,
// .tsie-tab.active:hover,
// .tsie-tab.active:focus,
// .tsie-tab.active:focus-visible {
//   color: #245de1;
//   border-bottom-color: #245de1;
// }

// .tsie-btn {
//   padding: 6px 10px;
//   font-size: 12px;
//   font-weight: 600;
//   color: #64748b;
//   background-color: #f1f5f9;
//   border: 2px solid transparent;
//   border-radius: 6px;
//   cursor: pointer;
//   font-family: 'Cambria Math', 'Times New Roman', serif;
//   white-space: nowrap;
//   outline: none;
// }
// .tsie-btn:hover {
//   color: #334155;
//   background-color: #e2e8f0;
//   border-color: transparent;
// }
// .tsie-btn:focus, .tsie-btn:focus-visible {
//   outline: none;
//   border-color: transparent;
// }
// .tsie-btn.active,
// .tsie-btn.active:hover,
// .tsie-btn.active:focus,
// .tsie-btn.active:focus-visible {
//   color: #245de1;
//   background-color: #e8effd;
//   border-color: #245de1;
// }

// .tsie-tabs-strip { scrollbar-width: none; -ms-overflow-style: none; }
// .tsie-tabs-strip::-webkit-scrollbar { display: none; width: 0; height: 0; }
// `;

// function useInjectCss() {
//   useEffect(() => {
//     if (typeof document === 'undefined') return;
//     if (document.getElementById(CSS_ID)) return;
//     const el = document.createElement('style');
//     el.id = CSS_ID;
//     el.textContent = CSS;
//     document.head.appendChild(el);
//   }, []);
// }

// // ----------------------------------------------------------------------------
// // Explorer
// // ----------------------------------------------------------------------------

// export const ThreeSetBasicIdentitiesExplorer = ({ data = threeSetIdentitiesData, explanations = null }) => {
//   useInjectCss();

//   const { frame, defaults, theme: defaultTheme, scenarios } = data;
//   const [currentId, setCurrentId] = useState(scenarios[0]?.id);
//   const [themeColor, setThemeColor] = useState(defaultTheme.color);
//   const [themeOpacity, setThemeOpacity] = useState(defaultTheme.opacity);

//   const grouped = useMemo(() => scenarios.reduce((acc, sc) => {
//     const g = sc.group || 'Other';
//     if (!acc[g]) acc[g] = [];
//     acc[g].push(sc);
//     return acc;
//   }, {}), [scenarios]);

//   const groups = useMemo(() => {
//     const known = GROUP_ORDER.filter((g) => grouped[g]);
//     const extras = Object.keys(grouped).filter((g) => !GROUP_ORDER.includes(g));
//     return [...known, ...extras];
//   }, [grouped]);

//   const current = scenarios.find((sc) => sc.id === currentId) || scenarios[0];
//   const idx = scenarios.findIndex((sc) => sc.id === currentId);

//   const [activeGroup, setActiveGroup] = useState(current?.group || groups[0]);
//   useEffect(() => {
//     if (current?.group && current.group !== activeGroup) setActiveGroup(current.group);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [currentId]);

//   const diagramProps = useMemo(() => ({
//     circles: current?.circles || defaults.circles,
//     width: defaults.width,
//     height: defaults.height,
//     margin: defaults.margin,
//     backgroundColor: defaults.backgroundColor,
//     universe: defaults.universe,
//     highlight: current?.highlight || [],
//     theme: { color: themeColor, opacity: themeOpacity, neutralFill: defaultTheme.neutralFill, outsideNeutralFill: defaultTheme.outsideNeutralFill }
//   }), [current, defaults, defaultTheme, themeColor, themeOpacity]);

//   const goPrev = () => setCurrentId(scenarios[(idx - 1 + scenarios.length) % scenarios.length].id);
//   const goNext = () => setCurrentId(scenarios[(idx + 1) % scenarios.length].id);
//   const resetTheme = () => { setThemeColor(defaultTheme.color); setThemeOpacity(defaultTheme.opacity); };

//   const activeItems = grouped[activeGroup] || [];

//   return (
//     <div style={s.container}>
//       <div style={s.header}>
//         <p style={s.subtitle}>{frame.subtitle}</p>
//       </div>

//       <div style={s.controls}>
//         <div className="tsie-tabs-strip" style={s.tabsStrip}>
//           {groups.map((g) => (
//             <button
//               key={g}
//               className={`tsie-tab${g === activeGroup ? ' active' : ''}`}
//               onClick={() => setActiveGroup(g)}
//               title={g}
//             >{g}</button>
//           ))}
//         </div>

//         <div style={s.tabBody}>
//           <div style={s.formulaRow}>
//             {activeItems.map((sc) => (
//               <button
//                 key={sc.id}
//                 className={`tsie-btn${currentId === sc.id ? ' active' : ''}`}
//                 onClick={() => setCurrentId(sc.id)}
//                 title={sc.name}
//               >{sc.symbol}</button>
//             ))}
//           </div>
//           <div style={s.dropdownWrap}>
//             <span style={s.groupLabel}>Jump to</span>
//             <select style={s.dropdown} value={currentId} onChange={(e) => setCurrentId(e.target.value)}>
//               {groups.map((g) => (
//                 <optgroup key={g} label={g}>
//                   {grouped[g].map((sc) => <option key={sc.id} value={sc.id}>{sc.symbol} — {sc.name}</option>)}
//                 </optgroup>
//               ))}
//             </select>
//           </div>
//         </div>
//       </div>

//       <div style={s.main}>
//         <div style={s.col}>
//           <div style={s.panel}>
//             <div style={s.panelHead}>
//               <span style={s.panelTitle}>Diagram</span>
//               <span style={s.badge}>{current?.symbol}</span>
//             </div>
//             <div style={s.diagramBox}>
//               <VennCoreEnhanced {...diagramProps} />
//             </div>
//           </div>

//           <div style={s.panel}>
//             <div style={s.panelHead}>
//               <span style={s.panelTitle}>Theme</span>
//               <button style={s.reset} onClick={resetTheme}>Reset</button>
//             </div>
//             <div style={s.themeBody}>
//               <span style={s.tLabel}>Color</span>
//               <input type="color" style={s.color} value={themeColor} onChange={(e) => setThemeColor(e.target.value)} />
//               <span style={s.tLabel}>Opacity</span>
//               <input type="range" min="0" max="1" step="0.05" style={s.range} value={themeOpacity} onChange={(e) => setThemeOpacity(parseFloat(e.target.value))} />
//               <span style={s.opVal}>{themeOpacity.toFixed(2)}</span>
//             </div>
//           </div>

//           <div style={s.nav}>
//             <button style={s.navBtn} onClick={goPrev}>← Previous</button>
//             <span style={s.counter}>{idx + 1} / {scenarios.length}</span>
//             <button style={s.navBtn} onClick={goNext}>Next →</button>
//           </div>
//         </div>

//         <ExplanationsPanel
//           current={current}
//           explanations={explanations}
//           headTitle="Explanation"
//           defaultTabLabel="Overview"
//           style={s.explanationPanel}
//         />
//       </div>
//     </div>
//   );
// };

// const s = {
//   container: { fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", maxWidth: '1440px', margin: '0 auto', padding: '24px', backgroundColor: '#f8fafc', minHeight: '100vh' },
//   header: { textAlign: 'center', marginBottom: '20px', padding: '16px 20px', backgroundColor: '#245de1', borderRadius: '12px', color: '#fff', boxShadow: '0 4px 20px rgba(36,93,225,0.3)' },
//   title: { margin: '0 0 4px 0', fontSize: '28px', fontWeight: '700', letterSpacing: '-0.5px' },
//   subtitle: { margin: 0, fontSize: '14px', opacity: 0.9 },
//   controls: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '10px 16px 12px 16px', marginBottom: '20px' },
//   tabsStrip: { display: 'flex', gap: '2px', borderBottom: '2px solid #e2e8f0', marginBottom: '10px', overflowX: 'auto', overflowY: 'hidden', WebkitOverflowScrolling: 'touch' },
//   tabBody: { display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' },
//   formulaRow: { display: 'flex', gap: '4px', flexWrap: 'wrap', flex: 1, minWidth: 0 },
//   groupLabel: { fontSize: '10px', fontWeight: '600', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' },
//   dropdownWrap: { display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '200px' },
//   dropdown: { width: '100%', padding: '8px 12px', fontSize: '13px', fontWeight: '500', color: '#334155', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer', outline: 'none' },
//   main: { display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' },
//   col: { flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '12px' },
//   panel: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', overflow: 'hidden' },
//   panelHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' },
//   panelTitle: { fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' },
//   badge: { padding: '3px 10px', backgroundColor: '#245de1', color: '#fff', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
//   diagramBox: { padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '440px' },
//   themeBody: { padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' },
//   tLabel: { fontSize: '12px', fontWeight: '600', color: '#64748b' },
//   color: { width: '36px', height: '28px', border: '1px solid #cbd5e1', borderRadius: '4px', cursor: 'pointer', padding: '2px', background: '#fff' },
//   range: { flex: 1, cursor: 'pointer' },
//   opVal: { fontSize: '12px', color: '#64748b', minWidth: '36px', fontFamily: 'monospace' },
//   reset: { padding: '4px 12px', fontSize: '11px', fontWeight: '600', color: '#64748b', backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '4px', cursor: 'pointer', outline: 'none' },
//   nav: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '12px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' },
//   navBtn: { padding: '8px 20px', fontSize: '13px', fontWeight: '600', color: '#fff', backgroundColor: '#245de1', border: 'none', borderRadius: '6px', cursor: 'pointer', outline: 'none' },
//   counter: { fontSize: '13px', fontWeight: '600', color: '#64748b', minWidth: '70px', textAlign: 'center' },
//   explanationPanel: { flex: '1 1 350px' }
// };

// export default ThreeSetBasicIdentitiesExplorer;


'use client';

// ============================================================================
// THREE-SET IDENTITIES EXPLORER — uses VennCoreEnhanced (auto-detects 3 sets)
// ============================================================================

import React, { useState, useMemo, useEffect } from 'react';
import { VennCoreEnhanced, ExplanationsPanel } from './VennCoreEnhanced';

const CIRCLE_STROKE = '#1e293b';
const STROKE_W = 1;

// ----------------------------------------------------------------------------
// Geometry — symmetric three-circle Venn
// ----------------------------------------------------------------------------

const TRI_CX = 260, TRI_CY = 215, TRI_R = 90, TRI_OFF = 58;
const place3 = (a) => ({
  cx: TRI_CX + TRI_OFF * Math.cos(a),
  cy: TRI_CY - TRI_OFF * Math.sin(a)
});

const STD_THREE_CIRCLES = {
  A: { ...place3(Math.PI / 2),                   r: TRI_R, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W,
       labelPosition: { x: TRI_CX,                   y: TRI_CY - TRI_OFF - TRI_R - 14 } },
  B: { ...place3(Math.PI / 2 + 2 * Math.PI / 3), r: TRI_R, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W,
       labelPosition: { x: TRI_CX - TRI_OFF - TRI_R + 10, y: TRI_CY + TRI_OFF + TRI_R + 4 } },
  C: { ...place3(Math.PI / 2 - 2 * Math.PI / 3), r: TRI_R, label: 'C', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W,
       labelPosition: { x: TRI_CX + TRI_OFF + TRI_R - 10, y: TRI_CY + TRI_OFF + TRI_R + 4 } }
};

// ----------------------------------------------------------------------------
// Highlight aliases (3-set region keys)
// ----------------------------------------------------------------------------

const ALL_3     = ['A', 'B', 'C', 'A∩B', 'A∩C', 'B∩C', 'A∩B∩C'];
const SET_A_3   = ['A', 'A∩B', 'A∩C', 'A∩B∩C'];
const SET_B_3   = ['B', 'A∩B', 'B∩C', 'A∩B∩C'];
const SET_C_3   = ['C', 'A∩C', 'B∩C', 'A∩B∩C'];
const NOT_A_3   = ['outside', 'B', 'C', 'B∩C'];
const NOT_B_3   = ['outside', 'A', 'C', 'A∩C'];
const NOT_C_3   = ['outside', 'A', 'B', 'A∩B'];
const AB_FULL_3 = ['A∩B', 'A∩B∩C'];
const AC_FULL_3 = ['A∩C', 'A∩B∩C'];
const BC_FULL_3 = ['B∩C', 'A∩B∩C'];

// ----------------------------------------------------------------------------
// Data
// ----------------------------------------------------------------------------

export const threeSetIdentitiesData = {
  frame: {
    title: 'Three-Set Identities',
    subtitle: 'Regions of interest in three-set algebra'
  },
  defaults: {
    width: 520, height: 440, margin: 12,
    backgroundColor: '#ffffff',
    universe: { label: 'U', labelPosition: { x: 30, y: 32 }, stroke: '#cbd5e1', strokeWidth: 1, labelFontSize: 18, labelColor: '#64748b' },
    circles: STD_THREE_CIRCLES,
    tooltips: {
      'outside': 'Outside all three sets',
      'A':       'Only in A',
      'B':       'Only in B',
      'C':       'Only in C',
      'A∩B':     'In A and B, not in C',
      'A∩C':     'In A and C, not in B',
      'B∩C':     'In B and C, not in A',
      'A∩B∩C':   'In all three sets'
    }
  },
  theme: { color: '#2563eb', opacity: 0.85, neutralFill: '#ffffff', outsideNeutralFill: '#ffffff' },
  scenarios: [
    // Basic Sets
    { id: 'set-a',    group: 'Basic Sets', name: 'Set A', symbol: 'A', definition: 'The set A.', example: 'A = {1,2,3}', highlight: SET_A_3 },
    { id: 'set-b',    group: 'Basic Sets', name: 'Set B', symbol: 'B', definition: 'The set B.', example: 'B = {2,3,4}', highlight: SET_B_3 },
    { id: 'set-c',    group: 'Basic Sets', name: 'Set C', symbol: 'C', definition: 'The set C.', example: 'C = {3,4,5}', highlight: SET_C_3 },
    { id: 'universe', group: 'Basic Sets', name: 'Universal Set', symbol: 'U', definition: 'Every element under consideration.', highlight: ['outside', ...ALL_3] },
    { id: 'empty',    group: 'Basic Sets', name: 'Empty Set', symbol: '∅', definition: 'The set with no elements.', highlight: [] },

    // Complements
    { id: 'a-comp', group: 'Complements', name: 'Complement of A', symbol: "A'", definition: 'Everything in U not in A.', highlight: NOT_A_3 },
    { id: 'b-comp', group: 'Complements', name: 'Complement of B', symbol: "B'", definition: 'Everything in U not in B.', highlight: NOT_B_3 },
    { id: 'c-comp', group: 'Complements', name: 'Complement of C', symbol: "C'", definition: 'Everything in U not in C.', highlight: NOT_C_3 },

    // Intersection & Union
    { id: 'inter-abc',  group: 'Intersection & Union', name: 'Triple Intersection', symbol: 'A ∩ B ∩ C', definition: 'Elements in all three sets.', example: 'A = {1,2,3}, B = {2,3,4}, C = {3,4,5} ⇒ {3}', highlight: ['A∩B∩C'] },
    { id: 'inter-ab',   group: 'Intersection & Union', name: 'A intersect B', symbol: 'A ∩ B', definition: 'All elements in both A and B (regardless of C).', highlight: AB_FULL_3 },
    { id: 'inter-ac',   group: 'Intersection & Union', name: 'A intersect C', symbol: 'A ∩ C', definition: 'All elements in both A and C (regardless of B).', highlight: AC_FULL_3 },
    { id: 'inter-bc',   group: 'Intersection & Union', name: 'B intersect C', symbol: 'B ∩ C', definition: 'All elements in both B and C (regardless of A).', highlight: BC_FULL_3 },
    { id: 'union-abc',  group: 'Intersection & Union', name: 'Triple Union', symbol: 'A ∪ B ∪ C', definition: 'Elements in at least one of A, B, C.', highlight: ALL_3 },
    { id: 'union-ab',   group: 'Intersection & Union', name: 'A union B', symbol: 'A ∪ B', definition: 'Elements in A or B.', highlight: ['A', 'B', 'A∩B', 'A∩C', 'B∩C', 'A∩B∩C'] },
    { id: 'union-ac',   group: 'Intersection & Union', name: 'A union C', symbol: 'A ∪ C', definition: 'Elements in A or C.', highlight: ['A', 'C', 'A∩B', 'A∩C', 'B∩C', 'A∩B∩C'] },
    { id: 'union-bc',   group: 'Intersection & Union', name: 'B union C', symbol: 'B ∪ C', definition: 'Elements in B or C.', highlight: ['B', 'C', 'A∩B', 'A∩C', 'B∩C', 'A∩B∩C'] },

    // Differences
    { id: 'a-minus-b',    group: 'Differences', name: 'A minus B',  symbol: 'A \\ B', definition: 'In A but not in B.', highlight: ['A', 'A∩C'] },
    { id: 'a-minus-c',    group: 'Differences', name: 'A minus C',  symbol: 'A \\ C', definition: 'In A but not in C.', highlight: ['A', 'A∩B'] },
    { id: 'b-minus-a',    group: 'Differences', name: 'B minus A',  symbol: 'B \\ A', definition: 'In B but not in A.', highlight: ['B', 'B∩C'] },
    { id: 'b-minus-c',    group: 'Differences', name: 'B minus C',  symbol: 'B \\ C', definition: 'In B but not in C.', highlight: ['B', 'A∩B'] },
    { id: 'c-minus-a',    group: 'Differences', name: 'C minus A',  symbol: 'C \\ A', definition: 'In C but not in A.', highlight: ['C', 'B∩C'] },
    { id: 'c-minus-b',    group: 'Differences', name: 'C minus B',  symbol: 'C \\ B', definition: 'In C but not in B.', highlight: ['C', 'A∩C'] },
    { id: 'a-only-only',  group: 'Differences', name: 'A minus (B ∪ C)', symbol: 'A \\ (B ∪ C)', definition: 'In A only.', highlight: ['A'] },
    { id: 'b-only-only',  group: 'Differences', name: 'B minus (A ∪ C)', symbol: 'B \\ (A ∪ C)', definition: 'In B only.', highlight: ['B'] },
    { id: 'c-only-only',  group: 'Differences', name: 'C minus (A ∪ B)', symbol: 'C \\ (A ∪ B)', definition: 'In C only.', highlight: ['C'] },
    { id: 'ab-minus-c',   group: 'Differences', name: '(A ∪ B) minus C', symbol: '(A ∪ B) \\ C', definition: 'In A or B but not in C.', highlight: ['A', 'B', 'A∩B'] },
    { id: 'symdiff-ab',   group: 'Differences', name: 'A △ B', symbol: 'A △ B', definition: 'In exactly one of A or B (regardless of C).', highlight: ['A', 'A∩C', 'B', 'B∩C'] },
    { id: 'symdiff-abc',  group: 'Differences', name: 'A △ B △ C', symbol: 'A △ B △ C', definition: 'In an odd number of A, B, C.', highlight: ['A', 'B', 'C', 'A∩B∩C'] },

    // Compound
    { id: 'ab-not-c',    group: 'Compound', name: 'A and B but not C', symbol: "A ∩ B ∩ C'", definition: 'In A and B but not in C.', highlight: ['A∩B'] },
    { id: 'ac-not-b',    group: 'Compound', name: 'A and C but not B', symbol: "A ∩ B' ∩ C", definition: 'In A and C but not in B.', highlight: ['A∩C'] },
    { id: 'bc-not-a',    group: 'Compound', name: 'B and C but not A', symbol: "A' ∩ B ∩ C", definition: 'In B and C but not in A.', highlight: ['B∩C'] },
    { id: 'a-and-bORc',  group: 'Compound', name: 'A and (B or C)',    symbol: 'A ∩ (B ∪ C)', definition: 'In A and at least one of B or C.', highlight: ['A∩B', 'A∩C', 'A∩B∩C'] },
    { id: 'aORb-and-c',  group: 'Compound', name: '(A or B) and C',    symbol: '(A ∪ B) ∩ C', definition: 'In C and at least one of A or B.', highlight: ['A∩C', 'B∩C', 'A∩B∩C'] },
    { id: 'a-or-bANDc',  group: 'Compound', name: 'A or (B and C)',    symbol: 'A ∪ (B ∩ C)', definition: 'In A or in both B and C.', highlight: ['A', 'A∩B', 'A∩C', 'A∩B∩C', 'B∩C'] },
    { id: 'exactly-one', group: 'Compound', name: 'Exactly one of A, B, C', symbol: 'exactly one', definition: 'In exactly one of A, B, C.', highlight: ['A', 'B', 'C'] },
    { id: 'exactly-two', group: 'Compound', name: 'Exactly two of A, B, C', symbol: 'exactly two', definition: 'In exactly two of A, B, C.', highlight: ['A∩B', 'A∩C', 'B∩C'] },
    { id: 'at-least-two', group: 'Compound', name: 'At least two of A, B, C', symbol: '≥ two', definition: 'In two or three of A, B, C.', highlight: ['A∩B', 'A∩C', 'B∩C', 'A∩B∩C'] },
    { id: 'at-most-one', group: 'Compound', name: 'At most one of A, B, C', symbol: '≤ one', definition: 'In none or exactly one of A, B, C.', highlight: ['outside', 'A', 'B', 'C'] },

    // De Morgan's
    { id: 'dm-union', group: "De Morgan's Laws", name: 'Complement of Triple Union',        symbol: "(A ∪ B ∪ C)'", definition: 'Outside all three sets.', highlight: ['outside'] },
    { id: 'dm-inter', group: "De Morgan's Laws", name: 'Complement of Triple Intersection', symbol: "(A ∩ B ∩ C)'", definition: 'Everything except the triple intersection.', highlight: ['outside', 'A', 'B', 'C', 'A∩B', 'A∩C', 'B∩C'] }
  ]
};

const GROUP_ORDER = ['Basic Sets', 'Complements', 'Intersection & Union', 'Differences', 'Compound', "De Morgan's Laws"];

// ----------------------------------------------------------------------------
// Injected CSS
// ----------------------------------------------------------------------------

const CSS_ID = 'three-set-identities-explorer-css';
const CSS = `
.tsie-tab {
  padding: 7px 12px;
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  outline: none;
}
.tsie-tab:hover { color: #334155; }
.tsie-tab:focus, .tsie-tab:focus-visible { outline: none; }
.tsie-tab.active,
.tsie-tab.active:hover,
.tsie-tab.active:focus,
.tsie-tab.active:focus-visible {
  color: #245de1;
  border-bottom-color: #245de1;
}

.tsie-btn {
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
  background-color: #f1f5f9;
  border: 2px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'Cambria Math', 'Times New Roman', serif;
  white-space: nowrap;
  outline: none;
}
.tsie-btn:hover {
  color: #334155;
  background-color: #e2e8f0;
  border-color: transparent;
}
.tsie-btn:focus, .tsie-btn:focus-visible {
  outline: none;
  border-color: transparent;
}
.tsie-btn.active,
.tsie-btn.active:hover,
.tsie-btn.active:focus,
.tsie-btn.active:focus-visible {
  color: #245de1;
  background-color: #e8effd;
  border-color: #245de1;
}

.tsie-tabs-strip { scrollbar-width: none; -ms-overflow-style: none; }
.tsie-tabs-strip::-webkit-scrollbar { display: none; width: 0; height: 0; }
`;

function useInjectCss() {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (document.getElementById(CSS_ID)) return;
    const el = document.createElement('style');
    el.id = CSS_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}

// ----------------------------------------------------------------------------
// Explorer
// ----------------------------------------------------------------------------

export const ThreeSetIdentitiesExplorer = ({ data = threeSetIdentitiesData, explanations = null }) => {
  useInjectCss();

  const { frame, defaults, theme: defaultTheme, scenarios } = data;
  const [currentId, setCurrentId] = useState(scenarios[0]?.id);
  const [themeColor, setThemeColor] = useState(defaultTheme.color);
  const [themeOpacity, setThemeOpacity] = useState(defaultTheme.opacity);

  const grouped = useMemo(() => scenarios.reduce((acc, sc) => {
    const g = sc.group || 'Other';
    if (!acc[g]) acc[g] = [];
    acc[g].push(sc);
    return acc;
  }, {}), [scenarios]);

  const groups = useMemo(() => {
    const known = GROUP_ORDER.filter((g) => grouped[g]);
    const extras = Object.keys(grouped).filter((g) => !GROUP_ORDER.includes(g));
    return [...known, ...extras];
  }, [grouped]);

  const current = scenarios.find((sc) => sc.id === currentId) || scenarios[0];
  const idx = scenarios.findIndex((sc) => sc.id === currentId);

  const [activeGroup, setActiveGroup] = useState(current?.group || groups[0]);
  useEffect(() => {
    if (current?.group && current.group !== activeGroup) setActiveGroup(current.group);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentId]);

  const diagramProps = useMemo(() => ({
    circles: current?.circles || defaults.circles,
    width: defaults.width,
    height: defaults.height,
    margin: defaults.margin,
    backgroundColor: defaults.backgroundColor,
    universe: defaults.universe,
    highlight: current?.highlight || [],
    tooltips: current?.tooltips || defaults.tooltips || {},
    theme: { color: themeColor, opacity: themeOpacity, neutralFill: defaultTheme.neutralFill, outsideNeutralFill: defaultTheme.outsideNeutralFill }
  }), [current, defaults, defaultTheme, themeColor, themeOpacity]);

  const goPrev = () => setCurrentId(scenarios[(idx - 1 + scenarios.length) % scenarios.length].id);
  const goNext = () => setCurrentId(scenarios[(idx + 1) % scenarios.length].id);
  const resetTheme = () => { setThemeColor(defaultTheme.color); setThemeOpacity(defaultTheme.opacity); };

  const activeItems = grouped[activeGroup] || [];

  return (
    <div style={s.container}>
      <div style={s.header}>
        <p style={s.subtitle}>{frame.subtitle}</p>
      </div>

      <div style={s.controls}>
        <div className="tsie-tabs-strip" style={s.tabsStrip}>
          {groups.map((g) => (
            <button
              key={g}
              className={`tsie-tab${g === activeGroup ? ' active' : ''}`}
              onClick={() => setActiveGroup(g)}
              title={g}
            >{g}</button>
          ))}
        </div>

        <div style={s.tabBody}>
          <div style={s.formulaRow}>
            {activeItems.map((sc) => (
              <button
                key={sc.id}
                className={`tsie-btn${currentId === sc.id ? ' active' : ''}`}
                onClick={() => setCurrentId(sc.id)}
                title={sc.name}
              >{sc.symbol}</button>
            ))}
          </div>
          <div style={s.dropdownWrap}>
            <span style={s.groupLabel}>Jump to</span>
            <select style={s.dropdown} value={currentId} onChange={(e) => setCurrentId(e.target.value)}>
              {groups.map((g) => (
                <optgroup key={g} label={g}>
                  {grouped[g].map((sc) => <option key={sc.id} value={sc.id}>{sc.symbol} — {sc.name}</option>)}
                </optgroup>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div style={s.main}>
        <div style={s.col}>
          <div style={s.panel}>
            <div style={s.panelHead}>
              <span style={s.panelTitle}>Diagram</span>
              <span style={s.badge}>{current?.symbol}</span>
            </div>
            <div style={s.diagramBox}>
              <VennCoreEnhanced {...diagramProps} />
            </div>
          </div>

          <div style={s.panel}>
            <div style={s.panelHead}>
              <span style={s.panelTitle}>Theme</span>
              <button style={s.reset} onClick={resetTheme}>Reset</button>
            </div>
            <div style={s.themeBody}>
              <span style={s.tLabel}>Color</span>
              <input type="color" style={s.color} value={themeColor} onChange={(e) => setThemeColor(e.target.value)} />
              <span style={s.tLabel}>Opacity</span>
              <input type="range" min="0" max="1" step="0.05" style={s.range} value={themeOpacity} onChange={(e) => setThemeOpacity(parseFloat(e.target.value))} />
              <span style={s.opVal}>{themeOpacity.toFixed(2)}</span>
            </div>
          </div>

          <div style={s.nav}>
            <button style={s.navBtn} onClick={goPrev}>← Previous</button>
            <span style={s.counter}>{idx + 1} / {scenarios.length}</span>
            <button style={s.navBtn} onClick={goNext}>Next →</button>
          </div>
        </div>

        <ExplanationsPanel
          current={current}
          explanations={explanations}
          headTitle="Explanation"
          defaultTabLabel="Overview"
          style={s.explanationPanel}
        />
      </div>
    </div>
  );
};

const s = {
  container: { fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", maxWidth: '1440px', margin: '0 auto', padding: '24px', backgroundColor: '#f8fafc', minHeight: '100vh' },
  header: { textAlign: 'center', marginBottom: '20px', padding: '16px 20px', backgroundColor: '#245de1', borderRadius: '12px', color: '#fff', boxShadow: '0 4px 20px rgba(36,93,225,0.3)' },
  title: { margin: '0 0 4px 0', fontSize: '28px', fontWeight: '700', letterSpacing: '-0.5px' },
  subtitle: { margin: 0, fontSize: '14px', opacity: 0.9 },
  controls: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '10px 16px 12px 16px', marginBottom: '20px' },
  tabsStrip: { display: 'flex', gap: '2px', borderBottom: '2px solid #e2e8f0', marginBottom: '10px', overflowX: 'auto', overflowY: 'hidden', WebkitOverflowScrolling: 'touch' },
  tabBody: { display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' },
  formulaRow: { display: 'flex', gap: '4px', flexWrap: 'wrap', flex: 1, minWidth: 0 },
  groupLabel: { fontSize: '10px', fontWeight: '600', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' },
  dropdownWrap: { display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '200px' },
  dropdown: { width: '100%', padding: '8px 12px', fontSize: '13px', fontWeight: '500', color: '#334155', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer', outline: 'none' },
  main: { display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' },
  col: { flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '12px' },
  panel: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', overflow: 'hidden' },
  panelHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' },
  panelTitle: { fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' },
  badge: { padding: '3px 10px', backgroundColor: '#245de1', color: '#fff', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
  diagramBox: { padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '440px' },
  themeBody: { padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' },
  tLabel: { fontSize: '12px', fontWeight: '600', color: '#64748b' },
  color: { width: '36px', height: '28px', border: '1px solid #cbd5e1', borderRadius: '4px', cursor: 'pointer', padding: '2px', background: '#fff' },
  range: { flex: 1, cursor: 'pointer' },
  opVal: { fontSize: '12px', color: '#64748b', minWidth: '36px', fontFamily: 'monospace' },
  reset: { padding: '4px 12px', fontSize: '11px', fontWeight: '600', color: '#64748b', backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '4px', cursor: 'pointer', outline: 'none' },
  nav: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '12px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' },
  navBtn: { padding: '8px 20px', fontSize: '13px', fontWeight: '600', color: '#fff', backgroundColor: '#245de1', border: 'none', borderRadius: '6px', cursor: 'pointer', outline: 'none' },
  counter: { fontSize: '13px', fontWeight: '600', color: '#64748b', minWidth: '70px', textAlign: 'center' },
  explanationPanel: { flex: '1 1 350px' }
};

export default ThreeSetIdentitiesExplorer;