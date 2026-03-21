// // 'use client';

// // import { useState, useRef, useCallback } from 'react';

// // export default function ComplexAddSubVisualizer() {
// //   const [z1, setZ1] = useState({ re: 3, im: 1 });
// //   const [z2, setZ2] = useState({ re: 1, im: 3 });
// //   const [mode, setMode] = useState('both'); // 'add' | 'sub' | 'both'
// //   const [dragging, setDragging] = useState(null);
// //   const [warning, setWarning] = useState(false);
// //   const warningTimer = useRef(null);
// //   const svgRef = useRef(null);

// //   const W = 720, H = 720;
// //   const margin = 52;
// //   const range = 5;
// //   const maxVal = 5;
// //   const scale = (W - 2 * margin) / (2 * range);
// //   const ox = W / 2;
// //   const oy = H / 2;

// //   const clamp = (val) => Math.max(-maxVal, Math.min(maxVal, Math.round(val * 10) / 10));

// //   const safeSet = (setter, newRe, newIm) => {
// //     const needsClamp = Math.abs(newRe) > maxVal || Math.abs(newIm) > maxVal;
// //     if (needsClamp) {
// //       setWarning(true);
// //       if (warningTimer.current) clearTimeout(warningTimer.current);
// //       warningTimer.current = setTimeout(() => setWarning(false), 2500);
// //     }
// //     setter({ re: clamp(newRe), im: clamp(newIm) });
// //   };

// //   const toSvg = (r, i) => ({ x: ox + r * scale, y: oy - i * scale });
// //   const fromSvg = (sx, sy) => ({ re: (sx - ox) / scale, im: (oy - sy) / scale });
// //   const originSvg = toSvg(0, 0);

// //   // Results
// //   const sum = { re: z1.re + z2.re, im: z1.im + z2.im };
// //   const diff = { re: z1.re - z2.re, im: z1.im - z2.im };

// //   const mod1 = Math.sqrt(z1.re * z1.re + z1.im * z1.im);
// //   const mod2 = Math.sqrt(z2.re * z2.re + z2.im * z2.im);
// //   const modSum = Math.sqrt(sum.re * sum.re + sum.im * sum.im);
// //   const modDiff = Math.sqrt(diff.re * diff.re + diff.im * diff.im);

// //   // SVG points
// //   const z1Svg = toSvg(z1.re, z1.im);
// //   const z2Svg = toSvg(z2.re, z2.im);
// //   const sumSvg = toSvg(sum.re, sum.im);
// //   const diffSvg = toSvg(diff.re, diff.im);

// //   const sumVisible = Math.abs(sum.re) <= range && Math.abs(sum.im) <= range;
// //   const diffVisible = Math.abs(diff.re) <= range && Math.abs(diff.im) <= range;

// //   const showAdd = mode === 'add' || mode === 'both';
// //   const showSub = mode === 'sub' || mode === 'both';

// //   // Drag
// //   const handlePointerDown = useCallback((which) => (e) => {
// //     setDragging(which);
// //     e.target.setPointerCapture(e.pointerId);
// //   }, []);

// //   const handlePointerMove = useCallback((e) => {
// //     if (!dragging || !svgRef.current) return;
// //     const rect = svgRef.current.getBoundingClientRect();
// //     const sx = (e.clientX - rect.left) * (W / rect.width);
// //     const sy = (e.clientY - rect.top) * (H / rect.height);
// //     const pt = fromSvg(sx, sy);
// //     const setter = dragging === 'z1' ? setZ1 : setZ2;
// //     setter({ re: clamp(pt.re), im: clamp(pt.im) });
// //   }, [dragging]);

// //   const handlePointerUp = useCallback(() => {
// //     setDragging(null);
// //   }, []);

// //   // Formatting
// //   const fmtNum = (v) => {
// //     if (Math.abs(v) < 0.005) return '0';
// //     if (Math.abs(v - Math.round(v)) < 0.005) return String(Math.round(v));
// //     return v.toFixed(1);
// //   };

// //   const fmtComplex = (re, im) => {
// //     const rs = fmtNum(re);
// //     const ai = Math.abs(im);
// //     const is_ = fmtNum(ai);
// //     if (Math.abs(im) < 0.005) return rs;
// //     if (Math.abs(re) < 0.005) {
// //       if (is_ === '1') return im > 0 ? 'i' : '−i';
// //       return im > 0 ? `${is_}i` : `−${is_}i`;
// //     }
// //     const sign = im > 0 ? ' + ' : ' − ';
// //     const iPart = is_ === '1' ? 'i' : `${is_}i`;
// //     return `${rs}${sign}${iPart}`;
// //   };

// //   // Grid
// //   const gridLinesFixed = [];
// //   for (let i = -range; i <= range; i++) {
// //     if (i === 0) continue;
// //     const v1 = toSvg(i, -range), v2 = toSvg(i, range);
// //     gridLinesFixed.push({ x1: v1.x, y1: v1.y, x2: v2.x, y2: v2.y });
// //     const h1 = toSvg(-range, i), h2 = toSvg(range, i);
// //     gridLinesFixed.push({ x1: h1.x, y1: h1.y, x2: h2.x, y2: h2.y });
// //   }

// //   const ticks = [];
// //   for (let i = -range; i <= range; i++) {
// //     if (i === 0) continue;
// //     const px = toSvg(i, 0);
// //     ticks.push({ x: px.x, y: px.y + 16, label: String(i), anchor: 'middle' });
// //     const py = toSvg(0, i);
// //     ticks.push({ x: py.x - 10, y: py.y + 4, label: i > 0 ? `${i}i` : `−${Math.abs(i)}i`, anchor: 'end' });
// //   }

// //   // Presets
// //   const presets = [
// //     { z1: { re: 3, im: 1 }, z2: { re: 1, im: 3 }, label: '(3+i) & (1+3i)' },
// //     { z1: { re: 2, im: 2 }, z2: { re: -2, im: 2 }, label: '(2+2i) & (−2+2i)' },
// //     { z1: { re: 4, im: 0 }, z2: { re: 0, im: 3 }, label: '4 & 3i' },
// //     { z1: { re: 3, im: 2 }, z2: { re: 3, im: -2 }, label: 'Conjugate pair' },
// //     { z1: { re: -1, im: 3 }, z2: { re: 2, im: -1 }, label: '(−1+3i) & (2−i)' },
// //   ];

// //   // Arrow head helper for SVG vectors
// //   const arrowHead = (fromX, fromY, toX, toY, color, size = 10) => {
// //     const dx = toX - fromX;
// //     const dy = toY - fromY;
// //     const len = Math.sqrt(dx * dx + dy * dy);
// //     if (len < 5) return null;
// //     const ux = dx / len, uy = dy / len;
// //     const angle = 0.4;
// //     const lx = toX - size * (ux * Math.cos(angle) - uy * Math.sin(angle));
// //     const ly = toY - size * (uy * Math.cos(angle) + ux * Math.sin(angle));
// //     const rx = toX - size * (ux * Math.cos(-angle) - uy * Math.sin(-angle));
// //     const ry = toY - size * (uy * Math.cos(-angle) + ux * Math.sin(-angle));
// //     return <polygon points={`${toX},${toY} ${lx},${ly} ${rx},${ry}`} fill={color} />;
// //   };

// //   // Ray-to-edge helper for off-screen results
// //   const rayToEdge = (angle, color, label) => {
// //     const edgeDist = range - 0.3;
// //     const cosA = Math.cos(angle);
// //     const sinA = Math.sin(angle);
// //     let t = edgeDist * 100;
// //     if (Math.abs(cosA) > 0.001) t = Math.min(t, edgeDist / Math.abs(cosA));
// //     if (Math.abs(sinA) > 0.001) t = Math.min(t, edgeDist / Math.abs(sinA));
// //     const edgeSvg = toSvg(t * cosA, t * sinA);
// //     const aLen = 12, aAngle = 0.35;
// //     const bDx = originSvg.x - edgeSvg.x, bDy = originSvg.y - edgeSvg.y;
// //     const bMag = Math.sqrt(bDx * bDx + bDy * bDy);
// //     if (bMag < 1) return null;
// //     const ux = bDx / bMag, uy = bDy / bMag;
// //     const lx = edgeSvg.x + aLen * (ux * Math.cos(aAngle) - uy * Math.sin(aAngle));
// //     const ly = edgeSvg.y + aLen * (uy * Math.cos(aAngle) + ux * Math.sin(aAngle));
// //     const rx = edgeSvg.x + aLen * (ux * Math.cos(-aAngle) - uy * Math.sin(-aAngle));
// //     const ry = edgeSvg.y + aLen * (uy * Math.cos(-aAngle) + ux * Math.sin(-aAngle));
// //     return (
// //       <g>
// //         <line x1={originSvg.x} y1={originSvg.y} x2={edgeSvg.x} y2={edgeSvg.y}
// //           stroke={color} strokeWidth="3" strokeDasharray="8,4" />
// //         <polygon points={`${edgeSvg.x},${edgeSvg.y} ${lx},${ly} ${rx},${ry}`} fill={color} />
// //         <text
// //           x={edgeSvg.x + (cosA >= 0 ? -50 : 8)}
// //           y={edgeSvg.y + (sinA >= 0 ? -10 : 18)}
// //           fontSize="13" fontWeight="700" fill={color}
// //           fontFamily="'JetBrains Mono', monospace" style={{ pointerEvents: 'none' }}>
// //           {label} →
// //         </text>
// //       </g>
// //     );
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <style dangerouslySetInnerHTML={{ __html: `
// //         @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
// //         * { box-sizing: border-box; }
// //         .drag-point { cursor: grab; }
// //         .drag-point:active { cursor: grabbing; }
// //         .preset-btn:hover { background: #e0ecff !important; border-color: #304090 !important; }
// //         .mode-btn:hover { background: #e0ecff !important; }
// //         input[type=number]:focus { border-color: #304090 !important; outline: none; }
// //       ` }} />

// //       <div style={styles.header}>
// //         <h1 style={styles.title}>Complex Addition & Subtraction</h1>
// //         <span style={styles.subtitle}>Add component-wise, see the parallelogram</span>
// //       </div>

// //       <div style={styles.mainLayout}>
// //         {/* Left column */}
// //         <div style={styles.leftCol}>
// //           <div style={styles.planeWrap}>
// //             <svg
// //               ref={svgRef}
// //               viewBox={`0 0 ${W} ${H}`}
// //               style={{ width: '100%', height: 'auto', display: 'block' }}
// //               onPointerMove={handlePointerMove}
// //               onPointerUp={handlePointerUp}
// //               onPointerLeave={handlePointerUp}
// //             >
// //               <rect width={W} height={H} rx="12" fill="#f0f8f8" />

// //               {gridLinesFixed.map((l, i) => (
// //                 <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#d8e4ec" strokeWidth="0.7" />
// //               ))}

// //               <line x1={margin} y1={oy} x2={W - margin} y2={oy} stroke="#8098b0" strokeWidth="1.5" />
// //               <line x1={ox} y1={margin} x2={ox} y2={H - margin} stroke="#8098b0" strokeWidth="1.5" />
// //               <text x={W - margin + 8} y={oy + 5} fontSize="14" fontWeight="600" fill="#304090" fontFamily="'DM Sans', sans-serif">Re</text>
// //               <text x={ox + 8} y={margin - 8} fontSize="14" fontWeight="600" fill="#304090" fontFamily="'DM Sans', sans-serif">Im</text>

// //               {ticks.map((t, i) => (
// //                 <text key={i} x={t.x} y={t.y} textAnchor={t.anchor} fontSize="12" fill="#8098b0" fontFamily="'JetBrains Mono', monospace">{t.label}</text>
// //               ))}

// //               {/* === ADDITION === */}
// //               {showAdd && (
// //                 <g>
// //                   {/* Parallelogram fill — only if sum is on screen */}
// //                   {sumVisible && (
// //                     <polygon
// //                       points={`${originSvg.x},${originSvg.y} ${z1Svg.x},${z1Svg.y} ${sumSvg.x},${sumSvg.y} ${z2Svg.x},${z2Svg.y}`}
// //                       fill="#1a8060"
// //                       fillOpacity="0.06"
// //                     />
// //                   )}

// //                   {/* Ghost vector: z2 translated to tip of z1 */}
// //                   {sumVisible && (
// //                     <g>
// //                       <line x1={z1Svg.x} y1={z1Svg.y} x2={sumSvg.x} y2={sumSvg.y}
// //                         stroke="#f89838" strokeWidth="2" strokeDasharray="6,4" opacity="0.6" />
// //                       {arrowHead(z1Svg.x, z1Svg.y, sumSvg.x, sumSvg.y, '#f89838')}
// //                     </g>
// //                   )}

// //                   {/* Ghost vector: z1 translated to tip of z2 */}
// //                   {sumVisible && (
// //                     <g>
// //                       <line x1={z2Svg.x} y1={z2Svg.y} x2={sumSvg.x} y2={sumSvg.y}
// //                         stroke="#304090" strokeWidth="2" strokeDasharray="6,4" opacity="0.6" />
// //                       {arrowHead(z2Svg.x, z2Svg.y, sumSvg.x, sumSvg.y, '#304090')}
// //                     </g>
// //                   )}

// //                   {/* Sum vector — full or ray-to-edge */}
// //                   {modSum > 0.1 && (() => {
// //                     if (sumVisible) {
// //                       return (
// //                         <g>
// //                           <line x1={originSvg.x} y1={originSvg.y} x2={sumSvg.x} y2={sumSvg.y}
// //                             stroke="#1a8060" strokeWidth="3" />
// //                           {arrowHead(originSvg.x, originSvg.y, sumSvg.x, sumSvg.y, '#1a8060', 12)}
// //                           <circle cx={sumSvg.x} cy={sumSvg.y} r="8" fill="#1a8060" stroke="#fff" strokeWidth="2" />
// //                           <text x={sumSvg.x + 14} y={sumSvg.y - 10} fontSize="14" fontWeight="700" fill="#1a8060"
// //                             fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>
// //                             z₁+z₂
// //                           </text>
// //                         </g>
// //                       );
// //                     } else {
// //                       const angSum = Math.atan2(sum.im, sum.re);
// //                       return rayToEdge(angSum, '#1a8060', 'z₁+z₂');
// //                     }
// //                   })()}
// //                 </g>
// //               )}

// //               {/* === SUBTRACTION === */}
// //               {showSub && (
// //                 <g>
// //                   {/* Difference vector from z2 tip to z1 tip */}
// //                   <line x1={z2Svg.x} y1={z2Svg.y} x2={z1Svg.x} y2={z1Svg.y}
// //                     stroke="#9060c0" strokeWidth="2" strokeDasharray="5,3" opacity="0.5" />

// //                   {/* Diff vector from origin — full or ray-to-edge */}
// //                   {modDiff > 0.1 && (() => {
// //                     if (diffVisible) {
// //                       return (
// //                         <g>
// //                           <line x1={originSvg.x} y1={originSvg.y} x2={diffSvg.x} y2={diffSvg.y}
// //                             stroke="#9060c0" strokeWidth="3" />
// //                           {arrowHead(originSvg.x, originSvg.y, diffSvg.x, diffSvg.y, '#9060c0', 12)}
// //                           <circle cx={diffSvg.x} cy={diffSvg.y} r="8" fill="#9060c0" stroke="#fff" strokeWidth="2" />
// //                           <text x={diffSvg.x + 14} y={diffSvg.y - 10} fontSize="14" fontWeight="700" fill="#9060c0"
// //                             fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>
// //                             z₁−z₂
// //                           </text>
// //                         </g>
// //                       );
// //                     } else {
// //                       const angDiff = Math.atan2(diff.im, diff.re);
// //                       return rayToEdge(angDiff, '#9060c0', 'z₁−z₂');
// //                     }
// //                   })()}

// //                   {/* −z₂ ghost vector */}
// //                   <g>
// //                     <line x1={originSvg.x} y1={originSvg.y}
// //                       x2={toSvg(-z2.re, -z2.im).x} y2={toSvg(-z2.re, -z2.im).y}
// //                       stroke="#f89838" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.35" />
// //                     <text
// //                       x={toSvg(-z2.re, -z2.im).x + 10}
// //                       y={toSvg(-z2.re, -z2.im).y - 8}
// //                       fontSize="11" fontWeight="600" fill="#f89838" opacity="0.6"
// //                       fontFamily="'JetBrains Mono', monospace" style={{ pointerEvents: 'none' }}>
// //                       −z₂
// //                     </text>
// //                   </g>
// //                 </g>
// //               )}

// //               {/* z1 and z2 vectors (always visible, drawn on top) */}
// //               <line x1={originSvg.x} y1={originSvg.y} x2={z1Svg.x} y2={z1Svg.y} stroke="#304090" strokeWidth="2.5" />
// //               {arrowHead(originSvg.x, originSvg.y, z1Svg.x, z1Svg.y, '#304090', 11)}
// //               <line x1={originSvg.x} y1={originSvg.y} x2={z2Svg.x} y2={z2Svg.y} stroke="#f89838" strokeWidth="2.5" />
// //               {arrowHead(originSvg.x, originSvg.y, z2Svg.x, z2Svg.y, '#f89838', 11)}

// //               {/* z1 point */}
// //               <circle className="drag-point" cx={z1Svg.x} cy={z1Svg.y} r="11" fill="#304090" stroke="#fff" strokeWidth="2.5" onPointerDown={handlePointerDown('z1')} />
// //               <text x={z1Svg.x + 14} y={z1Svg.y - 12} fontSize="15" fontWeight="700" fill="#304090" fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>z₁</text>

// //               {/* z2 point */}
// //               <circle className="drag-point" cx={z2Svg.x} cy={z2Svg.y} r="11" fill="#f89838" stroke="#fff" strokeWidth="2.5" onPointerDown={handlePointerDown('z2')} />
// //               <text x={z2Svg.x + 14} y={z2Svg.y - 12} fontSize="15" fontWeight="700" fill="#f89838" fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>z₂</text>

// //               <circle cx={originSvg.x} cy={originSvg.y} r="3" fill="#8098b0" />
// //             </svg>
// //           </div>

// //           {/* Mode + presets */}
// //           <div style={styles.controlsBox}>
// //             <div style={styles.modeRow}>
// //               <span style={styles.modeLabel}>Show:</span>
// //               {[
// //                 { val: 'both', label: 'Both' },
// //                 { val: 'add', label: 'Addition' },
// //                 { val: 'sub', label: 'Subtraction' },
// //               ].map((m) => (
// //                 <button
// //                   key={m.val}
// //                   className="mode-btn"
// //                   style={{
// //                     ...styles.modeBtn,
// //                     ...(mode === m.val ? styles.modeBtnActive : {}),
// //                   }}
// //                   onClick={() => setMode(m.val)}
// //                 >
// //                   {m.label}
// //                 </button>
// //               ))}
// //             </div>
// //             <div style={styles.presetRow}>
// //               {presets.map((p) => (
// //                 <button key={p.label} className="preset-btn" style={styles.presetBtn}
// //                   onClick={() => { setZ1(p.z1); setZ2(p.z2); }}>
// //                   {p.label}
// //                 </button>
// //               ))}
// //               <button className="preset-btn" style={{ ...styles.presetBtn, ...styles.randBtn }}
// //                 onClick={() => {
// //                   setZ1({ re: clamp(Math.random() * 8 - 4), im: clamp(Math.random() * 8 - 4) });
// //                   setZ2({ re: clamp(Math.random() * 8 - 4), im: clamp(Math.random() * 8 - 4) });
// //                 }}>
// //                 Random
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right panel */}
// //         <div style={styles.panel}>
// //           {/* Inputs */}
// //           <div style={styles.inputBox}>
// //             <div style={{ ...styles.sectionTitle, color: palette.navy }}>z₁</div>
// //             <div style={styles.inputRow}>
// //               <label style={styles.inputLabel}>Re:</label>
// //               <input type="number" step="0.1" min="-5" max="5" value={z1.re}
// //                 onChange={(e) => safeSet(setZ1, parseFloat(e.target.value) || 0, z1.im)} style={styles.numInput} />
// //               <label style={styles.inputLabel}>Im:</label>
// //               <input type="number" step="0.1" min="-5" max="5" value={z1.im}
// //                 onChange={(e) => safeSet(setZ1, z1.re, parseFloat(e.target.value) || 0)} style={styles.numInput} />
// //               <span style={styles.miniVal}><strong style={{ color: palette.navy }}>{fmtComplex(z1.re, z1.im)}</strong></span>
// //             </div>
// //           </div>

// //           <div style={styles.inputBox}>
// //             <div style={{ ...styles.sectionTitle, color: palette.orange }}>z₂</div>
// //             <div style={styles.inputRow}>
// //               <label style={styles.inputLabel}>Re:</label>
// //               <input type="number" step="0.1" min="-5" max="5" value={z2.re}
// //                 onChange={(e) => safeSet(setZ2, parseFloat(e.target.value) || 0, z2.im)} style={styles.numInput} />
// //               <label style={styles.inputLabel}>Im:</label>
// //               <input type="number" step="0.1" min="-5" max="5" value={z2.im}
// //                 onChange={(e) => safeSet(setZ2, z2.re, parseFloat(e.target.value) || 0)} style={styles.numInput} />
// //               <span style={styles.miniVal}><strong style={{ color: palette.orange }}>{fmtComplex(z2.re, z2.im)}</strong></span>
// //             </div>
// //           </div>

// //           {warning && (
// //             <div style={styles.warningMsg}>Values are limited to ±5. Input was clamped.</div>
// //           )}

// //           {/* Addition result */}
// //           {showAdd && (
// //             <div style={styles.resultBox}>
// //               <div style={{ ...styles.sectionTitle, color: palette.green }}>z₁ + z₂ — Sum</div>
// //               <div style={styles.resultVal}>{fmtComplex(sum.re, sum.im)}</div>
// //               <div style={styles.resultSub}>|z₁+z₂| = {fmtNum(modSum)}</div>
// //             </div>
// //           )}

// //           {/* Subtraction result */}
// //           {showSub && (
// //             <div style={{ ...styles.resultBox, backgroundColor: '#9060c008', borderColor: '#9060c040' }}>
// //               <div style={{ ...styles.sectionTitle, color: '#9060c0' }}>z₁ − z₂ — Difference</div>
// //               <div style={{ ...styles.resultVal, color: '#9060c0' }}>{fmtComplex(diff.re, diff.im)}</div>
// //               <div style={styles.resultSub}>|z₁−z₂| = {fmtNum(modDiff)} (distance between z₁ and z₂)</div>
// //             </div>
// //           )}

// //           {/* Step-by-step */}
// //           <div style={styles.stepsBox}>
// //             <div style={styles.sectionTitle}>Step-by-Step</div>
// //             {showAdd && (
// //               <>
// //                 <div style={styles.stepLabel}>Addition:</div>
// //                 <div style={styles.stepMath}>
// //                   ({fmtComplex(z1.re, z1.im)}) + ({fmtComplex(z2.re, z2.im)})
// //                 </div>
// //                 <div style={styles.stepMath}>
// //                   = ({fmtNum(z1.re)} + {fmtNum(z2.re)}) + ({fmtNum(z1.im)} + {fmtNum(z2.im)})i
// //                 </div>
// //                 <div style={{ ...styles.stepMath, fontWeight: '700', color: palette.green }}>
// //                   = {fmtComplex(sum.re, sum.im)}
// //                 </div>
// //               </>
// //             )}
// //             {showSub && (
// //               <>
// //                 <div style={{ ...styles.stepLabel, marginTop: showAdd ? '10px' : '0' }}>Subtraction:</div>
// //                 <div style={styles.stepMath}>
// //                   ({fmtComplex(z1.re, z1.im)}) − ({fmtComplex(z2.re, z2.im)})
// //                 </div>
// //                 <div style={styles.stepMath}>
// //                   = ({fmtNum(z1.re)} − {fmtNum(z2.re)}) + ({fmtNum(z1.im)} − {fmtNum(z2.im)})i
// //                 </div>
// //                 <div style={{ ...styles.stepMath, fontWeight: '700', color: '#9060c0' }}>
// //                   = {fmtComplex(diff.re, diff.im)}
// //                 </div>
// //               </>
// //             )}
// //           </div>

// //           {/* Triangle inequality */}
// //           {showAdd && (
// //             <div style={styles.inequalityBox}>
// //               <div style={styles.sectionTitle}>Triangle Inequality</div>
// //               <div style={styles.ineqMath}>
// //                 |z₁ + z₂| ≤ |z₁| + |z₂|
// //               </div>
// //               <div style={styles.ineqMath}>
// //                 {fmtNum(modSum)} ≤ {fmtNum(mod1)} + {fmtNum(mod2)} = {fmtNum(mod1 + mod2)}{' '}
// //                 <strong style={{ color: palette.green }}>✓</strong>
// //               </div>
// //               <div style={styles.ineqNote}>
// //                 Equality holds when z₁ and z₂ point in the same direction (same argument).
// //               </div>
// //             </div>
// //           )}

// //           {/* Key Ideas */}
// //           <div style={styles.explainBox}>
// //             <div style={styles.sectionTitle}>Key Ideas</div>
// //             <div style={styles.explainItem}>
// //               <span style={{ ...styles.dot, backgroundColor: palette.green }}></span>
// //               <span>
// //                 <strong>Addition is component-wise:</strong> add the real parts, add the imaginary parts. (a+bi) + (c+di) = (a+c) + (b+d)i. No cross-terms, no i² — it is just vector addition.
// //               </span>
// //             </div>
// //             <div style={styles.explainItem}>
// //               <span style={{ ...styles.dot, backgroundColor: palette.navy }}></span>
// //               <span>
// //                 <strong>The parallelogram rule:</strong> z₁+z₂ is the diagonal of the parallelogram formed by z₁ and z₂. The dashed vectors show z₂ translated to the tip of z₁ (and vice versa) — &quot;tip to tail.&quot;
// //               </span>
// //             </div>
// //             <div style={styles.explainItem}>
// //               <span style={{ ...styles.dot, backgroundColor: '#9060c0' }}></span>
// //               <span>
// //                 <strong>Subtraction gives the vector from z₂ to z₁.</strong> The purple dashed line between the two points has the same length and direction as z₁−z₂. The modulus |z₁−z₂| is the distance between the two points.
// //               </span>
// //             </div>
// //             <div style={styles.explainItem}>
// //               <span style={{ ...styles.dot, backgroundColor: palette.orange }}></span>
// //               <span>
// //                 <strong>z₁ − z₂ = z₁ + (−z₂).</strong> Subtraction is the same as adding the negation. The ghost vector −z₂ is z₂ rotated by 180°. Adding it to z₁ via the parallelogram rule gives the same result.
// //               </span>
// //             </div>
// //             <div style={styles.explainItem}>
// //               <span style={{ ...styles.dot, backgroundColor: palette.blue }}></span>
// //               <span>
// //                 <strong>Triangle inequality:</strong> |z₁+z₂| ≤ |z₁| + |z₂|. The sum can never be longer than both vectors placed end-to-end. Drag z₁ and z₂ to the same direction to see equality.
// //               </span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // const palette = {
// //   navy: '#304090',
// //   blue: '#4098d8',
// //   orange: '#f89838',
// //   bg: '#f0f8f8',
// //   white: '#ffffff',
// //   text: '#1a2440',
// //   muted: '#5a6480',
// //   border: '#c8d0e0',
// //   green: '#1a8060',
// // };

// // const mono = "'JetBrains Mono', monospace";
// // const sans = "'DM Sans', sans-serif";

// // const styles = {
// //   container: {
// //     minHeight: '100vh',
// //     backgroundColor: palette.bg,
// //     color: palette.text,
// //     fontFamily: sans,
// //     padding: '20px 28px',
// //     maxWidth: '1280px',
// //     margin: '0 auto',
// //   },
// //   header: {
// //     display: 'flex',
// //     alignItems: 'baseline',
// //     gap: '14px',
// //     marginBottom: '16px',
// //     borderBottom: `2px solid ${palette.navy}`,
// //     paddingBottom: '10px',
// //   },
// //   title: {
// //     fontSize: '1.7rem',
// //     fontWeight: '700',
// //     margin: 0,
// //     color: palette.navy,
// //   },
// //   subtitle: {
// //     fontSize: '1.02rem',
// //     color: palette.muted,
// //   },
// //   mainLayout: {
// //     display: 'grid',
// //     gridTemplateColumns: '720px 1fr',
// //     gap: '20px',
// //     alignItems: 'start',
// //   },
// //   leftCol: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '10px',
// //   },
// //   planeWrap: {
// //     backgroundColor: palette.white,
// //     border: `1px solid ${palette.border}`,
// //     borderRadius: '10px',
// //     padding: '6px',
// //     boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
// //   },
// //   panel: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '12px',
// //   },

// //   /* Controls */
// //   controlsBox: {
// //     backgroundColor: palette.white,
// //     border: `1px solid ${palette.border}`,
// //     borderRadius: '8px',
// //     padding: '12px 14px',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '8px',
// //   },
// //   modeRow: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '6px',
// //   },
// //   modeLabel: {
// //     fontSize: '0.93rem',
// //     fontWeight: '600',
// //     color: palette.muted,
// //     marginRight: '4px',
// //   },
// //   modeBtn: {
// //     padding: '5px 14px',
// //     border: `1px solid ${palette.border}`,
// //     borderRadius: '5px',
// //     backgroundColor: palette.white,
// //     fontFamily: sans,
// //     fontSize: '0.93rem',
// //     fontWeight: '600',
// //     cursor: 'pointer',
// //     color: palette.text,
// //     transition: 'all 0.12s',
// //   },
// //   modeBtnActive: {
// //     backgroundColor: '#e0ecff',
// //     borderColor: palette.navy,
// //     color: palette.navy,
// //     fontWeight: '700',
// //   },
// //   presetRow: {
// //     display: 'flex',
// //     gap: '6px',
// //     flexWrap: 'wrap',
// //   },
// //   presetBtn: {
// //     padding: '4px 10px',
// //     border: `1px solid ${palette.border}`,
// //     borderRadius: '5px',
// //     backgroundColor: palette.white,
// //     fontFamily: mono,
// //     fontSize: '0.82rem',
// //     fontWeight: '600',
// //     cursor: 'pointer',
// //     color: palette.text,
// //     transition: 'all 0.12s',
// //   },
// //   randBtn: {
// //     color: palette.navy,
// //     borderColor: palette.navy,
// //     fontFamily: sans,
// //     fontWeight: '700',
// //   },

// //   /* Inputs */
// //   inputBox: {
// //     backgroundColor: palette.white,
// //     border: `1px solid ${palette.border}`,
// //     borderRadius: '8px',
// //     padding: '10px 14px',
// //   },
// //   sectionTitle: {
// //     fontSize: '0.88rem',
// //     fontWeight: '700',
// //     color: palette.navy,
// //     textTransform: 'uppercase',
// //     letterSpacing: '0.5px',
// //     marginBottom: '6px',
// //   },
// //   inputRow: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '8px',
// //   },
// //   inputLabel: {
// //     fontSize: '0.96rem',
// //     fontWeight: '600',
// //     color: palette.muted,
// //     fontFamily: mono,
// //   },
// //   numInput: {
// //     width: '72px',
// //     fontSize: '1.08rem',
// //     fontFamily: mono,
// //     fontWeight: '600',
// //     padding: '4px 8px',
// //     border: `2px solid ${palette.border}`,
// //     borderRadius: '5px',
// //     color: palette.navy,
// //     backgroundColor: palette.bg,
// //     outline: 'none',
// //   },
// //   miniVal: {
// //     fontFamily: mono,
// //     fontSize: '0.96rem',
// //     marginLeft: '4px',
// //   },
// //   warningMsg: {
// //     padding: '6px 10px',
// //     fontSize: '0.88rem',
// //     fontWeight: '600',
// //     color: '#b03030',
// //     backgroundColor: '#fef2f2',
// //     border: '1px solid #f0c0c0',
// //     borderRadius: '5px',
// //   },

// //   /* Result */
// //   resultBox: {
// //     backgroundColor: `${palette.green}08`,
// //     border: `2px solid ${palette.green}40`,
// //     borderRadius: '8px',
// //     padding: '10px 14px',
// //   },
// //   resultVal: {
// //     fontFamily: mono,
// //     fontSize: '1.3rem',
// //     fontWeight: '700',
// //     color: palette.green,
// //     marginBottom: '2px',
// //   },
// //   resultSub: {
// //     fontFamily: mono,
// //     fontSize: '0.88rem',
// //     color: palette.muted,
// //   },

// //   /* Steps */
// //   stepsBox: {
// //     backgroundColor: palette.white,
// //     border: `1px solid ${palette.border}`,
// //     borderRadius: '8px',
// //     padding: '12px 14px',
// //   },
// //   stepLabel: {
// //     fontSize: '0.88rem',
// //     fontWeight: '700',
// //     color: palette.navy,
// //     marginBottom: '2px',
// //   },
// //   stepMath: {
// //     fontFamily: mono,
// //     fontSize: '0.93rem',
// //     fontWeight: '600',
// //     color: palette.text,
// //     lineHeight: 1.7,
// //     paddingLeft: '4px',
// //   },

// //   /* Inequality */
// //   inequalityBox: {
// //     backgroundColor: `${palette.blue}08`,
// //     border: `1px solid ${palette.blue}30`,
// //     borderRadius: '8px',
// //     padding: '10px 14px',
// //   },
// //   ineqMath: {
// //     fontFamily: mono,
// //     fontSize: '0.96rem',
// //     fontWeight: '600',
// //     color: palette.text,
// //     lineHeight: 1.6,
// //     paddingLeft: '4px',
// //   },
// //   ineqNote: {
// //     fontSize: '0.88rem',
// //     color: palette.muted,
// //     marginTop: '4px',
// //     fontStyle: 'italic',
// //   },

// //   /* Explanation */
// //   explainBox: {
// //     backgroundColor: palette.white,
// //     border: `1px solid ${palette.border}`,
// //     borderRadius: '8px',
// //     padding: '12px 14px',
// //   },
// //   explainItem: {
// //     display: 'flex',
// //     alignItems: 'flex-start',
// //     gap: '8px',
// //     fontSize: '0.93rem',
// //     color: palette.text,
// //     lineHeight: 1.5,
// //     marginBottom: '10px',
// //   },
// //   dot: {
// //     display: 'inline-block',
// //     width: '8px',
// //     height: '8px',
// //     borderRadius: '50%',
// //     marginTop: '6px',
// //     flexShrink: 0,
// //   },
// // };


// 'use client';

// import { useState, useRef, useCallback } from 'react';

// export default function ComplexAddSubVisualizer() {
//   const [z1, setZ1] = useState({ re: 3, im: 1 });
//   const [z2, setZ2] = useState({ re: 1, im: 3 });
//   const [mode, setMode] = useState('both'); // 'add' | 'sub' | 'both'
//   const [dragging, setDragging] = useState(null);
//   const [warning, setWarning] = useState(false);
//   const warningTimer = useRef(null);
//   const svgRef = useRef(null);

//   const W = 720, H = 720;
//   const margin = 52;
//   const range = 5;
//   const maxVal = 5;
//   const scale = (W - 2 * margin) / (2 * range);
//   const ox = W / 2;
//   const oy = H / 2;

//   const clamp = (val) => Math.max(-maxVal, Math.min(maxVal, Math.round(val * 10) / 10));

//   const safeSet = (setter, newRe, newIm) => {
//     const needsClamp = Math.abs(newRe) > maxVal || Math.abs(newIm) > maxVal;
//     if (needsClamp) {
//       setWarning(true);
//       if (warningTimer.current) clearTimeout(warningTimer.current);
//       warningTimer.current = setTimeout(() => setWarning(false), 2500);
//     }
//     setter({ re: clamp(newRe), im: clamp(newIm) });
//   };

//   const toSvg = (r, i) => ({ x: ox + r * scale, y: oy - i * scale });
//   const fromSvg = (sx, sy) => ({ re: (sx - ox) / scale, im: (oy - sy) / scale });
//   const originSvg = toSvg(0, 0);

//   const sum = { re: z1.re + z2.re, im: z1.im + z2.im };
//   const diff = { re: z1.re - z2.re, im: z1.im - z2.im };

//   const mod1 = Math.sqrt(z1.re * z1.re + z1.im * z1.im);
//   const mod2 = Math.sqrt(z2.re * z2.re + z2.im * z2.im);
//   const modSum = Math.sqrt(sum.re * sum.re + sum.im * sum.im);
//   const modDiff = Math.sqrt(diff.re * diff.re + diff.im * diff.im);

//   const z1Svg = toSvg(z1.re, z1.im);
//   const z2Svg = toSvg(z2.re, z2.im);
//   const sumSvg = toSvg(sum.re, sum.im);
//   const diffSvg = toSvg(diff.re, diff.im);

//   const sumVisible = Math.abs(sum.re) <= range && Math.abs(sum.im) <= range;
//   const diffVisible = Math.abs(diff.re) <= range && Math.abs(diff.im) <= range;

//   const showAdd = mode === 'add' || mode === 'both';
//   const showSub = mode === 'sub' || mode === 'both';

//   const handlePointerDown = useCallback((which) => (e) => {
//     setDragging(which);
//     e.target.setPointerCapture(e.pointerId);
//   }, []);

//   const handlePointerMove = useCallback((e) => {
//     if (!dragging || !svgRef.current) return;
//     const rect = svgRef.current.getBoundingClientRect();
//     const sx = (e.clientX - rect.left) * (W / rect.width);
//     const sy = (e.clientY - rect.top) * (H / rect.height);
//     const pt = fromSvg(sx, sy);
//     const setter = dragging === 'z1' ? setZ1 : setZ2;
//     setter({ re: clamp(pt.re), im: clamp(pt.im) });
//   }, [dragging]);

//   const handlePointerUp = useCallback(() => {
//     setDragging(null);
//   }, []);

//   const fmtNum = (v) => {
//     if (Math.abs(v) < 0.005) return '0';
//     if (Math.abs(v - Math.round(v)) < 0.005) return String(Math.round(v));
//     return v.toFixed(1);
//   };

//   const fmtComplex = (re, im) => {
//     const rs = fmtNum(re);
//     const ai = Math.abs(im);
//     const is_ = fmtNum(ai);
//     if (Math.abs(im) < 0.005) return rs;
//     if (Math.abs(re) < 0.005) {
//       if (is_ === '1') return im > 0 ? 'i' : '\u2212i';
//       return im > 0 ? `${is_}i` : `\u2212${is_}i`;
//     }
//     const sign = im > 0 ? ' + ' : ' \u2212 ';
//     const iPart = is_ === '1' ? 'i' : `${is_}i`;
//     return `${rs}${sign}${iPart}`;
//   };

//   const gridLinesFixed = [];
//   for (let i = -range; i <= range; i++) {
//     if (i === 0) continue;
//     const v1 = toSvg(i, -range), v2 = toSvg(i, range);
//     gridLinesFixed.push({ x1: v1.x, y1: v1.y, x2: v2.x, y2: v2.y });
//     const h1 = toSvg(-range, i), h2 = toSvg(range, i);
//     gridLinesFixed.push({ x1: h1.x, y1: h1.y, x2: h2.x, y2: h2.y });
//   }

//   const ticks = [];
//   for (let i = -range; i <= range; i++) {
//     if (i === 0) continue;
//     const px = toSvg(i, 0);
//     ticks.push({ x: px.x, y: px.y + 16, label: String(i), anchor: 'middle' });
//     const py = toSvg(0, i);
//     ticks.push({ x: py.x - 10, y: py.y + 4, label: i > 0 ? `${i}i` : `\u2212${Math.abs(i)}i`, anchor: 'end' });
//   }

//   const presets = [
//     { z1: { re: 3, im: 1 }, z2: { re: 1, im: 3 }, label: '(3+i) & (1+3i)' },
//     { z1: { re: 2, im: 2 }, z2: { re: -2, im: 2 }, label: '(2+2i) & (\u22122+2i)' },
//     { z1: { re: 4, im: 0 }, z2: { re: 0, im: 3 }, label: '4 & 3i' },
//     { z1: { re: 3, im: 2 }, z2: { re: 3, im: -2 }, label: 'Conjugate pair' },
//     { z1: { re: -1, im: 3 }, z2: { re: 2, im: -1 }, label: '(\u22121+3i) & (2\u2212i)' },
//   ];

//   const arrowHead = (fromX, fromY, toX, toY, color, size = 10) => {
//     const dx = toX - fromX;
//     const dy = toY - fromY;
//     const len = Math.sqrt(dx * dx + dy * dy);
//     if (len < 5) return null;
//     const ux = dx / len, uy = dy / len;
//     const angle = 0.4;
//     const lx = toX - size * (ux * Math.cos(angle) - uy * Math.sin(angle));
//     const ly = toY - size * (uy * Math.cos(angle) + ux * Math.sin(angle));
//     const rx = toX - size * (ux * Math.cos(-angle) - uy * Math.sin(-angle));
//     const ry = toY - size * (uy * Math.cos(-angle) + ux * Math.sin(-angle));
//     return <polygon points={`${toX},${toY} ${lx},${ly} ${rx},${ry}`} fill={color} />;
//   };

//   const rayToEdge = (angle, color, label) => {
//     const edgeDist = range - 0.3;
//     const cosA = Math.cos(angle);
//     const sinA = Math.sin(angle);
//     let t = edgeDist * 100;
//     if (Math.abs(cosA) > 0.001) t = Math.min(t, edgeDist / Math.abs(cosA));
//     if (Math.abs(sinA) > 0.001) t = Math.min(t, edgeDist / Math.abs(sinA));
//     const edgeSvg = toSvg(t * cosA, t * sinA);
//     const aLen = 12, aAngle = 0.35;
//     const bDx = originSvg.x - edgeSvg.x, bDy = originSvg.y - edgeSvg.y;
//     const bMag = Math.sqrt(bDx * bDx + bDy * bDy);
//     if (bMag < 1) return null;
//     const ux = bDx / bMag, uy = bDy / bMag;
//     const lx = edgeSvg.x + aLen * (ux * Math.cos(aAngle) - uy * Math.sin(aAngle));
//     const ly = edgeSvg.y + aLen * (uy * Math.cos(aAngle) + ux * Math.sin(aAngle));
//     const rx = edgeSvg.x + aLen * (ux * Math.cos(-aAngle) - uy * Math.sin(-aAngle));
//     const ry = edgeSvg.y + aLen * (uy * Math.cos(-aAngle) + ux * Math.sin(-aAngle));
//     return (
//       <g>
//         <line x1={originSvg.x} y1={originSvg.y} x2={edgeSvg.x} y2={edgeSvg.y}
//           stroke={color} strokeWidth="3" strokeDasharray="8,4" />
//         <polygon points={`${edgeSvg.x},${edgeSvg.y} ${lx},${ly} ${rx},${ry}`} fill={color} />
//         <text
//           x={edgeSvg.x + (cosA >= 0 ? -50 : 8)}
//           y={edgeSvg.y + (sinA >= 0 ? -10 : 18)}
//           fontSize="13" fontWeight="700" fill={color}
//           fontFamily="'JetBrains Mono', monospace" style={{ pointerEvents: 'none' }}>
//           {label} &rarr;
//         </text>
//       </g>
//     );
//   };

//   return (
//     <div style={styles.container}>
//       <style dangerouslySetInnerHTML={{ __html: `
//         @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
//         * { box-sizing: border-box; }
//         .drag-point { cursor: grab; }
//         .drag-point:active { cursor: grabbing; }
//         .preset-btn:hover { background: #e0ecff !important; border-color: #304090 !important; }
//         .mode-btn:hover { background: #e0ecff !important; }
//         input[type=number]:focus { border-color: #304090 !important; outline: none; }
//       ` }} />

//       <div style={styles.header}>
//         <h1 style={styles.title}>Complex Addition &amp; Subtraction</h1>
//         <span style={styles.subtitle}>Add component-wise, see the parallelogram</span>
//       </div>

//       <div style={styles.mainLayout}>
//         <div style={styles.leftCol}>
//           <div style={styles.planeWrap}>
//             <svg
//               ref={svgRef}
//               viewBox={`0 0 ${W} ${H}`}
//               style={{ width: '100%', height: 'auto', display: 'block' }}
//               onPointerMove={handlePointerMove}
//               onPointerUp={handlePointerUp}
//               onPointerLeave={handlePointerUp}
//             >
//               <rect width={W} height={H} rx="12" fill="#ECEEF0" />

//               {gridLinesFixed.map((l, i) => (
//                 <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#d8e4ec" strokeWidth="0.7" />
//               ))}

//               <line x1={margin} y1={oy} x2={W - margin} y2={oy} stroke="#8098b0" strokeWidth="1.5" />
//               <line x1={ox} y1={margin} x2={ox} y2={H - margin} stroke="#8098b0" strokeWidth="1.5" />
//               <text x={W - margin + 8} y={oy + 5} fontSize="14" fontWeight="600" fill="#304090" fontFamily="'DM Sans', sans-serif">Re</text>
//               <text x={ox + 8} y={margin - 8} fontSize="14" fontWeight="600" fill="#304090" fontFamily="'DM Sans', sans-serif">Im</text>

//               {ticks.map((t, i) => (
//                 <text key={i} x={t.x} y={t.y} textAnchor={t.anchor} fontSize="12" fill="#8098b0" fontFamily="'JetBrains Mono', monospace">{t.label}</text>
//               ))}

//               {showAdd && (
//                 <g>
//                   {sumVisible && (
//                     <polygon
//                       points={`${originSvg.x},${originSvg.y} ${z1Svg.x},${z1Svg.y} ${sumSvg.x},${sumSvg.y} ${z2Svg.x},${z2Svg.y}`}
//                       fill="#2A7A8C" fillOpacity="0.06"
//                     />
//                   )}
//                   {sumVisible && (
//                     <g>
//                       <line x1={z1Svg.x} y1={z1Svg.y} x2={sumSvg.x} y2={sumSvg.y}
//                         stroke="#f89838" strokeWidth="2" strokeDasharray="6,4" opacity="0.6" />
//                       {arrowHead(z1Svg.x, z1Svg.y, sumSvg.x, sumSvg.y, '#f89838')}
//                     </g>
//                   )}
//                   {sumVisible && (
//                     <g>
//                       <line x1={z2Svg.x} y1={z2Svg.y} x2={sumSvg.x} y2={sumSvg.y}
//                         stroke="#304090" strokeWidth="2" strokeDasharray="6,4" opacity="0.6" />
//                       {arrowHead(z2Svg.x, z2Svg.y, sumSvg.x, sumSvg.y, '#304090')}
//                     </g>
//                   )}
//                   {modSum > 0.1 && (() => {
//                     if (sumVisible) {
//                       return (
//                         <g>
//                           <line x1={originSvg.x} y1={originSvg.y} x2={sumSvg.x} y2={sumSvg.y}
//                             stroke="#2A7A8C" strokeWidth="3" />
//                           {arrowHead(originSvg.x, originSvg.y, sumSvg.x, sumSvg.y, '#2A7A8C', 12)}
//                           <circle cx={sumSvg.x} cy={sumSvg.y} r="8" fill="#2A7A8C" stroke="#fff" strokeWidth="2" />
//                           <text x={sumSvg.x + 14} y={sumSvg.y - 10} fontSize="14" fontWeight="700" fill="#2A7A8C"
//                             fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>
//                             z&#x2081;+z&#x2082;
//                           </text>
//                         </g>
//                       );
//                     } else {
//                       const angSum = Math.atan2(sum.im, sum.re);
//                       return rayToEdge(angSum, '#2A7A8C', 'z\u2081+z\u2082');
//                     }
//                   })()}
//                 </g>
//               )}

//               {showSub && (
//                 <g>
//                   <line x1={z2Svg.x} y1={z2Svg.y} x2={z1Svg.x} y2={z1Svg.y}
//                     stroke="#9060c0" strokeWidth="2" strokeDasharray="5,3" opacity="0.5" />
//                   {modDiff > 0.1 && (() => {
//                     if (diffVisible) {
//                       return (
//                         <g>
//                           <line x1={originSvg.x} y1={originSvg.y} x2={diffSvg.x} y2={diffSvg.y}
//                             stroke="#9060c0" strokeWidth="3" />
//                           {arrowHead(originSvg.x, originSvg.y, diffSvg.x, diffSvg.y, '#9060c0', 12)}
//                           <circle cx={diffSvg.x} cy={diffSvg.y} r="8" fill="#9060c0" stroke="#fff" strokeWidth="2" />
//                           <text x={diffSvg.x + 14} y={diffSvg.y - 10} fontSize="14" fontWeight="700" fill="#9060c0"
//                             fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>
//                             z&#x2081;&minus;z&#x2082;
//                           </text>
//                         </g>
//                       );
//                     } else {
//                       const angDiff = Math.atan2(diff.im, diff.re);
//                       return rayToEdge(angDiff, '#9060c0', 'z\u2081\u2212z\u2082');
//                     }
//                   })()}
//                   <g>
//                     <line x1={originSvg.x} y1={originSvg.y}
//                       x2={toSvg(-z2.re, -z2.im).x} y2={toSvg(-z2.re, -z2.im).y}
//                       stroke="#f89838" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.35" />
//                     <text
//                       x={toSvg(-z2.re, -z2.im).x + 10}
//                       y={toSvg(-z2.re, -z2.im).y - 8}
//                       fontSize="11" fontWeight="600" fill="#f89838" opacity="0.6"
//                       fontFamily="'JetBrains Mono', monospace" style={{ pointerEvents: 'none' }}>
//                       &minus;z&#x2082;
//                     </text>
//                   </g>
//                 </g>
//               )}

//               <line x1={originSvg.x} y1={originSvg.y} x2={z1Svg.x} y2={z1Svg.y} stroke="#304090" strokeWidth="2.5" />
//               {arrowHead(originSvg.x, originSvg.y, z1Svg.x, z1Svg.y, '#304090', 11)}
//               <line x1={originSvg.x} y1={originSvg.y} x2={z2Svg.x} y2={z2Svg.y} stroke="#f89838" strokeWidth="2.5" />
//               {arrowHead(originSvg.x, originSvg.y, z2Svg.x, z2Svg.y, '#f89838', 11)}

//               <circle className="drag-point" cx={z1Svg.x} cy={z1Svg.y} r="11" fill="#304090" stroke="#fff" strokeWidth="2.5" onPointerDown={handlePointerDown('z1')} />
//               <text x={z1Svg.x + 14} y={z1Svg.y - 12} fontSize="15" fontWeight="700" fill="#304090" fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>z&#x2081;</text>

//               <circle className="drag-point" cx={z2Svg.x} cy={z2Svg.y} r="11" fill="#f89838" stroke="#fff" strokeWidth="2.5" onPointerDown={handlePointerDown('z2')} />
//               <text x={z2Svg.x + 14} y={z2Svg.y - 12} fontSize="15" fontWeight="700" fill="#f89838" fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>z&#x2082;</text>

//               <circle cx={originSvg.x} cy={originSvg.y} r="3" fill="#8098b0" />
//             </svg>
//           </div>

//           <div style={styles.controlsBox}>
//             <div style={styles.modeRow}>
//               <span style={styles.modeLabel}>Show:</span>
//               {[
//                 { val: 'both', label: 'Both' },
//                 { val: 'add', label: 'Addition' },
//                 { val: 'sub', label: 'Subtraction' },
//               ].map((m) => (
//                 <button
//                   key={m.val}
//                   className="mode-btn"
//                   style={{ ...styles.modeBtn, ...(mode === m.val ? styles.modeBtnActive : {}) }}
//                   onClick={() => setMode(m.val)}
//                 >
//                   {m.label}
//                 </button>
//               ))}
//             </div>
//             <div style={styles.presetRow}>
//               {presets.map((p) => (
//                 <button key={p.label} className="preset-btn" style={styles.presetBtn}
//                   onClick={() => { setZ1(p.z1); setZ2(p.z2); }}>
//                   {p.label}
//                 </button>
//               ))}
//               <button className="preset-btn" style={{ ...styles.presetBtn, ...styles.randBtn }}
//                 onClick={() => {
//                   setZ1({ re: clamp(Math.random() * 8 - 4), im: clamp(Math.random() * 8 - 4) });
//                   setZ2({ re: clamp(Math.random() * 8 - 4), im: clamp(Math.random() * 8 - 4) });
//                 }}>
//                 Random
//               </button>
//             </div>
//           </div>
//         </div>

//         <div style={styles.panel}>
//           <div style={styles.inputBox}>
//             <div style={{ ...styles.sectionTitle, color: palette.navy }}>z&#x2081;</div>
//             <div style={styles.inputRow}>
//               <label style={styles.inputLabel}>Re:</label>
//               <input type="number" step="0.1" min="-5" max="5" value={z1.re}
//                 onChange={(e) => safeSet(setZ1, parseFloat(e.target.value) || 0, z1.im)} style={styles.numInput} />
//               <label style={styles.inputLabel}>Im:</label>
//               <input type="number" step="0.1" min="-5" max="5" value={z1.im}
//                 onChange={(e) => safeSet(setZ1, z1.re, parseFloat(e.target.value) || 0)} style={styles.numInput} />
//               <span style={styles.miniVal}><strong style={{ color: palette.navy }}>{fmtComplex(z1.re, z1.im)}</strong></span>
//             </div>
//           </div>

//           <div style={styles.inputBox}>
//             <div style={{ ...styles.sectionTitle, color: palette.orange }}>z&#x2082;</div>
//             <div style={styles.inputRow}>
//               <label style={styles.inputLabel}>Re:</label>
//               <input type="number" step="0.1" min="-5" max="5" value={z2.re}
//                 onChange={(e) => safeSet(setZ2, parseFloat(e.target.value) || 0, z2.im)} style={styles.numInput} />
//               <label style={styles.inputLabel}>Im:</label>
//               <input type="number" step="0.1" min="-5" max="5" value={z2.im}
//                 onChange={(e) => safeSet(setZ2, z2.re, parseFloat(e.target.value) || 0)} style={styles.numInput} />
//               <span style={styles.miniVal}><strong style={{ color: palette.orange }}>{fmtComplex(z2.re, z2.im)}</strong></span>
//             </div>
//           </div>

//           {warning && (
//             <div style={styles.warningMsg}>Values are limited to &plusmn;5. Input was clamped.</div>
//           )}

//           {showAdd && (
//             <div style={styles.resultBox}>
//               <div style={{ ...styles.sectionTitle, color: palette.teal }}>z&#x2081; + z&#x2082; &mdash; Sum</div>
//               <div style={styles.resultVal}>{fmtComplex(sum.re, sum.im)}</div>
//               <div style={styles.resultSub}>|z&#x2081;+z&#x2082;| = {fmtNum(modSum)}</div>
//             </div>
//           )}

//           {showSub && (
//             <div style={{ ...styles.resultBox, backgroundColor: '#9060c008', borderColor: '#9060c040' }}>
//               <div style={{ ...styles.sectionTitle, color: '#9060c0' }}>z&#x2081; &minus; z&#x2082; &mdash; Difference</div>
//               <div style={{ ...styles.resultVal, color: '#9060c0' }}>{fmtComplex(diff.re, diff.im)}</div>
//               <div style={styles.resultSub}>|z&#x2081;&minus;z&#x2082;| = {fmtNum(modDiff)} (distance between z&#x2081; and z&#x2082;)</div>
//             </div>
//           )}

//           <div style={styles.stepsBox}>
//             <div style={styles.sectionTitle}>Step-by-Step</div>
//             {showAdd && (
//               <>
//                 <div style={styles.stepLabel}>Addition:</div>
//                 <div style={styles.stepMath}>
//                   ({fmtComplex(z1.re, z1.im)}) + ({fmtComplex(z2.re, z2.im)})
//                 </div>
//                 <div style={styles.stepMath}>
//                   = ({fmtNum(z1.re)} + {fmtNum(z2.re)}) + ({fmtNum(z1.im)} + {fmtNum(z2.im)})i
//                 </div>
//                 <div style={{ ...styles.stepMath, fontWeight: '700', color: palette.teal }}>
//                   = {fmtComplex(sum.re, sum.im)}
//                 </div>
//               </>
//             )}
//             {showSub && (
//               <>
//                 <div style={{ ...styles.stepLabel, marginTop: showAdd ? '10px' : '0' }}>Subtraction:</div>
//                 <div style={styles.stepMath}>
//                   ({fmtComplex(z1.re, z1.im)}) &minus; ({fmtComplex(z2.re, z2.im)})
//                 </div>
//                 <div style={styles.stepMath}>
//                   = ({fmtNum(z1.re)} &minus; {fmtNum(z2.re)}) + ({fmtNum(z1.im)} &minus; {fmtNum(z2.im)})i
//                 </div>
//                 <div style={{ ...styles.stepMath, fontWeight: '700', color: '#9060c0' }}>
//                   = {fmtComplex(diff.re, diff.im)}
//                 </div>
//               </>
//             )}
//           </div>

//           {showAdd && (
//             <div style={styles.inequalityBox}>
//               <div style={styles.sectionTitle}>Triangle Inequality</div>
//               <div style={styles.ineqMath}>
//                 |z&#x2081; + z&#x2082;| &le; |z&#x2081;| + |z&#x2082;|
//               </div>
//               <div style={styles.ineqMath}>
//                 {fmtNum(modSum)} &le; {fmtNum(mod1)} + {fmtNum(mod2)} = {fmtNum(mod1 + mod2)}{' '}
//                 <strong style={{ color: palette.teal }}>&#x2713;</strong>
//               </div>
//               <div style={styles.ineqNote}>
//                 Equality holds when z&#x2081; and z&#x2082; point in the same direction (same argument).
//               </div>
//             </div>
//           )}

//           <div style={styles.explainBox}>
//             <div style={styles.sectionTitle}>Key Ideas</div>
//             <div style={styles.explainItem}>
//               <span style={{ ...styles.dot, backgroundColor: palette.teal }}></span>
//               <span>
//                 <strong>Addition is component-wise:</strong> add the real parts, add the imaginary parts. (a+bi) + (c+di) = (a+c) + (b+d)i. No cross-terms, no i&#xB2; &mdash; it is just vector addition.
//               </span>
//             </div>
//             <div style={styles.explainItem}>
//               <span style={{ ...styles.dot, backgroundColor: palette.navy }}></span>
//               <span>
//                 <strong>The parallelogram rule:</strong> z&#x2081;+z&#x2082; is the diagonal of the parallelogram formed by z&#x2081; and z&#x2082;. The dashed vectors show z&#x2082; translated to the tip of z&#x2081; (and vice versa) &mdash; &ldquo;tip to tail.&rdquo;
//               </span>
//             </div>
//             <div style={styles.explainItem}>
//               <span style={{ ...styles.dot, backgroundColor: '#9060c0' }}></span>
//               <span>
//                 <strong>Subtraction gives the vector from z&#x2082; to z&#x2081;.</strong> The purple dashed line between the two points has the same length and direction as z&#x2081;&minus;z&#x2082;. The modulus |z&#x2081;&minus;z&#x2082;| is the distance between the two points.
//               </span>
//             </div>
//             <div style={styles.explainItem}>
//               <span style={{ ...styles.dot, backgroundColor: palette.orange }}></span>
//               <span>
//                 <strong>z&#x2081; &minus; z&#x2082; = z&#x2081; + (&minus;z&#x2082;).</strong> Subtraction is the same as adding the negation. The ghost vector &minus;z&#x2082; is z&#x2082; rotated by 180&deg;. Adding it to z&#x2081; via the parallelogram rule gives the same result.
//               </span>
//             </div>
//             <div style={styles.explainItem}>
//               <span style={{ ...styles.dot, backgroundColor: palette.blue }}></span>
//               <span>
//                 <strong>Triangle inequality:</strong> |z&#x2081;+z&#x2082;| &le; |z&#x2081;| + |z&#x2082;|. The sum can never be longer than both vectors placed end-to-end. Drag z&#x2081; and z&#x2082; to the same direction to see equality.
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const palette = {
//   navy: '#304090',
//   blue: '#4098d8',
//   orange: '#f89838',
//   bg: '#F5F4F1',
//   white: '#ffffff',
//   text: '#1a2440',
//   muted: '#5a6480',
//   border: '#c8d0e0',
//   teal: '#2A7A8C',
// };

// const mono = "'JetBrains Mono', monospace";
// const sans = "'DM Sans', sans-serif";

// const styles = {
//   container: {
//     minHeight: '100vh',
//     backgroundColor: palette.bg,
//     color: palette.text,
//     fontFamily: sans,
//     padding: '20px 28px',
//     maxWidth: '1280px',
//     margin: '0 auto',
//   },
//   header: {
//     display: 'flex',
//     alignItems: 'baseline',
//     gap: '14px',
//     marginBottom: '16px',
//     borderBottom: `2px solid ${palette.navy}`,
//     paddingBottom: '10px',
//   },
//   title: {
//     fontSize: '1.7rem',
//     fontWeight: '700',
//     margin: 0,
//     color: palette.navy,
//   },
//   subtitle: {
//     fontSize: '1.02rem',
//     color: palette.muted,
//   },
//   mainLayout: {
//     display: 'grid',
//     gridTemplateColumns: '720px 1fr',
//     gap: '20px',
//     alignItems: 'start',
//   },
//   leftCol: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '10px',
//   },
//   planeWrap: {
//     backgroundColor: palette.white,
//     border: `1px solid ${palette.border}`,
//     borderRadius: '10px',
//     padding: '6px',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
//   },
//   panel: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '12px',
//   },
//   controlsBox: {
//     backgroundColor: palette.white,
//     border: `1px solid ${palette.border}`,
//     borderRadius: '8px',
//     padding: '12px 14px',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '8px',
//   },
//   modeRow: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '6px',
//   },
//   modeLabel: {
//     fontSize: '0.93rem',
//     fontWeight: '600',
//     color: palette.muted,
//     marginRight: '4px',
//   },
//   modeBtn: {
//     padding: '5px 14px',
//     border: `1px solid ${palette.border}`,
//     borderRadius: '5px',
//     backgroundColor: palette.white,
//     fontFamily: sans,
//     fontSize: '0.93rem',
//     fontWeight: '600',
//     cursor: 'pointer',
//     color: palette.text,
//     transition: 'all 0.12s',
//   },
//   modeBtnActive: {
//     backgroundColor: '#e0ecff',
//     borderColor: palette.navy,
//     color: palette.navy,
//     fontWeight: '700',
//   },
//   presetRow: {
//     display: 'flex',
//     gap: '6px',
//     flexWrap: 'wrap',
//   },
//   presetBtn: {
//     padding: '4px 10px',
//     border: `1px solid ${palette.border}`,
//     borderRadius: '5px',
//     backgroundColor: palette.white,
//     fontFamily: mono,
//     fontSize: '0.82rem',
//     fontWeight: '600',
//     cursor: 'pointer',
//     color: palette.text,
//     transition: 'all 0.12s',
//   },
//   randBtn: {
//     color: palette.navy,
//     borderColor: palette.navy,
//     fontFamily: sans,
//     fontWeight: '700',
//   },
//   inputBox: {
//     backgroundColor: palette.white,
//     border: `1px solid ${palette.border}`,
//     borderRadius: '8px',
//     padding: '10px 14px',
//   },
//   sectionTitle: {
//     fontSize: '0.88rem',
//     fontWeight: '700',
//     color: palette.navy,
//     textTransform: 'uppercase',
//     letterSpacing: '0.5px',
//     marginBottom: '6px',
//   },
//   inputRow: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//   },
//   inputLabel: {
//     fontSize: '0.96rem',
//     fontWeight: '600',
//     color: palette.muted,
//     fontFamily: mono,
//   },
//   numInput: {
//     width: '72px',
//     fontSize: '1.08rem',
//     fontFamily: mono,
//     fontWeight: '600',
//     padding: '4px 8px',
//     border: `2px solid ${palette.border}`,
//     borderRadius: '5px',
//     color: palette.navy,
//     backgroundColor: palette.bg,
//     outline: 'none',
//   },
//   miniVal: {
//     fontFamily: mono,
//     fontSize: '0.96rem',
//     marginLeft: '4px',
//   },
//   warningMsg: {
//     padding: '6px 10px',
//     fontSize: '0.88rem',
//     fontWeight: '600',
//     color: '#b03030',
//     backgroundColor: '#fef2f2',
//     border: '1px solid #f0c0c0',
//     borderRadius: '5px',
//   },
//   resultBox: {
//     backgroundColor: `${palette.teal}08`,
//     border: `2px solid ${palette.teal}40`,
//     borderRadius: '8px',
//     padding: '10px 14px',
//   },
//   resultVal: {
//     fontFamily: mono,
//     fontSize: '1.3rem',
//     fontWeight: '700',
//     color: palette.teal,
//     marginBottom: '2px',
//   },
//   resultSub: {
//     fontFamily: mono,
//     fontSize: '0.88rem',
//     color: palette.muted,
//   },
//   stepsBox: {
//     backgroundColor: palette.white,
//     border: `1px solid ${palette.border}`,
//     borderRadius: '8px',
//     padding: '12px 14px',
//   },
//   stepLabel: {
//     fontSize: '0.88rem',
//     fontWeight: '700',
//     color: palette.navy,
//     marginBottom: '2px',
//   },
//   stepMath: {
//     fontFamily: mono,
//     fontSize: '0.93rem',
//     fontWeight: '600',
//     color: palette.text,
//     lineHeight: 1.7,
//     paddingLeft: '4px',
//   },
//   inequalityBox: {
//     backgroundColor: `${palette.blue}08`,
//     border: `1px solid ${palette.blue}30`,
//     borderRadius: '8px',
//     padding: '10px 14px',
//   },
//   ineqMath: {
//     fontFamily: mono,
//     fontSize: '0.96rem',
//     fontWeight: '600',
//     color: palette.text,
//     lineHeight: 1.6,
//     paddingLeft: '4px',
//   },
//   ineqNote: {
//     fontSize: '0.88rem',
//     color: palette.muted,
//     marginTop: '4px',
//     fontStyle: 'italic',
//   },
//   explainBox: {
//     backgroundColor: palette.white,
//     border: `1px solid ${palette.border}`,
//     borderRadius: '8px',
//     padding: '12px 14px',
//   },
//   explainItem: {
//     display: 'flex',
//     alignItems: 'flex-start',
//     gap: '8px',
//     fontSize: '0.93rem',
//     color: palette.text,
//     lineHeight: 1.5,
//     marginBottom: '10px',
//   },
//   dot: {
//     display: 'inline-block',
//     width: '8px',
//     height: '8px',
//     borderRadius: '50%',
//     marginTop: '6px',
//     flexShrink: 0,
//   },
// };


'use client';

import { useState, useRef, useCallback } from 'react';

export default function ComplexAddSubVisualizer() {
  const [z1, setZ1] = useState({ re: 3, im: 1 });
  const [z2, setZ2] = useState({ re: 1, im: 3 });
  const [mode, setMode] = useState('both'); // 'add' | 'sub' | 'both'
  const [dragging, setDragging] = useState(null);
  const [warning, setWarning] = useState(false);
  const warningTimer = useRef(null);
  const svgRef = useRef(null);

  const W = 720, H = 720;
  const margin = 52;
  const range = 5;
  const maxVal = 5;
  const scale = (W - 2 * margin) / (2 * range);
  const ox = W / 2;
  const oy = H / 2;

  const clamp = (val) => Math.max(-maxVal, Math.min(maxVal, Math.round(val * 10) / 10));

  const safeSet = (setter, newRe, newIm) => {
    const needsClamp = Math.abs(newRe) > maxVal || Math.abs(newIm) > maxVal;
    if (needsClamp) {
      setWarning(true);
      if (warningTimer.current) clearTimeout(warningTimer.current);
      warningTimer.current = setTimeout(() => setWarning(false), 2500);
    }
    setter({ re: clamp(newRe), im: clamp(newIm) });
  };

  const toSvg = (r, i) => ({ x: ox + r * scale, y: oy - i * scale });
  const fromSvg = (sx, sy) => ({ re: (sx - ox) / scale, im: (oy - sy) / scale });
  const originSvg = toSvg(0, 0);

  const sum = { re: z1.re + z2.re, im: z1.im + z2.im };
  const diff = { re: z1.re - z2.re, im: z1.im - z2.im };

  const mod1 = Math.sqrt(z1.re * z1.re + z1.im * z1.im);
  const mod2 = Math.sqrt(z2.re * z2.re + z2.im * z2.im);
  const modSum = Math.sqrt(sum.re * sum.re + sum.im * sum.im);
  const modDiff = Math.sqrt(diff.re * diff.re + diff.im * diff.im);

  const z1Svg = toSvg(z1.re, z1.im);
  const z2Svg = toSvg(z2.re, z2.im);
  const sumSvg = toSvg(sum.re, sum.im);
  const diffSvg = toSvg(diff.re, diff.im);

  const sumVisible = Math.abs(sum.re) <= range && Math.abs(sum.im) <= range;
  const diffVisible = Math.abs(diff.re) <= range && Math.abs(diff.im) <= range;

  const showAdd = mode === 'add' || mode === 'both';
  const showSub = mode === 'sub' || mode === 'both';

  const handlePointerDown = useCallback((which) => (e) => {
    setDragging(which);
    e.target.setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e) => {
    if (!dragging || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const sx = (e.clientX - rect.left) * (W / rect.width);
    const sy = (e.clientY - rect.top) * (H / rect.height);
    const pt = fromSvg(sx, sy);
    const setter = dragging === 'z1' ? setZ1 : setZ2;
    setter({ re: clamp(pt.re), im: clamp(pt.im) });
  }, [dragging]);

  const handlePointerUp = useCallback(() => {
    setDragging(null);
  }, []);

  const fmtNum = (v) => {
    if (Math.abs(v) < 0.005) return '0';
    if (Math.abs(v - Math.round(v)) < 0.005) return String(Math.round(v));
    return v.toFixed(1);
  };

  const fmtComplex = (re, im) => {
    const rs = fmtNum(re);
    const ai = Math.abs(im);
    const is_ = fmtNum(ai);
    if (Math.abs(im) < 0.005) return rs;
    if (Math.abs(re) < 0.005) {
      if (is_ === '1') return im > 0 ? 'i' : '\u2212i';
      return im > 0 ? `${is_}i` : `\u2212${is_}i`;
    }
    const sign = im > 0 ? ' + ' : ' \u2212 ';
    const iPart = is_ === '1' ? 'i' : `${is_}i`;
    return `${rs}${sign}${iPart}`;
  };

  const gridLinesFixed = [];
  for (let i = -range; i <= range; i++) {
    if (i === 0) continue;
    const v1 = toSvg(i, -range), v2 = toSvg(i, range);
    gridLinesFixed.push({ x1: v1.x, y1: v1.y, x2: v2.x, y2: v2.y });
    const h1 = toSvg(-range, i), h2 = toSvg(range, i);
    gridLinesFixed.push({ x1: h1.x, y1: h1.y, x2: h2.x, y2: h2.y });
  }

  const ticks = [];
  for (let i = -range; i <= range; i++) {
    if (i === 0) continue;
    const px = toSvg(i, 0);
    ticks.push({ x: px.x, y: px.y + 16, label: String(i), anchor: 'middle' });
    const py = toSvg(0, i);
    ticks.push({ x: py.x - 10, y: py.y + 4, label: i > 0 ? `${i}i` : `\u2212${Math.abs(i)}i`, anchor: 'end' });
  }

  const presets = [
    { z1: { re: 3, im: 1 }, z2: { re: 1, im: 3 }, label: '(3+i) & (1+3i)' },
    { z1: { re: 2, im: 2 }, z2: { re: -2, im: 2 }, label: '(2+2i) & (\u22122+2i)' },
    { z1: { re: 4, im: 0 }, z2: { re: 0, im: 3 }, label: '4 & 3i' },
    { z1: { re: 3, im: 2 }, z2: { re: 3, im: -2 }, label: 'Conjugate pair' },
    { z1: { re: -1, im: 3 }, z2: { re: 2, im: -1 }, label: '(\u22121+3i) & (2\u2212i)' },
  ];

  const arrowHead = (fromX, fromY, toX, toY, color, size = 10) => {
    const dx = toX - fromX;
    const dy = toY - fromY;
    const len = Math.sqrt(dx * dx + dy * dy);
    if (len < 5) return null;
    const ux = dx / len, uy = dy / len;
    const angle = 0.4;
    const lx = toX - size * (ux * Math.cos(angle) - uy * Math.sin(angle));
    const ly = toY - size * (uy * Math.cos(angle) + ux * Math.sin(angle));
    const rx = toX - size * (ux * Math.cos(-angle) - uy * Math.sin(-angle));
    const ry = toY - size * (uy * Math.cos(-angle) + ux * Math.sin(-angle));
    return <polygon points={`${toX},${toY} ${lx},${ly} ${rx},${ry}`} fill={color} />;
  };

  const rayToEdge = (angle, color, label) => {
    const edgeDist = range - 0.3;
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    let t = edgeDist * 100;
    if (Math.abs(cosA) > 0.001) t = Math.min(t, edgeDist / Math.abs(cosA));
    if (Math.abs(sinA) > 0.001) t = Math.min(t, edgeDist / Math.abs(sinA));
    const edgeSvg = toSvg(t * cosA, t * sinA);
    const aLen = 12, aAngle = 0.35;
    const bDx = originSvg.x - edgeSvg.x, bDy = originSvg.y - edgeSvg.y;
    const bMag = Math.sqrt(bDx * bDx + bDy * bDy);
    if (bMag < 1) return null;
    const ux = bDx / bMag, uy = bDy / bMag;
    const lx = edgeSvg.x + aLen * (ux * Math.cos(aAngle) - uy * Math.sin(aAngle));
    const ly = edgeSvg.y + aLen * (uy * Math.cos(aAngle) + ux * Math.sin(aAngle));
    const rx = edgeSvg.x + aLen * (ux * Math.cos(-aAngle) - uy * Math.sin(-aAngle));
    const ry = edgeSvg.y + aLen * (uy * Math.cos(-aAngle) + ux * Math.sin(-aAngle));
    return (
      <g>
        <line x1={originSvg.x} y1={originSvg.y} x2={edgeSvg.x} y2={edgeSvg.y}
          stroke={color} strokeWidth="3" strokeDasharray="8,4" />
        <polygon points={`${edgeSvg.x},${edgeSvg.y} ${lx},${ly} ${rx},${ry}`} fill={color} />
        <text
          x={edgeSvg.x + (cosA >= 0 ? -50 : 8)}
          y={edgeSvg.y + (sinA >= 0 ? -10 : 18)}
          fontSize="13" fontWeight="700" fill={color}
          fontFamily="'JetBrains Mono', monospace" style={{ pointerEvents: 'none' }}>
          {label} &rarr;
        </text>
      </g>
    );
  };

  return (
    <div style={styles.container}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .drag-point { cursor: grab; }
        .drag-point:active { cursor: grabbing; }
        .preset-btn:hover { background: #e0ecff !important; border-color: #304090 !important; }
        .mode-btn:hover { background: #e0ecff !important; }
        input[type=number]:focus { border-color: #304090 !important; outline: none; }
      ` }} />

      <div style={styles.header}>
        <h1 style={styles.title}>Complex Addition &amp; Subtraction</h1>
        <span style={styles.subtitle}>Add component-wise, see the parallelogram</span>
      </div>

      <div style={styles.mainLayout}>
        <div style={styles.leftCol}>
          <div style={styles.planeWrap}>
            <svg
              ref={svgRef}
              viewBox={`0 0 ${W} ${H}`}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
            >
              <rect width={W} height={H} rx="12" fill="#ECEEF0" />

              {gridLinesFixed.map((l, i) => (
                <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#d8e4ec" strokeWidth="0.7" />
              ))}

              <line x1={margin} y1={oy} x2={W - margin} y2={oy} stroke="#8098b0" strokeWidth="1.5" />
              <line x1={ox} y1={margin} x2={ox} y2={H - margin} stroke="#8098b0" strokeWidth="1.5" />
              <text x={W - margin + 8} y={oy + 5} fontSize="14" fontWeight="600" fill="#304090" fontFamily="'DM Sans', sans-serif">Re</text>
              <text x={ox + 8} y={margin - 8} fontSize="14" fontWeight="600" fill="#304090" fontFamily="'DM Sans', sans-serif">Im</text>

              {ticks.map((t, i) => (
                <text key={i} x={t.x} y={t.y} textAnchor={t.anchor} fontSize="12" fill="#8098b0" fontFamily="'JetBrains Mono', monospace">{t.label}</text>
              ))}

              {showAdd && (
                <g>
                  {sumVisible && (
                    <polygon
                      points={`${originSvg.x},${originSvg.y} ${z1Svg.x},${z1Svg.y} ${sumSvg.x},${sumSvg.y} ${z2Svg.x},${z2Svg.y}`}
                      fill="#2A7A8C" fillOpacity="0.06"
                    />
                  )}
                  {sumVisible && (
                    <g>
                      <line x1={z1Svg.x} y1={z1Svg.y} x2={sumSvg.x} y2={sumSvg.y}
                        stroke="#B85C2A" strokeWidth="2" strokeDasharray="6,4" opacity="0.6" />
                      {arrowHead(z1Svg.x, z1Svg.y, sumSvg.x, sumSvg.y, '#B85C2A')}
                    </g>
                  )}
                  {sumVisible && (
                    <g>
                      <line x1={z2Svg.x} y1={z2Svg.y} x2={sumSvg.x} y2={sumSvg.y}
                        stroke="#304090" strokeWidth="2" strokeDasharray="6,4" opacity="0.6" />
                      {arrowHead(z2Svg.x, z2Svg.y, sumSvg.x, sumSvg.y, '#304090')}
                    </g>
                  )}
                  {modSum > 0.1 && (() => {
                    if (sumVisible) {
                      return (
                        <g>
                          <line x1={originSvg.x} y1={originSvg.y} x2={sumSvg.x} y2={sumSvg.y}
                            stroke="#2A7A8C" strokeWidth="3" />
                          {arrowHead(originSvg.x, originSvg.y, sumSvg.x, sumSvg.y, '#2A7A8C', 12)}
                          <circle cx={sumSvg.x} cy={sumSvg.y} r="8" fill="#2A7A8C" stroke="#fff" strokeWidth="2" />
                          <text x={sumSvg.x + 14} y={sumSvg.y - 10} fontSize="14" fontWeight="700" fill="#2A7A8C"
                            fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>
                            z&#x2081;+z&#x2082;
                          </text>
                        </g>
                      );
                    } else {
                      const angSum = Math.atan2(sum.im, sum.re);
                      return rayToEdge(angSum, '#2A7A8C', 'z\u2081+z\u2082');
                    }
                  })()}
                </g>
              )}

              {showSub && (
                <g>
                  <line x1={z2Svg.x} y1={z2Svg.y} x2={z1Svg.x} y2={z1Svg.y}
                    stroke="#6A4E7A" strokeWidth="2" strokeDasharray="5,3" opacity="0.5" />
                  {modDiff > 0.1 && (() => {
                    if (diffVisible) {
                      return (
                        <g>
                          <line x1={originSvg.x} y1={originSvg.y} x2={diffSvg.x} y2={diffSvg.y}
                            stroke="#6A4E7A" strokeWidth="3" />
                          {arrowHead(originSvg.x, originSvg.y, diffSvg.x, diffSvg.y, '#6A4E7A', 12)}
                          <circle cx={diffSvg.x} cy={diffSvg.y} r="8" fill="#6A4E7A" stroke="#fff" strokeWidth="2" />
                          <text x={diffSvg.x + 14} y={diffSvg.y - 10} fontSize="14" fontWeight="700" fill="#6A4E7A"
                            fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>
                            z&#x2081;&minus;z&#x2082;
                          </text>
                        </g>
                      );
                    } else {
                      const angDiff = Math.atan2(diff.im, diff.re);
                      return rayToEdge(angDiff, '#6A4E7A', 'z\u2081\u2212z\u2082');
                    }
                  })()}
                  <g>
                    <line x1={originSvg.x} y1={originSvg.y}
                      x2={toSvg(-z2.re, -z2.im).x} y2={toSvg(-z2.re, -z2.im).y}
                      stroke="#B85C2A" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.35" />
                    <text
                      x={toSvg(-z2.re, -z2.im).x + 10}
                      y={toSvg(-z2.re, -z2.im).y - 8}
                      fontSize="11" fontWeight="600" fill="#B85C2A" opacity="0.6"
                      fontFamily="'JetBrains Mono', monospace" style={{ pointerEvents: 'none' }}>
                      &minus;z&#x2082;
                    </text>
                  </g>
                </g>
              )}

              <line x1={originSvg.x} y1={originSvg.y} x2={z1Svg.x} y2={z1Svg.y} stroke="#304090" strokeWidth="2.5" />
              {arrowHead(originSvg.x, originSvg.y, z1Svg.x, z1Svg.y, '#304090', 11)}
              <line x1={originSvg.x} y1={originSvg.y} x2={z2Svg.x} y2={z2Svg.y} stroke="#B85C2A" strokeWidth="2.5" />
              {arrowHead(originSvg.x, originSvg.y, z2Svg.x, z2Svg.y, '#B85C2A', 11)}

              <circle className="drag-point" cx={z1Svg.x} cy={z1Svg.y} r="11" fill="#304090" stroke="#fff" strokeWidth="2.5" onPointerDown={handlePointerDown('z1')} />
              <text x={z1Svg.x + 14} y={z1Svg.y - 12} fontSize="15" fontWeight="700" fill="#304090" fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>z&#x2081;</text>

              <circle className="drag-point" cx={z2Svg.x} cy={z2Svg.y} r="11" fill="#B85C2A" stroke="#fff" strokeWidth="2.5" onPointerDown={handlePointerDown('z2')} />
              <text x={z2Svg.x + 14} y={z2Svg.y - 12} fontSize="15" fontWeight="700" fill="#B85C2A" fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>z&#x2082;</text>

              <circle cx={originSvg.x} cy={originSvg.y} r="3" fill="#8098b0" />
            </svg>
          </div>

          <div style={styles.controlsBox}>
            <div style={styles.modeRow}>
              <span style={styles.modeLabel}>Show:</span>
              {[
                { val: 'both', label: 'Both' },
                { val: 'add', label: 'Addition' },
                { val: 'sub', label: 'Subtraction' },
              ].map((m) => (
                <button
                  key={m.val}
                  className="mode-btn"
                  style={{ ...styles.modeBtn, ...(mode === m.val ? styles.modeBtnActive : {}) }}
                  onClick={() => setMode(m.val)}
                >
                  {m.label}
                </button>
              ))}
            </div>
            <div style={styles.presetRow}>
              {presets.map((p) => (
                <button key={p.label} className="preset-btn" style={styles.presetBtn}
                  onClick={() => { setZ1(p.z1); setZ2(p.z2); }}>
                  {p.label}
                </button>
              ))}
              <button className="preset-btn" style={{ ...styles.presetBtn, ...styles.randBtn }}
                onClick={() => {
                  setZ1({ re: clamp(Math.random() * 8 - 4), im: clamp(Math.random() * 8 - 4) });
                  setZ2({ re: clamp(Math.random() * 8 - 4), im: clamp(Math.random() * 8 - 4) });
                }}>
                Random
              </button>
            </div>
          </div>
        </div>

        <div style={styles.panel}>
          <div style={styles.inputBox}>
            <div style={{ ...styles.sectionTitle, color: palette.navy }}>z&#x2081;</div>
            <div style={styles.inputRow}>
              <label style={styles.inputLabel}>Re:</label>
              <input type="number" step="0.1" min="-5" max="5" value={z1.re}
                onChange={(e) => safeSet(setZ1, parseFloat(e.target.value) || 0, z1.im)} style={styles.numInput} />
              <label style={styles.inputLabel}>Im:</label>
              <input type="number" step="0.1" min="-5" max="5" value={z1.im}
                onChange={(e) => safeSet(setZ1, z1.re, parseFloat(e.target.value) || 0)} style={styles.numInput} />
              <span style={styles.miniVal}><strong style={{ color: palette.navy }}>{fmtComplex(z1.re, z1.im)}</strong></span>
            </div>
          </div>

          <div style={styles.inputBox}>
            <div style={{ ...styles.sectionTitle, color: palette.orange }}>z&#x2082;</div>
            <div style={styles.inputRow}>
              <label style={styles.inputLabel}>Re:</label>
              <input type="number" step="0.1" min="-5" max="5" value={z2.re}
                onChange={(e) => safeSet(setZ2, parseFloat(e.target.value) || 0, z2.im)} style={styles.numInput} />
              <label style={styles.inputLabel}>Im:</label>
              <input type="number" step="0.1" min="-5" max="5" value={z2.im}
                onChange={(e) => safeSet(setZ2, z2.re, parseFloat(e.target.value) || 0)} style={styles.numInput} />
              <span style={styles.miniVal}><strong style={{ color: palette.orange }}>{fmtComplex(z2.re, z2.im)}</strong></span>
            </div>
          </div>

          {warning && (
            <div style={styles.warningMsg}>Values are limited to &plusmn;5. Input was clamped.</div>
          )}

          {showAdd && (
            <div style={styles.resultBox}>
              <div style={{ ...styles.sectionTitle, color: palette.teal }}>z&#x2081; + z&#x2082; &mdash; Sum</div>
              <div style={styles.resultVal}>{fmtComplex(sum.re, sum.im)}</div>
              <div style={styles.resultSub}>|z&#x2081;+z&#x2082;| = {fmtNum(modSum)}</div>
            </div>
          )}

          {showSub && (
            <div style={{ ...styles.resultBox, backgroundColor: '#6A4E7A08', borderColor: '#6A4E7A40' }}>
              <div style={{ ...styles.sectionTitle, color: '#6A4E7A' }}>z&#x2081; &minus; z&#x2082; &mdash; Difference</div>
              <div style={{ ...styles.resultVal, color: '#6A4E7A' }}>{fmtComplex(diff.re, diff.im)}</div>
              <div style={styles.resultSub}>|z&#x2081;&minus;z&#x2082;| = {fmtNum(modDiff)} (distance between z&#x2081; and z&#x2082;)</div>
            </div>
          )}

          <div style={styles.stepsBox}>
            <div style={styles.sectionTitle}>Step-by-Step</div>
            {showAdd && (
              <>
                <div style={styles.stepLabel}>Addition:</div>
                <div style={styles.stepMath}>
                  ({fmtComplex(z1.re, z1.im)}) + ({fmtComplex(z2.re, z2.im)})
                </div>
                <div style={styles.stepMath}>
                  = ({fmtNum(z1.re)} + {fmtNum(z2.re)}) + ({fmtNum(z1.im)} + {fmtNum(z2.im)})i
                </div>
                <div style={{ ...styles.stepMath, fontWeight: '700', color: palette.teal }}>
                  = {fmtComplex(sum.re, sum.im)}
                </div>
              </>
            )}
            {showSub && (
              <>
                <div style={{ ...styles.stepLabel, marginTop: showAdd ? '10px' : '0' }}>Subtraction:</div>
                <div style={styles.stepMath}>
                  ({fmtComplex(z1.re, z1.im)}) &minus; ({fmtComplex(z2.re, z2.im)})
                </div>
                <div style={styles.stepMath}>
                  = ({fmtNum(z1.re)} &minus; {fmtNum(z2.re)}) + ({fmtNum(z1.im)} &minus; {fmtNum(z2.im)})i
                </div>
                <div style={{ ...styles.stepMath, fontWeight: '700', color: '#6A4E7A' }}>
                  = {fmtComplex(diff.re, diff.im)}
                </div>
              </>
            )}
          </div>

          {showAdd && (
            <div style={styles.inequalityBox}>
              <div style={styles.sectionTitle}>Triangle Inequality</div>
              <div style={styles.ineqMath}>
                |z&#x2081; + z&#x2082;| &le; |z&#x2081;| + |z&#x2082;|
              </div>
              <div style={styles.ineqMath}>
                {fmtNum(modSum)} &le; {fmtNum(mod1)} + {fmtNum(mod2)} = {fmtNum(mod1 + mod2)}{' '}
                <strong style={{ color: palette.teal }}>&#x2713;</strong>
              </div>
              <div style={styles.ineqNote}>
                Equality holds when z&#x2081; and z&#x2082; point in the same direction (same argument).
              </div>
            </div>
          )}

          <div style={styles.explainBox}>
            <div style={styles.sectionTitle}>Key Ideas</div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.teal }}></span>
              <span>
                <strong>Addition is component-wise:</strong> add the real parts, add the imaginary parts. (a+bi) + (c+di) = (a+c) + (b+d)i. No cross-terms, no i&#xB2; &mdash; it is just vector addition.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.navy }}></span>
              <span>
                <strong>The parallelogram rule:</strong> z&#x2081;+z&#x2082; is the diagonal of the parallelogram formed by z&#x2081; and z&#x2082;. The dashed vectors show z&#x2082; translated to the tip of z&#x2081; (and vice versa) &mdash; &ldquo;tip to tail.&rdquo;
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: '#6A4E7A' }}></span>
              <span>
                <strong>Subtraction gives the vector from z&#x2082; to z&#x2081;.</strong> The purple dashed line between the two points has the same length and direction as z&#x2081;&minus;z&#x2082;. The modulus |z&#x2081;&minus;z&#x2082;| is the distance between the two points.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.orange }}></span>
              <span>
                <strong>z&#x2081; &minus; z&#x2082; = z&#x2081; + (&minus;z&#x2082;).</strong> Subtraction is the same as adding the negation. The ghost vector &minus;z&#x2082; is z&#x2082; rotated by 180&deg;. Adding it to z&#x2081; via the parallelogram rule gives the same result.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.blue }}></span>
              <span>
                <strong>Triangle inequality:</strong> |z&#x2081;+z&#x2082;| &le; |z&#x2081;| + |z&#x2082;|. The sum can never be longer than both vectors placed end-to-end. Drag z&#x2081; and z&#x2082; to the same direction to see equality.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const palette = {
  navy: '#304090',
  blue: '#4098d8',
  orange: '#B85C2A',
  bg: '#F5F4F1',
  white: '#ffffff',
  text: '#1a2440',
  muted: '#5a6480',
  border: '#c8d0e0',
  teal: '#2A7A8C',
};

const mono = "'JetBrains Mono', monospace";
const sans = "'DM Sans', sans-serif";

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: palette.bg,
    color: palette.text,
    fontFamily: sans,
    padding: '20px 28px',
    maxWidth: '1280px',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '14px',
    marginBottom: '16px',
    borderBottom: `2px solid ${palette.navy}`,
    paddingBottom: '10px',
  },
  title: {
    fontSize: '1.7rem',
    fontWeight: '700',
    margin: 0,
    color: palette.navy,
  },
  subtitle: {
    fontSize: '1.02rem',
    color: palette.muted,
  },
  mainLayout: {
    display: 'grid',
    gridTemplateColumns: '720px 1fr',
    gap: '20px',
    alignItems: 'start',
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  planeWrap: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '10px',
    padding: '6px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  panel: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  controlsBox: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '8px',
    padding: '12px 14px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  modeRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  modeLabel: {
    fontSize: '0.93rem',
    fontWeight: '600',
    color: palette.muted,
    marginRight: '4px',
  },
  modeBtn: {
    padding: '5px 14px',
    border: `1px solid ${palette.border}`,
    borderRadius: '5px',
    backgroundColor: palette.white,
    fontFamily: sans,
    fontSize: '0.93rem',
    fontWeight: '600',
    cursor: 'pointer',
    color: palette.text,
    transition: 'all 0.12s',
  },
  modeBtnActive: {
    backgroundColor: '#e0ecff',
    borderColor: palette.navy,
    color: palette.navy,
    fontWeight: '700',
  },
  presetRow: {
    display: 'flex',
    gap: '6px',
    flexWrap: 'wrap',
  },
  presetBtn: {
    padding: '4px 10px',
    border: `1px solid ${palette.border}`,
    borderRadius: '5px',
    backgroundColor: palette.white,
    fontFamily: mono,
    fontSize: '0.82rem',
    fontWeight: '600',
    cursor: 'pointer',
    color: palette.text,
    transition: 'all 0.12s',
  },
  randBtn: {
    color: palette.navy,
    borderColor: palette.navy,
    fontFamily: sans,
    fontWeight: '700',
  },
  inputBox: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '8px',
    padding: '10px 14px',
  },
  sectionTitle: {
    fontSize: '0.88rem',
    fontWeight: '700',
    color: palette.navy,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '6px',
  },
  inputRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  inputLabel: {
    fontSize: '0.96rem',
    fontWeight: '600',
    color: palette.muted,
    fontFamily: mono,
  },
  numInput: {
    width: '72px',
    fontSize: '1.08rem',
    fontFamily: mono,
    fontWeight: '600',
    padding: '4px 8px',
    border: `2px solid ${palette.border}`,
    borderRadius: '5px',
    color: palette.navy,
    backgroundColor: palette.bg,
    outline: 'none',
  },
  miniVal: {
    fontFamily: mono,
    fontSize: '0.96rem',
    marginLeft: '4px',
  },
  warningMsg: {
    padding: '6px 10px',
    fontSize: '0.88rem',
    fontWeight: '600',
    color: '#b03030',
    backgroundColor: '#fef2f2',
    border: '1px solid #f0c0c0',
    borderRadius: '5px',
  },
  resultBox: {
    backgroundColor: `${palette.teal}08`,
    border: `2px solid ${palette.teal}40`,
    borderRadius: '8px',
    padding: '10px 14px',
  },
  resultVal: {
    fontFamily: mono,
    fontSize: '1.3rem',
    fontWeight: '700',
    color: palette.teal,
    marginBottom: '2px',
  },
  resultSub: {
    fontFamily: mono,
    fontSize: '0.88rem',
    color: palette.muted,
  },
  stepsBox: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '8px',
    padding: '12px 14px',
  },
  stepLabel: {
    fontSize: '0.88rem',
    fontWeight: '700',
    color: palette.navy,
    marginBottom: '2px',
  },
  stepMath: {
    fontFamily: mono,
    fontSize: '0.93rem',
    fontWeight: '600',
    color: palette.text,
    lineHeight: 1.7,
    paddingLeft: '4px',
  },
  inequalityBox: {
    backgroundColor: `${palette.blue}08`,
    border: `1px solid ${palette.blue}30`,
    borderRadius: '8px',
    padding: '10px 14px',
  },
  ineqMath: {
    fontFamily: mono,
    fontSize: '0.96rem',
    fontWeight: '600',
    color: palette.text,
    lineHeight: 1.6,
    paddingLeft: '4px',
  },
  ineqNote: {
    fontSize: '0.88rem',
    color: palette.muted,
    marginTop: '4px',
    fontStyle: 'italic',
  },
  explainBox: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '8px',
    padding: '12px 14px',
  },
  explainItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    fontSize: '0.93rem',
    color: palette.text,
    lineHeight: 1.5,
    marginBottom: '10px',
  },
  dot: {
    display: 'inline-block',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    marginTop: '6px',
    flexShrink: 0,
  },
};