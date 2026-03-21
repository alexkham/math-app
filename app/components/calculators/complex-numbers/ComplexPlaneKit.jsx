// import { useState, useRef, useCallback, useEffect } from "react";
// import { processContent } from "@/app/utils/contentProcessor";

// /* ═══════════════════════════════════════════
//    THEME
//    ═══════════════════════════════════════════ */

// export const THEME = {
//   colors: {
//     bg: "#f0f8f8",
//     card: "#ffffff",
//     orange: "#f89838",
//     navy: "#304090",
//     blue: "#4098d8",
//     text: "#102050",
//     muted: "#6080a0",
//     light: "#8a9ab0",
//     grid: "#d8e8f0",
//     border: "#c8dce8",
//   },
//   font: "'DM Sans', 'Segoe UI', sans-serif",
// };

// const C = THEME.colors;

// /* ═══════════════════════════════════════════
//    UTILITIES
//    ═══════════════════════════════════════════ */

// export function clamp(v, min, max) {
//   return Math.max(min, Math.min(max, v));
// }

// export function formatNum(n) {
//   if (Number.isInteger(n)) return n.toString();
//   return n.toFixed(2).replace(/\.?0+$/, "");
// }

// export function formatComplex(a, b) {
//   if (a === 0 && b === 0) return "0";
//   if (b === 0) return formatNum(a);
//   if (a === 0) {
//     if (b === 1) return "i";
//     if (b === -1) return "−i";
//     return b < 0 ? `−${formatNum(-b)}i` : `${formatNum(b)}i`;
//   }
//   const bAbs = Math.abs(b);
//   const bStr = bAbs === 1 ? "" : formatNum(bAbs);
//   const sign = b > 0 ? " + " : " − ";
//   return `${formatNum(a)}${sign}${bStr}i`;
// }

// export function getQuadrant(a, b) {
//   if (a > 0 && b > 0) return "I";
//   if (a < 0 && b > 0) return "II";
//   if (a < 0 && b < 0) return "III";
//   if (a > 0 && b < 0) return "IV";
//   return null;
// }

// function getTickStep(range) {
//   if (range <= 7) return 1;
//   return 2;
// }

// function getSnap(range) {
//   if (range <= 7) return 0.5;
//   return 1;
// }

// /* ═══════════════════════════════════════════
//    COMPLEX PLANE
   
//    The SVG canvas: grid, axes, ticks, origin.
//    Handles drag/touch input. Renders children
//    via render-prop: ({ ox, oy, unit }) => ...
   
//    Props:
//      width        — viewBox width (default 520)
//      height       — viewBox height (default 480)
//      range        — units from center, 5–10
//      onPlaneDrag  — (a, b) => void
//      showLabels   — show axis tick labels
//      children     — render-prop or ReactNode
//    ═══════════════════════════════════════════ */

// export function ComplexPlane({
//   width = 520,
//   height = 480,
//   range = 5,
//   onPlaneDrag,
//   showLabels = true,
//   children,
// }) {
//   const svgRef = useRef(null);
//   const dragging = useRef(false);

//   const ox = width / 2;
//   const oy = height / 2;
//   const margin = 28;
//   const unit = Math.min(
//     (width - margin * 2) / (range * 2),
//     (height - margin * 2) / (range * 2)
//   );
//   const snap = getSnap(range);
//   const tickStep = getTickStep(range);

//   const toPlane = useCallback(
//     (e) => {
//       const svg = svgRef.current;
//       const rect = svg.getBoundingClientRect();
//       const clientX = e.touches ? e.touches[0].clientX : e.clientX;
//       const clientY = e.touches ? e.touches[0].clientY : e.clientY;
//       const sx = (clientX - rect.left) * (width / rect.width);
//       const sy = (clientY - rect.top) * (height / rect.height);
//       let a = Math.round((sx - ox) / unit / snap) * snap;
//       let b = Math.round((oy - sy) / unit / snap) * snap;
//       a = clamp(a, -range, range);
//       b = clamp(b, -range, range);
//       return [a, b];
//     },
//     [width, height, ox, oy, unit, range, snap]
//   );

//   const handleDown = useCallback(
//     (e) => {
//       if (!onPlaneDrag) return;
//       dragging.current = true;
//       onPlaneDrag(...toPlane(e));
//       e.preventDefault();
//     },
//     [onPlaneDrag, toPlane]
//   );

//   const handleMove = useCallback(
//     (e) => {
//       if (!dragging.current || !onPlaneDrag) return;
//       onPlaneDrag(...toPlane(e));
//       e.preventDefault();
//     },
//     [onPlaneDrag, toPlane]
//   );

//   const handleUp = useCallback(() => {
//     dragging.current = false;
//   }, []);

//   useEffect(() => {
//     window.addEventListener("mouseup", handleUp);
//     window.addEventListener("touchend", handleUp);
//     return () => {
//       window.removeEventListener("mouseup", handleUp);
//       window.removeEventListener("touchend", handleUp);
//     };
//   }, [handleUp]);

//   const gridLines = [];
//   for (let i = -range; i <= range; i++) {
//     if (i === 0) continue;
//     const minor = i % tickStep !== 0;
//     gridLines.push(
//       <line key={`gv${i}`} x1={ox + i * unit} y1={margin - 4} x2={ox + i * unit} y2={height - margin + 4} stroke={C.grid} strokeWidth={minor ? "0.3" : "0.6"} />
//     );
//     gridLines.push(
//       <line key={`gh${i}`} x1={margin - 4} y1={oy + i * unit} x2={width - margin + 4} y2={oy + i * unit} stroke={C.grid} strokeWidth={minor ? "0.3" : "0.6"} />
//     );
//   }

//   const ticks = [];
//   if (showLabels) {
//     const fs = range <= 6 ? "10" : range <= 8 ? "9" : "8";
//     for (let i = -range; i <= range; i++) {
//       if (i === 0 || i % tickStep !== 0) continue;
//       ticks.push(
//         <text key={`tx${i}`} x={ox + i * unit} y={oy + 15} textAnchor="middle" fontSize={fs} fill={C.light}>{i}</text>
//       );
//       ticks.push(
//         <text key={`ty${i}`} x={ox - 10} y={oy - i * unit + 4} textAnchor="end" fontSize={fs} fill={C.light}>
//           {i > 0 ? `${i}i` : `−${-i}i`}
//         </text>
//       );
//     }
//   }

//   return (
//     <svg
//       ref={svgRef}
//       viewBox={`0 0 ${width} ${height}`}
//       style={{ width: "100%", height: "100%", cursor: onPlaneDrag ? "crosshair" : "default", userSelect: "none", touchAction: "none" }}
//       onMouseDown={handleDown}
//       onMouseMove={handleMove}
//       onTouchStart={handleDown}
//       onTouchMove={handleMove}
//     >
//       <defs>
//         <filter id="dropSoft" x="-10%" y="-10%" width="130%" height="140%">
//           <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor={C.navy} floodOpacity="0.1" />
//         </filter>
//       </defs>

//       {gridLines}

//       <line x1={margin - 8} y1={oy} x2={width - margin + 8} y2={oy} stroke={C.orange} strokeWidth="2" />
//       <text x={width - margin + 10} y={oy - 8} fontSize="12" fontWeight="600" fill={C.orange}>Re</text>

//       <line x1={ox} y1={height - margin + 8} x2={ox} y2={margin - 8} stroke={C.navy} strokeWidth="2" />
//       <text x={ox + 8} y={margin - 4} fontSize="12" fontWeight="600" fill={C.navy}>Im</text>

//       {ticks}

//       <circle cx={ox} cy={oy} r="3" fill={C.text} />
//       <text x={ox - 10} y={oy + 15} fontSize="10" fontWeight="600" fill={C.text}>0</text>

//       {typeof children === "function" ? children({ ox, oy, unit }) : children}
//     </svg>
//   );
// }

// /* ═══════════════════════════════════════════
//    PLANE POINT
   
//    Props:
//      a, b             — complex coordinates
//      ox, oy, unit     — from ComplexPlane render-prop
//      color            — fill color
//      label            — text label string
//      labelOffset      — { dx, dy } pixel offset
//      r                — circle radius
//      ghost            — transparent mode
//    ═══════════════════════════════════════════ */

// export function PlanePoint({
//   a, b, ox, oy, unit,
//   color = C.blue,
//   label = "",
//   labelOffset = { dx: 10, dy: -6 },
//   r = 6,
//   ghost = false,
// }) {
//   const px = ox + a * unit;
//   const py = oy - b * unit;
//   const opacity = ghost ? 0.35 : 1;

//   return (
//     <g>
//       <circle cx={px} cy={py} r={r} fill={color} opacity={opacity} filter={ghost ? undefined : "url(#dropSoft)"} />
//       {label && (
//         <text x={px + labelOffset.dx} y={py + labelOffset.dy} fontSize="13" fontWeight="700" fill={ghost ? color : C.text} opacity={ghost ? 0.55 : 1} fontStyle="italic">
//           {label}
//         </text>
//       )}
//     </g>
//   );
// }

// /* ═══════════════════════════════════════════
//    PLANE PROJECTION
   
//    Props:
//      a, b, ox, oy, unit
//      showHorizontal   — dashed line to imaginary axis
//      showVertical     — dashed line to real axis
//    ═══════════════════════════════════════════ */

// export function PlaneProjection({
//   a, b, ox, oy, unit,
//   showHorizontal = true,
//   showVertical = true,
// }) {
//   const px = ox + a * unit;
//   const py = oy - b * unit;

//   return (
//     <g>
//       {showVertical && b !== 0 && (
//         <line x1={px} y1={py} x2={px} y2={oy} stroke={C.navy} strokeWidth="1" strokeDasharray="4,3" opacity="0.3" />
//       )}
//       {showHorizontal && a !== 0 && (
//         <line x1={px} y1={py} x2={ox} y2={py} stroke={C.orange} strokeWidth="1" strokeDasharray="4,3" opacity="0.3" />
//       )}
//     </g>
//   );
// }

// /* ═══════════════════════════════════════════
//    PLANE TRIANGLE
   
//    Right triangle from origin to (a, b).
//    Orange horizontal leg, navy vertical leg,
//    blue hypotenuse.
   
//    Props:
//      a, b, ox, oy, unit
//      showLabels — render a, b, |z| text
//    ═══════════════════════════════════════════ */

// export function PlaneTriangle({ a, b, ox, oy, unit, showLabels = true }) {
//   if (a === 0 || b === 0) return null;

//   const px = ox + a * unit;
//   const py = oy - b * unit;
//   const modulus = Math.sqrt(a * a + b * b);

//   const sz = 10;
//   const sx = a > 0 ? -sz : sz;
//   const sy = b > 0 ? sz : -sz;

//   const mx = (ox + px) / 2;
//   const my = (oy + py) / 2;
//   const angle = (Math.atan2(oy - py, px - ox) * 180) / Math.PI;

//   return (
//     <g>
//       <line x1={ox} y1={oy} x2={px} y2={oy} stroke={C.orange} strokeWidth="2.5" opacity="0.7" />
//       <line x1={px} y1={oy} x2={px} y2={py} stroke={C.navy} strokeWidth="2.5" opacity="0.7" />
//       <line x1={ox} y1={oy} x2={px} y2={py} stroke={C.blue} strokeWidth="3" opacity="0.85" />
//       <polyline
//         points={`${px + sx},${oy} ${px + sx},${oy + sy} ${px},${oy + sy}`}
//         fill="none" stroke={C.light} strokeWidth="1"
//       />
//       {showLabels && (
//         <>
//           <text x={(ox + px) / 2} y={b > 0 ? oy + 18 : oy - 8} textAnchor="middle" fontSize="13" fontWeight="700" fill={C.orange} fontStyle="italic">
//             a = {formatNum(a)}
//           </text>
//           <text x={a > 0 ? px + 12 : px - 12} y={(oy + py) / 2 + 4} textAnchor={a > 0 ? "start" : "end"} fontSize="13" fontWeight="700" fill={C.navy} fontStyle="italic">
//             b = {formatNum(b)}
//           </text>
//           <text
//             x={mx + (b > 0 ? -14 : 14) * (a > 0 ? 1 : -1)}
//             y={my + (a > 0 ? -8 : 8)}
//             textAnchor="middle" fontSize="13" fontWeight="700" fill={C.blue}
//             transform={`rotate(${-angle}, ${mx}, ${my})`}
//           >
//             |z| = {formatNum(modulus)}
//           </text>
//         </>
//       )}
//     </g>
//   );
// }

// /* ═══════════════════════════════════════════
//    PLANE VECTOR
   
//    Arrow from one complex point to another.
   
//    Props:
//      fromA, fromB   — start coordinates
//      toA, toB       — end coordinates
//      ox, oy, unit
//      color
//      label
//      strokeWidth
//    ═══════════════════════════════════════════ */

// export function PlaneVector({
//   fromA = 0, fromB = 0,
//   toA, toB,
//   ox, oy, unit,
//   color = C.blue,
//   label = "",
//   strokeWidth = 2.5,
// }) {
//   const x1 = ox + fromA * unit;
//   const y1 = oy - fromB * unit;
//   const x2 = ox + toA * unit;
//   const y2 = oy - toB * unit;

//   const dx = x2 - x1;
//   const dy = y2 - y1;
//   const len = Math.sqrt(dx * dx + dy * dy);
//   if (len < 1) return null;

//   const ux = dx / len;
//   const uy = dy / len;
//   const backX = x2 - ux * 10;
//   const backY = y2 - uy * 10;
//   const perpX = -uy * 4;
//   const perpY = ux * 4;
//   const mx = (x1 + x2) / 2;
//   const my = (y1 + y2) / 2;

//   return (
//     <g>
//       <line x1={x1} y1={y1} x2={backX} y2={backY} stroke={color} strokeWidth={strokeWidth} />
//       <polygon
//         points={`${x2},${y2} ${backX + perpX},${backY + perpY} ${backX - perpX},${backY - perpY}`}
//         fill={color}
//       />
//       {label && (
//         <text x={mx + perpX * 3} y={my + perpY * 3} textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>
//           {label}
//         </text>
//       )}
//     </g>
//   );
// }

// /* ═══════════════════════════════════════════
//    RANGE CONTROL
   
//    Props:
//      range           — current value
//      onRangeChange   — (newRange) => void
//      min, max        — bounds (default 5, 10)
//    ═══════════════════════════════════════════ */

// export function RangeControl({ range, onRangeChange, min = 5, max = 10 }) {
//   return (
//     <div style={kit.rangeControl}>
//       <span style={{ fontSize: "12px", color: C.muted, fontWeight: 600 }}>Range ±{range}</span>
//       <div style={kit.rangeButtons}>
//         <button
//           style={{ ...kit.rangeBtn, opacity: range <= min ? 0.35 : 1 }}
//           onClick={() => onRangeChange(Math.max(min, range - 1))}
//           disabled={range <= min}
//         >−</button>
//         <button
//           style={{ ...kit.rangeBtn, opacity: range >= max ? 0.35 : 1 }}
//           onClick={() => onRangeChange(Math.min(max, range + 1))}
//           disabled={range >= max}
//         >+</button>
//       </div>
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════
//    COORD INPUT
   
//    Two number inputs for a and b.
//    Syncs with drag; commits on Enter or blur.
   
//    Props:
//      a, b
//      onAChange, onBChange  — (value) => void
//      range                 — for clamping
//    ═══════════════════════════════════════════ */

// export function CoordInput({ a, b, onAChange, onBChange, range = 5 }) {
//   const [aText, setAText] = useState(String(a));
//   const [bText, setBText] = useState(String(b));
//   const snap = getSnap(range);

//   useEffect(() => { setAText(formatNum(a)); }, [a]);
//   useEffect(() => { setBText(formatNum(b)); }, [b]);

//   const commit = (raw, setter, fallback) => {
//     const parsed = parseFloat(raw);
//     if (!isNaN(parsed)) {
//       setter(clamp(Math.round(parsed / snap) * snap, -range, range));
//     } else {
//       /* revert display to current value */
//       return fallback;
//     }
//   };

//   const commitA = () => {
//     const parsed = parseFloat(aText);
//     if (!isNaN(parsed)) {
//       onAChange(clamp(Math.round(parsed / snap) * snap, -range, range));
//     } else {
//       setAText(formatNum(a));
//     }
//   };

//   const commitB = () => {
//     const parsed = parseFloat(bText);
//     if (!isNaN(parsed)) {
//       onBChange(clamp(Math.round(parsed / snap) * snap, -range, range));
//     } else {
//       setBText(formatNum(b));
//     }
//   };

//   const onKey = (fn) => (e) => { if (e.key === "Enter") fn(); };

//   return (
//     <div style={kit.coordWrap}>
//       <div style={kit.coordRow}>
//         <label style={{ ...kit.coordLabel, color: C.orange }}>a</label>
//         <input
//           type="text" inputMode="decimal"
//           value={aText}
//           onChange={(e) => setAText(e.target.value)}
//           onBlur={commitA}
//           onKeyDown={onKey(commitA)}
//           style={{ ...kit.coordField, borderColor: C.orange }}
//         />
//       </div>
//       <span style={{ color: C.light, fontSize: "18px", fontWeight: 600, alignSelf: "center" }}>+</span>
//       <div style={kit.coordRow}>
//         <label style={{ ...kit.coordLabel, color: C.navy }}>b</label>
//         <input
//           type="text" inputMode="decimal"
//           value={bText}
//           onChange={(e) => setBText(e.target.value)}
//           onBlur={commitB}
//           onKeyDown={onKey(commitB)}
//           style={{ ...kit.coordField, borderColor: C.navy }}
//         />
//       </div>
//       <span style={{ color: C.navy, fontSize: "16px", fontWeight: 700, fontStyle: "italic", alignSelf: "center" }}>i</span>
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════
//    EXPLANATION PANEL
   
//    Props:
//      title
//      lines       — string[]
//      highlight   — "real" | "imaginary" | "zero" | "general"
//    ═══════════════════════════════════════════ */

// export function ExplanationPanel({ title, lines, highlight }) {
//   const accent =
//     highlight === "real" ? C.orange
//     : highlight === "imaginary" ? C.navy
//     : highlight === "zero" ? C.blue
//     : C.blue;

//   return (
//     <div style={kit.panel}>
//       <div style={{ ...kit.panelAccent, backgroundColor: accent }} />
//       <h3 style={{ ...kit.panelTitle, color: accent }}>{title}</h3>
//       {/* {lines.map((line, i) => (
//         <p key={i} style={kit.panelLine}>{line}</p>
//       ))} */}

//       {lines.map((line, i) => (
//   <p key={i} style={kit.panelLine}>{processContent(line)}</p>
//       ))}
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════
//    FORMULA CARD
   
//    Props:
//      label      — header text
//      accent     — border/label color
//      children   — content
//    ═══════════════════════════════════════════ */

// export function FormulaCard({ label, children, accent = C.blue }) {
//   return (
//     <div style={{ ...kit.formulaCard, borderColor: accent }}>
//       {label && <div style={{ ...kit.formulaLabel, color: accent }}>{label}</div>}
//       <div style={kit.formulaBody}>{children}</div>
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════
//    DEFAULT EXPLANATION ENGINE
   
//    (a, b) => { title, lines, highlight }
   
//    Pass as explanationEngine prop to override.
//    ═══════════════════════════════════════════ */

// export function getDefaultExplanation(a, b) {
//   const modulus = Math.sqrt(a * a + b * b);
//   const q = getQuadrant(a, b);

//   if (a === 0 && b === 0) {
//     return {
//       title: "The Origin",
//       lines: [
//         "This is the complex number 0 = 0 + 0i.",
//         "It sits at the intersection of both axes — the only point that is simultaneously real and pure imaginary.",
//         "Its modulus is 0. No other complex number has this property: |z| = 0 if and only if z = 0.",
//       ],
//       highlight: "zero",
//     };
//   }

//   if (b === 0) {
//     const abs = Math.abs(a);
//     return {
//       title: "Purely Real",
//       lines: [
//         `z = ${formatNum(a)} sits directly on the real axis. The imaginary part is zero, so this is an ordinary real number living inside the complex plane.`,
//         `Its modulus |z| = √(${formatNum(a)}² + 0²) = |${formatNum(a)}| = ${formatNum(abs)}.`,
//         "When b = 0, the modulus formula collapses to familiar absolute value. Complex modulus and real absolute value agree completely on the real line.",
//         a < 0
//           ? `The number is negative, but modulus is always non-negative. Squaring ${formatNum(a)} removes the sign: (${formatNum(a)})² = ${formatNum(a * a)}.`
//           : `The conjugate z̄ = ${formatNum(a)} — for real numbers, conjugation changes nothing.`,
//       ],
//       highlight: "real",
//     };
//   }

//   if (a === 0) {
//     const abs = Math.abs(b);
//     return {
//       title: "Pure Imaginary",
//       lines: [
//         `z = ${formatComplex(0, b)} sits on the imaginary axis. The real part is zero — this number is entirely imaginary.`,
//         `Its modulus |z| = √(0² + ${formatNum(b)}²) = |${formatNum(b)}| = ${formatNum(abs)}.`,
//         "When a = 0, the modulus measures how far the point sits above or below the origin on the vertical axis.",
//         `Its conjugate z̄ = ${formatComplex(0, -b)} — reflection across the real axis flips it to the other side.`,
//       ],
//       highlight: "imaginary",
//     };
//   }

//   const absA = Math.abs(a);
//   const absB = Math.abs(b);

//   return {
//     title: `Quadrant ${q}`,
//     lines: [
//       `z = ${formatComplex(a, b)} has real part a = ${formatNum(a)} and imaginary part b = ${formatNum(b)}.`,
//       q === "I"
//         ? "Both components are positive — the point sits in the upper-right quadrant."
//         : q === "II"
//         ? "The real part is negative while the imaginary part is positive — upper-left quadrant."
//         : q === "III"
//         ? "Both components are negative — the point sits in the lower-left quadrant."
//         : "The real part is positive while the imaginary part is negative — lower-right quadrant.",
//       `Its modulus |z| = √(${formatNum(a)}² + ${formatNum(b)}²) = √(${formatNum(a * a)} + ${formatNum(b * b)}) = ${formatNum(modulus)}.`,
//       `The right triangle has a horizontal leg of length ${formatNum(absA)} and a vertical leg of length ${formatNum(absB)}. The hypotenuse — the distance from the origin — is ${formatNum(modulus)}.`,
//       `The conjugate z̄ = ${formatComplex(a, -b)} mirrors this point across the real axis. Same horizontal position, opposite vertical position.`,
//     ],
//     highlight: "general",
//   };
// }

// /* ═══════════════════════════════════════════
//    KIT STYLES (shared across components)
//    ═══════════════════════════════════════════ */

// export const kit = {
//   /* Range control */
//   rangeControl: {
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//   },
//   rangeButtons: {
//     display: "flex",
//     gap: "4px",
//   },
//   rangeBtn: {
//     width: "32px",
//     height: "32px",
//     borderRadius: "8px",
//     border: `1.5px solid ${C.border}`,
//     backgroundColor: C.card,
//     color: C.text,
//     fontSize: "18px",
//     fontWeight: 700,
//     cursor: "pointer",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     lineHeight: 1,
//     padding: 0,
//   },
//   /* Coord input */
//   coordWrap: {
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//   },
//   coordRow: {
//     display: "flex",
//     alignItems: "center",
//     gap: "4px",
//   },
//   coordLabel: {
//     fontSize: "16px",
//     fontWeight: 700,
//     fontStyle: "italic",
//     minWidth: "14px",
//     textAlign: "right",
//   },
//   coordField: {
//     width: "52px",
//     height: "32px",
//     borderRadius: "8px",
//     border: "1.5px solid",
//     backgroundColor: C.bg,
//     color: C.text,
//     fontSize: "14px",
//     fontWeight: 600,
//     textAlign: "center",
//     outline: "none",
//     fontFamily: THEME.font,
//     padding: "0 4px",
//     boxSizing: "border-box",
//   },
//   /* Explanation panel */
//   panel: {
//     backgroundColor: C.card,
//     borderRadius: "14px",
//     border: `1.5px solid ${C.border}`,
//     padding: "18px 20px 16px 20px",
//     position: "relative",
//     overflow: "hidden",
//     boxShadow: "0 2px 8px rgba(16,32,80,0.05)",
//   },
//   panelAccent: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "4px",
//     height: "100%",
//     borderRadius: "14px 0 0 14px",
//   },
//   panelTitle: {
//     fontSize: "16px",
//     fontWeight: 700,
//     margin: "0 0 10px 0",
//     paddingLeft: "8px",
//   },
//   panelLine: {
//     fontSize: "13.5px",
//     lineHeight: "1.55",
//     color: C.muted,
//     margin: "0 0 8px 0",
//     paddingLeft: "8px",
//   },
//   /* Formula card */
//   formulaCard: {
//     flex: 1,
//     backgroundColor: C.card,
//     borderRadius: "10px",
//     border: "1.5px solid",
//     padding: "10px 12px",
//     textAlign: "center",
//     boxShadow: "0 2px 8px rgba(16,32,80,0.05)",
//   },
//   formulaLabel: {
//     fontSize: "10px",
//     fontWeight: 700,
//     letterSpacing: "0.8px",
//     textTransform: "uppercase",
//     marginBottom: "4px",
//   },
//   formulaBody: {
//     fontSize: "16px",
//     fontWeight: 600,
//   },
// };


import { useState, useRef, useCallback, useEffect } from "react";
import { processContent } from "@/app/utils/contentProcessor";

/* ═══════════════════════════════════════════
   THEME
   ═══════════════════════════════════════════ */

export const THEME = {
  colors: {
    bg: "#F5F4F1",
    card: "#ffffff",
    orange: "#B85C2A",
    navy: "#304090",
    blue: "#4098d8",
    text: "#102050",
    muted: "#6080a0",
    light: "#8a9ab0",
    grid: "#d8e8f0",
    border: "#c8dce8",
  },
  font: "'DM Sans', 'Segoe UI', sans-serif",
};

const C = THEME.colors;

/* ═══════════════════════════════════════════
   UTILITIES
   ═══════════════════════════════════════════ */

export function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

export function formatNum(n) {
  if (Number.isInteger(n)) return n.toString();
  return n.toFixed(2).replace(/\.?0+$/, "");
}

export function formatComplex(a, b) {
  if (a === 0 && b === 0) return "0";
  if (b === 0) return formatNum(a);
  if (a === 0) {
    if (b === 1) return "i";
    if (b === -1) return "\u2212i";
    return b < 0 ? `\u2212${formatNum(-b)}i` : `${formatNum(b)}i`;
  }
  const bAbs = Math.abs(b);
  const bStr = bAbs === 1 ? "" : formatNum(bAbs);
  const sign = b > 0 ? " + " : " \u2212 ";
  return `${formatNum(a)}${sign}${bStr}i`;
}

export function getQuadrant(a, b) {
  if (a > 0 && b > 0) return "I";
  if (a < 0 && b > 0) return "II";
  if (a < 0 && b < 0) return "III";
  if (a > 0 && b < 0) return "IV";
  return null;
}

function getTickStep(range) {
  if (range <= 7) return 1;
  return 2;
}

function getSnap(range) {
  if (range <= 7) return 0.5;
  return 1;
}

/* ═══════════════════════════════════════════
   COMPLEX PLANE
   ═══════════════════════════════════════════ */

export function ComplexPlane({
  width = 520,
  height = 480,
  range = 5,
  onPlaneDrag,
  showLabels = true,
  children,
}) {
  const svgRef = useRef(null);
  const dragging = useRef(false);

  const ox = width / 2;
  const oy = height / 2;
  const margin = 28;
  const unit = Math.min(
    (width - margin * 2) / (range * 2),
    (height - margin * 2) / (range * 2)
  );
  const snap = getSnap(range);
  const tickStep = getTickStep(range);

  const toPlane = useCallback(
    (e) => {
      const svg = svgRef.current;
      const rect = svg.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const sx = (clientX - rect.left) * (width / rect.width);
      const sy = (clientY - rect.top) * (height / rect.height);
      let a = Math.round((sx - ox) / unit / snap) * snap;
      let b = Math.round((oy - sy) / unit / snap) * snap;
      a = clamp(a, -range, range);
      b = clamp(b, -range, range);
      return [a, b];
    },
    [width, height, ox, oy, unit, range, snap]
  );

  const handleDown = useCallback(
    (e) => {
      if (!onPlaneDrag) return;
      dragging.current = true;
      onPlaneDrag(...toPlane(e));
      e.preventDefault();
    },
    [onPlaneDrag, toPlane]
  );

  const handleMove = useCallback(
    (e) => {
      if (!dragging.current || !onPlaneDrag) return;
      onPlaneDrag(...toPlane(e));
      e.preventDefault();
    },
    [onPlaneDrag, toPlane]
  );

  const handleUp = useCallback(() => {
    dragging.current = false;
  }, []);

  useEffect(() => {
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchend", handleUp);
    return () => {
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
    };
  }, [handleUp]);

  const gridLines = [];
  for (let i = -range; i <= range; i++) {
    if (i === 0) continue;
    const minor = i % tickStep !== 0;
    gridLines.push(
      <line key={`gv${i}`} x1={ox + i * unit} y1={margin - 4} x2={ox + i * unit} y2={height - margin + 4} stroke={C.grid} strokeWidth={minor ? "0.3" : "0.6"} />
    );
    gridLines.push(
      <line key={`gh${i}`} x1={margin - 4} y1={oy + i * unit} x2={width - margin + 4} y2={oy + i * unit} stroke={C.grid} strokeWidth={minor ? "0.3" : "0.6"} />
    );
  }

  const ticks = [];
  if (showLabels) {
    const fs = range <= 6 ? "10" : range <= 8 ? "9" : "8";
    for (let i = -range; i <= range; i++) {
      if (i === 0 || i % tickStep !== 0) continue;
      ticks.push(
        <text key={`tx${i}`} x={ox + i * unit} y={oy + 15} textAnchor="middle" fontSize={fs} fill={C.light}>{i}</text>
      );
      ticks.push(
        <text key={`ty${i}`} x={ox - 10} y={oy - i * unit + 4} textAnchor="end" fontSize={fs} fill={C.light}>
          {i > 0 ? `${i}i` : `\u2212${-i}i`}
        </text>
      );
    }
  }

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${width} ${height}`}
      style={{ width: "100%", height: "100%", cursor: onPlaneDrag ? "crosshair" : "default", userSelect: "none", touchAction: "none" }}
      onMouseDown={handleDown}
      onMouseMove={handleMove}
      onTouchStart={handleDown}
      onTouchMove={handleMove}
    >
      <defs>
        <filter id="dropSoft" x="-10%" y="-10%" width="130%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor={C.navy} floodOpacity="0.1" />
        </filter>
      </defs>

      {/* Canvas background */}
      <rect width={width} height={height} rx="12" fill="#ECEEF0" />

      {gridLines}

      <line x1={margin - 8} y1={oy} x2={width - margin + 8} y2={oy} stroke={C.orange} strokeWidth="2" />
      <text x={width - margin + 10} y={oy - 8} fontSize="12" fontWeight="600" fill={C.orange}>Re</text>

      <line x1={ox} y1={height - margin + 8} x2={ox} y2={margin - 8} stroke={C.navy} strokeWidth="2" />
      <text x={ox + 8} y={margin - 4} fontSize="12" fontWeight="600" fill={C.navy}>Im</text>

      {ticks}

      <circle cx={ox} cy={oy} r="3" fill={C.text} />
      <text x={ox - 10} y={oy + 15} fontSize="10" fontWeight="600" fill={C.text}>0</text>

      {typeof children === "function" ? children({ ox, oy, unit }) : children}
    </svg>
  );
}

/* ═══════════════════════════════════════════
   PLANE POINT
   ═══════════════════════════════════════════ */

export function PlanePoint({
  a, b, ox, oy, unit,
  color = C.blue,
  label = "",
  labelOffset = { dx: 10, dy: -6 },
  r = 6,
  ghost = false,
}) {
  const px = ox + a * unit;
  const py = oy - b * unit;
  const opacity = ghost ? 0.35 : 1;

  return (
    <g>
      <circle cx={px} cy={py} r={r} fill={color} opacity={opacity} filter={ghost ? undefined : "url(#dropSoft)"} />
      {label && (
        <text x={px + labelOffset.dx} y={py + labelOffset.dy} fontSize="13" fontWeight="700" fill={ghost ? color : C.text} opacity={ghost ? 0.55 : 1} fontStyle="italic">
          {label}
        </text>
      )}
    </g>
  );
}

/* ═══════════════════════════════════════════
   PLANE PROJECTION
   ═══════════════════════════════════════════ */

export function PlaneProjection({
  a, b, ox, oy, unit,
  showHorizontal = true,
  showVertical = true,
}) {
  const px = ox + a * unit;
  const py = oy - b * unit;

  return (
    <g>
      {showVertical && b !== 0 && (
        <line x1={px} y1={py} x2={px} y2={oy} stroke={C.navy} strokeWidth="1" strokeDasharray="4,3" opacity="0.3" />
      )}
      {showHorizontal && a !== 0 && (
        <line x1={px} y1={py} x2={ox} y2={py} stroke={C.orange} strokeWidth="1" strokeDasharray="4,3" opacity="0.3" />
      )}
    </g>
  );
}

/* ═══════════════════════════════════════════
   PLANE TRIANGLE
   ═══════════════════════════════════════════ */

export function PlaneTriangle({ a, b, ox, oy, unit, showLabels = true }) {
  if (a === 0 || b === 0) return null;

  const px = ox + a * unit;
  const py = oy - b * unit;
  const modulus = Math.sqrt(a * a + b * b);

  const sz = 10;
  const sx = a > 0 ? -sz : sz;
  const sy = b > 0 ? sz : -sz;

  const mx = (ox + px) / 2;
  const my = (oy + py) / 2;
  const angle = (Math.atan2(oy - py, px - ox) * 180) / Math.PI;

  return (
    <g>
      <line x1={ox} y1={oy} x2={px} y2={oy} stroke={C.orange} strokeWidth="2.5" opacity="0.7" />
      <line x1={px} y1={oy} x2={px} y2={py} stroke={C.navy} strokeWidth="2.5" opacity="0.7" />
      <line x1={ox} y1={oy} x2={px} y2={py} stroke={C.blue} strokeWidth="3" opacity="0.85" />
      <polyline
        points={`${px + sx},${oy} ${px + sx},${oy + sy} ${px},${oy + sy}`}
        fill="none" stroke={C.light} strokeWidth="1"
      />
      {showLabels && (
        <>
          <text x={(ox + px) / 2} y={b > 0 ? oy + 18 : oy - 8} textAnchor="middle" fontSize="13" fontWeight="700" fill={C.orange} fontStyle="italic">
            a = {formatNum(a)}
          </text>
          <text x={a > 0 ? px + 12 : px - 12} y={(oy + py) / 2 + 4} textAnchor={a > 0 ? "start" : "end"} fontSize="13" fontWeight="700" fill={C.navy} fontStyle="italic">
            b = {formatNum(b)}
          </text>
          <text
            x={mx + (b > 0 ? -14 : 14) * (a > 0 ? 1 : -1)}
            y={my + (a > 0 ? -8 : 8)}
            textAnchor="middle" fontSize="13" fontWeight="700" fill={C.blue}
            transform={`rotate(${-angle}, ${mx}, ${my})`}
          >
            |z| = {formatNum(modulus)}
          </text>
        </>
      )}
    </g>
  );
}

/* ═══════════════════════════════════════════
   PLANE VECTOR
   ═══════════════════════════════════════════ */

export function PlaneVector({
  fromA = 0, fromB = 0,
  toA, toB,
  ox, oy, unit,
  color = C.blue,
  label = "",
  strokeWidth = 2.5,
}) {
  const x1 = ox + fromA * unit;
  const y1 = oy - fromB * unit;
  const x2 = ox + toA * unit;
  const y2 = oy - toB * unit;

  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  if (len < 1) return null;

  const ux = dx / len;
  const uy = dy / len;
  const backX = x2 - ux * 10;
  const backY = y2 - uy * 10;
  const perpX = -uy * 4;
  const perpY = ux * 4;
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;

  return (
    <g>
      <line x1={x1} y1={y1} x2={backX} y2={backY} stroke={color} strokeWidth={strokeWidth} />
      <polygon
        points={`${x2},${y2} ${backX + perpX},${backY + perpY} ${backX - perpX},${backY - perpY}`}
        fill={color}
      />
      {label && (
        <text x={mx + perpX * 3} y={my + perpY * 3} textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>
          {label}
        </text>
      )}
    </g>
  );
}

/* ═══════════════════════════════════════════
   RANGE CONTROL
   ═══════════════════════════════════════════ */

export function RangeControl({ range, onRangeChange, min = 5, max = 10 }) {
  return (
    <div style={kit.rangeControl}>
      <span style={{ fontSize: "12px", color: C.muted, fontWeight: 600 }}>Range &plusmn;{range}</span>
      <div style={kit.rangeButtons}>
        <button
          style={{ ...kit.rangeBtn, opacity: range <= min ? 0.35 : 1 }}
          onClick={() => onRangeChange(Math.max(min, range - 1))}
          disabled={range <= min}
        >&minus;</button>
        <button
          style={{ ...kit.rangeBtn, opacity: range >= max ? 0.35 : 1 }}
          onClick={() => onRangeChange(Math.min(max, range + 1))}
          disabled={range >= max}
        >+</button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   COORD INPUT
   ═══════════════════════════════════════════ */

export function CoordInput({ a, b, onAChange, onBChange, range = 5 }) {
  const [aText, setAText] = useState(String(a));
  const [bText, setBText] = useState(String(b));
  const snap = getSnap(range);

  useEffect(() => { setAText(formatNum(a)); }, [a]);
  useEffect(() => { setBText(formatNum(b)); }, [b]);

  const commitA = () => {
    const parsed = parseFloat(aText);
    if (!isNaN(parsed)) {
      onAChange(clamp(Math.round(parsed / snap) * snap, -range, range));
    } else {
      setAText(formatNum(a));
    }
  };

  const commitB = () => {
    const parsed = parseFloat(bText);
    if (!isNaN(parsed)) {
      onBChange(clamp(Math.round(parsed / snap) * snap, -range, range));
    } else {
      setBText(formatNum(b));
    }
  };

  const onKey = (fn) => (e) => { if (e.key === "Enter") fn(); };

  return (
    <div style={kit.coordWrap}>
      <div style={kit.coordRow}>
        <label style={{ ...kit.coordLabel, color: C.orange }}>a</label>
        <input
          type="text" inputMode="decimal"
          value={aText}
          onChange={(e) => setAText(e.target.value)}
          onBlur={commitA}
          onKeyDown={onKey(commitA)}
          style={{ ...kit.coordField, borderColor: C.orange }}
        />
      </div>
      <span style={{ color: C.light, fontSize: "18px", fontWeight: 600, alignSelf: "center" }}>+</span>
      <div style={kit.coordRow}>
        <label style={{ ...kit.coordLabel, color: C.navy }}>b</label>
        <input
          type="text" inputMode="decimal"
          value={bText}
          onChange={(e) => setBText(e.target.value)}
          onBlur={commitB}
          onKeyDown={onKey(commitB)}
          style={{ ...kit.coordField, borderColor: C.navy }}
        />
      </div>
      <span style={{ color: C.navy, fontSize: "16px", fontWeight: 700, fontStyle: "italic", alignSelf: "center" }}>i</span>
    </div>
  );
}

/* ═══════════════════════════════════════════
   EXPLANATION PANEL
   ═══════════════════════════════════════════ */

export function ExplanationPanel({ title, lines, highlight }) {
  const accent =
    highlight === "real" ? C.orange
    : highlight === "imaginary" ? C.navy
    : highlight === "zero" ? C.blue
    : C.blue;

  return (
    <div style={kit.panel}>
      <div style={{ ...kit.panelAccent, backgroundColor: accent }} />
      <h3 style={{ ...kit.panelTitle, color: accent }}>{title}</h3>
      {lines.map((line, i) => (
        <p key={i} style={kit.panelLine}>{processContent(line)}</p>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════
   FORMULA CARD
   ═══════════════════════════════════════════ */

export function FormulaCard({ label, children, accent = C.blue }) {
  return (
    <div style={{ ...kit.formulaCard, borderColor: accent }}>
      {label && <div style={{ ...kit.formulaLabel, color: accent }}>{label}</div>}
      <div style={kit.formulaBody}>{children}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   DEFAULT EXPLANATION ENGINE
   ═══════════════════════════════════════════ */

export function getDefaultExplanation(a, b) {
  const modulus = Math.sqrt(a * a + b * b);
  const q = getQuadrant(a, b);

  if (a === 0 && b === 0) {
    return {
      title: "The Origin",
      lines: [
        "This is the complex number 0 = 0 + 0i.",
        "It sits at the intersection of both axes \u2014 the only point that is simultaneously real and pure imaginary.",
        "Its modulus is 0. No other complex number has this property: |z| = 0 if and only if z = 0.",
      ],
      highlight: "zero",
    };
  }

  if (b === 0) {
    const abs = Math.abs(a);
    return {
      title: "Purely Real",
      lines: [
        `z = ${formatNum(a)} sits directly on the real axis. The imaginary part is zero, so this is an ordinary real number living inside the complex plane.`,
        `Its modulus |z| = \u221a(${formatNum(a)}\u00b2 + 0\u00b2) = |${formatNum(a)}| = ${formatNum(abs)}.`,
        "When b = 0, the modulus formula collapses to familiar absolute value. Complex modulus and real absolute value agree completely on the real line.",
        a < 0
          ? `The number is negative, but modulus is always non-negative. Squaring ${formatNum(a)} removes the sign: (${formatNum(a)})\u00b2 = ${formatNum(a * a)}.`
          : `The conjugate z\u0305 = ${formatNum(a)} \u2014 for real numbers, conjugation changes nothing.`,
      ],
      highlight: "real",
    };
  }

  if (a === 0) {
    const abs = Math.abs(b);
    return {
      title: "Pure Imaginary",
      lines: [
        `z = ${formatComplex(0, b)} sits on the imaginary axis. The real part is zero \u2014 this number is entirely imaginary.`,
        `Its modulus |z| = \u221a(0\u00b2 + ${formatNum(b)}\u00b2) = |${formatNum(b)}| = ${formatNum(abs)}.`,
        "When a = 0, the modulus measures how far the point sits above or below the origin on the vertical axis.",
        `Its conjugate z\u0305 = ${formatComplex(0, -b)} \u2014 reflection across the real axis flips it to the other side.`,
      ],
      highlight: "imaginary",
    };
  }

  const absA = Math.abs(a);
  const absB = Math.abs(b);

  return {
    title: `Quadrant ${q}`,
    lines: [
      `z = ${formatComplex(a, b)} has real part a = ${formatNum(a)} and imaginary part b = ${formatNum(b)}.`,
      q === "I"
        ? "Both components are positive \u2014 the point sits in the upper-right quadrant."
        : q === "II"
        ? "The real part is negative while the imaginary part is positive \u2014 upper-left quadrant."
        : q === "III"
        ? "Both components are negative \u2014 the point sits in the lower-left quadrant."
        : "The real part is positive while the imaginary part is negative \u2014 lower-right quadrant.",
      `Its modulus |z| = \u221a(${formatNum(a)}\u00b2 + ${formatNum(b)}\u00b2) = \u221a(${formatNum(a * a)} + ${formatNum(b * b)}) = ${formatNum(modulus)}.`,
      `The right triangle has a horizontal leg of length ${formatNum(absA)} and a vertical leg of length ${formatNum(absB)}. The hypotenuse \u2014 the distance from the origin \u2014 is ${formatNum(modulus)}.`,
      `The conjugate z\u0305 = ${formatComplex(a, -b)} mirrors this point across the real axis. Same horizontal position, opposite vertical position.`,
    ],
    highlight: "general",
  };
}

/* ═══════════════════════════════════════════
   KIT STYLES
   ═══════════════════════════════════════════ */

export const kit = {
  rangeControl: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  rangeButtons: {
    display: "flex",
    gap: "4px",
  },
  rangeBtn: {
    width: "32px",
    height: "32px",
    borderRadius: "8px",
    border: `1.5px solid ${C.border}`,
    backgroundColor: C.card,
    color: C.text,
    fontSize: "18px",
    fontWeight: 700,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1,
    padding: 0,
  },
  coordWrap: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  coordRow: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  coordLabel: {
    fontSize: "16px",
    fontWeight: 700,
    fontStyle: "italic",
    minWidth: "14px",
    textAlign: "right",
  },
  coordField: {
    width: "52px",
    height: "32px",
    borderRadius: "8px",
    border: "1.5px solid",
    backgroundColor: C.bg,
    color: C.text,
    fontSize: "14px",
    fontWeight: 600,
    textAlign: "center",
    outline: "none",
    fontFamily: THEME.font,
    padding: "0 4px",
    boxSizing: "border-box",
  },
  panel: {
    backgroundColor: C.card,
    borderRadius: "14px",
    border: `1.5px solid ${C.border}`,
    padding: "18px 20px 16px 20px",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(16,32,80,0.05)",
  },
  panelAccent: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "4px",
    height: "100%",
    borderRadius: "14px 0 0 14px",
  },
  panelTitle: {
    fontSize: "16px",
    fontWeight: 700,
    margin: "0 0 10px 0",
    paddingLeft: "8px",
  },
  panelLine: {
    fontSize: "13.5px",
    lineHeight: "1.55",
    color: C.muted,
    margin: "0 0 8px 0",
    paddingLeft: "8px",
  },
  formulaCard: {
    flex: 1,
    backgroundColor: C.card,
    borderRadius: "10px",
    border: "1.5px solid",
    padding: "10px 12px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(16,32,80,0.05)",
  },
  formulaLabel: {
    fontSize: "10px",
    fontWeight: 700,
    letterSpacing: "0.8px",
    textTransform: "uppercase",
    marginBottom: "4px",
  },
  formulaBody: {
    fontSize: "16px",
    fontWeight: 600,
  },
};