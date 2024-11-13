// // // // // import React, { useState } from 'react';
// // // // // import { InlineMath } from 'react-katex';
// // // // // import 'katex/dist/katex.min.css';

// // // // // const FormulasTOC = ({ data }) => {
// // // // //   const [expandedFormula, setExpandedFormula] = useState(null);
  
// // // // //   // Group formulas by category
// // // // //   const groupedFormulas = data.reduce((acc, formula) => {
// // // // //     const category = formula.category;
// // // // //     if (!acc[category]) {
// // // // //       acc[category] = [];
// // // // //     }
// // // // //     acc[category].push(formula);
// // // // //     return acc;
// // // // //   }, {});

// // // // //   const handleFormulaClick = (formulaName) => {
// // // // //     setExpandedFormula(expandedFormula === formulaName ? null : formulaName);
// // // // //   };

// // // // //   return (
// // // // //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
// // // // //       {Object.entries(groupedFormulas).map(([category, formulas]) => (
// // // // //         <div key={category} className="border rounded-lg p-4 bg-white shadow-sm">
// // // // //           <h3 className="text-lg font-semibold mb-4">{category}</h3>
// // // // //           <div className="flex flex-col space-y-2">
// // // // //             {formulas.map((formula) => (
// // // // //               <div key={formula.name} className="w-full">
// // // // //                 <button
// // // // //                   onClick={() => handleFormulaClick(formula.name)}
// // // // //                   className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 transition-colors"
// // // // //                 >
// // // // //                   {formula.name}
// // // // //                 </button>
// // // // //                 {expandedFormula === formula.name && (
// // // // //                   <div className="mt-2 p-3 bg-gray-50 rounded">
// // // // //                     <InlineMath math={formula.formula.replace(/\$/g, '')} />
// // // // //                   </div>
// // // // //                 )}
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       ))}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default FormulasTOC;

// // // // import React, { useState } from 'react';
// // // // import { InlineMath } from 'react-katex';
// // // // import 'katex/dist/katex.min.css';
// // // // import styles from './FormulasTOC.module.css';

// // // // const FormulasTOC = ({ data }) => {
// // // //   const [expandedFormula, setExpandedFormula] = useState(null);
  
// // // //   const groupedFormulas = data.reduce((acc, formula) => {
// // // //     const category = formula.category;
// // // //     if (!acc[category]) {
// // // //       acc[category] = [];
// // // //     }
// // // //     acc[category].push(formula);
// // // //     return acc;
// // // //   }, {});

// // // //   const handleFormulaClick = (formulaName) => {
// // // //     setExpandedFormula(expandedFormula === formulaName ? null : formulaName);
// // // //   };

// // // //   return (
// // // //     <div className={styles.tocContainer}>
// // // //       {Object.entries(groupedFormulas).map(([category, formulas]) => (
// // // //         <div key={category} className={styles.categoryCard}>
// // // //           <div className={styles.categoryHeader}>
// // // //             {category}
// // // //           </div>
// // // //           <div className={styles.formulaList}>
// // // //             {formulas.map((formula) => (
// // // //               <div key={formula.name} className={styles.formulaItem}>
// // // //                 <button
// // // //                   onClick={() => handleFormulaClick(formula.name)}
// // // //                   className={styles.formulaButton}
// // // //                 >
// // // //                   {formula.name}
// // // //                 </button>
// // // //                 {expandedFormula === formula.name && (
// // // //                   <div className={styles.expandedFormula}>
// // // //                     <InlineMath math={formula.formula.replace(/\$/g, '')} />
// // // //                   </div>
// // // //                 )}
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default FormulasTOC;

// // // import React, { useState } from 'react';
// // // import { InlineMath } from 'react-katex';
// // // import { ChevronDown } from 'lucide-react';
// // // import 'katex/dist/katex.min.css';
// // // import styles from './FormulasTOC.module.css';

// // // const FormulasTOC = ({ data }) => {
// // //   const [expandedFormula, setExpandedFormula] = useState(null);
  
// // //   const groupedFormulas = data.reduce((acc, formula) => {
// // //     const category = formula.category;
// // //     if (!acc[category]) {
// // //       acc[category] = [];
// // //     }
// // //     acc[category].push(formula);
// // //     return acc;
// // //   }, {});

// // //   const handleFormulaClick = (formulaName) => {
// // //     setExpandedFormula(expandedFormula === formulaName ? null : formulaName);
// // //   };

// // //   return (
// // //     <div className={styles.pageWrapper}>
// // //       <div className={styles.tocContainer}>
// // //         {Object.entries(groupedFormulas).map(([category, formulas]) => (
// // //           <div key={category} className={styles.categoryCard}>
// // //             <div className={styles.categoryHeader}>
// // //               <span className={styles.categoryTitle}>{category}</span>
// // //               <div className={styles.headerAccent} />
// // //             </div>
// // //             <div className={styles.formulaList}>
// // //               {formulas.map((formula) => (
// // //                 <div key={formula.name} className={styles.formulaItem}>
// // //                   <button
// // //                     onClick={() => handleFormulaClick(formula.name)}
// // //                     className={`${styles.formulaButton} ${expandedFormula === formula.name ? styles.expanded : ''}`}
// // //                   >
// // //                     <span>{formula.name}</span>
// // //                     <ChevronDown 
// // //                       className={`${styles.chevron} ${expandedFormula === formula.name ? styles.rotated : ''}`}
// // //                       size={18}
// // //                     />
// // //                   </button>
// // //                   {expandedFormula === formula.name && (
// // //                     <div className={styles.expandedFormula}>
// // //                       <InlineMath math={formula.formula.replace(/\$/g, '')} />
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default FormulasTOC;

// // import React, { useState, useMemo } from 'react';
// // import { InlineMath } from 'react-katex';
// // import { ChevronDown } from 'lucide-react';
// // import 'katex/dist/katex.min.css';
// // import styles from './FormulasTOC.module.css';

// // const FormulasTOC = ({ data }) => {
// //   const [expandedFormula, setExpandedFormula] = useState(null);

// //   const columns = useMemo(() => {
// //     const categorized = data.reduce((acc, formula) => {
// //       const category = formula.category;
// //       if (!acc[category]) {
// //         acc[category] = {
// //           name: category,
// //           formulas: [],
// //           totalItems: 0
// //         };
// //       }
// //       acc[category].formulas.push(formula);
// //       acc[category].totalItems = acc[category].formulas.length;
// //       return acc;
// //     }, {});

// //     const categories = Object.values(categorized);
// //     const totalItems = categories.reduce((sum, cat) => sum + cat.totalItems, 0);
// //     const targetItemsPerColumn = Math.ceil(totalItems / 4);

// //     const cols = [[], [], [], []];
// //     let currentCol = 0;
// //     let currentColItems = 0;

// //     categories.forEach(category => {
// //       if (currentColItems + category.totalItems > targetItemsPerColumn && currentCol < 3) {
// //         currentCol++;
// //         currentColItems = 0;
// //       }
// //       cols[currentCol].push(category);
// //       currentColItems += category.totalItems;
// //     });

// //     return cols;
// //   }, [data]);

// //   const handleFormulaClick = (formulaName) => {
// //     setExpandedFormula(expandedFormula === formulaName ? null : formulaName);
// //   };

// //   return (
// //     <div className={styles.pageWrapper}>
// //       <div className={styles.tocContainer}>
// //         {columns.map((column, colIndex) => (
// //           <div key={colIndex} className={styles.column}>
// //             {column.map(category => (
// //               <div key={category.name} className={styles.categoryCard}>
// //                 <div className={styles.categoryHeader}>
// //                   <div className={styles.categoryTitle}>{category.name}</div>
// //                   <div className={styles.headerAccent} />
// //                 </div>
// //                 <div className={styles.formulaList}>
// //                   {category.formulas.map((formula) => (
// //                     <div key={formula.name} className={styles.formulaItem}>
// //                       <button
// //                         onClick={() => handleFormulaClick(formula.name)}
// //                         className={`${styles.formulaButton} ${expandedFormula === formula.name ? styles.expanded : ''}`}
// //                       >
// //                         <span>{formula.name}</span>
// //                         <ChevronDown 
// //                           className={`${styles.chevron} ${expandedFormula === formula.name ? styles.rotated : ''}`}
// //                           size={18}
// //                         />
// //                       </button>
// //                       {expandedFormula === formula.name && (
// //                         <div className={styles.expandedFormula}>
// //                           <InlineMath math={formula.formula.replace(/\$/g, '')} />
// //                         </div>
// //                       )}
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default FormulasTOC;

// import React, { useState, useMemo } from 'react';
// import { InlineMath } from 'react-katex';
// import { ChevronDown } from 'lucide-react';
// import 'katex/dist/katex.min.css';
// import styles from './FormulasTOC.module.css';

// const FormulasTOC = ({ data }) => {
//   const [expandedFormula, setExpandedFormula] = useState(null);

//   const columns = useMemo(() => {
//     // Group by category first
//     const categorized = data.reduce((acc, formula) => {
//       const category = formula.category;
//       if (!acc[category]) {
//         acc[category] = {
//           name: category,
//           formulas: [],
//           totalItems: 0
//         };
//       }
//       acc[category].formulas.push(formula);
//       acc[category].totalItems = acc[category].formulas.length;
//       return acc;
//     }, {});

//     // Convert to array and get categories
//     const categories = Object.values(categorized);
    
//     // Initialize 4 columns
//     const cols = [[], [], [], []];
    
//     // First pass: ensure at least one category per column
//     for (let i = 0; i < 4 && i < categories.length; i++) {
//       cols[i].push(categories[i]);
//     }
    
//     // Second pass: distribute remaining categories by total items
//     let currentCol = 0;
//     let colTotals = cols.map(col => 
//       col.reduce((sum, cat) => sum + (cat?.totalItems || 0), 0)
//     );
    
//     for (let i = 4; i < categories.length; i++) {
//       // Find column with least total items
//       currentCol = colTotals.indexOf(Math.min(...colTotals));
//       cols[currentCol].push(categories[i]);
//       colTotals[currentCol] += categories[i].totalItems;
//     }

//     return cols;
//   }, [data]);

//   const handleFormulaClick = (formulaName) => {
//     setExpandedFormula(expandedFormula === formulaName ? null : formulaName);
//   };

//   return (
//     <div className={styles.pageWrapper}>
//       <div className={styles.tocContainer}>
//         {columns.map((column, colIndex) => (
//           <div key={colIndex} className={styles.column}>
//             {column.map(category => (
//               <div key={category.name} className={styles.categoryCard}>
//                 <div className={styles.categoryHeader}>
//                   <div className={styles.categoryTitle}>{category.name}</div>
//                   <div className={styles.headerAccent} />
//                 </div>
//                 <div className={styles.formulaList}>
//                   {category.formulas.map((formula) => (
//                     <div key={formula.name} className={styles.formulaItem}>
//                       <button
//                         onClick={() => handleFormulaClick(formula.name)}
//                         className={`${styles.formulaButton} ${expandedFormula === formula.name ? styles.expanded : ''}`}
//                       >
//                         <span>{formula.name}</span>
//                         <ChevronDown 
//                           className={`${styles.chevron} ${expandedFormula === formula.name ? styles.rotated : ''}`}
//                           size={18}
//                         />
//                       </button>
//                       {/* {expandedFormula === formula.name && (
//                         <div className={styles.expandedFormula}>
//                           <InlineMath math={formula.formula.replace(/\$/g, '')} />
//                         </div>
//                       )} */}

// {expandedFormula === formula.name && (
//   <div className={styles.expandedFormula}>
//     <div className={styles.formulaContent}>
//       <InlineMath math={formula.formula.replace(/\$/g, '')} />
//       <a 
//         href={`#${formula.name.toLowerCase().replace(/\s+/g, '_')}`}
//         className={styles.learnMore}
//       >
//         Learn More
//       </a>
//     </div>
//   </div>
// )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FormulasTOC;

import React, { useState, useMemo } from 'react';
import { InlineMath } from 'react-katex';
import { ChevronDown } from 'lucide-react';
import 'katex/dist/katex.min.css';
import styles from './FormulasTOC.module.css';

const createItemId = (name) => {
  return name.toLowerCase().replace(/\s+/g, '_');
};

const FormulasTOC = ({ data }) => {
  const [expandedFormula, setExpandedFormula] = useState(null);

  const columns = useMemo(() => {
    // Group by category first
    const categorized = data.reduce((acc, formula) => {
      const category = formula.category;
      if (!acc[category]) {
        acc[category] = {
          name: category,
          formulas: [],
          totalItems: 0
        };
      }
      acc[category].formulas.push({
        ...formula,
        itemId: createItemId(formula.name)
      });
      acc[category].totalItems = acc[category].formulas.length;
      return acc;
    }, {});

    // Convert to array and get categories
    const categories = Object.values(categorized);
    
    // Initialize 4 columns
    const cols = [[], [], [], []];
    
    // First pass: ensure at least one category per column
    for (let i = 0; i < 4 && i < categories.length; i++) {
      cols[i].push(categories[i]);
    }
    
    // Second pass: distribute remaining categories by total items
    let currentCol = 0;
    let colTotals = cols.map(col => 
      col.reduce((sum, cat) => sum + (cat?.totalItems || 0), 0)
    );
    
    for (let i = 4; i < categories.length; i++) {
      // Find column with least total items
      currentCol = colTotals.indexOf(Math.min(...colTotals));
      cols[currentCol].push(categories[i]);
      colTotals[currentCol] += categories[i].totalItems;
    }

    return cols;
  }, [data]);

  const handleFormulaClick = (formulaName) => {
    setExpandedFormula(expandedFormula === formulaName ? null : formulaName);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.tocContainer}>
        {columns.map((column, colIndex) => (
          <div key={colIndex} className={styles.column}>
            {column.map(category => (
              <div key={category.name} className={styles.categoryCard}>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryTitle}>{category.name}</div>
                  <div className={styles.headerAccent} />
                </div>
                <div className={styles.formulaList}>
                  {category.formulas.map((formula) => (
                    <div key={formula.name} className={styles.formulaItem}>
                      <button
                        onClick={() => handleFormulaClick(formula.name)}
                        className={`${styles.formulaButton} ${expandedFormula === formula.name ? styles.expanded : ''}`}
                      >
                        <span>{formula.name}</span>
                        <ChevronDown 
                          className={`${styles.chevron} ${expandedFormula === formula.name ? styles.rotated : ''}`}
                          size={18}
                        />
                      </button>
                      {expandedFormula === formula.name && (
                        <div className={styles.expandedFormula}>
                          <div className={styles.formulaContent}>
                            <InlineMath math={formula.formula.replace(/\$/g, '')} />
                            <a 
                              href={`#${formula.itemId}`}
                              className={styles.learnMore}
                              onClick={(e) => {
                                e.stopPropagation();
                                const element = document.getElementById(`${formula.itemId}section`);
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                  // Trigger click after scrolling
                                  setTimeout(() => {
                                    element.click();
                                  }, 100);
                                }
                              }}
                            >
                              Learn More
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormulasTOC;