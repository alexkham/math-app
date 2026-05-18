// // // 'use client';

// // // import React, { useState, useMemo } from 'react';
// // // import { ScenePlayer } from './MatrixCore';
// // // import { buildRowColumnScenes } from './strategies/rowColumn';
// // // import { buildColumnByColumnScenes } from './strategies/columnByColumn';
// // // import { buildRowByRowScenes } from './strategies/rowByRow';
// // // import { buildSumOfOuterProductsScenes } from './strategies/sumOfOuterProducts';

// // // // ===========================================================
// // // // PowerWrapper — visualizes A^n as repeated multiplication.
// // // //   A^1 = A
// // // //   A^2 = A · A
// // // //   A^n = A^(n-1) · A
// // // //
// // // // Implementation: chain (n-1) multiplications. Each chained
// // // // multiplication uses one of the four strategies (reused from
// // // // the multiplication wrapper). Between chained multiplications,
// // // // we relabel the running product so the next stage reads as
// // // // "P_k · A = P_{k+1}", which mirrors how the operation is
// // // // taught.
// // // //
// // // // Constraint: A must be square. Single dim picker `n` (the size).
// // // // ===========================================================

// // // const STRATEGIES = {
// // //   'row-column': {
// // //     id: 'row-column',
// // //     label: 'Row · Column',
// // //     description: 'Each cell of the next product = dot product of a row and a column.',
// // //     advanced: false,
// // //     build: buildRowColumnScenes
// // //   },
// // //   'column-by-column': {
// // //     id: 'column-by-column',
// // //     label: 'Column by column',
// // //     description: 'Each column of the next product is built at once.',
// // //     advanced: false,
// // //     build: buildColumnByColumnScenes
// // //   },
// // //   'row-by-row': {
// // //     id: 'row-by-row',
// // //     label: 'Row by row',
// // //     description: 'Each row of the next product is built at once.',
// // //     advanced: false,
// // //     build: buildRowByRowScenes
// // //   },
// // //   'sum-of-outer-products': {
// // //     id: 'sum-of-outer-products',
// // //     label: 'Sum of outer products',
// // //     description: 'The next product accumulates as a sum of rank-1 outer products.',
// // //     advanced: true,
// // //     build: buildSumOfOuterProductsScenes
// // //   }
// // // };

// // // const STRATEGY_ORDER = [
// // //   'row-column',
// // //   'column-by-column',
// // //   'row-by-row',
// // //   'sum-of-outer-products'
// // // ];

// // // // Adapt a single multiplication's scenes to a stage in the chain.
// // // // Relabel the LEFT factor as P_k (running product) and the result
// // // // as P_{k+1}. The first stage uses A · A directly.
// // // function adaptStageScenes(scenes, stageIndex, exponent) {
// // //   const isFirst = stageIndex === 0;
// // //   const leftLabel = isFirst ? 'A' : `A<sup>${stageIndex + 1}</sup>`;
// // //   const rightLabel = 'A';
// // //   const resultLabel = `A<sup>${stageIndex + 2}</sup>`;

// // //   // Stage banner prepended to each scene's title.
// // //   const banner = `Stage ${stageIndex + 1} of ${exponent - 1}: ${leftLabel} · ${rightLabel} = ${resultLabel}`;

// // //   return scenes.map((s) => {
// // //     // Deep-clone matrices to relabel without mutating shared refs
// // //     // across renders. The matrices object is shared by reference
// // //     // between scenes in the source generator, so we clone once
// // //     // per scene's matrices.A/B/C if their label differs.
// // //     const matrices = { ...s.matrices };
// // //     if (matrices.A) matrices.A = { ...matrices.A, label: leftLabel.replace(/<[^>]+>/g, '') };
// // //     if (matrices.B) matrices.B = { ...matrices.B, label: rightLabel };
// // //     if (matrices.C) matrices.C = { ...matrices.C, label: resultLabel.replace(/<[^>]+>/g, '') };

// // //     return {
// // //       ...s,
// // //       matrices,
// // //       title: `${banner} &nbsp; — &nbsp; ${s.title}`
// // //     };
// // //   });
// // // }

// // // function buildPowerScenes(n, exponent, strategyId) {
// // //   const strategy = STRATEGIES[strategyId] || STRATEGIES['row-column'];

// // //   if (exponent === 1) {
// // //     // A^1 = A. Just one informational scene showing A.
// // //     const dummy = strategy.build(n, n, n, 'AB');
// // //     return [{
// // //       ...dummy[0],
// // //       title: 'A<sup>1</sup> = A',
// // //       formula: 'The first power is the matrix itself. Increase the exponent to see repeated multiplication.',
// // //       highlights: {},
// // //       overlays: []
// // //     }];
// // //   }

// // //   const scenes = [];
// // //   for (let stage = 0; stage < exponent - 1; stage++) {
// // //     const stageScenes = strategy.build(n, n, n, 'AB');
// // //     scenes.push(...adaptStageScenes(stageScenes, stage, exponent));
// // //   }
// // //   return scenes;
// // // }

// // // // ===========================================================
// // // // Component
// // // // ===========================================================
// // // export default function PowerWrapper({
// // //   defaultSize = 3,
// // //   defaultExponent = 2,
// // //   sizeRange = [2, 3, 4, 5],
// // //   exponentRange = [1, 2, 3, 4, 5],
// // //   title = 'Matrix Power',
// // //   subtitle = 'Visualization of A<sup>n</sup> as repeated multiplication, step by step.',
// // //   defaultSpeed = 1200
// // // }) {
// // //   const [activeTab, setActiveTab] = useState('scenario');
// // //   const [size, setSize] = useState(defaultSize);
// // //   const [exponent, setExponent] = useState(defaultExponent);
// // //   const [strategy, setStrategy] = useState('row-column');

// // //   const scenes = useMemo(
// // //     () => buildPowerScenes(size, exponent, strategy),
// // //     [size, exponent, strategy]
// // //   );

// // //   return (
// // //     <div style={{
// // //       background: 'white',
// // //       borderRadius: '10px',
// // //       boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
// // //       padding: '22px',
// // //       fontFamily: 'Arial, sans-serif'
// // //     }}>
// // //       <style>{`
// // //         .pw-tab { position: relative; }
// // //         .pw-tab:hover { color: #334155; }
// // //         .pw-tab .pw-tip {
// // //           visibility: hidden; opacity: 0;
// // //           position: absolute; top: calc(100% + 8px); left: 50%;
// // //           transform: translateX(-50%);
// // //           background: #1e293b; color: #f1f5f9;
// // //           font-size: 12px; line-height: 1.4; font-weight: 400;
// // //           padding: 7px 11px; border-radius: 6px;
// // //           width: 210px; text-align: center;
// // //           pointer-events: none;
// // //           transition: opacity 0.12s ease, visibility 0.12s;
// // //           z-index: 10;
// // //         }
// // //         .pw-tab .pw-tip::before {
// // //           content: ''; position: absolute;
// // //           bottom: 100%; left: 50%; transform: translateX(-50%);
// // //           border: 5px solid transparent; border-bottom-color: #1e293b;
// // //         }
// // //         .pw-tab:hover .pw-tip, .pw-tab:focus .pw-tip {
// // //           visibility: visible; opacity: 1;
// // //         }
// // //         .pw-strategy:hover { border-color: #94a3b8; }
// // //         .pw-strategy-active:hover { border-color: #2563eb; }
// // //         .pw-stepper-btn:hover { color: #1e40af; }
// // //       `}</style>

// // //       {(title || subtitle) && (
// // //         <div style={{ marginBottom: '18px' }}>
// // //           {title && (
// // //             <h2 style={{
// // //               fontSize: '22px',
// // //               color: '#1e40af',
// // //               margin: '0 0 4px 0',
// // //               fontWeight: 'bold'
// // //             }}>
// // //               {title}
// // //             </h2>
// // //           )}
// // //           {subtitle && (
// // //             <p
// // //               style={{ color: '#64748b', fontSize: '14px', margin: 0 }}
// // //               dangerouslySetInnerHTML={{ __html: subtitle }}
// // //             />
// // //           )}
// // //         </div>
// // //       )}

// // //       <PowerControlPanel
// // //         activeTab={activeTab}
// // //         onTabChange={setActiveTab}
// // //         size={size}
// // //         setSize={setSize}
// // //         exponent={exponent}
// // //         setExponent={setExponent}
// // //         sizeRange={sizeRange}
// // //         exponentRange={exponentRange}
// // //         strategy={strategy}
// // //         setStrategy={setStrategy}
// // //       />

// // //       <div style={{ marginTop: '18px' }}>
// // //         <ScenePlayer
// // //           scenes={scenes}
// // //           defaultSpeed={defaultSpeed}
// // //           showSpeedSelector={true}
// // //           showStepIndicator={true}
// // //           showStepLog={true}
// // //           stepLogTitle="Step explanations"
// // //         />
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // // ===========================================================
// // // // Control panel — Scenario | Strategy tabs (mirrors multiplication wrapper)
// // // // ===========================================================
// // // function PowerControlPanel({
// // //   activeTab, onTabChange,
// // //   size, setSize,
// // //   exponent, setExponent,
// // //   sizeRange, exponentRange,
// // //   strategy, setStrategy
// // // }) {
// // //   const strategyMeta = STRATEGIES[strategy];

// // //   const summary = (
// // //     <div style={{
// // //       display: 'flex',
// // //       alignItems: 'center',
// // //       gap: '6px',
// // //       fontSize: '12px',
// // //       color: '#64748b',
// // //       padding: '12px 0',
// // //       flexWrap: 'wrap'
// // //     }}>
// // //       <span style={mathInlineStyle}>
// // //         A<sup>{exponent}</sup>
// // //       </span>
// // //       <span style={{ color: '#cbd5e1' }}>·</span>
// // //       <span>A is {size}×{size}</span>
// // //       <span style={{ color: '#cbd5e1', margin: '0 4px' }}>|</span>
// // //       <span>{strategyMeta.label}</span>
// // //     </div>
// // //   );

// // //   return (
// // //     <div style={{
// // //       background: 'white',
// // //       border: '1px solid #e5e7eb',
// // //       borderRadius: '10px',
// // //       overflow: 'hidden'
// // //     }}>
// // //       <div style={{
// // //         display: 'flex',
// // //         alignItems: 'stretch',
// // //         padding: '0 16px',
// // //         borderBottom: '1px solid #e5e7eb',
// // //         background: '#f8fafc',
// // //         flexWrap: 'wrap'
// // //       }}>
// // //         <TabButton
// // //           active={activeTab === 'scenario'}
// // //           onClick={() => onTabChange('scenario')}
// // //           tooltip="Pick the matrix size and the exponent"
// // //         >
// // //           Scenario
// // //         </TabButton>
// // //         <TabButton
// // //           active={activeTab === 'strategy'}
// // //           onClick={() => onTabChange('strategy')}
// // //           tooltip="How each intermediate product is built"
// // //         >
// // //           Strategy
// // //         </TabButton>
// // //         <div style={{ flex: 1 }} />
// // //         {summary}
// // //       </div>

// // //       <div style={{ padding: '18px' }}>
// // //         {activeTab === 'scenario' && (
// // //           <ScenarioTab
// // //             size={size}
// // //             setSize={setSize}
// // //             exponent={exponent}
// // //             setExponent={setExponent}
// // //             sizeRange={sizeRange}
// // //             exponentRange={exponentRange}
// // //           />
// // //         )}
// // //         {activeTab === 'strategy' && (
// // //           <StrategyTab
// // //             strategy={strategy}
// // //             onStrategyChange={setStrategy}
// // //           />
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function TabButton({ active, onClick, tooltip, children }) {
// // //   const base = {
// // //     padding: '12px 16px',
// // //     background: active ? 'white' : 'transparent',
// // //     border: 'none',
// // //     borderBottom: `2px solid ${active ? '#2563eb' : 'transparent'}`,
// // //     fontSize: '13px',
// // //     color: active ? '#1e40af' : '#64748b',
// // //     fontWeight: active ? 600 : 'normal',
// // //     cursor: 'pointer',
// // //     fontFamily: 'inherit',
// // //     marginBottom: active ? '-1px' : 0
// // //   };

// // //   return (
// // //     <button className="pw-tab" style={base} onClick={onClick}>
// // //       {children}
// // //       <span className="pw-tip">{tooltip}</span>
// // //     </button>
// // //   );
// // // }

// // // function ScenarioTab({ size, setSize, exponent, setExponent, sizeRange, exponentRange }) {
// // //   const sizeMin = sizeRange[0];
// // //   const sizeMax = sizeRange[sizeRange.length - 1];
// // //   const expMin = exponentRange[0];
// // //   const expMax = exponentRange[exponentRange.length - 1];

// // //   return (
// // //     <div style={{
// // //       display: 'grid',
// // //       gridTemplateColumns: 'auto auto 1fr',
// // //       gap: '36px',
// // //       alignItems: 'start',
// // //       rowGap: '14px'
// // //     }}>
// // //       <div>
// // //         <FieldLabel>Matrix size</FieldLabel>
// // //         <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
// // //           <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>A</span>
// // //           <Stepper value={size} onChange={setSize} min={sizeMin} max={sizeMax} />
// // //           <span style={{ color: '#94a3b8' }}>×</span>
// // //           <Stepper value={size} onChange={setSize} min={sizeMin} max={sizeMax} linked={true} lockReason="A is square — both dims are linked" />
// // //         </div>
// // //       </div>

// // //       <div>
// // //         <FieldLabel>Exponent</FieldLabel>
// // //         <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
// // //           <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>n</span>
// // //           <Stepper value={exponent} onChange={setExponent} min={expMin} max={expMax} />
// // //         </div>
// // //       </div>

// // //       <div style={{ alignSelf: 'center' }}>
// // //         <FieldLabel>Computing</FieldLabel>
// // //         <div style={{
// // //           ...mathInlineStyle,
// // //           fontSize: '18px',
// // //           color: '#1e40af',
// // //           fontWeight: 500
// // //         }}>
// // //           A<sup>{exponent}</sup> ={' '}
// // //           <span style={{ fontSize: '14px', color: '#475569', fontWeight: 'normal' }}>
// // //             {exponent === 1
// // //               ? 'A'
// // //               : Array(exponent).fill('A').join(' · ')}
// // //           </span>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function StrategyTab({ strategy, onStrategyChange }) {
// // //   return (
// // //     <div>
// // //       <FieldLabel>How each intermediate product is built</FieldLabel>
// // //       <div style={{
// // //         display: 'grid',
// // //         gridTemplateColumns: 'repeat(2, 1fr)',
// // //         gap: '10px'
// // //       }}>
// // //         {STRATEGY_ORDER.map((id) => {
// // //           const s = STRATEGIES[id];
// // //           const active = strategy === id;
// // //           return (
// // //             <StrategyCard
// // //               key={id}
// // //               meta={s}
// // //               active={active}
// // //               onClick={() => onStrategyChange(id)}
// // //             />
// // //           );
// // //         })}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function StrategyCard({ meta, active, onClick }) {
// // //   const base = {
// // //     background: active ? '#dbeafe' : 'white',
// // //     border: active ? '2px solid #2563eb' : '1px solid #cbd5e1',
// // //     borderRadius: '8px',
// // //     padding: active ? '11px 13px' : '12px 14px',
// // //     cursor: 'pointer',
// // //     fontFamily: 'Arial, sans-serif',
// // //     transition: 'border-color 0.15s ease, background 0.15s ease'
// // //   };

// // //   const cls = ['pw-strategy', active && 'pw-strategy-active'].filter(Boolean).join(' ');

// // //   return (
// // //     <div className={cls} style={base} onClick={onClick}>
// // //       <div style={{
// // //         display: 'flex',
// // //         alignItems: 'center',
// // //         justifyContent: 'space-between',
// // //         marginBottom: '4px'
// // //       }}>
// // //         <span style={{
// // //           fontSize: '14px',
// // //           fontWeight: active ? 600 : 500,
// // //           color: active ? '#1e40af' : '#334155'
// // //         }}>
// // //           {meta.label}
// // //         </span>
// // //         <span style={{ display: 'inline-flex', gap: '6px', alignItems: 'center' }}>
// // //           {meta.advanced && (
// // //             <span style={{
// // //               fontSize: '10px',
// // //               padding: '2px 6px',
// // //               borderRadius: '4px',
// // //               background: '#dbeafe',
// // //               color: '#1e40af',
// // //               fontWeight: 600
// // //             }}>
// // //               advanced
// // //             </span>
// // //           )}
// // //           {active && <span style={{ fontSize: '14px', color: '#2563eb' }}>✓</span>}
// // //         </span>
// // //       </div>
// // //       <p
// // //         style={{
// // //           fontSize: '12px',
// // //           color: active ? '#475569' : '#64748b',
// // //           margin: 0,
// // //           lineHeight: 1.45
// // //         }}
// // //         dangerouslySetInnerHTML={{ __html: meta.description }}
// // //       />
// // //     </div>
// // //   );
// // // }

// // // // ===========================================================
// // // // Shared little bits
// // // // ===========================================================
// // // const mathInlineStyle = {
// // //   fontFamily: '\'Cambria Math\', Georgia, serif',
// // //   fontStyle: 'italic'
// // // };

// // // const chevButtonStyle = {
// // //   background: 'transparent',
// // //   border: 'none',
// // //   padding: '0 2px',
// // //   fontSize: '8px',
// // //   color: '#64748b',
// // //   cursor: 'pointer',
// // //   lineHeight: 1,
// // //   fontFamily: 'inherit'
// // // };

// // // function FieldLabel({ children }) {
// // //   return (
// // //     <p style={{
// // //       fontSize: '12px',
// // //       color: '#64748b',
// // //       margin: '0 0 8px',
// // //       fontFamily: 'Arial, sans-serif',
// // //       fontWeight: 500
// // //     }}>
// // //       {children}
// // //     </p>
// // //   );
// // // }

// // // function Stepper({ value, onChange, min, max, linked = false, lockReason }) {
// // //   const interactive = !linked;
// // //   return (
// // //     <span
// // //       title={linked ? lockReason : undefined}
// // //       style={{
// // //         display: 'inline-flex',
// // //         alignItems: 'center',
// // //         gap: '4px',
// // //         padding: '4px 6px 4px 10px',
// // //         borderRadius: '6px',
// // //         background: linked ? '#f1f5f9' : 'white',
// // //         border: `1px ${linked ? 'dashed' : 'solid'} ${linked ? '#94a3b8' : '#cbd5e1'}`
// // //       }}
// // //     >
// // //       <span style={{
// // //         ...mathInlineStyle,
// // //         fontWeight: 500,
// // //         minWidth: '10px',
// // //         textAlign: 'center',
// // //         color: linked ? '#64748b' : '#0f172a'
// // //       }}>
// // //         {value}
// // //       </span>
// // //       {interactive ? (
// // //         <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.7 }}>
// // //           <button
// // //             className="pw-stepper-btn"
// // //             onClick={() => onChange(Math.min(max, value + 1))}
// // //             disabled={value >= max}
// // //             style={chevButtonStyle}
// // //             aria-label="Increase"
// // //           >▲</button>
// // //           <button
// // //             className="pw-stepper-btn"
// // //             onClick={() => onChange(Math.max(min, value - 1))}
// // //             disabled={value <= min}
// // //             style={chevButtonStyle}
// // //             aria-label="Decrease"
// // //           >▼</button>
// // //         </span>
// // //       ) : (
// // //         <span style={{
// // //           fontSize: '11px',
// // //           color: '#94a3b8',
// // //           display: 'inline-flex',
// // //           alignItems: 'center'
// // //         }}>⇌</span>
// // //       )}
// // //     </span>
// // //   );
// // // }



// // 'use client';

// // import React, { useState, useMemo } from 'react';
// // import { ScenePlayer } from './MatrixCore';

// // // ===========================================================
// // // PowerWrapper v2 — bracket-and-collapse choreography with
// // // real symbolic cell content.
// // //
// // // Story for A^n:
// // //   Scene 0: definition — n copies of A in a row
// // //   Scenes for stage k = 1..n-1 (each stage absorbs one A
// // //   into the growing power on the left):
// // //     - bracket scene: dashed group around (A^k · A), label A^(k+1)
// // //                      grouped cells in 'primary'
// // //     - collapse scene: group replaced by single A^(k+1) matrix,
// // //                       cells in 'accent', chain shortened by one
// // //   Scene final: full A^n matrix wrapped in solid green group
// // //
// // // Cell content tiers (per stage power p):
// // //   p === 1  → tier 1: single symbol a_{i,j}
// // //   p === 2  → tier 2a: a_{i,k}a_{k,j} + ... (n terms, inline)
// // //   p >= 3   → tier 3: Σ stack + path expression in cell,
// // //                      full expansion in hover tooltip
// // //
// // // Termination of bracketing structure: left-to-right.
// // // stage 1 brackets the leftmost pair (A · A) → A^2
// // // stage 2 brackets (A^2 · A) → A^3
// // // ...
// // //
// // // Constraints:
// // //   - A is n×n square
// // //   - exponent in 1..5
// // //   - size in 2..4 (tier 3 handles 3×3 / 4×4 fine via tooltips)
// // // ===========================================================

// // // -----------------------------------------------------------
// // // Shared style atoms
// // // -----------------------------------------------------------
// // const mathInlineStyle = {
// //   fontFamily: '\'Cambria Math\', Georgia, serif',
// //   fontStyle: 'italic'
// // };

// // const chevButtonStyle = {
// //   background: 'transparent',
// //   border: 'none',
// //   padding: '0 2px',
// //   fontSize: '8px',
// //   color: '#64748b',
// //   cursor: 'pointer',
// //   lineHeight: 1,
// //   fontFamily: 'inherit'
// // };

// // const POWER_INFO =
// //   'Raising a matrix to a power means multiplying it by itself repeatedly: ' +
// //   'A^n = A · A · ... · A (n times). A must be square; otherwise the chain ' +
// //   'is not even defined. Each cell of A^n is a sum of products of n entries ' +
// //   'of A, joining row-index to column-index step by step.';

// // // -----------------------------------------------------------
// // // Build the per-stage cell content.
// // //
// // // We work with "path lists": for stage power p, each cell
// // // (i, j) of A^p contains size^(p-1) products, each a sequence
// // // of p indices (i, k_1, k_2, ..., k_{p-1}, j).
// // //
// // // A path is an array of length p+1: [i, k_1, ..., k_{p-1}, j].
// // // The product for a path is a_{path[0],path[1]} *
// // // a_{path[1],path[2]} * ... * a_{path[p-1],path[p]}.
// // //
// // // allPathsForCell(size, p, i, j) → array of all paths.
// // // -----------------------------------------------------------
// // function allPathsForCell(size, p, i, j) {
// //   if (p === 1) return [[i, j]];
// //   // p >= 2: enumerate (k_1, ..., k_{p-1}) over [0..size)^{p-1}
// //   const inner = p - 1;
// //   const total = Math.pow(size, inner);
// //   const out = [];
// //   for (let n = 0; n < total; n++) {
// //     const ks = [];
// //     let r = n;
// //     for (let d = 0; d < inner; d++) {
// //       ks.push(r % size);
// //       r = Math.floor(r / size);
// //     }
// //     out.push([i, ...ks, j]);
// //   }
// //   return out;
// // }

// // // -----------------------------------------------------------
// // // Render one symbolic product (path) as inline JSX.
// // // Produces: a_{i,k_1} a_{k_1,k_2} ... a_{k_{p-1},j}
// // // -----------------------------------------------------------
// // function PathTerm({ path }) {
// //   const factors = [];
// //   for (let f = 0; f < path.length - 1; f++) {
// //     factors.push(
// //       <React.Fragment key={f}>
// //         <span style={{ fontStyle: 'italic' }}>
// //           a
// //           <sub style={{ fontSize: '0.62em', fontStyle: 'italic' }}>
// //             {path[f] + 1},{path[f + 1] + 1}
// //           </sub>
// //         </span>
// //       </React.Fragment>
// //     );
// //   }
// //   return <>{factors}</>;
// // }

// // // Sum of paths as inline JSX — used for tier 2a inline cells.
// // function PathSum({ paths }) {
// //   return (
// //     <>
// //       {paths.map((path, idx) => (
// //         <React.Fragment key={idx}>
// //           {idx > 0 && (
// //             <span style={{ fontStyle: 'normal', margin: '0 2px' }}>+</span>
// //           )}
// //           <PathTerm path={path} />
// //         </React.Fragment>
// //       ))}
// //     </>
// //   );
// // }

// // // -----------------------------------------------------------
// // // Sigma-stack JSX for tier 3 cell display.
// // // Renders:  Σ_{k₁,...,k_{p-1}} a_{i,k₁}...a_{k_{p-1},j}
// // // inside the cell. The full expansion is in the tooltip.
// // // -----------------------------------------------------------
// // function SigmaCellDisplay({ size, p, i, j }) {
// //   const inner = p - 1; // number of summation indices
// //   // Build path symbolically using k1, k2, ..., k_{p-1}
// //   const sumIndices = [];
// //   for (let d = 1; d <= inner; d++) {
// //     sumIndices.push(
// //       <React.Fragment key={d}>
// //         {d > 1 && ','}
// //         <span style={{ fontStyle: 'italic' }}>
// //           k<sub style={{ fontSize: '0.7em', fontStyle: 'normal' }}>{d}</sub>
// //         </span>
// //       </React.Fragment>
// //     );
// //   }
// //   // Build the symbolic product a_{i,k1} a_{k1,k2} ... a_{k_{p-1},j}
// //   const factors = [];
// //   const labels = ['i', ...Array.from({ length: inner }, (_, d) => `k${d + 1}`), 'j'];
// //   for (let f = 0; f < labels.length - 1; f++) {
// //     factors.push(
// //       <span key={f} style={{ fontStyle: 'italic' }}>
// //         a
// //         <sub style={{ fontSize: '0.62em', fontStyle: 'italic' }}>
// //           {renderIndex(labels[f], i, j)},{renderIndex(labels[f + 1], i, j)}
// //         </sub>
// //       </span>
// //     );
// //   }

// //   return (
// //     <span style={{
// //       display: 'inline-flex',
// //       alignItems: 'center',
// //       gap: '2px',
// //       fontSize: '11px',
// //       fontFamily: '\'Cambria Math\', Georgia, serif',
// //       lineHeight: 1.1
// //     }}>
// //       <span style={{
// //         display: 'inline-flex',
// //         flexDirection: 'column',
// //         alignItems: 'center',
// //         lineHeight: 1,
// //         fontStyle: 'normal',
// //         marginRight: '1px'
// //       }}>
// //         <span style={{ fontSize: '8px', fontStyle: 'italic' }}>{size - 1}</span>
// //         <span style={{ fontSize: '18px', lineHeight: 1 }}>&Sigma;</span>
// //         <span style={{ fontSize: '8px' }}>{sumIndices}</span>
// //       </span>
// //       <span style={{ display: 'inline-flex' }}>{factors}</span>
// //     </span>
// //   );
// // }

// // // renderIndex: 'i' → i+1 number; 'j' → j+1; 'k1' → k₁ subscript
// // function renderIndex(label, i, j) {
// //   if (label === 'i') return i + 1;
// //   if (label === 'j') return j + 1;
// //   // k1, k2, ...
// //   const idx = label.slice(1);
// //   return (
// //     <span style={{ fontStyle: 'italic' }}>
// //       k<span style={{ fontSize: '0.7em', verticalAlign: 'sub', fontStyle: 'normal' }}>{idx}</span>
// //     </span>
// //   );
// // }

// // // -----------------------------------------------------------
// // // Tooltip content for a tier-3 cell: full expansion.
// // // MatrixCore renders cells via React (cellOverride.display
// // // can be JSX), and cells are absolute-positionable containers
// // // via inline CSS through cellOverride.style.
// // //
// // // We compose the cell display as a wrapper with a hidden
// // // tooltip element styled via a scoped className.
// // // -----------------------------------------------------------
// // function Tier3CellWithTooltip({ size, p, i, j, tooltipClass }) {
// //   const paths = allPathsForCell(size, p, i, j);
// //   return (
// //     <span style={{
// //       position: 'relative',
// //       display: 'inline-flex',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       width: '100%',
// //       height: '100%'
// //     }}>
// //       <SigmaCellDisplay size={size} p={p} i={i} j={j} />
// //       <span className={tooltipClass}>
// //         <span style={{
// //           display: 'block',
// //           fontStyle: 'normal',
// //           fontFamily: 'Arial, sans-serif',
// //           fontSize: '10px',
// //           textTransform: 'uppercase',
// //           letterSpacing: '0.05em',
// //           color: '#94a3b8',
// //           marginBottom: '5px'
// //         }}>
// //           (A<sup>{p}</sup>)<sub>{i + 1},{j + 1}</sub> &nbsp;— {paths.length} terms
// //         </span>
// //         {paths.map((path, idx) => (
// //           <React.Fragment key={idx}>
// //             {idx > 0 && (
// //               <span style={{ fontStyle: 'normal', margin: '0 3px' }}>+</span>
// //             )}
// //             <PathTerm path={path} />
// //           </React.Fragment>
// //         ))}
// //       </span>
// //     </span>
// //   );
// // }

// // // -----------------------------------------------------------
// // // Build cellOverrides for a matrix of A^p (size×size).
// // //   p === 1 : no overrides (default rendering: a_{i,j})
// // //   p === 2 : tier 2a — sum of `size` terms inline
// // //   p >= 3  : tier 3 — Σ stack + tooltip
// // //
// // // tooltipClass is the scoped class used for tier-3 tooltips.
// // // -----------------------------------------------------------
// // function buildPowerOverrides(size, p, tooltipClass) {
// //   if (p === 1) return {};

// //   const overrides = {};
// //   for (let i = 0; i < size; i++) {
// //     for (let j = 0; j < size; j++) {
// //       if (p === 2) {
// //         // Tier 2a: inline sum of `size` short terms.
// //         const paths = allPathsForCell(size, p, i, j);
// //         overrides[`${i},${j}`] = {
// //           display: <PathSum paths={paths} />,
// //           fontStyle: 'normal',
// //           style: {
// //             fontSize: size <= 2 ? '11px' : '10px',
// //             lineHeight: 1.25,
// //             padding: '0 4px',
// //             whiteSpace: 'normal',
// //             wordBreak: 'normal',
// //             textAlign: 'center'
// //           }
// //         };
// //       } else {
// //         // Tier 3: Σ + tooltip.
// //         overrides[`${i},${j}`] = {
// //           display: (
// //             <Tier3CellWithTooltip
// //               size={size}
// //               p={p}
// //               i={i}
// //               j={j}
// //               tooltipClass={`${tooltipClass}-tip`}
// //             />
// //           ),
// //           fontStyle: 'normal',
// //           style: {
// //             padding: '0 4px',
// //             position: 'relative',
// //             overflow: 'visible',
// //             cursor: 'help'
// //           }
// //         };
// //       }
// //     }
// //   }
// //   return overrides;
// // }

// // // -----------------------------------------------------------
// // // Cell sizing per power tier (so the matrix doesn't overflow).
// // // p === 1 : default auto sizing
// // // p === 2 : wider, taller cells (tier 2a inline content)
// // // p >= 3  : tier-3 cells fit Σ stack — modest size, content
// // //           constant regardless of how many terms.
// // // -----------------------------------------------------------
// // function cellDimsForPower(size, p) {
// //   if (p === 1) {
// //     return { cellSize: 'auto', fontSize: 'auto' };
// //   }
// //   if (p === 2) {
// //     // Tier 2a — wider/taller to host inline polynomial.
// //     return { cellSize: size <= 2 ? 92 : 80, fontSize: 'auto' };
// //   }
// //   // Tier 3 — moderate cell, content is Σ + symbolic path.
// //   return { cellSize: 92, fontSize: 'auto' };
// // }

// // // -----------------------------------------------------------
// // // JSX label "A^p" with proper superscript.
// // // -----------------------------------------------------------
// // function PowerLabel({ p }) {
// //   if (p === 1) return <>A</>;
// //   return (
// //     <>
// //       A<sup style={{ fontStyle: 'normal', fontSize: '0.65em' }}>{p}</sup>
// //     </>
// //   );
// // }

// // // -----------------------------------------------------------
// // // Build a matrix spec for A^p on size×size.
// // // -----------------------------------------------------------
// // function powerMatrixSpec(size, p, tooltipClass, highlightAllAs = null) {
// //   const dims = cellDimsForPower(size, p);
// //   return {
// //     symbol: 'a',
// //     rows: size,
// //     cols: size,
// //     label: <PowerLabel p={p} />,
// //     cellSize: dims.cellSize,
// //     fontSize: dims.fontSize,
// //     cellOverrides: buildPowerOverrides(size, p, tooltipClass)
// //   };
// // }

// // // -----------------------------------------------------------
// // // Build the running-formula HTML for the caption.
// // // Shows: A^n = (currently-pending chain).
// // // Active stage's group is wrapped in parentheses + bold.
// // //
// // // chainSpec: array of {label, status}, where label is
// // // 'A^k' and status is 'pending' | 'grouped' | 'collapsed'.
// // // In a bracket scene, exactly one consecutive pair is
// // // 'grouped'. In a collapse scene, the leftmost factor is
// // // the new (collapsed) power and everything else is 'pending'.
// // // -----------------------------------------------------------
// // function chainFormula(targetN, currentLeftP, factorsRemaining, mode) {
// //   // chain on display: leftmost factor is A^currentLeftP (the
// //   // running product), followed by `factorsRemaining` copies of A.
// //   const parts = [];
// //   // header
// //   parts.push(`<i>A</i><sup>${targetN}</sup> = `);

// //   if (mode === 'bracket') {
// //     // grouped: (A^currentLeftP · A), then (factorsRemaining-1) bare A's
// //     parts.push(
// //       `<strong>(<i>A</i>${currentLeftP > 1 ? `<sup>${currentLeftP}</sup>` : ''} ` +
// //       `&middot; <i>A</i>)</strong>`
// //     );
// //     for (let r = 1; r < factorsRemaining; r++) {
// //       parts.push(' &middot; <i>A</i>');
// //     }
// //   } else {
// //     // collapse: leftmost is A^currentLeftP, followed by factorsRemaining A's
// //     parts.push(`<i>A</i><sup>${currentLeftP}</sup>`);
// //     for (let r = 0; r < factorsRemaining; r++) {
// //       parts.push(' &middot; <i>A</i>');
// //     }
// //   }
// //   return parts.join('');
// // }

// // // ===========================================================
// // // SCENE BUILDER
// // // ===========================================================
// // function buildScenes(size, exponent, tooltipClass) {
// //   const scenes = [];

// //   // --------- A^1 special case ---------
// //   if (exponent === 1) {
// //     scenes.push({
// //       title: '<i>A</i><sup>1</sup> = <i>A</i>',
// //       formula:
// //         'Raising <i>A</i> to the first power gives <i>A</i> itself. ' +
// //         'Increase the exponent to see repeated multiplication.',
// //       matrices: { A: powerMatrixSpec(size, 1, tooltipClass) },
// //       layout: [{ type: 'matrix', ref: 'A' }],
// //       highlights: {},
// //       overlays: []
// //     });
// //     return scenes;
// //   }

// //   // --------- Scene 0: definition (n copies of A) ---------
// //   const defMatrices = {};
// //   const defLayout = [];
// //   for (let f = 0; f < exponent; f++) {
// //     const id = `A${f}`;
// //     defMatrices[id] = powerMatrixSpec(size, 1, tooltipClass);
// //     defLayout.push({ type: 'matrix', ref: id });
// //     if (f < exponent - 1) defLayout.push({ type: 'operator', symbol: '*' });
// //   }
// //   scenes.push({
// //     title: `<i>A</i><sup>${exponent}</sup> is repeated multiplication`,
// //     formula:
// //       `<i>A</i><sup>${exponent}</sup> = ` +
// //       Array(exponent).fill('<i>A</i>').join(' &middot; ') +
// //       `. ${exponent} copies of <i>A</i>. We'll collapse them pairwise, ` +
// //       'watching the exponent grow and the cell content build up.',
// //     matrices: defMatrices,
// //     layout: defLayout,
// //     highlights: {},
// //     overlays: []
// //   });

// //   // --------- Stages 1..exponent-1 ---------
// //   // After stage k: leftmost factor is A^(k+1), and there are
// //   // (exponent - k - 1) bare A's remaining to the right.
// //   //
// //   // For stage k we produce:
// //   //   (a) bracket scene: leftmost factor = A^k, group spans
// //   //       A^k and the next A.
// //   //   (b) collapse scene: leftmost factor = A^(k+1),
// //   //       (exponent - k - 1) bare A's remain.

// //   for (let stage = 1; stage <= exponent - 1; stage++) {
// //     const leftPowerBefore = stage;            // A^stage on the left
// //     const leftPowerAfter  = stage + 1;        // A^(stage+1) after collapse
// //     const bareAsBefore    = exponent - stage; // 1+ remaining bare A's
// //     const bareAsAfter     = bareAsBefore - 1; // one absorbed

// //     // -------- (a) bracket scene --------
// //     {
// //       const matrices = {};
// //       const layout = [];
// //       // leftmost: A^stage (or A if stage===1)
// //       matrices.LEFT = powerMatrixSpec(size, leftPowerBefore, tooltipClass);
// //       // next: A (the one being absorbed)
// //       matrices.RIGHT = powerMatrixSpec(size, 1, tooltipClass);
// //       // rest: remaining bare A's
// //       for (let r = 1; r < bareAsBefore; r++) {
// //         matrices[`R${r}`] = powerMatrixSpec(size, 1, tooltipClass);
// //       }

// //       // Highlight all cells of LEFT and RIGHT in 'primary'.
// //       const allPrimary = [];
// //       for (let i = 0; i < size; i++) {
// //         for (let j = 0; j < size; j++) allPrimary.push([i, j, 'primary']);
// //       }

// //       layout.push({ type: 'matrix', ref: 'LEFT' });
// //       layout.push({ type: 'operator', symbol: '*' });
// //       layout.push({ type: 'matrix', ref: 'RIGHT' });
// //       for (let r = 1; r < bareAsBefore; r++) {
// //         layout.push({ type: 'operator', symbol: '*' });
// //         layout.push({ type: 'matrix', ref: `R${r}` });
// //       }

// //       scenes.push({
// //         title:
// //           `Stage ${stage} of ${exponent - 1}: bracket ` +
// //           `(<i>A</i>${leftPowerBefore > 1 ? `<sup>${leftPowerBefore}</sup>` : ''} ` +
// //           `&middot; <i>A</i>) &rarr; <i>A</i><sup>${leftPowerAfter}</sup>`,
// //         formula:
// //           chainFormula(exponent, leftPowerBefore, bareAsBefore, 'bracket') +
// //           '. Group the next pair: exponents add ' +
// //           `(${leftPowerBefore} + 1 = ${leftPowerAfter}).`,
// //         matrices,
// //         layout,
// //         highlights: {
// //           LEFT: { cells: allPrimary },
// //           RIGHT: { cells: allPrimary }
// //         },
// //         overlays: []
// //       });
// //     }

// //     // -------- (b) collapse scene --------
// //     {
// //       const matrices = {};
// //       const layout = [];
// //       matrices.LEFT = powerMatrixSpec(size, leftPowerAfter, tooltipClass);
// //       for (let r = 0; r < bareAsAfter; r++) {
// //         matrices[`R${r}`] = powerMatrixSpec(size, 1, tooltipClass);
// //       }

// //       const allAccent = [];
// //       for (let i = 0; i < size; i++) {
// //         for (let j = 0; j < size; j++) allAccent.push([i, j, 'accent']);
// //       }

// //       layout.push({ type: 'matrix', ref: 'LEFT' });
// //       for (let r = 0; r < bareAsAfter; r++) {
// //         layout.push({ type: 'operator', symbol: '*' });
// //         layout.push({ type: 'matrix', ref: `R${r}` });
// //       }

// //       const tierNote =
// //         leftPowerAfter <= 2
// //           ? 'Each cell of <i>A</i><sup>' + leftPowerAfter + '</sup> shows its full content inline.'
// //           : 'Each cell of <i>A</i><sup>' + leftPowerAfter +
// //             '</sup> has ' + Math.pow(size, leftPowerAfter - 1) +
// //             ' terms — too many for inline display. The cell shows a &Sigma; summary; ' +
// //             '<strong>hover any cell</strong> to see the full expansion.';

// //       const isFinal = (stage === exponent - 1);
// //       scenes.push({
// //         title: isFinal
// //           ? `Final: <i>A</i><sup>${exponent}</sup> &mdash; the result`
// //           : `Stage ${stage} of ${exponent - 1}: collapse to <i>A</i><sup>${leftPowerAfter}</sup>`,
// //         formula:
// //           chainFormula(exponent, leftPowerAfter, bareAsAfter, 'collapse') +
// //           '. ' + tierNote +
// //           (isFinal
// //             ? ' Bracketing order did not matter — any pairwise grouping yields the same matrix.'
// //             : ''),
// //         matrices,
// //         layout,
// //         highlights: {
// //           LEFT: { cells: allAccent }
// //         },
// //         overlays: []
// //       });
// //     }
// //   }

// //   return scenes;
// // }

// // // ===========================================================
// // // UI helpers
// // // ===========================================================
// // function InfoIcon({ tip }) {
// //   return (
// //     <span
// //       className="pw-info"
// //       tabIndex={0}
// //       aria-label="More info"
// //       style={{
// //         display: 'inline-flex',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         width: '16px',
// //         height: '16px',
// //         borderRadius: '50%',
// //         background: '#dbeafe',
// //         color: '#1e40af',
// //         fontSize: '11px',
// //         fontWeight: 700,
// //         cursor: 'help',
// //         position: 'relative',
// //         fontFamily: 'Arial, sans-serif',
// //         lineHeight: 1,
// //         userSelect: 'none',
// //         flexShrink: 0
// //       }}
// //     >
// //       ?
// //       <span className="pw-tip">{tip}</span>
// //     </span>
// //   );
// // }

// // function FieldLabel({ children, info }) {
// //   return (
// //     <div style={{
// //       display: 'inline-flex',
// //       alignItems: 'center',
// //       gap: '8px',
// //       margin: '0 0 10px'
// //     }}>
// //       <span style={{
// //         fontSize: '16px',
// //         color: '#1e40af',
// //         fontFamily: 'Arial, sans-serif',
// //         fontWeight: 600,
// //         lineHeight: 1.2
// //       }}>
// //         {children}
// //       </span>
// //       {info && <InfoIcon tip={info} />}
// //     </div>
// //   );
// // }

// // function Stepper({ value, onChange, min, max, locked = false, lockReason }) {
// //   const interactive = !locked;
// //   return (
// //     <span
// //       title={locked ? lockReason : undefined}
// //       style={{
// //         display: 'inline-flex',
// //         alignItems: 'center',
// //         gap: '4px',
// //         padding: '4px 6px 4px 10px',
// //         borderRadius: '6px',
// //         background: locked ? '#f1f5f9' : 'white',
// //         border: `1px ${locked ? 'dashed' : 'solid'} ${locked ? '#94a3b8' : '#cbd5e1'}`
// //       }}
// //     >
// //       <span style={{
// //         ...mathInlineStyle,
// //         fontWeight: 500,
// //         minWidth: '14px',
// //         textAlign: 'center',
// //         color: locked ? '#64748b' : '#0f172a'
// //       }}>
// //         {value}
// //       </span>
// //       {interactive ? (
// //         <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.7 }}>
// //           <button
// //             className="pw-stepper-btn"
// //             onClick={() => onChange(Math.min(max, value + 1))}
// //             disabled={value >= max}
// //             style={chevButtonStyle}
// //             aria-label="Increase"
// //           >&#9650;</button>
// //           <button
// //             className="pw-stepper-btn"
// //             onClick={() => onChange(Math.max(min, value - 1))}
// //             disabled={value <= min}
// //             style={chevButtonStyle}
// //             aria-label="Decrease"
// //           >&#9660;</button>
// //         </span>
// //       ) : (
// //         <span style={{
// //           fontSize: '11px',
// //           color: '#94a3b8',
// //           display: 'inline-flex',
// //           alignItems: 'center'
// //         }}>&#8646;</span>
// //       )}
// //     </span>
// //   );
// // }

// // // ===========================================================
// // // Main wrapper
// // // ===========================================================
// // export default function PowerWrapper({
// //   defaultSize = 2,
// //   defaultExponent = 4,
// //   sizeRange = [2, 3, 4],
// //   exponentRange = [1, 2, 3, 4, 5],
// //   title = 'Matrix Power',
// //   subtitle = 'Visualization of A\u207F as bracket-and-collapse: every cell shows its real symbolic content.',
// //   defaultSpeed = 1400
// // }) {
// //   const [size, setSize] = useState(defaultSize);
// //   const [exponent, setExponent] = useState(defaultExponent);

// //   const sizeMin = sizeRange[0];
// //   const sizeMax = sizeRange[sizeRange.length - 1];
// //   const expMin = exponentRange[0];
// //   const expMax = exponentRange[exponentRange.length - 1];

// //   // Unique class prefix for the tier-3 tooltips so multiple
// //   // PowerWrappers on the same page don't share scope.
// //   const instanceId = React.useId().replace(/:/g, '');
// //   const tooltipClass = `pw-${instanceId}`;

// //   const scenes = useMemo(
// //     () => buildScenes(size, exponent, tooltipClass),
// //     [size, exponent, tooltipClass]
// //   );

// //   return (
// //     <div style={{
// //       background: 'white',
// //       borderRadius: '10px',
// //       boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
// //       padding: '22px',
// //       fontFamily: 'Arial, sans-serif'
// //     }}>
// //       <style>{`
// //         .pw-stepper-btn:hover:not(:disabled) { color: #1e40af; }
// //         .pw-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

// //         .pw-info:hover, .pw-info:focus { background: #bfdbfe; outline: none; }
// //         .pw-info .pw-tip {
// //           visibility: hidden; opacity: 0;
// //           position: absolute; top: calc(100% + 8px); left: 50%;
// //           transform: translateX(-50%);
// //           background: #1e293b; color: #f1f5f9;
// //           font-size: 12px; line-height: 1.5; font-weight: 400;
// //           padding: 9px 13px; border-radius: 6px;
// //           width: 280px; text-align: left;
// //           pointer-events: none;
// //           transition: opacity 0.12s ease, visibility 0.12s;
// //           z-index: 100;
// //           font-family: Arial, sans-serif;
// //           font-style: normal;
// //         }
// //         .pw-info .pw-tip::before {
// //           content: ''; position: absolute;
// //           bottom: 100%; left: 50%; transform: translateX(-50%);
// //           border: 5px solid transparent; border-bottom-color: #1e293b;
// //         }
// //         .pw-info:hover .pw-tip, .pw-info:focus .pw-tip {
// //           visibility: visible; opacity: 1;
// //         }

// //         /* Tier-3 cell tooltip — scoped per instance via tooltipClass.
// //            The container around the cell content has position:relative
// //            via the cellOverride.style; the tooltip is positioned below
// //            the cell and revealed on cell hover. */
// //         .${tooltipClass}-tip {
// //           visibility: hidden;
// //           opacity: 0;
// //           position: absolute;
// //           top: calc(100% + 12px);
// //           left: 50%;
// //           transform: translateX(-50%);
// //           background: #1e293b;
// //           color: #f1f5f9;
// //           border-radius: 6px;
// //           padding: 10px 13px;
// //           font-size: 12px;
// //           font-family: 'Cambria Math', Georgia, serif;
// //           font-style: italic;
// //           line-height: 1.7;
// //           pointer-events: none;
// //           transition: opacity 0.12s ease, visibility 0.12s;
// //           z-index: 100;
// //           max-width: 420px;
// //           width: max-content;
// //           text-align: left;
// //           white-space: normal;
// //         }
// //         .${tooltipClass}-tip::before {
// //           content: '';
// //           position: absolute;
// //           bottom: 100%;
// //           left: 50%;
// //           transform: translateX(-50%);
// //           border: 6px solid transparent;
// //           border-bottom-color: #1e293b;
// //         }
// //         [data-matrix-id] [data-row][data-col]:hover .${tooltipClass}-tip {
// //           visibility: visible;
// //           opacity: 1;
// //         }
// //       `}</style>

// //       {(title || subtitle) && (
// //         <div style={{ marginBottom: '18px' }}>
// //           {title && (
// //             <h2 style={{
// //               fontSize: '22px',
// //               color: '#1e40af',
// //               margin: '0 0 4px 0',
// //               fontWeight: 'bold'
// //             }}>
// //               {title}
// //             </h2>
// //           )}
// //           {subtitle && (
// //             <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
// //               {subtitle}
// //             </p>
// //           )}
// //         </div>
// //       )}

// //       {/* Control panel */}
// //       <div style={{
// //         background: 'white',
// //         border: '1px solid #e5e7eb',
// //         borderRadius: '10px',
// //         padding: '18px',
// //         display: 'flex',
// //         flexWrap: 'wrap',
// //         gap: '32px',
// //         alignItems: 'flex-start'
// //       }}>
// //         <div>
// //           <FieldLabel info={POWER_INFO}>Matrix size (square)</FieldLabel>
// //           <div style={{
// //             display: 'flex',
// //             alignItems: 'center',
// //             gap: '6px',
// //             flexWrap: 'wrap'
// //           }}>
// //             <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>A</span>
// //             <Stepper value={size} onChange={setSize} min={sizeMin} max={sizeMax} />
// //             <span style={{ color: '#94a3b8' }}>&times;</span>
// //             <Stepper
// //               value={size}
// //               onChange={() => {}}
// //               min={sizeMin}
// //               max={sizeMax}
// //               locked={true}
// //               lockReason="A is square — both dimensions are linked"
// //             />
// //           </div>
// //         </div>

// //         <div>
// //           <FieldLabel>Exponent</FieldLabel>
// //           <div style={{
// //             display: 'flex',
// //             alignItems: 'center',
// //             gap: '6px',
// //             flexWrap: 'wrap'
// //           }}>
// //             <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>n</span>
// //             <Stepper value={exponent} onChange={setExponent} min={expMin} max={expMax} />
// //           </div>
// //         </div>

// //         <div style={{ alignSelf: 'center' }}>
// //           <FieldLabel>Computing</FieldLabel>
// //           <div style={{
// //             ...mathInlineStyle,
// //             fontSize: '18px',
// //             color: '#1e40af',
// //             fontWeight: 500
// //           }}>
// //             A<sup style={{ fontStyle: 'normal', fontSize: '0.65em' }}>{exponent}</sup>{' '}
// //             <span style={{ fontSize: '14px', color: '#475569', fontWeight: 'normal' }}>
// //               ={' '}
// //               {exponent === 1
// //                 ? <span style={mathInlineStyle}>A</span>
// //                 : Array(exponent).fill('A').join(' \u00B7 ')}
// //             </span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Output */}
// //       <div style={{ marginTop: '18px' }}>
// //         <ScenePlayer
// //           scenes={scenes}
// //           defaultSpeed={defaultSpeed}
// //           showSpeedSelector={true}
// //           showStepIndicator={true}
// //           showStepLog={true}
// //           stepLogTitle="Step explanations"
// //         />
// //       </div>
// //     </div>
// //   );
// // }


// 'use client';

// import React, { useState, useMemo } from 'react';
// import { ScenePlayer } from './MatrixCore';

// // ===========================================================
// // PowerWrapper v3 — bracket-and-collapse choreography with
// // real symbolic cell content.
// //
// // Changes vs v2:
// //   1. Tier-3 cells grow with p so the Σ + symbolic path fits.
// //      For p ≥ 4 the displayed product collapses middle factors
// //      to an ellipsis "⋯" — the full expansion remains in the
// //      hover tooltip.
// //   2. Tooltips on cells in the bottom half of the matrix
// //      flip up (positioned above the cell), so they don't get
// //      clipped by the canvas's overflow:hidden.
// //   3. The canvas minHeight is computed from the matrix's
// //      natural height + tooltip clearance, so the canvas
// //      always has the vertical room a tooltip needs.
// //
// // Story for A^n:
// //   Scene 0: definition — n copies of A in a row
// //   For stage k = 1..n-1:
// //     - bracket scene: dashed group around (A^k · A), label A^(k+1)
// //     - collapse scene: group replaced by single A^(k+1) matrix
// //
// // Tier mapping (per stage power p):
// //   p === 1  → tier 1: single symbol a_{i,j}
// //   p === 2  → tier 2a: a_{i,k}a_{k,j} + ... (size terms, inline)
// //   p >= 3   → tier 3: Σ stack + path, full expansion on hover
// //
// // Constraints:
// //   - A is n×n square
// //   - exponent in 1..5
// //   - size in 2..4
// // ===========================================================

// // -----------------------------------------------------------
// // Shared style atoms
// // -----------------------------------------------------------
// const mathInlineStyle = {
//   fontFamily: '\'Cambria Math\', Georgia, serif',
//   fontStyle: 'italic'
// };

// const chevButtonStyle = {
//   background: 'transparent',
//   border: 'none',
//   padding: '0 2px',
//   fontSize: '8px',
//   color: '#64748b',
//   cursor: 'pointer',
//   lineHeight: 1,
//   fontFamily: 'inherit'
// };

// const POWER_INFO =
//   'Raising a matrix to a power means multiplying it by itself repeatedly: ' +
//   'A^n = A · A · ... · A (n times). A must be square. Each cell of A^n is ' +
//   'a sum of products of n entries of A, joining row-index to column-index ' +
//   'step by step.';

// // -----------------------------------------------------------
// // Path enumeration — every cell (i,j) of A^p contains
// // size^(p-1) products. A path is [i, k_1, ..., k_{p-1}, j].
// // -----------------------------------------------------------
// function allPathsForCell(size, p, i, j) {
//   if (p === 1) return [[i, j]];
//   const inner = p - 1;
//   const total = Math.pow(size, inner);
//   const out = [];
//   for (let n = 0; n < total; n++) {
//     const ks = [];
//     let r = n;
//     for (let d = 0; d < inner; d++) {
//       ks.push(r % size);
//       r = Math.floor(r / size);
//     }
//     out.push([i, ...ks, j]);
//   }
//   return out;
// }

// // One path rendered as a chain of a_{r,s} factors.
// function PathTerm({ path }) {
//   const factors = [];
//   for (let f = 0; f < path.length - 1; f++) {
//     factors.push(
//       <span key={f} style={{ fontStyle: 'italic' }}>
//         a
//         <sub style={{ fontSize: '0.62em', fontStyle: 'italic' }}>
//           {path[f] + 1},{path[f + 1] + 1}
//         </sub>
//       </span>
//     );
//   }
//   return <>{factors}</>;
// }

// // Tier-2a inline sum of all paths.
// function PathSum({ paths }) {
//   return (
//     <>
//       {paths.map((path, idx) => (
//         <React.Fragment key={idx}>
//           {idx > 0 && (
//             <span style={{ fontStyle: 'normal', margin: '0 2px' }}>+</span>
//           )}
//           <PathTerm path={path} />
//         </React.Fragment>
//       ))}
//     </>
//   );
// }

// // -----------------------------------------------------------
// // SigmaCellDisplay — what goes inside a tier-3 cell.
// // For p === 3, render all 3 factors symbolically.
// // For p >= 4, collapse middle factors to ⋯ so the cell stays
// // roughly the same width regardless of p.
// //
// // Σ subscript shows the actual index list (or with ellipsis):
// //   p === 3: k₁, k₂
// //   p === 4: k₁, k₂, k₃
// //   p >= 5 : k₁, …, k_{p-1}
// // -----------------------------------------------------------
// function SigmaCellDisplay({ size, p, i, j }) {
//   const inner = p - 1; // number of summation indices

//   // Build summation index list for the Σ subscript.
//   let sumIndicesNode;
//   if (inner <= 3) {
//     // explicit list k_1, k_2, [k_3]
//     const items = [];
//     for (let d = 1; d <= inner; d++) {
//       if (d > 1) items.push(',');
//       items.push(
//         <span key={d} style={{ fontStyle: 'italic' }}>
//           k<span style={{
//             fontSize: '0.75em',
//             verticalAlign: 'sub',
//             lineHeight: 0,
//             fontStyle: 'normal'
//           }}>{d}</span>
//         </span>
//       );
//     }
//     sumIndicesNode = <>{items}</>;
//   } else {
//     // k₁,…,k_{p-1}
//     sumIndicesNode = (
//       <>
//         <span style={{ fontStyle: 'italic' }}>
//           k<span style={{
//             fontSize: '0.75em',
//             verticalAlign: 'sub',
//             lineHeight: 0,
//             fontStyle: 'normal'
//           }}>1</span>
//         </span>
//         ,&hellip;,
//         <span style={{ fontStyle: 'italic' }}>
//           k<span style={{
//             fontSize: '0.75em',
//             verticalAlign: 'sub',
//             lineHeight: 0,
//             fontStyle: 'normal'
//           }}>{inner}</span>
//         </span>
//       </>
//     );
//   }

//   // Build the symbolic product.
//   //   p === 3:  a_{i,k1} a_{k1,k2} a_{k2,j}
//   //   p === 4:  a_{i,k1} ⋯ a_{k3,j}
//   //   p === 5:  a_{i,k1} ⋯ a_{k4,j}
//   let productNode;
//   if (p === 3) {
//     productNode = (
//       <>
//         <Factor row="i" rowVal={i} col="k1" />
//         <Factor row="k1" col="k2" />
//         <Factor row="k2" col="j" colVal={j} />
//       </>
//     );
//   } else {
//     productNode = (
//       <>
//         <Factor row="i" rowVal={i} col="k1" />
//         <span style={{
//           fontStyle: 'normal',
//           margin: '0 2px',
//           fontSize: '0.85em'
//         }}>&middot;&middot;&middot;</span>
//         <Factor row={`k${inner}`} col="j" colVal={j} />
//       </>
//     );
//   }

//   return (
//     <span style={{
//       display: 'inline-flex',
//       alignItems: 'center',
//       gap: '3px',
//       fontSize: p <= 3 ? '12px' : '11.5px',
//       fontFamily: '\'Cambria Math\', Georgia, serif',
//       lineHeight: 1.1,
//       whiteSpace: 'nowrap'
//     }}>
//       <span style={{
//         display: 'inline-flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         lineHeight: 1,
//         fontStyle: 'normal'
//       }}>
//         <span style={{ fontSize: '0.6em', fontStyle: 'italic' }}>{size - 1}</span>
//         <span style={{ fontSize: '1.5em', lineHeight: 1 }}>&Sigma;</span>
//         <span style={{ fontSize: '0.6em' }}>{sumIndicesNode}</span>
//       </span>
//       <span style={{ display: 'inline-flex', alignItems: 'center' }}>
//         {productNode}
//       </span>
//     </span>
//   );
// }

// // One factor a_{row, col}. Each of row/col is either a concrete
// // number (rowVal/colVal supplied) or a symbolic name like 'k1'.
// function Factor({ row, rowVal, col, colVal }) {
//   return (
//     <span style={{ fontStyle: 'italic' }}>
//       a
//       <sub style={{ fontSize: '0.62em', fontStyle: 'italic' }}>
//         <IndexLabel name={row} val={rowVal} />,
//         <IndexLabel name={col} val={colVal} />
//       </sub>
//     </span>
//   );
// }

// function IndexLabel({ name, val }) {
//   if (val !== undefined) return <>{val + 1}</>;
//   // name is like 'k1', 'k2', etc — render as k with subscript
//   const m = name.match(/^k(\d+)$/);
//   if (m) {
//     return (
//       <>
//         k<span style={{
//           fontSize: '0.75em',
//           verticalAlign: 'sub',
//           lineHeight: 0,
//           fontStyle: 'normal'
//         }}>{m[1]}</span>
//       </>
//     );
//   }
//   return <>{name}</>;
// }

// // -----------------------------------------------------------
// // Tier-3 cell wrapper with hover tooltip.
// // `flipUp` positions the tooltip above the cell (used for
// // cells in the bottom half so it doesn't get clipped).
// // -----------------------------------------------------------
// function Tier3CellWithTooltip({ size, p, i, j, tooltipClass, flipUp }) {
//   const paths = allPathsForCell(size, p, i, j);
//   return (
//     <span style={{
//       position: 'relative',
//       display: 'inline-flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       width: '100%',
//       height: '100%'
//     }}>
//       <SigmaCellDisplay size={size} p={p} i={i} j={j} />
//       <span className={`${tooltipClass}-tip${flipUp ? ' flip-up' : ''}`}>
//         <span style={{
//           display: 'block',
//           fontStyle: 'normal',
//           fontFamily: 'Arial, sans-serif',
//           fontSize: '10px',
//           textTransform: 'uppercase',
//           letterSpacing: '0.05em',
//           color: '#94a3b8',
//           marginBottom: '5px'
//         }}>
//           (A<sup>{p}</sup>)<sub>{i + 1},{j + 1}</sub> &nbsp;— {paths.length} terms
//         </span>
//         {paths.map((path, idx) => (
//           <React.Fragment key={idx}>
//             {idx > 0 && (
//               <span style={{ fontStyle: 'normal', margin: '0 3px' }}>+</span>
//             )}
//             <PathTerm path={path} />
//           </React.Fragment>
//         ))}
//       </span>
//     </span>
//   );
// }

// // -----------------------------------------------------------
// // Cell sizing — scaled with p.
// // Tier 2a wraps inline content, so size depends on `size`
// // (number of terms = size). Tier 3 width depends on what's
// // displayed: full 3 factors at p=3, ellipsis at p>=4.
// // -----------------------------------------------------------
// function cellDimsForPower(size, p) {
//   if (p === 1) return { cellSize: 'auto', fontSize: 'auto' };
//   if (p === 2) {
//     // tier 2a: inline polynomial of `size` terms × 2 factors each
//     const px = 100 + (size - 2) * 6; // 100/106/112 for size 2/3/4
//     return { cellSize: px, fontSize: 'auto' };
//   }
//   if (p === 3) {
//     return { cellSize: 118, fontSize: 'auto' };
//   }
//   // p === 4 or 5: ellipsis form, similar width regardless
//   return { cellSize: 122, fontSize: 'auto' };
// }

// // -----------------------------------------------------------
// // Approximate height of one cell × `size` rows + label + gap
// // — used to compute the canvas minHeight so tooltips fit.
// // -----------------------------------------------------------
// function estimateMatrixHeight(size, p) {
//   const { cellSize } = cellDimsForPower(size, p);
//   const px = cellSize === 'auto' ? (size <= 3 ? 58 : 51) : cellSize;
//   const matrixPx = size * px + (size - 1) * 3;
//   return matrixPx + 30; // label/margin
// }

// // -----------------------------------------------------------
// // JSX label "A^p" with proper superscript.
// // -----------------------------------------------------------
// function PowerLabel({ p }) {
//   if (p === 1) return <>A</>;
//   return (
//     <>
//       A<sup style={{ fontStyle: 'normal', fontSize: '0.65em' }}>{p}</sup>
//     </>
//   );
// }

// // -----------------------------------------------------------
// // Build a matrix spec for A^p.
// // -----------------------------------------------------------
// function powerMatrixSpec(size, p, tooltipClass) {
//   const dims = cellDimsForPower(size, p);
//   return {
//     symbol: 'a',
//     rows: size,
//     cols: size,
//     label: <PowerLabel p={p} />,
//     cellSize: dims.cellSize,
//     fontSize: dims.fontSize,
//     cellOverrides: buildPowerOverrides(size, p, tooltipClass)
//   };
// }

// // -----------------------------------------------------------
// // Build cellOverrides for a matrix of A^p (size×size).
// // `flipUpRow(i)` decides whether the cell at row i shows
// // its tooltip above (true) or below (false). Cells in the
// // bottom half of the matrix flip up.
// // -----------------------------------------------------------
// function buildPowerOverrides(size, p, tooltipClass) {
//   if (p === 1) return {};

//   const flipUpRow = (i) => i >= Math.ceil(size / 2);

//   const overrides = {};
//   for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//       if (p === 2) {
//         // tier 2a inline
//         const paths = allPathsForCell(size, p, i, j);
//         overrides[`${i},${j}`] = {
//           display: <PathSum paths={paths} />,
//           fontStyle: 'normal',
//           style: {
//             fontSize: size <= 2 ? '11px' : '10px',
//             lineHeight: 1.3,
//             padding: '0 4px',
//             whiteSpace: 'normal',
//             wordBreak: 'normal',
//             textAlign: 'center'
//           }
//         };
//       } else {
//         // tier 3 with Σ + tooltip
//         overrides[`${i},${j}`] = {
//           display: (
//             <Tier3CellWithTooltip
//               size={size}
//               p={p}
//               i={i}
//               j={j}
//               tooltipClass={tooltipClass}
//               flipUp={flipUpRow(i)}
//             />
//           ),
//           fontStyle: 'normal',
//           style: {
//             padding: '0 4px',
//             position: 'relative',
//             overflow: 'visible',
//             cursor: 'help'
//           }
//         };
//       }
//     }
//   }
//   return overrides;
// }

// // -----------------------------------------------------------
// // Caption-formula HTML for bracket / collapse scenes.
// // -----------------------------------------------------------
// function chainFormula(targetN, currentLeftP, factorsRemaining, mode) {
//   const parts = [];
//   parts.push(`<i>A</i><sup>${targetN}</sup> = `);
//   if (mode === 'bracket') {
//     parts.push(
//       `<strong>(<i>A</i>${currentLeftP > 1 ? `<sup>${currentLeftP}</sup>` : ''} ` +
//       `&middot; <i>A</i>)</strong>`
//     );
//     for (let r = 1; r < factorsRemaining; r++) {
//       parts.push(' &middot; <i>A</i>');
//     }
//   } else {
//     parts.push(`<i>A</i><sup>${currentLeftP}</sup>`);
//     for (let r = 0; r < factorsRemaining; r++) {
//       parts.push(' &middot; <i>A</i>');
//     }
//   }
//   return parts.join('');
// }

// // ===========================================================
// // SCENE BUILDER
// // ===========================================================
// function buildScenes(size, exponent, tooltipClass) {
//   const scenes = [];

//   // --------- A^1 special case ---------
//   if (exponent === 1) {
//     scenes.push({
//       title: '<i>A</i><sup>1</sup> = <i>A</i>',
//       formula:
//         'Raising <i>A</i> to the first power gives <i>A</i> itself. ' +
//         'Increase the exponent to see repeated multiplication.',
//       matrices: { A: powerMatrixSpec(size, 1, tooltipClass) },
//       layout: [{ type: 'matrix', ref: 'A' }],
//       highlights: {},
//       overlays: []
//     });
//     return scenes;
//   }

//   // --------- Scene 0: definition (n copies of A) ---------
//   const defMatrices = {};
//   const defLayout = [];
//   for (let f = 0; f < exponent; f++) {
//     const id = `A${f}`;
//     defMatrices[id] = powerMatrixSpec(size, 1, tooltipClass);
//     defLayout.push({ type: 'matrix', ref: id });
//     if (f < exponent - 1) defLayout.push({ type: 'operator', symbol: '*' });
//   }
//   scenes.push({
//     title: `<i>A</i><sup>${exponent}</sup> is repeated multiplication`,
//     formula:
//       `<i>A</i><sup>${exponent}</sup> = ` +
//       Array(exponent).fill('<i>A</i>').join(' &middot; ') +
//       `. ${exponent} copies of <i>A</i>. We'll collapse them pairwise, ` +
//       'watching the exponent grow and the cell content build up.',
//     matrices: defMatrices,
//     layout: defLayout,
//     highlights: {},
//     overlays: []
//   });

//   // --------- Stages 1..exponent-1 ---------
//   for (let stage = 1; stage <= exponent - 1; stage++) {
//     const leftPowerBefore = stage;
//     const leftPowerAfter  = stage + 1;
//     const bareAsBefore    = exponent - stage;
//     const bareAsAfter     = bareAsBefore - 1;

//     // -------- (a) bracket scene --------
//     {
//       const matrices = {};
//       const layout = [];
//       matrices.LEFT  = powerMatrixSpec(size, leftPowerBefore, tooltipClass);
//       matrices.RIGHT = powerMatrixSpec(size, 1, tooltipClass);
//       for (let r = 1; r < bareAsBefore; r++) {
//         matrices[`R${r}`] = powerMatrixSpec(size, 1, tooltipClass);
//       }

//       const allPrimary = [];
//       for (let i = 0; i < size; i++) {
//         for (let j = 0; j < size; j++) allPrimary.push([i, j, 'primary']);
//       }

//       layout.push({ type: 'matrix', ref: 'LEFT' });
//       layout.push({ type: 'operator', symbol: '*' });
//       layout.push({ type: 'matrix', ref: 'RIGHT' });
//       for (let r = 1; r < bareAsBefore; r++) {
//         layout.push({ type: 'operator', symbol: '*' });
//         layout.push({ type: 'matrix', ref: `R${r}` });
//       }

//       scenes.push({
//         title:
//           `Stage ${stage} of ${exponent - 1}: bracket ` +
//           `(<i>A</i>${leftPowerBefore > 1 ? `<sup>${leftPowerBefore}</sup>` : ''} ` +
//           `&middot; <i>A</i>) &rarr; <i>A</i><sup>${leftPowerAfter}</sup>`,
//         formula:
//           chainFormula(exponent, leftPowerBefore, bareAsBefore, 'bracket') +
//           '. Group the next pair: exponents add ' +
//           `(${leftPowerBefore} + 1 = ${leftPowerAfter}).`,
//         matrices,
//         layout,
//         highlights: {
//           LEFT: { cells: allPrimary },
//           RIGHT: { cells: allPrimary }
//         },
//         overlays: []
//       });
//     }

//     // -------- (b) collapse scene --------
//     {
//       const matrices = {};
//       const layout = [];
//       matrices.LEFT = powerMatrixSpec(size, leftPowerAfter, tooltipClass);
//       for (let r = 0; r < bareAsAfter; r++) {
//         matrices[`R${r}`] = powerMatrixSpec(size, 1, tooltipClass);
//       }

//       const allAccent = [];
//       for (let i = 0; i < size; i++) {
//         for (let j = 0; j < size; j++) allAccent.push([i, j, 'accent']);
//       }

//       layout.push({ type: 'matrix', ref: 'LEFT' });
//       for (let r = 0; r < bareAsAfter; r++) {
//         layout.push({ type: 'operator', symbol: '*' });
//         layout.push({ type: 'matrix', ref: `R${r}` });
//       }

//       const tierNote =
//         leftPowerAfter <= 2
//           ? 'Each cell of <i>A</i><sup>' + leftPowerAfter + '</sup> shows its full content inline.'
//           : 'Each cell of <i>A</i><sup>' + leftPowerAfter +
//             '</sup> has ' + Math.pow(size, leftPowerAfter - 1) +
//             ' terms &mdash; too many for inline display. ' +
//             'The cell shows a &Sigma; summary; <strong>hover any cell</strong> ' +
//             'to see the full expansion.';

//       const isFinal = (stage === exponent - 1);
//       scenes.push({
//         title: isFinal
//           ? `Final: <i>A</i><sup>${exponent}</sup> &mdash; the result`
//           : `Stage ${stage} of ${exponent - 1}: collapse to <i>A</i><sup>${leftPowerAfter}</sup>`,
//         formula:
//           chainFormula(exponent, leftPowerAfter, bareAsAfter, 'collapse') +
//           '. ' + tierNote +
//           (isFinal
//             ? ' Bracketing order did not matter &mdash; any pairwise grouping yields the same matrix.'
//             : ''),
//         matrices,
//         layout,
//         highlights: { LEFT: { cells: allAccent } },
//         overlays: []
//       });
//     }
//   }

//   return scenes;
// }

// // ===========================================================
// // UI helpers
// // ===========================================================
// function InfoIcon({ tip }) {
//   return (
//     <span
//       className="pw-info"
//       tabIndex={0}
//       aria-label="More info"
//       style={{
//         display: 'inline-flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '16px',
//         height: '16px',
//         borderRadius: '50%',
//         background: '#dbeafe',
//         color: '#1e40af',
//         fontSize: '11px',
//         fontWeight: 700,
//         cursor: 'help',
//         position: 'relative',
//         fontFamily: 'Arial, sans-serif',
//         lineHeight: 1,
//         userSelect: 'none',
//         flexShrink: 0
//       }}
//     >
//       ?
//       <span className="pw-tip">{tip}</span>
//     </span>
//   );
// }

// function FieldLabel({ children, info }) {
//   return (
//     <div style={{
//       display: 'inline-flex',
//       alignItems: 'center',
//       gap: '8px',
//       margin: '0 0 10px'
//     }}>
//       <span style={{
//         fontSize: '16px',
//         color: '#1e40af',
//         fontFamily: 'Arial, sans-serif',
//         fontWeight: 600,
//         lineHeight: 1.2
//       }}>
//         {children}
//       </span>
//       {info && <InfoIcon tip={info} />}
//     </div>
//   );
// }

// function Stepper({ value, onChange, min, max, locked = false, lockReason }) {
//   const interactive = !locked;
//   return (
//     <span
//       title={locked ? lockReason : undefined}
//       style={{
//         display: 'inline-flex',
//         alignItems: 'center',
//         gap: '4px',
//         padding: '4px 6px 4px 10px',
//         borderRadius: '6px',
//         background: locked ? '#f1f5f9' : 'white',
//         border: `1px ${locked ? 'dashed' : 'solid'} ${locked ? '#94a3b8' : '#cbd5e1'}`
//       }}
//     >
//       <span style={{
//         ...mathInlineStyle,
//         fontWeight: 500,
//         minWidth: '14px',
//         textAlign: 'center',
//         color: locked ? '#64748b' : '#0f172a'
//       }}>
//         {value}
//       </span>
//       {interactive ? (
//         <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.7 }}>
//           <button
//             className="pw-stepper-btn"
//             onClick={() => onChange(Math.min(max, value + 1))}
//             disabled={value >= max}
//             style={chevButtonStyle}
//             aria-label="Increase"
//           >&#9650;</button>
//           <button
//             className="pw-stepper-btn"
//             onClick={() => onChange(Math.max(min, value - 1))}
//             disabled={value <= min}
//             style={chevButtonStyle}
//             aria-label="Decrease"
//           >&#9660;</button>
//         </span>
//       ) : (
//         <span style={{
//           fontSize: '11px',
//           color: '#94a3b8',
//           display: 'inline-flex',
//           alignItems: 'center'
//         }}>&#8646;</span>
//       )}
//     </span>
//   );
// }

// // ===========================================================
// // Main wrapper
// // ===========================================================
// export default function PowerWrapper({
//   defaultSize = 2,
//   defaultExponent = 4,
//   sizeRange = [2, 3, 4],
//   exponentRange = [1, 2, 3, 4, 5],
//   title = 'Matrix Power',
//   subtitle = 'Visualization of A\u207F as bracket-and-collapse: every cell shows its real symbolic content.',
//   defaultSpeed = 1400
// }) {
//   const [size, setSize] = useState(defaultSize);
//   const [exponent, setExponent] = useState(defaultExponent);

//   const sizeMin = sizeRange[0];
//   const sizeMax = sizeRange[sizeRange.length - 1];
//   const expMin = exponentRange[0];
//   const expMax = exponentRange[exponentRange.length - 1];

//   const instanceId = React.useId().replace(/:/g, '');
//   const tooltipClass = `pw-${instanceId}`;

//   const scenes = useMemo(
//     () => buildScenes(size, exponent, tooltipClass),
//     [size, exponent, tooltipClass]
//   );

//   // Canvas minHeight: matrix natural height for the largest p
//   // in the current scenario (= exponent) + tooltip clearance
//   // on both sides (since cells flip-up or flip-down).
//   const canvasMinHeight = useMemo(() => {
//     const matrixH = estimateMatrixHeight(size, exponent);
//     // Tooltip max-height worst-case ~ paths.length * ~22px per
//     // term wrap line. For A^5 on size 4: 4^4 = 256 terms.
//     // Capped by max-width:420px so it wraps; estimate 200px.
//     const tipClearance = exponent <= 2 ? 60 : exponent <= 3 ? 130 : 180;
//     return Math.max(320, matrixH + 2 * tipClearance);
//   }, [size, exponent]);

//   return (
//     <div style={{
//       background: 'white',
//       borderRadius: '10px',
//       boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
//       padding: '22px',
//       fontFamily: 'Arial, sans-serif'
//     }}>
//       <style>{`
//         .pw-stepper-btn:hover:not(:disabled) { color: #1e40af; }
//         .pw-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

//         .pw-info:hover, .pw-info:focus { background: #bfdbfe; outline: none; }
//         .pw-info .pw-tip {
//           visibility: hidden; opacity: 0;
//           position: absolute; top: calc(100% + 8px); left: 50%;
//           transform: translateX(-50%);
//           background: #1e293b; color: #f1f5f9;
//           font-size: 12px; line-height: 1.5; font-weight: 400;
//           padding: 9px 13px; border-radius: 6px;
//           width: 280px; text-align: left;
//           pointer-events: none;
//           transition: opacity 0.12s ease, visibility 0.12s;
//           z-index: 100;
//           font-family: Arial, sans-serif;
//           font-style: normal;
//         }
//         .pw-info .pw-tip::before {
//           content: ''; position: absolute;
//           bottom: 100%; left: 50%; transform: translateX(-50%);
//           border: 5px solid transparent; border-bottom-color: #1e293b;
//         }
//         .pw-info:hover .pw-tip, .pw-info:focus .pw-tip {
//           visibility: visible; opacity: 1;
//         }

//         /* Tier-3 cell tooltip — scoped per instance. */
//         .${tooltipClass}-tip {
//           visibility: hidden;
//           opacity: 0;
//           position: absolute;
//           top: calc(100% + 12px);
//           left: 50%;
//           transform: translateX(-50%);
//           background: #1e293b;
//           color: #f1f5f9;
//           border-radius: 6px;
//           padding: 10px 13px;
//           font-size: 12px;
//           font-family: 'Cambria Math', Georgia, serif;
//           font-style: italic;
//           line-height: 1.7;
//           pointer-events: none;
//           transition: opacity 0.12s ease, visibility 0.12s;
//           z-index: 100;
//           max-width: 420px;
//           width: max-content;
//           text-align: left;
//           white-space: normal;
//         }
//         .${tooltipClass}-tip::before {
//           content: '';
//           position: absolute;
//           bottom: 100%;
//           left: 50%;
//           transform: translateX(-50%);
//           border: 6px solid transparent;
//           border-bottom-color: #1e293b;
//         }
//         /* Flipped variant: tooltip appears above the cell. */
//         .${tooltipClass}-tip.flip-up {
//           top: auto;
//           bottom: calc(100% + 12px);
//         }
//         .${tooltipClass}-tip.flip-up::before {
//           bottom: auto;
//           top: 100%;
//           border-bottom-color: transparent;
//           border-top-color: #1e293b;
//         }
//         [data-matrix-id] [data-row][data-col]:hover .${tooltipClass}-tip {
//           visibility: visible;
//           opacity: 1;
//         }
//       `}</style>

//       {(title || subtitle) && (
//         <div style={{ marginBottom: '18px' }}>
//           {title && (
//             <h2 style={{
//               fontSize: '22px',
//               color: '#1e40af',
//               margin: '0 0 4px 0',
//               fontWeight: 'bold'
//             }}>
//               {title}
//             </h2>
//           )}
//           {subtitle && (
//             <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
//               {subtitle}
//             </p>
//           )}
//         </div>
//       )}

//       {/* Control panel */}
//       <div style={{
//         background: 'white',
//         border: '1px solid #e5e7eb',
//         borderRadius: '10px',
//         padding: '18px',
//         display: 'flex',
//         flexWrap: 'wrap',
//         gap: '32px',
//         alignItems: 'flex-start'
//       }}>
//         <div>
//           <FieldLabel info={POWER_INFO}>Matrix size (square)</FieldLabel>
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '6px',
//             flexWrap: 'wrap'
//           }}>
//             <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>A</span>
//             <Stepper value={size} onChange={setSize} min={sizeMin} max={sizeMax} />
//             <span style={{ color: '#94a3b8' }}>&times;</span>
//             <Stepper
//               value={size}
//               onChange={() => {}}
//               min={sizeMin}
//               max={sizeMax}
//               locked={true}
//               lockReason="A is square &mdash; both dimensions are linked"
//             />
//           </div>
//         </div>

//         <div>
//           <FieldLabel>Exponent</FieldLabel>
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '6px',
//             flexWrap: 'wrap'
//           }}>
//             <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>n</span>
//             <Stepper value={exponent} onChange={setExponent} min={expMin} max={expMax} />
//           </div>
//         </div>

//         <div style={{ alignSelf: 'center' }}>
//           <FieldLabel>Computing</FieldLabel>
//           <div style={{
//             ...mathInlineStyle,
//             fontSize: '18px',
//             color: '#1e40af',
//             fontWeight: 500
//           }}>
//             A<sup style={{ fontStyle: 'normal', fontSize: '0.65em' }}>{exponent}</sup>{' '}
//             <span style={{ fontSize: '14px', color: '#475569', fontWeight: 'normal' }}>
//               ={' '}
//               {exponent === 1
//                 ? <span style={mathInlineStyle}>A</span>
//                 : Array(exponent).fill('A').join(' \u00B7 ')}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Output */}
//       <div style={{ marginTop: '18px' }}>
//         <ScenePlayer
//           scenes={scenes}
//           defaultSpeed={defaultSpeed}
//           showSpeedSelector={true}
//           showStepIndicator={true}
//           showStepLog={true}
//           stepLogTitle="Step explanations"
//           sceneCanvasProps={{ minHeight: canvasMinHeight }}
//         />
//       </div>
//     </div>
//   );
// }


'use client';

import React, { useState, useMemo } from 'react';
import { ScenePlayer } from './MatrixCore';

// ===========================================================
// PowerWrapper v4
//
// Same as v3, plus:
//   - Bracket scenes render a dashed primary group around
//     (LEFT, RIGHT) with the resulting power as a label.
//   - The final collapse scene renders a solid accent group
//     around the result matrix.
// Both use the new 'group-bracket' overlay added in MatrixCore-v2.
// ===========================================================

// -----------------------------------------------------------
// Shared style atoms
// -----------------------------------------------------------
const mathInlineStyle = {
  fontFamily: '\'Cambria Math\', Georgia, serif',
  fontStyle: 'italic'
};

const chevButtonStyle = {
  background: 'transparent',
  border: 'none',
  padding: '0 2px',
  fontSize: '8px',
  color: '#64748b',
  cursor: 'pointer',
  lineHeight: 1,
  fontFamily: 'inherit'
};

const POWER_INFO =
  'Raising a matrix to a power means multiplying it by itself repeatedly: ' +
  'A^n = A · A · ... · A (n times). A must be square. Each cell of A^n is ' +
  'a sum of products of n entries of A, joining row-index to column-index ' +
  'step by step.';

// -----------------------------------------------------------
// Path enumeration — every cell (i,j) of A^p contains
// size^(p-1) products. A path is [i, k_1, ..., k_{p-1}, j].
// -----------------------------------------------------------
function allPathsForCell(size, p, i, j) {
  if (p === 1) return [[i, j]];
  const inner = p - 1;
  const total = Math.pow(size, inner);
  const out = [];
  for (let n = 0; n < total; n++) {
    const ks = [];
    let r = n;
    for (let d = 0; d < inner; d++) {
      ks.push(r % size);
      r = Math.floor(r / size);
    }
    out.push([i, ...ks, j]);
  }
  return out;
}

function PathTerm({ path }) {
  const factors = [];
  for (let f = 0; f < path.length - 1; f++) {
    factors.push(
      <span key={f} style={{ fontStyle: 'italic' }}>
        a
        <sub style={{ fontSize: '0.62em', fontStyle: 'italic' }}>
          {path[f] + 1},{path[f + 1] + 1}
        </sub>
      </span>
    );
  }
  return <>{factors}</>;
}

function PathSum({ paths }) {
  return (
    <>
      {paths.map((path, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && (
            <span style={{ fontStyle: 'normal', margin: '0 2px' }}>+</span>
          )}
          <PathTerm path={path} />
        </React.Fragment>
      ))}
    </>
  );
}

// -----------------------------------------------------------
// SigmaCellDisplay — Σ summary for tier-3 cells.
// -----------------------------------------------------------
function SigmaCellDisplay({ size, p, i, j }) {
  const inner = p - 1;

  let sumIndicesNode;
  if (inner <= 3) {
    const items = [];
    for (let d = 1; d <= inner; d++) {
      if (d > 1) items.push(',');
      items.push(
        <span key={d} style={{ fontStyle: 'italic' }}>
          k<span style={{
            fontSize: '0.75em',
            verticalAlign: 'sub',
            lineHeight: 0,
            fontStyle: 'normal'
          }}>{d}</span>
        </span>
      );
    }
    sumIndicesNode = <>{items}</>;
  } else {
    sumIndicesNode = (
      <>
        <span style={{ fontStyle: 'italic' }}>
          k<span style={{
            fontSize: '0.75em',
            verticalAlign: 'sub',
            lineHeight: 0,
            fontStyle: 'normal'
          }}>1</span>
        </span>
        ,&hellip;,
        <span style={{ fontStyle: 'italic' }}>
          k<span style={{
            fontSize: '0.75em',
            verticalAlign: 'sub',
            lineHeight: 0,
            fontStyle: 'normal'
          }}>{inner}</span>
        </span>
      </>
    );
  }

  let productNode;
  if (p === 3) {
    productNode = (
      <>
        <Factor row="i" rowVal={i} col="k1" />
        <Factor row="k1" col="k2" />
        <Factor row="k2" col="j" colVal={j} />
      </>
    );
  } else {
    productNode = (
      <>
        <Factor row="i" rowVal={i} col="k1" />
        <span style={{
          fontStyle: 'normal',
          margin: '0 2px',
          fontSize: '0.85em'
        }}>&middot;&middot;&middot;</span>
        <Factor row={`k${inner}`} col="j" colVal={j} />
      </>
    );
  }

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '3px',
      fontSize: p <= 3 ? '12px' : '11.5px',
      fontFamily: '\'Cambria Math\', Georgia, serif',
      lineHeight: 1.1,
      whiteSpace: 'nowrap'
    }}>
      <span style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: 1,
        fontStyle: 'normal'
      }}>
        <span style={{ fontSize: '0.6em', fontStyle: 'italic' }}>{size - 1}</span>
        <span style={{ fontSize: '1.5em', lineHeight: 1 }}>&Sigma;</span>
        <span style={{ fontSize: '0.6em' }}>{sumIndicesNode}</span>
      </span>
      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
        {productNode}
      </span>
    </span>
  );
}

function Factor({ row, rowVal, col, colVal }) {
  return (
    <span style={{ fontStyle: 'italic' }}>
      a
      <sub style={{ fontSize: '0.62em', fontStyle: 'italic' }}>
        <IndexLabel name={row} val={rowVal} />,
        <IndexLabel name={col} val={colVal} />
      </sub>
    </span>
  );
}

function IndexLabel({ name, val }) {
  if (val !== undefined) return <>{val + 1}</>;
  const m = name.match(/^k(\d+)$/);
  if (m) {
    return (
      <>
        k<span style={{
          fontSize: '0.75em',
          verticalAlign: 'sub',
          lineHeight: 0,
          fontStyle: 'normal'
        }}>{m[1]}</span>
      </>
    );
  }
  return <>{name}</>;
}

function Tier3CellWithTooltip({ size, p, i, j, tooltipClass, flipUp }) {
  const paths = allPathsForCell(size, p, i, j);
  return (
    <span style={{
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%'
    }}>
      <SigmaCellDisplay size={size} p={p} i={i} j={j} />
      <span className={`${tooltipClass}-tip${flipUp ? ' flip-up' : ''}`}>
        <span style={{
          display: 'block',
          fontStyle: 'normal',
          fontFamily: 'Arial, sans-serif',
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: '#94a3b8',
          marginBottom: '5px'
        }}>
          (A<sup>{p}</sup>)<sub>{i + 1},{j + 1}</sub> &nbsp;— {paths.length} terms
        </span>
        {paths.map((path, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && (
              <span style={{ fontStyle: 'normal', margin: '0 3px' }}>+</span>
            )}
            <PathTerm path={path} />
          </React.Fragment>
        ))}
      </span>
    </span>
  );
}

// -----------------------------------------------------------
// Cell sizing per power tier.
// -----------------------------------------------------------
function cellDimsForPower(size, p) {
  if (p === 1) return { cellSize: 'auto', fontSize: 'auto' };
  if (p === 2) {
    const px = 100 + (size - 2) * 6;
    return { cellSize: px, fontSize: 'auto' };
  }
  if (p === 3) return { cellSize: 118, fontSize: 'auto' };
  return { cellSize: 122, fontSize: 'auto' };
}

function estimateMatrixHeight(size, p) {
  const { cellSize } = cellDimsForPower(size, p);
  const px = cellSize === 'auto' ? (size <= 3 ? 58 : 51) : cellSize;
  const matrixPx = size * px + (size - 1) * 3;
  return matrixPx + 30;
}

function PowerLabel({ p }) {
  if (p === 1) return <>A</>;
  return (
    <>
      A<sup style={{ fontStyle: 'normal', fontSize: '0.65em' }}>{p}</sup>
    </>
  );
}

function powerMatrixSpec(size, p, tooltipClass) {
  const dims = cellDimsForPower(size, p);
  return {
    symbol: 'a',
    rows: size,
    cols: size,
    label: <PowerLabel p={p} />,
    cellSize: dims.cellSize,
    fontSize: dims.fontSize,
    cellOverrides: buildPowerOverrides(size, p, tooltipClass)
  };
}

function buildPowerOverrides(size, p, tooltipClass) {
  if (p === 1) return {};
  const flipUpRow = (i) => i >= Math.ceil(size / 2);

  const overrides = {};
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (p === 2) {
        const paths = allPathsForCell(size, p, i, j);
        overrides[`${i},${j}`] = {
          display: <PathSum paths={paths} />,
          fontStyle: 'normal',
          style: {
            fontSize: size <= 2 ? '11px' : '10px',
            lineHeight: 1.3,
            padding: '0 4px',
            whiteSpace: 'normal',
            wordBreak: 'normal',
            textAlign: 'center'
          }
        };
      } else {
        overrides[`${i},${j}`] = {
          display: (
            <Tier3CellWithTooltip
              size={size}
              p={p}
              i={i}
              j={j}
              tooltipClass={tooltipClass}
              flipUp={flipUpRow(i)}
            />
          ),
          fontStyle: 'normal',
          style: {
            padding: '0 4px',
            position: 'relative',
            overflow: 'visible',
            cursor: 'help'
          }
        };
      }
    }
  }
  return overrides;
}

function chainFormula(targetN, currentLeftP, factorsRemaining, mode) {
  const parts = [];
  parts.push(`<i>A</i><sup>${targetN}</sup> = `);
  if (mode === 'bracket') {
    parts.push(
      `<strong>(<i>A</i>${currentLeftP > 1 ? `<sup>${currentLeftP}</sup>` : ''} ` +
      `&middot; <i>A</i>)</strong>`
    );
    for (let r = 1; r < factorsRemaining; r++) {
      parts.push(' &middot; <i>A</i>');
    }
  } else {
    parts.push(`<i>A</i><sup>${currentLeftP}</sup>`);
    for (let r = 0; r < factorsRemaining; r++) {
      parts.push(' &middot; <i>A</i>');
    }
  }
  return parts.join('');
}

// Label HTML used inside the group-bracket pill.
function groupLabelHTML(p) {
  if (p === 1) return '<i>A</i>';
  return `<i>A</i><sup style="font-style:normal;font-size:0.7em">${p}</sup>`;
}

// ===========================================================
// SCENE BUILDER
// ===========================================================
function buildScenes(size, exponent, tooltipClass) {
  const scenes = [];

  if (exponent === 1) {
    scenes.push({
      title: '<i>A</i><sup>1</sup> = <i>A</i>',
      formula:
        'Raising <i>A</i> to the first power gives <i>A</i> itself. ' +
        'Increase the exponent to see repeated multiplication.',
      matrices: { A: powerMatrixSpec(size, 1, tooltipClass) },
      layout: [{ type: 'matrix', ref: 'A' }],
      highlights: {},
      overlays: []
    });
    return scenes;
  }

  // Scene 0: definition (n copies of A)
  const defMatrices = {};
  const defLayout = [];
  for (let f = 0; f < exponent; f++) {
    const id = `A${f}`;
    defMatrices[id] = powerMatrixSpec(size, 1, tooltipClass);
    defLayout.push({ type: 'matrix', ref: id });
    if (f < exponent - 1) defLayout.push({ type: 'operator', symbol: '*' });
  }
  scenes.push({
    title: `<i>A</i><sup>${exponent}</sup> is repeated multiplication`,
    formula:
      `<i>A</i><sup>${exponent}</sup> = ` +
      Array(exponent).fill('<i>A</i>').join(' &middot; ') +
      `. ${exponent} copies of <i>A</i>. We'll collapse them pairwise, ` +
      'watching the exponent grow and the cell content build up.',
    matrices: defMatrices,
    layout: defLayout,
    highlights: {},
    overlays: []
  });

  // Stages 1..exponent-1
  for (let stage = 1; stage <= exponent - 1; stage++) {
    const leftPowerBefore = stage;
    const leftPowerAfter  = stage + 1;
    const bareAsBefore    = exponent - stage;
    const bareAsAfter     = bareAsBefore - 1;

    // (a) bracket scene
    {
      const matrices = {};
      const layout = [];
      matrices.LEFT  = powerMatrixSpec(size, leftPowerBefore, tooltipClass);
      matrices.RIGHT = powerMatrixSpec(size, 1, tooltipClass);
      for (let r = 1; r < bareAsBefore; r++) {
        matrices[`R${r}`] = powerMatrixSpec(size, 1, tooltipClass);
      }

      const allPrimary = [];
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) allPrimary.push([i, j, 'primary']);
      }

      layout.push({ type: 'matrix', ref: 'LEFT' });
      layout.push({ type: 'operator', symbol: '*' });
      layout.push({ type: 'matrix', ref: 'RIGHT' });
      for (let r = 1; r < bareAsBefore; r++) {
        layout.push({ type: 'operator', symbol: '*' });
        layout.push({ type: 'matrix', ref: `R${r}` });
      }

      scenes.push({
        title:
          `Stage ${stage} of ${exponent - 1}: bracket ` +
          `(<i>A</i>${leftPowerBefore > 1 ? `<sup>${leftPowerBefore}</sup>` : ''} ` +
          `&middot; <i>A</i>) &rarr; <i>A</i><sup>${leftPowerAfter}</sup>`,
        formula:
          chainFormula(exponent, leftPowerBefore, bareAsBefore, 'bracket') +
          '. Group the next pair: exponents add ' +
          `(${leftPowerBefore} + 1 = ${leftPowerAfter}).`,
        matrices,
        layout,
        highlights: {
          LEFT: { cells: allPrimary },
          RIGHT: { cells: allPrimary }
        },
        overlays: [
          {
            type: 'group-bracket',
            matrices: ['LEFT', 'RIGHT'],
            label: groupLabelHTML(leftPowerAfter),
            style: 'primary',
            variant: 'dashed',
            padding: 16,
            labelOffset: 8
          }
        ]
      });
    }

    // (b) collapse scene
    {
      const matrices = {};
      const layout = [];
      matrices.LEFT = powerMatrixSpec(size, leftPowerAfter, tooltipClass);
      for (let r = 0; r < bareAsAfter; r++) {
        matrices[`R${r}`] = powerMatrixSpec(size, 1, tooltipClass);
      }

      const allAccent = [];
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) allAccent.push([i, j, 'accent']);
      }

      layout.push({ type: 'matrix', ref: 'LEFT' });
      for (let r = 0; r < bareAsAfter; r++) {
        layout.push({ type: 'operator', symbol: '*' });
        layout.push({ type: 'matrix', ref: `R${r}` });
      }

      const tierNote =
        leftPowerAfter <= 2
          ? 'Each cell of <i>A</i><sup>' + leftPowerAfter + '</sup> shows its full content inline.'
          : 'Each cell of <i>A</i><sup>' + leftPowerAfter +
            '</sup> has ' + Math.pow(size, leftPowerAfter - 1) +
            ' terms &mdash; too many for inline display. ' +
            'The cell shows a &Sigma; summary; <strong>hover any cell</strong> ' +
            'to see the full expansion.';

      const isFinal = (stage === exponent - 1);

      // On the final scene, wrap the result matrix in a solid
      // accent group with the A^n label. On intermediate collapse
      // scenes leave it un-bracketed (the choreography re-introduces
      // a bracket on the next bracket scene).
      const overlays = isFinal
        ? [
            {
              type: 'group-bracket',
              matrices: ['LEFT'],
              label: groupLabelHTML(exponent),
              style: 'accent',
              variant: 'solid',
              padding: 16,
              labelOffset: 8
            }
          ]
        : [];

      scenes.push({
        title: isFinal
          ? `Final: <i>A</i><sup>${exponent}</sup> &mdash; the result`
          : `Stage ${stage} of ${exponent - 1}: collapse to <i>A</i><sup>${leftPowerAfter}</sup>`,
        formula:
          chainFormula(exponent, leftPowerAfter, bareAsAfter, 'collapse') +
          '. ' + tierNote +
          (isFinal
            ? ' Bracketing order did not matter &mdash; any pairwise grouping yields the same matrix.'
            : ''),
        matrices,
        layout,
        highlights: { LEFT: { cells: allAccent } },
        overlays
      });
    }
  }

  return scenes;
}

// ===========================================================
// UI helpers
// ===========================================================
function InfoIcon({ tip }) {
  return (
    <span
      className="pw-info"
      tabIndex={0}
      aria-label="More info"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        background: '#dbeafe',
        color: '#1e40af',
        fontSize: '11px',
        fontWeight: 700,
        cursor: 'help',
        position: 'relative',
        fontFamily: 'Arial, sans-serif',
        lineHeight: 1,
        userSelect: 'none',
        flexShrink: 0
      }}
    >
      ?
      <span className="pw-tip">{tip}</span>
    </span>
  );
}

function FieldLabel({ children, info }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      margin: '0 0 10px'
    }}>
      <span style={{
        fontSize: '16px',
        color: '#1e40af',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 600,
        lineHeight: 1.2
      }}>
        {children}
      </span>
      {info && <InfoIcon tip={info} />}
    </div>
  );
}

function Stepper({ value, onChange, min, max, locked = false, lockReason }) {
  const interactive = !locked;
  return (
    <span
      title={locked ? lockReason : undefined}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: '4px 6px 4px 10px',
        borderRadius: '6px',
        background: locked ? '#f1f5f9' : 'white',
        border: `1px ${locked ? 'dashed' : 'solid'} ${locked ? '#94a3b8' : '#cbd5e1'}`
      }}
    >
      <span style={{
        ...mathInlineStyle,
        fontWeight: 500,
        minWidth: '14px',
        textAlign: 'center',
        color: locked ? '#64748b' : '#0f172a'
      }}>
        {value}
      </span>
      {interactive ? (
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.7 }}>
          <button
            className="pw-stepper-btn"
            onClick={() => onChange(Math.min(max, value + 1))}
            disabled={value >= max}
            style={chevButtonStyle}
            aria-label="Increase"
          >&#9650;</button>
          <button
            className="pw-stepper-btn"
            onClick={() => onChange(Math.max(min, value - 1))}
            disabled={value <= min}
            style={chevButtonStyle}
            aria-label="Decrease"
          >&#9660;</button>
        </span>
      ) : (
        <span style={{
          fontSize: '11px',
          color: '#94a3b8',
          display: 'inline-flex',
          alignItems: 'center'
        }}>&#8646;</span>
      )}
    </span>
  );
}

// ===========================================================
// Main wrapper
// ===========================================================
export default function PowerWrapper({
  defaultSize = 2,
  defaultExponent = 4,
  sizeRange = [2, 3, 4],
  exponentRange = [1, 2, 3, 4, 5],
  title = 'Matrix Power',
  subtitle = 'Visualization of A\u207F as bracket-and-collapse: every cell shows its real symbolic content.',
  defaultSpeed = 1400
}) {
  const [size, setSize] = useState(defaultSize);
  const [exponent, setExponent] = useState(defaultExponent);

  const sizeMin = sizeRange[0];
  const sizeMax = sizeRange[sizeRange.length - 1];
  const expMin = exponentRange[0];
  const expMax = exponentRange[exponentRange.length - 1];

  const instanceId = React.useId().replace(/:/g, '');
  const tooltipClass = `pw-${instanceId}`;

  const scenes = useMemo(
    () => buildScenes(size, exponent, tooltipClass),
    [size, exponent, tooltipClass]
  );

  const canvasMinHeight = useMemo(() => {
    const matrixH = estimateMatrixHeight(size, exponent);
    const tipClearance = exponent <= 2 ? 60 : exponent <= 3 ? 130 : 180;
    // Bracket adds ~30px on top for the label pill.
    const bracketClearance = 36;
    return Math.max(320, matrixH + 2 * tipClearance + bracketClearance);
  }, [size, exponent]);

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '22px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style>{`
        .pw-stepper-btn:hover:not(:disabled) { color: #1e40af; }
        .pw-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

        .pw-info:hover, .pw-info:focus { background: #bfdbfe; outline: none; }
        .pw-info .pw-tip {
          visibility: hidden; opacity: 0;
          position: absolute; top: calc(100% + 8px); left: 50%;
          transform: translateX(-50%);
          background: #1e293b; color: #f1f5f9;
          font-size: 12px; line-height: 1.5; font-weight: 400;
          padding: 9px 13px; border-radius: 6px;
          width: 280px; text-align: left;
          pointer-events: none;
          transition: opacity 0.12s ease, visibility 0.12s;
          z-index: 100;
          font-family: Arial, sans-serif;
          font-style: normal;
        }
        .pw-info .pw-tip::before {
          content: ''; position: absolute;
          bottom: 100%; left: 50%; transform: translateX(-50%);
          border: 5px solid transparent; border-bottom-color: #1e293b;
        }
        .pw-info:hover .pw-tip, .pw-info:focus .pw-tip {
          visibility: visible; opacity: 1;
        }

        .${tooltipClass}-tip {
          visibility: hidden;
          opacity: 0;
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%);
          background: #1e293b;
          color: #f1f5f9;
          border-radius: 6px;
          padding: 10px 13px;
          font-size: 12px;
          font-family: 'Cambria Math', Georgia, serif;
          font-style: italic;
          line-height: 1.7;
          pointer-events: none;
          transition: opacity 0.12s ease, visibility 0.12s;
          z-index: 100;
          max-width: 420px;
          width: max-content;
          text-align: left;
          white-space: normal;
        }
        .${tooltipClass}-tip::before {
          content: '';
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 6px solid transparent;
          border-bottom-color: #1e293b;
        }
        .${tooltipClass}-tip.flip-up {
          top: auto;
          bottom: calc(100% + 12px);
        }
        .${tooltipClass}-tip.flip-up::before {
          bottom: auto;
          top: 100%;
          border-bottom-color: transparent;
          border-top-color: #1e293b;
        }
        [data-matrix-id] [data-row][data-col]:hover .${tooltipClass}-tip {
          visibility: visible;
          opacity: 1;
        }
      `}</style>

      {(title || subtitle) && (
        <div style={{ marginBottom: '18px' }}>
          {title && (
            <h2 style={{
              fontSize: '22px',
              color: '#1e40af',
              margin: '0 0 4px 0',
              fontWeight: 'bold'
            }}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div style={{
        background: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '10px',
        padding: '18px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '32px',
        alignItems: 'flex-start'
      }}>
        <div>
          <FieldLabel info={POWER_INFO}>Matrix size (square)</FieldLabel>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexWrap: 'wrap'
          }}>
            <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>A</span>
            <Stepper value={size} onChange={setSize} min={sizeMin} max={sizeMax} />
            <span style={{ color: '#94a3b8' }}>&times;</span>
            <Stepper
              value={size}
              onChange={() => {}}
              min={sizeMin}
              max={sizeMax}
              locked={true}
              lockReason="A is square &mdash; both dimensions are linked"
            />
          </div>
        </div>

        <div>
          <FieldLabel>Exponent</FieldLabel>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexWrap: 'wrap'
          }}>
            <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>n</span>
            <Stepper value={exponent} onChange={setExponent} min={expMin} max={expMax} />
          </div>
        </div>

        <div style={{ alignSelf: 'center' }}>
          <FieldLabel>Computing</FieldLabel>
          <div style={{
            ...mathInlineStyle,
            fontSize: '18px',
            color: '#1e40af',
            fontWeight: 500
          }}>
            A<sup style={{ fontStyle: 'normal', fontSize: '0.65em' }}>{exponent}</sup>{' '}
            <span style={{ fontSize: '14px', color: '#475569', fontWeight: 'normal' }}>
              ={' '}
              {exponent === 1
                ? <span style={mathInlineStyle}>A</span>
                : Array(exponent).fill('A').join(' \u00B7 ')}
            </span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '18px' }}>
        <ScenePlayer
          scenes={scenes}
          defaultSpeed={defaultSpeed}
          showSpeedSelector={true}
          showStepIndicator={true}
          showStepLog={true}
          stepLogTitle="Step explanations"
          sceneCanvasProps={{ minHeight: canvasMinHeight }}
        />
      </div>
    </div>
  );
}