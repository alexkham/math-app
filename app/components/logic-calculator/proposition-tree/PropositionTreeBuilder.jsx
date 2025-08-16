// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import styles from './PropositionTreeBuilder.module.css';

// // // // // // // const PropositionTreeBuilder = () => {
// // // // // // //   const [proposition, setProposition] = useState('(P → Q) ∧ (¬P ∨ Q)');
// // // // // // //   const [isValid, setIsValid] = useState(true);
// // // // // // //   const [errorMessage, setErrorMessage] = useState('');
// // // // // // //   const [treeData, setTreeData] = useState(null);
// // // // // // //   const [truthTable, setTruthTable] = useState([]);
  
// // // // // // //   // Supported operators
// // // // // // //   const operators = {
// // // // // // //     '∧': { precedence: 2, name: 'AND' },
// // // // // // //     '∨': { precedence: 2, name: 'OR' },
// // // // // // //     '→': { precedence: 1, name: 'IMPLIES' },
// // // // // // //     '↔': { precedence: 1, name: 'EQUIVALENT' },
// // // // // // //     '⊕': { precedence: 2, name: 'XOR' },
// // // // // // //     '¬': { precedence: 3, name: 'NOT' }
// // // // // // //   };
  
// // // // // // //   // Parse the proposition and build the tree
// // // // // // //   const parseProposition = (expr) => {
// // // // // // //     let tokens = tokenize(expr);
// // // // // // //     if (!tokens) return null;
    
// // // // // // //     return buildTree(tokens);
// // // // // // //   };
  
// // // // // // //   // Tokenize the proposition string
// // // // // // //   const tokenize = (expr) => {
// // // // // // //     try {
// // // // // // //       const tokens = [];
// // // // // // //       let i = 0;
      
// // // // // // //       while (i < expr.length) {
// // // // // // //         const char = expr[i];
        
// // // // // // //         if (char === ' ') {
// // // // // // //           i++;
// // // // // // //           continue;
// // // // // // //         }
        
// // // // // // //         if (char === '(' || char === ')') {
// // // // // // //           tokens.push({
// // // // // // //             type: char === '(' ? 'open_paren' : 'close_paren',
// // // // // // //             value: char
// // // // // // //           });
// // // // // // //           i++;
// // // // // // //           continue;
// // // // // // //         }
        
// // // // // // //         if (/[A-Z]/.test(char)) {
// // // // // // //           tokens.push({
// // // // // // //             type: 'variable',
// // // // // // //             value: char
// // // // // // //           });
// // // // // // //           i++;
// // // // // // //           continue;
// // // // // // //         }
        
// // // // // // //         // Check for operators
// // // // // // //         let foundOperator = false;
// // // // // // //         for (const op in operators) {
// // // // // // //           if (expr.substring(i).startsWith(op)) {
// // // // // // //             tokens.push({
// // // // // // //               type: 'operator',
// // // // // // //               value: op
// // // // // // //             });
// // // // // // //             i += op.length;
// // // // // // //             foundOperator = true;
// // // // // // //             break;
// // // // // // //           }
// // // // // // //         }
        
// // // // // // //         if (!foundOperator) {
// // // // // // //           throw new Error(`Unknown token: ${char} at position ${i}`);
// // // // // // //         }
// // // // // // //       }
      
// // // // // // //       return tokens;
// // // // // // //     } catch (error) {
// // // // // // //       setIsValid(false);
// // // // // // //       setErrorMessage(error.message);
// // // // // // //       return null;
// // // // // // //     }
// // // // // // //   };
  
// // // // // // //   // Build the syntax tree from tokens
// // // // // // //   const buildTree = (tokens) => {
// // // // // // //     try {
// // // // // // //       // Implementation of Shunting-yard algorithm to handle operator precedence
// // // // // // //       const outputQueue = [];
// // // // // // //       const operatorStack = [];
      
// // // // // // //       for (let i = 0; i < tokens.length; i++) {
// // // // // // //         const token = tokens[i];
        
// // // // // // //         switch (token.type) {
// // // // // // //           case 'variable':
// // // // // // //             outputQueue.push({
// // // // // // //               type: 'node',
// // // // // // //               nodeType: 'variable',
// // // // // // //               value: token.value,
// // // // // // //               children: []
// // // // // // //             });
// // // // // // //             break;
            
// // // // // // //           case 'operator':
// // // // // // //             // Handle unary operator (negation)
// // // // // // //             if (token.value === '¬') {
// // // // // // //               // Negation has highest precedence
// // // // // // //               operatorStack.push(token);
// // // // // // //             } else {
// // // // // // //               // Binary operators
// // // // // // //               const currentOp = operators[token.value];
              
// // // // // // //               while (
// // // // // // //                 operatorStack.length > 0 &&
// // // // // // //                 operatorStack[operatorStack.length - 1].type === 'operator' &&
// // // // // // //                 operators[operatorStack[operatorStack.length - 1].value].precedence >= currentOp.precedence
// // // // // // //               ) {
// // // // // // //                 const op = operatorStack.pop();
                
// // // // // // //                 if (op.value === '¬') {
// // // // // // //                   // Unary operator
// // // // // // //                   const operand = outputQueue.pop();
// // // // // // //                   outputQueue.push({
// // // // // // //                     type: 'node',
// // // // // // //                     nodeType: 'operator',
// // // // // // //                     value: op.value,
// // // // // // //                     name: operators[op.value].name,
// // // // // // //                     children: [operand]
// // // // // // //                   });
// // // // // // //                 } else {
// // // // // // //                   // Binary operator
// // // // // // //                   const right = outputQueue.pop();
// // // // // // //                   const left = outputQueue.pop();
// // // // // // //                   outputQueue.push({
// // // // // // //                     type: 'node',
// // // // // // //                     nodeType: 'operator',
// // // // // // //                     value: op.value,
// // // // // // //                     name: operators[op.value].name,
// // // // // // //                     children: [left, right]
// // // // // // //                   });
// // // // // // //                 }
// // // // // // //               }
              
// // // // // // //               operatorStack.push(token);
// // // // // // //             }
// // // // // // //             break;
            
// // // // // // //           case 'open_paren':
// // // // // // //             operatorStack.push(token);
// // // // // // //             break;
            
// // // // // // //           case 'close_paren':
// // // // // // //             while (
// // // // // // //               operatorStack.length > 0 &&
// // // // // // //               operatorStack[operatorStack.length - 1].type !== 'open_paren'
// // // // // // //             ) {
// // // // // // //               const op = operatorStack.pop();
              
// // // // // // //               if (op.value === '¬') {
// // // // // // //                 // Unary operator
// // // // // // //                 const operand = outputQueue.pop();
// // // // // // //                 outputQueue.push({
// // // // // // //                   type: 'node',
// // // // // // //                   nodeType: 'operator',
// // // // // // //                   value: op.value,
// // // // // // //                   name: operators[op.value].name,
// // // // // // //                   children: [operand]
// // // // // // //                 });
// // // // // // //               } else {
// // // // // // //                 // Binary operator
// // // // // // //                 const right = outputQueue.pop();
// // // // // // //                 const left = outputQueue.pop();
// // // // // // //                 outputQueue.push({
// // // // // // //                   type: 'node',
// // // // // // //                   nodeType: 'operator',
// // // // // // //                   value: op.value,
// // // // // // //                   name: operators[op.value].name,
// // // // // // //                   children: [left, right]
// // // // // // //                 });
// // // // // // //               }
// // // // // // //             }
            
// // // // // // //             // Pop the open parenthesis
// // // // // // //             if (operatorStack.length === 0 || operatorStack[operatorStack.length - 1].type !== 'open_paren') {
// // // // // // //               throw new Error('Mismatched parentheses');
// // // // // // //             }
// // // // // // //             operatorStack.pop();
// // // // // // //             break;
// // // // // // //         }
// // // // // // //       }
      
// // // // // // //       // Process remaining operators
// // // // // // //       while (operatorStack.length > 0) {
// // // // // // //         const op = operatorStack.pop();
        
// // // // // // //         if (op.type === 'open_paren' || op.type === 'close_paren') {
// // // // // // //           throw new Error('Mismatched parentheses');
// // // // // // //         }
        
// // // // // // //         if (op.value === '¬') {
// // // // // // //           // Unary operator
// // // // // // //           const operand = outputQueue.pop();
// // // // // // //           outputQueue.push({
// // // // // // //             type: 'node',
// // // // // // //             nodeType: 'operator',
// // // // // // //             value: op.value,
// // // // // // //             name: operators[op.value].name,
// // // // // // //             children: [operand]
// // // // // // //           });
// // // // // // //         } else {
// // // // // // //           // Binary operator
// // // // // // //           const right = outputQueue.pop();
// // // // // // //           const left = outputQueue.pop();
// // // // // // //           outputQueue.push({
// // // // // // //             type: 'node',
// // // // // // //             nodeType: 'operator',
// // // // // // //             value: op.value,
// // // // // // //             name: operators[op.value].name,
// // // // // // //             children: [left, right]
// // // // // // //           });
// // // // // // //         }
// // // // // // //       }
      
// // // // // // //       if (outputQueue.length !== 1) {
// // // // // // //         throw new Error('Invalid expression');
// // // // // // //       }
      
// // // // // // //       setIsValid(true);
// // // // // // //       setErrorMessage('');
// // // // // // //       return outputQueue[0];
// // // // // // //     } catch (error) {
// // // // // // //       setIsValid(false);
// // // // // // //       setErrorMessage(error.message);
// // // // // // //       return null;
// // // // // // //     }
// // // // // // //   };
  
// // // // // // //   // Evaluate the tree for a given variable assignment
// // // // // // //   const evaluateTree = (node, assignment) => {
// // // // // // //     if (!node) return null;
    
// // // // // // //     if (node.nodeType === 'variable') {
// // // // // // //       return assignment[node.value] || false;
// // // // // // //     }
    
// // // // // // //     if (node.nodeType === 'operator') {
// // // // // // //       switch (node.value) {
// // // // // // //         case '¬':
// // // // // // //           return !evaluateTree(node.children[0], assignment);
// // // // // // //         case '∧':
// // // // // // //           return evaluateTree(node.children[0], assignment) && evaluateTree(node.children[1], assignment);
// // // // // // //         case '∨':
// // // // // // //           return evaluateTree(node.children[0], assignment) || evaluateTree(node.children[1], assignment);
// // // // // // //         case '→':
// // // // // // //           return !evaluateTree(node.children[0], assignment) || evaluateTree(node.children[1], assignment);
// // // // // // //         case '↔':
// // // // // // //           return evaluateTree(node.children[0], assignment) === evaluateTree(node.children[1], assignment);
// // // // // // //         case '⊕':
// // // // // // //           return evaluateTree(node.children[0], assignment) !== evaluateTree(node.children[1], assignment);
// // // // // // //         default:
// // // // // // //           return false;
// // // // // // //       }
// // // // // // //     }
    
// // // // // // //     return false;
// // // // // // //   };
  
// // // // // // //   // Generate truth table from the tree
// // // // // // //   const generateTruthTable = (tree) => {
// // // // // // //     if (!tree) return [];
    
// // // // // // //     // Extract unique variables
// // // // // // //     const variables = new Set();
// // // // // // //     const extractVariables = (node) => {
// // // // // // //       if (!node) return;
      
// // // // // // //       if (node.nodeType === 'variable') {
// // // // // // //         variables.add(node.value);
// // // // // // //       }
      
// // // // // // //       if (node.children) {
// // // // // // //         for (const child of node.children) {
// // // // // // //           extractVariables(child);
// // // // // // //         }
// // // // // // //       }
// // // // // // //     };
    
// // // // // // //     extractVariables(tree);
// // // // // // //     const variableArray = Array.from(variables).sort();
    
// // // // // // //     // Generate all possible variable assignments
// // // // // // //     const truthTable = [];
// // // // // // //     const totalRows = Math.pow(2, variableArray.length);
    
// // // // // // //     for (let i = 0; i < totalRows; i++) {
// // // // // // //       const assignment = {};
// // // // // // //       const row = { values: {} };
      
// // // // // // //       for (let j = 0; j < variableArray.length; j++) {
// // // // // // //         const variable = variableArray[j];
// // // // // // //         const value = Boolean((i >> j) & 1);
// // // // // // //         assignment[variable] = value;
// // // // // // //         row.values[variable] = value;
// // // // // // //       }
      
// // // // // // //       row.result = evaluateTree(tree, assignment);
// // // // // // //       truthTable.push(row);
// // // // // // //     }
    
// // // // // // //     return { variables: variableArray, rows: truthTable };
// // // // // // //   };
  
// // // // // // //   // Render the tree node
// // // // // // //   const renderTreeNode = (node, depth = 0, isLeft = false, isRight = false) => {
// // // // // // //     if (!node) return null;
    
// // // // // // //     const nodeClass = `${styles.treeNode} ${
// // // // // // //       node.nodeType === 'operator' ? styles.operatorNode : styles.variableNode
// // // // // // //     }`;
    
// // // // // // //     return (
// // // // // // //       <div className={styles.nodeContainer} style={{ marginLeft: `${depth * 20}px` }}>
// // // // // // //         <div className={nodeClass}>
// // // // // // //           {node.value}
// // // // // // //           {node.nodeType === 'operator' && <span className={styles.operatorName}>{node.name}</span>}
// // // // // // //         </div>
        
// // // // // // //         {node.children && node.children.length > 0 && (
// // // // // // //           <div className={styles.childrenContainer}>
// // // // // // //             {node.children.map((child, index) => (
// // // // // // //               <div key={index} className={styles.childNode}>
// // // // // // //                 {renderTreeNode(
// // // // // // //                   child,
// // // // // // //                   depth + 1,
// // // // // // //                   index === 0,
// // // // // // //                   index === node.children.length - 1
// // // // // // //                 )}
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   };
  
// // // // // // //   // Handle input changes
// // // // // // //   const handleInputChange = (e) => {
// // // // // // //     setProposition(e.target.value);
// // // // // // //   };
  
// // // // // // //   // Analyze the proposition
// // // // // // //   const analyzeProposition = () => {
// // // // // // //     const tree = parseProposition(proposition);
// // // // // // //     setTreeData(tree);
    
// // // // // // //     if (tree) {
// // // // // // //       const table = generateTruthTable(tree);
// // // // // // //       setTruthTable(table);
// // // // // // //     } else {
// // // // // // //       setTruthTable([]);
// // // // // // //     }
// // // // // // //   };
  
// // // // // // //   // Check if the proposition is a tautology
// // // // // // //   const isTautology = () => {
// // // // // // //     if (!truthTable || !truthTable.rows) return false;
// // // // // // //     return truthTable.rows.every(row => row.result === true);
// // // // // // //   };
  
// // // // // // //   // Check if the proposition is a contradiction
// // // // // // //   const isContradiction = () => {
// // // // // // //     if (!truthTable || !truthTable.rows) return false;
// // // // // // //     return truthTable.rows.every(row => row.result === false);
// // // // // // //   };
  
// // // // // // //   // Analyze on proposition change
// // // // // // //   useEffect(() => {
// // // // // // //     analyzeProposition();
// // // // // // //   }, [proposition]);
  
// // // // // // //   return (
// // // // // // //     <div className={styles.container}>
// // // // // // //       <div className={styles.inputSection}>
// // // // // // //         <h2>Proposition Analyzer & Tree Builder</h2>
// // // // // // //         <div className={styles.inputContainer}>
// // // // // // //           <input
// // // // // // //             type="text"
// // // // // // //             value={proposition}
// // // // // // //             onChange={handleInputChange}
// // // // // // //             className={`${styles.propositionInput} ${!isValid ? styles.error : ''}`}
// // // // // // //             placeholder="Enter a logical proposition (e.g., P ∧ (Q ∨ ¬R))"
// // // // // // //           />
// // // // // // //           <div className={styles.buttonContainer}>
// // // // // // //             <button onClick={analyzeProposition} className={styles.analyzeButton}>
// // // // // // //               Analyze
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>
        
// // // // // // //         {!isValid && (
// // // // // // //           <div className={styles.errorMessage}>
// // // // // // //             Error: {errorMessage}
// // // // // // //           </div>
// // // // // // //         )}
        
// // // // // // //         <div className={styles.operatorsGuide}>
// // // // // // //           <div className={styles.operatorsList}>
// // // // // // //             {Object.entries(operators).map(([symbol, details]) => (
// // // // // // //               <button
// // // // // // //                 key={symbol}
// // // // // // //                 className={styles.operatorButton}
// // // // // // //                 onClick={() => setProposition(proposition + symbol)}
// // // // // // //               >
// // // // // // //                 {symbol} ({details.name})
// // // // // // //               </button>
// // // // // // //             ))}
// // // // // // //             <button
// // // // // // //               className={styles.operatorButton}
// // // // // // //               onClick={() => setProposition(proposition + '(')}
// // // // // // //             >
// // // // // // //               (
// // // // // // //             </button>
// // // // // // //             <button
// // // // // // //               className={styles.operatorButton}
// // // // // // //               onClick={() => setProposition(proposition + ')')}
// // // // // // //             >
// // // // // // //               )
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
      
// // // // // // //       <div className={styles.resultsContainer}>
// // // // // // //         <div className={styles.resultSection}>
// // // // // // //           <h3>Syntax Tree</h3>
// // // // // // //           <div className={styles.treeContainer}>
// // // // // // //             {treeData ? (
// // // // // // //               renderTreeNode(treeData)
// // // // // // //             ) : (
// // // // // // //               <div className={styles.noData}>No valid tree to display</div>
// // // // // // //             )}
// // // // // // //           </div>
// // // // // // //         </div>
        
// // // // // // //         <div className={styles.resultSection}>
// // // // // // //           <h3>
// // // // // // //             Truth Table
// // // // // // //             {isTautology() && (
// // // // // // //               <span className={styles.tautologyBadge}>Tautology</span>
// // // // // // //             )}
// // // // // // //             {isContradiction() && (
// // // // // // //               <span className={styles.contradictionBadge}>Contradiction</span>
// // // // // // //             )}
// // // // // // //             {!isTautology() && !isContradiction() && truthTable.rows && (
// // // // // // //               <span className={styles.contingencyBadge}>Contingent</span>
// // // // // // //             )}
// // // // // // //           </h3>
          
// // // // // // //           {truthTable && truthTable.variables && truthTable.variables.length > 0 ? (
// // // // // // //             <table className={styles.truthTable}>
// // // // // // //               <thead>
// // // // // // //                 <tr>
// // // // // // //                   {truthTable.variables.map(variable => (
// // // // // // //                     <th key={variable}>{variable}</th>
// // // // // // //                   ))}
// // // // // // //                   <th>{proposition}</th>
// // // // // // //                 </tr>
// // // // // // //               </thead>
// // // // // // //               <tbody>
// // // // // // //                 {truthTable.rows.map((row, index) => (
// // // // // // //                   <tr key={index}>
// // // // // // //                     {truthTable.variables.map(variable => (
// // // // // // //                       <td key={variable} className={row.values[variable] ? styles.trueValue : styles.falseValue}>
// // // // // // //                         {row.values[variable] ? 'T' : 'F'}
// // // // // // //                       </td>
// // // // // // //                     ))}
// // // // // // //                     <td className={row.result ? styles.trueValue : styles.falseValue}>
// // // // // // //                       {row.result ? 'T' : 'F'}
// // // // // // //                     </td>
// // // // // // //                   </tr>
// // // // // // //                 ))}
// // // // // // //               </tbody>
// // // // // // //             </table>
// // // // // // //           ) : (
// // // // // // //             <div className={styles.noData}>No truth table to display</div>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default PropositionTreeBuilder;
// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import styles from './PropositionTreeBuilder.module.css';

// // // // // // const PropositionTreeBuilder = () => {
// // // // // //   const [proposition, setProposition] = useState('(P → Q) ∧ (¬P ∨ Q)');
// // // // // //   const [history, setHistory] = useState(['(P → Q) ∧ (¬P ∨ Q)']);
// // // // // //   const [historyIndex, setHistoryIndex] = useState(0);
// // // // // //   const [isValid, setIsValid] = useState(true);
// // // // // //   const [errorMessage, setErrorMessage] = useState('');
// // // // // //   const [treeData, setTreeData] = useState(null);
// // // // // //   const [truthTable, setTruthTable] = useState([]);
  
// // // // // //   // Supported operators
// // // // // //   const operators = {
// // // // // //     '∧': { precedence: 2, name: 'AND' },
// // // // // //     '∨': { precedence: 2, name: 'OR' },
// // // // // //     '→': { precedence: 1, name: 'IMPLIES' },
// // // // // //     '↔': { precedence: 1, name: 'EQUIVALENT' },
// // // // // //     '⊕': { precedence: 2, name: 'XOR' },
// // // // // //     '¬': { precedence: 3, name: 'NOT' }
// // // // // //   };

// // // // // //   // Proposition characters
// // // // // //   const propChars = ['P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
// // // // // //   // Parse the proposition and build the tree
// // // // // //   const parseProposition = (expr) => {
// // // // // //     let tokens = tokenize(expr);
// // // // // //     if (!tokens) return null;
    
// // // // // //     return buildTree(tokens);
// // // // // //   };
  
// // // // // //   // Tokenize the proposition string
// // // // // //   const tokenize = (expr) => {
// // // // // //     try {
// // // // // //       const tokens = [];
// // // // // //       let i = 0;
      
// // // // // //       while (i < expr.length) {
// // // // // //         const char = expr[i];
        
// // // // // //         if (char === ' ') {
// // // // // //           i++;
// // // // // //           continue;
// // // // // //         }
        
// // // // // //         if (char === '(' || char === ')') {
// // // // // //           tokens.push({
// // // // // //             type: char === '(' ? 'open_paren' : 'close_paren',
// // // // // //             value: char
// // // // // //           });
// // // // // //           i++;
// // // // // //           continue;
// // // // // //         }
        
// // // // // //         if (/[A-Z]/.test(char)) {
// // // // // //           tokens.push({
// // // // // //             type: 'variable',
// // // // // //             value: char
// // // // // //           });
// // // // // //           i++;
// // // // // //           continue;
// // // // // //         }
        
// // // // // //         // Check for operators
// // // // // //         let foundOperator = false;
// // // // // //         for (const op in operators) {
// // // // // //           if (expr.substring(i).startsWith(op)) {
// // // // // //             tokens.push({
// // // // // //               type: 'operator',
// // // // // //               value: op
// // // // // //             });
// // // // // //             i += op.length;
// // // // // //             foundOperator = true;
// // // // // //             break;
// // // // // //           }
// // // // // //         }
        
// // // // // //         if (!foundOperator) {
// // // // // //           throw new Error(`Unknown token: ${char} at position ${i}`);
// // // // // //         }
// // // // // //       }
      
// // // // // //       return tokens;
// // // // // //     } catch (error) {
// // // // // //       setIsValid(false);
// // // // // //       setErrorMessage(error.message);
// // // // // //       return null;
// // // // // //     }
// // // // // //   };
  
// // // // // //   // Build the syntax tree from tokens
// // // // // //   const buildTree = (tokens) => {
// // // // // //     try {
// // // // // //       // Implementation of Shunting-yard algorithm to handle operator precedence
// // // // // //       const outputQueue = [];
// // // // // //       const operatorStack = [];
      
// // // // // //       for (let i = 0; i < tokens.length; i++) {
// // // // // //         const token = tokens[i];
        
// // // // // //         switch (token.type) {
// // // // // //           case 'variable':
// // // // // //             outputQueue.push({
// // // // // //               type: 'node',
// // // // // //               nodeType: 'variable',
// // // // // //               value: token.value,
// // // // // //               children: []
// // // // // //             });
// // // // // //             break;
            
// // // // // //           case 'operator':
// // // // // //             // Handle unary operator (negation)
// // // // // //             if (token.value === '¬') {
// // // // // //               // Negation has highest precedence
// // // // // //               operatorStack.push(token);
// // // // // //             } else {
// // // // // //               // Binary operators
// // // // // //               const currentOp = operators[token.value];
              
// // // // // //               while (
// // // // // //                 operatorStack.length > 0 &&
// // // // // //                 operatorStack[operatorStack.length - 1].type === 'operator' &&
// // // // // //                 operators[operatorStack[operatorStack.length - 1].value].precedence >= currentOp.precedence
// // // // // //               ) {
// // // // // //                 const op = operatorStack.pop();
                
// // // // // //                 if (op.value === '¬') {
// // // // // //                   // Unary operator
// // // // // //                   const operand = outputQueue.pop();
// // // // // //                   outputQueue.push({
// // // // // //                     type: 'node',
// // // // // //                     nodeType: 'operator',
// // // // // //                     value: op.value,
// // // // // //                     name: operators[op.value].name,
// // // // // //                     children: [operand]
// // // // // //                   });
// // // // // //                 } else {
// // // // // //                   // Binary operator
// // // // // //                   const right = outputQueue.pop();
// // // // // //                   const left = outputQueue.pop();
// // // // // //                   outputQueue.push({
// // // // // //                     type: 'node',
// // // // // //                     nodeType: 'operator',
// // // // // //                     value: op.value,
// // // // // //                     name: operators[op.value].name,
// // // // // //                     children: [left, right]
// // // // // //                   });
// // // // // //                 }
// // // // // //               }
              
// // // // // //               operatorStack.push(token);
// // // // // //             }
// // // // // //             break;
            
// // // // // //           case 'open_paren':
// // // // // //             operatorStack.push(token);
// // // // // //             break;
            
// // // // // //           case 'close_paren':
// // // // // //             while (
// // // // // //               operatorStack.length > 0 &&
// // // // // //               operatorStack[operatorStack.length - 1].type !== 'open_paren'
// // // // // //             ) {
// // // // // //               const op = operatorStack.pop();
              
// // // // // //               if (op.value === '¬') {
// // // // // //                 // Unary operator
// // // // // //                 const operand = outputQueue.pop();
// // // // // //                 outputQueue.push({
// // // // // //                   type: 'node',
// // // // // //                   nodeType: 'operator',
// // // // // //                   value: op.value,
// // // // // //                   name: operators[op.value].name,
// // // // // //                   children: [operand]
// // // // // //                 });
// // // // // //               } else {
// // // // // //                 // Binary operator
// // // // // //                 const right = outputQueue.pop();
// // // // // //                 const left = outputQueue.pop();
// // // // // //                 outputQueue.push({
// // // // // //                   type: 'node',
// // // // // //                   nodeType: 'operator',
// // // // // //                   value: op.value,
// // // // // //                   name: operators[op.value].name,
// // // // // //                   children: [left, right]
// // // // // //                 });
// // // // // //               }
// // // // // //             }
            
// // // // // //             // Pop the open parenthesis
// // // // // //             if (operatorStack.length === 0 || operatorStack[operatorStack.length - 1].type !== 'open_paren') {
// // // // // //               throw new Error('Mismatched parentheses');
// // // // // //             }
// // // // // //             operatorStack.pop();
// // // // // //             break;
// // // // // //         }
// // // // // //       }
      
// // // // // //       // Process remaining operators
// // // // // //       while (operatorStack.length > 0) {
// // // // // //         const op = operatorStack.pop();
        
// // // // // //         if (op.type === 'open_paren' || op.type === 'close_paren') {
// // // // // //           throw new Error('Mismatched parentheses');
// // // // // //         }
        
// // // // // //         if (op.value === '¬') {
// // // // // //           // Unary operator
// // // // // //           const operand = outputQueue.pop();
// // // // // //           outputQueue.push({
// // // // // //             type: 'node',
// // // // // //             nodeType: 'operator',
// // // // // //             value: op.value,
// // // // // //             name: operators[op.value].name,
// // // // // //             children: [operand]
// // // // // //           });
// // // // // //         } else {
// // // // // //           // Binary operator
// // // // // //           const right = outputQueue.pop();
// // // // // //           const left = outputQueue.pop();
// // // // // //           outputQueue.push({
// // // // // //             type: 'node',
// // // // // //             nodeType: 'operator',
// // // // // //             value: op.value,
// // // // // //             name: operators[op.value].name,
// // // // // //             children: [left, right]
// // // // // //           });
// // // // // //         }
// // // // // //       }
      
// // // // // //       if (outputQueue.length !== 1) {
// // // // // //         throw new Error('Invalid expression');
// // // // // //       }
      
// // // // // //       setIsValid(true);
// // // // // //       setErrorMessage('');
// // // // // //       return outputQueue[0];
// // // // // //     } catch (error) {
// // // // // //       setIsValid(false);
// // // // // //       setErrorMessage(error.message);
// // // // // //       return null;
// // // // // //     }
// // // // // //   };
  
// // // // // //   // Evaluate the tree for a given variable assignment
// // // // // //   const evaluateTree = (node, assignment) => {
// // // // // //     if (!node) return null;
    
// // // // // //     if (node.nodeType === 'variable') {
// // // // // //       return assignment[node.value] || false;
// // // // // //     }
    
// // // // // //     if (node.nodeType === 'operator') {
// // // // // //       switch (node.value) {
// // // // // //         case '¬':
// // // // // //           return !evaluateTree(node.children[0], assignment);
// // // // // //         case '∧':
// // // // // //           return evaluateTree(node.children[0], assignment) && evaluateTree(node.children[1], assignment);
// // // // // //         case '∨':
// // // // // //           return evaluateTree(node.children[0], assignment) || evaluateTree(node.children[1], assignment);
// // // // // //         case '→':
// // // // // //           return !evaluateTree(node.children[0], assignment) || evaluateTree(node.children[1], assignment);
// // // // // //         case '↔':
// // // // // //           return evaluateTree(node.children[0], assignment) === evaluateTree(node.children[1], assignment);
// // // // // //         case '⊕':
// // // // // //           return evaluateTree(node.children[0], assignment) !== evaluateTree(node.children[1], assignment);
// // // // // //         default:
// // // // // //           return false;
// // // // // //       }
// // // // // //     }
    
// // // // // //     return false;
// // // // // //   };
  
// // // // // //   // Generate truth table from the tree
// // // // // //   const generateTruthTable = (tree) => {
// // // // // //     if (!tree) return [];
    
// // // // // //     // Extract unique variables
// // // // // //     const variables = new Set();
// // // // // //     const extractVariables = (node) => {
// // // // // //       if (!node) return;
      
// // // // // //       if (node.nodeType === 'variable') {
// // // // // //         variables.add(node.value);
// // // // // //       }
      
// // // // // //       if (node.children) {
// // // // // //         for (const child of node.children) {
// // // // // //           extractVariables(child);
// // // // // //         }
// // // // // //       }
// // // // // //     };
    
// // // // // //     extractVariables(tree);
// // // // // //     const variableArray = Array.from(variables).sort();
    
// // // // // //     // Generate all possible variable assignments
// // // // // //     const truthTable = [];
// // // // // //     const totalRows = Math.pow(2, variableArray.length);
    
// // // // // //     for (let i = 0; i < totalRows; i++) {
// // // // // //       const assignment = {};
// // // // // //       const row = { values: {} };
      
// // // // // //       for (let j = 0; j < variableArray.length; j++) {
// // // // // //         const variable = variableArray[j];
// // // // // //         const value = Boolean((i >> j) & 1);
// // // // // //         assignment[variable] = value;
// // // // // //         row.values[variable] = value;
// // // // // //       }
      
// // // // // //       row.result = evaluateTree(tree, assignment);
// // // // // //       truthTable.push(row);
// // // // // //     }
    
// // // // // //     return { variables: variableArray, rows: truthTable };
// // // // // //   };
  
// // // // // //   // Render the tree node
// // // // // //   const renderTreeNode = (node, depth = 0, isLeft = false, isRight = false) => {
// // // // // //     if (!node) return null;
    
// // // // // //     const nodeClass = `${styles.treeNode} ${
// // // // // //       node.nodeType === 'operator' ? styles.operatorNode : styles.variableNode
// // // // // //     }`;
    
// // // // // //     return (
// // // // // //       <div className={styles.nodeContainer} style={{ marginLeft: `${depth * 20}px` }}>
// // // // // //         <div className={nodeClass}>
// // // // // //           {node.value}
// // // // // //           {node.nodeType === 'operator' && <span className={styles.operatorName}>{node.name}</span>}
// // // // // //         </div>
        
// // // // // //         {node.children && node.children.length > 0 && (
// // // // // //           <div className={styles.childrenContainer}>
// // // // // //             {node.children.map((child, index) => (
// // // // // //               <div key={index} className={styles.childNode}>
// // // // // //                 {renderTreeNode(
// // // // // //                   child,
// // // // // //                   depth + 1,
// // // // // //                   index === 0,
// // // // // //                   index === node.children.length - 1
// // // // // //                 )}
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     );
// // // // // //   };
  
// // // // // //   // Handle input changes
// // // // // //   const handleInputChange = (e) => {
// // // // // //     const newValue = e.target.value;
// // // // // //     setProposition(newValue);
    
// // // // // //     // Add to history
// // // // // //     if (newValue !== history[historyIndex]) {
// // // // // //       const newHistory = history.slice(0, historyIndex + 1);
// // // // // //       newHistory.push(newValue);
// // // // // //       setHistory(newHistory);
// // // // // //       setHistoryIndex(newHistory.length - 1);
// // // // // //     }
// // // // // //   };

// // // // // //   // Handle character insertion
// // // // // //   const handleCharacterClick = (char) => {
// // // // // //     const newValue = proposition + char;
// // // // // //     setProposition(newValue);
    
// // // // // //     // Add to history
// // // // // //     const newHistory = history.slice(0, historyIndex + 1);
// // // // // //     newHistory.push(newValue);
// // // // // //     setHistory(newHistory);
// // // // // //     setHistoryIndex(newHistory.length - 1);
// // // // // //   };

// // // // // //   // Handle undo
// // // // // //   const handleUndo = () => {
// // // // // //     if (historyIndex > 0) {
// // // // // //       setHistoryIndex(historyIndex - 1);
// // // // // //       setProposition(history[historyIndex - 1]);
// // // // // //     }
// // // // // //   };

// // // // // //   // Handle reset
// // // // // //   const handleReset = () => {
// // // // // //     setProposition('');
// // // // // //     const newHistory = [...history, ''];
// // // // // //     setHistory(newHistory);
// // // // // //     setHistoryIndex(newHistory.length - 1);
// // // // // //   };
  
// // // // // //   // Analyze the proposition
// // // // // //   const analyzeProposition = () => {
// // // // // //     const tree = parseProposition(proposition);
// // // // // //     setTreeData(tree);
    
// // // // // //     if (tree) {
// // // // // //       const table = generateTruthTable(tree);
// // // // // //       setTruthTable(table);
// // // // // //     } else {
// // // // // //       setTruthTable([]);
// // // // // //     }
// // // // // //   };
  
// // // // // //   // Check if the proposition is a tautology
// // // // // //   const isTautology = () => {
// // // // // //     if (!truthTable || !truthTable.rows) return false;
// // // // // //     return truthTable.rows.every(row => row.result === true);
// // // // // //   };
  
// // // // // //   // Check if the proposition is a contradiction
// // // // // //   const isContradiction = () => {
// // // // // //     if (!truthTable || !truthTable.rows) return false;
// // // // // //     return truthTable.rows.every(row => row.result === false);
// // // // // //   };
  
// // // // // //   // Analyze on proposition change
// // // // // //   useEffect(() => {
// // // // // //     analyzeProposition();
// // // // // //   }, [proposition]);
  
// // // // // //   return (
// // // // // //     <div className={styles.container}>
// // // // // //       <div className={styles.inputSection}>
// // // // // //         <h2>Proposition Analyzer & Tree Builder</h2>
// // // // // //         <div className={styles.inputContainer}>
// // // // // //           <input
// // // // // //             type="text"
// // // // // //             value={proposition}
// // // // // //             onChange={handleInputChange}
// // // // // //             className={`${styles.propositionInput} ${!isValid ? styles.error : ''}`}
// // // // // //             placeholder="Enter a logical proposition (e.g., P ∧ (Q ∨ ¬R))"
// // // // // //           />
// // // // // //           <div className={styles.buttonContainer}>
// // // // // //             <button onClick={handleUndo} className={styles.functionButton} disabled={historyIndex <= 0}>
// // // // // //               ↩
// // // // // //             </button>
// // // // // //             <button onClick={handleReset} className={styles.clearButton}>
// // // // // //               ✕
// // // // // //             </button>
// // // // // //             <button onClick={analyzeProposition} className={styles.analyzeButton}>
// // // // // //               Analyze
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>
        
// // // // // //         <div className={styles.charactersRow}>
// // // // // //           {propChars.map((char) => (
// // // // // //             <button
// // // // // //               key={char}
// // // // // //               className={styles.charButton}
// // // // // //               onClick={() => handleCharacterClick(char)}
// // // // // //             >
// // // // // //               {char}
// // // // // //             </button>
// // // // // //           ))}
// // // // // //         </div>
        
// // // // // //         {!isValid && (
// // // // // //           <div className={styles.errorMessage}>
// // // // // //             Error: {errorMessage}
// // // // // //           </div>
// // // // // //         )}
        
// // // // // //         <div className={styles.operatorsGuide}>
// // // // // //           <div className={styles.operatorsList}>
// // // // // //             {Object.entries(operators).map(([symbol, details]) => (
// // // // // //               <button
// // // // // //                 key={symbol}
// // // // // //                 className={styles.operatorButton}
// // // // // //                 onClick={() => handleCharacterClick(symbol)}
// // // // // //               >
// // // // // //                 {symbol} ({details.name})
// // // // // //               </button>
// // // // // //             ))}
// // // // // //             <button
// // // // // //               className={styles.operatorButton}
// // // // // //               onClick={() => handleCharacterClick('(')}
// // // // // //             >
// // // // // //               (
// // // // // //             </button>
// // // // // //             <button
// // // // // //               className={styles.operatorButton}
// // // // // //               onClick={() => handleCharacterClick(')')}
// // // // // //             >
// // // // // //               )
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
      
// // // // // //       <div className={styles.resultsContainer}>
// // // // // //         <div className={styles.resultSection}>
// // // // // //           <h3>Syntax Tree</h3>
// // // // // //           <div className={styles.treeContainer}>
// // // // // //             {treeData ? (
// // // // // //               renderTreeNode(treeData)
// // // // // //             ) : (
// // // // // //               <div className={styles.noData}>No valid tree to display</div>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         </div>
        
// // // // // //         <div className={styles.resultSection}>
// // // // // //           <h3>
// // // // // //             Truth Table
// // // // // //             {isTautology() && (
// // // // // //               <span className={styles.tautologyBadge}>Tautology</span>
// // // // // //             )}
// // // // // //             {isContradiction() && (
// // // // // //               <span className={styles.contradictionBadge}>Contradiction</span>
// // // // // //             )}
// // // // // //             {!isTautology() && !isContradiction() && truthTable.rows && (
// // // // // //               <span className={styles.contingencyBadge}>Contingent</span>
// // // // // //             )}
// // // // // //           </h3>
          
// // // // // //           {truthTable && truthTable.variables && truthTable.variables.length > 0 ? (
// // // // // //             <table className={styles.truthTable}>
// // // // // //               <thead>
// // // // // //                 <tr>
// // // // // //                   {truthTable.variables.map(variable => (
// // // // // //                     <th key={variable}>{variable}</th>
// // // // // //                   ))}
// // // // // //                   <th>{proposition}</th>
// // // // // //                 </tr>
// // // // // //               </thead>
// // // // // //               <tbody>
// // // // // //                 {truthTable.rows.map((row, index) => (
// // // // // //                   <tr key={index}>
// // // // // //                     {truthTable.variables.map(variable => (
// // // // // //                       <td key={variable} className={row.values[variable] ? styles.trueValue : styles.falseValue}>
// // // // // //                         {row.values[variable] ? 'T' : 'F'}
// // // // // //                       </td>
// // // // // //                     ))}
// // // // // //                     <td className={row.result ? styles.trueValue : styles.falseValue}>
// // // // // //                       {row.result ? 'T' : 'F'}
// // // // // //                     </td>
// // // // // //                   </tr>
// // // // // //                 ))}
// // // // // //               </tbody>
// // // // // //             </table>
// // // // // //           ) : (
// // // // // //             <div className={styles.noData}>No truth table to display</div>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default PropositionTreeBuilder;

// // // // // import React, { useState, useEffect } from 'react';
// // // // // import styles from './PropositionTreeBuilder.module.css';

// // // // // const PropositionTreeBuilder = () => {
// // // // //   const [proposition, setProposition] = useState('(P → Q) ∧ (¬P ∨ Q)');
// // // // //   const [history, setHistory] = useState(['(P → Q) ∧ (¬P ∨ Q)']);
// // // // //   const [historyIndex, setHistoryIndex] = useState(0);
// // // // //   const [isValid, setIsValid] = useState(true);
// // // // //   const [errorMessage, setErrorMessage] = useState('');
// // // // //   const [treeData, setTreeData] = useState(null);
// // // // //   const [truthTable, setTruthTable] = useState([]);
  
// // // // //   // Supported operators
// // // // //   const operators = {
// // // // //     '∧': { precedence: 2, name: 'AND' },
// // // // //     '∨': { precedence: 2, name: 'OR' },
// // // // //     '→': { precedence: 1, name: 'IMPLIES' },
// // // // //     '↔': { precedence: 1, name: 'EQUIVALENT' },
// // // // //     '⊕': { precedence: 2, name: 'XOR' },
// // // // //     '¬': { precedence: 3, name: 'NOT' }
// // // // //   };

// // // // //   // Proposition characters
// // // // //   const propChars = ['P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
// // // // //   // Parse the proposition and build the tree
// // // // //   const parseProposition = (expr) => {
// // // // //     let tokens = tokenize(expr);
// // // // //     if (!tokens) return null;
    
// // // // //     return buildTree(tokens);
// // // // //   };
  
// // // // //   // Tokenize the proposition string
// // // // //   const tokenize = (expr) => {
// // // // //     try {
// // // // //       const tokens = [];
// // // // //       let i = 0;
      
// // // // //       while (i < expr.length) {
// // // // //         const char = expr[i];
        
// // // // //         if (char === ' ') {
// // // // //           i++;
// // // // //           continue;
// // // // //         }
        
// // // // //         if (char === '(' || char === ')') {
// // // // //           tokens.push({
// // // // //             type: char === '(' ? 'open_paren' : 'close_paren',
// // // // //             value: char
// // // // //           });
// // // // //           i++;
// // // // //           continue;
// // // // //         }
        
// // // // //         if (/[A-Z]/.test(char)) {
// // // // //           tokens.push({
// // // // //             type: 'variable',
// // // // //             value: char
// // // // //           });
// // // // //           i++;
// // // // //           continue;
// // // // //         }
        
// // // // //         // Check for operators
// // // // //         let foundOperator = false;
// // // // //         for (const op in operators) {
// // // // //           if (expr.substring(i).startsWith(op)) {
// // // // //             tokens.push({
// // // // //               type: 'operator',
// // // // //               value: op
// // // // //             });
// // // // //             i += op.length;
// // // // //             foundOperator = true;
// // // // //             break;
// // // // //           }
// // // // //         }
        
// // // // //         if (!foundOperator) {
// // // // //           throw new Error(`Unknown token: ${char} at position ${i}`);
// // // // //         }
// // // // //       }
      
// // // // //       return tokens;
// // // // //     } catch (error) {
// // // // //       setIsValid(false);
// // // // //       setErrorMessage(error.message);
// // // // //       return null;
// // // // //     }
// // // // //   };
  
// // // // //   // Build the syntax tree from tokens
// // // // //   const buildTree = (tokens) => {
// // // // //     try {
// // // // //       // Implementation of Shunting-yard algorithm to handle operator precedence
// // // // //       const outputQueue = [];
// // // // //       const operatorStack = [];
      
// // // // //       for (let i = 0; i < tokens.length; i++) {
// // // // //         const token = tokens[i];
        
// // // // //         switch (token.type) {
// // // // //           case 'variable':
// // // // //             outputQueue.push({
// // // // //               type: 'node',
// // // // //               nodeType: 'variable',
// // // // //               value: token.value,
// // // // //               children: []
// // // // //             });
// // // // //             break;
            
// // // // //           case 'operator':
// // // // //             // Handle unary operator (negation)
// // // // //             if (token.value === '¬') {
// // // // //               // Negation has highest precedence
// // // // //               operatorStack.push(token);
// // // // //             } else {
// // // // //               // Binary operators
// // // // //               const currentOp = operators[token.value];
              
// // // // //               while (
// // // // //                 operatorStack.length > 0 &&
// // // // //                 operatorStack[operatorStack.length - 1].type === 'operator' &&
// // // // //                 operators[operatorStack[operatorStack.length - 1].value].precedence >= currentOp.precedence
// // // // //               ) {
// // // // //                 const op = operatorStack.pop();
                
// // // // //                 if (op.value === '¬') {
// // // // //                   // Unary operator
// // // // //                   const operand = outputQueue.pop();
// // // // //                   outputQueue.push({
// // // // //                     type: 'node',
// // // // //                     nodeType: 'operator',
// // // // //                     value: op.value,
// // // // //                     name: operators[op.value].name,
// // // // //                     children: [operand]
// // // // //                   });
// // // // //                 } else {
// // // // //                   // Binary operator
// // // // //                   const right = outputQueue.pop();
// // // // //                   const left = outputQueue.pop();
// // // // //                   outputQueue.push({
// // // // //                     type: 'node',
// // // // //                     nodeType: 'operator',
// // // // //                     value: op.value,
// // // // //                     name: operators[op.value].name,
// // // // //                     children: [left, right]
// // // // //                   });
// // // // //                 }
// // // // //               }
              
// // // // //               operatorStack.push(token);
// // // // //             }
// // // // //             break;
            
// // // // //           case 'open_paren':
// // // // //             operatorStack.push(token);
// // // // //             break;
            
// // // // //           case 'close_paren':
// // // // //             while (
// // // // //               operatorStack.length > 0 &&
// // // // //               operatorStack[operatorStack.length - 1].type !== 'open_paren'
// // // // //             ) {
// // // // //               const op = operatorStack.pop();
              
// // // // //               if (op.value === '¬') {
// // // // //                 // Unary operator
// // // // //                 const operand = outputQueue.pop();
// // // // //                 outputQueue.push({
// // // // //                   type: 'node',
// // // // //                   nodeType: 'operator',
// // // // //                   value: op.value,
// // // // //                   name: operators[op.value].name,
// // // // //                   children: [operand]
// // // // //                 });
// // // // //               } else {
// // // // //                 // Binary operator
// // // // //                 const right = outputQueue.pop();
// // // // //                 const left = outputQueue.pop();
// // // // //                 outputQueue.push({
// // // // //                   type: 'node',
// // // // //                   nodeType: 'operator',
// // // // //                   value: op.value,
// // // // //                   name: operators[op.value].name,
// // // // //                   children: [left, right]
// // // // //                 });
// // // // //               }
// // // // //             }
            
// // // // //             // Pop the open parenthesis
// // // // //             if (operatorStack.length === 0 || operatorStack[operatorStack.length - 1].type !== 'open_paren') {
// // // // //               throw new Error('Mismatched parentheses');
// // // // //             }
// // // // //             operatorStack.pop();
// // // // //             break;
// // // // //         }
// // // // //       }
      
// // // // //       // Process remaining operators
// // // // //       while (operatorStack.length > 0) {
// // // // //         const op = operatorStack.pop();
        
// // // // //         if (op.type === 'open_paren' || op.type === 'close_paren') {
// // // // //           throw new Error('Mismatched parentheses');
// // // // //         }
        
// // // // //         if (op.value === '¬') {
// // // // //           // Unary operator
// // // // //           const operand = outputQueue.pop();
// // // // //           outputQueue.push({
// // // // //             type: 'node',
// // // // //             nodeType: 'operator',
// // // // //             value: op.value,
// // // // //             name: operators[op.value].name,
// // // // //             children: [operand]
// // // // //           });
// // // // //         } else {
// // // // //           // Binary operator
// // // // //           const right = outputQueue.pop();
// // // // //           const left = outputQueue.pop();
// // // // //           outputQueue.push({
// // // // //             type: 'node',
// // // // //             nodeType: 'operator',
// // // // //             value: op.value,
// // // // //             name: operators[op.value].name,
// // // // //             children: [left, right]
// // // // //           });
// // // // //         }
// // // // //       }
      
// // // // //       if (outputQueue.length !== 1) {
// // // // //         throw new Error('Invalid expression');
// // // // //       }
      
// // // // //       setIsValid(true);
// // // // //       setErrorMessage('');
// // // // //       return outputQueue[0];
// // // // //     } catch (error) {
// // // // //       setIsValid(false);
// // // // //       setErrorMessage(error.message);
// // // // //       return null;
// // // // //     }
// // // // //   };
  
// // // // //   // Evaluate the tree for a given variable assignment
// // // // //   const evaluateTree = (node, assignment) => {
// // // // //     if (!node) return null;
    
// // // // //     if (node.nodeType === 'variable') {
// // // // //       return assignment[node.value] || false;
// // // // //     }
    
// // // // //     if (node.nodeType === 'operator') {
// // // // //       switch (node.value) {
// // // // //         case '¬':
// // // // //           return !evaluateTree(node.children[0], assignment);
// // // // //         case '∧':
// // // // //           return evaluateTree(node.children[0], assignment) && evaluateTree(node.children[1], assignment);
// // // // //         case '∨':
// // // // //           return evaluateTree(node.children[0], assignment) || evaluateTree(node.children[1], assignment);
// // // // //         case '→':
// // // // //           return !evaluateTree(node.children[0], assignment) || evaluateTree(node.children[1], assignment);
// // // // //         case '↔':
// // // // //           return evaluateTree(node.children[0], assignment) === evaluateTree(node.children[1], assignment);
// // // // //         case '⊕':
// // // // //           return evaluateTree(node.children[0], assignment) !== evaluateTree(node.children[1], assignment);
// // // // //         default:
// // // // //           return false;
// // // // //       }
// // // // //     }
    
// // // // //     return false;
// // // // //   };
  
// // // // //   // Generate truth table from the tree
// // // // //   const generateTruthTable = (tree) => {
// // // // //     if (!tree) return [];
    
// // // // //     // Extract unique variables
// // // // //     const variables = new Set();
// // // // //     const extractVariables = (node) => {
// // // // //       if (!node) return;
      
// // // // //       if (node.nodeType === 'variable') {
// // // // //         variables.add(node.value);
// // // // //       }
      
// // // // //       if (node.children) {
// // // // //         for (const child of node.children) {
// // // // //           extractVariables(child);
// // // // //         }
// // // // //       }
// // // // //     };
    
// // // // //     extractVariables(tree);
// // // // //     const variableArray = Array.from(variables).sort();
    
// // // // //     // Generate all possible variable assignments
// // // // //     const truthTable = [];
// // // // //     const totalRows = Math.pow(2, variableArray.length);
    
// // // // //     for (let i = 0; i < totalRows; i++) {
// // // // //       const assignment = {};
// // // // //       const row = { values: {} };
      
// // // // //       for (let j = 0; j < variableArray.length; j++) {
// // // // //         const variable = variableArray[j];
// // // // //         const value = Boolean((i >> j) & 1);
// // // // //         assignment[variable] = value;
// // // // //         row.values[variable] = value;
// // // // //       }
      
// // // // //       row.result = evaluateTree(tree, assignment);
// // // // //       truthTable.push(row);
// // // // //     }
    
// // // // //     return { variables: variableArray, rows: truthTable };
// // // // //   };
  
// // // // //   // Render the tree node vertically
// // // // //   const renderTreeNode = (node, index = 0) => {
// // // // //     if (!node) return null;
    
// // // // //     const nodeClass = `${styles.treeNode} ${
// // // // //       node.nodeType === 'operator' ? styles.operatorNode : styles.variableNode
// // // // //     }`;
    
// // // // //     // If no children, render as leaf node
// // // // //     if (!node.children || node.children.length === 0) {
// // // // //       return (
// // // // //         <div className={styles.treeNodeWrapper}>
// // // // //           <div className={nodeClass}>
// // // // //             {node.value}
// // // // //             {node.nodeType === 'operator' && <span className={styles.operatorName}>{node.name}</span>}
// // // // //           </div>
// // // // //         </div>
// // // // //       );
// // // // //     }
    
// // // // //     // If it has children, render with branches
// // // // //     return (
// // // // //       <div className={styles.treeNodeWithChildren}>
// // // // //         <div className={styles.treeNodeWrapper}>
// // // // //           <div className={nodeClass}>
// // // // //             {node.value}
// // // // //             {node.nodeType === 'operator' && <span className={styles.operatorName}>{node.name}</span>}
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className={styles.branchContainer}>
// // // // //           {node.children.map((child, idx) => (
// // // // //             <div key={idx} className={styles.branch}>
// // // // //               <div className={styles.branchLine}></div>
// // // // //               {renderTreeNode(child, idx)}
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   };
  
// // // // //   // Handle input changes
// // // // //   const handleInputChange = (e) => {
// // // // //     const newValue = e.target.value;
// // // // //     setProposition(newValue);
    
// // // // //     // Add to history
// // // // //     if (newValue !== history[historyIndex]) {
// // // // //       const newHistory = history.slice(0, historyIndex + 1);
// // // // //       newHistory.push(newValue);
// // // // //       setHistory(newHistory);
// // // // //       setHistoryIndex(newHistory.length - 1);
// // // // //     }
// // // // //   };

// // // // //   // Handle character insertion
// // // // //   const handleCharacterClick = (char) => {
// // // // //     const newValue = proposition + char;
// // // // //     setProposition(newValue);
    
// // // // //     // Add to history
// // // // //     const newHistory = history.slice(0, historyIndex + 1);
// // // // //     newHistory.push(newValue);
// // // // //     setHistory(newHistory);
// // // // //     setHistoryIndex(newHistory.length - 1);
// // // // //   };

// // // // //   // Handle undo
// // // // //   const handleUndo = () => {
// // // // //     if (historyIndex > 0) {
// // // // //       setHistoryIndex(historyIndex - 1);
// // // // //       setProposition(history[historyIndex - 1]);
// // // // //     }
// // // // //   };

// // // // //   // Handle reset
// // // // //   const handleReset = () => {
// // // // //     setProposition('');
// // // // //     const newHistory = [...history, ''];
// // // // //     setHistory(newHistory);
// // // // //     setHistoryIndex(newHistory.length - 1);
// // // // //   };
  
// // // // //   // Analyze the proposition
// // // // //   const analyzeProposition = () => {
// // // // //     const tree = parseProposition(proposition);
// // // // //     setTreeData(tree);
    
// // // // //     if (tree) {
// // // // //       const table = generateTruthTable(tree);
// // // // //       setTruthTable(table);
// // // // //     } else {
// // // // //       setTruthTable([]);
// // // // //     }
// // // // //   };
  
// // // // //   // Check if the proposition is a tautology
// // // // //   const isTautology = () => {
// // // // //     if (!truthTable || !truthTable.rows) return false;
// // // // //     return truthTable.rows.every(row => row.result === true);
// // // // //   };
  
// // // // //   // Check if the proposition is a contradiction
// // // // //   const isContradiction = () => {
// // // // //     if (!truthTable || !truthTable.rows) return false;
// // // // //     return truthTable.rows.every(row => row.result === false);
// // // // //   };
  
// // // // //   // Analyze on proposition change
// // // // //   useEffect(() => {
// // // // //     analyzeProposition();
// // // // //   }, [proposition]);
  
// // // // //   return (
// // // // //     <div className={styles.container}>
// // // // //       <div className={styles.inputSection}>
// // // // //         <h2>Proposition Analyzer & Tree Builder</h2>
// // // // //         <div className={styles.inputContainer}>
// // // // //           <input
// // // // //             type="text"
// // // // //             value={proposition}
// // // // //             onChange={handleInputChange}
// // // // //             className={`${styles.propositionInput} ${!isValid ? styles.error : ''}`}
// // // // //             placeholder="Enter a logical proposition (e.g., P ∧ (Q ∨ ¬R))"
// // // // //           />
// // // // //           <div className={styles.buttonContainer}>
// // // // //             <button onClick={handleUndo} className={styles.functionButton} disabled={historyIndex <= 0}>
// // // // //               ↩
// // // // //             </button>
// // // // //             <button onClick={handleReset} className={styles.clearButton}>
// // // // //               ✕
// // // // //             </button>
// // // // //             <button onClick={analyzeProposition} className={styles.analyzeButton}>
// // // // //               Analyze
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
        
// // // // //         <div className={styles.charactersRow}>
// // // // //           {propChars.map((char) => (
// // // // //             <button
// // // // //               key={char}
// // // // //               className={styles.charButton}
// // // // //               onClick={() => handleCharacterClick(char)}
// // // // //             >
// // // // //               {char}
// // // // //             </button>
// // // // //           ))}
// // // // //         </div>
        
// // // // //         {!isValid && (
// // // // //           <div className={styles.errorMessage}>
// // // // //             Error: {errorMessage}
// // // // //           </div>
// // // // //         )}
        
// // // // //         <div className={styles.operatorsGuide}>
// // // // //           <div className={styles.operatorsList}>
// // // // //             {Object.entries(operators).map(([symbol, details]) => (
// // // // //               <button
// // // // //                 key={symbol}
// // // // //                 className={styles.operatorButton}
// // // // //                 onClick={() => handleCharacterClick(symbol)}
// // // // //               >
// // // // //                 {symbol} ({details.name})
// // // // //               </button>
// // // // //             ))}
// // // // //             <button
// // // // //               className={styles.operatorButton}
// // // // //               onClick={() => handleCharacterClick('(')}
// // // // //             >
// // // // //               (
// // // // //             </button>
// // // // //             <button
// // // // //               className={styles.operatorButton}
// // // // //               onClick={() => handleCharacterClick(')')}
// // // // //             >
// // // // //               )
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
      
// // // // //       <div className={styles.resultsContainer}>
// // // // //         <div className={styles.resultSection}>
// // // // //           <h3>Syntax Tree</h3>
// // // // //           <div className={styles.treeContainer}>
// // // // //             {treeData ? (
// // // // //               <div className={styles.verticalTreeDisplay}>
// // // // //                 {renderTreeNode(treeData)}
// // // // //               </div>
// // // // //             ) : (
// // // // //               <div className={styles.noData}>No valid tree to display</div>
// // // // //             )}
// // // // //           </div>
// // // // //         </div>
        
// // // // //         <div className={styles.resultSection}>
// // // // //           <h3>
// // // // //             Truth Table
// // // // //             {isTautology() && (
// // // // //               <span className={styles.tautologyBadge}>Tautology</span>
// // // // //             )}
// // // // //             {isContradiction() && (
// // // // //               <span className={styles.contradictionBadge}>Contradiction</span>
// // // // //             )}
// // // // //             {!isTautology() && !isContradiction() && truthTable.rows && (
// // // // //               <span className={styles.contingencyBadge}>Contingent</span>
// // // // //             )}
// // // // //           </h3>
          
// // // // //           {truthTable && truthTable.variables && truthTable.variables.length > 0 ? (
// // // // //             <table className={styles.truthTable}>
// // // // //               <thead>
// // // // //                 <tr>
// // // // //                   {truthTable.variables.map(variable => (
// // // // //                     <th key={variable}>{variable}</th>
// // // // //                   ))}
// // // // //                   <th>{proposition}</th>
// // // // //                 </tr>
// // // // //               </thead>
// // // // //               <tbody>
// // // // //                 {truthTable.rows.map((row, index) => (
// // // // //                   <tr key={index}>
// // // // //                     {truthTable.variables.map(variable => (
// // // // //                       <td key={variable} className={row.values[variable] ? styles.trueValue : styles.falseValue}>
// // // // //                         {row.values[variable] ? 'T' : 'F'}
// // // // //                       </td>
// // // // //                     ))}
// // // // //                     <td className={row.result ? styles.trueValue : styles.falseValue}>
// // // // //                       {row.result ? 'T' : 'F'}
// // // // //                     </td>
// // // // //                   </tr>
// // // // //                 ))}
// // // // //               </tbody>
// // // // //             </table>
// // // // //           ) : (
// // // // //             <div className={styles.noData}>No truth table to display</div>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default PropositionTreeBuilder;


// // // // import React, { useState, useEffect } from 'react';
// // // // import styles from './PropositionTreeBuilder.module.css';

// // // // const PropositionTreeBuilder = () => {
// // // //   const [proposition, setProposition] = useState('(P → Q) ∧ (¬P ∨ Q)');
// // // //   const [history, setHistory] = useState(['(P → Q) ∧ (¬P ∨ Q)']);
// // // //   const [historyIndex, setHistoryIndex] = useState(0);
// // // //   const [isValid, setIsValid] = useState(true);
// // // //   const [errorMessage, setErrorMessage] = useState('');
// // // //   const [treeData, setTreeData] = useState(null);
// // // //   const [truthTable, setTruthTable] = useState([]);
  
// // // //   // Supported operators
// // // //   const operators = {
// // // //     '∧': { precedence: 2, name: 'AND' },
// // // //     '∨': { precedence: 2, name: 'OR' },
// // // //     '→': { precedence: 1, name: 'IMPLIES' },
// // // //     '↔': { precedence: 1, name: 'EQUIVALENT' },
// // // //     '⊕': { precedence: 2, name: 'XOR' },
// // // //     '¬': { precedence: 3, name: 'NOT' }
// // // //   };

// // // //   // Proposition characters
// // // //   const propChars = ['P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
// // // //   // Parse the proposition and build the tree
// // // //   const parseProposition = (expr) => {
// // // //     let tokens = tokenize(expr);
// // // //     if (!tokens) return null;
    
// // // //     return buildTree(tokens);
// // // //   };
  
// // // //   // Tokenize the proposition string
// // // //   const tokenize = (expr) => {
// // // //     try {
// // // //       const tokens = [];
// // // //       let i = 0;
      
// // // //       while (i < expr.length) {
// // // //         const char = expr[i];
        
// // // //         if (char === ' ') {
// // // //           i++;
// // // //           continue;
// // // //         }
        
// // // //         if (char === '(' || char === ')') {
// // // //           tokens.push({
// // // //             type: char === '(' ? 'open_paren' : 'close_paren',
// // // //             value: char
// // // //           });
// // // //           i++;
// // // //           continue;
// // // //         }
        
// // // //         if (/[A-Z]/.test(char)) {
// // // //           tokens.push({
// // // //             type: 'variable',
// // // //             value: char
// // // //           });
// // // //           i++;
// // // //           continue;
// // // //         }
        
// // // //         // Check for operators
// // // //         let foundOperator = false;
// // // //         for (const op in operators) {
// // // //           if (expr.substring(i).startsWith(op)) {
// // // //             tokens.push({
// // // //               type: 'operator',
// // // //               value: op
// // // //             });
// // // //             i += op.length;
// // // //             foundOperator = true;
// // // //             break;
// // // //           }
// // // //         }
        
// // // //         if (!foundOperator) {
// // // //           throw new Error(`Unknown token: ${char} at position ${i}`);
// // // //         }
// // // //       }
      
// // // //       return tokens;
// // // //     } catch (error) {
// // // //       setIsValid(false);
// // // //       setErrorMessage(error.message);
// // // //       return null;
// // // //     }
// // // //   };
  
// // // //   // Build the syntax tree from tokens
// // // //   const buildTree = (tokens) => {
// // // //     try {
// // // //       // Implementation of Shunting-yard algorithm to handle operator precedence
// // // //       const outputQueue = [];
// // // //       const operatorStack = [];
      
// // // //       for (let i = 0; i < tokens.length; i++) {
// // // //         const token = tokens[i];
        
// // // //         switch (token.type) {
// // // //           case 'variable':
// // // //             outputQueue.push({
// // // //               type: 'node',
// // // //               nodeType: 'variable',
// // // //               value: token.value,
// // // //               expression: token.value,
// // // //               children: []
// // // //             });
// // // //             break;
            
// // // //           case 'operator':
// // // //             // Handle unary operator (negation)
// // // //             if (token.value === '¬') {
// // // //               // Negation has highest precedence
// // // //               operatorStack.push(token);
// // // //             } else {
// // // //               // Binary operators
// // // //               const currentOp = operators[token.value];
              
// // // //               while (
// // // //                 operatorStack.length > 0 &&
// // // //                 operatorStack[operatorStack.length - 1].type === 'operator' &&
// // // //                 operators[operatorStack[operatorStack.length - 1].value].precedence >= currentOp.precedence
// // // //               ) {
// // // //                 const op = operatorStack.pop();
                
// // // //                 if (op.value === '¬') {
// // // //                   // Unary operator
// // // //                   const operand = outputQueue.pop();
// // // //                   const expression = `${op.value}${operand.expression}`;
// // // //                   outputQueue.push({
// // // //                     type: 'node',
// // // //                     nodeType: 'operator',
// // // //                     value: op.value,
// // // //                     name: operators[op.value].name,
// // // //                     expression: expression,
// // // //                     children: [operand]
// // // //                   });
// // // //                 } else {
// // // //                   // Binary operator
// // // //                   const right = outputQueue.pop();
// // // //                   const left = outputQueue.pop();
// // // //                   const expression = `(${left.expression} ${op.value} ${right.expression})`;
// // // //                   outputQueue.push({
// // // //                     type: 'node',
// // // //                     nodeType: 'operator',
// // // //                     value: op.value,
// // // //                     name: operators[op.value].name,
// // // //                     expression: expression,
// // // //                     children: [left, right]
// // // //                   });
// // // //                 }
// // // //               }
              
// // // //               operatorStack.push(token);
// // // //             }
// // // //             break;
            
// // // //           case 'open_paren':
// // // //             operatorStack.push(token);
// // // //             break;
            
// // // //           case 'close_paren':
// // // //             while (
// // // //               operatorStack.length > 0 &&
// // // //               operatorStack[operatorStack.length - 1].type !== 'open_paren'
// // // //             ) {
// // // //               const op = operatorStack.pop();
              
// // // //               if (op.value === '¬') {
// // // //                 // Unary operator
// // // //                 const operand = outputQueue.pop();
// // // //                 const expression = `${op.value}${operand.expression}`;
// // // //                 outputQueue.push({
// // // //                   type: 'node',
// // // //                   nodeType: 'operator',
// // // //                   value: op.value,
// // // //                   name: operators[op.value].name,
// // // //                   expression: expression,
// // // //                   children: [operand]
// // // //                 });
// // // //               } else {
// // // //                 // Binary operator
// // // //                 const right = outputQueue.pop();
// // // //                 const left = outputQueue.pop();
// // // //                 const expression = `(${left.expression} ${op.value} ${right.expression})`;
// // // //                 outputQueue.push({
// // // //                   type: 'node',
// // // //                   nodeType: 'operator',
// // // //                   value: op.value,
// // // //                   name: operators[op.value].name,
// // // //                   expression: expression,
// // // //                   children: [left, right]
// // // //                 });
// // // //               }
// // // //             }
            
// // // //             // Pop the open parenthesis
// // // //             if (operatorStack.length === 0 || operatorStack[operatorStack.length - 1].type !== 'open_paren') {
// // // //               throw new Error('Mismatched parentheses');
// // // //             }
// // // //             operatorStack.pop();
// // // //             break;
// // // //         }
// // // //       }
      
// // // //       // Process remaining operators
// // // //       while (operatorStack.length > 0) {
// // // //         const op = operatorStack.pop();
        
// // // //         if (op.type === 'open_paren' || op.type === 'close_paren') {
// // // //           throw new Error('Mismatched parentheses');
// // // //         }
        
// // // //         if (op.value === '¬') {
// // // //           // Unary operator
// // // //           const operand = outputQueue.pop();
// // // //           const expression = `${op.value}${operand.expression}`;
// // // //           outputQueue.push({
// // // //             type: 'node',
// // // //             nodeType: 'operator',
// // // //             value: op.value,
// // // //             name: operators[op.value].name,
// // // //             expression: expression,
// // // //             children: [operand]
// // // //           });
// // // //         } else {
// // // //           // Binary operator
// // // //           const right = outputQueue.pop();
// // // //           const left = outputQueue.pop();
// // // //           const expression = `(${left.expression} ${op.value} ${right.expression})`;
// // // //           outputQueue.push({
// // // //             type: 'node',
// // // //             nodeType: 'operator',
// // // //             value: op.value,
// // // //             name: operators[op.value].name,
// // // //             expression: expression,
// // // //             children: [left, right]
// // // //           });
// // // //         }
// // // //       }
      
// // // //       if (outputQueue.length !== 1) {
// // // //         throw new Error('Invalid expression');
// // // //       }
      
// // // //       setIsValid(true);
// // // //       setErrorMessage('');
// // // //       return outputQueue[0];
// // // //     } catch (error) {
// // // //       setIsValid(false);
// // // //       setErrorMessage(error.message);
// // // //       return null;
// // // //     }
// // // //   };
  
// // // //   // Evaluate the tree for a given variable assignment
// // // //   const evaluateTree = (node, assignment) => {
// // // //     if (!node) return null;
    
// // // //     if (node.nodeType === 'variable') {
// // // //       return assignment[node.value] || false;
// // // //     }
    
// // // //     if (node.nodeType === 'operator') {
// // // //       switch (node.value) {
// // // //         case '¬':
// // // //           return !evaluateTree(node.children[0], assignment);
// // // //         case '∧':
// // // //           return evaluateTree(node.children[0], assignment) && evaluateTree(node.children[1], assignment);
// // // //         case '∨':
// // // //           return evaluateTree(node.children[0], assignment) || evaluateTree(node.children[1], assignment);
// // // //         case '→':
// // // //           return !evaluateTree(node.children[0], assignment) || evaluateTree(node.children[1], assignment);
// // // //         case '↔':
// // // //           return evaluateTree(node.children[0], assignment) === evaluateTree(node.children[1], assignment);
// // // //         case '⊕':
// // // //           return evaluateTree(node.children[0], assignment) !== evaluateTree(node.children[1], assignment);
// // // //         default:
// // // //           return false;
// // // //       }
// // // //     }
    
// // // //     return false;
// // // //   };
  
// // // //   // Generate truth table from the tree
// // // //   const generateTruthTable = (tree) => {
// // // //     if (!tree) return [];
    
// // // //     // Extract unique variables
// // // //     const variables = new Set();
// // // //     const extractVariables = (node) => {
// // // //       if (!node) return;
      
// // // //       if (node.nodeType === 'variable') {
// // // //         variables.add(node.value);
// // // //       }
      
// // // //       if (node.children) {
// // // //         for (const child of node.children) {
// // // //           extractVariables(child);
// // // //         }
// // // //       }
// // // //     };
    
// // // //     extractVariables(tree);
// // // //     const variableArray = Array.from(variables).sort();
    
// // // //     // Generate all possible variable assignments
// // // //     const truthTable = [];
// // // //     const totalRows = Math.pow(2, variableArray.length);
    
// // // //     for (let i = 0; i < totalRows; i++) {
// // // //       const assignment = {};
// // // //       const row = { values: {} };
      
// // // //       for (let j = 0; j < variableArray.length; j++) {
// // // //         const variable = variableArray[j];
// // // //         const value = Boolean((i >> j) & 1);
// // // //         assignment[variable] = value;
// // // //         row.values[variable] = value;
// // // //       }
      
// // // //       row.result = evaluateTree(tree, assignment);
// // // //       truthTable.push(row);
// // // //     }
    
// // // //     return { variables: variableArray, rows: truthTable };
// // // //   };
  
// // // //   // Render the tree node vertically
// // // //   const renderTreeNode = (node, index = 0) => {
// // // //     if (!node) return null;
    
// // // //     const nodeClass = `${styles.treeNode} ${
// // // //       node.nodeType === 'operator' ? styles.operatorNode : styles.variableNode
// // // //     }`;
    
// // // //     // If no children, render as leaf node
// // // //     if (!node.children || node.children.length === 0) {
// // // //       return (
// // // //         <div className={styles.treeNodeWrapper}>
// // // //           <div className={nodeClass}>
// // // //             {node.expression}
// // // //           </div>
// // // //         </div>
// // // //       );
// // // //     }
    
// // // //     // If it has children, render with branches
// // // //     return (
// // // //       <div className={styles.treeNodeWithChildren}>
// // // //         <div className={styles.treeNodeWrapper}>
// // // //           <div className={nodeClass}>
// // // //             {node.expression}
// // // //           </div>
// // // //         </div>
// // // //         <div className={styles.branchContainer}>
// // // //           {node.children.map((child, idx) => (
// // // //             <div key={idx} className={styles.branch}>
// // // //               <div className={styles.branchLine}></div>
// // // //               {renderTreeNode(child, idx)}
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   };
  
// // // //   // Handle input changes
// // // //   const handleInputChange = (e) => {
// // // //     const newValue = e.target.value;
// // // //     setProposition(newValue);
    
// // // //     // Add to history
// // // //     if (newValue !== history[historyIndex]) {
// // // //       const newHistory = history.slice(0, historyIndex + 1);
// // // //       newHistory.push(newValue);
// // // //       setHistory(newHistory);
// // // //       setHistoryIndex(newHistory.length - 1);
// // // //     }
// // // //   };

// // // //   // Handle character insertion
// // // //   const handleCharacterClick = (char) => {
// // // //     const newValue = proposition + char;
// // // //     setProposition(newValue);
    
// // // //     // Add to history
// // // //     const newHistory = history.slice(0, historyIndex + 1);
// // // //     newHistory.push(newValue);
// // // //     setHistory(newHistory);
// // // //     setHistoryIndex(newHistory.length - 1);
// // // //   };

// // // //   // Handle undo
// // // //   const handleUndo = () => {
// // // //     if (historyIndex > 0) {
// // // //       setHistoryIndex(historyIndex - 1);
// // // //       setProposition(history[historyIndex - 1]);
// // // //     }
// // // //   };

// // // //   // Handle reset
// // // //   const handleReset = () => {
// // // //     setProposition('');
// // // //     const newHistory = [...history, ''];
// // // //     setHistory(newHistory);
// // // //     setHistoryIndex(newHistory.length - 1);
// // // //   };
  
// // // //   // Analyze the proposition
// // // //   const analyzeProposition = () => {
// // // //     const tree = parseProposition(proposition);
// // // //     setTreeData(tree);
    
// // // //     if (tree) {
// // // //       const table = generateTruthTable(tree);
// // // //       setTruthTable(table);
// // // //     } else {
// // // //       setTruthTable([]);
// // // //     }
// // // //   };
  
// // // //   // Check if the proposition is a tautology
// // // //   const isTautology = () => {
// // // //     if (!truthTable || !truthTable.rows) return false;
// // // //     return truthTable.rows.every(row => row.result === true);
// // // //   };
  
// // // //   // Check if the proposition is a contradiction
// // // //   const isContradiction = () => {
// // // //     if (!truthTable || !truthTable.rows) return false;
// // // //     return truthTable.rows.every(row => row.result === false);
// // // //   };
  
// // // //   // Analyze on proposition change
// // // //   useEffect(() => {
// // // //     analyzeProposition();
// // // //   }, [proposition]);
  
// // // //   return (
// // // //     <div className={styles.container}>
// // // //       <div className={styles.inputSection}>
// // // //         <h2>Proposition Analyzer & Tree Builder</h2>
// // // //         <div className={styles.inputContainer}>
// // // //           <input
// // // //             type="text"
// // // //             value={proposition}
// // // //             onChange={handleInputChange}
// // // //             className={`${styles.propositionInput} ${!isValid ? styles.error : ''}`}
// // // //             placeholder="Enter a logical proposition (e.g., P ∧ (Q ∨ ¬R))"
// // // //           />
// // // //           <div className={styles.buttonContainer}>
// // // //             <button onClick={handleUndo} className={styles.functionButton} disabled={historyIndex <= 0}>
// // // //               ↩
// // // //             </button>
// // // //             <button onClick={handleReset} className={styles.clearButton}>
// // // //               ✕
// // // //             </button>
// // // //             <button onClick={analyzeProposition} className={styles.analyzeButton}>
// // // //               Analyze
// // // //             </button>
// // // //           </div>
// // // //         </div>
        
// // // //         <div className={styles.charactersRow}>
// // // //           {propChars.map((char) => (
// // // //             <button
// // // //               key={char}
// // // //               className={styles.charButton}
// // // //               onClick={() => handleCharacterClick(char)}
// // // //             >
// // // //               {char}
// // // //             </button>
// // // //           ))}
// // // //         </div>
        
// // // //         {!isValid && (
// // // //           <div className={styles.errorMessage}>
// // // //             Error: {errorMessage}
// // // //           </div>
// // // //         )}
        
// // // //         <div className={styles.operatorsGuide}>
// // // //           <div className={styles.operatorsList}>
// // // //             {Object.entries(operators).map(([symbol, details]) => (
// // // //               <button
// // // //                 key={symbol}
// // // //                 className={styles.operatorButton}
// // // //                 onClick={() => handleCharacterClick(symbol)}
// // // //               >
// // // //                 {symbol} ({details.name})
// // // //               </button>
// // // //             ))}
// // // //             <button
// // // //               className={styles.operatorButton}
// // // //               onClick={() => handleCharacterClick('(')}
// // // //             >
// // // //               (
// // // //             </button>
// // // //             <button
// // // //               className={styles.operatorButton}
// // // //               onClick={() => handleCharacterClick(')')}
// // // //             >
// // // //               )
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
      
// // // //       <div className={styles.resultsContainer}>
// // // //         <div className={styles.resultSection}>
// // // //           <h3>Syntax Tree</h3>
// // // //           <div className={styles.treeContainer}>
// // // //             {treeData ? (
// // // //               <div className={styles.verticalTreeDisplay}>
// // // //                 {renderTreeNode(treeData)}
// // // //               </div>
// // // //             ) : (
// // // //               <div className={styles.noData}>No valid tree to display</div>
// // // //             )}
// // // //           </div>
// // // //         </div>
        
// // // //         <div className={styles.resultSection}>
// // // //           <h3>
// // // //             Truth Table
// // // //             {isTautology() && (
// // // //               <span className={styles.tautologyBadge}>Tautology</span>
// // // //             )}
// // // //             {isContradiction() && (
// // // //               <span className={styles.contradictionBadge}>Contradiction</span>
// // // //             )}
// // // //             {!isTautology() && !isContradiction() && truthTable.rows && (
// // // //               <span className={styles.contingencyBadge}>Contingent</span>
// // // //             )}
// // // //           </h3>
          
// // // //           {truthTable && truthTable.variables && truthTable.variables.length > 0 ? (
// // // //             <table className={styles.truthTable}>
// // // //               <thead>
// // // //                 <tr>
// // // //                   {truthTable.variables.map(variable => (
// // // //                     <th key={variable}>{variable}</th>
// // // //                   ))}
// // // //                   <th>{proposition}</th>
// // // //                 </tr>
// // // //               </thead>
// // // //               <tbody>
// // // //                 {truthTable.rows.map((row, index) => (
// // // //                   <tr key={index}>
// // // //                     {truthTable.variables.map(variable => (
// // // //                       <td key={variable} className={row.values[variable] ? styles.trueValue : styles.falseValue}>
// // // //                         {row.values[variable] ? 'T' : 'F'}
// // // //                       </td>
// // // //                     ))}
// // // //                     <td className={row.result ? styles.trueValue : styles.falseValue}>
// // // //                       {row.result ? 'T' : 'F'}
// // // //                     </td>
// // // //                   </tr>
// // // //                 ))}
// // // //               </tbody>
// // // //             </table>
// // // //           ) : (
// // // //             <div className={styles.noData}>No truth table to display</div>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default PropositionTreeBuilder;


// // // import React, { useState, useEffect } from 'react';
// // // import styles from './PropositionTreeBuilder.module.css';

// // // const PropositionTreeBuilder = () => {
// // //   const [proposition, setProposition] = useState('(P → Q) ∧ (¬P ∨ Q)');
// // //   const [history, setHistory] = useState(['(P → Q) ∧ (¬P ∨ Q)']);
// // //   const [historyIndex, setHistoryIndex] = useState(0);
// // //   const [isValid, setIsValid] = useState(true);
// // //   const [errorMessage, setErrorMessage] = useState('');
// // //   const [treeData, setTreeData] = useState(null);
// // //   const [truthTable, setTruthTable] = useState([]);
  
// // //   // Supported operators
// // //   const operators = {
// // //     '∧': { precedence: 2, name: 'AND' },
// // //     '∨': { precedence: 2, name: 'OR' },
// // //     '→': { precedence: 1, name: 'IMPLIES' },
// // //     '↔': { precedence: 1, name: 'EQUIVALENT' },
// // //     '⊕': { precedence: 2, name: 'XOR' },
// // //     '¬': { precedence: 3, name: 'NOT' }
// // //   };

// // //   // Proposition characters
// // //   const propChars = ['P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
// // //   // Parse the proposition and build the tree
// // //   const parseProposition = (expr) => {
// // //     let tokens = tokenize(expr);
// // //     if (!tokens) return null;
    
// // //     return buildTree(tokens);
// // //   };
  
// // //   // Tokenize the proposition string
// // //   const tokenize = (expr) => {
// // //     try {
// // //       const tokens = [];
// // //       let i = 0;
      
// // //       while (i < expr.length) {
// // //         const char = expr[i];
        
// // //         if (char === ' ') {
// // //           i++;
// // //           continue;
// // //         }
        
// // //         if (char === '(' || char === ')') {
// // //           tokens.push({
// // //             type: char === '(' ? 'open_paren' : 'close_paren',
// // //             value: char
// // //           });
// // //           i++;
// // //           continue;
// // //         }
        
// // //         if (/[A-Z]/.test(char)) {
// // //           tokens.push({
// // //             type: 'variable',
// // //             value: char
// // //           });
// // //           i++;
// // //           continue;
// // //         }
        
// // //         // Check for operators
// // //         let foundOperator = false;
// // //         for (const op in operators) {
// // //           if (expr.substring(i).startsWith(op)) {
// // //             tokens.push({
// // //               type: 'operator',
// // //               value: op
// // //             });
// // //             i += op.length;
// // //             foundOperator = true;
// // //             break;
// // //           }
// // //         }
        
// // //         if (!foundOperator) {
// // //           throw new Error(`Unknown token: ${char} at position ${i}`);
// // //         }
// // //       }
      
// // //       // Check for negation after variable (invalid)
// // //       for (let i = 0; i < tokens.length - 1; i++) {
// // //         if (tokens[i].type === 'variable' && tokens[i+1].type === 'operator' && tokens[i+1].value === '¬') {
// // //           throw new Error(`Invalid negation after variable: ${tokens[i].value}${tokens[i+1].value} at position ${i}`);
// // //         }
// // //       }
      
// // //       return tokens;
// // //     } catch (error) {
// // //       setIsValid(false);
// // //       setErrorMessage(error.message);
// // //       return null;
// // //     }
// // //   };
  
// // //   // Build the syntax tree from tokens
// // //   const buildTree = (tokens) => {
// // //     try {
// // //       // Implementation of Shunting-yard algorithm to handle operator precedence
// // //       const outputQueue = [];
// // //       const operatorStack = [];
      
// // //       for (let i = 0; i < tokens.length; i++) {
// // //         const token = tokens[i];
        
// // //         switch (token.type) {
// // //           case 'variable':
// // //             outputQueue.push({
// // //               type: 'node',
// // //               nodeType: 'variable',
// // //               value: token.value,
// // //               expression: token.value,
// // //               children: []
// // //             });
// // //             break;
            
// // //           case 'operator':
// // //             // Handle unary operator (negation)
// // //             if (token.value === '¬') {
// // //               // Negation has highest precedence
// // //               operatorStack.push(token);
// // //             } else {
// // //               // Binary operators
// // //               const currentOp = operators[token.value];
              
// // //               while (
// // //                 operatorStack.length > 0 &&
// // //                 operatorStack[operatorStack.length - 1].type === 'operator' &&
// // //                 operators[operatorStack[operatorStack.length - 1].value].precedence >= currentOp.precedence
// // //               ) {
// // //                 const op = operatorStack.pop();
                
// // //                 if (op.value === '¬') {
// // //                   // Unary operator
// // //                   const operand = outputQueue.pop();
// // //                   const expression = `${op.value}${operand.expression}`;
// // //                   outputQueue.push({
// // //                     type: 'node',
// // //                     nodeType: 'operator',
// // //                     value: op.value,
// // //                     name: operators[op.value].name,
// // //                     expression: expression,
// // //                     children: [operand]
// // //                   });
// // //                 } else {
// // //                   // Binary operator
// // //                   const right = outputQueue.pop();
// // //                   const left = outputQueue.pop();
// // //                   const expression = `(${left.expression} ${op.value} ${right.expression})`;
// // //                   outputQueue.push({
// // //                     type: 'node',
// // //                     nodeType: 'operator',
// // //                     value: op.value,
// // //                     name: operators[op.value].name,
// // //                     expression: expression,
// // //                     children: [left, right]
// // //                   });
// // //                 }
// // //               }
              
// // //               operatorStack.push(token);
// // //             }
// // //             break;
            
// // //           case 'open_paren':
// // //             operatorStack.push(token);
// // //             break;
            
// // //           case 'close_paren':
// // //             while (
// // //               operatorStack.length > 0 &&
// // //               operatorStack[operatorStack.length - 1].type !== 'open_paren'
// // //             ) {
// // //               const op = operatorStack.pop();
              
// // //               if (op.value === '¬') {
// // //                 // Unary operator
// // //                 const operand = outputQueue.pop();
// // //                 const expression = `${op.value}${operand.expression}`;
// // //                 outputQueue.push({
// // //                   type: 'node',
// // //                   nodeType: 'operator',
// // //                   value: op.value,
// // //                   name: operators[op.value].name,
// // //                   expression: expression,
// // //                   children: [operand]
// // //                 });
// // //               } else {
// // //                 // Binary operator
// // //                 const right = outputQueue.pop();
// // //                 const left = outputQueue.pop();
// // //                 const expression = `(${left.expression} ${op.value} ${right.expression})`;
// // //                 outputQueue.push({
// // //                   type: 'node',
// // //                   nodeType: 'operator',
// // //                   value: op.value,
// // //                   name: operators[op.value].name,
// // //                   expression: expression,
// // //                   children: [left, right]
// // //                 });
// // //               }
// // //             }
            
// // //             // Pop the open parenthesis
// // //             if (operatorStack.length === 0 || operatorStack[operatorStack.length - 1].type !== 'open_paren') {
// // //               throw new Error('Mismatched parentheses');
// // //             }
// // //             operatorStack.pop();
// // //             break;
// // //         }
// // //       }
      
// // //       // Process remaining operators
// // //       while (operatorStack.length > 0) {
// // //         const op = operatorStack.pop();
        
// // //         if (op.type === 'open_paren' || op.type === 'close_paren') {
// // //           throw new Error('Mismatched parentheses');
// // //         }
        
// // //         if (op.value === '¬') {
// // //           // Unary operator
// // //           const operand = outputQueue.pop();
// // //           const expression = `${op.value}${operand.expression}`;
// // //           outputQueue.push({
// // //             type: 'node',
// // //             nodeType: 'operator',
// // //             value: op.value,
// // //             name: operators[op.value].name,
// // //             expression: expression,
// // //             children: [operand]
// // //           });
// // //         } else {
// // //           // Binary operator
// // //           const right = outputQueue.pop();
// // //           const left = outputQueue.pop();
// // //           const expression = `(${left.expression} ${op.value} ${right.expression})`;
// // //           outputQueue.push({
// // //             type: 'node',
// // //             nodeType: 'operator',
// // //             value: op.value,
// // //             name: operators[op.value].name,
// // //             expression: expression,
// // //             children: [left, right]
// // //           });
// // //         }
// // //       }
      
// // //       if (outputQueue.length !== 1) {
// // //         throw new Error('Invalid expression');
// // //       }
      
// // //       setIsValid(true);
// // //       setErrorMessage('');
// // //       return outputQueue[0];
// // //     } catch (error) {
// // //       setIsValid(false);
// // //       setErrorMessage(error.message);
// // //       return null;
// // //     }
// // //   };
  
// // //   // Evaluate the tree for a given variable assignment
// // //   const evaluateTree = (node, assignment) => {
// // //     if (!node) return null;
    
// // //     if (node.nodeType === 'variable') {
// // //       return assignment[node.value] || false;
// // //     }
    
// // //     if (node.nodeType === 'operator') {
// // //       switch (node.value) {
// // //         case '¬':
// // //           return !evaluateTree(node.children[0], assignment);
// // //         case '∧':
// // //           return evaluateTree(node.children[0], assignment) && evaluateTree(node.children[1], assignment);
// // //         case '∨':
// // //           return evaluateTree(node.children[0], assignment) || evaluateTree(node.children[1], assignment);
// // //         case '→':
// // //           return !evaluateTree(node.children[0], assignment) || evaluateTree(node.children[1], assignment);
// // //         case '↔':
// // //           return evaluateTree(node.children[0], assignment) === evaluateTree(node.children[1], assignment);
// // //         case '⊕':
// // //           return evaluateTree(node.children[0], assignment) !== evaluateTree(node.children[1], assignment);
// // //         default:
// // //           return false;
// // //       }
// // //     }
    
// // //     return false;
// // //   };
  
// // //   // Generate truth table from the tree
// // //   const generateTruthTable = (tree) => {
// // //     if (!tree) return [];
    
// // //     // Extract unique variables
// // //     const variables = new Set();
// // //     const extractVariables = (node) => {
// // //       if (!node) return;
      
// // //       if (node.nodeType === 'variable') {
// // //         variables.add(node.value);
// // //       }
      
// // //       if (node.children) {
// // //         for (const child of node.children) {
// // //           extractVariables(child);
// // //         }
// // //       }
// // //     };
    
// // //     extractVariables(tree);
// // //     const variableArray = Array.from(variables).sort();
    
// // //     // Generate all possible variable assignments
// // //     const truthTable = [];
// // //     const totalRows = Math.pow(2, variableArray.length);
    
// // //     for (let i = 0; i < totalRows; i++) {
// // //       const assignment = {};
// // //       const row = { values: {} };
      
// // //       for (let j = 0; j < variableArray.length; j++) {
// // //         const variable = variableArray[j];
// // //         const value = Boolean((i >> j) & 1);
// // //         assignment[variable] = value;
// // //         row.values[variable] = value;
// // //       }
      
// // //       row.result = evaluateTree(tree, assignment);
// // //       truthTable.push(row);
// // //     }
    
// // //     return { variables: variableArray, rows: truthTable };
// // //   };
  
// // //   // Render the tree node vertically
// // //   const renderTreeNode = (node, index = 0) => {
// // //     if (!node) return null;
    
// // //     const nodeClass = `${styles.treeNode} ${
// // //       node.nodeType === 'operator' ? styles.operatorNode : styles.variableNode
// // //     }`;
    
// // //     // If no children, render as leaf node
// // //     if (!node.children || node.children.length === 0) {
// // //       return (
// // //         <div className={styles.treeNodeWrapper}>
// // //           <div className={nodeClass}>
// // //             {node.expression}
// // //           </div>
// // //         </div>
// // //       );
// // //     }
    
// // //     // If it has children, render with branches
// // //     return (
// // //       <div className={styles.treeNodeWithChildren}>
// // //         <div className={styles.treeNodeWrapper}>
// // //           <div className={nodeClass}>
// // //             {node.expression}
// // //           </div>
// // //         </div>
// // //         <div className={styles.branchContainer}>
// // //           {node.children.map((child, idx) => (
// // //             <div key={idx} className={styles.branch}>
// // //               <div className={styles.branchLine}></div>
// // //               {renderTreeNode(child, idx)}
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     );
// // //   };
  
// // //   // Handle input changes
// // //   const handleInputChange = (e) => {
// // //     const newValue = e.target.value;
// // //     setProposition(newValue);
    
// // //     // Add to history
// // //     if (newValue !== history[historyIndex]) {
// // //       const newHistory = history.slice(0, historyIndex + 1);
// // //       newHistory.push(newValue);
// // //       setHistory(newHistory);
// // //       setHistoryIndex(newHistory.length - 1);
// // //     }
// // //   };

// // //   // Handle character insertion
// // //   const handleCharacterClick = (char) => {
// // //     // Get cursor position
// // //     const inputElement = document.getElementById('propositionInput');
// // //     if (!inputElement) {
// // //       // If input element not found, append to end (fallback)
// // //       const newValue = proposition + char;
// // //       setProposition(newValue);
      
// // //       // Add to history
// // //       const newHistory = history.slice(0, historyIndex + 1);
// // //       newHistory.push(newValue);
// // //       setHistory(newHistory);
// // //       setHistoryIndex(newHistory.length - 1);
// // //       return;
// // //     }
    
// // //     const cursorPos = inputElement.selectionStart;
// // //     // Insert at cursor position
// // //     const newValue = proposition.substring(0, cursorPos) + char + proposition.substring(cursorPos);
// // //     setProposition(newValue);
    
// // //     // Add to history
// // //     const newHistory = history.slice(0, historyIndex + 1);
// // //     newHistory.push(newValue);
// // //     setHistory(newHistory);
// // //     setHistoryIndex(newHistory.length - 1);
    
// // //     // Set cursor position after the inserted character
// // //     setTimeout(() => {
// // //       inputElement.focus();
// // //       inputElement.setSelectionRange(cursorPos + char.length, cursorPos + char.length);
// // //     }, 0);
// // //   };

// // //   // Handle undo
// // //   const handleUndo = () => {
// // //     if (historyIndex > 0) {
// // //       setHistoryIndex(historyIndex - 1);
// // //       setProposition(history[historyIndex - 1]);
// // //     }
// // //   };

// // //   // Handle reset
// // //   const handleReset = () => {
// // //     setProposition('');
// // //     const newHistory = [...history, ''];
// // //     setHistory(newHistory);
// // //     setHistoryIndex(newHistory.length - 1);
// // //   };
  
// // //   // Analyze the proposition
// // //   const analyzeProposition = () => {
// // //     const tree = parseProposition(proposition);
// // //     setTreeData(tree);
    
// // //     if (tree) {
// // //       const table = generateTruthTable(tree);
// // //       setTruthTable(table);
// // //     } else {
// // //       setTruthTable([]);
// // //     }
// // //   };
  
// // //   // Check if the proposition is a tautology
// // //   const isTautology = () => {
// // //     if (!truthTable || !truthTable.rows) return false;
// // //     return truthTable.rows.every(row => row.result === true);
// // //   };
  
// // //   // Check if the proposition is a contradiction
// // //   const isContradiction = () => {
// // //     if (!truthTable || !truthTable.rows) return false;
// // //     return truthTable.rows.every(row => row.result === false);
// // //   };
  
// // //   // Analyze on proposition change
// // //   useEffect(() => {
// // //     analyzeProposition();
// // //   }, [proposition]);
  
// // //   return (
// // //     <div className={styles.container}>
// // //       <div className={styles.inputSection}>
// // //         {/* <h2>Proposition Analyzer & Tree Builder</h2> */}
// // //         <div className={styles.inputContainer}>
// // //           <input
// // //             id="propositionInput"
// // //             type="text"
// // //             value={proposition}
// // //             onChange={handleInputChange}
// // //             className={`${styles.propositionInput} ${!isValid ? styles.error : ''}`}
// // //             placeholder="Enter a logical proposition (e.g., P ∧ (Q ∨ ¬R))"
// // //           />
// // //           <div className={styles.buttonContainer}>
// // //             <button onClick={handleUndo} className={styles.functionButton} disabled={historyIndex <= 0}>
// // //               ↩
// // //             </button>
// // //             <button onClick={handleReset} className={styles.clearButton}>
// // //               ✕
// // //             </button>
// // //             <button onClick={analyzeProposition} className={styles.analyzeButton}>
// // //               Analyze
// // //             </button>
// // //           </div>
// // //         </div>
        
// // //         <div className={styles.charactersRow}>
// // //           {propChars.map((char) => (
// // //             <button
// // //               key={char}
// // //               className={styles.charButton}
// // //               onClick={() => handleCharacterClick(char)}
// // //             >
// // //               {char}
// // //             </button>
// // //           ))}
// // //         </div>
        
// // //         {!isValid && (
// // //           <div className={styles.errorMessage}>
// // //             Error: {errorMessage}
// // //           </div>
// // //         )}
        
// // //         <div className={styles.operatorsGuide}>
// // //           <div className={styles.operatorsList}>
// // //             {Object.entries(operators).map(([symbol, details]) => (
// // //               <button
// // //                 key={symbol}
// // //                 className={styles.operatorButton}
// // //                 onClick={() => handleCharacterClick(symbol)}
// // //               >
// // //                 {symbol} ({details.name})
// // //               </button>
// // //             ))}
// // //             <button
// // //               className={styles.operatorButton}
// // //               onClick={() => handleCharacterClick('(')}
// // //             >
// // //               (
// // //             </button>
// // //             <button
// // //               className={styles.operatorButton}
// // //               onClick={() => handleCharacterClick(')')}
// // //             >
// // //               )
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
      
// // //       <div className={styles.resultsContainer}>
// // //         <div className={styles.resultSection}>
// // //           <h3>Syntax Tree</h3>
// // //           <div className={styles.treeContainer}>
// // //             {treeData ? (
// // //               <div className={styles.verticalTreeDisplay}>
// // //                 {renderTreeNode(treeData)}
// // //               </div>
// // //             ) : (
// // //               <div className={styles.noData}>No valid tree to display</div>
// // //             )}
// // //           </div>
// // //         </div>
        
// // //         <div className={styles.resultSection}>
// // //           <h3>
// // //             Truth Table
// // //             {isTautology() && (
// // //               <span className={styles.tautologyBadge}>Tautology</span>
// // //             )}
// // //             {isContradiction() && (
// // //               <span className={styles.contradictionBadge}>Contradiction</span>
// // //             )}
// // //             {!isTautology() && !isContradiction() && truthTable.rows && (
// // //               <span className={styles.contingencyBadge}>Contingent</span>
// // //             )}
// // //           </h3>
          
// // //           {truthTable && truthTable.variables && truthTable.variables.length > 0 ? (
// // //             <table className={styles.truthTable}>
// // //               <thead>
// // //                 <tr>
// // //                   {truthTable.variables.map(variable => (
// // //                     <th key={variable}>{variable}</th>
// // //                   ))}
// // //                   <th>{proposition}</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {truthTable.rows.map((row, index) => (
// // //                   <tr key={index}>
// // //                     {truthTable.variables.map(variable => (
// // //                       <td key={variable} className={row.values[variable] ? styles.trueValue : styles.falseValue}>
// // //                         {row.values[variable] ? 'T' : 'F'}
// // //                       </td>
// // //                     ))}
// // //                     <td className={row.result ? styles.trueValue : styles.falseValue}>
// // //                       {row.result ? 'T' : 'F'}
// // //                     </td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           ) : (
// // //             <div className={styles.noData}>No truth table to display</div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default PropositionTreeBuilder;



// // // import React, { useState, useEffect } from 'react';
// // // import styles from './PropositionTreeBuilder.module.css';

// // // const PropositionTreeBuilder = () => {
// // //   const [proposition, setProposition] = useState('(P → Q) ∧ (¬P ∨ Q)');
// // //   const [history, setHistory] = useState(['(P → Q) ∧ (¬P ∨ Q)']);
// // //   const [historyIndex, setHistoryIndex] = useState(0);
// // //   const [isValid, setIsValid] = useState(true);
// // //   const [errorMessage, setErrorMessage] = useState('');
// // //   const [treeData, setTreeData] = useState(null);
// // //   const [truthTable, setTruthTable] = useState([]);
  
// // //   // Supported operators
// // //   const operators = {
// // //     '∧': { precedence: 2, name: 'AND' },
// // //     '∨': { precedence: 2, name: 'OR' },
// // //     '→': { precedence: 1, name: 'IMPLIES' },
// // //     '↔': { precedence: 1, name: 'EQUIVALENT' },
// // //     '⊕': { precedence: 2, name: 'XOR' },
// // //     '¬': { precedence: 3, name: 'NOT' }
// // //   };

// // //   // Proposition characters
// // //   const propChars = ['P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
// // //   // Parse the proposition and build the tree
// // //   const parseProposition = (expr) => {
// // //     let tokens = tokenize(expr);
// // //     if (!tokens) return null;
    
// // //     return buildTree(tokens);
// // //   };
  
// // //   // Tokenize the proposition string
// // //   const tokenize = (expr) => {
// // //     try {
// // //       const tokens = [];
// // //       let i = 0;
      
// // //       while (i < expr.length) {
// // //         const char = expr[i];
        
// // //         if (char === ' ') {
// // //           i++;
// // //           continue;
// // //         }
        
// // //         if (char === '(' || char === ')') {
// // //           tokens.push({
// // //             type: char === '(' ? 'open_paren' : 'close_paren',
// // //             value: char
// // //           });
// // //           i++;
// // //           continue;
// // //         }
        
// // //         if (/[A-Z]/.test(char)) {
// // //           tokens.push({
// // //             type: 'variable',
// // //             value: char
// // //           });
// // //           i++;
// // //           continue;
// // //         }
        
// // //         // Check for operators
// // //         let foundOperator = false;
// // //         for (const op in operators) {
// // //           if (expr.substring(i).startsWith(op)) {
// // //             tokens.push({
// // //               type: 'operator',
// // //               value: op
// // //             });
// // //             i += op.length;
// // //             foundOperator = true;
// // //             break;
// // //           }
// // //         }
        
// // //         if (!foundOperator) {
// // //           throw new Error(`Unknown token: ${char} at position ${i}`);
// // //         }
// // //       }
      
// // //       // Check for negation after variable (invalid)
// // //       for (let i = 0; i < tokens.length - 1; i++) {
// // //         if (tokens[i].type === 'variable' && tokens[i+1].type === 'operator' && tokens[i+1].value === '¬') {
// // //           throw new Error(`Invalid negation after variable: ${tokens[i].value}${tokens[i+1].value} at position ${i}`);
// // //         }
// // //       }
      
// // //       return tokens;
// // //     } catch (error) {
// // //       setIsValid(false);
// // //       setErrorMessage(error.message);
// // //       return null;
// // //     }
// // //   };
  
// // //   // Build the syntax tree from tokens
// // //   const buildTree = (tokens) => {
// // //     try {
// // //       // Implementation of Shunting-yard algorithm to handle operator precedence
// // //       const outputQueue = [];
// // //       const operatorStack = [];
      
// // //       for (let i = 0; i < tokens.length; i++) {
// // //         const token = tokens[i];
        
// // //         switch (token.type) {
// // //           case 'variable':
// // //             outputQueue.push({
// // //               type: 'node',
// // //               nodeType: 'variable',
// // //               value: token.value,
// // //               expression: token.value,
// // //               children: []
// // //             });
// // //             break;
            
// // //           case 'operator':
// // //             // Handle unary operator (negation)
// // //             if (token.value === '¬') {
// // //               // Negation has highest precedence
// // //               operatorStack.push(token);
// // //             } else {
// // //               // Binary operators
// // //               const currentOp = operators[token.value];
              
// // //               while (
// // //                 operatorStack.length > 0 &&
// // //                 operatorStack[operatorStack.length - 1].type === 'operator' &&
// // //                 operators[operatorStack[operatorStack.length - 1].value].precedence >= currentOp.precedence
// // //               ) {
// // //                 const op = operatorStack.pop();
                
// // //                 if (op.value === '¬') {
// // //                   // Unary operator
// // //                   const operand = outputQueue.pop();
// // //                   const expression = `${op.value}${operand.expression}`;
// // //                   outputQueue.push({
// // //                     type: 'node',
// // //                     nodeType: 'operator',
// // //                     value: op.value,
// // //                     name: operators[op.value].name,
// // //                     expression: expression,
// // //                     children: [operand]
// // //                   });
// // //                 } else {
// // //                   // Binary operator
// // //                   const right = outputQueue.pop();
// // //                   const left = outputQueue.pop();
// // //                   const expression = `(${left.expression} ${op.value} ${right.expression})`;
// // //                   outputQueue.push({
// // //                     type: 'node',
// // //                     nodeType: 'operator',
// // //                     value: op.value,
// // //                     name: operators[op.value].name,
// // //                     expression: expression,
// // //                     children: [left, right]
// // //                   });
// // //                 }
// // //               }
              
// // //               operatorStack.push(token);
// // //             }
// // //             break;
            
// // //           case 'open_paren':
// // //             operatorStack.push(token);
// // //             break;
            
// // //           case 'close_paren':
// // //             while (
// // //               operatorStack.length > 0 &&
// // //               operatorStack[operatorStack.length - 1].type !== 'open_paren'
// // //             ) {
// // //               const op = operatorStack.pop();
              
// // //               if (op.value === '¬') {
// // //                 // Unary operator
// // //                 const operand = outputQueue.pop();
// // //                 const expression = `${op.value}${operand.expression}`;
// // //                 outputQueue.push({
// // //                   type: 'node',
// // //                   nodeType: 'operator',
// // //                   value: op.value,
// // //                   name: operators[op.value].name,
// // //                   expression: expression,
// // //                   children: [operand]
// // //                 });
// // //               } else {
// // //                 // Binary operator
// // //                 const right = outputQueue.pop();
// // //                 const left = outputQueue.pop();
// // //                 const expression = `(${left.expression} ${op.value} ${right.expression})`;
// // //                 outputQueue.push({
// // //                   type: 'node',
// // //                   nodeType: 'operator',
// // //                   value: op.value,
// // //                   name: operators[op.value].name,
// // //                   expression: expression,
// // //                   children: [left, right]
// // //                 });
// // //               }
// // //             }
            
// // //             // Pop the open parenthesis
// // //             if (operatorStack.length === 0 || operatorStack[operatorStack.length - 1].type !== 'open_paren') {
// // //               throw new Error('Mismatched parentheses');
// // //             }
// // //             operatorStack.pop();
// // //             break;
// // //         }
// // //       }
      
// // //       // Process remaining operators
// // //       while (operatorStack.length > 0) {
// // //         const op = operatorStack.pop();
        
// // //         if (op.type === 'open_paren' || op.type === 'close_paren') {
// // //           throw new Error('Mismatched parentheses');
// // //         }
        
// // //         if (op.value === '¬') {
// // //           // Unary operator
// // //           const operand = outputQueue.pop();
// // //           const expression = `${op.value}${operand.expression}`;
// // //           outputQueue.push({
// // //             type: 'node',
// // //             nodeType: 'operator',
// // //             value: op.value,
// // //             name: operators[op.value].name,
// // //             expression: expression,
// // //             children: [operand]
// // //           });
// // //         } else {
// // //           // Binary operator
// // //           const right = outputQueue.pop();
// // //           const left = outputQueue.pop();
// // //           const expression = `(${left.expression} ${op.value} ${right.expression})`;
// // //           outputQueue.push({
// // //             type: 'node',
// // //             nodeType: 'operator',
// // //             value: op.value,
// // //             name: operators[op.value].name,
// // //             expression: expression,
// // //             children: [left, right]
// // //           });
// // //         }
// // //       }
      
// // //       if (outputQueue.length !== 1) {
// // //         throw new Error('Invalid expression');
// // //       }
      
// // //       setIsValid(true);
// // //       setErrorMessage('');
// // //       return outputQueue[0];
// // //     } catch (error) {
// // //       setIsValid(false);
// // //       setErrorMessage(error.message);
// // //       return null;
// // //     }
// // //   };
  
// // //   // Evaluate the tree for a given variable assignment
// // //   const evaluateTree = (node, assignment) => {
// // //     if (!node) return null;
    
// // //     if (node.nodeType === 'variable') {
// // //       return assignment[node.value] || false;
// // //     }
    
// // //     if (node.nodeType === 'operator') {
// // //       switch (node.value) {
// // //         case '¬':
// // //           return !evaluateTree(node.children[0], assignment);
// // //         case '∧':
// // //           return evaluateTree(node.children[0], assignment) && evaluateTree(node.children[1], assignment);
// // //         case '∨':
// // //           return evaluateTree(node.children[0], assignment) || evaluateTree(node.children[1], assignment);
// // //         case '→':
// // //           return !evaluateTree(node.children[0], assignment) || evaluateTree(node.children[1], assignment);
// // //         case '↔':
// // //           return evaluateTree(node.children[0], assignment) === evaluateTree(node.children[1], assignment);
// // //         case '⊕':
// // //           return evaluateTree(node.children[0], assignment) !== evaluateTree(node.children[1], assignment);
// // //         default:
// // //           return false;
// // //       }
// // //     }
    
// // //     return false;
// // //   };
  
// // //   // Generate truth table from the tree
// // //   const generateTruthTable = (tree) => {
// // //     if (!tree) return [];
    
// // //     // Extract unique variables
// // //     const variables = new Set();
// // //     const extractVariables = (node) => {
// // //       if (!node) return;
      
// // //       if (node.nodeType === 'variable') {
// // //         variables.add(node.value);
// // //       }
      
// // //       if (node.children) {
// // //         for (const child of node.children) {
// // //           extractVariables(child);
// // //         }
// // //       }
// // //     };
    
// // //     extractVariables(tree);
// // //     const variableArray = Array.from(variables).sort();
    
// // //     // Generate all possible variable assignments
// // //     const truthTable = [];
// // //     const totalRows = Math.pow(2, variableArray.length);
    
// // //     for (let i = 0; i < totalRows; i++) {
// // //       const assignment = {};
// // //       const row = { values: {} };
      
// // //       for (let j = 0; j < variableArray.length; j++) {
// // //         const variable = variableArray[j];
// // //         const value = Boolean((i >> j) & 1);
// // //         assignment[variable] = value;
// // //         row.values[variable] = value;
// // //       }
      
// // //       row.result = evaluateTree(tree, assignment);
// // //       truthTable.push(row);
// // //     }
    
// // //     return { variables: variableArray, rows: truthTable };
// // //   };
  
// // //   // Render the tree node vertically
// // //   const renderTreeNode = (node, index = 0) => {
// // //     if (!node) return null;
    
// // //     const nodeClass = `${styles.treeNode} ${
// // //       node.nodeType === 'operator' ? styles.operatorNode : styles.variableNode
// // //     }`;
    
// // //     // If no children, render as leaf node
// // //     if (!node.children || node.children.length === 0) {
// // //       return (
// // //         <div className={styles.treeNodeWrapper}>
// // //           <div className={nodeClass}>
// // //             {node.expression}
// // //           </div>
// // //         </div>
// // //       );
// // //     }
    
// // //     // If it has children, render with branches
// // //     return (
// // //       <div className={styles.treeNodeWithChildren}>
// // //         <div className={styles.treeNodeWrapper}>
// // //           <div className={nodeClass}>
// // //             {node.expression}
// // //           </div>
// // //         </div>
// // //         <div className={styles.branchContainer}>
// // //           {node.children.map((child, idx) => (
// // //             <div key={idx} className={styles.branch}>
// // //               <div className={styles.branchLine}></div>
// // //               {renderTreeNode(child, idx)}
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     );
// // //   };
  
// // //   // Handle input changes
// // //   const handleInputChange = (e) => {
// // //     const newValue = e.target.value;
// // //     setProposition(newValue);
    
// // //     // Add to history
// // //     if (newValue !== history[historyIndex]) {
// // //       const newHistory = history.slice(0, historyIndex + 1);
// // //       newHistory.push(newValue);
// // //       setHistory(newHistory);
// // //       setHistoryIndex(newHistory.length - 1);
// // //     }
// // //   };

// // //   // Handle character insertion
// // //   const handleCharacterClick = (char) => {
// // //     // Get cursor position
// // //     const inputElement = document.getElementById('propositionInput');
// // //     if (!inputElement) {
// // //       // If input element not found, append to end (fallback)
// // //       const newValue = proposition + char;
// // //       setProposition(newValue);
      
// // //       // Add to history
// // //       const newHistory = history.slice(0, historyIndex + 1);
// // //       newHistory.push(newValue);
// // //       setHistory(newHistory);
// // //       setHistoryIndex(newHistory.length - 1);
// // //       return;
// // //     }
    
// // //     const cursorPos = inputElement.selectionStart;
// // //     // Insert at cursor position
// // //     const newValue = proposition.substring(0, cursorPos) + char + proposition.substring(cursorPos);
// // //     setProposition(newValue);
    
// // //     // Add to history
// // //     const newHistory = history.slice(0, historyIndex + 1);
// // //     newHistory.push(newValue);
// // //     setHistory(newHistory);
// // //     setHistoryIndex(newHistory.length - 1);
    
// // //     // Set cursor position after the inserted character
// // //     setTimeout(() => {
// // //       inputElement.focus();
// // //       inputElement.setSelectionRange(cursorPos + char.length, cursorPos + char.length);
// // //     }, 0);
// // //   };

// // //   // Handle undo
// // //   const handleUndo = () => {
// // //     if (historyIndex > 0) {
// // //       setHistoryIndex(historyIndex - 1);
// // //       setProposition(history[historyIndex - 1]);
// // //     }
// // //   };

// // //   // Handle reset
// // //   const handleReset = () => {
// // //     setProposition('');
// // //     const newHistory = [...history, ''];
// // //     setHistory(newHistory);
// // //     setHistoryIndex(newHistory.length - 1);
// // //   };
  
// // //   // Analyze the proposition
// // //   const analyzeProposition = () => {
// // //     const tree = parseProposition(proposition);
// // //     setTreeData(tree);
    
// // //     if (tree) {
// // //       const table = generateTruthTable(tree);
// // //       setTruthTable(table);
// // //     } else {
// // //       setTruthTable([]);
// // //     }
// // //   };
  
// // //   // Check if the proposition is a tautology
// // //   const isTautology = () => {
// // //     if (!truthTable || !truthTable.rows) return false;
// // //     return truthTable.rows.every(row => row.result === true);
// // //   };
  
// // //   // Check if the proposition is a contradiction
// // //   const isContradiction = () => {
// // //     if (!truthTable || !truthTable.rows) return false;
// // //     return truthTable.rows.every(row => row.result === false);
// // //   };
  
// // //   // Analyze on proposition change
// // //   useEffect(() => {
// // //     analyzeProposition();
// // //   }, [proposition]);
  
// // //   return (
// // //     <div className={styles.container}>
// // //       <div className={styles.topSection}>
// // //         <div className={styles.inputSection}>
// // //           <div className={styles.inputContainer}>
// // //             <input
// // //               id="propositionInput"
// // //               type="text"
// // //               value={proposition}
// // //               onChange={handleInputChange}
// // //               className={`${styles.propositionInput} ${!isValid ? styles.error : ''}`}
// // //               placeholder="Enter a logical proposition (e.g., P ∧ (Q ∨ ¬R))"
// // //             />
// // //             <div className={styles.buttonContainer}>
// // //               <button onClick={handleUndo} className={styles.functionButton} disabled={historyIndex <= 0}>
// // //                 ↩
// // //               </button>
// // //               <button onClick={handleReset} className={styles.clearButton}>
// // //                 ✕
// // //               </button>
// // //               <button onClick={analyzeProposition} className={styles.analyzeButton}>
// // //                 Analyze
// // //               </button>
// // //             </div>
// // //           </div>
          
// // //           {!isValid && (
// // //             <div className={styles.errorMessage}>
// // //               Error: {errorMessage}
// // //             </div>
// // //           )}
// // //         </div>
        
// // //         <div className={styles.controlsSection}>
// // //           <div className={styles.charactersRow}>
// // //             {propChars.map((char) => (
// // //               <button
// // //                 key={char}
// // //                 className={styles.charButton}
// // //                 onClick={() => handleCharacterClick(char)}
// // //               >
// // //                 {char}
// // //               </button>
// // //             ))}
// // //           </div>
          
// // //           <div className={styles.operatorsGuide}>
// // //             <div className={styles.operatorsList}>
// // //               {Object.entries(operators).map(([symbol, details]) => (
// // //                 <button
// // //                   key={symbol}
// // //                   className={styles.operatorButton}
// // //                   onClick={() => handleCharacterClick(symbol)}
// // //                 >
// // //                   {symbol} ({details.name})
// // //                 </button>
// // //               ))}
// // //               <button
// // //                 className={styles.operatorButton}
// // //                 onClick={() => handleCharacterClick('(')}
// // //               >
// // //                 (
// // //               </button>
// // //               <button
// // //                 className={styles.operatorButton}
// // //                 onClick={() => handleCharacterClick(')')}
// // //               >
// // //                 )
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
      
// // //       <div className={styles.resultsContainer}>
// // //         <div className={styles.resultSection}>
// // //           <h3>Syntax Tree</h3>
// // //           <div className={styles.treeContainer}>
// // //             {treeData ? (
// // //               <div className={styles.verticalTreeDisplay}>
// // //                 {renderTreeNode(treeData)}
// // //               </div>
// // //             ) : (
// // //               <div className={styles.noData}>No valid tree to display</div>
// // //             )}
// // //           </div>
// // //         </div>
        
// // //         <div className={styles.resultSection}>
// // //           <h3>
// // //             Truth Table
// // //             {isTautology() && (
// // //               <span className={styles.tautologyBadge}>Tautology</span>
// // //             )}
// // //             {isContradiction() && (
// // //               <span className={styles.contradictionBadge}>Contradiction</span>
// // //             )}
// // //             {!isTautology() && !isContradiction() && truthTable.rows && (
// // //               <span className={styles.contingencyBadge}>Contingent</span>
// // //             )}
// // //           </h3>
          
// // //           {truthTable && truthTable.variables && truthTable.variables.length > 0 ? (
// // //             <table className={styles.truthTable}>
// // //               <thead>
// // //                 <tr>
// // //                   {truthTable.variables.map(variable => (
// // //                     <th key={variable}>{variable}</th>
// // //                   ))}
// // //                   <th>{proposition}</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {truthTable.rows.map((row, index) => (
// // //                   <tr key={index}>
// // //                     {truthTable.variables.map(variable => (
// // //                       <td key={variable} className={row.values[variable] ? styles.trueValue : styles.falseValue}>
// // //                         {row.values[variable] ? 'T' : 'F'}
// // //                       </td>
// // //                     ))}
// // //                     <td className={row.result ? styles.trueValue : styles.falseValue}>
// // //                       {row.result ? 'T' : 'F'}
// // //                     </td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           ) : (
// // //             <div className={styles.noData}>No truth table to display</div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default PropositionTreeBuilder;


// // import React, { useState, useEffect } from 'react';
// // import styles from './PropositionTreeBuilder.module.css';

// // const PropositionTreeBuilder = () => {
// //   const [proposition, setProposition] = useState('(P → Q) ∧ (¬P ∨ Q)');
// //   const [history, setHistory] = useState(['(P → Q) ∧ (¬P ∨ Q)']);
// //   const [historyIndex, setHistoryIndex] = useState(0);
// //   const [isValid, setIsValid] = useState(true);
// //   const [errorMessage, setErrorMessage] = useState('');
// //   const [treeData, setTreeData] = useState(null);
// //   const [truthTable, setTruthTable] = useState([]);
  
// //   // Supported operators
// //   const operators = {
// //     '∧': { precedence: 2, name: 'AND' },
// //     '∨': { precedence: 2, name: 'OR' },
// //     '→': { precedence: 1, name: 'IMPLIES' },
// //     '↔': { precedence: 1, name: 'EQUIVALENT' },
// //     '⊕': { precedence: 2, name: 'XOR' },
// //     '¬': { precedence: 3, name: 'NOT' }
// //   };

// //   // Proposition characters
// //   const propChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
// //   // Parse the proposition and build the tree
// //   const parseProposition = (expr) => {
// //     let tokens = tokenize(expr);
// //     if (!tokens) return null;
    
// //     return buildTree(tokens);
// //   };
  
// //   // Tokenize the proposition string
// //   const tokenize = (expr) => {
// //     try {
// //       const tokens = [];
// //       let i = 0;
      
// //       while (i < expr.length) {
// //         const char = expr[i];
        
// //         if (char === ' ') {
// //           i++;
// //           continue;
// //         }
        
// //         if (char === '(' || char === ')') {
// //           tokens.push({
// //             type: char === '(' ? 'open_paren' : 'close_paren',
// //             value: char
// //           });
// //           i++;
// //           continue;
// //         }
        
// //         if (/[A-Z]/.test(char)) {
// //           tokens.push({
// //             type: 'variable',
// //             value: char
// //           });
// //           i++;
// //           continue;
// //         }
        
// //         // Check for operators
// //         let foundOperator = false;
// //         for (const op in operators) {
// //           if (expr.substring(i).startsWith(op)) {
// //             tokens.push({
// //               type: 'operator',
// //               value: op
// //             });
// //             i += op.length;
// //             foundOperator = true;
// //             break;
// //           }
// //         }
        
// //         if (!foundOperator) {
// //           throw new Error(`Unknown token: ${char} at position ${i}`);
// //         }
// //       }
      
// //       // Check for negation after variable (invalid)
// //       for (let i = 0; i < tokens.length - 1; i++) {
// //         if (tokens[i].type === 'variable' && tokens[i+1].type === 'operator' && tokens[i+1].value === '¬') {
// //           throw new Error(`Invalid negation after variable: ${tokens[i].value}${tokens[i+1].value} at position ${i}`);
// //         }
// //       }
      
// //       return tokens;
// //     } catch (error) {
// //       setIsValid(false);
// //       setErrorMessage(error.message);
// //       return null;
// //     }
// //   };
  
// //   // Build the syntax tree from tokens
// //   const buildTree = (tokens) => {
// //     try {
// //       // Implementation of Shunting-yard algorithm to handle operator precedence
// //       const outputQueue = [];
// //       const operatorStack = [];
      
// //       for (let i = 0; i < tokens.length; i++) {
// //         const token = tokens[i];
        
// //         switch (token.type) {
// //           case 'variable':
// //             outputQueue.push({
// //               type: 'node',
// //               nodeType: 'variable',
// //               value: token.value,
// //               expression: token.value,
// //               children: []
// //             });
// //             break;
            
// //           case 'operator':
// //             // Handle unary operator (negation)
// //             if (token.value === '¬') {
// //               // Negation has highest precedence
// //               operatorStack.push(token);
// //             } else {
// //               // Binary operators
// //               const currentOp = operators[token.value];
              
// //               while (
// //                 operatorStack.length > 0 &&
// //                 operatorStack[operatorStack.length - 1].type === 'operator' &&
// //                 operators[operatorStack[operatorStack.length - 1].value].precedence >= currentOp.precedence
// //               ) {
// //                 const op = operatorStack.pop();
                
// //                 if (op.value === '¬') {
// //                   // Unary operator
// //                   const operand = outputQueue.pop();
// //                   const expression = `${op.value}${operand.expression}`;
// //                   outputQueue.push({
// //                     type: 'node',
// //                     nodeType: 'operator',
// //                     value: op.value,
// //                     name: operators[op.value].name,
// //                     expression: expression,
// //                     children: [operand]
// //                   });
// //                 } else {
// //                   // Binary operator
// //                   const right = outputQueue.pop();
// //                   const left = outputQueue.pop();
// //                   const expression = `(${left.expression} ${op.value} ${right.expression})`;
// //                   outputQueue.push({
// //                     type: 'node',
// //                     nodeType: 'operator',
// //                     value: op.value,
// //                     name: operators[op.value].name,
// //                     expression: expression,
// //                     children: [left, right]
// //                   });
// //                 }
// //               }
              
// //               operatorStack.push(token);
// //             }
// //             break;
            
// //           case 'open_paren':
// //             operatorStack.push(token);
// //             break;
            
// //           case 'close_paren':
// //             while (
// //               operatorStack.length > 0 &&
// //               operatorStack[operatorStack.length - 1].type !== 'open_paren'
// //             ) {
// //               const op = operatorStack.pop();
              
// //               if (op.value === '¬') {
// //                 // Unary operator
// //                 const operand = outputQueue.pop();
// //                 const expression = `${op.value}${operand.expression}`;
// //                 outputQueue.push({
// //                   type: 'node',
// //                   nodeType: 'operator',
// //                   value: op.value,
// //                   name: operators[op.value].name,
// //                   expression: expression,
// //                   children: [operand]
// //                 });
// //               } else {
// //                 // Binary operator
// //                 const right = outputQueue.pop();
// //                 const left = outputQueue.pop();
// //                 const expression = `(${left.expression} ${op.value} ${right.expression})`;
// //                 outputQueue.push({
// //                   type: 'node',
// //                   nodeType: 'operator',
// //                   value: op.value,
// //                   name: operators[op.value].name,
// //                   expression: expression,
// //                   children: [left, right]
// //                 });
// //               }
// //             }
            
// //             // Pop the open parenthesis
// //             if (operatorStack.length === 0 || operatorStack[operatorStack.length - 1].type !== 'open_paren') {
// //               throw new Error('Mismatched parentheses');
// //             }
// //             operatorStack.pop();
// //             break;
// //         }
// //       }
      
// //       // Process remaining operators
// //       while (operatorStack.length > 0) {
// //         const op = operatorStack.pop();
        
// //         if (op.type === 'open_paren' || op.type === 'close_paren') {
// //           throw new Error('Mismatched parentheses');
// //         }
        
// //         if (op.value === '¬') {
// //           // Unary operator
// //           const operand = outputQueue.pop();
// //           const expression = `${op.value}${operand.expression}`;
// //           outputQueue.push({
// //             type: 'node',
// //             nodeType: 'operator',
// //             value: op.value,
// //             name: operators[op.value].name,
// //             expression: expression,
// //             children: [operand]
// //           });
// //         } else {
// //           // Binary operator
// //           const right = outputQueue.pop();
// //           const left = outputQueue.pop();
// //           const expression = `(${left.expression} ${op.value} ${right.expression})`;
// //           outputQueue.push({
// //             type: 'node',
// //             nodeType: 'operator',
// //             value: op.value,
// //             name: operators[op.value].name,
// //             expression: expression,
// //             children: [left, right]
// //           });
// //         }
// //       }
      
// //       if (outputQueue.length !== 1) {
// //         throw new Error('Invalid expression');
// //       }
      
// //       setIsValid(true);
// //       setErrorMessage('');
// //       return outputQueue[0];
// //     } catch (error) {
// //       setIsValid(false);
// //       setErrorMessage(error.message);
// //       return null;
// //     }
// //   };
  
// //   // Evaluate the tree for a given variable assignment
// //   const evaluateTree = (node, assignment) => {
// //     if (!node) return null;
    
// //     if (node.nodeType === 'variable') {
// //       return assignment[node.value] || false;
// //     }
    
// //     if (node.nodeType === 'operator') {
// //       switch (node.value) {
// //         case '¬':
// //           return !evaluateTree(node.children[0], assignment);
// //         case '∧':
// //           return evaluateTree(node.children[0], assignment) && evaluateTree(node.children[1], assignment);
// //         case '∨':
// //           return evaluateTree(node.children[0], assignment) || evaluateTree(node.children[1], assignment);
// //         case '→':
// //           return !evaluateTree(node.children[0], assignment) || evaluateTree(node.children[1], assignment);
// //         case '↔':
// //           return evaluateTree(node.children[0], assignment) === evaluateTree(node.children[1], assignment);
// //         case '⊕':
// //           return evaluateTree(node.children[0], assignment) !== evaluateTree(node.children[1], assignment);
// //         default:
// //           return false;
// //       }
// //     }
    
// //     return false;
// //   };
  
// //   // Generate truth table from the tree
// //   const generateTruthTable = (tree) => {
// //     if (!tree) return [];
    
// //     // Extract unique variables
// //     const variables = new Set();
// //     const extractVariables = (node) => {
// //       if (!node) return;
      
// //       if (node.nodeType === 'variable') {
// //         variables.add(node.value);
// //       }
      
// //       if (node.children) {
// //         for (const child of node.children) {
// //           extractVariables(child);
// //         }
// //       }
// //     };
    
// //     extractVariables(tree);
// //     const variableArray = Array.from(variables).sort();
    
// //     // Generate all possible variable assignments
// //     const truthTable = [];
// //     const totalRows = Math.pow(2, variableArray.length);
    
// //     for (let i = 0; i < totalRows; i++) {
// //       const assignment = {};
// //       const row = { values: {} };
      
// //       for (let j = 0; j < variableArray.length; j++) {
// //         const variable = variableArray[j];
// //         const value = Boolean((i >> j) & 1);
// //         assignment[variable] = value;
// //         row.values[variable] = value;
// //       }
      
// //       row.result = evaluateTree(tree, assignment);
// //       truthTable.push(row);
// //     }
    
// //     return { variables: variableArray, rows: truthTable };
// //   };
  
// //   // Render the tree node vertically
// //   const renderTreeNode = (node, index = 0) => {
// //     if (!node) return null;
    
// //     const nodeClass = `${styles.treeNode} ${
// //       node.nodeType === 'operator' ? styles.operatorNode : styles.variableNode
// //     }`;
    
// //     // If no children, render as leaf node
// //     if (!node.children || node.children.length === 0) {
// //       return (
// //         <div className={styles.treeNodeWrapper}>
// //           <div className={nodeClass}>
// //             {node.expression}
// //           </div>
// //         </div>
// //       );
// //     }
    
// //     // If it has children, render with branches
// //     return (
// //       <div className={styles.treeNodeWithChildren}>
// //         <div className={styles.treeNodeWrapper}>
// //           <div className={nodeClass}>
// //             {node.expression}
// //           </div>
// //         </div>
// //         <div className={styles.branchContainer}>
// //           {node.children.map((child, idx) => (
// //             <div key={idx} className={styles.branch}>
// //               <div className={styles.branchLine}></div>
// //               {renderTreeNode(child, idx)}
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     );
// //   };
  
// //   // Handle input changes
// //   const handleInputChange = (e) => {
// //     const newValue = e.target.value;
// //     setProposition(newValue);
    
// //     // Add to history
// //     if (newValue !== history[historyIndex]) {
// //       const newHistory = history.slice(0, historyIndex + 1);
// //       newHistory.push(newValue);
// //       setHistory(newHistory);
// //       setHistoryIndex(newHistory.length - 1);
// //     }
// //   };

// //   // Handle character insertion
// //   const handleCharacterClick = (char) => {
// //     // Get cursor position
// //     const inputElement = document.getElementById('propositionInput');
// //     if (!inputElement) {
// //       // If input element not found, append to end (fallback)
// //       const newValue = proposition + char;
// //       setProposition(newValue);
      
// //       // Add to history
// //       const newHistory = history.slice(0, historyIndex + 1);
// //       newHistory.push(newValue);
// //       setHistory(newHistory);
// //       setHistoryIndex(newHistory.length - 1);
// //       return;
// //     }
    
// //     const cursorPos = inputElement.selectionStart;
// //     // Insert at cursor position
// //     const newValue = proposition.substring(0, cursorPos) + char + proposition.substring(cursorPos);
// //     setProposition(newValue);
    
// //     // Add to history
// //     const newHistory = history.slice(0, historyIndex + 1);
// //     newHistory.push(newValue);
// //     setHistory(newHistory);
// //     setHistoryIndex(newHistory.length - 1);
    
// //     // Set cursor position after the inserted character
// //     setTimeout(() => {
// //       inputElement.focus();
// //       inputElement.setSelectionRange(cursorPos + char.length, cursorPos + char.length);
// //     }, 0);
// //   };

// //   // Handle undo
// //   const handleUndo = () => {
// //     if (historyIndex > 0) {
// //       setHistoryIndex(historyIndex - 1);
// //       setProposition(history[historyIndex - 1]);
// //     }
// //   };

// //   // Handle reset
// //   const handleReset = () => {
// //     setProposition('');
// //     const newHistory = [...history, ''];
// //     setHistory(newHistory);
// //     setHistoryIndex(newHistory.length - 1);
// //   };
  
// //   // Analyze the proposition
// //   const analyzeProposition = () => {
// //     const tree = parseProposition(proposition);
// //     setTreeData(tree);
    
// //     if (tree) {
// //       const table = generateTruthTable(tree);
// //       setTruthTable(table);
// //     } else {
// //       setTruthTable([]);
// //     }
// //   };
  
// //   // Check if the proposition is a tautology
// //   const isTautology = () => {
// //     if (!truthTable || !truthTable.rows) return false;
// //     return truthTable.rows.every(row => row.result === true);
// //   };
  
// //   // Check if the proposition is a contradiction
// //   const isContradiction = () => {
// //     if (!truthTable || !truthTable.rows) return false;
// //     return truthTable.rows.every(row => row.result === false);
// //   };
  
// //   // Analyze on proposition change
// //   useEffect(() => {
// //     analyzeProposition();
// //   }, [proposition]);
  
// //   return (
// //     <div className={styles.container}>
// //       <div className={styles.inputSection}>
// //         <div className={styles.controlsRow}>
// //           <div className={styles.inputContainer}>
// //             <input
// //               id="propositionInput"
// //               type="text"
// //               value={proposition}
// //               onChange={handleInputChange}
// //               className={`${styles.propositionInput} ${!isValid ? styles.error : ''}`}
// //               placeholder="Enter logical proposition"
// //             />
// //             <div className={styles.buttonContainer}>
// //               <button onClick={handleUndo} className={styles.functionButton} disabled={historyIndex <= 0}>
// //                 ↩
// //               </button>
// //               <button onClick={handleReset} className={styles.clearButton}>
// //                 ✕
// //               </button>
// //               <button onClick={analyzeProposition} className={styles.analyzeButton}>
// //                 Analyze
// //               </button>
// //             </div>
// //           </div>
          
// //           <div className={styles.keyboardContainer}>
// //             <div className={styles.charactersRow}>
// //               {propChars.map((char) => (
// //                 <button
// //                   key={char}
// //                   className={styles.charButton}
// //                   onClick={() => handleCharacterClick(char)}
// //                 >
// //                   {char}
// //                 </button>
// //               ))}
// //             </div>
// //             <div className={styles.operatorsRow}>
// //               {Object.entries(operators).map(([symbol, details]) => (
// //                 <button
// //                   key={symbol}
// //                   className={styles.operatorButton}
// //                   onClick={() => handleCharacterClick(symbol)}
// //                 >
// //                   {symbol}
// //                 </button>
// //               ))}
// //               <button
// //                 className={styles.operatorButton}
// //                 onClick={() => handleCharacterClick('(')}
// //               >
// //                 (
// //               </button>
// //               <button
// //                 className={styles.operatorButton}
// //                 onClick={() => handleCharacterClick(')')}
// //               >
// //                 )
// //               </button>
// //             </div>
// //           </div>
// //         </div>
        
// //         {!isValid && (
// //           <div className={styles.errorMessage}>
// //             Error: {errorMessage}
// //           </div>
// //         )}
// //       </div>
      
// //       <div className={styles.resultsContainer}>
// //         <div className={styles.resultSection}>
// //           <h3>Syntax Tree</h3>
// //           <div className={styles.treeContainer}>
// //             {treeData ? (
// //               <div className={styles.verticalTreeDisplay}>
// //                 {renderTreeNode(treeData)}
// //               </div>
// //             ) : (
// //               <div className={styles.noData}>No valid tree to display</div>
// //             )}
// //           </div>
// //         </div>
        
// //         <div className={styles.resultSection}>
// //           <h3>
// //             Truth Table
// //             {isTautology() && (
// //               <span className={styles.tautologyBadge}>Tautology</span>
// //             )}
// //             {isContradiction() && (
// //               <span className={styles.contradictionBadge}>Contradiction</span>
// //             )}
// //             {!isTautology() && !isContradiction() && truthTable.rows && (
// //               <span className={styles.contingencyBadge}>Contingent</span>
// //             )}
// //           </h3>
          
// //           {truthTable && truthTable.variables && truthTable.variables.length > 0 ? (
// //             <table className={styles.truthTable}>
// //               <thead>
// //                 <tr>
// //                   {truthTable.variables.map(variable => (
// //                     <th key={variable}>{variable}</th>
// //                   ))}
// //                   <th>{proposition}</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {truthTable.rows.map((row, index) => (
// //                   <tr key={index}>
// //                     {truthTable.variables.map(variable => (
// //                       <td key={variable} className={row.values[variable] ? styles.trueValue : styles.falseValue}>
// //                         {row.values[variable] ? 'T' : 'F'}
// //                       </td>
// //                     ))}
// //                     <td className={row.result ? styles.trueValue : styles.falseValue}>
// //                       {row.result ? 'T' : 'F'}
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           ) : (
// //             <div className={styles.noData}>No truth table to display</div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PropositionTreeBuilder;


// import React, { useState, useEffect } from 'react';
// import styles from './PropositionTreeBuilder.module.css';

// const PropositionTreeBuilder = () => {
//   const [proposition, setProposition] = useState('(P → Q) ∧ (¬P ∨ Q)');
//   const [history, setHistory] = useState(['(P → Q) ∧ (¬P ∨ Q)']);
//   const [historyIndex, setHistoryIndex] = useState(0);
//   const [isValid, setIsValid] = useState(true);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [treeData, setTreeData] = useState(null);
//   const [truthTable, setTruthTable] = useState([]);
//   const [copySuccess, setCopySuccess] = useState(false);
  
//   // Supported operators
//   const operators = {
//     '∧': { precedence: 2, name: 'AND', description: 'Logical AND - Both statements must be true' },
//     '∨': { precedence: 2, name: 'OR', description: 'Logical OR - At least one statement must be true' },
//     '→': { precedence: 1, name: 'IMPLIES', description: 'Implication - If P then Q' },
//     '↔': { precedence: 1, name: 'EQUIVALENT', description: 'Logical equivalence - Both statements have the same truth value' },
//     '⊕': { precedence: 2, name: 'XOR', description: 'Exclusive OR - Only one statement must be true' },
//     '¬': { precedence: 3, name: 'NOT', description: 'Negation - Opposite truth value' }
//   };

//   // Proposition characters
//   const propChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
//   // Handle copy to clipboard
//   const handleCopy = () => {
//     navigator.clipboard.writeText(proposition)
//       .then(() => {
//         setCopySuccess(true);
//         setTimeout(() => setCopySuccess(false), 2000);
//       })
//       .catch(err => {
//         console.error('Failed to copy text: ', err);
//       });
//   };
  
//   // Parse the proposition and build the tree
//   const parseProposition = (expr) => {
//     let tokens = tokenize(expr);
//     if (!tokens) return null;
    
//     return buildTree(tokens);
//   };
  
//   // Tokenize the proposition string
//   const tokenize = (expr) => {
//     try {
//       const tokens = [];
//       let i = 0;
      
//       while (i < expr.length) {
//         const char = expr[i];
        
//         if (char === ' ') {
//           i++;
//           continue;
//         }
        
//         if (char === '(' || char === ')') {
//           tokens.push({
//             type: char === '(' ? 'open_paren' : 'close_paren',
//             value: char
//           });
//           i++;
//           continue;
//         }
        
//         if (/[A-Z]/.test(char)) {
//           tokens.push({
//             type: 'variable',
//             value: char
//           });
//           i++;
//           continue;
//         }
        
//         // Check for operators
//         let foundOperator = false;
//         for (const op in operators) {
//           if (expr.substring(i).startsWith(op)) {
//             tokens.push({
//               type: 'operator',
//               value: op
//             });
//             i += op.length;
//             foundOperator = true;
//             break;
//           }
//         }
        
//         if (!foundOperator) {
//           throw new Error(`Unknown token: ${char} at position ${i}`);
//         }
//       }
      
//       // Check for negation after variable (invalid)
//       for (let i = 0; i < tokens.length - 1; i++) {
//         if (tokens[i].type === 'variable' && tokens[i+1].type === 'operator' && tokens[i+1].value === '¬') {
//           throw new Error(`Invalid negation after variable: ${tokens[i].value}${tokens[i+1].value} at position ${i}`);
//         }
//       }
      
//       return tokens;
//     } catch (error) {
//       setIsValid(false);
//       setErrorMessage(error.message);
//       return null;
//     }
//   };
  
//   // Build the syntax tree from tokens
//   const buildTree = (tokens) => {
//     try {
//       // Implementation of Shunting-yard algorithm to handle operator precedence
//       const outputQueue = [];
//       const operatorStack = [];
      
//       for (let i = 0; i < tokens.length; i++) {
//         const token = tokens[i];
        
//         switch (token.type) {
//           case 'variable':
//             outputQueue.push({
//               type: 'node',
//               nodeType: 'variable',
//               value: token.value,
//               expression: token.value,
//               children: []
//             });
//             break;
            
//           case 'operator':
//             // Handle unary operator (negation)
//             if (token.value === '¬') {
//               // Negation has highest precedence
//               operatorStack.push(token);
//             } else {
//               // Binary operators
//               const currentOp = operators[token.value];
              
//               while (
//                 operatorStack.length > 0 &&
//                 operatorStack[operatorStack.length - 1].type === 'operator' &&
//                 operators[operatorStack[operatorStack.length - 1].value].precedence >= currentOp.precedence
//               ) {
//                 const op = operatorStack.pop();
                
//                 if (op.value === '¬') {
//                   // Unary operator
//                   const operand = outputQueue.pop();
//                   const expression = `${op.value}${operand.expression}`;
//                   outputQueue.push({
//                     type: 'node',
//                     nodeType: 'operator',
//                     value: op.value,
//                     name: operators[op.value].name,
//                     expression: expression,
//                     children: [operand]
//                   });
//                 } else {
//                   // Binary operator
//                   const right = outputQueue.pop();
//                   const left = outputQueue.pop();
//                   const expression = `(${left.expression} ${op.value} ${right.expression})`;
//                   outputQueue.push({
//                     type: 'node',
//                     nodeType: 'operator',
//                     value: op.value,
//                     name: operators[op.value].name,
//                     expression: expression,
//                     children: [left, right]
//                   });
//                 }
//               }
              
//               operatorStack.push(token);
//             }
//             break;
            
//           case 'open_paren':
//             operatorStack.push(token);
//             break;
            
//           case 'close_paren':
//             while (
//               operatorStack.length > 0 &&
//               operatorStack[operatorStack.length - 1].type !== 'open_paren'
//             ) {
//               const op = operatorStack.pop();
              
//               if (op.value === '¬') {
//                 // Unary operator
//                 const operand = outputQueue.pop();
//                 const expression = `${op.value}${operand.expression}`;
//                 outputQueue.push({
//                   type: 'node',
//                   nodeType: 'operator',
//                   value: op.value,
//                   name: operators[op.value].name,
//                   expression: expression,
//                   children: [operand]
//                 });
//               } else {
//                 // Binary operator
//                 const right = outputQueue.pop();
//                 const left = outputQueue.pop();
//                 const expression = `(${left.expression} ${op.value} ${right.expression})`;
//                 outputQueue.push({
//                   type: 'node',
//                   nodeType: 'operator',
//                   value: op.value,
//                   name: operators[op.value].name,
//                   expression: expression,
//                   children: [left, right]
//                 });
//               }
//             }
            
//             // Pop the open parenthesis
//             if (operatorStack.length === 0 || operatorStack[operatorStack.length - 1].type !== 'open_paren') {
//               throw new Error('Mismatched parentheses');
//             }
//             operatorStack.pop();
//             break;
//         }
//       }
      
//       // Process remaining operators
//       while (operatorStack.length > 0) {
//         const op = operatorStack.pop();
        
//         if (op.type === 'open_paren' || op.type === 'close_paren') {
//           throw new Error('Mismatched parentheses');
//         }
        
//         if (op.value === '¬') {
//           // Unary operator
//           const operand = outputQueue.pop();
//           const expression = `${op.value}${operand.expression}`;
//           outputQueue.push({
//             type: 'node',
//             nodeType: 'operator',
//             value: op.value,
//             name: operators[op.value].name,
//             expression: expression,
//             children: [operand]
//           });
//         } else {
//           // Binary operator
//           const right = outputQueue.pop();
//           const left = outputQueue.pop();
//           const expression = `(${left.expression} ${op.value} ${right.expression})`;
//           outputQueue.push({
//             type: 'node',
//             nodeType: 'operator',
//             value: op.value,
//             name: operators[op.value].name,
//             expression: expression,
//             children: [left, right]
//           });
//         }
//       }
      
//       if (outputQueue.length !== 1) {
//         throw new Error('Invalid expression');
//       }
      
//       setIsValid(true);
//       setErrorMessage('');
//       return outputQueue[0];
//     } catch (error) {
//       setIsValid(false);
//       setErrorMessage(error.message);
//       return null;
//     }
//   };
  
//   // Evaluate the tree for a given variable assignment
//   const evaluateTree = (node, assignment) => {
//     if (!node) return null;
    
//     if (node.nodeType === 'variable') {
//       return assignment[node.value] || false;
//     }
    
//     if (node.nodeType === 'operator') {
//       switch (node.value) {
//         case '¬':
//           return !evaluateTree(node.children[0], assignment);
//         case '∧':
//           return evaluateTree(node.children[0], assignment) && evaluateTree(node.children[1], assignment);
//         case '∨':
//           return evaluateTree(node.children[0], assignment) || evaluateTree(node.children[1], assignment);
//         case '→':
//           return !evaluateTree(node.children[0], assignment) || evaluateTree(node.children[1], assignment);
//         case '↔':
//           return evaluateTree(node.children[0], assignment) === evaluateTree(node.children[1], assignment);
//         case '⊕':
//           return evaluateTree(node.children[0], assignment) !== evaluateTree(node.children[1], assignment);
//         default:
//           return false;
//       }
//     }
    
//     return false;
//   };
  
//   // Generate truth table from the tree
//   const generateTruthTable = (tree) => {
//     if (!tree) return [];
    
//     // Extract unique variables
//     const variables = new Set();
//     const extractVariables = (node) => {
//       if (!node) return;
      
//       if (node.nodeType === 'variable') {
//         variables.add(node.value);
//       }
      
//       if (node.children) {
//         for (const child of node.children) {
//           extractVariables(child);
//         }
//       }
//     };
    
//     extractVariables(tree);
//     const variableArray = Array.from(variables).sort();
    
//     // Generate all possible variable assignments
//     const truthTable = [];
//     const totalRows = Math.pow(2, variableArray.length);
    
//     for (let i = 0; i < totalRows; i++) {
//       const assignment = {};
//       const row = { values: {} };
      
//       for (let j = 0; j < variableArray.length; j++) {
//         const variable = variableArray[j];
//         const value = Boolean((i >> j) & 1);
//         assignment[variable] = value;
//         row.values[variable] = value;
//       }
      
//       row.result = evaluateTree(tree, assignment);
//       truthTable.push(row);
//     }
    
//     return { variables: variableArray, rows: truthTable };
//   };
  
//   // Render the tree node vertically
//   const renderTreeNode = (node, index = 0) => {
//     if (!node) return null;
    
//     const nodeClass = `${styles.treeNode} ${
//       node.nodeType === 'operator' ? styles.operatorNode : styles.variableNode
//     }`;
    
//     // If no children, render as leaf node
//     if (!node.children || node.children.length === 0) {
//       return (
//         <div className={styles.treeNodeWrapper}>
//           <div className={nodeClass}>
//             {node.expression}
//           </div>
//         </div>
//       );
//     }
    
//     // If it has children, render with branches
//     return (
//       <div className={styles.treeNodeWithChildren}>
//         <div className={styles.treeNodeWrapper}>
//           <div className={nodeClass}>
//             {node.expression}
//           </div>
//         </div>
//         <div className={styles.branchContainer}>
//           {node.children.map((child, idx) => (
//             <div key={idx} className={styles.branch}>
//               <div className={styles.branchLine}></div>
//               {renderTreeNode(child, idx)}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   // Handle input changes
//   const handleInputChange = (e) => {
//     const newValue = e.target.value;
//     setProposition(newValue);
    
//     // Add to history
//     if (newValue !== history[historyIndex]) {
//       const newHistory = history.slice(0, historyIndex + 1);
//       newHistory.push(newValue);
//       setHistory(newHistory);
//       setHistoryIndex(newHistory.length - 1);
//     }
//   };

//   // Handle character insertion
//   const handleCharacterClick = (char) => {
//     // Get cursor position
//     const inputElement = document.getElementById('propositionInput');
//     if (!inputElement) {
//       // If input element not found, append to end (fallback)
//       const newValue = proposition + char;
//       setProposition(newValue);
      
//       // Add to history
//       const newHistory = history.slice(0, historyIndex + 1);
//       newHistory.push(newValue);
//       setHistory(newHistory);
//       setHistoryIndex(newHistory.length - 1);
//       return;
//     }
    
//     const cursorPos = inputElement.selectionStart;
//     // Insert at cursor position
//     const newValue = proposition.substring(0, cursorPos) + char + proposition.substring(cursorPos);
//     setProposition(newValue);
    
//     // Add to history
//     const newHistory = history.slice(0, historyIndex + 1);
//     newHistory.push(newValue);
//     setHistory(newHistory);
//     setHistoryIndex(newHistory.length - 1);
    
//     // Set cursor position after the inserted character
//     setTimeout(() => {
//       inputElement.focus();
//       inputElement.setSelectionRange(cursorPos + char.length, cursorPos + char.length);
//     }, 0);
//   };

//   // Handle undo
//   const handleUndo = () => {
//     if (historyIndex > 0) {
//       setHistoryIndex(historyIndex - 1);
//       setProposition(history[historyIndex - 1]);
//     }
//   };

//   // Handle reset
//   const handleReset = () => {
//     setProposition('');
//     const newHistory = [...history, ''];
//     setHistory(newHistory);
//     setHistoryIndex(newHistory.length - 1);
//   };
  
//   // Analyze the proposition
//   const analyzeProposition = () => {
//     const tree = parseProposition(proposition);
//     setTreeData(tree);
    
//     if (tree) {
//       const table = generateTruthTable(tree);
//       setTruthTable(table);
//     } else {
//       setTruthTable([]);
//     }
//   };
  
//   // Check if the proposition is a tautology
//   const isTautology = () => {
//     if (!truthTable || !truthTable.rows) return false;
//     return truthTable.rows.every(row => row.result === true);
//   };
  
//   // Check if the proposition is a contradiction
//   const isContradiction = () => {
//     if (!truthTable || !truthTable.rows) return false;
//     return truthTable.rows.every(row => row.result === false);
//   };
  
//   // Analyze on proposition change
//   useEffect(() => {
//     analyzeProposition();
//   }, [proposition]);
  
//   return (
//     <div className={styles.container}>
//       <div className={styles.inputSection}>
//         <div className={styles.controlsRow}>
//           <div className={styles.inputContainer}>
//             <input
//               id="propositionInput"
//               type="text"
//               value={proposition}
//               onChange={handleInputChange}
//               className={`${styles.propositionInput} ${!isValid ? styles.error : ''}`}
//               placeholder="Enter logical proposition"
//             />
//             <div className={styles.buttonContainer}>
//               <button onClick={handleCopy} className={styles.copyButton} title="Copy to clipboard">
//                 {copySuccess ? '✓' : '📋'}
//               </button>
//               <button onClick={handleUndo} className={styles.functionButton} disabled={historyIndex <= 0} title="Undo">
//                 ↩
//               </button>
//               <button onClick={handleReset} className={styles.clearButton} title="Clear">
//                 ✕
//               </button>
//               <button onClick={analyzeProposition} className={styles.analyzeButton}>
//                 Analyze
//               </button>
//             </div>
//           </div>
          
//           <div className={styles.keyboardContainer}>
//             <div className={styles.charactersRow}>
//               {propChars.map((char) => (
//                 <button
//                   key={char}
//                   className={styles.charButton}
//                   onClick={() => handleCharacterClick(char)}
//                 >
//                   {char}
//                 </button>
//               ))}
//             </div>
//             <div className={styles.operatorsRow}>
//               {Object.entries(operators).map(([symbol, details]) => (
//                 <div key={symbol} className={styles.tooltip}>
//                   <button
//                     className={styles.operatorButton}
//                     onClick={() => handleCharacterClick(symbol)}
//                   >
//                     {symbol}
//                   </button>
//                   <span className={styles.tooltipText}>{details.name}: {details.description}</span>
//                 </div>
//               ))}
//               <div className={styles.tooltip}>
//                 <button
//                   className={styles.operatorButton}
//                   onClick={() => handleCharacterClick('(')}
//                 >
//                   (
//                 </button>
//                 <span className={styles.tooltipText}>Opening parenthesis</span>
//               </div>
//               <div className={styles.tooltip}>
//                 <button
//                   className={styles.operatorButton}
//                   onClick={() => handleCharacterClick(')')}
//                 >
//                   )
//                 </button>
//                 <span className={styles.tooltipText}>Closing parenthesis</span>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {!isValid && (
//           <div className={styles.errorMessage}>
//             Error: {errorMessage}
//           </div>
//         )}
//       </div>
      
//       <div className={styles.resultsContainer}>
//         <div className={styles.resultSection}>
//           <h3>Syntax Tree</h3>
//           <div className={styles.treeContainer}>
//             {treeData ? (
//               <div className={styles.verticalTreeDisplay}>
//                 {renderTreeNode(treeData)}
//               </div>
//             ) : (
//               <div className={styles.noData}>No valid tree to display</div>
//             )}
//           </div>
//         </div>
        
//         <div className={styles.resultSection}>
//           <h3>
//             Truth Table
//             {isTautology() && (
//               <span className={styles.tautologyBadge}>Tautology</span>
//             )}
//             {isContradiction() && (
//               <span className={styles.contradictionBadge}>Contradiction</span>
//             )}
//             {!isTautology() && !isContradiction() && truthTable.rows && (
//               <span className={styles.contingencyBadge}>Contingent</span>
//             )}
//           </h3>
          
//           {truthTable && truthTable.variables && truthTable.variables.length > 0 ? (
//             <table className={styles.truthTable}>
//               <thead>
//                 <tr>
//                   {truthTable.variables.map(variable => (
//                     <th key={variable}>{variable}</th>
//                   ))}
//                   <th>{proposition}</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {truthTable.rows.map((row, index) => (
//                   <tr key={index}>
//                     {truthTable.variables.map(variable => (
//                       <td key={variable} className={row.values[variable] ? styles.trueValue : styles.falseValue}>
//                         {row.values[variable] ? 'T' : 'F'}
//                       </td>
//                     ))}
//                     <td className={row.result ? styles.trueValue : styles.falseValue}>
//                       {row.result ? 'T' : 'F'}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <div className={styles.noData}>No truth table to display</div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropositionTreeBuilder;

import React, { useState, useEffect } from 'react';
import styles from './PropositionTreeBuilder.module.css';

const PropositionTreeBuilder = () => {
  const [proposition, setProposition] = useState('(P → Q) ∧ (¬P ∨ Q)');
  const [history, setHistory] = useState(['(P → Q) ∧ (¬P ∨ Q)']);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [treeData, setTreeData] = useState(null);
  const [truthTable, setTruthTable] = useState([]);
  const [copySuccess, setCopySuccess] = useState(false);
  
  // Supported operators
  const operators = {
    '∧': { precedence: 2, name: 'AND', description: 'Logical AND - Both statements must be true' },
    '∨': { precedence: 2, name: 'OR', description: 'Logical OR - At least one statement must be true' },
    '→': { precedence: 1, name: 'IMPLIES', description: 'Implication - If P then Q' },
    '↔': { precedence: 1, name: 'EQUIVALENT', description: 'Logical equivalence - Both statements have the same truth value' },
    '⊕': { precedence: 2, name: 'XOR', description: 'Exclusive OR - Only one statement must be true' },
    '¬': { precedence: 3, name: 'NOT', description: 'Negation - Opposite truth value' }
  };

  // Proposition characters
  const propChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  // Handle copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(proposition)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };
  
  // Parse the proposition and build the tree
  const parseProposition = (expr) => {
    let tokens = tokenize(expr);
    if (!tokens) return null;
    
    return buildTree(tokens);
  };
  
  // Tokenize the proposition string
  const tokenize = (expr) => {
    try {
      const tokens = [];
      let i = 0;
      
      while (i < expr.length) {
        const char = expr[i];
        
        if (char === ' ') {
          i++;
          continue;
        }
        
        if (char === '(' || char === ')') {
          tokens.push({
            type: char === '(' ? 'open_paren' : 'close_paren',
            value: char
          });
          i++;
          continue;
        }
        
        if (/[A-Z]/.test(char)) {
          tokens.push({
            type: 'variable',
            value: char
          });
          i++;
          continue;
        }
        
        // Check for operators
        let foundOperator = false;
        for (const op in operators) {
          if (expr.substring(i).startsWith(op)) {
            tokens.push({
              type: 'operator',
              value: op
            });
            i += op.length;
            foundOperator = true;
            break;
          }
        }
        
        if (!foundOperator) {
          throw new Error(`Unknown token: ${char} at position ${i}`);
        }
      }
      
      // Check for negation after variable (invalid)
      for (let i = 0; i < tokens.length - 1; i++) {
        if (tokens[i].type === 'variable' && tokens[i+1].type === 'operator' && tokens[i+1].value === '¬') {
          throw new Error(`Invalid negation after variable: ${tokens[i].value}${tokens[i+1].value} at position ${i}`);
        }
      }
      
      return tokens;
    } catch (error) {
      setIsValid(false);
      setErrorMessage(error.message);
      return null;
    }
  };
  
  // Build the syntax tree from tokens
  const buildTree = (tokens) => {
    try {
      // Implementation of Shunting-yard algorithm to handle operator precedence
      const outputQueue = [];
      const operatorStack = [];
      
      for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        
        switch (token.type) {
          case 'variable':
            outputQueue.push({
              type: 'node',
              nodeType: 'variable',
              value: token.value,
              expression: token.value,
              children: []
            });
            break;
            
          case 'operator':
            // Handle unary operator (negation)
            if (token.value === '¬') {
              // Negation has highest precedence
              operatorStack.push(token);
            } else {
              // Binary operators
              const currentOp = operators[token.value];
              
              while (
                operatorStack.length > 0 &&
                operatorStack[operatorStack.length - 1].type === 'operator' &&
                operators[operatorStack[operatorStack.length - 1].value].precedence >= currentOp.precedence
              ) {
                const op = operatorStack.pop();
                
                if (op.value === '¬') {
                  // Unary operator
                  const operand = outputQueue.pop();
                  const expression = `${op.value}${operand.expression}`;
                  outputQueue.push({
                    type: 'node',
                    nodeType: 'operator',
                    value: op.value,
                    name: operators[op.value].name,
                    expression: expression,
                    children: [operand]
                  });
                } else {
                  // Binary operator
                  const right = outputQueue.pop();
                  const left = outputQueue.pop();
                  const expression = `(${left.expression} ${op.value} ${right.expression})`;
                  outputQueue.push({
                    type: 'node',
                    nodeType: 'operator',
                    value: op.value,
                    name: operators[op.value].name,
                    expression: expression,
                    children: [left, right]
                  });
                }
              }
              
              operatorStack.push(token);
            }
            break;
            
          case 'open_paren':
            operatorStack.push(token);
            break;
            
          case 'close_paren':
            while (
              operatorStack.length > 0 &&
              operatorStack[operatorStack.length - 1].type !== 'open_paren'
            ) {
              const op = operatorStack.pop();
              
              if (op.value === '¬') {
                // Unary operator
                const operand = outputQueue.pop();
                const expression = `${op.value}${operand.expression}`;
                outputQueue.push({
                  type: 'node',
                  nodeType: 'operator',
                  value: op.value,
                  name: operators[op.value].name,
                  expression: expression,
                  children: [operand]
                });
              } else {
                // Binary operator
                const right = outputQueue.pop();
                const left = outputQueue.pop();
                const expression = `(${left.expression} ${op.value} ${right.expression})`;
                outputQueue.push({
                  type: 'node',
                  nodeType: 'operator',
                  value: op.value,
                  name: operators[op.value].name,
                  expression: expression,
                  children: [left, right]
                });
              }
            }
            
            // Pop the open parenthesis
            if (operatorStack.length === 0 || operatorStack[operatorStack.length - 1].type !== 'open_paren') {
              throw new Error('Mismatched parentheses');
            }
            operatorStack.pop();
            break;
        }
      }
      
      // Process remaining operators
      while (operatorStack.length > 0) {
        const op = operatorStack.pop();
        
        if (op.type === 'open_paren' || op.type === 'close_paren') {
          throw new Error('Mismatched parentheses');
        }
        
        if (op.value === '¬') {
          // Unary operator
          const operand = outputQueue.pop();
          const expression = `${op.value}${operand.expression}`;
          outputQueue.push({
            type: 'node',
            nodeType: 'operator',
            value: op.value,
            name: operators[op.value].name,
            expression: expression,
            children: [operand]
          });
        } else {
          // Binary operator
          const right = outputQueue.pop();
          const left = outputQueue.pop();
          const expression = `(${left.expression} ${op.value} ${right.expression})`;
          outputQueue.push({
            type: 'node',
            nodeType: 'operator',
            value: op.value,
            name: operators[op.value].name,
            expression: expression,
            children: [left, right]
          });
        }
      }
      
      if (outputQueue.length !== 1) {
        throw new Error('Invalid expression');
      }
      
      setIsValid(true);
      setErrorMessage('');
      return outputQueue[0];
    } catch (error) {
      setIsValid(false);
      setErrorMessage(error.message);
      return null;
    }
  };
  
  // Evaluate the tree for a given variable assignment
  const evaluateTree = (node, assignment) => {
    if (!node) return null;
    
    if (node.nodeType === 'variable') {
      return assignment[node.value] || false;
    }
    
    if (node.nodeType === 'operator') {
      switch (node.value) {
        case '¬':
          return !evaluateTree(node.children[0], assignment);
        case '∧':
          return evaluateTree(node.children[0], assignment) && evaluateTree(node.children[1], assignment);
        case '∨':
          return evaluateTree(node.children[0], assignment) || evaluateTree(node.children[1], assignment);
        case '→':
          return !evaluateTree(node.children[0], assignment) || evaluateTree(node.children[1], assignment);
        case '↔':
          return evaluateTree(node.children[0], assignment) === evaluateTree(node.children[1], assignment);
        case '⊕':
          return evaluateTree(node.children[0], assignment) !== evaluateTree(node.children[1], assignment);
        default:
          return false;
      }
    }
    
    return false;
  };
  
  // Generate truth table from the tree
  const generateTruthTable = (tree) => {
    if (!tree) return [];
    
    // Extract unique variables
    const variables = new Set();
    const extractVariables = (node) => {
      if (!node) return;
      
      if (node.nodeType === 'variable') {
        variables.add(node.value);
      }
      
      if (node.children) {
        for (const child of node.children) {
          extractVariables(child);
        }
      }
    };
    
    extractVariables(tree);
    const variableArray = Array.from(variables).sort();
    
    // Generate all possible variable assignments
    const truthTable = [];
    const totalRows = Math.pow(2, variableArray.length);
    
    for (let i = 0; i < totalRows; i++) {
      const assignment = {};
      const row = { values: {} };
      
      for (let j = 0; j < variableArray.length; j++) {
        const variable = variableArray[j];
        const value = Boolean((i >> j) & 1);
        assignment[variable] = value;
        row.values[variable] = value;
      }
      
      row.result = evaluateTree(tree, assignment);
      truthTable.push(row);
    }
    
    return { variables: variableArray, rows: truthTable };
  };
  
  // Render the tree node vertically
  const renderTreeNode = (node, index = 0) => {
    if (!node) return null;
    
    const nodeClass = `${styles.treeNode} ${
      node.nodeType === 'operator' ? styles.operatorNode : styles.variableNode
    }`;
    
    // If no children, render as leaf node
    if (!node.children || node.children.length === 0) {
      return (
        <div className={styles.treeNodeWrapper}>
          <div className={nodeClass}>
            {node.expression}
          </div>
        </div>
      );
    }
    
    // If it has children, render with branches
    return (
      <div className={styles.treeNodeWithChildren}>
        <div className={styles.treeNodeWrapper}>
          <div className={nodeClass}>
            {node.expression}
          </div>
        </div>
        <div className={styles.branchContainer}>
          {node.children.map((child, idx) => (
            <div key={idx} className={styles.branch}>
              <div className={styles.branchLine}></div>
              {renderTreeNode(child, idx)}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  // Handle input changes
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setProposition(newValue);
    
    // Add to history
    if (newValue !== history[historyIndex]) {
      const newHistory = history.slice(0, historyIndex + 1);
      newHistory.push(newValue);
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
    }
  };

  // Handle character insertion
  const handleCharacterClick = (char) => {
    // Get cursor position
    const inputElement = document.getElementById('propositionInput');
    if (!inputElement) {
      // If input element not found, append to end (fallback)
      const newValue = proposition + char;
      setProposition(newValue);
      
      // Add to history
      const newHistory = history.slice(0, historyIndex + 1);
      newHistory.push(newValue);
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
      return;
    }
    
    const cursorPos = inputElement.selectionStart;
    // Insert at cursor position
    const newValue = proposition.substring(0, cursorPos) + char + proposition.substring(cursorPos);
    setProposition(newValue);
    
    // Add to history
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newValue);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    
    // Set cursor position after the inserted character
    setTimeout(() => {
      inputElement.focus();
      inputElement.setSelectionRange(cursorPos + char.length, cursorPos + char.length);
    }, 0);
  };

  // Handle undo
  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setProposition(history[historyIndex - 1]);
    }
  };

  // Handle reset
  const handleReset = () => {
    setProposition('');
    const newHistory = [...history, ''];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };
  
  // Analyze the proposition
  const analyzeProposition = () => {
    const tree = parseProposition(proposition);
    setTreeData(tree);
    
    if (tree) {
      const table = generateTruthTable(tree);
      setTruthTable(table);
    } else {
      setTruthTable([]);
    }
  };
  
  // Check if the proposition is a tautology
  const isTautology = () => {
    if (!truthTable || !truthTable.rows) return false;
    return truthTable.rows.every(row => row.result === true);
  };
  
  // Check if the proposition is a contradiction
  const isContradiction = () => {
    if (!truthTable || !truthTable.rows) return false;
    return truthTable.rows.every(row => row.result === false);
  };
  
  // Analyze on proposition change
  useEffect(() => {
    analyzeProposition();
  }, [proposition]);
  
  return (
    <div className={styles.container}>
      <div className={styles.inputSection}>
        <div className={styles.controlsRow}>
          <div className={styles.inputContainer}>
            <input
              id="propositionInput"
              type="text"
              value={proposition}
              onChange={handleInputChange}
              className={`${styles.propositionInput} ${!isValid ? styles.error : ''}`}
              placeholder="Enter logical proposition"
            />
            <div className={styles.buttonContainer}>
              <div className={styles.tooltip}>
                <button onClick={handleCopy} className={styles.copyButton}>
                  {copySuccess ? '✓' : '📋'}
                </button>
                <span className={styles.tooltipText}>Copy proposition to clipboard</span>
              </div>
              
              <div className={styles.tooltip}>
                <button onClick={handleUndo} className={styles.functionButton} disabled={historyIndex <= 0}>
                  ↩
                </button>
                <span className={styles.tooltipText}>Undo last change</span>
              </div>
              
              <div className={styles.tooltip}>
                <button onClick={handleReset} className={styles.clearButton}>
                  ✕
                </button>
                <span className={styles.tooltipText}>Clear proposition</span>
              </div>
              
              <div className={styles.tooltip}>
                <button onClick={analyzeProposition} className={styles.analyzeButton}>
                  Analyze
                </button>
                <span className={styles.tooltipText}>Generate syntax tree and truth table</span>
              </div>
            </div>
          </div>
          
          <div className={styles.keyboardContainer}>
            <div className={styles.charactersRow}>
              {propChars.map((char) => (
                <button
                  key={char}
                  className={styles.charButton}
                  onClick={() => handleCharacterClick(char)}
                >
                  {char}
                </button>
              ))}
            </div>
            <div className={styles.operatorsRow}>
              {Object.entries(operators).map(([symbol, details]) => (
                <div key={symbol} className={styles.tooltip}>
                  <button
                    className={styles.operatorButton}
                    onClick={() => handleCharacterClick(symbol)}
                  >
                    {symbol}
                  </button>
                  <span className={styles.tooltipText}>{details.name}: {details.description}</span>
                </div>
              ))}
              <div className={styles.tooltip}>
                <button
                  className={styles.operatorButton}
                  onClick={() => handleCharacterClick('(')}
                >
                  (
                </button>
                <span className={styles.tooltipText}>Opening parenthesis</span>
              </div>
              <div className={styles.tooltip}>
                <button
                  className={styles.operatorButton}
                  onClick={() => handleCharacterClick(')')}
                >
                  )
                </button>
                <span className={styles.tooltipText}>Closing parenthesis</span>
              </div>
            </div>
          </div>
        </div>
        
        {!isValid && (
          <div className={styles.errorMessage}>
            Error: {errorMessage}
          </div>
        )}
      </div>
      
      <div className={styles.resultsContainer}>
        <div className={styles.resultSection}>
          <h3>Syntax Tree</h3>
          <div className={styles.treeContainer}>
            {treeData ? (
              <div className={styles.verticalTreeDisplay}>
                {renderTreeNode(treeData)}
              </div>
            ) : (
              <div className={styles.noData}>No valid tree to display</div>
            )}
          </div>
        </div>
        
        <div className={styles.resultSection}>
          <h3>
            Truth Table
            {isTautology() && (
              <span className={styles.tautologyBadge}>Tautology</span>
            )}
            {isContradiction() && (
              <span className={styles.contradictionBadge}>Contradiction</span>
            )}
            {!isTautology() && !isContradiction() && truthTable.rows && (
              <span className={styles.contingencyBadge}>Contingent</span>
            )}
          </h3>
          
          {truthTable && truthTable.variables && truthTable.variables.length > 0 ? (
            <table className={styles.truthTable}>
              <thead>
                <tr>
                  {truthTable.variables.map(variable => (
                    <th key={variable}>{variable}</th>
                  ))}
                  <th>{proposition}</th>
                </tr>
              </thead>
              <tbody>
                {truthTable.rows.map((row, index) => (
                  <tr key={index}>
                    {truthTable.variables.map(variable => (
                      <td key={variable} className={row.values[variable] ? styles.trueValue : styles.falseValue}>
                        {row.values[variable] ? 'T' : 'F'}
                      </td>
                    ))}
                    <td className={row.result ? styles.trueValue : styles.falseValue}>
                      {row.result ? 'T' : 'F'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className={styles.noData}>No truth table to display</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropositionTreeBuilder;