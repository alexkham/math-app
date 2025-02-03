// // // // // MatrixOperationsPanel.jsx
// // // // import { useState } from 'react';
// // // // import './MatrixOperationsPanel.css'

// // // // export default function MatrixOperationsPanel({ onTranspose, onScalarOperation }) {
// // // //   const [isExpanded, setIsExpanded] = useState(false);
// // // //   const [scalarValue, setScalarValue] = useState(0);

// // // //   return (
// // // //     <div className="operations-panel" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
// // // //       <button 
// // // //         onClick={() => setIsExpanded(!isExpanded)}
// // // //         style={{ width: '100%', padding: '5px' }}
// // // //       >
// // // //         {isExpanded ? '▼ Operations' : '▶ Operations'}
// // // //       </button>
      
// // // //       {isExpanded && (
// // // //         <div style={{ marginTop: '10px' }}>
// // // //           <div style={{ marginBottom: '10px' }}>
// // // //             <input
// // // //               type="number"
// // // //               value={scalarValue}
// // // //               onChange={(e) => setScalarValue(Number(e.target.value))}
// // // //               style={{ width: '60px', marginRight: '10px' }}
// // // //             />
// // // //             <button onClick={() => onScalarOperation('add', scalarValue)}>Add</button>
// // // //             <button onClick={() => onScalarOperation('subtract', scalarValue)}>Subtract</button>
// // // //             <button onClick={() => onScalarOperation('multiply', scalarValue)}>Multiply</button>
// // // //           </div>
// // // //           <button onClick={onTranspose}>Transpose</button>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }


// // // // import { useState } from 'react';
// // // // import styles from './MatrixOperationsPanel.module.css';

// // // // export default function MatrixOperationsPanel({ onTranspose, onScalarOperation }) {
// // // //   const [isExpanded, setIsExpanded] = useState(false);
// // // //   const [scalarValue, setScalarValue] = useState(0);

// // // //   return (
// // // //     <div className={styles.operationsPanel}>
// // // //       <button 
// // // //         onClick={() => setIsExpanded(!isExpanded)}
// // // //         className={styles.panelToggle}
// // // //       >
// // // //         {isExpanded ? '▼ Operations' : '▶ Operations'}
// // // //       </button>
      
// // // //       {isExpanded && (
// // // //         <div>
// // // //           <div className={styles.scalarControls}>
// // // //             <input
// // // //               type="number"
// // // //               value={scalarValue}
// // // //               onChange={(e) => setScalarValue(Number(e.target.value))}
// // // //               className={styles.scalarInput}
// // // //             />
// // // //             <button onClick={() => onScalarOperation('add', scalarValue)} className={styles.operationBtn}>Add</button>
// // // //             <button onClick={() => onScalarOperation('subtract', scalarValue)} className={styles.operationBtn}>Subtract</button>
// // // //             <button onClick={() => onScalarOperation('multiply', scalarValue)} className={styles.operationBtn}>Multiply</button>
// // // //           </div>
// // // //           <button onClick={onTranspose} className={styles.operationBtn}>Transpose</button>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }


// // // // MatrixOperationsPanel.jsx
// // // import { useState } from 'react';
// // // import styles from './MatrixOperationsPanel.module.css';

// // // export default function MatrixOperationsPanel({ onTranspose, onScalarOperation }) {
// // //   const [isExpanded, setIsExpanded] = useState(false);
// // //   const [scalarValue, setScalarValue] = useState(0);

// // //   return (
// // //     <div className={styles.operationsPanel}>
// // //       <button 
// // //         onClick={() => setIsExpanded(!isExpanded)}
// // //         className={styles.panelToggle}
// // //       >
// // //         {isExpanded ? '▼ Operations' : '▶ Operations'}
// // //       </button>
      
// // //       {isExpanded && (
// // //         <div className={styles.expandedContent}>
// // //           <div className={styles.scalarControls}>
// // //             <input
// // //               type="number"
// // //               value={scalarValue}
// // //               onChange={(e) => setScalarValue(Number(e.target.value))}
// // //               className={styles.scalarInput}
// // //             />
// // //             <button 
// // //               onClick={() => onScalarOperation('add', scalarValue)} 
// // //               className={styles.operationBtn}
// // //             >
// // //               Add
// // //             </button>
// // //             <button 
// // //               onClick={() => onScalarOperation('subtract', scalarValue)} 
// // //               className={styles.operationBtn}
// // //             >
// // //               Subtract
// // //             </button>
// // //             <button 
// // //               onClick={() => onScalarOperation('multiply', scalarValue)} 
// // //               className={styles.operationBtn}
// // //             >
// // //               Multiply
// // //             </button>
// // //           </div>
// // //           <button 
// // //             onClick={onTranspose} 
// // //             className={styles.operationBtn}
// // //           >
// // //             Transpose
// // //           </button>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }


// // // MatrixOperationsPanel.jsx
// // import { useState } from 'react';
// // import styles from './MatrixOperationsPanel.module.css';

// // export default function MatrixOperationsPanel({ 
// //  operations,
// //  title = 'Operations',
// //  onOperationSelect 
// // }) {
// //  const [isExpanded, setIsExpanded] = useState(false);
// //  const [scalarValue, setScalarValue] = useState(0);

// //  const handleOperation = (operation) => {
// //    onOperationSelect(operation, scalarValue);
// //  };

// //  return (
// //    <div className={styles.operationsPanel}>
// //      <button 
// //        onClick={() => setIsExpanded(!isExpanded)}
// //        className={styles.panelToggle}
// //      >
// //        {isExpanded ? `▼ ${title}` : `▶ ${title}`}
// //      </button>
     
// //      {isExpanded && (
// //        <div className={styles.expandedContent}>
// //          <div className={styles.scalarControls}>
// //            <input
// //              type="number"
// //              value={scalarValue}
// //              onChange={(e) => setScalarValue(Number(e.target.value))}
// //              className={styles.scalarInput}
// //            />
// //            {operations.map(operation => (
// //              <button 
// //                key={operation}
// //                onClick={() => handleOperation(operation)} 
// //                className={styles.operationBtn}
// //              >
// //                {operation}
// //              </button>
// //            ))}
// //          </div>
// //        </div>
// //      )}
// //    </div>
// //  );
// // }


// // MatrixOperationsPanel.jsx
// import { useState } from 'react';
// import styles from './MatrixOperationsPanel.module.css';

// export default function MatrixOperationsPanel({ 
//   operations = [],
//   title = 'Operations',
// }) {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [scalarValue, setScalarValue] = useState(0);

//   return (
//     <div className={styles.operationsPanel}>
//       <button 
//         onClick={() => setIsExpanded(!isExpanded)}
//         className={styles.panelToggle}
//       >
//         {isExpanded ? `▼ ${title}` : `▶ ${title}`}
//       </button>
      
//       {isExpanded && (
//         <div className={styles.expandedContent}>
//           <div className={styles.scalarControls}>
//             <input
//               type="number"
//               value={scalarValue}
//               onChange={(e) => setScalarValue(Number(e.target.value))}
//               className={styles.scalarInput}
//             />
//             {operations.map(({name, handler}) => (
//               <button 
//                 key={name}
//                 onClick={() => handler(scalarValue)} 
//                 className={styles.operationBtn}
//               >
//                 {name}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



// OperationsPanel.jsx

import { useState } from 'react';
import styles from './MatrixOperationsPanel.module.css';

export default function MatrixOperationsPanel({ 
  operations = [],
  title = 'Operations',
 }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scalarValue, setScalarValue] = useState(''); // Changed from 0 to ''
 
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === '') {
      setScalarValue('');
    } else {
      setScalarValue(Number(value));
    }
  };
 
  const resetPanel = () => {
    setScalarValue('');
    setIsExpanded(false);
  };
 
  return (
    <div className={styles.operationsPanel}>
      <div className={styles.panelHeader}>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className={styles.panelToggle}
        >
          {isExpanded ? `▼ ${title}` : `▶ ${title}`}
        </button>
        <button 
          onClick={resetPanel}
          className={styles.resetBtn}
        >
          Reset
        </button>
      </div>
      
      {isExpanded && (
        <div className={styles.expandedContent}>
          <div className={styles.scalarControls}>
            <input
              type="number"
              value={scalarValue}
              onChange={handleInputChange}
              className={styles.scalarInput}
              placeholder="0"
            />
            {operations.map(({name, handler}) => (
              <button 
                key={name}
                onClick={() => handler(scalarValue || 0)} 
                className={styles.operationBtn}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
 }