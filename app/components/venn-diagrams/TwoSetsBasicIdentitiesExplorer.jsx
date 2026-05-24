// // // // // // 'use client';

// // // // // // // ============================================================================
// // // // // // // TWO-SETS BASIC IDENTITIES — operations/regions of interest on 2 sets
// // // // // // // ============================================================================
// // // // // // // One diagram per scenario. Imports renderer + helpers from venn-core.
// // // // // // // ============================================================================

// // // // // // import React, { useState, useMemo } from 'react';
// // // // // // import { Venncore } from './venncore';

// // // // // // // ----------------------------------------------------------------------------
// // // // // // // Geometries
// // // // // // // ----------------------------------------------------------------------------

// // // // // // const CIRCLE_STROKE = '#1e293b';
// // // // // // const STROKE_W = 1;

// // // // // // const STD_CIRCLES = {
// // // // // //   A: { cx: 200, cy: 210, r: 110, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 130, y: 320 } },
// // // // // //   B: { cx: 320, cy: 210, r: 110, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 390, y: 320 } }
// // // // // // };
// // // // // // const SUBSET_A_IN_B = {
// // // // // //   A: { cx: 280, cy: 210, r: 55, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 280, y: 280 } },
// // // // // //   B: { cx: 260, cy: 210, r: 130, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 130, y: 340 } }
// // // // // // };
// // // // // // const SUBSET_B_IN_A = {
// // // // // //   A: { cx: 260, cy: 210, r: 130, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 130, y: 340 } },
// // // // // //   B: { cx: 280, cy: 210, r: 55, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 280, y: 280 } }
// // // // // // };
// // // // // // const DISJOINT_CIRCLES = {
// // // // // //   A: { cx: 150, cy: 210, r: 85, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 80, y: 320 } },
// // // // // //   B: { cx: 370, cy: 210, r: 85, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 440, y: 320 } }
// // // // // // };
// // // // // // const EQUAL_CIRCLES = {
// // // // // //   A: { cx: 260, cy: 210, r: 110, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 180, y: 100 } },
// // // // // //   B: { cx: 260, cy: 210, r: 110, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 340, y: 100 }, strokeDasharray: '6,4' }
// // // // // // };

// // // // // // // ----------------------------------------------------------------------------
// // // // // // // Data
// // // // // // // ----------------------------------------------------------------------------

// // // // // // export const basicIdentitiesData = {
// // // // // //   frame: {
// // // // // //     title: 'Two-Set Basic Identities',
// // // // // //     subtitle: 'Regions of interest in two-set algebra'
// // // // // //   },
// // // // // //   defaults: {
// // // // // //     width: 520, height: 420, margin: 12,
// // // // // //     backgroundColor: '#ffffff',
// // // // // //     universe: { label: 'U', labelPosition: { x: 30, y: 32 }, stroke: '#cbd5e1', strokeWidth: 1, labelFontSize: 18, labelColor: '#64748b' },
// // // // // //     circles: STD_CIRCLES
// // // // // //   },
// // // // // //   theme: { color: '#2563eb', opacity: 0.85, neutralFill: '#ffffff', outsideNeutralFill: '#ffffff' },
// // // // // //   scenarios: [
// // // // // //     { id: 'set-a', group: 'Basic Sets', name: 'Set A', symbol: 'A', definition: 'The set A.', example: 'A = {1,2,3,4}', highlight: ['A-only', 'A∩B'] },
// // // // // //     { id: 'set-b', group: 'Basic Sets', name: 'Set B', symbol: 'B', definition: 'The set B.', example: 'B = {3,4,5,6}', highlight: ['B-only', 'A∩B'] },
// // // // // //     { id: 'universe', group: 'Basic Sets', name: 'Universal Set', symbol: 'U', definition: 'Every element under consideration.', highlight: ['outside', 'A-only', 'B-only', 'A∩B'] },
// // // // // //     { id: 'empty', group: 'Basic Sets', name: 'Empty Set', symbol: '∅', definition: 'The set with no elements.', highlight: [] },

// // // // // //     { id: 'a-comp', group: 'Complements', name: 'Complement of A', symbol: "A'", definition: 'Everything in U not in A.', highlight: ['outside', 'B-only'] },
// // // // // //     { id: 'b-comp', group: 'Complements', name: 'Complement of B', symbol: "B'", definition: 'Everything in U not in B.', highlight: ['outside', 'A-only'] },

// // // // // //     { id: 'intersection', group: 'Intersection & Union', name: 'Intersection', symbol: 'A ∩ B', definition: 'Elements in both A and B.', example: 'A = {1,2,3,4}, B = {3,4,5,6} ⇒ {3,4}', highlight: ['A∩B'] },
// // // // // //     { id: 'union', group: 'Intersection & Union', name: 'Union', symbol: 'A ∪ B', definition: 'Elements in A, in B, or both.', example: 'A = {1,2,3}, B = {3,4,5} ⇒ {1,2,3,4,5}', highlight: ['A-only', 'B-only', 'A∩B'] },

// // // // // //     { id: 'a-minus-b', group: 'Differences', name: 'A minus B', symbol: 'A \\ B', definition: 'In A but not in B.', highlight: ['A-only'] },
// // // // // //     { id: 'b-minus-a', group: 'Differences', name: 'B minus A', symbol: 'B \\ A', definition: 'In B but not in A.', highlight: ['B-only'] },
// // // // // //     { id: 'symdiff', group: 'Differences', name: 'Symmetric Difference', symbol: 'A △ B', definition: 'In exactly one of A or B.', highlight: ['A-only', 'B-only'] },

// // // // // //     { id: 'a-or-bcomp', group: 'Compound', name: "A union B'", symbol: "A ∪ B'", definition: "A plus everything outside B.", highlight: ['outside', 'A-only', 'A∩B'] },
// // // // // //     { id: 'acomp-or-b', group: 'Compound', name: "A' union B", symbol: "A' ∪ B", definition: "Everything outside A plus B.", highlight: ['outside', 'B-only', 'A∩B'] },

// // // // // //     { id: 'dm-1', group: "De Morgan's Laws", name: 'Complement of Union', symbol: "(A ∪ B)'", definition: "Outside both A and B.", highlight: ['outside'] },
// // // // // //     { id: 'dm-2', group: "De Morgan's Laws", name: 'Complement of Intersection', symbol: "(A ∩ B)'", definition: 'Everything except the intersection.', highlight: ['outside', 'A-only', 'B-only'] },

// // // // // //     { id: 'sub-a-b', group: 'Relations', name: 'A is a subset of B', symbol: 'A ⊆ B', definition: 'Every element of A is also in B.', circles: SUBSET_A_IN_B, highlight: ['A∩B'] },
// // // // // //     { id: 'sub-b-a', group: 'Relations', name: 'B is a subset of A', symbol: 'B ⊆ A', definition: 'Every element of B is also in A.', circles: SUBSET_B_IN_A, highlight: ['A∩B'] },
// // // // // //     { id: 'disjoint', group: 'Relations', name: 'Disjoint sets', symbol: 'A ∩ B = ∅', definition: 'A and B share no elements.', circles: DISJOINT_CIRCLES, highlight: ['A-only', 'B-only'] },
// // // // // //     { id: 'equal', group: 'Relations', name: 'Equal sets', symbol: 'A = B', definition: 'A and B contain the same elements.', circles: EQUAL_CIRCLES, highlight: ['A∩B'] }
// // // // // //   ]
// // // // // // };

// // // // // // const GROUP_ORDER = ['Basic Sets', 'Complements', 'Intersection & Union', 'Differences', 'Compound', "De Morgan's Laws", 'Relations'];

// // // // // // // ----------------------------------------------------------------------------
// // // // // // // Explorer
// // // // // // // ----------------------------------------------------------------------------

// // // // // // export const TwoSetsBasicIdentitiesExplorer = ({ data = basicIdentitiesData }) => {
// // // // // //   const { frame, defaults, theme: defaultTheme, scenarios } = data;
// // // // // //   const [currentId, setCurrentId] = useState(scenarios[0]?.id);
// // // // // //   const [themeColor, setThemeColor] = useState(defaultTheme.color);
// // // // // //   const [themeOpacity, setThemeOpacity] = useState(defaultTheme.opacity);

// // // // // //   const grouped = useMemo(() => scenarios.reduce((acc, s) => {
// // // // // //     const g = s.group || 'Other';
// // // // // //     if (!acc[g]) acc[g] = [];
// // // // // //     acc[g].push(s);
// // // // // //     return acc;
// // // // // //   }, {}), [scenarios]);
// // // // // //   const groups = useMemo(() => {
// // // // // //     const known = GROUP_ORDER.filter((g) => grouped[g]);
// // // // // //     const extras = Object.keys(grouped).filter((g) => !GROUP_ORDER.includes(g));
// // // // // //     return [...known, ...extras];
// // // // // //   }, [grouped]);

// // // // // //   const current = scenarios.find((s) => s.id === currentId) || scenarios[0];
// // // // // //   const idx = scenarios.findIndex((s) => s.id === currentId);

// // // // // //   const diagramProps = useMemo(() => ({
// // // // // //     circles: current?.circles || defaults.circles,
// // // // // //     width: defaults.width,
// // // // // //     height: defaults.height,
// // // // // //     margin: defaults.margin,
// // // // // //     backgroundColor: defaults.backgroundColor,
// // // // // //     universe: defaults.universe,
// // // // // //     highlight: current?.highlight || [],
// // // // // //     theme: { color: themeColor, opacity: themeOpacity, neutralFill: defaultTheme.neutralFill, outsideNeutralFill: defaultTheme.outsideNeutralFill }
// // // // // //   }), [current, defaults, defaultTheme, themeColor, themeOpacity]);

// // // // // //   const goPrev = () => setCurrentId(scenarios[(idx - 1 + scenarios.length) % scenarios.length].id);
// // // // // //   const goNext = () => setCurrentId(scenarios[(idx + 1) % scenarios.length].id);
// // // // // //   const resetTheme = () => { setThemeColor(defaultTheme.color); setThemeOpacity(defaultTheme.opacity); };

// // // // // //   return (
// // // // // //     <div style={s.container}>
// // // // // //       <div style={s.header}>
// // // // // //         <h1 style={s.title}>{frame.title}</h1>
// // // // // //         <p style={s.subtitle}>{frame.subtitle}</p>
// // // // // //       </div>

// // // // // //       <div style={s.controls}>
// // // // // //         <div style={s.btnGroups}>
// // // // // //           {groups.map((g) => (
// // // // // //             <div key={g} style={s.btnGroup}>
// // // // // //               <span style={s.groupLabel}>{g}</span>
// // // // // //               <div style={s.groupBtns}>
// // // // // //                 {grouped[g].map((sc) => (
// // // // // //                   <button key={sc.id} style={{ ...s.btn, ...(currentId === sc.id ? s.btnActive : {}) }}
// // // // // //                     onClick={() => setCurrentId(sc.id)} title={sc.name}>{sc.symbol}</button>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //         <div style={s.dropdownWrap}>
// // // // // //           <span style={s.groupLabel}>Jump to</span>
// // // // // //           <select style={s.dropdown} value={currentId} onChange={(e) => setCurrentId(e.target.value)}>
// // // // // //             {groups.map((g) => (
// // // // // //               <optgroup key={g} label={g}>
// // // // // //                 {grouped[g].map((sc) => <option key={sc.id} value={sc.id}>{sc.symbol} — {sc.name}</option>)}
// // // // // //               </optgroup>
// // // // // //             ))}
// // // // // //           </select>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <div style={s.main}>
// // // // // //         <div style={s.col}>
// // // // // //           <div style={s.panel}>
// // // // // //             <div style={s.panelHead}>
// // // // // //               <span style={s.panelTitle}>Diagram</span>
// // // // // //               <span style={s.badge}>{current?.symbol}</span>
// // // // // //             </div>
// // // // // //             <div style={s.diagramBox}>
// // // // // //               <Venncore {...diagramProps} />
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           <div style={s.panel}>
// // // // // //             <div style={s.panelHead}>
// // // // // //               <span style={s.panelTitle}>Theme</span>
// // // // // //               <button style={s.reset} onClick={resetTheme}>Reset</button>
// // // // // //             </div>
// // // // // //             <div style={s.themeBody}>
// // // // // //               <span style={s.tLabel}>Color</span>
// // // // // //               <input type="color" style={s.color} value={themeColor} onChange={(e) => setThemeColor(e.target.value)} />
// // // // // //               <span style={s.tLabel}>Opacity</span>
// // // // // //               <input type="range" min="0" max="1" step="0.05" style={s.range} value={themeOpacity} onChange={(e) => setThemeOpacity(parseFloat(e.target.value))} />
// // // // // //               <span style={s.opVal}>{themeOpacity.toFixed(2)}</span>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           <div style={s.nav}>
// // // // // //             <button style={s.navBtn} onClick={goPrev}>← Previous</button>
// // // // // //             <span style={s.counter}>{idx + 1} / {scenarios.length}</span>
// // // // // //             <button style={s.navBtn} onClick={goNext}>Next →</button>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         <div style={s.explanationPanel}>
// // // // // //           <div style={s.panelHead}><span style={s.panelTitle}>Explanation</span></div>
// // // // // //           <div style={s.explanationBody}>
// // // // // //             <div style={s.scTitle}>
// // // // // //               <h2 style={s.scName}>{current?.name}</h2>
// // // // // //               <div style={s.scSymbol}>{current?.symbol}</div>
// // // // // //             </div>
// // // // // //             <div style={s.section}>
// // // // // //               <h3 style={s.sectionTitle}>Definition</h3>
// // // // // //               <p style={s.sectionText}>{current?.definition || ''}</p>
// // // // // //             </div>
// // // // // //             {current?.example && (
// // // // // //               <div style={s.section}>
// // // // // //                 <h3 style={s.sectionTitle}>Example</h3>
// // // // // //                 <p style={s.sectionText}>{current.example}</p>
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // const s = {
// // // // // //   container: { fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", maxWidth: '1440px', margin: '0 auto', padding: '24px', backgroundColor: '#f8fafc', minHeight: '100vh' },
// // // // // //   header: { textAlign: 'center', marginBottom: '20px', padding: '16px 20px', backgroundColor: '#245de1', borderRadius: '12px', color: '#fff', boxShadow: '0 4px 20px rgba(36,93,225,0.3)' },
// // // // // //   title: { margin: '0 0 4px 0', fontSize: '28px', fontWeight: '700', letterSpacing: '-0.5px' },
// // // // // //   subtitle: { margin: 0, fontSize: '14px', opacity: 0.9 },
// // // // // //   controls: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '16px 20px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px', flexWrap: 'wrap' },
// // // // // //   btnGroups: { display: 'flex', flexWrap: 'wrap', gap: '16px', flex: 1 },
// // // // // //   btnGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
// // // // // //   groupLabel: { fontSize: '10px', fontWeight: '600', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' },
// // // // // //   groupBtns: { display: 'flex', gap: '4px', flexWrap: 'wrap' },
// // // // // //   btn: { padding: '6px 10px', fontSize: '12px', fontWeight: '600', color: '#64748b', backgroundColor: '#f1f5f9', border: '2px solid transparent', borderRadius: '6px', cursor: 'pointer', fontFamily: "'Cambria Math','Times New Roman',serif", whiteSpace: 'nowrap' },
// // // // // //   btnActive: { color: '#245de1', backgroundColor: '#e8effd', borderColor: '#245de1' },
// // // // // //   dropdownWrap: { display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '200px' },
// // // // // //   dropdown: { width: '100%', padding: '8px 12px', fontSize: '13px', fontWeight: '500', color: '#334155', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer', outline: 'none' },
// // // // // //   main: { display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' },
// // // // // //   col: { flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '12px' },
// // // // // //   panel: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', overflow: 'hidden' },
// // // // // //   panelHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' },
// // // // // //   panelTitle: { fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' },
// // // // // //   badge: { padding: '3px 10px', backgroundColor: '#245de1', color: '#fff', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
// // // // // //   diagramBox: { padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '420px' },
// // // // // //   themeBody: { padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' },
// // // // // //   tLabel: { fontSize: '12px', fontWeight: '600', color: '#64748b' },
// // // // // //   color: { width: '36px', height: '28px', border: '1px solid #cbd5e1', borderRadius: '4px', cursor: 'pointer', padding: '2px', background: '#fff' },
// // // // // //   range: { flex: 1, cursor: 'pointer' },
// // // // // //   opVal: { fontSize: '12px', color: '#64748b', minWidth: '36px', fontFamily: 'monospace' },
// // // // // //   reset: { padding: '4px 12px', fontSize: '11px', fontWeight: '600', color: '#64748b', backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '4px', cursor: 'pointer' },
// // // // // //   nav: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '12px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' },
// // // // // //   navBtn: { padding: '8px 20px', fontSize: '13px', fontWeight: '600', color: '#fff', backgroundColor: '#245de1', border: 'none', borderRadius: '6px', cursor: 'pointer' },
// // // // // //   counter: { fontSize: '13px', fontWeight: '600', color: '#64748b', minWidth: '70px', textAlign: 'center' },
// // // // // //   explanationPanel: { flex: '1 1 350px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', overflow: 'hidden', display: 'flex', flexDirection: 'column' },
// // // // // //   explanationBody: { padding: '20px' },
// // // // // //   scTitle: { marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #e2e8f0' },
// // // // // //   scName: { margin: '0 0 6px 0', fontSize: '20px', fontWeight: '700', color: '#1e293b' },
// // // // // //   scSymbol: { display: 'inline-block', padding: '6px 12px', backgroundColor: '#f1f5f9', borderRadius: '6px', fontSize: '18px', fontWeight: '600', color: '#245de1', fontFamily: "'Cambria Math','Times New Roman',serif" },
// // // // // //   section: { marginBottom: '16px' },
// // // // // //   sectionTitle: { margin: '0 0 6px 0', fontSize: '11px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' },
// // // // // //   sectionText: { margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#475569' }
// // // // // // };

// // // // // // export default function TwoSetsBasicIdentitiesPage() {
// // // // // //   return <TwoSetsBasicIdentitiesExplorer />;
// // // // // // }



// // // // // 'use client';

// // // // // // ============================================================================
// // // // // // TWO-SETS BASIC IDENTITIES — operations/regions of interest on 2 sets
// // // // // // ============================================================================
// // // // // // One diagram per scenario. Imports renderer + helpers from venn-core.
// // // // // // ============================================================================

// // // // // import React, { useState, useMemo } from 'react';
// // // // // import { Venncore } from './Venncore';

// // // // // // ----------------------------------------------------------------------------
// // // // // // Geometries
// // // // // // ----------------------------------------------------------------------------

// // // // // const CIRCLE_STROKE = '#1e293b';
// // // // // const STROKE_W = 1;

// // // // // const STD_CIRCLES = {
// // // // //   A: { cx: 200, cy: 210, r: 110, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 130, y: 320 } },
// // // // //   B: { cx: 320, cy: 210, r: 110, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 390, y: 320 } }
// // // // // };
// // // // // const SUBSET_A_IN_B = {
// // // // //   A: { cx: 280, cy: 210, r: 55, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 280, y: 280 } },
// // // // //   B: { cx: 260, cy: 210, r: 130, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 130, y: 340 } }
// // // // // };
// // // // // const SUBSET_B_IN_A = {
// // // // //   A: { cx: 260, cy: 210, r: 130, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 130, y: 340 } },
// // // // //   B: { cx: 280, cy: 210, r: 55, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 280, y: 280 } }
// // // // // };
// // // // // const DISJOINT_CIRCLES = {
// // // // //   A: { cx: 150, cy: 210, r: 85, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 80, y: 320 } },
// // // // //   B: { cx: 370, cy: 210, r: 85, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 440, y: 320 } }
// // // // // };
// // // // // const EQUAL_CIRCLES = {
// // // // //   A: { cx: 260, cy: 210, r: 110, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 180, y: 100 } },
// // // // //   B: { cx: 260, cy: 210, r: 110, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 340, y: 100 }, strokeDasharray: '6,4' }
// // // // // };

// // // // // // ----------------------------------------------------------------------------
// // // // // // Data
// // // // // // ----------------------------------------------------------------------------

// // // // // export const basicIdentitiesData = {
// // // // //   frame: {
// // // // //     title: 'Two-Set Basic Identities',
// // // // //     subtitle: 'Regions of interest in two-set algebra'
// // // // //   },
// // // // //   defaults: {
// // // // //     width: 520, height: 420, margin: 12,
// // // // //     backgroundColor: '#ffffff',
// // // // //     universe: { label: 'U', labelPosition: { x: 30, y: 32 }, stroke: '#cbd5e1', strokeWidth: 1, labelFontSize: 18, labelColor: '#64748b' },
// // // // //     circles: STD_CIRCLES
// // // // //   },
// // // // //   theme: { color: '#2563eb', opacity: 0.85, neutralFill: '#ffffff', outsideNeutralFill: '#ffffff' },
// // // // //   scenarios: [
// // // // //     { id: 'set-a', group: 'Basic Sets', name: 'Set A', symbol: 'A', definition: 'The set A.', example: 'A = {1,2,3,4}', highlight: ['A-only', 'A∩B'] },
// // // // //     { id: 'set-b', group: 'Basic Sets', name: 'Set B', symbol: 'B', definition: 'The set B.', example: 'B = {3,4,5,6}', highlight: ['B-only', 'A∩B'] },
// // // // //     { id: 'universe', group: 'Basic Sets', name: 'Universal Set', symbol: 'U', definition: 'Every element under consideration.', highlight: ['outside', 'A-only', 'B-only', 'A∩B'] },
// // // // //     { id: 'empty', group: 'Basic Sets', name: 'Empty Set', symbol: '∅', definition: 'The set with no elements.', highlight: [] },

// // // // //     { id: 'a-comp', group: 'Complements', name: 'Complement of A', symbol: "A'", definition: 'Everything in U not in A.', highlight: ['outside', 'B-only'] },
// // // // //     { id: 'b-comp', group: 'Complements', name: 'Complement of B', symbol: "B'", definition: 'Everything in U not in B.', highlight: ['outside', 'A-only'] },

// // // // //     { id: 'intersection', group: 'Intersection & Union', name: 'Intersection', symbol: 'A ∩ B', definition: 'Elements in both A and B.', example: 'A = {1,2,3,4}, B = {3,4,5,6} ⇒ {3,4}', highlight: ['A∩B'] },
// // // // //     { id: 'union', group: 'Intersection & Union', name: 'Union', symbol: 'A ∪ B', definition: 'Elements in A, in B, or both.', example: 'A = {1,2,3}, B = {3,4,5} ⇒ {1,2,3,4,5}', highlight: ['A-only', 'B-only', 'A∩B'] },

// // // // //     { id: 'a-minus-b', group: 'Differences', name: 'A minus B', symbol: 'A \\ B', definition: 'In A but not in B.', highlight: ['A-only'] },
// // // // //     { id: 'b-minus-a', group: 'Differences', name: 'B minus A', symbol: 'B \\ A', definition: 'In B but not in A.', highlight: ['B-only'] },
// // // // //     { id: 'symdiff', group: 'Differences', name: 'Symmetric Difference', symbol: 'A △ B', definition: 'In exactly one of A or B.', highlight: ['A-only', 'B-only'] },

// // // // //     { id: 'a-or-bcomp', group: 'Compound', name: "A union B'", symbol: "A ∪ B'", definition: "A plus everything outside B.", highlight: ['outside', 'A-only', 'A∩B'] },
// // // // //     { id: 'acomp-or-b', group: 'Compound', name: "A' union B", symbol: "A' ∪ B", definition: "Everything outside A plus B.", highlight: ['outside', 'B-only', 'A∩B'] },

// // // // //     { id: 'dm-1', group: "De Morgan's Laws", name: 'Complement of Union', symbol: "(A ∪ B)'", definition: "Outside both A and B.", highlight: ['outside'] },
// // // // //     { id: 'dm-2', group: "De Morgan's Laws", name: 'Complement of Intersection', symbol: "(A ∩ B)'", definition: 'Everything except the intersection.', highlight: ['outside', 'A-only', 'B-only'] },

// // // // //     { id: 'sub-a-b', group: 'Relations', name: 'A is a subset of B', symbol: 'A ⊆ B', definition: 'Every element of A is also in B.', circles: SUBSET_A_IN_B, highlight: ['A∩B'] },
// // // // //     { id: 'sub-b-a', group: 'Relations', name: 'B is a subset of A', symbol: 'B ⊆ A', definition: 'Every element of B is also in A.', circles: SUBSET_B_IN_A, highlight: ['A∩B'] },
// // // // //     { id: 'disjoint', group: 'Relations', name: 'Disjoint sets', symbol: 'A ∩ B = ∅', definition: 'A and B share no elements.', circles: DISJOINT_CIRCLES, highlight: ['A-only', 'B-only'] },
// // // // //     { id: 'equal', group: 'Relations', name: 'Equal sets', symbol: 'A = B', definition: 'A and B contain the same elements.', circles: EQUAL_CIRCLES, highlight: ['A∩B'] }
// // // // //   ]
// // // // // };

// // // // // const GROUP_ORDER = ['Basic Sets', 'Complements', 'Intersection & Union', 'Differences', 'Compound', "De Morgan's Laws", 'Relations'];

// // // // // // ----------------------------------------------------------------------------
// // // // // // Explorer
// // // // // // ----------------------------------------------------------------------------

// // // // // export const TwoSetsBasicIdentitiesExplorer = ({ data = basicIdentitiesData }) => {
// // // // //   const { frame, defaults, theme: defaultTheme, scenarios } = data;
// // // // //   const [currentId, setCurrentId] = useState(scenarios[0]?.id);
// // // // //   const [themeColor, setThemeColor] = useState(defaultTheme.color);
// // // // //   const [themeOpacity, setThemeOpacity] = useState(defaultTheme.opacity);

// // // // //   const grouped = useMemo(() => scenarios.reduce((acc, s) => {
// // // // //     const g = s.group || 'Other';
// // // // //     if (!acc[g]) acc[g] = [];
// // // // //     acc[g].push(s);
// // // // //     return acc;
// // // // //   }, {}), [scenarios]);
// // // // //   const groups = useMemo(() => {
// // // // //     const known = GROUP_ORDER.filter((g) => grouped[g]);
// // // // //     const extras = Object.keys(grouped).filter((g) => !GROUP_ORDER.includes(g));
// // // // //     return [...known, ...extras];
// // // // //   }, [grouped]);

// // // // //   const current = scenarios.find((s) => s.id === currentId) || scenarios[0];
// // // // //   const idx = scenarios.findIndex((s) => s.id === currentId);

// // // // //   const diagramProps = useMemo(() => ({
// // // // //     circles: current?.circles || defaults.circles,
// // // // //     width: defaults.width,
// // // // //     height: defaults.height,
// // // // //     margin: defaults.margin,
// // // // //     backgroundColor: defaults.backgroundColor,
// // // // //     universe: defaults.universe,
// // // // //     highlight: current?.highlight || [],
// // // // //     theme: { color: themeColor, opacity: themeOpacity, neutralFill: defaultTheme.neutralFill, outsideNeutralFill: defaultTheme.outsideNeutralFill }
// // // // //   }), [current, defaults, defaultTheme, themeColor, themeOpacity]);

// // // // //   const goPrev = () => setCurrentId(scenarios[(idx - 1 + scenarios.length) % scenarios.length].id);
// // // // //   const goNext = () => setCurrentId(scenarios[(idx + 1) % scenarios.length].id);
// // // // //   const resetTheme = () => { setThemeColor(defaultTheme.color); setThemeOpacity(defaultTheme.opacity); };

// // // // //   return (
// // // // //     <div style={s.container}>
// // // // //       <div style={s.header}>
// // // // //         <h1 style={s.title}>{frame.title}</h1>
// // // // //         <p style={s.subtitle}>{frame.subtitle}</p>
// // // // //       </div>

// // // // //       <div style={s.controls}>
// // // // //         <div style={s.btnGroups}>
// // // // //           {groups.map((g) => (
// // // // //             <div key={g} style={s.btnGroup}>
// // // // //               <span style={s.groupLabel}>{g}</span>
// // // // //               <div style={s.groupBtns}>
// // // // //                 {grouped[g].map((sc) => (
// // // // //                   <button key={sc.id} style={{ ...s.btn, ...(currentId === sc.id ? s.btnActive : {}) }}
// // // // //                     onClick={() => setCurrentId(sc.id)} title={sc.name}>{sc.symbol}</button>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //         <div style={s.dropdownWrap}>
// // // // //           <span style={s.groupLabel}>Jump to</span>
// // // // //           <select style={s.dropdown} value={currentId} onChange={(e) => setCurrentId(e.target.value)}>
// // // // //             {groups.map((g) => (
// // // // //               <optgroup key={g} label={g}>
// // // // //                 {grouped[g].map((sc) => <option key={sc.id} value={sc.id}>{sc.symbol} — {sc.name}</option>)}
// // // // //               </optgroup>
// // // // //             ))}
// // // // //           </select>
// // // // //         </div>
// // // // //       </div>

// // // // //       <div style={s.main}>
// // // // //         <div style={s.col}>
// // // // //           <div style={s.panel}>
// // // // //             <div style={s.panelHead}>
// // // // //               <span style={s.panelTitle}>Diagram</span>
// // // // //               <span style={s.badge}>{current?.symbol}</span>
// // // // //             </div>
// // // // //             <div style={s.diagramBox}>
// // // // //               <Venncore {...diagramProps} />
// // // // //             </div>
// // // // //           </div>

// // // // //           <div style={s.panel}>
// // // // //             <div style={s.panelHead}>
// // // // //               <span style={s.panelTitle}>Theme</span>
// // // // //               <button style={s.reset} onClick={resetTheme}>Reset</button>
// // // // //             </div>
// // // // //             <div style={s.themeBody}>
// // // // //               <span style={s.tLabel}>Color</span>
// // // // //               <input type="color" style={s.color} value={themeColor} onChange={(e) => setThemeColor(e.target.value)} />
// // // // //               <span style={s.tLabel}>Opacity</span>
// // // // //               <input type="range" min="0" max="1" step="0.05" style={s.range} value={themeOpacity} onChange={(e) => setThemeOpacity(parseFloat(e.target.value))} />
// // // // //               <span style={s.opVal}>{themeOpacity.toFixed(2)}</span>
// // // // //             </div>
// // // // //           </div>

// // // // //           <div style={s.nav}>
// // // // //             <button style={s.navBtn} onClick={goPrev}>← Previous</button>
// // // // //             <span style={s.counter}>{idx + 1} / {scenarios.length}</span>
// // // // //             <button style={s.navBtn} onClick={goNext}>Next →</button>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div style={s.explanationPanel}>
// // // // //           <div style={s.panelHead}><span style={s.panelTitle}>Explanation</span></div>
// // // // //           <div style={s.explanationBody}>
// // // // //             <div style={s.scTitle}>
// // // // //               <h2 style={s.scName}>{current?.name}</h2>
// // // // //               <div style={s.scSymbol}>{current?.symbol}</div>
// // // // //             </div>
// // // // //             <div style={s.section}>
// // // // //               <h3 style={s.sectionTitle}>Definition</h3>
// // // // //               <p style={s.sectionText}>{current?.definition || ''}</p>
// // // // //             </div>
// // // // //             {current?.example && (
// // // // //               <div style={s.section}>
// // // // //                 <h3 style={s.sectionTitle}>Example</h3>
// // // // //                 <p style={s.sectionText}>{current.example}</p>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // const s = {
// // // // //   container: { fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", maxWidth: '1440px', margin: '0 auto', padding: '24px', backgroundColor: '#f8fafc', minHeight: '100vh' },
// // // // //   header: { textAlign: 'center', marginBottom: '20px', padding: '16px 20px', backgroundColor: '#245de1', borderRadius: '12px', color: '#fff', boxShadow: '0 4px 20px rgba(36,93,225,0.3)' },
// // // // //   title: { margin: '0 0 4px 0', fontSize: '28px', fontWeight: '700', letterSpacing: '-0.5px' },
// // // // //   subtitle: { margin: 0, fontSize: '14px', opacity: 0.9 },
// // // // //   controls: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '16px 20px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px', flexWrap: 'wrap' },
// // // // //   btnGroups: { display: 'flex', flexWrap: 'wrap', gap: '16px', flex: 1 },
// // // // //   btnGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
// // // // //   groupLabel: { fontSize: '10px', fontWeight: '600', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' },
// // // // //   groupBtns: { display: 'flex', gap: '4px', flexWrap: 'wrap' },
// // // // //   btn: { padding: '6px 10px', fontSize: '12px', fontWeight: '600', color: '#64748b', backgroundColor: '#f1f5f9', border: '2px solid transparent', borderRadius: '6px', cursor: 'pointer', fontFamily: "'Cambria Math','Times New Roman',serif", whiteSpace: 'nowrap' },
// // // // //   btnActive: { color: '#245de1', backgroundColor: '#e8effd', borderColor: '#245de1' },
// // // // //   dropdownWrap: { display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '200px' },
// // // // //   dropdown: { width: '100%', padding: '8px 12px', fontSize: '13px', fontWeight: '500', color: '#334155', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer', outline: 'none' },
// // // // //   main: { display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' },
// // // // //   col: { flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '12px' },
// // // // //   panel: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', overflow: 'hidden' },
// // // // //   panelHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' },
// // // // //   panelTitle: { fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' },
// // // // //   badge: { padding: '3px 10px', backgroundColor: '#245de1', color: '#fff', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
// // // // //   diagramBox: { padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '420px' },
// // // // //   themeBody: { padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' },
// // // // //   tLabel: { fontSize: '12px', fontWeight: '600', color: '#64748b' },
// // // // //   color: { width: '36px', height: '28px', border: '1px solid #cbd5e1', borderRadius: '4px', cursor: 'pointer', padding: '2px', background: '#fff' },
// // // // //   range: { flex: 1, cursor: 'pointer' },
// // // // //   opVal: { fontSize: '12px', color: '#64748b', minWidth: '36px', fontFamily: 'monospace' },
// // // // //   reset: { padding: '4px 12px', fontSize: '11px', fontWeight: '600', color: '#64748b', backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '4px', cursor: 'pointer' },
// // // // //   nav: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '12px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' },
// // // // //   navBtn: { padding: '8px 20px', fontSize: '13px', fontWeight: '600', color: '#fff', backgroundColor: '#245de1', border: 'none', borderRadius: '6px', cursor: 'pointer' },
// // // // //   counter: { fontSize: '13px', fontWeight: '600', color: '#64748b', minWidth: '70px', textAlign: 'center' },
// // // // //   explanationPanel: { flex: '1 1 350px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', overflow: 'hidden', display: 'flex', flexDirection: 'column' },
// // // // //   explanationBody: { padding: '20px' },
// // // // //   scTitle: { marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #e2e8f0' },
// // // // //   scName: { margin: '0 0 6px 0', fontSize: '20px', fontWeight: '700', color: '#1e293b' },
// // // // //   scSymbol: { display: 'inline-block', padding: '6px 12px', backgroundColor: '#f1f5f9', borderRadius: '6px', fontSize: '18px', fontWeight: '600', color: '#245de1', fontFamily: "'Cambria Math','Times New Roman',serif" },
// // // // //   section: { marginBottom: '16px' },
// // // // //   sectionTitle: { margin: '0 0 6px 0', fontSize: '11px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' },
// // // // //   sectionText: { margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#475569' }
// // // // // };



// // // // 'use client';

// // // // // ============================================================================
// // // // // TWO-SETS BASIC IDENTITIES — operations/regions of interest on 2 sets
// // // // // ============================================================================
// // // // // One diagram per scenario. Imports renderer + helpers from venn-core.
// // // // // ============================================================================

// // // // import React, { useState, useMemo } from 'react';
// // // // import { Venncore } from './Venncore';

// // // // // ----------------------------------------------------------------------------
// // // // // Geometries
// // // // // ----------------------------------------------------------------------------

// // // // const CIRCLE_STROKE = '#1e293b';
// // // // const STROKE_W = 1;

// // // // const STD_CIRCLES = {
// // // //   A: { cx: 200, cy: 210, r: 110, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 130, y: 320 } },
// // // //   B: { cx: 320, cy: 210, r: 110, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 390, y: 320 } }
// // // // };
// // // // const SUBSET_A_IN_B = {
// // // //   A: { cx: 280, cy: 210, r: 55, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 280, y: 280 } },
// // // //   B: { cx: 260, cy: 210, r: 130, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 130, y: 340 } }
// // // // };
// // // // const SUBSET_B_IN_A = {
// // // //   A: { cx: 260, cy: 210, r: 130, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 130, y: 340 } },
// // // //   B: { cx: 280, cy: 210, r: 55, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 280, y: 280 } }
// // // // };
// // // // const DISJOINT_CIRCLES = {
// // // //   A: { cx: 150, cy: 210, r: 85, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 80, y: 320 } },
// // // //   B: { cx: 370, cy: 210, r: 85, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 440, y: 320 } }
// // // // };
// // // // const EQUAL_CIRCLES = {
// // // //   A: { cx: 260, cy: 210, r: 110, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 180, y: 100 } },
// // // //   B: { cx: 260, cy: 210, r: 110, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 340, y: 100 }, strokeDasharray: '6,4' }
// // // // };

// // // // // ----------------------------------------------------------------------------
// // // // // Data
// // // // // ----------------------------------------------------------------------------

// // // // export const basicIdentitiesData = {
// // // //   frame: {
// // // //     title: 'Two-Set Basic Identities',
// // // //     subtitle: 'Regions of interest in two-set algebra'
// // // //   },
// // // //   defaults: {
// // // //     width: 520, height: 420, margin: 12,
// // // //     backgroundColor: '#ffffff',
// // // //     universe: { label: 'U', labelPosition: { x: 30, y: 32 }, stroke: '#cbd5e1', strokeWidth: 1, labelFontSize: 18, labelColor: '#64748b' },
// // // //     circles: STD_CIRCLES
// // // //   },
// // // //   theme: { color: '#2563eb', opacity: 0.85, neutralFill: '#ffffff', outsideNeutralFill: '#ffffff' },
// // // //   scenarios: [
// // // //     { id: 'set-a', group: 'Basic Sets', name: 'Set A', symbol: 'A', definition: 'The set A.', example: 'A = {1,2,3,4}', highlight: ['A-only', 'A∩B'] },
// // // //     { id: 'set-b', group: 'Basic Sets', name: 'Set B', symbol: 'B', definition: 'The set B.', example: 'B = {3,4,5,6}', highlight: ['B-only', 'A∩B'] },
// // // //     { id: 'universe', group: 'Basic Sets', name: 'Universal Set', symbol: 'U', definition: 'Every element under consideration.', highlight: ['outside', 'A-only', 'B-only', 'A∩B'] },
// // // //     { id: 'empty', group: 'Basic Sets', name: 'Empty Set', symbol: '∅', definition: 'The set with no elements.', highlight: [] },

// // // //     { id: 'a-comp', group: 'Complements', name: 'Complement of A', symbol: "A'", definition: 'Everything in U not in A.', highlight: ['outside', 'B-only'] },
// // // //     { id: 'b-comp', group: 'Complements', name: 'Complement of B', symbol: "B'", definition: 'Everything in U not in B.', highlight: ['outside', 'A-only'] },

// // // //     { id: 'intersection', group: 'Intersection & Union', name: 'Intersection', symbol: 'A ∩ B', definition: 'Elements in both A and B.', example: 'A = {1,2,3,4}, B = {3,4,5,6} ⇒ {3,4}', highlight: ['A∩B'] },
// // // //     { id: 'union', group: 'Intersection & Union', name: 'Union', symbol: 'A ∪ B', definition: 'Elements in A, in B, or both.', example: 'A = {1,2,3}, B = {3,4,5} ⇒ {1,2,3,4,5}', highlight: ['A-only', 'B-only', 'A∩B'] },

// // // //     { id: 'a-minus-b', group: 'Differences', name: 'A minus B', symbol: 'A \\ B', definition: 'In A but not in B.', highlight: ['A-only'] },
// // // //     { id: 'b-minus-a', group: 'Differences', name: 'B minus A', symbol: 'B \\ A', definition: 'In B but not in A.', highlight: ['B-only'] },
// // // //     { id: 'symdiff', group: 'Differences', name: 'Symmetric Difference', symbol: 'A △ B', definition: 'In exactly one of A or B.', highlight: ['A-only', 'B-only'] },

// // // //     { id: 'a-or-bcomp', group: 'Compound', name: "A union B'", symbol: "A ∪ B'", definition: "A plus everything outside B.", highlight: ['outside', 'A-only', 'A∩B'] },
// // // //     { id: 'acomp-or-b', group: 'Compound', name: "A' union B", symbol: "A' ∪ B", definition: "Everything outside A plus B.", highlight: ['outside', 'B-only', 'A∩B'] },

// // // //     { id: 'dm-1', group: "De Morgan's Laws", name: 'Complement of Union', symbol: "(A ∪ B)'", definition: "Outside both A and B.", highlight: ['outside'] },
// // // //     { id: 'dm-2', group: "De Morgan's Laws", name: 'Complement of Intersection', symbol: "(A ∩ B)'", definition: 'Everything except the intersection.', highlight: ['outside', 'A-only', 'B-only'] },

// // // //     { id: 'sub-a-b', group: 'Relations', name: 'A is a subset of B', symbol: 'A ⊆ B', definition: 'Every element of A is also in B.', circles: SUBSET_A_IN_B, highlight: ['A∩B'] },
// // // //     { id: 'sub-b-a', group: 'Relations', name: 'B is a subset of A', symbol: 'B ⊆ A', definition: 'Every element of B is also in A.', circles: SUBSET_B_IN_A, highlight: ['A∩B'] },
// // // //     { id: 'disjoint', group: 'Relations', name: 'Disjoint sets', symbol: 'A ∩ B = ∅', definition: 'A and B share no elements.', circles: DISJOINT_CIRCLES, highlight: ['A-only', 'B-only'] },
// // // //     { id: 'equal', group: 'Relations', name: 'Equal sets', symbol: 'A = B', definition: 'A and B contain the same elements.', circles: EQUAL_CIRCLES, highlight: ['A∩B'] }
// // // //   ]
// // // // };

// // // // const GROUP_ORDER = ['Basic Sets', 'Complements', 'Intersection & Union', 'Differences', 'Compound', "De Morgan's Laws", 'Relations'];

// // // // // ----------------------------------------------------------------------------
// // // // // Explorer
// // // // // ----------------------------------------------------------------------------

// // // // export const TwoSetsBasicIdentitiesExplorer = ({ data = basicIdentitiesData }) => {
// // // //   const { frame, defaults, theme: defaultTheme, scenarios } = data;
// // // //   const [currentId, setCurrentId] = useState(scenarios[0]?.id);
// // // //   const [themeColor, setThemeColor] = useState(defaultTheme.color);
// // // //   const [themeOpacity, setThemeOpacity] = useState(defaultTheme.opacity);

// // // //   const grouped = useMemo(() => scenarios.reduce((acc, s) => {
// // // //     const g = s.group || 'Other';
// // // //     if (!acc[g]) acc[g] = [];
// // // //     acc[g].push(s);
// // // //     return acc;
// // // //   }, {}), [scenarios]);
// // // //   const groups = useMemo(() => {
// // // //     const known = GROUP_ORDER.filter((g) => grouped[g]);
// // // //     const extras = Object.keys(grouped).filter((g) => !GROUP_ORDER.includes(g));
// // // //     return [...known, ...extras];
// // // //   }, [grouped]);

// // // //   const current = scenarios.find((s) => s.id === currentId) || scenarios[0];
// // // //   const idx = scenarios.findIndex((s) => s.id === currentId);

// // // //   const diagramProps = useMemo(() => ({
// // // //     circles: current?.circles || defaults.circles,
// // // //     width: defaults.width,
// // // //     height: defaults.height,
// // // //     margin: defaults.margin,
// // // //     backgroundColor: defaults.backgroundColor,
// // // //     universe: defaults.universe,
// // // //     highlight: current?.highlight || [],
// // // //     theme: { color: themeColor, opacity: themeOpacity, neutralFill: defaultTheme.neutralFill, outsideNeutralFill: defaultTheme.outsideNeutralFill }
// // // //   }), [current, defaults, defaultTheme, themeColor, themeOpacity]);

// // // //   const goPrev = () => setCurrentId(scenarios[(idx - 1 + scenarios.length) % scenarios.length].id);
// // // //   const goNext = () => setCurrentId(scenarios[(idx + 1) % scenarios.length].id);
// // // //   const resetTheme = () => { setThemeColor(defaultTheme.color); setThemeOpacity(defaultTheme.opacity); };

// // // //   return (
// // // //     <div style={s.container}>
// // // //       <div style={s.header}>
// // // //         {/* <h1 style={s.title}>{frame.title}</h1> */}
// // // //         <p style={s.subtitle}>{frame.subtitle}</p>
// // // //       </div>

// // // //       <div style={s.controls}>
// // // //         <div style={s.btnGroups}>
// // // //           {groups.map((g) => (
// // // //             <div key={g} style={s.btnGroup}>
// // // //               <span style={s.groupLabel}>{g}</span>
// // // //               <div style={s.groupBtns}>
// // // //                 {grouped[g].map((sc) => (
// // // //                   <button key={sc.id} style={{ ...s.btn, ...(currentId === sc.id ? s.btnActive : {}) }}
// // // //                     onClick={() => setCurrentId(sc.id)} title={sc.name}>{sc.symbol}</button>
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //         <div style={s.dropdownWrap}>
// // // //           <span style={s.groupLabel}>Jump to</span>
// // // //           <select style={s.dropdown} value={currentId} onChange={(e) => setCurrentId(e.target.value)}>
// // // //             {groups.map((g) => (
// // // //               <optgroup key={g} label={g}>
// // // //                 {grouped[g].map((sc) => <option key={sc.id} value={sc.id}>{sc.symbol} — {sc.name}</option>)}
// // // //               </optgroup>
// // // //             ))}
// // // //           </select>
// // // //         </div>
// // // //       </div>

// // // //       <div style={s.main}>
// // // //         <div style={s.col}>
// // // //           <div style={s.panel}>
// // // //             <div style={s.panelHead}>
// // // //               <span style={s.panelTitle}>Diagram</span>
// // // //               <span style={s.badge}>{current?.symbol}</span>
// // // //             </div>
// // // //             <div style={s.diagramBox}>
// // // //               <Venncore {...diagramProps} />
// // // //             </div>
// // // //           </div>

// // // //           <div style={s.panel}>
// // // //             <div style={s.panelHead}>
// // // //               <span style={s.panelTitle}>Theme</span>
// // // //               <button style={s.reset} onClick={resetTheme}>Reset</button>
// // // //             </div>
// // // //             <div style={s.themeBody}>
// // // //               <span style={s.tLabel}>Color</span>
// // // //               <input type="color" style={s.color} value={themeColor} onChange={(e) => setThemeColor(e.target.value)} />
// // // //               <span style={s.tLabel}>Opacity</span>
// // // //               <input type="range" min="0" max="1" step="0.05" style={s.range} value={themeOpacity} onChange={(e) => setThemeOpacity(parseFloat(e.target.value))} />
// // // //               <span style={s.opVal}>{themeOpacity.toFixed(2)}</span>
// // // //             </div>
// // // //           </div>

// // // //           <div style={s.nav}>
// // // //             <button style={s.navBtn} onClick={goPrev}>← Previous</button>
// // // //             <span style={s.counter}>{idx + 1} / {scenarios.length}</span>
// // // //             <button style={s.navBtn} onClick={goNext}>Next →</button>
// // // //           </div>
// // // //         </div>

// // // //         <div style={s.explanationPanel}>
// // // //           <div style={s.panelHead}><span style={s.panelTitle}>Explanation</span></div>
// // // //           <div style={s.explanationBody}>
// // // //             <div style={s.scTitle}>
// // // //               <h2 style={s.scName}>{current?.name}</h2>
// // // //               <div style={s.scSymbol}>{current?.symbol}</div>
// // // //             </div>
// // // //             <div style={s.section}>
// // // //               <h3 style={s.sectionTitle}>Definition</h3>
// // // //               <p style={s.sectionText}>{current?.definition || ''}</p>
// // // //             </div>
// // // //             {current?.example && (
// // // //               <div style={s.section}>
// // // //                 <h3 style={s.sectionTitle}>Example</h3>
// // // //                 <p style={s.sectionText}>{current.example}</p>
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const s = {
// // // //   container: { fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", maxWidth: '1440px', margin: '0 auto', padding: '24px', backgroundColor: '#f8fafc', minHeight: '100vh' },
// // // //   header: { textAlign: 'center', marginBottom: '20px', padding: '16px 20px', backgroundColor: '#245de1', borderRadius: '12px', color: '#fff', boxShadow: '0 4px 20px rgba(36,93,225,0.3)' },
// // // //   title: { margin: '0 0 4px 0', fontSize: '28px', fontWeight: '700', letterSpacing: '-0.5px' },
// // // //   subtitle: { margin: 0, fontSize: '14px', opacity: 0.9 },
// // // //   controls: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '16px 20px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px', flexWrap: 'wrap' },
// // // //   btnGroups: { display: 'flex', flexWrap: 'wrap', gap: '16px', flex: 1 },
// // // //   btnGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
// // // //   groupLabel: { fontSize: '10px', fontWeight: '600', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' },
// // // //   groupBtns: { display: 'flex', gap: '4px', flexWrap: 'wrap' },
// // // //   btn: { padding: '6px 10px', fontSize: '12px', fontWeight: '600', color: '#64748b', backgroundColor: '#f1f5f9', border: '2px solid transparent', borderRadius: '6px', cursor: 'pointer', fontFamily: "'Cambria Math','Times New Roman',serif", whiteSpace: 'nowrap' },
// // // //   btnActive: { color: '#245de1', backgroundColor: '#e8effd', borderColor: '#245de1' },
// // // //   dropdownWrap: { display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '200px' },
// // // //   dropdown: { width: '100%', padding: '8px 12px', fontSize: '13px', fontWeight: '500', color: '#334155', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer', outline: 'none' },
// // // //   main: { display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' },
// // // //   col: { flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '12px' },
// // // //   panel: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', overflow: 'hidden' },
// // // //   panelHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' },
// // // //   panelTitle: { fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' },
// // // //   badge: { padding: '3px 10px', backgroundColor: '#245de1', color: '#fff', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
// // // //   diagramBox: { padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '420px' },
// // // //   themeBody: { padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' },
// // // //   tLabel: { fontSize: '12px', fontWeight: '600', color: '#64748b' },
// // // //   color: { width: '36px', height: '28px', border: '1px solid #cbd5e1', borderRadius: '4px', cursor: 'pointer', padding: '2px', background: '#fff' },
// // // //   range: { flex: 1, cursor: 'pointer' },
// // // //   opVal: { fontSize: '12px', color: '#64748b', minWidth: '36px', fontFamily: 'monospace' },
// // // //   reset: { padding: '4px 12px', fontSize: '11px', fontWeight: '600', color: '#64748b', backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '4px', cursor: 'pointer' },
// // // //   nav: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '12px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' },
// // // //   navBtn: { padding: '8px 20px', fontSize: '13px', fontWeight: '600', color: '#fff', backgroundColor: '#245de1', border: 'none', borderRadius: '6px', cursor: 'pointer' },
// // // //   counter: { fontSize: '13px', fontWeight: '600', color: '#64748b', minWidth: '70px', textAlign: 'center' },
// // // //   explanationPanel: { flex: '1 1 350px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', overflow: 'hidden', display: 'flex', flexDirection: 'column' },
// // // //   explanationBody: { padding: '20px' },
// // // //   scTitle: { marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #e2e8f0' },
// // // //   scName: { margin: '0 0 6px 0', fontSize: '20px', fontWeight: '700', color: '#1e293b' },
// // // //   scSymbol: { display: 'inline-block', padding: '6px 12px', backgroundColor: '#f1f5f9', borderRadius: '6px', fontSize: '18px', fontWeight: '600', color: '#245de1', fontFamily: "'Cambria Math','Times New Roman',serif" },
// // // //   section: { marginBottom: '16px' },
// // // //   sectionTitle: { margin: '0 0 6px 0', fontSize: '11px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' },
// // // //   sectionText: { margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#475569' }
// // // // };

// // // // export default TwoSetsBasicIdentitiesExplorer;



// // // 'use client';

// // // // ============================================================================
// // // // TWO-SETS BASIC IDENTITIES — operations/regions of interest on 2 sets
// // // // ============================================================================

// // // import React, { useState, useMemo } from 'react';
// // // import { Venncore, ExplanationsPanel } from './Venncore';

// // // const CIRCLE_STROKE = '#1e293b';
// // // const STROKE_W = 1;

// // // const STD_CIRCLES = {
// // //   A: { cx: 200, cy: 210, r: 110, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 130, y: 320 } },
// // //   B: { cx: 320, cy: 210, r: 110, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 390, y: 320 } }
// // // };
// // // const SUBSET_A_IN_B = {
// // //   A: { cx: 280, cy: 210, r: 55, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 280, y: 280 } },
// // //   B: { cx: 260, cy: 210, r: 130, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 130, y: 340 } }
// // // };
// // // const SUBSET_B_IN_A = {
// // //   A: { cx: 260, cy: 210, r: 130, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 130, y: 340 } },
// // //   B: { cx: 280, cy: 210, r: 55, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 280, y: 280 } }
// // // };
// // // const DISJOINT_CIRCLES = {
// // //   A: { cx: 150, cy: 210, r: 85, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 80, y: 320 } },
// // //   B: { cx: 370, cy: 210, r: 85, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 440, y: 320 } }
// // // };
// // // const EQUAL_CIRCLES = {
// // //   A: { cx: 260, cy: 210, r: 110, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 180, y: 100 } },
// // //   B: { cx: 260, cy: 210, r: 110, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 340, y: 100 }, strokeDasharray: '6,4' }
// // // };

// // // export const basicIdentitiesData = {
// // //   frame: {
// // //     title: 'Two-Set Basic Identities',
// // //     subtitle: 'Regions of interest in two-set algebra'
// // //   },
// // //   defaults: {
// // //     width: 520, height: 420, margin: 12,
// // //     backgroundColor: '#ffffff',
// // //     universe: { label: 'U', labelPosition: { x: 30, y: 32 }, stroke: '#cbd5e1', strokeWidth: 1, labelFontSize: 18, labelColor: '#64748b' },
// // //     circles: STD_CIRCLES
// // //   },
// // //   theme: { color: '#2563eb', opacity: 0.85, neutralFill: '#ffffff', outsideNeutralFill: '#ffffff' },
// // //   scenarios: [
// // //     { id: 'set-a', group: 'Basic Sets', name: 'Set A', symbol: 'A', definition: 'The set A.', example: 'A = {1,2,3,4}', highlight: ['A-only', 'A∩B'] },
// // //     { id: 'set-b', group: 'Basic Sets', name: 'Set B', symbol: 'B', definition: 'The set B.', example: 'B = {3,4,5,6}', highlight: ['B-only', 'A∩B'] },
// // //     { id: 'universe', group: 'Basic Sets', name: 'Universal Set', symbol: 'U', definition: 'Every element under consideration.', highlight: ['outside', 'A-only', 'B-only', 'A∩B'] },
// // //     { id: 'empty', group: 'Basic Sets', name: 'Empty Set', symbol: '∅', definition: 'The set with no elements.', highlight: [] },

// // //     { id: 'a-comp', group: 'Complements', name: 'Complement of A', symbol: "A'", definition: 'Everything in U not in A.', highlight: ['outside', 'B-only'] },
// // //     { id: 'b-comp', group: 'Complements', name: 'Complement of B', symbol: "B'", definition: 'Everything in U not in B.', highlight: ['outside', 'A-only'] },

// // //     { id: 'intersection', group: 'Intersection & Union', name: 'Intersection', symbol: 'A ∩ B', definition: 'Elements in both A and B.', example: 'A = {1,2,3,4}, B = {3,4,5,6} ⇒ {3,4}', highlight: ['A∩B'] },
// // //     { id: 'union', group: 'Intersection & Union', name: 'Union', symbol: 'A ∪ B', definition: 'Elements in A, in B, or both.', example: 'A = {1,2,3}, B = {3,4,5} ⇒ {1,2,3,4,5}', highlight: ['A-only', 'B-only', 'A∩B'] },

// // //     { id: 'a-minus-b', group: 'Differences', name: 'A minus B', symbol: 'A \\ B', definition: 'In A but not in B.', highlight: ['A-only'] },
// // //     { id: 'b-minus-a', group: 'Differences', name: 'B minus A', symbol: 'B \\ A', definition: 'In B but not in A.', highlight: ['B-only'] },
// // //     { id: 'symdiff', group: 'Differences', name: 'Symmetric Difference', symbol: 'A △ B', definition: 'In exactly one of A or B.', highlight: ['A-only', 'B-only'] },

// // //     { id: 'a-or-bcomp', group: 'Compound', name: "A union B'", symbol: "A ∪ B'", definition: "A plus everything outside B.", highlight: ['outside', 'A-only', 'A∩B'] },
// // //     { id: 'acomp-or-b', group: 'Compound', name: "A' union B", symbol: "A' ∪ B", definition: "Everything outside A plus B.", highlight: ['outside', 'B-only', 'A∩B'] },

// // //     { id: 'dm-1', group: "De Morgan's Laws", name: 'Complement of Union', symbol: "(A ∪ B)'", definition: "Outside both A and B.", highlight: ['outside'] },
// // //     { id: 'dm-2', group: "De Morgan's Laws", name: 'Complement of Intersection', symbol: "(A ∩ B)'", definition: 'Everything except the intersection.', highlight: ['outside', 'A-only', 'B-only'] },

// // //     { id: 'sub-a-b', group: 'Relations', name: 'A is a subset of B', symbol: 'A ⊆ B', definition: 'Every element of A is also in B.', circles: SUBSET_A_IN_B, highlight: ['A∩B'] },
// // //     { id: 'sub-b-a', group: 'Relations', name: 'B is a subset of A', symbol: 'B ⊆ A', definition: 'Every element of B is also in A.', circles: SUBSET_B_IN_A, highlight: ['A∩B'] },
// // //     { id: 'disjoint', group: 'Relations', name: 'Disjoint sets', symbol: 'A ∩ B = ∅', definition: 'A and B share no elements.', circles: DISJOINT_CIRCLES, highlight: ['A-only', 'B-only'] },
// // //     { id: 'equal', group: 'Relations', name: 'Equal sets', symbol: 'A = B', definition: 'A and B contain the same elements.', circles: EQUAL_CIRCLES, highlight: ['A∩B'] }
// // //   ]
// // // };

// // // const GROUP_ORDER = ['Basic Sets', 'Complements', 'Intersection & Union', 'Differences', 'Compound', "De Morgan's Laws", 'Relations'];

// // // export const TwoSetsBasicIdentitiesExplorer = ({ data = basicIdentitiesData, explanations = null }) => {
// // //   const { frame, defaults, theme: defaultTheme, scenarios } = data;
// // //   const [currentId, setCurrentId] = useState(scenarios[0]?.id);
// // //   const [themeColor, setThemeColor] = useState(defaultTheme.color);
// // //   const [themeOpacity, setThemeOpacity] = useState(defaultTheme.opacity);

// // //   const grouped = useMemo(() => scenarios.reduce((acc, sc) => {
// // //     const g = sc.group || 'Other';
// // //     if (!acc[g]) acc[g] = [];
// // //     acc[g].push(sc);
// // //     return acc;
// // //   }, {}), [scenarios]);
// // //   const groups = useMemo(() => {
// // //     const known = GROUP_ORDER.filter((g) => grouped[g]);
// // //     const extras = Object.keys(grouped).filter((g) => !GROUP_ORDER.includes(g));
// // //     return [...known, ...extras];
// // //   }, [grouped]);

// // //   const current = scenarios.find((sc) => sc.id === currentId) || scenarios[0];
// // //   const idx = scenarios.findIndex((sc) => sc.id === currentId);

// // //   const diagramProps = useMemo(() => ({
// // //     circles: current?.circles || defaults.circles,
// // //     width: defaults.width,
// // //     height: defaults.height,
// // //     margin: defaults.margin,
// // //     backgroundColor: defaults.backgroundColor,
// // //     universe: defaults.universe,
// // //     highlight: current?.highlight || [],
// // //     theme: { color: themeColor, opacity: themeOpacity, neutralFill: defaultTheme.neutralFill, outsideNeutralFill: defaultTheme.outsideNeutralFill }
// // //   }), [current, defaults, defaultTheme, themeColor, themeOpacity]);

// // //   const goPrev = () => setCurrentId(scenarios[(idx - 1 + scenarios.length) % scenarios.length].id);
// // //   const goNext = () => setCurrentId(scenarios[(idx + 1) % scenarios.length].id);
// // //   const resetTheme = () => { setThemeColor(defaultTheme.color); setThemeOpacity(defaultTheme.opacity); };

// // //   return (
// // //     <div style={s.container}>
// // //       <div style={s.header}>
// // //         <p style={s.subtitle}>{frame.subtitle}</p>
// // //       </div>

// // //       <div style={s.controls}>
// // //         <div style={s.btnGroups}>
// // //           {groups.map((g) => (
// // //             <div key={g} style={s.btnGroup}>
// // //               <span style={s.groupLabel}>{g}</span>
// // //               <div style={s.groupBtns}>
// // //                 {grouped[g].map((sc) => (
// // //                   <button key={sc.id} style={{ ...s.btn, ...(currentId === sc.id ? s.btnActive : {}) }}
// // //                     onClick={() => setCurrentId(sc.id)} title={sc.name}>{sc.symbol}</button>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //         <div style={s.dropdownWrap}>
// // //           <span style={s.groupLabel}>Jump to</span>
// // //           <select style={s.dropdown} value={currentId} onChange={(e) => setCurrentId(e.target.value)}>
// // //             {groups.map((g) => (
// // //               <optgroup key={g} label={g}>
// // //                 {grouped[g].map((sc) => <option key={sc.id} value={sc.id}>{sc.symbol} — {sc.name}</option>)}
// // //               </optgroup>
// // //             ))}
// // //           </select>
// // //         </div>
// // //       </div>

// // //       <div style={s.main}>
// // //         <div style={s.col}>
// // //           <div style={s.panel}>
// // //             <div style={s.panelHead}>
// // //               <span style={s.panelTitle}>Diagram</span>
// // //               <span style={s.badge}>{current?.symbol}</span>
// // //             </div>
// // //             <div style={s.diagramBox}>
// // //               <Venncore {...diagramProps} />
// // //             </div>
// // //           </div>

// // //           <div style={s.panel}>
// // //             <div style={s.panelHead}>
// // //               <span style={s.panelTitle}>Theme</span>
// // //               <button style={s.reset} onClick={resetTheme}>Reset</button>
// // //             </div>
// // //             <div style={s.themeBody}>
// // //               <span style={s.tLabel}>Color</span>
// // //               <input type="color" style={s.color} value={themeColor} onChange={(e) => setThemeColor(e.target.value)} />
// // //               <span style={s.tLabel}>Opacity</span>
// // //               <input type="range" min="0" max="1" step="0.05" style={s.range} value={themeOpacity} onChange={(e) => setThemeOpacity(parseFloat(e.target.value))} />
// // //               <span style={s.opVal}>{themeOpacity.toFixed(2)}</span>
// // //             </div>
// // //           </div>

// // //           <div style={s.nav}>
// // //             <button style={s.navBtn} onClick={goPrev}>← Previous</button>
// // //             <span style={s.counter}>{idx + 1} / {scenarios.length}</span>
// // //             <button style={s.navBtn} onClick={goNext}>Next →</button>
// // //           </div>
// // //         </div>

// // //         <ExplanationsPanel
// // //           current={current}
// // //           explanations={explanations}
// // //           headTitle="Explanation"
// // //           defaultTabLabel="Overview"
// // //           style={s.explanationPanel}
// // //         />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const s = {
// // //   container: { fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", maxWidth: '1440px', margin: '0 auto', padding: '24px', backgroundColor: '#f8fafc', minHeight: '100vh' },
// // //   header: { textAlign: 'center', marginBottom: '20px', padding: '16px 20px', backgroundColor: '#245de1', borderRadius: '12px', color: '#fff', boxShadow: '0 4px 20px rgba(36,93,225,0.3)' },
// // //   title: { margin: '0 0 4px 0', fontSize: '28px', fontWeight: '700', letterSpacing: '-0.5px' },
// // //   subtitle: { margin: 0, fontSize: '14px', opacity: 0.9 },
// // //   controls: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '16px 20px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px', flexWrap: 'wrap' },
// // //   btnGroups: { display: 'flex', flexWrap: 'wrap', gap: '16px', flex: 1 },
// // //   btnGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
// // //   groupLabel: { fontSize: '10px', fontWeight: '600', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' },
// // //   groupBtns: { display: 'flex', gap: '4px', flexWrap: 'wrap' },
// // //   btn: { padding: '6px 10px', fontSize: '12px', fontWeight: '600', color: '#64748b', backgroundColor: '#f1f5f9', border: '2px solid transparent', borderRadius: '6px', cursor: 'pointer', fontFamily: "'Cambria Math','Times New Roman',serif", whiteSpace: 'nowrap' },
// // //   btnActive: { color: '#245de1', backgroundColor: '#e8effd', borderColor: '#245de1' },
// // //   dropdownWrap: { display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '200px' },
// // //   dropdown: { width: '100%', padding: '8px 12px', fontSize: '13px', fontWeight: '500', color: '#334155', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer', outline: 'none' },
// // //   main: { display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' },
// // //   col: { flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '12px' },
// // //   panel: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', overflow: 'hidden' },
// // //   panelHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' },
// // //   panelTitle: { fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' },
// // //   badge: { padding: '3px 10px', backgroundColor: '#245de1', color: '#fff', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
// // //   diagramBox: { padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '420px' },
// // //   themeBody: { padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' },
// // //   tLabel: { fontSize: '12px', fontWeight: '600', color: '#64748b' },
// // //   color: { width: '36px', height: '28px', border: '1px solid #cbd5e1', borderRadius: '4px', cursor: 'pointer', padding: '2px', background: '#fff' },
// // //   range: { flex: 1, cursor: 'pointer' },
// // //   opVal: { fontSize: '12px', color: '#64748b', minWidth: '36px', fontFamily: 'monospace' },
// // //   reset: { padding: '4px 12px', fontSize: '11px', fontWeight: '600', color: '#64748b', backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '4px', cursor: 'pointer' },
// // //   nav: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '12px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' },
// // //   navBtn: { padding: '8px 20px', fontSize: '13px', fontWeight: '600', color: '#fff', backgroundColor: '#245de1', border: 'none', borderRadius: '6px', cursor: 'pointer' },
// // //   counter: { fontSize: '13px', fontWeight: '600', color: '#64748b', minWidth: '70px', textAlign: 'center' },
// // //   explanationPanel: { flex: '1 1 350px' }
// // // };

// // // export default TwoSetsBasicIdentitiesExplorer;



// // 'use client';

// // // ============================================================================
// // // TWO-SETS BASIC IDENTITIES — operations/regions of interest on 2 sets
// // // ============================================================================

// // import React, { useState, useMemo } from 'react';
// // import { Venncore, ExplanationsPanel } from './Venncore';

// // const CIRCLE_STROKE = '#1e293b';
// // const STROKE_W = 1;

// // const STD_CIRCLES = {
// //   A: { cx: 200, cy: 210, r: 110, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 130, y: 320 } },
// //   B: { cx: 320, cy: 210, r: 110, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 390, y: 320 } }
// // };
// // const SUBSET_A_IN_B = {
// //   A: { cx: 280, cy: 210, r: 55, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 280, y: 280 } },
// //   B: { cx: 260, cy: 210, r: 130, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 130, y: 340 } }
// // };
// // const SUBSET_B_IN_A = {
// //   A: { cx: 260, cy: 210, r: 130, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 130, y: 340 } },
// //   B: { cx: 280, cy: 210, r: 55, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 280, y: 280 } }
// // };
// // const DISJOINT_CIRCLES = {
// //   A: { cx: 150, cy: 210, r: 85, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 80, y: 320 } },
// //   B: { cx: 370, cy: 210, r: 85, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 440, y: 320 } }
// // };
// // const EQUAL_CIRCLES = {
// //   A: { cx: 260, cy: 210, r: 110, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 180, y: 100 } },
// //   B: { cx: 260, cy: 210, r: 110, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 340, y: 100 }, strokeDasharray: '6,4' }
// // };

// // export const basicIdentitiesData = {
// //   frame: {
// //     title: 'Two-Set Basic Identities',
// //     subtitle: 'Regions of interest in two-set algebra'
// //   },
// //   defaults: {
// //     width: 520, height: 420, margin: 12,
// //     backgroundColor: '#ffffff',
// //     universe: { label: 'U', labelPosition: { x: 30, y: 32 }, stroke: '#cbd5e1', strokeWidth: 1, labelFontSize: 18, labelColor: '#64748b' },
// //     circles: STD_CIRCLES
// //   },
// //   theme: { color: '#2563eb', opacity: 0.85, neutralFill: '#ffffff', outsideNeutralFill: '#ffffff' },
// //   scenarios: [
// //     { id: 'set-a', group: 'Basic Sets', name: 'Set A', symbol: 'A', definition: 'The set A.', example: 'A = {1,2,3,4}', highlight: ['A-only', 'A∩B'] },
// //     { id: 'set-b', group: 'Basic Sets', name: 'Set B', symbol: 'B', definition: 'The set B.', example: 'B = {3,4,5,6}', highlight: ['B-only', 'A∩B'] },
// //     { id: 'universe', group: 'Basic Sets', name: 'Universal Set', symbol: 'U', definition: 'Every element under consideration.', highlight: ['outside', 'A-only', 'B-only', 'A∩B'] },
// //     { id: 'empty', group: 'Basic Sets', name: 'Empty Set', symbol: '∅', definition: 'The set with no elements.', highlight: [] },

// //     { id: 'a-comp', group: 'Complements', name: 'Complement of A', symbol: "A'", definition: 'Everything in U not in A.', highlight: ['outside', 'B-only'] },
// //     { id: 'b-comp', group: 'Complements', name: 'Complement of B', symbol: "B'", definition: 'Everything in U not in B.', highlight: ['outside', 'A-only'] },

// //     { id: 'intersection', group: 'Intersection & Union', name: 'Intersection', symbol: 'A ∩ B', definition: 'Elements in both A and B.', example: 'A = {1,2,3,4}, B = {3,4,5,6} ⇒ {3,4}', highlight: ['A∩B'] },
// //     { id: 'union', group: 'Intersection & Union', name: 'Union', symbol: 'A ∪ B', definition: 'Elements in A, in B, or both.', example: 'A = {1,2,3}, B = {3,4,5} ⇒ {1,2,3,4,5}', highlight: ['A-only', 'B-only', 'A∩B'] },

// //     { id: 'a-minus-b', group: 'Differences', name: 'A minus B', symbol: 'A \\ B', definition: 'In A but not in B.', highlight: ['A-only'] },
// //     { id: 'b-minus-a', group: 'Differences', name: 'B minus A', symbol: 'B \\ A', definition: 'In B but not in A.', highlight: ['B-only'] },
// //     { id: 'symdiff', group: 'Differences', name: 'Symmetric Difference', symbol: 'A △ B', definition: 'In exactly one of A or B.', highlight: ['A-only', 'B-only'] },

// //     { id: 'a-or-bcomp', group: 'Compound', name: "A union B'", symbol: "A ∪ B'", definition: "A plus everything outside B.", highlight: ['outside', 'A-only', 'A∩B'] },
// //     { id: 'acomp-or-b', group: 'Compound', name: "A' union B", symbol: "A' ∪ B", definition: "Everything outside A plus B.", highlight: ['outside', 'B-only', 'A∩B'] },

// //     { id: 'dm-1', group: "De Morgan's Laws", name: 'Complement of Union', symbol: "(A ∪ B)'", definition: "Outside both A and B.", highlight: ['outside'] },
// //     { id: 'dm-2', group: "De Morgan's Laws", name: 'Complement of Intersection', symbol: "(A ∩ B)'", definition: 'Everything except the intersection.', highlight: ['outside', 'A-only', 'B-only'] },

// //     { id: 'sub-a-b', group: 'Relations', name: 'A is a subset of B', symbol: 'A ⊆ B', definition: 'Every element of A is also in B.', circles: SUBSET_A_IN_B, highlight: ['A∩B'] },
// //     { id: 'sub-b-a', group: 'Relations', name: 'B is a subset of A', symbol: 'B ⊆ A', definition: 'Every element of B is also in A.', circles: SUBSET_B_IN_A, highlight: ['A∩B'] },
// //     { id: 'disjoint', group: 'Relations', name: 'Disjoint sets', symbol: 'A ∩ B = ∅', definition: 'A and B share no elements.', circles: DISJOINT_CIRCLES, highlight: ['A-only', 'B-only'] },
// //     { id: 'equal', group: 'Relations', name: 'Equal sets', symbol: 'A = B', definition: 'A and B contain the same elements.', circles: EQUAL_CIRCLES, highlight: ['A∩B'] }
// //   ]
// // };

// // const GROUP_ORDER = ['Basic Sets', 'Complements', 'Intersection & Union', 'Differences', 'Compound', "De Morgan's Laws", 'Relations'];

// // export const TwoSetsBasicIdentitiesExplorer = ({ data = basicIdentitiesData, explanations = null }) => {
// //   const { frame, defaults, theme: defaultTheme, scenarios } = data;
// //   const [currentId, setCurrentId] = useState(scenarios[0]?.id);
// //   const [themeColor, setThemeColor] = useState(defaultTheme.color);
// //   const [themeOpacity, setThemeOpacity] = useState(defaultTheme.opacity);

// //   const grouped = useMemo(() => scenarios.reduce((acc, sc) => {
// //     const g = sc.group || 'Other';
// //     if (!acc[g]) acc[g] = [];
// //     acc[g].push(sc);
// //     return acc;
// //   }, {}), [scenarios]);
// //   const groups = useMemo(() => {
// //     const known = GROUP_ORDER.filter((g) => grouped[g]);
// //     const extras = Object.keys(grouped).filter((g) => !GROUP_ORDER.includes(g));
// //     return [...known, ...extras];
// //   }, [grouped]);

// //   const current = scenarios.find((sc) => sc.id === currentId) || scenarios[0];
// //   const idx = scenarios.findIndex((sc) => sc.id === currentId);

// //   const diagramProps = useMemo(() => ({
// //     circles: current?.circles || defaults.circles,
// //     width: defaults.width,
// //     height: defaults.height,
// //     margin: defaults.margin,
// //     backgroundColor: defaults.backgroundColor,
// //     universe: defaults.universe,
// //     highlight: current?.highlight || [],
// //     theme: { color: themeColor, opacity: themeOpacity, neutralFill: defaultTheme.neutralFill, outsideNeutralFill: defaultTheme.outsideNeutralFill }
// //   }), [current, defaults, defaultTheme, themeColor, themeOpacity]);

// //   const goPrev = () => setCurrentId(scenarios[(idx - 1 + scenarios.length) % scenarios.length].id);
// //   const goNext = () => setCurrentId(scenarios[(idx + 1) % scenarios.length].id);
// //   const resetTheme = () => { setThemeColor(defaultTheme.color); setThemeOpacity(defaultTheme.opacity); };

// //   const blurOnMouseUp = (e) => { e.currentTarget.blur(); };

// //   return (
// //     <div style={s.container}>
// //       <div style={s.header}>
// //         <p style={s.subtitle}>{frame.subtitle}</p>
// //       </div>

// //       <div style={s.controls}>
// //         <div style={s.btnGroups}>
// //           {groups.map((g) => (
// //             <div key={g} style={s.btnGroup}>
// //               <span style={s.groupLabel}>{g}</span>
// //               <div style={s.groupBtns}>
// //                 {grouped[g].map((sc) => (
// //                   <button
// //                     key={sc.id}
// //                     style={{ ...s.btn, ...(currentId === sc.id ? s.btnActive : {}) }}
// //                     onClick={() => setCurrentId(sc.id)}
// //                     onMouseUp={blurOnMouseUp}
// //                     title={sc.name}
// //                   >{sc.symbol}</button>
// //                 ))}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //         <div style={s.dropdownWrap}>
// //           <span style={s.groupLabel}>Jump to</span>
// //           <select style={s.dropdown} value={currentId} onChange={(e) => setCurrentId(e.target.value)}>
// //             {groups.map((g) => (
// //               <optgroup key={g} label={g}>
// //                 {grouped[g].map((sc) => <option key={sc.id} value={sc.id}>{sc.symbol} — {sc.name}</option>)}
// //               </optgroup>
// //             ))}
// //           </select>
// //         </div>
// //       </div>

// //       <div style={s.main}>
// //         <div style={s.col}>
// //           <div style={s.panel}>
// //             <div style={s.panelHead}>
// //               <span style={s.panelTitle}>Diagram</span>
// //               <span style={s.badge}>{current?.symbol}</span>
// //             </div>
// //             <div style={s.diagramBox}>
// //               <Venncore {...diagramProps} />
// //             </div>
// //           </div>

// //           <div style={s.panel}>
// //             <div style={s.panelHead}>
// //               <span style={s.panelTitle}>Theme</span>
// //               <button style={s.reset} onClick={resetTheme} onMouseUp={blurOnMouseUp}>Reset</button>
// //             </div>
// //             <div style={s.themeBody}>
// //               <span style={s.tLabel}>Color</span>
// //               <input type="color" style={s.color} value={themeColor} onChange={(e) => setThemeColor(e.target.value)} />
// //               <span style={s.tLabel}>Opacity</span>
// //               <input type="range" min="0" max="1" step="0.05" style={s.range} value={themeOpacity} onChange={(e) => setThemeOpacity(parseFloat(e.target.value))} />
// //               <span style={s.opVal}>{themeOpacity.toFixed(2)}</span>
// //             </div>
// //           </div>

// //           <div style={s.nav}>
// //             <button style={s.navBtn} onClick={goPrev} onMouseUp={blurOnMouseUp}>← Previous</button>
// //             <span style={s.counter}>{idx + 1} / {scenarios.length}</span>
// //             <button style={s.navBtn} onClick={goNext} onMouseUp={blurOnMouseUp}>Next →</button>
// //           </div>
// //         </div>

// //         <ExplanationsPanel
// //           current={current}
// //           explanations={explanations}
// //           headTitle="Explanation"
// //           defaultTabLabel="Overview"
// //           style={s.explanationPanel}
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // const s = {
// //   container: { fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", maxWidth: '1440px', margin: '0 auto', padding: '24px', backgroundColor: '#f8fafc', minHeight: '100vh' },
// //   header: { textAlign: 'center', marginBottom: '20px', padding: '16px 20px', backgroundColor: '#245de1', borderRadius: '12px', color: '#fff', boxShadow: '0 4px 20px rgba(36,93,225,0.3)' },
// //   title: { margin: '0 0 4px 0', fontSize: '28px', fontWeight: '700', letterSpacing: '-0.5px' },
// //   subtitle: { margin: 0, fontSize: '14px', opacity: 0.9 },
// //   controls: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '16px 20px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px', flexWrap: 'wrap' },
// //   btnGroups: { display: 'flex', flexWrap: 'wrap', gap: '16px', flex: 1 },
// //   btnGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
// //   groupLabel: { fontSize: '10px', fontWeight: '600', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' },
// //   groupBtns: { display: 'flex', gap: '4px', flexWrap: 'wrap' },
// //   btn: { padding: '6px 10px', fontSize: '12px', fontWeight: '600', color: '#64748b', backgroundColor: '#f1f5f9', border: '2px solid transparent', borderRadius: '6px', cursor: 'pointer', fontFamily: "'Cambria Math','Times New Roman',serif", whiteSpace: 'nowrap', outline: 'none' },
// //   btnActive: { color: '#245de1', backgroundColor: '#e8effd', borderColor: '#245de1' },
// //   dropdownWrap: { display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '200px' },
// //   dropdown: { width: '100%', padding: '8px 12px', fontSize: '13px', fontWeight: '500', color: '#334155', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer', outline: 'none' },
// //   main: { display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' },
// //   col: { flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '12px' },
// //   panel: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', overflow: 'hidden' },
// //   panelHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' },
// //   panelTitle: { fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' },
// //   badge: { padding: '3px 10px', backgroundColor: '#245de1', color: '#fff', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
// //   diagramBox: { padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '420px' },
// //   themeBody: { padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' },
// //   tLabel: { fontSize: '12px', fontWeight: '600', color: '#64748b' },
// //   color: { width: '36px', height: '28px', border: '1px solid #cbd5e1', borderRadius: '4px', cursor: 'pointer', padding: '2px', background: '#fff' },
// //   range: { flex: 1, cursor: 'pointer' },
// //   opVal: { fontSize: '12px', color: '#64748b', minWidth: '36px', fontFamily: 'monospace' },
// //   reset: { padding: '4px 12px', fontSize: '11px', fontWeight: '600', color: '#64748b', backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '4px', cursor: 'pointer', outline: 'none' },
// //   nav: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '12px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' },
// //   navBtn: { padding: '8px 20px', fontSize: '13px', fontWeight: '600', color: '#fff', backgroundColor: '#245de1', border: 'none', borderRadius: '6px', cursor: 'pointer', outline: 'none' },
// //   counter: { fontSize: '13px', fontWeight: '600', color: '#64748b', minWidth: '70px', textAlign: 'center' },
// //   explanationPanel: { flex: '1 1 350px' }
// // };

// // export default TwoSetsBasicIdentitiesExplorer;


// 'use client';

// // ============================================================================
// // TWO-SETS BASIC IDENTITIES — operations/regions of interest on 2 sets
// // ============================================================================

// import React, { useState, useMemo, useEffect } from 'react';
// import { Venncore, ExplanationsPanel } from './Venncore';

// const CIRCLE_STROKE = '#1e293b';
// const STROKE_W = 1;

// const STD_CIRCLES = {
//   A: { cx: 200, cy: 210, r: 110, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 130, y: 320 } },
//   B: { cx: 320, cy: 210, r: 110, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 390, y: 320 } }
// };
// const SUBSET_A_IN_B = {
//   A: { cx: 280, cy: 210, r: 55, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 280, y: 280 } },
//   B: { cx: 260, cy: 210, r: 130, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 130, y: 340 } }
// };
// const SUBSET_B_IN_A = {
//   A: { cx: 260, cy: 210, r: 130, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 130, y: 340 } },
//   B: { cx: 280, cy: 210, r: 55, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 280, y: 280 } }
// };
// const DISJOINT_CIRCLES = {
//   A: { cx: 150, cy: 210, r: 85, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 80, y: 320 } },
//   B: { cx: 370, cy: 210, r: 85, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 440, y: 320 } }
// };
// const EQUAL_CIRCLES = {
//   A: { cx: 260, cy: 210, r: 110, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 180, y: 100 } },
//   B: { cx: 260, cy: 210, r: 110, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 340, y: 100 }, strokeDasharray: '6,4' }
// };

// export const basicIdentitiesData = {
//   frame: {
//     title: 'Two-Set Basic Identities',
//     subtitle: 'Regions of interest in two-set algebra'
//   },
//   defaults: {
//     width: 520, height: 420, margin: 12,
//     backgroundColor: '#ffffff',
//     universe: { label: 'U', labelPosition: { x: 30, y: 32 }, stroke: '#cbd5e1', strokeWidth: 1, labelFontSize: 18, labelColor: '#64748b' },
//     circles: STD_CIRCLES
//   },
//   theme: { color: '#2563eb', opacity: 0.85, neutralFill: '#ffffff', outsideNeutralFill: '#ffffff' },
//   scenarios: [
//     { id: 'set-a', group: 'Basic Sets', name: 'Set A', symbol: 'A', definition: 'The set A.', example: 'A = {1,2,3,4}', highlight: ['A-only', 'A∩B'] },
//     { id: 'set-b', group: 'Basic Sets', name: 'Set B', symbol: 'B', definition: 'The set B.', example: 'B = {3,4,5,6}', highlight: ['B-only', 'A∩B'] },
//     { id: 'universe', group: 'Basic Sets', name: 'Universal Set', symbol: 'U', definition: 'Every element under consideration.', highlight: ['outside', 'A-only', 'B-only', 'A∩B'] },
//     { id: 'empty', group: 'Basic Sets', name: 'Empty Set', symbol: '∅', definition: 'The set with no elements.', highlight: [] },

//     { id: 'a-comp', group: 'Complements', name: 'Complement of A', symbol: "A'", definition: 'Everything in U not in A.', highlight: ['outside', 'B-only'] },
//     { id: 'b-comp', group: 'Complements', name: 'Complement of B', symbol: "B'", definition: 'Everything in U not in B.', highlight: ['outside', 'A-only'] },

//     { id: 'intersection', group: 'Intersection & Union', name: 'Intersection', symbol: 'A ∩ B', definition: 'Elements in both A and B.', example: 'A = {1,2,3,4}, B = {3,4,5,6} ⇒ {3,4}', highlight: ['A∩B'] },
//     { id: 'union', group: 'Intersection & Union', name: 'Union', symbol: 'A ∪ B', definition: 'Elements in A, in B, or both.', example: 'A = {1,2,3}, B = {3,4,5} ⇒ {1,2,3,4,5}', highlight: ['A-only', 'B-only', 'A∩B'] },

//     { id: 'a-minus-b', group: 'Differences', name: 'A minus B', symbol: 'A \\ B', definition: 'In A but not in B.', highlight: ['A-only'] },
//     { id: 'b-minus-a', group: 'Differences', name: 'B minus A', symbol: 'B \\ A', definition: 'In B but not in A.', highlight: ['B-only'] },
//     { id: 'symdiff', group: 'Differences', name: 'Symmetric Difference', symbol: 'A △ B', definition: 'In exactly one of A or B.', highlight: ['A-only', 'B-only'] },

//     { id: 'a-or-bcomp', group: 'Compound', name: "A union B'", symbol: "A ∪ B'", definition: "A plus everything outside B.", highlight: ['outside', 'A-only', 'A∩B'] },
//     { id: 'acomp-or-b', group: 'Compound', name: "A' union B", symbol: "A' ∪ B", definition: "Everything outside A plus B.", highlight: ['outside', 'B-only', 'A∩B'] },

//     { id: 'dm-1', group: "De Morgan's Laws", name: 'Complement of Union', symbol: "(A ∪ B)'", definition: "Outside both A and B.", highlight: ['outside'] },
//     { id: 'dm-2', group: "De Morgan's Laws", name: 'Complement of Intersection', symbol: "(A ∩ B)'", definition: 'Everything except the intersection.', highlight: ['outside', 'A-only', 'B-only'] },

//     { id: 'sub-a-b', group: 'Relations', name: 'A is a subset of B', symbol: 'A ⊆ B', definition: 'Every element of A is also in B.', circles: SUBSET_A_IN_B, highlight: ['A∩B'] },
//     { id: 'sub-b-a', group: 'Relations', name: 'B is a subset of A', symbol: 'B ⊆ A', definition: 'Every element of B is also in A.', circles: SUBSET_B_IN_A, highlight: ['A∩B'] },
//     { id: 'disjoint', group: 'Relations', name: 'Disjoint sets', symbol: 'A ∩ B = ∅', definition: 'A and B share no elements.', circles: DISJOINT_CIRCLES, highlight: ['A-only', 'B-only'] },
//     { id: 'equal', group: 'Relations', name: 'Equal sets', symbol: 'A = B', definition: 'A and B contain the same elements.', circles: EQUAL_CIRCLES, highlight: ['A∩B'] }
//   ]
// };

// const GROUP_ORDER = ['Basic Sets', 'Complements', 'Intersection & Union', 'Differences', 'Compound', "De Morgan's Laws", 'Relations'];

// const CSS_ID = 'two-sets-basic-identities-css';
// const CSS = `
// .tsbi-btn {
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
// .tsbi-btn:hover {
//   color: #334155;
//   background-color: #e2e8f0;
//   border-color: transparent;
// }
// .tsbi-btn:focus,
// .tsbi-btn:focus-visible {
//   outline: none;
//   border-color: transparent;
// }
// .tsbi-btn.active,
// .tsbi-btn.active:hover,
// .tsbi-btn.active:focus,
// .tsbi-btn.active:focus-visible {
//   color: #245de1;
//   background-color: #e8effd;
//   border-color: #245de1;
// }
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

// export const TwoSetsBasicIdentitiesExplorer = ({ data = basicIdentitiesData, explanations = null }) => {
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

//   return (
//     <div style={s.container}>
//       <div style={s.header}>
//         <p style={s.subtitle}>{frame.subtitle}</p>
//       </div>

//       <div style={s.controls}>
//         <div style={s.btnGroups}>
//           {groups.map((g) => (
//             <div key={g} style={s.btnGroup}>
//               <span style={s.groupLabel}>{g}</span>
//               <div style={s.groupBtns}>
//                 {grouped[g].map((sc) => (
//                   <button
//                     key={sc.id}
//                     className={`tsbi-btn${currentId === sc.id ? ' active' : ''}`}
//                     onClick={() => setCurrentId(sc.id)}
//                     title={sc.name}
//                   >{sc.symbol}</button>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div style={s.dropdownWrap}>
//           <span style={s.groupLabel}>Jump to</span>
//           <select style={s.dropdown} value={currentId} onChange={(e) => setCurrentId(e.target.value)}>
//             {groups.map((g) => (
//               <optgroup key={g} label={g}>
//                 {grouped[g].map((sc) => <option key={sc.id} value={sc.id}>{sc.symbol} — {sc.name}</option>)}
//               </optgroup>
//             ))}
//           </select>
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
//               <Venncore {...diagramProps} />
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
//   controls: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '16px 20px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px', flexWrap: 'wrap' },
//   btnGroups: { display: 'flex', flexWrap: 'wrap', gap: '16px', flex: 1 },
//   btnGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
//   groupLabel: { fontSize: '10px', fontWeight: '600', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' },
//   groupBtns: { display: 'flex', gap: '4px', flexWrap: 'wrap' },
//   dropdownWrap: { display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '200px' },
//   dropdown: { width: '100%', padding: '8px 12px', fontSize: '13px', fontWeight: '500', color: '#334155', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer', outline: 'none' },
//   main: { display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' },
//   col: { flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '12px' },
//   panel: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', overflow: 'hidden' },
//   panelHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' },
//   panelTitle: { fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' },
//   badge: { padding: '3px 10px', backgroundColor: '#245de1', color: '#fff', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
//   diagramBox: { padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '420px' },
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

// export default TwoSetsBasicIdentitiesExplorer;



// 'use client';

// // ============================================================================
// // TWO-SET IDENTITIES EXPLORER — uses VennCoreEnhanced
// // ============================================================================

// import React, { useState, useMemo, useEffect } from 'react';
// import { Venncore, ExplanationsPanel } from './Venncore';

// const CIRCLE_STROKE = '#1e293b';
// const STROKE_W = 1;

// const STD_CIRCLES = {
//   A: { cx: 200, cy: 210, r: 110, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 130, y: 320 } },
//   B: { cx: 320, cy: 210, r: 110, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 390, y: 320 } }
// };
// const SUBSET_A_IN_B = {
//   A: { cx: 280, cy: 210, r: 55, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 280, y: 280 } },
//   B: { cx: 260, cy: 210, r: 130, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 130, y: 340 } }
// };
// const SUBSET_B_IN_A = {
//   A: { cx: 260, cy: 210, r: 130, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 130, y: 340 } },
//   B: { cx: 280, cy: 210, r: 55, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 280, y: 280 } }
// };
// const DISJOINT_CIRCLES = {
//   A: { cx: 150, cy: 210, r: 85, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 80, y: 320 } },
//   B: { cx: 370, cy: 210, r: 85, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 440, y: 320 } }
// };
// const EQUAL_CIRCLES = {
//   A: { cx: 260, cy: 210, r: 110, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 180, y: 100 } },
//   B: { cx: 260, cy: 210, r: 110, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 340, y: 100 }, strokeDasharray: '6,4' }
// };

// export const basicIdentitiesData = {
//   frame: {
//     title: 'Two-Set Basic Identities',
//     subtitle: 'Regions of interest in two-set algebra'
//   },
//   defaults: {
//     width: 520, height: 420, margin: 12,
//     backgroundColor: '#ffffff',
//     universe: { label: 'U', labelPosition: { x: 30, y: 32 }, stroke: '#cbd5e1', strokeWidth: 1, labelFontSize: 18, labelColor: '#64748b' },
//     circles: STD_CIRCLES,
//     tooltips: {
//       'outside': 'Outside both sets',
//       'A-only': 'Only in A',
//       'B-only': 'Only in B',
//       'A∩B':    'In both A and B'
//     }
//   },
//   theme: { color: '#2563eb', opacity: 0.85, neutralFill: '#ffffff', outsideNeutralFill: '#ffffff' },
//   scenarios: [
//     { id: 'set-a', group: 'Basic Sets', name: 'Set A', symbol: 'A', definition: 'The set A.', example: 'A = {1,2,3,4}', highlight: ['A-only', 'A∩B'] },
//     { id: 'set-b', group: 'Basic Sets', name: 'Set B', symbol: 'B', definition: 'The set B.', example: 'B = {3,4,5,6}', highlight: ['B-only', 'A∩B'] },
//     { id: 'universe', group: 'Basic Sets', name: 'Universal Set', symbol: 'U', definition: 'Every element under consideration.', highlight: ['outside', 'A-only', 'B-only', 'A∩B'] },
//     { id: 'empty', group: 'Basic Sets', name: 'Empty Set', symbol: '∅', definition: 'The set with no elements.', highlight: [] },

//     { id: 'a-comp', group: 'Complements', name: 'Complement of A', symbol: "A'", definition: 'Everything in U not in A.', highlight: ['outside', 'B-only'] },
//     { id: 'b-comp', group: 'Complements', name: 'Complement of B', symbol: "B'", definition: 'Everything in U not in B.', highlight: ['outside', 'A-only'] },

//     { id: 'intersection', group: 'Intersection & Union', name: 'Intersection', symbol: 'A ∩ B', definition: 'Elements in both A and B.', example: 'A = {1,2,3,4}, B = {3,4,5,6} ⇒ {3,4}', highlight: ['A∩B'] },
//     { id: 'union', group: 'Intersection & Union', name: 'Union', symbol: 'A ∪ B', definition: 'Elements in A, in B, or both.', example: 'A = {1,2,3}, B = {3,4,5} ⇒ {1,2,3,4,5}', highlight: ['A-only', 'B-only', 'A∩B'] },

//     { id: 'a-minus-b', group: 'Differences', name: 'A minus B', symbol: 'A \\ B', definition: 'In A but not in B.', highlight: ['A-only'] },
//     { id: 'b-minus-a', group: 'Differences', name: 'B minus A', symbol: 'B \\ A', definition: 'In B but not in A.', highlight: ['B-only'] },
//     { id: 'symdiff', group: 'Differences', name: 'Symmetric Difference', symbol: 'A △ B', definition: 'In exactly one of A or B.', highlight: ['A-only', 'B-only'] },

//     { id: 'a-or-bcomp', group: 'Compound', name: "A union B'", symbol: "A ∪ B'", definition: "A plus everything outside B.", highlight: ['outside', 'A-only', 'A∩B'] },
//     { id: 'acomp-or-b', group: 'Compound', name: "A' union B", symbol: "A' ∪ B", definition: "Everything outside A plus B.", highlight: ['outside', 'B-only', 'A∩B'] },

//     { id: 'dm-1', group: "De Morgan's Laws", name: 'Complement of Union', symbol: "(A ∪ B)'", definition: "Outside both A and B.", highlight: ['outside'] },
//     { id: 'dm-2', group: "De Morgan's Laws", name: 'Complement of Intersection', symbol: "(A ∩ B)'", definition: 'Everything except the intersection.', highlight: ['outside', 'A-only', 'B-only'] },

//     { id: 'sub-a-b', group: 'Relations', name: 'A is a subset of B', symbol: 'A ⊆ B', definition: 'Every element of A is also in B.', circles: SUBSET_A_IN_B, highlight: ['A∩B'] },
//     { id: 'sub-b-a', group: 'Relations', name: 'B is a subset of A', symbol: 'B ⊆ A', definition: 'Every element of B is also in A.', circles: SUBSET_B_IN_A, highlight: ['A∩B'] },
//     { id: 'disjoint', group: 'Relations', name: 'Disjoint sets', symbol: 'A ∩ B = ∅', definition: 'A and B share no elements.', circles: DISJOINT_CIRCLES, highlight: ['A-only', 'B-only'] },
//     { id: 'equal', group: 'Relations', name: 'Equal sets', symbol: 'A = B', definition: 'A and B contain the same elements.', circles: EQUAL_CIRCLES, highlight: ['A∩B'] }
//   ]
// };

// const GROUP_ORDER = ['Basic Sets', 'Complements', 'Intersection & Union', 'Differences', 'Compound', "De Morgan's Laws", 'Relations'];

// const CSS_ID = 'two-set-identities-explorer-css';
// const CSS = `
// .tsbi-btn {
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
// .tsbi-btn:hover {
//   color: #334155;
//   background-color: #e2e8f0;
//   border-color: transparent;
// }
// .tsbi-btn:focus,
// .tsbi-btn:focus-visible {
//   outline: none;
//   border-color: transparent;
// }
// .tsbi-btn.active,
// .tsbi-btn.active:hover,
// .tsbi-btn.active:focus,
// .tsbi-btn.active:focus-visible {
//   color: #245de1;
//   background-color: #e8effd;
//   border-color: #245de1;
// }
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

// export const TwoSetIdentitiesExplorer = ({ data = basicIdentitiesData, explanations = null }) => {
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

//   const diagramProps = useMemo(() => ({
//     circles: current?.circles || defaults.circles,
//     width: defaults.width,
//     height: defaults.height,
//     margin: defaults.margin,
//     backgroundColor: defaults.backgroundColor,
//     universe: defaults.universe,
//     highlight: current?.highlight || [],
//     tooltips: current?.tooltips || defaults.tooltips || {},
//     theme: { color: themeColor, opacity: themeOpacity, neutralFill: defaultTheme.neutralFill, outsideNeutralFill: defaultTheme.outsideNeutralFill }
//   }), [current, defaults, defaultTheme, themeColor, themeOpacity]);

//   const goPrev = () => setCurrentId(scenarios[(idx - 1 + scenarios.length) % scenarios.length].id);
//   const goNext = () => setCurrentId(scenarios[(idx + 1) % scenarios.length].id);
//   const resetTheme = () => { setThemeColor(defaultTheme.color); setThemeOpacity(defaultTheme.opacity); };

//   return (
//     <div style={s.container}>
//       <div style={s.header}>
//         <p style={s.subtitle}>{frame.subtitle}</p>
//       </div>

//       <div style={s.controls}>
//         <div style={s.btnGroups}>
//           {groups.map((g) => (
//             <div key={g} style={s.btnGroup}>
//               <span style={s.groupLabel}>{g}</span>
//               <div style={s.groupBtns}>
//                 {grouped[g].map((sc) => (
//                   <button
//                     key={sc.id}
//                     className={`tsbi-btn${currentId === sc.id ? ' active' : ''}`}
//                     onClick={() => setCurrentId(sc.id)}
//                     title={sc.name}
//                   >{sc.symbol}</button>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div style={s.dropdownWrap}>
//           <span style={s.groupLabel}>Jump to</span>
//           <select style={s.dropdown} value={currentId} onChange={(e) => setCurrentId(e.target.value)}>
//             {groups.map((g) => (
//               <optgroup key={g} label={g}>
//                 {grouped[g].map((sc) => <option key={sc.id} value={sc.id}>{sc.symbol} — {sc.name}</option>)}
//               </optgroup>
//             ))}
//           </select>
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
//               <Venncore {...diagramProps} />
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
//   controls: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '16px 20px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px', flexWrap: 'wrap' },
//   btnGroups: { display: 'flex', flexWrap: 'wrap', gap: '16px', flex: 1 },
//   btnGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
//   groupLabel: { fontSize: '10px', fontWeight: '600', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' },
//   groupBtns: { display: 'flex', gap: '4px', flexWrap: 'wrap' },
//   dropdownWrap: { display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '200px' },
//   dropdown: { width: '100%', padding: '8px 12px', fontSize: '13px', fontWeight: '500', color: '#334155', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer', outline: 'none' },
//   main: { display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' },
//   col: { flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '12px' },
//   panel: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', overflow: 'hidden' },
//   panelHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' },
//   panelTitle: { fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' },
//   badge: { padding: '3px 10px', backgroundColor: '#245de1', color: '#fff', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
//   diagramBox: { padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '420px' },
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

// export default TwoSetIdentitiesExplorer;


'use client';

// ============================================================================
// TWO-SET IDENTITIES EXPLORER — uses VennCoreEnhanced
// ============================================================================

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Venncore, ExplanationsPanel } from './Venncore';

const CIRCLE_STROKE = '#1e293b';
const STROKE_W = 1;

const STD_CIRCLES = {
  A: { cx: 200, cy: 210, r: 110, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 130, y: 320 } },
  B: { cx: 320, cy: 210, r: 110, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 390, y: 320 } }
};
const SUBSET_A_IN_B = {
  A: { cx: 280, cy: 210, r: 55, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 280, y: 280 } },
  B: { cx: 260, cy: 210, r: 130, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 130, y: 340 } }
};
const SUBSET_B_IN_A = {
  A: { cx: 260, cy: 210, r: 130, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 130, y: 340 } },
  B: { cx: 280, cy: 210, r: 55, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 280, y: 280 } }
};
const DISJOINT_CIRCLES = {
  A: { cx: 150, cy: 210, r: 85, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 80, y: 320 } },
  B: { cx: 370, cy: 210, r: 85, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 440, y: 320 } }
};
const EQUAL_CIRCLES = {
  A: { cx: 260, cy: 210, r: 110, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 180, y: 100 } },
  B: { cx: 260, cy: 210, r: 110, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: STROKE_W, labelPosition: { x: 340, y: 100 }, strokeDasharray: '6,4' }
};

export const basicIdentitiesData = {
  frame: {
    title: 'Two-Set Basic Identities',
    subtitle: 'Regions of interest in two-set algebra'
  },
  defaults: {
    width: 520, height: 420, margin: 12,
    backgroundColor: '#ffffff',
    universe: { label: 'U', labelPosition: { x: 30, y: 32 }, stroke: '#cbd5e1', strokeWidth: 1, labelFontSize: 18, labelColor: '#64748b' },
    circles: STD_CIRCLES,
    tooltips: {
      'outside': 'Outside both sets',
      'A-only': 'Only in A',
      'B-only': 'Only in B',
      'A∩B':    'In both A and B'
    }
  },
  theme: { color: '#2563eb', opacity: 0.85, neutralFill: '#ffffff', outsideNeutralFill: '#ffffff' },
  scenarios: [
    { id: 'set-a', group: 'Basic Sets', name: 'Set A', symbol: 'A', definition: 'The set A.', example: 'A = {1,2,3,4}', highlight: ['A-only', 'A∩B'] },
    { id: 'set-b', group: 'Basic Sets', name: 'Set B', symbol: 'B', definition: 'The set B.', example: 'B = {3,4,5,6}', highlight: ['B-only', 'A∩B'] },
    { id: 'universe', group: 'Basic Sets', name: 'Universal Set', symbol: 'U', definition: 'Every element under consideration.', highlight: ['outside', 'A-only', 'B-only', 'A∩B'] },
    { id: 'empty', group: 'Basic Sets', name: 'Empty Set', symbol: '∅', definition: 'The set with no elements.', highlight: [] },

    { id: 'a-comp', group: 'Complements', name: 'Complement of A', symbol: "A'", definition: 'Everything in U not in A.', highlight: ['outside', 'B-only'] },
    { id: 'b-comp', group: 'Complements', name: 'Complement of B', symbol: "B'", definition: 'Everything in U not in B.', highlight: ['outside', 'A-only'] },

    { id: 'intersection', group: 'Intersection & Union', name: 'Intersection', symbol: 'A ∩ B', definition: 'Elements in both A and B.', example: 'A = {1,2,3,4}, B = {3,4,5,6} ⇒ {3,4}', highlight: ['A∩B'] },
    { id: 'union', group: 'Intersection & Union', name: 'Union', symbol: 'A ∪ B', definition: 'Elements in A, in B, or both.', example: 'A = {1,2,3}, B = {3,4,5} ⇒ {1,2,3,4,5}', highlight: ['A-only', 'B-only', 'A∩B'] },

    { id: 'a-minus-b', group: 'Differences', name: 'A minus B', symbol: 'A \\ B', definition: 'In A but not in B.', highlight: ['A-only'] },
    { id: 'b-minus-a', group: 'Differences', name: 'B minus A', symbol: 'B \\ A', definition: 'In B but not in A.', highlight: ['B-only'] },
    { id: 'symdiff', group: 'Differences', name: 'Symmetric Difference', symbol: 'A △ B', definition: 'In exactly one of A or B.', highlight: ['A-only', 'B-only'] },

    { id: 'a-or-bcomp', group: 'Compound', name: "A union B'", symbol: "A ∪ B'", definition: "A plus everything outside B.", highlight: ['outside', 'A-only', 'A∩B'] },
    { id: 'acomp-or-b', group: 'Compound', name: "A' union B", symbol: "A' ∪ B", definition: "Everything outside A plus B.", highlight: ['outside', 'B-only', 'A∩B'] },

    { id: 'dm-1', group: "De Morgan's Laws", name: 'Complement of Union', symbol: "(A ∪ B)'", definition: "Outside both A and B.", highlight: ['outside'] },
    { id: 'dm-2', group: "De Morgan's Laws", name: 'Complement of Intersection', symbol: "(A ∩ B)'", definition: 'Everything except the intersection.', highlight: ['outside', 'A-only', 'B-only'] },

    { id: 'sub-a-b', group: 'Relations', name: 'A is a subset of B', symbol: 'A ⊆ B', definition: 'Every element of A is also in B.', circles: SUBSET_A_IN_B, highlight: ['A∩B'] },
    { id: 'sub-b-a', group: 'Relations', name: 'B is a subset of A', symbol: 'B ⊆ A', definition: 'Every element of B is also in A.', circles: SUBSET_B_IN_A, highlight: ['A∩B'] },
    { id: 'disjoint', group: 'Relations', name: 'Disjoint sets', symbol: 'A ∩ B = ∅', definition: 'A and B share no elements.', circles: DISJOINT_CIRCLES, highlight: ['A-only', 'B-only'] },
    { id: 'equal', group: 'Relations', name: 'Equal sets', symbol: 'A = B', definition: 'A and B contain the same elements.', circles: EQUAL_CIRCLES, highlight: ['A∩B'] }
  ]
};

const GROUP_ORDER = ['Basic Sets', 'Complements', 'Intersection & Union', 'Differences', 'Compound', "De Morgan's Laws", 'Relations'];

const CSS_ID = 'two-sets-laws-explorer-css';
const CSS = `
.venn-laws-tabs-strip {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.venn-laws-tabs-strip::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}

.tsl-tab {
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
.tsl-tab:hover { color: #334155; }
.tsl-tab:focus, .tsl-tab:focus-visible { outline: none; }
.tsl-tab.active,
.tsl-tab.active:hover,
.tsl-tab.active:focus,
.tsl-tab.active:focus-visible {
  color: #245de1;
  border-bottom-color: #245de1;
}

.tsl-btn {
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
.tsl-btn:hover {
  color: #334155;
  background-color: #e2e8f0;
  border-color: transparent;
}
.tsl-btn:focus,
.tsl-btn:focus-visible {
  outline: none;
  border-color: transparent;
}
.tsl-btn.active,
.tsl-btn.active:hover,
.tsl-btn.active:focus,
.tsl-btn.active:focus-visible {
  color: #245de1;
  background-color: #e8effd;
  border-color: #245de1;
}
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

export const TwoSetIdentitiesExplorer = ({ data = basicIdentitiesData, explanations = null }) => {
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
  const lastSyncedIdRef = useRef(currentId);
  useEffect(() => {
    if (lastSyncedIdRef.current !== currentId) {
      lastSyncedIdRef.current = currentId;
      if (current?.group && current.group !== activeGroup) setActiveGroup(current.group);
    }
  }, [currentId, current, activeGroup]);

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
        <div className="venn-laws-tabs-strip" style={s.tabsStrip}>
          {groups.map((g) => (
            <button
              key={g}
              className={`tsl-tab${g === activeGroup ? ' active' : ''}`}
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
                className={`tsl-btn${currentId === sc.id ? ' active' : ''}`}
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
              <Venncore {...diagramProps} />
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
  dropdownWrap: { display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '180px' },
  dropdown: { width: '100%', padding: '7px 10px', fontSize: '13px', fontWeight: '500', color: '#334155', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer', outline: 'none' },
  main: { display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' },
  col: { flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '12px' },
  panel: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', overflow: 'hidden' },
  panelHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' },
  panelTitle: { fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' },
  badge: { padding: '3px 10px', backgroundColor: '#245de1', color: '#fff', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
  diagramBox: { padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '420px' },
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

export default TwoSetIdentitiesExplorer;