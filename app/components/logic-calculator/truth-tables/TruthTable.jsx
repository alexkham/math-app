

// // // // import React, { useState } from 'react';
// // // // import styles from './TruthTable.module.css';

// // // // const TruthTable = () => {
// // // //   const [selectedOperator, setSelectedOperator] = useState('AND');
  
// // // //   const operators = {
// // // //     'AND': { symbol: '∧', func: (a, b) => a && b },
// // // //     'OR': { symbol: '∨', func: (a, b) => a || b },
// // // //     'XOR': { symbol: '⊕', func: (a, b) => a !== b },
// // // //     'NAND': { symbol: '↑', func: (a, b) => !(a && b) },
// // // //     'NOR': { symbol: '↓', func: (a, b) => !(a || b) },
// // // //     'XNOR': { symbol: '↔', func: (a, b) => a === b }
// // // //   };

// // // //   const generateTruthTable = (operator) => {
// // // //     const inputs = [[false, false], [false, true], [true, false], [true, true]];
// // // //     return inputs.map(([a, b]) => ({
// // // //       a, b,
// // // //       result: operators[operator].func(a, b)
// // // //     }));
// // // //   };

// // // //   const tableData = generateTruthTable(selectedOperator);

// // // //   return (
// // // //     <div className={styles.container}>
// // // //       <select 
// // // //         value={selectedOperator}
// // // //         onChange={(e) => setSelectedOperator(e.target.value)}
// // // //         className={styles.select}
// // // //       >
// // // //         {Object.keys(operators).map(op => (
// // // //           <option key={op} value={op}>{op}</option>
// // // //         ))}
// // // //       </select>
// // // //       <table className={styles.table}>
// // // //         <thead>
// // // //           <tr className={styles.tableHeader}>
// // // //             <th>P</th>
// // // //             <th>Q</th>
// // // //             <th>P {operators[selectedOperator].symbol} Q (P {selectedOperator.toLowerCase()} Q)</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {tableData.map((row, idx) => (
// // // //             <tr key={idx} className={styles.tableRow}>
// // // //               <td className={row.a ? styles.true : styles.false}>
// // // //                 {row.a ? 'T' : 'F'}
// // // //               </td>
// // // //               <td className={row.b ? styles.true : styles.false}>
// // // //                 {row.b ? 'T' : 'F'}
// // // //               </td>
// // // //               <td className={`${styles.result} ${row.result ? styles.true : styles.false}`}>
// // // //                 {row.result ? 'T' : 'F'}
// // // //               </td>
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TruthTable;

// // // // import React, { useState } from 'react';
// // // // import styles from './TruthTable.module.css';
// // // // import { processContent } from '@/app/utils/contentProcessor';

// // // // const TruthTable = ({ explanations }) => {
// // // //   const [selectedOperator, setSelectedOperator] = useState('AND');

// // // //   const operators = {
// // // //     'AND': { symbol: '∧', func: (a, b) => a && b },
// // // //     'OR': { symbol: '∨', func: (a, b) => a || b },
// // // //     'XOR': { symbol: '⊕', func: (a, b) => a !== b },
// // // //     'NAND': { symbol: '↑', func: (a, b) => !(a && b) },
// // // //     'NOR': { symbol: '↓', func: (a, b) => !(a || b) },
// // // //     'XNOR': { symbol: '↔', func: (a, b) => a === b }
// // // //   };

// // // //   const generateTruthTable = (operator) => {
// // // //     const inputs = [[false, false], [false, true], [true, false], [true, true]];
// // // //     return inputs.map(([a, b]) => ({
// // // //       a, b,
// // // //       result: operators[operator].func(a, b)
// // // //     }));
// // // //   };

// // // //   const tableData = generateTruthTable(selectedOperator);

// // // //   return (
// // // //     <div className={styles.pageLayout}>
// // // //       <div className={styles.container}>
// // // //         <select
// // // //           value={selectedOperator}
// // // //           onChange={(e) => setSelectedOperator(e.target.value)}
// // // //           className={styles.select}
// // // //         >
// // // //           {Object.keys(operators).map(op => (
// // // //             <option key={op} value={op}>{op}</option>
// // // //           ))}
// // // //         </select>
// // // //         <table className={styles.table}>
// // // //           <thead>
// // // //             <tr className={styles.tableHeader}>
// // // //               <th>P</th>
// // // //               <th>Q</th>
// // // //               <th>P {operators[selectedOperator].symbol} Q (P {selectedOperator.toLowerCase()} Q)</th>
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             {tableData.map((row, idx) => (
// // // //               <tr key={idx} className={styles.tableRow}>
// // // //                 <td className={row.a ? styles.true : styles.false}>
// // // //                   {row.a ? 'T' : 'F'}
// // // //                 </td>
// // // //                 <td className={row.b ? styles.true : styles.false}>
// // // //                   {row.b ? 'T' : 'F'}
// // // //                 </td>
// // // //                 <td className={`${styles.result} ${row.result ? styles.true : styles.false}`}>
// // // //                   {row.result ? 'T' : 'F'}
// // // //                 </td>
// // // //               </tr>
// // // //             ))}
// // // //           </tbody>
// // // //         </table>
// // // //       </div>

// // // //       {explanations && explanations[selectedOperator] && (
// // // //         <div className={styles.explanationContainer}>
// // // //           <div className={styles.explanationContent}>
// // // //             <p className={styles.explanationText}>
// // // //               {processContent(explanations[selectedOperator].text)}
// // // //             </p>
// // // //             {explanations[selectedOperator].links && (
// // // //               <div className={styles.explanationLinks}>
// // // //                 <p className={styles.linksTitle}>Learn more:</p>
// // // //                 <ul className={styles.linksList}>
// // // //                   {explanations[selectedOperator].links.map((link, index) => (
// // // //                     <li key={index}>
// // // //                       <a href={link.link} className={styles.explanationLink}>
// // // //                         {link.title}
// // // //                       </a>
// // // //                     </li>
// // // //                   ))}
// // // //                 </ul>
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TruthTable;

// // // import React, { useState } from 'react';
// // // import styles from './TruthTable.module.css';
// // // import { processContent } from '@/app/utils/contentProcessor';

// // // const standardOperators = {
// // //   'AND': { symbol: '∧', func: (a, b) => a && b },
// // //   'OR': { symbol: '∨', func: (a, b) => a || b },
// // //   'XOR': { symbol: '⊕', func: (a, b) => a !== b },
// // //   'NAND': { symbol: '↑', func: (a, b) => !(a && b) },
// // //   'NOR': { symbol: '↓', func: (a, b) => !(a || b) },
// // //   'XNOR': { symbol: '↔', func: (a, b) => a === b }
// // // };


// // // const TruthTable = ({operators=standardOperators, explanations }) => {
// // //   const [selectedOperator, setSelectedOperator] = useState('AND');

// // //   // const standardOperators = {
// // //   //   'AND': { symbol: '∧', func: (a, b) => a && b },
// // //   //   'OR': { symbol: '∨', func: (a, b) => a || b },
// // //   //   'XOR': { symbol: '⊕', func: (a, b) => a !== b },
// // //   //   'NAND': { symbol: '↑', func: (a, b) => !(a && b) },
// // //   //   'NOR': { symbol: '↓', func: (a, b) => !(a || b) },
// // //   //   'XNOR': { symbol: '↔', func: (a, b) => a === b }
// // //   // };

// // //   const generateTruthTable = (operator) => {
// // //     const inputs = [[false, false], [false, true], [true, false], [true, true]];
// // //     return inputs.map(([a, b]) => ({
// // //       a, b,
// // //       result: operators[operator].func(a, b)
// // //     }));
// // //   };

// // //   const tableData = generateTruthTable(selectedOperator);

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
// // //               <th>P</th>
// // //               <th>Q</th>
// // //               <th>P {operators[selectedOperator].symbol} Q (P {selectedOperator.toLowerCase()} Q)</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {tableData.map((row, idx) => (
// // //               <tr key={idx} className={styles.tableRow}>
// // //                 <td className={row.a ? styles.true : styles.false}>
// // //                   {row.a ? 'T' : 'F'}
// // //                 </td>
// // //                 <td className={row.b ? styles.true : styles.false}>
// // //                   {row.b ? 'T' : 'F'}
// // //                 </td>
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
// //  'AND': { symbol: '∧', func: (a, b) => a && b },
// //  'OR': { symbol: '∨', func: (a, b) => a || b },
// //  'XOR': { symbol: '⊕', func: (a, b) => a !== b },
// //  'NAND': { symbol: '↑', func: (a, b) => !(a && b) },
// //  'NOR': { symbol: '↓', func: (a, b) => !(a || b) },
// //  'XNOR': { symbol: '↔', func: (a, b) => a === b }
// // };

// // const TruthTable = ({operators=standardOperators, explanations }) => {
// //  const [selectedOperator, setSelectedOperator] = useState('AND');

// //  const generateTruthTable = (operator) => {
// //    const inputs = [[false, false], [false, true], [true, false], [true, true]];
// //    return inputs.map(([a, b]) => ({
// //      a, b,
// //      result: operators[operator].func(a, b)
// //    }));
// //  };

// //  const tableData = generateTruthTable(selectedOperator);

// //  return (
// //    <div className={styles.pageLayout}>
// //      <div className={styles.container}>
// //        <div className={styles.buttonGroup}>
// //          {Object.keys(operators).map(op => (
// //            <button
// //              key={op}
// //              onClick={() => setSelectedOperator(op)}
// //              className={`${styles.operatorButton} ${selectedOperator === op ? styles.active : ''}`}
// //            >
// //              {op}
// //            </button>
// //          ))}
// //        </div>
// //        <table className={styles.table}>
// //          <thead>
// //            <tr className={styles.tableHeader}>
// //              <th>P</th>
// //              <th>Q</th>
// //              <th>P {operators[selectedOperator].symbol} Q</th>
// //            </tr>
// //          </thead>
// //          <tbody>
// //            {tableData.map((row, idx) => (
// //              <tr key={idx} className={styles.tableRow}>
// //                <td className={row.a ? styles.true : styles.false}>
// //                  {row.a ? 'T' : 'F'}
// //                </td>
// //                <td className={row.b ? styles.true : styles.false}>
// //                  {row.b ? 'T' : 'F'}
// //                </td>
// //                <td className={`${styles.result} ${row.result ? styles.true : styles.false}`}>
// //                  {row.result ? 'T' : 'F'}
// //                </td>
// //              </tr>
// //            ))}
// //          </tbody>
// //        </table>
// //      </div>

// //      {explanations && explanations[selectedOperator] && (
// //        <div className={styles.explanationContainer}>
// //          <div className={styles.explanationContent}>
// //            <p className={styles.explanationText}>
// //              {processContent(explanations[selectedOperator].text)}
// //            </p>
// //            {explanations[selectedOperator].links && (
// //              <div className={styles.explanationLinks}>
// //                <p className={styles.linksTitle}>Learn more:</p>
// //                <ul className={styles.linksList}>
// //                  {explanations[selectedOperator].links.map((link, index) => (
// //                    <li key={index}>
// //                      <a href={link.link} className={styles.explanationLink}>
// //                        {link.title}
// //                      </a>
// //                    </li>
// //                  ))}
// //                </ul>
// //              </div>
// //            )}
// //          </div>
// //        </div>
// //      )}
// //    </div>
// //  );
// // };

// // export default TruthTable;


// // import React, { useState } from 'react';
// // import styles from './TruthTable.module.css';
// // import { processContent } from '@/app/utils/contentProcessor';

// // const standardOperators = {
// //  'AND': { 
// //    symbol: '∧', 
// //    func: (a, b) => a && b,
// //    variables: 2
// //  },
// //  'OR': { 
// //    symbol: '∨', 
// //    func: (a, b) => a || b,
// //    variables: 2 
// //  },
// //  'XOR': { 
// //    symbol: '⊕', 
// //    func: (a, b) => a !== b,
// //    variables: 2
// //  },
// //  'NAND': { 
// //    symbol: '↑', 
// //    func: (a, b) => !(a && b),
// //    variables: 2
// //  },
// //  'NOR': { 
// //    symbol: '↓', 
// //    func: (a, b) => !(a || b),
// //    variables: 2
// //  },
// //  'XNOR': { 
// //    symbol: '↔', 
// //    func: (a, b) => a === b,
// //    variables: 2
// //  }
// // };

// // const TruthTable = ({operators = standardOperators, explanations }) => {
// //  const [selectedOperator, setSelectedOperator] = useState(Object.keys(operators)[0]);

// //  const generateInputs = (variables) => {
// //    return [...Array(Math.pow(2, variables))].map((_, i) => 
// //      [...Array(variables)].map((_, j) => !!(i & (1 << j)))
// //    );
// //  };

// //  const generateTruthTable = (operator) => {
// //    const currentOperator = operators[operator];
// //    const vars = currentOperator.variables || 2;
// //    const inputs = generateInputs(vars);
   
// //    return inputs.map(values => ({
// //      values,
// //      result: currentOperator.func(...values)
// //    }));
// //  };

// //  const getVariableNames = (count) => {
// //    return [...Array(count)].map((_, i) => 
// //      String.fromCharCode(80 + i)
// //    );
// //  };

// //  const tableData = generateTruthTable(selectedOperator);
// //  const varCount = operators[selectedOperator].variables || 2;
// //  const varNames = getVariableNames(varCount);

// //  return (
// //    <div className={styles.pageLayout}>
// //      <div className={styles.container}>
// //        <div className={styles.buttonGroup}>
// //          {Object.keys(operators).map(op => (
// //            <button
// //              key={op}
// //              onClick={() => setSelectedOperator(op)}
// //              className={`${styles.operatorButton} ${selectedOperator === op ? styles.active : ''}`}
// //            >
// //              {op}
// //            </button>
// //          ))}
// //        </div>
// //        <table className={styles.table}>
// //          <thead>
// //            <tr className={styles.tableHeader}>
// //              {varNames.map(name => (
// //                <th key={name}>{name}</th>
// //              ))}
// //              <th>{operators[selectedOperator].symbol}</th>
// //            </tr>
// //          </thead>
// //          <tbody>
// //            {tableData.map((row, idx) => (
// //              <tr key={idx} className={styles.tableRow}>
// //                {row.values.map((val, i) => (
// //                  <td key={i} className={val ? styles.true : styles.false}>
// //                    {val ? 'T' : 'F'}
// //                  </td>
// //                ))}
// //                <td className={`${styles.result} ${row.result ? styles.true : styles.false}`}>
// //                  {row.result ? 'T' : 'F'}
// //                </td>
// //              </tr>
// //            ))}
// //          </tbody>
// //        </table>
// //      </div>

// //      {explanations && explanations[selectedOperator] && (
// //        <div className={styles.explanationContainer}>
// //          <div className={styles.explanationContent}>
// //            <p className={styles.explanationText}>
// //              {processContent(explanations[selectedOperator].text)}
// //            </p>
// //            {explanations[selectedOperator].links && (
// //              <div className={styles.explanationLinks}>
// //                <p className={styles.linksTitle}>Learn more:</p>
// //                <ul className={styles.linksList}>
// //                  {explanations[selectedOperator].links.map((link, index) => (
// //                    <li key={index}>
// //                      <a href={link.link} className={styles.explanationLink}>
// //                        {link.title}
// //                      </a>
// //                    </li>
// //                  ))}
// //                </ul>
// //              </div>
// //            )}
// //          </div>
// //        </div>
// //      )}
// //    </div>
// //  );
// // };

// // export default TruthTable;

// import React, { useState } from 'react';
// import styles from './TruthTable.module.css';
// import { processContent } from '@/app/utils/contentProcessor';

// const standardOperators = {
//  'AND': { symbol: '∧', func: (a, b) => a && b, variables: 2 },
//  'OR': { symbol: '∨', func: (a, b) => a || b, variables: 2 },
//  'XOR': { symbol: '⊕', func: (a, b) => a !== b, variables: 2 },
//  'NAND': { symbol: '↑', func: (a, b) => !(a && b), variables: 2 },
//  'NOR': { symbol: '↓', func: (a, b) => !(a || b), variables: 2 },
//  'XNOR': { symbol: '↔', func: (a, b) => a === b, variables: 2 }
// };

// const TruthTable = ({operators = standardOperators, explanations }) => {
//  const [selectedOperator, setSelectedOperator] = useState(Object.keys(operators)[0]);

//  const generateInputs = (variables) => {
//    return [...Array(Math.pow(2, variables))].map((_, i) => 
//      [...Array(variables)].map((_, j) => !!(i & (1 << j)))
//    );
//  };

//  const generateTruthTable = (operator) => {
//    const currentOperator = operators[operator];
//    const vars = currentOperator.variables || 2;
//    const inputs = generateInputs(vars);
   
//    return inputs.map(values => ({
//      values,
//      result: currentOperator.func(...values)
//    }));
//  };

//  const getVariableNames = (count, operator) => {
//    const baseNames = [...Array(count)].map((_, i) => 
//      String.fromCharCode(80 + i)
//    );
   
//    const symbol = operators[operator].symbol;
//    if (symbol.includes('¬')) {
//      return baseNames.concat(baseNames.map(name => `¬${name}`));
//    }
//    return baseNames;
//  };

//  const tableData = generateTruthTable(selectedOperator);
//  const varCount = operators[selectedOperator].variables || 2;
//  const varNames = getVariableNames(varCount, selectedOperator);

//  return (
//    <div className={styles.pageLayout}>
//      <div className={styles.container}>
//        <div className={styles.buttonGroup}>
//          {Object.keys(operators).map(op => (
//            <button
//              key={op}
//              onClick={() => setSelectedOperator(op)}
//              className={`${styles.operatorButton} ${selectedOperator === op ? styles.active : ''}`}
//            >
//              {op}
//            </button>
//          ))}
//        </div>
//        <table className={styles.table}>
//          <thead>
//            <tr className={styles.tableHeader}>
//              {varNames.map(name => (
//                <th key={name}>{name}</th>
//              ))}
//              <th>{operators[selectedOperator].symbol}</th>
//            </tr>
//          </thead>
//          <tbody>
//            {tableData.map((row, idx) => (
//              <tr key={idx} className={styles.tableRow}>
//                {row.values.map((val, i) => (
//                  <td key={i} className={val ? styles.true : styles.false}>
//                    {val ? 'T' : 'F'}
//                  </td>
//                ))}
//                {operators[selectedOperator].symbol.includes('¬') && 
//                  row.values.map((val, i) => (
//                    <td key={`neg_${i}`} className={!val ? styles.true : styles.false}>
//                      {!val ? 'T' : 'F'}
//                    </td>
//                  ))
//                }
//                <td className={`${styles.result} ${row.result ? styles.true : styles.false}`}>
//                  {row.result ? 'T' : 'F'}
//                </td>
//              </tr>
//            ))}
//          </tbody>
//        </table>
//      </div>

//      {explanations && explanations[selectedOperator] && (
//        <div className={styles.explanationContainer}>
//          <div className={styles.explanationContent}>
//            <p className={styles.explanationText}>
//              {processContent(explanations[selectedOperator].text)}
//            </p>
//            {explanations[selectedOperator].links && (
//              <div className={styles.explanationLinks}>
//                <p className={styles.linksTitle}>Learn more:</p>
//                <ul className={styles.linksList}>
//                  {explanations[selectedOperator].links.map((link, index) => (
//                    <li key={index}>
//                      <a href={link.link} className={styles.explanationLink}>
//                        {link.title}
//                      </a>
//                    </li>
//                  ))}
//                </ul>
//              </div>
//            )}
//          </div>
//        </div>
//      )}
//    </div>
//  );
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
    
    return inputs.map(values => ({
      values,
      negations: values.map(v => !v),
      result: currentOperator.func(...values)
    }));
  };

  const getVariableNames = (count, operator) => {
    const baseNames = [...Array(count)].map((_, i) => String.fromCharCode(80 + i));
    const symbol = operators[operator].symbol;
    
    const negatedVars = baseNames.filter(name => symbol.includes(`¬${name}`));
    return [...baseNames, ...negatedVars.map(name => `¬${name}`)];
  };

  const tableData = generateTruthTable(selectedOperator);
  const varCount = operators[selectedOperator].variables || 2;
  const varNames = getVariableNames(varCount, selectedOperator);
  const baseVarCount = operators[selectedOperator].variables || 2;

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
              {varNames.map(name => (
                <th key={name}>{name}</th>
              ))}
              <th>{operators[selectedOperator].symbol}</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => (
              <tr key={idx} className={styles.tableRow}>
                {row.values.map((val, i) => (
                  <td key={i} className={val ? styles.true : styles.false}>
                    {val ? 'T' : 'F'}
                  </td>
                ))}
                {varNames.slice(baseVarCount).map((name, i) => {
                  const originalVarIndex = varNames.indexOf(name.replace('¬', ''));
                  return (
                    <td key={`neg_${i}`} className={!row.values[originalVarIndex] ? styles.true : styles.false}>
                      {!row.values[originalVarIndex] ? 'T' : 'F'}
                    </td>
                  );
                })}
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