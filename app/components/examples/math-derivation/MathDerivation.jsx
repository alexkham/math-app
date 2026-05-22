// // import { useState, useMemo, useCallback } from "react";
// // import { processContent } from "../../../utils/contentProcessor";

// // /* ─── reference badge colors ─── */
// // const REF_COLORS = {
// //   theorem:    { bg: "#EEEDFE", color: "#3C3489" },
// //   axiom:      { bg: "#F1EFE8", color: "#444441" },
// //   lemma:      { bg: "#FBEAF0", color: "#72243E" },
// //   identity:   { bg: "#E1F5EE", color: "#085041" },
// //   property:   { bg: "#E6F1FB", color: "#0C447C" },
// //   definition: { bg: "#FAEEDA", color: "#633806" },
// //   step:       { bg: "#F1F5F9", color: "#334155" },
// //   cite:       { bg: "#F1F5F9", color: "#64748B" },
// // };

// // /* ─── tag colors ─── */
// // const TAG_COLORS = {
// //   given:      { bg: "#F1F5F9", color: "#475569" },
// //   goal:       { bg: "#DBEAFE", color: "#1E40AF" },
// //   key:        { bg: "#FEF3C7", color: "#92400E" },
// //   routine:    { bg: "transparent", color: "#94A3B8", border: "1px solid #CBD5E1" },
// //   assumption: { bg: "#FBEAF0", color: "#72243E" },
// //   conclusion: { bg: "#D1FAE5", color: "#065F46" },
// // };

// // /* ─── passage bar colors ─── */
// // const PASSAGE_BAR = {
// //   recall:      "#AFA9EC",
// //   motivation:  "#85B7EB",
// //   remark:      "#B4B2A9",
// //   warning:     "#F09595",
// //   intuition:   "#5DCAA5",
// //   alternative: "#FCD34D",
// //   transition:  "#ED93B1",
// // };

// // const PASSAGE_BADGE = {
// //   recall:      { bg: "#EEEDFE", color: "#3C3489" },
// //   motivation:  { bg: "#E6F1FB", color: "#0C447C" },
// //   remark:      { bg: "#F1EFE8", color: "#444441" },
// //   warning:     { bg: "#FCEBEB", color: "#791F1F" },
// //   intuition:   { bg: "#E1F5EE", color: "#085041" },
// //   alternative: { bg: "#FAEEDA", color: "#633806" },
// //   transition:  { bg: "#FBEAF0", color: "#72243E" },
// // };

// // /* ─── styles ─── */
// // const S = {
// //   wrap: {
// //     maxWidth: 640,
// //     fontFamily: "'DM Sans', sans-serif",
// //   },
// //   wrapCompact: {
// //     maxWidth: 640,
// //     fontFamily: "'DM Sans', sans-serif",
// //     fontSize: 13,
// //   },

// //   /* prerequisites */
// //   prereq: {
// //     display: "flex",
// //     flexWrap: "wrap",
// //     gap: 6,
// //     alignItems: "center",
// //     padding: "8px 12px",
// //     marginBottom: 8,
// //     background: "#F8FAFC",
// //     borderRadius: 8,
// //   },
// //   prereqLabel: {
// //     fontSize: 11,
// //     color: "#94A3B8",
// //     marginRight: 4,
// //   },

// //   /* step card */
// //   step: {
// //     padding: "10px 14px",
// //     background: "#FFFFFF",
// //     border: "0.5px solid #E2E8F0",
// //     borderRadius: 8,
// //     margin: "4px 0",
// //   },
// //   stepTop: {
// //     display: "flex",
// //     flexWrap: "wrap",
// //     alignItems: "baseline",
// //     gap: "6px 12px",
// //   },
// //   stepNum: {
// //     fontSize: 11,
// //     fontWeight: 500,
// //     color: "#94A3B8",
// //     minWidth: 20,
// //     textAlign: "right",
// //     flexShrink: 0,
// //   },
// //   expr: {
// //     fontFamily: "'JetBrains Mono', monospace",
// //     fontSize: 15,
// //     color: "#1E293B",
// //     lineHeight: 1.6,
// //     padding: "2px 0",
// //   },
// //   operation: {
// //     fontSize: 12,
// //     color: "#64748B",
// //     fontStyle: "italic",
// //   },

// //   /* tag */
// //   tag: (type) => {
// //     const c = TAG_COLORS[type] || TAG_COLORS.routine;
// //     return {
// //       fontSize: 10,
// //       fontWeight: 500,
// //       padding: "2px 8px",
// //       borderRadius: 4,
// //       background: c.bg,
// //       color: c.color,
// //       border: c.border || "none",
// //       whiteSpace: "nowrap",
// //     };
// //   },

// //   /* note */
// //   note: {
// //     fontSize: 11,
// //     color: "#92400E",
// //     background: "#FEF3C7",
// //     padding: "2px 8px",
// //     borderRadius: 4,
// //     marginLeft: "auto",
// //   },

// //   /* basedOn badge */
// //   refBadge: (type, hasLink) => {
// //     const c = REF_COLORS[type] || REF_COLORS.cite;
// //     return {
// //       display: "inline-flex",
// //       alignItems: "center",
// //       gap: 4,
// //       fontSize: 11,
// //       padding: "3px 10px",
// //       borderRadius: 99,
// //       background: c.bg,
// //       color: c.color,
// //       textDecoration: hasLink ? "underline" : "none",
// //       textDecorationStyle: "dotted",
// //       textUnderlineOffset: 2,
// //       cursor: hasLink ? "pointer" : "default",
// //       whiteSpace: "nowrap",
// //     };
// //   },

// //   /* basedOn row */
// //   basedOnRow: {
// //     display: "flex",
// //     flexWrap: "wrap",
// //     gap: 4,
// //     width: "100%",
// //     marginTop: 4,
// //   },

// //   /* back-reference */
// //   backRef: {
// //     fontSize: 11,
// //     color: "#94A3B8",
// //   },

// //   /* cite */
// //   citeStyle: {
// //     fontSize: 11,
// //     color: "#64748B",
// //     fontStyle: "italic",
// //     background: "#F8FAFC",
// //     padding: "3px 10px",
// //     borderRadius: 4,
// //   },

// //   /* highlight */
// //   highlight: {
// //     color: "#185FA5",
// //     fontWeight: 500,
// //     background: "#E6F1FB",
// //     padding: "0 3px",
// //     borderRadius: 2,
// //   },

// //   /* accordion toggle */
// //   accToggle: {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: 6,
// //     padding: "4px 0",
// //     cursor: "pointer",
// //     background: "none",
// //     border: "none",
// //     fontFamily: "'DM Sans', sans-serif",
// //     fontSize: 12,
// //     color: "#3B82F6",
// //     marginTop: 4,
// //   },

// //   /* accordion content */
// //   accContent: (open) => ({
// //     overflow: "hidden",
// //     maxHeight: open ? 400 : 0,
// //     transition: "max-height 0.3s ease",
// //   }),

// //   /* detail inner */
// //   detailInner: {
// //     padding: "6px 0 4px",
// //     fontSize: 13,
// //     color: "#64748B",
// //     lineHeight: 1.6,
// //   },

// //   /* substeps */
// //   subLine: {
// //     display: "flex",
// //     gap: 8,
// //     padding: "3px 0",
// //     fontFamily: "'JetBrains Mono', monospace",
// //     fontSize: 12,
// //     color: "#64748B",
// //   },
// //   subLabel: {
// //     fontSize: 11,
// //     color: "#94A3B8",
// //     fontStyle: "italic",
// //     fontFamily: "'DM Sans', sans-serif",
// //     minWidth: 36,
// //   },

// //   /* group wrapper */
// //   group: {
// //     margin: "6px 0",
// //     padding: "8px 12px",
// //     borderLeft: "3px solid #93C5FD",
// //     background: "#EFF6FF",
// //     borderRadius: 0,
// //   },
// //   groupLabel: {
// //     fontSize: 11,
// //     fontWeight: 500,
// //     color: "#3B82F6",
// //     letterSpacing: "0.03em",
// //     marginBottom: 6,
// //   },

// //   /* passage */
// //   passageBar: (type) => ({
// //     margin: "2px 0",
// //     padding: "8px 14px",
// //     display: "flex",
// //     gap: 8,
// //     alignItems: "flex-start",
// //     borderLeft: `3px solid ${PASSAGE_BAR[type] || "#B4B2A9"}`,
// //     borderRadius: 0,
// //   }),
// //   passageIndent: {
// //     margin: "2px 0 2px 34px",
// //     padding: "8px 12px",
// //     background: "#F8FAFC",
// //     borderRadius: 8,
// //     display: "flex",
// //     flexDirection: "column",
// //     gap: 6,
// //   },
// //   passageBand: {
// //     margin: 0,
// //     padding: "8px 14px 8px 42px",
// //     display: "flex",
// //     flexDirection: "column",
// //     gap: 6,
// //     background: "#F8FAFC",
// //     borderTop: "0.5px solid #E2E8F0",
// //     borderBottom: "0.5px solid #E2E8F0",
// //   },
// //   passageBubble: {
// //     margin: "4px 0 4px 42px",
// //     padding: "8px 12px",
// //     background: "#F8FAFC",
// //     borderRadius: 8,
// //     display: "flex",
// //     flexDirection: "column",
// //     gap: 6,
// //     maxWidth: "85%",
// //   },
// //   passageInline: {
// //     margin: "2px 0",
// //     padding: "4px 14px 4px 42px",
// //     display: "flex",
// //     gap: 8,
// //     alignItems: "center",
// //   },
// //   passageDashed: {
// //     margin: "4px 14px",
// //     padding: "8px 12px",
// //     border: "0.5px dashed #CBD5E1",
// //     borderRadius: 8,
// //     display: "flex",
// //     flexDirection: "column",
// //     gap: 6,
// //   },
// //   passageBadge: (type) => {
// //     const c = PASSAGE_BADGE[type] || PASSAGE_BADGE.remark;
// //     return {
// //       fontSize: 10,
// //       fontWeight: 500,
// //       padding: "2px 8px",
// //       borderRadius: 4,
// //       background: c.bg,
// //       color: c.color,
// //       whiteSpace: "nowrap",
// //       flexShrink: 0,
// //       marginTop: 1,
// //     };
// //   },
// //   passageText: {
// //     fontSize: 13,
// //     color: "#64748B",
// //     lineHeight: 1.5,
// //     fontStyle: "italic",
// //   },

// //   /* result row */
// //   result: {
// //     background: "#EFF6FF",
// //     border: "0.5px solid #93C5FD",
// //     borderRadius: 8,
// //     padding: "12px 14px",
// //     margin: "4px 0",
// //   },
// //   resultExpr: {
// //     fontFamily: "'JetBrains Mono', monospace",
// //     fontSize: 16,
// //     fontWeight: 500,
// //     color: "#1E293B",
// //   },
// //   qed: {
// //     fontSize: 12,
// //     fontWeight: 500,
// //     color: "#3B82F6",
// //     marginLeft: "auto",
// //   },

// //   /* conclusion */
// //   conclusion: {
// //     padding: "10px 14px",
// //     border: "0.5px solid #93C5FD",
// //     borderRadius: 8,
// //     fontSize: 13,
// //     color: "#64748B",
// //     lineHeight: 1.5,
// //     marginTop: 6,
// //   },

// //   /* rail variant dot connector */
// //   conn: {
// //     display: "flex",
// //     justifyContent: "center",
// //     height: 16,
// //     position: "relative",
// //   },
// //   connRail: {
// //     position: "absolute",
// //     left: 23,
// //     top: 0,
// //     bottom: 0,
// //     width: 2,
// //     background: "#E2E8F0",
// //   },
// //   connDot: {
// //     width: 6,
// //     height: 6,
// //     borderRadius: "50%",
// //     background: "#CBD5E1",
// //     alignSelf: "center",
// //     position: "relative",
// //     zIndex: 1,
// //   },

// //   /* rail step */
// //   railStep: {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: 0,
// //     minHeight: 44,
// //     position: "relative",
// //   },
// //   railDot: (isStart, isEnd) => ({
// //     width: isStart || isEnd ? 12 : 10,
// //     height: isStart || isEnd ? 12 : 10,
// //     borderRadius: "50%",
// //     background: isEnd ? "#3B82F6" : isStart ? "#94A3B8" : "#CBD5E1",
// //     flexShrink: 0,
// //     position: "relative",
// //     zIndex: 1,
// //     margin: "0 18px",
// //   }),
// //   railExpr: {
// //     fontFamily: "'JetBrains Mono', monospace",
// //     fontSize: 15,
// //     color: "#1E293B",
// //     padding: "8px 0",
// //   },
// //   railRule: {
// //     fontSize: 12,
// //     // color: "#0F766E",
// //     padding: "4px 12px",
// //     // background: "#CCFBF1",
// //     borderRadius: 99,
// //     whiteSpace: "nowrap",
// //     marginLeft: 12,
// //     color: "#1E40AF",
// // background: "#DBEAFE",
// //   },
// // };

// // /* ─── sub-components ─── */

// // function RefBadge({ item }) {
// //   if (!item) return null;

// //   if (item.type === "step") {
// //     return <span style={S.backRef}>{processContent(`\u2190 step ${item.step}`)}</span>;
// //   }

// //   if (item.type === "cite") {
// //     return <span style={S.citeStyle}>{processContent(item.text || "")}</span>;
// //   }

// //   const label = `${item.type}: ${item.name || ""}`;

// //   if (item.link) {
// //     return (
// //       <a href={item.link} style={S.refBadge(item.type, true)}>
// //         {processContent(label)} &#8599;
// //       </a>
// //     );
// //   }

// //   return <span style={S.refBadge(item.type, false)}>{processContent(label)}</span>;
// // }

// // function BasedOnRow({ basedOn }) {
// //   if (!basedOn?.length) return null;
// //   return (
// //     <div style={S.basedOnRow}>
// //       {basedOn.map((b, i) => <RefBadge key={i} item={b} />)}
// //     </div>
// //   );
// // }

// // function HighlightedExpr({ expr, highlights }) {
// //   if (!highlights?.length) {
// //     return <span style={S.expr}>{processContent(expr)}</span>;
// //   }

// //   let result = expr;
// //   const parts = [];
// //   let remaining = result;

// //   for (const hl of highlights) {
// //     const idx = remaining.indexOf(hl);
// //     if (idx === -1) continue;
// //     if (idx > 0) {
// //       parts.push({ text: remaining.slice(0, idx), highlight: false });
// //     }
// //     parts.push({ text: hl, highlight: true });
// //     remaining = remaining.slice(idx + hl.length);
// //   }
// //   if (remaining) {
// //     parts.push({ text: remaining, highlight: false });
// //   }

// //   if (parts.length === 0) {
// //     return <span style={S.expr}>{processContent(expr)}</span>;
// //   }

// //   return (
// //     <span style={S.expr}>
// //       {parts.map((p, i) =>
// //         p.highlight
// //           ? <span key={i} style={S.highlight}>{processContent(p.text)}</span>
// //           : <span key={i}>{processContent(p.text)}</span>
// //       )}
// //     </span>
// //   );
// // }

// // function Accordion({ label, children }) {
// //   const [open, setOpen] = useState(false);
// //   return (
// //     <div>
// //       <button
// //         style={S.accToggle}
// //         onClick={() => setOpen(!open)}
// //       >
// //         <span style={{
// //           fontSize: 10,
// //           transition: "transform 0.2s",
// //           transform: open ? "rotate(90deg)" : "rotate(0deg)",
// //           display: "inline-block",
// //         }}>&#9654;</span>
// //         {label}
// //       </button>
// //       <div style={S.accContent(open)}>
// //         {children}
// //       </div>
// //     </div>
// //   );
// // }

// // function StepDetail({ detail }) {
// //   if (!detail) return null;
// //   return (
// //     <Accordion label="why?">
// //       <div style={S.detailInner}>{processContent(detail)}</div>
// //     </Accordion>
// //   );
// // }

// // function SubSteps({ substeps }) {
// //   if (!substeps?.length) return null;
// //   return (
// //     <Accordion label="substeps">
// //       <div style={{ padding: "4px 0" }}>
// //         {substeps.map((ss, i) => (
// //           <div key={i} style={S.subLine}>
// //             {ss.label && <span style={S.subLabel}>{processContent(ss.label)}:</span>}
// //             <span>{processContent(ss.expr)}</span>
// //           </div>
// //         ))}
// //       </div>
// //     </Accordion>
// //   );
// // }

// // /* ─── step renderer (proof variant) ─── */
// // function StepCard({ item, stepNum, showNum, isLast }) {
// //   const baseStyle = isLast ? S.result : S.step;

// //   return (
// //     <div style={baseStyle}>
// //       <div style={S.stepTop}>
// //         {showNum && <span style={isLast ? { ...S.stepNum, color: "#3B82F6" } : S.stepNum}>{stepNum}</span>}
// //         <HighlightedExpr expr={item.expr} highlights={item.highlights} />
// //         {item.operation && <span style={S.operation}>{processContent(item.operation)}</span>}
// //         {item.tag && <span style={S.tag(item.tag)}>{processContent(item.tag === "key" ? "key step" : item.tag)}</span>}
// //         {item.note && <span style={S.note}>{processContent(item.note)}</span>}
// //         {isLast && <span style={S.qed}>Q.E.D.</span>}
// //       </div>
// //       <BasedOnRow basedOn={item.basedOn} />
// //       <StepDetail detail={item.detail} />
// //       <SubSteps substeps={item.substeps} />
// //     </div>
// //   );
// // }

// // /* ─── passage renderer ─── */
// // function PassageBlock({ item, passageStyle }) {
// //   const type = item.passage || "remark";
// //   const style = passageStyle || "bar";

// //   let wrapStyle;
// //   switch (style) {
// //     case "indent":  wrapStyle = S.passageIndent; break;
// //     case "band":    wrapStyle = S.passageBand; break;
// //     case "bubble":  wrapStyle = S.passageBubble; break;
// //     case "inline":  wrapStyle = S.passageInline; break;
// //     case "dashed":  wrapStyle = S.passageDashed; break;
// //     default:        wrapStyle = S.passageBar(type); break;
// //   }

// //   const isBarStyle = style === "bar";

// //   return (
// //     <div style={wrapStyle}>
// //       <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
// //         <span style={S.passageBadge(type)}>{processContent(type)}</span>
// //         {isBarStyle && <span style={S.passageText}>{processContent(item.content || "")}</span>}
// //       </div>
// //       {!isBarStyle && <span style={S.passageText}>{processContent(item.content || "")}</span>}
// //       <BasedOnRow basedOn={item.basedOn} />
// //       {item.detail && (
// //         <Accordion label="more">
// //           <div style={S.detailInner}>{processContent(item.detail)}</div>
// //         </Accordion>
// //       )}
// //       {item.note && <span style={S.note}>{processContent(item.note)}</span>}
// //     </div>
// //   );
// // }

// // /* ─── rail variant step ─── */
// // function RailStep({ item, stepNum, isFirst, isLast }) {
// //   return (
// //     <div style={S.railStep}>
// //       <span style={S.railDot(isFirst, isLast)} />
// //       <span style={{ ...S.railExpr, ...(isLast ? { fontWeight: 500 } : {}) }}>
// //         {processContent(item.expr)}
// //       </span>
// //       {item.operation && <span style={S.railRule}>{processContent(item.operation)}</span>}
// //     </div>
// //   );
// // }

// // /* ─── group items by consecutive group key ─── */
// // function groupItems(items) {
// //   if (!items?.length) return [];

// //   const result = [];
// //   let currentGroup = null;
// //   let groupBuffer = [];

// //   const flushGroup = () => {
// //     if (currentGroup && groupBuffer.length) {
// //       result.push({ __group: currentGroup, items: [...groupBuffer] });
// //       groupBuffer = [];
// //     }
// //     currentGroup = null;
// //   };

// //   for (const item of items) {
// //     const gKey = item.group;
// //     if (gKey) {
// //       if (gKey !== currentGroup) {
// //         flushGroup();
// //         currentGroup = gKey;
// //       }
// //       groupBuffer.push(item);
// //     } else {
// //       flushGroup();
// //       result.push(item);
// //     }
// //   }
// //   flushGroup();

// //   return result;
// // }

// // /* ─── prerequisites ─── */
// // function Prerequisites({ prerequisites }) {
// //   if (!prerequisites?.length) return null;
// //   return (
// //     <div style={S.prereq}>
// //       <span style={S.prereqLabel}>{processContent("requires:")}</span>
// //       {prerequisites.map((p, i) => <RefBadge key={i} item={p} />)}
// //     </div>
// //   );
// // }

// // /* ─── default data ─── */
// // const DEFAULT_ITEMS = [
// //   { expr: "2x + 3 = 11", tag: "given" },
// //   { expr: "2x = 8", operation: "subtract 3" },
// //   { expr: "x = 4", operation: "divide by 2" },
// // ];

// // /* ═══════════════════════════════════════════
// //    MAIN COMPONENT
// //    ═══════════════════════════════════════════ */
// // export default function MathDerivation(derivationConfig) {
// //   const {
// //     items = DEFAULT_ITEMS,
// //     title = "",
// //     variant = "proof",
// //     passageStyle = "bar",
// //     prerequisites,
// //     conclusion,
// //     showStepNumbers = true,
// //     compact = false,
// //   } = derivationConfig || {};

// //   const grouped = useMemo(() => groupItems(items), [items]);

// //   let stepCounter = 0;

// //   const isStep = (item) => !!item?.expr;
// //   const isPassage = (item) => !!item?.passage;

// //   const renderItem = (item, idx, arr) => {
// //     if (item.__group) {
// //       return (
// //         <div key={`g-${idx}`} style={S.group}>
// //           <div style={S.groupLabel}>{processContent(item.__group)}</div>
// //           {item.items.map((gi, gi2) => renderItem(gi, `${idx}-${gi2}`, item.items))}
// //         </div>
// //       );
// //     }

// //     if (isPassage(item)) {
// //       if (variant === "rail") {
// //         return (
// //           <div key={`p-${idx}`}>
// //             <div style={S.conn}><span style={S.connRail} /><span style={S.connDot} /></div>
// //             <PassageBlock item={item} passageStyle={passageStyle} />
// //           </div>
// //         );
// //       }
// //       return <PassageBlock key={`p-${idx}`} item={item} passageStyle={passageStyle} />;
// //     }

// //     if (isStep(item)) {
// //       stepCounter++;
// //       const num = stepCounter;
// //       const isLast = (() => {
// //         for (let j = (typeof idx === "string" ? arr.length : grouped.length) - 1; j >= 0; j--) {
// //           const candidate = typeof idx === "string" ? arr[j] : grouped[j];
// //           if (candidate?.__group) {
// //             const lastInGroup = candidate.items[candidate.items.length - 1];
// //             if (isStep(lastInGroup)) return lastInGroup === item;
// //           }
// //           if (isStep(candidate)) return candidate === item;
// //         }
// //         return false;
// //       })();

// //       if (variant === "rail") {
// //         const isFirst = num === 1;
// //         return (
// //           <div key={`s-${idx}`}>
// //             {num > 1 && <div style={S.conn}><span style={S.connRail} /><span style={S.connDot} /></div>}
// //             <RailStep item={item} stepNum={num} isFirst={isFirst} isLast={isLast} />
// //           </div>
// //         );
// //       }

// //       return (
// //         <StepCard
// //           key={`s-${idx}`}
// //           item={item}
// //           stepNum={num}
// //           showNum={showStepNumbers}
// //           isLast={isLast}
// //         />
// //       );
// //     }

// //     return null;
// //   };

// //   stepCounter = 0;

// //   return (
// //     <div style={compact ? S.wrapCompact : S.wrap}>
// //       {title && (
// //         <div style={{ fontSize: 14, fontWeight: 500, color: "#1E293B", marginBottom: 8 }}>
// //           {processContent(title)}
// //         </div>
// //       )}
// //       <Prerequisites prerequisites={prerequisites} />
// //       {variant === "rail" && (
// //         <div style={{ position: "relative", padding: "8px 0" }}>
// //           <div style={{ position: "absolute", left: 23, top: 22, bottom: 22, width: 2, background: "#E2E8F0" }} />
// //           {grouped.map((item, i) => renderItem(item, i, grouped))}
// //         </div>
// //       )}
// //       {variant !== "rail" && grouped.map((item, i) => renderItem(item, i, grouped))}
// //       {conclusion && <div style={S.conclusion}>{processContent(conclusion)}</div>}
// //     </div>
// //   );
// // }



// import { useState, useMemo, useCallback } from "react";
// import { processContent } from "../../../utils/contentProcessor";

// /* ─── reference badge colors ─── */
// const REF_COLORS = {
//   theorem:    { bg: "#EEEDFE", color: "#3C3489" },
//   axiom:      { bg: "#F1EFE8", color: "#444441" },
//   lemma:      { bg: "#FBEAF0", color: "#72243E" },
//   identity:   { bg: "#E1F5EE", color: "#085041" },
//   property:   { bg: "#E6F1FB", color: "#0C447C" },
//   definition: { bg: "#FAEEDA", color: "#633806" },
//   step:       { bg: "#F1F5F9", color: "#334155" },
//   cite:       { bg: "#F1F5F9", color: "#64748B" },
// };

// /* ─── tag colors ─── */
// const TAG_COLORS = {
//   given:      { bg: "#F1F5F9", color: "#475569" },
//   goal:       { bg: "#DBEAFE", color: "#1E40AF" },
//   key:        { bg: "#FEF3C7", color: "#92400E" },
//   routine:    { bg: "transparent", color: "#94A3B8", border: "1px solid #CBD5E1" },
//   assumption: { bg: "#FBEAF0", color: "#72243E" },
//   conclusion: { bg: "#D1FAE5", color: "#065F46" },
// };

// /* ─── passage bar colors ─── */
// const PASSAGE_BAR = {
//   recall:      "#AFA9EC",
//   motivation:  "#85B7EB",
//   remark:      "#B4B2A9",
//   warning:     "#F09595",
//   intuition:   "#5DCAA5",
//   alternative: "#FCD34D",
//   transition:  "#ED93B1",
// };

// const PASSAGE_BADGE = {
//   recall:      { bg: "#EEEDFE", color: "#3C3489" },
//   motivation:  { bg: "#E6F1FB", color: "#0C447C" },
//   remark:      { bg: "#F1EFE8", color: "#444441" },
//   warning:     { bg: "#FCEBEB", color: "#791F1F" },
//   intuition:   { bg: "#E1F5EE", color: "#085041" },
//   alternative: { bg: "#FAEEDA", color: "#633806" },
//   transition:  { bg: "#FBEAF0", color: "#72243E" },
// };

// /* ─── shared token constants (used by new variants) ─── */
// const ACCENT       = "#3B82F6";
// const ACCENT_LIGHT = "#DBEAFE";
// const INK          = "#1E293B";
// const INK_SOFT     = "#334155";
// const MUTED        = "#94A3B8";
// const BORDER       = "#CBD5E1";
// const BORDER_SOFT  = "#E2E8F0";
// const SURFACE      = "#FFFFFF";
// const SURFACE_2    = "#F8FAFC";
// const SURFACE_3    = "#F1F5F9";
// const MONO         = "'JetBrains Mono', monospace";
// const SANS         = "'DM Sans', sans-serif";
// const SERIF        = "'Source Serif 4', Georgia, serif";

// /* ─── styles ─── */
// const S = {
//   wrap: {
//     maxWidth: 640,
//     fontFamily: "'DM Sans', sans-serif",
//   },
//   wrapCompact: {
//     maxWidth: 640,
//     fontFamily: "'DM Sans', sans-serif",
//     fontSize: 13,
//   },

//   /* prerequisites */
//   prereq: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: 6,
//     alignItems: "center",
//     padding: "8px 12px",
//     marginBottom: 8,
//     background: "#F8FAFC",
//     borderRadius: 8,
//   },
//   prereqLabel: {
//     fontSize: 11,
//     color: "#94A3B8",
//     marginRight: 4,
//   },

//   /* step card */
//   step: {
//     padding: "10px 14px",
//     background: "#FFFFFF",
//     border: "0.5px solid #E2E8F0",
//     borderRadius: 8,
//     margin: "4px 0",
//   },
//   stepTop: {
//     display: "flex",
//     flexWrap: "wrap",
//     alignItems: "baseline",
//     gap: "6px 12px",
//   },
//   stepNum: {
//     fontSize: 11,
//     fontWeight: 500,
//     color: "#94A3B8",
//     minWidth: 20,
//     textAlign: "right",
//     flexShrink: 0,
//   },
//   expr: {
//     fontFamily: "'JetBrains Mono', monospace",
//     fontSize: 15,
//     color: "#1E293B",
//     lineHeight: 1.6,
//     padding: "2px 0",
//   },
//   operation: {
//     fontSize: 12,
//     color: "#64748B",
//     fontStyle: "italic",
//   },

//   /* tag */
//   tag: (type) => {
//     const c = TAG_COLORS[type] || TAG_COLORS.routine;
//     return {
//       fontSize: 10,
//       fontWeight: 500,
//       padding: "2px 8px",
//       borderRadius: 4,
//       background: c.bg,
//       color: c.color,
//       border: c.border || "none",
//       whiteSpace: "nowrap",
//     };
//   },

//   /* note */
//   note: {
//     fontSize: 11,
//     color: "#92400E",
//     background: "#FEF3C7",
//     padding: "2px 8px",
//     borderRadius: 4,
//     marginLeft: "auto",
//   },

//   /* basedOn badge */
//   refBadge: (type, hasLink) => {
//     const c = REF_COLORS[type] || REF_COLORS.cite;
//     return {
//       display: "inline-flex",
//       alignItems: "center",
//       gap: 4,
//       fontSize: 11,
//       padding: "3px 10px",
//       borderRadius: 99,
//       background: c.bg,
//       color: c.color,
//       textDecoration: hasLink ? "underline" : "none",
//       textDecorationStyle: "dotted",
//       textUnderlineOffset: 2,
//       cursor: hasLink ? "pointer" : "default",
//       whiteSpace: "nowrap",
//     };
//   },

//   basedOnRow: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: 4,
//     width: "100%",
//     marginTop: 4,
//   },

//   backRef: {
//     fontSize: 11,
//     color: "#94A3B8",
//   },

//   citeStyle: {
//     fontSize: 11,
//     color: "#64748B",
//     fontStyle: "italic",
//     background: "#F8FAFC",
//     padding: "3px 10px",
//     borderRadius: 4,
//   },

//   highlight: {
//     color: "#185FA5",
//     fontWeight: 500,
//     background: "#E6F1FB",
//     padding: "0 3px",
//     borderRadius: 2,
//   },

//   /* accordion */
//   accToggle: {
//     display: "flex",
//     alignItems: "center",
//     gap: 6,
//     padding: "4px 0",
//     cursor: "pointer",
//     background: "none",
//     border: "none",
//     fontFamily: "'DM Sans', sans-serif",
//     fontSize: 12,
//     color: "#3B82F6",
//     marginTop: 4,
//   },

//   accContent: (open) => ({
//     overflow: "hidden",
//     maxHeight: open ? 400 : 0,
//     transition: "max-height 0.3s ease",
//   }),

//   detailInner: {
//     padding: "6px 0 4px",
//     fontSize: 13,
//     color: "#64748B",
//     lineHeight: 1.6,
//   },

//   /* substeps */
//   subLine: {
//     display: "flex",
//     gap: 8,
//     padding: "3px 0",
//     fontFamily: "'JetBrains Mono', monospace",
//     fontSize: 12,
//     color: "#64748B",
//   },
//   subLabel: {
//     fontSize: 11,
//     color: "#94A3B8",
//     fontStyle: "italic",
//     fontFamily: "'DM Sans', sans-serif",
//     minWidth: 36,
//   },

//   /* group wrapper */
//   group: {
//     margin: "6px 0",
//     padding: "8px 12px",
//     borderLeft: "3px solid #93C5FD",
//     background: "#EFF6FF",
//     borderRadius: 0,
//   },
//   groupLabel: {
//     fontSize: 11,
//     fontWeight: 500,
//     color: "#3B82F6",
//     letterSpacing: "0.03em",
//     marginBottom: 6,
//   },

//   /* passage */
//   passageBar: (type) => ({
//     margin: "2px 0",
//     padding: "8px 14px",
//     display: "flex",
//     gap: 8,
//     alignItems: "flex-start",
//     borderLeft: `3px solid ${PASSAGE_BAR[type] || "#B4B2A9"}`,
//     borderRadius: 0,
//   }),
//   passageIndent: {
//     margin: "2px 0 2px 34px",
//     padding: "8px 12px",
//     background: "#F8FAFC",
//     borderRadius: 8,
//     display: "flex",
//     flexDirection: "column",
//     gap: 6,
//   },
//   passageBand: {
//     margin: 0,
//     padding: "8px 14px 8px 42px",
//     display: "flex",
//     flexDirection: "column",
//     gap: 6,
//     background: "#F8FAFC",
//     borderTop: "0.5px solid #E2E8F0",
//     borderBottom: "0.5px solid #E2E8F0",
//   },
//   passageBubble: {
//     margin: "4px 0 4px 42px",
//     padding: "8px 12px",
//     background: "#F8FAFC",
//     borderRadius: 8,
//     display: "flex",
//     flexDirection: "column",
//     gap: 6,
//     maxWidth: "85%",
//   },
//   passageInline: {
//     margin: "2px 0",
//     padding: "4px 14px 4px 42px",
//     display: "flex",
//     gap: 8,
//     alignItems: "center",
//   },
//   passageDashed: {
//     margin: "4px 14px",
//     padding: "8px 12px",
//     border: "0.5px dashed #CBD5E1",
//     borderRadius: 8,
//     display: "flex",
//     flexDirection: "column",
//     gap: 6,
//   },
//   passageBadge: (type) => {
//     const c = PASSAGE_BADGE[type] || PASSAGE_BADGE.remark;
//     return {
//       fontSize: 10,
//       fontWeight: 500,
//       padding: "2px 8px",
//       borderRadius: 4,
//       background: c.bg,
//       color: c.color,
//       whiteSpace: "nowrap",
//       flexShrink: 0,
//       marginTop: 1,
//     };
//   },
//   passageText: {
//     fontSize: 13,
//     color: "#64748B",
//     lineHeight: 1.5,
//     fontStyle: "italic",
//   },

//   /* result row */
//   result: {
//     background: "#EFF6FF",
//     border: "0.5px solid #93C5FD",
//     borderRadius: 8,
//     padding: "12px 14px",
//     margin: "4px 0",
//   },
//   resultExpr: {
//     fontFamily: "'JetBrains Mono', monospace",
//     fontSize: 16,
//     fontWeight: 500,
//     color: "#1E293B",
//   },
//   qed: {
//     fontSize: 12,
//     fontWeight: 500,
//     color: "#3B82F6",
//     marginLeft: "auto",
//   },

//   conclusion: {
//     padding: "10px 14px",
//     border: "0.5px solid #93C5FD",
//     borderRadius: 8,
//     fontSize: 13,
//     color: "#64748B",
//     lineHeight: 1.5,
//     marginTop: 6,
//   },

//   /* rail variant dot connector */
//   conn: {
//     display: "flex",
//     justifyContent: "center",
//     height: 16,
//     position: "relative",
//   },
//   connRail: {
//     position: "absolute",
//     left: 23,
//     top: 0,
//     bottom: 0,
//     width: 2,
//     background: "#E2E8F0",
//   },
//   connDot: {
//     width: 6,
//     height: 6,
//     borderRadius: "50%",
//     background: "#CBD5E1",
//     alignSelf: "center",
//     position: "relative",
//     zIndex: 1,
//   },

//   /* rail step */
//   railStep: {
//     display: "flex",
//     alignItems: "center",
//     gap: 0,
//     minHeight: 44,
//     position: "relative",
//   },
//   railDot: (isStart, isEnd) => ({
//     width: isStart || isEnd ? 12 : 10,
//     height: isStart || isEnd ? 12 : 10,
//     borderRadius: "50%",
//     background: isEnd ? "#3B82F6" : isStart ? "#94A3B8" : "#CBD5E1",
//     flexShrink: 0,
//     position: "relative",
//     zIndex: 1,
//     margin: "0 18px",
//   }),
//   railExpr: {
//     fontFamily: "'JetBrains Mono', monospace",
//     fontSize: 15,
//     color: "#1E293B",
//     padding: "8px 0",
//   },
//   railRule: {
//     fontSize: 12,
//     padding: "4px 12px",
//     borderRadius: 99,
//     whiteSpace: "nowrap",
//     marginLeft: 12,
//     color: "#1E40AF",
//     background: "#DBEAFE",
//   },
// };

// /* ─── sub-components (shared) ─── */

// function RefBadge({ item }) {
//   if (!item) return null;
//   if (item.type === "step") {
//     return <span style={S.backRef}>{processContent(`\u2190 step ${item.step}`)}</span>;
//   }
//   if (item.type === "cite") {
//     return <span style={S.citeStyle}>{processContent(item.text || "")}</span>;
//   }
//   const label = `${item.type}: ${item.name || ""}`;
//   if (item.link) {
//     return (
//       <a href={item.link} style={S.refBadge(item.type, true)}>
//         {processContent(label)} &#8599;
//       </a>
//     );
//   }
//   return <span style={S.refBadge(item.type, false)}>{processContent(label)}</span>;
// }

// function BasedOnRow({ basedOn }) {
//   if (!basedOn?.length) return null;
//   return (
//     <div style={S.basedOnRow}>
//       {basedOn.map((b, i) => <RefBadge key={i} item={b} />)}
//     </div>
//   );
// }

// function HighlightedExpr({ expr, highlights }) {
//   if (!highlights?.length) {
//     return <span style={S.expr}>{processContent(expr)}</span>;
//   }
//   const parts = [];
//   let remaining = expr;
//   for (const hl of highlights) {
//     const idx = remaining.indexOf(hl);
//     if (idx === -1) continue;
//     if (idx > 0) parts.push({ text: remaining.slice(0, idx), highlight: false });
//     parts.push({ text: hl, highlight: true });
//     remaining = remaining.slice(idx + hl.length);
//   }
//   if (remaining) parts.push({ text: remaining, highlight: false });
//   if (parts.length === 0) return <span style={S.expr}>{processContent(expr)}</span>;
//   return (
//     <span style={S.expr}>
//       {parts.map((p, i) =>
//         p.highlight
//           ? <span key={i} style={S.highlight}>{processContent(p.text)}</span>
//           : <span key={i}>{processContent(p.text)}</span>
//       )}
//     </span>
//   );
// }

// function Accordion({ label, children }) {
//   const [open, setOpen] = useState(false);
//   return (
//     <div>
//       <button style={S.accToggle} onClick={() => setOpen(!open)}>
//         <span style={{
//           fontSize: 10,
//           transition: "transform 0.2s",
//           transform: open ? "rotate(90deg)" : "rotate(0deg)",
//           display: "inline-block",
//         }}>&#9654;</span>
//         {label}
//       </button>
//       <div style={S.accContent(open)}>
//         {children}
//       </div>
//     </div>
//   );
// }

// function StepDetail({ detail }) {
//   if (!detail) return null;
//   return (
//     <Accordion label="why?">
//       <div style={S.detailInner}>{processContent(detail)}</div>
//     </Accordion>
//   );
// }

// function SubSteps({ substeps }) {
//   if (!substeps?.length) return null;
//   return (
//     <Accordion label="substeps">
//       <div style={{ padding: "4px 0" }}>
//         {substeps.map((ss, i) => (
//           <div key={i} style={S.subLine}>
//             {ss.label && <span style={S.subLabel}>{processContent(ss.label)}:</span>}
//             <span>{processContent(ss.expr)}</span>
//           </div>
//         ))}
//       </div>
//     </Accordion>
//   );
// }

// /* ─── proof variant step card (bg override supported) ─── */
// function StepCard({ item, stepNum, showNum, isLast }) {
//   const baseStyle = isLast ? S.result : S.step;
//   // existing variant: only bg can be overridden via item.style.bg
//   const mergedStyle = item.style?.bg
//     ? { ...baseStyle, background: item.style.bg }
//     : baseStyle;

//   return (
//     <div style={mergedStyle}>
//       <div style={S.stepTop}>
//         {showNum && <span style={isLast ? { ...S.stepNum, color: "#3B82F6" } : S.stepNum}>{stepNum}</span>}
//         <HighlightedExpr expr={item.expr} highlights={item.highlights} />
//         {item.operation && <span style={S.operation}>{processContent(item.operation)}</span>}
//         {item.tag && <span style={S.tag(item.tag)}>{processContent(item.tag === "key" ? "key step" : item.tag)}</span>}
//         {item.note && <span style={S.note}>{processContent(item.note)}</span>}
//         {isLast && <span style={S.qed}>Q.E.D.</span>}
//       </div>
//       <BasedOnRow basedOn={item.basedOn} />
//       <StepDetail detail={item.detail} />
//       <SubSteps substeps={item.substeps} />
//     </div>
//   );
// }

// /* ─── passage renderer ─── */
// function PassageBlock({ item, passageStyle }) {
//   const type = item.passage || "remark";
//   const style = passageStyle || "bar";

//   let wrapStyle;
//   switch (style) {
//     case "indent":  wrapStyle = S.passageIndent; break;
//     case "band":    wrapStyle = S.passageBand; break;
//     case "bubble":  wrapStyle = S.passageBubble; break;
//     case "inline":  wrapStyle = S.passageInline; break;
//     case "dashed":  wrapStyle = S.passageDashed; break;
//     default:        wrapStyle = S.passageBar(type); break;
//   }

//   const isBarStyle = style === "bar";

//   return (
//     <div style={wrapStyle}>
//       <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
//         <span style={S.passageBadge(type)}>{processContent(type)}</span>
//         {isBarStyle && <span style={S.passageText}>{processContent(item.content || "")}</span>}
//       </div>
//       {!isBarStyle && <span style={S.passageText}>{processContent(item.content || "")}</span>}
//       <BasedOnRow basedOn={item.basedOn} />
//       {item.detail && (
//         <Accordion label="more">
//           <div style={S.detailInner}>{processContent(item.detail)}</div>
//         </Accordion>
//       )}
//       {item.note && <span style={S.note}>{processContent(item.note)}</span>}
//     </div>
//   );
// }

// /* ─── rail variant step (bg override supported on expr background) ─── */
// function RailStep({ item, stepNum, isFirst, isLast }) {
//   const exprStyle = item.style?.bg
//     ? {
//         ...S.railExpr,
//         ...(isLast ? { fontWeight: 500 } : {}),
//         background: item.style.bg,
//         padding: "8px 10px",
//         borderRadius: 4,
//       }
//     : { ...S.railExpr, ...(isLast ? { fontWeight: 500 } : {}) };

//   return (
//     <div style={S.railStep}>
//       <span style={S.railDot(isFirst, isLast)} />
//       <span style={exprStyle}>
//         {processContent(item.expr)}
//       </span>
//       {item.operation && <span style={S.railRule}>{processContent(item.operation)}</span>}
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════
//    STYLE RESOLVER for new variants (full override)
//    ═══════════════════════════════════════════ */
// function resolveNodeStyle(item, defaults = {}) {
//   const s = item.style || {};
//   return {
//     bg: s.bg ?? defaults.bg ?? SURFACE,
//     border: s.border ?? defaults.border ?? BORDER,
//     color: s.color ?? defaults.color ?? INK,
//     accent: s.accent ?? defaults.accent ?? null,
//     fontWeight: s.fontWeight ?? defaults.fontWeight ?? null,
//   };
// }

// /* ═══════════════════════════════════════════
//    ATOMS for new variants
//    ═══════════════════════════════════════════ */

// function NewTag({ label }) {
//   const c = TAG_COLORS[label] || TAG_COLORS.routine;
//   return (
//     <span style={{
//       fontSize: 10, fontWeight: 500, padding: "1px 6px",
//       borderRadius: 3, background: c.bg, color: c.color,
//       border: c.border || "none",
//       whiteSpace: "nowrap",
//     }}>{processContent(label === "key" ? "key step" : label)}</span>
//   );
// }

// function NewOpPill({ text }) {
//   return (
//     <span style={{
//       fontSize: 11, color: "#1E40AF",
//       background: ACCENT_LIGHT, padding: "2px 8px",
//       borderRadius: 99, whiteSpace: "nowrap",
//     }}>{processContent(text)}</span>
//   );
// }

// function NewPassageBadge({ type }) {
//   const c = PASSAGE_BADGE[type] || PASSAGE_BADGE.remark;
//   return (
//     <span style={{
//       fontSize: 9, fontWeight: 700, padding: "1px 6px",
//       borderRadius: 3, background: c.bg, color: c.color,
//       textTransform: "uppercase", letterSpacing: "0.06em",
//       whiteSpace: "nowrap", flexShrink: 0,
//     }}>{processContent(type)}</span>
//   );
// }

// function StepBadge({ n, isLast, color }) {
//   const bg = color || (isLast ? ACCENT : SURFACE_3);
//   const textColor = (color || isLast) ? "white" : INK_SOFT;
//   return (
//     <span style={{
//       display: "inline-flex", alignItems: "center", justifyContent: "center",
//       width: 22, height: 22, borderRadius: 4,
//       background: bg, color: textColor,
//       border: `1px solid ${color || (isLast ? ACCENT : BORDER)}`,
//       fontSize: 11, fontWeight: 700, fontFamily: MONO,
//       flexShrink: 0,
//     }}>{n}</span>
//   );
// }

// function NewPassageInline({ item }) {
//   const c = PASSAGE_BADGE[item.passage] || PASSAGE_BADGE.remark;
//   const bar = PASSAGE_BAR[item.passage] || "#B4B2A9";
//   return (
//     <div style={{
//       padding: "8px 12px",
//       borderLeft: `3px solid ${bar}`,
//       background: SURFACE_2,
//       border: `1px solid ${BORDER_SOFT}`,
//       borderLeftWidth: 3,
//       borderRadius: 4,
//       display: "flex", gap: 8, alignItems: "flex-start",
//     }}>
//       <NewPassageBadge type={item.passage} />
//       <span style={{ fontSize: 12, color: INK_SOFT, lineHeight: 1.45 }}>
//         {processContent(item.content || "")}
//       </span>
//     </div>
//   );
// }

// const isStepItem = (x) => !!x?.expr;
// const isPassageItem = (x) => !!x?.passage;

// /* expand grouped items back to a flat list with group markers */
// function flattenGroups(grouped) {
//   const out = [];
//   grouped.forEach((it) => {
//     if (it.__group) {
//       out.push({ __groupStart: it.__group });
//       it.items.forEach((gi) => out.push(gi));
//       out.push({ __groupEnd: true });
//     } else {
//       out.push(it);
//     }
//   });
//   return out;
// }

// /* count total steps across grouped */
// function countSteps(grouped) {
//   let n = 0;
//   grouped.forEach((it) => {
//     if (it.__group) it.items.forEach((gi) => { if (isStepItem(gi)) n++; });
//     else if (isStepItem(it)) n++;
//   });
//   return n;
// }

// /* ═══════════════════════════════════════════
//    VARIANT 1 — TIMELINE  (horizontal cards)
//    ═══════════════════════════════════════════ */
// function TimelineVariant({ grouped }) {
//   const flat = useMemo(() => flattenGroups(grouped), [grouped]);
//   let stepIdx = 0;

//   return (
//     <div style={{
//       overflowX: "auto", maxWidth: "100%",
//       border: `1px solid ${BORDER}`, borderRadius: 6,
//       background: SURFACE_2, padding: 12,
//     }}>
//       <div style={{ display: "flex", alignItems: "stretch", gap: 0, minWidth: "fit-content" }}>
//         {flat.map((item, i) => {
//           if (item.__groupStart) {
//             return (
//               <div key={i} style={{
//                 alignSelf: "stretch", display: "flex", alignItems: "center",
//                 padding: "0 8px", fontSize: 10, fontWeight: 600,
//                 color: ACCENT, letterSpacing: "0.05em",
//                 textTransform: "uppercase", borderLeft: `2px solid ${ACCENT}`,
//                 marginLeft: 6,
//               }}>{processContent(item.__groupStart)}</div>
//             );
//           }
//           if (item.__groupEnd) return null;
//           if (isPassageItem(item)) {
//             const bar = PASSAGE_BAR[item.passage] || "#B4B2A9";
//             return (
//               <div key={i} style={{
//                 padding: "8px 10px", margin: "10px 4px",
//                 background: SURFACE, border: `1px solid ${BORDER}`,
//                 borderLeft: `3px solid ${bar}`,
//                 borderRadius: 4, width: 170, flexShrink: 0,
//                 display: "flex", flexDirection: "column", gap: 6,
//               }}>
//                 <NewPassageBadge type={item.passage} />
//                 <span style={{ fontSize: 11, color: INK_SOFT, lineHeight: 1.4 }}>
//                   {processContent(item.content || "")}
//                 </span>
//               </div>
//             );
//           }
//           if (!isStepItem(item)) return null;
//           stepIdx++;
//           const localIdx = stepIdx;
//           const s = resolveNodeStyle(item, { color: INK });
//           return (
//             <div key={i} style={{ display: "flex", alignItems: "stretch" }}>
//               <div style={{
//                 padding: "10px 12px",
//                 background: s.bg, border: `1px solid ${s.border}`,
//                 borderRadius: 4, minWidth: 180, flexShrink: 0,
//                 display: "flex", flexDirection: "column", gap: 6,
//               }}>
//                 <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
//                   <StepBadge n={localIdx} color={s.accent} />
//                   <div style={{
//                     fontSize: 9, color: MUTED, fontWeight: 600,
//                     letterSpacing: "0.06em", textTransform: "uppercase",
//                   }}>Step</div>
//                 </div>
//                 <div style={{
//                   fontFamily: MONO, fontSize: 13, color: s.color,
//                   fontWeight: s.fontWeight || "normal",
//                 }}>{processContent(item.expr)}</div>
//                 {item.operation && <NewOpPill text={item.operation} />}
//                 {item.tag && <div><NewTag label={item.tag} /></div>}
//               </div>
//               {i < flat.length - 1 && (
//                 <div style={{ display: "flex", alignItems: "center", padding: "0 3px" }}>
//                   <div style={{ width: 14, height: 1, background: MUTED }} />
//                   <div style={{
//                     width: 0, height: 0,
//                     borderTop: "3px solid transparent",
//                     borderBottom: "3px solid transparent",
//                     borderLeft: `5px solid ${MUTED}`,
//                   }} />
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════
//    VARIANT 2 — TWO-COLUMN  (statement | justification)
//    ═══════════════════════════════════════════ */
// function TwoColumnVariant({ grouped }) {
//   const flat = useMemo(() => flattenGroups(grouped), [grouped]);
//   let stepIdx = 0;

//   const hCell = (extra = {}) => ({
//     padding: "8px 10px", background: SURFACE_3,
//     borderBottom: `1px solid ${BORDER}`, borderRight: `1px solid ${BORDER_SOFT}`,
//     fontSize: 10, fontWeight: 600, color: INK_SOFT,
//     textTransform: "uppercase", letterSpacing: "0.06em",
//     ...extra,
//   });
//   const dCell = (extra = {}) => ({
//     padding: "10px 12px",
//     borderTop: `1px solid ${BORDER}`, borderRight: `1px solid ${BORDER_SOFT}`,
//     ...extra,
//   });

//   return (
//     <div style={{
//       display: "grid", gridTemplateColumns: "40px 1fr 1fr",
//       maxWidth: 680, width: "100%",
//       border: `1px solid ${BORDER}`, borderRadius: 6, overflow: "hidden",
//       background: SURFACE,
//     }}>
//       <div style={hCell()}>#</div>
//       <div style={hCell()}>Statement</div>
//       <div style={hCell({ borderRight: "none" })}>Justification</div>

//       {flat.map((item, i) => {
//         if (item.__groupStart) {
//           return (
//             <div key={i} style={{
//               gridColumn: "1 / -1", padding: "6px 12px",
//               background: "#EFF6FF",
//               borderTop: `1px solid ${BORDER}`,
//               borderLeft: `3px solid ${ACCENT}`,
//               fontSize: 11, fontWeight: 500, color: ACCENT,
//               letterSpacing: "0.03em",
//             }}>{processContent(item.__groupStart)}</div>
//           );
//         }
//         if (item.__groupEnd) return null;
//         if (isPassageItem(item)) {
//           const bar = PASSAGE_BAR[item.passage] || "#B4B2A9";
//           return (
//             <div key={i} style={{
//               gridColumn: "1 / -1",
//               padding: "8px 12px",
//               background: SURFACE_2,
//               borderTop: `1px solid ${BORDER}`,
//               borderLeft: `3px solid ${bar}`,
//               display: "flex", gap: 8, alignItems: "flex-start",
//             }}>
//               <NewPassageBadge type={item.passage} />
//               <span style={{ fontSize: 12, color: INK_SOFT, lineHeight: 1.45 }}>
//                 {processContent(item.content || "")}
//               </span>
//             </div>
//           );
//         }
//         if (!isStepItem(item)) return null;
//         stepIdx++;
//         const localIdx = stepIdx;
//         const isEven = localIdx % 2 === 0;
//         const s = resolveNodeStyle(item, {
//           bg: isEven ? SURFACE_2 : SURFACE,
//           color: INK,
//         });
//         return (
//           <div key={i} style={{ display: "contents" }}>
//             <div style={dCell({
//               color: MUTED, textAlign: "center", fontSize: 11, background: s.bg,
//             })}>{localIdx}</div>
//             <div style={dCell({ background: s.bg })}>
//               <span style={{
//                 fontFamily: MONO, fontSize: 13,
//                 color: s.color, fontWeight: s.fontWeight || "normal",
//               }}>{processContent(item.expr)}</span>
//               {item.tag && <div style={{ marginTop: 3 }}><NewTag label={item.tag} /></div>}
//             </div>
//             <div style={dCell({
//               borderRight: "none",
//               background: item.style?.bg ? s.bg : (isEven ? SURFACE_3 : SURFACE_2),
//             })}>
//               {localIdx === 1 ? (
//                 <span style={{ fontSize: 11, color: MUTED, fontStyle: "italic" }}>Given</span>
//               ) : (
//                 <>
//                   {item.operation && (
//                     <div style={{ fontSize: 12, color: INK_SOFT }}>
//                       {processContent(item.operation)}
//                     </div>
//                   )}
//                   {item.basedOn?.length > 0 && (
//                     <div style={{ display: "flex", gap: 3, flexWrap: "wrap", marginTop: 3 }}>
//                       {item.basedOn.map((r, j) => <RefBadge key={j} item={r} />)}
//                     </div>
//                   )}
//                 </>
//               )}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════
//    VARIANT 3 — NARRATIVE  (prose blocks, one step per block)
//    ═══════════════════════════════════════════ */
// function NarrativeVariant({ grouped }) {
//   const flat = useMemo(() => flattenGroups(grouped), [grouped]);
//   const totalSteps = countSteps(grouped);
//   let stepIdx = 0;
//   const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

//   return (
//     <div style={{
//       maxWidth: 580, width: "100%",
//       display: "flex", flexDirection: "column", gap: 8,
//       fontFamily: SERIF,
//     }}>
//       {flat.map((item, i) => {
//         if (item.__groupStart) {
//           return (
//             <div key={i} style={{
//               fontFamily: SANS, fontSize: 11, fontWeight: 600,
//               color: ACCENT, letterSpacing: "0.05em",
//               textTransform: "uppercase", marginTop: 4, marginBottom: 0,
//               paddingLeft: 12, borderLeft: `3px solid ${ACCENT}`,
//             }}>{processContent(item.__groupStart)}</div>
//           );
//         }
//         if (item.__groupEnd) return null;
//         if (isPassageItem(item)) {
//           const c = PASSAGE_BADGE[item.passage] || PASSAGE_BADGE.remark;
//           const bar = PASSAGE_BAR[item.passage] || "#B4B2A9";
//           return (
//             <div key={i} style={{
//               padding: "8px 12px",
//               borderLeft: `3px solid ${bar}`,
//               fontSize: 13, color: INK_SOFT,
//               background: SURFACE_2,
//               border: `1px solid ${BORDER_SOFT}`,
//               borderLeftWidth: 3,
//               borderRadius: 4,
//               fontStyle: "italic", lineHeight: 1.6,
//               fontFamily: SANS,
//             }}>
//               <strong style={{
//                 color: c.color, fontStyle: "normal",
//                 fontSize: 10, textTransform: "uppercase",
//                 letterSpacing: "0.06em", marginRight: 6,
//               }}>{processContent(item.passage)}:</strong>
//               {processContent(item.content || "")}
//             </div>
//           );
//         }
//         if (!isStepItem(item)) return null;
//         stepIdx++;
//         const localIdx = stepIdx;
//         const isFirst = localIdx === 1;
//         const isFinal = localIdx === totalSteps;
//         const s = resolveNodeStyle(item, {
//           bg: isFinal ? "#EFF6FF" : SURFACE,
//           border: isFinal ? "#93C5FD" : BORDER,
//           color: INK_SOFT,
//         });
//         return (
//           <div key={i} style={{
//             display: "flex", alignItems: "flex-start", gap: 10,
//             padding: "10px 12px",
//             background: s.bg,
//             border: `1px solid ${s.border}`,
//             borderRadius: 4,
//           }}>
//             <StepBadge n={localIdx} isLast={isFinal} color={s.accent} />
//             <div style={{
//               fontSize: 14, color: s.color, lineHeight: 1.65, flex: 1,
//               fontWeight: s.fontWeight || "normal",
//             }}>
//               {isFirst && "Start with "}
//               {!isFirst && !isFinal && item.operation && `${cap(item.operation)} to obtain `}
//               {!isFirst && !isFinal && !item.operation && "Then "}
//               {isFinal && item.operation && `After ${item.operation}, `}
//               {isFinal && !item.operation && "We arrive at "}
//               <span style={{
//                 fontFamily: MONO, fontSize: 12,
//                 padding: "1px 6px", borderRadius: 3,
//                 background: isFinal ? ACCENT_LIGHT : SURFACE_3,
//                 color: isFinal ? "#1E40AF" : INK,
//                 fontWeight: isFinal ? 600 : 400,
//               }}>{processContent(item.expr)}</span>
//               {item.basedOn?.length > 0 && item.basedOn[0].name && (
//                 <>, by the <em style={{ color: INK }}>{processContent(item.basedOn[0].name)}</em></>
//               )}.
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════
//    VARIANT 4 — CHECKLIST  (interactive tick-off)
//    ═══════════════════════════════════════════ */
// function ChecklistVariant({ grouped }) {
//   const flat = useMemo(() => flattenGroups(grouped), [grouped]);
//   const [checked, setChecked] = useState(new Set());
//   const toggle = useCallback((i) => {
//     setChecked((prev) => {
//       const s = new Set(prev);
//       if (s.has(i)) s.delete(i); else s.add(i);
//       return s;
//     });
//   }, []);
//   let stepIdx = 0;

//   return (
//     <div style={{
//       maxWidth: 560, width: "100%",
//       display: "flex", flexDirection: "column", gap: 5,
//     }}>
//       {flat.map((item, i) => {
//         if (item.__groupStart) {
//           return (
//             <div key={i} style={{
//               fontSize: 11, fontWeight: 600, color: ACCENT,
//               letterSpacing: "0.05em", textTransform: "uppercase",
//               marginTop: 6, paddingLeft: 10,
//               borderLeft: `3px solid ${ACCENT}`,
//             }}>{processContent(item.__groupStart)}</div>
//           );
//         }
//         if (item.__groupEnd) return null;
//         if (isPassageItem(item)) {
//           const bar = PASSAGE_BAR[item.passage] || "#B4B2A9";
//           return (
//             <div key={i} style={{
//               padding: "6px 10px 6px 38px",
//               borderLeft: `3px solid ${bar}`,
//               background: SURFACE_2,
//               border: `1px solid ${BORDER_SOFT}`,
//               borderLeftWidth: 3,
//               borderRadius: 4,
//               display: "flex", gap: 6, alignItems: "flex-start",
//             }}>
//               <NewPassageBadge type={item.passage} />
//               <span style={{ fontSize: 12, color: INK_SOFT, lineHeight: 1.45 }}>
//                 {processContent(item.content || "")}
//               </span>
//             </div>
//           );
//         }
//         if (!isStepItem(item)) return null;
//         stepIdx++;
//         const localIdx = stepIdx;
//         const isChecked = checked.has(i);
//         const s = resolveNodeStyle(item, { color: INK });
//         return (
//           <label key={i} style={{
//             display: "flex", alignItems: "center", gap: 10,
//             padding: "8px 12px",
//             background: isChecked ? SURFACE_3 : s.bg,
//             border: `1px solid ${s.border}`,
//             borderRadius: 4, cursor: "pointer",
//             opacity: isChecked ? 0.6 : 1,
//             transition: "opacity .15s",
//           }}>
//             <input
//               type="checkbox" checked={isChecked} onChange={() => toggle(i)}
//               style={{ width: 15, height: 15, accentColor: ACCENT, cursor: "pointer", flexShrink: 0 }}
//             />
//             <StepBadge n={localIdx} color={s.accent} />
//             <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
//               {item.operation && (
//                 <div style={{ fontSize: 11, color: MUTED }}>{processContent(item.operation)}</div>
//               )}
//               <div style={{
//                 fontFamily: MONO, fontSize: 13, color: s.color,
//                 fontWeight: s.fontWeight || "normal",
//                 textDecoration: isChecked ? "line-through" : "none",
//               }}>{processContent(item.expr)}</div>
//             </div>
//           </label>
//         );
//       })}
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════
//    VARIANT 5 — COMPACT  (numbered table, dense)
//    ═══════════════════════════════════════════ */
// function CompactVariant({ grouped }) {
//   const flat = useMemo(() => flattenGroups(grouped), [grouped]);
//   let stepIdx = 0;

//   return (
//     <div style={{
//       fontFamily: MONO, fontSize: 13, color: INK_SOFT,
//       maxWidth: 560, width: "100%",
//       border: `1px solid ${BORDER}`, borderRadius: 6,
//       background: SURFACE, overflow: "hidden",
//     }}>
//       {flat.map((item, i) => {
//         if (item.__groupStart) {
//           return (
//             <div key={i} style={{
//               padding: "5px 10px",
//               borderTop: i === 0 ? "none" : `1px solid ${BORDER_SOFT}`,
//               background: "#EFF6FF",
//               fontSize: 10, fontWeight: 700,
//               color: ACCENT, letterSpacing: "0.06em",
//               textTransform: "uppercase",
//               fontFamily: SANS,
//             }}>{processContent(item.__groupStart)}</div>
//           );
//         }
//         if (item.__groupEnd) return null;
//         if (isPassageItem(item)) {
//           const c = PASSAGE_BADGE[item.passage] || PASSAGE_BADGE.remark;
//           const bar = PASSAGE_BAR[item.passage] || "#B4B2A9";
//           return (
//             <div key={i} style={{
//               padding: "5px 10px 5px 40px",
//               borderTop: `1px solid ${BORDER_SOFT}`,
//               borderLeft: `3px solid ${bar}`,
//               fontSize: 11, color: c.color,
//               fontStyle: "italic", fontFamily: SANS,
//               background: SURFACE_2,
//             }}>
//               <span style={{
//                 fontWeight: 700, fontStyle: "normal",
//                 textTransform: "uppercase", letterSpacing: "0.05em",
//                 marginRight: 6, fontSize: 10,
//               }}>// {processContent(item.passage)}</span>
//               {processContent(item.content || "")}
//             </div>
//           );
//         }
//         if (!isStepItem(item)) return null;
//         stepIdx++;
//         const localIdx = stepIdx;
//         const isEven = localIdx % 2 === 0;
//         const s = resolveNodeStyle(item, {
//           bg: isEven ? SURFACE_2 : SURFACE,
//           color: INK,
//         });
//         return (
//           <div key={i} style={{
//             display: "grid", gridTemplateColumns: "32px 1fr",
//             borderTop: i === 0 ? "none" : `1px solid ${BORDER_SOFT}`,
//             background: s.bg,
//           }}>
//             <div style={{
//               padding: "6px 8px",
//               borderRight: `1px solid ${BORDER_SOFT}`,
//               background: s.accent || (isEven ? SURFACE_3 : SURFACE_2),
//               color: s.accent ? "white" : MUTED,
//               fontSize: 11, textAlign: "center",
//               fontWeight: 600,
//             }}>{localIdx}</div>
//             <div style={{
//               padding: "6px 10px",
//               display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap",
//             }}>
//               <span style={{
//                 color: s.color, fontWeight: s.fontWeight || "normal",
//               }}>{processContent(item.expr)}</span>
//               {item.operation && (
//                 <span style={{
//                   color: MUTED, fontSize: 11, fontStyle: "italic", fontFamily: SANS,
//                 }}>← {processContent(item.operation)}</span>
//               )}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════
//    VARIANT 6 — FOCUS  (one step at a time, slideshow)
//    ═══════════════════════════════════════════ */
// function FocusVariant({ grouped }) {
//   const flat = useMemo(() => flattenGroups(grouped).filter((x) => !x.__groupStart && !x.__groupEnd), [grouped]);
//   const [idx, setIdx] = useState(0);
//   const item = flat[idx];

//   const stepNum = useMemo(
//     () => flat.slice(0, idx + 1).filter(isStepItem).length,
//     [flat, idx]
//   );
//   const stepTotal = useMemo(() => flat.filter(isStepItem).length, [flat]);

//   if (!item) return null;
//   const isP = isPassageItem(item);
//   const bar = isP ? (PASSAGE_BAR[item.passage] || "#B4B2A9") : null;
//   const c = isP ? (PASSAGE_BADGE[item.passage] || PASSAGE_BADGE.remark) : null;
//   const s = !isP ? resolveNodeStyle(item, { color: INK }) : null;

//   const navBtn = (disabled) => ({
//     padding: "5px 12px",
//     background: disabled ? SURFACE_3 : ACCENT,
//     color: disabled ? MUTED : "white",
//     border: `1px solid ${disabled ? BORDER : ACCENT}`,
//     borderRadius: 4,
//     fontSize: 12, fontWeight: 500,
//     cursor: disabled ? "default" : "pointer",
//     fontFamily: "inherit",
//     opacity: disabled ? 0.5 : 1,
//   });

//   return (
//     <div style={{ maxWidth: 540, width: "100%" }}>
//       <div style={{ display: "flex", gap: 3, marginBottom: 12 }}>
//         {flat.map((it, i) => (
//           <div key={i} onClick={() => setIdx(i)} style={{
//             flex: isPassageItem(it) ? 0.4 : 1,
//             height: 4, borderRadius: 2,
//             background: i === idx ? ACCENT : (i < idx ? "#93C5FD" : BORDER_SOFT),
//             cursor: "pointer",
//           }} />
//         ))}
//       </div>
//       <div style={{
//         padding: "16px 18px",
//         background: isP ? SURFACE_2 : s.bg,
//         border: `1px solid ${isP ? BORDER : s.border}`,
//         borderLeft: isP
//           ? `3px solid ${bar}`
//           : (s.accent ? `3px solid ${s.accent}` : `1px solid ${s.border}`),
//         borderRadius: 6, minHeight: 120,
//         display: "flex", flexDirection: "column", gap: 10,
//       }}>
//         {isP ? (
//           <>
//             <NewPassageBadge type={item.passage} />
//             <div style={{
//               fontSize: 15, color: INK_SOFT, fontFamily: SERIF,
//               fontStyle: "italic", lineHeight: 1.5,
//             }}>{processContent(item.content || "")}</div>
//           </>
//         ) : (
//           <>
//             <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//               <StepBadge n={stepNum} isLast={stepNum === stepTotal} color={s.accent} />
//               <div style={{
//                 fontSize: 10, color: MUTED, fontWeight: 600,
//                 letterSpacing: "0.08em", textTransform: "uppercase",
//               }}>Step {stepNum} of {stepTotal}</div>
//             </div>
//             <div style={{
//               fontFamily: MONO, fontSize: 18,
//               color: s.color, letterSpacing: "-0.01em",
//               fontWeight: s.fontWeight || "normal",
//             }}>{processContent(item.expr)}</div>
//             <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
//               {item.operation && <NewOpPill text={item.operation} />}
//               {item.tag && <NewTag label={item.tag} />}
//             </div>
//             <BasedOnRow basedOn={item.basedOn} />
//             {item.detail && (
//               <Accordion label="why?">
//                 <div style={S.detailInner}>{processContent(item.detail)}</div>
//               </Accordion>
//             )}
//           </>
//         )}
//       </div>
//       <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
//         <button onClick={() => setIdx(Math.max(0, idx - 1))} disabled={idx === 0} style={navBtn(idx === 0)}>← Prev</button>
//         <button onClick={() => setIdx(Math.min(flat.length - 1, idx + 1))} disabled={idx === flat.length - 1} style={navBtn(idx === flat.length - 1)}>Next →</button>
//       </div>
//     </div>
//   );
// }

// /* ─── group items by consecutive group key ─── */
// function groupItems(items) {
//   if (!items?.length) return [];

//   const result = [];
//   let currentGroup = null;
//   let groupBuffer = [];

//   const flushGroup = () => {
//     if (currentGroup && groupBuffer.length) {
//       result.push({ __group: currentGroup, items: [...groupBuffer] });
//       groupBuffer = [];
//     }
//     currentGroup = null;
//   };

//   for (const item of items) {
//     const gKey = item.group;
//     if (gKey) {
//       if (gKey !== currentGroup) {
//         flushGroup();
//         currentGroup = gKey;
//       }
//       groupBuffer.push(item);
//     } else {
//       flushGroup();
//       result.push(item);
//     }
//   }
//   flushGroup();

//   return result;
// }

// /* ─── prerequisites ─── */
// function Prerequisites({ prerequisites }) {
//   if (!prerequisites?.length) return null;
//   return (
//     <div style={S.prereq}>
//       <span style={S.prereqLabel}>{processContent("requires:")}</span>
//       {prerequisites.map((p, i) => <RefBadge key={i} item={p} />)}
//     </div>
//   );
// }

// /* ─── default data ─── */
// const DEFAULT_ITEMS = [
//   { expr: "2x + 3 = 11", tag: "given" },
//   { expr: "2x = 8", operation: "subtract 3" },
//   { expr: "x = 4", operation: "divide by 2" },
// ];

// /* ═══════════════════════════════════════════
//    MAIN COMPONENT
//    ═══════════════════════════════════════════ */
// export default function MathDerivation(derivationConfig) {
//   const {
//     items = DEFAULT_ITEMS,
//     title = "",
//     variant = "proof",
//     passageStyle = "bar",
//     prerequisites,
//     conclusion,
//     showStepNumbers = true,
//     compact = false,
//   } = derivationConfig || {};

//   const grouped = useMemo(() => groupItems(items), [items]);

//   /* ─── new variants: dispatch ─── */
//   const NEW_VARIANTS = {
//     timeline:  TimelineVariant,
//     twoColumn: TwoColumnVariant,
//     narrative: NarrativeVariant,
//     checklist: ChecklistVariant,
//     compact:   CompactVariant,
//     focus:     FocusVariant,
//   };

//   if (NEW_VARIANTS[variant]) {
//     const VariantComp = NEW_VARIANTS[variant];
//     return (
//       <div style={compact ? S.wrapCompact : S.wrap}>
//         {title && (
//           <div style={{ fontSize: 14, fontWeight: 500, color: "#1E293B", marginBottom: 8 }}>
//             {processContent(title)}
//           </div>
//         )}
//         <Prerequisites prerequisites={prerequisites} />
//         <VariantComp grouped={grouped} />
//         {conclusion && <div style={S.conclusion}>{processContent(conclusion)}</div>}
//       </div>
//     );
//   }

//   /* ─── existing variants (proof + rail): preserved logic ─── */
//   let stepCounter = 0;

//   const renderItem = (item, idx, arr) => {
//     if (item.__group) {
//       return (
//         <div key={`g-${idx}`} style={S.group}>
//           <div style={S.groupLabel}>{processContent(item.__group)}</div>
//           {item.items.map((gi, gi2) => renderItem(gi, `${idx}-${gi2}`, item.items))}
//         </div>
//       );
//     }

//     if (isPassageItem(item)) {
//       if (variant === "rail") {
//         return (
//           <div key={`p-${idx}`}>
//             <div style={S.conn}><span style={S.connRail} /><span style={S.connDot} /></div>
//             <PassageBlock item={item} passageStyle={passageStyle} />
//           </div>
//         );
//       }
//       return <PassageBlock key={`p-${idx}`} item={item} passageStyle={passageStyle} />;
//     }

//     if (isStepItem(item)) {
//       stepCounter++;
//       const num = stepCounter;
//       const isLast = (() => {
//         for (let j = (typeof idx === "string" ? arr.length : grouped.length) - 1; j >= 0; j--) {
//           const candidate = typeof idx === "string" ? arr[j] : grouped[j];
//           if (candidate?.__group) {
//             const lastInGroup = candidate.items[candidate.items.length - 1];
//             if (isStepItem(lastInGroup)) return lastInGroup === item;
//           }
//           if (isStepItem(candidate)) return candidate === item;
//         }
//         return false;
//       })();

//       if (variant === "rail") {
//         const isFirst = num === 1;
//         return (
//           <div key={`s-${idx}`}>
//             {num > 1 && <div style={S.conn}><span style={S.connRail} /><span style={S.connDot} /></div>}
//             <RailStep item={item} stepNum={num} isFirst={isFirst} isLast={isLast} />
//           </div>
//         );
//       }

//       return (
//         <StepCard
//           key={`s-${idx}`}
//           item={item}
//           stepNum={num}
//           showNum={showStepNumbers}
//           isLast={isLast}
//         />
//       );
//     }

//     return null;
//   };

//   stepCounter = 0;

//   return (
//     <div style={compact ? S.wrapCompact : S.wrap}>
//       {title && (
//         <div style={{ fontSize: 14, fontWeight: 500, color: "#1E293B", marginBottom: 8 }}>
//           {processContent(title)}
//         </div>
//       )}
//       <Prerequisites prerequisites={prerequisites} />
//       {variant === "rail" && (
//         <div style={{ position: "relative", padding: "8px 0" }}>
//           <div style={{ position: "absolute", left: 23, top: 22, bottom: 22, width: 2, background: "#E2E8F0" }} />
//           {grouped.map((item, i) => renderItem(item, i, grouped))}
//         </div>
//       )}
//       {variant !== "rail" && grouped.map((item, i) => renderItem(item, i, grouped))}
//       {conclusion && <div style={S.conclusion}>{processContent(conclusion)}</div>}
//     </div>
//   );
// }



import { useState, useMemo, useCallback } from "react";
import { processContent } from "../../../utils/contentProcessor";

/* ─── reference badge colors ─── */
const REF_COLORS = {
  theorem:    { bg: "#EEEDFE", color: "#3C3489" },
  axiom:      { bg: "#F1EFE8", color: "#444441" },
  lemma:      { bg: "#FBEAF0", color: "#72243E" },
  identity:   { bg: "#E1F5EE", color: "#085041" },
  property:   { bg: "#E6F1FB", color: "#0C447C" },
  definition: { bg: "#FAEEDA", color: "#633806" },
  step:       { bg: "#F1F5F9", color: "#334155" },
  cite:       { bg: "#F1F5F9", color: "#64748B" },
};

/* ─── tag colors ─── */
const TAG_COLORS = {
  given:      { bg: "#F1F5F9", color: "#475569" },
  goal:       { bg: "#DBEAFE", color: "#1E40AF" },
  key:        { bg: "#FEF3C7", color: "#92400E" },
  routine:    { bg: "transparent", color: "#94A3B8", border: "1px solid #CBD5E1" },
  assumption: { bg: "#FBEAF0", color: "#72243E" },
  conclusion: { bg: "#D1FAE5", color: "#065F46" },
};

/* ─── passage bar colors ─── */
const PASSAGE_BAR = {
  recall:      "#AFA9EC",
  motivation:  "#85B7EB",
  remark:      "#B4B2A9",
  warning:     "#F09595",
  intuition:   "#5DCAA5",
  alternative: "#FCD34D",
  transition:  "#ED93B1",
};

const PASSAGE_BADGE = {
  recall:      { bg: "#EEEDFE", color: "#3C3489" },
  motivation:  { bg: "#E6F1FB", color: "#0C447C" },
  remark:      { bg: "#F1EFE8", color: "#444441" },
  warning:     { bg: "#FCEBEB", color: "#791F1F" },
  intuition:   { bg: "#E1F5EE", color: "#085041" },
  alternative: { bg: "#FAEEDA", color: "#633806" },
  transition:  { bg: "#FBEAF0", color: "#72243E" },
};

/* ─── shared token constants (used by new variants) ─── */
const ACCENT       = "#3B82F6";
const ACCENT_LIGHT = "#DBEAFE";
const INK          = "#1E293B";
const INK_SOFT     = "#334155";
const MUTED        = "#94A3B8";
const BORDER       = "#CBD5E1";
const BORDER_SOFT  = "#E2E8F0";
const SURFACE      = "#FFFFFF";
const SURFACE_2    = "#F8FAFC";
const SURFACE_3    = "#F1F5F9";
const MONO         = "'JetBrains Mono', monospace";
const SANS         = "'DM Sans', sans-serif";
const SERIF        = "'Source Serif 4', Georgia, serif";

/* ─── styles ─── */
const S = {
  wrap: {
    maxWidth: 640,
    fontFamily: "'DM Sans', sans-serif",
  },
  wrapCompact: {
    maxWidth: 640,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13,
  },

  /* prerequisites */
  prereq: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
    alignItems: "center",
    padding: "8px 12px",
    marginBottom: 8,
    background: "#F8FAFC",
    borderRadius: 8,
  },
  prereqLabel: {
    fontSize: 11,
    color: "#94A3B8",
    marginRight: 4,
  },

  /* step card */
  step: {
    padding: "10px 14px",
    background: "#FFFFFF",
    border: "0.5px solid #E2E8F0",
    borderRadius: 8,
    margin: "4px 0",
  },
  stepTop: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "baseline",
    gap: "6px 12px",
  },
  stepNum: {
    fontSize: 11,
    fontWeight: 500,
    color: "#94A3B8",
    minWidth: 20,
    textAlign: "right",
    flexShrink: 0,
  },
  expr: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 15,
    color: "#1E293B",
    lineHeight: 1.6,
    padding: "2px 0",
  },
  operation: {
    fontSize: 12,
    color: "#64748B",
    fontStyle: "italic",
  },

  /* tag */
  tag: (type) => {
    const c = TAG_COLORS[type] || TAG_COLORS.routine;
    return {
      fontSize: 10,
      fontWeight: 500,
      padding: "2px 8px",
      borderRadius: 4,
      background: c.bg,
      color: c.color,
      border: c.border || "none",
      whiteSpace: "nowrap",
    };
  },

  /* note */
  note: {
    fontSize: 11,
    color: "#92400E",
    background: "#FEF3C7",
    padding: "2px 8px",
    borderRadius: 4,
    marginLeft: "auto",
  },

  /* basedOn badge */
  refBadge: (type, hasLink) => {
    const c = REF_COLORS[type] || REF_COLORS.cite;
    return {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontSize: 11,
      padding: "3px 10px",
      borderRadius: 99,
      background: c.bg,
      color: c.color,
      textDecoration: hasLink ? "underline" : "none",
      textDecorationStyle: "dotted",
      textUnderlineOffset: 2,
      cursor: hasLink ? "pointer" : "default",
      whiteSpace: "nowrap",
    };
  },

  basedOnRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 4,
    width: "100%",
    marginTop: 4,
  },

  backRef: {
    fontSize: 11,
    color: "#94A3B8",
  },

  citeStyle: {
    fontSize: 11,
    color: "#64748B",
    fontStyle: "italic",
    background: "#F8FAFC",
    padding: "3px 10px",
    borderRadius: 4,
  },

  highlight: {
    color: "#185FA5",
    fontWeight: 500,
    background: "#E6F1FB",
    padding: "0 3px",
    borderRadius: 2,
  },

  /* accordion */
  accToggle: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "4px 0",
    cursor: "pointer",
    background: "none",
    border: "none",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12,
    color: "#3B82F6",
    marginTop: 4,
  },

  accContent: (open) => ({
    overflow: "hidden",
    maxHeight: open ? 400 : 0,
    transition: "max-height 0.3s ease",
  }),

  detailInner: {
    padding: "6px 0 4px",
    fontSize: 13,
    color: "#64748B",
    lineHeight: 1.6,
  },

  /* substeps */
  subLine: {
    display: "flex",
    gap: 8,
    padding: "3px 0",
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 12,
    color: "#64748B",
  },
  subLabel: {
    fontSize: 11,
    color: "#94A3B8",
    fontStyle: "italic",
    fontFamily: "'DM Sans', sans-serif",
    minWidth: 36,
  },

  /* group wrapper */
  group: {
    margin: "6px 0",
    padding: "8px 12px",
    borderLeft: "3px solid #93C5FD",
    background: "#EFF6FF",
    borderRadius: 0,
  },
  groupLabel: {
    fontSize: 11,
    fontWeight: 500,
    color: "#3B82F6",
    letterSpacing: "0.03em",
    marginBottom: 6,
  },

  /* passage */
  passageBar: (type) => ({
    margin: "2px 0",
    padding: "8px 14px",
    display: "flex",
    gap: 8,
    alignItems: "flex-start",
    borderLeft: `3px solid ${PASSAGE_BAR[type] || "#B4B2A9"}`,
    borderRadius: 0,
  }),
  passageIndent: {
    margin: "2px 0 2px 34px",
    padding: "8px 12px",
    background: "#F8FAFC",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  passageBand: {
    margin: 0,
    padding: "8px 14px 8px 42px",
    display: "flex",
    flexDirection: "column",
    gap: 6,
    background: "#F8FAFC",
    borderTop: "0.5px solid #E2E8F0",
    borderBottom: "0.5px solid #E2E8F0",
  },
  passageBubble: {
    margin: "4px 0 4px 42px",
    padding: "8px 12px",
    background: "#F8FAFC",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    gap: 6,
    maxWidth: "85%",
  },
  passageInline: {
    margin: "2px 0",
    padding: "4px 14px 4px 42px",
    display: "flex",
    gap: 8,
    alignItems: "center",
  },
  passageDashed: {
    margin: "4px 14px",
    padding: "8px 12px",
    border: "0.5px dashed #CBD5E1",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  passageBadge: (type) => {
    const c = PASSAGE_BADGE[type] || PASSAGE_BADGE.remark;
    return {
      fontSize: 10,
      fontWeight: 500,
      padding: "2px 8px",
      borderRadius: 4,
      background: c.bg,
      color: c.color,
      whiteSpace: "nowrap",
      flexShrink: 0,
      marginTop: 1,
    };
  },
  passageText: {
    fontSize: 13,
    color: "#64748B",
    lineHeight: 1.5,
    fontStyle: "italic",
  },

  /* result row */
  result: {
    background: "#EFF6FF",
    border: "0.5px solid #93C5FD",
    borderRadius: 8,
    padding: "12px 14px",
    margin: "4px 0",
  },
  resultExpr: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 16,
    fontWeight: 500,
    color: "#1E293B",
  },
  qed: {
    fontSize: 12,
    fontWeight: 500,
    color: "#3B82F6",
    marginLeft: "auto",
  },

  conclusion: {
    padding: "10px 14px",
    border: "0.5px solid #93C5FD",
    borderRadius: 8,
    fontSize: 13,
    color: "#64748B",
    lineHeight: 1.5,
    marginTop: 6,
  },

  /* rail variant dot connector */
  conn: {
    display: "flex",
    justifyContent: "center",
    height: 16,
    position: "relative",
  },
  connRail: {
    position: "absolute",
    left: 23,
    top: 0,
    bottom: 0,
    width: 2,
    background: "#E2E8F0",
  },
  connDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#CBD5E1",
    alignSelf: "center",
    position: "relative",
    zIndex: 1,
  },

  /* rail step */
  railStep: {
    display: "flex",
    alignItems: "center",
    gap: 0,
    minHeight: 44,
    position: "relative",
  },
  railDot: (isStart, isEnd) => ({
    width: isStart || isEnd ? 12 : 10,
    height: isStart || isEnd ? 12 : 10,
    borderRadius: "50%",
    background: isEnd ? "#3B82F6" : isStart ? "#94A3B8" : "#CBD5E1",
    flexShrink: 0,
    position: "relative",
    zIndex: 1,
    margin: "0 18px",
  }),
  railExpr: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 15,
    color: "#1E293B",
    padding: "8px 0",
  },
  railRule: {
    fontSize: 12,
    padding: "4px 12px",
    borderRadius: 99,
    whiteSpace: "nowrap",
    marginLeft: 12,
    color: "#1E40AF",
    background: "#DBEAFE",
  },
};

/* ─── sub-components (shared) ─── */

function RefBadge({ item }) {
  if (!item) return null;
  if (item.type === "step") {
    return <span style={S.backRef}>{processContent(`\u2190 step ${item.step}`)}</span>;
  }
  if (item.type === "cite") {
    return <span style={S.citeStyle}>{processContent(item.text || "")}</span>;
  }
  const label = `${item.type}: ${item.name || ""}`;
  if (item.link) {
    return (
      <a href={item.link} style={S.refBadge(item.type, true)}>
        {processContent(label)} &#8599;
      </a>
    );
  }
  return <span style={S.refBadge(item.type, false)}>{processContent(label)}</span>;
}

function BasedOnRow({ basedOn }) {
  if (!basedOn?.length) return null;
  return (
    <div style={S.basedOnRow}>
      {basedOn.map((b, i) => <RefBadge key={i} item={b} />)}
    </div>
  );
}

function HighlightedExpr({ expr, highlights }) {
  if (!highlights?.length) {
    return <span style={S.expr}>{processContent(expr)}</span>;
  }
  const parts = [];
  let remaining = expr;
  for (const hl of highlights) {
    const idx = remaining.indexOf(hl);
    if (idx === -1) continue;
    if (idx > 0) parts.push({ text: remaining.slice(0, idx), highlight: false });
    parts.push({ text: hl, highlight: true });
    remaining = remaining.slice(idx + hl.length);
  }
  if (remaining) parts.push({ text: remaining, highlight: false });
  if (parts.length === 0) return <span style={S.expr}>{processContent(expr)}</span>;
  return (
    <span style={S.expr}>
      {parts.map((p, i) =>
        p.highlight
          ? <span key={i} style={S.highlight}>{processContent(p.text)}</span>
          : <span key={i}>{processContent(p.text)}</span>
      )}
    </span>
  );
}

function Accordion({ label, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button style={S.accToggle} onClick={() => setOpen(!open)}>
        <span style={{
          fontSize: 10,
          transition: "transform 0.2s",
          transform: open ? "rotate(90deg)" : "rotate(0deg)",
          display: "inline-block",
        }}>&#9654;</span>
        {label}
      </button>
      <div style={S.accContent(open)}>
        {children}
      </div>
    </div>
  );
}

function StepDetail({ detail }) {
  if (!detail) return null;
  return (
    <Accordion label="why?">
      <div style={S.detailInner}>{processContent(detail)}</div>
    </Accordion>
  );
}

function SubSteps({ substeps }) {
  if (!substeps?.length) return null;
  return (
    <Accordion label="substeps">
      <div style={{ padding: "4px 0" }}>
        {substeps.map((ss, i) => (
          <div key={i} style={S.subLine}>
            {ss.label && <span style={S.subLabel}>{processContent(ss.label)}:</span>}
            <span>{processContent(ss.expr)}</span>
          </div>
        ))}
      </div>
    </Accordion>
  );
}

/* ─── proof variant step card (bg override supported) ─── */
function StepCard({ item, stepNum, showNum, isLast }) {
  const baseStyle = isLast ? S.result : S.step;
  // existing variant: only bg can be overridden via item.style.bg
  const mergedStyle = item.style?.bg
    ? { ...baseStyle, background: item.style.bg }
    : baseStyle;

  return (
    <div style={mergedStyle}>
      <div style={S.stepTop}>
        {showNum && <span style={isLast ? { ...S.stepNum, color: "#3B82F6" } : S.stepNum}>{stepNum}</span>}
        <HighlightedExpr expr={item.expr} highlights={item.highlights} />
        {item.operation && <span style={S.operation}>{processContent(item.operation)}</span>}
        {item.tag && <span style={S.tag(item.tag)}>{processContent(item.tag === "key" ? "key step" : item.tag)}</span>}
        {item.note && <span style={S.note}>{processContent(item.note)}</span>}
        {isLast && <span style={S.qed}>Q.E.D.</span>}
      </div>
      <BasedOnRow basedOn={item.basedOn} />
      <StepDetail detail={item.detail} />
      <SubSteps substeps={item.substeps} />
    </div>
  );
}

/* ─── passage renderer ─── */
function PassageBlock({ item, passageStyle }) {
  const type = item.passage || "remark";
  const style = passageStyle || "bar";

  let wrapStyle;
  switch (style) {
    case "indent":  wrapStyle = S.passageIndent; break;
    case "band":    wrapStyle = S.passageBand; break;
    case "bubble":  wrapStyle = S.passageBubble; break;
    case "inline":  wrapStyle = S.passageInline; break;
    case "dashed":  wrapStyle = S.passageDashed; break;
    default:        wrapStyle = S.passageBar(type); break;
  }

  const isBarStyle = style === "bar";

  return (
    <div style={wrapStyle}>
      <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
        <span style={S.passageBadge(type)}>{processContent(type)}</span>
        {isBarStyle && <span style={S.passageText}>{processContent(item.content || "")}</span>}
      </div>
      {!isBarStyle && <span style={S.passageText}>{processContent(item.content || "")}</span>}
      <BasedOnRow basedOn={item.basedOn} />
      {item.detail && (
        <Accordion label="more">
          <div style={S.detailInner}>{processContent(item.detail)}</div>
        </Accordion>
      )}
      {item.note && <span style={S.note}>{processContent(item.note)}</span>}
    </div>
  );
}

/* ─── rail variant step (bg override supported on expr background) ─── */
function RailStep({ item, stepNum, isFirst, isLast }) {
  const exprStyle = item.style?.bg
    ? {
        ...S.railExpr,
        ...(isLast ? { fontWeight: 500 } : {}),
        background: item.style.bg,
        padding: "8px 10px",
        borderRadius: 4,
      }
    : { ...S.railExpr, ...(isLast ? { fontWeight: 500 } : {}) };

  return (
    <div style={S.railStep}>
      <span style={S.railDot(isFirst, isLast)} />
      <span style={exprStyle}>
        {processContent(item.expr)}
      </span>
      {item.operation && <span style={S.railRule}>{processContent(item.operation)}</span>}
    </div>
  );
}

/* ═══════════════════════════════════════════
   STYLE RESOLVER for new variants (full override)
   ═══════════════════════════════════════════ */
function resolveNodeStyle(item, defaults = {}) {
  const s = item.style || {};
  return {
    bg: s.bg ?? defaults.bg ?? SURFACE,
    border: s.border ?? defaults.border ?? BORDER,
    color: s.color ?? defaults.color ?? INK,
    accent: s.accent ?? defaults.accent ?? null,
    fontWeight: s.fontWeight ?? defaults.fontWeight ?? null,
  };
}

/* ═══════════════════════════════════════════
   ATOMS for new variants
   ═══════════════════════════════════════════ */

function NewTag({ label }) {
  const c = TAG_COLORS[label] || TAG_COLORS.routine;
  return (
    <span style={{
      fontSize: 10, fontWeight: 500, padding: "1px 6px",
      borderRadius: 3, background: c.bg, color: c.color,
      border: c.border || "none",
      whiteSpace: "nowrap",
    }}>{processContent(label === "key" ? "key step" : label)}</span>
  );
}

function NewOpPill({ text }) {
  return (
    <span style={{
      fontSize: 11, color: "#1E40AF",
      background: ACCENT_LIGHT, padding: "2px 8px",
      borderRadius: 99, whiteSpace: "nowrap",
    }}>{processContent(text)}</span>
  );
}

function NewPassageBadge({ type }) {
  const c = PASSAGE_BADGE[type] || PASSAGE_BADGE.remark;
  return (
    <span style={{
      fontSize: 9, fontWeight: 700, padding: "1px 6px",
      borderRadius: 3, background: c.bg, color: c.color,
      textTransform: "uppercase", letterSpacing: "0.06em",
      whiteSpace: "nowrap", flexShrink: 0,
    }}>{processContent(type)}</span>
  );
}

function StepBadge({ n, isLast, color }) {
  const bg = color || (isLast ? ACCENT : SURFACE_3);
  const textColor = (color || isLast) ? "white" : INK_SOFT;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: 22, height: 22, borderRadius: 4,
      background: bg, color: textColor,
      border: `1px solid ${color || (isLast ? ACCENT : BORDER)}`,
      fontSize: 11, fontWeight: 700, fontFamily: MONO,
      flexShrink: 0,
    }}>{n}</span>
  );
}

function NewPassageInline({ item }) {
  const c = PASSAGE_BADGE[item.passage] || PASSAGE_BADGE.remark;
  const bar = PASSAGE_BAR[item.passage] || "#B4B2A9";
  return (
    <div style={{
      padding: "8px 12px",
      borderLeft: `3px solid ${bar}`,
      background: SURFACE_2,
      border: `1px solid ${BORDER_SOFT}`,
      borderLeftWidth: 3,
      borderRadius: 4,
      display: "flex", gap: 8, alignItems: "flex-start",
    }}>
      <NewPassageBadge type={item.passage} />
      <span style={{ fontSize: 12, color: INK_SOFT, lineHeight: 1.45 }}>
        {processContent(item.content || "")}
      </span>
    </div>
  );
}

const isStepItem = (x) => !!x?.expr;
const isPassageItem = (x) => !!x?.passage;

/* expand grouped items back to a flat list with group markers */
function flattenGroups(grouped) {
  const out = [];
  grouped.forEach((it) => {
    if (it.__group) {
      out.push({ __groupStart: it.__group });
      it.items.forEach((gi) => out.push(gi));
      out.push({ __groupEnd: true });
    } else {
      out.push(it);
    }
  });
  return out;
}

/* count total steps across grouped */
function countSteps(grouped) {
  let n = 0;
  grouped.forEach((it) => {
    if (it.__group) it.items.forEach((gi) => { if (isStepItem(gi)) n++; });
    else if (isStepItem(it)) n++;
  });
  return n;
}

/* ═══════════════════════════════════════════
   VARIANT 1 — TIMELINE  (horizontal cards)
   ═══════════════════════════════════════════ */
function TimelineVariant({ grouped }) {
  const flat = useMemo(() => flattenGroups(grouped), [grouped]);
  let stepIdx = 0;

  return (
    <div style={{
      overflowX: "auto", maxWidth: "100%",
      border: `1px solid ${BORDER}`, borderRadius: 6,
      background: SURFACE_2, padding: 12,
    }}>
      <div style={{ display: "flex", alignItems: "stretch", gap: 0, minWidth: "fit-content" }}>
        {flat.map((item, i) => {
          if (item.__groupStart) {
            return (
              <div key={i} style={{
                alignSelf: "stretch", display: "flex", alignItems: "center",
                padding: "0 8px", fontSize: 10, fontWeight: 600,
                color: ACCENT, letterSpacing: "0.05em",
                textTransform: "uppercase", borderLeft: `2px solid ${ACCENT}`,
                marginLeft: 6,
              }}>{processContent(item.__groupStart)}</div>
            );
          }
          if (item.__groupEnd) return null;
          if (isPassageItem(item)) {
            const bar = PASSAGE_BAR[item.passage] || "#B4B2A9";
            return (
              <div key={i} style={{
                padding: "8px 10px", margin: "10px 4px",
                background: SURFACE, border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${bar}`,
                borderRadius: 4, width: 170, flexShrink: 0,
                display: "flex", flexDirection: "column", gap: 6,
              }}>
                <NewPassageBadge type={item.passage} />
                <span style={{ fontSize: 11, color: INK_SOFT, lineHeight: 1.4 }}>
                  {processContent(item.content || "")}
                </span>
              </div>
            );
          }
          if (!isStepItem(item)) return null;
          stepIdx++;
          const localIdx = stepIdx;
          const s = resolveNodeStyle(item, { color: INK });
          return (
            <div key={i} style={{ display: "flex", alignItems: "stretch" }}>
              <div style={{
                padding: "10px 12px",
                background: s.bg, border: `1px solid ${s.border}`,
                borderRadius: 4, minWidth: 180, flexShrink: 0,
                display: "flex", flexDirection: "column", gap: 6,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <StepBadge n={localIdx} color={s.accent} />
                  <div style={{
                    fontSize: 9, color: MUTED, fontWeight: 600,
                    letterSpacing: "0.06em", textTransform: "uppercase",
                  }}>Step</div>
                </div>
                <div style={{
                  fontFamily: MONO, fontSize: 13, color: s.color,
                  fontWeight: s.fontWeight || "normal",
                }}>{processContent(item.expr)}</div>
                {item.operation && <NewOpPill text={item.operation} />}
                {item.tag && <div><NewTag label={item.tag} /></div>}
              </div>
              {i < flat.length - 1 && (
                <div style={{ display: "flex", alignItems: "center", padding: "0 3px" }}>
                  <div style={{ width: 14, height: 1, background: MUTED }} />
                  <div style={{
                    width: 0, height: 0,
                    borderTop: "3px solid transparent",
                    borderBottom: "3px solid transparent",
                    borderLeft: `5px solid ${MUTED}`,
                  }} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   VARIANT 2 — TWO-COLUMN  (statement | justification)
   ═══════════════════════════════════════════ */
function TwoColumnVariant({ grouped }) {
  const flat = useMemo(() => flattenGroups(grouped), [grouped]);
  let stepIdx = 0;

  const hCell = (extra = {}) => ({
    padding: "8px 10px", background: SURFACE_3,
    borderBottom: `1px solid ${BORDER}`, borderRight: `1px solid ${BORDER_SOFT}`,
    fontSize: 10, fontWeight: 600, color: INK_SOFT,
    textTransform: "uppercase", letterSpacing: "0.06em",
    ...extra,
  });
  const dCell = (extra = {}) => ({
    padding: "10px 12px",
    borderTop: `1px solid ${BORDER}`, borderRight: `1px solid ${BORDER_SOFT}`,
    ...extra,
  });

  return (
    <div style={{
      display: "grid", gridTemplateColumns: "40px 1fr 1fr",
      maxWidth: 680, width: "100%",
      border: `1px solid ${BORDER}`, borderRadius: 6, overflow: "hidden",
      background: SURFACE,
    }}>
      <div style={hCell()}>#</div>
      <div style={hCell()}>Statement</div>
      <div style={hCell({ borderRight: "none" })}>Justification</div>

      {flat.map((item, i) => {
        if (item.__groupStart) {
          return (
            <div key={i} style={{
              gridColumn: "1 / -1", padding: "6px 12px",
              background: "#EFF6FF",
              borderTop: `1px solid ${BORDER}`,
              borderLeft: `3px solid ${ACCENT}`,
              fontSize: 11, fontWeight: 500, color: ACCENT,
              letterSpacing: "0.03em",
            }}>{processContent(item.__groupStart)}</div>
          );
        }
        if (item.__groupEnd) return null;
        if (isPassageItem(item)) {
          const bar = PASSAGE_BAR[item.passage] || "#B4B2A9";
          return (
            <div key={i} style={{
              gridColumn: "1 / -1",
              padding: "8px 12px",
              background: SURFACE_2,
              borderTop: `1px solid ${BORDER}`,
              borderLeft: `3px solid ${bar}`,
              display: "flex", gap: 8, alignItems: "flex-start",
            }}>
              <NewPassageBadge type={item.passage} />
              <span style={{ fontSize: 12, color: INK_SOFT, lineHeight: 1.45 }}>
                {processContent(item.content || "")}
              </span>
            </div>
          );
        }
        if (!isStepItem(item)) return null;
        stepIdx++;
        const localIdx = stepIdx;
        const isEven = localIdx % 2 === 0;
        const s = resolveNodeStyle(item, {
          bg: isEven ? SURFACE_2 : SURFACE,
          color: INK,
        });
        return (
          <div key={i} style={{ display: "contents" }}>
            <div style={dCell({
              color: MUTED, textAlign: "center", fontSize: 11, background: s.bg,
            })}>{localIdx}</div>
            <div style={dCell({ background: s.bg })}>
              <span style={{
                fontFamily: MONO, fontSize: 13,
                color: s.color, fontWeight: s.fontWeight || "normal",
              }}>{processContent(item.expr)}</span>
              {item.tag && <div style={{ marginTop: 3 }}><NewTag label={item.tag} /></div>}
            </div>
            <div style={dCell({
              borderRight: "none",
              background: item.style?.bg ? s.bg : (isEven ? SURFACE_3 : SURFACE_2),
            })}>
              {localIdx === 1 ? (
                <span style={{ fontSize: 11, color: MUTED, fontStyle: "italic" }}>Given</span>
              ) : (
                <>
                  {item.operation && (
                    <div style={{ fontSize: 12, color: INK_SOFT }}>
                      {processContent(item.operation)}
                    </div>
                  )}
                  {item.basedOn?.length > 0 && (
                    <div style={{ display: "flex", gap: 3, flexWrap: "wrap", marginTop: 3 }}>
                      {item.basedOn.map((r, j) => <RefBadge key={j} item={r} />)}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════
   VARIANT 3 — NARRATIVE  (prose blocks, one step per block)
   ═══════════════════════════════════════════ */
function NarrativeVariant({ grouped }) {
  const flat = useMemo(() => flattenGroups(grouped), [grouped]);
  const totalSteps = countSteps(grouped);
  let stepIdx = 0;
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <div style={{
      maxWidth: 580, width: "100%",
      display: "flex", flexDirection: "column", gap: 8,
      fontFamily: SERIF,
    }}>
      {flat.map((item, i) => {
        if (item.__groupStart) {
          return (
            <div key={i} style={{
              fontFamily: SANS, fontSize: 11, fontWeight: 600,
              color: ACCENT, letterSpacing: "0.05em",
              textTransform: "uppercase", marginTop: 4, marginBottom: 0,
              paddingLeft: 12, borderLeft: `3px solid ${ACCENT}`,
            }}>{processContent(item.__groupStart)}</div>
          );
        }
        if (item.__groupEnd) return null;
        if (isPassageItem(item)) {
          const c = PASSAGE_BADGE[item.passage] || PASSAGE_BADGE.remark;
          const bar = PASSAGE_BAR[item.passage] || "#B4B2A9";
          return (
            <div key={i} style={{
              padding: "8px 12px",
              borderLeft: `3px solid ${bar}`,
              fontSize: 13, color: INK_SOFT,
              background: SURFACE_2,
              border: `1px solid ${BORDER_SOFT}`,
              borderLeftWidth: 3,
              borderRadius: 4,
              fontStyle: "italic", lineHeight: 1.6,
              fontFamily: SANS,
            }}>
              <strong style={{
                color: c.color, fontStyle: "normal",
                fontSize: 10, textTransform: "uppercase",
                letterSpacing: "0.06em", marginRight: 6,
              }}>{processContent(item.passage)}:</strong>
              {processContent(item.content || "")}
            </div>
          );
        }
        if (!isStepItem(item)) return null;
        stepIdx++;
        const localIdx = stepIdx;
        const isFirst = localIdx === 1;
        const isFinal = localIdx === totalSteps;
        const s = resolveNodeStyle(item, {
          bg: isFinal ? "#EFF6FF" : SURFACE,
          border: isFinal ? "#93C5FD" : BORDER,
          color: INK_SOFT,
        });
        return (
          <div key={i} style={{
            display: "flex", alignItems: "flex-start", gap: 10,
            padding: "10px 12px",
            background: s.bg,
            border: `1px solid ${s.border}`,
            borderRadius: 4,
          }}>
            <StepBadge n={localIdx} isLast={isFinal} color={s.accent} />
            <div style={{
              fontSize: 14, color: s.color, lineHeight: 1.65, flex: 1,
              fontWeight: s.fontWeight || "normal",
            }}>
              {isFirst && "Start with "}
              {!isFirst && !isFinal && item.operation && `${cap(item.operation)} to obtain `}
              {!isFirst && !isFinal && !item.operation && "Then "}
              {isFinal && item.operation && `After ${item.operation}, `}
              {isFinal && !item.operation && "We arrive at "}
              <span style={{
                fontFamily: MONO, fontSize: 12,
                padding: "1px 6px", borderRadius: 3,
                background: isFinal ? ACCENT_LIGHT : SURFACE_3,
                color: isFinal ? "#1E40AF" : INK,
                fontWeight: isFinal ? 600 : 400,
              }}>{processContent(item.expr)}</span>
              {item.basedOn?.length > 0 && item.basedOn[0].name && (
                <>, by the <em style={{ color: INK }}>{processContent(item.basedOn[0].name)}</em></>
              )}.
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════
   VARIANT 4 — CHECKLIST  (interactive tick-off)
   ═══════════════════════════════════════════ */
function ChecklistVariant({ grouped }) {
  const flat = useMemo(() => flattenGroups(grouped), [grouped]);
  const [checked, setChecked] = useState(new Set());
  const toggle = useCallback((i) => {
    setChecked((prev) => {
      const s = new Set(prev);
      if (s.has(i)) s.delete(i); else s.add(i);
      return s;
    });
  }, []);
  let stepIdx = 0;

  return (
    <div style={{
      maxWidth: 560, width: "100%",
      display: "flex", flexDirection: "column", gap: 5,
    }}>
      {flat.map((item, i) => {
        if (item.__groupStart) {
          return (
            <div key={i} style={{
              fontSize: 11, fontWeight: 600, color: ACCENT,
              letterSpacing: "0.05em", textTransform: "uppercase",
              marginTop: 6, paddingLeft: 10,
              borderLeft: `3px solid ${ACCENT}`,
            }}>{processContent(item.__groupStart)}</div>
          );
        }
        if (item.__groupEnd) return null;
        if (isPassageItem(item)) {
          const bar = PASSAGE_BAR[item.passage] || "#B4B2A9";
          return (
            <div key={i} style={{
              padding: "6px 10px 6px 38px",
              borderLeft: `3px solid ${bar}`,
              background: SURFACE_2,
              border: `1px solid ${BORDER_SOFT}`,
              borderLeftWidth: 3,
              borderRadius: 4,
              display: "flex", gap: 6, alignItems: "flex-start",
            }}>
              <NewPassageBadge type={item.passage} />
              <span style={{ fontSize: 12, color: INK_SOFT, lineHeight: 1.45 }}>
                {processContent(item.content || "")}
              </span>
            </div>
          );
        }
        if (!isStepItem(item)) return null;
        stepIdx++;
        const localIdx = stepIdx;
        const isChecked = checked.has(i);
        const s = resolveNodeStyle(item, { color: INK });
        return (
          <label key={i} style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "8px 12px",
            background: isChecked ? SURFACE_3 : s.bg,
            border: `1px solid ${s.border}`,
            borderRadius: 4, cursor: "pointer",
            opacity: isChecked ? 0.6 : 1,
            transition: "opacity .15s",
          }}>
            <input
              type="checkbox" checked={isChecked} onChange={() => toggle(i)}
              style={{ width: 15, height: 15, accentColor: ACCENT, cursor: "pointer", flexShrink: 0 }}
            />
            <StepBadge n={localIdx} color={s.accent} />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
              {item.operation && (
                <div style={{ fontSize: 11, color: MUTED }}>{processContent(item.operation)}</div>
              )}
              <div style={{
                fontFamily: MONO, fontSize: 13, color: s.color,
                fontWeight: s.fontWeight || "normal",
                textDecoration: isChecked ? "line-through" : "none",
              }}>{processContent(item.expr)}</div>
            </div>
          </label>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════
   VARIANT 5 — COMPACT  (numbered table, dense)
   ═══════════════════════════════════════════ */
function CompactVariant({ grouped }) {
  const flat = useMemo(() => flattenGroups(grouped), [grouped]);
  let stepIdx = 0;

  return (
    <div style={{
      fontFamily: MONO, fontSize: 13, color: INK_SOFT,
      maxWidth: 560, width: "100%",
      border: `1px solid ${BORDER}`, borderRadius: 6,
      background: SURFACE, overflow: "hidden",
    }}>
      {flat.map((item, i) => {
        if (item.__groupStart) {
          return (
            <div key={i} style={{
              padding: "5px 10px",
              borderTop: i === 0 ? "none" : `1px solid ${BORDER_SOFT}`,
              background: "#EFF6FF",
              fontSize: 10, fontWeight: 700,
              color: ACCENT, letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontFamily: SANS,
            }}>{processContent(item.__groupStart)}</div>
          );
        }
        if (item.__groupEnd) return null;
        if (isPassageItem(item)) {
          const c = PASSAGE_BADGE[item.passage] || PASSAGE_BADGE.remark;
          const bar = PASSAGE_BAR[item.passage] || "#B4B2A9";
          return (
            <div key={i} style={{
              padding: "5px 10px 5px 40px",
              borderTop: `1px solid ${BORDER_SOFT}`,
              borderLeft: `3px solid ${bar}`,
              fontSize: 11, color: c.color,
              fontStyle: "italic", fontFamily: SANS,
              background: SURFACE_2,
            }}>
              <span style={{
                fontWeight: 700, fontStyle: "normal",
                textTransform: "uppercase", letterSpacing: "0.05em",
                marginRight: 6, fontSize: 10,
              }}>{"// "}{processContent(item.passage)}</span>
              {processContent(item.content || "")}
            </div>
          );
        }
        if (!isStepItem(item)) return null;
        stepIdx++;
        const localIdx = stepIdx;
        const isEven = localIdx % 2 === 0;
        const s = resolveNodeStyle(item, {
          bg: isEven ? SURFACE_2 : SURFACE,
          color: INK,
        });
        return (
          <div key={i} style={{
            display: "grid", gridTemplateColumns: "32px 1fr",
            borderTop: i === 0 ? "none" : `1px solid ${BORDER_SOFT}`,
            background: s.bg,
          }}>
            <div style={{
              padding: "6px 8px",
              borderRight: `1px solid ${BORDER_SOFT}`,
              background: s.accent || (isEven ? SURFACE_3 : SURFACE_2),
              color: s.accent ? "white" : MUTED,
              fontSize: 11, textAlign: "center",
              fontWeight: 600,
            }}>{localIdx}</div>
            <div style={{
              padding: "6px 10px",
              display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap",
            }}>
              <span style={{
                color: s.color, fontWeight: s.fontWeight || "normal",
              }}>{processContent(item.expr)}</span>
              {item.operation && (
                <span style={{
                  color: MUTED, fontSize: 11, fontStyle: "italic", fontFamily: SANS,
                }}>← {processContent(item.operation)}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════
   VARIANT 6 — FOCUS  (one step at a time, slideshow)
   ═══════════════════════════════════════════ */
function FocusVariant({ grouped }) {
  const flat = useMemo(() => flattenGroups(grouped).filter((x) => !x.__groupStart && !x.__groupEnd), [grouped]);
  const [idx, setIdx] = useState(0);
  const item = flat[idx];

  const stepNum = useMemo(
    () => flat.slice(0, idx + 1).filter(isStepItem).length,
    [flat, idx]
  );
  const stepTotal = useMemo(() => flat.filter(isStepItem).length, [flat]);

  if (!item) return null;
  const isP = isPassageItem(item);
  const bar = isP ? (PASSAGE_BAR[item.passage] || "#B4B2A9") : null;
  const c = isP ? (PASSAGE_BADGE[item.passage] || PASSAGE_BADGE.remark) : null;
  const s = !isP ? resolveNodeStyle(item, { color: INK }) : null;

  const navBtn = (disabled) => ({
    padding: "5px 12px",
    background: disabled ? SURFACE_3 : ACCENT,
    color: disabled ? MUTED : "white",
    border: `1px solid ${disabled ? BORDER : ACCENT}`,
    borderRadius: 4,
    fontSize: 12, fontWeight: 500,
    cursor: disabled ? "default" : "pointer",
    fontFamily: "inherit",
    opacity: disabled ? 0.5 : 1,
  });

  return (
    <div style={{ maxWidth: 540, width: "100%" }}>
      <div style={{ display: "flex", gap: 3, marginBottom: 12 }}>
        {flat.map((it, i) => (
          <div key={i} onClick={() => setIdx(i)} style={{
            flex: isPassageItem(it) ? 0.4 : 1,
            height: 4, borderRadius: 2,
            background: i === idx ? ACCENT : (i < idx ? "#93C5FD" : BORDER_SOFT),
            cursor: "pointer",
          }} />
        ))}
      </div>
      <div style={{
        padding: "16px 18px",
        background: isP ? SURFACE_2 : s.bg,
        border: `1px solid ${isP ? BORDER : s.border}`,
        borderLeft: isP
          ? `3px solid ${bar}`
          : (s.accent ? `3px solid ${s.accent}` : `1px solid ${s.border}`),
        borderRadius: 6, minHeight: 120,
        display: "flex", flexDirection: "column", gap: 10,
      }}>
        {isP ? (
          <>
            <NewPassageBadge type={item.passage} />
            <div style={{
              fontSize: 15, color: INK_SOFT, fontFamily: SERIF,
              fontStyle: "italic", lineHeight: 1.5,
            }}>{processContent(item.content || "")}</div>
          </>
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <StepBadge n={stepNum} isLast={stepNum === stepTotal} color={s.accent} />
              <div style={{
                fontSize: 10, color: MUTED, fontWeight: 600,
                letterSpacing: "0.08em", textTransform: "uppercase",
              }}>Step {stepNum} of {stepTotal}</div>
            </div>
            <div style={{
              fontFamily: MONO, fontSize: 18,
              color: s.color, letterSpacing: "-0.01em",
              fontWeight: s.fontWeight || "normal",
            }}>{processContent(item.expr)}</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {item.operation && <NewOpPill text={item.operation} />}
              {item.tag && <NewTag label={item.tag} />}
            </div>
            <BasedOnRow basedOn={item.basedOn} />
            {item.detail && (
              <Accordion label="why?">
                <div style={S.detailInner}>{processContent(item.detail)}</div>
              </Accordion>
            )}
          </>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
        <button onClick={() => setIdx(Math.max(0, idx - 1))} disabled={idx === 0} style={navBtn(idx === 0)}>← Prev</button>
        <button onClick={() => setIdx(Math.min(flat.length - 1, idx + 1))} disabled={idx === flat.length - 1} style={navBtn(idx === flat.length - 1)}>Next →</button>
      </div>
    </div>
  );
}

/* ─── group items by consecutive group key ─── */
function groupItems(items) {
  if (!items?.length) return [];

  const result = [];
  let currentGroup = null;
  let groupBuffer = [];

  const flushGroup = () => {
    if (currentGroup && groupBuffer.length) {
      result.push({ __group: currentGroup, items: [...groupBuffer] });
      groupBuffer = [];
    }
    currentGroup = null;
  };

  for (const item of items) {
    const gKey = item.group;
    if (gKey) {
      if (gKey !== currentGroup) {
        flushGroup();
        currentGroup = gKey;
      }
      groupBuffer.push(item);
    } else {
      flushGroup();
      result.push(item);
    }
  }
  flushGroup();

  return result;
}

/* ─── prerequisites ─── */
function Prerequisites({ prerequisites }) {
  if (!prerequisites?.length) return null;
  return (
    <div style={S.prereq}>
      <span style={S.prereqLabel}>{processContent("requires:")}</span>
      {prerequisites.map((p, i) => <RefBadge key={i} item={p} />)}
    </div>
  );
}

/* ─── default data ─── */
const DEFAULT_ITEMS = [
  { expr: "2x + 3 = 11", tag: "given" },
  { expr: "2x = 8", operation: "subtract 3" },
  { expr: "x = 4", operation: "divide by 2" },
];

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */
export default function MathDerivation(derivationConfig) {
  const {
    items = DEFAULT_ITEMS,
    title = "",
    variant = "proof",
    passageStyle = "bar",
    prerequisites,
    conclusion,
    showStepNumbers = true,
    compact = false,
  } = derivationConfig || {};

  const grouped = useMemo(() => groupItems(items), [items]);

  /* ─── new variants: dispatch ─── */
  const NEW_VARIANTS = {
    timeline:  TimelineVariant,
    twoColumn: TwoColumnVariant,
    narrative: NarrativeVariant,
    checklist: ChecklistVariant,
    compact:   CompactVariant,
    focus:     FocusVariant,
  };

  if (NEW_VARIANTS[variant]) {
    const VariantComp = NEW_VARIANTS[variant];
    return (
      <div style={compact ? S.wrapCompact : S.wrap}>
        {title && (
          <div style={{ fontSize: 14, fontWeight: 500, color: "#1E293B", marginBottom: 8 }}>
            {processContent(title)}
          </div>
        )}
        <Prerequisites prerequisites={prerequisites} />
        <VariantComp grouped={grouped} />
        {conclusion && <div style={S.conclusion}>{processContent(conclusion)}</div>}
      </div>
    );
  }

  /* ─── existing variants (proof + rail): preserved logic ─── */
  let stepCounter = 0;

  const renderItem = (item, idx, arr) => {
    if (item.__group) {
      return (
        <div key={`g-${idx}`} style={S.group}>
          <div style={S.groupLabel}>{processContent(item.__group)}</div>
          {item.items.map((gi, gi2) => renderItem(gi, `${idx}-${gi2}`, item.items))}
        </div>
      );
    }

    if (isPassageItem(item)) {
      if (variant === "rail") {
        return (
          <div key={`p-${idx}`}>
            <div style={S.conn}><span style={S.connRail} /><span style={S.connDot} /></div>
            <PassageBlock item={item} passageStyle={passageStyle} />
          </div>
        );
      }
      return <PassageBlock key={`p-${idx}`} item={item} passageStyle={passageStyle} />;
    }

    if (isStepItem(item)) {
      stepCounter++;
      const num = stepCounter;
      const isLast = (() => {
        for (let j = (typeof idx === "string" ? arr.length : grouped.length) - 1; j >= 0; j--) {
          const candidate = typeof idx === "string" ? arr[j] : grouped[j];
          if (candidate?.__group) {
            const lastInGroup = candidate.items[candidate.items.length - 1];
            if (isStepItem(lastInGroup)) return lastInGroup === item;
          }
          if (isStepItem(candidate)) return candidate === item;
        }
        return false;
      })();

      if (variant === "rail") {
        const isFirst = num === 1;
        return (
          <div key={`s-${idx}`}>
            {num > 1 && <div style={S.conn}><span style={S.connRail} /><span style={S.connDot} /></div>}
            <RailStep item={item} stepNum={num} isFirst={isFirst} isLast={isLast} />
          </div>
        );
      }

      return (
        <StepCard
          key={`s-${idx}`}
          item={item}
          stepNum={num}
          showNum={showStepNumbers}
          isLast={isLast}
        />
      );
    }

    return null;
  };

  stepCounter = 0;

  return (
    <div style={compact ? S.wrapCompact : S.wrap}>
      {title && (
        <div style={{ fontSize: 14, fontWeight: 500, color: "#1E293B", marginBottom: 8 }}>
          {processContent(title)}
        </div>
      )}
      <Prerequisites prerequisites={prerequisites} />
      {variant === "rail" && (
        <div style={{ position: "relative", padding: "8px 0" }}>
          <div style={{ position: "absolute", left: 23, top: 22, bottom: 22, width: 2, background: "#E2E8F0" }} />
          {grouped.map((item, i) => renderItem(item, i, grouped))}
        </div>
      )}
      {variant !== "rail" && grouped.map((item, i) => renderItem(item, i, grouped))}
      {conclusion && <div style={S.conclusion}>{processContent(conclusion)}</div>}
    </div>
  );
}