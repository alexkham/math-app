
// // // // import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
// // // // import { processContent } from '../../utils/contentProcessor';

// // // // // ─── Constants ─────────────────────────────────────────────────

// // // // const ALL_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
// // // // const ACCENT = '#4a6cf7';
// // // // const ACCENT_LIGHT = '#eef1fd';
// // // // const ACCENT_BORDER = '#cdd5f8';
// // // // const ACCENT_HOVER = '#dbe1fc';

// // // // const HIDE_SCROLLBAR_CSS = `
// // // //   .ftoc-no-scrollbar::-webkit-scrollbar { display: none; }
// // // // `;

// // // // const toId = (name) => name.toLowerCase().replace(/\s+/g, '_');

// // // // const noScroll = {
// // // //   scrollbarWidth: 'none',
// // // //   msOverflowStyle: 'none',
// // // // };

// // // // function normalizeArray(val) {
// // // //   if (!val) return [];
// // // //   if (Array.isArray(val)) return val;
// // // //   return [val];
// // // // }

// // // // // ─── Styles ────────────────────────────────────────────────────

// // // // const S = {
// // // //   outerWrap: {
// // // //     maxWidth: '1150px',
// // // //     margin: '0 auto',
// // // //     padding: '0 20px',
// // // //   },
// // // //   innerWrap: {
// // // //     maxWidth: '820px',
// // // //     margin: '0 auto',
// // // //     padding: '0 16px',
// // // //   },

// // // //   /* ── View Toggle ── */
// // // //   toggleWrap: {
// // // //     display: 'flex',
// // // //     justifyContent: 'center',
// // // //     marginBottom: '24px',
// // // //   },
// // // //   toggleTrack: {
// // // //     display: 'inline-flex',
// // // //     background: '#f1f5f9',
// // // //     borderRadius: '12px',
// // // //     padding: '4px',
// // // //     border: '1px solid #e2e8f0',
// // // //   },

// // // //   /* ── TOC Cards ── */
// // // //   tocGrid: {
// // // //     display: 'grid',
// // // //     gridTemplateColumns: 'repeat(4, 1fr)',
// // // //     gap: '14px',
// // // //     marginBottom: '28px',
// // // //   },
// // // //   tocCard: {
// // // //     borderRadius: '12px',
// // // //     overflow: 'hidden',
// // // //     border: '1px solid #d0d9ed',
// // // //     background: '#fff',
// // // //   },
// // // //   tocCardHeader: {
// // // //     background: 'linear-gradient(135deg, #4a6cf7 0%, #3b5de7 100%)',
// // // //     color: '#fff',
// // // //     padding: '17px 20px',
// // // //     fontSize: '17px',
// // // //     fontWeight: '600',
// // // //   },
// // // //   tocCardBody: {
// // // //     padding: '5px 0',
// // // //   },
// // // //   tocPeek: {
// // // //     padding: '8px 18px 12px',
// // // //     display: 'flex',
// // // //     flexDirection: 'column',
// // // //     gap: '8px',
// // // //   },
// // // //   tocPeekFormula: {
// // // //     fontSize: '16px',
// // // //     background: '#f1f5f9',
// // // //     padding: '8px 12px',
// // // //     borderRadius: '6px',
// // // //     color: '#475569',
// // // //     lineHeight: '1.6',
// // // //   },

// // // //   /* ── Nav Panel ── */
// // // //   navPanel: {
// // // //     background: '#fff',
// // // //     border: '1.5px solid #d0d9ed',
// // // //     borderRadius: '16px',
// // // //     overflow: 'hidden',
// // // //     marginBottom: '28px',
// // // //   },
// // // //   alphaBar: {
// // // //     display: 'flex',
// // // //     flexWrap: 'nowrap',
// // // //     gap: '2px',
// // // //     padding: '12px 18px',
// // // //     background: '#f8fafc',
// // // //     borderBottom: '1.5px solid #e2e8f0',
// // // //     justifyContent: 'center',
// // // //     overflowX: 'auto',
// // // //     ...noScroll,
// // // //   },
// // // //   termGrid: {
// // // //     padding: '20px 24px',
// // // //     display: 'grid',
// // // //     gridTemplateColumns: '1fr 1fr',
// // // //     gap: '3px 24px',
// // // //   },
// // // //   catFilterRow: {
// // // //     display: 'flex',
// // // //     flexWrap: 'wrap',
// // // //     gap: '8px',
// // // //     padding: '17px 24px',
// // // //     borderTop: '1px solid #e2e8f0',
// // // //   },
// // // //   navStatus: {
// // // //     padding: '10px 24px 17px',
// // // //     fontSize: '16px',
// // // //     color: '#94a3b8',
// // // //     borderTop: '1px solid #e2e8f0',
// // // //     textAlign: 'right',
// // // //   },

// // // //   /* ── Search Bar ── */
// // // //   searchBar: {
// // // //     position: 'sticky',
// // // //     top: '63px',
// // // //     zIndex: 10,
// // // //     background: 'rgba(30, 58, 138, 0.75)',
// // // //     backdropFilter: 'blur(8px)',
// // // //     borderRadius: '4px',
// // // //     padding: '14px 20px',
// // // //     marginBottom: '32px',
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     gap: '14px',
// // // //   },
// // // //   searchWrapper: {
// // // //     position: 'relative',
// // // //     flex: 1,
// // // //   },
// // // //   searchClear: {
// // // //     position: 'absolute',
// // // //     top: '50%',
// // // //     right: '14px',
// // // //     transform: 'translateY(-50%)',
// // // //     border: 'none',
// // // //     background: 'none',
// // // //     color: '#94a3b8',
// // // //     fontSize: '16px',
// // // //     cursor: 'pointer',
// // // //     padding: '0',
// // // //     lineHeight: 1,
// // // //   },
// // // //   searchCount: {
// // // //     fontSize: '14px',
// // // //     color: '#c7d2e8',
// // // //     whiteSpace: 'nowrap',
// // // //     flexShrink: 0,
// // // //   },

// // // //   /* ── Category Group ── */
// // // //   groupHeader: {
// // // //     display: 'flex',
// // // //     alignItems: 'baseline',
// // // //     gap: '10px',
// // // //     margin: '0 0 16px',
// // // //     paddingBottom: '8px',
// // // //     borderBottom: '2px solid #c7d2e8',
// // // //   },
// // // //   groupTitle: {
// // // //     fontFamily: "'Source Serif 4', Georgia, serif",
// // // //     fontSize: '22px',
// // // //     fontWeight: '600',
// // // //     color: '#1e40af',
// // // //     margin: 0,
// // // //     letterSpacing: '0.01em',
// // // //   },
// // // //   groupCount: {
// // // //     fontSize: '14px',
// // // //     color: '#94a3b8',
// // // //     fontWeight: '400',
// // // //   },

// // // //   /* ── Formula Card ── */
// // // //   cardBody: {
// // // //     padding: '22px 26px',
// // // //     background: '#fbfcff',
// // // //   },
// // // //   cardName: {
// // // //     fontFamily: "'Source Serif 4', Georgia, serif",
// // // //     fontSize: '20px',
// // // //     fontWeight: '600',
// // // //     color: '#1e293b',
// // // //     margin: '0 0 8px',
// // // //     lineHeight: '1.3',
// // // //   },
// // // //   cardFormula: {
// // // //     fontSize: '17px',
// // // //     color: '#475569',
// // // //     lineHeight: '1.7',
// // // //     margin: 0,
// // // //   },
// // // //   cardToggle: {
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //     gap: '6px',
// // // //     padding: '12px 0 4px',
// // // //     cursor: 'pointer',
// // // //     color: ACCENT,
// // // //     fontSize: '15px',
// // // //     fontWeight: '500',
// // // //     userSelect: 'none',
// // // //   },
// // // //   cardDetail: (open) => ({
// // // //     borderTop: '1.5px solid #e2e8f0',
// // // //     background: '#f0f4fc',
// // // //     overflow: 'hidden',
// // // //     maxHeight: open ? '5000px' : '0',
// // // //     padding: open ? '20px 26px' : '0 26px',
// // // //     transition: 'max-height 0.35s ease, padding 0.3s ease',
// // // //   }),
// // // //   tabBody: {
// // // //     padding: '20px 22px',
// // // //     border: '1.5px solid #d0d9ed',
// // // //     borderRadius: '0 8px 8px 8px',
// // // //     fontSize: '17px',
// // // //     color: '#475569',
// // // //     lineHeight: '1.7',
// // // //     background: '#fff',
// // // //     minHeight: '60px',
// // // //   },

// // // //   /* ── Sidebar ── */
// // // //   sidebar: (visible, leftPos) => ({
// // // //     position: 'fixed',
// // // //     top: '20px',
// // // //     left: `${leftPos}px`,
// // // //     width: '200px',
// // // //     background: '#fff',
// // // //     border: '1.5px solid #d0d9ed',
// // // //     borderRadius: '12px',
// // // //     padding: '16px 14px',
// // // //     maxHeight: 'calc(100vh - 40px)',
// // // //     overflowY: 'auto',
// // // //     opacity: visible ? 1 : 0,
// // // //     transform: visible ? 'translateY(0)' : 'translateY(12px)',
// // // //     transition: 'opacity 0.3s, transform 0.3s',
// // // //     pointerEvents: visible ? 'auto' : 'none',
// // // //     zIndex: 50,
// // // //     ...noScroll,
// // // //   }),
// // // //   sidebarGroup: {
// // // //     marginBottom: '14px',
// // // //   },

// // // //   /* ── Empty State ── */
// // // //   empty: {
// // // //     textAlign: 'center',
// // // //     padding: '50px 20px',
// // // //     color: '#94a3b8',
// // // //     fontSize: '16px',
// // // //   },
// // // // };

// // // // // ─── Illustration ──────────────────────────────────────────────

// // // // function Illustration({ item }) {
// // // //   const { src, alt = '', caption, width } = item;
// // // //   const isSvg = typeof src === 'string' && src.trimStart().startsWith('<svg');

// // // //   const wrapStyle = {
// // // //     margin: '16px 0',
// // // //     padding: '16px',
// // // //     background: '#f8fafc',
// // // //     borderRadius: '8px',
// // // //     border: '0.5px solid #e2e8f0',
// // // //   };

// // // //   const imgStyle = {
// // // //     display: 'block',
// // // //     margin: '0 auto',
// // // //     maxWidth: width ? `${width}px` : '100%',
// // // //     width: '100%',
// // // //     height: 'auto',
// // // //     borderRadius: '4px',
// // // //   };

// // // //   const svgWrapStyle = {
// // // //     maxWidth: width ? `${width}px` : '100%',
// // // //     margin: '0 auto',
// // // //   };

// // // //   const captionStyle = {
// // // //     margin: '8px 0 0',
// // // //     fontSize: '13px',
// // // //     color: '#94a3b8',
// // // //     textAlign: 'center',
// // // //     lineHeight: '1.5',
// // // //   };

// // // //   return (
// // // //     <div style={wrapStyle}>
// // // //       {isSvg ? (
// // // //         <div
// // // //           style={svgWrapStyle}
// // // //           dangerouslySetInnerHTML={{ __html: src }}
// // // //         />
// // // //       ) : (
// // // //         <img src={src} alt={alt} style={imgStyle} loading="lazy" />
// // // //       )}
// // // //       {caption && <p style={captionStyle}>{processContent(caption)}</p>}
// // // //     </div>
// // // //   );
// // // // }

// // // // // ─── LinkPill ──────────────────────────────────────────────────

// // // // function LinkPill({ link }) {
// // // //   const [hovered, setHovered] = useState(false);
// // // //   const label = link.label || link.text || link.url;
// // // //   const url = link.url || link.href;

// // // //   if (!url) return null;

// // // //   const style = {
// // // //     display: 'inline-flex',
// // // //     alignItems: 'center',
// // // //     gap: '4px',
// // // //     fontSize: '14px',
// // // //     color: '#2563eb',
// // // //     textDecoration: 'none',
// // // //     padding: '6px 14px',
// // // //     border: '0.5px solid #e2e8f0',
// // // //     borderRadius: '20px',
// // // //     background: hovered ? '#eff4ff' : '#f8fafc',
// // // //     transition: 'background 0.15s',
// // // //     cursor: 'pointer',
// // // //   };

// // // //   const arrowSvg = (
// // // //     <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
// // // //       <path
// // // //         d="M3 11L11 3M11 3H6M11 3v5"
// // // //         fill="none"
// // // //         stroke="currentColor"
// // // //         strokeWidth="1.2"
// // // //         strokeLinecap="round"
// // // //         strokeLinejoin="round"
// // // //       />
// // // //     </svg>
// // // //   );

// // // //   return (
// // // //     <a
// // // //       href={url}
// // // //       style={style}
// // // //       onMouseEnter={() => setHovered(true)}
// // // //       onMouseLeave={() => setHovered(false)}
// // // //     >
// // // //       {arrowSvg}
// // // //       {processContent(label)}
// // // //     </a>
// // // //   );
// // // // }

// // // // // ─── LinksRow ──────────────────────────────────────────────────

// // // // function LinksRow({ links }) {
// // // //   if (!links || links.length === 0) return null;

// // // //   const filtered = links.filter((l) => l && (l.url || l.href));
// // // //   if (filtered.length === 0) return null;

// // // //   return (
// // // //     <div style={{ margin: '16px 0 0', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
// // // //       {filtered.map((link, i) => (
// // // //         <LinkPill key={i} link={link} />
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // }

// // // // // ─── FieldContent ──────────────────────────────────────────────

// // // // function FieldContent({ value }) {
// // // //   if (typeof value === 'string') {
// // // //     return <div>{processContent(value)}</div>;
// // // //   }

// // // //   if (Array.isArray(value)) {
// // // //     return (
// // // //       <div>
// // // //         {value.map((block, i) => (
// // // //           <FieldContentBlock key={i} block={block} />
// // // //         ))}
// // // //       </div>
// // // //     );
// // // //   }

// // // //   if (typeof value === 'object' && value !== null) {
// // // //     return <FieldContentBlock block={value} />;
// // // //   }

// // // //   return null;
// // // // }

// // // // function FieldContentBlock({ block }) {
// // // //   if (typeof block === 'string') {
// // // //     return <div>{processContent(block)}</div>;
// // // //   }

// // // //   if (typeof block !== 'object' || block === null) return null;

// // // //   // Future: component registry for MathDerivation, FunctionMachineDiagram
// // // //   // if (block.component) {
// // // //   //   const Component = COMPONENT_REGISTRY[block.component];
// // // //   //   if (Component) {
// // // //   //     const { component, ...props } = block;
// // // //   //     return <Component {...props} />;
// // // //   //   }
// // // //   // }

// // // //   const { text, links, illustrations } = block;

// // // //   const illustrationList = normalizeArray(illustrations);
// // // //   const linkList = normalizeArray(links);

// // // //   return (
// // // //     <div>
// // // //       {text && <div>{processContent(text)}</div>}
// // // //       {illustrationList.map((ill, i) => (
// // // //         <Illustration key={i} item={ill} />
// // // //       ))}
// // // //       <LinksRow links={linkList} />
// // // //     </div>
// // // //   );
// // // // }

// // // // // ─── AlphaButton ───────────────────────────────────────────────

// // // // function AlphaButton({ letter, active, disabled, onClick }) {
// // // //   const [hovered, setHovered] = useState(false);

// // // //   return (
// // // //     <button
// // // //       style={{
// // // //         width: 32,
// // // //         height: 32,
// // // //         display: 'flex',
// // // //         alignItems: 'center',
// // // //         justifyContent: 'center',
// // // //         fontSize: '15px',
// // // //         fontWeight: '600',
// // // //         fontFamily: 'inherit',
// // // //         borderRadius: '7px',
// // // //         border: 'none',
// // // //         cursor: disabled ? 'default' : 'pointer',
// // // //         pointerEvents: disabled ? 'none' : 'auto',
// // // //         background: active ? ACCENT : hovered ? ACCENT_HOVER : 'transparent',
// // // //         color: active ? '#fff' : disabled ? '#cbd5e1' : ACCENT,
// // // //         transition: 'all 0.12s',
// // // //         flexShrink: 0,
// // // //       }}
// // // //       onClick={onClick}
// // // //       onMouseEnter={() => setHovered(true)}
// // // //       onMouseLeave={() => setHovered(false)}
// // // //     >
// // // //       {letter}
// // // //     </button>
// // // //   );
// // // // }

// // // // // ─── ToggleButton ──────────────────────────────────────────────

// // // // function ToggleButton({ label, active, icon, onClick }) {
// // // //   const [hovered, setHovered] = useState(false);

// // // //   return (
// // // //     <button
// // // //       style={{
// // // //         display: 'flex',
// // // //         alignItems: 'center',
// // // //         gap: '8px',
// // // //         padding: '10px 22px',
// // // //         border: 'none',
// // // //         borderRadius: '9px',
// // // //         cursor: 'pointer',
// // // //         fontFamily: 'inherit',
// // // //         fontSize: '17px',
// // // //         fontWeight: '500',
// // // //         background: active ? ACCENT : hovered ? '#e2e8f0' : 'transparent',
// // // //         color: active ? '#fff' : '#475569',
// // // //         transition: 'all 0.15s',
// // // //       }}
// // // //       onClick={onClick}
// // // //       onMouseEnter={() => setHovered(true)}
// // // //       onMouseLeave={() => setHovered(false)}
// // // //     >
// // // //       {icon}
// // // //       {label}
// // // //     </button>
// // // //   );
// // // // }

// // // // // ─── CategoryChip ──────────────────────────────────────────────

// // // // function CategoryChip({ label, active, count, onToggle, onNavigate }) {
// // // //   const [hovered, setHovered] = useState(false);
// // // //   const [navHovered, setNavHovered] = useState(false);

// // // //   const checkSvg = (
// // // //     <svg width="14" height="14" viewBox="0 0 12 12">
// // // //       <polyline
// // // //         points="2,6 5,9 10,3"
// // // //         fill="none"
// // // //         stroke="#fff"
// // // //         strokeWidth="1.8"
// // // //         strokeLinecap="round"
// // // //         strokeLinejoin="round"
// // // //       />
// // // //     </svg>
// // // //   );

// // // //   const arrowSvg = (
// // // //     <svg width="14" height="14" viewBox="0 0 12 12">
// // // //       <path
// // // //         d="M2 6h8M7 3l3 3-3 3"
// // // //         fill="none"
// // // //         stroke="currentColor"
// // // //         strokeWidth="1.5"
// // // //         strokeLinecap="round"
// // // //         strokeLinejoin="round"
// // // //       />
// // // //     </svg>
// // // //   );

// // // //   return (
// // // //     <div
// // // //       style={{
// // // //         display: 'flex',
// // // //         alignItems: 'center',
// // // //         justifyContent: 'space-between',
// // // //         padding: '10px 17px',
// // // //         border: active
// // // //           ? `1.5px solid ${ACCENT}`
// // // //           : hovered
// // // //             ? '1.5px solid #93aee0'
// // // //             : '1.5px solid #d0d9ed',
// // // //         borderRadius: '12px',
// // // //         background: active ? ACCENT_LIGHT : '#fff',
// // // //         cursor: 'pointer',
// // // //         transition: 'border-color 0.15s, background 0.15s',
// // // //         gap: '10px',
// // // //       }}
// // // //       onClick={onToggle}
// // // //       onMouseEnter={() => setHovered(true)}
// // // //       onMouseLeave={() => setHovered(false)}
// // // //     >
// // // //       <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
// // // //         <div
// // // //           style={{
// // // //             width: 21,
// // // //             height: 21,
// // // //             borderRadius: '4px',
// // // //             border: active ? `1.5px solid ${ACCENT}` : '1.5px solid #94a3b8',
// // // //             display: 'flex',
// // // //             alignItems: 'center',
// // // //             justifyContent: 'center',
// // // //             flexShrink: 0,
// // // //             background: active ? ACCENT : '#fff',
// // // //             transition: 'all 0.15s',
// // // //           }}
// // // //         >
// // // //           {active && checkSvg}
// // // //         </div>
// // // //         <span style={{ fontSize: '17px', fontWeight: '500', color: '#1e293b' }}>
// // // //           {processContent(label)}
// // // //         </span>
// // // //         <span style={{ fontSize: '15px', color: '#94a3b8' }}>({count})</span>
// // // //       </div>
// // // //       <button
// // // //         style={{
// // // //           display: 'flex',
// // // //           alignItems: 'center',
// // // //           gap: '4px',
// // // //           padding: '5px 14px',
// // // //           borderRadius: '18px',
// // // //           border: `1px solid ${navHovered ? ACCENT : '#d0d9ed'}`,
// // // //           background: navHovered ? ACCENT_HOVER : '#fff',
// // // //           fontSize: '15px',
// // // //           fontWeight: '500',
// // // //           fontFamily: 'inherit',
// // // //           color: ACCENT,
// // // //           cursor: 'pointer',
// // // //           flexShrink: 0,
// // // //           transition: 'background 0.12s, border-color 0.12s',
// // // //         }}
// // // //         onMouseEnter={() => setNavHovered(true)}
// // // //         onMouseLeave={() => setNavHovered(false)}
// // // //         onClick={(e) => {
// // // //           e.stopPropagation();
// // // //           onNavigate();
// // // //         }}
// // // //       >
// // // //         Go to {arrowSvg}
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // }

// // // // // ─── ClearButton ───────────────────────────────────────────────

// // // // function ClearButton({ onClick }) {
// // // //   const [hovered, setHovered] = useState(false);

// // // //   return (
// // // //     <button
// // // //       style={{
// // // //         display: 'flex',
// // // //         alignItems: 'center',
// // // //         gap: '6px',
// // // //         padding: '10px 20px',
// // // //         border: '1px solid red',
// // // //         background: hovered ? '#fef2f2' : 'none',
// // // //         borderRadius: '12px',
// // // //         fontSize: '17px',
// // // //         fontWeight: '500',
// // // //         fontFamily: 'inherit',
// // // //         color: '#dc2626',
// // // //         cursor: 'pointer',
// // // //         transition: 'background 0.15s',
// // // //       }}
// // // //       onClick={onClick}
// // // //       onMouseEnter={() => setHovered(true)}
// // // //       onMouseLeave={() => setHovered(false)}
// // // //     >
// // // //       &#10005; Clear
// // // //     </button>
// // // //   );
// // // // }

// // // // // ─── TermItem ──────────────────────────────────────────────────

// // // // function TermItem({ item, onNavigate }) {
// // // //   const [hovered, setHovered] = useState(false);

// // // //   return (
// // // //     <a
// // // //       href={`#${toId(item.name)}`}
// // // //       style={{
// // // //         padding: '10px 14px',
// // // //         fontSize: '17px',
// // // //         color: hovered ? ACCENT : '#334155',
// // // //         borderRadius: '7px',
// // // //         cursor: 'pointer',
// // // //         transition: 'all 0.12s',
// // // //         textDecoration: 'none',
// // // //         display: 'flex',
// // // //         alignItems: 'baseline',
// // // //         gap: '10px',
// // // //         background: hovered ? ACCENT_LIGHT : 'transparent',
// // // //       }}
// // // //       onMouseEnter={() => setHovered(true)}
// // // //       onMouseLeave={() => setHovered(false)}
// // // //       onClick={(e) => {
// // // //         e.preventDefault();
// // // //         onNavigate(toId(item.name));
// // // //       }}
// // // //     >
// // // //       <span
// // // //         style={{
// // // //           fontSize: '16px',
// // // //           fontWeight: '600',
// // // //           color: ACCENT,
// // // //           width: '16px',
// // // //           flexShrink: 0,
// // // //         }}
// // // //       >
// // // //         {item.name[0]}
// // // //       </span>
// // // //       {processContent(item.name)}
// // // //       <span
// // // //         style={{
// // // //           fontSize: '15px',
// // // //           color: '#94a3b8',
// // // //           marginLeft: 'auto',
// // // //           flexShrink: 0,
// // // //           whiteSpace: 'nowrap',
// // // //         }}
// // // //       >
// // // //         {item.category}
// // // //       </span>
// // // //     </a>
// // // //   );
// // // // }

// // // // // ─── TocItem (expandable item inside blue card) ────────────────

// // // // function TocItem({ item, isOpen, onToggle, onNavigate }) {
// // // //   const [hovered, setHovered] = useState(false);
// // // //   const id = toId(item.name);

// // // //   return (
// // // //     <div>
// // // //       <button
// // // //         style={{
// // // //           display: 'flex',
// // // //           alignItems: 'center',
// // // //           justifyContent: 'space-between',
// // // //           width: '100%',
// // // //           padding: '10px 17px',
// // // //           border: 'none',
// // // //           cursor: 'pointer',
// // // //           fontFamily: 'inherit',
// // // //           textAlign: 'left',
// // // //           fontSize: '16px',
// // // //           color: '#334155',
// // // //           background: isOpen ? '#f0f4ff' : hovered ? '#f8fafc' : 'transparent',
// // // //           transition: 'background 0.1s',
// // // //         }}
// // // //         onClick={() => onToggle(id)}
// // // //         onMouseEnter={() => setHovered(true)}
// // // //         onMouseLeave={() => setHovered(false)}
// // // //       >
// // // //         <span>{item.name}</span>
// // // //         <svg
// // // //           width="16"
// // // //           height="16"
// // // //           viewBox="0 0 14 14"
// // // //           style={{
// // // //             transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
// // // //             transition: 'transform 0.2s',
// // // //             color: '#94a3b8',
// // // //             flexShrink: 0,
// // // //           }}
// // // //         >
// // // //           <polyline
// // // //             points="4,5 7,8 10,5"
// // // //             fill="none"
// // // //             stroke="currentColor"
// // // //             strokeWidth="1.5"
// // // //             strokeLinecap="round"
// // // //             strokeLinejoin="round"
// // // //           />
// // // //         </svg>
// // // //       </button>
// // // //       {isOpen && (
// // // //         <div style={S.tocPeek}>
// // // //           <div style={S.tocPeekFormula}>{processContent(item.formula)}</div>
// // // //           <a
// // // //             style={{
// // // //               fontSize: '14px',
// // // //               color: ACCENT,
// // // //               cursor: 'pointer',
// // // //               textDecoration: 'none',
// // // //             }}
// // // //             onClick={(e) => {
// // // //               e.preventDefault();
// // // //               onNavigate(id);
// // // //             }}
// // // //           >
// // // //             Learn More &#8595;
// // // //           </a>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // // ─── CardLink ──────────────────────────────────────────────────

// // // // function CardLink({ link }) {
// // // //   const [hovered, setHovered] = useState(false);

// // // //   if (!link || (!link.url && !link.href)) return null;

// // // //   const label = link.label || link.text || link.url || link.href;
// // // //   const url = link.url || link.href;

// // // //   return (
// // // //     <div>
// // // //       <a
// // // //         href={url}
// // // //         style={{
// // // //           display: 'inline-flex',
// // // //           alignItems: 'center',
// // // //           gap: '5px',
// // // //           fontSize: '14px',
// // // //           color: hovered ? '#1d4ed8' : ACCENT,
// // // //           textDecoration: 'none',
// // // //           padding: '8px 0 0',
// // // //           cursor: 'pointer',
// // // //           fontWeight: '500',
// // // //           transition: 'color 0.15s',
// // // //         }}
// // // //         onMouseEnter={() => setHovered(true)}
// // // //         onMouseLeave={() => setHovered(false)}
// // // //       >
// // // //         <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
// // // //           <path
// // // //             d="M3 11L11 3M11 3H6M11 3v5"
// // // //             fill="none"
// // // //             stroke="currentColor"
// // // //             strokeWidth="1.2"
// // // //             strokeLinecap="round"
// // // //             strokeLinejoin="round"
// // // //           />
// // // //         </svg>
// // // //         {processContent(label)}
// // // //       </a>
// // // //     </div>
// // // //   );
// // // // }

// // // // // ─── BackToTop ─────────────────────────────────────────────────

// // // // function BackToTop() {
// // // //   const [hovered, setHovered] = useState(false);

// // // //   return (
// // // //     <div
// // // //       style={{
// // // //         fontSize: '13px',
// // // //         color: hovered ? ACCENT : '#94a3b8',
// // // //         cursor: 'pointer',
// // // //         textAlign: 'right',
// // // //         padding: '6px 0 0',
// // // //         userSelect: 'none',
// // // //         transition: 'color 0.15s',
// // // //       }}
// // // //       onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
// // // //       onMouseEnter={() => setHovered(true)}
// // // //       onMouseLeave={() => setHovered(false)}
// // // //     >
// // // //       &uarr; Back to top
// // // //     </div>
// // // //   );
// // // // }

// // // // // ─── TabButton ─────────────────────────────────────────────────

// // // // function TabButton({ label, active, onClick }) {
// // // //   const [hovered, setHovered] = useState(false);

// // // //   return (
// // // //     <span
// // // //       style={{
// // // //         padding: '10px 22px',
// // // //         fontSize: '15px',
// // // //         fontWeight: '500',
// // // //         borderRadius: '8px 8px 0 0',
// // // //         border: '1.5px solid',
// // // //         borderBottom: 'none',
// // // //         cursor: 'pointer',
// // // //         marginRight: '3px',
// // // //         textTransform: 'capitalize',
// // // //         transition: 'background 0.15s, color 0.15s',
// // // //         background: active ? ACCENT : hovered ? '#dae2f3' : '#e4eaf5',
// // // //         color: active ? '#fff' : '#475569',
// // // //         borderColor: active ? ACCENT : '#d0d9ed',
// // // //       }}
// // // //       onClick={onClick}
// // // //       onMouseEnter={() => setHovered(true)}
// // // //       onMouseLeave={() => setHovered(false)}
// // // //     >
// // // //       {processContent(label)}
// // // //     </span>
// // // //   );
// // // // }

// // // // // ─── FormulaCard ───────────────────────────────────────────────

// // // // function FormulaCard({ item, isHighlighted, onToggle, isOpen }) {
// // // //   const hasFields =
// // // //     item.fields &&
// // // //     typeof item.fields === 'object' &&
// // // //     !Array.isArray(item.fields) &&
// // // //     Object.keys(item.fields).length > 0;

// // // //   const [activeTab, setActiveTab] = useState(0);
// // // //   const [hovered, setHovered] = useState(false);
// // // //   const fieldEntries = hasFields ? Object.entries(item.fields) : [];
// // // //   const itemId = toId(item.name);

// // // //   return (
// // // //     <div
// // // //       id={itemId}
// // // //       style={{
// // // //         border: isHighlighted
// // // //           ? `2px solid ${ACCENT}`
// // // //           : hovered
// // // //             ? '1.5px solid #93aee0'
// // // //             : '1.5px solid #d0d9ed',
// // // //         borderRadius: '12px',
// // // //         marginBottom: '12px',
// // // //         overflow: 'hidden',
// // // //         background: isHighlighted ? '#f8faff' : '#fff',
// // // //         transition: 'border-color 0.2s, background 0.2s',
// // // //         scrollMarginTop: '130px',
// // // //       }}
// // // //       onMouseEnter={() => setHovered(true)}
// // // //       onMouseLeave={() => setHovered(false)}
// // // //     >
// // // //       <div style={S.cardBody}>
// // // //         <h3 style={S.cardName}>{processContent(item.name)}</h3>
// // // //         <div style={S.cardFormula}>{processContent(item.formula)}</div>
// // // //         {item.link && <CardLink link={item.link} />}
// // // //         {hasFields && (
// // // //           <div
// // // //             style={S.cardToggle}
// // // //             onClick={() => onToggle(itemId)}
// // // //           >
// // // //             {isOpen ? 'Hide details' : 'See details'}
// // // //             <svg
// // // //               width="14"
// // // //               height="14"
// // // //               viewBox="0 0 14 14"
// // // //               style={{
// // // //                 transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
// // // //                 transition: 'transform 0.25s',
// // // //               }}
// // // //             >
// // // //               <polyline
// // // //                 points="3,5 7,9 11,5"
// // // //                 fill="none"
// // // //                 stroke="currentColor"
// // // //                 strokeWidth="2"
// // // //                 strokeLinecap="round"
// // // //                 strokeLinejoin="round"
// // // //               />
// // // //             </svg>
// // // //           </div>
// // // //         )}
// // // //         {!isOpen && <BackToTop />}
// // // //       </div>

// // // //       {hasFields && (
// // // //         <div style={S.cardDetail(isOpen)}>
// // // //           <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
// // // //             {fieldEntries.map(([key], i) => (
// // // //               <TabButton
// // // //                 key={key}
// // // //                 label={key.replace(/_/g, ' ')}
// // // //                 active={i === activeTab}
// // // //                 onClick={() => setActiveTab(i)}
// // // //               />
// // // //             ))}
// // // //           </div>
// // // //           <div style={S.tabBody}>
// // // //             <FieldContent value={fieldEntries[activeTab]?.[1] || ''} />
// // // //           </div>
// // // //           <BackToTop />
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // // ─── SidebarLink ───────────────────────────────────────────────

// // // // function SidebarLink({ item, active, onNavigate }) {
// // // //   const [hovered, setHovered] = useState(false);

// // // //   return (
// // // //     <a
// // // //       href={`#${toId(item.name)}`}
// // // //       style={{
// // // //         display: 'block',
// // // //         padding: '3px 8px',
// // // //         fontSize: '15px',
// // // //         color: active ? ACCENT : hovered ? ACCENT : '#64748b',
// // // //         fontWeight: active ? '600' : '400',
// // // //         textDecoration: 'none',
// // // //         borderLeft: `2px solid ${active || hovered ? ACCENT : 'transparent'}`,
// // // //         borderRadius: '0 4px 4px 0',
// // // //         background: active || hovered ? ACCENT_LIGHT : 'transparent',
// // // //         transition: 'all 0.12s',
// // // //         cursor: 'pointer',
// // // //         whiteSpace: 'normal',
// // // //         wordBreak: 'break-word',
// // // //         lineHeight: '1.3',
// // // //       }}
// // // //       onMouseEnter={() => setHovered(true)}
// // // //       onMouseLeave={() => setHovered(false)}
// // // //       onClick={(e) => {
// // // //         e.preventDefault();
// // // //         onNavigate(toId(item.name));
// // // //       }}
// // // //     >
// // // //       {processContent(item.name)}
// // // //     </a>
// // // //   );
// // // // }

// // // // // ─── Icons ─────────────────────────────────────────────────────

// // // // const GridIcon = (
// // // //   <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
// // // //     <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
// // // //     <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
// // // //     <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
// // // //     <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
// // // //   </svg>
// // // // );

// // // // const ListIcon = (
// // // //   <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
// // // //     <line x1="1" y1="3" x2="15" y2="3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
// // // //     <line x1="1" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
// // // //     <line x1="1" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
// // // //   </svg>
// // // // );

// // // // // ═══════════════════════════════════════════════════════════════
// // // // // MAIN COMPONENT
// // // // // ═══════════════════════════════════════════════════════════════

// // // // export default function FormulasTOC({
// // // //   data = [],
// // // //   groupByField = 'category',
// // // //   type = 'Formula',
// // // // }) {
// // // //   const [view, setView] = useState('cards');
// // // //   const [activeLetter, setActiveLetter] = useState(null);
// // // //   const [activeCats, setActiveCats] = useState(new Set());
// // // //   const [openTocItems, setOpenTocItems] = useState(new Set());
// // // //   const [openCards, setOpenCards] = useState(new Set());
// // // //   const [highlightedId, setHighlightedId] = useState(null);
// // // //   const [searchTerm, setSearchTerm] = useState('');
// // // //   const [searchFocused, setSearchFocused] = useState(false);
// // // //   const [sidebarVisible, setSidebarVisible] = useState(false);
// // // //   const [sidebarLeft, setSidebarLeft] = useState(0);
// // // //   const [activeItemId, setActiveItemId] = useState(null);
// // // //   const [activeSidebarCat, setActiveSidebarCat] = useState(null);

// // // //   const navPanelRef = useRef(null);
// // // //   const cardsRef = useRef(null);
// // // //   const highlightTimer = useRef(null);
// // // //   const observerRef = useRef(null);

// // // //   // ── Derived data ──

// // // //   const categories = useMemo(
// // // //     () => [...new Set(data.map((d) => d[groupByField]))],
// // // //     [data, groupByField],
// // // //   );

// // // //   const catCounts = useMemo(() => {
// // // //     const counts = {};
// // // //     data.forEach((d) => {
// // // //       const key = d[groupByField] || 'Other';
// // // //       counts[key] = (counts[key] || 0) + 1;
// // // //     });
// // // //     return counts;
// // // //   }, [data, groupByField]);

// // // //   const usedLetters = useMemo(
// // // //     () => new Set(data.map((d) => d.name[0].toUpperCase())),
// // // //     [data],
// // // //   );

// // // //   const grouped = useMemo(() => {
// // // //     const lower = searchTerm.toLowerCase();
// // // //     const filtered = lower
// // // //       ? data.filter(
// // // //           (d) =>
// // // //             d.name?.toLowerCase().includes(lower) ||
// // // //             d.formula?.toLowerCase().includes(lower) ||
// // // //             (d.fields &&
// // // //               typeof d.fields === 'object' &&
// // // //               Object.values(d.fields).some((v) => {
// // // //                 if (typeof v === 'string') return v.toLowerCase().includes(lower);
// // // //                 if (typeof v === 'object' && v?.text) return v.text.toLowerCase().includes(lower);
// // // //                 return false;
// // // //               })),
// // // //         )
// // // //       : data;

// // // //     const groups = {};
// // // //     filtered.forEach((d) => {
// // // //       const key = d[groupByField] || 'Other';
// // // //       if (!groups[key]) groups[key] = [];
// // // //       groups[key].push(d);
// // // //     });
// // // //     return groups;
// // // //   }, [data, searchTerm, groupByField]);

// // // //   const totalCount = useMemo(
// // // //     () => Object.values(grouped).reduce((sum, arr) => sum + arr.length, 0),
// // // //     [grouped],
// // // //   );

// // // //   const navFiltered = useMemo(() => {
// // // //     let result = data;
// // // //     if (activeLetter) {
// // // //       result = result.filter((d) => d.name[0].toUpperCase() === activeLetter);
// // // //     }
// // // //     if (activeCats.size > 0) {
// // // //       result = result.filter((d) => activeCats.has(d[groupByField]));
// // // //     }
// // // //     return [...result].sort((a, b) => a.name.localeCompare(b.name));
// // // //   }, [data, activeLetter, activeCats, groupByField]);

// // // //   // ── Handlers ──

// // // //   const toggleLetter = useCallback((letter) => {
// // // //     setActiveLetter((prev) => (prev === letter ? null : letter));
// // // //   }, []);

// // // //   const toggleCat = useCallback((cat) => {
// // // //     setActiveCats((prev) => {
// // // //       const next = new Set(prev);
// // // //       if (next.has(cat)) next.delete(cat);
// // // //       else next.add(cat);
// // // //       return next;
// // // //     });
// // // //   }, []);

// // // //   const clearFilters = useCallback(() => {
// // // //     setActiveCats(new Set());
// // // //     setActiveLetter(null);
// // // //   }, []);

// // // //   const toggleTocItem = useCallback((id) => {
// // // //     setOpenTocItems((prev) => {
// // // //       const next = new Set();
// // // //       if (!prev.has(id)) next.add(id);
// // // //       return next;
// // // //     });
// // // //   }, []);

// // // //   const toggleCard = useCallback((id) => {
// // // //     setOpenCards((prev) => {
// // // //       const next = new Set(prev);
// // // //       if (next.has(id)) next.delete(id);
// // // //       else next.add(id);
// // // //       return next;
// // // //     });
// // // //   }, []);

// // // //   const scrollToItem = useCallback((id) => {
// // // //     const el = document.getElementById(id);
// // // //     if (!el) return;
// // // //     const y = el.getBoundingClientRect().top + window.scrollY - 130;
// // // //     window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
// // // //   }, []);

// // // //   const navigateToItem = useCallback(
// // // //     (id) => {
// // // //       setSearchTerm('');

// // // //       const hasFields = data.some((d) => {
// // // //         const did = toId(d.name);
// // // //         return (
// // // //           did === id &&
// // // //           d.fields &&
// // // //           typeof d.fields === 'object' &&
// // // //           Object.keys(d.fields).length > 0
// // // //         );
// // // //       });

// // // //       if (hasFields) {
// // // //         setOpenCards((prev) => new Set(prev).add(id));
// // // //       }

// // // //       setHighlightedId(id);
// // // //       clearTimeout(highlightTimer.current);
// // // //       highlightTimer.current = setTimeout(() => setHighlightedId(null), 3000);

// // // //       requestAnimationFrame(() => {
// // // //         setTimeout(() => scrollToItem(id), 100);
// // // //       });
// // // //     },
// // // //     [data, scrollToItem],
// // // //   );

// // // //   const navigateToCategory = useCallback((cat) => {
// // // //     const categoryId = `category_${cat.toLowerCase().replace(/\s+/g, '_')}`;
// // // //     const el = document.getElementById(categoryId);
// // // //     if (!el) return;
// // // //     const y = el.getBoundingClientRect().top + window.scrollY - 140;
// // // //     window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
// // // //   }, []);

// // // //   // ── Hash navigation ──

// // // //   useEffect(() => {
// // // //     const hash = window.location.hash.slice(1);
// // // //     if (hash) setTimeout(() => navigateToItem(hash), 150);
// // // //   }, [navigateToItem]);

// // // //   useEffect(() => {
// // // //     const onHashChange = () => {
// // // //       const hash = window.location.hash.slice(1);
// // // //       if (hash) navigateToItem(hash);
// // // //     };
// // // //     window.addEventListener('hashchange', onHashChange);
// // // //     return () => window.removeEventListener('hashchange', onHashChange);
// // // //   }, [navigateToItem]);

// // // //   useEffect(() => {
// // // //     const onClick = (e) => {
// // // //       const a = e.target.closest('a[href^="#"]');
// // // //       if (!a) return;
// // // //       const hash = a.getAttribute('href').slice(1);
// // // //       if (hash) {
// // // //         e.preventDefault();
// // // //         window.history.pushState(null, '', `#${hash}`);
// // // //         navigateToItem(hash);
// // // //       }
// // // //     };
// // // //     document.addEventListener('click', onClick);
// // // //     return () => document.removeEventListener('click', onClick);
// // // //   }, [navigateToItem]);

// // // //   // ── Sidebar visibility + position ──

// // // //   useEffect(() => {
// // // //     const check = () => {
// // // //       if (!navPanelRef.current) return;
// // // //       const rect = navPanelRef.current.getBoundingClientRect();
// // // //       const footer = document.querySelector('footer');
// // // //       const pastFooter = footer
// // // //         ? footer.getBoundingClientRect().top < window.innerHeight
// // // //         : false;

// // // //       const sidebarW = 200;
// // // //       const gap = 24;
// // // //       let left = 20;
// // // //       if (cardsRef.current) {
// // // //         const cardsRect = cardsRef.current.getBoundingClientRect();
// // // //         left = cardsRect.left - sidebarW - gap;
// // // //       }

// // // //       const show = rect.bottom < 0 && window.innerWidth >= 1100 && !pastFooter && left > 10;
// // // //       setSidebarVisible(show);
// // // //       setSidebarLeft(Math.max(10, left));
// // // //     };

// // // //     window.addEventListener('scroll', check, { passive: true });
// // // //     window.addEventListener('resize', check, { passive: true });
// // // //     check();
// // // //     return () => {
// // // //       window.removeEventListener('scroll', check);
// // // //       window.removeEventListener('resize', check);
// // // //     };
// // // //   }, []);

// // // //   // ── Intersection observer for sidebar active state ──

// // // //   useEffect(() => {
// // // //     if (observerRef.current) observerRef.current.disconnect();

// // // //     const observer = new IntersectionObserver(
// // // //       (entries) => {
// // // //         entries.forEach((entry) => {
// // // //           if (entry.isIntersecting) {
// // // //             const id = entry.target.id;
// // // //             setActiveItemId(id);
// // // //             const item = data.find((d) => toId(d.name) === id);
// // // //             if (item) setActiveSidebarCat(item[groupByField]);
// // // //           }
// // // //         });
// // // //       },
// // // //       { rootMargin: '-80px 0px -60% 0px', threshold: 0 },
// // // //     );

// // // //     data.forEach((item) => {
// // // //       const el = document.getElementById(toId(item.name));
// // // //       if (el) observer.observe(el);
// // // //     });

// // // //     observerRef.current = observer;
// // // //     return () => observer.disconnect();
// // // //   }, [data, grouped, groupByField]);

// // // //   // ── Responsive TOC grid ──

// // // //   const tocGridStyle = useMemo(() => {
// // // //     const colCount = categories.length <= 2 ? 2 : categories.length <= 4 ? categories.length : 4;
// // // //     return {
// // // //       ...S.tocGrid,
// // // //       gridTemplateColumns: `repeat(${colCount}, 1fr)`,
// // // //     };
// // // //   }, [categories]);

// // // //   // ── Render ──

// // // //   return (
// // // //     <>
// // // //       <style>{HIDE_SCROLLBAR_CSS}</style>

// // // //       {/* ── TOC Section (wide) ── */}
// // // //       <div style={S.outerWrap}>
// // // //         <div ref={navPanelRef} style={{ marginBottom: 0 }}>
// // // //           <div style={S.toggleWrap}>
// // // //             <div style={S.toggleTrack}>
// // // //               <ToggleButton
// // // //                 label="Categories"
// // // //                 icon={GridIcon}
// // // //                 active={view === 'cards'}
// // // //                 onClick={() => setView('cards')}
// // // //               />
// // // //               <ToggleButton
// // // //                 label="Index"
// // // //                 icon={ListIcon}
// // // //                 active={view === 'index'}
// // // //                 onClick={() => setView('index')}
// // // //               />
// // // //             </div>
// // // //           </div>

// // // //           {view === 'cards' && (
// // // //             <div style={tocGridStyle}>
// // // //               {categories.map((cat) => {
// // // //                 const items = data.filter((d) => d[groupByField] === cat);
// // // //                 return (
// // // //                   <div key={cat} style={S.tocCard}>
// // // //                     <div style={S.tocCardHeader}>{cat}</div>
// // // //                     <div style={S.tocCardBody}>
// // // //                       {items.map((f) => (
// // // //                         <TocItem
// // // //                           key={f.name}
// // // //                           item={f}
// // // //                           isOpen={openTocItems.has(toId(f.name))}
// // // //                           onToggle={toggleTocItem}
// // // //                           onNavigate={navigateToItem}
// // // //                         />
// // // //                       ))}
// // // //                     </div>
// // // //                   </div>
// // // //                 );
// // // //               })}
// // // //             </div>
// // // //           )}

// // // //           {view === 'index' && (
// // // //             <div style={S.navPanel}>
// // // //               <div className="ftoc-no-scrollbar" style={S.alphaBar}>
// // // //                 {ALL_LETTERS.map((l) => (
// // // //                   <AlphaButton
// // // //                     key={l}
// // // //                     letter={l}
// // // //                     active={activeLetter === l}
// // // //                     disabled={!usedLetters.has(l)}
// // // //                     onClick={() => toggleLetter(l)}
// // // //                   />
// // // //                 ))}
// // // //               </div>

// // // //               <div className="ftoc-no-scrollbar" style={S.termGrid}>
// // // //                 {navFiltered.map((item) => (
// // // //                   <TermItem key={item.name} item={item} onNavigate={navigateToItem} />
// // // //                 ))}
// // // //               </div>

// // // //               <div style={S.catFilterRow}>
// // // //                 {categories.map((cat) => (
// // // //                   <CategoryChip
// // // //                     key={cat}
// // // //                     label={cat}
// // // //                     active={activeCats.has(cat)}
// // // //                     count={catCounts[cat]}
// // // //                     onToggle={() => toggleCat(cat)}
// // // //                     onNavigate={() => navigateToCategory(cat)}
// // // //                   />
// // // //                 ))}
// // // //                 {(activeCats.size > 0 || activeLetter) && (
// // // //                   <ClearButton onClick={clearFilters} />
// // // //                 )}
// // // //               </div>

// // // //               <div style={S.navStatus}>
// // // //                 {navFiltered.length} of {data.length} {type.toLowerCase()}s
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>

// // // //       {/* ── Cards Section (original width) ── */}
// // // //       <div ref={cardsRef} style={S.innerWrap}>
// // // //         <div style={S.searchBar}>
// // // //           <div style={S.searchWrapper}>
// // // //             <input
// // // //               type="text"
// // // //               value={searchTerm}
// // // //               onChange={(e) => setSearchTerm(e.target.value)}
// // // //               onFocus={() => setSearchFocused(true)}
// // // //               onBlur={() => setSearchFocused(false)}
// // // //               placeholder={`Search in ${type}s...`}
// // // //               style={{
// // // //                 width: '100%',
// // // //                 padding: '13px 36px 13px 18px',
// // // //                 border: searchFocused ? `2px solid ${ACCENT}` : '2px solid transparent',
// // // //                 borderRadius: '28px',
// // // //                 fontSize: '16px',
// // // //                 fontFamily: 'inherit',
// // // //                 outline: 'none',
// // // //                 background: '#fff',
// // // //                 color: '#1e293b',
// // // //                 boxSizing: 'border-box',
// // // //                 transition: 'border-color 0.2s',
// // // //               }}
// // // //             />
// // // //             {searchTerm && (
// // // //               <button
// // // //                 style={S.searchClear}
// // // //                 onClick={() => setSearchTerm('')}
// // // //                 aria-label="Clear search"
// // // //               >
// // // //                 &#10005;
// // // //               </button>
// // // //             )}
// // // //           </div>
// // // //           <span style={S.searchCount}>
// // // //             {totalCount} {totalCount === 1 ? type.toLowerCase() : `${type.toLowerCase()}s`}
// // // //           </span>
// // // //         </div>

// // // //         {Object.keys(grouped).length === 0 ? (
// // // //           <div style={S.empty}>
// // // //             No {type.toLowerCase()}s found for &quot;{searchTerm}&quot;
// // // //           </div>
// // // //         ) : (
// // // //           Object.entries(grouped).map(([group, items]) => {
// // // //             const categoryId = `category_${group.toLowerCase().replace(/\s+/g, '_')}`;
// // // //             return (
// // // //               <div key={group} id={categoryId} style={{ marginBottom: '40px' }}>
// // // //                 <div style={S.groupHeader}>
// // // //                   <h2 style={S.groupTitle}>{group}</h2>
// // // //                   <span style={S.groupCount}>
// // // //                     ({items.length} {items.length === 1 ? type.toLowerCase() : `${type.toLowerCase()}s`})
// // // //                   </span>
// // // //                 </div>
// // // //                 {items.map((item) => {
// // // //                   const id = toId(item.name);
// // // //                   return (
// // // //                     <FormulaCard
// // // //                       key={id}
// // // //                       item={item}
// // // //                       isHighlighted={highlightedId === id}
// // // //                       isOpen={openCards.has(id)}
// // // //                       onToggle={toggleCard}
// // // //                     />
// // // //                   );
// // // //                 })}
// // // //               </div>
// // // //             );
// // // //           })
// // // //         )}
// // // //       </div>

// // // //       {/* ── Sticky Sidebar ── */}
// // // //       <div className="ftoc-no-scrollbar" style={S.sidebar(sidebarVisible, sidebarLeft)}>
// // // //         {categories.map((cat) => {
// // // //           const items = data.filter((d) => d[groupByField] === cat);
// // // //           return (
// // // //             <div key={cat} style={S.sidebarGroup}>
// // // //               <div
// // // //                 style={{
// // // //                   fontSize: '13px',
// // // //                   fontWeight: '600',
// // // //                   textTransform: 'uppercase',
// // // //                   letterSpacing: '1px',
// // // //                   color: '#1e40af',
// // // //                   marginBottom: '4px',
// // // //                   paddingLeft: '8px',
// // // //                 }}
// // // //               >
// // // //                 {processContent(cat)}
// // // //               </div>
// // // //               {items.map((item) => (
// // // //                 <SidebarLink
// // // //                   key={item.name}
// // // //                   item={item}
// // // //                   active={activeItemId === toId(item.name)}
// // // //                   onNavigate={navigateToItem}
// // // //                 />
// // // //               ))}
// // // //             </div>
// // // //           );
// // // //         })}
// // // //       </div>
// // // //     </>
// // // //   );
// // // // }


// // // import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
// // // import { processContent } from '../../utils/contentProcessor';
// // // import FunctionMachineDiagram from './machine-diagram/FunctionMachineDiagram';

// // // // ─── Component Registry ────────────────────────────────────────

// // // const COMPONENT_REGISTRY = {
// // //   FunctionMachineDiagram,
// // // };

// // // // ─── Constants ─────────────────────────────────────────────────

// // // const ALL_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
// // // const ACCENT = '#4a6cf7';
// // // const ACCENT_LIGHT = '#eef1fd';
// // // const ACCENT_BORDER = '#cdd5f8';
// // // const ACCENT_HOVER = '#dbe1fc';

// // // const HIDE_SCROLLBAR_CSS = `
// // //   .ftoc-no-scrollbar::-webkit-scrollbar { display: none; }
// // // `;

// // // const toId = (name) => name.toLowerCase().replace(/\s+/g, '_');

// // // const noScroll = {
// // //   scrollbarWidth: 'none',
// // //   msOverflowStyle: 'none',
// // // };

// // // function normalizeArray(val) {
// // //   if (!val) return [];
// // //   if (Array.isArray(val)) return val;
// // //   return [val];
// // // }

// // // // ─── Styles ────────────────────────────────────────────────────

// // // const S = {
// // //   outerWrap: {
// // //     maxWidth: '1150px',
// // //     margin: '0 auto',
// // //     padding: '0 20px',
// // //   },
// // //   innerWrap: {
// // //     maxWidth: '820px',
// // //     margin: '0 auto',
// // //     padding: '0 16px',
// // //   },
// // //   toggleWrap: {
// // //     display: 'flex',
// // //     justifyContent: 'center',
// // //     marginBottom: '24px',
// // //   },
// // //   toggleTrack: {
// // //     display: 'inline-flex',
// // //     background: '#f1f5f9',
// // //     borderRadius: '12px',
// // //     padding: '4px',
// // //     border: '1px solid #e2e8f0',
// // //   },
// // //   tocGrid: {
// // //     display: 'grid',
// // //     gridTemplateColumns: 'repeat(4, 1fr)',
// // //     gap: '14px',
// // //     marginBottom: '28px',
// // //   },
// // //   tocCard: {
// // //     borderRadius: '12px',
// // //     overflow: 'hidden',
// // //     border: '1px solid #d0d9ed',
// // //     background: '#fff',
// // //   },
// // //   tocCardHeader: {
// // //     background: 'linear-gradient(135deg, #4a6cf7 0%, #3b5de7 100%)',
// // //     color: '#fff',
// // //     padding: '17px 20px',
// // //     fontSize: '17px',
// // //     fontWeight: '600',
// // //   },
// // //   tocCardBody: {
// // //     padding: '5px 0',
// // //   },
// // //   tocPeek: {
// // //     padding: '8px 18px 12px',
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     gap: '8px',
// // //   },
// // //   tocPeekFormula: {
// // //     fontSize: '16px',
// // //     background: '#f1f5f9',
// // //     padding: '8px 12px',
// // //     borderRadius: '6px',
// // //     color: '#475569',
// // //     lineHeight: '1.6',
// // //   },
// // //   navPanel: {
// // //     background: '#fff',
// // //     border: '1.5px solid #d0d9ed',
// // //     borderRadius: '16px',
// // //     overflow: 'hidden',
// // //     marginBottom: '28px',
// // //   },
// // //   alphaBar: {
// // //     display: 'flex',
// // //     flexWrap: 'nowrap',
// // //     gap: '2px',
// // //     padding: '12px 18px',
// // //     background: '#f8fafc',
// // //     borderBottom: '1.5px solid #e2e8f0',
// // //     justifyContent: 'center',
// // //     overflowX: 'auto',
// // //     ...noScroll,
// // //   },
// // //   termGrid: {
// // //     padding: '20px 24px',
// // //     display: 'grid',
// // //     gridTemplateColumns: '1fr 1fr',
// // //     gap: '3px 24px',
// // //   },
// // //   catFilterRow: {
// // //     display: 'flex',
// // //     flexWrap: 'wrap',
// // //     gap: '8px',
// // //     padding: '17px 24px',
// // //     borderTop: '1px solid #e2e8f0',
// // //   },
// // //   navStatus: {
// // //     padding: '10px 24px 17px',
// // //     fontSize: '16px',
// // //     color: '#94a3b8',
// // //     borderTop: '1px solid #e2e8f0',
// // //     textAlign: 'right',
// // //   },
// // //   searchBar: {
// // //     position: 'sticky',
// // //     top: '63px',
// // //     zIndex: 10,
// // //     background: 'rgba(30, 58, 138, 0.75)',
// // //     backdropFilter: 'blur(8px)',
// // //     borderRadius: '4px',
// // //     padding: '14px 20px',
// // //     marginBottom: '32px',
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     gap: '14px',
// // //   },
// // //   searchWrapper: {
// // //     position: 'relative',
// // //     flex: 1,
// // //   },
// // //   searchClear: {
// // //     position: 'absolute',
// // //     top: '50%',
// // //     right: '14px',
// // //     transform: 'translateY(-50%)',
// // //     border: 'none',
// // //     background: 'none',
// // //     color: '#94a3b8',
// // //     fontSize: '16px',
// // //     cursor: 'pointer',
// // //     padding: '0',
// // //     lineHeight: 1,
// // //   },
// // //   searchCount: {
// // //     fontSize: '14px',
// // //     color: '#c7d2e8',
// // //     whiteSpace: 'nowrap',
// // //     flexShrink: 0,
// // //   },
// // //   groupHeader: {
// // //     display: 'flex',
// // //     alignItems: 'baseline',
// // //     gap: '10px',
// // //     margin: '0 0 16px',
// // //     paddingBottom: '8px',
// // //     borderBottom: '2px solid #c7d2e8',
// // //   },
// // //   groupTitle: {
// // //     fontFamily: "'Source Serif 4', Georgia, serif",
// // //     fontSize: '22px',
// // //     fontWeight: '600',
// // //     color: '#1e40af',
// // //     margin: 0,
// // //     letterSpacing: '0.01em',
// // //   },
// // //   groupCount: {
// // //     fontSize: '14px',
// // //     color: '#94a3b8',
// // //     fontWeight: '400',
// // //   },
// // //   cardBody: {
// // //     padding: '22px 26px',
// // //     background: '#fbfcff',
// // //   },
// // //   cardName: {
// // //     fontFamily: "'Source Serif 4', Georgia, serif",
// // //     fontSize: '20px',
// // //     fontWeight: '600',
// // //     color: '#1e293b',
// // //     margin: '0 0 8px',
// // //     lineHeight: '1.3',
// // //   },
// // //   cardFormula: {
// // //     fontSize: '17px',
// // //     color: '#475569',
// // //     lineHeight: '1.7',
// // //     margin: 0,
// // //   },
// // //   cardToggle: {
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     gap: '6px',
// // //     padding: '12px 0 4px',
// // //     cursor: 'pointer',
// // //     color: ACCENT,
// // //     fontSize: '15px',
// // //     fontWeight: '500',
// // //     userSelect: 'none',
// // //   },
// // //   cardDetail: (open) => ({
// // //     borderTop: '1.5px solid #e2e8f0',
// // //     background: '#f0f4fc',
// // //     overflow: 'hidden',
// // //     maxHeight: open ? '5000px' : '0',
// // //     padding: open ? '20px 26px' : '0 26px',
// // //     transition: 'max-height 0.35s ease, padding 0.3s ease',
// // //   }),
// // //   tabBody: {
// // //     padding: '20px 22px',
// // //     border: '1.5px solid #d0d9ed',
// // //     borderRadius: '0 8px 8px 8px',
// // //     fontSize: '17px',
// // //     color: '#475569',
// // //     lineHeight: '1.7',
// // //     background: '#fff',
// // //     minHeight: '60px',
// // //   },
// // //   sidebar: (visible, leftPos) => ({
// // //     position: 'fixed',
// // //     top: '20px',
// // //     left: `${leftPos}px`,
// // //     width: '200px',
// // //     background: '#fff',
// // //     border: '1.5px solid #d0d9ed',
// // //     borderRadius: '12px',
// // //     padding: '16px 14px',
// // //     maxHeight: 'calc(100vh - 40px)',
// // //     overflowY: 'auto',
// // //     opacity: visible ? 1 : 0,
// // //     transform: visible ? 'translateY(0)' : 'translateY(12px)',
// // //     transition: 'opacity 0.3s, transform 0.3s',
// // //     pointerEvents: visible ? 'auto' : 'none',
// // //     zIndex: 50,
// // //     ...noScroll,
// // //   }),
// // //   sidebarGroup: {
// // //     marginBottom: '14px',
// // //   },
// // //   empty: {
// // //     textAlign: 'center',
// // //     padding: '50px 20px',
// // //     color: '#94a3b8',
// // //     fontSize: '16px',
// // //   },
// // // };

// // // // ─── Illustration ──────────────────────────────────────────────

// // // function Illustration({ item }) {
// // //   const { src, alt = '', caption, width } = item;
// // //   const isSvg = typeof src === 'string' && src.trimStart().startsWith('<svg');

// // //   return (
// // //     <div style={{ margin: '16px 0', padding: '16px', background: '#f8fafc', borderRadius: '8px', border: '0.5px solid #e2e8f0' }}>
// // //       {isSvg ? (
// // //         <div style={{ maxWidth: width ? `${width}px` : '100%', margin: '0 auto' }} dangerouslySetInnerHTML={{ __html: src }} />
// // //       ) : (
// // //         <img src={src} alt={alt} style={{ display: 'block', margin: '0 auto', maxWidth: width ? `${width}px` : '100%', width: '100%', height: 'auto', borderRadius: '4px' }} loading="lazy" />
// // //       )}
// // //       {caption && <p style={{ margin: '8px 0 0', fontSize: '13px', color: '#94a3b8', textAlign: 'center', lineHeight: '1.5' }}>{processContent(caption)}</p>}
// // //     </div>
// // //   );
// // // }

// // // // ─── LinkPill ──────────────────────────────────────────────────

// // // function LinkPill({ link }) {
// // //   const [hovered, setHovered] = useState(false);
// // //   const label = link.label || link.text || link.url;
// // //   const url = link.url || link.href;
// // //   if (!url) return null;

// // //   return (
// // //     <a
// // //       href={url}
// // //       style={{
// // //         display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '14px',
// // //         color: '#2563eb', textDecoration: 'none', padding: '6px 14px',
// // //         border: '0.5px solid #e2e8f0', borderRadius: '20px',
// // //         background: hovered ? '#eff4ff' : '#f8fafc', transition: 'background 0.15s', cursor: 'pointer',
// // //       }}
// // //       onMouseEnter={() => setHovered(true)}
// // //       onMouseLeave={() => setHovered(false)}
// // //     >
// // //       <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
// // //         <path d="M3 11L11 3M11 3H6M11 3v5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
// // //       </svg>
// // //       {processContent(label)}
// // //     </a>
// // //   );
// // // }

// // // // ─── LinksRow ──────────────────────────────────────────────────

// // // function LinksRow({ links }) {
// // //   if (!links || links.length === 0) return null;
// // //   const filtered = links.filter((l) => l && (l.url || l.href));
// // //   if (filtered.length === 0) return null;

// // //   return (
// // //     <div style={{ margin: '16px 0 0', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
// // //       {filtered.map((link, i) => <LinkPill key={i} link={link} />)}
// // //     </div>
// // //   );
// // // }

// // // // ─── FieldContent ──────────────────────────────────────────────

// // // function FieldContent({ value }) {
// // //   if (typeof value === 'string') return <div>{processContent(value)}</div>;
// // //   if (Array.isArray(value)) return <div>{value.map((block, i) => <FieldContentBlock key={i} block={block} />)}</div>;
// // //   if (typeof value === 'object' && value !== null) return <FieldContentBlock block={value} />;
// // //   return null;
// // // }

// // // function FieldContentBlock({ block }) {
// // //   if (typeof block === 'string') return <div>{processContent(block)}</div>;
// // //   if (typeof block !== 'object' || block === null) return null;

// // //   if (block.component) {
// // //     const Component = COMPONENT_REGISTRY[block.component];
// // //     if (Component) {
// // //       const { component, ...props } = block;
// // //       return <Component {...props} />;
// // //     }
// // //   }

// // //   const { text, links, illustrations } = block;
// // //   const illustrationList = normalizeArray(illustrations);
// // //   const linkList = normalizeArray(links);

// // //   return (
// // //     <div>
// // //       {text && <div>{processContent(text)}</div>}
// // //       {illustrationList.map((ill, i) => <Illustration key={i} item={ill} />)}
// // //       <LinksRow links={linkList} />
// // //     </div>
// // //   );
// // // }

// // // // ─── AlphaButton ───────────────────────────────────────────────

// // // function AlphaButton({ letter, active, disabled, onClick }) {
// // //   const [hovered, setHovered] = useState(false);

// // //   return (
// // //     <button
// // //       style={{
// // //         width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
// // //         fontSize: '15px', fontWeight: '600', fontFamily: 'inherit', borderRadius: '7px', border: 'none',
// // //         cursor: disabled ? 'default' : 'pointer', pointerEvents: disabled ? 'none' : 'auto',
// // //         background: active ? ACCENT : hovered ? ACCENT_HOVER : 'transparent',
// // //         color: active ? '#fff' : disabled ? '#cbd5e1' : ACCENT,
// // //         transition: 'all 0.12s', flexShrink: 0,
// // //       }}
// // //       onClick={onClick}
// // //       onMouseEnter={() => setHovered(true)}
// // //       onMouseLeave={() => setHovered(false)}
// // //     >
// // //       {letter}
// // //     </button>
// // //   );
// // // }

// // // // ─── ToggleButton ──────────────────────────────────────────────

// // // function ToggleButton({ label, active, icon, onClick }) {
// // //   const [hovered, setHovered] = useState(false);

// // //   return (
// // //     <button
// // //       style={{
// // //         display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 22px',
// // //         border: 'none', borderRadius: '9px', cursor: 'pointer', fontFamily: 'inherit',
// // //         fontSize: '17px', fontWeight: '500',
// // //         background: active ? ACCENT : hovered ? '#e2e8f0' : 'transparent',
// // //         color: active ? '#fff' : '#475569', transition: 'all 0.15s',
// // //       }}
// // //       onClick={onClick}
// // //       onMouseEnter={() => setHovered(true)}
// // //       onMouseLeave={() => setHovered(false)}
// // //     >
// // //       {icon}
// // //       {label}
// // //     </button>
// // //   );
// // // }

// // // // ─── CategoryChip ──────────────────────────────────────────────

// // // function CategoryChip({ label, active, count, onToggle, onNavigate }) {
// // //   const [hovered, setHovered] = useState(false);
// // //   const [navHovered, setNavHovered] = useState(false);

// // //   const checkSvg = (
// // //     <svg width="14" height="14" viewBox="0 0 12 12">
// // //       <polyline points="2,6 5,9 10,3" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
// // //     </svg>
// // //   );

// // //   const arrowSvg = (
// // //     <svg width="14" height="14" viewBox="0 0 12 12">
// // //       <path d="M2 6h8M7 3l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
// // //     </svg>
// // //   );

// // //   return (
// // //     <div
// // //       style={{
// // //         display: 'flex', alignItems: 'center', justifyContent: 'space-between',
// // //         padding: '10px 17px',
// // //         border: active ? `1.5px solid ${ACCENT}` : hovered ? '1.5px solid #93aee0' : '1.5px solid #d0d9ed',
// // //         borderRadius: '12px', background: active ? ACCENT_LIGHT : '#fff',
// // //         cursor: 'pointer', transition: 'border-color 0.15s, background 0.15s', gap: '10px',
// // //       }}
// // //       onClick={onToggle}
// // //       onMouseEnter={() => setHovered(true)}
// // //       onMouseLeave={() => setHovered(false)}
// // //     >
// // //       <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
// // //         <div style={{
// // //           width: 21, height: 21, borderRadius: '4px',
// // //           border: active ? `1.5px solid ${ACCENT}` : '1.5px solid #94a3b8',
// // //           display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
// // //           background: active ? ACCENT : '#fff', transition: 'all 0.15s',
// // //         }}>
// // //           {active && checkSvg}
// // //         </div>
// // //         <span style={{ fontSize: '17px', fontWeight: '500', color: '#1e293b' }}>{processContent(label)}</span>
// // //         <span style={{ fontSize: '15px', color: '#94a3b8' }}>({count})</span>
// // //       </div>
// // //       <button
// // //         style={{
// // //           display: 'flex', alignItems: 'center', gap: '4px', padding: '5px 14px',
// // //           borderRadius: '18px', border: `1px solid ${navHovered ? ACCENT : '#d0d9ed'}`,
// // //           background: navHovered ? ACCENT_HOVER : '#fff', fontSize: '15px', fontWeight: '500',
// // //           fontFamily: 'inherit', color: ACCENT, cursor: 'pointer', flexShrink: 0,
// // //           transition: 'background 0.12s, border-color 0.12s',
// // //         }}
// // //         onMouseEnter={() => setNavHovered(true)}
// // //         onMouseLeave={() => setNavHovered(false)}
// // //         onClick={(e) => { e.stopPropagation(); onNavigate(); }}
// // //       >
// // //         Go to {arrowSvg}
// // //       </button>
// // //     </div>
// // //   );
// // // }

// // // // ─── ClearButton ───────────────────────────────────────────────

// // // function ClearButton({ onClick }) {
// // //   const [hovered, setHovered] = useState(false);

// // //   return (
// // //     <button
// // //       style={{
// // //         display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 20px',
// // //         border: '1px solid red', background: hovered ? '#fef2f2' : 'none',
// // //         borderRadius: '12px', fontSize: '17px', fontWeight: '500', fontFamily: 'inherit',
// // //         color: '#dc2626', cursor: 'pointer', transition: 'background 0.15s',
// // //       }}
// // //       onClick={onClick}
// // //       onMouseEnter={() => setHovered(true)}
// // //       onMouseLeave={() => setHovered(false)}
// // //     >
// // //       &#10005; Clear
// // //     </button>
// // //   );
// // // }

// // // // ─── TermItem ──────────────────────────────────────────────────

// // // function TermItem({ item, onNavigate }) {
// // //   const [hovered, setHovered] = useState(false);

// // //   return (
// // //     <a
// // //       href={`#${toId(item.name)}`}
// // //       style={{
// // //         padding: '10px 14px', fontSize: '17px', color: hovered ? ACCENT : '#334155',
// // //         borderRadius: '7px', cursor: 'pointer', transition: 'all 0.12s', textDecoration: 'none',
// // //         display: 'flex', alignItems: 'baseline', gap: '10px',
// // //         background: hovered ? ACCENT_LIGHT : 'transparent',
// // //       }}
// // //       onMouseEnter={() => setHovered(true)}
// // //       onMouseLeave={() => setHovered(false)}
// // //       onClick={(e) => { e.preventDefault(); onNavigate(toId(item.name)); }}
// // //     >
// // //       <span style={{ fontSize: '16px', fontWeight: '600', color: ACCENT, width: '16px', flexShrink: 0 }}>{item.name[0]}</span>
// // //       {processContent(item.name)}
// // //       <span style={{ fontSize: '15px', color: '#94a3b8', marginLeft: 'auto', flexShrink: 0, whiteSpace: 'nowrap' }}>{item.category}</span>
// // //     </a>
// // //   );
// // // }

// // // // ─── TocItem ───────────────────────────────────────────────────

// // // function TocItem({ item, isOpen, onToggle, onNavigate }) {
// // //   const [hovered, setHovered] = useState(false);
// // //   const id = toId(item.name);

// // //   return (
// // //     <div>
// // //       <button
// // //         style={{
// // //           display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
// // //           padding: '10px 17px', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
// // //           textAlign: 'left', fontSize: '16px', color: '#334155',
// // //           background: isOpen ? '#f0f4ff' : hovered ? '#f8fafc' : 'transparent', transition: 'background 0.1s',
// // //         }}
// // //         onClick={() => onToggle(id)}
// // //         onMouseEnter={() => setHovered(true)}
// // //         onMouseLeave={() => setHovered(false)}
// // //       >
// // //         <span>{item.name}</span>
// // //         <svg width="16" height="16" viewBox="0 0 14 14" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', color: '#94a3b8', flexShrink: 0 }}>
// // //           <polyline points="4,5 7,8 10,5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
// // //         </svg>
// // //       </button>
// // //       {isOpen && (
// // //         <div style={S.tocPeek}>
// // //           <div style={S.tocPeekFormula}>{processContent(item.formula)}</div>
// // //           <a style={{ fontSize: '14px', color: ACCENT, cursor: 'pointer', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); onNavigate(id); }}>
// // //             Learn More &#8595;
// // //           </a>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // // ─── CardLink ──────────────────────────────────────────────────

// // // function CardLink({ link }) {
// // //   const [hovered, setHovered] = useState(false);
// // //   if (!link || (!link.url && !link.href)) return null;
// // //   const label = link.label || link.text || link.url || link.href;
// // //   const url = link.url || link.href;

// // //   return (
// // //     <div>
// // //       <a
// // //         href={url}
// // //         style={{
// // //           display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '14px',
// // //           color: hovered ? '#1d4ed8' : ACCENT, textDecoration: 'none', padding: '8px 0 0',
// // //           cursor: 'pointer', fontWeight: '500', transition: 'color 0.15s',
// // //         }}
// // //         onMouseEnter={() => setHovered(true)}
// // //         onMouseLeave={() => setHovered(false)}
// // //       >
// // //         <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
// // //           <path d="M3 11L11 3M11 3H6M11 3v5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
// // //         </svg>
// // //         {processContent(label)}
// // //       </a>
// // //     </div>
// // //   );
// // // }

// // // // ─── BackToTop ─────────────────────────────────────────────────

// // // function BackToTop() {
// // //   const [hovered, setHovered] = useState(false);

// // //   return (
// // //     <div
// // //       style={{ fontSize: '13px', color: hovered ? ACCENT : '#94a3b8', cursor: 'pointer', textAlign: 'right', padding: '6px 0 0', userSelect: 'none', transition: 'color 0.15s' }}
// // //       onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
// // //       onMouseEnter={() => setHovered(true)}
// // //       onMouseLeave={() => setHovered(false)}
// // //     >
// // //       &uarr; Back to top
// // //     </div>
// // //   );
// // // }

// // // // ─── TabButton ─────────────────────────────────────────────────

// // // function TabButton({ label, active, onClick }) {
// // //   const [hovered, setHovered] = useState(false);

// // //   return (
// // //     <span
// // //       style={{
// // //         padding: '10px 22px', fontSize: '15px', fontWeight: '500', borderRadius: '8px 8px 0 0',
// // //         border: '1.5px solid', borderBottom: 'none', cursor: 'pointer', marginRight: '3px',
// // //         textTransform: 'capitalize', transition: 'background 0.15s, color 0.15s',
// // //         background: active ? ACCENT : hovered ? '#dae2f3' : '#e4eaf5',
// // //         color: active ? '#fff' : '#475569', borderColor: active ? ACCENT : '#d0d9ed',
// // //       }}
// // //       onClick={onClick}
// // //       onMouseEnter={() => setHovered(true)}
// // //       onMouseLeave={() => setHovered(false)}
// // //     >
// // //       {processContent(label)}
// // //     </span>
// // //   );
// // // }

// // // // ─── FormulaCard ───────────────────────────────────────────────

// // // function FormulaCard({ item, isHighlighted, onToggle, isOpen }) {
// // //   const hasFields = item.fields && typeof item.fields === 'object' && !Array.isArray(item.fields) && Object.keys(item.fields).length > 0;
// // //   const [activeTab, setActiveTab] = useState(0);
// // //   const [hovered, setHovered] = useState(false);
// // //   const fieldEntries = hasFields ? Object.entries(item.fields) : [];
// // //   const itemId = toId(item.name);

// // //   return (
// // //     <div
// // //       id={itemId}
// // //       style={{
// // //         border: isHighlighted ? `2px solid ${ACCENT}` : hovered ? '1.5px solid #93aee0' : '1.5px solid #d0d9ed',
// // //         borderRadius: '12px', marginBottom: '12px', overflow: 'hidden',
// // //         background: isHighlighted ? '#f8faff' : '#fff',
// // //         transition: 'border-color 0.2s, background 0.2s', scrollMarginTop: '130px',
// // //       }}
// // //       onMouseEnter={() => setHovered(true)}
// // //       onMouseLeave={() => setHovered(false)}
// // //     >
// // //       <div style={S.cardBody}>
// // //         <h3 style={S.cardName}>{processContent(item.name)}</h3>
// // //         <div style={S.cardFormula}>{processContent(item.formula)}</div>
// // //         {item.link && <CardLink link={item.link} />}
// // //         {hasFields && (
// // //           <div style={S.cardToggle} onClick={() => onToggle(itemId)}>
// // //             {isOpen ? 'Hide details' : 'See details'}
// // //             <svg width="14" height="14" viewBox="0 0 14 14" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }}>
// // //               <polyline points="3,5 7,9 11,5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// // //             </svg>
// // //           </div>
// // //         )}
// // //         {!isOpen && <BackToTop />}
// // //       </div>

// // //       {hasFields && (
// // //         <div style={S.cardDetail(isOpen)}>
// // //           <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
// // //             {fieldEntries.map(([key], i) => (
// // //               <TabButton key={key} label={key.replace(/_/g, ' ')} active={i === activeTab} onClick={() => setActiveTab(i)} />
// // //             ))}
// // //           </div>
// // //           <div style={S.tabBody}>
// // //             <FieldContent value={fieldEntries[activeTab]?.[1] || ''} />
// // //           </div>
// // //           <BackToTop />
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // // ─── SidebarLink ───────────────────────────────────────────────

// // // function SidebarLink({ item, active, onNavigate }) {
// // //   const [hovered, setHovered] = useState(false);

// // //   return (
// // //     <a
// // //       href={`#${toId(item.name)}`}
// // //       style={{
// // //         display: 'block', padding: '3px 8px', fontSize: '15px',
// // //         color: active ? ACCENT : hovered ? ACCENT : '#64748b',
// // //         fontWeight: active ? '600' : '400', textDecoration: 'none',
// // //         borderLeft: `2px solid ${active || hovered ? ACCENT : 'transparent'}`,
// // //         borderRadius: '0 4px 4px 0', background: active || hovered ? ACCENT_LIGHT : 'transparent',
// // //         transition: 'all 0.12s', cursor: 'pointer', whiteSpace: 'normal', wordBreak: 'break-word', lineHeight: '1.3',
// // //       }}
// // //       onMouseEnter={() => setHovered(true)}
// // //       onMouseLeave={() => setHovered(false)}
// // //       onClick={(e) => { e.preventDefault(); onNavigate(toId(item.name)); }}
// // //     >
// // //       {processContent(item.name)}
// // //     </a>
// // //   );
// // // }

// // // // ─── Icons ─────────────────────────────────────────────────────

// // // const GridIcon = (
// // //   <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
// // //     <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
// // //     <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
// // //     <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
// // //     <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
// // //   </svg>
// // // );

// // // const ListIcon = (
// // //   <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
// // //     <line x1="1" y1="3" x2="15" y2="3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
// // //     <line x1="1" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
// // //     <line x1="1" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
// // //   </svg>
// // // );

// // // // ═══════════════════════════════════════════════════════════════
// // // // MAIN COMPONENT
// // // // ═══════════════════════════════════════════════════════════════

// // // export default function FormulasTOC({
// // //   data = [],
// // //   groupByField = 'category',
// // //   type = 'Formula',
// // // }) {
// // //   const [view, setView] = useState('cards');
// // //   const [activeLetter, setActiveLetter] = useState(null);
// // //   const [activeCats, setActiveCats] = useState(new Set());
// // //   const [openTocItems, setOpenTocItems] = useState(new Set());
// // //   const [openCards, setOpenCards] = useState(new Set());
// // //   const [highlightedId, setHighlightedId] = useState(null);
// // //   const [searchTerm, setSearchTerm] = useState('');
// // //   const [searchFocused, setSearchFocused] = useState(false);
// // //   const [sidebarVisible, setSidebarVisible] = useState(false);
// // //   const [sidebarLeft, setSidebarLeft] = useState(0);
// // //   const [activeItemId, setActiveItemId] = useState(null);
// // //   const [activeSidebarCat, setActiveSidebarCat] = useState(null);

// // //   const navPanelRef = useRef(null);
// // //   const cardsRef = useRef(null);
// // //   const highlightTimer = useRef(null);
// // //   const observerRef = useRef(null);

// // //   const categories = useMemo(() => [...new Set(data.map((d) => d[groupByField]))], [data, groupByField]);

// // //   const catCounts = useMemo(() => {
// // //     const counts = {};
// // //     data.forEach((d) => { const key = d[groupByField] || 'Other'; counts[key] = (counts[key] || 0) + 1; });
// // //     return counts;
// // //   }, [data, groupByField]);

// // //   const usedLetters = useMemo(() => new Set(data.map((d) => d.name[0].toUpperCase())), [data]);

// // //   const grouped = useMemo(() => {
// // //     const lower = searchTerm.toLowerCase();
// // //     const filtered = lower
// // //       ? data.filter((d) =>
// // //           d.name?.toLowerCase().includes(lower) ||
// // //           d.formula?.toLowerCase().includes(lower) ||
// // //           (d.fields && typeof d.fields === 'object' &&
// // //             Object.values(d.fields).some((v) => {
// // //               if (typeof v === 'string') return v.toLowerCase().includes(lower);
// // //               if (typeof v === 'object' && v?.text) return v.text.toLowerCase().includes(lower);
// // //               return false;
// // //             })))
// // //       : data;

// // //     const groups = {};
// // //     filtered.forEach((d) => { const key = d[groupByField] || 'Other'; if (!groups[key]) groups[key] = []; groups[key].push(d); });
// // //     return groups;
// // //   }, [data, searchTerm, groupByField]);

// // //   const totalCount = useMemo(() => Object.values(grouped).reduce((sum, arr) => sum + arr.length, 0), [grouped]);

// // //   const navFiltered = useMemo(() => {
// // //     let result = data;
// // //     if (activeLetter) result = result.filter((d) => d.name[0].toUpperCase() === activeLetter);
// // //     if (activeCats.size > 0) result = result.filter((d) => activeCats.has(d[groupByField]));
// // //     return [...result].sort((a, b) => a.name.localeCompare(b.name));
// // //   }, [data, activeLetter, activeCats, groupByField]);

// // //   const toggleLetter = useCallback((letter) => { setActiveLetter((prev) => (prev === letter ? null : letter)); }, []);
// // //   const toggleCat = useCallback((cat) => { setActiveCats((prev) => { const next = new Set(prev); if (next.has(cat)) next.delete(cat); else next.add(cat); return next; }); }, []);
// // //   const clearFilters = useCallback(() => { setActiveCats(new Set()); setActiveLetter(null); }, []);
// // //   const toggleTocItem = useCallback((id) => { setOpenTocItems((prev) => { const next = new Set(); if (!prev.has(id)) next.add(id); return next; }); }, []);
// // //   const toggleCard = useCallback((id) => { setOpenCards((prev) => { const next = new Set(prev); if (next.has(id)) next.delete(id); else next.add(id); return next; }); }, []);

// // //   const scrollToItem = useCallback((id) => {
// // //     const el = document.getElementById(id);
// // //     if (!el) return;
// // //     const y = el.getBoundingClientRect().top + window.scrollY - 130;
// // //     window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
// // //   }, []);

// // //   const navigateToItem = useCallback((id) => {
// // //     setSearchTerm('');
// // //     const hasFields = data.some((d) => {
// // //       const did = toId(d.name);
// // //       return did === id && d.fields && typeof d.fields === 'object' && Object.keys(d.fields).length > 0;
// // //     });
// // //     if (hasFields) setOpenCards((prev) => new Set(prev).add(id));
// // //     setHighlightedId(id);
// // //     clearTimeout(highlightTimer.current);
// // //     highlightTimer.current = setTimeout(() => setHighlightedId(null), 3000);
// // //     requestAnimationFrame(() => { setTimeout(() => scrollToItem(id), 100); });
// // //   }, [data, scrollToItem]);

// // //   const navigateToCategory = useCallback((cat) => {
// // //     const categoryId = `category_${cat.toLowerCase().replace(/\s+/g, '_')}`;
// // //     const el = document.getElementById(categoryId);
// // //     if (!el) return;
// // //     const y = el.getBoundingClientRect().top + window.scrollY - 140;
// // //     window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
// // //   }, []);

// // //   useEffect(() => { const hash = window.location.hash.slice(1); if (hash) setTimeout(() => navigateToItem(hash), 150); }, [navigateToItem]);

// // //   useEffect(() => {
// // //     const onHashChange = () => { const hash = window.location.hash.slice(1); if (hash) navigateToItem(hash); };
// // //     window.addEventListener('hashchange', onHashChange);
// // //     return () => window.removeEventListener('hashchange', onHashChange);
// // //   }, [navigateToItem]);

// // //   useEffect(() => {
// // //     const onClick = (e) => {
// // //       const a = e.target.closest('a[href^="#"]');
// // //       if (!a) return;
// // //       const hash = a.getAttribute('href').slice(1);
// // //       if (hash) { e.preventDefault(); window.history.pushState(null, '', `#${hash}`); navigateToItem(hash); }
// // //     };
// // //     document.addEventListener('click', onClick);
// // //     return () => document.removeEventListener('click', onClick);
// // //   }, [navigateToItem]);

// // //   useEffect(() => {
// // //     const check = () => {
// // //       if (!navPanelRef.current) return;
// // //       const rect = navPanelRef.current.getBoundingClientRect();
// // //       const footer = document.querySelector('footer');
// // //       const pastFooter = footer ? footer.getBoundingClientRect().top < window.innerHeight : false;
// // //       const sidebarW = 200; const gap = 24; let left = 20;
// // //       if (cardsRef.current) { const cardsRect = cardsRef.current.getBoundingClientRect(); left = cardsRect.left - sidebarW - gap; }
// // //       const show = rect.bottom < 0 && window.innerWidth >= 1100 && !pastFooter && left > 10;
// // //       setSidebarVisible(show);
// // //       setSidebarLeft(Math.max(10, left));
// // //     };
// // //     window.addEventListener('scroll', check, { passive: true });
// // //     window.addEventListener('resize', check, { passive: true });
// // //     check();
// // //     return () => { window.removeEventListener('scroll', check); window.removeEventListener('resize', check); };
// // //   }, []);

// // //   useEffect(() => {
// // //     if (observerRef.current) observerRef.current.disconnect();
// // //     const observer = new IntersectionObserver((entries) => {
// // //       entries.forEach((entry) => {
// // //         if (entry.isIntersecting) {
// // //           const id = entry.target.id;
// // //           setActiveItemId(id);
// // //           const item = data.find((d) => toId(d.name) === id);
// // //           if (item) setActiveSidebarCat(item[groupByField]);
// // //         }
// // //       });
// // //     }, { rootMargin: '-80px 0px -60% 0px', threshold: 0 });
// // //     data.forEach((item) => { const el = document.getElementById(toId(item.name)); if (el) observer.observe(el); });
// // //     observerRef.current = observer;
// // //     return () => observer.disconnect();
// // //   }, [data, grouped, groupByField]);

// // //   const tocGridStyle = useMemo(() => {
// // //     const colCount = categories.length <= 2 ? 2 : categories.length <= 4 ? categories.length : 4;
// // //     return { ...S.tocGrid, gridTemplateColumns: `repeat(${colCount}, 1fr)` };
// // //   }, [categories]);

// // //   return (
// // //     <>
// // //       <style>{HIDE_SCROLLBAR_CSS}</style>

// // //       <div style={S.outerWrap}>
// // //         <div ref={navPanelRef} style={{ marginBottom: 0 }}>
// // //           <div style={S.toggleWrap}>
// // //             <div style={S.toggleTrack}>
// // //               <ToggleButton label="Categories" icon={GridIcon} active={view === 'cards'} onClick={() => setView('cards')} />
// // //               <ToggleButton label="Index" icon={ListIcon} active={view === 'index'} onClick={() => setView('index')} />
// // //             </div>
// // //           </div>

// // //           {view === 'cards' && (
// // //             <div style={tocGridStyle}>
// // //               {categories.map((cat) => {
// // //                 const items = data.filter((d) => d[groupByField] === cat);
// // //                 return (
// // //                   <div key={cat} style={S.tocCard}>
// // //                     <div style={S.tocCardHeader}>{cat}</div>
// // //                     <div style={S.tocCardBody}>
// // //                       {items.map((f) => <TocItem key={f.name} item={f} isOpen={openTocItems.has(toId(f.name))} onToggle={toggleTocItem} onNavigate={navigateToItem} />)}
// // //                     </div>
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //           )}

// // //           {view === 'index' && (
// // //             <div style={S.navPanel}>
// // //               <div className="ftoc-no-scrollbar" style={S.alphaBar}>
// // //                 {ALL_LETTERS.map((l) => <AlphaButton key={l} letter={l} active={activeLetter === l} disabled={!usedLetters.has(l)} onClick={() => toggleLetter(l)} />)}
// // //               </div>
// // //               <div className="ftoc-no-scrollbar" style={S.termGrid}>
// // //                 {navFiltered.map((item) => <TermItem key={item.name} item={item} onNavigate={navigateToItem} />)}
// // //               </div>
// // //               <div style={S.catFilterRow}>
// // //                 {categories.map((cat) => <CategoryChip key={cat} label={cat} active={activeCats.has(cat)} count={catCounts[cat]} onToggle={() => toggleCat(cat)} onNavigate={() => navigateToCategory(cat)} />)}
// // //                 {(activeCats.size > 0 || activeLetter) && <ClearButton onClick={clearFilters} />}
// // //               </div>
// // //               <div style={S.navStatus}>{navFiltered.length} of {data.length} {type.toLowerCase()}s</div>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>

// // //       <div ref={cardsRef} style={S.innerWrap}>
// // //         <div style={S.searchBar}>
// // //           <div style={S.searchWrapper}>
// // //             <input
// // //               type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
// // //               onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)}
// // //               placeholder={`Search in ${type}s...`}
// // //               style={{
// // //                 width: '100%', padding: '13px 36px 13px 18px',
// // //                 border: searchFocused ? `2px solid ${ACCENT}` : '2px solid transparent',
// // //                 borderRadius: '28px', fontSize: '16px', fontFamily: 'inherit', outline: 'none',
// // //                 background: '#fff', color: '#1e293b', boxSizing: 'border-box', transition: 'border-color 0.2s',
// // //               }}
// // //             />
// // //             {searchTerm && <button style={S.searchClear} onClick={() => setSearchTerm('')} aria-label="Clear search">&#10005;</button>}
// // //           </div>
// // //           <span style={S.searchCount}>{totalCount} {totalCount === 1 ? type.toLowerCase() : `${type.toLowerCase()}s`}</span>
// // //         </div>

// // //         {Object.keys(grouped).length === 0 ? (
// // //           <div style={S.empty}>No {type.toLowerCase()}s found for &quot;{searchTerm}&quot;</div>
// // //         ) : (
// // //           Object.entries(grouped).map(([group, items]) => {
// // //             const categoryId = `category_${group.toLowerCase().replace(/\s+/g, '_')}`;
// // //             return (
// // //               <div key={group} id={categoryId} style={{ marginBottom: '40px' }}>
// // //                 <div style={S.groupHeader}>
// // //                   <h2 style={S.groupTitle}>{group}</h2>
// // //                   <span style={S.groupCount}>({items.length} {items.length === 1 ? type.toLowerCase() : `${type.toLowerCase()}s`})</span>
// // //                 </div>
// // //                 {items.map((item) => {
// // //                   const id = toId(item.name);
// // //                   return <FormulaCard key={id} item={item} isHighlighted={highlightedId === id} isOpen={openCards.has(id)} onToggle={toggleCard} />;
// // //                 })}
// // //               </div>
// // //             );
// // //           })
// // //         )}
// // //       </div>

// // //       <div className="ftoc-no-scrollbar" style={S.sidebar(sidebarVisible, sidebarLeft)}>
// // //         {categories.map((cat) => {
// // //           const items = data.filter((d) => d[groupByField] === cat);
// // //           return (
// // //             <div key={cat} style={S.sidebarGroup}>
// // //               <div style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#1e40af', marginBottom: '4px', paddingLeft: '8px' }}>
// // //                 {processContent(cat)}
// // //               </div>
// // //               {items.map((item) => <SidebarLink key={item.name} item={item} active={activeItemId === toId(item.name)} onNavigate={navigateToItem} />)}
// // //             </div>
// // //           );
// // //         })}
// // //       </div>
// // //     </>
// // //   );
// // // }



// // // import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
// // // import { processContent } from '../../utils/contentProcessor';
// // // import FunctionMachineDiagram from './machine-diagram/FunctionMachineDiagram';
// // // import MathDerivation from './math-derivation/MathDerivation';

// // // // ─── Component Registry ────────────────────────────────────────

// // // const COMPONENT_REGISTRY = {
// // //   FunctionMachineDiagram,
// // //   MathDerivation: ({ variant = 'rail', compact = true, passageStyle = 'bar', ...rest }) => (
// // //     <MathDerivation variant={variant} compact={compact} passageStyle={passageStyle} {...rest} />
// // //   ),
// // // };

// // // // ─── Constants ─────────────────────────────────────────────────

// // // const ALL_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
// // // const ACCENT = '#4a6cf7';
// // // const ACCENT_LIGHT = '#eef1fd';
// // // const ACCENT_BORDER = '#cdd5f8';
// // // const ACCENT_HOVER = '#dbe1fc';

// // // const HIDE_SCROLLBAR_CSS = `
// // //   .ftoc-no-scrollbar::-webkit-scrollbar { display: none; }
// // // `;

// // // // const toId = (name) => name.toLowerCase().replace(/\s+/g, '_');

// // // // const toId = (name) => name.toLowerCase().replace(/[()]/g, '').replace(/\s+/g, '_');


// // // const toId = (name) => name.toLowerCase().replace(/['\u2019()]/g, '').replace(/\s+/g, '_');

// // // const noScroll = {
// // //   scrollbarWidth: 'none',
// // //   msOverflowStyle: 'none',
// // // };

// // // function normalizeArray(val) {
// // //   if (!val) return [];
// // //   if (Array.isArray(val)) return val;
// // //   return [val];
// // // }

// // // // ─── Styles ────────────────────────────────────────────────────

// // // const S = {
// // //   outerWrap: {
// // //     maxWidth: '1150px',
// // //     margin: '0 auto',
// // //     padding: '0 20px',
// // //   },
// // //   innerWrap: {
// // //     maxWidth: '820px',
// // //     margin: '0 auto',
// // //     padding: '0 16px',
// // //   },
// // //   toggleWrap: {
// // //     display: 'flex',
// // //     justifyContent: 'center',
// // //     marginBottom: '24px',
// // //   },
// // //   toggleTrack: {
// // //     display: 'inline-flex',
// // //     background: '#f1f5f9',
// // //     borderRadius: '12px',
// // //     padding: '4px',
// // //     border: '1px solid #e2e8f0',
// // //   },
// // //   tocGrid: {
// // //     display: 'grid',
// // //     gridTemplateColumns: 'repeat(4, 1fr)',
// // //     gap: '14px',
// // //     marginBottom: '28px',
// // //   },
// // //   tocCard: {
// // //     borderRadius: '12px',
// // //     overflow: 'hidden',
// // //     border: '1px solid #d0d9ed',
// // //     background: '#fff',
// // //   },
// // //   tocCardHeader: {
// // //     background: 'linear-gradient(135deg, #4a6cf7 0%, #3b5de7 100%)',
// // //     color: '#fff',
// // //     padding: '17px 20px',
// // //     fontSize: '17px',
// // //     fontWeight: '600',
// // //   },
// // //   tocCardBody: {
// // //     padding: '5px 0',
// // //   },
// // //   tocPeek: {
// // //     padding: '8px 18px 12px',
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     gap: '8px',
// // //   },
// // //   tocPeekFormula: {
// // //     fontSize: '16px',
// // //     background: '#f1f5f9',
// // //     padding: '8px 12px',
// // //     borderRadius: '6px',
// // //     color: '#475569',
// // //     lineHeight: '1.6',
// // //   },
// // //   navPanel: {
// // //     background: '#fff',
// // //     border: '1.5px solid #d0d9ed',
// // //     borderRadius: '16px',
// // //     overflow: 'hidden',
// // //     marginBottom: '28px',
// // //   },
// // //   alphaBar: {
// // //     display: 'flex',
// // //     flexWrap: 'nowrap',
// // //     gap: '2px',
// // //     padding: '12px 18px',
// // //     background: '#f8fafc',
// // //     borderBottom: '1.5px solid #e2e8f0',
// // //     justifyContent: 'center',
// // //     overflowX: 'auto',
// // //     ...noScroll,
// // //   },
// // //   termGrid: {
// // //     padding: '20px 24px',
// // //     display: 'grid',
// // //     gridTemplateColumns: '1fr 1fr',
// // //     gap: '3px 24px',
// // //   },
// // //   catFilterRow: {
// // //     display: 'flex',
// // //     flexWrap: 'wrap',
// // //     gap: '8px',
// // //     padding: '17px 24px',
// // //     borderTop: '1px solid #e2e8f0',
// // //   },
// // //   navStatus: {
// // //     padding: '10px 24px 17px',
// // //     fontSize: '16px',
// // //     color: '#94a3b8',
// // //     borderTop: '1px solid #e2e8f0',
// // //     textAlign: 'right',
// // //   },
// // //   searchBar: {
// // //     position: 'sticky',
// // //     top: '63px',
// // //     zIndex: 10,
// // //     background: 'rgba(30, 58, 138, 0.75)',
// // //     backdropFilter: 'blur(8px)',
// // //     borderRadius: '4px',
// // //     padding: '14px 20px',
// // //     marginBottom: '32px',
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     gap: '14px',
// // //   },
// // //   searchWrapper: {
// // //     position: 'relative',
// // //     flex: 1,
// // //   },
// // //   searchClear: {
// // //     position: 'absolute',
// // //     top: '50%',
// // //     right: '14px',
// // //     transform: 'translateY(-50%)',
// // //     border: 'none',
// // //     background: 'none',
// // //     color: '#94a3b8',
// // //     fontSize: '16px',
// // //     cursor: 'pointer',
// // //     padding: '0',
// // //     lineHeight: 1,
// // //   },
// // //   searchCount: {
// // //     fontSize: '14px',
// // //     color: '#c7d2e8',
// // //     whiteSpace: 'nowrap',
// // //     flexShrink: 0,
// // //   },
// // //   groupHeader: {
// // //     display: 'flex',
// // //     alignItems: 'baseline',
// // //     gap: '10px',
// // //     margin: '0 0 16px',
// // //     paddingBottom: '8px',
// // //     borderBottom: '2px solid #c7d2e8',
// // //   },
// // //   groupTitle: {
// // //     fontFamily: "'Source Serif 4', Georgia, serif",
// // //     fontSize: '22px',
// // //     fontWeight: '600',
// // //     color: '#1e40af',
// // //     margin: 0,
// // //     letterSpacing: '0.01em',
// // //   },
// // //   groupCount: {
// // //     fontSize: '14px',
// // //     color: '#94a3b8',
// // //     fontWeight: '400',
// // //   },
// // //   cardBody: {
// // //     padding: '22px 26px',
// // //     background: '#fbfcff',
// // //   },
// // //   cardName: {
// // //     fontFamily: "'Source Serif 4', Georgia, serif",
// // //     fontSize: '20px',
// // //     fontWeight: '600',
// // //     color: '#1e293b',
// // //     margin: '0 0 8px',
// // //     lineHeight: '1.3',
// // //   },
// // //   cardFormula: {
// // //     fontSize: '17px',
// // //     color: '#475569',
// // //     lineHeight: '1.7',
// // //     margin: 0,
// // //   },
// // //   cardToggle: {
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     gap: '6px',
// // //     padding: '12px 0 4px',
// // //     cursor: 'pointer',
// // //     color: ACCENT,
// // //     fontSize: '15px',
// // //     fontWeight: '500',
// // //     userSelect: 'none',
// // //   },
// // //   cardDetail: (open) => ({
// // //     borderTop: '1.5px solid #e2e8f0',
// // //     background: '#f0f4fc',
// // //     overflow: 'hidden',
// // //     maxHeight: open ? '5000px' : '0',
// // //     padding: open ? '20px 26px' : '0 26px',
// // //     transition: 'max-height 0.35s ease, padding 0.3s ease',
// // //   }),
// // //   tabBody: {
// // //     padding: '20px 22px',
// // //     border: '1.5px solid #d0d9ed',
// // //     borderRadius: '0 8px 8px 8px',
// // //     fontSize: '17px',
// // //     color: '#475569',
// // //     lineHeight: '1.7',
// // //     background: '#fff',
// // //     minHeight: '60px',
// // //   },
// // //   sidebar: (visible, leftPos) => ({
// // //     position: 'fixed',
// // //     top: '20px',
// // //     left: `${leftPos}px`,
// // //     width: '200px',
// // //     background: '#fff',
// // //     border: '1.5px solid #d0d9ed',
// // //     borderRadius: '12px',
// // //     padding: '16px 14px',
// // //     maxHeight: 'calc(100vh - 40px)',
// // //     overflowY: 'auto',
// // //     opacity: visible ? 1 : 0,
// // //     transform: visible ? 'translateY(0)' : 'translateY(12px)',
// // //     transition: 'opacity 0.3s, transform 0.3s',
// // //     pointerEvents: visible ? 'auto' : 'none',
// // //     zIndex: 50,
// // //     ...noScroll,
// // //   }),
// // //   sidebarGroup: {
// // //     marginBottom: '14px',
// // //   },
// // //   empty: {
// // //     textAlign: 'center',
// // //     padding: '50px 20px',
// // //     color: '#94a3b8',
// // //     fontSize: '16px',
// // //   },
// // // };

// // // // ─── Illustration ──────────────────────────────────────────────

// // // function Illustration({ item }) {
// // //   const { src, alt = '', caption, width } = item;
// // //   const isSvg = typeof src === 'string' && src.trimStart().startsWith('<svg');

// // //   return (
// // //     <div style={{ margin: '16px 0', padding: '16px', background: '#f8fafc', borderRadius: '8px', border: '0.5px solid #e2e8f0' }}>
// // //       {isSvg ? (
// // //         <div style={{ maxWidth: width ? `${width}px` : '100%', margin: '0 auto' }} dangerouslySetInnerHTML={{ __html: src }} />
// // //       ) : (
// // //         <img src={src} alt={alt} style={{ display: 'block', margin: '0 auto', maxWidth: width ? `${width}px` : '100%', width: '100%', height: 'auto', borderRadius: '4px' }} loading="lazy" />
// // //       )}
// // //       {caption && <p style={{ margin: '8px 0 0', fontSize: '13px', color: '#94a3b8', textAlign: 'center', lineHeight: '1.5' }}>{processContent(caption)}</p>}
// // //     </div>
// // //   );
// // // }

// // // // ─── LinkPill ──────────────────────────────────────────────────

// // // function LinkPill({ link }) {
// // //   const [hovered, setHovered] = useState(false);
// // //   const label = link.label || link.text || link.url;
// // //   const url = link.url || link.href;
// // //   if (!url) return null;

// // //   return (
// // //     <a
// // //       href={url}
// // //       style={{
// // //         display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '14px',
// // //         color: '#2563eb', textDecoration: 'none', padding: '6px 14px',
// // //         border: '0.5px solid #e2e8f0', borderRadius: '20px',
// // //         background: hovered ? '#eff4ff' : '#f8fafc', transition: 'background 0.15s', cursor: 'pointer',
// // //       }}
// // //       onMouseEnter={() => setHovered(true)}
// // //       onMouseLeave={() => setHovered(false)}
// // //     >
// // //       <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
// // //         <path d="M3 11L11 3M11 3H6M11 3v5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
// // //       </svg>
// // //       {processContent(label)}
// // //     </a>
// // //   );
// // // }

// // // // ─── LinksRow ──────────────────────────────────────────────────

// // // function LinksRow({ links }) {
// // //   if (!links || links.length === 0) return null;
// // //   const filtered = links.filter((l) => l && (l.url || l.href));
// // //   if (filtered.length === 0) return null;

// // //   return (
// // //     <div style={{ margin: '16px 0 0', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
// // //       {filtered.map((link, i) => <LinkPill key={i} link={link} />)}
// // //     </div>
// // //   );
// // // }

// // // // ─── FieldContent ──────────────────────────────────────────────

// // // function FieldContent({ value }) {
// // //   if (typeof value === 'string') return <div>{processContent(value)}</div>;
// // //   if (Array.isArray(value)) return <div>{value.map((block, i) => <FieldContentBlock key={i} block={block} />)}</div>;
// // //   if (typeof value === 'object' && value !== null) return <FieldContentBlock block={value} />;
// // //   return null;
// // // }

// // // function FieldContentBlock({ block }) {
// // //   if (typeof block === 'string') return <div>{processContent(block)}</div>;
// // //   if (typeof block !== 'object' || block === null) return null;

// // //   if (block.component) {
// // //     const Component = COMPONENT_REGISTRY[block.component];
// // //     if (Component) {
// // //       const { component, ...props } = block;
// // //       return <Component {...props} />;
// // //     }
// // //   }

// // //   const { text, links, illustrations } = block;
// // //   const illustrationList = normalizeArray(illustrations);
// // //   const linkList = normalizeArray(links);

// // //   return (
// // //     <div>
// // //       {text && <div>{processContent(text)}</div>}
// // //       {illustrationList.map((ill, i) => <Illustration key={i} item={ill} />)}
// // //       <LinksRow links={linkList} />
// // //     </div>
// // //   );
// // // }

// // // // ─── AlphaButton ───────────────────────────────────────────────

// // // function AlphaButton({ letter, active, disabled, onClick }) {
// // //   const [hovered, setHovered] = useState(false);

// // //   return (
// // //     <button
// // //       style={{
// // //         width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
// // //         fontSize: '15px', fontWeight: '600', fontFamily: 'inherit', borderRadius: '7px', border: 'none',
// // //         cursor: disabled ? 'default' : 'pointer', pointerEvents: disabled ? 'none' : 'auto',
// // //         background: active ? ACCENT : hovered ? ACCENT_HOVER : 'transparent',
// // //         color: active ? '#fff' : disabled ? '#cbd5e1' : ACCENT,
// // //         transition: 'all 0.12s', flexShrink: 0,
// // //       }}
// // //       onClick={onClick}
// // //       onMouseEnter={() => setHovered(true)}
// // //       onMouseLeave={() => setHovered(false)}
// // //     >
// // //       {letter}
// // //     </button>
// // //   );
// // // }

// // // // ─── ToggleButton ──────────────────────────────────────────────

// // // function ToggleButton({ label, active, icon, onClick }) {
// // //   const [hovered, setHovered] = useState(false);

// // //   return (
// // //     <button
// // //       style={{
// // //         display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 22px',
// // //         border: 'none', borderRadius: '9px', cursor: 'pointer', fontFamily: 'inherit',
// // //         fontSize: '17px', fontWeight: '500',
// // //         background: active ? ACCENT : hovered ? '#e2e8f0' : 'transparent',
// // //         color: active ? '#fff' : '#475569', transition: 'all 0.15s',
// // //       }}
// // //       onClick={onClick}
// // //       onMouseEnter={() => setHovered(true)}
// // //       onMouseLeave={() => setHovered(false)}
// // //     >
// // //       {icon}
// // //       {label}
// // //     </button>
// // //   );
// // // }

// // // // ─── CategoryChip ──────────────────────────────────────────────

// // // function CategoryChip({ label, active, count, onToggle, onNavigate }) {
// // //   const [hovered, setHovered] = useState(false);
// // //   const [navHovered, setNavHovered] = useState(false);

// // //   const checkSvg = (
// // //     <svg width="14" height="14" viewBox="0 0 12 12">
// // //       <polyline points="2,6 5,9 10,3" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
// // //     </svg>
// // //   );

// // //   const arrowSvg = (
// // //     <svg width="14" height="14" viewBox="0 0 12 12">
// // //       <path d="M2 6h8M7 3l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
// // //     </svg>
// // //   );

// // //   return (
// // //     <div
// // //       style={{
// // //         display: 'flex', alignItems: 'center', justifyContent: 'space-between',
// // //         padding: '10px 17px',
// // //         border: active ? `1.5px solid ${ACCENT}` : hovered ? '1.5px solid #93aee0' : '1.5px solid #d0d9ed',
// // //         borderRadius: '12px', background: active ? ACCENT_LIGHT : '#fff',
// // //         cursor: 'pointer', transition: 'border-color 0.15s, background 0.15s', gap: '10px',
// // //       }}
// // //       onClick={onToggle}
// // //       onMouseEnter={() => setHovered(true)}
// // //       onMouseLeave={() => setHovered(false)}
// // //     >
// // //       <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
// // //         <div style={{
// // //           width: 21, height: 21, borderRadius: '4px',
// // //           border: active ? `1.5px solid ${ACCENT}` : '1.5px solid #94a3b8',
// // //           display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
// // //           background: active ? ACCENT : '#fff', transition: 'all 0.15s',
// // //         }}>
// // //           {active && checkSvg}
// // //         </div>
// // //         <span style={{ fontSize: '17px', fontWeight: '500', color: '#1e293b' }}>{processContent(label)}</span>
// // //         <span style={{ fontSize: '15px', color: '#94a3b8' }}>({count})</span>
// // //       </div>
// // //       <button
// // //         style={{
// // //           display: 'flex', alignItems: 'center', gap: '4px', padding: '5px 14px',
// // //           borderRadius: '18px', border: `1px solid ${navHovered ? ACCENT : '#d0d9ed'}`,
// // //           background: navHovered ? ACCENT_HOVER : '#fff', fontSize: '15px', fontWeight: '500',
// // //           fontFamily: 'inherit', color: ACCENT, cursor: 'pointer', flexShrink: 0,
// // //           transition: 'background 0.12s, border-color 0.12s',
// // //         }}
// // //         onMouseEnter={() => setNavHovered(true)}
// // //         onMouseLeave={() => setNavHovered(false)}
// // //         onClick={(e) => { e.stopPropagation(); onNavigate(); }}
// // //       >
// // //         Go to {arrowSvg}
// // //       </button>
// // //     </div>
// // //   );
// // // }

// // // // ─── ClearButton ───────────────────────────────────────────────

// // // function ClearButton({ onClick }) {
// // //   const [hovered, setHovered] = useState(false);

// // //   return (
// // //     <button
// // //       style={{
// // //         display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 20px',
// // //         border: '1px solid red', background: hovered ? '#fef2f2' : 'none',
// // //         borderRadius: '12px', fontSize: '17px', fontWeight: '500', fontFamily: 'inherit',
// // //         color: '#dc2626', cursor: 'pointer', transition: 'background 0.15s',
// // //       }}
// // //       onClick={onClick}
// // //       onMouseEnter={() => setHovered(true)}
// // //       onMouseLeave={() => setHovered(false)}
// // //     >
// // //       &#10005; Clear
// // //     </button>
// // //   );
// // // }

// // // // ─── TermItem ──────────────────────────────────────────────────

// // // function TermItem({ item, onNavigate }) {
// // //   const [hovered, setHovered] = useState(false);

// // //   return (
// // //     <a
// // //       href={`#${toId(item.name)}`}
// // //       style={{
// // //         padding: '10px 14px', fontSize: '17px', color: hovered ? ACCENT : '#334155',
// // //         borderRadius: '7px', cursor: 'pointer', transition: 'all 0.12s', textDecoration: 'none',
// // //         display: 'flex', alignItems: 'baseline', gap: '10px',
// // //         background: hovered ? ACCENT_LIGHT : 'transparent',
// // //       }}
// // //       onMouseEnter={() => setHovered(true)}
// // //       onMouseLeave={() => setHovered(false)}
// // //       onClick={(e) => { e.preventDefault(); onNavigate(toId(item.name)); }}
// // //     >
// // //       <span style={{ fontSize: '16px', fontWeight: '600', color: ACCENT, width: '16px', flexShrink: 0 }}>{item.name[0]}</span>
// // //       {processContent(item.name)}
// // //       <span style={{ fontSize: '15px', color: '#94a3b8', marginLeft: 'auto', flexShrink: 0, whiteSpace: 'nowrap' }}>{item.category}</span>
// // //     </a>
// // //   );
// // // }

// // // // ─── TocItem ───────────────────────────────────────────────────

// // // function TocItem({ item, isOpen, onToggle, onNavigate }) {
// // //   const [hovered, setHovered] = useState(false);
// // //   const id = toId(item.name);

// // //   return (
// // //     <div>
// // //       <button
// // //         style={{
// // //           display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
// // //           padding: '10px 17px', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
// // //           textAlign: 'left', fontSize: '16px', color: '#334155',
// // //           background: isOpen ? '#f0f4ff' : hovered ? '#f8fafc' : 'transparent', transition: 'background 0.1s',
// // //         }}
// // //         onClick={() => onToggle(id)}
// // //         onMouseEnter={() => setHovered(true)}
// // //         onMouseLeave={() => setHovered(false)}
// // //       >
// // //         <span>{item.name}</span>
// // //         <svg width="16" height="16" viewBox="0 0 14 14" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', color: '#94a3b8', flexShrink: 0 }}>
// // //           <polyline points="4,5 7,8 10,5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
// // //         </svg>
// // //       </button>
// // //       {isOpen && (
// // //         <div style={S.tocPeek}>
// // //           <div style={S.tocPeekFormula}>{processContent(item.formula)}</div>
// // //           <a style={{ fontSize: '14px', color: ACCENT, cursor: 'pointer', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); onNavigate(id); }}>
// // //             Learn More &#8595;
// // //           </a>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // // ─── CardLink ──────────────────────────────────────────────────

// // // function CardLink({ link }) {
// // //   const [hovered, setHovered] = useState(false);
// // //   if (!link || (!link.url && !link.href)) return null;
// // //   const label = link.label || link.text || link.url || link.href;
// // //   const url = link.url || link.href;

// // //   return (
// // //     <div>
// // //       <a
// // //         href={url}
// // //         style={{
// // //           display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '14px',
// // //           color: hovered ? '#1d4ed8' : ACCENT, textDecoration: 'none', padding: '8px 0 0',
// // //           cursor: 'pointer', fontWeight: '500', transition: 'color 0.15s',
// // //         }}
// // //         onMouseEnter={() => setHovered(true)}
// // //         onMouseLeave={() => setHovered(false)}
// // //       >
// // //         <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
// // //           <path d="M3 11L11 3M11 3H6M11 3v5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
// // //         </svg>
// // //         {processContent(label)}
// // //       </a>
// // //     </div>
// // //   );
// // // }

// // // // ─── BackToTop ─────────────────────────────────────────────────

// // // function BackToTop() {
// // //   const [hovered, setHovered] = useState(false);

// // //   return (
// // //     <div
// // //       style={{ fontSize: '13px', color: hovered ? ACCENT : '#94a3b8', cursor: 'pointer', textAlign: 'right', padding: '6px 0 0', userSelect: 'none', transition: 'color 0.15s' }}
// // //       onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
// // //       onMouseEnter={() => setHovered(true)}
// // //       onMouseLeave={() => setHovered(false)}
// // //     >
// // //       &uarr; Back to top
// // //     </div>
// // //   );
// // // }

// // // // ─── TabButton ─────────────────────────────────────────────────

// // // function TabButton({ label, active, onClick }) {
// // //   const [hovered, setHovered] = useState(false);

// // //   return (
// // //     <span
// // //       style={{
// // //         padding: '10px 22px', fontSize: '15px', fontWeight: '500', borderRadius: '8px 8px 0 0',
// // //         border: '1.5px solid', borderBottom: 'none', cursor: 'pointer', marginRight: '3px',
// // //         textTransform: 'capitalize', transition: 'background 0.15s, color 0.15s',
// // //         background: active ? ACCENT : hovered ? '#dae2f3' : '#e4eaf5',
// // //         color: active ? '#fff' : '#475569', borderColor: active ? ACCENT : '#d0d9ed',
// // //       }}
// // //       onClick={onClick}
// // //       onMouseEnter={() => setHovered(true)}
// // //       onMouseLeave={() => setHovered(false)}
// // //     >
// // //       {processContent(label)}
// // //     </span>
// // //   );
// // // }

// // // // ─── FormulaCard ───────────────────────────────────────────────

// // // function FormulaCard({ item, isHighlighted, onToggle, isOpen }) {
// // //   const hasFields = item.fields && typeof item.fields === 'object' && !Array.isArray(item.fields) && Object.keys(item.fields).length > 0;
// // //   const [activeTab, setActiveTab] = useState(0);
// // //   const [hovered, setHovered] = useState(false);
// // //   const fieldEntries = hasFields ? Object.entries(item.fields) : [];
// // //   const itemId = toId(item.name);

// // //   return (
// // //     <div
// // //       id={itemId}
// // //       style={{
// // //         border: isHighlighted ? `2px solid ${ACCENT}` : hovered ? '1.5px solid #93aee0' : '1.5px solid #d0d9ed',
// // //         borderRadius: '12px', marginBottom: '12px', overflow: 'hidden',
// // //         background: isHighlighted ? '#f8faff' : '#fff',
// // //         transition: 'border-color 0.2s, background 0.2s', scrollMarginTop: '130px',
// // //       }}
// // //       onMouseEnter={() => setHovered(true)}
// // //       onMouseLeave={() => setHovered(false)}
// // //     >
// // //       <div style={S.cardBody}>
// // //         <h3 style={S.cardName}>{processContent(item.name)}</h3>
// // //         <div style={S.cardFormula}>{processContent(item.formula)}</div>
// // //         {item.link && <CardLink link={item.link} />}
// // //         {hasFields && (
// // //           <div style={S.cardToggle} onClick={() => onToggle(itemId)}>
// // //             {isOpen ? 'Hide details' : 'See details'}
// // //             <svg width="14" height="14" viewBox="0 0 14 14" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }}>
// // //               <polyline points="3,5 7,9 11,5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// // //             </svg>
// // //           </div>
// // //         )}
// // //         {!isOpen && <BackToTop />}
// // //       </div>

// // //       {hasFields && (
// // //         <div style={S.cardDetail(isOpen)}>
// // //           <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
// // //             {fieldEntries.map(([key], i) => (
// // //               <TabButton key={key} label={key.replace(/_/g, ' ')} active={i === activeTab} onClick={() => setActiveTab(i)} />
// // //             ))}
// // //           </div>
// // //           <div style={S.tabBody}>
// // //             <FieldContent value={fieldEntries[activeTab]?.[1] || ''} />
// // //           </div>
// // //           <BackToTop />
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // // ─── SidebarLink ───────────────────────────────────────────────

// // // function SidebarLink({ item, active, onNavigate }) {
// // //   const [hovered, setHovered] = useState(false);

// // //   return (
// // //     <a
// // //       href={`#${toId(item.name)}`}
// // //       style={{
// // //         display: 'block', padding: '3px 8px', fontSize: '15px',
// // //         color: active ? ACCENT : hovered ? ACCENT : '#64748b',
// // //         fontWeight: active ? '600' : '400', textDecoration: 'none',
// // //         borderLeft: `2px solid ${active || hovered ? ACCENT : 'transparent'}`,
// // //         borderRadius: '0 4px 4px 0', background: active || hovered ? ACCENT_LIGHT : 'transparent',
// // //         transition: 'all 0.12s', cursor: 'pointer', whiteSpace: 'normal', wordBreak: 'break-word', lineHeight: '1.3',
// // //       }}
// // //       onMouseEnter={() => setHovered(true)}
// // //       onMouseLeave={() => setHovered(false)}
// // //       onClick={(e) => { e.preventDefault(); onNavigate(toId(item.name)); }}
// // //     >
// // //       {processContent(item.name)}
// // //     </a>
// // //   );
// // // }

// // // // ─── Icons ─────────────────────────────────────────────────────

// // // const GridIcon = (
// // //   <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
// // //     <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
// // //     <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
// // //     <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
// // //     <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
// // //   </svg>
// // // );

// // // const ListIcon = (
// // //   <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
// // //     <line x1="1" y1="3" x2="15" y2="3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
// // //     <line x1="1" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
// // //     <line x1="1" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
// // //   </svg>
// // // );

// // // // ═══════════════════════════════════════════════════════════════
// // // // MAIN COMPONENT
// // // // ═══════════════════════════════════════════════════════════════

// // // export default function FormulasTOC({
// // //   data = [],
// // //   groupByField = 'category',
// // //   type = 'Formula',
// // // }) {
// // //   const [view, setView] = useState('cards');
// // //   const [activeLetter, setActiveLetter] = useState(null);
// // //   const [activeCats, setActiveCats] = useState(new Set());
// // //   const [openTocItems, setOpenTocItems] = useState(new Set());
// // //   const [openCards, setOpenCards] = useState(new Set());
// // //   const [highlightedId, setHighlightedId] = useState(null);
// // //   const [searchTerm, setSearchTerm] = useState('');
// // //   const [searchFocused, setSearchFocused] = useState(false);
// // //   const [sidebarVisible, setSidebarVisible] = useState(false);
// // //   const [sidebarLeft, setSidebarLeft] = useState(0);
// // //   const [activeItemId, setActiveItemId] = useState(null);
// // //   const [activeSidebarCat, setActiveSidebarCat] = useState(null);

// // //   const navPanelRef = useRef(null);
// // //   const cardsRef = useRef(null);
// // //   const highlightTimer = useRef(null);
// // //   const observerRef = useRef(null);

// // //   const categories = useMemo(() => [...new Set(data.map((d) => d[groupByField]))], [data, groupByField]);

// // //   const catCounts = useMemo(() => {
// // //     const counts = {};
// // //     data.forEach((d) => { const key = d[groupByField] || 'Other'; counts[key] = (counts[key] || 0) + 1; });
// // //     return counts;
// // //   }, [data, groupByField]);

// // //   const usedLetters = useMemo(() => new Set(data.map((d) => d.name[0].toUpperCase())), [data]);

// // //   const grouped = useMemo(() => {
// // //     const lower = searchTerm.toLowerCase();
// // //     const filtered = lower
// // //       ? data.filter((d) =>
// // //           d.name?.toLowerCase().includes(lower) ||
// // //           d.formula?.toLowerCase().includes(lower) ||
// // //           (d.fields && typeof d.fields === 'object' &&
// // //             Object.values(d.fields).some((v) => {
// // //               if (typeof v === 'string') return v.toLowerCase().includes(lower);
// // //               if (typeof v === 'object' && v?.text) return v.text.toLowerCase().includes(lower);
// // //               return false;
// // //             })))
// // //       : data;

// // //     const groups = {};
// // //     filtered.forEach((d) => { const key = d[groupByField] || 'Other'; if (!groups[key]) groups[key] = []; groups[key].push(d); });
// // //     return groups;
// // //   }, [data, searchTerm, groupByField]);

// // //   const totalCount = useMemo(() => Object.values(grouped).reduce((sum, arr) => sum + arr.length, 0), [grouped]);

// // //   const navFiltered = useMemo(() => {
// // //     let result = data;
// // //     if (activeLetter) result = result.filter((d) => d.name[0].toUpperCase() === activeLetter);
// // //     if (activeCats.size > 0) result = result.filter((d) => activeCats.has(d[groupByField]));
// // //     return [...result].sort((a, b) => a.name.localeCompare(b.name));
// // //   }, [data, activeLetter, activeCats, groupByField]);

// // //   const toggleLetter = useCallback((letter) => { setActiveLetter((prev) => (prev === letter ? null : letter)); }, []);
// // //   const toggleCat = useCallback((cat) => { setActiveCats((prev) => { const next = new Set(prev); if (next.has(cat)) next.delete(cat); else next.add(cat); return next; }); }, []);
// // //   const clearFilters = useCallback(() => { setActiveCats(new Set()); setActiveLetter(null); }, []);
// // //   const toggleTocItem = useCallback((id) => { setOpenTocItems((prev) => { const next = new Set(); if (!prev.has(id)) next.add(id); return next; }); }, []);
// // //   const toggleCard = useCallback((id) => { setOpenCards((prev) => { const next = new Set(prev); if (next.has(id)) next.delete(id); else next.add(id); return next; }); }, []);

// // //   const scrollToItem = useCallback((id) => {
// // //     const el = document.getElementById(id);
// // //     if (!el) return;
// // //     const y = el.getBoundingClientRect().top + window.scrollY - 130;
// // //     window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
// // //   }, []);

// // //   const navigateToItem = useCallback((id) => {
// // //     setSearchTerm('');
// // //     const hasFields = data.some((d) => {
// // //       const did = toId(d.name);
// // //       return did === id && d.fields && typeof d.fields === 'object' && Object.keys(d.fields).length > 0;
// // //     });
// // //     if (hasFields) setOpenCards((prev) => new Set(prev).add(id));
// // //     setHighlightedId(id);
// // //     clearTimeout(highlightTimer.current);
// // //     highlightTimer.current = setTimeout(() => setHighlightedId(null), 3000);
// // //     requestAnimationFrame(() => { setTimeout(() => scrollToItem(id), 100); });
// // //   }, [data, scrollToItem]);

// // //   const navigateToCategory = useCallback((cat) => {
// // //     const categoryId = `category_${cat.toLowerCase().replace(/\s+/g, '_')}`;
// // //     const el = document.getElementById(categoryId);
// // //     if (!el) return;
// // //     const y = el.getBoundingClientRect().top + window.scrollY - 140;
// // //     window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
// // //   }, []);

// // //   useEffect(() => { const hash = window.location.hash.slice(1); if (hash) setTimeout(() => navigateToItem(hash), 150); }, [navigateToItem]);

// // //   useEffect(() => {
// // //     const onHashChange = () => { const hash = window.location.hash.slice(1); if (hash) navigateToItem(hash); };
// // //     window.addEventListener('hashchange', onHashChange);
// // //     return () => window.removeEventListener('hashchange', onHashChange);
// // //   }, [navigateToItem]);

// // //   useEffect(() => {
// // //     const onClick = (e) => {
// // //       const a = e.target.closest('a[href^="#"]');
// // //       if (!a) return;
// // //       const hash = a.getAttribute('href').slice(1);
// // //       if (hash) { e.preventDefault(); window.history.pushState(null, '', `#${hash}`); navigateToItem(hash); }
// // //     };
// // //     document.addEventListener('click', onClick);
// // //     return () => document.removeEventListener('click', onClick);
// // //   }, [navigateToItem]);

// // //   useEffect(() => {
// // //     const check = () => {
// // //       if (!navPanelRef.current) return;
// // //       const rect = navPanelRef.current.getBoundingClientRect();
// // //       const footer = document.querySelector('footer');
// // //       const pastFooter = footer ? footer.getBoundingClientRect().top < window.innerHeight : false;
// // //       const sidebarW = 200; const gap = 24; let left = 20;
// // //       if (cardsRef.current) { const cardsRect = cardsRef.current.getBoundingClientRect(); left = cardsRect.left - sidebarW - gap; }
// // //       const show = rect.bottom < 0 && window.innerWidth >= 1100 && !pastFooter && left > 10;
// // //       setSidebarVisible(show);
// // //       setSidebarLeft(Math.max(10, left));
// // //     };
// // //     window.addEventListener('scroll', check, { passive: true });
// // //     window.addEventListener('resize', check, { passive: true });
// // //     check();
// // //     return () => { window.removeEventListener('scroll', check); window.removeEventListener('resize', check); };
// // //   }, []);

// // //   useEffect(() => {
// // //     if (observerRef.current) observerRef.current.disconnect();
// // //     const observer = new IntersectionObserver((entries) => {
// // //       entries.forEach((entry) => {
// // //         if (entry.isIntersecting) {
// // //           const id = entry.target.id;
// // //           setActiveItemId(id);
// // //           const item = data.find((d) => toId(d.name) === id);
// // //           if (item) setActiveSidebarCat(item[groupByField]);
// // //         }
// // //       });
// // //     }, { rootMargin: '-80px 0px -60% 0px', threshold: 0 });
// // //     data.forEach((item) => { const el = document.getElementById(toId(item.name)); if (el) observer.observe(el); });
// // //     observerRef.current = observer;
// // //     return () => observer.disconnect();
// // //   }, [data, grouped, groupByField]);

// // //   const tocGridStyle = useMemo(() => {
// // //     const colCount = categories.length <= 2 ? 2 : categories.length <= 4 ? categories.length : 4;
// // //     return { ...S.tocGrid, gridTemplateColumns: `repeat(${colCount}, 1fr)` };
// // //   }, [categories]);

// // //   return (
// // //     <>
// // //       <style>{HIDE_SCROLLBAR_CSS}</style>

// // //       <div style={S.outerWrap}>
// // //         <div ref={navPanelRef} style={{ marginBottom: 0 }}>
// // //           <div style={S.toggleWrap}>
// // //             <div style={S.toggleTrack}>
// // //               <ToggleButton label="Categories" icon={GridIcon} active={view === 'cards'} onClick={() => setView('cards')} />
// // //               <ToggleButton label="Index" icon={ListIcon} active={view === 'index'} onClick={() => setView('index')} />
// // //             </div>
// // //           </div>

// // //           {view === 'cards' && (
// // //             <div style={tocGridStyle}>
// // //               {categories.map((cat) => {
// // //                 const items = data.filter((d) => d[groupByField] === cat);
// // //                 return (
// // //                   <div key={cat} style={S.tocCard}>
// // //                     <div style={S.tocCardHeader}>{cat}</div>
// // //                     <div style={S.tocCardBody}>
// // //                       {items.map((f) => <TocItem key={f.name} item={f} isOpen={openTocItems.has(toId(f.name))} onToggle={toggleTocItem} onNavigate={navigateToItem} />)}
// // //                     </div>
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //           )}

// // //           {view === 'index' && (
// // //             <div style={S.navPanel}>
// // //               <div className="ftoc-no-scrollbar" style={S.alphaBar}>
// // //                 {ALL_LETTERS.map((l) => <AlphaButton key={l} letter={l} active={activeLetter === l} disabled={!usedLetters.has(l)} onClick={() => toggleLetter(l)} />)}
// // //               </div>
// // //               <div className="ftoc-no-scrollbar" style={S.termGrid}>
// // //                 {navFiltered.map((item) => <TermItem key={item.name} item={item} onNavigate={navigateToItem} />)}
// // //               </div>
// // //               <div style={S.catFilterRow}>
// // //                 {categories.map((cat) => <CategoryChip key={cat} label={cat} active={activeCats.has(cat)} count={catCounts[cat]} onToggle={() => toggleCat(cat)} onNavigate={() => navigateToCategory(cat)} />)}
// // //                 {(activeCats.size > 0 || activeLetter) && <ClearButton onClick={clearFilters} />}
// // //               </div>
// // //               <div style={S.navStatus}>{navFiltered.length} of {data.length} {type.toLowerCase()}s</div>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>

// // //       <div ref={cardsRef} style={S.innerWrap}>
// // //         <div style={S.searchBar}>
// // //           <div style={S.searchWrapper}>
// // //             <input
// // //               type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
// // //               onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)}
// // //               placeholder={`Search in ${type}s...`}
// // //               style={{
// // //                 width: '100%', padding: '13px 36px 13px 18px',
// // //                 border: searchFocused ? `2px solid ${ACCENT}` : '2px solid transparent',
// // //                 borderRadius: '28px', fontSize: '16px', fontFamily: 'inherit', outline: 'none',
// // //                 background: '#fff', color: '#1e293b', boxSizing: 'border-box', transition: 'border-color 0.2s',
// // //               }}
// // //             />
// // //             {searchTerm && <button style={S.searchClear} onClick={() => setSearchTerm('')} aria-label="Clear search">&#10005;</button>}
// // //           </div>
// // //           <span style={S.searchCount}>{totalCount} {totalCount === 1 ? type.toLowerCase() : `${type.toLowerCase()}s`}</span>
// // //         </div>

// // //         {Object.keys(grouped).length === 0 ? (
// // //           <div style={S.empty}>No {type.toLowerCase()}s found for &quot;{searchTerm}&quot;</div>
// // //         ) : (
// // //           Object.entries(grouped).map(([group, items]) => {
// // //             const categoryId = `category_${group.toLowerCase().replace(/\s+/g, '_')}`;
// // //             return (
// // //               <div key={group} id={categoryId} style={{ marginBottom: '40px' }}>
// // //                 <div style={S.groupHeader}>
// // //                   <h2 style={S.groupTitle}>{group}</h2>
// // //                   <span style={S.groupCount}>({items.length} {items.length === 1 ? type.toLowerCase() : `${type.toLowerCase()}s`})</span>
// // //                 </div>
// // //                 {items.map((item) => {
// // //                   const id = toId(item.name);
// // //                   return <FormulaCard key={id} item={item} isHighlighted={highlightedId === id} isOpen={openCards.has(id)} onToggle={toggleCard} />;
// // //                 })}
// // //               </div>
// // //             );
// // //           })
// // //         )}
// // //       </div>

// // //       <div className="ftoc-no-scrollbar" style={S.sidebar(sidebarVisible, sidebarLeft)}>
// // //         {categories.map((cat) => {
// // //           const items = data.filter((d) => d[groupByField] === cat);
// // //           return (
// // //             <div key={cat} style={S.sidebarGroup}>
// // //               <div style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#1e40af', marginBottom: '4px', paddingLeft: '8px' }}>
// // //                 {processContent(cat)}
// // //               </div>
// // //               {items.map((item) => <SidebarLink key={item.name} item={item} active={activeItemId === toId(item.name)} onNavigate={navigateToItem} />)}
// // //             </div>
// // //           );
// // //         })}
// // //       </div>
// // //     </>
// // //   );
// // // }


// // import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
// // import { processContent } from '../../utils/contentProcessor';
// // import FunctionMachineDiagram from './machine-diagram/FunctionMachineDiagram';
// // import MathDerivation from './math-derivation/MathDerivation';

// // // ─── Component Registry ────────────────────────────────────────

// // const COMPONENT_REGISTRY = {
// //   FunctionMachineDiagram,
// //   MathDerivation: ({ variant = 'rail', compact = true, passageStyle = 'bar', ...rest }) => (
// //     <MathDerivation variant={variant} compact={compact} passageStyle={passageStyle} {...rest} />
// //   ),
// // };

// // // ─── Constants ─────────────────────────────────────────────────

// // const ALL_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
// // const ACCENT = '#4a6cf7';
// // const ACCENT_LIGHT = '#eef1fd';
// // const ACCENT_BORDER = '#cdd5f8';
// // const ACCENT_HOVER = '#dbe1fc';

// // // Formula panel palette (slate + dusty denim)
// // const FORMULA_BG = '#E9EFF5';
// // const FORMULA_BORDER = '#BCCBDA';
// // const FORMULA_ACCENT_BAR = '#5B7CA3';
// // const FORMULA_INK = '#243B57';

// // const HIDE_SCROLLBAR_CSS = `
// //   .ftoc-no-scrollbar::-webkit-scrollbar { display: none; }
// // `;

// // const toId = (name) => name.toLowerCase().replace(/['\u2019()]/g, '').replace(/\s+/g, '_');

// // const noScroll = {
// //   scrollbarWidth: 'none',
// //   msOverflowStyle: 'none',
// // };

// // function normalizeArray(val) {
// //   if (!val) return [];
// //   if (Array.isArray(val)) return val;
// //   return [val];
// // }

// // // ─── Styles ────────────────────────────────────────────────────

// // const S = {
// //   outerWrap: {
// //     maxWidth: '1150px',
// //     margin: '0 auto',
// //     padding: '0 20px',
// //   },
// //   innerWrap: {
// //     maxWidth: '820px',
// //     margin: '0 auto',
// //     padding: '0 16px',
// //   },
// //   toggleWrap: {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     marginBottom: '24px',
// //   },
// //   toggleTrack: {
// //     display: 'inline-flex',
// //     background: '#f1f5f9',
// //     borderRadius: '12px',
// //     padding: '4px',
// //     border: '1px solid #e2e8f0',
// //   },
// //   tocGrid: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(4, 1fr)',
// //     gap: '14px',
// //     marginBottom: '28px',
// //   },
// //   tocCard: {
// //     borderRadius: '12px',
// //     overflow: 'hidden',
// //     border: '1px solid #d0d9ed',
// //     background: '#fff',
// //   },
// //   tocCardHeader: {
// //     background: 'linear-gradient(135deg, #4a6cf7 0%, #3b5de7 100%)',
// //     color: '#fff',
// //     padding: '17px 20px',
// //     fontSize: '17px',
// //     fontWeight: '600',
// //   },
// //   tocCardBody: {
// //     padding: '5px 0',
// //   },
// //   tocPeek: {
// //     padding: '8px 18px 12px',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '8px',
// //   },
// //   tocPeekFormula: {
// //     fontSize: '16px',
// //     background: '#f1f5f9',
// //     padding: '8px 12px',
// //     borderRadius: '6px',
// //     color: '#475569',
// //     lineHeight: '1.6',
// //   },
// //   navPanel: {
// //     background: '#fff',
// //     border: '1.5px solid #d0d9ed',
// //     borderRadius: '16px',
// //     overflow: 'hidden',
// //     marginBottom: '28px',
// //   },
// //   alphaBar: {
// //     display: 'flex',
// //     flexWrap: 'nowrap',
// //     gap: '2px',
// //     padding: '12px 18px',
// //     background: '#f8fafc',
// //     borderBottom: '1.5px solid #e2e8f0',
// //     justifyContent: 'center',
// //     overflowX: 'auto',
// //     ...noScroll,
// //   },
// //   termGrid: {
// //     padding: '20px 24px',
// //     display: 'grid',
// //     gridTemplateColumns: '1fr 1fr',
// //     gap: '3px 24px',
// //   },
// //   catFilterRow: {
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     gap: '8px',
// //     padding: '17px 24px',
// //     borderTop: '1px solid #e2e8f0',
// //   },
// //   navStatus: {
// //     padding: '10px 24px 17px',
// //     fontSize: '16px',
// //     color: '#94a3b8',
// //     borderTop: '1px solid #e2e8f0',
// //     textAlign: 'right',
// //   },
// //   searchBar: {
// //     position: 'sticky',
// //     top: '63px',
// //     zIndex: 10,
// //     background: 'rgba(30, 58, 138, 0.75)',
// //     backdropFilter: 'blur(8px)',
// //     borderRadius: '4px',
// //     padding: '14px 20px',
// //     marginBottom: '32px',
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '14px',
// //   },
// //   searchWrapper: {
// //     position: 'relative',
// //     flex: 1,
// //   },
// //   searchClear: {
// //     position: 'absolute',
// //     top: '50%',
// //     right: '14px',
// //     transform: 'translateY(-50%)',
// //     border: 'none',
// //     background: 'none',
// //     color: '#94a3b8',
// //     fontSize: '16px',
// //     cursor: 'pointer',
// //     padding: '0',
// //     lineHeight: 1,
// //   },
// //   searchCount: {
// //     fontSize: '14px',
// //     color: '#c7d2e8',
// //     whiteSpace: 'nowrap',
// //     flexShrink: 0,
// //   },
// //   groupHeader: {
// //     display: 'flex',
// //     alignItems: 'baseline',
// //     gap: '10px',
// //     margin: '0 0 16px',
// //     paddingBottom: '8px',
// //     borderBottom: '2px solid #c7d2e8',
// //   },
// //   groupTitle: {
// //     fontFamily: "'Source Serif 4', Georgia, serif",
// //     fontSize: '22px',
// //     fontWeight: '600',
// //     color: '#1e40af',
// //     margin: 0,
// //     letterSpacing: '0.01em',
// //   },
// //   groupCount: {
// //     fontSize: '14px',
// //     color: '#94a3b8',
// //     fontWeight: '400',
// //   },
// //   cardBody: {
// //     padding: '22px 26px',
// //     background: '#fff',
// //   },
// //   cardName: {
// //     fontFamily: "'Source Serif 4', Georgia, serif",
// //     fontSize: '20px',
// //     fontWeight: '600',
// //     color: '#1e293b',
// //     margin: '0 0 12px',
// //     lineHeight: '1.3',
// //   },
// //   // ── Formula panel (slate + dusty denim) ────────────────────
// //   formulaPanel: {
// //     display: 'flex',
// //     background: FORMULA_BG,
// //     border: `0.5px solid ${FORMULA_BORDER}`,
// //     borderRadius: '8px',
// //     overflow: 'hidden',
// //     boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5)',
// //     margin: '4px 0 2px',
// //   },
// //   formulaAccentBar: {
// //     width: '3px',
// //     background: FORMULA_ACCENT_BAR,
// //     flexShrink: 0,
// //   },
// //   formulaInner: {
// //     flex: 1,
// //     padding: '22px 18px',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     minHeight: '60px',
// //   },
// //   cardFormula: {
// //     fontSize: '17px',
// //     color: FORMULA_INK,
// //     lineHeight: '1.7',
// //     margin: 0,
// //     textAlign: 'center',
// //     width: '100%',
// //   },
// //   // ───────────────────────────────────────────────────────────
// //   cardToggle: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     gap: '8px',
// //     padding: '14px 0 4px',
// //     cursor: 'pointer',
// //     color: ACCENT,
// //     fontSize: '20px',
// //     fontWeight: '500',
// //     userSelect: 'none',
// //   },
// //   cardDetail: (open) => ({
// //     borderTop: '1.5px solid #e2e8f0',
// //     background: '#f0f4fc',
// //     overflow: 'hidden',
// //     maxHeight: open ? '5000px' : '0',
// //     padding: open ? '20px 26px' : '0 26px',
// //     transition: 'max-height 0.35s ease, padding 0.3s ease',
// //   }),
// //   tabBody: {
// //     padding: '20px 22px',
// //     border: '1.5px solid #d0d9ed',
// //     borderRadius: '0 8px 8px 8px',
// //     fontSize: '17px',
// //     color: '#475569',
// //     lineHeight: '1.7',
// //     background: '#fff',
// //     minHeight: '60px',
// //   },
// //   sidebar: (visible, leftPos) => ({
// //     position: 'fixed',
// //     top: '20px',
// //     left: `${leftPos}px`,
// //     width: '200px',
// //     background: '#fff',
// //     border: '1.5px solid #d0d9ed',
// //     borderRadius: '12px',
// //     padding: '16px 14px',
// //     maxHeight: 'calc(100vh - 40px)',
// //     overflowY: 'auto',
// //     opacity: visible ? 1 : 0,
// //     transform: visible ? 'translateY(0)' : 'translateY(12px)',
// //     transition: 'opacity 0.3s, transform 0.3s',
// //     pointerEvents: visible ? 'auto' : 'none',
// //     zIndex: 50,
// //     ...noScroll,
// //   }),
// //   sidebarGroup: {
// //     marginBottom: '14px',
// //   },
// //   empty: {
// //     textAlign: 'center',
// //     padding: '50px 20px',
// //     color: '#94a3b8',
// //     fontSize: '16px',
// //   },
// // };

// // // ─── Illustration ──────────────────────────────────────────────

// // function Illustration({ item }) {
// //   const { src, alt = '', caption, width } = item;
// //   const isSvg = typeof src === 'string' && src.trimStart().startsWith('<svg');

// //   return (
// //     <div style={{ margin: '16px 0', padding: '16px', background: '#f8fafc', borderRadius: '8px', border: '0.5px solid #e2e8f0' }}>
// //       {isSvg ? (
// //         <div style={{ maxWidth: width ? `${width}px` : '100%', margin: '0 auto' }} dangerouslySetInnerHTML={{ __html: src }} />
// //       ) : (
// //         <img src={src} alt={alt} style={{ display: 'block', margin: '0 auto', maxWidth: width ? `${width}px` : '100%', width: '100%', height: 'auto', borderRadius: '4px' }} loading="lazy" />
// //       )}
// //       {caption && <p style={{ margin: '8px 0 0', fontSize: '13px', color: '#94a3b8', textAlign: 'center', lineHeight: '1.5' }}>{processContent(caption)}</p>}
// //     </div>
// //   );
// // }

// // // ─── LinkPill ──────────────────────────────────────────────────

// // function LinkPill({ link }) {
// //   const [hovered, setHovered] = useState(false);
// //   const label = link.label || link.text || link.url;
// //   const url = link.url || link.href;
// //   if (!url) return null;

// //   return (
// //     <a
// //       href={url}
// //       style={{
// //         display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '14px',
// //         color: '#2563eb', textDecoration: 'none', padding: '6px 14px',
// //         border: '0.5px solid #e2e8f0', borderRadius: '20px',
// //         background: hovered ? '#eff4ff' : '#f8fafc', transition: 'background 0.15s', cursor: 'pointer',
// //       }}
// //       onMouseEnter={() => setHovered(true)}
// //       onMouseLeave={() => setHovered(false)}
// //     >
// //       <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
// //         <path d="M3 11L11 3M11 3H6M11 3v5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
// //       </svg>
// //       {processContent(label)}
// //     </a>
// //   );
// // }

// // // ─── LinksRow ──────────────────────────────────────────────────

// // function LinksRow({ links }) {
// //   if (!links || links.length === 0) return null;
// //   const filtered = links.filter((l) => l && (l.url || l.href));
// //   if (filtered.length === 0) return null;

// //   return (
// //     <div style={{ margin: '16px 0 0', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
// //       {filtered.map((link, i) => <LinkPill key={i} link={link} />)}
// //     </div>
// //   );
// // }

// // // ─── FieldContent ──────────────────────────────────────────────

// // function FieldContent({ value }) {
// //   if (typeof value === 'string') return <div>{processContent(value)}</div>;
// //   if (Array.isArray(value)) return <div>{value.map((block, i) => <FieldContentBlock key={i} block={block} />)}</div>;
// //   if (typeof value === 'object' && value !== null) return <FieldContentBlock block={value} />;
// //   return null;
// // }

// // function FieldContentBlock({ block }) {
// //   if (typeof block === 'string') return <div>{processContent(block)}</div>;
// //   if (typeof block !== 'object' || block === null) return null;

// //   if (block.component) {
// //     const Component = COMPONENT_REGISTRY[block.component];
// //     if (Component) {
// //       const { component, ...props } = block;
// //       return <Component {...props} />;
// //     }
// //   }

// //   const { text, links, illustrations } = block;
// //   const illustrationList = normalizeArray(illustrations);
// //   const linkList = normalizeArray(links);

// //   return (
// //     <div>
// //       {text && <div>{processContent(text)}</div>}
// //       {illustrationList.map((ill, i) => <Illustration key={i} item={ill} />)}
// //       <LinksRow links={linkList} />
// //     </div>
// //   );
// // }

// // // ─── AlphaButton ───────────────────────────────────────────────

// // function AlphaButton({ letter, active, disabled, onClick }) {
// //   const [hovered, setHovered] = useState(false);

// //   return (
// //     <button
// //       style={{
// //         width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
// //         fontSize: '15px', fontWeight: '600', fontFamily: 'inherit', borderRadius: '7px', border: 'none',
// //         cursor: disabled ? 'default' : 'pointer', pointerEvents: disabled ? 'none' : 'auto',
// //         background: active ? ACCENT : hovered ? ACCENT_HOVER : 'transparent',
// //         color: active ? '#fff' : disabled ? '#cbd5e1' : ACCENT,
// //         transition: 'all 0.12s', flexShrink: 0,
// //       }}
// //       onClick={onClick}
// //       onMouseEnter={() => setHovered(true)}
// //       onMouseLeave={() => setHovered(false)}
// //     >
// //       {letter}
// //     </button>
// //   );
// // }

// // // ─── ToggleButton ──────────────────────────────────────────────

// // function ToggleButton({ label, active, icon, onClick }) {
// //   const [hovered, setHovered] = useState(false);

// //   return (
// //     <button
// //       style={{
// //         display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 22px',
// //         border: 'none', borderRadius: '9px', cursor: 'pointer', fontFamily: 'inherit',
// //         fontSize: '17px', fontWeight: '500',
// //         background: active ? ACCENT : hovered ? '#e2e8f0' : 'transparent',
// //         color: active ? '#fff' : '#475569', transition: 'all 0.15s',
// //       }}
// //       onClick={onClick}
// //       onMouseEnter={() => setHovered(true)}
// //       onMouseLeave={() => setHovered(false)}
// //     >
// //       {icon}
// //       {label}
// //     </button>
// //   );
// // }

// // // ─── CategoryChip ──────────────────────────────────────────────

// // function CategoryChip({ label, active, count, onToggle, onNavigate }) {
// //   const [hovered, setHovered] = useState(false);
// //   const [navHovered, setNavHovered] = useState(false);

// //   const checkSvg = (
// //     <svg width="14" height="14" viewBox="0 0 12 12">
// //       <polyline points="2,6 5,9 10,3" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
// //     </svg>
// //   );

// //   const arrowSvg = (
// //     <svg width="14" height="14" viewBox="0 0 12 12">
// //       <path d="M2 6h8M7 3l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
// //     </svg>
// //   );

// //   return (
// //     <div
// //       style={{
// //         display: 'flex', alignItems: 'center', justifyContent: 'space-between',
// //         padding: '10px 17px',
// //         border: active ? `1.5px solid ${ACCENT}` : hovered ? '1.5px solid #93aee0' : '1.5px solid #d0d9ed',
// //         borderRadius: '12px', background: active ? ACCENT_LIGHT : '#fff',
// //         cursor: 'pointer', transition: 'border-color 0.15s, background 0.15s', gap: '10px',
// //       }}
// //       onClick={onToggle}
// //       onMouseEnter={() => setHovered(true)}
// //       onMouseLeave={() => setHovered(false)}
// //     >
// //       <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
// //         <div style={{
// //           width: 21, height: 21, borderRadius: '4px',
// //           border: active ? `1.5px solid ${ACCENT}` : '1.5px solid #94a3b8',
// //           display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
// //           background: active ? ACCENT : '#fff', transition: 'all 0.15s',
// //         }}>
// //           {active && checkSvg}
// //         </div>
// //         <span style={{ fontSize: '17px', fontWeight: '500', color: '#1e293b' }}>{processContent(label)}</span>
// //         <span style={{ fontSize: '15px', color: '#94a3b8' }}>({count})</span>
// //       </div>
// //       <button
// //         style={{
// //           display: 'flex', alignItems: 'center', gap: '4px', padding: '5px 14px',
// //           borderRadius: '18px', border: `1px solid ${navHovered ? ACCENT : '#d0d9ed'}`,
// //           background: navHovered ? ACCENT_HOVER : '#fff', fontSize: '15px', fontWeight: '500',
// //           fontFamily: 'inherit', color: ACCENT, cursor: 'pointer', flexShrink: 0,
// //           transition: 'background 0.12s, border-color 0.12s',
// //         }}
// //         onMouseEnter={() => setNavHovered(true)}
// //         onMouseLeave={() => setNavHovered(false)}
// //         onClick={(e) => { e.stopPropagation(); onNavigate(); }}
// //       >
// //         Go to {arrowSvg}
// //       </button>
// //     </div>
// //   );
// // }

// // // ─── ClearButton ───────────────────────────────────────────────

// // function ClearButton({ onClick }) {
// //   const [hovered, setHovered] = useState(false);

// //   return (
// //     <button
// //       style={{
// //         display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 20px',
// //         border: '1px solid red', background: hovered ? '#fef2f2' : 'none',
// //         borderRadius: '12px', fontSize: '17px', fontWeight: '500', fontFamily: 'inherit',
// //         color: '#dc2626', cursor: 'pointer', transition: 'background 0.15s',
// //       }}
// //       onClick={onClick}
// //       onMouseEnter={() => setHovered(true)}
// //       onMouseLeave={() => setHovered(false)}
// //     >
// //       &#10005; Clear
// //     </button>
// //   );
// // }

// // // ─── TermItem ──────────────────────────────────────────────────

// // function TermItem({ item, onNavigate }) {
// //   const [hovered, setHovered] = useState(false);

// //   return (
// //     <a
// //       href={`#${toId(item.name)}`}
// //       style={{
// //         padding: '10px 14px', fontSize: '17px', color: hovered ? ACCENT : '#334155',
// //         borderRadius: '7px', cursor: 'pointer', transition: 'all 0.12s', textDecoration: 'none',
// //         display: 'flex', alignItems: 'baseline', gap: '10px',
// //         background: hovered ? ACCENT_LIGHT : 'transparent',
// //       }}
// //       onMouseEnter={() => setHovered(true)}
// //       onMouseLeave={() => setHovered(false)}
// //       onClick={(e) => { e.preventDefault(); onNavigate(toId(item.name)); }}
// //     >
// //       <span style={{ fontSize: '16px', fontWeight: '600', color: ACCENT, width: '16px', flexShrink: 0 }}>{item.name[0]}</span>
// //       {processContent(item.name)}
// //       <span style={{ fontSize: '15px', color: '#94a3b8', marginLeft: 'auto', flexShrink: 0, whiteSpace: 'nowrap' }}>{item.category}</span>
// //     </a>
// //   );
// // }

// // // ─── TocItem ───────────────────────────────────────────────────

// // function TocItem({ item, isOpen, onToggle, onNavigate }) {
// //   const [hovered, setHovered] = useState(false);
// //   const id = toId(item.name);

// //   return (
// //     <div>
// //       <button
// //         style={{
// //           display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
// //           padding: '10px 17px', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
// //           textAlign: 'left', fontSize: '16px', color: '#334155',
// //           background: isOpen ? '#f0f4ff' : hovered ? '#f8fafc' : 'transparent', transition: 'background 0.1s',
// //         }}
// //         onClick={() => onToggle(id)}
// //         onMouseEnter={() => setHovered(true)}
// //         onMouseLeave={() => setHovered(false)}
// //       >
// //         <span>{item.name}</span>
// //         <svg width="16" height="16" viewBox="0 0 14 14" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', color: '#94a3b8', flexShrink: 0 }}>
// //           <polyline points="4,5 7,8 10,5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
// //         </svg>
// //       </button>
// //       {isOpen && (
// //         <div style={S.tocPeek}>
// //           <div style={S.tocPeekFormula}>{processContent(item.formula)}</div>
// //           <a style={{ fontSize: '14px', color: ACCENT, cursor: 'pointer', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); onNavigate(id); }}>
// //             Learn More &#8595;
// //           </a>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // // ─── CardLink ──────────────────────────────────────────────────
// // // Source link under the formula. Bumped ~30% larger.

// // function CardLink({ link }) {
// //   const [hovered, setHovered] = useState(false);
// //   if (!link || (!link.url && !link.href)) return null;
// //   const label = link.label || link.text || link.url || link.href;
// //   const url = link.url || link.href;

// //   return (
// //     <div>
// //       <a
// //         href={url}
// //         style={{
// //           display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '18px',
// //           color: hovered ? '#1d4ed8' : ACCENT, textDecoration: 'none', padding: '12px 0 0',
// //           cursor: 'pointer', fontWeight: '500', transition: 'color 0.15s',
// //         }}
// //         onMouseEnter={() => setHovered(true)}
// //         onMouseLeave={() => setHovered(false)}
// //       >
// //         <svg width="16" height="16" viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
// //           <path d="M3 11L11 3M11 3H6M11 3v5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
// //         </svg>
// //         {processContent(label)}
// //       </a>
// //     </div>
// //   );
// // }

// // // ─── BackToTop ─────────────────────────────────────────────────
// // // Now matches the See/Hide details styling: same accent color, weight, size, layout.

// // function BackToTop() {
// //   const [hovered, setHovered] = useState(false);

// //   return (
// //     <div
// //       style={{
// //         display: 'flex',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         gap: '8px',
// //         padding: '14px 0 4px',
// //         cursor: 'pointer',
// //         color: hovered ? '#1d4ed8' : ACCENT,
// //         fontSize: '20px',
// //         fontWeight: '500',
// //         userSelect: 'none',
// //         transition: 'color 0.15s',
// //       }}
// //       onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
// //       onMouseEnter={() => setHovered(true)}
// //       onMouseLeave={() => setHovered(false)}
// //     >
// //       Back to top
// //       <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
// //         <polyline points="3,9 7,5 11,9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// //       </svg>
// //     </div>
// //   );
// // }

// // // ─── TabButton ─────────────────────────────────────────────────

// // function TabButton({ label, active, onClick }) {
// //   const [hovered, setHovered] = useState(false);

// //   return (
// //     <span
// //       style={{
// //         padding: '10px 22px', fontSize: '15px', fontWeight: '500', borderRadius: '8px 8px 0 0',
// //         border: '1.5px solid', borderBottom: 'none', cursor: 'pointer', marginRight: '3px',
// //         textTransform: 'capitalize', transition: 'background 0.15s, color 0.15s',
// //         background: active ? ACCENT : hovered ? '#dae2f3' : '#e4eaf5',
// //         color: active ? '#fff' : '#475569', borderColor: active ? ACCENT : '#d0d9ed',
// //       }}
// //       onClick={onClick}
// //       onMouseEnter={() => setHovered(true)}
// //       onMouseLeave={() => setHovered(false)}
// //     >
// //       {processContent(label)}
// //     </span>
// //   );
// // }

// // // ─── FormulaCard ───────────────────────────────────────────────

// // function FormulaCard({ item, isHighlighted, onToggle, isOpen }) {
// //   const hasFields = item.fields && typeof item.fields === 'object' && !Array.isArray(item.fields) && Object.keys(item.fields).length > 0;
// //   const [activeTab, setActiveTab] = useState(0);
// //   const [hovered, setHovered] = useState(false);
// //   const fieldEntries = hasFields ? Object.entries(item.fields) : [];
// //   const itemId = toId(item.name);

// //   return (
// //     <div
// //       id={itemId}
// //       style={{
// //         border: isHighlighted ? `2px solid ${ACCENT}` : hovered ? '1.5px solid #93aee0' : '1.5px solid #d0d9ed',
// //         borderRadius: '12px', marginBottom: '12px', overflow: 'hidden',
// //         background: isHighlighted ? '#f8faff' : '#fff',
// //         transition: 'border-color 0.2s, background 0.2s', scrollMarginTop: '130px',
// //       }}
// //       onMouseEnter={() => setHovered(true)}
// //       onMouseLeave={() => setHovered(false)}
// //     >
// //       <div style={S.cardBody}>
// //         <h3 style={S.cardName}>{processContent(item.name)}</h3>

// //         <div style={S.formulaPanel}>
// //           <div style={S.formulaAccentBar} />
// //           <div style={S.formulaInner}>
// //             <div style={S.cardFormula}>{processContent(item.formula)}</div>
// //           </div>
// //         </div>

// //         {item.link && <CardLink link={item.link} />}
// //         {hasFields && (
// //           <div style={S.cardToggle} onClick={() => onToggle(itemId)}>
// //             {isOpen ? 'Hide details' : 'See details'}
// //             <svg width="16" height="16" viewBox="0 0 14 14" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }}>
// //               <polyline points="3,5 7,9 11,5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// //             </svg>
// //           </div>
// //         )}
// //         {!isOpen && <BackToTop />}
// //       </div>

// //       {hasFields && (
// //         <div style={S.cardDetail(isOpen)}>
// //           <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
// //             {fieldEntries.map(([key], i) => (
// //               <TabButton key={key} label={key.replace(/_/g, ' ')} active={i === activeTab} onClick={() => setActiveTab(i)} />
// //             ))}
// //           </div>
// //           <div style={S.tabBody}>
// //             <FieldContent value={fieldEntries[activeTab]?.[1] || ''} />
// //           </div>
// //           <BackToTop />
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // // ─── SidebarLink ───────────────────────────────────────────────

// // function SidebarLink({ item, active, onNavigate }) {
// //   const [hovered, setHovered] = useState(false);

// //   return (
// //     <a
// //       href={`#${toId(item.name)}`}
// //       style={{
// //         display: 'block', padding: '3px 8px', fontSize: '15px',
// //         color: active ? ACCENT : hovered ? ACCENT : '#64748b',
// //         fontWeight: active ? '600' : '400', textDecoration: 'none',
// //         borderLeft: `2px solid ${active || hovered ? ACCENT : 'transparent'}`,
// //         borderRadius: '0 4px 4px 0', background: active || hovered ? ACCENT_LIGHT : 'transparent',
// //         transition: 'all 0.12s', cursor: 'pointer', whiteSpace: 'normal', wordBreak: 'break-word', lineHeight: '1.3',
// //       }}
// //       onMouseEnter={() => setHovered(true)}
// //       onMouseLeave={() => setHovered(false)}
// //       onClick={(e) => { e.preventDefault(); onNavigate(toId(item.name)); }}
// //     >
// //       {processContent(item.name)}
// //     </a>
// //   );
// // }

// // // ─── Icons ─────────────────────────────────────────────────────

// // const GridIcon = (
// //   <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
// //     <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
// //     <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
// //     <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
// //     <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
// //   </svg>
// // );

// // const ListIcon = (
// //   <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
// //     <line x1="1" y1="3" x2="15" y2="3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
// //     <line x1="1" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
// //     <line x1="1" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
// //   </svg>
// // );

// // // ═══════════════════════════════════════════════════════════════
// // // MAIN COMPONENT
// // // ═══════════════════════════════════════════════════════════════

// // export default function FormulasTOC({
// //   data = [],
// //   groupByField = 'category',
// //   type = 'Formula',
// // }) {
// //   const [view, setView] = useState('cards');
// //   const [activeLetter, setActiveLetter] = useState(null);
// //   const [activeCats, setActiveCats] = useState(new Set());
// //   const [openTocItems, setOpenTocItems] = useState(new Set());
// //   const [openCards, setOpenCards] = useState(new Set());
// //   const [highlightedId, setHighlightedId] = useState(null);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [searchFocused, setSearchFocused] = useState(false);
// //   const [sidebarVisible, setSidebarVisible] = useState(false);
// //   const [sidebarLeft, setSidebarLeft] = useState(0);
// //   const [activeItemId, setActiveItemId] = useState(null);
// //   const [activeSidebarCat, setActiveSidebarCat] = useState(null);

// //   const navPanelRef = useRef(null);
// //   const cardsRef = useRef(null);
// //   const highlightTimer = useRef(null);
// //   const observerRef = useRef(null);

// //   const categories = useMemo(() => [...new Set(data.map((d) => d[groupByField]))], [data, groupByField]);

// //   const catCounts = useMemo(() => {
// //     const counts = {};
// //     data.forEach((d) => { const key = d[groupByField] || 'Other'; counts[key] = (counts[key] || 0) + 1; });
// //     return counts;
// //   }, [data, groupByField]);

// //   const usedLetters = useMemo(() => new Set(data.map((d) => d.name[0].toUpperCase())), [data]);

// //   const grouped = useMemo(() => {
// //     const lower = searchTerm.toLowerCase();
// //     const filtered = lower
// //       ? data.filter((d) =>
// //           d.name?.toLowerCase().includes(lower) ||
// //           d.formula?.toLowerCase().includes(lower) ||
// //           (d.fields && typeof d.fields === 'object' &&
// //             Object.values(d.fields).some((v) => {
// //               if (typeof v === 'string') return v.toLowerCase().includes(lower);
// //               if (typeof v === 'object' && v?.text) return v.text.toLowerCase().includes(lower);
// //               return false;
// //             })))
// //       : data;

// //     const groups = {};
// //     filtered.forEach((d) => { const key = d[groupByField] || 'Other'; if (!groups[key]) groups[key] = []; groups[key].push(d); });
// //     return groups;
// //   }, [data, searchTerm, groupByField]);

// //   const totalCount = useMemo(() => Object.values(grouped).reduce((sum, arr) => sum + arr.length, 0), [grouped]);

// //   const navFiltered = useMemo(() => {
// //     let result = data;
// //     if (activeLetter) result = result.filter((d) => d.name[0].toUpperCase() === activeLetter);
// //     if (activeCats.size > 0) result = result.filter((d) => activeCats.has(d[groupByField]));
// //     return [...result].sort((a, b) => a.name.localeCompare(b.name));
// //   }, [data, activeLetter, activeCats, groupByField]);

// //   const toggleLetter = useCallback((letter) => { setActiveLetter((prev) => (prev === letter ? null : letter)); }, []);
// //   const toggleCat = useCallback((cat) => { setActiveCats((prev) => { const next = new Set(prev); if (next.has(cat)) next.delete(cat); else next.add(cat); return next; }); }, []);
// //   const clearFilters = useCallback(() => { setActiveCats(new Set()); setActiveLetter(null); }, []);
// //   const toggleTocItem = useCallback((id) => { setOpenTocItems((prev) => { const next = new Set(); if (!prev.has(id)) next.add(id); return next; }); }, []);
// //   const toggleCard = useCallback((id) => { setOpenCards((prev) => { const next = new Set(prev); if (next.has(id)) next.delete(id); else next.add(id); return next; }); }, []);

// //   const scrollToItem = useCallback((id) => {
// //     const el = document.getElementById(id);
// //     if (!el) return;
// //     const y = el.getBoundingClientRect().top + window.scrollY - 130;
// //     window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
// //   }, []);

// //   const navigateToItem = useCallback((id) => {
// //     setSearchTerm('');
// //     const hasFields = data.some((d) => {
// //       const did = toId(d.name);
// //       return did === id && d.fields && typeof d.fields === 'object' && Object.keys(d.fields).length > 0;
// //     });
// //     if (hasFields) setOpenCards((prev) => new Set(prev).add(id));
// //     setHighlightedId(id);
// //     clearTimeout(highlightTimer.current);
// //     highlightTimer.current = setTimeout(() => setHighlightedId(null), 3000);
// //     requestAnimationFrame(() => { setTimeout(() => scrollToItem(id), 100); });
// //   }, [data, scrollToItem]);

// //   const navigateToCategory = useCallback((cat) => {
// //     const categoryId = `category_${cat.toLowerCase().replace(/\s+/g, '_')}`;
// //     const el = document.getElementById(categoryId);
// //     if (!el) return;
// //     const y = el.getBoundingClientRect().top + window.scrollY - 140;
// //     window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
// //   }, []);

// //   useEffect(() => { const hash = window.location.hash.slice(1); if (hash) setTimeout(() => navigateToItem(hash), 150); }, [navigateToItem]);

// //   useEffect(() => {
// //     const onHashChange = () => { const hash = window.location.hash.slice(1); if (hash) navigateToItem(hash); };
// //     window.addEventListener('hashchange', onHashChange);
// //     return () => window.removeEventListener('hashchange', onHashChange);
// //   }, [navigateToItem]);

// //   useEffect(() => {
// //     const onClick = (e) => {
// //       const a = e.target.closest('a[href^="#"]');
// //       if (!a) return;
// //       const hash = a.getAttribute('href').slice(1);
// //       if (hash) { e.preventDefault(); window.history.pushState(null, '', `#${hash}`); navigateToItem(hash); }
// //     };
// //     document.addEventListener('click', onClick);
// //     return () => document.removeEventListener('click', onClick);
// //   }, [navigateToItem]);

// //   useEffect(() => {
// //     const check = () => {
// //       if (!navPanelRef.current) return;
// //       const rect = navPanelRef.current.getBoundingClientRect();
// //       const footer = document.querySelector('footer');
// //       const pastFooter = footer ? footer.getBoundingClientRect().top < window.innerHeight : false;
// //       const sidebarW = 200; const gap = 24; let left = 20;
// //       if (cardsRef.current) { const cardsRect = cardsRef.current.getBoundingClientRect(); left = cardsRect.left - sidebarW - gap; }
// //       const show = rect.bottom < 0 && window.innerWidth >= 1100 && !pastFooter && left > 10;
// //       setSidebarVisible(show);
// //       setSidebarLeft(Math.max(10, left));
// //     };
// //     window.addEventListener('scroll', check, { passive: true });
// //     window.addEventListener('resize', check, { passive: true });
// //     check();
// //     return () => { window.removeEventListener('scroll', check); window.removeEventListener('resize', check); };
// //   }, []);

// //   useEffect(() => {
// //     if (observerRef.current) observerRef.current.disconnect();
// //     const observer = new IntersectionObserver((entries) => {
// //       entries.forEach((entry) => {
// //         if (entry.isIntersecting) {
// //           const id = entry.target.id;
// //           setActiveItemId(id);
// //           const item = data.find((d) => toId(d.name) === id);
// //           if (item) setActiveSidebarCat(item[groupByField]);
// //         }
// //       });
// //     }, { rootMargin: '-80px 0px -60% 0px', threshold: 0 });
// //     data.forEach((item) => { const el = document.getElementById(toId(item.name)); if (el) observer.observe(el); });
// //     observerRef.current = observer;
// //     return () => observer.disconnect();
// //   }, [data, grouped, groupByField]);

// //   const tocGridStyle = useMemo(() => {
// //     const colCount = categories.length <= 2 ? 2 : categories.length <= 4 ? categories.length : 4;
// //     return { ...S.tocGrid, gridTemplateColumns: `repeat(${colCount}, 1fr)` };
// //   }, [categories]);

// //   return (
// //     <>
// //       <style>{HIDE_SCROLLBAR_CSS}</style>

// //       <div style={S.outerWrap}>
// //         <div ref={navPanelRef} style={{ marginBottom: 0 }}>
// //           <div style={S.toggleWrap}>
// //             <div style={S.toggleTrack}>
// //               <ToggleButton label="Categories" icon={GridIcon} active={view === 'cards'} onClick={() => setView('cards')} />
// //               <ToggleButton label="Index" icon={ListIcon} active={view === 'index'} onClick={() => setView('index')} />
// //             </div>
// //           </div>

// //           {view === 'cards' && (
// //             <div style={tocGridStyle}>
// //               {categories.map((cat) => {
// //                 const items = data.filter((d) => d[groupByField] === cat);
// //                 return (
// //                   <div key={cat} style={S.tocCard}>
// //                     <div style={S.tocCardHeader}>{cat}</div>
// //                     <div style={S.tocCardBody}>
// //                       {items.map((f) => <TocItem key={f.name} item={f} isOpen={openTocItems.has(toId(f.name))} onToggle={toggleTocItem} onNavigate={navigateToItem} />)}
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           )}

// //           {view === 'index' && (
// //             <div style={S.navPanel}>
// //               <div className="ftoc-no-scrollbar" style={S.alphaBar}>
// //                 {ALL_LETTERS.map((l) => <AlphaButton key={l} letter={l} active={activeLetter === l} disabled={!usedLetters.has(l)} onClick={() => toggleLetter(l)} />)}
// //               </div>
// //               <div className="ftoc-no-scrollbar" style={S.termGrid}>
// //                 {navFiltered.map((item) => <TermItem key={item.name} item={item} onNavigate={navigateToItem} />)}
// //               </div>
// //               <div style={S.catFilterRow}>
// //                 {categories.map((cat) => <CategoryChip key={cat} label={cat} active={activeCats.has(cat)} count={catCounts[cat]} onToggle={() => toggleCat(cat)} onNavigate={() => navigateToCategory(cat)} />)}
// //                 {(activeCats.size > 0 || activeLetter) && <ClearButton onClick={clearFilters} />}
// //               </div>
// //               <div style={S.navStatus}>{navFiltered.length} of {data.length} {type.toLowerCase()}s</div>
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       <div ref={cardsRef} style={S.innerWrap}>
// //         <div style={S.searchBar}>
// //           <div style={S.searchWrapper}>
// //             <input
// //               type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
// //               onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)}
// //               placeholder={`Search in ${type}s...`}
// //               style={{
// //                 width: '100%', padding: '13px 36px 13px 18px',
// //                 border: searchFocused ? `2px solid ${ACCENT}` : '2px solid transparent',
// //                 borderRadius: '28px', fontSize: '16px', fontFamily: 'inherit', outline: 'none',
// //                 background: '#fff', color: '#1e293b', boxSizing: 'border-box', transition: 'border-color 0.2s',
// //               }}
// //             />
// //             {searchTerm && <button style={S.searchClear} onClick={() => setSearchTerm('')} aria-label="Clear search">&#10005;</button>}
// //           </div>
// //           <span style={S.searchCount}>{totalCount} {totalCount === 1 ? type.toLowerCase() : `${type.toLowerCase()}s`}</span>
// //         </div>

// //         {Object.keys(grouped).length === 0 ? (
// //           <div style={S.empty}>No {type.toLowerCase()}s found for &quot;{searchTerm}&quot;</div>
// //         ) : (
// //           Object.entries(grouped).map(([group, items]) => {
// //             const categoryId = `category_${group.toLowerCase().replace(/\s+/g, '_')}`;
// //             return (
// //               <div key={group} id={categoryId} style={{ marginBottom: '40px' }}>
// //                 <div style={S.groupHeader}>
// //                   <h2 style={S.groupTitle}>{group}</h2>
// //                   <span style={S.groupCount}>({items.length} {items.length === 1 ? type.toLowerCase() : `${type.toLowerCase()}s`})</span>
// //                 </div>
// //                 {items.map((item) => {
// //                   const id = toId(item.name);
// //                   return <FormulaCard key={id} item={item} isHighlighted={highlightedId === id} isOpen={openCards.has(id)} onToggle={toggleCard} />;
// //                 })}
// //               </div>
// //             );
// //           })
// //         )}
// //       </div>

// //       <div className="ftoc-no-scrollbar" style={S.sidebar(sidebarVisible, sidebarLeft)}>
// //         {categories.map((cat) => {
// //           const items = data.filter((d) => d[groupByField] === cat);
// //           return (
// //             <div key={cat} style={S.sidebarGroup}>
// //               <div style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#1e40af', marginBottom: '4px', paddingLeft: '8px' }}>
// //                 {processContent(cat)}
// //               </div>
// //               {items.map((item) => <SidebarLink key={item.name} item={item} active={activeItemId === toId(item.name)} onNavigate={navigateToItem} />)}
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </>
// //   );
// // }



// import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
// import { processContent } from '../../utils/contentProcessor';
// import FunctionMachineDiagram from './machine-diagram/FunctionMachineDiagram';
// import MathDerivation from './math-derivation/MathDerivation';

// // ─── Component Registry ────────────────────────────────────────

// const COMPONENT_REGISTRY = {
//   FunctionMachineDiagram,
//   MathDerivation: ({ variant = 'rail', compact = true, passageStyle = 'bar', ...rest }) => (
//     <MathDerivation variant={variant} compact={compact} passageStyle={passageStyle} {...rest} />
//   ),
// };

// // ─── Constants ─────────────────────────────────────────────────

// const ALL_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
// const ACCENT = '#4a6cf7';
// const ACCENT_LIGHT = '#eef1fd';
// const ACCENT_BORDER = '#cdd5f8';
// const ACCENT_HOVER = '#dbe1fc';

// // Formula panel palette (slate + dusty denim)
// const FORMULA_BG = '#E9EFF5';
// const FORMULA_BORDER = '#BCCBDA';
// const FORMULA_ACCENT_BAR = '#5B7CA3';
// const FORMULA_INK = '#243B57';
// const FORMULA_INK_HOVER = '#14233a';

// const HIDE_SCROLLBAR_CSS = `
//   .ftoc-no-scrollbar::-webkit-scrollbar { display: none; }
// `;

// const toId = (name) => name.toLowerCase().replace(/['\u2019()]/g, '').replace(/\s+/g, '_');

// const noScroll = {
//   scrollbarWidth: 'none',
//   msOverflowStyle: 'none',
// };

// function normalizeArray(val) {
//   if (!val) return [];
//   if (Array.isArray(val)) return val;
//   return [val];
// }

// // ─── Styles ────────────────────────────────────────────────────

// const S = {
//   outerWrap: {
//     maxWidth: '1150px',
//     margin: '0 auto',
//     padding: '0 20px',
//   },
//   innerWrap: {
//     maxWidth: '820px',
//     margin: '0 auto',
//     padding: '0 16px',
//   },
//   toggleWrap: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginBottom: '24px',
//   },
//   toggleTrack: {
//     display: 'inline-flex',
//     background: '#f1f5f9',
//     borderRadius: '12px',
//     padding: '4px',
//     border: '1px solid #e2e8f0',
//   },
//   tocGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(4, 1fr)',
//     gap: '14px',
//     marginBottom: '28px',
//   },
//   tocCard: {
//     borderRadius: '12px',
//     overflow: 'hidden',
//     border: '1px solid #d0d9ed',
//     background: '#fff',
//   },
//   tocCardHeader: {
//     background: 'linear-gradient(135deg, #4a6cf7 0%, #3b5de7 100%)',
//     color: '#fff',
//     padding: '17px 20px',
//     fontSize: '17px',
//     fontWeight: '600',
//   },
//   tocCardBody: {
//     padding: '5px 0',
//   },
//   tocPeek: {
//     padding: '8px 18px 12px',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '8px',
//   },
//   tocPeekFormula: {
//     fontSize: '16px',
//     background: '#f1f5f9',
//     padding: '8px 12px',
//     borderRadius: '6px',
//     color: '#475569',
//     lineHeight: '1.6',
//   },
//   navPanel: {
//     background: '#fff',
//     border: '1.5px solid #d0d9ed',
//     borderRadius: '16px',
//     overflow: 'hidden',
//     marginBottom: '28px',
//   },
//   alphaBar: {
//     display: 'flex',
//     flexWrap: 'nowrap',
//     gap: '2px',
//     padding: '12px 18px',
//     background: '#f8fafc',
//     borderBottom: '1.5px solid #e2e8f0',
//     justifyContent: 'center',
//     overflowX: 'auto',
//     ...noScroll,
//   },
//   termGrid: {
//     padding: '20px 24px',
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr',
//     gap: '3px 24px',
//   },
//   catFilterRow: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '8px',
//     padding: '17px 24px',
//     borderTop: '1px solid #e2e8f0',
//   },
//   navStatus: {
//     padding: '10px 24px 17px',
//     fontSize: '16px',
//     color: '#94a3b8',
//     borderTop: '1px solid #e2e8f0',
//     textAlign: 'right',
//   },
//   searchBar: {
//     position: 'sticky',
//     top: '63px',
//     zIndex: 10,
//     background: 'rgba(30, 58, 138, 0.75)',
//     backdropFilter: 'blur(8px)',
//     borderRadius: '4px',
//     padding: '14px 20px',
//     marginBottom: '32px',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '14px',
//   },
//   searchWrapper: {
//     position: 'relative',
//     flex: 1,
//   },
//   searchClear: {
//     position: 'absolute',
//     top: '50%',
//     right: '14px',
//     transform: 'translateY(-50%)',
//     border: 'none',
//     background: 'none',
//     color: '#94a3b8',
//     fontSize: '16px',
//     cursor: 'pointer',
//     padding: '0',
//     lineHeight: 1,
//   },
//   searchCount: {
//     fontSize: '14px',
//     color: '#c7d2e8',
//     whiteSpace: 'nowrap',
//     flexShrink: 0,
//   },
//   groupHeader: {
//     display: 'flex',
//     alignItems: 'baseline',
//     gap: '10px',
//     margin: '0 0 16px',
//     paddingBottom: '8px',
//     borderBottom: '2px solid #c7d2e8',
//   },
//   groupTitle: {
//     fontFamily: "'Source Serif 4', Georgia, serif",
//     fontSize: '22px',
//     fontWeight: '600',
//     color: '#1e40af',
//     margin: 0,
//     letterSpacing: '0.01em',
//   },
//   groupCount: {
//     fontSize: '14px',
//     color: '#94a3b8',
//     fontWeight: '400',
//   },
//   cardBody: {
//     padding: '22px 26px',
//     background: '#fff',
//   },
//   cardName: {
//     fontFamily: "'Source Serif 4', Georgia, serif",
//     fontSize: '20px',
//     fontWeight: '600',
//     color: '#1e293b',
//     margin: '0 0 12px',
//     lineHeight: '1.3',
//   },
//   // ── Formula panel (slate + dusty denim) ────────────────────
//   formulaPanel: {
//     display: 'flex',
//     background: FORMULA_BG,
//     border: `0.5px solid ${FORMULA_BORDER}`,
//     borderRadius: '8px',
//     overflow: 'hidden',
//     boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5)',
//     margin: '4px 0 2px',
//   },
//   formulaAccentBar: {
//     width: '3px',
//     background: FORMULA_ACCENT_BAR,
//     flexShrink: 0,
//   },
//   formulaInner: {
//     flex: 1,
//     padding: '22px 18px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     minHeight: '60px',
//   },
//   cardFormula: {
//     fontSize: '17px',
//     color: FORMULA_INK,
//     lineHeight: '1.7',
//     margin: 0,
//     textAlign: 'center',
//     width: '100%',
//   },
//   // ───────────────────────────────────────────────────────────
//   cardToggle: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '8px',
//     padding: '14px 0 4px',
//     cursor: 'pointer',
//     color: FORMULA_INK,
//     fontSize: '20px',
//     fontWeight: '500',
//     userSelect: 'none',
//   },
//   cardDetail: (open) => ({
//     borderTop: '1.5px solid #e2e8f0',
//     background: '#f0f4fc',
//     overflow: 'hidden',
//     maxHeight: open ? '5000px' : '0',
//     padding: open ? '20px 26px' : '0 26px',
//     transition: 'max-height 0.35s ease, padding 0.3s ease',
//   }),
//   tabBody: {
//     padding: '20px 22px',
//     border: '1.5px solid #d0d9ed',
//     borderRadius: '0 8px 8px 8px',
//     fontSize: '17px',
//     color: '#475569',
//     lineHeight: '1.7',
//     background: '#fff',
//     minHeight: '60px',
//   },
//   sidebar: (visible, leftPos) => ({
//     position: 'fixed',
//     top: '20px',
//     left: `${leftPos}px`,
//     width: '200px',
//     background: '#fff',
//     border: '1.5px solid #d0d9ed',
//     borderRadius: '12px',
//     padding: '16px 14px',
//     maxHeight: 'calc(100vh - 40px)',
//     overflowY: 'auto',
//     opacity: visible ? 1 : 0,
//     transform: visible ? 'translateY(0)' : 'translateY(12px)',
//     transition: 'opacity 0.3s, transform 0.3s',
//     pointerEvents: visible ? 'auto' : 'none',
//     zIndex: 50,
//     ...noScroll,
//   }),
//   sidebarGroup: {
//     marginBottom: '14px',
//   },
//   empty: {
//     textAlign: 'center',
//     padding: '50px 20px',
//     color: '#94a3b8',
//     fontSize: '16px',
//   },
// };

// // ─── Illustration ──────────────────────────────────────────────

// function Illustration({ item }) {
//   const { src, alt = '', caption, width } = item;
//   const isSvg = typeof src === 'string' && src.trimStart().startsWith('<svg');

//   return (
//     <div style={{ margin: '16px 0', padding: '16px', background: '#f8fafc', borderRadius: '8px', border: '0.5px solid #e2e8f0' }}>
//       {isSvg ? (
//         <div style={{ maxWidth: width ? `${width}px` : '100%', margin: '0 auto' }} dangerouslySetInnerHTML={{ __html: src }} />
//       ) : (
//         <img src={src} alt={alt} style={{ display: 'block', margin: '0 auto', maxWidth: width ? `${width}px` : '100%', width: '100%', height: 'auto', borderRadius: '4px' }} loading="lazy" />
//       )}
//       {caption && <p style={{ margin: '8px 0 0', fontSize: '13px', color: '#94a3b8', textAlign: 'center', lineHeight: '1.5' }}>{processContent(caption)}</p>}
//     </div>
//   );
// }

// // ─── LinkPill ──────────────────────────────────────────────────

// function LinkPill({ link }) {
//   const [hovered, setHovered] = useState(false);
//   const label = link.label || link.text || link.url;
//   const url = link.url || link.href;
//   if (!url) return null;

//   return (
//     <a
//       href={url}
//       style={{
//         display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '14px',
//         color: '#2563eb', textDecoration: 'none', padding: '6px 14px',
//         border: '0.5px solid #e2e8f0', borderRadius: '20px',
//         background: hovered ? '#eff4ff' : '#f8fafc', transition: 'background 0.15s', cursor: 'pointer',
//       }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
//         <path d="M3 11L11 3M11 3H6M11 3v5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//       {processContent(label)}
//     </a>
//   );
// }

// // ─── LinksRow ──────────────────────────────────────────────────

// function LinksRow({ links }) {
//   if (!links || links.length === 0) return null;
//   const filtered = links.filter((l) => l && (l.url || l.href));
//   if (filtered.length === 0) return null;

//   return (
//     <div style={{ margin: '16px 0 0', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
//       {filtered.map((link, i) => <LinkPill key={i} link={link} />)}
//     </div>
//   );
// }

// // ─── FieldContent ──────────────────────────────────────────────

// function FieldContent({ value }) {
//   if (typeof value === 'string') return <div>{processContent(value)}</div>;
//   if (Array.isArray(value)) return <div>{value.map((block, i) => <FieldContentBlock key={i} block={block} />)}</div>;
//   if (typeof value === 'object' && value !== null) return <FieldContentBlock block={value} />;
//   return null;
// }

// function FieldContentBlock({ block }) {
//   if (typeof block === 'string') return <div>{processContent(block)}</div>;
//   if (typeof block !== 'object' || block === null) return null;

//   if (block.component) {
//     const Component = COMPONENT_REGISTRY[block.component];
//     if (Component) {
//       const { component, ...props } = block;
//       return <Component {...props} />;
//     }
//   }

//   const { text, links, illustrations } = block;
//   const illustrationList = normalizeArray(illustrations);
//   const linkList = normalizeArray(links);

//   return (
//     <div>
//       {text && <div>{processContent(text)}</div>}
//       {illustrationList.map((ill, i) => <Illustration key={i} item={ill} />)}
//       <LinksRow links={linkList} />
//     </div>
//   );
// }

// // ─── AlphaButton ───────────────────────────────────────────────

// function AlphaButton({ letter, active, disabled, onClick }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <button
//       style={{
//         width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
//         fontSize: '15px', fontWeight: '600', fontFamily: 'inherit', borderRadius: '7px', border: 'none',
//         cursor: disabled ? 'default' : 'pointer', pointerEvents: disabled ? 'none' : 'auto',
//         background: active ? ACCENT : hovered ? ACCENT_HOVER : 'transparent',
//         color: active ? '#fff' : disabled ? '#cbd5e1' : ACCENT,
//         transition: 'all 0.12s', flexShrink: 0,
//       }}
//       onClick={onClick}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {letter}
//     </button>
//   );
// }

// // ─── ToggleButton ──────────────────────────────────────────────

// function ToggleButton({ label, active, icon, onClick }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <button
//       style={{
//         display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 22px',
//         border: 'none', borderRadius: '9px', cursor: 'pointer', fontFamily: 'inherit',
//         fontSize: '17px', fontWeight: '500',
//         background: active ? ACCENT : hovered ? '#e2e8f0' : 'transparent',
//         color: active ? '#fff' : '#475569', transition: 'all 0.15s',
//       }}
//       onClick={onClick}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {icon}
//       {label}
//     </button>
//   );
// }

// // ─── CategoryChip ──────────────────────────────────────────────

// function CategoryChip({ label, active, count, onToggle, onNavigate }) {
//   const [hovered, setHovered] = useState(false);
//   const [navHovered, setNavHovered] = useState(false);

//   const checkSvg = (
//     <svg width="14" height="14" viewBox="0 0 12 12">
//       <polyline points="2,6 5,9 10,3" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );

//   const arrowSvg = (
//     <svg width="14" height="14" viewBox="0 0 12 12">
//       <path d="M2 6h8M7 3l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );

//   return (
//     <div
//       style={{
//         display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//         padding: '10px 17px',
//         border: active ? `1.5px solid ${ACCENT}` : hovered ? '1.5px solid #93aee0' : '1.5px solid #d0d9ed',
//         borderRadius: '12px', background: active ? ACCENT_LIGHT : '#fff',
//         cursor: 'pointer', transition: 'border-color 0.15s, background 0.15s', gap: '10px',
//       }}
//       onClick={onToggle}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//         <div style={{
//           width: 21, height: 21, borderRadius: '4px',
//           border: active ? `1.5px solid ${ACCENT}` : '1.5px solid #94a3b8',
//           display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
//           background: active ? ACCENT : '#fff', transition: 'all 0.15s',
//         }}>
//           {active && checkSvg}
//         </div>
//         <span style={{ fontSize: '17px', fontWeight: '500', color: '#1e293b' }}>{processContent(label)}</span>
//         <span style={{ fontSize: '15px', color: '#94a3b8' }}>({count})</span>
//       </div>
//       <button
//         style={{
//           display: 'flex', alignItems: 'center', gap: '4px', padding: '5px 14px',
//           borderRadius: '18px', border: `1px solid ${navHovered ? ACCENT : '#d0d9ed'}`,
//           background: navHovered ? ACCENT_HOVER : '#fff', fontSize: '15px', fontWeight: '500',
//           fontFamily: 'inherit', color: ACCENT, cursor: 'pointer', flexShrink: 0,
//           transition: 'background 0.12s, border-color 0.12s',
//         }}
//         onMouseEnter={() => setNavHovered(true)}
//         onMouseLeave={() => setNavHovered(false)}
//         onClick={(e) => { e.stopPropagation(); onNavigate(); }}
//       >
//         Go to {arrowSvg}
//       </button>
//     </div>
//   );
// }

// // ─── ClearButton ───────────────────────────────────────────────

// function ClearButton({ onClick }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <button
//       style={{
//         display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 20px',
//         border: '1px solid red', background: hovered ? '#fef2f2' : 'none',
//         borderRadius: '12px', fontSize: '17px', fontWeight: '500', fontFamily: 'inherit',
//         color: '#dc2626', cursor: 'pointer', transition: 'background 0.15s',
//       }}
//       onClick={onClick}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       &#10005; Clear
//     </button>
//   );
// }

// // ─── TermItem ──────────────────────────────────────────────────

// function TermItem({ item, onNavigate }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <a
//       href={`#${toId(item.name)}`}
//       style={{
//         padding: '10px 14px', fontSize: '17px', color: hovered ? ACCENT : '#334155',
//         borderRadius: '7px', cursor: 'pointer', transition: 'all 0.12s', textDecoration: 'none',
//         display: 'flex', alignItems: 'baseline', gap: '10px',
//         background: hovered ? ACCENT_LIGHT : 'transparent',
//       }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onClick={(e) => { e.preventDefault(); onNavigate(toId(item.name)); }}
//     >
//       <span style={{ fontSize: '16px', fontWeight: '600', color: ACCENT, width: '16px', flexShrink: 0 }}>{item.name[0]}</span>
//       {processContent(item.name)}
//       <span style={{ fontSize: '15px', color: '#94a3b8', marginLeft: 'auto', flexShrink: 0, whiteSpace: 'nowrap' }}>{item.category}</span>
//     </a>
//   );
// }

// // ─── TocItem ───────────────────────────────────────────────────

// function TocItem({ item, isOpen, onToggle, onNavigate }) {
//   const [hovered, setHovered] = useState(false);
//   const id = toId(item.name);

//   return (
//     <div>
//       <button
//         style={{
//           display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
//           padding: '10px 17px', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
//           textAlign: 'left', fontSize: '16px', color: '#334155',
//           background: isOpen ? '#f0f4ff' : hovered ? '#f8fafc' : 'transparent', transition: 'background 0.1s',
//         }}
//         onClick={() => onToggle(id)}
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         <span>{item.name}</span>
//         <svg width="16" height="16" viewBox="0 0 14 14" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', color: '#94a3b8', flexShrink: 0 }}>
//           <polyline points="4,5 7,8 10,5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//       </button>
//       {isOpen && (
//         <div style={S.tocPeek}>
//           <div style={S.tocPeekFormula}>{processContent(item.formula)}</div>
//           <a style={{ fontSize: '14px', color: ACCENT, cursor: 'pointer', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); onNavigate(id); }}>
//             Learn More &#8595;
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }

// // ─── CardLink ──────────────────────────────────────────────────
// // Source link under the formula. Same color as formula ink.

// function CardLink({ link }) {
//   const [hovered, setHovered] = useState(false);
//   if (!link || (!link.url && !link.href)) return null;
//   const label = link.label || link.text || link.url || link.href;
//   const url = link.url || link.href;

//   return (
//     <div>
//       <a
//         href={url}
//         style={{
//           display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '18px',
//           color: hovered ? FORMULA_INK_HOVER : FORMULA_INK, textDecoration: 'none', padding: '12px 0 0',
//           cursor: 'pointer', fontWeight: '500', transition: 'color 0.15s',
//         }}
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         <svg width="16" height="16" viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
//           <path d="M3 11L11 3M11 3H6M11 3v5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//         {processContent(label)}
//       </a>
//     </div>
//   );
// }

// // ─── BackToTop ─────────────────────────────────────────────────
// // Right-aligned (as in original). Larger size + same ink color as formula.

// function BackToTop() {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div style={{ textAlign: 'right', padding: '12px 0 4px' }}>
//       <span
//         style={{
//           display: 'inline-flex',
//           alignItems: 'center',
//           gap: '6px',
//           cursor: 'pointer',
//           color: hovered ? FORMULA_INK_HOVER : FORMULA_INK,
//           fontSize: '20px',
//           fontWeight: '500',
//           userSelect: 'none',
//           transition: 'color 0.15s',
//         }}
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
//           <polyline points="3,9 7,5 11,9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//         Back to top
//       </span>
//     </div>
//   );
// }

// // ─── TabButton ─────────────────────────────────────────────────

// function TabButton({ label, active, onClick }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <span
//       style={{
//         padding: '10px 22px', fontSize: '15px', fontWeight: '500', borderRadius: '8px 8px 0 0',
//         border: '1.5px solid', borderBottom: 'none', cursor: 'pointer', marginRight: '3px',
//         textTransform: 'capitalize', transition: 'background 0.15s, color 0.15s',
//         background: active ? ACCENT : hovered ? '#dae2f3' : '#e4eaf5',
//         color: active ? '#fff' : '#475569', borderColor: active ? ACCENT : '#d0d9ed',
//       }}
//       onClick={onClick}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {processContent(label)}
//     </span>
//   );
// }

// // ─── FormulaCard ───────────────────────────────────────────────

// function FormulaCard({ item, isHighlighted, onToggle, isOpen }) {
//   const hasFields = item.fields && typeof item.fields === 'object' && !Array.isArray(item.fields) && Object.keys(item.fields).length > 0;
//   const [activeTab, setActiveTab] = useState(0);
//   const [hovered, setHovered] = useState(false);
//   const fieldEntries = hasFields ? Object.entries(item.fields) : [];
//   const itemId = toId(item.name);

//   return (
//     <div
//       id={itemId}
//       style={{
//         border: isHighlighted ? `2px solid ${ACCENT}` : hovered ? '1.5px solid #93aee0' : '1.5px solid #d0d9ed',
//         borderRadius: '12px', marginBottom: '12px', overflow: 'hidden',
//         background: isHighlighted ? '#f8faff' : '#fff',
//         transition: 'border-color 0.2s, background 0.2s', scrollMarginTop: '130px',
//       }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div style={S.cardBody}>
//         <h3 style={S.cardName}>{processContent(item.name)}</h3>

//         <div style={S.formulaPanel}>
//           <div style={S.formulaAccentBar} />
//           <div style={S.formulaInner}>
//             <div style={S.cardFormula}>{processContent(item.formula)}</div>
//           </div>
//         </div>

//         {item.link && <CardLink link={item.link} />}
//         {hasFields && (
//           <div style={S.cardToggle} onClick={() => onToggle(itemId)}>
//             {isOpen ? 'Hide details' : 'See details'}
//             <svg width="16" height="16" viewBox="0 0 14 14" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }}>
//               <polyline points="3,5 7,9 11,5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </div>
//         )}
//         {!isOpen && <BackToTop />}
//       </div>

//       {hasFields && (
//         <div style={S.cardDetail(isOpen)}>
//           <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
//             {fieldEntries.map(([key], i) => (
//               <TabButton key={key} label={key.replace(/_/g, ' ')} active={i === activeTab} onClick={() => setActiveTab(i)} />
//             ))}
//           </div>
//           <div style={S.tabBody}>
//             <FieldContent value={fieldEntries[activeTab]?.[1] || ''} />
//           </div>
//           <BackToTop />
//         </div>
//       )}
//     </div>
//   );
// }

// // ─── SidebarLink ───────────────────────────────────────────────

// function SidebarLink({ item, active, onNavigate }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <a
//       href={`#${toId(item.name)}`}
//       style={{
//         display: 'block', padding: '3px 8px', fontSize: '15px',
//         color: active ? ACCENT : hovered ? ACCENT : '#64748b',
//         fontWeight: active ? '600' : '400', textDecoration: 'none',
//         borderLeft: `2px solid ${active || hovered ? ACCENT : 'transparent'}`,
//         borderRadius: '0 4px 4px 0', background: active || hovered ? ACCENT_LIGHT : 'transparent',
//         transition: 'all 0.12s', cursor: 'pointer', whiteSpace: 'normal', wordBreak: 'break-word', lineHeight: '1.3',
//       }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onClick={(e) => { e.preventDefault(); onNavigate(toId(item.name)); }}
//     >
//       {processContent(item.name)}
//     </a>
//   );
// }

// // ─── Icons ─────────────────────────────────────────────────────

// const GridIcon = (
//   <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
//     <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
//     <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
//     <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
//     <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
//   </svg>
// );

// const ListIcon = (
//   <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
//     <line x1="1" y1="3" x2="15" y2="3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
//     <line x1="1" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
//     <line x1="1" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
//   </svg>
// );

// // ═══════════════════════════════════════════════════════════════
// // MAIN COMPONENT
// // ═══════════════════════════════════════════════════════════════

// export default function FormulasTOC({
//   data = [],
//   groupByField = 'category',
//   type = 'Formula',
// }) {
//   const [view, setView] = useState('cards');
//   const [activeLetter, setActiveLetter] = useState(null);
//   const [activeCats, setActiveCats] = useState(new Set());
//   const [openTocItems, setOpenTocItems] = useState(new Set());
//   const [openCards, setOpenCards] = useState(new Set());
//   const [highlightedId, setHighlightedId] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchFocused, setSearchFocused] = useState(false);
//   const [sidebarVisible, setSidebarVisible] = useState(false);
//   const [sidebarLeft, setSidebarLeft] = useState(0);
//   const [activeItemId, setActiveItemId] = useState(null);
//   const [activeSidebarCat, setActiveSidebarCat] = useState(null);

//   const navPanelRef = useRef(null);
//   const cardsRef = useRef(null);
//   const highlightTimer = useRef(null);
//   const observerRef = useRef(null);

//   const categories = useMemo(() => [...new Set(data.map((d) => d[groupByField]))], [data, groupByField]);

//   const catCounts = useMemo(() => {
//     const counts = {};
//     data.forEach((d) => { const key = d[groupByField] || 'Other'; counts[key] = (counts[key] || 0) + 1; });
//     return counts;
//   }, [data, groupByField]);

//   const usedLetters = useMemo(() => new Set(data.map((d) => d.name[0].toUpperCase())), [data]);

//   const grouped = useMemo(() => {
//     const lower = searchTerm.toLowerCase();
//     const filtered = lower
//       ? data.filter((d) =>
//           d.name?.toLowerCase().includes(lower) ||
//           d.formula?.toLowerCase().includes(lower) ||
//           (d.fields && typeof d.fields === 'object' &&
//             Object.values(d.fields).some((v) => {
//               if (typeof v === 'string') return v.toLowerCase().includes(lower);
//               if (typeof v === 'object' && v?.text) return v.text.toLowerCase().includes(lower);
//               return false;
//             })))
//       : data;

//     const groups = {};
//     filtered.forEach((d) => { const key = d[groupByField] || 'Other'; if (!groups[key]) groups[key] = []; groups[key].push(d); });
//     return groups;
//   }, [data, searchTerm, groupByField]);

//   const totalCount = useMemo(() => Object.values(grouped).reduce((sum, arr) => sum + arr.length, 0), [grouped]);

//   const navFiltered = useMemo(() => {
//     let result = data;
//     if (activeLetter) result = result.filter((d) => d.name[0].toUpperCase() === activeLetter);
//     if (activeCats.size > 0) result = result.filter((d) => activeCats.has(d[groupByField]));
//     return [...result].sort((a, b) => a.name.localeCompare(b.name));
//   }, [data, activeLetter, activeCats, groupByField]);

//   const toggleLetter = useCallback((letter) => { setActiveLetter((prev) => (prev === letter ? null : letter)); }, []);
//   const toggleCat = useCallback((cat) => { setActiveCats((prev) => { const next = new Set(prev); if (next.has(cat)) next.delete(cat); else next.add(cat); return next; }); }, []);
//   const clearFilters = useCallback(() => { setActiveCats(new Set()); setActiveLetter(null); }, []);
//   const toggleTocItem = useCallback((id) => { setOpenTocItems((prev) => { const next = new Set(); if (!prev.has(id)) next.add(id); return next; }); }, []);
//   const toggleCard = useCallback((id) => { setOpenCards((prev) => { const next = new Set(prev); if (next.has(id)) next.delete(id); else next.add(id); return next; }); }, []);

//   const scrollToItem = useCallback((id) => {
//     const el = document.getElementById(id);
//     if (!el) return;
//     const y = el.getBoundingClientRect().top + window.scrollY - 130;
//     window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
//   }, []);

//   const navigateToItem = useCallback((id) => {
//     setSearchTerm('');
//     const hasFields = data.some((d) => {
//       const did = toId(d.name);
//       return did === id && d.fields && typeof d.fields === 'object' && Object.keys(d.fields).length > 0;
//     });
//     if (hasFields) setOpenCards((prev) => new Set(prev).add(id));
//     setHighlightedId(id);
//     clearTimeout(highlightTimer.current);
//     highlightTimer.current = setTimeout(() => setHighlightedId(null), 3000);
//     requestAnimationFrame(() => { setTimeout(() => scrollToItem(id), 100); });
//   }, [data, scrollToItem]);

//   const navigateToCategory = useCallback((cat) => {
//     const categoryId = `category_${cat.toLowerCase().replace(/\s+/g, '_')}`;
//     const el = document.getElementById(categoryId);
//     if (!el) return;
//     const y = el.getBoundingClientRect().top + window.scrollY - 140;
//     window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
//   }, []);

//   useEffect(() => { const hash = window.location.hash.slice(1); if (hash) setTimeout(() => navigateToItem(hash), 150); }, [navigateToItem]);

//   useEffect(() => {
//     const onHashChange = () => { const hash = window.location.hash.slice(1); if (hash) navigateToItem(hash); };
//     window.addEventListener('hashchange', onHashChange);
//     return () => window.removeEventListener('hashchange', onHashChange);
//   }, [navigateToItem]);

//   useEffect(() => {
//     const onClick = (e) => {
//       const a = e.target.closest('a[href^="#"]');
//       if (!a) return;
//       const hash = a.getAttribute('href').slice(1);
//       if (hash) { e.preventDefault(); window.history.pushState(null, '', `#${hash}`); navigateToItem(hash); }
//     };
//     document.addEventListener('click', onClick);
//     return () => document.removeEventListener('click', onClick);
//   }, [navigateToItem]);

//   useEffect(() => {
//     const check = () => {
//       if (!navPanelRef.current) return;
//       const rect = navPanelRef.current.getBoundingClientRect();
//       const footer = document.querySelector('footer');
//       const pastFooter = footer ? footer.getBoundingClientRect().top < window.innerHeight : false;
//       const sidebarW = 200; const gap = 24; let left = 20;
//       if (cardsRef.current) { const cardsRect = cardsRef.current.getBoundingClientRect(); left = cardsRect.left - sidebarW - gap; }
//       const show = rect.bottom < 0 && window.innerWidth >= 1100 && !pastFooter && left > 10;
//       setSidebarVisible(show);
//       setSidebarLeft(Math.max(10, left));
//     };
//     window.addEventListener('scroll', check, { passive: true });
//     window.addEventListener('resize', check, { passive: true });
//     check();
//     return () => { window.removeEventListener('scroll', check); window.removeEventListener('resize', check); };
//   }, []);

//   useEffect(() => {
//     if (observerRef.current) observerRef.current.disconnect();
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const id = entry.target.id;
//           setActiveItemId(id);
//           const item = data.find((d) => toId(d.name) === id);
//           if (item) setActiveSidebarCat(item[groupByField]);
//         }
//       });
//     }, { rootMargin: '-80px 0px -60% 0px', threshold: 0 });
//     data.forEach((item) => { const el = document.getElementById(toId(item.name)); if (el) observer.observe(el); });
//     observerRef.current = observer;
//     return () => observer.disconnect();
//   }, [data, grouped, groupByField]);

//   const tocGridStyle = useMemo(() => {
//     const colCount = categories.length <= 2 ? 2 : categories.length <= 4 ? categories.length : 4;
//     return { ...S.tocGrid, gridTemplateColumns: `repeat(${colCount}, 1fr)` };
//   }, [categories]);

//   return (
//     <>
//       <style>{HIDE_SCROLLBAR_CSS}</style>

//       <div style={S.outerWrap}>
//         <div ref={navPanelRef} style={{ marginBottom: 0 }}>
//           <div style={S.toggleWrap}>
//             <div style={S.toggleTrack}>
//               <ToggleButton label="Categories" icon={GridIcon} active={view === 'cards'} onClick={() => setView('cards')} />
//               <ToggleButton label="Index" icon={ListIcon} active={view === 'index'} onClick={() => setView('index')} />
//             </div>
//           </div>

//           {view === 'cards' && (
//             <div style={tocGridStyle}>
//               {categories.map((cat) => {
//                 const items = data.filter((d) => d[groupByField] === cat);
//                 return (
//                   <div key={cat} style={S.tocCard}>
//                     <div style={S.tocCardHeader}>{cat}</div>
//                     <div style={S.tocCardBody}>
//                       {items.map((f) => <TocItem key={f.name} item={f} isOpen={openTocItems.has(toId(f.name))} onToggle={toggleTocItem} onNavigate={navigateToItem} />)}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}

//           {view === 'index' && (
//             <div style={S.navPanel}>
//               <div className="ftoc-no-scrollbar" style={S.alphaBar}>
//                 {ALL_LETTERS.map((l) => <AlphaButton key={l} letter={l} active={activeLetter === l} disabled={!usedLetters.has(l)} onClick={() => toggleLetter(l)} />)}
//               </div>
//               <div className="ftoc-no-scrollbar" style={S.termGrid}>
//                 {navFiltered.map((item) => <TermItem key={item.name} item={item} onNavigate={navigateToItem} />)}
//               </div>
//               <div style={S.catFilterRow}>
//                 {categories.map((cat) => <CategoryChip key={cat} label={cat} active={activeCats.has(cat)} count={catCounts[cat]} onToggle={() => toggleCat(cat)} onNavigate={() => navigateToCategory(cat)} />)}
//                 {(activeCats.size > 0 || activeLetter) && <ClearButton onClick={clearFilters} />}
//               </div>
//               <div style={S.navStatus}>{navFiltered.length} of {data.length} {type.toLowerCase()}s</div>
//             </div>
//           )}
//         </div>
//       </div>

//       <div ref={cardsRef} style={S.innerWrap}>
//         <div style={S.searchBar}>
//           <div style={S.searchWrapper}>
//             <input
//               type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
//               onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)}
//               placeholder={`Search in ${type}s...`}
//               style={{
//                 width: '100%', padding: '13px 36px 13px 18px',
//                 border: searchFocused ? `2px solid ${ACCENT}` : '2px solid transparent',
//                 borderRadius: '28px', fontSize: '16px', fontFamily: 'inherit', outline: 'none',
//                 background: '#fff', color: '#1e293b', boxSizing: 'border-box', transition: 'border-color 0.2s',
//               }}
//             />
//             {searchTerm && <button style={S.searchClear} onClick={() => setSearchTerm('')} aria-label="Clear search">&#10005;</button>}
//           </div>
//           <span style={S.searchCount}>{totalCount} {totalCount === 1 ? type.toLowerCase() : `${type.toLowerCase()}s`}</span>
//         </div>

//         {Object.keys(grouped).length === 0 ? (
//           <div style={S.empty}>No {type.toLowerCase()}s found for &quot;{searchTerm}&quot;</div>
//         ) : (
//           Object.entries(grouped).map(([group, items]) => {
//             const categoryId = `category_${group.toLowerCase().replace(/\s+/g, '_')}`;
//             return (
//               <div key={group} id={categoryId} style={{ marginBottom: '40px' }}>
//                 <div style={S.groupHeader}>
//                   <h2 style={S.groupTitle}>{group}</h2>
//                   <span style={S.groupCount}>({items.length} {items.length === 1 ? type.toLowerCase() : `${type.toLowerCase()}s`})</span>
//                 </div>
//                 {items.map((item) => {
//                   const id = toId(item.name);
//                   return <FormulaCard key={id} item={item} isHighlighted={highlightedId === id} isOpen={openCards.has(id)} onToggle={toggleCard} />;
//                 })}
//               </div>
//             );
//           })
//         )}
//       </div>

//       <div className="ftoc-no-scrollbar" style={S.sidebar(sidebarVisible, sidebarLeft)}>
//         {categories.map((cat) => {
//           const items = data.filter((d) => d[groupByField] === cat);
//           return (
//             <div key={cat} style={S.sidebarGroup}>
//               <div style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#1e40af', marginBottom: '4px', paddingLeft: '8px' }}>
//                 {processContent(cat)}
//               </div>
//               {items.map((item) => <SidebarLink key={item.name} item={item} active={activeItemId === toId(item.name)} onNavigate={navigateToItem} />)}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }


import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { processContent } from '../../utils/contentProcessor';
import FunctionMachineDiagram from './machine-diagram/FunctionMachineDiagram';
import MathDerivation from './math-derivation/MathDerivation';

// ─── Component Registry ────────────────────────────────────────

const COMPONENT_REGISTRY = {
  FunctionMachineDiagram,
  MathDerivation: ({ variant = 'rail', compact = true, passageStyle = 'bar', ...rest }) => (
    <MathDerivation variant={variant} compact={compact} passageStyle={passageStyle} {...rest} />
  ),
};

// ─── Constants ─────────────────────────────────────────────────

const ALL_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const ACCENT = '#4a6cf7';
const ACCENT_LIGHT = '#eef1fd';
const ACCENT_BORDER = '#cdd5f8';
const ACCENT_HOVER = '#dbe1fc';

// Formula panel palette (slate + dusty denim)
const FORMULA_BG = '#E9EFF5';
const FORMULA_BORDER = '#BCCBDA';
const FORMULA_ACCENT_BAR = '#5b7ca3';
const FORMULA_INK = '#5b7ca3';
const FORMULA_INK_HOVER = '#3f5c7e';

const HIDE_SCROLLBAR_CSS = `
  .ftoc-no-scrollbar::-webkit-scrollbar { display: none; }
`;

const toId = (name) => name.toLowerCase().replace(/['\u2019()]/g, '').replace(/\s+/g, '_');

const noScroll = {
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
};

function normalizeArray(val) {
  if (!val) return [];
  if (Array.isArray(val)) return val;
  return [val];
}

// ─── Styles ────────────────────────────────────────────────────

const S = {
  outerWrap: {
    maxWidth: '1150px',
    margin: '0 auto',
    padding: '0 20px',
  },
  innerWrap: {
    maxWidth: '820px',
    margin: '0 auto',
    padding: '0 16px',
  },
  toggleWrap: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '24px',
  },
  toggleTrack: {
    display: 'inline-flex',
    background: '#f1f5f9',
    borderRadius: '12px',
    padding: '4px',
    border: '1px solid #e2e8f0',
  },
  tocGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '14px',
    marginBottom: '28px',
  },
  tocCard: {
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid #d0d9ed',
    background: '#fff',
  },
  tocCardHeader: {
    background: 'linear-gradient(135deg, #4a6cf7 0%, #3b5de7 100%)',
    color: '#fff',
    padding: '17px 20px',
    fontSize: '17px',
    fontWeight: '600',
  },
  tocCardBody: {
    padding: '5px 0',
  },
  tocPeek: {
    padding: '8px 18px 12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  tocPeekFormula: {
    fontSize: '16px',
    background: '#f1f5f9',
    padding: '8px 12px',
    borderRadius: '6px',
    color: '#475569',
    lineHeight: '1.6',
  },
  navPanel: {
    background: '#fff',
    border: '1.5px solid #d0d9ed',
    borderRadius: '16px',
    overflow: 'hidden',
    marginBottom: '28px',
  },
  alphaBar: {
    display: 'flex',
    flexWrap: 'nowrap',
    gap: '2px',
    padding: '12px 18px',
    background: '#f8fafc',
    borderBottom: '1.5px solid #e2e8f0',
    justifyContent: 'center',
    overflowX: 'auto',
    ...noScroll,
  },
  termGrid: {
    padding: '20px 24px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3px 24px',
  },
  catFilterRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    padding: '17px 24px',
    borderTop: '1px solid #e2e8f0',
  },
  navStatus: {
    padding: '10px 24px 17px',
    fontSize: '16px',
    color: '#94a3b8',
    borderTop: '1px solid #e2e8f0',
    textAlign: 'right',
  },
  searchBar: {
    position: 'sticky',
    top: '63px',
    zIndex: 10,
    background: 'rgba(30, 58, 138, 0.75)',
    backdropFilter: 'blur(8px)',
    borderRadius: '4px',
    padding: '14px 20px',
    marginBottom: '32px',
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
  },
  searchWrapper: {
    position: 'relative',
    flex: 1,
  },
  searchClear: {
    position: 'absolute',
    top: '50%',
    right: '14px',
    transform: 'translateY(-50%)',
    border: 'none',
    background: 'none',
    color: '#94a3b8',
    fontSize: '16px',
    cursor: 'pointer',
    padding: '0',
    lineHeight: 1,
  },
  searchCount: {
    fontSize: '14px',
    color: '#c7d2e8',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
  groupHeader: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '10px',
    margin: '0 0 16px',
    paddingBottom: '8px',
    borderBottom: '2px solid #c7d2e8',
  },
  groupTitle: {
    fontFamily: "'Source Serif 4', Georgia, serif",
    fontSize: '22px',
    fontWeight: '600',
    color: '#1e40af',
    margin: 0,
    letterSpacing: '0.01em',
  },
  groupCount: {
    fontSize: '14px',
    color: '#94a3b8',
    fontWeight: '400',
  },
  cardBody: {
    padding: '22px 26px',
    background: '#fff',
  },
  cardName: {
    fontFamily: "'Source Serif 4', Georgia, serif",
    fontSize: '20px',
    fontWeight: '600',
    color: '#1e293b',
    margin: '0 0 12px',
    lineHeight: '1.3',
  },
  // ── Formula panel (slate + dusty denim) ────────────────────
  formulaPanel: {
    display: 'flex',
    background: FORMULA_BG,
    border: `0.5px solid ${FORMULA_BORDER}`,
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5)',
    margin: '4px 0 2px',
  },
  formulaAccentBar: {
    width: '3px',
    background: FORMULA_ACCENT_BAR,
    flexShrink: 0,
  },
  formulaInner: {
    flex: 1,
    padding: '22px 18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60px',
  },
  cardFormula: {
    fontSize: '17px',
    color: FORMULA_INK,
    lineHeight: '1.7',
    margin: 0,
    textAlign: 'center',
    width: '100%',
  },
  // ───────────────────────────────────────────────────────────
  cardToggle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '14px 0 4px',
    cursor: 'pointer',
    color: FORMULA_INK,
    fontSize: '20px',
    fontWeight: '500',
    userSelect: 'none',
  },
  cardDetail: (open) => ({
    borderTop: '1.5px solid #e2e8f0',
    background: '#f0f4fc',
    overflow: 'hidden',
    maxHeight: open ? '5000px' : '0',
    padding: open ? '20px 26px' : '0 26px',
    transition: 'max-height 0.35s ease, padding 0.3s ease',
  }),
  tabBody: {
    padding: '20px 22px',
    border: '1.5px solid #d0d9ed',
    borderRadius: '0 8px 8px 8px',
    fontSize: '17px',
    color: '#475569',
    lineHeight: '1.7',
    background: '#fff',
    minHeight: '60px',
  },
  sidebar: (visible, leftPos) => ({
    position: 'fixed',
    top: '20px',
    left: `${leftPos}px`,
    width: '200px',
    background: '#fff',
    border: '1.5px solid #d0d9ed',
    borderRadius: '12px',
    padding: '16px 14px',
    maxHeight: 'calc(100vh - 40px)',
    overflowY: 'auto',
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(12px)',
    transition: 'opacity 0.3s, transform 0.3s',
    pointerEvents: visible ? 'auto' : 'none',
    zIndex: 50,
    ...noScroll,
  }),
  sidebarGroup: {
    marginBottom: '14px',
  },
  empty: {
    textAlign: 'center',
    padding: '50px 20px',
    color: '#94a3b8',
    fontSize: '16px',
  },
};

// ─── Illustration ──────────────────────────────────────────────

function Illustration({ item }) {
  const { src, alt = '', caption, width } = item;
  const isSvg = typeof src === 'string' && src.trimStart().startsWith('<svg');

  return (
    <div style={{ margin: '16px 0', padding: '16px', background: '#f8fafc', borderRadius: '8px', border: '0.5px solid #e2e8f0' }}>
      {isSvg ? (
        <div style={{ maxWidth: width ? `${width}px` : '100%', margin: '0 auto' }} dangerouslySetInnerHTML={{ __html: src }} />
      ) : (
        <img src={src} alt={alt} style={{ display: 'block', margin: '0 auto', maxWidth: width ? `${width}px` : '100%', width: '100%', height: 'auto', borderRadius: '4px' }} loading="lazy" />
      )}
      {caption && <p style={{ margin: '8px 0 0', fontSize: '13px', color: '#94a3b8', textAlign: 'center', lineHeight: '1.5' }}>{processContent(caption)}</p>}
    </div>
  );
}

// ─── LinkPill ──────────────────────────────────────────────────

function LinkPill({ link }) {
  const [hovered, setHovered] = useState(false);
  const label = link.label || link.text || link.url;
  const url = link.url || link.href;
  if (!url) return null;

  return (
    <a
      href={url}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '14px',
        color: '#2563eb', textDecoration: 'none', padding: '6px 14px',
        border: '0.5px solid #e2e8f0', borderRadius: '20px',
        background: hovered ? '#eff4ff' : '#f8fafc', transition: 'background 0.15s', cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
        <path d="M3 11L11 3M11 3H6M11 3v5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {processContent(label)}
    </a>
  );
}

// ─── LinksRow ──────────────────────────────────────────────────

function LinksRow({ links }) {
  if (!links || links.length === 0) return null;
  const filtered = links.filter((l) => l && (l.url || l.href));
  if (filtered.length === 0) return null;

  return (
    <div style={{ margin: '16px 0 0', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {filtered.map((link, i) => <LinkPill key={i} link={link} />)}
    </div>
  );
}

// ─── FieldContent ──────────────────────────────────────────────

function FieldContent({ value }) {
  if (typeof value === 'string') return <div>{processContent(value)}</div>;
  if (Array.isArray(value)) return <div>{value.map((block, i) => <FieldContentBlock key={i} block={block} />)}</div>;
  if (typeof value === 'object' && value !== null) return <FieldContentBlock block={value} />;
  return null;
}

function FieldContentBlock({ block }) {
  if (typeof block === 'string') return <div>{processContent(block)}</div>;
  if (typeof block !== 'object' || block === null) return null;

  if (block.component) {
    const Component = COMPONENT_REGISTRY[block.component];
    if (Component) {
      const { component, ...props } = block;
      return <Component {...props} />;
    }
  }

  const { text, links, illustrations } = block;
  const illustrationList = normalizeArray(illustrations);
  const linkList = normalizeArray(links);

  return (
    <div>
      {text && <div>{processContent(text)}</div>}
      {illustrationList.map((ill, i) => <Illustration key={i} item={ill} />)}
      <LinksRow links={linkList} />
    </div>
  );
}

// ─── AlphaButton ───────────────────────────────────────────────

function AlphaButton({ letter, active, disabled, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      style={{
        width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '15px', fontWeight: '600', fontFamily: 'inherit', borderRadius: '7px', border: 'none',
        cursor: disabled ? 'default' : 'pointer', pointerEvents: disabled ? 'none' : 'auto',
        background: active ? ACCENT : hovered ? ACCENT_HOVER : 'transparent',
        color: active ? '#fff' : disabled ? '#cbd5e1' : ACCENT,
        transition: 'all 0.12s', flexShrink: 0,
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {letter}
    </button>
  );
}

// ─── ToggleButton ──────────────────────────────────────────────

function ToggleButton({ label, active, icon, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      style={{
        display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 22px',
        border: 'none', borderRadius: '9px', cursor: 'pointer', fontFamily: 'inherit',
        fontSize: '17px', fontWeight: '500',
        background: active ? ACCENT : hovered ? '#e2e8f0' : 'transparent',
        color: active ? '#fff' : '#475569', transition: 'all 0.15s',
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {icon}
      {label}
    </button>
  );
}

// ─── CategoryChip ──────────────────────────────────────────────

function CategoryChip({ label, active, count, onToggle, onNavigate }) {
  const [hovered, setHovered] = useState(false);
  const [navHovered, setNavHovered] = useState(false);

  const checkSvg = (
    <svg width="14" height="14" viewBox="0 0 12 12">
      <polyline points="2,6 5,9 10,3" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const arrowSvg = (
    <svg width="14" height="14" viewBox="0 0 12 12">
      <path d="M2 6h8M7 3l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 17px',
        border: active ? `1.5px solid ${ACCENT}` : hovered ? '1.5px solid #93aee0' : '1.5px solid #d0d9ed',
        borderRadius: '12px', background: active ? ACCENT_LIGHT : '#fff',
        cursor: 'pointer', transition: 'border-color 0.15s, background 0.15s', gap: '10px',
      }}
      onClick={onToggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: 21, height: 21, borderRadius: '4px',
          border: active ? `1.5px solid ${ACCENT}` : '1.5px solid #94a3b8',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          background: active ? ACCENT : '#fff', transition: 'all 0.15s',
        }}>
          {active && checkSvg}
        </div>
        <span style={{ fontSize: '17px', fontWeight: '500', color: '#1e293b' }}>{processContent(label)}</span>
        <span style={{ fontSize: '15px', color: '#94a3b8' }}>({count})</span>
      </div>
      <button
        style={{
          display: 'flex', alignItems: 'center', gap: '4px', padding: '5px 14px',
          borderRadius: '18px', border: `1px solid ${navHovered ? ACCENT : '#d0d9ed'}`,
          background: navHovered ? ACCENT_HOVER : '#fff', fontSize: '15px', fontWeight: '500',
          fontFamily: 'inherit', color: ACCENT, cursor: 'pointer', flexShrink: 0,
          transition: 'background 0.12s, border-color 0.12s',
        }}
        onMouseEnter={() => setNavHovered(true)}
        onMouseLeave={() => setNavHovered(false)}
        onClick={(e) => { e.stopPropagation(); onNavigate(); }}
      >
        Go to {arrowSvg}
      </button>
    </div>
  );
}

// ─── ClearButton ───────────────────────────────────────────────

function ClearButton({ onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      style={{
        display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 20px',
        border: '1px solid red', background: hovered ? '#fef2f2' : 'none',
        borderRadius: '12px', fontSize: '17px', fontWeight: '500', fontFamily: 'inherit',
        color: '#dc2626', cursor: 'pointer', transition: 'background 0.15s',
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      &#10005; Clear
    </button>
  );
}

// ─── TermItem ──────────────────────────────────────────────────

function TermItem({ item, onNavigate }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`#${toId(item.name)}`}
      style={{
        padding: '10px 14px', fontSize: '17px', color: hovered ? ACCENT : '#334155',
        borderRadius: '7px', cursor: 'pointer', transition: 'all 0.12s', textDecoration: 'none',
        display: 'flex', alignItems: 'baseline', gap: '10px',
        background: hovered ? ACCENT_LIGHT : 'transparent',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={(e) => { e.preventDefault(); onNavigate(toId(item.name)); }}
    >
      <span style={{ fontSize: '16px', fontWeight: '600', color: ACCENT, width: '16px', flexShrink: 0 }}>{item.name[0]}</span>
      {processContent(item.name)}
      <span style={{ fontSize: '15px', color: '#94a3b8', marginLeft: 'auto', flexShrink: 0, whiteSpace: 'nowrap' }}>{item.category}</span>
    </a>
  );
}

// ─── TocItem ───────────────────────────────────────────────────

function TocItem({ item, isOpen, onToggle, onNavigate }) {
  const [hovered, setHovered] = useState(false);
  const id = toId(item.name);

  return (
    <div>
      <button
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
          padding: '10px 17px', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
          textAlign: 'left', fontSize: '16px', color: '#334155',
          background: isOpen ? '#f0f4ff' : hovered ? '#f8fafc' : 'transparent', transition: 'background 0.1s',
        }}
        onClick={() => onToggle(id)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span>{item.name}</span>
        <svg width="16" height="16" viewBox="0 0 14 14" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', color: '#94a3b8', flexShrink: 0 }}>
          <polyline points="4,5 7,8 10,5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {isOpen && (
        <div style={S.tocPeek}>
          <div style={S.tocPeekFormula}>{processContent(item.formula)}</div>
          <a style={{ fontSize: '14px', color: ACCENT, cursor: 'pointer', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); onNavigate(id); }}>
            Learn More &#8595;
          </a>
        </div>
      )}
    </div>
  );
}

// ─── CardLink ──────────────────────────────────────────────────
// Source link under the formula. Same denim color as formula ink.

function CardLink({ link }) {
  const [hovered, setHovered] = useState(false);
  if (!link || (!link.url && !link.href)) return null;
  const label = link.label || link.text || link.url || link.href;
  const url = link.url || link.href;

  return (
    <div>
      <a
        href={url}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '18px',
          color: hovered ? FORMULA_INK_HOVER : FORMULA_INK, textDecoration: 'none', padding: '12px 0 0',
          cursor: 'pointer', fontWeight: '500', transition: 'color 0.15s',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <svg width="16" height="16" viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
          <path d="M3 11L11 3M11 3H6M11 3v5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {processContent(label)}
      </a>
    </div>
  );
}

// ─── BackToTop ─────────────────────────────────────────────────
// Right-aligned. Same denim color as formula ink.

function BackToTop() {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ textAlign: 'right', padding: '12px 0 4px' }}>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          cursor: 'pointer',
          color: hovered ? FORMULA_INK_HOVER : FORMULA_INK,
          fontSize: '20px',
          fontWeight: '500',
          userSelect: 'none',
          transition: 'color 0.15s',
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
          <polyline points="3,9 7,5 11,9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to top
      </span>
    </div>
  );
}

// ─── TabButton ─────────────────────────────────────────────────

function TabButton({ label, active, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      style={{
        padding: '10px 22px', fontSize: '15px', fontWeight: '500', borderRadius: '8px 8px 0 0',
        border: '1.5px solid', borderBottom: 'none', cursor: 'pointer', marginRight: '3px',
        textTransform: 'capitalize', transition: 'background 0.15s, color 0.15s',
        background: active ? ACCENT : hovered ? '#dae2f3' : '#e4eaf5',
        color: active ? '#fff' : '#475569', borderColor: active ? ACCENT : '#d0d9ed',
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {processContent(label)}
    </span>
  );
}

// ─── FormulaCard ───────────────────────────────────────────────

function FormulaCard({ item, isHighlighted, onToggle, isOpen }) {
  const hasFields = item.fields && typeof item.fields === 'object' && !Array.isArray(item.fields) && Object.keys(item.fields).length > 0;
  const [activeTab, setActiveTab] = useState(0);
  const [hovered, setHovered] = useState(false);
  const fieldEntries = hasFields ? Object.entries(item.fields) : [];
  const itemId = toId(item.name);

  return (
    <div
      id={itemId}
      style={{
        border: isHighlighted ? `2px solid ${ACCENT}` : hovered ? '1.5px solid #93aee0' : '1.5px solid #d0d9ed',
        borderRadius: '12px', marginBottom: '12px', overflow: 'hidden',
        background: isHighlighted ? '#f8faff' : '#fff',
        transition: 'border-color 0.2s, background 0.2s', scrollMarginTop: '130px',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={S.cardBody}>
        <h3 style={S.cardName}>{processContent(item.name)}</h3>

        <div style={S.formulaPanel}>
          <div style={S.formulaAccentBar} />
          <div style={S.formulaInner}>
            <div style={S.cardFormula}>{processContent(item.formula)}</div>
          </div>
        </div>

        {item.link && <CardLink link={item.link} />}
        {hasFields && (
          <div style={S.cardToggle} onClick={() => onToggle(itemId)}>
            {isOpen ? 'Hide details' : 'See details'}
            <svg width="16" height="16" viewBox="0 0 14 14" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }}>
              <polyline points="3,5 7,9 11,5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
        {!isOpen && <BackToTop />}
      </div>

      {hasFields && (
        <div style={S.cardDetail(isOpen)}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
            {fieldEntries.map(([key], i) => (
              <TabButton key={key} label={key.replace(/_/g, ' ')} active={i === activeTab} onClick={() => setActiveTab(i)} />
            ))}
          </div>
          <div style={S.tabBody}>
            <FieldContent value={fieldEntries[activeTab]?.[1] || ''} />
          </div>
          <BackToTop />
        </div>
      )}
    </div>
  );
}

// ─── SidebarLink ───────────────────────────────────────────────

function SidebarLink({ item, active, onNavigate }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`#${toId(item.name)}`}
      style={{
        display: 'block', padding: '3px 8px', fontSize: '15px',
        color: active ? ACCENT : hovered ? ACCENT : '#64748b',
        fontWeight: active ? '600' : '400', textDecoration: 'none',
        borderLeft: `2px solid ${active || hovered ? ACCENT : 'transparent'}`,
        borderRadius: '0 4px 4px 0', background: active || hovered ? ACCENT_LIGHT : 'transparent',
        transition: 'all 0.12s', cursor: 'pointer', whiteSpace: 'normal', wordBreak: 'break-word', lineHeight: '1.3',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={(e) => { e.preventDefault(); onNavigate(toId(item.name)); }}
    >
      {processContent(item.name)}
    </a>
  );
}

// ─── Icons ─────────────────────────────────────────────────────

const GridIcon = (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
    <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
    <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
    <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

const ListIcon = (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
    <line x1="1" y1="3" x2="15" y2="3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <line x1="1" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <line x1="1" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export default function FormulasTOC({
  data = [],
  groupByField = 'category',
  type = 'Formula',
}) {
  const [view, setView] = useState('cards');
  const [activeLetter, setActiveLetter] = useState(null);
  const [activeCats, setActiveCats] = useState(new Set());
  const [openTocItems, setOpenTocItems] = useState(new Set());
  const [openCards, setOpenCards] = useState(new Set());
  const [highlightedId, setHighlightedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [sidebarLeft, setSidebarLeft] = useState(0);
  const [activeItemId, setActiveItemId] = useState(null);
  const [activeSidebarCat, setActiveSidebarCat] = useState(null);

  const navPanelRef = useRef(null);
  const cardsRef = useRef(null);
  const highlightTimer = useRef(null);
  const observerRef = useRef(null);

  const categories = useMemo(() => [...new Set(data.map((d) => d[groupByField]))], [data, groupByField]);

  const catCounts = useMemo(() => {
    const counts = {};
    data.forEach((d) => { const key = d[groupByField] || 'Other'; counts[key] = (counts[key] || 0) + 1; });
    return counts;
  }, [data, groupByField]);

  const usedLetters = useMemo(() => new Set(data.map((d) => d.name[0].toUpperCase())), [data]);

  const grouped = useMemo(() => {
    const lower = searchTerm.toLowerCase();
    const filtered = lower
      ? data.filter((d) =>
          d.name?.toLowerCase().includes(lower) ||
          d.formula?.toLowerCase().includes(lower) ||
          (d.fields && typeof d.fields === 'object' &&
            Object.values(d.fields).some((v) => {
              if (typeof v === 'string') return v.toLowerCase().includes(lower);
              if (typeof v === 'object' && v?.text) return v.text.toLowerCase().includes(lower);
              return false;
            })))
      : data;

    const groups = {};
    filtered.forEach((d) => { const key = d[groupByField] || 'Other'; if (!groups[key]) groups[key] = []; groups[key].push(d); });
    return groups;
  }, [data, searchTerm, groupByField]);

  const totalCount = useMemo(() => Object.values(grouped).reduce((sum, arr) => sum + arr.length, 0), [grouped]);

  const navFiltered = useMemo(() => {
    let result = data;
    if (activeLetter) result = result.filter((d) => d.name[0].toUpperCase() === activeLetter);
    if (activeCats.size > 0) result = result.filter((d) => activeCats.has(d[groupByField]));
    return [...result].sort((a, b) => a.name.localeCompare(b.name));
  }, [data, activeLetter, activeCats, groupByField]);

  const toggleLetter = useCallback((letter) => { setActiveLetter((prev) => (prev === letter ? null : letter)); }, []);
  const toggleCat = useCallback((cat) => { setActiveCats((prev) => { const next = new Set(prev); if (next.has(cat)) next.delete(cat); else next.add(cat); return next; }); }, []);
  const clearFilters = useCallback(() => { setActiveCats(new Set()); setActiveLetter(null); }, []);
  const toggleTocItem = useCallback((id) => { setOpenTocItems((prev) => { const next = new Set(); if (!prev.has(id)) next.add(id); return next; }); }, []);
  const toggleCard = useCallback((id) => { setOpenCards((prev) => { const next = new Set(prev); if (next.has(id)) next.delete(id); else next.add(id); return next; }); }, []);

  const scrollToItem = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 130;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  }, []);

  const navigateToItem = useCallback((id) => {
    setSearchTerm('');
    const hasFields = data.some((d) => {
      const did = toId(d.name);
      return did === id && d.fields && typeof d.fields === 'object' && Object.keys(d.fields).length > 0;
    });
    if (hasFields) setOpenCards((prev) => new Set(prev).add(id));
    setHighlightedId(id);
    clearTimeout(highlightTimer.current);
    highlightTimer.current = setTimeout(() => setHighlightedId(null), 3000);
    requestAnimationFrame(() => { setTimeout(() => scrollToItem(id), 100); });
  }, [data, scrollToItem]);

  const navigateToCategory = useCallback((cat) => {
    const categoryId = `category_${cat.toLowerCase().replace(/\s+/g, '_')}`;
    const el = document.getElementById(categoryId);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 140;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  }, []);

  useEffect(() => { const hash = window.location.hash.slice(1); if (hash) setTimeout(() => navigateToItem(hash), 150); }, [navigateToItem]);

  useEffect(() => {
    const onHashChange = () => { const hash = window.location.hash.slice(1); if (hash) navigateToItem(hash); };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [navigateToItem]);

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const hash = a.getAttribute('href').slice(1);
      if (hash) { e.preventDefault(); window.history.pushState(null, '', `#${hash}`); navigateToItem(hash); }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [navigateToItem]);

  useEffect(() => {
    const check = () => {
      if (!navPanelRef.current) return;
      const rect = navPanelRef.current.getBoundingClientRect();
      const footer = document.querySelector('footer');
      const pastFooter = footer ? footer.getBoundingClientRect().top < window.innerHeight : false;
      const sidebarW = 200; const gap = 24; let left = 20;
      if (cardsRef.current) { const cardsRect = cardsRef.current.getBoundingClientRect(); left = cardsRect.left - sidebarW - gap; }
      const show = rect.bottom < 0 && window.innerWidth >= 1100 && !pastFooter && left > 10;
      setSidebarVisible(show);
      setSidebarLeft(Math.max(10, left));
    };
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check, { passive: true });
    check();
    return () => { window.removeEventListener('scroll', check); window.removeEventListener('resize', check); };
  }, []);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveItemId(id);
          const item = data.find((d) => toId(d.name) === id);
          if (item) setActiveSidebarCat(item[groupByField]);
        }
      });
    }, { rootMargin: '-80px 0px -60% 0px', threshold: 0 });
    data.forEach((item) => { const el = document.getElementById(toId(item.name)); if (el) observer.observe(el); });
    observerRef.current = observer;
    return () => observer.disconnect();
  }, [data, grouped, groupByField]);

  const tocGridStyle = useMemo(() => {
    const colCount = categories.length <= 2 ? 2 : categories.length <= 4 ? categories.length : 4;
    return { ...S.tocGrid, gridTemplateColumns: `repeat(${colCount}, 1fr)` };
  }, [categories]);

  return (
    <>
      <style>{HIDE_SCROLLBAR_CSS}</style>

      <div style={S.outerWrap}>
        <div ref={navPanelRef} style={{ marginBottom: 0 }}>
          <div style={S.toggleWrap}>
            <div style={S.toggleTrack}>
              <ToggleButton label="Categories" icon={GridIcon} active={view === 'cards'} onClick={() => setView('cards')} />
              <ToggleButton label="Index" icon={ListIcon} active={view === 'index'} onClick={() => setView('index')} />
            </div>
          </div>

          {view === 'cards' && (
            <div style={tocGridStyle}>
              {categories.map((cat) => {
                const items = data.filter((d) => d[groupByField] === cat);
                return (
                  <div key={cat} style={S.tocCard}>
                    <div style={S.tocCardHeader}>{cat}</div>
                    <div style={S.tocCardBody}>
                      {items.map((f) => <TocItem key={f.name} item={f} isOpen={openTocItems.has(toId(f.name))} onToggle={toggleTocItem} onNavigate={navigateToItem} />)}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {view === 'index' && (
            <div style={S.navPanel}>
              <div className="ftoc-no-scrollbar" style={S.alphaBar}>
                {ALL_LETTERS.map((l) => <AlphaButton key={l} letter={l} active={activeLetter === l} disabled={!usedLetters.has(l)} onClick={() => toggleLetter(l)} />)}
              </div>
              <div className="ftoc-no-scrollbar" style={S.termGrid}>
                {navFiltered.map((item) => <TermItem key={item.name} item={item} onNavigate={navigateToItem} />)}
              </div>
              <div style={S.catFilterRow}>
                {categories.map((cat) => <CategoryChip key={cat} label={cat} active={activeCats.has(cat)} count={catCounts[cat]} onToggle={() => toggleCat(cat)} onNavigate={() => navigateToCategory(cat)} />)}
                {(activeCats.size > 0 || activeLetter) && <ClearButton onClick={clearFilters} />}
              </div>
              <div style={S.navStatus}>{navFiltered.length} of {data.length} {type.toLowerCase()}s</div>
            </div>
          )}
        </div>
      </div>

      <div ref={cardsRef} style={S.innerWrap}>
        <div style={S.searchBar}>
          <div style={S.searchWrapper}>
            <input
              type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)}
              placeholder={`Search in ${type}s...`}
              style={{
                width: '100%', padding: '13px 36px 13px 18px',
                border: searchFocused ? `2px solid ${ACCENT}` : '2px solid transparent',
                borderRadius: '28px', fontSize: '16px', fontFamily: 'inherit', outline: 'none',
                background: '#fff', color: '#1e293b', boxSizing: 'border-box', transition: 'border-color 0.2s',
              }}
            />
            {searchTerm && <button style={S.searchClear} onClick={() => setSearchTerm('')} aria-label="Clear search">&#10005;</button>}
          </div>
          <span style={S.searchCount}>{totalCount} {totalCount === 1 ? type.toLowerCase() : `${type.toLowerCase()}s`}</span>
        </div>

        {Object.keys(grouped).length === 0 ? (
          <div style={S.empty}>No {type.toLowerCase()}s found for &quot;{searchTerm}&quot;</div>
        ) : (
          Object.entries(grouped).map(([group, items]) => {
            const categoryId = `category_${group.toLowerCase().replace(/\s+/g, '_')}`;
            return (
              <div key={group} id={categoryId} style={{ marginBottom: '40px' }}>
                <div style={S.groupHeader}>
                  <h2 style={S.groupTitle}>{group}</h2>
                  <span style={S.groupCount}>({items.length} {items.length === 1 ? type.toLowerCase() : `${type.toLowerCase()}s`})</span>
                </div>
                {items.map((item) => {
                  const id = toId(item.name);
                  return <FormulaCard key={id} item={item} isHighlighted={highlightedId === id} isOpen={openCards.has(id)} onToggle={toggleCard} />;
                })}
              </div>
            );
          })
        )}
      </div>

      <div className="ftoc-no-scrollbar" style={S.sidebar(sidebarVisible, sidebarLeft)}>
        {categories.map((cat) => {
          const items = data.filter((d) => d[groupByField] === cat);
          return (
            <div key={cat} style={S.sidebarGroup}>
              <div style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#1e40af', marginBottom: '4px', paddingLeft: '8px' }}>
                {processContent(cat)}
              </div>
              {items.map((item) => <SidebarLink key={item.name} item={item} active={activeItemId === toId(item.name)} onNavigate={navigateToItem} />)}
            </div>
          );
        })}
      </div>
    </>
  );
}