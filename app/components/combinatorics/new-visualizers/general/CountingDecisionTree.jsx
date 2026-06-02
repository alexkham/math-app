// // /components/visual-tools/scenes/CountingDecisionTree.jsx
// // Decision tree to pick the right counting formula. Click a child node in
// // the tree (or use the buttons in the right panel) to advance. The active
// // path lights up; off-path branches dim. Click any ancestor on the path to
// // backtrack — or use the "Step back" button to undo one step at a time.

// import React, { useState, useCallback, useMemo } from "react";
// import {
//   COLORS,
//   SVG_W_DEFAULT,
//   ThemeStyles, VTRoot, PageWrap, HelpBanner,
//   SceneGrid, SceneSvgWrap,
//   ControlBar, Divider,
//   RightPanel,
// } from "../shared.jsx";

// // ── Tree data ───────────────────────────────────────────────────────
// const TREE = {
//   A: { type: "q", text: "Order matters?",
//        yes: "B", no: "C", yesLabel: "Yes", noLabel: "No" },
//   B: { type: "q", text: "Repetition allowed?",
//        yes: "D", no: "E", yesLabel: "Yes", noLabel: "No" },
//   C: { type: "q", text: "Objects distinct or identical?",
//        yes: "J", no: "K", yesLabel: "Distinct", noLabel: "Identical" },
//   D: { type: "leaf", num: 2, name: "Permutation with Repetition",
//        short: "Perm. w/ Rep.",
//        formula: "nʳ",
//        desc: "Fill r positions from n distinct items, with repetition allowed. Each position is an independent choice of n options." },
//   E: { type: "q", text: "Use all n items?",
//        yes: "G", no: "F", yesLabel: "Yes (all n)", noLabel: "No (r < n)" },
//   F: { type: "leaf", num: 3, name: "Permutation without Repetition",
//        short: "Perm. w/o Rep.",
//        formula: "P(n, r) = n! / (n − r)!",
//        desc: "Ordered selection of r items from n distinct, no repetition. Also called a partial permutation." },
//   G: { type: "q", text: "Linear or Circular?",
//        yes: "H", no: "I", yesLabel: "Linear", noLabel: "Circular" },
//   H: { type: "leaf", num: 1, name: "Full Permutation",
//        short: "Full Perm.",
//        formula: "n!",
//        desc: "All orderings of n distinct items in a row." },
//   I: { type: "leaf", num: 4, name: "Circular Permutation",
//        short: "Circular Perm.",
//        formula: "(n − 1)!",
//        desc: "Arrangements around a circle — rotations counted as the same arrangement." },
//   J: { type: "q", text: "Select subset or distribute all?",
//        yes: "L", no: "M", yesLabel: "Select subset", noLabel: "Distribute all" },
//   K: { type: "q", text: "Empty cells allowed?",
//        yes: "P", no: "Q", yesLabel: "Yes (≥ 0)", noLabel: "No (≥ 1)" },
//   L: { type: "leaf", num: 5, name: "Combination",
//        short: "Combination",
//        formula: "C(n, r) = n! / (r!·(n−r)!)",
//        desc: "Unordered selection of r items from n distinct." },
//   M: { type: "q", text: "Labeled or Unlabeled groups?",
//        yes: "N", no: "O", yesLabel: "Labeled", noLabel: "Unlabeled" },
//   N: { type: "leaf", num: 7, name: "Distribution into Cells",
//        short: "Distribute",
//        formula: "kⁿ",
//        desc: "n distinct items each pick one of k labeled cells, independently." },
//   O: { type: "leaf", num: 6, name: "Partition into Groups",
//        short: "Partition",
//        formula: "n! / (n₁!·n₂!·…·nₖ!)",
//        desc: "n distinct items split into groups of fixed sizes (multinomial coefficient)." },
//   P: { type: "leaf", num: 8, name: "Weak Composition",
//        short: "Weak Comp.",
//        formula: "C(n + k − 1, k − 1)",
//        desc: "n identical items into k distinct bins; bins may be empty (stars and bars)." },
//   Q: { type: "leaf", num: 9, name: "Strong Composition",
//        short: "Strong Comp.",
//        formula: "C(n − 1, k − 1)",
//        desc: "n identical items into k distinct bins; every bin holds at least 1." },
// };

// // ── Layout ──────────────────────────────────────────────────────────
// // Everything fits inside the standard 720×540 viewBox. SVG scales via
// // width="100%" preserveAspectRatio so it adapts to the container.
// const SVG_W = SVG_W_DEFAULT;       // 720
// const SVG_H = 540;

// // 9 leaves on the bottom row at spacing 72 (centered).
// // Internal nodes positioned at the average x of their leaf descendants.
// const POS = {
//   A: { x: 324, y: 60 },
//   B: { x: 135, y: 160 },
//   C: { x: 513, y: 160 },
//   E: { x: 198, y: 270 },
//   J: { x: 414, y: 270 },
//   K: { x: 612, y: 270 },
//   G: { x: 252, y: 380 },
//   M: { x: 468, y: 380 },
//   D: { x: 72,  y: 480 },
//   F: { x: 144, y: 480 },
//   H: { x: 216, y: 480 },
//   I: { x: 288, y: 480 },
//   L: { x: 360, y: 480 },
//   N: { x: 432, y: 480 },
//   O: { x: 504, y: 480 },
//   P: { x: 576, y: 480 },
//   Q: { x: 648, y: 480 },
// };

// const LEAF_W = 64, LEAF_H = 50;
// const Q_W = 130, Q_H = 52;
// function nodeSize(id) {
//   return TREE[id].type === "leaf"
//     ? { w: LEAF_W, h: LEAF_H }
//     : { w: Q_W,    h: Q_H };
// }

// // Parent lookup (for breadcrumb)
// const PARENT = (() => {
//   const out = {};
//   for (const [id, node] of Object.entries(TREE)) {
//     if (node.type === "q") {
//       out[node.yes] = { parent: id, branch: "yes" };
//       out[node.no]  = { parent: id, branch: "no" };
//     }
//   }
//   return out;
// })();

// // ── Local style injector ────────────────────────────────────────────
// function TreeStyles() {
//   const css = `
//     .dt-breadcrumb {
//       background: ${COLORS.bg};
//       border: 1.5px solid ${COLORS.border};
//       border-radius: 6px;
//       padding: 8px 10px;
//       margin: 8px 0;
//       font-size: 12px;
//       color: ${COLORS.textDim};
//       line-height: 1.7;
//     }
//     .dt-breadcrumb b { color: ${COLORS.text}; }
//     .dt-breadcrumb .sep { color: ${COLORS.textFaint}; margin: 0 4px; }
//     .dt-choice-row { display: flex; gap: 8px; margin: 8px 0; }
//     .dt-choice-btn {
//       flex: 1; padding: 10px 12px;
//       border: 1.5px solid ${COLORS.borderStrong};
//       background: ${COLORS.bg}; color: ${COLORS.text};
//       border-radius: 6px; cursor: pointer;
//       font-size: 13px; font-weight: 600;
//       text-align: center;
//       transition: background 0.15s, border-color 0.15s;
//       font-family: inherit;
//     }
//     .dt-choice-btn:hover {
//       background: ${COLORS.accentSoft}; border-color: ${COLORS.accent};
//       color: ${COLORS.accentDeep};
//     }
//     .dt-leaf-tag {
//       display: inline-block;
//       background: ${COLORS.highlight};
//       color: white;
//       padding: 2px 8px;
//       border-radius: 4px;
//       font-family: "JetBrains Mono", monospace;
//       font-size: 11px; font-weight: 700;
//       margin-right: 6px;
//     }
//     .dt-formula {
//       background: ${COLORS.bg};
//       border: 1.5px solid ${COLORS.accentLight};
//       border-radius: 6px;
//       padding: 12px 14px;
//       margin: 10px 0;
//       font-family: "JetBrains Mono", monospace;
//       font-size: 15px; font-weight: 700;
//       color: ${COLORS.accentDeep};
//       text-align: center;
//     }
//     .dt-step-pill {
//       font-family: "JetBrains Mono", monospace;
//       font-size: 13px; color: ${COLORS.textDim};
//       margin-left: auto;
//     }
//     .dt-btn {
//       display: inline-flex; align-items: center; gap: 4px;
//       padding: 6px 12px;
//       border: 1.5px solid ${COLORS.borderStrong};
//       background: ${COLORS.surface}; color: ${COLORS.text};
//       border-radius: 6px; cursor: pointer;
//       font-size: 13px; font-weight: 500; font-family: inherit;
//     }
//     .dt-btn:hover:not(:disabled) {
//       background: ${COLORS.accentSoft}; border-color: ${COLORS.accent};
//     }
//     .dt-btn:disabled { opacity: 0.35; cursor: not-allowed; }
//     .dt-btn-primary {
//       background: ${COLORS.accent}; color: white; border-color: ${COLORS.accentDeep};
//     }
//     .dt-btn-primary:hover:not(:disabled) { background: ${COLORS.accentDeep}; }
//   `;
//   return <style dangerouslySetInnerHTML={{ __html: css }} />;
// }

// // ── Helpers ─────────────────────────────────────────────────────────
// function wrapText(s, maxCharsPerLine) {
//   const words = s.split(" ");
//   const lines = [];
//   let cur = "";
//   for (const w of words) {
//     if ((cur + " " + w).trim().length <= maxCharsPerLine) {
//       cur = (cur + " " + w).trim();
//     } else {
//       if (cur) lines.push(cur);
//       cur = w;
//     }
//   }
//   if (cur) lines.push(cur);
//   return lines;
// }

// const QUESTION_HELP = {
//   A: "If swapping two items would give a different outcome, order matters (permutations). If they're interchangeable, order doesn't matter (combinations / distributions).",
//   B: "Can the same item appear more than once? A 3-letter code with letters A-Z allows repetition; a hand of cards doesn't.",
//   C: "Are the items being distributed distinguishable from one another (like 5 different books) or indistinguishable (like 5 identical balls)?",
//   E: "Is r = n (use every item), or r < n (use only some)?",
//   G: "Linear: arrangement in a row (start and end matter). Circular: around a circle (rotations equivalent).",
//   J: "Are you choosing some items to form a set (select), or sending every item to some destination (distribute)?",
//   M: "Labeled cells: Box 1, Box 2, … are distinguishable. Unlabeled groups: just \"split into groups of these sizes\".",
//   K: "Can a cell receive zero items? \"Yes\" → weak composition; \"No\" (every cell ≥ 1) → strong composition.",
// };

// // ── Component ───────────────────────────────────────────────────────
// export default function CountingDecisionTree() {
//   const [path, setPath] = useState(["A"]);
//   const currentId = path[path.length - 1];
//   const currentNode = TREE[currentId];

//   const pathSet = useMemo(() => new Set(path), [path]);
//   const pathEdges = useMemo(() => {
//     const edges = new Set();
//     for (let i = 0; i < path.length - 1; i++) {
//       edges.add(`${path[i]}-${path[i + 1]}`);
//     }
//     return edges;
//   }, [path]);

//   const isClickable = useCallback((id) => {
//     if (pathSet.has(id)) return true;
//     const cn = TREE[currentId];
//     if (cn.type !== "q") return false;
//     return cn.yes === id || cn.no === id;
//   }, [pathSet, currentId]);

//   const navigateTo = useCallback((id) => {
//     if (path.includes(id)) {
//       const idx = path.indexOf(id);
//       setPath(path.slice(0, idx + 1));
//     } else {
//       const cn = TREE[path[path.length - 1]];
//       if (cn.type !== "q") return;
//       if (cn.yes !== id && cn.no !== id) return;
//       setPath([...path, id]);
//     }
//   }, [path]);

//   const stepBack = useCallback(() => {
//     if (path.length <= 1) return;
//     setPath(path.slice(0, -1));
//   }, [path]);

//   const reset = useCallback(() => setPath(["A"]), []);

//   return (
//     <VTRoot>
//       <ThemeStyles />
//       <TreeStyles />
//       <PageWrap>
//         <HelpBanner>
//           <b>Decision tree.</b> Answer each question by clicking a child node
//           in the tree (or use the buttons in the right panel). The active
//           path lights up; off-path branches dim. <b>Step back</b> undoes
//           one decision; clicking any node already on your path jumps back
//           to that point.
//         </HelpBanner>

//         <ControlBar>
//           <button
//             className="dt-btn dt-btn-primary"
//             onClick={reset}
//             disabled={path.length === 1}
//             type="button"
//           >↻ Restart</button>
//           <button
//             className="dt-btn"
//             onClick={stepBack}
//             disabled={path.length <= 1}
//             type="button"
//           >◀ Step back</button>
//           <Divider />
//           <span className="dt-step-pill">
//             Step {path.length} · {currentId}
//           </span>
//         </ControlBar>

//         <SceneGrid>
//           <SceneSvgWrap>
//             <svg
//               className="vt-scene-svg"
//               width="100%"
//               viewBox={`0 0 ${SVG_W} ${SVG_H}`}
//               preserveAspectRatio="xMidYMid meet"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <rect width={SVG_W} height={SVG_H} fill="#ffffff" />

//               {/* Edges first (under nodes) */}
//               {Object.entries(TREE).flatMap(([id, node]) => {
//                 if (node.type !== "q") return [];
//                 return [
//                   <TreeEdge
//                     key={`${id}-${node.yes}`}
//                     parentId={id} childId={node.yes} label={node.yesLabel}
//                     pathSet={pathSet} pathEdges={pathEdges}
//                   />,
//                   <TreeEdge
//                     key={`${id}-${node.no}`}
//                     parentId={id} childId={node.no} label={node.noLabel}
//                     pathSet={pathSet} pathEdges={pathEdges}
//                   />,
//                 ];
//               })}

//               {/* Nodes on top */}
//               {Object.entries(TREE).map(([id, node]) => (
//                 <TreeNode
//                   key={id}
//                   id={id} node={node}
//                   isCurrent={id === currentId}
//                   isInPath={pathSet.has(id)}
//                   clickable={isClickable(id)}
//                   onClick={() => navigateTo(id)}
//                 />
//               ))}
//             </svg>
//           </SceneSvgWrap>

//           <RightPanel>
//             <Breadcrumb path={path} />
//             {currentNode.type === "q" ? (
//               <QuestionPanel
//                 node={currentNode}
//                 onChoose={navigateTo}
//               />
//             ) : (
//               <LeafPanel node={currentNode} onReset={reset} />
//             )}
//           </RightPanel>
//         </SceneGrid>
//       </PageWrap>
//     </VTRoot>
//   );
// }

// // ── Sub-components ──────────────────────────────────────────────────

// function TreeEdge({ parentId, childId, label, pathSet, pathEdges }) {
//   const p = POS[parentId], c = POS[childId];
//   const pSize = nodeSize(parentId), cSize = nodeSize(childId);
//   const x1 = p.x, y1 = p.y + pSize.h / 2;
//   const x2 = c.x, y2 = c.y - cSize.h / 2;
//   const key = `${parentId}-${childId}`;
//   const onPath = pathEdges.has(key);
//   const inPath = pathSet.has(parentId) && pathSet.has(childId);
//   const visible = inPath || onPath;

//   const mx = (x1 + x2) / 2;
//   const my = (y1 + y2) / 2;
//   const dx = x2 - x1, dy = y2 - y1;
//   const len = Math.sqrt(dx * dx + dy * dy);
//   const ox = (-dy / len) * 8;
//   const oy = (dx / len) * 8;

//   const labelLen = label.length * 6 + 8;

//   return (
//     <g>
//       <line
//         x1={x1} y1={y1} x2={x2} y2={y2}
//         stroke={onPath ? COLORS.accent : COLORS.border}
//         strokeWidth={onPath ? 2.5 : 1.5}
//         opacity={visible ? 1 : 0.4}
//       />
//       <rect
//         x={mx + ox - labelLen / 2} y={my + oy - 9}
//         width={labelLen} height="18" rx="9"
//         fill={COLORS.bg}
//         stroke={onPath ? COLORS.accent : COLORS.border}
//         strokeWidth={onPath ? 1.5 : 1}
//         opacity={visible ? 1 : 0.5}
//       />
//       <text
//         x={mx + ox} y={my + oy + 1}
//         textAnchor="middle" dominantBaseline="central"
//         fill={onPath ? COLORS.accentDeep : COLORS.textDim}
//         fontSize="11" fontWeight="700"
//         fontFamily="'JetBrains Mono',monospace"
//         opacity={visible ? 1 : 0.6}
//       >
//         {label}
//       </text>
//     </g>
//   );
// }

// function TreeNode({ id, node, isCurrent, isInPath, clickable, onClick }) {
//   const p = POS[id];
//   const size = nodeSize(id);
//   const isLeaf = node.type === "leaf";

//   let fill, stroke, strokeW, textFill;
//   if (isCurrent && isLeaf) {
//     fill = COLORS.highlight; stroke = "#b45309"; strokeW = 2.5;
//     textFill = "white";
//   } else if (isCurrent) {
//     fill = COLORS.accent; stroke = COLORS.accentDeep; strokeW = 2.5;
//     textFill = "white";
//   } else if (isInPath) {
//     fill = COLORS.accentSoft; stroke = COLORS.accent; strokeW = 1.8;
//     textFill = COLORS.text;
//   } else if (isLeaf) {
//     fill = COLORS.bg; stroke = COLORS.borderStrong; strokeW = 1.5;
//     textFill = COLORS.text;
//   } else {
//     fill = COLORS.surface; stroke = COLORS.border; strokeW = 1.5;
//     textFill = COLORS.text;
//   }
//   const opacity = clickable || isInPath ? 1 : 0.4;

//   if (isLeaf) {
//     const lines = wrapText(node.short, 14);
//     return (
//       <g
//         style={clickable ? { cursor: "pointer" } : undefined}
//         opacity={opacity}
//         onClick={clickable ? onClick : undefined}
//       >
//         <rect
//           x={p.x - size.w / 2} y={p.y - size.h / 2}
//           width={size.w} height={size.h} rx="8"
//           fill={fill} stroke={stroke} strokeWidth={strokeW}
//         />
//         <text
//           x={p.x} y={p.y - 10} textAnchor="middle"
//           fill={isCurrent ? "white" : COLORS.highlight}
//           fontSize="11" fontWeight="700"
//           fontFamily="'JetBrains Mono',monospace"
//         >
//           #{node.num}
//         </text>
//         {lines.map((line, i) => (
//           <text
//             key={i}
//             x={p.x} y={p.y + 4 + i * 11} textAnchor="middle"
//             fill={textFill}
//             fontSize="9" fontWeight="600"
//             fontFamily="'JetBrains Mono',monospace"
//           >
//             {line}
//           </text>
//         ))}
//       </g>
//     );
//   }

//   const lines = wrapText(node.text, 22);
//   const totalH = lines.length * 14;
//   return (
//     <g
//       style={clickable ? { cursor: "pointer" } : undefined}
//       opacity={opacity}
//       onClick={clickable ? onClick : undefined}
//     >
//       <rect
//         x={p.x - size.w / 2} y={p.y - size.h / 2}
//         width={size.w} height={size.h} rx="8"
//         fill={fill} stroke={stroke} strokeWidth={strokeW}
//       />
//       {lines.map((line, i) => (
//         <text
//           key={i}
//           x={p.x} y={p.y - totalH / 2 + i * 14 + 10} textAnchor="middle"
//           fill={textFill}
//           fontSize="12" fontWeight="600"
//         >
//           {line}
//         </text>
//       ))}
//     </g>
//   );
// }

// function Breadcrumb({ path }) {
//   if (path.length === 0) return null;
//   const parts = [];
//   for (let i = 0; i < path.length; i++) {
//     const id = path[i];
//     const node = TREE[id];
//     if (i === 0) {
//       parts.push(
//         <span key={`n-${i}`} style={{ color: COLORS.text }}>
//           {node.text || node.name}
//         </span>
//       );
//     } else {
//       const par = PARENT[id];
//       const parentNode = TREE[par.parent];
//       const lbl = par.branch === "yes" ? parentNode.yesLabel : parentNode.noLabel;
//       parts.push(
//         <React.Fragment key={`a-${i}`}>
//           <span className="sep">→</span>
//           <span style={{ color: COLORS.accentDeep, fontWeight: 600 }}>{lbl}</span>
//           <span className="sep">→</span>
//           <span style={{ color: COLORS.text }}>{node.text || node.name}</span>
//         </React.Fragment>
//       );
//     }
//   }
//   return (
//     <div className="dt-breadcrumb">
//       <b>Path:</b> {parts}
//     </div>
//   );
// }

// function QuestionPanel({ node, onChoose }) {
//   return (
//     <>
//       <div className="vt-info-title">{node.text}</div>
//       <QuestionHelp node={node} />
//       <div className="dt-choice-row">
//         <button className="dt-choice-btn" onClick={() => onChoose(node.yes)} type="button">
//           {node.yesLabel}
//         </button>
//         <button className="dt-choice-btn" onClick={() => onChoose(node.no)} type="button">
//           {node.noLabel}
//         </button>
//       </div>
//     </>
//   );
// }

// // Look up help by matching against the question text or by node identity.
// function QuestionHelp({ node }) {
//   const id = Object.entries(TREE).find(([, n]) => n === node)?.[0];
//   const help = QUESTION_HELP[id];
//   if (!help) return null;
//   return (
//     <div style={{ color: COLORS.textDim, fontSize: 13, marginBottom: 12 }}>
//       {help}
//     </div>
//   );
// }

// function LeafPanel({ node, onReset }) {
//   return (
//     <>
//       <div className="vt-info-title">
//         <span className="dt-leaf-tag">#{node.num}</span>
//         {node.name}
//       </div>
//       <div className="dt-formula">{node.formula}</div>
//       <div style={{ color: COLORS.textDim, fontSize: 13, marginBottom: 12 }}>
//         {node.desc}
//       </div>
//       <button className="dt-btn dt-btn-primary" onClick={onReset} type="button">
//         ↻ Try again
//       </button>
//     </>
//   );
// }


// /components/visual-tools/scenes/CountingDecisionTree.jsx
// Decision tree to pick the right counting formula. Diagram on top
// (full width), question / leaf panel below.

import React, { useState, useCallback, useMemo } from "react";
import {
  COLORS,
  ThemeStyles, VTRoot, PageWrap, HelpBanner,
  ControlBar, Divider,
} from "../shared.jsx";

// ── Tree data ───────────────────────────────────────────────────────
const TREE = {
  A: { type: "q", text: "Order matters?",
       yes: "B", no: "C", yesLabel: "Yes", noLabel: "No" },
  B: { type: "q", text: "Repetition allowed?",
       yes: "D", no: "E", yesLabel: "Yes", noLabel: "No" },
  C: { type: "q", text: "Objects distinct or identical?",
       yes: "J", no: "K", yesLabel: "Distinct", noLabel: "Identical" },
  D: { type: "leaf", num: 2, name: "Permutation with Repetition",
       short: "Perm. w/ Rep.",
       formula: "nʳ",
       desc: "Fill r positions from n distinct items, with repetition allowed. Each position is an independent choice of n options." },
  E: { type: "q", text: "Use all n items?",
       yes: "G", no: "F", yesLabel: "Yes (all n)", noLabel: "No (r < n)" },
  F: { type: "leaf", num: 3, name: "Permutation without Repetition",
       short: "Perm. w/o Rep.",
       formula: "P(n, r) = n! / (n − r)!",
       desc: "Ordered selection of r items from n distinct, no repetition. Also called a partial permutation." },
  G: { type: "q", text: "Linear or Circular?",
       yes: "H", no: "I", yesLabel: "Linear", noLabel: "Circular" },
  H: { type: "leaf", num: 1, name: "Full Permutation",
       short: "Full Perm.",
       formula: "n!",
       desc: "All orderings of n distinct items in a row." },
  I: { type: "leaf", num: 4, name: "Circular Permutation",
       short: "Circular Perm.",
       formula: "(n − 1)!",
       desc: "Arrangements around a circle — rotations counted as the same arrangement." },
  J: { type: "q", text: "Select subset or distribute all?",
       yes: "L", no: "M", yesLabel: "Select subset", noLabel: "Distribute all" },
  K: { type: "q", text: "Empty cells allowed?",
       yes: "P", no: "Q", yesLabel: "Yes (≥ 0)", noLabel: "No (≥ 1)" },
  L: { type: "leaf", num: 5, name: "Combination",
       short: "Combination",
       formula: "C(n, r) = n! / (r!·(n−r)!)",
       desc: "Unordered selection of r items from n distinct." },
  M: { type: "q", text: "Labeled or Unlabeled groups?",
       yes: "N", no: "O", yesLabel: "Labeled", noLabel: "Unlabeled" },
  N: { type: "leaf", num: 7, name: "Distribution into Cells",
       short: "Distribute",
       formula: "kⁿ",
       desc: "n distinct items each pick one of k labeled cells, independently." },
  O: { type: "leaf", num: 6, name: "Partition into Groups",
       short: "Partition",
       formula: "n! / (n₁!·n₂!·…·nₖ!)",
       desc: "n distinct items split into groups of fixed sizes (multinomial coefficient)." },
  P: { type: "leaf", num: 8, name: "Weak Composition",
       short: "Weak Comp.",
       formula: "C(n + k − 1, k − 1)",
       desc: "n identical items into k distinct bins; bins may be empty (stars and bars)." },
  Q: { type: "leaf", num: 9, name: "Strong Composition",
       short: "Strong Comp.",
       formula: "C(n − 1, k − 1)",
       desc: "n identical items into k distinct bins; every bin holds at least 1." },
};

// ── Layout ──────────────────────────────────────────────────────────
// Full-width SVG: 1100 × 540 viewBox, scales to its container.
// 9 leaves spread across the bottom; internal nodes at midpoint of leaf
// descendants.
const SVG_W = 1100;
const SVG_H = 540;

const POS = {
  A: { x: 495, y: 50 },
  B: { x: 200, y: 160 },
  C: { x: 790, y: 160 },
  E: { x: 300, y: 270 },
  J: { x: 635, y: 270 },
  K: { x: 940, y: 270 },
  G: { x: 380, y: 380 },
  M: { x: 715, y: 380 },
  D: { x: 80,  y: 480 },
  F: { x: 200, y: 480 },
  H: { x: 320, y: 480 },
  I: { x: 440, y: 480 },
  L: { x: 555, y: 480 },
  N: { x: 670, y: 480 },
  O: { x: 790, y: 480 },
  P: { x: 905, y: 480 },
  Q: { x: 1020, y: 480 },
};

const LEAF_W = 96, LEAF_H = 50;
const Q_W = 170, Q_H = 52;
function nodeSize(id) {
  return TREE[id].type === "leaf"
    ? { w: LEAF_W, h: LEAF_H }
    : { w: Q_W, h: Q_H };
}

// Parent lookup (for breadcrumb)
const PARENT = (() => {
  const out = {};
  for (const [id, node] of Object.entries(TREE)) {
    if (node.type === "q") {
      out[node.yes] = { parent: id, branch: "yes" };
      out[node.no]  = { parent: id, branch: "no" };
    }
  }
  return out;
})();

// ── Local styles ────────────────────────────────────────────────────
function TreeStyles() {
  const css = `
    .dt-stack { display: flex; flex-direction: column; gap: 16px; }
    .dt-scene-wrap {
      background: ${COLORS.bg};
      border: 1.5px solid ${COLORS.border};
      border-radius: 10px; padding: 8px; overflow: hidden;
    }
    .dt-scene-svg { display: block; width: 100%; height: auto; }
    .dt-bottom-panel {
      background: ${COLORS.surface};
      border: 1.5px solid ${COLORS.border};
      border-radius: 10px; padding: 16px;
    }
    .dt-breadcrumb {
      background: ${COLORS.bg};
      border: 1.5px solid ${COLORS.border};
      border-radius: 6px; padding: 8px 10px; margin-bottom: 12px;
      font-size: 12px; color: ${COLORS.textDim}; line-height: 1.7;
    }
    .dt-breadcrumb b { color: ${COLORS.text}; }
    .dt-breadcrumb .sep { color: ${COLORS.textFaint}; margin: 0 4px; }
    .dt-title { font-weight: 700; font-size: 16px; margin-bottom: 8px; }
    .dt-help { color: ${COLORS.textDim}; font-size: 13px; margin-bottom: 12px; }
    .dt-choice-row { display: flex; gap: 8px; flex-wrap: wrap; margin: 8px 0; }
    .dt-choice-btn {
      flex: 1 1 calc(50% - 4px); min-width: 140px;
      padding: 10px 12px;
      border: 1.5px solid ${COLORS.borderStrong};
      background: ${COLORS.bg}; color: ${COLORS.text};
      border-radius: 6px; cursor: pointer;
      font-size: 13px; font-weight: 600; text-align: center;
      font-family: inherit;
      transition: background 0.15s, border-color 0.15s;
    }
    .dt-choice-btn:hover {
      background: ${COLORS.accentSoft}; border-color: ${COLORS.accent};
      color: ${COLORS.accentDeep};
    }
    .dt-back-row {
      margin-top: 10px; padding-top: 10px;
      border-top: 1.5px dashed ${COLORS.border};
      display: flex; gap: 8px;
    }
    .dt-back-btn, .dt-restart-btn {
      flex: 1; padding: 8px 12px;
      border: 1.5px solid ${COLORS.borderStrong};
      background: ${COLORS.surface}; color: ${COLORS.text};
      border-radius: 6px; cursor: pointer;
      font-size: 13px; font-weight: 500; font-family: inherit;
    }
    .dt-back-btn:hover:not(:disabled), .dt-restart-btn:hover:not(:disabled) {
      background: ${COLORS.accentSoft}; border-color: ${COLORS.accent};
    }
    .dt-back-btn:disabled, .dt-restart-btn:disabled { opacity: 0.35; cursor: not-allowed; }
    .dt-restart-btn {
      background: ${COLORS.accent}; color: white; border-color: ${COLORS.accentDeep};
    }
    .dt-restart-btn:hover:not(:disabled) { background: ${COLORS.accentDeep}; }
    .dt-leaf-tag {
      display: inline-block;
      background: ${COLORS.highlight};
      color: white;
      padding: 2px 8px;
      border-radius: 4px;
      font-family: "JetBrains Mono", monospace;
      font-size: 11px; font-weight: 700;
      margin-right: 6px;
    }
    .dt-formula {
      background: ${COLORS.bg};
      border: 1.5px solid ${COLORS.accentLight};
      border-radius: 6px; padding: 12px 14px; margin: 10px 0;
      font-family: "JetBrains Mono", monospace;
      font-size: 15px; font-weight: 700;
      color: ${COLORS.accentDeep};
      text-align: center;
    }
    .dt-step-pill {
      font-family: "JetBrains Mono", monospace;
      font-size: 13px; color: ${COLORS.textDim};
      margin-left: auto;
    }
    .dt-ctrl-btn {
      display: inline-flex; align-items: center; gap: 4px;
      padding: 6px 12px;
      border: 1.5px solid ${COLORS.borderStrong};
      background: ${COLORS.surface}; color: ${COLORS.text};
      border-radius: 6px; cursor: pointer;
      font-size: 13px; font-weight: 500; font-family: inherit;
    }
    .dt-ctrl-btn:hover:not(:disabled) {
      background: ${COLORS.accentSoft}; border-color: ${COLORS.accent};
    }
    .dt-ctrl-btn:disabled { opacity: 0.35; cursor: not-allowed; }
    .dt-ctrl-btn-primary {
      background: ${COLORS.accent}; color: white; border-color: ${COLORS.accentDeep};
    }
    .dt-ctrl-btn-primary:hover:not(:disabled) { background: ${COLORS.accentDeep}; }
  `;
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}

// ── Helpers ─────────────────────────────────────────────────────────
function wrapText(s, maxCharsPerLine) {
  const words = s.split(" ");
  const lines = [];
  let cur = "";
  for (const w of words) {
    if ((cur + " " + w).trim().length <= maxCharsPerLine) {
      cur = (cur + " " + w).trim();
    } else {
      if (cur) lines.push(cur);
      cur = w;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

const QUESTION_HELP = {
  A: "If swapping two items would give a different outcome, order matters (permutations). If they&apos;re interchangeable, order doesn&apos;t matter (combinations / distributions).",
  B: "Can the same item appear more than once? A 3-letter code with letters A-Z allows repetition; a hand of cards doesn&apos;t.",
  C: "Are the items being distributed distinguishable from one another (like 5 different books) or indistinguishable (like 5 identical balls)?",
  E: "Is r = n (use every item), or r < n (use only some)?",
  G: "Linear: arrangement in a row (start and end matter). Circular: around a circle (rotations equivalent).",
  J: "Are you choosing some items to form a set (select), or sending every item to some destination (distribute)?",
  M: "Labeled cells: Box 1, Box 2, … are distinguishable. Unlabeled groups: just &quote;split into groups of these sizes&quote;.",
  K: "Can a cell receive zero items? &quote;Yes&quote; → weak composition; &quote;No&quote; (every cell ≥ 1) → strong composition.",
};

// ── Component ───────────────────────────────────────────────────────
export default function CountingDecisionTree() {
  const [path, setPath] = useState(["A"]);
  const currentId = path[path.length - 1];
  const currentNode = TREE[currentId];

  const pathSet = useMemo(() => new Set(path), [path]);
  const pathEdges = useMemo(() => {
    const edges = new Set();
    for (let i = 0; i < path.length - 1; i++) {
      edges.add(`${path[i]}-${path[i + 1]}`);
    }
    return edges;
  }, [path]);

  const isClickable = useCallback((id) => {
    if (pathSet.has(id)) return true;
    const cn = TREE[currentId];
    if (cn.type !== "q") return false;
    return cn.yes === id || cn.no === id;
  }, [pathSet, currentId]);

  const navigateTo = useCallback((id) => {
    if (path.includes(id)) {
      const idx = path.indexOf(id);
      setPath(path.slice(0, idx + 1));
    } else {
      const cn = TREE[path[path.length - 1]];
      if (cn.type !== "q") return;
      if (cn.yes !== id && cn.no !== id) return;
      setPath([...path, id]);
    }
  }, [path]);

  const stepBack = useCallback(() => {
    if (path.length <= 1) return;
    setPath(path.slice(0, -1));
  }, [path]);

  const reset = useCallback(() => setPath(["A"]), []);

  return (
    <VTRoot>
      <ThemeStyles />
      <TreeStyles />
      <PageWrap>
        <HelpBanner>
          <b>Decision tree.</b> Answer each question by clicking a child node
          in the tree (or use the buttons in the panel below). The active
          path lights up; off-path branches dim. <b>Step back</b> undoes
          one decision; clicking any node already on your path jumps back
          to that point.
        </HelpBanner>

        <ControlBar>
          <button
            className="dt-ctrl-btn dt-ctrl-btn-primary"
            onClick={reset}
            disabled={path.length === 1}
            type="button"
          >↻ Restart</button>
          <button
            className="dt-ctrl-btn"
            onClick={stepBack}
            disabled={path.length <= 1}
            type="button"
          >◀ Step back</button>
          <Divider />
          <span className="dt-step-pill">
            Step {path.length} · {currentId}
          </span>
        </ControlBar>

        <div className="dt-stack">
          {/* Diagram on top, full width */}
          <div className="dt-scene-wrap">
            <svg
              className="dt-scene-svg"
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={SVG_W} height={SVG_H} fill="#ffffff" />

              {/* Edges (under nodes) */}
              {Object.entries(TREE).flatMap(([id, node]) => {
                if (node.type !== "q") return [];
                return [
                  <TreeEdge
                    key={`${id}-${node.yes}`}
                    parentId={id} childId={node.yes} label={node.yesLabel}
                    childIdx={0}
                    pathSet={pathSet} pathEdges={pathEdges}
                  />,
                  <TreeEdge
                    key={`${id}-${node.no}`}
                    parentId={id} childId={node.no} label={node.noLabel}
                    childIdx={1}
                    pathSet={pathSet} pathEdges={pathEdges}
                  />,
                ];
              })}

              {/* Nodes on top */}
              {Object.entries(TREE).map(([id, node]) => (
                <TreeNode
                  key={id}
                  id={id} node={node}
                  isCurrent={id === currentId}
                  isInPath={pathSet.has(id)}
                  clickable={isClickable(id)}
                  onClick={() => navigateTo(id)}
                />
              ))}
            </svg>
          </div>

          {/* Bottom panel: question or leaf */}
          <div className="dt-bottom-panel">
            <Breadcrumb path={path} />
            {currentNode.type === "q" ? (
              <QuestionPanel
                node={currentNode}
                currentId={currentId}
                onChoose={navigateTo}
                onStepBack={stepBack}
                onReset={reset}
                canStepBack={path.length > 1}
              />
            ) : (
              <LeafPanel
                node={currentNode}
                onStepBack={stepBack}
                onReset={reset}
              />
            )}
          </div>
        </div>
      </PageWrap>
    </VTRoot>
  );
}

// ── Sub-components ──────────────────────────────────────────────────

// Stagger label position along edge so left and right edges from the
// same parent don&apos;t land at the same y.
function edgeT(childIdx) {
  // childIdx 0 = yes → t=0.4, 1 = no → t=0.6
  return childIdx === 0 ? 0.4 : 0.6;
}

function TreeEdge({ parentId, childId, label, childIdx, pathSet, pathEdges }) {
  const p = POS[parentId], c = POS[childId];
  const pSize = nodeSize(parentId), cSize = nodeSize(childId);
  const x1 = p.x, y1 = p.y + pSize.h / 2;
  const x2 = c.x, y2 = c.y - cSize.h / 2;
  const key = `${parentId}-${childId}`;
  const onPath = pathEdges.has(key);
  const inPath = pathSet.has(parentId) && pathSet.has(childId);
  const visible = inPath || onPath;

  const t = edgeT(childIdx);
  const mx = x1 + (x2 - x1) * t;
  const my = y1 + (y2 - y1) * t;
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const ox = (-dy / len) * 8;
  const oy = (dx / len) * 8;
  const labelLen = label.length * 6 + 8;

  return (
    <g>
      <line
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={onPath ? COLORS.accent : COLORS.border}
        strokeWidth={onPath ? 2.5 : 1.5}
        opacity={visible ? 1 : 0.4}
      />
      <rect
        x={mx + ox - labelLen / 2} y={my + oy - 9}
        width={labelLen} height="18" rx="9"
        fill={COLORS.bg}
        stroke={onPath ? COLORS.accent : COLORS.border}
        strokeWidth={onPath ? 1.5 : 1}
        opacity={visible ? 1 : 0.5}
      />
      <text
        x={mx + ox} y={my + oy + 1}
        textAnchor="middle" dominantBaseline="central"
        fill={onPath ? COLORS.accentDeep : COLORS.textDim}
        fontSize="11" fontWeight="700"
        fontFamily="'JetBrains Mono',monospace"
        opacity={visible ? 1 : 0.6}
      >
        {label}
      </text>
    </g>
  );
}

function TreeNode({ id, node, isCurrent, isInPath, clickable, onClick }) {
  const p = POS[id];
  const size = nodeSize(id);
  const isLeaf = node.type === "leaf";

  let fill, stroke, strokeW, textFill;
  if (isCurrent && isLeaf) {
    fill = COLORS.highlight; stroke = "#b45309"; strokeW = 2.5;
    textFill = "white";
  } else if (isCurrent) {
    fill = COLORS.accent; stroke = COLORS.accentDeep; strokeW = 2.5;
    textFill = "white";
  } else if (isInPath) {
    fill = COLORS.accentSoft; stroke = COLORS.accent; strokeW = 1.8;
    textFill = COLORS.text;
  } else if (isLeaf) {
    fill = COLORS.bg; stroke = COLORS.borderStrong; strokeW = 1.5;
    textFill = COLORS.text;
  } else {
    fill = COLORS.surface; stroke = COLORS.border; strokeW = 1.5;
    textFill = COLORS.text;
  }
  const opacity = clickable || isInPath ? 1 : 0.4;

  if (isLeaf) {
    const lines = wrapText(node.short, 16);
    return (
      <g
        style={clickable ? { cursor: "pointer" } : undefined}
        opacity={opacity}
        onClick={clickable ? onClick : undefined}
      >
        <rect
          x={p.x - size.w / 2} y={p.y - size.h / 2}
          width={size.w} height={size.h} rx="8"
          fill={fill} stroke={stroke} strokeWidth={strokeW}
        />
        <text
          x={p.x} y={p.y - 10} textAnchor="middle"
          fill={isCurrent ? "white" : COLORS.highlight}
          fontSize="11" fontWeight="700"
          fontFamily="'JetBrains Mono',monospace"
        >
          #{node.num}
        </text>
        {lines.map((line, i) => (
          <text
            key={i}
            x={p.x} y={p.y + 4 + i * 11} textAnchor="middle"
            fill={textFill}
            fontSize="10" fontWeight="600"
            fontFamily="'JetBrains Mono',monospace"
          >
            {line}
          </text>
        ))}
      </g>
    );
  }

  const lines = wrapText(node.text, 26);
  const totalH = lines.length * 14;
  return (
    <g
      style={clickable ? { cursor: "pointer" } : undefined}
      opacity={opacity}
      onClick={clickable ? onClick : undefined}
    >
      <rect
        x={p.x - size.w / 2} y={p.y - size.h / 2}
        width={size.w} height={size.h} rx="8"
        fill={fill} stroke={stroke} strokeWidth={strokeW}
      />
      {lines.map((line, i) => (
        <text
          key={i}
          x={p.x} y={p.y - totalH / 2 + i * 14 + 10} textAnchor="middle"
          fill={textFill}
          fontSize="12" fontWeight="600"
        >
          {line}
        </text>
      ))}
    </g>
  );
}

function Breadcrumb({ path }) {
  if (path.length === 0) return null;
  const parts = [];
  for (let i = 0; i < path.length; i++) {
    const id = path[i];
    const node = TREE[id];
    if (i === 0) {
      parts.push(
        <span key={`n-${i}`} style={{ color: COLORS.text }}>
          {node.text || node.name}
        </span>
      );
    } else {
      const par = PARENT[id];
      const parentNode = TREE[par.parent];
      const lbl = par.branch === "yes" ? parentNode.yesLabel : parentNode.noLabel;
      parts.push(
        <React.Fragment key={`a-${i}`}>
          <span className="sep">→</span>
          <span style={{ color: COLORS.accentDeep, fontWeight: 600 }}>{lbl}</span>
          <span className="sep">→</span>
          <span style={{ color: COLORS.text }}>{node.text || node.name}</span>
        </React.Fragment>
      );
    }
  }
  return (
    <div className="dt-breadcrumb">
      <b>Path:</b> {parts}
    </div>
  );
}

function QuestionPanel({ node, currentId, onChoose, onStepBack, onReset, canStepBack }) {
  return (
    <>
      <div className="dt-title">{node.text}</div>
      <QuestionHelp id={currentId} />
      <div className="dt-choice-row">
        <button className="dt-choice-btn" onClick={() => onChoose(node.yes)} type="button">
          {node.yesLabel}
        </button>
        <button className="dt-choice-btn" onClick={() => onChoose(node.no)} type="button">
          {node.noLabel}
        </button>
      </div>
      <div className="dt-back-row">
        <button
          className="dt-back-btn"
          onClick={onStepBack}
          disabled={!canStepBack}
          type="button"
        >◀ Step back</button>
        <button
          className="dt-restart-btn"
          onClick={onReset}
          disabled={!canStepBack}
          type="button"
        >↻ Restart</button>
      </div>
    </>
  );
}

function QuestionHelp({ id }) {
  const help = QUESTION_HELP[id];
  if (!help) return null;
  return <div className="dt-help">{help}</div>;
}

function LeafPanel({ node, onStepBack, onReset }) {
  return (
    <>
      <div className="dt-title">
        <span className="dt-leaf-tag">#{node.num}</span>
        {node.name}
      </div>
      <div className="dt-help">{node.desc}</div>
      <div className="dt-formula">{node.formula}</div>
      <div className="dt-back-row">
        <button className="dt-back-btn" onClick={onStepBack} type="button">
          ◀ Step back
        </button>
        <button className="dt-restart-btn" onClick={onReset} type="button">
          ↻ Try again
        </button>
      </div>
    </>
  );
}