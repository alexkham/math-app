// // import React, { useState, useEffect, useCallback, forwardRef, useImperativeHandle, useRef } from 'react';

// // /* =====================================================
// //    LOGARITHMIC EQUATION SOLVER v3b

// //    Changes from v3:
// //    - Movable cursor: tracked via cursorPos state
// //    - Click any character in display to place cursor there
// //    - Left/Right arrow keys move cursor
// //    - Home/End jump to start/end
// //    - Insert at cursor position (not just append)
// //    - Backspace deletes char before cursor
// //    - Delete key deletes char after cursor

// //    Two exports:
// //    - LogarithmicSolverEngine: Standalone solver component
// //    - LogarithmicSolverWithExamples: Full educational wrapper (default)
// //    ===================================================== */


// // /* =====================================================
// //    GLOBAL STYLES (cursor animation, responsive)
// //    ===================================================== */

// // const GLOBAL_STYLES = `
// //   @keyframes blink-cursor {
// //     0%, 100% { opacity: 1; }
// //     50% { opacity: 0; }
// //   }
// //   .eq-cursor {
// //     display: inline-block;
// //     width: 2px;
// //     height: 1.2em;
// //     background: rgba(255,255,255,0.85);
// //     margin: 0 1px;
// //     vertical-align: middle;
// //     animation: blink-cursor 1s step-end infinite;
// //     flex-shrink: 0;
// //   }
// //   .eq-display {
// //     flex-wrap: wrap;
// //     word-break: break-all;
// //   }
// //   .eq-char-span {
// //     cursor: text;
// //     position: relative;
// //   }
// //   @media (max-width: 768px) {
// //     .eq-main-layout {
// //       flex-direction: column !important;
// //     }
// //     .eq-main-layout > div {
// //       flex: 1 1 100% !important;
// //       max-height: none !important;
// //     }
// //   }
// // `;


// // /* =====================================================
// //    MATH RENDERER (inlined from shared MathRenderer)
// //    ===================================================== */

// // const MATH_STYLES = `
// //   .mr {
// //     display: inline-flex;
// //     align-items: center;
// //     font-family: 'Cambria Math', 'STIX Two Math', 'Latin Modern Math', 'Times New Roman', serif;
// //     vertical-align: middle;
// //   }
// //   .mr-frac {
// //     display: inline-flex;
// //     flex-direction: column;
// //     align-items: center;
// //     vertical-align: middle;
// //     padding: 0 3px;
// //   }
// //   .mr-frac-num {
// //     border-bottom: 1.5px solid currentColor;
// //     padding: 1px 6px 3px;
// //     line-height: 1.2;
// //   }
// //   .mr-frac-den {
// //     padding: 3px 6px 1px;
// //     line-height: 1.2;
// //   }
// //   .mr-sup {
// //     font-size: 0.65em;
// //     vertical-align: super;
// //     line-height: 1;
// //     margin-left: 1px;
// //   }
// //   .mr-sub {
// //     font-size: 0.65em;
// //     vertical-align: sub;
// //     line-height: 1;
// //     margin-left: 1px;
// //   }
// //   .mr-radical {
// //     display: inline-flex;
// //     align-items: stretch;
// //     vertical-align: middle;
// //   }
// //   .mr-radical-symbol {
// //     font-size: 1.15em;
// //     line-height: 1;
// //     margin-right: -1px;
// //     display: flex;
// //     align-items: flex-end;
// //   }
// //   .mr-radical-body {
// //     border-top: 1.5px solid currentColor;
// //     padding: 2px 4px 0;
// //     display: inline-flex;
// //     align-items: center;
// //   }
// //   .mr-paren {
// //     font-weight: 300;
// //     font-size: 1.1em;
// //   }
// //   .mr-paren-tall {
// //     font-size: 1.3em;
// //   }
// //   .mr-op {
// //     margin: 0 4px;
// //   }
// //   .mr-var {
// //     font-style: italic;
// //   }
// //   .mr-log {
// //     font-style: normal;
// //     margin-right: 2px;
// //   }
// //   .mr-abs {
// //     font-weight: 300;
// //     font-size: 1.1em;
// //   }
// // `;

// // function renderNode(node, parentType = null) {
// //   if (!node) return null;

// //   switch (node.type) {
// //     case 'NUMBER':
// //       return <span>{formatNumber(node.value)}</span>;
// //     case 'VARIABLE':
// //       return <span className="mr-var">{node.name}</span>;
// //     case 'E':
// //       return <span className="mr-var">e</span>;
// //     case 'NEGATE': {
// //       const inner = renderNode(node.operand, 'NEGATE');
// //       const needsParens = node.operand.type === 'ADD' || node.operand.type === 'SUBTRACT';
// //       return <span>{'\u2212'}{needsParens && <span className="mr-paren">(</span>}{inner}{needsParens && <span className="mr-paren">)</span>}</span>;
// //     }
// //     case 'ADD':
// //       return (
// //         <span>
// //           {renderNode(node.left, 'ADD')}
// //           <span className="mr-op">+</span>
// //           {renderNode(node.right, 'ADD')}
// //         </span>
// //       );
// //     case 'SUBTRACT':
// //       return (
// //         <span>
// //           {renderNode(node.left, 'SUBTRACT')}
// //           <span className="mr-op">{'\u2212'}</span>
// //           {renderNode(node.right, 'SUBTRACT')}
// //         </span>
// //       );
// //     case 'MULTIPLY': {
// //       const left = node.left;
// //       const right = node.right;
// //       const useJuxt = (left.type === 'NUMBER' && (right.type === 'VARIABLE' || right.type === 'POWER' || right.type === 'SQRT' || right.type === 'LOG' || right.type === 'LN'))
// //         || (left.type === 'VARIABLE' && right.type === 'VARIABLE');
// //       const wrapL = (left.type === 'ADD' || left.type === 'SUBTRACT')
// //         ? <span><span className="mr-paren">(</span>{renderNode(left, 'MULTIPLY')}<span className="mr-paren">)</span></span>
// //         : renderNode(left, 'MULTIPLY');
// //       const wrapR = (right.type === 'ADD' || right.type === 'SUBTRACT')
// //         ? <span><span className="mr-paren">(</span>{renderNode(right, 'MULTIPLY')}<span className="mr-paren">)</span></span>
// //         : renderNode(right, 'MULTIPLY');
// //       if (useJuxt) return <span>{wrapL}{wrapR}</span>;
// //       return <span>{wrapL}<span className="mr-op">{'\u00B7'}</span>{wrapR}</span>;
// //     }
// //     case 'DIVIDE':
// //       return (
// //         <span className="mr-frac">
// //           <span className="mr-frac-num">{renderNode(node.left, 'FRAC')}</span>
// //           <span className="mr-frac-den">{renderNode(node.right, 'FRAC')}</span>
// //         </span>
// //       );
// //     case 'POWER': {
// //       const base = node.base;
// //       const needsBaseParens = base.type === 'ADD' || base.type === 'SUBTRACT'
// //         || base.type === 'MULTIPLY' || base.type === 'NEGATE'
// //         || (base.type === 'NUMBER' && base.value < 0);
// //       const baseR = needsBaseParens
// //         ? <span><span className="mr-paren">(</span>{renderNode(base, 'POWER')}<span className="mr-paren">)</span></span>
// //         : renderNode(base, 'POWER');
// //       return <span>{baseR}<span className="mr-sup">{renderNode(node.exponent, 'SUP')}</span></span>;
// //     }
// //     case 'SQRT':
// //       return (
// //         <span className="mr-radical">
// //           <span className="mr-radical-symbol">{'\u221A'}</span>
// //           <span className="mr-radical-body">{renderNode(node.operand, 'SQRT')}</span>
// //         </span>
// //       );
// //     case 'LOG': {
// //       const isNat = node.base && node.base.type === 'E';
// //       const logName = isNat ? 'ln' : 'log';
// //       const showBase = !isNat && node.base && !(node.base.type === 'NUMBER' && node.base.value === 10);
// //       return (
// //         <span>
// //           <span className="mr-log">{logName}</span>
// //           {showBase && <span className="mr-sub">{renderNode(node.base, 'SUB')}</span>}
// //           <span className="mr-paren">(</span>
// //           {renderNode(node.argument, 'LOG')}
// //           <span className="mr-paren">)</span>
// //         </span>
// //       );
// //     }
// //     case 'LN':
// //       return (
// //         <span>
// //           <span className="mr-log">ln</span>
// //           <span className="mr-paren">(</span>
// //           {renderNode(node.argument, 'LN')}
// //           <span className="mr-paren">)</span>
// //         </span>
// //       );
// //     case 'ABS':
// //       return <span><span className="mr-abs">|</span>{renderNode(node.operand, 'ABS')}<span className="mr-abs">|</span></span>;
// //     case 'EQUATION':
// //       return (
// //         <span>
// //           {renderNode(node.left, 'EQUATION')}
// //           <span className="mr-op">=</span>
// //           {renderNode(node.right, 'EQUATION')}
// //         </span>
// //       );
// //     default:
// //       return null;
// //   }
// // }

// // function MathRenderer({ node, fontSize, className = '' }) {
// //   if (!node) return null;
// //   return (
// //     <span className={`mr ${className}`} style={fontSize ? { fontSize } : undefined}>
// //       <style>{MATH_STYLES}</style>
// //       {renderNode(node)}
// //     </span>
// //   );
// // }


// // /* =====================================================
// //    SOLUTION PANEL (inlined from shared SolutionPanel)
// //    ===================================================== */

// // const SP_STYLES = `
// //   .sp-tab-bar {
// //     display: flex;
// //     gap: 2px;
// //     background: #e2e8f0;
// //     border-radius: 8px;
// //     padding: 3px;
// //     margin-bottom: 16px;
// //   }
// //   .sp-tab-btn {
// //     flex: 1;
// //     padding: 8px 16px;
// //     border: none;
// //     border-radius: 6px;
// //     font-family: inherit;
// //     font-size: 0.82rem;
// //     font-weight: 500;
// //     cursor: pointer;
// //     background: transparent;
// //     color: #64748b;
// //     transition: all 0.15s;
// //     text-align: center;
// //   }
// //   .sp-tab-btn.active {
// //     background: #fff;
// //     color: #1e3a5f;
// //     box-shadow: 0 1px 3px rgba(0,0,0,0.06);
// //   }
// //   .sp-tab-btn:not(.active):hover {
// //     color: #334155;
// //   }
// //   .sp-steps-title {
// //     font-size: 0.72rem;
// //     text-transform: uppercase;
// //     letter-spacing: 1.8px;
// //     color: #94a3b8;
// //     margin-bottom: 14px;
// //     font-weight: 600;
// //   }
// //   .sp-step-card {
// //     background: #f8fafc;
// //     border: none;
// //     border-left: 3px solid #3b82f6;
// //     border-radius: 0 8px 8px 0;
// //     padding: 16px 18px;
// //     margin-bottom: 10px;
// //   }
// //   .sp-step-header {
// //     margin-bottom: 6px;
// //   }
// //   .sp-step-number {
// //     font-size: 0.62rem;
// //     text-transform: uppercase;
// //     letter-spacing: 1.5px;
// //     color: #3b82f6;
// //     font-weight: 600;
// //   }
// //   .sp-step-rule {
// //     font-weight: 600;
// //     font-size: 0.95rem;
// //     color: #1e3a5f;
// //     margin-bottom: 2px;
// //   }
// //   .sp-step-description {
// //     font-size: 0.82rem;
// //     color: #64748b;
// //     line-height: 1.4;
// //     margin-bottom: 4px;
// //   }
// //   .sp-step-content {
// //     margin-top: 8px;
// //   }
// //   .sp-graph-container {
// //     background: #fff;
// //     border-radius: 8px;
// //     padding: 20px;
// //   }
// //   .sp-graph-label {
// //     font-size: 0.68rem;
// //     text-transform: uppercase;
// //     letter-spacing: 1.2px;
// //     color: #94a3b8;
// //     margin-bottom: 12px;
// //     font-weight: 500;
// //   }
// //   .sp-graph-legend {
// //     display: flex;
// //     gap: 16px;
// //     margin-top: 10px;
// //     font-size: 0.75rem;
// //     color: #64748b;
// //   }
// //   .sp-graph-legend-dot {
// //     display: inline-block;
// //     width: 8px;
// //     height: 8px;
// //     border-radius: 50%;
// //     margin-right: 4px;
// //     vertical-align: middle;
// //   }
// //   .sp-placeholder {
// //     background: #f1f5f9;
// //     border: 1px dashed #cbd5e1;
// //     border-radius: 8px;
// //     padding: 40px 24px;
// //     text-align: center;
// //     font-size: 0.85rem;
// //     color: #94a3b8;
// //     font-style: italic;
// //     min-height: 200px;
// //     display: flex;
// //     align-items: center;
// //     justify-content: center;
// //   }
// //   .sp-no-steps {
// //     color: #94a3b8;
// //     font-style: italic;
// //     text-align: center;
// //     padding: 20px;
// //     font-size: 0.85rem;
// //   }
// // `;

// // function SolutionPanel({
// //   steps = [],
// //   graphData = null,
// //   showGraphs = true,
// //   GraphComponent = null,
// //   graphLabel = '',
// //   graphLegend = [],
// //   stepCardClass = null,
// //   renderStepContent = null,
// //   placeholder = 'Steps will appear here once you solve',
// //   stepsTitle = 'Solution Steps',
// // }) {
// //   const [activeTab, setActiveTab] = useState('steps');

// //   const hasGraph = showGraphs && graphData && GraphComponent;
// //   const hasSolved = steps.length > 0;

// //   const prevStepsRef = useRef(steps);
// //   if (steps !== prevStepsRef.current && steps.length > 0) {
// //     prevStepsRef.current = steps;
// //     if (activeTab !== 'steps') setActiveTab('steps');
// //   }

// //   if (!hasSolved) {
// //     return (
// //       <div>
// //         <style>{SP_STYLES}</style>
// //         <div className="sp-placeholder">
// //           <p>{placeholder}</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div>
// //       <style>{SP_STYLES}</style>

// //       {hasGraph && (
// //         <div className="sp-tab-bar">
// //           <button className={`sp-tab-btn${activeTab === 'steps' ? ' active' : ''}`} onClick={() => setActiveTab('steps')}>Steps</button>
// //           <button className={`sp-tab-btn${activeTab === 'graph' ? ' active' : ''}`} onClick={() => setActiveTab('graph')}>Graph</button>
// //         </div>
// //       )}

// //       {activeTab === 'steps' && (
// //         <div>
// //           {!hasGraph && <div className="sp-steps-title">{stepsTitle}</div>}
// //           {steps.length === 0 ? (
// //             <p className="sp-no-steps">Expression is already in simplest form</p>
// //           ) : (
// //             steps.map((step, index) => {
// //               const extraClass = stepCardClass ? stepCardClass(step) : '';
// //               return (
// //                 <div key={index} className={`sp-step-card ${extraClass}`}>
// //                   <div className="sp-step-header">
// //                     <span className="sp-step-number">Step {index + 1}</span>
// //                   </div>
// //                   <div className="sp-step-rule">{step.rule}</div>
// //                   <p className="sp-step-description">{step.description}</p>
// //                   {renderStepContent && (
// //                     <div className="sp-step-content">
// //                       {renderStepContent(step, index)}
// //                     </div>
// //                   )}
// //                 </div>
// //               );
// //             })
// //           )}
// //         </div>
// //       )}

// //       {activeTab === 'graph' && hasGraph && (
// //         <div className="sp-graph-container">
// //           {graphLabel && <div className="sp-graph-label">{graphLabel}</div>}
// //           <GraphComponent graphData={graphData} />
// //           {graphLegend.length > 0 && (
// //             <div className="sp-graph-legend">
// //               {graphLegend.map((item, i) => (
// //                 <span key={i}>
// //                   <span className="sp-graph-legend-dot" style={{ background: item.color }} />
// //                   {item.label}
// //                 </span>
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// // /* =====================================================
// //    TOKENIZER
// //    ===================================================== */

// // const TokenType = {
// //   NUMBER: 'NUMBER',
// //   VARIABLE: 'VARIABLE',
// //   MULTIPLY: 'MULTIPLY',
// //   DIVIDE: 'DIVIDE',
// //   POWER: 'POWER',
// //   LPAREN: 'LPAREN',
// //   RPAREN: 'RPAREN',
// //   PLUS: 'PLUS',
// //   MINUS: 'MINUS',
// //   EQUALS: 'EQUALS',
// //   E: 'E',
// //   LOG: 'LOG',
// //   LN: 'LN',
// //   UNDERSCORE: 'UNDERSCORE',
// // };

// // function tokenize(input) {
// //   const tokens = [];
// //   let i = 0;

// //   while (i < input.length) {
// //     const char = input[i];

// //     if (/\s/.test(char)) { i++; continue; }

// //     if (input.slice(i, i + 2).toLowerCase() === 'ln') {
// //       tokens.push({ type: TokenType.LN });
// //       i += 2;
// //       continue;
// //     }

// //     if (input.slice(i, i + 3).toLowerCase() === 'log') {
// //       tokens.push({ type: TokenType.LOG });
// //       i += 3;
// //       continue;
// //     }

// //     if (/[0-9]/.test(char) || (char === '.' && /[0-9]/.test(input[i + 1]))) {
// //       let num = '';
// //       while (i < input.length && (/[0-9]/.test(input[i]) || input[i] === '.')) {
// //         num += input[i];
// //         i++;
// //       }
// //       tokens.push({ type: TokenType.NUMBER, value: parseFloat(num) });
// //       continue;
// //     }

// //     if (char === 'e' && (i + 1 >= input.length || !/[a-zA-Z]/.test(input[i + 1]))) {
// //       tokens.push({ type: TokenType.E });
// //       i++;
// //       continue;
// //     }

// //     if (/[a-zA-Z]/.test(char)) {
// //       tokens.push({ type: TokenType.VARIABLE, value: char.toLowerCase() });
// //       i++;
// //       continue;
// //     }

// //     const charMap = {
// //       '\u00D7': TokenType.MULTIPLY, '*': TokenType.MULTIPLY, '\u00B7': TokenType.MULTIPLY,
// //       '\u00F7': TokenType.DIVIDE, '/': TokenType.DIVIDE,
// //       '^': TokenType.POWER,
// //       '(': TokenType.LPAREN, ')': TokenType.RPAREN,
// //       '+': TokenType.PLUS, '-': TokenType.MINUS,
// //       '=': TokenType.EQUALS, '_': TokenType.UNDERSCORE,
// //     };

// //     if (charMap[char]) {
// //       tokens.push({ type: charMap[char] });
// //       i++;
// //       continue;
// //     }

// //     i++;
// //   }

// //   return tokens;
// // }


// // /* =====================================================
// //    PARSER
// //    ===================================================== */

// // function parse(tokens) {
// //   let pos = 0;

// //   const peek = () => tokens[pos];
// //   const consume = (expectedType) => {
// //     const token = tokens[pos];
// //     if (expectedType && token?.type !== expectedType) {
// //       throw new Error(`Expected ${expectedType} but got ${token?.type}`);
// //     }
// //     pos++;
// //     return token;
// //   };

// //   const parseEquation = () => {
// //     const left = parseExpression();
// //     if (peek()?.type === TokenType.EQUALS) {
// //       consume();
// //       return { type: 'EQUATION', left, right: parseExpression() };
// //     }
// //     return left;
// //   };

// //   const parseExpression = () => parseAdditive();

// //   const parseAdditive = () => {
// //     let left = parseMultiplicative();
// //     while (peek()?.type === TokenType.PLUS || peek()?.type === TokenType.MINUS) {
// //       const op = consume().type;
// //       left = { type: op === TokenType.PLUS ? 'ADD' : 'SUBTRACT', left, right: parseMultiplicative() };
// //     }
// //     return left;
// //   };

// //   const parseMultiplicative = () => {
// //     let left = parsePower();
// //     while (peek()?.type === TokenType.MULTIPLY || peek()?.type === TokenType.DIVIDE) {
// //       const op = consume().type;
// //       left = { type: op === TokenType.MULTIPLY ? 'MULTIPLY' : 'DIVIDE', left, right: parsePower() };
// //     }
// //     return left;
// //   };

// //   const parsePower = () => {
// //     let base = parseUnary();
// //     if (peek()?.type === TokenType.POWER) {
// //       consume();
// //       return { type: 'POWER', base, exponent: parsePower() };
// //     }
// //     return base;
// //   };

// //   const parseUnary = () => {
// //     if (peek()?.type === TokenType.MINUS) {
// //       consume();
// //       return { type: 'NEGATE', operand: parseUnary() };
// //     }
// //     return parsePrimary();
// //   };

// //   const parsePrimary = () => {
// //     const token = peek();

// //     if (token?.type === TokenType.NUMBER) {
// //       consume();
// //       return { type: 'NUMBER', value: token.value };
// //     }

// //     if (token?.type === TokenType.VARIABLE) {
// //       consume();
// //       return { type: 'VARIABLE', name: token.value };
// //     }

// //     if (token?.type === TokenType.E) {
// //       consume();
// //       return { type: 'E' };
// //     }

// //     if (token?.type === TokenType.LN) {
// //       consume();
// //       consume(TokenType.LPAREN);
// //       const argument = parseExpression();
// //       consume(TokenType.RPAREN);
// //       return { type: 'LOG', base: { type: 'E' }, argument };
// //     }

// //     if (token?.type === TokenType.LOG) {
// //       consume();
// //       let base = { type: 'NUMBER', value: 10 };

// //       if (peek()?.type === TokenType.UNDERSCORE) {
// //         consume();
// //         if (peek()?.type === TokenType.NUMBER) {
// //           base = { type: 'NUMBER', value: consume().value };
// //         } else if (peek()?.type === TokenType.VARIABLE) {
// //           base = { type: 'VARIABLE', name: consume().value };
// //         } else if (peek()?.type === TokenType.E) {
// //           consume();
// //           base = { type: 'E' };
// //         } else if (peek()?.type === TokenType.LPAREN) {
// //           consume();
// //           base = parseExpression();
// //           consume(TokenType.RPAREN);
// //         }
// //       }

// //       consume(TokenType.LPAREN);
// //       const argument = parseExpression();
// //       consume(TokenType.RPAREN);
// //       return { type: 'LOG', base, argument };
// //     }

// //     if (token?.type === TokenType.LPAREN) {
// //       consume();
// //       const expr = parseExpression();
// //       consume(TokenType.RPAREN);
// //       return expr;
// //     }

// //     throw new Error(`Unexpected token: ${token?.type}`);
// //   };

// //   const ast = parseEquation();
// //   if (pos < tokens.length) {
// //     throw new Error('Unexpected tokens at end');
// //   }
// //   return ast;
// // }


// // /* =====================================================
// //    HELPERS
// //    ===================================================== */

// // function formatNumber(num) {
// //   if (Number.isInteger(num)) return String(num);
// //   const rounded = Math.round(num * 1000000) / 1000000;
// //   return rounded.toFixed(6).replace(/\.?0+$/, '');
// // }

// // function containsVariable(node) {
// //   if (!node) return false;
// //   if (node.type === 'VARIABLE') return true;
// //   if (node.type === 'NUMBER' || node.type === 'E') return false;
// //   if (node.type === 'NEGATE') return containsVariable(node.operand);
// //   if (node.type === 'POWER') return containsVariable(node.base) || containsVariable(node.exponent);
// //   if (node.type === 'LOG') return containsVariable(node.base) || containsVariable(node.argument);
// //   return containsVariable(node.left) || containsVariable(node.right);
// // }

// // function containsLog(node) {
// //   if (!node) return false;
// //   if (node.type === 'LOG') return true;
// //   if (node.type === 'NEGATE') return containsLog(node.operand);
// //   if (node.type === 'POWER') return containsLog(node.base) || containsLog(node.exponent);
// //   if (['ADD', 'SUBTRACT', 'MULTIPLY', 'DIVIDE'].includes(node.type)) {
// //     return containsLog(node.left) || containsLog(node.right);
// //   }
// //   return false;
// // }

// // function evaluateConstant(node) {
// //   if (!node) return null;
// //   switch (node.type) {
// //     case 'NUMBER': return node.value;
// //     case 'E': return Math.E;
// //     case 'NEGATE': { const v = evaluateConstant(node.operand); return v !== null ? -v : null; }
// //     case 'ADD': { const l = evaluateConstant(node.left); const r = evaluateConstant(node.right); return (l !== null && r !== null) ? l + r : null; }
// //     case 'SUBTRACT': { const l = evaluateConstant(node.left); const r = evaluateConstant(node.right); return (l !== null && r !== null) ? l - r : null; }
// //     case 'MULTIPLY': { const l = evaluateConstant(node.left); const r = evaluateConstant(node.right); return (l !== null && r !== null) ? l * r : null; }
// //     case 'DIVIDE': { const l = evaluateConstant(node.left); const r = evaluateConstant(node.right); return (l !== null && r !== null && r !== 0) ? l / r : null; }
// //     case 'POWER': { const b = evaluateConstant(node.base); const e = evaluateConstant(node.exponent); return (b !== null && e !== null) ? Math.pow(b, e) : null; }
// //     case 'LOG': {
// //       const b = evaluateConstant(node.base);
// //       const a = evaluateConstant(node.argument);
// //       if (b !== null && a !== null && b > 0 && b !== 1 && a > 0) return Math.log(a) / Math.log(b);
// //       return null;
// //     }
// //     default: return null;
// //   }
// // }

// // function getBaseValue(node) {
// //   if (node.type === 'E') return Math.E;
// //   if (node.type === 'NUMBER') return node.value;
// //   return evaluateConstant(node);
// // }

// // function basesEqual(base1, base2) {
// //   if (base1.type === 'E' && base2.type === 'E') return true;
// //   const v1 = getBaseValue(base1);
// //   const v2 = getBaseValue(base2);
// //   if (v1 !== null && v2 !== null) return Math.abs(v1 - v2) < 1e-10;
// //   return false;
// // }

// // function isNaturalBase(node) {
// //   return node.type === 'E';
// // }

// // function parseLinearArgument(node) {
// //   if (node.type === 'VARIABLE') return { variable: node.name, coefficient: 1, constant: 0 };

// //   if (node.type === 'MULTIPLY') {
// //     const leftVal = evaluateConstant(node.left);
// //     const rightVal = evaluateConstant(node.right);
// //     if (leftVal !== null && node.right.type === 'VARIABLE') return { variable: node.right.name, coefficient: leftVal, constant: 0 };
// //     if (rightVal !== null && node.left.type === 'VARIABLE') return { variable: node.left.name, coefficient: rightVal, constant: 0 };
// //   }

// //   if (node.type === 'ADD' || node.type === 'SUBTRACT') {
// //     const leftLinear = parseLinearArgument(node.left);
// //     const rightConst = evaluateConstant(node.right);
// //     if (leftLinear && rightConst !== null) {
// //       return { variable: leftLinear.variable, coefficient: leftLinear.coefficient, constant: leftLinear.constant + (node.type === 'ADD' ? rightConst : -rightConst) };
// //     }
// //     const rightLinear = parseLinearArgument(node.right);
// //     const leftConst = evaluateConstant(node.left);
// //     if (rightLinear && leftConst !== null && node.type === 'ADD') {
// //       return { variable: rightLinear.variable, coefficient: rightLinear.coefficient, constant: rightLinear.constant + leftConst };
// //     }
// //   }

// //   return null;
// // }

// // function extractLogCoefficient(node) {
// //   if (node.type !== 'MULTIPLY') return { coefficient: null, log: null };
// //   if (node.left.type === 'LOG' && !containsVariable(node.right)) return { coefficient: evaluateConstant(node.right), log: node.left };
// //   if (node.right.type === 'LOG' && !containsVariable(node.left)) return { coefficient: evaluateConstant(node.left), log: node.right };
// //   return { coefficient: null, log: null };
// // }

// // function extractLogAdditive(node) {
// //   if (node.type !== 'ADD' && node.type !== 'SUBTRACT') return { log: null, constant: null, isAdd: false };
// //   const isAdd = node.type === 'ADD';
// //   if (node.left.type === 'LOG' && containsVariable(node.left) && !containsVariable(node.right)) return { log: node.left, constant: evaluateConstant(node.right), isAdd };
// //   if (node.right.type === 'LOG' && containsVariable(node.right) && !containsVariable(node.left) && isAdd) return { log: node.right, constant: evaluateConstant(node.left), isAdd };
// //   return { log: null, constant: null, isAdd: false };
// // }


// // /* =====================================================
// //    SOLVER
// //    ===================================================== */

// // function solveLogarithmicEquation(ast) {
// //   const steps = [];

// //   if (ast.type !== 'EQUATION') throw new Error('Input must be an equation (use = sign)');

// //   let { left, right } = ast;

// //   const leftHasLogVar = containsLog(left) && containsVariable(left);
// //   const rightHasLogVar = containsLog(right) && containsVariable(right);
// //   const leftHasVar = containsVariable(left);
// //   const rightHasVar = containsVariable(right);

// //   if (leftHasLogVar && rightHasLogVar) {
// //     if (left.type === 'LOG' && right.type === 'LOG' && basesEqual(left.base, right.base)) {
// //       steps.push({ rule: 'Equal Logarithms Property', description: 'If log_b(A) = log_b(B), then A = B (same base logs are equal when arguments are equal).', before: ast, after: { type: 'EQUATION', left: left.argument, right: right.argument } });
// //       const argLeft = left.argument;
// //       const argRight = right.argument;
// //       const leftVal = evaluateConstant(argLeft);
// //       const rightVal = evaluateConstant(argRight);
// //       if (leftVal !== null && containsVariable(argRight)) return solveLinearEquation(argRight, argLeft, steps);
// //       else if (rightVal !== null && containsVariable(argLeft)) return solveLinearEquation(argLeft, argRight, steps);
// //       else return solveLinearEquation(argLeft, argRight, steps);
// //     }
// //     throw new Error('Equations with different log bases on both sides require change of base. Coming soon!');
// //   }

// //   let logSide, constSide;
// //   if (leftHasLogVar && !rightHasLogVar) { logSide = left; constSide = right; }
// //   else if (rightHasLogVar && !leftHasLogVar) {
// //     logSide = right; constSide = left;
// //     steps.push({ rule: 'Rearrange Equation', description: 'Move the logarithmic term to the left side for clarity.', before: ast, after: { type: 'EQUATION', left: logSide, right: constSide } });
// //   } else if (!leftHasLogVar && !rightHasLogVar && (leftHasVar || rightHasVar)) { throw new Error('No logarithm found in equation'); }
// //   else { throw new Error('Could not determine equation structure'); }

// //   const constValue = evaluateConstant(constSide);
// //   if (constValue !== null && constSide.type !== 'NUMBER') {
// //     const newConstSide = { type: 'NUMBER', value: constValue };
// //     steps.push({ rule: 'Evaluate Constant', description: 'Simplify the right side to a single number.', before: { type: 'EQUATION', left: logSide, right: constSide }, after: { type: 'EQUATION', left: logSide, right: newConstSide } });
// //     constSide = newConstSide;
// //   }

// //   if (logSide.type === 'MULTIPLY') {
// //     const { coefficient, log } = extractLogCoefficient(logSide);
// //     if (coefficient !== null && log !== null) {
// //       const constVal = evaluateConstant(constSide);
// //       if (constVal !== null) {
// //         const newConst = { type: 'NUMBER', value: constVal / coefficient };
// //         steps.push({ rule: 'Isolate Logarithm', description: `Divide both sides by ${formatNumber(coefficient)} to isolate the logarithm.`, before: { type: 'EQUATION', left: logSide, right: constSide }, after: { type: 'EQUATION', left: log, right: newConst } });
// //         logSide = log; constSide = newConst;
// //       }
// //     }
// //   }

// //   if (logSide.type === 'ADD' || logSide.type === 'SUBTRACT') {
// //     const { log, constant, isAdd } = extractLogAdditive(logSide);
// //     if (log !== null && constant !== null) {
// //       const constVal = evaluateConstant(constSide);
// //       if (constVal !== null) {
// //         const newConstVal = isAdd ? constVal - constant : constVal + constant;
// //         const newConst = { type: 'NUMBER', value: newConstVal };
// //         const action = isAdd ? `Subtract ${formatNumber(constant)} from` : `Add ${formatNumber(Math.abs(constant))} to`;
// //         steps.push({ rule: 'Isolate Logarithm', description: `${action} both sides.`, before: { type: 'EQUATION', left: logSide, right: constSide }, after: { type: 'EQUATION', left: log, right: newConst } });
// //         logSide = log; constSide = newConst;
// //       }
// //     }
// //   }

// //   if (logSide.type !== 'LOG') throw new Error('Could not isolate logarithm');

// //   const base = logSide.base;
// //   const argument = logSide.argument;
// //   const resultValue = evaluateConstant(constSide);
// //   if (resultValue === null) throw new Error('Right side must evaluate to a number');
// //   const baseValue = getBaseValue(base);
// //   if (baseValue === null) throw new Error('Base must be a constant');
// //   if (baseValue <= 0 || baseValue === 1) throw new Error('Base must be positive and not equal to 1');

// //   const isNatural = isNaturalBase(base);
// //   const exponentialValue = Math.pow(baseValue, resultValue);
// //   const baseDisplay = isNatural ? { type: 'E' } : base;
// //   const expNode = { type: 'POWER', base: baseDisplay, exponent: { type: 'NUMBER', value: resultValue } };

// //   steps.push({ rule: 'Convert to Exponential Form', description: isNatural ? 'If ln(A) = c, then A = e^c. This is the inverse relationship.' : `If log_${formatNumber(baseValue)}(A) = c, then A = ${formatNumber(baseValue)}^c. This is the inverse relationship.`, before: { type: 'EQUATION', left: logSide, right: constSide }, after: { type: 'EQUATION', left: argument, right: expNode } });
// //   steps.push({ rule: 'Evaluate Exponential', description: isNatural ? `Calculate e^${formatNumber(resultValue)} \u2248 ${formatNumber(exponentialValue)}` : `Calculate ${formatNumber(baseValue)}^${formatNumber(resultValue)} = ${formatNumber(exponentialValue)}`, before: { type: 'EQUATION', left: argument, right: expNode }, after: { type: 'EQUATION', left: argument, right: { type: 'NUMBER', value: exponentialValue } } });

// //   if (argument.type === 'VARIABLE') {
// //     if (exponentialValue <= 0) throw new Error(`No solution: logarithm argument must be positive, but we got ${formatNumber(exponentialValue)}`);
// //     return { steps, solution: { variable: argument.name, value: exponentialValue, exact: Number.isInteger(exponentialValue) } };
// //   }

// //   const linearInfo = parseLinearArgument(argument);
// //   if (linearInfo) {
// //     const { variable, coefficient, constant } = linearInfo;
// //     steps.push({ rule: 'Solve Linear Equation', description: `Now solve: ${coefficient === 1 ? '' : formatNumber(coefficient)}${variable}${constant >= 0 ? ' + ' + formatNumber(constant) : ' \u2212 ' + formatNumber(Math.abs(constant))} = ${formatNumber(exponentialValue)}`, before: null, after: null });
// //     const subtracted = exponentialValue - constant;
// //     const solution = subtracted / coefficient;
// //     if (exponentialValue <= 0) throw new Error('No solution: logarithm argument must be positive');
// //     steps.push({ rule: 'Isolate Variable', description: coefficient !== 1 ? `Subtract ${formatNumber(constant)}, then divide by ${formatNumber(coefficient)}.` : `Subtract ${formatNumber(constant)} from both sides.`, before: null, after: { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } } });
// //     const argValue = coefficient * solution + constant;
// //     if (argValue <= 0) throw new Error(`No valid solution: x = ${formatNumber(solution)} makes the logarithm argument non-positive`);
// //     return { steps, solution: { variable, value: solution, exact: Number.isInteger(solution) } };
// //   }

// //   throw new Error('Argument form not supported');
// // }

// // function solveLinearEquation(leftExpr, rightExpr, steps) {
// //   const leftLinear = parseLinearArgument(leftExpr);
// //   const rightLinear = parseLinearArgument(rightExpr);
// //   const rightConst = evaluateConstant(rightExpr);
// //   const leftConst = evaluateConstant(leftExpr);

// //   if (leftLinear && rightConst !== null) {
// //     const { variable, coefficient, constant } = leftLinear;
// //     const solution = (rightConst - constant) / coefficient;
// //     steps.push({ rule: 'Solve Linear Equation', description: `Solve: ${coefficient === 1 ? '' : formatNumber(coefficient)}${variable}${constant >= 0 ? ' + ' + formatNumber(constant) : ' \u2212 ' + formatNumber(Math.abs(constant))} = ${formatNumber(rightConst)}`, before: null, after: { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } } });
// //     return { steps, solution: { variable, value: solution, exact: Number.isInteger(solution) } };
// //   }

// //   if (rightLinear && leftConst !== null) {
// //     const { variable, coefficient, constant } = rightLinear;
// //     const solution = (leftConst - constant) / coefficient;
// //     steps.push({ rule: 'Solve Linear Equation', description: `Solve: ${formatNumber(leftConst)} = ${coefficient === 1 ? '' : formatNumber(coefficient)}${variable}${constant >= 0 ? ' + ' + formatNumber(constant) : ' \u2212 ' + formatNumber(Math.abs(constant))}`, before: null, after: { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } } });
// //     return { steps, solution: { variable, value: solution, exact: Number.isInteger(solution) } };
// //   }

// //   if (leftLinear && rightLinear && leftLinear.variable === rightLinear.variable) {
// //     const { variable } = leftLinear;
// //     const netCoeff = leftLinear.coefficient - rightLinear.coefficient;
// //     const netConst = rightLinear.constant - leftLinear.constant;
// //     if (Math.abs(netCoeff) < 1e-10) throw new Error(netConst === 0 ? 'Infinite solutions' : 'No solution');
// //     const solution = netConst / netCoeff;
// //     steps.push({ rule: 'Solve Linear Equation', description: `Combine like terms and solve for ${variable}.`, before: null, after: { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } } });
// //     return { steps, solution: { variable, value: solution, exact: Number.isInteger(solution) } };
// //   }

// //   throw new Error('Could not solve the resulting equation');
// // }


// // /* =====================================================
// //    ENGINE COMPONENT (Standalone Solver)
// //    ===================================================== */

// // const VALID_KEYS = new Set([
// //   '0','1','2','3','4','5','6','7','8','9','.',
// //   '+','-','*','/','^','=','(',')',
// //   'x','y','n','e',
// //   'X','Y','N','E',
// // ]);

// // export const LogarithmicSolverEngine = forwardRef(({
// //   compact = false,
// //   style = {}
// // }, ref) => {
// //   const [expression, setExpression] = useState([]);
// //   const [cursorPos, setCursorPos] = useState(0);
// //   const [undoStack, setUndoStack] = useState([]);
// //   const [result, setResult] = useState(null);
// //   const [error, setError] = useState(null);
// //   const containerRef = useRef(null);

// //   const variables = ['x', 'y', 'n'];
// //   const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
// //   const operators = ['+', '-', '\u00D7', '\u00F7', '^', '='];

// //   useImperativeHandle(ref, () => ({
// //     loadEquation: (eqString) => {
// //       pushUndo(expression, cursorPos);
// //       const chars = eqString.split('');
// //       setExpression(chars);
// //       setCursorPos(chars.length);
// //       setResult(null);
// //       setError(null);
// //     },
// //     clear: () => {
// //       pushUndo(expression, cursorPos);
// //       setExpression([]);
// //       setCursorPos(0);
// //       setResult(null);
// //       setError(null);
// //     },
// //     getExpression: () => expression.join(''),
// //     getResult: () => result
// //   }));

// //   const pushUndo = useCallback((expr, pos) => {
// //     setUndoStack(stack => [...stack.slice(-50), { expr, pos }]);
// //   }, []);

// //   const undo = useCallback(() => {
// //     if (undoStack.length === 0) return;
// //     const prev = undoStack[undoStack.length - 1];
// //     setUndoStack(stack => stack.slice(0, -1));
// //     setExpression(prev.expr);
// //     setCursorPos(prev.pos);
// //     setResult(null);
// //     setError(null);
// //   }, [undoStack]);

// //   const insertAtCursor = useCallback((items) => {
// //     pushUndo(expression, cursorPos);
// //     const arr = Array.isArray(items) ? items : [items];
// //     const newExpr = [...expression.slice(0, cursorPos), ...arr, ...expression.slice(cursorPos)];
// //     setExpression(newExpr);
// //     setCursorPos(cursorPos + arr.length);
// //     setResult(null);
// //     setError(null);
// //   }, [expression, cursorPos, pushUndo]);

// //   const addToExpression = (item) => {
// //     insertAtCursor(item);
// //   };

// //   const addLogToExpression = (base) => {
// //     if (base === 'e') {
// //       insertAtCursor(['l', 'n', '(']);
// //     } else if (base === '10') {
// //       insertAtCursor(['l', 'o', 'g', '(']);
// //     } else {
// //       insertAtCursor(['l', 'o', 'g', '_', base, '(']);
// //     }
// //   };

// //   const backspace = useCallback(() => {
// //     if (cursorPos === 0) return;
// //     pushUndo(expression, cursorPos);
// //     const newExpr = [...expression.slice(0, cursorPos - 1), ...expression.slice(cursorPos)];
// //     setExpression(newExpr);
// //     setCursorPos(cursorPos - 1);
// //     setResult(null);
// //     setError(null);
// //   }, [expression, cursorPos, pushUndo]);

// //   const deleteForward = useCallback(() => {
// //     if (cursorPos >= expression.length) return;
// //     pushUndo(expression, cursorPos);
// //     const newExpr = [...expression.slice(0, cursorPos), ...expression.slice(cursorPos + 1)];
// //     setExpression(newExpr);
// //     setResult(null);
// //     setError(null);
// //   }, [expression, cursorPos, pushUndo]);

// //   const clearAll = () => {
// //     if (expression.length === 0) return;
// //     pushUndo(expression, cursorPos);
// //     setExpression([]);
// //     setCursorPos(0);
// //     setResult(null);
// //     setError(null);
// //   };

// //   const copyExpression = useCallback(() => {
// //     const text = expression.join('');
// //     if (text && navigator.clipboard) {
// //       navigator.clipboard.writeText(text);
// //     }
// //   }, [expression]);

// //   const pasteExpression = useCallback(async () => {
// //     if (!navigator.clipboard) return;
// //     try {
// //       const text = await navigator.clipboard.readText();
// //       if (text) {
// //         pushUndo(expression, cursorPos);
// //         const chars = text.split('');
// //         const newExpr = [...expression.slice(0, cursorPos), ...chars, ...expression.slice(cursorPos)];
// //         setExpression(newExpr);
// //         setCursorPos(cursorPos + chars.length);
// //         setResult(null);
// //         setError(null);
// //       }
// //     } catch (e) {
// //       // clipboard access denied
// //     }
// //   }, [expression, cursorPos, pushUndo]);

// //   const solve = useCallback(() => {
// //     try {
// //       const exprString = expression.join('');
// //       const tokens = tokenize(exprString);
// //       const ast = parse(tokens);
// //       const solveResult = solveLogarithmicEquation(ast);
// //       setResult(solveResult);
// //       setError(null);
// //     } catch (e) {
// //       setError(e.message);
// //       setResult(null);
// //     }
// //   }, [expression]);

// //   // Keyboard input handler
// //   const handleKeyDown = useCallback((e) => {
// //     if (e.ctrlKey || e.metaKey) {
// //       if (e.key === 'z' || e.key === 'Z') { e.preventDefault(); undo(); return; }
// //       if (e.key === 'c' || e.key === 'C') { e.preventDefault(); copyExpression(); return; }
// //       if (e.key === 'v' || e.key === 'V') { e.preventDefault(); pasteExpression(); return; }
// //       return;
// //     }

// //     if (e.key === 'ArrowLeft') { e.preventDefault(); setCursorPos(p => Math.max(0, p - 1)); return; }
// //     if (e.key === 'ArrowRight') { e.preventDefault(); setCursorPos(p => Math.min(expression.length, p + 1)); return; }
// //     if (e.key === 'Home') { e.preventDefault(); setCursorPos(0); return; }
// //     if (e.key === 'End') { e.preventDefault(); setCursorPos(expression.length); return; }

// //     if (e.key === 'Backspace') { e.preventDefault(); backspace(); return; }
// //     if (e.key === 'Delete') { e.preventDefault(); deleteForward(); return; }

// //     if (e.key === 'Enter') { e.preventDefault(); if (expression.length > 0) solve(); return; }
// //     if (e.key === 'Escape') { e.preventDefault(); clearAll(); return; }

// //     if (VALID_KEYS.has(e.key)) {
// //       e.preventDefault();
// //       let mapped = e.key.toLowerCase();
// //       if (e.key === '*') mapped = '\u00D7';
// //       if (e.key === '/') mapped = '\u00F7';
// //       insertAtCursor(mapped);
// //     }
// //   }, [expression, cursorPos, undo, copyExpression, pasteExpression, backspace, deleteForward, solve, insertAtCursor]);

// //   useEffect(() => {
// //     const el = containerRef.current;
// //     if (!el) return;
// //     el.addEventListener('keydown', handleKeyDown);
// //     return () => el.removeEventListener('keydown', handleKeyDown);
// //   }, [handleKeyDown]);

// //   /* -------------------------------------------------
// //      DISPLAY RENDERER with clickable cursor placement
     
// //      Strategy: each raw character gets a wrapper span
// //      with data-idx={charIndex}. Visual grouping (log,
// //      ln, superscripts) still works, but every individual
// //      raw char inside is wrapped so clicks can resolve
// //      to a cursor position. The cursor element is inserted
// //      at the right raw-index position.
// //      ------------------------------------------------- */

// //   const handleDisplayClick = (e) => {
// //     containerRef.current?.focus();
// //     // Find nearest data-idx
// //     let target = e.target;
// //     while (target && !target.dataset?.idx && target !== e.currentTarget) {
// //       target = target.parentElement;
// //     }
// //     if (target && target.dataset?.idx !== undefined) {
// //       const idx = parseInt(target.dataset.idx, 10);
// //       // Click on left half → cursor before, right half → cursor after
// //       const rect = target.getBoundingClientRect();
// //       const clickX = e.clientX;
// //       const mid = rect.left + rect.width / 2;
// //       setCursorPos(clickX < mid ? idx : idx + 1);
// //     } else {
// //       // Clicked empty area → cursor at end
// //       setCursorPos(expression.length);
// //     }
// //   };

// //   const renderExpressionDisplay = (expr, cPos) => {
// //     const cursor = <span key="cursor" className="eq-cursor" />;

// //     if (!expr || expr.length === 0) {
// //       return <>{cursor}<span style={engineStyles.placeholder}>Enter equation...</span></>;
// //     }

// //     // Build a flat list of { rawIndex, element } then insert cursor
// //     const segments = [];
// //     let i = 0;

// //     while (i < expr.length) {
// //       // ln
// //       if (expr[i] === 'l' && expr[i + 1] === 'n') {
// //         segments.push({ startIdx: i, endIdx: i + 1, el: (
// //           <span key={`g${i}`} style={engineStyles.displayLogExpr}>
// //             <span data-idx={i} className="eq-char-span" style={engineStyles.displayLog}>l</span>
// //             <span data-idx={i + 1} className="eq-char-span" style={engineStyles.displayLog}>n</span>
// //           </span>
// //         )});
// //         i += 2;
// //         continue;
// //       }

// //       // log (with optional _base)
// //       if (expr[i] === 'l' && expr[i + 1] === 'o' && expr[i + 2] === 'g') {
// //         let j = i + 3;
// //         let baseChars = [];
// //         let baseIndices = [];
// //         if (expr[j] === '_') {
// //           j++; // skip underscore
// //           while (j < expr.length && /[0-9a-zA-Z]/.test(expr[j]) && expr[j] !== '(') {
// //             baseChars.push(expr[j]);
// //             baseIndices.push(j);
// //             j++;
// //           }
// //         }
// //         segments.push({ startIdx: i, endIdx: j - 1, el: (
// //           <span key={`g${i}`} style={engineStyles.displayLogExpr}>
// //             <span data-idx={i} className="eq-char-span" style={engineStyles.displayLog}>l</span>
// //             <span data-idx={i + 1} className="eq-char-span" style={engineStyles.displayLog}>o</span>
// //             <span data-idx={i + 2} className="eq-char-span" style={engineStyles.displayLog}>g</span>
// //             {expr[i + 3] === '_' && <span data-idx={i + 3} className="eq-char-span" style={engineStyles.displayOp}></span>}
// //             {baseChars.length > 0 && (
// //               <sub style={engineStyles.displaySub}>
// //                 {baseChars.map((bc, bi) => (
// //                   <span key={baseIndices[bi]} data-idx={baseIndices[bi]} className="eq-char-span">{bc}</span>
// //                 ))}
// //               </sub>
// //             )}
// //           </span>
// //         )});
// //         i = j;
// //         continue;
// //       }

// //       // Power: char^...
// //       const current = expr[i];
// //       const next = expr[i + 1];

// //       if (next === '^') {
// //         let expChars = [];
// //         let expIndices = [];
// //         let j = i + 2;
// //         if (expr[j] === '(') {
// //           let depth = 1;
// //           expChars.push('('); expIndices.push(j);
// //           j++;
// //           while (j < expr.length && depth > 0) {
// //             if (expr[j] === '(') depth++;
// //             if (expr[j] === ')') depth--;
// //             expChars.push(expr[j]); expIndices.push(j);
// //             j++;
// //           }
// //         } else {
// //           while (j < expr.length && /[0-9a-zA-Z.+\-\u00D7]/.test(expr[j]) && expr[j] !== '=') {
// //             expChars.push(expr[j]); expIndices.push(j);
// //             j++;
// //           }
// //         }
// //         if (expChars.length > 0) {
// //           segments.push({ startIdx: i, endIdx: j - 1, el: (
// //             <span key={`g${i}`} style={engineStyles.displayTerm}>
// //               <span data-idx={i} className="eq-char-span" style={current === 'e' ? engineStyles.displayEuler : undefined}>{current}</span>
// //               <span data-idx={i + 1} className="eq-char-span" style={engineStyles.displayOp}></span>
// //               <sup style={engineStyles.displaySup}>
// //                 {expChars.map((ec, ei) => (
// //                   <span key={expIndices[ei]} data-idx={expIndices[ei]} className="eq-char-span">{ec}</span>
// //                 ))}
// //               </sup>
// //             </span>
// //           )});
// //           i = j;
// //           continue;
// //         }
// //       }

// //       // Single characters
// //       const charMap = {
// //         '\u00D7': { style: engineStyles.displayOp, text: ' \u00B7 ' },
// //         '\u00F7': { style: engineStyles.displayOp, text: ' / ' },
// //         '+': { style: engineStyles.displayOp, text: ' + ' },
// //         '-': { style: engineStyles.displayOp, text: ' \u2212 ' },
// //         '=': { style: engineStyles.displayEquals, text: ' = ' },
// //         '^': { style: engineStyles.displayOp, text: '^' },
// //         'e': { style: engineStyles.displayEuler, text: 'e' },
// //         '_': { style: engineStyles.displayOp, text: '' },
// //       };

// //       if (charMap[current]) {
// //         if (charMap[current].text) {
// //           segments.push({ startIdx: i, endIdx: i, el: (
// //             <span key={`c${i}`} data-idx={i} className="eq-char-span" style={charMap[current].style}>{charMap[current].text}</span>
// //           )});
// //         }
// //       } else {
// //         segments.push({ startIdx: i, endIdx: i, el: (
// //           <span key={`c${i}`} data-idx={i} className="eq-char-span">{current}</span>
// //         )});
// //       }
// //       i++;
// //     }

// //     // Now build output with cursor inserted at cPos
// //     const output = [];
// //     let cursorInserted = false;

// //     for (const seg of segments) {
// //       // Insert cursor before this segment if cursor is at or before its start
// //       if (!cursorInserted && cPos <= seg.startIdx) {
// //         output.push(cursor);
// //         cursorInserted = true;
// //       }
// //       output.push(seg.el);
// //       // Insert cursor inside this segment if cursor falls within it
// //       // (only for multi-char segments where cursor is between startIdx and endIdx)
// //       if (!cursorInserted && cPos <= seg.endIdx + 1) {
// //         output.push(cursor);
// //         cursorInserted = true;
// //       }
// //     }

// //     // Cursor at end
// //     if (!cursorInserted) {
// //       output.push(cursor);
// //     }

// //     return output;
// //   };

// //   const p = compact ? 0.85 : 1;

// //   return (
// //     <div
// //       ref={containerRef}
// //       tabIndex={0}
// //       style={{ ...engineStyles.container, ...style, outline: 'none' }}
// //     >
// //       <style>{GLOBAL_STYLES}</style>

// //       <div
// //         className="eq-display"
// //         style={{ ...engineStyles.display, padding: `${18 * p}px ${22 * p}px` }}
// //         onClick={handleDisplayClick}
// //       >
// //         {renderExpressionDisplay(expression, cursorPos)}
// //       </div>

// //       {error && (
// //         <div style={engineStyles.error}>{error}</div>
// //       )}

// //       <div style={{ ...engineStyles.builder, gap: `${12 * p}px` }}>
// //         <div style={engineStyles.row}>
// //           <span style={engineStyles.label}>Log</span>
// //           <div style={engineStyles.btnGroup}>
// //             <button style={{ ...engineStyles.btn, ...engineStyles.btnLog }} onClick={() => addLogToExpression('e')}>ln</button>
// //             <button style={{ ...engineStyles.btn, ...engineStyles.btnLog }} onClick={() => addLogToExpression('10')}>log</button>
// //             <button style={{ ...engineStyles.btn, ...engineStyles.btnLog }} onClick={() => addLogToExpression('2')}>log<sub>2</sub></button>
// //             <button style={{ ...engineStyles.btn, ...engineStyles.btnLog }} onClick={() => addLogToExpression('3')}>log<sub>3</sub></button>
// //             <button style={{ ...engineStyles.btn, ...engineStyles.btnLog }} onClick={() => addLogToExpression('5')}>log<sub>5</sub></button>
// //           </div>
// //         </div>

// //         <div style={engineStyles.row}>
// //           <span style={engineStyles.label}>Var</span>
// //           <div style={engineStyles.btnGroup}>
// //             {variables.map((v) => (
// //               <button key={v} style={{ ...engineStyles.btn, ...engineStyles.btnVar }} onClick={() => addToExpression(v)}>{v}</button>
// //             ))}
// //           </div>
// //         </div>

// //         <div style={engineStyles.row}>
// //           <span style={engineStyles.label}>Num</span>
// //           <div style={engineStyles.btnGroup}>
// //             {numbers.map((n) => (
// //               <button key={n} style={{ ...engineStyles.btn, ...engineStyles.btnNum }} onClick={() => addToExpression(n)}>{n}</button>
// //             ))}
// //           </div>
// //         </div>

// //         <div style={engineStyles.row}>
// //           <span style={engineStyles.label}>Op</span>
// //           <div style={engineStyles.btnGroup}>
// //             {operators.map((op) => (
// //               <button key={op} style={{ ...engineStyles.btn, ...engineStyles.btnOp }} onClick={() => addToExpression(op)}>
// //                 {op === '^' ? 'x\u207F' : op}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         <div style={engineStyles.row}>
// //           <span style={engineStyles.label}></span>
// //           <div style={engineStyles.btnGroup}>
// //             <button style={{ ...engineStyles.btn, ...engineStyles.btnSpecial }} onClick={() => addToExpression('e')}>e</button>
// //             <button style={{ ...engineStyles.btn, ...engineStyles.btnBracket }} onClick={() => addToExpression('(')}>(</button>
// //             <button style={{ ...engineStyles.btn, ...engineStyles.btnBracket }} onClick={() => addToExpression(')')}>)</button>
// //           </div>
// //         </div>

// //         <div style={engineStyles.actions}>
// //           <button style={{ ...engineStyles.btnAction, ...engineStyles.btnClear }} onClick={clearAll}>Clear</button>
// //           <button
// //             style={{ ...engineStyles.btnAction, ...engineStyles.btnUndo, ...(undoStack.length === 0 ? engineStyles.btnUndoDisabled : {}) }}
// //             onClick={undo}
// //             disabled={undoStack.length === 0}
// //             title="Undo (Ctrl+Z)"
// //           >{'\u21B6'}</button>
// //           <button style={{ ...engineStyles.btnAction, ...engineStyles.btnBack }} onClick={backspace}>{'\u232B'}</button>
// //           <button
// //             style={{ ...engineStyles.btnAction, ...engineStyles.btnSolve, ...(expression.length === 0 ? engineStyles.btnDisabled : {}) }}
// //             onClick={solve}
// //             disabled={expression.length === 0}
// //           >
// //             Solve
// //           </button>
// //         </div>
// //       </div>

// //       {result && result.solution && (
// //         <div style={engineStyles.solution}>
// //           <div style={engineStyles.solLabel}>Answer</div>
// //           <div style={engineStyles.solValue}>
// //             <span style={engineStyles.solVar}>{result.solution.variable}</span>
// //             <span style={engineStyles.solEq}> = </span>
// //             <span style={engineStyles.solNum}>{formatNumber(result.solution.value)}</span>
// //           </div>
// //           <div style={engineStyles.solNote}>
// //             {result.solution.exact ? '\u2713 Exact solution' : '\u2248 Approximate value'}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // });

// // LogarithmicSolverEngine.displayName = 'LogarithmicSolverEngine';

// // const engineStyles = {
// //   container: {
// //     background: '#fff',
// //     borderRadius: '16px',
// //     padding: '20px',
// //     boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
// //   },
// //   display: {
// //     background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// //     borderRadius: '12px',
// //     padding: '18px 22px',
// //     minHeight: '54px',
// //     marginBottom: '16px',
// //     display: 'flex',
// //     alignItems: 'center',
// //     fontSize: '1.4rem',
// //     color: '#fff',
// //     fontWeight: '500',
// //     cursor: 'text',
// //   },
// //   placeholder: {
// //     color: 'rgba(255,255,255,0.5)',
// //     fontStyle: 'italic',
// //     fontSize: '0.95rem',
// //   },
// //   displayTerm: { display: 'inline-flex', alignItems: 'baseline' },
// //   displaySup: { fontSize: '0.6em', color: '#bfdbfe', marginLeft: '1px' },
// //   displaySub: { fontSize: '0.65em', color: '#bfdbfe', marginLeft: '1px' },
// //   displayOp: { color: 'rgba(255,255,255,0.75)', margin: '0 2px' },
// //   displayEquals: { color: '#fbbf24', fontWeight: '700', margin: '0 4px' },
// //   displayEuler: { fontStyle: 'italic', color: '#a5f3fc' },
// //   displayLog: { color: '#fde68a', fontWeight: '600' },
// //   displayLogExpr: { display: 'inline-flex', alignItems: 'baseline' },
// //   error: {
// //     background: '#fef2f2',
// //     border: '1px solid #fecaca',
// //     borderRadius: '8px',
// //     padding: '10px 14px',
// //     marginBottom: '12px',
// //     color: '#dc2626',
// //     fontSize: '0.85rem',
// //   },
// //   builder: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '10px',
// //   },
// //   row: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '10px',
// //   },
// //   label: {
// //     fontSize: '0.65rem',
// //     textTransform: 'uppercase',
// //     letterSpacing: '0.5px',
// //     color: '#94a3b8',
// //     width: '28px',
// //     flexShrink: 0,
// //     fontWeight: '600',
// //   },
// //   btnGroup: {
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     gap: '6px',
// //   },
// //   btn: {
// //     fontSize: '0.95rem',
// //     padding: '8px 12px',
// //     border: '1px solid #e2e8f0',
// //     background: '#f8fafc',
// //     color: '#334155',
// //     cursor: 'pointer',
// //     borderRadius: '8px',
// //     minWidth: '36px',
// //     fontFamily: 'inherit',
// //     fontWeight: '500',
// //     transition: 'all 0.15s',
// //   },
// //   btnVar: { fontStyle: 'italic', color: '#3b82f6', fontWeight: '600' },
// //   btnNum: { color: '#1e293b' },
// //   btnOp: { color: '#64748b', fontWeight: '600' },
// //   btnLog: { color: '#3b82f6', fontWeight: '600', minWidth: '44px' },
// //   btnSpecial: { color: '#0891b2', fontWeight: '600', fontStyle: 'italic' },
// //   btnBracket: { fontSize: '1.1rem', color: '#64748b' },
// //   actions: {
// //     display: 'flex',
// //     gap: '8px',
// //     marginTop: '6px',
// //     paddingTop: '14px',
// //     borderTop: '1px solid #e2e8f0',
// //   },
// //   btnAction: {
// //     fontSize: '0.85rem',
// //     fontWeight: '600',
// //     padding: '12px 18px',
// //     border: 'none',
// //     cursor: 'pointer',
// //     borderRadius: '8px',
// //     fontFamily: 'inherit',
// //     transition: 'all 0.15s',
// //   },
// //   btnClear: { background: '#f1f5f9', color: '#64748b' },
// //   btnUndo: { background: '#f1f5f9', color: '#64748b', fontSize: '1.1rem', padding: '12px 14px' },
// //   btnUndoDisabled: { opacity: 0.4, cursor: 'not-allowed' },
// //   btnBack: { background: '#f1f5f9', color: '#64748b', fontSize: '1.1rem' },
// //   btnSolve: {
// //     background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// //     color: '#fff',
// //     marginLeft: 'auto',
// //     padding: '12px 24px',
// //     boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
// //   },
// //   btnDisabled: { background: '#cbd5e1', boxShadow: 'none', cursor: 'not-allowed' },
// //   solution: {
// //     marginTop: '16px',
// //     padding: '16px 20px',
// //     background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// //     borderRadius: '12px',
// //     textAlign: 'center',
// //     color: '#fff',
// //   },
// //   solLabel: {
// //     fontSize: '0.7rem',
// //     textTransform: 'uppercase',
// //     letterSpacing: '2px',
// //     opacity: 0.8,
// //     marginBottom: '6px',
// //     fontWeight: '600',
// //   },
// //   solValue: {
// //     fontSize: '1.5rem',
// //     fontWeight: '700',
// //   },
// //   solVar: { fontStyle: 'italic' },
// //   solEq: { opacity: 0.8, margin: '0 6px' },
// //   solNum: { color: '#fbbf24' },
// //   solNote: {
// //     fontSize: '0.8rem',
// //     opacity: 0.75,
// //     marginTop: '6px',
// //   },
// // };


// // /* =====================================================
// //    EQUATION FORM GENERATORS
// //    ===================================================== */

// // const equationForms = [
// //   { id: 'simple', name: 'Simple', formula: <span>log<sub>b</sub>(x) = c</span>,
// //     generate: (nice) => { const bases = [2, 3, 5, 10]; const base = bases[Math.floor(Math.random() * bases.length)]; if (nice) { const exp = Math.floor(Math.random() * 4) + 1; return `log_${base}(x)=${exp}`; } return `log_${base}(x)=${Math.floor(Math.random() * 8) + 1}`; } },
// //   { id: 'natural', name: 'Natural Log', formula: <span>ln(x) = c</span>,
// //     generate: (nice) => { if (nice) { const vals = [1, 2, 3, 4, 5]; return `ln(x)=${vals[Math.floor(Math.random() * vals.length)]}`; } return `ln(x)=${(Math.random() * 5 + 0.5).toFixed(2)}`; } },
// //   { id: 'coefficient', name: 'With Coefficient', formula: <span>a &middot; log<sub>b</sub>(x) = c</span>,
// //     generate: (nice) => { const bases = [2, 3, 10]; const base = bases[Math.floor(Math.random() * bases.length)]; const coeff = Math.floor(Math.random() * 4) + 2; if (nice) { const exp = Math.floor(Math.random() * 3) + 1; return `${coeff}\u00D7log_${base}(x)=${coeff * exp}`; } return `${coeff}\u00D7log_${base}(x)=${Math.floor(Math.random() * 12) + 2}`; } },
// //   { id: 'linear-arg', name: 'Linear Argument', formula: <span>log<sub>b</sub>(mx + n) = c</span>,
// //     generate: (nice) => { const bases = [2, 3, 10]; const base = bases[Math.floor(Math.random() * bases.length)]; const m = Math.floor(Math.random() * 3) + 1; const n = Math.floor(Math.random() * 10) - 5; const nStr = n >= 0 ? `+${n}` : `${n}`; const mStr = m === 1 ? 'x' : `${m}\u00D7x`; if (nice) { const exp = Math.floor(Math.random() * 3) + 1; return `log_${base}(${mStr}${nStr})=${exp}`; } return `log_${base}(${mStr}${nStr})=${Math.floor(Math.random() * 5) + 1}`; } },
// //   { id: 'with-constant', name: 'With Constant', formula: <span>log<sub>b</sub>(x) + c = d</span>,
// //     generate: (nice) => { const bases = [2, 3, 10]; const base = bases[Math.floor(Math.random() * bases.length)]; const c = Math.floor(Math.random() * 5) + 1; if (nice) { const exp = Math.floor(Math.random() * 3) + 1; return `log_${base}(x)+${c}=${exp + c}`; } return `log_${base}(x)+${c}=${Math.floor(Math.random() * 8) + c}`; } },
// //   { id: 'natural-linear', name: 'Natural Linear', formula: <span>ln(mx + n) = c</span>,
// //     generate: (nice) => { const m = Math.floor(Math.random() * 3) + 1; const n = Math.floor(Math.random() * 10) - 3; const nStr = n >= 0 ? `+${n}` : `${n}`; const mStr = m === 1 ? 'x' : `${m}\u00D7x`; if (nice) { const vals = [1, 2, 3]; return `ln(${mStr}${nStr})=${vals[Math.floor(Math.random() * vals.length)]}`; } return `ln(${mStr}${nStr})=${(Math.random() * 4 + 0.5).toFixed(2)}`; } },
// //   { id: 'same-base', name: 'Same Base Both Sides', formula: <span>log<sub>b</sub>(f(x)) = log<sub>b</sub>(c)</span>,
// //     generate: () => { const bases = [2, 3, 10]; const base = bases[Math.floor(Math.random() * bases.length)]; const m = Math.floor(Math.random() * 3) + 1; const n = Math.floor(Math.random() * 10) - 5; const c = Math.floor(Math.random() * 50) + 10; const nStr = n >= 0 ? `+${n}` : `${n}`; const mStr = m === 1 ? 'x' : `${m}\u00D7x`; return `log_${base}(${mStr}${nStr})=log_${base}(${c})`; } },
// //   { id: 'base-e-coeff', name: 'Natural with Coefficient', formula: <span>a &middot; ln(x) = c</span>,
// //     generate: (nice) => { const coeff = Math.floor(Math.random() * 4) + 2; if (nice) { const vals = [2, 4, 6, 8]; return `${coeff}\u00D7ln(x)=${vals[Math.floor(Math.random() * vals.length)]}`; } return `${coeff}\u00D7ln(x)=${(Math.random() * 10 + 1).toFixed(2)}`; } }
// // ];


// // /* =====================================================
// //    WRAPPER COMPONENT (Full Educational Version)
// //    ===================================================== */

// // const LogarithmicSolverWithExamples = () => {
// //   const engineRef = useRef(null);
// //   const [solveResult, setSolveResult] = useState(null);
// //   const [selectedForm, setSelectedForm] = useState(null);
// //   const [examplesOpen, setExamplesOpen] = useState(false);

// //   const handleFormClick = (form) => {
// //     const isNice = Math.random() < 0.8;
// //     const equation = form.generate(isNice);
// //     setSelectedForm(form.id);
// //     setSolveResult(null);
// //     if (engineRef.current) engineRef.current.loadEquation(equation);
// //   };

// //   const handleRandomClick = () => {
// //     const form = equationForms[Math.floor(Math.random() * equationForms.length)];
// //     handleFormClick(form);
// //   };

// //   const handleSolveClick = () => {
// //     setTimeout(() => {
// //       if (engineRef.current) {
// //         const result = engineRef.current.getResult();
// //         setSolveResult(result);
// //       }
// //     }, 50);
// //   };

// //   const renderStepMath = (step, index) => {
// //     if (!step.before && !step.after) return null;
// //     return (
// //       <div>
// //         {step.before && (
// //           <div style={wrapperStyles.stepMathBox}>
// //             <MathRenderer node={step.before} fontSize="1.05rem" />
// //           </div>
// //         )}
// //         {step.after && (
// //           <div style={wrapperStyles.stepTransform}>
// //             <span style={wrapperStyles.arrow}>{'\u27F9'}</span>
// //             <div style={wrapperStyles.stepMathBox}>
// //               <MathRenderer node={step.after} fontSize="1.05rem" />
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     );
// //   };

// //   return (
// //     <div style={wrapperStyles.container}>
// //       <div style={wrapperStyles.inner}>
// //         <header style={wrapperStyles.header}>
// //           <div style={wrapperStyles.iconWrap}>
// //             <span style={wrapperStyles.icon}>log</span>
// //           </div>
// //           <h1 style={wrapperStyles.title}>Logarithmic Equation Solver</h1>
// //           <p style={wrapperStyles.subtitle}>Solve equations with logarithms step by step</p>
// //         </header>

// //         <div className="eq-main-layout" style={wrapperStyles.main}>
// //           <div style={wrapperStyles.leftCol}>
// //             <div onClick={handleSolveClick}>
// //               <LogarithmicSolverEngine ref={engineRef} compact={true} />
// //             </div>

// //             <div style={wrapperStyles.examplesPanel}>
// //               <button style={wrapperStyles.examplesToggle} onClick={() => setExamplesOpen(!examplesOpen)}>
// //                 <span style={wrapperStyles.examplesToggleText}>Try an Example</span>
// //                 <span style={{ ...wrapperStyles.examplesChevron, transform: examplesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>{'\u25BC'}</span>
// //               </button>

// //               {examplesOpen && (
// //                 <div style={wrapperStyles.examplesBody}>
// //                   <div style={wrapperStyles.examplesTopRow}>
// //                     <p style={wrapperStyles.formsHint}>Click any type to generate a random equation.</p>
// //                     <button style={wrapperStyles.randomBtn} onClick={handleRandomClick}>
// //                       {'\uD83C\uDFB2'} Random
// //                     </button>
// //                   </div>
// //                   <div style={wrapperStyles.formsGrid}>
// //                     {equationForms.map((form) => (
// //                       <button
// //                         key={form.id}
// //                         style={{ ...wrapperStyles.formCard, ...(selectedForm === form.id ? wrapperStyles.formCardSelected : {}) }}
// //                         onClick={() => handleFormClick(form)}
// //                       >
// //                         <div style={wrapperStyles.formName}>{form.name}</div>
// //                         <div style={wrapperStyles.formFormula}>{form.formula}</div>
// //                       </button>
// //                     ))}
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           </div>

// //           <div style={wrapperStyles.rightCol}>
// //             <SolutionPanel
// //               steps={solveResult ? solveResult.steps : []}
// //               placeholder="Select an equation type or enter your own equation, then click Solve to see the step-by-step solution."
// //               stepsTitle="Solution Steps"
// //               renderStepContent={renderStepMath}
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const wrapperStyles = {
// //   container: {
// //     background: 'linear-gradient(180deg, #f0f7ff 0%, #e8f4fc 100%)',
// //     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
// //     color: '#1e3a5f',
// //     padding: '30px 20px',
// //   },
// //   inner: { maxWidth: '1100px', margin: '0 auto' },
// //   header: { textAlign: 'center', marginBottom: '24px' },
// //   iconWrap: {
// //     width: '50px', height: '50px',
// //     background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// //     borderRadius: '14px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
// //     marginBottom: '12px', boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
// //   },
// //   icon: { color: '#fff', fontSize: '14px', fontWeight: '700' },
// //   title: { fontSize: '1.7rem', fontWeight: '700', color: '#1e3a5f', margin: '0 0 6px 0' },
// //   subtitle: { fontSize: '0.95rem', color: '#64748b', margin: 0 },
// //   main: { display: 'flex', gap: '24px', alignItems: 'flex-start' },
// //   leftCol: { flex: '1 1 50%', display: 'flex', flexDirection: 'column', gap: '16px' },
// //   rightCol: {
// //     flex: '1 1 50%', background: '#fff', borderRadius: '16px', padding: '20px',
// //     boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)', minHeight: '500px', maxHeight: '700px', overflowY: 'auto',
// //   },
// //   examplesPanel: { background: '#fff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)', overflow: 'hidden' },
// //   examplesToggle: {
// //     width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
// //     padding: '14px 18px', border: 'none', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit',
// //   },
// //   examplesToggleText: { fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#64748b', fontWeight: '600' },
// //   examplesChevron: { fontSize: '0.6rem', color: '#94a3b8', transition: 'transform 0.2s ease' },
// //   examplesBody: { padding: '0 16px 16px' },
// //   examplesTopRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' },
// //   formsGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' },
// //   formsHint: { fontSize: '0.8rem', color: '#94a3b8', margin: 0, fontStyle: 'italic' },
// //   randomBtn: {
// //     fontSize: '0.78rem', fontWeight: '600', padding: '6px 14px',
// //     border: '1px solid #3b82f6', background: '#eff6ff', color: '#3b82f6',
// //     cursor: 'pointer', borderRadius: '8px', fontFamily: 'inherit', transition: 'all 0.15s', whiteSpace: 'nowrap',
// //   },
// //   formCard: {
// //     background: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '10px',
// //     padding: '10px 12px', cursor: 'pointer', transition: 'all 0.2s ease', textAlign: 'left', fontFamily: 'inherit',
// //   },
// //   formCardSelected: { borderColor: '#3b82f6', background: '#eff6ff', boxShadow: '0 2px 8px rgba(59, 130, 246, 0.15)' },
// //   formName: { fontSize: '0.8rem', fontWeight: '600', color: '#1e3a5f', marginBottom: '2px' },
// //   formFormula: { fontSize: '0.9rem', color: '#3b82f6', fontFamily: 'ui-monospace, monospace' },
// //   stepMathBox: {
// //     fontSize: '1.05rem', color: '#1e3a5f', background: '#fff', padding: '10px 14px',
// //     borderRadius: '8px', display: 'inline-block', border: '1px solid #e2e8f0',
// //   },
// //   stepTransform: { display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px' },
// //   arrow: { color: '#3b82f6', fontSize: '1.1rem' },
// // };

// // export default LogarithmicEquationSolver;


// import React, { useState, useEffect, useCallback, useRef } from 'react';

// /* =====================================================
//    LOGARITHMIC EQUATION SOLVER v5

//    Architecture:
//    - Parent owns ALL state: expression, cursor, steps,
//      solution, error
//    - ExpressionBuilder: controlled component, receives
//      expression + callbacks via props
//    - SolutionPanel: receives static config (set once per
//      solver type) + dynamic data (steps from solver)
//    - Solver: pure function, called by parent

//    Single default export: LogarithmicEquationSolver
//    ===================================================== */


// /* =====================================================
//    GLOBAL STYLES
//    ===================================================== */

// const GLOBAL_STYLES = `
//   @keyframes blink-cursor {
//     0%, 100% { opacity: 1; }
//     50% { opacity: 0; }
//   }
//   .eq-cursor {
//     display: inline-block;
//     width: 2px;
//     height: 1.2em;
//     background: rgba(255,255,255,0.85);
//     margin: 0 1px;
//     vertical-align: middle;
//     animation: blink-cursor 1s step-end infinite;
//     flex-shrink: 0;
//   }
//   .eq-display {
//     flex-wrap: wrap;
//     word-break: break-all;
//   }
//   .eq-char-span {
//     cursor: text;
//     position: relative;
//   }
//   @media (max-width: 768px) {
//     .eq-main-layout {
//       flex-direction: column !important;
//     }
//     .eq-main-layout > div {
//       flex: 1 1 100% !important;
//       max-height: none !important;
//     }
//   }
// `;


// /* =====================================================
//    MATH RENDERER (inlined)
//    ===================================================== */

// const MATH_STYLES = `
//   .mr {
//     display: inline-flex;
//     align-items: center;
//     font-family: 'Cambria Math', 'STIX Two Math', 'Latin Modern Math', 'Times New Roman', serif;
//     vertical-align: middle;
//   }
//   .mr-frac {
//     display: inline-flex;
//     flex-direction: column;
//     align-items: center;
//     vertical-align: middle;
//     padding: 0 3px;
//   }
//   .mr-frac-num {
//     border-bottom: 1.5px solid currentColor;
//     padding: 1px 6px 3px;
//     line-height: 1.2;
//   }
//   .mr-frac-den {
//     padding: 3px 6px 1px;
//     line-height: 1.2;
//   }
//   .mr-sup { font-size: 0.65em; vertical-align: super; line-height: 1; margin-left: 1px; }
//   .mr-sub { font-size: 0.65em; vertical-align: sub; line-height: 1; margin-left: 1px; }
//   .mr-radical { display: inline-flex; align-items: stretch; vertical-align: middle; }
//   .mr-radical-symbol { font-size: 1.15em; line-height: 1; margin-right: -1px; display: flex; align-items: flex-end; }
//   .mr-radical-body { border-top: 1.5px solid currentColor; padding: 2px 4px 0; display: inline-flex; align-items: center; }
//   .mr-paren { font-weight: 300; font-size: 1.1em; }
//   .mr-op { margin: 0 4px; }
//   .mr-var { font-style: italic; }
//   .mr-log { font-style: normal; margin-right: 2px; }
//   .mr-abs { font-weight: 300; font-size: 1.1em; }
// `;

// function renderNode(node) {
//   if (!node) return null;
//   switch (node.type) {
//     case 'NUMBER': return <span>{formatNumber(node.value)}</span>;
//     case 'VARIABLE': return <span className="mr-var">{node.name}</span>;
//     case 'E': return <span className="mr-var">e</span>;
//     case 'NEGATE': {
//       const inner = renderNode(node.operand);
//       const p = node.operand.type === 'ADD' || node.operand.type === 'SUBTRACT';
//       return <span>{'\u2212'}{p && <span className="mr-paren">(</span>}{inner}{p && <span className="mr-paren">)</span>}</span>;
//     }
//     case 'ADD': return <span>{renderNode(node.left)}<span className="mr-op">+</span>{renderNode(node.right)}</span>;
//     case 'SUBTRACT': return <span>{renderNode(node.left)}<span className="mr-op">{'\u2212'}</span>{renderNode(node.right)}</span>;
//     case 'MULTIPLY': {
//       const l = node.left, r = node.right;
//       const juxt = (l.type === 'NUMBER' && (r.type === 'VARIABLE' || r.type === 'POWER' || r.type === 'LOG' || r.type === 'LN')) || (l.type === 'VARIABLE' && r.type === 'VARIABLE');
//       const wL = (l.type === 'ADD' || l.type === 'SUBTRACT') ? <span><span className="mr-paren">(</span>{renderNode(l)}<span className="mr-paren">)</span></span> : renderNode(l);
//       const wR = (r.type === 'ADD' || r.type === 'SUBTRACT') ? <span><span className="mr-paren">(</span>{renderNode(r)}<span className="mr-paren">)</span></span> : renderNode(r);
//       return juxt ? <span>{wL}{wR}</span> : <span>{wL}<span className="mr-op">{'\u00B7'}</span>{wR}</span>;
//     }
//     case 'DIVIDE': return <span className="mr-frac"><span className="mr-frac-num">{renderNode(node.left)}</span><span className="mr-frac-den">{renderNode(node.right)}</span></span>;
//     case 'POWER': {
//       const b = node.base;
//       const bp = b.type === 'ADD' || b.type === 'SUBTRACT' || b.type === 'MULTIPLY' || b.type === 'NEGATE' || (b.type === 'NUMBER' && b.value < 0);
//       const bR = bp ? <span><span className="mr-paren">(</span>{renderNode(b)}<span className="mr-paren">)</span></span> : renderNode(b);
//       return <span>{bR}<span className="mr-sup">{renderNode(node.exponent)}</span></span>;
//     }
//     case 'SQRT': return <span className="mr-radical"><span className="mr-radical-symbol">{'\u221A'}</span><span className="mr-radical-body">{renderNode(node.operand)}</span></span>;
//     case 'LOG': {
//       const isNat = node.base && node.base.type === 'E';
//       const showBase = !isNat && node.base && !(node.base.type === 'NUMBER' && node.base.value === 10);
//       return <span><span className="mr-log">{isNat ? 'ln' : 'log'}</span>{showBase && <span className="mr-sub">{renderNode(node.base)}</span>}<span className="mr-paren">(</span>{renderNode(node.argument)}<span className="mr-paren">)</span></span>;
//     }
//     case 'LN': return <span><span className="mr-log">ln</span><span className="mr-paren">(</span>{renderNode(node.argument)}<span className="mr-paren">)</span></span>;
//     case 'ABS': return <span><span className="mr-abs">|</span>{renderNode(node.operand)}<span className="mr-abs">|</span></span>;
//     case 'EQUATION': return <span>{renderNode(node.left)}<span className="mr-op">=</span>{renderNode(node.right)}</span>;
//     default: return null;
//   }
// }

// function MathRenderer({ node, fontSize, className = '' }) {
//   if (!node) return null;
//   return (
//     <span className={`mr ${className}`} style={fontSize ? { fontSize } : undefined}>
//       <style>{MATH_STYLES}</style>
//       {renderNode(node)}
//     </span>
//   );
// }


// /* =====================================================
//    SOLUTION PANEL (inlined)
//    ===================================================== */

// const SP_STYLES = `
//   .sp-tab-bar { display: flex; gap: 2px; background: var(--tab-bg, #e2e8f0); border-radius: 8px; padding: 3px; margin-bottom: 16px; }
//   .sp-tab-btn { flex: 1; padding: 8px 16px; border: none; border-radius: 6px; font-family: inherit; font-size: 0.82rem; font-weight: 500; cursor: pointer; background: transparent; color: var(--muted, #64748b); transition: all 0.15s; text-align: center; }
//   .sp-tab-btn.active { background: var(--tab-active, #fff); color: var(--text, #1e3a5f); box-shadow: 0 1px 3px rgba(0,0,0,0.06); }
//   .sp-tab-btn:not(.active):hover { color: var(--text-secondary, #334155); }
//   .sp-steps-title { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1.8px; color: var(--faint, #94a3b8); margin-bottom: 14px; font-weight: 600; }
//   .sp-step-card { background: var(--card, #f8fafc); border: none; border-left: 3px solid var(--accent, #3b82f6); border-radius: 0 8px 8px 0; padding: 16px 18px; margin-bottom: 10px; transition: background 0.25s; }
//   .sp-step-header { margin-bottom: 6px; }
//   .sp-step-number { font-size: 0.62rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--accent, #3b82f6); font-weight: 600; }
//   .sp-step-rule { font-weight: 600; font-size: 0.95rem; color: var(--text, #1e3a5f); margin-bottom: 2px; }
//   .sp-step-description { font-size: 0.82rem; color: var(--muted, #64748b); line-height: 1.4; margin-bottom: 4px; }
//   .sp-step-content { margin-top: 8px; }
//   .sp-graph-container { background: var(--card, #fff); border-radius: 8px; padding: 20px; transition: background 0.25s; }
//   .sp-graph-label { font-size: 0.68rem; text-transform: uppercase; letter-spacing: 1.2px; color: var(--faint, #94a3b8); margin-bottom: 12px; font-weight: 500; }
//   .sp-graph-legend { display: flex; gap: 16px; margin-top: 10px; font-size: 0.75rem; color: var(--muted, #64748b); }
//   .sp-graph-legend-dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 4px; vertical-align: middle; }
//   .sp-placeholder { background: var(--placeholder-bg, #f1f5f9); border: 1px dashed var(--placeholder-border, #cbd5e1); border-radius: 8px; padding: 40px 24px; text-align: center; font-size: 0.85rem; color: var(--faint, #94a3b8); font-style: italic; min-height: 200px; display: flex; align-items: center; justify-content: center; }
//   .sp-no-steps { color: var(--faint, #94a3b8); font-style: italic; text-align: center; padding: 20px; font-size: 0.85rem; }
// `;

// function SolutionPanel({
//   /* static config */
//   placeholder = 'Steps will appear here once you solve',
//   stepsTitle = 'Solution Steps',
//   showGraphs = true,
//   GraphComponent = null,
//   graphLabel = '',
//   graphLegend = [],
//   stepCardClass = null,
//   renderStepContent = null,
//   /* dynamic data */
//   steps = [],
//   graphData = null,
//   darkMode = false,
// }) {
//   const [activeTab, setActiveTab] = useState('steps');
//   const hasGraph = showGraphs && graphData && GraphComponent;
//   const hasSolved = steps.length > 0;

//   const prevStepsRef = useRef(steps);
//   if (steps !== prevStepsRef.current && steps.length > 0) {
//     prevStepsRef.current = steps;
//     if (activeTab !== 'steps') setActiveTab('steps');
//   }

//   if (!hasSolved) {
//     return <div><style>{SP_STYLES}</style><div className="sp-placeholder"><p>{placeholder}</p></div></div>;
//   }

//   return (
//     <div>
//       <style>{SP_STYLES}</style>
//       {hasGraph && (
//         <div className="sp-tab-bar">
//           <button className={`sp-tab-btn${activeTab === 'steps' ? ' active' : ''}`} onClick={() => setActiveTab('steps')}>Steps</button>
//           <button className={`sp-tab-btn${activeTab === 'graph' ? ' active' : ''}`} onClick={() => setActiveTab('graph')}>Graph</button>
//         </div>
//       )}
//       {activeTab === 'steps' && (
//         <div>
//           {!hasGraph && <div className="sp-steps-title">{stepsTitle}</div>}
//           {steps.map((step, index) => {
//             const extra = stepCardClass ? stepCardClass(step) : '';
//             return (
//               <div key={index} className={`sp-step-card ${extra}`}>
//                 <div className="sp-step-header"><span className="sp-step-number">Step {index + 1}</span></div>
//                 <div className="sp-step-rule">{step.rule}</div>
//                 <p className="sp-step-description">{step.description}</p>
//                 {renderStepContent && <div className="sp-step-content">{renderStepContent(step, index)}</div>}
//               </div>
//             );
//           })}
//         </div>
//       )}
//       {activeTab === 'graph' && hasGraph && (
//         <div className="sp-graph-container">
//           {graphLabel && <div className="sp-graph-label">{graphLabel}</div>}
//           <GraphComponent graphData={graphData} darkMode={darkMode} />
//           {graphLegend.length > 0 && (
//             <div className="sp-graph-legend">
//               {graphLegend.map((item, i) => <span key={i}><span className="sp-graph-legend-dot" style={{ background: item.color }} />{item.label}</span>)}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }


// /* =====================================================
//    TOKENIZER
//    ===================================================== */

// const TokenType = {
//   NUMBER: 'NUMBER', VARIABLE: 'VARIABLE', MULTIPLY: 'MULTIPLY', DIVIDE: 'DIVIDE',
//   POWER: 'POWER', LPAREN: 'LPAREN', RPAREN: 'RPAREN', PLUS: 'PLUS', MINUS: 'MINUS',
//   EQUALS: 'EQUALS', E: 'E', LOG: 'LOG', LN: 'LN', UNDERSCORE: 'UNDERSCORE',
// };

// function tokenize(input) {
//   const tokens = [];
//   let i = 0;
//   while (i < input.length) {
//     const c = input[i];
//     if (/\s/.test(c)) { i++; continue; }
//     if (input.slice(i, i + 2).toLowerCase() === 'ln') { tokens.push({ type: TokenType.LN }); i += 2; continue; }
//     if (input.slice(i, i + 3).toLowerCase() === 'log') { tokens.push({ type: TokenType.LOG }); i += 3; continue; }
//     if (/[0-9]/.test(c) || (c === '.' && /[0-9]/.test(input[i + 1]))) {
//       let n = ''; while (i < input.length && (/[0-9]/.test(input[i]) || input[i] === '.')) { n += input[i]; i++; }
//       tokens.push({ type: TokenType.NUMBER, value: parseFloat(n) }); continue;
//     }
//     if (c === 'e' && (i + 1 >= input.length || !/[a-zA-Z]/.test(input[i + 1]))) { tokens.push({ type: TokenType.E }); i++; continue; }
//     if (/[a-zA-Z]/.test(c)) { tokens.push({ type: TokenType.VARIABLE, value: c.toLowerCase() }); i++; continue; }
//     const cm = { '\u00D7': TokenType.MULTIPLY, '*': TokenType.MULTIPLY, '\u00B7': TokenType.MULTIPLY, '\u00F7': TokenType.DIVIDE, '/': TokenType.DIVIDE, '^': TokenType.POWER, '(': TokenType.LPAREN, ')': TokenType.RPAREN, '+': TokenType.PLUS, '-': TokenType.MINUS, '=': TokenType.EQUALS, '_': TokenType.UNDERSCORE };
//     if (cm[c]) { tokens.push({ type: cm[c] }); i++; continue; }
//     i++;
//   }
//   return tokens;
// }


// /* =====================================================
//    PARSER
//    ===================================================== */

// function parse(tokens) {
//   let pos = 0;
//   const peek = () => tokens[pos];
//   const consume = (t) => { const tk = tokens[pos]; if (t && tk?.type !== t) throw new Error(`Expected ${t} but got ${tk?.type}`); pos++; return tk; };

//   const parseEquation = () => { const l = parseExpr(); if (peek()?.type === TokenType.EQUALS) { consume(); return { type: 'EQUATION', left: l, right: parseExpr() }; } return l; };
//   const parseExpr = () => parseAdd();
//   const parseAdd = () => { let l = parseMul(); while (peek()?.type === TokenType.PLUS || peek()?.type === TokenType.MINUS) { const o = consume().type; l = { type: o === TokenType.PLUS ? 'ADD' : 'SUBTRACT', left: l, right: parseMul() }; } return l; };
//   const parseMul = () => { let l = parsePow(); while (peek()?.type === TokenType.MULTIPLY || peek()?.type === TokenType.DIVIDE) { const o = consume().type; l = { type: o === TokenType.MULTIPLY ? 'MULTIPLY' : 'DIVIDE', left: l, right: parsePow() }; } return l; };
//   const parsePow = () => { let b = parseUn(); if (peek()?.type === TokenType.POWER) { consume(); return { type: 'POWER', base: b, exponent: parsePow() }; } return b; };
//   const parseUn = () => { if (peek()?.type === TokenType.MINUS) { consume(); return { type: 'NEGATE', operand: parseUn() }; } return parsePri(); };
//   const parsePri = () => {
//     const t = peek();
//     if (t?.type === TokenType.NUMBER) { consume(); return { type: 'NUMBER', value: t.value }; }
//     if (t?.type === TokenType.VARIABLE) { consume(); return { type: 'VARIABLE', name: t.value }; }
//     if (t?.type === TokenType.E) { consume(); return { type: 'E' }; }
//     if (t?.type === TokenType.LN) { consume(); consume(TokenType.LPAREN); const a = parseExpr(); consume(TokenType.RPAREN); return { type: 'LOG', base: { type: 'E' }, argument: a }; }
//     if (t?.type === TokenType.LOG) {
//       consume(); let base = { type: 'NUMBER', value: 10 };
//       if (peek()?.type === TokenType.UNDERSCORE) { consume();
//         if (peek()?.type === TokenType.NUMBER) base = { type: 'NUMBER', value: consume().value };
//         else if (peek()?.type === TokenType.VARIABLE) base = { type: 'VARIABLE', name: consume().value };
//         else if (peek()?.type === TokenType.E) { consume(); base = { type: 'E' }; }
//         else if (peek()?.type === TokenType.LPAREN) { consume(); base = parseExpr(); consume(TokenType.RPAREN); }
//       }
//       consume(TokenType.LPAREN); const a = parseExpr(); consume(TokenType.RPAREN);
//       return { type: 'LOG', base, argument: a };
//     }
//     if (t?.type === TokenType.LPAREN) { consume(); const e = parseExpr(); consume(TokenType.RPAREN); return e; }
//     throw new Error(`Unexpected token: ${t?.type}`);
//   };

//   const ast = parseEquation();
//   if (pos < tokens.length) throw new Error('Unexpected tokens at end');
//   return ast;
// }


// /* =====================================================
//    HELPERS
//    ===================================================== */

// function formatNumber(num) {
//   if (Number.isInteger(num)) return String(num);
//   return (Math.round(num * 1000000) / 1000000).toFixed(6).replace(/\.?0+$/, '');
// }

// function containsVariable(n) { if (!n) return false; if (n.type === 'VARIABLE') return true; if (n.type === 'NUMBER' || n.type === 'E') return false; if (n.type === 'NEGATE') return containsVariable(n.operand); if (n.type === 'POWER') return containsVariable(n.base) || containsVariable(n.exponent); if (n.type === 'LOG') return containsVariable(n.base) || containsVariable(n.argument); return containsVariable(n.left) || containsVariable(n.right); }
// function containsLog(n) { if (!n) return false; if (n.type === 'LOG') return true; if (n.type === 'NEGATE') return containsLog(n.operand); if (n.type === 'POWER') return containsLog(n.base) || containsLog(n.exponent); if (['ADD','SUBTRACT','MULTIPLY','DIVIDE'].includes(n.type)) return containsLog(n.left) || containsLog(n.right); return false; }

// function evaluateConstant(n) {
//   if (!n) return null;
//   switch (n.type) {
//     case 'NUMBER': return n.value; case 'E': return Math.E;
//     case 'NEGATE': { const v = evaluateConstant(n.operand); return v !== null ? -v : null; }
//     case 'ADD': { const l = evaluateConstant(n.left), r = evaluateConstant(n.right); return (l !== null && r !== null) ? l + r : null; }
//     case 'SUBTRACT': { const l = evaluateConstant(n.left), r = evaluateConstant(n.right); return (l !== null && r !== null) ? l - r : null; }
//     case 'MULTIPLY': { const l = evaluateConstant(n.left), r = evaluateConstant(n.right); return (l !== null && r !== null) ? l * r : null; }
//     case 'DIVIDE': { const l = evaluateConstant(n.left), r = evaluateConstant(n.right); return (l !== null && r !== null && r !== 0) ? l / r : null; }
//     case 'POWER': { const b = evaluateConstant(n.base), e = evaluateConstant(n.exponent); return (b !== null && e !== null) ? Math.pow(b, e) : null; }
//     case 'LOG': { const b = evaluateConstant(n.base), a = evaluateConstant(n.argument); return (b !== null && a !== null && b > 0 && b !== 1 && a > 0) ? Math.log(a) / Math.log(b) : null; }
//     default: return null;
//   }
// }

// function getBaseValue(n) { return n.type === 'E' ? Math.E : n.type === 'NUMBER' ? n.value : evaluateConstant(n); }
// function basesEqual(a, b) { if (a.type === 'E' && b.type === 'E') return true; const v1 = getBaseValue(a), v2 = getBaseValue(b); return (v1 !== null && v2 !== null) ? Math.abs(v1 - v2) < 1e-10 : false; }
// function isNaturalBase(n) { return n.type === 'E'; }

// function parseLinearArgument(n) {
//   if (n.type === 'VARIABLE') return { variable: n.name, coefficient: 1, constant: 0 };
//   if (n.type === 'MULTIPLY') { const lv = evaluateConstant(n.left), rv = evaluateConstant(n.right); if (lv !== null && n.right.type === 'VARIABLE') return { variable: n.right.name, coefficient: lv, constant: 0 }; if (rv !== null && n.left.type === 'VARIABLE') return { variable: n.left.name, coefficient: rv, constant: 0 }; }
//   if (n.type === 'ADD' || n.type === 'SUBTRACT') { const ll = parseLinearArgument(n.left), rc = evaluateConstant(n.right); if (ll && rc !== null) return { variable: ll.variable, coefficient: ll.coefficient, constant: ll.constant + (n.type === 'ADD' ? rc : -rc) }; const rl = parseLinearArgument(n.right), lc = evaluateConstant(n.left); if (rl && lc !== null && n.type === 'ADD') return { variable: rl.variable, coefficient: rl.coefficient, constant: rl.constant + lc }; }
//   return null;
// }

// function extractLogCoefficient(n) { if (n.type !== 'MULTIPLY') return { coefficient: null, log: null }; if (n.left.type === 'LOG' && !containsVariable(n.right)) return { coefficient: evaluateConstant(n.right), log: n.left }; if (n.right.type === 'LOG' && !containsVariable(n.left)) return { coefficient: evaluateConstant(n.left), log: n.right }; return { coefficient: null, log: null }; }

// function extractLogAdditive(n) { if (n.type !== 'ADD' && n.type !== 'SUBTRACT') return { log: null, constant: null, isAdd: false }; const isAdd = n.type === 'ADD'; if (n.left.type === 'LOG' && containsVariable(n.left) && !containsVariable(n.right)) return { log: n.left, constant: evaluateConstant(n.right), isAdd }; if (n.right.type === 'LOG' && containsVariable(n.right) && !containsVariable(n.left) && isAdd) return { log: n.right, constant: evaluateConstant(n.left), isAdd }; return { log: null, constant: null, isAdd: false }; }


// /* =====================================================
//    SOLVER (pure function)
//    ===================================================== */

// function solveLogarithmicEquation(exprString) {
//   const tokens = tokenize(exprString);
//   const ast = parse(tokens);
//   const steps = [];

//   if (ast.type !== 'EQUATION') throw new Error('Input must be an equation (use = sign)');

//   let { left, right } = ast;
//   const leftHasLogVar = containsLog(left) && containsVariable(left);
//   const rightHasLogVar = containsLog(right) && containsVariable(right);

//   if (leftHasLogVar && rightHasLogVar) {
//     if (left.type === 'LOG' && right.type === 'LOG' && basesEqual(left.base, right.base)) {
//       steps.push({ rule: 'Equal Logarithms Property', description: 'If log_b(A) = log_b(B), then A = B.', before: ast, after: { type: 'EQUATION', left: left.argument, right: right.argument } });
//       const lv = evaluateConstant(left.argument), rv = evaluateConstant(right.argument);
//       if (lv !== null && containsVariable(right.argument)) return { steps, ...solveLinear(right.argument, left.argument, steps) };
//       if (rv !== null && containsVariable(left.argument)) return { steps, ...solveLinear(left.argument, right.argument, steps) };
//       return { steps, ...solveLinear(left.argument, right.argument, steps) };
//     }
//     throw new Error('Equations with different log bases on both sides require change of base. Coming soon!');
//   }

//   let logSide, constSide;
//   if (leftHasLogVar && !rightHasLogVar) { logSide = left; constSide = right; }
//   else if (rightHasLogVar && !leftHasLogVar) { logSide = right; constSide = left; steps.push({ rule: 'Rearrange Equation', description: 'Move the logarithmic term to the left side.', before: ast, after: { type: 'EQUATION', left: logSide, right: constSide } }); }
//   else throw new Error(containsVariable(left) || containsVariable(right) ? 'No logarithm found' : 'Could not determine equation structure');

//   const cv = evaluateConstant(constSide);
//   if (cv !== null && constSide.type !== 'NUMBER') { const nc = { type: 'NUMBER', value: cv }; steps.push({ rule: 'Evaluate Constant', description: 'Simplify the right side.', before: { type: 'EQUATION', left: logSide, right: constSide }, after: { type: 'EQUATION', left: logSide, right: nc } }); constSide = nc; }

//   if (logSide.type === 'MULTIPLY') { const { coefficient, log } = extractLogCoefficient(logSide); if (coefficient !== null && log !== null) { const val = evaluateConstant(constSide); if (val !== null) { const nc = { type: 'NUMBER', value: val / coefficient }; steps.push({ rule: 'Isolate Logarithm', description: `Divide both sides by ${formatNumber(coefficient)}.`, before: { type: 'EQUATION', left: logSide, right: constSide }, after: { type: 'EQUATION', left: log, right: nc } }); logSide = log; constSide = nc; } } }

//   if (logSide.type === 'ADD' || logSide.type === 'SUBTRACT') { const { log, constant, isAdd } = extractLogAdditive(logSide); if (log !== null && constant !== null) { const val = evaluateConstant(constSide); if (val !== null) { const nv = isAdd ? val - constant : val + constant; const nc = { type: 'NUMBER', value: nv }; steps.push({ rule: 'Isolate Logarithm', description: `${isAdd ? 'Subtract' : 'Add'} ${formatNumber(Math.abs(constant))} ${isAdd ? 'from' : 'to'} both sides.`, before: { type: 'EQUATION', left: logSide, right: constSide }, after: { type: 'EQUATION', left: log, right: nc } }); logSide = log; constSide = nc; } } }

//   if (logSide.type !== 'LOG') throw new Error('Could not isolate logarithm');

//   const base = logSide.base, argument = logSide.argument;
//   const resultValue = evaluateConstant(constSide);
//   if (resultValue === null) throw new Error('Right side must evaluate to a number');
//   const baseValue = getBaseValue(base);
//   if (baseValue === null) throw new Error('Base must be a constant');
//   if (baseValue <= 0 || baseValue === 1) throw new Error('Base must be positive and not equal to 1');

//   const isNat = isNaturalBase(base);
//   const expVal = Math.pow(baseValue, resultValue);
//   const baseD = isNat ? { type: 'E' } : base;
//   const expNode = { type: 'POWER', base: baseD, exponent: { type: 'NUMBER', value: resultValue } };

//   steps.push({ rule: 'Convert to Exponential Form', description: isNat ? 'If ln(A) = c, then A = e^c.' : `If log_${formatNumber(baseValue)}(A) = c, then A = ${formatNumber(baseValue)}^c.`, before: { type: 'EQUATION', left: logSide, right: constSide }, after: { type: 'EQUATION', left: argument, right: expNode } });
//   steps.push({ rule: 'Evaluate Exponential', description: isNat ? `e^${formatNumber(resultValue)} \u2248 ${formatNumber(expVal)}` : `${formatNumber(baseValue)}^${formatNumber(resultValue)} = ${formatNumber(expVal)}`, before: { type: 'EQUATION', left: argument, right: expNode }, after: { type: 'EQUATION', left: argument, right: { type: 'NUMBER', value: expVal } } });

//   if (argument.type === 'VARIABLE') {
//     if (expVal <= 0) throw new Error('No solution: logarithm argument must be positive');
//     return { steps, solution: { variable: argument.name, value: expVal, exact: Number.isInteger(expVal) } };
//   }

//   const li = parseLinearArgument(argument);
//   if (li) {
//     const { variable, coefficient, constant } = li;
//     steps.push({ rule: 'Solve Linear Equation', description: `Solve for ${variable}.`, before: null, after: null });
//     if (expVal <= 0) throw new Error('No solution: logarithm argument must be positive');
//     const sol = (expVal - constant) / coefficient;
//     steps.push({ rule: 'Isolate Variable', description: coefficient !== 1 ? `Subtract ${formatNumber(constant)}, divide by ${formatNumber(coefficient)}.` : `Subtract ${formatNumber(constant)}.`, before: null, after: { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: sol } } });
//     if (coefficient * sol + constant <= 0) throw new Error(`No valid solution: ${variable} = ${formatNumber(sol)} makes the argument non-positive`);
//     return { steps, solution: { variable, value: sol, exact: Number.isInteger(sol) } };
//   }

//   throw new Error('Argument form not supported');
// }

// function solveLinear(leftExpr, rightExpr, steps) {
//   const ll = parseLinearArgument(leftExpr), rl = parseLinearArgument(rightExpr);
//   const rc = evaluateConstant(rightExpr), lc = evaluateConstant(leftExpr);
//   if (ll && rc !== null) { const sol = (rc - ll.constant) / ll.coefficient; steps.push({ rule: 'Solve Linear Equation', description: `Solve for ${ll.variable}.`, before: null, after: { type: 'EQUATION', left: { type: 'VARIABLE', name: ll.variable }, right: { type: 'NUMBER', value: sol } } }); return { solution: { variable: ll.variable, value: sol, exact: Number.isInteger(sol) } }; }
//   if (rl && lc !== null) { const sol = (lc - rl.constant) / rl.coefficient; steps.push({ rule: 'Solve Linear Equation', description: `Solve for ${rl.variable}.`, before: null, after: { type: 'EQUATION', left: { type: 'VARIABLE', name: rl.variable }, right: { type: 'NUMBER', value: sol } } }); return { solution: { variable: rl.variable, value: sol, exact: Number.isInteger(sol) } }; }
//   if (ll && rl && ll.variable === rl.variable) { const nc = ll.coefficient - rl.coefficient, nk = rl.constant - ll.constant; if (Math.abs(nc) < 1e-10) throw new Error(nk === 0 ? 'Infinite solutions' : 'No solution'); const sol = nk / nc; steps.push({ rule: 'Solve Linear Equation', description: `Combine and solve for ${ll.variable}.`, before: null, after: { type: 'EQUATION', left: { type: 'VARIABLE', name: ll.variable }, right: { type: 'NUMBER', value: sol } } }); return { solution: { variable: ll.variable, value: sol, exact: Number.isInteger(sol) } }; }
//   throw new Error('Could not solve the resulting equation');
// }


// /* =====================================================
//    EXPRESSION BUILDER (controlled component)
//    ===================================================== */

// const VALID_KEYS = new Set(['0','1','2','3','4','5','6','7','8','9','.','+','-','*','/','^','=','(',')', 'x','y','n','e','X','Y','N','E']);

// function ExpressionBuilder({ expression, cursorPos, onExprChange, onCursorChange, onSolve, error }) {
//   const containerRef = useRef(null);
//   const [undoStack, setUndoStack] = useState([]);

//   const variables = ['x', 'y', 'n'];
//   const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
//   const operators = ['+', '-', '\u00D7', '\u00F7', '^', '='];

//   const pushUndo = useCallback(() => {
//     setUndoStack(s => [...s.slice(-50), { expr: expression, pos: cursorPos }]);
//   }, [expression, cursorPos]);

//   const undo = useCallback(() => {
//     if (undoStack.length === 0) return;
//     const prev = undoStack[undoStack.length - 1];
//     setUndoStack(s => s.slice(0, -1));
//     onExprChange(prev.expr);
//     onCursorChange(prev.pos);
//   }, [undoStack, onExprChange, onCursorChange]);

//   const insertAtCursor = useCallback((items) => {
//     pushUndo();
//     const arr = Array.isArray(items) ? items : [items];
//     onExprChange([...expression.slice(0, cursorPos), ...arr, ...expression.slice(cursorPos)]);
//     onCursorChange(cursorPos + arr.length);
//   }, [expression, cursorPos, pushUndo, onExprChange, onCursorChange]);

//   const addLog = (base) => {
//     if (base === 'e') insertAtCursor(['l', 'n', '(']);
//     else if (base === '10') insertAtCursor(['l', 'o', 'g', '(']);
//     else insertAtCursor(['l', 'o', 'g', '_', base, '(']);
//   };

//   const backspace = useCallback(() => {
//     if (cursorPos === 0) return;
//     pushUndo();
//     onExprChange([...expression.slice(0, cursorPos - 1), ...expression.slice(cursorPos)]);
//     onCursorChange(cursorPos - 1);
//   }, [expression, cursorPos, pushUndo, onExprChange, onCursorChange]);

//   const deleteForward = useCallback(() => {
//     if (cursorPos >= expression.length) return;
//     pushUndo();
//     onExprChange([...expression.slice(0, cursorPos), ...expression.slice(cursorPos + 1)]);
//   }, [expression, cursorPos, pushUndo, onExprChange]);

//   const clearAll = () => {
//     if (expression.length === 0) return;
//     pushUndo();
//     onExprChange([]);
//     onCursorChange(0);
//   };

//   const copyExpr = useCallback(() => { const t = expression.join(''); if (t && navigator.clipboard) navigator.clipboard.writeText(t); }, [expression]);

//   const pasteExpr = useCallback(async () => {
//     if (!navigator.clipboard) return;
//     try { const t = await navigator.clipboard.readText(); if (t) { pushUndo(); const ch = t.split(''); onExprChange([...expression.slice(0, cursorPos), ...ch, ...expression.slice(cursorPos)]); onCursorChange(cursorPos + ch.length); } } catch (e) { /* denied */ }
//   }, [expression, cursorPos, pushUndo, onExprChange, onCursorChange]);

//   const handleKeyDown = useCallback((e) => {
//     if (e.ctrlKey || e.metaKey) {
//       if (e.key === 'z' || e.key === 'Z') { e.preventDefault(); undo(); return; }
//       if (e.key === 'c' || e.key === 'C') { e.preventDefault(); copyExpr(); return; }
//       if (e.key === 'v' || e.key === 'V') { e.preventDefault(); pasteExpr(); return; }
//       return;
//     }
//     if (e.key === 'ArrowLeft') { e.preventDefault(); onCursorChange(Math.max(0, cursorPos - 1)); return; }
//     if (e.key === 'ArrowRight') { e.preventDefault(); onCursorChange(Math.min(expression.length, cursorPos + 1)); return; }
//     if (e.key === 'Home') { e.preventDefault(); onCursorChange(0); return; }
//     if (e.key === 'End') { e.preventDefault(); onCursorChange(expression.length); return; }
//     if (e.key === 'Backspace') { e.preventDefault(); backspace(); return; }
//     if (e.key === 'Delete') { e.preventDefault(); deleteForward(); return; }
//     if (e.key === 'Enter') { e.preventDefault(); if (expression.length > 0) onSolve(); return; }
//     if (e.key === 'Escape') { e.preventDefault(); clearAll(); return; }
//     if (VALID_KEYS.has(e.key)) { e.preventDefault(); let m = e.key.toLowerCase(); if (e.key === '*') m = '\u00D7'; if (e.key === '/') m = '\u00F7'; insertAtCursor(m); }
//   }, [expression, cursorPos, undo, copyExpr, pasteExpr, backspace, deleteForward, onSolve, onCursorChange, insertAtCursor]);

//   useEffect(() => {
//     const el = containerRef.current; if (!el) return;
//     el.addEventListener('keydown', handleKeyDown);
//     return () => el.removeEventListener('keydown', handleKeyDown);
//   }, [handleKeyDown]);

//   const handleDisplayClick = (e) => {
//     containerRef.current?.focus();
//     let target = e.target;
//     while (target && !target.dataset?.idx && target !== e.currentTarget) target = target.parentElement;
//     if (target && target.dataset?.idx !== undefined) {
//       const idx = parseInt(target.dataset.idx, 10);
//       const rect = target.getBoundingClientRect();
//       onCursorChange(e.clientX < rect.left + rect.width / 2 ? idx : idx + 1);
//     } else { onCursorChange(expression.length); }
//   };

//   const renderDisplay = () => {
//     const cursor = <span key="cursor" className="eq-cursor" />;
//     if (!expression || expression.length === 0) return <>{cursor}<span style={eb.placeholder}>Enter equation...</span></>;

//     const segments = [];
//     let i = 0;
//     while (i < expression.length) {
//       if (expression[i] === 'l' && expression[i + 1] === 'n') {
//         segments.push({ s: i, e: i + 1, el: <span key={`g${i}`} style={eb.logExpr}><span data-idx={i} className="eq-char-span" style={eb.log}>l</span><span data-idx={i + 1} className="eq-char-span" style={eb.log}>n</span></span> });
//         i += 2; continue;
//       }
//       if (expression[i] === 'l' && expression[i + 1] === 'o' && expression[i + 2] === 'g') {
//         let j = i + 3, bc = [], bi = [];
//         if (expression[j] === '_') { j++; while (j < expression.length && /[0-9a-zA-Z]/.test(expression[j]) && expression[j] !== '(') { bc.push(expression[j]); bi.push(j); j++; } }
//         segments.push({ s: i, e: j - 1, el: (
//           <span key={`g${i}`} style={eb.logExpr}>
//             <span data-idx={i} className="eq-char-span" style={eb.log}>l</span>
//             <span data-idx={i + 1} className="eq-char-span" style={eb.log}>o</span>
//             <span data-idx={i + 2} className="eq-char-span" style={eb.log}>g</span>
//             {expression[i + 3] === '_' && <span data-idx={i + 3} className="eq-char-span" style={eb.op}></span>}
//             {bc.length > 0 && <sub style={eb.sub}>{bc.map((c, ci) => <span key={bi[ci]} data-idx={bi[ci]} className="eq-char-span">{c}</span>)}</sub>}
//           </span>
//         )}); i = j; continue;
//       }
//       const cur = expression[i], nxt = expression[i + 1];
//       if (nxt === '^') {
//         let ec = [], ei = [], j = i + 2;
//         if (expression[j] === '(') { let d = 1; ec.push('('); ei.push(j); j++; while (j < expression.length && d > 0) { if (expression[j] === '(') d++; if (expression[j] === ')') d--; ec.push(expression[j]); ei.push(j); j++; } }
//         else { while (j < expression.length && /[0-9a-zA-Z.+\-\u00D7]/.test(expression[j]) && expression[j] !== '=') { ec.push(expression[j]); ei.push(j); j++; } }
//         if (ec.length > 0) { segments.push({ s: i, e: j - 1, el: (
//           <span key={`g${i}`} style={eb.term}><span data-idx={i} className="eq-char-span" style={cur === 'e' ? eb.euler : undefined}>{cur}</span><span data-idx={i + 1} className="eq-char-span" style={eb.op}></span><sup style={eb.sup}>{ec.map((c, ci) => <span key={ei[ci]} data-idx={ei[ci]} className="eq-char-span">{c}</span>)}</sup></span>
//         )}); i = j; continue; }
//       }
//       const cm = { '\u00D7': { st: eb.op, t: ' \u00B7 ' }, '\u00F7': { st: eb.op, t: ' / ' }, '+': { st: eb.op, t: ' + ' }, '-': { st: eb.op, t: ' \u2212 ' }, '=': { st: eb.equals, t: ' = ' }, '^': { st: eb.op, t: '^' }, 'e': { st: eb.euler, t: 'e' }, '_': { st: eb.op, t: '' } };
//       if (cm[cur]) { if (cm[cur].t) segments.push({ s: i, e: i, el: <span key={`c${i}`} data-idx={i} className="eq-char-span" style={cm[cur].st}>{cm[cur].t}</span> }); }
//       else segments.push({ s: i, e: i, el: <span key={`c${i}`} data-idx={i} className="eq-char-span">{cur}</span> });
//       i++;
//     }

//     const output = [];
//     let ins = false;
//     for (const seg of segments) {
//       if (!ins && cursorPos <= seg.s) { output.push(cursor); ins = true; }
//       output.push(seg.el);
//       if (!ins && cursorPos <= seg.e + 1) { output.push(cursor); ins = true; }
//     }
//     if (!ins) output.push(cursor);
//     return output;
//   };

//   return (
//     <div ref={containerRef} tabIndex={0} style={{ ...eb.container, outline: 'none' }}>
//       <div className="eq-display" style={eb.display} onClick={handleDisplayClick}>{renderDisplay()}</div>
//       {error && <div style={eb.errorBox}>{error}</div>}
//       <div style={eb.builder}>
//         <div style={eb.row}><span style={eb.label}>Log</span><div style={eb.btnGroup}>
//           <button style={{ ...eb.btn, ...eb.btnLog }} onClick={() => addLog('e')}>ln</button>
//           <button style={{ ...eb.btn, ...eb.btnLog }} onClick={() => addLog('10')}>log</button>
//           <button style={{ ...eb.btn, ...eb.btnLog }} onClick={() => addLog('2')}>log<sub>2</sub></button>
//           <button style={{ ...eb.btn, ...eb.btnLog }} onClick={() => addLog('3')}>log<sub>3</sub></button>
//           <button style={{ ...eb.btn, ...eb.btnLog }} onClick={() => addLog('5')}>log<sub>5</sub></button>
//         </div></div>
//         <div style={eb.row}><span style={eb.label}>Var</span><div style={eb.btnGroup}>{variables.map(v => <button key={v} style={{ ...eb.btn, ...eb.btnVar }} onClick={() => insertAtCursor(v)}>{v}</button>)}</div></div>
//         <div style={eb.row}><span style={eb.label}>Num</span><div style={eb.btnGroup}>{numbers.map(n => <button key={n} style={{ ...eb.btn, ...eb.btnNum }} onClick={() => insertAtCursor(n)}>{n}</button>)}</div></div>
//         <div style={eb.row}><span style={eb.label}>Op</span><div style={eb.btnGroup}>{operators.map(op => <button key={op} style={{ ...eb.btn, ...eb.btnOp }} onClick={() => insertAtCursor(op)}>{op === '^' ? 'x\u207F' : op}</button>)}</div></div>
//         <div style={eb.row}><span style={eb.label}></span><div style={eb.btnGroup}>
//           <button style={{ ...eb.btn, ...eb.btnSpecial }} onClick={() => insertAtCursor('e')}>e</button>
//           <button style={{ ...eb.btn, ...eb.btnBracket }} onClick={() => insertAtCursor('(')}>(</button>
//           <button style={{ ...eb.btn, ...eb.btnBracket }} onClick={() => insertAtCursor(')')}>)</button>
//         </div></div>
//         <div style={eb.actions}>
//           <button style={{ ...eb.btnAction, ...eb.btnClear }} onClick={clearAll}>Clear</button>
//           <button style={{ ...eb.btnAction, ...eb.btnUndo, ...(undoStack.length === 0 ? eb.btnOff : {}) }} onClick={undo} disabled={undoStack.length === 0} title="Undo (Ctrl+Z)">{'\u21B6'}</button>
//           <button style={{ ...eb.btnAction, ...eb.btnBack }} onClick={backspace}>{'\u232B'}</button>
//           <button style={{ ...eb.btnAction, ...eb.btnSolve, ...(expression.length === 0 ? eb.btnOff : {}) }} onClick={onSolve} disabled={expression.length === 0}>Solve</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// const eb = {
//   container: { background: '#fff', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' },
//   display: { background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', borderRadius: '12px', padding: '15px 19px', minHeight: '54px', marginBottom: '16px', display: 'flex', alignItems: 'center', fontSize: '1.4rem', color: '#fff', fontWeight: '500', cursor: 'text' },
//   placeholder: { color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', fontSize: '0.95rem' },
//   term: { display: 'inline-flex', alignItems: 'baseline' },
//   sup: { fontSize: '0.6em', color: '#bfdbfe', marginLeft: '1px' },
//   sub: { fontSize: '0.65em', color: '#bfdbfe', marginLeft: '1px' },
//   op: { color: 'rgba(255,255,255,0.75)', margin: '0 2px' },
//   equals: { color: '#fbbf24', fontWeight: '700', margin: '0 4px' },
//   euler: { fontStyle: 'italic', color: '#a5f3fc' },
//   log: { color: '#fde68a', fontWeight: '600' },
//   logExpr: { display: 'inline-flex', alignItems: 'baseline' },
//   errorBox: { background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '10px 14px', marginBottom: '12px', color: '#dc2626', fontSize: '0.85rem' },
//   builder: { display: 'flex', flexDirection: 'column', gap: '10px' },
//   row: { display: 'flex', alignItems: 'center', gap: '10px' },
//   label: { fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#94a3b8', width: '28px', flexShrink: 0, fontWeight: '600' },
//   btnGroup: { display: 'flex', flexWrap: 'wrap', gap: '6px' },
//   btn: { fontSize: '0.95rem', padding: '8px 12px', border: '1px solid #e2e8f0', background: '#f8fafc', color: '#334155', cursor: 'pointer', borderRadius: '8px', minWidth: '36px', fontFamily: 'inherit', fontWeight: '500', transition: 'all 0.15s' },
//   btnVar: { fontStyle: 'italic', color: '#3b82f6', fontWeight: '600' },
//   btnNum: { color: '#1e293b' },
//   btnOp: { color: '#64748b', fontWeight: '600' },
//   btnLog: { color: '#3b82f6', fontWeight: '600', minWidth: '44px' },
//   btnSpecial: { color: '#0891b2', fontWeight: '600', fontStyle: 'italic' },
//   btnBracket: { fontSize: '1.1rem', color: '#64748b' },
//   actions: { display: 'flex', gap: '8px', marginTop: '6px', paddingTop: '14px', borderTop: '1px solid #e2e8f0' },
//   btnAction: { fontSize: '0.85rem', fontWeight: '600', padding: '12px 18px', border: 'none', cursor: 'pointer', borderRadius: '8px', fontFamily: 'inherit', transition: 'all 0.15s' },
//   btnClear: { background: '#f1f5f9', color: '#64748b' },
//   btnUndo: { background: '#f1f5f9', color: '#64748b', fontSize: '1.1rem', padding: '12px 14px' },
//   btnBack: { background: '#f1f5f9', color: '#64748b', fontSize: '1.1rem' },
//   btnSolve: { background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', color: '#fff', marginLeft: 'auto', padding: '12px 24px', boxShadow: '0 2px 8px rgba(59,130,246,0.3)' },
//   btnOff: { opacity: 0.4, cursor: 'not-allowed', background: '#cbd5e1', boxShadow: 'none' },
// };


// /* =====================================================
//    EQUATION FORM GENERATORS
//    ===================================================== */

// const equationForms = [
//   { id: 'simple', name: 'Simple', formula: <span>log<sub>b</sub>(x) = c</span>, generate: (nice) => { const bs = [2,3,5,10], b = bs[Math.floor(Math.random()*bs.length)]; return nice ? `log_${b}(x)=${Math.floor(Math.random()*4)+1}` : `log_${b}(x)=${Math.floor(Math.random()*8)+1}`; } },
//   { id: 'natural', name: 'Natural Log', formula: <span>ln(x) = c</span>, generate: (nice) => nice ? `ln(x)=${[1,2,3,4,5][Math.floor(Math.random()*5)]}` : `ln(x)=${(Math.random()*5+0.5).toFixed(2)}` },
//   { id: 'coefficient', name: 'With Coefficient', formula: <span>a &middot; log<sub>b</sub>(x) = c</span>, generate: (nice) => { const bs=[2,3,10], b=bs[Math.floor(Math.random()*bs.length)], c=Math.floor(Math.random()*4)+2; return nice ? `${c}\u00D7log_${b}(x)=${c*(Math.floor(Math.random()*3)+1)}` : `${c}\u00D7log_${b}(x)=${Math.floor(Math.random()*12)+2}`; } },
//   { id: 'linear-arg', name: 'Linear Argument', formula: <span>log<sub>b</sub>(mx + n) = c</span>, generate: (nice) => { const bs=[2,3,10], b=bs[Math.floor(Math.random()*bs.length)], m=Math.floor(Math.random()*3)+1, n=Math.floor(Math.random()*10)-5; const ns=n>=0?`+${n}`:`${n}`, ms=m===1?'x':`${m}\u00D7x`; return nice ? `log_${b}(${ms}${ns})=${Math.floor(Math.random()*3)+1}` : `log_${b}(${ms}${ns})=${Math.floor(Math.random()*5)+1}`; } },
//   { id: 'with-constant', name: 'With Constant', formula: <span>log<sub>b</sub>(x) + c = d</span>, generate: (nice) => { const bs=[2,3,10], b=bs[Math.floor(Math.random()*bs.length)], c=Math.floor(Math.random()*5)+1; return nice ? `log_${b}(x)+${c}=${(Math.floor(Math.random()*3)+1)+c}` : `log_${b}(x)+${c}=${Math.floor(Math.random()*8)+c}`; } },
//   { id: 'natural-linear', name: 'Natural Linear', formula: <span>ln(mx + n) = c</span>, generate: (nice) => { const m=Math.floor(Math.random()*3)+1, n=Math.floor(Math.random()*10)-3; const ns=n>=0?`+${n}`:`${n}`, ms=m===1?'x':`${m}\u00D7x`; return nice ? `ln(${ms}${ns})=${[1,2,3][Math.floor(Math.random()*3)]}` : `ln(${ms}${ns})=${(Math.random()*4+0.5).toFixed(2)}`; } },
//   { id: 'same-base', name: 'Same Base Both Sides', formula: <span>log<sub>b</sub>(f(x)) = log<sub>b</sub>(c)</span>, generate: () => { const bs=[2,3,10], b=bs[Math.floor(Math.random()*bs.length)], m=Math.floor(Math.random()*3)+1, n=Math.floor(Math.random()*10)-5, c=Math.floor(Math.random()*50)+10; const ns=n>=0?`+${n}`:`${n}`, ms=m===1?'x':`${m}\u00D7x`; return `log_${b}(${ms}${ns})=log_${b}(${c})`; } },
//   { id: 'base-e-coeff', name: 'Natural with Coefficient', formula: <span>a &middot; ln(x) = c</span>, generate: (nice) => { const c=Math.floor(Math.random()*4)+2; return nice ? `${c}\u00D7ln(x)=${[2,4,6,8][Math.floor(Math.random()*4)]}` : `${c}\u00D7ln(x)=${(Math.random()*10+1).toFixed(2)}`; } },
// ];


// /* =====================================================
//    MAIN COMPONENT — parent owns all state
//    ===================================================== */

// const LogarithmicEquationSolver = () => {
//   const [expression, setExpression] = useState([]);
//   const [cursorPos, setCursorPos] = useState(0);
//   const [steps, setSteps] = useState([]);
//   const [solution, setSolution] = useState(null);
//   const [error, setError] = useState(null);
//   const [selectedForm, setSelectedForm] = useState(null);
//   const [examplesOpen, setExamplesOpen] = useState(false);

//   const resetResults = () => { setSteps([]); setSolution(null); setError(null); };

//   const handleExprChange = (newExpr) => { setExpression(newExpr); resetResults(); };
//   const handleCursorChange = (pos) => setCursorPos(pos);

//   const handleSolve = () => {
//     try {
//       const result = solveLogarithmicEquation(expression.join(''));
//       setSteps(result.steps);
//       setSolution(result.solution);
//       setError(null);
//     } catch (e) {
//       setError(e.message);
//       setSteps([]);
//       setSolution(null);
//     }
//   };

//   const handleFormClick = (form) => {
//     const eq = form.generate(Math.random() < 0.8);
//     setSelectedForm(form.id);
//     const chars = eq.split('');
//     setExpression(chars);
//     setCursorPos(chars.length);
//     resetResults();
//   };

//   const handleRandomClick = () => handleFormClick(equationForms[Math.floor(Math.random() * equationForms.length)]);

//   /* static config for SolutionPanel */
//   const renderStepMath = (step) => {
//     if (!step.before && !step.after) return null;
//     return (
//       <div>
//         {step.before && <div style={s.stepMathBox}><MathRenderer node={step.before} fontSize="1.05rem" /></div>}
//         {step.after && <div style={s.stepTransform}><span style={s.arrow}>{'\u27F9'}</span><div style={s.stepMathBox}><MathRenderer node={step.after} fontSize="1.05rem" /></div></div>}
//       </div>
//     );
//   };

//   return (
//     <div style={s.container}>
//       <style>{GLOBAL_STYLES}</style>
//       <div style={s.inner}>
//         <header style={s.header}>
//           <div style={s.iconWrap}><span style={s.icon}>log</span></div>
//           <h1 style={s.title}>Logarithmic Equation Solver</h1>
//           <p style={s.subtitle}>Solve equations with logarithms step by step</p>
//         </header>

//         <div className="eq-main-layout" style={s.main}>
//           <div style={s.leftCol}>
//             <ExpressionBuilder
//               expression={expression}
//               cursorPos={cursorPos}
//               onExprChange={handleExprChange}
//               onCursorChange={handleCursorChange}
//               onSolve={handleSolve}
//               error={error}
//             />

//             {solution && (
//               <div style={s.result}>
//                 <div style={s.resultLabel}>Answer</div>
//                 <div style={s.resultValue}>
//                   <span style={s.resultVar}>{solution.variable}</span>
//                   <span style={s.resultEq}> = </span>
//                   <span style={s.resultNum}>{formatNumber(solution.value)}</span>
//                 </div>
//                 <div style={s.resultNote}>{solution.exact ? '\u2713 Exact solution' : '\u2248 Approximate value'}</div>
//               </div>
//             )}

//             <div style={s.examplesPanel}>
//               <button style={s.examplesToggle} onClick={() => setExamplesOpen(!examplesOpen)}>
//                 <span style={s.examplesToggleText}>Try an Example</span>
//                 <span style={{ ...s.examplesChevron, transform: examplesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>{'\u25BC'}</span>
//               </button>
//               {examplesOpen && (
//                 <div style={s.examplesBody}>
//                   <div style={s.examplesTopRow}>
//                     <p style={s.formsHint}>Click any type to generate a random equation.</p>
//                     <button style={s.randomBtn} onClick={handleRandomClick}>{'\uD83C\uDFB2'} Random</button>
//                   </div>
//                   <div style={s.formsGrid}>
//                     {equationForms.map(form => (
//                       <button key={form.id} style={{ ...s.formCard, ...(selectedForm === form.id ? s.formCardSelected : {}) }} onClick={() => handleFormClick(form)}>
//                         <div style={s.formName}>{form.name}</div>
//                         <div style={s.formFormula}>{form.formula}</div>
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           <div style={s.rightCol}>
//             <SolutionPanel
//               /* static config */
//               placeholder="Select an equation type or enter your own, then click Solve to see the step-by-step solution."
//               stepsTitle="Solution Steps"
//               renderStepContent={renderStepMath}
//               /* dynamic data */
//               steps={steps}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const s = {
//   container: { background: 'linear-gradient(180deg, #f0f7ff 0%, #e8f4fc 100%)', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', color: '#1e3a5f', padding: '30px 20px' },
//   inner: { maxWidth: '1100px', margin: '0 auto' },
//   header: { textAlign: 'center', marginBottom: '24px' },
//   iconWrap: { width: '50px', height: '50px', background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', borderRadius: '14px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', boxShadow: '0 4px 12px rgba(59,130,246,0.3)' },
//   icon: { color: '#fff', fontSize: '14px', fontWeight: '700' },
//   title: { fontSize: '1.7rem', fontWeight: '700', color: '#1e3a5f', margin: '0 0 6px 0' },
//   subtitle: { fontSize: '0.95rem', color: '#64748b', margin: 0 },
//   main: { display: 'flex', gap: '24px', alignItems: 'flex-start' },
//   leftCol: { flex: '1 1 50%', display: 'flex', flexDirection: 'column', gap: '16px' },
//   rightCol: { flex: '1 1 50%', background: '#fff', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', minHeight: '500px', maxHeight: '700px', overflowY: 'auto' },
//   result: { padding: '16px 20px', background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', borderRadius: '12px', textAlign: 'center', color: '#fff' },
//   resultLabel: { fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.8, marginBottom: '6px', fontWeight: '600' },
//   resultValue: { fontSize: '1.5rem', fontWeight: '700' },
//   resultVar: { fontStyle: 'italic' },
//   resultEq: { opacity: 0.8, margin: '0 6px' },
//   resultNum: { color: '#fbbf24' },
//   resultNote: { fontSize: '0.8rem', opacity: 0.75, marginTop: '6px' },
//   examplesPanel: { background: '#fff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', overflow: 'hidden' },
//   examplesToggle: { width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', border: 'none', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit' },
//   examplesToggleText: { fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#64748b', fontWeight: '600' },
//   examplesChevron: { fontSize: '0.6rem', color: '#94a3b8', transition: 'transform 0.2s ease' },
//   examplesBody: { padding: '0 16px 16px' },
//   examplesTopRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' },
//   formsGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' },
//   formsHint: { fontSize: '0.8rem', color: '#94a3b8', margin: 0, fontStyle: 'italic' },
//   randomBtn: { fontSize: '0.78rem', fontWeight: '600', padding: '6px 14px', border: '1px solid #3b82f6', background: '#eff6ff', color: '#3b82f6', cursor: 'pointer', borderRadius: '8px', fontFamily: 'inherit', transition: 'all 0.15s', whiteSpace: 'nowrap' },
//   formCard: { background: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '10px', padding: '10px 12px', cursor: 'pointer', transition: 'all 0.2s ease', textAlign: 'left', fontFamily: 'inherit' },
//   formCardSelected: { borderColor: '#3b82f6', background: '#eff6ff', boxShadow: '0 2px 8px rgba(59,130,246,0.15)' },
//   formName: { fontSize: '0.8rem', fontWeight: '600', color: '#1e3a5f', marginBottom: '2px' },
//   formFormula: { fontSize: '0.9rem', color: '#3b82f6', fontFamily: 'ui-monospace, monospace' },
//   stepMathBox: { fontSize: '1.05rem', color: '#1e3a5f', background: '#fff', padding: '10px 14px', borderRadius: '8px', display: 'inline-block', border: '1px solid #e2e8f0' },
//   stepTransform: { display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px' },
//   arrow: { color: '#3b82f6', fontSize: '1.1rem' },
// };

// export default LogarithmicEquationSolver;


import React, { useState, useEffect, useCallback, forwardRef, useImperativeHandle, useRef } from 'react';

/* =====================================================
   LOGARITHMIC EQUATION SOLVER v3b

   Changes from v3:
   - Movable cursor: tracked via cursorPos state
   - Click any character in display to place cursor there
   - Left/Right arrow keys move cursor
   - Home/End jump to start/end
   - Insert at cursor position (not just append)
   - Backspace deletes char before cursor
   - Delete key deletes char after cursor

   Two exports:
   - LogarithmicSolverEngine: Standalone solver component
   - LogarithmicSolverWithExamples: Full educational wrapper (default)
   ===================================================== */


/* =====================================================
   GLOBAL STYLES (cursor animation, responsive)
   ===================================================== */

const GLOBAL_STYLES = `
  @keyframes blink-cursor {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .eq-cursor {
    display: inline-block;
    width: 2px;
    height: 1.2em;
    background: rgba(255,255,255,0.85);
    margin: 0 1px;
    vertical-align: middle;
    animation: blink-cursor 1s step-end infinite;
    flex-shrink: 0;
  }
  .eq-display {
    flex-wrap: wrap;
    word-break: break-all;
  }
  .eq-char-span {
    cursor: text;
    position: relative;
  }
  @media (max-width: 768px) {
    .eq-main-layout {
      flex-direction: column !important;
    }
    .eq-main-layout > div {
      flex: 1 1 100% !important;
      max-height: none !important;
    }
  }
`;


/* =====================================================
   MATH RENDERER (inlined from shared MathRenderer)
   ===================================================== */

const MATH_STYLES = `
  .mr {
    display: inline-flex;
    align-items: center;
    font-family: 'Cambria Math', 'STIX Two Math', 'Latin Modern Math', 'Times New Roman', serif;
    vertical-align: middle;
  }
  .mr-frac {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    vertical-align: middle;
    padding: 0 3px;
  }
  .mr-frac-num {
    border-bottom: 1.5px solid currentColor;
    padding: 1px 6px 3px;
    line-height: 1.2;
  }
  .mr-frac-den {
    padding: 3px 6px 1px;
    line-height: 1.2;
  }
  .mr-sup {
    font-size: 0.65em;
    vertical-align: super;
    line-height: 1;
    margin-left: 1px;
  }
  .mr-sub {
    font-size: 0.65em;
    vertical-align: sub;
    line-height: 1;
    margin-left: 1px;
  }
  .mr-radical {
    display: inline-flex;
    align-items: stretch;
    vertical-align: middle;
  }
  .mr-radical-symbol {
    font-size: 1.15em;
    line-height: 1;
    margin-right: -1px;
    display: flex;
    align-items: flex-end;
  }
  .mr-radical-body {
    border-top: 1.5px solid currentColor;
    padding: 2px 4px 0;
    display: inline-flex;
    align-items: center;
  }
  .mr-paren {
    font-weight: 300;
    font-size: 1.1em;
  }
  .mr-paren-tall {
    font-size: 1.3em;
  }
  .mr-op {
    margin: 0 4px;
  }
  .mr-var {
    font-style: italic;
  }
  .mr-log {
    font-style: normal;
    margin-right: 2px;
  }
  .mr-abs {
    font-weight: 300;
    font-size: 1.1em;
  }
`;

function renderNode(node, parentType = null) {
  if (!node) return null;

  switch (node.type) {
    case 'NUMBER':
      return <span>{formatNumber(node.value)}</span>;
    case 'VARIABLE':
      return <span className="mr-var">{node.name}</span>;
    case 'E':
      return <span className="mr-var">e</span>;
    case 'NEGATE': {
      const inner = renderNode(node.operand, 'NEGATE');
      const needsParens = node.operand.type === 'ADD' || node.operand.type === 'SUBTRACT';
      return <span>{'\u2212'}{needsParens && <span className="mr-paren">(</span>}{inner}{needsParens && <span className="mr-paren">)</span>}</span>;
    }
    case 'ADD':
      return (
        <span>
          {renderNode(node.left, 'ADD')}
          <span className="mr-op">+</span>
          {renderNode(node.right, 'ADD')}
        </span>
      );
    case 'SUBTRACT':
      return (
        <span>
          {renderNode(node.left, 'SUBTRACT')}
          <span className="mr-op">{'\u2212'}</span>
          {renderNode(node.right, 'SUBTRACT')}
        </span>
      );
    case 'MULTIPLY': {
      const left = node.left;
      const right = node.right;
      const useJuxt = (left.type === 'NUMBER' && (right.type === 'VARIABLE' || right.type === 'POWER' || right.type === 'SQRT' || right.type === 'LOG' || right.type === 'LN'))
        || (left.type === 'VARIABLE' && right.type === 'VARIABLE');
      const wrapL = (left.type === 'ADD' || left.type === 'SUBTRACT')
        ? <span><span className="mr-paren">(</span>{renderNode(left, 'MULTIPLY')}<span className="mr-paren">)</span></span>
        : renderNode(left, 'MULTIPLY');
      const wrapR = (right.type === 'ADD' || right.type === 'SUBTRACT')
        ? <span><span className="mr-paren">(</span>{renderNode(right, 'MULTIPLY')}<span className="mr-paren">)</span></span>
        : renderNode(right, 'MULTIPLY');
      if (useJuxt) return <span>{wrapL}{wrapR}</span>;
      return <span>{wrapL}<span className="mr-op">{'\u00B7'}</span>{wrapR}</span>;
    }
    case 'DIVIDE':
      return (
        <span className="mr-frac">
          <span className="mr-frac-num">{renderNode(node.left, 'FRAC')}</span>
          <span className="mr-frac-den">{renderNode(node.right, 'FRAC')}</span>
        </span>
      );
    case 'POWER': {
      const base = node.base;
      const needsBaseParens = base.type === 'ADD' || base.type === 'SUBTRACT'
        || base.type === 'MULTIPLY' || base.type === 'NEGATE'
        || (base.type === 'NUMBER' && base.value < 0);
      const baseR = needsBaseParens
        ? <span><span className="mr-paren">(</span>{renderNode(base, 'POWER')}<span className="mr-paren">)</span></span>
        : renderNode(base, 'POWER');
      return <span>{baseR}<span className="mr-sup">{renderNode(node.exponent, 'SUP')}</span></span>;
    }
    case 'SQRT':
      return (
        <span className="mr-radical">
          <span className="mr-radical-symbol">{'\u221A'}</span>
          <span className="mr-radical-body">{renderNode(node.operand, 'SQRT')}</span>
        </span>
      );
    case 'LOG': {
      const isNat = node.base && node.base.type === 'E';
      const logName = isNat ? 'ln' : 'log';
      const showBase = !isNat && node.base && !(node.base.type === 'NUMBER' && node.base.value === 10);
      return (
        <span>
          <span className="mr-log">{logName}</span>
          {showBase && <span className="mr-sub">{renderNode(node.base, 'SUB')}</span>}
          <span className="mr-paren">(</span>
          {renderNode(node.argument, 'LOG')}
          <span className="mr-paren">)</span>
        </span>
      );
    }
    case 'LN':
      return (
        <span>
          <span className="mr-log">ln</span>
          <span className="mr-paren">(</span>
          {renderNode(node.argument, 'LN')}
          <span className="mr-paren">)</span>
        </span>
      );
    case 'ABS':
      return <span><span className="mr-abs">|</span>{renderNode(node.operand, 'ABS')}<span className="mr-abs">|</span></span>;
    case 'EQUATION':
      return (
        <span>
          {renderNode(node.left, 'EQUATION')}
          <span className="mr-op">=</span>
          {renderNode(node.right, 'EQUATION')}
        </span>
      );
    default:
      return null;
  }
}

function MathRenderer({ node, fontSize, className = '' }) {
  if (!node) return null;
  return (
    <span className={`mr ${className}`} style={fontSize ? { fontSize } : undefined}>
      <style>{MATH_STYLES}</style>
      {renderNode(node)}
    </span>
  );
}


/* =====================================================
   SOLUTION PANEL (inlined from shared SolutionPanel)
   ===================================================== */

const SP_STYLES = `
  .sp-tab-bar {
    display: flex;
    gap: 2px;
    background: #e2e8f0;
    border-radius: 8px;
    padding: 3px;
    margin-bottom: 16px;
  }
  .sp-tab-btn {
    flex: 1;
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    font-family: inherit;
    font-size: 0.82rem;
    font-weight: 500;
    cursor: pointer;
    background: transparent;
    color: #64748b;
    transition: all 0.15s;
    text-align: center;
  }
  .sp-tab-btn.active {
    background: #fff;
    color: #1e3a5f;
    box-shadow: 0 1px 3px rgba(0,0,0,0.06);
  }
  .sp-tab-btn:not(.active):hover {
    color: #334155;
  }
  .sp-steps-title {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 1.8px;
    color: #94a3b8;
    margin-bottom: 14px;
    font-weight: 600;
  }
  .sp-step-card {
    background: #f8fafc;
    border: none;
    border-left: 3px solid #3b82f6;
    border-radius: 0 8px 8px 0;
    padding: 16px 18px;
    margin-bottom: 10px;
  }
  .sp-step-header {
    margin-bottom: 6px;
  }
  .sp-step-number {
    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #3b82f6;
    font-weight: 600;
  }
  .sp-step-rule {
    font-weight: 600;
    font-size: 0.95rem;
    color: #1e3a5f;
    margin-bottom: 2px;
  }
  .sp-step-description {
    font-size: 0.82rem;
    color: #64748b;
    line-height: 1.4;
    margin-bottom: 4px;
  }
  .sp-step-content {
    margin-top: 8px;
  }
  .sp-graph-container {
    background: #fff;
    border-radius: 8px;
    padding: 20px;
  }
  .sp-graph-label {
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: #94a3b8;
    margin-bottom: 12px;
    font-weight: 500;
  }
  .sp-graph-legend {
    display: flex;
    gap: 16px;
    margin-top: 10px;
    font-size: 0.75rem;
    color: #64748b;
  }
  .sp-graph-legend-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 4px;
    vertical-align: middle;
  }
  .sp-placeholder {
    background: #f1f5f9;
    border: 1px dashed #cbd5e1;
    border-radius: 8px;
    padding: 40px 24px;
    text-align: center;
    font-size: 0.85rem;
    color: #94a3b8;
    font-style: italic;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sp-no-steps {
    color: #94a3b8;
    font-style: italic;
    text-align: center;
    padding: 20px;
    font-size: 0.85rem;
  }
`;

function SolutionPanel({
  steps = [],
  graphData = null,
  showGraphs = true,
  GraphComponent = null,
  graphLabel = '',
  graphLegend = [],
  stepCardClass = null,
  renderStepContent = null,
  placeholder = 'Steps will appear here once you solve',
  stepsTitle = 'Solution Steps',
}) {
  const [activeTab, setActiveTab] = useState('steps');

  const hasGraph = showGraphs && graphData && GraphComponent;
  const hasSolved = steps.length > 0;

  const prevStepsRef = useRef(steps);
  if (steps !== prevStepsRef.current && steps.length > 0) {
    prevStepsRef.current = steps;
    if (activeTab !== 'steps') setActiveTab('steps');
  }

  if (!hasSolved) {
    return (
      <div>
        <style>{SP_STYLES}</style>
        <div className="sp-placeholder">
          <p>{placeholder}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <style>{SP_STYLES}</style>

      {hasGraph && (
        <div className="sp-tab-bar">
          <button className={`sp-tab-btn${activeTab === 'steps' ? ' active' : ''}`} onClick={() => setActiveTab('steps')}>Steps</button>
          <button className={`sp-tab-btn${activeTab === 'graph' ? ' active' : ''}`} onClick={() => setActiveTab('graph')}>Graph</button>
        </div>
      )}

      {activeTab === 'steps' && (
        <div>
          {!hasGraph && <div className="sp-steps-title">{stepsTitle}</div>}
          {steps.length === 0 ? (
            <p className="sp-no-steps">Expression is already in simplest form</p>
          ) : (
            steps.map((step, index) => {
              const extraClass = stepCardClass ? stepCardClass(step) : '';
              return (
                <div key={index} className={`sp-step-card ${extraClass}`}>
                  <div className="sp-step-header">
                    <span className="sp-step-number">Step {index + 1}</span>
                  </div>
                  <div className="sp-step-rule">{step.rule}</div>
                  <p className="sp-step-description">{step.description}</p>
                  {renderStepContent && (
                    <div className="sp-step-content">
                      {renderStepContent(step, index)}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}

      {activeTab === 'graph' && hasGraph && (
        <div className="sp-graph-container">
          {graphLabel && <div className="sp-graph-label">{graphLabel}</div>}
          <GraphComponent graphData={graphData} />
          {graphLegend.length > 0 && (
            <div className="sp-graph-legend">
              {graphLegend.map((item, i) => (
                <span key={i}>
                  <span className="sp-graph-legend-dot" style={{ background: item.color }} />
                  {item.label}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}


/* =====================================================
   TOKENIZER
   ===================================================== */

const TokenType = {
  NUMBER: 'NUMBER',
  VARIABLE: 'VARIABLE',
  MULTIPLY: 'MULTIPLY',
  DIVIDE: 'DIVIDE',
  POWER: 'POWER',
  LPAREN: 'LPAREN',
  RPAREN: 'RPAREN',
  PLUS: 'PLUS',
  MINUS: 'MINUS',
  EQUALS: 'EQUALS',
  E: 'E',
  LOG: 'LOG',
  LN: 'LN',
  UNDERSCORE: 'UNDERSCORE',
};

function tokenize(input) {
  const tokens = [];
  let i = 0;

  while (i < input.length) {
    const char = input[i];

    if (/\s/.test(char)) { i++; continue; }

    if (input.slice(i, i + 2).toLowerCase() === 'ln') {
      tokens.push({ type: TokenType.LN });
      i += 2;
      continue;
    }

    if (input.slice(i, i + 3).toLowerCase() === 'log') {
      tokens.push({ type: TokenType.LOG });
      i += 3;
      continue;
    }

    if (/[0-9]/.test(char) || (char === '.' && /[0-9]/.test(input[i + 1]))) {
      let num = '';
      while (i < input.length && (/[0-9]/.test(input[i]) || input[i] === '.')) {
        num += input[i];
        i++;
      }
      tokens.push({ type: TokenType.NUMBER, value: parseFloat(num) });
      continue;
    }

    if (char === 'e' && (i + 1 >= input.length || !/[a-zA-Z]/.test(input[i + 1]))) {
      tokens.push({ type: TokenType.E });
      i++;
      continue;
    }

    if (/[a-zA-Z]/.test(char)) {
      tokens.push({ type: TokenType.VARIABLE, value: char.toLowerCase() });
      i++;
      continue;
    }

    const charMap = {
      '\u00D7': TokenType.MULTIPLY, '*': TokenType.MULTIPLY, '\u00B7': TokenType.MULTIPLY,
      '\u00F7': TokenType.DIVIDE, '/': TokenType.DIVIDE,
      '^': TokenType.POWER,
      '(': TokenType.LPAREN, ')': TokenType.RPAREN,
      '+': TokenType.PLUS, '-': TokenType.MINUS,
      '=': TokenType.EQUALS, '_': TokenType.UNDERSCORE,
    };

    if (charMap[char]) {
      tokens.push({ type: charMap[char] });
      i++;
      continue;
    }

    i++;
  }

  return tokens;
}


/* =====================================================
   PARSER
   ===================================================== */

function parse(tokens) {
  let pos = 0;

  const peek = () => tokens[pos];
  const consume = (expectedType) => {
    const token = tokens[pos];
    if (expectedType && token?.type !== expectedType) {
      throw new Error(`Expected ${expectedType} but got ${token?.type}`);
    }
    pos++;
    return token;
  };

  const parseEquation = () => {
    const left = parseExpression();
    if (peek()?.type === TokenType.EQUALS) {
      consume();
      return { type: 'EQUATION', left, right: parseExpression() };
    }
    return left;
  };

  const parseExpression = () => parseAdditive();

  const parseAdditive = () => {
    let left = parseMultiplicative();
    while (peek()?.type === TokenType.PLUS || peek()?.type === TokenType.MINUS) {
      const op = consume().type;
      left = { type: op === TokenType.PLUS ? 'ADD' : 'SUBTRACT', left, right: parseMultiplicative() };
    }
    return left;
  };

  const parseMultiplicative = () => {
    let left = parsePower();
    while (peek()?.type === TokenType.MULTIPLY || peek()?.type === TokenType.DIVIDE) {
      const op = consume().type;
      left = { type: op === TokenType.MULTIPLY ? 'MULTIPLY' : 'DIVIDE', left, right: parsePower() };
    }
    return left;
  };

  const parsePower = () => {
    let base = parseUnary();
    if (peek()?.type === TokenType.POWER) {
      consume();
      return { type: 'POWER', base, exponent: parsePower() };
    }
    return base;
  };

  const parseUnary = () => {
    if (peek()?.type === TokenType.MINUS) {
      consume();
      return { type: 'NEGATE', operand: parseUnary() };
    }
    return parsePrimary();
  };

  const parsePrimary = () => {
    const token = peek();

    if (token?.type === TokenType.NUMBER) {
      consume();
      return { type: 'NUMBER', value: token.value };
    }

    if (token?.type === TokenType.VARIABLE) {
      consume();
      return { type: 'VARIABLE', name: token.value };
    }

    if (token?.type === TokenType.E) {
      consume();
      return { type: 'E' };
    }

    if (token?.type === TokenType.LN) {
      consume();
      consume(TokenType.LPAREN);
      const argument = parseExpression();
      consume(TokenType.RPAREN);
      return { type: 'LOG', base: { type: 'E' }, argument };
    }

    if (token?.type === TokenType.LOG) {
      consume();
      let base = { type: 'NUMBER', value: 10 };

      if (peek()?.type === TokenType.UNDERSCORE) {
        consume();
        if (peek()?.type === TokenType.NUMBER) {
          base = { type: 'NUMBER', value: consume().value };
        } else if (peek()?.type === TokenType.VARIABLE) {
          base = { type: 'VARIABLE', name: consume().value };
        } else if (peek()?.type === TokenType.E) {
          consume();
          base = { type: 'E' };
        } else if (peek()?.type === TokenType.LPAREN) {
          consume();
          base = parseExpression();
          consume(TokenType.RPAREN);
        }
      }

      consume(TokenType.LPAREN);
      const argument = parseExpression();
      consume(TokenType.RPAREN);
      return { type: 'LOG', base, argument };
    }

    if (token?.type === TokenType.LPAREN) {
      consume();
      const expr = parseExpression();
      consume(TokenType.RPAREN);
      return expr;
    }

    throw new Error(`Unexpected token: ${token?.type}`);
  };

  const ast = parseEquation();
  if (pos < tokens.length) {
    throw new Error('Unexpected tokens at end');
  }
  return ast;
}


/* =====================================================
   HELPERS
   ===================================================== */

function formatNumber(num) {
  if (Number.isInteger(num)) return String(num);
  const rounded = Math.round(num * 1000000) / 1000000;
  return rounded.toFixed(6).replace(/\.?0+$/, '');
}

function containsVariable(node) {
  if (!node) return false;
  if (node.type === 'VARIABLE') return true;
  if (node.type === 'NUMBER' || node.type === 'E') return false;
  if (node.type === 'NEGATE') return containsVariable(node.operand);
  if (node.type === 'POWER') return containsVariable(node.base) || containsVariable(node.exponent);
  if (node.type === 'LOG') return containsVariable(node.base) || containsVariable(node.argument);
  return containsVariable(node.left) || containsVariable(node.right);
}

function containsLog(node) {
  if (!node) return false;
  if (node.type === 'LOG') return true;
  if (node.type === 'NEGATE') return containsLog(node.operand);
  if (node.type === 'POWER') return containsLog(node.base) || containsLog(node.exponent);
  if (['ADD', 'SUBTRACT', 'MULTIPLY', 'DIVIDE'].includes(node.type)) {
    return containsLog(node.left) || containsLog(node.right);
  }
  return false;
}

function evaluateConstant(node) {
  if (!node) return null;
  switch (node.type) {
    case 'NUMBER': return node.value;
    case 'E': return Math.E;
    case 'NEGATE': { const v = evaluateConstant(node.operand); return v !== null ? -v : null; }
    case 'ADD': { const l = evaluateConstant(node.left); const r = evaluateConstant(node.right); return (l !== null && r !== null) ? l + r : null; }
    case 'SUBTRACT': { const l = evaluateConstant(node.left); const r = evaluateConstant(node.right); return (l !== null && r !== null) ? l - r : null; }
    case 'MULTIPLY': { const l = evaluateConstant(node.left); const r = evaluateConstant(node.right); return (l !== null && r !== null) ? l * r : null; }
    case 'DIVIDE': { const l = evaluateConstant(node.left); const r = evaluateConstant(node.right); return (l !== null && r !== null && r !== 0) ? l / r : null; }
    case 'POWER': { const b = evaluateConstant(node.base); const e = evaluateConstant(node.exponent); return (b !== null && e !== null) ? Math.pow(b, e) : null; }
    case 'LOG': {
      const b = evaluateConstant(node.base);
      const a = evaluateConstant(node.argument);
      if (b !== null && a !== null && b > 0 && b !== 1 && a > 0) return Math.log(a) / Math.log(b);
      return null;
    }
    default: return null;
  }
}

function getBaseValue(node) {
  if (node.type === 'E') return Math.E;
  if (node.type === 'NUMBER') return node.value;
  return evaluateConstant(node);
}

function basesEqual(base1, base2) {
  if (base1.type === 'E' && base2.type === 'E') return true;
  const v1 = getBaseValue(base1);
  const v2 = getBaseValue(base2);
  if (v1 !== null && v2 !== null) return Math.abs(v1 - v2) < 1e-10;
  return false;
}

function isNaturalBase(node) {
  return node.type === 'E';
}

function parseLinearArgument(node) {
  if (node.type === 'VARIABLE') return { variable: node.name, coefficient: 1, constant: 0 };

  if (node.type === 'MULTIPLY') {
    const leftVal = evaluateConstant(node.left);
    const rightVal = evaluateConstant(node.right);
    if (leftVal !== null && node.right.type === 'VARIABLE') return { variable: node.right.name, coefficient: leftVal, constant: 0 };
    if (rightVal !== null && node.left.type === 'VARIABLE') return { variable: node.left.name, coefficient: rightVal, constant: 0 };
  }

  if (node.type === 'ADD' || node.type === 'SUBTRACT') {
    const leftLinear = parseLinearArgument(node.left);
    const rightConst = evaluateConstant(node.right);
    if (leftLinear && rightConst !== null) {
      return { variable: leftLinear.variable, coefficient: leftLinear.coefficient, constant: leftLinear.constant + (node.type === 'ADD' ? rightConst : -rightConst) };
    }
    const rightLinear = parseLinearArgument(node.right);
    const leftConst = evaluateConstant(node.left);
    if (rightLinear && leftConst !== null && node.type === 'ADD') {
      return { variable: rightLinear.variable, coefficient: rightLinear.coefficient, constant: rightLinear.constant + leftConst };
    }
  }

  return null;
}

function extractLogCoefficient(node) {
  if (node.type !== 'MULTIPLY') return { coefficient: null, log: null };
  if (node.left.type === 'LOG' && !containsVariable(node.right)) return { coefficient: evaluateConstant(node.right), log: node.left };
  if (node.right.type === 'LOG' && !containsVariable(node.left)) return { coefficient: evaluateConstant(node.left), log: node.right };
  return { coefficient: null, log: null };
}

function extractLogAdditive(node) {
  if (node.type !== 'ADD' && node.type !== 'SUBTRACT') return { log: null, constant: null, isAdd: false };
  const isAdd = node.type === 'ADD';
  if (node.left.type === 'LOG' && containsVariable(node.left) && !containsVariable(node.right)) return { log: node.left, constant: evaluateConstant(node.right), isAdd };
  if (node.right.type === 'LOG' && containsVariable(node.right) && !containsVariable(node.left) && isAdd) return { log: node.right, constant: evaluateConstant(node.left), isAdd };
  return { log: null, constant: null, isAdd: false };
}


/* =====================================================
   SOLVER
   ===================================================== */

function solveLogarithmicEquation(ast) {
  const steps = [];

  if (ast.type !== 'EQUATION') throw new Error('Input must be an equation (use = sign)');

  let { left, right } = ast;

  const leftHasLogVar = containsLog(left) && containsVariable(left);
  const rightHasLogVar = containsLog(right) && containsVariable(right);
  const leftHasVar = containsVariable(left);
  const rightHasVar = containsVariable(right);

  if (leftHasLogVar && rightHasLogVar) {
    if (left.type === 'LOG' && right.type === 'LOG' && basesEqual(left.base, right.base)) {
      steps.push({ rule: 'Equal Logarithms Property', description: 'If log_b(A) = log_b(B), then A = B (same base logs are equal when arguments are equal).', before: ast, after: { type: 'EQUATION', left: left.argument, right: right.argument } });
      const argLeft = left.argument;
      const argRight = right.argument;
      const leftVal = evaluateConstant(argLeft);
      const rightVal = evaluateConstant(argRight);
      if (leftVal !== null && containsVariable(argRight)) return solveLinearEquation(argRight, argLeft, steps);
      else if (rightVal !== null && containsVariable(argLeft)) return solveLinearEquation(argLeft, argRight, steps);
      else return solveLinearEquation(argLeft, argRight, steps);
    }
    throw new Error('Equations with different log bases on both sides require change of base. Coming soon!');
  }

  let logSide, constSide;
  if (leftHasLogVar && !rightHasLogVar) { logSide = left; constSide = right; }
  else if (rightHasLogVar && !leftHasLogVar) {
    logSide = right; constSide = left;
    steps.push({ rule: 'Rearrange Equation', description: 'Move the logarithmic term to the left side for clarity.', before: ast, after: { type: 'EQUATION', left: logSide, right: constSide } });
  } else if (!leftHasLogVar && !rightHasLogVar && (leftHasVar || rightHasVar)) { throw new Error('No logarithm found in equation'); }
  else { throw new Error('Could not determine equation structure'); }

  const constValue = evaluateConstant(constSide);
  if (constValue !== null && constSide.type !== 'NUMBER') {
    const newConstSide = { type: 'NUMBER', value: constValue };
    steps.push({ rule: 'Evaluate Constant', description: 'Simplify the right side to a single number.', before: { type: 'EQUATION', left: logSide, right: constSide }, after: { type: 'EQUATION', left: logSide, right: newConstSide } });
    constSide = newConstSide;
  }

  if (logSide.type === 'MULTIPLY') {
    const { coefficient, log } = extractLogCoefficient(logSide);
    if (coefficient !== null && log !== null) {
      const constVal = evaluateConstant(constSide);
      if (constVal !== null) {
        const newConst = { type: 'NUMBER', value: constVal / coefficient };
        steps.push({ rule: 'Isolate Logarithm', description: `Divide both sides by ${formatNumber(coefficient)} to isolate the logarithm.`, before: { type: 'EQUATION', left: logSide, right: constSide }, after: { type: 'EQUATION', left: log, right: newConst } });
        logSide = log; constSide = newConst;
      }
    }
  }

  if (logSide.type === 'ADD' || logSide.type === 'SUBTRACT') {
    const { log, constant, isAdd } = extractLogAdditive(logSide);
    if (log !== null && constant !== null) {
      const constVal = evaluateConstant(constSide);
      if (constVal !== null) {
        const newConstVal = isAdd ? constVal - constant : constVal + constant;
        const newConst = { type: 'NUMBER', value: newConstVal };
        const action = isAdd ? `Subtract ${formatNumber(constant)} from` : `Add ${formatNumber(Math.abs(constant))} to`;
        steps.push({ rule: 'Isolate Logarithm', description: `${action} both sides.`, before: { type: 'EQUATION', left: logSide, right: constSide }, after: { type: 'EQUATION', left: log, right: newConst } });
        logSide = log; constSide = newConst;
      }
    }
  }

  if (logSide.type !== 'LOG') throw new Error('Could not isolate logarithm');

  const base = logSide.base;
  const argument = logSide.argument;
  const resultValue = evaluateConstant(constSide);
  if (resultValue === null) throw new Error('Right side must evaluate to a number');
  const baseValue = getBaseValue(base);
  if (baseValue === null) throw new Error('Base must be a constant');
  if (baseValue <= 0 || baseValue === 1) throw new Error('Base must be positive and not equal to 1');

  const isNatural = isNaturalBase(base);
  const exponentialValue = Math.pow(baseValue, resultValue);
  const baseDisplay = isNatural ? { type: 'E' } : base;
  const expNode = { type: 'POWER', base: baseDisplay, exponent: { type: 'NUMBER', value: resultValue } };

  steps.push({ rule: 'Convert to Exponential Form', description: isNatural ? 'If ln(A) = c, then A = e^c. This is the inverse relationship.' : `If log_${formatNumber(baseValue)}(A) = c, then A = ${formatNumber(baseValue)}^c. This is the inverse relationship.`, before: { type: 'EQUATION', left: logSide, right: constSide }, after: { type: 'EQUATION', left: argument, right: expNode } });
  steps.push({ rule: 'Evaluate Exponential', description: isNatural ? `Calculate e^${formatNumber(resultValue)} \u2248 ${formatNumber(exponentialValue)}` : `Calculate ${formatNumber(baseValue)}^${formatNumber(resultValue)} = ${formatNumber(exponentialValue)}`, before: { type: 'EQUATION', left: argument, right: expNode }, after: { type: 'EQUATION', left: argument, right: { type: 'NUMBER', value: exponentialValue } } });

  if (argument.type === 'VARIABLE') {
    if (exponentialValue <= 0) throw new Error(`No solution: logarithm argument must be positive, but we got ${formatNumber(exponentialValue)}`);
    return { steps, solution: { variable: argument.name, value: exponentialValue, exact: Number.isInteger(exponentialValue) } };
  }

  const linearInfo = parseLinearArgument(argument);
  if (linearInfo) {
    const { variable, coefficient, constant } = linearInfo;
    steps.push({ rule: 'Solve Linear Equation', description: `Now solve: ${coefficient === 1 ? '' : formatNumber(coefficient)}${variable}${constant >= 0 ? ' + ' + formatNumber(constant) : ' \u2212 ' + formatNumber(Math.abs(constant))} = ${formatNumber(exponentialValue)}`, before: null, after: null });
    const subtracted = exponentialValue - constant;
    const solution = subtracted / coefficient;
    if (exponentialValue <= 0) throw new Error('No solution: logarithm argument must be positive');
    steps.push({ rule: 'Isolate Variable', description: coefficient !== 1 ? `Subtract ${formatNumber(constant)}, then divide by ${formatNumber(coefficient)}.` : `Subtract ${formatNumber(constant)} from both sides.`, before: null, after: { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } } });
    const argValue = coefficient * solution + constant;
    if (argValue <= 0) throw new Error(`No valid solution: x = ${formatNumber(solution)} makes the logarithm argument non-positive`);
    return { steps, solution: { variable, value: solution, exact: Number.isInteger(solution) } };
  }

  throw new Error('Argument form not supported');
}

function solveLinearEquation(leftExpr, rightExpr, steps) {
  const leftLinear = parseLinearArgument(leftExpr);
  const rightLinear = parseLinearArgument(rightExpr);
  const rightConst = evaluateConstant(rightExpr);
  const leftConst = evaluateConstant(leftExpr);

  if (leftLinear && rightConst !== null) {
    const { variable, coefficient, constant } = leftLinear;
    const solution = (rightConst - constant) / coefficient;
    steps.push({ rule: 'Solve Linear Equation', description: `Solve: ${coefficient === 1 ? '' : formatNumber(coefficient)}${variable}${constant >= 0 ? ' + ' + formatNumber(constant) : ' \u2212 ' + formatNumber(Math.abs(constant))} = ${formatNumber(rightConst)}`, before: null, after: { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } } });
    return { steps, solution: { variable, value: solution, exact: Number.isInteger(solution) } };
  }

  if (rightLinear && leftConst !== null) {
    const { variable, coefficient, constant } = rightLinear;
    const solution = (leftConst - constant) / coefficient;
    steps.push({ rule: 'Solve Linear Equation', description: `Solve: ${formatNumber(leftConst)} = ${coefficient === 1 ? '' : formatNumber(coefficient)}${variable}${constant >= 0 ? ' + ' + formatNumber(constant) : ' \u2212 ' + formatNumber(Math.abs(constant))}`, before: null, after: { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } } });
    return { steps, solution: { variable, value: solution, exact: Number.isInteger(solution) } };
  }

  if (leftLinear && rightLinear && leftLinear.variable === rightLinear.variable) {
    const { variable } = leftLinear;
    const netCoeff = leftLinear.coefficient - rightLinear.coefficient;
    const netConst = rightLinear.constant - leftLinear.constant;
    if (Math.abs(netCoeff) < 1e-10) throw new Error(netConst === 0 ? 'Infinite solutions' : 'No solution');
    const solution = netConst / netCoeff;
    steps.push({ rule: 'Solve Linear Equation', description: `Combine like terms and solve for ${variable}.`, before: null, after: { type: 'EQUATION', left: { type: 'VARIABLE', name: variable }, right: { type: 'NUMBER', value: solution } } });
    return { steps, solution: { variable, value: solution, exact: Number.isInteger(solution) } };
  }

  throw new Error('Could not solve the resulting equation');
}


/* =====================================================
   ENGINE COMPONENT (Standalone Solver)
   ===================================================== */

const VALID_KEYS = new Set([
  '0','1','2','3','4','5','6','7','8','9','.',
  '+','-','*','/','^','=','(',')',
  'x','y','n','e',
  'X','Y','N','E',
]);

export const LogarithmicSolverEngine = forwardRef(({
  compact = false,
  style = {}
}, ref) => {
  const [expression, setExpression] = useState([]);
  const [cursorPos, setCursorPos] = useState(0);
  const [undoStack, setUndoStack] = useState([]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const containerRef = useRef(null);

  const variables = ['x', 'y', 'n'];
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
  const operators = ['+', '-', '\u00D7', '\u00F7', '^', '='];

  useImperativeHandle(ref, () => ({
    loadEquation: (eqString) => {
      pushUndo(expression, cursorPos);
      const chars = eqString.split('');
      setExpression(chars);
      setCursorPos(chars.length);
      setResult(null);
      setError(null);
    },
    clear: () => {
      pushUndo(expression, cursorPos);
      setExpression([]);
      setCursorPos(0);
      setResult(null);
      setError(null);
    },
    getExpression: () => expression.join(''),
    getResult: () => result
  }));

  const pushUndo = useCallback((expr, pos) => {
    setUndoStack(stack => [...stack.slice(-50), { expr, pos }]);
  }, []);

  const undo = useCallback(() => {
    if (undoStack.length === 0) return;
    const prev = undoStack[undoStack.length - 1];
    setUndoStack(stack => stack.slice(0, -1));
    setExpression(prev.expr);
    setCursorPos(prev.pos);
    setResult(null);
    setError(null);
  }, [undoStack]);

  const insertAtCursor = useCallback((items) => {
    pushUndo(expression, cursorPos);
    const arr = Array.isArray(items) ? items : [items];
    const newExpr = [...expression.slice(0, cursorPos), ...arr, ...expression.slice(cursorPos)];
    setExpression(newExpr);
    setCursorPos(cursorPos + arr.length);
    setResult(null);
    setError(null);
  }, [expression, cursorPos, pushUndo]);

  const addToExpression = (item) => {
    insertAtCursor(item);
  };

  const addLogToExpression = (base) => {
    if (base === 'e') {
      insertAtCursor(['l', 'n', '(']);
    } else if (base === '10') {
      insertAtCursor(['l', 'o', 'g', '(']);
    } else {
      insertAtCursor(['l', 'o', 'g', '_', base, '(']);
    }
  };

  const backspace = useCallback(() => {
    if (cursorPos === 0) return;
    pushUndo(expression, cursorPos);
    const newExpr = [...expression.slice(0, cursorPos - 1), ...expression.slice(cursorPos)];
    setExpression(newExpr);
    setCursorPos(cursorPos - 1);
    setResult(null);
    setError(null);
  }, [expression, cursorPos, pushUndo]);

  const deleteForward = useCallback(() => {
    if (cursorPos >= expression.length) return;
    pushUndo(expression, cursorPos);
    const newExpr = [...expression.slice(0, cursorPos), ...expression.slice(cursorPos + 1)];
    setExpression(newExpr);
    setResult(null);
    setError(null);
  }, [expression, cursorPos, pushUndo]);

  const clearAll = () => {
    if (expression.length === 0) return;
    pushUndo(expression, cursorPos);
    setExpression([]);
    setCursorPos(0);
    setResult(null);
    setError(null);
  };

  const copyExpression = useCallback(() => {
    const text = expression.join('');
    if (text && navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
  }, [expression]);

  const pasteExpression = useCallback(async () => {
    if (!navigator.clipboard) return;
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        pushUndo(expression, cursorPos);
        const chars = text.split('');
        const newExpr = [...expression.slice(0, cursorPos), ...chars, ...expression.slice(cursorPos)];
        setExpression(newExpr);
        setCursorPos(cursorPos + chars.length);
        setResult(null);
        setError(null);
      }
    } catch (e) {
      // clipboard access denied
    }
  }, [expression, cursorPos, pushUndo]);

  const solve = useCallback(() => {
    try {
      const exprString = expression.join('');
      const tokens = tokenize(exprString);
      const ast = parse(tokens);
      const solveResult = solveLogarithmicEquation(ast);
      setResult(solveResult);
      setError(null);
    } catch (e) {
      setError(e.message);
      setResult(null);
    }
  }, [expression]);

  // Keyboard input handler
  const handleKeyDown = useCallback((e) => {
    if (e.ctrlKey || e.metaKey) {
      if (e.key === 'z' || e.key === 'Z') { e.preventDefault(); undo(); return; }
      if (e.key === 'c' || e.key === 'C') { e.preventDefault(); copyExpression(); return; }
      if (e.key === 'v' || e.key === 'V') { e.preventDefault(); pasteExpression(); return; }
      return;
    }

    if (e.key === 'ArrowLeft') { e.preventDefault(); setCursorPos(p => Math.max(0, p - 1)); return; }
    if (e.key === 'ArrowRight') { e.preventDefault(); setCursorPos(p => Math.min(expression.length, p + 1)); return; }
    if (e.key === 'Home') { e.preventDefault(); setCursorPos(0); return; }
    if (e.key === 'End') { e.preventDefault(); setCursorPos(expression.length); return; }

    if (e.key === 'Backspace') { e.preventDefault(); backspace(); return; }
    if (e.key === 'Delete') { e.preventDefault(); deleteForward(); return; }

    if (e.key === 'Enter') { e.preventDefault(); if (expression.length > 0) solve(); return; }
    if (e.key === 'Escape') { e.preventDefault(); clearAll(); return; }

    if (VALID_KEYS.has(e.key)) {
      e.preventDefault();
      let mapped = e.key.toLowerCase();
      if (e.key === '*') mapped = '\u00D7';
      if (e.key === '/') mapped = '\u00F7';
      insertAtCursor(mapped);
    }
  }, [expression, cursorPos, undo, copyExpression, pasteExpression, backspace, deleteForward, solve, insertAtCursor]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener('keydown', handleKeyDown);
    return () => el.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  /* -------------------------------------------------
     DISPLAY RENDERER with clickable cursor placement
     
     Strategy: each raw character gets a wrapper span
     with data-idx={charIndex}. Visual grouping (log,
     ln, superscripts) still works, but every individual
     raw char inside is wrapped so clicks can resolve
     to a cursor position. The cursor element is inserted
     at the right raw-index position.
     ------------------------------------------------- */

  const handleDisplayClick = (e) => {
    containerRef.current?.focus();
    // Find nearest data-idx
    let target = e.target;
    while (target && !target.dataset?.idx && target !== e.currentTarget) {
      target = target.parentElement;
    }
    if (target && target.dataset?.idx !== undefined) {
      const idx = parseInt(target.dataset.idx, 10);
      // Click on left half → cursor before, right half → cursor after
      const rect = target.getBoundingClientRect();
      const clickX = e.clientX;
      const mid = rect.left + rect.width / 2;
      setCursorPos(clickX < mid ? idx : idx + 1);
    } else {
      // Clicked empty area → cursor at end
      setCursorPos(expression.length);
    }
  };

  const renderExpressionDisplay = (expr, cPos) => {
    const cursor = <span key="cursor" className="eq-cursor" />;

    if (!expr || expr.length === 0) {
      return <>{cursor}<span style={engineStyles.placeholder}>Enter equation...</span></>;
    }

    // Build a flat list of { rawIndex, element } then insert cursor
    const segments = [];
    let i = 0;

    while (i < expr.length) {
      // ln
      if (expr[i] === 'l' && expr[i + 1] === 'n') {
        segments.push({ startIdx: i, endIdx: i + 1, el: (
          <span key={`g${i}`} style={engineStyles.displayLogExpr}>
            <span data-idx={i} className="eq-char-span" style={engineStyles.displayLog}>l</span>
            <span data-idx={i + 1} className="eq-char-span" style={engineStyles.displayLog}>n</span>
          </span>
        )});
        i += 2;
        continue;
      }

      // log (with optional _base)
      if (expr[i] === 'l' && expr[i + 1] === 'o' && expr[i + 2] === 'g') {
        let j = i + 3;
        let baseChars = [];
        let baseIndices = [];
        if (expr[j] === '_') {
          j++; // skip underscore
          while (j < expr.length && /[0-9a-zA-Z]/.test(expr[j]) && expr[j] !== '(') {
            baseChars.push(expr[j]);
            baseIndices.push(j);
            j++;
          }
        }
        segments.push({ startIdx: i, endIdx: j - 1, el: (
          <span key={`g${i}`} style={engineStyles.displayLogExpr}>
            <span data-idx={i} className="eq-char-span" style={engineStyles.displayLog}>l</span>
            <span data-idx={i + 1} className="eq-char-span" style={engineStyles.displayLog}>o</span>
            <span data-idx={i + 2} className="eq-char-span" style={engineStyles.displayLog}>g</span>
            {expr[i + 3] === '_' && <span data-idx={i + 3} className="eq-char-span" style={engineStyles.displayOp}></span>}
            {baseChars.length > 0 && (
              <sub style={engineStyles.displaySub}>
                {baseChars.map((bc, bi) => (
                  <span key={baseIndices[bi]} data-idx={baseIndices[bi]} className="eq-char-span">{bc}</span>
                ))}
              </sub>
            )}
          </span>
        )});
        i = j;
        continue;
      }

      // Power: char^...
      const current = expr[i];
      const next = expr[i + 1];

      if (next === '^') {
        let expChars = [];
        let expIndices = [];
        let j = i + 2;
        if (expr[j] === '(') {
          let depth = 1;
          expChars.push('('); expIndices.push(j);
          j++;
          while (j < expr.length && depth > 0) {
            if (expr[j] === '(') depth++;
            if (expr[j] === ')') depth--;
            expChars.push(expr[j]); expIndices.push(j);
            j++;
          }
        } else {
          while (j < expr.length && /[0-9a-zA-Z.+\-\u00D7]/.test(expr[j]) && expr[j] !== '=') {
            expChars.push(expr[j]); expIndices.push(j);
            j++;
          }
        }
        if (expChars.length > 0) {
          segments.push({ startIdx: i, endIdx: j - 1, el: (
            <span key={`g${i}`} style={engineStyles.displayTerm}>
              <span data-idx={i} className="eq-char-span" style={current === 'e' ? engineStyles.displayEuler : undefined}>{current}</span>
              <span data-idx={i + 1} className="eq-char-span" style={engineStyles.displayOp}></span>
              <sup style={engineStyles.displaySup}>
                {expChars.map((ec, ei) => (
                  <span key={expIndices[ei]} data-idx={expIndices[ei]} className="eq-char-span">{ec}</span>
                ))}
              </sup>
            </span>
          )});
          i = j;
          continue;
        }
      }

      // Single characters
      const charMap = {
        '\u00D7': { style: engineStyles.displayOp, text: ' \u00B7 ' },
        '\u00F7': { style: engineStyles.displayOp, text: ' / ' },
        '+': { style: engineStyles.displayOp, text: ' + ' },
        '-': { style: engineStyles.displayOp, text: ' \u2212 ' },
        '=': { style: engineStyles.displayEquals, text: ' = ' },
        '^': { style: engineStyles.displayOp, text: '^' },
        'e': { style: engineStyles.displayEuler, text: 'e' },
        '_': { style: engineStyles.displayOp, text: '' },
      };

      if (charMap[current]) {
        if (charMap[current].text) {
          segments.push({ startIdx: i, endIdx: i, el: (
            <span key={`c${i}`} data-idx={i} className="eq-char-span" style={charMap[current].style}>{charMap[current].text}</span>
          )});
        }
      } else {
        segments.push({ startIdx: i, endIdx: i, el: (
          <span key={`c${i}`} data-idx={i} className="eq-char-span">{current}</span>
        )});
      }
      i++;
    }

    // Now build output with cursor inserted at cPos
    const output = [];
    let cursorInserted = false;

    for (const seg of segments) {
      // Insert cursor before this segment if cursor is at or before its start
      if (!cursorInserted && cPos <= seg.startIdx) {
        output.push(cursor);
        cursorInserted = true;
      }
      output.push(seg.el);
      // Insert cursor inside this segment if cursor falls within it
      // (only for multi-char segments where cursor is between startIdx and endIdx)
      if (!cursorInserted && cPos <= seg.endIdx + 1) {
        output.push(cursor);
        cursorInserted = true;
      }
    }

    // Cursor at end
    if (!cursorInserted) {
      output.push(cursor);
    }

    return output;
  };

  const p = compact ? 0.85 : 1;

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      style={{ ...engineStyles.container, ...style, outline: 'none' }}
    >
      <style>{GLOBAL_STYLES}</style>

      <div
        className="eq-display"
        style={{ ...engineStyles.display, padding: `${18 * p}px ${22 * p}px` }}
        onClick={handleDisplayClick}
      >
        {renderExpressionDisplay(expression, cursorPos)}
      </div>

      {error && (
        <div style={engineStyles.error}>{error}</div>
      )}

      <div style={{ ...engineStyles.builder, gap: `${12 * p}px` }}>
        <div style={engineStyles.row}>
          <span style={engineStyles.label}>Log</span>
          <div style={engineStyles.btnGroup}>
            <button style={{ ...engineStyles.btn, ...engineStyles.btnLog }} onClick={() => addLogToExpression('e')}>ln</button>
            <button style={{ ...engineStyles.btn, ...engineStyles.btnLog }} onClick={() => addLogToExpression('10')}>log</button>
            <button style={{ ...engineStyles.btn, ...engineStyles.btnLog }} onClick={() => addLogToExpression('2')}>log<sub>2</sub></button>
            <button style={{ ...engineStyles.btn, ...engineStyles.btnLog }} onClick={() => addLogToExpression('3')}>log<sub>3</sub></button>
            <button style={{ ...engineStyles.btn, ...engineStyles.btnLog }} onClick={() => addLogToExpression('5')}>log<sub>5</sub></button>
          </div>
        </div>

        <div style={engineStyles.row}>
          <span style={engineStyles.label}>Var</span>
          <div style={engineStyles.btnGroup}>
            {variables.map((v) => (
              <button key={v} style={{ ...engineStyles.btn, ...engineStyles.btnVar }} onClick={() => addToExpression(v)}>{v}</button>
            ))}
          </div>
        </div>

        <div style={engineStyles.row}>
          <span style={engineStyles.label}>Num</span>
          <div style={engineStyles.btnGroup}>
            {numbers.map((n) => (
              <button key={n} style={{ ...engineStyles.btn, ...engineStyles.btnNum }} onClick={() => addToExpression(n)}>{n}</button>
            ))}
          </div>
        </div>

        <div style={engineStyles.row}>
          <span style={engineStyles.label}>Op</span>
          <div style={engineStyles.btnGroup}>
            {operators.map((op) => (
              <button key={op} style={{ ...engineStyles.btn, ...engineStyles.btnOp }} onClick={() => addToExpression(op)}>
                {op === '^' ? 'x\u207F' : op}
              </button>
            ))}
          </div>
        </div>

        <div style={engineStyles.row}>
          <span style={engineStyles.label}></span>
          <div style={engineStyles.btnGroup}>
            <button style={{ ...engineStyles.btn, ...engineStyles.btnSpecial }} onClick={() => addToExpression('e')}>e</button>
            <button style={{ ...engineStyles.btn, ...engineStyles.btnBracket }} onClick={() => addToExpression('(')}>(</button>
            <button style={{ ...engineStyles.btn, ...engineStyles.btnBracket }} onClick={() => addToExpression(')')}>)</button>
          </div>
        </div>

        <div style={engineStyles.actions}>
          <button style={{ ...engineStyles.btnAction, ...engineStyles.btnClear }} onClick={clearAll}>Clear</button>
          <button
            style={{ ...engineStyles.btnAction, ...engineStyles.btnUndo, ...(undoStack.length === 0 ? engineStyles.btnUndoDisabled : {}) }}
            onClick={undo}
            disabled={undoStack.length === 0}
            title="Undo (Ctrl+Z)"
          >{'\u21B6'}</button>
          <button style={{ ...engineStyles.btnAction, ...engineStyles.btnBack }} onClick={backspace}>{'\u232B'}</button>
          <button
            style={{ ...engineStyles.btnAction, ...engineStyles.btnSolve, ...(expression.length === 0 ? engineStyles.btnDisabled : {}) }}
            onClick={solve}
            disabled={expression.length === 0}
          >
            Solve
          </button>
        </div>
      </div>

      {result && result.solution && (
        <div style={engineStyles.solution}>
          <div style={engineStyles.solLabel}>Answer</div>
          <div style={engineStyles.solValue}>
            <span style={engineStyles.solVar}>{result.solution.variable}</span>
            <span style={engineStyles.solEq}> = </span>
            <span style={engineStyles.solNum}>{formatNumber(result.solution.value)}</span>
          </div>
          <div style={engineStyles.solNote}>
            {result.solution.exact ? '\u2713 Exact solution' : '\u2248 Approximate value'}
          </div>
        </div>
      )}
    </div>
  );
});

LogarithmicSolverEngine.displayName = 'LogarithmicSolverEngine';

const engineStyles = {
  container: {
    background: '#fff',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
  },
  display: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    borderRadius: '12px',
    padding: '18px 22px',
    minHeight: '54px',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.4rem',
    color: '#fff',
    fontWeight: '500',
    cursor: 'text',
  },
  placeholder: {
    color: 'rgba(255,255,255,0.5)',
    fontStyle: 'italic',
    fontSize: '0.95rem',
  },
  displayTerm: { display: 'inline-flex', alignItems: 'baseline' },
  displaySup: { fontSize: '0.6em', color: '#bfdbfe', marginLeft: '1px' },
  displaySub: { fontSize: '0.65em', color: '#bfdbfe', marginLeft: '1px' },
  displayOp: { color: 'rgba(255,255,255,0.75)', margin: '0 2px' },
  displayEquals: { color: '#fbbf24', fontWeight: '700', margin: '0 4px' },
  displayEuler: { fontStyle: 'italic', color: '#a5f3fc' },
  displayLog: { color: '#fde68a', fontWeight: '600' },
  displayLogExpr: { display: 'inline-flex', alignItems: 'baseline' },
  error: {
    background: '#fef2f2',
    border: '1px solid #fecaca',
    borderRadius: '8px',
    padding: '10px 14px',
    marginBottom: '12px',
    color: '#dc2626',
    fontSize: '0.85rem',
  },
  builder: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  label: {
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    color: '#94a3b8',
    width: '28px',
    flexShrink: 0,
    fontWeight: '600',
  },
  btnGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
  },
  btn: {
    fontSize: '0.95rem',
    padding: '8px 12px',
    border: '1px solid #e2e8f0',
    background: '#f8fafc',
    color: '#334155',
    cursor: 'pointer',
    borderRadius: '8px',
    minWidth: '36px',
    fontFamily: 'inherit',
    fontWeight: '500',
    transition: 'all 0.15s',
  },
  btnVar: { fontStyle: 'italic', color: '#3b82f6', fontWeight: '600' },
  btnNum: { color: '#1e293b' },
  btnOp: { color: '#64748b', fontWeight: '600' },
  btnLog: { color: '#3b82f6', fontWeight: '600', minWidth: '44px' },
  btnSpecial: { color: '#0891b2', fontWeight: '600', fontStyle: 'italic' },
  btnBracket: { fontSize: '1.1rem', color: '#64748b' },
  actions: {
    display: 'flex',
    gap: '8px',
    marginTop: '6px',
    paddingTop: '14px',
    borderTop: '1px solid #e2e8f0',
  },
  btnAction: {
    fontSize: '0.85rem',
    fontWeight: '600',
    padding: '12px 18px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '8px',
    fontFamily: 'inherit',
    transition: 'all 0.15s',
  },
  btnClear: { background: '#f1f5f9', color: '#64748b' },
  btnUndo: { background: '#f1f5f9', color: '#64748b', fontSize: '1.1rem', padding: '12px 14px' },
  btnUndoDisabled: { opacity: 0.4, cursor: 'not-allowed' },
  btnBack: { background: '#f1f5f9', color: '#64748b', fontSize: '1.1rem' },
  btnSolve: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    color: '#fff',
    marginLeft: 'auto',
    padding: '12px 24px',
    boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
  },
  btnDisabled: { background: '#cbd5e1', boxShadow: 'none', cursor: 'not-allowed' },
  solution: {
    marginTop: '16px',
    padding: '16px 20px',
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    borderRadius: '12px',
    textAlign: 'center',
    color: '#fff',
  },
  solLabel: {
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    opacity: 0.8,
    marginBottom: '6px',
    fontWeight: '600',
  },
  solValue: {
    fontSize: '1.5rem',
    fontWeight: '700',
  },
  solVar: { fontStyle: 'italic' },
  solEq: { opacity: 0.8, margin: '0 6px' },
  solNum: { color: '#fbbf24' },
  solNote: {
    fontSize: '0.8rem',
    opacity: 0.75,
    marginTop: '6px',
  },
};


/* =====================================================
   EQUATION FORM GENERATORS
   ===================================================== */

const equationForms = [
  { id: 'simple', name: 'Simple', formula: <span>log<sub>b</sub>(x) = c</span>,
    generate: (nice) => { const bases = [2, 3, 5, 10]; const base = bases[Math.floor(Math.random() * bases.length)]; if (nice) { const exp = Math.floor(Math.random() * 4) + 1; return `log_${base}(x)=${exp}`; } return `log_${base}(x)=${Math.floor(Math.random() * 8) + 1}`; } },
  { id: 'natural', name: 'Natural Log', formula: <span>ln(x) = c</span>,
    generate: (nice) => { if (nice) { const vals = [1, 2, 3, 4, 5]; return `ln(x)=${vals[Math.floor(Math.random() * vals.length)]}`; } return `ln(x)=${(Math.random() * 5 + 0.5).toFixed(2)}`; } },
  { id: 'coefficient', name: 'With Coefficient', formula: <span>a &middot; log<sub>b</sub>(x) = c</span>,
    generate: (nice) => { const bases = [2, 3, 10]; const base = bases[Math.floor(Math.random() * bases.length)]; const coeff = Math.floor(Math.random() * 4) + 2; if (nice) { const exp = Math.floor(Math.random() * 3) + 1; return `${coeff}\u00D7log_${base}(x)=${coeff * exp}`; } return `${coeff}\u00D7log_${base}(x)=${Math.floor(Math.random() * 12) + 2}`; } },
  { id: 'linear-arg', name: 'Linear Argument', formula: <span>log<sub>b</sub>(mx + n) = c</span>,
    generate: (nice) => { const bases = [2, 3, 10]; const base = bases[Math.floor(Math.random() * bases.length)]; const m = Math.floor(Math.random() * 3) + 1; const n = Math.floor(Math.random() * 10) - 5; const nStr = n >= 0 ? `+${n}` : `${n}`; const mStr = m === 1 ? 'x' : `${m}\u00D7x`; if (nice) { const exp = Math.floor(Math.random() * 3) + 1; return `log_${base}(${mStr}${nStr})=${exp}`; } return `log_${base}(${mStr}${nStr})=${Math.floor(Math.random() * 5) + 1}`; } },
  { id: 'with-constant', name: 'With Constant', formula: <span>log<sub>b</sub>(x) + c = d</span>,
    generate: (nice) => { const bases = [2, 3, 10]; const base = bases[Math.floor(Math.random() * bases.length)]; const c = Math.floor(Math.random() * 5) + 1; if (nice) { const exp = Math.floor(Math.random() * 3) + 1; return `log_${base}(x)+${c}=${exp + c}`; } return `log_${base}(x)+${c}=${Math.floor(Math.random() * 8) + c}`; } },
  { id: 'natural-linear', name: 'Natural Linear', formula: <span>ln(mx + n) = c</span>,
    generate: (nice) => { const m = Math.floor(Math.random() * 3) + 1; const n = Math.floor(Math.random() * 10) - 3; const nStr = n >= 0 ? `+${n}` : `${n}`; const mStr = m === 1 ? 'x' : `${m}\u00D7x`; if (nice) { const vals = [1, 2, 3]; return `ln(${mStr}${nStr})=${vals[Math.floor(Math.random() * vals.length)]}`; } return `ln(${mStr}${nStr})=${(Math.random() * 4 + 0.5).toFixed(2)}`; } },
  { id: 'same-base', name: 'Same Base Both Sides', formula: <span>log<sub>b</sub>(f(x)) = log<sub>b</sub>(c)</span>,
    generate: () => { const bases = [2, 3, 10]; const base = bases[Math.floor(Math.random() * bases.length)]; const m = Math.floor(Math.random() * 3) + 1; const n = Math.floor(Math.random() * 10) - 5; const c = Math.floor(Math.random() * 50) + 10; const nStr = n >= 0 ? `+${n}` : `${n}`; const mStr = m === 1 ? 'x' : `${m}\u00D7x`; return `log_${base}(${mStr}${nStr})=log_${base}(${c})`; } },
  { id: 'base-e-coeff', name: 'Natural with Coefficient', formula: <span>a &middot; ln(x) = c</span>,
    generate: (nice) => { const coeff = Math.floor(Math.random() * 4) + 2; if (nice) { const vals = [2, 4, 6, 8]; return `${coeff}\u00D7ln(x)=${vals[Math.floor(Math.random() * vals.length)]}`; } return `${coeff}\u00D7ln(x)=${(Math.random() * 10 + 1).toFixed(2)}`; } }
];


/* =====================================================
   WRAPPER COMPONENT (Full Educational Version)
   ===================================================== */

const LogarithmicEquationSolver = () => {
  const engineRef = useRef(null);
  const [solveResult, setSolveResult] = useState(null);
  const [selectedForm, setSelectedForm] = useState(null);
  const [examplesOpen, setExamplesOpen] = useState(false);

  const handleFormClick = (form) => {
    const isNice = Math.random() < 0.8;
    const equation = form.generate(isNice);
    setSelectedForm(form.id);
    setSolveResult(null);
    if (engineRef.current) engineRef.current.loadEquation(equation);
  };

  const handleRandomClick = () => {
    const form = equationForms[Math.floor(Math.random() * equationForms.length)];
    handleFormClick(form);
  };

  const handleSolveClick = () => {
    setTimeout(() => {
      if (engineRef.current) {
        const result = engineRef.current.getResult();
        setSolveResult(result);
      }
    }, 50);
  };

  const renderStepMath = (step, index) => {
    if (!step.before && !step.after) return null;
    return (
      <div>
        {step.before && (
          <div style={wrapperStyles.stepMathBox}>
            <MathRenderer node={step.before} fontSize="1.05rem" />
          </div>
        )}
        {step.after && (
          <div style={wrapperStyles.stepTransform}>
            <span style={wrapperStyles.arrow}>{'\u27F9'}</span>
            <div style={wrapperStyles.stepMathBox}>
              <MathRenderer node={step.after} fontSize="1.05rem" />
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={wrapperStyles.container}>
      <div style={wrapperStyles.inner}>
        <header style={wrapperStyles.header}>
          <div style={wrapperStyles.iconWrap}>
            <span style={wrapperStyles.icon}>log</span>
          </div>
          <h1 style={wrapperStyles.title}>Logarithmic Equation Solver</h1>
          <p style={wrapperStyles.subtitle}>Solve equations with logarithms step by step</p>
        </header>

        <div className="eq-main-layout" style={wrapperStyles.main}>
          <div style={wrapperStyles.leftCol}>
            <div onClick={handleSolveClick}>
              <LogarithmicSolverEngine ref={engineRef} compact={true} />
            </div>

            <div style={wrapperStyles.examplesPanel}>
              <button style={wrapperStyles.examplesToggle} onClick={() => setExamplesOpen(!examplesOpen)}>
                <span style={wrapperStyles.examplesToggleText}>Try an Example</span>
                <span style={{ ...wrapperStyles.examplesChevron, transform: examplesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>{'\u25BC'}</span>
              </button>

              {examplesOpen && (
                <div style={wrapperStyles.examplesBody}>
                  <div style={wrapperStyles.examplesTopRow}>
                    <p style={wrapperStyles.formsHint}>Click any type to generate a random equation.</p>
                    <button style={wrapperStyles.randomBtn} onClick={handleRandomClick}>
                      {'\uD83C\uDFB2'} Random
                    </button>
                  </div>
                  <div style={wrapperStyles.formsGrid}>
                    {equationForms.map((form) => (
                      <button
                        key={form.id}
                        style={{ ...wrapperStyles.formCard, ...(selectedForm === form.id ? wrapperStyles.formCardSelected : {}) }}
                        onClick={() => handleFormClick(form)}
                      >
                        <div style={wrapperStyles.formName}>{form.name}</div>
                        <div style={wrapperStyles.formFormula}>{form.formula}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div style={wrapperStyles.rightCol}>
            <SolutionPanel
              steps={solveResult ? solveResult.steps : []}
              placeholder="Select an equation type or enter your own equation, then click Solve to see the step-by-step solution."
              stepsTitle="Solution Steps"
              renderStepContent={renderStepMath}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const wrapperStyles = {
  container: {
    background: 'linear-gradient(180deg, #f0f7ff 0%, #e8f4fc 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#1e3a5f',
    padding: '30px 20px',
  },
  inner: { maxWidth: '1100px', margin: '0 auto' },
  header: { textAlign: 'center', marginBottom: '24px' },
  iconWrap: {
    width: '50px', height: '50px',
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    borderRadius: '14px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: '12px', boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
  },
  icon: { color: '#fff', fontSize: '14px', fontWeight: '700' },
  title: { fontSize: '1.7rem', fontWeight: '700', color: '#1e3a5f', margin: '0 0 6px 0' },
  subtitle: { fontSize: '0.95rem', color: '#64748b', margin: 0 },
  main: { display: 'flex', gap: '24px', alignItems: 'flex-start' },
  leftCol: { flex: '1 1 50%', display: 'flex', flexDirection: 'column', gap: '16px' },
  rightCol: {
    flex: '1 1 50%', background: '#fff', borderRadius: '16px', padding: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)', minHeight: '500px',  overflowY: 'auto',
  },
  examplesPanel: { background: '#fff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)', overflow: 'hidden' },
  examplesToggle: {
    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '14px 18px', border: 'none', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit',
  },
  examplesToggleText: { fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#64748b', fontWeight: '600' },
  examplesChevron: { fontSize: '0.6rem', color: '#94a3b8', transition: 'transform 0.2s ease' },
  examplesBody: { padding: '0 16px 16px' },
  examplesTopRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' },
  formsGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' },
  formsHint: { fontSize: '0.8rem', color: '#94a3b8', margin: 0, fontStyle: 'italic' },
  randomBtn: {
    fontSize: '0.78rem', fontWeight: '600', padding: '6px 14px',
    border: '1px solid #3b82f6', background: '#eff6ff', color: '#3b82f6',
    cursor: 'pointer', borderRadius: '8px', fontFamily: 'inherit', transition: 'all 0.15s', whiteSpace: 'nowrap',
  },
  formCard: {
    background: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '10px',
    padding: '10px 12px', cursor: 'pointer', transition: 'all 0.2s ease', textAlign: 'left', fontFamily: 'inherit',
  },
  formCardSelected: { borderColor: '#3b82f6', background: '#eff6ff', boxShadow: '0 2px 8px rgba(59, 130, 246, 0.15)' },
  formName: { fontSize: '0.8rem', fontWeight: '600', color: '#1e3a5f', marginBottom: '2px' },
  formFormula: { fontSize: '0.9rem', color: '#3b82f6', fontFamily: 'ui-monospace, monospace' },
  stepMathBox: {
    fontSize: '1.05rem', color: '#1e3a5f', background: '#fff', padding: '10px 14px',
    borderRadius: '8px', display: 'inline-block', border: '1px solid #e2e8f0',
  },
  stepTransform: { display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px' },
  arrow: { color: '#3b82f6', fontSize: '1.1rem' },
};

export default LogarithmicEquationSolver;