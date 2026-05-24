// // // // 'use client';

// // // // // ============================================================================
// // // // // TWO-SETS LAWS & COMPLEX IDENTITIES — LHS = RHS visual proofs
// // // // // ============================================================================
// // // // // Two diagrams per identity. Imports renderer + helpers from venn-core.
// // // // // ============================================================================

// // // // import React, { useState, useMemo } from 'react';
// // // // import { Venncore } from './Venncore';

// // // // // Inline: check if two predicates produce identical truth tables on 2 sets.
// // // // const TWO_SET_CASES = [
// // // //   { A: false, B: false },
// // // //   { A: true,  B: false },
// // // //   { A: false, B: true  },
// // // //   { A: true,  B: true  }
// // // // ];
// // // // const predicatesMatch = (p1, p2) =>
// // // //   TWO_SET_CASES.every((v) => Boolean(p1(v)) === Boolean(p2(v)));

// // // // const CIRCLE_STROKE = '#1e293b';

// // // // const MINI_CIRCLES = {
// // // //   A: { cx: 100, cy: 110, r: 55, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: 1, labelPosition: { x: 60, y: 180 } },
// // // //   B: { cx: 160, cy: 110, r: 55, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: 1, labelPosition: { x: 200, y: 180 } }
// // // // };

// // // // export const lawsData = {
// // // //   frame: {
// // // //     title: 'Two-Set Laws & Complex Identities',
// // // //     subtitle: 'Visual proofs — both diagrams should highlight the same regions'
// // // //   },
// // // //   defaults: {
// // // //     width: 260, height: 210, margin: 6,
// // // //     backgroundColor: '#ffffff',
// // // //     universe: { label: 'U', labelPosition: { x: 18, y: 20 }, stroke: '#cbd5e1', strokeWidth: 1, labelFontSize: 12, labelColor: '#64748b' },
// // // //     circles: MINI_CIRCLES
// // // //   },
// // // //   theme: { color: '#2563eb', opacity: 0.85, neutralFill: '#ffffff', outsideNeutralFill: '#ffffff' },
// // // //   identities: [
// // // //     // Idempotent
// // // //     { id: 'idem-u', group: 'Idempotent', name: 'Idempotent (Union)', formula: 'A ∪ A = A',
// // // //       lhs: { symbol: 'A ∪ A', expr: ({A}) => A || A }, rhs: { symbol: 'A', expr: ({A}) => A },
// // // //       definition: 'Uniting a set with itself yields the same set.' },
// // // //     { id: 'idem-i', group: 'Idempotent', name: 'Idempotent (Intersection)', formula: 'A ∩ A = A',
// // // //       lhs: { symbol: 'A ∩ A', expr: ({A}) => A && A }, rhs: { symbol: 'A', expr: ({A}) => A },
// // // //       definition: 'Intersecting a set with itself yields the same set.' },

// // // //     // Commutative
// // // //     { id: 'comm-u', group: 'Commutative', name: 'Commutative (Union)', formula: 'A ∪ B = B ∪ A',
// // // //       lhs: { symbol: 'A ∪ B', expr: ({A,B}) => A || B }, rhs: { symbol: 'B ∪ A', expr: ({A,B}) => B || A },
// // // //       definition: 'Order does not matter in union.' },
// // // //     { id: 'comm-i', group: 'Commutative', name: 'Commutative (Intersection)', formula: 'A ∩ B = B ∩ A',
// // // //       lhs: { symbol: 'A ∩ B', expr: ({A,B}) => A && B }, rhs: { symbol: 'B ∩ A', expr: ({A,B}) => B && A },
// // // //       definition: 'Order does not matter in intersection.' },

// // // //     // Identity & Annihilation
// // // //     { id: 'id-u-e', group: 'Identity & Annihilation', name: 'Identity (Union with ∅)', formula: 'A ∪ ∅ = A',
// // // //       lhs: { symbol: 'A ∪ ∅', expr: ({A}) => A || false }, rhs: { symbol: 'A', expr: ({A}) => A },
// // // //       definition: '∅ is the identity element for union.' },
// // // //     { id: 'id-i-u', group: 'Identity & Annihilation', name: 'Identity (Intersection with U)', formula: 'A ∩ U = A',
// // // //       lhs: { symbol: 'A ∩ U', expr: ({A}) => A && true }, rhs: { symbol: 'A', expr: ({A}) => A },
// // // //       definition: 'U is the identity element for intersection.' },
// // // //     { id: 'ann-i', group: 'Identity & Annihilation', name: 'Annihilation (Intersection with ∅)', formula: 'A ∩ ∅ = ∅',
// // // //       lhs: { symbol: 'A ∩ ∅', expr: ({A}) => A && false }, rhs: { symbol: '∅', expr: () => false },
// // // //       definition: 'Intersecting with ∅ always gives ∅.' },
// // // //     { id: 'ann-u', group: 'Identity & Annihilation', name: 'Annihilation (Union with U)', formula: 'A ∪ U = U',
// // // //       lhs: { symbol: 'A ∪ U', expr: ({A}) => A || true }, rhs: { symbol: 'U', expr: () => true },
// // // //       definition: 'Uniting with U always gives U.' },

// // // //     // Complement
// // // //     { id: 'cmp-u', group: 'Complement', name: 'Complement Law (Union)', formula: "A ∪ A' = U",
// // // //       lhs: { symbol: "A ∪ A'", expr: ({A}) => A || !A }, rhs: { symbol: 'U', expr: () => true },
// // // //       definition: 'A set together with its complement is the universe.' },
// // // //     { id: 'cmp-i', group: 'Complement', name: 'Complement Law (Intersection)', formula: "A ∩ A' = ∅",
// // // //       lhs: { symbol: "A ∩ A'", expr: ({A}) => A && !A }, rhs: { symbol: '∅', expr: () => false },
// // // //       definition: 'A set and its complement share no elements.' },
// // // //     { id: 'dcmp', group: 'Complement', name: 'Double Complement (Involution)', formula: "(A')' = A",
// // // //       lhs: { symbol: "(A')'", expr: ({A}) => !(!A) }, rhs: { symbol: 'A', expr: ({A}) => A },
// // // //       definition: 'Complementing twice returns the original set.' },
// // // //     { id: 'cmp-U', group: 'Complement', name: 'Complement of Universe', formula: "U' = ∅",
// // // //       lhs: { symbol: "U'", expr: () => !true }, rhs: { symbol: '∅', expr: () => false },
// // // //       definition: 'The complement of U is the empty set.' },
// // // //     { id: 'cmp-e', group: 'Complement', name: 'Complement of Empty Set', formula: "∅' = U",
// // // //       lhs: { symbol: "∅'", expr: () => !false }, rhs: { symbol: 'U', expr: () => true },
// // // //       definition: 'The complement of ∅ is the universe.' },

// // // //     // De Morgan's
// // // //     { id: 'dm-u', group: "De Morgan's Laws", name: 'Complement of Union', formula: "(A ∪ B)' = A' ∩ B'",
// // // //       lhs: { symbol: "(A ∪ B)'", expr: ({A,B}) => !(A || B) }, rhs: { symbol: "A' ∩ B'", expr: ({A,B}) => !A && !B },
// // // //       definition: 'The complement of a union equals the intersection of the complements.' },
// // // //     { id: 'dm-i', group: "De Morgan's Laws", name: 'Complement of Intersection', formula: "(A ∩ B)' = A' ∪ B'",
// // // //       lhs: { symbol: "(A ∩ B)'", expr: ({A,B}) => !(A && B) }, rhs: { symbol: "A' ∪ B'", expr: ({A,B}) => !A || !B },
// // // //       definition: 'The complement of an intersection equals the union of the complements.' },

// // // //     // Absorption
// // // //     { id: 'abs-u', group: 'Absorption', name: 'Absorption (Union)', formula: 'A ∪ (A ∩ B) = A',
// // // //       lhs: { symbol: 'A ∪ (A ∩ B)', expr: ({A,B}) => A || (A && B) }, rhs: { symbol: 'A', expr: ({A}) => A },
// // // //       definition: 'Uniting A with any subset of A leaves A unchanged.' },
// // // //     { id: 'abs-i', group: 'Absorption', name: 'Absorption (Intersection)', formula: 'A ∩ (A ∪ B) = A',
// // // //       lhs: { symbol: 'A ∩ (A ∪ B)', expr: ({A,B}) => A && (A || B) }, rhs: { symbol: 'A', expr: ({A}) => A },
// // // //       definition: 'Intersecting A with any superset of A leaves A unchanged.' },

// // // //     // Difference
// // // //     { id: 'diff', group: 'Difference', name: 'A minus B as Intersection', formula: "A \\ B = A ∩ B'",
// // // //       lhs: { symbol: 'A \\ B', expr: ({A,B}) => A && !B }, rhs: { symbol: "A ∩ B'", expr: ({A,B}) => A && !B },
// // // //       definition: 'Difference is intersection with the complement.' },
// // // //     { id: 'diff-r', group: 'Difference', name: 'B minus A as Intersection', formula: "B \\ A = A' ∩ B",
// // // //       lhs: { symbol: 'B \\ A', expr: ({A,B}) => B && !A }, rhs: { symbol: "A' ∩ B", expr: ({A,B}) => !A && B },
// // // //       definition: 'Symmetric form of the difference identity.' },
// // // //     { id: 'sd-1', group: 'Difference', name: 'Symmetric Difference as Union of Differences', formula: 'A △ B = (A \\ B) ∪ (B \\ A)',
// // // //       lhs: { symbol: 'A △ B', expr: ({A,B}) => A !== B }, rhs: { symbol: '(A \\ B) ∪ (B \\ A)', expr: ({A,B}) => (A && !B) || (B && !A) },
// // // //       definition: 'Symmetric difference equals the union of the two differences.' },
// // // //     { id: 'sd-2', group: 'Difference', name: 'Symmetric Difference as Union Minus Intersection', formula: "A △ B = (A ∪ B) ∩ (A ∩ B)'",
// // // //       lhs: { symbol: 'A △ B', expr: ({A,B}) => A !== B }, rhs: { symbol: "(A ∪ B) ∩ (A ∩ B)'", expr: ({A,B}) => (A || B) && !(A && B) },
// // // //       definition: 'Symmetric difference equals everything in the union except the intersection.' },
// // // //     { id: 'sd-c', group: 'Difference', name: 'Complement of Symmetric Difference', formula: "(A △ B)' = (A ∩ B) ∪ (A ∪ B)'",
// // // //       lhs: { symbol: "(A △ B)'", expr: ({A,B}) => !(A !== B) }, rhs: { symbol: "(A ∩ B) ∪ (A ∪ B)'", expr: ({A,B}) => (A && B) || !(A || B) },
// // // //       definition: 'The complement of A △ B contains the intersection plus everything outside both sets.' },

// // // //     // Compound Complements
// // // //     { id: 'cc-1', group: 'Compound Complements', name: "Complement of A' ∪ B", formula: "(A' ∪ B)' = A ∩ B'",
// // // //       lhs: { symbol: "(A' ∪ B)'", expr: ({A,B}) => !(!A || B) }, rhs: { symbol: "A ∩ B'", expr: ({A,B}) => A && !B },
// // // //       definition: "Derived from De Morgan's plus double complement." },
// // // //     { id: 'cc-2', group: 'Compound Complements', name: "Complement of A ∪ B'", formula: "(A ∪ B')' = A' ∩ B",
// // // //       lhs: { symbol: "(A ∪ B')'", expr: ({A,B}) => !(A || !B) }, rhs: { symbol: "A' ∩ B", expr: ({A,B}) => !A && B },
// // // //       definition: 'Mirror of the previous identity.' },
// // // //     { id: 'cc-3', group: 'Compound Complements', name: "Complement of A ∩ B'", formula: "(A ∩ B')' = A' ∪ B",
// // // //       lhs: { symbol: "(A ∩ B')'", expr: ({A,B}) => !(A && !B) }, rhs: { symbol: "A' ∪ B", expr: ({A,B}) => !A || B },
// // // //       definition: 'Useful in expressing material implication: A → B.' },
// // // //     { id: 'cc-4', group: 'Compound Complements', name: "Complement of A' ∩ B", formula: "(A' ∩ B)' = A ∪ B'",
// // // //       lhs: { symbol: "(A' ∩ B)'", expr: ({A,B}) => !(!A && B) }, rhs: { symbol: "A ∪ B'", expr: ({A,B}) => A || !B },
// // // //       definition: 'Mirror of the previous identity.' }
// // // //   ]
// // // // };

// // // // const GROUP_ORDER = ['Idempotent', 'Commutative', 'Identity & Annihilation', 'Complement', "De Morgan's Laws", 'Absorption', 'Difference', 'Compound Complements'];

// // // // export const TwoSetsLawsExplorer = ({ data = lawsData }) => {
// // // //   const { frame, defaults, theme: defaultTheme, identities } = data;
// // // //   const [currentId, setCurrentId] = useState(identities[0]?.id);
// // // //   const [themeColor, setThemeColor] = useState(defaultTheme.color);
// // // //   const [themeOpacity, setThemeOpacity] = useState(defaultTheme.opacity);

// // // //   const grouped = useMemo(() => identities.reduce((acc, it) => {
// // // //     const g = it.group || 'Other';
// // // //     if (!acc[g]) acc[g] = [];
// // // //     acc[g].push(it);
// // // //     return acc;
// // // //   }, {}), [identities]);
// // // //   const groups = useMemo(() => {
// // // //     const known = GROUP_ORDER.filter((g) => grouped[g]);
// // // //     const extras = Object.keys(grouped).filter((g) => !GROUP_ORDER.includes(g));
// // // //     return [...known, ...extras];
// // // //   }, [grouped]);

// // // //   const current = identities.find((it) => it.id === currentId) || identities[0];
// // // //   const idx = identities.findIndex((it) => it.id === currentId);

// // // //   const { lhsProps, rhsProps, matches } = useMemo(() => {
// // // //     if (!current) return { lhsProps: null, rhsProps: null, matches: false };
// // // //     const theme = { color: themeColor, opacity: themeOpacity, neutralFill: defaultTheme.neutralFill, outsideNeutralFill: defaultTheme.outsideNeutralFill };
// // // //     const common = {
// // // //       circles: defaults.circles, width: defaults.width, height: defaults.height,
// // // //       margin: defaults.margin, backgroundColor: defaults.backgroundColor, universe: defaults.universe, theme
// // // //     };
// // // //     return {
// // // //       lhsProps: { ...common, predicate: current.lhs.expr },
// // // //       rhsProps: { ...common, predicate: current.rhs.expr },
// // // //       matches: predicatesMatch(current.lhs.expr, current.rhs.expr)
// // // //     };
// // // //   }, [current, defaults, defaultTheme, themeColor, themeOpacity]);

// // // //   const goPrev = () => setCurrentId(identities[(idx - 1 + identities.length) % identities.length].id);
// // // //   const goNext = () => setCurrentId(identities[(idx + 1) % identities.length].id);
// // // //   const resetTheme = () => { setThemeColor(defaultTheme.color); setThemeOpacity(defaultTheme.opacity); };

// // // //   return (
// // // //     <div style={s.container}>
// // // //       <div style={s.header}>
// // // //         <h1 style={s.title}>{frame.title}</h1>
// // // //         <p style={s.subtitle}>{frame.subtitle}</p>
// // // //       </div>

// // // //       <div style={s.controls}>
// // // //         <div style={s.btnGroups}>
// // // //           {groups.map((g) => (
// // // //             <div key={g} style={s.btnGroup}>
// // // //               <span style={s.groupLabel}>{g}</span>
// // // //               <div style={s.groupBtns}>
// // // //                 {grouped[g].map((it) => (
// // // //                   <button key={it.id} style={{ ...s.btn, ...(currentId === it.id ? s.btnActive : {}) }}
// // // //                     onClick={() => setCurrentId(it.id)} title={it.name}>{it.formula}</button>
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
// // // //                 {grouped[g].map((it) => <option key={it.id} value={it.id}>{it.formula}</option>)}
// // // //               </optgroup>
// // // //             ))}
// // // //           </select>
// // // //         </div>
// // // //       </div>

// // // //       <div style={s.main}>
// // // //         <div style={s.col}>
// // // //           <div style={s.panel}>
// // // //             <div style={s.panelHead}>
// // // //               <span style={s.panelTitle}>Identity</span>
// // // //               <span style={s.badge}>{current?.formula}</span>
// // // //             </div>
// // // //             <div style={s.identityBox}>
// // // //               <div style={s.side}>
// // // //                 <div style={s.sideLabel}>{current?.lhs.symbol}</div>
// // // //                 {lhsProps && <Venncore {...lhsProps} />}
// // // //               </div>
// // // //               <div style={s.equals}>=</div>
// // // //               <div style={s.side}>
// // // //                 <div style={s.sideLabel}>{current?.rhs.symbol}</div>
// // // //                 {rhsProps && <Venncore {...rhsProps} />}
// // // //               </div>
// // // //             </div>
// // // //             <div style={s.matchRow}>
// // // //               <span style={{ ...s.matchBadge, ...(matches ? s.matchOk : s.matchFail) }}>
// // // //                 {matches ? '✓ Regions match — identity holds' : '✗ Regions differ'}
// // // //               </span>
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
// // // //             <span style={s.counter}>{idx + 1} / {identities.length}</span>
// // // //             <button style={s.navBtn} onClick={goNext}>Next →</button>
// // // //           </div>
// // // //         </div>

// // // //         <div style={s.explanationPanel}>
// // // //           <div style={s.panelHead}><span style={s.panelTitle}>Explanation</span></div>
// // // //           <div style={s.explanationBody}>
// // // //             <div style={s.scTitle}>
// // // //               <h2 style={s.scName}>{current?.name}</h2>
// // // //               <div style={s.scSymbol}>{current?.formula}</div>
// // // //             </div>
// // // //             <div style={s.section}>
// // // //               <h3 style={s.sectionTitle}>Definition</h3>
// // // //               <p style={s.sectionText}>{current?.definition || ''}</p>
// // // //             </div>
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
// // // //   identityBox: { padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', flexWrap: 'wrap' },
// // // //   side: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' },
// // // //   sideLabel: { fontSize: '14px', fontWeight: '600', color: '#1e293b', fontFamily: "'Cambria Math','Times New Roman',serif" },
// // // //   equals: { fontSize: '28px', fontWeight: '700', color: '#64748b' },
// // // //   matchRow: { padding: '0 16px 14px 16px', display: 'flex', justifyContent: 'center' },
// // // //   matchBadge: { padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
// // // //   matchOk: { backgroundColor: '#dcfce7', color: '#166534' },
// // // //   matchFail: { backgroundColor: '#fee2e2', color: '#991b1b' },
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



// // // 'use client';

// // // // ============================================================================
// // // // TWO-SETS LAWS & COMPLEX IDENTITIES — LHS = RHS visual proofs
// // // // ============================================================================
// // // // Two diagrams per identity. Imports renderer + helpers from venn-core.
// // // // ============================================================================

// // // import React, { useState, useMemo } from 'react';
// // // import { Venncore } from './Venncore';

// // // // Inline: check if two predicates produce identical truth tables on 2 sets.
// // // const TWO_SET_CASES = [
// // //   { A: false, B: false },
// // //   { A: true,  B: false },
// // //   { A: false, B: true  },
// // //   { A: true,  B: true  }
// // // ];
// // // const predicatesMatch = (p1, p2) =>
// // //   TWO_SET_CASES.every((v) => Boolean(p1(v)) === Boolean(p2(v)));

// // // const CIRCLE_STROKE = '#1e293b';

// // // const MINI_CIRCLES = {
// // //   A: { cx: 100, cy: 110, r: 55, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: 1, labelPosition: { x: 60, y: 180 } },
// // //   B: { cx: 160, cy: 110, r: 55, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: 1, labelPosition: { x: 200, y: 180 } }
// // // };

// // // export const lawsData = {
// // //   frame: {
// // //     title: 'Two-Set Laws & Complex Identities',
// // //     subtitle: 'Visual proofs — both diagrams should highlight the same regions'
// // //   },
// // //   defaults: {
// // //     width: 260, height: 210, margin: 6,
// // //     backgroundColor: '#ffffff',
// // //     universe: { label: 'U', labelPosition: { x: 18, y: 20 }, stroke: '#cbd5e1', strokeWidth: 1, labelFontSize: 12, labelColor: '#64748b' },
// // //     circles: MINI_CIRCLES
// // //   },
// // //   theme: { color: '#2563eb', opacity: 0.85, neutralFill: '#ffffff', outsideNeutralFill: '#ffffff' },
// // //   identities: [
// // //     // Idempotent
// // //     { id: 'idem-u', group: 'Idempotent', name: 'Idempotent (Union)', formula: 'A ∪ A = A',
// // //       lhs: { symbol: 'A ∪ A', expr: ({A}) => A || A }, rhs: { symbol: 'A', expr: ({A}) => A },
// // //       definition: 'Uniting a set with itself yields the same set.' },
// // //     { id: 'idem-i', group: 'Idempotent', name: 'Idempotent (Intersection)', formula: 'A ∩ A = A',
// // //       lhs: { symbol: 'A ∩ A', expr: ({A}) => A && A }, rhs: { symbol: 'A', expr: ({A}) => A },
// // //       definition: 'Intersecting a set with itself yields the same set.' },

// // //     // Commutative
// // //     { id: 'comm-u', group: 'Commutative', name: 'Commutative (Union)', formula: 'A ∪ B = B ∪ A',
// // //       lhs: { symbol: 'A ∪ B', expr: ({A,B}) => A || B }, rhs: { symbol: 'B ∪ A', expr: ({A,B}) => B || A },
// // //       definition: 'Order does not matter in union.' },
// // //     { id: 'comm-i', group: 'Commutative', name: 'Commutative (Intersection)', formula: 'A ∩ B = B ∩ A',
// // //       lhs: { symbol: 'A ∩ B', expr: ({A,B}) => A && B }, rhs: { symbol: 'B ∩ A', expr: ({A,B}) => B && A },
// // //       definition: 'Order does not matter in intersection.' },

// // //     // Identity & Annihilation
// // //     { id: 'id-u-e', group: 'Identity & Annihilation', name: 'Identity (Union with ∅)', formula: 'A ∪ ∅ = A',
// // //       lhs: { symbol: 'A ∪ ∅', expr: ({A}) => A || false }, rhs: { symbol: 'A', expr: ({A}) => A },
// // //       definition: '∅ is the identity element for union.' },
// // //     { id: 'id-i-u', group: 'Identity & Annihilation', name: 'Identity (Intersection with U)', formula: 'A ∩ U = A',
// // //       lhs: { symbol: 'A ∩ U', expr: ({A}) => A && true }, rhs: { symbol: 'A', expr: ({A}) => A },
// // //       definition: 'U is the identity element for intersection.' },
// // //     { id: 'ann-i', group: 'Identity & Annihilation', name: 'Annihilation (Intersection with ∅)', formula: 'A ∩ ∅ = ∅',
// // //       lhs: { symbol: 'A ∩ ∅', expr: ({A}) => A && false }, rhs: { symbol: '∅', expr: () => false },
// // //       definition: 'Intersecting with ∅ always gives ∅.' },
// // //     { id: 'ann-u', group: 'Identity & Annihilation', name: 'Annihilation (Union with U)', formula: 'A ∪ U = U',
// // //       lhs: { symbol: 'A ∪ U', expr: ({A}) => A || true }, rhs: { symbol: 'U', expr: () => true },
// // //       definition: 'Uniting with U always gives U.' },

// // //     // Complement
// // //     { id: 'cmp-u', group: 'Complement', name: 'Complement Law (Union)', formula: "A ∪ A' = U",
// // //       lhs: { symbol: "A ∪ A'", expr: ({A}) => A || !A }, rhs: { symbol: 'U', expr: () => true },
// // //       definition: 'A set together with its complement is the universe.' },
// // //     { id: 'cmp-i', group: 'Complement', name: 'Complement Law (Intersection)', formula: "A ∩ A' = ∅",
// // //       lhs: { symbol: "A ∩ A'", expr: ({A}) => A && !A }, rhs: { symbol: '∅', expr: () => false },
// // //       definition: 'A set and its complement share no elements.' },
// // //     { id: 'dcmp', group: 'Complement', name: 'Double Complement (Involution)', formula: "(A')' = A",
// // //       lhs: { symbol: "(A')'", expr: ({A}) => !(!A) }, rhs: { symbol: 'A', expr: ({A}) => A },
// // //       definition: 'Complementing twice returns the original set.' },
// // //     { id: 'cmp-U', group: 'Complement', name: 'Complement of Universe', formula: "U' = ∅",
// // //       lhs: { symbol: "U'", expr: () => !true }, rhs: { symbol: '∅', expr: () => false },
// // //       definition: 'The complement of U is the empty set.' },
// // //     { id: 'cmp-e', group: 'Complement', name: 'Complement of Empty Set', formula: "∅' = U",
// // //       lhs: { symbol: "∅'", expr: () => !false }, rhs: { symbol: 'U', expr: () => true },
// // //       definition: 'The complement of ∅ is the universe.' },

// // //     // De Morgan's
// // //     { id: 'dm-u', group: "De Morgan's Laws", name: 'Complement of Union', formula: "(A ∪ B)' = A' ∩ B'",
// // //       lhs: { symbol: "(A ∪ B)'", expr: ({A,B}) => !(A || B) }, rhs: { symbol: "A' ∩ B'", expr: ({A,B}) => !A && !B },
// // //       definition: 'The complement of a union equals the intersection of the complements.' },
// // //     { id: 'dm-i', group: "De Morgan's Laws", name: 'Complement of Intersection', formula: "(A ∩ B)' = A' ∪ B'",
// // //       lhs: { symbol: "(A ∩ B)'", expr: ({A,B}) => !(A && B) }, rhs: { symbol: "A' ∪ B'", expr: ({A,B}) => !A || !B },
// // //       definition: 'The complement of an intersection equals the union of the complements.' },

// // //     // Absorption
// // //     { id: 'abs-u', group: 'Absorption', name: 'Absorption (Union)', formula: 'A ∪ (A ∩ B) = A',
// // //       lhs: { symbol: 'A ∪ (A ∩ B)', expr: ({A,B}) => A || (A && B) }, rhs: { symbol: 'A', expr: ({A}) => A },
// // //       definition: 'Uniting A with any subset of A leaves A unchanged.' },
// // //     { id: 'abs-i', group: 'Absorption', name: 'Absorption (Intersection)', formula: 'A ∩ (A ∪ B) = A',
// // //       lhs: { symbol: 'A ∩ (A ∪ B)', expr: ({A,B}) => A && (A || B) }, rhs: { symbol: 'A', expr: ({A}) => A },
// // //       definition: 'Intersecting A with any superset of A leaves A unchanged.' },

// // //     // Difference
// // //     { id: 'diff', group: 'Difference', name: 'A minus B as Intersection', formula: "A \\ B = A ∩ B'",
// // //       lhs: { symbol: 'A \\ B', expr: ({A,B}) => A && !B }, rhs: { symbol: "A ∩ B'", expr: ({A,B}) => A && !B },
// // //       definition: 'Difference is intersection with the complement.' },
// // //     { id: 'diff-r', group: 'Difference', name: 'B minus A as Intersection', formula: "B \\ A = A' ∩ B",
// // //       lhs: { symbol: 'B \\ A', expr: ({A,B}) => B && !A }, rhs: { symbol: "A' ∩ B", expr: ({A,B}) => !A && B },
// // //       definition: 'Symmetric form of the difference identity.' },
// // //     { id: 'sd-1', group: 'Difference', name: 'Symmetric Difference as Union of Differences', formula: 'A △ B = (A \\ B) ∪ (B \\ A)',
// // //       lhs: { symbol: 'A △ B', expr: ({A,B}) => A !== B }, rhs: { symbol: '(A \\ B) ∪ (B \\ A)', expr: ({A,B}) => (A && !B) || (B && !A) },
// // //       definition: 'Symmetric difference equals the union of the two differences.' },
// // //     { id: 'sd-2', group: 'Difference', name: 'Symmetric Difference as Union Minus Intersection', formula: "A △ B = (A ∪ B) ∩ (A ∩ B)'",
// // //       lhs: { symbol: 'A △ B', expr: ({A,B}) => A !== B }, rhs: { symbol: "(A ∪ B) ∩ (A ∩ B)'", expr: ({A,B}) => (A || B) && !(A && B) },
// // //       definition: 'Symmetric difference equals everything in the union except the intersection.' },
// // //     { id: 'sd-c', group: 'Difference', name: 'Complement of Symmetric Difference', formula: "(A △ B)' = (A ∩ B) ∪ (A ∪ B)'",
// // //       lhs: { symbol: "(A △ B)'", expr: ({A,B}) => !(A !== B) }, rhs: { symbol: "(A ∩ B) ∪ (A ∪ B)'", expr: ({A,B}) => (A && B) || !(A || B) },
// // //       definition: 'The complement of A △ B contains the intersection plus everything outside both sets.' },

// // //     // Compound Complements
// // //     { id: 'cc-1', group: 'Compound Complements', name: "Complement of A' ∪ B", formula: "(A' ∪ B)' = A ∩ B'",
// // //       lhs: { symbol: "(A' ∪ B)'", expr: ({A,B}) => !(!A || B) }, rhs: { symbol: "A ∩ B'", expr: ({A,B}) => A && !B },
// // //       definition: "Derived from De Morgan's plus double complement." },
// // //     { id: 'cc-2', group: 'Compound Complements', name: "Complement of A ∪ B'", formula: "(A ∪ B')' = A' ∩ B",
// // //       lhs: { symbol: "(A ∪ B')'", expr: ({A,B}) => !(A || !B) }, rhs: { symbol: "A' ∩ B", expr: ({A,B}) => !A && B },
// // //       definition: 'Mirror of the previous identity.' },
// // //     { id: 'cc-3', group: 'Compound Complements', name: "Complement of A ∩ B'", formula: "(A ∩ B')' = A' ∪ B",
// // //       lhs: { symbol: "(A ∩ B')'", expr: ({A,B}) => !(A && !B) }, rhs: { symbol: "A' ∪ B", expr: ({A,B}) => !A || B },
// // //       definition: 'Useful in expressing material implication: A → B.' },
// // //     { id: 'cc-4', group: 'Compound Complements', name: "Complement of A' ∩ B", formula: "(A' ∩ B)' = A ∪ B'",
// // //       lhs: { symbol: "(A' ∩ B)'", expr: ({A,B}) => !(!A && B) }, rhs: { symbol: "A ∪ B'", expr: ({A,B}) => A || !B },
// // //       definition: 'Mirror of the previous identity.' }
// // //   ]
// // // };

// // // const GROUP_ORDER = ['Idempotent', 'Commutative', 'Identity & Annihilation', 'Complement', "De Morgan's Laws", 'Absorption', 'Difference', 'Compound Complements'];

// // // export const TwoSetsLawsExplorer = ({ data = lawsData }) => {
// // //   const { frame, defaults, theme: defaultTheme, identities } = data;
// // //   const [currentId, setCurrentId] = useState(identities[0]?.id);
// // //   const [themeColor, setThemeColor] = useState(defaultTheme.color);
// // //   const [themeOpacity, setThemeOpacity] = useState(defaultTheme.opacity);

// // //   const grouped = useMemo(() => identities.reduce((acc, it) => {
// // //     const g = it.group || 'Other';
// // //     if (!acc[g]) acc[g] = [];
// // //     acc[g].push(it);
// // //     return acc;
// // //   }, {}), [identities]);
// // //   const groups = useMemo(() => {
// // //     const known = GROUP_ORDER.filter((g) => grouped[g]);
// // //     const extras = Object.keys(grouped).filter((g) => !GROUP_ORDER.includes(g));
// // //     return [...known, ...extras];
// // //   }, [grouped]);

// // //   const current = identities.find((it) => it.id === currentId) || identities[0];
// // //   const idx = identities.findIndex((it) => it.id === currentId);

// // //   const { lhsProps, rhsProps, matches } = useMemo(() => {
// // //     if (!current) return { lhsProps: null, rhsProps: null, matches: false };
// // //     const theme = { color: themeColor, opacity: themeOpacity, neutralFill: defaultTheme.neutralFill, outsideNeutralFill: defaultTheme.outsideNeutralFill };
// // //     const common = {
// // //       circles: defaults.circles, width: defaults.width, height: defaults.height,
// // //       margin: defaults.margin, backgroundColor: defaults.backgroundColor, universe: defaults.universe, theme
// // //     };
// // //     return {
// // //       lhsProps: { ...common, predicate: current.lhs.expr },
// // //       rhsProps: { ...common, predicate: current.rhs.expr },
// // //       matches: predicatesMatch(current.lhs.expr, current.rhs.expr)
// // //     };
// // //   }, [current, defaults, defaultTheme, themeColor, themeOpacity]);

// // //   const goPrev = () => setCurrentId(identities[(idx - 1 + identities.length) % identities.length].id);
// // //   const goNext = () => setCurrentId(identities[(idx + 1) % identities.length].id);
// // //   const resetTheme = () => { setThemeColor(defaultTheme.color); setThemeOpacity(defaultTheme.opacity); };

// // //   return (
// // //     <div style={s.container}>
// // //       <div style={s.header}>
// // //         {/* <h1 style={s.title}>{frame.title}</h1> */}
// // //         <p style={s.subtitle}>{frame.subtitle}</p>
// // //       </div>

// // //       <div style={s.controls}>
// // //         <div style={s.btnGroups}>
// // //           {groups.map((g) => (
// // //             <div key={g} style={s.btnGroup}>
// // //               <span style={s.groupLabel}>{g}</span>
// // //               <div style={s.groupBtns}>
// // //                 {grouped[g].map((it) => (
// // //                   <button key={it.id} style={{ ...s.btn, ...(currentId === it.id ? s.btnActive : {}) }}
// // //                     onClick={() => setCurrentId(it.id)} title={it.name}>{it.formula}</button>
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
// // //                 {grouped[g].map((it) => <option key={it.id} value={it.id}>{it.formula}</option>)}
// // //               </optgroup>
// // //             ))}
// // //           </select>
// // //         </div>
// // //       </div>

// // //       <div style={s.main}>
// // //         <div style={s.col}>
// // //           <div style={s.panel}>
// // //             <div style={s.panelHead}>
// // //               <span style={s.panelTitle}>Identity</span>
// // //               <span style={s.badge}>{current?.formula}</span>
// // //             </div>
// // //             <div style={s.identityBox}>
// // //               <div style={s.side}>
// // //                 <div style={s.sideLabel}>{current?.lhs.symbol}</div>
// // //                 {lhsProps && <Venncore {...lhsProps} />}
// // //               </div>
// // //               <div style={s.equals}>=</div>
// // //               <div style={s.side}>
// // //                 <div style={s.sideLabel}>{current?.rhs.symbol}</div>
// // //                 {rhsProps && <Venncore {...rhsProps} />}
// // //               </div>
// // //             </div>
// // //             <div style={s.matchRow}>
// // //               <span style={{ ...s.matchBadge, ...(matches ? s.matchOk : s.matchFail) }}>
// // //                 {matches ? '✓ Regions match — identity holds' : '✗ Regions differ'}
// // //               </span>
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
// // //             <span style={s.counter}>{idx + 1} / {identities.length}</span>
// // //             <button style={s.navBtn} onClick={goNext}>Next →</button>
// // //           </div>
// // //         </div>

// // //         <div style={s.explanationPanel}>
// // //           <div style={s.panelHead}><span style={s.panelTitle}>Explanation</span></div>
// // //           <div style={s.explanationBody}>
// // //             <div style={s.scTitle}>
// // //               <h2 style={s.scName}>{current?.name}</h2>
// // //               <div style={s.scSymbol}>{current?.formula}</div>
// // //             </div>
// // //             <div style={s.section}>
// // //               <h3 style={s.sectionTitle}>Definition</h3>
// // //               <p style={s.sectionText}>{current?.definition || ''}</p>
// // //             </div>
// // //           </div>
// // //         </div>
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
// // //   identityBox: { padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', flexWrap: 'wrap' },
// // //   side: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' },
// // //   sideLabel: { fontSize: '14px', fontWeight: '600', color: '#1e293b', fontFamily: "'Cambria Math','Times New Roman',serif" },
// // //   equals: { fontSize: '28px', fontWeight: '700', color: '#64748b' },
// // //   matchRow: { padding: '0 16px 14px 16px', display: 'flex', justifyContent: 'center' },
// // //   matchBadge: { padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
// // //   matchOk: { backgroundColor: '#dcfce7', color: '#166534' },
// // //   matchFail: { backgroundColor: '#fee2e2', color: '#991b1b' },
// // //   themeBody: { padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' },
// // //   tLabel: { fontSize: '12px', fontWeight: '600', color: '#64748b' },
// // //   color: { width: '36px', height: '28px', border: '1px solid #cbd5e1', borderRadius: '4px', cursor: 'pointer', padding: '2px', background: '#fff' },
// // //   range: { flex: 1, cursor: 'pointer' },
// // //   opVal: { fontSize: '12px', color: '#64748b', minWidth: '36px', fontFamily: 'monospace' },
// // //   reset: { padding: '4px 12px', fontSize: '11px', fontWeight: '600', color: '#64748b', backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '4px', cursor: 'pointer' },
// // //   nav: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '12px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' },
// // //   navBtn: { padding: '8px 20px', fontSize: '13px', fontWeight: '600', color: '#fff', backgroundColor: '#245de1', border: 'none', borderRadius: '6px', cursor: 'pointer' },
// // //   counter: { fontSize: '13px', fontWeight: '600', color: '#64748b', minWidth: '70px', textAlign: 'center' },
// // //   explanationPanel: { flex: '1 1 350px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', overflow: 'hidden', display: 'flex', flexDirection: 'column' },
// // //   explanationBody: { padding: '20px' },
// // //   scTitle: { marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #e2e8f0' },
// // //   scName: { margin: '0 0 6px 0', fontSize: '20px', fontWeight: '700', color: '#1e293b' },
// // //   scSymbol: { display: 'inline-block', padding: '6px 12px', backgroundColor: '#f1f5f9', borderRadius: '6px', fontSize: '18px', fontWeight: '600', color: '#245de1', fontFamily: "'Cambria Math','Times New Roman',serif" },
// // //   section: { marginBottom: '16px' },
// // //   sectionTitle: { margin: '0 0 6px 0', fontSize: '11px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' },
// // //   sectionText: { margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#475569' }
// // // };

// // // export default TwoSetsLawsExplorer;



// // 'use client';

// // // ============================================================================
// // // TWO-SETS LAWS & COMPLEX IDENTITIES — LHS = RHS visual proofs
// // // ============================================================================
// // // Two diagrams per identity. Imports renderer + helpers from venn-core.
// // // Controls compacted into tabs (group tabs + active-group formula row).
// // // ============================================================================

// // import React, { useState, useMemo, useRef, useEffect } from 'react';
// // import { Venncore } from './Venncore';

// // // Inline: check if two predicates produce identical truth tables on 2 sets.
// // const TWO_SET_CASES = [
// //   { A: false, B: false },
// //   { A: true,  B: false },
// //   { A: false, B: true  },
// //   { A: true,  B: true  }
// // ];
// // const predicatesMatch = (p1, p2) =>
// //   TWO_SET_CASES.every((v) => Boolean(p1(v)) === Boolean(p2(v)));

// // const CIRCLE_STROKE = '#1e293b';

// // const MINI_CIRCLES = {
// //   A: { cx: 100, cy: 110, r: 55, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: 1, labelPosition: { x: 60, y: 180 } },
// //   B: { cx: 160, cy: 110, r: 55, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: 1, labelPosition: { x: 200, y: 180 } }
// // };

// // export const lawsData = {
// //   frame: {
// //     title: 'Two-Set Laws & Complex Identities',
// //     subtitle: 'Visual proofs — both diagrams should highlight the same regions'
// //   },
// //   defaults: {
// //     width: 260, height: 210, margin: 6,
// //     backgroundColor: '#ffffff',
// //     universe: { label: 'U', labelPosition: { x: 18, y: 20 }, stroke: '#cbd5e1', strokeWidth: 1, labelFontSize: 12, labelColor: '#64748b' },
// //     circles: MINI_CIRCLES
// //   },
// //   theme: { color: '#2563eb', opacity: 0.85, neutralFill: '#ffffff', outsideNeutralFill: '#ffffff' },
// //   identities: [
// //     // Idempotent
// //     { id: 'idem-u', group: 'Idempotent', name: 'Idempotent (Union)', formula: 'A ∪ A = A',
// //       lhs: { symbol: 'A ∪ A', expr: ({A}) => A || A }, rhs: { symbol: 'A', expr: ({A}) => A },
// //       definition: 'Uniting a set with itself yields the same set.' },
// //     { id: 'idem-i', group: 'Idempotent', name: 'Idempotent (Intersection)', formula: 'A ∩ A = A',
// //       lhs: { symbol: 'A ∩ A', expr: ({A}) => A && A }, rhs: { symbol: 'A', expr: ({A}) => A },
// //       definition: 'Intersecting a set with itself yields the same set.' },

// //     // Commutative
// //     { id: 'comm-u', group: 'Commutative', name: 'Commutative (Union)', formula: 'A ∪ B = B ∪ A',
// //       lhs: { symbol: 'A ∪ B', expr: ({A,B}) => A || B }, rhs: { symbol: 'B ∪ A', expr: ({A,B}) => B || A },
// //       definition: 'Order does not matter in union.' },
// //     { id: 'comm-i', group: 'Commutative', name: 'Commutative (Intersection)', formula: 'A ∩ B = B ∩ A',
// //       lhs: { symbol: 'A ∩ B', expr: ({A,B}) => A && B }, rhs: { symbol: 'B ∩ A', expr: ({A,B}) => B && A },
// //       definition: 'Order does not matter in intersection.' },

// //     // Identity & Annihilation
// //     { id: 'id-u-e', group: 'Identity & Annihilation', name: 'Identity (Union with ∅)', formula: 'A ∪ ∅ = A',
// //       lhs: { symbol: 'A ∪ ∅', expr: ({A}) => A || false }, rhs: { symbol: 'A', expr: ({A}) => A },
// //       definition: '∅ is the identity element for union.' },
// //     { id: 'id-i-u', group: 'Identity & Annihilation', name: 'Identity (Intersection with U)', formula: 'A ∩ U = A',
// //       lhs: { symbol: 'A ∩ U', expr: ({A}) => A && true }, rhs: { symbol: 'A', expr: ({A}) => A },
// //       definition: 'U is the identity element for intersection.' },
// //     { id: 'ann-i', group: 'Identity & Annihilation', name: 'Annihilation (Intersection with ∅)', formula: 'A ∩ ∅ = ∅',
// //       lhs: { symbol: 'A ∩ ∅', expr: ({A}) => A && false }, rhs: { symbol: '∅', expr: () => false },
// //       definition: 'Intersecting with ∅ always gives ∅.' },
// //     { id: 'ann-u', group: 'Identity & Annihilation', name: 'Annihilation (Union with U)', formula: 'A ∪ U = U',
// //       lhs: { symbol: 'A ∪ U', expr: ({A}) => A || true }, rhs: { symbol: 'U', expr: () => true },
// //       definition: 'Uniting with U always gives U.' },

// //     // Complement
// //     { id: 'cmp-u', group: 'Complement', name: 'Complement Law (Union)', formula: "A ∪ A' = U",
// //       lhs: { symbol: "A ∪ A'", expr: ({A}) => A || !A }, rhs: { symbol: 'U', expr: () => true },
// //       definition: 'A set together with its complement is the universe.' },
// //     { id: 'cmp-i', group: 'Complement', name: 'Complement Law (Intersection)', formula: "A ∩ A' = ∅",
// //       lhs: { symbol: "A ∩ A'", expr: ({A}) => A && !A }, rhs: { symbol: '∅', expr: () => false },
// //       definition: 'A set and its complement share no elements.' },
// //     { id: 'dcmp', group: 'Complement', name: 'Double Complement (Involution)', formula: "(A')' = A",
// //       lhs: { symbol: "(A')'", expr: ({A}) => !(!A) }, rhs: { symbol: 'A', expr: ({A}) => A },
// //       definition: 'Complementing twice returns the original set.' },
// //     { id: 'cmp-U', group: 'Complement', name: 'Complement of Universe', formula: "U' = ∅",
// //       lhs: { symbol: "U'", expr: () => !true }, rhs: { symbol: '∅', expr: () => false },
// //       definition: 'The complement of U is the empty set.' },
// //     { id: 'cmp-e', group: 'Complement', name: 'Complement of Empty Set', formula: "∅' = U",
// //       lhs: { symbol: "∅'", expr: () => !false }, rhs: { symbol: 'U', expr: () => true },
// //       definition: 'The complement of ∅ is the universe.' },

// //     // De Morgan's
// //     { id: 'dm-u', group: "De Morgan's Laws", name: 'Complement of Union', formula: "(A ∪ B)' = A' ∩ B'",
// //       lhs: { symbol: "(A ∪ B)'", expr: ({A,B}) => !(A || B) }, rhs: { symbol: "A' ∩ B'", expr: ({A,B}) => !A && !B },
// //       definition: 'The complement of a union equals the intersection of the complements.' },
// //     { id: 'dm-i', group: "De Morgan's Laws", name: 'Complement of Intersection', formula: "(A ∩ B)' = A' ∪ B'",
// //       lhs: { symbol: "(A ∩ B)'", expr: ({A,B}) => !(A && B) }, rhs: { symbol: "A' ∪ B'", expr: ({A,B}) => !A || !B },
// //       definition: 'The complement of an intersection equals the union of the complements.' },

// //     // Absorption
// //     { id: 'abs-u', group: 'Absorption', name: 'Absorption (Union)', formula: 'A ∪ (A ∩ B) = A',
// //       lhs: { symbol: 'A ∪ (A ∩ B)', expr: ({A,B}) => A || (A && B) }, rhs: { symbol: 'A', expr: ({A}) => A },
// //       definition: 'Uniting A with any subset of A leaves A unchanged.' },
// //     { id: 'abs-i', group: 'Absorption', name: 'Absorption (Intersection)', formula: 'A ∩ (A ∪ B) = A',
// //       lhs: { symbol: 'A ∩ (A ∪ B)', expr: ({A,B}) => A && (A || B) }, rhs: { symbol: 'A', expr: ({A}) => A },
// //       definition: 'Intersecting A with any superset of A leaves A unchanged.' },

// //     // Difference
// //     { id: 'diff', group: 'Difference', name: 'A minus B as Intersection', formula: "A \\ B = A ∩ B'",
// //       lhs: { symbol: 'A \\ B', expr: ({A,B}) => A && !B }, rhs: { symbol: "A ∩ B'", expr: ({A,B}) => A && !B },
// //       definition: 'Difference is intersection with the complement.' },
// //     { id: 'diff-r', group: 'Difference', name: 'B minus A as Intersection', formula: "B \\ A = A' ∩ B",
// //       lhs: { symbol: 'B \\ A', expr: ({A,B}) => B && !A }, rhs: { symbol: "A' ∩ B", expr: ({A,B}) => !A && B },
// //       definition: 'Symmetric form of the difference identity.' },
// //     { id: 'sd-1', group: 'Difference', name: 'Symmetric Difference as Union of Differences', formula: 'A △ B = (A \\ B) ∪ (B \\ A)',
// //       lhs: { symbol: 'A △ B', expr: ({A,B}) => A !== B }, rhs: { symbol: '(A \\ B) ∪ (B \\ A)', expr: ({A,B}) => (A && !B) || (B && !A) },
// //       definition: 'Symmetric difference equals the union of the two differences.' },
// //     { id: 'sd-2', group: 'Difference', name: 'Symmetric Difference as Union Minus Intersection', formula: "A △ B = (A ∪ B) ∩ (A ∩ B)'",
// //       lhs: { symbol: 'A △ B', expr: ({A,B}) => A !== B }, rhs: { symbol: "(A ∪ B) ∩ (A ∩ B)'", expr: ({A,B}) => (A || B) && !(A && B) },
// //       definition: 'Symmetric difference equals everything in the union except the intersection.' },
// //     { id: 'sd-c', group: 'Difference', name: 'Complement of Symmetric Difference', formula: "(A △ B)' = (A ∩ B) ∪ (A ∪ B)'",
// //       lhs: { symbol: "(A △ B)'", expr: ({A,B}) => !(A !== B) }, rhs: { symbol: "(A ∩ B) ∪ (A ∪ B)'", expr: ({A,B}) => (A && B) || !(A || B) },
// //       definition: 'The complement of A △ B contains the intersection plus everything outside both sets.' },

// //     // Compound Complements
// //     { id: 'cc-1', group: 'Compound Complements', name: "Complement of A' ∪ B", formula: "(A' ∪ B)' = A ∩ B'",
// //       lhs: { symbol: "(A' ∪ B)'", expr: ({A,B}) => !(!A || B) }, rhs: { symbol: "A ∩ B'", expr: ({A,B}) => A && !B },
// //       definition: "Derived from De Morgan's plus double complement." },
// //     { id: 'cc-2', group: 'Compound Complements', name: "Complement of A ∪ B'", formula: "(A ∪ B')' = A' ∩ B",
// //       lhs: { symbol: "(A ∪ B')'", expr: ({A,B}) => !(A || !B) }, rhs: { symbol: "A' ∩ B", expr: ({A,B}) => !A && B },
// //       definition: 'Mirror of the previous identity.' },
// //     { id: 'cc-3', group: 'Compound Complements', name: "Complement of A ∩ B'", formula: "(A ∩ B')' = A' ∪ B",
// //       lhs: { symbol: "(A ∩ B')'", expr: ({A,B}) => !(A && !B) }, rhs: { symbol: "A' ∪ B", expr: ({A,B}) => !A || B },
// //       definition: 'Useful in expressing material implication: A → B.' },
// //     { id: 'cc-4', group: 'Compound Complements', name: "Complement of A' ∩ B", formula: "(A' ∩ B)' = A ∪ B'",
// //       lhs: { symbol: "(A' ∩ B)'", expr: ({A,B}) => !(!A && B) }, rhs: { symbol: "A ∪ B'", expr: ({A,B}) => A || !B },
// //       definition: 'Mirror of the previous identity.' }
// //   ]
// // };

// // const GROUP_ORDER = ['Idempotent', 'Commutative', 'Identity & Annihilation', 'Complement', "De Morgan's Laws", 'Absorption', 'Difference', 'Compound Complements'];

// // // Inject CSS once to hide horizontal scrollbar on the tabs strip while keeping scroll behavior.
// // // Inline styles can&apos;t target ::-webkit-scrollbar, so we use a stylesheet.
// // const SCROLLBAR_CSS_ID = 'venn-laws-explorer-noscrollbar';
// // const SCROLLBAR_CSS = `
// // .venn-laws-tabs-strip {
// //   scrollbar-width: none;
// //   -ms-overflow-style: none;
// // }
// // .venn-laws-tabs-strip::-webkit-scrollbar {
// //   display: none;
// //   width: 0;
// //   height: 0;
// // }
// // `;
// // function useInjectScrollbarCss() {
// //   useEffect(() => {
// //     if (typeof document === 'undefined') return;
// //     if (document.getElementById(SCROLLBAR_CSS_ID)) return;
// //     const style = document.createElement('style');
// //     style.id = SCROLLBAR_CSS_ID;
// //     style.textContent = SCROLLBAR_CSS;
// //     document.head.appendChild(style);
// //   }, []);
// // }

// // export const TwoSetsLawsExplorer = ({ data = lawsData }) => {
// //   useInjectScrollbarCss();

// //   const { frame, defaults, theme: defaultTheme, identities } = data;
// //   const [currentId, setCurrentId] = useState(identities[0]?.id);
// //   const [themeColor, setThemeColor] = useState(defaultTheme.color);
// //   const [themeOpacity, setThemeOpacity] = useState(defaultTheme.opacity);

// //   const grouped = useMemo(() => identities.reduce((acc, it) => {
// //     const g = it.group || 'Other';
// //     if (!acc[g]) acc[g] = [];
// //     acc[g].push(it);
// //     return acc;
// //   }, {}), [identities]);
// //   const groups = useMemo(() => {
// //     const known = GROUP_ORDER.filter((g) => grouped[g]);
// //     const extras = Object.keys(grouped).filter((g) => !GROUP_ORDER.includes(g));
// //     return [...known, ...extras];
// //   }, [grouped]);

// //   const current = identities.find((it) => it.id === currentId) || identities[0];
// //   const idx = identities.findIndex((it) => it.id === currentId);

// //   // Active tab follows the current identity&apos;s group, but the user can also switch tabs
// //   // independently. We track the tab in its own state and sync it whenever currentId
// //   // moves into a different group (e.g. via prev/next or the jump-to dropdown).
// //   const [activeGroup, setActiveGroup] = useState(current?.group || groups[0]);
// //   const lastSyncedIdRef = useRef(currentId);
// //   useEffect(() => {
// //     if (lastSyncedIdRef.current !== currentId) {
// //       lastSyncedIdRef.current = currentId;
// //       if (current?.group && current.group !== activeGroup) setActiveGroup(current.group);
// //     }
// //   }, [currentId, current, activeGroup]);

// //   const { lhsProps, rhsProps, matches } = useMemo(() => {
// //     if (!current) return { lhsProps: null, rhsProps: null, matches: false };
// //     const theme = { color: themeColor, opacity: themeOpacity, neutralFill: defaultTheme.neutralFill, outsideNeutralFill: defaultTheme.outsideNeutralFill };
// //     const common = {
// //       circles: defaults.circles, width: defaults.width, height: defaults.height,
// //       margin: defaults.margin, backgroundColor: defaults.backgroundColor, universe: defaults.universe, theme
// //     };
// //     return {
// //       lhsProps: { ...common, predicate: current.lhs.expr },
// //       rhsProps: { ...common, predicate: current.rhs.expr },
// //       matches: predicatesMatch(current.lhs.expr, current.rhs.expr)
// //     };
// //   }, [current, defaults, defaultTheme, themeColor, themeOpacity]);

// //   const goPrev = () => setCurrentId(identities[(idx - 1 + identities.length) % identities.length].id);
// //   const goNext = () => setCurrentId(identities[(idx + 1) % identities.length].id);
// //   const resetTheme = () => { setThemeColor(defaultTheme.color); setThemeOpacity(defaultTheme.opacity); };

// //   const activeItems = grouped[activeGroup] || [];

// //   return (
// //     <div style={s.container}>
// //       <div style={s.header}>
// //         {/* <h1 style={s.title}>{frame.title}</h1> */}
// //         <p style={s.subtitle}>{frame.subtitle}</p>
// //       </div>

// //       <div style={s.controls}>
// //         {/* Tabs strip — horizontally scrollable, scrollbar hidden via injected CSS class */}
// //         <div className="venn-laws-tabs-strip" style={s.tabsStrip}>
// //           {groups.map((g) => {
// //             const isActive = g === activeGroup;
// //             return (
// //               <button
// //                 key={g}
// //                 style={{ ...s.tab, ...(isActive ? s.tabActive : {}) }}
// //                 onClick={() => setActiveGroup(g)}
// //                 title={g}
// //               >
// //                 {g}
// //               </button>
// //             );
// //           })}
// //         </div>

// //         {/* Active group&apos;s formulas + jump-to dropdown on the same row */}
// //         <div style={s.tabBody}>
// //           <div style={s.formulaRow}>
// //             {activeItems.map((it) => (
// //               <button
// //                 key={it.id}
// //                 style={{ ...s.btn, ...(currentId === it.id ? s.btnActive : {}) }}
// //                 onClick={() => setCurrentId(it.id)}
// //                 title={it.name}
// //               >
// //                 {it.formula}
// //               </button>
// //             ))}
// //           </div>
// //           <div style={s.dropdownWrap}>
// //             <span style={s.groupLabel}>Jump to</span>
// //             <select style={s.dropdown} value={currentId} onChange={(e) => setCurrentId(e.target.value)}>
// //               {groups.map((g) => (
// //                 <optgroup key={g} label={g}>
// //                   {grouped[g].map((it) => <option key={it.id} value={it.id}>{it.formula}</option>)}
// //                 </optgroup>
// //               ))}
// //             </select>
// //           </div>
// //         </div>
// //       </div>

// //       <div style={s.main}>
// //         <div style={s.col}>
// //           <div style={s.panel}>
// //             <div style={s.panelHead}>
// //               <span style={s.panelTitle}>Identity</span>
// //               <span style={s.badge}>{current?.formula}</span>
// //             </div>
// //             <div style={s.identityBox}>
// //               <div style={s.side}>
// //                 <div style={s.sideLabel}>{current?.lhs.symbol}</div>
// //                 {lhsProps && <Venncore {...lhsProps} />}
// //               </div>
// //               <div style={s.equals}>=</div>
// //               <div style={s.side}>
// //                 <div style={s.sideLabel}>{current?.rhs.symbol}</div>
// //                 {rhsProps && <Venncore {...rhsProps} />}
// //               </div>
// //             </div>
// //             <div style={s.matchRow}>
// //               <span style={{ ...s.matchBadge, ...(matches ? s.matchOk : s.matchFail) }}>
// //                 {matches ? '✓ Regions match — identity holds' : '✗ Regions differ'}
// //               </span>
// //             </div>
// //           </div>

// //           <div style={s.panel}>
// //             <div style={s.panelHead}>
// //               <span style={s.panelTitle}>Theme</span>
// //               <button style={s.reset} onClick={resetTheme}>Reset</button>
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
// //             <button style={s.navBtn} onClick={goPrev}>← Previous</button>
// //             <span style={s.counter}>{idx + 1} / {identities.length}</span>
// //             <button style={s.navBtn} onClick={goNext}>Next →</button>
// //           </div>
// //         </div>

// //         <div style={s.explanationPanel}>
// //           <div style={s.panelHead}><span style={s.panelTitle}>Explanation</span></div>
// //           <div style={s.explanationBody}>
// //             <div style={s.scTitle}>
// //               <h2 style={s.scName}>{current?.name}</h2>
// //               <div style={s.scSymbol}>{current?.formula}</div>
// //             </div>
// //             <div style={s.section}>
// //               <h3 style={s.sectionTitle}>Definition</h3>
// //               <p style={s.sectionText}>{current?.definition || ''}</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const s = {
// //   container: { fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", maxWidth: '1440px', margin: '0 auto', padding: '24px', backgroundColor: '#f8fafc', minHeight: '100vh' },
// //   header: { textAlign: 'center', marginBottom: '20px', padding: '16px 20px', backgroundColor: '#245de1', borderRadius: '12px', color: '#fff', boxShadow: '0 4px 20px rgba(36,93,225,0.3)' },
// //   title: { margin: '0 0 4px 0', fontSize: '28px', fontWeight: '700', letterSpacing: '-0.5px' },
// //   subtitle: { margin: 0, fontSize: '14px', opacity: 0.9 },

// //   controls: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '10px 16px 12px 16px', marginBottom: '20px' },

// //   // tabs strip
// //   tabsStrip: {
// //     display: 'flex',
// //     gap: '2px',
// //     borderBottom: '2px solid #e2e8f0',
// //     marginBottom: '10px',
// //     overflowX: 'auto',
// //     overflowY: 'hidden',
// //     WebkitOverflowScrolling: 'touch'
// //   },
// //   tab: {
// //     padding: '7px 12px',
// //     fontSize: '12px',
// //     fontWeight: '600',
// //     color: '#64748b',
// //     background: 'transparent',
// //     border: 'none',
// //     borderBottom: '2px solid transparent',
// //     marginBottom: '-2px',
// //     cursor: 'pointer',
// //     whiteSpace: 'nowrap',
// //     flexShrink: 0
// //   },
// //   tabActive: {
// //     color: '#245de1',
// //     borderBottomColor: '#245de1'
// //   },

// //   // row under the tabs: formulas + jump-to dropdown
// //   tabBody: { display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' },
// //   formulaRow: { display: 'flex', gap: '4px', flexWrap: 'wrap', flex: 1, minWidth: 0 },

// //   groupLabel: { fontSize: '10px', fontWeight: '600', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' },
// //   btn: { padding: '6px 10px', fontSize: '12px', fontWeight: '600', color: '#64748b', backgroundColor: '#f1f5f9', border: '2px solid transparent', borderRadius: '6px', cursor: 'pointer', fontFamily: "'Cambria Math','Times New Roman',serif", whiteSpace: 'nowrap' },
// //   btnActive: { color: '#245de1', backgroundColor: '#e8effd', borderColor: '#245de1' },
// //   dropdownWrap: { display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '180px' },
// //   dropdown: { width: '100%', padding: '7px 10px', fontSize: '13px', fontWeight: '500', color: '#334155', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer', outline: 'none' },

// //   main: { display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' },
// //   col: { flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '12px' },
// //   panel: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', overflow: 'hidden' },
// //   panelHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' },
// //   panelTitle: { fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' },
// //   badge: { padding: '3px 10px', backgroundColor: '#245de1', color: '#fff', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
// //   identityBox: { padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', flexWrap: 'wrap' },
// //   side: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' },
// //   sideLabel: { fontSize: '14px', fontWeight: '600', color: '#1e293b', fontFamily: "'Cambria Math','Times New Roman',serif" },
// //   equals: { fontSize: '28px', fontWeight: '700', color: '#64748b' },
// //   matchRow: { padding: '0 16px 14px 16px', display: 'flex', justifyContent: 'center' },
// //   matchBadge: { padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
// //   matchOk: { backgroundColor: '#dcfce7', color: '#166534' },
// //   matchFail: { backgroundColor: '#fee2e2', color: '#991b1b' },
// //   themeBody: { padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' },
// //   tLabel: { fontSize: '12px', fontWeight: '600', color: '#64748b' },
// //   color: { width: '36px', height: '28px', border: '1px solid #cbd5e1', borderRadius: '4px', cursor: 'pointer', padding: '2px', background: '#fff' },
// //   range: { flex: 1, cursor: 'pointer' },
// //   opVal: { fontSize: '12px', color: '#64748b', minWidth: '36px', fontFamily: 'monospace' },
// //   reset: { padding: '4px 12px', fontSize: '11px', fontWeight: '600', color: '#64748b', backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '4px', cursor: 'pointer' },
// //   nav: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '12px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' },
// //   navBtn: { padding: '8px 20px', fontSize: '13px', fontWeight: '600', color: '#fff', backgroundColor: '#245de1', border: 'none', borderRadius: '6px', cursor: 'pointer' },
// //   counter: { fontSize: '13px', fontWeight: '600', color: '#64748b', minWidth: '70px', textAlign: 'center' },
// //   explanationPanel: { flex: '1 1 350px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', overflow: 'hidden', display: 'flex', flexDirection: 'column' },
// //   explanationBody: { padding: '20px' },
// //   scTitle: { marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #e2e8f0' },
// //   scName: { margin: '0 0 6px 0', fontSize: '20px', fontWeight: '700', color: '#1e293b' },
// //   scSymbol: { display: 'inline-block', padding: '6px 12px', backgroundColor: '#f1f5f9', borderRadius: '6px', fontSize: '18px', fontWeight: '600', color: '#245de1', fontFamily: "'Cambria Math','Times New Roman',serif" },
// //   section: { marginBottom: '16px' },
// //   sectionTitle: { margin: '0 0 6px 0', fontSize: '11px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' },
// //   sectionText: { margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#475569' }
// // };

// // export default TwoSetsLawsExplorer;



// 'use client';

// // ============================================================================
// // TWO-SETS LAWS & COMPLEX IDENTITIES — LHS = RHS visual proofs
// // ============================================================================

// import React, { useState, useMemo, useRef, useEffect } from 'react';
// import { Venncore, ExplanationsPanel } from './Venncore';

// const TWO_SET_CASES = [
//   { A: false, B: false },
//   { A: true,  B: false },
//   { A: false, B: true  },
//   { A: true,  B: true  }
// ];
// const predicatesMatch = (p1, p2) =>
//   TWO_SET_CASES.every((v) => Boolean(p1(v)) === Boolean(p2(v)));

// const CIRCLE_STROKE = '#1e293b';

// const MINI_CIRCLES = {
//   A: { cx: 100, cy: 110, r: 55, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: 1, labelPosition: { x: 60, y: 180 } },
//   B: { cx: 160, cy: 110, r: 55, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: 1, labelPosition: { x: 200, y: 180 } }
// };

// export const lawsData = {
//   frame: {
//     title: 'Two-Set Laws & Complex Identities',
//     subtitle: 'Visual proofs — both diagrams should highlight the same regions'
//   },
//   defaults: {
//     width: 260, height: 210, margin: 6,
//     backgroundColor: '#ffffff',
//     universe: { label: 'U', labelPosition: { x: 18, y: 20 }, stroke: '#cbd5e1', strokeWidth: 1, labelFontSize: 12, labelColor: '#64748b' },
//     circles: MINI_CIRCLES
//   },
//   theme: { color: '#2563eb', opacity: 0.85, neutralFill: '#ffffff', outsideNeutralFill: '#ffffff' },
//   identities: [
//     { id: 'idem-u', group: 'Idempotent', name: 'Idempotent (Union)', formula: 'A ∪ A = A',
//       lhs: { symbol: 'A ∪ A', expr: ({A}) => A || A }, rhs: { symbol: 'A', expr: ({A}) => A },
//       definition: 'Uniting a set with itself yields the same set.' },
//     { id: 'idem-i', group: 'Idempotent', name: 'Idempotent (Intersection)', formula: 'A ∩ A = A',
//       lhs: { symbol: 'A ∩ A', expr: ({A}) => A && A }, rhs: { symbol: 'A', expr: ({A}) => A },
//       definition: 'Intersecting a set with itself yields the same set.' },

//     { id: 'comm-u', group: 'Commutative', name: 'Commutative (Union)', formula: 'A ∪ B = B ∪ A',
//       lhs: { symbol: 'A ∪ B', expr: ({A,B}) => A || B }, rhs: { symbol: 'B ∪ A', expr: ({A,B}) => B || A },
//       definition: 'Order does not matter in union.' },
//     { id: 'comm-i', group: 'Commutative', name: 'Commutative (Intersection)', formula: 'A ∩ B = B ∩ A',
//       lhs: { symbol: 'A ∩ B', expr: ({A,B}) => A && B }, rhs: { symbol: 'B ∩ A', expr: ({A,B}) => B && A },
//       definition: 'Order does not matter in intersection.' },

//     { id: 'id-u-e', group: 'Identity & Annihilation', name: 'Identity (Union with ∅)', formula: 'A ∪ ∅ = A',
//       lhs: { symbol: 'A ∪ ∅', expr: ({A}) => A || false }, rhs: { symbol: 'A', expr: ({A}) => A },
//       definition: '∅ is the identity element for union.' },
//     { id: 'id-i-u', group: 'Identity & Annihilation', name: 'Identity (Intersection with U)', formula: 'A ∩ U = A',
//       lhs: { symbol: 'A ∩ U', expr: ({A}) => A && true }, rhs: { symbol: 'A', expr: ({A}) => A },
//       definition: 'U is the identity element for intersection.' },
//     { id: 'ann-i', group: 'Identity & Annihilation', name: 'Annihilation (Intersection with ∅)', formula: 'A ∩ ∅ = ∅',
//       lhs: { symbol: 'A ∩ ∅', expr: ({A}) => A && false }, rhs: { symbol: '∅', expr: () => false },
//       definition: 'Intersecting with ∅ always gives ∅.' },
//     { id: 'ann-u', group: 'Identity & Annihilation', name: 'Annihilation (Union with U)', formula: 'A ∪ U = U',
//       lhs: { symbol: 'A ∪ U', expr: ({A}) => A || true }, rhs: { symbol: 'U', expr: () => true },
//       definition: 'Uniting with U always gives U.' },

//     { id: 'cmp-u', group: 'Complement', name: 'Complement Law (Union)', formula: "A ∪ A' = U",
//       lhs: { symbol: "A ∪ A'", expr: ({A}) => A || !A }, rhs: { symbol: 'U', expr: () => true },
//       definition: 'A set together with its complement is the universe.' },
//     { id: 'cmp-i', group: 'Complement', name: 'Complement Law (Intersection)', formula: "A ∩ A' = ∅",
//       lhs: { symbol: "A ∩ A'", expr: ({A}) => A && !A }, rhs: { symbol: '∅', expr: () => false },
//       definition: 'A set and its complement share no elements.' },
//     { id: 'dcmp', group: 'Complement', name: 'Double Complement (Involution)', formula: "(A')' = A",
//       lhs: { symbol: "(A')'", expr: ({A}) => !(!A) }, rhs: { symbol: 'A', expr: ({A}) => A },
//       definition: 'Complementing twice returns the original set.' },
//     { id: 'cmp-U', group: 'Complement', name: 'Complement of Universe', formula: "U' = ∅",
//       lhs: { symbol: "U'", expr: () => !true }, rhs: { symbol: '∅', expr: () => false },
//       definition: 'The complement of U is the empty set.' },
//     { id: 'cmp-e', group: 'Complement', name: 'Complement of Empty Set', formula: "∅' = U",
//       lhs: { symbol: "∅'", expr: () => !false }, rhs: { symbol: 'U', expr: () => true },
//       definition: 'The complement of ∅ is the universe.' },

//     { id: 'dm-u', group: "De Morgan's Laws", name: 'Complement of Union', formula: "(A ∪ B)' = A' ∩ B'",
//       lhs: { symbol: "(A ∪ B)'", expr: ({A,B}) => !(A || B) }, rhs: { symbol: "A' ∩ B'", expr: ({A,B}) => !A && !B },
//       definition: 'The complement of a union equals the intersection of the complements.' },
//     { id: 'dm-i', group: "De Morgan's Laws", name: 'Complement of Intersection', formula: "(A ∩ B)' = A' ∪ B'",
//       lhs: { symbol: "(A ∩ B)'", expr: ({A,B}) => !(A && B) }, rhs: { symbol: "A' ∪ B'", expr: ({A,B}) => !A || !B },
//       definition: 'The complement of an intersection equals the union of the complements.' },

//     { id: 'abs-u', group: 'Absorption', name: 'Absorption (Union)', formula: 'A ∪ (A ∩ B) = A',
//       lhs: { symbol: 'A ∪ (A ∩ B)', expr: ({A,B}) => A || (A && B) }, rhs: { symbol: 'A', expr: ({A}) => A },
//       definition: 'Uniting A with any subset of A leaves A unchanged.' },
//     { id: 'abs-i', group: 'Absorption', name: 'Absorption (Intersection)', formula: 'A ∩ (A ∪ B) = A',
//       lhs: { symbol: 'A ∩ (A ∪ B)', expr: ({A,B}) => A && (A || B) }, rhs: { symbol: 'A', expr: ({A}) => A },
//       definition: 'Intersecting A with any superset of A leaves A unchanged.' },

//     { id: 'diff', group: 'Difference', name: 'A minus B as Intersection', formula: "A \\ B = A ∩ B'",
//       lhs: { symbol: 'A \\ B', expr: ({A,B}) => A && !B }, rhs: { symbol: "A ∩ B'", expr: ({A,B}) => A && !B },
//       definition: 'Difference is intersection with the complement.' },
//     { id: 'diff-r', group: 'Difference', name: 'B minus A as Intersection', formula: "B \\ A = A' ∩ B",
//       lhs: { symbol: 'B \\ A', expr: ({A,B}) => B && !A }, rhs: { symbol: "A' ∩ B", expr: ({A,B}) => !A && B },
//       definition: 'Symmetric form of the difference identity.' },
//     { id: 'sd-1', group: 'Difference', name: 'Symmetric Difference as Union of Differences', formula: 'A △ B = (A \\ B) ∪ (B \\ A)',
//       lhs: { symbol: 'A △ B', expr: ({A,B}) => A !== B }, rhs: { symbol: '(A \\ B) ∪ (B \\ A)', expr: ({A,B}) => (A && !B) || (B && !A) },
//       definition: 'Symmetric difference equals the union of the two differences.' },
//     { id: 'sd-2', group: 'Difference', name: 'Symmetric Difference as Union Minus Intersection', formula: "A △ B = (A ∪ B) ∩ (A ∩ B)'",
//       lhs: { symbol: 'A △ B', expr: ({A,B}) => A !== B }, rhs: { symbol: "(A ∪ B) ∩ (A ∩ B)'", expr: ({A,B}) => (A || B) && !(A && B) },
//       definition: 'Symmetric difference equals everything in the union except the intersection.' },
//     { id: 'sd-c', group: 'Difference', name: 'Complement of Symmetric Difference', formula: "(A △ B)' = (A ∩ B) ∪ (A ∪ B)'",
//       lhs: { symbol: "(A △ B)'", expr: ({A,B}) => !(A !== B) }, rhs: { symbol: "(A ∩ B) ∪ (A ∪ B)'", expr: ({A,B}) => (A && B) || !(A || B) },
//       definition: 'The complement of A △ B contains the intersection plus everything outside both sets.' },

//     { id: 'cc-1', group: 'Compound Complements', name: "Complement of A' ∪ B", formula: "(A' ∪ B)' = A ∩ B'",
//       lhs: { symbol: "(A' ∪ B)'", expr: ({A,B}) => !(!A || B) }, rhs: { symbol: "A ∩ B'", expr: ({A,B}) => A && !B },
//       definition: "Derived from De Morgan's plus double complement." },
//     { id: 'cc-2', group: 'Compound Complements', name: "Complement of A ∪ B'", formula: "(A ∪ B')' = A' ∩ B",
//       lhs: { symbol: "(A ∪ B')'", expr: ({A,B}) => !(A || !B) }, rhs: { symbol: "A' ∩ B", expr: ({A,B}) => !A && B },
//       definition: 'Mirror of the previous identity.' },
//     { id: 'cc-3', group: 'Compound Complements', name: "Complement of A ∩ B'", formula: "(A ∩ B')' = A' ∪ B",
//       lhs: { symbol: "(A ∩ B')'", expr: ({A,B}) => !(A && !B) }, rhs: { symbol: "A' ∪ B", expr: ({A,B}) => !A || B },
//       definition: 'Useful in expressing material implication: A → B.' },
//     { id: 'cc-4', group: 'Compound Complements', name: "Complement of A' ∩ B", formula: "(A' ∩ B)' = A ∪ B'",
//       lhs: { symbol: "(A' ∩ B)'", expr: ({A,B}) => !(!A && B) }, rhs: { symbol: "A ∪ B'", expr: ({A,B}) => A || !B },
//       definition: 'Mirror of the previous identity.' }
//   ]
// };

// const GROUP_ORDER = ['Idempotent', 'Commutative', 'Identity & Annihilation', 'Complement', "De Morgan's Laws", 'Absorption', 'Difference', 'Compound Complements'];

// const SCROLLBAR_CSS_ID = 'venn-laws-explorer-noscrollbar';
// const SCROLLBAR_CSS = `
// .venn-laws-tabs-strip {
//   scrollbar-width: none;
//   -ms-overflow-style: none;
// }
// .venn-laws-tabs-strip::-webkit-scrollbar {
//   display: none;
//   width: 0;
//   height: 0;
// }
// `;
// function useInjectScrollbarCss() {
//   useEffect(() => {
//     if (typeof document === 'undefined') return;
//     if (document.getElementById(SCROLLBAR_CSS_ID)) return;
//     const style = document.createElement('style');
//     style.id = SCROLLBAR_CSS_ID;
//     style.textContent = SCROLLBAR_CSS;
//     document.head.appendChild(style);
//   }, []);
// }

// export const TwoSetsLawsExplorer = ({ data = lawsData, explanations = null }) => {
//   useInjectScrollbarCss();

//   const { frame, defaults, theme: defaultTheme, identities } = data;
//   const [currentId, setCurrentId] = useState(identities[0]?.id);
//   const [themeColor, setThemeColor] = useState(defaultTheme.color);
//   const [themeOpacity, setThemeOpacity] = useState(defaultTheme.opacity);

//   const grouped = useMemo(() => identities.reduce((acc, it) => {
//     const g = it.group || 'Other';
//     if (!acc[g]) acc[g] = [];
//     acc[g].push(it);
//     return acc;
//   }, {}), [identities]);
//   const groups = useMemo(() => {
//     const known = GROUP_ORDER.filter((g) => grouped[g]);
//     const extras = Object.keys(grouped).filter((g) => !GROUP_ORDER.includes(g));
//     return [...known, ...extras];
//   }, [grouped]);

//   const current = identities.find((it) => it.id === currentId) || identities[0];
//   const idx = identities.findIndex((it) => it.id === currentId);

//   const [activeGroup, setActiveGroup] = useState(current?.group || groups[0]);
//   const lastSyncedIdRef = useRef(currentId);
//   useEffect(() => {
//     if (lastSyncedIdRef.current !== currentId) {
//       lastSyncedIdRef.current = currentId;
//       if (current?.group && current.group !== activeGroup) setActiveGroup(current.group);
//     }
//   }, [currentId, current, activeGroup]);

//   const { lhsProps, rhsProps, matches } = useMemo(() => {
//     if (!current) return { lhsProps: null, rhsProps: null, matches: false };
//     const theme = { color: themeColor, opacity: themeOpacity, neutralFill: defaultTheme.neutralFill, outsideNeutralFill: defaultTheme.outsideNeutralFill };
//     const common = {
//       circles: defaults.circles, width: defaults.width, height: defaults.height,
//       margin: defaults.margin, backgroundColor: defaults.backgroundColor, universe: defaults.universe, theme
//     };
//     return {
//       lhsProps: { ...common, predicate: current.lhs.expr },
//       rhsProps: { ...common, predicate: current.rhs.expr },
//       matches: predicatesMatch(current.lhs.expr, current.rhs.expr)
//     };
//   }, [current, defaults, defaultTheme, themeColor, themeOpacity]);

//   const goPrev = () => setCurrentId(identities[(idx - 1 + identities.length) % identities.length].id);
//   const goNext = () => setCurrentId(identities[(idx + 1) % identities.length].id);
//   const resetTheme = () => { setThemeColor(defaultTheme.color); setThemeOpacity(defaultTheme.opacity); };

//   const activeItems = grouped[activeGroup] || [];

//   return (
//     <div style={s.container}>
//       <div style={s.header}>
//         <p style={s.subtitle}>{frame.subtitle}</p>
//       </div>

//       <div style={s.controls}>
//         <div className="venn-laws-tabs-strip" style={s.tabsStrip}>
//           {groups.map((g) => {
//             const isActive = g === activeGroup;
//             return (
//               <button
//                 key={g}
//                 style={{ ...s.tab, ...(isActive ? s.tabActive : {}) }}
//                 onClick={() => setActiveGroup(g)}
//                 title={g}
//               >
//                 {g}
//               </button>
//             );
//           })}
//         </div>

//         <div style={s.tabBody}>
//           <div style={s.formulaRow}>
//             {activeItems.map((it) => (
//               <button
//                 key={it.id}
//                 style={{ ...s.btn, ...(currentId === it.id ? s.btnActive : {}) }}
//                 onClick={() => setCurrentId(it.id)}
//                 title={it.name}
//               >
//                 {it.formula}
//               </button>
//             ))}
//           </div>
//           <div style={s.dropdownWrap}>
//             <span style={s.groupLabel}>Jump to</span>
//             <select style={s.dropdown} value={currentId} onChange={(e) => setCurrentId(e.target.value)}>
//               {groups.map((g) => (
//                 <optgroup key={g} label={g}>
//                   {grouped[g].map((it) => <option key={it.id} value={it.id}>{it.formula}</option>)}
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
//               <span style={s.panelTitle}>Identity</span>
//               <span style={s.badge}>{current?.formula}</span>
//             </div>
//             <div style={s.identityBox}>
//               <div style={s.side}>
//                 <div style={s.sideLabel}>{current?.lhs.symbol}</div>
//                 {lhsProps && <Venncore {...lhsProps} />}
//               </div>
//               <div style={s.equals}>=</div>
//               <div style={s.side}>
//                 <div style={s.sideLabel}>{current?.rhs.symbol}</div>
//                 {rhsProps && <Venncore {...rhsProps} />}
//               </div>
//             </div>
//             <div style={s.matchRow}>
//               <span style={{ ...s.matchBadge, ...(matches ? s.matchOk : s.matchFail) }}>
//                 {matches ? '✓ Regions match — identity holds' : '✗ Regions differ'}
//               </span>
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
//             <span style={s.counter}>{idx + 1} / {identities.length}</span>
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
//   tab: { padding: '7px 12px', fontSize: '12px', fontWeight: '600', color: '#64748b', background: 'transparent', border: 'none', borderBottom: '2px solid transparent', marginBottom: '-2px', cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0 },
//   tabActive: { color: '#245de1', borderBottomColor: '#245de1' },
//   tabBody: { display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' },
//   formulaRow: { display: 'flex', gap: '4px', flexWrap: 'wrap', flex: 1, minWidth: 0 },
//   groupLabel: { fontSize: '10px', fontWeight: '600', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' },
//   btn: { padding: '6px 10px', fontSize: '12px', fontWeight: '600', color: '#64748b', backgroundColor: '#f1f5f9', border: '2px solid transparent', borderRadius: '6px', cursor: 'pointer', fontFamily: "'Cambria Math','Times New Roman',serif", whiteSpace: 'nowrap' },
//   btnActive: { color: '#245de1', backgroundColor: '#e8effd', borderColor: '#245de1' },
//   dropdownWrap: { display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '180px' },
//   dropdown: { width: '100%', padding: '7px 10px', fontSize: '13px', fontWeight: '500', color: '#334155', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer', outline: 'none' },
//   main: { display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' },
//   col: { flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '12px' },
//   panel: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', overflow: 'hidden' },
//   panelHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' },
//   panelTitle: { fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' },
//   badge: { padding: '3px 10px', backgroundColor: '#245de1', color: '#fff', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
//   identityBox: { padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', flexWrap: 'wrap' },
//   side: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' },
//   sideLabel: { fontSize: '14px', fontWeight: '600', color: '#1e293b', fontFamily: "'Cambria Math','Times New Roman',serif" },
//   equals: { fontSize: '28px', fontWeight: '700', color: '#64748b' },
//   matchRow: { padding: '0 16px 14px 16px', display: 'flex', justifyContent: 'center' },
//   matchBadge: { padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
//   matchOk: { backgroundColor: '#dcfce7', color: '#166534' },
//   matchFail: { backgroundColor: '#fee2e2', color: '#991b1b' },
//   themeBody: { padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' },
//   tLabel: { fontSize: '12px', fontWeight: '600', color: '#64748b' },
//   color: { width: '36px', height: '28px', border: '1px solid #cbd5e1', borderRadius: '4px', cursor: 'pointer', padding: '2px', background: '#fff' },
//   range: { flex: 1, cursor: 'pointer' },
//   opVal: { fontSize: '12px', color: '#64748b', minWidth: '36px', fontFamily: 'monospace' },
//   reset: { padding: '4px 12px', fontSize: '11px', fontWeight: '600', color: '#64748b', backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '4px', cursor: 'pointer' },
//   nav: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '12px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' },
//   navBtn: { padding: '8px 20px', fontSize: '13px', fontWeight: '600', color: '#fff', backgroundColor: '#245de1', border: 'none', borderRadius: '6px', cursor: 'pointer' },
//   counter: { fontSize: '13px', fontWeight: '600', color: '#64748b', minWidth: '70px', textAlign: 'center' },
//   explanationPanel: { flex: '1 1 350px' }
// };

// export default TwoSetsLawsExplorer;


// 'use client';

// // ============================================================================
// // TWO-SETS LAWS & COMPLEX IDENTITIES — LHS = RHS visual proofs
// // ============================================================================

// import React, { useState, useMemo, useRef, useEffect } from 'react';
// import { Venncore, ExplanationsPanel } from './Venncore';

// const TWO_SET_CASES = [
//   { A: false, B: false },
//   { A: true,  B: false },
//   { A: false, B: true  },
//   { A: true,  B: true  }
// ];
// const predicatesMatch = (p1, p2) =>
//   TWO_SET_CASES.every((v) => Boolean(p1(v)) === Boolean(p2(v)));

// const CIRCLE_STROKE = '#1e293b';

// const MINI_CIRCLES = {
//   A: { cx: 100, cy: 110, r: 55, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: 1, labelPosition: { x: 60, y: 180 } },
//   B: { cx: 160, cy: 110, r: 55, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: 1, labelPosition: { x: 200, y: 180 } }
// };

// export const lawsData = {
//   frame: {
//     title: 'Two-Set Laws & Complex Identities',
//     subtitle: 'Visual proofs — both diagrams should highlight the same regions'
//   },
//   defaults: {
//     width: 260, height: 210, margin: 6,
//     backgroundColor: '#ffffff',
//     universe: { label: 'U', labelPosition: { x: 18, y: 20 }, stroke: '#cbd5e1', strokeWidth: 1, labelFontSize: 12, labelColor: '#64748b' },
//     circles: MINI_CIRCLES
//   },
//   theme: { color: '#2563eb', opacity: 0.85, neutralFill: '#ffffff', outsideNeutralFill: '#ffffff' },
//   identities: [
//     { id: 'idem-u', group: 'Idempotent', name: 'Idempotent (Union)', formula: 'A ∪ A = A',
//       lhs: { symbol: 'A ∪ A', expr: ({A}) => A || A }, rhs: { symbol: 'A', expr: ({A}) => A },
//       definition: 'Uniting a set with itself yields the same set.' },
//     { id: 'idem-i', group: 'Idempotent', name: 'Idempotent (Intersection)', formula: 'A ∩ A = A',
//       lhs: { symbol: 'A ∩ A', expr: ({A}) => A && A }, rhs: { symbol: 'A', expr: ({A}) => A },
//       definition: 'Intersecting a set with itself yields the same set.' },

//     { id: 'comm-u', group: 'Commutative', name: 'Commutative (Union)', formula: 'A ∪ B = B ∪ A',
//       lhs: { symbol: 'A ∪ B', expr: ({A,B}) => A || B }, rhs: { symbol: 'B ∪ A', expr: ({A,B}) => B || A },
//       definition: 'Order does not matter in union.' },
//     { id: 'comm-i', group: 'Commutative', name: 'Commutative (Intersection)', formula: 'A ∩ B = B ∩ A',
//       lhs: { symbol: 'A ∩ B', expr: ({A,B}) => A && B }, rhs: { symbol: 'B ∩ A', expr: ({A,B}) => B && A },
//       definition: 'Order does not matter in intersection.' },

//     { id: 'id-u-e', group: 'Identity & Annihilation', name: 'Identity (Union with ∅)', formula: 'A ∪ ∅ = A',
//       lhs: { symbol: 'A ∪ ∅', expr: ({A}) => A || false }, rhs: { symbol: 'A', expr: ({A}) => A },
//       definition: '∅ is the identity element for union.' },
//     { id: 'id-i-u', group: 'Identity & Annihilation', name: 'Identity (Intersection with U)', formula: 'A ∩ U = A',
//       lhs: { symbol: 'A ∩ U', expr: ({A}) => A && true }, rhs: { symbol: 'A', expr: ({A}) => A },
//       definition: 'U is the identity element for intersection.' },
//     { id: 'ann-i', group: 'Identity & Annihilation', name: 'Annihilation (Intersection with ∅)', formula: 'A ∩ ∅ = ∅',
//       lhs: { symbol: 'A ∩ ∅', expr: ({A}) => A && false }, rhs: { symbol: '∅', expr: () => false },
//       definition: 'Intersecting with ∅ always gives ∅.' },
//     { id: 'ann-u', group: 'Identity & Annihilation', name: 'Annihilation (Union with U)', formula: 'A ∪ U = U',
//       lhs: { symbol: 'A ∪ U', expr: ({A}) => A || true }, rhs: { symbol: 'U', expr: () => true },
//       definition: 'Uniting with U always gives U.' },

//     { id: 'cmp-u', group: 'Complement', name: 'Complement Law (Union)', formula: "A ∪ A' = U",
//       lhs: { symbol: "A ∪ A'", expr: ({A}) => A || !A }, rhs: { symbol: 'U', expr: () => true },
//       definition: 'A set together with its complement is the universe.' },
//     { id: 'cmp-i', group: 'Complement', name: 'Complement Law (Intersection)', formula: "A ∩ A' = ∅",
//       lhs: { symbol: "A ∩ A'", expr: ({A}) => A && !A }, rhs: { symbol: '∅', expr: () => false },
//       definition: 'A set and its complement share no elements.' },
//     { id: 'dcmp', group: 'Complement', name: 'Double Complement (Involution)', formula: "(A')' = A",
//       lhs: { symbol: "(A')'", expr: ({A}) => !(!A) }, rhs: { symbol: 'A', expr: ({A}) => A },
//       definition: 'Complementing twice returns the original set.' },
//     { id: 'cmp-U', group: 'Complement', name: 'Complement of Universe', formula: "U' = ∅",
//       lhs: { symbol: "U'", expr: () => !true }, rhs: { symbol: '∅', expr: () => false },
//       definition: 'The complement of U is the empty set.' },
//     { id: 'cmp-e', group: 'Complement', name: 'Complement of Empty Set', formula: "∅' = U",
//       lhs: { symbol: "∅'", expr: () => !false }, rhs: { symbol: 'U', expr: () => true },
//       definition: 'The complement of ∅ is the universe.' },

//     { id: 'dm-u', group: "De Morgan's Laws", name: 'Complement of Union', formula: "(A ∪ B)' = A' ∩ B'",
//       lhs: { symbol: "(A ∪ B)'", expr: ({A,B}) => !(A || B) }, rhs: { symbol: "A' ∩ B'", expr: ({A,B}) => !A && !B },
//       definition: 'The complement of a union equals the intersection of the complements.' },
//     { id: 'dm-i', group: "De Morgan's Laws", name: 'Complement of Intersection', formula: "(A ∩ B)' = A' ∪ B'",
//       lhs: { symbol: "(A ∩ B)'", expr: ({A,B}) => !(A && B) }, rhs: { symbol: "A' ∪ B'", expr: ({A,B}) => !A || !B },
//       definition: 'The complement of an intersection equals the union of the complements.' },

//     { id: 'abs-u', group: 'Absorption', name: 'Absorption (Union)', formula: 'A ∪ (A ∩ B) = A',
//       lhs: { symbol: 'A ∪ (A ∩ B)', expr: ({A,B}) => A || (A && B) }, rhs: { symbol: 'A', expr: ({A}) => A },
//       definition: 'Uniting A with any subset of A leaves A unchanged.' },
//     { id: 'abs-i', group: 'Absorption', name: 'Absorption (Intersection)', formula: 'A ∩ (A ∪ B) = A',
//       lhs: { symbol: 'A ∩ (A ∪ B)', expr: ({A,B}) => A && (A || B) }, rhs: { symbol: 'A', expr: ({A}) => A },
//       definition: 'Intersecting A with any superset of A leaves A unchanged.' },

//     { id: 'diff', group: 'Difference', name: 'A minus B as Intersection', formula: "A \\ B = A ∩ B'",
//       lhs: { symbol: 'A \\ B', expr: ({A,B}) => A && !B }, rhs: { symbol: "A ∩ B'", expr: ({A,B}) => A && !B },
//       definition: 'Difference is intersection with the complement.' },
//     { id: 'diff-r', group: 'Difference', name: 'B minus A as Intersection', formula: "B \\ A = A' ∩ B",
//       lhs: { symbol: 'B \\ A', expr: ({A,B}) => B && !A }, rhs: { symbol: "A' ∩ B", expr: ({A,B}) => !A && B },
//       definition: 'Symmetric form of the difference identity.' },
//     { id: 'sd-1', group: 'Difference', name: 'Symmetric Difference as Union of Differences', formula: 'A △ B = (A \\ B) ∪ (B \\ A)',
//       lhs: { symbol: 'A △ B', expr: ({A,B}) => A !== B }, rhs: { symbol: '(A \\ B) ∪ (B \\ A)', expr: ({A,B}) => (A && !B) || (B && !A) },
//       definition: 'Symmetric difference equals the union of the two differences.' },
//     { id: 'sd-2', group: 'Difference', name: 'Symmetric Difference as Union Minus Intersection', formula: "A △ B = (A ∪ B) ∩ (A ∩ B)'",
//       lhs: { symbol: 'A △ B', expr: ({A,B}) => A !== B }, rhs: { symbol: "(A ∪ B) ∩ (A ∩ B)'", expr: ({A,B}) => (A || B) && !(A && B) },
//       definition: 'Symmetric difference equals everything in the union except the intersection.' },
//     { id: 'sd-c', group: 'Difference', name: 'Complement of Symmetric Difference', formula: "(A △ B)' = (A ∩ B) ∪ (A ∪ B)'",
//       lhs: { symbol: "(A △ B)'", expr: ({A,B}) => !(A !== B) }, rhs: { symbol: "(A ∩ B) ∪ (A ∪ B)'", expr: ({A,B}) => (A && B) || !(A || B) },
//       definition: 'The complement of A △ B contains the intersection plus everything outside both sets.' },

//     { id: 'cc-1', group: 'Compound Complements', name: "Complement of A' ∪ B", formula: "(A' ∪ B)' = A ∩ B'",
//       lhs: { symbol: "(A' ∪ B)'", expr: ({A,B}) => !(!A || B) }, rhs: { symbol: "A ∩ B'", expr: ({A,B}) => A && !B },
//       definition: "Derived from De Morgan's plus double complement." },
//     { id: 'cc-2', group: 'Compound Complements', name: "Complement of A ∪ B'", formula: "(A ∪ B')' = A' ∩ B",
//       lhs: { symbol: "(A ∪ B')'", expr: ({A,B}) => !(A || !B) }, rhs: { symbol: "A' ∩ B", expr: ({A,B}) => !A && B },
//       definition: 'Mirror of the previous identity.' },
//     { id: 'cc-3', group: 'Compound Complements', name: "Complement of A ∩ B'", formula: "(A ∩ B')' = A' ∪ B",
//       lhs: { symbol: "(A ∩ B')'", expr: ({A,B}) => !(A && !B) }, rhs: { symbol: "A' ∪ B", expr: ({A,B}) => !A || B },
//       definition: 'Useful in expressing material implication: A → B.' },
//     { id: 'cc-4', group: 'Compound Complements', name: "Complement of A' ∩ B", formula: "(A' ∩ B)' = A ∪ B'",
//       lhs: { symbol: "(A' ∩ B)'", expr: ({A,B}) => !(!A && B) }, rhs: { symbol: "A ∪ B'", expr: ({A,B}) => A || !B },
//       definition: 'Mirror of the previous identity.' }
//   ]
// };

// const GROUP_ORDER = ['Idempotent', 'Commutative', 'Identity & Annihilation', 'Complement', "De Morgan's Laws", 'Absorption', 'Difference', 'Compound Complements'];

// const CSS_ID = 'two-sets-laws-explorer-css';
// const CSS = `
// .venn-laws-tabs-strip {
//   scrollbar-width: none;
//   -ms-overflow-style: none;
// }
// .venn-laws-tabs-strip::-webkit-scrollbar {
//   display: none;
//   width: 0;
//   height: 0;
// }

// .tsl-tab {
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
// .tsl-tab:hover {
//   color: #334155;
// }
// .tsl-tab:focus,
// .tsl-tab:focus-visible {
//   outline: none;
// }
// .tsl-tab.active,
// .tsl-tab.active:hover,
// .tsl-tab.active:focus,
// .tsl-tab.active:focus-visible {
//   color: #245de1;
//   border-bottom-color: #245de1;
// }

// .tsl-btn {
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
// .tsl-btn:hover {
//   color: #334155;
//   background-color: #e2e8f0;
//   border-color: transparent;
// }
// .tsl-btn:focus,
// .tsl-btn:focus-visible {
//   outline: none;
//   border-color: transparent;
// }
// .tsl-btn.active,
// .tsl-btn.active:hover,
// .tsl-btn.active:focus,
// .tsl-btn.active:focus-visible {
//   color: #245de1;
//   background-color: #e8effd;
//   border-color: #245de1;
// }
// `;

// function useInjectCss() {
//   useEffect(() => {
//     if (typeof document === 'undefined') return;
//     if (document.getElementById(CSS_ID)) return;
//     const style = document.createElement('style');
//     style.id = CSS_ID;
//     style.textContent = CSS;
//     document.head.appendChild(style);
//   }, []);
// }

// export const TwoSetsLawsExplorer = ({ data = lawsData, explanations = null }) => {
//   useInjectCss();

//   const { frame, defaults, theme: defaultTheme, identities } = data;
//   const [currentId, setCurrentId] = useState(identities[0]?.id);
//   const [themeColor, setThemeColor] = useState(defaultTheme.color);
//   const [themeOpacity, setThemeOpacity] = useState(defaultTheme.opacity);

//   const grouped = useMemo(() => identities.reduce((acc, it) => {
//     const g = it.group || 'Other';
//     if (!acc[g]) acc[g] = [];
//     acc[g].push(it);
//     return acc;
//   }, {}), [identities]);
//   const groups = useMemo(() => {
//     const known = GROUP_ORDER.filter((g) => grouped[g]);
//     const extras = Object.keys(grouped).filter((g) => !GROUP_ORDER.includes(g));
//     return [...known, ...extras];
//   }, [grouped]);

//   const current = identities.find((it) => it.id === currentId) || identities[0];
//   const idx = identities.findIndex((it) => it.id === currentId);

//   const [activeGroup, setActiveGroup] = useState(current?.group || groups[0]);
//   const lastSyncedIdRef = useRef(currentId);
//   useEffect(() => {
//     if (lastSyncedIdRef.current !== currentId) {
//       lastSyncedIdRef.current = currentId;
//       if (current?.group && current.group !== activeGroup) setActiveGroup(current.group);
//     }
//   }, [currentId, current, activeGroup]);

//   const { lhsProps, rhsProps, matches } = useMemo(() => {
//     if (!current) return { lhsProps: null, rhsProps: null, matches: false };
//     const theme = { color: themeColor, opacity: themeOpacity, neutralFill: defaultTheme.neutralFill, outsideNeutralFill: defaultTheme.outsideNeutralFill };
//     const common = {
//       circles: defaults.circles, width: defaults.width, height: defaults.height,
//       margin: defaults.margin, backgroundColor: defaults.backgroundColor, universe: defaults.universe, theme
//     };
//     return {
//       lhsProps: { ...common, predicate: current.lhs.expr },
//       rhsProps: { ...common, predicate: current.rhs.expr },
//       matches: predicatesMatch(current.lhs.expr, current.rhs.expr)
//     };
//   }, [current, defaults, defaultTheme, themeColor, themeOpacity]);

//   const goPrev = () => setCurrentId(identities[(idx - 1 + identities.length) % identities.length].id);
//   const goNext = () => setCurrentId(identities[(idx + 1) % identities.length].id);
//   const resetTheme = () => { setThemeColor(defaultTheme.color); setThemeOpacity(defaultTheme.opacity); };

//   const activeItems = grouped[activeGroup] || [];

//   return (
//     <div style={s.container}>
//       <div style={s.header}>
//         <p style={s.subtitle}>{frame.subtitle}</p>
//       </div>

//       <div style={s.controls}>
//         <div className="venn-laws-tabs-strip" style={s.tabsStrip}>
//           {groups.map((g) => {
//             const isActive = g === activeGroup;
//             return (
//               <button
//                 key={g}
//                 className={`tsl-tab${isActive ? ' active' : ''}`}
//                 onClick={() => setActiveGroup(g)}
//                 title={g}
//               >
//                 {g}
//               </button>
//             );
//           })}
//         </div>

//         <div style={s.tabBody}>
//           <div style={s.formulaRow}>
//             {activeItems.map((it) => (
//               <button
//                 key={it.id}
//                 className={`tsl-btn${currentId === it.id ? ' active' : ''}`}
//                 onClick={() => setCurrentId(it.id)}
//                 title={it.name}
//               >
//                 {it.formula}
//               </button>
//             ))}
//           </div>
//           <div style={s.dropdownWrap}>
//             <span style={s.groupLabel}>Jump to</span>
//             <select style={s.dropdown} value={currentId} onChange={(e) => setCurrentId(e.target.value)}>
//               {groups.map((g) => (
//                 <optgroup key={g} label={g}>
//                   {grouped[g].map((it) => <option key={it.id} value={it.id}>{it.formula}</option>)}
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
//               <span style={s.panelTitle}>Identity</span>
//               <span style={s.badge}>{current?.formula}</span>
//             </div>
//             <div style={s.identityBox}>
//               <div style={s.side}>
//                 <div style={s.sideLabel}>{current?.lhs.symbol}</div>
//                 {lhsProps && <Venncore {...lhsProps} />}
//               </div>
//               <div style={s.equals}>=</div>
//               <div style={s.side}>
//                 <div style={s.sideLabel}>{current?.rhs.symbol}</div>
//                 {rhsProps && <Venncore {...rhsProps} />}
//               </div>
//             </div>
//             <div style={s.matchRow}>
//               <span style={{ ...s.matchBadge, ...(matches ? s.matchOk : s.matchFail) }}>
//                 {matches ? '✓ Regions match — identity holds' : '✗ Regions differ'}
//               </span>
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
//             <span style={s.counter}>{idx + 1} / {identities.length}</span>
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
//   dropdownWrap: { display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '180px' },
//   dropdown: { width: '100%', padding: '7px 10px', fontSize: '13px', fontWeight: '500', color: '#334155', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer', outline: 'none' },
//   main: { display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' },
//   col: { flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '12px' },
//   panel: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', overflow: 'hidden' },
//   panelHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' },
//   panelTitle: { fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' },
//   badge: { padding: '3px 10px', backgroundColor: '#245de1', color: '#fff', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
//   identityBox: { padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', flexWrap: 'wrap' },
//   side: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' },
//   sideLabel: { fontSize: '14px', fontWeight: '600', color: '#1e293b', fontFamily: "'Cambria Math','Times New Roman',serif" },
//   equals: { fontSize: '28px', fontWeight: '700', color: '#64748b' },
//   matchRow: { padding: '0 16px 14px 16px', display: 'flex', justifyContent: 'center' },
//   matchBadge: { padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
//   matchOk: { backgroundColor: '#dcfce7', color: '#166534' },
//   matchFail: { backgroundColor: '#fee2e2', color: '#991b1b' },
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

// export default TwoSetsLawsExplorer;



'use client';

// ============================================================================
// TWO-SETS LAWS & COMPLEX IDENTITIES — LHS = RHS visual proofs
// ============================================================================

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Venncore, ExplanationsPanel } from './VennCore';

const TWO_SET_CASES = [
  { A: false, B: false },
  { A: true,  B: false },
  { A: false, B: true  },
  { A: true,  B: true  }
];
const predicatesMatch = (p1, p2) =>
  TWO_SET_CASES.every((v) => Boolean(p1(v)) === Boolean(p2(v)));

const CIRCLE_STROKE = '#1e293b';

const MINI_CIRCLES = {
  A: { cx: 100, cy: 110, r: 55, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: 1, labelPosition: { x: 60, y: 180 } },
  B: { cx: 160, cy: 110, r: 55, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: 1, labelPosition: { x: 200, y: 180 } }
};

export const lawsData = {
  frame: {
    title: 'Two-Set Laws & Complex Identities',
    subtitle: 'Visual proofs — both diagrams should highlight the same regions'
  },
  defaults: {
    width: 260, height: 210, margin: 6,
    backgroundColor: '#ffffff',
    universe: { label: 'U', labelPosition: { x: 18, y: 20 }, stroke: '#cbd5e1', strokeWidth: 1, labelFontSize: 12, labelColor: '#64748b' },
    circles: MINI_CIRCLES,
    tooltips: {
      'outside': 'Outside both sets',
      'A-only': 'Only in A',
      'B-only': 'Only in B',
      'A∩B':    'In both A and B'
    }
  },
  theme: { color: '#2563eb', opacity: 0.85, neutralFill: '#ffffff', outsideNeutralFill: '#ffffff' },
  identities: [
    { id: 'idem-u', group: 'Idempotent', name: 'Idempotent (Union)', formula: 'A ∪ A = A',
      lhs: { symbol: 'A ∪ A', expr: ({A}) => A || A }, rhs: { symbol: 'A', expr: ({A}) => A },
      definition: 'Uniting a set with itself yields the same set.' },
    { id: 'idem-i', group: 'Idempotent', name: 'Idempotent (Intersection)', formula: 'A ∩ A = A',
      lhs: { symbol: 'A ∩ A', expr: ({A}) => A && A }, rhs: { symbol: 'A', expr: ({A}) => A },
      definition: 'Intersecting a set with itself yields the same set.' },

    { id: 'comm-u', group: 'Commutative', name: 'Commutative (Union)', formula: 'A ∪ B = B ∪ A',
      lhs: { symbol: 'A ∪ B', expr: ({A,B}) => A || B }, rhs: { symbol: 'B ∪ A', expr: ({A,B}) => B || A },
      definition: 'Order does not matter in union.' },
    { id: 'comm-i', group: 'Commutative', name: 'Commutative (Intersection)', formula: 'A ∩ B = B ∩ A',
      lhs: { symbol: 'A ∩ B', expr: ({A,B}) => A && B }, rhs: { symbol: 'B ∩ A', expr: ({A,B}) => B && A },
      definition: 'Order does not matter in intersection.' },

    { id: 'id-u-e', group: 'Identity & Annihilation', name: 'Identity (Union with ∅)', formula: 'A ∪ ∅ = A',
      lhs: { symbol: 'A ∪ ∅', expr: ({A}) => A || false }, rhs: { symbol: 'A', expr: ({A}) => A },
      definition: '∅ is the identity element for union.' },
    { id: 'id-i-u', group: 'Identity & Annihilation', name: 'Identity (Intersection with U)', formula: 'A ∩ U = A',
      lhs: { symbol: 'A ∩ U', expr: ({A}) => A && true }, rhs: { symbol: 'A', expr: ({A}) => A },
      definition: 'U is the identity element for intersection.' },
    { id: 'ann-i', group: 'Identity & Annihilation', name: 'Annihilation (Intersection with ∅)', formula: 'A ∩ ∅ = ∅',
      lhs: { symbol: 'A ∩ ∅', expr: ({A}) => A && false }, rhs: { symbol: '∅', expr: () => false },
      definition: 'Intersecting with ∅ always gives ∅.' },
    { id: 'ann-u', group: 'Identity & Annihilation', name: 'Annihilation (Union with U)', formula: 'A ∪ U = U',
      lhs: { symbol: 'A ∪ U', expr: ({A}) => A || true }, rhs: { symbol: 'U', expr: () => true },
      definition: 'Uniting with U always gives U.' },

    { id: 'cmp-u', group: 'Complement', name: 'Complement Law (Union)', formula: "A ∪ A' = U",
      lhs: { symbol: "A ∪ A'", expr: ({A}) => A || !A }, rhs: { symbol: 'U', expr: () => true },
      definition: 'A set together with its complement is the universe.' },
    { id: 'cmp-i', group: 'Complement', name: 'Complement Law (Intersection)', formula: "A ∩ A' = ∅",
      lhs: { symbol: "A ∩ A'", expr: ({A}) => A && !A }, rhs: { symbol: '∅', expr: () => false },
      definition: 'A set and its complement share no elements.' },
    { id: 'dcmp', group: 'Complement', name: 'Double Complement (Involution)', formula: "(A')' = A",
      lhs: { symbol: "(A')'", expr: ({A}) => !(!A) }, rhs: { symbol: 'A', expr: ({A}) => A },
      definition: 'Complementing twice returns the original set.' },
    { id: 'cmp-U', group: 'Complement', name: 'Complement of Universe', formula: "U' = ∅",
      lhs: { symbol: "U'", expr: () => !true }, rhs: { symbol: '∅', expr: () => false },
      definition: 'The complement of U is the empty set.' },
    { id: 'cmp-e', group: 'Complement', name: 'Complement of Empty Set', formula: "∅' = U",
      lhs: { symbol: "∅'", expr: () => !false }, rhs: { symbol: 'U', expr: () => true },
      definition: 'The complement of ∅ is the universe.' },

    { id: 'dm-u', group: "De Morgan's Laws", name: 'Complement of Union', formula: "(A ∪ B)' = A' ∩ B'",
      lhs: { symbol: "(A ∪ B)'", expr: ({A,B}) => !(A || B) }, rhs: { symbol: "A' ∩ B'", expr: ({A,B}) => !A && !B },
      definition: 'The complement of a union equals the intersection of the complements.' },
    { id: 'dm-i', group: "De Morgan's Laws", name: 'Complement of Intersection', formula: "(A ∩ B)' = A' ∪ B'",
      lhs: { symbol: "(A ∩ B)'", expr: ({A,B}) => !(A && B) }, rhs: { symbol: "A' ∪ B'", expr: ({A,B}) => !A || !B },
      definition: 'The complement of an intersection equals the union of the complements.' },

    { id: 'abs-u', group: 'Absorption', name: 'Absorption (Union)', formula: 'A ∪ (A ∩ B) = A',
      lhs: { symbol: 'A ∪ (A ∩ B)', expr: ({A,B}) => A || (A && B) }, rhs: { symbol: 'A', expr: ({A}) => A },
      definition: 'Uniting A with any subset of A leaves A unchanged.' },
    { id: 'abs-i', group: 'Absorption', name: 'Absorption (Intersection)', formula: 'A ∩ (A ∪ B) = A',
      lhs: { symbol: 'A ∩ (A ∪ B)', expr: ({A,B}) => A && (A || B) }, rhs: { symbol: 'A', expr: ({A}) => A },
      definition: 'Intersecting A with any superset of A leaves A unchanged.' },

    { id: 'diff', group: 'Difference', name: 'A minus B as Intersection', formula: "A \\ B = A ∩ B'",
      lhs: { symbol: 'A \\ B', expr: ({A,B}) => A && !B }, rhs: { symbol: "A ∩ B'", expr: ({A,B}) => A && !B },
      definition: 'Difference is intersection with the complement.' },
    { id: 'diff-r', group: 'Difference', name: 'B minus A as Intersection', formula: "B \\ A = A' ∩ B",
      lhs: { symbol: 'B \\ A', expr: ({A,B}) => B && !A }, rhs: { symbol: "A' ∩ B", expr: ({A,B}) => !A && B },
      definition: 'Symmetric form of the difference identity.' },
    { id: 'sd-1', group: 'Difference', name: 'Symmetric Difference as Union of Differences', formula: 'A △ B = (A \\ B) ∪ (B \\ A)',
      lhs: { symbol: 'A △ B', expr: ({A,B}) => A !== B }, rhs: { symbol: '(A \\ B) ∪ (B \\ A)', expr: ({A,B}) => (A && !B) || (B && !A) },
      definition: 'Symmetric difference equals the union of the two differences.' },
    { id: 'sd-2', group: 'Difference', name: 'Symmetric Difference as Union Minus Intersection', formula: "A △ B = (A ∪ B) ∩ (A ∩ B)'",
      lhs: { symbol: 'A △ B', expr: ({A,B}) => A !== B }, rhs: { symbol: "(A ∪ B) ∩ (A ∩ B)'", expr: ({A,B}) => (A || B) && !(A && B) },
      definition: 'Symmetric difference equals everything in the union except the intersection.' },
    { id: 'sd-c', group: 'Difference', name: 'Complement of Symmetric Difference', formula: "(A △ B)' = (A ∩ B) ∪ (A ∪ B)'",
      lhs: { symbol: "(A △ B)'", expr: ({A,B}) => !(A !== B) }, rhs: { symbol: "(A ∩ B) ∪ (A ∪ B)'", expr: ({A,B}) => (A && B) || !(A || B) },
      definition: 'The complement of A △ B contains the intersection plus everything outside both sets.' },

    { id: 'cc-1', group: 'Compound Complements', name: "Complement of A' ∪ B", formula: "(A' ∪ B)' = A ∩ B'",
      lhs: { symbol: "(A' ∪ B)'", expr: ({A,B}) => !(!A || B) }, rhs: { symbol: "A ∩ B'", expr: ({A,B}) => A && !B },
      definition: "Derived from De Morgan's plus double complement." },
    { id: 'cc-2', group: 'Compound Complements', name: "Complement of A ∪ B'", formula: "(A ∪ B')' = A' ∩ B",
      lhs: { symbol: "(A ∪ B')'", expr: ({A,B}) => !(A || !B) }, rhs: { symbol: "A' ∩ B", expr: ({A,B}) => !A && B },
      definition: 'Mirror of the previous identity.' },
    { id: 'cc-3', group: 'Compound Complements', name: "Complement of A ∩ B'", formula: "(A ∩ B')' = A' ∪ B",
      lhs: { symbol: "(A ∩ B')'", expr: ({A,B}) => !(A && !B) }, rhs: { symbol: "A' ∪ B", expr: ({A,B}) => !A || B },
      definition: 'Useful in expressing material implication: A → B.' },
    { id: 'cc-4', group: 'Compound Complements', name: "Complement of A' ∩ B", formula: "(A' ∩ B)' = A ∪ B'",
      lhs: { symbol: "(A' ∩ B)'", expr: ({A,B}) => !(!A && B) }, rhs: { symbol: "A ∪ B'", expr: ({A,B}) => A || !B },
      definition: 'Mirror of the previous identity.' }
  ]
};

const GROUP_ORDER = ['Idempotent', 'Commutative', 'Identity & Annihilation', 'Complement', "De Morgan's Laws", 'Absorption', 'Difference', 'Compound Complements'];

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
.tsl-tab:hover {
  color: #334155;
}
.tsl-tab:focus,
.tsl-tab:focus-visible {
  outline: none;
}
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
    const style = document.createElement('style');
    style.id = CSS_ID;
    style.textContent = CSS;
    document.head.appendChild(style);
  }, []);
}

export const TwoSetsLawsExplorer = ({ data = lawsData, explanations = null }) => {
  useInjectCss();

  const { frame, defaults, theme: defaultTheme, identities } = data;
  const [currentId, setCurrentId] = useState(identities[0]?.id);
  const [themeColor, setThemeColor] = useState(defaultTheme.color);
  const [themeOpacity, setThemeOpacity] = useState(defaultTheme.opacity);

  const grouped = useMemo(() => identities.reduce((acc, it) => {
    const g = it.group || 'Other';
    if (!acc[g]) acc[g] = [];
    acc[g].push(it);
    return acc;
  }, {}), [identities]);
  const groups = useMemo(() => {
    const known = GROUP_ORDER.filter((g) => grouped[g]);
    const extras = Object.keys(grouped).filter((g) => !GROUP_ORDER.includes(g));
    return [...known, ...extras];
  }, [grouped]);

  const current = identities.find((it) => it.id === currentId) || identities[0];
  const idx = identities.findIndex((it) => it.id === currentId);

  const [activeGroup, setActiveGroup] = useState(current?.group || groups[0]);
  const lastSyncedIdRef = useRef(currentId);
  useEffect(() => {
    if (lastSyncedIdRef.current !== currentId) {
      lastSyncedIdRef.current = currentId;
      if (current?.group && current.group !== activeGroup) setActiveGroup(current.group);
    }
  }, [currentId, current, activeGroup]);

  const { lhsProps, rhsProps, matches } = useMemo(() => {
    if (!current) return { lhsProps: null, rhsProps: null, matches: false };
    const theme = { color: themeColor, opacity: themeOpacity, neutralFill: defaultTheme.neutralFill, outsideNeutralFill: defaultTheme.outsideNeutralFill };
    const common = {
      circles: defaults.circles, width: defaults.width, height: defaults.height,
      margin: defaults.margin, backgroundColor: defaults.backgroundColor, universe: defaults.universe,
      tooltips: current?.tooltips || defaults.tooltips || {},
      theme
    };
    return {
      lhsProps: { ...common, predicate: current.lhs.expr },
      rhsProps: { ...common, predicate: current.rhs.expr },
      matches: predicatesMatch(current.lhs.expr, current.rhs.expr)
    };
  }, [current, defaults, defaultTheme, themeColor, themeOpacity]);

  const goPrev = () => setCurrentId(identities[(idx - 1 + identities.length) % identities.length].id);
  const goNext = () => setCurrentId(identities[(idx + 1) % identities.length].id);
  const resetTheme = () => { setThemeColor(defaultTheme.color); setThemeOpacity(defaultTheme.opacity); };

  const activeItems = grouped[activeGroup] || [];

  return (
    <div style={s.container}>
      <div style={s.header}>
        <p style={s.subtitle}>{frame.subtitle}</p>
      </div>

      <div style={s.controls}>
        <div className="venn-laws-tabs-strip" style={s.tabsStrip}>
          {groups.map((g) => {
            const isActive = g === activeGroup;
            return (
              <button
                key={g}
                className={`tsl-tab${isActive ? ' active' : ''}`}
                onClick={() => setActiveGroup(g)}
                title={g}
              >
                {g}
              </button>
            );
          })}
        </div>

        <div style={s.tabBody}>
          <div style={s.formulaRow}>
            {activeItems.map((it) => (
              <button
                key={it.id}
                className={`tsl-btn${currentId === it.id ? ' active' : ''}`}
                onClick={() => setCurrentId(it.id)}
                title={it.name}
              >
                {it.formula}
              </button>
            ))}
          </div>
          <div style={s.dropdownWrap}>
            <span style={s.groupLabel}>Jump to</span>
            <select style={s.dropdown} value={currentId} onChange={(e) => setCurrentId(e.target.value)}>
              {groups.map((g) => (
                <optgroup key={g} label={g}>
                  {grouped[g].map((it) => <option key={it.id} value={it.id}>{it.formula}</option>)}
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
              <span style={s.panelTitle}>Identity</span>
              <span style={s.badge}>{current?.formula}</span>
            </div>
            <div style={s.identityBox}>
              <div style={s.side}>
                <div style={s.sideLabel}>{current?.lhs.symbol}</div>
                {lhsProps && <Venncore {...lhsProps} />}
              </div>
              <div style={s.equals}>=</div>
              <div style={s.side}>
                <div style={s.sideLabel}>{current?.rhs.symbol}</div>
                {rhsProps && <Venncore {...rhsProps} />}
              </div>
            </div>
            <div style={s.matchRow}>
              <span style={{ ...s.matchBadge, ...(matches ? s.matchOk : s.matchFail) }}>
                {matches ? '✓ Regions match — identity holds' : '✗ Regions differ'}
              </span>
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
            <span style={s.counter}>{idx + 1} / {identities.length}</span>
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
  identityBox: { padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', flexWrap: 'wrap' },
  side: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' },
  sideLabel: { fontSize: '14px', fontWeight: '600', color: '#1e293b', fontFamily: "'Cambria Math','Times New Roman',serif" },
  equals: { fontSize: '28px', fontWeight: '700', color: '#64748b' },
  matchRow: { padding: '0 16px 14px 16px', display: 'flex', justifyContent: 'center' },
  matchBadge: { padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
  matchOk: { backgroundColor: '#dcfce7', color: '#166534' },
  matchFail: { backgroundColor: '#fee2e2', color: '#991b1b' },
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

export default TwoSetsLawsExplorer;