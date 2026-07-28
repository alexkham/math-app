// // import { useMemo } from 'react';

// // /**
// //  * Default edge style palette for legend display (mirrors KnowledgeGraph defaults).
// //  */
// // const DEFAULT_EDGE_STYLES = {
// //   'based-on':        { color: '#2563eb', width: 1.6, dash: null,  arrow: 'end' },
// //   'requires':        { color: '#60a5fa', width: 1.3, dash: '5,3', arrow: 'end' },
// //   'specializes':     { color: '#ea580c', width: 1.6, dash: '5,3', arrow: 'end' },
// //   'proves':          { color: '#c2410c', width: 2.0, dash: null,  arrow: 'end' },
// //   'precondition-of': { color: '#d97706', width: 1.4, dash: '2,2', arrow: 'end' },
// //   'alternative-to':  { color: '#1e40af', width: 1.6, dash: '6,3', arrow: 'both' },
// //   'inverse-of':      { color: '#1e3a8a', width: 2.0, dash: null,  arrow: 'both' },
// //   'similar-to':      { color: '#9ca3af', width: 1.1, dash: null,  arrow: 'both' },
// //   'contrasts-with':  { color: '#6b7280', width: 1.4, dash: '3,3', arrow: 'both' }
// // };

// // const DEFAULT_DOMAIN_COLORS = [
// //   '#6b7280', '#bfdbfe', '#2563eb', '#1e40af',
// //   '#374151', '#1f2937', '#94a3b8', '#0f172a'
// // ];

// // function buildDomainColorMap(nodes, override) {
// //   if (override) return override;
// //   const domains = Array.from(new Set(nodes.map((n) => n.domain).filter(Boolean)));
// //   const map = {};
// //   domains.forEach((d, i) => {
// //     map[d] = DEFAULT_DOMAIN_COLORS[i % DEFAULT_DOMAIN_COLORS.length];
// //   });
// //   return map;
// // }

// // function edgeStyleFor(type, edgeTypes) {
// //   const fromData = edgeTypes?.[type] || {};
// //   const fromDefault = DEFAULT_EDGE_STYLES[type] || {};
// //   return {
// //     color: fromData.color || fromDefault.color || '#9ca3af',
// //     width: fromData.width ?? fromDefault.width ?? 1.4,
// //     dash:  fromData.dash  ?? fromDefault.dash  ?? null,
// //     arrow: fromData.symmetric ? 'both' : (fromDefault.arrow || 'end')
// //   };
// // }

// // /**
// //  * Renders an SVG line-with-optional-arrow for use in the legend.
// //  */
// // function EdgeIcon({ type, edgeTypes, width = 26, height = 12 }) {
// //   const s = edgeStyleFor(type, edgeTypes);
// //   const endMark = s.arrow === 'end' || s.arrow === 'both';
// //   const startMark = s.arrow === 'both';
// //   const uid = `ei-${type}`;
// //   return (
// //     <svg width={width} height={height}>
// //       {endMark && (
// //         <marker
// //           id={`${uid}-end`}
// //           viewBox="0 -3 6 6"
// //           refX="5"
// //           refY="0"
// //           markerWidth="5"
// //           markerHeight="5"
// //           orient="auto"
// //           markerUnits="userSpaceOnUse"
// //         >
// //           <path d="M0,-3L6,0L0,3" fill={s.color} />
// //         </marker>
// //       )}
// //       {startMark && (
// //         <marker
// //           id={`${uid}-start`}
// //           viewBox="0 -3 6 6"
// //           refX="1"
// //           refY="0"
// //           markerWidth="5"
// //           markerHeight="5"
// //           orient="auto-start-reverse"
// //           markerUnits="userSpaceOnUse"
// //         >
// //           <path d="M0,-3L6,0L0,3" fill={s.color} />
// //         </marker>
// //       )}
// //       <line
// //         x1={startMark ? 3 : 1}
// //         y1={height / 2}
// //         x2={endMark ? width - 3 : width - 1}
// //         y2={height / 2}
// //         stroke={s.color}
// //         strokeWidth={s.width}
// //         strokeDasharray={s.dash || undefined}
// //         markerEnd={endMark ? `url(#${uid}-end)` : undefined}
// //         markerStart={startMark ? `url(#${uid}-start)` : undefined}
// //       />
// //     </svg>
// //   );
// // }

// // const CheckSvg = () => (
// //   <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
// //     <polyline points="2,6 5,9 10,3" />
// //   </svg>
// // );

// // /**
// //  * A single filter row rendered in one of three styles.
// //  */
// // function FilterRow({ id, label, count, color, isActive, onToggle, style }) {
// //   if (style === 'toggles') {
// //     return (
// //       <div className={`gc-f2-item ${isActive ? 'gc-f2-active' : 'gc-f2-inactive'}`} onClick={onToggle}>
// //         {color && <div className="gc-f2-swatch" style={{ background: color }} />}
// //         {!color && <div className="gc-f2-swatch gc-f2-swatch-empty" />}
// //         <div className="gc-f2-name">{label}</div>
// //         <div className="gc-f2-count">{count}</div>
// //         <div className="gc-f2-toggle" />
// //       </div>
// //     );
// //   }
// //   if (style === 'pills') {
// //     return (
// //       <div className={`gc-f3-item ${isActive ? 'gc-f3-active' : ''}`} onClick={onToggle}>
// //         {color && <div className="gc-f3-swatch" style={{ background: color }} />}
// //         <div className="gc-f3-name">{label}</div>
// //         <div className="gc-f3-count">{count}</div>
// //       </div>
// //     );
// //   }
// //   // Default: checkboxes
// //   return (
// //     <div className={`gc-f1-item ${isActive ? 'gc-f1-active' : ''}`} onClick={onToggle}>
// //       <div className="gc-f1-check"><CheckSvg /></div>
// //       {color && <div className="gc-f1-swatch" style={{ background: color }} />}
// //       {!color && <div className="gc-f1-swatch gc-f1-swatch-empty" />}
// //       <div className="gc-f1-name">{label}</div>
// //       <div className="gc-f1-count">{count}</div>
// //     </div>
// //   );
// // }

// // /**
// //  * A row that renders an edge-type item with a line icon instead of a solid swatch.
// //  */
// // function EdgeFilterRow({ type, count, isActive, onToggle, style, edgeTypes }) {
// //   const icon = <EdgeIcon type={type} edgeTypes={edgeTypes} />;
// //   if (style === 'toggles') {
// //     return (
// //       <div className={`gc-f2-item ${isActive ? 'gc-f2-active' : 'gc-f2-inactive'}`} onClick={onToggle}>
// //         <div className="gc-f2-icon">{icon}</div>
// //         <div className="gc-f2-name">{type}</div>
// //         <div className="gc-f2-count">{count}</div>
// //         <div className="gc-f2-toggle" />
// //       </div>
// //     );
// //   }
// //   if (style === 'pills') {
// //     return (
// //       <div className={`gc-f3-item ${isActive ? 'gc-f3-active' : ''}`} onClick={onToggle}>
// //         <div className="gc-f3-icon">{icon}</div>
// //         <div className="gc-f3-name">{type}</div>
// //         <div className="gc-f3-count">{count}</div>
// //       </div>
// //     );
// //   }
// //   return (
// //     <div className={`gc-f1-item ${isActive ? 'gc-f1-active' : ''}`} onClick={onToggle}>
// //       <div className="gc-f1-check"><CheckSvg /></div>
// //       <div className="gc-f1-icon">{icon}</div>
// //       <div className="gc-f1-name">{type}</div>
// //       <div className="gc-f1-count">{count}</div>
// //     </div>
// //   );
// // }

// // /**
// //  * GraphControls — sidebar with 3 filter axes and 3 UI variants.
// //  *
// //  * Props:
// //  *   data           — { nodes, edges, edgeTypes }
// //  *   filters        — { domains: Set, types: Set, edgeTypes: Set }
// //  *   onFilterChange — (axis, value, isActive) => void; axis in "domains"|"types"|"edgeTypes"
// //  *   filterStyle    — "checkboxes" (default) | "toggles" | "pills"
// //  *   nodeNoun       — string appended in parentheses, e.g. "skills"
// //  *   axis1Label     — label for first classification axis (default "Type")
// //  *   axis2Label     — label for second classification axis (default "Domain")
// //  *   domainColors   — optional color override map
// //  *   filterStyleControls — optional { onChange, current } to render a style switcher
// //  */
// // export default function GraphControls({
// //   data,
// //   filters,
// //   onFilterChange,
// //   filterStyle = 'checkboxes',
// //   nodeNoun,
// //   axis1Label = 'Type',
// //   axis2Label = 'Domain',
// //   domainColors: domainColorsProp,
// //   filterStyleControls
// // }) {
// //   const { nodes, edges, edgeTypes } = data;

// //   const counts = useMemo(() => {
// //     const domains = {};
// //     const types = {};
// //     const edgeTypeCounts = {};
// //     nodes.forEach((n) => {
// //       if (n.domain) domains[n.domain] = (domains[n.domain] || 0) + 1;
// //       if (n.type)   types[n.type]     = (types[n.type]     || 0) + 1;
// //     });
// //     edges.forEach((e) => {
// //       edgeTypeCounts[e.type] = (edgeTypeCounts[e.type] || 0) + 1;
// //     });
// //     return { domains, types, edgeTypeCounts };
// //   }, [nodes, edges]);

// //   const domainColorMap = useMemo(
// //     () => buildDomainColorMap(nodes, domainColorsProp),
// //     [nodes, domainColorsProp]
// //   );

// //   const domainList = Object.keys(counts.domains);
// //   const typeList = Object.keys(counts.types);
// //   const edgeTypeList = edgeTypes
// //     ? Object.keys(edgeTypes)
// //     : Object.keys(counts.edgeTypeCounts);

// //   const activeDomains = filters.domains || new Set(domainList);
// //   const activeTypes = filters.types || new Set(typeList);
// //   const activeEdgeTypes = filters.edgeTypes || new Set(edgeTypeList);

// //   const nodeCountText = nodeNoun
// //     ? `${nodes.length} nodes (${nodeNoun})`
// //     : `${nodes.length} nodes`;

// //   const setAllInAxis = (axis, list, on) => {
// //     list.forEach((v) => onFilterChange(axis, v, on));
// //   };

// //   return (
// //     <div className="gc-container">
// //       <style>{styles}</style>

// //       <div className="gc-header">
// //         <div className="gc-count">{nodeCountText}</div>
// //         <div className="gc-count-sub">{edges.length} edges</div>
// //       </div>

// //       {filterStyleControls && (
// //         <div className="gc-style-switch">
// //           <div className="gc-section-label">Filter style</div>
// //           <div className="gc-style-buttons">
// //             {['checkboxes', 'toggles', 'pills'].map((s) => (
// //               <button
// //                 key={s}
// //                 className={`gc-style-btn ${filterStyleControls.current === s ? 'active' : ''}`}
// //                 onClick={() => filterStyleControls.onChange(s)}
// //               >
// //                 {s}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       )}

// //       {/* Axis 2 — usually Domain */}
// //       <div className="gc-section">
// //         <div className="gc-section-label">
// //           {axis2Label}
// //           <span className="gc-section-actions">
// //             <button className="gc-mini-btn" onClick={() => setAllInAxis('domains', domainList, true)}>All</button>
// //             <button className="gc-mini-btn" onClick={() => setAllInAxis('domains', domainList, false)}>None</button>
// //           </span>
// //         </div>
// //         <div className="gc-list">
// //           {domainList.map((d) => (
// //             <FilterRow
// //               key={d}
// //               id={d}
// //               label={d}
// //               count={counts.domains[d]}
// //               color={domainColorMap[d]}
// //               isActive={activeDomains.has(d)}
// //               onToggle={() => onFilterChange('domains', d, !activeDomains.has(d))}
// //               style={filterStyle}
// //             />
// //           ))}
// //         </div>
// //       </div>

// //       {/* Axis 1 — usually Type/Complexity */}
// //       <div className="gc-section">
// //         <div className="gc-section-label">
// //           {axis1Label}
// //           <span className="gc-section-actions">
// //             <button className="gc-mini-btn" onClick={() => setAllInAxis('types', typeList, true)}>All</button>
// //             <button className="gc-mini-btn" onClick={() => setAllInAxis('types', typeList, false)}>None</button>
// //           </span>
// //         </div>
// //         <div className="gc-list">
// //           {typeList.map((t) => (
// //             <FilterRow
// //               key={t}
// //               id={t}
// //               label={t}
// //               count={counts.types[t]}
// //               color={null}
// //               isActive={activeTypes.has(t)}
// //               onToggle={() => onFilterChange('types', t, !activeTypes.has(t))}
// //               style={filterStyle}
// //             />
// //           ))}
// //         </div>
// //       </div>

// //       {/* Edge types */}
// //       <div className="gc-section">
// //         <div className="gc-section-label">
// //           Edge types
// //           <span className="gc-section-actions">
// //             <button className="gc-mini-btn" onClick={() => setAllInAxis('edgeTypes', edgeTypeList, true)}>All</button>
// //             <button className="gc-mini-btn" onClick={() => setAllInAxis('edgeTypes', edgeTypeList, false)}>None</button>
// //           </span>
// //         </div>
// //         <div className="gc-list">
// //           {edgeTypeList.map((t) => (
// //             <EdgeFilterRow
// //               key={t}
// //               type={t}
// //               count={counts.edgeTypeCounts[t] || 0}
// //               isActive={activeEdgeTypes.has(t)}
// //               onToggle={() => onFilterChange('edgeTypes', t, !activeEdgeTypes.has(t))}
// //               style={filterStyle}
// //               edgeTypes={edgeTypes}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // const styles = `
// // .gc-container {
// //   padding: 20px 18px;
// //   font-family: 'DM Sans', system-ui, sans-serif;
// //   color: #0f172a;
// //   background: #ffffff;
// //   height: 100%;
// //   overflow-y: auto;
// //   box-sizing: border-box;
// // }
// // .gc-container * { box-sizing: border-box; }

// // .gc-header {
// //   padding-bottom: 12px;
// //   border-bottom: 1px solid #e5e7eb;
// //   margin-bottom: 4px;
// // }
// // .gc-count {
// //   font-family: 'Crimson Pro', Georgia, serif;
// //   font-size: 18px;
// //   font-weight: 500;
// //   color: #0f172a;
// //   line-height: 1.1;
// // }
// // .gc-count-sub {
// //   font-family: 'JetBrains Mono', monospace;
// //   font-size: 10px;
// //   text-transform: uppercase;
// //   letter-spacing: 0.08em;
// //   color: #6b7280;
// //   margin-top: 3px;
// // }

// // .gc-section {
// //   margin-top: 18px;
// //   padding-top: 14px;
// //   border-top: 1px solid #e5e7eb;
// // }
// // .gc-section:first-of-type {
// //   border-top: none;
// //   padding-top: 0;
// //   margin-top: 16px;
// // }
// // .gc-section-label {
// //   font-family: 'JetBrains Mono', monospace;
// //   font-size: 9.5px;
// //   font-weight: 600;
// //   text-transform: uppercase;
// //   letter-spacing: 0.09em;
// //   color: #6b7280;
// //   margin-bottom: 8px;
// //   display: flex;
// //   align-items: center;
// //   justify-content: space-between;
// // }
// // .gc-section-actions { display: flex; gap: 4px; }
// // .gc-mini-btn {
// //   font-family: 'JetBrains Mono', monospace;
// //   font-size: 9px;
// //   text-transform: uppercase;
// //   letter-spacing: 0.06em;
// //   background: transparent;
// //   border: 1px solid #e5e7eb;
// //   color: #6b7280;
// //   padding: 2px 6px;
// //   border-radius: 2px;
// //   cursor: pointer;
// // }
// // .gc-mini-btn:hover { border-color: #2563eb; color: #2563eb; }

// // .gc-style-switch {
// //   padding: 10px 0 12px;
// //   border-bottom: 1px solid #e5e7eb;
// // }
// // .gc-style-buttons { display: flex; gap: 4px; }
// // .gc-style-btn {
// //   flex: 1;
// //   font-family: 'JetBrains Mono', monospace;
// //   font-size: 9.5px;
// //   text-transform: uppercase;
// //   letter-spacing: 0.06em;
// //   background: #f9fafb;
// //   border: 1px solid #e5e7eb;
// //   color: #6b7280;
// //   padding: 5px 4px;
// //   border-radius: 3px;
// //   cursor: pointer;
// // }
// // .gc-style-btn:hover { border-color: #d1d5db; color: #0f172a; }
// // .gc-style-btn.active {
// //   background: #eff6ff;
// //   border-color: #2563eb;
// //   color: #1e40af;
// // }

// // .gc-list { display: flex; flex-direction: column; gap: 3px; }

// // /* ---- Style 1: Checkboxes ---- */
// // .gc-f1-item {
// //   display: grid;
// //   grid-template-columns: 16px 14px 1fr auto;
// //   align-items: center;
// //   gap: 8px;
// //   padding: 6px 8px;
// //   border-radius: 3px;
// //   cursor: pointer;
// //   transition: background 0.12s;
// //   user-select: none;
// // }
// // .gc-f1-item:hover { background: #f3f4f6; }
// // .gc-f1-item.gc-f1-active { background: #eff6ff; }
// // .gc-f1-item.gc-f1-active:hover { background: #dbeafe; }
// // .gc-f1-check {
// //   width: 16px; height: 16px;
// //   border: 1.5px solid #9ca3af;
// //   border-radius: 3px;
// //   display: flex; align-items: center; justify-content: center;
// //   transition: all 0.12s;
// // }
// // .gc-f1-item.gc-f1-active .gc-f1-check {
// //   background: #2563eb;
// //   border-color: #2563eb;
// // }
// // .gc-f1-check svg { width: 10px; height: 10px; color: #ffffff; opacity: 0; transition: opacity 0.12s; }
// // .gc-f1-item.gc-f1-active .gc-f1-check svg { opacity: 1; }
// // .gc-f1-swatch { width: 12px; height: 12px; border-radius: 2px; }
// // .gc-f1-swatch-empty { background: #f3f4f6; border: 1px solid #d1d5db; }
// // .gc-f1-icon { display: flex; align-items: center; }
// // .gc-f1-name { font-size: 12px; color: #0f172a; }
// // .gc-f1-count {
// //   font-family: 'JetBrains Mono', monospace;
// //   font-size: 10px;
// //   color: #6b7280;
// // }

// // /* ---- Style 2: Toggles ---- */
// // .gc-f2-item {
// //   display: grid;
// //   grid-template-columns: 14px 1fr auto 30px;
// //   align-items: center;
// //   gap: 8px;
// //   padding: 6px 6px;
// //   border-radius: 3px;
// //   cursor: pointer;
// //   transition: background 0.12s;
// //   user-select: none;
// // }
// // .gc-f2-item:hover { background: #f3f4f6; }
// // .gc-f2-inactive .gc-f2-name,
// // .gc-f2-inactive .gc-f2-count { color: #9ca3af; }
// // .gc-f2-inactive .gc-f2-swatch { opacity: 0.3; }
// // .gc-f2-inactive .gc-f2-icon { opacity: 0.35; }
// // .gc-f2-swatch { width: 12px; height: 12px; border-radius: 2px; transition: opacity 0.15s; }
// // .gc-f2-swatch-empty { background: #f3f4f6; border: 1px solid #d1d5db; }
// // .gc-f2-icon { display: flex; align-items: center; transition: opacity 0.15s; }
// // .gc-f2-name { font-size: 12px; }
// // .gc-f2-count { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #6b7280; }
// // .gc-f2-toggle {
// //   width: 28px; height: 15px;
// //   background: #d1d5db;
// //   border-radius: 10px;
// //   position: relative;
// //   transition: background 0.18s;
// // }
// // .gc-f2-toggle::after {
// //   content: '';
// //   position: absolute;
// //   top: 2px; left: 2px;
// //   width: 11px; height: 11px;
// //   background: #ffffff;
// //   border-radius: 50%;
// //   transition: left 0.18s;
// //   box-shadow: 0 1px 2px rgba(0,0,0,0.2);
// // }
// // .gc-f2-active .gc-f2-toggle { background: #2563eb; }
// // .gc-f2-active .gc-f2-toggle::after { left: 15px; }

// // /* ---- Style 3: Pills ---- */
// // .gc-f3-item {
// //   display: flex;
// //   align-items: center;
// //   gap: 7px;
// //   padding: 5px 10px;
// //   border-radius: 999px;
// //   border: 1.5px solid #e5e7eb;
// //   background: transparent;
// //   cursor: pointer;
// //   transition: all 0.14s;
// //   font-size: 12px;
// //   color: #6b7280;
// //   user-select: none;
// // }
// // .gc-f3-item:hover {
// //   border-color: #9ca3af;
// //   color: #0f172a;
// // }
// // .gc-f3-item.gc-f3-active {
// //   border-color: #2563eb;
// //   background: #2563eb;
// //   color: #ffffff;
// // }
// // .gc-f3-swatch {
// //   width: 10px; height: 10px;
// //   border-radius: 2px;
// //   background: #ffffff;
// //   border: 1px solid rgba(255,255,255,0.4);
// // }
// // .gc-f3-item:not(.gc-f3-active) .gc-f3-swatch { border: 1px solid #d1d5db; }
// // .gc-f3-icon { display: flex; align-items: center; }
// // .gc-f3-name { font-weight: 500; }
// // .gc-f3-count {
// //   font-family: 'JetBrains Mono', monospace;
// //   font-size: 10px;
// //   opacity: 0.75;
// //   margin-left: auto;
// // }
// // `;


// import { useMemo } from 'react';

// /**
//  * Default edge style palette for legend display (mirrors KnowledgeGraph defaults).
//  */
// const DEFAULT_EDGE_STYLES = {
//   'based-on':        { color: '#2563eb', width: 1.6, dash: null,  arrow: 'end' },
//   'requires':        { color: '#60a5fa', width: 1.3, dash: '5,3', arrow: 'end' },
//   'specializes':     { color: '#ea580c', width: 1.6, dash: '5,3', arrow: 'end' },
//   'proves':          { color: '#c2410c', width: 2.0, dash: null,  arrow: 'end' },
//   'precondition-of': { color: '#d97706', width: 1.4, dash: '2,2', arrow: 'end' },
//   'alternative-to':  { color: '#1e40af', width: 1.6, dash: '6,3', arrow: 'both' },
//   'inverse-of':      { color: '#1e3a8a', width: 2.0, dash: null,  arrow: 'both' },
//   'similar-to':      { color: '#9ca3af', width: 1.1, dash: null,  arrow: 'both' },
//   'contrasts-with':  { color: '#6b7280', width: 1.4, dash: '3,3', arrow: 'both' }
// };

// const DEFAULT_DOMAIN_COLORS = [
//   '#6b7280', '#bfdbfe', '#2563eb', '#1e40af',
//   '#374151', '#1f2937', '#94a3b8', '#0f172a'
// ];

// function buildDomainColorMap(nodes, override) {
//   if (override) return override;
//   const domains = Array.from(new Set(nodes.map((n) => n.domain).filter(Boolean)));
//   const map = {};
//   domains.forEach((d, i) => {
//     map[d] = DEFAULT_DOMAIN_COLORS[i % DEFAULT_DOMAIN_COLORS.length];
//   });
//   return map;
// }

// function edgeStyleFor(type, edgeTypes) {
//   const fromData = edgeTypes?.[type] || {};
//   const fromDefault = DEFAULT_EDGE_STYLES[type] || {};
//   return {
//     color: fromData.color || fromDefault.color || '#9ca3af',
//     width: fromData.width ?? fromDefault.width ?? 1.4,
//     dash:  fromData.dash  ?? fromDefault.dash  ?? null,
//     arrow: fromData.symmetric ? 'both' : (fromDefault.arrow || 'end')
//   };
// }

// /**
//  * Renders an SVG line-with-optional-arrow for use in the legend.
//  */
// function EdgeIcon({ type, edgeTypes, width = 26, height = 12 }) {
//   const s = edgeStyleFor(type, edgeTypes);
//   const endMark = s.arrow === 'end' || s.arrow === 'both';
//   const startMark = s.arrow === 'both';
//   const uid = `ei-${type}`;
//   return (
//     <svg width={width} height={height}>
//       {endMark && (
//         <marker
//           id={`${uid}-end`}
//           viewBox="0 -3 6 6"
//           refX="5"
//           refY="0"
//           markerWidth="5"
//           markerHeight="5"
//           orient="auto"
//           markerUnits="userSpaceOnUse"
//         >
//           <path d="M0,-3L6,0L0,3" fill={s.color} />
//         </marker>
//       )}
//       {startMark && (
//         <marker
//           id={`${uid}-start`}
//           viewBox="0 -3 6 6"
//           refX="1"
//           refY="0"
//           markerWidth="5"
//           markerHeight="5"
//           orient="auto-start-reverse"
//           markerUnits="userSpaceOnUse"
//         >
//           <path d="M0,-3L6,0L0,3" fill={s.color} />
//         </marker>
//       )}
//       <line
//         x1={startMark ? 3 : 1}
//         y1={height / 2}
//         x2={endMark ? width - 3 : width - 1}
//         y2={height / 2}
//         stroke={s.color}
//         strokeWidth={s.width}
//         strokeDasharray={s.dash || undefined}
//         markerEnd={endMark ? `url(#${uid}-end)` : undefined}
//         markerStart={startMark ? `url(#${uid}-start)` : undefined}
//       />
//     </svg>
//   );
// }

// const CheckSvg = () => (
//   <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//     <polyline points="2,6 5,9 10,3" />
//   </svg>
// );

// /**
//  * A single filter row rendered in one of three styles.
//  */
// function FilterRow({ id, label, count, color, isActive, onToggle, style }) {
//   if (style === 'toggles') {
//     return (
//       <div className={`gc-f2-item ${isActive ? 'gc-f2-active' : 'gc-f2-inactive'}`} onClick={onToggle}>
//         {color && <div className="gc-f2-swatch" style={{ background: color }} />}
//         {!color && <div className="gc-f2-swatch gc-f2-swatch-empty" />}
//         <div className="gc-f2-name">{label}</div>
//         <div className="gc-f2-count">{count}</div>
//         <div className="gc-f2-toggle" />
//       </div>
//     );
//   }
//   if (style === 'pills') {
//     return (
//       <div className={`gc-f3-item ${isActive ? 'gc-f3-active' : ''}`} onClick={onToggle}>
//         {color && <div className="gc-f3-swatch" style={{ background: color }} />}
//         <div className="gc-f3-name">{label}</div>
//         <div className="gc-f3-count">{count}</div>
//       </div>
//     );
//   }
//   // Default: checkboxes
//   return (
//     <div className={`gc-f1-item ${isActive ? 'gc-f1-active' : ''}`} onClick={onToggle}>
//       <div className="gc-f1-check"><CheckSvg /></div>
//       {color && <div className="gc-f1-swatch" style={{ background: color }} />}
//       {!color && <div className="gc-f1-swatch gc-f1-swatch-empty" />}
//       <div className="gc-f1-name">{label}</div>
//       <div className="gc-f1-count">{count}</div>
//     </div>
//   );
// }

// /**
//  * A row that renders an edge-type item with a line icon instead of a solid swatch.
//  */
// function EdgeFilterRow({ type, count, isActive, onToggle, style, edgeTypes }) {
//   const icon = <EdgeIcon type={type} edgeTypes={edgeTypes} />;
//   if (style === 'toggles') {
//     return (
//       <div className={`gc-f2-item ${isActive ? 'gc-f2-active' : 'gc-f2-inactive'}`} onClick={onToggle}>
//         <div className="gc-f2-icon">{icon}</div>
//         <div className="gc-f2-name">{type}</div>
//         <div className="gc-f2-count">{count}</div>
//         <div className="gc-f2-toggle" />
//       </div>
//     );
//   }
//   if (style === 'pills') {
//     return (
//       <div className={`gc-f3-item ${isActive ? 'gc-f3-active' : ''}`} onClick={onToggle}>
//         <div className="gc-f3-icon">{icon}</div>
//         <div className="gc-f3-name">{type}</div>
//         <div className="gc-f3-count">{count}</div>
//       </div>
//     );
//   }
//   return (
//     <div className={`gc-f1-item ${isActive ? 'gc-f1-active' : ''}`} onClick={onToggle}>
//       <div className="gc-f1-check"><CheckSvg /></div>
//       <div className="gc-f1-icon">{icon}</div>
//       <div className="gc-f1-name">{type}</div>
//       <div className="gc-f1-count">{count}</div>
//     </div>
//   );
// }

// /**
//  * GraphControls — sidebar with 3 filter axes and 3 UI variants.
//  *
//  * Props:
//  *   data           — { nodes, edges, edgeTypes }
//  *   filters        — { domains: Set, types: Set, edgeTypes: Set }
//  *   onFilterChange — (axis, value, isActive) => void; axis in "domains"|"types"|"edgeTypes"
//  *   filterStyle    — "checkboxes" (default) | "toggles" | "pills"
//  *   nodeNoun       — string appended in parentheses, e.g. "skills"
//  *   axis1Label     — label for first classification axis (default "Type")
//  *   axis2Label     — label for second classification axis (default "Domain")
//  *   domainColors   — optional color override map
//  *   filterStyleControls — optional { onChange, current } to render a style switcher
//  */
// export default function GraphControls({
//   data,
//   filters,
//   onFilterChange,
//   filterStyle = 'checkboxes',
//   nodeNoun,
//   axis1Label = 'Type',
//   axis2Label = 'Domain',
//   domainColors: domainColorsProp,
//   filterStyleControls
// }) {
//   const { nodes, edges, edgeTypes } = data;

//   const counts = useMemo(() => {
//     const domains = {};
//     const types = {};
//     const edgeTypeCounts = {};
//     nodes.forEach((n) => {
//       if (n.domain) domains[n.domain] = (domains[n.domain] || 0) + 1;
//       if (n.type)   types[n.type]     = (types[n.type]     || 0) + 1;
//     });
//     edges.forEach((e) => {
//       edgeTypeCounts[e.type] = (edgeTypeCounts[e.type] || 0) + 1;
//     });
//     return { domains, types, edgeTypeCounts };
//   }, [nodes, edges]);

//   const domainColorMap = useMemo(
//     () => buildDomainColorMap(nodes, domainColorsProp),
//     [nodes, domainColorsProp]
//   );

//   const domainList = Object.keys(counts.domains);
//   const typeList = Object.keys(counts.types);
//   const edgeTypeList = edgeTypes
//     ? Object.keys(edgeTypes)
//     : Object.keys(counts.edgeTypeCounts);

//   const activeDomains = filters.domains || new Set(domainList);
//   const activeTypes = filters.types || new Set(typeList);
//   const activeEdgeTypes = filters.edgeTypes || new Set(edgeTypeList);

//   const nodeCountText = nodeNoun
//     ? `${nodes.length} nodes (${nodeNoun})`
//     : `${nodes.length} nodes`;

//   const setAllInAxis = (axis, list, on) => {
//     list.forEach((v) => onFilterChange(axis, v, on));
//   };

//   return (
//     <div className="gc-container">
//       <style>{styles}</style>

//       <div className="gc-header">
//         <div className="gc-count">{nodeCountText}</div>
//         <div className="gc-count-sub">{edges.length} edges</div>
//       </div>

//       {filterStyleControls && (
//         <div className="gc-style-switch">
//           <div className="gc-section-label">Filter style</div>
//           <div className="gc-style-buttons">
//             {['checkboxes', 'toggles', 'pills'].map((s) => (
//               <button
//                 key={s}
//                 className={`gc-style-btn ${filterStyleControls.current === s ? 'active' : ''}`}
//                 onClick={() => filterStyleControls.onChange(s)}
//               >
//                 {s}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Axis 2 — usually Domain */}
//       <div className="gc-section">
//         <div className="gc-section-label">
//           {axis2Label}
//           <span className="gc-section-actions">
//             <button className="gc-mini-btn" onClick={() => setAllInAxis('domains', domainList, true)}>All</button>
//             <button className="gc-mini-btn" onClick={() => setAllInAxis('domains', domainList, false)}>None</button>
//           </span>
//         </div>
//         <div className="gc-list">
//           {domainList.map((d) => (
//             <FilterRow
//               key={d}
//               id={d}
//               label={d}
//               count={counts.domains[d]}
//               color={domainColorMap[d]}
//               isActive={activeDomains.has(d)}
//               onToggle={() => onFilterChange('domains', d, !activeDomains.has(d))}
//               style={filterStyle}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Axis 1 — usually Type/Complexity */}
//       <div className="gc-section">
//         <div className="gc-section-label">
//           {axis1Label}
//           <span className="gc-section-actions">
//             <button className="gc-mini-btn" onClick={() => setAllInAxis('types', typeList, true)}>All</button>
//             <button className="gc-mini-btn" onClick={() => setAllInAxis('types', typeList, false)}>None</button>
//           </span>
//         </div>
//         <div className="gc-list">
//           {typeList.map((t) => (
//             <FilterRow
//               key={t}
//               id={t}
//               label={t}
//               count={counts.types[t]}
//               color={null}
//               isActive={activeTypes.has(t)}
//               onToggle={() => onFilterChange('types', t, !activeTypes.has(t))}
//               style={filterStyle}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = `
// .gc-container {
//   padding: 20px 18px;
//   font-family: 'DM Sans', system-ui, sans-serif;
//   color: #0f172a;
//   background: #ffffff;
//   height: 100%;
//   overflow-y: auto;
//   box-sizing: border-box;
// }
// .gc-container * { box-sizing: border-box; }

// .gc-header {
//   padding-bottom: 12px;
//   border-bottom: 1px solid #e5e7eb;
//   margin-bottom: 4px;
// }
// .gc-count {
//   font-family: 'Crimson Pro', Georgia, serif;
//   font-size: 18px;
//   font-weight: 500;
//   color: #0f172a;
//   line-height: 1.1;
// }
// .gc-count-sub {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 10px;
//   text-transform: uppercase;
//   letter-spacing: 0.08em;
//   color: #6b7280;
//   margin-top: 3px;
// }

// .gc-section {
//   margin-top: 18px;
//   padding-top: 14px;
//   border-top: 1px solid #e5e7eb;
// }
// .gc-section:first-of-type {
//   border-top: none;
//   padding-top: 0;
//   margin-top: 16px;
// }
// .gc-section-label {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 9.5px;
//   font-weight: 600;
//   text-transform: uppercase;
//   letter-spacing: 0.09em;
//   color: #6b7280;
//   margin-bottom: 8px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// }
// .gc-section-actions { display: flex; gap: 4px; }
// .gc-mini-btn {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 9px;
//   text-transform: uppercase;
//   letter-spacing: 0.06em;
//   background: transparent;
//   border: 1px solid #e5e7eb;
//   color: #6b7280;
//   padding: 2px 6px;
//   border-radius: 2px;
//   cursor: pointer;
// }
// .gc-mini-btn:hover { border-color: #2563eb; color: #2563eb; }

// .gc-style-switch {
//   padding: 10px 0 12px;
//   border-bottom: 1px solid #e5e7eb;
// }
// .gc-style-buttons { display: flex; gap: 4px; }
// .gc-style-btn {
//   flex: 1;
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 9.5px;
//   text-transform: uppercase;
//   letter-spacing: 0.06em;
//   background: #f9fafb;
//   border: 1px solid #e5e7eb;
//   color: #6b7280;
//   padding: 5px 4px;
//   border-radius: 3px;
//   cursor: pointer;
// }
// .gc-style-btn:hover { border-color: #d1d5db; color: #0f172a; }
// .gc-style-btn.active {
//   background: #eff6ff;
//   border-color: #2563eb;
//   color: #1e40af;
// }

// .gc-list { display: flex; flex-direction: column; gap: 3px; }

// /* ---- Style 1: Checkboxes ---- */
// .gc-f1-item {
//   display: grid;
//   grid-template-columns: 16px 14px 1fr auto;
//   align-items: center;
//   gap: 8px;
//   padding: 6px 8px;
//   border-radius: 3px;
//   cursor: pointer;
//   transition: background 0.12s;
//   user-select: none;
// }
// .gc-f1-item:hover { background: #f3f4f6; }
// .gc-f1-item.gc-f1-active { background: #eff6ff; }
// .gc-f1-item.gc-f1-active:hover { background: #dbeafe; }
// .gc-f1-check {
//   width: 16px; height: 16px;
//   border: 1.5px solid #9ca3af;
//   border-radius: 3px;
//   display: flex; align-items: center; justify-content: center;
//   transition: all 0.12s;
// }
// .gc-f1-item.gc-f1-active .gc-f1-check {
//   background: #2563eb;
//   border-color: #2563eb;
// }
// .gc-f1-check svg { width: 10px; height: 10px; color: #ffffff; opacity: 0; transition: opacity 0.12s; }
// .gc-f1-item.gc-f1-active .gc-f1-check svg { opacity: 1; }
// .gc-f1-swatch { width: 12px; height: 12px; border-radius: 2px; }
// .gc-f1-swatch-empty { background: #f3f4f6; border: 1px solid #d1d5db; }
// .gc-f1-icon { display: flex; align-items: center; }
// .gc-f1-name { font-size: 12px; color: #0f172a; }
// .gc-f1-count {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 10px;
//   color: #6b7280;
// }

// /* ---- Style 2: Toggles ---- */
// .gc-f2-item {
//   display: grid;
//   grid-template-columns: 14px 1fr auto 30px;
//   align-items: center;
//   gap: 8px;
//   padding: 6px 6px;
//   border-radius: 3px;
//   cursor: pointer;
//   transition: background 0.12s;
//   user-select: none;
// }
// .gc-f2-item:hover { background: #f3f4f6; }
// .gc-f2-inactive .gc-f2-name,
// .gc-f2-inactive .gc-f2-count { color: #9ca3af; }
// .gc-f2-inactive .gc-f2-swatch { opacity: 0.3; }
// .gc-f2-inactive .gc-f2-icon { opacity: 0.35; }
// .gc-f2-swatch { width: 12px; height: 12px; border-radius: 2px; transition: opacity 0.15s; }
// .gc-f2-swatch-empty { background: #f3f4f6; border: 1px solid #d1d5db; }
// .gc-f2-icon { display: flex; align-items: center; transition: opacity 0.15s; }
// .gc-f2-name { font-size: 12px; }
// .gc-f2-count { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #6b7280; }
// .gc-f2-toggle {
//   width: 28px; height: 15px;
//   background: #d1d5db;
//   border-radius: 10px;
//   position: relative;
//   transition: background 0.18s;
// }
// .gc-f2-toggle::after {
//   content: '';
//   position: absolute;
//   top: 2px; left: 2px;
//   width: 11px; height: 11px;
//   background: #ffffff;
//   border-radius: 50%;
//   transition: left 0.18s;
//   box-shadow: 0 1px 2px rgba(0,0,0,0.2);
// }
// .gc-f2-active .gc-f2-toggle { background: #2563eb; }
// .gc-f2-active .gc-f2-toggle::after { left: 15px; }

// /* ---- Style 3: Pills ---- */
// .gc-f3-item {
//   display: flex;
//   align-items: center;
//   gap: 7px;
//   padding: 5px 10px;
//   border-radius: 999px;
//   border: 1.5px solid #e5e7eb;
//   background: transparent;
//   cursor: pointer;
//   transition: all 0.14s;
//   font-size: 12px;
//   color: #6b7280;
//   user-select: none;
// }
// .gc-f3-item:hover {
//   border-color: #9ca3af;
//   color: #0f172a;
// }
// .gc-f3-item.gc-f3-active {
//   border-color: #2563eb;
//   background: #2563eb;
//   color: #ffffff;
// }
// .gc-f3-swatch {
//   width: 10px; height: 10px;
//   border-radius: 2px;
//   background: #ffffff;
//   border: 1px solid rgba(255,255,255,0.4);
// }
// .gc-f3-item:not(.gc-f3-active) .gc-f3-swatch { border: 1px solid #d1d5db; }
// .gc-f3-icon { display: flex; align-items: center; }
// .gc-f3-name { font-weight: 500; }
// .gc-f3-count {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 10px;
//   opacity: 0.75;
//   margin-left: auto;
// }
// `;


import { useMemo } from 'react';

/**
 * Default edge style palette for legend display (mirrors KnowledgeGraph defaults).
 */
const DEFAULT_EDGE_STYLES = {
  'based-on':        { color: '#2563eb', width: 1.6, dash: null,  arrow: 'end' },
  'requires':        { color: '#60a5fa', width: 1.3, dash: '5,3', arrow: 'end' },
  'specializes':     { color: '#ea580c', width: 1.6, dash: '5,3', arrow: 'end' },
  'proves':          { color: '#c2410c', width: 2.0, dash: null,  arrow: 'end' },
  'precondition-of': { color: '#d97706', width: 1.4, dash: '2,2', arrow: 'end' },
  'alternative-to':  { color: '#1e40af', width: 1.6, dash: '6,3', arrow: 'both' },
  'inverse-of':      { color: '#1e3a8a', width: 2.0, dash: null,  arrow: 'both' },
  'similar-to':      { color: '#9ca3af', width: 1.1, dash: null,  arrow: 'both' },
  'contrasts-with':  { color: '#6b7280', width: 1.4, dash: '3,3', arrow: 'both' }
};

const DEFAULT_DOMAIN_COLORS = [
  '#94a3b8', '#60a5fa', '#2563eb', '#1e40af',
  '#ea580c', '#c2410c', '#0f172a', '#6b7280'
];

function buildDomainColorMap(nodes, override) {
  if (override) return override;
  const domains = Array.from(new Set(nodes.map((n) => n.domain).filter(Boolean)));
  const map = {};
  domains.forEach((d, i) => {
    map[d] = DEFAULT_DOMAIN_COLORS[i % DEFAULT_DOMAIN_COLORS.length];
  });
  return map;
}

function edgeStyleFor(type, edgeTypes) {
  const fromData = edgeTypes?.[type] || {};
  const fromDefault = DEFAULT_EDGE_STYLES[type] || {};
  return {
    color: fromData.color || fromDefault.color || '#9ca3af',
    width: fromData.width ?? fromDefault.width ?? 1.4,
    dash:  fromData.dash  ?? fromDefault.dash  ?? null,
    arrow: fromData.symmetric ? 'both' : (fromDefault.arrow || 'end')
  };
}

/**
 * Renders an SVG line-with-optional-arrow for use in the legend.
 */
function EdgeIcon({ type, edgeTypes, width = 26, height = 12 }) {
  const s = edgeStyleFor(type, edgeTypes);
  const endMark = s.arrow === 'end' || s.arrow === 'both';
  const startMark = s.arrow === 'both';
  const uid = `ei-${type}`;
  return (
    <svg width={width} height={height}>
      {endMark && (
        <marker
          id={`${uid}-end`}
          viewBox="0 -3 6 6"
          refX="5"
          refY="0"
          markerWidth="5"
          markerHeight="5"
          orient="auto"
          markerUnits="userSpaceOnUse"
        >
          <path d="M0,-3L6,0L0,3" fill={s.color} />
        </marker>
      )}
      {startMark && (
        <marker
          id={`${uid}-start`}
          viewBox="0 -3 6 6"
          refX="1"
          refY="0"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-reverse"
          markerUnits="userSpaceOnUse"
        >
          <path d="M0,-3L6,0L0,3" fill={s.color} />
        </marker>
      )}
      <line
        x1={startMark ? 3 : 1}
        y1={height / 2}
        x2={endMark ? width - 3 : width - 1}
        y2={height / 2}
        stroke={s.color}
        strokeWidth={s.width}
        strokeDasharray={s.dash || undefined}
        markerEnd={endMark ? `url(#${uid}-end)` : undefined}
        markerStart={startMark ? `url(#${uid}-start)` : undefined}
      />
    </svg>
  );
}

const CheckSvg = () => (
  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="2,6 5,9 10,3" />
  </svg>
);

/**
 * A single filter row rendered in one of three styles.
 */
function FilterRow({ id, label, count, color, isActive, onToggle, style }) {
  if (style === 'toggles') {
    return (
      <div className={`gc-f2-item ${isActive ? 'gc-f2-active' : 'gc-f2-inactive'}`} onClick={onToggle}>
        {color && <div className="gc-f2-swatch" style={{ background: color }} />}
        {!color && <div className="gc-f2-swatch gc-f2-swatch-empty" />}
        <div className="gc-f2-name">{label}</div>
        <div className="gc-f2-count">{count}</div>
        <div className="gc-f2-toggle" />
      </div>
    );
  }
  if (style === 'pills') {
    return (
      <div className={`gc-f3-item ${isActive ? 'gc-f3-active' : ''}`} onClick={onToggle}>
        {color && <div className="gc-f3-swatch" style={{ background: color }} />}
        <div className="gc-f3-name">{label}</div>
        <div className="gc-f3-count">{count}</div>
      </div>
    );
  }
  // Default: checkboxes
  return (
    <div className={`gc-f1-item ${isActive ? 'gc-f1-active' : ''}`} onClick={onToggle}>
      <div className="gc-f1-check"><CheckSvg /></div>
      {color && <div className="gc-f1-swatch" style={{ background: color }} />}
      {!color && <div className="gc-f1-swatch gc-f1-swatch-empty" />}
      <div className="gc-f1-name">{label}</div>
      <div className="gc-f1-count">{count}</div>
    </div>
  );
}

/**
 * A row that renders an edge-type item with a line icon instead of a solid swatch.
 */
function EdgeFilterRow({ type, count, isActive, onToggle, style, edgeTypes }) {
  const icon = <EdgeIcon type={type} edgeTypes={edgeTypes} />;
  if (style === 'toggles') {
    return (
      <div className={`gc-f2-item ${isActive ? 'gc-f2-active' : 'gc-f2-inactive'}`} onClick={onToggle}>
        <div className="gc-f2-icon">{icon}</div>
        <div className="gc-f2-name">{type}</div>
        <div className="gc-f2-count">{count}</div>
        <div className="gc-f2-toggle" />
      </div>
    );
  }
  if (style === 'pills') {
    return (
      <div className={`gc-f3-item ${isActive ? 'gc-f3-active' : ''}`} onClick={onToggle}>
        <div className="gc-f3-icon">{icon}</div>
        <div className="gc-f3-name">{type}</div>
        <div className="gc-f3-count">{count}</div>
      </div>
    );
  }
  return (
    <div className={`gc-f1-item ${isActive ? 'gc-f1-active' : ''}`} onClick={onToggle}>
      <div className="gc-f1-check"><CheckSvg /></div>
      <div className="gc-f1-icon">{icon}</div>
      <div className="gc-f1-name">{type}</div>
      <div className="gc-f1-count">{count}</div>
    </div>
  );
}

/**
 * GraphControls — sidebar with 3 filter axes and 3 UI variants.
 *
 * Props:
 *   data           — { nodes, edges, edgeTypes }
 *   filters        — { domains: Set, types: Set, edgeTypes: Set }
 *   onFilterChange — (axis, value, isActive) => void; axis in "domains"|"types"|"edgeTypes"
 *   filterStyle    — "checkboxes" (default) | "toggles" | "pills"
 *   nodeNoun       — string appended in parentheses, e.g. "skills"
 *   axis1Label     — label for first classification axis (default "Type")
 *   axis2Label     — label for second classification axis (default "Domain")
 *   domainColors   — optional color override map
 *   filterStyleControls — optional { onChange, current } to render a style switcher
 */
export default function GraphControls({
  data,
  filters,
  onFilterChange,
  filterStyle = 'checkboxes',
  nodeNoun,
  axis1Label = 'Type',
  axis2Label = 'Domain',
  domainColors: domainColorsProp,
  filterStyleControls
}) {
  const { nodes, edges, edgeTypes } = data;

  const counts = useMemo(() => {
    const domains = {};
    const types = {};
    const edgeTypeCounts = {};
    nodes.forEach((n) => {
      if (n.domain) domains[n.domain] = (domains[n.domain] || 0) + 1;
      if (n.type)   types[n.type]     = (types[n.type]     || 0) + 1;
    });
    edges.forEach((e) => {
      edgeTypeCounts[e.type] = (edgeTypeCounts[e.type] || 0) + 1;
    });
    return { domains, types, edgeTypeCounts };
  }, [nodes, edges]);

  const domainColorMap = useMemo(
    () => buildDomainColorMap(nodes, domainColorsProp),
    [nodes, domainColorsProp]
  );

  const domainList = Object.keys(counts.domains);
  const typeList = Object.keys(counts.types);
  const edgeTypeList = edgeTypes
    ? Object.keys(edgeTypes)
    : Object.keys(counts.edgeTypeCounts);

  const activeDomains = filters.domains || new Set(domainList);
  const activeTypes = filters.types || new Set(typeList);
  const activeEdgeTypes = filters.edgeTypes || new Set(edgeTypeList);

  const nodeCountText = nodeNoun
    ? `${nodes.length} nodes (${nodeNoun})`
    : `${nodes.length} nodes`;

  const setAllInAxis = (axis, list, on) => {
    list.forEach((v) => onFilterChange(axis, v, on));
  };

  return (
    <div className="gc-container">
      <style>{styles}</style>

      <div className="gc-header">
        <div className="gc-count">{nodeCountText}</div>
        <div className="gc-count-sub">{edges.length} edges</div>
      </div>

      {filterStyleControls && (
        <div className="gc-style-switch">
          <div className="gc-section-label">Filter style</div>
          <div className="gc-style-buttons">
            {['checkboxes', 'toggles', 'pills'].map((s) => (
              <button
                key={s}
                className={`gc-style-btn ${filterStyleControls.current === s ? 'active' : ''}`}
                onClick={() => filterStyleControls.onChange(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Axis 1 — Type / Complexity */}
      <div className="gc-section">
        <div className="gc-section-label">
          {axis1Label}
          <span className="gc-section-actions">
            <button className="gc-mini-btn" onClick={() => setAllInAxis('types', typeList, true)}>All</button>
            <button className="gc-mini-btn" onClick={() => setAllInAxis('types', typeList, false)}>None</button>
          </span>
        </div>
        <div className="gc-list">
          {typeList.map((t) => (
            <FilterRow
              key={t}
              id={t}
              label={t}
              count={counts.types[t]}
              color={null}
              isActive={activeTypes.has(t)}
              onToggle={() => onFilterChange('types', t, !activeTypes.has(t))}
              style={filterStyle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = `
.gc-container {
  padding: 20px 18px;
  font-family: 'DM Sans', system-ui, sans-serif;
  color: #0f172a;
  background: #ffffff;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}
.gc-container * { box-sizing: border-box; }

.gc-header {
  padding-bottom: 12px;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 4px;
}
.gc-count {
  font-family: 'Crimson Pro', Georgia, serif;
  font-size: 18px;
  font-weight: 500;
  color: #0f172a;
  line-height: 1.1;
}
.gc-count-sub {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6b7280;
  margin-top: 3px;
}

.gc-section {
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid #e5e7eb;
}
.gc-section:first-of-type {
  border-top: none;
  padding-top: 0;
  margin-top: 16px;
}
.gc-section-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: #6b7280;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.gc-section-actions { display: flex; gap: 4px; }
.gc-mini-btn {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: transparent;
  border: 1px solid #e5e7eb;
  color: #6b7280;
  padding: 2px 6px;
  border-radius: 2px;
  cursor: pointer;
}
.gc-mini-btn:hover { border-color: #2563eb; color: #2563eb; }

.gc-style-switch {
  padding: 10px 0 12px;
  border-bottom: 1px solid #e5e7eb;
}
.gc-style-buttons { display: flex; gap: 4px; }
.gc-style-btn {
  flex: 1;
  font-family: 'JetBrains Mono', monospace;
  font-size: 9.5px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  color: #6b7280;
  padding: 5px 4px;
  border-radius: 3px;
  cursor: pointer;
}
.gc-style-btn:hover { border-color: #d1d5db; color: #0f172a; }
.gc-style-btn.active {
  background: #eff6ff;
  border-color: #2563eb;
  color: #1e40af;
}

.gc-list { display: flex; flex-direction: column; gap: 3px; }

/* ---- Style 1: Checkboxes ---- */
.gc-f1-item {
  display: grid;
  grid-template-columns: 16px 14px 1fr auto;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border-radius: 3px;
  cursor: pointer;
  transition: background 0.12s;
  user-select: none;
}
.gc-f1-item:hover { background: #f3f4f6; }
.gc-f1-item.gc-f1-active { background: #eff6ff; }
.gc-f1-item.gc-f1-active:hover { background: #dbeafe; }
.gc-f1-check {
  width: 16px; height: 16px;
  border: 1.5px solid #9ca3af;
  border-radius: 3px;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.12s;
}
.gc-f1-item.gc-f1-active .gc-f1-check {
  background: #2563eb;
  border-color: #2563eb;
}
.gc-f1-check svg { width: 10px; height: 10px; color: #ffffff; opacity: 0; transition: opacity 0.12s; }
.gc-f1-item.gc-f1-active .gc-f1-check svg { opacity: 1; }
.gc-f1-swatch { width: 12px; height: 12px; border-radius: 2px; }
.gc-f1-swatch-empty { background: #f3f4f6; border: 1px solid #d1d5db; }
.gc-f1-icon { display: flex; align-items: center; }
.gc-f1-name { font-size: 12px; color: #0f172a; }
.gc-f1-count {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: #6b7280;
}

/* ---- Style 2: Toggles ---- */
.gc-f2-item {
  display: grid;
  grid-template-columns: 14px 1fr auto 30px;
  align-items: center;
  gap: 8px;
  padding: 6px 6px;
  border-radius: 3px;
  cursor: pointer;
  transition: background 0.12s;
  user-select: none;
}
.gc-f2-item:hover { background: #f3f4f6; }
.gc-f2-inactive .gc-f2-name,
.gc-f2-inactive .gc-f2-count { color: #9ca3af; }
.gc-f2-inactive .gc-f2-swatch { opacity: 0.3; }
.gc-f2-inactive .gc-f2-icon { opacity: 0.35; }
.gc-f2-swatch { width: 12px; height: 12px; border-radius: 2px; transition: opacity 0.15s; }
.gc-f2-swatch-empty { background: #f3f4f6; border: 1px solid #d1d5db; }
.gc-f2-icon { display: flex; align-items: center; transition: opacity 0.15s; }
.gc-f2-name { font-size: 12px; }
.gc-f2-count { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #6b7280; }
.gc-f2-toggle {
  width: 28px; height: 15px;
  background: #d1d5db;
  border-radius: 10px;
  position: relative;
  transition: background 0.18s;
}
.gc-f2-toggle::after {
  content: '';
  position: absolute;
  top: 2px; left: 2px;
  width: 11px; height: 11px;
  background: #ffffff;
  border-radius: 50%;
  transition: left 0.18s;
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
}
.gc-f2-active .gc-f2-toggle { background: #2563eb; }
.gc-f2-active .gc-f2-toggle::after { left: 15px; }

/* ---- Style 3: Pills ---- */
.gc-f3-item {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 5px 10px;
  border-radius: 999px;
  border: 1.5px solid #e5e7eb;
  background: transparent;
  cursor: pointer;
  transition: all 0.14s;
  font-size: 12px;
  color: #6b7280;
  user-select: none;
}
.gc-f3-item:hover {
  border-color: #9ca3af;
  color: #0f172a;
}
.gc-f3-item.gc-f3-active {
  border-color: #2563eb;
  background: #2563eb;
  color: #ffffff;
}
.gc-f3-swatch {
  width: 10px; height: 10px;
  border-radius: 2px;
  background: #ffffff;
  border: 1px solid rgba(255,255,255,0.4);
}
.gc-f3-item:not(.gc-f3-active) .gc-f3-swatch { border: 1px solid #d1d5db; }
.gc-f3-icon { display: flex; align-items: center; }
.gc-f3-name { font-weight: 500; }
.gc-f3-count {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  opacity: 0.75;
  margin-left: auto;
}
`;