
// import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react';
// import { processContent } from '@/app/utils/contentProcessor';

// const CategoriesList = ({ 
//   data, 
//   categoryExplanations = {}, 
//   baseUrl = '/' 
// }) => {
//   const [openCategories, setOpenCategories] = useState(new Set());
//   const categories = [...new Set(data.map(item => item.category))].sort();

//   const toggleCategory = (category) => {
//     setOpenCategories(prev => {
//       const newOpen = new Set(prev);
//       if (newOpen.has(category)) newOpen.delete(category);
//       else newOpen.add(category);
//       return newOpen;
//     });
//   };

//   const handleCategoryClick = (categoryId, e) => {
//     e.preventDefault();
//     window.location.replace(`${baseUrl}#${categoryId}`);
//     const element = document.getElementById(categoryId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div style={{
//       padding: '20px',
//       maxWidth: '800px',
//       margin: '0 auto'
//     }}>
//       {categories.map(category => {
//         const categoryId = `category_${category.toLowerCase().replace(/\s+/g, '_')}`;
//         const itemsInCategory = data.filter(item => item.category === category).length;
//         const explanation = categoryExplanations[category];
//         const isOpen = openCategories.has(category);
//         const categoryUrl = `${baseUrl}#${categoryId}`;

//         return (
//           <div key={category} style={{
//             marginBottom: '10px',
//             border: '1px solid #e2e8f0',
//             borderRadius: '8px',
//             overflow: 'hidden'
//           }}>
//             <button 
//               onClick={() => toggleCategory(category)}
//               style={{
//                 width: '100%',
//                 padding: '15px',
//                 backgroundColor: '#f8fafc',
//                 border: 'none',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//                 cursor: 'pointer',
//                 textAlign: 'left'
//               }}
//             >
//               <span style={{ 
//                 fontWeight: '600', 
//                 fontSize: '18px',
//                 color: '#2563eb'
//               }}>
//                 {category}
//                 <span style={{
//                   fontSize: '14px',
//                   color: '#6b7280',
//                   marginLeft: '8px',
//                   fontWeight: 'normal'
//                 }}>
//                   ({itemsInCategory} {itemsInCategory === 1 ? 'item' : 'items'})
//                 </span>
//               </span>
//               <ChevronDown 
//                 style={{
//                   transform: isOpen ? 'rotate(180deg)' : 'none',
//                   transition: 'transform 0.2s'
//                 }}
//               />
//             </button>
//             <div style={{
//               padding: isOpen ? '15px' : '0',
//               maxHeight: isOpen ? '500px' : '0',
//               overflow: 'hidden',
//               transition: 'all 0.2s',
//               backgroundColor: 'white'
//             }}>
//               {explanation && (
//                 <div style={{
//                   fontSize: '16px',
//                   color: '#4b5563',
//                   lineHeight: '1.5',
//                   marginBottom: '15px'
//                 }}>
//                   {processContent(explanation)}
//                 </div>
//               )}
//               <a 
//                 href={categoryUrl}
//                 onClick={(e) => handleCategoryClick(categoryId, e)}
//                 style={{
//                   display: 'inline-block',
//                   color: '#2563eb',
//                   textDecoration: 'none',
//                   fontSize: '16px',
//                   backgroundColor:'#e7f1ff',
//                   padding:'10px',
//                   borderRadius:'4px'
//                 }}
//               >
//                 Go to {category} section →
//               </a>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default CategoriesList;


// import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
// // import { processContent } from '@/app/utils/contentProcessor';
// import { processContent } from '../../../utils/contentProcessor';

// const toId = (name) => name.toLowerCase().replace(/\s+/g, '_');

// const ALL_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// // ─── Styles ────────────────────────────────────────────────────

// const hideScrollbar = {
//   scrollbarWidth: 'none',
//   msOverflowStyle: 'none',
// };

// const hideScrollbarCSS = `
//   .catlist-no-scrollbar::-webkit-scrollbar { display: none; }
// `;

// const styles = {
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
//     flexWrap: 'wrap',
//     gap: '2px',
//     padding: '14px 20px',
//     background: '#f8fafc',
//     borderBottom: '1.5px solid #e2e8f0',
//     justifyContent: 'center',
//   },
//   filterRow: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//     padding: '12px 20px',
//     borderBottom: '1px solid #e2e8f0',
//     flexWrap: 'wrap',
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
//     width: '30px',
//     height: '30px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '15px',
//     fontWeight: '600',
//     fontFamily: 'inherit',
//     borderRadius: '6px',
//     border: 'none',
//     cursor: disabled ? 'default' : 'pointer',
//     pointerEvents: disabled ? 'none' : 'auto',
//     background: active ? '#2563eb' : hovered ? '#dbeafe' : 'transparent',
//     color: active ? '#fff' : disabled ? '#cbd5e1' : hovered ? '#2563eb' : '#64748b',
//     transition: 'all 0.12s',
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

// // ─── CategoryPill ──────────────────────────────────────────────

// function CategoryPill({ label, active, onClick }) {
//   const [hovered, setHovered] = useState(false);

//   const style = {
//     padding: '6px 16px',
//     fontSize: '15px',
//     fontWeight: '500',
//     fontFamily: 'inherit',
//     borderRadius: '20px',
//     border: '1.5px solid',
//     cursor: 'pointer',
//     transition: 'all 0.15s',
//     background: active ? '#2563eb' : '#fff',
//     color: active ? '#fff' : hovered ? '#2563eb' : '#64748b',
//     borderColor: active ? '#2563eb' : hovered ? '#2563eb' : '#e2e8f0',
//   };

//   return (
//     <button
//       style={style}
//       onClick={onClick}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {processContent(label)}
//     </button>
//   );
// }

// // ─── TermItem ──────────────────────────────────────────────────

// function TermItem({ item, onNavigate }) {
//   const [hovered, setHovered] = useState(false);

//   const style = {
//     padding: '8px 12px',
//     fontSize: '16px',
//     color: hovered ? '#2563eb' : '#334155',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     transition: 'all 0.12s',
//     textDecoration: 'none',
//     display: 'flex',
//     alignItems: 'baseline',
//     gap: '8px',
//     background: hovered ? '#eff6ff' : 'transparent',
//   };

//   return (
//     <a
//       href={`#${toId(item.name)}`}
//       style={style}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onClick={(e) => {
//         e.preventDefault();
//         onNavigate(toId(item.name));
//       }}
//     >
//       <span style={{ fontSize: '14px', fontWeight: '600', color: '#94a3b8', width: '14px', flexShrink: 0 }}>
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
//     color: active ? '#2563eb' : hovered ? '#2563eb' : '#64748b',
//     fontWeight: active ? '600' : '400',
//     textDecoration: 'none',
//     borderLeft: `2px solid ${active || hovered ? '#2563eb' : 'transparent'}`,
//     borderRadius: '0 4px 4px 0',
//     background: active || hovered ? '#eff6ff' : 'transparent',
//     transition: 'all 0.12s',
//     cursor: 'pointer',
//     whiteSpace: 'nowrap',
//     overflow: 'hidden',
//     textOverflow: 'ellipsis',
//   };

//   return (
//     <a
//       href={`#${toId(item.name)}`}
//       style={style}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onClick={(e) => {
//         e.preventDefault();
//         onNavigate(toId(item.name));
//       }}
//     >
//       {processContent(item.name)}
//     </a>
//   );
// }

// // ─── CategoriesList (main export) ──────────────────────────────

// const CategoriesList = ({
//   data,
//   categoryExplanations = {},
//   baseUrl = '/',
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

//   const clearCategories = useCallback(() => {
//     setActiveCategories(new Set());
//   }, []);

//   const navigateToItem = useCallback((id) => {
//     const el = document.getElementById(id);
//     if (!el) return;
//     const y = el.getBoundingClientRect().top + window.scrollY - 90;
//     window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });

//     el.style.transition = 'border-color 0.25s, background 0.25s, box-shadow 0.25s';
//     el.style.borderColor = '#2563eb';
//     el.style.background = '#eff6ff';
//     el.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
//     setTimeout(() => {
//       el.style.borderColor = '';
//       el.style.background = '';
//       el.style.boxShadow = '';
//     }, 2500);
//   }, []);

//   // Sidebar positioning
//   const updateSidebarPos = useCallback(() => {
//     const contentWidth = Math.min(820, window.innerWidth - 32);
//     const contentLeft = (window.innerWidth - contentWidth) / 2;
//     const sbLeft = contentLeft - 200 - 24;
//     setSidebarLeft(sbLeft);
//   }, []);

//   // Scroll handler: show/hide sidebar
//   useEffect(() => {
//     const onScroll = () => {
//       if (!topNavRef.current) return;
//       const rect = topNavRef.current.getBoundingClientRect();
//       const show = rect.bottom < 0 && window.innerWidth >= 1100;
//       setSidebarVisible(show);
//     };
//     const onResize = () => {
//       updateSidebarPos();
//       if (!topNavRef.current) return;
//       const rect = topNavRef.current.getBoundingClientRect();
//       const show = rect.bottom < 0 && window.innerWidth >= 1100;
//       setSidebarVisible(show);
//     };
//     window.addEventListener('scroll', onScroll, { passive: true });
//     window.addEventListener('resize', onResize, { passive: true });
//     updateSidebarPos();
//     return () => {
//       window.removeEventListener('scroll', onScroll);
//       window.removeEventListener('resize', onResize);
//     };
//   }, [updateSidebarPos]);

//   // IntersectionObserver for active term tracking in sidebar
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

//         <div style={styles.filterRow}>
//           <CategoryPill
//             label="All"
//             active={activeCategories.size === 0}
//             onClick={clearCategories}
//           />
//           {categories.map((cat) => (
//             <CategoryPill
//               key={cat}
//               label={cat}
//               active={activeCategories.has(cat)}
//               onClick={() => toggleCategory(cat)}
//             />
//           ))}
//         </div>

//         <div className="catlist-no-scrollbar" style={styles.termList}>
//           {filtered.map((item) => (
//             <TermItem
//               key={item.name}
//               item={item}
//               onNavigate={navigateToItem}
//             />
//           ))}
//         </div>

//         <div style={styles.status}>
//           {filtered.length} of {data.length} terms
//         </div>
//       </div>

//       {/* ── Sticky Sidebar ── */}
//       <div
//         className="catlist-no-scrollbar"
//         style={styles.sidebar(showSidebar, sidebarLeft)}
//       >
//         {categories.map((cat) => {
//           const items = data.filter((d) => d.category === cat);
//           return (
//             <div key={cat} style={{ marginBottom: '14px' }}>
//               <div
//                 style={{
//                   fontSize: '13px',
//                   fontWeight: '600',
//                   textTransform: 'uppercase',
//                   letterSpacing: '1px',
//                   color: activeSidebarCat === cat ? '#2563eb' : '#94a3b8',
//                   marginBottom: '4px',
//                   paddingLeft: '8px',
//                   transition: 'color 0.2s',
//                 }}
//               >
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
// import { processContent } from '@/app/utils/contentProcessor';
import { processContent } from '../../../utils/contentProcessor';

const toId = (name) => name.toLowerCase().replace(/\s+/g, '_');

const ALL_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// ─── Styles ────────────────────────────────────────────────────

const hideScrollbar = {
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
};

const hideScrollbarCSS = `
  .catlist-no-scrollbar::-webkit-scrollbar { display: none; }
`;

const styles = {
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
    flexWrap: 'wrap',
    gap: '2px',
    padding: '14px 20px',
    background: '#f8fafc',
    borderBottom: '1.5px solid #e2e8f0',
    justifyContent: 'center',
  },
  filterRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    borderBottom: '1px solid #e2e8f0',
    flexWrap: 'wrap',
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
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '15px',
    fontWeight: '600',
    fontFamily: 'inherit',
    borderRadius: '6px',
    border: 'none',
    cursor: disabled ? 'default' : 'pointer',
    pointerEvents: disabled ? 'none' : 'auto',
    background: active ? '#2563eb' : hovered ? '#dbeafe' : 'transparent',
    color: active ? '#fff' : disabled ? '#cbd5e1' : hovered ? '#2563eb' : '#64748b',
    transition: 'all 0.12s',
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

// ─── CategoryPill ──────────────────────────────────────────────

function CategoryPill({ label, active, count, onClick }) {
  const [hovered, setHovered] = useState(false);

  const style = {
    padding: '6px 16px',
    fontSize: '15px',
    fontWeight: '500',
    fontFamily: 'inherit',
    borderRadius: '20px',
    border: '1.5px solid',
    cursor: 'pointer',
    transition: 'all 0.15s',
    background: active ? '#2563eb' : '#fff',
    color: active ? '#fff' : hovered ? '#2563eb' : '#64748b',
    borderColor: active ? '#2563eb' : hovered ? '#2563eb' : '#e2e8f0',
  };

  const countStyle = {
    fontSize: '13px',
    fontWeight: '400',
    marginLeft: '4px',
    opacity: 0.75,
  };

  return (
    <button
      style={style}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {processContent(label)}
      {count != null && <span style={countStyle}>({count})</span>}
    </button>
  );
}

// ─── TermItem ──────────────────────────────────────────────────

function TermItem({ item, onNavigate }) {
  const [hovered, setHovered] = useState(false);

  const style = {
    padding: '8px 12px',
    fontSize: '16px',
    color: hovered ? '#2563eb' : '#334155',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.12s',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'baseline',
    gap: '8px',
    background: hovered ? '#eff6ff' : 'transparent',
  };

  return (
    <a
      href={`#${toId(item.name)}`}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(toId(item.name));
      }}
    >
      <span style={{ fontSize: '14px', fontWeight: '600', color: '#94a3b8', width: '14px', flexShrink: 0 }}>
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
    color: active ? '#2563eb' : hovered ? '#2563eb' : '#64748b',
    fontWeight: active ? '600' : '400',
    textDecoration: 'none',
    borderLeft: `2px solid ${active || hovered ? '#2563eb' : 'transparent'}`,
    borderRadius: '0 4px 4px 0',
    background: active || hovered ? '#eff6ff' : 'transparent',
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
      onClick={(e) => {
        e.preventDefault();
        onNavigate(toId(item.name));
      }}
    >
      {processContent(item.name)}
    </a>
  );
}

// ─── CategoriesList (main export) ──────────────────────────────

const CategoriesList = ({
  data,
  categoryExplanations = {},
  baseUrl = '/',
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

  const clearCategories = useCallback(() => {
    setActiveCategories(new Set());
  }, []);

  const navigateToItem = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });

    el.style.transition = 'border-color 0.25s, background 0.25s, box-shadow 0.25s';
    el.style.borderColor = '#2563eb';
    el.style.background = '#eff6ff';
    el.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
    setTimeout(() => {
      el.style.borderColor = '';
      el.style.background = '';
      el.style.boxShadow = '';
    }, 2500);
  }, []);

  // Sidebar positioning — 10px gap from content edge
  const updateSidebarPos = useCallback(() => {
    const contentWidth = Math.min(820, window.innerWidth - 32);
    const contentLeft = (window.innerWidth - contentWidth) / 2;
    const sbLeft = contentLeft - 200 - 50;
    setSidebarLeft(sbLeft);
  }, []);

  // Scroll handler: show/hide sidebar
  // useEffect(() => {
  //   const onScroll = () => {
  //     if (!topNavRef.current) return;
  //     const rect = topNavRef.current.getBoundingClientRect();
  //     const show = rect.bottom < 0 && window.innerWidth >= 1100;
  //     setSidebarVisible(show);
  //   };
  //   const onResize = () => {
  //     updateSidebarPos();
  //     if (!topNavRef.current) return;
  //     const rect = topNavRef.current.getBoundingClientRect();
  //     const show = rect.bottom < 0 && window.innerWidth >= 1100;
  //     setSidebarVisible(show);
  //   };
  //   window.addEventListener('scroll', onScroll, { passive: true });
  //   window.addEventListener('resize', onResize, { passive: true });
  //   updateSidebarPos();
  //   return () => {
  //     window.removeEventListener('scroll', onScroll);
  //     window.removeEventListener('resize', onResize);
  //   };
  // }, [updateSidebarPos]);

  useEffect(() => {
  const checkVisibility = () => {
    if (!topNavRef.current) return;
    const rect = topNavRef.current.getBoundingClientRect();
    // const footer = document.getElementById('site-footer');
    const footer = document.querySelector('footer');
    const pastBottom = footer
      ? footer.getBoundingClientRect().top < window.innerHeight
      : false;
    const show = rect.bottom < 0 && window.innerWidth >= 1100 && !pastBottom;
    setSidebarVisible(show);
  };

  const onScroll = () => checkVisibility();
  const onResize = () => {
    updateSidebarPos();
    checkVisibility();
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });
  updateSidebarPos();
  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onResize);
  };
}, [updateSidebarPos]);

  // IntersectionObserver for active term tracking in sidebar
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

        <div style={styles.filterRow}>
          <CategoryPill
            label="All"
            active={activeCategories.size === 0}
            count={data.length}
            onClick={clearCategories}
          />
          {categories.map((cat) => (
            <CategoryPill
              key={cat}
              label={cat}
              active={activeCategories.has(cat)}
              count={categoryCounts[cat]}
              onClick={() => toggleCategory(cat)}
            />
          ))}
        </div>

        <div className="catlist-no-scrollbar" style={styles.termList}>
          {filtered.map((item) => (
            <TermItem
              key={item.name}
              item={item}
              onNavigate={navigateToItem}
            />
          ))}
        </div>

        <div style={styles.status}>
          {filtered.length} of {data.length} terms
        </div>
      </div>

      {/* ── Sticky Sidebar ── */}
      <div
        className="catlist-no-scrollbar"
        style={styles.sidebar(showSidebar, sidebarLeft)}
      >
        {categories.map((cat) => {
          const items = data.filter((d) => d.category === cat);
          return (
            <div key={cat} style={{ marginBottom: '14px' }}>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: activeSidebarCat === cat ? '#2563eb' : '#94a3b8',
                  marginBottom: '4px',
                  paddingLeft: '8px',
                  transition: 'color 0.2s',
                }}
              >
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