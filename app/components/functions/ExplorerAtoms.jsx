// // // ============================================================
// // // ExplorerAtoms.jsx
// // // Generic primitives + layout chrome + alt views.
// // // Imports tokens from FunctionExplorer.jsx
// // // ============================================================

// // import React, { useState, useRef, useEffect } from 'react';
// // import { T } from './FunctionExplorer';

// // // ============================================================
// // // One-time keyframes / global rule injection
// // // ============================================================
// // let _injected = false;
// // export function injectStyles() {
// //   if (_injected || typeof document === 'undefined') return;
// //   _injected = true;
// //   const style = document.createElement('style');
// //   style.textContent = `
// //     @keyframes fexp-fade-in {
// //       from { opacity: 0; transform: translateY(-2px); }
// //       to   { opacity: 1; transform: translateY(0); }
// //     }
// //     .fexp-no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
// //     .fexp-no-scrollbar::-webkit-scrollbar { width: 0; height: 0; display: none; }
// //     .fexp-tooltip-host:hover > .fexp-tooltip { opacity: 1; }
// //   `;
// //   document.head.appendChild(style);
// // }

// // // ============================================================
// // // TOOLTIP
// // // Wraps any element; shows a slate tooltip on hover.
// // // ============================================================
// // export function Tooltip({ content, placement = 'bottom', children, style }) {
// //   const place = tooltipPlacement(placement);
// //   return (
// //     <span className="fexp-tooltip-host" style={{ position: 'relative', display: 'inline-flex', ...style }}>
// //       {children}
// //       <span
// //         className="fexp-tooltip"
// //         style={{
// //           position: 'absolute',
// //           background: T.c.slateD,
// //           color: '#fff',
// //           padding: '6px 9px',
// //           borderRadius: T.radius.sm,
// //           fontSize: 11,
// //           lineHeight: 1.4,
// //           whiteSpace: 'normal',
// //           width: 'max-content',
// //           maxWidth: 220,
// //           opacity: 0,
// //           pointerEvents: 'none',
// //           transition: 'opacity 120ms',
// //           zIndex: 100,
// //           fontFamily: T.font.sans,
// //           fontWeight: 400,
// //           letterSpacing: '-0.005em',
// //           boxShadow: '0 4px 12px rgba(15,23,42,0.18)',
// //           ...place,
// //         }}
// //       >
// //         {content}
// //       </span>
// //     </span>
// //   );
// // }
// // function tooltipPlacement(p) {
// //   switch (p) {
// //     case 'top':    return { bottom: 'calc(100% + 6px)', left: '50%', transform: 'translateX(-50%)' };
// //     case 'right':  return { left: 'calc(100% + 8px)',   top:  '50%', transform: 'translateY(-50%)' };
// //     case 'left':   return { right:'calc(100% + 8px)',   top:  '50%', transform: 'translateY(-50%)' };
// //     default:       return { top:  'calc(100% + 6px)',   left: '50%', transform: 'translateX(-50%)' };
// //   }
// // }

// // // ============================================================
// // // ACCORDION
// // // ============================================================
// // export function Accordion({ title, summary, defaultOpen = false, children }) {
// //   const [open, setOpen] = useState(defaultOpen);
// //   return (
// //     <div style={{ borderBottom: `1px solid ${T.border.soft}` }}>
// //       <button
// //         onClick={() => setOpen(o => !o)}
// //         style={{
// //           width: '100%',
// //           display: 'flex',
// //           alignItems: 'center',
// //           justifyContent: 'space-between',
// //           padding: '10px 14px',
// //           textAlign: 'left',
// //           gap: 8,
// //           background: 'none',
// //           border: 'none',
// //           cursor: 'pointer',
// //           fontFamily: T.font.sans,
// //           transition: 'background 120ms',
// //         }}
// //         onMouseEnter={e => { e.currentTarget.style.background = T.bg.subtle; }}
// //         onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
// //       >
// //         <span style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
// //           <svg
// //             width="14" height="14" viewBox="0 0 24 24" fill="none"
// //             stroke={open ? T.c.blue : T.text.faint}
// //             strokeWidth="2.5" strokeLinecap="round"
// //             style={{ flexShrink: 0, transition: 'transform 200ms, stroke 120ms', transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
// //           >
// //             <polyline points="9 18 15 12 9 6" />
// //           </svg>
// //           <span style={{ fontSize: 12, fontWeight: 600, color: T.text.strong, letterSpacing: '-0.005em' }}>{title}</span>
// //         </span>
// //         {!open && summary && (
// //           <span style={{
// //             fontFamily: T.font.mono, fontSize: 11, color: T.text.faint,
// //             whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
// //             marginLeft: 8, maxWidth: '55%',
// //           }}>{summary}</span>
// //         )}
// //       </button>
// //       {open && (
// //         <div style={{
// //           padding: '2px 14px 12px',
// //           animation: 'fexp-fade-in 220ms cubic-bezier(0.4, 0, 0.2, 1)',
// //         }}>
// //           {children}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // // ============================================================
// // // PROP ROW  (key / value)
// // // ============================================================
// // export function PropRow({ k, v, mono = false }) {
// //   return (
// //     <div style={{
// //       display: 'grid',
// //       gridTemplateColumns: '100px 1fr',
// //       gap: 8,
// //       padding: '4px 0',
// //       fontSize: 12,
// //       alignItems: 'baseline',
// //     }}>
// //       <span style={{ color: T.text.muted, fontSize: 11 }}>{k}</span>
// //       <span style={{
// //         color: T.text.strong,
// //         fontFamily: mono ? T.font.mono : T.font.sans,
// //         fontSize: mono ? 11.5 : 12,
// //       }}>{v}</span>
// //     </div>
// //   );
// // }

// // // ============================================================
// // // TAG  (small colored badge)
// // // ============================================================
// // export function Tag({ variant = 'gray', children }) {
// //   const styles = {
// //     affirm: { background: T.bg.tintBlue, color: T.c.blueD, border: 'none' },
// //     gray:   { background: T.bg.pressed,  color: T.text.body, border: 'none' },
// //     dim:    { background: T.bg.subtle,   color: T.text.muted, border: `1px solid ${T.border.mid}` },
// //   };
// //   const s = styles[variant] || styles.gray;
// //   return (
// //     <span style={{
// //       display: 'inline-block',
// //       padding: '1px 7px',
// //       fontSize: 10.5,
// //       fontWeight: 500,
// //       borderRadius: 4,
// //       verticalAlign: 'middle',
// //       ...s,
// //     }}>{children}</span>
// //   );
// // }

// // // ============================================================
// // // LINK CHIP  (theory / tool / external calculator)
// // // ============================================================
// // export function LinkChip({ ext = false, children, onClick, href }) {
// //   const [hover, setHover] = useState(false);
// //   return (
// //     <a
// //       href={href || '#'}
// //       onClick={(e) => { if (onClick) { e.preventDefault(); onClick(); } }}
// //       onMouseEnter={() => setHover(true)}
// //       onMouseLeave={() => setHover(false)}
// //       style={{
// //         display: 'inline-flex',
// //         alignItems: 'center',
// //         gap: 4,
// //         padding: '2px 7px 2px 5px',
// //         borderRadius: 4,
// //         fontSize: 10.5,
// //         fontWeight: 500,
// //         letterSpacing: '-0.005em',
// //         background: hover ? T.bg.tintBlue2 : T.bg.tintBlue,
// //         color: T.c.blueD,
// //         border: `1px solid ${T.border.blue}`,
// //         textDecoration: 'none',
// //         transition: 'transform 120ms, box-shadow 120ms, background 120ms',
// //         cursor: 'pointer',
// //         whiteSpace: 'nowrap',
// //         transform: hover ? 'translateY(-1px)' : 'translateY(0)',
// //         boxShadow: hover ? T.shadow.s1 : 'none',
// //       }}
// //     >
// //       {children}
// //       {ext && <span style={{ marginLeft: 1, fontSize: 11, opacity: 0.7 }}>{'\u2197'}</span>}
// //     </a>
// //   );
// // }

// // // Convenience wrapper for the links row beneath an accordion body.
// // export function LinksRow({ children }) {
// //   return (
// //     <div style={{
// //       display: 'flex', flexWrap: 'wrap', gap: 4,
// //       marginTop: 10, paddingTop: 8,
// //       borderTop: `1px dashed ${T.border.soft}`,
// //     }}>{children}</div>
// //   );
// // }

// // // ============================================================
// // // FORM SWITCH
// // // ============================================================
// // export function FormSwitch({ options, value, onChange }) {
// //   return (
// //     <div style={{
// //       display: 'flex',
// //       background: T.bg.subtle,
// //       border: `1px solid ${T.border.soft}`,
// //       borderRadius: T.radius.sm,
// //       padding: 2,
// //       marginTop: 6,
// //       gap: 2,
// //     }}>
// //       {options.map(opt => {
// //         const active = opt === value;
// //         return (
// //           <button
// //             key={opt}
// //             onClick={() => onChange(opt)}
// //             style={{
// //               flex: 1,
// //               padding: '4px 6px',
// //               fontSize: 10.5,
// //               fontWeight: 500,
// //               color: active ? T.text.strong : T.text.muted,
// //               background: active ? '#fff' : 'transparent',
// //               boxShadow: active ? T.shadow.s1 : 'none',
// //               borderRadius: 3,
// //               fontFamily: T.font.mono,
// //               textAlign: 'center',
// //               border: 'none',
// //               cursor: 'pointer',
// //             }}
// //           >{opt}</button>
// //         );
// //       })}
// //     </div>
// //   );
// // }

// // // ============================================================
// // // MICRO-VIS: SignChart, MonotonicityStrip, ParentOverlay
// // // ============================================================
// // export function SignChart({ intervals }) {
// //   if (!intervals || intervals.length === 0) return null;
// //   return (
// //     <div style={{ margin: '8px 0 4px' }}>
// //       <div style={{
// //         display: 'flex', height: 18,
// //         borderRadius: 3, overflow: 'hidden',
// //         border: `1px solid ${T.border.mid}`,
// //         fontFamily: T.font.mono, fontWeight: 600, fontSize: 11,
// //       }}>
// //         {intervals.map((iv, i) => (
// //           <div key={i} style={{
// //             display: 'grid', placeItems: 'center', flex: 1,
// //             background: iv.sign === '+' ? T.c.blue : (iv.sign === '-' ? T.bg.pressed : T.bg.subtle),
// //             color: iv.sign === '+' ? '#fff' : T.text.muted,
// //           }}>{iv.sign}</div>
// //         ))}
// //       </div>
// //       <div style={{
// //         display: 'flex', justifyContent: 'space-around',
// //         marginTop: 3, fontFamily: T.font.mono, fontSize: 9.5, color: T.text.muted,
// //       }}>
// //         {intervals.map((iv, i) => (
// //           <span key={i}>{i === 0 ? fmt(iv.from) : ''}{i < intervals.length - 1 ? '' : ` ${fmt(iv.to)}`}</span>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export function MonotonicityStrip({ intervals }) {
// //   if (!intervals || intervals.length === 0) return null;
// //   return (
// //     <div style={{ margin: '8px 0 4px' }}>
// //       <div style={{
// //         display: 'flex', height: 16,
// //         borderRadius: 3, overflow: 'hidden',
// //         border: `1px solid ${T.border.mid}`,
// //         fontFamily: T.font.mono, fontWeight: 600, fontSize: 11,
// //       }}>
// //         {intervals.map((iv, i) => (
// //           <div key={i} style={{
// //             display: 'grid', placeItems: 'center', flex: 1,
// //             background: iv.dir === 'inc' ? T.c.blue : (iv.dir === 'dec' ? T.c.slate : T.bg.pressed),
// //             color: '#fff',
// //           }}>
// //             {iv.dir === 'inc' ? '\u2191 inc' : (iv.dir === 'dec' ? '\u2193 dec' : '\u2212')}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export function ParentOverlay() {
// //   // Static SVG hint of parent vs transformed. Real component would compute from data.
// //   return (
// //     <svg viewBox="0 0 320 110" preserveAspectRatio="none"
// //       style={{
// //         display: 'block', width: '100%', height: 110,
// //         background: T.bg.subtle, border: `1px solid ${T.border.soft}`,
// //         borderRadius: T.radius.sm, marginTop: 8,
// //       }}
// //     >
// //       <line x1="0" y1="55" x2="320" y2="55" stroke={T.border.strong} strokeWidth="1" />
// //       <line x1="160" y1="0" x2="160" y2="110" stroke={T.border.strong} strokeWidth="1" />
// //       <path d="M 30 0 Q 100 100 160 100 Q 220 100 290 0" fill="none" stroke={T.text.faint} strokeWidth="1.5" strokeDasharray="4 3" />
// //       <path d="M 0 30 Q 80 70 160 75 Q 240 70 320 30" fill="none" stroke={T.c.blue} strokeWidth="2" />
// //       <text x="6" y="14" fontFamily={T.font.mono} fontSize="9" fill={T.text.faint}>parent</text>
// //       <text x="6" y="105" fontFamily={T.font.mono} fontSize="9" fill={T.c.blue}>transformed</text>
// //     </svg>
// //   );
// // }

// // // ============================================================
// // // HEADER
// // // ============================================================
// // export function Header({ brandName, formula, formulaLabel }) {
// //   return (
// //     <div style={{
// //       display: 'flex', alignItems: 'center', gap: 14,
// //       padding: '0 14px',
// //       borderBottom: `1px solid ${T.border.soft}`,
// //       background: 'linear-gradient(180deg, #fff 0%, #fcfcfd 100%)',
// //     }}>
// //       <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
// //         <span style={{
// //           width: 26, height: 26,
// //           display: 'grid', placeItems: 'center',
// //           background: `linear-gradient(135deg, ${T.c.blue}, ${T.c.blueD})`,
// //           color: '#fff',
// //           borderRadius: T.radius.sm,
// //           fontFamily: T.font.mono, fontSize: 14, fontWeight: 600,
// //           boxShadow: '0 1px 2px rgba(59,130,246,0.3)',
// //         }}>{'\u0192'}</span>
// //         <span style={{ fontWeight: 600, color: T.text.strong, fontSize: 13, letterSpacing: '-0.01em' }}>{brandName}</span>
// //       </div>

// //       <div style={{ width: 1, height: 22, background: T.border.mid, flexShrink: 0 }} />

// //       <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
// //         <span style={{
// //           fontFamily: T.font.mono, color: T.text.faint, fontSize: 11,
// //           letterSpacing: '0.05em', textTransform: 'uppercase',
// //         }}>{formulaLabel}</span>
// //         <span style={{
// //           fontFamily: T.font.mono, fontSize: 14, fontWeight: 500,
// //           color: T.text.strong,
// //           padding: '4px 10px',
// //           background: T.bg.subtle,
// //           border: `1px solid ${T.border.soft}`,
// //           borderRadius: T.radius.sm,
// //           whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
// //         }}>{formula}</span>
// //       </div>

// //       <div style={{ display: 'flex', gap: 2, flexShrink: 0 }}>
// //         <HeaderBtn ttContent={(<><b>Search</b>{' \u00B7 jump to a property or theory page'}</>)}>
// //           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
// //         </HeaderBtn>
// //         <HeaderBtn ttContent={(<><b>Settings</b>{' \u00B7 display preferences'}</>)}>
// //           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/></svg>
// //         </HeaderBtn>
// //         <HeaderBtn ttContent={(<><b>Export</b>{' \u00B7 download as PNG or SVG'}</>)}>
// //           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
// //         </HeaderBtn>
// //         <HeaderBtn ttContent={(<><b>Maximize</b>{' \u00B7 full-screen'}</>)}>
// //           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
// //         </HeaderBtn>
// //       </div>
// //     </div>
// //   );
// // }
// // function HeaderBtn({ children, ttContent }) {
// //   const [hover, setHover] = useState(false);
// //   return (
// //     <Tooltip content={ttContent}>
// //       <button
// //         onMouseEnter={() => setHover(true)}
// //         onMouseLeave={() => setHover(false)}
// //         style={{
// //           width: 28, height: 28,
// //           display: 'grid', placeItems: 'center',
// //           borderRadius: T.radius.sm,
// //           color: hover ? T.text.strong : T.text.muted,
// //           background: hover ? T.bg.hover : 'transparent',
// //           border: 'none',
// //           cursor: 'pointer',
// //           transition: 'background 120ms, color 120ms',
// //         }}
// //       ><span style={{ width: 15, height: 15, display: 'inline-block' }}>{React.cloneElement(children, { width: 15, height: 15 })}</span></button>
// //     </Tooltip>
// //   );
// // }

// // // ============================================================
// // // FUNCBAR  (expression input — replaces v1 mock&apos;s param pills)
// // // ============================================================
// // export function Funcbar({ expression, onExpressionChange, family }) {
// //   const [draft, setDraft] = useState(expression);
// //   useEffect(() => { setDraft(expression); }, [expression]);
// //   const commit = () => { if (draft !== expression) onExpressionChange(draft); };
// //   return (
// //     <div style={{
// //       display: 'flex', alignItems: 'center', gap: 14,
// //       padding: '0 14px',
// //       borderBottom: `1px solid ${T.border.soft}`,
// //       background: T.bg.panel, overflow: 'hidden',
// //     }}>
// //       <span style={{
// //         fontFamily: T.font.mono, fontSize: 10,
// //         textTransform: 'uppercase', color: T.text.faint,
// //         letterSpacing: '0.08em', flexShrink: 0,
// //       }}>expression</span>

// //       <input
// //         value={draft}
// //         onChange={(e) => setDraft(e.target.value)}
// //         onBlur={commit}
// //         onKeyDown={(e) => { if (e.key === 'Enter') commit(); }}
// //         spellCheck={false}
// //         style={{
// //           flex: 1,
// //           minWidth: 0,
// //           fontFamily: T.font.mono, fontSize: 13,
// //           padding: '5px 10px',
// //           background: T.bg.subtle,
// //           color: T.text.strong,
// //           border: `1px solid ${T.border.soft}`,
// //           borderRadius: T.radius.sm,
// //           outline: 'none',
// //         }}
// //       />

// //       {family && (
// //         <span style={{
// //           display: 'inline-flex', alignItems: 'center', gap: 5,
// //           padding: '3px 9px',
// //           background: T.bg.subtle,
// //           border: `1px solid ${T.border.mid}`,
// //           borderRadius: 999,
// //           fontSize: 11.5, fontWeight: 500,
// //           color: T.c.blueD,
// //           letterSpacing: '-0.005em',
// //           flexShrink: 0,
// //         }}>{family}</span>
// //       )}

// //       <div style={{ marginLeft: 'auto', display: 'flex', gap: 6, flexShrink: 0 }}>
// //         <FuncbarBtn label="Compare" />
// //         <FuncbarBtn label="Animate\u2026" />
// //       </div>
// //     </div>
// //   );
// // }
// // function FuncbarBtn({ label }) {
// //   const [hover, setHover] = useState(false);
// //   return (
// //     <button
// //       onMouseEnter={() => setHover(true)}
// //       onMouseLeave={() => setHover(false)}
// //       style={{
// //         padding: '4px 10px',
// //         background: hover ? T.bg.subtle : '#fff',
// //         border: `1px solid ${hover ? T.border.strong : T.border.mid}`,
// //         borderRadius: T.radius.sm,
// //         fontSize: 12, fontWeight: 500,
// //         color: T.text.body,
// //         cursor: 'pointer',
// //         transition: 'all 120ms',
// //       }}
// //     >{label}</button>
// //   );
// // }

// // // ============================================================
// // // LEFT RAIL  (overlays + annotations toggles)
// // // ============================================================
// // export function LeftRail({ overlays, annotations, onToggleOverlay, onToggleAnnot, onReset }) {
// //   return (
// //     <nav style={{
// //       borderRight: `1px solid ${T.border.soft}`,
// //       background: T.bg.subtle,
// //       display: 'flex',
// //       flexDirection: 'column',
// //       alignItems: 'center',
// //       padding: '6px 0',
// //       gap: 1,
// //     }}>
// //       <RailLabel>OVRL</RailLabel>
// //       <RailToggle on={overlays.fp}   onClick={() => onToggleOverlay('fp')}   tt={(<><b>Show f&apos;(x)</b>{' \u00B7 derivative curve'}</>)}><IcDeriv /></RailToggle>
// //       <RailToggle on={overlays.fpp}  onClick={() => onToggleOverlay('fpp')}  tt={(<><b>Show f\u2033(x)</b>{' \u00B7 second derivative'}</>)}><IcDeriv2 /></RailToggle>
// //       <RailToggle on={overlays.anti} onClick={() => onToggleOverlay('anti')} tt={(<><b>Show F(x)</b>{' \u00B7 antiderivative (cumulative integral)'}</>)}><IcAnti /></RailToggle>
// //       <RailToggle on={overlays.inv}  onClick={() => onToggleOverlay('inv')}  tt={(<><b>Show f\u207B\u00B9(x)</b>{' \u00B7 inverse via reflection across y = x'}</>)}><IcInv /></RailToggle>

// //       <RailDivider />
// //       <RailLabel>MRKS</RailLabel>

// //       <RailToggle on={annotations.roots}   onClick={() => onToggleAnnot('roots')}   tt={(<><b>Roots</b>{' \u00B7 dots at x-intercepts'}</>)}><IcRoots /></RailToggle>
// //       <RailToggle on={annotations.extrema} onClick={() => onToggleAnnot('extrema')} tt={(<><b>Extrema</b>{' \u00B7 local/global min/max'}</>)}><IcExt /></RailToggle>
// //       <RailToggle on={annotations.inflect} onClick={() => onToggleAnnot('inflect')} tt={(<><b>Inflection points</b>{' \u00B7 concavity changes'}</>)}><IcInfl /></RailToggle>
// //       <RailToggle on={annotations.asymp}   onClick={() => onToggleAnnot('asymp')}   tt={(<><b>Asymptotes</b>{' \u00B7 vertical asymptote lines'}</>)}><IcAsymp /></RailToggle>
// //       <RailToggle on={annotations.tangent} onClick={() => onToggleAnnot('tangent')} tt={(<><b>Tangent at cursor</b>{' \u00B7 line touching f at cursor x'}</>)}><IcTan /></RailToggle>
// //       <RailToggle on={annotations.area}    onClick={() => onToggleAnnot('area')}    tt={(<><b>Shaded area</b>{' \u00B7 signed area under f'}</>)}><IcArea /></RailToggle>

// //       <div style={{ flex: 1, minHeight: 4 }} />

// //       <RailBtn onClick={onReset} tt={(<><b>Reset</b>{' \u00B7 turn off all toggles'}</>)}><IcReset /></RailBtn>
// //     </nav>
// //   );
// // }

// // function RailLabel({ children }) {
// //   return (
// //     <div style={{
// //       fontSize: 8, fontWeight: 600, letterSpacing: '0.1em',
// //       color: T.text.faint, textTransform: 'uppercase',
// //       margin: '6px 0 3px', textAlign: 'center',
// //       fontFamily: T.font.mono,
// //     }}>{children}</div>
// //   );
// // }
// // function RailDivider() {
// //   return <div style={{ width: 22, height: 1, background: T.border.mid, margin: '6px auto 4px' }} />;
// // }
// // function RailToggle({ on, onClick, children, tt }) {
// //   return (
// //     <Tooltip content={tt} placement="right">
// //       <button
// //         onClick={onClick}
// //         style={{
// //           width: 34, height: 32,
// //           display: 'grid', placeItems: 'center',
// //           borderRadius: T.radius.sm,
// //           color: on ? T.c.blueD : T.text.muted,
// //           background: on ? T.bg.tintBlue : 'transparent',
// //           boxShadow: on ? T.shadow.s1 : 'none',
// //           border: 'none',
// //           position: 'relative',
// //           cursor: 'pointer',
// //           transition: 'all 120ms',
// //         }}
// //       >
// //         {on && <span style={{
// //           position: 'absolute',
// //           left: -10, top: 6, bottom: 6, width: 3,
// //           borderRadius: '0 2px 2px 0', background: T.c.blue,
// //         }} />}
// //         {children}
// //       </button>
// //     </Tooltip>
// //   );
// // }
// // function RailBtn({ onClick, children, tt }) {
// //   return (
// //     <Tooltip content={tt} placement="right">
// //       <button
// //         onClick={onClick}
// //         style={{
// //           width: 34, height: 32,
// //           display: 'grid', placeItems: 'center',
// //           borderRadius: T.radius.sm,
// //           color: T.text.muted, background: 'transparent',
// //           border: 'none', cursor: 'pointer', transition: 'all 120ms',
// //         }}
// //         onMouseEnter={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = T.text.strong; e.currentTarget.style.boxShadow = T.shadow.s1; }}
// //         onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.text.muted; e.currentTarget.style.boxShadow = 'none'; }}
// //       >{children}</button>
// //     </Tooltip>
// //   );
// // }
// // const IcDeriv  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M4 18 L20 6"/></svg>;
// // const IcDeriv2 = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="4" y1="14" x2="20" y2="14"/></svg>;
// // const IcAnti   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 4c4 0 2 16 6 16"/></svg>;
// // const IcInv    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="4" y1="20" x2="20" y2="4"/><path d="M4 18 L20 6" opacity="0.4"/></svg>;
// // const IcRoots  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="12" r="2.5"/></svg>;
// // const IcExt    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 18 Q12 4 20 18"/><circle cx="12" cy="11" r="2.2" fill="currentColor"/></svg>;
// // const IcInfl   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 18 C8 18 8 6 12 6 S16 18 20 18"/><circle cx="12" cy="12" r="1.8" fill="currentColor"/></svg>;
// // const IcAsymp  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2"><line x1="4" y1="20" x2="20" y2="20"/><line x1="6" y1="4" x2="6" y2="22"/></svg>;
// // const IcTan    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 20 Q12 4 20 20"/><line x1="3" y1="18" x2="21" y2="6" strokeDasharray="3 2"/></svg>;
// // const IcArea   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 18 Q12 6 20 18 L20 20 L4 20 Z" fill="currentColor" fillOpacity="0.25"/></svg>;
// // const IcReset  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>;

// // // ============================================================
// // // GRAPH VIEW SWITCH  (overlay above the graph)
// // // ============================================================
// // export function GraphViewSwitch({ value, onChange }) {
// //   const opts = [
// //     { v: 'graph', label: 'Graph' },
// //     { v: 'table', label: 'Table' },
// //     { v: 'map',   label: 'Map' },
// //   ];
// //   return (
// //     <div style={{
// //       position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)',
// //       background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(6px)',
// //       border: `1px solid ${T.border.mid}`,
// //       borderRadius: T.radius.sm,
// //       padding: 2, display: 'flex', gap: 2,
// //       zIndex: 10, boxShadow: T.shadow.s1,
// //     }}>
// //       {opts.map(opt => (
// //         <button key={opt.v} onClick={() => onChange(opt.v)} style={{
// //           padding: '3px 9px', fontSize: 10.5, fontWeight: 500,
// //           color: value === opt.v ? T.c.blueD : T.text.muted,
// //           background: value === opt.v ? T.bg.tintBlue : 'transparent',
// //           border: 'none', borderRadius: 3, cursor: 'pointer',
// //           fontFamily: T.font.sans, letterSpacing: '-0.005em',
// //         }}>{opt.label}</button>
// //       ))}
// //     </div>
// //   );
// // }

// // // ============================================================
// // // RIGHT TABS RAIL
// // // ============================================================
// // export function RightTabs({ active, onChange }) {
// //   const tabs = [
// //     { id: 'properties', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>, tt: (<><b>Properties</b>{' \u00B7 what\u2019s true about f(x)'}</>) },
// //     { id: 'transforms', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>, tt: (<><b>Transformations &amp; ops</b>{' \u00B7 parent / shifts / composition'}</>) },
// //     { id: 'calculus',   icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 4c-3 0-4 3-5 8s-2 8-5 8"/><line x1="6" y1="12" x2="18" y2="12"/></svg>, tt: (<><b>Calculus bridge</b>{' \u00B7 derivative, integral, tangent'}</>) },
// //     { id: 'theory',     icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>, tt: (<><b>Theory &amp; reading</b>{' \u00B7 curated material'}</>) },
// //   ];
// //   return (
// //     <nav style={{
// //       borderLeft: `1px solid ${T.border.soft}`,
// //       background: T.bg.subtle,
// //       display: 'flex', flexDirection: 'column',
// //       alignItems: 'center', padding: '8px 0', gap: 2,
// //     }}>
// //       {tabs.map(t => {
// //         const isActive = active === t.id;
// //         return (
// //           <Tooltip key={t.id} content={t.tt} placement="left">
// //             <button
// //               onClick={() => onChange(t.id)}
// //               style={{
// //                 width: 34, height: 34, position: 'relative',
// //                 display: 'grid', placeItems: 'center',
// //                 borderRadius: T.radius.sm,
// //                 color: isActive ? T.c.blueD : T.text.muted,
// //                 background: isActive ? '#fff' : 'transparent',
// //                 boxShadow: isActive ? T.shadow.s1 : 'none',
// //                 border: 'none', cursor: 'pointer',
// //                 transition: 'all 120ms',
// //               }}
// //             >
// //               {isActive && <span style={{
// //                 position: 'absolute',
// //                 right: -10, top: 7, bottom: 7, width: 3,
// //                 background: T.c.blue, borderRadius: '2px 0 0 2px',
// //               }} />}
// //               <span style={{ width: 16, height: 16, display: 'inline-block', color: 'currentColor' }}>
// //                 {React.cloneElement(t.icon, { width: 16, height: 16 })}
// //               </span>
// //             </button>
// //           </Tooltip>
// //         );
// //       })}
// //     </nav>
// //   );
// // }

// // // ============================================================
// // // RIGHT PANEL  (header + body)
// // // ============================================================
// // export function RightPanel({ title, subtitle, density, onDensityChange, children }) {
// //   return (
// //     <aside style={{
// //       borderLeft: `1px solid ${T.border.soft}`,
// //       background: T.bg.panel,
// //       display: 'flex', flexDirection: 'column',
// //       overflow: 'hidden',
// //     }}>
// //       <div style={{
// //         padding: '12px 14px 10px',
// //         borderBottom: `1px solid ${T.border.soft}`,
// //         display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
// //       }}>
// //         <div style={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 0 }}>
// //           <div style={{ fontSize: 13, fontWeight: 600, color: T.text.strong, letterSpacing: '-0.005em' }}>{title}</div>
// //           <div style={{ fontSize: 10.5, color: T.text.faint, letterSpacing: '0.02em' }}>{subtitle}</div>
// //         </div>
// //         <div style={{
// //           display: 'flex', background: T.bg.subtle,
// //           borderRadius: T.radius.sm, padding: 2,
// //           border: `1px solid ${T.border.soft}`,
// //           flexShrink: 0,
// //         }}>
// //           {['compact', 'roomy'].map(d => (
// //             <button key={d} onClick={() => onDensityChange(d)} style={{
// //               padding: '2px 7px', fontSize: 10.5, fontWeight: 500,
// //               color: density === d ? T.text.strong : T.text.muted,
// //               background: density === d ? '#fff' : 'transparent',
// //               boxShadow: density === d ? T.shadow.s1 : 'none',
// //               borderRadius: 4, border: 'none', cursor: 'pointer',
// //             }}>{d}</button>
// //           ))}
// //         </div>
// //       </div>
// //       <div className="fexp-no-scrollbar" style={{
// //         flex: 1, overflowY: 'auto', padding: '4px 0 12px',
// //       }}>{children}</div>
// //     </aside>
// //   );
// // }

// // // ============================================================
// // // INSIGHTS STRIP
// // // ============================================================
// // export function InsightsStrip({ defaults, pinned, onUnpin }) {
// //   return (
// //     <div className="fexp-no-scrollbar" style={{
// //       display: 'flex', alignItems: 'stretch', gap: 8,
// //       padding: '10px 14px',
// //       borderBottom: `1px solid ${T.border.soft}`,
// //       background: `linear-gradient(180deg, ${T.bg.subtle}, #fff)`,
// //       overflowX: 'auto',
// //     }}>
// //       {defaults.map(c => (
// //         <InsightCard key={c.id} card={c} />
// //       ))}
// //       {pinned.length > 0 && (
// //         <div style={{ flexShrink: 0, width: 1, background: T.border.mid, margin: '4px 4px', alignSelf: 'stretch' }} />
// //       )}
// //       {pinned.map(c => (
// //         <InsightCard key={c.id} card={c} pinned onUnpin={() => onUnpin(c.id)} />
// //       ))}
// //       <Tooltip content={(<><b>Pin a fact</b>{' \u00B7 choose any property to add as a card'}</>)} placement="top">
// //         <button style={{
// //           flexShrink: 0, minWidth: 44,
// //           background: 'transparent',
// //           border: `1px dashed ${T.border.mid}`,
// //           borderRadius: T.radius.md,
// //           display: 'grid', placeItems: 'center',
// //           color: T.text.faint, cursor: 'pointer',
// //           transition: 'all 140ms',
// //         }}
// //           onMouseEnter={(e) => { e.currentTarget.style.borderColor = T.c.blue; e.currentTarget.style.color = T.c.blue; e.currentTarget.style.background = T.bg.tintBlue; }}
// //           onMouseLeave={(e) => { e.currentTarget.style.borderColor = T.border.mid; e.currentTarget.style.color = T.text.faint; e.currentTarget.style.background = 'transparent'; }}
// //         >
// //           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
// //         </button>
// //       </Tooltip>
// //     </div>
// //   );
// // }
// // function InsightCard({ card, pinned = false, onUnpin }) {
// //   const [hover, setHover] = useState(false);
// //   return (
// //     <div
// //       onMouseEnter={() => setHover(true)}
// //       onMouseLeave={() => setHover(false)}
// //       style={{
// //         flexShrink: 0, minWidth: 140,
// //         background: pinned ? T.bg.tintBlue : '#fff',
// //         border: `1px ${pinned ? 'dashed' : 'solid'} ${pinned ? T.border.blue : T.border.soft}`,
// //         borderRadius: T.radius.md,
// //         padding: '7px 10px 8px',
// //         position: 'relative', cursor: 'pointer',
// //         transition: 'all 140ms',
// //         boxShadow: hover ? T.shadow.s1 : 'none',
// //         transform: hover ? 'translateY(-1px)' : 'none',
// //         display: 'flex', flexDirection: 'column', gap: 1,
// //       }}
// //     >
// //       <div style={{
// //         fontSize: 9.5, fontWeight: 500, color: pinned ? T.c.blueD : T.text.faint,
// //         letterSpacing: '0.08em', textTransform: 'uppercase',
// //         display: 'flex', alignItems: 'center', gap: 4,
// //       }}>
// //         <span style={{ width: 5, height: 5, borderRadius: '50%', background: T.c.blue, display: 'inline-block' }} />
// //         {card.label}
// //       </div>
// //       <div style={{ fontFamily: T.font.mono, fontSize: 13.5, fontWeight: 500, color: T.text.strong, letterSpacing: '-0.01em' }}>
// //         {card.value}
// //       </div>
// //       {card.sub && <div style={{ fontSize: 10.5, color: T.text.muted }}>{card.sub}</div>}
// //       {pinned && (
// //         <button
// //           onClick={(e) => { e.stopPropagation(); onUnpin && onUnpin(); }}
// //           style={{
// //             position: 'absolute', top: 5, right: 5,
// //             width: 16, height: 16,
// //             display: 'grid', placeItems: 'center',
// //             borderRadius: 3, color: T.text.faint,
// //             opacity: hover ? 0.8 : 0,
// //             background: 'transparent', border: 'none',
// //             cursor: 'pointer', transition: 'opacity 120ms',
// //           }}
// //         >
// //           <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
// //         </button>
// //       )}
// //     </div>
// //   );
// // }

// // // ============================================================
// // // STATUS BAR
// // // ============================================================
// // export function StatusBar({ cursor, viewport, mode }) {
// //   return (
// //     <div style={{
// //       display: 'flex', alignItems: 'center', gap: 14,
// //       padding: '0 14px',
// //       background: T.bg.subtle,
// //       fontFamily: T.font.mono, fontSize: 11, color: T.text.muted,
// //     }}>
// //       <StatGroup k="cursor">
// //         <Vstat>x:&nbsp;{cursor.x.toFixed(2)}</Vstat>
// //         <Vstat>y:&nbsp;{cursor.y.toFixed(2)}</Vstat>
// //       </StatGroup>
// //       <StatDivider />
// //       <StatGroup k="viewport">
// //         <Vstat>[{viewport.xMin.toFixed(1)}, {viewport.xMax.toFixed(1)}] &times; [{viewport.yMin.toFixed(1)}, {viewport.yMax.toFixed(1)}]</Vstat>
// //       </StatGroup>
// //       <StatDivider />
// //       <StatGroup k="mode">
// //         <Vstat>{mode}</Vstat>
// //       </StatGroup>
// //     </div>
// //   );
// // }
// // function StatGroup({ k, children }) {
// //   return (
// //     <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
// //       <span style={{ color: T.text.faint, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{k}</span>
// //       {children}
// //     </div>
// //   );
// // }
// // function Vstat({ children }) {
// //   return <span style={{ color: T.text.body, fontVariantNumeric: 'tabular-nums' }}>{children}</span>;
// // }
// // function StatDivider() {
// //   return <span style={{ width: 1, height: 12, background: T.border.mid }} />;
// // }

// // // ============================================================
// // // ALT VIEWS  (NumericTable, MappingDiagram)
// // // ============================================================
// // export function NumericTable({ fn, xMin, xMax, step = 0.5 }) {
// //   const rows = [];
// //   for (let x = xMin; x <= xMax + 1e-9; x += step) {
// //     let y;
// //     try { y = fn(x); } catch { y = NaN; }
// //     rows.push({ x, y });
// //   }
// //   return (
// //     <div style={{ padding: 24, overflow: 'auto', width: '100%', height: '100%' }}>
// //       <table style={{
// //         borderCollapse: 'collapse', fontFamily: T.font.mono, fontSize: 12, margin: '0 auto',
// //       }}>
// //         <thead>
// //           <tr>
// //             <th style={thStyle}>x</th>
// //             <th style={thStyle}>f(x)</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {rows.map((r, i) => (
// //             <tr key={i}>
// //               <td style={tdStyle}>{r.x.toFixed(2)}</td>
// //               <td style={tdStyle}>{Number.isFinite(r.y) ? r.y.toFixed(3) : '—'}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }
// // const thStyle = { textAlign: 'left', padding: '6px 14px', borderBottom: `1px solid ${T.border.mid}`, color: T.text.faint, fontWeight: 500, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em' };
// // const tdStyle = { padding: '4px 14px', borderBottom: `1px solid ${T.border.soft}`, color: T.text.strong };

// // export function MappingDiagram({ fn, domain }) {
// //   const w = 300, h = 360;
// //   const ys = domain.map(x => { try { return fn(x); } catch { return NaN; } });
// //   const finiteYs = ys.filter(Number.isFinite);
// //   const yMin = Math.min(...finiteYs);
// //   const yMax = Math.max(...finiteYs);
// //   const yPad = (yMax - yMin) * 0.1 || 1;
// //   const yRange = [yMin - yPad, yMax + yPad];

// //   const xColX = 80, yColX = 220;
// //   const topY = 30, botY = h - 30;
// //   const xToScreen = (i) => topY + (i / (domain.length - 1)) * (botY - topY);
// //   const yToScreen = (y) => {
// //     const t = (y - yRange[0]) / (yRange[1] - yRange[0]);
// //     return botY - t * (botY - topY);
// //   };

// //   return (
// //     <div style={{ padding: 20, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
// //       <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
// //         <text x={xColX} y={15} textAnchor="middle" fontFamily={T.font.mono} fontSize="11" fill={T.text.muted}>x</text>
// //         <text x={yColX} y={15} textAnchor="middle" fontFamily={T.font.mono} fontSize="11" fill={T.text.muted}>f(x)</text>
// //         {domain.map((x, i) => (
// //           <g key={i}>
// //             <circle cx={xColX} cy={xToScreen(i)} r="4" fill={T.c.blue} />
// //             <text x={xColX - 12} y={xToScreen(i) + 4} textAnchor="end" fontFamily={T.font.mono} fontSize="11" fill={T.text.strong}>{x}</text>
// //             {Number.isFinite(ys[i]) && (
// //               <>
// //                 <line x1={xColX + 6} y1={xToScreen(i)} x2={yColX - 6} y2={yToScreen(ys[i])} stroke={T.text.faint} strokeWidth="1" />
// //                 <circle cx={yColX} cy={yToScreen(ys[i])} r="4" fill={T.c.slate} />
// //                 <text x={yColX + 12} y={yToScreen(ys[i]) + 4} fontFamily={T.font.mono} fontSize="11" fill={T.text.strong}>{ys[i].toFixed(2)}</text>
// //               </>
// //             )}
// //           </g>
// //         ))}
// //       </svg>
// //     </div>
// //   );
// // }

// // // ============================================================
// // // SMALL HELPERS
// // // ============================================================
// // function fmt(v) {
// //   if (!isFinite(v)) return v > 0 ? '+\u221E' : '\u2212\u221E';
// //   const r = Math.round(v * 1e4) / 1e4;
// //   return Number.isInteger(r) ? r.toString() : r.toFixed(2);
// // }


// // ============================================================
// // ExplorerAtoms.jsx  (v2 — fixes circular-dep crash)
// // Change from v1: thStyle / tdStyle moved inside NumericTable
// // so T is read at render time, not at module init time.
// // ============================================================

// import React, { useState, useEffect } from 'react';
// import { T } from './FunctionExplorer';

// // ============================================================
// // One-time keyframes / global rule injection
// // ============================================================
// let _injected = false;
// export function injectStyles() {
//   if (_injected || typeof document === 'undefined') return;
//   _injected = true;
//   const style = document.createElement('style');
//   style.textContent = `
//     @keyframes fexp-fade-in {
//       from { opacity: 0; transform: translateY(-2px); }
//       to   { opacity: 1; transform: translateY(0); }
//     }
//     .fexp-no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
//     .fexp-no-scrollbar::-webkit-scrollbar { width: 0; height: 0; display: none; }
//     .fexp-tooltip-host:hover > .fexp-tooltip { opacity: 1; }
//   `;
//   document.head.appendChild(style);
// }

// // ============================================================
// // TOOLTIP
// // ============================================================
// export function Tooltip({ content, placement = 'bottom', children, style }) {
//   const place = tooltipPlacement(placement);
//   return (
//     <span className="fexp-tooltip-host" style={{ position: 'relative', display: 'inline-flex', ...style }}>
//       {children}
//       <span
//         className="fexp-tooltip"
//         style={{
//           position: 'absolute',
//           background: T.c.slateD,
//           color: '#fff',
//           padding: '6px 9px',
//           borderRadius: T.radius.sm,
//           fontSize: 11,
//           lineHeight: 1.4,
//           whiteSpace: 'normal',
//           width: 'max-content',
//           maxWidth: 220,
//           opacity: 0,
//           pointerEvents: 'none',
//           transition: 'opacity 120ms',
//           zIndex: 100,
//           fontFamily: T.font.sans,
//           fontWeight: 400,
//           letterSpacing: '-0.005em',
//           boxShadow: '0 4px 12px rgba(15,23,42,0.18)',
//           ...place,
//         }}
//       >
//         {content}
//       </span>
//     </span>
//   );
// }
// function tooltipPlacement(p) {
//   switch (p) {
//     case 'top':    return { bottom: 'calc(100% + 6px)', left: '50%', transform: 'translateX(-50%)' };
//     case 'right':  return { left: 'calc(100% + 8px)',   top:  '50%', transform: 'translateY(-50%)' };
//     case 'left':   return { right:'calc(100% + 8px)',   top:  '50%', transform: 'translateY(-50%)' };
//     default:       return { top:  'calc(100% + 6px)',   left: '50%', transform: 'translateX(-50%)' };
//   }
// }

// // ============================================================
// // ACCORDION
// // ============================================================
// export function Accordion({ title, summary, defaultOpen = false, children }) {
//   const [open, setOpen] = useState(defaultOpen);
//   return (
//     <div style={{ borderBottom: `1px solid ${T.border.soft}` }}>
//       <button
//         onClick={() => setOpen(o => !o)}
//         style={{
//           width: '100%',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           padding: '10px 14px',
//           textAlign: 'left',
//           gap: 8,
//           background: 'none',
//           border: 'none',
//           cursor: 'pointer',
//           fontFamily: T.font.sans,
//           transition: 'background 120ms',
//         }}
//         onMouseEnter={e => { e.currentTarget.style.background = T.bg.subtle; }}
//         onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
//       >
//         <span style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
//           <svg
//             width="14" height="14" viewBox="0 0 24 24" fill="none"
//             stroke={open ? T.c.blue : T.text.faint}
//             strokeWidth="2.5" strokeLinecap="round"
//             style={{ flexShrink: 0, transition: 'transform 200ms, stroke 120ms', transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
//           >
//             <polyline points="9 18 15 12 9 6" />
//           </svg>
//           <span style={{ fontSize: 12, fontWeight: 600, color: T.text.strong, letterSpacing: '-0.005em' }}>{title}</span>
//         </span>
//         {!open && summary && (
//           <span style={{
//             fontFamily: T.font.mono, fontSize: 11, color: T.text.faint,
//             whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
//             marginLeft: 8, maxWidth: '55%',
//           }}>{summary}</span>
//         )}
//       </button>
//       {open && (
//         <div style={{
//           padding: '2px 14px 12px',
//           animation: 'fexp-fade-in 220ms cubic-bezier(0.4, 0, 0.2, 1)',
//         }}>
//           {children}
//         </div>
//       )}
//     </div>
//   );
// }

// // ============================================================
// // PROP ROW
// // ============================================================
// export function PropRow({ k, v, mono = false }) {
//   return (
//     <div style={{
//       display: 'grid',
//       gridTemplateColumns: '100px 1fr',
//       gap: 8,
//       padding: '4px 0',
//       fontSize: 12,
//       alignItems: 'baseline',
//     }}>
//       <span style={{ color: T.text.muted, fontSize: 11 }}>{k}</span>
//       <span style={{
//         color: T.text.strong,
//         fontFamily: mono ? T.font.mono : T.font.sans,
//         fontSize: mono ? 11.5 : 12,
//       }}>{v}</span>
//     </div>
//   );
// }

// // ============================================================
// // TAG
// // ============================================================
// export function Tag({ variant = 'gray', children }) {
//   const styles = {
//     affirm: { background: T.bg.tintBlue, color: T.c.blueD, border: 'none' },
//     gray:   { background: T.bg.pressed,  color: T.text.body, border: 'none' },
//     dim:    { background: T.bg.subtle,   color: T.text.muted, border: `1px solid ${T.border.mid}` },
//   };
//   const s = styles[variant] || styles.gray;
//   return (
//     <span style={{
//       display: 'inline-block',
//       padding: '1px 7px',
//       fontSize: 10.5,
//       fontWeight: 500,
//       borderRadius: 4,
//       verticalAlign: 'middle',
//       ...s,
//     }}>{children}</span>
//   );
// }

// // ============================================================
// // LINK CHIP
// // ============================================================
// export function LinkChip({ ext = false, children, onClick, href }) {
//   const [hover, setHover] = useState(false);
//   return (
//     <a
//       href={href || '#'}
//       onClick={(e) => { if (onClick) { e.preventDefault(); onClick(); } }}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//       style={{
//         display: 'inline-flex',
//         alignItems: 'center',
//         gap: 4,
//         padding: '2px 7px 2px 5px',
//         borderRadius: 4,
//         fontSize: 10.5,
//         fontWeight: 500,
//         letterSpacing: '-0.005em',
//         background: hover ? T.bg.tintBlue2 : T.bg.tintBlue,
//         color: T.c.blueD,
//         border: `1px solid ${T.border.blue}`,
//         textDecoration: 'none',
//         transition: 'transform 120ms, box-shadow 120ms, background 120ms',
//         cursor: 'pointer',
//         whiteSpace: 'nowrap',
//         transform: hover ? 'translateY(-1px)' : 'translateY(0)',
//         boxShadow: hover ? T.shadow.s1 : 'none',
//       }}
//     >
//       {children}
//       {ext && <span style={{ marginLeft: 1, fontSize: 11, opacity: 0.7 }}>{'\u2197'}</span>}
//     </a>
//   );
// }

// export function LinksRow({ children }) {
//   return (
//     <div style={{
//       display: 'flex', flexWrap: 'wrap', gap: 4,
//       marginTop: 10, paddingTop: 8,
//       borderTop: `1px dashed ${T.border.soft}`,
//     }}>{children}</div>
//   );
// }

// // ============================================================
// // FORM SWITCH
// // ============================================================
// export function FormSwitch({ options, value, onChange }) {
//   return (
//     <div style={{
//       display: 'flex',
//       background: T.bg.subtle,
//       border: `1px solid ${T.border.soft}`,
//       borderRadius: T.radius.sm,
//       padding: 2,
//       marginTop: 6,
//       gap: 2,
//     }}>
//       {options.map(opt => {
//         const active = opt === value;
//         return (
//           <button
//             key={opt}
//             onClick={() => onChange(opt)}
//             style={{
//               flex: 1,
//               padding: '4px 6px',
//               fontSize: 10.5,
//               fontWeight: 500,
//               color: active ? T.text.strong : T.text.muted,
//               background: active ? '#fff' : 'transparent',
//               boxShadow: active ? T.shadow.s1 : 'none',
//               borderRadius: 3,
//               fontFamily: T.font.mono,
//               textAlign: 'center',
//               border: 'none',
//               cursor: 'pointer',
//             }}
//           >{opt}</button>
//         );
//       })}
//     </div>
//   );
// }

// // ============================================================
// // MICRO-VIS
// // ============================================================
// export function SignChart({ intervals }) {
//   if (!intervals || intervals.length === 0) return null;
//   return (
//     <div style={{ margin: '8px 0 4px' }}>
//       <div style={{
//         display: 'flex', height: 18,
//         borderRadius: 3, overflow: 'hidden',
//         border: `1px solid ${T.border.mid}`,
//         fontFamily: T.font.mono, fontWeight: 600, fontSize: 11,
//       }}>
//         {intervals.map((iv, i) => (
//           <div key={i} style={{
//             display: 'grid', placeItems: 'center', flex: 1,
//             background: iv.sign === '+' ? T.c.blue : (iv.sign === '-' ? T.bg.pressed : T.bg.subtle),
//             color: iv.sign === '+' ? '#fff' : T.text.muted,
//           }}>{iv.sign}</div>
//         ))}
//       </div>
//       <div style={{
//         display: 'flex', justifyContent: 'space-around',
//         marginTop: 3, fontFamily: T.font.mono, fontSize: 9.5, color: T.text.muted,
//       }}>
//         {intervals.map((iv, i) => (
//           <span key={i}>{i === 0 ? fmt(iv.from) : ''}{i < intervals.length - 1 ? '' : ` ${fmt(iv.to)}`}</span>
//         ))}
//       </div>
//     </div>
//   );
// }

// export function MonotonicityStrip({ intervals }) {
//   if (!intervals || intervals.length === 0) return null;
//   return (
//     <div style={{ margin: '8px 0 4px' }}>
//       <div style={{
//         display: 'flex', height: 16,
//         borderRadius: 3, overflow: 'hidden',
//         border: `1px solid ${T.border.mid}`,
//         fontFamily: T.font.mono, fontWeight: 600, fontSize: 11,
//       }}>
//         {intervals.map((iv, i) => (
//           <div key={i} style={{
//             display: 'grid', placeItems: 'center', flex: 1,
//             background: iv.dir === 'inc' ? T.c.blue : (iv.dir === 'dec' ? T.c.slate : T.bg.pressed),
//             color: '#fff',
//           }}>
//             {iv.dir === 'inc' ? '\u2191 inc' : (iv.dir === 'dec' ? '\u2193 dec' : '\u2212')}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export function ParentOverlay() {
//   return (
//     <svg viewBox="0 0 320 110" preserveAspectRatio="none"
//       style={{
//         display: 'block', width: '100%', height: 110,
//         background: T.bg.subtle, border: `1px solid ${T.border.soft}`,
//         borderRadius: T.radius.sm, marginTop: 8,
//       }}
//     >
//       <line x1="0" y1="55" x2="320" y2="55" stroke={T.border.strong} strokeWidth="1" />
//       <line x1="160" y1="0" x2="160" y2="110" stroke={T.border.strong} strokeWidth="1" />
//       <path d="M 30 0 Q 100 100 160 100 Q 220 100 290 0" fill="none" stroke={T.text.faint} strokeWidth="1.5" strokeDasharray="4 3" />
//       <path d="M 0 30 Q 80 70 160 75 Q 240 70 320 30" fill="none" stroke={T.c.blue} strokeWidth="2" />
//       <text x="6" y="14" fontFamily={T.font.mono} fontSize="9" fill={T.text.faint}>parent</text>
//       <text x="6" y="105" fontFamily={T.font.mono} fontSize="9" fill={T.c.blue}>transformed</text>
//     </svg>
//   );
// }

// // ============================================================
// // HEADER
// // ============================================================
// export function Header({ brandName, formula, formulaLabel }) {
//   return (
//     <div style={{
//       display: 'flex', alignItems: 'center', gap: 14,
//       padding: '0 14px',
//       borderBottom: `1px solid ${T.border.soft}`,
//       background: 'linear-gradient(180deg, #fff 0%, #fcfcfd 100%)',
//     }}>
//       <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
//         <span style={{
//           width: 26, height: 26,
//           display: 'grid', placeItems: 'center',
//           background: `linear-gradient(135deg, ${T.c.blue}, ${T.c.blueD})`,
//           color: '#fff',
//           borderRadius: T.radius.sm,
//           fontFamily: T.font.mono, fontSize: 14, fontWeight: 600,
//           boxShadow: '0 1px 2px rgba(59,130,246,0.3)',
//         }}>{'\u0192'}</span>
//         <span style={{ fontWeight: 600, color: T.text.strong, fontSize: 13, letterSpacing: '-0.01em' }}>{brandName}</span>
//       </div>

//       <div style={{ width: 1, height: 22, background: T.border.mid, flexShrink: 0 }} />

//       <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
//         <span style={{
//           fontFamily: T.font.mono, color: T.text.faint, fontSize: 11,
//           letterSpacing: '0.05em', textTransform: 'uppercase',
//         }}>{formulaLabel}</span>
//         <span style={{
//           fontFamily: T.font.mono, fontSize: 14, fontWeight: 500,
//           color: T.text.strong,
//           padding: '4px 10px',
//           background: T.bg.subtle,
//           border: `1px solid ${T.border.soft}`,
//           borderRadius: T.radius.sm,
//           whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
//         }}>{formula}</span>
//       </div>

//       <div style={{ display: 'flex', gap: 2, flexShrink: 0 }}>
//         <HeaderBtn ttContent={(<><b>Search</b>{' \u00B7 jump to a property or theory page'}</>)}>
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
//         </HeaderBtn>
//         <HeaderBtn ttContent={(<><b>Settings</b>{' \u00B7 display preferences'}</>)}>
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/></svg>
//         </HeaderBtn>
//         <HeaderBtn ttContent={(<><b>Export</b>{' \u00B7 download as PNG or SVG'}</>)}>
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
//         </HeaderBtn>
//         <HeaderBtn ttContent={(<><b>Maximize</b>{' \u00B7 full-screen'}</>)}>
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
//         </HeaderBtn>
//       </div>
//     </div>
//   );
// }
// function HeaderBtn({ children, ttContent }) {
//   const [hover, setHover] = useState(false);
//   return (
//     <Tooltip content={ttContent}>
//       <button
//         onMouseEnter={() => setHover(true)}
//         onMouseLeave={() => setHover(false)}
//         style={{
//           width: 28, height: 28,
//           display: 'grid', placeItems: 'center',
//           borderRadius: T.radius.sm,
//           color: hover ? T.text.strong : T.text.muted,
//           background: hover ? T.bg.hover : 'transparent',
//           border: 'none',
//           cursor: 'pointer',
//           transition: 'background 120ms, color 120ms',
//         }}
//       ><span style={{ width: 15, height: 15, display: 'inline-block' }}>{React.cloneElement(children, { width: 15, height: 15 })}</span></button>
//     </Tooltip>
//   );
// }

// // ============================================================
// // FUNCBAR
// // ============================================================
// export function Funcbar({ expression, onExpressionChange, family }) {
//   const [draft, setDraft] = useState(expression);
//   useEffect(() => { setDraft(expression); }, [expression]);
//   const commit = () => { if (draft !== expression) onExpressionChange(draft); };
//   return (
//     <div style={{
//       display: 'flex', alignItems: 'center', gap: 14,
//       padding: '0 14px',
//       borderBottom: `1px solid ${T.border.soft}`,
//       background: T.bg.panel, overflow: 'hidden',
//     }}>
//       <span style={{
//         fontFamily: T.font.mono, fontSize: 10,
//         textTransform: 'uppercase', color: T.text.faint,
//         letterSpacing: '0.08em', flexShrink: 0,
//       }}>expression</span>

//       <input
//         value={draft}
//         onChange={(e) => setDraft(e.target.value)}
//         onBlur={commit}
//         onKeyDown={(e) => { if (e.key === 'Enter') commit(); }}
//         spellCheck={false}
//         style={{
//           flex: 1,
//           minWidth: 0,
//           fontFamily: T.font.mono, fontSize: 13,
//           padding: '5px 10px',
//           background: T.bg.subtle,
//           color: T.text.strong,
//           border: `1px solid ${T.border.soft}`,
//           borderRadius: T.radius.sm,
//           outline: 'none',
//         }}
//       />

//       {family && (
//         <span style={{
//           display: 'inline-flex', alignItems: 'center', gap: 5,
//           padding: '3px 9px',
//           background: T.bg.subtle,
//           border: `1px solid ${T.border.mid}`,
//           borderRadius: 999,
//           fontSize: 11.5, fontWeight: 500,
//           color: T.c.blueD,
//           letterSpacing: '-0.005em',
//           flexShrink: 0,
//         }}>{family}</span>
//       )}

//       <div style={{ marginLeft: 'auto', display: 'flex', gap: 6, flexShrink: 0 }}>
//         <FuncbarBtn label="Compare" />
//         <FuncbarBtn label={'Animate\u2026'} />
//       </div>
//     </div>
//   );
// }
// function FuncbarBtn({ label }) {
//   const [hover, setHover] = useState(false);
//   return (
//     <button
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//       style={{
//         padding: '4px 10px',
//         background: hover ? T.bg.subtle : '#fff',
//         border: `1px solid ${hover ? T.border.strong : T.border.mid}`,
//         borderRadius: T.radius.sm,
//         fontSize: 12, fontWeight: 500,
//         color: T.text.body,
//         cursor: 'pointer',
//         transition: 'all 120ms',
//       }}
//     >{label}</button>
//   );
// }

// // ============================================================
// // LEFT RAIL
// // ============================================================
// export function LeftRail({ overlays, annotations, onToggleOverlay, onToggleAnnot, onReset }) {
//   return (
//     <nav style={{
//       borderRight: `1px solid ${T.border.soft}`,
//       background: T.bg.subtle,
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       padding: '6px 0',
//       gap: 1,
//     }}>
//       <RailLabel>OVRL</RailLabel>
//       <RailToggle on={overlays.fp}   onClick={() => onToggleOverlay('fp')}   tt={(<><b>Show f&apos;(x)</b>{' \u00B7 derivative curve'}</>)}><IcDeriv /></RailToggle>
//       <RailToggle on={overlays.fpp}  onClick={() => onToggleOverlay('fpp')}  tt={(<><b>Show f\u2033(x)</b>{' \u00B7 second derivative'}</>)}><IcDeriv2 /></RailToggle>
//       <RailToggle on={overlays.anti} onClick={() => onToggleOverlay('anti')} tt={(<><b>Show F(x)</b>{' \u00B7 antiderivative (cumulative integral)'}</>)}><IcAnti /></RailToggle>
//       <RailToggle on={overlays.inv}  onClick={() => onToggleOverlay('inv')}  tt={(<><b>Show f\u207B\u00B9(x)</b>{' \u00B7 inverse via reflection across y = x'}</>)}><IcInv /></RailToggle>

//       <RailDivider />
//       <RailLabel>MRKS</RailLabel>

//       <RailToggle on={annotations.roots}   onClick={() => onToggleAnnot('roots')}   tt={(<><b>Roots</b>{' \u00B7 dots at x-intercepts'}</>)}><IcRoots /></RailToggle>
//       <RailToggle on={annotations.extrema} onClick={() => onToggleAnnot('extrema')} tt={(<><b>Extrema</b>{' \u00B7 local/global min/max'}</>)}><IcExt /></RailToggle>
//       <RailToggle on={annotations.inflect} onClick={() => onToggleAnnot('inflect')} tt={(<><b>Inflection points</b>{' \u00B7 concavity changes'}</>)}><IcInfl /></RailToggle>
//       <RailToggle on={annotations.asymp}   onClick={() => onToggleAnnot('asymp')}   tt={(<><b>Asymptotes</b>{' \u00B7 vertical asymptote lines'}</>)}><IcAsymp /></RailToggle>
//       <RailToggle on={annotations.tangent} onClick={() => onToggleAnnot('tangent')} tt={(<><b>Tangent at cursor</b>{' \u00B7 line touching f at cursor x'}</>)}><IcTan /></RailToggle>
//       <RailToggle on={annotations.area}    onClick={() => onToggleAnnot('area')}    tt={(<><b>Shaded area</b>{' \u00B7 signed area under f'}</>)}><IcArea /></RailToggle>

//       <div style={{ flex: 1, minHeight: 4 }} />

//       <RailBtn onClick={onReset} tt={(<><b>Reset</b>{' \u00B7 turn off all toggles'}</>)}><IcReset /></RailBtn>
//     </nav>
//   );
// }

// function RailLabel({ children }) {
//   return (
//     <div style={{
//       fontSize: 8, fontWeight: 600, letterSpacing: '0.1em',
//       color: T.text.faint, textTransform: 'uppercase',
//       margin: '6px 0 3px', textAlign: 'center',
//       fontFamily: T.font.mono,
//     }}>{children}</div>
//   );
// }
// function RailDivider() {
//   return <div style={{ width: 22, height: 1, background: T.border.mid, margin: '6px auto 4px' }} />;
// }
// function RailToggle({ on, onClick, children, tt }) {
//   return (
//     <Tooltip content={tt} placement="right">
//       <button
//         onClick={onClick}
//         style={{
//           width: 34, height: 32,
//           display: 'grid', placeItems: 'center',
//           borderRadius: T.radius.sm,
//           color: on ? T.c.blueD : T.text.muted,
//           background: on ? T.bg.tintBlue : 'transparent',
//           boxShadow: on ? T.shadow.s1 : 'none',
//           border: 'none',
//           position: 'relative',
//           cursor: 'pointer',
//           transition: 'all 120ms',
//         }}
//       >
//         {on && <span style={{
//           position: 'absolute',
//           left: -10, top: 6, bottom: 6, width: 3,
//           borderRadius: '0 2px 2px 0', background: T.c.blue,
//         }} />}
//         {children}
//       </button>
//     </Tooltip>
//   );
// }
// function RailBtn({ onClick, children, tt }) {
//   return (
//     <Tooltip content={tt} placement="right">
//       <button
//         onClick={onClick}
//         style={{
//           width: 34, height: 32,
//           display: 'grid', placeItems: 'center',
//           borderRadius: T.radius.sm,
//           color: T.text.muted, background: 'transparent',
//           border: 'none', cursor: 'pointer', transition: 'all 120ms',
//         }}
//         onMouseEnter={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = T.text.strong; e.currentTarget.style.boxShadow = T.shadow.s1; }}
//         onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.text.muted; e.currentTarget.style.boxShadow = 'none'; }}
//       >{children}</button>
//     </Tooltip>
//   );
// }
// const IcDeriv  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M4 18 L20 6"/></svg>;
// const IcDeriv2 = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="4" y1="14" x2="20" y2="14"/></svg>;
// const IcAnti   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 4c4 0 2 16 6 16"/></svg>;
// const IcInv    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="4" y1="20" x2="20" y2="4"/><path d="M4 18 L20 6" opacity="0.4"/></svg>;
// const IcRoots  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="12" r="2.5"/></svg>;
// const IcExt    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 18 Q12 4 20 18"/><circle cx="12" cy="11" r="2.2" fill="currentColor"/></svg>;
// const IcInfl   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 18 C8 18 8 6 12 6 S16 18 20 18"/><circle cx="12" cy="12" r="1.8" fill="currentColor"/></svg>;
// const IcAsymp  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2"><line x1="4" y1="20" x2="20" y2="20"/><line x1="6" y1="4" x2="6" y2="22"/></svg>;
// const IcTan    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 20 Q12 4 20 20"/><line x1="3" y1="18" x2="21" y2="6" strokeDasharray="3 2"/></svg>;
// const IcArea   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 18 Q12 6 20 18 L20 20 L4 20 Z" fill="currentColor" fillOpacity="0.25"/></svg>;
// const IcReset  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>;

// // ============================================================
// // GRAPH VIEW SWITCH
// // ============================================================
// export function GraphViewSwitch({ value, onChange }) {
//   const opts = [
//     { v: 'graph', label: 'Graph' },
//     { v: 'table', label: 'Table' },
//     { v: 'map',   label: 'Map' },
//   ];
//   return (
//     <div style={{
//       position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)',
//       background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(6px)',
//       border: `1px solid ${T.border.mid}`,
//       borderRadius: T.radius.sm,
//       padding: 2, display: 'flex', gap: 2,
//       zIndex: 10, boxShadow: T.shadow.s1,
//     }}>
//       {opts.map(opt => (
//         <button key={opt.v} onClick={() => onChange(opt.v)} style={{
//           padding: '3px 9px', fontSize: 10.5, fontWeight: 500,
//           color: value === opt.v ? T.c.blueD : T.text.muted,
//           background: value === opt.v ? T.bg.tintBlue : 'transparent',
//           border: 'none', borderRadius: 3, cursor: 'pointer',
//           fontFamily: T.font.sans, letterSpacing: '-0.005em',
//         }}>{opt.label}</button>
//       ))}
//     </div>
//   );
// }

// // ============================================================
// // RIGHT TABS RAIL
// // ============================================================
// export function RightTabs({ active, onChange }) {
//   const tabs = [
//     { id: 'properties', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>, tt: (<><b>Properties</b>{' \u00B7 what\u2019s true about f(x)'}</>) },
//     { id: 'transforms', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>, tt: (<><b>Transformations &amp; ops</b>{' \u00B7 parent / shifts / composition'}</>) },
//     { id: 'calculus',   icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 4c-3 0-4 3-5 8s-2 8-5 8"/><line x1="6" y1="12" x2="18" y2="12"/></svg>, tt: (<><b>Calculus bridge</b>{' \u00B7 derivative, integral, tangent'}</>) },
//     { id: 'theory',     icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>, tt: (<><b>Theory &amp; reading</b>{' \u00B7 curated material'}</>) },
//   ];
//   return (
//     <nav style={{
//       borderLeft: `1px solid ${T.border.soft}`,
//       background: T.bg.subtle,
//       display: 'flex', flexDirection: 'column',
//       alignItems: 'center', padding: '8px 0', gap: 2,
//     }}>
//       {tabs.map(t => {
//         const isActive = active === t.id;
//         return (
//           <Tooltip key={t.id} content={t.tt} placement="left">
//             <button
//               onClick={() => onChange(t.id)}
//               style={{
//                 width: 34, height: 34, position: 'relative',
//                 display: 'grid', placeItems: 'center',
//                 borderRadius: T.radius.sm,
//                 color: isActive ? T.c.blueD : T.text.muted,
//                 background: isActive ? '#fff' : 'transparent',
//                 boxShadow: isActive ? T.shadow.s1 : 'none',
//                 border: 'none', cursor: 'pointer',
//                 transition: 'all 120ms',
//               }}
//             >
//               {isActive && <span style={{
//                 position: 'absolute',
//                 right: -10, top: 7, bottom: 7, width: 3,
//                 background: T.c.blue, borderRadius: '2px 0 0 2px',
//               }} />}
//               <span style={{ width: 16, height: 16, display: 'inline-block', color: 'currentColor' }}>
//                 {React.cloneElement(t.icon, { width: 16, height: 16 })}
//               </span>
//             </button>
//           </Tooltip>
//         );
//       })}
//     </nav>
//   );
// }

// // ============================================================
// // RIGHT PANEL
// // ============================================================
// export function RightPanel({ title, subtitle, density, onDensityChange, children }) {
//   return (
//     <aside style={{
//       borderLeft: `1px solid ${T.border.soft}`,
//       background: T.bg.panel,
//       display: 'flex', flexDirection: 'column',
//       overflow: 'hidden',
//     }}>
//       <div style={{
//         padding: '12px 14px 10px',
//         borderBottom: `1px solid ${T.border.soft}`,
//         display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
//       }}>
//         <div style={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 0 }}>
//           <div style={{ fontSize: 13, fontWeight: 600, color: T.text.strong, letterSpacing: '-0.005em' }}>{title}</div>
//           <div style={{ fontSize: 10.5, color: T.text.faint, letterSpacing: '0.02em' }}>{subtitle}</div>
//         </div>
//         <div style={{
//           display: 'flex', background: T.bg.subtle,
//           borderRadius: T.radius.sm, padding: 2,
//           border: `1px solid ${T.border.soft}`,
//           flexShrink: 0,
//         }}>
//           {['compact', 'roomy'].map(d => (
//             <button key={d} onClick={() => onDensityChange(d)} style={{
//               padding: '2px 7px', fontSize: 10.5, fontWeight: 500,
//               color: density === d ? T.text.strong : T.text.muted,
//               background: density === d ? '#fff' : 'transparent',
//               boxShadow: density === d ? T.shadow.s1 : 'none',
//               borderRadius: 4, border: 'none', cursor: 'pointer',
//             }}>{d}</button>
//           ))}
//         </div>
//       </div>
//       <div className="fexp-no-scrollbar" style={{
//         flex: 1, overflowY: 'auto', padding: '4px 0 12px',
//       }}>{children}</div>
//     </aside>
//   );
// }

// // ============================================================
// // INSIGHTS STRIP
// // ============================================================
// export function InsightsStrip({ defaults, pinned, onUnpin }) {
//   return (
//     <div className="fexp-no-scrollbar" style={{
//       display: 'flex', alignItems: 'stretch', gap: 8,
//       padding: '10px 14px',
//       borderBottom: `1px solid ${T.border.soft}`,
//       background: `linear-gradient(180deg, ${T.bg.subtle}, #fff)`,
//       overflowX: 'auto',
//     }}>
//       {defaults.map(c => (
//         <InsightCard key={c.id} card={c} />
//       ))}
//       {pinned.length > 0 && (
//         <div style={{ flexShrink: 0, width: 1, background: T.border.mid, margin: '4px 4px', alignSelf: 'stretch' }} />
//       )}
//       {pinned.map(c => (
//         <InsightCard key={c.id} card={c} pinned onUnpin={() => onUnpin(c.id)} />
//       ))}
//       <Tooltip content={(<><b>Pin a fact</b>{' \u00B7 choose any property to add as a card'}</>)} placement="top">
//         <button style={{
//           flexShrink: 0, minWidth: 44,
//           background: 'transparent',
//           border: `1px dashed ${T.border.mid}`,
//           borderRadius: T.radius.md,
//           display: 'grid', placeItems: 'center',
//           color: T.text.faint, cursor: 'pointer',
//           transition: 'all 140ms',
//         }}
//           onMouseEnter={(e) => { e.currentTarget.style.borderColor = T.c.blue; e.currentTarget.style.color = T.c.blue; e.currentTarget.style.background = T.bg.tintBlue; }}
//           onMouseLeave={(e) => { e.currentTarget.style.borderColor = T.border.mid; e.currentTarget.style.color = T.text.faint; e.currentTarget.style.background = 'transparent'; }}
//         >
//           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
//         </button>
//       </Tooltip>
//     </div>
//   );
// }
// function InsightCard({ card, pinned = false, onUnpin }) {
//   const [hover, setHover] = useState(false);
//   return (
//     <div
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//       style={{
//         flexShrink: 0, minWidth: 140,
//         background: pinned ? T.bg.tintBlue : '#fff',
//         border: `1px ${pinned ? 'dashed' : 'solid'} ${pinned ? T.border.blue : T.border.soft}`,
//         borderRadius: T.radius.md,
//         padding: '7px 10px 8px',
//         position: 'relative', cursor: 'pointer',
//         transition: 'all 140ms',
//         boxShadow: hover ? T.shadow.s1 : 'none',
//         transform: hover ? 'translateY(-1px)' : 'none',
//         display: 'flex', flexDirection: 'column', gap: 1,
//       }}
//     >
//       <div style={{
//         fontSize: 9.5, fontWeight: 500, color: pinned ? T.c.blueD : T.text.faint,
//         letterSpacing: '0.08em', textTransform: 'uppercase',
//         display: 'flex', alignItems: 'center', gap: 4,
//       }}>
//         <span style={{ width: 5, height: 5, borderRadius: '50%', background: T.c.blue, display: 'inline-block' }} />
//         {card.label}
//       </div>
//       <div style={{ fontFamily: T.font.mono, fontSize: 13.5, fontWeight: 500, color: T.text.strong, letterSpacing: '-0.01em' }}>
//         {card.value}
//       </div>
//       {card.sub && <div style={{ fontSize: 10.5, color: T.text.muted }}>{card.sub}</div>}
//       {pinned && (
//         <button
//           onClick={(e) => { e.stopPropagation(); onUnpin && onUnpin(); }}
//           style={{
//             position: 'absolute', top: 5, right: 5,
//             width: 16, height: 16,
//             display: 'grid', placeItems: 'center',
//             borderRadius: 3, color: T.text.faint,
//             opacity: hover ? 0.8 : 0,
//             background: 'transparent', border: 'none',
//             cursor: 'pointer', transition: 'opacity 120ms',
//           }}
//         >
//           <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
//         </button>
//       )}
//     </div>
//   );
// }

// // ============================================================
// // STATUS BAR
// // ============================================================
// export function StatusBar({ cursor, viewport, mode }) {
//   return (
//     <div style={{
//       display: 'flex', alignItems: 'center', gap: 14,
//       padding: '0 14px',
//       background: T.bg.subtle,
//       fontFamily: T.font.mono, fontSize: 11, color: T.text.muted,
//     }}>
//       <StatGroup k="cursor">
//         <Vstat>x:&nbsp;{cursor.x.toFixed(2)}</Vstat>
//         <Vstat>y:&nbsp;{cursor.y.toFixed(2)}</Vstat>
//       </StatGroup>
//       <StatDivider />
//       <StatGroup k="viewport">
//         <Vstat>[{viewport.xMin.toFixed(1)}, {viewport.xMax.toFixed(1)}] &times; [{viewport.yMin.toFixed(1)}, {viewport.yMax.toFixed(1)}]</Vstat>
//       </StatGroup>
//       <StatDivider />
//       <StatGroup k="mode">
//         <Vstat>{mode}</Vstat>
//       </StatGroup>
//     </div>
//   );
// }
// function StatGroup({ k, children }) {
//   return (
//     <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
//       <span style={{ color: T.text.faint, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{k}</span>
//       {children}
//     </div>
//   );
// }
// function Vstat({ children }) {
//   return <span style={{ color: T.text.body, fontVariantNumeric: 'tabular-nums' }}>{children}</span>;
// }
// function StatDivider() {
//   return <span style={{ width: 1, height: 12, background: T.border.mid }} />;
// }

// // ============================================================
// // ALT VIEWS
// // ============================================================
// export function NumericTable({ fn, xMin, xMax, step = 0.5 }) {
//   // NOTE: styles defined INSIDE the function to avoid module-init T access.
//   const thStyle = {
//     textAlign: 'left', padding: '6px 14px',
//     borderBottom: `1px solid ${T.border.mid}`,
//     color: T.text.faint, fontWeight: 500, fontSize: 10,
//     textTransform: 'uppercase', letterSpacing: '0.06em',
//   };
//   const tdStyle = {
//     padding: '4px 14px',
//     borderBottom: `1px solid ${T.border.soft}`,
//     color: T.text.strong,
//   };

//   const rows = [];
//   for (let x = xMin; x <= xMax + 1e-9; x += step) {
//     let y;
//     try { y = fn(x); } catch { y = NaN; }
//     rows.push({ x, y });
//   }
//   return (
//     <div style={{ padding: 24, overflow: 'auto', width: '100%', height: '100%' }}>
//       <table style={{
//         borderCollapse: 'collapse', fontFamily: T.font.mono, fontSize: 12, margin: '0 auto',
//       }}>
//         <thead>
//           <tr>
//             <th style={thStyle}>x</th>
//             <th style={thStyle}>f(x)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map((r, i) => (
//             <tr key={i}>
//               <td style={tdStyle}>{r.x.toFixed(2)}</td>
//               <td style={tdStyle}>{Number.isFinite(r.y) ? r.y.toFixed(3) : '\u2014'}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export function MappingDiagram({ fn, domain }) {
//   const w = 300, h = 360;
//   const ys = domain.map(x => { try { return fn(x); } catch { return NaN; } });
//   const finiteYs = ys.filter(Number.isFinite);
//   const yMin = Math.min(...finiteYs);
//   const yMax = Math.max(...finiteYs);
//   const yPad = (yMax - yMin) * 0.1 || 1;
//   const yRange = [yMin - yPad, yMax + yPad];

//   const xColX = 80, yColX = 220;
//   const topY = 30, botY = h - 30;
//   const xToScreen = (i) => topY + (i / (domain.length - 1)) * (botY - topY);
//   const yToScreen = (y) => {
//     const t = (y - yRange[0]) / (yRange[1] - yRange[0]);
//     return botY - t * (botY - topY);
//   };

//   return (
//     <div style={{ padding: 20, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
//         <text x={xColX} y={15} textAnchor="middle" fontFamily={T.font.mono} fontSize="11" fill={T.text.muted}>x</text>
//         <text x={yColX} y={15} textAnchor="middle" fontFamily={T.font.mono} fontSize="11" fill={T.text.muted}>f(x)</text>
//         {domain.map((x, i) => (
//           <g key={i}>
//             <circle cx={xColX} cy={xToScreen(i)} r="4" fill={T.c.blue} />
//             <text x={xColX - 12} y={xToScreen(i) + 4} textAnchor="end" fontFamily={T.font.mono} fontSize="11" fill={T.text.strong}>{x}</text>
//             {Number.isFinite(ys[i]) && (
//               <>
//                 <line x1={xColX + 6} y1={xToScreen(i)} x2={yColX - 6} y2={yToScreen(ys[i])} stroke={T.text.faint} strokeWidth="1" />
//                 <circle cx={yColX} cy={yToScreen(ys[i])} r="4" fill={T.c.slate} />
//                 <text x={yColX + 12} y={yToScreen(ys[i]) + 4} fontFamily={T.font.mono} fontSize="11" fill={T.text.strong}>{ys[i].toFixed(2)}</text>
//               </>
//             )}
//           </g>
//         ))}
//       </svg>
//     </div>
//   );
// }

// // ============================================================
// // SMALL HELPERS
// // ============================================================
// function fmt(v) {
//   if (!isFinite(v)) return v > 0 ? '+\u221E' : '\u2212\u221E';
//   const r = Math.round(v * 1e4) / 1e4;
//   return Number.isInteger(r) ? r.toString() : r.toFixed(2);
// }


// ============================================================
// ExplorerAtoms.jsx  (v3)
// Change from v2: Tooltip rewritten with React hover state so
// inline opacity: 0 doesn&apos;t block the :hover CSS rule.
// Also: Graph/Table/Map view switch now has tooltips.
// ============================================================

import React, { useState, useEffect } from 'react';
import { T } from './FunctionExplorer';

// ============================================================
// One-time keyframes / global rule injection
// ============================================================
let _injected = false;
export function injectStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fexp-fade-in {
      from { opacity: 0; transform: translateY(-2px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .fexp-no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
    .fexp-no-scrollbar::-webkit-scrollbar { width: 0; height: 0; display: none; }
  `;
  document.head.appendChild(style);
}

// ============================================================
// TOOLTIP  (v3: React hover state)
// ============================================================
export function Tooltip({ content, placement = 'bottom', children, style }) {
  const [hover, setHover] = useState(false);
  const place = tooltipPlacement(placement);
  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ position: 'relative', display: 'inline-flex', ...style }}
    >
      {children}
      <span style={{
        position: 'absolute',
        background: T.c.slateD,
        color: '#fff',
        padding: '6px 9px',
        borderRadius: T.radius.sm,
        fontSize: 11,
        lineHeight: 1.4,
        whiteSpace: 'normal',
        width: 'max-content',
        maxWidth: 220,
        opacity: hover ? 1 : 0,
        pointerEvents: 'none',
        transition: 'opacity 120ms',
        zIndex: 100,
        fontFamily: T.font.sans,
        fontWeight: 400,
        letterSpacing: '-0.005em',
        boxShadow: '0 4px 12px rgba(15,23,42,0.18)',
        ...place,
      }}>
        {content}
      </span>
    </span>
  );
}
function tooltipPlacement(p) {
  switch (p) {
    case 'top':    return { bottom: 'calc(100% + 6px)', left: '50%', transform: 'translateX(-50%)' };
    case 'right':  return { left: 'calc(100% + 8px)',   top:  '50%', transform: 'translateY(-50%)' };
    case 'left':   return { right: 'calc(100% + 8px)',  top:  '50%', transform: 'translateY(-50%)' };
    default:       return { top:  'calc(100% + 6px)',   left: '50%', transform: 'translateX(-50%)' };
  }
}

// ============================================================
// ACCORDION
// ============================================================
export function Accordion({ title, summary, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: `1px solid ${T.border.soft}` }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 14px',
          textAlign: 'left',
          gap: 8,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: T.font.sans,
          transition: 'background 120ms',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = T.bg.subtle; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke={open ? T.c.blue : T.text.faint}
            strokeWidth="2.5" strokeLinecap="round"
            style={{ flexShrink: 0, transition: 'transform 200ms, stroke 120ms', transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <span style={{ fontSize: 12, fontWeight: 600, color: T.text.strong, letterSpacing: '-0.005em' }}>{title}</span>
        </span>
        {!open && summary && (
          <span style={{
            fontFamily: T.font.mono, fontSize: 11, color: T.text.faint,
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            marginLeft: 8, maxWidth: '55%',
          }}>{summary}</span>
        )}
      </button>
      {open && (
        <div style={{
          padding: '2px 14px 12px',
          animation: 'fexp-fade-in 220ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
          {children}
        </div>
      )}
    </div>
  );
}

// ============================================================
// PROP ROW
// ============================================================
export function PropRow({ k, v, mono = false }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '100px 1fr',
      gap: 8,
      padding: '4px 0',
      fontSize: 12,
      alignItems: 'baseline',
    }}>
      <span style={{ color: T.text.muted, fontSize: 11 }}>{k}</span>
      <span style={{
        color: T.text.strong,
        fontFamily: mono ? T.font.mono : T.font.sans,
        fontSize: mono ? 11.5 : 12,
      }}>{v}</span>
    </div>
  );
}

// ============================================================
// TAG
// ============================================================
export function Tag({ variant = 'gray', children }) {
  const styles = {
    affirm: { background: T.bg.tintBlue, color: T.c.blueD, border: 'none' },
    gray:   { background: T.bg.pressed,  color: T.text.body, border: 'none' },
    dim:    { background: T.bg.subtle,   color: T.text.muted, border: `1px solid ${T.border.mid}` },
  };
  const s = styles[variant] || styles.gray;
  return (
    <span style={{
      display: 'inline-block',
      padding: '1px 7px',
      fontSize: 10.5,
      fontWeight: 500,
      borderRadius: 4,
      verticalAlign: 'middle',
      ...s,
    }}>{children}</span>
  );
}

// ============================================================
// LINK CHIP
// ============================================================
export function LinkChip({ ext = false, children, onClick, href }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href || '#'}
      onClick={(e) => { if (onClick) { e.preventDefault(); onClick(); } }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        padding: '2px 7px 2px 5px',
        borderRadius: 4,
        fontSize: 10.5,
        fontWeight: 500,
        letterSpacing: '-0.005em',
        background: hover ? T.bg.tintBlue2 : T.bg.tintBlue,
        color: T.c.blueD,
        border: `1px solid ${T.border.blue}`,
        textDecoration: 'none',
        transition: 'transform 120ms, box-shadow 120ms, background 120ms',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transform: hover ? 'translateY(-1px)' : 'translateY(0)',
        boxShadow: hover ? T.shadow.s1 : 'none',
      }}
    >
      {children}
      {ext && <span style={{ marginLeft: 1, fontSize: 11, opacity: 0.7 }}>{'\u2197'}</span>}
    </a>
  );
}

export function LinksRow({ children }) {
  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', gap: 4,
      marginTop: 10, paddingTop: 8,
      borderTop: `1px dashed ${T.border.soft}`,
    }}>{children}</div>
  );
}

// ============================================================
// FORM SWITCH
// ============================================================
export function FormSwitch({ options, value, onChange }) {
  return (
    <div style={{
      display: 'flex',
      background: T.bg.subtle,
      border: `1px solid ${T.border.soft}`,
      borderRadius: T.radius.sm,
      padding: 2,
      marginTop: 6,
      gap: 2,
    }}>
      {options.map(opt => {
        const active = opt === value;
        return (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            style={{
              flex: 1,
              padding: '4px 6px',
              fontSize: 10.5,
              fontWeight: 500,
              color: active ? T.text.strong : T.text.muted,
              background: active ? '#fff' : 'transparent',
              boxShadow: active ? T.shadow.s1 : 'none',
              borderRadius: 3,
              fontFamily: T.font.mono,
              textAlign: 'center',
              border: 'none',
              cursor: 'pointer',
            }}
          >{opt}</button>
        );
      })}
    </div>
  );
}

// ============================================================
// MICRO-VIS
// ============================================================
export function SignChart({ intervals }) {
  if (!intervals || intervals.length === 0) return null;
  return (
    <div style={{ margin: '8px 0 4px' }}>
      <div style={{
        display: 'flex', height: 18,
        borderRadius: 3, overflow: 'hidden',
        border: `1px solid ${T.border.mid}`,
        fontFamily: T.font.mono, fontWeight: 600, fontSize: 11,
      }}>
        {intervals.map((iv, i) => (
          <div key={i} style={{
            display: 'grid', placeItems: 'center', flex: 1,
            background: iv.sign === '+' ? T.c.blue : (iv.sign === '-' ? T.bg.pressed : T.bg.subtle),
            color: iv.sign === '+' ? '#fff' : T.text.muted,
          }}>{iv.sign}</div>
        ))}
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-around',
        marginTop: 3, fontFamily: T.font.mono, fontSize: 9.5, color: T.text.muted,
      }}>
        {intervals.map((iv, i) => (
          <span key={i}>{i === 0 ? fmt(iv.from) : ''}{i < intervals.length - 1 ? '' : ` ${fmt(iv.to)}`}</span>
        ))}
      </div>
    </div>
  );
}

export function MonotonicityStrip({ intervals }) {
  if (!intervals || intervals.length === 0) return null;
  return (
    <div style={{ margin: '8px 0 4px' }}>
      <div style={{
        display: 'flex', height: 16,
        borderRadius: 3, overflow: 'hidden',
        border: `1px solid ${T.border.mid}`,
        fontFamily: T.font.mono, fontWeight: 600, fontSize: 11,
      }}>
        {intervals.map((iv, i) => (
          <div key={i} style={{
            display: 'grid', placeItems: 'center', flex: 1,
            background: iv.dir === 'inc' ? T.c.blue : (iv.dir === 'dec' ? T.c.slate : T.bg.pressed),
            color: '#fff',
          }}>
            {iv.dir === 'inc' ? '\u2191 inc' : (iv.dir === 'dec' ? '\u2193 dec' : '\u2212')}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ParentOverlay() {
  return (
    <svg viewBox="0 0 320 110" preserveAspectRatio="none"
      style={{
        display: 'block', width: '100%', height: 110,
        background: T.bg.subtle, border: `1px solid ${T.border.soft}`,
        borderRadius: T.radius.sm, marginTop: 8,
      }}
    >
      <line x1="0" y1="55" x2="320" y2="55" stroke={T.border.strong} strokeWidth="1" />
      <line x1="160" y1="0" x2="160" y2="110" stroke={T.border.strong} strokeWidth="1" />
      <path d="M 30 0 Q 100 100 160 100 Q 220 100 290 0" fill="none" stroke={T.text.faint} strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M 0 30 Q 80 70 160 75 Q 240 70 320 30" fill="none" stroke={T.c.blue} strokeWidth="2" />
      <text x="6" y="14" fontFamily={T.font.mono} fontSize="9" fill={T.text.faint}>parent</text>
      <text x="6" y="105" fontFamily={T.font.mono} fontSize="9" fill={T.c.blue}>transformed</text>
    </svg>
  );
}

// ============================================================
// HEADER
// ============================================================
export function Header({ brandName, formula, formulaLabel }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 14,
      padding: '0 14px',
      borderBottom: `1px solid ${T.border.soft}`,
      background: 'linear-gradient(180deg, #fff 0%, #fcfcfd 100%)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
        <span style={{
          width: 26, height: 26,
          display: 'grid', placeItems: 'center',
          background: `linear-gradient(135deg, ${T.c.blue}, ${T.c.blueD})`,
          color: '#fff',
          borderRadius: T.radius.sm,
          fontFamily: T.font.mono, fontSize: 14, fontWeight: 600,
          boxShadow: '0 1px 2px rgba(59,130,246,0.3)',
        }}>{'\u0192'}</span>
        <span style={{ fontWeight: 600, color: T.text.strong, fontSize: 13, letterSpacing: '-0.01em' }}>{brandName}</span>
      </div>

      <div style={{ width: 1, height: 22, background: T.border.mid, flexShrink: 0 }} />

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
        <span style={{
          fontFamily: T.font.mono, color: T.text.faint, fontSize: 11,
          letterSpacing: '0.05em', textTransform: 'uppercase',
        }}>{formulaLabel}</span>
        <span style={{
          fontFamily: T.font.mono, fontSize: 14, fontWeight: 500,
          color: T.text.strong,
          padding: '4px 10px',
          background: T.bg.subtle,
          border: `1px solid ${T.border.soft}`,
          borderRadius: T.radius.sm,
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>{formula}</span>
      </div>

      <div style={{ display: 'flex', gap: 2, flexShrink: 0 }}>
        <HeaderBtn ttContent={(<><b>Search</b>{' \u00B7 jump to a property or theory page'}</>)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </HeaderBtn>
        <HeaderBtn ttContent={(<><b>Settings</b>{' \u00B7 display preferences'}</>)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/></svg>
        </HeaderBtn>
        <HeaderBtn ttContent={(<><b>Export</b>{' \u00B7 download as PNG or SVG'}</>)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        </HeaderBtn>
        <HeaderBtn ttContent={(<><b>Maximize</b>{' \u00B7 full-screen'}</>)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
        </HeaderBtn>
      </div>
    </div>
  );
}
function HeaderBtn({ children, ttContent }) {
  const [hover, setHover] = useState(false);
  return (
    <Tooltip content={ttContent}>
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          width: 28, height: 28,
          display: 'grid', placeItems: 'center',
          borderRadius: T.radius.sm,
          color: hover ? T.text.strong : T.text.muted,
          background: hover ? T.bg.hover : 'transparent',
          border: 'none',
          cursor: 'pointer',
          transition: 'background 120ms, color 120ms',
        }}
      ><span style={{ width: 15, height: 15, display: 'inline-block' }}>{React.cloneElement(children, { width: 15, height: 15 })}</span></button>
    </Tooltip>
  );
}

// ============================================================
// FUNCBAR
// ============================================================
export function Funcbar({ expression, onExpressionChange, family }) {
  const [draft, setDraft] = useState(expression);
  useEffect(() => { setDraft(expression); }, [expression]);
  const commit = () => { if (draft !== expression) onExpressionChange(draft); };
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 14,
      padding: '0 14px',
      borderBottom: `1px solid ${T.border.soft}`,
      background: T.bg.panel, overflow: 'hidden',
    }}>
      <span style={{
        fontFamily: T.font.mono, fontSize: 10,
        textTransform: 'uppercase', color: T.text.faint,
        letterSpacing: '0.08em', flexShrink: 0,
      }}>expression</span>

      <input
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => { if (e.key === 'Enter') commit(); }}
        spellCheck={false}
        style={{
          flex: 1,
          minWidth: 0,
          fontFamily: T.font.mono, fontSize: 13,
          padding: '5px 10px',
          background: T.bg.subtle,
          color: T.text.strong,
          border: `1px solid ${T.border.soft}`,
          borderRadius: T.radius.sm,
          outline: 'none',
        }}
      />

      {family && (
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          padding: '3px 9px',
          background: T.bg.subtle,
          border: `1px solid ${T.border.mid}`,
          borderRadius: 999,
          fontSize: 11.5, fontWeight: 500,
          color: T.c.blueD,
          letterSpacing: '-0.005em',
          flexShrink: 0,
        }}>{family}</span>
      )}

      <div style={{ marginLeft: 'auto', display: 'flex', gap: 6, flexShrink: 0 }}>
        <FuncbarBtn label="Compare" />
        <FuncbarBtn label={'Animate\u2026'} />
      </div>
    </div>
  );
}
function FuncbarBtn({ label }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: '4px 10px',
        background: hover ? T.bg.subtle : '#fff',
        border: `1px solid ${hover ? T.border.strong : T.border.mid}`,
        borderRadius: T.radius.sm,
        fontSize: 12, fontWeight: 500,
        color: T.text.body,
        cursor: 'pointer',
        transition: 'all 120ms',
      }}
    >{label}</button>
  );
}

// ============================================================
// LEFT RAIL
// ============================================================
export function LeftRail({ overlays, annotations, onToggleOverlay, onToggleAnnot, onReset }) {
  return (
    <nav style={{
      borderRight: `1px solid ${T.border.soft}`,
      background: T.bg.subtle,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '6px 0',
      gap: 1,
    }}>
      <RailLabel>OVRL</RailLabel>
      <RailToggle on={overlays.fp}   onClick={() => onToggleOverlay('fp')}   tt={(<><b>Derivative f&apos;(x)</b>{' \u00B7 overlay the derivative curve on the graph'}</>)}><IcDeriv /></RailToggle>
      <RailToggle on={overlays.fpp}  onClick={() => onToggleOverlay('fpp')}  tt={(<><b>Second derivative f\u2033(x)</b>{' \u00B7 overlay curve'}</>)}><IcDeriv2 /></RailToggle>
      <RailToggle on={overlays.anti} onClick={() => onToggleOverlay('anti')} tt={(<><b>Antiderivative F(x)</b>{' \u00B7 numeric cumulative integral over the viewport'}</>)}><IcAnti /></RailToggle>
      <RailToggle on={overlays.inv}  onClick={() => onToggleOverlay('inv')}  tt={(<><b>Inverse f\u207B\u00B9(x)</b>{' \u00B7 reflection of f across y = x'}</>)}><IcInv /></RailToggle>

      <RailDivider />
      <RailLabel>MRKS</RailLabel>

      <RailToggle on={annotations.roots}   onClick={() => onToggleAnnot('roots')}   tt={(<><b>Roots</b>{' \u00B7 mark x-intercepts (where f(x) = 0)'}</>)}><IcRoots /></RailToggle>
      <RailToggle on={annotations.extrema} onClick={() => onToggleAnnot('extrema')} tt={(<><b>Extrema</b>{' \u00B7 mark local and global min/max'}</>)}><IcExt /></RailToggle>
      <RailToggle on={annotations.inflect} onClick={() => onToggleAnnot('inflect')} tt={(<><b>Inflection points</b>{' \u00B7 mark points where concavity changes'}</>)}><IcInfl /></RailToggle>
      <RailToggle on={annotations.asymp}   onClick={() => onToggleAnnot('asymp')}   tt={(<><b>Asymptotes</b>{' \u00B7 dashed vertical asymptote lines'}</>)}><IcAsymp /></RailToggle>
      <RailToggle on={annotations.tangent} onClick={() => onToggleAnnot('tangent')} tt={(<><b>Tangent at cursor</b>{' \u00B7 line touching f at the cursor x'}</>)}><IcTan /></RailToggle>
      <RailToggle on={annotations.area}    onClick={() => onToggleAnnot('area')}    tt={(<><b>Shaded area</b>{' \u00B7 signed area under f over a chosen interval'}</>)}><IcArea /></RailToggle>

      <div style={{ flex: 1, minHeight: 4 }} />

      <RailBtn onClick={onReset} tt={(<><b>Reset</b>{' \u00B7 turn off all overlays and marks'}</>)}><IcReset /></RailBtn>
    </nav>
  );
}

function RailLabel({ children }) {
  return (
    <div style={{
      fontSize: 8, fontWeight: 600, letterSpacing: '0.1em',
      color: T.text.faint, textTransform: 'uppercase',
      margin: '6px 0 3px', textAlign: 'center',
      fontFamily: T.font.mono,
    }}>{children}</div>
  );
}
function RailDivider() {
  return <div style={{ width: 22, height: 1, background: T.border.mid, margin: '6px auto 4px' }} />;
}
function RailToggle({ on, onClick, children, tt }) {
  return (
    <Tooltip content={tt} placement="right">
      <button
        onClick={onClick}
        style={{
          width: 34, height: 32,
          display: 'grid', placeItems: 'center',
          borderRadius: T.radius.sm,
          color: on ? T.c.blueD : T.text.muted,
          background: on ? T.bg.tintBlue : 'transparent',
          boxShadow: on ? T.shadow.s1 : 'none',
          border: 'none',
          position: 'relative',
          cursor: 'pointer',
          transition: 'all 120ms',
        }}
      >
        {on && <span style={{
          position: 'absolute',
          left: -10, top: 6, bottom: 6, width: 3,
          borderRadius: '0 2px 2px 0', background: T.c.blue,
        }} />}
        {children}
      </button>
    </Tooltip>
  );
}
function RailBtn({ onClick, children, tt }) {
  return (
    <Tooltip content={tt} placement="right">
      <button
        onClick={onClick}
        style={{
          width: 34, height: 32,
          display: 'grid', placeItems: 'center',
          borderRadius: T.radius.sm,
          color: T.text.muted, background: 'transparent',
          border: 'none', cursor: 'pointer', transition: 'all 120ms',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = T.text.strong; e.currentTarget.style.boxShadow = T.shadow.s1; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.text.muted; e.currentTarget.style.boxShadow = 'none'; }}
      >{children}</button>
    </Tooltip>
  );
}
const IcDeriv  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M4 18 L20 6"/></svg>;
const IcDeriv2 = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="4" y1="14" x2="20" y2="14"/></svg>;
const IcAnti   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 4c4 0 2 16 6 16"/></svg>;
const IcInv    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="4" y1="20" x2="20" y2="4"/><path d="M4 18 L20 6" opacity="0.4"/></svg>;
const IcRoots  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="12" r="2.5"/></svg>;
const IcExt    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 18 Q12 4 20 18"/><circle cx="12" cy="11" r="2.2" fill="currentColor"/></svg>;
const IcInfl   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 18 C8 18 8 6 12 6 S16 18 20 18"/><circle cx="12" cy="12" r="1.8" fill="currentColor"/></svg>;
const IcAsymp  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2"><line x1="4" y1="20" x2="20" y2="20"/><line x1="6" y1="4" x2="6" y2="22"/></svg>;
const IcTan    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 20 Q12 4 20 20"/><line x1="3" y1="18" x2="21" y2="6" strokeDasharray="3 2"/></svg>;
const IcArea   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 18 Q12 6 20 18 L20 20 L4 20 Z" fill="currentColor" fillOpacity="0.25"/></svg>;
const IcReset  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>;

// ============================================================
// GRAPH VIEW SWITCH  (v3: tooltips added)
// ============================================================
export function GraphViewSwitch({ value, onChange }) {
  const opts = [
    { v: 'graph', label: 'Graph', tt: (<><b>Graph view</b>{' \u00B7 standard 2D plot'}</>) },
    { v: 'table', label: 'Table', tt: (<><b>Table view</b>{' \u00B7 numeric input/output pairs'}</>) },
    { v: 'map',   label: 'Map',   tt: (<><b>Mapping view</b>{' \u00B7 discrete domain \u2192 range arrows'}</>) },
  ];
  return (
    <div style={{
      position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)',
      background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(6px)',
      border: `1px solid ${T.border.mid}`,
      borderRadius: T.radius.sm,
      padding: 2, display: 'flex', gap: 2,
      zIndex: 10, boxShadow: T.shadow.s1,
    }}>
      {opts.map(opt => (
        <Tooltip key={opt.v} content={opt.tt} placement="bottom">
          <button onClick={() => onChange(opt.v)} style={{
            padding: '3px 9px', fontSize: 10.5, fontWeight: 500,
            color: value === opt.v ? T.c.blueD : T.text.muted,
            background: value === opt.v ? T.bg.tintBlue : 'transparent',
            border: 'none', borderRadius: 3, cursor: 'pointer',
            fontFamily: T.font.sans, letterSpacing: '-0.005em',
          }}>{opt.label}</button>
        </Tooltip>
      ))}
    </div>
  );
}

// ============================================================
// RIGHT TABS RAIL
// ============================================================
export function RightTabs({ active, onChange }) {
  const tabs = [
    { id: 'properties', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>, tt: (<><b>Properties</b>{' \u00B7 domain, range, roots, symmetry, continuity, extrema, and more'}</>) },
    { id: 'transforms', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>, tt: (<><b>Transformations &amp; ops</b>{' \u00B7 parent function, shifts, scales, composition'}</>) },
    { id: 'calculus',   icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 4c-3 0-4 3-5 8s-2 8-5 8"/><line x1="6" y1="12" x2="18" y2="12"/></svg>, tt: (<><b>Calculus bridge</b>{' \u00B7 derivative, integral, tangent \u2014 mention only; full coverage in /calculus'}</>) },
    { id: 'theory',     icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>, tt: (<><b>Theory &amp; reading</b>{' \u00B7 curated theory pages and tools for this function'}</>) },
  ];
  return (
    <nav style={{
      borderLeft: `1px solid ${T.border.soft}`,
      background: T.bg.subtle,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', padding: '8px 0', gap: 2,
    }}>
      {tabs.map(t => {
        const isActive = active === t.id;
        return (
          <Tooltip key={t.id} content={t.tt} placement="left">
            <button
              onClick={() => onChange(t.id)}
              style={{
                width: 34, height: 34, position: 'relative',
                display: 'grid', placeItems: 'center',
                borderRadius: T.radius.sm,
                color: isActive ? T.c.blueD : T.text.muted,
                background: isActive ? '#fff' : 'transparent',
                boxShadow: isActive ? T.shadow.s1 : 'none',
                border: 'none', cursor: 'pointer',
                transition: 'all 120ms',
              }}
            >
              {isActive && <span style={{
                position: 'absolute',
                right: -10, top: 7, bottom: 7, width: 3,
                background: T.c.blue, borderRadius: '2px 0 0 2px',
              }} />}
              <span style={{ width: 16, height: 16, display: 'inline-block', color: 'currentColor' }}>
                {React.cloneElement(t.icon, { width: 16, height: 16 })}
              </span>
            </button>
          </Tooltip>
        );
      })}
    </nav>
  );
}

// ============================================================
// RIGHT PANEL
// ============================================================
export function RightPanel({ title, subtitle, density, onDensityChange, children }) {
  return (
    <aside style={{
      borderLeft: `1px solid ${T.border.soft}`,
      background: T.bg.panel,
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
    }}>
      <div style={{
        padding: '12px 14px 10px',
        borderBottom: `1px solid ${T.border.soft}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: T.text.strong, letterSpacing: '-0.005em' }}>{title}</div>
          <div style={{ fontSize: 10.5, color: T.text.faint, letterSpacing: '0.02em' }}>{subtitle}</div>
        </div>
        <div style={{
          display: 'flex', background: T.bg.subtle,
          borderRadius: T.radius.sm, padding: 2,
          border: `1px solid ${T.border.soft}`,
          flexShrink: 0,
        }}>
          {['compact', 'roomy'].map(d => (
            <button key={d} onClick={() => onDensityChange(d)} style={{
              padding: '2px 7px', fontSize: 10.5, fontWeight: 500,
              color: density === d ? T.text.strong : T.text.muted,
              background: density === d ? '#fff' : 'transparent',
              boxShadow: density === d ? T.shadow.s1 : 'none',
              borderRadius: 4, border: 'none', cursor: 'pointer',
            }}>{d}</button>
          ))}
        </div>
      </div>
      <div className="fexp-no-scrollbar" style={{
        flex: 1, overflowY: 'auto', padding: '4px 0 12px',
      }}>{children}</div>
    </aside>
  );
}

// ============================================================
// INSIGHTS STRIP
// ============================================================
export function InsightsStrip({ defaults, pinned, onUnpin }) {
  return (
    <div className="fexp-no-scrollbar" style={{
      display: 'flex', alignItems: 'stretch', gap: 8,
      padding: '10px 14px',
      borderBottom: `1px solid ${T.border.soft}`,
      background: `linear-gradient(180deg, ${T.bg.subtle}, #fff)`,
      overflowX: 'auto',
    }}>
      {defaults.map(c => (
        <InsightCard key={c.id} card={c} />
      ))}
      {pinned.length > 0 && (
        <div style={{ flexShrink: 0, width: 1, background: T.border.mid, margin: '4px 4px', alignSelf: 'stretch' }} />
      )}
      {pinned.map(c => (
        <InsightCard key={c.id} card={c} pinned onUnpin={() => onUnpin(c.id)} />
      ))}
      <Tooltip content={(<><b>Pin a fact</b>{' \u00B7 choose any property to add as a card'}</>)} placement="top">
        <button style={{
          flexShrink: 0, minWidth: 44,
          background: 'transparent',
          border: `1px dashed ${T.border.mid}`,
          borderRadius: T.radius.md,
          display: 'grid', placeItems: 'center',
          color: T.text.faint, cursor: 'pointer',
          transition: 'all 140ms',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = T.c.blue; e.currentTarget.style.color = T.c.blue; e.currentTarget.style.background = T.bg.tintBlue; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = T.border.mid; e.currentTarget.style.color = T.text.faint; e.currentTarget.style.background = 'transparent'; }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
      </Tooltip>
    </div>
  );
}
function InsightCard({ card, pinned = false, onUnpin }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        flexShrink: 0, minWidth: 140,
        background: pinned ? T.bg.tintBlue : '#fff',
        border: `1px ${pinned ? 'dashed' : 'solid'} ${pinned ? T.border.blue : T.border.soft}`,
        borderRadius: T.radius.md,
        padding: '7px 10px 8px',
        position: 'relative', cursor: 'pointer',
        transition: 'all 140ms',
        boxShadow: hover ? T.shadow.s1 : 'none',
        transform: hover ? 'translateY(-1px)' : 'none',
        display: 'flex', flexDirection: 'column', gap: 1,
      }}
    >
      <div style={{
        fontSize: 9.5, fontWeight: 500, color: pinned ? T.c.blueD : T.text.faint,
        letterSpacing: '0.08em', textTransform: 'uppercase',
        display: 'flex', alignItems: 'center', gap: 4,
      }}>
        <span style={{ width: 5, height: 5, borderRadius: '50%', background: T.c.blue, display: 'inline-block' }} />
        {card.label}
      </div>
      <div style={{ fontFamily: T.font.mono, fontSize: 13.5, fontWeight: 500, color: T.text.strong, letterSpacing: '-0.01em' }}>
        {card.value}
      </div>
      {card.sub && <div style={{ fontSize: 10.5, color: T.text.muted }}>{card.sub}</div>}
      {pinned && (
        <button
          onClick={(e) => { e.stopPropagation(); onUnpin && onUnpin(); }}
          style={{
            position: 'absolute', top: 5, right: 5,
            width: 16, height: 16,
            display: 'grid', placeItems: 'center',
            borderRadius: 3, color: T.text.faint,
            opacity: hover ? 0.8 : 0,
            background: 'transparent', border: 'none',
            cursor: 'pointer', transition: 'opacity 120ms',
          }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      )}
    </div>
  );
}

// ============================================================
// STATUS BAR
// ============================================================
export function StatusBar({ cursor, viewport, mode }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 14,
      padding: '0 14px',
      background: T.bg.subtle,
      fontFamily: T.font.mono, fontSize: 11, color: T.text.muted,
    }}>
      <StatGroup k="cursor">
        <Vstat>x:&nbsp;{cursor.x.toFixed(2)}</Vstat>
        <Vstat>y:&nbsp;{cursor.y.toFixed(2)}</Vstat>
      </StatGroup>
      <StatDivider />
      <StatGroup k="viewport">
        <Vstat>[{viewport.xMin.toFixed(1)}, {viewport.xMax.toFixed(1)}] &times; [{viewport.yMin.toFixed(1)}, {viewport.yMax.toFixed(1)}]</Vstat>
      </StatGroup>
      <StatDivider />
      <StatGroup k="mode">
        <Vstat>{mode}</Vstat>
      </StatGroup>
    </div>
  );
}
function StatGroup({ k, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <span style={{ color: T.text.faint, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{k}</span>
      {children}
    </div>
  );
}
function Vstat({ children }) {
  return <span style={{ color: T.text.body, fontVariantNumeric: 'tabular-nums' }}>{children}</span>;
}
function StatDivider() {
  return <span style={{ width: 1, height: 12, background: T.border.mid }} />;
}

// ============================================================
// ALT VIEWS
// ============================================================
export function NumericTable({ fn, xMin, xMax, step = 0.5 }) {
  const thStyle = {
    textAlign: 'left', padding: '6px 14px',
    borderBottom: `1px solid ${T.border.mid}`,
    color: T.text.faint, fontWeight: 500, fontSize: 10,
    textTransform: 'uppercase', letterSpacing: '0.06em',
  };
  const tdStyle = {
    padding: '4px 14px',
    borderBottom: `1px solid ${T.border.soft}`,
    color: T.text.strong,
  };
  const rows = [];
  for (let x = xMin; x <= xMax + 1e-9; x += step) {
    let y;
    try { y = fn(x); } catch { y = NaN; }
    rows.push({ x, y });
  }
  return (
    <div style={{ padding: 24, overflow: 'auto', width: '100%', height: '100%' }}>
      <table style={{
        borderCollapse: 'collapse', fontFamily: T.font.mono, fontSize: 12, margin: '0 auto',
      }}>
        <thead>
          <tr>
            <th style={thStyle}>x</th>
            <th style={thStyle}>f(x)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td style={tdStyle}>{r.x.toFixed(2)}</td>
              <td style={tdStyle}>{Number.isFinite(r.y) ? r.y.toFixed(3) : '\u2014'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function MappingDiagram({ fn, domain }) {
  const w = 300, h = 360;
  const ys = domain.map(x => { try { return fn(x); } catch { return NaN; } });
  const finiteYs = ys.filter(Number.isFinite);
  const yMin = Math.min(...finiteYs);
  const yMax = Math.max(...finiteYs);
  const yPad = (yMax - yMin) * 0.1 || 1;
  const yRange = [yMin - yPad, yMax + yPad];

  const xColX = 80, yColX = 220;
  const topY = 30, botY = h - 30;
  const xToScreen = (i) => topY + (i / (domain.length - 1)) * (botY - topY);
  const yToScreen = (y) => {
    const t = (y - yRange[0]) / (yRange[1] - yRange[0]);
    return botY - t * (botY - topY);
  };

  return (
    <div style={{ padding: 20, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <text x={xColX} y={15} textAnchor="middle" fontFamily={T.font.mono} fontSize="11" fill={T.text.muted}>x</text>
        <text x={yColX} y={15} textAnchor="middle" fontFamily={T.font.mono} fontSize="11" fill={T.text.muted}>f(x)</text>
        {domain.map((x, i) => (
          <g key={i}>
            <circle cx={xColX} cy={xToScreen(i)} r="4" fill={T.c.blue} />
            <text x={xColX - 12} y={xToScreen(i) + 4} textAnchor="end" fontFamily={T.font.mono} fontSize="11" fill={T.text.strong}>{x}</text>
            {Number.isFinite(ys[i]) && (
              <>
                <line x1={xColX + 6} y1={xToScreen(i)} x2={yColX - 6} y2={yToScreen(ys[i])} stroke={T.text.faint} strokeWidth="1" />
                <circle cx={yColX} cy={yToScreen(ys[i])} r="4" fill={T.c.slate} />
                <text x={yColX + 12} y={yToScreen(ys[i]) + 4} fontFamily={T.font.mono} fontSize="11" fill={T.text.strong}>{ys[i].toFixed(2)}</text>
              </>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}

// ============================================================
// SMALL HELPERS
// ============================================================
function fmt(v) {
  if (!isFinite(v)) return v > 0 ? '+\u221E' : '\u2212\u221E';
  const r = Math.round(v * 1e4) / 1e4;
  return Number.isInteger(r) ? r.toString() : r.toFixed(2);
}