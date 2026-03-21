// 'use client';

// import { useState, useRef, useCallback } from 'react';

// export default function ComplexDivisionVisualizer() {
//   const [z1, setZ1] = useState({ re: 4, im: 2 });
//   const [z2, setZ2] = useState({ re: 1, im: -1 });
//   const [warning, setWarning] = useState(false);
//   const warningTimer = useRef(null);
//   const svgRef = useRef(null);
//   const [dragging, setDragging] = useState(null);

//   const W = 624, H = 624;
//   const margin = 48;
//   const range = 10;
//   const maxVal = 10;
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

//   // Quotient z1/z2
//   const denom = z2.re * z2.re + z2.im * z2.im;
//   const divideByZero = denom < 0.0001;
//   const quotient = divideByZero
//     ? { re: 0, im: 0 }
//     : {
//         re: (z1.re * z2.re + z1.im * z2.im) / denom,
//         im: (z1.im * z2.re - z1.re * z2.im) / denom,
//       };

//   // Conjugate of z2
//   const z2conj = { re: z2.re, im: -z2.im };

//   // Numerator after multiplying by conjugate: z1 * conj(z2)
//   const numReal = z1.re * z2.re + z1.im * z2.im;
//   const numImag = z1.im * z2.re - z1.re * z2.im;

//   // Polar
//   const mod1 = Math.sqrt(z1.re * z1.re + z1.im * z1.im);
//   const mod2 = Math.sqrt(z2.re * z2.re + z2.im * z2.im);
//   const modQ = divideByZero ? 0 : Math.sqrt(quotient.re * quotient.re + quotient.im * quotient.im);
//   const arg1 = Math.atan2(z1.im, z1.re);
//   const arg2 = Math.atan2(z2.im, z2.re);
//   const argQ = divideByZero ? 0 : Math.atan2(quotient.im, quotient.re);

//   // SVG points
//   const z1Svg = toSvg(z1.re, z1.im);
//   const z2Svg = toSvg(z2.re, z2.im);
//   const qSvg = toSvg(quotient.re, quotient.im);
//   const originSvg = toSvg(0, 0);

//   const quotientVisible = !divideByZero && Math.abs(quotient.re) <= range && Math.abs(quotient.im) <= range;

//   // Drag
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

//   // Formatting
//   const fmtNum = (n) => {
//     if (Math.abs(n) < 0.005) return '0';
//     if (Math.abs(n - Math.round(n)) < 0.005) return String(Math.round(n));
//     return n.toFixed(2);
//   };

//   const fmtComplex = (re, im) => {
//     const rs = fmtNum(re);
//     const ai = Math.abs(im);
//     const is_ = fmtNum(ai);
//     if (Math.abs(im) < 0.005) return rs;
//     if (Math.abs(re) < 0.005) {
//       if (is_ === '1') return im > 0 ? 'i' : '−i';
//       return im > 0 ? `${is_}i` : `−${is_}i`;
//     }
//     const sign = im > 0 ? ' + ' : ' − ';
//     const iPart = is_ === '1' ? 'i' : `${is_}i`;
//     return `${rs}${sign}${iPart}`;
//   };

//   const fmtDeg = (rad) => `${fmtNum(rad * 180 / Math.PI)}°`;

//   // Arc path
//   const makeArc = (arcRadius, startAngle, endAngle) => {
//     if (Math.abs(endAngle - startAngle) < 0.01) return '';
//     const rPx = arcRadius * scale;
//     const sx = originSvg.x + rPx * Math.cos(startAngle);
//     const sy = originSvg.y - rPx * Math.sin(startAngle);
//     const ex = originSvg.x + rPx * Math.cos(endAngle);
//     const ey = originSvg.y - rPx * Math.sin(endAngle);
//     const diff = endAngle - startAngle;
//     const largeArc = Math.abs(diff) > Math.PI ? 1 : 0;
//     const sweepFlag = diff > 0 ? 0 : 1;
//     return `M ${sx},${sy} A ${rPx},${rPx} 0 ${largeArc},${sweepFlag} ${ex},${ey}`;
//   };

//   // Grid
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
//     if (i === 0 || i % 2 !== 0) continue;
//     const px = toSvg(i, 0);
//     ticks.push({ x: px.x, y: px.y + 16, label: String(i), anchor: 'middle' });
//     const py = toSvg(0, i);
//     ticks.push({ x: py.x - 10, y: py.y + 4, label: i > 0 ? `${i}i` : `−${Math.abs(i)}i`, anchor: 'end' });
//   }

//   const presets = [
//     { z1: { re: 4, im: 2 }, z2: { re: 1, im: -1 }, label: '(4+2i)/(1−i)' },
//     { z1: { re: 6, im: 0 }, z2: { re: 3, im: 0 }, label: '6/3' },
//     { z1: { re: 0, im: 4 }, z2: { re: 0, im: 2 }, label: '4i/2i' },
//     { z1: { re: 1, im: 0 }, z2: { re: 0, im: 1 }, label: '1/i' },
//     { z1: { re: 3, im: 4 }, z2: { re: 3, im: -4 }, label: '(3+4i)/(3−4i)' },
//     { z1: { re: -2, im: 6 }, z2: { re: 1, im: 2 }, label: '(−2+6i)/(1+2i)' },
//   ];

//   return (
//     <div style={styles.container}>
//       <style dangerouslySetInnerHTML={{ __html: `
//         @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
//         * { box-sizing: border-box; }
//         .drag-point { cursor: grab; }
//         .drag-point:active { cursor: grabbing; }
//         .preset-btn:hover { background: #e0ecff !important; border-color: #304090 !important; }
//         input[type=number]:focus { border-color: #304090 !important; outline: none; }
//       ` }} />

//       <div style={styles.header}>
//         <h1 style={styles.title}>Complex Division</h1>
//         <span style={styles.subtitle}>Divide magnitudes, subtract angles</span>
//       </div>

//       <div style={styles.mainLayout}>
//         {/* Left column */}
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
//               <rect width={W} height={H} rx="12" fill="#f0f8f8" />

//               {gridLinesFixed.map((l, i) => (
//                 <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#d8e4ec" strokeWidth="0.7" />
//               ))}

//               <line x1={margin} y1={oy} x2={W - margin} y2={oy} stroke="#8098b0" strokeWidth="1.5" />
//               <line x1={ox} y1={margin} x2={ox} y2={H - margin} stroke="#8098b0" strokeWidth="1.5" />
//               <text x={W - margin + 8} y={oy + 5} fontSize="14" fontWeight="600" fill="#304090" fontFamily="'DM Sans', sans-serif">Re</text>
//               <text x={ox + 8} y={margin - 8} fontSize="14" fontWeight="600" fill="#304090" fontFamily="'DM Sans', sans-serif">Im</text>

//               {ticks.map((t, i) => (
//                 <text key={i} x={t.x} y={t.y} textAnchor={t.anchor} fontSize="11" fill="#8098b0" fontFamily="'JetBrains Mono', monospace">{t.label}</text>
//               ))}

//               {/* Angle arcs */}
//               {mod1 > 0.3 && Math.abs(arg1) > 0.05 && (
//                 <path d={makeArc(0.8, 0, arg1)} fill="none" stroke="#304090" strokeWidth="2" opacity="0.6" />
//               )}
//               {mod2 > 0.3 && Math.abs(arg2) > 0.05 && (
//                 <path d={makeArc(1.1, 0, arg2)} fill="none" stroke="#f89838" strokeWidth="2" opacity="0.6" />
//               )}
//               {!divideByZero && modQ > 0.3 && Math.abs(argQ) > 0.05 && (
//                 <path d={makeArc(1.4, 0, argQ)} fill="none" stroke="#1a8060" strokeWidth="2.5" opacity="0.7" />
//               )}

//               {/* Arc labels */}
//               {mod1 > 0.5 && Math.abs(arg1) > 0.15 && (() => {
//                 const mid = arg1 / 2;
//                 const lp = toSvg(1.0 * Math.cos(mid), 1.0 * Math.sin(mid));
//                 return <text x={lp.x} y={lp.y} textAnchor="middle" fontSize="12" fontWeight="600" fill="#304090" fontFamily="'JetBrains Mono', monospace">θ₁</text>;
//               })()}
//               {mod2 > 0.5 && Math.abs(arg2) > 0.15 && (() => {
//                 const mid = arg2 / 2;
//                 const lp = toSvg(1.35 * Math.cos(mid), 1.35 * Math.sin(mid));
//                 return <text x={lp.x} y={lp.y} textAnchor="middle" fontSize="12" fontWeight="600" fill="#f89838" fontFamily="'JetBrains Mono', monospace">θ₂</text>;
//               })()}
//               {!divideByZero && modQ > 0.5 && Math.abs(argQ) > 0.15 && (() => {
//                 const mid = argQ / 2;
//                 const lp = toSvg(1.7 * Math.cos(mid), 1.7 * Math.sin(mid));
//                 return <text x={lp.x} y={lp.y} textAnchor="middle" fontSize="12" fontWeight="700" fill="#1a8060" fontFamily="'JetBrains Mono', monospace">θ₁−θ₂</text>;
//               })()}

//               {/* Vectors */}
//               <line x1={originSvg.x} y1={originSvg.y} x2={z1Svg.x} y2={z1Svg.y} stroke="#304090" strokeWidth="2.5" />
//               <line x1={originSvg.x} y1={originSvg.y} x2={z2Svg.x} y2={z2Svg.y} stroke="#f89838" strokeWidth="2.5" />

//               {/* Quotient vector — ray to edge if off-screen */}
//               {!divideByZero && modQ > 0.1 && (() => {
//                 if (quotientVisible) {
//                   return (
//                     <g>
//                       <line x1={originSvg.x} y1={originSvg.y} x2={qSvg.x} y2={qSvg.y} stroke="#1a8060" strokeWidth="3" />
//                       <circle cx={qSvg.x} cy={qSvg.y} r="9" fill="#1a8060" stroke="#fff" strokeWidth="2" />
//                       <text x={qSvg.x + 14} y={qSvg.y - 12} fontSize="15" fontWeight="700" fill="#1a8060" fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>
//                         z₁/z₂
//                       </text>
//                     </g>
//                   );
//                 } else {
//                   const edgeDist = range - 0.3;
//                   const cosA = Math.cos(argQ);
//                   const sinA = Math.sin(argQ);
//                   let t = edgeDist * 100;
//                   if (Math.abs(cosA) > 0.001) t = Math.min(t, edgeDist / Math.abs(cosA));
//                   if (Math.abs(sinA) > 0.001) t = Math.min(t, edgeDist / Math.abs(sinA));
//                   const edgeSvg = toSvg(t * cosA, t * sinA);
//                   const aLen = 12;
//                   const aAngle = 0.35;
//                   const baseDx = originSvg.x - edgeSvg.x;
//                   const baseDy = originSvg.y - edgeSvg.y;
//                   const baseMag = Math.sqrt(baseDx * baseDx + baseDy * baseDy);
//                   const ux = baseDx / baseMag;
//                   const uy = baseDy / baseMag;
//                   const lx = edgeSvg.x + aLen * (ux * Math.cos(aAngle) - uy * Math.sin(aAngle));
//                   const ly = edgeSvg.y + aLen * (uy * Math.cos(aAngle) + ux * Math.sin(aAngle));
//                   const rx = edgeSvg.x + aLen * (ux * Math.cos(-aAngle) - uy * Math.sin(-aAngle));
//                   const ry = edgeSvg.y + aLen * (uy * Math.cos(-aAngle) + ux * Math.sin(-aAngle));
//                   return (
//                     <g>
//                       <line x1={originSvg.x} y1={originSvg.y} x2={edgeSvg.x} y2={edgeSvg.y} stroke="#1a8060" strokeWidth="3" strokeDasharray="8,4" />
//                       <polygon points={`${edgeSvg.x},${edgeSvg.y} ${lx},${ly} ${rx},${ry}`} fill="#1a8060" />
//                       <text x={edgeSvg.x + (cosA >= 0 ? -50 : 10)} y={edgeSvg.y + (sinA >= 0 ? -10 : 18)} fontSize="13" fontWeight="700" fill="#1a8060" fontFamily="'JetBrains Mono', monospace" style={{ pointerEvents: 'none' }}>
//                         z₁/z₂ →
//                       </text>
//                     </g>
//                   );
//                 }
//               })()}

//               {/* z1 point */}
//               <circle className="drag-point" cx={z1Svg.x} cy={z1Svg.y} r="11" fill="#304090" stroke="#fff" strokeWidth="2.5" onPointerDown={handlePointerDown('z1')} />
//               <text x={z1Svg.x + 14} y={z1Svg.y - 12} fontSize="15" fontWeight="700" fill="#304090" fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>z₁</text>

//               {/* z2 point */}
//               <circle className="drag-point" cx={z2Svg.x} cy={z2Svg.y} r="11" fill="#f89838" stroke="#fff" strokeWidth="2.5" onPointerDown={handlePointerDown('z2')} />
//               <text x={z2Svg.x + 14} y={z2Svg.y - 12} fontSize="15" fontWeight="700" fill="#f89838" fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>z₂</text>

//               <circle cx={originSvg.x} cy={originSvg.y} r="3" fill="#8098b0" />

//               {/* Zoom inset when quotient is tiny */}
//               {!divideByZero && modQ > 0.01 && modQ < 1.0 && quotientVisible && (() => {
//                 // Inset config
//                 const insetSize = 160;
//                 const insetX = W - margin - insetSize - 4;
//                 const insetY = margin + 4;
//                 const insetRange = Math.max(modQ * 1.8, 0.15); // zoom to fit the vector comfortably
//                 const insetScale = (insetSize - 20) / (2 * insetRange);
//                 const insetCx = insetX + insetSize / 2;
//                 const insetCy = insetY + insetSize / 2;

//                 const iqx = insetCx + quotient.re * insetScale;
//                 const iqy = insetCy - quotient.im * insetScale;

//                 // Inset grid lines (just axes)
//                 return (
//                   <g>
//                     {/* Inset background */}
//                     <rect x={insetX} y={insetY} width={insetSize} height={insetSize} rx="8" fill="#fff" stroke="#304090" strokeWidth="2" opacity="0.95" />

//                     {/* Zoom label */}
//                     <text x={insetX + 8} y={insetY + 16} fontSize="11" fontWeight="700" fill="#304090" fontFamily="'DM Sans', sans-serif">
//                       Zoom ({fmtNum(insetRange * 2)} × {fmtNum(insetRange * 2)})
//                     </text>

//                     {/* Clip content */}
//                     <clipPath id="insetClip">
//                       <rect x={insetX + 1} y={insetY + 1} width={insetSize - 2} height={insetSize - 2} rx="7" />
//                     </clipPath>
//                     <g clipPath="url(#insetClip)">
//                       {/* Inset axes */}
//                       <line x1={insetX} y1={insetCy} x2={insetX + insetSize} y2={insetCy} stroke="#8098b0" strokeWidth="1" />
//                       <line x1={insetCx} y1={insetY} x2={insetCx} y2={insetY + insetSize} stroke="#8098b0" strokeWidth="1" />

//                       {/* Inset grid (light) */}
//                       {[-0.5, 0.5].filter(v => Math.abs(v) < insetRange).map((v, i) => {
//                         const gx = insetCx + v * insetScale;
//                         const gy = insetCy - v * insetScale;
//                         return (
//                           <g key={i}>
//                             <line x1={gx} y1={insetY} x2={gx} y2={insetY + insetSize} stroke="#d8e4ec" strokeWidth="0.5" />
//                             <line x1={insetX} y1={gy} x2={insetX + insetSize} y2={gy} stroke="#d8e4ec" strokeWidth="0.5" />
//                           </g>
//                         );
//                       })}

//                       {/* Inset vector */}
//                       <line x1={insetCx} y1={insetCy} x2={iqx} y2={iqy} stroke="#1a8060" strokeWidth="2.5" />

//                       {/* Inset point */}
//                       <circle cx={iqx} cy={iqy} r="6" fill="#1a8060" stroke="#fff" strokeWidth="1.5" />

//                       {/* Inset label */}
//                       <text x={iqx + 10} y={iqy - 8} fontSize="12" fontWeight="700" fill="#1a8060" fontFamily="'DM Sans', sans-serif">
//                         z₁/z₂
//                       </text>

//                       {/* Inset origin */}
//                       <circle cx={insetCx} cy={insetCy} r="2.5" fill="#8098b0" />

//                       {/* Value label */}
//                       <text x={insetX + insetSize / 2} y={insetY + insetSize - 8} textAnchor="middle" fontSize="10" fontWeight="600" fill="#5a6480" fontFamily="'JetBrains Mono', monospace">
//                         {fmtComplex(quotient.re, quotient.im)}
//                       </text>
//                     </g>
//                   </g>
//                 );
//               })()}
//             </svg>
//           </div>

//           {/* Presets */}
//           <div style={styles.presetBox}>
//             <div style={styles.presetTitle}>Try these</div>
//             <div style={styles.presetRow}>
//               {presets.map((p) => (
//                 <button key={p.label} className="preset-btn" style={styles.presetBtn}
//                   onClick={() => { setZ1(p.z1); setZ2(p.z2); }}>
//                   {p.label}
//                 </button>
//               ))}
//               <button className="preset-btn" style={{ ...styles.presetBtn, ...styles.randBtn }}
//                 onClick={() => {
//                   setZ1({ re: clamp(Math.random() * 12 - 6), im: clamp(Math.random() * 12 - 6) });
//                   let r2, i2;
//                   do { r2 = clamp(Math.random() * 12 - 6); i2 = clamp(Math.random() * 12 - 6); } while (Math.abs(r2) < 0.5 && Math.abs(i2) < 0.5);
//                   setZ2({ re: r2, im: i2 });
//                 }}>
//                 Random
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right panel */}
//         <div style={styles.panel}>
//           {/* z1 input */}
//           <div style={styles.inputBox}>
//             <div style={{ ...styles.sectionTitle, color: palette.navy }}>z₁ — Numerator</div>
//             <div style={styles.inputRow}>
//               <label style={styles.inputLabel}>Re:</label>
//               <input type="number" step="0.1" min="-10" max="10" value={z1.re}
//                 onChange={(e) => safeSet(setZ1, parseFloat(e.target.value) || 0, z1.im)} style={styles.numInput} />
//               <label style={styles.inputLabel}>Im:</label>
//               <input type="number" step="0.1" min="-10" max="10" value={z1.im}
//                 onChange={(e) => safeSet(setZ1, z1.re, parseFloat(e.target.value) || 0)} style={styles.numInput} />
//             </div>
//             <div style={styles.miniVals}>
//               <span><strong style={{ color: palette.navy }}>{fmtComplex(z1.re, z1.im)}</strong></span>
//               <span style={styles.polarMini}>|z₁| = {fmtNum(mod1)}, θ₁ = {fmtDeg(arg1)}</span>
//             </div>
//           </div>

//           {/* z2 input */}
//           <div style={styles.inputBox}>
//             <div style={{ ...styles.sectionTitle, color: palette.orange }}>z₂ — Denominator</div>
//             <div style={styles.inputRow}>
//               <label style={styles.inputLabel}>Re:</label>
//               <input type="number" step="0.1" min="-10" max="10" value={z2.re}
//                 onChange={(e) => safeSet(setZ2, parseFloat(e.target.value) || 0, z2.im)} style={styles.numInput} />
//               <label style={styles.inputLabel}>Im:</label>
//               <input type="number" step="0.1" min="-10" max="10" value={z2.im}
//                 onChange={(e) => safeSet(setZ2, z2.re, parseFloat(e.target.value) || 0)} style={styles.numInput} />
//             </div>
//             <div style={styles.miniVals}>
//               <span><strong style={{ color: palette.orange }}>{fmtComplex(z2.re, z2.im)}</strong></span>
//               <span style={styles.polarMini}>|z₂| = {fmtNum(mod2)}, θ₂ = {fmtDeg(arg2)}</span>
//             </div>
//           </div>

//           {warning && (
//             <div style={styles.warningMsg}>Values are limited to ±10. Input was clamped.</div>
//           )}

//           {/* Result */}
//           <div style={styles.resultBox}>
//             <div style={{ ...styles.sectionTitle, color: palette.green }}>z₁ / z₂ — Quotient</div>
//             {divideByZero ? (
//               <div style={styles.divZeroMsg}>Cannot divide by zero — move z₂ away from the origin</div>
//             ) : (
//               <>
//                 <div style={styles.resultMain}>
//                   <span style={styles.resultVal}>{fmtComplex(quotient.re, quotient.im)}</span>
//                 </div>
//                 <div style={styles.resultPolar}>
//                   |z₁/z₂| = {fmtNum(modQ)}, θ = {fmtDeg(argQ)}
//                 </div>
//                 {!quotientVisible && (
//                   <div style={styles.offscreen}>Quotient extends beyond ±10 — shown as a ray on the diagram</div>
//                 )}
//               </>
//             )}
//           </div>

//           {/* Algebraic: multiply by conjugate */}
//           {!divideByZero && (
//             <div style={styles.stepsBox}>
//               <div style={styles.sectionTitle}>Algebraic Method (Multiply by Conjugate)</div>
//               <div style={styles.stepLine}>
//                 <span style={styles.frac}>
//                   <span style={styles.fracNum}>{fmtComplex(z1.re, z1.im)}</span>
//                   <span style={styles.fracBar}></span>
//                   <span style={styles.fracDen}>{fmtComplex(z2.re, z2.im)}</span>
//                 </span>
//                 <span style={styles.stepMid}> × </span>
//                 <span style={styles.frac}>
//                   <span style={styles.fracNum}>{fmtComplex(z2conj.re, z2conj.im)}</span>
//                   <span style={styles.fracBar}></span>
//                   <span style={styles.fracDen}>{fmtComplex(z2conj.re, z2conj.im)}</span>
//                 </span>
//               </div>
//               <div style={styles.stepText}>
//                 Multiply top and bottom by the conjugate of z₂:
//               </div>
//               <div style={styles.stepText}>
//                 Denominator: ({fmtComplex(z2.re, z2.im)})({fmtComplex(z2conj.re, z2conj.im)}) = |z₂|² = {fmtNum(z2.re)}² + {fmtNum(Math.abs(z2.im))}² = <strong>{fmtNum(denom)}</strong>
//               </div>
//               <div style={styles.stepText}>
//                 Numerator: ({fmtComplex(z1.re, z1.im)})({fmtComplex(z2conj.re, z2conj.im)}) = <strong>{fmtNum(numReal)} + {fmtNum(numImag)}i</strong>
//               </div>
//               <div style={styles.stepText}>
//                 Result:{' '}
//                 <span style={styles.frac}>
//                   <span style={styles.fracNum}>{fmtNum(numReal)} + {fmtNum(numImag)}i</span>
//                   <span style={styles.fracBar}></span>
//                   <span style={styles.fracDen}>{fmtNum(denom)}</span>
//                 </span>
//                 <span style={styles.stepMid}> = </span>
//                 <strong style={{ color: palette.green }}>{fmtComplex(quotient.re, quotient.im)}</strong>
//               </div>
//             </div>
//           )}

//           {/* Geometric */}
//           {!divideByZero && (
//             <div style={styles.stepsBox}>
//               <div style={styles.sectionTitle}>Geometric Method (Polar)</div>
//               <div style={styles.stepText}>
//                 <strong style={{ color: palette.navy }}>|z₁|</strong> ÷ <strong style={{ color: palette.orange }}>|z₂|</strong> = {fmtNum(mod1)} ÷ {fmtNum(mod2)} = <strong style={{ color: palette.green }}>{fmtNum(modQ)}</strong>
//               </div>
//               <div style={styles.stepText}>
//                 <strong style={{ color: palette.navy }}>θ₁</strong> − <strong style={{ color: palette.orange }}>θ₂</strong> = {fmtDeg(arg1)} − {fmtDeg(arg2)} = <strong style={{ color: palette.green }}>{fmtDeg(argQ)}</strong>
//               </div>
//               <div style={styles.geoSummary}>
//                 Divide the lengths, subtract the angles. The quotient vector is <strong style={{ color: palette.green }}>{fmtNum(modQ)}</strong> units long at <strong style={{ color: palette.green }}>{fmtDeg(argQ)}</strong> from the real axis.
//               </div>
//             </div>
//           )}

//           {/* Key Ideas */}
//           <div style={styles.explainBox}>
//             <div style={styles.sectionTitle}>Key Ideas</div>
//             <div style={styles.explainItem}>
//               <span style={{ ...styles.dot, backgroundColor: palette.navy }}></span>
//               <span>
//                 <strong>To divide complex numbers algebraically,</strong> multiply the numerator and denominator by the conjugate of the denominator. This makes the denominator real (since z·z̄ = |z|²), turning the problem into simple real division.
//               </span>
//             </div>
//             <div style={styles.explainItem}>
//               <span style={{ ...styles.dot, backgroundColor: palette.orange }}></span>
//               <span>
//                 <strong>Geometrically,</strong> dividing z₁ by z₂ shrinks z₁ by a factor of |z₂| and rotates it by −θ₂. The result: |z₁/z₂| = |z₁|/|z₂| and arg(z₁/z₂) = θ₁ − θ₂.
//               </span>
//             </div>
//             <div style={styles.explainItem}>
//               <span style={{ ...styles.dot, backgroundColor: palette.green }}></span>
//               <span>
//                 <strong>Dividing by i rotates by −90°.</strong> Try &quot;1/i&quot; — i has angle 90°, so dividing subtracts 90°, giving angle −90° = −i. This confirms that 1/i = −i.
//               </span>
//             </div>
//             <div style={styles.explainItem}>
//               <span style={{ ...styles.dot, backgroundColor: palette.blue }}></span>
//               <span>
//                 <strong>Dividing conjugates</strong> always gives a result on the unit circle. Try &quot;(3+4i)/(3−4i)&quot; — since |z| = |z̄|, the magnitudes cancel to 1, and only the angle doubles.
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
//   bg: '#f0f8f8',
//   white: '#ffffff',
//   text: '#1a2440',
//   muted: '#5a6480',
//   border: '#c8d0e0',
//   green: '#1a8060',
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
//     maxWidth: '1180px',
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
//     gridTemplateColumns: '624px 1fr',
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
//   presetBox: {
//     backgroundColor: palette.white,
//     border: `1px solid ${palette.border}`,
//     borderRadius: '8px',
//     padding: '10px 14px',
//   },
//   presetTitle: {
//     fontSize: '0.88rem',
//     fontWeight: '700',
//     color: palette.navy,
//     textTransform: 'uppercase',
//     letterSpacing: '0.5px',
//     marginBottom: '8px',
//   },
//   presetRow: {
//     display: 'flex',
//     gap: '6px',
//     flexWrap: 'wrap',
//   },
//   presetBtn: {
//     padding: '5px 10px',
//     border: `1px solid ${palette.border}`,
//     borderRadius: '5px',
//     backgroundColor: palette.white,
//     fontFamily: mono,
//     fontSize: '0.85rem',
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
//     marginBottom: '6px',
//   },
//   inputLabel: {
//     fontSize: '0.96rem',
//     fontWeight: '600',
//     color: palette.muted,
//     fontFamily: mono,
//   },
//   numInput: {
//     width: '80px',
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
//   miniVals: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'baseline',
//     fontFamily: mono,
//     fontSize: '0.96rem',
//   },
//   polarMini: {
//     fontSize: '0.85rem',
//     color: palette.muted,
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
//     backgroundColor: `${palette.green}08`,
//     border: `2px solid ${palette.green}40`,
//     borderRadius: '8px',
//     padding: '12px 14px',
//   },
//   resultMain: {
//     marginBottom: '4px',
//   },
//   resultVal: {
//     fontFamily: mono,
//     fontSize: '1.35rem',
//     fontWeight: '700',
//     color: palette.green,
//   },
//   resultPolar: {
//     fontFamily: mono,
//     fontSize: '0.9rem',
//     color: palette.muted,
//   },
//   offscreen: {
//     marginTop: '4px',
//     fontSize: '0.85rem',
//     color: '#b03030',
//     fontWeight: '600',
//   },
//   divZeroMsg: {
//     fontSize: '1.02rem',
//     fontWeight: '700',
//     color: '#b03030',
//     padding: '6px 0',
//   },
//   stepsBox: {
//     backgroundColor: palette.white,
//     border: `1px solid ${palette.border}`,
//     borderRadius: '8px',
//     padding: '12px 14px',
//   },
//   stepLine: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//     fontFamily: mono,
//     fontSize: '1.02rem',
//     color: palette.text,
//     lineHeight: 1.7,
//     padding: '6px 0',
//     flexWrap: 'wrap',
//   },
//   stepMid: {
//     fontSize: '1.1rem',
//     fontWeight: '600',
//     color: palette.muted,
//   },
//   stepText: {
//     fontFamily: mono,
//     fontSize: '0.9rem',
//     color: palette.text,
//     lineHeight: 1.7,
//     paddingLeft: '4px',
//   },
//   frac: {
//     display: 'inline-flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     verticalAlign: 'middle',
//     padding: '0 4px',
//   },
//   fracNum: {
//     fontSize: '0.93rem',
//     fontWeight: '600',
//     lineHeight: 1.3,
//   },
//   fracBar: {
//     width: '100%',
//     height: '2px',
//     backgroundColor: palette.text,
//     margin: '2px 0',
//   },
//   fracDen: {
//     fontSize: '0.93rem',
//     fontWeight: '600',
//     lineHeight: 1.3,
//   },
//   geoSummary: {
//     marginTop: '6px',
//     fontSize: '0.93rem',
//     color: palette.text,
//     lineHeight: 1.5,
//     padding: '6px 8px',
//     backgroundColor: `${palette.green}08`,
//     borderRadius: '4px',
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

export default function ComplexDivisionVisualizer() {
  const [z1, setZ1] = useState({ re: 4, im: 2 });
  const [z2, setZ2] = useState({ re: 1, im: -1 });
  const [warning, setWarning] = useState(false);
  const warningTimer = useRef(null);
  const svgRef = useRef(null);
  const [dragging, setDragging] = useState(null);

  const W = 624, H = 624;
  const margin = 48;
  const range = 10;
  const maxVal = 10;
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

  const denom = z2.re * z2.re + z2.im * z2.im;
  const divideByZero = denom < 0.0001;
  const quotient = divideByZero
    ? { re: 0, im: 0 }
    : {
        re: (z1.re * z2.re + z1.im * z2.im) / denom,
        im: (z1.im * z2.re - z1.re * z2.im) / denom,
      };

  const z2conj = { re: z2.re, im: -z2.im };
  const numReal = z1.re * z2.re + z1.im * z2.im;
  const numImag = z1.im * z2.re - z1.re * z2.im;

  const mod1 = Math.sqrt(z1.re * z1.re + z1.im * z1.im);
  const mod2 = Math.sqrt(z2.re * z2.re + z2.im * z2.im);
  const modQ = divideByZero ? 0 : Math.sqrt(quotient.re * quotient.re + quotient.im * quotient.im);
  const arg1 = Math.atan2(z1.im, z1.re);
  const arg2 = Math.atan2(z2.im, z2.re);
  const argQ = divideByZero ? 0 : Math.atan2(quotient.im, quotient.re);

  const z1Svg = toSvg(z1.re, z1.im);
  const z2Svg = toSvg(z2.re, z2.im);
  const qSvg = toSvg(quotient.re, quotient.im);
  const originSvg = toSvg(0, 0);

  const quotientVisible = !divideByZero && Math.abs(quotient.re) <= range && Math.abs(quotient.im) <= range;

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

  const fmtNum = (n) => {
    if (Math.abs(n) < 0.005) return '0';
    if (Math.abs(n - Math.round(n)) < 0.005) return String(Math.round(n));
    return n.toFixed(2);
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

  const fmtDeg = (rad) => `${fmtNum(rad * 180 / Math.PI)}&deg;`;

  const makeArc = (arcRadius, startAngle, endAngle) => {
    if (Math.abs(endAngle - startAngle) < 0.01) return '';
    const rPx = arcRadius * scale;
    const sx = originSvg.x + rPx * Math.cos(startAngle);
    const sy = originSvg.y - rPx * Math.sin(startAngle);
    const ex = originSvg.x + rPx * Math.cos(endAngle);
    const ey = originSvg.y - rPx * Math.sin(endAngle);
    const diff = endAngle - startAngle;
    const largeArc = Math.abs(diff) > Math.PI ? 1 : 0;
    const sweepFlag = diff > 0 ? 0 : 1;
    return `M ${sx},${sy} A ${rPx},${rPx} 0 ${largeArc},${sweepFlag} ${ex},${ey}`;
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
    if (i === 0 || i % 2 !== 0) continue;
    const px = toSvg(i, 0);
    ticks.push({ x: px.x, y: px.y + 16, label: String(i), anchor: 'middle' });
    const py = toSvg(0, i);
    ticks.push({ x: py.x - 10, y: py.y + 4, label: i > 0 ? `${i}i` : `\u2212${Math.abs(i)}i`, anchor: 'end' });
  }

  const presets = [
    { z1: { re: 4, im: 2 }, z2: { re: 1, im: -1 }, label: '(4+2i)/(1\u2212i)' },
    { z1: { re: 6, im: 0 }, z2: { re: 3, im: 0 }, label: '6/3' },
    { z1: { re: 0, im: 4 }, z2: { re: 0, im: 2 }, label: '4i/2i' },
    { z1: { re: 1, im: 0 }, z2: { re: 0, im: 1 }, label: '1/i' },
    { z1: { re: 3, im: 4 }, z2: { re: 3, im: -4 }, label: '(3+4i)/(3\u22124i)' },
    { z1: { re: -2, im: 6 }, z2: { re: 1, im: 2 }, label: '(\u22122+6i)/(1+2i)' },
  ];

  return (
    <div style={styles.container}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .drag-point { cursor: grab; }
        .drag-point:active { cursor: grabbing; }
        .preset-btn:hover { background: #e0ecff !important; border-color: #304090 !important; }
        input[type=number]:focus { border-color: #304090 !important; outline: none; }
      ` }} />

      <div style={styles.header}>
        <h1 style={styles.title}>Complex Division</h1>
        <span style={styles.subtitle}>Divide magnitudes, subtract angles</span>
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
                <text key={i} x={t.x} y={t.y} textAnchor={t.anchor} fontSize="11" fill="#8098b0" fontFamily="'JetBrains Mono', monospace">{t.label}</text>
              ))}

              {/* Angle arcs */}
              {mod1 > 0.3 && Math.abs(arg1) > 0.05 && (
                <path d={makeArc(0.8, 0, arg1)} fill="none" stroke="#304090" strokeWidth="2" opacity="0.6" />
              )}
              {mod2 > 0.3 && Math.abs(arg2) > 0.05 && (
                <path d={makeArc(1.1, 0, arg2)} fill="none" stroke="#B85C2A" strokeWidth="2" opacity="0.6" />
              )}
              {!divideByZero && modQ > 0.3 && Math.abs(argQ) > 0.05 && (
                <path d={makeArc(1.4, 0, argQ)} fill="none" stroke="#2A7A8C" strokeWidth="2.5" opacity="0.7" />
              )}

              {/* Arc labels */}
              {mod1 > 0.5 && Math.abs(arg1) > 0.15 && (() => {
                const mid = arg1 / 2;
                const lp = toSvg(1.0 * Math.cos(mid), 1.0 * Math.sin(mid));
                return <text x={lp.x} y={lp.y} textAnchor="middle" fontSize="12" fontWeight="600" fill="#304090" fontFamily="'JetBrains Mono', monospace">&theta;&#x2081;</text>;
              })()}
              {mod2 > 0.5 && Math.abs(arg2) > 0.15 && (() => {
                const mid = arg2 / 2;
                const lp = toSvg(1.35 * Math.cos(mid), 1.35 * Math.sin(mid));
                return <text x={lp.x} y={lp.y} textAnchor="middle" fontSize="12" fontWeight="600" fill="#B85C2A" fontFamily="'JetBrains Mono', monospace">&theta;&#x2082;</text>;
              })()}
              {!divideByZero && modQ > 0.5 && Math.abs(argQ) > 0.15 && (() => {
                const mid = argQ / 2;
                const lp = toSvg(1.7 * Math.cos(mid), 1.7 * Math.sin(mid));
                return <text x={lp.x} y={lp.y} textAnchor="middle" fontSize="12" fontWeight="700" fill="#2A7A8C" fontFamily="'JetBrains Mono', monospace">&theta;&#x2081;&minus;&theta;&#x2082;</text>;
              })()}

              {/* Vectors */}
              <line x1={originSvg.x} y1={originSvg.y} x2={z1Svg.x} y2={z1Svg.y} stroke="#304090" strokeWidth="2.5" />
              <line x1={originSvg.x} y1={originSvg.y} x2={z2Svg.x} y2={z2Svg.y} stroke="#B85C2A" strokeWidth="2.5" />

              {/* Quotient vector */}
              {!divideByZero && modQ > 0.1 && (() => {
                if (quotientVisible) {
                  return (
                    <g>
                      <line x1={originSvg.x} y1={originSvg.y} x2={qSvg.x} y2={qSvg.y} stroke="#2A7A8C" strokeWidth="3" />
                      <circle cx={qSvg.x} cy={qSvg.y} r="9" fill="#2A7A8C" stroke="#fff" strokeWidth="2" />
                      <text x={qSvg.x + 14} y={qSvg.y - 12} fontSize="15" fontWeight="700" fill="#2A7A8C" fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>
                        z&#x2081;/z&#x2082;
                      </text>
                    </g>
                  );
                } else {
                  const edgeDist = range - 0.3;
                  const cosA = Math.cos(argQ);
                  const sinA = Math.sin(argQ);
                  let t = edgeDist * 100;
                  if (Math.abs(cosA) > 0.001) t = Math.min(t, edgeDist / Math.abs(cosA));
                  if (Math.abs(sinA) > 0.001) t = Math.min(t, edgeDist / Math.abs(sinA));
                  const edgeSvg = toSvg(t * cosA, t * sinA);
                  const aLen = 12, aAngle = 0.35;
                  const baseDx = originSvg.x - edgeSvg.x;
                  const baseDy = originSvg.y - edgeSvg.y;
                  const baseMag = Math.sqrt(baseDx * baseDx + baseDy * baseDy);
                  const ux = baseDx / baseMag, uy = baseDy / baseMag;
                  const lx = edgeSvg.x + aLen * (ux * Math.cos(aAngle) - uy * Math.sin(aAngle));
                  const ly = edgeSvg.y + aLen * (uy * Math.cos(aAngle) + ux * Math.sin(aAngle));
                  const rx = edgeSvg.x + aLen * (ux * Math.cos(-aAngle) - uy * Math.sin(-aAngle));
                  const ry = edgeSvg.y + aLen * (uy * Math.cos(-aAngle) + ux * Math.sin(-aAngle));
                  return (
                    <g>
                      <line x1={originSvg.x} y1={originSvg.y} x2={edgeSvg.x} y2={edgeSvg.y} stroke="#2A7A8C" strokeWidth="3" strokeDasharray="8,4" />
                      <polygon points={`${edgeSvg.x},${edgeSvg.y} ${lx},${ly} ${rx},${ry}`} fill="#2A7A8C" />
                      <text x={edgeSvg.x + (cosA >= 0 ? -50 : 10)} y={edgeSvg.y + (sinA >= 0 ? -10 : 18)} fontSize="13" fontWeight="700" fill="#2A7A8C" fontFamily="'JetBrains Mono', monospace" style={{ pointerEvents: 'none' }}>
                        z&#x2081;/z&#x2082; &rarr;
                      </text>
                    </g>
                  );
                }
              })()}

              {/* z1 point */}
              <circle className="drag-point" cx={z1Svg.x} cy={z1Svg.y} r="11" fill="#304090" stroke="#fff" strokeWidth="2.5" onPointerDown={handlePointerDown('z1')} />
              <text x={z1Svg.x + 14} y={z1Svg.y - 12} fontSize="15" fontWeight="700" fill="#304090" fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>z&#x2081;</text>

              {/* z2 point */}
              <circle className="drag-point" cx={z2Svg.x} cy={z2Svg.y} r="11" fill="#B85C2A" stroke="#fff" strokeWidth="2.5" onPointerDown={handlePointerDown('z2')} />
              <text x={z2Svg.x + 14} y={z2Svg.y - 12} fontSize="15" fontWeight="700" fill="#B85C2A" fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>z&#x2082;</text>

              <circle cx={originSvg.x} cy={originSvg.y} r="3" fill="#8098b0" />

              {/* Zoom inset when quotient is tiny */}
              {!divideByZero && modQ > 0.01 && modQ < 1.0 && quotientVisible && (() => {
                const insetSize = 160;
                const insetX = W - margin - insetSize - 4;
                const insetY = margin + 4;
                const insetRange = Math.max(modQ * 1.8, 0.15);
                const insetScale = (insetSize - 20) / (2 * insetRange);
                const insetCx = insetX + insetSize / 2;
                const insetCy = insetY + insetSize / 2;
                const iqx = insetCx + quotient.re * insetScale;
                const iqy = insetCy - quotient.im * insetScale;
                return (
                  <g>
                    <rect x={insetX} y={insetY} width={insetSize} height={insetSize} rx="8" fill="#fff" stroke="#304090" strokeWidth="2" opacity="0.95" />
                    <text x={insetX + 8} y={insetY + 16} fontSize="11" fontWeight="700" fill="#304090" fontFamily="'DM Sans', sans-serif">
                      Zoom ({fmtNum(insetRange * 2)} &times; {fmtNum(insetRange * 2)})
                    </text>
                    <clipPath id="insetClip">
                      <rect x={insetX + 1} y={insetY + 1} width={insetSize - 2} height={insetSize - 2} rx="7" />
                    </clipPath>
                    <g clipPath="url(#insetClip)">
                      <line x1={insetX} y1={insetCy} x2={insetX + insetSize} y2={insetCy} stroke="#8098b0" strokeWidth="1" />
                      <line x1={insetCx} y1={insetY} x2={insetCx} y2={insetY + insetSize} stroke="#8098b0" strokeWidth="1" />
                      {[-0.5, 0.5].filter(v => Math.abs(v) < insetRange).map((v, i) => {
                        const gx = insetCx + v * insetScale;
                        const gy = insetCy - v * insetScale;
                        return (
                          <g key={i}>
                            <line x1={gx} y1={insetY} x2={gx} y2={insetY + insetSize} stroke="#d8e4ec" strokeWidth="0.5" />
                            <line x1={insetX} y1={gy} x2={insetX + insetSize} y2={gy} stroke="#d8e4ec" strokeWidth="0.5" />
                          </g>
                        );
                      })}
                      <line x1={insetCx} y1={insetCy} x2={iqx} y2={iqy} stroke="#2A7A8C" strokeWidth="2.5" />
                      <circle cx={iqx} cy={iqy} r="6" fill="#2A7A8C" stroke="#fff" strokeWidth="1.5" />
                      <text x={iqx + 10} y={iqy - 8} fontSize="12" fontWeight="700" fill="#2A7A8C" fontFamily="'DM Sans', sans-serif">
                        z&#x2081;/z&#x2082;
                      </text>
                      <circle cx={insetCx} cy={insetCy} r="2.5" fill="#8098b0" />
                      <text x={insetX + insetSize / 2} y={insetY + insetSize - 8} textAnchor="middle" fontSize="10" fontWeight="600" fill="#5a6480" fontFamily="'JetBrains Mono', monospace">
                        {fmtComplex(quotient.re, quotient.im)}
                      </text>
                    </g>
                  </g>
                );
              })()}
            </svg>
          </div>

          <div style={styles.presetBox}>
            <div style={styles.presetTitle}>Try these</div>
            <div style={styles.presetRow}>
              {presets.map((p) => (
                <button key={p.label} className="preset-btn" style={styles.presetBtn}
                  onClick={() => { setZ1(p.z1); setZ2(p.z2); }}>
                  {p.label}
                </button>
              ))}
              <button className="preset-btn" style={{ ...styles.presetBtn, ...styles.randBtn }}
                onClick={() => {
                  setZ1({ re: clamp(Math.random() * 12 - 6), im: clamp(Math.random() * 12 - 6) });
                  let r2, i2;
                  do { r2 = clamp(Math.random() * 12 - 6); i2 = clamp(Math.random() * 12 - 6); } while (Math.abs(r2) < 0.5 && Math.abs(i2) < 0.5);
                  setZ2({ re: r2, im: i2 });
                }}>
                Random
              </button>
            </div>
          </div>
        </div>

        <div style={styles.panel}>
          <div style={styles.inputBox}>
            <div style={{ ...styles.sectionTitle, color: palette.navy }}>z&#x2081; &mdash; Numerator</div>
            <div style={styles.inputRow}>
              <label style={styles.inputLabel}>Re:</label>
              <input type="number" step="0.1" min="-10" max="10" value={z1.re}
                onChange={(e) => safeSet(setZ1, parseFloat(e.target.value) || 0, z1.im)} style={styles.numInput} />
              <label style={styles.inputLabel}>Im:</label>
              <input type="number" step="0.1" min="-10" max="10" value={z1.im}
                onChange={(e) => safeSet(setZ1, z1.re, parseFloat(e.target.value) || 0)} style={styles.numInput} />
            </div>
            <div style={styles.miniVals}>
              <span><strong style={{ color: palette.navy }}>{fmtComplex(z1.re, z1.im)}</strong></span>
              <span style={styles.polarMini}>|z&#x2081;| = {fmtNum(mod1)}, &theta;&#x2081; = {fmtNum(arg1 * 180 / Math.PI)}&deg;</span>
            </div>
          </div>

          <div style={styles.inputBox}>
            <div style={{ ...styles.sectionTitle, color: palette.orange }}>z&#x2082; &mdash; Denominator</div>
            <div style={styles.inputRow}>
              <label style={styles.inputLabel}>Re:</label>
              <input type="number" step="0.1" min="-10" max="10" value={z2.re}
                onChange={(e) => safeSet(setZ2, parseFloat(e.target.value) || 0, z2.im)} style={styles.numInput} />
              <label style={styles.inputLabel}>Im:</label>
              <input type="number" step="0.1" min="-10" max="10" value={z2.im}
                onChange={(e) => safeSet(setZ2, z2.re, parseFloat(e.target.value) || 0)} style={styles.numInput} />
            </div>
            <div style={styles.miniVals}>
              <span><strong style={{ color: palette.orange }}>{fmtComplex(z2.re, z2.im)}</strong></span>
              <span style={styles.polarMini}>|z&#x2082;| = {fmtNum(mod2)}, &theta;&#x2082; = {fmtNum(arg2 * 180 / Math.PI)}&deg;</span>
            </div>
          </div>

          {warning && (
            <div style={styles.warningMsg}>Values are limited to &plusmn;10. Input was clamped.</div>
          )}

          <div style={styles.resultBox}>
            <div style={{ ...styles.sectionTitle, color: palette.teal }}>z&#x2081; / z&#x2082; &mdash; Quotient</div>
            {divideByZero ? (
              <div style={styles.divZeroMsg}>Cannot divide by zero &mdash; move z&#x2082; away from the origin</div>
            ) : (
              <>
                <div style={styles.resultMain}>
                  <span style={styles.resultVal}>{fmtComplex(quotient.re, quotient.im)}</span>
                </div>
                <div style={styles.resultPolar}>
                  |z&#x2081;/z&#x2082;| = {fmtNum(modQ)}, &theta; = {fmtNum(argQ * 180 / Math.PI)}&deg;
                </div>
                {!quotientVisible && (
                  <div style={styles.offscreen}>Quotient extends beyond &plusmn;10 &mdash; shown as a ray on the diagram</div>
                )}
              </>
            )}
          </div>

          {!divideByZero && (
            <div style={styles.stepsBox}>
              <div style={styles.sectionTitle}>Algebraic Method (Multiply by Conjugate)</div>
              <div style={styles.stepLine}>
                <span style={styles.frac}>
                  <span style={styles.fracNum}>{fmtComplex(z1.re, z1.im)}</span>
                  <span style={styles.fracBar}></span>
                  <span style={styles.fracDen}>{fmtComplex(z2.re, z2.im)}</span>
                </span>
                <span style={styles.stepMid}> &times; </span>
                <span style={styles.frac}>
                  <span style={styles.fracNum}>{fmtComplex(z2conj.re, z2conj.im)}</span>
                  <span style={styles.fracBar}></span>
                  <span style={styles.fracDen}>{fmtComplex(z2conj.re, z2conj.im)}</span>
                </span>
              </div>
              <div style={styles.stepText}>
                Multiply top and bottom by the conjugate of z&#x2082;:
              </div>
              <div style={styles.stepText}>
                Denominator: ({fmtComplex(z2.re, z2.im)})({fmtComplex(z2conj.re, z2conj.im)}) = |z&#x2082;|&sup2; = {fmtNum(z2.re)}&sup2; + {fmtNum(Math.abs(z2.im))}&sup2; = <strong>{fmtNum(denom)}</strong>
              </div>
              <div style={styles.stepText}>
                Numerator: ({fmtComplex(z1.re, z1.im)})({fmtComplex(z2conj.re, z2conj.im)}) = <strong>{fmtNum(numReal)} + {fmtNum(numImag)}i</strong>
              </div>
              <div style={styles.stepText}>
                Result:{' '}
                <span style={styles.frac}>
                  <span style={styles.fracNum}>{fmtNum(numReal)} + {fmtNum(numImag)}i</span>
                  <span style={styles.fracBar}></span>
                  <span style={styles.fracDen}>{fmtNum(denom)}</span>
                </span>
                <span style={styles.stepMid}> = </span>
                <strong style={{ color: palette.teal }}>{fmtComplex(quotient.re, quotient.im)}</strong>
              </div>
            </div>
          )}

          {!divideByZero && (
            <div style={styles.stepsBox}>
              <div style={styles.sectionTitle}>Geometric Method (Polar)</div>
              <div style={styles.stepText}>
                <strong style={{ color: palette.navy }}>|z&#x2081;|</strong> &divide; <strong style={{ color: palette.orange }}>|z&#x2082;|</strong> = {fmtNum(mod1)} &divide; {fmtNum(mod2)} = <strong style={{ color: palette.teal }}>{fmtNum(modQ)}</strong>
              </div>
              <div style={styles.stepText}>
                <strong style={{ color: palette.navy }}>&theta;&#x2081;</strong> &minus; <strong style={{ color: palette.orange }}>&theta;&#x2082;</strong> = {fmtNum(arg1 * 180 / Math.PI)}&deg; &minus; {fmtNum(arg2 * 180 / Math.PI)}&deg; = <strong style={{ color: palette.teal }}>{fmtNum(argQ * 180 / Math.PI)}&deg;</strong>
              </div>
              <div style={styles.geoSummary}>
                Divide the lengths, subtract the angles. The quotient vector is <strong style={{ color: palette.teal }}>{fmtNum(modQ)}</strong> units long at <strong style={{ color: palette.teal }}>{fmtNum(argQ * 180 / Math.PI)}&deg;</strong> from the real axis.
              </div>
            </div>
          )}

          <div style={styles.explainBox}>
            <div style={styles.sectionTitle}>Key Ideas</div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.navy }}></span>
              <span>
                <strong>To divide complex numbers algebraically,</strong> multiply the numerator and denominator by the conjugate of the denominator. This makes the denominator real (since z&middot;z&#x305; = |z|&sup2;), turning the problem into simple real division.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.orange }}></span>
              <span>
                <strong>Geometrically,</strong> dividing z&#x2081; by z&#x2082; shrinks z&#x2081; by a factor of |z&#x2082;| and rotates it by &minus;&theta;&#x2082;. The result: |z&#x2081;/z&#x2082;| = |z&#x2081;|/|z&#x2082;| and arg(z&#x2081;/z&#x2082;) = &theta;&#x2081; &minus; &theta;&#x2082;.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.teal }}></span>
              <span>
                <strong>Dividing by i rotates by &minus;90&deg;.</strong> Try &ldquo;1/i&rdquo; &mdash; i has angle 90&deg;, so dividing subtracts 90&deg;, giving angle &minus;90&deg; = &minus;i. This confirms that 1/i = &minus;i.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.blue }}></span>
              <span>
                <strong>Dividing conjugates</strong> always gives a result on the unit circle. Try &ldquo;(3+4i)/(3&minus;4i)&rdquo; &mdash; since |z| = |z&#x305;|, the magnitudes cancel to 1, and only the angle doubles.
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
    maxWidth: '1180px',
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
    gridTemplateColumns: '624px 1fr',
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
  presetBox: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '8px',
    padding: '10px 14px',
  },
  presetTitle: {
    fontSize: '0.88rem',
    fontWeight: '700',
    color: palette.navy,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '8px',
  },
  presetRow: {
    display: 'flex',
    gap: '6px',
    flexWrap: 'wrap',
  },
  presetBtn: {
    padding: '5px 10px',
    border: `1px solid ${palette.border}`,
    borderRadius: '5px',
    backgroundColor: palette.white,
    fontFamily: mono,
    fontSize: '0.85rem',
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
    marginBottom: '6px',
  },
  inputLabel: {
    fontSize: '0.96rem',
    fontWeight: '600',
    color: palette.muted,
    fontFamily: mono,
  },
  numInput: {
    width: '80px',
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
  miniVals: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    fontFamily: mono,
    fontSize: '0.96rem',
  },
  polarMini: {
    fontSize: '0.85rem',
    color: palette.muted,
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
    padding: '12px 14px',
  },
  resultMain: {
    marginBottom: '4px',
  },
  resultVal: {
    fontFamily: mono,
    fontSize: '1.35rem',
    fontWeight: '700',
    color: palette.teal,
  },
  resultPolar: {
    fontFamily: mono,
    fontSize: '0.9rem',
    color: palette.muted,
  },
  offscreen: {
    marginTop: '4px',
    fontSize: '0.85rem',
    color: '#b03030',
    fontWeight: '600',
  },
  divZeroMsg: {
    fontSize: '1.02rem',
    fontWeight: '700',
    color: '#b03030',
    padding: '6px 0',
  },
  stepsBox: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '8px',
    padding: '12px 14px',
  },
  stepLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: mono,
    fontSize: '1.02rem',
    color: palette.text,
    lineHeight: 1.7,
    padding: '6px 0',
    flexWrap: 'wrap',
  },
  stepMid: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: palette.muted,
  },
  stepText: {
    fontFamily: mono,
    fontSize: '0.9rem',
    color: palette.text,
    lineHeight: 1.7,
    paddingLeft: '4px',
  },
  frac: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    verticalAlign: 'middle',
    padding: '0 4px',
  },
  fracNum: {
    fontSize: '0.93rem',
    fontWeight: '600',
    lineHeight: 1.3,
  },
  fracBar: {
    width: '100%',
    height: '2px',
    backgroundColor: palette.text,
    margin: '2px 0',
  },
  fracDen: {
    fontSize: '0.93rem',
    fontWeight: '600',
    lineHeight: 1.3,
  },
  geoSummary: {
    marginTop: '6px',
    fontSize: '0.93rem',
    color: palette.text,
    lineHeight: 1.5,
    padding: '6px 8px',
    backgroundColor: `${palette.teal}08`,
    borderRadius: '4px',
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