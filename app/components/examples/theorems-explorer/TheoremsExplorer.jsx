// import React, { useState, useEffect, useMemo } from 'react';
// import {processContent} from '../../../utils/contentProcessor'

// /* ============================================================
//    DEMO DATA (fallback when no `items` prop is provided)
//    ============================================================ */
// const DEMO_ITEMS = [
//   {
//     id: 1, name: 'Pythagorean Theorem',
//     formula: 'In a right triangle: a² + b² = c².',
//     categories: ['Geometry'], tags: ['triangle', 'euclidean'],
//     era: 'ancient', difficulty: 'undergraduate', year: -500,
//     fields: {
//       properties: '- Only holds for right triangles\n- Has a converse',
//       history: 'Known to Babylonians long before Pythagoras.'
//     }
//   },
//   {
//     id: 2, name: 'Fundamental Theorem of Arithmetic',
//     formula: 'Every integer > 1 is uniquely a product of primes.',
//     categories: ['Number Theory', 'Algebra'], tags: ['primes', 'factorization'],
//     era: 'ancient', difficulty: 'undergraduate', year: -300,
//     fields: {
//       properties: '- Existence of prime factorization\n- Uniqueness up to ordering',
//       history: 'First proved by Gauss in 1801.'
//     }
//   },
//   {
//     id: 3, name: 'Fundamental Theorem of Calculus',
//     formula: 'Differentiation and integration are inverse operations.',
//     categories: ['Analysis'], tags: ['calculus', 'integration'],
//     era: 'classical', difficulty: 'undergraduate', year: 1670,
//     fields: {
//       properties: '- Two parts: differentiation, evaluation\n- Requires continuity',
//       history: 'Newton and Leibniz, independently.'
//     }
//   },
//   {
//     id: 4, name: 'Euler Identity',
//     formula: 'e^(iπ) + 1 = 0.',
//     categories: ['Analysis'], tags: ['complex', 'constants'],
//     era: 'classical', difficulty: 'undergraduate', year: 1748,
//     fields: { properties: '- Relates 0, 1, e, i, π\n- Special case of Euler formula' }
//   },
//   {
//     id: 5, name: 'Bayes Theorem',
//     formula: 'P(A|B) = P(B|A) · P(A) / P(B).',
//     categories: ['Probability'], tags: ['conditional', 'inference'],
//     era: 'classical', difficulty: 'undergraduate', year: 1763,
//     fields: {
//       properties: '- Prior, posterior, likelihood',
//       applications: '- Spam filtering\n- Medical diagnostics'
//     }
//   },
//   {
//     id: 6, name: 'Fundamental Theorem of Algebra',
//     formula: 'Every non-constant complex polynomial has at least one complex root.',
//     categories: ['Algebra'], tags: ['polynomials', 'roots'],
//     era: 'classical', difficulty: 'undergraduate', year: 1799,
//     fields: { properties: '- C is algebraically closed\n- Degree-n polynomial has n roots' }
//   },
//   {
//     id: 7, name: 'Gödel Incompleteness',
//     formula: 'Any consistent formal system rich enough to express arithmetic contains true unprovable statements.',
//     categories: ['Algebra'], tags: ['foundations', 'self-reference'],
//     era: 'modern', difficulty: 'graduate', year: 1931,
//     fields: {
//       properties: '- Two theorems\n- Uses Gödel numbering',
//       history: 'Proved by Gödel at age 25.'
//     }
//   },
//   {
//     id: 8, name: 'Four Color Theorem',
//     formula: 'Any planar map can be colored with no more than four colors.',
//     categories: ['Geometry'], tags: ['graph-theory', 'coloring'],
//     era: 'modern', difficulty: 'graduate', year: 1976,
//     fields: { properties: '- First major computer-assisted proof' }
//   }
// ];

// /* ============================================================
//    DEFAULT SECONDARY FACETS SCHEMA
//    Each entry: { key, from?, label, multi? }
//      - key: item field name (or 'categories' with from:'rest' for cat[1..])
//      - from: 'rest' → use item.categories.slice(1)
//      - label: displayed under the chip row
//      - multi: value on item is an array
//    ============================================================ */
// const DEFAULT_SECONDARY_FACETS = [
//   { key: 'categories', from: 'rest', label: 'Topics', multi: true },
//   { key: 'era', label: 'Era' },
//   { key: 'difficulty', label: 'Difficulty' },
//   { key: 'tags', label: 'Tags', multi: true }
// ];

// /* ============================================================
//    THEMES — single 'default' for now. Future themes get merged in
//    via an external file and selected with the `theme` prop.
//    ============================================================ */
// const THEMES = {
//   default: {
//     '--bg': '#f6f8fb',
//     '--surface': '#ffffff',
//     '--surface-alt': '#f1f5f9',
//     '--ink': '#0f172a',
//     '--ink-soft': '#475569',
//     '--muted': '#94a3b8',
//     '--border': '#e2e8f0',
//     '--border-strong': '#cbd5e1',
//     '--accent': '#2563eb',
//     '--accent-soft': '#dbeafe',
//     '--topbar-bg': '#173c94',
//     '--topbar-ink': '#f1f5f9',
//     '--c0': '#2563eb', '--c0s': '#dbeafe',
//     '--c1': '#0e7490', '--c1s': '#cffafe',
//     '--c2': '#475569', '--c2s': '#e2e8f0',
//     '--c3': '#1e40af', '--c3s': '#dbeafe',
//     '--c4': '#0369a1', '--c4s': '#e0f2fe',
//     '--shadow': '0 1px 2px rgba(15,23,42,.04),0 4px 12px rgba(15,23,42,.05)',
//     '--shadow-hover': '0 2px 4px rgba(15,23,42,.06),0 12px 28px rgba(15,23,42,.08)',
//     '--shadow-lg': '0 2px 8px rgba(15,23,42,.08),0 24px 60px rgba(15,23,42,.14)'
//   }
// };

// const MODE_OPTIONS = [
//   { value: 'inline', label: 'Inline' },
//   { value: 'modal', label: 'Modal' },
//   { value: 'drawer', label: 'Drawer' },
//   { value: 'split', label: 'Master-detail' },
//   { value: 'page', label: 'Full page' },
//   { value: 'lightbox', label: 'Lightbox' }
// ];

// /* ============================================================
//    HELPERS
//    ============================================================ */
// function cap(s) {
//   if (!s) return '';
//   const str = String(s);
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// function isPresent(v) {
//   if (v == null) return false;
//   if (typeof v === 'string') return v.trim() !== '';
//   if (Array.isArray(v)) return v.length > 0;
//   return true;
// }

// function facetValuesForItem(item, facet) {
//   if (facet.key === 'categories' && facet.from === 'rest') {
//     return (item.categories || []).slice(1).filter(isPresent);
//   }
//   const raw = item[facet.key];
//   if (!isPresent(raw)) return [];
//   if (Array.isArray(raw)) return raw.filter(isPresent);
//   return [raw];
// }

// function allFacetValues(items, facet) {
//   const counts = {};
//   items.forEach(it => {
//     facetValuesForItem(it, facet).forEach(v => {
//       const k = String(v);
//       counts[k] = (counts[k] || 0) + 1;
//     });
//   });
//   return Object.keys(counts).sort().map(v => ({ value: v, count: counts[v] }));
// }

// function allPrimaryCategories(items) {
//   const counts = {};
//   items.forEach(it => {
//     const p = (it.categories || [])[0];
//     if (isPresent(p)) counts[p] = (counts[p] || 0) + 1;
//   });
//   return Object.keys(counts).sort().map(v => ({ value: v, count: counts[v] }));
// }

// function catColorClass(item, primaries) {
//   const p = (item.categories || [])[0];
//   if (!isPresent(p)) return 'te-cat-0';
//   const idx = primaries.findIndex(c => c.value === p);
//   return `te-cat-${(idx < 0 ? 0 : idx) % 5}`;
// }

// function renderFieldBody(value, keyPrefix = 'b') {
//   if (!isPresent(value)) return null;
//   const lines = String(value).split('\n');
//   const blocks = [];
//   let bullets = [];
//   let para = [];
//   const flushPara = () => {
//     if (para.length) { blocks.push({ t: 'p', text: para.join(' ') }); para = []; }
//   };
//   const flushBullets = () => {
//     if (bullets.length) { blocks.push({ t: 'ul', items: [...bullets] }); bullets = []; }
//   };
//   lines.forEach(raw => {
//     const line = raw.trim();
//     if (line.startsWith('- ')) { flushPara(); bullets.push(line.slice(2)); }
//     else if (line === '') { flushPara(); flushBullets(); }
//     else { flushBullets(); para.push(line); }
//   });
//   flushPara();
//   flushBullets();
//   return blocks.map((b, i) => {
//     if (b.t === 'p') {
//       return <p key={`${keyPrefix}-${i}`}>{processContent(b.text)}</p>;
//     }
//     return (
//       <ul key={`${keyPrefix}-${i}`}>
//         {b.items.map((it, j) => (
//           <li key={`${keyPrefix}-${i}-${j}`}>{processContent(it)}</li>
//         ))}
//       </ul>
//     );
//   });
// }

// function getFieldEntries(item) {
//   if (!item || !item.fields || typeof item.fields !== 'object') return [];
//   return Object.entries(item.fields).filter(([, v]) => isPresent(v));
// }

// /* ============================================================
//    COMPONENT
//    ============================================================ */
// function TheoremsExplorer({
//   items = DEMO_ITEMS,
//   theme = 'default',
//   title = 'Theorems Explorer',
//   searchPlaceholder = 'Search...',
//   primarySidebarLabel = 'Category',
//   secondaryFacets = DEFAULT_SECONDARY_FACETS,
//   mainTextField = 'formula',
//   metaFields = [
//     { key: 'year', label: 'Year' },
//     { key: 'era', label: 'Era' },
//     { key: 'difficulty', label: 'Difficulty' }
//   ]
// }) {
//   /* ---- state ---- */
//   const [search, setSearch] = useState('');
//   const [catFilter, setCatFilter] = useState(() => new Set());
//   const [secFilters, setSecFilters] = useState({}); // { [facetLabel]: Set }
//   const [sort, setSort] = useState('name');
//   const [mode, setMode] = useState('inline');
//   const [openId, setOpenId] = useState(null);
//   const [expandedId, setExpandedId] = useState(null);
//   const [viewMode, setViewMode] = useState('tabs');
//   const [activeTab, setActiveTab] = useState(null);
//   const [openAcc, setOpenAcc] = useState(() => new Set());

//   /* ---- derived ---- */
//   const primaries = useMemo(() => allPrimaryCategories(items), [items]);

//   const facetsWithValues = useMemo(
//     () => secondaryFacets
//       .map(f => ({ ...f, values: allFacetValues(items, f) }))
//       .filter(f => f.values.length > 0),
//     [items, secondaryFacets]
//   );

//   const filtered = useMemo(() => {
//     const q = search.trim().toLowerCase();
//     return items.filter(item => {
//       const primary = (item.categories || [])[0];
//       if (catFilter.size > 0 && (!isPresent(primary) || !catFilter.has(primary))) return false;
//       for (const facet of secondaryFacets) {
//         const set = secFilters[facet.label];
//         if (set && set.size > 0) {
//           const vals = facetValuesForItem(item, facet).map(String);
//           const ok = vals.some(v => set.has(v));
//           if (!ok) return false;
//         }
//       }
//       if (q) {
//         const hay = [
//           item.name,
//           item[mainTextField],
//           ...(item.categories || []),
//           ...(item.tags || [])
//         ].filter(isPresent).join(' ').toLowerCase();
//         if (!hay.includes(q)) return false;
//       }
//       return true;
//     });
//   }, [items, search, catFilter, secFilters, secondaryFacets, mainTextField]);

//   const sorted = useMemo(() => {
//     const arr = [...filtered];
//     arr.sort((a, b) => {
//       if (sort === 'name') return String(a.name || '').localeCompare(String(b.name || ''));
//       const ay = a.year != null ? Number(a.year) : 0;
//       const by = b.year != null ? Number(b.year) : 0;
//       if (sort === 'year-asc') return ay - by;
//       return by - ay;
//     });
//     return arr;
//   }, [filtered, sort]);

//   /* ---- effects: reset detail-view state when active item changes ---- */
//   useEffect(() => {
//     const activeId = mode === 'inline' ? expandedId : openId;
//     if (activeId == null) {
//       setActiveTab(null);
//       setOpenAcc(new Set());
//       return;
//     }
//     const item = items.find(i => i.id === activeId);
//     if (!item) return;
//     const entries = getFieldEntries(item);
//     if (entries.length > 0) {
//       setActiveTab(entries[0][0]);
//       setOpenAcc(new Set([entries[0][0]]));
//     } else {
//       setActiveTab(null);
//       setOpenAcc(new Set());
//     }
//   }, [openId, expandedId, mode, items]);

//   /* ---- effects: keyboard ---- */
//   useEffect(() => {
//     const handler = (e) => {
//       if (e.key === 'Escape') {
//         if (openId != null) setOpenId(null);
//         if (expandedId != null) setExpandedId(null);
//       }
//       if (mode === 'lightbox' && openId != null) {
//         if (e.key === 'ArrowLeft') stepLightbox(-1);
//         if (e.key === 'ArrowRight') stepLightbox(1);
//       }
//     };
//     window.addEventListener('keydown', handler);
//     return () => window.removeEventListener('keydown', handler);
//   });

//   /* ---- effects: body scroll lock for overlays ---- */
//   useEffect(() => {
//     const overlayOpen = (mode === 'modal' || mode === 'drawer' || mode === 'lightbox') && openId != null;
//     if (overlayOpen) {
//       const prev = document.body.style.overflow;
//       document.body.style.overflow = 'hidden';
//       return () => { document.body.style.overflow = prev; };
//     }
//   }, [mode, openId]);

//   /* ---- handlers ---- */
//   const hasAnyFilter = search !== '' || catFilter.size > 0 ||
//     Object.values(secFilters).some(s => s && s.size > 0);

//   function togglePrimary(value) {
//     const next = new Set(catFilter);
//     if (next.has(value)) next.delete(value); else next.add(value);
//     setCatFilter(next);
//   }

//   function toggleSecondary(facetLabel, value) {
//     const cur = secFilters[facetLabel] || new Set();
//     const next = new Set(cur);
//     if (next.has(value)) next.delete(value); else next.add(value);
//     setSecFilters({ ...secFilters, [facetLabel]: next });
//   }

//   function clearAll() {
//     setSearch('');
//     setCatFilter(new Set());
//     setSecFilters({});
//   }

//   function openItem(id) {
//     if (mode === 'inline') {
//       setExpandedId(prev => prev === id ? null : id);
//     } else {
//       setOpenId(id);
//     }
//   }

//   function closeOverlay() {
//     setOpenId(null);
//   }

//   function changeMode(newMode) {
//     setOpenId(null);
//     setExpandedId(null);
//     setMode(newMode);
//   }

//   function stepLightbox(dir) {
//     if (!sorted.length) return;
//     const idx = sorted.findIndex(i => i.id === openId);
//     if (idx < 0) return;
//     const nextIdx = (idx + dir + sorted.length) % sorted.length;
//     setOpenId(sorted[nextIdx].id);
//   }

//   function toggleAcc(k) {
//     const next = new Set(openAcc);
//     if (next.has(k)) next.delete(k); else next.add(k);
//     setOpenAcc(next);
//   }

//   /* ---- theme vars ---- */
//   const themeVars = THEMES[theme] || THEMES.default;

//   /* ============================================================
//      RENDER HELPERS
//      ============================================================ */
//   function renderDetailContent(item) {
//     if (!item) return null;
//     const mainVal = item[mainTextField];
//     const presentMeta = metaFields.filter(f => isPresent(item[f.key]));
//     const fieldEntries = getFieldEntries(item);
//     const currentTab = (activeTab && item.fields && isPresent(item.fields[activeTab]))
//       ? activeTab
//       : (fieldEntries[0] && fieldEntries[0][0]);

//     return (
//       <>
//         {isPresent(mainVal) && (
//           <div className="te-detail-main">{processContent(String(mainVal))}</div>
//         )}

//         {presentMeta.length > 0 && (
//           <div className="te-meta-grid">
//             {presentMeta.map(f => (
//               <div className="te-meta-row" key={f.key}>
//                 <span className="te-meta-label">{f.label}</span>
//                 <span className="te-meta-value">{processContent(String(item[f.key]))}</span>
//               </div>
//             ))}
//           </div>
//         )}

//         {fieldEntries.length > 0 && (
//           <>
//             <div className="te-view-switch-bar">
//               <span className="te-view-switch-label">View</span>
//               <div className="te-view-switch">
//                 <button
//                   className={viewMode === 'tabs' ? 'active' : ''}
//                   onClick={(e) => { e.stopPropagation(); setViewMode('tabs'); }}
//                   type="button"
//                 >
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//                     <rect x="3" y="5" width="18" height="14" rx="1.5" />
//                     <path d="M3 10h18M9 5v5" />
//                   </svg>
//                   Tabs
//                 </button>
//                 <button
//                   className={viewMode === 'accordion' ? 'active' : ''}
//                   onClick={(e) => { e.stopPropagation(); setViewMode('accordion'); }}
//                   type="button"
//                 >
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//                     <rect x="3" y="4" width="18" height="5" rx="1" />
//                     <rect x="3" y="11" width="18" height="9" rx="1" />
//                   </svg>
//                   Accordion
//                 </button>
//               </div>
//             </div>

//             {viewMode === 'tabs' ? (
//               <>
//                 <div className="te-detail-tabs">
//                   {fieldEntries.map(([k]) => (
//                     <button
//                       key={k}
//                       className={`te-detail-tab${currentTab === k ? ' active' : ''}`}
//                       onClick={(e) => { e.stopPropagation(); setActiveTab(k); }}
//                       type="button"
//                     >
//                       {cap(k)}
//                     </button>
//                   ))}
//                 </div>
//                 <div className="te-detail-section">
//                   {currentTab && renderFieldBody(item.fields[currentTab], `tab-${currentTab}`)}
//                 </div>
//               </>
//             ) : (
//               <div className="te-detail-accordion">
//                 {fieldEntries.map(([k, v]) => {
//                   const isOpen = openAcc.has(k);
//                   return (
//                     <div key={k} className={`te-acc-item${isOpen ? ' open' : ''}`}>
//                       <button
//                         className="te-acc-header"
//                         onClick={(e) => { e.stopPropagation(); toggleAcc(k); }}
//                         type="button"
//                       >
//                         <span className="te-acc-label">{cap(k)}</span>
//                         <span className="te-acc-chev">▸</span>
//                       </button>
//                       {isOpen && (
//                         <div className="te-acc-body">{renderFieldBody(v, `acc-${k}`)}</div>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </>
//         )}
//       </>
//     );
//   }

//   function renderDetailHeader(item) {
//     const cats = item.categories || [];
//     return (
//       <div className="te-detail-header">
//         {cats.length > 0 && (
//           <div className="te-detail-meta-row">
//             {cats.map(c => (
//               <span key={c} className="te-badge">{c}</span>
//             ))}
//           </div>
//         )}
//         <h2 className="te-detail-title">{item.name || 'Untitled'}</h2>
//       </div>
//     );
//   }

//   function renderDetailFull(item, withClose) {
//     return (
//       <>
//         {withClose && (
//           <button className="te-detail-close" onClick={closeOverlay} type="button">×</button>
//         )}
//         {renderDetailHeader(item)}
//         <div className="te-detail-body">{renderDetailContent(item)}</div>
//       </>
//     );
//   }

//   function renderCard(item) {
//     const cc = catColorClass(item, primaries);
//     const cats = item.categories || [];
//     const tags = item.tags || [];
//     const expanded = mode === 'inline' && expandedId === item.id;
//     const mainVal = item[mainTextField];

//     return (
//       <article
//         key={item.id}
//         className={`te-card ${cc}${expanded ? ' expanded' : ''}`}
//         onClick={() => openItem(item.id)}
//       >
//         <div className="te-card-body">
//           {cats.length > 0 && (
//             <div className="te-card-cats">
//               {cats.map(c => (
//                 <span key={c} className="te-badge">{c}</span>
//               ))}
//             </div>
//           )}
//           <h3>{item.name || 'Untitled'}</h3>
//           {isPresent(mainVal) && (
//             <div className="te-statement">{processContent(String(mainVal))}</div>
//           )}
//           {tags.length > 0 && (
//             <div className="te-card-tags">
//               {tags.slice(0, 4).map(t => (
//                 <span key={t} className="te-card-tag">{t}</span>
//               ))}
//             </div>
//           )}
//         </div>
//         {expanded && (
//           <div className="te-inline-expand" onClick={(e) => e.stopPropagation()}>
//             {renderDetailContent(item)}
//           </div>
//         )}
//         <div className="te-card-cta-row">
//           <button
//             className="te-card-cta"
//             type="button"
//             onClick={(e) => { e.stopPropagation(); openItem(item.id); }}
//           >
//             <span>{expanded ? 'Collapse' : 'View details'}</span>
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M5 12h14M13 6l6 6-6 6" />
//             </svg>
//           </button>
//         </div>
//       </article>
//     );
//   }

//   function renderSidebar() {
//     if (primaries.length === 0) return null;
//     return (
//       <aside className="te-sidebar">
//         <div className="te-filter-group">
//           <h3>{primarySidebarLabel}</h3>
//           <ul className="te-filter-list">
//             {primaries.map(({ value, count }) => {
//               const active = catFilter.has(value);
//               return (
//                 <li
//                   key={value}
//                   className={`te-filter-item${active ? ' active' : ''}`}
//                   onClick={() => togglePrimary(value)}
//                 >
//                   <span className="te-filter-dot"></span>
//                   <span className="te-filter-label">{value}</span>
//                   <span className="te-filter-freq">{count}</span>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </aside>
//     );
//   }

//   function renderSecondaryBar() {
//     if (facetsWithValues.length === 0 && !hasAnyFilter) return null;
//     return (
//       <div className="te-secondary-bar">
//         {facetsWithValues.map(facet => {
//           const set = secFilters[facet.label] || new Set();
//           return (
//             <div className="te-sec-facet" key={facet.label}>
//               <div className="te-sec-facet-label">{facet.label}</div>
//               <div className="te-sec-chip-row">
//                 {facet.values.map(({ value, count }) => {
//                   const active = set.has(value);
//                   return (
//                     <button
//                       key={value}
//                       className={`te-sec-chip${active ? ' active' : ''}`}
//                       onClick={() => toggleSecondary(facet.label, value)}
//                       type="button"
//                     >
//                       <span>{value}</span>
//                       <span className="te-sec-chip-n">{count}</span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           );
//         })}
//         {hasAnyFilter && (
//           <button
//             className="te-clear-all-btn"
//             onClick={clearAll}
//             type="button"
//           >
//             Clear all
//           </button>
//         )}
//       </div>
//     );
//   }

//   function renderMasterDetail() {
//     const item = openId != null ? items.find(i => i.id === openId) : null;
//     return (
//       <div className="te-md-wrap">
//         <div className="te-md-list">
//           {sorted.map(it => {
//             const cc = catColorClass(it, primaries);
//             const sel = openId === it.id ? ' selected' : '';
//             const cats = it.categories || [];
//             return (
//               <div
//                 key={it.id}
//                 className={`te-md-row ${cc}${sel}`}
//                 onClick={() => setOpenId(it.id)}
//               >
//                 <h4>{it.name || 'Untitled'}</h4>
//                 {cats.length > 0 && (
//                   <div className="te-md-cats">{cats.join(' · ')}</div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//         <div className="te-md-detail">
//           {item ? (
//             <div className={catColorClass(item, primaries)} style={{ maxWidth: 680 }}>
//               {renderDetailHeader(item)}
//               {renderDetailContent(item)}
//             </div>
//           ) : (
//             <div className="te-md-empty">Select an item from the list.</div>
//           )}
//         </div>
//       </div>
//     );
//   }

//   function renderFullPageDetail() {
//     const item = openId != null ? items.find(i => i.id === openId) : null;
//     if (!item) return null;
//     return (
//       <div className="te-fp-detail">
//         <button className="te-fp-back" onClick={closeOverlay} type="button">
//           ← Back to list
//         </button>
//         <div className={catColorClass(item, primaries)} style={{ maxWidth: 760 }}>
//           {renderDetailHeader(item)}
//           {renderDetailContent(item)}
//         </div>
//       </div>
//     );
//   }

//   function renderModalOverlay() {
//     const item = (mode === 'modal' && openId != null) ? items.find(i => i.id === openId) : null;
//     return (
//       <div
//         className={`te-modal-backdrop${item ? ' show' : ''}`}
//         onClick={(e) => { if (e.currentTarget === e.target) closeOverlay(); }}
//       >
//         <div className={`te-modal${item ? ` ${catColorClass(item, primaries)}` : ''}`}>
//           {item && renderDetailFull(item, true)}
//         </div>
//       </div>
//     );
//   }

//   function renderDrawerOverlay() {
//     const item = (mode === 'drawer' && openId != null) ? items.find(i => i.id === openId) : null;
//     return (
//       <>
//         <div
//           className={`te-drawer-backdrop${item ? ' show' : ''}`}
//           onClick={closeOverlay}
//         />
//         <div className={`te-drawer${item ? ` show ${catColorClass(item, primaries)}` : ''}`}>
//           {item && renderDetailFull(item, true)}
//         </div>
//       </>
//     );
//   }

//   function renderLightboxOverlay() {
//     const item = (mode === 'lightbox' && openId != null) ? items.find(i => i.id === openId) : null;
//     const idx = item ? sorted.findIndex(i => i.id === item.id) : -1;
//     return (
//       <div
//         className={`te-lightbox-backdrop${item ? ' show' : ''}`}
//         onClick={(e) => { if (e.currentTarget === e.target) closeOverlay(); }}
//       >
//         {item && (
//           <>
//             <span className="te-lb-counter">
//               {idx + 1} / {sorted.length}
//             </span>
//             <button
//               className="te-lb-nav prev"
//               onClick={(e) => { e.stopPropagation(); stepLightbox(-1); }}
//               type="button"
//             >
//               ‹
//             </button>
//             <button
//               className="te-lb-nav next"
//               onClick={(e) => { e.stopPropagation(); stepLightbox(1); }}
//               type="button"
//             >
//               ›
//             </button>
//           </>
//         )}
//         <div className={`te-lightbox${item ? ` ${catColorClass(item, primaries)}` : ''}`}>
//           {item && renderDetailFull(item, true)}
//         </div>
//       </div>
//     );
//   }

//   /* ============================================================
//      MAIN RENDER
//      ============================================================ */
//   const mainClass = [
//     'te-main',
//     mode === 'split' ? 'split' : '',
//     mode === 'page' ? 'page' : '',
//     (mode === 'page' && openId != null) ? 'in-detail' : ''
//   ].filter(Boolean).join(' ');

//   return (
//     <div className="te-root" style={themeVars}>
//       <style>{CSS_TEXT}</style>

//       <header className="te-top">
//         <h1>{title}</h1>
//         <div className="te-search-wrap">
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <circle cx="11" cy="11" r="8" />
//             <line x1="21" y1="21" x2="16.65" y2="16.65" />
//           </svg>
//           <input
//             type="text"
//             placeholder={searchPlaceholder}
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>
//         <div className="te-mode-picker">
//           <span className="te-mode-picker-label">Open as</span>
//           <div className="te-mode-select-wrap">
//             <select
//               className="te-mode-select"
//               value={mode}
//               onChange={(e) => changeMode(e.target.value)}
//             >
//               {MODE_OPTIONS.map(o => (
//                 <option key={o.value} value={o.value}>{o.label}</option>
//               ))}
//             </select>
//             <span className="te-mode-select-arrow">
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
//                 <polyline points="6 9 12 15 18 9" />
//               </svg>
//             </span>
//           </div>
//         </div>
//         <span className="te-count">{sorted.length} / {items.length}</span>
//       </header>

//       <main className={mainClass}>
//         {mode !== 'split' && mode !== 'page' && renderSidebar()}

//         {mode === 'split' ? (
//           renderMasterDetail()
//         ) : (
//           <div className="te-right-col">
//             {mode !== 'page' && renderSecondaryBar()}

//             {!(mode === 'page' && openId != null) && (
//               <section className="te-results">
//                 <div className="te-results-header">
//                   <h2><span className="te-num">{sorted.length}</span> results</h2>
//                   <div className="te-sort">
//                     Sort
//                     <select value={sort} onChange={(e) => setSort(e.target.value)}>
//                       <option value="name">Name (A–Z)</option>
//                       <option value="year-asc">Year (oldest)</option>
//                       <option value="year-desc">Year (newest)</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="te-grid">
//                   {sorted.map(renderCard)}
//                 </div>
//               </section>
//             )}

//             {mode === 'page' && openId != null && renderFullPageDetail()}
//           </div>
//         )}
//       </main>

//       {renderModalOverlay()}
//       {renderDrawerOverlay()}
//       {renderLightboxOverlay()}
//     </div>
//   );
// }

// export default TheoremsExplorer;

// /* ============================================================
//    STYLES
//    ============================================================ */
// const CSS_TEXT = `
// .te-root {
//   font-family: 'DM Sans', system-ui, sans-serif;
//   background: var(--bg);
//   color: var(--ink);
//   min-height: 100vh;
// }
// .te-root *,
// .te-root *::before,
// .te-root *::after { box-sizing: border-box; }

// .te-root .te-cat-0 { --cat-c: var(--c0); --cat-cs: var(--c0s); }
// .te-root .te-cat-1 { --cat-c: var(--c1); --cat-cs: var(--c1s); }
// .te-root .te-cat-2 { --cat-c: var(--c2); --cat-cs: var(--c2s); }
// .te-root .te-cat-3 { --cat-c: var(--c3); --cat-cs: var(--c3s); }
// .te-root .te-cat-4 { --cat-c: var(--c4); --cat-cs: var(--c4s); }

// /* ---------- TOPBAR ---------- */
// .te-root .te-top {
//   background: var(--topbar-bg);
//   color: var(--topbar-ink);
//   padding: 14px 32px;
//   display: flex;
//   align-items: center;
//   gap: 18px;
//   position: sticky;
//   top: 0;
//   z-index: 50;
// }
// .te-root .te-top h1 { font-size: 19px; font-weight: 600; margin: 0; }
// .te-root .te-search-wrap {
//   flex: 1; max-width: 480px; position: relative; margin-left: 18px;
// }
// .te-root .te-search-wrap input {
//   width: 100%;
//   padding: 9px 14px 9px 38px;
//   border: 1px solid rgba(255,255,255,0.14);
//   background: rgba(255,255,255,0.06);
//   color: var(--topbar-ink);
//   border-radius: 6px;
//   font-family: inherit; font-size: 13px;
//   outline: none;
// }
// .te-root .te-search-wrap input::placeholder { color: rgba(241,245,249,0.55); }
// .te-root .te-search-wrap svg {
//   position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
//   color: rgba(241,245,249,0.55); width: 16px; height: 16px;
// }
// .te-root .te-mode-picker { display: flex; align-items: center; gap: 8px; margin-left: 12px; }
// .te-root .te-mode-picker-label {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 9.5px;
//   text-transform: uppercase;
//   letter-spacing: 0.08em;
//   color: rgba(241,245,249,0.55);
// }
// .te-root .te-mode-select-wrap { position: relative; }
// .te-root .te-mode-select {
//   appearance: none;
//   background: rgba(255,255,255,0.08);
//   border: 1px solid rgba(255,255,255,0.18);
//   color: var(--topbar-ink);
//   font-family: inherit;
//   font-size: 12.5px;
//   font-weight: 500;
//   padding: 6px 30px 6px 12px;
//   border-radius: 6px;
//   cursor: pointer;
//   outline: none;
//   min-width: 160px;
// }
// .te-root .te-mode-select option { background: var(--surface); color: var(--ink); }
// .te-root .te-mode-select-arrow {
//   position: absolute; right: 8px; top: 50%; transform: translateY(-50%);
//   pointer-events: none; color: rgba(241,245,249,0.7);
// }
// .te-root .te-mode-select-arrow svg { width: 13px; height: 13px; display: block; }
// .te-root .te-count {
//   margin-left: auto;
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 12px;
//   color: rgba(241,245,249,0.55);
// }

// /* ---------- LAYOUT ---------- */
// .te-root .te-main {
//   display: grid;
//   grid-template-columns: 260px 1fr;
//   max-width: 1400px;
//   margin: 0 auto;
// }
// .te-root .te-main.split { grid-template-columns: 1fr; }
// .te-root .te-main.split .te-right-col,
// .te-root .te-main.split .te-secondary-bar,
// .te-root .te-main.split .te-sidebar { display: none; }
// .te-root .te-main.page.in-detail .te-sidebar,
// .te-root .te-main.page.in-detail .te-secondary-bar,
// .te-root .te-main.page.in-detail .te-grid,
// .te-root .te-main.page.in-detail .te-results-header { display: none; }
// .te-root .te-main.page.in-detail { grid-template-columns: 1fr; }

// .te-root .te-sidebar {
//   border-right: 1px solid var(--border);
//   background: var(--surface);
//   padding: 22px 18px 60px;
//   min-height: calc(100vh - 53px);
//   position: sticky;
//   top: 53px;
//   align-self: start;
//   max-height: calc(100vh - 53px);
//   overflow-y: auto;
// }
// .te-root .te-filter-group h3 {
//   font-size: 11px;
//   text-transform: uppercase;
//   letter-spacing: 0.08em;
//   color: var(--muted);
//   margin: 0 0 12px;
//   font-weight: 600;
//   font-family: 'JetBrains Mono', monospace;
// }
// .te-root .te-filter-list {
//   list-style: none; padding: 0; margin: 0;
//   display: flex; flex-direction: column; gap: 2px;
// }
// .te-root .te-filter-item {
//   display: flex; align-items: center; gap: 10px;
//   padding: 7px 8px;
//   border-radius: 6px;
//   cursor: pointer;
//   font-size: 13.5px;
//   color: var(--ink-soft);
// }
// .te-root .te-filter-item:hover { background: var(--surface-alt); }
// .te-root .te-filter-item.active {
//   background: var(--accent-soft);
//   color: var(--ink);
//   font-weight: 500;
// }
// .te-root .te-filter-dot {
//   width: 12px; height: 12px;
//   border-radius: 3px;
//   border: 1.5px solid var(--border-strong);
//   flex-shrink: 0; position: relative;
// }
// .te-root .te-filter-item.active .te-filter-dot {
//   background: var(--accent);
//   border-color: var(--accent);
// }
// .te-root .te-filter-item.active .te-filter-dot::after {
//   content: ''; position: absolute;
//   left: 2px; top: 0;
//   width: 4px; height: 7px;
//   border: solid white;
//   border-width: 0 2px 2px 0;
//   transform: rotate(45deg);
// }
// .te-root .te-filter-label { flex: 1; }
// .te-root .te-filter-freq {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 11px;
//   color: var(--muted);
// }

// .te-root .te-right-col { min-width: 0; display: flex; flex-direction: column; }

// /* ---------- SECONDARY BAR ---------- */
// .te-root .te-secondary-bar {
//   background: var(--surface);
//   border-bottom: 1px solid var(--border);
//   padding: 14px 24px;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 22px;
//   align-items: flex-start;
// }
// .te-root .te-sec-facet { display: flex; flex-direction: column; gap: 6px; }
// .te-root .te-sec-facet-label {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 9.5px;
//   text-transform: uppercase;
//   letter-spacing: 0.1em;
//   color: var(--muted);
// }
// .te-root .te-sec-chip-row { display: flex; flex-wrap: wrap; gap: 5px; }
// .te-root .te-sec-chip {
//   display: inline-flex; align-items: center; gap: 5px;
//   padding: 5px 11px;
//   border: 1px solid var(--border);
//   border-radius: 999px;
//   background: var(--surface);
//   font-size: 12px;
//   color: var(--ink-soft);
//   cursor: pointer;
//   font-family: inherit;
// }
// .te-root .te-sec-chip:hover { border-color: var(--border-strong); }
// .te-root .te-sec-chip.active {
//   background: var(--accent);
//   color: white;
//   border-color: var(--accent);
// }
// .te-root .te-sec-chip-n {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 10px;
//   opacity: 0.7;
// }
// .te-root .te-clear-all-btn {
//   margin-left: auto;
//   background: transparent;
//   border: 1px dashed var(--border-strong);
//   border-radius: 6px;
//   padding: 6px 12px;
//   color: var(--ink-soft);
//   font-family: inherit;
//   font-size: 12px;
//   cursor: pointer;
//   align-self: center;
// }

// /* ---------- RESULTS ---------- */
// .te-root .te-results { min-width: 0; padding: 24px; }
// .te-root .te-results-header {
//   display: flex; align-items: baseline; gap: 12px;
//   margin-bottom: 18px; padding-bottom: 16px;
//   border-bottom: 1px solid var(--border);
// }
// .te-root .te-results-header h2 { font-size: 15px; font-weight: 500; margin: 0; }
// .te-root .te-num {
//   font-family: 'JetBrains Mono', monospace;
//   color: var(--accent);
// }
// .te-root .te-sort {
//   margin-left: auto;
//   font-size: 13px;
//   color: var(--muted);
//   display: flex; align-items: center; gap: 8px;
// }
// .te-root .te-sort select {
//   font-family: inherit; font-size: 13px;
//   padding: 5px 8px;
//   border: 1px solid var(--border);
//   border-radius: 4px;
//   background: var(--surface);
//   color: var(--ink);
// }
// .te-root .te-grid {
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
//   gap: 16px;
// }

// /* ---------- CARD ---------- */
// .te-root .te-card {
//   background: var(--surface);
//   border: 1px solid var(--border);
//   border-radius: 10px;
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   overflow: hidden;
//   box-shadow: var(--shadow);
//   cursor: pointer;
//   transition: border-color .15s, box-shadow .15s, transform .15s;
// }
// .te-root .te-card::before {
//   content: '';
//   position: absolute;
//   left: 0; top: 0; bottom: 0;
//   width: 3px;
//   background: var(--cat-c, var(--accent));
// }
// .te-root .te-card:hover {
//   box-shadow: var(--shadow-hover);
//   transform: translateY(-2px);
//   border-color: var(--border-strong);
// }
// .te-root .te-card-body {
//   padding: 16px 18px 0 22px;
//   display: flex; flex-direction: column;
//   gap: 8px; flex: 1;
// }
// .te-root .te-badge {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 10px;
//   text-transform: uppercase;
//   letter-spacing: 0.08em;
//   padding: 3px 8px;
//   border-radius: 3px;
//   background: var(--cat-cs, var(--accent-soft));
//   color: var(--cat-c, var(--accent));
//   display: inline-block;
// }
// .te-root .te-card-cats { display: flex; flex-wrap: wrap; gap: 4px; }
// .te-root .te-card h3 {
//   font-family: 'Crimson Pro', Georgia, serif;
//   font-size: 20px;
//   font-weight: 500;
//   margin: 2px 0 0;
//   line-height: 1.2;
// }
// .te-root .te-statement {
//   font-size: 13px;
//   color: var(--ink-soft);
//   line-height: 1.5;
//   flex: 1;
// }
// .te-root .te-card-tags { display: flex; flex-wrap: wrap; gap: 5px; }
// .te-root .te-card-tag {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 10.5px;
//   color: var(--muted);
//   padding: 2px 6px;
//   background: var(--surface-alt);
//   border-radius: 3px;
// }
// .te-root .te-card-cta-row { padding: 12px 16px 14px 22px; margin-top: auto; }
// .te-root .te-card-cta {
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
//   padding: 8px 12px;
//   background: var(--surface-alt);
//   border: 1px solid var(--border);
//   border-radius: 6px;
//   color: var(--ink-soft);
//   font-family: inherit;
//   font-size: 12px;
//   font-weight: 500;
//   cursor: pointer;
// }
// .te-root .te-card-cta:hover {
//   background: var(--cat-cs, var(--accent-soft));
//   color: var(--cat-c, var(--accent));
//   border-color: var(--cat-c, var(--accent));
// }
// .te-root .te-card-cta svg { width: 13px; height: 13px; }

// .te-root .te-card.expanded {
//   grid-column: 1 / -1;
//   cursor: default;
//   transform: none;
//   box-shadow: var(--shadow-lg);
//   border-color: var(--cat-c, var(--accent));
// }
// .te-root .te-inline-expand {
//   padding: 18px 22px 22px;
//   border-top: 1px dashed var(--border);
// }

// /* ---------- DETAIL CONTENT SHARED ---------- */
// .te-root .te-detail-header {
//   padding: 22px 26px 16px;
//   border-bottom: 1px solid var(--border);
//   flex-shrink: 0;
// }
// .te-root .te-detail-meta-row {
//   display: flex; align-items: center; flex-wrap: wrap;
//   gap: 6px; margin-bottom: 10px;
// }
// .te-root .te-detail-title {
//   font-family: 'Crimson Pro', Georgia, serif;
//   font-size: 28px;
//   font-weight: 500;
//   margin: 0 0 12px;
//   line-height: 1.15;
//   padding-right: 40px;
// }
// .te-root .te-detail-main {
//   font-size: 14px;
//   line-height: 1.65;
//   padding: 12px 15px;
//   background: var(--surface-alt);
//   border-left: 3px solid var(--cat-c, var(--accent));
//   border-radius: 0 6px 6px 0;
// }
// .te-root .te-meta-grid {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
//   gap: 8px 16px;
//   margin-top: 16px;
// }
// .te-root .te-meta-row {
//   display: flex;
//   flex-direction: column;
//   gap: 2px;
//   padding: 6px 10px;
//   background: var(--surface);
//   border: 1px solid var(--border);
//   border-radius: 6px;
// }
// .te-root .te-meta-label {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 9.5px;
//   text-transform: uppercase;
//   letter-spacing: 0.08em;
//   color: var(--muted);
// }
// .te-root .te-meta-value {
//   font-size: 13.5px;
//   color: var(--ink);
// }
// .te-root .te-detail-body {
//   flex: 1;
//   overflow-y: auto;
//   padding: 14px 26px 24px;
// }
// .te-root .te-detail-body p {
//   margin: 0 0 8px;
//   font-size: 14px;
//   line-height: 1.6;
//   color: var(--ink-soft);
// }
// .te-root .te-detail-body ul {
//   margin: 0 0 8px;
//   padding-left: 18px;
//   list-style: none;
// }
// .te-root .te-detail-body li {
//   position: relative;
//   padding-left: 4px;
//   margin-bottom: 5px;
//   font-size: 14px;
//   color: var(--ink-soft);
//   line-height: 1.6;
// }
// .te-root .te-detail-body li::before {
//   content: '—';
//   position: absolute;
//   left: -16px;
//   color: var(--cat-c, var(--accent));
// }
// .te-root .te-detail-close {
//   position: absolute;
//   top: 12px; right: 14px;
//   width: 30px; height: 30px;
//   border: none;
//   background: transparent;
//   color: var(--muted);
//   font-size: 22px;
//   cursor: pointer;
//   border-radius: 6px;
//   display: flex; align-items: center; justify-content: center;
//   z-index: 3;
// }
// .te-root .te-detail-close:hover {
//   background: var(--surface-alt);
//   color: var(--ink);
// }

// /* ---------- VIEW SWITCH ---------- */
// .te-root .te-view-switch-bar {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 12px;
//   margin: 16px 0 8px;
// }
// .te-root .te-view-switch-label {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 10px;
//   text-transform: uppercase;
//   letter-spacing: 0.08em;
//   color: var(--muted);
// }
// .te-root .te-view-switch {
//   display: inline-flex;
//   border: 1px solid var(--border);
//   border-radius: 6px;
//   overflow: hidden;
//   background: var(--surface);
// }
// .te-root .te-view-switch button {
//   font-family: inherit;
//   font-size: 11.5px;
//   padding: 5px 11px;
//   background: transparent;
//   border: none;
//   color: var(--ink-soft);
//   cursor: pointer;
//   border-right: 1px solid var(--border);
//   display: inline-flex;
//   align-items: center;
//   gap: 5px;
// }
// .te-root .te-view-switch button:last-child { border-right: none; }
// .te-root .te-view-switch button.active {
//   background: var(--ink);
//   color: var(--surface);
// }
// .te-root .te-view-switch svg { width: 12px; height: 12px; }

// /* ---------- TABS ---------- */
// .te-root .te-detail-tabs {
//   display: flex;
//   gap: 2px;
//   border-bottom: 1px solid var(--border);
//   margin-bottom: 14px;
//   overflow-x: auto;
// }
// .te-root .te-detail-tab {
//   background: transparent;
//   border: none;
//   padding: 9px 14px;
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 10.5px;
//   text-transform: uppercase;
//   letter-spacing: 0.08em;
//   color: var(--muted);
//   cursor: pointer;
//   border-bottom: 2px solid transparent;
//   margin-bottom: -1px;
//   font-weight: 500;
//   white-space: nowrap;
// }
// .te-root .te-detail-tab.active {
//   color: var(--cat-c, var(--accent));
//   border-bottom-color: var(--cat-c, var(--accent));
//   font-weight: 600;
// }

// /* ---------- ACCORDION ---------- */
// .te-root .te-detail-accordion {
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
// }
// .te-root .te-acc-item {
//   border: 1px solid var(--border);
//   border-radius: 8px;
//   overflow: hidden;
//   background: var(--surface);
// }
// .te-root .te-acc-item.open { border-color: var(--cat-c, var(--accent)); }
// .te-root .te-acc-header {
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 11px 14px;
//   background: var(--surface-alt);
//   border: none;
//   cursor: pointer;
//   font-family: inherit;
//   text-align: left;
// }
// .te-root .te-acc-item.open .te-acc-header {
//   background: var(--cat-cs, var(--accent-soft));
// }
// .te-root .te-acc-label {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 11px;
//   text-transform: uppercase;
//   letter-spacing: 0.08em;
//   font-weight: 600;
//   color: var(--ink-soft);
// }
// .te-root .te-acc-item.open .te-acc-label {
//   color: var(--cat-c, var(--accent));
// }
// .te-root .te-acc-chev {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 11px;
//   color: var(--muted);
//   transition: transform .2s;
// }
// .te-root .te-acc-item.open .te-acc-chev {
//   transform: rotate(90deg);
//   color: var(--cat-c, var(--accent));
// }
// .te-root .te-acc-body {
//   padding: 14px 16px;
//   border-top: 1px solid var(--border);
// }

// /* ---------- MASTER-DETAIL ---------- */
// .te-root .te-md-wrap {
//   display: grid;
//   grid-template-columns: 320px 1fr;
//   grid-column: 1 / -1;
//   height: calc(100vh - 53px);
// }
// .te-root .te-md-list {
//   border-right: 1px solid var(--border);
//   background: var(--surface);
//   overflow-y: auto;
//   padding: 16px;
// }
// .te-root .te-md-row {
//   padding: 12px 14px;
//   border-radius: 6px;
//   cursor: pointer;
//   position: relative;
//   margin-bottom: 4px;
//   border-left: 3px solid var(--cat-c, var(--border));
// }
// .te-root .te-md-row:hover { background: var(--surface-alt); }
// .te-root .te-md-row.selected { background: var(--accent-soft); }
// .te-root .te-md-row h4 {
//   font-family: 'Crimson Pro', Georgia, serif;
//   font-size: 17px;
//   font-weight: 500;
//   margin: 0 0 3px;
//   color: var(--ink);
// }
// .te-root .te-md-row .te-md-cats {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 10px;
//   color: var(--muted);
//   text-transform: uppercase;
// }
// .te-root .te-md-detail {
//   overflow-y: auto;
//   padding: 32px 40px;
// }
// .te-root .te-md-empty {
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: var(--muted);
//   font-style: italic;
// }

// /* ---------- FULL-PAGE DETAIL ---------- */
// .te-root .te-fp-detail {
//   padding: 24px 40px;
// }
// .te-root .te-fp-back {
//   background: transparent;
//   border: none;
//   color: var(--accent);
//   font-family: inherit;
//   font-size: 13px;
//   font-weight: 500;
//   cursor: pointer;
//   margin-bottom: 18px;
//   padding: 0;
//   display: inline-flex;
//   align-items: center;
//   gap: 6px;
// }

// /* ---------- MODAL ---------- */
// .te-root .te-modal-backdrop {
//   position: fixed; inset: 0;
//   background: rgba(15,23,42,0.55);
//   display: flex; justify-content: center; align-items: center;
//   padding: 20px;
//   z-index: 100;
//   opacity: 0;
//   pointer-events: none;
//   transition: opacity .2s;
// }
// .te-root .te-modal-backdrop.show {
//   opacity: 1;
//   pointer-events: auto;
// }
// .te-root .te-modal {
//   background: var(--surface);
//   border-radius: 12px;
//   max-width: 720px;
//   width: 100%;
//   max-height: 90vh;
//   overflow: hidden;
//   box-shadow: var(--shadow-lg);
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   transform: translateY(20px);
//   transition: transform .2s;
// }
// .te-root .te-modal-backdrop.show .te-modal { transform: translateY(0); }
// .te-root .te-modal::before {
//   content: '';
//   position: absolute;
//   left: 0; top: 0; bottom: 0;
//   width: 4px;
//   background: var(--cat-c, var(--accent));
//   border-radius: 12px 0 0 12px;
// }

// /* ---------- DRAWER ---------- */
// .te-root .te-drawer-backdrop {
//   position: fixed; inset: 0;
//   background: rgba(15,23,42,0.3);
//   z-index: 80;
//   opacity: 0;
//   pointer-events: none;
//   transition: opacity .25s;
// }
// .te-root .te-drawer-backdrop.show {
//   opacity: 1;
//   pointer-events: auto;
// }
// .te-root .te-drawer {
//   position: fixed;
//   top: 0; right: 0; bottom: 0;
//   width: min(520px, 90vw);
//   background: var(--surface);
//   border-left: 1px solid var(--border);
//   box-shadow: -12px 0 40px rgba(15,23,42,0.15);
//   z-index: 90;
//   transform: translateX(100%);
//   transition: transform .3s;
//   display: flex;
//   flex-direction: column;
//   overflow: hidden;
// }
// .te-root .te-drawer.show { transform: translateX(0); }
// .te-root .te-drawer::before {
//   content: '';
//   position: absolute;
//   left: 0; top: 0; bottom: 0;
//   width: 4px;
//   background: var(--cat-c, var(--accent));
// }

// /* ---------- LIGHTBOX ---------- */
// .te-root .te-lightbox-backdrop {
//   position: fixed; inset: 0;
//   background: rgba(0,0,0,0.85);
//   display: flex; justify-content: center; align-items: center;
//   padding: 60px;
//   z-index: 100;
//   opacity: 0;
//   pointer-events: none;
//   transition: opacity .25s;
// }
// .te-root .te-lightbox-backdrop.show {
//   opacity: 1;
//   pointer-events: auto;
// }
// .te-root .te-lightbox {
//   background: var(--surface);
//   border-radius: 12px;
//   max-width: 900px;
//   width: 100%;
//   max-height: 90vh;
//   overflow: hidden;
//   box-shadow: var(--shadow-lg);
//   position: relative;
//   display: flex;
//   flex-direction: column;
// }
// .te-root .te-lightbox::before {
//   content: '';
//   position: absolute;
//   left: 0; top: 0; bottom: 0;
//   width: 4px;
//   background: var(--cat-c, var(--accent));
//   border-radius: 12px 0 0 12px;
// }
// .te-root .te-lb-nav {
//   position: fixed;
//   top: 50%;
//   transform: translateY(-50%);
//   background: rgba(255,255,255,0.1);
//   border: 1px solid rgba(255,255,255,0.2);
//   color: white;
//   width: 44px;
//   height: 44px;
//   border-radius: 50%;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 20px;
//   z-index: 101;
// }
// .te-root .te-lb-nav.prev { left: 20px; }
// .te-root .te-lb-nav.next { right: 20px; }
// .te-root .te-lb-counter {
//   position: fixed;
//   top: 24px;
//   left: 50%;
//   transform: translateX(-50%);
//   color: rgba(255,255,255,0.7);
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 12px;
//   z-index: 101;
// }

// /* ---------- RESPONSIVE ---------- */
// @media (max-width: 900px) {
//   .te-root .te-main { grid-template-columns: 1fr; }
//   .te-root .te-sidebar { display: none; }
// }
// `;



import React, { useState, useEffect, useMemo } from 'react';
import {processContent} from '../../../utils/contentProcessor'

/* ============================================================
   DEMO DATA (fallback when no `items` prop is provided)
   ============================================================ */
const DEMO_ITEMS = [
  {
    id: 1, name: 'Pythagorean Theorem',
    formula: 'In a right triangle: a² + b² = c².',
    categories: ['Geometry'], tags: ['triangle', 'euclidean'],
    era: 'ancient', difficulty: 'undergraduate', year: -500,
    fields: {
      properties: '- Only holds for right triangles\n- Has a converse',
      history: 'Known to Babylonians long before Pythagoras.'
    }
  },
  {
    id: 2, name: 'Fundamental Theorem of Arithmetic',
    formula: 'Every integer > 1 is uniquely a product of primes.',
    categories: ['Number Theory', 'Algebra'], tags: ['primes', 'factorization'],
    era: 'ancient', difficulty: 'undergraduate', year: -300,
    fields: {
      properties: '- Existence of prime factorization\n- Uniqueness up to ordering',
      history: 'First proved by Gauss in 1801.'
    }
  },
  {
    id: 3, name: 'Fundamental Theorem of Calculus',
    formula: 'Differentiation and integration are inverse operations.',
    categories: ['Analysis'], tags: ['calculus', 'integration'],
    era: 'classical', difficulty: 'undergraduate', year: 1670,
    fields: {
      properties: '- Two parts: differentiation, evaluation\n- Requires continuity',
      history: 'Newton and Leibniz, independently.'
    }
  },
  {
    id: 4, name: 'Euler Identity',
    formula: 'e^(iπ) + 1 = 0.',
    categories: ['Analysis'], tags: ['complex', 'constants'],
    era: 'classical', difficulty: 'undergraduate', year: 1748,
    fields: { properties: '- Relates 0, 1, e, i, π\n- Special case of Euler formula' }
  },
  {
    id: 5, name: 'Bayes Theorem',
    formula: 'P(A|B) = P(B|A) · P(A) / P(B).',
    categories: ['Probability'], tags: ['conditional', 'inference'],
    era: 'classical', difficulty: 'undergraduate', year: 1763,
    fields: {
      properties: '- Prior, posterior, likelihood',
      applications: '- Spam filtering\n- Medical diagnostics'
    }
  },
  {
    id: 6, name: 'Fundamental Theorem of Algebra',
    formula: 'Every non-constant complex polynomial has at least one complex root.',
    categories: ['Algebra'], tags: ['polynomials', 'roots'],
    era: 'classical', difficulty: 'undergraduate', year: 1799,
    fields: { properties: '- C is algebraically closed\n- Degree-n polynomial has n roots' }
  },
  {
    id: 7, name: 'Gödel Incompleteness',
    formula: 'Any consistent formal system rich enough to express arithmetic contains true unprovable statements.',
    categories: ['Algebra'], tags: ['foundations', 'self-reference'],
    era: 'modern', difficulty: 'graduate', year: 1931,
    fields: {
      properties: '- Two theorems\n- Uses Gödel numbering',
      history: 'Proved by Gödel at age 25.'
    }
  },
  {
    id: 8, name: 'Four Color Theorem',
    formula: 'Any planar map can be colored with no more than four colors.',
    categories: ['Geometry'], tags: ['graph-theory', 'coloring'],
    era: 'modern', difficulty: 'graduate', year: 1976,
    fields: { properties: '- First major computer-assisted proof' }
  }
];

/* ============================================================
   DEFAULT SECONDARY FACETS SCHEMA
   ============================================================ */
const DEFAULT_SECONDARY_FACETS = [
  { key: 'categories', from: 'rest', label: 'Topics', multi: true },
  { key: 'era', label: 'Era' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'tags', label: 'Tags', multi: true }
];

/* ============================================================
   THEMES
   ============================================================ */
const THEMES = {
  default: {
    '--bg': '#f6f8fb',
    '--surface': '#ffffff',
    '--surface-alt': '#f1f5f9',
    '--ink': '#0f172a',
    '--ink-soft': '#475569',
    '--muted': '#94a3b8',
    '--border': '#e2e8f0',
    '--border-strong': '#cbd5e1',
    '--accent': '#2563eb',
    '--accent-soft': '#dbeafe',
    '--topbar-bg': '#173c94',
    '--topbar-ink': '#f1f5f9',
    '--c0': '#2563eb', '--c0s': '#dbeafe',
    '--c1': '#0e7490', '--c1s': '#cffafe',
    '--c2': '#475569', '--c2s': '#e2e8f0',
    '--c3': '#1e40af', '--c3s': '#dbeafe',
    '--c4': '#0369a1', '--c4s': '#e0f2fe',
    '--shadow': '0 1px 2px rgba(15,23,42,.04),0 4px 12px rgba(15,23,42,.05)',
    '--shadow-hover': '0 2px 4px rgba(15,23,42,.06),0 12px 28px rgba(15,23,42,.08)',
    '--shadow-lg': '0 2px 8px rgba(15,23,42,.08),0 24px 60px rgba(15,23,42,.14)'
  }
};

const MODE_OPTIONS = [
  { value: 'inline', label: 'Inline' },
  { value: 'modal', label: 'Modal' },
  { value: 'drawer', label: 'Drawer' },
  { value: 'split', label: 'Master-detail' },
  { value: 'page', label: 'Full page' },
  { value: 'lightbox', label: 'Lightbox' }
];

/* ============================================================
   HELPERS
   ============================================================ */
function cap(s) {
  if (!s) return '';
  const str = String(s);
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function isPresent(v) {
  if (v == null) return false;
  if (typeof v === 'string') return v.trim() !== '';
  if (Array.isArray(v)) return v.length > 0;
  return true;
}

function facetValuesForItem(item, facet) {
  if (facet.key === 'categories' && facet.from === 'rest') {
    return (item.categories || []).slice(1).filter(isPresent);
  }
  const raw = item[facet.key];
  if (!isPresent(raw)) return [];
  if (Array.isArray(raw)) return raw.filter(isPresent);
  return [raw];
}

function allFacetValues(items, facet) {
  const counts = {};
  items.forEach(it => {
    facetValuesForItem(it, facet).forEach(v => {
      const k = String(v);
      counts[k] = (counts[k] || 0) + 1;
    });
  });
  return Object.keys(counts).sort().map(v => ({ value: v, count: counts[v] }));
}

function allPrimaryCategories(items) {
  const counts = {};
  items.forEach(it => {
    const p = (it.categories || [])[0];
    if (isPresent(p)) counts[p] = (counts[p] || 0) + 1;
  });
  return Object.keys(counts).sort().map(v => ({ value: v, count: counts[v] }));
}

function catColorClass(item, primaries) {
  const p = (item.categories || [])[0];
  if (!isPresent(p)) return 'te-cat-0';
  const idx = primaries.findIndex(c => c.value === p);
  return `te-cat-${(idx < 0 ? 0 : idx) % 5}`;
}

function renderFieldBody(value, keyPrefix = 'b') {
  if (!isPresent(value)) return null;
  const lines = String(value).split('\n');
  const blocks = [];
  let bullets = [];
  let para = [];
  const flushPara = () => {
    if (para.length) { blocks.push({ t: 'p', text: para.join(' ') }); para = []; }
  };
  const flushBullets = () => {
    if (bullets.length) { blocks.push({ t: 'ul', items: [...bullets] }); bullets = []; }
  };
  lines.forEach(raw => {
    const line = raw.trim();
    if (line.startsWith('- ')) { flushPara(); bullets.push(line.slice(2)); }
    else if (line === '') { flushPara(); flushBullets(); }
    else { flushBullets(); para.push(line); }
  });
  flushPara();
  flushBullets();
  return blocks.map((b, i) => {
    if (b.t === 'p') {
      return <p key={`${keyPrefix}-${i}`}>{processContent(b.text)}</p>;
    }
    return (
      <ul key={`${keyPrefix}-${i}`}>
        {b.items.map((it, j) => (
          <li key={`${keyPrefix}-${i}-${j}`}>{processContent(it)}</li>
        ))}
      </ul>
    );
  });
}

function getFieldEntries(item) {
  if (!item || !item.fields || typeof item.fields !== 'object') return [];
  return Object.entries(item.fields).filter(([, v]) => isPresent(v));
}

/* ============================================================
   COMPONENT
   ============================================================ */
function TheoremsExplorer({
  items = DEMO_ITEMS,
  theme = 'default',
  title = 'Theorems Explorer',
  searchPlaceholder = 'Search...',
  primarySidebarLabel = 'Category',
  secondaryFacets = DEFAULT_SECONDARY_FACETS,
  mainTextField = 'formula',
  metaFields = [
    { key: 'year', label: 'Year' },
    { key: 'era', label: 'Era' },
    { key: 'difficulty', label: 'Difficulty' }
  ]
}) {
  /* ---- state ---- */
  const [search, setSearch] = useState('');
  const [catFilter, setCatFilter] = useState(() => new Set());
  const [secFilters, setSecFilters] = useState({});
  const [sort, setSort] = useState('name');
  const [mode, setMode] = useState('inline');
  const [openId, setOpenId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [viewMode, setViewMode] = useState('tabs');
  const [activeTab, setActiveTab] = useState(null);
  const [openAcc, setOpenAcc] = useState(() => new Set());

  /* ---- derived ---- */
  const primaries = useMemo(() => allPrimaryCategories(items), [items]);

  const facetsWithValues = useMemo(
    () => secondaryFacets
      .map(f => ({ ...f, values: allFacetValues(items, f) }))
      .filter(f => f.values.length > 0),
    [items, secondaryFacets]
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return items.filter(item => {
      const primary = (item.categories || [])[0];
      if (catFilter.size > 0 && (!isPresent(primary) || !catFilter.has(primary))) return false;
      for (const facet of secondaryFacets) {
        const set = secFilters[facet.label];
        if (set && set.size > 0) {
          const vals = facetValuesForItem(item, facet).map(String);
          const ok = vals.some(v => set.has(v));
          if (!ok) return false;
        }
      }
      if (q) {
        const hay = [
          item.name,
          item[mainTextField],
          ...(item.categories || []),
          ...(item.tags || [])
        ].filter(isPresent).join(' ').toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [items, search, catFilter, secFilters, secondaryFacets, mainTextField]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    arr.sort((a, b) => {
      if (sort === 'name') return String(a.name || '').localeCompare(String(b.name || ''));
      const ay = a.year != null ? Number(a.year) : 0;
      const by = b.year != null ? Number(b.year) : 0;
      if (sort === 'year-asc') return ay - by;
      return by - ay;
    });
    return arr;
  }, [filtered, sort]);

  /* ---- effects: reset detail-view state when active item changes ---- */
  useEffect(() => {
    const activeId = mode === 'inline' ? expandedId : openId;
    if (activeId == null) {
      setActiveTab(null);
      setOpenAcc(new Set());
      return;
    }
    const item = items.find(i => i.id === activeId);
    if (!item) return;
    const entries = getFieldEntries(item);
    if (entries.length > 0) {
      setActiveTab(entries[0][0]);
      setOpenAcc(new Set([entries[0][0]]));
    } else {
      setActiveTab(null);
      setOpenAcc(new Set());
    }
  }, [openId, expandedId, mode, items]);

  /* ---- effects: keyboard ---- */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        if (openId != null) setOpenId(null);
        if (expandedId != null) setExpandedId(null);
      }
      if (mode === 'lightbox' && openId != null) {
        if (e.key === 'ArrowLeft') stepLightbox(-1);
        if (e.key === 'ArrowRight') stepLightbox(1);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  /* ---- effects: body scroll lock for overlays ---- */
  useEffect(() => {
    const overlayOpen = (mode === 'modal' || mode === 'drawer' || mode === 'lightbox') && openId != null;
    if (overlayOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [mode, openId]);

  /* ---- handlers ---- */
  const hasAnyFilter = search !== '' || catFilter.size > 0 ||
    Object.values(secFilters).some(s => s && s.size > 0);

  function togglePrimary(value) {
    const next = new Set(catFilter);
    if (next.has(value)) next.delete(value); else next.add(value);
    setCatFilter(next);
  }

  function toggleSecondary(facetLabel, value) {
    const cur = secFilters[facetLabel] || new Set();
    const next = new Set(cur);
    if (next.has(value)) next.delete(value); else next.add(value);
    setSecFilters({ ...secFilters, [facetLabel]: next });
  }

  function clearAll() {
    setSearch('');
    setCatFilter(new Set());
    setSecFilters({});
  }

  function openItem(id) {
    if (mode === 'inline') {
      setExpandedId(prev => prev === id ? null : id);
    } else {
      setOpenId(id);
    }
  }

  function closeOverlay() {
    setOpenId(null);
  }

  function changeMode(newMode) {
    setOpenId(null);
    setExpandedId(null);
    setMode(newMode);
  }

  function stepLightbox(dir) {
    if (!sorted.length) return;
    const idx = sorted.findIndex(i => i.id === openId);
    if (idx < 0) return;
    const nextIdx = (idx + dir + sorted.length) % sorted.length;
    setOpenId(sorted[nextIdx].id);
  }

  function toggleAcc(k) {
    const next = new Set(openAcc);
    if (next.has(k)) next.delete(k); else next.add(k);
    setOpenAcc(next);
  }

  /* ---- theme vars ---- */
  const themeVars = THEMES[theme] || THEMES.default;

  /* ============================================================
     RENDER HELPERS
     ============================================================ */
  function renderDetailContent(item) {
    if (!item) return null;
    const mainVal = item[mainTextField];
    const presentMeta = metaFields.filter(f => isPresent(item[f.key]));
    const fieldEntries = getFieldEntries(item);
    const currentTab = (activeTab && item.fields && isPresent(item.fields[activeTab]))
      ? activeTab
      : (fieldEntries[0] && fieldEntries[0][0]);

    return (
      <>
        {isPresent(mainVal) && (
          <div className="te-detail-main">{processContent(String(mainVal))}</div>
        )}

        {presentMeta.length > 0 && (
          <div className="te-meta-grid">
            {presentMeta.map(f => (
              <div className="te-meta-row" key={f.key}>
                <span className="te-meta-label">{f.label}</span>
                <span className="te-meta-value">{processContent(String(item[f.key]))}</span>
              </div>
            ))}
          </div>
        )}

        {fieldEntries.length > 0 && (
          <>
            <div className="te-view-switch-bar">
              <span className="te-view-switch-label">View</span>
              <div className="te-view-switch">
                <button
                  className={viewMode === 'tabs' ? 'active' : ''}
                  onClick={(e) => { e.stopPropagation(); setViewMode('tabs'); }}
                  type="button"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="1.5" />
                    <path d="M3 10h18M9 5v5" />
                  </svg>
                  Tabs
                </button>
                <button
                  className={viewMode === 'accordion' ? 'active' : ''}
                  onClick={(e) => { e.stopPropagation(); setViewMode('accordion'); }}
                  type="button"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="5" rx="1" />
                    <rect x="3" y="11" width="18" height="9" rx="1" />
                  </svg>
                  Accordion
                </button>
              </div>
            </div>

            {viewMode === 'tabs' ? (
              <>
                <div className="te-detail-tabs">
                  {fieldEntries.map(([k]) => (
                    <button
                      key={k}
                      className={`te-detail-tab${currentTab === k ? ' active' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setActiveTab(k); }}
                      type="button"
                    >
                      {cap(k)}
                    </button>
                  ))}
                </div>
                <div className="te-detail-section">
                  {currentTab && renderFieldBody(item.fields[currentTab], `tab-${currentTab}`)}
                </div>
              </>
            ) : (
              <div className="te-detail-accordion">
                {fieldEntries.map(([k, v]) => {
                  const isOpen = openAcc.has(k);
                  return (
                    <div key={k} className={`te-acc-item${isOpen ? ' open' : ''}`}>
                      <button
                        className="te-acc-header"
                        onClick={(e) => { e.stopPropagation(); toggleAcc(k); }}
                        type="button"
                      >
                        <span className="te-acc-label">{cap(k)}</span>
                        <span className="te-acc-chev">▸</span>
                      </button>
                      {isOpen && (
                        <div className="te-acc-body">{renderFieldBody(v, `acc-${k}`)}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </>
    );
  }

  function renderDetailHeader(item) {
    const cats = item.categories || [];
    return (
      <div className="te-detail-header">
        {cats.length > 0 && (
          <div className="te-detail-meta-row">
            {cats.map(c => (
              <span key={c} className="te-badge">{c}</span>
            ))}
          </div>
        )}
        <h2 className="te-detail-title">{item.name || 'Untitled'}</h2>
      </div>
    );
  }

  function renderDetailFull(item, withClose) {
    return (
      <>
        {withClose && (
          <button className="te-detail-close" onClick={closeOverlay} type="button">×</button>
        )}
        {renderDetailHeader(item)}
        <div className="te-detail-body">{renderDetailContent(item)}</div>
      </>
    );
  }

  function renderCard(item) {
    const cc = catColorClass(item, primaries);
    const cats = item.categories || [];
    const tags = item.tags || [];
    const expanded = mode === 'inline' && expandedId === item.id;
    const mainVal = item[mainTextField];

    return (
      <article
        key={item.id}
        className={`te-card ${cc}${expanded ? ' expanded' : ''}`}
        onClick={() => openItem(item.id)}
      >
        <div className="te-card-body">
          {cats.length > 0 && (
            <div className="te-card-cats">
              {cats.map(c => (
                <span key={c} className="te-badge">{c}</span>
              ))}
            </div>
          )}
          <h3>{item.name || 'Untitled'}</h3>
          {isPresent(mainVal) && (
            <div className="te-statement">{processContent(String(mainVal))}</div>
          )}
          {tags.length > 0 && (
            <div className="te-card-tags">
              {tags.slice(0, 4).map(t => (
                <span key={t} className="te-card-tag">{t}</span>
              ))}
            </div>
          )}
        </div>
        {expanded && (
          <div className="te-inline-expand" onClick={(e) => e.stopPropagation()}>
            {renderDetailContent(item)}
          </div>
        )}
        <div className="te-card-cta-row">
          <button
            className="te-card-cta"
            type="button"
            onClick={(e) => { e.stopPropagation(); openItem(item.id); }}
          >
            <span>{expanded ? 'Collapse' : 'View details'}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </article>
    );
  }

  function renderSidebar() {
    if (primaries.length === 0) return null;
    return (
      <aside className="te-sidebar">
        <div className="te-filter-group">
          <h3>{primarySidebarLabel}</h3>
          <ul className="te-filter-list">
            {primaries.map(({ value, count }) => {
              const active = catFilter.has(value);
              return (
                <li
                  key={value}
                  className={`te-filter-item${active ? ' active' : ''}`}
                  onClick={() => togglePrimary(value)}
                >
                  <span className="te-filter-dot"></span>
                  <span className="te-filter-label">{value}</span>
                  <span className="te-filter-freq">{count}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    );
  }

  function renderSecondaryBar() {
    if (facetsWithValues.length === 0 && !hasAnyFilter) return null;
    return (
      <div className="te-secondary-bar">
        {facetsWithValues.map(facet => {
          const set = secFilters[facet.label] || new Set();
          return (
            <div className="te-sec-facet" key={facet.label}>
              <div className="te-sec-facet-label">{facet.label}</div>
              <div className="te-sec-chip-row">
                {facet.values.map(({ value, count }) => {
                  const active = set.has(value);
                  return (
                    <button
                      key={value}
                      className={`te-sec-chip${active ? ' active' : ''}`}
                      onClick={() => toggleSecondary(facet.label, value)}
                      type="button"
                    >
                      <span>{value}</span>
                      <span className="te-sec-chip-n">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
        {hasAnyFilter && (
          <button
            className="te-clear-all-btn"
            onClick={clearAll}
            type="button"
          >
            Clear all
          </button>
        )}
      </div>
    );
  }

  function renderMasterDetail() {
    const item = openId != null ? items.find(i => i.id === openId) : null;
    return (
      <div className="te-md-wrap">
        <div className="te-md-list">
          {sorted.map(it => {
            const cc = catColorClass(it, primaries);
            const sel = openId === it.id ? ' selected' : '';
            const cats = it.categories || [];
            return (
              <div
                key={it.id}
                className={`te-md-row ${cc}${sel}`}
                onClick={() => setOpenId(it.id)}
              >
                <h4>{it.name || 'Untitled'}</h4>
                {cats.length > 0 && (
                  <div className="te-md-cats">{cats.join(' · ')}</div>
                )}
              </div>
            );
          })}
        </div>
        <div className="te-md-detail">
          {item ? (
            <div className={catColorClass(item, primaries)} style={{ maxWidth: 680 }}>
              {renderDetailHeader(item)}
              {renderDetailContent(item)}
            </div>
          ) : (
            <div className="te-md-empty">Select an item from the list.</div>
          )}
        </div>
      </div>
    );
  }

  function renderFullPageDetail() {
    const item = openId != null ? items.find(i => i.id === openId) : null;
    if (!item) return null;
    return (
      <div className="te-fp-detail">
        <button className="te-fp-back" onClick={closeOverlay} type="button">
          ← Back to list
        </button>
        <div className={catColorClass(item, primaries)} style={{ maxWidth: 760 }}>
          {renderDetailHeader(item)}
          {renderDetailContent(item)}
        </div>
      </div>
    );
  }

  function renderModalOverlay() {
    const item = (mode === 'modal' && openId != null) ? items.find(i => i.id === openId) : null;
    return (
      <div
        className={`te-modal-backdrop${item ? ' show' : ''}`}
        onClick={(e) => { if (e.currentTarget === e.target) closeOverlay(); }}
      >
        <div className={`te-modal${item ? ` ${catColorClass(item, primaries)}` : ''}`}>
          {item && renderDetailFull(item, true)}
        </div>
      </div>
    );
  }

  function renderDrawerOverlay() {
    const item = (mode === 'drawer' && openId != null) ? items.find(i => i.id === openId) : null;
    return (
      <>
        <div
          className={`te-drawer-backdrop${item ? ' show' : ''}`}
          onClick={closeOverlay}
        />
        <div className={`te-drawer${item ? ` show ${catColorClass(item, primaries)}` : ''}`}>
          {item && renderDetailFull(item, true)}
        </div>
      </>
    );
  }

  function renderLightboxOverlay() {
    const item = (mode === 'lightbox' && openId != null) ? items.find(i => i.id === openId) : null;
    const idx = item ? sorted.findIndex(i => i.id === item.id) : -1;
    return (
      <div
        className={`te-lightbox-backdrop${item ? ' show' : ''}`}
        onClick={(e) => { if (e.currentTarget === e.target) closeOverlay(); }}
      >
        {item && (
          <>
            <span className="te-lb-counter">
              {idx + 1} / {sorted.length}
            </span>
            <button
              className="te-lb-nav prev"
              onClick={(e) => { e.stopPropagation(); stepLightbox(-1); }}
              type="button"
            >
              ‹
            </button>
            <button
              className="te-lb-nav next"
              onClick={(e) => { e.stopPropagation(); stepLightbox(1); }}
              type="button"
            >
              ›
            </button>
          </>
        )}
        <div className={`te-lightbox${item ? ` ${catColorClass(item, primaries)}` : ''}`}>
          {item && renderDetailFull(item, true)}
        </div>
      </div>
    );
  }

  /* ============================================================
     MAIN RENDER
     ============================================================ */
  const mainClass = [
    'te-main',
    mode === 'split' ? 'split' : '',
    mode === 'page' ? 'page' : '',
    (mode === 'page' && openId != null) ? 'in-detail' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className="te-root" style={themeVars}>
      <style dangerouslySetInnerHTML={{ __html: CSS_TEXT }} />

      <header className="te-top">
        <h1>{title}</h1>
        <div className="te-search-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="te-mode-picker">
          <span className="te-mode-picker-label">Open as</span>
          <div className="te-mode-select-wrap">
            <select
              className="te-mode-select"
              value={mode}
              onChange={(e) => changeMode(e.target.value)}
            >
              {MODE_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <span className="te-mode-select-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </div>
        </div>
        <span className="te-count">{sorted.length} / {items.length}</span>
      </header>

      <main className={mainClass}>
        {mode !== 'split' && mode !== 'page' && renderSidebar()}

        {mode === 'split' ? (
          renderMasterDetail()
        ) : (
          <div className="te-right-col">
            {mode !== 'page' && renderSecondaryBar()}

            {!(mode === 'page' && openId != null) && (
              <section className="te-results">
                <div className="te-results-header">
                  <h2><span className="te-num">{sorted.length}</span> results</h2>
                  <div className="te-sort">
                    Sort
                    <select value={sort} onChange={(e) => setSort(e.target.value)}>
                      <option value="name">Name (A–Z)</option>
                      <option value="year-asc">Year (oldest)</option>
                      <option value="year-desc">Year (newest)</option>
                    </select>
                  </div>
                </div>
                <div className="te-grid">
                  {sorted.map(renderCard)}
                </div>
              </section>
            )}

            {mode === 'page' && openId != null && renderFullPageDetail()}
          </div>
        )}
      </main>

      {renderModalOverlay()}
      {renderDrawerOverlay()}
      {renderLightboxOverlay()}
    </div>
  );
}

export default TheoremsExplorer;

/* ============================================================
   STYLES
   ============================================================ */
const CSS_TEXT = `
.te-root {
  font-family: 'DM Sans', system-ui, sans-serif;
  background: var(--bg);
  color: var(--ink);
  min-height: 100vh;
}
.te-root *,
.te-root *::before,
.te-root *::after { box-sizing: border-box; }

.te-root .te-cat-0 { --cat-c: var(--c0); --cat-cs: var(--c0s); }
.te-root .te-cat-1 { --cat-c: var(--c1); --cat-cs: var(--c1s); }
.te-root .te-cat-2 { --cat-c: var(--c2); --cat-cs: var(--c2s); }
.te-root .te-cat-3 { --cat-c: var(--c3); --cat-cs: var(--c3s); }
.te-root .te-cat-4 { --cat-c: var(--c4); --cat-cs: var(--c4s); }

/* ---------- TOPBAR ---------- */
.te-root .te-top {
  background: var(--topbar-bg);
  color: var(--topbar-ink);
  padding: 14px 32px;
  display: flex;
  align-items: center;
  gap: 18px;
  position: sticky;
  top: 0;
  z-index: 50;
}
.te-root .te-top h1 { font-size: 19px; font-weight: 600; margin: 0; }
.te-root .te-search-wrap {
  flex: 1; max-width: 480px; position: relative; margin-left: 18px;
}
.te-root .te-search-wrap input {
  width: 100%;
  padding: 9px 14px 9px 38px;
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(255,255,255,0.06);
  color: var(--topbar-ink);
  border-radius: 6px;
  font-family: inherit; font-size: 13px;
  outline: none;
}
.te-root .te-search-wrap input::placeholder { color: rgba(241,245,249,0.55); }
.te-root .te-search-wrap svg {
  position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
  color: rgba(241,245,249,0.55); width: 16px; height: 16px;
}
.te-root .te-mode-picker { display: flex; align-items: center; gap: 8px; margin-left: 12px; }
.te-root .te-mode-picker-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9.5px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(241,245,249,0.55);
}
.te-root .te-mode-select-wrap { position: relative; }
.te-root .te-mode-select {
  appearance: none;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.18);
  color: var(--topbar-ink);
  font-family: inherit;
  font-size: 12.5px;
  font-weight: 500;
  padding: 6px 30px 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  min-width: 160px;
}
.te-root .te-mode-select option { background: var(--surface); color: var(--ink); }
.te-root .te-mode-select-arrow {
  position: absolute; right: 8px; top: 50%; transform: translateY(-50%);
  pointer-events: none; color: rgba(241,245,249,0.7);
}
.te-root .te-mode-select-arrow svg { width: 13px; height: 13px; display: block; }
.te-root .te-count {
  margin-left: auto;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: rgba(241,245,249,0.55);
}

/* ---------- LAYOUT ---------- */
.te-root .te-main {
  display: grid;
  grid-template-columns: 260px 1fr;
  max-width: 1400px;
  margin: 0 auto;
}
.te-root .te-main.split { grid-template-columns: 1fr; }
.te-root .te-main.split .te-right-col,
.te-root .te-main.split .te-secondary-bar,
.te-root .te-main.split .te-sidebar { display: none; }
.te-root .te-main.page.in-detail .te-sidebar,
.te-root .te-main.page.in-detail .te-secondary-bar,
.te-root .te-main.page.in-detail .te-grid,
.te-root .te-main.page.in-detail .te-results-header { display: none; }
.te-root .te-main.page.in-detail { grid-template-columns: 1fr; }

.te-root .te-sidebar {
  border-right: 1px solid var(--border);
  background: var(--surface);
  padding: 22px 18px 60px;
  min-height: calc(100vh - 53px);
  position: sticky;
  top: 53px;
  align-self: start;
  max-height: calc(100vh - 53px);
  overflow-y: auto;
}
.te-root .te-filter-group h3 {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  margin: 0 0 12px;
  font-weight: 600;
  font-family: 'JetBrains Mono', monospace;
}
.te-root .te-filter-list {
  list-style: none; padding: 0; margin: 0;
  display: flex; flex-direction: column; gap: 2px;
}
.te-root .te-filter-item {
  display: flex; align-items: center; gap: 10px;
  padding: 7px 8px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13.5px;
  color: var(--ink-soft);
}
.te-root .te-filter-item:hover { background: var(--surface-alt); }
.te-root .te-filter-item.active {
  background: var(--accent-soft);
  color: var(--ink);
  font-weight: 500;
}
.te-root .te-filter-dot {
  width: 12px; height: 12px;
  border-radius: 3px;
  border: 1.5px solid var(--border-strong);
  flex-shrink: 0; position: relative;
}
.te-root .te-filter-item.active .te-filter-dot {
  background: var(--accent);
  border-color: var(--accent);
}
.te-root .te-filter-item.active .te-filter-dot::after {
  content: ''; position: absolute;
  left: 2px; top: 0;
  width: 4px; height: 7px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.te-root .te-filter-label { flex: 1; }
.te-root .te-filter-freq {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: var(--muted);
}

.te-root .te-right-col { min-width: 0; display: flex; flex-direction: column; }

/* ---------- SECONDARY BAR ---------- */
.te-root .te-secondary-bar {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  padding: 14px 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  align-items: flex-start;
}
.te-root .te-sec-facet { display: flex; flex-direction: column; gap: 6px; }
.te-root .te-sec-facet-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9.5px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--muted);
}
.te-root .te-sec-chip-row { display: flex; flex-wrap: wrap; gap: 5px; }
.te-root .te-sec-chip {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 5px 11px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
  font-size: 12px;
  color: var(--ink-soft);
  cursor: pointer;
  font-family: inherit;
}
.te-root .te-sec-chip:hover { border-color: var(--border-strong); }
.te-root .te-sec-chip.active {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}
.te-root .te-sec-chip-n {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  opacity: 0.7;
}
.te-root .te-clear-all-btn {
  margin-left: auto;
  background: transparent;
  border: 1px dashed var(--border-strong);
  border-radius: 6px;
  padding: 6px 12px;
  color: var(--ink-soft);
  font-family: inherit;
  font-size: 12px;
  cursor: pointer;
  align-self: center;
}

/* ---------- RESULTS ---------- */
.te-root .te-results { min-width: 0; padding: 24px; }
.te-root .te-results-header {
  display: flex; align-items: baseline; gap: 12px;
  margin-bottom: 18px; padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}
.te-root .te-results-header h2 { font-size: 15px; font-weight: 500; margin: 0; }
.te-root .te-num {
  font-family: 'JetBrains Mono', monospace;
  color: var(--accent);
}
.te-root .te-sort {
  margin-left: auto;
  font-size: 13px;
  color: var(--muted);
  display: flex; align-items: center; gap: 8px;
}
.te-root .te-sort select {
  font-family: inherit; font-size: 13px;
  padding: 5px 8px;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--surface);
  color: var(--ink);
}
.te-root .te-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

/* ---------- CARD ---------- */
.te-root .te-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow);
  cursor: pointer;
  transition: border-color .15s, box-shadow .15s, transform .15s;
}
.te-root .te-card::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 3px;
  background: var(--cat-c, var(--accent));
}
.te-root .te-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
  border-color: var(--border-strong);
}
.te-root .te-card-body {
  padding: 16px 18px 0 22px;
  display: flex; flex-direction: column;
  gap: 8px; flex: 1;
}
.te-root .te-badge {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 3px 8px;
  border-radius: 3px;
  background: var(--cat-cs, var(--accent-soft));
  color: var(--cat-c, var(--accent));
  display: inline-block;
}
.te-root .te-card-cats { display: flex; flex-wrap: wrap; gap: 4px; }
.te-root .te-card h3 {
  font-family: 'Crimson Pro', Georgia, serif;
  font-size: 20px;
  font-weight: 500;
  margin: 2px 0 0;
  line-height: 1.2;
}
.te-root .te-statement {
  font-size: 13px;
  color: var(--ink-soft);
  line-height: 1.5;
  flex: 1;
}
.te-root .te-card-tags { display: flex; flex-wrap: wrap; gap: 5px; }
.te-root .te-card-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  color: var(--muted);
  padding: 2px 6px;
  background: var(--surface-alt);
  border-radius: 3px;
}
.te-root .te-card-cta-row { padding: 12px 16px 14px 22px; margin-top: auto; }
.te-root .te-card-cta {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  background: var(--surface-alt);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--ink-soft);
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
}
.te-root .te-card-cta:hover {
  background: var(--cat-cs, var(--accent-soft));
  color: var(--cat-c, var(--accent));
  border-color: var(--cat-c, var(--accent));
}
.te-root .te-card-cta svg { width: 13px; height: 13px; }

.te-root .te-card.expanded {
  grid-column: 1 / -1;
  cursor: default;
  transform: none;
  box-shadow: var(--shadow-lg);
  border-color: var(--cat-c, var(--accent));
}
.te-root .te-inline-expand {
  padding: 18px 22px 22px;
  border-top: 1px dashed var(--border);
}

/* ---------- DETAIL CONTENT SHARED ---------- */
.te-root .te-detail-header {
  padding: 22px 26px 16px;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}
.te-root .te-detail-meta-row {
  display: flex; align-items: center; flex-wrap: wrap;
  gap: 6px; margin-bottom: 10px;
}
.te-root .te-detail-title {
  font-family: 'Crimson Pro', Georgia, serif;
  font-size: 28px;
  font-weight: 500;
  margin: 0 0 12px;
  line-height: 1.15;
  padding-right: 40px;
}
.te-root .te-detail-main {
  font-size: 14px;
  line-height: 1.65;
  padding: 12px 15px;
  background: var(--surface-alt);
  border-left: 3px solid var(--cat-c, var(--accent));
  border-radius: 0 6px 6px 0;
}
.te-root .te-meta-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 8px 16px;
  margin-top: 16px;
}
.te-root .te-meta-row {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 6px 10px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 6px;
}
.te-root .te-meta-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9.5px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
}
.te-root .te-meta-value {
  font-size: 13.5px;
  color: var(--ink);
}
.te-root .te-detail-body {
  flex: 1;
  overflow-y: auto;
  padding: 14px 26px 24px;
}
.te-root .te-detail-body p {
  margin: 0 0 8px;
  font-size: 14px;
  line-height: 1.6;
  color: var(--ink-soft);
}
.te-root .te-detail-body ul {
  margin: 0 0 8px;
  padding-left: 18px;
  list-style: none;
}
.te-root .te-detail-body li {
  position: relative;
  padding-left: 4px;
  margin-bottom: 5px;
  font-size: 14px;
  color: var(--ink-soft);
  line-height: 1.6;
}
.te-root .te-detail-body li::before {
  content: '—';
  position: absolute;
  left: -16px;
  color: var(--cat-c, var(--accent));
}
.te-root .te-detail-close {
  position: absolute;
  top: 12px; right: 14px;
  width: 30px; height: 30px;
  border: none;
  background: transparent;
  color: var(--muted);
  font-size: 22px;
  cursor: pointer;
  border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  z-index: 3;
}
.te-root .te-detail-close:hover {
  background: var(--surface-alt);
  color: var(--ink);
}

/* ---------- VIEW SWITCH ---------- */
.te-root .te-view-switch-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 16px 0 8px;
}
.te-root .te-view-switch-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
}
.te-root .te-view-switch {
  display: inline-flex;
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
  background: var(--surface);
}
.te-root .te-view-switch button {
  font-family: inherit;
  font-size: 11.5px;
  padding: 5px 11px;
  background: transparent;
  border: none;
  color: var(--ink-soft);
  cursor: pointer;
  border-right: 1px solid var(--border);
  display: inline-flex;
  align-items: center;
  gap: 5px;
}
.te-root .te-view-switch button:last-child { border-right: none; }
.te-root .te-view-switch button.active {
  background: var(--ink);
  color: var(--surface);
}
.te-root .te-view-switch svg { width: 12px; height: 12px; }

/* ---------- TABS ---------- */
.te-root .te-detail-tabs {
  display: flex;
  gap: 2px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 14px;
  overflow-x: auto;
}
.te-root .te-detail-tab {
  background: transparent;
  border: none;
  padding: 9px 14px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  font-weight: 500;
  white-space: nowrap;
}
.te-root .te-detail-tab.active {
  color: var(--cat-c, var(--accent));
  border-bottom-color: var(--cat-c, var(--accent));
  font-weight: 600;
}

/* ---------- ACCORDION ---------- */
.te-root .te-detail-accordion {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.te-root .te-acc-item {
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  background: var(--surface);
}
.te-root .te-acc-item.open { border-color: var(--cat-c, var(--accent)); }
.te-root .te-acc-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 14px;
  background: var(--surface-alt);
  border: none;
  cursor: pointer;
  font-family: inherit;
  text-align: left;
}
.te-root .te-acc-item.open .te-acc-header {
  background: var(--cat-cs, var(--accent-soft));
}
.te-root .te-acc-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
  color: var(--ink-soft);
}
.te-root .te-acc-item.open .te-acc-label {
  color: var(--cat-c, var(--accent));
}
.te-root .te-acc-chev {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: var(--muted);
  transition: transform .2s;
}
.te-root .te-acc-item.open .te-acc-chev {
  transform: rotate(90deg);
  color: var(--cat-c, var(--accent));
}
.te-root .te-acc-body {
  padding: 14px 16px;
  border-top: 1px solid var(--border);
}

/* ---------- MASTER-DETAIL ---------- */
.te-root .te-md-wrap {
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-column: 1 / -1;
  height: calc(100vh - 53px);
}
.te-root .te-md-list {
  border-right: 1px solid var(--border);
  background: var(--surface);
  overflow-y: auto;
  padding: 16px;
}
.te-root .te-md-row {
  padding: 12px 14px;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  margin-bottom: 4px;
  border-left: 3px solid var(--cat-c, var(--border));
}
.te-root .te-md-row:hover { background: var(--surface-alt); }
.te-root .te-md-row.selected { background: var(--accent-soft); }
.te-root .te-md-row h4 {
  font-family: 'Crimson Pro', Georgia, serif;
  font-size: 17px;
  font-weight: 500;
  margin: 0 0 3px;
  color: var(--ink);
}
.te-root .te-md-row .te-md-cats {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: var(--muted);
  text-transform: uppercase;
}
.te-root .te-md-detail {
  overflow-y: auto;
  padding: 32px 40px;
}
.te-root .te-md-empty {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted);
  font-style: italic;
}

/* ---------- FULL-PAGE DETAIL ---------- */
.te-root .te-fp-detail {
  padding: 24px 40px;
}
.te-root .te-fp-back {
  background: transparent;
  border: none;
  color: var(--accent);
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 18px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

/* ---------- MODAL ---------- */
.te-root .te-modal-backdrop {
  position: fixed; inset: 0;
  background: rgba(15,23,42,0.55);
  display: flex; justify-content: center; align-items: center;
  padding: 20px;
  z-index: 100;
  opacity: 0;
  pointer-events: none;
  transition: opacity .2s;
}
.te-root .te-modal-backdrop.show {
  opacity: 1;
  pointer-events: auto;
}
.te-root .te-modal {
  background: var(--surface);
  border-radius: 12px;
  max-width: 720px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  position: relative;
  display: flex;
  flex-direction: column;
  transform: translateY(20px);
  transition: transform .2s;
}
.te-root .te-modal-backdrop.show .te-modal { transform: translateY(0); }
.te-root .te-modal::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 4px;
  background: var(--cat-c, var(--accent));
  border-radius: 12px 0 0 12px;
}

/* ---------- DRAWER ---------- */
.te-root .te-drawer-backdrop {
  position: fixed; inset: 0;
  background: rgba(15,23,42,0.3);
  z-index: 80;
  opacity: 0;
  pointer-events: none;
  transition: opacity .25s;
}
.te-root .te-drawer-backdrop.show {
  opacity: 1;
  pointer-events: auto;
}
.te-root .te-drawer {
  position: fixed;
  top: 0; right: 0; bottom: 0;
  width: min(520px, 90vw);
  background: var(--surface);
  border-left: 1px solid var(--border);
  box-shadow: -12px 0 40px rgba(15,23,42,0.15);
  z-index: 90;
  transform: translateX(100%);
  transition: transform .3s;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.te-root .te-drawer.show { transform: translateX(0); }
.te-root .te-drawer::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 4px;
  background: var(--cat-c, var(--accent));
}

/* ---------- LIGHTBOX ---------- */
.te-root .te-lightbox-backdrop {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.85);
  display: flex; justify-content: center; align-items: center;
  padding: 60px;
  z-index: 100;
  opacity: 0;
  pointer-events: none;
  transition: opacity .25s;
}
.te-root .te-lightbox-backdrop.show {
  opacity: 1;
  pointer-events: auto;
}
.te-root .te-lightbox {
  background: var(--surface);
  border-radius: 12px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  position: relative;
  display: flex;
  flex-direction: column;
}
.te-root .te-lightbox::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 4px;
  background: var(--cat-c, var(--accent));
  border-radius: 12px 0 0 12px;
}
.te-root .te-lb-nav {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  color: white;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  z-index: 101;
}
.te-root .te-lb-nav.prev { left: 20px; }
.te-root .te-lb-nav.next { right: 20px; }
.te-root .te-lb-counter {
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255,255,255,0.7);
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  z-index: 101;
}

/* ---------- RESPONSIVE ---------- */
@media (max-width: 900px) {
  .te-root .te-main { grid-template-columns: 1fr; }
  .te-root .te-sidebar { display: none; }
}
`;