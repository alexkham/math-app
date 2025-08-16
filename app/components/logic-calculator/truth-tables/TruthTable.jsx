

// // // import React, { useState } from 'react';
// // // import styles from './TruthTable.module.css';
// // // import { processContent } from '@/app/utils/contentProcessor';

// // // const standardOperators = {
// // //   'AND': { symbol: '∧', func: (a, b) => a && b, variables: 2 },
// // //   'OR': { symbol: '∨', func: (a, b) => a || b, variables: 2 },
// // //   'XOR': { symbol: '⊕', func: (a, b) => a !== b, variables: 2 },
// // //   'NAND': { symbol: '↑', func: (a, b) => !(a && b), variables: 2 },
// // //   'NOR': { symbol: '↓', func: (a, b) => !(a || b), variables: 2 },
// // //   'XNOR': { symbol: '↔', func: (a, b) => a === b, variables: 2 }
// // // };

// // // const TruthTable = ({operators = standardOperators, explanations }) => {
// // //   const [selectedOperator, setSelectedOperator] = useState(Object.keys(operators)[0]);

// // //   const generateInputs = (variables) => {
// // //     return [...Array(Math.pow(2, variables))].map((_, i) => 
// // //       [...Array(variables)].map((_, j) => !!(i & (1 << j)))
// // //     );
// // //   };

// // //   const generateTruthTable = (operator) => {
// // //     const currentOperator = operators[operator];
// // //     const vars = currentOperator.variables || 2;
// // //     const inputs = generateInputs(vars);
    
// // //     return inputs.map(values => ({
// // //       values,
// // //       negations: values.map(v => !v),
// // //       result: currentOperator.func(...values)
// // //     }));
// // //   };

// // //   const getVariableNames = (count, operator) => {
// // //     const baseNames = [...Array(count)].map((_, i) => String.fromCharCode(80 + i));
// // //     const symbol = operators[operator].symbol;
    
// // //     const negatedVars = baseNames.filter(name => symbol.includes(`¬${name}`));
// // //     return [...baseNames, ...negatedVars.map(name => `¬${name}`)];
// // //   };

// // //   const tableData = generateTruthTable(selectedOperator);
// // //   const varCount = operators[selectedOperator].variables || 2;
// // //   const varNames = getVariableNames(varCount, selectedOperator);
// // //   const baseVarCount = operators[selectedOperator].variables || 2;

// // //   return (
// // //     <div className={styles.pageLayout}>
// // //       <div className={styles.container}>
// // //         <div className={styles.buttonGroup}>
// // //           {Object.keys(operators).map(op => (
// // //             <button
// // //               key={op}
// // //               onClick={() => setSelectedOperator(op)}
// // //               className={`${styles.operatorButton} ${selectedOperator === op ? styles.active : ''}`}
// // //             >
// // //               {op}
// // //             </button>
// // //           ))}
// // //         </div>
// // //         <table className={styles.table}>
// // //           <thead>
// // //             <tr className={styles.tableHeader}>
// // //               {varNames.map(name => (
// // //                 <th key={name}>{name}</th>
// // //               ))}
// // //               <th>{operators[selectedOperator].symbol}</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {tableData.map((row, idx) => (
// // //               <tr key={idx} className={styles.tableRow}>
// // //                 {row.values.map((val, i) => (
// // //                   <td key={i} className={val ? styles.true : styles.false}>
// // //                     {val ? 'T' : 'F'}
// // //                   </td>
// // //                 ))}
// // //                 {varNames.slice(baseVarCount).map((name, i) => {
// // //                   const originalVarIndex = varNames.indexOf(name.replace('¬', ''));
// // //                   return (
// // //                     <td key={`neg_${i}`} className={!row.values[originalVarIndex] ? styles.true : styles.false}>
// // //                       {!row.values[originalVarIndex] ? 'T' : 'F'}
// // //                     </td>
// // //                   );
// // //                 })}
// // //                 <td className={`${styles.result} ${row.result ? styles.true : styles.false}`}>
// // //                   {row.result ? 'T' : 'F'}
// // //                 </td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>

// // //       {explanations && explanations[selectedOperator] && (
// // //         <div className={styles.explanationContainer}>
// // //           <div className={styles.explanationContent}>
// // //             <p className={styles.explanationText}>
// // //               {processContent(explanations[selectedOperator].text)}
// // //             </p>
// // //             {explanations[selectedOperator].links && (
// // //               <div className={styles.explanationLinks}>
// // //                 <p className={styles.linksTitle}>Learn more:</p>
// // //                 <ul className={styles.linksList}>
// // //                   {explanations[selectedOperator].links.map((link, index) => (
// // //                     <li key={index}>
// // //                       <a href={link.link} className={styles.explanationLink}>
// // //                         {link.title}
// // //                       </a>
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default TruthTable;


// // import React, { useState } from 'react';
// // import styles from './TruthTable.module.css';
// // import { processContent } from '@/app/utils/contentProcessor';

// // const standardOperators = {
// //   'AND': { symbol: '∧', func: (a, b) => a && b, variables: 2 },
// //   'OR': { symbol: '∨', func: (a, b) => a || b, variables: 2 },
// //   'XOR': { symbol: '⊕', func: (a, b) => a !== b, variables: 2 },
// //   'NAND': { symbol: '↑', func: (a, b) => !(a && b), variables: 2 },
// //   'NOR': { symbol: '↓', func: (a, b) => !(a || b), variables: 2 },
// //   'XNOR': { symbol: '↔', func: (a, b) => a === b, variables: 2 }
// // };

// // const TruthTable = ({operators = standardOperators, explanations }) => {
// //   const [selectedOperator, setSelectedOperator] = useState(Object.keys(operators)[0]);

// //   const generateInputs = (variables) => {
// //     return [...Array(Math.pow(2, variables))].map((_, i) => 
// //       [...Array(variables)].map((_, j) => !!(i & (1 << j)))
// //     );
// //   };

// //   const generateTruthTable = (operator) => {
// //     const currentOperator = operators[operator];
// //     const vars = currentOperator.variables || 2;
// //     const inputs = generateInputs(vars);
    
// //     return inputs.map(values => {
// //       const result = {
// //         values,
// //         negations: values.map(v => !v),
// //         result: currentOperator.func(...values)
// //       };
      
// //       // Add intermediate calculation results if subExpressions exist
// //       if (currentOperator.subExpressions) {
// //         result.subResults = currentOperator.subExpressions.map(subExpr => 
// //           subExpr.func(...values)
// //         );
// //       }
      
// //       return result;
// //     });
// //   };

// //   const getVariableNames = (count, operator) => {
// //     const baseNames = [...Array(count)].map((_, i) => String.fromCharCode(80 + i));
// //     const symbol = operators[operator].symbol;
    
// //     const negatedVars = baseNames.filter(name => symbol.includes(`¬${name}`));
// //     return [...baseNames, ...negatedVars.map(name => `¬${name}`)];
// //   };

// //   const tableData = generateTruthTable(selectedOperator);
// //   const currentOperator = operators[selectedOperator];
// //   const varCount = currentOperator.variables || 2;
// //   const varNames = getVariableNames(varCount, selectedOperator);
// //   const baseVarCount = currentOperator.variables || 2;

// //   return (
// //     <div className={styles.pageLayout}>
// //       <div className={styles.container}>
// //         <div className={styles.buttonGroup}>
// //           {Object.keys(operators).map(op => (
// //             <button
// //               key={op}
// //               onClick={() => setSelectedOperator(op)}
// //               className={`${styles.operatorButton} ${selectedOperator === op ? styles.active : ''}`}
// //             >
// //               {op}
// //             </button>
// //           ))}
// //         </div>
// //         <table className={styles.table}>
// //           <thead>
// //             <tr className={styles.tableHeader}>
// //               {/* Input variables */}
// //               {varNames.slice(0, baseVarCount).map(name => (
// //                 <th key={name}>{name}</th>
// //               ))}
              
// //               {/* Negated variables */}
// //               {varNames.slice(baseVarCount).map(name => (
// //                 <th key={name}>{name}</th>
// //               ))}
              
// //               {/* Sub-expressions columns */}
// //               {currentOperator.subExpressions?.map((subExpr, index) => (
// //                 <th key={`sub_${index}`}>{subExpr.symbol}</th>
// //               ))}
              
// //               {/* Final result */}
// //               <th>{currentOperator.symbol}</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {tableData.map((row, idx) => (
// //               <tr key={idx} className={styles.tableRow}>
// //                 {/* Input variable values */}
// //                 {row.values.map((val, i) => (
// //                   <td key={i} className={val ? styles.true : styles.false}>
// //                     {val ? 'T' : 'F'}
// //                   </td>
// //                 ))}
                
// //                 {/* Negated variable values */}
// //                 {varNames.slice(baseVarCount).map((name, i) => {
// //                   const originalVarIndex = varNames.indexOf(name.replace('¬', ''));
// //                   return (
// //                     <td key={`neg_${i}`} className={!row.values[originalVarIndex] ? styles.true : styles.false}>
// //                       {!row.values[originalVarIndex] ? 'T' : 'F'}
// //                     </td>
// //                   );
// //                 })}
                
// //                 {/* Sub-expression results */}
// //                 {row.subResults?.map((subResult, index) => (
// //                   <td key={`sub_${index}`} className={subResult ? styles.true : styles.false}>
// //                     {subResult ? 'T' : 'F'}
// //                   </td>
// //                 ))}
                
// //                 {/* Final result */}
// //                 <td className={`${styles.result} ${row.result ? styles.true : styles.false}`}>
// //                   {row.result ? 'T' : 'F'}
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>

// //       {explanations && explanations[selectedOperator] && (
// //         <div className={styles.explanationContainer}>
// //           <div className={styles.explanationContent}>
// //             <p className={styles.explanationText}>
// //               {processContent(explanations[selectedOperator].text)}
// //             </p>
// //             {explanations[selectedOperator].links && (
// //               <div className={styles.explanationLinks}>
// //                 <p className={styles.linksTitle}>Learn more:</p>
// //                 <ul className={styles.linksList}>
// //                   {explanations[selectedOperator].links.map((link, index) => (
// //                     <li key={index}>
// //                       <a href={link.link} className={styles.explanationLink}>
// //                         {link.title}
// //                       </a>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default TruthTable;


// import React, { useState } from 'react';
// import styles from './TruthTable.module.css';
// import { processContent } from '@/app/utils/contentProcessor';

// const standardOperators = {
//   'AND': { symbol: '∧', func: (a, b) => a && b, variables: 2 },
//   'OR': { symbol: '∨', func: (a, b) => a || b, variables: 2 },
//   'XOR': { symbol: '⊕', func: (a, b) => a !== b, variables: 2 },
//   'NAND': { symbol: '↑', func: (a, b) => !(a && b), variables: 2 },
//   'NOR': { symbol: '↓', func: (a, b) => !(a || b), variables: 2 },
//   'XNOR': { symbol: '↔', func: (a, b) => a === b, variables: 2 }
// };

// const TruthTable = ({operators = standardOperators, explanations }) => {
//   const [selectedOperator, setSelectedOperator] = useState(Object.keys(operators)[0]);

//   const generateInputs = (variables) => {
//     return [...Array(Math.pow(2, variables))].map((_, i) => 
//       [...Array(variables)].map((_, j) => !!(i & (1 << j)))
//     );
//   };

//   const generateTruthTable = (operator) => {
//     const currentOperator = operators[operator];
//     const vars = currentOperator.variables || 2;
//     const inputs = generateInputs(vars);
    
//     return inputs.map(values => {
//       const result = {
//         values,
//         negations: values.map(v => !v),
//         result: currentOperator.func(...values)
//       };
      
//       // Add intermediate calculation results if subExpressions exist
//       if (currentOperator.subExpressions) {
//         result.subResults = currentOperator.subExpressions.map(subExpr => 
//           subExpr.func(...values)
//         );
//       }
      
//       return result;
//     });
//   };

//   // Function to get unique variable names and avoid duplicate negations
//   const getVariableNames = (count, operator) => {
//     const baseNames = [...Array(count)].map((_, i) => String.fromCharCode(80 + i));
//     const symbol = operators[operator].symbol;
    
//     // Check for negated variables in the symbol
//     const negatedVarsSet = new Set();
//     for (const name of baseNames) {
//       if (symbol.includes(`¬${name}`)) {
//         negatedVarsSet.add(`¬${name}`);
//       }
//     }
    
//     return [...baseNames, ...Array.from(negatedVarsSet)];
//   };

//   const tableData = generateTruthTable(selectedOperator);
//   const currentOperator = operators[selectedOperator];
//   const varCount = currentOperator.variables || 2;
//   const varNames = getVariableNames(varCount, selectedOperator);
//   const baseVarCount = currentOperator.variables || 2;

//   // Create a Set of column headers to avoid duplicates
//   const columnHeaders = new Set(varNames);
  
//   // Add sub-expression headers, avoiding duplicates
//   if (currentOperator.subExpressions) {
//     currentOperator.subExpressions.forEach(subExpr => {
//       columnHeaders.add(subExpr.symbol);
//     });
//   }
  
//   // Convert to array for rendering
//   const uniqueHeaders = Array.from(columnHeaders);

//   return (
//     <div className={styles.pageLayout}>
//       <div className={styles.container}>
//         <div className={styles.buttonGroup}>
//           {Object.keys(operators).map(op => (
//             <button
//               key={op}
//               onClick={() => setSelectedOperator(op)}
//               className={`${styles.operatorButton} ${selectedOperator === op ? styles.active : ''}`}
//             >
//               {op}
//             </button>
//           ))}
//         </div>
//         <table className={styles.table}>
//           <thead>
//             <tr className={styles.tableHeader}>
//               {/* Base variable columns */}
//               {varNames.slice(0, baseVarCount).map(name => (
//                 <th key={name}>{name}</th>
//               ))}
              
//               {/* Negated variable columns (avoid duplicates) */}
//               {varNames.slice(baseVarCount).map(name => (
//                 <th key={name}>{name}</th>
//               ))}
              
//               {/* Sub-expression columns */}
//               {currentOperator.subExpressions?.map((subExpr, index) => (
//                 // Only add if not already in varNames to avoid duplicates
//                 !varNames.includes(subExpr.symbol) && 
//                 <th key={`sub_${index}`}>{subExpr.symbol}</th>
//               ))}
              
//               {/* Final result */}
//               <th>{currentOperator.symbol}</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tableData.map((row, idx) => (
//               <tr key={idx} className={styles.tableRow}>
//                 {/* Base variable values */}
//                 {row.values.map((val, i) => (
//                   <td key={i} className={val ? styles.true : styles.false}>
//                     {val ? 'T' : 'F'}
//                   </td>
//                 ))}
                
//                 {/* Negated variable values */}
//                 {varNames.slice(baseVarCount).map((name, i) => {
//                   const originalVarIndex = varNames.indexOf(name.replace('¬', ''));
//                   return (
//                     <td key={`neg_${i}`} className={!row.values[originalVarIndex] ? styles.true : styles.false}>
//                       {!row.values[originalVarIndex] ? 'T' : 'F'}
//                     </td>
//                   );
//                 })}
                
//                 {/* Sub-expression results */}
//                 {currentOperator.subExpressions?.map((subExpr, index) => (
//                   // Only add if not already in varNames to avoid duplicates
//                   !varNames.includes(subExpr.symbol) &&
//                   <td key={`sub_${index}`} className={row.subResults[index] ? styles.true : styles.false}>
//                     {row.subResults[index] ? 'T' : 'F'}
//                   </td>
//                 ))}
                
//                 {/* Final result */}
//                 <td className={`${styles.result} ${row.result ? styles.true : styles.false}`}>
//                   {row.result ? 'T' : 'F'}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {explanations && explanations[selectedOperator] && (
//         <div className={styles.explanationContainer}>
//           <div className={styles.explanationContent}>
//             <p className={styles.explanationText}>
//               {processContent(explanations[selectedOperator].text)}
//             </p>
//             {explanations[selectedOperator].links && (
//               <div className={styles.explanationLinks}>
//                 <p className={styles.linksTitle}>Learn more:</p>
//                 <ul className={styles.linksList}>
//                   {explanations[selectedOperator].links.map((link, index) => (
//                     <li key={index}>
//                       <a href={link.link} className={styles.explanationLink}>
//                         {link.title}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TruthTable;


import React, { useState } from 'react';
import styles from './TruthTable.module.css';
import { processContent } from '@/app/utils/contentProcessor';

const standardOperators = {
  'AND': { symbol: '∧', func: (a, b) => a && b, variables: 2 },
  'OR': { symbol: '∨', func: (a, b) => a || b, variables: 2 },
  'XOR': { symbol: '⊕', func: (a, b) => a !== b, variables: 2 },
  'NAND': { symbol: '↑', func: (a, b) => !(a && b), variables: 2 },
  'NOR': { symbol: '↓', func: (a, b) => !(a || b), variables: 2 },
  'XNOR': { symbol: '↔', func: (a, b) => a === b, variables: 2 }
};

const TruthTable = ({operators = standardOperators, explanations }) => {
  const [selectedOperator, setSelectedOperator] = useState(Object.keys(operators)[0]);

  const generateInputs = (variables) => {
    return [...Array(Math.pow(2, variables))].map((_, i) => 
      [...Array(variables)].map((_, j) => !!(i & (1 << j)))
    );
  };

  const generateTruthTable = (operator) => {
    const currentOperator = operators[operator];
    const vars = currentOperator.variables || 2;
    const inputs = generateInputs(vars);
    
    return inputs.map(values => {
      const result = {
        values,
        negations: values.map(v => !v),
        result: currentOperator.func(...values)
      };
      
      // Add intermediate calculation results if subExpressions exist
      if (currentOperator.subExpressions) {
        result.subResults = currentOperator.subExpressions.map(subExpr => 
          subExpr.func(...values)
        );
      }
      
      return result;
    });
  };

  // Function to get unique variable names and avoid duplicate negations
  const getVariableNames = (count, operator) => {
    const baseNames = [...Array(count)].map((_, i) => String.fromCharCode(80 + i));
    const symbol = operators[operator].symbol;
    
    // Check for negated variables in the symbol
    const negatedVarsSet = new Set();
    for (const name of baseNames) {
      if (symbol.includes(`¬${name}`)) {
        negatedVarsSet.add(`¬${name}`);
      }
    }
    
    return [...baseNames, ...Array.from(negatedVarsSet)];
  };

  const tableData = generateTruthTable(selectedOperator);
  const currentOperator = operators[selectedOperator];
  const varCount = currentOperator.variables || 2;
  const varNames = getVariableNames(varCount, selectedOperator);
  const baseVarCount = currentOperator.variables || 2;

  // Create a Set of column headers to avoid duplicates
  const columnHeaders = new Set(varNames);
  
  // Add sub-expression headers, avoiding duplicates
  if (currentOperator.subExpressions) {
    currentOperator.subExpressions.forEach(subExpr => {
      columnHeaders.add(subExpr.symbol);
    });
  }
  
  // Convert to array for rendering
  const uniqueHeaders = Array.from(columnHeaders);

  return (
    <div className={styles.pageLayout}>
      <div className={styles.container}>
        <div className={styles.buttonGroup}>
          {Object.keys(operators).map(op => (
            <button
              key={op}
              onClick={() => setSelectedOperator(op)}
              className={`${styles.operatorButton} ${selectedOperator === op ? styles.active : ''}`}
            >
              {op}
            </button>
          ))}
        </div>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHeader}>
              {/* Base variable columns */}
              {varNames.slice(0, baseVarCount).map(name => (
                <th key={name} className={styles.noWrap}>{name}</th>
              ))}
              
              {/* Negated variable columns (avoid duplicates) */}
              {varNames.slice(baseVarCount).map(name => (
                <th key={name} className={styles.noWrap}>{name}</th>
              ))}
              
              {/* Sub-expression columns */}
              {currentOperator.subExpressions?.map((subExpr, index) => (
                // Only add if not already in varNames to avoid duplicates
                !varNames.includes(subExpr.symbol) && 
                <th key={`sub_${index}`} className={styles.noWrap}>{subExpr.symbol}</th>
              ))}
              
              {/* Final result */}
              <th className={styles.noWrap}>{currentOperator.symbol}</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => (
              <tr key={idx} className={styles.tableRow}>
                {/* Base variable values */}
                {row.values.map((val, i) => (
                  <td key={i} className={val ? styles.true : styles.false}>
                    {val ? 'T' : 'F'}
                  </td>
                ))}
                
                {/* Negated variable values */}
                {varNames.slice(baseVarCount).map((name, i) => {
                  const originalVarIndex = varNames.indexOf(name.replace('¬', ''));
                  return (
                    <td key={`neg_${i}`} className={!row.values[originalVarIndex] ? styles.true : styles.false}>
                      {!row.values[originalVarIndex] ? 'T' : 'F'}
                    </td>
                  );
                })}
                
                {/* Sub-expression results */}
                {currentOperator.subExpressions?.map((subExpr, index) => (
                  // Only add if not already in varNames to avoid duplicates
                  !varNames.includes(subExpr.symbol) &&
                  <td key={`sub_${index}`} className={row.subResults[index] ? styles.true : styles.false}>
                    {row.subResults[index] ? 'T' : 'F'}
                  </td>
                ))}
                
                {/* Final result */}
                <td className={`${styles.result} ${row.result ? styles.true : styles.false}`}>
                  {row.result ? 'T' : 'F'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {explanations && explanations[selectedOperator] && (
        <div className={styles.explanationContainer}>
          <div className={styles.explanationContent}>
            <p className={styles.explanationText}>
              {processContent(explanations[selectedOperator].text)}
            </p>
            {explanations[selectedOperator].links && (
              <div className={styles.explanationLinks}>
                <p className={styles.linksTitle}>Learn more:</p>
                <ul className={styles.linksList}>
                  {explanations[selectedOperator].links.map((link, index) => (
                    <li key={index}>
                      <a href={link.link} className={styles.explanationLink}>
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TruthTable;