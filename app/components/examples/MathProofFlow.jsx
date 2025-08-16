
// // // // // // // import React from 'react';
// // // // // // // import { processContent } from '@/app/utils/contentProcessor';
// // // // // // // import themes from './mathProofThemes';

// // // // // // // const MathProofFlow = ({ 
// // // // // // //   steps = [], 
// // // // // // //   title = " ", 
// // // // // // //   arrowSymbol = "↓", 
// // // // // // //   showNumbers = true,
// // // // // // //   theme = "default"
// // // // // // // }) => {
// // // // // // //   // Get theme styles
// // // // // // //   const styles = themes[theme] || themes.default;

// // // // // // //   // Handle empty state
// // // // // // //   if (!steps || !Array.isArray(steps) || steps.length === 0) {
// // // // // // //     return (
// // // // // // //       <div style={styles.container}>
// // // // // // //         <h2 style={styles.title}>{title}</h2>
// // // // // // //         <div style={styles.emptyState}>No proof steps provided</div>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div style={styles.container}>
// // // // // // //       <h2 style={styles.title}>{title}</h2>
// // // // // // //       <div style={styles.stepsContainer}>
// // // // // // //         {steps.map((step, index) => (
// // // // // // //           <div key={index} style={styles.stepWrapper}>
// // // // // // //             <div style={styles.stepCard}>
// // // // // // //               {showNumbers && <div style={styles.stepNumber}>{index + 1}</div>}
// // // // // // //               <div style={styles.stepContent}>
// // // // // // //                 {typeof step === 'string' ? processContent(step) : step}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //             {index < steps.length - 1 && (
// // // // // // //               <div style={styles.arrow}>{arrowSymbol}</div>
// // // // // // //             )}
// // // // // // //           </div>
// // // // // // //         ))}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default MathProofFlow;


// // // // // // import React from 'react';
// // // // // // import { processContent } from '@/app/utils/contentProcessor';
// // // // // // import themes from './mathProofThemes';

// // // // // // const MathProofFlow = ({ 
// // // // // //   steps = [], 
// // // // // //   title = " ", 
// // // // // //   arrowSymbol = "↓", 
// // // // // //   showNumbers = true,
// // // // // //   theme = "default",
// // // // // //   arrow = true
// // // // // // }) => {
// // // // // //   // Get theme styles
// // // // // //   const styles = themes[theme] || themes.default;

// // // // // //   // Add explanation box styles
// // // // // //   const explanationStyles = {
// // // // // //     explanationBox: {
// // // // // //       backgroundColor: '#f8f9fa',
// // // // // //       border: '1px solid #e9ecef',
// // // // // //       borderRadius: '8px',
// // // // // //       padding: '12px 16px',
// // // // // //       margin: '8px 0',
// // // // // //       fontSize: '14px',
// // // // // //       color: '#495057',
// // // // // //       fontStyle: 'italic',
// // // // // //       boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
// // // // // //       position: 'relative'
// // // // // //     },
// // // // // //     explanationLabel: {
// // // // // //       fontSize: '12px',
// // // // // //       fontWeight: 'bold',
// // // // // //       color: '#6c757d',
// // // // // //       textTransform: 'uppercase',
// // // // // //       letterSpacing: '0.5px',
// // // // // //       marginBottom: '4px'
// // // // // //     }
// // // // // //   };

// // // // // //   // Handle empty state
// // // // // //   if (!steps || !Array.isArray(steps) || steps.length === 0) {
// // // // // //     return (
// // // // // //       <div style={styles.container}>
// // // // // //         <h2 style={styles.title}>{title}</h2>
// // // // // //         <div style={styles.emptyState}>No proof steps provided</div>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <div style={styles.container}>
// // // // // //       <h2 style={styles.title}>{title}</h2>
// // // // // //       <div style={styles.stepsContainer}>
// // // // // //         {steps.map((step, index) => (
// // // // // //           <div key={index} style={styles.stepWrapper}>
// // // // // //             <div style={styles.stepCard}>
// // // // // //               {showNumbers && <div style={styles.stepNumber}>{index + 1}</div>}
// // // // // //               <div style={styles.stepContent}>
// // // // // //                 {typeof step === 'string' ? 
// // // // // //                   processContent(step) : 
// // // // // //                   typeof step === 'object' && step.content ? 
// // // // // //                     processContent(step.content) : 
// // // // // //                     step
// // // // // //                 }
// // // // // //               </div>
// // // // // //             </div>
            
// // // // // //             {/* Show explanation if it exists */}
// // // // // //             {typeof step === 'object' && step.explanation && (
// // // // // //               <div style={explanationStyles.explanationBox}>
// // // // // //                 <div style={explanationStyles.explanationLabel}>Explanation</div>
// // // // // //                 {processContent(step.explanation)}
// // // // // //               </div>
// // // // // //             )}
            
// // // // // //             {/* Show arrow only if arrow prop is true and not the last step */}
// // // // // //             {arrow && index < steps.length - 1 && (
// // // // // //               <div style={styles.arrow}>{arrowSymbol}</div>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default MathProofFlow;


// // // // // import React from 'react';
// // // // // import { processContent } from '@/app/utils/contentProcessor';
// // // // // import themes from './mathProofThemes';

// // // // // const MathProofFlow = ({ 
// // // // //   steps = [], 
// // // // //   title = " ", 
// // // // //   arrowSymbol = "↓", 
// // // // //   showNumbers = true,
// // // // //   theme = "default",
// // // // //   arrow = true
// // // // // }) => {
// // // // //   // Get theme styles
// // // // //   const styles = themes[theme] || themes.default;

// // // // //   // Add explanation box styles
// // // // //   const explanationStyles = {
// // // // //     explanationBox: {
// // // // //       backgroundColor: '#f8f9fa',
// // // // //       border: '1px solid #e9ecef',
// // // // //       borderRadius: '8px',
// // // // //       padding: '12px 16px',
// // // // //       margin: '8px 0',
// // // // //       fontSize: '14px',
// // // // //       color: '#495057',
// // // // //       fontStyle: 'italic',
// // // // //       boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
// // // // //       position: 'relative'
// // // // //     },
// // // // //     explanationLabel: {
// // // // //       fontSize: '12px',
// // // // //       fontWeight: 'bold',
// // // // //       color: '#6c757d',
// // // // //       textTransform: 'uppercase',
// // // // //       letterSpacing: '0.5px',
// // // // //       marginBottom: '4px'
// // // // //     }
// // // // //   };

// // // // //   // Handle empty state
// // // // //   if (!steps || !Array.isArray(steps) || steps.length === 0) {
// // // // //     return (
// // // // //       <div style={styles.container}>
// // // // //         <h2 style={styles.title}>{title}</h2>
// // // // //         <div style={styles.emptyState}>No proof steps provided</div>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div style={styles.container}>
// // // // //       <h2 style={styles.title}>{title}</h2>
// // // // //       <div style={styles.stepsContainer}>
// // // // //         {steps.map((step, index) => (
// // // // //           <div key={index} style={styles.stepWrapper}>
// // // // //             <div style={styles.stepCard}>
// // // // //               {showNumbers && <div style={styles.stepNumber}>{index + 1}</div>}
// // // // //               <div style={styles.stepContent}>
// // // // //                 {typeof step === 'string' ? 
// // // // //                   processContent(step) : 
// // // // //                   typeof step === 'object' && step.content ? 
// // // // //                     processContent(step.content) : 
// // // // //                     step
// // // // //                 }
// // // // //               </div>
// // // // //             </div>
            
// // // // //             {/* Show arrow only if arrow prop is true and not the last step */}
// // // // //             {arrow && index < steps.length - 1 && (
// // // // //               <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
// // // // //                 <div style={styles.arrow}>{arrowSymbol}</div>
// // // // //                 {/* Show explanation if it exists */}
// // // // //                 {typeof step === 'object' && step.explanation && (
// // // // //                   <div style={explanationStyles.explanationBox}>
// // // // //                     <div style={explanationStyles.explanationLabel}>Explanation</div>
// // // // //                     {processContent(step.explanation)}
// // // // //                   </div>
// // // // //                 )}
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default MathProofFlow;


// // // // import React from 'react';
// // // // import { processContent } from '@/app/utils/contentProcessor';
// // // // import themes from './mathProofThemes';

// // // // const MathProofFlow = ({ 
// // // //   steps = [], 
// // // //   title = " ", 
// // // //   arrowSymbol = "↓", 
// // // //   showNumbers = true,
// // // //   theme = "default",
// // // //   arrow = true
// // // // }) => {
// // // //   // Get theme styles
// // // //   const styles = themes[theme] || themes.default;

// // // //   // Add explanation box styles
// // // //   const explanationStyles = {
// // // //     explanationBox: {
// // // //       backgroundColor: '#fff3cd',
// // // //       border: '2px solid #ffeaa7',
// // // //       borderRadius: '12px',
// // // //       padding: '16px 20px',
// // // //       fontSize: '14px',
// // // //       color: '#856404',
// // // //       fontStyle: 'italic',
// // // //       boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
// // // //       position: 'absolute',
// // // //       left: '60px',
// // // //       top: '50%',
// // // //       transform: 'translateY(-50%)',
// // // //       minWidth: '200px',
// // // //       maxWidth: '300px',
// // // //       zIndex: 10
// // // //     },
// // // //     explanationLabel: {
// // // //       fontSize: '12px',
// // // //       fontWeight: 'bold',
// // // //       color: '#b8860b',
// // // //       textTransform: 'uppercase',
// // // //       letterSpacing: '0.5px',
// // // //       marginBottom: '8px'
// // // //     },
// // // //     arrowContainer: {
// // // //       position: 'relative',
// // // //       display: 'flex',
// // // //       justifyContent: 'center'
// // // //     }
// // // //   };

// // // //   // Handle empty state
// // // //   if (!steps || !Array.isArray(steps) || steps.length === 0) {
// // // //     return (
// // // //       <div style={styles.container}>
// // // //         <h2 style={styles.title}>{title}</h2>
// // // //         <div style={styles.emptyState}>No proof steps provided</div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div style={styles.container}>
// // // //       <h2 style={styles.title}>{title}</h2>
// // // //       <div style={styles.stepsContainer}>
// // // //         {steps.map((step, index) => (
// // // //           <div key={index} style={styles.stepWrapper}>
// // // //             <div style={styles.stepCard}>
// // // //               {showNumbers && <div style={styles.stepNumber}>{index + 1}</div>}
// // // //               <div style={styles.stepContent}>
// // // //                 {typeof step === 'string' ? 
// // // //                   processContent(step) : 
// // // //                   typeof step === 'object' && step.content ? 
// // // //                     processContent(step.content) : 
// // // //                     step
// // // //                 }
// // // //               </div>
// // // //             </div>
            
// // // //             {/* Show arrow only if arrow prop is true and not the last step */}
// // // //             {arrow && index < steps.length - 1 && (
// // // //               <div style={explanationStyles.arrowContainer}>
// // // //                 <div style={styles.arrow}>{arrowSymbol}</div>
// // // //                 {/* Show explanation if it exists */}
// // // //                 {typeof step === 'object' && step.explanation && (
// // // //                   <div style={explanationStyles.explanationBox}>
// // // //                     <div style={explanationStyles.explanationLabel}>Explanation</div>
// // // //                     {processContent(step.explanation)}
// // // //                   </div>
// // // //                 )}
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default MathProofFlow;


// // // import React from 'react';
// // // import { processContent } from '@/app/utils/contentProcessor';
// // // import themes from './mathProofThemes';

// // // const MathProofFlow = ({ 
// // //   steps = [], 
// // //   title = " ", 
// // //   arrowSymbol = "↓", 
// // //   showNumbers = true,
// // //   theme = "default",
// // //   arrow = true
// // // }) => {
// // //   // Get theme styles
// // //   const styles = themes[theme] || themes.default;

// // //   // Add explanation box styles
// // //   const explanationStyles = {
// // //     explanationBox: {
// // //       backgroundColor: '#f8f9fa',
// // //       border: '1px solid #dee2e6',
// // //       borderRadius: '6px',
// // //       padding: '12px 16px',
// // //       fontSize: '14px',
// // //       color: '#495057',
// // //       fontStyle: 'italic',
// // //       marginLeft: '20px',
// // //       maxWidth: '250px'
// // //     },
// // //     explanationLabel: {
// // //       fontSize: '11px',
// // //       fontWeight: 'bold',
// // //       color: '#6c757d',
// // //       textTransform: 'uppercase',
// // //       letterSpacing: '0.5px',
// // //       marginBottom: '6px'
// // //     },
// // //     arrowContainer: {
// // //       display: 'flex',
// // //       alignItems: 'center',
// // //       justifyContent: 'center'
// // //     }
// // //   };

// // //   // Handle empty state
// // //   if (!steps || !Array.isArray(steps) || steps.length === 0) {
// // //     return (
// // //       <div style={styles.container}>
// // //         <h2 style={styles.title}>{title}</h2>
// // //         <div style={styles.emptyState}>No proof steps provided</div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div style={styles.container}>
// // //       <h2 style={styles.title}>{title}</h2>
// // //       <div style={styles.stepsContainer}>
// // //         {steps.map((step, index) => (
// // //           <div key={index} style={styles.stepWrapper}>
// // //             <div style={styles.stepCard}>
// // //               {showNumbers && <div style={styles.stepNumber}>{index + 1}</div>}
// // //               <div style={styles.stepContent}>
// // //                 {typeof step === 'string' ? 
// // //                   processContent(step) : 
// // //                   typeof step === 'object' && step.content ? 
// // //                     processContent(step.content) : 
// // //                     step
// // //                 }
// // //               </div>
// // //             </div>
            
// // //             {/* Show arrow only if arrow prop is true and not the last step */}
// // //             {arrow && index < steps.length - 1 && (
// // //               <div style={explanationStyles.arrowContainer}>
// // //                 <div style={styles.arrow}>{arrowSymbol}</div>
// // //                 {/* Show explanation if it exists */}
// // //                 {typeof step === 'object' && step.explanation && (
// // //                   <div style={explanationStyles.explanationBox}>
// // //                     <div style={explanationStyles.explanationLabel}>Explanation</div>
// // //                     {processContent(step.explanation)}
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             )}
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default MathProofFlow;


// // import React from 'react';
// // import { processContent } from '@/app/utils/contentProcessor';
// // import themes from './mathProofThemes';

// // const MathProofFlow = ({ 
// //   steps = [], 
// //   title = " ", 
// //   arrowSymbol = "↓", 
// //   showNumbers = true,
// //   theme = "default",
// //   arrow = true
// // }) => {
// //   // Get theme styles
// //   const styles = themes[theme] || themes.default;

// //   // Add explanation box styles
// //   const explanationStyles = {
// //     explanationBox: {
// //       backgroundColor: '#f8f9fa',
// //       border: '1px solid #dee2e6',
// //       borderRadius: '6px',
// //       padding: '12px 16px',
// //       fontSize: '14px',
// //       color: '#495057',
// //       fontStyle: 'italic',
// //       margin: '10px auto',
// //       maxWidth: '400px',
// //       textAlign: 'center'
// //     },
// //     explanationLabel: {
// //       fontSize: '11px',
// //       fontWeight: 'bold',
// //       color: '#6c757d',
// //       textTransform: 'uppercase',
// //       letterSpacing: '0.5px',
// //       marginBottom: '6px'
// //     }
// //   };

// //   // Handle empty state
// //   if (!steps || !Array.isArray(steps) || steps.length === 0) {
// //     return (
// //       <div style={styles.container}>
// //         <h2 style={styles.title}>{title}</h2>
// //         <div style={styles.emptyState}>No proof steps provided</div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div style={styles.container}>
// //       <h2 style={styles.title}>{title}</h2>
// //       <div style={styles.stepsContainer}>
// //         {steps.map((step, index) => (
// //           <div key={index} style={styles.stepWrapper}>
// //             <div style={styles.stepCard}>
// //               {showNumbers && <div style={styles.stepNumber}>{index + 1}</div>}
// //               <div style={styles.stepContent}>
// //                 {typeof step === 'string' ? 
// //                   processContent(step) : 
// //                   typeof step === 'object' && step.content ? 
// //                     processContent(step.content) : 
// //                     step
// //                 }
// //               </div>
// //             </div>
            
// //             {/* Show arrow only if arrow prop is true and not the last step */}
// //             {arrow && index < steps.length - 1 && (
// //               <div style={styles.arrow}>{arrowSymbol}</div>
// //             )}
            
// //             {/* Show explanation if it exists and arrow is enabled */}
// //             {arrow && index < steps.length - 1 && typeof step === 'object' && step.explanation && (
// //               <div style={explanationStyles.explanationBox}>
// //                 <div style={explanationStyles.explanationLabel}>Explanation</div>
// //                 {processContent(step.explanation)}
// //               </div>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MathProofFlow;


// import React from 'react';
// import { processContent } from '@/app/utils/contentProcessor';
// import themes from './mathProofThemes';

// const MathProofFlow = ({ 
//   steps = [], 
//   title = " ", 
//   arrowSymbol = "↓", 
//   showNumbers = true,
//   theme = "default",
//   arrow = true
// }) => {
//   // Get theme styles
//   const styles = themes[theme] || themes.default;

//   // Add explanation box styles
//   const explanationStyles = {
//     explanationBox: {
//       backgroundColor: '#f8f9fa',
//       border: '1px solid #dee2e6',
//       borderRadius: '6px',
//       padding: '8px 12px',
//       fontSize: '13px',
//       color: '#495057',
//       fontStyle: 'italic',
//       maxWidth: '200px',
//       position: 'absolute',
//       left: '50%',
//       marginLeft: '30px',
//       top: '50%',
//       transform: 'translateY(-50%)'
//     },
//     explanationLabel: {
//       fontSize: '10px',
//       fontWeight: 'bold',
//       color: '#6c757d',
//       textTransform: 'uppercase',
//       letterSpacing: '0.5px',
//       marginBottom: '4px'
//     },
//     arrowWrapper: {
//       position: 'relative',
//       height: '60px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center'
//     }
//   };

//   // Handle empty state
//   if (!steps || !Array.isArray(steps) || steps.length === 0) {
//     return (
//       <div style={styles.container}>
//         <h2 style={styles.title}>{title}</h2>
//         <div style={styles.emptyState}>No proof steps provided</div>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>{title}</h2>
//       <div style={styles.stepsContainer}>
//         {steps.map((step, index) => (
//           <div key={index} style={styles.stepWrapper}>
//             <div style={styles.stepCard}>
//               {showNumbers && <div style={styles.stepNumber}>{index + 1}</div>}
//               <div style={styles.stepContent}>
//                 {typeof step === 'string' ? 
//                   processContent(step) : 
//                   typeof step === 'object' && step.content ? 
//                     processContent(step.content) : 
//                     step
//                 }
//               </div>
//             </div>
            
//             {/* Show arrow only if arrow prop is true and not the last step */}
//             {arrow && index < steps.length - 1 && (
//               <div style={explanationStyles.arrowWrapper}>
//                 <div style={styles.arrow}>{arrowSymbol}</div>
//                 {/* Show explanation if it exists */}
//                 {typeof step === 'object' && step.explanation && (
//                   <div style={explanationStyles.explanationBox}>
//                     <div style={explanationStyles.explanationLabel}>Explanation</div>
//                     {processContent(step.explanation)}
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MathProofFlow;


import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';
import themes from './mathProofThemes';

const MathProofFlow = ({ 
  steps = [], 
  title = " ", 
  arrowSymbol = "↓", 
  showNumbers = true,
  theme = "default",
  arrow = true
}) => {
  // Get theme styles
  const styles = themes[theme] || themes.default;

  // Add explanation box styles
  const explanationStyles = {
    explanationBox: {
      backgroundColor: '#f8f9fa',
      border: '1px solid #dee2e6',
      borderRadius: '6px',
      padding: '8px 12px',
      fontSize: '13px',
      color: '#495057',
      fontStyle: 'italic',
      maxWidth: '200px',
      marginLeft: '20px',
      marginTop:'20px'
    },
    explanationLabel: {
      fontSize: '10px',
      fontWeight: 'bold',
      color: '#6c757d',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      marginBottom: '4px'
    },
    arrowWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60px',
      gap: '0'
    },
    arrowContainer: {
      display: 'flex',
      alignItems: 'center'
    }
  };

  // Handle empty state
  if (!steps || !Array.isArray(steps) || steps.length === 0) {
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>{title}</h2>
        <div style={styles.emptyState}>No proof steps provided</div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.stepsContainer}>
        {steps.map((step, index) => (
          <div key={index} style={styles.stepWrapper}>
            <div style={styles.stepCard}>
              {showNumbers && <div style={styles.stepNumber}>{index + 1}</div>}
              <div style={styles.stepContent}>
                {typeof step === 'string' ? 
                  processContent(step) : 
                  typeof step === 'object' && step.content ? 
                    processContent(step.content) : 
                    step
                }
              </div>
            </div>
            
            {/* Show arrow only if arrow prop is true and not the last step */}
            {arrow && index < steps.length - 1 && (
              <div style={explanationStyles.arrowWrapper}>
                <div style={explanationStyles.arrowContainer}>
                  <div style={styles.arrow}>{arrowSymbol}</div>
                  {/* Show explanation if it exists */}
                  {typeof step === 'object' && step.explanation && (
                    <div style={explanationStyles.explanationBox}>
                      {/* <div style={explanationStyles.explanationLabel}>Explanation</div> */}
                      {processContent(step.explanation)}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MathProofFlow;