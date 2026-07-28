// // // // // import { useState, useMemo } from 'react';
// // // // // import KnowledgeGraph from './KnowledgeGraph';
// // // // // import GraphControls from './GraphControls';

// // // // // /**
// // // // //  * Format an id or field key for display when no label exists.
// // // // //  */
// // // // // function humanize(id) {
// // // // //   return String(id).replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
// // // // // }

// // // // // /**
// // // // //  * Render the details panel content for a selected node.
// // // // //  */
// // // // // function DetailsContent({
// // // // //   node,
// // // // //   data,
// // // // //   detailsFields,
// // // // //   explorerUrlTemplate,
// // // // //   onClose,
// // // // //   showCloseButton
// // // // // }) {
// // // // //   if (!node) {
// // // // //     return (
// // // // //       <div className="gp-empty">Click a node</div>
// // // // //     );
// // // // //   }

// // // // //   const { edges } = data;
// // // // //   const outgoing = edges.filter((e) => (typeof e.source === 'object' ? e.source.id : e.source) === node.id);
// // // // //   const incoming = edges.filter((e) => (typeof e.target === 'object' ? e.target.id : e.target) === node.id);

// // // // //   const nodeById = {};
// // // // //   data.nodes.forEach((n) => { nodeById[n.id] = n; });

// // // // //   const fieldRenderers = {
// // // // //     label: () => (
// // // // //       <div className="gp-d-title">{node.label || node.id}</div>
// // // // //     ),
// // // // //     type: () => node.type && (
// // // // //       <span className="gp-d-chip">{node.type}</span>
// // // // //     ),
// // // // //     domain: () => node.domain && (
// // // // //       <span className="gp-d-chip gp-d-chip-gray">{node.domain}</span>
// // // // //     ),
// // // // //     summary: () => node.summary && (
// // // // //       <p className="gp-d-desc">{node.summary}</p>
// // // // //     ),
// // // // //     id: () => (
// // // // //       <div className="gp-d-id">{node.id}</div>
// // // // //     ),
// // // // //     connections: () => {
// // // // //       const items = [];
// // // // //       outgoing.forEach((e, i) => {
// // // // //         const et = data.edgeTypes?.[e.type];
// // // // //         const symmetric = et?.symmetric;
// // // // //         const tid = typeof e.target === 'object' ? e.target.id : e.target;
// // // // //         const target = nodeById[tid];
// // // // //         items.push(
// // // // //           <li key={`out-${i}`} className="gp-d-conn-item">
// // // // //             <span className="gp-d-conn-dir">{symmetric ? '↔' : '→'}</span>
// // // // //             <span className="gp-d-conn-type">{e.type}</span>
// // // // //             <span className="gp-d-conn-name">{target?.label || tid}</span>
// // // // //           </li>
// // // // //         );
// // // // //       });
// // // // //       incoming.forEach((e, i) => {
// // // // //         const et = data.edgeTypes?.[e.type];
// // // // //         const symmetric = et?.symmetric;
// // // // //         if (symmetric) return; // already shown as outgoing symmetric
// // // // //         const sid = typeof e.source === 'object' ? e.source.id : e.source;
// // // // //         const source = nodeById[sid];
// // // // //         items.push(
// // // // //           <li key={`in-${i}`} className="gp-d-conn-item gp-d-conn-in">
// // // // //             <span className="gp-d-conn-dir">←</span>
// // // // //             <span className="gp-d-conn-type">{e.type}</span>
// // // // //             <span className="gp-d-conn-name">{source?.label || sid}</span>
// // // // //           </li>
// // // // //         );
// // // // //       });
// // // // //       if (items.length === 0) return null;
// // // // //       return (
// // // // //         <div className="gp-d-section">
// // // // //           <div className="gp-d-section-label">Connections</div>
// // // // //           <ul className="gp-d-conn-list">{items}</ul>
// // // // //         </div>
// // // // //       );
// // // // //     },
// // // // //     explorerLink: () => {
// // // // //       if (!explorerUrlTemplate) return null;
// // // // //       const url = explorerUrlTemplate.replace('{id}', node.id);
// // // // //       return (
// // // // //         <div className="gp-d-actions">
// // // // //           <a className="gp-d-btn" href={url}>
// // // // //             Open in explorer <span aria-hidden="true">&rarr;</span>
// // // // //           </a>
// // // // //         </div>
// // // // //       );
// // // // //     }
// // // // //   };

// // // // //   // Group chips together for cleaner layout
// // // // //   const hasLabel = detailsFields.includes('label');
// // // // //   const chipFields = detailsFields.filter((f) => f === 'type' || f === 'domain');
// // // // //   const otherFields = detailsFields.filter((f) => f !== 'type' && f !== 'domain' && f !== 'label');

// // // // //   return (
// // // // //     <div className="gp-details-content">
// // // // //       {showCloseButton && (
// // // // //         <button
// // // // //           type="button"
// // // // //           className="gp-close-btn"
// // // // //           onClick={onClose}
// // // // //           title="Close details"
// // // // //         >
// // // // //           &times;
// // // // //         </button>
// // // // //       )}
// // // // //       <div className="gp-d-header">
// // // // //         {hasLabel && fieldRenderers.label()}
// // // // //         {chipFields.length > 0 && (
// // // // //           <div className="gp-d-meta">
// // // // //             {chipFields.map((f) => (
// // // // //               <span key={f}>{fieldRenderers[f]?.()}</span>
// // // // //             ))}
// // // // //           </div>
// // // // //         )}
// // // // //       </div>
// // // // //       {otherFields.map((f) => {
// // // // //         const rendered = fieldRenderers[f]?.();
// // // // //         if (!rendered) return null;
// // // // //         return <div key={f} className="gp-d-field">{rendered}</div>;
// // // // //       })}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // /**
// // // // //  * GraphPanel — composition of KnowledgeGraph + GraphControls + details panel.
// // // // //  *
// // // // //  * Props:
// // // // //  *   data                — { nodes, edges, edgeTypes }
// // // // //  *   nodeNoun            — e.g. "skills" (default: none, just "nodes")
// // // // //  *   axis1Label          — default "Type"
// // // // //  *   axis2Label          — default "Domain"
// // // // //  *   filterStyle         — "checkboxes" | "toggles" | "pills" (default "checkboxes")
// // // // //  *   detailsPlacement    — "A" | "B" | "C" | "D" (default "A")
// // // // //  *   tooltipFields       — array (default ["label", "type", "domain"])
// // // // //  *   detailsFields       — array (default full set)
// // // // //  *   explorerUrlTemplate — default "/methods/{id}"
// // // // //  *   domainColors        — optional color override map
// // // // //  *   showFilterStyleSwitcher — bool; if true, sidebar has a UI to switch filterStyle live (useful for demo)
// // // // //  */
// // // // // export default function GraphPanel({
// // // // //   data,
// // // // //   nodeNoun,
// // // // //   axis1Label = 'Type',
// // // // //   axis2Label = 'Domain',
// // // // //   filterStyle: filterStyleProp = 'checkboxes',
// // // // //   detailsPlacement = 'A',
// // // // //   tooltipFields = ['label', 'type', 'domain'],
// // // // //   detailsFields = ['label', 'type', 'domain', 'summary', 'connections', 'explorerLink'],
// // // // //   explorerUrlTemplate = '/methods/{id}',
// // // // //   domainColors,
// // // // //   showFilterStyleSwitcher = false
// // // // // }) {
// // // // //   // Initial filter state: all active
// // // // //   const initialFilters = useMemo(() => {
// // // // //     const domains = new Set(data.nodes.map((n) => n.domain).filter(Boolean));
// // // // //     const types = new Set(data.nodes.map((n) => n.type).filter(Boolean));
// // // // //     const edgeTypes = data.edgeTypes
// // // // //       ? new Set(Object.keys(data.edgeTypes))
// // // // //       : new Set(data.edges.map((e) => e.type));
// // // // //     return { domains, types, edgeTypes };
// // // // //   }, [data]);

// // // // //   const [filters, setFilters] = useState(initialFilters);
// // // // //   const [selectedNode, setSelectedNode] = useState(null);
// // // // //   const [filterStyle, setFilterStyle] = useState(filterStyleProp);

// // // // //   const nodeById = useMemo(() => {
// // // // //     const m = {};
// // // // //     data.nodes.forEach((n) => { m[n.id] = n; });
// // // // //     return m;
// // // // //   }, [data]);

// // // // //   const handleFilterChange = (axis, value, isActive) => {
// // // // //     setFilters((prev) => {
// // // // //       const next = { ...prev };
// // // // //       const set = new Set(prev[axis]);
// // // // //       if (isActive) set.add(value);
// // // // //       else set.delete(value);
// // // // //       next[axis] = set;
// // // // //       return next;
// // // // //     });
// // // // //   };

// // // // //   const handleNodeSelect = (nodeId) => {
// // // // //     setSelectedNode(nodeId);
// // // // //   };

// // // // //   const handleBackgroundClick = () => {
// // // // //     setSelectedNode(null);
// // // // //   };

// // // // //   const clearSelection = () => setSelectedNode(null);

// // // // //   const selectedNodeObj = selectedNode ? nodeById[selectedNode] : null;
// // // // //   const showCloseButton = detailsPlacement === 'D' && selectedNodeObj;

// // // // //   const graphEl = (
// // // // //     <KnowledgeGraph
// // // // //       data={data}
// // // // //       activeFilters={filters}
// // // // //       selectedNode={selectedNode}
// // // // //       onNodeSelect={handleNodeSelect}
// // // // //       onBackgroundClick={handleBackgroundClick}
// // // // //       tooltipFields={tooltipFields}
// // // // //       domainColors={domainColors}
// // // // //     />
// // // // //   );

// // // // //   const controlsEl = (
// // // // //     <GraphControls
// // // // //       data={data}
// // // // //       filters={filters}
// // // // //       onFilterChange={handleFilterChange}
// // // // //       filterStyle={filterStyle}
// // // // //       nodeNoun={nodeNoun}
// // // // //       axis1Label={axis1Label}
// // // // //       axis2Label={axis2Label}
// // // // //       domainColors={domainColors}
// // // // //       filterStyleControls={
// // // // //         showFilterStyleSwitcher
// // // // //           ? { current: filterStyle, onChange: setFilterStyle }
// // // // //           : null
// // // // //       }
// // // // //     />
// // // // //   );

// // // // //   const detailsEl = (
// // // // //     <DetailsContent
// // // // //       node={selectedNodeObj}
// // // // //       data={data}
// // // // //       detailsFields={detailsFields}
// // // // //       explorerUrlTemplate={explorerUrlTemplate}
// // // // //       onClose={clearSelection}
// // // // //       showCloseButton={showCloseButton}
// // // // //     />
// // // // //   );

// // // // //   // ------- Layout switching by placement -------
// // // // //   let content;
// // // // //   if (detailsPlacement === 'A') {
// // // // //     // Right sidebar with details below controls
// // // // //     content = (
// // // // //       <div className="gp-frame gp-frame-A">
// // // // //         <div className="gp-graph-area">{graphEl}</div>
// // // // //         <div className="gp-sidebar">
// // // // //           <div className="gp-sidebar-controls">{controlsEl}</div>
// // // // //           {selectedNodeObj && (
// // // // //             <div className="gp-sidebar-details">{detailsEl}</div>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   } else if (detailsPlacement === 'B') {
// // // // //     // Under graph, sidebar on right stays
// // // // //     content = (
// // // // //       <div className="gp-frame gp-frame-B">
// // // // //         <div className="gp-graph-area">{graphEl}</div>
// // // // //         <div className="gp-sidebar">{controlsEl}</div>
// // // // //         {selectedNodeObj && (
// // // // //           <div className="gp-strip-details">{detailsEl}</div>
// // // // //         )}
// // // // //       </div>
// // // // //     );
// // // // //   } else if (detailsPlacement === 'C') {
// // // // //     // Slide-out drawer from right
// // // // //     content = (
// // // // //       <div className="gp-frame gp-frame-C">
// // // // //         <div className="gp-graph-area">{graphEl}</div>
// // // // //         <div className="gp-sidebar">{controlsEl}</div>
// // // // //         <div className={`gp-drawer ${selectedNodeObj ? 'gp-drawer-open' : ''}`}>
// // // // //           <button
// // // // //             className="gp-drawer-close"
// // // // //             onClick={clearSelection}
// // // // //             title="Close"
// // // // //           >
// // // // //             &times;
// // // // //           </button>
// // // // //           {selectedNodeObj && detailsEl}
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   } else {
// // // // //     // D: split view with wide right panel that always exists
// // // // //     content = (
// // // // //       <div className="gp-frame gp-frame-D">
// // // // //         <div className="gp-graph-area">{graphEl}</div>
// // // // //         <div className="gp-split-right">
// // // // //           <div className="gp-split-details">{detailsEl}</div>
// // // // //           <div className="gp-split-controls">{controlsEl}</div>
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="gp-container">
// // // // //       <style>{styles}</style>
// // // // //       {content}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // const styles = `
// // // // // .gp-container {
// // // // //   width: 100%;
// // // // //   height: 100%;
// // // // //   min-height: 600px;
// // // // //   font-family: 'DM Sans', system-ui, sans-serif;
// // // // //   color: #0f172a;
// // // // //   background: #f8fafc;
// // // // //   box-sizing: border-box;
// // // // // }
// // // // // .gp-container *, .gp-container *::before, .gp-container *::after { box-sizing: border-box; }

// // // // // /* Frame layouts */
// // // // // .gp-frame {
// // // // //   width: 100%;
// // // // //   height: 100%;
// // // // //   background: #ffffff;
// // // // //   border: 1px solid #e5e7eb;
// // // // //   border-radius: 0;
// // // // //   overflow: hidden;
// // // // //   position: relative;
// // // // // }

// // // // // .gp-frame-A {
// // // // //   display: grid;
// // // // //   grid-template-columns: 1fr 320px;
// // // // //   height: 100%;
// // // // // }
// // // // // .gp-frame-A .gp-graph-area {
// // // // //   border-right: 1px solid #e5e7eb;
// // // // //   min-height: 500px;
// // // // // }
// // // // // .gp-frame-A .gp-sidebar {
// // // // //   display: flex;
// // // // //   flex-direction: column;
// // // // //   min-height: 0;
// // // // //   overflow: hidden;
// // // // // }
// // // // // .gp-frame-A .gp-sidebar-controls { flex: 1; overflow-y: auto; }
// // // // // .gp-frame-A .gp-sidebar-details {
// // // // //   border-top: 1px solid #e5e7eb;
// // // // //   background: #eff6ff;
// // // // //   padding: 18px 18px;
// // // // //   max-height: 45%;
// // // // //   overflow-y: auto;
// // // // // }

// // // // // .gp-frame-B {
// // // // //   display: grid;
// // // // //   grid-template-columns: 1fr 260px;
// // // // //   grid-template-rows: 1fr auto;
// // // // //   height: 100%;
// // // // // }
// // // // // .gp-frame-B .gp-graph-area {
// // // // //   grid-column: 1; grid-row: 1;
// // // // //   border-right: 1px solid #e5e7eb;
// // // // //   min-height: 400px;
// // // // // }
// // // // // .gp-frame-B .gp-sidebar {
// // // // //   grid-column: 2; grid-row: 1 / span 2;
// // // // //   overflow-y: auto;
// // // // // }
// // // // // .gp-frame-B .gp-strip-details {
// // // // //   grid-column: 1; grid-row: 2;
// // // // //   padding: 18px 22px;
// // // // //   border-top: 1px solid #e5e7eb;
// // // // //   border-right: 1px solid #e5e7eb;
// // // // //   background: #eff6ff;
// // // // // }

// // // // // .gp-frame-C {
// // // // //   display: grid;
// // // // //   grid-template-columns: 1fr 260px;
// // // // //   height: 100%;
// // // // //   position: relative;
// // // // // }
// // // // // .gp-frame-C .gp-graph-area {
// // // // //   border-right: 1px solid #e5e7eb;
// // // // //   min-height: 500px;
// // // // // }
// // // // // .gp-frame-C .gp-sidebar {
// // // // //   overflow-y: auto;
// // // // // }
// // // // // .gp-frame-C .gp-drawer {
// // // // //   position: absolute;
// // // // //   top: 0; right: 260px; bottom: 0;
// // // // //   width: 340px;
// // // // //   background: #ffffff;
// // // // //   border-left: 1px solid #e5e7eb;
// // // // //   box-shadow: -8px 0 24px rgba(15, 23, 42, 0.06);
// // // // //   transform: translateX(100%);
// // // // //   transition: transform 0.25s ease;
// // // // //   z-index: 3;
// // // // //   overflow-y: auto;
// // // // //   padding: 18px 20px;
// // // // // }
// // // // // .gp-frame-C .gp-drawer.gp-drawer-open { transform: translateX(0); }
// // // // // .gp-frame-C .gp-drawer-close {
// // // // //   position: absolute;
// // // // //   top: 10px; right: 10px;
// // // // //   background: transparent;
// // // // //   border: none;
// // // // //   color: #6b7280;
// // // // //   font-size: 20px;
// // // // //   cursor: pointer;
// // // // //   padding: 4px 8px;
// // // // //   border-radius: 3px;
// // // // //   line-height: 1;
// // // // // }
// // // // // .gp-frame-C .gp-drawer-close:hover {
// // // // //   background: #f3f4f6;
// // // // //   color: #0f172a;
// // // // // }

// // // // // .gp-frame-D {
// // // // //   display: grid;
// // // // //   grid-template-columns: 1fr 380px;
// // // // //   height: 100%;
// // // // // }
// // // // // .gp-frame-D .gp-graph-area {
// // // // //   border-right: 1px solid #e5e7eb;
// // // // //   min-height: 500px;
// // // // // }
// // // // // .gp-frame-D .gp-split-right {
// // // // //   display: flex;
// // // // //   flex-direction: column;
// // // // //   min-height: 0;
// // // // //   overflow: hidden;
// // // // // }
// // // // // .gp-frame-D .gp-split-details {
// // // // //   flex: 1;
// // // // //   overflow-y: auto;
// // // // //   padding: 22px 24px;
// // // // //   border-bottom: 1px solid #e5e7eb;
// // // // //   min-height: 200px;
// // // // //   position: relative;
// // // // // }
// // // // // .gp-frame-D .gp-split-controls {
// // // // //   overflow-y: auto;
// // // // //   max-height: 45%;
// // // // // }

// // // // // /* Details content styling (shared across all placements) */
// // // // // .gp-details-content {
// // // // //   position: relative;
// // // // // }
// // // // // .gp-close-btn {
// // // // //   position: absolute;
// // // // //   top: -6px; right: -6px;
// // // // //   background: transparent;
// // // // //   border: none;
// // // // //   color: #6b7280;
// // // // //   font-size: 20px;
// // // // //   cursor: pointer;
// // // // //   padding: 4px 8px;
// // // // //   border-radius: 3px;
// // // // //   line-height: 1;
// // // // // }
// // // // // .gp-close-btn:hover {
// // // // //   background: #f3f4f6;
// // // // //   color: #0f172a;
// // // // // }

// // // // // .gp-empty {
// // // // //   color: #9ca3af;
// // // // //   font-family: 'JetBrains Mono', monospace;
// // // // //   font-size: 11px;
// // // // //   text-transform: uppercase;
// // // // //   letter-spacing: 0.09em;
// // // // //   padding: 20px 0;
// // // // //   text-align: center;
// // // // // }

// // // // // .gp-d-header { margin-bottom: 8px; }
// // // // // .gp-d-title {
// // // // //   font-family: 'Crimson Pro', Georgia, serif;
// // // // //   font-size: 20px;
// // // // //   font-weight: 500;
// // // // //   line-height: 1.2;
// // // // //   color: #0f172a;
// // // // //   margin: 0 0 6px;
// // // // // }
// // // // // .gp-d-meta {
// // // // //   display: flex;
// // // // //   gap: 5px;
// // // // //   flex-wrap: wrap;
// // // // //   margin-bottom: 4px;
// // // // // }
// // // // // .gp-d-chip {
// // // // //   font-family: 'JetBrains Mono', monospace;
// // // // //   font-size: 9.5px;
// // // // //   font-weight: 600;
// // // // //   text-transform: uppercase;
// // // // //   letter-spacing: 0.08em;
// // // // //   padding: 3px 8px;
// // // // //   border-radius: 3px;
// // // // //   background: #dbeafe;
// // // // //   color: #1e40af;
// // // // // }
// // // // // .gp-d-chip-gray {
// // // // //   background: #f3f4f6;
// // // // //   color: #374151;
// // // // // }
// // // // // .gp-d-desc {
// // // // //   font-size: 12.5px;
// // // // //   color: #475569;
// // // // //   line-height: 1.5;
// // // // //   margin: 8px 0 4px;
// // // // // }
// // // // // .gp-d-id {
// // // // //   font-family: 'JetBrains Mono', monospace;
// // // // //   font-size: 10.5px;
// // // // //   color: #6b7280;
// // // // //   margin: 4px 0;
// // // // // }
// // // // // .gp-d-section { margin-top: 10px; }
// // // // // .gp-d-section-label {
// // // // //   font-family: 'JetBrains Mono', monospace;
// // // // //   font-size: 9.5px;
// // // // //   font-weight: 600;
// // // // //   text-transform: uppercase;
// // // // //   letter-spacing: 0.09em;
// // // // //   color: #6b7280;
// // // // //   margin-bottom: 4px;
// // // // // }
// // // // // .gp-d-conn-list {
// // // // //   list-style: none;
// // // // //   padding: 0;
// // // // //   margin: 0;
// // // // // }
// // // // // .gp-d-conn-item {
// // // // //   font-size: 12px;
// // // // //   color: #0f172a;
// // // // //   line-height: 1.4;
// // // // //   padding: 3px 0;
// // // // //   display: flex;
// // // // //   gap: 6px;
// // // // //   align-items: baseline;
// // // // // }
// // // // // .gp-d-conn-dir {
// // // // //   font-family: 'JetBrains Mono', monospace;
// // // // //   font-size: 11px;
// // // // //   color: #6b7280;
// // // // //   min-width: 12px;
// // // // // }
// // // // // .gp-d-conn-type {
// // // // //   font-family: 'JetBrains Mono', monospace;
// // // // //   font-size: 9.5px;
// // // // //   text-transform: uppercase;
// // // // //   letter-spacing: 0.06em;
// // // // //   color: #6b7280;
// // // // //   padding: 1px 5px;
// // // // //   background: #f3f4f6;
// // // // //   border-radius: 2px;
// // // // //   white-space: nowrap;
// // // // // }
// // // // // .gp-d-conn-name { flex: 1; }
// // // // // .gp-d-actions {
// // // // //   margin-top: 14px;
// // // // //   padding-top: 12px;
// // // // //   border-top: 1px solid #e5e7eb;
// // // // // }
// // // // // .gp-d-btn {
// // // // //   display: inline-flex;
// // // // //   align-items: center;
// // // // //   gap: 6px;
// // // // //   padding: 8px 14px;
// // // // //   background: #2563eb;
// // // // //   color: #ffffff;
// // // // //   border: none;
// // // // //   border-radius: 4px;
// // // // //   font-family: 'DM Sans', system-ui, sans-serif;
// // // // //   font-size: 12.5px;
// // // // //   font-weight: 500;
// // // // //   cursor: pointer;
// // // // //   text-decoration: none;
// // // // //   transition: background 0.12s;
// // // // // }
// // // // // .gp-d-btn:hover { background: #1e40af; }
// // // // // `;


// // // // import { useState, useMemo } from 'react';
// // // // import KnowledgeGraph from './KnowledgeGraph';
// // // // import GraphControls from './GraphControls';

// // // // /**
// // // //  * Default edge style palette used to render the legend line icons.
// // // //  */
// // // // const DEFAULT_EDGE_STYLES = {
// // // //   'based-on':        { color: '#2563eb', width: 1.6, dash: null,  arrow: 'end' },
// // // //   'requires':        { color: '#60a5fa', width: 1.3, dash: '5,3', arrow: 'end' },
// // // //   'specializes':     { color: '#ea580c', width: 1.6, dash: '5,3', arrow: 'end' },
// // // //   'proves':          { color: '#c2410c', width: 2.0, dash: null,  arrow: 'end' },
// // // //   'precondition-of': { color: '#d97706', width: 1.4, dash: '2,2', arrow: 'end' },
// // // //   'alternative-to':  { color: '#1e40af', width: 1.6, dash: '6,3', arrow: 'both' },
// // // //   'inverse-of':      { color: '#1e3a8a', width: 2.0, dash: null,  arrow: 'both' },
// // // //   'similar-to':      { color: '#9ca3af', width: 1.1, dash: null,  arrow: 'both' },
// // // //   'contrasts-with':  { color: '#6b7280', width: 1.4, dash: '3,3', arrow: 'both' }
// // // // };

// // // // function edgeStyleFor(type, edgeTypes) {
// // // //   const fromData = edgeTypes?.[type] || {};
// // // //   const fromDefault = DEFAULT_EDGE_STYLES[type] || {};
// // // //   return {
// // // //     color: fromData.color || fromDefault.color || '#9ca3af',
// // // //     width: fromData.width ?? fromDefault.width ?? 1.4,
// // // //     dash:  fromData.dash  ?? fromDefault.dash  ?? null,
// // // //     arrow: fromData.symmetric ? 'both' : (fromDefault.arrow || 'end'),
// // // //     phrase: fromData.phrase || fromDefault.phrase || type.replace(/-/g, ' ')
// // // //   };
// // // // }

// // // // /**
// // // //  * SVG line-with-optional-arrow used in the legend.
// // // //  */
// // // // function EdgeIcon({ type, edgeTypes, width = 28, height = 12 }) {
// // // //   const s = edgeStyleFor(type, edgeTypes);
// // // //   const endMark = s.arrow === 'end' || s.arrow === 'both';
// // // //   const startMark = s.arrow === 'both';
// // // //   const uid = `lei-${type}`;
// // // //   return (
// // // //     <svg width={width} height={height} style={{ display: 'block' }}>
// // // //       {endMark && (
// // // //         <marker
// // // //           id={`${uid}-end`}
// // // //           viewBox="0 -3 6 6"
// // // //           refX="5" refY="0"
// // // //           markerWidth="5" markerHeight="5"
// // // //           orient="auto"
// // // //           markerUnits="userSpaceOnUse"
// // // //         >
// // // //           <path d="M0,-3L6,0L0,3" fill={s.color} />
// // // //         </marker>
// // // //       )}
// // // //       {startMark && (
// // // //         <marker
// // // //           id={`${uid}-start`}
// // // //           viewBox="0 -3 6 6"
// // // //           refX="1" refY="0"
// // // //           markerWidth="5" markerHeight="5"
// // // //           orient="auto-start-reverse"
// // // //           markerUnits="userSpaceOnUse"
// // // //         >
// // // //           <path d="M0,-3L6,0L0,3" fill={s.color} />
// // // //         </marker>
// // // //       )}
// // // //       <line
// // // //         x1={startMark ? 3 : 1}
// // // //         y1={height / 2}
// // // //         x2={endMark ? width - 3 : width - 1}
// // // //         y2={height / 2}
// // // //         stroke={s.color}
// // // //         strokeWidth={s.width}
// // // //         strokeDasharray={s.dash || undefined}
// // // //         markerEnd={endMark ? `url(#${uid}-end)` : undefined}
// // // //         markerStart={startMark ? `url(#${uid}-start)` : undefined}
// // // //       />
// // // //     </svg>
// // // //   );
// // // // }

// // // // /**
// // // //  * The header strip content. Renders CTA when nothing is hovered,
// // // //  * node summary when a node is hovered, or edge summary when an edge is hovered.
// // // //  */
// // // // function HeaderStrip({ hovered, ctaText }) {
// // // //   if (!hovered) {
// // // //     return <div className="gp-strip-cta">{ctaText}</div>;
// // // //   }
// // // //   if (hovered.kind === 'node') {
// // // //     const n = hovered.node;
// // // //     return (
// // // //       <div className="gp-strip-node">
// // // //         <span className="gp-strip-label">{n.label || n.id}</span>
// // // //         {n.type && <span className="gp-strip-chip">{n.type}</span>}
// // // //         {n.domain && <span className="gp-strip-chip gp-strip-chip-gray">{n.domain}</span>}
// // // //       </div>
// // // //     );
// // // //   }
// // // //   if (hovered.kind === 'edge') {
// // // //     const { source, target, phrase, edge } = hovered;
// // // //     return (
// // // //       <div className="gp-strip-edge">
// // // //         <span className="gp-strip-endpoint">{source.label || source.id}</span>
// // // //         <span className="gp-strip-phrase">{phrase}</span>
// // // //         <span className="gp-strip-endpoint">{target.label || target.id}</span>
// // // //         <span className="gp-strip-chip gp-strip-chip-edge">{edge.type}</span>
// // // //       </div>
// // // //     );
// // // //   }
// // // //   return null;
// // // // }

// // // // /**
// // // //  * The passive edge-type legend. Non-interactive.
// // // //  */
// // // // function EdgeTypeLegend({ edgeTypes, counts }) {
// // // //   const types = edgeTypes
// // // //     ? Object.keys(edgeTypes)
// // // //     : Object.keys(counts);
// // // //   return (
// // // //     <div className="gp-legend">
// // // //       <div className="gp-legend-label">Edge types</div>
// // // //       <div className="gp-legend-list">
// // // //         {types.map((t) => (
// // // //           <div key={t} className="gp-legend-item">
// // // //             <EdgeIcon type={t} edgeTypes={edgeTypes} />
// // // //             <span className="gp-legend-name">{t}</span>
// // // //             <span className="gp-legend-count">{counts[t] || 0}</span>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // /**
// // // //  * Render the details panel content for a selected node.
// // // //  */
// // // // function DetailsContent({ node, data, detailsFields, explorerUrlTemplate, onClose, showCloseButton }) {
// // // //   if (!node) {
// // // //     return <div className="gp-empty">Click a node</div>;
// // // //   }

// // // //   const { edges } = data;
// // // //   const outgoing = edges.filter((e) => (typeof e.source === 'object' ? e.source.id : e.source) === node.id);
// // // //   const incoming = edges.filter((e) => (typeof e.target === 'object' ? e.target.id : e.target) === node.id);

// // // //   const nodeById = {};
// // // //   data.nodes.forEach((n) => { nodeById[n.id] = n; });

// // // //   const fieldRenderers = {
// // // //     label: () => <div className="gp-d-title">{node.label || node.id}</div>,
// // // //     type: () => node.type && <span className="gp-d-chip">{node.type}</span>,
// // // //     domain: () => node.domain && <span className="gp-d-chip gp-d-chip-gray">{node.domain}</span>,
// // // //     summary: () => node.summary && <p className="gp-d-desc">{node.summary}</p>,
// // // //     id: () => <div className="gp-d-id">{node.id}</div>,
// // // //     connections: () => {
// // // //       const items = [];
// // // //       outgoing.forEach((e, i) => {
// // // //         const et = data.edgeTypes?.[e.type];
// // // //         const symmetric = et?.symmetric;
// // // //         const tid = typeof e.target === 'object' ? e.target.id : e.target;
// // // //         const target = nodeById[tid];
// // // //         items.push(
// // // //           <li key={`out-${i}`} className="gp-d-conn-item">
// // // //             <span className="gp-d-conn-dir">{symmetric ? '↔' : '→'}</span>
// // // //             <span className="gp-d-conn-type">{e.type}</span>
// // // //             <span className="gp-d-conn-name">{target?.label || tid}</span>
// // // //           </li>
// // // //         );
// // // //       });
// // // //       incoming.forEach((e, i) => {
// // // //         const et = data.edgeTypes?.[e.type];
// // // //         const symmetric = et?.symmetric;
// // // //         if (symmetric) return;
// // // //         const sid = typeof e.source === 'object' ? e.source.id : e.source;
// // // //         const source = nodeById[sid];
// // // //         items.push(
// // // //           <li key={`in-${i}`} className="gp-d-conn-item gp-d-conn-in">
// // // //             <span className="gp-d-conn-dir">←</span>
// // // //             <span className="gp-d-conn-type">{e.type}</span>
// // // //             <span className="gp-d-conn-name">{source?.label || sid}</span>
// // // //           </li>
// // // //         );
// // // //       });
// // // //       if (items.length === 0) return null;
// // // //       return (
// // // //         <div className="gp-d-section">
// // // //           <div className="gp-d-section-label">Connections</div>
// // // //           <ul className="gp-d-conn-list">{items}</ul>
// // // //         </div>
// // // //       );
// // // //     },
// // // //     explorerLink: () => {
// // // //       if (!explorerUrlTemplate) return null;
// // // //       const url = explorerUrlTemplate.replace('{id}', node.id);
// // // //       return (
// // // //         <div className="gp-d-actions">
// // // //           <a className="gp-d-btn" href={url}>Open in explorer <span aria-hidden="true">&rarr;</span></a>
// // // //         </div>
// // // //       );
// // // //     }
// // // //   };

// // // //   const hasLabel = detailsFields.includes('label');
// // // //   const chipFields = detailsFields.filter((f) => f === 'type' || f === 'domain');
// // // //   const otherFields = detailsFields.filter((f) => f !== 'type' && f !== 'domain' && f !== 'label');

// // // //   return (
// // // //     <div className="gp-details-content">
// // // //       {showCloseButton && (
// // // //         <button type="button" className="gp-close-btn" onClick={onClose} title="Close details">&times;</button>
// // // //       )}
// // // //       <div className="gp-d-header">
// // // //         {hasLabel && fieldRenderers.label()}
// // // //         {chipFields.length > 0 && (
// // // //           <div className="gp-d-meta">
// // // //             {chipFields.map((f) => (<span key={f}>{fieldRenderers[f]?.()}</span>))}
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //       {otherFields.map((f) => {
// // // //         const rendered = fieldRenderers[f]?.();
// // // //         if (!rendered) return null;
// // // //         return <div key={f} className="gp-d-field">{rendered}</div>;
// // // //       })}
// // // //     </div>
// // // //   );
// // // // }

// // // // /**
// // // //  * GraphPanel v2 — composition. Header strip at top of graph area, legend overlay in bottom-right.
// // // //  *
// // // //  * Props are the same as v1 with these changes:
// // // //  *   - tooltipFields removed (header strip renders with a fixed layout using label/type/domain)
// // // //  *   - ctaText added (customizable CTA when nothing is hovered)
// // // //  */
// // // // export default function GraphPanel({
// // // //   data,
// // // //   nodeNoun,
// // // //   axis1Label = 'Type',
// // // //   axis2Label = 'Domain',
// // // //   filterStyle: filterStyleProp = 'checkboxes',
// // // //   detailsPlacement = 'A',
// // // //   detailsFields = ['label', 'type', 'domain', 'summary', 'connections', 'explorerLink'],
// // // //   explorerUrlTemplate = '/methods/{id}',
// // // //   domainColors,
// // // //   showFilterStyleSwitcher = false,
// // // //   ctaText = 'Hover any node or edge to see what it represents'
// // // // }) {
// // // //   const initialFilters = useMemo(() => {
// // // //     const domains = new Set(data.nodes.map((n) => n.domain).filter(Boolean));
// // // //     const types = new Set(data.nodes.map((n) => n.type).filter(Boolean));
// // // //     return { domains, types };
// // // //   }, [data]);

// // // //   const [filters, setFilters] = useState(initialFilters);
// // // //   const [selectedNode, setSelectedNode] = useState(null);
// // // //   const [filterStyle, setFilterStyle] = useState(filterStyleProp);
// // // //   const [hovered, setHovered] = useState(null);

// // // //   const nodeById = useMemo(() => {
// // // //     const m = {};
// // // //     data.nodes.forEach((n) => { m[n.id] = n; });
// // // //     return m;
// // // //   }, [data]);

// // // //   const edgeCounts = useMemo(() => {
// // // //     const counts = {};
// // // //     data.edges.forEach((e) => { counts[e.type] = (counts[e.type] || 0) + 1; });
// // // //     return counts;
// // // //   }, [data]);

// // // //   const handleFilterChange = (axis, value, isActive) => {
// // // //     setFilters((prev) => {
// // // //       const next = { ...prev };
// // // //       const set = new Set(prev[axis]);
// // // //       if (isActive) set.add(value);
// // // //       else set.delete(value);
// // // //       next[axis] = set;
// // // //       return next;
// // // //     });
// // // //   };

// // // //   const handleNodeSelect = (nodeId) => setSelectedNode(nodeId);
// // // //   const handleBackgroundClick = () => setSelectedNode(null);
// // // //   const clearSelection = () => setSelectedNode(null);

// // // //   const selectedNodeObj = selectedNode ? nodeById[selectedNode] : null;
// // // //   const showCloseButton = detailsPlacement === 'D' && selectedNodeObj;

// // // //   const graphContent = (
// // // //     <div className="gp-graph-area">
// // // //       <div className="gp-header-strip">
// // // //         <HeaderStrip hovered={hovered} ctaText={ctaText} />
// // // //       </div>
// // // //       <div className="gp-graph-content">
// // // //         <KnowledgeGraph
// // // //           data={data}
// // // //           activeFilters={filters}
// // // //           selectedNode={selectedNode}
// // // //           onNodeSelect={handleNodeSelect}
// // // //           onBackgroundClick={handleBackgroundClick}
// // // //           onHover={setHovered}
// // // //           domainColors={domainColors}
// // // //         />
// // // //         <EdgeTypeLegend edgeTypes={data.edgeTypes} counts={edgeCounts} />
// // // //       </div>
// // // //     </div>
// // // //   );

// // // //   const controlsEl = (
// // // //     <GraphControls
// // // //       data={data}
// // // //       filters={filters}
// // // //       onFilterChange={handleFilterChange}
// // // //       filterStyle={filterStyle}
// // // //       nodeNoun={nodeNoun}
// // // //       axis1Label={axis1Label}
// // // //       axis2Label={axis2Label}
// // // //       domainColors={domainColors}
// // // //       filterStyleControls={
// // // //         showFilterStyleSwitcher
// // // //           ? { current: filterStyle, onChange: setFilterStyle }
// // // //           : null
// // // //       }
// // // //     />
// // // //   );

// // // //   const detailsEl = (
// // // //     <DetailsContent
// // // //       node={selectedNodeObj}
// // // //       data={data}
// // // //       detailsFields={detailsFields}
// // // //       explorerUrlTemplate={explorerUrlTemplate}
// // // //       onClose={clearSelection}
// // // //       showCloseButton={showCloseButton}
// // // //     />
// // // //   );

// // // //   let content;
// // // //   if (detailsPlacement === 'A') {
// // // //     content = (
// // // //       <div className="gp-frame gp-frame-A">
// // // //         {graphContent}
// // // //         <div className="gp-sidebar">
// // // //           <div className="gp-sidebar-controls">{controlsEl}</div>
// // // //           {selectedNodeObj && <div className="gp-sidebar-details">{detailsEl}</div>}
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   } else if (detailsPlacement === 'B') {
// // // //     content = (
// // // //       <div className="gp-frame gp-frame-B">
// // // //         {graphContent}
// // // //         <div className="gp-sidebar">{controlsEl}</div>
// // // //         {selectedNodeObj && <div className="gp-strip-details">{detailsEl}</div>}
// // // //       </div>
// // // //     );
// // // //   } else if (detailsPlacement === 'C') {
// // // //     content = (
// // // //       <div className="gp-frame gp-frame-C">
// // // //         {graphContent}
// // // //         <div className="gp-sidebar">{controlsEl}</div>
// // // //         <div className={`gp-drawer ${selectedNodeObj ? 'gp-drawer-open' : ''}`}>
// // // //           <button className="gp-drawer-close" onClick={clearSelection} title="Close">&times;</button>
// // // //           {selectedNodeObj && detailsEl}
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   } else {
// // // //     content = (
// // // //       <div className="gp-frame gp-frame-D">
// // // //         {graphContent}
// // // //         <div className="gp-split-right">
// // // //           <div className="gp-split-details">{detailsEl}</div>
// // // //           <div className="gp-split-controls">{controlsEl}</div>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="gp-container">
// // // //       <style>{styles}</style>
// // // //       {content}
// // // //     </div>
// // // //   );
// // // // }

// // // // const styles = `
// // // // .gp-container {
// // // //   width: 100%;
// // // //   height: 100%;
// // // //   min-height: 600px;
// // // //   font-family: 'DM Sans', system-ui, sans-serif;
// // // //   color: #0f172a;
// // // //   background: #f8fafc;
// // // //   box-sizing: border-box;
// // // // }
// // // // .gp-container *, .gp-container *::before, .gp-container *::after { box-sizing: border-box; }

// // // // .gp-frame {
// // // //   width: 100%;
// // // //   height: 100%;
// // // //   background: #ffffff;
// // // //   border: 1px solid #e5e7eb;
// // // //   overflow: hidden;
// // // //   position: relative;
// // // // }

// // // // /* ==== Graph area (contains header strip + graph content + legend overlay) ==== */
// // // // .gp-graph-area {
// // // //   display: flex;
// // // //   flex-direction: column;
// // // //   min-height: 500px;
// // // //   position: relative;
// // // //   background: #ffffff;
// // // // }
// // // // .gp-header-strip {
// // // //   height: 44px;
// // // //   border-bottom: 1px solid #e5e7eb;
// // // //   display: flex;
// // // //   align-items: center;
// // // //   padding: 0 18px;
// // // //   background: #ffffff;
// // // //   flex-shrink: 0;
// // // // }
// // // // .gp-graph-content {
// // // //   flex: 1;
// // // //   min-height: 0;
// // // //   position: relative;
// // // // }

// // // // /* ==== Header strip content ==== */
// // // // .gp-strip-cta {
// // // //   width: 100%;
// // // //   text-align: center;
// // // //   font-family: 'JetBrains Mono', monospace;
// // // //   font-size: 10px;
// // // //   text-transform: uppercase;
// // // //   letter-spacing: 0.09em;
// // // //   color: #9ca3af;
// // // // }
// // // // .gp-strip-node,
// // // // .gp-strip-edge {
// // // //   display: flex;
// // // //   align-items: center;
// // // //   gap: 10px;
// // // //   width: 100%;
// // // //   overflow: hidden;
// // // // }
// // // // .gp-strip-label {
// // // //   font-family: 'Crimson Pro', Georgia, serif;
// // // //   font-size: 16px;
// // // //   font-weight: 500;
// // // //   color: #0f172a;
// // // //   line-height: 1.15;
// // // //   white-space: nowrap;
// // // //   overflow: hidden;
// // // //   text-overflow: ellipsis;
// // // //   flex-shrink: 1;
// // // //   min-width: 0;
// // // // }
// // // // .gp-strip-endpoint {
// // // //   font-family: 'Crimson Pro', Georgia, serif;
// // // //   font-size: 15px;
// // // //   font-weight: 500;
// // // //   color: #0f172a;
// // // //   line-height: 1.15;
// // // //   white-space: nowrap;
// // // //   overflow: hidden;
// // // //   text-overflow: ellipsis;
// // // //   min-width: 0;
// // // //   flex-shrink: 1;
// // // // }
// // // // .gp-strip-phrase {
// // // //   font-family: 'DM Sans', system-ui, sans-serif;
// // // //   font-size: 12px;
// // // //   font-style: italic;
// // // //   color: #475569;
// // // //   white-space: nowrap;
// // // //   flex-shrink: 0;
// // // // }
// // // // .gp-strip-chip {
// // // //   font-family: 'JetBrains Mono', monospace;
// // // //   font-size: 9px;
// // // //   font-weight: 600;
// // // //   text-transform: uppercase;
// // // //   letter-spacing: 0.08em;
// // // //   padding: 3px 7px;
// // // //   border-radius: 3px;
// // // //   background: #dbeafe;
// // // //   color: #1e40af;
// // // //   white-space: nowrap;
// // // //   flex-shrink: 0;
// // // // }
// // // // .gp-strip-chip-gray { background: #f3f4f6; color: #374151; }
// // // // .gp-strip-chip-edge { background: #fef3c7; color: #92400e; }

// // // // /* ==== Legend overlay ==== */
// // // // .gp-legend {
// // // //   position: absolute;
// // // //   bottom: 12px;
// // // //   right: 12px;
// // // //   background: rgba(255, 255, 255, 0.96);
// // // //   border: 1px solid #e5e7eb;
// // // //   border-radius: 4px;
// // // //   padding: 10px 12px;
// // // //   box-shadow: 0 2px 12px rgba(15, 23, 42, 0.06);
// // // //   z-index: 5;
// // // //   max-width: 220px;
// // // //   pointer-events: none;
// // // // }
// // // // .gp-legend-label {
// // // //   font-family: 'JetBrains Mono', monospace;
// // // //   font-size: 9px;
// // // //   font-weight: 600;
// // // //   text-transform: uppercase;
// // // //   letter-spacing: 0.09em;
// // // //   color: #6b7280;
// // // //   margin-bottom: 6px;
// // // //   padding-bottom: 4px;
// // // //   border-bottom: 1px solid #e5e7eb;
// // // // }
// // // // .gp-legend-list {
// // // //   display: flex;
// // // //   flex-direction: column;
// // // //   gap: 3px;
// // // // }
// // // // .gp-legend-item {
// // // //   display: grid;
// // // //   grid-template-columns: 28px 1fr auto;
// // // //   align-items: center;
// // // //   gap: 7px;
// // // //   font-size: 11px;
// // // // }
// // // // .gp-legend-name {
// // // //   font-family: 'DM Sans', system-ui, sans-serif;
// // // //   color: #374151;
// // // // }
// // // // .gp-legend-count {
// // // //   font-family: 'JetBrains Mono', monospace;
// // // //   font-size: 9.5px;
// // // //   color: #9ca3af;
// // // // }

// // // // /* ==== Placement layouts ==== */
// // // // .gp-frame-A {
// // // //   display: grid;
// // // //   grid-template-columns: 1fr 320px;
// // // //   height: 100%;
// // // // }
// // // // .gp-frame-A .gp-graph-area { border-right: 1px solid #e5e7eb; }
// // // // .gp-frame-A .gp-sidebar {
// // // //   display: flex;
// // // //   flex-direction: column;
// // // //   min-height: 0;
// // // //   overflow: hidden;
// // // // }
// // // // .gp-frame-A .gp-sidebar-controls { flex: 1; overflow-y: auto; }
// // // // .gp-frame-A .gp-sidebar-details {
// // // //   border-top: 1px solid #e5e7eb;
// // // //   background: #eff6ff;
// // // //   padding: 18px 18px;
// // // //   max-height: 45%;
// // // //   overflow-y: auto;
// // // // }

// // // // .gp-frame-B {
// // // //   display: grid;
// // // //   grid-template-columns: 1fr 260px;
// // // //   grid-template-rows: 1fr auto;
// // // //   height: 100%;
// // // // }
// // // // .gp-frame-B .gp-graph-area { grid-column: 1; grid-row: 1; border-right: 1px solid #e5e7eb; }
// // // // .gp-frame-B .gp-sidebar { grid-column: 2; grid-row: 1 / span 2; overflow-y: auto; }
// // // // .gp-frame-B .gp-strip-details {
// // // //   grid-column: 1; grid-row: 2;
// // // //   padding: 18px 22px;
// // // //   border-top: 1px solid #e5e7eb;
// // // //   border-right: 1px solid #e5e7eb;
// // // //   background: #eff6ff;
// // // // }

// // // // .gp-frame-C {
// // // //   display: grid;
// // // //   grid-template-columns: 1fr 260px;
// // // //   height: 100%;
// // // //   position: relative;
// // // // }
// // // // .gp-frame-C .gp-graph-area { border-right: 1px solid #e5e7eb; }
// // // // .gp-frame-C .gp-sidebar { overflow-y: auto; }
// // // // .gp-frame-C .gp-drawer {
// // // //   position: absolute;
// // // //   top: 0; right: 260px; bottom: 0;
// // // //   width: 340px;
// // // //   background: #ffffff;
// // // //   border-left: 1px solid #e5e7eb;
// // // //   box-shadow: -8px 0 24px rgba(15, 23, 42, 0.06);
// // // //   transform: translateX(100%);
// // // //   transition: transform 0.25s ease;
// // // //   z-index: 4;
// // // //   overflow-y: auto;
// // // //   padding: 18px 20px;
// // // // }
// // // // .gp-frame-C .gp-drawer.gp-drawer-open { transform: translateX(0); }
// // // // .gp-frame-C .gp-drawer-close {
// // // //   position: absolute;
// // // //   top: 10px; right: 10px;
// // // //   background: transparent;
// // // //   border: none;
// // // //   color: #6b7280;
// // // //   font-size: 20px;
// // // //   cursor: pointer;
// // // //   padding: 4px 8px;
// // // //   border-radius: 3px;
// // // //   line-height: 1;
// // // // }
// // // // .gp-frame-C .gp-drawer-close:hover { background: #f3f4f6; color: #0f172a; }

// // // // .gp-frame-D {
// // // //   display: grid;
// // // //   grid-template-columns: 1fr 380px;
// // // //   height: 100%;
// // // // }
// // // // .gp-frame-D .gp-graph-area { border-right: 1px solid #e5e7eb; }
// // // // .gp-frame-D .gp-split-right {
// // // //   display: flex;
// // // //   flex-direction: column;
// // // //   min-height: 0;
// // // //   overflow: hidden;
// // // // }
// // // // .gp-frame-D .gp-split-details {
// // // //   flex: 1;
// // // //   overflow-y: auto;
// // // //   padding: 22px 24px;
// // // //   border-bottom: 1px solid #e5e7eb;
// // // //   min-height: 200px;
// // // //   position: relative;
// // // // }
// // // // .gp-frame-D .gp-split-controls { overflow-y: auto; max-height: 45%; }

// // // // /* ==== Details content ==== */
// // // // .gp-details-content { position: relative; }
// // // // .gp-close-btn {
// // // //   position: absolute;
// // // //   top: -6px; right: -6px;
// // // //   background: transparent;
// // // //   border: none;
// // // //   color: #6b7280;
// // // //   font-size: 20px;
// // // //   cursor: pointer;
// // // //   padding: 4px 8px;
// // // //   border-radius: 3px;
// // // //   line-height: 1;
// // // // }
// // // // .gp-close-btn:hover { background: #f3f4f6; color: #0f172a; }

// // // // .gp-empty {
// // // //   color: #9ca3af;
// // // //   font-family: 'JetBrains Mono', monospace;
// // // //   font-size: 11px;
// // // //   text-transform: uppercase;
// // // //   letter-spacing: 0.09em;
// // // //   padding: 20px 0;
// // // //   text-align: center;
// // // // }

// // // // .gp-d-header { margin-bottom: 8px; }
// // // // .gp-d-title {
// // // //   font-family: 'Crimson Pro', Georgia, serif;
// // // //   font-size: 20px;
// // // //   font-weight: 500;
// // // //   line-height: 1.2;
// // // //   color: #0f172a;
// // // //   margin: 0 0 6px;
// // // // }
// // // // .gp-d-meta {
// // // //   display: flex;
// // // //   gap: 5px;
// // // //   flex-wrap: wrap;
// // // //   margin-bottom: 4px;
// // // // }
// // // // .gp-d-chip {
// // // //   font-family: 'JetBrains Mono', monospace;
// // // //   font-size: 9.5px;
// // // //   font-weight: 600;
// // // //   text-transform: uppercase;
// // // //   letter-spacing: 0.08em;
// // // //   padding: 3px 8px;
// // // //   border-radius: 3px;
// // // //   background: #dbeafe;
// // // //   color: #1e40af;
// // // // }
// // // // .gp-d-chip-gray { background: #f3f4f6; color: #374151; }
// // // // .gp-d-desc {
// // // //   font-size: 12.5px;
// // // //   color: #475569;
// // // //   line-height: 1.5;
// // // //   margin: 8px 0 4px;
// // // // }
// // // // .gp-d-id {
// // // //   font-family: 'JetBrains Mono', monospace;
// // // //   font-size: 10.5px;
// // // //   color: #6b7280;
// // // //   margin: 4px 0;
// // // // }
// // // // .gp-d-section { margin-top: 10px; }
// // // // .gp-d-section-label {
// // // //   font-family: 'JetBrains Mono', monospace;
// // // //   font-size: 9.5px;
// // // //   font-weight: 600;
// // // //   text-transform: uppercase;
// // // //   letter-spacing: 0.09em;
// // // //   color: #6b7280;
// // // //   margin-bottom: 4px;
// // // // }
// // // // .gp-d-conn-list { list-style: none; padding: 0; margin: 0; }
// // // // .gp-d-conn-item {
// // // //   font-size: 12px;
// // // //   color: #0f172a;
// // // //   line-height: 1.4;
// // // //   padding: 3px 0;
// // // //   display: flex;
// // // //   gap: 6px;
// // // //   align-items: baseline;
// // // // }
// // // // .gp-d-conn-dir {
// // // //   font-family: 'JetBrains Mono', monospace;
// // // //   font-size: 11px;
// // // //   color: #6b7280;
// // // //   min-width: 12px;
// // // // }
// // // // .gp-d-conn-type {
// // // //   font-family: 'JetBrains Mono', monospace;
// // // //   font-size: 9.5px;
// // // //   text-transform: uppercase;
// // // //   letter-spacing: 0.06em;
// // // //   color: #6b7280;
// // // //   padding: 1px 5px;
// // // //   background: #f3f4f6;
// // // //   border-radius: 2px;
// // // //   white-space: nowrap;
// // // // }
// // // // .gp-d-conn-name { flex: 1; }
// // // // .gp-d-actions {
// // // //   margin-top: 14px;
// // // //   padding-top: 12px;
// // // //   border-top: 1px solid #e5e7eb;
// // // // }
// // // // .gp-d-btn {
// // // //   display: inline-flex;
// // // //   align-items: center;
// // // //   gap: 6px;
// // // //   padding: 8px 14px;
// // // //   background: #2563eb;
// // // //   color: #ffffff;
// // // //   border: none;
// // // //   border-radius: 4px;
// // // //   font-family: 'DM Sans', system-ui, sans-serif;
// // // //   font-size: 12.5px;
// // // //   font-weight: 500;
// // // //   cursor: pointer;
// // // //   text-decoration: none;
// // // //   transition: background 0.12s;
// // // // }
// // // // .gp-d-btn:hover { background: #1e40af; }
// // // // `;


// // // import { useState, useMemo } from 'react';
// // // import KnowledgeGraph from './KnowledgeGraph';
// // // import GraphControls from './GraphControls';

// // // /**
// // //  * Default edge style palette used to render the legend line icons.
// // //  */
// // // const DEFAULT_EDGE_STYLES = {
// // //   'based-on':        { color: '#2563eb', width: 1.6, dash: null,  arrow: 'end' },
// // //   'requires':        { color: '#60a5fa', width: 1.3, dash: '5,3', arrow: 'end' },
// // //   'specializes':     { color: '#ea580c', width: 1.6, dash: '5,3', arrow: 'end' },
// // //   'proves':          { color: '#c2410c', width: 2.0, dash: null,  arrow: 'end' },
// // //   'precondition-of': { color: '#d97706', width: 1.4, dash: '2,2', arrow: 'end' },
// // //   'alternative-to':  { color: '#1e40af', width: 1.6, dash: '6,3', arrow: 'both' },
// // //   'inverse-of':      { color: '#1e3a8a', width: 2.0, dash: null,  arrow: 'both' },
// // //   'similar-to':      { color: '#9ca3af', width: 1.1, dash: null,  arrow: 'both' },
// // //   'contrasts-with':  { color: '#6b7280', width: 1.4, dash: '3,3', arrow: 'both' }
// // // };

// // // function edgeStyleFor(type, edgeTypes) {
// // //   const fromData = edgeTypes?.[type] || {};
// // //   const fromDefault = DEFAULT_EDGE_STYLES[type] || {};
// // //   return {
// // //     color: fromData.color || fromDefault.color || '#9ca3af',
// // //     width: fromData.width ?? fromDefault.width ?? 1.4,
// // //     dash:  fromData.dash  ?? fromDefault.dash  ?? null,
// // //     arrow: fromData.symmetric ? 'both' : (fromDefault.arrow || 'end'),
// // //     phrase: fromData.phrase || fromDefault.phrase || type.replace(/-/g, ' ')
// // //   };
// // // }

// // // /**
// // //  * SVG line-with-optional-arrow used in the legend.
// // //  */
// // // function EdgeIcon({ type, edgeTypes, width = 28, height = 12 }) {
// // //   const s = edgeStyleFor(type, edgeTypes);
// // //   const endMark = s.arrow === 'end' || s.arrow === 'both';
// // //   const startMark = s.arrow === 'both';
// // //   const uid = `lei-${type}`;
// // //   return (
// // //     <svg width={width} height={height} style={{ display: 'block' }}>
// // //       {endMark && (
// // //         <marker
// // //           id={`${uid}-end`}
// // //           viewBox="0 -3 6 6"
// // //           refX="5" refY="0"
// // //           markerWidth="5" markerHeight="5"
// // //           orient="auto"
// // //           markerUnits="userSpaceOnUse"
// // //         >
// // //           <path d="M0,-3L6,0L0,3" fill={s.color} />
// // //         </marker>
// // //       )}
// // //       {startMark && (
// // //         <marker
// // //           id={`${uid}-start`}
// // //           viewBox="0 -3 6 6"
// // //           refX="1" refY="0"
// // //           markerWidth="5" markerHeight="5"
// // //           orient="auto-start-reverse"
// // //           markerUnits="userSpaceOnUse"
// // //         >
// // //           <path d="M0,-3L6,0L0,3" fill={s.color} />
// // //         </marker>
// // //       )}
// // //       <line
// // //         x1={startMark ? 3 : 1}
// // //         y1={height / 2}
// // //         x2={endMark ? width - 3 : width - 1}
// // //         y2={height / 2}
// // //         stroke={s.color}
// // //         strokeWidth={s.width}
// // //         strokeDasharray={s.dash || undefined}
// // //         markerEnd={endMark ? `url(#${uid}-end)` : undefined}
// // //         markerStart={startMark ? `url(#${uid}-start)` : undefined}
// // //       />
// // //     </svg>
// // //   );
// // // }

// // // /**
// // //  * The header strip content. Renders CTA when nothing is hovered,
// // //  * node summary when a node is hovered, or edge summary when an edge is hovered.
// // //  */
// // // function HeaderStrip({ hovered, ctaText }) {
// // //   if (!hovered) {
// // //     return <div className="gp-strip-cta">{ctaText}</div>;
// // //   }
// // //   if (hovered.kind === 'node') {
// // //     const n = hovered.node;
// // //     return (
// // //       <div className="gp-strip-node">
// // //         <span className="gp-strip-label">{n.label || n.id}</span>
// // //         {n.type && <span className="gp-strip-chip">{n.type}</span>}
// // //         {n.domain && <span className="gp-strip-chip gp-strip-chip-gray">{n.domain}</span>}
// // //       </div>
// // //     );
// // //   }
// // //   if (hovered.kind === 'edge') {
// // //     const { source, target, phrase, edge } = hovered;
// // //     return (
// // //       <div className="gp-strip-edge">
// // //         <span className="gp-strip-endpoint">{source.label || source.id}</span>
// // //         <span className="gp-strip-phrase">{phrase}</span>
// // //         <span className="gp-strip-endpoint">{target.label || target.id}</span>
// // //         <span className="gp-strip-chip gp-strip-chip-edge">{edge.type}</span>
// // //       </div>
// // //     );
// // //   }
// // //   return null;
// // // }

// // // /**
// // //  * The passive edge-type legend. Non-interactive.
// // //  */
// // // function EdgeTypeLegend({ edgeTypes, counts }) {
// // //   const types = edgeTypes
// // //     ? Object.keys(edgeTypes)
// // //     : Object.keys(counts);
// // //   return (
// // //     <div className="gp-legend">
// // //       <div className="gp-legend-label">Edge types</div>
// // //       <div className="gp-legend-list">
// // //         {types.map((t) => (
// // //           <div key={t} className="gp-legend-item">
// // //             <EdgeIcon type={t} edgeTypes={edgeTypes} />
// // //             <span className="gp-legend-name">{t}</span>
// // //             <span className="gp-legend-count">{counts[t] || 0}</span>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // /**
// // //  * Render the details panel content for a selected node.
// // //  */
// // // function DetailsContent({ node, data, detailsFields, explorerUrlTemplate, onClose, showCloseButton }) {
// // //   if (!node) {
// // //     return <div className="gp-empty">Click a node</div>;
// // //   }

// // //   const { edges } = data;
// // //   const outgoing = edges.filter((e) => (typeof e.source === 'object' ? e.source.id : e.source) === node.id);
// // //   const incoming = edges.filter((e) => (typeof e.target === 'object' ? e.target.id : e.target) === node.id);

// // //   const nodeById = {};
// // //   data.nodes.forEach((n) => { nodeById[n.id] = n; });

// // //   const fieldRenderers = {
// // //     label: () => <div className="gp-d-title">{node.label || node.id}</div>,
// // //     type: () => node.type && <span className="gp-d-chip">{node.type}</span>,
// // //     domain: () => node.domain && <span className="gp-d-chip gp-d-chip-gray">{node.domain}</span>,
// // //     summary: () => node.summary && <p className="gp-d-desc">{node.summary}</p>,
// // //     id: () => <div className="gp-d-id">{node.id}</div>,
// // //     connections: () => {
// // //       const items = [];
// // //       outgoing.forEach((e, i) => {
// // //         const et = data.edgeTypes?.[e.type];
// // //         const symmetric = et?.symmetric;
// // //         const tid = typeof e.target === 'object' ? e.target.id : e.target;
// // //         const target = nodeById[tid];
// // //         items.push(
// // //           <li key={`out-${i}`} className="gp-d-conn-item">
// // //             <span className="gp-d-conn-dir">{symmetric ? '↔' : '→'}</span>
// // //             <span className="gp-d-conn-type">{e.type}</span>
// // //             <span className="gp-d-conn-name">{target?.label || tid}</span>
// // //           </li>
// // //         );
// // //       });
// // //       incoming.forEach((e, i) => {
// // //         const et = data.edgeTypes?.[e.type];
// // //         const symmetric = et?.symmetric;
// // //         if (symmetric) return;
// // //         const sid = typeof e.source === 'object' ? e.source.id : e.source;
// // //         const source = nodeById[sid];
// // //         items.push(
// // //           <li key={`in-${i}`} className="gp-d-conn-item gp-d-conn-in">
// // //             <span className="gp-d-conn-dir">←</span>
// // //             <span className="gp-d-conn-type">{e.type}</span>
// // //             <span className="gp-d-conn-name">{source?.label || sid}</span>
// // //           </li>
// // //         );
// // //       });
// // //       if (items.length === 0) return null;
// // //       return (
// // //         <div className="gp-d-section">
// // //           <div className="gp-d-section-label">Connections</div>
// // //           <ul className="gp-d-conn-list">{items}</ul>
// // //         </div>
// // //       );
// // //     },
// // //     explorerLink: () => {
// // //       if (!explorerUrlTemplate) return null;
// // //       const url = explorerUrlTemplate.replace('{id}', node.id);
// // //       return (
// // //         <div className="gp-d-actions">
// // //           <a className="gp-d-btn" href={url}>Open in explorer <span aria-hidden="true">&rarr;</span></a>
// // //         </div>
// // //       );
// // //     }
// // //   };

// // //   const hasLabel = detailsFields.includes('label');
// // //   const chipFields = detailsFields.filter((f) => f === 'type' || f === 'domain');
// // //   const otherFields = detailsFields.filter((f) => f !== 'type' && f !== 'domain' && f !== 'label');

// // //   return (
// // //     <div className="gp-details-content">
// // //       {showCloseButton && (
// // //         <button type="button" className="gp-close-btn" onClick={onClose} title="Close details">&times;</button>
// // //       )}
// // //       <div className="gp-d-header">
// // //         {hasLabel && fieldRenderers.label()}
// // //         {chipFields.length > 0 && (
// // //           <div className="gp-d-meta">
// // //             {chipFields.map((f) => (<span key={f}>{fieldRenderers[f]?.()}</span>))}
// // //           </div>
// // //         )}
// // //       </div>
// // //       {otherFields.map((f) => {
// // //         const rendered = fieldRenderers[f]?.();
// // //         if (!rendered) return null;
// // //         return <div key={f} className="gp-d-field">{rendered}</div>;
// // //       })}
// // //     </div>
// // //   );
// // // }

// // // /**
// // //  * GraphPanel v2 — composition. Header strip at top of graph area, legend overlay in bottom-right.
// // //  *
// // //  * Props are the same as v1 with these changes:
// // //  *   - tooltipFields removed (header strip renders with a fixed layout using label/type/domain)
// // //  *   - ctaText added (customizable CTA when nothing is hovered)
// // //  */
// // // export default function GraphPanel({
// // //   data,
// // //   nodeNoun,
// // //   axis1Label = 'Type',
// // //   axis2Label = 'Domain',
// // //   filterStyle: filterStyleProp = 'checkboxes',
// // //   detailsPlacement = 'A',
// // //   detailsFields = ['label', 'type', 'domain', 'summary', 'connections', 'explorerLink'],
// // //   explorerUrlTemplate = '/methods/{id}',
// // //   domainColors,
// // //   showFilterStyleSwitcher = false,
// // //   ctaText = 'Hover any node or edge to see what it represents'
// // // }) {
// // //   const initialFilters = useMemo(() => {
// // //     const domains = new Set(data.nodes.map((n) => n.domain).filter(Boolean));
// // //     const types = new Set(data.nodes.map((n) => n.type).filter(Boolean));
// // //     return { domains, types };
// // //   }, [data]);

// // //   const [filters, setFilters] = useState(initialFilters);
// // //   const [selectedNode, setSelectedNode] = useState(null);
// // //   const [filterStyle, setFilterStyle] = useState(filterStyleProp);
// // //   const [hovered, setHovered] = useState(null);

// // //   const nodeById = useMemo(() => {
// // //     const m = {};
// // //     data.nodes.forEach((n) => { m[n.id] = n; });
// // //     return m;
// // //   }, [data]);

// // //   const edgeCounts = useMemo(() => {
// // //     const counts = {};
// // //     data.edges.forEach((e) => { counts[e.type] = (counts[e.type] || 0) + 1; });
// // //     return counts;
// // //   }, [data]);

// // //   const handleFilterChange = (axis, value, isActive) => {
// // //     setFilters((prev) => {
// // //       const next = { ...prev };
// // //       const set = new Set(prev[axis]);
// // //       if (isActive) set.add(value);
// // //       else set.delete(value);
// // //       next[axis] = set;
// // //       return next;
// // //     });
// // //   };

// // //   const handleNodeSelect = (nodeId) => setSelectedNode(nodeId);
// // //   const handleBackgroundClick = () => setSelectedNode(null);
// // //   const clearSelection = () => setSelectedNode(null);

// // //   const selectedNodeObj = selectedNode ? nodeById[selectedNode] : null;
// // //   const showCloseButton = detailsPlacement === 'D' && selectedNodeObj;

// // //   const graphContent = (
// // //     <div className="gp-graph-area">
// // //       <div className="gp-header-strip">
// // //         <HeaderStrip hovered={hovered} ctaText={ctaText} />
// // //       </div>
// // //       <div className="gp-graph-content">
// // //         <KnowledgeGraph
// // //           data={data}
// // //           activeFilters={filters}
// // //           selectedNode={selectedNode}
// // //           onNodeSelect={handleNodeSelect}
// // //           onBackgroundClick={handleBackgroundClick}
// // //           onHover={setHovered}
// // //           domainColors={domainColors}
// // //         />
// // //       </div>
// // //     </div>
// // //   );

// // //   const legendPanel = (
// // //     <div className="gp-legend-panel">
// // //       <EdgeTypeLegend edgeTypes={data.edgeTypes} counts={edgeCounts} />
// // //     </div>
// // //   );

// // //   const controlsEl = (
// // //     <GraphControls
// // //       data={data}
// // //       filters={filters}
// // //       onFilterChange={handleFilterChange}
// // //       filterStyle={filterStyle}
// // //       nodeNoun={nodeNoun}
// // //       axis1Label={axis1Label}
// // //       axis2Label={axis2Label}
// // //       domainColors={domainColors}
// // //       filterStyleControls={
// // //         showFilterStyleSwitcher
// // //           ? { current: filterStyle, onChange: setFilterStyle }
// // //           : null
// // //       }
// // //     />
// // //   );

// // //   const detailsEl = (
// // //     <DetailsContent
// // //       node={selectedNodeObj}
// // //       data={data}
// // //       detailsFields={detailsFields}
// // //       explorerUrlTemplate={explorerUrlTemplate}
// // //       onClose={clearSelection}
// // //       showCloseButton={showCloseButton}
// // //     />
// // //   );

// // //   let content;
// // //   if (detailsPlacement === 'A') {
// // //     content = (
// // //       <div className="gp-frame gp-frame-A">
// // //         {legendPanel}
// // //         {graphContent}
// // //         <div className="gp-sidebar">
// // //           <div className="gp-sidebar-controls">{controlsEl}</div>
// // //           {selectedNodeObj && <div className="gp-sidebar-details">{detailsEl}</div>}
// // //         </div>
// // //       </div>
// // //     );
// // //   } else if (detailsPlacement === 'B') {
// // //     content = (
// // //       <div className="gp-frame gp-frame-B">
// // //         {legendPanel}
// // //         {graphContent}
// // //         <div className="gp-sidebar">{controlsEl}</div>
// // //         {selectedNodeObj && <div className="gp-strip-details">{detailsEl}</div>}
// // //       </div>
// // //     );
// // //   } else if (detailsPlacement === 'C') {
// // //     content = (
// // //       <div className="gp-frame gp-frame-C">
// // //         {legendPanel}
// // //         {graphContent}
// // //         <div className="gp-sidebar">{controlsEl}</div>
// // //         <div className={`gp-drawer ${selectedNodeObj ? 'gp-drawer-open' : ''}`}>
// // //           <button className="gp-drawer-close" onClick={clearSelection} title="Close">&times;</button>
// // //           {selectedNodeObj && detailsEl}
// // //         </div>
// // //       </div>
// // //     );
// // //   } else {
// // //     content = (
// // //       <div className="gp-frame gp-frame-D">
// // //         {legendPanel}
// // //         {graphContent}
// // //         <div className="gp-split-right">
// // //           <div className="gp-split-details">{detailsEl}</div>
// // //           <div className="gp-split-controls">{controlsEl}</div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="gp-container">
// // //       <style>{styles}</style>
// // //       {content}
// // //     </div>
// // //   );
// // // }

// // // const styles = `
// // // .gp-container {
// // //   width: 100%;
// // //   height: 100%;
// // //   min-height: 600px;
// // //   font-family: 'DM Sans', system-ui, sans-serif;
// // //   color: #0f172a;
// // //   background: #f8fafc;
// // //   box-sizing: border-box;
// // // }
// // // .gp-container *, .gp-container *::before, .gp-container *::after { box-sizing: border-box; }

// // // .gp-frame {
// // //   width: 100%;
// // //   height: 100%;
// // //   background: #ffffff;
// // //   border: 1px solid #e5e7eb;
// // //   overflow: hidden;
// // //   position: relative;
// // // }

// // // /* ==== Graph area (contains header strip + graph content) ==== */
// // // .gp-graph-area {
// // //   display: flex;
// // //   flex-direction: column;
// // //   min-height: 500px;
// // //   position: relative;
// // //   background: #ffffff;
// // // }
// // // .gp-header-strip {
// // //   height: 64px;
// // //   border-bottom: 1px solid #0f172a;
// // //   display: flex;
// // //   align-items: center;
// // //   padding: 0 22px;
// // //   background: #1f2937;
// // //   flex-shrink: 0;
// // // }
// // // .gp-graph-content {
// // //   flex: 1;
// // //   min-height: 0;
// // //   position: relative;
// // // }

// // // /* ==== Header strip content ==== */
// // // .gp-strip-cta {
// // //   width: 100%;
// // //   text-align: center;
// // //   font-family: 'JetBrains Mono', monospace;
// // //   font-size: 11px;
// // //   text-transform: uppercase;
// // //   letter-spacing: 0.1em;
// // //   color: #cbd5e1;
// // // }
// // // .gp-strip-node,
// // // .gp-strip-edge {
// // //   display: flex;
// // //   align-items: center;
// // //   gap: 12px;
// // //   width: 100%;
// // //   overflow: hidden;
// // // }
// // // .gp-strip-label {
// // //   font-family: 'Crimson Pro', Georgia, serif;
// // //   font-size: 20px;
// // //   font-weight: 500;
// // //   color: #ffffff;
// // //   line-height: 1.15;
// // //   white-space: nowrap;
// // //   overflow: hidden;
// // //   text-overflow: ellipsis;
// // //   flex-shrink: 1;
// // //   min-width: 0;
// // // }
// // // .gp-strip-endpoint {
// // //   font-family: 'Crimson Pro', Georgia, serif;
// // //   font-size: 17px;
// // //   font-weight: 500;
// // //   color: #ffffff;
// // //   line-height: 1.15;
// // //   white-space: nowrap;
// // //   overflow: hidden;
// // //   text-overflow: ellipsis;
// // //   min-width: 0;
// // //   flex-shrink: 1;
// // // }
// // // .gp-strip-phrase {
// // //   font-family: 'DM Sans', system-ui, sans-serif;
// // //   font-size: 13px;
// // //   font-style: italic;
// // //   color: #cbd5e1;
// // //   white-space: nowrap;
// // //   flex-shrink: 0;
// // // }
// // // .gp-strip-chip {
// // //   font-family: 'JetBrains Mono', monospace;
// // //   font-size: 9.5px;
// // //   font-weight: 600;
// // //   text-transform: uppercase;
// // //   letter-spacing: 0.08em;
// // //   padding: 4px 8px;
// // //   border-radius: 3px;
// // //   background: #dbeafe;
// // //   color: #1e40af;
// // //   white-space: nowrap;
// // //   flex-shrink: 0;
// // // }
// // // .gp-strip-chip-gray { background: #e5e7eb; color: #374151; }
// // // .gp-strip-chip-edge { background: #fed7aa; color: #7c2d12; }

// // // /* ==== Legend as LEFT PANEL ==== */
// // // .gp-legend-panel {
// // //   background: #f9fafb;
// // //   border-right: 1px solid #e5e7eb;
// // //   padding: 22px 16px;
// // //   overflow-y: auto;
// // //   min-height: 500px;
// // // }
// // // .gp-legend {
// // //   /* container inside the panel */
// // // }
// // // .gp-legend-label {
// // //   font-family: 'JetBrains Mono', monospace;
// // //   font-size: 9.5px;
// // //   font-weight: 600;
// // //   text-transform: uppercase;
// // //   letter-spacing: 0.09em;
// // //   color: #6b7280;
// // //   margin-bottom: 8px;
// // //   padding-bottom: 6px;
// // //   border-bottom: 1px solid #e5e7eb;
// // // }
// // // .gp-legend-list {
// // //   display: flex;
// // //   flex-direction: column;
// // //   gap: 5px;
// // // }
// // // .gp-legend-item {
// // //   display: grid;
// // //   grid-template-columns: 32px 1fr auto;
// // //   align-items: center;
// // //   gap: 8px;
// // //   font-size: 11.5px;
// // //   padding: 3px 4px;
// // //   border-radius: 3px;
// // // }
// // // .gp-legend-name {
// // //   font-family: 'DM Sans', system-ui, sans-serif;
// // //   color: #374151;
// // // }
// // // .gp-legend-count {
// // //   font-family: 'JetBrains Mono', monospace;
// // //   font-size: 10px;
// // //   color: #9ca3af;
// // // }

// // // /* ==== Placement layouts ==== */
// // // .gp-frame-A {
// // //   display: grid;
// // //   grid-template-columns: 200px 1fr 320px;
// // //   height: 100%;
// // // }
// // // .gp-frame-A .gp-graph-area { border-right: 1px solid #e5e7eb; }
// // // .gp-frame-A .gp-sidebar {
// // //   display: flex;
// // //   flex-direction: column;
// // //   min-height: 0;
// // //   overflow: hidden;
// // // }
// // // .gp-frame-A .gp-sidebar-controls { flex: 1; overflow-y: auto; }
// // // .gp-frame-A .gp-sidebar-details {
// // //   border-top: 1px solid #e5e7eb;
// // //   background: #eff6ff;
// // //   padding: 18px 18px;
// // //   max-height: 45%;
// // //   overflow-y: auto;
// // // }

// // // .gp-frame-B {
// // //   display: grid;
// // //   grid-template-columns: 200px 1fr 260px;
// // //   grid-template-rows: 1fr auto;
// // //   height: 100%;
// // // }
// // // .gp-frame-B .gp-legend-panel { grid-column: 1; grid-row: 1 / span 2; }
// // // .gp-frame-B .gp-graph-area { grid-column: 2; grid-row: 1; border-right: 1px solid #e5e7eb; }
// // // .gp-frame-B .gp-sidebar { grid-column: 3; grid-row: 1 / span 2; overflow-y: auto; }
// // // .gp-frame-B .gp-strip-details {
// // //   grid-column: 2; grid-row: 2;
// // //   padding: 18px 22px;
// // //   border-top: 1px solid #e5e7eb;
// // //   border-right: 1px solid #e5e7eb;
// // //   background: #eff6ff;
// // // }

// // // .gp-frame-C {
// // //   display: grid;
// // //   grid-template-columns: 200px 1fr 260px;
// // //   height: 100%;
// // //   position: relative;
// // // }
// // // .gp-frame-C .gp-graph-area { border-right: 1px solid #e5e7eb; }
// // // .gp-frame-C .gp-sidebar { overflow-y: auto; }
// // // .gp-frame-C .gp-drawer {
// // //   position: absolute;
// // //   top: 0; right: 260px; bottom: 0;
// // //   width: 340px;
// // //   background: #ffffff;
// // //   border-left: 1px solid #e5e7eb;
// // //   box-shadow: -8px 0 24px rgba(15, 23, 42, 0.06);
// // //   transform: translateX(100%);
// // //   transition: transform 0.25s ease;
// // //   z-index: 4;
// // //   overflow-y: auto;
// // //   padding: 18px 20px;
// // // }
// // // .gp-frame-C .gp-drawer.gp-drawer-open { transform: translateX(0); }
// // // .gp-frame-C .gp-drawer-close {
// // //   position: absolute;
// // //   top: 10px; right: 10px;
// // //   background: transparent;
// // //   border: none;
// // //   color: #6b7280;
// // //   font-size: 20px;
// // //   cursor: pointer;
// // //   padding: 4px 8px;
// // //   border-radius: 3px;
// // //   line-height: 1;
// // // }
// // // .gp-frame-C .gp-drawer-close:hover { background: #f3f4f6; color: #0f172a; }

// // // .gp-frame-D {
// // //   display: grid;
// // //   grid-template-columns: 200px 1fr 380px;
// // //   height: 100%;
// // // }
// // // .gp-frame-D .gp-graph-area { border-right: 1px solid #e5e7eb; }
// // // .gp-frame-D .gp-split-right {
// // //   display: flex;
// // //   flex-direction: column;
// // //   min-height: 0;
// // //   overflow: hidden;
// // // }
// // // .gp-frame-D .gp-split-details {
// // //   flex: 1;
// // //   overflow-y: auto;
// // //   padding: 22px 24px;
// // //   border-bottom: 1px solid #e5e7eb;
// // //   min-height: 200px;
// // //   position: relative;
// // // }
// // // .gp-frame-D .gp-split-controls { overflow-y: auto; max-height: 45%; }

// // // /* ==== Details content ==== */
// // // .gp-details-content { position: relative; }
// // // .gp-close-btn {
// // //   position: absolute;
// // //   top: -6px; right: -6px;
// // //   background: transparent;
// // //   border: none;
// // //   color: #6b7280;
// // //   font-size: 20px;
// // //   cursor: pointer;
// // //   padding: 4px 8px;
// // //   border-radius: 3px;
// // //   line-height: 1;
// // // }
// // // .gp-close-btn:hover { background: #f3f4f6; color: #0f172a; }

// // // .gp-empty {
// // //   color: #9ca3af;
// // //   font-family: 'JetBrains Mono', monospace;
// // //   font-size: 11px;
// // //   text-transform: uppercase;
// // //   letter-spacing: 0.09em;
// // //   padding: 20px 0;
// // //   text-align: center;
// // // }

// // // .gp-d-header { margin-bottom: 8px; }
// // // .gp-d-title {
// // //   font-family: 'Crimson Pro', Georgia, serif;
// // //   font-size: 20px;
// // //   font-weight: 500;
// // //   line-height: 1.2;
// // //   color: #0f172a;
// // //   margin: 0 0 6px;
// // // }
// // // .gp-d-meta {
// // //   display: flex;
// // //   gap: 5px;
// // //   flex-wrap: wrap;
// // //   margin-bottom: 4px;
// // // }
// // // .gp-d-chip {
// // //   font-family: 'JetBrains Mono', monospace;
// // //   font-size: 9.5px;
// // //   font-weight: 600;
// // //   text-transform: uppercase;
// // //   letter-spacing: 0.08em;
// // //   padding: 3px 8px;
// // //   border-radius: 3px;
// // //   background: #dbeafe;
// // //   color: #1e40af;
// // // }
// // // .gp-d-chip-gray { background: #f3f4f6; color: #374151; }
// // // .gp-d-desc {
// // //   font-size: 12.5px;
// // //   color: #475569;
// // //   line-height: 1.5;
// // //   margin: 8px 0 4px;
// // // }
// // // .gp-d-id {
// // //   font-family: 'JetBrains Mono', monospace;
// // //   font-size: 10.5px;
// // //   color: #6b7280;
// // //   margin: 4px 0;
// // // }
// // // .gp-d-section { margin-top: 10px; }
// // // .gp-d-section-label {
// // //   font-family: 'JetBrains Mono', monospace;
// // //   font-size: 9.5px;
// // //   font-weight: 600;
// // //   text-transform: uppercase;
// // //   letter-spacing: 0.09em;
// // //   color: #6b7280;
// // //   margin-bottom: 4px;
// // // }
// // // .gp-d-conn-list { list-style: none; padding: 0; margin: 0; }
// // // .gp-d-conn-item {
// // //   font-size: 12px;
// // //   color: #0f172a;
// // //   line-height: 1.4;
// // //   padding: 3px 0;
// // //   display: flex;
// // //   gap: 6px;
// // //   align-items: baseline;
// // // }
// // // .gp-d-conn-dir {
// // //   font-family: 'JetBrains Mono', monospace;
// // //   font-size: 11px;
// // //   color: #6b7280;
// // //   min-width: 12px;
// // // }
// // // .gp-d-conn-type {
// // //   font-family: 'JetBrains Mono', monospace;
// // //   font-size: 9.5px;
// // //   text-transform: uppercase;
// // //   letter-spacing: 0.06em;
// // //   color: #6b7280;
// // //   padding: 1px 5px;
// // //   background: #f3f4f6;
// // //   border-radius: 2px;
// // //   white-space: nowrap;
// // // }
// // // .gp-d-conn-name { flex: 1; }
// // // .gp-d-actions {
// // //   margin-top: 14px;
// // //   padding-top: 12px;
// // //   border-top: 1px solid #e5e7eb;
// // // }
// // // .gp-d-btn {
// // //   display: inline-flex;
// // //   align-items: center;
// // //   gap: 6px;
// // //   padding: 8px 14px;
// // //   background: #2563eb;
// // //   color: #ffffff;
// // //   border: none;
// // //   border-radius: 4px;
// // //   font-family: 'DM Sans', system-ui, sans-serif;
// // //   font-size: 12.5px;
// // //   font-weight: 500;
// // //   cursor: pointer;
// // //   text-decoration: none;
// // //   transition: background 0.12s;
// // // }
// // // .gp-d-btn:hover { background: #1e40af; }
// // // `;



// // import { useState, useMemo } from 'react';
// // import KnowledgeGraph from './KnowledgeGraph';
// // import GraphControls from './GraphControls';

// // /**
// //  * Default edge style palette used to render the legend line icons.
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

// // function edgeStyleFor(type, edgeTypes) {
// //   const fromData = edgeTypes?.[type] || {};
// //   const fromDefault = DEFAULT_EDGE_STYLES[type] || {};
// //   return {
// //     color: fromData.color || fromDefault.color || '#9ca3af',
// //     width: fromData.width ?? fromDefault.width ?? 1.4,
// //     dash:  fromData.dash  ?? fromDefault.dash  ?? null,
// //     arrow: fromData.symmetric ? 'both' : (fromDefault.arrow || 'end'),
// //     phrase: fromData.phrase || fromDefault.phrase || type.replace(/-/g, ' ')
// //   };
// // }

// // /**
// //  * SVG line-with-optional-arrow used in the legend.
// //  */
// // function EdgeIcon({ type, edgeTypes, width = 28, height = 12 }) {
// //   const s = edgeStyleFor(type, edgeTypes);
// //   const endMark = s.arrow === 'end' || s.arrow === 'both';
// //   const startMark = s.arrow === 'both';
// //   const uid = `lei-${type}`;
// //   return (
// //     <svg width={width} height={height} style={{ display: 'block' }}>
// //       {endMark && (
// //         <marker
// //           id={`${uid}-end`}
// //           viewBox="0 -3 6 6"
// //           refX="5" refY="0"
// //           markerWidth="5" markerHeight="5"
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
// //           refX="1" refY="0"
// //           markerWidth="5" markerHeight="5"
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

// // /**
// //  * The header strip content. Renders CTA when nothing is hovered,
// //  * node summary when a node is hovered, or edge summary when an edge is hovered.
// //  */
// // function HeaderStrip({ hovered, ctaText, focusedDomain }) {
// //   if (!hovered) {
// //     const defaultCta = focusedDomain
// //       ? `Exploring ${focusedDomain} — hover a node or edge for details`
// //       : (ctaText || 'Hover a domain to see it, click to explore');
// //     return <div className="gp-strip-cta">{defaultCta}</div>;
// //   }
// //   if (hovered.kind === 'domain') {
// //     return (
// //       <div className="gp-strip-node">
// //         <span className="gp-strip-label">{hovered.domain}</span>
// //         <span className="gp-strip-chip">{hovered.count} nodes</span>
// //         <span className="gp-strip-phrase">click to explore</span>
// //       </div>
// //     );
// //   }
// //   if (hovered.kind === 'node') {
// //     const n = hovered.node;
// //     return (
// //       <div className="gp-strip-node">
// //         <span className="gp-strip-label">{n.label || n.id}</span>
// //         {n.type && <span className="gp-strip-chip">{n.type}</span>}
// //         {n.domain && <span className="gp-strip-chip gp-strip-chip-gray">{n.domain}</span>}
// //       </div>
// //     );
// //   }
// //   if (hovered.kind === 'edge') {
// //     const { source, target, phrase, edge } = hovered;
// //     return (
// //       <div className="gp-strip-edge">
// //         <span className="gp-strip-endpoint">{source.label || source.id}</span>
// //         <span className="gp-strip-phrase">{phrase}</span>
// //         <span className="gp-strip-endpoint">{target.label || target.id}</span>
// //         <span className="gp-strip-chip gp-strip-chip-edge">{edge.type}</span>
// //       </div>
// //     );
// //   }
// //   return null;
// // }

// // /**
// //  * The passive edge-type legend. Non-interactive.
// //  */
// // function EdgeTypeLegend({ edgeTypes, counts }) {
// //   const types = edgeTypes
// //     ? Object.keys(edgeTypes)
// //     : Object.keys(counts);
// //   return (
// //     <div className="gp-legend">
// //       <div className="gp-legend-label">Edge types</div>
// //       <div className="gp-legend-list">
// //         {types.map((t) => (
// //           <div key={t} className="gp-legend-item">
// //             <EdgeIcon type={t} edgeTypes={edgeTypes} />
// //             <span className="gp-legend-name">{t}</span>
// //             <span className="gp-legend-count">{counts[t] || 0}</span>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // /**
// //  * Render the details panel content for a selected node.
// //  */
// // function DetailsContent({ node, data, detailsFields, explorerUrlTemplate, onClose, showCloseButton }) {
// //   if (!node) {
// //     return <div className="gp-empty">Click a node</div>;
// //   }

// //   const { edges } = data;
// //   const outgoing = edges.filter((e) => (typeof e.source === 'object' ? e.source.id : e.source) === node.id);
// //   const incoming = edges.filter((e) => (typeof e.target === 'object' ? e.target.id : e.target) === node.id);

// //   const nodeById = {};
// //   data.nodes.forEach((n) => { nodeById[n.id] = n; });

// //   const fieldRenderers = {
// //     label: () => <div className="gp-d-title">{node.label || node.id}</div>,
// //     type: () => node.type && <span className="gp-d-chip">{node.type}</span>,
// //     domain: () => node.domain && <span className="gp-d-chip gp-d-chip-gray">{node.domain}</span>,
// //     summary: () => node.summary && <p className="gp-d-desc">{node.summary}</p>,
// //     id: () => <div className="gp-d-id">{node.id}</div>,
// //     connections: () => {
// //       const items = [];
// //       outgoing.forEach((e, i) => {
// //         const et = data.edgeTypes?.[e.type];
// //         const symmetric = et?.symmetric;
// //         const tid = typeof e.target === 'object' ? e.target.id : e.target;
// //         const target = nodeById[tid];
// //         items.push(
// //           <li key={`out-${i}`} className="gp-d-conn-item">
// //             <span className="gp-d-conn-dir">{symmetric ? '↔' : '→'}</span>
// //             <span className="gp-d-conn-type">{e.type}</span>
// //             <span className="gp-d-conn-name">{target?.label || tid}</span>
// //           </li>
// //         );
// //       });
// //       incoming.forEach((e, i) => {
// //         const et = data.edgeTypes?.[e.type];
// //         const symmetric = et?.symmetric;
// //         if (symmetric) return;
// //         const sid = typeof e.source === 'object' ? e.source.id : e.source;
// //         const source = nodeById[sid];
// //         items.push(
// //           <li key={`in-${i}`} className="gp-d-conn-item gp-d-conn-in">
// //             <span className="gp-d-conn-dir">←</span>
// //             <span className="gp-d-conn-type">{e.type}</span>
// //             <span className="gp-d-conn-name">{source?.label || sid}</span>
// //           </li>
// //         );
// //       });
// //       if (items.length === 0) return null;
// //       return (
// //         <div className="gp-d-section">
// //           <div className="gp-d-section-label">Connections</div>
// //           <ul className="gp-d-conn-list">{items}</ul>
// //         </div>
// //       );
// //     },
// //     explorerLink: () => {
// //       if (!explorerUrlTemplate) return null;
// //       const url = explorerUrlTemplate.replace('{id}', node.id);
// //       return (
// //         <div className="gp-d-actions">
// //           <a className="gp-d-btn" href={url}>Open in explorer <span aria-hidden="true">&rarr;</span></a>
// //         </div>
// //       );
// //     }
// //   };

// //   const hasLabel = detailsFields.includes('label');
// //   const chipFields = detailsFields.filter((f) => f === 'type' || f === 'domain');
// //   const otherFields = detailsFields.filter((f) => f !== 'type' && f !== 'domain' && f !== 'label');

// //   return (
// //     <div className="gp-details-content">
// //       {showCloseButton && (
// //         <button type="button" className="gp-close-btn" onClick={onClose} title="Close details">&times;</button>
// //       )}
// //       <div className="gp-d-header">
// //         {hasLabel && fieldRenderers.label()}
// //         {chipFields.length > 0 && (
// //           <div className="gp-d-meta">
// //             {chipFields.map((f) => (<span key={f}>{fieldRenderers[f]?.()}</span>))}
// //           </div>
// //         )}
// //       </div>
// //       {otherFields.map((f) => {
// //         const rendered = fieldRenderers[f]?.();
// //         if (!rendered) return null;
// //         return <div key={f} className="gp-d-field">{rendered}</div>;
// //       })}
// //     </div>
// //   );
// // }

// // /**
// //  * GraphPanel v2 — composition. Header strip at top of graph area, legend overlay in bottom-right.
// //  *
// //  * Props are the same as v1 with these changes:
// //  *   - tooltipFields removed (header strip renders with a fixed layout using label/type/domain)
// //  *   - ctaText added (customizable CTA when nothing is hovered)
// //  */
// // export default function GraphPanel({
// //   data,
// //   nodeNoun,
// //   axis1Label = 'Type',
// //   axis2Label = 'Domain',
// //   filterStyle: filterStyleProp = 'checkboxes',
// //   detailsPlacement = 'A',
// //   detailsFields = ['label', 'type', 'domain', 'summary', 'connections', 'explorerLink'],
// //   explorerUrlTemplate = '/methods/{id}',
// //   domainColors,
// //   showFilterStyleSwitcher = false,
// //   ctaText = 'Hover any node or edge to see what it represents'
// // }) {
// //   const initialFilters = useMemo(() => {
// //     const types = new Set(data.nodes.map((n) => n.type).filter(Boolean));
// //     return { types };
// //   }, [data]);

// //   const [filters, setFilters] = useState(initialFilters);
// //   const [selectedNode, setSelectedNode] = useState(null);
// //   const [filterStyle, setFilterStyle] = useState(filterStyleProp);
// //   const [hovered, setHovered] = useState(null);
// //   const [focusedDomain, setFocusedDomain] = useState(null);

// //   const nodeById = useMemo(() => {
// //     const m = {};
// //     data.nodes.forEach((n) => { m[n.id] = n; });
// //     return m;
// //   }, [data]);

// //   const edgeCounts = useMemo(() => {
// //     const counts = {};
// //     data.edges.forEach((e) => { counts[e.type] = (counts[e.type] || 0) + 1; });
// //     return counts;
// //   }, [data]);

// //   const handleFilterChange = (axis, value, isActive) => {
// //     setFilters((prev) => {
// //       const next = { ...prev };
// //       const set = new Set(prev[axis]);
// //       if (isActive) set.add(value);
// //       else set.delete(value);
// //       next[axis] = set;
// //       return next;
// //     });
// //   };

// //   const handleNodeSelect = (nodeId) => setSelectedNode(nodeId);
// //   const handleBackgroundClick = () => setSelectedNode(null);
// //   const clearSelection = () => setSelectedNode(null);

// //   const selectedNodeObj = selectedNode ? nodeById[selectedNode] : null;
// //   const showCloseButton = detailsPlacement === 'D' && selectedNodeObj;

// //   const graphContent = (
// //     <div className="gp-graph-area">
// //       <div className="gp-header-strip">
// //         <HeaderStrip hovered={hovered} ctaText={ctaText} focusedDomain={focusedDomain} />
// //       </div>
// //       <div className="gp-graph-content">
// //         <KnowledgeGraph
// //           data={data}
// //           activeFilters={filters}
// //           selectedNode={selectedNode}
// //           onNodeSelect={handleNodeSelect}
// //           onBackgroundClick={handleBackgroundClick}
// //           onHover={setHovered}
// //           focusedDomain={focusedDomain}
// //           onDomainFocus={(d) => { setFocusedDomain(d); setSelectedNode(null); }}
// //           domainColors={domainColors}
// //         />
// //       </div>
// //     </div>
// //   );

// //   const legendPanel = (
// //     <div className="gp-legend-panel">
// //       <EdgeTypeLegend edgeTypes={data.edgeTypes} counts={edgeCounts} />
// //     </div>
// //   );

// //   const controlsEl = (
// //     <GraphControls
// //       data={data}
// //       filters={filters}
// //       onFilterChange={handleFilterChange}
// //       filterStyle={filterStyle}
// //       nodeNoun={nodeNoun}
// //       axis1Label={axis1Label}
// //       axis2Label={axis2Label}
// //       domainColors={domainColors}
// //       filterStyleControls={
// //         showFilterStyleSwitcher
// //           ? { current: filterStyle, onChange: setFilterStyle }
// //           : null
// //       }
// //     />
// //   );

// //   const detailsEl = (
// //     <DetailsContent
// //       node={selectedNodeObj}
// //       data={data}
// //       detailsFields={detailsFields}
// //       explorerUrlTemplate={explorerUrlTemplate}
// //       onClose={clearSelection}
// //       showCloseButton={showCloseButton}
// //     />
// //   );

// //   let content;
// //   if (detailsPlacement === 'A') {
// //     content = (
// //       <div className="gp-frame gp-frame-A">
// //         {legendPanel}
// //         {graphContent}
// //         <div className="gp-sidebar">
// //           <div className="gp-sidebar-controls">{controlsEl}</div>
// //           {selectedNodeObj && <div className="gp-sidebar-details">{detailsEl}</div>}
// //         </div>
// //       </div>
// //     );
// //   } else if (detailsPlacement === 'B') {
// //     content = (
// //       <div className="gp-frame gp-frame-B">
// //         {legendPanel}
// //         {graphContent}
// //         <div className="gp-sidebar">{controlsEl}</div>
// //         {selectedNodeObj && <div className="gp-strip-details">{detailsEl}</div>}
// //       </div>
// //     );
// //   } else if (detailsPlacement === 'C') {
// //     content = (
// //       <div className="gp-frame gp-frame-C">
// //         {legendPanel}
// //         {graphContent}
// //         <div className="gp-sidebar">{controlsEl}</div>
// //         <div className={`gp-drawer ${selectedNodeObj ? 'gp-drawer-open' : ''}`}>
// //           <button className="gp-drawer-close" onClick={clearSelection} title="Close">&times;</button>
// //           {selectedNodeObj && detailsEl}
// //         </div>
// //       </div>
// //     );
// //   } else {
// //     content = (
// //       <div className="gp-frame gp-frame-D">
// //         {legendPanel}
// //         {graphContent}
// //         <div className="gp-split-right">
// //           <div className="gp-split-details">{detailsEl}</div>
// //           <div className="gp-split-controls">{controlsEl}</div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="gp-container">
// //       <style>{styles}</style>
// //       {content}
// //     </div>
// //   );
// // }

// // const styles = `
// // .gp-container {
// //   width: 100%;
// //   height: 100%;
// //   min-height: 600px;
// //   font-family: 'DM Sans', system-ui, sans-serif;
// //   color: #0f172a;
// //   background: #f8fafc;
// //   box-sizing: border-box;
// // }
// // .gp-container *, .gp-container *::before, .gp-container *::after { box-sizing: border-box; }

// // .gp-frame {
// //   width: 100%;
// //   height: 100%;
// //   background: #ffffff;
// //   border: 1px solid #e5e7eb;
// //   overflow: hidden;
// //   position: relative;
// // }

// // /* ==== Graph area (contains header strip + graph content) ==== */
// // .gp-graph-area {
// //   display: flex;
// //   flex-direction: column;
// //   min-height: 500px;
// //   position: relative;
// //   background: #ffffff;
// // }
// // .gp-header-strip {
// //   height: 64px;
// //   border-bottom: 1px solid #0f172a;
// //   display: flex;
// //   align-items: center;
// //   padding: 0 22px;
// //   background: #1e3a8a;
// //   flex-shrink: 0;
// // }
// // .gp-graph-content {
// //   flex: 1;
// //   min-height: 0;
// //   position: relative;
// // }

// // /* ==== Header strip content ==== */
// // .gp-strip-cta {
// //   width: 100%;
// //   text-align: center;
// //   font-family: 'JetBrains Mono', monospace;
// //   font-size: 11px;
// //   text-transform: uppercase;
// //   letter-spacing: 0.1em;
// //   color: #cbd5e1;
// // }
// // .gp-strip-node,
// // .gp-strip-edge {
// //   display: flex;
// //   align-items: center;
// //   gap: 12px;
// //   width: 100%;
// //   overflow: hidden;
// // }
// // .gp-strip-label {
// //   font-family: 'Crimson Pro', Georgia, serif;
// //   font-size: 20px;
// //   font-weight: 500;
// //   color: #ffffff;
// //   line-height: 1.15;
// //   white-space: nowrap;
// //   overflow: hidden;
// //   text-overflow: ellipsis;
// //   flex-shrink: 1;
// //   min-width: 0;
// // }
// // .gp-strip-endpoint {
// //   font-family: 'Crimson Pro', Georgia, serif;
// //   font-size: 17px;
// //   font-weight: 500;
// //   color: #ffffff;
// //   line-height: 1.15;
// //   white-space: nowrap;
// //   overflow: hidden;
// //   text-overflow: ellipsis;
// //   min-width: 0;
// //   flex-shrink: 1;
// // }
// // .gp-strip-phrase {
// //   font-family: 'DM Sans', system-ui, sans-serif;
// //   font-size: 13px;
// //   font-style: italic;
// //   color: #cbd5e1;
// //   white-space: nowrap;
// //   flex-shrink: 0;
// // }
// // .gp-strip-chip {
// //   font-family: 'JetBrains Mono', monospace;
// //   font-size: 9.5px;
// //   font-weight: 600;
// //   text-transform: uppercase;
// //   letter-spacing: 0.08em;
// //   padding: 4px 8px;
// //   border-radius: 3px;
// //   background: #dbeafe;
// //   color: #1e40af;
// //   white-space: nowrap;
// //   flex-shrink: 0;
// // }
// // .gp-strip-chip-gray { background: #e5e7eb; color: #374151; }
// // .gp-strip-chip-edge { background: #fed7aa; color: #7c2d12; }

// // /* ==== Legend as LEFT PANEL ==== */
// // .gp-legend-panel {
// //   background: #f9fafb;
// //   border-right: 1px solid #e5e7eb;
// //   padding: 22px 16px;
// //   overflow-y: auto;
// //   min-height: 500px;
// // }
// // .gp-legend {
// //   /* container inside the panel */
// // }
// // .gp-legend-label {
// //   font-family: 'JetBrains Mono', monospace;
// //   font-size: 9.5px;
// //   font-weight: 600;
// //   text-transform: uppercase;
// //   letter-spacing: 0.09em;
// //   color: #6b7280;
// //   margin-bottom: 8px;
// //   padding-bottom: 6px;
// //   border-bottom: 1px solid #e5e7eb;
// // }
// // .gp-legend-list {
// //   display: flex;
// //   flex-direction: column;
// //   gap: 5px;
// // }
// // .gp-legend-item {
// //   display: grid;
// //   grid-template-columns: 32px 1fr auto;
// //   align-items: center;
// //   gap: 8px;
// //   font-size: 11.5px;
// //   padding: 3px 4px;
// //   border-radius: 3px;
// // }
// // .gp-legend-name {
// //   font-family: 'DM Sans', system-ui, sans-serif;
// //   color: #374151;
// // }
// // .gp-legend-count {
// //   font-family: 'JetBrains Mono', monospace;
// //   font-size: 10px;
// //   color: #9ca3af;
// // }

// // /* ==== Placement layouts ==== */
// // .gp-frame-A {
// //   display: grid;
// //   grid-template-columns: 200px 1fr 320px;
// //   height: 100%;
// // }
// // .gp-frame-A .gp-graph-area { border-right: 1px solid #e5e7eb; }
// // .gp-frame-A .gp-sidebar {
// //   display: flex;
// //   flex-direction: column;
// //   min-height: 0;
// //   overflow: hidden;
// // }
// // .gp-frame-A .gp-sidebar-controls { flex: 1; overflow-y: auto; }
// // .gp-frame-A .gp-sidebar-details {
// //   border-top: 1px solid #e5e7eb;
// //   background: #eff6ff;
// //   padding: 18px 18px;
// //   max-height: 45%;
// //   overflow-y: auto;
// // }

// // .gp-frame-B {
// //   display: grid;
// //   grid-template-columns: 200px 1fr 260px;
// //   grid-template-rows: 1fr auto;
// //   height: 100%;
// // }
// // .gp-frame-B .gp-legend-panel { grid-column: 1; grid-row: 1 / span 2; }
// // .gp-frame-B .gp-graph-area { grid-column: 2; grid-row: 1; border-right: 1px solid #e5e7eb; }
// // .gp-frame-B .gp-sidebar { grid-column: 3; grid-row: 1 / span 2; overflow-y: auto; }
// // .gp-frame-B .gp-strip-details {
// //   grid-column: 2; grid-row: 2;
// //   padding: 18px 22px;
// //   border-top: 1px solid #e5e7eb;
// //   border-right: 1px solid #e5e7eb;
// //   background: #eff6ff;
// // }

// // .gp-frame-C {
// //   display: grid;
// //   grid-template-columns: 200px 1fr 260px;
// //   height: 100%;
// //   position: relative;
// // }
// // .gp-frame-C .gp-graph-area { border-right: 1px solid #e5e7eb; }
// // .gp-frame-C .gp-sidebar { overflow-y: auto; }
// // .gp-frame-C .gp-drawer {
// //   position: absolute;
// //   top: 0; right: 260px; bottom: 0;
// //   width: 340px;
// //   background: #ffffff;
// //   border-left: 1px solid #e5e7eb;
// //   box-shadow: -8px 0 24px rgba(15, 23, 42, 0.06);
// //   transform: translateX(100%);
// //   transition: transform 0.25s ease;
// //   z-index: 4;
// //   overflow-y: auto;
// //   padding: 18px 20px;
// // }
// // .gp-frame-C .gp-drawer.gp-drawer-open { transform: translateX(0); }
// // .gp-frame-C .gp-drawer-close {
// //   position: absolute;
// //   top: 10px; right: 10px;
// //   background: transparent;
// //   border: none;
// //   color: #6b7280;
// //   font-size: 20px;
// //   cursor: pointer;
// //   padding: 4px 8px;
// //   border-radius: 3px;
// //   line-height: 1;
// // }
// // .gp-frame-C .gp-drawer-close:hover { background: #f3f4f6; color: #0f172a; }

// // .gp-frame-D {
// //   display: grid;
// //   grid-template-columns: 200px 1fr 380px;
// //   height: 100%;
// // }
// // .gp-frame-D .gp-graph-area { border-right: 1px solid #e5e7eb; }
// // .gp-frame-D .gp-split-right {
// //   display: flex;
// //   flex-direction: column;
// //   min-height: 0;
// //   overflow: hidden;
// // }
// // .gp-frame-D .gp-split-details {
// //   flex: 1;
// //   overflow-y: auto;
// //   padding: 22px 24px;
// //   border-bottom: 1px solid #e5e7eb;
// //   min-height: 200px;
// //   position: relative;
// // }
// // .gp-frame-D .gp-split-controls { overflow-y: auto; max-height: 45%; }

// // /* ==== Details content ==== */
// // .gp-details-content { position: relative; }
// // .gp-close-btn {
// //   position: absolute;
// //   top: -6px; right: -6px;
// //   background: transparent;
// //   border: none;
// //   color: #6b7280;
// //   font-size: 20px;
// //   cursor: pointer;
// //   padding: 4px 8px;
// //   border-radius: 3px;
// //   line-height: 1;
// // }
// // .gp-close-btn:hover { background: #f3f4f6; color: #0f172a; }

// // .gp-empty {
// //   color: #9ca3af;
// //   font-family: 'JetBrains Mono', monospace;
// //   font-size: 11px;
// //   text-transform: uppercase;
// //   letter-spacing: 0.09em;
// //   padding: 20px 0;
// //   text-align: center;
// // }

// // .gp-d-header { margin-bottom: 8px; }
// // .gp-d-title {
// //   font-family: 'Crimson Pro', Georgia, serif;
// //   font-size: 20px;
// //   font-weight: 500;
// //   line-height: 1.2;
// //   color: #0f172a;
// //   margin: 0 0 6px;
// // }
// // .gp-d-meta {
// //   display: flex;
// //   gap: 5px;
// //   flex-wrap: wrap;
// //   margin-bottom: 4px;
// // }
// // .gp-d-chip {
// //   font-family: 'JetBrains Mono', monospace;
// //   font-size: 9.5px;
// //   font-weight: 600;
// //   text-transform: uppercase;
// //   letter-spacing: 0.08em;
// //   padding: 3px 8px;
// //   border-radius: 3px;
// //   background: #dbeafe;
// //   color: #1e40af;
// // }
// // .gp-d-chip-gray { background: #f3f4f6; color: #374151; }
// // .gp-d-desc {
// //   font-size: 12.5px;
// //   color: #475569;
// //   line-height: 1.5;
// //   margin: 8px 0 4px;
// // }
// // .gp-d-id {
// //   font-family: 'JetBrains Mono', monospace;
// //   font-size: 10.5px;
// //   color: #6b7280;
// //   margin: 4px 0;
// // }
// // .gp-d-section { margin-top: 10px; }
// // .gp-d-section-label {
// //   font-family: 'JetBrains Mono', monospace;
// //   font-size: 9.5px;
// //   font-weight: 600;
// //   text-transform: uppercase;
// //   letter-spacing: 0.09em;
// //   color: #6b7280;
// //   margin-bottom: 4px;
// // }
// // .gp-d-conn-list { list-style: none; padding: 0; margin: 0; }
// // .gp-d-conn-item {
// //   font-size: 12px;
// //   color: #0f172a;
// //   line-height: 1.4;
// //   padding: 3px 0;
// //   display: flex;
// //   gap: 6px;
// //   align-items: baseline;
// // }
// // .gp-d-conn-dir {
// //   font-family: 'JetBrains Mono', monospace;
// //   font-size: 11px;
// //   color: #6b7280;
// //   min-width: 12px;
// // }
// // .gp-d-conn-type {
// //   font-family: 'JetBrains Mono', monospace;
// //   font-size: 9.5px;
// //   text-transform: uppercase;
// //   letter-spacing: 0.06em;
// //   color: #6b7280;
// //   padding: 1px 5px;
// //   background: #f3f4f6;
// //   border-radius: 2px;
// //   white-space: nowrap;
// // }
// // .gp-d-conn-name { flex: 1; }
// // .gp-d-actions {
// //   margin-top: 14px;
// //   padding-top: 12px;
// //   border-top: 1px solid #e5e7eb;
// // }
// // .gp-d-btn {
// //   display: inline-flex;
// //   align-items: center;
// //   gap: 6px;
// //   padding: 8px 14px;
// //   background: #2563eb;
// //   color: #ffffff;
// //   border: none;
// //   border-radius: 4px;
// //   font-family: 'DM Sans', system-ui, sans-serif;
// //   font-size: 12.5px;
// //   font-weight: 500;
// //   cursor: pointer;
// //   text-decoration: none;
// //   transition: background 0.12s;
// // }
// // .gp-d-btn:hover { background: #1e40af; }
// // `;


// import { useState, useMemo } from 'react';
// import KnowledgeGraph from './KnowledgeGraph';
// import GraphControls from './GraphControls';

// /**
//  * Default edge style palette used to render the legend line icons.
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

// function edgeStyleFor(type, edgeTypes) {
//   const fromData = edgeTypes?.[type] || {};
//   const fromDefault = DEFAULT_EDGE_STYLES[type] || {};
//   return {
//     color: fromData.color || fromDefault.color || '#9ca3af',
//     width: fromData.width ?? fromDefault.width ?? 1.4,
//     dash:  fromData.dash  ?? fromDefault.dash  ?? null,
//     arrow: fromData.symmetric ? 'both' : (fromDefault.arrow || 'end'),
//     phrase: fromData.phrase || fromDefault.phrase || type.replace(/-/g, ' ')
//   };
// }

// /**
//  * SVG line-with-optional-arrow used in the legend.
//  */
// function EdgeIcon({ type, edgeTypes, width = 28, height = 12 }) {
//   const s = edgeStyleFor(type, edgeTypes);
//   const endMark = s.arrow === 'end' || s.arrow === 'both';
//   const startMark = s.arrow === 'both';
//   const uid = `lei-${type}`;
//   return (
//     <svg width={width} height={height} style={{ display: 'block' }}>
//       {endMark && (
//         <marker
//           id={`${uid}-end`}
//           viewBox="0 -3 6 6"
//           refX="5" refY="0"
//           markerWidth="5" markerHeight="5"
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
//           refX="1" refY="0"
//           markerWidth="5" markerHeight="5"
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

// /**
//  * The header strip content. Renders CTA when nothing is hovered,
//  * node summary when a node is hovered, or edge summary when an edge is hovered.
//  */
// function HeaderStrip({ hovered, ctaText, focusedDomain }) {
//   if (!hovered) {
//     const defaultCta = focusedDomain
//       ? `Exploring ${focusedDomain} — hover a node or edge for details`
//       : (ctaText || 'Hover a domain to see it, click to explore');
//     return <div className="gp-strip-cta">{defaultCta}</div>;
//   }
//   if (hovered.kind === 'domain') {
//     return (
//       <div className="gp-strip-node">
//         <span className="gp-strip-label">{hovered.domain}</span>
//         <span className="gp-strip-chip">{hovered.count} nodes</span>
//         <span className="gp-strip-phrase">click to explore</span>
//       </div>
//     );
//   }
//   if (hovered.kind === 'node') {
//     const n = hovered.node;
//     return (
//       <div className="gp-strip-node">
//         <span className="gp-strip-label">{n.label || n.id}</span>
//         {n.type && <span className="gp-strip-chip">{n.type}</span>}
//         {n.domain && <span className="gp-strip-chip gp-strip-chip-gray">{n.domain}</span>}
//       </div>
//     );
//   }
//   if (hovered.kind === 'edge') {
//     const { source, target, phrase, edge } = hovered;
//     return (
//       <div className="gp-strip-edge">
//         <span className="gp-strip-endpoint">{source.label || source.id}</span>
//         <span className="gp-strip-phrase">{phrase}</span>
//         <span className="gp-strip-endpoint">{target.label || target.id}</span>
//         <span className="gp-strip-chip gp-strip-chip-edge">{edge.type}</span>
//       </div>
//     );
//   }
//   return null;
// }

// /**
//  * The passive edge-type legend. Non-interactive.
//  */
// function EdgeTypeLegend({ edgeTypes, counts }) {
//   const types = edgeTypes
//     ? Object.keys(edgeTypes)
//     : Object.keys(counts);
//   return (
//     <div className="gp-legend">
//       <div className="gp-legend-label">Edge types</div>
//       <div className="gp-legend-list">
//         {types.map((t) => (
//           <div key={t} className="gp-legend-item">
//             <EdgeIcon type={t} edgeTypes={edgeTypes} />
//             <span className="gp-legend-name">{t}</span>
//             <span className="gp-legend-count">{counts[t] || 0}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// /**
//  * Render the details panel content for a selected node.
//  */
// function DetailsContent({ node, data, detailsFields, explorerUrlTemplate, onClose, showCloseButton }) {
//   if (!node) {
//     return <div className="gp-empty">Click a node</div>;
//   }

//   const { edges } = data;
//   const outgoing = edges.filter((e) => (typeof e.source === 'object' ? e.source.id : e.source) === node.id);
//   const incoming = edges.filter((e) => (typeof e.target === 'object' ? e.target.id : e.target) === node.id);

//   const nodeById = {};
//   data.nodes.forEach((n) => { nodeById[n.id] = n; });

//   const fieldRenderers = {
//     label: () => <div className="gp-d-title">{node.label || node.id}</div>,
//     type: () => node.type && <span className="gp-d-chip">{node.type}</span>,
//     domain: () => node.domain && <span className="gp-d-chip gp-d-chip-gray">{node.domain}</span>,
//     summary: () => node.summary && <p className="gp-d-desc">{node.summary}</p>,
//     id: () => <div className="gp-d-id">{node.id}</div>,
//     connections: () => {
//       const items = [];
//       outgoing.forEach((e, i) => {
//         const et = data.edgeTypes?.[e.type];
//         const symmetric = et?.symmetric;
//         const tid = typeof e.target === 'object' ? e.target.id : e.target;
//         const target = nodeById[tid];
//         items.push(
//           <li key={`out-${i}`} className="gp-d-conn-item">
//             <span className="gp-d-conn-dir">{symmetric ? '↔' : '→'}</span>
//             <span className="gp-d-conn-type">{e.type}</span>
//             <span className="gp-d-conn-name">{target?.label || tid}</span>
//           </li>
//         );
//       });
//       incoming.forEach((e, i) => {
//         const et = data.edgeTypes?.[e.type];
//         const symmetric = et?.symmetric;
//         if (symmetric) return;
//         const sid = typeof e.source === 'object' ? e.source.id : e.source;
//         const source = nodeById[sid];
//         items.push(
//           <li key={`in-${i}`} className="gp-d-conn-item gp-d-conn-in">
//             <span className="gp-d-conn-dir">←</span>
//             <span className="gp-d-conn-type">{e.type}</span>
//             <span className="gp-d-conn-name">{source?.label || sid}</span>
//           </li>
//         );
//       });
//       if (items.length === 0) return null;
//       return (
//         <div className="gp-d-section">
//           <div className="gp-d-section-label">Connections</div>
//           <ul className="gp-d-conn-list">{items}</ul>
//         </div>
//       );
//     },
//     explorerLink: () => {
//       if (!explorerUrlTemplate) return null;
//       const url = explorerUrlTemplate.replace('{id}', node.id);
//       return (
//         <div className="gp-d-actions">
//           <a className="gp-d-btn" href={url}>Open in explorer <span aria-hidden="true">&rarr;</span></a>
//         </div>
//       );
//     }
//   };

//   const hasLabel = detailsFields.includes('label');
//   const chipFields = detailsFields.filter((f) => f === 'type' || f === 'domain');
//   const otherFields = detailsFields.filter((f) => f !== 'type' && f !== 'domain' && f !== 'label');

//   return (
//     <div className="gp-details-content">
//       {showCloseButton && (
//         <button type="button" className="gp-close-btn" onClick={onClose} title="Close details">&times;</button>
//       )}
//       <div className="gp-d-header">
//         {hasLabel && fieldRenderers.label()}
//         {chipFields.length > 0 && (
//           <div className="gp-d-meta">
//             {chipFields.map((f) => (<span key={f}>{fieldRenderers[f]?.()}</span>))}
//           </div>
//         )}
//       </div>
//       {otherFields.map((f) => {
//         const rendered = fieldRenderers[f]?.();
//         if (!rendered) return null;
//         return <div key={f} className="gp-d-field">{rendered}</div>;
//       })}
//     </div>
//   );
// }

// /**
//  * GraphPanel v2 — composition. Header strip at top of graph area, legend overlay in bottom-right.
//  *
//  * Props are the same as v1 with these changes:
//  *   - tooltipFields removed (header strip renders with a fixed layout using label/type/domain)
//  *   - ctaText added (customizable CTA when nothing is hovered)
//  */
// export default function GraphPanel({
//   data,
//   nodeNoun,
//   axis1Label = 'Type',
//   axis2Label = 'Domain',
//   filterStyle: filterStyleProp = 'checkboxes',
//   detailsPlacement = 'A',
//   detailsFields = ['label', 'type', 'domain', 'summary', 'connections', 'explorerLink'],
//   explorerUrlTemplate = '/methods/{id}',
//   domainColors,
//   showFilterStyleSwitcher = false,
//   ctaText = 'Hover any node or edge to see what it represents'
// }) {
//   const initialFilters = useMemo(() => {
//     const types = new Set(data.nodes.map((n) => n.type).filter(Boolean));
//     return { types };
//   }, [data]);

//   const [filters, setFilters] = useState(initialFilters);
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [filterStyle, setFilterStyle] = useState(filterStyleProp);
//   const [hovered, setHovered] = useState(null);
//   const [focusedDomain, setFocusedDomain] = useState(null);

//   const nodeById = useMemo(() => {
//     const m = {};
//     data.nodes.forEach((n) => { m[n.id] = n; });
//     return m;
//   }, [data]);

//   const edgeCounts = useMemo(() => {
//     const counts = {};
//     data.edges.forEach((e) => { counts[e.type] = (counts[e.type] || 0) + 1; });
//     return counts;
//   }, [data]);

//   const handleFilterChange = (axis, value, isActive) => {
//     setFilters((prev) => {
//       const next = { ...prev };
//       const set = new Set(prev[axis]);
//       if (isActive) set.add(value);
//       else set.delete(value);
//       next[axis] = set;
//       return next;
//     });
//   };

//   const handleNodeSelect = (nodeId) => setSelectedNode(nodeId);
//   const handleBackgroundClick = () => setSelectedNode(null);
//   const clearSelection = () => setSelectedNode(null);

//   const selectedNodeObj = selectedNode ? nodeById[selectedNode] : null;
//   const showCloseButton = detailsPlacement === 'D' && selectedNodeObj;

//   const graphContent = (
//     <div className="gp-graph-area">
//       <div className="gp-header-strip">
//         <HeaderStrip hovered={hovered} ctaText={ctaText} focusedDomain={focusedDomain} />
//       </div>
//       <div className="gp-graph-content">
//         <KnowledgeGraph
//           data={data}
//           activeFilters={filters}
//           selectedNode={selectedNode}
//           onNodeSelect={handleNodeSelect}
//           onBackgroundClick={handleBackgroundClick}
//           onHover={setHovered}
//           focusedDomain={focusedDomain}
//           onDomainFocus={(d) => { setFocusedDomain(d); setSelectedNode(null); }}
//           domainColors={domainColors}
//         />
//       </div>
//     </div>
//   );

//   const legendPanel = (
//     <div className="gp-legend-panel">
//       <EdgeTypeLegend edgeTypes={data.edgeTypes} counts={edgeCounts} />
//     </div>
//   );

//   const controlsEl = (
//     <GraphControls
//       data={data}
//       filters={filters}
//       onFilterChange={handleFilterChange}
//       filterStyle={filterStyle}
//       nodeNoun={nodeNoun}
//       axis1Label={axis1Label}
//       axis2Label={axis2Label}
//       domainColors={domainColors}
//       filterStyleControls={
//         showFilterStyleSwitcher
//           ? { current: filterStyle, onChange: setFilterStyle }
//           : null
//       }
//     />
//   );

//   const detailsEl = (
//     <DetailsContent
//       node={selectedNodeObj}
//       data={data}
//       detailsFields={detailsFields}
//       explorerUrlTemplate={explorerUrlTemplate}
//       onClose={clearSelection}
//       showCloseButton={showCloseButton}
//     />
//   );

//   let content;
//   if (detailsPlacement === 'A') {
//     content = (
//       <div className="gp-frame gp-frame-A">
//         {legendPanel}
//         {graphContent}
//         <div className="gp-sidebar">
//           <div className="gp-sidebar-controls">{controlsEl}</div>
//           {selectedNodeObj && <div className="gp-sidebar-details">{detailsEl}</div>}
//         </div>
//       </div>
//     );
//   } else if (detailsPlacement === 'B') {
//     content = (
//       <div className="gp-frame gp-frame-B">
//         {legendPanel}
//         {graphContent}
//         <div className="gp-sidebar">{controlsEl}</div>
//         {selectedNodeObj && <div className="gp-strip-details">{detailsEl}</div>}
//       </div>
//     );
//   } else if (detailsPlacement === 'C') {
//     content = (
//       <div className="gp-frame gp-frame-C">
//         {legendPanel}
//         {graphContent}
//         <div className="gp-sidebar">{controlsEl}</div>
//         <div className={`gp-drawer ${selectedNodeObj ? 'gp-drawer-open' : ''}`}>
//           <button className="gp-drawer-close" onClick={clearSelection} title="Close">&times;</button>
//           {selectedNodeObj && detailsEl}
//         </div>
//       </div>
//     );
//   } else {
//     content = (
//       <div className="gp-frame gp-frame-D">
//         {legendPanel}
//         {graphContent}
//         <div className="gp-split-right">
//           <div className="gp-split-details">{detailsEl}</div>
//           <div className="gp-split-controls">{controlsEl}</div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="gp-container">
//       <style>{styles}</style>
//       {content}
//     </div>
//   );
// }

// const styles = `
// .gp-container {
//   width: 100%;
//   height: 100%;
//   font-family: 'DM Sans', system-ui, sans-serif;
//   color: #0f172a;
//   background: #f8fafc;
//   box-sizing: border-box;
// }
// .gp-container *, .gp-container *::before, .gp-container *::after { box-sizing: border-box; }

// .gp-frame {
//   width: 100%;
//   height: 100%;
//   background: #ffffff;
//   border: 1px solid #e5e7eb;
//   overflow: hidden;
//   position: relative;
// }

// /* ==== Graph area (contains header strip + graph content) ==== */
// .gp-graph-area {
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   background: #ffffff;
//   min-height: 0;
//   min-width: 0;
// }
// .gp-header-strip {
//   height: 64px;
//   border-bottom: 1px solid #0f172a;
//   display: flex;
//   align-items: center;
//   padding: 0 22px;
//   background: #1e3a8a;
//   flex-shrink: 0;
// }
// .gp-graph-content {
//   flex: 1;
//   min-height: 0;
//   position: relative;
// }

// /* ==== Header strip content ==== */
// .gp-strip-cta {
//   width: 100%;
//   text-align: center;
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 11px;
//   text-transform: uppercase;
//   letter-spacing: 0.1em;
//   color: #cbd5e1;
// }
// .gp-strip-node,
// .gp-strip-edge {
//   display: flex;
//   align-items: center;
//   gap: 12px;
//   width: 100%;
//   overflow: hidden;
// }
// .gp-strip-label {
//   font-family: 'Crimson Pro', Georgia, serif;
//   font-size: 20px;
//   font-weight: 500;
//   color: #ffffff;
//   line-height: 1.15;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   flex-shrink: 1;
//   min-width: 0;
// }
// .gp-strip-endpoint {
//   font-family: 'Crimson Pro', Georgia, serif;
//   font-size: 17px;
//   font-weight: 500;
//   color: #ffffff;
//   line-height: 1.15;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   min-width: 0;
//   flex-shrink: 1;
// }
// .gp-strip-phrase {
//   font-family: 'DM Sans', system-ui, sans-serif;
//   font-size: 13px;
//   font-style: italic;
//   color: #cbd5e1;
//   white-space: nowrap;
//   flex-shrink: 0;
// }
// .gp-strip-chip {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 9.5px;
//   font-weight: 600;
//   text-transform: uppercase;
//   letter-spacing: 0.08em;
//   padding: 4px 8px;
//   border-radius: 3px;
//   background: #dbeafe;
//   color: #1e40af;
//   white-space: nowrap;
//   flex-shrink: 0;
// }
// .gp-strip-chip-gray { background: #e5e7eb; color: #374151; }
// .gp-strip-chip-edge { background: #fed7aa; color: #7c2d12; }

// /* ==== Legend as LEFT PANEL ==== */
// .gp-legend-panel {
//   background: #f9fafb;
//   border-right: 1px solid #e5e7eb;
//   padding: 22px 16px;
//   overflow-y: auto;
//   min-height: 0;
// }
// .gp-legend {
//   /* container inside the panel */
// }
// .gp-legend-label {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 9.5px;
//   font-weight: 600;
//   text-transform: uppercase;
//   letter-spacing: 0.09em;
//   color: #6b7280;
//   margin-bottom: 8px;
//   padding-bottom: 6px;
//   border-bottom: 1px solid #e5e7eb;
// }
// .gp-legend-list {
//   display: flex;
//   flex-direction: column;
//   gap: 5px;
// }
// .gp-legend-item {
//   display: grid;
//   grid-template-columns: 32px 1fr auto;
//   align-items: center;
//   gap: 8px;
//   font-size: 11.5px;
//   padding: 3px 4px;
//   border-radius: 3px;
// }
// .gp-legend-name {
//   font-family: 'DM Sans', system-ui, sans-serif;
//   color: #374151;
// }
// .gp-legend-count {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 10px;
//   color: #9ca3af;
// }

// /* ==== Placement layouts ==== */
// .gp-frame-A {
//   display: grid;
//   grid-template-columns: 200px 1fr 320px;
//   height: 100%;
// }
// .gp-frame-A .gp-graph-area { border-right: 1px solid #e5e7eb; }
// .gp-frame-A .gp-sidebar {
//   display: flex;
//   flex-direction: column;
//   min-height: 0;
//   overflow: hidden;
// }
// .gp-frame-A .gp-sidebar-controls { flex: 1; overflow-y: auto; }
// .gp-frame-A .gp-sidebar-details {
//   border-top: 1px solid #e5e7eb;
//   background: #eff6ff;
//   padding: 18px 18px;
//   max-height: 45%;
//   overflow-y: auto;
// }

// .gp-frame-B {
//   display: grid;
//   grid-template-columns: 200px 1fr 260px;
//   grid-template-rows: 1fr auto;
//   height: 100%;
// }
// .gp-frame-B .gp-legend-panel { grid-column: 1; grid-row: 1 / span 2; }
// .gp-frame-B .gp-graph-area { grid-column: 2; grid-row: 1; border-right: 1px solid #e5e7eb; }
// .gp-frame-B .gp-sidebar { grid-column: 3; grid-row: 1 / span 2; overflow-y: auto; }
// .gp-frame-B .gp-strip-details {
//   grid-column: 2; grid-row: 2;
//   padding: 18px 22px;
//   border-top: 1px solid #e5e7eb;
//   border-right: 1px solid #e5e7eb;
//   background: #eff6ff;
// }

// .gp-frame-C {
//   display: grid;
//   grid-template-columns: 200px 1fr 260px;
//   height: 100%;
//   position: relative;
// }
// .gp-frame-C .gp-graph-area { border-right: 1px solid #e5e7eb; }
// .gp-frame-C .gp-sidebar { overflow-y: auto; }
// .gp-frame-C .gp-drawer {
//   position: absolute;
//   top: 0; right: 260px; bottom: 0;
//   width: 340px;
//   background: #ffffff;
//   border-left: 1px solid #e5e7eb;
//   box-shadow: -8px 0 24px rgba(15, 23, 42, 0.06);
//   transform: translateX(100%);
//   transition: transform 0.25s ease;
//   z-index: 4;
//   overflow-y: auto;
//   padding: 18px 20px;
// }
// .gp-frame-C .gp-drawer.gp-drawer-open { transform: translateX(0); }
// .gp-frame-C .gp-drawer-close {
//   position: absolute;
//   top: 10px; right: 10px;
//   background: transparent;
//   border: none;
//   color: #6b7280;
//   font-size: 20px;
//   cursor: pointer;
//   padding: 4px 8px;
//   border-radius: 3px;
//   line-height: 1;
// }
// .gp-frame-C .gp-drawer-close:hover { background: #f3f4f6; color: #0f172a; }

// .gp-frame-D {
//   display: grid;
//   grid-template-columns: 200px 1fr 380px;
//   height: 100%;
// }
// .gp-frame-D .gp-graph-area { border-right: 1px solid #e5e7eb; }
// .gp-frame-D .gp-split-right {
//   display: flex;
//   flex-direction: column;
//   min-height: 0;
//   overflow: hidden;
// }
// .gp-frame-D .gp-split-details {
//   flex: 1;
//   overflow-y: auto;
//   padding: 22px 24px;
//   border-bottom: 1px solid #e5e7eb;
//   min-height: 200px;
//   position: relative;
// }
// .gp-frame-D .gp-split-controls { overflow-y: auto; max-height: 45%; }

// /* ==== Details content ==== */
// .gp-details-content { position: relative; }
// .gp-close-btn {
//   position: absolute;
//   top: -6px; right: -6px;
//   background: transparent;
//   border: none;
//   color: #6b7280;
//   font-size: 20px;
//   cursor: pointer;
//   padding: 4px 8px;
//   border-radius: 3px;
//   line-height: 1;
// }
// .gp-close-btn:hover { background: #f3f4f6; color: #0f172a; }

// .gp-empty {
//   color: #9ca3af;
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 11px;
//   text-transform: uppercase;
//   letter-spacing: 0.09em;
//   padding: 20px 0;
//   text-align: center;
// }

// .gp-d-header { margin-bottom: 8px; }
// .gp-d-title {
//   font-family: 'Crimson Pro', Georgia, serif;
//   font-size: 20px;
//   font-weight: 500;
//   line-height: 1.2;
//   color: #0f172a;
//   margin: 0 0 6px;
// }
// .gp-d-meta {
//   display: flex;
//   gap: 5px;
//   flex-wrap: wrap;
//   margin-bottom: 4px;
// }
// .gp-d-chip {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 9.5px;
//   font-weight: 600;
//   text-transform: uppercase;
//   letter-spacing: 0.08em;
//   padding: 3px 8px;
//   border-radius: 3px;
//   background: #dbeafe;
//   color: #1e40af;
// }
// .gp-d-chip-gray { background: #f3f4f6; color: #374151; }
// .gp-d-desc {
//   font-size: 12.5px;
//   color: #475569;
//   line-height: 1.5;
//   margin: 8px 0 4px;
// }
// .gp-d-id {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 10.5px;
//   color: #6b7280;
//   margin: 4px 0;
// }
// .gp-d-section { margin-top: 10px; }
// .gp-d-section-label {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 9.5px;
//   font-weight: 600;
//   text-transform: uppercase;
//   letter-spacing: 0.09em;
//   color: #6b7280;
//   margin-bottom: 4px;
// }
// .gp-d-conn-list { list-style: none; padding: 0; margin: 0; }
// .gp-d-conn-item {
//   font-size: 12px;
//   color: #0f172a;
//   line-height: 1.4;
//   padding: 3px 0;
//   display: flex;
//   gap: 6px;
//   align-items: baseline;
// }
// .gp-d-conn-dir {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 11px;
//   color: #6b7280;
//   min-width: 12px;
// }
// .gp-d-conn-type {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 9.5px;
//   text-transform: uppercase;
//   letter-spacing: 0.06em;
//   color: #6b7280;
//   padding: 1px 5px;
//   background: #f3f4f6;
//   border-radius: 2px;
//   white-space: nowrap;
// }
// .gp-d-conn-name { flex: 1; }
// .gp-d-actions {
//   margin-top: 14px;
//   padding-top: 12px;
//   border-top: 1px solid #e5e7eb;
// }
// .gp-d-btn {
//   display: inline-flex;
//   align-items: center;
//   gap: 6px;
//   padding: 8px 14px;
//   background: #2563eb;
//   color: #ffffff;
//   border: none;
//   border-radius: 4px;
//   font-family: 'DM Sans', system-ui, sans-serif;
//   font-size: 12.5px;
//   font-weight: 500;
//   cursor: pointer;
//   text-decoration: none;
//   transition: background 0.12s;
// }
// .gp-d-btn:hover { background: #1e40af; }
// `;


import { useState, useMemo } from 'react';
import KnowledgeGraph from './KnowledgeGraph';
import GraphControls from './GraphControls';

/**
 * Default edge style palette used to render the legend line icons.
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

function edgeStyleFor(type, edgeTypes) {
  const fromData = edgeTypes?.[type] || {};
  const fromDefault = DEFAULT_EDGE_STYLES[type] || {};
  return {
    color: fromData.color || fromDefault.color || '#9ca3af',
    width: fromData.width ?? fromDefault.width ?? 1.4,
    dash:  fromData.dash  ?? fromDefault.dash  ?? null,
    arrow: fromData.symmetric ? 'both' : (fromDefault.arrow || 'end'),
    phrase: fromData.phrase || fromDefault.phrase || type.replace(/-/g, ' ')
  };
}

/**
 * SVG line-with-optional-arrow used in the legend.
 */
function EdgeIcon({ type, edgeTypes, width = 28, height = 12 }) {
  const s = edgeStyleFor(type, edgeTypes);
  const endMark = s.arrow === 'end' || s.arrow === 'both';
  const startMark = s.arrow === 'both';
  const uid = `lei-${type}`;
  return (
    <svg width={width} height={height} style={{ display: 'block' }}>
      {endMark && (
        <marker
          id={`${uid}-end`}
          viewBox="0 -3 6 6"
          refX="5" refY="0"
          markerWidth="5" markerHeight="5"
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
          refX="1" refY="0"
          markerWidth="5" markerHeight="5"
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

/**
 * The header strip content. Renders CTA when nothing is hovered,
 * node summary when a node is hovered, or edge summary when an edge is hovered.
 */
function HeaderStrip({ hovered, ctaText, focusedDomain }) {
  if (!hovered) {
    const defaultCta = focusedDomain
      ? `Exploring ${focusedDomain} — hover a node or edge for details`
      : (ctaText || 'Hover a domain to see it, click to explore');
    return <div className="gp-strip-cta">{defaultCta}</div>;
  }
  if (hovered.kind === 'domain') {
    return (
      <div className="gp-strip-node">
        <span className="gp-strip-label">{hovered.domain}</span>
        <span className="gp-strip-chip">{hovered.count} nodes</span>
        <span className="gp-strip-phrase">click to explore</span>
      </div>
    );
  }
  if (hovered.kind === 'node') {
    const n = hovered.node;
    return (
      <div className="gp-strip-node">
        <span className="gp-strip-label">{n.label || n.id}</span>
        {n.type && <span className="gp-strip-chip">{n.type}</span>}
        {n.domain && <span className="gp-strip-chip gp-strip-chip-gray">{n.domain}</span>}
      </div>
    );
  }
  if (hovered.kind === 'edge') {
    const { source, target, phrase, edge } = hovered;
    return (
      <div className="gp-strip-edge">
        <span className="gp-strip-endpoint">{source.label || source.id}</span>
        <span className="gp-strip-phrase">{phrase}</span>
        <span className="gp-strip-endpoint">{target.label || target.id}</span>
        <span className="gp-strip-chip gp-strip-chip-edge">{edge.type}</span>
      </div>
    );
  }
  return null;
}

/**
 * The passive edge-type legend. Non-interactive.
 */
function EdgeTypeLegend({ edgeTypes, counts }) {
  const types = edgeTypes
    ? Object.keys(edgeTypes)
    : Object.keys(counts);
  return (
    <div className="gp-legend">
      <div className="gp-legend-label">Edge types</div>
      <div className="gp-legend-list">
        {types.map((t) => (
          <div key={t} className="gp-legend-item">
            <EdgeIcon type={t} edgeTypes={edgeTypes} />
            <span className="gp-legend-name">{t}</span>
            <span className="gp-legend-count">{counts[t] || 0}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Render the details panel content for a selected node.
 *
 * v3 NOTE: this function is preserved but no longer rendered anywhere in the
 * component tree. The KnowledgeGraph renders its own details card inside the
 * canvas. Kept here in case something external still imports it.
 */
function DetailsContent({ node, data, detailsFields, explorerUrlTemplate, onClose, showCloseButton }) {
  if (!node) {
    return <div className="gp-empty">Click a node</div>;
  }

  const { edges } = data;
  const outgoing = edges.filter((e) => (typeof e.source === 'object' ? e.source.id : e.source) === node.id);
  const incoming = edges.filter((e) => (typeof e.target === 'object' ? e.target.id : e.target) === node.id);

  const nodeById = {};
  data.nodes.forEach((n) => { nodeById[n.id] = n; });

  const fieldRenderers = {
    label: () => <div className="gp-d-title">{node.label || node.id}</div>,
    type: () => node.type && <span className="gp-d-chip">{node.type}</span>,
    domain: () => node.domain && <span className="gp-d-chip gp-d-chip-gray">{node.domain}</span>,
    summary: () => node.summary && <p className="gp-d-desc">{node.summary}</p>,
    id: () => <div className="gp-d-id">{node.id}</div>,
    connections: () => {
      const items = [];
      outgoing.forEach((e, i) => {
        const et = data.edgeTypes?.[e.type];
        const symmetric = et?.symmetric;
        const tid = typeof e.target === 'object' ? e.target.id : e.target;
        const target = nodeById[tid];
        items.push(
          <li key={`out-${i}`} className="gp-d-conn-item">
            <span className="gp-d-conn-dir">{symmetric ? '↔' : '→'}</span>
            <span className="gp-d-conn-type">{e.type}</span>
            <span className="gp-d-conn-name">{target?.label || tid}</span>
          </li>
        );
      });
      incoming.forEach((e, i) => {
        const et = data.edgeTypes?.[e.type];
        const symmetric = et?.symmetric;
        if (symmetric) return;
        const sid = typeof e.source === 'object' ? e.source.id : e.source;
        const source = nodeById[sid];
        items.push(
          <li key={`in-${i}`} className="gp-d-conn-item gp-d-conn-in">
            <span className="gp-d-conn-dir">←</span>
            <span className="gp-d-conn-type">{e.type}</span>
            <span className="gp-d-conn-name">{source?.label || sid}</span>
          </li>
        );
      });
      if (items.length === 0) return null;
      return (
        <div className="gp-d-section">
          <div className="gp-d-section-label">Connections</div>
          <ul className="gp-d-conn-list">{items}</ul>
        </div>
      );
    },
    explorerLink: () => {
      if (!explorerUrlTemplate) return null;
      const url = explorerUrlTemplate.replace('{id}', node.id);
      return (
        <div className="gp-d-actions">
          <a className="gp-d-btn" href={url}>Open in explorer <span aria-hidden="true">&rarr;</span></a>
        </div>
      );
    }
  };

  const hasLabel = detailsFields.includes('label');
  const chipFields = detailsFields.filter((f) => f === 'type' || f === 'domain');
  const otherFields = detailsFields.filter((f) => f !== 'type' && f !== 'domain' && f !== 'label');

  return (
    <div className="gp-details-content">
      {showCloseButton && (
        <button type="button" className="gp-close-btn" onClick={onClose} title="Close details">&times;</button>
      )}
      <div className="gp-d-header">
        {hasLabel && fieldRenderers.label()}
        {chipFields.length > 0 && (
          <div className="gp-d-meta">
            {chipFields.map((f) => (<span key={f}>{fieldRenderers[f]?.()}</span>))}
          </div>
        )}
      </div>
      {otherFields.map((f) => {
        const rendered = fieldRenderers[f]?.();
        if (!rendered) return null;
        return <div key={f} className="gp-d-field">{rendered}</div>;
      })}
    </div>
  );
}

/**
 * GraphPanel v3 — surgical.
 *
 * ONLY change vs v1: the four `detailsEl` render sites (in placements A/B/C/D)
 * no longer render. The `DetailsContent` function, all props, all CSS, all
 * placement layouts are otherwise untouched.
 *
 * Also passes `explorerHref` + `formulaRenderer` through to KnowledgeGraph so
 * the graph's internal card gets the URL template and (optional) math renderer.
 */
export default function GraphPanel({
  data,
  nodeNoun,
  axis1Label = 'Type',
  axis2Label = 'Domain',
  filterStyle: filterStyleProp = 'checkboxes',
  detailsPlacement = 'A',
  detailsFields = ['label', 'type', 'domain', 'summary', 'connections', 'explorerLink'],
  explorerUrlTemplate = '/methods/{id}',
  formulaRenderer,
  domainColors,
  showFilterStyleSwitcher = false,
  ctaText = 'Hover any node or edge to see what it represents'
}) {
  const initialFilters = useMemo(() => {
    const types = new Set(data.nodes.map((n) => n.type).filter(Boolean));
    return { types };
  }, [data]);

  const [filters, setFilters] = useState(initialFilters);
  const [selectedNode, setSelectedNode] = useState(null);
  const [filterStyle, setFilterStyle] = useState(filterStyleProp);
  const [hovered, setHovered] = useState(null);
  const [focusedDomain, setFocusedDomain] = useState(null);

  const nodeById = useMemo(() => {
    const m = {};
    data.nodes.forEach((n) => { m[n.id] = n; });
    return m;
  }, [data]);

  const edgeCounts = useMemo(() => {
    const counts = {};
    data.edges.forEach((e) => { counts[e.type] = (counts[e.type] || 0) + 1; });
    return counts;
  }, [data]);

  const handleFilterChange = (axis, value, isActive) => {
    setFilters((prev) => {
      const next = { ...prev };
      const set = new Set(prev[axis]);
      if (isActive) set.add(value);
      else set.delete(value);
      next[axis] = set;
      return next;
    });
  };

  const handleNodeSelect = (nodeId) => setSelectedNode(nodeId);
  const handleBackgroundClick = () => setSelectedNode(null);

  const graphContent = (
    <div className="gp-graph-area">
      <div className="gp-header-strip">
        <HeaderStrip hovered={hovered} ctaText={ctaText} focusedDomain={focusedDomain} />
      </div>
      <div className="gp-graph-content">
        <KnowledgeGraph
          data={data}
          activeFilters={filters}
          selectedNode={selectedNode}
          onNodeSelect={handleNodeSelect}
          onBackgroundClick={handleBackgroundClick}
          onHover={setHovered}
          focusedDomain={focusedDomain}
          onDomainFocus={(d) => { setFocusedDomain(d); setSelectedNode(null); }}
          domainColors={domainColors}
          explorerHref={explorerUrlTemplate}
          formulaRenderer={formulaRenderer}
        />
      </div>
    </div>
  );

  const legendPanel = (
    <div className="gp-legend-panel">
      <EdgeTypeLegend edgeTypes={data.edgeTypes} counts={edgeCounts} />
    </div>
  );

  const controlsEl = (
    <GraphControls
      data={data}
      filters={filters}
      onFilterChange={handleFilterChange}
      filterStyle={filterStyle}
      nodeNoun={nodeNoun}
      axis1Label={axis1Label}
      axis2Label={axis2Label}
      domainColors={domainColors}
      filterStyleControls={
        showFilterStyleSwitcher
          ? { current: filterStyle, onChange: setFilterStyle }
          : null
      }
    />
  );

  let content;
  if (detailsPlacement === 'A') {
    content = (
      <div className="gp-frame gp-frame-A">
        {legendPanel}
        {graphContent}
        <div className="gp-sidebar">
          <div className="gp-sidebar-controls">{controlsEl}</div>
        </div>
      </div>
    );
  } else if (detailsPlacement === 'B') {
    content = (
      <div className="gp-frame gp-frame-B">
        {legendPanel}
        {graphContent}
        <div className="gp-sidebar">{controlsEl}</div>
      </div>
    );
  } else if (detailsPlacement === 'C') {
    content = (
      <div className="gp-frame gp-frame-C">
        {legendPanel}
        {graphContent}
        <div className="gp-sidebar">{controlsEl}</div>
      </div>
    );
  } else {
    content = (
      <div className="gp-frame gp-frame-D">
        {legendPanel}
        {graphContent}
        <div className="gp-split-right">
          <div className="gp-split-controls">{controlsEl}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="gp-container">
      <style>{styles}</style>
      {content}
    </div>
  );
}

const styles = `
.gp-container {
  width: 100%;
  height: 100%;
  font-family: 'DM Sans', system-ui, sans-serif;
  color: #0f172a;
  background: #f8fafc;
  box-sizing: border-box;
}
.gp-container *, .gp-container *::before, .gp-container *::after { box-sizing: border-box; }

.gp-frame {
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  position: relative;
}

/* ==== Graph area (contains header strip + graph content) ==== */
.gp-graph-area {
  display: flex;
  flex-direction: column;
  position: relative;
  background: #ffffff;
  min-height: 0;
  min-width: 0;
}
.gp-header-strip {
  height: 64px;
  border-bottom: 1px solid #0f172a;
  display: flex;
  align-items: center;
  padding: 0 22px;
  background: #1e3a8a;
  flex-shrink: 0;
}
.gp-graph-content {
  flex: 1;
  min-height: 0;
  position: relative;
}

/* ==== Header strip content ==== */
.gp-strip-cta {
  width: 100%;
  text-align: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #cbd5e1;
}
.gp-strip-node,
.gp-strip-edge {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  overflow: hidden;
}
.gp-strip-label {
  font-family: 'Crimson Pro', Georgia, serif;
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  line-height: 1.15;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 1;
  min-width: 0;
}
.gp-strip-endpoint {
  font-family: 'Crimson Pro', Georgia, serif;
  font-size: 17px;
  font-weight: 500;
  color: #ffffff;
  line-height: 1.15;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex-shrink: 1;
}
.gp-strip-phrase {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 13px;
  font-style: italic;
  color: #cbd5e1;
  white-space: nowrap;
  flex-shrink: 0;
}
.gp-strip-chip {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 4px 8px;
  border-radius: 3px;
  background: #dbeafe;
  color: #1e40af;
  white-space: nowrap;
  flex-shrink: 0;
}
.gp-strip-chip-gray { background: #e5e7eb; color: #374151; }
.gp-strip-chip-edge { background: #fed7aa; color: #7c2d12; }

/* ==== Legend as LEFT PANEL ==== */
.gp-legend-panel {
  background: #f9fafb;
  border-right: 1px solid #e5e7eb;
  padding: 22px 16px;
  overflow-y: auto;
  min-height: 0;
}
.gp-legend {
  /* container inside the panel */
}
.gp-legend-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: #6b7280;
  margin-bottom: 8px;
  padding-bottom: 6px;
  border-bottom: 1px solid #e5e7eb;
}
.gp-legend-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.gp-legend-item {
  display: grid;
  grid-template-columns: 32px 1fr auto;
  align-items: center;
  gap: 8px;
  font-size: 11.5px;
  padding: 3px 4px;
  border-radius: 3px;
}
.gp-legend-name {
  font-family: 'DM Sans', system-ui, sans-serif;
  color: #374151;
}
.gp-legend-count {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: #9ca3af;
}

/* ==== Placement layouts ==== */
.gp-frame-A {
  display: grid;
  grid-template-columns: 200px 1fr 320px;
  height: 100%;
}
.gp-frame-A .gp-graph-area { border-right: 1px solid #e5e7eb; }
.gp-frame-A .gp-sidebar {
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
}
.gp-frame-A .gp-sidebar-controls { flex: 1; overflow-y: auto; }

.gp-frame-B {
  display: grid;
  grid-template-columns: 200px 1fr 260px;
  height: 100%;
}
.gp-frame-B .gp-legend-panel { grid-column: 1; }
.gp-frame-B .gp-graph-area { grid-column: 2; border-right: 1px solid #e5e7eb; }
.gp-frame-B .gp-sidebar { grid-column: 3; overflow-y: auto; }

.gp-frame-C {
  display: grid;
  grid-template-columns: 200px 1fr 260px;
  height: 100%;
  position: relative;
}
.gp-frame-C .gp-graph-area { border-right: 1px solid #e5e7eb; }
.gp-frame-C .gp-sidebar { overflow-y: auto; }

.gp-frame-D {
  display: grid;
  grid-template-columns: 200px 1fr 380px;
  height: 100%;
}
.gp-frame-D .gp-graph-area { border-right: 1px solid #e5e7eb; }
.gp-frame-D .gp-split-right {
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
}
.gp-frame-D .gp-split-controls { overflow-y: auto; }

/* ==== Details content ==== */
.gp-details-content { position: relative; }
.gp-close-btn {
  position: absolute;
  top: -6px; right: -6px;
  background: transparent;
  border: none;
  color: #6b7280;
  font-size: 20px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 3px;
  line-height: 1;
}
.gp-close-btn:hover { background: #f3f4f6; color: #0f172a; }

.gp-empty {
  color: #9ca3af;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  padding: 20px 0;
  text-align: center;
}

.gp-d-header { margin-bottom: 8px; }
.gp-d-title {
  font-family: 'Crimson Pro', Georgia, serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  color: #0f172a;
  margin: 0 0 6px;
}
.gp-d-meta {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  margin-bottom: 4px;
}
.gp-d-chip {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 3px 8px;
  border-radius: 3px;
  background: #dbeafe;
  color: #1e40af;
}
.gp-d-chip-gray { background: #f3f4f6; color: #374151; }
.gp-d-desc {
  font-size: 12.5px;
  color: #475569;
  line-height: 1.5;
  margin: 8px 0 4px;
}
.gp-d-id {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  color: #6b7280;
  margin: 4px 0;
}
.gp-d-section { margin-top: 10px; }
.gp-d-section-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: #6b7280;
  margin-bottom: 4px;
}
.gp-d-conn-list { list-style: none; padding: 0; margin: 0; }
.gp-d-conn-item {
  font-size: 12px;
  color: #0f172a;
  line-height: 1.4;
  padding: 3px 0;
  display: flex;
  gap: 6px;
  align-items: baseline;
}
.gp-d-conn-dir {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: #6b7280;
  min-width: 12px;
}
.gp-d-conn-type {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9.5px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #6b7280;
  padding: 1px 5px;
  background: #f3f4f6;
  border-radius: 2px;
  white-space: nowrap;
}
.gp-d-conn-name { flex: 1; }
.gp-d-actions {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid #e5e7eb;
}
.gp-d-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: #2563eb;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 12.5px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.12s;
}
.gp-d-btn:hover { background: #1e40af; }
`;