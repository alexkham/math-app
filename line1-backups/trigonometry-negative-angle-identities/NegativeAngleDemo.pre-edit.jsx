// // // // import React, { useState, useEffect, useRef } from 'react';

// // // // /* ============================================================
// // // //    NegativeAngleDemo — v1

// // // //    Visualizes the negative-angle (a.k.a. "opposite angle") trig
// // // //    identities by placing two points on the unit circle:
// // // //      P  at angle  θ  (above the x-axis)
// // // //      P' at angle −θ  (below the x-axis)

// // // //    The cos leg from O is shared (same x-coordinate); the sin
// // // //    legs go in opposite vertical directions (same magnitude,
// // // //    opposite sign).

// // // //    Default scenario: sin(−θ) = −sin θ
// // // //    Same picture also proves: cos(−θ) = cos θ
// // // //    ============================================================ */

// // // // const COLORS = {
// // // //   deepBlue:    '#4F46E5',
// // // //   midBlue:     '#B45309',
// // // //   red:         '#DC2626',
// // // //   panelBg:     '#f1f5f9',
// // // //   panelBgDeep: '#E2E8F0',
// // // //   borderSoft:  '#cbd5e1',
// // // //   text:        '#1e3a5f',
// // // //   textMuted:   '#64748b',
// // // //   textFaint:   '#94a3b8',
// // // //   borderTer:   'rgba(0,0,0,0.15)',
// // // //   borderSec:   'rgba(0,0,0,0.30)',
// // // //   white:       '#ffffff',
// // // // };

// // // // const FULL_STATE = {
// // // //   showP:            true,
// // // //   showPCoords:      true,
// // // //   showPPrime:       true,
// // // //   showPPrimeCoords: true,
// // // //   showCompare:      true,
// // // //   showMetrics:      true,
// // // // };

// // // // const DEFAULT_SLIDER = {
// // // //   label:       'θ',
// // // //   toDisplay:   (t) => t,
// // // //   fromDisplay: (v) => v,
// // // //   step:        1,
// // // // };

// // // // const DEFAULT_SCENARIO = {
// // // //   identity: {
// // // //     fnName:    'sin',
// // // //     lhs:       '−θ',
// // // //     lhsColor:  'red',
// // // //     lhsFormat: 'paren',
// // // //     rhsParts: [
// // // //       { text: '−',     color: 'text' },
// // // //       { text: 'sin θ', color: 'midBlue' },
// // // //     ],
// // // //   },
// // // //   steps: [
// // // //     {
// // // //       rule: 'Setup',
// // // //       description: 'Place P on the unit circle at angle θ above the x-axis. Drop perpendiculars: the horizontal leg (along the x-axis) has length cos θ, the vertical leg has length sin θ. So P = (cos θ, sin θ).',
// // // //       state: { showP: true, showPCoords: true },
// // // //     },
// // // //     {
// // // //       rule: 'Mirror twin',
// // // //       description: "Place P' at angle −θ — measured clockwise from the x-axis. P' sits directly below P: same horizontal position (so the cos leg is shared), same vertical magnitude, but on the other side of the x-axis.",
// // // //       state: { showP: true, showPCoords: true, showPPrime: true, showPPrimeCoords: true },
// // // //     },
// // // //     {
// // // //       rule: 'Read off the identity',
// // // //       description: "P' = (cos θ, −sin θ) from the picture. But P' is also the point at angle −θ on the unit circle, so P' = (cos(−θ), sin(−θ)). Equating coordinates: cos(−θ) = cos θ and sin(−θ) = −sin θ.",
// // // //       state: { ...FULL_STATE },
// // // //     },
// // // //   ],
// // // //   metricPairs: [
// // // //     { label: 'sin(−θ)', compute: (th) => Math.sin(-th) },
// // // //     { label: '−sin θ',  compute: (th) => -Math.sin(th) },
// // // //   ],
// // // // };

// // // // function colorOf(name) {
// // // //   return COLORS[name] || COLORS.text;
// // // // }

// // // // function FadeGroup({ visible, duration = 400, children }) {
// // // //   return (
// // // //     <g style={{ opacity: visible ? 1 : 0, transition: `opacity ${duration}ms ease` }}>
// // // //       {children}
// // // //     </g>
// // // //   );
// // // // }

// // // // /* ============================================================
// // // //    NegativeAngleCore — pure SVG scene
// // // //    ============================================================ */
// // // // function NegativeAngleCore({
// // // //   theta = 35,
// // // //   showP = true,
// // // //   showPCoords = false,
// // // //   showPPrime = false,
// // // //   showPPrimeCoords = false,
// // // //   showCompare = false,
// // // //   cx = 320, cy = 240, R = 170,
// // // //   viewBox = '0 0 680 480',
// // // // }) {
// // // //   const th = (theta * Math.PI) / 180;
// // // //   const c  = Math.cos(th);
// // // //   const s  = Math.sin(th);

// // // //   const footX = cx + R * c;
// // // //   const Py    = cy - R * s;
// // // //   const PpY   = cy + R * s;

// // // //   const arcR = 40;
// // // //   const arcEndUp = { x: cx + arcR * c, y: cy - arcR * s };
// // // //   const arcEndDn = { x: cx + arcR * c, y: cy + arcR * s };

// // // //   // Right-angle marker size
// // // //   const ra = 9;

// // // //   return (
// // // //     <svg viewBox={viewBox} style={{ display: 'block', width: '100%' }} role="img">
// // // //       <title>Negative angle scene</title>

// // // //       {/* Axes */}
// // // //       <line x1={cx - R - 30} y1={cy} x2={cx + R + 30} y2={cy}
// // // //             stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.45" />
// // // //       <line x1={cx} y1={cy - R - 30} x2={cx} y2={cy + R + 30}
// // // //             stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.45" />

// // // //       {/* Axis labels */}
// // // //       <text x={cx + R + 36} y={cy + 5} fontSize="16.8"
// // // //             fill={COLORS.textMuted} fontStyle="italic">x</text>
// // // //       <text x={cx + 6} y={cy - R - 22} fontSize="16.8"
// // // //             fill={COLORS.textMuted} fontStyle="italic">y</text>

// // // //       {/* Unit circle */}
// // // //       <circle cx={cx} cy={cy} r={R} fill="none"
// // // //               stroke={COLORS.borderSec} strokeWidth="1" />

// // // //       {/* Origin */}
// // // //       <circle cx={cx} cy={cy} r={3} fill={COLORS.text} />
// // // //       <text x={cx - 10} y={cy + 20} textAnchor="end"
// // // //             fontSize="16.8" fill={COLORS.textMuted} fontStyle="italic">O</text>

// // // //       {/* Shared cos leg — appears whenever either point is shown */}
// // // //       <FadeGroup visible={showP || showPPrime}>
// // // //         <line x1={cx} y1={cy} x2={footX} y2={cy}
// // // //               stroke={COLORS.deepBlue} strokeWidth="2.8" strokeLinecap="round" />
// // // //         <text x={(cx + footX) / 2} y={cy + 22} textAnchor="middle"
// // // //               fontSize="16.8" fontStyle="italic" fontWeight="500"
// // // //               fill={COLORS.deepBlue}>cos θ</text>
// // // //       </FadeGroup>

// // // //       {/* ===== P group (above x-axis) ===== */}
// // // //       <FadeGroup visible={showP}>
// // // //         {/* Ray O→P */}
// // // //         <line x1={cx} y1={cy} x2={footX} y2={Py}
// // // //               stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.55" />
// // // //         {/* Vertical sin θ leg */}
// // // //         <line x1={footX} y1={cy} x2={footX} y2={Py}
// // // //               stroke={COLORS.midBlue} strokeWidth="2.8" strokeLinecap="round" />
// // // //         {/* sin θ label (right of the vertical leg) */}
// // // //         <text x={footX + 10} y={(cy + Py) / 2 + 5}
// // // //               fontSize="16.8" fontStyle="italic" fontWeight="500"
// // // //               fill={COLORS.midBlue}>sin θ</text>
// // // //         {/* Right-angle marker (upper-left of foot) */}
// // // //         <polyline points={`${footX - ra},${cy} ${footX - ra},${cy - ra} ${footX},${cy - ra}`}
// // // //                   fill="none" stroke={COLORS.textMuted} strokeWidth="0.8" />
// // // //         {/* Point P */}
// // // //         <circle cx={footX} cy={Py} r={4.5} fill={COLORS.text} />
// // // //         <text x={footX - 10} y={Py - 6} textAnchor="end"
// // // //               fontSize="18" fontWeight="600" fill={COLORS.text}>P</text>
// // // //         {/* θ arc */}
// // // //         <path d={`M ${cx + arcR} ${cy} A ${arcR} ${arcR} 0 0 0 ${arcEndUp.x} ${arcEndUp.y}`}
// // // //               fill="none" stroke={COLORS.red} strokeWidth="1.6" />
// // // //         <text x={cx + arcR + 6} y={cy - 6}
// // // //               fontSize="16.8" fontStyle="italic" fill={COLORS.red}>θ</text>
// // // //       </FadeGroup>

// // // //       {/* P coordinate label */}
// // // //       <FadeGroup visible={showPCoords}>
// // // //         <text x={footX + 14} y={Py - 24} fontSize="15.6" fill={COLORS.text}>
// // // //           P = (<tspan fontStyle="italic" fill={COLORS.deepBlue}>cos θ</tspan>
// // // //           <tspan>, </tspan>
// // // //           <tspan fontStyle="italic" fill={COLORS.midBlue}>sin θ</tspan>)
// // // //         </text>
// // // //       </FadeGroup>

// // // //       {/* ===== P' group (below x-axis) ===== */}
// // // //       <FadeGroup visible={showPPrime}>
// // // //         {/* Ray O→P' */}
// // // //         <line x1={cx} y1={cy} x2={footX} y2={PpY}
// // // //               stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.55" />
// // // //         {/* Vertical −sin θ leg */}
// // // //         <line x1={footX} y1={cy} x2={footX} y2={PpY}
// // // //               stroke={COLORS.midBlue} strokeWidth="2.8" strokeLinecap="round" />
// // // //         {/* −sin θ label */}
// // // //         <text x={footX + 10} y={(cy + PpY) / 2 + 5}
// // // //               fontSize="16.8" fontStyle="italic" fontWeight="500"
// // // //               fill={COLORS.midBlue}>−sin θ</text>
// // // //         {/* Right-angle marker (lower-left of foot) */}
// // // //         <polyline points={`${footX - ra},${cy} ${footX - ra},${cy + ra} ${footX},${cy + ra}`}
// // // //                   fill="none" stroke={COLORS.textMuted} strokeWidth="0.8" />
// // // //         {/* Point P' */}
// // // //         <circle cx={footX} cy={PpY} r={4.5} fill={COLORS.text} />
// // // //         <text x={footX - 10} y={PpY + 18} textAnchor="end"
// // // //               fontSize="18" fontWeight="600" fill={COLORS.text}>P&apos;</text>
// // // //         {/* −θ arc */}
// // // //         <path d={`M ${cx + arcR} ${cy} A ${arcR} ${arcR} 0 0 1 ${arcEndDn.x} ${arcEndDn.y}`}
// // // //               fill="none" stroke={COLORS.red} strokeWidth="1.6" />
// // // //         <text x={cx + arcR + 6} y={cy + 20}
// // // //               fontSize="16.8" fontStyle="italic" fill={COLORS.red}>−θ</text>
// // // //       </FadeGroup>

// // // //       {/* P' coordinate labels */}
// // // //       <FadeGroup visible={showPPrimeCoords}>
// // // //         <text x={footX + 14} y={PpY + 18} fontSize="15.6" fill={COLORS.text}>
// // // //           P&apos; = (<tspan fontStyle="italic" fill={COLORS.deepBlue}>cos θ</tspan>
// // // //           <tspan>, </tspan>
// // // //           <tspan fontStyle="italic" fill={COLORS.midBlue}>−sin θ</tspan>)
// // // //         </text>
// // // //       </FadeGroup>

// // // //       {/* Second-line identification in Compare step */}
// // // //       <FadeGroup visible={showCompare}>
// // // //         <text x={footX + 14} y={PpY + 38} fontSize="14.4"
// // // //               fill={COLORS.textMuted} fontStyle="italic">
// // // //           = (cos(−θ), sin(−θ))
// // // //         </text>
// // // //       </FadeGroup>
// // // //     </svg>
// // // //   );
// // // // }

// // // // /* ============================================================
// // // //    MiniSolutionPanel — step log with clickable jump
// // // //    ============================================================ */
// // // // function MiniSolutionPanel({ steps, stepsTitle = 'Derivation', placeholder, onStepClick }) {
// // // //   const listRef = useRef(null);
// // // //   const activeIndex = steps.length - 1;

// // // //   useEffect(() => {
// // // //     const el = listRef.current;
// // // //     if (!el) return;
// // // //     el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
// // // //   }, [activeIndex]);

// // // //   return (
// // // //     <div>
// // // //       <style>{`
// // // //         @keyframes nad-fade-in {
// // // //           from { opacity: 0; transform: translateY(-4px); }
// // // //           to   { opacity: 1; transform: translateY(0); }
// // // //         }
// // // //         .nad-step-log::-webkit-scrollbar { display: none; width: 0; height: 0; }
// // // //       `}</style>

// // // //       <div style={{
// // // //         fontSize: '0.84rem', textTransform: 'uppercase', letterSpacing: '1.6px',
// // // //         color: COLORS.textMuted, marginBottom: '16px', fontWeight: 600,
// // // //       }}>{stepsTitle}</div>

// // // //       <div
// // // //         ref={listRef}
// // // //         className="nad-step-log"
// // // //         style={{
// // // //           maxHeight: '500px',
// // // //           overflowY: 'auto',
// // // //           scrollbarWidth: 'none',
// // // //           msOverflowStyle: 'none',
// // // //           paddingRight: '2px',
// // // //         }}
// // // //       >
// // // //         {steps.length === 0 && (
// // // //           <div style={{
// // // //             background: COLORS.white,
// // // //             border: `1px dashed ${COLORS.borderSoft}`,
// // // //             borderRadius: '8px', padding: '40px 24px', textAlign: 'center',
// // // //             fontSize: '1.02rem', color: COLORS.textFaint, fontStyle: 'italic',
// // // //             minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center',
// // // //           }}>
// // // //             {placeholder}
// // // //           </div>
// // // //         )}
// // // //         {steps.map((step, i) => {
// // // //           const isActive  = i === activeIndex;
// // // //           const clickable = !!onStepClick;
// // // //           return (
// // // //             <div
// // // //               key={i}
// // // //               role={clickable ? 'button' : undefined}
// // // //               tabIndex={clickable ? 0 : undefined}
// // // //               onClick={clickable ? () => onStepClick(i) : undefined}
// // // //               onKeyDown={clickable ? (e) => {
// // // //                 if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onStepClick(i); }
// // // //               } : undefined}
// // // //               onMouseEnter={clickable && !isActive ? (e) => {
// // // //                 e.currentTarget.style.background = COLORS.white;
// // // //               } : undefined}
// // // //               onMouseLeave={clickable && !isActive ? (e) => {
// // // //                 e.currentTarget.style.background = 'transparent';
// // // //               } : undefined}
// // // //               style={{
// // // //                 background: isActive ? COLORS.white : 'transparent',
// // // //                 border: isActive ? `2px solid ${COLORS.deepBlue}` : `2px solid transparent`,
// // // //                 borderRadius: '8px',
// // // //                 padding: '12px 14px',
// // // //                 marginBottom: '6px',
// // // //                 cursor: clickable ? 'pointer' : 'default',
// // // //                 transition: 'background 0.2s ease, border-color 0.2s ease',
// // // //                 animation: 'nad-fade-in 0.35s ease',
// // // //                 outline: 'none',
// // // //               }}
// // // //             >
// // // //               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
// // // //                 <span style={{
// // // //                   display: 'inline-block', fontSize: '0.864rem', fontWeight: 700,
// // // //                   color: COLORS.white,
// // // //                   background: isActive ? COLORS.deepBlue : COLORS.textFaint,
// // // //                   padding: '3px 9px', borderRadius: '4px', flexShrink: 0,
// // // //                   fontVariantNumeric: 'tabular-nums',
// // // //                   transition: 'background 0.2s ease',
// // // //                 }}>{i + 1}</span>
// // // //                 <span style={{
// // // //                   fontWeight: isActive ? 700 : 500,
// // // //                   fontSize: '1.104rem',
// // // //                   color: isActive ? COLORS.deepBlue : COLORS.textMuted,
// // // //                   transition: 'color 0.2s ease',
// // // //                 }}>{step.rule}</span>
// // // //               </div>
// // // //               <p style={{
// // // //                 fontSize: '0.96rem',
// // // //                 color: isActive ? COLORS.text : COLORS.textMuted,
// // // //                 lineHeight: 1.5, margin: 0, paddingLeft: '42px',
// // // //                 transition: 'color 0.2s ease',
// // // //               }}>{step.description}</p>
// // // //             </div>
// // // //           );
// // // //         })}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // function IdentityBar({ identity }) {
// // // //   if (!identity) return null;
// // // //   const { fnName = 'sin', lhs, lhsColor = 'red', lhsFormat = 'paren', rhsParts = [] } = identity;
// // // //   return (
// // // //     <div style={{
// // // //       fontSize: '1.26rem', padding: '14px 18px',
// // // //       background: COLORS.panelBg,
// // // //       border: `1px solid ${COLORS.borderSoft}`,
// // // //       borderRadius: '10px', textAlign: 'center', marginBottom: '12px',
// // // //       fontFamily: 'Georgia, serif', color: COLORS.text,
// // // //     }}>
// // // //       {lhsFormat === 'exponent' && (
// // // //         <>
// // // //           <em>{fnName}</em>
// // // //           <sup style={{ fontSize: '0.7em' }}>2</sup>
// // // //           <span style={{ color: colorOf(lhsColor), fontWeight: 500 }}>{lhs}</span>
// // // //         </>
// // // //       )}
// // // //       {lhsFormat === 'plain' && (
// // // //         <>
// // // //           <em>{fnName}</em>{' '}
// // // //           <span style={{ color: colorOf(lhsColor), fontWeight: 500 }}>{lhs}</span>
// // // //         </>
// // // //       )}
// // // //       {lhsFormat === 'paren' && (
// // // //         <>
// // // //           <em>{fnName}</em>(
// // // //           <span style={{ color: colorOf(lhsColor), fontWeight: 500 }}>{lhs}</span>)
// // // //         </>
// // // //       )}
// // // //       {' '}={' '}
// // // //       {rhsParts.map((part, i) => (
// // // //         <span key={i} style={{
// // // //           color: colorOf(part.color),
// // // //           fontStyle: part.color !== 'text' ? 'italic' : 'normal',
// // // //         }}>{part.text}</span>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // }

// // // // function ControlButton({ onClick, disabled, children, title, primary }) {
// // // //   return (
// // // //     <button onClick={onClick} disabled={disabled} title={title} style={{
// // // //       border: `1px solid ${primary ? COLORS.deepBlue : COLORS.borderSoft}`,
// // // //       background: primary ? COLORS.deepBlue : COLORS.white,
// // // //       color: primary ? COLORS.white : COLORS.text,
// // // //       padding: '7px 16px', borderRadius: '6px',
// // // //       fontSize: '1.02rem', fontWeight: 500,
// // // //       cursor: disabled ? 'not-allowed' : 'pointer',
// // // //       opacity: disabled ? 0.4 : 1,
// // // //       fontFamily: 'inherit', minWidth: '62px',
// // // //       transition: 'background 0.15s, opacity 0.15s',
// // // //     }}>{children}</button>
// // // //   );
// // // // }

// // // // function MetricCard({ label, value, visible }) {
// // // //   return (
// // // //     <div style={{
// // // //       background: COLORS.panelBg,
// // // //       border: `1px solid ${COLORS.borderSoft}`,
// // // //       borderRadius: '10px', padding: '0.9rem 1.2rem',
// // // //       opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease',
// // // //     }}>
// // // //       <p style={{
// // // //         fontSize: '0.96rem', color: COLORS.textMuted,
// // // //         margin: '0 0 4px', fontStyle: 'italic',
// // // //       }}>{label}</p>
// // // //       <p style={{
// // // //         fontSize: '1.62rem', fontWeight: 500,
// // // //         fontVariantNumeric: 'tabular-nums',
// // // //         margin: 0, color: COLORS.deepBlue,
// // // //       }}>{value}</p>
// // // //     </div>
// // // //   );
// // // // }

// // // // /* ============================================================
// // // //    Main exported component
// // // //    ============================================================ */
// // // // export default function NegativeAngleDemo({
// // // //   scenario       = {},
// // // //   initialTheta   = 35,
// // // //   theta:           thetaProp,
// // // //   onThetaChange,
// // // //   thetaMin       = 10,
// // // //   thetaMax       = 80,
// // // //   stepDurationMs = 2500,
// // // //   showSlider     = true,
// // // //   maxWidth       = 1100,
// // // //   svgMaxWidth    = 560,
// // // // }) {
// // // //   const mergedScenario = {
// // // //     identity:     scenario.identity     ?? DEFAULT_SCENARIO.identity,
// // // //     steps:        scenario.steps        ?? DEFAULT_SCENARIO.steps,
// // // //     metricPairs:  scenario.metricPairs  ?? DEFAULT_SCENARIO.metricPairs,
// // // //     sliderConfig: { ...DEFAULT_SLIDER,  ...(scenario.sliderConfig || {}) },
// // // //   };

// // // //   const sliderMin = mergedScenario.sliderConfig.min ?? mergedScenario.sliderConfig.toDisplay(thetaMin);
// // // //   const sliderMax = mergedScenario.sliderConfig.max ?? mergedScenario.sliderConfig.toDisplay(thetaMax);

// // // //   const isControlled = thetaProp !== undefined;
// // // //   const [thetaInternal, setThetaInternal] = useState(initialTheta);
// // // //   const theta = isControlled ? thetaProp : thetaInternal;
// // // //   const setTheta = (v) => {
// // // //     if (isControlled) onThetaChange?.(v);
// // // //     else setThetaInternal(v);
// // // //   };

// // // //   const [currentStep, setCurrentStep] = useState(0);
// // // //   const [isPlaying, setIsPlaying]     = useState(false);
// // // //   const [speed, setSpeed]             = useState(1);

// // // //   const totalSteps        = mergedScenario.steps.length;
// // // //   const effectiveDuration = stepDurationMs / speed;

// // // //   useEffect(() => {
// // // //     if (!isPlaying) return;
// // // //     if (currentStep >= totalSteps) { setIsPlaying(false); return; }
// // // //     const id = setTimeout(() => {
// // // //       setCurrentStep(s => Math.min(s + 1, totalSteps));
// // // //     }, effectiveDuration);
// // // //     return () => clearTimeout(id);
// // // //   }, [isPlaying, currentStep, totalSteps, effectiveDuration]);

// // // //   const handlePlayPause = () => {
// // // //     if (currentStep >= totalSteps) { setCurrentStep(0); setIsPlaying(true); }
// // // //     else setIsPlaying(p => !p);
// // // //   };
// // // //   const handleNext   = () => { setIsPlaying(false); setCurrentStep(s => Math.min(s + 1, totalSteps)); };
// // // //   const handlePrev   = () => { setIsPlaying(false); setCurrentStep(s => Math.max(s - 1, 0)); };
// // // //   const handleReset  = () => { setIsPlaying(false); setCurrentStep(0); };
// // // //   const handleJumpTo = (idx) => { setIsPlaying(false); setCurrentStep(idx + 1); };

// // // //   const visibleSteps = mergedScenario.steps.slice(0, currentStep);
// // // //   const activeStep   = currentStep > 0 ? mergedScenario.steps[currentStep - 1] : null;
// // // //   const activeState  = activeStep ? activeStep.state : {};

// // // //   const th        = (theta * Math.PI) / 180;
// // // //   const isAtEnd   = currentStep >= totalSteps;
// // // //   const isAtStart = currentStep === 0;
// // // //   const playLabel = isPlaying ? 'Pause' : (isAtEnd ? 'Replay' : 'Play');

// // // //   const sliderCfg    = mergedScenario.sliderConfig;
// // // //   const sliderValue  = sliderCfg.toDisplay(theta);
// // // //   const handleSlider = (e) => setTheta(sliderCfg.fromDisplay(+e.target.value));

// // // //   return (
// // // //     <div style={{
// // // //       maxWidth: `${maxWidth}px`,
// // // //       margin: '0  auto',
// // // //       background: COLORS.white,
// // // //       border: `1px solid ${COLORS.borderSoft}`,
// // // //       borderRadius: '14px',
// // // //       boxShadow: '0 1px 2px rgba(15, 23, 42, 0.05), 0 10px 28px rgba(15, 23, 42, 0.07)',
// // // //       padding: '22px',
// // // //       fontFamily: 'system-ui, -apple-system, sans-serif',
// // // //       color: COLORS.text,
// // // //     }}>
// // // //       <div style={{ display: 'flex', gap: '20px', width: '100%' }}>

// // // //         <div style={{ flex: '2 1 0', minWidth: 0 }}>
// // // //           <IdentityBar identity={mergedScenario.identity} />

// // // //           {showSlider && (
// // // //             <div style={{
// // // //               display: 'flex', alignItems: 'center', gap: '12px',
// // // //               padding: '0 4px', marginBottom: '12px',
// // // //             }}>
// // // //               <span style={{
// // // //                 fontSize: '1.08rem', color: COLORS.textMuted,
// // // //                 fontStyle: 'italic', minWidth: '16px',
// // // //               }}>{sliderCfg.label}</span>
// // // //               <input
// // // //                 type="range"
// // // //                 min={sliderMin}
// // // //                 max={sliderMax}
// // // //                 step={sliderCfg.step}
// // // //                 value={sliderValue}
// // // //                 onChange={handleSlider}
// // // //                 style={{ flex: 1, accentColor: COLORS.deepBlue }}
// // // //               />
// // // //               <span style={{
// // // //                 fontSize: '1.08rem', fontWeight: 500, color: COLORS.deepBlue,
// // // //                 minWidth: '52px', textAlign: 'right', fontVariantNumeric: 'tabular-nums',
// // // //               }}>{sliderValue}&deg;</span>
// // // //             </div>
// // // //           )}

// // // //           <div style={{
// // // //             background: COLORS.panelBg,
// // // //             border: `1px solid ${COLORS.borderSoft}`,
// // // //             borderRadius: '10px',
// // // //             padding: '8px',
// // // //           }}>
// // // //             <div style={{ maxWidth: `${svgMaxWidth}px`, margin: '0 auto' }}>
// // // //               <NegativeAngleCore
// // // //                 theta={theta}
// // // //                 showP={!!activeState.showP}
// // // //                 showPCoords={!!activeState.showPCoords}
// // // //                 showPPrime={!!activeState.showPPrime}
// // // //                 showPPrimeCoords={!!activeState.showPPrimeCoords}
// // // //                 showCompare={!!activeState.showCompare}
// // // //               />
// // // //             </div>
// // // //           </div>

// // // //           <div style={{
// // // //             display: 'flex', alignItems: 'center', justifyContent: 'center',
// // // //             gap: '8px', marginTop: '12px', padding: '12px 14px',
// // // //             background: COLORS.panelBg,
// // // //             border: `1px solid ${COLORS.borderSoft}`,
// // // //             borderRadius: '10px',
// // // //           }}>
// // // //             <ControlButton onClick={handleReset} disabled={isAtStart && !isPlaying} title="Reset">Reset</ControlButton>
// // // //             <ControlButton onClick={handlePrev} disabled={isAtStart} title="Previous">&lsaquo; Prev</ControlButton>
// // // //             <ControlButton onClick={handlePlayPause} title={isPlaying ? 'Pause' : 'Play'} primary>{playLabel}</ControlButton>
// // // //             <ControlButton onClick={handleNext} disabled={isAtEnd} title="Next">Next &rsaquo;</ControlButton>
// // // //             <select
// // // //               value={speed}
// // // //               onChange={e => setSpeed(+e.target.value)}
// // // //               title="Animation speed"
// // // //               style={{
// // // //                 border: `1px solid ${COLORS.borderSoft}`,
// // // //                 background: COLORS.white,
// // // //                 color: COLORS.text,
// // // //                 padding: '7px 10px', borderRadius: '6px',
// // // //                 fontSize: '0.96rem', fontWeight: 500,
// // // //                 fontFamily: 'inherit', cursor: 'pointer', marginLeft: '6px',
// // // //               }}
// // // //             >
// // // //               <option value={0.5}>0.5&times;</option>
// // // //               <option value={1}>1&times;</option>
// // // //               <option value={1.5}>1.5&times;</option>
// // // //               <option value={2}>2&times;</option>
// // // //             </select>
// // // //             <span style={{
// // // //               marginLeft: '12px', fontSize: '0.936rem',
// // // //               color: COLORS.textFaint, fontVariantNumeric: 'tabular-nums',
// // // //             }}>Step {currentStep} of {totalSteps}</span>
// // // //           </div>

// // // //           {mergedScenario.metricPairs && mergedScenario.metricPairs.length > 0 && (
// // // //             <div style={{
// // // //               display: 'grid',
// // // //               gridTemplateColumns: `repeat(${mergedScenario.metricPairs.length}, 1fr)`,
// // // //               gap: '12px', marginTop: '12px',
// // // //             }}>
// // // //               {mergedScenario.metricPairs.map((m, i) => (
// // // //                 <MetricCard
// // // //                   key={i}
// // // //                   label={m.label}
// // // //                   value={m.compute(th).toFixed(3)}
// // // //                   visible={!!activeState.showMetrics}
// // // //                 />
// // // //               ))}
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         <div style={{
// // // //           flex: '1 1 0', minWidth: 0,
// // // //           background: COLORS.panelBg,
// // // //           border: `1px solid ${COLORS.borderSoft}`,
// // // //           borderRadius: '10px',
// // // //           padding: '18px',
// // // //           minHeight: '520px',
// // // //         }}>
// // // //           <MiniSolutionPanel
// // // //             steps={visibleSteps}
// // // //             stepsTitle="Derivation"
// // // //             placeholder="Press Play to step through the proof."
// // // //             onStepClick={handleJumpTo}
// // // //           />
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }



// // // import React, { useState, useEffect, useRef } from 'react';

// // // /* ============================================================
// // //    NegativeAngleDemo — v3

// // //    Changes from v2:
// // //    - New prop `coordMode` on NegativeAngleCore: 'full' | 'sinOnly' | 'cosOnly'
// // //        'sinOnly' : hide cos leg + "cos θ" label. Coord labels show
// // //                    only the y-component (y = sin θ, y = −sin θ).
// // //                    Compare line = "y = sin(−θ)".
// // //        'cosOnly' : hide vertical sin legs + their labels + right-angle
// // //                    markers. Coord labels show only the x-component
// // //                    (x = cos θ for both P and P'). Compare line =
// // //                    "x = cos(−θ)".
// // //        'full'    : v2 behavior (backward-compat).
// // //    - DEFAULT_SCENARIO now declares coordMode: 'sinOnly' (it's the sin proof).
// // //    - NegativeAngleDemo reads scenario.coordMode and forwards it.
// // //    - Cos-label collision clamp from v2 retained.
// // //    ============================================================ */

// // // const COLORS = {
// // //   deepBlue:    '#4F46E5',
// // //   midBlue:     '#B45309',
// // //   red:         '#DC2626',
// // //   panelBg:     '#f1f5f9',
// // //   panelBgDeep: '#E2E8F0',
// // //   borderSoft:  '#cbd5e1',
// // //   text:        '#1e3a5f',
// // //   textMuted:   '#64748b',
// // //   textFaint:   '#94a3b8',
// // //   borderTer:   'rgba(0,0,0,0.15)',
// // //   borderSec:   'rgba(0,0,0,0.30)',
// // //   white:       '#ffffff',
// // // };

// // // const FULL_STATE = {
// // //   showP:            true,
// // //   showPCoords:      true,
// // //   showPPrime:       true,
// // //   showPPrimeCoords: true,
// // //   showCompare:      true,
// // //   showMetrics:      true,
// // // };

// // // const DEFAULT_SLIDER = {
// // //   label:       'θ',
// // //   toDisplay:   (t) => t,
// // //   fromDisplay: (v) => v,
// // //   step:        1,
// // // };

// // // const DEFAULT_SCENARIO = {
// // //   coordMode: 'sinOnly',
// // //   identity: {
// // //     fnName:    'sin',
// // //     lhs:       '−θ',
// // //     lhsColor:  'red',
// // //     lhsFormat: 'paren',
// // //     rhsParts: [
// // //       { text: '−',     color: 'text' },
// // //       { text: 'sin θ', color: 'midBlue' },
// // //     ],
// // //   },
// // //   steps: [
// // //     {
// // //       rule: 'Setup',
// // //       description: 'Place P on the unit circle at angle θ above the x-axis. The vertical leg from the x-axis up to P has signed length sin θ — this is the y-coordinate of P.',
// // //       state: { showP: true, showPCoords: true },
// // //     },
// // //     {
// // //       rule: 'Mirror twin',
// // //       description: "Place P' at angle −θ — measured clockwise from the x-axis. P' sits directly below P with the same vertical magnitude, but on the other side of the x-axis. Its y-coordinate is −sin θ.",
// // //       state: { showP: true, showPCoords: true, showPPrime: true, showPPrimeCoords: true },
// // //     },
// // //     {
// // //       rule: 'Read off the identity',
// // //       description: "P' is the point at angle −θ on the unit circle, so its y-coordinate IS sin(−θ). From the picture, that y-coordinate is −sin θ. Therefore sin(−θ) = −sin θ.",
// // //       state: { ...FULL_STATE },
// // //     },
// // //   ],
// // //   metricPairs: [
// // //     { label: 'sin(−θ)', compute: (th) => Math.sin(-th) },
// // //     { label: '−sin θ',  compute: (th) => -Math.sin(th) },
// // //   ],
// // // };

// // // function colorOf(name) {
// // //   return COLORS[name] || COLORS.text;
// // // }

// // // function FadeGroup({ visible, duration = 400, children }) {
// // //   return (
// // //     <g style={{ opacity: visible ? 1 : 0, transition: `opacity ${duration}ms ease` }}>
// // //       {children}
// // //     </g>
// // //   );
// // // }

// // // /* ============================================================
// // //    NegativeAngleCore — pure SVG scene
// // //    ============================================================ */
// // // function NegativeAngleCore({
// // //   theta = 35,
// // //   coordMode = 'full',
// // //   showP = true,
// // //   showPCoords = false,
// // //   showPPrime = false,
// // //   showPPrimeCoords = false,
// // //   showCompare = false,
// // //   cx = 320, cy = 240, R = 170,
// // //   viewBox = '0 0 680 480',
// // // }) {
// // //   const th = (theta * Math.PI) / 180;
// // //   const c  = Math.cos(th);
// // //   const s  = Math.sin(th);

// // //   const footX = cx + R * c;
// // //   const Py    = cy - R * s;
// // //   const PpY   = cy + R * s;

// // //   const arcR = 40;
// // //   const arcEndUp = { x: cx + arcR * c, y: cy - arcR * s };
// // //   const arcEndDn = { x: cx + arcR * c, y: cy + arcR * s };

// // //   const ra = 9;

// // //   // Cos-label collision clamp (carried over from v2).
// // //   const cosLabelMinX = cx + arcR + 38;
// // //   const cosLabelX    = Math.max((cx + footX) / 2, cosLabelMinX);

// // //   const showCosLeg  = coordMode !== 'sinOnly';
// // //   const showSinLegs = coordMode !== 'cosOnly';

// // //   // Coord label content per mode.
// // //   const renderPCoord = () => {
// // //     if (coordMode === 'sinOnly') {
// // //       return (
// // //         <text x={footX + 14} y={Py - 24} fontSize="15.6" fill={COLORS.text}>
// // //           P: <tspan fontStyle="italic">y</tspan> = <tspan fontStyle="italic" fill={COLORS.midBlue}>sin θ</tspan>
// // //         </text>
// // //       );
// // //     }
// // //     if (coordMode === 'cosOnly') {
// // //       return (
// // //         <text x={footX + 14} y={Py - 24} fontSize="15.6" fill={COLORS.text}>
// // //           P: <tspan fontStyle="italic">x</tspan> = <tspan fontStyle="italic" fill={COLORS.deepBlue}>cos θ</tspan>
// // //         </text>
// // //       );
// // //     }
// // //     return (
// // //       <text x={footX + 14} y={Py - 24} fontSize="15.6" fill={COLORS.text}>
// // //         P = (<tspan fontStyle="italic" fill={COLORS.deepBlue}>cos θ</tspan>
// // //         <tspan>, </tspan>
// // //         <tspan fontStyle="italic" fill={COLORS.midBlue}>sin θ</tspan>)
// // //       </text>
// // //     );
// // //   };

// // //   const renderPPrimeCoord = () => {
// // //     if (coordMode === 'sinOnly') {
// // //       return (
// // //         <text x={footX + 14} y={PpY + 18} fontSize="15.6" fill={COLORS.text}>
// // //           P&apos;: <tspan fontStyle="italic">y</tspan> = <tspan fontStyle="italic" fill={COLORS.midBlue}>−sin θ</tspan>
// // //         </text>
// // //       );
// // //     }
// // //     if (coordMode === 'cosOnly') {
// // //       return (
// // //         <text x={footX + 14} y={PpY + 18} fontSize="15.6" fill={COLORS.text}>
// // //           P&apos;: <tspan fontStyle="italic">x</tspan> = <tspan fontStyle="italic" fill={COLORS.deepBlue}>cos θ</tspan>
// // //         </text>
// // //       );
// // //     }
// // //     return (
// // //       <text x={footX + 14} y={PpY + 18} fontSize="15.6" fill={COLORS.text}>
// // //         P&apos; = (<tspan fontStyle="italic" fill={COLORS.deepBlue}>cos θ</tspan>
// // //         <tspan>, </tspan>
// // //         <tspan fontStyle="italic" fill={COLORS.midBlue}>−sin θ</tspan>)
// // //       </text>
// // //     );
// // //   };

// // //   const renderCompare = () => {
// // //     if (coordMode === 'sinOnly') {
// // //       return (
// // //         <text x={footX + 14} y={PpY + 38} fontSize="14.4"
// // //               fill={COLORS.textMuted} fontStyle="italic">
// // //           y = sin(−θ)
// // //         </text>
// // //       );
// // //     }
// // //     if (coordMode === 'cosOnly') {
// // //       return (
// // //         <text x={footX + 14} y={PpY + 38} fontSize="14.4"
// // //               fill={COLORS.textMuted} fontStyle="italic">
// // //           x = cos(−θ)
// // //         </text>
// // //       );
// // //     }
// // //     return (
// // //       <text x={footX + 14} y={PpY + 38} fontSize="14.4"
// // //             fill={COLORS.textMuted} fontStyle="italic">
// // //         = (cos(−θ), sin(−θ))
// // //       </text>
// // //     );
// // //   };

// // //   return (
// // //     <svg viewBox={viewBox} style={{ display: 'block', width: '100%' }} role="img">
// // //       <title>Negative angle scene</title>

// // //       {/* Axes */}
// // //       <line x1={cx - R - 30} y1={cy} x2={cx + R + 30} y2={cy}
// // //             stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.45" />
// // //       <line x1={cx} y1={cy - R - 30} x2={cx} y2={cy + R + 30}
// // //             stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.45" />

// // //       {/* Axis labels */}
// // //       <text x={cx + R + 36} y={cy + 5} fontSize="16.8"
// // //             fill={COLORS.textMuted} fontStyle="italic">x</text>
// // //       <text x={cx + 6} y={cy - R - 22} fontSize="16.8"
// // //             fill={COLORS.textMuted} fontStyle="italic">y</text>

// // //       {/* Unit circle */}
// // //       <circle cx={cx} cy={cy} r={R} fill="none"
// // //               stroke={COLORS.borderSec} strokeWidth="1" />

// // //       {/* Origin */}
// // //       <circle cx={cx} cy={cy} r={3} fill={COLORS.text} />
// // //       <text x={cx - 10} y={cy + 20} textAnchor="end"
// // //             fontSize="16.8" fill={COLORS.textMuted} fontStyle="italic">O</text>

// // //       {/* Shared cos leg — only in 'full' or 'cosOnly' */}
// // //       {showCosLeg && (
// // //         <FadeGroup visible={showP || showPPrime}>
// // //           <line x1={cx} y1={cy} x2={footX} y2={cy}
// // //                 stroke={COLORS.deepBlue} strokeWidth="2.8" strokeLinecap="round" />
// // //           <text x={cosLabelX} y={cy + 22} textAnchor="middle"
// // //                 fontSize="16.8" fontStyle="italic" fontWeight="500"
// // //                 fill={COLORS.deepBlue}>cos θ</text>
// // //         </FadeGroup>
// // //       )}

// // //       {/* ===== P group (above x-axis) ===== */}
// // //       <FadeGroup visible={showP}>
// // //         {/* Ray O→P */}
// // //         <line x1={cx} y1={cy} x2={footX} y2={Py}
// // //               stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.55" />
// // //         {/* Vertical sin θ leg — only in 'full' or 'sinOnly' */}
// // //         {showSinLegs && (
// // //           <>
// // //             <line x1={footX} y1={cy} x2={footX} y2={Py}
// // //                   stroke={COLORS.midBlue} strokeWidth="2.8" strokeLinecap="round" />
// // //             <text x={footX + 10} y={(cy + Py) / 2 + 5}
// // //                   fontSize="16.8" fontStyle="italic" fontWeight="500"
// // //                   fill={COLORS.midBlue}>sin θ</text>
// // //             <polyline points={`${footX - ra},${cy} ${footX - ra},${cy - ra} ${footX},${cy - ra}`}
// // //                       fill="none" stroke={COLORS.textMuted} strokeWidth="0.8" />
// // //           </>
// // //         )}
// // //         {/* Point P */}
// // //         <circle cx={footX} cy={Py} r={4.5} fill={COLORS.text} />
// // //         <text x={footX - 10} y={Py - 6} textAnchor="end"
// // //               fontSize="18" fontWeight="600" fill={COLORS.text}>P</text>
// // //         {/* θ arc */}
// // //         <path d={`M ${cx + arcR} ${cy} A ${arcR} ${arcR} 0 0 0 ${arcEndUp.x} ${arcEndUp.y}`}
// // //               fill="none" stroke={COLORS.red} strokeWidth="1.6" />
// // //         <text x={cx + arcR + 6} y={cy - 6}
// // //               fontSize="16.8" fontStyle="italic" fill={COLORS.red}>θ</text>
// // //       </FadeGroup>

// // //       {/* P coordinate label */}
// // //       <FadeGroup visible={showPCoords}>
// // //         {renderPCoord()}
// // //       </FadeGroup>

// // //       {/* ===== P' group (below x-axis) ===== */}
// // //       <FadeGroup visible={showPPrime}>
// // //         {/* Ray O→P' */}
// // //         <line x1={cx} y1={cy} x2={footX} y2={PpY}
// // //               stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.55" />
// // //         {/* Vertical −sin θ leg — only in 'full' or 'sinOnly' */}
// // //         {showSinLegs && (
// // //           <>
// // //             <line x1={footX} y1={cy} x2={footX} y2={PpY}
// // //                   stroke={COLORS.midBlue} strokeWidth="2.8" strokeLinecap="round" />
// // //             <text x={footX + 10} y={(cy + PpY) / 2 + 5}
// // //                   fontSize="16.8" fontStyle="italic" fontWeight="500"
// // //                   fill={COLORS.midBlue}>−sin θ</text>
// // //             <polyline points={`${footX - ra},${cy} ${footX - ra},${cy + ra} ${footX},${cy + ra}`}
// // //                       fill="none" stroke={COLORS.textMuted} strokeWidth="0.8" />
// // //           </>
// // //         )}
// // //         {/* Point P' */}
// // //         <circle cx={footX} cy={PpY} r={4.5} fill={COLORS.text} />
// // //         <text x={footX - 10} y={PpY + 18} textAnchor="end"
// // //               fontSize="18" fontWeight="600" fill={COLORS.text}>P&apos;</text>
// // //         {/* −θ arc */}
// // //         <path d={`M ${cx + arcR} ${cy} A ${arcR} ${arcR} 0 0 1 ${arcEndDn.x} ${arcEndDn.y}`}
// // //               fill="none" stroke={COLORS.red} strokeWidth="1.6" />
// // //         <text x={cx + arcR + 6} y={cy + 20}
// // //               fontSize="16.8" fontStyle="italic" fill={COLORS.red}>−θ</text>
// // //       </FadeGroup>

// // //       {/* P' coordinate label */}
// // //       <FadeGroup visible={showPPrimeCoords}>
// // //         {renderPPrimeCoord()}
// // //       </FadeGroup>

// // //       {/* Compare-step second line */}
// // //       <FadeGroup visible={showCompare}>
// // //         {renderCompare()}
// // //       </FadeGroup>
// // //     </svg>
// // //   );
// // // }

// // // /* ============================================================
// // //    MiniSolutionPanel — step log with clickable jump
// // //    ============================================================ */
// // // function MiniSolutionPanel({ steps, stepsTitle = 'Derivation', placeholder, onStepClick }) {
// // //   const listRef = useRef(null);
// // //   const activeIndex = steps.length - 1;

// // //   useEffect(() => {
// // //     const el = listRef.current;
// // //     if (!el) return;
// // //     el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
// // //   }, [activeIndex]);

// // //   return (
// // //     <div>
// // //       <style>{`
// // //         @keyframes nad-fade-in {
// // //           from { opacity: 0; transform: translateY(-4px); }
// // //           to   { opacity: 1; transform: translateY(0); }
// // //         }
// // //         .nad-step-log::-webkit-scrollbar { display: none; width: 0; height: 0; }
// // //       `}</style>

// // //       <div style={{
// // //         fontSize: '0.84rem', textTransform: 'uppercase', letterSpacing: '1.6px',
// // //         color: COLORS.textMuted, marginBottom: '16px', fontWeight: 600,
// // //       }}>{stepsTitle}</div>

// // //       <div
// // //         ref={listRef}
// // //         className="nad-step-log"
// // //         style={{
// // //           maxHeight: '500px',
// // //           overflowY: 'auto',
// // //           scrollbarWidth: 'none',
// // //           msOverflowStyle: 'none',
// // //           paddingRight: '2px',
// // //         }}
// // //       >
// // //         {steps.length === 0 && (
// // //           <div style={{
// // //             background: COLORS.white,
// // //             border: `1px dashed ${COLORS.borderSoft}`,
// // //             borderRadius: '8px', padding: '40px 24px', textAlign: 'center',
// // //             fontSize: '1.02rem', color: COLORS.textFaint, fontStyle: 'italic',
// // //             minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center',
// // //           }}>
// // //             {placeholder}
// // //           </div>
// // //         )}
// // //         {steps.map((step, i) => {
// // //           const isActive  = i === activeIndex;
// // //           const clickable = !!onStepClick;
// // //           return (
// // //             <div
// // //               key={i}
// // //               role={clickable ? 'button' : undefined}
// // //               tabIndex={clickable ? 0 : undefined}
// // //               onClick={clickable ? () => onStepClick(i) : undefined}
// // //               onKeyDown={clickable ? (e) => {
// // //                 if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onStepClick(i); }
// // //               } : undefined}
// // //               onMouseEnter={clickable && !isActive ? (e) => {
// // //                 e.currentTarget.style.background = COLORS.white;
// // //               } : undefined}
// // //               onMouseLeave={clickable && !isActive ? (e) => {
// // //                 e.currentTarget.style.background = 'transparent';
// // //               } : undefined}
// // //               style={{
// // //                 background: isActive ? COLORS.white : 'transparent',
// // //                 border: isActive ? `2px solid ${COLORS.deepBlue}` : `2px solid transparent`,
// // //                 borderRadius: '8px',
// // //                 padding: '12px 14px',
// // //                 marginBottom: '6px',
// // //                 cursor: clickable ? 'pointer' : 'default',
// // //                 transition: 'background 0.2s ease, border-color 0.2s ease',
// // //                 animation: 'nad-fade-in 0.35s ease',
// // //                 outline: 'none',
// // //               }}
// // //             >
// // //               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
// // //                 <span style={{
// // //                   display: 'inline-block', fontSize: '0.864rem', fontWeight: 700,
// // //                   color: COLORS.white,
// // //                   background: isActive ? COLORS.deepBlue : COLORS.textFaint,
// // //                   padding: '3px 9px', borderRadius: '4px', flexShrink: 0,
// // //                   fontVariantNumeric: 'tabular-nums',
// // //                   transition: 'background 0.2s ease',
// // //                 }}>{i + 1}</span>
// // //                 <span style={{
// // //                   fontWeight: isActive ? 700 : 500,
// // //                   fontSize: '1.104rem',
// // //                   color: isActive ? COLORS.deepBlue : COLORS.textMuted,
// // //                   transition: 'color 0.2s ease',
// // //                 }}>{step.rule}</span>
// // //               </div>
// // //               <p style={{
// // //                 fontSize: '0.96rem',
// // //                 color: isActive ? COLORS.text : COLORS.textMuted,
// // //                 lineHeight: 1.5, margin: 0, paddingLeft: '42px',
// // //                 transition: 'color 0.2s ease',
// // //               }}>{step.description}</p>
// // //             </div>
// // //           );
// // //         })}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function IdentityBar({ identity }) {
// // //   if (!identity) return null;
// // //   const { fnName = 'sin', lhs, lhsColor = 'red', lhsFormat = 'paren', rhsParts = [] } = identity;
// // //   return (
// // //     <div style={{
// // //       fontSize: '1.26rem', padding: '14px 18px',
// // //       background: COLORS.panelBg,
// // //       border: `1px solid ${COLORS.borderSoft}`,
// // //       borderRadius: '10px', textAlign: 'center', marginBottom: '12px',
// // //       fontFamily: 'Georgia, serif', color: COLORS.text,
// // //     }}>
// // //       {lhsFormat === 'exponent' && (
// // //         <>
// // //           <em>{fnName}</em>
// // //           <sup style={{ fontSize: '0.7em' }}>2</sup>
// // //           <span style={{ color: colorOf(lhsColor), fontWeight: 500 }}>{lhs}</span>
// // //         </>
// // //       )}
// // //       {lhsFormat === 'plain' && (
// // //         <>
// // //           <em>{fnName}</em>{' '}
// // //           <span style={{ color: colorOf(lhsColor), fontWeight: 500 }}>{lhs}</span>
// // //         </>
// // //       )}
// // //       {lhsFormat === 'paren' && (
// // //         <>
// // //           <em>{fnName}</em>(
// // //           <span style={{ color: colorOf(lhsColor), fontWeight: 500 }}>{lhs}</span>)
// // //         </>
// // //       )}
// // //       {' '}={' '}
// // //       {rhsParts.map((part, i) => (
// // //         <span key={i} style={{
// // //           color: colorOf(part.color),
// // //           fontStyle: part.color !== 'text' ? 'italic' : 'normal',
// // //         }}>{part.text}</span>
// // //       ))}
// // //     </div>
// // //   );
// // // }

// // // function ControlButton({ onClick, disabled, children, title, primary }) {
// // //   return (
// // //     <button onClick={onClick} disabled={disabled} title={title} style={{
// // //       border: `1px solid ${primary ? COLORS.deepBlue : COLORS.borderSoft}`,
// // //       background: primary ? COLORS.deepBlue : COLORS.white,
// // //       color: primary ? COLORS.white : COLORS.text,
// // //       padding: '7px 16px', borderRadius: '6px',
// // //       fontSize: '1.02rem', fontWeight: 500,
// // //       cursor: disabled ? 'not-allowed' : 'pointer',
// // //       opacity: disabled ? 0.4 : 1,
// // //       fontFamily: 'inherit', minWidth: '62px',
// // //       transition: 'background 0.15s, opacity 0.15s',
// // //     }}>{children}</button>
// // //   );
// // // }

// // // function MetricCard({ label, value, visible }) {
// // //   return (
// // //     <div style={{
// // //       background: COLORS.panelBg,
// // //       border: `1px solid ${COLORS.borderSoft}`,
// // //       borderRadius: '10px', padding: '0.9rem 1.2rem',
// // //       opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease',
// // //     }}>
// // //       <p style={{
// // //         fontSize: '0.96rem', color: COLORS.textMuted,
// // //         margin: '0 0 4px', fontStyle: 'italic',
// // //       }}>{label}</p>
// // //       <p style={{
// // //         fontSize: '1.62rem', fontWeight: 500,
// // //         fontVariantNumeric: 'tabular-nums',
// // //         margin: 0, color: COLORS.deepBlue,
// // //       }}>{value}</p>
// // //     </div>
// // //   );
// // // }

// // // /* ============================================================
// // //    Main exported component
// // //    ============================================================ */
// // // export default function NegativeAngleDemo({
// // //   scenario       = {},
// // //   initialTheta   = 35,
// // //   theta:           thetaProp,
// // //   onThetaChange,
// // //   thetaMin       = 10,
// // //   thetaMax       = 80,
// // //   stepDurationMs = 2500,
// // //   showSlider     = true,
// // //   maxWidth       = 1100,
// // //   svgMaxWidth    = 560,
// // // }) {
// // //   const mergedScenario = {
// // //     coordMode:    scenario.coordMode    ?? DEFAULT_SCENARIO.coordMode,
// // //     identity:     scenario.identity     ?? DEFAULT_SCENARIO.identity,
// // //     steps:        scenario.steps        ?? DEFAULT_SCENARIO.steps,
// // //     metricPairs:  scenario.metricPairs  ?? DEFAULT_SCENARIO.metricPairs,
// // //     sliderConfig: { ...DEFAULT_SLIDER,  ...(scenario.sliderConfig || {}) },
// // //   };

// // //   const sliderMin = mergedScenario.sliderConfig.min ?? mergedScenario.sliderConfig.toDisplay(thetaMin);
// // //   const sliderMax = mergedScenario.sliderConfig.max ?? mergedScenario.sliderConfig.toDisplay(thetaMax);

// // //   const isControlled = thetaProp !== undefined;
// // //   const [thetaInternal, setThetaInternal] = useState(initialTheta);
// // //   const theta = isControlled ? thetaProp : thetaInternal;
// // //   const setTheta = (v) => {
// // //     if (isControlled) onThetaChange?.(v);
// // //     else setThetaInternal(v);
// // //   };

// // //   const [currentStep, setCurrentStep] = useState(0);
// // //   const [isPlaying, setIsPlaying]     = useState(false);
// // //   const [speed, setSpeed]             = useState(1);

// // //   const totalSteps        = mergedScenario.steps.length;
// // //   const effectiveDuration = stepDurationMs / speed;

// // //   useEffect(() => {
// // //     if (!isPlaying) return;
// // //     if (currentStep >= totalSteps) { setIsPlaying(false); return; }
// // //     const id = setTimeout(() => {
// // //       setCurrentStep(s => Math.min(s + 1, totalSteps));
// // //     }, effectiveDuration);
// // //     return () => clearTimeout(id);
// // //   }, [isPlaying, currentStep, totalSteps, effectiveDuration]);

// // //   const handlePlayPause = () => {
// // //     if (currentStep >= totalSteps) { setCurrentStep(0); setIsPlaying(true); }
// // //     else setIsPlaying(p => !p);
// // //   };
// // //   const handleNext   = () => { setIsPlaying(false); setCurrentStep(s => Math.min(s + 1, totalSteps)); };
// // //   const handlePrev   = () => { setIsPlaying(false); setCurrentStep(s => Math.max(s - 1, 0)); };
// // //   const handleReset  = () => { setIsPlaying(false); setCurrentStep(0); };
// // //   const handleJumpTo = (idx) => { setIsPlaying(false); setCurrentStep(idx + 1); };

// // //   const visibleSteps = mergedScenario.steps.slice(0, currentStep);
// // //   const activeStep   = currentStep > 0 ? mergedScenario.steps[currentStep - 1] : null;
// // //   const activeState  = activeStep ? activeStep.state : {};

// // //   const th        = (theta * Math.PI) / 180;
// // //   const isAtEnd   = currentStep >= totalSteps;
// // //   const isAtStart = currentStep === 0;
// // //   const playLabel = isPlaying ? 'Pause' : (isAtEnd ? 'Replay' : 'Play');

// // //   const sliderCfg    = mergedScenario.sliderConfig;
// // //   const sliderValue  = sliderCfg.toDisplay(theta);
// // //   const handleSlider = (e) => setTheta(sliderCfg.fromDisplay(+e.target.value));

// // //   return (
// // //     <div style={{
// // //       maxWidth: `${maxWidth}px`,
// // //       margin: '0  auto',
// // //       background: COLORS.white,
// // //       border: `1px solid ${COLORS.borderSoft}`,
// // //       borderRadius: '14px',
// // //       boxShadow: '0 1px 2px rgba(15, 23, 42, 0.05), 0 10px 28px rgba(15, 23, 42, 0.07)',
// // //       padding: '22px',
// // //       fontFamily: 'system-ui, -apple-system, sans-serif',
// // //       color: COLORS.text,
// // //     }}>
// // //       <div style={{ display: 'flex', gap: '20px', width: '100%' }}>

// // //         <div style={{ flex: '2 1 0', minWidth: 0 }}>
// // //           <IdentityBar identity={mergedScenario.identity} />

// // //           {showSlider && (
// // //             <div style={{
// // //               display: 'flex', alignItems: 'center', gap: '12px',
// // //               padding: '0 4px', marginBottom: '12px',
// // //             }}>
// // //               <span style={{
// // //                 fontSize: '1.08rem', color: COLORS.textMuted,
// // //                 fontStyle: 'italic', minWidth: '16px',
// // //               }}>{sliderCfg.label}</span>
// // //               <input
// // //                 type="range"
// // //                 min={sliderMin}
// // //                 max={sliderMax}
// // //                 step={sliderCfg.step}
// // //                 value={sliderValue}
// // //                 onChange={handleSlider}
// // //                 style={{ flex: 1, accentColor: COLORS.deepBlue }}
// // //               />
// // //               <span style={{
// // //                 fontSize: '1.08rem', fontWeight: 500, color: COLORS.deepBlue,
// // //                 minWidth: '52px', textAlign: 'right', fontVariantNumeric: 'tabular-nums',
// // //               }}>{sliderValue}&deg;</span>
// // //             </div>
// // //           )}

// // //           <div style={{
// // //             background: COLORS.panelBg,
// // //             border: `1px solid ${COLORS.borderSoft}`,
// // //             borderRadius: '10px',
// // //             padding: '8px',
// // //           }}>
// // //             <div style={{ maxWidth: `${svgMaxWidth}px`, margin: '0 auto' }}>
// // //               <NegativeAngleCore
// // //                 theta={theta}
// // //                 coordMode={mergedScenario.coordMode}
// // //                 showP={!!activeState.showP}
// // //                 showPCoords={!!activeState.showPCoords}
// // //                 showPPrime={!!activeState.showPPrime}
// // //                 showPPrimeCoords={!!activeState.showPPrimeCoords}
// // //                 showCompare={!!activeState.showCompare}
// // //               />
// // //             </div>
// // //           </div>

// // //           <div style={{
// // //             display: 'flex', alignItems: 'center', justifyContent: 'center',
// // //             gap: '8px', marginTop: '12px', padding: '12px 14px',
// // //             background: COLORS.panelBg,
// // //             border: `1px solid ${COLORS.borderSoft}`,
// // //             borderRadius: '10px',
// // //           }}>
// // //             <ControlButton onClick={handleReset} disabled={isAtStart && !isPlaying} title="Reset">Reset</ControlButton>
// // //             <ControlButton onClick={handlePrev} disabled={isAtStart} title="Previous">&lsaquo; Prev</ControlButton>
// // //             <ControlButton onClick={handlePlayPause} title={isPlaying ? 'Pause' : 'Play'} primary>{playLabel}</ControlButton>
// // //             <ControlButton onClick={handleNext} disabled={isAtEnd} title="Next">Next &rsaquo;</ControlButton>
// // //             <select
// // //               value={speed}
// // //               onChange={e => setSpeed(+e.target.value)}
// // //               title="Animation speed"
// // //               style={{
// // //                 border: `1px solid ${COLORS.borderSoft}`,
// // //                 background: COLORS.white,
// // //                 color: COLORS.text,
// // //                 padding: '7px 10px', borderRadius: '6px',
// // //                 fontSize: '0.96rem', fontWeight: 500,
// // //                 fontFamily: 'inherit', cursor: 'pointer', marginLeft: '6px',
// // //               }}
// // //             >
// // //               <option value={0.5}>0.5&times;</option>
// // //               <option value={1}>1&times;</option>
// // //               <option value={1.5}>1.5&times;</option>
// // //               <option value={2}>2&times;</option>
// // //             </select>
// // //             <span style={{
// // //               marginLeft: '12px', fontSize: '0.936rem',
// // //               color: COLORS.textFaint, fontVariantNumeric: 'tabular-nums',
// // //             }}>Step {currentStep} of {totalSteps}</span>
// // //           </div>

// // //           {mergedScenario.metricPairs && mergedScenario.metricPairs.length > 0 && (
// // //             <div style={{
// // //               display: 'grid',
// // //               gridTemplateColumns: `repeat(${mergedScenario.metricPairs.length}, 1fr)`,
// // //               gap: '12px', marginTop: '12px',
// // //             }}>
// // //               {mergedScenario.metricPairs.map((m, i) => (
// // //                 <MetricCard
// // //                   key={i}
// // //                   label={m.label}
// // //                   value={m.compute(th).toFixed(3)}
// // //                   visible={!!activeState.showMetrics}
// // //                 />
// // //               ))}
// // //             </div>
// // //           )}
// // //         </div>

// // //         <div style={{
// // //           flex: '1 1 0', minWidth: 0,
// // //           background: COLORS.panelBg,
// // //           border: `1px solid ${COLORS.borderSoft}`,
// // //           borderRadius: '10px',
// // //           padding: '18px',
// // //           minHeight: '520px',
// // //         }}>
// // //           <MiniSolutionPanel
// // //             steps={visibleSteps}
// // //             stepsTitle="Derivation"
// // //             placeholder="Press Play to step through the proof."
// // //             onStepClick={handleJumpTo}
// // //           />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import React, { useState, useEffect, useRef } from 'react';

// // /* ============================================================
// //    NegativeAngleDemo — v3

// //    Changes from v2:
// //    - New prop `coordMode` on NegativeAngleCore: 'full' | 'sinOnly' | 'cosOnly'
// //        'sinOnly' : hide cos leg + "cos θ" label. Coord labels show
// //                    only the y-component (y = sin θ, y = −sin θ).
// //                    Compare line = "y = sin(−θ)".
// //        'cosOnly' : hide vertical sin legs + their labels + right-angle
// //                    markers. Coord labels show only the x-component
// //                    (x = cos θ for both P and P'). Compare line =
// //                    "x = cos(−θ)".
// //        'full'    : v2 behavior (backward-compat).
// //    - DEFAULT_SCENARIO now declares coordMode: 'sinOnly' (it's the sin proof).
// //    - NegativeAngleDemo reads scenario.coordMode and forwards it.
// //    - Cos-label collision clamp from v2 retained.
// //    ============================================================ */

// // const COLORS = {
// //   deepBlue:    '#4F46E5',
// //   midBlue:     '#B45309',
// //   red:         '#DC2626',
// //   panelBg:     '#f1f5f9',
// //   panelBgDeep: '#E2E8F0',
// //   borderSoft:  '#cbd5e1',
// //   text:        '#1e3a5f',
// //   textMuted:   '#64748b',
// //   textFaint:   '#94a3b8',
// //   borderTer:   'rgba(0,0,0,0.15)',
// //   borderSec:   'rgba(0,0,0,0.30)',
// //   white:       '#ffffff',
// // };

// // const FULL_STATE = {
// //   showP:            true,
// //   showPCoords:      true,
// //   showPPrime:       true,
// //   showPPrimeCoords: true,
// //   showCompare:      true,
// //   showMetrics:      true,
// // };

// // const DEFAULT_SLIDER = {
// //   label:       'θ',
// //   toDisplay:   (t) => t,
// //   fromDisplay: (v) => v,
// //   step:        1,
// // };

// // const DEFAULT_SCENARIO = {
// //   coordMode: 'sinOnly',
// //   identity: {
// //     fnName:    'sin',
// //     lhs:       '−θ',
// //     lhsColor:  'red',
// //     lhsFormat: 'paren',
// //     rhsParts: [
// //       { text: '−',     color: 'text' },
// //       { text: 'sin θ', color: 'midBlue' },
// //     ],
// //   },
// //   steps: [
// //     {
// //       rule: 'Setup',
// //       description: 'Place P on the unit circle at angle θ above the x-axis. The vertical leg from the x-axis up to P has signed length sin θ — this is the y-coordinate of P.',
// //       state: { showP: true, showPCoords: true },
// //     },
// //     {
// //       rule: 'Mirror twin',
// //       description: "Place P' at angle −θ — measured clockwise from the x-axis. P' sits directly below P with the same vertical magnitude, but on the other side of the x-axis. Its y-coordinate is −sin θ.",
// //       state: { showP: true, showPCoords: true, showPPrime: true, showPPrimeCoords: true },
// //     },
// //     {
// //       rule: 'Read off the identity',
// //       description: "P' is the point at angle −θ on the unit circle, so its y-coordinate IS sin(−θ). From the picture, that y-coordinate is −sin θ. Therefore sin(−θ) = −sin θ.",
// //       state: { ...FULL_STATE },
// //     },
// //   ],
// //   metricPairs: [
// //     { label: 'sin(−θ)', compute: (th) => Math.sin(-th) },
// //     { label: '−sin θ',  compute: (th) => -Math.sin(th) },
// //   ],
// // };

// // function colorOf(name) {
// //   return COLORS[name] || COLORS.text;
// // }

// // function FadeGroup({ visible, duration = 400, children }) {
// //   return (
// //     <g style={{ opacity: visible ? 1 : 0, transition: `opacity ${duration}ms ease` }}>
// //       {children}
// //     </g>
// //   );
// // }

// // /* ============================================================
// //    NegativeAngleCore — pure SVG scene
// //    ============================================================ */
// // function NegativeAngleCore({
// //   theta = 35,
// //   coordMode = 'full',
// //   showP = true,
// //   showPCoords = false,
// //   showPPrime = false,
// //   showPPrimeCoords = false,
// //   showCompare = false,
// //   cx = 320, cy = 240, R = 170,
// //   viewBox = '0 0 680 480',
// // }) {
// //   const th = (theta * Math.PI) / 180;
// //   const c  = Math.cos(th);
// //   const s  = Math.sin(th);

// //   const footX = cx + R * c;
// //   const Py    = cy - R * s;
// //   const PpY   = cy + R * s;

// //   const arcR = 40;
// //   const arcEndUp = { x: cx + arcR * c, y: cy - arcR * s };
// //   const arcEndDn = { x: cx + arcR * c, y: cy + arcR * s };

// //   const ra = 9;

// //   // Cos-label collision clamp (carried over from v2).
// //   const cosLabelMinX = cx + arcR + 38;
// //   const cosLabelX    = Math.max((cx + footX) / 2, cosLabelMinX);

// //   const showCosLeg  = coordMode !== 'sinOnly';
// //   const showSinLegs = coordMode !== 'cosOnly';

// //   // Coord label content per mode.
// //   const renderPCoord = () => {
// //     if (coordMode === 'sinOnly') {
// //       return (
// //         <text x={footX + 14} y={Py - 24} fontSize="15.6" fill={COLORS.text}>
// //           P: <tspan fontStyle="italic">y</tspan> = <tspan fontStyle="italic" fill={COLORS.midBlue}>sin θ</tspan>
// //         </text>
// //       );
// //     }
// //     if (coordMode === 'cosOnly') {
// //       return (
// //         <text x={footX + 14} y={Py - 24} fontSize="15.6" fill={COLORS.text}>
// //           P: <tspan fontStyle="italic">x</tspan> = <tspan fontStyle="italic" fill={COLORS.deepBlue}>cos θ</tspan>
// //         </text>
// //       );
// //     }
// //     return (
// //       <text x={footX + 14} y={Py - 24} fontSize="15.6" fill={COLORS.text}>
// //         P = (<tspan fontStyle="italic" fill={COLORS.deepBlue}>cos θ</tspan>
// //         <tspan>, </tspan>
// //         <tspan fontStyle="italic" fill={COLORS.midBlue}>sin θ</tspan>)
// //       </text>
// //     );
// //   };

// //   const renderPPrimeCoord = () => {
// //     if (coordMode === 'sinOnly') {
// //       return (
// //         <text x={footX + 14} y={PpY + 18} fontSize="15.6" fill={COLORS.text}>
// //           P&apos;: <tspan fontStyle="italic">y</tspan> = <tspan fontStyle="italic" fill={COLORS.midBlue}>−sin θ</tspan>
// //         </text>
// //       );
// //     }
// //     if (coordMode === 'cosOnly') {
// //       return (
// //         <text x={footX + 14} y={PpY + 18} fontSize="15.6" fill={COLORS.text}>
// //           P&apos;: <tspan fontStyle="italic">x</tspan> = <tspan fontStyle="italic" fill={COLORS.deepBlue}>cos θ</tspan>
// //         </text>
// //       );
// //     }
// //     return (
// //       <text x={footX + 14} y={PpY + 18} fontSize="15.6" fill={COLORS.text}>
// //         P&apos; = (<tspan fontStyle="italic" fill={COLORS.deepBlue}>cos θ</tspan>
// //         <tspan>, </tspan>
// //         <tspan fontStyle="italic" fill={COLORS.midBlue}>−sin θ</tspan>)
// //       </text>
// //     );
// //   };

// //   const renderCompare = () => {
// //     if (coordMode === 'sinOnly') {
// //       return (
// //         <text x={footX + 14} y={PpY + 38} fontSize="14.4"
// //               fill={COLORS.textMuted} fontStyle="italic">
// //           y = sin(−θ)
// //         </text>
// //       );
// //     }
// //     if (coordMode === 'cosOnly') {
// //       return (
// //         <text x={footX + 14} y={PpY + 38} fontSize="14.4"
// //               fill={COLORS.textMuted} fontStyle="italic">
// //           x = cos(−θ)
// //         </text>
// //       );
// //     }
// //     return (
// //       <text x={footX + 14} y={PpY + 38} fontSize="14.4"
// //             fill={COLORS.textMuted} fontStyle="italic">
// //         = (cos(−θ), sin(−θ))
// //       </text>
// //     );
// //   };

// //   return (
// //     <svg viewBox={viewBox} style={{ display: 'block', width: '100%' }} role="img">
// //       <title>Negative angle scene</title>

// //       {/* Axes */}
// //       <line x1={cx - R - 30} y1={cy} x2={cx + R + 30} y2={cy}
// //             stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.45" />
// //       <line x1={cx} y1={cy - R - 30} x2={cx} y2={cy + R + 30}
// //             stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.45" />

// //       {/* Axis labels */}
// //       <text x={cx + R + 36} y={cy + 5} fontSize="16.8"
// //             fill={COLORS.textMuted} fontStyle="italic">x</text>
// //       <text x={cx + 6} y={cy - R - 22} fontSize="16.8"
// //             fill={COLORS.textMuted} fontStyle="italic">y</text>

// //       {/* Unit circle */}
// //       <circle cx={cx} cy={cy} r={R} fill="none"
// //               stroke={COLORS.borderSec} strokeWidth="1" />

// //       {/* Origin */}
// //       <circle cx={cx} cy={cy} r={3} fill={COLORS.text} />
// //       <text x={cx - 10} y={cy + 20} textAnchor="end"
// //             fontSize="16.8" fill={COLORS.textMuted} fontStyle="italic">O</text>

// //       {/* Shared cos leg — only in 'full' or 'cosOnly' */}
// //       {showCosLeg && (
// //         <FadeGroup visible={showP || showPPrime}>
// //           <line x1={cx} y1={cy} x2={footX} y2={cy}
// //                 stroke={COLORS.deepBlue} strokeWidth="2.8" strokeLinecap="round" />
// //           <text x={cosLabelX} y={cy + 22} textAnchor="middle"
// //                 fontSize="16.8" fontStyle="italic" fontWeight="500"
// //                 fill={COLORS.deepBlue}>cos θ</text>
// //         </FadeGroup>
// //       )}

// //       {/* ===== P group (above x-axis) ===== */}
// //       <FadeGroup visible={showP}>
// //         {/* Ray O→P */}
// //         <line x1={cx} y1={cy} x2={footX} y2={Py}
// //               stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.55" />
// //         {/* Vertical sin θ leg — only in 'full' or 'sinOnly' */}
// //         {showSinLegs && (
// //           <>
// //             <line x1={footX} y1={cy} x2={footX} y2={Py}
// //                   stroke={COLORS.midBlue} strokeWidth="2.8" strokeLinecap="round" />
// //             <text x={footX + 10} y={(cy + Py) / 2 + 5}
// //                   fontSize="16.8" fontStyle="italic" fontWeight="500"
// //                   fill={COLORS.midBlue}>sin θ</text>
// //             <polyline points={`${footX - ra},${cy} ${footX - ra},${cy - ra} ${footX},${cy - ra}`}
// //                       fill="none" stroke={COLORS.textMuted} strokeWidth="0.8" />
// //           </>
// //         )}
// //         {/* Point P */}
// //         <circle cx={footX} cy={Py} r={4.5} fill={COLORS.text} />
// //         <text x={footX - 10} y={Py - 6} textAnchor="end"
// //               fontSize="18" fontWeight="600" fill={COLORS.text}>P</text>
// //         {/* θ arc */}
// //         <path d={`M ${cx + arcR} ${cy} A ${arcR} ${arcR} 0 0 0 ${arcEndUp.x} ${arcEndUp.y}`}
// //               fill="none" stroke={COLORS.red} strokeWidth="1.6" />
// //         <text x={cx + arcR + 6} y={cy - 6}
// //               fontSize="16.8" fontStyle="italic" fill={COLORS.red}>θ</text>
// //       </FadeGroup>

// //       {/* P coordinate label */}
// //       <FadeGroup visible={showPCoords}>
// //         {renderPCoord()}
// //       </FadeGroup>

// //       {/* ===== P' group (below x-axis) ===== */}
// //       <FadeGroup visible={showPPrime}>
// //         {/* Ray O→P' */}
// //         <line x1={cx} y1={cy} x2={footX} y2={PpY}
// //               stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.55" />
// //         {/* Vertical −sin θ leg — only in 'full' or 'sinOnly' */}
// //         {showSinLegs && (
// //           <>
// //             <line x1={footX} y1={cy} x2={footX} y2={PpY}
// //                   stroke={COLORS.midBlue} strokeWidth="2.8" strokeLinecap="round" />
// //             <text x={footX + 10} y={(cy + PpY) / 2 + 5}
// //                   fontSize="16.8" fontStyle="italic" fontWeight="500"
// //                   fill={COLORS.midBlue}>−sin θ</text>
// //             <polyline points={`${footX - ra},${cy} ${footX - ra},${cy + ra} ${footX},${cy + ra}`}
// //                       fill="none" stroke={COLORS.textMuted} strokeWidth="0.8" />
// //           </>
// //         )}
// //         {/* Point P' */}
// //         <circle cx={footX} cy={PpY} r={4.5} fill={COLORS.text} />
// //         <text x={footX - 10} y={PpY + 18} textAnchor="end"
// //               fontSize="18" fontWeight="600" fill={COLORS.text}>P&apos;</text>
// //         {/* −θ arc */}
// //         <path d={`M ${cx + arcR} ${cy} A ${arcR} ${arcR} 0 0 1 ${arcEndDn.x} ${arcEndDn.y}`}
// //               fill="none" stroke={COLORS.red} strokeWidth="1.6" />
// //         <text x={cx + arcR + 6} y={cy + 20}
// //               fontSize="16.8" fontStyle="italic" fill={COLORS.red}>−θ</text>
// //       </FadeGroup>

// //       {/* P' coordinate label */}
// //       <FadeGroup visible={showPPrimeCoords}>
// //         {renderPPrimeCoord()}
// //       </FadeGroup>

// //       {/* Compare-step second line */}
// //       <FadeGroup visible={showCompare}>
// //         {renderCompare()}
// //       </FadeGroup>
// //     </svg>
// //   );
// // }

// // /* ============================================================
// //    MiniSolutionPanel — step log with clickable jump
// //    ============================================================ */
// // function MiniSolutionPanel({ steps, stepsTitle = 'Derivation', placeholder, onStepClick }) {
// //   const listRef = useRef(null);
// //   const activeIndex = steps.length - 1;

// //   useEffect(() => {
// //     const el = listRef.current;
// //     if (!el) return;
// //     el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
// //   }, [activeIndex]);

// //   return (
// //     <div>
// //       <style>{`
// //         @keyframes nad-fade-in {
// //           from { opacity: 0; transform: translateY(-4px); }
// //           to   { opacity: 1; transform: translateY(0); }
// //         }
// //         .nad-step-log::-webkit-scrollbar { display: none; width: 0; height: 0; }
// //       `}</style>

// //       <div style={{
// //         fontSize: '0.84rem', textTransform: 'uppercase', letterSpacing: '1.6px',
// //         color: COLORS.textMuted, marginBottom: '16px', fontWeight: 600,
// //       }}>{stepsTitle}</div>

// //       <div
// //         ref={listRef}
// //         className="nad-step-log"
// //         style={{
// //           maxHeight: '500px',
// //           overflowY: 'auto',
// //           scrollbarWidth: 'none',
// //           msOverflowStyle: 'none',
// //           paddingRight: '2px',
// //         }}
// //       >
// //         {steps.length === 0 && (
// //           <div style={{
// //             background: COLORS.white,
// //             border: `1px dashed ${COLORS.borderSoft}`,
// //             borderRadius: '8px', padding: '40px 24px', textAlign: 'center',
// //             fontSize: '1.02rem', color: COLORS.textFaint, fontStyle: 'italic',
// //             minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center',
// //           }}>
// //             {placeholder}
// //           </div>
// //         )}
// //         {steps.map((step, i) => {
// //           const isActive  = i === activeIndex;
// //           const clickable = !!onStepClick;
// //           return (
// //             <div
// //               key={i}
// //               role={clickable ? 'button' : undefined}
// //               tabIndex={clickable ? 0 : undefined}
// //               onClick={clickable ? () => onStepClick(i) : undefined}
// //               onKeyDown={clickable ? (e) => {
// //                 if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onStepClick(i); }
// //               } : undefined}
// //               onMouseEnter={clickable && !isActive ? (e) => {
// //                 e.currentTarget.style.background = COLORS.white;
// //               } : undefined}
// //               onMouseLeave={clickable && !isActive ? (e) => {
// //                 e.currentTarget.style.background = 'transparent';
// //               } : undefined}
// //               style={{
// //                 background: isActive ? COLORS.white : 'transparent',
// //                 border: isActive ? `2px solid ${COLORS.deepBlue}` : `2px solid transparent`,
// //                 borderRadius: '8px',
// //                 padding: '12px 14px',
// //                 marginBottom: '6px',
// //                 cursor: clickable ? 'pointer' : 'default',
// //                 transition: 'background 0.2s ease, border-color 0.2s ease',
// //                 animation: 'nad-fade-in 0.35s ease',
// //                 outline: 'none',
// //               }}
// //             >
// //               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
// //                 <span style={{
// //                   display: 'inline-block', fontSize: '0.864rem', fontWeight: 700,
// //                   color: COLORS.white,
// //                   background: isActive ? COLORS.deepBlue : COLORS.textFaint,
// //                   padding: '3px 9px', borderRadius: '4px', flexShrink: 0,
// //                   fontVariantNumeric: 'tabular-nums',
// //                   transition: 'background 0.2s ease',
// //                 }}>{i + 1}</span>
// //                 <span style={{
// //                   fontWeight: isActive ? 700 : 500,
// //                   fontSize: '1.104rem',
// //                   color: isActive ? COLORS.deepBlue : COLORS.textMuted,
// //                   transition: 'color 0.2s ease',
// //                 }}>{step.rule}</span>
// //               </div>
// //               <p style={{
// //                 fontSize: '0.96rem',
// //                 color: isActive ? COLORS.text : COLORS.textMuted,
// //                 lineHeight: 1.5, margin: 0, paddingLeft: '42px',
// //                 transition: 'color 0.2s ease',
// //               }}>{step.description}</p>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // }

// // function IdentityBar({ identity }) {
// //   if (!identity) return null;
// //   const { fnName = 'sin', lhs, lhsColor = 'red', lhsFormat = 'paren', rhsParts = [] } = identity;
// //   return (
// //     <div style={{
// //       fontSize: '1.26rem', padding: '14px 18px',
// //       background: COLORS.panelBg,
// //       border: `1px solid ${COLORS.borderSoft}`,
// //       borderRadius: '10px', textAlign: 'center', marginBottom: '12px',
// //       fontFamily: 'Georgia, serif', color: COLORS.text,
// //     }}>
// //       {lhsFormat === 'exponent' && (
// //         <>
// //           <em>{fnName}</em>
// //           <sup style={{ fontSize: '0.7em' }}>2</sup>
// //           <span style={{ color: colorOf(lhsColor), fontWeight: 500 }}>{lhs}</span>
// //         </>
// //       )}
// //       {lhsFormat === 'plain' && (
// //         <>
// //           <em>{fnName}</em>{' '}
// //           <span style={{ color: colorOf(lhsColor), fontWeight: 500 }}>{lhs}</span>
// //         </>
// //       )}
// //       {lhsFormat === 'paren' && (
// //         <>
// //           <em>{fnName}</em>(
// //           <span style={{ color: colorOf(lhsColor), fontWeight: 500 }}>{lhs}</span>)
// //         </>
// //       )}
// //       {' '}={' '}
// //       {rhsParts.map((part, i) => (
// //         <span key={i} style={{
// //           color: colorOf(part.color),
// //           fontStyle: part.color !== 'text' ? 'italic' : 'normal',
// //         }}>{part.text}</span>
// //       ))}
// //     </div>
// //   );
// // }

// // function ControlButton({ onClick, disabled, children, title, primary }) {
// //   return (
// //     <button onClick={onClick} disabled={disabled} title={title} style={{
// //       border: `1px solid ${primary ? COLORS.deepBlue : COLORS.borderSoft}`,
// //       background: primary ? COLORS.deepBlue : COLORS.white,
// //       color: primary ? COLORS.white : COLORS.text,
// //       padding: '7px 16px', borderRadius: '6px',
// //       fontSize: '1.02rem', fontWeight: 500,
// //       cursor: disabled ? 'not-allowed' : 'pointer',
// //       opacity: disabled ? 0.4 : 1,
// //       fontFamily: 'inherit', minWidth: '62px',
// //       transition: 'background 0.15s, opacity 0.15s',
// //     }}>{children}</button>
// //   );
// // }

// // function MetricCard({ label, value, visible }) {
// //   return (
// //     <div style={{
// //       background: COLORS.panelBg,
// //       border: `1px solid ${COLORS.borderSoft}`,
// //       borderRadius: '10px', padding: '0.9rem 1.2rem',
// //       opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease',
// //     }}>
// //       <p style={{
// //         fontSize: '0.96rem', color: COLORS.textMuted,
// //         margin: '0 0 4px', fontStyle: 'italic',
// //       }}>{label}</p>
// //       <p style={{
// //         fontSize: '1.62rem', fontWeight: 500,
// //         fontVariantNumeric: 'tabular-nums',
// //         margin: 0, color: COLORS.deepBlue,
// //       }}>{value}</p>
// //     </div>
// //   );
// // }

// // /* ============================================================
// //    Main exported component
// //    ============================================================ */
// // export default function NegativeAngleDemo({
// //   scenario       = {},
// //   initialTheta   = 35,
// //   theta:           thetaProp,
// //   onThetaChange,
// //   thetaMin       = 10,
// //   thetaMax       = 80,
// //   stepDurationMs = 2500,
// //   showSlider     = true,
// //   maxWidth       = 1100,
// //   svgMaxWidth    = 560,
// // }) {
// //   const mergedScenario = {
// //     coordMode:    scenario.coordMode    ?? DEFAULT_SCENARIO.coordMode,
// //     identity:     scenario.identity     ?? DEFAULT_SCENARIO.identity,
// //     steps:        scenario.steps        ?? DEFAULT_SCENARIO.steps,
// //     metricPairs:  scenario.metricPairs  ?? DEFAULT_SCENARIO.metricPairs,
// //     sliderConfig: { ...DEFAULT_SLIDER,  ...(scenario.sliderConfig || {}) },
// //   };

// //   const sliderMin = mergedScenario.sliderConfig.min ?? mergedScenario.sliderConfig.toDisplay(thetaMin);
// //   const sliderMax = mergedScenario.sliderConfig.max ?? mergedScenario.sliderConfig.toDisplay(thetaMax);

// //   const isControlled = thetaProp !== undefined;
// //   const [thetaInternal, setThetaInternal] = useState(initialTheta);
// //   const theta = isControlled ? thetaProp : thetaInternal;
// //   const setTheta = (v) => {
// //     if (isControlled) onThetaChange?.(v);
// //     else setThetaInternal(v);
// //   };

// //   const [currentStep, setCurrentStep] = useState(0);
// //   const [isPlaying, setIsPlaying]     = useState(false);
// //   const [speed, setSpeed]             = useState(1);

// //   const totalSteps        = mergedScenario.steps.length;
// //   const effectiveDuration = stepDurationMs / speed;

// //   useEffect(() => {
// //     if (!isPlaying) return;
// //     if (currentStep >= totalSteps) { setIsPlaying(false); return; }
// //     const id = setTimeout(() => {
// //       setCurrentStep(s => Math.min(s + 1, totalSteps));
// //     }, effectiveDuration);
// //     return () => clearTimeout(id);
// //   }, [isPlaying, currentStep, totalSteps, effectiveDuration]);

// //   const handlePlayPause = () => {
// //     if (currentStep >= totalSteps) { setCurrentStep(0); setIsPlaying(true); }
// //     else setIsPlaying(p => !p);
// //   };
// //   const handleNext   = () => { setIsPlaying(false); setCurrentStep(s => Math.min(s + 1, totalSteps)); };
// //   const handlePrev   = () => { setIsPlaying(false); setCurrentStep(s => Math.max(s - 1, 0)); };
// //   const handleReset  = () => { setIsPlaying(false); setCurrentStep(0); };
// //   const handleJumpTo = (idx) => { setIsPlaying(false); setCurrentStep(idx + 1); };

// //   const visibleSteps = mergedScenario.steps.slice(0, currentStep);
// //   const activeStep   = currentStep > 0 ? mergedScenario.steps[currentStep - 1] : null;
// //   const activeState  = activeStep ? activeStep.state : {};

// //   const th        = (theta * Math.PI) / 180;
// //   const isAtEnd   = currentStep >= totalSteps;
// //   const isAtStart = currentStep === 0;
// //   const playLabel = isPlaying ? 'Pause' : (isAtEnd ? 'Replay' : 'Play');

// //   const sliderCfg    = mergedScenario.sliderConfig;
// //   const sliderValue  = sliderCfg.toDisplay(theta);
// //   const handleSlider = (e) => setTheta(sliderCfg.fromDisplay(+e.target.value));

// //   return (
// //     <div style={{
// //       maxWidth: `${maxWidth}px`,
// //       margin: '0  auto',
// //       background: COLORS.white,
// //       border: `1px solid ${COLORS.borderSoft}`,
// //       borderRadius: '14px',
// //       boxShadow: '0 1px 2px rgba(15, 23, 42, 0.05), 0 10px 28px rgba(15, 23, 42, 0.07)',
// //       padding: '22px',
// //       fontFamily: 'system-ui, -apple-system, sans-serif',
// //       color: COLORS.text,
// //     }}>
// //       <div style={{ display: 'flex', gap: '20px', width: '100%' }}>

// //         <div style={{ flex: '2 1 0', minWidth: 0 }}>
// //           <IdentityBar identity={mergedScenario.identity} />

// //           {showSlider && (
// //             <div style={{
// //               display: 'flex', alignItems: 'center', gap: '12px',
// //               padding: '0 4px', marginBottom: '12px',
// //             }}>
// //               <span style={{
// //                 fontSize: '1.08rem', color: COLORS.textMuted,
// //                 fontStyle: 'italic', minWidth: '16px',
// //               }}>{sliderCfg.label}</span>
// //               <input
// //                 type="range"
// //                 min={sliderMin}
// //                 max={sliderMax}
// //                 step={sliderCfg.step}
// //                 value={sliderValue}
// //                 onChange={handleSlider}
// //                 style={{ flex: 1, accentColor: COLORS.deepBlue }}
// //               />
// //               <span style={{
// //                 fontSize: '1.08rem', fontWeight: 500, color: COLORS.deepBlue,
// //                 minWidth: '52px', textAlign: 'right', fontVariantNumeric: 'tabular-nums',
// //               }}>{sliderValue}&deg;</span>
// //             </div>
// //           )}

// //           <div style={{
// //             background: COLORS.panelBg,
// //             border: `1px solid ${COLORS.borderSoft}`,
// //             borderRadius: '10px',
// //             padding: '8px',
// //           }}>
// //             <div style={{ maxWidth: `${svgMaxWidth}px`, margin: '0 auto' }}>
// //               <NegativeAngleCore
// //                 theta={theta}
// //                 coordMode={mergedScenario.coordMode}
// //                 showP={!!activeState.showP}
// //                 showPCoords={!!activeState.showPCoords}
// //                 showPPrime={!!activeState.showPPrime}
// //                 showPPrimeCoords={!!activeState.showPPrimeCoords}
// //                 showCompare={!!activeState.showCompare}
// //               />
// //             </div>
// //           </div>

// //           <div style={{
// //             display: 'flex', alignItems: 'center', justifyContent: 'center',
// //             gap: '8px', marginTop: '12px', padding: '12px 14px',
// //             background: COLORS.panelBg,
// //             border: `1px solid ${COLORS.borderSoft}`,
// //             borderRadius: '10px',
// //           }}>
// //             <ControlButton onClick={handleReset} disabled={isAtStart && !isPlaying} title="Reset">Reset</ControlButton>
// //             <ControlButton onClick={handlePrev} disabled={isAtStart} title="Previous">&lsaquo; Prev</ControlButton>
// //             <ControlButton onClick={handlePlayPause} title={isPlaying ? 'Pause' : 'Play'} primary>{playLabel}</ControlButton>
// //             <ControlButton onClick={handleNext} disabled={isAtEnd} title="Next">Next &rsaquo;</ControlButton>
// //             <select
// //               value={speed}
// //               onChange={e => setSpeed(+e.target.value)}
// //               title="Animation speed"
// //               style={{
// //                 border: `1px solid ${COLORS.borderSoft}`,
// //                 background: COLORS.white,
// //                 color: COLORS.text,
// //                 padding: '7px 10px', borderRadius: '6px',
// //                 fontSize: '0.96rem', fontWeight: 500,
// //                 fontFamily: 'inherit', cursor: 'pointer', marginLeft: '6px',
// //               }}
// //             >
// //               <option value={0.5}>0.5&times;</option>
// //               <option value={1}>1&times;</option>
// //               <option value={1.5}>1.5&times;</option>
// //               <option value={2}>2&times;</option>
// //             </select>
// //             <span style={{
// //               marginLeft: '12px', fontSize: '0.936rem',
// //               color: COLORS.textFaint, fontVariantNumeric: 'tabular-nums',
// //             }}>Step {currentStep} of {totalSteps}</span>
// //           </div>

// //           {mergedScenario.metricPairs && mergedScenario.metricPairs.length > 0 && (
// //             <div style={{
// //               display: 'grid',
// //               gridTemplateColumns: `repeat(${mergedScenario.metricPairs.length}, 1fr)`,
// //               gap: '12px', marginTop: '12px',
// //             }}>
// //               {mergedScenario.metricPairs.map((m, i) => (
// //                 <MetricCard
// //                   key={i}
// //                   label={m.label}
// //                   value={m.compute(th).toFixed(3)}
// //                   visible={!!activeState.showMetrics}
// //                 />
// //               ))}
// //             </div>
// //           )}
// //         </div>

// //         <div style={{
// //           flex: '1 1 0', minWidth: 0,
// //           background: COLORS.panelBg,
// //           border: `1px solid ${COLORS.borderSoft}`,
// //           borderRadius: '10px',
// //           padding: '18px',
// //           minHeight: '520px',
// //         }}>
// //           <MiniSolutionPanel
// //             steps={visibleSteps}
// //             stepsTitle="Derivation"
// //             placeholder="Press Play to step through the proof."
// //             onStepClick={handleJumpTo}
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState, useEffect, useRef } from 'react';

// /* ============================================================
//    NegativeAngleDemo — v3

//    Changes from v2:
//    - New prop `coordMode` on NegativeAngleCore: 'full' | 'sinOnly' | 'cosOnly'
//        'sinOnly' : hide cos leg + "cos θ" label. Coord labels show
//                    only the y-component (y = sin θ, y = −sin θ).
//                    Compare line = "y = sin(−θ)".
//        'cosOnly' : hide vertical sin legs + their labels + right-angle
//                    markers. Coord labels show only the x-component
//                    (x = cos θ for both P and P'). Compare line =
//                    "x = cos(−θ)".
//        'full'    : v2 behavior (backward-compat).
//    - DEFAULT_SCENARIO now declares coordMode: 'sinOnly' (it's the sin proof).
//    - NegativeAngleDemo reads scenario.coordMode and forwards it.
//    - Cos-label collision clamp from v2 retained.
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
// };

// const FULL_STATE = {
//   showP:            true,
//   showPCoords:      true,
//   showPPrime:       true,
//   showPPrimeCoords: true,
//   showCompare:      true,
//   showMetrics:      true,
// };

// const DEFAULT_SLIDER = {
//   label:       'θ',
//   toDisplay:   (t) => t,
//   fromDisplay: (v) => v,
//   step:        1,
// };

// const DEFAULT_SCENARIO = {
//   coordMode: 'sinOnly',
//   identity: {
//     fnName:    'sin',
//     lhs:       '−θ',
//     lhsColor:  'red',
//     lhsFormat: 'paren',
//     rhsParts: [
//       { text: '−',     color: 'text' },
//       { text: 'sin θ', color: 'midBlue' },
//     ],
//   },
//   steps: [
//     {
//       rule: 'Setup',
//       description: 'Place P on the unit circle at angle θ above the x-axis. The vertical leg from the x-axis up to P has signed length sin θ — this is the y-coordinate of P.',
//       state: { showP: true, showPCoords: true },
//     },
//     {
//       rule: 'Mirror twin',
//       description: "Place P' at angle −θ — measured clockwise from the x-axis. P' sits directly below P with the same vertical magnitude, but on the other side of the x-axis. Its y-coordinate is −sin θ.",
//       state: { showP: true, showPCoords: true, showPPrime: true, showPPrimeCoords: true },
//     },
//     {
//       rule: 'Read off the identity',
//       description: "P' is the point at angle −θ on the unit circle, so its y-coordinate IS sin(−θ). From the picture, that y-coordinate is −sin θ. Therefore sin(−θ) = −sin θ.",
//       state: { ...FULL_STATE },
//     },
//   ],
//   metricPairs: [
//     { label: 'sin(−θ)', compute: (th) => Math.sin(-th) },
//     { label: '−sin θ',  compute: (th) => -Math.sin(th) },
//   ],
// };

// function colorOf(name) {
//   return COLORS[name] || COLORS.text;
// }

// function FadeGroup({ visible, duration = 400, children }) {
//   return (
//     <g style={{ opacity: visible ? 1 : 0, transition: `opacity ${duration}ms ease` }}>
//       {children}
//     </g>
//   );
// }

// /* ============================================================
//    NegativeAngleCore — pure SVG scene
//    ============================================================ */
// function NegativeAngleCore({
//   theta = 35,
//   coordMode = 'full',
//   showP = true,
//   showPCoords = false,
//   showPPrime = false,
//   showPPrimeCoords = false,
//   showCompare = false,
//   cx = 320, cy = 240, R = 170,
//   viewBox = '0 0 680 480',
// }) {
//   const th = (theta * Math.PI) / 180;
//   const c  = Math.cos(th);
//   const s  = Math.sin(th);

//   const footX = cx + R * c;
//   const Py    = cy - R * s;
//   const PpY   = cy + R * s;

//   const arcR = 40;
//   const arcEndUp = { x: cx + arcR * c, y: cy - arcR * s };
//   const arcEndDn = { x: cx + arcR * c, y: cy + arcR * s };

//   const ra = 9;

//   // Cos-label collision clamp (carried over from v2).
//   const cosLabelMinX = cx + arcR + 38;
//   const cosLabelX    = Math.max((cx + footX) / 2, cosLabelMinX);

//   const showCosLeg  = coordMode !== 'sinOnly';
//   const showSinLegs = coordMode !== 'cosOnly';

//   // Coord label content per mode.
//   const renderPCoord = () => {
//     if (coordMode === 'sinOnly') {
//       return (
//         <text x={footX + 14} y={Py - 24} fontSize="15.6" fill={COLORS.text}>
//           P: <tspan fontStyle="italic">y</tspan> = <tspan fontStyle="italic" fill={COLORS.midBlue}>sin θ</tspan>
//         </text>
//       );
//     }
//     if (coordMode === 'cosOnly') {
//       return (
//         <text x={footX + 14} y={Py - 24} fontSize="15.6" fill={COLORS.text}>
//           P: <tspan fontStyle="italic">x</tspan> = <tspan fontStyle="italic" fill={COLORS.deepBlue}>cos θ</tspan>
//         </text>
//       );
//     }
//     return (
//       <text x={footX + 14} y={Py - 24} fontSize="15.6" fill={COLORS.text}>
//         P = (<tspan fontStyle="italic" fill={COLORS.deepBlue}>cos θ</tspan>
//         <tspan>, </tspan>
//         <tspan fontStyle="italic" fill={COLORS.midBlue}>sin θ</tspan>)
//       </text>
//     );
//   };

//   const renderPPrimeCoord = () => {
//     if (coordMode === 'sinOnly') {
//       return (
//         <text x={footX + 14} y={PpY + 18} fontSize="15.6" fill={COLORS.text}>
//           P&apos;: <tspan fontStyle="italic">y</tspan> = <tspan fontStyle="italic" fill={COLORS.midBlue}>−sin θ</tspan>
//         </text>
//       );
//     }
//     if (coordMode === 'cosOnly') {
//       return (
//         <text x={footX + 14} y={PpY + 18} fontSize="15.6" fill={COLORS.text}>
//           P&apos;: <tspan fontStyle="italic">x</tspan> = <tspan fontStyle="italic" fill={COLORS.deepBlue}>cos θ</tspan>
//         </text>
//       );
//     }
//     return (
//       <text x={footX + 14} y={PpY + 18} fontSize="15.6" fill={COLORS.text}>
//         P&apos; = (<tspan fontStyle="italic" fill={COLORS.deepBlue}>cos θ</tspan>
//         <tspan>, </tspan>
//         <tspan fontStyle="italic" fill={COLORS.midBlue}>−sin θ</tspan>)
//       </text>
//     );
//   };

//   const renderCompare = () => {
//     if (coordMode === 'sinOnly') {
//       return (
//         <text x={footX + 14} y={PpY + 38} fontSize="14.4"
//               fill={COLORS.textMuted} fontStyle="italic">
//           y = sin(−θ)
//         </text>
//       );
//     }
//     if (coordMode === 'cosOnly') {
//       return (
//         <text x={footX + 14} y={PpY + 38} fontSize="14.4"
//               fill={COLORS.textMuted} fontStyle="italic">
//           x = cos(−θ)
//         </text>
//       );
//     }
//     return (
//       <text x={footX + 14} y={PpY + 38} fontSize="14.4"
//             fill={COLORS.textMuted} fontStyle="italic">
//         = (cos(−θ), sin(−θ))
//       </text>
//     );
//   };

//   return (
//     <svg viewBox={viewBox} style={{ display: 'block', width: '100%' }} role="img">
//       <title>Negative angle scene</title>

//       {/* Axes */}
//       <line x1={cx - R - 30} y1={cy} x2={cx + R + 30} y2={cy}
//             stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.45" />
//       <line x1={cx} y1={cy - R - 30} x2={cx} y2={cy + R + 30}
//             stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.45" />

//       {/* Axis labels */}
//       <text x={cx + R + 36} y={cy + 5} fontSize="16.8"
//             fill={COLORS.textMuted} fontStyle="italic">x</text>
//       <text x={cx + 6} y={cy - R - 22} fontSize="16.8"
//             fill={COLORS.textMuted} fontStyle="italic">y</text>

//       {/* Unit circle */}
//       <circle cx={cx} cy={cy} r={R} fill="none"
//               stroke={COLORS.borderSec} strokeWidth="1" />

//       {/* Origin */}
//       <circle cx={cx} cy={cy} r={3} fill={COLORS.text} />
//       <text x={cx - 10} y={cy + 20} textAnchor="end"
//             fontSize="16.8" fill={COLORS.textMuted} fontStyle="italic">O</text>

//       {/* Shared cos leg — only in 'full' or 'cosOnly' */}
//       {showCosLeg && (
//         <FadeGroup visible={showP || showPPrime}>
//           <line x1={cx} y1={cy} x2={footX} y2={cy}
//                 stroke={COLORS.deepBlue} strokeWidth="2.8" strokeLinecap="round" />
//           <text x={cosLabelX} y={cy + 22} textAnchor="middle"
//                 fontSize="16.8" fontStyle="italic" fontWeight="500"
//                 fill={COLORS.deepBlue}>cos θ</text>
//         </FadeGroup>
//       )}

//       {/* cosOnly: unlabeled vertical connector from P down through foot
//           to P', showing they share the same x-coordinate. */}
//       {coordMode === 'cosOnly' && (
//         <FadeGroup visible={showP && showPPrime}>
//           <line x1={footX} y1={Py} x2={footX} y2={PpY}
//                 stroke={COLORS.midBlue} strokeWidth="2.2"
//                 strokeLinecap="round" strokeDasharray="4 4" strokeOpacity="0.7" />
//         </FadeGroup>
//       )}

//       {/* ===== P group (above x-axis) ===== */}
//       <FadeGroup visible={showP}>
//         {/* Ray O→P */}
//         <line x1={cx} y1={cy} x2={footX} y2={Py}
//               stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.55" />
//         {/* Vertical sin θ leg — only in 'full' or 'sinOnly' */}
//         {showSinLegs && (
//           <>
//             <line x1={footX} y1={cy} x2={footX} y2={Py}
//                   stroke={COLORS.midBlue} strokeWidth="2.8" strokeLinecap="round" />
//             <text x={footX + 10} y={(cy + Py) / 2 + 5}
//                   fontSize="16.8" fontStyle="italic" fontWeight="500"
//                   fill={COLORS.midBlue}>sin θ</text>
//             <polyline points={`${footX - ra},${cy} ${footX - ra},${cy - ra} ${footX},${cy - ra}`}
//                       fill="none" stroke={COLORS.textMuted} strokeWidth="0.8" />
//           </>
//         )}
//         {/* Point P */}
//         <circle cx={footX} cy={Py} r={4.5} fill={COLORS.text} />
//         <text x={footX - 10} y={Py - 6} textAnchor="end"
//               fontSize="18" fontWeight="600" fill={COLORS.text}>P</text>
//         {/* θ arc */}
//         <path d={`M ${cx + arcR} ${cy} A ${arcR} ${arcR} 0 0 0 ${arcEndUp.x} ${arcEndUp.y}`}
//               fill="none" stroke={COLORS.red} strokeWidth="1.6" />
//         <text x={cx + arcR + 6} y={cy - 6}
//               fontSize="16.8" fontStyle="italic" fill={COLORS.red}>θ</text>
//       </FadeGroup>

//       {/* P coordinate label */}
//       <FadeGroup visible={showPCoords}>
//         {renderPCoord()}
//       </FadeGroup>

//       {/* ===== P' group (below x-axis) ===== */}
//       <FadeGroup visible={showPPrime}>
//         {/* Ray O→P' */}
//         <line x1={cx} y1={cy} x2={footX} y2={PpY}
//               stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.55" />
//         {/* Vertical −sin θ leg — only in 'full' or 'sinOnly' */}
//         {showSinLegs && (
//           <>
//             <line x1={footX} y1={cy} x2={footX} y2={PpY}
//                   stroke={COLORS.midBlue} strokeWidth="2.8" strokeLinecap="round" />
//             <text x={footX + 10} y={(cy + PpY) / 2 + 5}
//                   fontSize="16.8" fontStyle="italic" fontWeight="500"
//                   fill={COLORS.midBlue}>−sin θ</text>
//             <polyline points={`${footX - ra},${cy} ${footX - ra},${cy + ra} ${footX},${cy + ra}`}
//                       fill="none" stroke={COLORS.textMuted} strokeWidth="0.8" />
//           </>
//         )}
//         {/* Point P' */}
//         <circle cx={footX} cy={PpY} r={4.5} fill={COLORS.text} />
//         <text x={footX - 10} y={PpY + 18} textAnchor="end"
//               fontSize="18" fontWeight="600" fill={COLORS.text}>P&apos;</text>
//         {/* −θ arc */}
//         <path d={`M ${cx + arcR} ${cy} A ${arcR} ${arcR} 0 0 1 ${arcEndDn.x} ${arcEndDn.y}`}
//               fill="none" stroke={COLORS.red} strokeWidth="1.6" />
//         <text x={cx + arcR + 6} y={cy + 20}
//               fontSize="16.8" fontStyle="italic" fill={COLORS.red}>−θ</text>
//       </FadeGroup>

//       {/* P' coordinate label */}
//       <FadeGroup visible={showPPrimeCoords}>
//         {renderPPrimeCoord()}
//       </FadeGroup>

//       {/* Compare-step second line */}
//       <FadeGroup visible={showCompare}>
//         {renderCompare()}
//       </FadeGroup>
//     </svg>
//   );
// }

// /* ============================================================
//    MiniSolutionPanel — step log with clickable jump
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
//         @keyframes nad-fade-in {
//           from { opacity: 0; transform: translateY(-4px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .nad-step-log::-webkit-scrollbar { display: none; width: 0; height: 0; }
//       `}</style>

//       <div style={{
//         fontSize: '0.84rem', textTransform: 'uppercase', letterSpacing: '1.6px',
//         color: COLORS.textMuted, marginBottom: '16px', fontWeight: 600,
//       }}>{stepsTitle}</div>

//       <div
//         ref={listRef}
//         className="nad-step-log"
//         style={{
//           maxHeight: '500px',
//           overflowY: 'auto',
//           scrollbarWidth: 'none',
//           msOverflowStyle: 'none',
//           paddingRight: '2px',
//         }}
//       >
//         {steps.length === 0 && (
//           <div style={{
//             background: COLORS.white,
//             border: `1px dashed ${COLORS.borderSoft}`,
//             borderRadius: '8px', padding: '40px 24px', textAlign: 'center',
//             fontSize: '1.02rem', color: COLORS.textFaint, fontStyle: 'italic',
//             minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center',
//           }}>
//             {placeholder}
//           </div>
//         )}
//         {steps.map((step, i) => {
//           const isActive  = i === activeIndex;
//           const clickable = !!onStepClick;
//           return (
//             <div
//               key={i}
//               role={clickable ? 'button' : undefined}
//               tabIndex={clickable ? 0 : undefined}
//               onClick={clickable ? () => onStepClick(i) : undefined}
//               onKeyDown={clickable ? (e) => {
//                 if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onStepClick(i); }
//               } : undefined}
//               onMouseEnter={clickable && !isActive ? (e) => {
//                 e.currentTarget.style.background = COLORS.white;
//               } : undefined}
//               onMouseLeave={clickable && !isActive ? (e) => {
//                 e.currentTarget.style.background = 'transparent';
//               } : undefined}
//               style={{
//                 background: isActive ? COLORS.white : 'transparent',
//                 border: isActive ? `2px solid ${COLORS.deepBlue}` : `2px solid transparent`,
//                 borderRadius: '8px',
//                 padding: '12px 14px',
//                 marginBottom: '6px',
//                 cursor: clickable ? 'pointer' : 'default',
//                 transition: 'background 0.2s ease, border-color 0.2s ease',
//                 animation: 'nad-fade-in 0.35s ease',
//                 outline: 'none',
//               }}
//             >
//               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
//                 <span style={{
//                   display: 'inline-block', fontSize: '0.864rem', fontWeight: 700,
//                   color: COLORS.white,
//                   background: isActive ? COLORS.deepBlue : COLORS.textFaint,
//                   padding: '3px 9px', borderRadius: '4px', flexShrink: 0,
//                   fontVariantNumeric: 'tabular-nums',
//                   transition: 'background 0.2s ease',
//                 }}>{i + 1}</span>
//                 <span style={{
//                   fontWeight: isActive ? 700 : 500,
//                   fontSize: '1.104rem',
//                   color: isActive ? COLORS.deepBlue : COLORS.textMuted,
//                   transition: 'color 0.2s ease',
//                 }}>{step.rule}</span>
//               </div>
//               <p style={{
//                 fontSize: '0.96rem',
//                 color: isActive ? COLORS.text : COLORS.textMuted,
//                 lineHeight: 1.5, margin: 0, paddingLeft: '42px',
//                 transition: 'color 0.2s ease',
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
//   const { fnName = 'sin', lhs, lhsColor = 'red', lhsFormat = 'paren', rhsParts = [] } = identity;
//   return (
//     <div style={{
//       fontSize: '1.26rem', padding: '14px 18px',
//       background: COLORS.panelBg,
//       border: `1px solid ${COLORS.borderSoft}`,
//       borderRadius: '10px', textAlign: 'center', marginBottom: '12px',
//       fontFamily: 'Georgia, serif', color: COLORS.text,
//     }}>
//       {lhsFormat === 'exponent' && (
//         <>
//           <em>{fnName}</em>
//           <sup style={{ fontSize: '0.7em' }}>2</sup>
//           <span style={{ color: colorOf(lhsColor), fontWeight: 500 }}>{lhs}</span>
//         </>
//       )}
//       {lhsFormat === 'plain' && (
//         <>
//           <em>{fnName}</em>{' '}
//           <span style={{ color: colorOf(lhsColor), fontWeight: 500 }}>{lhs}</span>
//         </>
//       )}
//       {lhsFormat === 'paren' && (
//         <>
//           <em>{fnName}</em>(
//           <span style={{ color: colorOf(lhsColor), fontWeight: 500 }}>{lhs}</span>)
//         </>
//       )}
//       {' '}={' '}
//       {rhsParts.map((part, i) => (
//         <span key={i} style={{
//           color: colorOf(part.color),
//           fontStyle: part.color !== 'text' ? 'italic' : 'normal',
//         }}>{part.text}</span>
//       ))}
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
//       opacity: disabled ? 0.4 : 1,
//       fontFamily: 'inherit', minWidth: '62px',
//       transition: 'background 0.15s, opacity 0.15s',
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

// /* ============================================================
//    Main exported component
//    ============================================================ */
// export default function NegativeAngleDemo({
//   scenario       = {},
//   initialTheta   = 35,
//   theta:           thetaProp,
//   onThetaChange,
//   thetaMin       = 10,
//   thetaMax       = 80,
//   stepDurationMs = 2500,
//   showSlider     = true,
//   maxWidth       = 1100,
//   svgMaxWidth    = 560,
// }) {
//   const mergedScenario = {
//     coordMode:    scenario.coordMode    ?? DEFAULT_SCENARIO.coordMode,
//     identity:     scenario.identity     ?? DEFAULT_SCENARIO.identity,
//     steps:        scenario.steps        ?? DEFAULT_SCENARIO.steps,
//     metricPairs:  scenario.metricPairs  ?? DEFAULT_SCENARIO.metricPairs,
//     sliderConfig: { ...DEFAULT_SLIDER,  ...(scenario.sliderConfig || {}) },
//   };

//   const sliderMin = mergedScenario.sliderConfig.min ?? mergedScenario.sliderConfig.toDisplay(thetaMin);
//   const sliderMax = mergedScenario.sliderConfig.max ?? mergedScenario.sliderConfig.toDisplay(thetaMax);

//   const isControlled = thetaProp !== undefined;
//   const [thetaInternal, setThetaInternal] = useState(initialTheta);
//   const theta = isControlled ? thetaProp : thetaInternal;
//   const setTheta = (v) => {
//     if (isControlled) onThetaChange?.(v);
//     else setThetaInternal(v);
//   };

//   const [currentStep, setCurrentStep] = useState(0);
//   const [isPlaying, setIsPlaying]     = useState(false);
//   const [speed, setSpeed]             = useState(1);

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

//   const th        = (theta * Math.PI) / 180;
//   const isAtEnd   = currentStep >= totalSteps;
//   const isAtStart = currentStep === 0;
//   const playLabel = isPlaying ? 'Pause' : (isAtEnd ? 'Replay' : 'Play');

//   const sliderCfg    = mergedScenario.sliderConfig;
//   const sliderValue  = sliderCfg.toDisplay(theta);
//   const handleSlider = (e) => setTheta(sliderCfg.fromDisplay(+e.target.value));

//   return (
//     <div style={{
//       maxWidth: `${maxWidth}px`,
//       margin: '0  auto',
//       background: COLORS.white,
//       border: `1px solid ${COLORS.borderSoft}`,
//       borderRadius: '14px',
//       boxShadow: '0 1px 2px rgba(15, 23, 42, 0.05), 0 10px 28px rgba(15, 23, 42, 0.07)',
//       padding: '22px',
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       color: COLORS.text,
//     }}>
//       <div style={{ display: 'flex', gap: '20px', width: '100%' }}>

//         <div style={{ flex: '2 1 0', minWidth: 0 }}>
//           <IdentityBar identity={mergedScenario.identity} />

//           {showSlider && (
//             <div style={{
//               display: 'flex', alignItems: 'center', gap: '12px',
//               padding: '0 4px', marginBottom: '12px',
//             }}>
//               <span style={{
//                 fontSize: '1.08rem', color: COLORS.textMuted,
//                 fontStyle: 'italic', minWidth: '16px',
//               }}>{sliderCfg.label}</span>
//               <input
//                 type="range"
//                 min={sliderMin}
//                 max={sliderMax}
//                 step={sliderCfg.step}
//                 value={sliderValue}
//                 onChange={handleSlider}
//                 style={{ flex: 1, accentColor: COLORS.deepBlue }}
//               />
//               <span style={{
//                 fontSize: '1.08rem', fontWeight: 500, color: COLORS.deepBlue,
//                 minWidth: '52px', textAlign: 'right', fontVariantNumeric: 'tabular-nums',
//               }}>{sliderValue}&deg;</span>
//             </div>
//           )}

//           <div style={{
//             background: COLORS.panelBg,
//             border: `1px solid ${COLORS.borderSoft}`,
//             borderRadius: '10px',
//             padding: '8px',
//           }}>
//             <div style={{ maxWidth: `${svgMaxWidth}px`, margin: '0 auto' }}>
//               <NegativeAngleCore
//                 theta={theta}
//                 coordMode={mergedScenario.coordMode}
//                 showP={!!activeState.showP}
//                 showPCoords={!!activeState.showPCoords}
//                 showPPrime={!!activeState.showPPrime}
//                 showPPrimeCoords={!!activeState.showPPrimeCoords}
//                 showCompare={!!activeState.showCompare}
//               />
//             </div>
//           </div>

//           <div style={{
//             display: 'flex', alignItems: 'center', justifyContent: 'center',
//             gap: '8px', marginTop: '12px', padding: '12px 14px',
//             background: COLORS.panelBg,
//             border: `1px solid ${COLORS.borderSoft}`,
//             borderRadius: '10px',
//           }}>
//             <ControlButton onClick={handleReset} disabled={isAtStart && !isPlaying} title="Reset">Reset</ControlButton>
//             <ControlButton onClick={handlePrev} disabled={isAtStart} title="Previous">&lsaquo; Prev</ControlButton>
//             <ControlButton onClick={handlePlayPause} title={isPlaying ? 'Pause' : 'Play'} primary>{playLabel}</ControlButton>
//             <ControlButton onClick={handleNext} disabled={isAtEnd} title="Next">Next &rsaquo;</ControlButton>
//             <select
//               value={speed}
//               onChange={e => setSpeed(+e.target.value)}
//               title="Animation speed"
//               style={{
//                 border: `1px solid ${COLORS.borderSoft}`,
//                 background: COLORS.white,
//                 color: COLORS.text,
//                 padding: '7px 10px', borderRadius: '6px',
//                 fontSize: '0.96rem', fontWeight: 500,
//                 fontFamily: 'inherit', cursor: 'pointer', marginLeft: '6px',
//               }}
//             >
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
//                   value={m.compute(th).toFixed(3)}
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
//           padding: '18px',
//           minHeight: '520px',
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


import React, { useState, useEffect, useRef } from 'react';

/* ============================================================
   NegativeAngleDemo — v3

   Changes from v2:
   - New prop `coordMode` on NegativeAngleCore: 'full' | 'sinOnly' | 'cosOnly'
       'sinOnly' : hide cos leg + "cos θ" label. Coord labels show
                   only the y-component (y = sin θ, y = −sin θ).
                   Compare line = "y = sin(−θ)".
       'cosOnly' : hide vertical sin legs + their labels + right-angle
                   markers. Coord labels show only the x-component
                   (x = cos θ for both P and P'). Compare line =
                   "x = cos(−θ)".
       'full'    : v2 behavior (backward-compat).
   - DEFAULT_SCENARIO now declares coordMode: 'sinOnly' (it's the sin proof).
   - NegativeAngleDemo reads scenario.coordMode and forwards it.
   - Cos-label collision clamp from v2 retained.
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
};

const FULL_STATE = {
  showP:            true,
  showPCoords:      true,
  showPPrime:       true,
  showPPrimeCoords: true,
  showCompare:      true,
  showMetrics:      true,
};

const DEFAULT_SLIDER = {
  label:       'θ',
  toDisplay:   (t) => t,
  fromDisplay: (v) => v,
  step:        1,
};

const DEFAULT_SCENARIO = {
  coordMode: 'sinOnly',
  identity: {
    fnName:    'sin',
    lhs:       '−θ',
    lhsColor:  'red',
    lhsFormat: 'paren',
    rhsParts: [
      { text: '−',     color: 'text' },
      { text: 'sin θ', color: 'midBlue' },
    ],
  },
  steps: [
    {
      rule: 'Setup',
      description: 'Place P on the unit circle at angle θ above the x-axis. The vertical leg from the x-axis up to P has signed length sin θ — this is the y-coordinate of P.',
      state: { showP: true, showPCoords: true },
    },
    {
      rule: 'Mirror twin',
      description: "Place P' at angle −θ — measured clockwise from the x-axis. P' sits directly below P with the same vertical magnitude, but on the other side of the x-axis. Its y-coordinate is −sin θ.",
      state: { showP: true, showPCoords: true, showPPrime: true, showPPrimeCoords: true },
    },
    {
      rule: 'Read off the identity',
      description: "P' is the point at angle −θ on the unit circle, so its y-coordinate IS sin(−θ). From the picture, that y-coordinate is −sin θ. Therefore sin(−θ) = −sin θ.",
      state: { ...FULL_STATE },
    },
  ],
  metricPairs: [
    { label: 'sin(−θ)', compute: (th) => Math.sin(-th) },
    { label: '−sin θ',  compute: (th) => -Math.sin(th) },
  ],
};

function colorOf(name) {
  return COLORS[name] || COLORS.text;
}

function FadeGroup({ visible, duration = 400, children }) {
  return (
    <g style={{ opacity: visible ? 1 : 0, transition: `opacity ${duration}ms ease` }}>
      {children}
    </g>
  );
}

/* ============================================================
   NegativeAngleCore — pure SVG scene
   ============================================================ */
function NegativeAngleCore({
  theta = 35,
  coordMode = 'full',
  showP = true,
  showPCoords = false,
  showPPrime = false,
  showPPrimeCoords = false,
  showCompare = false,
  cx = 320, cy = 240, R = 170,
  viewBox = '0 0 680 480',
}) {
  const th = (theta * Math.PI) / 180;
  const c  = Math.cos(th);
  const s  = Math.sin(th);

  const footX = cx + R * c;
  const Py    = cy - R * s;
  const PpY   = cy + R * s;

  const arcR = 40;
  const arcEndUp = { x: cx + arcR * c, y: cy - arcR * s };
  const arcEndDn = { x: cx + arcR * c, y: cy + arcR * s };

  const ra = 9;

  // Cos-label collision clamp (carried over from v2).
  const cosLabelMinX = cx + arcR + 38;
  const cosLabelX    = Math.max((cx + footX) / 2, cosLabelMinX);

  const showCosLeg  = coordMode !== 'sinOnly';
  const showSinLegs = coordMode !== 'cosOnly';

  // Coord label content per mode.
  const renderPCoord = () => {
    if (coordMode === 'sinOnly') {
      return (
        <text x={footX + 14} y={Py - 24} fontSize="15.6" fill={COLORS.text}>
          P: <tspan fontStyle="italic">y</tspan> = <tspan fontStyle="italic" fill={COLORS.midBlue}>sin θ</tspan>
        </text>
      );
    }
    if (coordMode === 'cosOnly') {
      return (
        <text x={footX + 14} y={Py - 24} fontSize="15.6" fill={COLORS.text}>
          P: <tspan fontStyle="italic">x</tspan> = <tspan fontStyle="italic" fill={COLORS.deepBlue}>cos θ</tspan>
        </text>
      );
    }
    return (
      <text x={footX + 14} y={Py - 24} fontSize="15.6" fill={COLORS.text}>
        P = (<tspan fontStyle="italic" fill={COLORS.deepBlue}>cos θ</tspan>
        <tspan>, </tspan>
        <tspan fontStyle="italic" fill={COLORS.midBlue}>sin θ</tspan>)
      </text>
    );
  };

  const renderPPrimeCoord = () => {
    if (coordMode === 'sinOnly') {
      return (
        <text x={footX + 14} y={PpY + 18} fontSize="15.6" fill={COLORS.text}>
          P&apos;: <tspan fontStyle="italic">y</tspan> = <tspan fontStyle="italic" fill={COLORS.midBlue}>−sin θ</tspan>
        </text>
      );
    }
    if (coordMode === 'cosOnly') {
      return (
        <text x={footX + 14} y={PpY + 18} fontSize="15.6" fill={COLORS.text}>
          P&apos;: <tspan fontStyle="italic">x</tspan> = <tspan fontStyle="italic" fill={COLORS.deepBlue}>cos θ</tspan>
        </text>
      );
    }
    return (
      <text x={footX + 14} y={PpY + 18} fontSize="15.6" fill={COLORS.text}>
        P&apos; = (<tspan fontStyle="italic" fill={COLORS.deepBlue}>cos θ</tspan>
        <tspan>, </tspan>
        <tspan fontStyle="italic" fill={COLORS.midBlue}>−sin θ</tspan>)
      </text>
    );
  };

  const renderCompare = () => {
    if (coordMode === 'sinOnly') {
      return (
        <text x={footX + 14} y={PpY + 38} fontSize="14.4"
              fill={COLORS.textMuted} fontStyle="italic">
          y = sin(−θ)
        </text>
      );
    }
    if (coordMode === 'cosOnly') {
      return (
        <text x={footX + 14} y={PpY + 38} fontSize="14.4"
              fill={COLORS.textMuted} fontStyle="italic">
          x = cos(−θ)
        </text>
      );
    }
    return (
      <text x={footX + 14} y={PpY + 38} fontSize="14.4"
            fill={COLORS.textMuted} fontStyle="italic">
        = (cos(−θ), sin(−θ))
      </text>
    );
  };

  return (
    <svg viewBox={viewBox} style={{ display: 'block', width: '100%' }} role="img">
      <title>Negative angle scene</title>

      {/* Axes */}
      <line x1={cx - R - 30} y1={cy} x2={cx + R + 30} y2={cy}
            stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.45" />
      <line x1={cx} y1={cy - R - 30} x2={cx} y2={cy + R + 30}
            stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.45" />

      {/* Axis labels */}
      <text x={cx + R + 36} y={cy + 5} fontSize="16.8"
            fill={COLORS.textMuted} fontStyle="italic">x</text>
      <text x={cx + 6} y={cy - R - 22} fontSize="16.8"
            fill={COLORS.textMuted} fontStyle="italic">y</text>

      {/* Unit circle */}
      <circle cx={cx} cy={cy} r={R} fill="none"
              stroke={COLORS.borderSec} strokeWidth="1" />

      {/* Origin */}
      <circle cx={cx} cy={cy} r={3} fill={COLORS.text} />
      <text x={cx - 10} y={cy + 20} textAnchor="end"
            fontSize="16.8" fill={COLORS.textMuted} fontStyle="italic">O</text>

      {/* Shared cos leg — only in 'full' or 'cosOnly' */}
      {showCosLeg && (
        <FadeGroup visible={showP || showPPrime}>
          <line x1={cx} y1={cy} x2={footX} y2={cy}
                stroke={COLORS.deepBlue} strokeWidth="2.8" strokeLinecap="round" />
          <text x={cosLabelX} y={cy + 22} textAnchor="middle"
                fontSize="16.8" fontStyle="italic" fontWeight="500"
                fill={COLORS.deepBlue}>cos θ</text>
        </FadeGroup>
      )}

      {/* cosOnly: gentle axis-style vertical connector from P through
          foot to P', showing they share the same x-coordinate. */}
      {coordMode === 'cosOnly' && (
        <FadeGroup visible={showP && showPPrime}>
          <line x1={footX} y1={Py} x2={footX} y2={PpY}
                stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.45" />
        </FadeGroup>
      )}

      {/* ===== P group (above x-axis) ===== */}
      <FadeGroup visible={showP}>
        {/* Ray O→P */}
        <line x1={cx} y1={cy} x2={footX} y2={Py}
              stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.55" />
        {/* Vertical sin θ leg — only in 'full' or 'sinOnly' */}
        {showSinLegs && (
          <>
            <line x1={footX} y1={cy} x2={footX} y2={Py}
                  stroke={COLORS.midBlue} strokeWidth="2.8" strokeLinecap="round" />
            <text x={footX + 10} y={(cy + Py) / 2 + 5}
                  fontSize="16.8" fontStyle="italic" fontWeight="500"
                  fill={COLORS.midBlue}>sin θ</text>
            <polyline points={`${footX - ra},${cy} ${footX - ra},${cy - ra} ${footX},${cy - ra}`}
                      fill="none" stroke={COLORS.textMuted} strokeWidth="0.8" />
          </>
        )}
        {/* Point P */}
        <circle cx={footX} cy={Py} r={4.5} fill={COLORS.text} />
        <text x={footX - 10} y={Py - 6} textAnchor="end"
              fontSize="18" fontWeight="600" fill={COLORS.text}>P</text>
        {/* θ arc */}
        <path d={`M ${cx + arcR} ${cy} A ${arcR} ${arcR} 0 0 0 ${arcEndUp.x} ${arcEndUp.y}`}
              fill="none" stroke={COLORS.red} strokeWidth="1.6" />
        <text
          x={cx + (arcR * 0.55) * Math.cos(th / 2)}
          y={cy - (arcR * 0.55) * Math.sin(th / 2) + 5}
          textAnchor="middle"
          fontSize="14.4" fontStyle="italic" fill={COLORS.red}>θ</text>
      </FadeGroup>

      {/* P coordinate label */}
      <FadeGroup visible={showPCoords}>
        {renderPCoord()}
      </FadeGroup>

      {/* ===== P' group (below x-axis) ===== */}
      <FadeGroup visible={showPPrime}>
        {/* Ray O→P' */}
        <line x1={cx} y1={cy} x2={footX} y2={PpY}
              stroke={COLORS.textMuted} strokeWidth="1" strokeOpacity="0.55" />
        {/* Vertical −sin θ leg — only in 'full' or 'sinOnly' */}
        {showSinLegs && (
          <>
            <line x1={footX} y1={cy} x2={footX} y2={PpY}
                  stroke={COLORS.midBlue} strokeWidth="2.8" strokeLinecap="round" />
            <text x={footX + 10} y={(cy + PpY) / 2 + 5}
                  fontSize="16.8" fontStyle="italic" fontWeight="500"
                  fill={COLORS.midBlue}>−sin θ</text>
            <polyline points={`${footX - ra},${cy} ${footX - ra},${cy + ra} ${footX},${cy + ra}`}
                      fill="none" stroke={COLORS.textMuted} strokeWidth="0.8" />
          </>
        )}
        {/* Point P' */}
        <circle cx={footX} cy={PpY} r={4.5} fill={COLORS.text} />
        <text x={footX - 10} y={PpY + 18} textAnchor="end"
              fontSize="18" fontWeight="600" fill={COLORS.text}>P&apos;</text>
        {/* −θ arc */}
        <path d={`M ${cx + arcR} ${cy} A ${arcR} ${arcR} 0 0 1 ${arcEndDn.x} ${arcEndDn.y}`}
              fill="none" stroke={COLORS.red} strokeWidth="1.6" />
        <text
          x={cx + (arcR * 0.55) * Math.cos(th / 2)}
          y={cy + (arcR * 0.55) * Math.sin(th / 2) + 5}
          textAnchor="middle"
          fontSize="14.4" fontStyle="italic" fill={COLORS.red}>−θ</text>
      </FadeGroup>

      {/* P' coordinate label */}
      <FadeGroup visible={showPPrimeCoords}>
        {renderPPrimeCoord()}
      </FadeGroup>

      {/* Compare-step second line */}
      <FadeGroup visible={showCompare}>
        {renderCompare()}
      </FadeGroup>
    </svg>
  );
}

/* ============================================================
   MiniSolutionPanel — step log with clickable jump
   ============================================================ */
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
        @keyframes nad-fade-in {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nad-step-log::-webkit-scrollbar { display: none; width: 0; height: 0; }
      `}</style>

      <div style={{
        fontSize: '0.84rem', textTransform: 'uppercase', letterSpacing: '1.6px',
        color: COLORS.textMuted, marginBottom: '16px', fontWeight: 600,
      }}>{stepsTitle}</div>

      <div
        ref={listRef}
        className="nad-step-log"
        style={{
          maxHeight: '500px',
          overflowY: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingRight: '2px',
        }}
      >
        {steps.length === 0 && (
          <div style={{
            background: COLORS.white,
            border: `1px dashed ${COLORS.borderSoft}`,
            borderRadius: '8px', padding: '40px 24px', textAlign: 'center',
            fontSize: '1.02rem', color: COLORS.textFaint, fontStyle: 'italic',
            minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {placeholder}
          </div>
        )}
        {steps.map((step, i) => {
          const isActive  = i === activeIndex;
          const clickable = !!onStepClick;
          return (
            <div
              key={i}
              role={clickable ? 'button' : undefined}
              tabIndex={clickable ? 0 : undefined}
              onClick={clickable ? () => onStepClick(i) : undefined}
              onKeyDown={clickable ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onStepClick(i); }
              } : undefined}
              onMouseEnter={clickable && !isActive ? (e) => {
                e.currentTarget.style.background = COLORS.white;
              } : undefined}
              onMouseLeave={clickable && !isActive ? (e) => {
                e.currentTarget.style.background = 'transparent';
              } : undefined}
              style={{
                background: isActive ? COLORS.white : 'transparent',
                border: isActive ? `2px solid ${COLORS.deepBlue}` : `2px solid transparent`,
                borderRadius: '8px',
                padding: '12px 14px',
                marginBottom: '6px',
                cursor: clickable ? 'pointer' : 'default',
                transition: 'background 0.2s ease, border-color 0.2s ease',
                animation: 'nad-fade-in 0.35s ease',
                outline: 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <span style={{
                  display: 'inline-block', fontSize: '0.864rem', fontWeight: 700,
                  color: COLORS.white,
                  background: isActive ? COLORS.deepBlue : COLORS.textFaint,
                  padding: '3px 9px', borderRadius: '4px', flexShrink: 0,
                  fontVariantNumeric: 'tabular-nums',
                  transition: 'background 0.2s ease',
                }}>{i + 1}</span>
                <span style={{
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '1.104rem',
                  color: isActive ? COLORS.deepBlue : COLORS.textMuted,
                  transition: 'color 0.2s ease',
                }}>{step.rule}</span>
              </div>
              <p style={{
                fontSize: '0.96rem',
                color: isActive ? COLORS.text : COLORS.textMuted,
                lineHeight: 1.5, margin: 0, paddingLeft: '42px',
                transition: 'color 0.2s ease',
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
  const { fnName = 'sin', lhs, lhsColor = 'red', lhsFormat = 'paren', rhsParts = [] } = identity;
  return (
    <div style={{
      fontSize: '1.26rem', padding: '14px 18px',
      background: COLORS.panelBg,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '10px', textAlign: 'center', marginBottom: '12px',
      fontFamily: 'Georgia, serif', color: COLORS.text,
    }}>
      {lhsFormat === 'exponent' && (
        <>
          <em>{fnName}</em>
          <sup style={{ fontSize: '0.7em' }}>2</sup>
          <span style={{ color: colorOf(lhsColor), fontWeight: 500 }}>{lhs}</span>
        </>
      )}
      {lhsFormat === 'plain' && (
        <>
          <em>{fnName}</em>{' '}
          <span style={{ color: colorOf(lhsColor), fontWeight: 500 }}>{lhs}</span>
        </>
      )}
      {lhsFormat === 'paren' && (
        <>
          <em>{fnName}</em>(
          <span style={{ color: colorOf(lhsColor), fontWeight: 500 }}>{lhs}</span>)
        </>
      )}
      {' '}={' '}
      {rhsParts.map((part, i) => (
        <span key={i} style={{
          color: colorOf(part.color),
          fontStyle: part.color !== 'text' ? 'italic' : 'normal',
        }}>{part.text}</span>
      ))}
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
      opacity: disabled ? 0.4 : 1,
      fontFamily: 'inherit', minWidth: '62px',
      transition: 'background 0.15s, opacity 0.15s',
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

/* ============================================================
   Main exported component
   ============================================================ */
export default function NegativeAngleDemo({
  scenario       = {},
  initialTheta   = 35,
  theta:           thetaProp,
  onThetaChange,
  thetaMin       = 10,
  thetaMax       = 80,
  stepDurationMs = 2500,
  showSlider     = true,
  maxWidth       = 1100,
  svgMaxWidth    = 560,
}) {
  const mergedScenario = {
    coordMode:    scenario.coordMode    ?? DEFAULT_SCENARIO.coordMode,
    identity:     scenario.identity     ?? DEFAULT_SCENARIO.identity,
    steps:        scenario.steps        ?? DEFAULT_SCENARIO.steps,
    metricPairs:  scenario.metricPairs  ?? DEFAULT_SCENARIO.metricPairs,
    sliderConfig: { ...DEFAULT_SLIDER,  ...(scenario.sliderConfig || {}) },
  };

  const sliderMin = mergedScenario.sliderConfig.min ?? mergedScenario.sliderConfig.toDisplay(thetaMin);
  const sliderMax = mergedScenario.sliderConfig.max ?? mergedScenario.sliderConfig.toDisplay(thetaMax);

  const isControlled = thetaProp !== undefined;
  const [thetaInternal, setThetaInternal] = useState(initialTheta);
  const theta = isControlled ? thetaProp : thetaInternal;
  const setTheta = (v) => {
    if (isControlled) onThetaChange?.(v);
    else setThetaInternal(v);
  };

  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying]     = useState(false);
  const [speed, setSpeed]             = useState(1);

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

  const th        = (theta * Math.PI) / 180;
  const isAtEnd   = currentStep >= totalSteps;
  const isAtStart = currentStep === 0;
  const playLabel = isPlaying ? 'Pause' : (isAtEnd ? 'Replay' : 'Play');

  const sliderCfg    = mergedScenario.sliderConfig;
  const sliderValue  = sliderCfg.toDisplay(theta);
  const handleSlider = (e) => setTheta(sliderCfg.fromDisplay(+e.target.value));

  return (
    <div style={{
      maxWidth: `${maxWidth}px`,
      margin: '0  auto',
      background: COLORS.white,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: '14px',
      boxShadow: '0 1px 2px rgba(15, 23, 42, 0.05), 0 10px 28px rgba(15, 23, 42, 0.07)',
      padding: '22px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: COLORS.text,
    }}>
      <div style={{ display: 'flex', gap: '20px', width: '100%' }}>

        <div style={{ flex: '2 1 0', minWidth: 0 }}>
          <IdentityBar identity={mergedScenario.identity} />

          {showSlider && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '0 4px', marginBottom: '12px',
            }}>
              <span style={{
                fontSize: '1.08rem', color: COLORS.textMuted,
                fontStyle: 'italic', minWidth: '16px',
              }}>{sliderCfg.label}</span>
              <input
                type="range"
                min={sliderMin}
                max={sliderMax}
                step={sliderCfg.step}
                value={sliderValue}
                onChange={handleSlider}
                style={{ flex: 1, accentColor: COLORS.deepBlue }}
              />
              <span style={{
                fontSize: '1.08rem', fontWeight: 500, color: COLORS.deepBlue,
                minWidth: '52px', textAlign: 'right', fontVariantNumeric: 'tabular-nums',
              }}>{sliderValue}&deg;</span>
            </div>
          )}

          <div style={{
            background: COLORS.panelBg,
            border: `1px solid ${COLORS.borderSoft}`,
            borderRadius: '10px',
            padding: '8px',
          }}>
            <div style={{ maxWidth: `${svgMaxWidth}px`, margin: '0 auto' }}>
              <NegativeAngleCore
                theta={theta}
                coordMode={mergedScenario.coordMode}
                showP={!!activeState.showP}
                showPCoords={!!activeState.showPCoords}
                showPPrime={!!activeState.showPPrime}
                showPPrimeCoords={!!activeState.showPPrimeCoords}
                showCompare={!!activeState.showCompare}
              />
            </div>
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '8px', marginTop: '12px', padding: '12px 14px',
            background: COLORS.panelBg,
            border: `1px solid ${COLORS.borderSoft}`,
            borderRadius: '10px',
          }}>
            <ControlButton onClick={handleReset} disabled={isAtStart && !isPlaying} title="Reset">Reset</ControlButton>
            <ControlButton onClick={handlePrev} disabled={isAtStart} title="Previous">&lsaquo; Prev</ControlButton>
            <ControlButton onClick={handlePlayPause} title={isPlaying ? 'Pause' : 'Play'} primary>{playLabel}</ControlButton>
            <ControlButton onClick={handleNext} disabled={isAtEnd} title="Next">Next &rsaquo;</ControlButton>
            <select
              value={speed}
              onChange={e => setSpeed(+e.target.value)}
              title="Animation speed"
              style={{
                border: `1px solid ${COLORS.borderSoft}`,
                background: COLORS.white,
                color: COLORS.text,
                padding: '7px 10px', borderRadius: '6px',
                fontSize: '0.96rem', fontWeight: 500,
                fontFamily: 'inherit', cursor: 'pointer', marginLeft: '6px',
              }}
            >
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
                  value={m.compute(th).toFixed(3)}
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
          padding: '18px',
          minHeight: '520px',
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