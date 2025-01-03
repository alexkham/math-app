

// import React, { useState } from 'react';
// import styles from './TruthTable.module.css';

// const TruthTable = () => {
//   const [selectedOperator, setSelectedOperator] = useState('AND');
  
//   const operators = {
//     'AND': { symbol: '∧', func: (a, b) => a && b },
//     'OR': { symbol: '∨', func: (a, b) => a || b },
//     'XOR': { symbol: '⊕', func: (a, b) => a !== b },
//     'NAND': { symbol: '↑', func: (a, b) => !(a && b) },
//     'NOR': { symbol: '↓', func: (a, b) => !(a || b) },
//     'XNOR': { symbol: '↔', func: (a, b) => a === b }
//   };

//   const generateTruthTable = (operator) => {
//     const inputs = [[false, false], [false, true], [true, false], [true, true]];
//     return inputs.map(([a, b]) => ({
//       a, b,
//       result: operators[operator].func(a, b)
//     }));
//   };

//   const tableData = generateTruthTable(selectedOperator);

//   return (
//     <div className={styles.container}>
//       <select 
//         value={selectedOperator}
//         onChange={(e) => setSelectedOperator(e.target.value)}
//         className={styles.select}
//       >
//         {Object.keys(operators).map(op => (
//           <option key={op} value={op}>{op}</option>
//         ))}
//       </select>
//       <table className={styles.table}>
//         <thead>
//           <tr className={styles.tableHeader}>
//             <th>P</th>
//             <th>Q</th>
//             <th>P {operators[selectedOperator].symbol} Q (P {selectedOperator.toLowerCase()} Q)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.map((row, idx) => (
//             <tr key={idx} className={styles.tableRow}>
//               <td className={row.a ? styles.true : styles.false}>
//                 {row.a ? 'T' : 'F'}
//               </td>
//               <td className={row.b ? styles.true : styles.false}>
//                 {row.b ? 'T' : 'F'}
//               </td>
//               <td className={`${styles.result} ${row.result ? styles.true : styles.false}`}>
//                 {row.result ? 'T' : 'F'}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TruthTable;

// import React, { useState } from 'react';
// import styles from './TruthTable.module.css';
// import { processContent } from '@/app/utils/contentProcessor';

// const TruthTable = ({ explanations }) => {
//   const [selectedOperator, setSelectedOperator] = useState('AND');

//   const operators = {
//     'AND': { symbol: '∧', func: (a, b) => a && b },
//     'OR': { symbol: '∨', func: (a, b) => a || b },
//     'XOR': { symbol: '⊕', func: (a, b) => a !== b },
//     'NAND': { symbol: '↑', func: (a, b) => !(a && b) },
//     'NOR': { symbol: '↓', func: (a, b) => !(a || b) },
//     'XNOR': { symbol: '↔', func: (a, b) => a === b }
//   };

//   const generateTruthTable = (operator) => {
//     const inputs = [[false, false], [false, true], [true, false], [true, true]];
//     return inputs.map(([a, b]) => ({
//       a, b,
//       result: operators[operator].func(a, b)
//     }));
//   };

//   const tableData = generateTruthTable(selectedOperator);

//   return (
//     <div className={styles.pageLayout}>
//       <div className={styles.container}>
//         <select
//           value={selectedOperator}
//           onChange={(e) => setSelectedOperator(e.target.value)}
//           className={styles.select}
//         >
//           {Object.keys(operators).map(op => (
//             <option key={op} value={op}>{op}</option>
//           ))}
//         </select>
//         <table className={styles.table}>
//           <thead>
//             <tr className={styles.tableHeader}>
//               <th>P</th>
//               <th>Q</th>
//               <th>P {operators[selectedOperator].symbol} Q (P {selectedOperator.toLowerCase()} Q)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tableData.map((row, idx) => (
//               <tr key={idx} className={styles.tableRow}>
//                 <td className={row.a ? styles.true : styles.false}>
//                   {row.a ? 'T' : 'F'}
//                 </td>
//                 <td className={row.b ? styles.true : styles.false}>
//                   {row.b ? 'T' : 'F'}
//                 </td>
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

const TruthTable = ({ explanations }) => {
  const [selectedOperator, setSelectedOperator] = useState('AND');

  const operators = {
    'AND': { symbol: '∧', func: (a, b) => a && b },
    'OR': { symbol: '∨', func: (a, b) => a || b },
    'XOR': { symbol: '⊕', func: (a, b) => a !== b },
    'NAND': { symbol: '↑', func: (a, b) => !(a && b) },
    'NOR': { symbol: '↓', func: (a, b) => !(a || b) },
    'XNOR': { symbol: '↔', func: (a, b) => a === b }
  };

  const generateTruthTable = (operator) => {
    const inputs = [[false, false], [false, true], [true, false], [true, true]];
    return inputs.map(([a, b]) => ({
      a, b,
      result: operators[operator].func(a, b)
    }));
  };

  const tableData = generateTruthTable(selectedOperator);

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
              <th>P</th>
              <th>Q</th>
              <th>P {operators[selectedOperator].symbol} Q (P {selectedOperator.toLowerCase()} Q)</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => (
              <tr key={idx} className={styles.tableRow}>
                <td className={row.a ? styles.true : styles.false}>
                  {row.a ? 'T' : 'F'}
                </td>
                <td className={row.b ? styles.true : styles.false}>
                  {row.b ? 'T' : 'F'}
                </td>
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