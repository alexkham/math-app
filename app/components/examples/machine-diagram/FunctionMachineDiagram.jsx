// // // // // // // // 'use client';

// // // // // // // // import React, { useId } from 'react';

// // // // // // // // const DEFAULT_COLORS = {
// // // // // // // //   input:        { bg: '#E1F5EE', border: '#0F6E56', text: '#085041' },
// // // // // // // //   output:       { bg: '#FAECE7', border: '#993C1D', text: '#712B13' },
// // // // // // // //   intermediate: { bg: '#F1EFE8', border: '#888780', text: '#444441' },
// // // // // // // //   operationText: '#5F5E5A',
// // // // // // // //   forwardArrow: null,
// // // // // // // //   inverseArrow: null,
// // // // // // // // };

// // // // // // // // export default function FunctionMachineDiagram({
// // // // // // // //   steps = [],
// // // // // // // //   inverse = null,
// // // // // // // //   label = '',
// // // // // // // //   colors = {},
// // // // // // // //   style = {},
// // // // // // // // }) {
// // // // // // // //   const uid = useId().replace(/:/g, '');
// // // // // // // //   const markerId = `fm-arr-${uid}`;

// // // // // // // //   const c = {
// // // // // // // //     input:         { ...DEFAULT_COLORS.input, ...colors.input },
// // // // // // // //     output:        { ...DEFAULT_COLORS.output, ...colors.output },
// // // // // // // //     intermediate:  { ...DEFAULT_COLORS.intermediate, ...colors.intermediate },
// // // // // // // //     operationText: colors.operationText || DEFAULT_COLORS.operationText,
// // // // // // // //     forwardArrow:  colors.forwardArrow || null,
// // // // // // // //     inverseArrow:  colors.inverseArrow || null,
// // // // // // // //   };

// // // // // // // //   if (steps.length < 2) return null;

// // // // // // // //   const hasInverse = !!inverse;

// // // // // // // //   // ── Layout constants ──
// // // // // // // //   const BOX_H       = hasInverse ? 50 : 44;
// // // // // // // //   const RX          = 8;
// // // // // // // //   const CHAR_W      = 9;
// // // // // // // //   const LABEL_CHAR_W = 7;
// // // // // // // //   const MIN_BOX_W   = 55;
// // // // // // // //   const MIN_GAP     = 80;
// // // // // // // //   const PAD_L       = 40;
// // // // // // // //   const PAD_R       = label ? 120 : 40;
// // // // // // // //   const PAD_TOP     = 20;
// // // // // // // //   const PAD_BOTTOM  = hasInverse ? 36 : 20;

// // // // // // // //   // ── Sizes ──
// // // // // // // //   const boxW = steps.map(s =>
// // // // // // // //     Math.max(MIN_BOX_W, s.value.length * CHAR_W + 24)
// // // // // // // //   );

// // // // // // // //   const gaps = [];
// // // // // // // //   for (let i = 0; i < steps.length - 1; i++) {
// // // // // // // //     const op = steps[i].operation || '';
// // // // // // // //     gaps.push(Math.max(MIN_GAP, op.length * LABEL_CHAR_W + 40));
// // // // // // // //   }

// // // // // // // //   const contentW = boxW.reduce((a, b) => a + b, 0)
// // // // // // // //                  + gaps.reduce((a, b) => a + b, 0);
// // // // // // // //   const W = PAD_L + contentW + PAD_R;
// // // // // // // //   const H = PAD_TOP + BOX_H + PAD_BOTTOM;

// // // // // // // //   // ── Box x positions ──
// // // // // // // //   const bx = [];
// // // // // // // //   let cx = PAD_L;
// // // // // // // //   for (let i = 0; i < steps.length; i++) {
// // // // // // // //     bx.push(cx);
// // // // // // // //     if (i < steps.length - 1) cx += boxW[i] + gaps[i];
// // // // // // // //   }

// // // // // // // //   const by = PAD_TOP;
// // // // // // // //   const cy = PAD_TOP + BOX_H / 2;

// // // // // // // //   // ── Colors ──
// // // // // // // //   const boxColor = (i) => {
// // // // // // // //     if (i === 0)                   return c.input;
// // // // // // // //     if (i === steps.length - 1)    return c.output;
// // // // // // // //     return c.intermediate;
// // // // // // // //   };

// // // // // // // //   const fwdArrowColor = c.forwardArrow
// // // // // // // //     || (steps.length === 2 ? c.input.border : c.operationText);

// // // // // // // //   const invArrowColor = c.inverseArrow || c.output.border;

// // // // // // // //   // ── Render ──
// // // // // // // //   return (
// // // // // // // //     <svg
// // // // // // // //       width="100%"
// // // // // // // //       viewBox={`0 0 ${W} ${H}`}
// // // // // // // //       xmlns="http://www.w3.org/2000/svg"
// // // // // // // //       role="img"
// // // // // // // //       style={style}
// // // // // // // //     >
// // // // // // // //       <title>
// // // // // // // //         {`Function machine: ${steps.map(s => s.value).join(' \u2192 ')}`}
// // // // // // // //       </title>

// // // // // // // //       <defs>
// // // // // // // //         <marker
// // // // // // // //           id={markerId}
// // // // // // // //           viewBox="0 0 10 10"
// // // // // // // //           refX="8" refY="5"
// // // // // // // //           markerWidth="6" markerHeight="6"
// // // // // // // //           orient="auto-start-reverse"
// // // // // // // //         >
// // // // // // // //           <path
// // // // // // // //             d="M2 1L8 5L2 9"
// // // // // // // //             fill="none"
// // // // // // // //             stroke="context-stroke"
// // // // // // // //             strokeWidth="1.5"
// // // // // // // //             strokeLinecap="round"
// // // // // // // //             strokeLinejoin="round"
// // // // // // // //           />
// // // // // // // //         </marker>
// // // // // // // //       </defs>

// // // // // // // //       {/* ── Boxes ── */}
// // // // // // // //       {steps.map((step, i) => {
// // // // // // // //         const col = boxColor(i);
// // // // // // // //         return (
// // // // // // // //           <g key={i}>
// // // // // // // //             <rect
// // // // // // // //               x={bx[i]}
// // // // // // // //               y={by}
// // // // // // // //               width={boxW[i]}
// // // // // // // //               height={BOX_H}
// // // // // // // //               rx={RX}
// // // // // // // //               fill={col.bg}
// // // // // // // //               stroke={col.border}
// // // // // // // //               strokeWidth="0.5"
// // // // // // // //             />
// // // // // // // //             <text
// // // // // // // //               x={bx[i] + boxW[i] / 2}
// // // // // // // //               y={cy}
// // // // // // // //               textAnchor="middle"
// // // // // // // //               dominantBaseline="central"
// // // // // // // //               fontFamily="sans-serif"
// // // // // // // //               fontSize={14}
// // // // // // // //               fontWeight="500"
// // // // // // // //               fill={col.text}
// // // // // // // //             >
// // // // // // // //               {step.value}
// // // // // // // //             </text>
// // // // // // // //           </g>
// // // // // // // //         );
// // // // // // // //       })}

// // // // // // // //       {/* ── Forward arrows ── */}
// // // // // // // //       {steps.map((step, i) => {
// // // // // // // //         if (i >= steps.length - 1 || !step.operation) return null;
// // // // // // // //         const x1 = bx[i] + boxW[i] + 2;
// // // // // // // //         const x2 = bx[i + 1] - 2;
// // // // // // // //         const arrowY = hasInverse ? cy - 9 : cy;

// // // // // // // //         return (
// // // // // // // //           <g key={`a${i}`}>
// // // // // // // //             <line
// // // // // // // //               x1={x1} y1={arrowY}
// // // // // // // //               x2={x2} y2={arrowY}
// // // // // // // //               stroke={fwdArrowColor}
// // // // // // // //               strokeWidth="1.5"
// // // // // // // //               markerEnd={`url(#${markerId})`}
// // // // // // // //               fill="none"
// // // // // // // //             />
// // // // // // // //             <text
// // // // // // // //               x={(x1 + x2) / 2}
// // // // // // // //               y={arrowY - 10}
// // // // // // // //               textAnchor="middle"
// // // // // // // //               fontFamily="sans-serif"
// // // // // // // //               fontSize={12}
// // // // // // // //               fill={c.operationText}
// // // // // // // //             >
// // // // // // // //               {step.operation}
// // // // // // // //             </text>
// // // // // // // //           </g>
// // // // // // // //         );
// // // // // // // //       })}

// // // // // // // //       {/* ── Inverse arrow ── */}
// // // // // // // //       {hasInverse && (() => {
// // // // // // // //         const last = steps.length - 1;
// // // // // // // //         const x1 = bx[last] - 2;
// // // // // // // //         const x2 = bx[0] + boxW[0] + 2;
// // // // // // // //         const arrowY = cy + 9;
// // // // // // // //         const labelY = arrowY + 18;
// // // // // // // //         const midX = (bx[0] + boxW[0] + bx[last]) / 2;

// // // // // // // //         return (
// // // // // // // //           <g>
// // // // // // // //             <line
// // // // // // // //               x1={x1} y1={arrowY}
// // // // // // // //               x2={x2} y2={arrowY}
// // // // // // // //               stroke={invArrowColor}
// // // // // // // //               strokeWidth="1.5"
// // // // // // // //               markerEnd={`url(#${markerId})`}
// // // // // // // //               fill="none"
// // // // // // // //             />
// // // // // // // //             <text
// // // // // // // //               x={midX}
// // // // // // // //               y={labelY}
// // // // // // // //               textAnchor="middle"
// // // // // // // //               fontFamily="sans-serif"
// // // // // // // //               fontSize={12}
// // // // // // // //               fill={c.operationText}
// // // // // // // //             >
// // // // // // // //               {inverse.operation}
// // // // // // // //             </text>
// // // // // // // //           </g>
// // // // // // // //         );
// // // // // // // //       })()}

// // // // // // // //       {/* ── Label ── */}
// // // // // // // //       {label && (
// // // // // // // //         <text
// // // // // // // //           x={W - 20}
// // // // // // // //           y={cy}
// // // // // // // //           textAnchor="end"
// // // // // // // //           dominantBaseline="central"
// // // // // // // //           fontFamily="sans-serif"
// // // // // // // //           fontSize={12}
// // // // // // // //           fill={c.operationText}
// // // // // // // //           opacity={0.55}
// // // // // // // //         >
// // // // // // // //           {label}
// // // // // // // //         </text>
// // // // // // // //       )}
// // // // // // // //     </svg>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // 'use client';

// // // // // // // import React, { useId } from 'react';

// // // // // // // const DEFAULT_COLORS = {
// // // // // // //   input:        { bg: '#E1F5EE', border: '#0F6E56', text: '#085041' },
// // // // // // //   output:       { bg: '#FAECE7', border: '#993C1D', text: '#712B13' },
// // // // // // //   intermediate: { bg: '#F1EFE8', border: '#888780', text: '#444441' },
// // // // // // //   operationText: '#5F5E5A',
// // // // // // //   forwardArrow: null,
// // // // // // //   inverseArrow: null,
// // // // // // // };

// // // // // // // const SCROLL_CSS = `
// // // // // // //   .fmd-scroll::-webkit-scrollbar { display: none; }
// // // // // // //   .fmd-scroll { scrollbar-width: none; -ms-overflow-style: none; }
// // // // // // // `;

// // // // // // // export default function FunctionMachineDiagram({
// // // // // // //   steps = [],
// // // // // // //   inverse = null,
// // // // // // //   label = '',
// // // // // // //   colors = {},
// // // // // // //   style = {},
// // // // // // // }) {
// // // // // // //   const uid = useId().replace(/:/g, '');
// // // // // // //   const markerId = `fm-arr-${uid}`;

// // // // // // //   const c = {
// // // // // // //     input:         { ...DEFAULT_COLORS.input, ...colors.input },
// // // // // // //     output:        { ...DEFAULT_COLORS.output, ...colors.output },
// // // // // // //     intermediate:  { ...DEFAULT_COLORS.intermediate, ...colors.intermediate },
// // // // // // //     operationText: colors.operationText || DEFAULT_COLORS.operationText,
// // // // // // //     forwardArrow:  colors.forwardArrow || null,
// // // // // // //     inverseArrow:  colors.inverseArrow || null,
// // // // // // //   };

// // // // // // //   if (steps.length < 2) return null;

// // // // // // //   const hasInverse = !!inverse;

// // // // // // //   // ── Layout constants ──
// // // // // // //   const BOX_H       = hasInverse ? 50 : 44;
// // // // // // //   const RX          = 8;
// // // // // // //   const CHAR_W      = 9;
// // // // // // //   const LABEL_CHAR_W = 7;
// // // // // // //   const MIN_BOX_W   = 55;
// // // // // // //   const MIN_GAP     = 80;
// // // // // // //   const PAD_L       = 40;
// // // // // // //   const PAD_R       = label ? 120 : 40;
// // // // // // //   const PAD_TOP     = 20;
// // // // // // //   const PAD_BOTTOM  = hasInverse ? 36 : 20;

// // // // // // //   // ── Sizes ──
// // // // // // //   const boxW = steps.map(s =>
// // // // // // //     Math.max(MIN_BOX_W, s.value.length * CHAR_W + 24)
// // // // // // //   );

// // // // // // //   const gaps = [];
// // // // // // //   for (let i = 0; i < steps.length - 1; i++) {
// // // // // // //     const op = steps[i].operation || '';
// // // // // // //     gaps.push(Math.max(MIN_GAP, op.length * LABEL_CHAR_W + 40));
// // // // // // //   }

// // // // // // //   const contentW = boxW.reduce((a, b) => a + b, 0)
// // // // // // //                  + gaps.reduce((a, b) => a + b, 0);
// // // // // // //   const W = PAD_L + contentW + PAD_R;
// // // // // // //   const H = PAD_TOP + BOX_H + PAD_BOTTOM;

// // // // // // //   // ── Box x positions ──
// // // // // // //   const bx = [];
// // // // // // //   let cx = PAD_L;
// // // // // // //   for (let i = 0; i < steps.length; i++) {
// // // // // // //     bx.push(cx);
// // // // // // //     if (i < steps.length - 1) cx += boxW[i] + gaps[i];
// // // // // // //   }

// // // // // // //   const by = PAD_TOP;
// // // // // // //   const cy = PAD_TOP + BOX_H / 2;

// // // // // // //   // ── Colors ──
// // // // // // //   const boxColor = (i) => {
// // // // // // //     if (i === 0)                   return c.input;
// // // // // // //     if (i === steps.length - 1)    return c.output;
// // // // // // //     return c.intermediate;
// // // // // // //   };

// // // // // // //   const fwdArrowColor = c.forwardArrow
// // // // // // //     || (steps.length === 2 ? c.input.border : c.operationText);

// // // // // // //   const invArrowColor = c.inverseArrow || c.output.border;

// // // // // // //   // ── Render ──
// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <style>{SCROLL_CSS}</style>
// // // // // // //       <div
// // // // // // //         className="fmd-scroll"
// // // // // // //         style={{
// // // // // // //           display: 'block',
// // // // // // //           width: '100%',
// // // // // // //           maxWidth: '100%',
// // // // // // //           overflowX: 'scroll',
// // // // // // //           overflowY: 'hidden',
// // // // // // //           boxSizing: 'border-box',
// // // // // // //           WebkitOverflowScrolling: 'touch',
// // // // // // //           ...style,
// // // // // // //         }}
// // // // // // //       >
// // // // // // //         <svg
// // // // // // //           viewBox={`0 0 ${W} ${H}`}
// // // // // // //           xmlns="http://www.w3.org/2000/svg"
// // // // // // //           role="img"
// // // // // // //           style={{
// // // // // // //             display: 'block',
// // // // // // //             width: `${W}px`,
// // // // // // //             height: `${H}px`,
// // // // // // //             minWidth: `${W}px`,
// // // // // // //             maxWidth: 'none',
// // // // // // //             flexShrink: 0,
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           <title>
// // // // // // //             {`Function machine: ${steps.map(s => s.value).join(' \u2192 ')}`}
// // // // // // //           </title>

// // // // // // //           <defs>
// // // // // // //             <marker
// // // // // // //               id={markerId}
// // // // // // //               viewBox="0 0 10 10"
// // // // // // //               refX="8" refY="5"
// // // // // // //               markerWidth="6" markerHeight="6"
// // // // // // //               orient="auto-start-reverse"
// // // // // // //             >
// // // // // // //               <path
// // // // // // //                 d="M2 1L8 5L2 9"
// // // // // // //                 fill="none"
// // // // // // //                 stroke="context-stroke"
// // // // // // //                 strokeWidth="1.5"
// // // // // // //                 strokeLinecap="round"
// // // // // // //                 strokeLinejoin="round"
// // // // // // //               />
// // // // // // //             </marker>
// // // // // // //           </defs>

// // // // // // //           {/* ── Boxes ── */}
// // // // // // //           {steps.map((step, i) => {
// // // // // // //             const col = boxColor(i);
// // // // // // //             return (
// // // // // // //               <g key={i}>
// // // // // // //                 <rect
// // // // // // //                   x={bx[i]}
// // // // // // //                   y={by}
// // // // // // //                   width={boxW[i]}
// // // // // // //                   height={BOX_H}
// // // // // // //                   rx={RX}
// // // // // // //                   fill={col.bg}
// // // // // // //                   stroke={col.border}
// // // // // // //                   strokeWidth="0.5"
// // // // // // //                 />
// // // // // // //                 <text
// // // // // // //                   x={bx[i] + boxW[i] / 2}
// // // // // // //                   y={cy}
// // // // // // //                   textAnchor="middle"
// // // // // // //                   dominantBaseline="central"
// // // // // // //                   fontFamily="sans-serif"
// // // // // // //                   fontSize={14}
// // // // // // //                   fontWeight="500"
// // // // // // //                   fill={col.text}
// // // // // // //                 >
// // // // // // //                   {step.value}
// // // // // // //                 </text>
// // // // // // //               </g>
// // // // // // //             );
// // // // // // //           })}

// // // // // // //           {/* ── Forward arrows ── */}
// // // // // // //           {steps.map((step, i) => {
// // // // // // //             if (i >= steps.length - 1 || !step.operation) return null;
// // // // // // //             const x1 = bx[i] + boxW[i] + 2;
// // // // // // //             const x2 = bx[i + 1] - 2;
// // // // // // //             const arrowY = hasInverse ? cy - 9 : cy;

// // // // // // //             return (
// // // // // // //               <g key={`a${i}`}>
// // // // // // //                 <line
// // // // // // //                   x1={x1} y1={arrowY}
// // // // // // //                   x2={x2} y2={arrowY}
// // // // // // //                   stroke={fwdArrowColor}
// // // // // // //                   strokeWidth="1.5"
// // // // // // //                   markerEnd={`url(#${markerId})`}
// // // // // // //                   fill="none"
// // // // // // //                 />
// // // // // // //                 <text
// // // // // // //                   x={(x1 + x2) / 2}
// // // // // // //                   y={arrowY - 10}
// // // // // // //                   textAnchor="middle"
// // // // // // //                   fontFamily="sans-serif"
// // // // // // //                   fontSize={12}
// // // // // // //                   fill={c.operationText}
// // // // // // //                 >
// // // // // // //                   {step.operation}
// // // // // // //                 </text>
// // // // // // //               </g>
// // // // // // //             );
// // // // // // //           })}

// // // // // // //           {/* ── Inverse arrow ── */}
// // // // // // //           {hasInverse && (() => {
// // // // // // //             const last = steps.length - 1;
// // // // // // //             const x1 = bx[last] - 2;
// // // // // // //             const x2 = bx[0] + boxW[0] + 2;
// // // // // // //             const arrowY = cy + 9;
// // // // // // //             const labelY = arrowY + 18;
// // // // // // //             const midX = (bx[0] + boxW[0] + bx[last]) / 2;

// // // // // // //             return (
// // // // // // //               <g>
// // // // // // //                 <line
// // // // // // //                   x1={x1} y1={arrowY}
// // // // // // //                   x2={x2} y2={arrowY}
// // // // // // //                   stroke={invArrowColor}
// // // // // // //                   strokeWidth="1.5"
// // // // // // //                   markerEnd={`url(#${markerId})`}
// // // // // // //                   fill="none"
// // // // // // //                 />
// // // // // // //                 <text
// // // // // // //                   x={midX}
// // // // // // //                   y={labelY}
// // // // // // //                   textAnchor="middle"
// // // // // // //                   fontFamily="sans-serif"
// // // // // // //                   fontSize={12}
// // // // // // //                   fill={c.operationText}
// // // // // // //                 >
// // // // // // //                   {inverse.operation}
// // // // // // //                 </text>
// // // // // // //               </g>
// // // // // // //             );
// // // // // // //           })()}

// // // // // // //           {/* ── Label ── */}
// // // // // // //           {label && (
// // // // // // //             <text
// // // // // // //               x={W - 20}
// // // // // // //               y={cy}
// // // // // // //               textAnchor="end"
// // // // // // //               dominantBaseline="central"
// // // // // // //               fontFamily="sans-serif"
// // // // // // //               fontSize={12}
// // // // // // //               fill={c.operationText}
// // // // // // //               opacity={0.55}
// // // // // // //             >
// // // // // // //               {label}
// // // // // // //             </text>
// // // // // // //           )}
// // // // // // //         </svg>
// // // // // // //       </div>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // }


// // // // // // // 'use client';

// // // // // // // import React, { useId } from 'react';

// // // // // // // const DEFAULT_COLORS = {
// // // // // // //   input:        { bg: '#E1F5EE', border: '#0F6E56', text: '#085041' },
// // // // // // //   output:       { bg: '#FAECE7', border: '#993C1D', text: '#712B13' },
// // // // // // //   intermediate: { bg: '#F1EFE8', border: '#888780', text: '#444441' },
// // // // // // //   operationText: '#5F5E5A',
// // // // // // // };

// // // // // // // const SCROLL_CSS = `
// // // // // // //   .fmd-scroll-wrap {
// // // // // // //     overflow-x: auto;
// // // // // // //     overflow-y: hidden;
// // // // // // //     width: 100%;
// // // // // // //     max-width: 100%;
// // // // // // //     -webkit-overflow-scrolling: touch;
// // // // // // //   }
// // // // // // //   .fmd-scroll-wrap::-webkit-scrollbar { display: none; }
// // // // // // //   .fmd-scroll-wrap { scrollbar-width: none; -ms-overflow-style: none; }
// // // // // // //   .fmd-svg { display: block; }
// // // // // // // `;

// // // // // // // export default function FunctionMachineDiagram({
// // // // // // //   steps = [],
// // // // // // //   inverse = null,
// // // // // // //   colors = {},
// // // // // // // }) {
// // // // // // //   const uid = useId().replace(/:/g, '');
// // // // // // //   const markerId = `fm-arr-${uid}`;

// // // // // // //   const c = {
// // // // // // //     input:         { ...DEFAULT_COLORS.input, ...colors.input },
// // // // // // //     output:        { ...DEFAULT_COLORS.output, ...colors.output },
// // // // // // //     intermediate:  { ...DEFAULT_COLORS.intermediate, ...colors.intermediate },
// // // // // // //     operationText: colors.operationText || DEFAULT_COLORS.operationText,
// // // // // // //   };

// // // // // // //   if (steps.length < 2) return null;

// // // // // // //   const hasInverse = !!inverse;

// // // // // // //   const BOX_H        = hasInverse ? 50 : 44;
// // // // // // //   const RX           = 8;
// // // // // // //   const CHAR_W       = 9;
// // // // // // //   const LABEL_CHAR_W = 7;
// // // // // // //   const MIN_BOX_W    = 55;
// // // // // // //   const MIN_GAP      = 80;
// // // // // // //   const PAD_L        = 20;
// // // // // // //   const PAD_R        = 20;
// // // // // // //   const PAD_TOP      = 20;
// // // // // // //   const PAD_BOTTOM   = hasInverse ? 36 : 20;

// // // // // // //   const boxW = steps.map(s => Math.max(MIN_BOX_W, s.value.length * CHAR_W + 24));

// // // // // // //   const gaps = [];
// // // // // // //   for (let i = 0; i < steps.length - 1; i++) {
// // // // // // //     const op = steps[i].operation || '';
// // // // // // //     gaps.push(Math.max(MIN_GAP, op.length * LABEL_CHAR_W + 40));
// // // // // // //   }

// // // // // // //   const contentW = boxW.reduce((a, b) => a + b, 0) + gaps.reduce((a, b) => a + b, 0);
// // // // // // //   const W = PAD_L + contentW + PAD_R;
// // // // // // //   const H = PAD_TOP + BOX_H + PAD_BOTTOM;

// // // // // // //   const bx = [];
// // // // // // //   let cx = PAD_L;
// // // // // // //   for (let i = 0; i < steps.length; i++) {
// // // // // // //     bx.push(cx);
// // // // // // //     if (i < steps.length - 1) cx += boxW[i] + gaps[i];
// // // // // // //   }

// // // // // // //   const by = PAD_TOP;
// // // // // // //   const cy = PAD_TOP + BOX_H / 2;

// // // // // // //   const boxColor = (i) => {
// // // // // // //     if (i === 0) return c.input;
// // // // // // //     if (i === steps.length - 1) return c.output;
// // // // // // //     return c.intermediate;
// // // // // // //   };

// // // // // // //   const fwdArrowColor = steps.length === 2 ? c.input.border : c.operationText;
// // // // // // //   const invArrowColor = c.output.border;

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <style>{SCROLL_CSS}</style>
// // // // // // //       <div className="fmd-scroll-wrap">
// // // // // // //         <svg
// // // // // // //           className="fmd-svg"
// // // // // // //           width={W}
// // // // // // //           height={H}
// // // // // // //           viewBox={`0 0 ${W} ${H}`}
// // // // // // //           xmlns="http://www.w3.org/2000/svg"
// // // // // // //           role="img"
// // // // // // //         >
// // // // // // //           <title>
// // // // // // //             {`Function machine: ${steps.map(s => s.value).join(' \u2192 ')}`}
// // // // // // //           </title>

// // // // // // //           <defs>
// // // // // // //             <marker
// // // // // // //               id={markerId}
// // // // // // //               viewBox="0 0 10 10"
// // // // // // //               refX="8" refY="5"
// // // // // // //               markerWidth="6" markerHeight="6"
// // // // // // //               orient="auto-start-reverse"
// // // // // // //             >
// // // // // // //               <path
// // // // // // //                 d="M2 1L8 5L2 9"
// // // // // // //                 fill="none"
// // // // // // //                 stroke="context-stroke"
// // // // // // //                 strokeWidth="1.5"
// // // // // // //                 strokeLinecap="round"
// // // // // // //                 strokeLinejoin="round"
// // // // // // //               />
// // // // // // //             </marker>
// // // // // // //           </defs>

// // // // // // //           {steps.map((step, i) => {
// // // // // // //             const col = boxColor(i);
// // // // // // //             return (
// // // // // // //               <g key={i}>
// // // // // // //                 <rect
// // // // // // //                   x={bx[i]}
// // // // // // //                   y={by}
// // // // // // //                   width={boxW[i]}
// // // // // // //                   height={BOX_H}
// // // // // // //                   rx={RX}
// // // // // // //                   fill={col.bg}
// // // // // // //                   stroke={col.border}
// // // // // // //                   strokeWidth="0.5"
// // // // // // //                 />
// // // // // // //                 <text
// // // // // // //                   x={bx[i] + boxW[i] / 2}
// // // // // // //                   y={cy}
// // // // // // //                   textAnchor="middle"
// // // // // // //                   dominantBaseline="central"
// // // // // // //                   fontFamily="sans-serif"
// // // // // // //                   fontSize={14}
// // // // // // //                   fontWeight="500"
// // // // // // //                   fill={col.text}
// // // // // // //                 >
// // // // // // //                   {step.value}
// // // // // // //                 </text>
// // // // // // //               </g>
// // // // // // //             );
// // // // // // //           })}

// // // // // // //           {steps.map((step, i) => {
// // // // // // //             if (i >= steps.length - 1 || !step.operation) return null;
// // // // // // //             const x1 = bx[i] + boxW[i] + 2;
// // // // // // //             const x2 = bx[i + 1] - 2;
// // // // // // //             const arrowY = hasInverse ? cy - 9 : cy;

// // // // // // //             return (
// // // // // // //               <g key={`a${i}`}>
// // // // // // //                 <line
// // // // // // //                   x1={x1} y1={arrowY}
// // // // // // //                   x2={x2} y2={arrowY}
// // // // // // //                   stroke={fwdArrowColor}
// // // // // // //                   strokeWidth="1.5"
// // // // // // //                   markerEnd={`url(#${markerId})`}
// // // // // // //                   fill="none"
// // // // // // //                 />
// // // // // // //                 <text
// // // // // // //                   x={(x1 + x2) / 2}
// // // // // // //                   y={arrowY - 10}
// // // // // // //                   textAnchor="middle"
// // // // // // //                   fontFamily="sans-serif"
// // // // // // //                   fontSize={12}
// // // // // // //                   fill={c.operationText}
// // // // // // //                 >
// // // // // // //                   {step.operation}
// // // // // // //                 </text>
// // // // // // //               </g>
// // // // // // //             );
// // // // // // //           })}

// // // // // // //           {hasInverse && (() => {
// // // // // // //             const last = steps.length - 1;
// // // // // // //             const x1 = bx[last] - 2;
// // // // // // //             const x2 = bx[0] + boxW[0] + 2;
// // // // // // //             const arrowY = cy + 9;
// // // // // // //             const labelY = arrowY + 18;
// // // // // // //             const midX = (bx[0] + boxW[0] + bx[last]) / 2;

// // // // // // //             return (
// // // // // // //               <g>
// // // // // // //                 <line
// // // // // // //                   x1={x1} y1={arrowY}
// // // // // // //                   x2={x2} y2={arrowY}
// // // // // // //                   stroke={invArrowColor}
// // // // // // //                   strokeWidth="1.5"
// // // // // // //                   markerEnd={`url(#${markerId})`}
// // // // // // //                   fill="none"
// // // // // // //                 />
// // // // // // //                 <text
// // // // // // //                   x={midX}
// // // // // // //                   y={labelY}
// // // // // // //                   textAnchor="middle"
// // // // // // //                   fontFamily="sans-serif"
// // // // // // //                   fontSize={12}
// // // // // // //                   fill={c.operationText}
// // // // // // //                 >
// // // // // // //                   {inverse.operation}
// // // // // // //                 </text>
// // // // // // //               </g>
// // // // // // //             );
// // // // // // //           })()}
// // // // // // //         </svg>
// // // // // // //       </div>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // }



// // // // // // 'use client';

// // // // // // import React, { useId } from 'react';

// // // // // // const DEFAULT_COLORS = {
// // // // // //   input:        { bg: '#E1F5EE', border: '#0F6E56', text: '#085041' },
// // // // // //   output:       { bg: '#FAECE7', border: '#993C1D', text: '#712B13' },
// // // // // //   intermediate: { bg: '#F1EFE8', border: '#888780', text: '#444441' },
// // // // // //   operationText: '#5F5E5A',
// // // // // // };

// // // // // // const SCROLL_CSS = `
// // // // // //   .fmd-scroll-wrap {
// // // // // //     overflow-x: auto;
// // // // // //     overflow-y: hidden;
// // // // // //     width: 100%;
// // // // // //     max-width: 100%;
// // // // // //     -webkit-overflow-scrolling: touch;
// // // // // //   }
// // // // // //   .fmd-scroll-wrap::-webkit-scrollbar { display: none; }
// // // // // //   .fmd-scroll-wrap { scrollbar-width: none; -ms-overflow-style: none; }
// // // // // //   .fmd-svg { display: block; max-width: none; flex-shrink: 0; }
// // // // // // `;

// // // // // // export default function FunctionMachineDiagram({
// // // // // //   steps = [],
// // // // // //   inverse = null,
// // // // // //   colors = {},
// // // // // // }) {
// // // // // //   const uid = useId().replace(/:/g, '');
// // // // // //   const markerId = `fm-arr-${uid}`;

// // // // // //   const c = {
// // // // // //     input:         { ...DEFAULT_COLORS.input, ...colors.input },
// // // // // //     output:        { ...DEFAULT_COLORS.output, ...colors.output },
// // // // // //     intermediate:  { ...DEFAULT_COLORS.intermediate, ...colors.intermediate },
// // // // // //     operationText: colors.operationText || DEFAULT_COLORS.operationText,
// // // // // //   };

// // // // // //   if (steps.length < 2) return null;

// // // // // //   const hasInverse = !!inverse;

// // // // // //   const BOX_H        = hasInverse ? 50 : 44;
// // // // // //   const RX           = 8;
// // // // // //   const CHAR_W       = 9;
// // // // // //   const LABEL_CHAR_W = 7;
// // // // // //   const MIN_BOX_W    = 55;
// // // // // //   const MIN_GAP      = 80;
// // // // // //   const PAD_L        = 20;
// // // // // //   const PAD_R        = 20;
// // // // // //   const PAD_TOP      = 20;
// // // // // //   const PAD_BOTTOM   = hasInverse ? 36 : 20;

// // // // // //   const boxW = steps.map(s => Math.max(MIN_BOX_W, s.value.length * CHAR_W + 24));

// // // // // //   const gaps = [];
// // // // // //   for (let i = 0; i < steps.length - 1; i++) {
// // // // // //     const op = steps[i].operation || '';
// // // // // //     gaps.push(Math.max(MIN_GAP, op.length * LABEL_CHAR_W + 40));
// // // // // //   }

// // // // // //   const contentW = boxW.reduce((a, b) => a + b, 0) + gaps.reduce((a, b) => a + b, 0);
// // // // // //   const W = PAD_L + contentW + PAD_R;
// // // // // //   const H = PAD_TOP + BOX_H + PAD_BOTTOM;

// // // // // //   const bx = [];
// // // // // //   let cx = PAD_L;
// // // // // //   for (let i = 0; i < steps.length; i++) {
// // // // // //     bx.push(cx);
// // // // // //     if (i < steps.length - 1) cx += boxW[i] + gaps[i];
// // // // // //   }

// // // // // //   const by = PAD_TOP;
// // // // // //   const cy = PAD_TOP + BOX_H / 2;

// // // // // //   const boxColor = (i) => {
// // // // // //     if (i === 0) return c.input;
// // // // // //     if (i === steps.length - 1) return c.output;
// // // // // //     return c.intermediate;
// // // // // //   };

// // // // // //   const fwdArrowColor = steps.length === 2 ? c.input.border : c.operationText;
// // // // // //   const invArrowColor = c.output.border;

// // // // // //   return (
// // // // // //     <>
// // // // // //       <style>{SCROLL_CSS}</style>
// // // // // //       <div className="fmd-scroll-wrap">
// // // // // //         <svg
// // // // // //           className="fmd-svg"
// // // // // //           width={W}
// // // // // //           height={H}
// // // // // //           viewBox={`0 0 ${W} ${H}`}
// // // // // //           xmlns="http://www.w3.org/2000/svg"
// // // // // //           role="img"
// // // // // //         >
// // // // // //           <title>
// // // // // //             {`Function machine: ${steps.map(s => s.value).join(' \u2192 ')}`}
// // // // // //           </title>

// // // // // //           <defs>
// // // // // //             <marker
// // // // // //               id={markerId}
// // // // // //               viewBox="0 0 10 10"
// // // // // //               refX="8" refY="5"
// // // // // //               markerWidth="6" markerHeight="6"
// // // // // //               orient="auto-start-reverse"
// // // // // //             >
// // // // // //               <path
// // // // // //                 d="M2 1L8 5L2 9"
// // // // // //                 fill="none"
// // // // // //                 stroke="context-stroke"
// // // // // //                 strokeWidth="1.5"
// // // // // //                 strokeLinecap="round"
// // // // // //                 strokeLinejoin="round"
// // // // // //               />
// // // // // //             </marker>
// // // // // //           </defs>

// // // // // //           {steps.map((step, i) => {
// // // // // //             const col = boxColor(i);
// // // // // //             return (
// // // // // //               <g key={i}>
// // // // // //                 <rect
// // // // // //                   x={bx[i]}
// // // // // //                   y={by}
// // // // // //                   width={boxW[i]}
// // // // // //                   height={BOX_H}
// // // // // //                   rx={RX}
// // // // // //                   fill={col.bg}
// // // // // //                   stroke={col.border}
// // // // // //                   strokeWidth="0.5"
// // // // // //                 />
// // // // // //                 <text
// // // // // //                   x={bx[i] + boxW[i] / 2}
// // // // // //                   y={cy}
// // // // // //                   textAnchor="middle"
// // // // // //                   dominantBaseline="central"
// // // // // //                   fontFamily="sans-serif"
// // // // // //                   fontSize={14}
// // // // // //                   fontWeight="500"
// // // // // //                   fill={col.text}
// // // // // //                 >
// // // // // //                   {step.value}
// // // // // //                 </text>
// // // // // //               </g>
// // // // // //             );
// // // // // //           })}

// // // // // //           {steps.map((step, i) => {
// // // // // //             if (i >= steps.length - 1 || !step.operation) return null;
// // // // // //             const x1 = bx[i] + boxW[i] + 2;
// // // // // //             const x2 = bx[i + 1] - 2;
// // // // // //             const arrowY = hasInverse ? cy - 9 : cy;

// // // // // //             return (
// // // // // //               <g key={`a${i}`}>
// // // // // //                 <line
// // // // // //                   x1={x1} y1={arrowY}
// // // // // //                   x2={x2} y2={arrowY}
// // // // // //                   stroke={fwdArrowColor}
// // // // // //                   strokeWidth="1.5"
// // // // // //                   markerEnd={`url(#${markerId})`}
// // // // // //                   fill="none"
// // // // // //                 />
// // // // // //                 <text
// // // // // //                   x={(x1 + x2) / 2}
// // // // // //                   y={arrowY - 10}
// // // // // //                   textAnchor="middle"
// // // // // //                   fontFamily="sans-serif"
// // // // // //                   fontSize={12}
// // // // // //                   fill={c.operationText}
// // // // // //                 >
// // // // // //                   {step.operation}
// // // // // //                 </text>
// // // // // //               </g>
// // // // // //             );
// // // // // //           })}

// // // // // //           {hasInverse && (() => {
// // // // // //             const last = steps.length - 1;
// // // // // //             const x1 = bx[last] - 2;
// // // // // //             const x2 = bx[0] + boxW[0] + 2;
// // // // // //             const arrowY = cy + 9;
// // // // // //             const labelY = arrowY + 18;
// // // // // //             const midX = (bx[0] + boxW[0] + bx[last]) / 2;

// // // // // //             return (
// // // // // //               <g>
// // // // // //                 <line
// // // // // //                   x1={x1} y1={arrowY}
// // // // // //                   x2={x2} y2={arrowY}
// // // // // //                   stroke={invArrowColor}
// // // // // //                   strokeWidth="1.5"
// // // // // //                   markerEnd={`url(#${markerId})`}
// // // // // //                   fill="none"
// // // // // //                 />
// // // // // //                 <text
// // // // // //                   x={midX}
// // // // // //                   y={labelY}
// // // // // //                   textAnchor="middle"
// // // // // //                   fontFamily="sans-serif"
// // // // // //                   fontSize={12}
// // // // // //                   fill={c.operationText}
// // // // // //                 >
// // // // // //                   {inverse.operation}
// // // // // //                 </text>
// // // // // //               </g>
// // // // // //             );
// // // // // //           })()}
// // // // // //         </svg>
// // // // // //       </div>
// // // // // //     </>
// // // // // //   );
// // // // // // }



// // // // // 'use client';

// // // // // import React, { useId } from 'react';

// // // // // const DEFAULT_COLORS = {
// // // // //   input:        { bg: '#E1F5EE', border: '#0F6E56', text: '#085041' },
// // // // //   output:       { bg: '#FAECE7', border: '#993C1D', text: '#712B13' },
// // // // //   intermediate: { bg: '#F1EFE8', border: '#888780', text: '#444441' },
// // // // //   operationText: '#5F5E5A',
// // // // // };

// // // // // const SCROLL_CSS = `
// // // // //   .fmd-scroll-wrap {
// // // // //     overflow-x: auto;
// // // // //     overflow-y: hidden;
// // // // //     width: 100%;
// // // // //     max-width: 100%;
// // // // //     -webkit-overflow-scrolling: touch;
// // // // //     scrollbar-width: thin;
// // // // //     scrollbar-color: #b8b6ae transparent;
// // // // //     padding-bottom: 6px;
// // // // //   }
// // // // //   .fmd-scroll-wrap::-webkit-scrollbar {
// // // // //     height: 8px;
// // // // //   }
// // // // //   .fmd-scroll-wrap::-webkit-scrollbar-track {
// // // // //     background: transparent;
// // // // //   }
// // // // //   .fmd-scroll-wrap::-webkit-scrollbar-thumb {
// // // // //     background-color: #b8b6ae;
// // // // //     border-radius: 4px;
// // // // //   }
// // // // //   .fmd-svg { display: block; max-width: none; flex-shrink: 0; }
// // // // // `;

// // // // // export default function FunctionMachineDiagram({
// // // // //   steps = [],
// // // // //   inverse = null,
// // // // //   colors = {},
// // // // // }) {
// // // // //   const uid = useId().replace(/:/g, '');
// // // // //   const markerId = `fm-arr-${uid}`;

// // // // //   const c = {
// // // // //     input:         { ...DEFAULT_COLORS.input, ...colors.input },
// // // // //     output:        { ...DEFAULT_COLORS.output, ...colors.output },
// // // // //     intermediate:  { ...DEFAULT_COLORS.intermediate, ...colors.intermediate },
// // // // //     operationText: colors.operationText || DEFAULT_COLORS.operationText,
// // // // //   };

// // // // //   if (steps.length < 2) return null;

// // // // //   const hasInverse = !!inverse;

// // // // //   const BOX_H        = hasInverse ? 50 : 44;
// // // // //   const RX           = 8;
// // // // //   const CHAR_W       = 9;
// // // // //   const LABEL_CHAR_W = 7;
// // // // //   const MIN_BOX_W    = 55;
// // // // //   const MIN_GAP      = 80;
// // // // //   const PAD_L        = 20;
// // // // //   const PAD_R        = 20;
// // // // //   const PAD_TOP      = 20;
// // // // //   const PAD_BOTTOM   = hasInverse ? 36 : 20;

// // // // //   const boxW = steps.map(s => Math.max(MIN_BOX_W, s.value.length * CHAR_W + 24));

// // // // //   const gaps = [];
// // // // //   for (let i = 0; i < steps.length - 1; i++) {
// // // // //     const op = steps[i].operation || '';
// // // // //     gaps.push(Math.max(MIN_GAP, op.length * LABEL_CHAR_W + 40));
// // // // //   }

// // // // //   const contentW = boxW.reduce((a, b) => a + b, 0) + gaps.reduce((a, b) => a + b, 0);
// // // // //   const W = PAD_L + contentW + PAD_R;
// // // // //   const H = PAD_TOP + BOX_H + PAD_BOTTOM;

// // // // //   const bx = [];
// // // // //   let cx = PAD_L;
// // // // //   for (let i = 0; i < steps.length; i++) {
// // // // //     bx.push(cx);
// // // // //     if (i < steps.length - 1) cx += boxW[i] + gaps[i];
// // // // //   }

// // // // //   const by = PAD_TOP;
// // // // //   const cy = PAD_TOP + BOX_H / 2;

// // // // //   const boxColor = (i) => {
// // // // //     if (i === 0) return c.input;
// // // // //     if (i === steps.length - 1) return c.output;
// // // // //     return c.intermediate;
// // // // //   };

// // // // //   const fwdArrowColor = steps.length === 2 ? c.input.border : c.operationText;
// // // // //   const invArrowColor = c.output.border;

// // // // //   return (
// // // // //     <>
// // // // //       <style>{SCROLL_CSS}</style>
// // // // //       <div className="fmd-scroll-wrap">
// // // // //         <svg
// // // // //           className="fmd-svg"
// // // // //           width={W}
// // // // //           height={H}
// // // // //           viewBox={`0 0 ${W} ${H}`}
// // // // //           xmlns="http://www.w3.org/2000/svg"
// // // // //           role="img"
// // // // //         >
// // // // //           <title>
// // // // //             {`Function machine: ${steps.map(s => s.value).join(' \u2192 ')}`}
// // // // //           </title>

// // // // //           <defs>
// // // // //             <marker
// // // // //               id={markerId}
// // // // //               viewBox="0 0 10 10"
// // // // //               refX="8" refY="5"
// // // // //               markerWidth="6" markerHeight="6"
// // // // //               orient="auto-start-reverse"
// // // // //             >
// // // // //               <path
// // // // //                 d="M2 1L8 5L2 9"
// // // // //                 fill="none"
// // // // //                 stroke="context-stroke"
// // // // //                 strokeWidth="1.5"
// // // // //                 strokeLinecap="round"
// // // // //                 strokeLinejoin="round"
// // // // //               />
// // // // //             </marker>
// // // // //           </defs>

// // // // //           {steps.map((step, i) => {
// // // // //             const col = boxColor(i);
// // // // //             return (
// // // // //               <g key={i}>
// // // // //                 <rect
// // // // //                   x={bx[i]}
// // // // //                   y={by}
// // // // //                   width={boxW[i]}
// // // // //                   height={BOX_H}
// // // // //                   rx={RX}
// // // // //                   fill={col.bg}
// // // // //                   stroke={col.border}
// // // // //                   strokeWidth="0.5"
// // // // //                 />
// // // // //                 <text
// // // // //                   x={bx[i] + boxW[i] / 2}
// // // // //                   y={cy}
// // // // //                   textAnchor="middle"
// // // // //                   dominantBaseline="central"
// // // // //                   fontFamily="sans-serif"
// // // // //                   fontSize={14}
// // // // //                   fontWeight="500"
// // // // //                   fill={col.text}
// // // // //                 >
// // // // //                   {step.value}
// // // // //                 </text>
// // // // //               </g>
// // // // //             );
// // // // //           })}

// // // // //           {steps.map((step, i) => {
// // // // //             if (i >= steps.length - 1 || !step.operation) return null;
// // // // //             const x1 = bx[i] + boxW[i] + 2;
// // // // //             const x2 = bx[i + 1] - 2;
// // // // //             const arrowY = hasInverse ? cy - 9 : cy;

// // // // //             return (
// // // // //               <g key={`a${i}`}>
// // // // //                 <line
// // // // //                   x1={x1} y1={arrowY}
// // // // //                   x2={x2} y2={arrowY}
// // // // //                   stroke={fwdArrowColor}
// // // // //                   strokeWidth="1.5"
// // // // //                   markerEnd={`url(#${markerId})`}
// // // // //                   fill="none"
// // // // //                 />
// // // // //                 <text
// // // // //                   x={(x1 + x2) / 2}
// // // // //                   y={arrowY - 10}
// // // // //                   textAnchor="middle"
// // // // //                   fontFamily="sans-serif"
// // // // //                   fontSize={12}
// // // // //                   fill={c.operationText}
// // // // //                 >
// // // // //                   {step.operation}
// // // // //                 </text>
// // // // //               </g>
// // // // //             );
// // // // //           })}

// // // // //           {hasInverse && (() => {
// // // // //             const last = steps.length - 1;
// // // // //             const x1 = bx[last] - 2;
// // // // //             const x2 = bx[0] + boxW[0] + 2;
// // // // //             const arrowY = cy + 9;
// // // // //             const labelY = arrowY + 18;
// // // // //             const midX = (bx[0] + boxW[0] + bx[last]) / 2;

// // // // //             return (
// // // // //               <g>
// // // // //                 <line
// // // // //                   x1={x1} y1={arrowY}
// // // // //                   x2={x2} y2={arrowY}
// // // // //                   stroke={invArrowColor}
// // // // //                   strokeWidth="1.5"
// // // // //                   markerEnd={`url(#${markerId})`}
// // // // //                   fill="none"
// // // // //                 />
// // // // //                 <text
// // // // //                   x={midX}
// // // // //                   y={labelY}
// // // // //                   textAnchor="middle"
// // // // //                   fontFamily="sans-serif"
// // // // //                   fontSize={12}
// // // // //                   fill={c.operationText}
// // // // //                 >
// // // // //                   {inverse.operation}
// // // // //                 </text>
// // // // //               </g>
// // // // //             );
// // // // //           })()}
// // // // //         </svg>
// // // // //       </div>
// // // // //     </>
// // // // //   );
// // // // // }


// // // // 'use client';

// // // // import React, { useId, useRef, useState, useEffect } from 'react';

// // // // const DEFAULT_COLORS = {
// // // //   input:        { bg: '#E1F5EE', border: '#0F6E56', text: '#085041' },
// // // //   output:       { bg: '#FAECE7', border: '#993C1D', text: '#712B13' },
// // // //   intermediate: { bg: '#F1EFE8', border: '#888780', text: '#444441' },
// // // //   operationText: '#5F5E5A',
// // // // };

// // // // const SCROLL_CSS = `
// // // //   .fmd-wrap { width: 100%; max-width: 100%; }
// // // //   .fmd-svg { display: block; max-width: 100%; height: auto; }
// // // // `;

// // // // export default function FunctionMachineDiagram({
// // // //   steps = [],
// // // //   inverse = null,
// // // //   colors = {},
// // // // }) {
// // // //   const uid = useId().replace(/:/g, '');
// // // //   const markerId = `fm-arr-${uid}`;
// // // //   const wrapRef = useRef(null);
// // // //   const [containerW, setContainerW] = useState(0);

// // // //   useEffect(() => {
// // // //     const el = wrapRef.current;
// // // //     if (!el || typeof ResizeObserver === 'undefined') return;
// // // //     const ro = new ResizeObserver((entries) => {
// // // //       for (const entry of entries) {
// // // //         setContainerW(entry.contentRect.width);
// // // //       }
// // // //     });
// // // //     ro.observe(el);
// // // //     return () => ro.disconnect();
// // // //   }, []);

// // // //   const c = {
// // // //     input:         { ...DEFAULT_COLORS.input, ...colors.input },
// // // //     output:        { ...DEFAULT_COLORS.output, ...colors.output },
// // // //     intermediate:  { ...DEFAULT_COLORS.intermediate, ...colors.intermediate },
// // // //     operationText: colors.operationText || DEFAULT_COLORS.operationText,
// // // //   };

// // // //   if (steps.length < 2) return null;

// // // //   const hasInverse = !!inverse;

// // // //   const BOX_H        = hasInverse ? 50 : 44;
// // // //   const RX           = 8;
// // // //   const CHAR_W       = 9;
// // // //   const LABEL_CHAR_W = 7;
// // // //   const MIN_BOX_W    = 55;
// // // //   const MIN_GAP      = 80;
// // // //   const PAD_L        = 20;
// // // //   const PAD_R        = 20;
// // // //   const PAD_TOP      = 20;
// // // //   const PAD_BOTTOM   = hasInverse ? 36 : 20;
// // // //   const ROW_GAP      = 50;
// // // //   const TURN_MARGIN  = 12;

// // // //   const boxW = steps.map(s => Math.max(MIN_BOX_W, s.value.length * CHAR_W + 24));

// // // //   const gaps = [];
// // // //   for (let i = 0; i < steps.length - 1; i++) {
// // // //     const op = steps[i].operation || '';
// // // //     gaps.push(Math.max(MIN_GAP, op.length * LABEL_CHAR_W + 40));
// // // //   }

// // // //   const naturalContentW = boxW.reduce((a, b) => a + b, 0) + gaps.reduce((a, b) => a + b, 0);
// // // //   const naturalW = PAD_L + naturalContentW + PAD_R;

// // // //   const availableW = containerW || naturalW;
// // // //   const shouldWrap = !hasInverse && containerW > 0 && naturalW > availableW;

// // // //   let rows;
// // // //   if (shouldWrap) {
// // // //     rows = [];
// // // //     let currentRow = [0];
// // // //     let currentRowW = PAD_L + boxW[0];
// // // //     for (let i = 1; i < steps.length; i++) {
// // // //       const addW = gaps[i - 1] + boxW[i];
// // // //       if (currentRowW + addW + PAD_R <= availableW) {
// // // //         currentRow.push(i);
// // // //         currentRowW += addW;
// // // //       } else {
// // // //         rows.push(currentRow);
// // // //         currentRow = [i];
// // // //         currentRowW = PAD_L + boxW[i];
// // // //       }
// // // //     }
// // // //     rows.push(currentRow);
// // // //   } else {
// // // //     rows = [steps.map((_, i) => i)];
// // // //   }

// // // //   const rowLayouts = rows.map((row) => {
// // // //     let cx = PAD_L;
// // // //     const positions = row.map((idx, k) => {
// // // //       const pos = cx;
// // // //       cx += boxW[idx];
// // // //       if (k < row.length - 1) {
// // // //         cx += gaps[idx];
// // // //       }
// // // //       return pos;
// // // //     });
// // // //     const rowContentW = cx - PAD_L;
// // // //     return { row, positions, rowContentW };
// // // //   });

// // // //   const stepPos = new Array(steps.length);
// // // //   rowLayouts.forEach((rl, rowIdx) => {
// // // //     rl.row.forEach((stepIdx, k) => {
// // // //       stepPos[stepIdx] = { rowIdx, x: rl.positions[k] };
// // // //     });
// // // //   });

// // // //   const yForRow = (rowIdx) => PAD_TOP + rowIdx * (BOX_H + ROW_GAP);

// // // //   let W = Math.max(...rowLayouts.map(r => PAD_L + r.rowContentW + PAD_R));
// // // //   for (let i = 0; i < steps.length - 1; i++) {
// // // //     const a = stepPos[i];
// // // //     const b = stepPos[i + 1];
// // // //     if (a.rowIdx !== b.rowIdx) {
// // // //       const xRightA = a.x + boxW[i];
// // // //       const turnRightX = xRightA + TURN_MARGIN;
// // // //       const op = steps[i].operation || '';
// // // //       const labelW = op.length * LABEL_CHAR_W;
// // // //       const candidate = turnRightX + 8 + labelW + 8;
// // // //       if (candidate > W) W = candidate;
// // // //     }
// // // //   }
// // // //   const H = PAD_TOP + (BOX_H * rowLayouts.length) + (ROW_GAP * (rowLayouts.length - 1)) + PAD_BOTTOM;

// // // //   const boxColor = (i) => {
// // // //     if (i === 0) return c.input;
// // // //     if (i === steps.length - 1) return c.output;
// // // //     return c.intermediate;
// // // //   };

// // // //   const fwdArrowColor = steps.length === 2 ? c.input.border : c.operationText;
// // // //   const invArrowColor = c.output.border;

// // // //   return (
// // // //     <>
// // // //       <style>{SCROLL_CSS}</style>
// // // //       <div className="fmd-wrap" ref={wrapRef}>
// // // //         <svg
// // // //           className="fmd-svg"
// // // //           width={W}
// // // //           height={H}
// // // //           viewBox={`0 0 ${W} ${H}`}
// // // //           xmlns="http://www.w3.org/2000/svg"
// // // //           role="img"
// // // //         >
// // // //           <title>
// // // //             {`Function machine: ${steps.map(s => s.value).join(' \u2192 ')}`}
// // // //           </title>

// // // //           <defs>
// // // //             <marker
// // // //               id={markerId}
// // // //               viewBox="0 0 10 10"
// // // //               refX="8" refY="5"
// // // //               markerWidth="6" markerHeight="6"
// // // //               orient="auto-start-reverse"
// // // //             >
// // // //               <path
// // // //                 d="M2 1L8 5L2 9"
// // // //                 fill="none"
// // // //                 stroke="context-stroke"
// // // //                 strokeWidth="1.5"
// // // //                 strokeLinecap="round"
// // // //                 strokeLinejoin="round"
// // // //               />
// // // //             </marker>
// // // //           </defs>

// // // //           {steps.map((step, i) => {
// // // //             const col = boxColor(i);
// // // //             const x = stepPos[i].x;
// // // //             const y = yForRow(stepPos[i].rowIdx);
// // // //             const cyBox = y + BOX_H / 2;
// // // //             return (
// // // //               <g key={`b${i}`}>
// // // //                 <rect
// // // //                   x={x}
// // // //                   y={y}
// // // //                   width={boxW[i]}
// // // //                   height={BOX_H}
// // // //                   rx={RX}
// // // //                   fill={col.bg}
// // // //                   stroke={col.border}
// // // //                   strokeWidth="0.5"
// // // //                 />
// // // //                 <text
// // // //                   x={x + boxW[i] / 2}
// // // //                   y={cyBox}
// // // //                   textAnchor="middle"
// // // //                   dominantBaseline="central"
// // // //                   fontFamily="sans-serif"
// // // //                   fontSize={14}
// // // //                   fontWeight="500"
// // // //                   fill={col.text}
// // // //                 >
// // // //                   {step.value}
// // // //                 </text>
// // // //               </g>
// // // //             );
// // // //           })}

// // // //           {steps.map((step, i) => {
// // // //             if (i >= steps.length - 1 || !step.operation) return null;
// // // //             const a = stepPos[i];
// // // //             const b = stepPos[i + 1];
// // // //             const sameRow = a.rowIdx === b.rowIdx;

// // // //             if (sameRow) {
// // // //               const yMid = yForRow(a.rowIdx) + BOX_H / 2;
// // // //               const arrowY = hasInverse ? yMid - 9 : yMid;
// // // //               const x1 = a.x + boxW[i] + 2;
// // // //               const x2 = b.x - 2;
// // // //               return (
// // // //                 <g key={`a${i}`}>
// // // //                   <line
// // // //                     x1={x1} y1={arrowY}
// // // //                     x2={x2} y2={arrowY}
// // // //                     stroke={fwdArrowColor}
// // // //                     strokeWidth="1.5"
// // // //                     markerEnd={`url(#${markerId})`}
// // // //                     fill="none"
// // // //                   />
// // // //                   <text
// // // //                     x={(x1 + x2) / 2}
// // // //                     y={arrowY - 10}
// // // //                     textAnchor="middle"
// // // //                     fontFamily="sans-serif"
// // // //                     fontSize={12}
// // // //                     fill={c.operationText}
// // // //                   >
// // // //                     {step.operation}
// // // //                   </text>
// // // //                 </g>
// // // //               );
// // // //             }

// // // //             const yA = yForRow(a.rowIdx) + BOX_H / 2;
// // // //             const yB = yForRow(b.rowIdx) + BOX_H / 2;
// // // //             const xRightA = a.x + boxW[i];
// // // //             const xLeftB = b.x;
// // // //             const turnRightX = xRightA + TURN_MARGIN;
// // // //             const d = `M ${xRightA + 2} ${yA} H ${turnRightX} V ${yB} H ${xLeftB - 2}`;
// // // //             const labelX = turnRightX + 8;
// // // //             const labelY = (yA + yB) / 2;

// // // //             return (
// // // //               <g key={`a${i}`}>
// // // //                 <path
// // // //                   d={d}
// // // //                   stroke={fwdArrowColor}
// // // //                   strokeWidth="1.5"
// // // //                   fill="none"
// // // //                   markerEnd={`url(#${markerId})`}
// // // //                   strokeLinejoin="round"
// // // //                 />
// // // //                 <text
// // // //                   x={labelX}
// // // //                   y={labelY}
// // // //                   textAnchor="start"
// // // //                   dominantBaseline="central"
// // // //                   fontFamily="sans-serif"
// // // //                   fontSize={12}
// // // //                   fill={c.operationText}
// // // //                 >
// // // //                   {step.operation}
// // // //                 </text>
// // // //               </g>
// // // //             );
// // // //           })}

// // // //           {hasInverse && rowLayouts.length === 1 && (() => {
// // // //             const last = steps.length - 1;
// // // //             const firstX = stepPos[0].x;
// // // //             const lastX = stepPos[last].x;
// // // //             const yMid = yForRow(0) + BOX_H / 2;
// // // //             const x1 = lastX - 2;
// // // //             const x2 = firstX + boxW[0] + 2;
// // // //             const arrowY = yMid + 9;
// // // //             const labelY = arrowY + 18;
// // // //             const midX = (firstX + boxW[0] + lastX) / 2;

// // // //             return (
// // // //               <g>
// // // //                 <line
// // // //                   x1={x1} y1={arrowY}
// // // //                   x2={x2} y2={arrowY}
// // // //                   stroke={invArrowColor}
// // // //                   strokeWidth="1.5"
// // // //                   markerEnd={`url(#${markerId})`}
// // // //                   fill="none"
// // // //                 />
// // // //                 <text
// // // //                   x={midX}
// // // //                   y={labelY}
// // // //                   textAnchor="middle"
// // // //                   fontFamily="sans-serif"
// // // //                   fontSize={12}
// // // //                   fill={c.operationText}
// // // //                 >
// // // //                   {inverse.operation}
// // // //                 </text>
// // // //               </g>
// // // //             );
// // // //           })()}
// // // //         </svg>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // }



// // // // 'use client';

// // // // import React, { useId } from 'react';
// // // // import { processContent } from '../../../utils/contentProcessor';

// // // // const DEFAULT_COLORS = {
// // // //   input:        { bg: '#E1F5EE', border: '#0F6E56', text: '#085041' },
// // // //   output:       { bg: '#FAECE7', border: '#993C1D', text: '#712B13' },
// // // //   intermediate: { bg: '#F1EFE8', border: '#888780', text: '#444441' },
// // // //   operationText: '#5F5E5A',
// // // // };

// // // // const SCROLL_CSS = `
// // // //   .fmd-wrap { width: 100%; max-width: 100%; }
// // // //   .fmd-svg { display: block; max-width: 100%; height: auto; margin: 0 auto; }
// // // // `;

// // // // export default function FunctionMachineDiagram({
// // // //   steps = [],
// // // //   inverse = null,
// // // //   colors = {},
// // // // }) {
// // // //   const uid = useId().replace(/:/g, '');
// // // //   const markerId = `fm-arr-${uid}`;

// // // //   const c = {
// // // //     input:         { ...DEFAULT_COLORS.input, ...colors.input },
// // // //     output:        { ...DEFAULT_COLORS.output, ...colors.output },
// // // //     intermediate:  { ...DEFAULT_COLORS.intermediate, ...colors.intermediate },
// // // //     operationText: colors.operationText || DEFAULT_COLORS.operationText,
// // // //   };

// // // //   if (steps.length < 2) return null;

// // // //   const hasInverse = !!inverse;
// // // //   const vertical = !hasInverse && steps.length > 3;

// // // //   const BOX_H        = hasInverse ? 50 : 44;
// // // //   const RX           = 8;
// // // //   const CHAR_W       = 9;
// // // //   const LABEL_CHAR_W = 7;
// // // //   const MIN_BOX_W    = 55;
// // // //   const MIN_GAP      = 80;
// // // //   const PAD_L        = 20;
// // // //   const PAD_R        = 20;
// // // //   const PAD_TOP      = 20;
// // // //   const PAD_BOTTOM   = hasInverse ? 36 : 20;
// // // //   const VERT_GAP     = 56;

// // // //   const boxW = steps.map(s => Math.max(MIN_BOX_W, s.value.length * CHAR_W + 24));

// // // //   const boxColor = (i) => {
// // // //     if (i === 0) return c.input;
// // // //     if (i === steps.length - 1) return c.output;
// // // //     return c.intermediate;
// // // //   };

// // // //   const fwdArrowColor = steps.length === 2 ? c.input.border : c.operationText;
// // // //   const invArrowColor = c.output.border;

// // // //   const arrowMarker = (
// // // //     <defs>
// // // //       <marker
// // // //         id={markerId}
// // // //         viewBox="0 0 10 10"
// // // //         refX="8" refY="5"
// // // //         markerWidth="6" markerHeight="6"
// // // //         orient="auto-start-reverse"
// // // //       >
// // // //         <path
// // // //           d="M2 1L8 5L2 9"
// // // //           fill="none"
// // // //           stroke="context-stroke"
// // // //           strokeWidth="1.5"
// // // //           strokeLinecap="round"
// // // //           strokeLinejoin="round"
// // // //         />
// // // //       </marker>
// // // //     </defs>
// // // //   );

// // // //   if (vertical) {
// // // //     const maxBoxW = Math.max(...boxW);
// // // //     let maxLabelW = 0;
// // // //     for (let i = 0; i < steps.length - 1; i++) {
// // // //       const op = steps[i].operation || '';
// // // //       maxLabelW = Math.max(maxLabelW, op.length * LABEL_CHAR_W);
// // // //     }
// // // //     const ARROW_LABEL_GAP = 10;
// // // //     const W = PAD_L + maxBoxW + ARROW_LABEL_GAP + maxLabelW + PAD_R;
// // // //     const H = PAD_TOP + steps.length * BOX_H + (steps.length - 1) * VERT_GAP + PAD_BOTTOM;
// // // //     const centerX = PAD_L + maxBoxW / 2;

// // // //     const yForStep = (i) => PAD_TOP + i * (BOX_H + VERT_GAP);

// // // //     return (
// // // //       <>
// // // //         <style>{SCROLL_CSS}</style>
// // // //         <div className="fmd-wrap">
// // // //           <svg
// // // //             className="fmd-svg"
// // // //             width={W}
// // // //             height={H}
// // // //             viewBox={`0 0 ${W} ${H}`}
// // // //             xmlns="http://www.w3.org/2000/svg"
// // // //             role="img"
// // // //           >
// // // //             <title>
// // // //               {`Function machine: ${steps.map(s => s.value).join(' \u2192 ')}`}
// // // //             </title>
// // // //             {arrowMarker}

// // // //             {steps.map((step, i) => {
// // // //               const col = boxColor(i);
// // // //               const x = centerX - boxW[i] / 2;
// // // //               const y = yForStep(i);
// // // //               return (
// // // //                 <g key={`b${i}`}>
// // // //                   <rect
// // // //                     x={x}
// // // //                     y={y}
// // // //                     width={boxW[i]}
// // // //                     height={BOX_H}
// // // //                     rx={RX}
// // // //                     fill={col.bg}
// // // //                     stroke={col.border}
// // // //                     strokeWidth="0.5"
// // // //                   />
// // // //                   <text
// // // //                     x={centerX}
// // // //                     y={y + BOX_H / 2}
// // // //                     textAnchor="middle"
// // // //                     dominantBaseline="central"
// // // //                     fontFamily="sans-serif"
// // // //                     fontSize={14}
// // // //                     fontWeight="500"
// // // //                     fill={col.text}
// // // //                   >
// // // //                     {step.value}
// // // //                   </text>
// // // //                 </g>
// // // //               );
// // // //             })}

// // // //             {steps.map((step, i) => {
// // // //               if (i >= steps.length - 1 || !step.operation) return null;
// // // //               const y1 = yForStep(i) + BOX_H + 2;
// // // //               const y2 = yForStep(i + 1) - 2;
// // // //               const labelX = centerX + maxBoxW / 2 + ARROW_LABEL_GAP;
// // // //               const labelY = (y1 + y2) / 2;
// // // //               return (
// // // //                 <g key={`a${i}`}>
// // // //                   <line
// // // //                     x1={centerX} y1={y1}
// // // //                     x2={centerX} y2={y2}
// // // //                     stroke={fwdArrowColor}
// // // //                     strokeWidth="1.5"
// // // //                     markerEnd={`url(#${markerId})`}
// // // //                     fill="none"
// // // //                   />
// // // //                   <text
// // // //                     x={labelX}
// // // //                     y={labelY}
// // // //                     textAnchor="start"
// // // //                     dominantBaseline="central"
// // // //                     fontFamily="sans-serif"
// // // //                     fontSize={12}
// // // //                     fill={c.operationText}
// // // //                   >
// // // //                     {step.operation}
// // // //                   </text>
// // // //                 </g>
// // // //               );
// // // //             })}
// // // //           </svg>
// // // //         </div>
// // // //       </>
// // // //     );
// // // //   }

// // // //   const gaps = [];
// // // //   for (let i = 0; i < steps.length - 1; i++) {
// // // //     const op = steps[i].operation || '';
// // // //     gaps.push(Math.max(MIN_GAP, op.length * LABEL_CHAR_W + 40));
// // // //   }

// // // //   const contentW = boxW.reduce((a, b) => a + b, 0) + gaps.reduce((a, b) => a + b, 0);
// // // //   const W = PAD_L + contentW + PAD_R;
// // // //   const H = PAD_TOP + BOX_H + PAD_BOTTOM;

// // // //   const bx = [];
// // // //   let cx = PAD_L;
// // // //   for (let i = 0; i < steps.length; i++) {
// // // //     bx.push(cx);
// // // //     if (i < steps.length - 1) cx += boxW[i] + gaps[i];
// // // //   }

// // // //   const by = PAD_TOP;
// // // //   const cy = PAD_TOP + BOX_H / 2;

// // // //   return (
// // // //     <>
// // // //       <style>{SCROLL_CSS}</style>
// // // //       <div className="fmd-wrap">
// // // //         <svg
// // // //           className="fmd-svg"
// // // //           width={W}
// // // //           height={H}
// // // //           viewBox={`0 0 ${W} ${H}`}
// // // //           xmlns="http://www.w3.org/2000/svg"
// // // //           role="img"
// // // //         >
// // // //           <title>
// // // //             {`Function machine: ${steps.map(s => s.value).join(' \u2192 ')}`}
// // // //           </title>
// // // //           {arrowMarker}

// // // //           {steps.map((step, i) => {
// // // //             const col = boxColor(i);
// // // //             return (
// // // //               <g key={`b${i}`}>
// // // //                 <rect
// // // //                   x={bx[i]}
// // // //                   y={by}
// // // //                   width={boxW[i]}
// // // //                   height={BOX_H}
// // // //                   rx={RX}
// // // //                   fill={col.bg}
// // // //                   stroke={col.border}
// // // //                   strokeWidth="0.5"
// // // //                 />
// // // //                 <text
// // // //                   x={bx[i] + boxW[i] / 2}
// // // //                   y={cy}
// // // //                   textAnchor="middle"
// // // //                   dominantBaseline="central"
// // // //                   fontFamily="sans-serif"
// // // //                   fontSize={14}
// // // //                   fontWeight="500"
// // // //                   fill={col.text}
// // // //                 >
// // // //                   {step.value}
// // // //                 </text>
// // // //               </g>
// // // //             );
// // // //           })}

// // // //           {steps.map((step, i) => {
// // // //             if (i >= steps.length - 1 || !step.operation) return null;
// // // //             const x1 = bx[i] + boxW[i] + 2;
// // // //             const x2 = bx[i + 1] - 2;
// // // //             const arrowY = hasInverse ? cy - 9 : cy;

// // // //             return (
// // // //               <g key={`a${i}`}>
// // // //                 <line
// // // //                   x1={x1} y1={arrowY}
// // // //                   x2={x2} y2={arrowY}
// // // //                   stroke={fwdArrowColor}
// // // //                   strokeWidth="1.5"
// // // //                   markerEnd={`url(#${markerId})`}
// // // //                   fill="none"
// // // //                 />
// // // //                 <text
// // // //                   x={(x1 + x2) / 2}
// // // //                   y={arrowY - 10}
// // // //                   textAnchor="middle"
// // // //                   fontFamily="sans-serif"
// // // //                   fontSize={12}
// // // //                   fill={c.operationText}
// // // //                 >
// // // //                   {step.operation}
// // // //                 </text>
// // // //               </g>
// // // //             );
// // // //           })}

// // // //           {hasInverse && (() => {
// // // //             const last = steps.length - 1;
// // // //             const x1 = bx[last] - 2;
// // // //             const x2 = bx[0] + boxW[0] + 2;
// // // //             const arrowY = cy + 9;
// // // //             const labelY = arrowY + 18;
// // // //             const midX = (bx[0] + boxW[0] + bx[last]) / 2;

// // // //             return (
// // // //               <g>
// // // //                 <line
// // // //                   x1={x1} y1={arrowY}
// // // //                   x2={x2} y2={arrowY}
// // // //                   stroke={invArrowColor}
// // // //                   strokeWidth="1.5"
// // // //                   markerEnd={`url(#${markerId})`}
// // // //                   fill="none"
// // // //                 />
// // // //                 <text
// // // //                   x={midX}
// // // //                   y={labelY}
// // // //                   textAnchor="middle"
// // // //                   fontFamily="sans-serif"
// // // //                   fontSize={12}
// // // //                   fill={c.operationText}
// // // //                 >
// // // //                   {inverse.operation}
// // // //                 </text>
// // // //               </g>
// // // //             );
// // // //           })()}
// // // //         </svg>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // }



// // // 'use client';

// // // import React, { useId } from 'react';
// // // import { processContent } from '../../../utils/contentProcessor';

// // // const DEFAULT_COLORS = {
// // //   input:        { bg: '#E1F5EE', border: '#0F6E56', text: '#085041' },
// // //   output:       { bg: '#FAECE7', border: '#993C1D', text: '#712B13' },
// // //   intermediate: { bg: '#F1EFE8', border: '#888780', text: '#444441' },
// // //   operationText: '#5F5E5A',
// // // };

// // // const SCROLL_CSS = `
// // //   .fmd-wrap { width: 100%; max-width: 100%; }
// // //   .fmd-svg { display: block; max-width: 100%; height: auto; margin: 0 auto; overflow: visible; }
// // //   .fmd-cell { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-family: sans-serif; line-height: 1; overflow: visible; }
// // //   .fmd-cell .katex { font-size: 1em; }
// // //   .fmd-label { width: 100%; height: 100%; display: flex; align-items: center; font-family: sans-serif; line-height: 1; font-size: 12px; color: #5F5E5A; overflow: visible; }
// // //   .fmd-label .katex { font-size: 1em; }
// // // `;

// // // // Estimate visible character count after KaTeX renders (strip LaTeX markup)
// // // const VISIBLE_NAMES = ['arcsin','arccos','arctan','sinh','cosh','tanh','sin','cos','tan','cot','sec','csc','log','ln','exp','det','min','max','lim','sup','inf'];
// // // const GREEK_MAP = { alpha:'α', beta:'β', gamma:'γ', delta:'δ', epsilon:'ε', zeta:'ζ', eta:'η', theta:'θ', iota:'ι', kappa:'κ', lambda:'λ', mu:'μ', nu:'ν', xi:'ξ', pi:'π', rho:'ρ', sigma:'σ', tau:'τ', phi:'φ', chi:'χ', psi:'ψ', omega:'ω' };

// // // const visibleLen = (s) => {
// // //   if (!s) return 0;
// // //   let str = String(s);
// // //   str = str.replace(/\$/g, '');
// // //   VISIBLE_NAMES.forEach(op => { str = str.replace(new RegExp('\\\\' + op + '\\b', 'g'), op); });
// // //   Object.entries(GREEK_MAP).forEach(([name, ch]) => { str = str.replace(new RegExp('\\\\' + name + '\\b', 'gi'), ch); });
// // //   str = str.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '$1/$2');
// // //   str = str.replace(/\\sqrt\{([^{}]*)\}/g, '√$1');
// // //   str = str.replace(/\\cdot/g, '·');
// // //   str = str.replace(/\\times/g, '×');
// // //   str = str.replace(/\\to|\\rightarrow/g, '→');
// // //   str = str.replace(/\\(?:left|right)/g, '');
// // //   str = str.replace(/\\,|\\!|\\;|\\:|\\quad|\\qquad/g, '');
// // //   str = str.replace(/\\[a-zA-Z]+\s?/g, '');
// // //   str = str.replace(/[{}^_]/g, '');
// // //   return str.length;
// // // };

// // // export default function FunctionMachineDiagram({
// // //   steps = [],
// // //   inverse = null,
// // //   colors = {},
// // // }) {
// // //   const uid = useId().replace(/:/g, '');
// // //   const markerId = `fm-arr-${uid}`;

// // //   const c = {
// // //     input:         { ...DEFAULT_COLORS.input, ...colors.input },
// // //     output:        { ...DEFAULT_COLORS.output, ...colors.output },
// // //     intermediate:  { ...DEFAULT_COLORS.intermediate, ...colors.intermediate },
// // //     operationText: colors.operationText || DEFAULT_COLORS.operationText,
// // //   };

// // //   if (steps.length < 2) return null;

// // //   const hasInverse = !!inverse;
// // //   const vertical = !hasInverse && steps.length > 3;

// // //   const BOX_H        = hasInverse ? 50 : 44;
// // //   const RX           = 8;
// // //   const CHAR_W       = 10;
// // //   const LABEL_CHAR_W = 7.5;
// // //   const MIN_BOX_W    = 60;
// // //   const MIN_GAP      = 80;
// // //   const PAD_L        = 20;
// // //   const PAD_R        = 20;
// // //   const PAD_TOP      = 20;
// // //   const PAD_BOTTOM   = hasInverse ? 36 : 20;
// // //   const VERT_GAP     = 56;
// // //   const LABEL_H      = 20;

// // //   const boxW = steps.map(s => Math.max(MIN_BOX_W, visibleLen(s.value) * CHAR_W + 28));

// // //   const boxColor = (i) => {
// // //     if (i === 0) return c.input;
// // //     if (i === steps.length - 1) return c.output;
// // //     return c.intermediate;
// // //   };

// // //   const fwdArrowColor = steps.length === 2 ? c.input.border : c.operationText;
// // //   const invArrowColor = c.output.border;

// // //   const arrowMarker = (
// // //     <defs>
// // //       <marker
// // //         id={markerId}
// // //         viewBox="0 0 10 10"
// // //         refX="8" refY="5"
// // //         markerWidth="6" markerHeight="6"
// // //         orient="auto-start-reverse"
// // //       >
// // //         <path
// // //           d="M2 1L8 5L2 9"
// // //           fill="none"
// // //           stroke="context-stroke"
// // //           strokeWidth="1.5"
// // //           strokeLinecap="round"
// // //           strokeLinejoin="round"
// // //         />
// // //       </marker>
// // //     </defs>
// // //   );

// // //   const valueCell = (step, x, y, w, h, col) => (
// // //     <foreignObject x={x} y={y} width={w} height={h} style={{ overflow: 'visible' }}>
// // //       <div
// // //         xmlns="http://www.w3.org/1999/xhtml"
// // //         className="fmd-cell"
// // //         style={{ fontSize: '14px', fontWeight: 500, color: col.text }}
// // //       >
// // //         {processContent(step.value)}
// // //       </div>
// // //     </foreignObject>
// // //   );

// // //   const labelCell = (text, x, y, w, h, align = 'center') => (
// // //     <foreignObject x={x} y={y} width={w} height={h} style={{ overflow: 'visible' }}>
// // //       <div
// // //         xmlns="http://www.w3.org/1999/xhtml"
// // //         className="fmd-label"
// // //         style={{ justifyContent: align === 'start' ? 'flex-start' : 'center', color: c.operationText }}
// // //       >
// // //         {processContent(text)}
// // //       </div>
// // //     </foreignObject>
// // //   );

// // //   if (vertical) {
// // //     const maxBoxW = Math.max(...boxW);
// // //     let maxLabelW = 0;
// // //     for (let i = 0; i < steps.length - 1; i++) {
// // //       const op = steps[i].operation || '';
// // //       maxLabelW = Math.max(maxLabelW, visibleLen(op) * LABEL_CHAR_W);
// // //     }
// // //     const ARROW_LABEL_GAP = 10;
// // //     const W = PAD_L + maxBoxW + ARROW_LABEL_GAP + maxLabelW + PAD_R + 8;
// // //     const H = PAD_TOP + steps.length * BOX_H + (steps.length - 1) * VERT_GAP + PAD_BOTTOM;
// // //     const centerX = PAD_L + maxBoxW / 2;

// // //     const yForStep = (i) => PAD_TOP + i * (BOX_H + VERT_GAP);

// // //     return (
// // //       <>
// // //         <style>{SCROLL_CSS}</style>
// // //         <div className="fmd-wrap">
// // //           <svg
// // //             className="fmd-svg"
// // //             width={W}
// // //             height={H}
// // //             viewBox={`0 0 ${W} ${H}`}
// // //             xmlns="http://www.w3.org/2000/svg"
// // //             role="img"
// // //           >
// // //             <title>Function machine</title>
// // //             {arrowMarker}

// // //             {steps.map((step, i) => {
// // //               const col = boxColor(i);
// // //               const x = centerX - boxW[i] / 2;
// // //               const y = yForStep(i);
// // //               return (
// // //                 <g key={`b${i}`}>
// // //                   <rect
// // //                     x={x}
// // //                     y={y}
// // //                     width={boxW[i]}
// // //                     height={BOX_H}
// // //                     rx={RX}
// // //                     fill={col.bg}
// // //                     stroke={col.border}
// // //                     strokeWidth="0.5"
// // //                   />
// // //                   {valueCell(step, x, y, boxW[i], BOX_H, col)}
// // //                 </g>
// // //               );
// // //             })}

// // //             {steps.map((step, i) => {
// // //               if (i >= steps.length - 1 || !step.operation) return null;
// // //               const y1 = yForStep(i) + BOX_H + 2;
// // //               const y2 = yForStep(i + 1) - 2;
// // //               const labelX = centerX + maxBoxW / 2 + ARROW_LABEL_GAP;
// // //               const labelY = (y1 + y2) / 2 - LABEL_H / 2;
// // //               return (
// // //                 <g key={`a${i}`}>
// // //                   <line
// // //                     x1={centerX} y1={y1}
// // //                     x2={centerX} y2={y2}
// // //                     stroke={fwdArrowColor}
// // //                     strokeWidth="1.5"
// // //                     markerEnd={`url(#${markerId})`}
// // //                     fill="none"
// // //                   />
// // //                   {labelCell(step.operation, labelX, labelY, maxLabelW + 20, LABEL_H, 'start')}
// // //                 </g>
// // //               );
// // //             })}
// // //           </svg>
// // //         </div>
// // //       </>
// // //     );
// // //   }

// // //   const gaps = [];
// // //   for (let i = 0; i < steps.length - 1; i++) {
// // //     const op = steps[i].operation || '';
// // //     gaps.push(Math.max(MIN_GAP, visibleLen(op) * LABEL_CHAR_W + 40));
// // //   }

// // //   const contentW = boxW.reduce((a, b) => a + b, 0) + gaps.reduce((a, b) => a + b, 0);
// // //   const W = PAD_L + contentW + PAD_R;
// // //   const H = PAD_TOP + BOX_H + PAD_BOTTOM;

// // //   const bx = [];
// // //   let cx = PAD_L;
// // //   for (let i = 0; i < steps.length; i++) {
// // //     bx.push(cx);
// // //     if (i < steps.length - 1) cx += boxW[i] + gaps[i];
// // //   }

// // //   const by = PAD_TOP;
// // //   const cy = PAD_TOP + BOX_H / 2;

// // //   return (
// // //     <>
// // //       <style>{SCROLL_CSS}</style>
// // //       <div className="fmd-wrap">
// // //         <svg
// // //           className="fmd-svg"
// // //           width={W}
// // //           height={H}
// // //           viewBox={`0 0 ${W} ${H}`}
// // //           xmlns="http://www.w3.org/2000/svg"
// // //           role="img"
// // //         >
// // //           <title>Function machine</title>
// // //           {arrowMarker}

// // //           {steps.map((step, i) => {
// // //             const col = boxColor(i);
// // //             return (
// // //               <g key={`b${i}`}>
// // //                 <rect
// // //                   x={bx[i]}
// // //                   y={by}
// // //                   width={boxW[i]}
// // //                   height={BOX_H}
// // //                   rx={RX}
// // //                   fill={col.bg}
// // //                   stroke={col.border}
// // //                   strokeWidth="0.5"
// // //                 />
// // //                 {valueCell(step, bx[i], by, boxW[i], BOX_H, col)}
// // //               </g>
// // //             );
// // //           })}

// // //           {steps.map((step, i) => {
// // //             if (i >= steps.length - 1 || !step.operation) return null;
// // //             const x1 = bx[i] + boxW[i] + 2;
// // //             const x2 = bx[i + 1] - 2;
// // //             const arrowY = hasInverse ? cy - 9 : cy;
// // //             const labelW = x2 - x1;

// // //             return (
// // //               <g key={`a${i}`}>
// // //                 <line
// // //                   x1={x1} y1={arrowY}
// // //                   x2={x2} y2={arrowY}
// // //                   stroke={fwdArrowColor}
// // //                   strokeWidth="1.5"
// // //                   markerEnd={`url(#${markerId})`}
// // //                   fill="none"
// // //                 />
// // //                 {labelCell(step.operation, x1, arrowY - LABEL_H - 2, labelW, LABEL_H, 'center')}
// // //               </g>
// // //             );
// // //           })}

// // //           {hasInverse && (() => {
// // //             const last = steps.length - 1;
// // //             const x1 = bx[last] - 2;
// // //             const x2 = bx[0] + boxW[0] + 2;
// // //             const arrowY = cy + 9;
// // //             const labelY = arrowY + 4;
// // //             const labelW = bx[last] - (bx[0] + boxW[0]);

// // //             return (
// // //               <g>
// // //                 <line
// // //                   x1={x1} y1={arrowY}
// // //                   x2={x2} y2={arrowY}
// // //                   stroke={invArrowColor}
// // //                   strokeWidth="1.5"
// // //                   markerEnd={`url(#${markerId})`}
// // //                   fill="none"
// // //                 />
// // //                 {labelCell(inverse.operation, bx[0] + boxW[0], labelY, labelW, LABEL_H, 'center')}
// // //               </g>
// // //             );
// // //           })()}
// // //         </svg>
// // //       </div>
// // //     </>
// // //   );
// // // }


// // 'use client';

// // import React, { useId } from 'react';
// // import { processContent } from '../../../utils/contentProcessor';

// // const DEFAULT_COLORS = {
// //   input:        { bg: '#E1F5EE', border: '#0F6E56', text: '#085041' },
// //   output:       { bg: '#FAECE7', border: '#993C1D', text: '#712B13' },
// //   intermediate: { bg: '#F1EFE8', border: '#888780', text: '#444441' },
// //   operationText: '#5F5E5A',
// // };

// // const SCROLL_CSS = `
// //   .fmd-wrap { width: 100%; max-width: 100%; }
// //   .fmd-svg { display: block; max-width: 100%; height: auto; margin: 0 auto; overflow: visible; }
// //   .fmd-cell { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-family: sans-serif; line-height: 1.1; overflow: visible; font-size: 17px; }
// //   .fmd-cell .katex { font-size: 1.15em; }
// //   .fmd-label { width: 100%; height: 100%; display: flex; align-items: center; font-family: sans-serif; line-height: 1.1; font-size: 14px; color: #5F5E5A; overflow: visible; }
// //   .fmd-label .katex { font-size: 1.1em; }
// // `;

// // // Estimate visible character count after KaTeX renders (strip LaTeX markup)
// // const VISIBLE_NAMES = ['arcsin','arccos','arctan','sinh','cosh','tanh','sin','cos','tan','cot','sec','csc','log','ln','exp','det','min','max','lim','sup','inf'];
// // const GREEK_MAP = { alpha:'α', beta:'β', gamma:'γ', delta:'δ', epsilon:'ε', zeta:'ζ', eta:'η', theta:'θ', iota:'ι', kappa:'κ', lambda:'λ', mu:'μ', nu:'ν', xi:'ξ', pi:'π', rho:'ρ', sigma:'σ', tau:'τ', phi:'φ', chi:'χ', psi:'ψ', omega:'ω' };

// // const visibleLen = (s) => {
// //   if (!s) return 0;
// //   let str = String(s);
// //   str = str.replace(/\$/g, '');
// //   VISIBLE_NAMES.forEach(op => { str = str.replace(new RegExp('\\\\' + op + '\\b', 'g'), op); });
// //   Object.entries(GREEK_MAP).forEach(([name, ch]) => { str = str.replace(new RegExp('\\\\' + name + '\\b', 'gi'), ch); });
// //   str = str.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '$1/$2');
// //   str = str.replace(/\\sqrt\{([^{}]*)\}/g, '√$1');
// //   str = str.replace(/\\cdot/g, '·');
// //   str = str.replace(/\\times/g, '×');
// //   str = str.replace(/\\to|\\rightarrow/g, '→');
// //   str = str.replace(/\\(?:left|right)/g, '');
// //   str = str.replace(/\\,|\\!|\\;|\\:|\\quad|\\qquad/g, '');
// //   str = str.replace(/\\[a-zA-Z]+\s?/g, '');
// //   str = str.replace(/[{}^_]/g, '');
// //   return str.length;
// // };

// // export default function FunctionMachineDiagram({
// //   steps = [],
// //   inverse = null,
// //   colors = {},
// // }) {
// //   const uid = useId().replace(/:/g, '');
// //   const markerId = `fm-arr-${uid}`;

// //   const c = {
// //     input:         { ...DEFAULT_COLORS.input, ...colors.input },
// //     output:        { ...DEFAULT_COLORS.output, ...colors.output },
// //     intermediate:  { ...DEFAULT_COLORS.intermediate, ...colors.intermediate },
// //     operationText: colors.operationText || DEFAULT_COLORS.operationText,
// //   };

// //   if (steps.length < 2) return null;

// //   const hasInverse = !!inverse;
// //   const vertical = !hasInverse && steps.length > 3;

// //   const BOX_H        = hasInverse ? 58 : 52;
// //   const RX           = 8;
// //   const CHAR_W       = 12;
// //   const LABEL_CHAR_W = 9;
// //   const MIN_BOX_W    = 70;
// //   const MIN_GAP      = 90;
// //   const PAD_L        = 20;
// //   const PAD_R        = 20;
// //   const PAD_TOP      = 22;
// //   const PAD_BOTTOM   = hasInverse ? 40 : 22;
// //   const VERT_GAP     = 60;
// //   const LABEL_H      = 24;

// //   const boxW = steps.map(s => Math.max(MIN_BOX_W, visibleLen(s.value) * CHAR_W + 28));

// //   const boxColor = (i) => {
// //     if (i === 0) return c.input;
// //     if (i === steps.length - 1) return c.output;
// //     return c.intermediate;
// //   };

// //   const fwdArrowColor = steps.length === 2 ? c.input.border : c.operationText;
// //   const invArrowColor = c.output.border;

// //   const arrowMarker = (
// //     <defs>
// //       <marker
// //         id={markerId}
// //         viewBox="0 0 10 10"
// //         refX="8" refY="5"
// //         markerWidth="6" markerHeight="6"
// //         orient="auto-start-reverse"
// //       >
// //         <path
// //           d="M2 1L8 5L2 9"
// //           fill="none"
// //           stroke="context-stroke"
// //           strokeWidth="1.5"
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //         />
// //       </marker>
// //     </defs>
// //   );

// //   const valueCell = (step, x, y, w, h, col) => (
// //     <foreignObject x={x} y={y} width={w} height={h} style={{ overflow: 'visible' }}>
// //       <div
// //         xmlns="http://www.w3.org/1999/xhtml"
// //         className="fmd-cell"
// //         style={{ fontSize: '17px', fontWeight: 500, color: col.text }}
// //       >
// //         {processContent(step.value)}
// //       </div>
// //     </foreignObject>
// //   );

// //   const labelCell = (text, x, y, w, h, align = 'center') => (
// //     <foreignObject x={x} y={y} width={w} height={h} style={{ overflow: 'visible' }}>
// //       <div
// //         xmlns="http://www.w3.org/1999/xhtml"
// //         className="fmd-label"
// //         style={{ justifyContent: align === 'start' ? 'flex-start' : 'center', color: c.operationText }}
// //       >
// //         {processContent(text)}
// //       </div>
// //     </foreignObject>
// //   );

// //   if (vertical) {
// //     const maxBoxW = Math.max(...boxW);
// //     let maxLabelW = 0;
// //     for (let i = 0; i < steps.length - 1; i++) {
// //       const op = steps[i].operation || '';
// //       maxLabelW = Math.max(maxLabelW, visibleLen(op) * LABEL_CHAR_W);
// //     }
// //     const ARROW_LABEL_GAP = 10;
// //     const W = PAD_L + maxBoxW + ARROW_LABEL_GAP + maxLabelW + PAD_R + 8;
// //     const H = PAD_TOP + steps.length * BOX_H + (steps.length - 1) * VERT_GAP + PAD_BOTTOM;
// //     const centerX = PAD_L + maxBoxW / 2;

// //     const yForStep = (i) => PAD_TOP + i * (BOX_H + VERT_GAP);

// //     return (
// //       <>
// //         <style>{SCROLL_CSS}</style>
// //         <div className="fmd-wrap">
// //           <svg
// //             className="fmd-svg"
// //             width={W}
// //             height={H}
// //             viewBox={`0 0 ${W} ${H}`}
// //             xmlns="http://www.w3.org/2000/svg"
// //             role="img"
// //           >
// //             <title>Function machine</title>
// //             {arrowMarker}

// //             {steps.map((step, i) => {
// //               const col = boxColor(i);
// //               const x = centerX - boxW[i] / 2;
// //               const y = yForStep(i);
// //               return (
// //                 <g key={`b${i}`}>
// //                   <rect
// //                     x={x}
// //                     y={y}
// //                     width={boxW[i]}
// //                     height={BOX_H}
// //                     rx={RX}
// //                     fill={col.bg}
// //                     stroke={col.border}
// //                     strokeWidth="0.5"
// //                   />
// //                   {valueCell(step, x, y, boxW[i], BOX_H, col)}
// //                 </g>
// //               );
// //             })}

// //             {steps.map((step, i) => {
// //               if (i >= steps.length - 1 || !step.operation) return null;
// //               const y1 = yForStep(i) + BOX_H + 2;
// //               const y2 = yForStep(i + 1) - 2;
// //               const labelX = centerX + maxBoxW / 2 + ARROW_LABEL_GAP;
// //               const labelY = (y1 + y2) / 2 - LABEL_H / 2;
// //               return (
// //                 <g key={`a${i}`}>
// //                   <line
// //                     x1={centerX} y1={y1}
// //                     x2={centerX} y2={y2}
// //                     stroke={fwdArrowColor}
// //                     strokeWidth="1.5"
// //                     markerEnd={`url(#${markerId})`}
// //                     fill="none"
// //                   />
// //                   {labelCell(step.operation, labelX, labelY, maxLabelW + 20, LABEL_H, 'start')}
// //                 </g>
// //               );
// //             })}
// //           </svg>
// //         </div>
// //       </>
// //     );
// //   }

// //   const gaps = [];
// //   for (let i = 0; i < steps.length - 1; i++) {
// //     const op = steps[i].operation || '';
// //     gaps.push(Math.max(MIN_GAP, visibleLen(op) * LABEL_CHAR_W + 40));
// //   }

// //   const contentW = boxW.reduce((a, b) => a + b, 0) + gaps.reduce((a, b) => a + b, 0);
// //   const W = PAD_L + contentW + PAD_R;
// //   const H = PAD_TOP + BOX_H + PAD_BOTTOM;

// //   const bx = [];
// //   let cx = PAD_L;
// //   for (let i = 0; i < steps.length; i++) {
// //     bx.push(cx);
// //     if (i < steps.length - 1) cx += boxW[i] + gaps[i];
// //   }

// //   const by = PAD_TOP;
// //   const cy = PAD_TOP + BOX_H / 2;

// //   return (
// //     <>
// //       <style>{SCROLL_CSS}</style>
// //       <div className="fmd-wrap">
// //         <svg
// //           className="fmd-svg"
// //           width={W}
// //           height={H}
// //           viewBox={`0 0 ${W} ${H}`}
// //           xmlns="http://www.w3.org/2000/svg"
// //           role="img"
// //         >
// //           <title>Function machine</title>
// //           {arrowMarker}

// //           {steps.map((step, i) => {
// //             const col = boxColor(i);
// //             return (
// //               <g key={`b${i}`}>
// //                 <rect
// //                   x={bx[i]}
// //                   y={by}
// //                   width={boxW[i]}
// //                   height={BOX_H}
// //                   rx={RX}
// //                   fill={col.bg}
// //                   stroke={col.border}
// //                   strokeWidth="0.5"
// //                 />
// //                 {valueCell(step, bx[i], by, boxW[i], BOX_H, col)}
// //               </g>
// //             );
// //           })}

// //           {steps.map((step, i) => {
// //             if (i >= steps.length - 1 || !step.operation) return null;
// //             const x1 = bx[i] + boxW[i] + 2;
// //             const x2 = bx[i + 1] - 2;
// //             const arrowY = hasInverse ? cy - 9 : cy;
// //             const labelW = x2 - x1;

// //             return (
// //               <g key={`a${i}`}>
// //                 <line
// //                   x1={x1} y1={arrowY}
// //                   x2={x2} y2={arrowY}
// //                   stroke={fwdArrowColor}
// //                   strokeWidth="1.5"
// //                   markerEnd={`url(#${markerId})`}
// //                   fill="none"
// //                 />
// //                 {labelCell(step.operation, x1, arrowY - LABEL_H - 2, labelW, LABEL_H, 'center')}
// //               </g>
// //             );
// //           })}

// //           {hasInverse && (() => {
// //             const last = steps.length - 1;
// //             const x1 = bx[last] - 2;
// //             const x2 = bx[0] + boxW[0] + 2;
// //             const arrowY = cy + 9;
// //             const labelY = arrowY + 4;
// //             const labelW = bx[last] - (bx[0] + boxW[0]);

// //             return (
// //               <g>
// //                 <line
// //                   x1={x1} y1={arrowY}
// //                   x2={x2} y2={arrowY}
// //                   stroke={invArrowColor}
// //                   strokeWidth="1.5"
// //                   markerEnd={`url(#${markerId})`}
// //                   fill="none"
// //                 />
// //                 {labelCell(inverse.operation, bx[0] + boxW[0], labelY, labelW, LABEL_H, 'center')}
// //               </g>
// //             );
// //           })()}
// //         </svg>
// //       </div>
// //     </>
// //   );
// // }


// 'use client';

// import React, { useId } from 'react';
// import { processContent } from '../../../utils/contentProcessor';

// const DEFAULT_COLORS = {
//   input:        { bg: '#E1F5EE', border: '#0F6E56', text: '#085041' },
//   output:       { bg: '#FAECE7', border: '#993C1D', text: '#712B13' },
//   intermediate: { bg: '#F1EFE8', border: '#888780', text: '#444441' },
//   operationText: '#5F5E5A',
// };

// const SCROLL_CSS = `
//   .fmd-wrap { width: 100%; max-width: 100%; }
//   .fmd-svg { display: block; max-width: 100%; height: auto; margin: 0 auto; overflow: visible; }
//   .fmd-cell { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-family: sans-serif; line-height: 1.1; overflow: visible; font-size: 17px; }
//   .fmd-cell .katex { font-size: 1.15em; }
//   .fmd-label { width: 100%; height: 100%; display: flex; align-items: center; font-family: sans-serif; line-height: 1.1; font-size: 16px; color: #5F5E5A; overflow: visible; }
//   .fmd-label .katex { font-size: 1.15em; }
// `;

// // Estimate visible character count after KaTeX renders (strip LaTeX markup)
// const VISIBLE_NAMES = ['arcsin','arccos','arctan','sinh','cosh','tanh','sin','cos','tan','cot','sec','csc','log','ln','exp','det','min','max','lim','sup','inf'];
// const GREEK_MAP = { alpha:'α', beta:'β', gamma:'γ', delta:'δ', epsilon:'ε', zeta:'ζ', eta:'η', theta:'θ', iota:'ι', kappa:'κ', lambda:'λ', mu:'μ', nu:'ν', xi:'ξ', pi:'π', rho:'ρ', sigma:'σ', tau:'τ', phi:'φ', chi:'χ', psi:'ψ', omega:'ω' };

// const visibleLen = (s) => {
//   if (!s) return 0;
//   let str = String(s);
//   str = str.replace(/\$/g, '');
//   VISIBLE_NAMES.forEach(op => { str = str.replace(new RegExp('\\\\' + op + '\\b', 'g'), op); });
//   Object.entries(GREEK_MAP).forEach(([name, ch]) => { str = str.replace(new RegExp('\\\\' + name + '\\b', 'gi'), ch); });
//   str = str.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '$1/$2');
//   str = str.replace(/\\sqrt\{([^{}]*)\}/g, '√$1');
//   str = str.replace(/\\cdot/g, '·');
//   str = str.replace(/\\times/g, '×');
//   str = str.replace(/\\to|\\rightarrow/g, '→');
//   str = str.replace(/\\(?:left|right)/g, '');
//   str = str.replace(/\\,|\\!|\\;|\\:|\\quad|\\qquad/g, '');
//   str = str.replace(/\\[a-zA-Z]+\s?/g, '');
//   str = str.replace(/[{}^_]/g, '');
//   return str.length;
// };

// export default function FunctionMachineDiagram({
//   steps = [],
//   inverse = null,
//   colors = {},
// }) {
//   const uid = useId().replace(/:/g, '');
//   const markerId = `fm-arr-${uid}`;

//   const c = {
//     input:         { ...DEFAULT_COLORS.input, ...colors.input },
//     output:        { ...DEFAULT_COLORS.output, ...colors.output },
//     intermediate:  { ...DEFAULT_COLORS.intermediate, ...colors.intermediate },
//     operationText: colors.operationText || DEFAULT_COLORS.operationText,
//   };

//   if (steps.length < 2) return null;

//   const hasInverse = !!inverse;
//   const vertical = !hasInverse && steps.length > 3;

//   const BOX_H        = hasInverse ? 58 : 52;
//   const RX           = 8;
//   const CHAR_W       = 12;
//   const LABEL_CHAR_W = 10;
//   const MIN_BOX_W    = 70;
//   const MIN_GAP      = 90;
//   const PAD_L        = 20;
//   const PAD_R        = 20;
//   const PAD_TOP      = 22;
//   const PAD_BOTTOM   = hasInverse ? 40 : 22;
//   const VERT_GAP     = 60;
//   const LABEL_H      = 24;

//   const boxW = steps.map(s => Math.max(MIN_BOX_W, visibleLen(s.value) * CHAR_W + 28));

//   const boxColor = (i) => {
//     if (i === 0) return c.input;
//     if (i === steps.length - 1) return c.output;
//     return c.intermediate;
//   };

//   const fwdArrowColor = steps.length === 2 ? c.input.border : c.operationText;
//   const invArrowColor = c.output.border;

//   const arrowMarker = (
//     <defs>
//       <marker
//         id={markerId}
//         viewBox="0 0 10 10"
//         refX="8" refY="5"
//         markerWidth="6" markerHeight="6"
//         orient="auto-start-reverse"
//       >
//         <path
//           d="M2 1L8 5L2 9"
//           fill="none"
//           stroke="context-stroke"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </marker>
//     </defs>
//   );

//   const valueCell = (step, x, y, w, h, col) => (
//     <foreignObject x={x} y={y} width={w} height={h} style={{ overflow: 'visible' }}>
//       <div
//         xmlns="http://www.w3.org/1999/xhtml"
//         className="fmd-cell"
//         style={{ fontSize: '17px', fontWeight: 500, color: col.text }}
//       >
//         {processContent(step.value)}
//       </div>
//     </foreignObject>
//   );

//   const labelCell = (text, x, y, w, h, align = 'center') => (
//     <foreignObject x={x} y={y} width={w} height={h} style={{ overflow: 'visible' }}>
//       <div
//         xmlns="http://www.w3.org/1999/xhtml"
//         className="fmd-label"
//         style={{ justifyContent: align === 'start' ? 'flex-start' : 'center', color: c.operationText }}
//       >
//         {processContent(text)}
//       </div>
//     </foreignObject>
//   );

//   if (vertical) {
//     const maxBoxW = Math.max(...boxW);
//     let maxLabelW = 0;
//     for (let i = 0; i < steps.length - 1; i++) {
//       const op = steps[i].operation || '';
//       maxLabelW = Math.max(maxLabelW, visibleLen(op) * LABEL_CHAR_W);
//     }
//     const ARROW_LABEL_GAP = 10;
//     const W = PAD_L + maxBoxW + ARROW_LABEL_GAP + maxLabelW + PAD_R + 8;
//     const H = PAD_TOP + steps.length * BOX_H + (steps.length - 1) * VERT_GAP + PAD_BOTTOM;
//     const centerX = PAD_L + maxBoxW / 2;

//     const yForStep = (i) => PAD_TOP + i * (BOX_H + VERT_GAP);

//     return (
//       <>
//         <style>{SCROLL_CSS}</style>
//         <div className="fmd-wrap">
//           <svg
//             className="fmd-svg"
//             width={W}
//             height={H}
//             viewBox={`0 0 ${W} ${H}`}
//             xmlns="http://www.w3.org/2000/svg"
//             role="img"
//           >
//             <title>Function machine</title>
//             {arrowMarker}

//             {steps.map((step, i) => {
//               const col = boxColor(i);
//               const x = centerX - boxW[i] / 2;
//               const y = yForStep(i);
//               return (
//                 <g key={`b${i}`}>
//                   <rect
//                     x={x}
//                     y={y}
//                     width={boxW[i]}
//                     height={BOX_H}
//                     rx={RX}
//                     fill={col.bg}
//                     stroke={col.border}
//                     strokeWidth="0.5"
//                   />
//                   {valueCell(step, x, y, boxW[i], BOX_H, col)}
//                 </g>
//               );
//             })}

//             {steps.map((step, i) => {
//               if (i >= steps.length - 1 || !step.operation) return null;
//               const y1 = yForStep(i) + BOX_H + 2;
//               const y2 = yForStep(i + 1) - 2;
//               const labelX = centerX + maxBoxW / 2 + ARROW_LABEL_GAP;
//               const labelY = (y1 + y2) / 2 - LABEL_H / 2;
//               return (
//                 <g key={`a${i}`}>
//                   <line
//                     x1={centerX} y1={y1}
//                     x2={centerX} y2={y2}
//                     stroke={fwdArrowColor}
//                     strokeWidth="1.5"
//                     markerEnd={`url(#${markerId})`}
//                     fill="none"
//                   />
//                   {labelCell(step.operation, labelX, labelY, maxLabelW + 20, LABEL_H, 'start')}
//                 </g>
//               );
//             })}
//           </svg>
//         </div>
//       </>
//     );
//   }

//   const gaps = [];
//   for (let i = 0; i < steps.length - 1; i++) {
//     const op = steps[i].operation || '';
//     gaps.push(Math.max(MIN_GAP, visibleLen(op) * LABEL_CHAR_W + 40));
//   }

//   const contentW = boxW.reduce((a, b) => a + b, 0) + gaps.reduce((a, b) => a + b, 0);
//   const W = PAD_L + contentW + PAD_R;
//   const H = PAD_TOP + BOX_H + PAD_BOTTOM;

//   const bx = [];
//   let cx = PAD_L;
//   for (let i = 0; i < steps.length; i++) {
//     bx.push(cx);
//     if (i < steps.length - 1) cx += boxW[i] + gaps[i];
//   }

//   const by = PAD_TOP;
//   const cy = PAD_TOP + BOX_H / 2;

//   return (
//     <>
//       <style>{SCROLL_CSS}</style>
//       <div className="fmd-wrap">
//         <svg
//           className="fmd-svg"
//           width={W}
//           height={H}
//           viewBox={`0 0 ${W} ${H}`}
//           xmlns="http://www.w3.org/2000/svg"
//           role="img"
//         >
//           <title>Function machine</title>
//           {arrowMarker}

//           {steps.map((step, i) => {
//             const col = boxColor(i);
//             return (
//               <g key={`b${i}`}>
//                 <rect
//                   x={bx[i]}
//                   y={by}
//                   width={boxW[i]}
//                   height={BOX_H}
//                   rx={RX}
//                   fill={col.bg}
//                   stroke={col.border}
//                   strokeWidth="0.5"
//                 />
//                 {valueCell(step, bx[i], by, boxW[i], BOX_H, col)}
//               </g>
//             );
//           })}

//           {steps.map((step, i) => {
//             if (i >= steps.length - 1 || !step.operation) return null;
//             const x1 = bx[i] + boxW[i] + 2;
//             const x2 = bx[i + 1] - 2;
//             const arrowY = hasInverse ? cy - 9 : cy;
//             const labelW = x2 - x1;

//             return (
//               <g key={`a${i}`}>
//                 <line
//                   x1={x1} y1={arrowY}
//                   x2={x2} y2={arrowY}
//                   stroke={fwdArrowColor}
//                   strokeWidth="1.5"
//                   markerEnd={`url(#${markerId})`}
//                   fill="none"
//                 />
//                 {labelCell(step.operation, x1, arrowY - LABEL_H - 2, labelW, LABEL_H, 'center')}
//               </g>
//             );
//           })}

//           {hasInverse && (() => {
//             const last = steps.length - 1;
//             const x1 = bx[last] - 2;
//             const x2 = bx[0] + boxW[0] + 2;
//             const arrowY = cy + 9;
//             const labelY = arrowY + 4;
//             const labelW = bx[last] - (bx[0] + boxW[0]);

//             return (
//               <g>
//                 <line
//                   x1={x1} y1={arrowY}
//                   x2={x2} y2={arrowY}
//                   stroke={invArrowColor}
//                   strokeWidth="1.5"
//                   markerEnd={`url(#${markerId})`}
//                   fill="none"
//                 />
//                 {labelCell(inverse.operation, bx[0] + boxW[0], labelY, labelW, LABEL_H, 'center')}
//               </g>
//             );
//           })()}
//         </svg>
//       </div>
//     </>
//   );
// }


'use client';

import React, { useId } from 'react';
import { processContent } from '../../../utils/contentProcessor';

const DEFAULT_COLORS = {
  input:        { bg: '#E1F5EE', border: '#0F6E56', text: '#085041' },
  output:       { bg: '#FAECE7', border: '#993C1D', text: '#712B13' },
  intermediate: { bg: '#F1EFE8', border: '#888780', text: '#444441' },
  operationText: '#5F5E5A',
};

const SCROLL_CSS = `
  .fmd-wrap { width: 100%; max-width: 100%; margin: 58px 0; }
  .fmd-svg { display: block; max-width: 100%; height: auto; margin: 0 auto; overflow: visible; }
  .fmd-cell { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-family: sans-serif; line-height: 1.1; overflow: visible; font-size: 17px; }
  .fmd-cell .katex { font-size: 1.15em; }
  .fmd-label { width: 100%; height: 100%; display: flex; align-items: center; font-family: sans-serif; line-height: 1.1; font-size: 16px; color: #5F5E5A; overflow: visible; }
  .fmd-label .katex { font-size: 1.15em; }
`;

// Estimate visible character count after KaTeX renders (strip LaTeX markup)
const VISIBLE_NAMES = ['arcsin','arccos','arctan','sinh','cosh','tanh','sin','cos','tan','cot','sec','csc','log','ln','exp','det','min','max','lim','sup','inf'];
const GREEK_MAP = { alpha:'α', beta:'β', gamma:'γ', delta:'δ', epsilon:'ε', zeta:'ζ', eta:'η', theta:'θ', iota:'ι', kappa:'κ', lambda:'λ', mu:'μ', nu:'ν', xi:'ξ', pi:'π', rho:'ρ', sigma:'σ', tau:'τ', phi:'φ', chi:'χ', psi:'ψ', omega:'ω' };

const visibleLen = (s) => {
  if (!s) return 0;
  let str = String(s);
  str = str.replace(/\$/g, '');
  VISIBLE_NAMES.forEach(op => { str = str.replace(new RegExp('\\\\' + op + '\\b', 'g'), op); });
  Object.entries(GREEK_MAP).forEach(([name, ch]) => { str = str.replace(new RegExp('\\\\' + name + '\\b', 'gi'), ch); });
  str = str.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '$1/$2');
  str = str.replace(/\\sqrt\{([^{}]*)\}/g, '√$1');
  str = str.replace(/\\cdot/g, '·');
  str = str.replace(/\\times/g, '×');
  str = str.replace(/\\to|\\rightarrow/g, '→');
  str = str.replace(/\\(?:left|right)/g, '');
  str = str.replace(/\\,|\\!|\\;|\\:|\\quad|\\qquad/g, '');
  str = str.replace(/\\[a-zA-Z]+\s?/g, '');
  str = str.replace(/[{}^_]/g, '');
  return str.length;
};

export default function FunctionMachineDiagram({
  steps = [],
  inverse = null,
  colors = {},
}) {
  const uid = useId().replace(/:/g, '');
  const markerId = `fm-arr-${uid}`;

  const c = {
    input:         { ...DEFAULT_COLORS.input, ...colors.input },
    output:        { ...DEFAULT_COLORS.output, ...colors.output },
    intermediate:  { ...DEFAULT_COLORS.intermediate, ...colors.intermediate },
    operationText: colors.operationText || DEFAULT_COLORS.operationText,
  };

  if (steps.length < 2) return null;

  const hasInverse = !!inverse;
  const vertical = !hasInverse && steps.length > 3;

  const BOX_H        = hasInverse ? 58 : 52;
  const RX           = 8;
  const CHAR_W       = 12;
  const LABEL_CHAR_W = 10;
  const MIN_BOX_W    = 70;
  const MIN_GAP      = 90;
  const PAD_L        = 20;
  const PAD_R        = 20;
  const PAD_TOP      = 22;
  const PAD_BOTTOM   = hasInverse ? 40 : 22;
  const VERT_GAP     = 60;
  const LABEL_H      = 24;

  const boxW = steps.map(s => Math.max(MIN_BOX_W, visibleLen(s.value) * CHAR_W + 28));

  const boxColor = (i) => {
    if (i === 0) return c.input;
    if (i === steps.length - 1) return c.output;
    return c.intermediate;
  };

  const fwdArrowColor = steps.length === 2 ? c.input.border : c.operationText;
  const invArrowColor = c.output.border;

  const arrowMarker = (
    <defs>
      <marker
        id={markerId}
        viewBox="0 0 10 10"
        refX="8" refY="5"
        markerWidth="6" markerHeight="6"
        orient="auto-start-reverse"
      >
        <path
          d="M2 1L8 5L2 9"
          fill="none"
          stroke="context-stroke"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </marker>
    </defs>
  );

  const valueCell = (step, x, y, w, h, col) => (
    <foreignObject x={x} y={y} width={w} height={h} style={{ overflow: 'visible' }}>
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        className="fmd-cell"
        style={{ fontSize: '17px', fontWeight: 500, color: col.text }}
      >
        {processContent(step.value)}
      </div>
    </foreignObject>
  );

  const labelCell = (text, x, y, w, h, align = 'center') => (
    <foreignObject x={x} y={y} width={w} height={h} style={{ overflow: 'visible' }}>
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        className="fmd-label"
        style={{ justifyContent: align === 'start' ? 'flex-start' : 'center', color: c.operationText }}
      >
        {processContent(text)}
      </div>
    </foreignObject>
  );

  if (vertical) {
    const maxBoxW = Math.max(...boxW);
    let maxLabelW = 0;
    for (let i = 0; i < steps.length - 1; i++) {
      const op = steps[i].operation || '';
      maxLabelW = Math.max(maxLabelW, visibleLen(op) * LABEL_CHAR_W);
    }
    const ARROW_LABEL_GAP = 10;
    const W = PAD_L + maxBoxW + ARROW_LABEL_GAP + maxLabelW + PAD_R + 8;
    const H = PAD_TOP + steps.length * BOX_H + (steps.length - 1) * VERT_GAP + PAD_BOTTOM;
    const centerX = PAD_L + maxBoxW / 2;

    const yForStep = (i) => PAD_TOP + i * (BOX_H + VERT_GAP);

    return (
      <>
        <style>{SCROLL_CSS}</style>
        <div className="fmd-wrap">
          <svg
            className="fmd-svg"
            width={W}
            height={H}
            viewBox={`0 0 ${W} ${H}`}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
          >
            <title>Function machine</title>
            {arrowMarker}

            {steps.map((step, i) => {
              const col = boxColor(i);
              const x = centerX - boxW[i] / 2;
              const y = yForStep(i);
              return (
                <g key={`b${i}`}>
                  <rect
                    x={x}
                    y={y}
                    width={boxW[i]}
                    height={BOX_H}
                    rx={RX}
                    fill={col.bg}
                    stroke={col.border}
                    strokeWidth="0.5"
                  />
                  {valueCell(step, x, y, boxW[i], BOX_H, col)}
                </g>
              );
            })}

            {steps.map((step, i) => {
              if (i >= steps.length - 1 || !step.operation) return null;
              const y1 = yForStep(i) + BOX_H + 2;
              const y2 = yForStep(i + 1) - 2;
              const labelX = centerX + maxBoxW / 2 + ARROW_LABEL_GAP;
              const labelY = (y1 + y2) / 2 - LABEL_H / 2;
              return (
                <g key={`a${i}`}>
                  <line
                    x1={centerX} y1={y1}
                    x2={centerX} y2={y2}
                    stroke={fwdArrowColor}
                    strokeWidth="1.5"
                    markerEnd={`url(#${markerId})`}
                    fill="none"
                  />
                  {labelCell(step.operation, labelX, labelY, maxLabelW + 20, LABEL_H, 'start')}
                </g>
              );
            })}
          </svg>
        </div>
      </>
    );
  }

  const gaps = [];
  for (let i = 0; i < steps.length - 1; i++) {
    const op = steps[i].operation || '';
    gaps.push(Math.max(MIN_GAP, visibleLen(op) * LABEL_CHAR_W + 40));
  }

  const contentW = boxW.reduce((a, b) => a + b, 0) + gaps.reduce((a, b) => a + b, 0);
  const W = PAD_L + contentW + PAD_R;
  const H = PAD_TOP + BOX_H + PAD_BOTTOM;

  const bx = [];
  let cx = PAD_L;
  for (let i = 0; i < steps.length; i++) {
    bx.push(cx);
    if (i < steps.length - 1) cx += boxW[i] + gaps[i];
  }

  const by = PAD_TOP;
  const cy = PAD_TOP + BOX_H / 2;

  return (
    <>
      <style>{SCROLL_CSS}</style>
      <div className="fmd-wrap">
        <svg
          className="fmd-svg"
          width={W}
          height={H}
          viewBox={`0 0 ${W} ${H}`}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          <title>Function machine</title>
          {arrowMarker}

          {steps.map((step, i) => {
            const col = boxColor(i);
            return (
              <g key={`b${i}`}>
                <rect
                  x={bx[i]}
                  y={by}
                  width={boxW[i]}
                  height={BOX_H}
                  rx={RX}
                  fill={col.bg}
                  stroke={col.border}
                  strokeWidth="0.5"
                />
                {valueCell(step, bx[i], by, boxW[i], BOX_H, col)}
              </g>
            );
          })}

          {steps.map((step, i) => {
            if (i >= steps.length - 1 || !step.operation) return null;
            const x1 = bx[i] + boxW[i] + 2;
            const x2 = bx[i + 1] - 2;
            const arrowY = hasInverse ? cy - 9 : cy;
            const labelW = x2 - x1;

            return (
              <g key={`a${i}`}>
                <line
                  x1={x1} y1={arrowY}
                  x2={x2} y2={arrowY}
                  stroke={fwdArrowColor}
                  strokeWidth="1.5"
                  markerEnd={`url(#${markerId})`}
                  fill="none"
                />
                {labelCell(step.operation, x1, arrowY - LABEL_H - 2, labelW, LABEL_H, 'center')}
              </g>
            );
          })}

          {hasInverse && (() => {
            const last = steps.length - 1;
            const x1 = bx[last] - 2;
            const x2 = bx[0] + boxW[0] + 2;
            const arrowY = cy + 9;
            const labelY = arrowY + 4;
            const labelW = bx[last] - (bx[0] + boxW[0]);

            return (
              <g>
                <line
                  x1={x1} y1={arrowY}
                  x2={x2} y2={arrowY}
                  stroke={invArrowColor}
                  strokeWidth="1.5"
                  markerEnd={`url(#${markerId})`}
                  fill="none"
                />
                {labelCell(inverse.operation, bx[0] + boxW[0], labelY, labelW, LABEL_H, 'center')}
              </g>
            );
          })()}
        </svg>
      </div>
    </>
  );
}