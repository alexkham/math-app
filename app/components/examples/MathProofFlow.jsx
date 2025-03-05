// // // components/MathProofFlow.jsx
// // import React from 'react';
// // import { processContent } from '@/app/utils/contentProcessor';
// // import { InlineMath, BlockMath } from 'react-katex';
// // import 'katex/dist/katex.min.css';

// // const MathProofFlow = ({ steps = [], title = "", arrowSymbol = "→" }) => {
// //   // Define inline styles
// //   const styles = {
// //     container: {
// //       fontFamily: 'system-ui, -apple-system, sans-serif',
// //       maxWidth: '800px',
// //       margin: '0 auto',
// //       padding: '20px',
// //     },
// //     title: {
// //       textAlign: 'center',
// //       fontSize: '24px',
// //       fontWeight: 'bold',
// //       margin: '0 0 20px 0',
// //       color: '#333',
// //     },
// //     stepsContainer: {
// //       display: 'flex',
// //       flexDirection: 'column',
// //       gap: '16px',
// //     },
// //     stepWrapper: {
// //       display: 'flex',
// //       flexDirection: 'column',
// //       alignItems: 'center',
// //     },
// //     stepCard: {
// //       width: '100%',
// //       backgroundColor: '#f7f7f7',
// //       borderRadius: '8px',
// //       padding: '16px',
// //       boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
// //       display: 'flex',
// //       alignItems: 'flex-start',
// //       border: '1px solid #e0e0e0',
// //     },
// //     stepNumber: {
// //       backgroundColor: '#3b82f6',
// //       color: 'white',
// //       borderRadius: '50%',
// //       width: '28px',
// //       height: '28px',
// //       display: 'flex',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       fontWeight: 'bold',
// //       marginRight: '12px',
// //       flexShrink: 0,
// //     },
// //     stepContent: {
// //       fontSize: '16px',
// //       lineHeight: '1.5',
// //       color: '#333',
// //     },
// //     arrow: {
// //       margin: '8px 0',
// //       color: '#3b82f6',
// //       fontSize: '20px',
// //       fontWeight: 'bold',
// //     },
// //     emptyState: {
// //       textAlign: 'center',
// //       padding: '20px',
// //       color: '#666',
// //       border: '1px dashed #ccc',
// //       borderRadius: '8px',
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
// //               <div style={styles.stepNumber}>{index + 1}</div>
// //               <div style={styles.stepContent}>
// //                 {typeof step === 'string' ? processContent(step) : step}
// //               </div>
// //             </div>
// //             {index < steps.length - 1 && (
// //               <div style={styles.arrow}>{arrowSymbol}</div>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MathProofFlow;

// // components/MathProofFlow.jsx
// import React from 'react';
// import { processContent } from '@/app/utils/contentProcessor';

// const MathProofFlow = ({ steps = [], title = "", arrowSymbol = "↓", showNumbers = true }) => {
//   // Define inline styles
//   const styles = {
//     container: {
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       maxWidth: '800px',
//       margin: '0 auto',
//       padding: '20px',
//     },
//     title: {
//       textAlign: 'center',
//       fontSize: '24px',
//       fontWeight: 'bold',
//       margin: '0 0 20px 0',
//       color: '#333',
//     },
//     stepsContainer: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '16px',
//     },
//     stepWrapper: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     stepCard: {
//       width: '100%',
//       backgroundColor: '#f7f7f7',
//       borderRadius: '8px',
//       padding: '16px',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//       display: 'flex',
//       alignItems: 'flex-start',
//       border: '1px solid #e0e0e0',
//     },
//     stepNumber: {
//       backgroundColor: '#3b82f6',
//       color: 'white',
//       borderRadius: '50%',
//       width: '28px',
//       height: '28px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       fontWeight: 'bold',
//       marginRight: '12px',
//       flexShrink: 0,
//     },
//     stepContent: {
//       fontSize: '16px',
//       lineHeight: '1.5',
//       color: '#333',
//     },
//     arrow: {
//       margin: '8px 0',
//       color: '#3b82f6',
//       fontSize: '20px',
//       fontWeight: 'bold',
//     },
//     emptyState: {
//       textAlign: 'center',
//       padding: '20px',
//       color: '#666',
//       border: '1px dashed #ccc',
//       borderRadius: '8px',
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
//                 {typeof step === 'string' ? processContent(step) : step}
//               </div>
//             </div>
//             {index < steps.length - 1 && (
//               <div style={styles.arrow}>{arrowSymbol}</div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MathProofFlow;


// components/MathProofFlow.jsx
import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';
import themes from './mathProofThemes';

const MathProofFlow = ({ 
  steps = [], 
  title = " ", 
  arrowSymbol = "↓", 
  showNumbers = true,
  theme = "default"
}) => {
  // Get theme styles
  const styles = themes[theme] || themes.default;

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
                {typeof step === 'string' ? processContent(step) : step}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div style={styles.arrow}>{arrowSymbol}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MathProofFlow;