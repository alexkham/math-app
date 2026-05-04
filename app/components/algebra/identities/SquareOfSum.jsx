// import React, { useState, useEffect, useRef } from "react";

// export default function SquareOfSum() {
//   const [stage, setStage] = useState(0);
//   const [subT, setSubT] = useState(0);
//   const [playing, setPlaying] = useState(false);
//   const [speed, setSpeed] = useState(1);

//   const stageRef = useRef(stage);
//   const subTRef = useRef(subT);
//   const playingRef = useRef(false);
//   const speedRef = useRef(1);
//   const animRef = useRef(null);
//   const timerRef = useRef(null);

//   useEffect(() => { stageRef.current = stage; }, [stage]);
//   useEffect(() => { subTRef.current = subT; }, [subT]);
//   useEffect(() => { playingRef.current = playing; }, [playing]);
//   useEffect(() => { speedRef.current = speed; }, [speed]);

//   const PX = 55;
//   const a = 5;
//   const b = 3;
//   const W = 760;
//   const H = 560;
//   const aPx = a * PX;
//   const bPx = b * PX;
//   const totalPx = aPx + bPx;

//   const sqX = (W - totalPx) / 2;
//   const sqY = (H - totalPx) / 2 + 25;

//   // Quadrants (top-left corners)
//   const a2X = sqX,         a2Y = sqY;
//   const abRX = sqX + aPx,  abRY = sqY;
//   const abBX = sqX,        abBY = sqY + aPx;
//   const b2X = sqX + aPx,   b2Y = sqY + aPx;

//   // Colors (mirroring DifferenceOfSquares palette + pink for b²)
//   const BG = "#fafaf7";
//   const A_FILL = "#dde9f7";
//   const A_STROKE = "#2c5d99";
//   const A_TEXT = "#143a66";
//   const AB_FILL = "#fdecd0";
//   const AB_STROKE = "#d4881a";
//   const AB_TEXT = "#7a4a08";
//   const B_FILL = "#f7dde9";
//   const B_STROKE = "#992c5d";
//   const B_TEXT = "#66143a";
//   const DIM = "#444";
//   const BTN_PRIMARY = "#2c5d99";
//   const BTN_SECONDARY = "#6b7a8f";
//   const BTN_NEUTRAL = "#888";

//   // Stage 0 → 1 : split each side into a, b (tick marks + label swap)
//   // Stage 1 → 2 : extend internal split lines across the square
//   // Stage 2 → 3 : color the four regions in order  a²  →  b²  →  ab + ab simultaneously
//   const baseDuration = (fromStage) => {
//     switch (fromStage) {
//       case 0: return 1200;
//       case 1: return 1100;
//       case 2: return 2400;
//       default: return 0;
//     }
//   };
//   const transitionDuration = (fromStage) => baseDuration(fromStage) * speedRef.current;
//   const restDwell = () => 700 * speedRef.current;

//   const stopAll = () => {
//     if (animRef.current) cancelAnimationFrame(animRef.current);
//     if (timerRef.current) clearTimeout(timerRef.current);
//     animRef.current = null;
//     timerRef.current = null;
//   };

//   const animateInCurrentTransition = (targetSubT, onDone) => {
//     stopAll();
//     const from = subTRef.current;
//     const to = targetSubT;
//     if (Math.abs(to - from) < 0.001) { onDone && onDone(); return; }
//     const fromStage = stageRef.current;
//     if (fromStage >= 3) { onDone && onDone(); return; }
//     const fullDur = transitionDuration(fromStage);
//     if (fullDur === 0) {
//       setSubT(to); subTRef.current = to;
//       onDone && onDone();
//       return;
//     }
//     const duration = Math.max(80, fullDur * Math.abs(to - from));
//     const startTime = performance.now();
//     const startVal = from;
//     const stepFn = (now) => {
//       const p = Math.min(1, (now - startTime) / duration);
//       const eased = p < 0.5 ? 2*p*p : 1 - Math.pow(-2*p + 2, 2)/2;
//       const cur = startVal + (to - startVal) * eased;
//       setSubT(cur); subTRef.current = cur;
//       if (p < 1) animRef.current = requestAnimationFrame(stepFn);
//       else { animRef.current = null; onDone && onDone(); }
//     };
//     animRef.current = requestAnimationFrame(stepFn);
//   };

//   const stepForwardOnce = (onDone) => {
//     const curStage = stageRef.current;
//     const curSub = subTRef.current;
//     if (curStage >= 3) { onDone && onDone(false); return; }
//     if (curSub >= 0.999) {
//       setSubT(0); subTRef.current = 0;
//       setStage(curStage + 1); stageRef.current = curStage + 1;
//       requestAnimationFrame(() => stepForwardOnce(onDone));
//       return;
//     }
//     animateInCurrentTransition(1, () => {
//       const ns = stageRef.current + 1;
//       setStage(ns); stageRef.current = ns;
//       setSubT(0); subTRef.current = 0;
//       onDone && onDone(true);
//     });
//   };

//   const stepBackwardOnce = (onDone) => {
//     const curStage = stageRef.current;
//     const curSub = subTRef.current;
//     if (curStage <= 0 && curSub <= 0.001) { onDone && onDone(false); return; }
//     if (curSub <= 0.001) {
//       const ps = curStage - 1;
//       setStage(ps); stageRef.current = ps;
//       setSubT(1); subTRef.current = 1;
//       requestAnimationFrame(() => stepBackwardOnce(onDone));
//       return;
//     }
//     animateInCurrentTransition(0, () => onDone && onDone(true));
//   };

//   const playLoop = () => {
//     if (!playingRef.current) return;
//     const curStage = stageRef.current;
//     const curSub = subTRef.current;
//     if (curStage >= 3 && curSub >= 0.999) { setPlaying(false); playingRef.current = false; return; }
//     if (curSub < 0.999) {
//       animateInCurrentTransition(1, () => {
//         if (!playingRef.current) return;
//         const ns = stageRef.current + 1;
//         if (ns > 3) { setPlaying(false); playingRef.current = false; return; }
//         setStage(ns); stageRef.current = ns;
//         setSubT(0); subTRef.current = 0;
//         timerRef.current = setTimeout(() => {
//           if (playingRef.current) playLoop();
//         }, restDwell());
//       });
//     } else {
//       const ns = stageRef.current + 1;
//       if (ns > 3) { setPlaying(false); playingRef.current = false; return; }
//       setStage(ns); stageRef.current = ns;
//       setSubT(0); subTRef.current = 0;
//       timerRef.current = setTimeout(() => {
//         if (playingRef.current) playLoop();
//       }, restDwell());
//     }
//   };

//   const onPlay = () => {
//     if (stageRef.current >= 3 && subTRef.current < 0.001) {
//       // already at end → restart
//     } else if (stageRef.current >= 3) {
//       stopAll();
//       setStage(0); stageRef.current = 0;
//       setSubT(0); subTRef.current = 0;
//     }
//     setPlaying(true); playingRef.current = true;
//     playLoop();
//   };
//   const onPause = () => {
//     stopAll();
//     setPlaying(false); playingRef.current = false;
//   };
//   const onStepForward = () => {
//     stopAll();
//     setPlaying(false); playingRef.current = false;
//     stepForwardOnce(() => {});
//   };
//   const onStepBack = () => {
//     stopAll();
//     setPlaying(false); playingRef.current = false;
//     stepBackwardOnce(() => {});
//   };
//   const onReset = () => {
//     stopAll();
//     setStage(0); stageRef.current = 0;
//     setSubT(0); subTRef.current = 0;
//     setPlaying(false); playingRef.current = false;
//   };

//   useEffect(() => () => stopAll(), []);

//   const atStart = stage === 0 && subT < 0.001;
//   const atEndOfAll = stage === 3 && subT < 0.001;

//   const Dim = ({ x1, y1, x2, y2, label, offset = 28, side = -1, color = DIM, fontSize = 20, opacity = 1 }) => {
//     if (opacity <= 0.001) return null;
//     const horiz = y1 === y2;
//     let lx1=x1, ly1=y1, lx2=x2, ly2=y2, tx, ty, anchor="middle";
//     if (horiz) {
//       const off = offset * side;
//       ly1 = ly2 = y1 + off;
//       tx = (x1+x2)/2;
//       ty = ly1 + (off > 0 ? 18 : -8);
//     } else {
//       const off = offset * side;
//       lx1 = lx2 = x1 + off;
//       tx = lx1 + (off > 0 ? 8 : -8);
//       ty = (y1+y2)/2 + 6;
//       anchor = off > 0 ? "start" : "end";
//     }
//     return (
//       <g opacity={opacity}>
//         <line x1={lx1} y1={ly1} x2={lx2} y2={ly2} stroke={color} strokeWidth={1.2}/>
//         {horiz ? (<>
//           <line x1={x1} y1={ly1-5} x2={x1} y2={ly1+5} stroke={color} strokeWidth={1.2}/>
//           <line x1={x2} y1={ly2-5} x2={x2} y2={ly2+5} stroke={color} strokeWidth={1.2}/>
//         </>) : (<>
//           <line x1={lx1-5} y1={y1} x2={lx1+5} y2={y1} stroke={color} strokeWidth={1.2}/>
//           <line x1={lx2-5} y1={y2} x2={lx2+5} y2={y2} stroke={color} strokeWidth={1.2}/>
//         </>)}
//         <text x={tx} y={ty} textAnchor={anchor} fill={color} fontSize={fontSize} fontStyle="italic"
//           fontFamily="Georgia, serif">{label}</text>
//       </g>
//     );
//   };

//   const clamp01 = (x) => Math.max(0, Math.min(1, x));

//   const renderScene = () => {
//     const inS0 = stage === 0;
//     const inS1 = stage === 1;
//     const inS2 = stage === 2;
//     const inS3 = stage === 3;

//     // "(a+b)²" centered label inside square  → fades out during stage 0→1
//     const insideLabelOpacity = inS0 ? 1 - subT : 0;
//     // Tick marks + split dim labels  →  fade in during 0→1, full afterwards
//     const splitOpacity = inS0 ? subT : (inS1 || inS2 || inS3) ? 1 : 0;
//     // Combined "a + b" dim  →  always visible; slides outward during 0→1 to make room for the split labels
//     const combinedDimOffset = inS0 ? (32 + 33 * subT) : 65;

//     // Internal vertical/horizontal split lines  →  grow during 1→2
//     const lineProgress = inS1 ? subT : (inS2 || inS3) ? 1 : 0;

//     // Stage 2→3 sub-phases: a² (0–0.30) → rest (0.30–0.35) → b² (0.35–0.65) → rest (0.65–0.70) → ab+ab (0.70–1.00)
//     const stageColorT = inS2 ? subT : (inS3 ? 1 : 0);
//     const a2T  = clamp01(stageColorT / 0.30);
//     const b2T  = clamp01((stageColorT - 0.35) / 0.30);
//     const abT  = clamp01((stageColorT - 0.70) / 0.30);

//     const a2LabelOp = clamp01((a2T - 0.4) / 0.6);
//     const b2LabelOp = clamp01((b2T - 0.4) / 0.6);
//     const abLabelOp = clamp01((abT - 0.4) / 0.6);

//     // Vertical split line: from top tick (sqX+aPx, sqY) growing down
//     const vLineY2 = sqY + lineProgress * totalPx;
//     // Horizontal split line: from left tick (sqX, sqY+aPx) growing right
//     const hLineX2 = sqX + lineProgress * totalPx;

//     return (
//       <g>
//         {/* === Outer (a+b) square — always visible === */}
//         <rect x={sqX} y={sqY} width={totalPx} height={totalPx}
//           fill="none" stroke={A_STROKE} strokeWidth={2.5}/>

//         {/* === Internal split lines (grow during stage 1→2) === */}
//         {lineProgress > 0.001 && (
//           <>
//             <line x1={sqX + aPx} y1={sqY} x2={sqX + aPx} y2={vLineY2}
//               stroke={A_STROKE} strokeWidth={1.5}/>
//             <line x1={sqX} y1={sqY + aPx} x2={hLineX2} y2={sqY + aPx}
//               stroke={A_STROKE} strokeWidth={1.5}/>
//           </>
//         )}

//         {/* === Tick marks at split points (top and left edges) === */}
//         {splitOpacity > 0.001 && (
//           <g opacity={splitOpacity}>
//             {/* Top edge tick */}
//             <line x1={sqX + aPx} y1={sqY - 6} x2={sqX + aPx} y2={sqY + 6}
//               stroke={AB_STROKE} strokeWidth={2.5}/>
//             {/* Left edge tick */}
//             <line x1={sqX - 6} y1={sqY + aPx} x2={sqX + 6} y2={sqY + aPx}
//               stroke={AB_STROKE} strokeWidth={2.5}/>
//           </g>
//         )}

//         {/* === Colored region fills (stage 2→3 onwards) === */}
//         {/* a² */}
//         {a2T > 0.001 && (
//           <g opacity={a2T}>
//             <rect x={a2X} y={a2Y} width={aPx} height={aPx}
//               fill={A_FILL} stroke={A_STROKE} strokeWidth={2}/>
//           </g>
//         )}
//         {a2LabelOp > 0.001 && (
//           <text x={a2X + aPx/2} y={a2Y + aPx/2 + 14} textAnchor="middle"
//             fill={A_TEXT} fontSize={42} fontWeight={500} fontStyle="italic"
//             fontFamily="Georgia, serif" opacity={a2LabelOp}>
//             a²
//           </text>
//         )}

//         {/* b² */}
//         {b2T > 0.001 && (
//           <g opacity={b2T}>
//             <rect x={b2X} y={b2Y} width={bPx} height={bPx}
//               fill={B_FILL} stroke={B_STROKE} strokeWidth={2}/>
//           </g>
//         )}
//         {b2LabelOp > 0.001 && (
//           <text x={b2X + bPx/2} y={b2Y + bPx/2 + 10} textAnchor="middle"
//             fill={B_TEXT} fontSize={28} fontWeight={500} fontStyle="italic"
//             fontFamily="Georgia, serif" opacity={b2LabelOp}>
//             b²
//           </text>
//         )}

//         {/* ab top-right + ab bottom-left — appear simultaneously */}
//         {abT > 0.001 && (
//           <g opacity={abT}>
//             <rect x={abRX} y={abRY} width={bPx} height={aPx}
//               fill={AB_FILL} stroke={AB_STROKE} strokeWidth={2}/>
//             <rect x={abBX} y={abBY} width={aPx} height={bPx}
//               fill={AB_FILL} stroke={AB_STROKE} strokeWidth={2}/>
//           </g>
//         )}
//         {abLabelOp > 0.001 && (
//           <g opacity={abLabelOp}>
//             <text x={abRX + bPx/2} y={abRY + aPx/2 + 10} textAnchor="middle"
//               fill={AB_TEXT} fontSize={26} fontWeight={500} fontStyle="italic"
//               fontFamily="Georgia, serif">
//               ab
//             </text>
//             <text x={abBX + aPx/2} y={abBY + bPx/2 + 10} textAnchor="middle"
//               fill={AB_TEXT} fontSize={26} fontWeight={500} fontStyle="italic"
//               fontFamily="Georgia, serif">
//               ab
//             </text>
//           </g>
//         )}

//         {/* === (a+b)² centered label, only in stage 0 === */}
//         {insideLabelOpacity > 0.001 && (
//           <text x={sqX + totalPx/2} y={sqY + totalPx/2 + 20} textAnchor="middle"
//             fill={A_TEXT} fontSize={56} fontWeight={500} fontStyle="italic"
//             fontFamily="Georgia, serif" opacity={insideLabelOpacity}>
//             (a+b)²
//           </text>
//         )}

//         {/* === Dimensions === */}
//         {/* Combined a+b on top and left — always visible, slides outward during 0→1 */}
//         <Dim x1={sqX} y1={sqY} x2={sqX + totalPx} y2={sqY}
//           label="a + b" offset={combinedDimOffset} side={-1} opacity={1}/>
//         <Dim x1={sqX} y1={sqY} x2={sqX} y2={sqY + totalPx}
//           label="a + b" offset={combinedDimOffset} side={-1} opacity={1}/>

//         {/* Split a, b on top */}
//         <Dim x1={sqX} y1={sqY} x2={sqX + aPx} y2={sqY}
//           label="a" offset={32} side={-1} opacity={splitOpacity}/>
//         <Dim x1={sqX + aPx} y1={sqY} x2={sqX + totalPx} y2={sqY}
//           label="b" offset={32} side={-1} color={AB_STROKE} opacity={splitOpacity}/>

//         {/* Split a, b on left */}
//         <Dim x1={sqX} y1={sqY} x2={sqX} y2={sqY + aPx}
//           label="a" offset={32} side={-1} opacity={splitOpacity}/>
//         <Dim x1={sqX} y1={sqY + aPx} x2={sqX} y2={sqY + totalPx}
//           label="b" offset={32} side={-1} color={AB_STROKE} opacity={splitOpacity}/>
//       </g>
//     );
//   };

//   const stepNumber = stage === 0 ? 1 : stage === 1 ? 2 : stage === 2 ? 3 : 4;
//   const titles = {
//     1: <>
//       We have a square whose side length is <i>a</i> + <i>b</i>, so its area is exactly (<i>a</i>+<i>b</i>)².
//       That&apos;s the quantity we want to understand — our whole goal is to rewrite this area
//       as a sum of simpler pieces.
//     </>,
//     2: <>
//       Mark the side as &quot;<i>a</i> then <i>b</i>&quot; on both the top and the left edge.
//       The total length is unchanged — it&apos;s still <i>a</i> + <i>b</i> — but now we&apos;ve labelled
//       where the split happens. This is the setup that lets us cut the area into pieces
//       whose sizes we can compute.
//     </>,
//     3: <>
//       Drop a vertical line from the top mark and a horizontal line from the left mark.
//       They cut the big square into four rectangles. We haven&apos;t added or removed any area —
//       the total is still (<i>a</i>+<i>b</i>)² — we&apos;ve only re-organised it into four pieces
//       we can measure individually.
//     </>,
//     4: <>
//       Each rectangle&apos;s sides come from the top split and the left split,
//       so their areas are <i>a</i>·<i>a</i> = <i>a</i>², two copies of <i>a</i>·<i>b</i> = <i>ab</i>,
//       and <i>b</i>·<i>b</i> = <i>b</i>². Add them up and you get the identity:
//       (<i>a</i>+<i>b</i>)² = <i>a</i>² + 2<i>ab</i> + <i>b</i>². The same area, written two ways.
//     </>,
//   };

//   const btnStyle = (bg, disabled) => ({
//     background: bg, color: "white", border: "none",
//     padding: "8px 14px", fontSize: 14, fontFamily: "inherit", borderRadius: 4,
//     cursor: disabled ? "not-allowed" : "pointer",
//     opacity: disabled ? 0.4 : 1, minWidth: 44,
//   });

//   return (
//     <div style={{
//       background: BG, color: "#222",
//       fontFamily: "Georgia, 'Times New Roman', serif",
//       padding: 20, minHeight: "100vh", boxSizing: "border-box",
//     }}>
//       <div style={{maxWidth: 1320, margin: "0 auto"}}>
//         <div style={{display: "flex", gap: 28, alignItems: "flex-start", flexWrap: "wrap"}}>

//           {/* LEFT: scene + controls (kept together so step panel growth doesn't push controls) */}
//           <div style={{flex: "1 1 560px", minWidth: 320}}>
//             <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{display: "block", background: BG}}>
//               {renderScene()}
//             </svg>

//             <div style={{display: "flex", gap: 8, justifyContent: "center", marginTop: 16, flexWrap: "wrap", alignItems: "center"}}>
//               <button onClick={onStepBack} title="Step back"
//                 style={btnStyle(BTN_SECONDARY, atStart)} disabled={atStart}>
//                 ◀◀ Back
//               </button>
//               {playing ? (
//                 <button onClick={onPause} title="Pause" style={btnStyle(BTN_PRIMARY, false)}>
//                   ⏸ Pause
//                 </button>
//               ) : (
//                 <button onClick={onPlay} title="Play" style={btnStyle(BTN_PRIMARY, false)}>
//                   ▶ Play
//                 </button>
//               )}
//               <button onClick={onStepForward} title="Step forward"
//                 style={btnStyle(BTN_SECONDARY, atEndOfAll)} disabled={atEndOfAll}>
//                 Forward ▶▶
//               </button>
//               <button onClick={onReset} title="Reset"
//                 style={btnStyle(BTN_NEUTRAL, atStart)} disabled={atStart}>
//                 ↺ Reset
//               </button>

//               <div style={{display: "flex", alignItems: "center", gap: 6, marginLeft: 10}}>
//                 <span style={{fontSize: 13, color: "#666"}}>Speed</span>
//                 <select value={speed} onChange={(e) => setSpeed(Number(e.target.value))}
//                   style={{
//                     fontFamily: "inherit", fontSize: 14, padding: "6px 8px",
//                     border: "1px solid #bbb", borderRadius: 4, background: "white", color: "#222",
//                   }}>
//                   <option value={2}>0.5×</option>
//                   <option value={1.33}>0.75×</option>
//                   <option value={1}>1×</option>
//                   <option value={0.66}>1.5×</option>
//                   <option value={0.5}>2×</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT: explanation stack */}
//           <aside style={{
//             flex: "1 1 460px", minWidth: 360, maxWidth: 560,
//             paddingTop: 8,
//           }}>
//             <div style={{
//               fontSize: 14, color: "#888", textTransform: "uppercase",
//               letterSpacing: 1.2, marginBottom: 14, fontFamily: "system-ui, sans-serif",
//             }}>
//               Steps
//             </div>
//             <ol style={{listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16}}>
//               {[1, 2, 3, 4].map((n) => {
//                 const reached = stepNumber >= n;
//                 const isCurrent = stepNumber === n;
//                 if (!reached) return null;
//                 return (
//                   <li key={n}
//                     style={{
//                       padding: "18px 22px",
//                       borderRadius: 8,
//                       background: isCurrent ? "#eaf1fb" : "#f1f1ee",
//                       borderLeft: `5px solid ${isCurrent ? BTN_PRIMARY : "#cdcdc8"}`,
//                       color: isCurrent ? "#143a66" : "#888",
//                       filter: isCurrent ? "none" : "blur(0.5px)",
//                       opacity: isCurrent ? 1 : 0.55,
//                       transition: "all 0.4s ease",
//                     }}>
//                     <div style={{
//                       fontSize: 13, letterSpacing: 0.6, marginBottom: 6,
//                       fontFamily: "system-ui, sans-serif", fontWeight: 600,
//                       color: isCurrent ? BTN_PRIMARY : "#999",
//                     }}>
//                       Step {n}
//                     </div>
//                     <div style={{fontSize: 19, lineHeight: 1.5}}>
//                       {titles[n]}
//                     </div>
//                   </li>
//                 );
//               })}
//             </ol>
//           </aside>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect, useRef } from "react";

export default function SquareOfSum() {
  const [stage, setStage] = useState(0);
  const [subT, setSubT] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const stageRef = useRef(stage);
  const subTRef = useRef(subT);
  const playingRef = useRef(false);
  const speedRef = useRef(1);
  const animRef = useRef(null);
  const timerRef = useRef(null);

  // Intro animation: empty scene → outline → label → dims
  const [introT, setIntroT] = useState(0);
  const introRafRef = useRef(null);
  const playIntro = () => {
    if (introRafRef.current) cancelAnimationFrame(introRafRef.current);
    setIntroT(0);
    const start = performance.now();
    const dur = 1400;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      setIntroT(p);
      if (p < 1) introRafRef.current = requestAnimationFrame(tick);
      else introRafRef.current = null;
    };
    introRafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => { stageRef.current = stage; }, [stage]);
  useEffect(() => { subTRef.current = subT; }, [subT]);
  useEffect(() => { playingRef.current = playing; }, [playing]);
  useEffect(() => { speedRef.current = speed; }, [speed]);

  const PX = 55;
  const a = 5;
  const b = 3;
  const W = 760;
  const H = 560;
  const aPx = a * PX;
  const bPx = b * PX;
  const totalPx = aPx + bPx;

  const sqX = (W - totalPx) / 2;
  const sqY = (H - totalPx) / 2 + 25;

  // Quadrants (top-left corners)
  const a2X = sqX,         a2Y = sqY;
  const abRX = sqX + aPx,  abRY = sqY;
  const abBX = sqX,        abBY = sqY + aPx;
  const b2X = sqX + aPx,   b2Y = sqY + aPx;

  // Colors (mirroring DifferenceOfSquares palette + pink for b²)
  const BG = "#fafaf7";
  const A_FILL = "#dde9f7";
  const A_STROKE = "#2c5d99";
  const A_TEXT = "#143a66";
  const AB_FILL = "#fdecd0";
  const AB_STROKE = "#d4881a";
  const AB_TEXT = "#7a4a08";
  const B_FILL = "#f7dde9";
  const B_STROKE = "#992c5d";
  const B_TEXT = "#66143a";
  const DIM = "#444";
  const BTN_PRIMARY = "#2c5d99";
  const BTN_SECONDARY = "#6b7a8f";
  const BTN_NEUTRAL = "#888";

  // Stage 0 → 1 : split each side into a, b (tick marks + label swap)
  // Stage 1 → 2 : extend internal split lines across the square
  // Stage 2 → 3 : color the four regions in order  a²  →  b²  →  ab + ab simultaneously
  const baseDuration = (fromStage) => {
    switch (fromStage) {
      case 0: return 1200;
      case 1: return 1100;
      case 2: return 2400;
      default: return 0;
    }
  };
  const transitionDuration = (fromStage) => baseDuration(fromStage) * speedRef.current;
  const restDwell = () => 700 * speedRef.current;

  const stopAll = () => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    if (timerRef.current) clearTimeout(timerRef.current);
    animRef.current = null;
    timerRef.current = null;
  };

  const animateInCurrentTransition = (targetSubT, onDone) => {
    stopAll();
    const from = subTRef.current;
    const to = targetSubT;
    if (Math.abs(to - from) < 0.001) { onDone && onDone(); return; }
    const fromStage = stageRef.current;
    if (fromStage >= 3) { onDone && onDone(); return; }
    const fullDur = transitionDuration(fromStage);
    if (fullDur === 0) {
      setSubT(to); subTRef.current = to;
      onDone && onDone();
      return;
    }
    const duration = Math.max(80, fullDur * Math.abs(to - from));
    const startTime = performance.now();
    const startVal = from;
    const stepFn = (now) => {
      const p = Math.min(1, (now - startTime) / duration);
      const eased = p < 0.5 ? 2*p*p : 1 - Math.pow(-2*p + 2, 2)/2;
      const cur = startVal + (to - startVal) * eased;
      setSubT(cur); subTRef.current = cur;
      if (p < 1) animRef.current = requestAnimationFrame(stepFn);
      else { animRef.current = null; onDone && onDone(); }
    };
    animRef.current = requestAnimationFrame(stepFn);
  };

  const stepForwardOnce = (onDone) => {
    const curStage = stageRef.current;
    const curSub = subTRef.current;
    if (curStage >= 3) { onDone && onDone(false); return; }
    if (curSub >= 0.999) {
      setSubT(0); subTRef.current = 0;
      setStage(curStage + 1); stageRef.current = curStage + 1;
      requestAnimationFrame(() => stepForwardOnce(onDone));
      return;
    }
    animateInCurrentTransition(1, () => {
      const ns = stageRef.current + 1;
      setStage(ns); stageRef.current = ns;
      setSubT(0); subTRef.current = 0;
      onDone && onDone(true);
    });
  };

  const stepBackwardOnce = (onDone) => {
    const curStage = stageRef.current;
    const curSub = subTRef.current;
    if (curStage <= 0 && curSub <= 0.001) { onDone && onDone(false); return; }
    if (curSub <= 0.001) {
      const ps = curStage - 1;
      setStage(ps); stageRef.current = ps;
      setSubT(1); subTRef.current = 1;
      requestAnimationFrame(() => stepBackwardOnce(onDone));
      return;
    }
    animateInCurrentTransition(0, () => onDone && onDone(true));
  };

  const playLoop = () => {
    if (!playingRef.current) return;
    const curStage = stageRef.current;
    const curSub = subTRef.current;
    if (curStage >= 3 && curSub >= 0.999) { setPlaying(false); playingRef.current = false; return; }
    if (curSub < 0.999) {
      animateInCurrentTransition(1, () => {
        if (!playingRef.current) return;
        const ns = stageRef.current + 1;
        if (ns > 3) { setPlaying(false); playingRef.current = false; return; }
        setStage(ns); stageRef.current = ns;
        setSubT(0); subTRef.current = 0;
        timerRef.current = setTimeout(() => {
          if (playingRef.current) playLoop();
        }, restDwell());
      });
    } else {
      const ns = stageRef.current + 1;
      if (ns > 3) { setPlaying(false); playingRef.current = false; return; }
      setStage(ns); stageRef.current = ns;
      setSubT(0); subTRef.current = 0;
      timerRef.current = setTimeout(() => {
        if (playingRef.current) playLoop();
      }, restDwell());
    }
  };

  const onPlay = () => {
    if (stageRef.current >= 3 && subTRef.current < 0.001) {
      // already at end → restart
    } else if (stageRef.current >= 3) {
      stopAll();
      setStage(0); stageRef.current = 0;
      setSubT(0); subTRef.current = 0;
    }
    setPlaying(true); playingRef.current = true;
    playLoop();
  };
  const onPause = () => {
    stopAll();
    setPlaying(false); playingRef.current = false;
  };
  const onStepForward = () => {
    stopAll();
    setPlaying(false); playingRef.current = false;
    stepForwardOnce(() => {});
  };
  const onStepBack = () => {
    stopAll();
    setPlaying(false); playingRef.current = false;
    stepBackwardOnce(() => {});
  };
  const onReset = () => {
    stopAll();
    setStage(0); stageRef.current = 0;
    setSubT(0); subTRef.current = 0;
    setPlaying(false); playingRef.current = false;
    playIntro();
  };

  useEffect(() => {
    playIntro();
    return () => {
      stopAll();
      if (introRafRef.current) cancelAnimationFrame(introRafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const atStart = stage === 0 && subT < 0.001;
  const atEndOfAll = stage === 3 && subT < 0.001;

  const Dim = ({ x1, y1, x2, y2, label, offset = 28, side = -1, color = DIM, fontSize = 20, opacity = 1 }) => {
    if (opacity <= 0.001) return null;
    const horiz = y1 === y2;
    let lx1=x1, ly1=y1, lx2=x2, ly2=y2, tx, ty, anchor="middle";
    if (horiz) {
      const off = offset * side;
      ly1 = ly2 = y1 + off;
      tx = (x1+x2)/2;
      ty = ly1 + (off > 0 ? 18 : -8);
    } else {
      const off = offset * side;
      lx1 = lx2 = x1 + off;
      tx = lx1 + (off > 0 ? 8 : -8);
      ty = (y1+y2)/2 + 6;
      anchor = off > 0 ? "start" : "end";
    }
    return (
      <g opacity={opacity}>
        <line x1={lx1} y1={ly1} x2={lx2} y2={ly2} stroke={color} strokeWidth={1.2}/>
        {horiz ? (<>
          <line x1={x1} y1={ly1-5} x2={x1} y2={ly1+5} stroke={color} strokeWidth={1.2}/>
          <line x1={x2} y1={ly2-5} x2={x2} y2={ly2+5} stroke={color} strokeWidth={1.2}/>
        </>) : (<>
          <line x1={lx1-5} y1={y1} x2={lx1+5} y2={y1} stroke={color} strokeWidth={1.2}/>
          <line x1={lx2-5} y1={y2} x2={lx2+5} y2={y2} stroke={color} strokeWidth={1.2}/>
        </>)}
        <text x={tx} y={ty} textAnchor={anchor} fill={color} fontSize={fontSize} fontStyle="italic"
          fontFamily="Georgia, serif">{label}</text>
      </g>
    );
  };

  const clamp01 = (x) => Math.max(0, Math.min(1, x));

  const renderScene = () => {
    const inS0 = stage === 0;
    const inS1 = stage === 1;
    const inS2 = stage === 2;
    const inS3 = stage === 3;

    // "(a+b)²" centered label inside square  → fades out during stage 0→1
    const insideLabelOpacity = inS0 ? 1 - subT : 0;
    // Tick marks + split dim labels  →  fade in during 0→1, full afterwards
    const splitOpacity = inS0 ? subT : (inS1 || inS2 || inS3) ? 1 : 0;
    // Combined "a + b" dim  →  always visible; slides outward during 0→1 to make room for the split labels
    const combinedDimOffset = inS0 ? (32 + 33 * subT) : 65;

    // Mount-time intro masks (only in stage 0): outline → inside label → dims
    const introOutline = inS0 ? clamp01(introT / 0.4)        : 1;
    const introLabel   = inS0 ? clamp01((introT - 0.4) / 0.3) : 1;
    const introDims    = inS0 ? clamp01((introT - 0.7) / 0.3) : 1;

    // Internal vertical/horizontal split lines  →  grow during 1→2
    const lineProgress = inS1 ? subT : (inS2 || inS3) ? 1 : 0;

    // Stage 2→3 sub-phases: a² (0–0.30) → rest (0.30–0.35) → b² (0.35–0.65) → rest (0.65–0.70) → ab+ab (0.70–1.00)
    const stageColorT = inS2 ? subT : (inS3 ? 1 : 0);
    const a2T  = clamp01(stageColorT / 0.30);
    const b2T  = clamp01((stageColorT - 0.35) / 0.30);
    const abT  = clamp01((stageColorT - 0.70) / 0.30);

    const a2LabelOp = clamp01((a2T - 0.4) / 0.6);
    const b2LabelOp = clamp01((b2T - 0.4) / 0.6);
    const abLabelOp = clamp01((abT - 0.4) / 0.6);

    // Vertical split line: from top tick (sqX+aPx, sqY) growing down
    const vLineY2 = sqY + lineProgress * totalPx;
    // Horizontal split line: from left tick (sqX, sqY+aPx) growing right
    const hLineX2 = sqX + lineProgress * totalPx;

    return (
      <g>
        {/* === Outer (a+b) square — always visible === */}
        <rect x={sqX} y={sqY} width={totalPx} height={totalPx}
          fill="none" stroke={A_STROKE} strokeWidth={2.5} opacity={introOutline}/>

        {/* === Internal split lines (grow during stage 1→2) === */}
        {lineProgress > 0.001 && (
          <>
            <line x1={sqX + aPx} y1={sqY} x2={sqX + aPx} y2={vLineY2}
              stroke={A_STROKE} strokeWidth={1.5}/>
            <line x1={sqX} y1={sqY + aPx} x2={hLineX2} y2={sqY + aPx}
              stroke={A_STROKE} strokeWidth={1.5}/>
          </>
        )}

        {/* === Tick marks at split points (top and left edges) === */}
        {splitOpacity > 0.001 && (
          <g opacity={splitOpacity}>
            {/* Top edge tick */}
            <line x1={sqX + aPx} y1={sqY - 6} x2={sqX + aPx} y2={sqY + 6}
              stroke={AB_STROKE} strokeWidth={2.5}/>
            {/* Left edge tick */}
            <line x1={sqX - 6} y1={sqY + aPx} x2={sqX + 6} y2={sqY + aPx}
              stroke={AB_STROKE} strokeWidth={2.5}/>
          </g>
        )}

        {/* === Colored region fills (stage 2→3 onwards) === */}
        {/* a² */}
        {a2T > 0.001 && (
          <g opacity={a2T}>
            <rect x={a2X} y={a2Y} width={aPx} height={aPx}
              fill={A_FILL} stroke={A_STROKE} strokeWidth={2}/>
          </g>
        )}
        {a2LabelOp > 0.001 && (
          <text x={a2X + aPx/2} y={a2Y + aPx/2 + 14} textAnchor="middle"
            fill={A_TEXT} fontSize={42} fontWeight={500} fontStyle="italic"
            fontFamily="Georgia, serif" opacity={a2LabelOp}>
            a²
          </text>
        )}

        {/* b² */}
        {b2T > 0.001 && (
          <g opacity={b2T}>
            <rect x={b2X} y={b2Y} width={bPx} height={bPx}
              fill={B_FILL} stroke={B_STROKE} strokeWidth={2}/>
          </g>
        )}
        {b2LabelOp > 0.001 && (
          <text x={b2X + bPx/2} y={b2Y + bPx/2 + 10} textAnchor="middle"
            fill={B_TEXT} fontSize={28} fontWeight={500} fontStyle="italic"
            fontFamily="Georgia, serif" opacity={b2LabelOp}>
            b²
          </text>
        )}

        {/* ab top-right + ab bottom-left — appear simultaneously */}
        {abT > 0.001 && (
          <g opacity={abT}>
            <rect x={abRX} y={abRY} width={bPx} height={aPx}
              fill={AB_FILL} stroke={AB_STROKE} strokeWidth={2}/>
            <rect x={abBX} y={abBY} width={aPx} height={bPx}
              fill={AB_FILL} stroke={AB_STROKE} strokeWidth={2}/>
          </g>
        )}
        {abLabelOp > 0.001 && (
          <g opacity={abLabelOp}>
            <text x={abRX + bPx/2} y={abRY + aPx/2 + 10} textAnchor="middle"
              fill={AB_TEXT} fontSize={26} fontWeight={500} fontStyle="italic"
              fontFamily="Georgia, serif">
              ab
            </text>
            <text x={abBX + aPx/2} y={abBY + bPx/2 + 10} textAnchor="middle"
              fill={AB_TEXT} fontSize={26} fontWeight={500} fontStyle="italic"
              fontFamily="Georgia, serif">
              ab
            </text>
          </g>
        )}

        {/* === (a+b)² centered label, only in stage 0 === */}
        {insideLabelOpacity * introLabel > 0.001 && (
          <text x={sqX + totalPx/2} y={sqY + totalPx/2 + 20} textAnchor="middle"
            fill={A_TEXT} fontSize={56} fontWeight={500} fontStyle="italic"
            fontFamily="Georgia, serif" opacity={insideLabelOpacity * introLabel}>
            (a+b)²
          </text>
        )}

        {/* === Dimensions === */}
        {/* Combined a+b on top and left — always visible, slides outward during 0→1 */}
        <Dim x1={sqX} y1={sqY} x2={sqX + totalPx} y2={sqY}
          label="a + b" offset={combinedDimOffset} side={-1} opacity={introDims}/>
        <Dim x1={sqX} y1={sqY} x2={sqX} y2={sqY + totalPx}
          label="a + b" offset={combinedDimOffset} side={-1} opacity={introDims}/>

        {/* Split a, b on top */}
        <Dim x1={sqX} y1={sqY} x2={sqX + aPx} y2={sqY}
          label="a" offset={32} side={-1} opacity={splitOpacity}/>
        <Dim x1={sqX + aPx} y1={sqY} x2={sqX + totalPx} y2={sqY}
          label="b" offset={32} side={-1} color={AB_STROKE} opacity={splitOpacity}/>

        {/* Split a, b on left */}
        <Dim x1={sqX} y1={sqY} x2={sqX} y2={sqY + aPx}
          label="a" offset={32} side={-1} opacity={splitOpacity}/>
        <Dim x1={sqX} y1={sqY + aPx} x2={sqX} y2={sqY + totalPx}
          label="b" offset={32} side={-1} color={AB_STROKE} opacity={splitOpacity}/>
      </g>
    );
  };

  const stepNumber = stage === 0 ? 1 : stage === 1 ? 2 : stage === 2 ? 3 : 4;
  const titles = {
    1: <>
      We have a square whose side length is <i>a</i> + <i>b</i>, so its area is exactly (<i>a</i>+<i>b</i>)².
      That&apos;s the quantity we want to understand — our whole goal is to rewrite this area
      as a sum of simpler pieces.
    </>,
    2: <>
      Mark the side as &quot;<i>a</i> then <i>b</i>&quot; on both the top and the left edge.
      The total length is unchanged — it&apos;s still <i>a</i> + <i>b</i> — but now we&apos;ve labelled
      where the split happens. This is the setup that lets us cut the area into pieces
      whose sizes we can compute.
    </>,
    3: <>
      Drop a vertical line from the top mark and a horizontal line from the left mark.
      They cut the big square into four rectangles. We haven&apos;t added or removed any area —
      the total is still (<i>a</i>+<i>b</i>)² — we&apos;ve only re-organised it into four pieces
      we can measure individually.
    </>,
    4: <>
      Each rectangle&apos;s sides come from the top split and the left split,
      so their areas are <i>a</i>·<i>a</i> = <i>a</i>², two copies of <i>a</i>·<i>b</i> = <i>ab</i>,
      and <i>b</i>·<i>b</i> = <i>b</i>². Add them up and you get the identity:
      (<i>a</i>+<i>b</i>)² = <i>a</i>² + 2<i>ab</i> + <i>b</i>². The same area, written two ways.
    </>,
  };

  const btnStyle = (bg, disabled) => ({
    background: bg, color: "white", border: "none",
    padding: "8px 14px", fontSize: 14, fontFamily: "inherit", borderRadius: 4,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1, minWidth: 44,
  });

  return (
    <div style={{
      background: BG, color: "#222",
      fontFamily: "Georgia, 'Times New Roman', serif",
      padding: 20, minHeight: "100vh", boxSizing: "border-box",
    }}>
      <div style={{maxWidth: 1320, margin: "0 auto"}}>
        <div style={{display: "flex", gap: 28, alignItems: "flex-start", flexWrap: "wrap"}}>

          {/* LEFT: scene + controls (kept together so step panel growth doesn't push controls) */}
          <div style={{flex: "1 1 560px", minWidth: 320}}>
            <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{display: "block", background: BG}}>
              {renderScene()}
            </svg>

            <div style={{display: "flex", gap: 8, justifyContent: "center", marginTop: 16, flexWrap: "wrap", alignItems: "center"}}>
              <button onClick={onStepBack} title="Step back"
                style={btnStyle(BTN_SECONDARY, atStart)} disabled={atStart}>
                ◀◀ Back
              </button>
              {playing ? (
                <button onClick={onPause} title="Pause" style={btnStyle(BTN_PRIMARY, false)}>
                  ⏸ Pause
                </button>
              ) : (
                <button onClick={onPlay} title="Play" style={btnStyle(BTN_PRIMARY, false)}>
                  ▶ Play
                </button>
              )}
              <button onClick={onStepForward} title="Step forward"
                style={btnStyle(BTN_SECONDARY, atEndOfAll)} disabled={atEndOfAll}>
                Forward ▶▶
              </button>
              <button onClick={onReset} title="Reset"
                style={btnStyle(BTN_NEUTRAL, atStart)} disabled={atStart}>
                ↺ Reset
              </button>

              <div style={{display: "flex", alignItems: "center", gap: 6, marginLeft: 10}}>
                <span style={{fontSize: 13, color: "#666"}}>Speed</span>
                <select value={speed} onChange={(e) => setSpeed(Number(e.target.value))}
                  style={{
                    fontFamily: "inherit", fontSize: 14, padding: "6px 8px",
                    border: "1px solid #bbb", borderRadius: 4, background: "white", color: "#222",
                  }}>
                  <option value={2}>0.5×</option>
                  <option value={1.33}>0.75×</option>
                  <option value={1}>1×</option>
                  <option value={0.66}>1.5×</option>
                  <option value={0.5}>2×</option>
                </select>
              </div>
            </div>
          </div>

          {/* RIGHT: explanation stack */}
          <aside style={{
            flex: "1 1 460px", minWidth: 360, maxWidth: 560,
            paddingTop: 8,
          }}>
            <div style={{
              fontSize: 14, color: "#888", textTransform: "uppercase",
              letterSpacing: 1.2, marginBottom: 14, fontFamily: "system-ui, sans-serif",
            }}>
              Steps
            </div>
            <ol style={{listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16}}>
              {[1, 2, 3, 4].map((n) => {
                const reached = stepNumber >= n;
                const isCurrent = stepNumber === n;
                if (!reached) return null;
                return (
                  <li key={n}
                    style={{
                      padding: "18px 22px",
                      borderRadius: 8,
                      background: isCurrent ? "#eaf1fb" : "#f1f1ee",
                      borderLeft: `5px solid ${isCurrent ? BTN_PRIMARY : "#cdcdc8"}`,
                      color: isCurrent ? "#143a66" : "#888",
                      filter: isCurrent ? "none" : "blur(0.5px)",
                      opacity: isCurrent ? 1 : 0.55,
                      transition: "all 0.4s ease",
                    }}>
                    <div style={{
                      fontSize: 13, letterSpacing: 0.6, marginBottom: 6,
                      fontFamily: "system-ui, sans-serif", fontWeight: 600,
                      color: isCurrent ? BTN_PRIMARY : "#999",
                    }}>
                      Step {n}
                    </div>
                    <div style={{fontSize: 19, lineHeight: 1.5}}>
                      {titles[n]}
                    </div>
                  </li>
                );
              })}
            </ol>
          </aside>
        </div>
      </div>
    </div>
  );
}