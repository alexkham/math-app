
// import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
// import { processContent } from '../../../utils/contentProcessor';

// const toId = (name) => name.toLowerCase().replace(/\s+/g, '_');

// const ALL_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// const ACCENT        = '#4a6cf7';
// const ACCENT_LIGHT  = '#eef1fd';
// const ACCENT_BORDER = '#cdd5f8';
// const ACCENT_HOVER  = '#dbe1fc';

// // ─── Styles ────────────────────────────────────────────────────

// const hideScrollbar = {
//   scrollbarWidth: 'none',
//   msOverflowStyle: 'none',
// };

// const hideScrollbarCSS = `
//   .catlist-no-scrollbar::-webkit-scrollbar { display: none; }
// `;

// const styles = {
//   // ── Intro Article ──
//   article: {
//     background: '#fff',
//     border: '1px solid #e4e8f0',
//     borderLeft: `4px solid ${ACCENT}`,
//     borderRadius: '8px',
//     padding: '24px 28px',
//     maxWidth: '1066px',
//     margin: '0 auto 24px',
//     lineHeight: '1.75',
//     fontSize: '18px',
//     color: '#2c2c3e',
//     fontFamily: "'Georgia', 'Times New Roman', serif",
//   },
//   articleHeading: {
//     fontFamily: "'Georgia', 'Times New Roman', serif",
//     fontSize: '19px',
//     fontWeight: '600',
//     color: ACCENT,
//     marginBottom: '12px',
//     letterSpacing: '0.01em',
//   },
//   articleContent: {
//     color: '#3a3a50',
//   },
//   pillsRow: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '7px',
//     marginTop: '14px',
//   },
//   pill: {
//     background: ACCENT_LIGHT,
//     color: ACCENT,
//     borderRadius: '20px',
//     padding: '3px 12px',
//     fontSize: '12px',
//     fontFamily: 'sans-serif',
//     fontWeight: '500',
//     border: `1px solid ${ACCENT_BORDER}`,
//     cursor: 'pointer',
//     transition: 'background 0.15s, border-color 0.15s',
//   },
//   pillHover: {
//     background: ACCENT_HOVER,
//     borderColor: ACCENT,
//   },

//   // ── Navigation Box ──
//   topNav: {
//     background: '#fff',
//     border: '1.5px solid #d0d9ed',
//     borderRadius: '14px',
//     overflow: 'hidden',
//     maxWidth: '820px',
//     margin: '0 auto 36px',
//   },
//   alphaBar: {
//     display: 'flex',
//     flexWrap: 'nowrap',
//     gap: '1px',
//     padding: '10px 14px',
//     background: '#f8fafc',
//     borderBottom: '1.5px solid #e2e8f0',
//     justifyContent: 'center',
//     overflowX: 'auto',
//     ...hideScrollbar,
//   },
//   filterRow: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '6px',
//     padding: '14px 20px',
//     borderBottom: '1px solid #e2e8f0',
//   },
//   termList: {
//     padding: '16px 20px',
//     maxHeight: '340px',
//     overflowY: 'auto',
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr',
//     gap: '2px 20px',
//     ...hideScrollbar,
//   },
//   status: {
//     padding: '8px 20px 14px',
//     fontSize: '15px',
//     color: '#94a3b8',
//     borderTop: '1px solid #e2e8f0',
//     textAlign: 'right',
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
//     ...hideScrollbar,
//   }),
// };

// // ─── AlphaButton ───────────────────────────────────────────────

// function AlphaButton({ letter, active, disabled, onClick }) {
//   const [hovered, setHovered] = useState(false);

//   const style = {
//     width: '27px',
//     height: '27px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '13px',
//     fontWeight: '600',
//     fontFamily: 'inherit',
//     borderRadius: '6px',
//     border: 'none',
//     cursor: disabled ? 'default' : 'pointer',
//     pointerEvents: disabled ? 'none' : 'auto',
//     background: active ? ACCENT : hovered ? ACCENT_HOVER : 'transparent',
//     color: active ? '#fff' : disabled ? '#cbd5e1' : ACCENT,
//     transition: 'all 0.12s',
//     flexShrink: 0,
//   };

//   return (
//     <button
//       style={style}
//       onClick={onClick}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {letter}
//     </button>
//   );
// }

// // ─── ClearButton ───────────────────────────────────────────────

// function ClearButton({ onClick }) {
//   const [hovered, setHovered] = useState(false);

//   const style = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '5px',
//     padding: '8px 16px',
//     border: 'solid 1px red',
//     background: hovered ? '#fef2f2' : 'none',
//     borderRadius: '10px',
//     fontSize: '15px',
//     fontWeight: '500',
//     fontFamily: 'inherit',
//     color: '#dc2626',
//     cursor: 'pointer',
//     transition: 'background 0.15s',
//   };

//   return (
//     <button
//       style={style}
//       onClick={onClick}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       &#10005; Clear
//     </button>
//   );
// }

// // ─── CategoryCard ──────────────────────────────────────────────

// function CategoryCard({ label, active, count, onToggle, onNavigate }) {
//   const [hovered, setHovered] = useState(false);
//   const [navHovered, setNavHovered] = useState(false);

//   const cardStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '8px 14px',
//     border: active
//       ? `1.5px solid ${ACCENT}`
//       : hovered
//       ? '1.5px solid #93aee0'
//       : '1.5px solid #d0d9ed',
//     borderRadius: '10px',
//     background: active ? ACCENT_LIGHT : '#fff',
//     cursor: 'pointer',
//     transition: 'border-color 0.15s, background 0.15s',
//     gap: '8px',
//   };

//   const checkStyle = {
//     width: '18px',
//     height: '18px',
//     borderRadius: '3px',
//     border: active ? `1.5px solid ${ACCENT}` : '1.5px solid #94a3b8',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexShrink: 0,
//     background: active ? ACCENT : '#fff',
//     transition: 'all 0.15s',
//   };

//   const navBtnStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '3px',
//     padding: '4px 11px',
//     borderRadius: '16px',
//     border: '1px solid',
//     borderColor: navHovered ? ACCENT : '#d0d9ed',
//     background: navHovered ? ACCENT_HOVER : '#fff',
//     fontSize: '13px',
//     fontWeight: '500',
//     fontFamily: 'inherit',
//     color: ACCENT,
//     cursor: 'pointer',
//     flexShrink: 0,
//     transition: 'background 0.12s, border-color 0.12s',
//   };

//   const checkSvg = (
//     <svg width="12" height="12" viewBox="0 0 12 12">
//       <polyline points="2,6 5,9 10,3" fill="none" stroke="#fff"
//         strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );

//   const arrowSvg = (
//     <svg width="12" height="12" viewBox="0 0 12 12">
//       <path d="M2 6h8M7 3l3 3-3 3" fill="none" stroke="currentColor"
//         strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );

//   return (
//     <div
//       style={cardStyle}
//       onClick={onToggle}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//         <div style={checkStyle}>{active && checkSvg}</div>
//         <span style={{ fontSize: '15px', fontWeight: '500', color: '#1e293b' }}>
//           {processContent(label)}
//         </span>
//         <span style={{ fontSize: '13px', color: '#94a3b8' }}>({count})</span>
//       </div>
//       <button
//         style={navBtnStyle}
//         onMouseEnter={() => setNavHovered(true)}
//         onMouseLeave={() => setNavHovered(false)}
//         onClick={(e) => { e.stopPropagation(); onNavigate(); }}
//       >
//         Go to {arrowSvg}
//       </button>
//     </div>
//   );
// }

// // ─── TermItem ──────────────────────────────────────────────────

// function TermItem({ item, onNavigate }) {
//   const [hovered, setHovered] = useState(false);

//   const style = {
//     padding: '8px 12px',
//     fontSize: '16px',
//     color: hovered ? ACCENT : '#334155',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     transition: 'all 0.12s',
//     textDecoration: 'none',
//     display: 'flex',
//     alignItems: 'baseline',
//     gap: '8px',
//     background: hovered ? ACCENT_LIGHT : 'transparent',
//   };

//   return (
//     <a
//       href={`#${toId(item.name)}`}
//       style={style}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onClick={(e) => { e.preventDefault(); onNavigate(toId(item.name)); }}
//     >
//       <span style={{ fontSize: '14px', fontWeight: '600', color: ACCENT, width: '14px', flexShrink: 0 }}>
//         {item.name[0]}
//       </span>
//       {processContent(item.name)}
//       <span style={{ fontSize: '14px', color: '#94a3b8', marginLeft: 'auto', flexShrink: 0 }}>
//         {item.category}
//       </span>
//     </a>
//   );
// }

// // ─── SidebarLink ───────────────────────────────────────────────

// function SidebarLink({ item, active, onNavigate }) {
//   const [hovered, setHovered] = useState(false);

//   const style = {
//     display: 'block',
//     padding: '3px 8px',
//     fontSize: '15px',
//     color: active ? ACCENT : hovered ? ACCENT : '#64748b',
//     fontWeight: active ? '600' : '400',
//     textDecoration: 'none',
//     borderLeft: `2px solid ${active || hovered ? ACCENT : 'transparent'}`,
//     borderRadius: '0 4px 4px 0',
//     background: active || hovered ? ACCENT_LIGHT : 'transparent',
//     transition: 'all 0.12s',
//     cursor: 'pointer',
//     whiteSpace: 'normal',
//     wordBreak: 'break-word',
//     lineHeight: '1.3',
//   };

//   return (
//     <a
//       href={`#${toId(item.name)}`}
//       style={style}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onClick={(e) => { e.preventDefault(); onNavigate(toId(item.name)); }}
//     >
//       {processContent(item.name)}
//     </a>
//   );
// }

// // ─── PillButton ───────────────────────────────────────────────

// function PillButton({ label, onClick }) {
//   const [hovered, setHovered] = useState(false);

//   const style = {
//     ...styles.pill,
//     ...(hovered ? styles.pillHover : {}),
//   };

//   return (
//     <span
//       style={style}
//       onClick={onClick}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {label}
//     </span>
//   );
// }

// // ─── IntroArticle (internal, optional) ────────────────────────

// function IntroArticle({ introArticle, categories, navigateToCategory }) {
//   const [expanded, setExpanded] = useState(false);
//   const [needsToggle, setNeedsToggle] = useState(false);
//   const contentRef = useRef(null);

//   const { heading, content } = !introArticle
//     ? { heading: undefined, content: undefined }
//     : typeof introArticle === 'string'
//       ? { heading: undefined, content: introArticle }
//       : introArticle;

//   const COLLAPSED_HEIGHT = 96;

//   useEffect(() => {
//     if (contentRef.current) {
//       setNeedsToggle(contentRef.current.scrollHeight > COLLAPSED_HEIGHT + 20);
//     }
//   }, [content]);

//   if (!introArticle) return null;

//   const displayHeading = heading !== undefined ? heading : 'About This Glossary';

//   const contentWrapStyle = {
//     overflow: 'hidden',
//     maxHeight: expanded || !needsToggle ? 'none' : `${COLLAPSED_HEIGHT}px`,
//     position: 'relative',
//     transition: 'max-height 0.3s ease',
//   };

//   const fadeStyle = {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: '40px',
//     background: 'linear-gradient(transparent, #fff)',
//     pointerEvents: 'none',
//   };

//   const toggleStyle = {
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '4px',
//     background: 'none',
//     border: 'none',
//     color: ACCENT,
//     fontSize: '14px',
//     fontWeight: '500',
//     fontFamily: 'sans-serif',
//     cursor: 'pointer',
//     padding: '6px 0 0',
//   };

//   return (
//     <article style={styles.article}>
//       {displayHeading && <h2 style={styles.articleHeading}>{displayHeading}</h2>}
//       {content && (
//         <div style={contentWrapStyle}>
//           <div ref={contentRef} style={styles.articleContent}>
//             {processContent(content)}
//           </div>
//           {!expanded && needsToggle && <div style={fadeStyle} />}
//         </div>
//       )}
//       {needsToggle && (
//         <button style={toggleStyle} onClick={() => setExpanded((p) => !p)}>
//           {expanded ? 'Show less' : 'Read more'}
//           <svg width="12" height="12" viewBox="0 0 12 12" style={{
//             transform: expanded ? 'rotate(180deg)' : 'none',
//             transition: 'transform 0.2s',
//           }}>
//             <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor"
//               strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </button>
//       )}
//       {categories && categories.length > 0 && (
//         <div style={styles.pillsRow}>
//           {categories.map((cat, i) => (
//             <PillButton
//               key={i}
//               label={cat}
//               onClick={() => navigateToCategory(cat)}
//             />
//           ))}
//         </div>
//       )}
//     </article>
//   );
// }

// // ─── CategoriesList (main export) ──────────────────────────────

// const CategoriesList = ({
//   data,
//   categoryExplanations = {},
//   baseUrl = '/',
//   introArticle = null,       // optional — { heading?, content } or just a string
// }) => {
//   const [activeLetter, setActiveLetter] = useState(null);
//   const [activeCategories, setActiveCategories] = useState(new Set());
//   const [sidebarVisible, setSidebarVisible] = useState(false);
//   const [sidebarLeft, setSidebarLeft] = useState(0);
//   const [activeItemId, setActiveItemId] = useState(null);
//   const [activeSidebarCat, setActiveSidebarCat] = useState(null);
//   const topNavRef = useRef(null);
//   const observerRef = useRef(null);

//   const categories = useMemo(
//     () => [...new Set(data.map((item) => item.category))].sort(),
//     [data]
//   );

//   const categoryCounts = useMemo(() => {
//     const counts = {};
//     data.forEach((item) => {
//       counts[item.category] = (counts[item.category] || 0) + 1;
//     });
//     return counts;
//   }, [data]);

//   const usedLetters = useMemo(
//     () => new Set(data.map((d) => d.name[0].toUpperCase())),
//     [data]
//   );

//   const filtered = useMemo(() => {
//     let result = data;
//     if (activeLetter) {
//       result = result.filter((d) => d.name[0].toUpperCase() === activeLetter);
//     }
//     if (activeCategories.size > 0) {
//       result = result.filter((d) => activeCategories.has(d.category));
//     }
//     return [...result].sort((a, b) => a.name.localeCompare(b.name));
//   }, [data, activeLetter, activeCategories]);

//   const toggleLetter = useCallback((letter) => {
//     setActiveLetter((prev) => (prev === letter ? null : letter));
//   }, []);

//   const toggleCategory = useCallback((cat) => {
//     setActiveCategories((prev) => {
//       const next = new Set(prev);
//       if (next.has(cat)) next.delete(cat);
//       else next.add(cat);
//       return next;
//     });
//   }, []);

//   const navigateToItem = useCallback((id) => {
//     const el = document.getElementById(id);
//     if (!el) return;
//     const y = el.getBoundingClientRect().top + window.scrollY - 90;
//     window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
//     window.history.replaceState(null, '', window.location.pathname + window.location.search);
//     el.style.transition = 'border-color 0.25s, background 0.25s, box-shadow 0.25s';
//     el.style.borderColor = ACCENT;
//     el.style.background = ACCENT_LIGHT;
//     el.style.boxShadow = '0 0 0 3px rgba(74, 108, 247, 0.1)';
//     setTimeout(() => {
//       el.style.borderColor = '';
//       el.style.background = '';
//       el.style.boxShadow = '';
//     }, 2500);
//   }, []);

//   const navigateToCategory = useCallback((cat) => {
//     const categoryId = `category_${cat.toLowerCase().replace(/\s+/g, '_')}`;
//     const el = document.getElementById(categoryId);
//     if (!el) return;
//     const y = el.getBoundingClientRect().top + window.scrollY - 140;
//     window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
//     window.history.replaceState(null, '', window.location.pathname + window.location.search);
//     el.style.transition = 'outline-color 0.25s';
//     el.style.outline = `2px solid ${ACCENT}`;
//     el.style.outlineOffset = '6px';
//     el.style.borderRadius = '8px';
//     setTimeout(() => {
//       el.style.outline = '';
//       el.style.outlineOffset = '';
//     }, 2500);
//   }, []);

//   const updateSidebarPos = useCallback(() => {
//     const contentWidth = Math.min(820, window.innerWidth - 32);
//     const contentLeft = (window.innerWidth - contentWidth) / 2;
//     const sbLeft = contentLeft - 200 - 50;
//     setSidebarLeft(sbLeft);
//   }, []);

//   useEffect(() => {
//     const checkVisibility = () => {
//       if (!topNavRef.current) return;
//       const rect = topNavRef.current.getBoundingClientRect();
//       const footer = document.querySelector('footer');
//       const pastBottom = footer
//         ? footer.getBoundingClientRect().top < window.innerHeight
//         : false;
//       const show = rect.bottom < 0 && window.innerWidth >= 1100 && !pastBottom;
//       setSidebarVisible(show);
//     };

//     const onScroll = () => checkVisibility();
//     const onResize = () => { updateSidebarPos(); checkVisibility(); };

//     window.addEventListener('scroll', onScroll, { passive: true });
//     window.addEventListener('resize', onResize, { passive: true });
//     updateSidebarPos();
//     return () => {
//       window.removeEventListener('scroll', onScroll);
//       window.removeEventListener('resize', onResize);
//     };
//   }, [updateSidebarPos]);

//   useEffect(() => {
//     if (observerRef.current) observerRef.current.disconnect();

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const id = entry.target.id;
//             setActiveItemId(id);
//             const item = data.find((d) => toId(d.name) === id);
//             if (item) setActiveSidebarCat(item.category);
//           }
//         });
//       },
//       { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
//     );

//     data.forEach((item) => {
//       const el = document.getElementById(toId(item.name));
//       if (el) observer.observe(el);
//     });

//     observerRef.current = observer;
//     return () => observer.disconnect();
//   }, [data]);

//   const showSidebar = sidebarVisible && sidebarLeft > 10;

//   return (
//     <>
//       <style>{hideScrollbarCSS}</style>

//       {/* ── Intro Article (renders only when prop is provided) ── */}
//       <IntroArticle
//         introArticle={introArticle}
//         categories={categories}
//         navigateToCategory={navigateToCategory}
//       />

//       {/* ── Top Navigation ── */}
//       <div ref={topNavRef} style={styles.topNav}>
//         <div style={styles.alphaBar}>
//           {ALL_LETTERS.map((letter) => (
//             <AlphaButton
//               key={letter}
//               letter={letter}
//               active={activeLetter === letter}
//               disabled={!usedLetters.has(letter)}
//               onClick={() => toggleLetter(letter)}
//             />
//           ))}
//         </div>

//         <div className="catlist-no-scrollbar" style={styles.termList}>
//           {filtered.map((item) => (
//             <TermItem key={item.name} item={item} onNavigate={navigateToItem} />
//           ))}
//         </div>

//         <div style={styles.filterRow}>
//           {categories.map((cat) => (
//             <CategoryCard
//               key={cat}
//               label={cat}
//               active={activeCategories.has(cat)}
//               count={categoryCounts[cat]}
//               onToggle={() => toggleCategory(cat)}
//               onNavigate={() => navigateToCategory(cat)}
//             />
//           ))}
//           {(activeCategories.size > 0 || activeLetter) && (
//             <ClearButton onClick={() => { setActiveCategories(new Set()); setActiveLetter(null); }} />
//           )}
//         </div>

//         <div style={styles.status}>
//           {filtered.length} of {data.length} terms
//         </div>
//       </div>

//       {/* ── Sticky Sidebar ── */}
//       <div className="catlist-no-scrollbar" style={styles.sidebar(showSidebar, sidebarLeft)}>
//         {categories.map((cat) => {
//           const items = data.filter((d) => d.category === cat);
//           return (
//             <div key={cat} style={{ marginBottom: '14px' }}>
//               <div style={{
//                 fontSize: '13px',
//                 fontWeight: '600',
//                 textTransform: 'uppercase',
//                 letterSpacing: '1px',
//                 color: activeSidebarCat === cat ? ACCENT : '#94a3b8',
//                 marginBottom: '4px',
//                 paddingLeft: '8px',
//                 transition: 'color 0.2s',
//               }}>
//                 {processContent(cat)}
//               </div>
//               {items.map((item) => (
//                 <SidebarLink
//                   key={item.name}
//                   item={item}
//                   active={activeItemId === toId(item.name)}
//                   onNavigate={navigateToItem}
//                 />
//               ))}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default CategoriesList;


import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { processContent } from '../../../utils/contentProcessor';

const toId = (name) => name.toLowerCase().replace(/\s+/g, '_');

const ALL_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const ACCENT        = '#4a6cf7';
const ACCENT_LIGHT  = '#eef1fd';
const ACCENT_BORDER = '#cdd5f8';
const ACCENT_HOVER  = '#dbe1fc';

// ─── Styles ────────────────────────────────────────────────────

const hideScrollbar = {
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
};

const hideScrollbarCSS = `
  .catlist-no-scrollbar::-webkit-scrollbar { display: none; }
`;

const styles = {
  // ── Intro Article ──
  article: {
    background: '#fff',
    border: '1px solid #e4e8f0',
    borderLeft: `4px solid ${ACCENT}`,
    borderRadius: '8px',
    padding: '24px 28px',
    maxWidth: '1066px',
    margin: '0 auto 24px',
    lineHeight: '1.75',
    fontSize: '18px',
    color: '#2c2c3e',
    fontFamily: "'Georgia', 'Times New Roman', serif",
  },
  articleHeading: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    fontSize: '19px',
    fontWeight: '600',
    color: ACCENT,
    marginBottom: '12px',
    letterSpacing: '0.01em',
  },
  articleContent: {
    color: '#3a3a50',
  },
  pillsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '7px',
    marginTop: '14px',
  },
  pill: {
    background: ACCENT_LIGHT,
    color: ACCENT,
    borderRadius: '20px',
    padding: '3px 12px',
    fontSize: '12px',
    fontFamily: 'sans-serif',
    fontWeight: '500',
    border: `1px solid ${ACCENT_BORDER}`,
    cursor: 'pointer',
    transition: 'background 0.15s, border-color 0.15s',
  },
  pillHover: {
    background: ACCENT_HOVER,
    borderColor: ACCENT,
  },

  // ── Navigation Box ──
  topNav: {
    background: '#fff',
    border: '1.5px solid #d0d9ed',
    borderRadius: '14px',
    overflow: 'hidden',
    maxWidth: '820px',
    margin: '0 auto 36px',
  },
  alphaBar: {
    display: 'flex',
    flexWrap: 'nowrap',
    gap: '1px',
    padding: '10px 14px',
    background: '#f8fafc',
    borderBottom: '1.5px solid #e2e8f0',
    justifyContent: 'center',
    overflowX: 'auto',
    ...hideScrollbar,
  },
  filterRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    padding: '14px 20px',
    borderBottom: '1px solid #e2e8f0',
  },
  termList: {
    padding: '16px 20px',
    maxHeight: '340px',
    overflowY: 'auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2px 20px',
    ...hideScrollbar,
  },
  status: {
    padding: '8px 20px 14px',
    fontSize: '15px',
    color: '#94a3b8',
    borderTop: '1px solid #e2e8f0',
    textAlign: 'right',
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
    ...hideScrollbar,
  }),
};

// ─── AlphaButton ───────────────────────────────────────────────

function AlphaButton({ letter, active, disabled, onClick }) {
  const [hovered, setHovered] = useState(false);

  const style = {
    width: '27px',
    height: '27px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '13px',
    fontWeight: '600',
    fontFamily: 'inherit',
    borderRadius: '6px',
    border: 'none',
    cursor: disabled ? 'default' : 'pointer',
    pointerEvents: disabled ? 'none' : 'auto',
    background: active ? ACCENT : hovered ? ACCENT_HOVER : 'transparent',
    color: active ? '#fff' : disabled ? '#cbd5e1' : ACCENT,
    transition: 'all 0.12s',
    flexShrink: 0,
  };

  return (
    <button
      style={style}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {letter}
    </button>
  );
}

// ─── ClearButton ───────────────────────────────────────────────

function ClearButton({ onClick }) {
  const [hovered, setHovered] = useState(false);

  const style = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    padding: '8px 16px',
    border: 'solid 1px red',
    background: hovered ? '#fef2f2' : 'none',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: '500',
    fontFamily: 'inherit',
    color: '#dc2626',
    cursor: 'pointer',
    transition: 'background 0.15s',
  };

  return (
    <button
      style={style}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      &#10005; Clear
    </button>
  );
}

// ─── CategoryCard ──────────────────────────────────────────────

function CategoryCard({ label, active, count, onToggle, onNavigate }) {
  const [hovered, setHovered] = useState(false);
  const [navHovered, setNavHovered] = useState(false);

  const cardStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 14px',
    border: active
      ? `1.5px solid ${ACCENT}`
      : hovered
      ? '1.5px solid #93aee0'
      : '1.5px solid #d0d9ed',
    borderRadius: '10px',
    background: active ? ACCENT_LIGHT : '#fff',
    cursor: 'pointer',
    transition: 'border-color 0.15s, background 0.15s',
    gap: '8px',
  };

  const checkStyle = {
    width: '18px',
    height: '18px',
    borderRadius: '3px',
    border: active ? `1.5px solid ${ACCENT}` : '1.5px solid #94a3b8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    background: active ? ACCENT : '#fff',
    transition: 'all 0.15s',
  };

  const navBtnStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '3px',
    padding: '4px 11px',
    borderRadius: '16px',
    border: '1px solid',
    borderColor: navHovered ? ACCENT : '#d0d9ed',
    background: navHovered ? ACCENT_HOVER : '#fff',
    fontSize: '13px',
    fontWeight: '500',
    fontFamily: 'inherit',
    color: ACCENT,
    cursor: 'pointer',
    flexShrink: 0,
    transition: 'background 0.12s, border-color 0.12s',
  };

  const checkSvg = (
    <svg width="12" height="12" viewBox="0 0 12 12">
      <polyline points="2,6 5,9 10,3" fill="none" stroke="#fff"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const arrowSvg = (
    <svg width="12" height="12" viewBox="0 0 12 12">
      <path d="M2 6h8M7 3l3 3-3 3" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div
      style={cardStyle}
      onClick={onToggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={checkStyle}>{active && checkSvg}</div>
        <span style={{ fontSize: '15px', fontWeight: '500', color: '#1e293b' }}>
          {processContent(label)}
        </span>
        <span style={{ fontSize: '13px', color: '#94a3b8' }}>({count})</span>
      </div>
      <button
        style={navBtnStyle}
        onMouseEnter={() => setNavHovered(true)}
        onMouseLeave={() => setNavHovered(false)}
        onClick={(e) => { e.stopPropagation(); onNavigate(); }}
      >
        Go to {arrowSvg}
      </button>
    </div>
  );
}

// ─── TermItem ──────────────────────────────────────────────────

function TermItem({ item, onNavigate }) {
  const [hovered, setHovered] = useState(false);

  const style = {
    padding: '8px 12px',
    fontSize: '16px',
    color: hovered ? ACCENT : '#334155',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.12s',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'baseline',
    gap: '8px',
    background: hovered ? ACCENT_LIGHT : 'transparent',
  };

  return (
    <a
      href={`#${toId(item.name)}`}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={(e) => { e.preventDefault(); onNavigate(toId(item.name)); }}
    >
      <span style={{ fontSize: '14px', fontWeight: '600', color: ACCENT, width: '14px', flexShrink: 0 }}>
        {item.name[0]}
      </span>
      {processContent(item.name)}
      <span style={{ fontSize: '14px', color: '#94a3b8', marginLeft: 'auto', flexShrink: 0 }}>
        {item.category}
      </span>
    </a>
  );
}

// ─── SidebarLink ───────────────────────────────────────────────

function SidebarLink({ item, active, onNavigate }) {
  const [hovered, setHovered] = useState(false);

  const style = {
    display: 'block',
    padding: '3px 8px',
    fontSize: '15px',
    color: active ? ACCENT : hovered ? ACCENT : '#64748b',
    fontWeight: active ? '600' : '400',
    textDecoration: 'none',
    borderLeft: `2px solid ${active || hovered ? ACCENT : 'transparent'}`,
    borderRadius: '0 4px 4px 0',
    background: active || hovered ? ACCENT_LIGHT : 'transparent',
    transition: 'all 0.12s',
    cursor: 'pointer',
    whiteSpace: 'normal',
    wordBreak: 'break-word',
    lineHeight: '1.3',
  };

  return (
    <a
      href={`#${toId(item.name)}`}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={(e) => { e.preventDefault(); onNavigate(toId(item.name)); }}
    >
      {processContent(item.name)}
    </a>
  );
}

// ─── PillButton ───────────────────────────────────────────────

function PillButton({ label, onClick }) {
  const [hovered, setHovered] = useState(false);

  const style = {
    ...styles.pill,
    ...(hovered ? styles.pillHover : {}),
  };

  return (
    <span
      style={style}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </span>
  );
}

// ─── IntroArticle (internal, optional) ────────────────────────

function IntroArticle({ introArticle, categories, navigateToCategory }) {
  const [expanded, setExpanded] = useState(false);
  const [needsToggle, setNeedsToggle] = useState(false);
  const contentRef = useRef(null);

  const { heading, content } = !introArticle
    ? { heading: undefined, content: undefined }
    : typeof introArticle === 'string'
      ? { heading: undefined, content: introArticle }
      : introArticle;

  const COLLAPSED_HEIGHT = 96;

  useEffect(() => {
    if (contentRef.current) {
      setNeedsToggle(contentRef.current.scrollHeight > COLLAPSED_HEIGHT + 20);
    }
  }, [content]);

  /* ── No early return — render nothing via conditional JSX ── */

  const displayHeading = heading !== undefined ? heading : 'About This Glossary';

  const contentWrapStyle = {
    overflow: 'hidden',
    maxHeight: expanded || !needsToggle ? 'none' : `${COLLAPSED_HEIGHT}px`,
    position: 'relative',
    transition: 'max-height 0.3s ease',
  };

  const fadeStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40px',
    background: 'linear-gradient(transparent, #fff)',
    pointerEvents: 'none',
  };

  const toggleStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    background: 'none',
    border: 'none',
    color: ACCENT,
    fontSize: '14px',
    fontWeight: '500',
    fontFamily: 'sans-serif',
    cursor: 'pointer',
    padding: '6px 0 0',
  };

  if (!introArticle) return null;

  return (
    <article style={styles.article}>
      {displayHeading && <h2 style={styles.articleHeading}>{displayHeading}</h2>}
      {content && (
        <div style={contentWrapStyle}>
          <div ref={contentRef} style={styles.articleContent}>
            {processContent(content)}
          </div>
          {!expanded && needsToggle && <div style={fadeStyle} />}
        </div>
      )}
      {needsToggle && (
        <button style={toggleStyle} onClick={() => setExpanded((p) => !p)}>
          {expanded ? 'Show less' : 'Read more'}
          <svg width="12" height="12" viewBox="0 0 12 12" style={{
            transform: expanded ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.2s',
          }}>
            <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor"
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
      {categories && categories.length > 0 && (
        <div style={styles.pillsRow}>
          {categories.map((cat, i) => (
            <PillButton
              key={i}
              label={cat}
              onClick={() => navigateToCategory(cat)}
            />
          ))}
        </div>
      )}
    </article>
  );
}

// ─── CategoriesList (main export) ──────────────────────────────

const CategoriesList = ({
  data,
  categoryExplanations = {},
  baseUrl = '/',
  introArticle = null,       // optional — { heading?, content } or just a string
}) => {
  const [activeLetter, setActiveLetter] = useState(null);
  const [activeCategories, setActiveCategories] = useState(new Set());
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [sidebarLeft, setSidebarLeft] = useState(0);
  const [activeItemId, setActiveItemId] = useState(null);
  const [activeSidebarCat, setActiveSidebarCat] = useState(null);
  const topNavRef = useRef(null);
  const observerRef = useRef(null);

  const categories = useMemo(
    () => [...new Set(data.map((item) => item.category))].sort(),
    [data]
  );

  const categoryCounts = useMemo(() => {
    const counts = {};
    data.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, [data]);

  const usedLetters = useMemo(
    () => new Set(data.map((d) => d.name[0].toUpperCase())),
    [data]
  );

  const filtered = useMemo(() => {
    let result = data;
    if (activeLetter) {
      result = result.filter((d) => d.name[0].toUpperCase() === activeLetter);
    }
    if (activeCategories.size > 0) {
      result = result.filter((d) => activeCategories.has(d.category));
    }
    return [...result].sort((a, b) => a.name.localeCompare(b.name));
  }, [data, activeLetter, activeCategories]);

  const toggleLetter = useCallback((letter) => {
    setActiveLetter((prev) => (prev === letter ? null : letter));
  }, []);

  const toggleCategory = useCallback((cat) => {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  }, []);

  const navigateToItem = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
    el.style.transition = 'border-color 0.25s, background 0.25s, box-shadow 0.25s';
    el.style.borderColor = ACCENT;
    el.style.background = ACCENT_LIGHT;
    el.style.boxShadow = '0 0 0 3px rgba(74, 108, 247, 0.1)';
    setTimeout(() => {
      el.style.borderColor = '';
      el.style.background = '';
      el.style.boxShadow = '';
    }, 2500);
  }, []);

  const navigateToCategory = useCallback((cat) => {
    const categoryId = `category_${cat.toLowerCase().replace(/\s+/g, '_')}`;
    const el = document.getElementById(categoryId);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 140;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
    el.style.transition = 'outline-color 0.25s';
    el.style.outline = `2px solid ${ACCENT}`;
    el.style.outlineOffset = '6px';
    el.style.borderRadius = '8px';
    setTimeout(() => {
      el.style.outline = '';
      el.style.outlineOffset = '';
    }, 2500);
  }, []);

  const updateSidebarPos = useCallback(() => {
    const contentWidth = Math.min(820, window.innerWidth - 32);
    const contentLeft = (window.innerWidth - contentWidth) / 2;
    const sbLeft = contentLeft - 200 - 50;
    setSidebarLeft(sbLeft);
  }, []);

  useEffect(() => {
    const checkVisibility = () => {
      if (!topNavRef.current) return;
      const rect = topNavRef.current.getBoundingClientRect();
      const footer = document.querySelector('footer');
      const pastBottom = footer
        ? footer.getBoundingClientRect().top < window.innerHeight
        : false;
      const show = rect.bottom < 0 && window.innerWidth >= 1100 && !pastBottom;
      setSidebarVisible(show);
    };

    const onScroll = () => checkVisibility();
    const onResize = () => { updateSidebarPos(); checkVisibility(); };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    updateSidebarPos();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [updateSidebarPos]);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveItemId(id);
            const item = data.find((d) => toId(d.name) === id);
            if (item) setActiveSidebarCat(item.category);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    data.forEach((item) => {
      const el = document.getElementById(toId(item.name));
      if (el) observer.observe(el);
    });

    observerRef.current = observer;
    return () => observer.disconnect();
  }, [data]);

  const showSidebar = sidebarVisible && sidebarLeft > 10;

  return (
    <>
      <style>{hideScrollbarCSS}</style>

      {/* ── Intro Article (renders only when prop is provided) ── */}
      <IntroArticle
        introArticle={introArticle}
        categories={categories}
        navigateToCategory={navigateToCategory}
      />

      {/* ── Top Navigation ── */}
      <div ref={topNavRef} style={styles.topNav}>
        <div style={styles.alphaBar}>
          {ALL_LETTERS.map((letter) => (
            <AlphaButton
              key={letter}
              letter={letter}
              active={activeLetter === letter}
              disabled={!usedLetters.has(letter)}
              onClick={() => toggleLetter(letter)}
            />
          ))}
        </div>

        <div className="catlist-no-scrollbar" style={styles.termList}>
          {filtered.map((item) => (
            <TermItem key={item.name} item={item} onNavigate={navigateToItem} />
          ))}
        </div>

        <div style={styles.filterRow}>
          {categories.map((cat) => (
            <CategoryCard
              key={cat}
              label={cat}
              active={activeCategories.has(cat)}
              count={categoryCounts[cat]}
              onToggle={() => toggleCategory(cat)}
              onNavigate={() => navigateToCategory(cat)}
            />
          ))}
          {(activeCategories.size > 0 || activeLetter) && (
            <ClearButton onClick={() => { setActiveCategories(new Set()); setActiveLetter(null); }} />
          )}
        </div>

        <div style={styles.status}>
          {filtered.length} of {data.length} terms
        </div>
      </div>

      {/* ── Sticky Sidebar ── */}
      <div className="catlist-no-scrollbar" style={styles.sidebar(showSidebar, sidebarLeft)}>
        {categories.map((cat) => {
          const items = data.filter((d) => d.category === cat);
          return (
            <div key={cat} style={{ marginBottom: '14px' }}>
              <div style={{
                fontSize: '13px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: activeSidebarCat === cat ? ACCENT : '#94a3b8',
                marginBottom: '4px',
                paddingLeft: '8px',
                transition: 'color 0.2s',
              }}>
                {processContent(cat)}
              </div>
              {items.map((item) => (
                <SidebarLink
                  key={item.name}
                  item={item}
                  active={activeItemId === toId(item.name)}
                  onNavigate={navigateToItem}
                />
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CategoriesList;