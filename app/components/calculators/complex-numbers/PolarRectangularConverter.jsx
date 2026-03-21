// 'use client';

// import { useState, useRef, useCallback } from 'react';

// export default function PolarRectangularConverter() {
//   const [re, setRe] = useState(3);
//   const [im, setIm] = useState(2);
//   const [dragging, setDragging] = useState(false);
//   const [warning, setWarning] = useState(false);
//   const warningTimer = useRef(null);
//   const svgRef = useRef(null);

//   const W = 624, H = 624;
//   const margin = 48;
//   const range = 10;
//   const maxVal = 10;
//   const scale = (W - 2 * margin) / (2 * range);
//   const ox = W / 2;
//   const oy = H / 2;

//   const clamp = (val) => Math.max(-maxVal, Math.min(maxVal, Math.round(val * 10) / 10));

//   const safeSet = (newRe, newIm) => {
//     const needsClamp = Math.abs(newRe) > maxVal || Math.abs(newIm) > maxVal;
//     if (needsClamp) {
//       setWarning(true);
//       if (warningTimer.current) clearTimeout(warningTimer.current);
//       warningTimer.current = setTimeout(() => setWarning(false), 2500);
//     }
//     setRe(clamp(newRe));
//     setIm(clamp(newIm));
//   };

//   const toSvg = (r, i) => ({ x: ox + r * scale, y: oy - i * scale });
//   const fromSvg = (sx, sy) => ({
//     re: (sx - ox) / scale,
//     im: (oy - sy) / scale,
//   });

//   // Derived polar values
//   const modulus = Math.sqrt(re * re + im * im);
//   const argument = Math.atan2(im, re);
//   const argDeg = argument * 180 / Math.PI;
//   const argPositive = argument < 0 ? argument + 2 * Math.PI : argument;

//   // SVG points
//   const zSvg = toSvg(re, im);
//   const originSvg = toSvg(0, 0);
//   const projReSvg = toSvg(re, 0);
//   const projImSvg = toSvg(0, im);

//   // Drag
//   const handlePointerDown = useCallback((e) => {
//     setDragging(true);
//     e.target.setPointerCapture(e.pointerId);
//   }, []);

//   const handlePointerMove = useCallback((e) => {
//     if (!dragging || !svgRef.current) return;
//     const rect = svgRef.current.getBoundingClientRect();
//     const sx = (e.clientX - rect.left) * (W / rect.width);
//     const sy = (e.clientY - rect.top) * (H / rect.height);
//     const pt = fromSvg(sx, sy);
//     setRe(clamp(pt.re));
//     setIm(clamp(pt.im));
//   }, [dragging]);

//   const handlePointerUp = useCallback(() => {
//     setDragging(false);
//   }, []);

//   // Set from polar inputs
//   const setFromPolar = (r, deg) => {
//     const rad = deg * Math.PI / 180;
//     const newRe = r * Math.cos(rad);
//     const newIm = r * Math.sin(rad);
//     safeSet(newRe, newIm);
//   };

//   // Arc path
//   const arcPath = () => {
//     if (modulus < 0.1 || Math.abs(argument) < 0.01) return '';
//     const arcR = Math.min(1.2, modulus * 0.4) * scale;
//     const startX = originSvg.x + arcR;
//     const startY = originSvg.y;
//     const endX = originSvg.x + arcR * Math.cos(argument);
//     const endY = originSvg.y - arcR * Math.sin(argument);
//     const largeArc = Math.abs(argument) > Math.PI ? 1 : 0;
//     const sweepFlag = argument > 0 ? 0 : 1;
//     return `M ${startX},${startY} A ${arcR},${arcR} 0 ${largeArc},${sweepFlag} ${endX},${endY}`;
//   };

//   const fmtNum = (n) => {
//     if (Math.abs(n) < 0.005) return '0';
//     if (Math.abs(n - Math.round(n)) < 0.005) return String(Math.round(n));
//     return n.toFixed(2);
//   };

//   const fmtComplex = (r, i) => {
//     const rs = fmtNum(r);
//     const ai = Math.abs(i);
//     const is = fmtNum(ai);
//     if (Math.abs(i) < 0.005) return rs;
//     if (Math.abs(r) < 0.005) {
//       if (is === '1') return i > 0 ? 'i' : '−i';
//       return i > 0 ? `${is}i` : `−${is}i`;
//     }
//     const sign = i > 0 ? ' + ' : ' − ';
//     const iPart = is === '1' ? 'i' : `${is}i`;
//     return `${rs}${sign}${iPart}`;
//   };

//   const fmtAngleRad = (rad) => {
//     const fracs = [
//       { val: 0, label: '0' }, { val: Math.PI / 6, label: 'π/6' },
//       { val: Math.PI / 4, label: 'π/4' }, { val: Math.PI / 3, label: 'π/3' },
//       { val: Math.PI / 2, label: 'π/2' }, { val: 2 * Math.PI / 3, label: '2π/3' },
//       { val: 3 * Math.PI / 4, label: '3π/4' }, { val: 5 * Math.PI / 6, label: '5π/6' },
//       { val: Math.PI, label: 'π' }, { val: -5 * Math.PI / 6, label: '−5π/6' },
//       { val: -3 * Math.PI / 4, label: '−3π/4' }, { val: -2 * Math.PI / 3, label: '−2π/3' },
//       { val: -Math.PI / 2, label: '−π/2' }, { val: -Math.PI / 3, label: '−π/3' },
//       { val: -Math.PI / 4, label: '−π/4' }, { val: -Math.PI / 6, label: '−π/6' },
//     ];
//     for (const f of fracs) {
//       if (Math.abs(rad - f.val) < 0.02) return f.label;
//     }
//     return `${(rad / Math.PI).toFixed(2)}π`;
//   };

//   // Grid
//   const gridLines = [];
//   for (let i = -range; i <= range; i++) {
//     if (i === 0) continue;
//     const p1v = toSvg(i, -range);
//     const p2v = toSvg(i, range);
//     gridLines.push({ x1: p1v.x, y1: p1v.y, x2: p2v.x, y2: p2v.y });
//     const p1h = toSvg(-range, i);
//     const p2h = toSvg(range, i);
//     gridLines.push({ x1: p1h.x, y1: p1h.y, x2: p2h.x, y2: p2h.y });
//   }

//   const ticks = [];
//   for (let i = -range; i <= range; i++) {
//     if (i === 0 || i % 2 !== 0) continue;
//     const px = toSvg(i, 0);
//     ticks.push({ x: px.x, y: px.y + 16, label: String(i), anchor: 'middle' });
//     const py = toSvg(0, i);
//     ticks.push({ x: py.x - 10, y: py.y + 4, label: i > 0 ? `${i}i` : `−${Math.abs(i)}i`, anchor: 'end' });
//   }

//   // Presets
//   const presets = [
//     { re: 3, im: 2, label: '3 + 2i' },
//     { re: -4, im: 3, label: '−4 + 3i' },
//     { re: 0, im: 5, label: '5i' },
//     { re: -6, im: 0, label: '−6' },
//     { re: 5, im: -5, label: '5 − 5i' },
//     { re: -3, im: -4, label: '−3 − 4i' },
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
//         <h1 style={styles.title}>Polar ↔ Rectangular Converter</h1>
//         <span style={styles.subtitle}>Convert between a + bi and r∠θ</span>
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

//               {/* Grid */}
//               {gridLines.map((l, i) => (
//                 <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#d8e4ec" strokeWidth="0.7" />
//               ))}

//               {/* Axes */}
//               <line x1={margin} y1={oy} x2={W - margin} y2={oy} stroke="#8098b0" strokeWidth="1.5" />
//               <line x1={ox} y1={margin} x2={ox} y2={H - margin} stroke="#8098b0" strokeWidth="1.5" />
//               <text x={W - margin + 8} y={oy + 5} fontSize="14" fontWeight="600" fill="#304090" fontFamily="'DM Sans', sans-serif">Re</text>
//               <text x={ox + 8} y={margin - 8} fontSize="14" fontWeight="600" fill="#304090" fontFamily="'DM Sans', sans-serif">Im</text>

//               {/* Ticks */}
//               {ticks.map((t, i) => (
//                 <text key={i} x={t.x} y={t.y} textAnchor={t.anchor} fontSize="11" fill="#8098b0" fontFamily="'JetBrains Mono', monospace">{t.label}</text>
//               ))}

//               {/* Modulus circle */}
//               {modulus > 0.2 && (
//                 <circle cx={originSvg.x} cy={originSvg.y} r={modulus * scale} fill="none" stroke="#4098d8" strokeWidth="1.5" strokeDasharray="6,3" opacity="0.35" />
//               )}

//               {/* Angle arc */}
//               {modulus > 0.2 && (
//                 <path d={arcPath()} fill="none" stroke="#f89838" strokeWidth="2.5" />
//               )}

//               {/* θ label */}
//               {modulus > 0.5 && Math.abs(argument) > 0.1 && (() => {
//                 const midA = argument / 2;
//                 const labelR = Math.min(1.8, modulus * 0.55) * scale;
//                 const lx = originSvg.x + labelR * Math.cos(midA);
//                 const ly = originSvg.y - labelR * Math.sin(midA);
//                 return (
//                   <text x={lx} y={ly} textAnchor="middle" fontSize="15" fontWeight="700" fill="#f89838" fontFamily="'DM Sans', sans-serif">θ</text>
//                 );
//               })()}

//               {/* Triangle fill */}
//               {modulus > 0.3 && (
//                 <polygon
//                   points={`${originSvg.x},${originSvg.y} ${projReSvg.x},${projReSvg.y} ${zSvg.x},${zSvg.y}`}
//                   fill="#304090"
//                   opacity="0.05"
//                 />
//               )}

//               {/* Projection dashed lines */}
//               <line x1={zSvg.x} y1={zSvg.y} x2={projImSvg.x} y2={projImSvg.y} stroke="#304090" strokeWidth="1" strokeDasharray="4,3" opacity="0.35" />
//               <line x1={zSvg.x} y1={zSvg.y} x2={projReSvg.x} y2={projReSvg.y} stroke="#304090" strokeWidth="1" strokeDasharray="4,3" opacity="0.35" />

//               {/* Hypotenuse: origin → z */}
//               <line x1={originSvg.x} y1={originSvg.y} x2={zSvg.x} y2={zSvg.y} stroke="#304090" strokeWidth="2.5" />
//               {/* Adjacent: origin → Re projection */}
//               <line x1={originSvg.x} y1={originSvg.y} x2={projReSvg.x} y2={projReSvg.y} stroke="#1a8060" strokeWidth="2" />
//               {/* Opposite: Re projection → z */}
//               <line x1={projReSvg.x} y1={projReSvg.y} x2={zSvg.x} y2={zSvg.y} stroke="#c04040" strokeWidth="2" />

//               {/* Right angle marker */}
//               {Math.abs(re) > 0.4 && Math.abs(im) > 0.4 && (() => {
//                 const sz = 9;
//                 const dirX = re > 0 ? -1 : 1;
//                 const dirY = im > 0 ? -1 : 1;
//                 return (
//                   <polyline
//                     points={`${projReSvg.x},${projReSvg.y + dirY * sz} ${projReSvg.x + dirX * sz},${projReSvg.y + dirY * sz} ${projReSvg.x + dirX * sz},${projReSvg.y}`}
//                     fill="none"
//                     stroke="#8098b0"
//                     strokeWidth="1.2"
//                   />
//                 );
//               })()}

//               {/* Side labels */}
//               {Math.abs(re) > 0.6 && (
//                 <text
//                   x={(originSvg.x + projReSvg.x) / 2}
//                   y={originSvg.y + (im >= 0 ? 22 : -12)}
//                   textAnchor="middle"
//                   fontSize="13"
//                   fontWeight="600"
//                   fill="#1a8060"
//                   fontFamily="'JetBrains Mono', monospace"
//                 >
//                   a = {fmtNum(re)}
//                 </text>
//               )}
//               {Math.abs(im) > 0.6 && (
//                 <text
//                   x={projReSvg.x + (re >= 0 ? 18 : -18)}
//                   y={(projReSvg.y + zSvg.y) / 2 + 4}
//                   textAnchor={re >= 0 ? 'start' : 'end'}
//                   fontSize="13"
//                   fontWeight="600"
//                   fill="#c04040"
//                   fontFamily="'JetBrains Mono', monospace"
//                 >
//                   b = {fmtNum(im)}
//                 </text>
//               )}

//               {/* Modulus label on hypotenuse */}
//               {modulus > 0.8 && (
//                 <text
//                   x={(originSvg.x + zSvg.x) / 2 + (im >= 0 ? -14 : 14)}
//                   y={(originSvg.y + zSvg.y) / 2 + (im >= 0 ? -10 : 18)}
//                   textAnchor="middle"
//                   fontSize="12"
//                   fontWeight="600"
//                   fill="#304090"
//                   fontFamily="'JetBrains Mono', monospace"
//                 >
//                   r = {fmtNum(modulus)}
//                 </text>
//               )}

//               {/* Projection dots */}
//               <circle cx={projReSvg.x} cy={projReSvg.y} r="4" fill="#1a8060" />
//               <circle cx={projImSvg.x} cy={projImSvg.y} r="4" fill="#c04040" />

//               {/* z point (draggable) */}
//               <circle
//                 className="drag-point"
//                 cx={zSvg.x}
//                 cy={zSvg.y}
//                 r="11"
//                 fill="#304090"
//                 stroke="#fff"
//                 strokeWidth="2.5"
//                 onPointerDown={handlePointerDown}
//               />
//               <text
//                 x={zSvg.x + 16}
//                 y={zSvg.y - 10}
//                 fontSize="15"
//                 fontWeight="700"
//                 fill="#304090"
//                 fontFamily="'DM Sans', sans-serif"
//                 style={{ pointerEvents: 'none' }}
//               >
//                 z
//               </text>

//               <circle cx={originSvg.x} cy={originSvg.y} r="3" fill="#8098b0" />
//             </svg>
//           </div>

//           {/* Presets */}
//           <div style={styles.presetBox}>
//             <div style={styles.presetTitle}>Try these</div>
//             <div style={styles.presetRow}>
//               {presets.map((p) => (
//                 <button
//                   key={p.label}
//                   className="preset-btn"
//                   style={styles.presetBtn}
//                   onClick={() => { setRe(p.re); setIm(p.im); }}
//                 >
//                   {p.label}
//                 </button>
//               ))}
//               <button
//                 className="preset-btn"
//                 style={{ ...styles.presetBtn, ...styles.randBtn }}
//                 onClick={() => {
//                   setRe(clamp(Math.random() * 20 - 10));
//                   setIm(clamp(Math.random() * 20 - 10));
//                 }}
//               >
//                 Random
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right panel */}
//         <div style={styles.panel}>
//           {/* Rectangular input */}
//           <div style={styles.inputBox}>
//             <div style={styles.sectionTitle}>Rectangular Form</div>
//             <div style={styles.formDisplay}>z = a + bi</div>
//             <div style={styles.inputRow}>
//               <label style={styles.inputLabel}>a =</label>
//               <input
//                 type="number"
//                 step="0.1"
//                 min="-10"
//                 max="10"
//                 value={re}
//                 onChange={(e) => safeSet(parseFloat(e.target.value) || 0, im)}
//                 style={styles.numInput}
//               />
//               <label style={styles.inputLabel}>b =</label>
//               <input
//                 type="number"
//                 step="0.1"
//                 min="-10"
//                 max="10"
//                 value={im}
//                 onChange={(e) => safeSet(re, parseFloat(e.target.value) || 0)}
//                 style={styles.numInput}
//               />
//             </div>
//             <div style={styles.resultLine}>
//               z = <strong style={{ color: palette.navy }}>{fmtComplex(re, im)}</strong>
//             </div>
//             {warning && (
//               <div style={styles.warningMsg}>Values are limited to ±10. Input was clamped.</div>
//             )}
//           </div>

//           {/* Polar input */}
//           <div style={styles.inputBox}>
//             <div style={styles.sectionTitle}>Polar Form</div>
//             <div style={styles.formDisplay}>z = r · e<sup>iθ</sup> = r(cos θ + i sin θ)</div>
//             <div style={styles.inputRow}>
//               <label style={styles.inputLabel}>r =</label>
//               <input
//                 type="number"
//                 step="0.1"
//                 min="0"
//                 max="14.15"
//                 value={Math.round(modulus * 100) / 100}
//                 onChange={(e) => {
//                   const newR = Math.max(0, parseFloat(e.target.value) || 0);
//                   setFromPolar(newR, argDeg);
//                 }}
//                 style={styles.numInput}
//               />
//               <label style={styles.inputLabel}>θ =</label>
//               <input
//                 type="number"
//                 step="1"
//                 min="-180"
//                 max="180"
//                 value={Math.round(argDeg * 10) / 10}
//                 onChange={(e) => {
//                   const newDeg = parseFloat(e.target.value) || 0;
//                   setFromPolar(modulus, newDeg);
//                 }}
//                 style={styles.numInput}
//               />
//               <span style={styles.degLabel}>°</span>
//             </div>
//             <div style={styles.resultLine}>
//               r = <strong style={{ color: palette.blue }}>{fmtNum(modulus)}</strong>,{' '}
//               θ = <strong style={{ color: palette.orange }}>{fmtNum(argDeg)}° = {fmtAngleRad(argument)} rad</strong>
//             </div>
//           </div>

//           {/* Conversion formulas */}
//           <div style={styles.formulaBox}>
//             <div style={styles.sectionTitle}>Conversion Formulas</div>

//             <div style={styles.convBlock}>
//               <div style={styles.convTitle}>Rectangular → Polar</div>
//               <div style={styles.convFormula}>r = √(a² + b²) = √({fmtNum(re)}² + {fmtNum(im)}²) = √({fmtNum(re * re)} + {fmtNum(im * im)}) = <strong style={{ color: palette.blue }}>{fmtNum(modulus)}</strong></div>
//               <div style={styles.convFormula}>θ = atan2(b, a) = atan2({fmtNum(im)}, {fmtNum(re)}) = <strong style={{ color: palette.orange }}>{fmtNum(argDeg)}°</strong></div>
//             </div>

//             <div style={styles.convBlock}>
//               <div style={styles.convTitle}>Polar → Rectangular</div>
//               <div style={styles.convFormula}>a = r cos θ = {fmtNum(modulus)} · cos({fmtNum(argDeg)}°) = <strong style={{ color: '#1a8060' }}>{fmtNum(re)}</strong></div>
//               <div style={styles.convFormula}>b = r sin θ = {fmtNum(modulus)} · sin({fmtNum(argDeg)}°) = <strong style={{ color: '#c04040' }}>{fmtNum(im)}</strong></div>
//             </div>
//           </div>

//           {/* Explanation */}
//           <div style={styles.explainBox}>
//             <div style={styles.sectionTitle}>Key Ideas</div>
//             <div style={styles.explainItem}>
//               <span style={{ ...styles.dot, backgroundColor: palette.navy }}></span>
//               <span>
//                 <strong>Rectangular form (a + bi)</strong> describes a complex number by its horizontal and vertical components — how far right/left (a) and how far up/down (b) from the origin.
//               </span>
//             </div>
//             <div style={styles.explainItem}>
//               <span style={{ ...styles.dot, backgroundColor: palette.blue }}></span>
//               <span>
//                 <strong>Polar form (r, θ)</strong> describes the same point by its distance from the origin (r = modulus) and the angle from the positive real axis (θ = argument).
//               </span>
//             </div>
//             <div style={styles.explainItem}>
//               <span style={{ ...styles.dot, backgroundColor: '#1a8060' }}></span>
//               <span>
//                 <strong>The right triangle is the bridge.</strong> The hypotenuse is r, the adjacent side is a = r cos θ, and the opposite side is b = r sin θ. Pythagoras gives r = √(a² + b²).
//               </span>
//             </div>
//             <div style={styles.explainItem}>
//               <span style={{ ...styles.dot, backgroundColor: palette.orange }}></span>
//               <span>
//                 <strong>When to use which?</strong> Rectangular is easier for addition and subtraction. Polar is easier for multiplication, division, and powers — because multiplying in polar means multiplying moduli and adding angles.
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
//   red: '#c04040',
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
//     gap: '14px',
//   },

//   /* Presets */
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
//     padding: '5px 12px',
//     border: `1px solid ${palette.border}`,
//     borderRadius: '5px',
//     backgroundColor: palette.white,
//     fontFamily: mono,
//     fontSize: '0.93rem',
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

//   /* Input boxes */
//   inputBox: {
//     backgroundColor: palette.white,
//     border: `1px solid ${palette.border}`,
//     borderRadius: '8px',
//     padding: '12px 14px',
//   },
//   sectionTitle: {
//     fontSize: '0.88rem',
//     fontWeight: '700',
//     color: palette.navy,
//     textTransform: 'uppercase',
//     letterSpacing: '0.5px',
//     marginBottom: '6px',
//   },
//   formDisplay: {
//     fontFamily: mono,
//     fontSize: '1.02rem',
//     fontWeight: '600',
//     color: palette.muted,
//     marginBottom: '8px',
//   },
//   inputRow: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//     marginBottom: '8px',
//   },
//   inputLabel: {
//     fontSize: '1.02rem',
//     fontWeight: '600',
//     color: palette.muted,
//     fontFamily: mono,
//   },
//   numInput: {
//     width: '85px',
//     fontSize: '1.12rem',
//     fontFamily: mono,
//     fontWeight: '600',
//     padding: '5px 8px',
//     border: `2px solid ${palette.border}`,
//     borderRadius: '5px',
//     color: palette.navy,
//     backgroundColor: palette.bg,
//     outline: 'none',
//   },
//   degLabel: {
//     fontSize: '1.1rem',
//     fontWeight: '600',
//     color: palette.muted,
//   },
//   resultLine: {
//     fontFamily: mono,
//     fontSize: '1.02rem',
//     color: palette.text,
//     padding: '6px 8px',
//     backgroundColor: `${palette.navy}06`,
//     borderRadius: '4px',
//   },
//   warningMsg: {
//     marginTop: '6px',
//     padding: '6px 10px',
//     fontSize: '0.88rem',
//     fontWeight: '600',
//     color: '#b03030',
//     backgroundColor: '#fef2f2',
//     border: '1px solid #f0c0c0',
//     borderRadius: '5px',
//   },

//   /* Formulas */
//   formulaBox: {
//     backgroundColor: palette.white,
//     border: `1px solid ${palette.border}`,
//     borderRadius: '8px',
//     padding: '12px 14px',
//   },
//   convBlock: {
//     marginBottom: '10px',
//   },
//   convTitle: {
//     fontSize: '0.9rem',
//     fontWeight: '700',
//     color: palette.text,
//     marginBottom: '4px',
//   },
//   convFormula: {
//     fontFamily: mono,
//     fontSize: '0.93rem',
//     color: palette.text,
//     lineHeight: 1.6,
//     paddingLeft: '8px',
//   },

//   /* Explanation */
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

export default function PolarRectangularConverter() {
  const [re, setRe] = useState(3);
  const [im, setIm] = useState(2);
  const [dragging, setDragging] = useState(false);
  const [warning, setWarning] = useState(false);
  const warningTimer = useRef(null);
  const svgRef = useRef(null);

  const W = 624, H = 624;
  const margin = 48;
  const range = 10;
  const maxVal = 10;
  const scale = (W - 2 * margin) / (2 * range);
  const ox = W / 2;
  const oy = H / 2;

  const clamp = (val) => Math.max(-maxVal, Math.min(maxVal, Math.round(val * 10) / 10));

  const safeSet = (newRe, newIm) => {
    const needsClamp = Math.abs(newRe) > maxVal || Math.abs(newIm) > maxVal;
    if (needsClamp) {
      setWarning(true);
      if (warningTimer.current) clearTimeout(warningTimer.current);
      warningTimer.current = setTimeout(() => setWarning(false), 2500);
    }
    setRe(clamp(newRe));
    setIm(clamp(newIm));
  };

  const toSvg = (r, i) => ({ x: ox + r * scale, y: oy - i * scale });
  const fromSvg = (sx, sy) => ({ re: (sx - ox) / scale, im: (oy - sy) / scale });

  const modulus = Math.sqrt(re * re + im * im);
  const argument = Math.atan2(im, re);
  const argDeg = argument * 180 / Math.PI;

  const zSvg = toSvg(re, im);
  const originSvg = toSvg(0, 0);
  const projReSvg = toSvg(re, 0);
  const projImSvg = toSvg(0, im);

  const handlePointerDown = useCallback((e) => {
    setDragging(true);
    e.target.setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e) => {
    if (!dragging || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const sx = (e.clientX - rect.left) * (W / rect.width);
    const sy = (e.clientY - rect.top) * (H / rect.height);
    const pt = fromSvg(sx, sy);
    setRe(clamp(pt.re));
    setIm(clamp(pt.im));
  }, [dragging]);

  const handlePointerUp = useCallback(() => {
    setDragging(false);
  }, []);

  const setFromPolar = (r, deg) => {
    const rad = deg * Math.PI / 180;
    safeSet(r * Math.cos(rad), r * Math.sin(rad));
  };

  const arcPath = () => {
    if (modulus < 0.1 || Math.abs(argument) < 0.01) return '';
    const arcR = Math.min(1.2, modulus * 0.4) * scale;
    const startX = originSvg.x + arcR;
    const startY = originSvg.y;
    const endX = originSvg.x + arcR * Math.cos(argument);
    const endY = originSvg.y - arcR * Math.sin(argument);
    const largeArc = Math.abs(argument) > Math.PI ? 1 : 0;
    const sweepFlag = argument > 0 ? 0 : 1;
    return `M ${startX},${startY} A ${arcR},${arcR} 0 ${largeArc},${sweepFlag} ${endX},${endY}`;
  };

  const fmtNum = (n) => {
    if (Math.abs(n) < 0.005) return '0';
    if (Math.abs(n - Math.round(n)) < 0.005) return String(Math.round(n));
    return n.toFixed(2);
  };

  const fmtComplex = (r, i) => {
    const rs = fmtNum(r);
    const ai = Math.abs(i);
    const is = fmtNum(ai);
    if (Math.abs(i) < 0.005) return rs;
    if (Math.abs(r) < 0.005) {
      if (is === '1') return i > 0 ? 'i' : '\u2212i';
      return i > 0 ? `${is}i` : `\u2212${is}i`;
    }
    const sign = i > 0 ? ' + ' : ' \u2212 ';
    const iPart = is === '1' ? 'i' : `${is}i`;
    return `${rs}${sign}${iPart}`;
  };

  const fmtAngleRad = (rad) => {
    const fracs = [
      { val: 0, label: '0' }, { val: Math.PI / 6, label: '\u03c0/6' },
      { val: Math.PI / 4, label: '\u03c0/4' }, { val: Math.PI / 3, label: '\u03c0/3' },
      { val: Math.PI / 2, label: '\u03c0/2' }, { val: 2 * Math.PI / 3, label: '2\u03c0/3' },
      { val: 3 * Math.PI / 4, label: '3\u03c0/4' }, { val: 5 * Math.PI / 6, label: '5\u03c0/6' },
      { val: Math.PI, label: '\u03c0' }, { val: -5 * Math.PI / 6, label: '\u22125\u03c0/6' },
      { val: -3 * Math.PI / 4, label: '\u22123\u03c0/4' }, { val: -2 * Math.PI / 3, label: '\u22122\u03c0/3' },
      { val: -Math.PI / 2, label: '\u2212\u03c0/2' }, { val: -Math.PI / 3, label: '\u2212\u03c0/3' },
      { val: -Math.PI / 4, label: '\u2212\u03c0/4' }, { val: -Math.PI / 6, label: '\u2212\u03c0/6' },
    ];
    for (const f of fracs) {
      if (Math.abs(rad - f.val) < 0.02) return f.label;
    }
    return `${(rad / Math.PI).toFixed(2)}\u03c0`;
  };

  const gridLines = [];
  for (let i = -range; i <= range; i++) {
    if (i === 0) continue;
    const p1v = toSvg(i, -range), p2v = toSvg(i, range);
    gridLines.push({ x1: p1v.x, y1: p1v.y, x2: p2v.x, y2: p2v.y });
    const p1h = toSvg(-range, i), p2h = toSvg(range, i);
    gridLines.push({ x1: p1h.x, y1: p1h.y, x2: p2h.x, y2: p2h.y });
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
    { re: 3, im: 2, label: '3 + 2i' },
    { re: -4, im: 3, label: '\u22124 + 3i' },
    { re: 0, im: 5, label: '5i' },
    { re: -6, im: 0, label: '\u22126' },
    { re: 5, im: -5, label: '5 \u2212 5i' },
    { re: -3, im: -4, label: '\u22123 \u2212 4i' },
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
        <h1 style={styles.title}>Polar &harr; Rectangular Converter</h1>
        <span style={styles.subtitle}>Convert between a + bi and r&ang;&theta;</span>
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

              {gridLines.map((l, i) => (
                <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#d8e4ec" strokeWidth="0.7" />
              ))}

              <line x1={margin} y1={oy} x2={W - margin} y2={oy} stroke="#8098b0" strokeWidth="1.5" />
              <line x1={ox} y1={margin} x2={ox} y2={H - margin} stroke="#8098b0" strokeWidth="1.5" />
              <text x={W - margin + 8} y={oy + 5} fontSize="14" fontWeight="600" fill="#304090" fontFamily="'DM Sans', sans-serif">Re</text>
              <text x={ox + 8} y={margin - 8} fontSize="14" fontWeight="600" fill="#304090" fontFamily="'DM Sans', sans-serif">Im</text>

              {ticks.map((t, i) => (
                <text key={i} x={t.x} y={t.y} textAnchor={t.anchor} fontSize="11" fill="#8098b0" fontFamily="'JetBrains Mono', monospace">{t.label}</text>
              ))}

              {/* Modulus circle */}
              {modulus > 0.2 && (
                <circle cx={originSvg.x} cy={originSvg.y} r={modulus * scale} fill="none" stroke="#4098d8" strokeWidth="1.5" strokeDasharray="6,3" opacity="0.35" />
              )}

              {/* Angle arc */}
              {modulus > 0.2 && (
                <path d={arcPath()} fill="none" stroke="#B85C2A" strokeWidth="2.5" />
              )}

              {/* θ label */}
              {modulus > 0.5 && Math.abs(argument) > 0.1 && (() => {
                const midA = argument / 2;
                const labelR = Math.min(1.8, modulus * 0.55) * scale;
                const lx = originSvg.x + labelR * Math.cos(midA);
                const ly = originSvg.y - labelR * Math.sin(midA);
                return (
                  <text x={lx} y={ly} textAnchor="middle" fontSize="15" fontWeight="700" fill="#B85C2A" fontFamily="'DM Sans', sans-serif">&theta;</text>
                );
              })()}

              {/* Triangle fill */}
              {modulus > 0.3 && (
                <polygon
                  points={`${originSvg.x},${originSvg.y} ${projReSvg.x},${projReSvg.y} ${zSvg.x},${zSvg.y}`}
                  fill="#304090" opacity="0.05"
                />
              )}

              {/* Projection dashed lines */}
              <line x1={zSvg.x} y1={zSvg.y} x2={projImSvg.x} y2={projImSvg.y} stroke="#304090" strokeWidth="1" strokeDasharray="4,3" opacity="0.35" />
              <line x1={zSvg.x} y1={zSvg.y} x2={projReSvg.x} y2={projReSvg.y} stroke="#304090" strokeWidth="1" strokeDasharray="4,3" opacity="0.35" />

              {/* Triangle sides */}
              <line x1={originSvg.x} y1={originSvg.y} x2={zSvg.x} y2={zSvg.y} stroke="#304090" strokeWidth="2.5" />
              <line x1={originSvg.x} y1={originSvg.y} x2={projReSvg.x} y2={projReSvg.y} stroke="#2A7A8C" strokeWidth="2" />
              <line x1={projReSvg.x} y1={projReSvg.y} x2={zSvg.x} y2={zSvg.y} stroke="#c04040" strokeWidth="2" />

              {/* Right angle marker */}
              {Math.abs(re) > 0.4 && Math.abs(im) > 0.4 && (() => {
                const sz = 9;
                const dirX = re > 0 ? -1 : 1;
                const dirY = im > 0 ? -1 : 1;
                return (
                  <polyline
                    points={`${projReSvg.x},${projReSvg.y + dirY * sz} ${projReSvg.x + dirX * sz},${projReSvg.y + dirY * sz} ${projReSvg.x + dirX * sz},${projReSvg.y}`}
                    fill="none" stroke="#8098b0" strokeWidth="1.2"
                  />
                );
              })()}

              {/* Side labels */}
              {Math.abs(re) > 0.6 && (
                <text
                  x={(originSvg.x + projReSvg.x) / 2}
                  y={originSvg.y + (im >= 0 ? 22 : -12)}
                  textAnchor="middle" fontSize="13" fontWeight="600" fill="#2A7A8C"
                  fontFamily="'JetBrains Mono', monospace"
                >
                  a = {fmtNum(re)}
                </text>
              )}
              {Math.abs(im) > 0.6 && (
                <text
                  x={projReSvg.x + (re >= 0 ? 18 : -18)}
                  y={(projReSvg.y + zSvg.y) / 2 + 4}
                  textAnchor={re >= 0 ? 'start' : 'end'}
                  fontSize="13" fontWeight="600" fill="#c04040"
                  fontFamily="'JetBrains Mono', monospace"
                >
                  b = {fmtNum(im)}
                </text>
              )}

              {/* Modulus label */}
              {modulus > 0.8 && (
                <text
                  x={(originSvg.x + zSvg.x) / 2 + (im >= 0 ? -14 : 14)}
                  y={(originSvg.y + zSvg.y) / 2 + (im >= 0 ? -10 : 18)}
                  textAnchor="middle" fontSize="12" fontWeight="600" fill="#304090"
                  fontFamily="'JetBrains Mono', monospace"
                >
                  r = {fmtNum(modulus)}
                </text>
              )}

              {/* Projection dots */}
              <circle cx={projReSvg.x} cy={projReSvg.y} r="4" fill="#2A7A8C" />
              <circle cx={projImSvg.x} cy={projImSvg.y} r="4" fill="#c04040" />

              {/* z point */}
              <circle className="drag-point" cx={zSvg.x} cy={zSvg.y} r="11"
                fill="#304090" stroke="#fff" strokeWidth="2.5"
                onPointerDown={handlePointerDown} />
              <text x={zSvg.x + 16} y={zSvg.y - 10} fontSize="15" fontWeight="700"
                fill="#304090" fontFamily="'DM Sans', sans-serif" style={{ pointerEvents: 'none' }}>
                z
              </text>

              <circle cx={originSvg.x} cy={originSvg.y} r="3" fill="#8098b0" />
            </svg>
          </div>

          <div style={styles.presetBox}>
            <div style={styles.presetTitle}>Try these</div>
            <div style={styles.presetRow}>
              {presets.map((p) => (
                <button key={p.label} className="preset-btn" style={styles.presetBtn}
                  onClick={() => { setRe(p.re); setIm(p.im); }}>
                  {p.label}
                </button>
              ))}
              <button className="preset-btn" style={{ ...styles.presetBtn, ...styles.randBtn }}
                onClick={() => {
                  setRe(clamp(Math.random() * 20 - 10));
                  setIm(clamp(Math.random() * 20 - 10));
                }}>
                Random
              </button>
            </div>
          </div>
        </div>

        <div style={styles.panel}>
          <div style={styles.inputBox}>
            <div style={styles.sectionTitle}>Rectangular Form</div>
            <div style={styles.formDisplay}>z = a + bi</div>
            <div style={styles.inputRow}>
              <label style={styles.inputLabel}>a =</label>
              <input type="number" step="0.1" min="-10" max="10" value={re}
                onChange={(e) => safeSet(parseFloat(e.target.value) || 0, im)} style={styles.numInput} />
              <label style={styles.inputLabel}>b =</label>
              <input type="number" step="0.1" min="-10" max="10" value={im}
                onChange={(e) => safeSet(re, parseFloat(e.target.value) || 0)} style={styles.numInput} />
            </div>
            <div style={styles.resultLine}>
              z = <strong style={{ color: palette.navy }}>{fmtComplex(re, im)}</strong>
            </div>
            {warning && (
              <div style={styles.warningMsg}>Values are limited to &plusmn;10. Input was clamped.</div>
            )}
          </div>

          <div style={styles.inputBox}>
            <div style={styles.sectionTitle}>Polar Form</div>
            <div style={styles.formDisplay}>z = r &middot; e<sup>i&theta;</sup> = r(cos &theta; + i sin &theta;)</div>
            <div style={styles.inputRow}>
              <label style={styles.inputLabel}>r =</label>
              <input type="number" step="0.1" min="0" max="14.15"
                value={Math.round(modulus * 100) / 100}
                onChange={(e) => setFromPolar(Math.max(0, parseFloat(e.target.value) || 0), argDeg)}
                style={styles.numInput} />
              <label style={styles.inputLabel}>&theta; =</label>
              <input type="number" step="1" min="-180" max="180"
                value={Math.round(argDeg * 10) / 10}
                onChange={(e) => setFromPolar(modulus, parseFloat(e.target.value) || 0)}
                style={styles.numInput} />
              <span style={styles.degLabel}>&deg;</span>
            </div>
            <div style={styles.resultLine}>
              r = <strong style={{ color: palette.blue }}>{fmtNum(modulus)}</strong>,{' '}
              &theta; = <strong style={{ color: palette.orange }}>{fmtNum(argDeg)}&deg; = {fmtAngleRad(argument)} rad</strong>
            </div>
          </div>

          <div style={styles.formulaBox}>
            <div style={styles.sectionTitle}>Conversion Formulas</div>
            <div style={styles.convBlock}>
              <div style={styles.convTitle}>Rectangular &rarr; Polar</div>
              <div style={styles.convFormula}>r = &radic;(a&sup2; + b&sup2;) = &radic;({fmtNum(re)}&sup2; + {fmtNum(im)}&sup2;) = &radic;({fmtNum(re * re)} + {fmtNum(im * im)}) = <strong style={{ color: palette.blue }}>{fmtNum(modulus)}</strong></div>
              <div style={styles.convFormula}>&theta; = atan2(b, a) = atan2({fmtNum(im)}, {fmtNum(re)}) = <strong style={{ color: palette.orange }}>{fmtNum(argDeg)}&deg;</strong></div>
            </div>
            <div style={styles.convBlock}>
              <div style={styles.convTitle}>Polar &rarr; Rectangular</div>
              <div style={styles.convFormula}>a = r cos &theta; = {fmtNum(modulus)} &middot; cos({fmtNum(argDeg)}&deg;) = <strong style={{ color: '#2A7A8C' }}>{fmtNum(re)}</strong></div>
              <div style={styles.convFormula}>b = r sin &theta; = {fmtNum(modulus)} &middot; sin({fmtNum(argDeg)}&deg;) = <strong style={{ color: '#c04040' }}>{fmtNum(im)}</strong></div>
            </div>
          </div>

          <div style={styles.explainBox}>
            <div style={styles.sectionTitle}>Key Ideas</div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.navy }}></span>
              <span>
                <strong>Rectangular form (a + bi)</strong> describes a complex number by its horizontal and vertical components &mdash; how far right/left (a) and how far up/down (b) from the origin.
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.blue }}></span>
              <span>
                <strong>Polar form (r, &theta;)</strong> describes the same point by its distance from the origin (r = modulus) and the angle from the positive real axis (&theta; = argument).
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.teal }}></span>
              <span>
                <strong>The right triangle is the bridge.</strong> The hypotenuse is r, the adjacent side is a = r cos &theta;, and the opposite side is b = r sin &theta;. Pythagoras gives r = &radic;(a&sup2; + b&sup2;).
              </span>
            </div>
            <div style={styles.explainItem}>
              <span style={{ ...styles.dot, backgroundColor: palette.orange }}></span>
              <span>
                <strong>When to use which?</strong> Rectangular is easier for addition and subtraction. Polar is easier for multiplication, division, and powers &mdash; because multiplying in polar means multiplying moduli and adding angles.
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
  red: '#c04040',
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
    gap: '14px',
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
    padding: '5px 12px',
    border: `1px solid ${palette.border}`,
    borderRadius: '5px',
    backgroundColor: palette.white,
    fontFamily: mono,
    fontSize: '0.93rem',
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
    padding: '12px 14px',
  },
  sectionTitle: {
    fontSize: '0.88rem',
    fontWeight: '700',
    color: palette.navy,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '6px',
  },
  formDisplay: {
    fontFamily: mono,
    fontSize: '1.02rem',
    fontWeight: '600',
    color: palette.muted,
    marginBottom: '8px',
  },
  inputRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px',
  },
  inputLabel: {
    fontSize: '1.02rem',
    fontWeight: '600',
    color: palette.muted,
    fontFamily: mono,
  },
  numInput: {
    width: '85px',
    fontSize: '1.12rem',
    fontFamily: mono,
    fontWeight: '600',
    padding: '5px 8px',
    border: `2px solid ${palette.border}`,
    borderRadius: '5px',
    color: palette.navy,
    backgroundColor: palette.bg,
    outline: 'none',
  },
  degLabel: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: palette.muted,
  },
  resultLine: {
    fontFamily: mono,
    fontSize: '1.02rem',
    color: palette.text,
    padding: '6px 8px',
    backgroundColor: `${palette.navy}06`,
    borderRadius: '4px',
  },
  warningMsg: {
    marginTop: '6px',
    padding: '6px 10px',
    fontSize: '0.88rem',
    fontWeight: '600',
    color: '#b03030',
    backgroundColor: '#fef2f2',
    border: '1px solid #f0c0c0',
    borderRadius: '5px',
  },
  formulaBox: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: '8px',
    padding: '12px 14px',
  },
  convBlock: {
    marginBottom: '10px',
  },
  convTitle: {
    fontSize: '0.9rem',
    fontWeight: '700',
    color: palette.text,
    marginBottom: '4px',
  },
  convFormula: {
    fontFamily: mono,
    fontSize: '0.93rem',
    color: palette.text,
    lineHeight: 1.6,
    paddingLeft: '8px',
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