// // import React, { useState, useMemo, useEffect } from "react";
// // import CalculationCard from "./CalculationCard";

// // const ACCENT = "#4a6cf7";
// // const ACCENT_LIGHT = "#eef1fd";
// // const ACCENT_BORDER = "#cdd5f8";
// // const INK = "#1e293b";
// // const INK_SOFT = "#334155";
// // const MUTED = "#94a3b8";
// // const BORDER = "#d0d9ed";
// // const SURFACE = "#fff";
// // const SURFACE_2 = "#f1f5f9";
// // const SERIF = "'Source Serif 4', Georgia, serif";
// // const MONO = "ui-monospace, 'JetBrains Mono', monospace";
// // const noScroll = { scrollbarWidth: "none", msOverflowStyle: "none" };

// // function toRoman(n) {
// //   if (n < 1) return "";
// //   const lookup = [[10, "x"], [9, "ix"], [5, "v"], [4, "iv"], [1, "i"]];
// //   let r = "";
// //   for (const [v, s] of lookup) { while (n >= v) { r += s; n -= v; } }
// //   return r;
// // }

// // // ─── Filter chips ────────────────────────────────────────────────

// // function Chip({ label, active, onClick }) {
// //   const [hover, setHover] = useState(false);
// //   return (
// //     <button
// //       type="button"
// //       onClick={onClick}
// //       onMouseEnter={() => setHover(true)}
// //       onMouseLeave={() => setHover(false)}
// //       style={{
// //         background: active ? ACCENT : SURFACE,
// //         border: `1px solid ${active ? ACCENT : (hover ? ACCENT : BORDER)}`,
// //         padding: "4px 11px",
// //         font: "500 12.5px inherit",
// //         color: active ? "white" : (hover ? ACCENT : INK_SOFT),
// //         borderRadius: "999px",
// //         cursor: "pointer",
// //         transition: "all .12s",
// //         userSelect: "none",
// //       }}
// //     >
// //       {label}
// //     </button>
// //   );
// // }

// // function ClearButton({ onClick }) {
// //   const [hover, setHover] = useState(false);
// //   return (
// //     <button
// //       type="button"
// //       onClick={onClick}
// //       onMouseEnter={() => setHover(true)}
// //       onMouseLeave={() => setHover(false)}
// //       style={{
// //         background: "transparent",
// //         border: "none",
// //         color: hover ? ACCENT : MUTED,
// //         font: "500 12.5px inherit",
// //         textDecoration: "underline",
// //         cursor: "pointer",
// //         padding: "2px 4px",
// //         transition: "color .15s",
// //       }}
// //     >
// //       Clear all
// //     </button>
// //   );
// // }

// // function FilterBar({ filters, activeFilters, onToggle, onClear, hasActive, stickyTop }) {
// //   return (
// //     <div
// //       style={{
// //         background: SURFACE,
// //         borderTop: `1px solid ${BORDER}`,
// //         borderBottom: `1px solid ${BORDER}`,
// //         position: "sticky",
// //         top: stickyTop,
// //         zIndex: 20,
// //       }}
// //     >
// //       <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "12px 28px" }}>
// //         {Object.entries(filters).map(([axis, config]) => (
// //           <div
// //             key={axis}
// //             style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}
// //           >
// //             <span
// //               style={{
// //                 font: `10px ${MONO}`,
// //                 color: MUTED,
// //                 textTransform: "uppercase",
// //                 letterSpacing: "0.06em",
// //                 fontWeight: 600,
// //                 minWidth: "72px",
// //                 flexShrink: 0,
// //               }}
// //             >
// //               {config.label || axis}
// //             </span>
// //             <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
// //               {(config.options || []).map((opt) => (
// //                 <Chip
// //                   key={opt.value}
// //                   label={opt.label || opt.value}
// //                   active={(activeFilters[axis] || new Set()).has(opt.value)}
// //                   onClick={() => onToggle(axis, opt.value)}
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //         {hasActive && (
// //           <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "6px" }}>
// //             <ClearButton onClick={onClear} />
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // // ─── Sidebar item (card-styled) ──────────────────────────────────

// // function SidebarItem({ cat, numeral, visible, total, active, showCount, onNavigate }) {
// //   const [hover, setHover] = useState(false);
// //   const empty = visible === 0;
// //   return (
// //     <a
// //       href={`#cat-${cat.id}`}
// //       onClick={onNavigate}
// //       onMouseEnter={() => setHover(true)}
// //       onMouseLeave={() => setHover(false)}
// //       style={{
// //         display: "grid",
// //         gridTemplateColumns: "36px 1fr auto",
// //         alignItems: "center",
// //         gap: "12px",
// //         padding: "14px 16px",
// //         background: active ? ACCENT_LIGHT : SURFACE,
// //         border: `1px solid ${active ? ACCENT : (hover ? ACCENT_BORDER : BORDER)}`,
// //         borderRadius: "10px",
// //         textDecoration: "none",
// //         color: INK_SOFT,
// //         transition: "all .15s",
// //         position: "relative",
// //         opacity: empty ? 0.4 : 1,
// //         pointerEvents: empty ? "none" : "auto",
// //         transform: hover && !active ? "translateX(2px)" : "none",
// //         boxShadow: active
// //           ? "0 4px 12px rgba(74,108,247,.10)"
// //           : (hover ? "0 2px 6px rgba(15,20,25,.04)" : "none"),
// //       }}
// //     >
// //       {active && (
// //         <div
// //           style={{
// //             position: "absolute",
// //             left: 0,
// //             top: 16,
// //             bottom: 16,
// //             width: "3px",
// //             background: ACCENT,
// //             borderRadius: "0 3px 3px 0",
// //           }}
// //         />
// //       )}
// //       <div
// //         style={{
// //           width: 36,
// //           height: 36,
// //           borderRadius: "8px",
// //           background: active ? ACCENT : (hover ? ACCENT_LIGHT : SURFACE_2),
// //           color: active ? "white" : (hover ? ACCENT : INK_SOFT),
// //           display: "flex",
// //           alignItems: "center",
// //           justifyContent: "center",
// //           fontFamily: SERIF,
// //           fontWeight: 600,
// //           fontSize: "16px",
// //           flexShrink: 0,
// //           transition: "all .15s",
// //         }}
// //       >
// //         {numeral}
// //       </div>
// //       <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: "2px" }}>
// //         <div
// //           style={{
// //             fontSize: "14px",
// //             fontWeight: 600,
// //             color: active ? ACCENT : INK,
// //             lineHeight: 1.25,
// //           }}
// //         >
// //           {cat.label || cat.id}
// //         </div>
// //         {cat.meta && (
// //           <div
// //             style={{
// //               font: `10px ${MONO}`,
// //               color: active ? ACCENT : MUTED,
// //               opacity: active ? 0.75 : 1,
// //               letterSpacing: "0.04em",
// //               textTransform: "uppercase",
// //             }}
// //           >
// //             {cat.meta}
// //           </div>
// //         )}
// //       </div>
// //       <div
// //         style={{
// //           font: `11px ${MONO}`,
// //           color: active ? ACCENT : MUTED,
// //           background: active ? "white" : SURFACE_2,
// //           padding: "3px 9px",
// //           borderRadius: "999px",
// //           whiteSpace: "nowrap",
// //           flexShrink: 0,
// //           fontWeight: 600,
// //           border: `1px solid ${active ? ACCENT_LIGHT : "transparent"}`,
// //         }}
// //       >
// //         {visible}
// //         {showCount && (
// //           <span style={{ opacity: 0.5, marginLeft: "1px", fontWeight: 400 }}>/{total}</span>
// //         )}
// //       </div>
// //     </a>
// //   );
// // }

// // // ─── Category section ────────────────────────────────────────────

// // function CategorySection({ cat, numeral, methods, totalInCategory, showCount, components }) {
// //   return (
// //     <section
// //       id={`cat-${cat.id}`}
// //       data-cat-id={cat.id}
// //       style={{ marginBottom: "36px", scrollMarginTop: "180px" }}
// //     >
// //       <header
// //         style={{
// //           display: "flex",
// //           alignItems: "baseline",
// //           gap: "12px",
// //           marginBottom: "4px",
// //           paddingBottom: "10px",
// //           borderBottom: `1px solid ${BORDER}`,
// //         }}
// //       >
// //         <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "14px", color: ACCENT }}>
// //           {numeral}.
// //         </span>
// //         <h2
// //           style={{
// //             fontFamily: SERIF,
// //             fontWeight: 600,
// //             fontSize: "24px",
// //             letterSpacing: "-0.015em",
// //             lineHeight: 1.1,
// //             margin: 0,
// //             flex: 1,
// //             textTransform: "capitalize",
// //           }}
// //         >
// //           {cat.label || cat.id}
// //         </h2>
// //         <span
// //           style={{
// //             font: `11px ${MONO}`,
// //             color: MUTED,
// //             background: SURFACE_2,
// //             padding: "2px 8px",
// //             borderRadius: "10px",
// //             whiteSpace: "nowrap",
// //           }}
// //         >
// //           {methods.length}
// //           {showCount && <span style={{ opacity: 0.5, marginLeft: "2px" }}>/{totalInCategory}</span>}
// //           {" methods"}
// //         </span>
// //       </header>
// //       {cat.blurb && (
// //         <p style={{ fontSize: "14px", color: MUTED, margin: "6px 0 18px", maxWidth: "60ch" }}>
// //           {cat.blurb}
// //         </p>
// //       )}
// //       <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
// //         {methods.map((m) => (
// //           <CalculationCard key={m.id} data={m} components={components} />
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// // // ─── Empty state ─────────────────────────────────────────────────

// // function EmptyState() {
// //   return (
// //     <div style={{ padding: "60px 20px", textAlign: "center", color: MUTED }}>
// //       <div
// //         style={{
// //           fontFamily: SERIF,
// //           fontStyle: "italic",
// //           fontSize: "20px",
// //           color: INK_SOFT,
// //           marginBottom: "6px",
// //         }}
// //       >
// //         No matches
// //       </div>
// //       <div>Try removing a filter to see more methods.</div>
// //     </div>
// //   );
// // }

// // // ═══════════════════════════════════════════════════════════════════
// // // MAIN
// // // ═══════════════════════════════════════════════════════════════════

// // export default function CalculationsExplorer({
// //   methods = [],
// //   categories,
// //   filters,
// //   components,
// //   filterStickyTop = 0,
// //   sidebarStickyTop,
// // }) {
// //   const resolvedCategories = useMemo(() => {
// //     if (categories && categories.length) return categories;
// //     const seen = new Map();
// //     methods.forEach((m) => {
// //       const id = m.category || "other";
// //       if (!seen.has(id)) seen.set(id, { id, label: id });
// //     });
// //     return Array.from(seen.values());
// //   }, [methods, categories]);

// //   const grouped = useMemo(() => {
// //     const map = new Map();
// //     resolvedCategories.forEach((c) => map.set(c.id, []));
// //     methods.forEach((m) => {
// //       const id = m.category || "other";
// //       if (!map.has(id)) map.set(id, []);
// //       map.get(id).push(m);
// //     });
// //     return map;
// //   }, [methods, resolvedCategories]);

// //   const [activeFilters, setActiveFilters] = useState({});

// //   const toggleFilter = (axis, value) => {
// //     setActiveFilters((prev) => {
// //       const set = new Set(prev[axis] || []);
// //       if (set.has(value)) set.delete(value);
// //       else set.add(value);
// //       return { ...prev, [axis]: set };
// //     });
// //   };
// //   const clearAllFilters = () => setActiveFilters({});

// //   const hasActiveFilters = useMemo(
// //     () => Object.values(activeFilters).some((s) => s && s.size > 0),
// //     [activeFilters]
// //   );

// //   const methodMatches = (m) => {
// //     if (!filters) return true;
// //     for (const axis of Object.keys(filters)) {
// //       const selected = activeFilters[axis];
// //       if (!selected || selected.size === 0) continue;
// //       const val = m[axis];
// //       const vals = Array.isArray(val) ? val : (val != null ? [val] : []);
// //       if (!vals.some((v) => selected.has(v))) return false;
// //     }
// //     return true;
// //   };

// //   const visibleByCategory = useMemo(() => {
// //     const result = new Map();
// //     grouped.forEach((list, catId) => {
// //       result.set(catId, list.filter(methodMatches));
// //     });
// //     return result;
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [grouped, activeFilters, filters]);

// //   const totalCount = methods.length;
// //   const visibleCount = useMemo(
// //     () => Array.from(visibleByCategory.values()).reduce((s, l) => s + l.length, 0),
// //     [visibleByCategory]
// //   );

// //   const [activeCategory, setActiveCategory] = useState(resolvedCategories[0]?.id);

// //   useEffect(() => {
// //     if (resolvedCategories.length === 0) return undefined;
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((e) => {
// //           if (e.isIntersecting) setActiveCategory(e.target.dataset.catId);
// //         });
// //       },
// //       { rootMargin: "-15% 0px -70% 0px" }
// //     );
// //     resolvedCategories.forEach((c) => {
// //       const el = document.getElementById(`cat-${c.id}`);
// //       if (el) observer.observe(el);
// //     });
// //     return () => observer.disconnect();
// //   }, [resolvedCategories]);

// //   const resolvedSidebarTop =
// //     sidebarStickyTop != null
// //       ? sidebarStickyTop
// //       : (filters ? filterStickyTop + 92 : filterStickyTop + 20);

// //   const handleNavigate = (catId, e) => {
// //     e.preventDefault();
// //     const el = document.getElementById(`cat-${catId}`);
// //     if (el) {
// //       const top = el.getBoundingClientRect().top + window.scrollY - resolvedSidebarTop - 20;
// //       window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
// //     }
// //   };

// //   return (
// //     <>
// //       <style>{`*::-webkit-scrollbar{display:none;width:0;height:0}*{scrollbar-width:none;-ms-overflow-style:none}`}</style>

// //       {filters && (
// //         <FilterBar
// //           filters={filters}
// //           activeFilters={activeFilters}
// //           onToggle={toggleFilter}
// //           onClear={clearAllFilters}
// //           hasActive={hasActiveFilters}
// //           stickyTop={filterStickyTop}
// //         />
// //       )}

// //       <div
// //         style={{
// //           display: "grid",
// //           gridTemplateColumns: "290px 1fr",
// //           gap: "32px",
// //           maxWidth: "1240px",
// //           margin: "0 auto",
// //           padding: "24px 28px 80px",
// //         }}
// //       >
// //         <aside
// //           style={{
// //             position: "sticky",
// //             top: resolvedSidebarTop,
// //             alignSelf: "start",
// //             maxHeight: `calc(100vh - ${resolvedSidebarTop + 20}px)`,
// //             overflowY: "auto",
// //             ...noScroll,
// //           }}
// //         >
// //           <div
// //             style={{
// //               font: `10px ${MONO}`,
// //               color: MUTED,
// //               textTransform: "uppercase",
// //               letterSpacing: "0.08em",
// //               margin: "0 0 12px 4px",
// //               fontWeight: 600,
// //             }}
// //           >
// //             On this page
// //           </div>
// //           <ul
// //             style={{
// //               listStyle: "none",
// //               margin: 0,
// //               padding: "0 0 24px",
// //               display: "flex",
// //               flexDirection: "column",
// //               gap: "8px",
// //             }}
// //           >
// //             {resolvedCategories.map((cat, i) => {
// //               const visible = (visibleByCategory.get(cat.id) || []).length;
// //               const total = (grouped.get(cat.id) || []).length;
// //               return (
// //                 <li key={cat.id}>
// //                   <SidebarItem
// //                     cat={cat}
// //                     numeral={toRoman(i + 1)}
// //                     visible={visible}
// //                     total={total}
// //                     active={activeCategory === cat.id}
// //                     showCount={hasActiveFilters}
// //                     onNavigate={(e) => handleNavigate(cat.id, e)}
// //                   />
// //                 </li>
// //               );
// //             })}
// //           </ul>
// //         </aside>

// //         <main style={{ minWidth: 0 }}>
// //           {hasActiveFilters && (
// //             <div
// //               style={{
// //                 fontSize: "13px",
// //                 color: MUTED,
// //                 marginBottom: "18px",
// //                 paddingBottom: "12px",
// //                 borderBottom: `1px dashed ${BORDER}`,
// //               }}
// //             >
// //               Showing <strong style={{ color: INK }}>{visibleCount}</strong>
// //               {" of "}<strong style={{ color: INK }}>{totalCount}</strong> methods
// //             </div>
// //           )}

// //           {resolvedCategories.map((cat, i) => {
// //             const list = visibleByCategory.get(cat.id) || [];
// //             const total = (grouped.get(cat.id) || []).length;
// //             if (list.length === 0) return null;
// //             return (
// //               <CategorySection
// //                 key={cat.id}
// //                 cat={cat}
// //                 numeral={toRoman(i + 1)}
// //                 methods={list}
// //                 totalInCategory={total}
// //                 showCount={hasActiveFilters}
// //                 components={components}
// //               />
// //             );
// //           })}

// //           {hasActiveFilters && visibleCount === 0 && <EmptyState />}
// //         </main>
// //       </div>
// //     </>
// //   );
// // }



// import React, { useState, useMemo, useEffect } from "react";
// import CalculationsCard from "./CalculationsCard";

// const ACCENT = "#4a6cf7";
// const ACCENT_LIGHT = "#eef1fd";
// const ACCENT_BORDER = "#cdd5f8";
// const INK = "#1e293b";
// const INK_SOFT = "#334155";
// const MUTED = "#94a3b8";
// const BORDER = "#d0d9ed";
// const SURFACE = "#fff";
// const SURFACE_2 = "#f1f5f9";
// const SERIF = "'Source Serif 4', Georgia, serif";
// const MONO = "ui-monospace, 'JetBrains Mono', monospace";
// const noScroll = { scrollbarWidth: "none", msOverflowStyle: "none" };

// function toRoman(n) {
//   if (n < 1) return "";
//   const lookup = [[10, "x"], [9, "ix"], [5, "v"], [4, "iv"], [1, "i"]];
//   let r = "";
//   for (const [v, s] of lookup) { while (n >= v) { r += s; n -= v; } }
//   return r;
// }

// // ─── Filter chips ────────────────────────────────────────────────

// function Chip({ label, active, onClick }) {
//   const [hover, setHover] = useState(false);
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//       style={{
//         background: active ? ACCENT : SURFACE,
//         border: `1px solid ${active ? ACCENT : (hover ? ACCENT : BORDER)}`,
//         padding: "4px 11px",
//         font: "500 12.5px inherit",
//         color: active ? "white" : (hover ? ACCENT : INK_SOFT),
//         borderRadius: "999px",
//         cursor: "pointer",
//         transition: "all .12s",
//         userSelect: "none",
//       }}
//     >
//       {label}
//     </button>
//   );
// }

// function ClearButton({ onClick }) {
//   const [hover, setHover] = useState(false);
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//       style={{
//         background: "transparent",
//         border: "none",
//         color: hover ? ACCENT : MUTED,
//         font: "500 12.5px inherit",
//         textDecoration: "underline",
//         cursor: "pointer",
//         padding: "2px 4px",
//         transition: "color .15s",
//       }}
//     >
//       Clear all
//     </button>
//   );
// }

// function FilterBar({ filters, activeFilters, onToggle, onClear, hasActive, stickyTop }) {
//   return (
//     <div
//       style={{
//         background: SURFACE,
//         borderTop: `1px solid ${BORDER}`,
//         borderBottom: `1px solid ${BORDER}`,
//         position: "sticky",
//         top: stickyTop,
//         zIndex: 20,
//       }}
//     >
//       <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "12px 28px" }}>
//         {Object.entries(filters).map(([axis, config]) => (
//           <div
//             key={axis}
//             style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}
//           >
//             <span
//               style={{
//                 font: `10px ${MONO}`,
//                 color: MUTED,
//                 textTransform: "uppercase",
//                 letterSpacing: "0.06em",
//                 fontWeight: 600,
//                 minWidth: "72px",
//                 flexShrink: 0,
//               }}
//             >
//               {config.label || axis}
//             </span>
//             <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
//               {(config.options || []).map((opt) => (
//                 <Chip
//                   key={opt.value}
//                   label={opt.label || opt.value}
//                   active={(activeFilters[axis] || new Set()).has(opt.value)}
//                   onClick={() => onToggle(axis, opt.value)}
//                 />
//               ))}
//             </div>
//           </div>
//         ))}
//         {hasActive && (
//           <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "6px" }}>
//             <ClearButton onClick={onClear} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // ─── Sidebar item ────────────────────────────────────────────────

// function SidebarItem({ cat, numeral, visible, total, active, showCount, onNavigate }) {
//   const [hover, setHover] = useState(false);
//   const empty = visible === 0;
//   return (
//     <a
//       href={`#cat-${cat.id}`}
//       onClick={onNavigate}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//       style={{
//         display: "grid",
//         gridTemplateColumns: "36px 1fr auto",
//         alignItems: "center",
//         gap: "12px",
//         padding: "14px 16px",
//         background: active ? ACCENT_LIGHT : SURFACE,
//         border: `1px solid ${active ? ACCENT : (hover ? ACCENT_BORDER : BORDER)}`,
//         borderRadius: "10px",
//         textDecoration: "none",
//         color: INK_SOFT,
//         transition: "all .15s",
//         position: "relative",
//         opacity: empty ? 0.4 : 1,
//         pointerEvents: empty ? "none" : "auto",
//         transform: hover && !active ? "translateX(2px)" : "none",
//         boxShadow: active
//           ? "0 4px 12px rgba(74,108,247,.10)"
//           : (hover ? "0 2px 6px rgba(15,20,25,.04)" : "none"),
//       }}
//     >
//       {active && (
//         <div style={{
//           position: "absolute", left: 0, top: 16, bottom: 16,
//           width: "3px", background: ACCENT, borderRadius: "0 3px 3px 0",
//         }} />
//       )}
//       <div style={{
//         width: 36, height: 36, borderRadius: "8px",
//         background: active ? ACCENT : (hover ? ACCENT_LIGHT : SURFACE_2),
//         color: active ? "white" : (hover ? ACCENT : INK_SOFT),
//         display: "flex", alignItems: "center", justifyContent: "center",
//         fontFamily: SERIF, fontWeight: 600, fontSize: "16px",
//         flexShrink: 0, transition: "all .15s",
//       }}>
//         {numeral}
//       </div>
//       <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: "2px" }}>
//         <div style={{
//           fontSize: "14px", fontWeight: 600,
//           color: active ? ACCENT : INK, lineHeight: 1.25,
//         }}>
//           {cat.label || cat.id}
//         </div>
//         {cat.meta && (
//           <div style={{
//             font: `10px ${MONO}`, color: active ? ACCENT : MUTED,
//             opacity: active ? 0.75 : 1,
//             letterSpacing: "0.04em", textTransform: "uppercase",
//           }}>
//             {cat.meta}
//           </div>
//         )}
//       </div>
//       <div style={{
//         font: `11px ${MONO}`, color: active ? ACCENT : MUTED,
//         background: active ? "white" : SURFACE_2,
//         padding: "3px 9px", borderRadius: "999px",
//         whiteSpace: "nowrap", flexShrink: 0, fontWeight: 600,
//         border: `1px solid ${active ? ACCENT_LIGHT : "transparent"}`,
//       }}>
//         {visible}
//         {showCount && (
//           <span style={{ opacity: 0.5, marginLeft: "1px", fontWeight: 400 }}>/{total}</span>
//         )}
//       </div>
//     </a>
//   );
// }

// // ─── Category section ────────────────────────────────────────────

// function CategorySection({ cat, numeral, methods, totalInCategory, showCount, components }) {
//   return (
//     <section
//       id={`cat-${cat.id}`}
//       data-cat-id={cat.id}
//       style={{ marginBottom: "36px", scrollMarginTop: "180px" }}
//     >
//       <header
//         style={{
//           display: "flex", alignItems: "baseline", gap: "12px",
//           marginBottom: "4px", paddingBottom: "10px",
//           borderBottom: `1px solid ${BORDER}`,
//         }}
//       >
//         <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "14px", color: ACCENT }}>
//           {numeral}.
//         </span>
//         <h2 style={{
//           fontFamily: SERIF, fontWeight: 600, fontSize: "24px",
//           letterSpacing: "-0.015em", lineHeight: 1.1, margin: 0,
//           flex: 1, textTransform: "capitalize",
//         }}>
//           {cat.label || cat.id}
//         </h2>
//         <span style={{
//           font: `11px ${MONO}`, color: MUTED,
//           background: SURFACE_2, padding: "2px 8px",
//           borderRadius: "10px", whiteSpace: "nowrap",
//         }}>
//           {methods.length}
//           {showCount && <span style={{ opacity: 0.5, marginLeft: "2px" }}>/{totalInCategory}</span>}
//           {" methods"}
//         </span>
//       </header>
//       {cat.blurb && (
//         <p style={{ fontSize: "14px", color: MUTED, margin: "6px 0 18px", maxWidth: "60ch" }}>
//           {cat.blurb}
//         </p>
//       )}
//       <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//         {methods.map((m) => (
//           <CalculationCard key={m.id} data={m} components={components} />
//         ))}
//       </div>
//     </section>
//   );
// }

// // ─── Empty state ─────────────────────────────────────────────────

// function EmptyState() {
//   return (
//     <div style={{ padding: "60px 20px", textAlign: "center", color: MUTED }}>
//       <div style={{
//         fontFamily: SERIF, fontStyle: "italic",
//         fontSize: "20px", color: INK_SOFT, marginBottom: "6px",
//       }}>
//         No matches
//       </div>
//       <div>Try removing a filter to see more methods.</div>
//     </div>
//   );
// }

// // ═══════════════════════════════════════════════════════════════════
// // MAIN — single `data` prop
// //   data = {
// //     methods: [...],
// //     categories: [...],         // optional
// //     filters: {...},            // optional
// //     components: {...},         // optional, passed to each card
// //     filterStickyTop: 0,        // optional
// //     sidebarStickyTop: null,    // optional
// //   }
// // ═══════════════════════════════════════════════════════════════════

// export default function CalculationsExplorer({ data = {} }) {
//   const {
//     methods = [],
//     categories,
//     filters,
//     components,
//     filterStickyTop = 0,
//     sidebarStickyTop,
//   } = data;

//   const resolvedCategories = useMemo(() => {
//     if (categories && categories.length) return categories;
//     const seen = new Map();
//     methods.forEach((m) => {
//       const id = m.category || "other";
//       if (!seen.has(id)) seen.set(id, { id, label: id });
//     });
//     return Array.from(seen.values());
//   }, [methods, categories]);

//   const grouped = useMemo(() => {
//     const map = new Map();
//     resolvedCategories.forEach((c) => map.set(c.id, []));
//     methods.forEach((m) => {
//       const id = m.category || "other";
//       if (!map.has(id)) map.set(id, []);
//       map.get(id).push(m);
//     });
//     return map;
//   }, [methods, resolvedCategories]);

//   const [activeFilters, setActiveFilters] = useState({});

//   const toggleFilter = (axis, value) => {
//     setActiveFilters((prev) => {
//       const set = new Set(prev[axis] || []);
//       if (set.has(value)) set.delete(value);
//       else set.add(value);
//       return { ...prev, [axis]: set };
//     });
//   };
//   const clearAllFilters = () => setActiveFilters({});

//   const hasActiveFilters = useMemo(
//     () => Object.values(activeFilters).some((s) => s && s.size > 0),
//     [activeFilters]
//   );

//   const methodMatches = (m) => {
//     if (!filters) return true;
//     for (const axis of Object.keys(filters)) {
//       const selected = activeFilters[axis];
//       if (!selected || selected.size === 0) continue;
//       const val = m[axis];
//       const vals = Array.isArray(val) ? val : (val != null ? [val] : []);
//       if (!vals.some((v) => selected.has(v))) return false;
//     }
//     return true;
//   };

//   const visibleByCategory = useMemo(() => {
//     const result = new Map();
//     grouped.forEach((list, catId) => {
//       result.set(catId, list.filter(methodMatches));
//     });
//     return result;
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [grouped, activeFilters, filters]);

//   const totalCount = methods.length;
//   const visibleCount = useMemo(
//     () => Array.from(visibleByCategory.values()).reduce((s, l) => s + l.length, 0),
//     [visibleByCategory]
//   );

//   const [activeCategory, setActiveCategory] = useState(resolvedCategories[0]?.id);

//   useEffect(() => {
//     if (resolvedCategories.length === 0) return undefined;
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((e) => {
//           if (e.isIntersecting) setActiveCategory(e.target.dataset.catId);
//         });
//       },
//       { rootMargin: "-15% 0px -70% 0px" }
//     );
//     resolvedCategories.forEach((c) => {
//       const el = document.getElementById(`cat-${c.id}`);
//       if (el) observer.observe(el);
//     });
//     return () => observer.disconnect();
//   }, [resolvedCategories]);

//   const resolvedSidebarTop =
//     sidebarStickyTop != null
//       ? sidebarStickyTop
//       : (filters ? filterStickyTop + 92 : filterStickyTop + 20);

//   const handleNavigate = (catId, e) => {
//     e.preventDefault();
//     const el = document.getElementById(`cat-${catId}`);
//     if (el) {
//       const top = el.getBoundingClientRect().top + window.scrollY - resolvedSidebarTop - 20;
//       window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       <style>{`*::-webkit-scrollbar{display:none;width:0;height:0}*{scrollbar-width:none;-ms-overflow-style:none}`}</style>

//       {filters && (
//         <FilterBar
//           filters={filters}
//           activeFilters={activeFilters}
//           onToggle={toggleFilter}
//           onClear={clearAllFilters}
//           hasActive={hasActiveFilters}
//           stickyTop={filterStickyTop}
//         />
//       )}

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "290px 1fr",
//           gap: "32px",
//           maxWidth: "1240px",
//           margin: "0 auto",
//           padding: "24px 28px 80px",
//         }}
//       >
//         <aside
//           style={{
//             position: "sticky",
//             top: resolvedSidebarTop,
//             alignSelf: "start",
//             maxHeight: `calc(100vh - ${resolvedSidebarTop + 20}px)`,
//             overflowY: "auto",
//             ...noScroll,
//           }}
//         >
//           <div
//             style={{
//               font: `10px ${MONO}`,
//               color: MUTED,
//               textTransform: "uppercase",
//               letterSpacing: "0.08em",
//               margin: "0 0 12px 4px",
//               fontWeight: 600,
//             }}
//           >
//             On this page
//           </div>
//           <ul
//             style={{
//               listStyle: "none",
//               margin: 0,
//               padding: "0 0 24px",
//               display: "flex",
//               flexDirection: "column",
//               gap: "8px",
//             }}
//           >
//             {resolvedCategories.map((cat, i) => {
//               const visible = (visibleByCategory.get(cat.id) || []).length;
//               const total = (grouped.get(cat.id) || []).length;
//               return (
//                 <li key={cat.id}>
//                   <SidebarItem
//                     cat={cat}
//                     numeral={toRoman(i + 1)}
//                     visible={visible}
//                     total={total}
//                     active={activeCategory === cat.id}
//                     showCount={hasActiveFilters}
//                     onNavigate={(e) => handleNavigate(cat.id, e)}
//                   />
//                 </li>
//               );
//             })}
//           </ul>
//         </aside>

//         <main style={{ minWidth: 0 }}>
//           {hasActiveFilters && (
//             <div
//               style={{
//                 fontSize: "13px",
//                 color: MUTED,
//                 marginBottom: "18px",
//                 paddingBottom: "12px",
//                 borderBottom: `1px dashed ${BORDER}`,
//               }}
//             >
//               Showing <strong style={{ color: INK }}>{visibleCount}</strong>
//               {" of "}<strong style={{ color: INK }}>{totalCount}</strong> methods
//             </div>
//           )}

//           {resolvedCategories.map((cat, i) => {
//             const list = visibleByCategory.get(cat.id) || [];
//             const total = (grouped.get(cat.id) || []).length;
//             if (list.length === 0) return null;
//             return (
//               <CategorySection
//                 key={cat.id}
//                 cat={cat}
//                 numeral={toRoman(i + 1)}
//                 methods={list}
//                 totalInCategory={total}
//                 showCount={hasActiveFilters}
//                 components={components}
//               />
//             );
//           })}

//           {hasActiveFilters && visibleCount === 0 && <EmptyState />}
//         </main>
//       </div>
//     </>
//   );
// }


import React, { useState, useMemo, useEffect } from "react";
import CalculationCard from "./CalculationsCard";

const ACCENT = "#4a6cf7";
const ACCENT_LIGHT = "#eef1fd";
const ACCENT_BORDER = "#cdd5f8";
const INK = "#1e293b";
const INK_SOFT = "#334155";
const MUTED = "#94a3b8";
const BORDER = "#d0d9ed";
const SURFACE = "#fff";
const SURFACE_2 = "#f1f5f9";
const SERIF = "'Source Serif 4', Georgia, serif";
const MONO = "ui-monospace, 'JetBrains Mono', monospace";
const noScroll = { scrollbarWidth: "none", msOverflowStyle: "none" };

function toRoman(n) {
  if (n < 1) return "";
  const lookup = [[10, "x"], [9, "ix"], [5, "v"], [4, "iv"], [1, "i"]];
  let r = "";
  for (const [v, s] of lookup) { while (n >= v) { r += s; n -= v; } }
  return r;
}

// ─── Filter chips ────────────────────────────────────────────────

function Chip({ label, active, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: active ? ACCENT : SURFACE,
        border: `1px solid ${active ? ACCENT : (hover ? ACCENT : BORDER)}`,
        padding: "4px 11px",
        font: "500 12.5px inherit",
        color: active ? "white" : (hover ? ACCENT : INK_SOFT),
        borderRadius: "999px",
        cursor: "pointer",
        transition: "all .12s",
        userSelect: "none",
      }}
    >
      {label}
    </button>
  );
}

function ClearButton({ onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "transparent",
        border: "none",
        color: hover ? ACCENT : MUTED,
        font: "500 12.5px inherit",
        textDecoration: "underline",
        cursor: "pointer",
        padding: "2px 4px",
        transition: "color .15s",
      }}
    >
      Clear all
    </button>
  );
}

function FilterBar({ filters, activeFilters, onToggle, onClear, hasActive, stickyTop }) {
  return (
    <div
      style={{
        background: SURFACE,
        borderTop: `1px solid ${BORDER}`,
        borderBottom: `1px solid ${BORDER}`,
        position: "sticky",
        top: stickyTop,
        zIndex: 20,
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "12px 28px" }}>
        {Object.entries(filters).map(([axis, config]) => (
          <div
            key={axis}
            style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}
          >
            <span
              style={{
                font: `10px ${MONO}`,
                color: MUTED,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                fontWeight: 600,
                minWidth: "72px",
                flexShrink: 0,
              }}
            >
              {config.label || axis}
            </span>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {(config.options || []).map((opt) => (
                <Chip
                  key={opt.value}
                  label={opt.label || opt.value}
                  active={(activeFilters[axis] || new Set()).has(opt.value)}
                  onClick={() => onToggle(axis, opt.value)}
                />
              ))}
            </div>
          </div>
        ))}
        {hasActive && (
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "6px" }}>
            <ClearButton onClick={onClear} />
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Sidebar item ────────────────────────────────────────────────

function SidebarItem({ cat, numeral, visible, total, active, showCount, onNavigate }) {
  const [hover, setHover] = useState(false);
  const empty = visible === 0;
  return (
    <a
      href={`#cat-${cat.id}`}
      onClick={onNavigate}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "36px 1fr auto",
        alignItems: "center",
        gap: "12px",
        padding: "14px 16px",
        background: active ? ACCENT_LIGHT : SURFACE,
        border: `1px solid ${active ? ACCENT : (hover ? ACCENT_BORDER : BORDER)}`,
        borderRadius: "10px",
        textDecoration: "none",
        color: INK_SOFT,
        transition: "all .15s",
        position: "relative",
        opacity: empty ? 0.4 : 1,
        pointerEvents: empty ? "none" : "auto",
        transform: hover && !active ? "translateX(2px)" : "none",
        boxShadow: active
          ? "0 4px 12px rgba(74,108,247,.10)"
          : (hover ? "0 2px 6px rgba(15,20,25,.04)" : "none"),
      }}
    >
      {active && (
        <div style={{
          position: "absolute", left: 0, top: 16, bottom: 16,
          width: "3px", background: ACCENT, borderRadius: "0 3px 3px 0",
        }} />
      )}
      <div style={{
        width: 36, height: 36, borderRadius: "8px",
        background: active ? ACCENT : (hover ? ACCENT_LIGHT : SURFACE_2),
        color: active ? "white" : (hover ? ACCENT : INK_SOFT),
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: SERIF, fontWeight: 600, fontSize: "16px",
        flexShrink: 0, transition: "all .15s",
      }}>
        {numeral}
      </div>
      <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: "2px" }}>
        <div style={{
          fontSize: "14px", fontWeight: 600,
          color: active ? ACCENT : INK, lineHeight: 1.25,
        }}>
          {cat.label || cat.id}
        </div>
        {cat.meta && (
          <div style={{
            font: `10px ${MONO}`, color: active ? ACCENT : MUTED,
            opacity: active ? 0.75 : 1,
            letterSpacing: "0.04em", textTransform: "uppercase",
          }}>
            {cat.meta}
          </div>
        )}
      </div>
      <div style={{
        font: `11px ${MONO}`, color: active ? ACCENT : MUTED,
        background: active ? "white" : SURFACE_2,
        padding: "3px 9px", borderRadius: "999px",
        whiteSpace: "nowrap", flexShrink: 0, fontWeight: 600,
        border: `1px solid ${active ? ACCENT_LIGHT : "transparent"}`,
      }}>
        {visible}
        {showCount && (
          <span style={{ opacity: 0.5, marginLeft: "1px", fontWeight: 400 }}>/{total}</span>
        )}
      </div>
    </a>
  );
}

// ─── Category section ────────────────────────────────────────────

function CategorySection({ cat, numeral, methods, totalInCategory, showCount, components }) {
  return (
    <section
      id={`cat-${cat.id}`}
      data-cat-id={cat.id}
      style={{ marginBottom: "36px", scrollMarginTop: "180px" }}
    >
      <header
        style={{
          display: "flex", alignItems: "baseline", gap: "12px",
          marginBottom: "4px", paddingBottom: "10px",
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "14px", color: ACCENT }}>
          {numeral}.
        </span>
        <h2 style={{
          fontFamily: SERIF, fontWeight: 600, fontSize: "24px",
          letterSpacing: "-0.015em", lineHeight: 1.1, margin: 0,
          flex: 1, textTransform: "capitalize",
        }}>
          {cat.label || cat.id}
        </h2>
        <span style={{
          font: `11px ${MONO}`, color: MUTED,
          background: SURFACE_2, padding: "2px 8px",
          borderRadius: "10px", whiteSpace: "nowrap",
        }}>
          {methods.length}
          {showCount && <span style={{ opacity: 0.5, marginLeft: "2px" }}>/{totalInCategory}</span>}
          {" methods"}
        </span>
      </header>
      {cat.blurb && (
        <p style={{ fontSize: "14px", color: MUTED, margin: "6px 0 18px", maxWidth: "60ch" }}>
          {cat.blurb}
        </p>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {methods.map((m) => (
          <CalculationCard key={m.id} data={m} components={components} />
        ))}
      </div>
    </section>
  );
}

// ─── Empty state ─────────────────────────────────────────────────

function EmptyState() {
  return (
    <div style={{ padding: "60px 20px", textAlign: "center", color: MUTED }}>
      <div style={{
        fontFamily: SERIF, fontStyle: "italic",
        fontSize: "20px", color: INK_SOFT, marginBottom: "6px",
      }}>
        No matches
      </div>
      <div>Try removing a filter to see more methods.</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// MAIN — single `data` prop
//   data = {
//     methods: [...],
//     categories: [...],         // optional
//     filters: {...},            // optional
//     components: {...},         // optional, passed to each card
//     filterStickyTop: 0,        // optional
//     sidebarStickyTop: null,    // optional
//   }
// ═══════════════════════════════════════════════════════════════════

export default function CalculationsExplorer({ data = {} }) {
  const {
    methods = [],
    categories,
    filters,
    components,
    filterStickyTop = 0,
    sidebarStickyTop,
  } = data;

  const resolvedCategories = useMemo(() => {
    if (categories && categories.length) return categories;
    const seen = new Map();
    methods.forEach((m) => {
      const id = m.category || "other";
      if (!seen.has(id)) seen.set(id, { id, label: id });
    });
    return Array.from(seen.values());
  }, [methods, categories]);

  const grouped = useMemo(() => {
    const map = new Map();
    resolvedCategories.forEach((c) => map.set(c.id, []));
    methods.forEach((m) => {
      const id = m.category || "other";
      if (!map.has(id)) map.set(id, []);
      map.get(id).push(m);
    });
    return map;
  }, [methods, resolvedCategories]);

  const [activeFilters, setActiveFilters] = useState({});

  const toggleFilter = (axis, value) => {
    setActiveFilters((prev) => {
      const set = new Set(prev[axis] || []);
      if (set.has(value)) set.delete(value);
      else set.add(value);
      return { ...prev, [axis]: set };
    });
  };
  const clearAllFilters = () => setActiveFilters({});

  const hasActiveFilters = useMemo(
    () => Object.values(activeFilters).some((s) => s && s.size > 0),
    [activeFilters]
  );

  const methodMatches = (m) => {
    if (!filters) return true;
    for (const axis of Object.keys(filters)) {
      const selected = activeFilters[axis];
      if (!selected || selected.size === 0) continue;
      const val = m[axis];
      const vals = Array.isArray(val) ? val : (val != null ? [val] : []);
      if (!vals.some((v) => selected.has(v))) return false;
    }
    return true;
  };

  const visibleByCategory = useMemo(() => {
    const result = new Map();
    grouped.forEach((list, catId) => {
      result.set(catId, list.filter(methodMatches));
    });
    return result;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grouped, activeFilters, filters]);

  const totalCount = methods.length;
  const visibleCount = useMemo(
    () => Array.from(visibleByCategory.values()).reduce((s, l) => s + l.length, 0),
    [visibleByCategory]
  );

  const [activeCategory, setActiveCategory] = useState(resolvedCategories[0]?.id);

  useEffect(() => {
    if (resolvedCategories.length === 0) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveCategory(e.target.dataset.catId);
        });
      },
      { rootMargin: "-15% 0px -70% 0px" }
    );
    resolvedCategories.forEach((c) => {
      const el = document.getElementById(`cat-${c.id}`);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [resolvedCategories]);

  const resolvedSidebarTop =
    sidebarStickyTop != null
      ? sidebarStickyTop
      : (filters ? filterStickyTop + 92 : filterStickyTop + 20);

  const handleNavigate = (catId, e) => {
    e.preventDefault();
    const el = document.getElementById(`cat-${catId}`);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - resolvedSidebarTop - 20;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`*::-webkit-scrollbar{display:none;width:0;height:0}*{scrollbar-width:none;-ms-overflow-style:none}`}</style>

      {filters && (
        <FilterBar
          filters={filters}
          activeFilters={activeFilters}
          onToggle={toggleFilter}
          onClear={clearAllFilters}
          hasActive={hasActiveFilters}
          stickyTop={filterStickyTop}
        />
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "290px 1fr",
          gap: "32px",
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "24px 28px 80px",
        }}
      >
        <aside
          style={{
            position: "sticky",
            top: resolvedSidebarTop,
            alignSelf: "start",
            maxHeight: `calc(100vh - ${resolvedSidebarTop + 20}px)`,
            overflowY: "auto",
            ...noScroll,
          }}
        >
          <div
            style={{
              font: `10px ${MONO}`,
              color: MUTED,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              margin: "0 0 12px 4px",
              fontWeight: 600,
            }}
          >
            On this page
          </div>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: "0 0 24px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {resolvedCategories.map((cat, i) => {
              const visible = (visibleByCategory.get(cat.id) || []).length;
              const total = (grouped.get(cat.id) || []).length;
              return (
                <li key={cat.id}>
                  <SidebarItem
                    cat={cat}
                    numeral={toRoman(i + 1)}
                    visible={visible}
                    total={total}
                    active={activeCategory === cat.id}
                    showCount={hasActiveFilters}
                    onNavigate={(e) => handleNavigate(cat.id, e)}
                  />
                </li>
              );
            })}
          </ul>
        </aside>

        <main style={{ minWidth: 0 }}>
          {hasActiveFilters && (
            <div
              style={{
                fontSize: "13px",
                color: MUTED,
                marginBottom: "18px",
                paddingBottom: "12px",
                borderBottom: `1px dashed ${BORDER}`,
              }}
            >
              Showing <strong style={{ color: INK }}>{visibleCount}</strong>
              {" of "}<strong style={{ color: INK }}>{totalCount}</strong> methods
            </div>
          )}

          {resolvedCategories.map((cat, i) => {
            const list = visibleByCategory.get(cat.id) || [];
            const total = (grouped.get(cat.id) || []).length;
            if (list.length === 0) return null;
            return (
              <CategorySection
                key={cat.id}
                cat={cat}
                numeral={toRoman(i + 1)}
                methods={list}
                totalInCategory={total}
                showCount={hasActiveFilters}
                components={components}
              />
            );
          })}

          {hasActiveFilters && visibleCount === 0 && <EmptyState />}
        </main>
      </div>
    </>
  );
}