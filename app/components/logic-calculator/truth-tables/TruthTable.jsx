// // // import React, { useState } from 'react';
// // // import styles from './TruthTable.module.css';

// // // const TruthTable = () => {
// // //   const [selectedOperator, setSelectedOperator] = useState('AND');
  
// // //   const operators = {
// // //     'AND': (a, b) => a && b,
// // //     'OR': (a, b) => a || b,
// // //     'XOR': (a, b) => a !== b,
// // //     'NAND': (a, b) => !(a && b),
// // //     'NOR': (a, b) => !(a || b),
// // //     'XNOR': (a, b) => a === b
// // //   };

// // //   const generateTruthTable = (operator) => {
// // //     const inputs = [[false, false], [false, true], [true, false], [true, true]];
// // //     return inputs.map(([a, b]) => ({
// // //       a,
// // //       b,
// // //       result: operators[operator](a, b)
// // //     }));
// // //   };

// // //   const tableData = generateTruthTable(selectedOperator);

// // //   return (
// // //     <div className={styles.container}>
// // //       <div className={styles.header}>
// // //         <div className={styles.title}>
// // //           <span>Truth Table: {selectedOperator}</span>
// // //           <select 
// // //             value={selectedOperator}
// // //             onChange={(e) => setSelectedOperator(e.target.value)}
// // //             className={styles.select}
// // //           >
// // //             {Object.keys(operators).map(op => (
// // //               <option key={op} value={op}>{op}</option>
// // //             ))}
// // //           </select>
// // //         </div>
// // //       </div>
// // //       <div className={styles.content}>
// // //         <table className={styles.table}>
// // //           <thead>
// // //             <tr className={styles.tableHeader}>
// // //               <th className={styles.tableCell}>Input A</th>
// // //               <th className={styles.tableCell}>Input B</th>
// // //               <th className={styles.tableCell}>Output</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {tableData.map((row, idx) => (
// // //               <tr key={idx} className={styles.tableRow}>
// // //                 <td className={styles.tableCell}>{row.a ? 'T' : 'F'}</td>
// // //                 <td className={styles.tableCell}>{row.b ? 'T' : 'F'}</td>
// // //                 <td className={`${styles.tableCell} ${styles.result}`}>
// // //                   {row.result ? 'T' : 'F'}
// // //                 </td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TruthTable;

// // import React, { useState } from 'react';
// // import styles from './TruthTable.module.css';

// // const TruthTable = () => {
// //   const [selectedOperator, setSelectedOperator] = useState('AND');
  
// //   const operators = {
// //     'AND': (a, b) => a && b,
// //     'OR': (a, b) => a || b,
// //     'XOR': (a, b) => a !== b,
// //     'NAND': (a, b) => !(a && b),
// //     'NOR': (a, b) => !(a || b),
// //     'XNOR': (a, b) => a === b
// //   };

// //   const generateTruthTable = (operator) => {
// //     const inputs = [[false, false], [false, true], [true, false], [true, true]];
// //     return inputs.map(([a, b]) => ({
// //       a,
// //       b,
// //       result: operators[operator](a, b)
// //     }));
// //   };

// //   const tableData = generateTruthTable(selectedOperator);

// //   return (
// //     <div className={styles.container}>
// //       <select 
// //         value={selectedOperator}
// //         onChange={(e) => setSelectedOperator(e.target.value)}
// //         className={styles.select}
// //       >
// //         {Object.keys(operators).map(op => (
// //           <option key={op} value={op}>{op}</option>
// //         ))}
// //       </select>
// //       <table className={styles.table}>
// //         <thead>
// //           <tr className={styles.tableHeader}>
// //             <th>P</th>
// //             <th>Q</th>
// //             <th>{selectedOperator}</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {tableData.map((row, idx) => (
// //             <tr key={idx} className={styles.tableRow}>
// //               <td className={row.a ? styles.true : styles.false}>
// //                 {row.a ? 'T' : 'F'}
// //               </td>
// //               <td className={row.b ? styles.true : styles.false}>
// //                 {row.b ? 'T' : 'F'}
// //               </td>
// //               <td className={`${styles.result} ${row.result ? styles.true : styles.false}`}>
// //                 {row.result ? 'T' : 'F'}
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default TruthTable;

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
//             <th>P {operators[selectedOperator].symbol} Q</th>
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

import React, { useState } from 'react';
import styles from './TruthTable.module.css';

const TruthTable = () => {
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
    <div className={styles.container}>
      <select 
        value={selectedOperator}
        onChange={(e) => setSelectedOperator(e.target.value)}
        className={styles.select}
      >
        {Object.keys(operators).map(op => (
          <option key={op} value={op}>{op}</option>
        ))}
      </select>
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
  );
};

export default TruthTable;