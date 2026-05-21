// import React, { useState } from 'react';

// // ─── Plug in your real implementation, then remove the stub below ──
// // import { processContent } from '../../utils/contentProcessor';
// const processContent = (s) => s;
// // ───────────────────────────────────────────────────────────────────

// // ─── Palette (mirrors FormulasTOC so cards feel native to the site) ─

// const ACCENT = '#4a6cf7';
// const ACCENT_LIGHT = '#eef1fd';
// const ACCENT_HOVER = '#dbe1fc';

// const FORMULA_BG = '#E9EFF5';
// const FORMULA_BORDER = '#BCCBDA';
// const FORMULA_ACCENT_BAR = '#5b7ca3';
// const FORMULA_INK = '#5b7ca3';
// const FORMULA_INK_HOVER = '#3f5c7e';

// const INK = '#1e293b';
// const INK_SOFT = '#334155';
// const MUTED = '#94a3b8';
// const BORDER = '#d0d9ed';
// const BORDER_SOFT = '#e2e8f0';
// const SURFACE = '#fff';
// const SURFACE_2 = '#f1f5f9';
// const SURFACE_3 = '#f8fafc';

// const SERIF = "'Source Serif 4', Georgia, serif";
// const MONO = "ui-monospace, 'JetBrains Mono', monospace";

// // Hide scrollbars everywhere inside the card while keeping scroll
// const HIDE_SCROLLBAR_CSS = `
//   .ccard-no-scrollbar::-webkit-scrollbar { display: none; width: 0; height: 0; }
// `;

// const noScrollStyle = {
//   scrollbarWidth: 'none',
//   msOverflowStyle: 'none',
// };

// // ─── Helpers ──────────────────────────────────────────────────────

// function normalizeArray(val) {
//   if (val == null) return [];
//   return Array.isArray(val) ? val : [val];
// }

// function toId(name) {
//   if (!name) return '';
//   return name.toLowerCase().replace(/['\u2019()]/g, '').replace(/\s+/g, '_');
// }

// // ─── Placeholder Child Components ─────────────────────────────────
// // Override via the `components` prop on CalculationCard, e.g.:
// //   <CalculationCard components={{ AlgorithmSteps: MyRealSteps }} />

// function ChildPlaceholder({ name, ...rest }) {
//   const propKeys = Object.keys(rest);
//   return (
//     <div style={{
//       padding: '14px 16px',
//       background: SURFACE_3,
//       border: `1.5px dashed ${BORDER}`,
//       borderRadius: '8px',
//       color: MUTED,
//       fontSize: '14px',
//       fontFamily: MONO,
//     }}>
//       <div style={{ color: INK_SOFT, fontWeight: 600 }}>
//         &lt;{name}&gt; placeholder
//       </div>
//       {propKeys.length > 0 && (
//         <div style={{ marginTop: '6px', fontSize: '12px' }}>
//           props: {propKeys.join(', ')}
//         </div>
//       )}
//     </div>
//   );
// }

// const DEFAULT_COMPONENTS = {
//   AlgorithmSteps:     (p) => <ChildPlaceholder name="AlgorithmSteps" {...p} />,
//   MathDerivation:     (p) => <ChildPlaceholder name="MathDerivation" {...p} />,
//   FormulaExplanation: (p) => <ChildPlaceholder name="FormulaExplanation" {...p} />,
//   PitfallsList:       (p) => <ChildPlaceholder name="PitfallsList" {...p} />,
//   MatrixExample:      (p) => <ChildPlaceholder name="MatrixExample" {...p} />,
// };

// // ─── FieldContent: dispatches strings / arrays / blocks / components ─

// function FieldContent({ value, components }) {
//   if (value == null) return null;
//   if (typeof value === 'string') {
//     return <div style={prose}>{processContent(value)}</div>;
//   }
//   if (Array.isArray(value)) {
//     return (
//       <div>
//         {value.map((block, i) => (
//           <FieldContentBlock key={i} block={block} components={components} />
//         ))}
//       </div>
//     );
//   }
//   if (typeof value === 'object') {
//     return <FieldContentBlock block={value} components={components} />;
//   }
//   return null;
// }

// function FieldContentBlock({ block, components }) {
//   if (block == null) return null;
//   if (typeof block === 'string') {
//     return <div style={prose}>{processContent(block)}</div>;
//   }
//   if (typeof block !== 'object') return null;

//   // Embedded component dispatch
//   if (block.component) {
//     const Comp = components[block.component];
//     if (Comp) {
//       const { component, ...props } = block;
//       return <Comp {...props} />;
//     }
//     return <ChildPlaceholder name={block.component} />;
//   }

//   const { text, links, illustrations } = block;
//   const ills = normalizeArray(illustrations);
//   const lks = normalizeArray(links);

//   return (
//     <div>
//       {text && <div style={prose}>{processContent(text)}</div>}
//       {ills.map((ill, i) => <Illustration key={i} item={ill} />)}
//       {lks.length > 0 && <LinksRow links={lks} />}
//     </div>
//   );
// }

// const prose = {
//   color: INK_SOFT,
//   lineHeight: 1.7,
//   fontSize: '15px',
// };

// // ─── Illustration ─────────────────────────────────────────────────

// function Illustration({ item }) {
//   const { src, alt = '', caption, width } = item;
//   const isSvg = typeof src === 'string' && src.trimStart().startsWith('<svg');

//   return (
//     <div style={{
//       margin: '14px 0',
//       padding: '14px',
//       background: SURFACE_3,
//       borderRadius: '8px',
//       border: `0.5px solid ${BORDER_SOFT}`,
//     }}>
//       {isSvg ? (
//         <div
//           style={{ maxWidth: width ? `${width}px` : '100%', margin: '0 auto' }}
//           dangerouslySetInnerHTML={{ __html: src }}
//         />
//       ) : (
//         <img
//           src={src}
//           alt={alt}
//           loading="lazy"
//           style={{
//             display: 'block',
//             margin: '0 auto',
//             maxWidth: width ? `${width}px` : '100%',
//             width: '100%',
//             height: 'auto',
//             borderRadius: '4px',
//           }}
//         />
//       )}
//       {caption && (
//         <p style={{
//           margin: '8px 0 0',
//           fontSize: '13px',
//           color: MUTED,
//           textAlign: 'center',
//           lineHeight: 1.5,
//         }}>
//           {processContent(caption)}
//         </p>
//       )}
//     </div>
//   );
// }

// // ─── Inline links (used inside field content) ────────────────────

// function LinksRow({ links }) {
//   const filtered = links.filter((l) => l && (l.url || l.href));
//   if (filtered.length === 0) return null;
//   return (
//     <div style={{
//       margin: '14px 0 0',
//       display: 'flex',
//       flexWrap: 'wrap',
//       gap: '8px',
//     }}>
//       {filtered.map((l, i) => <InlineLinkPill key={i} link={l} />)}
//     </div>
//   );
// }

// function InlineLinkPill({ link }) {
//   const [hover, setHover] = useState(false);
//   const url = link.url || link.href;
//   const label = link.label || link.text || url;
//   return (
//     <a
//       href={url}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//       style={{
//         display: 'inline-flex',
//         alignItems: 'center',
//         gap: '4px',
//         fontSize: '14px',
//         color: '#2563eb',
//         textDecoration: 'none',
//         padding: '6px 14px',
//         border: `0.5px solid ${BORDER_SOFT}`,
//         borderRadius: '20px',
//         background: hover ? '#eff4ff' : SURFACE_3,
//         transition: 'background 0.15s',
//       }}
//     >
//       <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
//         <path
//           d="M3 11L11 3M11 3H6M11 3v5"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="1.2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//       {processContent(label)}
//     </a>
//   );
// }

// // ─── Front-of-card icon buttons ──────────────────────────────────

// const ICON_PATHS = {
//   link: 'M6 8l-2 2a2 2 0 0 1-2.8-2.8l3-3a2 2 0 0 1 2.8 0M8 6l2-2a2 2 0 0 1 2.8 2.8l-3 3a2 2 0 0 1-2.8 0',
//   book: 'M2 2h4a2 2 0 0 1 2 2v8a1.5 1.5 0 0 0-1.5-1.5H2zM12 2H8a2 2 0 0 0-2 2v8a1.5 1.5 0 0 1 1.5-1.5H12z',
//   rules: 'M2 3h10M2 7h10M2 11h6',
//   tool: 'M9 2a3 3 0 0 0-2.4 4.8l-4 4a1.5 1.5 0 1 0 2.1 2.1l4-4A3 3 0 0 0 12 5',
//   external: 'M3 11L11 3M11 3H6M11 3v5',
// };

// function FrontIconButton({ link }) {
//   const [hover, setHover] = useState(false);
//   const url = link.url || link.href;
//   const tip = link.tip || link.label || link.text;
//   const path = ICON_PATHS[link.icon] || ICON_PATHS.link;
//   return (
//     <a
//       href={url}
//       title={tip}
//       onClick={(e) => e.stopPropagation()}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//       style={{
//         width: 32,
//         height: 32,
//         borderRadius: '6px',
//         background: hover ? SURFACE : SURFACE_2,
//         border: `1px solid ${hover ? ACCENT : BORDER_SOFT}`,
//         color: hover ? ACCENT : INK_SOFT,
//         display: 'inline-flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         textDecoration: 'none',
//         transition: 'all 0.15s',
//         flexShrink: 0,
//       }}
//     >
//       <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
//         <path d={path} strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     </a>
//   );
// }

// function FrontBackToTop() {
//   const [hover, setHover] = useState(false);
//   return (
//     <span
//       title="Back to top"
//       onClick={(e) => {
//         e.stopPropagation();
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       }}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//       style={{
//         width: 32,
//         height: 32,
//         borderRadius: '6px',
//         background: hover ? SURFACE : SURFACE_2,
//         border: `1px solid ${hover ? FORMULA_ACCENT_BAR : BORDER_SOFT}`,
//         color: hover ? FORMULA_INK_HOVER : FORMULA_INK,
//         display: 'inline-flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         cursor: 'pointer',
//         transition: 'all 0.15s',
//         flexShrink: 0,
//       }}
//     >
//       <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.7">
//         <path d="M7 11V3M3.5 6.5L7 3l3.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     </span>
//   );
// }

// // ─── Pinned essentials (Hybrid view) ─────────────────────────────

// function Pinned({ when, formula }) {
//   if (!when && !formula) return null;
//   const single = !when || !formula;

//   return (
//     <section style={{
//       padding: '18px 22px',
//       borderBottom: `1px solid ${BORDER_SOFT}`,
//       background: SURFACE,
//     }}>
//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: single ? '1fr' : '1fr 1fr',
//         gap: '10px',
//       }}>
//         {when && (
//           <FactBox label="When to use" labelColor={ACCENT}>
//             <div style={{ fontSize: '14px', color: INK, lineHeight: 1.45 }}>
//               {processContent(when)}
//             </div>
//           </FactBox>
//         )}
//         {formula && <FormulaBox formula={formula} compact />}
//       </div>
//     </section>
//   );
// }

// function FactBox({ label, labelColor, children }) {
//   return (
//     <div style={{
//       background: SURFACE_2,
//       border: `1px solid ${BORDER_SOFT}`,
//       borderRadius: '8px',
//       padding: '11px 13px',
//     }}>
//       <div style={{
//         fontSize: '10px',
//         fontFamily: MONO,
//         color: labelColor || ACCENT,
//         textTransform: 'uppercase',
//         letterSpacing: '0.06em',
//         marginBottom: '4px',
//         fontWeight: 600,
//       }}>
//         {label}
//       </div>
//       {children}
//     </div>
//   );
// }

// function FormulaBox({ formula, compact = false }) {
//   return (
//     <div style={{
//       display: 'flex',
//       background: FORMULA_BG,
//       border: `0.5px solid ${FORMULA_BORDER}`,
//       borderRadius: '8px',
//       overflow: 'hidden',
//       boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5)',
//     }}>
//       <div style={{ width: '3px', background: FORMULA_ACCENT_BAR, flexShrink: 0 }} />
//       <div
//         className="ccard-no-scrollbar"
//         style={{
//           flex: 1,
//           padding: compact ? '11px 14px' : '20px 18px',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           overflowX: 'auto',
//           ...noScrollStyle,
//         }}
//       >
//         {compact && (
//           <div style={{
//             fontSize: '10px',
//             fontFamily: MONO,
//             color: FORMULA_INK,
//             textTransform: 'uppercase',
//             letterSpacing: '0.06em',
//             marginBottom: '4px',
//             fontWeight: 600,
//           }}>
//             Formula
//           </div>
//         )}
//         <div style={{
//           fontFamily: MONO,
//           fontSize: compact ? '14px' : '16px',
//           color: INK,
//           lineHeight: 1.6,
//           textAlign: compact ? 'left' : 'center',
//         }}>
//           {processContent(formula)}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Tabs (Hybrid view) ──────────────────────────────────────────

// function TabsView({ fields, components }) {
//   const entries = Object.entries(fields).filter(([, v]) => v != null);
//   const [active, setActive] = useState(0);
//   if (entries.length === 0) return null;

//   return (
//     <>
//       <nav
//         className="ccard-no-scrollbar"
//         style={{
//           display: 'flex',
//           gap: 0,
//           padding: '0 22px',
//           borderBottom: `1px solid ${BORDER_SOFT}`,
//           background: SURFACE_2,
//           overflowX: 'auto',
//           ...noScrollStyle,
//         }}
//       >
//         {entries.map(([key], i) => (
//           <TabButton
//             key={key}
//             label={key.replace(/_/g, ' ')}
//             active={i === active}
//             onClick={() => setActive(i)}
//           />
//         ))}
//       </nav>
//       <div style={{ padding: '20px 22px 22px', background: SURFACE }}>
//         <FieldContent value={entries[active][1]} components={components} />
//       </div>
//     </>
//   );
// }

// function TabButton({ label, active, onClick }) {
//   const [hover, setHover] = useState(false);
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//       style={{
//         background: active ? SURFACE : 'transparent',
//         border: 'none',
//         padding: '11px 14px 13px',
//         font: 'inherit',
//         fontSize: '13px',
//         fontWeight: 600,
//         color: active ? ACCENT : hover ? INK : MUTED,
//         cursor: 'pointer',
//         borderBottom: `2px solid ${active ? ACCENT : 'transparent'}`,
//         marginBottom: '-1px',
//         whiteSpace: 'nowrap',
//         textTransform: 'capitalize',
//         transition: 'all 0.15s',
//       }}
//     >
//       {processContent(label)}
//     </button>
//   );
// }

// // ─── Stacked accordion (Stacked view) ────────────────────────────

// function StackedView({ when, formula, fields, components }) {
//   const entries = fields
//     ? Object.entries(fields).filter(([, v]) => v != null)
//     : [];
//   const hasEssentials = !!(when || formula);
//   if (!hasEssentials && entries.length === 0) return null;

//   return (
//     <div style={{ background: SURFACE }}>
//       {hasEssentials && (
//         <StackedRow
//           title="Essentials"
//           hint={[when && 'when to use', formula && 'formula'].filter(Boolean).join(' \u00b7 ')}
//           defaultOpen
//         >
//           {when && (
//             <>
//               <h4 style={subhead}>When to use</h4>
//               <p style={{ ...prose, margin: '0 0 14px' }}>
//                 {processContent(when)}
//               </p>
//             </>
//           )}
//           {formula && (
//             <>
//               <h4 style={subhead}>Formula</h4>
//               <FormulaBox formula={formula} />
//             </>
//           )}
//         </StackedRow>
//       )}
//       {entries.map(([key, value]) => (
//         <StackedRow key={key} title={key.replace(/_/g, ' ')}>
//           <FieldContent value={value} components={components} />
//         </StackedRow>
//       ))}
//     </div>
//   );
// }

// const subhead = {
//   fontFamily: 'inherit',
//   fontSize: '11px',
//   fontWeight: 700,
//   textTransform: 'uppercase',
//   letterSpacing: '0.06em',
//   color: MUTED,
//   margin: '0 0 10px',
// };

// function StackedRow({ title, hint, defaultOpen = false, children }) {
//   const [open, setOpen] = useState(defaultOpen);
//   return (
//     <div style={{ borderBottom: `1px solid ${BORDER_SOFT}` }}>
//       <button
//         type="button"
//         onClick={() => setOpen(!open)}
//         style={{
//           listStyle: 'none',
//           cursor: 'pointer',
//           padding: '13px 22px',
//           display: 'grid',
//           gridTemplateColumns: '16px 1fr',
//           alignItems: 'center',
//           gap: '12px',
//           userSelect: 'none',
//           background: open ? ACCENT_LIGHT : 'transparent',
//           border: 'none',
//           width: '100%',
//           textAlign: 'left',
//           font: 'inherit',
//         }}
//       >
//         <svg
//           width="12"
//           height="12"
//           viewBox="0 0 10 10"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           style={{
//             color: open ? ACCENT : MUTED,
//             transition: 'transform 0.15s',
//             transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
//           }}
//         >
//           <path d="M3 1l4 4-4 4" />
//         </svg>
//         <div>
//           <div style={{
//             fontWeight: 600,
//             fontSize: '14px',
//             color: INK,
//             textTransform: 'capitalize',
//           }}>
//             {processContent(title)}
//           </div>
//           {hint && (
//             <div style={{
//               fontSize: '12px',
//               color: MUTED,
//               marginTop: '1px',
//             }}>
//               {processContent(hint)}
//             </div>
//           )}
//         </div>
//       </button>
//       <div style={{
//         display: 'grid',
//         gridTemplateRows: open ? '1fr' : '0fr',
//         transition: 'grid-template-rows 0.25s ease',
//         background: SURFACE,
//       }}>
//         <div style={{ overflow: 'hidden', minHeight: 0 }}>
//           <div style={{ padding: '4px 22px 18px 50px' }}>
//             {children}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ═══════════════════════════════════════════════════════════════════
// // MAIN
// // ═══════════════════════════════════════════════════════════════════

// export default function CalculationCard({
//   data = {},
//   view = 'hybrid',              // 'hybrid' | 'stacked'
//   expanded,                      // controlled mode (optional)
//   onToggle,                      // called on user toggle (controlled)
//   defaultExpanded = false,       // initial state (uncontrolled)
//   isHighlighted = false,
//   components = {},
// }) {
//   const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
//   const isControlled = expanded !== undefined;
//   const isExpanded = isControlled ? expanded : internalExpanded;

//   const handleToggle = () => {
//     if (onToggle) onToggle();
//     if (!isControlled) setInternalExpanded((p) => !p);
//   };

//   if (!data) return null;

//   const {
//     id,
//     name,
//     subtitle,
//     glyph,
//     tag,
//     when,
//     formula,
//     links,
//     fields,
//   } = data;

//   const linkList = normalizeArray(links).filter((l) => l && (l.url || l.href));
//   const hasFields = fields
//     && typeof fields === 'object'
//     && Object.keys(fields).length > 0;
//   const hasBody = hasFields || when || formula;
//   const cardId = id || toId(name);
//   const mergedComponents = { ...DEFAULT_COMPONENTS, ...components };

//   return (
//     <>
//       <style>{HIDE_SCROLLBAR_CSS}</style>
//       <article
//         id={cardId}
//         style={{
//           background: SURFACE,
//           border: isHighlighted
//             ? `2px solid ${ACCENT}`
//             : isExpanded
//               ? `1.5px solid ${ACCENT}`
//               : `1.5px solid ${BORDER}`,
//           borderRadius: '12px',
//           overflow: 'hidden',
//           marginBottom: '10px',
//           boxShadow: isExpanded
//             ? '0 4px 16px rgba(74, 108, 247, 0.08)'
//             : '0 2px 6px rgba(15, 23, 42, 0.03)',
//           transition: 'border-color 0.15s, box-shadow 0.15s',
//           scrollMarginTop: '130px',
//         }}
//       >
//         {/* ─── Front (always visible) ──────────────────────────── */}
//         <header
//           onClick={handleToggle}
//           style={{
//             display: 'grid',
//             gridTemplateColumns: glyph
//               ? '44px 1fr auto auto'
//               : '1fr auto auto',
//             gap: '14px',
//             alignItems: 'center',
//             padding: '14px 16px 14px 18px',
//             cursor: hasBody ? 'pointer' : 'default',
//             userSelect: 'none',
//             background: isExpanded
//               ? `linear-gradient(180deg, ${ACCENT_LIGHT} 0%, transparent 100%)`
//               : SURFACE,
//             transition: 'background 0.15s',
//           }}
//         >
//           {glyph && (
//             <div style={{
//               width: 44,
//               height: 44,
//               borderRadius: '9px',
//               background: isExpanded ? ACCENT : ACCENT_LIGHT,
//               color: isExpanded ? '#fff' : ACCENT,
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontFamily: SERIF,
//               fontWeight: 600,
//               fontSize: '15px',
//               flexShrink: 0,
//               transition: 'all 0.15s',
//               boxShadow: isExpanded
//                 ? '0 2px 6px rgba(74,108,247,0.25)'
//                 : 'none',
//             }}>
//               {processContent(glyph)}
//             </div>
//           )}

//           <div style={{ minWidth: 0 }}>
//             {name && (
//               <h2 style={{
//                 fontFamily: SERIF,
//                 fontWeight: 600,
//                 fontSize: '20px',
//                 letterSpacing: '-0.015em',
//                 lineHeight: 1.2,
//                 margin: 0,
//                 color: INK,
//               }}>
//                 {processContent(name)}
//               </h2>
//             )}
//             {subtitle && (
//               <div style={{
//                 color: MUTED,
//                 fontSize: '13px',
//                 marginTop: '2px',
//                 whiteSpace: 'nowrap',
//                 overflow: 'hidden',
//                 textOverflow: 'ellipsis',
//               }}>
//                 {processContent(subtitle)}
//               </div>
//             )}
//           </div>

//           <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
//             {linkList.map((link, i) => (
//               <FrontIconButton key={i} link={link} />
//             ))}
//             <FrontBackToTop />
//           </div>

//           <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//             {tag && (
//               <span style={{
//                 fontSize: '10px',
//                 fontFamily: MONO,
//                 padding: '4px 9px',
//                 borderRadius: '4px',
//                 background: ACCENT_LIGHT,
//                 color: ACCENT,
//                 textTransform: 'uppercase',
//                 letterSpacing: '0.06em',
//                 whiteSpace: 'nowrap',
//               }}>
//                 {processContent(tag)}
//               </span>
//             )}
//             {hasBody && (
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 16 16"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 style={{
//                   color: isExpanded ? ACCENT : MUTED,
//                   transition: 'transform 0.25s ease, color 0.15s',
//                   transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
//                   flexShrink: 0,
//                 }}
//               >
//                 <path
//                   d="M4 6l4 4 4-4"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             )}
//           </div>
//         </header>

//         {/* ─── Body (collapsible) ─────────────────────────────── */}
//         {hasBody && (
//           <div style={{
//             display: 'grid',
//             gridTemplateRows: isExpanded ? '1fr' : '0fr',
//             transition: 'grid-template-rows 0.3s ease',
//           }}>
//             <div style={{ overflow: 'hidden', minHeight: 0 }}>
//               <div style={{
//                 borderTop: isExpanded
//                   ? `1px solid ${BORDER_SOFT}`
//                   : 'none',
//               }}>
//                 {view === 'hybrid' ? (
//                   <>
//                     <Pinned when={when} formula={formula} />
//                     {hasFields && (
//                       <TabsView
//                         fields={fields}
//                         components={mergedComponents}
//                       />
//                     )}
//                   </>
//                 ) : (
//                   <StackedView
//                     when={when}
//                     formula={formula}
//                     fields={fields}
//                     components={mergedComponents}
//                   />
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </article>
//     </>
//   );
// }



import React, { useState } from 'react';

// ─── Plug in your real implementation, then remove the stub below ──
// import { processContent } from '../../utils/contentProcessor';
const processContent = (s) => s;
// ───────────────────────────────────────────────────────────────────

// ─── Palette ──────────────────────────────────────────────────────

const ACCENT = '#4a6cf7';
const ACCENT_LIGHT = '#eef1fd';

const FORMULA_BG = '#E9EFF5';
const FORMULA_BORDER = '#BCCBDA';
const FORMULA_ACCENT_BAR = '#5b7ca3';
const FORMULA_INK = '#5b7ca3';
const FORMULA_INK_HOVER = '#3f5c7e';

const INK = '#1e293b';
const INK_SOFT = '#334155';
const MUTED = '#94a3b8';
const BORDER = '#d0d9ed';
const BORDER_SOFT = '#e2e8f0';
const SURFACE = '#fff';
const SURFACE_2 = '#f1f5f9';
const SURFACE_3 = '#f8fafc';

const SERIF = "'Source Serif 4', Georgia, serif";
const MONO = "ui-monospace, 'JetBrains Mono', monospace";

const HIDE_SCROLLBAR_CSS = `
  .ccard-no-scrollbar::-webkit-scrollbar { display: none; width: 0; height: 0; }
`;
const noScrollStyle = { scrollbarWidth: 'none', msOverflowStyle: 'none' };

// ─── Helpers ──────────────────────────────────────────────────────

function normalizeArray(val) {
  if (val == null) return [];
  return Array.isArray(val) ? val : [val];
}

function toId(name) {
  if (!name) return '';
  return name.toLowerCase().replace(/['\u2019()]/g, '').replace(/\s+/g, '_');
}

// ─── Placeholder Child Components ─────────────────────────────────

function ChildPlaceholder({ name, ...rest }) {
  const propKeys = Object.keys(rest);
  return (
    <div style={{
      padding: '14px 16px',
      background: SURFACE_3,
      border: `1.5px dashed ${BORDER}`,
      borderRadius: '8px',
      color: MUTED,
      fontSize: '14px',
      fontFamily: MONO,
    }}>
      <div style={{ color: INK_SOFT, fontWeight: 600 }}>
        &lt;{name}&gt; placeholder
      </div>
      {propKeys.length > 0 && (
        <div style={{ marginTop: '6px', fontSize: '12px' }}>
          props: {propKeys.join(', ')}
        </div>
      )}
    </div>
  );
}

const DEFAULT_COMPONENTS = {
  AlgorithmSteps:     (p) => <ChildPlaceholder name="AlgorithmSteps" {...p} />,
  MathDerivation:     (p) => <ChildPlaceholder name="MathDerivation" {...p} />,
  FormulaExplanation: (p) => <ChildPlaceholder name="FormulaExplanation" {...p} />,
  PitfallsList:       (p) => <ChildPlaceholder name="PitfallsList" {...p} />,
  MatrixExample:      (p) => <ChildPlaceholder name="MatrixExample" {...p} />,
};

// ─── Content dispatch ─────────────────────────────────────────────

const prose = { color: INK_SOFT, lineHeight: 1.7, fontSize: '15px' };

function FieldContent({ value, components }) {
  if (value == null) return null;
  if (typeof value === 'string') return <div style={prose}>{processContent(value)}</div>;
  if (Array.isArray(value)) {
    return (
      <div>
        {value.map((block, i) => <FieldContentBlock key={i} block={block} components={components} />)}
      </div>
    );
  }
  if (typeof value === 'object') return <FieldContentBlock block={value} components={components} />;
  return null;
}

function FieldContentBlock({ block, components }) {
  if (block == null) return null;
  if (typeof block === 'string') return <div style={prose}>{processContent(block)}</div>;
  if (typeof block !== 'object') return null;

  if (block.component) {
    const Comp = components[block.component];
    if (Comp) {
      const { component, ...props } = block;
      return <Comp {...props} />;
    }
    return <ChildPlaceholder name={block.component} />;
  }

  const { text, links, illustrations } = block;
  const ills = normalizeArray(illustrations);
  const lks = normalizeArray(links);

  return (
    <div>
      {text && <div style={prose}>{processContent(text)}</div>}
      {ills.map((ill, i) => <Illustration key={i} item={ill} />)}
      {lks.length > 0 && <LinksRow links={lks} />}
    </div>
  );
}

function Illustration({ item }) {
  const { src, alt = '', caption, width } = item;
  const isSvg = typeof src === 'string' && src.trimStart().startsWith('<svg');
  return (
    <div style={{ margin: '14px 0', padding: '14px', background: SURFACE_3, borderRadius: '8px', border: `0.5px solid ${BORDER_SOFT}` }}>
      {isSvg ? (
        <div
          style={{ maxWidth: width ? `${width}px` : '100%', margin: '0 auto' }}
          dangerouslySetInnerHTML={{ __html: src }}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          style={{
            display: 'block',
            margin: '0 auto',
            maxWidth: width ? `${width}px` : '100%',
            width: '100%',
            height: 'auto',
            borderRadius: '4px',
          }}
        />
      )}
      {caption && (
        <p style={{ margin: '8px 0 0', fontSize: '13px', color: MUTED, textAlign: 'center', lineHeight: 1.5 }}>
          {processContent(caption)}
        </p>
      )}
    </div>
  );
}

function LinksRow({ links }) {
  const filtered = links.filter((l) => l && (l.url || l.href));
  if (filtered.length === 0) return null;
  return (
    <div style={{ margin: '14px 0 0', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {filtered.map((l, i) => <InlineLinkPill key={i} link={l} />)}
    </div>
  );
}

function InlineLinkPill({ link }) {
  const [hover, setHover] = useState(false);
  const url = link.url || link.href;
  const label = link.label || link.text || url;
  return (
    <a
      href={url}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        fontSize: '14px',
        color: '#2563eb',
        textDecoration: 'none',
        padding: '6px 14px',
        border: `0.5px solid ${BORDER_SOFT}`,
        borderRadius: '20px',
        background: hover ? '#eff4ff' : SURFACE_3,
        transition: 'background 0.15s',
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
        <path d="M3 11L11 3M11 3H6M11 3v5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {processContent(label)}
    </a>
  );
}

// ─── Front-of-card icons ──────────────────────────────────────────

const ICON_PATHS = {
  link: 'M6 8l-2 2a2 2 0 0 1-2.8-2.8l3-3a2 2 0 0 1 2.8 0M8 6l2-2a2 2 0 0 1 2.8 2.8l-3 3a2 2 0 0 1-2.8 0',
  book: 'M2 2h4a2 2 0 0 1 2 2v8a1.5 1.5 0 0 0-1.5-1.5H2zM12 2H8a2 2 0 0 0-2 2v8a1.5 1.5 0 0 1 1.5-1.5H12z',
  rules: 'M2 3h10M2 7h10M2 11h6',
  tool: 'M9 2a3 3 0 0 0-2.4 4.8l-4 4a1.5 1.5 0 1 0 2.1 2.1l4-4A3 3 0 0 0 12 5',
  external: 'M3 11L11 3M11 3H6M11 3v5',
};

function FrontIconButton({ link }) {
  const [hover, setHover] = useState(false);
  const url = link.url || link.href;
  const tip = link.tip || link.label || link.text;
  const path = ICON_PATHS[link.icon] || ICON_PATHS.link;
  return (
    <a
      href={url}
      title={tip}
      onClick={(e) => e.stopPropagation()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: 32, height: 32,
        borderRadius: '6px',
        background: hover ? SURFACE : SURFACE_2,
        border: `1px solid ${hover ? ACCENT : BORDER_SOFT}`,
        color: hover ? ACCENT : INK_SOFT,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        transition: 'all 0.15s',
        flexShrink: 0,
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d={path} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

function FrontBackToTop() {
  const [hover, setHover] = useState(false);
  return (
    <span
      title="Back to top"
      onClick={(e) => {
        e.stopPropagation();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: 32, height: 32,
        borderRadius: '6px',
        background: hover ? SURFACE : SURFACE_2,
        border: `1px solid ${hover ? FORMULA_ACCENT_BAR : BORDER_SOFT}`,
        color: hover ? FORMULA_INK_HOVER : FORMULA_INK,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.15s',
        flexShrink: 0,
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M7 11V3M3.5 6.5L7 3l3.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

// ─── In-card view toggle (Hybrid / Stacked) ──────────────────────

function ViewToggle({ view, onChange }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '10px 16px 10px',
      background: SURFACE,
      borderBottom: `1px solid ${BORDER_SOFT}`,
    }}>
      <div style={{
        display: 'inline-flex',
        background: SURFACE_2,
        border: `1px solid ${BORDER_SOFT}`,
        borderRadius: '7px',
        padding: '2px',
      }}>
        <ViewSegBtn
          label="Hybrid"
          active={view === 'hybrid'}
          onClick={(e) => { e.stopPropagation(); onChange('hybrid'); }}
          icon={
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="1.5" y="2" width="11" height="3" rx=".5" />
              <rect x="1.5" y="7" width="11" height="5" rx=".5" />
            </svg>
          }
        />
        <ViewSegBtn
          label="Stacked"
          active={view === 'stacked'}
          onClick={(e) => { e.stopPropagation(); onChange('stacked'); }}
          icon={
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="1.5" y="2" width="11" height="2.5" rx=".5" />
              <rect x="1.5" y="5.75" width="11" height="2.5" rx=".5" />
              <rect x="1.5" y="9.5" width="11" height="2.5" rx=".5" />
            </svg>
          }
        />
      </div>
    </div>
  );
}

function ViewSegBtn({ label, active, onClick, icon }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: active ? SURFACE : 'transparent',
        border: 'none',
        padding: '5px 10px',
        font: 'inherit',
        fontSize: '12px',
        fontWeight: 600,
        color: active ? ACCENT : hover ? INK : MUTED,
        cursor: 'pointer',
        borderRadius: '5px',
        boxShadow: active ? '0 1px 2px rgba(15,20,25,.08)' : 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        transition: 'all 0.15s',
      }}
    >
      {icon}
      {label}
    </button>
  );
}

// ─── Pinned essentials (Hybrid view) ─────────────────────────────

function Pinned({ when, formula }) {
  if (!when && !formula) return null;
  const single = !when || !formula;
  return (
    <section style={{
      padding: '18px 22px',
      borderBottom: `1px solid ${BORDER_SOFT}`,
      background: SURFACE,
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: single ? '1fr' : '1fr 1fr',
        gap: '10px',
      }}>
        {when && (
          <FactBox label="When to use">
            <div style={{ fontSize: '14px', color: INK, lineHeight: 1.45 }}>
              {processContent(when)}
            </div>
          </FactBox>
        )}
        {formula && <FormulaBox formula={formula} compact />}
      </div>
    </section>
  );
}

function FactBox({ label, children }) {
  return (
    <div style={{
      background: SURFACE_2,
      border: `1px solid ${BORDER_SOFT}`,
      borderRadius: '8px',
      padding: '11px 13px',
    }}>
      <div style={{
        fontSize: '10px',
        fontFamily: MONO,
        color: ACCENT,
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        marginBottom: '4px',
        fontWeight: 600,
      }}>
        {label}
      </div>
      {children}
    </div>
  );
}

function FormulaBox({ formula, compact = false }) {
  return (
    <div style={{
      display: 'flex',
      background: FORMULA_BG,
      border: `0.5px solid ${FORMULA_BORDER}`,
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5)',
    }}>
      <div style={{ width: '3px', background: FORMULA_ACCENT_BAR, flexShrink: 0 }} />
      <div
        className="ccard-no-scrollbar"
        style={{
          flex: 1,
          padding: compact ? '11px 14px' : '20px 18px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflowX: 'auto',
          ...noScrollStyle,
        }}
      >
        {compact && (
          <div style={{
            fontSize: '10px',
            fontFamily: MONO,
            color: FORMULA_INK,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '4px',
            fontWeight: 600,
          }}>
            Formula
          </div>
        )}
        <div style={{
          fontFamily: MONO,
          fontSize: compact ? '14px' : '16px',
          color: INK,
          lineHeight: 1.6,
          textAlign: compact ? 'left' : 'center',
        }}>
          {processContent(formula)}
        </div>
      </div>
    </div>
  );
}

// ─── Tabs (Hybrid view) ──────────────────────────────────────────

function TabsView({ fields, components }) {
  const entries = Object.entries(fields).filter(([, v]) => v != null);
  const [active, setActive] = useState(0);
  if (entries.length === 0) return null;

  return (
    <>
      <nav
        className="ccard-no-scrollbar"
        style={{
          display: 'flex',
          gap: 0,
          padding: '0 22px',
          borderBottom: `1px solid ${BORDER_SOFT}`,
          background: SURFACE_2,
          overflowX: 'auto',
          ...noScrollStyle,
        }}
      >
        {entries.map(([key], i) => (
          <TabButton
            key={key}
            label={key.replace(/_/g, ' ')}
            active={i === active}
            onClick={() => setActive(i)}
          />
        ))}
      </nav>
      <div style={{ padding: '20px 22px 22px', background: SURFACE }}>
        <FieldContent value={entries[active][1]} components={components} />
      </div>
    </>
  );
}

function TabButton({ label, active, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: active ? SURFACE : 'transparent',
        border: 'none',
        padding: '11px 14px 13px',
        font: 'inherit',
        fontSize: '13px',
        fontWeight: 600,
        color: active ? ACCENT : hover ? INK : MUTED,
        cursor: 'pointer',
        borderBottom: `2px solid ${active ? ACCENT : 'transparent'}`,
        marginBottom: '-1px',
        whiteSpace: 'nowrap',
        textTransform: 'capitalize',
        transition: 'all 0.15s',
      }}
    >
      {processContent(label)}
    </button>
  );
}

// ─── Stacked accordion (Stacked view) ────────────────────────────

const subhead = {
  fontFamily: 'inherit',
  fontSize: '11px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color: MUTED,
  margin: '0 0 10px',
};

function StackedView({ when, formula, fields, components }) {
  const entries = fields ? Object.entries(fields).filter(([, v]) => v != null) : [];
  const hasEssentials = !!(when || formula);
  if (!hasEssentials && entries.length === 0) return null;

  return (
    <div style={{ background: SURFACE }}>
      {hasEssentials && (
        <StackedRow
          title="Essentials"
          hint={[when && 'when to use', formula && 'formula'].filter(Boolean).join(' \u00b7 ')}
          defaultOpen
        >
          {when && (
            <>
              <h4 style={subhead}>When to use</h4>
              <p style={{ ...prose, margin: '0 0 14px' }}>{processContent(when)}</p>
            </>
          )}
          {formula && (
            <>
              <h4 style={subhead}>Formula</h4>
              <FormulaBox formula={formula} />
            </>
          )}
        </StackedRow>
      )}
      {entries.map(([key, value]) => (
        <StackedRow key={key} title={key.replace(/_/g, ' ')}>
          <FieldContent value={value} components={components} />
        </StackedRow>
      ))}
    </div>
  );
}

function StackedRow({ title, hint, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: `1px solid ${BORDER_SOFT}` }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          listStyle: 'none',
          cursor: 'pointer',
          padding: '13px 22px',
          display: 'grid',
          gridTemplateColumns: '16px 1fr',
          alignItems: 'center',
          gap: '12px',
          userSelect: 'none',
          background: open ? ACCENT_LIGHT : 'transparent',
          border: 'none',
          width: '100%',
          textAlign: 'left',
          font: 'inherit',
        }}
      >
        <svg
          width="12" height="12" viewBox="0 0 10 10"
          fill="none" stroke="currentColor" strokeWidth="2"
          style={{
            color: open ? ACCENT : MUTED,
            transition: 'transform 0.15s',
            transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
          }}
        >
          <path d="M3 1l4 4-4 4" />
        </svg>
        <div>
          <div style={{ fontWeight: 600, fontSize: '14px', color: INK, textTransform: 'capitalize' }}>
            {processContent(title)}
          </div>
          {hint && (
            <div style={{ fontSize: '12px', color: MUTED, marginTop: '1px' }}>
              {processContent(hint)}
            </div>
          )}
        </div>
      </button>
      <div style={{
        display: 'grid',
        gridTemplateRows: open ? '1fr' : '0fr',
        transition: 'grid-template-rows 0.25s ease',
        background: SURFACE,
      }}>
        <div style={{ overflow: 'hidden', minHeight: 0 }}>
          <div style={{ padding: '4px 22px 18px 50px' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// MAIN — fully self-contained.
//   Pass `data`; optionally `components` to override placeholders.
//   Everything else (expand/collapse, hybrid/stacked, styling) internal.
//   Optional controlled props (view/expanded) exist for future parents.
// ═══════════════════════════════════════════════════════════════════

export default function CalculationCard({
  data = {},
  components = {},
  // Optional controlled overrides (parent-driven explorer can use these)
  view: viewProp,
  onViewChange,
  expanded: expandedProp,
  onToggle,
  defaultExpanded = false,
  defaultView = 'hybrid',
  isHighlighted = false,
}) {
  // Internal state with controlled-override pattern
  const [internalView, setInternalView] = useState(defaultView);
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);

  const view = viewProp !== undefined ? viewProp : internalView;
  const expanded = expandedProp !== undefined ? expandedProp : internalExpanded;

  const handleViewChange = (next) => {
    if (onViewChange) onViewChange(next);
    if (viewProp === undefined) setInternalView(next);
  };

  const handleToggle = () => {
    if (onToggle) onToggle();
    if (expandedProp === undefined) setInternalExpanded((p) => !p);
  };

  if (!data) return null;

  const { id, name, subtitle, glyph, tag, when, formula, links, fields } = data;
  const linkList = normalizeArray(links).filter((l) => l && (l.url || l.href));
  const hasFields = fields && typeof fields === 'object' && Object.keys(fields).length > 0;
  const hasBody = hasFields || when || formula;
  const cardId = id || toId(name);
  const mergedComponents = { ...DEFAULT_COMPONENTS, ...components };

  return (
    <>
      <style>{HIDE_SCROLLBAR_CSS}</style>
      <article
        id={cardId}
        style={{
          background: SURFACE,
          border: isHighlighted
            ? `2px solid ${ACCENT}`
            : expanded
              ? `1.5px solid ${ACCENT}`
              : `1.5px solid ${BORDER}`,
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '10px',
          boxShadow: expanded
            ? '0 4px 16px rgba(74, 108, 247, 0.08)'
            : '0 2px 6px rgba(15, 23, 42, 0.03)',
          transition: 'border-color 0.15s, box-shadow 0.15s',
          scrollMarginTop: '130px',
        }}
      >
        {/* ─── Front (always visible) ─────────────────────────── */}
        <header
          onClick={handleToggle}
          style={{
            display: 'grid',
            gridTemplateColumns: glyph ? '44px 1fr auto auto' : '1fr auto auto',
            gap: '14px',
            alignItems: 'center',
            padding: '14px 16px 14px 18px',
            cursor: hasBody ? 'pointer' : 'default',
            userSelect: 'none',
            background: expanded
              ? `linear-gradient(180deg, ${ACCENT_LIGHT} 0%, transparent 100%)`
              : SURFACE,
            transition: 'background 0.15s',
          }}
        >
          {glyph && (
            <div style={{
              width: 44, height: 44,
              borderRadius: '9px',
              background: expanded ? ACCENT : ACCENT_LIGHT,
              color: expanded ? '#fff' : ACCENT,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: SERIF,
              fontWeight: 600,
              fontSize: '15px',
              flexShrink: 0,
              transition: 'all 0.15s',
              boxShadow: expanded ? '0 2px 6px rgba(74,108,247,0.25)' : 'none',
            }}>
              {processContent(glyph)}
            </div>
          )}

          <div style={{ minWidth: 0 }}>
            {name && (
              <h2 style={{
                fontFamily: SERIF,
                fontWeight: 600,
                fontSize: '20px',
                letterSpacing: '-0.015em',
                lineHeight: 1.2,
                margin: 0,
                color: INK,
              }}>
                {processContent(name)}
              </h2>
            )}
            {subtitle && (
              <div style={{
                color: MUTED,
                fontSize: '13px',
                marginTop: '2px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
                {processContent(subtitle)}
              </div>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {linkList.map((link, i) => <FrontIconButton key={i} link={link} />)}
            <FrontBackToTop />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {tag && (
              <span style={{
                fontSize: '10px',
                fontFamily: MONO,
                padding: '4px 9px',
                borderRadius: '4px',
                background: ACCENT_LIGHT,
                color: ACCENT,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                whiteSpace: 'nowrap',
              }}>
                {processContent(tag)}
              </span>
            )}
            {hasBody && (
              <svg
                width="24" height="24" viewBox="0 0 16 16"
                fill="none" stroke="currentColor" strokeWidth="1.5"
                style={{
                  color: expanded ? ACCENT : MUTED,
                  transition: 'transform 0.25s ease, color 0.15s',
                  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  flexShrink: 0,
                }}
              >
                <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        </header>

        {/* ─── Body (collapsible) ─────────────────────────────── */}
        {hasBody && (
          <div style={{
            display: 'grid',
            gridTemplateRows: expanded ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.3s ease',
          }}>
            <div style={{ overflow: 'hidden', minHeight: 0 }}>
              <div style={{ borderTop: expanded ? `1px solid ${BORDER_SOFT}` : 'none' }}>
                {/* Built-in view toggle */}
                <ViewToggle view={view} onChange={handleViewChange} />

                {view === 'hybrid' ? (
                  <>
                    <Pinned when={when} formula={formula} />
                    {hasFields && <TabsView fields={fields} components={mergedComponents} />}
                  </>
                ) : (
                  <StackedView
                    when={when}
                    formula={formula}
                    fields={fields}
                    components={mergedComponents}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </article>
    </>
  );
}