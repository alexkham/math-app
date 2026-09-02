// // import React, { useState, useRef, useMemo } from 'react';
// // import { Download } from 'lucide-react';
// // import styles from './VennGenerator.module.css';
// // import { CircleControls, UniverseControls } from './VennGeneratorHelpers';

// // const VennGenerator = () => {
// //   const initialUniverse = {
// //     enabled: false,
// //     label: 'U',
// //     fillColor: '#f0f0f080',
// //     borderColor: '#000000',
// //     strokeWidth: 0.3,
// //     width: 380,
// //     height: 280
// //   };

// //   const initialCircle1 = { 
// //     label: 'Set A', 
// //     fillColor: 'none',
// //     borderColor: 'black',
// //     strokeWidth: 0.5,
// //     radius: 70,
// //     x: 150,
// //     y: 150
// //   };
  
// //   const initialCircle2 = { 
// //     label: 'Set B', 
// //     fillColor: 'none',
// //     borderColor: 'black',
// //     strokeWidth: 0.5,
// //     radius: 70,
// //     x: 250,
// //     y: 150
// //   };

// //   const [universe, setUniverse] = useState(initialUniverse);
// //   const [circle1, setCircle1] = useState(initialCircle1);
// //   const [circle2, setCircle2] = useState(initialCircle2);
// //   const svgRef = useRef(null);

// //   const [operations, setOperations] = useState({
// //     intersection: { show: false, color: '#00ff0080', label: 'A ∩ B' },
// //     union: { show: false, color: '#ffa50080', label: 'A ∪ B' },
// //     differenceAB: { show: false, color: '#ff00ff80', label: 'A \\ B' },
// //     differenceBA: { show: false, color: '#ff00ff80', label: 'B \\ A' },
// //     symmetricDifference: { show: false, color: '#00ffff80', label: 'A ⊕ B' },
// //     complement: { 
// //       show: false, 
// //       color: '#ffff0080', 
// //       label: '(A)ᶜ',
// //       set: 'A'
// //     },
// //   });

// //   const calculateIntersection = useMemo(() => {
// //     const dx = circle2.x - circle1.x;
// //     const dy = circle2.y - circle1.y;
// //     const d = Math.sqrt(dx * dx + dy * dy);

// //     if (d > circle1.radius + circle2.radius) return null;
// //     if (d < Math.abs(circle1.radius - circle2.radius)) return null;

// //     const a = (circle1.radius * circle1.radius - circle2.radius * circle2.radius + d * d) / (2 * d);
// //     const h = Math.sqrt(circle1.radius * circle1.radius - a * a);

// //     const x2 = circle1.x + a * (circle2.x - circle1.x) / d;
// //     const y2 = circle1.y + a * (circle2.y - circle1.y) / d;

// //     const x3 = x2 + h * (circle2.y - circle1.y) / d;
// //     const y3 = y2 - h * (circle2.x - circle1.x) / d;

// //     const x4 = x2 - h * (circle2.y - circle1.y) / d;
// //     const y4 = y2 + h * (circle2.x - circle1.x) / d;

// //     return { x3, y3, x4, y4 };
// //   }, [circle1, circle2]);

// //   const intersectionPath = useMemo(() => {
// //     const intersection = calculateIntersection;
// //     if (!intersection) return '';

// //     const { x3, y3, x4, y4 } = intersection;
// //     return `
// //       M ${x3} ${y3}
// //       A ${circle1.radius} ${circle1.radius} 0 0 1 ${x4} ${y4}
// //       A ${circle2.radius} ${circle2.radius} 0 0 1 ${x3} ${y3}
// //     `;
// //   }, [calculateIntersection, circle1.radius, circle2.radius]);

// //   const unionPath = useMemo(() => {
// //     return `
// //       M ${circle1.x - circle1.radius} ${circle1.y}
// //       A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x + circle1.radius} ${circle1.y}
// //       A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x - circle1.radius} ${circle1.y}
// //       M ${circle2.x - circle2.radius} ${circle2.y}
// //       A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x + circle2.radius} ${circle2.y}
// //       A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x - circle2.radius} ${circle2.y}
// //     `;
// //   }, [circle1, circle2]);

// //   const differencePathAB = useMemo(() => {
// //     const intersection = calculateIntersection;
// //     if (!intersection) return `
// //       M ${circle1.x - circle1.radius} ${circle1.y}
// //       A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x + circle1.radius} ${circle1.y}
// //       A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x - circle1.radius} ${circle1.y}
// //     `;
  
// //     const { x3, y3, x4, y4 } = intersection;
// //     return `
// //       M ${x3} ${y3}
// //       A ${circle1.radius} ${circle1.radius} 0 1 0 ${x4} ${y4}
// //       A ${circle2.radius} ${circle2.radius} 0 0 1 ${x3} ${y3}
// //     `;
// //   }, [circle1, circle2, calculateIntersection]);
  
// //   const differencePathBA = useMemo(() => {
// //     const intersection = calculateIntersection;
// //     if (!intersection) return `
// //       M ${circle2.x - circle2.radius} ${circle2.y}
// //       A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x + circle2.radius} ${circle2.y}
// //       A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x - circle2.radius} ${circle2.y}
// //     `;
  
// //     const { x3, y3, x4, y4 } = intersection;
// //     return `
// //       M ${x3} ${y3}
// //       A ${circle2.radius} ${circle2.radius} 0 1 1 ${x4} ${y4}
// //       A ${circle1.radius} ${circle1.radius} 0 0 0 ${x3} ${y3}
// //     `;
// //   }, [circle1, circle2, calculateIntersection]);
  
// //   const symmetricDifferencePath = useMemo(() => {
// //     return `${differencePathAB} ${differencePathBA}`;
// //   }, [differencePathAB, differencePathBA]);

  
// //   const complementPath = useMemo(() => {
// //     const intersection = calculateIntersection;
    
// //     // Fallback values if there's no intersection
// //     const defaultIntersection = {
// //       x3: (circle1.x + circle2.x) / 2,
// //       y3: (circle1.y + circle2.y) / 2,
// //       x4: (circle1.x + circle2.x) / 2,
// //       y4: (circle1.y + circle2.y) / 2
// //     };
  
// //     const { x3, y3, x4, y4 } = intersection || defaultIntersection;
  
// //     const getSetPath = (set) => {
// //       switch(set) {
// //         case 'A':
// //           return `M ${circle1.x - circle1.radius} ${circle1.y}
// //                   A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x + circle1.radius} ${circle1.y}
// //                   A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x - circle1.radius} ${circle1.y}`;
// //         case 'B':
// //           return `M ${circle2.x - circle2.radius} ${circle2.y}
// //                   A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x + circle2.radius} ${circle2.y}
// //                   A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x - circle2.radius} ${circle2.y}`;
// //         case 'A ∪ B':
// //           return `${getSetPath('A')} ${getSetPath('B')}
// //                   ${intersection ? `M ${x3} ${y3}
// //                   A ${circle1.radius} ${circle1.radius} 0 0 1 ${x4} ${y4}
// //                   A ${circle2.radius} ${circle2.radius} 0 0 1 ${x3} ${y3}` : ''}`;
// //         case 'A ∩ B':
// //           return intersection ? `M ${x3} ${y3}
// //                   A ${circle1.radius} ${circle1.radius} 0 0 1 ${x4} ${y4}
// //                   A ${circle2.radius} ${circle2.radius} 0 0 1 ${x3} ${y3}` : '';
// //         default:
// //           return '';
// //       }
// //     };
  
// //     return `
// //       M 0 0
// //       H ${universe.width}
// //       V ${universe.height}
// //       H 0
// //       V 0
// //       Z
// //       ${getSetPath(operations.complement.set)}
// //     `;
// //   }, [circle1, circle2, universe, operations.complement.set, calculateIntersection]);
  
// //   const toggleOperation = (operation) => {
// //     setOperations(prev => {
// //       const newOperations = { ...prev };
// //       Object.keys(newOperations).forEach(key => {
// //         if (key === operation) {
// //           newOperations[key].show = !newOperations[key].show;
// //         } else {
// //           newOperations[key].show = false;
// //         }
// //       });
      
// //       if (operation === 'complement' && newOperations.complement.show) {
// //         setUniverse(prev => ({ ...prev, enabled: true }));
// //       }
      
// //       return newOperations;
// //     });
// //   };

// //   const isAnyOperationActive = useMemo(() => {
// //     return Object.values(operations).some(op => op.show);
// //   }, [operations]);

// //   const changeOperationColor = (operation, color) => {
// //     setOperations(prev => ({
// //       ...prev,
// //       [operation]: { ...prev[operation], color: color + '80' }
// //     }));
// //   };

// //   const changeComplementSet = (set) => {
// //     setOperations(prev => ({
// //       ...prev,
// //       complement: { 
// //         ...prev.complement, 
// //         set: set,
// //         label: `(${set})ᶜ`
// //       }
// //     }));
// //   };

// //   const downloadSVG = () => {
// //     const svgData = new XMLSerializer().serializeToString(svgRef.current);
// //     const svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
// //     const svgUrl = URL.createObjectURL(svgBlob);
// //     const downloadLink = document.createElement("a");
// //     downloadLink.href = svgUrl;
// //     downloadLink.download = "venn_diagram.svg";
// //     document.body.appendChild(downloadLink);
// //     downloadLink.click();
// //     document.body.removeChild(downloadLink);
// //   };

// //   const getLabelPosition = (operation) => {
// //     switch (operation) {
// //       case 'intersection':
// //         return { x: (circle1.x + circle2.x) / 2, y: circle1.y + circle1.radius + 20 };
// //       case 'union':
// //         return { x: (circle1.x + circle2.x) / 2, y: circle1.y - circle1.radius - 20 };
// //       case 'differenceAB':
// //         return { x: circle1.x - circle1.radius - 20, y: circle1.y };
// //       case 'differenceBA':
// //         return { x: circle2.x + circle2.radius + 20, y: circle2.y };
// //       case 'symmetricDifference':
// //         return { x: (circle1.x + circle2.x) / 2, y: circle2.y + circle2.radius + 40 };
// //       case 'complement':
// //         return { x: universe.width - 50, y: 20 };
// //       default:
// //         return { x: 0, y: 0 };
// //     }
// //   };

// //   return (
// //     <div className={styles.container}>
     
// //       <div className={styles.upperContainer}>
// //         <div className={styles.controlGroupLeft}>
// //           <div className={styles.universeToggle}>
// //             <label className={styles.label}>
// //               <input
// //                 type="checkbox"
// //                 checked={universe.enabled}
// //                 onChange={(e) => setUniverse({...universe, enabled: e.target.checked})}
// //                 className={styles.checkbox}
// //               />
// //               Enable Universe
// //             </label>
// //           </div>
// //           {universe.enabled && (
// //             <div className={styles.universeControlsContainer}>
// //               <UniverseControls universe={universe} setUniverse={setUniverse} initial={initialUniverse} />
// //             </div>
// //           )}
// //         </div>
// //         <svg className={styles.svg} ref={svgRef} width={universe.width} height={universe.height} viewBox={`0 0 ${universe.width} ${universe.height}`}>
// //           {universe.enabled && (
// //             <rect 
// //               x="0" 
// //               y="0" 
// //               width={universe.width} 
// //               height={universe.height} 
// //               fill={universe.fillColor} 
// //               stroke={universe.borderColor} 
// //               strokeWidth={universe.strokeWidth} 
// //             />
// //           )}
// //           <circle 
// //             cx={circle1.x} 
// //             cy={circle1.y} 
// //             r={circle1.radius} 
// //             fill={isAnyOperationActive ? 'none' : circle1.fillColor}
// //             stroke={circle1.borderColor} 
// //             strokeWidth={circle1.strokeWidth} 
// //           />
// //           <circle 
// //             cx={circle2.x} 
// //             cy={circle2.y} 
// //             r={circle2.radius} 
// //             fill={isAnyOperationActive ? 'none' : circle2.fillColor}
// //             stroke={circle2.borderColor} 
// //             strokeWidth={circle2.strokeWidth} 
// //           />
// //           {operations.intersection.show && (
// //             <path d={intersectionPath} fill={operations.intersection.color} stroke="none" />
// //           )}
// //           {operations.union.show && (
// //             <path d={unionPath} fill={operations.union.color} stroke="none" />
// //           )}
// //           {operations.differenceAB.show && (
// //             <path d={differencePathAB} fill={operations.differenceAB.color} stroke="none" />
// //           )}
// //           {operations.differenceBA.show && (
// //             <path d={differencePathBA} fill={operations.differenceBA.color} stroke="none" />
// //           )}
// //           {operations.symmetricDifference.show && (
// //             <path d={symmetricDifferencePath} fill={operations.symmetricDifference.color} stroke="none" />
// //           )}
// //           {/* {operations.complement.show && universe.enabled && (
// //             <path d={complementPath} fill={operations.complement.color} stroke="none" />
// //           )} */}

// // {/* {operations.complement.show && universe.enabled && (
// //   <path 
// //     d={complementPath} 
// //     fill={operations.complement.color} 
// //     fillRule="evenodd"
// //     stroke="none" 
// //   />
// // )} */}

// // {operations.complement.show && universe.enabled && (
// //   <path 
// //     d={complementPath} 
// //     fill={operations.complement.color} 
// //     fillRule="evenodd"
// //     stroke="none" 
// //   />
// // )}
// //           {universe.enabled && <text x="10" y="20" fontSize="14">{universe.label}</text>}
// //           <text x={circle1.x} y={circle1.y} textAnchor="middle">{circle1.label}</text>
// //           <text x={circle2.x} y={circle2.y} textAnchor="middle">{circle2.label}</text>
// //           {Object.entries(operations).map(([key, { show, label }]) => {
// //             if (show) {
// //               const { x, y } = getLabelPosition(key);
// //               return (
// //                 <text
// //                   key={key}
// //                   x={x}
// //                   y={y}
// //                   textAnchor="middle"
// //                   fill="black"
// //                   fontSize="14"
// //                 >
// //                   {label}
// //                 </text>
// //               );
// //             }
// //             return null;
// //           })}
// //         </svg>
// //         <div className={styles.buttonContainer}>
// //           <button onClick={downloadSVG} className={styles.downloadButton}>
// //             <Download />
// //           </button>
// //           <div className={styles.operationsControls}>
// //             {Object.entries(operations).map(([key, { show, color, label, set }]) => (
// //               <div key={key} className={styles.operationControl}>
// //                 <label className={styles.operationLabel}>
// //                   <input
// //                     type="checkbox"
// //                     checked={show}
// //                     onChange={() => toggleOperation(key)}
// //                     className={styles.operationCheckbox}
// //                   />
// //                   {key}
// //                 </label>
// //                 <div className={styles.operationInputs}>
// //                   <input
// //                     type="text"
// //                     value={label}
// //                     onChange={(e) => setOperations(prev => ({
// //                       ...prev,
// //                       [key]: { ...prev[key], label: e.target.value }
// //                     }))}
// //                     className={styles.operationInput}
// //                     placeholder={key}
// //                   />
// //                   <input
// //                     type="color"
// //                     value={color.slice(0, 7)}
// //                     onChange={(e) => changeOperationColor(key, e.target.value)}
// //                     className={styles.operationColor}
// //                   />
// //                   {key === 'complement' && (
// //                     <select
// //                       value={set}
// //                       onChange={(e) => changeComplementSet(e.target.value)}
// //                       className={styles.complementSelect}
// //                     >
// //                       <option value="A">A</option>
// //                       <option value="B">B</option>
// //                       <option value="A ∪ B">A ∪ B</option>
// //                       <option value="A ∩ B">A ∩ B</option>
// //                     </select>
// //                   )}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //       <br />
      
// //       <div className={styles.controls}>
// //         <div className={styles.circleControlsContainer}>
// //           <CircleControls circle={circle1} setCircle={setCircle1} label="Set A" initial={initialCircle1} />
// //           <CircleControls circle={circle2} setCircle={setCircle2} label="Set B" initial={initialCircle2} />
// //         </div>
// //       </div>

// //       {/* <div className={styles.legend}>
// //         <h3>Legend</h3>
// //         {Object.entries(operations).map(([key, { show, color, label }]) => (
// //           show && (
// //             <div key={key} className={styles.legendItem}>
// //               <div
// //                 className={styles.legendColor}
// //                 style={{ backgroundColor: color }}
// //               ></div>
// //               <span>{label}</span>
// //             </div>
// //           )
// //         ))}
// //       </div> */}
// //     </div>
// //   );
// // };

// // export default VennGenerator;


// 'use client';

// // ============================================================================
// // VENN GENERATOR
// // ----------------------------------------------------------------------------
// // Expression-driven Venn diagram builder for 2-5 sets.
// //
// // Nothing here is written per operation. An expression is tokenized, parsed to
// // a tree, and evaluated once against every region of the diagram. A region is
// // a membership mask over the sets, so the number of sets is a parameter rather
// // than a rewrite. The output `highlight` array uses the same region keys as
// // VennCoreEnhanced, so a diagram built here can be pasted into an explorer.
// //
// // IMPORTANT: fix the processContent import path below to match your project.
// // If the path is wrong the whole module fails to load and VennGenerator
// // becomes undefined in its consumers.
// // ============================================================================

// import React, { useState, useMemo, useRef, useEffect, useCallback, useId } from 'react';
// import { processContent } from '../../../utils/contentProcessor';
// import {
//   DEFAULT_EXPLANATIONS,
//   NAMED_SELECTIONS,
//   DEFAULT_GEOMETRY_NOTES,
//   DEFAULT_PRESETS
// } from './vennGeneratorContent';

// // ============================================================================
// // SECTION 1 - PARSER
// // ============================================================================

// export const SET_NAMES = ['A', 'B', 'C', 'D', 'E'];

// function tokenize(src) {
//   const out = [];
//   let i = 0;
//   while (i < src.length) {
//     const c = src[i];
//     if (/\s/.test(c)) { i++; continue; }
//     if (c === '^' && src[i + 1] === 'c') { out.push({ t: 'comp' }); i += 2; continue; }
//     if ('\u1d9c\'\u2032*'.indexOf(c) > -1) { out.push({ t: 'comp' }); i++; continue; }
//     if ('\u00ac~!'.indexOf(c) > -1) { out.push({ t: 'not' }); i++; continue; }
//     if (c === '\u2229' || c === '&') { out.push({ t: 'and' }); i++; continue; }
//     if (c === '\u222a' || c === '|' || c === '+') { out.push({ t: 'or' }); i++; continue; }
//     if (c === '\\' || c === '\u2212' || c === '-') { out.push({ t: 'diff' }); i++; continue; }
//     if ('\u2295\u0394\u25b3'.indexOf(c) > -1) { out.push({ t: 'xor' }); i++; continue; }
//     if (c === '(') { out.push({ t: '(' }); i++; continue; }
//     if (c === ')') { out.push({ t: ')' }); i++; continue; }
//     if (c === '\u2205') { out.push({ t: 'empty' }); i++; continue; }
//     if (/[A-Za-z]/.test(c)) {
//       const up = c.toUpperCase();
//       if (up === 'U') { out.push({ t: 'univ' }); i++; continue; }
//       out.push({ t: 'set', name: up }); i++; continue;
//     }
//     throw new Error('Unexpected character \u201c' + c + '\u201d');
//   }
//   return out;
// }

// // Grammar, loosest binding first:
// //   or    := and (( u | (+) ) and)*
// //   and   := unary (( n | \ ) unary)*
// //   unary := NOT unary | postfix
// //   post  := atom COMPLEMENT*
// //   atom  := ( or ) | set | U | empty
// export function parseExpression(src) {
//   const tk = tokenize(src);
//   let p = 0;
//   const peek = () => tk[p];
//   const eat = (t) => (tk[p] && tk[p].t === t ? tk[p++] : null);

//   function atom() {
//     if (eat('(')) {
//       const e = orExpr();
//       if (!eat(')')) throw new Error('Missing a closing parenthesis');
//       return e;
//     }
//     const s = eat('set');
//     if (s) return { op: 'set', name: s.name };
//     if (eat('univ')) return { op: 'univ' };
//     if (eat('empty')) return { op: 'empty' };
//     const nx = peek();
//     throw new Error(nx ? 'Unexpected \u201c' + (nx.name || nx.t) + '\u201d' : 'The expression ends early');
//   }
//   function post() {
//     let a = atom();
//     while (eat('comp')) a = { op: 'not', a };
//     return a;
//   }
//   function unary() {
//     return eat('not') ? { op: 'not', a: unary() } : post();
//   }
//   function andExpr() {
//     let a = unary();
//     for (;;) {
//       if (eat('and')) a = { op: 'and', a, b: unary() };
//       else if (eat('diff')) a = { op: 'and', a, b: { op: 'not', a: unary() } };
//       else return a;
//     }
//   }
//   function orExpr() {
//     let a = andExpr();
//     for (;;) {
//       if (eat('or')) a = { op: 'or', a, b: andExpr() };
//       else if (eat('xor')) a = { op: 'xor', a, b: andExpr() };
//       else return a;
//     }
//   }
//   const tree = orExpr();
//   if (p < tk.length) {
//     const nx = tk[p];
//     throw new Error('Unexpected \u201c' + (nx.name || nx.t) + '\u201d after a complete expression');
//   }
//   return tree;
// }

// export function evalNode(node, vars) {
//   switch (node.op) {
//     case 'set': return !!vars[node.name];
//     case 'univ': return true;
//     case 'empty': return false;
//     case 'not': return !evalNode(node.a, vars);
//     case 'and': return evalNode(node.a, vars) && evalNode(node.b, vars);
//     case 'or': return evalNode(node.a, vars) || evalNode(node.b, vars);
//     case 'xor': return evalNode(node.a, vars) !== evalNode(node.b, vars);
//     default: return false;
//   }
// }

// function namesIn(node, acc) {
//   const set = acc || new Set();
//   if (node.op === 'set') set.add(node.name);
//   if (node.a) namesIn(node.a, set);
//   if (node.b) namesIn(node.b, set);
//   return set;
// }

// // ============================================================================
// // SECTION 2 - REGION TABLE
// // A region is a membership mask. Bit i is set when the point is inside set i.
// // Keys match VennCoreEnhanced: 'outside', 'A', 'A-B', 'A-B-C' style joins.
// // ============================================================================

// export function buildRegionTable(sets) {
//   const rows = [];
//   for (let m = 0; m < (1 << sets.length); m++) {
//     const vars = {};
//     sets.forEach((s, i) => { vars[s] = !!(m & (1 << i)); });
//     const inside = sets.filter((s) => vars[s]);
//     rows.push({
//       mask: m,
//       vars,
//       inside,
//       key: inside.length ? inside.join('\u2229') : 'outside',
//       label: inside.length ? inside.join('\u2229') : 'U'
//     });
//   }
//   return rows;
// }

// export function highlightFromExpression(src, sets) {
//   const table = buildRegionTable(sets);
//   const tree = parseExpression(src);
//   return table.filter((r) => evalNode(tree, r.vars)).map((r) => r.key);
// }

// // ============================================================================
// // SECTION 3 - GEOMETRY
// // Every curve is an ellipse. A circle is an ellipse with rx === ry and rot 0.
// // ============================================================================

// const EPS = 0.0001;

// function inShape(p, s) {
//   const r = (-s.rot * Math.PI) / 180;
//   const c = Math.cos(r);
//   const sn = Math.sin(r);
//   const dx = p.x - s.cx;
//   const dy = p.y - s.cy;
//   const x = dx * c - dy * sn;
//   const y = dx * sn + dy * c;
//   return (x * x) / (s.rx * s.rx) + (y * y) / (s.ry * s.ry) <= 1;
// }

// function rectPath(r) {
//   return 'M ' + r.x + ' ' + r.y +
//     ' L ' + (r.x + r.width) + ' ' + r.y +
//     ' L ' + (r.x + r.width) + ' ' + (r.y + r.height) +
//     ' L ' + r.x + ' ' + (r.y + r.height) + ' Z';
// }

// function shapePath(s) {
//   const r = (s.rot * Math.PI) / 180;
//   const c = Math.cos(r);
//   const sn = Math.sin(r);
//   const sx = s.cx - s.rx * c;
//   const sy = s.cy - s.rx * sn;
//   const ex = s.cx + s.rx * c;
//   const ey = s.cy + s.rx * sn;
//   return 'M ' + sx + ' ' + sy +
//     ' A ' + s.rx + ' ' + s.ry + ' ' + s.rot + ' 1 0 ' + ex + ' ' + ey +
//     ' A ' + s.rx + ' ' + s.ry + ' ' + s.rot + ' 1 0 ' + sx + ' ' + sy + ' Z';
// }

// export function classifyPair(a, b) {
//   const d = Math.hypot(b.cx - a.cx, b.cy - a.cy);
//   const rA = a.rx;
//   const rB = b.rx;
//   if (d < EPS && Math.abs(rA - rB) < EPS) return { type: 'equal' };
//   if (d > rA + rB - EPS) return { type: 'disjoint' };
//   if (d + Math.min(rA, rB) < Math.max(rA, rB) + EPS) {
//     const inner = rA < rB ? 'A' : 'B';
//     return { type: 'contained', inner, outer: inner === 'A' ? 'B' : 'A' };
//   }
//   const x = (rA * rA - rB * rB + d * d) / (2 * d);
//   const h = Math.sqrt(Math.max(0, rA * rA - x * x));
//   const dx = b.cx - a.cx;
//   const dy = b.cy - a.cy;
//   const px = a.cx + (x * dx) / d;
//   const py = a.cy + (x * dy) / d;
//   const p1 = { x: px + (h * dy) / d, y: py - (h * dx) / d };
//   const p2 = { x: px - (h * dy) / d, y: py + (h * dx) / d };
//   return { type: 'overlapping', points: p1.y < p2.y ? { top: p1, bottom: p2 } : { top: p2, bottom: p1 } };
// }

// // Exact analytic region paths for two circles, keyed by membership mask.
// function twoSetPaths(a, b, uRect) {
//   const cls = classifyPair(a, b);
//   const rA = a.rx;
//   const rB = b.rx;
//   let boundary;
//   if (cls.type === 'overlapping') {
//     const { top, bottom } = cls.points;
//     boundary = 'M ' + top.x + ' ' + top.y +
//       ' A ' + rA + ' ' + rA + ' 0 1 0 ' + bottom.x + ' ' + bottom.y +
//       ' A ' + rB + ' ' + rB + ' 0 1 0 ' + top.x + ' ' + top.y + ' Z';
//   } else if (cls.type === 'disjoint') {
//     boundary = shapePath(a) + ' ' + shapePath(b);
//   } else if (cls.type === 'contained') {
//     boundary = shapePath(cls.outer === 'A' ? a : b);
//   } else {
//     boundary = shapePath(a);
//   }

//   const out = { 0: rectPath(uRect) + ' ' + boundary };
//   if (cls.type === 'overlapping') {
//     const { top, bottom } = cls.points;
//     out[1] = 'M ' + top.x + ' ' + top.y +
//       ' A ' + rA + ' ' + rA + ' 0 1 0 ' + bottom.x + ' ' + bottom.y +
//       ' A ' + rB + ' ' + rB + ' 0 0 1 ' + top.x + ' ' + top.y + ' Z';
//     out[2] = 'M ' + top.x + ' ' + top.y +
//       ' A ' + rB + ' ' + rB + ' 0 1 1 ' + bottom.x + ' ' + bottom.y +
//       ' A ' + rA + ' ' + rA + ' 0 0 0 ' + top.x + ' ' + top.y + ' Z';
//     out[3] = 'M ' + top.x + ' ' + top.y +
//       ' A ' + rA + ' ' + rA + ' 0 0 1 ' + bottom.x + ' ' + bottom.y +
//       ' A ' + rB + ' ' + rB + ' 0 0 1 ' + top.x + ' ' + top.y + ' Z';
//   } else if (cls.type === 'disjoint') {
//     out[1] = shapePath(a);
//     out[2] = shapePath(b);
//   } else if (cls.type === 'contained') {
//     const innerS = cls.inner === 'A' ? a : b;
//     const outerS = cls.outer === 'A' ? a : b;
//     const annulus = shapePath(outerS) + ' ' + shapePath(innerS);
//     if (cls.inner === 'A') out[2] = annulus; else out[1] = annulus;
//     out[3] = shapePath(innerS);
//   } else {
//     out[3] = shapePath(a);
//   }
//   return { paths: out, classification: cls };
// }

// // ----------------------------------------------------------------------------
// // Layouts. The 4- and 5-set arrangements are the published ellipse
// // constructions; both were checked by sampling every pixel of the canvas and
// // confirming all 2^n regions are non-empty.
// // ----------------------------------------------------------------------------

// const FOUR_SET = [
//   [0.35, 0.47, 0.35, 0.20, -35],
//   [0.45, 0.57, 0.35, 0.20, -35],
//   [0.55, 0.57, 0.35, 0.20, 35],
//   [0.65, 0.47, 0.35, 0.20, 35]
// ];

// const FIVE_SET = [
//   [0.428, 0.449, 0.87, 0.50, 155],
//   [0.469, 0.543, 0.87, 0.50, 82],
//   [0.558, 0.523, 0.87, 0.50, 10],
//   [0.578, 0.432, 0.87, 0.50, 118],
//   [0.489, 0.383, 0.87, 0.50, 46]
// ];

// export function defaultLayout(n, size, W, H) {
//   const r = size;
//   const out = {};
//   if (n === 2) {
//     out.A = { cx: W / 2 - r * 0.42, cy: H / 2 - 5, rx: r, ry: r, rot: 0 };
//     out.B = { cx: W / 2 + r * 0.42, cy: H / 2 - 5, rx: r, ry: r, rot: 0 };
//   } else if (n === 3) {
//     const cx = W / 2;
//     const cy = H / 2 + 8;
//     const off = r * 0.52;
//     out.A = { cx, cy: cy - off, rx: r, ry: r, rot: 0 };
//     out.B = { cx: cx - off * 0.87, cy: cy + off * 0.5, rx: r, ry: r, rot: 0 };
//     out.C = { cx: cx + off * 0.87, cy: cy + off * 0.5, rx: r, ry: r, rot: 0 };
//   } else if (n === 4) {
//     const k = r / 112;
//     FOUR_SET.forEach((e, i) => {
//       out[SET_NAMES[i]] = {
//         cx: W / 2 + (e[0] - 0.5) * W * k,
//         cy: H / 2 + (0.48 - e[1]) * H * k,
//         rx: e[2] * W * k,
//         ry: e[3] * H * k,
//         rot: e[4]
//       };
//     });
//   } else {
//     const k = 400 * (r / 112);
//     FIVE_SET.forEach((e, i) => {
//       out[SET_NAMES[i]] = {
//         cx: W / 2 + (e[0] - 0.5044) * k,
//         cy: H / 2 - (e[1] - 0.466) * k,
//         rx: (e[2] / 2) * k,
//         ry: (e[3] / 2) * k,
//         rot: -e[4]
//       };
//     });
//   }
//   return out;
// }

// export const RELATION_LAYOUTS = {
//   Overlapping: (n, size, W, H) => defaultLayout(n, size, W, H),
//   Disjoint: (n, size, W, H) => {
//     const r = size * 0.72;
//     const out = {
//       A: { cx: W / 2 - r * 1.25, cy: H / 2, rx: r, ry: r, rot: 0 },
//       B: { cx: W / 2 + r * 1.25, cy: H / 2, rx: r, ry: r, rot: 0 }
//     };
//     if (n === 3) out.C = { cx: W / 2, cy: H / 2 + r * 1.9, rx: r, ry: r, rot: 0 };
//     return out;
//   },
//   'A \u2286 B': (n, size, W, H) => {
//     const out = {
//       B: { cx: W / 2, cy: H / 2, rx: size * 1.25, ry: size * 1.25, rot: 0 },
//       A: { cx: W / 2 + 22, cy: H / 2 + 10, rx: size * 0.5, ry: size * 0.5, rot: 0 }
//     };
//     if (n === 3) out.C = { cx: W / 2 - 34, cy: H / 2 - 22, rx: size * 0.5, ry: size * 0.5, rot: 0 };
//     return out;
//   },
//   'A = B': (n, size, W, H) => {
//     const out = {
//       A: { cx: W / 2, cy: H / 2, rx: size, ry: size, rot: 0 },
//       B: { cx: W / 2, cy: H / 2, rx: size, ry: size, rot: 0 }
//     };
//     if (n === 3) out.C = { cx: W / 2, cy: H / 2 + size * 0.6, rx: size, ry: size, rot: 0 };
//     return out;
//   }
// };

// // ============================================================================
// // SECTION 4 - ELEMENT PLACEMENT
// // Elements are never positioned by hand. The plane is grid-sampled once, each
// // sample bucketed by its region mask, then chips are packed into the bucket
// // their membership selects.
// // ============================================================================

// export function parseElementText(text, sets) {
//   const all = new Map();
//   String(text || '').split(/\n+/).forEach((line) => {
//     const m = line.match(/^\s*([A-Za-z])\s*[=:]\s*(.*)$/);
//     if (!m) return;
//     const name = m[1].toUpperCase();
//     m[2].split(/[,;]+/).map((s) => s.trim()).filter(Boolean).forEach((v) => {
//       if (!all.has(v)) all.set(v, new Set());
//       if (name !== 'U') all.get(v).add(name);
//     });
//   });
//   const byMask = {};
//   all.forEach((memberOf, value) => {
//     let mask = 0;
//     sets.forEach((s, i) => { if (memberOf.has(s)) mask |= (1 << i); });
//     if (!byMask[mask]) byMask[mask] = [];
//     byMask[mask].push(value);
//   });
//   return byMask;
// }

// function maskAt(p, sets, shapes) {
//   let m = 0;
//   sets.forEach((s, i) => { if (inShape(p, shapes[s])) m |= (1 << i); });
//   return m;
// }

// function sampleRegions(sets, shapes, uRect, step) {
//   const buckets = {};
//   for (let x = uRect.x + step / 2; x < uRect.x + uRect.width; x += step) {
//     for (let y = uRect.y + step / 2; y < uRect.y + uRect.height; y += step) {
//       const m = maskAt({ x, y }, sets, shapes);
//       if (!buckets[m]) buckets[m] = [];
//       buckets[m].push({ x, y });
//     }
//   }
//   return buckets;
// }

// function regionCentroid(pts, sets, shapes) {
//   if (!pts || !pts.length) return null;
//   let sx = 0;
//   let sy = 0;
//   pts.forEach((p) => { sx += p.x; sy += p.y; });
//   const c = { x: sx / pts.length, y: sy / pts.length };
//   if (maskAt(c, sets, shapes) === maskAt(pts[0], sets, shapes)) return c;
//   let best = pts[0];
//   let bd = Infinity;
//   pts.forEach((p) => {
//     const d = Math.hypot(p.x - c.x, p.y - c.y);
//     if (d < bd) { bd = d; best = p; }
//   });
//   return best;
// }

// function packPoints(pts, count, anchor) {
//   if (!pts || !pts.length || !count) return [];
//   const a = anchor || pts[0];
//   const sorted = pts.slice().sort((p, q) =>
//     Math.hypot(p.x - a.x, p.y - a.y) - Math.hypot(q.x - a.x, q.y - a.y));
//   for (let d = 40; d >= 10; d -= 4) {
//     const picked = [];
//     for (let i = 0; i < sorted.length; i++) {
//       const p = sorted[i];
//       let ok = true;
//       for (let j = 0; j < picked.length; j++) {
//         if (Math.hypot(picked[j].x - p.x, picked[j].y - p.y) < d) { ok = false; break; }
//       }
//       if (ok) picked.push(p);
//       if (picked.length === count) return picked;
//     }
//   }
//   return sorted.slice(0, count);
// }

// // ============================================================================
// // SECTION 5 - EXPLANATIONS
// // A resolver picks an id from the current state. The id is looked up in the
// // `explanations` prop first, then in these defaults. A title or body may be a
// // string or a function of the context object. Strings are written for
// // processContent, so math and links use its syntax.
// // ============================================================================

// function resolveExplanationId(ctx) {
//   if (ctx.error) return ctx.errorKind === 'unknown' ? 'unknown-set' : 'error';
//   if (!ctx.expression) return 'empty';
//   if (ctx.compare === true) return 'identity-holds';
//   if (ctx.compare === false) return 'identity-fails';
//   if (ctx.count === 0) return 'nothing';
//   if (ctx.count === ctx.total) return 'everything';
//   const named = (NAMED_SELECTIONS[ctx.sets.length] || {})[ctx.signature];
//   return named || 'general';
// }

// // ============================================================================
// // SECTION 6 - STYLES
// // Bump the version in CSS_ID whenever a rule below changes. Injection under a
// // previously used id is skipped, so an unversioned edit silently does nothing.
// // ============================================================================

// const CSS_ID = 'venn-generator-styles-v1';

// const CSS = `
// .vg-root {
//   --vg-ink: #131720;
//   --vg-ink-soft: #5a6472;
//   --vg-panel: #ffffff;
//   --vg-rule: #c2ccd8;
//   --vg-rule-soft: #e3e9ef;
//   --vg-accent: #2f4fd8;
//   --vg-accent-soft: #eaeeff;
//   --vg-flag: #c0392b;
//   --vg-ok: #1a7f4b;
//   --vg-math: "Cambria Math", "Latin Modern Math", Georgia, "Times New Roman", serif;
//   --vg-mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
//   color: var(--vg-ink);
//   font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//   font-size: 14px;
//   line-height: 1.45;
//   width: 100%;
// }
// .vg-root *, .vg-root *::before, .vg-root *::after { box-sizing: border-box; }
// .vg-grid {
//   display: grid;
//   grid-template-columns: minmax(0, 1.35fr) minmax(320px, 1fr);
//   gap: 18px;
//   align-items: start;
// }
// @media (max-width: 900px) { .vg-grid { grid-template-columns: 1fr; } }
// .vg-panel { background: var(--vg-panel); border: 1px solid var(--vg-rule); border-radius: 10px; }
// .vg-panel + .vg-panel { margin-top: 14px; }
// .vg-panel-head {
//   display: flex; align-items: center; justify-content: space-between;
//   gap: 10px; padding: 10px 16px; border-bottom: 1px solid var(--vg-rule-soft);
// }
// .vg-panel-head h3 {
//   margin: 0; font-size: 10.5px; font-weight: 600;
//   letter-spacing: 0.11em; text-transform: uppercase; color: var(--vg-ink-soft);
// }
// .vg-panel-body { padding: 16px; }
// .vg-stage { padding: 10px; display: flex; justify-content: center; border-radius: 10px 10px 0 0; background: #f4f6f8; }
// .vg-svg {
//   width: 100%; height: auto; max-width: 620px; background: #ffffff;
//   border-radius: 6px; box-shadow: 0 1px 3px rgba(19, 23, 32, 0.14); touch-action: none;
// }
// .vg-grip { cursor: grab; }
// .vg-grip:active { cursor: grabbing; }
// .vg-setcount { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
// .vg-setcount-label { font-size: 12.5px; color: var(--vg-ink-soft); }
// .vg-setcount-btns { display: flex; border: 1px solid var(--vg-rule); border-radius: 6px; overflow: hidden; }
// .vg-setcount-btns button {
//   font: inherit; font-size: 12.5px; border: 0; background: #ffffff; color: var(--vg-ink-soft);
//   padding: 6px 14px; cursor: pointer; border-right: 1px solid var(--vg-rule-soft);
// }
// .vg-setcount-btns button:last-child { border-right: 0; }
// .vg-setcount-btns button[aria-pressed="true"] { background: var(--vg-accent); color: #ffffff; }
// .vg-setcount-hint { margin: 8px 0 0; font-size: 11.5px; line-height: 1.55; color: var(--vg-ink-soft); }
// .vg-exprline { display: flex; gap: 8px; }
// .vg-expr {
//   flex: 1; min-width: 0; font-family: var(--vg-math); font-size: 19px;
//   padding: 8px 12px; border: 1px solid var(--vg-rule); border-radius: 6px;
//   background: #ffffff; color: var(--vg-ink);
// }
// .vg-expr:focus { outline: 2px solid var(--vg-accent); outline-offset: -1px; border-color: var(--vg-accent); }
// .vg-expr.vg-bad { border-color: var(--vg-flag); background: #fff6f5; }
// .vg-pal { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 8px; }
// .vg-pal button {
//   font-family: var(--vg-math); font-size: 16px; line-height: 1; min-width: 34px;
//   padding: 7px 8px; border: 1px solid var(--vg-rule); border-radius: 5px;
//   background: #ffffff; color: var(--vg-ink); cursor: pointer;
// }
// .vg-pal button:hover { background: var(--vg-accent-soft); border-color: var(--vg-accent); }
// .vg-pal-gap { width: 8px; min-width: 8px; }
// .vg-err { color: var(--vg-flag); font-size: 12px; margin-top: 7px; min-height: 16px; font-family: var(--vg-mono); }
// .vg-strip { display: flex; gap: 3px; margin-top: 2px; overflow-x: auto; padding-bottom: 3px; }
// .vg-strip.vg-wrapped { flex-wrap: wrap; overflow: visible; }
// .vg-cell {
//   flex: 1 0 auto; min-width: 54px; border: 1px solid var(--vg-rule-soft);
//   border-radius: 5px; padding: 6px 5px 5px; text-align: center; background: #fbfcfd;
// }
// .vg-strip.vg-wrapped .vg-cell { min-width: 0; flex: 0 0 auto; padding: 5px 6px; }
// .vg-cell.vg-on { background: var(--vg-accent); border-color: var(--vg-accent); }
// .vg-dots { display: flex; justify-content: center; gap: 3px; }
// .vg-dot { width: 7px; height: 7px; border-radius: 50%; border: 1.2px solid var(--vg-ink-soft); }
// .vg-dot.vg-in { background: var(--vg-ink-soft); }
// .vg-cell.vg-on .vg-dot { border-color: #ffffff; }
// .vg-cell.vg-on .vg-dot.vg-in { background: #ffffff; }
// .vg-cell-nm { font-family: var(--vg-math); font-size: 12px; color: var(--vg-ink-soft); white-space: nowrap; margin-top: 4px; }
// .vg-cell.vg-on .vg-cell-nm { color: #ffffff; }
// .vg-cmp { display: flex; align-items: center; gap: 9px; margin-top: 14px; }
// .vg-cmp-label { font-size: 12px; color: var(--vg-ink-soft); flex: 0 0 auto; }
// .vg-cmp input {
//   flex: 1; min-width: 0; font-family: var(--vg-math); font-size: 16px;
//   padding: 6px 10px; border: 1px solid var(--vg-rule); border-radius: 6px; background: #ffffff;
// }
// .vg-verdict { font-family: var(--vg-math); font-size: 20px; width: 2.2em; text-align: center; color: var(--vg-ink-soft); }
// .vg-verdict.vg-yes { color: var(--vg-ok); }
// .vg-verdict.vg-no { color: var(--vg-flag); }
// .vg-row { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
// .vg-row:last-child { margin-bottom: 0; }
// .vg-row label { font-size: 12px; color: var(--vg-ink-soft); width: 90px; flex: 0 0 90px; }
// .vg-row input[type="range"] { flex: 1; accent-color: var(--vg-accent); }
// .vg-row input[type="color"] {
//   width: 34px; height: 26px; padding: 0; border: 1px solid var(--vg-rule);
//   border-radius: 4px; background: #ffffff; cursor: pointer;
// }
// .vg-row output { font-family: var(--vg-mono); font-size: 11.5px; color: var(--vg-ink-soft); width: 44px; text-align: right; }
// .vg-row input[type="checkbox"] { accent-color: var(--vg-accent); width: 15px; height: 15px; }
// .vg-textarea {
//   width: 100%; min-height: 104px; resize: vertical; font-family: var(--vg-mono);
//   font-size: 12.5px; line-height: 1.6; padding: 9px 11px; border: 1px solid var(--vg-rule);
//   border-radius: 6px; background: #ffffff; color: var(--vg-ink);
// }
// .vg-textarea:focus { outline: 2px solid var(--vg-accent); outline-offset: -1px; }
// .vg-hint { font-size: 11.5px; line-height: 1.55; color: var(--vg-ink-soft); margin-top: 8px; }
// .vg-btn {
//   font: inherit; font-size: 12.5px; padding: 7px 13px; border-radius: 6px;
//   cursor: pointer; border: 1px solid var(--vg-rule); background: #ffffff; color: var(--vg-ink);
// }
// .vg-btn:hover { border-color: var(--vg-accent); color: var(--vg-accent); }
// .vg-btn.vg-solid { background: var(--vg-accent); border-color: var(--vg-accent); color: #ffffff; }
// .vg-btn.vg-solid:hover { background: #2540b8; color: #ffffff; }
// .vg-btnrow { display: flex; gap: 7px; flex-wrap: wrap; }
// .vg-presets { display: flex; flex-wrap: wrap; gap: 5px; }
// .vg-presets button {
//   font-family: var(--vg-math); font-size: 14px; padding: 5px 9px;
//   border: 1px solid var(--vg-rule-soft); border-radius: 5px;
//   background: #fbfcfd; color: var(--vg-ink); cursor: pointer;
// }
// .vg-presets button:hover { background: var(--vg-accent-soft); border-color: var(--vg-accent); }
// .vg-tabs { display: flex; gap: 2px; border-bottom: 2px solid var(--vg-rule-soft); padding: 0 14px; overflow-x: auto; }
// .vg-tabs button {
//   font: inherit; font-size: 12px; border: 0; background: transparent; color: var(--vg-ink-soft);
//   padding: 9px 12px; cursor: pointer; border-bottom: 2px solid transparent;
//   margin-bottom: -2px; white-space: nowrap;
// }
// .vg-tabs button[aria-selected="true"] { color: var(--vg-accent); border-bottom-color: var(--vg-accent); font-weight: 600; }
// .vg-readout { font-family: var(--vg-mono); font-size: 11.5px; color: var(--vg-ink-soft); word-break: break-all; }
// .vg-readout strong { color: var(--vg-ink); font-weight: 600; }
// .vg-exp { padding: 18px 20px 20px; }
// .vg-exp-tag {
//   display: inline-block; font-family: var(--vg-mono); font-size: 10px;
//   letter-spacing: 0.06em; text-transform: uppercase; color: var(--vg-ink-soft);
//   border: 1px solid var(--vg-rule-soft); border-radius: 4px; padding: 2px 7px;
// }
// .vg-exp-title { margin: 10px 0 10px; font-size: 16px; font-weight: 600; letter-spacing: -0.005em; line-height: 1.3; }
// .vg-exp.vg-state-ok .vg-exp-title { color: var(--vg-ok); }
// .vg-exp.vg-state-bad .vg-exp-title { color: var(--vg-flag); }
// .vg-exp-body { font-size: 14px; line-height: 1.65; }
// .vg-exp-body > p { margin: 0 0 12px; }
// .vg-exp-body > p:last-child { margin-bottom: 0; }
// .vg-exp-body a { color: var(--vg-accent); }
// .vg-exp-note {
//   margin-top: 16px; padding: 12px 0 12px 14px;
//   border-left: 2px solid var(--vg-rule); color: var(--vg-ink-soft); font-size: 13px; line-height: 1.6;
// }
// .vg-exp-note > p { margin: 0 0 10px; }
// .vg-exp-note > p:last-child { margin-bottom: 0; }`;

// function useInjectedStyles() {
//   useEffect(() => {
//     if (typeof document === 'undefined') return;
//     if (document.getElementById(CSS_ID)) return;
//     const tag = document.createElement('style');
//     tag.id = CSS_ID;
//     tag.textContent = CSS;
//     document.head.appendChild(tag);
//   }, []);
// }

// // ============================================================================
// // SECTION 7 - CONTENT
// // ============================================================================

// function Content({ text, className }) {
//   const rendered = useMemo(() => {
//     if (!text) return '';
//     try { return processContent(text); } catch (e) { return text; }
//   }, [text]);

//   if (typeof rendered === 'string') {
//     return <div className={className} dangerouslySetInnerHTML={{ __html: rendered }} />;
//   }
//   return <div className={className}>{rendered}</div>;
// }

// // ============================================================================
// // SECTION 8 - DEFAULT DATA
// // ============================================================================

// const PALETTE_OPS = ['gap', '\u2229', '\u222a', '\\', '\u2295', '\u1d9c', 'gap', '(', ')', '\u2205', 'U'];
// const SPACED_OPS = '\u2229\u222a\\\u2295';

// const DEFAULT_THEME = {
//   color: '#2f4fd8',
//   opacity: 0.82,
//   neutralFill: '#ffffff',
//   stroke: '#1e293b',
//   strokeWidth: 1.5,
//   universeStroke: '#c2ccd8',
//   labelColor: '#334155',
//   mutedLabelColor: '#94a3b8'
// };

// const MATH_FONT = "'Cambria Math','Latin Modern Math',Georgia,serif";

// // ============================================================================
// // SECTION 9 - COMPONENT
// // ============================================================================

// export const VennGenerator = (props) => {
//   const {
//     initialSetCount = 2,
//     initialExpression = 'A \u2229 B',
//     initialCompare = '',
//     initialElements = 'A = 1, 2, 3, 7, 9\nB = 3, 4, 5, 9\nU = 6, 8',
//     width = 600,
//     height = 460,
//     margin = 14,
//     theme: themeProp = null,
//     explanations: explanationsProp = null,
//     geometryNotes: geometryNotesProp = null,
//     presets: presetsProp = null,
//     // Copy config is an authoring aid, not a student-facing feature. Off unless asked for.
//     showCopyConfig = false,
//     showSetCount = true,
//     showCompare = true,
//     showLibrary = true,
//     showElementsTab = true,
//     showStyleTab = true,
//     showExplanation = true,
//     showExplanationId = false,
//     showExport = true,
//     enableDrag = true,
//     onChange = null,
//     className = ''
//   } = props;

//   useInjectedStyles();

//   const rawId = useId();
//   const uid = rawId.replace(/[^a-zA-Z0-9]/g, '');
//   const svgRef = useRef(null);
//   const exprRef = useRef(null);
//   const dragRef = useRef(null);

//   const theme = useMemo(() => ({ ...DEFAULT_THEME, ...(themeProp || {}) }), [themeProp]);
//   const presets = presetsProp || DEFAULT_PRESETS;
//   const uRect = useMemo(
//     () => ({ x: margin, y: margin, width: width - margin * 2, height: height - margin * 2 }),
//     [margin, width, height]
//   );

//   const [setCount, setSetCount] = useState(Math.min(5, Math.max(2, initialSetCount)));
//   const [expression, setExpression] = useState(initialExpression);
//   const [compareExpr, setCompareExpr] = useState(initialCompare);
//   const [elementText, setElementText] = useState(initialElements);
//   const [tab, setTab] = useState('library');
//   const [size, setSize] = useState(112);
//   const [fill, setFill] = useState(theme.color);
//   const [opacity, setOpacity] = useState(theme.opacity);
//   const [stroke, setStroke] = useState(theme.stroke);
//   const [strokeWidth, setStrokeWidth] = useState(theme.strokeWidth);
//   const [showUniverse, setShowUniverse] = useState(true);
//   const [showRegionLabels, setShowRegionLabels] = useState(false);
//   const [showCaption, setShowCaption] = useState(true);
//   const [showElements, setShowElements] = useState(true);
//   const [showCounts, setShowCounts] = useState(false);
//   const [copied, setCopied] = useState(false);
//   const [shapes, setShapes] = useState(() =>
//     defaultLayout(Math.min(5, Math.max(2, initialSetCount)), 112, width, height));

//   const sets = useMemo(() => SET_NAMES.slice(0, setCount), [setCount]);
//   const regionTable = useMemo(() => buildRegionTable(sets), [sets]);

//   // --- evaluation -----------------------------------------------------------
//   const evaluation = useMemo(() => {
//     const src = String(expression || '').trim();
//     if (!src) return { selected: new Set(), error: '', errorKind: '', signature: '' };
//     try {
//       const tree = parseExpression(src);
//       const unknown = Array.from(namesIn(tree)).filter((x) => sets.indexOf(x) === -1);
//       if (unknown.length) {
//         return {
//           selected: new Set(),
//           error: 'Unknown set \u201c' + unknown[0] + '\u201d',
//           errorKind: 'unknown',
//           signature: ''
//         };
//       }
//       const selected = new Set();
//       regionTable.forEach((r) => { if (evalNode(tree, r.vars)) selected.add(r.mask); });
//       const signature = regionTable.map((r) => (selected.has(r.mask) ? '1' : '0')).join('');
//       return { selected, error: '', errorKind: '', signature };
//     } catch (e) {
//       return { selected: new Set(), error: e.message, errorKind: 'syntax', signature: '' };
//     }
//   }, [expression, sets, regionTable]);

//   const comparison = useMemo(() => {
//     const other = String(compareExpr || '').trim();
//     if (!other || !String(expression || '').trim() || evaluation.error) {
//       return { verdict: null, differing: [] };
//     }
//     try {
//       const tree = parseExpression(other);
//       if (Array.from(namesIn(tree)).some((x) => sets.indexOf(x) === -1)) {
//         return { verdict: null, differing: [] };
//       }
//       const differing = [];
//       regionTable.forEach((r) => {
//         const a = evaluation.selected.has(r.mask);
//         const b = evalNode(tree, r.vars);
//         if (a !== b) differing.push(r.label);
//       });
//       return { verdict: differing.length === 0, differing };
//     } catch (e) {
//       return { verdict: null, differing: [] };
//     }
//   }, [compareExpr, expression, evaluation, sets, regionTable]);

//   // --- geometry -------------------------------------------------------------
//   const twoSet = useMemo(() => {
//     if (setCount !== 2 || !shapes.A || !shapes.B) return null;
//     return twoSetPaths(shapes.A, shapes.B, uRect);
//   }, [setCount, shapes, uRect]);

//   const needsSamples = Boolean(
//     showRegionLabels || showCounts || (showElements && String(elementText || '').trim())
//   );

//   const buckets = useMemo(() => {
//     if (!needsSamples) return null;
//     const ready = sets.every((s) => shapes[s]);
//     if (!ready) return null;
//     return sampleRegions(sets, shapes, uRect, setCount >= 4 ? 4 : 7);
//   }, [needsSamples, sets, shapes, uRect, setCount]);

//   const elementsByMask = useMemo(() => parseElementText(elementText, sets), [elementText, sets]);

//   const placements = useMemo(() => {
//     if (!buckets) return [];
//     const out = [];
//     regionTable.forEach((r) => {
//       const pts = buckets[r.mask];
//       if (!pts || !pts.length) return;
//       const items = elementsByMask[r.mask] || [];
//       const anchor = regionCentroid(pts, sets, shapes);
//       const chips = showElements && items.length
//         ? packPoints(pts, items.length, anchor).map((p, i) => ({ x: p.x, y: p.y, text: items[i] }))
//         : [];
//       out.push({ mask: r.mask, label: r.label, anchor, chips, count: items.length });
//     });
//     return out;
//   }, [buckets, regionTable, elementsByMask, showElements, sets, shapes]);

//   // --- serializer -----------------------------------------------------------
//   const config = useMemo(() => ({
//     sets,
//     expression: String(expression || '').trim(),
//     compare: String(compareExpr || '').trim() || null,
//     highlight: regionTable.filter((r) => evaluation.selected.has(r.mask)).map((r) => r.key),
//     shapes: sets.reduce((acc, s) => { acc[s] = shapes[s]; return acc; }, {}),
//     theme: { color: fill, opacity, stroke, strokeWidth },
//     universe: showUniverse,
//     elements: String(elementText || '').trim() || null
//   }), [sets, expression, compareExpr, regionTable, evaluation, shapes, fill, opacity,
//     stroke, strokeWidth, showUniverse, elementText]);

//   const onChangeRef = useRef(onChange);
//   useEffect(() => { onChangeRef.current = onChange; }, [onChange]);
//   useEffect(() => { if (onChangeRef.current) onChangeRef.current(config); }, [config]);

//   // --- explanation ----------------------------------------------------------
//   const explanation = useMemo(() => {
//     const shaded = regionTable.filter((r) => evaluation.selected.has(r.mask)).map((r) => r.label);
//     const ctx = {
//       expression: String(expression || '').trim(),
//       compareExpression: String(compareExpr || '').trim(),
//       error: evaluation.error,
//       errorKind: evaluation.errorKind,
//       sets,
//       setList: sets.join(', '),
//       count: evaluation.selected.size,
//       total: regionTable.length,
//       signature: evaluation.signature,
//       compare: comparison.verdict,
//       regionList: shaded.slice(0, 8).join(', ') + (shaded.length > 8 ? ', \u2026' : ''),
//       regions: shaded,
//       diffCount: comparison.differing.length,
//       diffList: comparison.differing.slice(0, 6).join(', ') + (comparison.differing.length > 6 ? ', \u2026' : ''),
//       plural: (word, k) => (k === 1 ? word : word + 's')
//     };
//     const id = resolveExplanationId(ctx);
//     const source = (explanationsProp && explanationsProp[id]) || DEFAULT_EXPLANATIONS[id] || DEFAULT_EXPLANATIONS.general;
//     const resolve = (v) => (typeof v === 'function' ? v(ctx) : v);

//     let note = '';
//     if (setCount === 2 && !evaluation.error && twoSet) {
//       const notes = { ...DEFAULT_GEOMETRY_NOTES, ...(geometryNotesProp || {}) };
//       note = notes[twoSet.classification.type] || '';
//     }
//     return { id, title: resolve(source.title), body: resolve(source.body), note };
//   }, [regionTable, evaluation, expression, compareExpr, sets, comparison, explanationsProp,
//     geometryNotesProp, setCount, twoSet]);

//   // --- handlers -------------------------------------------------------------
//   const changeSetCount = useCallback((n) => {
//     setSetCount(n);
//     setShapes(defaultLayout(n, size, width, height));
//     const nextSets = SET_NAMES.slice(0, n);
//     const stillValid = (src) => {
//       const trimmed = String(src || '').trim();
//       if (!trimmed) return true;
//       try {
//         return !Array.from(namesIn(parseExpression(trimmed))).some((x) => nextSets.indexOf(x) === -1);
//       } catch (e) {
//         return false;
//       }
//     };
//     if (!stillValid(expression)) setExpression((presets[n] || DEFAULT_PRESETS[n])[0]);
//     if (!stillValid(compareExpr)) setCompareExpr('');
//   }, [size, width, height, expression, compareExpr, presets]);

//   const changeSize = useCallback((next) => {
//     setSize(next);
//     setShapes(defaultLayout(setCount, next, width, height));
//   }, [setCount, width, height]);

//   const applyRelation = useCallback((name) => {
//     const fn = RELATION_LAYOUTS[name];
//     if (!fn) return;
//     setShapes((prev) => ({ ...prev, ...fn(setCount, size, width, height) }));
//   }, [setCount, size, width, height]);

//   const insertSymbol = useCallback((sym) => {
//     const input = exprRef.current;
//     if (!input) { setExpression((p) => p + sym); return; }
//     const start = input.selectionStart == null ? input.value.length : input.selectionStart;
//     const end = input.selectionEnd == null ? input.value.length : input.selectionEnd;
//     const padded = SPACED_OPS.indexOf(sym) > -1 ? ' ' + sym + ' ' : sym;
//     const next = input.value.slice(0, start) + padded + input.value.slice(end);
//     setExpression(next);
//     window.requestAnimationFrame(() => {
//       input.focus();
//       const pos = start + padded.length;
//       input.setSelectionRange(pos, pos);
//     });
//   }, []);

//   const toUserSpace = useCallback((evt) => {
//     const svg = svgRef.current;
//     if (!svg || !svg.createSVGPoint) return null;
//     const pt = svg.createSVGPoint();
//     pt.x = evt.clientX;
//     pt.y = evt.clientY;
//     const ctm = svg.getScreenCTM();
//     if (!ctm) return null;
//     return pt.matrixTransform(ctm.inverse());
//   }, []);

//   const handlePointerDown = useCallback((key) => (e) => {
//     if (!enableDrag) return;
//     const p = toUserSpace(e);
//     if (!p) return;
//     dragRef.current = { key, dx: p.x - shapes[key].cx, dy: p.y - shapes[key].cy };
//     if (e.currentTarget.setPointerCapture) e.currentTarget.setPointerCapture(e.pointerId);
//     e.preventDefault();
//   }, [enableDrag, shapes, toUserSpace]);

//   const handlePointerMove = useCallback((e) => {
//     const drag = dragRef.current;
//     if (!drag) return;
//     const p = toUserSpace(e);
//     if (!p) return;
//     setShapes((prev) => ({
//       ...prev,
//       [drag.key]: {
//         ...prev[drag.key],
//         cx: Math.max(uRect.x - 40, Math.min(uRect.x + uRect.width + 40, p.x - drag.dx)),
//         cy: Math.max(uRect.y - 40, Math.min(uRect.y + uRect.height + 40, p.y - drag.dy))
//       }
//     }));
//   }, [toUserSpace, uRect]);

//   const endDrag = useCallback(() => { dragRef.current = null; }, []);

//   const serializeSvg = useCallback(() => {
//     const node = svgRef.current;
//     if (!node) return '';
//     const clone = node.cloneNode(true);
//     clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
//     clone.setAttribute('width', String(width));
//     clone.setAttribute('height', String(height));
//     const grips = clone.querySelectorAll('.vg-grip');
//     for (let i = 0; i < grips.length; i++) grips[i].parentNode.removeChild(grips[i]);
//     return '<?xml version="1.0" encoding="UTF-8"?>\n' + new XMLSerializer().serializeToString(clone);
//   }, [width, height]);

//   const downloadBlob = useCallback((blob, name) => {
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = name;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   }, []);

//   const downloadSvg = useCallback(() => {
//     const text = serializeSvg();
//     if (!text) return;
//     downloadBlob(new Blob([text], { type: 'image/svg+xml;charset=utf-8' }), 'venn.svg');
//   }, [serializeSvg, downloadBlob]);

//   const downloadPng = useCallback(() => {
//     const text = serializeSvg();
//     if (!text) return;
//     const scale = 2;
//     const url = URL.createObjectURL(new Blob([text], { type: 'image/svg+xml;charset=utf-8' }));
//     const img = new Image();
//     img.onload = () => {
//       const canvas = document.createElement('canvas');
//       canvas.width = width * scale;
//       canvas.height = height * scale;
//       const ctx = canvas.getContext('2d');
//       ctx.fillStyle = '#ffffff';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//       ctx.scale(scale, scale);
//       ctx.drawImage(img, 0, 0);
//       URL.revokeObjectURL(url);
//       canvas.toBlob((b) => { if (b) downloadBlob(b, 'venn.png'); }, 'image/png');
//     };
//     img.onerror = () => URL.revokeObjectURL(url);
//     img.src = url;
//   }, [serializeSvg, width, height, downloadBlob]);

//   const copyConfig = useCallback(() => {
//     const text = JSON.stringify(config, null, 2);
//     const done = () => {
//       setCopied(true);
//       window.setTimeout(() => setCopied(false), 1200);
//     };
//     if (navigator.clipboard && navigator.clipboard.writeText) {
//       navigator.clipboard.writeText(text).then(done, done);
//     } else {
//       done();
//     }
//   }, [config]);

//   // --- render helpers -------------------------------------------------------
//   const groupCentre = useMemo(() => {
//     const ready = sets.filter((s) => shapes[s]);
//     if (!ready.length) return { x: width / 2, y: height / 2 };
//     return {
//       x: ready.reduce((a, s) => a + shapes[s].cx, 0) / ready.length,
//       y: ready.reduce((a, s) => a + shapes[s].cy, 0) / ready.length
//     };
//   }, [sets, shapes, width, height]);

//   const renderRegions = () => {
//     if (setCount === 2 && twoSet) {
//       return regionTable.map((r) => {
//         const d = twoSet.paths[r.mask];
//         if (!d) return null;
//         const on = evaluation.selected.has(r.mask);
//         return (
//           <path
//             key={'region-' + r.mask}
//             d={d}
//             fillRule="evenodd"
//             fill={on ? fill : theme.neutralFill}
//             opacity={on ? opacity : 1}
//           />
//         );
//       });
//     }
//     return regionTable.map((r) => {
//       if (!evaluation.selected.has(r.mask)) return null;
//       let node = (
//         <rect
//           x={uRect.x}
//           y={uRect.y}
//           width={uRect.width}
//           height={uRect.height}
//           fill={fill}
//           opacity={opacity}
//         />
//       );
//       for (let i = sets.length - 1; i >= 0; i--) {
//         const clip = ((r.mask & (1 << i)) ? 'in' : 'out') + sets[i] + uid;
//         node = <g clipPath={'url(#' + clip + ')'}>{node}</g>;
//       }
//       return <g key={'region-' + r.mask}>{node}</g>;
//     });
//   };

//   const ready = sets.every((s) => shapes[s]);
//   const stripWrapped = setCount >= 4;

//   return (
//     <div className={'vg-root ' + className}>
//       <div className="vg-grid">

//         {/* ---------------- diagram + explanation ---------------- */}
//         <div>
//           <div className="vg-panel">
//             <div className="vg-stage">
//               <svg
//                 ref={svgRef}
//                 className="vg-svg"
//                 viewBox={'0 0 ' + width + ' ' + height}
//                 xmlns="http://www.w3.org/2000/svg"
//                 onPointerMove={handlePointerMove}
//                 onPointerUp={endDrag}
//                 onPointerCancel={endDrag}
//                 onPointerLeave={endDrag}
//               >
//                 <rect x="0" y="0" width={width} height={height} fill="#ffffff" />

//                 {ready && (
//                   <defs>
//                     {sets.map((s) => (
//                       <React.Fragment key={'clip-' + s}>
//                         <clipPath id={'in' + s + uid} clipPathUnits="userSpaceOnUse">
//                           <path d={shapePath(shapes[s])} />
//                         </clipPath>
//                         <clipPath id={'out' + s + uid} clipPathUnits="userSpaceOnUse">
//                           <path d={rectPath(uRect) + ' ' + shapePath(shapes[s])} clipRule="evenodd" />
//                         </clipPath>
//                       </React.Fragment>
//                     ))}
//                   </defs>
//                 )}

//                 {ready && <g>{renderRegions()}</g>}

//                 {showUniverse && (
//                   <g>
//                     <rect x={uRect.x} y={uRect.y} width={uRect.width} height={uRect.height}
//                       fill="none" stroke={theme.universeStroke} strokeWidth="1" />
//                     <text x={uRect.x + 15} y={uRect.y + 26} fontFamily={MATH_FONT}
//                       fontSize="17" fill="#8794a5">U</text>
//                   </g>
//                 )}

//                 {ready && sets.map((s) => (
//                   <path key={'outline-' + s} d={shapePath(shapes[s])} fill="none"
//                     stroke={stroke} strokeWidth={strokeWidth} />
//                 ))}

//                 {ready && enableDrag && sets.map((s) => (
//                   <path key={'grip-' + s} className="vg-grip" d={shapePath(shapes[s])}
//                     fill="none" stroke="transparent" strokeWidth="16" pointerEvents="stroke"
//                     onPointerDown={handlePointerDown(s)} />
//                 ))}

//                 {ready && sets.map((s) => {
//                   const sh = shapes[s];
//                   let dx = sh.cx - groupCentre.x;
//                   let dy = sh.cy - groupCentre.y;
//                   if (Math.hypot(dx, dy) < 1) { dx = 0; dy = -1; }
//                   const d = Math.hypot(dx, dy);
//                   const reach = Math.max(sh.rx, sh.ry) + 18;
//                   const tx = Math.max(26, Math.min(width - 26, sh.cx + (dx / d) * reach));
//                   const ty = Math.max(36, Math.min(height - 12, sh.cy + (dy / d) * reach + 6));
//                   return (
//                     <text
//                       key={'name-' + s}
//                       x={tx}
//                       y={ty}
//                       textAnchor="middle"
//                       fontFamily={MATH_FONT}
//                       fontSize="20"
//                       fontStyle="italic"
//                       fill={stroke}
//                     >
//                       {s}
//                     </text>
//                   );
//                 })}

//                 {placements.map((pl) => {
//                   const on = evaluation.selected.has(pl.mask);
//                   const ink = on ? '#ffffff' : theme.labelColor;
//                   const nodes = [];
//                   pl.chips.forEach((chip, i) => {
//                     nodes.push(
//                       <text
//                         key={'chip-' + pl.mask + '-' + i}
//                         x={chip.x}
//                         y={chip.y + 5}
//                         textAnchor="middle"
//                         fontFamily={MATH_FONT}
//                         fontSize="14"
//                         fill={ink}
//                       >
//                         {chip.text}
//                       </text>
//                     );
//                   });
//                   if (showCounts && pl.anchor) {
//                     nodes.push(
//                       <text
//                         key={'count-' + pl.mask}
//                         x={pl.anchor.x}
//                         y={pl.anchor.y + (pl.chips.length ? 34 : 5)}
//                         textAnchor="middle"
//                         fontFamily={MATH_FONT}
//                         fontSize="15"
//                         fontWeight="700"
//                         fill={on ? '#ffffff' : '#64748b'}
//                       >
//                         {pl.count}
//                       </text>
//                     );
//                   }
//                   if (showRegionLabels && pl.mask !== 0 && setCount <= 3 && pl.anchor) {
//                     nodes.push(
//                       <text
//                         key={'label-' + pl.mask}
//                         x={pl.anchor.x}
//                         y={pl.anchor.y - (pl.chips.length ? 34 : -5)}
//                         textAnchor="middle"
//                         fontFamily={MATH_FONT}
//                         fontSize="13"
//                         fill={on ? '#e4e9ff' : theme.mutedLabelColor}
//                       >
//                         {pl.label}
//                       </text>
//                     );
//                   }
//                   return <g key={'place-' + pl.mask}>{nodes}</g>;
//                 })}

//                 {showCaption && String(expression || '').trim() && !evaluation.error && (
//                   <text x={width / 2} y={height - 16} textAnchor="middle"
//                     fontFamily={MATH_FONT} fontSize="19" fill="#131720">
//                     {String(expression).trim()}
//                   </text>
//                 )}
//               </svg>
//             </div>

//             {(showExport || showCopyConfig) && (
//               <div className="vg-panel-head" style={{ borderTop: '1px solid var(--vg-rule-soft)', borderBottom: 0 }}>
//                 <h3>Export</h3>
//                 <div className="vg-btnrow">
//                   {showExport && (
//                     <button type="button" className="vg-btn" onClick={downloadSvg}>Download SVG</button>
//                   )}
//                   {showExport && (
//                     <button type="button" className="vg-btn" onClick={downloadPng}>Download PNG</button>
//                   )}
//                   {showCopyConfig && (
//                     <button type="button" className="vg-btn" onClick={copyConfig}>
//                       {copied ? 'Copied' : 'Copy config'}
//                     </button>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>

//           {showExplanation && (
//             <div className="vg-panel">
//               <div className={
//                 'vg-exp' +
//                 (comparison.verdict === true ? ' vg-state-ok' : '') +
//                 (evaluation.error || comparison.verdict === false ? ' vg-state-bad' : '')
//               }>
//                 {showExplanationId && <span className="vg-exp-tag">{explanation.id}</span>}
//                 <h4 className="vg-exp-title">{explanation.title}</h4>
//                 <Content className="vg-exp-body" text={explanation.body} />
//                 {explanation.note && <Content className="vg-exp-note" text={explanation.note} />}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* ---------------- controls ---------------- */}
//         <div>
//           <div className="vg-panel">
//             <div className="vg-panel-head">
//               <h3>Expression</h3>
//               <span className="vg-readout">
//                 {evaluation.error ? '' : (
//                   <>
//                     <strong>{evaluation.selected.size}</strong>
//                     {'/' + regionTable.length}
//                   </>
//                 )}
//               </span>
//             </div>
//             <div className="vg-panel-body">
//               {showSetCount && (
//                 <div style={{ marginBottom: 14 }}>
//                   <div className="vg-setcount">
//                     <span className="vg-setcount-label">Sets in the diagram</span>
//                     <div className="vg-setcount-btns" role="group" aria-label="Number of sets">
//                       {[2, 3, 4, 5].map((n) => (
//                         <button
//                           key={'n' + n}
//                           type="button"
//                           aria-pressed={setCount === n}
//                           onClick={() => changeSetCount(n)}
//                         >
//                           {n}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                   <p className="vg-setcount-hint">
//                     How many named sets the diagram draws, and so how many regions
//                     an expression is tested against &mdash; {Math.pow(2, setCount)} at this
//                     setting. Two and three sets are circles. Four and five are ellipses,
//                     in the fixed arrangement that keeps every region non-empty.
//                   </p>
//                 </div>
//               )}

//               <div className="vg-exprline">
//                 <input ref={exprRef} value={expression} spellCheck={false}
//                   className={'vg-expr' + (evaluation.error ? ' vg-bad' : '')}
//                   aria-label="Set expression"
//                   onChange={(e) => setExpression(e.target.value)} />
//                 <button
//                   type="button"
//                   className="vg-btn vg-solid"
//                   onClick={() => { setExpression(''); if (exprRef.current) exprRef.current.focus(); }}
//                 >
//                   Clear
//                 </button>
//               </div>

//               <div className="vg-pal">
//                 {sets.concat(PALETTE_OPS).map((sym, i) => (
//                   sym === 'gap'
//                     ? <span key={'gap' + i} className="vg-pal-gap" />
//                     : (
//                       <button key={'sym' + i} type="button" onClick={() => insertSymbol(sym)}>
//                         {sym}
//                       </button>
//                     )
//                 ))}
//               </div>

//               <div className="vg-err">{evaluation.error}</div>

//               <div className="vg-panel-head" style={{ padding: '0 0 8px', border: 0 }}>
//                 <h3>Regions</h3>
//                 <span className="vg-readout">{evaluation.signature}</span>
//               </div>

//               <div className={'vg-strip' + (stripWrapped ? ' vg-wrapped' : '')}>
//                 {regionTable.map((r) => (
//                   <div
//                     key={'cell-' + r.mask}
//                     className={'vg-cell' + (evaluation.selected.has(r.mask) ? ' vg-on' : '')}
//                     title={r.key}
//                   >
//                     <div className="vg-dots">
//                       {sets.map((s) => (
//                         <span key={s} className={'vg-dot' + (r.vars[s] ? ' vg-in' : '')} />
//                       ))}
//                     </div>
//                     {setCount <= 3 && <div className="vg-cell-nm">{r.label}</div>}
//                   </div>
//                 ))}
//               </div>

//               {showCompare && (
//                 <div className="vg-cmp">
//                   <span className="vg-cmp-label">Compare</span>
//                   <input value={compareExpr} spellCheck={false}
//                     aria-label="Second expression to compare"
//                     placeholder={'A\u1d9c \u222a B\u1d9c'}
//                     onChange={(e) => setCompareExpr(e.target.value)} />
//                   <span className={
//                     'vg-verdict' +
//                     (comparison.verdict === true ? ' vg-yes' : '') +
//                     (comparison.verdict === false ? ' vg-no' : '')
//                   }>
//                     {comparison.verdict === null ? '\u00b7' : (comparison.verdict ? '\u2261' : '\u2262')}
//                   </span>
//                 </div>
//               )}
//             </div>
//           </div>

//           {(showLibrary || showElementsTab || showStyleTab) && (
//             <div className="vg-panel">
//               <div className="vg-tabs" role="tablist">
//                 {showLibrary && (
//                   <button type="button" role="tab" aria-selected={tab === 'library'} onClick={() => setTab('library')}>
//                     Library
//                   </button>
//                 )}
//                 {showElementsTab && (
//                   <button type="button" role="tab" aria-selected={tab === 'elements'} onClick={() => setTab('elements')}>
//                     Elements
//                   </button>
//                 )}
//                 {showStyleTab && (
//                   <button type="button" role="tab" aria-selected={tab === 'style'} onClick={() => setTab('style')}>
//                     Style
//                   </button>
//                 )}
//               </div>

//               {tab === 'library' && showLibrary && (
//                 <div className="vg-panel-body">
//                   <div className="vg-presets">
//                     {(presets[setCount] || DEFAULT_PRESETS[setCount]).map((p) => (
//                       <button key={p} type="button" onClick={() => setExpression(p)}>{p}</button>
//                     ))}
//                   </div>
//                   {setCount <= 3 ? (
//                     <>
//                       <div className="vg-btnrow" style={{ marginTop: 14 }}>
//                         {Object.keys(RELATION_LAYOUTS).map((k) => (
//                           <button key={k} type="button" className="vg-btn" onClick={() => applyRelation(k)}>
//                             {k}
//                           </button>
//                         ))}
//                       </div>
//                       <p className="vg-hint">
//                         Reshape the layout. Every region path is re-derived, so a relation
//                         that empties a region empties it in the drawing too.
//                       </p>
//                     </>
//                   ) : (
//                     <p className="vg-hint">
//                       At four and five sets the layout is fixed &mdash; it is the arrangement
//                       that makes all {Math.pow(2, setCount)} regions exist. Drag a curve and
//                       some of them disappear.
//                     </p>
//                   )}
//                 </div>
//               )}

//               {tab === 'elements' && showElementsTab && (
//                 <div className="vg-panel-body">
//                   <textarea className="vg-textarea" value={elementText} spellCheck={false}
//                     aria-label="Set elements" onChange={(e) => setElementText(e.target.value)} />
//                   <p className="vg-hint">
//                     One set per line, as <code>A = 1, 2, 3</code>. Use <code>U</code> for
//                     elements outside every set. Each element is placed in the region its
//                     membership selects, so nothing is positioned by hand.
//                   </p>
//                   <div className="vg-row" style={{ marginTop: 14 }}>
//                     <label htmlFor={'showel' + uid}>Show elements</label>
//                     <input id={'showel' + uid} type="checkbox" checked={showElements}
//                       onChange={(e) => setShowElements(e.target.checked)} />
//                   </div>
//                   <div className="vg-row">
//                     <label htmlFor={'showcount' + uid}>Show counts</label>
//                     <input id={'showcount' + uid} type="checkbox" checked={showCounts}
//                       onChange={(e) => setShowCounts(e.target.checked)} />
//                   </div>
//                 </div>
//               )}

//               {tab === 'style' && showStyleTab && (
//                 <div className="vg-panel-body">
//                   <div className="vg-row">
//                     <label htmlFor={'fill' + uid}>Highlight</label>
//                     <input id={'fill' + uid} type="color" value={fill}
//                       onChange={(e) => setFill(e.target.value)} />
//                     <input type="range" min="10" max="100" aria-label="Highlight opacity"
//                       value={Math.round(opacity * 100)}
//                       onChange={(e) => setOpacity(Number(e.target.value) / 100)} />
//                     <output>{Math.round(opacity * 100)}%</output>
//                   </div>
//                   <div className="vg-row">
//                     <label htmlFor={'stroke' + uid}>Outline</label>
//                     <input id={'stroke' + uid} type="color" value={stroke}
//                       onChange={(e) => setStroke(e.target.value)} />
//                     <input type="range" min="0" max="6" step="0.5" aria-label="Outline width"
//                       value={strokeWidth}
//                       onChange={(e) => setStrokeWidth(Number(e.target.value))} />
//                     <output>{strokeWidth}</output>
//                   </div>
//                   <div className="vg-row">
//                     <label htmlFor={'size' + uid}>Size</label>
//                     <input id={'size' + uid} type="range" min="50" max="150" value={size}
//                       onChange={(e) => changeSize(Number(e.target.value))} />
//                     <output>{size}</output>
//                   </div>
//                   <div className="vg-row">
//                     <label htmlFor={'showu' + uid}>Universe box</label>
//                     <input id={'showu' + uid} type="checkbox" checked={showUniverse}
//                       onChange={(e) => setShowUniverse(e.target.checked)} />
//                   </div>
//                   <div className="vg-row">
//                     <label htmlFor={'showlab' + uid}>Region labels</label>
//                     <input id={'showlab' + uid} type="checkbox" checked={showRegionLabels}
//                       onChange={(e) => setShowRegionLabels(e.target.checked)} />
//                   </div>
//                   <div className="vg-row">
//                     <label htmlFor={'showcap' + uid}>Caption</label>
//                     <input id={'showcap' + uid} type="checkbox" checked={showCaption}
//                       onChange={(e) => setShowCaption(e.target.checked)} />
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// };

// export { DEFAULT_EXPLANATIONS, NAMED_SELECTIONS, DEFAULT_GEOMETRY_NOTES, DEFAULT_PRESETS };

// export default VennGenerator;



'use client';

// ============================================================================
// VENN GENERATOR
// ----------------------------------------------------------------------------
// Expression-driven Venn diagram builder for 2-5 sets.
//
// Nothing here is written per operation. An expression is tokenized, parsed to
// a tree, and evaluated once against every region of the diagram. A region is
// a membership mask over the sets, so the number of sets is a parameter rather
// than a rewrite. The output `highlight` array uses the same region keys as
// VennCoreEnhanced, so a diagram built here can be pasted into an explorer.
//
// IMPORTANT: fix the processContent import path below to match your project.
// If the path is wrong the whole module fails to load and VennGenerator
// becomes undefined in its consumers.
// ============================================================================

import React, { useState, useMemo, useRef, useEffect, useCallback, useId } from 'react';
import { processContent } from '../../../utils/contentProcessor';
import {
  DEFAULT_EXPLANATIONS,
  NAMED_SELECTIONS,
  DEFAULT_GEOMETRY_NOTES,
  DEFAULT_PRESETS
} from './vennGeneratorContent';

// ============================================================================
// SECTION 1 - PARSER
// ============================================================================

export const SET_NAMES = ['A', 'B', 'C', 'D', 'E'];

function tokenize(src) {
  const out = [];
  let i = 0;
  while (i < src.length) {
    const c = src[i];
    if (/\s/.test(c)) { i++; continue; }
    if (c === '^' && src[i + 1] === 'c') { out.push({ t: 'comp' }); i += 2; continue; }
    if ('\u1d9c\'\u2032*'.indexOf(c) > -1) { out.push({ t: 'comp' }); i++; continue; }
    if ('\u00ac~!'.indexOf(c) > -1) { out.push({ t: 'not' }); i++; continue; }
    if (c === '\u2229' || c === '&') { out.push({ t: 'and' }); i++; continue; }
    if (c === '\u222a' || c === '|' || c === '+') { out.push({ t: 'or' }); i++; continue; }
    if (c === '\\' || c === '\u2212' || c === '-') { out.push({ t: 'diff' }); i++; continue; }
    if ('\u2295\u0394\u25b3'.indexOf(c) > -1) { out.push({ t: 'xor' }); i++; continue; }
    if (c === '(') { out.push({ t: '(' }); i++; continue; }
    if (c === ')') { out.push({ t: ')' }); i++; continue; }
    if (c === '\u2205') { out.push({ t: 'empty' }); i++; continue; }
    if (/[A-Za-z]/.test(c)) {
      const up = c.toUpperCase();
      if (up === 'U') { out.push({ t: 'univ' }); i++; continue; }
      out.push({ t: 'set', name: up }); i++; continue;
    }
    throw new Error('Unexpected character \u201c' + c + '\u201d');
  }
  return out;
}

// Grammar, loosest binding first:
//   or    := and (( u | (+) ) and)*
//   and   := unary (( n | \ ) unary)*
//   unary := NOT unary | postfix
//   post  := atom COMPLEMENT*
//   atom  := ( or ) | set | U | empty
export function parseExpression(src) {
  const tk = tokenize(src);
  let p = 0;
  const peek = () => tk[p];
  const eat = (t) => (tk[p] && tk[p].t === t ? tk[p++] : null);

  function atom() {
    if (eat('(')) {
      const e = orExpr();
      if (!eat(')')) throw new Error('Missing a closing parenthesis');
      return e;
    }
    const s = eat('set');
    if (s) return { op: 'set', name: s.name };
    if (eat('univ')) return { op: 'univ' };
    if (eat('empty')) return { op: 'empty' };
    const nx = peek();
    throw new Error(nx ? 'Unexpected \u201c' + (nx.name || nx.t) + '\u201d' : 'The expression ends early');
  }
  function post() {
    let a = atom();
    while (eat('comp')) a = { op: 'not', a };
    return a;
  }
  function unary() {
    return eat('not') ? { op: 'not', a: unary() } : post();
  }
  function andExpr() {
    let a = unary();
    for (;;) {
      if (eat('and')) a = { op: 'and', a, b: unary() };
      else if (eat('diff')) a = { op: 'and', a, b: { op: 'not', a: unary() } };
      else return a;
    }
  }
  function orExpr() {
    let a = andExpr();
    for (;;) {
      if (eat('or')) a = { op: 'or', a, b: andExpr() };
      else if (eat('xor')) a = { op: 'xor', a, b: andExpr() };
      else return a;
    }
  }
  const tree = orExpr();
  if (p < tk.length) {
    const nx = tk[p];
    throw new Error('Unexpected \u201c' + (nx.name || nx.t) + '\u201d after a complete expression');
  }
  return tree;
}

export function evalNode(node, vars) {
  switch (node.op) {
    case 'set': return !!vars[node.name];
    case 'univ': return true;
    case 'empty': return false;
    case 'not': return !evalNode(node.a, vars);
    case 'and': return evalNode(node.a, vars) && evalNode(node.b, vars);
    case 'or': return evalNode(node.a, vars) || evalNode(node.b, vars);
    case 'xor': return evalNode(node.a, vars) !== evalNode(node.b, vars);
    default: return false;
  }
}

function namesIn(node, acc) {
  const set = acc || new Set();
  if (node.op === 'set') set.add(node.name);
  if (node.a) namesIn(node.a, set);
  if (node.b) namesIn(node.b, set);
  return set;
}

// ============================================================================
// SECTION 2 - REGION TABLE
// A region is a membership mask. Bit i is set when the point is inside set i.
// Keys match VennCoreEnhanced: 'outside', 'A', 'A-B', 'A-B-C' style joins.
// ============================================================================

export function buildRegionTable(sets) {
  const rows = [];
  for (let m = 0; m < (1 << sets.length); m++) {
    const vars = {};
    sets.forEach((s, i) => { vars[s] = !!(m & (1 << i)); });
    const inside = sets.filter((s) => vars[s]);
    rows.push({
      mask: m,
      vars,
      inside,
      key: inside.length ? inside.join('\u2229') : 'outside',
      label: inside.length ? inside.join('\u2229') : 'U'
    });
  }
  return rows;
}

export function highlightFromExpression(src, sets) {
  const table = buildRegionTable(sets);
  const tree = parseExpression(src);
  return table.filter((r) => evalNode(tree, r.vars)).map((r) => r.key);
}

// ============================================================================
// SECTION 3 - GEOMETRY
// Every curve is an ellipse. A circle is an ellipse with rx === ry and rot 0.
// ============================================================================

const EPS = 0.0001;

function inShape(p, s) {
  const r = (-s.rot * Math.PI) / 180;
  const c = Math.cos(r);
  const sn = Math.sin(r);
  const dx = p.x - s.cx;
  const dy = p.y - s.cy;
  const x = dx * c - dy * sn;
  const y = dx * sn + dy * c;
  return (x * x) / (s.rx * s.rx) + (y * y) / (s.ry * s.ry) <= 1;
}

function rectPath(r) {
  return 'M ' + r.x + ' ' + r.y +
    ' L ' + (r.x + r.width) + ' ' + r.y +
    ' L ' + (r.x + r.width) + ' ' + (r.y + r.height) +
    ' L ' + r.x + ' ' + (r.y + r.height) + ' Z';
}

function shapePath(s) {
  const r = (s.rot * Math.PI) / 180;
  const c = Math.cos(r);
  const sn = Math.sin(r);
  const sx = s.cx - s.rx * c;
  const sy = s.cy - s.rx * sn;
  const ex = s.cx + s.rx * c;
  const ey = s.cy + s.rx * sn;
  return 'M ' + sx + ' ' + sy +
    ' A ' + s.rx + ' ' + s.ry + ' ' + s.rot + ' 1 0 ' + ex + ' ' + ey +
    ' A ' + s.rx + ' ' + s.ry + ' ' + s.rot + ' 1 0 ' + sx + ' ' + sy + ' Z';
}

export function classifyPair(a, b) {
  const d = Math.hypot(b.cx - a.cx, b.cy - a.cy);
  const rA = a.rx;
  const rB = b.rx;
  if (d < EPS && Math.abs(rA - rB) < EPS) return { type: 'equal' };
  if (d > rA + rB - EPS) return { type: 'disjoint' };
  if (d + Math.min(rA, rB) < Math.max(rA, rB) + EPS) {
    const inner = rA < rB ? 'A' : 'B';
    return { type: 'contained', inner, outer: inner === 'A' ? 'B' : 'A' };
  }
  const x = (rA * rA - rB * rB + d * d) / (2 * d);
  const h = Math.sqrt(Math.max(0, rA * rA - x * x));
  const dx = b.cx - a.cx;
  const dy = b.cy - a.cy;
  const px = a.cx + (x * dx) / d;
  const py = a.cy + (x * dy) / d;
  const p1 = { x: px + (h * dy) / d, y: py - (h * dx) / d };
  const p2 = { x: px - (h * dy) / d, y: py + (h * dx) / d };
  return { type: 'overlapping', points: p1.y < p2.y ? { top: p1, bottom: p2 } : { top: p2, bottom: p1 } };
}

// Exact analytic region paths for two circles, keyed by membership mask.
function twoSetPaths(a, b, uRect) {
  const cls = classifyPair(a, b);
  const rA = a.rx;
  const rB = b.rx;
  let boundary;
  if (cls.type === 'overlapping') {
    const { top, bottom } = cls.points;
    boundary = 'M ' + top.x + ' ' + top.y +
      ' A ' + rA + ' ' + rA + ' 0 1 0 ' + bottom.x + ' ' + bottom.y +
      ' A ' + rB + ' ' + rB + ' 0 1 0 ' + top.x + ' ' + top.y + ' Z';
  } else if (cls.type === 'disjoint') {
    boundary = shapePath(a) + ' ' + shapePath(b);
  } else if (cls.type === 'contained') {
    boundary = shapePath(cls.outer === 'A' ? a : b);
  } else {
    boundary = shapePath(a);
  }

  const out = { 0: rectPath(uRect) + ' ' + boundary };
  if (cls.type === 'overlapping') {
    const { top, bottom } = cls.points;
    out[1] = 'M ' + top.x + ' ' + top.y +
      ' A ' + rA + ' ' + rA + ' 0 1 0 ' + bottom.x + ' ' + bottom.y +
      ' A ' + rB + ' ' + rB + ' 0 0 1 ' + top.x + ' ' + top.y + ' Z';
    out[2] = 'M ' + top.x + ' ' + top.y +
      ' A ' + rB + ' ' + rB + ' 0 1 1 ' + bottom.x + ' ' + bottom.y +
      ' A ' + rA + ' ' + rA + ' 0 0 0 ' + top.x + ' ' + top.y + ' Z';
    out[3] = 'M ' + top.x + ' ' + top.y +
      ' A ' + rA + ' ' + rA + ' 0 0 1 ' + bottom.x + ' ' + bottom.y +
      ' A ' + rB + ' ' + rB + ' 0 0 1 ' + top.x + ' ' + top.y + ' Z';
  } else if (cls.type === 'disjoint') {
    out[1] = shapePath(a);
    out[2] = shapePath(b);
  } else if (cls.type === 'contained') {
    const innerS = cls.inner === 'A' ? a : b;
    const outerS = cls.outer === 'A' ? a : b;
    const annulus = shapePath(outerS) + ' ' + shapePath(innerS);
    if (cls.inner === 'A') out[2] = annulus; else out[1] = annulus;
    out[3] = shapePath(innerS);
  } else {
    out[3] = shapePath(a);
  }
  return { paths: out, classification: cls };
}

// ----------------------------------------------------------------------------
// Layouts. The 4- and 5-set arrangements are the published ellipse
// constructions; both were checked by sampling every pixel of the canvas and
// confirming all 2^n regions are non-empty.
// ----------------------------------------------------------------------------

const FOUR_SET = [
  [0.35, 0.47, 0.35, 0.20, -35],
  [0.45, 0.57, 0.35, 0.20, -35],
  [0.55, 0.57, 0.35, 0.20, 35],
  [0.65, 0.47, 0.35, 0.20, 35]
];

const FIVE_SET = [
  [0.428, 0.449, 0.87, 0.50, 155],
  [0.469, 0.543, 0.87, 0.50, 82],
  [0.558, 0.523, 0.87, 0.50, 10],
  [0.578, 0.432, 0.87, 0.50, 118],
  [0.489, 0.383, 0.87, 0.50, 46]
];

export function defaultLayout(n, size, W, H) {
  const r = size;
  const out = {};
  if (n === 2) {
    out.A = { cx: W / 2 - r * 0.42, cy: H / 2 - 5, rx: r, ry: r, rot: 0 };
    out.B = { cx: W / 2 + r * 0.42, cy: H / 2 - 5, rx: r, ry: r, rot: 0 };
  } else if (n === 3) {
    const cx = W / 2;
    const cy = H / 2 + 8;
    const off = r * 0.52;
    out.A = { cx, cy: cy - off, rx: r, ry: r, rot: 0 };
    out.B = { cx: cx - off * 0.87, cy: cy + off * 0.5, rx: r, ry: r, rot: 0 };
    out.C = { cx: cx + off * 0.87, cy: cy + off * 0.5, rx: r, ry: r, rot: 0 };
  } else if (n === 4) {
    const k = r / 112;
    FOUR_SET.forEach((e, i) => {
      out[SET_NAMES[i]] = {
        cx: W / 2 + (e[0] - 0.5) * W * k,
        cy: H / 2 + (0.48 - e[1]) * H * k,
        rx: e[2] * W * k,
        ry: e[3] * H * k,
        rot: e[4]
      };
    });
  } else {
    const k = 400 * (r / 112);
    FIVE_SET.forEach((e, i) => {
      out[SET_NAMES[i]] = {
        cx: W / 2 + (e[0] - 0.5044) * k,
        cy: H / 2 - (e[1] - 0.466) * k,
        rx: (e[2] / 2) * k,
        ry: (e[3] / 2) * k,
        rot: -e[4]
      };
    });
  }
  return out;
}

export const RELATION_LAYOUTS = {
  Overlapping: (n, size, W, H) => defaultLayout(n, size, W, H),
  Disjoint: (n, size, W, H) => {
    const r = size * 0.72;
    const out = {
      A: { cx: W / 2 - r * 1.25, cy: H / 2, rx: r, ry: r, rot: 0 },
      B: { cx: W / 2 + r * 1.25, cy: H / 2, rx: r, ry: r, rot: 0 }
    };
    if (n === 3) out.C = { cx: W / 2, cy: H / 2 + r * 1.9, rx: r, ry: r, rot: 0 };
    return out;
  },
  'A \u2286 B': (n, size, W, H) => {
    const out = {
      B: { cx: W / 2, cy: H / 2, rx: size * 1.25, ry: size * 1.25, rot: 0 },
      A: { cx: W / 2 + 22, cy: H / 2 + 10, rx: size * 0.5, ry: size * 0.5, rot: 0 }
    };
    if (n === 3) out.C = { cx: W / 2 - 34, cy: H / 2 - 22, rx: size * 0.5, ry: size * 0.5, rot: 0 };
    return out;
  },
  'A = B': (n, size, W, H) => {
    const out = {
      A: { cx: W / 2, cy: H / 2, rx: size, ry: size, rot: 0 },
      B: { cx: W / 2, cy: H / 2, rx: size, ry: size, rot: 0 }
    };
    if (n === 3) out.C = { cx: W / 2, cy: H / 2 + size * 0.6, rx: size, ry: size, rot: 0 };
    return out;
  }
};

// ============================================================================
// SECTION 4 - ELEMENT PLACEMENT
// Elements are never positioned by hand. The plane is grid-sampled once, each
// sample bucketed by its region mask, then chips are packed into the bucket
// their membership selects.
// ============================================================================

export function parseElementText(text, sets) {
  const all = new Map();
  String(text || '').split(/\n+/).forEach((line) => {
    const m = line.match(/^\s*([A-Za-z])\s*[=:]\s*(.*)$/);
    if (!m) return;
    const name = m[1].toUpperCase();
    m[2].split(/[,;]+/).map((s) => s.trim()).filter(Boolean).forEach((v) => {
      if (!all.has(v)) all.set(v, new Set());
      if (name !== 'U') all.get(v).add(name);
    });
  });
  const byMask = {};
  all.forEach((memberOf, value) => {
    let mask = 0;
    sets.forEach((s, i) => { if (memberOf.has(s)) mask |= (1 << i); });
    if (!byMask[mask]) byMask[mask] = [];
    byMask[mask].push(value);
  });
  return byMask;
}

function maskAt(p, sets, shapes) {
  let m = 0;
  sets.forEach((s, i) => { if (inShape(p, shapes[s])) m |= (1 << i); });
  return m;
}

function sampleRegions(sets, shapes, uRect, step) {
  const buckets = {};
  for (let x = uRect.x + step / 2; x < uRect.x + uRect.width; x += step) {
    for (let y = uRect.y + step / 2; y < uRect.y + uRect.height; y += step) {
      const m = maskAt({ x, y }, sets, shapes);
      if (!buckets[m]) buckets[m] = [];
      buckets[m].push({ x, y });
    }
  }
  return buckets;
}

function regionCentroid(pts, sets, shapes) {
  if (!pts || !pts.length) return null;
  let sx = 0;
  let sy = 0;
  pts.forEach((p) => { sx += p.x; sy += p.y; });
  const c = { x: sx / pts.length, y: sy / pts.length };
  if (maskAt(c, sets, shapes) === maskAt(pts[0], sets, shapes)) return c;
  let best = pts[0];
  let bd = Infinity;
  pts.forEach((p) => {
    const d = Math.hypot(p.x - c.x, p.y - c.y);
    if (d < bd) { bd = d; best = p; }
  });
  return best;
}

function packPoints(pts, count, anchor) {
  if (!pts || !pts.length || !count) return [];
  const a = anchor || pts[0];
  const sorted = pts.slice().sort((p, q) =>
    Math.hypot(p.x - a.x, p.y - a.y) - Math.hypot(q.x - a.x, q.y - a.y));
  for (let d = 40; d >= 10; d -= 4) {
    const picked = [];
    for (let i = 0; i < sorted.length; i++) {
      const p = sorted[i];
      let ok = true;
      for (let j = 0; j < picked.length; j++) {
        if (Math.hypot(picked[j].x - p.x, picked[j].y - p.y) < d) { ok = false; break; }
      }
      if (ok) picked.push(p);
      if (picked.length === count) return picked;
    }
  }
  return sorted.slice(0, count);
}

// ============================================================================
// SECTION 5 - EXPLANATIONS
// A resolver picks an id from the current state. The id is looked up in the
// `explanations` prop first, then in these defaults. A title or body may be a
// string or a function of the context object. Strings are written for
// processContent, so math and links use its syntax.
// ============================================================================

function resolveExplanationId(ctx) {
  if (ctx.error) return ctx.errorKind === 'unknown' ? 'unknown-set' : 'error';
  if (!ctx.expression) return 'empty';
  if (ctx.compare === true) return 'identity-holds';
  if (ctx.compare === false) return 'identity-fails';
  if (ctx.count === 0) return 'nothing';
  if (ctx.count === ctx.total) return 'everything';
  const named = (NAMED_SELECTIONS[ctx.sets.length] || {})[ctx.signature];
  return named || 'general';
}

// ============================================================================
// SECTION 6 - STYLES
// Bump the version in CSS_ID whenever a rule below changes. Injection under a
// previously used id is skipped, so an unversioned edit silently does nothing.
// ============================================================================

const CSS_ID = 'venn-generator-styles-v2';

const CSS = `
.vg-root {
  --vg-ink: #131720;
  --vg-ink-soft: #5a6472;
  --vg-panel: #ffffff;
  --vg-rule: #c2ccd8;
  --vg-rule-soft: #e3e9ef;
  --vg-accent: #2f4fd8;
  --vg-accent-soft: #eaeeff;
  --vg-flag: #c0392b;
  --vg-ok: #1a7f4b;
  --vg-math: "Cambria Math", "Latin Modern Math", Georgia, "Times New Roman", serif;
  --vg-mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  color: var(--vg-ink);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 14px;
  line-height: 1.45;
  width: 100%;
}
.vg-root *, .vg-root *::before, .vg-root *::after { box-sizing: border-box; }
.vg-root { margin-left: auto; margin-right: auto; }
.vg-intro {
  margin: 0 0 20px;
  max-width: 68ch;
  font-size: 15.5px;
  line-height: 1.65;
  color: var(--vg-ink-soft);
}
.vg-intro > p { margin: 0 0 10px; }
.vg-intro > p:last-child { margin-bottom: 0; }
.vg-intro strong { color: var(--vg-ink); font-weight: 600; }
.vg-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 1fr);
  gap: 18px;
  align-items: start;
}
@media (max-width: 900px) { .vg-grid { grid-template-columns: 1fr; } }
.vg-panel { background: var(--vg-panel); border: 1px solid var(--vg-rule); border-radius: 10px; }
.vg-panel + .vg-panel { margin-top: 14px; }
.vg-panel-head {
  display: flex; align-items: center; justify-content: space-between;
  gap: 10px; padding: 10px 16px; border-bottom: 1px solid var(--vg-rule-soft);
}
.vg-panel-head h3 {
  margin: 0; font-size: 10.5px; font-weight: 600;
  letter-spacing: 0.11em; text-transform: uppercase; color: var(--vg-ink-soft);
}
.vg-panel-body { padding: 16px; }
.vg-stage { padding: 10px; display: flex; justify-content: center; border-radius: 10px 10px 0 0; background: #f4f6f8; }
.vg-svg {
  width: 100%; height: auto; max-width: 620px; background: #ffffff;
  border-radius: 6px; box-shadow: 0 1px 3px rgba(19, 23, 32, 0.14); touch-action: none;
}
.vg-grip { cursor: grab; }
.vg-grip:active { cursor: grabbing; }
.vg-setcount { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.vg-setcount-label { font-size: 12.5px; color: var(--vg-ink-soft); }
.vg-setcount-btns { display: flex; border: 1px solid var(--vg-rule); border-radius: 6px; overflow: hidden; }
.vg-setcount-btns button {
  font: inherit; font-size: 12.5px; border: 0; background: #ffffff; color: var(--vg-ink-soft);
  padding: 6px 13px; cursor: pointer; border-right: 1px solid var(--vg-rule-soft); white-space: nowrap;
}
.vg-setcount-btns button:last-child { border-right: 0; }
.vg-setcount-btns button[aria-pressed="true"] { background: var(--vg-accent); color: #ffffff; }
.vg-setcount-hint { margin: 8px 0 0; font-size: 11.5px; line-height: 1.55; color: var(--vg-ink-soft); }
.vg-exprline { display: flex; gap: 8px; }
.vg-expr {
  flex: 1; min-width: 0; font-family: var(--vg-math); font-size: 19px;
  padding: 8px 12px; border: 1px solid var(--vg-rule); border-radius: 6px;
  background: #ffffff; color: var(--vg-ink);
}
.vg-expr:focus { outline: 2px solid var(--vg-accent); outline-offset: -1px; border-color: var(--vg-accent); }
.vg-expr.vg-bad { border-color: var(--vg-flag); background: #fff6f5; }
.vg-pal { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 8px; }
.vg-pal button {
  font-family: var(--vg-math); font-size: 16px; line-height: 1; min-width: 34px;
  padding: 7px 8px; border: 1px solid var(--vg-rule); border-radius: 5px;
  background: #ffffff; color: var(--vg-ink); cursor: pointer;
}
.vg-pal button:hover { background: var(--vg-accent-soft); border-color: var(--vg-accent); }
.vg-pal-gap { width: 8px; min-width: 8px; }
.vg-err { color: var(--vg-flag); font-size: 12px; margin-top: 7px; min-height: 16px; font-family: var(--vg-mono); }
.vg-strip { display: flex; gap: 3px; margin-top: 2px; overflow-x: auto; padding-bottom: 3px; }
.vg-strip.vg-wrapped { flex-wrap: wrap; overflow: visible; }
.vg-cell {
  flex: 1 0 auto; min-width: 54px; border: 1px solid var(--vg-rule-soft);
  border-radius: 5px; padding: 6px 5px 5px; text-align: center; background: #fbfcfd;
}
.vg-strip.vg-wrapped .vg-cell { min-width: 0; flex: 0 0 auto; padding: 5px 6px; }
.vg-cell.vg-on { background: var(--vg-accent); border-color: var(--vg-accent); }
.vg-dots { display: flex; justify-content: center; gap: 3px; }
.vg-dot { width: 7px; height: 7px; border-radius: 50%; border: 1.2px solid var(--vg-ink-soft); }
.vg-dot.vg-in { background: var(--vg-ink-soft); }
.vg-cell.vg-on .vg-dot { border-color: #ffffff; }
.vg-cell.vg-on .vg-dot.vg-in { background: #ffffff; }
.vg-cell-nm { font-family: var(--vg-math); font-size: 12px; color: var(--vg-ink-soft); white-space: nowrap; margin-top: 4px; }
.vg-cell.vg-on .vg-cell-nm { color: #ffffff; }
.vg-cmp { display: flex; align-items: center; gap: 9px; margin-top: 14px; }
.vg-cmp-label { font-size: 12px; color: var(--vg-ink-soft); flex: 0 0 auto; }
.vg-cmp input {
  flex: 1; min-width: 0; font-family: var(--vg-math); font-size: 16px;
  padding: 6px 10px; border: 1px solid var(--vg-rule); border-radius: 6px; background: #ffffff;
}
.vg-verdict { font-family: var(--vg-math); font-size: 20px; width: 2.2em; text-align: center; color: var(--vg-ink-soft); }
.vg-verdict.vg-yes { color: var(--vg-ok); }
.vg-verdict.vg-no { color: var(--vg-flag); }
.vg-row { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.vg-row:last-child { margin-bottom: 0; }
.vg-row label { font-size: 12px; color: var(--vg-ink-soft); width: 90px; flex: 0 0 90px; }
.vg-row input[type="range"] { flex: 1; accent-color: var(--vg-accent); }
.vg-row input[type="color"] {
  width: 34px; height: 26px; padding: 0; border: 1px solid var(--vg-rule);
  border-radius: 4px; background: #ffffff; cursor: pointer;
}
.vg-row output { font-family: var(--vg-mono); font-size: 11.5px; color: var(--vg-ink-soft); width: 44px; text-align: right; }
.vg-row input[type="checkbox"] { accent-color: var(--vg-accent); width: 15px; height: 15px; }
.vg-textarea {
  width: 100%; min-height: 104px; resize: vertical; font-family: var(--vg-mono);
  font-size: 12.5px; line-height: 1.6; padding: 9px 11px; border: 1px solid var(--vg-rule);
  border-radius: 6px; background: #ffffff; color: var(--vg-ink);
}
.vg-textarea:focus { outline: 2px solid var(--vg-accent); outline-offset: -1px; }
.vg-hint { font-size: 11.5px; line-height: 1.55; color: var(--vg-ink-soft); margin-top: 8px; }
.vg-btn {
  font: inherit; font-size: 12.5px; padding: 7px 13px; border-radius: 6px;
  cursor: pointer; border: 1px solid var(--vg-rule); background: #ffffff; color: var(--vg-ink);
}
.vg-btn:hover { border-color: var(--vg-accent); color: var(--vg-accent); }
.vg-btn.vg-solid { background: var(--vg-accent); border-color: var(--vg-accent); color: #ffffff; }
.vg-btn.vg-solid:hover { background: #2540b8; color: #ffffff; }
.vg-btnrow { display: flex; gap: 7px; flex-wrap: wrap; }
.vg-presets { display: flex; flex-wrap: wrap; gap: 5px; }
.vg-presets button {
  font-family: var(--vg-math); font-size: 14px; padding: 5px 9px;
  border: 1px solid var(--vg-rule-soft); border-radius: 5px;
  background: #fbfcfd; color: var(--vg-ink); cursor: pointer;
}
.vg-presets button:hover { background: var(--vg-accent-soft); border-color: var(--vg-accent); }
.vg-tabs { display: flex; gap: 2px; border-bottom: 2px solid var(--vg-rule-soft); padding: 0 14px; overflow-x: auto; }
.vg-tabs button {
  font: inherit; font-size: 12px; border: 0; background: transparent; color: var(--vg-ink-soft);
  padding: 9px 12px; cursor: pointer; border-bottom: 2px solid transparent;
  margin-bottom: -2px; white-space: nowrap;
}
.vg-tabs button[aria-selected="true"] { color: var(--vg-accent); border-bottom-color: var(--vg-accent); font-weight: 600; }
.vg-readout { font-family: var(--vg-mono); font-size: 11.5px; color: var(--vg-ink-soft); word-break: break-all; }
.vg-readout strong { color: var(--vg-ink); font-weight: 600; }
.vg-exp { padding: 18px 20px 20px; }
.vg-exp-tag {
  display: inline-block; font-family: var(--vg-mono); font-size: 10px;
  letter-spacing: 0.06em; text-transform: uppercase; color: var(--vg-ink-soft);
  border: 1px solid var(--vg-rule-soft); border-radius: 4px; padding: 2px 7px;
}
.vg-exp-title { margin: 10px 0 10px; font-size: 16px; font-weight: 600; letter-spacing: -0.005em; line-height: 1.3; }
.vg-exp.vg-state-ok .vg-exp-title { color: var(--vg-ok); }
.vg-exp.vg-state-bad .vg-exp-title { color: var(--vg-flag); }
.vg-exp-body { font-size: 14px; line-height: 1.65; }
.vg-exp-body > p { margin: 0 0 12px; }
.vg-exp-body > p:last-child { margin-bottom: 0; }
.vg-exp-body a { color: var(--vg-accent); }
.vg-exp-note {
  margin-top: 16px; padding: 12px 0 12px 14px;
  border-left: 2px solid var(--vg-rule); color: var(--vg-ink-soft); font-size: 13px; line-height: 1.6;
}
.vg-exp-note > p { margin: 0 0 10px; }
.vg-exp-note > p:last-child { margin-bottom: 0; }`;

function useInjectedStyles() {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (document.getElementById(CSS_ID)) return;
    const tag = document.createElement('style');
    tag.id = CSS_ID;
    tag.textContent = CSS;
    document.head.appendChild(tag);
  }, []);
}

// ============================================================================
// SECTION 7 - CONTENT
// ============================================================================

function Content({ text, className }) {
  const rendered = useMemo(() => {
    if (!text) return '';
    try { return processContent(text); } catch (e) { return text; }
  }, [text]);

  if (typeof rendered === 'string') {
    return <div className={className} dangerouslySetInnerHTML={{ __html: rendered }} />;
  }
  return <div className={className}>{rendered}</div>;
}

// ============================================================================
// SECTION 8 - DEFAULT DATA
// ============================================================================

const PALETTE_OPS = ['gap', '\u2229', '\u222a', '\\', '\u2295', '\u1d9c', 'gap', '(', ')', '\u2205', 'U'];
const SPACED_OPS = '\u2229\u222a\\\u2295';

const DEFAULT_THEME = {
  color: '#2f4fd8',
  opacity: 0.82,
  neutralFill: '#ffffff',
  stroke: '#1e293b',
  strokeWidth: 1.5,
  universeStroke: '#c2ccd8',
  labelColor: '#334155',
  mutedLabelColor: '#94a3b8'
};

const MATH_FONT = "'Cambria Math','Latin Modern Math',Georgia,serif";

const DEFAULT_INTRO =
  'Type any set expression and the diagram shades every region that satisfies it \u2014 ' +
  'union, intersection, difference, complement, and anything you nest inside them. ' +
  'Change the number of sets, drag the curves to change how they overlap, or list real ' +
  'elements and watch each one settle into the region its membership puts it in.';

// ============================================================================
// SECTION 9 - COMPONENT
// ============================================================================

export const VennGenerator = (props) => {
  const {
    initialSetCount = 2,
    initialExpression = 'A \u2229 B',
    initialCompare = '',
    initialElements = 'A = 1, 2, 3, 7, 9\nB = 3, 4, 5, 9\nU = 6, 8',
    width = 600,
    height = 460,
    margin = 14,
    maxWidth = 1200,
    intro = DEFAULT_INTRO,
    showIntro = true,
    theme: themeProp = null,
    explanations: explanationsProp = null,
    geometryNotes: geometryNotesProp = null,
    presets: presetsProp = null,
    // Copy config is an authoring aid, not a student-facing feature. Off unless asked for.
    showCopyConfig = false,
    showSetCount = true,
    showCompare = true,
    showLibrary = true,
    showElementsTab = true,
    showStyleTab = true,
    showExplanation = true,
    showExplanationId = false,
    showExport = true,
    enableDrag = true,
    onChange = null,
    className = ''
  } = props;

  useInjectedStyles();

  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9]/g, '');
  const svgRef = useRef(null);
  const exprRef = useRef(null);
  const dragRef = useRef(null);

  const theme = useMemo(() => ({ ...DEFAULT_THEME, ...(themeProp || {}) }), [themeProp]);
  const presets = presetsProp || DEFAULT_PRESETS;
  const uRect = useMemo(
    () => ({ x: margin, y: margin, width: width - margin * 2, height: height - margin * 2 }),
    [margin, width, height]
  );

  const [setCount, setSetCount] = useState(Math.min(5, Math.max(2, initialSetCount)));
  const [expression, setExpression] = useState(initialExpression);
  const [compareExpr, setCompareExpr] = useState(initialCompare);
  const [elementText, setElementText] = useState(initialElements);
  const [tab, setTab] = useState('library');
  const [size, setSize] = useState(112);
  const [fill, setFill] = useState(theme.color);
  const [opacity, setOpacity] = useState(theme.opacity);
  const [stroke, setStroke] = useState(theme.stroke);
  const [strokeWidth, setStrokeWidth] = useState(theme.strokeWidth);
  const [showUniverse, setShowUniverse] = useState(true);
  const [showRegionLabels, setShowRegionLabels] = useState(false);
  const [showCaption, setShowCaption] = useState(true);
  const [showElements, setShowElements] = useState(true);
  const [showCounts, setShowCounts] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shapes, setShapes] = useState(() =>
    defaultLayout(Math.min(5, Math.max(2, initialSetCount)), 112, width, height));

  const sets = useMemo(() => SET_NAMES.slice(0, setCount), [setCount]);
  const regionTable = useMemo(() => buildRegionTable(sets), [sets]);

  // --- evaluation -----------------------------------------------------------
  const evaluation = useMemo(() => {
    const src = String(expression || '').trim();
    if (!src) return { selected: new Set(), error: '', errorKind: '', signature: '' };
    try {
      const tree = parseExpression(src);
      const unknown = Array.from(namesIn(tree)).filter((x) => sets.indexOf(x) === -1);
      if (unknown.length) {
        return {
          selected: new Set(),
          error: 'Unknown set \u201c' + unknown[0] + '\u201d',
          errorKind: 'unknown',
          signature: ''
        };
      }
      const selected = new Set();
      regionTable.forEach((r) => { if (evalNode(tree, r.vars)) selected.add(r.mask); });
      const signature = regionTable.map((r) => (selected.has(r.mask) ? '1' : '0')).join('');
      return { selected, error: '', errorKind: '', signature };
    } catch (e) {
      return { selected: new Set(), error: e.message, errorKind: 'syntax', signature: '' };
    }
  }, [expression, sets, regionTable]);

  const comparison = useMemo(() => {
    const other = String(compareExpr || '').trim();
    if (!other || !String(expression || '').trim() || evaluation.error) {
      return { verdict: null, differing: [] };
    }
    try {
      const tree = parseExpression(other);
      if (Array.from(namesIn(tree)).some((x) => sets.indexOf(x) === -1)) {
        return { verdict: null, differing: [] };
      }
      const differing = [];
      regionTable.forEach((r) => {
        const a = evaluation.selected.has(r.mask);
        const b = evalNode(tree, r.vars);
        if (a !== b) differing.push(r.label);
      });
      return { verdict: differing.length === 0, differing };
    } catch (e) {
      return { verdict: null, differing: [] };
    }
  }, [compareExpr, expression, evaluation, sets, regionTable]);

  // --- geometry -------------------------------------------------------------
  const twoSet = useMemo(() => {
    if (setCount !== 2 || !shapes.A || !shapes.B) return null;
    return twoSetPaths(shapes.A, shapes.B, uRect);
  }, [setCount, shapes, uRect]);

  const needsSamples = Boolean(
    showRegionLabels || showCounts || (showElements && String(elementText || '').trim())
  );

  const buckets = useMemo(() => {
    if (!needsSamples) return null;
    const ready = sets.every((s) => shapes[s]);
    if (!ready) return null;
    return sampleRegions(sets, shapes, uRect, setCount >= 4 ? 4 : 7);
  }, [needsSamples, sets, shapes, uRect, setCount]);

  const elementsByMask = useMemo(() => parseElementText(elementText, sets), [elementText, sets]);

  const placements = useMemo(() => {
    if (!buckets) return [];
    const out = [];
    regionTable.forEach((r) => {
      const pts = buckets[r.mask];
      if (!pts || !pts.length) return;
      const items = elementsByMask[r.mask] || [];
      const anchor = regionCentroid(pts, sets, shapes);
      const chips = showElements && items.length
        ? packPoints(pts, items.length, anchor).map((p, i) => ({ x: p.x, y: p.y, text: items[i] }))
        : [];
      out.push({ mask: r.mask, label: r.label, anchor, chips, count: items.length });
    });
    return out;
  }, [buckets, regionTable, elementsByMask, showElements, sets, shapes]);

  // --- serializer -----------------------------------------------------------
  const config = useMemo(() => ({
    sets,
    expression: String(expression || '').trim(),
    compare: String(compareExpr || '').trim() || null,
    highlight: regionTable.filter((r) => evaluation.selected.has(r.mask)).map((r) => r.key),
    shapes: sets.reduce((acc, s) => { acc[s] = shapes[s]; return acc; }, {}),
    theme: { color: fill, opacity, stroke, strokeWidth },
    universe: showUniverse,
    elements: String(elementText || '').trim() || null
  }), [sets, expression, compareExpr, regionTable, evaluation, shapes, fill, opacity,
    stroke, strokeWidth, showUniverse, elementText]);

  const onChangeRef = useRef(onChange);
  useEffect(() => { onChangeRef.current = onChange; }, [onChange]);
  useEffect(() => { if (onChangeRef.current) onChangeRef.current(config); }, [config]);

  // --- explanation ----------------------------------------------------------
  const explanation = useMemo(() => {
    const shaded = regionTable.filter((r) => evaluation.selected.has(r.mask)).map((r) => r.label);
    const ctx = {
      expression: String(expression || '').trim(),
      compareExpression: String(compareExpr || '').trim(),
      error: evaluation.error,
      errorKind: evaluation.errorKind,
      sets,
      setList: sets.join(', '),
      count: evaluation.selected.size,
      total: regionTable.length,
      signature: evaluation.signature,
      compare: comparison.verdict,
      regionList: shaded.slice(0, 8).join(', ') + (shaded.length > 8 ? ', \u2026' : ''),
      regions: shaded,
      diffCount: comparison.differing.length,
      diffList: comparison.differing.slice(0, 6).join(', ') + (comparison.differing.length > 6 ? ', \u2026' : ''),
      plural: (word, k) => (k === 1 ? word : word + 's')
    };
    const id = resolveExplanationId(ctx);
    const source = (explanationsProp && explanationsProp[id]) || DEFAULT_EXPLANATIONS[id] || DEFAULT_EXPLANATIONS.general;
    const resolve = (v) => (typeof v === 'function' ? v(ctx) : v);

    let note = '';
    if (setCount === 2 && !evaluation.error && twoSet) {
      const notes = { ...DEFAULT_GEOMETRY_NOTES, ...(geometryNotesProp || {}) };
      note = notes[twoSet.classification.type] || '';
    }
    return { id, title: resolve(source.title), body: resolve(source.body), note };
  }, [regionTable, evaluation, expression, compareExpr, sets, comparison, explanationsProp,
    geometryNotesProp, setCount, twoSet]);

  // --- handlers -------------------------------------------------------------
  const changeSetCount = useCallback((n) => {
    setSetCount(n);
    setShapes(defaultLayout(n, size, width, height));
    const nextSets = SET_NAMES.slice(0, n);
    const stillValid = (src) => {
      const trimmed = String(src || '').trim();
      if (!trimmed) return true;
      try {
        return !Array.from(namesIn(parseExpression(trimmed))).some((x) => nextSets.indexOf(x) === -1);
      } catch (e) {
        return false;
      }
    };
    if (!stillValid(expression)) setExpression((presets[n] || DEFAULT_PRESETS[n])[0]);
    if (!stillValid(compareExpr)) setCompareExpr('');
  }, [size, width, height, expression, compareExpr, presets]);

  const changeSize = useCallback((next) => {
    setSize(next);
    setShapes(defaultLayout(setCount, next, width, height));
  }, [setCount, width, height]);

  const applyRelation = useCallback((name) => {
    const fn = RELATION_LAYOUTS[name];
    if (!fn) return;
    setShapes((prev) => ({ ...prev, ...fn(setCount, size, width, height) }));
  }, [setCount, size, width, height]);

  const insertSymbol = useCallback((sym) => {
    const input = exprRef.current;
    if (!input) { setExpression((p) => p + sym); return; }
    const start = input.selectionStart == null ? input.value.length : input.selectionStart;
    const end = input.selectionEnd == null ? input.value.length : input.selectionEnd;
    const padded = SPACED_OPS.indexOf(sym) > -1 ? ' ' + sym + ' ' : sym;
    const next = input.value.slice(0, start) + padded + input.value.slice(end);
    setExpression(next);
    window.requestAnimationFrame(() => {
      input.focus();
      const pos = start + padded.length;
      input.setSelectionRange(pos, pos);
    });
  }, []);

  const toUserSpace = useCallback((evt) => {
    const svg = svgRef.current;
    if (!svg || !svg.createSVGPoint) return null;
    const pt = svg.createSVGPoint();
    pt.x = evt.clientX;
    pt.y = evt.clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return null;
    return pt.matrixTransform(ctm.inverse());
  }, []);

  const handlePointerDown = useCallback((key) => (e) => {
    if (!enableDrag) return;
    const p = toUserSpace(e);
    if (!p) return;
    dragRef.current = { key, dx: p.x - shapes[key].cx, dy: p.y - shapes[key].cy };
    if (e.currentTarget.setPointerCapture) e.currentTarget.setPointerCapture(e.pointerId);
    e.preventDefault();
  }, [enableDrag, shapes, toUserSpace]);

  const handlePointerMove = useCallback((e) => {
    const drag = dragRef.current;
    if (!drag) return;
    const p = toUserSpace(e);
    if (!p) return;
    setShapes((prev) => ({
      ...prev,
      [drag.key]: {
        ...prev[drag.key],
        cx: Math.max(uRect.x - 40, Math.min(uRect.x + uRect.width + 40, p.x - drag.dx)),
        cy: Math.max(uRect.y - 40, Math.min(uRect.y + uRect.height + 40, p.y - drag.dy))
      }
    }));
  }, [toUserSpace, uRect]);

  const endDrag = useCallback(() => { dragRef.current = null; }, []);

  const serializeSvg = useCallback(() => {
    const node = svgRef.current;
    if (!node) return '';
    const clone = node.cloneNode(true);
    clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    clone.setAttribute('width', String(width));
    clone.setAttribute('height', String(height));
    const grips = clone.querySelectorAll('.vg-grip');
    for (let i = 0; i < grips.length; i++) grips[i].parentNode.removeChild(grips[i]);
    return '<?xml version="1.0" encoding="UTF-8"?>\n' + new XMLSerializer().serializeToString(clone);
  }, [width, height]);

  const downloadBlob = useCallback((blob, name) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, []);

  const downloadSvg = useCallback(() => {
    const text = serializeSvg();
    if (!text) return;
    downloadBlob(new Blob([text], { type: 'image/svg+xml;charset=utf-8' }), 'venn.svg');
  }, [serializeSvg, downloadBlob]);

  const downloadPng = useCallback(() => {
    const text = serializeSvg();
    if (!text) return;
    const scale = 2;
    const url = URL.createObjectURL(new Blob([text], { type: 'image/svg+xml;charset=utf-8' }));
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = width * scale;
      canvas.height = height * scale;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.scale(scale, scale);
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
      canvas.toBlob((b) => { if (b) downloadBlob(b, 'venn.png'); }, 'image/png');
    };
    img.onerror = () => URL.revokeObjectURL(url);
    img.src = url;
  }, [serializeSvg, width, height, downloadBlob]);

  const copyConfig = useCallback(() => {
    const text = JSON.stringify(config, null, 2);
    const done = () => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, done);
    } else {
      done();
    }
  }, [config]);

  // --- render helpers -------------------------------------------------------
  const groupCentre = useMemo(() => {
    const ready = sets.filter((s) => shapes[s]);
    if (!ready.length) return { x: width / 2, y: height / 2 };
    return {
      x: ready.reduce((a, s) => a + shapes[s].cx, 0) / ready.length,
      y: ready.reduce((a, s) => a + shapes[s].cy, 0) / ready.length
    };
  }, [sets, shapes, width, height]);

  const renderRegions = () => {
    if (setCount === 2 && twoSet) {
      return regionTable.map((r) => {
        const d = twoSet.paths[r.mask];
        if (!d) return null;
        const on = evaluation.selected.has(r.mask);
        return (
          <path
            key={'region-' + r.mask}
            d={d}
            fillRule="evenodd"
            fill={on ? fill : theme.neutralFill}
            opacity={on ? opacity : 1}
          />
        );
      });
    }
    return regionTable.map((r) => {
      if (!evaluation.selected.has(r.mask)) return null;
      let node = (
        <rect
          x={uRect.x}
          y={uRect.y}
          width={uRect.width}
          height={uRect.height}
          fill={fill}
          opacity={opacity}
        />
      );
      for (let i = sets.length - 1; i >= 0; i--) {
        const clip = ((r.mask & (1 << i)) ? 'in' : 'out') + sets[i] + uid;
        node = <g clipPath={'url(#' + clip + ')'}>{node}</g>;
      }
      return <g key={'region-' + r.mask}>{node}</g>;
    });
  };

  const ready = sets.every((s) => shapes[s]);
  const stripWrapped = setCount >= 4;

  return (
    <div
      className={'vg-root ' + className}
      style={maxWidth ? { maxWidth: typeof maxWidth === 'number' ? maxWidth + 'px' : maxWidth } : undefined}
    >
      {showIntro && intro && (
        typeof intro === 'string'
          ? <Content className="vg-intro" text={intro} />
          : <div className="vg-intro">{intro}</div>
      )}
      <div className="vg-grid">

        {/* ---------------- diagram + explanation ---------------- */}
        <div>
          <div className="vg-panel">
            <div className="vg-stage">
              <svg
                ref={svgRef}
                className="vg-svg"
                viewBox={'0 0 ' + width + ' ' + height}
                xmlns="http://www.w3.org/2000/svg"
                onPointerMove={handlePointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                onPointerLeave={endDrag}
              >
                <rect x="0" y="0" width={width} height={height} fill="#ffffff" />

                {ready && (
                  <defs>
                    {sets.map((s) => (
                      <React.Fragment key={'clip-' + s}>
                        <clipPath id={'in' + s + uid} clipPathUnits="userSpaceOnUse">
                          <path d={shapePath(shapes[s])} />
                        </clipPath>
                        <clipPath id={'out' + s + uid} clipPathUnits="userSpaceOnUse">
                          <path d={rectPath(uRect) + ' ' + shapePath(shapes[s])} clipRule="evenodd" />
                        </clipPath>
                      </React.Fragment>
                    ))}
                  </defs>
                )}

                {ready && <g>{renderRegions()}</g>}

                {showUniverse && (
                  <g>
                    <rect x={uRect.x} y={uRect.y} width={uRect.width} height={uRect.height}
                      fill="none" stroke={theme.universeStroke} strokeWidth="1" />
                    <text x={uRect.x + 15} y={uRect.y + 26} fontFamily={MATH_FONT}
                      fontSize="17" fill="#8794a5">U</text>
                  </g>
                )}

                {ready && sets.map((s) => (
                  <path key={'outline-' + s} d={shapePath(shapes[s])} fill="none"
                    stroke={stroke} strokeWidth={strokeWidth} />
                ))}

                {ready && enableDrag && sets.map((s) => (
                  <path key={'grip-' + s} className="vg-grip" d={shapePath(shapes[s])}
                    fill="none" stroke="transparent" strokeWidth="16" pointerEvents="stroke"
                    onPointerDown={handlePointerDown(s)} />
                ))}

                {ready && sets.map((s) => {
                  const sh = shapes[s];
                  let dx = sh.cx - groupCentre.x;
                  let dy = sh.cy - groupCentre.y;
                  if (Math.hypot(dx, dy) < 1) { dx = 0; dy = -1; }
                  const d = Math.hypot(dx, dy);
                  const reach = Math.max(sh.rx, sh.ry) + 18;
                  const tx = Math.max(26, Math.min(width - 26, sh.cx + (dx / d) * reach));
                  const ty = Math.max(36, Math.min(height - 12, sh.cy + (dy / d) * reach + 6));
                  return (
                    <text
                      key={'name-' + s}
                      x={tx}
                      y={ty}
                      textAnchor="middle"
                      fontFamily={MATH_FONT}
                      fontSize="20"
                      fontStyle="italic"
                      fill={stroke}
                    >
                      {s}
                    </text>
                  );
                })}

                {placements.map((pl) => {
                  const on = evaluation.selected.has(pl.mask);
                  const ink = on ? '#ffffff' : theme.labelColor;
                  const nodes = [];
                  pl.chips.forEach((chip, i) => {
                    nodes.push(
                      <text
                        key={'chip-' + pl.mask + '-' + i}
                        x={chip.x}
                        y={chip.y + 5}
                        textAnchor="middle"
                        fontFamily={MATH_FONT}
                        fontSize="14"
                        fill={ink}
                      >
                        {chip.text}
                      </text>
                    );
                  });
                  if (showCounts && pl.anchor) {
                    nodes.push(
                      <text
                        key={'count-' + pl.mask}
                        x={pl.anchor.x}
                        y={pl.anchor.y + (pl.chips.length ? 34 : 5)}
                        textAnchor="middle"
                        fontFamily={MATH_FONT}
                        fontSize="15"
                        fontWeight="700"
                        fill={on ? '#ffffff' : '#64748b'}
                      >
                        {pl.count}
                      </text>
                    );
                  }
                  if (showRegionLabels && pl.mask !== 0 && setCount <= 3 && pl.anchor) {
                    nodes.push(
                      <text
                        key={'label-' + pl.mask}
                        x={pl.anchor.x}
                        y={pl.anchor.y - (pl.chips.length ? 34 : -5)}
                        textAnchor="middle"
                        fontFamily={MATH_FONT}
                        fontSize="13"
                        fill={on ? '#e4e9ff' : theme.mutedLabelColor}
                      >
                        {pl.label}
                      </text>
                    );
                  }
                  return <g key={'place-' + pl.mask}>{nodes}</g>;
                })}

                {showCaption && String(expression || '').trim() && !evaluation.error && (
                  <text x={width / 2} y={height - 16} textAnchor="middle"
                    fontFamily={MATH_FONT} fontSize="19" fill="#131720">
                    {String(expression).trim()}
                  </text>
                )}
              </svg>
            </div>

            {(showExport || showCopyConfig) && (
              <div className="vg-panel-head" style={{ borderTop: '1px solid var(--vg-rule-soft)', borderBottom: 0 }}>
                <h3>Export</h3>
                <div className="vg-btnrow">
                  {showExport && (
                    <button type="button" className="vg-btn" onClick={downloadSvg}>Download SVG</button>
                  )}
                  {showExport && (
                    <button type="button" className="vg-btn" onClick={downloadPng}>Download PNG</button>
                  )}
                  {showCopyConfig && (
                    <button type="button" className="vg-btn" onClick={copyConfig}>
                      {copied ? 'Copied' : 'Copy config'}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {showExplanation && (
            <div className="vg-panel">
              <div className={
                'vg-exp' +
                (comparison.verdict === true ? ' vg-state-ok' : '') +
                (evaluation.error || comparison.verdict === false ? ' vg-state-bad' : '')
              }>
                {showExplanationId && <span className="vg-exp-tag">{explanation.id}</span>}
                <h4 className="vg-exp-title">{explanation.title}</h4>
                <Content className="vg-exp-body" text={explanation.body} />
                {explanation.note && <Content className="vg-exp-note" text={explanation.note} />}
              </div>
            </div>
          )}
        </div>

        {/* ---------------- controls ---------------- */}
        <div>
          <div className="vg-panel">
            <div className="vg-panel-head">
              <h3>Expression</h3>
              <span className="vg-readout">
                {evaluation.error ? '' : (
                  <>
                    <strong>{evaluation.selected.size}</strong>
                    {'/' + regionTable.length}
                  </>
                )}
              </span>
            </div>
            <div className="vg-panel-body">
              {showSetCount && (
                <div style={{ marginBottom: 14 }}>
                  <div className="vg-setcount">
                    <span className="vg-setcount-label">Sets in the diagram</span>
                    <div className="vg-setcount-btns" role="group" aria-label="Number of sets">
                      {[2, 3, 4, 5].map((n) => (
                        <button key={'n' + n} type="button" aria-pressed={setCount === n}
                          onClick={() => changeSetCount(n)}>
                          {n + ' sets'}
                        </button>
                      ))}
                    </div>
                  </div>
                  <p className="vg-setcount-hint">
                    Every combination of memberships is a region, so {setCount} sets
                    give {Math.pow(2, setCount)} of them &mdash; that is how many your
                    expression is tested against. Two and three sets are drawn as circles,
                    four and five as ellipses, in the one arrangement that keeps every
                    region non-empty.
                  </p>
                </div>
              )}

              <div className="vg-exprline">
                <input ref={exprRef} value={expression} spellCheck={false}
                  className={'vg-expr' + (evaluation.error ? ' vg-bad' : '')}
                  aria-label="Set expression"
                  onChange={(e) => setExpression(e.target.value)} />
                <button
                  type="button"
                  className="vg-btn vg-solid"
                  onClick={() => { setExpression(''); if (exprRef.current) exprRef.current.focus(); }}
                >
                  Clear
                </button>
              </div>

              <div className="vg-pal">
                {sets.concat(PALETTE_OPS).map((sym, i) => (
                  sym === 'gap'
                    ? <span key={'gap' + i} className="vg-pal-gap" />
                    : (
                      <button key={'sym' + i} type="button" onClick={() => insertSymbol(sym)}>
                        {sym}
                      </button>
                    )
                ))}
              </div>

              <div className="vg-err">{evaluation.error}</div>

              <div className="vg-panel-head" style={{ padding: '0 0 8px', border: 0 }}>
                <h3>Regions</h3>
                <span className="vg-readout">{evaluation.signature}</span>
              </div>

              <div className={'vg-strip' + (stripWrapped ? ' vg-wrapped' : '')}>
                {regionTable.map((r) => (
                  <div
                    key={'cell-' + r.mask}
                    className={'vg-cell' + (evaluation.selected.has(r.mask) ? ' vg-on' : '')}
                    title={r.key}
                  >
                    <div className="vg-dots">
                      {sets.map((s) => (
                        <span key={s} className={'vg-dot' + (r.vars[s] ? ' vg-in' : '')} />
                      ))}
                    </div>
                    {setCount <= 3 && <div className="vg-cell-nm">{r.label}</div>}
                  </div>
                ))}
              </div>

              {showCompare && (
                <div className="vg-cmp">
                  <span className="vg-cmp-label">Compare</span>
                  <input value={compareExpr} spellCheck={false}
                    aria-label="Second expression to compare"
                    placeholder={'A\u1d9c \u222a B\u1d9c'}
                    onChange={(e) => setCompareExpr(e.target.value)} />
                  <span className={
                    'vg-verdict' +
                    (comparison.verdict === true ? ' vg-yes' : '') +
                    (comparison.verdict === false ? ' vg-no' : '')
                  }>
                    {comparison.verdict === null ? '\u00b7' : (comparison.verdict ? '\u2261' : '\u2262')}
                  </span>
                </div>
              )}
            </div>
          </div>

          {(showLibrary || showElementsTab || showStyleTab) && (
            <div className="vg-panel">
              <div className="vg-tabs" role="tablist">
                {showLibrary && (
                  <button type="button" role="tab" aria-selected={tab === 'library'} onClick={() => setTab('library')}>
                    Library
                  </button>
                )}
                {showElementsTab && (
                  <button type="button" role="tab" aria-selected={tab === 'elements'} onClick={() => setTab('elements')}>
                    Elements
                  </button>
                )}
                {showStyleTab && (
                  <button type="button" role="tab" aria-selected={tab === 'style'} onClick={() => setTab('style')}>
                    Style
                  </button>
                )}
              </div>

              {tab === 'library' && showLibrary && (
                <div className="vg-panel-body">
                  <div className="vg-presets">
                    {(presets[setCount] || DEFAULT_PRESETS[setCount]).map((p) => (
                      <button key={p} type="button" onClick={() => setExpression(p)}>{p}</button>
                    ))}
                  </div>
                  {setCount <= 3 ? (
                    <>
                      <div className="vg-btnrow" style={{ marginTop: 14 }}>
                        {Object.keys(RELATION_LAYOUTS).map((k) => (
                          <button key={k} type="button" className="vg-btn" onClick={() => applyRelation(k)}>
                            {k}
                          </button>
                        ))}
                      </div>
                      <p className="vg-hint">
                        Reshape the layout. Every region path is re-derived, so a relation
                        that empties a region empties it in the drawing too.
                      </p>
                    </>
                  ) : (
                    <p className="vg-hint">
                      At four and five sets the layout is fixed &mdash; it is the arrangement
                      that makes all {Math.pow(2, setCount)} regions exist. Drag a curve and
                      some of them disappear.
                    </p>
                  )}
                </div>
              )}

              {tab === 'elements' && showElementsTab && (
                <div className="vg-panel-body">
                  <textarea className="vg-textarea" value={elementText} spellCheck={false}
                    aria-label="Set elements" onChange={(e) => setElementText(e.target.value)} />
                  <p className="vg-hint">
                    One set per line, as <code>A = 1, 2, 3</code>. Use <code>U</code> for
                    elements outside every set. Each element is placed in the region its
                    membership selects, so nothing is positioned by hand.
                  </p>
                  <div className="vg-row" style={{ marginTop: 14 }}>
                    <label htmlFor={'showel' + uid}>Show elements</label>
                    <input id={'showel' + uid} type="checkbox" checked={showElements}
                      onChange={(e) => setShowElements(e.target.checked)} />
                  </div>
                  <div className="vg-row">
                    <label htmlFor={'showcount' + uid}>Show counts</label>
                    <input id={'showcount' + uid} type="checkbox" checked={showCounts}
                      onChange={(e) => setShowCounts(e.target.checked)} />
                  </div>
                </div>
              )}

              {tab === 'style' && showStyleTab && (
                <div className="vg-panel-body">
                  <div className="vg-row">
                    <label htmlFor={'fill' + uid}>Highlight</label>
                    <input id={'fill' + uid} type="color" value={fill}
                      onChange={(e) => setFill(e.target.value)} />
                    <input type="range" min="10" max="100" aria-label="Highlight opacity"
                      value={Math.round(opacity * 100)}
                      onChange={(e) => setOpacity(Number(e.target.value) / 100)} />
                    <output>{Math.round(opacity * 100)}%</output>
                  </div>
                  <div className="vg-row">
                    <label htmlFor={'stroke' + uid}>Outline</label>
                    <input id={'stroke' + uid} type="color" value={stroke}
                      onChange={(e) => setStroke(e.target.value)} />
                    <input type="range" min="0" max="6" step="0.5" aria-label="Outline width"
                      value={strokeWidth}
                      onChange={(e) => setStrokeWidth(Number(e.target.value))} />
                    <output>{strokeWidth}</output>
                  </div>
                  <div className="vg-row">
                    <label htmlFor={'size' + uid}>Size</label>
                    <input id={'size' + uid} type="range" min="50" max="150" value={size}
                      onChange={(e) => changeSize(Number(e.target.value))} />
                    <output>{size}</output>
                  </div>
                  <div className="vg-row">
                    <label htmlFor={'showu' + uid}>Universe box</label>
                    <input id={'showu' + uid} type="checkbox" checked={showUniverse}
                      onChange={(e) => setShowUniverse(e.target.checked)} />
                  </div>
                  <div className="vg-row">
                    <label htmlFor={'showlab' + uid}>Region labels</label>
                    <input id={'showlab' + uid} type="checkbox" checked={showRegionLabels}
                      onChange={(e) => setShowRegionLabels(e.target.checked)} />
                  </div>
                  <div className="vg-row">
                    <label htmlFor={'showcap' + uid}>Caption</label>
                    <input id={'showcap' + uid} type="checkbox" checked={showCaption}
                      onChange={(e) => setShowCaption(e.target.checked)} />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export { DEFAULT_EXPLANATIONS, NAMED_SELECTIONS, DEFAULT_GEOMETRY_NOTES, DEFAULT_PRESETS };

// The three path builders and the theme defaults are exported so the page's
// frozen-state stills are drawn from the tool's own geometry rather than a
// re-derivation (Line 1). All are pure module-level values; nothing about the
// component's behaviour changes.
export { shapePath, rectPath, twoSetPaths, DEFAULT_THEME, MATH_FONT };

export default VennGenerator;