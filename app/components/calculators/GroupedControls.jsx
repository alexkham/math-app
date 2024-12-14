// // import { useState } from 'react';
// // import { ChevronDown, ChevronRight } from 'lucide-react';
// // import './GroupedControls.css';

// // const GroupedControls = ({ onOperationSelect, numVectors, activeOperation, operationParams }) => {
// //   const [activePanel, setActivePanel] = useState(null);

// //   const operations = {
// //     unary: {
// //       title: 'Unary Operations',
// //       minVectors: 1,
// //       description: 'Operations for single vector',
// //       ops: {
// //         scale: {
// //           name: 'Scale',
// //           hasInput: true
// //         }
// //       }
// //     },
// //     binary: {
// //       title: 'Binary Operations',
// //       minVectors: 2,
// //       description: 'Operations requiring exactly two vectors',
// //       ops: {
// //         dotProduct: {
// //           name: 'Dot Product',
// //           hasInput: false
// //         }
// //       }
// //     },
// //     multi: {
// //       title: 'Multi Operations',
// //       minVectors: 1,
// //       description: 'Operations for multiple vectors',
// //       ops: {
// //         add: {
// //           name: 'Add All',
// //           hasInput: false
// //         },
// //         subtract: {
// //           name: 'Subtract from A',
// //           hasInput: false
// //         }
// //       }
// //     }
// //   };

// //   return (
// //     <div className="operation-panels">
// //       {Object.entries(operations).map(([type, group]) => (
// //         <div key={type} className="panel">
// //           <div 
// //             className="panel-header"
// //             onClick={() => setActivePanel(activePanel === type ? null : type)}
// //           >
// //             {activePanel === type ? 
// //               <ChevronDown className="icon" size={20} /> : 
// //               <ChevronRight className="icon" size={20} />
// //             }
// //             <span>{group.title}</span>
// //           </div>
          
// //           {activePanel === type && (
// //             <div className="panel-content">
// //               <p className="description">{group.description}</p>
// //               <div className="operations">
// //                 {Object.entries(group.ops).map(([opId, op]) => (
// //                   <div 
// //                     key={opId} 
// //                     className="operation"
// //                     style={{ 
// //                       opacity: numVectors >= group.minVectors ? 1 : 0.5 
// //                     }}
// //                   >
// //                     <span>{op.name}</span>
// //                     {op.hasInput && (
// //                       <>
// //                         <input
// //                           type="text"
// //                           value={operationParams?.value || ''}
// //                           onChange={(e) => {
// //                             const value = e.target.value.replace(/^0+/, '');
// //                             if (/^-?\d*$/.test(value)) {
// //                               onOperationSelect(type, opId, value);
// //                             }
// //                           }}
// //                           placeholder="Enter value..."
// //                           disabled={numVectors < group.minVectors}
// //                         />
// //                         <button 
// //                           onClick={() => onOperationSelect(type, opId, operationParams?.value)}
// //                           disabled={!operationParams?.value || numVectors < group.minVectors}
// //                         >
// //                           Apply
// //                         </button>
// //                       </>
// //                     )}
// //                     {!op.hasInput && (
// //                       <button
// //                         onClick={() => onOperationSelect(type, opId)}
// //                         disabled={numVectors < group.minVectors}
// //                       >
// //                         Execute
// //                       </button>
// //                     )}
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default GroupedControls;

// import { useState } from 'react';
// import { ChevronDown, ChevronRight } from 'lucide-react';
// import './GroupedControls.css';

// const GroupedControls = ({ onOperationSelect, numVectors, activeOperation, operationParams }) => {
//   const [activePanel, setActivePanel] = useState(null);

//   const operations = {
//     unary: {
//       title: 'Unary Operations',
//       minVectors: 1,
//       description: 'Operations for single vector',
//       ops: {
//         scale: {
//           name: 'Scale',
//           hasInput: true
//         }
//       }
//     },
//     binary: {
//       title: 'Binary Operations',
//       minVectors: 2,
//       description: 'Operations requiring exactly two vectors',
//       ops: {
//         dotProduct: {
//           name: 'Dot Product',
//           hasInput: false
//         }
//       }
//     },
//     multi: {
//       title: 'Multi Operations',
//       minVectors: 1,
//       description: 'Operations for multiple vectors',
//       ops: {
//         add: {
//           name: 'Add All',
//           hasInput: false
//         },
//         subtract: {
//           name: 'Subtract from A',
//           hasInput: false
//         }
//       }
//     }
//   };

//   return (
//     <div className="operation-panels">
//       <div className="panel-headers">
//         {Object.entries(operations).map(([type, group]) => (
//           <div key={type} className={`panel ${activePanel === type ? 'active' : ''}`}>
//             <div 
//               className="panel-header"
//               onClick={() => setActivePanel(activePanel === type ? null : type)}
//             >
//               <div className="panel-title">{group.title}</div>
//               {activePanel === type ? 
//                 <ChevronDown className="icon" size={20} /> : 
//                 <ChevronRight className="icon" size={20} />
//               }
//             </div>
            
//             {activePanel === type && (
//               <div className="panel-content">
//                 <p className="description">{group.description}</p>
//                 <div className="operations">
//                   {Object.entries(group.ops).map(([opId, op]) => (
//                     <div 
//                       key={opId} 
//                       className="operation"
//                       style={{ 
//                         opacity: numVectors >= group.minVectors ? 1 : 0.5 
//                       }}
//                     >
//                       <span>{op.name}</span>
//                       {op.hasInput && (
//                         <>
//                           <input
//                             type="text"
//                             value={operationParams?.value || ''}
//                             onChange={(e) => {
//                               const value = e.target.value.replace(/^0+/, '');
//                               if (/^-?\d*$/.test(value)) {
//                                 onOperationSelect(type, opId, value);
//                               }
//                             }}
//                             placeholder="Enter value..."
//                             disabled={numVectors < group.minVectors}
//                           />
//                           <button 
//                             onClick={() => onOperationSelect(type, opId, operationParams?.value)}
//                             disabled={!operationParams?.value || numVectors < group.minVectors}
//                           >
//                             Apply
//                           </button>
//                         </>
//                       )}
//                       {!op.hasInput && (
//                         <button
//                           onClick={() => onOperationSelect(type, opId)}
//                           disabled={numVectors < group.minVectors}
//                         >
//                           Execute
//                         </button>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GroupedControls;


import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import './GroupedControls.css';

const GroupedControls = ({ onOperationSelect, numVectors, activeOperation, operationParams }) => {
  const [activeTab, setActiveTab] = useState(null);

  const operations = {
    unary: {
      title: 'Unary Operations',
      minVectors: 1,
      description: 'Operations for single vector',
      ops: {
        scale: {
          name: 'Scale',
          hasInput: true
        }
      }
    },
    binary: {
      title: 'Binary Operations',
      minVectors: 2,
      description: 'Operations requiring exactly two vectors',
      ops: {
        dotProduct: {
          name: 'Dot Product',
          hasInput: false
        }
      }
    },
    multi: {
      title: 'Multi Operations',
      minVectors: 1,
      description: 'Operations for multiple vectors',
      ops: {
        add: {
          name: 'Add All',
          hasInput: false
        },
        subtract: {
          name: 'Subtract from A',
          hasInput: false
        }
      }
    }
  };

  return (
    <div className="operations-container">
      <div className="tabs">
        {Object.entries(operations).map(([type, group]) => (
          <button 
            key={type}
            className={`tab ${activeTab === type ? 'active' : ''}`}
            onClick={() => setActiveTab(activeTab === type ? null : type)}
          >
            <div>{group.title}</div>
            {activeTab === type ? 
              <ChevronUp className="icon" size={20} /> : 
              <ChevronDown className="icon" size={20} />
            }
          </button>
        ))}
      </div>

      {activeTab && (
        <div className="tab-content">
          <p className="description">{operations[activeTab].description}</p>
          <div className="operations">
            {Object.entries(operations[activeTab].ops).map(([opId, op]) => (
              <div 
                key={opId} 
                className="operation"
                style={{ opacity: numVectors >= operations[activeTab].minVectors ? 1 : 0.5 }}
              >
                <span>{op.name}</span>
                {op.hasInput && (
                  <>
                    <input
                      type="text"
                      value={operationParams?.value || ''}
                      onChange={(e) => {
                        const value = e.target.value.replace(/^0+/, '');
                        if (/^-?\d*$/.test(value)) {
                          onOperationSelect(activeTab, opId, value);
                        }
                      }}
                      placeholder="Enter value..."
                      disabled={numVectors < operations[activeTab].minVectors}
                    />
                    <button 
                      onClick={() => onOperationSelect(activeTab, opId, operationParams?.value)}
                      disabled={!operationParams?.value || numVectors < operations[activeTab].minVectors}
                    >
                      Apply
                    </button>
                  </>
                )}
                {!op.hasInput && (
                  <button
                    onClick={() => onOperationSelect(activeTab, opId)}
                    disabled={numVectors < operations[activeTab].minVectors}
                  >
                    Execute
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupedControls;