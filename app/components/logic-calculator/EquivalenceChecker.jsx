// // // // // // // // // // // // 'use client';

// // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // import LogicCalculator from './LogicCalculator';

// // // // // // // // // // // // const LogicalEquivalenceChecker = () => {
// // // // // // // // // // // //   const [tables, setTables] = useState({
// // // // // // // // // // // //     table1: [],
// // // // // // // // // // // //     table2: []
// // // // // // // // // // // //   });
// // // // // // // // // // // //   const [isEquivalent, setIsEquivalent] = useState(null);
// // // // // // // // // // // //   const [inconsistentRows, setInconsistentRows] = useState([]);
// // // // // // // // // // // //   const [expression1, setExpression1] = useState('');
// // // // // // // // // // // //   const [expression2, setExpression2] = useState('');

// // // // // // // // // // // //   // Call this whenever either table changes
// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     if (tables.table1.length > 0 && tables.table2.length > 0) {
// // // // // // // // // // // //       checkEquivalence();
// // // // // // // // // // // //     }
// // // // // // // // // // // //   }, [tables]);

// // // // // // // // // // // //   const checkEquivalence = () => {
// // // // // // // // // // // //     const { table1, table2 } = tables;
    
// // // // // // // // // // // //     // Ensure both tables exist and have the same number of rows
// // // // // // // // // // // //     if (!table1.length || !table2.length || table1.length !== table2.length) {
// // // // // // // // // // // //       setIsEquivalent(false);
// // // // // // // // // // // //       return;
// // // // // // // // // // // //     }

// // // // // // // // // // // //     const incompatibleRows = [];
// // // // // // // // // // // //     let equivalent = true;

// // // // // // // // // // // //     // Compare each row's final result
// // // // // // // // // // // //     for (let i = 0; i < table1.length; i++) {
// // // // // // // // // // // //       const row1 = table1[i];
// // // // // // // // // // // //       const row2 = table2[i];
      
// // // // // // // // // // // //       const result1 = row1[expression1];
// // // // // // // // // // // //       const result2 = row2[expression2];
      
// // // // // // // // // // // //       if (result1 !== result2) {
// // // // // // // // // // // //         equivalent = false;
// // // // // // // // // // // //         incompatibleRows.push(i);
// // // // // // // // // // // //       }
// // // // // // // // // // // //     }

// // // // // // // // // // // //     setIsEquivalent(equivalent);
// // // // // // // // // // // //     setInconsistentRows(incompatibleRows);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const handleTableChange = (table, expressionType) => {
// // // // // // // // // // // //     if (expressionType === 'expression1') {
// // // // // // // // // // // //       setTables(prev => ({ ...prev, table1: table }));
// // // // // // // // // // // //     } else {
// // // // // // // // // // // //       setTables(prev => ({ ...prev, table2: table }));
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const handleExpressionChange = (expr, type) => {
// // // // // // // // // // // //     if (type === 'expression1') {
// // // // // // // // // // // //       setExpression1(expr);
// // // // // // // // // // // //     } else {
// // // // // // // // // // // //       setExpression2(expr);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="equivalence-checker-container" style={{ padding: '20px' }}>
// // // // // // // // // // // //       <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Logical Equivalence Checker</h1>
      
// // // // // // // // // // // //       {isEquivalent !== null && (
// // // // // // // // // // // //         <div className="result-banner" style={{ 
// // // // // // // // // // // //           textAlign: 'center', 
// // // // // // // // // // // //           padding: '15px', 
// // // // // // // // // // // //           margin: '20px 0', 
// // // // // // // // // // // //           backgroundColor: isEquivalent ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
// // // // // // // // // // // //           border: `1px solid ${isEquivalent ? 'green' : 'red'}`,
// // // // // // // // // // // //           borderRadius: '5px'
// // // // // // // // // // // //         }}>
// // // // // // // // // // // //           <h2 style={{ color: isEquivalent ? 'green' : 'red', margin: 0 }}>
// // // // // // // // // // // //             {isEquivalent 
// // // // // // // // // // // //               ? 'The expressions are logically equivalent!' 
// // // // // // // // // // // //               : 'The expressions are NOT logically equivalent!'}
// // // // // // // // // // // //           </h2>
// // // // // // // // // // // //           {!isEquivalent && inconsistentRows.length > 0 && (
// // // // // // // // // // // //             <p>Inconsistencies found in {inconsistentRows.length} row(s). See highlighted rows below.</p>
// // // // // // // // // // // //           )}
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       )}
      
// // // // // // // // // // // //       <div className="calculators-container" style={{ 
// // // // // // // // // // // //         display: 'flex', 
// // // // // // // // // // // //         flexDirection: 'row', 
// // // // // // // // // // // //         flexWrap: 'wrap',
// // // // // // // // // // // //         justifyContent: 'space-between',
// // // // // // // // // // // //         gap: '20px'
// // // // // // // // // // // //       }}>
// // // // // // // // // // // //         <div className="calculator-wrapper" style={{ flex: '1 1 45%', minWidth: '300px' }}>
// // // // // // // // // // // //           <h2 style={{ textAlign: 'center' }}>First Expression</h2>
// // // // // // // // // // // //           <LogicCalculatorWrapper 
// // // // // // // // // // // //             onTableChange={(table) => handleTableChange(table, 'expression1')}
// // // // // // // // // // // //             onExpressionChange={(expr) => handleExpressionChange(expr, 'expression1')}
// // // // // // // // // // // //             inconsistentRows={inconsistentRows}
// // // // // // // // // // // //           />
// // // // // // // // // // // //         </div>
        
// // // // // // // // // // // //         <div className="calculator-wrapper" style={{ flex: '1 1 45%', minWidth: '300px' }}>
// // // // // // // // // // // //           <h2 style={{ textAlign: 'center' }}>Second Expression</h2>
// // // // // // // // // // // //           <LogicCalculatorWrapper 
// // // // // // // // // // // //             onTableChange={(table) => handleTableChange(table, 'expression2')}
// // // // // // // // // // // //             onExpressionChange={(expr) => handleExpressionChange(expr, 'expression2')}
// // // // // // // // // // // //             inconsistentRows={inconsistentRows}
// // // // // // // // // // // //           />
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // // Wrapper component to catch and modify the LogicCalculator output
// // // // // // // // // // // // const LogicCalculatorWrapper = ({ onTableChange, onExpressionChange, inconsistentRows }) => {
// // // // // // // // // // // //   // Override to capture the generated table and expression
// // // // // // // // // // // //   const CustomLogicCalculator = () => {
// // // // // // // // // // // //     // Create a ref to the original component
// // // // // // // // // // // //     const originalComponent = LogicCalculator();
    
// // // // // // // // // // // //     // Clone the component to modify its behavior
// // // // // // // // // // // //     const modifiedComponent = React.cloneElement(originalComponent, {
// // // // // // // // // // // //       children: React.Children.map(originalComponent.props.children, child => {
// // // // // // // // // // // //         // If this is the table element, add a ref to capture it
// // // // // // // // // // // //         if (child && child.type === 'table') {
// // // // // // // // // // // //           return React.cloneElement(child, {
// // // // // // // // // // // //             ref: (node) => {
// // // // // // // // // // // //               if (node) {
// // // // // // // // // // // //                 // Extract data from the table
// // // // // // // // // // // //                 const tableData = extractTableData(node);
// // // // // // // // // // // //                 onTableChange(tableData);
// // // // // // // // // // // //               }
// // // // // // // // // // // //             },
// // // // // // // // // // // //             // Highlight inconsistent rows
// // // // // // // // // // // //             children: React.Children.map(child.props.children, tableChild => {
// // // // // // // // // // // //               if (tableChild && tableChild.type === 'tbody') {
// // // // // // // // // // // //                 return React.cloneElement(tableChild, {
// // // // // // // // // // // //                   children: React.Children.map(tableChild.props.children, (row, index) => {
// // // // // // // // // // // //                     return React.cloneElement(row, {
// // // // // // // // // // // //                       style: inconsistentRows.includes(index) 
// // // // // // // // // // // //                         ? { backgroundColor: 'rgba(255, 0, 0, 0.2)' } 
// // // // // // // // // // // //                         : {}
// // // // // // // // // // // //                     });
// // // // // // // // // // // //                   })
// // // // // // // // // // // //                 });
// // // // // // // // // // // //               }
// // // // // // // // // // // //               return tableChild;
// // // // // // // // // // // //             })
// // // // // // // // // // // //           });
// // // // // // // // // // // //         }
        
// // // // // // // // // // // //         // If this is the input element, add an onChange handler
// // // // // // // // // // // //         if (child && child.type === 'input') {
// // // // // // // // // // // //           return React.cloneElement(child, {
// // // // // // // // // // // //             onChange: (e) => {
// // // // // // // // // // // //               // Call the original onChange
// // // // // // // // // // // //               if (child.props.onChange) {
// // // // // // // // // // // //                 child.props.onChange(e);
// // // // // // // // // // // //               }
// // // // // // // // // // // //               // Also notify parent
// // // // // // // // // // // //               onExpressionChange(e.target.value);
// // // // // // // // // // // //             }
// // // // // // // // // // // //           });
// // // // // // // // // // // //         }
        
// // // // // // // // // // // //         return child;
// // // // // // // // // // // //       })
// // // // // // // // // // // //     });
    
// // // // // // // // // // // //     return modifiedComponent;
// // // // // // // // // // // //   };
  
// // // // // // // // // // // //   return <CustomLogicCalculator />;
// // // // // // // // // // // // };

// // // // // // // // // // // // // Helper function to extract data from table DOM
// // // // // // // // // // // // const extractTableData = (tableNode) => {
// // // // // // // // // // // //   const data = [];
// // // // // // // // // // // //   const rows = tableNode.querySelectorAll('tbody tr');
  
// // // // // // // // // // // //   rows.forEach(row => {
// // // // // // // // // // // //     const rowData = {};
// // // // // // // // // // // //     const cells = row.querySelectorAll('td');
// // // // // // // // // // // //     const headers = tableNode.querySelectorAll('thead th');
    
// // // // // // // // // // // //     cells.forEach((cell, index) => {
// // // // // // // // // // // //       if (headers[index]) {
// // // // // // // // // // // //         const key = headers[index].textContent;
// // // // // // // // // // // //         rowData[key] = cell.textContent === 'true';
// // // // // // // // // // // //       }
// // // // // // // // // // // //     });
    
// // // // // // // // // // // //     data.push(rowData);
// // // // // // // // // // // //   });
  
// // // // // // // // // // // //   return data;
// // // // // // // // // // // // };

// // // // // // // // // // // // export default LogicalEquivalenceChecker;


// // // // // // // // // // // 'use client';

// // // // // // // // // // // import React, { useState, useRef, useEffect } from 'react';
// // // // // // // // // // // import './LogicCalculator.css';
// // // // // // // // // // // import operatorDescriptions from './operatorDescriptions';

// // // // // // // // // // // const logicalOperators = [
// // // // // // // // // // //   { symbol: '∧', name: 'AND', description: 'Logical AND: Returns true if both operands are true' },
// // // // // // // // // // //   { symbol: '∨', name: 'OR', description: 'Logical OR: Returns true if at least one operand is true' },
// // // // // // // // // // //   { symbol: '¬', name: 'NOT', description: 'Logical NOT: Returns true if the operand is false' },
// // // // // // // // // // //   { symbol: '⊕', name: 'XOR', description: 'Exclusive OR: Returns true if exactly one operand is true' },
// // // // // // // // // // //   { symbol: '→', name: 'IMPLICATION', description: 'Logical Implication: Returns false if the first operand is true and the second operand is false' },
// // // // // // // // // // //   { symbol: '↔', name: 'BICONDITIONAL', description: 'Logical Biconditional: Returns true if both operands are the same' },
// // // // // // // // // // //   { symbol: '↑', name: 'NAND', description: 'Negated AND (NAND): Returns true if at least one operand is false' },
// // // // // // // // // // //   { symbol: '↓', name: 'NOR', description: 'Negated OR (NOR): Returns true if both operands are false' },
// // // // // // // // // // //   { symbol: '(', name: 'OPEN_PAREN', description: 'Open Parenthesis' },
// // // // // // // // // // //   { symbol: ')', name: 'CLOSE_PAREN', description: 'Close Parenthesis' },
// // // // // // // // // // // ];

// // // // // // // // // // // const parseExpression = (expression) => {
// // // // // // // // // // //   const components = [];
// // // // // // // // // // //   let level = 0;
// // // // // // // // // // //   let start = 0;

// // // // // // // // // // //   for (let i = 0; i < expression.length; i++) {
// // // // // // // // // // //     const char = expression[i];
// // // // // // // // // // //     if (char === '(') {
// // // // // // // // // // //       if (level === 0) start = i;
// // // // // // // // // // //       level++;
// // // // // // // // // // //     } else if (char === ')') {
// // // // // // // // // // //       level--;
// // // // // // // // // // //       if (level === 0) {
// // // // // // // // // // //         const component = expression.slice(start + 1, i).trim();
// // // // // // // // // // //         if (component !== expression.trim()) {
// // // // // // // // // // //           components.push(component);
// // // // // // // // // // //         }
// // // // // // // // // // //       }
// // // // // // // // // // //     }
// // // // // // // // // // //   }

// // // // // // // // // // //   const trimmedExpression = expression.trim();
// // // // // // // // // // //   if (!components.includes(trimmedExpression)) {
// // // // // // // // // // //     components.push(trimmedExpression);
// // // // // // // // // // //   }

// // // // // // // // // // //   const negationPattern = /¬[^∧∨⊕\(\)]+/g;
// // // // // // // // // // //   let match;
// // // // // // // // // // //   while ((match = negationPattern.exec(expression)) !== null) {
// // // // // // // // // // //     const negation = match[0].trim();
// // // // // // // // // // //     if (negation.length > 1) {
// // // // // // // // // // //       components.push(negation);
// // // // // // // // // // //     }
// // // // // // // // // // //   }

// // // // // // // // // // //   return components;
// // // // // // // // // // // };

// // // // // // // // // // // const evaluateExpression = (expression, row) => {
// // // // // // // // // // //   let evalExpression = expression;
// // // // // // // // // // //   Object.keys(row).forEach((variable) => {
// // // // // // // // // // //     evalExpression = evalExpression.replace(new RegExp(`\\b${variable}\\b`, 'g'), row[variable]);
// // // // // // // // // // //   });

// // // // // // // // // // //   evalExpression = evalExpression.replace(/¬/g, '!');
// // // // // // // // // // //   evalExpression = evalExpression.replace(/∧/g, '&&');
// // // // // // // // // // //   evalExpression = evalExpression.replace(/∨/g, '||');
// // // // // // // // // // //   evalExpression = evalExpression.replace(/⊕/g, '!==');
// // // // // // // // // // //   evalExpression = evalExpression.replace(/→/g, '<=');
// // // // // // // // // // //   evalExpression = evalExpression.replace(/↔/g, '===');
// // // // // // // // // // //   evalExpression = evalExpression.replace(/(\w+)\s*↑\s*(\w+)/g, '!($1 && $2)');
// // // // // // // // // // //   evalExpression = evalExpression.replace(/(\w+)\s*↓\s*(\w+)/g, '!($1 || $2)');

// // // // // // // // // // //   try {
// // // // // // // // // // //     return eval(evalExpression);
// // // // // // // // // // //   } catch {
// // // // // // // // // // //     return 'Error';
// // // // // // // // // // //   }
// // // // // // // // // // // };

// // // // // // // // // // // const LogicalEquivalenceChecker = () => {
// // // // // // // // // // //   const [expression1, setExpression1] = useState('');
// // // // // // // // // // //   const [expression2, setExpression2] = useState('');
// // // // // // // // // // //   const [table1, setTable1] = useState([]);
// // // // // // // // // // //   const [table2, setTable2] = useState([]);
// // // // // // // // // // //   const [error, setError] = useState('');
// // // // // // // // // // //   const [isEquivalent, setIsEquivalent] = useState(null);
// // // // // // // // // // //   const [inconsistentRows, setInconsistentRows] = useState([]);
// // // // // // // // // // //   const [tableGenerated, setTableGenerated] = useState(false);
// // // // // // // // // // //   const input1Ref = useRef(null);
// // // // // // // // // // //   const input2Ref = useRef(null);
// // // // // // // // // // //   const tableRef = useRef(null);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     input1Ref.current.focus();
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     if (tableGenerated && tableRef.current) {
// // // // // // // // // // //       window.scrollTo({
// // // // // // // // // // //         top: tableRef.current.offsetTop - 50,
// // // // // // // // // // //         behavior: 'smooth',
// // // // // // // // // // //       });
// // // // // // // // // // //       setTableGenerated(false);
// // // // // // // // // // //     }
// // // // // // // // // // //   }, [tableGenerated]);

// // // // // // // // // // //   const handleChange1 = (e) => {
// // // // // // // // // // //     setExpression1(e.target.value);
// // // // // // // // // // //     setError('');
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleChange2 = (e) => {
// // // // // // // // // // //     setExpression2(e.target.value);
// // // // // // // // // // //     setError('');
// // // // // // // // // // //   };

// // // // // // // // // // //   const insertOperator = (operator, inputField) => {
// // // // // // // // // // //     if (inputField === 1) {
// // // // // // // // // // //       setExpression1(expression1 + ' ' + operator + ' ');
// // // // // // // // // // //       input1Ref.current.focus();
// // // // // // // // // // //     } else {
// // // // // // // // // // //       setExpression2(expression2 + ' ' + operator + ' ');
// // // // // // // // // // //       input2Ref.current.focus();
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const insertLetter = (letter, inputField) => {
// // // // // // // // // // //     if (inputField === 1) {
// // // // // // // // // // //       setExpression1(expression1 + letter);
// // // // // // // // // // //       input1Ref.current.focus();
// // // // // // // // // // //     } else {
// // // // // // // // // // //       setExpression2(expression2 + letter);
// // // // // // // // // // //       input2Ref.current.focus();
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const verifyEquivalence = () => {
// // // // // // // // // // //     if (!expression1.trim() || !expression2.trim()) {
// // // // // // // // // // //       setError('Both expressions must be provided for equivalence check.');
// // // // // // // // // // //       setTable1([]);
// // // // // // // // // // //       setTable2([]);
// // // // // // // // // // //       return;
// // // // // // // // // // //     }

// // // // // // // // // // //     try {
// // // // // // // // // // //       // Get all variables from both expressions
// // // // // // // // // // //       const vars1 = Array.from(new Set(expression1.match(/[a-zA-Z]+/g) || []));
// // // // // // // // // // //       const vars2 = Array.from(new Set(expression2.match(/[a-zA-Z]+/g) || []));
// // // // // // // // // // //       const allVars = Array.from(new Set([...vars1, ...vars2]));

// // // // // // // // // // //       if (allVars.length === 0) {
// // // // // // // // // // //         setError('No variables found in expressions.');
// // // // // // // // // // //         setTable1([]);
// // // // // // // // // // //         setTable2([]);
// // // // // // // // // // //         return;
// // // // // // // // // // //       }

// // // // // // // // // // //       // Generate truth tables with all variables
// // // // // // // // // // //       const truthTable1 = generateTruthTable(expression1, allVars);
// // // // // // // // // // //       const truthTable2 = generateTruthTable(expression2, allVars);

// // // // // // // // // // //       setTable1(truthTable1);
// // // // // // // // // // //       setTable2(truthTable2);

// // // // // // // // // // //       // Check for equivalence
// // // // // // // // // // //       const inconsistentIndices = [];
// // // // // // // // // // //       const equivalent = truthTable1.every((row, index) => {
// // // // // // // // // // //         const result1 = row[expression1];
// // // // // // // // // // //         const result2 = truthTable2[index][expression2];
        
// // // // // // // // // // //         if (result1 !== result2) {
// // // // // // // // // // //           inconsistentIndices.push(index);
// // // // // // // // // // //           return false;
// // // // // // // // // // //         }
// // // // // // // // // // //         return true;
// // // // // // // // // // //       });

// // // // // // // // // // //       setIsEquivalent(equivalent);
// // // // // // // // // // //       setInconsistentRows(inconsistentIndices);
// // // // // // // // // // //       setError('');
// // // // // // // // // // //       setTableGenerated(true);
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       setError('Error evaluating expressions: ' + err.message);
// // // // // // // // // // //       setTable1([]);
// // // // // // // // // // //       setTable2([]);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const clearAll = () => {
// // // // // // // // // // //     setExpression1('');
// // // // // // // // // // //     setExpression2('');
// // // // // // // // // // //     setTable1([]);
// // // // // // // // // // //     setTable2([]);
// // // // // // // // // // //     setError('');
// // // // // // // // // // //     setIsEquivalent(null);
// // // // // // // // // // //     setInconsistentRows([]);
// // // // // // // // // // //     setTableGenerated(false);
// // // // // // // // // // //     input1Ref.current.focus();
// // // // // // // // // // //   };

// // // // // // // // // // //   const generateTruthTable = (expression, allVars) => {
// // // // // // // // // // //     const numRows = 2 ** allVars.length;
// // // // // // // // // // //     const table = [];
// // // // // // // // // // //     const components = parseExpression(expression);

// // // // // // // // // // //     for (let i = 0; i < numRows; i++) {
// // // // // // // // // // //       const row = {};
// // // // // // // // // // //       allVars.forEach((variable, index) => {
// // // // // // // // // // //         row[variable] = Boolean(i & (1 << (allVars.length - 1 - index)));
// // // // // // // // // // //       });

// // // // // // // // // // //       components.forEach((component) => {
// // // // // // // // // // //         if (component.trim() === expression.trim()) {
// // // // // // // // // // //           return;
// // // // // // // // // // //         }
// // // // // // // // // // //         row[component] = evaluateExpression(component, row);
// // // // // // // // // // //       });

// // // // // // // // // // //       row[expression] = evaluateExpression(expression, row);
// // // // // // // // // // //       table.push(row);
// // // // // // // // // // //     }
// // // // // // // // // // //     return table;
// // // // // // // // // // //   };

// // // // // // // // // // //   const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div style={{ textAlign: 'center', marginTop: '50px' }}>
// // // // // // // // // // //       <h1>Logical Equivalence Checker</h1>
      
// // // // // // // // // // //       <div className='latin-letters'>
// // // // // // // // // // //         {letters.map((letter) => (
// // // // // // // // // // //           <div key={letter} style={{ display: 'inline-flex', gap: '5px', margin: '2px' }}>
// // // // // // // // // // //             <button onClick={() => insertLetter(letter, 1)} style={{ padding: '10px', margin: '0' }}>
// // // // // // // // // // //               {letter} →1
// // // // // // // // // // //             </button>
// // // // // // // // // // //             <button onClick={() => insertLetter(letter, 2)} style={{ padding: '10px', margin: '0' }}>
// // // // // // // // // // //               {letter} →2
// // // // // // // // // // //             </button>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         ))}
// // // // // // // // // // //       </div>

// // // // // // // // // // //       <div className='logic-operators'>
// // // // // // // // // // //         {logicalOperators.map((op) => (
// // // // // // // // // // //           <div key={op.symbol} style={{ display: 'inline-block', margin: '5px', position: 'relative' }}>
// // // // // // // // // // //             <div style={{ display: 'inline-flex', gap: '5px' }}>
// // // // // // // // // // //               <button 
// // // // // // // // // // //                 onClick={() => insertOperator(op.symbol, 1)} 
// // // // // // // // // // //                 style={{ padding: '10px', position: 'relative' }}
// // // // // // // // // // //                 title={op.description}
// // // // // // // // // // //               >
// // // // // // // // // // //                 {op.symbol} →1
// // // // // // // // // // //                 <span className="tooltip">{op.description}</span>
// // // // // // // // // // //               </button>
// // // // // // // // // // //               <button 
// // // // // // // // // // //                 onClick={() => insertOperator(op.symbol, 2)} 
// // // // // // // // // // //                 style={{ padding: '10px', position: 'relative' }}
// // // // // // // // // // //                 title={op.description}
// // // // // // // // // // //               >
// // // // // // // // // // //                 {op.symbol} →2
// // // // // // // // // // //                 <span className="tooltip">{op.description}</span>
// // // // // // // // // // //               </button>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         ))}
// // // // // // // // // // //       </div>

// // // // // // // // // // //       <div style={{ margin: '20px 0' }}>
// // // // // // // // // // //         <div style={{ margin: '10px 0' }}>
// // // // // // // // // // //           <label htmlFor="expression1">First Expression: </label>
// // // // // // // // // // //           <input
// // // // // // // // // // //             id="expression1"
// // // // // // // // // // //             ref={input1Ref}
// // // // // // // // // // //             type="text"
// // // // // // // // // // //             value={expression1}
// // // // // // // // // // //             onChange={handleChange1}
// // // // // // // // // // //             placeholder="Enter first logical expression"
// // // // // // // // // // //             style={{ width: '300px', padding: '10px', margin: '5px' }}
// // // // // // // // // // //           />
// // // // // // // // // // //         </div>
        
// // // // // // // // // // //         <div style={{ margin: '10px 0' }}>
// // // // // // // // // // //           <label htmlFor="expression2">Second Expression: </label>
// // // // // // // // // // //           <input
// // // // // // // // // // //             id="expression2"
// // // // // // // // // // //             ref={input2Ref}
// // // // // // // // // // //             type="text"
// // // // // // // // // // //             value={expression2}
// // // // // // // // // // //             onChange={handleChange2}
// // // // // // // // // // //             placeholder="Enter second logical expression"
// // // // // // // // // // //             style={{ width: '300px', padding: '10px', margin: '5px' }}
// // // // // // // // // // //           />
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       <div>
// // // // // // // // // // //         <button 
// // // // // // // // // // //           className='generate-btn' 
// // // // // // // // // // //           onClick={verifyEquivalence} 
// // // // // // // // // // //           style={{ padding: '10px', margin: '5px' }}
// // // // // // // // // // //         >
// // // // // // // // // // //           Verify Equivalence
// // // // // // // // // // //         </button>
// // // // // // // // // // //         <button 
// // // // // // // // // // //           className='reset-btn' 
// // // // // // // // // // //           onClick={clearAll} 
// // // // // // // // // // //           style={{ padding: '10px', margin: '5px' }}
// // // // // // // // // // //         >
// // // // // // // // // // //           Reset
// // // // // // // // // // //         </button>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {error && <p style={{ color: 'red' }}>{error}</p>}

// // // // // // // // // // //       {isEquivalent !== null && (
// // // // // // // // // // //         <div ref={tableRef} style={{ 
// // // // // // // // // // //           margin: '20px auto', 
// // // // // // // // // // //           padding: '15px', 
// // // // // // // // // // //           maxWidth: '600px',
// // // // // // // // // // //           backgroundColor: isEquivalent ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
// // // // // // // // // // //           border: `1px solid ${isEquivalent ? 'green' : 'red'}`,
// // // // // // // // // // //           borderRadius: '5px'
// // // // // // // // // // //         }}>
// // // // // // // // // // //           <h2 style={{ color: isEquivalent ? 'green' : 'red' }}>
// // // // // // // // // // //             {isEquivalent 
// // // // // // // // // // //               ? 'The expressions are logically equivalent!' 
// // // // // // // // // // //               : 'The expressions are NOT logically equivalent!'}
// // // // // // // // // // //           </h2>
// // // // // // // // // // //           {!isEquivalent && (
// // // // // // // // // // //             <p>Found inconsistencies in {inconsistentRows.length} cases. See highlighted rows below.</p>
// // // // // // // // // // //           )}
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )}

// // // // // // // // // // //       {table1.length > 0 && table2.length > 0 && (
// // // // // // // // // // //         <div className="tables-container" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
// // // // // // // // // // //           <div>
// // // // // // // // // // //             <h3>Truth Table for: {expression1}</h3>
// // // // // // // // // // //             <table border="1" style={{ margin: '10px auto', borderCollapse: 'collapse' }}>
// // // // // // // // // // //               <thead>
// // // // // // // // // // //                 <tr>
// // // // // // // // // // //                   {Object.keys(table1[0]).map((key) => (
// // // // // // // // // // //                     <th key={key} style={{ padding: '10px', textAlign: 'center' }}>{key}</th>
// // // // // // // // // // //                   ))}
// // // // // // // // // // //                 </tr>
// // // // // // // // // // //               </thead>
// // // // // // // // // // //               <tbody>
// // // // // // // // // // //                 {table1.map((row, index) => (
// // // // // // // // // // //                   <tr 
// // // // // // // // // // //                     key={index}
// // // // // // // // // // //                     style={{ 
// // // // // // // // // // //                       backgroundColor: inconsistentRows.includes(index) 
// // // // // // // // // // //                         ? 'rgba(255, 0, 0, 0.2)' 
// // // // // // // // // // //                         : 'transparent' 
// // // // // // // // // // //                     }}
// // // // // // // // // // //                   >
// // // // // // // // // // //                     {Object.values(row).map((value, i) => (
// // // // // // // // // // //                       <td key={i} style={{ padding: '10px', textAlign: 'center' }}>
// // // // // // // // // // //                         {value?.toString()}
// // // // // // // // // // //                       </td>
// // // // // // // // // // //                     ))}
// // // // // // // // // // //                   </tr>
// // // // // // // // // // //                 ))}
// // // // // // // // // // //               </tbody>
// // // // // // // // // // //             </table>
// // // // // // // // // // //           </div>
          
// // // // // // // // // // //           <div>
// // // // // // // // // // //             <h3>Truth Table for: {expression2}</h3>
// // // // // // // // // // //             <table border="1" style={{ margin: '10px auto', borderCollapse: 'collapse' }}>
// // // // // // // // // // //               <thead>
// // // // // // // // // // //                 <tr>
// // // // // // // // // // //                   {Object.keys(table2[0]).map((key) => (
// // // // // // // // // // //                     <th key={key} style={{ padding: '10px', textAlign: 'center' }}>{key}</th>
// // // // // // // // // // //                   ))}
// // // // // // // // // // //                 </tr>
// // // // // // // // // // //               </thead>
// // // // // // // // // // //               <tbody>
// // // // // // // // // // //                 {table2.map((row, index) => (
// // // // // // // // // // //                   <tr 
// // // // // // // // // // //                     key={index}
// // // // // // // // // // //                     style={{ 
// // // // // // // // // // //                       backgroundColor: inconsistentRows.includes(index) 
// // // // // // // // // // //                         ? 'rgba(255, 0, 0, 0.2)' 
// // // // // // // // // // //                         : 'transparent' 
// // // // // // // // // // //                     }}
// // // // // // // // // // //                   >
// // // // // // // // // // //                     {Object.values(row).map((value, i) => (
// // // // // // // // // // //                       <td key={i} style={{ padding: '10px', textAlign: 'center' }}>
// // // // // // // // // // //                         {value?.toString()}
// // // // // // // // // // //                       </td>
// // // // // // // // // // //                     ))}
// // // // // // // // // // //                   </tr>
// // // // // // // // // // //                 ))}
// // // // // // // // // // //               </tbody>
// // // // // // // // // // //             </table>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )}
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default LogicalEquivalenceChecker;
// // // // // // // // // // // File: components/LogicalEquivalenceVerifier.js
// // // // // // // // // // import { useState } from 'react';

// // // // // // // // // // export default function LogicalEquivalenceVerifier() {
// // // // // // // // // //   const [expression1, setExpression1] = useState('');
// // // // // // // // // //   const [expression2, setExpression2] = useState('');
// // // // // // // // // //   const [result, setResult] = useState(null);
// // // // // // // // // //   const [error, setError] = useState('');
// // // // // // // // // //   const [truthTable, setTruthTable] = useState([]);

// // // // // // // // // //   const verifyEquivalence = () => {
// // // // // // // // // //     try {
// // // // // // // // // //       setError('');
      
// // // // // // // // // //       // Parse and validate expressions
// // // // // // // // // //       const vars = extractVariables(expression1, expression2);
// // // // // // // // // //       if (vars.length > 5) {
// // // // // // // // // //         setError('Maximum 5 variables allowed for performance reasons');
// // // // // // // // // //         return;
// // // // // // // // // //       }

// // // // // // // // // //       // Generate truth table
// // // // // // // // // //       const table = generateTruthTable(vars, expression1, expression2);
// // // // // // // // // //       setTruthTable(table);
      
// // // // // // // // // //       // Check if expressions are equivalent
// // // // // // // // // //       const areEquivalent = table.every(row => row.result1 === row.result2);
// // // // // // // // // //       setResult(areEquivalent);
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       setError(err.message);
// // // // // // // // // //       setResult(null);
// // // // // // // // // //       setTruthTable([]);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   // Extract unique variables from both expressions
// // // // // // // // // //   const extractVariables = (expr1, expr2) => {
// // // // // // // // // //     const combined = expr1 + expr2;
// // // // // // // // // //     const varRegex = /[A-Za-z]/g;
// // // // // // // // // //     const matches = combined.match(varRegex) || [];
// // // // // // // // // //     return [...new Set(matches)].sort();
// // // // // // // // // //   };

// // // // // // // // // //   // Generate truth table for all possible combinations
// // // // // // // // // //   const generateTruthTable = (variables, expr1, expr2) => {
// // // // // // // // // //     const rows = [];
// // // // // // // // // //     const totalRows = Math.pow(2, variables.length);

// // // // // // // // // //     for (let i = 0; i < totalRows; i++) {
// // // // // // // // // //       // Create variable assignments for this row
// // // // // // // // // //       const assignment = {};
// // // // // // // // // //       variables.forEach((variable, index) => {
// // // // // // // // // //         // Convert i to binary and determine if this bit is 1 or 0
// // // // // // // // // //         assignment[variable] = !!(i & (1 << (variables.length - index - 1)));
// // // // // // // // // //       });

// // // // // // // // // //       // Evaluate both expressions with this assignment
// // // // // // // // // //       const result1 = evaluateExpression(expr1, assignment);
// // // // // // // // // //       const result2 = evaluateExpression(expr2, assignment);

// // // // // // // // // //       rows.push({
// // // // // // // // // //         assignment: { ...assignment },
// // // // // // // // // //         result1,
// // // // // // // // // //         result2
// // // // // // // // // //       });
// // // // // // // // // //     }

// // // // // // // // // //     return rows;
// // // // // // // // // //   };

// // // // // // // // // //   // Evaluate a logical expression with given variable assignments
// // // // // // // // // //   const evaluateExpression = (expr, assignment) => {
// // // // // // // // // //     // Replace all variables with their boolean values
// // // // // // // // // //     let jsExpr = expr.slice();
    
// // // // // // // // // //     // Replace logical operators with JavaScript operators
// // // // // // // // // //     jsExpr = jsExpr.replace(/AND|&&|∧/gi, '&&');
// // // // // // // // // //     jsExpr = jsExpr.replace(/OR|\|\||∨/gi, '||');
// // // // // // // // // //     jsExpr = jsExpr.replace(/NOT|!/gi, '!');
// // // // // // // // // //     jsExpr = jsExpr.replace(/IMPLIES|→|=>/gi, '<impl>'); // Temporary placeholder
// // // // // // // // // //     jsExpr = jsExpr.replace(/BICONDITIONAL|↔|<=>/gi, '<bicond>'); // Temporary placeholder
// // // // // // // // // //     jsExpr = jsExpr.replace(/XOR|⊕/gi, '<xor>'); // Temporary placeholder

// // // // // // // // // //     // Replace variables with their boolean values
// // // // // // // // // //     for (const [variable, value] of Object.entries(assignment)) {
// // // // // // // // // //       const regex = new RegExp(variable, 'g');
// // // // // // // // // //       jsExpr = jsExpr.replace(regex, value.toString());
// // // // // // // // // //     }

// // // // // // // // // //     // Handle implication: A → B is equivalent to !A || B
// // // // // // // // // //     while (jsExpr.includes('<impl>')) {
// // // // // // // // // //       const implRegex = /(!?[TF])\s*<impl>\s*(!?[TF])/g;
// // // // // // // // // //       jsExpr = jsExpr.replace(implRegex, (match, a, b) => {
// // // // // // // // // //         return `(!(${a}) || (${b}))`;
// // // // // // // // // //       });
// // // // // // // // // //     }

// // // // // // // // // //     // Handle biconditional: A ↔ B is equivalent to (A → B) && (B → A)
// // // // // // // // // //     while (jsExpr.includes('<bicond>')) {
// // // // // // // // // //       const bicondRegex = /(!?[TF])\s*<bicond>\s*(!?[TF])/g;
// // // // // // // // // //       jsExpr = jsExpr.replace(bicondRegex, (match, a, b) => {
// // // // // // // // // //         return `((!(${a}) || (${b})) && (!(${b}) || (${a})))`;
// // // // // // // // // //       });
// // // // // // // // // //     }

// // // // // // // // // //     // Handle XOR: A ⊕ B is equivalent to (A || B) && !(A && B)
// // // // // // // // // //     while (jsExpr.includes('<xor>')) {
// // // // // // // // // //       const xorRegex = /(!?[TF])\s*<xor>\s*(!?[TF])/g;
// // // // // // // // // //       jsExpr = jsExpr.replace(xorRegex, (match, a, b) => {
// // // // // // // // // //         return `((${a} || ${b}) && !(${a} && ${b}))`;
// // // // // // // // // //       });
// // // // // // // // // //     }

// // // // // // // // // //     // Convert "true" and "false" strings to actual booleans
// // // // // // // // // //     jsExpr = jsExpr.replace(/true/g, 'true');
// // // // // // // // // //     jsExpr = jsExpr.replace(/false/g, 'false');

// // // // // // // // // //     try {
// // // // // // // // // //       // Safely evaluate the expression
// // // // // // // // // //       // eslint-disable-next-line no-new-func
// // // // // // // // // //       return Function(`"use strict"; return (${jsExpr});`)();
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       throw new Error(`Invalid expression: ${expr}`);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="logical-verifier">
// // // // // // // // // //       <h1>Logical Equivalence Verifier</h1>
      
// // // // // // // // // //       <div className="input-section">
// // // // // // // // // //         <div className="form-group">
// // // // // // // // // //           <label htmlFor="expression1">Expression 1:</label>
// // // // // // // // // //           <input
// // // // // // // // // //             type="text"
// // // // // // // // // //             id="expression1"
// // // // // // // // // //             value={expression1}
// // // // // // // // // //             onChange={(e) => setExpression1(e.target.value)}
// // // // // // // // // //             placeholder="e.g., A AND (NOT B)"
// // // // // // // // // //           />
// // // // // // // // // //         </div>
        
// // // // // // // // // //         <div className="form-group">
// // // // // // // // // //           <label htmlFor="expression2">Expression 2:</label>
// // // // // // // // // //           <input
// // // // // // // // // //             type="text"
// // // // // // // // // //             id="expression2"
// // // // // // // // // //             value={expression2}
// // // // // // // // // //             onChange={(e) => setExpression2(e.target.value)}
// // // // // // // // // //             placeholder="e.g., NOT (NOT A OR B)"
// // // // // // // // // //           />
// // // // // // // // // //         </div>
        
// // // // // // // // // //         <button onClick={verifyEquivalence}>Verify Equivalence</button>
// // // // // // // // // //       </div>
      
// // // // // // // // // //       {error && <div className="error">{error}</div>}
      
// // // // // // // // // //       {result !== null && (
// // // // // // // // // //         <div className="result">
// // // // // // // // // //           <h2>
// // // // // // // // // //             {result
// // // // // // // // // //               ? "✓ The expressions are logically equivalent!"
// // // // // // // // // //               : "✗ The expressions are NOT logically equivalent!"}
// // // // // // // // // //           </h2>
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
      
// // // // // // // // // //       {truthTable.length > 0 && (
// // // // // // // // // //         <div className="truth-table">
// // // // // // // // // //           <h2>Truth Table</h2>
// // // // // // // // // //           <table>
// // // // // // // // // //             <thead>
// // // // // // // // // //               <tr>
// // // // // // // // // //                 {Object.keys(truthTable[0].assignment).map((variable) => (
// // // // // // // // // //                   <th key={variable}>{variable}</th>
// // // // // // // // // //                 ))}
// // // // // // // // // //                 <th>Expression 1</th>
// // // // // // // // // //                 <th>Expression 2</th>
// // // // // // // // // //                 <th>Equivalent?</th>
// // // // // // // // // //               </tr>
// // // // // // // // // //             </thead>
// // // // // // // // // //             <tbody>
// // // // // // // // // //               {truthTable.map((row, index) => (
// // // // // // // // // //                 <tr key={index}>
// // // // // // // // // //                   {Object.values(row.assignment).map((value, i) => (
// // // // // // // // // //                     <td key={i}>{value ? 'T' : 'F'}</td>
// // // // // // // // // //                   ))}
// // // // // // // // // //                   <td>{row.result1 ? 'T' : 'F'}</td>
// // // // // // // // // //                   <td>{row.result2 ? 'T' : 'F'}</td>
// // // // // // // // // //                   <td>{row.result1 === row.result2 ? '✓' : '✗'}</td>
// // // // // // // // // //                 </tr>
// // // // // // // // // //               ))}
// // // // // // // // // //             </tbody>
// // // // // // // // // //           </table>
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
      
// // // // // // // // // //       <div className="instructions">
// // // // // // // // // //         <h3>Supported Operators:</h3>
// // // // // // // // // //         <ul>
// // // // // // // // // //           <li>AND, &&, ∧: Logical AND</li>
// // // // // // // // // //           <li>OR, ||, ∨: Logical OR</li>
// // // // // // // // // //           <li>NOT, !: Logical NOT</li>
// // // // // // // // // //           <li>IMPLIES, →, =&gt;: Logical Implication</li>
// // // // // // // // // //           <li>BICONDITIONAL, ↔, &lt;=&gt;: Logical Biconditional</li>
// // // // // // // // // //           <li>XOR, ⊕: Exclusive OR</li>
// // // // // // // // // //         </ul>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }


// // // // // // // // // // File: components/LogicalEquivalenceVerifier.js
// // // // // // // // // import { useState } from 'react';

// // // // // // // // // const LogicalEquivalenceVerifier = () => {
// // // // // // // // //   const [expression1, setExpression1] = useState('');
// // // // // // // // //   const [expression2, setExpression2] = useState('');
// // // // // // // // //   const [result, setResult] = useState(null);
// // // // // // // // //   const [error, setError] = useState('');
// // // // // // // // //   const [truthTable, setTruthTable] = useState([]);
// // // // // // // // //   const [showTruthTable, setShowTruthTable] = useState(false);

// // // // // // // // //   // Extract unique variables from both expressions
// // // // // // // // //   const extractVariables = (expr1, expr2) => {
// // // // // // // // //     const combined = expr1 + expr2;
// // // // // // // // //     const varRegex = /[A-Za-z]/g;
// // // // // // // // //     const matches = combined.match(varRegex) || [];
// // // // // // // // //     return [...new Set(matches)].sort();
// // // // // // // // //   };

// // // // // // // // //   // Handle implication: p → q is equivalent to !p || q
// // // // // // // // //   const handleImplication = (p, q) => {
// // // // // // // // //     return !p || q;
// // // // // // // // //   };

// // // // // // // // //   // Handle biconditional: p ↔ q is equivalent to (p → q) && (q → p)
// // // // // // // // //   const handleBiconditional = (p, q) => {
// // // // // // // // //     return handleImplication(p, q) && handleImplication(q, p);
// // // // // // // // //   };

// // // // // // // // //   // Handle XOR: p ⊕ q is equivalent to (p || q) && !(p && q)
// // // // // // // // //   const handleXor = (p, q) => {
// // // // // // // // //     return (p || q) && !(p && q);
// // // // // // // // //   };

// // // // // // // // //   // Parse and evaluate logical expression
// // // // // // // // //   const evaluateExpression = (expr, variableValues) => {
// // // // // // // // //     // Replace variables with their values
// // // // // // // // //     let expression = expr.toLowerCase();
    
// // // // // // // // //     // Convert expression to JavaScript syntax
// // // // // // // // //     expression = expression.replace(/\s+/g, ' ');
    
// // // // // // // // //     // Replace logical operators with JavaScript operators
// // // // // // // // //     // First, mark positions of variables to prevent operator replacement inside variable names
// // // // // // // // //     const variables = Object.keys(variableValues);
// // // // // // // // //     for (const variable of variables) {
// // // // // // // // //       const regex = new RegExp(variable, 'gi');
// // // // // // // // //       expression = expression.replace(regex, `__${variable.toLowerCase()}__`);
// // // // // // // // //     }
    
// // // // // // // // //     // Replace operators
// // // // // // // // //     expression = expression.replace(/\band\b|\b\*\b|&/gi, '&&');
// // // // // // // // //     expression = expression.replace(/\bor\b|\b\+\b|\|/gi, '||');
// // // // // // // // //     expression = expression.replace(/\bnot\b|~/gi, '!');
    
// // // // // // // // //     // Process special operators (implication, biconditional, xor)
// // // // // // // // //     // We'll use placeholders for these since they need custom evaluation
// // // // // // // // //     expression = expression.replace(/\bimplies\b|→|=>/gi, '->');
// // // // // // // // //     expression = expression.replace(/\biff\b|↔|<=>|≡/gi, '<->');
// // // // // // // // //     expression = expression.replace(/\bxor\b|⊕|!=|<>/gi, '!=');
    
// // // // // // // // //     // Now replace the variables with their actual values
// // // // // // // // //     for (const [variable, value] of Object.entries(variableValues)) {
// // // // // // // // //       const regex = new RegExp(`__${variable}__`, 'g');
// // // // // // // // //       expression = expression.replace(regex, value.toString());
// // // // // // // // //     }
    
// // // // // // // // //     // We need to handle the special operators manually
// // // // // // // // //     // First break the expression into tokens
// // // // // // // // //     const tokens = [];
// // // // // // // // //     let currentToken = '';
// // // // // // // // //     let i = 0;
    
// // // // // // // // //     while (i < expression.length) {
// // // // // // // // //       if (expression.substring(i, i + 3) === '<->') {
// // // // // // // // //         if (currentToken) tokens.push(currentToken);
// // // // // // // // //         tokens.push('<->');
// // // // // // // // //         currentToken = '';
// // // // // // // // //         i += 3;
// // // // // // // // //       } else if (expression.substring(i, i + 2) === '->') {
// // // // // // // // //         if (currentToken) tokens.push(currentToken);
// // // // // // // // //         tokens.push('->');
// // // // // // // // //         currentToken = '';
// // // // // // // // //         i += 2;
// // // // // // // // //       } else if (expression.substring(i, i + 2) === '!=') {
// // // // // // // // //         if (currentToken) tokens.push(currentToken);
// // // // // // // // //         tokens.push('!=');
// // // // // // // // //         currentToken = '';
// // // // // // // // //         i += 2;
// // // // // // // // //       } else if ('()!&|'.includes(expression[i])) {
// // // // // // // // //         if (currentToken) tokens.push(currentToken);
// // // // // // // // //         tokens.push(expression[i]);
// // // // // // // // //         currentToken = '';
// // // // // // // // //         i++;
// // // // // // // // //       } else {
// // // // // // // // //         currentToken += expression[i];
// // // // // // // // //         i++;
// // // // // // // // //       }
// // // // // // // // //     }
    
// // // // // // // // //     if (currentToken) tokens.push(currentToken);
    
// // // // // // // // //     // Evaluate the expression using a recursive approach
// // // // // // // // //     const evaluate = (tokens, index = 0) => {
// // // // // // // // //       const stack = [];
// // // // // // // // //       let operator = '&&'; // Default operator
      
// // // // // // // // //       while (index < tokens.length) {
// // // // // // // // //         const token = tokens[index];
        
// // // // // // // // //         if (token === '(') {
// // // // // // // // //           const [value, newIndex] = evaluate(tokens, index + 1);
// // // // // // // // //           stack.push(value);
// // // // // // // // //           index = newIndex;
// // // // // // // // //         } else if (token === ')') {
// // // // // // // // //           return [stack.length > 0 ? stack[0] : true, index + 1];
// // // // // // // // //         } else if (token === '&&' || token === '||' || token === '->' || token === '<->' || token === '!=') {
// // // // // // // // //           operator = token;
// // // // // // // // //           index++;
// // // // // // // // //         } else if (token === '!') {
// // // // // // // // //           // Handle NOT operator
// // // // // // // // //           if (tokens[index + 1] === '(') {
// // // // // // // // //             const [value, newIndex] = evaluate(tokens, index + 2);
// // // // // // // // //             stack.push(!value);
// // // // // // // // //             index = newIndex;
// // // // // // // // //           } else {
// // // // // // // // //             const value = tokens[index + 1] === 'true' || tokens[index + 1] === '1';
// // // // // // // // //             stack.push(!value);
// // // // // // // // //             index += 2;
// // // // // // // // //           }
// // // // // // // // //         } else {
// // // // // // // // //           // Handle boolean values
// // // // // // // // //           const value = token === 'true' || token === '1';
          
// // // // // // // // //           if (stack.length === 0) {
// // // // // // // // //             stack.push(value);
// // // // // // // // //           } else {
// // // // // // // // //             const left = stack.pop();
            
// // // // // // // // //             if (operator === '&&') {
// // // // // // // // //               stack.push(left && value);
// // // // // // // // //             } else if (operator === '||') {
// // // // // // // // //               stack.push(left || value);
// // // // // // // // //             } else if (operator === '->') {
// // // // // // // // //               stack.push(handleImplication(left, value));
// // // // // // // // //             } else if (operator === '<->') {
// // // // // // // // //               stack.push(handleBiconditional(left, value));
// // // // // // // // //             } else if (operator === '!=') {
// // // // // // // // //               stack.push(handleXor(left, value));
// // // // // // // // //             }
// // // // // // // // //           }
          
// // // // // // // // //           index++;
// // // // // // // // //         }
// // // // // // // // //       }
      
// // // // // // // // //       return [stack.length > 0 ? stack[0] : true, index];
// // // // // // // // //     };
    
// // // // // // // // //     try {
// // // // // // // // //       const [result] = evaluate(tokens);
// // // // // // // // //       return result;
// // // // // // // // //     } catch (error) {
// // // // // // // // //       throw new Error(`Error evaluating expression: ${expr}`);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   // Generate truth table for both expressions
// // // // // // // // //   const generateTruthTable = (variables, expr1, expr2) => {
// // // // // // // // //     const rows = [];
// // // // // // // // //     const combinations = Math.pow(2, variables.length);
    
// // // // // // // // //     for (let i = 0; i < combinations; i++) {
// // // // // // // // //       const assignment = {};
      
// // // // // // // // //       // Create variable assignment for this row
// // // // // // // // //       variables.forEach((variable, index) => {
// // // // // // // // //         // Convert i to binary and check each bit
// // // // // // // // //         const bitValue = (i & (1 << (variables.length - index - 1))) !== 0;
// // // // // // // // //         assignment[variable] = bitValue;
// // // // // // // // //       });
      
// // // // // // // // //       try {
// // // // // // // // //         // Evaluate both expressions
// // // // // // // // //         const result1 = evaluateExpression(expr1, assignment);
// // // // // // // // //         const result2 = evaluateExpression(expr2, assignment);
        
// // // // // // // // //         rows.push({
// // // // // // // // //           assignment,
// // // // // // // // //           result1,
// // // // // // // // //           result2,
// // // // // // // // //           equivalent: result1 === result2
// // // // // // // // //         });
// // // // // // // // //       } catch (error) {
// // // // // // // // //         throw new Error(`Error generating truth table: ${error.message}`);
// // // // // // // // //       }
// // // // // // // // //     }
    
// // // // // // // // //     return rows;
// // // // // // // // //   };

// // // // // // // // //   // Verify logical equivalence
// // // // // // // // //   const verifyEquivalence = () => {
// // // // // // // // //     if (!expression1 || !expression2) {
// // // // // // // // //       setError('Please enter both expressions');
// // // // // // // // //       return;
// // // // // // // // //     }
    
// // // // // // // // //     try {
// // // // // // // // //       setError('');
      
// // // // // // // // //       // Extract variables
// // // // // // // // //       const variables = extractVariables(expression1, expression2);
      
// // // // // // // // //       if (variables.length > 5) {
// // // // // // // // //         setError('Maximum 5 variables allowed for performance');
// // // // // // // // //         return;
// // // // // // // // //       }
      
// // // // // // // // //       // Generate truth table
// // // // // // // // //       const table = generateTruthTable(variables, expression1, expression2);
// // // // // // // // //       setTruthTable(table);
      
// // // // // // // // //       // Check equivalence
// // // // // // // // //       const areEquivalent = table.every(row => row.equivalent);
// // // // // // // // //       setResult(areEquivalent);
      
// // // // // // // // //       // Show truth table
// // // // // // // // //       setShowTruthTable(true);
// // // // // // // // //     } catch (error) {
// // // // // // // // //       setError(error.message);
// // // // // // // // //       setResult(null);
// // // // // // // // //       setTruthTable([]);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="verifier-container">
// // // // // // // // //       <h1>Logical Equivalence Verifier</h1>
      
// // // // // // // // //       <div className="input-container">
// // // // // // // // //         <div className="input-group">
// // // // // // // // //           <label>Expression 1:</label>
// // // // // // // // //           <input
// // // // // // // // //             type="text"
// // // // // // // // //             value={expression1}
// // // // // // // // //             onChange={(e) => setExpression1(e.target.value)}
// // // // // // // // //             placeholder="e.g., p & (q | ~r)"
// // // // // // // // //           />
// // // // // // // // //         </div>
        
// // // // // // // // //         <div className="input-group">
// // // // // // // // //           <label>Expression 2:</label>
// // // // // // // // //           <input
// // // // // // // // //             type="text"
// // // // // // // // //             value={expression2}
// // // // // // // // //             onChange={(e) => setExpression2(e.target.value)}
// // // // // // // // //             placeholder="e.g., p & q | p & ~r"
// // // // // // // // //           />
// // // // // // // // //         </div>
        
// // // // // // // // //         <button onClick={verifyEquivalence}>Verify Equivalence</button>
// // // // // // // // //       </div>
      
// // // // // // // // //       {error && <div className="error">{error}</div>}
      
// // // // // // // // //       {result !== null && (
// // // // // // // // //         <div className={`result ${result ? 'equivalent' : 'not-equivalent'}`}>
// // // // // // // // //           <h2>
// // // // // // // // //             {result 
// // // // // // // // //               ? "The expressions are logically equivalent" 
// // // // // // // // //               : "The expressions are NOT logically equivalent"}
// // // // // // // // //           </h2>
// // // // // // // // //         </div>
// // // // // // // // //       )}
      
// // // // // // // // //       {showTruthTable && truthTable.length > 0 && (
// // // // // // // // //         <div className="truth-table">
// // // // // // // // //           <h2>Truth Table</h2>
// // // // // // // // //           <button onClick={() => setShowTruthTable(!showTruthTable)}>
// // // // // // // // //             {showTruthTable ? "Hide Truth Table" : "Show Truth Table"}
// // // // // // // // //           </button>
          
// // // // // // // // //           <table>
// // // // // // // // //             <thead>
// // // // // // // // //               <tr>
// // // // // // // // //                 {Object.keys(truthTable[0].assignment).map(variable => (
// // // // // // // // //                   <th key={variable}>{variable}</th>
// // // // // // // // //                 ))}
// // // // // // // // //                 <th>Expression 1</th>
// // // // // // // // //                 <th>Expression 2</th>
// // // // // // // // //                 <th>Equivalent?</th>
// // // // // // // // //               </tr>
// // // // // // // // //             </thead>
// // // // // // // // //             <tbody>
// // // // // // // // //               {truthTable.map((row, index) => (
// // // // // // // // //                 <tr key={index}>
// // // // // // // // //                   {Object.entries(row.assignment).map(([variable, value]) => (
// // // // // // // // //                     <td key={variable}>{value ? 'T' : 'F'}</td>
// // // // // // // // //                   ))}
// // // // // // // // //                   <td>{row.result1 ? 'T' : 'F'}</td>
// // // // // // // // //                   <td>{row.result2 ? 'T' : 'F'}</td>
// // // // // // // // //                   <td>{row.equivalent ? '✓' : '✗'}</td>
// // // // // // // // //                 </tr>
// // // // // // // // //               ))}
// // // // // // // // //             </tbody>
// // // // // // // // //           </table>
// // // // // // // // //         </div>
// // // // // // // // //       )}
      
// // // // // // // // //       <div className="help-section">
// // // // // // // // //         <h3>Supported Operators</h3>
// // // // // // // // //         <ul>
// // // // // // // // //           <li><strong>AND:</strong> &amp;, AND, *</li>
// // // // // // // // //           <li><strong>OR:</strong> |, OR, +</li>
// // // // // // // // //           <li><strong>NOT:</strong> ~, NOT, !</li>
// // // // // // // // //           <li><strong>IMPLIES:</strong> {'->'}, IMPLIES, {'\u2192'}</li>
// // // // // // // // //           <li><strong>BICONDITIONAL:</strong> {'<->'}, IFF, {'\u2194'}</li>
// // // // // // // // //           <li><strong>XOR:</strong> !=, XOR, {'\u2295'}</li>
// // // // // // // // //         </ul>
// // // // // // // // //         <p>Example: (p &amp; q) | (~p {'->'} r)</p>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default LogicalEquivalenceVerifier;


// // // // // // // // // File: components/LogicalEquivalenceVerifier.js
// // // // // // // // import { useState } from 'react'
// // // // // // // // import './EquivalenceChecker.css'


// // // // // // // // const LogicalEquivalenceVerifier = () => {
// // // // // // // //   const [expression1, setExpression1] = useState('');
// // // // // // // //   const [expression2, setExpression2] = useState('');
// // // // // // // //   const [result, setResult] = useState(null);
// // // // // // // //   const [error, setError] = useState('');
// // // // // // // //   const [truthTable, setTruthTable] = useState([]);
// // // // // // // //   const [showTruthTable, setShowTruthTable] = useState(false);
// // // // // // // //   const [activeExpressionId, setActiveExpressionId] = useState(1);

// // // // // // // //   // Add symbol to active expression
// // // // // // // //   const addSymbol = (symbol) => {
// // // // // // // //     if (activeExpressionId === 1) {
// // // // // // // //       setExpression1(expression1 + symbol);
// // // // // // // //     } else {
// // // // // // // //       setExpression2(expression2 + symbol);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // Clear active expression
// // // // // // // //   const clearExpression = () => {
// // // // // // // //     if (activeExpressionId === 1) {
// // // // // // // //       setExpression1('');
// // // // // // // //     } else {
// // // // // // // //       setExpression2('');
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // Backspace (delete last character)
// // // // // // // //   const backspace = () => {
// // // // // // // //     if (activeExpressionId === 1) {
// // // // // // // //       setExpression1(expression1.slice(0, -1));
// // // // // // // //     } else {
// // // // // // // //       setExpression2(expression2.slice(0, -1));
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // Extract unique variables from both expressions
// // // // // // // //   const extractVariables = (expr1, expr2) => {
// // // // // // // //     const combined = expr1 + expr2;
// // // // // // // //     const varRegex = /[A-Za-z]/g;
// // // // // // // //     const matches = combined.match(varRegex) || [];
// // // // // // // //     return [...new Set(matches)].sort();
// // // // // // // //   };

// // // // // // // //   // Handle implication: p → q is equivalent to !p || q
// // // // // // // //   const handleImplication = (p, q) => {
// // // // // // // //     return !p || q;
// // // // // // // //   };

// // // // // // // //   // Handle biconditional: p ↔ q is equivalent to (p → q) && (q → p)
// // // // // // // //   const handleBiconditional = (p, q) => {
// // // // // // // //     return handleImplication(p, q) && handleImplication(q, p);
// // // // // // // //   };

// // // // // // // //   // Handle XOR: p ⊕ q is equivalent to (p || q) && !(p && q)
// // // // // // // //   const handleXor = (p, q) => {
// // // // // // // //     return (p || q) && !(p && q);
// // // // // // // //   };

// // // // // // // //   // Parse and evaluate logical expression
// // // // // // // //   const evaluateExpression = (expr, variableValues) => {
// // // // // // // //     // Replace variables with their values
// // // // // // // //     let expression = expr.toLowerCase();
    
// // // // // // // //     // Convert expression to JavaScript syntax
// // // // // // // //     expression = expression.replace(/\s+/g, ' ');
    
// // // // // // // //     // Replace logical operators with JavaScript operators
// // // // // // // //     // First, mark positions of variables to prevent operator replacement inside variable names
// // // // // // // //     const variables = Object.keys(variableValues);
// // // // // // // //     for (const variable of variables) {
// // // // // // // //       const regex = new RegExp(variable, 'gi');
// // // // // // // //       expression = expression.replace(regex, `__${variable.toLowerCase()}__`);
// // // // // // // //     }
    
// // // // // // // //     // Replace operators
// // // // // // // //     expression = expression.replace(/\band\b|\b\*\b|&|∧/gi, '&&');
// // // // // // // //     expression = expression.replace(/\bor\b|\b\+\b|\||∨/gi, '||');
// // // // // // // //     expression = expression.replace(/\bnot\b|~|¬/gi, '!');
    
// // // // // // // //     // Process special operators (implication, biconditional, xor)
// // // // // // // //     // We'll use placeholders for these since they need custom evaluation
// // // // // // // //     expression = expression.replace(/\bimplies\b|→|=>/gi, '->');
// // // // // // // //     expression = expression.replace(/\biff\b|↔|<=>|≡/gi, '<->');
// // // // // // // //     expression = expression.replace(/\bxor\b|⊕|!=|<>/gi, '!=');
    
// // // // // // // //     // Now replace the variables with their actual values
// // // // // // // //     for (const [variable, value] of Object.entries(variableValues)) {
// // // // // // // //       const regex = new RegExp(`__${variable}__`, 'g');
// // // // // // // //       expression = expression.replace(regex, value.toString());
// // // // // // // //     }
    
// // // // // // // //     // We need to handle the special operators manually
// // // // // // // //     // First break the expression into tokens
// // // // // // // //     const tokens = [];
// // // // // // // //     let currentToken = '';
// // // // // // // //     let i = 0;
    
// // // // // // // //     while (i < expression.length) {
// // // // // // // //       if (expression.substring(i, i + 3) === '<->') {
// // // // // // // //         if (currentToken) tokens.push(currentToken);
// // // // // // // //         tokens.push('<->');
// // // // // // // //         currentToken = '';
// // // // // // // //         i += 3;
// // // // // // // //       } else if (expression.substring(i, i + 2) === '->') {
// // // // // // // //         if (currentToken) tokens.push(currentToken);
// // // // // // // //         tokens.push('->');
// // // // // // // //         currentToken = '';
// // // // // // // //         i += 2;
// // // // // // // //       } else if (expression.substring(i, i + 2) === '!=') {
// // // // // // // //         if (currentToken) tokens.push(currentToken);
// // // // // // // //         tokens.push('!=');
// // // // // // // //         currentToken = '';
// // // // // // // //         i += 2;
// // // // // // // //       } else if ('()!&|'.includes(expression[i])) {
// // // // // // // //         if (currentToken) tokens.push(currentToken);
// // // // // // // //         tokens.push(expression[i]);
// // // // // // // //         currentToken = '';
// // // // // // // //         i++;
// // // // // // // //       } else {
// // // // // // // //         currentToken += expression[i];
// // // // // // // //         i++;
// // // // // // // //       }
// // // // // // // //     }
    
// // // // // // // //     if (currentToken) tokens.push(currentToken);
    
// // // // // // // //     // Evaluate the expression using a recursive approach
// // // // // // // //     const evaluate = (tokens, index = 0) => {
// // // // // // // //       const stack = [];
// // // // // // // //       let operator = '&&'; // Default operator
      
// // // // // // // //       while (index < tokens.length) {
// // // // // // // //         const token = tokens[index];
        
// // // // // // // //         if (token === '(') {
// // // // // // // //           const [value, newIndex] = evaluate(tokens, index + 1);
// // // // // // // //           stack.push(value);
// // // // // // // //           index = newIndex;
// // // // // // // //         } else if (token === ')') {
// // // // // // // //           return [stack.length > 0 ? stack[0] : true, index + 1];
// // // // // // // //         } else if (token === '&&' || token === '||' || token === '->' || token === '<->' || token === '!=') {
// // // // // // // //           operator = token;
// // // // // // // //           index++;
// // // // // // // //         } else if (token === '!') {
// // // // // // // //           // Handle NOT operator
// // // // // // // //           if (tokens[index + 1] === '(') {
// // // // // // // //             const [value, newIndex] = evaluate(tokens, index + 2);
// // // // // // // //             stack.push(!value);
// // // // // // // //             index = newIndex;
// // // // // // // //           } else {
// // // // // // // //             const value = tokens[index + 1] === 'true' || tokens[index + 1] === '1';
// // // // // // // //             stack.push(!value);
// // // // // // // //             index += 2;
// // // // // // // //           }
// // // // // // // //         } else {
// // // // // // // //           // Handle boolean values
// // // // // // // //           const value = token === 'true' || token === '1';
          
// // // // // // // //           if (stack.length === 0) {
// // // // // // // //             stack.push(value);
// // // // // // // //           } else {
// // // // // // // //             const left = stack.pop();
            
// // // // // // // //             if (operator === '&&') {
// // // // // // // //               stack.push(left && value);
// // // // // // // //             } else if (operator === '||') {
// // // // // // // //               stack.push(left || value);
// // // // // // // //             } else if (operator === '->') {
// // // // // // // //               stack.push(handleImplication(left, value));
// // // // // // // //             } else if (operator === '<->') {
// // // // // // // //               stack.push(handleBiconditional(left, value));
// // // // // // // //             } else if (operator === '!=') {
// // // // // // // //               stack.push(handleXor(left, value));
// // // // // // // //             }
// // // // // // // //           }
          
// // // // // // // //           index++;
// // // // // // // //         }
// // // // // // // //       }
      
// // // // // // // //       return [stack.length > 0 ? stack[0] : true, index];
// // // // // // // //     };
    
// // // // // // // //     try {
// // // // // // // //       const [result] = evaluate(tokens);
// // // // // // // //       return result;
// // // // // // // //     } catch (error) {
// // // // // // // //       throw new Error(`Error evaluating expression: ${expr}`);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // Generate truth table for both expressions
// // // // // // // //   const generateTruthTable = (variables, expr1, expr2) => {
// // // // // // // //     const rows = [];
// // // // // // // //     const combinations = Math.pow(2, variables.length);
    
// // // // // // // //     for (let i = 0; i < combinations; i++) {
// // // // // // // //       const assignment = {};
      
// // // // // // // //       // Create variable assignment for this row
// // // // // // // //       variables.forEach((variable, index) => {
// // // // // // // //         // Convert i to binary and check each bit
// // // // // // // //         const bitValue = (i & (1 << (variables.length - index - 1))) !== 0;
// // // // // // // //         assignment[variable] = bitValue;
// // // // // // // //       });
      
// // // // // // // //       try {
// // // // // // // //         // Evaluate both expressions
// // // // // // // //         const result1 = evaluateExpression(expr1, assignment);
// // // // // // // //         const result2 = evaluateExpression(expr2, assignment);
        
// // // // // // // //         rows.push({
// // // // // // // //           assignment,
// // // // // // // //           result1,
// // // // // // // //           result2,
// // // // // // // //           equivalent: result1 === result2
// // // // // // // //         });
// // // // // // // //       } catch (error) {
// // // // // // // //         throw new Error(`Error generating truth table: ${error.message}`);
// // // // // // // //       }
// // // // // // // //     }
    
// // // // // // // //     return rows;
// // // // // // // //   };

// // // // // // // //   // Verify logical equivalence
// // // // // // // //   const verifyEquivalence = () => {
// // // // // // // //     if (!expression1 || !expression2) {
// // // // // // // //       setError('Please enter both expressions');
// // // // // // // //       return;
// // // // // // // //     }
    
// // // // // // // //     try {
// // // // // // // //       setError('');
      
// // // // // // // //       // Extract variables
// // // // // // // //       const variables = extractVariables(expression1, expression2);
      
// // // // // // // //       if (variables.length > 5) {
// // // // // // // //         setError('Maximum 5 variables allowed for performance');
// // // // // // // //         return;
// // // // // // // //       }
      
// // // // // // // //       // Generate truth table
// // // // // // // //       const table = generateTruthTable(variables, expression1, expression2);
// // // // // // // //       setTruthTable(table);
      
// // // // // // // //       // Check equivalence
// // // // // // // //       const areEquivalent = table.every(row => row.equivalent);
// // // // // // // //       setResult(areEquivalent);
      
// // // // // // // //       // Show truth table
// // // // // // // //       setShowTruthTable(true);
// // // // // // // //     } catch (error) {
// // // // // // // //       setError(error.message);
// // // // // // // //       setResult(null);
// // // // // // // //       setTruthTable([]);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="verifier-container">
// // // // // // // //       <h1>Logical Equivalence Verifier</h1>
      
// // // // // // // //       <div className="expression-editor">
// // // // // // // //         <div className="expression-boxes">
// // // // // // // //           <div 
// // // // // // // //             className={`expression-box ${activeExpressionId === 1 ? 'active' : ''}`}
// // // // // // // //             onClick={() => setActiveExpressionId(1)}
// // // // // // // //           >
// // // // // // // //             <label>Expression 1:</label>
// // // // // // // //             <div className="expression-display">{expression1 || 'Click to edit'}</div>
// // // // // // // //           </div>
          
// // // // // // // //           <div 
// // // // // // // //             className={`expression-box ${activeExpressionId === 2 ? 'active' : ''}`}
// // // // // // // //             onClick={() => setActiveExpressionId(2)}
// // // // // // // //           >
// // // // // // // //             <label>Expression 2:</label>
// // // // // // // //             <div className="expression-display">{expression2 || 'Click to edit'}</div>
// // // // // // // //           </div>
// // // // // // // //         </div>
        
// // // // // // // //         <div className="input-buttons">
// // // // // // // //           <div className="button-group">
// // // // // // // //             <h4>Variables</h4>
// // // // // // // //             <div className="buttons">
// // // // // // // //               <button onClick={() => addSymbol('p')}>p</button>
// // // // // // // //               <button onClick={() => addSymbol('q')}>q</button>
// // // // // // // //               <button onClick={() => addSymbol('r')}>r</button>
// // // // // // // //               <button onClick={() => addSymbol('s')}>s</button>
// // // // // // // //               <button onClick={() => addSymbol('t')}>t</button>
// // // // // // // //             </div>
// // // // // // // //           </div>
          
// // // // // // // //           <div className="button-group">
// // // // // // // //             <h4>Operators</h4>
// // // // // // // //             <div className="buttons">
// // // // // // // //               <button onClick={() => addSymbol('∧')}>AND (∧)</button>
// // // // // // // //               <button onClick={() => addSymbol('∨')}>OR (∨)</button>
// // // // // // // //               <button onClick={() => addSymbol('¬')}>NOT (¬)</button>
// // // // // // // //               <button onClick={() => addSymbol('→')}>IMPLIES (→)</button>
// // // // // // // //               <button onClick={() => addSymbol('↔')}>IFF (↔)</button>
// // // // // // // //               <button onClick={() => addSymbol('⊕')}>XOR (⊕)</button>
// // // // // // // //             </div>
// // // // // // // //           </div>
          
// // // // // // // //           <div className="button-group">
// // // // // // // //             <h4>Parentheses</h4>
// // // // // // // //             <div className="buttons">
// // // // // // // //               <button onClick={() => addSymbol('(')}>( </button>
// // // // // // // //               <button onClick={() => addSymbol(')')}>)</button>
// // // // // // // //             </div>
// // // // // // // //           </div>
          
// // // // // // // //           <div className="button-group">
// // // // // // // //             <h4>Edit</h4>
// // // // // // // //             <div className="buttons">
// // // // // // // //               <button onClick={() => backspace()}>Backspace</button>
// // // // // // // //               <button onClick={() => clearExpression()}>Clear</button>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
        
// // // // // // // //         <div className="action-buttons">
// // // // // // // //           <button onClick={verifyEquivalence} className="verify-button">Verify Equivalence</button>
// // // // // // // //         </div>
// // // // // // // //       </div>
      
// // // // // // // //       {error && <div className="error">{error}</div>}
      
// // // // // // // //       {result !== null && (
// // // // // // // //         <div className={`result ${result ? 'equivalent' : 'not-equivalent'}`}>
// // // // // // // //           <h2>
// // // // // // // //             {result 
// // // // // // // //               ? "The expressions are logically equivalent" 
// // // // // // // //               : "The expressions are NOT logically equivalent"}
// // // // // // // //           </h2>
// // // // // // // //         </div>
// // // // // // // //       )}
      
// // // // // // // //       {showTruthTable && truthTable.length > 0 && (
// // // // // // // //         <div className="truth-table">
// // // // // // // //           <h2>Truth Table</h2>
// // // // // // // //           <button onClick={() => setShowTruthTable(!showTruthTable)} className="toggle-button">
// // // // // // // //             {showTruthTable ? "Hide Truth Table" : "Show Truth Table"}
// // // // // // // //           </button>
          
// // // // // // // //           <table>
// // // // // // // //             <thead>
// // // // // // // //               <tr>
// // // // // // // //                 {Object.keys(truthTable[0].assignment).map(variable => (
// // // // // // // //                   <th key={variable}>{variable}</th>
// // // // // // // //                 ))}
// // // // // // // //                 <th>Expression 1</th>
// // // // // // // //                 <th>Expression 2</th>
// // // // // // // //                 <th>Equivalent?</th>
// // // // // // // //               </tr>
// // // // // // // //             </thead>
// // // // // // // //             <tbody>
// // // // // // // //               {truthTable.map((row, index) => (
// // // // // // // //                 <tr key={index}>
// // // // // // // //                   {Object.entries(row.assignment).map(([variable, value]) => (
// // // // // // // //                     <td key={variable}>{value ? 'T' : 'F'}</td>
// // // // // // // //                   ))}
// // // // // // // //                   <td>{row.result1 ? 'T' : 'F'}</td>
// // // // // // // //                   <td>{row.result2 ? 'T' : 'F'}</td>
// // // // // // // //                   <td>{row.equivalent ? '✓' : '✗'}</td>
// // // // // // // //                 </tr>
// // // // // // // //               ))}
// // // // // // // //             </tbody>
// // // // // // // //           </table>
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default LogicalEquivalenceVerifier;

// // // // // // // // File: components/LogicalEquivalenceVerifier.js
// // // // // // // import { useState } from 'react';
// // // // // // // import './EquivalenceChecker.css'

// // // // // // // const LogicalEquivalenceVerifier = () => {
// // // // // // //   const [expression1, setExpression1] = useState('');
// // // // // // //   const [expression2, setExpression2] = useState('');
// // // // // // //   const [result, setResult] = useState(null);
// // // // // // //   const [error, setError] = useState('');
// // // // // // //   const [truthTable, setTruthTable] = useState([]);
// // // // // // //   const [showTruthTable, setShowTruthTable] = useState(false);
// // // // // // //   const [activeExpressionId, setActiveExpressionId] = useState(1);

// // // // // // //   // Add symbol to active expression
// // // // // // //   const addSymbol = (symbol) => {
// // // // // // //     if (activeExpressionId === 1) {
// // // // // // //       setExpression1(expression1 + symbol);
// // // // // // //     } else {
// // // // // // //       setExpression2(expression2 + symbol);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Clear active expression
// // // // // // //   const clearExpression = () => {
// // // // // // //     if (activeExpressionId === 1) {
// // // // // // //       setExpression1('');
// // // // // // //     } else {
// // // // // // //       setExpression2('');
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Backspace (delete last character)
// // // // // // //   const backspace = () => {
// // // // // // //     if (activeExpressionId === 1) {
// // // // // // //       setExpression1(expression1.slice(0, -1));
// // // // // // //     } else {
// // // // // // //       setExpression2(expression2.slice(0, -1));
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Extract unique variables from both expressions
// // // // // // //   const extractVariables = (expr1, expr2) => {
// // // // // // //     const combined = expr1 + expr2;
// // // // // // //     // Match all single letters that represent variables
// // // // // // //     const varRegex = /[a-z]/g;
// // // // // // //     const matches = combined.toLowerCase().match(varRegex) || [];
// // // // // // //     return [...new Set(matches)].sort();
// // // // // // //   };

// // // // // // //   // Generate all possible truth assignments for variables
// // // // // // //   const generateTruthAssignments = (variables) => {
// // // // // // //     const assignments = [];
// // // // // // //     const totalCombinations = Math.pow(2, variables.length);
    
// // // // // // //     for (let i = 0; i < totalCombinations; i++) {
// // // // // // //       const assignment = {};
      
// // // // // // //       variables.forEach((variable, index) => {
// // // // // // //         // Create a bit mask for each position
// // // // // // //         const bitMask = 1 << (variables.length - index - 1);
// // // // // // //         // Check if this bit is set in i
// // // // // // //         assignment[variable] = (i & bitMask) !== 0;
// // // // // // //       });
      
// // // // // // //       assignments.push(assignment);
// // // // // // //     }
    
// // // // // // //     return assignments;
// // // // // // //   };

// // // // // // //   // Basic evaluation of a single variable
// // // // // // //   const evaluateVariable = (v, assignment) => {
// // // // // // //     // If v is a variable name, return its value
// // // // // // //     if (assignment[v] !== undefined) {
// // // // // // //       return assignment[v];
// // // // // // //     }
    
// // // // // // //     // If v is 'T', 'TRUE', or 'true', return true
// // // // // // //     if (v === 'T' || v === 'TRUE' || v === 'true') {
// // // // // // //       return true;
// // // // // // //     }
    
// // // // // // //     // If v is 'F', 'FALSE', or 'false', return false
// // // // // // //     if (v === 'F' || v === 'FALSE' || v === 'false') {
// // // // // // //       return false;
// // // // // // //     }
    
// // // // // // //     throw new Error(`Unknown variable: ${v}`);
// // // // // // //   };

// // // // // // //   // Parse and evaluate logical expression using a simple recursive parser
// // // // // // //   const evaluateExpression = (expr, assignment) => {
// // // // // // //     // Remove all whitespace
// // // // // // //     const expression = expr.replace(/\s+/g, '');
    
// // // // // // //     // If expression is empty, return true
// // // // // // //     if (!expression) return true;
    
// // // // // // //     // Check for parenthesized expressions first
// // // // // // //     let parenthesisLevel = 0;
// // // // // // //     let parenthesisStart = -1;
    
// // // // // // //     for (let i = 0; i < expression.length; i++) {
// // // // // // //       if (expression[i] === '(') {
// // // // // // //         if (parenthesisLevel === 0) {
// // // // // // //           parenthesisStart = i;
// // // // // // //         }
// // // // // // //         parenthesisLevel++;
// // // // // // //       } else if (expression[i] === ')') {
// // // // // // //         parenthesisLevel--;
// // // // // // //         if (parenthesisLevel === 0 && parenthesisStart !== -1) {
// // // // // // //           // Found matching parentheses
// // // // // // //           const innerExpr = expression.substring(parenthesisStart + 1, i);
          
// // // // // // //           // If the entire expression is parenthesized, evaluate the inner expression
// // // // // // //           if (parenthesisStart === 0 && i === expression.length - 1) {
// // // // // // //             return evaluateExpression(innerExpr, assignment);
// // // // // // //           }
          
// // // // // // //           // Check for negation before parentheses
// // // // // // //           if (parenthesisStart > 0 && 
// // // // // // //               (expression[parenthesisStart - 1] === '¬' || 
// // // // // // //                expression[parenthesisStart - 1] === '~' || 
// // // // // // //                expression[parenthesisStart - 1] === '!')) {
// // // // // // //             const negationStart = parenthesisStart - 1;
// // // // // // //             const beforeNegation = expression.substring(0, negationStart);
// // // // // // //             const afterParenthesis = expression.substring(i + 1);
// // // // // // //             const negatedValue = !evaluateExpression(innerExpr, assignment);
            
// // // // // // //             // Recursively evaluate with the negated subexpression
// // // // // // //             return evaluateExpression(beforeNegation + 
// // // // // // //                                      (negatedValue ? 'T' : 'F') + 
// // // // // // //                                      afterParenthesis, assignment);
// // // // // // //           }
// // // // // // //         }
// // // // // // //       }
// // // // // // //     }
    
// // // // // // //     // Check for basic operators at the top level (not in parentheses)
// // // // // // //     // We'll check in order of precedence: NOT, AND, OR, IMPLIES, BICONDITIONAL
    
// // // // // // //     // Check for NOT operator (highest precedence)
// // // // // // //     if (expression[0] === '¬' || expression[0] === '~' || expression[0] === '!') {
// // // // // // //       return !evaluateExpression(expression.substring(1), assignment);
// // // // // // //     }
    
// // // // // // //     // Look for binary operators at the top level
// // // // // // //     parenthesisLevel = 0;
    
// // // // // // //     // Check for binary operators in reverse precedence order
// // // // // // //     // First check for biconditional (↔, <->, <=>, ≡, iff)
// // // // // // //     for (let i = 0; i < expression.length; i++) {
// // // // // // //       if (expression[i] === '(') {
// // // // // // //         parenthesisLevel++;
// // // // // // //       } else if (expression[i] === ')') {
// // // // // // //         parenthesisLevel--;
// // // // // // //       } else if (parenthesisLevel === 0) {
// // // // // // //         if ((expression[i] === '↔') || 
// // // // // // //             (i < expression.length - 2 && expression.substring(i, i + 3) === '<->') ||
// // // // // // //             (i < expression.length - 2 && expression.substring(i, i + 3) === '<=>') ||
// // // // // // //             (expression[i] === '≡')) {
          
// // // // // // //           // Get left and right operands
// // // // // // //           const leftExpr = expression.substring(0, i);
// // // // // // //           // Adjust index for multi-character operators
// // // // // // //           const rightStartIdx = expression[i] === '↔' || expression[i] === '≡' ? i + 1 : i + 3;
// // // // // // //           const rightExpr = expression.substring(rightStartIdx);
          
// // // // // // //           // Evaluate both sides
// // // // // // //           const leftValue = evaluateExpression(leftExpr, assignment);
// // // // // // //           const rightValue = evaluateExpression(rightExpr, assignment);
          
// // // // // // //           // Biconditional is true if both sides have the same value
// // // // // // //           return leftValue === rightValue;
// // // // // // //         }
// // // // // // //       }
// // // // // // //     }
    
// // // // // // //     // Check for implication (→, ->, =>, implies)
// // // // // // //     parenthesisLevel = 0;
// // // // // // //     for (let i = 0; i < expression.length; i++) {
// // // // // // //       if (expression[i] === '(') {
// // // // // // //         parenthesisLevel++;
// // // // // // //       } else if (expression[i] === ')') {
// // // // // // //         parenthesisLevel--;
// // // // // // //       } else if (parenthesisLevel === 0) {
// // // // // // //         if ((expression[i] === '→') || 
// // // // // // //             (i < expression.length - 1 && expression.substring(i, i + 2) === '->') ||
// // // // // // //             (i < expression.length - 1 && expression.substring(i, i + 2) === '=>')) {
          
// // // // // // //           // Get left and right operands
// // // // // // //           const leftExpr = expression.substring(0, i);
// // // // // // //           // Adjust index for multi-character operators
// // // // // // //           const rightStartIdx = expression[i] === '→' ? i + 1 : i + 2;
// // // // // // //           const rightExpr = expression.substring(rightStartIdx);
          
// // // // // // //           // Evaluate both sides
// // // // // // //           const leftValue = evaluateExpression(leftExpr, assignment);
// // // // // // //           const rightValue = evaluateExpression(rightExpr, assignment);
          
// // // // // // //           // p → q is equivalent to ¬p ∨ q
// // // // // // //           return !leftValue || rightValue;
// // // // // // //         }
// // // // // // //       }
// // // // // // //     }
    
// // // // // // //     // Check for XOR (⊕, !=, <>)
// // // // // // //     parenthesisLevel = 0;
// // // // // // //     for (let i = 0; i < expression.length; i++) {
// // // // // // //       if (expression[i] === '(') {
// // // // // // //         parenthesisLevel++;
// // // // // // //       } else if (expression[i] === ')') {
// // // // // // //         parenthesisLevel--;
// // // // // // //       } else if (parenthesisLevel === 0) {
// // // // // // //         if ((expression[i] === '⊕') || 
// // // // // // //             (i < expression.length - 1 && expression.substring(i, i + 2) === '!=') ||
// // // // // // //             (i < expression.length - 1 && expression.substring(i, i + 2) === '<>')) {
          
// // // // // // //           // Get left and right operands
// // // // // // //           const leftExpr = expression.substring(0, i);
// // // // // // //           // Adjust index for multi-character operators
// // // // // // //           const rightStartIdx = expression[i] === '⊕' ? i + 1 : i + 2;
// // // // // // //           const rightExpr = expression.substring(rightStartIdx);
          
// // // // // // //           // Evaluate both sides
// // // // // // //           const leftValue = evaluateExpression(leftExpr, assignment);
// // // // // // //           const rightValue = evaluateExpression(rightExpr, assignment);
          
// // // // // // //           // XOR is true if left and right have different values
// // // // // // //           return leftValue !== rightValue;
// // // // // // //         }
// // // // // // //       }
// // // // // // //     }
    
// // // // // // //     // Check for OR (∨, ||, |, or)
// // // // // // //     parenthesisLevel = 0;
// // // // // // //     for (let i = 0; i < expression.length; i++) {
// // // // // // //       if (expression[i] === '(') {
// // // // // // //         parenthesisLevel++;
// // // // // // //       } else if (expression[i] === ')') {
// // // // // // //         parenthesisLevel--;
// // // // // // //       } else if (parenthesisLevel === 0) {
// // // // // // //         if ((expression[i] === '∨') || 
// // // // // // //             (i < expression.length - 1 && expression.substring(i, i + 2) === '||') ||
// // // // // // //             (expression[i] === '|')) {
          
// // // // // // //           // Get left and right operands
// // // // // // //           const leftExpr = expression.substring(0, i);
// // // // // // //           // Adjust index for multi-character operators
// // // // // // //           const rightStartIdx = expression[i] === '∨' || expression[i] === '|' ? i + 1 : i + 2;
// // // // // // //           const rightExpr = expression.substring(rightStartIdx);
          
// // // // // // //           // Evaluate both sides
// // // // // // //           const leftValue = evaluateExpression(leftExpr, assignment);
// // // // // // //           const rightValue = evaluateExpression(rightExpr, assignment);
          
// // // // // // //           // OR returns true if either side is true
// // // // // // //           return leftValue || rightValue;
// // // // // // //         }
// // // // // // //       }
// // // // // // //     }
    
// // // // // // //     // Check for AND (∧, &&, &, and, *)
// // // // // // //     parenthesisLevel = 0;
// // // // // // //     for (let i = 0; i < expression.length; i++) {
// // // // // // //       if (expression[i] === '(') {
// // // // // // //         parenthesisLevel++;
// // // // // // //       } else if (expression[i] === ')') {
// // // // // // //         parenthesisLevel--;
// // // // // // //       } else if (parenthesisLevel === 0) {
// // // // // // //         if ((expression[i] === '∧') || 
// // // // // // //             (i < expression.length - 1 && expression.substring(i, i + 2) === '&&') ||
// // // // // // //             (expression[i] === '&') ||
// // // // // // //             (expression[i] === '*')) {
          
// // // // // // //           // Get left and right operands
// // // // // // //           const leftExpr = expression.substring(0, i);
// // // // // // //           // Adjust index for multi-character operators
// // // // // // //           const rightStartIdx = (expression[i] === '∧' || expression[i] === '&' || expression[i] === '*') ? i + 1 : i + 2;
// // // // // // //           const rightExpr = expression.substring(rightStartIdx);
          
// // // // // // //           // Evaluate both sides
// // // // // // //           const leftValue = evaluateExpression(leftExpr, assignment);
// // // // // // //           const rightValue = evaluateExpression(rightExpr, assignment);
          
// // // // // // //           // AND returns true only if both sides are true
// // // // // // //           return leftValue && rightValue;
// // // // // // //         }
// // // // // // //       }
// // // // // // //     }
    
// // // // // // //     // If we reach here, the expression must be a simple term (variable, T, or F)
// // // // // // //     try {
// // // // // // //       return evaluateVariable(expression.toLowerCase(), assignment);
// // // // // // //     } catch (e) {
// // // // // // //       throw new Error(`Error evaluating expression: ${expression}`);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Verify logical equivalence by checking all possible assignments
// // // // // // //   const verifyEquivalence = () => {
// // // // // // //     if (!expression1 || !expression2) {
// // // // // // //       setError('Please enter both expressions');
// // // // // // //       return;
// // // // // // //     }
    
// // // // // // //     try {
// // // // // // //       setError('');
      
// // // // // // //       // Extract variables
// // // // // // //       const variables = extractVariables(expression1, expression2);
      
// // // // // // //       if (variables.length > 5) {
// // // // // // //         setError('Maximum 5 variables allowed for performance');
// // // // // // //         return;
// // // // // // //       }
      
// // // // // // //       // Generate all possible assignments
// // // // // // //       const assignments = generateTruthAssignments(variables);
      
// // // // // // //       // Evaluate both expressions for each assignment
// // // // // // //       const tableRows = assignments.map(assignment => {
// // // // // // //         try {
// // // // // // //           const result1 = evaluateExpression(expression1, assignment);
// // // // // // //           const result2 = evaluateExpression(expression2, assignment);
          
// // // // // // //           return {
// // // // // // //             assignment,
// // // // // // //             result1,
// // // // // // //             result2,
// // // // // // //             equivalent: result1 === result2
// // // // // // //           };
// // // // // // //         } catch (error) {
// // // // // // //           throw new Error(`Error evaluating expressions: ${error.message}`);
// // // // // // //         }
// // // // // // //       });
      
// // // // // // //       setTruthTable(tableRows);
      
// // // // // // //       // Expressions are equivalent if they have the same values for all assignments
// // // // // // //       const areEquivalent = tableRows.every(row => row.equivalent);
// // // // // // //       setResult(areEquivalent);
      
// // // // // // //       // Show truth table
// // // // // // //       setShowTruthTable(true);
// // // // // // //     } catch (error) {
// // // // // // //       setError(error.message);
// // // // // // //       setResult(null);
// // // // // // //       setTruthTable([]);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="verifier-container">
// // // // // // //       <h1>Logical Equivalence Verifier</h1>
      
// // // // // // //       <div className="expression-editor">
// // // // // // //         <div className="expression-boxes">
// // // // // // //           <div 
// // // // // // //             className={`expression-box ${activeExpressionId === 1 ? 'active' : ''}`}
// // // // // // //             onClick={() => setActiveExpressionId(1)}
// // // // // // //           >
// // // // // // //             <label>Expression 1:</label>
// // // // // // //             <div className="expression-display">{expression1 || 'Click to edit'}</div>
// // // // // // //           </div>
          
// // // // // // //           <div 
// // // // // // //             className={`expression-box ${activeExpressionId === 2 ? 'active' : ''}`}
// // // // // // //             onClick={() => setActiveExpressionId(2)}
// // // // // // //           >
// // // // // // //             <label>Expression 2:</label>
// // // // // // //             <div className="expression-display">{expression2 || 'Click to edit'}</div>
// // // // // // //           </div>
// // // // // // //         </div>
        
// // // // // // //         <div className="input-buttons">
// // // // // // //           <div className="button-group">
// // // // // // //             <h4>Variables</h4>
// // // // // // //             <div className="buttons">
// // // // // // //               <button onClick={() => addSymbol('p')}>p</button>
// // // // // // //               <button onClick={() => addSymbol('q')}>q</button>
// // // // // // //               <button onClick={() => addSymbol('r')}>r</button>
// // // // // // //               <button onClick={() => addSymbol('s')}>s</button>
// // // // // // //               <button onClick={() => addSymbol('t')}>t</button>
// // // // // // //             </div>
// // // // // // //           </div>
          
// // // // // // //           <div className="button-group">
// // // // // // //             <h4>Operators</h4>
// // // // // // //             <div className="buttons">
// // // // // // //               <button onClick={() => addSymbol('∧')}>AND (∧)</button>
// // // // // // //               <button onClick={() => addSymbol('∨')}>OR (∨)</button>
// // // // // // //               <button onClick={() => addSymbol('¬')}>NOT (¬)</button>
// // // // // // //               <button onClick={() => addSymbol('→')}>IMPLIES (→)</button>
// // // // // // //               <button onClick={() => addSymbol('↔')}>IFF (↔)</button>
// // // // // // //               <button onClick={() => addSymbol('⊕')}>XOR (⊕)</button>
// // // // // // //             </div>
// // // // // // //           </div>
          
// // // // // // //           <div className="button-group">
// // // // // // //             <h4>Parentheses</h4>
// // // // // // //             <div className="buttons">
// // // // // // //               <button onClick={() => addSymbol('(')}>( </button>
// // // // // // //               <button onClick={() => addSymbol(')')}>)</button>
// // // // // // //             </div>
// // // // // // //           </div>
          
// // // // // // //           <div className="button-group">
// // // // // // //             <h4>Edit</h4>
// // // // // // //             <div className="buttons">
// // // // // // //               <button onClick={backspace}>Backspace</button>
// // // // // // //               <button onClick={clearExpression}>Clear</button>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
        
// // // // // // //         <div className="action-buttons">
// // // // // // //           <button onClick={verifyEquivalence} className="verify-button">Verify Equivalence</button>
// // // // // // //         </div>
// // // // // // //       </div>
      
// // // // // // //       {error && <div className="error">{error}</div>}
      
// // // // // // //       {result !== null && (
// // // // // // //         <div className={`result ${result ? 'equivalent' : 'not-equivalent'}`}>
// // // // // // //           <h2>
// // // // // // //             {result 
// // // // // // //               ? "The expressions are logically equivalent" 
// // // // // // //               : "The expressions are NOT logically equivalent"}
// // // // // // //           </h2>
// // // // // // //         </div>
// // // // // // //       )}
      
// // // // // // //       {showTruthTable && truthTable.length > 0 && (
// // // // // // //         <div className="truth-table">
// // // // // // //           <h2>Truth Table</h2>
// // // // // // //           <button onClick={() => setShowTruthTable(!showTruthTable)} className="toggle-button">
// // // // // // //             {showTruthTable ? "Hide Truth Table" : "Show Truth Table"}
// // // // // // //           </button>
          
// // // // // // //           <table>
// // // // // // //             <thead>
// // // // // // //               <tr>
// // // // // // //                 {Object.keys(truthTable[0].assignment).map(variable => (
// // // // // // //                   <th key={variable}>{variable}</th>
// // // // // // //                 ))}
// // // // // // //                 <th>Expression 1</th>
// // // // // // //                 <th>Expression 2</th>
// // // // // // //                 <th>Equivalent?</th>
// // // // // // //               </tr>
// // // // // // //             </thead>
// // // // // // //             <tbody>
// // // // // // //               {truthTable.map((row, index) => (
// // // // // // //                 <tr key={index}>
// // // // // // //                   {Object.entries(row.assignment).map(([variable, value]) => (
// // // // // // //                     <td key={variable}>{value ? 'T' : 'F'}</td>
// // // // // // //                   ))}
// // // // // // //                   <td>{row.result1 ? 'T' : 'F'}</td>
// // // // // // //                   <td>{row.result2 ? 'T' : 'F'}</td>
// // // // // // //                   <td>{row.equivalent ? '✓' : '✗'}</td>
// // // // // // //                 </tr>
// // // // // // //               ))}
// // // // // // //             </tbody>
// // // // // // //           </table>
// // // // // // //         </div>
// // // // // // //       )}
      
// // // // // // //       <div className="help-section">
// // // // // // //         <h3>Supported Operators</h3>
// // // // // // //         <ul>
// // // // // // //           <li><strong>AND:</strong> ∧, &amp;, &amp;&amp;, *</li>
// // // // // // //           <li><strong>OR:</strong> ∨, |, ||</li>
// // // // // // //           <li><strong>NOT:</strong> ¬, ~, !</li>
// // // // // // //           <li><strong>IMPLIES:</strong> →, -&gt;, =&gt;</li>
// // // // // // //           <li><strong>BICONDITIONAL:</strong> ↔, &lt;-&gt;, &lt;=&gt;, ≡</li>
// // // // // // //           <li><strong>XOR:</strong> ⊕, !=, &lt;&gt;</li>
// // // // // // //         </ul>
// // // // // // //         <p>Example: p ∧ q → r is equivalent to ¬(p ∧ q) ∨ r</p>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default LogicalEquivalenceVerifier;

// // // // // // import { useState } from 'react';
// // // // // // import './EquivalenceChecker.css';

// // // // // // const LogicalEquivalenceVerifier = () => {
// // // // // //   const [expression1, setExpression1] = useState('');
// // // // // //   const [expression2, setExpression2] = useState('');
// // // // // //   const [result, setResult] = useState(null);
// // // // // //   const [error, setError] = useState('');
// // // // // //   const [truthTable, setTruthTable] = useState([]);
// // // // // //   const [showTruthTable, setShowTruthTable] = useState(false);
// // // // // //   const [activeExpressionId, setActiveExpressionId] = useState(1);

// // // // // //   // Add symbol to active expression
// // // // // //   const addSymbol = (symbol) => {
// // // // // //     if (activeExpressionId === 1) {
// // // // // //       setExpression1(expression1 + symbol);
// // // // // //     } else {
// // // // // //       setExpression2(expression2 + symbol);
// // // // // //     }
// // // // // //   };

// // // // // //   // Clear active expression
// // // // // //   const clearExpression = () => {
// // // // // //     if (activeExpressionId === 1) {
// // // // // //       setExpression1('');
// // // // // //     } else {
// // // // // //       setExpression2('');
// // // // // //     }
// // // // // //   };

// // // // // //   // Backspace (delete last character)
// // // // // //   const backspace = () => {
// // // // // //     if (activeExpressionId === 1) {
// // // // // //       setExpression1(expression1.slice(0, -1));
// // // // // //     } else {
// // // // // //       setExpression2(expression2.slice(0, -1));
// // // // // //     }
// // // // // //   };

// // // // // //   // Extract unique variables from both expressions
// // // // // //   const extractVariables = (expr1, expr2) => {
// // // // // //     const combined = expr1 + expr2;
// // // // // //     // Match all single letters that represent variables
// // // // // //     const varRegex = /[a-z]/g;
// // // // // //     const matches = combined.toLowerCase().match(varRegex) || [];
// // // // // //     return [...new Set(matches)].sort();
// // // // // //   };

// // // // // //   // Generate all possible truth assignments for variables
// // // // // //   const generateTruthAssignments = (variables) => {
// // // // // //     const assignments = [];
// // // // // //     const totalCombinations = Math.pow(2, variables.length);
    
// // // // // //     for (let i = 0; i < totalCombinations; i++) {
// // // // // //       const assignment = {};
      
// // // // // //       variables.forEach((variable, index) => {
// // // // // //         // Create a bit mask for each position
// // // // // //         const bitMask = 1 << (variables.length - index - 1);
// // // // // //         // Check if this bit is set in i
// // // // // //         assignment[variable] = (i & bitMask) !== 0;
// // // // // //       });
      
// // // // // //       assignments.push(assignment);
// // // // // //     }
    
// // // // // //     return assignments;
// // // // // //   };

// // // // // //   // Improved expression evaluation using preprocessing approach
// // // // // //   const evaluateExpression = (expression, assignment) => {
// // // // // //     // Preprocess the expression to standardize operators
// // // // // //     let processedExpr = expression.replace(/\s+/g, '');  // Remove whitespace
    
// // // // // //     // Replace alternative operator symbols with standard ones
// // // // // //     processedExpr = processedExpr.replace(/&&|&|\*/g, '∧'); // AND
// // // // // //     processedExpr = processedExpr.replace(/\|\||\|/g, '∨'); // OR
// // // // // //     processedExpr = processedExpr.replace(/~|!/g, '¬'); // NOT
// // // // // //     processedExpr = processedExpr.replace(/-&gt;|=&gt;|=>/g, '→'); // IMPLIES
// // // // // //     processedExpr = processedExpr.replace(/&lt;-&gt;|&lt;=&gt;|<->|<=>/g, '↔'); // BICONDITIONAL
// // // // // //     processedExpr = processedExpr.replace(/!=|&lt;&gt;|<>/g, '⊕'); // XOR
    
// // // // // //     // Convert variables to their truth values
// // // // // //     for (const [variable, value] of Object.entries(assignment)) {
// // // // // //       const regex = new RegExp(`\\b${variable}\\b`, 'g');
// // // // // //       processedExpr = processedExpr.replace(regex, value ? 'true' : 'false');
// // // // // //     }
    
// // // // // //     // Replace T/TRUE with true and F/FALSE with false
// // // // // //     processedExpr = processedExpr.replace(/\bT\b|\bTRUE\b|\btrue\b/gi, 'true');
// // // // // //     processedExpr = processedExpr.replace(/\bF\b|\bFALSE\b|\bfalse\b/gi, 'false');
    
// // // // // //     // Evaluate the processed expression
// // // // // //     return evaluateLogicalExpression(processedExpr);
// // // // // //   };
  
// // // // // //   // Recursive function to evaluate a logical expression
// // // // // //   const evaluateLogicalExpression = (expr) => {
// // // // // //     // Base cases: true and false literals
// // // // // //     if (expr === 'true') return true;
// // // // // //     if (expr === 'false') return false;
    
// // // // // //     // Check for parenthesized expressions first
// // // // // //     let parenthesisLevel = 0;
// // // // // //     let openParenIndex = -1;
    
// // // // // //     for (let i = 0; i < expr.length; i++) {
// // // // // //       if (expr[i] === '(') {
// // // // // //         if (parenthesisLevel === 0) {
// // // // // //           openParenIndex = i;
// // // // // //         }
// // // // // //         parenthesisLevel++;
// // // // // //       } else if (expr[i] === ')') {
// // // // // //         parenthesisLevel--;
// // // // // //         if (parenthesisLevel === 0 && openParenIndex !== -1) {
// // // // // //           const innerExpr = expr.substring(openParenIndex + 1, i);
          
// // // // // //           // If the entire expression is parenthesized, evaluate the inner expression
// // // // // //           if (openParenIndex === 0 && i === expr.length - 1) {
// // // // // //             return evaluateLogicalExpression(innerExpr);
// // // // // //           }
          
// // // // // //           // Check for negation before parentheses
// // // // // //           if (openParenIndex > 0 && expr[openParenIndex - 1] === '¬') {
// // // // // //             const negationIndex = openParenIndex - 1;
// // // // // //             const beforeNegation = expr.substring(0, negationIndex);
// // // // // //             const afterParenthesis = expr.substring(i + 1);
            
// // // // // //             // Recursively evaluate with the negated subexpression
// // // // // //             const negatedValue = !evaluateLogicalExpression(innerExpr);
// // // // // //             return evaluateLogicalExpression(beforeNegation + (negatedValue ? 'true' : 'false') + afterParenthesis);
// // // // // //           }
          
// // // // // //           // Handle other operators with parentheses
// // // // // //           const evaluatedInner = evaluateLogicalExpression(innerExpr);
// // // // // //           const replacement = evaluatedInner ? 'true' : 'false';
// // // // // //           return evaluateLogicalExpression(expr.substring(0, openParenIndex) + replacement + expr.substring(i + 1));
// // // // // //         }
// // // // // //       }
// // // // // //     }
    
// // // // // //     // Check for NOT operator
// // // // // //     if (expr.startsWith('¬')) {
// // // // // //       return !evaluateLogicalExpression(expr.substring(1));
// // // // // //     }
    
// // // // // //     // Check for binary operators in order of precedence
    
// // // // // //     // 1. Handle biconditional (↔)
// // // // // //     const biconditionalIndex = findOperatorOutsideParentheses(expr, '↔');
// // // // // //     if (biconditionalIndex !== -1) {
// // // // // //       const leftExpr = expr.substring(0, biconditionalIndex);
// // // // // //       const rightExpr = expr.substring(biconditionalIndex + 1);
      
// // // // // //       const leftValue = evaluateLogicalExpression(leftExpr);
// // // // // //       const rightValue = evaluateLogicalExpression(rightExpr);
      
// // // // // //       return leftValue === rightValue;
// // // // // //     }
    
// // // // // //     // 2. Handle implication (→)
// // // // // //     const implicationIndex = findOperatorOutsideParentheses(expr, '→');
// // // // // //     if (implicationIndex !== -1) {
// // // // // //       const leftExpr = expr.substring(0, implicationIndex);
// // // // // //       const rightExpr = expr.substring(implicationIndex + 1);
      
// // // // // //       const leftValue = evaluateLogicalExpression(leftExpr);
// // // // // //       const rightValue = evaluateLogicalExpression(rightExpr);
      
// // // // // //       return !leftValue || rightValue;
// // // // // //     }
    
// // // // // //     // 3. Handle XOR (⊕)
// // // // // //     const xorIndex = findOperatorOutsideParentheses(expr, '⊕');
// // // // // //     if (xorIndex !== -1) {
// // // // // //       const leftExpr = expr.substring(0, xorIndex);
// // // // // //       const rightExpr = expr.substring(xorIndex + 1);
      
// // // // // //       const leftValue = evaluateLogicalExpression(leftExpr);
// // // // // //       const rightValue = evaluateLogicalExpression(rightExpr);
      
// // // // // //       return leftValue !== rightValue;
// // // // // //     }
    
// // // // // //     // 4. Handle OR (∨)
// // // // // //     const orIndex = findOperatorOutsideParentheses(expr, '∨');
// // // // // //     if (orIndex !== -1) {
// // // // // //       const leftExpr = expr.substring(0, orIndex);
// // // // // //       const rightExpr = expr.substring(orIndex + 1);
      
// // // // // //       const leftValue = evaluateLogicalExpression(leftExpr);
// // // // // //       const rightValue = evaluateLogicalExpression(rightExpr);
      
// // // // // //       return leftValue || rightValue;
// // // // // //     }
    
// // // // // //     // 5. Handle AND (∧)
// // // // // //     const andIndex = findOperatorOutsideParentheses(expr, '∧');
// // // // // //     if (andIndex !== -1) {
// // // // // //       const leftExpr = expr.substring(0, andIndex);
// // // // // //       const rightExpr = expr.substring(andIndex + 1);
      
// // // // // //       const leftValue = evaluateLogicalExpression(leftExpr);
// // // // // //       const rightValue = evaluateLogicalExpression(rightExpr);
      
// // // // // //       return leftValue && rightValue;
// // // // // //     }
    
// // // // // //     // If we reach here, there might be an issue with the expression
// // // // // //     throw new Error(`Unable to evaluate: ${expr}`);
// // // // // //   };
  
// // // // // //   // Helper function to find an operator outside of parentheses
// // // // // //   const findOperatorOutsideParentheses = (expr, operator) => {
// // // // // //     let parenthesisLevel = 0;
    
// // // // // //     for (let i = 0; i < expr.length; i++) {
// // // // // //       if (expr[i] === '(') {
// // // // // //         parenthesisLevel++;
// // // // // //       } else if (expr[i] === ')') {
// // // // // //         parenthesisLevel--;
// // // // // //       } else if (parenthesisLevel === 0 && expr[i] === operator) {
// // // // // //         return i;
// // // // // //       }
// // // // // //     }
    
// // // // // //     return -1;
// // // // // //   };

// // // // // //   // Verify logical equivalence by checking all possible assignments
// // // // // //   const verifyEquivalence = () => {
// // // // // //     if (!expression1 || !expression2) {
// // // // // //       setError('Please enter both expressions');
// // // // // //       return;
// // // // // //     }
    
// // // // // //     try {
// // // // // //       setError('');
      
// // // // // //       // Extract variables
// // // // // //       const variables = extractVariables(expression1, expression2);
      
// // // // // //       if (variables.length > 5) {
// // // // // //         setError('Maximum 5 variables allowed for performance');
// // // // // //         return;
// // // // // //       }
      
// // // // // //       // Generate all possible assignments
// // // // // //       const assignments = generateTruthAssignments(variables);
      
// // // // // //       // Evaluate both expressions for each assignment
// // // // // //       const tableRows = assignments.map(assignment => {
// // // // // //         try {
// // // // // //           const result1 = evaluateExpression(expression1, assignment);
// // // // // //           const result2 = evaluateExpression(expression2, assignment);
          
// // // // // //           return {
// // // // // //             assignment,
// // // // // //             result1,
// // // // // //             result2,
// // // // // //             equivalent: result1 === result2
// // // // // //           };
// // // // // //         } catch (error) {
// // // // // //           throw new Error(`Error evaluating expressions: ${error.message}`);
// // // // // //         }
// // // // // //       });
      
// // // // // //       setTruthTable(tableRows);
      
// // // // // //       // Expressions are equivalent if they have the same values for all assignments
// // // // // //       const areEquivalent = tableRows.every(row => row.equivalent);
// // // // // //       setResult(areEquivalent);
      
// // // // // //       // Show truth table
// // // // // //       setShowTruthTable(true);
// // // // // //     } catch (error) {
// // // // // //       setError(error.message);
// // // // // //       setResult(null);
// // // // // //       setTruthTable([]);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="verifier-container">
// // // // // //       <h1>Logical Equivalence Verifier</h1>
      
// // // // // //       <div className="expression-editor">
// // // // // //         <div className="expression-boxes">
// // // // // //           <div 
// // // // // //             className={`expression-box ${activeExpressionId === 1 ? 'active' : ''}`}
// // // // // //             onClick={() => setActiveExpressionId(1)}
// // // // // //           >
// // // // // //             <label>Expression 1:</label>
// // // // // //             <div className="expression-display">{expression1 || 'Click to edit'}</div>
// // // // // //           </div>
          
// // // // // //           <div 
// // // // // //             className={`expression-box ${activeExpressionId === 2 ? 'active' : ''}`}
// // // // // //             onClick={() => setActiveExpressionId(2)}
// // // // // //           >
// // // // // //             <label>Expression 2:</label>
// // // // // //             <div className="expression-display">{expression2 || 'Click to edit'}</div>
// // // // // //           </div>
// // // // // //         </div>
        
// // // // // //         <div className="input-buttons">
// // // // // //           <div className="button-group">
// // // // // //             <h4>Variables</h4>
// // // // // //             <div className="buttons">
// // // // // //               <button onClick={() => addSymbol('p')}>p</button>
// // // // // //               <button onClick={() => addSymbol('q')}>q</button>
// // // // // //               <button onClick={() => addSymbol('r')}>r</button>
// // // // // //               <button onClick={() => addSymbol('s')}>s</button>
// // // // // //               <button onClick={() => addSymbol('t')}>t</button>
// // // // // //             </div>
// // // // // //           </div>
          
// // // // // //           <div className="button-group">
// // // // // //             <h4>Operators</h4>
// // // // // //             <div className="buttons">
// // // // // //               <button onClick={() => addSymbol('∧')}>AND (∧)</button>
// // // // // //               <button onClick={() => addSymbol('∨')}>OR (∨)</button>
// // // // // //               <button onClick={() => addSymbol('¬')}>NOT (¬)</button>
// // // // // //               <button onClick={() => addSymbol('→')}>IMPLIES (→)</button>
// // // // // //               <button onClick={() => addSymbol('↔')}>IFF (↔)</button>
// // // // // //               <button onClick={() => addSymbol('⊕')}>XOR (⊕)</button>
// // // // // //             </div>
// // // // // //           </div>
          
// // // // // //           <div className="button-group">
// // // // // //             <h4>Parentheses</h4>
// // // // // //             <div className="buttons">
// // // // // //               <button onClick={() => addSymbol('(')}>( </button>
// // // // // //               <button onClick={() => addSymbol(')')}>)</button>
// // // // // //             </div>
// // // // // //           </div>
          
// // // // // //           <div className="button-group">
// // // // // //             <h4>Edit</h4>
// // // // // //             <div className="buttons">
// // // // // //               <button onClick={backspace}>Backspace</button>
// // // // // //               <button onClick={clearExpression}>Clear</button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
        
// // // // // //         <div className="action-buttons">
// // // // // //           <button onClick={verifyEquivalence} className="verify-button">Verify Equivalence</button>
// // // // // //         </div>
// // // // // //       </div>
      
// // // // // //       {error && <div className="error">{error}</div>}
      
// // // // // //       {result !== null && (
// // // // // //         <div className={`result ${result ? 'equivalent' : 'not-equivalent'}`}>
// // // // // //           <h2>
// // // // // //             {result 
// // // // // //               ? "The expressions are logically equivalent" 
// // // // // //               : "The expressions are NOT logically equivalent"}
// // // // // //           </h2>
// // // // // //         </div>
// // // // // //       )}
      
// // // // // //       {showTruthTable && truthTable.length > 0 && (
// // // // // //         <div className="truth-table">
// // // // // //           <h2>Truth Table</h2>
// // // // // //           <button onClick={() => setShowTruthTable(!showTruthTable)} className="toggle-button">
// // // // // //             {showTruthTable ? "Hide Truth Table" : "Show Truth Table"}
// // // // // //           </button>
          
// // // // // //           <table>
// // // // // //             <thead>
// // // // // //               <tr>
// // // // // //                 {Object.keys(truthTable[0].assignment).map(variable => (
// // // // // //                   <th key={variable}>{variable}</th>
// // // // // //                 ))}
// // // // // //                 <th>Expression 1</th>
// // // // // //                 <th>Expression 2</th>
// // // // // //                 <th>Equivalent?</th>
// // // // // //               </tr>
// // // // // //             </thead>
// // // // // //             <tbody>
// // // // // //               {truthTable.map((row, index) => (
// // // // // //                 <tr key={index}>
// // // // // //                   {Object.entries(row.assignment).map(([variable, value]) => (
// // // // // //                     <td key={variable}>{value ? 'T' : 'F'}</td>
// // // // // //                   ))}
// // // // // //                   <td>{row.result1 ? 'T' : 'F'}</td>
// // // // // //                   <td>{row.result2 ? 'T' : 'F'}</td>
// // // // // //                   <td>{row.equivalent ? '✓' : '✗'}</td>
// // // // // //                 </tr>
// // // // // //               ))}
// // // // // //             </tbody>
// // // // // //           </table>
// // // // // //         </div>
// // // // // //       )}
      
// // // // // //       <div className="help-section">
// // // // // //         <h3>Supported Operators</h3>
// // // // // //         <ul>
// // // // // //           <li><strong>AND:</strong> ∧, &amp;, &amp;&amp;, *</li>
// // // // // //           <li><strong>OR:</strong> ∨, |, ||</li>
// // // // // //           <li><strong>NOT:</strong> ¬, ~, !</li>
// // // // // //           <li><strong>IMPLIES:</strong> →, -&gt;, =&gt;</li>
// // // // // //           <li><strong>BICONDITIONAL:</strong> ↔, &lt;-&gt;, &lt;=&gt;, ≡</li>
// // // // // //           <li><strong>XOR:</strong> ⊕, !=, &lt;&gt;</li>
// // // // // //         </ul>
// // // // // //         <p>Example: p ∧ q → r is equivalent to ¬(p ∧ q) ∨ r</p>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default LogicalEquivalenceVerifier;


// // // // // import { useState } from 'react';
// // // // // import './EquivalenceChecker.css';

// // // // // const LogicalEquivalenceVerifier = () => {
// // // // //   const [expression1, setExpression1] = useState('');
// // // // //   const [expression2, setExpression2] = useState('');
// // // // //   const [result, setResult] = useState(null);
// // // // //   const [error, setError] = useState('');
// // // // //   const [truthTable, setTruthTable] = useState([]);
// // // // //   const [showTruthTable, setShowTruthTable] = useState(false);
// // // // //   const [activeExpressionId, setActiveExpressionId] = useState(1);

// // // // //   // Add symbol to active expression
// // // // //   const addSymbol = (symbol) => {
// // // // //     if (activeExpressionId === 1) {
// // // // //       setExpression1(expression1 + symbol);
// // // // //     } else {
// // // // //       setExpression2(expression2 + symbol);
// // // // //     }
// // // // //   };

// // // // //   // Clear active expression
// // // // //   const clearExpression = () => {
// // // // //     if (activeExpressionId === 1) {
// // // // //       setExpression1('');
// // // // //     } else {
// // // // //       setExpression2('');
// // // // //     }
// // // // //   };

// // // // //   // Backspace (delete last character)
// // // // //   const backspace = () => {
// // // // //     if (activeExpressionId === 1) {
// // // // //       setExpression1(expression1.slice(0, -1));
// // // // //     } else {
// // // // //       setExpression2(expression2.slice(0, -1));
// // // // //     }
// // // // //   };

// // // // //   // Extract unique variables from both expressions
// // // // //   const extractVariables = (expr1, expr2) => {
// // // // //     const combined = expr1 + expr2;
// // // // //     // Match all single letters that represent variables
// // // // //     const varRegex = /[a-z]/g;
// // // // //     const matches = combined.toLowerCase().match(varRegex) || [];
// // // // //     return [...new Set(matches)].sort();
// // // // //   };

// // // // //   // Generate all possible truth assignments for variables
// // // // //   const generateTruthAssignments = (variables) => {
// // // // //     const assignments = [];
// // // // //     const totalCombinations = Math.pow(2, variables.length);
    
// // // // //     for (let i = 0; i < totalCombinations; i++) {
// // // // //       const assignment = {};
      
// // // // //       variables.forEach((variable, index) => {
// // // // //         // Create a bit mask for each position
// // // // //         const bitMask = 1 << (variables.length - index - 1);
// // // // //         // Check if this bit is set in i
// // // // //         assignment[variable] = (i & bitMask) !== 0;
// // // // //       });
      
// // // // //       assignments.push(assignment);
// // // // //     }
    
// // // // //     return assignments;
// // // // //   };

// // // // //   // Evaluate logical expression using JavaScript's eval
// // // // //   const evaluateExpression = (expression, row) => {
// // // // //     // Clean the expression
// // // // //     let evalExpression = expression.trim();
    
// // // // //     // Replace variables with their boolean values
// // // // //     Object.keys(row).forEach((variable) => {
// // // // //       evalExpression = evalExpression.replace(new RegExp(`\\b${variable}\\b`, 'g'), row[variable]);
// // // // //     });
    
// // // // //     // Replace logical operators with JavaScript operators
// // // // //     evalExpression = evalExpression.replace(/¬/g, '!');
// // // // //     evalExpression = evalExpression.replace(/~|!/g, '!');
// // // // //     evalExpression = evalExpression.replace(/∧|&|&&|\*/g, '&&');
// // // // //     evalExpression = evalExpression.replace(/∨|\||\|\|/g, '||');
// // // // //     evalExpression = evalExpression.replace(/⊕|!=|<>/g, '!==');
// // // // //     evalExpression = evalExpression.replace(/→|->|=>/g, '<='); // p→q is equivalent to !p || q, which is p <= q in JS
// // // // //     evalExpression = evalExpression.replace(/↔|<->|<=>|≡/g, '===');
    
// // // // //     // Handle constants
// // // // //     evalExpression = evalExpression.replace(/\bT\b|\bTRUE\b|\btrue\b/gi, 'true');
// // // // //     evalExpression = evalExpression.replace(/\bF\b|\bFALSE\b|\bfalse\b/gi, 'false');
    
// // // // //     try {
// // // // //       return eval(evalExpression);
// // // // //     } catch (error) {
// // // // //       throw new Error(`Error evaluating expression: ${expression}`);
// // // // //     }
// // // // //   };

// // // // //   // Verify logical equivalence by checking all possible assignments
// // // // //   const verifyEquivalence = () => {
// // // // //     if (!expression1 || !expression2) {
// // // // //       setError('Please enter both expressions');
// // // // //       return;
// // // // //     }
    
// // // // //     try {
// // // // //       setError('');
      
// // // // //       // Extract variables
// // // // //       const variables = extractVariables(expression1, expression2);
      
// // // // //       if (variables.length > 5) {
// // // // //         setError('Maximum 5 variables allowed for performance');
// // // // //         return;
// // // // //       }
      
// // // // //       // Generate all possible assignments
// // // // //       const assignments = generateTruthAssignments(variables);
      
// // // // //       // Evaluate both expressions for each assignment
// // // // //       const tableRows = assignments.map(assignment => {
// // // // //         try {
// // // // //           const result1 = evaluateExpression(expression1, assignment);
// // // // //           const result2 = evaluateExpression(expression2, assignment);
          
// // // // //           return {
// // // // //             assignment,
// // // // //             result1,
// // // // //             result2,
// // // // //             equivalent: result1 === result2
// // // // //           };
// // // // //         } catch (error) {
// // // // //           throw new Error(`Error evaluating expressions: ${error.message}`);
// // // // //         }
// // // // //       });
      
// // // // //       setTruthTable(tableRows);
      
// // // // //       // Expressions are equivalent if they have the same values for all assignments
// // // // //       const areEquivalent = tableRows.every(row => row.equivalent);
// // // // //       setResult(areEquivalent);
      
// // // // //       // Show truth table
// // // // //       setShowTruthTable(true);
// // // // //     } catch (error) {
// // // // //       setError(error.message);
// // // // //       setResult(null);
// // // // //       setTruthTable([]);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="verifier-container">
// // // // //       <h1>Logical Equivalence Verifier</h1>
      
// // // // //       <div className="expression-editor">
// // // // //         <div className="expression-boxes">
// // // // //           <div 
// // // // //             className={`expression-box ${activeExpressionId === 1 ? 'active' : ''}`}
// // // // //             onClick={() => setActiveExpressionId(1)}
// // // // //           >
// // // // //             <label>Expression 1:</label>
// // // // //             <div className="expression-display">{expression1 || 'Click to edit'}</div>
// // // // //           </div>
          
// // // // //           <div 
// // // // //             className={`expression-box ${activeExpressionId === 2 ? 'active' : ''}`}
// // // // //             onClick={() => setActiveExpressionId(2)}
// // // // //           >
// // // // //             <label>Expression 2:</label>
// // // // //             <div className="expression-display">{expression2 || 'Click to edit'}</div>
// // // // //           </div>
// // // // //         </div>
        
// // // // //         <div className="input-buttons">
// // // // //           <div className="button-group">
// // // // //             <h4>Variables</h4>
// // // // //             <div className="buttons">
// // // // //               <button onClick={() => addSymbol('p')}>p</button>
// // // // //               <button onClick={() => addSymbol('q')}>q</button>
// // // // //               <button onClick={() => addSymbol('r')}>r</button>
// // // // //               <button onClick={() => addSymbol('s')}>s</button>
// // // // //               <button onClick={() => addSymbol('t')}>t</button>
// // // // //             </div>
// // // // //           </div>
          
// // // // //           <div className="button-group">
// // // // //             <h4>Operators</h4>
// // // // //             <div className="buttons">
// // // // //               <button onClick={() => addSymbol('∧')}>AND (∧)</button>
// // // // //               <button onClick={() => addSymbol('∨')}>OR (∨)</button>
// // // // //               <button onClick={() => addSymbol('¬')}>NOT (¬)</button>
// // // // //               <button onClick={() => addSymbol('→')}>IMPLIES (→)</button>
// // // // //               <button onClick={() => addSymbol('↔')}>IFF (↔)</button>
// // // // //               <button onClick={() => addSymbol('⊕')}>XOR (⊕)</button>
// // // // //             </div>
// // // // //           </div>
          
// // // // //           <div className="button-group">
// // // // //             <h4>Parentheses</h4>
// // // // //             <div className="buttons">
// // // // //               <button onClick={() => addSymbol('(')}>( </button>
// // // // //               <button onClick={() => addSymbol(')')}>)</button>
// // // // //             </div>
// // // // //           </div>
          
// // // // //           <div className="button-group">
// // // // //             <h4>Edit</h4>
// // // // //             <div className="buttons">
// // // // //               <button onClick={backspace}>Backspace</button>
// // // // //               <button onClick={clearExpression}>Clear</button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
        
// // // // //         <div className="action-buttons">
// // // // //           <button onClick={verifyEquivalence} className="verify-button">Verify Equivalence</button>
// // // // //         </div>
// // // // //       </div>
      
// // // // //       {error && <div className="error">{error}</div>}
      
// // // // //       {result !== null && (
// // // // //         <div className={`result ${result ? 'equivalent' : 'not-equivalent'}`}>
// // // // //           <h2>
// // // // //             {result 
// // // // //               ? "The expressions are logically equivalent" 
// // // // //               : "The expressions are NOT logically equivalent"}
// // // // //           </h2>
// // // // //         </div>
// // // // //       )}
      
// // // // //       {showTruthTable && truthTable.length > 0 && (
// // // // //         <div className="truth-table">
// // // // //           <h2>Truth Table</h2>
// // // // //           <button onClick={() => setShowTruthTable(!showTruthTable)} className="toggle-button">
// // // // //             {showTruthTable ? "Hide Truth Table" : "Show Truth Table"}
// // // // //           </button>
          
// // // // //           <table>
// // // // //             <thead>
// // // // //               <tr>
// // // // //                 {Object.keys(truthTable[0].assignment).map(variable => (
// // // // //                   <th key={variable}>{variable}</th>
// // // // //                 ))}
// // // // //                 <th>Expression 1</th>
// // // // //                 <th>Expression 2</th>
// // // // //                 <th>Equivalent?</th>
// // // // //               </tr>
// // // // //             </thead>
// // // // //             <tbody>
// // // // //               {truthTable.map((row, index) => (
// // // // //                 <tr key={index}>
// // // // //                   {Object.entries(row.assignment).map(([variable, value]) => (
// // // // //                     <td key={variable}>{value ? 'T' : 'F'}</td>
// // // // //                   ))}
// // // // //                   <td>{row.result1 ? 'T' : 'F'}</td>
// // // // //                   <td>{row.result2 ? 'T' : 'F'}</td>
// // // // //                   <td>{row.equivalent ? '✓' : '✗'}</td>
// // // // //                 </tr>
// // // // //               ))}
// // // // //             </tbody>
// // // // //           </table>
// // // // //         </div>
// // // // //       )}
      
// // // // //       <div className="help-section">
// // // // //         <h3>Supported Operators</h3>
// // // // //         <ul>
// // // // //           <li><strong>AND:</strong> ∧, &amp;, &amp;&amp;, *</li>
// // // // //           <li><strong>OR:</strong> ∨, |, ||</li>
// // // // //           <li><strong>NOT:</strong> ¬, ~, !</li>
// // // // //           <li><strong>IMPLIES:</strong> →, -&gt;, =&gt;</li>
// // // // //           <li><strong>BICONDITIONAL:</strong> ↔, &lt;-&gt;, &lt;=&gt;, ≡</li>
// // // // //           <li><strong>XOR:</strong> ⊕, !=, &lt;&gt;</li>
// // // // //         </ul>
// // // // //         <p>Example: p ∧ q → r is equivalent to ¬(p ∧ q) ∨ r</p>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default LogicalEquivalenceVerifier;


// // // // import { useState } from 'react';
// // // // import './EquivalenceChecker.css';

// // // // const LogicalEquivalenceVerifier = () => {
// // // //   const [expression1, setExpression1] = useState('');
// // // //   const [expression2, setExpression2] = useState('');
// // // //   const [result, setResult] = useState(null);
// // // //   const [error, setError] = useState('');
// // // //   const [truthTable, setTruthTable] = useState([]);
// // // //   const [showTruthTable, setShowTruthTable] = useState(false);
// // // //   const [activeExpressionId, setActiveExpressionId] = useState(1);

// // // //   // Add symbol to active expression
// // // //   const addSymbol = (symbol) => {
// // // //     if (activeExpressionId === 1) {
// // // //       setExpression1(expression1 + symbol);
// // // //     } else {
// // // //       setExpression2(expression2 + symbol);
// // // //     }
// // // //   };

// // // //   // Clear active expression
// // // //   const clearExpression = () => {
// // // //     if (activeExpressionId === 1) {
// // // //       setExpression1('');
// // // //     } else {
// // // //       setExpression2('');
// // // //     }
// // // //   };

// // // //   // Backspace (delete last character)
// // // //   const backspace = () => {
// // // //     if (activeExpressionId === 1) {
// // // //       setExpression1(expression1.slice(0, -1));
// // // //     } else {
// // // //       setExpression2(expression2.slice(0, -1));
// // // //     }
// // // //   };

// // // //   // Extract unique variables from both expressions
// // // //   const extractVariables = (expr1, expr2) => {
// // // //     const combined = expr1 + expr2;
// // // //     // Match all single letters that represent variables
// // // //     const varRegex = /[a-z]/g;
// // // //     const matches = combined.toLowerCase().match(varRegex) || [];
// // // //     return [...new Set(matches)].sort();
// // // //   };

// // // //   // Generate all possible truth assignments for variables
// // // //   const generateTruthAssignments = (variables) => {
// // // //     const assignments = [];
// // // //     const totalCombinations = Math.pow(2, variables.length);
    
// // // //     for (let i = 0; i < totalCombinations; i++) {
// // // //       const assignment = {};
      
// // // //       variables.forEach((variable, index) => {
// // // //         // Create a bit mask for each position
// // // //         const bitMask = 1 << (variables.length - index - 1);
// // // //         // Check if this bit is set in i
// // // //         assignment[variable] = (i & bitMask) !== 0;
// // // //       });
      
// // // //       assignments.push(assignment);
// // // //     }
    
// // // //     return assignments;
// // // //   };

// // // //   // Evaluate logical expression using JavaScript's eval
// // // //   const evaluateExpression = (expression, row) => {
// // // //     // Clean the expression
// // // //     let evalExpression = expression.trim();
    
// // // //     // Replace variables with their boolean values
// // // //     Object.keys(row).forEach((variable) => {
// // // //       evalExpression = evalExpression.replace(new RegExp(`\\b${variable}\\b`, 'g'), row[variable]);
// // // //     });
    
// // // //     // Replace logical operators with JavaScript operators
// // // //     evalExpression = evalExpression.replace(/¬/g, '!');
// // // //     evalExpression = evalExpression.replace(/~|!/g, '!');
// // // //     evalExpression = evalExpression.replace(/∧|&|&&|\*/g, '&&');
// // // //     evalExpression = evalExpression.replace(/∨|\||\|\|/g, '||');
// // // //     evalExpression = evalExpression.replace(/⊕|!=|<>/g, '!==');
// // // //     evalExpression = evalExpression.replace(/→|->|=>/g, '<='); // p→q is equivalent to !p || q, which is p <= q in JS
// // // //     evalExpression = evalExpression.replace(/↔|<->|<=>|≡/g, '===');
    
// // // //     // Handle constants
// // // //     evalExpression = evalExpression.replace(/\bT\b|\bTRUE\b|\btrue\b/gi, 'true');
// // // //     evalExpression = evalExpression.replace(/\bF\b|\bFALSE\b|\bfalse\b/gi, 'false');
    
// // // //     try {
// // // //       return eval(evalExpression);
// // // //     } catch (error) {
// // // //       throw new Error(`Error evaluating expression: ${expression}`);
// // // //     }
// // // //   };

// // // //   // Verify logical equivalence by checking all possible assignments
// // // //   const verifyEquivalence = () => {
// // // //     if (!expression1 || !expression2) {
// // // //       setError('Please enter both expressions');
// // // //       return;
// // // //     }
    
// // // //     try {
// // // //       setError('');
      
// // // //       // Extract variables
// // // //       const variables = extractVariables(expression1, expression2);
      
// // // //       if (variables.length > 5) {
// // // //         setError('Maximum 5 variables allowed for performance');
// // // //         return;
// // // //       }
      
// // // //       // Generate all possible assignments
// // // //       const assignments = generateTruthAssignments(variables);
      
// // // //       // Evaluate both expressions for each assignment
// // // //       const tableRows = assignments.map(assignment => {
// // // //         try {
// // // //           const result1 = evaluateExpression(expression1, assignment);
// // // //           const result2 = evaluateExpression(expression2, assignment);
          
// // // //           return {
// // // //             assignment,
// // // //             result1,
// // // //             result2,
// // // //             equivalent: result1 === result2
// // // //           };
// // // //         } catch (error) {
// // // //           throw new Error(`Error evaluating expressions: ${error.message}`);
// // // //         }
// // // //       });
      
// // // //       setTruthTable(tableRows);
      
// // // //       // Expressions are equivalent if they have the same values for all assignments
// // // //       const areEquivalent = tableRows.every(row => row.equivalent);
// // // //       setResult(areEquivalent);
      
// // // //       // Show truth table
// // // //       setShowTruthTable(true);
// // // //     } catch (error) {
// // // //       setError(error.message);
// // // //       setResult(null);
// // // //       setTruthTable([]);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="verifier-container">
// // // //       <h1>Logical Equivalence Verifier</h1>
      
// // // //       <div className="expression-editor">
// // // //         <div className="expression-boxes">
// // // //           <div 
// // // //             className={`expression-box ${activeExpressionId === 1 ? 'active' : ''}`}
// // // //             onClick={() => setActiveExpressionId(1)}
// // // //           >
// // // //             <label>Expression 1:</label>
// // // //             <input
// // // //               type="text"
// // // //               className="expression-input"
// // // //               value={expression1}
// // // //               onChange={(e) => setExpression1(e.target.value)}
// // // //               placeholder="Type or paste expression here"
// // // //               onClick={(e) => {
// // // //                 e.stopPropagation();
// // // //                 setActiveExpressionId(1);
// // // //               }}
// // // //             />
// // // //           </div>
          
// // // //           <div 
// // // //             className={`expression-box ${activeExpressionId === 2 ? 'active' : ''}`}
// // // //             onClick={() => setActiveExpressionId(2)}
// // // //           >
// // // //             <label>Expression 2:</label>
// // // //             <input
// // // //               type="text"
// // // //               className="expression-input"
// // // //               value={expression2}
// // // //               onChange={(e) => setExpression2(e.target.value)}
// // // //               placeholder="Type or paste expression here"
// // // //               onClick={(e) => {
// // // //                 e.stopPropagation();
// // // //                 setActiveExpressionId(2);
// // // //               }}
// // // //             />
// // // //           </div>
// // // //         </div>
        
// // // //         <div className="input-buttons">
// // // //           <div className="button-group">
// // // //             <h4>Variables</h4>
// // // //             <div className="buttons">
// // // //               <button onClick={() => addSymbol('p')}>p</button>
// // // //               <button onClick={() => addSymbol('q')}>q</button>
// // // //               <button onClick={() => addSymbol('r')}>r</button>
// // // //               <button onClick={() => addSymbol('s')}>s</button>
// // // //               <button onClick={() => addSymbol('t')}>t</button>
// // // //             </div>
// // // //           </div>
          
// // // //           <div className="button-group">
// // // //             <h4>Operators</h4>
// // // //             <div className="buttons">
// // // //               <button onClick={() => addSymbol('∧')}>AND (∧)</button>
// // // //               <button onClick={() => addSymbol('∨')}>OR (∨)</button>
// // // //               <button onClick={() => addSymbol('¬')}>NOT (¬)</button>
// // // //               <button onClick={() => addSymbol('→')}>IMPLIES (→)</button>
// // // //               <button onClick={() => addSymbol('↔')}>IFF (↔)</button>
// // // //               <button onClick={() => addSymbol('⊕')}>XOR (⊕)</button>
// // // //             </div>
// // // //           </div>
          
// // // //           <div className="button-group">
// // // //             <h4>Parentheses</h4>
// // // //             <div className="buttons">
// // // //               <button onClick={() => addSymbol('(')}>( </button>
// // // //               <button onClick={() => addSymbol(')')}>)</button>
// // // //             </div>
// // // //           </div>
          
// // // //           <div className="button-group">
// // // //             <h4>Edit</h4>
// // // //             <div className="buttons">
// // // //               <button onClick={backspace}>Backspace</button>
// // // //               <button onClick={clearExpression}>Clear</button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
        
// // // //         <div className="action-buttons">
// // // //           <button onClick={verifyEquivalence} className="verify-button">Verify Equivalence</button>
// // // //         </div>
// // // //       </div>
      
// // // //       {error && <div className="error">{error}</div>}
      
// // // //       {result !== null && (
// // // //         <div className={`result ${result ? 'equivalent' : 'not-equivalent'}`}>
// // // //           <h2>
// // // //             {result 
// // // //               ? "The expressions are logically equivalent" 
// // // //               : "The expressions are NOT logically equivalent"}
// // // //           </h2>
// // // //         </div>
// // // //       )}
      
// // // //       {showTruthTable && truthTable.length > 0 && (
// // // //         <div className="truth-table">
// // // //           <h2>Truth Table</h2>
// // // //           <button onClick={() => setShowTruthTable(!showTruthTable)} className="toggle-button">
// // // //             {showTruthTable ? "Hide Truth Table" : "Show Truth Table"}
// // // //           </button>
          
// // // //           <table>
// // // //             <thead>
// // // //               <tr>
// // // //                 {Object.keys(truthTable[0].assignment).map(variable => (
// // // //                   <th key={variable}>{variable}</th>
// // // //                 ))}
// // // //                 <th>Expression 1</th>
// // // //                 <th>Expression 2</th>
// // // //                 <th>Equivalent?</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {truthTable.map((row, index) => (
// // // //                 <tr key={index}>
// // // //                   {Object.entries(row.assignment).map(([variable, value]) => (
// // // //                     <td key={variable}>{value ? 'T' : 'F'}</td>
// // // //                   ))}
// // // //                   <td>{row.result1 ? 'T' : 'F'}</td>
// // // //                   <td>{row.result2 ? 'T' : 'F'}</td>
// // // //                   <td>{row.equivalent ? '✓' : '✗'}</td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>
// // // //       )}
      
// // // //       <div className="help-section">
// // // //         <h3>Supported Operators</h3>
// // // //         <ul>
// // // //           <li><strong>AND:</strong> ∧, &amp;, &amp;&amp;, *</li>
// // // //           <li><strong>OR:</strong> ∨, |, ||</li>
// // // //           <li><strong>NOT:</strong> ¬, ~, !</li>
// // // //           <li><strong>IMPLIES:</strong> →, -&gt;, =&gt;</li>
// // // //           <li><strong>BICONDITIONAL:</strong> ↔, &lt;-&gt;, &lt;=&gt;, ≡</li>
// // // //           <li><strong>XOR:</strong> ⊕, !=, &lt;&gt;</li>
// // // //         </ul>
// // // //         <p>Example: p ∧ q → r is equivalent to ¬(p ∧ q) ∨ r</p>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default LogicalEquivalenceVerifier;

// // // import { useState } from 'react';
// // // import './EquivalenceChecker.css';

// // // const LogicalEquivalenceVerifier = () => {
// // //   const [expression1, setExpression1] = useState('');
// // //   const [expression2, setExpression2] = useState('');
// // //   const [result, setResult] = useState(null);
// // //   const [error, setError] = useState('');
// // //   const [truthTable, setTruthTable] = useState([]);
// // //   const [showTruthTable, setShowTruthTable] = useState(false);
// // //   const [activeExpressionId, setActiveExpressionId] = useState(1);
// // //   const [showHelp, setShowHelp] = useState(false);

// // //   // Add symbol to active expression
// // //   const addSymbol = (symbol) => {
// // //     if (activeExpressionId === 1) {
// // //       setExpression1(expression1 + symbol);
// // //     } else {
// // //       setExpression2(expression2 + symbol);
// // //     }
// // //   };

// // //   // Clear active expression
// // //   const clearExpression = () => {
// // //     if (activeExpressionId === 1) {
// // //       setExpression1('');
// // //     } else {
// // //       setExpression2('');
// // //     }
// // //   };

// // //   // Backspace (delete last character)
// // //   const backspace = () => {
// // //     if (activeExpressionId === 1) {
// // //       setExpression1(expression1.slice(0, -1));
// // //     } else {
// // //       setExpression2(expression2.slice(0, -1));
// // //     }
// // //   };

// // //   // Extract unique variables from both expressions
// // //   const extractVariables = (expr1, expr2) => {
// // //     const combined = expr1 + expr2;
// // //     // Match all single letters that represent variables
// // //     const varRegex = /[a-z]/g;
// // //     const matches = combined.toLowerCase().match(varRegex) || [];
// // //     return [...new Set(matches)].sort();
// // //   };

// // //   // Generate all possible truth assignments for variables
// // //   const generateTruthAssignments = (variables) => {
// // //     const assignments = [];
// // //     const totalCombinations = Math.pow(2, variables.length);
    
// // //     for (let i = 0; i < totalCombinations; i++) {
// // //       const assignment = {};
      
// // //       variables.forEach((variable, index) => {
// // //         // Create a bit mask for each position
// // //         const bitMask = 1 << (variables.length - index - 1);
// // //         // Check if this bit is set in i
// // //         assignment[variable] = (i & bitMask) !== 0;
// // //       });
      
// // //       assignments.push(assignment);
// // //     }
    
// // //     return assignments;
// // //   };

// // //   // Evaluate logical expression using JavaScript's eval
// // //   const evaluateExpression = (expression, row) => {
// // //     // Clean the expression
// // //     let evalExpression = expression.trim();
    
// // //     // Replace variables with their boolean values
// // //     Object.keys(row).forEach((variable) => {
// // //       evalExpression = evalExpression.replace(new RegExp(`\\b${variable}\\b`, 'g'), row[variable]);
// // //     });
    
// // //     // Replace logical operators with JavaScript operators
// // //     evalExpression = evalExpression.replace(/¬/g, '!');
// // //     evalExpression = evalExpression.replace(/~|!/g, '!');
// // //     evalExpression = evalExpression.replace(/∧|&|&&|\*/g, '&&');
// // //     evalExpression = evalExpression.replace(/∨|\||\|\|/g, '||');
// // //     evalExpression = evalExpression.replace(/⊕|!=|<>/g, '!==');
// // //     evalExpression = evalExpression.replace(/→|->|=>/g, '<='); // p→q is equivalent to !p || q, which is p <= q in JS
// // //     evalExpression = evalExpression.replace(/↔|<->|<=>|≡/g, '===');
    
// // //     // Handle constants
// // //     evalExpression = evalExpression.replace(/\bT\b|\bTRUE\b|\btrue\b/gi, 'true');
// // //     evalExpression = evalExpression.replace(/\bF\b|\bFALSE\b|\bfalse\b/gi, 'false');
    
// // //     try {
// // //       return eval(evalExpression);
// // //     } catch (error) {
// // //       throw new Error(`Error evaluating expression: ${expression}`);
// // //     }
// // //   };

// // //   // Verify logical equivalence by checking all possible assignments
// // //   const verifyEquivalence = () => {
// // //     if (!expression1 || !expression2) {
// // //       setError('Please enter both expressions');
// // //       return;
// // //     }
    
// // //     try {
// // //       setError('');
      
// // //       // Extract variables
// // //       const variables = extractVariables(expression1, expression2);
      
// // //       if (variables.length > 5) {
// // //         setError('Maximum 5 variables allowed for performance');
// // //         return;
// // //       }
      
// // //       // Generate all possible assignments
// // //       const assignments = generateTruthAssignments(variables);
      
// // //       // Evaluate both expressions for each assignment
// // //       const tableRows = assignments.map(assignment => {
// // //         try {
// // //           const result1 = evaluateExpression(expression1, assignment);
// // //           const result2 = evaluateExpression(expression2, assignment);
          
// // //           return {
// // //             assignment,
// // //             result1,
// // //             result2,
// // //             equivalent: result1 === result2
// // //           };
// // //         } catch (error) {
// // //           throw new Error(`Error evaluating expressions: ${error.message}`);
// // //         }
// // //       });
      
// // //       setTruthTable(tableRows);
      
// // //       // Expressions are equivalent if they have the same values for all assignments
// // //       const areEquivalent = tableRows.every(row => row.equivalent);
// // //       setResult(areEquivalent);
      
// // //       // Show truth table
// // //       setShowTruthTable(true);
// // //     } catch (error) {
// // //       setError(error.message);
// // //       setResult(null);
// // //       setTruthTable([]);
// // //     }
// // //   };

// // //   return (
// // //     <div className="verifier-container">
// // //       <h1>Logical Equivalence Verifier</h1>
      
// // //       <div className="split-layout">
// // //         <div className="editor-column">
// // //           <div className="expression-editor">
// // //             <div className="expression-boxes">
// // //               <div 
// // //                 className={`expression-box ${activeExpressionId === 1 ? 'active' : ''}`}
// // //                 onClick={() => setActiveExpressionId(1)}
// // //               >
// // //                 <label>Expression 1:</label>
// // //                 <input
// // //                   type="text"
// // //                   className="expression-input"
// // //                   value={expression1}
// // //                   onChange={(e) => setExpression1(e.target.value)}
// // //                   placeholder="Type or paste expression here"
// // //                   onClick={(e) => {
// // //                     e.stopPropagation();
// // //                     setActiveExpressionId(1);
// // //                   }}
// // //                 />
// // //               </div>
              
// // //               <div 
// // //                 className={`expression-box ${activeExpressionId === 2 ? 'active' : ''}`}
// // //                 onClick={() => setActiveExpressionId(2)}
// // //               >
// // //                 <label>Expression 2:</label>
// // //                 <input
// // //                   type="text"
// // //                   className="expression-input"
// // //                   value={expression2}
// // //                   onChange={(e) => setExpression2(e.target.value)}
// // //                   placeholder="Type or paste expression here"
// // //                   onClick={(e) => {
// // //                     e.stopPropagation();
// // //                     setActiveExpressionId(2);
// // //                   }}
// // //                 />
// // //               </div>
// // //             </div>
            
// // //             <div className="input-controls">
// // //               <div className="controls-section">
// // //                 <h4>Variables</h4>
// // //                 <div className="button-grid">
// // //                   <button onClick={() => addSymbol('p')}>p</button>
// // //                   <button onClick={() => addSymbol('q')}>q</button>
// // //                   <button onClick={() => addSymbol('r')}>r</button>
// // //                   <button onClick={() => addSymbol('s')}>s</button>
// // //                   <button onClick={() => addSymbol('t')}>t</button>
// // //                 </div>
// // //               </div>
              
// // //               <div className="controls-section">
// // //                 <h4>Operators</h4>
// // //                 <div className="button-grid">
// // //                   <button onClick={() => addSymbol('∧')}>∧</button>
// // //                   <button onClick={() => addSymbol('∨')}>∨</button>
// // //                   <button onClick={() => addSymbol('¬')}>¬</button>
// // //                   <button onClick={() => addSymbol('→')}>→</button>
// // //                   <button onClick={() => addSymbol('↔')}>↔</button>
// // //                   <button onClick={() => addSymbol('⊕')}>⊕</button>
// // //                 </div>
// // //               </div>
              
// // //               <div className="controls-section">
// // //                 <h4>Edit</h4>
// // //                 <div className="button-grid">
// // //                   <button onClick={() => addSymbol('(')}>(</button>
// // //                   <button onClick={() => addSymbol(')')}>)</button>
// // //                   <button onClick={backspace}>⌫</button>
// // //                   <button onClick={clearExpression}>Clear</button>
// // //                 </div>
// // //               </div>
// // //             </div>
            
// // //             <div className="action-buttons">
// // //               <button onClick={verifyEquivalence} className="verify-button">Verify Equivalence</button>
// // //               <button onClick={() => setShowHelp(!showHelp)} className="help-toggle">
// // //                 {showHelp ? "Hide Help" : "Show Help"}
// // //               </button>
// // //             </div>
            
// // //             {showHelp && (
// // //               <div className="help-panel">
// // //                 <h3>Supported Operators</h3>
// // //                 <table className="operators-table">
// // //                   <tbody>
// // //                     <tr>
// // //                       <td><strong>AND:</strong></td>
// // //                       <td>∧, &amp;, &amp;&amp;, *</td>
// // //                     </tr>
// // //                     <tr>
// // //                       <td><strong>OR:</strong></td>
// // //                       <td>∨, |, ||</td>
// // //                     </tr>
// // //                     <tr>
// // //                       <td><strong>NOT:</strong></td>
// // //                       <td>¬, ~, !</td>
// // //                     </tr>
// // //                     <tr>
// // //                       <td><strong>IMPLIES:</strong></td>
// // //                       <td>→, -&gt;, =&gt;</td>
// // //                     </tr>
// // //                     <tr>
// // //                       <td><strong>BICONDITIONAL:</strong></td>
// // //                       <td>↔, &lt;-&gt;, &lt;=&gt;, ≡</td>
// // //                     </tr>
// // //                     <tr>
// // //                       <td><strong>XOR:</strong></td>
// // //                       <td>⊕, !=, &lt;&gt;</td>
// // //                     </tr>
// // //                   </tbody>
// // //                 </table>
// // //                 <p className="example">Example: p ∧ q → r is equivalent to ¬(p ∧ q) ∨ r</p>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
        
// // //         <div className="results-column">
// // //           {error && <div className="error">{error}</div>}
          
// // //           {result !== null && (
// // //             <div className={`result ${result ? 'equivalent' : 'not-equivalent'}`}>
// // //               <h2>
// // //                 {result 
// // //                   ? "✓ The expressions are logically equivalent" 
// // //                   : "✗ The expressions are NOT logically equivalent"}
// // //               </h2>
// // //             </div>
// // //           )}
          
// // //           {showTruthTable && truthTable.length > 0 && (
// // //             <div className="truth-table-container">
// // //               <h2>Truth Table</h2>
              
// // //               <div className="table-wrapper">
// // //                 <table>
// // //                   <thead>
// // //                     <tr>
// // //                       {Object.keys(truthTable[0].assignment).map(variable => (
// // //                         <th key={variable}>{variable}</th>
// // //                       ))}
// // //                       <th>Expression 1</th>
// // //                       <th>Expression 2</th>
// // //                       <th>Equivalent?</th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody>
// // //                     {truthTable.map((row, index) => (
// // //                       <tr key={index}>
// // //                         {Object.entries(row.assignment).map(([variable, value]) => (
// // //                           <td key={variable}>{value ? 'T' : 'F'}</td>
// // //                         ))}
// // //                         <td>{row.result1 ? 'T' : 'F'}</td>
// // //                         <td>{row.result2 ? 'T' : 'F'}</td>
// // //                         <td>{row.equivalent ? '✓' : '✗'}</td>
// // //                       </tr>
// // //                     ))}
// // //                   </tbody>
// // //                 </table>
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default LogicalEquivalenceVerifier;


// // import { useState } from 'react';
// // import './EquivalenceChecker.css';

// // const LogicalEquivalenceVerifier = () => {
// //   const [expression1, setExpression1] = useState('');
// //   const [expression2, setExpression2] = useState('');
// //   const [result, setResult] = useState(null);
// //   const [error, setError] = useState('');
// //   const [truthTable, setTruthTable] = useState([]);
// //   const [showTruthTable, setShowTruthTable] = useState(false);
// //   const [activeExpressionId, setActiveExpressionId] = useState(1);
// //   const [showHelp, setShowHelp] = useState(false);

// //   // Add symbol to active expression
// //   const addSymbol = (symbol) => {
// //     if (activeExpressionId === 1) {
// //       setExpression1(expression1 + symbol);
// //     } else {
// //       setExpression2(expression2 + symbol);
// //     }
// //   };

// //   // Clear active expression
// //   const clearExpression = () => {
// //     if (activeExpressionId === 1) {
// //       setExpression1('');
// //     } else {
// //       setExpression2('');
// //     }
// //   };

// //   // Backspace (delete last character)
// //   const backspace = () => {
// //     if (activeExpressionId === 1) {
// //       setExpression1(expression1.slice(0, -1));
// //     } else {
// //       setExpression2(expression2.slice(0, -1));
// //     }
// //   };

// //   // Extract unique variables from both expressions
// //   const extractVariables = (expr1, expr2) => {
// //     const combined = expr1 + expr2;
// //     // Match all single letters that represent variables
// //     const varRegex = /[a-z]/g;
// //     const matches = combined.toLowerCase().match(varRegex) || [];
// //     return [...new Set(matches)].sort();
// //   };

// //   // Generate all possible truth assignments for variables
// //   const generateTruthAssignments = (variables) => {
// //     const assignments = [];
// //     const totalCombinations = Math.pow(2, variables.length);
    
// //     for (let i = 0; i < totalCombinations; i++) {
// //       const assignment = {};
      
// //       variables.forEach((variable, index) => {
// //         // Create a bit mask for each position
// //         const bitMask = 1 << (variables.length - index - 1);
// //         // Check if this bit is set in i
// //         assignment[variable] = (i & bitMask) !== 0;
// //       });
      
// //       assignments.push(assignment);
// //     }
    
// //     return assignments;
// //   };

// //   // Evaluate logical expression using JavaScript's eval
// //   const evaluateExpression = (expression, row) => {
// //     // Clean the expression
// //     let evalExpression = expression.trim();
    
// //     // Replace variables with their boolean values
// //     Object.keys(row).forEach((variable) => {
// //       evalExpression = evalExpression.replace(new RegExp(`\\b${variable}\\b`, 'g'), row[variable]);
// //     });
    
// //     // Replace logical operators with JavaScript operators
// //     evalExpression = evalExpression.replace(/¬/g, '!');
// //     evalExpression = evalExpression.replace(/~|!/g, '!');
// //     evalExpression = evalExpression.replace(/∧|&|&&|\*/g, '&&');
// //     evalExpression = evalExpression.replace(/∨|\||\|\|/g, '||');
// //     evalExpression = evalExpression.replace(/⊕|!=|<>/g, '!==');
// //     evalExpression = evalExpression.replace(/→|->|=>/g, '<='); // p→q is equivalent to !p || q, which is p <= q in JS
// //     evalExpression = evalExpression.replace(/↔|<->|<=>|≡/g, '===');
    
// //     // Handle constants
// //     evalExpression = evalExpression.replace(/\bT\b|\bTRUE\b|\btrue\b/gi, 'true');
// //     evalExpression = evalExpression.replace(/\bF\b|\bFALSE\b|\bfalse\b/gi, 'false');
    
// //     try {
// //       return eval(evalExpression);
// //     } catch (error) {
// //       throw new Error(`Error evaluating expression: ${expression}`);
// //     }
// //   };

// //   // Verify logical equivalence by checking all possible assignments
// //   const verifyEquivalence = () => {
// //     if (!expression1 || !expression2) {
// //       setError('Please enter both expressions');
// //       return;
// //     }
    
// //     try {
// //       setError('');
      
// //       // Extract variables
// //       const variables = extractVariables(expression1, expression2);
      
// //       if (variables.length > 5) {
// //         setError('Maximum 5 variables allowed for performance');
// //         return;
// //       }
      
// //       // Generate all possible assignments
// //       const assignments = generateTruthAssignments(variables);
      
// //       // Evaluate both expressions for each assignment
// //       const tableRows = assignments.map(assignment => {
// //         try {
// //           const result1 = evaluateExpression(expression1, assignment);
// //           const result2 = evaluateExpression(expression2, assignment);
          
// //           return {
// //             assignment,
// //             result1,
// //             result2,
// //             equivalent: result1 === result2
// //           };
// //         } catch (error) {
// //           throw new Error(`Error evaluating expressions: ${error.message}`);
// //         }
// //       });
      
// //       setTruthTable(tableRows);
      
// //       // Expressions are equivalent if they have the same values for all assignments
// //       const areEquivalent = tableRows.every(row => row.equivalent);
// //       setResult(areEquivalent);
      
// //       // Show truth table
// //       setShowTruthTable(true);
// //     } catch (error) {
// //       setError(error.message);
// //       setResult(null);
// //       setTruthTable([]);
// //     }
// //   };

// //   return (
// //     <div className="verifier-container">
// //       <h1>Logical Equivalence Verifier</h1>
      
// //       <div className="split-layout">
// //         <div className="editor-column">
// //           <div className="expression-editor">
// //             <div className="expression-boxes">
// //               <div 
// //                 className={`expression-box ${activeExpressionId === 1 ? 'active' : ''}`}
// //                 onClick={() => setActiveExpressionId(1)}
// //               >
// //                 <label>Expression 1:</label>
// //                 <input
// //                   type="text"
// //                   className="expression-input"
// //                   value={expression1}
// //                   onChange={(e) => setExpression1(e.target.value)}
// //                   placeholder="Type or paste expression here"
// //                   onClick={(e) => {
// //                     e.stopPropagation();
// //                     setActiveExpressionId(1);
// //                   }}
// //                 />
// //               </div>
              
// //               <div 
// //                 className={`expression-box ${activeExpressionId === 2 ? 'active' : ''}`}
// //                 onClick={() => setActiveExpressionId(2)}
// //               >
// //                 <label>Expression 2:</label>
// //                 <input
// //                   type="text"
// //                   className="expression-input"
// //                   value={expression2}
// //                   onChange={(e) => setExpression2(e.target.value)}
// //                   placeholder="Type or paste expression here"
// //                   onClick={(e) => {
// //                     e.stopPropagation();
// //                     setActiveExpressionId(2);
// //                   }}
// //                 />
// //               </div>
// //             </div>
            
// //             <div className="input-controls">
// //               <div className="controls-section">
// //                 <h4>Variables</h4>
// //                 <div className="button-grid">
// //                   <button onClick={() => addSymbol('p')} title="Variable p: Commonly used as first propositional variable">p</button>
// //                   <button onClick={() => addSymbol('q')} title="Variable q: Commonly used as second propositional variable">q</button>
// //                   <button onClick={() => addSymbol('r')} title="Variable r: Commonly used as third propositional variable">r</button>
// //                   <button onClick={() => addSymbol('s')} title="Variable s: Commonly used as fourth propositional variable">s</button>
// //                   <button onClick={() => addSymbol('t')} title="Variable t: Commonly used as fifth propositional variable">t</button>
// //                 </div>
// //               </div>
              
// //               <div className="controls-section">
// //                 <h4>Operators</h4>
// //                 <div className="button-grid">
// //                   <button onClick={() => addSymbol('∧')} title="AND (∧): Returns true only when both operands are true">∧</button>
// //                   <button onClick={() => addSymbol('∨')} title="OR (∨): Returns true when at least one operand is true">∨</button>
// //                   <button onClick={() => addSymbol('¬')} title="NOT (¬): Negates the truth value of its operand">¬</button>
// //                   <button onClick={() => addSymbol('→')} title="IMPLIES (→): Only returns false when antecedent is true and consequent is false">→</button>
// //                   <button onClick={() => addSymbol('↔')} title="BICONDITIONAL (↔): Returns true when both operands have the same truth value">↔</button>
// //                   <button onClick={() => addSymbol('⊕')} title="XOR (⊕): Returns true when exactly one operand is true">⊕</button>
// //                 </div>
// //               </div>
              
// //               <div className="controls-section">
// //                 <h4>Edit</h4>
// //                 <div className="button-grid">
// //                   <button onClick={() => addSymbol('(')} title="Open Parenthesis: Groups expressions to control evaluation order">(</button>
// //                   <button onClick={() => addSymbol(')')} title="Close Parenthesis: Completes a grouped expression">)</button>
// //                   <button onClick={backspace} title="Backspace: Deletes the last character">⌫</button>
// //                   <button onClick={clearExpression} title="Clear: Erases the entire active expression">Clear</button>
// //                 </div>
// //               </div>
// //             </div>
            
// //             <div className="action-buttons">
// //               <button 
// //                 onClick={verifyEquivalence} 
// //                 className="verify-button"
// //                 title="Checks if both expressions are logically equivalent for all possible inputs">
// //                 Verify Equivalence
// //               </button>
// //               <button 
// //                 onClick={() => setShowHelp(!showHelp)} 
// //                 className="help-toggle"
// //                 title="Shows or hides the operators reference guide">
// //                 {showHelp ? "Hide Help" : "Show Help"}
// //               </button>
// //             </div>
            
// //             {showHelp && (
// //               <div className="help-panel">
// //                 <h3>Supported Operators</h3>
// //                 <table className="operators-table">
// //                   <tbody>
// //                     <tr>
// //                       <td><strong>AND:</strong></td>
// //                       <td>∧, &amp;, &amp;&amp;, *</td>
// //                     </tr>
// //                     <tr>
// //                       <td><strong>OR:</strong></td>
// //                       <td>∨, |, ||</td>
// //                     </tr>
// //                     <tr>
// //                       <td><strong>NOT:</strong></td>
// //                       <td>¬, ~, !</td>
// //                     </tr>
// //                     <tr>
// //                       <td><strong>IMPLIES:</strong></td>
// //                       <td>→, -&gt;, =&gt;</td>
// //                     </tr>
// //                     <tr>
// //                       <td><strong>BICONDITIONAL:</strong></td>
// //                       <td>↔, &lt;-&gt;, &lt;=&gt;, ≡</td>
// //                     </tr>
// //                     <tr>
// //                       <td><strong>XOR:</strong></td>
// //                       <td>⊕, !=, &lt;&gt;</td>
// //                     </tr>
// //                   </tbody>
// //                 </table>
// //                 <p className="example">Example: p ∧ q → r is equivalent to ¬(p ∧ q) ∨ r</p>
// //               </div>
// //             )}
// //           </div>
// //         </div>
        
// //         <div className="results-column">
// //           {error && <div className="error">{error}</div>}
          
// //           {result !== null && (
// //             <div className={`result ${result ? 'equivalent' : 'not-equivalent'}`}>
// //               <h2>
// //                 {result 
// //                   ? "✓ The expressions are logically equivalent" 
// //                   : "✗ The expressions are NOT logically equivalent"}
// //               </h2>
// //             </div>
// //           )}
          
// //           {showTruthTable && truthTable.length > 0 && (
// //             <div className="truth-table-container">
// //               <h2>Truth Table</h2>
              
// //               <div className="table-wrapper">
// //                 <table>
// //                   <thead>
// //                     <tr>
// //                       {Object.keys(truthTable[0].assignment).map(variable => (
// //                         <th key={variable}>{variable}</th>
// //                       ))}
// //                       <th>Expression 1</th>
// //                       <th>Expression 2</th>
// //                       <th>Equivalent?</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {truthTable.map((row, index) => (
// //                       <tr key={index}>
// //                         {Object.entries(row.assignment).map(([variable, value]) => (
// //                           <td key={variable}>{value ? 'T' : 'F'}</td>
// //                         ))}
// //                         <td>{row.result1 ? 'T' : 'F'}</td>
// //                         <td>{row.result2 ? 'T' : 'F'}</td>
// //                         <td>{row.equivalent ? '✓' : '✗'}</td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LogicalEquivalenceVerifier;


// import { useState } from 'react';
// import './EquivalenceChecker.css';

// const LogicalEquivalenceVerifier = () => {
//   const [expression1, setExpression1] = useState('');
//   const [expression2, setExpression2] = useState('');
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState('');
//   const [truthTable, setTruthTable] = useState([]);
//   const [showTruthTable, setShowTruthTable] = useState(false);
//   const [activeExpressionId, setActiveExpressionId] = useState(1);
//   const [showHelp, setShowHelp] = useState(false);

//   // Add symbol to active expression
//   const addSymbol = (symbol) => {
//     if (activeExpressionId === 1) {
//       setExpression1(expression1 + symbol);
//     } else {
//       setExpression2(expression2 + symbol);
//     }
//   };

//   // Clear active expression
//   const clearExpression = () => {
//     if (activeExpressionId === 1) {
//       setExpression1('');
//     } else {
//       setExpression2('');
//     }
//   };

//   // Backspace (delete last character)
//   const backspace = () => {
//     if (activeExpressionId === 1) {
//       setExpression1(expression1.slice(0, -1));
//     } else {
//       setExpression2(expression2.slice(0, -1));
//     }
//   };

//   // Extract unique variables from both expressions
//   const extractVariables = (expr1, expr2) => {
//     const combined = expr1 + expr2;
//     // Match all single letters that represent variables
//     const varRegex = /[a-z]/g;
//     const matches = combined.toLowerCase().match(varRegex) || [];
//     return [...new Set(matches)].sort();
//   };

//   // Generate all possible truth assignments for variables
//   const generateTruthAssignments = (variables) => {
//     const assignments = [];
//     const totalCombinations = Math.pow(2, variables.length);
    
//     for (let i = 0; i < totalCombinations; i++) {
//       const assignment = {};
      
//       variables.forEach((variable, index) => {
//         // Create a bit mask for each position
//         const bitMask = 1 << (variables.length - index - 1);
//         // Check if this bit is set in i
//         assignment[variable] = (i & bitMask) !== 0;
//       });
      
//       assignments.push(assignment);
//     }
    
//     return assignments;
//   };

//   // Evaluate logical expression using JavaScript's eval
//   const evaluateExpression = (expression, row) => {
//     // Clean the expression
//     let evalExpression = expression.trim();
    
//     // Replace variables with their boolean values
//     Object.keys(row).forEach((variable) => {
//       evalExpression = evalExpression.replace(new RegExp(`\\b${variable}\\b`, 'g'), row[variable]);
//     });
    
//     // Replace logical operators with JavaScript operators
//     evalExpression = evalExpression.replace(/¬/g, '!');
//     evalExpression = evalExpression.replace(/~|!/g, '!');
//     evalExpression = evalExpression.replace(/∧|&|&&|\*/g, '&&');
//     evalExpression = evalExpression.replace(/∨|\||\|\|/g, '||');
//     evalExpression = evalExpression.replace(/⊕|!=|<>/g, '!==');
//     evalExpression = evalExpression.replace(/→|->|=>/g, '<='); // p→q is equivalent to !p || q, which is p <= q in JS
//     evalExpression = evalExpression.replace(/↔|<->|<=>|≡/g, '===');
    
//     // Handle constants
//     evalExpression = evalExpression.replace(/\bT\b|\bTRUE\b|\btrue\b/gi, 'true');
//     evalExpression = evalExpression.replace(/\bF\b|\bFALSE\b|\bfalse\b/gi, 'false');
    
//     try {
//       return eval(evalExpression);
//     } catch (error) {
//       throw new Error(`Error evaluating expression: ${expression}`);
//     }
//   };

//   // Verify logical equivalence by checking all possible assignments
//   const verifyEquivalence = () => {
//     if (!expression1 || !expression2) {
//       setError('Please enter both expressions');
//       return;
//     }
    
//     try {
//       setError('');
      
//       // Extract variables
//       const variables = extractVariables(expression1, expression2);
      
//       if (variables.length > 5) {
//         setError('Maximum 5 variables allowed for performance');
//         return;
//       }
      
//       // Generate all possible assignments
//       const assignments = generateTruthAssignments(variables);
      
//       // Evaluate both expressions for each assignment
//       const tableRows = assignments.map(assignment => {
//         try {
//           const result1 = evaluateExpression(expression1, assignment);
//           const result2 = evaluateExpression(expression2, assignment);
          
//           return {
//             assignment,
//             result1,
//             result2,
//             equivalent: result1 === result2
//           };
//         } catch (error) {
//           throw new Error(`Error evaluating expressions: ${error.message}`);
//         }
//       });
      
//       setTruthTable(tableRows);
      
//       // Expressions are equivalent if they have the same values for all assignments
//       const areEquivalent = tableRows.every(row => row.equivalent);
//       setResult(areEquivalent);
      
//       // Show truth table
//       setShowTruthTable(true);
//     } catch (error) {
//       setError(error.message);
//       setResult(null);
//       setTruthTable([]);
//     }
//   };

//   return (
//     <div className="verifier-container">
//       <h1>Logical Equivalence Verifier</h1>
      
//       <div className="split-layout">
//         <div className="editor-column">
//           <div className="expression-editor">
//             <div className="expression-boxes">
//               <div 
//                 className={`expression-box ${activeExpressionId === 1 ? 'active' : ''}`}
//                 onClick={() => setActiveExpressionId(1)}
//               >
//                 <label>Expression 1:</label>
//                 <input
//                   type="text"
//                   className="expression-input"
//                   value={expression1}
//                   onChange={(e) => setExpression1(e.target.value)}
//                   placeholder="Type or paste expression here"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setActiveExpressionId(1);
//                   }}
//                 />
//               </div>
              
//               <div 
//                 className={`expression-box ${activeExpressionId === 2 ? 'active' : ''}`}
//                 onClick={() => setActiveExpressionId(2)}
//               >
//                 <label>Expression 2:</label>
//                 <input
//                   type="text"
//                   className="expression-input"
//                   value={expression2}
//                   onChange={(e) => setExpression2(e.target.value)}
//                   placeholder="Type or paste expression here"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setActiveExpressionId(2);
//                   }}
//                 />
//               </div>
//             </div>
            
//             <div className="input-controls">
//               <div className="controls-section">
//                 <h4>Variables</h4>
//                 <div className="button-grid">
//                   <button onClick={() => addSymbol('p')} title="Variable p: Commonly used as first propositional variable">p</button>
//                   <button onClick={() => addSymbol('q')} title="Variable q: Commonly used as second propositional variable">q</button>
//                   <button onClick={() => addSymbol('r')} title="Variable r: Commonly used as third propositional variable">r</button>
//                   <button onClick={() => addSymbol('s')} title="Variable s: Commonly used as fourth propositional variable">s</button>
//                   <button onClick={() => addSymbol('t')} title="Variable t: Commonly used as fifth propositional variable">t</button>
//                 </div>
//               </div>
              
//               <div className="controls-section">
//                 <h4>Operators</h4>
//                 <div className="button-grid">
//                   <button onClick={() => addSymbol('∧')} title="AND (∧): Returns true only when both operands are true">∧</button>
//                   <button onClick={() => addSymbol('∨')} title="OR (∨): Returns true when at least one operand is true">∨</button>
//                   <button onClick={() => addSymbol('¬')} title="NOT (¬): Negates the truth value of its operand">¬</button>
//                   <button onClick={() => addSymbol('→')} title="IMPLIES (→): Only returns false when antecedent is true and consequent is false">→</button>
//                   <button onClick={() => addSymbol('↔')} title="BICONDITIONAL (↔): Returns true when both operands have the same truth value">↔</button>
//                   <button onClick={() => addSymbol('⊕')} title="XOR (⊕): Returns true when exactly one operand is true">⊕</button>
//                 </div>
//               </div>
              
//               <div className="controls-section">
//                 <h4>Edit</h4>
//                 <div className="button-grid">
//                   <button onClick={() => addSymbol('(')} title="Open Parenthesis: Groups expressions to control evaluation order">(</button>
//                   <button onClick={() => addSymbol(')')} title="Close Parenthesis: Completes a grouped expression">)</button>
//                   <button onClick={backspace} title="Backspace: Deletes the last character">⌫</button>
//                   <button onClick={clearExpression} title="Clear: Erases the entire active expression">Clear</button>
//                 </div>
//               </div>
//             </div>
            
//             <div className="action-buttons">
//               <button 
//                 onClick={verifyEquivalence} 
//                 className="verify-button"
//                 title="Checks if both expressions are logically equivalent for all possible inputs">
//                 Verify Equivalence
//               </button>
//               <button 
//                 onClick={() => setShowHelp(!showHelp)} 
//                 className="help-toggle"
//                 title="Shows or hides the operators reference guide">
//                 {showHelp ? "Hide Help" : "Show Help"}
//               </button>
//             </div>
            
//             {showHelp && (
//               <div className="help-panel">
//                 <h3>Supported Operators</h3>
//                 <table className="operators-table">
//                   <tbody>
//                     <tr>
//                       <td><strong>AND:</strong></td>
//                       <td>∧, &amp;, &amp;&amp;, *</td>
//                     </tr>
//                     <tr>
//                       <td><strong>OR:</strong></td>
//                       <td>∨, |, ||</td>
//                     </tr>
//                     <tr>
//                       <td><strong>NOT:</strong></td>
//                       <td>¬, ~, !</td>
//                     </tr>
//                     <tr>
//                       <td><strong>IMPLIES:</strong></td>
//                       <td>→, -&gt;, =&gt;</td>
//                     </tr>
//                     <tr>
//                       <td><strong>BICONDITIONAL:</strong></td>
//                       <td>↔, &lt;-&gt;, &lt;=&gt;, ≡</td>
//                     </tr>
//                     <tr>
//                       <td><strong>XOR:</strong></td>
//                       <td>⊕, !=, &lt;&gt;</td>
//                     </tr>
//                   </tbody>
//                 </table>
//                 <p className="example">Example: p ∧ q → r is equivalent to ¬(p ∧ q) ∨ r</p>
//               </div>
//             )}
//           </div>
//         </div>
        
//         <div className="results-column">
//           {error && <div className="error">{error}</div>}
          
//           {result !== null && (
//             <div className={`result ${result ? 'equivalent' : 'not-equivalent'}`}>
//               <h2>
//                 {result 
//                   ? "✓ The expressions are logically equivalent" 
//                   : "✗ The expressions are NOT logically equivalent"}
//               </h2>
//               <button 
//                 onClick={() => {
//                   setResult(null);
//                   setTruthTable([]);
//                   setShowTruthTable(false);
//                 }} 
//                 className="reset-button"
//                 title="Clear results and start over">
//                 Reset Results
//               </button>
//             </div>
//           )}
          
//           {showTruthTable && truthTable.length > 0 && (
//             <div className="truth-table-container">
//               <h2>Truth Table</h2>
              
//               <div className="table-wrapper">
//                 <table>
//                   <thead>
//                     <tr>
//                       {Object.keys(truthTable[0].assignment).map(variable => (
//                         <th key={variable}>{variable}</th>
//                       ))}
//                       <th>Expression 1</th>
//                       <th>Expression 2</th>
//                       <th>Equivalent?</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {truthTable.map((row, index) => (
//                       <tr key={index} className={row.equivalent ? 'equivalent-row' : 'not-equivalent-row'}>
//                         {Object.entries(row.assignment).map(([variable, value]) => (
//                           <td key={variable}>{value ? 'T' : 'F'}</td>
//                         ))}
//                         <td className={`${row.equivalent ? 'equal-value' : 'different-value'}`}>{row.result1 ? 'T' : 'F'}</td>
//                         <td className={`${row.equivalent ? 'equal-value' : 'different-value'}`}>{row.result2 ? 'T' : 'F'}</td>
//                         <td className={`result-indicator ${row.equivalent ? 'equivalent-indicator' : 'not-equivalent-indicator'}`}>
//                           {row.equivalent ? '✓' : '✗'}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogicalEquivalenceVerifier;


import { useState } from 'react';
import './EquivalenceChecker.css';

const LogicalEquivalenceVerifier = () => {
  const [expression1, setExpression1] = useState('');
  const [expression2, setExpression2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [truthTable, setTruthTable] = useState([]);
  const [showTruthTable, setShowTruthTable] = useState(false);
  const [activeExpressionId, setActiveExpressionId] = useState(1);
  const [showHelp, setShowHelp] = useState(false);

  // Add symbol to active expression
  const addSymbol = (symbol) => {
    if (activeExpressionId === 1) {
      setExpression1(expression1 + symbol);
    } else {
      setExpression2(expression2 + symbol);
    }
  };

  // Clear active expression
  const clearExpression = () => {
    if (activeExpressionId === 1) {
      setExpression1('');
    } else {
      setExpression2('');
    }
  };

  // Backspace (delete last character)
  const backspace = () => {
    if (activeExpressionId === 1) {
      setExpression1(expression1.slice(0, -1));
    } else {
      setExpression2(expression2.slice(0, -1));
    }
  };

  // Extract unique variables from both expressions
  const extractVariables = (expr1, expr2) => {
    const combined = expr1 + expr2;
    // Match all single letters that represent variables
    const varRegex = /[a-z]/g;
    const matches = combined.toLowerCase().match(varRegex) || [];
    return [...new Set(matches)].sort();
  };

  // Generate all possible truth assignments for variables
  const generateTruthAssignments = (variables) => {
    const assignments = [];
    const totalCombinations = Math.pow(2, variables.length);
    
    for (let i = 0; i < totalCombinations; i++) {
      const assignment = {};
      
      variables.forEach((variable, index) => {
        // Create a bit mask for each position
        const bitMask = 1 << (variables.length - index - 1);
        // Check if this bit is set in i
        assignment[variable] = (i & bitMask) !== 0;
      });
      
      assignments.push(assignment);
    }
    
    return assignments;
  };

  // Evaluate logical expression using JavaScript's eval
  const evaluateExpression = (expression, row) => {
    // Clean the expression
    let evalExpression = expression.trim();
    
    // Replace variables with their boolean values
    Object.keys(row).forEach((variable) => {
      evalExpression = evalExpression.replace(new RegExp(`\\b${variable}\\b`, 'g'), row[variable]);
    });
    
    // Replace logical operators with JavaScript operators
    evalExpression = evalExpression.replace(/¬/g, '!');
    evalExpression = evalExpression.replace(/~|!/g, '!');
    evalExpression = evalExpression.replace(/∧|&|&&|\*/g, '&&');
    evalExpression = evalExpression.replace(/∨|\||\|\|/g, '||');
    evalExpression = evalExpression.replace(/⊕|!=|<>/g, '!==');
    evalExpression = evalExpression.replace(/→|->|=>/g, '<='); // p→q is equivalent to !p || q, which is p <= q in JS
    evalExpression = evalExpression.replace(/↔|<->|<=>|≡/g, '===');
    
    // Handle constants
    evalExpression = evalExpression.replace(/\bT\b|\bTRUE\b|\btrue\b/gi, 'true');
    evalExpression = evalExpression.replace(/\bF\b|\bFALSE\b|\bfalse\b/gi, 'false');
    
    try {
      return eval(evalExpression);
    } catch (error) {
      throw new Error(`Error evaluating expression: ${expression}`);
    }
  };

  // Verify logical equivalence by checking all possible assignments
  const verifyEquivalence = () => {
    if (!expression1 || !expression2) {
      setError('Please enter both expressions');
      return;
    }
    
    try {
      setError('');
      
      // Extract variables
      const variables = extractVariables(expression1, expression2);
      
      if (variables.length > 5) {
        setError('Maximum 5 variables allowed for performance');
        return;
      }
      
      // Generate all possible assignments
      const assignments = generateTruthAssignments(variables);
      
      // Evaluate both expressions for each assignment
      const tableRows = assignments.map(assignment => {
        try {
          const result1 = evaluateExpression(expression1, assignment);
          const result2 = evaluateExpression(expression2, assignment);
          
          return {
            assignment,
            result1,
            result2,
            equivalent: result1 === result2
          };
        } catch (error) {
          throw new Error(`Error evaluating expressions: ${error.message}`);
        }
      });
      
      setTruthTable(tableRows);
      
      // Expressions are equivalent if they have the same values for all assignments
      const areEquivalent = tableRows.every(row => row.equivalent);
      setResult(areEquivalent);
      
      // Show truth table
      setShowTruthTable(true);
    } catch (error) {
      setError(error.message);
      setResult(null);
      setTruthTable([]);
    }
  };

  return (
    <div className="verifier-container">
      {/* <h1>Logical Equivalence Verifier</h1> */}
      
      <div className="split-layout">
        <div className="editor-column">
          <div className="expression-editor">
            <div className="expression-boxes">
              <div 
                className={`expression-box ${activeExpressionId === 1 ? 'active' : ''}`}
                onClick={() => setActiveExpressionId(1)}
              >
                <label>Expression 1:</label>
                <input
                  type="text"
                  className="expression-input"
                  value={expression1}
                  onChange={(e) => setExpression1(e.target.value)}
                  placeholder="Type or paste expression here"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveExpressionId(1);
                  }}
                />
              </div>
              
              <div 
                className={`expression-box ${activeExpressionId === 2 ? 'active' : ''}`}
                onClick={() => setActiveExpressionId(2)}
              >
                <label>Expression 2:</label>
                <input
                  type="text"
                  className="expression-input"
                  value={expression2}
                  onChange={(e) => setExpression2(e.target.value)}
                  placeholder="Type or paste expression here"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveExpressionId(2);
                  }}
                />
              </div>
            </div>
            
            <div className="input-controls">
              <div className="controls-section">
                <h4>Variables</h4>
                <div className="button-grid">
                  <button onClick={() => addSymbol('p')} title="Variable p: Commonly used as first propositional variable">p</button>
                  <button onClick={() => addSymbol('q')} title="Variable q: Commonly used as second propositional variable">q</button>
                  <button onClick={() => addSymbol('r')} title="Variable r: Commonly used as third propositional variable">r</button>
                  <button onClick={() => addSymbol('s')} title="Variable s: Commonly used as fourth propositional variable">s</button>
                  <button onClick={() => addSymbol('t')} title="Variable t: Commonly used as fifth propositional variable">t</button>
                </div>
              </div>
              
              <div className="controls-section">
                <h4>Operators</h4>
                <div className="button-grid">
                  <button onClick={() => addSymbol('∧')} title="AND (∧): Returns true only when both operands are true">∧</button>
                  <button onClick={() => addSymbol('∨')} title="OR (∨): Returns true when at least one operand is true">∨</button>
                  <button onClick={() => addSymbol('¬')} title="NOT (¬): Negates the truth value of its operand">¬</button>
                  <button onClick={() => addSymbol('→')} title="IMPLIES (→): Only returns false when antecedent is true and consequent is false">→</button>
                  <button onClick={() => addSymbol('↔')} title="BICONDITIONAL (↔): Returns true when both operands have the same truth value">↔</button>
                  <button onClick={() => addSymbol('⊕')} title="XOR (⊕): Returns true when exactly one operand is true">⊕</button>
                </div>
              </div>
              
              <div className="controls-section">
                <h4>Edit</h4>
                <div className="button-grid">
                  <button onClick={() => addSymbol('(')} title="Open Parenthesis: Groups expressions to control evaluation order">(</button>
                  <button onClick={() => addSymbol(')')} title="Close Parenthesis: Completes a grouped expression">)</button>
                  <button onClick={backspace} title="Backspace: Deletes the last character">⌫</button>
                  <button onClick={clearExpression} title="Clear: Erases the entire active expression">Clear</button>
                </div>
              </div>
            </div>
            
            <div className="action-buttons">
              <button 
                onClick={verifyEquivalence} 
                className="verify-button"
                title="Checks if both expressions are logically equivalent for all possible inputs">
                Verify Equivalence
              </button>
              <button 
                onClick={() => setShowHelp(!showHelp)} 
                className="help-toggle"
                title="Shows or hides the operators reference guide">
                {showHelp ? "Hide Help" : "Show Help"}
              </button>
            </div>
            
            {showHelp && (
              <div className="help-panel">
                <h3>Supported Operators</h3>
                <table className="operators-table">
                  <tbody>
                    <tr>
                      <td><strong>AND:</strong></td>
                      <td>∧, &amp;, &amp;&amp;, *</td>
                    </tr>
                    <tr>
                      <td><strong>OR:</strong></td>
                      <td>∨, |, ||</td>
                    </tr>
                    <tr>
                      <td><strong>NOT:</strong></td>
                      <td>¬, ~, !</td>
                    </tr>
                    <tr>
                      <td><strong>IMPLIES:</strong></td>
                      <td>→, -&gt;, =&gt;</td>
                    </tr>
                    <tr>
                      <td><strong>BICONDITIONAL:</strong></td>
                      <td>↔, &lt;-&gt;, &lt;=&gt;, ≡</td>
                    </tr>
                    <tr>
                      <td><strong>XOR:</strong></td>
                      <td>⊕, !=, &lt;&gt;</td>
                    </tr>
                  </tbody>
                </table>
                <p className="example">Example: p ∧ q → r is equivalent to ¬(p ∧ q) ∨ r</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="results-column">
          {error && <div className="error">{error}</div>}
          
          {result !== null && (
            <div className={`result ${result ? 'equivalent' : 'not-equivalent'}`}>
              <h2>
                {result 
                  ? "✓ The expressions are logically equivalent" 
                  : "✗ The expressions are NOT logically equivalent"}
              </h2>
              <button 
                onClick={() => {
                  setResult(null);
                  setTruthTable([]);
                  setShowTruthTable(false);
                }} 
                className="reset-button"
                title="Clear results and start over">
                Reset Results
              </button>
            </div>
          )}
          
          {showTruthTable && truthTable.length > 0 && (
            <div className="truth-table-container">
              <h2>Truth Table</h2>
              
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      {Object.keys(truthTable[0].assignment).map(variable => (
                        <th key={variable}>{variable}</th>
                      ))}
                      <th title="Value of first expression">{expression1}</th>
                      <th title="Value of second expression">{expression2}</th>
                      <th>Equivalent?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {truthTable.map((row, index) => (
                      <tr key={index} className={row.equivalent ? 'equivalent-row' : 'not-equivalent-row'}>
                        {Object.entries(row.assignment).map(([variable, value]) => (
                          <td key={variable}>{value ? 'T' : 'F'}</td>
                        ))}
                        <td className={`${row.equivalent ? 'equal-value' : 'different-value'}`}>{row.result1 ? 'T' : 'F'}</td>
                        <td className={`${row.equivalent ? 'equal-value' : 'different-value'}`}>{row.result2 ? 'T' : 'F'}</td>
                        <td className={`result-indicator ${row.equivalent ? 'equivalent-indicator' : 'not-equivalent-indicator'}`}>
                          {row.equivalent ? '✓' : '✗'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogicalEquivalenceVerifier;