// import React, { useState, useEffect, useRef, useCallback } from 'react';

// /* ============================================================
//    CircleGraphDemo — v6

//    New in v6:
//    - Periodicity / rotation support:
//        * Slider range -360 to 1080 (3+ turns)
//        * Lap counter next to readout (e.g. "30° + 1 turn")
//        * Spiral angle arc on circle (radius grows with |θ|)
//        * Graph shows 3 cycles (-360 to 720°) with cycle guides
//        * Coterminal ghost dots at θ ± 360 within the visible range
//    - Sizing:
//        * Card maxWidth 1100 → 1200
//        * Column ratio left/right 2/1 → 2.3/1 (more room for scene)
//        * Circle R 120 → 135 (bigger circle)
//        * Circle viewBox 320×320 → 320×380 (taller, +20%)
//        * Graph viewBox 440×320 → 440×380 (taller, +20%)
//        * Right panel minHeight 520 → 620
//    ============================================================ */

// const COLORS = {
//   deepBlue:    '#4F46E5',
//   midBlue:     '#B45309',
//   red:         '#DC2626',
//   panelBg:     '#f1f5f9',
//   panelBgDeep: '#E2E8F0',
//   borderSoft:  '#cbd5e1',
//   text:        '#1e3a5f',
//   textMuted:   '#64748b',
//   textFaint:   '#94a3b8',
//   borderTer:   'rgba(0,0,0,0.15)',
//   borderSec:   'rgba(0,0,0,0.30)',
//   white:       '#ffffff',
//   graphFaint:  '#e2e8f0',
// };

// const DEFAULT_SLIDER = {
//   label: 'θ',
//   step:  1,
//   min:   -360,
//   max:   1080,
// };

// const FULL_STATE = {
//   showRay:      true,
//   showLeg:      true,
//   showP:        true,
//   showRefAngle: true,
//   showGraph:    true,
//   showGraphDot: true,
//   showMetrics:  true,
// };

// function colorOf(name) {
//   return COLORS[name] || COLORS.text;
// }
// function degToRad(deg) { return (deg * Math.PI) / 180; }
// function normalize360(deg) {
//   let d = deg % 360;
//   if (d < 0) d += 360;
//   return d;
// }
// function quadrantOf(deg) {
//   const d = normalize360(deg);
//   if (d <= 90)  return 1;
//   if (d <= 180) return 2;
//   if (d <= 270) return 3;
//   return 4;
// }
// function referenceAngleDeg(deg) {
//   const d = normalize360(deg);
//   if (d <= 90)  return d;
//   if (d <= 180) return 180 - d;
//   if (d <= 270) return d - 180;
//   return 360 - d;
// }
// function toRadianDisplay(thetaDeg) {
//   for (const denom of [1, 2, 3, 4, 6, 12]) {
//     const f = thetaDeg / (180 / denom);
//     if (Math.abs(f - Math.round(f)) < 0.005) {
//       const num = Math.round(f);
//       if (num === 0) return '0';
//       const sign = num < 0 ? '−' : '';
//       const a = Math.abs(num);
//       if (denom === 1) return `${sign}${a === 1 ? '' : a}π`;
//       return `${sign}${a === 1 ? '' : a}π/${denom}`;
//     }
//   }
//   return (degToRad(thetaDeg)).toFixed(3);
// }
// function formatAngle(deg, unit) {
//   return unit === 'rad' ? toRadianDisplay(deg) : `${Math.round(deg)}°`;
// }
// /* Decompose theta into principal angle + turns, e.g. 390° → "30° + 1 turn" */
// function lapLabel(thetaDeg) {
//   const absT = Math.abs(thetaDeg);
//   if (absT < 360) return null;
//   const turns = Math.trunc(thetaDeg / 360);
//   const remainder = Math.round(thetaDeg - turns * 360);
//   const turnsAbs = Math.abs(turns);
//   const turnWord = turnsAbs === 1 ? 'turn' : 'turns';
//   if (turns > 0) {
//     return remainder === 0 ? `${turns} ${turnWord}` : `${remainder}° + ${turns} ${turnWord}`;
//   }
//   return remainder === 0 ? `${turnsAbs} ${turnWord} cw` : `${remainder}° − ${turnsAbs} ${turnWord}`;
// }

// const DEFAULT_SCENARIO = {
//   identity: {
//     fnName:   'sin',
//     lhs:      'θ',
//     lhsColor: 'red',
//     rhsParts: [],
//   },
//   scene: {
//     leg: 'sin',
//     curve: {
//       compute:    (thRad) => Math.sin(thRad),
//       asymptotes: [],
//       yMin:       -1.1,
//       yMax:       1.1,
//       label:      'y = sin θ',
//     },
//   },
//   steps: [
//     {
//       rule: 'Place the angle',
//       description: 'Rotate a ray from the positive x-axis through θ counterclockwise. The terminal point P sits on the unit circle where the ray meets it.',
//       state: { showRay: true, showP: true, showGraph: true },
//     },
//     {
//       rule: 'Drop the leg',
//       description: "From P, drop a perpendicular to the x-axis. The signed length of that vertical leg is sin θ — positive when P is above the x-axis, negative when below.",
//       state: { showRay: true, showP: true, showLeg: true, showGraph: true },
//     },
//     {
//       rule: 'Trace on the graph',
//       description: "Plot θ on the horizontal axis and sin θ on the vertical. The dot on the curve sits at the same height as P's y-coordinate on the circle.",
//       state: { showRay: true, showP: true, showLeg: true, showGraph: true, showGraphDot: true, showMetrics: true },
//     },
//     {
//       rule: 'Reference angle',
//       description: 'The reference angle is the acute angle between the ray and the nearest x-axis. Its sine has the same magnitude as sin θ; the sign comes from the quadrant.',
//       state: { ...FULL_STATE },
//     },
//   ],
//   metricPairs: [
//     { label: 'sin θ',     compute: (thRad) => Math.sin(thRad) },
//     { label: 'reference', compute: (thRad) => Math.sin(degToRad(referenceAngleDeg(thRad * 180 / Math.PI))) },
//   ],
// };

// function FadeGroup({ visible, duration = 400, children }) {
//   return (
//     <g style={{ opacity: visible ? 1 : 0, transition: `opacity ${duration}ms ease` }}>
//       {children}
//     </g>
//   );
// }

// /* Build a spiral polyline for the swept angle.
//    r(d) = baseR + (d/360) * extraR, where d is absolute degree traveled.
//    Sign determines rotation direction. */
// function spiralPath(thetaDeg, cx, cy) {
//   const baseR = 38;
//   const extraR = 16;
//   const absT = Math.abs(thetaDeg);
//   if (absT < 0.5) return '';
//   const sign = thetaDeg >= 0 ? 1 : -1;
//   const stepDeg = 2;
//   const pts = [];
//   for (let d = 0; d <= absT; d += stepDeg) {
//     const r = baseR + (d / 360) * extraR;
//     const rad = sign * d * Math.PI / 180;
//     const x = cx + r * Math.cos(rad);
//     const y = cy - r * Math.sin(rad);
//     pts.push(`${x.toFixed(2)},${y.toFixed(2)}`);
//   }
//   if (absT % stepDeg !== 0) {
//     const d = absT;
//     const r = baseR + (d / 360) * extraR;
//     const rad = sign * d * Math.PI / 180;
//     const x = cx + r * Math.cos(rad);
//     const y = cy - r * Math.sin(rad);
//     pts.push(`${x.toFixed(2)},${y.toFixed(2)}`);
//   }
//   return pts.join(' ');
// }

// /* ============================================================
//    CircleScene — unit circle SVG (with spiral arc + drag)
//    ============================================================ */
// function CircleScene({
//   theta, leg, showRay, showLeg, showP, showRefAngle,
//   onDragTheta,
// }) {
//   const svgRef = useRef(null);
//   const cx = 170, cy = 180, R = 135;
//   const VB = '0 0 340 380';

//   // Use the normalized angle for circle position (P always on circle, regardless of total rotation)
//   const thetaNorm = normalize360(theta);
//   const thN  = degToRad(thetaNorm);
//   const c    = Math.cos(thN);
//   const s    = Math.sin(thN);
//   const Px   = cx + R * c;
//   const Py   = cy - R * s;
//   const footX = cx + R * c;

//   const [dragging, setDragging] = useState(false);

//   const computeAngleFromClient = useCallback((clientX, clientY) => {
//     const svg = svgRef.current;
//     if (!svg) return theta;
//     const pt = svg.createSVGPoint();
//     pt.x = clientX; pt.y = clientY;
//     const ctm = svg.getScreenCTM();
//     if (!ctm) return theta;
//     const local = pt.matrixTransform(ctm.inverse());
//     const dx = local.x - cx;
//     const dy = cy - local.y;
//     let deg = Math.atan2(dy, dx) * 180 / Math.PI;
//     if (deg < 0) deg += 360;
//     return Math.round(deg);
//   }, [theta]);

//   useEffect(() => {
//     if (!dragging) return;
//     const onMove = (e) => {
//       const p = e.touches ? e.touches[0] : e;
//       onDragTheta(computeAngleFromClient(p.clientX, p.clientY));
//     };
//     const onUp = () => setDragging(false);
//     window.addEventListener('mousemove', onMove);
//     window.addEventListener('mouseup',   onUp);
//     window.addEventListener('touchmove', onMove, { passive: false });
//     window.addEventListener('touchend',  onUp);
//     return () => {
//       window.removeEventListener('mousemove', onMove);
//       window.removeEventListener('mouseup',   onUp);
//       window.removeEventListener('touchmove', onMove);
//       window.removeEventListener('touchend',  onUp);
//     };
//   }, [dragging, computeAngleFromClient, onDragTheta]);

//   // Spiral arc
//   const spiral = spiralPath(theta, cx, cy);
//   // Position the θ label near the outer end of the spiral
//   const absT = Math.abs(theta);
//   const endR = 38 + (absT / 360) * 16;
//   const endRad = (theta >= 0 ? 1 : -1) * absT * Math.PI / 180;
//   const endX = cx + (endR + 8) * Math.cos(endRad);
//   const endY = cy - (endR + 8) * Math.sin(endRad);

//   const q = quadrantOf(thetaNorm);
//   const refDeg = referenceAngleDeg(thetaNorm);
//   const refR = 28;
//   let refArcD = null;
//   if (refDeg > 0.5) {
//     let startRad, endRadRef, sweepFlag;
//     if (q === 1)      { startRad = 0;          endRadRef = thN; sweepFlag = 0; }
//     else if (q === 2) { startRad = Math.PI;    endRadRef = thN; sweepFlag = 1; }
//     else if (q === 3) { startRad = Math.PI;    endRadRef = thN; sweepFlag = 0; }
//     else              { startRad = 2*Math.PI;  endRadRef = thN; sweepFlag = 1; }
//     const sx = cx + refR * Math.cos(startRad);
//     const sy = cy - refR * Math.sin(startRad);
//     const ex = cx + refR * Math.cos(endRadRef);
//     const ey = cy - refR * Math.sin(endRadRef);
//     refArcD = `M ${sx} ${sy} A ${refR} ${refR} 0 0 ${sweepFlag} ${ex} ${ey}`;
//   }

//   const raSize = 9;
//   const raAbove = Py < cy;
//   const raSide  = c >= 0 ? -1 : 1;

//   return (
//     <svg ref={svgRef} viewBox={VB} style={{ display: 'block', width: '100%', userSelect: 'none', touchAction: 'none' }} role="img">
//       <title>Unit circle scene</title>

//       <line x1={20} y1={cy} x2={320} y2={cy} stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.45"/>
//       <line x1={cx} y1={30} x2={cx} y2={350} stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.45"/>
//       <text x={326} y={cy + 5}  fontSize="14" fontStyle="italic" fill={COLORS.textMuted}>x</text>
//       <text x={cx + 5} y={26}   fontSize="14" fontStyle="italic" fill={COLORS.textMuted}>y</text>

//       <circle cx={cx} cy={cy} r={R} fill="none" stroke={COLORS.borderSec} strokeWidth="1"/>

//       <circle cx={cx} cy={cy} r={3} fill={COLORS.text}/>
//       <text x={cx - 9} y={cy + 20} textAnchor="end" fontSize="14" fontStyle="italic" fill={COLORS.textMuted}>O</text>

//       {/* Spiral angle arc */}
//       <FadeGroup visible={showRay}>
//         {spiral && (
//           <>
//             <polyline points={spiral} fill="none" stroke={COLORS.red} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
//             <text x={endX} y={endY + 4} fontSize="13" fontStyle="italic" fill={COLORS.red}>θ</text>
//           </>
//         )}
//       </FadeGroup>

//       {/* Ray O→P (always at the normalized position) */}
//       <FadeGroup visible={showRay}>
//         <line x1={cx} y1={cy} x2={Px} y2={Py} stroke={COLORS.text} strokeWidth="1.5"/>
//       </FadeGroup>

//       <FadeGroup visible={showLeg}>
//         {(leg === 'sin' || leg === 'both') && (
//           <>
//             <line x1={footX} y1={cy} x2={Px} y2={Py}
//                   stroke={COLORS.midBlue} strokeWidth="3" strokeLinecap="round"/>
//             <text x={Px + 9 * (c >= 0 ? 1 : -1)} y={(cy + Py) / 2 + 4}
//                   textAnchor={c >= 0 ? 'start' : 'end'}
//                   fontSize="14" fontStyle="italic" fontWeight="500" fill={COLORS.midBlue}>
//               sin θ
//             </text>
//           </>
//         )}
//         {(leg === 'cos' || leg === 'both') && (
//           <>
//             <line x1={cx} y1={cy} x2={footX} y2={cy}
//                   stroke={COLORS.deepBlue} strokeWidth="3" strokeLinecap="round"/>
//             <text x={(cx + footX) / 2} y={cy + (raAbove ? 20 : -9)} textAnchor="middle"
//                   fontSize="14" fontStyle="italic" fontWeight="500" fill={COLORS.deepBlue}>
//               cos θ
//             </text>
//           </>
//         )}
//         {leg !== 'none' && (
//           <polyline
//             points={`${footX + raSize * raSide},${cy} ${footX + raSize * raSide},${cy + (raAbove ? -raSize : raSize)} ${footX},${cy + (raAbove ? -raSize : raSize)}`}
//             fill="none" stroke={COLORS.textMuted} strokeWidth="0.9"
//           />
//         )}
//       </FadeGroup>

//       <FadeGroup visible={showRefAngle && refArcD !== null}>
//         {refArcD && (
//           <>
//             <path d={refArcD} fill="none" stroke={COLORS.textMuted} strokeWidth="1.3" strokeDasharray="3 2"/>
//             <text x={cx + 44 * Math.cos(thN + (q === 1 || q === 4 ? 0.3 : -0.3))}
//                   y={cy - 44 * Math.sin(thN + (q === 1 || q === 4 ? 0.3 : -0.3))}
//                   fontSize="12" fontStyle="italic" fill={COLORS.textMuted}>
//               ref = {Math.round(refDeg)}°
//             </text>
//           </>
//         )}
//       </FadeGroup>

//       <FadeGroup visible={showP}>
//         <circle cx={Px} cy={Py} r={18} fill="transparent"
//                 style={{ cursor: dragging ? 'grabbing' : 'grab' }}
//                 onMouseDown={(e) => { e.preventDefault(); setDragging(true); }}
//                 onTouchStart={(e) => { e.preventDefault(); setDragging(true); }}/>
//         <circle cx={Px} cy={Py} r={dragging ? 9 : 7}
//                 fill={COLORS.deepBlue} stroke={COLORS.white} strokeWidth="2"
//                 style={{ pointerEvents: 'none', transition: 'r 0.15s ease' }}/>
//         <text x={Px + (c >= 0 ? 14 : -14)} y={Py + (s >= 0 ? -12 : 20)}
//               textAnchor={c >= 0 ? 'start' : 'end'}
//               fontSize="15" fontWeight="600" fill={COLORS.text}
//               style={{ pointerEvents: 'none' }}>P</text>
//       </FadeGroup>
//     </svg>
//   );
// }

// /* ============================================================
//    CurveGraph — synced function graph with multi-cycle support
//    ============================================================ */
// function CurveGraph({
//   theta, curve, showGraph, showGraphDot, leg, angleUnit,
// }) {
//   const VB_W = 460, VB_H = 380;
//   const padL = 50, padR = 22, padT = 36, padB = 50;
//   const plotW = VB_W - padL - padR;
//   const plotH = VB_H - padT - padB;

//   const thetaMinDeg = -360;
//   const thetaMaxDeg = 720;

//   const xOfDeg = (deg) => padL + ((deg - thetaMinDeg) / (thetaMaxDeg - thetaMinDeg)) * plotW;
//   const yOfVal = (v)   => padT + (1 - (v - curve.yMin) / (curve.yMax - curve.yMin)) * plotH;
//   const y0 = yOfVal(0);

//   const samples = Math.max(plotW * 3, 600);
//   const pts = [];
//   for (let i = 0; i <= samples; i++) {
//     const deg = thetaMinDeg + (i / samples) * (thetaMaxDeg - thetaMinDeg);
//     const y   = curve.compute(degToRad(deg));
//     if (!Number.isFinite(y)) { pts.push(null); continue; }
//     if (y > curve.yMax * 2 || y < curve.yMin * 2) { pts.push(null); continue; }
//     pts.push({ x: xOfDeg(deg), y: yOfVal(Math.max(curve.yMin, Math.min(curve.yMax, y))) });
//   }
//   const segments = [];
//   let cur = [];
//   for (const p of pts) {
//     if (p === null) {
//       if (cur.length > 1) segments.push(cur);
//       cur = [];
//     } else {
//       cur.push(p);
//     }
//   }
//   if (cur.length > 1) segments.push(cur);

//   // Find the actual θ position on the visible range (wrap if outside)
//   let displayTheta = theta;
//   while (displayTheta > thetaMaxDeg) displayTheta -= 360;
//   while (displayTheta < thetaMinDeg) displayTheta += 360;

//   // Collect coterminal angles within the visible range
//   const coterminals = [];
//   for (let k = -3; k <= 3; k++) {
//     const t = displayTheta + k * 360;
//     if (t >= thetaMinDeg && t <= thetaMaxDeg) coterminals.push(t);
//   }

//   const currentValue = curve.compute(degToRad(displayTheta));
//   const dotVisible = showGraphDot && Number.isFinite(currentValue)
//     && currentValue >= curve.yMin && currentValue <= curve.yMax;
//   const dotY = Number.isFinite(currentValue) ? yOfVal(currentValue) : 0;
//   const legColor = leg === 'sin' ? COLORS.midBlue : leg === 'cos' ? COLORS.deepBlue : COLORS.text;

//   const xTicks = [-360, 0, 360, 720];
//   const cycleGuides = [0, 360];   // turn boundaries to mark

//   return (
//     <svg viewBox={`0 0 ${VB_W} ${VB_H}`} style={{ display: 'block', width: '100%' }} role="img">
//       <title>Function graph</title>

//       {[curve.yMax, curve.yMin].map((v, i) => (
//         Number.isFinite(v) && v <= curve.yMax && v >= curve.yMin && (
//           <line key={i} x1={padL} y1={yOfVal(v)} x2={padL + plotW} y2={yOfVal(v)}
//                 stroke={COLORS.graphFaint} strokeWidth="0.8" strokeDasharray="3 3"/>
//         )
//       ))}

//       {/* Cycle boundary guides */}
//       {cycleGuides.map((d, i) => (
//         <g key={d}>
//           <line x1={xOfDeg(d)} y1={padT} x2={xOfDeg(d)} y2={padT + plotH}
//                 stroke={COLORS.borderSoft} strokeWidth="0.8" strokeDasharray="2 4"/>
//           <text x={xOfDeg(d)} y={padT - 4} textAnchor="middle"
//                 fontSize="10" fill={COLORS.textFaint} fontStyle="italic">
//             {i === 0 ? '' : 'turn'}
//           </text>
//         </g>
//       ))}

//       <line x1={padL} y1={y0} x2={padL + plotW} y2={y0} stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.45"/>
//       <line x1={padL} y1={padT} x2={padL} y2={padT + plotH} stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.45"/>

//       {xTicks.map(d => (
//         <g key={d}>
//           <line x1={xOfDeg(d)} y1={y0 - 3} x2={xOfDeg(d)} y2={y0 + 3} stroke={COLORS.textMuted} strokeWidth="0.8"/>
//           <text x={xOfDeg(d)} y={y0 + 18} textAnchor="middle" fontSize="12" fill={COLORS.textMuted}>
//             {formatAngle(d, angleUnit)}
//           </text>
//         </g>
//       ))}

//       {[curve.yMax, 0, curve.yMin].filter((v, i, a) => a.indexOf(v) === i).map(v => (
//         <g key={v}>
//           <line x1={padL - 3} y1={yOfVal(v)} x2={padL + 3} y2={yOfVal(v)} stroke={COLORS.textMuted} strokeWidth="0.8"/>
//           <text x={padL - 7} y={yOfVal(v) + 4} textAnchor="end" fontSize="12" fill={COLORS.textMuted}>
//             {v < 0 ? `−${Math.abs(v).toFixed(v % 1 === 0 ? 0 : 1)}` : v.toFixed(v % 1 === 0 ? 0 : 1)}
//           </text>
//         </g>
//       ))}

//       <text x={padL} y={padT - 14} fontSize="14" fontStyle="italic" fill={COLORS.text} fontWeight="500">{curve.label}</text>

//       <FadeGroup visible={showGraph}>
//         {segments.map((seg, i) => {
//           const dotX = xOfDeg(displayTheta);
//           const tracedEnd = seg.findIndex(p => p.x >= dotX);
//           const tracedPts = tracedEnd === -1 ? seg : seg.slice(0, tracedEnd + 1);
//           const restPts   = tracedEnd === -1 ? [] : seg.slice(tracedEnd);
//           const buildPath = (arr) => arr.length === 0 ? '' :
//             `M ${arr[0].x} ${arr[0].y} ` + arr.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ');
//           return (
//             <g key={i}>
//               <path d={buildPath(restPts)} fill="none"
//                     stroke={COLORS.deepBlue} strokeWidth="1.5"
//                     strokeOpacity="0.25" strokeDasharray="3 3"/>
//               <path d={buildPath(tracedPts)} fill="none"
//                     stroke={COLORS.deepBlue} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
//             </g>
//           );
//         })}
//       </FadeGroup>

//       {/* Coterminal ghost dots */}
//       <FadeGroup visible={dotVisible}>
//         {coterminals.filter(t => t !== displayTheta).map((t, i) => {
//           const gx = xOfDeg(t);
//           return Number.isFinite(currentValue) && (
//             <g key={i} style={{ opacity: 0.4 }}>
//               <line x1={gx} y1={y0} x2={gx} y2={dotY}
//                     stroke={legColor} strokeWidth="1.2" strokeOpacity="0.5"/>
//               <circle cx={gx} cy={dotY} r={4.5}
//                       fill={legColor} stroke={COLORS.white} strokeWidth="1.4"/>
//               <text x={gx} y={dotY + (currentValue >= 0 ? -10 : 18)}
//                     textAnchor="middle" fontSize="10" fontStyle="italic" fill={COLORS.textMuted}>
//                 {formatAngle(t, angleUnit)}
//               </text>
//             </g>
//           );
//         })}

//         {/* Faint horizontal connector between all coterminal heights */}
//         {coterminals.length > 1 && Number.isFinite(currentValue) && (
//           <line
//             x1={xOfDeg(Math.min(...coterminals))} y1={dotY}
//             x2={xOfDeg(Math.max(...coterminals))} y2={dotY}
//             stroke={legColor} strokeWidth="0.9" strokeDasharray="3 3" strokeOpacity="0.35"/>
//         )}

//         {/* The bold "current" dot */}
//         <line x1={xOfDeg(displayTheta)} y1={y0} x2={xOfDeg(displayTheta)} y2={dotY}
//               stroke={legColor} strokeWidth="1.8" strokeOpacity="0.65"/>
//         <circle cx={xOfDeg(displayTheta)} cy={dotY} r={6.5}
//                 fill={legColor} stroke={COLORS.white} strokeWidth="1.8"/>
//         <text x={xOfDeg(displayTheta) + 10} y={dotY + (currentValue >= 0 ? -10 : 20)}
//               fontSize="13" fontWeight="600" fill={COLORS.text}>
//           {Number.isFinite(currentValue) ? currentValue.toFixed(3) : '∞'}
//         </text>
//         <text x={xOfDeg(displayTheta)} y={y0 - 7} textAnchor="middle"
//               fontSize="11" fontStyle="italic" fill={COLORS.red}>
//           {formatAngle(displayTheta, angleUnit)}
//         </text>
//       </FadeGroup>
//     </svg>
//   );
// }

// /* ============================================================
//    AngleControl — slider + deg/rad toggle + lap counter
//    ============================================================ */
// function AngleControl({ theta, onChange, angleUnit, onUnitChange, min, max, step }) {
//   const display = formatAngle(theta, angleUnit);
//   const lap = lapLabel(theta);
//   return (
//     <div style={{
//       display: 'flex', alignItems: 'center', gap: '12px',
//       padding: '0 4px', marginBottom: '12px',
//       flexWrap: 'wrap',
//     }}>
//       <span style={{
//         fontSize: '1.08rem', color: COLORS.textMuted,
//         fontStyle: 'italic', minWidth: '16px',
//       }}>θ</span>
//       <input
//         type="range"
//         min={min} max={max} step={step}
//         value={theta}
//         onChange={(e) => onChange(+e.target.value)}
//         style={{ flex: 1, minWidth: 0, accentColor: COLORS.deepBlue }}
//       />
//       <span style={{
//         fontSize: '1.08rem', fontWeight: 500, color: COLORS.deepBlue,
//         minWidth: '74px', textAlign: 'right', fontVariantNumeric: 'tabular-nums',
//       }}>{display}</span>
//       {lap && (
//         <span style={{
//           fontSize: '0.86rem', color: COLORS.textMuted, fontStyle: 'italic',
//         }}>= {lap}</span>
//       )}
//       <div style={{
//         display: 'flex', gap: '2px', padding: '2px',
//         background: COLORS.panelBgDeep, borderRadius: '6px',
//       }}>
//         {['deg', 'rad'].map(u => (
//           <button key={u} onClick={() => onUnitChange(u)}
//             style={{
//               border: 'none', padding: '5px 10px', borderRadius: '4px',
//               fontSize: '0.84rem', fontWeight: 600, cursor: 'pointer',
//               background: angleUnit === u ? COLORS.white : 'transparent',
//               color:      angleUnit === u ? COLORS.deepBlue : COLORS.textMuted,
//               fontFamily: 'inherit',
//               boxShadow:  angleUnit === u ? '0 1px 2px rgba(0,0,0,0.08)' : 'none',
//             }}>{u}</button>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ============================================================
//    MiniSolutionPanel
//    ============================================================ */
// function MiniSolutionPanel({ steps, stepsTitle = 'Derivation', placeholder, onStepClick }) {
//   const listRef = useRef(null);
//   const activeIndex = steps.length - 1;
//   useEffect(() => {
//     const el = listRef.current;
//     if (!el) return;
//     el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
//   }, [activeIndex]);

//   return (
//     <div>
//       <style>{`
//         @keyframes cgd-fade-in {
//           from { opacity: 0; transform: translateY(-4px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .cgd-step-log::-webkit-scrollbar { display: none; width: 0; height: 0; }
//       `}</style>

//       <div style={{
//         fontSize: '0.84rem', textTransform: 'uppercase', letterSpacing: '1.6px',
//         color: COLORS.textMuted, marginBottom: '16px', fontWeight: 600,
//       }}>{stepsTitle}</div>

//       <div ref={listRef} className="cgd-step-log" style={{
//         maxHeight: '560px', overflowY: 'auto',
//         scrollbarWidth: 'none', msOverflowStyle: 'none',
//         paddingRight: '2px',
//       }}>
//         {steps.length === 0 && (
//           <div style={{
//             background: COLORS.white, border: `1px dashed ${COLORS.borderSoft}`,
//             borderRadius: '8px', padding: '40px 24px', textAlign: 'center',
//             fontSize: '1.02rem', color: COLORS.textFaint, fontStyle: 'italic',
//             minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center',
//           }}>{placeholder}</div>
//         )}
//         {steps.map((step, i) => {
//           const isActive  = i === activeIndex;
//           const clickable = !!onStepClick;
//           return (
//             <div key={i}
//               role={clickable ? 'button' : undefined}
//               tabIndex={clickable ? 0 : undefined}
//               onClick={clickable ? () => onStepClick(i) : undefined}
//               onKeyDown={clickable ? (e) => {
//                 if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onStepClick(i); }
//               } : undefined}
//               style={{
//                 background: isActive ? COLORS.white : 'transparent',
//                 border: isActive ? `2px solid ${COLORS.deepBlue}` : `2px solid transparent`,
//                 borderRadius: '8px', padding: '11px 13px', marginBottom: '6px',
//                 cursor: clickable ? 'pointer' : 'default',
//                 transition: 'background 0.2s, border-color 0.2s',
//                 animation: 'cgd-fade-in 0.35s ease',
//                 outline: 'none',
//               }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '5px' }}>
//                 <span style={{
//                   display: 'inline-block', fontSize: '0.82rem', fontWeight: 700,
//                   color: COLORS.white,
//                   background: isActive ? COLORS.deepBlue : COLORS.textFaint,
//                   padding: '3px 8px', borderRadius: '4px',
//                   fontVariantNumeric: 'tabular-nums',
//                 }}>{i + 1}</span>
//                 <span style={{
//                   fontWeight: isActive ? 700 : 500,
//                   fontSize: '1.04rem',
//                   color: isActive ? COLORS.deepBlue : COLORS.textMuted,
//                 }}>{step.rule}</span>
//               </div>
//               <p style={{
//                 fontSize: '0.9rem',
//                 color: isActive ? COLORS.text : COLORS.textMuted,
//                 lineHeight: 1.5, margin: 0, paddingLeft: '38px',
//               }}>{step.description}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// function IdentityBar({ identity }) {
//   if (!identity) return null;
//   const { fnName = 'sin', lhs, lhsColor = 'red', rhsParts = [] } = identity;
//   const hasRhs = rhsParts && rhsParts.length > 0;
//   return (
//     <div style={{
//       fontSize: '1.26rem', padding: '14px 18px',
//       background: COLORS.panelBg,
//       border: `1px solid ${COLORS.borderSoft}`,
//       borderRadius: '10px', textAlign: 'center', marginBottom: '12px',
//       fontFamily: 'Georgia, serif', color: COLORS.text,
//     }}>
//       <em>{fnName}</em>(<span style={{ color: colorOf(lhsColor), fontWeight: 500 }}>{lhs}</span>)
//       {hasRhs && (
//         <>
//           {' '}={' '}
//           {rhsParts.map((part, i) => (
//             <span key={i} style={{
//               color: colorOf(part.color),
//               fontStyle: part.color !== 'text' ? 'italic' : 'normal',
//             }}>{part.text}</span>
//           ))}
//         </>
//       )}
//     </div>
//   );
// }

// function ControlButton({ onClick, disabled, children, title, primary }) {
//   return (
//     <button onClick={onClick} disabled={disabled} title={title} style={{
//       border: `1px solid ${primary ? COLORS.deepBlue : COLORS.borderSoft}`,
//       background: primary ? COLORS.deepBlue : COLORS.white,
//       color: primary ? COLORS.white : COLORS.text,
//       padding: '7px 16px', borderRadius: '6px',
//       fontSize: '1.02rem', fontWeight: 500,
//       cursor: disabled ? 'not-allowed' : 'pointer',
//       opacity: disabled ? 0.4 : 1, fontFamily: 'inherit', minWidth: '62px',
//     }}>{children}</button>
//   );
// }

// function MetricCard({ label, value, visible }) {
//   return (
//     <div style={{
//       background: COLORS.panelBg,
//       border: `1px solid ${COLORS.borderSoft}`,
//       borderRadius: '10px', padding: '0.9rem 1.2rem',
//       opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease',
//     }}>
//       <p style={{
//         fontSize: '0.96rem', color: COLORS.textMuted,
//         margin: '0 0 4px', fontStyle: 'italic',
//       }}>{label}</p>
//       <p style={{
//         fontSize: '1.62rem', fontWeight: 500,
//         fontVariantNumeric: 'tabular-nums',
//         margin: 0, color: COLORS.deepBlue,
//       }}>{value}</p>
//     </div>
//   );
// }

// export default function CircleGraphDemo({
//   scenario       = {},
//   initialTheta   = 30,
//   initialStep    = 1,
//   theta:           thetaProp,
//   onThetaChange,
//   initialUnit    = 'deg',
//   stepDurationMs = 2500,
//   maxWidth       = 1200,
// }) {
//   const mergedScenario = {
//     identity:     scenario.identity     ?? DEFAULT_SCENARIO.identity,
//     steps:        scenario.steps        ?? DEFAULT_SCENARIO.steps,
//     metricPairs:  scenario.metricPairs  ?? DEFAULT_SCENARIO.metricPairs,
//     scene:        scenario.scene        ?? DEFAULT_SCENARIO.scene,
//     sliderConfig: { ...DEFAULT_SLIDER,  ...(scenario.sliderConfig || {}) },
//   };

//   const isControlled = thetaProp !== undefined;
//   const [thetaInternal, setThetaInternal] = useState(initialTheta);
//   const theta = isControlled ? thetaProp : thetaInternal;
//   const setTheta = useCallback((v) => {
//     if (isControlled) onThetaChange?.(v);
//     else setThetaInternal(v);
//   }, [isControlled, onThetaChange]);

//   const [angleUnit, setAngleUnit] = useState(initialUnit);
//   const [currentStep, setCurrentStep] = useState(
//     Math.max(0, Math.min(initialStep, mergedScenario.steps.length))
//   );
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [speed, setSpeed]         = useState(1);

//   const totalSteps        = mergedScenario.steps.length;
//   const effectiveDuration = stepDurationMs / speed;

//   useEffect(() => {
//     if (!isPlaying) return;
//     if (currentStep >= totalSteps) { setIsPlaying(false); return; }
//     const id = setTimeout(() => {
//       setCurrentStep(s => Math.min(s + 1, totalSteps));
//     }, effectiveDuration);
//     return () => clearTimeout(id);
//   }, [isPlaying, currentStep, totalSteps, effectiveDuration]);

//   const handlePlayPause = () => {
//     if (currentStep >= totalSteps) { setCurrentStep(0); setIsPlaying(true); }
//     else setIsPlaying(p => !p);
//   };
//   const handleNext   = () => { setIsPlaying(false); setCurrentStep(s => Math.min(s + 1, totalSteps)); };
//   const handlePrev   = () => { setIsPlaying(false); setCurrentStep(s => Math.max(s - 1, 0)); };
//   const handleReset  = () => { setIsPlaying(false); setCurrentStep(0); };
//   const handleJumpTo = (idx) => { setIsPlaying(false); setCurrentStep(idx + 1); };

//   const visibleSteps = mergedScenario.steps.slice(0, currentStep);
//   const activeStep   = currentStep > 0 ? mergedScenario.steps[currentStep - 1] : null;
//   const activeState  = activeStep ? activeStep.state : {};

//   const isAtEnd   = currentStep >= totalSteps;
//   const isAtStart = currentStep === 0;
//   const playLabel = isPlaying ? 'Pause' : (isAtEnd ? 'Replay' : 'Play');

//   const sliderCfg = mergedScenario.sliderConfig;

//   return (
//     <div style={{
//       maxWidth: `${maxWidth}px`,
//       margin: '0 auto',
//       background: COLORS.white,
//       border: `1px solid ${COLORS.borderSoft}`,
//       borderRadius: '14px',
//       boxShadow: '0 1px 2px rgba(15, 23, 42, 0.05), 0 10px 28px rgba(15, 23, 42, 0.07)',
//       padding: '22px',
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       color: COLORS.text,
//     }}>
//       <div style={{ display: 'flex', gap: '20px', width: '100%' }}>

//         <div style={{ flex: '2.3 1 0', minWidth: 0 }}>
//           <IdentityBar identity={mergedScenario.identity}/>

//           <AngleControl
//             theta={theta}
//             onChange={setTheta}
//             angleUnit={angleUnit}
//             onUnitChange={setAngleUnit}
//             min={sliderCfg.min}
//             max={sliderCfg.max}
//             step={sliderCfg.step}
//           />

//           <div style={{
//             background: COLORS.panelBg,
//             border: `1px solid ${COLORS.borderSoft}`,
//             borderRadius: '10px',
//             padding: '12px',
//             display: 'grid',
//             gridTemplateColumns: '1fr 1.35fr',
//             gap: '12px',
//             alignItems: 'center',
//           }}>
//             <div style={{ background: COLORS.white, border: `1px solid ${COLORS.borderSoft}`, borderRadius: '8px', padding: '8px' }}>
//               <div style={{
//                 fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '1.4px',
//                 color: COLORS.textMuted, fontWeight: 700, textAlign: 'center', marginBottom: '4px',
//               }}>Unit circle</div>
//               <CircleScene
//                 theta={theta}
//                 leg={mergedScenario.scene.leg}
//                 showRay={!!activeState.showRay}
//                 showLeg={!!activeState.showLeg}
//                 showP={!!activeState.showP}
//                 showRefAngle={!!activeState.showRefAngle}
//                 onDragTheta={setTheta}
//               />
//             </div>
//             <div style={{ background: COLORS.white, border: `1px solid ${COLORS.borderSoft}`, borderRadius: '8px', padding: '8px' }}>
//               <div style={{
//                 fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '1.4px',
//                 color: COLORS.textMuted, fontWeight: 700, textAlign: 'center', marginBottom: '4px',
//               }}>Function graph</div>
//               <CurveGraph
//                 theta={theta}
//                 curve={mergedScenario.scene.curve}
//                 leg={mergedScenario.scene.leg}
//                 angleUnit={angleUnit}
//                 showGraph={!!activeState.showGraph}
//                 showGraphDot={!!activeState.showGraphDot}
//               />
//             </div>
//           </div>

//           <div style={{
//             display: 'flex', alignItems: 'center', justifyContent: 'center',
//             gap: '8px', marginTop: '12px', padding: '12px 14px',
//             background: COLORS.panelBg, border: `1px solid ${COLORS.borderSoft}`,
//             borderRadius: '10px',
//           }}>
//             <ControlButton onClick={handleReset} disabled={isAtStart && !isPlaying} title="Reset">Reset</ControlButton>
//             <ControlButton onClick={handlePrev} disabled={isAtStart} title="Previous">&lsaquo; Prev</ControlButton>
//             <ControlButton onClick={handlePlayPause} title={isPlaying ? 'Pause' : 'Play'} primary>{playLabel}</ControlButton>
//             <ControlButton onClick={handleNext} disabled={isAtEnd} title="Next">Next &rsaquo;</ControlButton>
//             <select value={speed} onChange={e => setSpeed(+e.target.value)} title="Animation speed" style={{
//               border: `1px solid ${COLORS.borderSoft}`,
//               background: COLORS.white, color: COLORS.text,
//               padding: '7px 10px', borderRadius: '6px',
//               fontSize: '0.96rem', fontWeight: 500,
//               fontFamily: 'inherit', cursor: 'pointer', marginLeft: '6px',
//             }}>
//               <option value={0.5}>0.5&times;</option>
//               <option value={1}>1&times;</option>
//               <option value={1.5}>1.5&times;</option>
//               <option value={2}>2&times;</option>
//             </select>
//             <span style={{
//               marginLeft: '12px', fontSize: '0.936rem',
//               color: COLORS.textFaint, fontVariantNumeric: 'tabular-nums',
//             }}>Step {currentStep} of {totalSteps}</span>
//           </div>

//           {mergedScenario.metricPairs && mergedScenario.metricPairs.length > 0 && (
//             <div style={{
//               display: 'grid',
//               gridTemplateColumns: `repeat(${mergedScenario.metricPairs.length}, 1fr)`,
//               gap: '12px', marginTop: '12px',
//             }}>
//               {mergedScenario.metricPairs.map((m, i) => (
//                 <MetricCard
//                   key={i}
//                   label={m.label}
//                   value={m.compute(degToRad(theta)).toFixed(3)}
//                   visible={!!activeState.showMetrics}
//                 />
//               ))}
//             </div>
//           )}
//         </div>

//         <div style={{
//           flex: '1 1 0', minWidth: 0,
//           background: COLORS.panelBg,
//           border: `1px solid ${COLORS.borderSoft}`,
//           borderRadius: '10px',
//           padding: '16px',
//           minHeight: '620px',
//         }}>
//           <MiniSolutionPanel
//             steps={visibleSteps}
//             stepsTitle="Derivation"
//             placeholder="Press Play to step through the proof."
//             onStepClick={handleJumpTo}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect, useRef, useCallback } from 'react';

/* ============================================================
   CircleGraphDemo — v7

   Change from v6:
   - θ label moved from outer end of spiral to inside the arc:
       placed at the half-angle bisector, at radius 0.55 * baseR,
       matching the inside-arc style used in NegativeAngleDemo.
   ============================================================ */

const COLORS = {
  deepBlue:    '#4F46E5',
  midBlue:     '#B45309',
  red:         '#DC2626',
  panelBg:     '#f1f5f9',
  panelBgDeep: '#E2E8F0',
  borderSoft:  '#cbd5e1',
  text:        '#1e3a5f',
  textMuted:   '#64748b',
  textFaint:   '#94a3b8',
  borderTer:   'rgba(0,0,0,0.15)',
  borderSec:   'rgba(0,0,0,0.30)',
  white:       '#ffffff',
  graphFaint:  '#e2e8f0',
};

const DEFAULT_SLIDER = {
  label: 'θ',
  step:  1,
  min:   -360,
  max:   1080,
};

const FULL_STATE = {
  showRay:      true,
  showLeg:      true,
  showP:        true,
  showRefAngle: true,
  showGraph:    true,
  showGraphDot: true,
  showMetrics:  true,
};

function colorOf(name) {
  return COLORS[name] || COLORS.text;
}
function degToRad(deg) { return (deg * Math.PI) / 180; }
function normalize360(deg) {
  let d = deg % 360;
  if (d < 0) d += 360;
  return d;
}
function quadrantOf(deg) {
  const d = normalize360(deg);
  if (d <= 90)  return 1;
  if (d <= 180) return 2;
  if (d <= 270) return 3;
  return 4;
}
function referenceAngleDeg(deg) {
  const d = normalize360(deg);
  if (d <= 90)  return d;
  if (d <= 180) return 180 - d;
  if (d <= 270) return d - 180;
  return 360 - d;
}
function toRadianDisplay(thetaDeg) {
  for (const denom of [1, 2, 3, 4, 6, 12]) {
    const f = thetaDeg / (180 / denom);
    if (Math.abs(f - Math.round(f)) < 0.005) {
      const num = Math.round(f);
      if (num === 0) return '0';
      const sign = num < 0 ? '−' : '';
      const a = Math.abs(num);
      if (denom === 1) return `${sign}${a === 1 ? '' : a}π`;
      return `${sign}${a === 1 ? '' : a}π/${denom}`;
    }
  }
  return (degToRad(thetaDeg)).toFixed(3);
}
function formatAngle(deg, unit) {
  return unit === 'rad' ? toRadianDisplay(deg) : `${Math.round(deg)}°`;
}
function lapLabel(thetaDeg) {
  const absT = Math.abs(thetaDeg);
  if (absT < 360) return null;
  const turns = Math.trunc(thetaDeg / 360);
  const remainder = Math.round(thetaDeg - turns * 360);
  const turnsAbs = Math.abs(turns);
  const turnWord = turnsAbs === 1 ? 'turn' : 'turns';
  if (turns > 0) {
    return remainder === 0 ? `${turns} ${turnWord}` : `${remainder}° + ${turns} ${turnWord}`;
  }
  return remainder === 0 ? `${turnsAbs} ${turnWord} cw` : `${remainder}° − ${turnsAbs} ${turnWord}`;
}

const DEFAULT_SCENARIO = {
  identity: {
    fnName:   'sin',
    lhs:      'θ',
    lhsColor: 'red',
    rhsParts: [],
  },
  scene: {
    leg: 'sin',
    curve: {
      compute:    (thRad) => Math.sin(thRad),
      asymptotes: [],
      yMin:       -1.1,
      yMax:       1.1,
      label:      'y = sin θ',
    },
  },
  steps: [
    {
      rule: 'Place the angle',
      description: 'Rotate a ray from the positive x-axis through θ counterclockwise. The terminal point P sits on the unit circle where the ray meets it.',
      state: { showRay: true, showP: true, showGraph: true },
    },
    {
      rule: 'Drop the leg',
      description: "From P, drop a perpendicular to the x-axis. The signed length of that vertical leg is sin θ — positive when P is above the x-axis, negative when below.",
      state: { showRay: true, showP: true, showLeg: true, showGraph: true },
    },
    {
      rule: 'Trace on the graph',
      description: "Plot θ on the horizontal axis and sin θ on the vertical. The dot on the curve sits at the same height as P's y-coordinate on the circle.",
      state: { showRay: true, showP: true, showLeg: true, showGraph: true, showGraphDot: true, showMetrics: true },
    },
    {
      rule: 'Reference angle',
      description: 'The reference angle is the acute angle between the ray and the nearest x-axis. Its sine has the same magnitude as sin θ; the sign comes from the quadrant.',
      state: { ...FULL_STATE },
    },
  ],
  metricPairs: [
    { label: 'sin θ',     compute: (thRad) => Math.sin(thRad) },
    { label: 'reference', compute: (thRad) => Math.sin(degToRad(referenceAngleDeg(thRad * 180 / Math.PI))) },
  ],
};

function FadeGroup({ visible, duration = 400, children }) {
  return (
    <g style={{ opacity: visible ? 1 : 0, transition: `opacity ${duration}ms ease` }}>
      {children}
    </g>
  );
}

const SPIRAL_BASE_R  = 38;
const SPIRAL_EXTRA_R = 16;

function spiralPath(thetaDeg, cx, cy) {
  const absT = Math.abs(thetaDeg);
  if (absT < 0.5) return '';
  const sign = thetaDeg >= 0 ? 1 : -1;
  const stepDeg = 2;
  const pts = [];
  for (let d = 0; d <= absT; d += stepDeg) {
    const r = SPIRAL_BASE_R + (d / 360) * SPIRAL_EXTRA_R;
    const rad = sign * d * Math.PI / 180;
    const x = cx + r * Math.cos(rad);
    const y = cy - r * Math.sin(rad);
    pts.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  if (absT % stepDeg !== 0) {
    const d = absT;
    const r = SPIRAL_BASE_R + (d / 360) * SPIRAL_EXTRA_R;
    const rad = sign * d * Math.PI / 180;
    const x = cx + r * Math.cos(rad);
    const y = cy - r * Math.sin(rad);
    pts.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return pts.join(' ');
}

function CircleScene({
  theta, leg, showRay, showLeg, showP, showRefAngle,
  onDragTheta,
}) {
  const svgRef = useRef(null);
  const cx = 170, cy = 180, R = 135;
  const VB = '0 0 340 380';

  const thetaNorm = normalize360(theta);
  const thN  = degToRad(thetaNorm);
  const c    = Math.cos(thN);
  const s    = Math.sin(thN);
  const Px   = cx + R * c;
  const Py   = cy - R * s;
  const footX = cx + R * c;

  const [dragging, setDragging] = useState(false);

  const computeAngleFromClient = useCallback((clientX, clientY) => {
    const svg = svgRef.current;
    if (!svg) return theta;
    const pt = svg.createSVGPoint();
    pt.x = clientX; pt.y = clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return theta;
    const local = pt.matrixTransform(ctm.inverse());
    const dx = local.x - cx;
    const dy = cy - local.y;
    let deg = Math.atan2(dy, dx) * 180 / Math.PI;
    if (deg < 0) deg += 360;
    return Math.round(deg);
  }, [theta]);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e) => {
      const p = e.touches ? e.touches[0] : e;
      onDragTheta(computeAngleFromClient(p.clientX, p.clientY));
    };
    const onUp = () => setDragging(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup',   onUp);
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend',  onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup',   onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend',  onUp);
    };
  }, [dragging, computeAngleFromClient, onDragTheta]);

  const spiral = spiralPath(theta, cx, cy);

  // θ label INSIDE the arc: at half-angle bisector, at small radius.
  const absT = Math.abs(theta);
  const sign = theta >= 0 ? 1 : -1;
  const halfRad   = sign * (absT / 2) * Math.PI / 180;
  const labelR    = 0.55 * SPIRAL_BASE_R;
  const labelX    = cx + labelR * Math.cos(halfRad);
  const labelY    = cy - labelR * Math.sin(halfRad) + 5;

  const q = quadrantOf(thetaNorm);
  const refDeg = referenceAngleDeg(thetaNorm);
  const refR = 28;
  let refArcD = null;
  if (refDeg > 0.5) {
    let startRad, endRadRef, sweepFlag;
    if (q === 1)      { startRad = 0;          endRadRef = thN; sweepFlag = 0; }
    else if (q === 2) { startRad = Math.PI;    endRadRef = thN; sweepFlag = 1; }
    else if (q === 3) { startRad = Math.PI;    endRadRef = thN; sweepFlag = 0; }
    else              { startRad = 2*Math.PI;  endRadRef = thN; sweepFlag = 1; }
    const sx = cx + refR * Math.cos(startRad);
    const sy = cy - refR * Math.sin(startRad);
    const ex = cx + refR * Math.cos(endRadRef);
    const ey = cy - refR * Math.sin(endRadRef);
    refArcD = `M ${sx} ${sy} A ${refR} ${refR} 0 0 ${sweepFlag} ${ex} ${ey}`;
  }

  const raSize = 9;
  const raAbove = Py < cy;
  const raSide  = c >= 0 ? -1 : 1;

  return (
    <svg ref={svgRef} viewBox={VB} style={{ display: 'block', width: '100%', userSelect: 'none', touchAction: 'none' }} role="img">
      <title>Unit circle scene</title>

      <line x1={20} y1={cy} x2={320} y2={cy} stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.45"/>
      <line x1={cx} y1={30} x2={cx} y2={350} stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.45"/>
      <text x={326} y={cy + 5}  fontSize="14" fontStyle="italic" fill={COLORS.textMuted}>x</text>
      <text x={cx + 5} y={26}   fontSize="14" fontStyle="italic" fill={COLORS.textMuted}>y</text>

      <circle cx={cx} cy={cy} r={R} fill="none" stroke={COLORS.borderSec} strokeWidth="1"/>

      <circle cx={cx} cy={cy} r={3} fill={COLORS.text}/>
      <text x={cx - 9} y={cy + 20} textAnchor="end" fontSize="14" fontStyle="italic" fill={COLORS.textMuted}>O</text>

      <FadeGroup visible={showRay}>
        {spiral && (
          <>
            <polyline points={spiral} fill="none" stroke={COLORS.red} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            <text x={labelX} y={labelY} textAnchor="middle"
                  fontSize="13" fontStyle="italic" fill={COLORS.red}>θ</text>
          </>
        )}
      </FadeGroup>

      <FadeGroup visible={showRay}>
        <line x1={cx} y1={cy} x2={Px} y2={Py} stroke={COLORS.text} strokeWidth="1.5"/>
      </FadeGroup>

      <FadeGroup visible={showLeg}>
        {(leg === 'sin' || leg === 'both') && (
          <>
            <line x1={footX} y1={cy} x2={Px} y2={Py}
                  stroke={COLORS.midBlue} strokeWidth="3" strokeLinecap="round"/>
            <text x={Px + 9 * (c >= 0 ? 1 : -1)} y={(cy + Py) / 2 + 4}
                  textAnchor={c >= 0 ? 'start' : 'end'}
                  fontSize="14" fontStyle="italic" fontWeight="500" fill={COLORS.midBlue}>
              sin θ
            </text>
          </>
        )}
        {(leg === 'cos' || leg === 'both') && (
          <>
            <line x1={cx} y1={cy} x2={footX} y2={cy}
                  stroke={COLORS.deepBlue} strokeWidth="3" strokeLinecap="round"/>
            <text x={(cx + footX) / 2} y={cy + (raAbove ? 20 : -9)} textAnchor="middle"
                  fontSize="14" fontStyle="italic" fontWeight="500" fill={COLORS.deepBlue}>
              cos θ
            </text>
          </>
        )}
        {leg !== 'none' && (
          <polyline
            points={`${footX + raSize * raSide},${cy} ${footX + raSize * raSide},${cy + (raAbove ? -raSize : raSize)} ${footX},${cy + (raAbove ? -raSize : raSize)}`}
            fill="none" stroke={COLORS.textMuted} strokeWidth="0.9"
          />
        )}
      </FadeGroup>

      <FadeGroup visible={showRefAngle && refArcD !== null}>
        {refArcD && (
          <>
            <path d={refArcD} fill="none" stroke={COLORS.textMuted} strokeWidth="1.3" strokeDasharray="3 2"/>
            <text x={cx + 44 * Math.cos(thN + (q === 1 || q === 4 ? 0.3 : -0.3))}
                  y={cy - 44 * Math.sin(thN + (q === 1 || q === 4 ? 0.3 : -0.3))}
                  fontSize="12" fontStyle="italic" fill={COLORS.textMuted}>
              ref = {Math.round(refDeg)}°
            </text>
          </>
        )}
      </FadeGroup>

      <FadeGroup visible={showP}>
        <circle cx={Px} cy={Py} r={18} fill="transparent"
                style={{ cursor: dragging ? 'grabbing' : 'grab' }}
                onMouseDown={(e) => { e.preventDefault(); setDragging(true); }}
                onTouchStart={(e) => { e.preventDefault(); setDragging(true); }}/>
        <circle cx={Px} cy={Py} r={dragging ? 9 : 7}
                fill={COLORS.deepBlue} stroke={COLORS.white} strokeWidth="2"
                style={{ pointerEvents: 'none', transition: 'r 0.15s ease' }}/>
        <text x={Px + (c >= 0 ? 14 : -14)} y={Py + (s >= 0 ? -12 : 20)}
              textAnchor={c >= 0 ? 'start' : 'end'}
              fontSize="15" fontWeight="600" fill={COLORS.text}
              style={{ pointerEvents: 'none' }}>P</text>
      </FadeGroup>
    </svg>
  );
}

function CurveGraph({
  theta, curve, showGraph, showGraphDot, leg, angleUnit,
}) {
  const VB_W = 460, VB_H = 380;
  const padL = 50, padR = 22, padT = 36, padB = 50;
  const plotW = VB_W - padL - padR;
  const plotH = VB_H - padT - padB;

  const thetaMinDeg = -360;
  const thetaMaxDeg = 720;

  const xOfDeg = (deg) => padL + ((deg - thetaMinDeg) / (thetaMaxDeg - thetaMinDeg)) * plotW;
  const yOfVal = (v)   => padT + (1 - (v - curve.yMin) / (curve.yMax - curve.yMin)) * plotH;
  const y0 = yOfVal(0);

  const samples = Math.max(plotW * 3, 600);
  const pts = [];
  for (let i = 0; i <= samples; i++) {
    const deg = thetaMinDeg + (i / samples) * (thetaMaxDeg - thetaMinDeg);
    const y   = curve.compute(degToRad(deg));
    if (!Number.isFinite(y)) { pts.push(null); continue; }
    if (y > curve.yMax * 2 || y < curve.yMin * 2) { pts.push(null); continue; }
    pts.push({ x: xOfDeg(deg), y: yOfVal(Math.max(curve.yMin, Math.min(curve.yMax, y))) });
  }
  const segments = [];
  let cur = [];
  for (const p of pts) {
    if (p === null) {
      if (cur.length > 1) segments.push(cur);
      cur = [];
    } else {
      cur.push(p);
    }
  }
  if (cur.length > 1) segments.push(cur);

  let displayTheta = theta;
  while (displayTheta > thetaMaxDeg) displayTheta -= 360;
  while (displayTheta < thetaMinDeg) displayTheta += 360;

  const coterminals = [];
  for (let k = -3; k <= 3; k++) {
    const t = displayTheta + k * 360;
    if (t >= thetaMinDeg && t <= thetaMaxDeg) coterminals.push(t);
  }

  const currentValue = curve.compute(degToRad(displayTheta));
  const dotVisible = showGraphDot && Number.isFinite(currentValue)
    && currentValue >= curve.yMin && currentValue <= curve.yMax;
  const dotY = Number.isFinite(currentValue) ? yOfVal(currentValue) : 0;
  const legColor = leg === 'sin' ? COLORS.midBlue : leg === 'cos' ? COLORS.deepBlue : COLORS.text;

  const xTicks = [-360, 0, 360, 720];
  const cycleGuides = [0, 360];

  return (
    <svg viewBox={`0 0 ${VB_W} ${VB_H}`} style={{ display: 'block', width: '100%' }} role="img">
      <title>Function graph</title>

      {[curve.yMax, curve.yMin].map((v, i) => (
        Number.isFinite(v) && v <= curve.yMax && v >= curve.yMin && (
          <line key={i} x1={padL} y1={yOfVal(v)} x2={padL + plotW} y2={yOfVal(v)}
                stroke={COLORS.graphFaint} strokeWidth="0.8" strokeDasharray="3 3"/>
        )
      ))}

      {cycleGuides.map((d, i) => (
        <g key={d}>
          <line x1={xOfDeg(d)} y1={padT} x2={xOfDeg(d)} y2={padT + plotH}
                stroke={COLORS.borderSoft} strokeWidth="0.8" strokeDasharray="2 4"/>
          <text x={xOfDeg(d)} y={padT - 4} textAnchor="middle"
                fontSize="10" fill={COLORS.textFaint} fontStyle="italic">
            {i === 0 ? '' : 'turn'}
          </text>
        </g>
      ))}

      <line x1={padL} y1={y0} x2={padL + plotW} y2={y0} stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.45"/>
      <line x1={padL} y1={padT} x2={padL} y2={padT + plotH} stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.45"/>

      {xTicks.map(d => (
        <g key={d}>
          <line x1={xOfDeg(d)} y1={y0 - 3} x2={xOfDeg(d)} y2={y0 + 3} stroke={COLORS.textMuted} strokeWidth="0.8"/>
          <text x={xOfDeg(d)} y={y0 + 18} textAnchor="middle" fontSize="12" fill={COLORS.textMuted}>
            {formatAngle(d, angleUnit)}
          </text>
        </g>
      ))}

      {[curve.yMax, 0, curve.yMin].filter((v, i, a) => a.indexOf(v) === i).map(v => (
        <g key={v}>
          <line x1={padL - 3} y1={yOfVal(v)} x2={padL + 3} y2={yOfVal(v)} stroke={COLORS.textMuted} strokeWidth="0.8"/>
          <text x={padL - 7} y={yOfVal(v) + 4} textAnchor="end" fontSize="12" fill={COLORS.textMuted}>
            {v < 0 ? `−${Math.abs(v).toFixed(v % 1 === 0 ? 0 : 1)}` : v.toFixed(v % 1 === 0 ? 0 : 1)}
          </text>
        </g>
      ))}

      <text x={padL} y={padT - 14} fontSize="14" fontStyle="italic" fill={COLORS.text} fontWeight="500">{curve.label}</text>

      <FadeGroup visible={showGraph}>
        {segments.map((seg, i) => {
          const dotX = xOfDeg(displayTheta);
          const tracedEnd = seg.findIndex(p => p.x >= dotX);
          const tracedPts = tracedEnd === -1 ? seg : seg.slice(0, tracedEnd + 1);
          const restPts   = tracedEnd === -1 ? [] : seg.slice(tracedEnd);
          const buildPath = (arr) => arr.length === 0 ? '' :
            `M ${arr[0].x} ${arr[0].y} ` + arr.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ');
          return (
            <g key={i}>
              <path d={buildPath(restPts)} fill="none"
                    stroke={COLORS.deepBlue} strokeWidth="1.5"
                    strokeOpacity="0.25" strokeDasharray="3 3"/>
              <path d={buildPath(tracedPts)} fill="none"
                    stroke={COLORS.deepBlue} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
          );
        })}
      </FadeGroup>

      <FadeGroup visible={dotVisible}>
        {coterminals.filter(t => t !== displayTheta).map((t, i) => {
          const gx = xOfDeg(t);
          return Number.isFinite(currentValue) && (
            <g key={i} style={{ opacity: 0.4 }}>
              <line x1={gx} y1={y0} x2={gx} y2={dotY}
                    stroke={legColor} strokeWidth="1.2" strokeOpacity="0.5"/>
              <circle cx={gx} cy={dotY} r={4.5}
                      fill={legColor} stroke={COLORS.white} strokeWidth="1.4"/>
              <text x={gx} y={dotY + (currentValue >= 0 ? -10 : 18)}
                    textAnchor="middle" fontSize="10" fontStyle="italic" fill={COLORS.textMuted}>
                {formatAngle(t, angleUnit)}
              </text>
            </g>
          );
        })}

        {coterminals.length > 1 && Number.isFinite(currentValue) && (
          <line
            x1={xOfDeg(Math.min(...coterminals))} y1={dotY}
            x2={xOfDeg(Math.max(...coterminals))} y2={dotY}
            stroke={legColor} strokeWidth="0.9" strokeDasharray="3 3" strokeOpacity="0.35"/>
        )}

        <line x1={xOfDeg(displayTheta)} y1={y0} x2={xOfDeg(displayTheta)} y2={dotY}
              stroke={legColor} strokeWidth="1.8" strokeOpacity="0.65"/>
        <circle cx={xOfDeg(displayTheta)} cy={dotY} r={6.5}
                fill={legColor} stroke={COLORS.white} strokeWidth="1.8"/>
        <text x={xOfDeg(displayTheta) + 10} y={dotY + (currentValue >= 0 ? -10 : 20)}
              fontSize="13" fontWeight="600" fill={COLORS.text}>
          {Number.isFinite(currentValue) ? currentValue.toFixed(3) : '∞'}
        </text>
        <text x={xOfDeg(displayTheta)} y={y0 - 7} textAnchor="middle"
              fontSize="11" fontStyle="italic" fill={COLORS.red}>
          {formatAngle(displayTheta, angleUnit)}
        </text>
      </FadeGroup>
    </svg>
  );
}

function AngleControl({ theta, onChange, angleUnit, onUnitChange, min, max, step }) {
  const display = formatAngle(theta, angleUnit);
  const lap = lapLabel(theta);
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '12px',
      padding: '0 4px', marginBottom: '12px',
      flexWrap: 'wrap',
    }}>
      <span style={{
        fontSize: '1.08rem', color: COLORS.textMuted,
        fontStyle: 'italic', minWidth: '16px',
      }}>θ</span>
      <input
        type="range"
        min={min} max={max} step={step}
        value={theta}
        onChange={(e) => onChange(+e.target.value)}
        style={{ flex: 1, minWidth: 0, accentColor: COLORS.deepBlue }}
      />
      <span style={{
        fontSize: '1.08rem', fontWeight: 500, color: COLORS.deepBlue,
        minWidth: '74px', textAlign: 'right', fontVariantNumeric: 'tabular-nums',
      }}>{display}</span>
      {lap && (
        <span style={{
          fontSize: '0.86rem', color: COLORS.textMuted, fontStyle: 'italic',
        }}>= {lap}</span>
      )}
      <div style={{
        display: 'flex', gap: '2px', padding: '2px',
        background: COLORS.panelBgDeep, borderRadius: '6px',
      }}>
        {['deg', 'rad'].map(u => (
          <button key={u} onClick={() => onUnitChange(u)}
            style={{
              border: 'none', padding: '5px 10px', borderRadius: '4px',
              fontSize: '0.84rem', fontWeight: 600, cursor: 'pointer',
              background: angleUnit === u ? COLORS.white : 'transparent',
              color:      angleUnit === u ? COLORS.deepBlue : COLORS.textMuted,
              fontFamily: 'inherit',
              boxShadow:  angleUnit === u ? '0 1px 2px rgba(0,0,0,0.08)' : 'none',
            }}>{u}</button>
        ))}
      </div>
    </div>
  );
}

function MiniSolutionPanel({ steps, stepsTitle = 'Derivation', placeholder, onStepClick }) {
  const listRef = useRef(null);
  const activeIndex = steps.length - 1;
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [activeIndex]);

  return (
    <div>
      <style>{`
        @keyframes cgd-fade-in {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cgd-step-log::-webkit-scrollbar { display: none; width: 0; height: 0; }
      `}</style>

      <div style={{
        fontSize: '0.84rem', textTransform: 'uppercase', letterSpacing: '1.6px',
        color: COLORS.textMuted, marginBottom: '16px', fontWeight: 600,
      }}>{stepsTitle}</div>

      <div ref={listRef} className="cgd-step-log" style={{
        maxHeight: '560px', overflowY: 'auto',
        scrollbarWidth: 'none', msOverflowStyle: 'none',
        paddingRight: '2px',
      }}>
        {steps.length === 0 && (
          <div style={{
            background: COLORS.white, border: `1px dashed ${COLORS.borderSoft}`,
            borderRadius: '8px', padding: '40px 24px', textAlign: 'center',
            fontSize: '1.02rem', color: COLORS.textFaint, fontStyle: 'italic',
            minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{placeholder}</div>
        )}
        {steps.map((step, i) => {
          const isActive  = i === activeIndex;
          const clickable = !!onStepClick;
          return (
            <div key={i}
              role={clickable ? 'button' : undefined}
              tabIndex={clickable ? 0 : undefined}
              onClick={clickable ? () => onStepClick(i) : undefined}
              onKeyDown={clickable ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onStepClick(i); }
              } : undefined}
              style={{
                background: isActive ? COLORS.white : 'transparent',
                border: isActive ? `2px solid ${COLORS.deepBlue}` : `2px solid transparent`,
                borderRadius: '8px', padding: '11px 13px', marginBottom: '6px',
                cursor: clickable ? 'pointer' : 'default',
                transition: 'background 0.2s, border-color 0.2s',
                animation: 'cgd-fade-in 0.35s ease',
                outline: 'none',
              }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '5px' }}>
                <span style={{
                  display: 'inline-block', fontSize: '0.82rem', fontWeight: 700,
                  color: COLORS.white,
                  background: isActive ? COLORS.deepBlue : COLORS.textFaint,
                  padding: '3px 8px', borderRadius: '4px',
                  fontVariantNumeric: 'tabular-nums',
                }}>{i + 1}</span>
                <span style={{
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '1.04rem',
                  color: isActive ? COLORS.deepBlue : COLORS.textMuted,
                }}>{step.rule}</span>
              </div>
              <p style={{
                fontSize: '0.9rem',
                color: isActive ? COLORS.text : COLORS.textMuted,
                lineHeight: 1.5, margin: 0, paddingLeft: '38px',
              }}>{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function IdentityBar({ identity }) {
  if (!identity) return null;
  const { fnName = 'sin', lhs, lhsColor = 'red', rhsParts = [] } = identity;
  const hasRhs = rhsParts && rhsParts.length > 0;
  return (
    <div style={{
      fontSize: '1.26rem', padding: '14px 18px',
      background: COLORS.panelBg,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '10px', textAlign: 'center', marginBottom: '12px',
      fontFamily: 'Georgia, serif', color: COLORS.text,
    }}>
      <em>{fnName}</em>(<span style={{ color: colorOf(lhsColor), fontWeight: 500 }}>{lhs}</span>)
      {hasRhs && (
        <>
          {' '}={' '}
          {rhsParts.map((part, i) => (
            <span key={i} style={{
              color: colorOf(part.color),
              fontStyle: part.color !== 'text' ? 'italic' : 'normal',
            }}>{part.text}</span>
          ))}
        </>
      )}
    </div>
  );
}

function ControlButton({ onClick, disabled, children, title, primary }) {
  return (
    <button onClick={onClick} disabled={disabled} title={title} style={{
      border: `1px solid ${primary ? COLORS.deepBlue : COLORS.borderSoft}`,
      background: primary ? COLORS.deepBlue : COLORS.white,
      color: primary ? COLORS.white : COLORS.text,
      padding: '7px 16px', borderRadius: '6px',
      fontSize: '1.02rem', fontWeight: 500,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1, fontFamily: 'inherit', minWidth: '62px',
    }}>{children}</button>
  );
}

function MetricCard({ label, value, visible }) {
  return (
    <div style={{
      background: COLORS.panelBg,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '10px', padding: '0.9rem 1.2rem',
      opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease',
    }}>
      <p style={{
        fontSize: '0.96rem', color: COLORS.textMuted,
        margin: '0 0 4px', fontStyle: 'italic',
      }}>{label}</p>
      <p style={{
        fontSize: '1.62rem', fontWeight: 500,
        fontVariantNumeric: 'tabular-nums',
        margin: 0, color: COLORS.deepBlue,
      }}>{value}</p>
    </div>
  );
}

export default function CircleGraphDemo({
  scenario       = {},
  initialTheta   = 30,
  initialStep    = 1,
  theta:           thetaProp,
  onThetaChange,
  initialUnit    = 'deg',
  stepDurationMs = 2500,
  maxWidth       = 1200,
}) {
  const mergedScenario = {
    identity:     scenario.identity     ?? DEFAULT_SCENARIO.identity,
    steps:        scenario.steps        ?? DEFAULT_SCENARIO.steps,
    metricPairs:  scenario.metricPairs  ?? DEFAULT_SCENARIO.metricPairs,
    scene:        scenario.scene        ?? DEFAULT_SCENARIO.scene,
    sliderConfig: { ...DEFAULT_SLIDER,  ...(scenario.sliderConfig || {}) },
  };

  const isControlled = thetaProp !== undefined;
  const [thetaInternal, setThetaInternal] = useState(initialTheta);
  const theta = isControlled ? thetaProp : thetaInternal;
  const setTheta = useCallback((v) => {
    if (isControlled) onThetaChange?.(v);
    else setThetaInternal(v);
  }, [isControlled, onThetaChange]);

  const [angleUnit, setAngleUnit] = useState(initialUnit);
  const [currentStep, setCurrentStep] = useState(
    Math.max(0, Math.min(initialStep, mergedScenario.steps.length))
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed]         = useState(1);

  const totalSteps        = mergedScenario.steps.length;
  const effectiveDuration = stepDurationMs / speed;

  useEffect(() => {
    if (!isPlaying) return;
    if (currentStep >= totalSteps) { setIsPlaying(false); return; }
    const id = setTimeout(() => {
      setCurrentStep(s => Math.min(s + 1, totalSteps));
    }, effectiveDuration);
    return () => clearTimeout(id);
  }, [isPlaying, currentStep, totalSteps, effectiveDuration]);

  const handlePlayPause = () => {
    if (currentStep >= totalSteps) { setCurrentStep(0); setIsPlaying(true); }
    else setIsPlaying(p => !p);
  };
  const handleNext   = () => { setIsPlaying(false); setCurrentStep(s => Math.min(s + 1, totalSteps)); };
  const handlePrev   = () => { setIsPlaying(false); setCurrentStep(s => Math.max(s - 1, 0)); };
  const handleReset  = () => { setIsPlaying(false); setCurrentStep(0); };
  const handleJumpTo = (idx) => { setIsPlaying(false); setCurrentStep(idx + 1); };

  const visibleSteps = mergedScenario.steps.slice(0, currentStep);
  const activeStep   = currentStep > 0 ? mergedScenario.steps[currentStep - 1] : null;
  const activeState  = activeStep ? activeStep.state : {};

  const isAtEnd   = currentStep >= totalSteps;
  const isAtStart = currentStep === 0;
  const playLabel = isPlaying ? 'Pause' : (isAtEnd ? 'Replay' : 'Play');

  const sliderCfg = mergedScenario.sliderConfig;

  return (
    <div style={{
      maxWidth: `${maxWidth}px`,
      margin: '0 auto',
      background: COLORS.white,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '14px',
      boxShadow: '0 1px 2px rgba(15, 23, 42, 0.05), 0 10px 28px rgba(15, 23, 42, 0.07)',
      padding: '22px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: COLORS.text,
    }}>
      <div style={{ display: 'flex', gap: '20px', width: '100%' }}>

        <div style={{ flex: '2.3 1 0', minWidth: 0 }}>
          <IdentityBar identity={mergedScenario.identity}/>

          <AngleControl
            theta={theta}
            onChange={setTheta}
            angleUnit={angleUnit}
            onUnitChange={setAngleUnit}
            min={sliderCfg.min}
            max={sliderCfg.max}
            step={sliderCfg.step}
          />

          <div style={{
            background: COLORS.panelBg,
            border: `1px solid ${COLORS.borderSoft}`,
            borderRadius: '10px',
            padding: '12px',
            display: 'grid',
            gridTemplateColumns: '1fr 1.35fr',
            gap: '12px',
            alignItems: 'center',
          }}>
            <div style={{ background: COLORS.white, border: `1px solid ${COLORS.borderSoft}`, borderRadius: '8px', padding: '8px' }}>
              <div style={{
                fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '1.4px',
                color: COLORS.textMuted, fontWeight: 700, textAlign: 'center', marginBottom: '4px',
              }}>Unit circle</div>
              <CircleScene
                theta={theta}
                leg={mergedScenario.scene.leg}
                showRay={!!activeState.showRay}
                showLeg={!!activeState.showLeg}
                showP={!!activeState.showP}
                showRefAngle={!!activeState.showRefAngle}
                onDragTheta={setTheta}
              />
            </div>
            <div style={{ background: COLORS.white, border: `1px solid ${COLORS.borderSoft}`, borderRadius: '8px', padding: '8px' }}>
              <div style={{
                fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '1.4px',
                color: COLORS.textMuted, fontWeight: 700, textAlign: 'center', marginBottom: '4px',
              }}>Function graph</div>
              <CurveGraph
                theta={theta}
                curve={mergedScenario.scene.curve}
                leg={mergedScenario.scene.leg}
                angleUnit={angleUnit}
                showGraph={!!activeState.showGraph}
                showGraphDot={!!activeState.showGraphDot}
              />
            </div>
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '8px', marginTop: '12px', padding: '12px 14px',
            background: COLORS.panelBg, border: `1px solid ${COLORS.borderSoft}`,
            borderRadius: '10px',
          }}>
            <ControlButton onClick={handleReset} disabled={isAtStart && !isPlaying} title="Reset">Reset</ControlButton>
            <ControlButton onClick={handlePrev} disabled={isAtStart} title="Previous">&lsaquo; Prev</ControlButton>
            <ControlButton onClick={handlePlayPause} title={isPlaying ? 'Pause' : 'Play'} primary>{playLabel}</ControlButton>
            <ControlButton onClick={handleNext} disabled={isAtEnd} title="Next">Next &rsaquo;</ControlButton>
            <select value={speed} onChange={e => setSpeed(+e.target.value)} title="Animation speed" style={{
              border: `1px solid ${COLORS.borderSoft}`,
              background: COLORS.white, color: COLORS.text,
              padding: '7px 10px', borderRadius: '6px',
              fontSize: '0.96rem', fontWeight: 500,
              fontFamily: 'inherit', cursor: 'pointer', marginLeft: '6px',
            }}>
              <option value={0.5}>0.5&times;</option>
              <option value={1}>1&times;</option>
              <option value={1.5}>1.5&times;</option>
              <option value={2}>2&times;</option>
            </select>
            <span style={{
              marginLeft: '12px', fontSize: '0.936rem',
              color: COLORS.textFaint, fontVariantNumeric: 'tabular-nums',
            }}>Step {currentStep} of {totalSteps}</span>
          </div>

          {mergedScenario.metricPairs && mergedScenario.metricPairs.length > 0 && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${mergedScenario.metricPairs.length}, 1fr)`,
              gap: '12px', marginTop: '12px',
            }}>
              {mergedScenario.metricPairs.map((m, i) => (
                <MetricCard
                  key={i}
                  label={m.label}
                  value={m.compute(degToRad(theta)).toFixed(3)}
                  visible={!!activeState.showMetrics}
                />
              ))}
            </div>
          )}
        </div>

        <div style={{
          flex: '1 1 0', minWidth: 0,
          background: COLORS.panelBg,
          border: `1px solid ${COLORS.borderSoft}`,
          borderRadius: '10px',
          padding: '16px',
          minHeight: '620px',
        }}>
          <MiniSolutionPanel
            steps={visibleSteps}
            stepsTitle="Derivation"
            placeholder="Press Play to step through the proof."
            onStepClick={handleJumpTo}
          />
        </div>
      </div>
    </div>
  );
}