// // // // // // import React from 'react';

// // // // // // const defaultContent = {
// // // // // //   title: "Data Classification Challenges",
// // // // // //   leftContent: {
// // // // // //     title: "Complexity Issues",
// // // // // //     description: "Complex algorithms require more computational resources and training time"
// // // // // //   },
// // // // // //   rightContent: {
// // // // // //     title: "Data Quality Impact",
// // // // // //     description: "Poor data quality can significantly affect model performance and accuracy"
// // // // // //   }
// // // // // // };

// // // // // // const styles = {
// // // // // //   container: {
// // // // // //     width: '100%',
// // // // // //     maxWidth: '1024px',
// // // // // //     margin: '0 auto'
// // // // // //   },
// // // // // //   title: {
// // // // // //     fontSize: '24px',
// // // // // //     fontWeight: 'bold',
// // // // // //     textAlign: 'center',
// // // // // //     marginBottom: '40px'
// // // // // //   },
// // // // // //   contentWrapper: {
// // // // // //     position: 'relative',
// // // // // //     height: '200px'
// // // // // //   },
// // // // // //   arrow: {
// // // // // //     position: 'absolute',
// // // // // //     top: 0,
// // // // // //     width: '50%',
// // // // // //     height: '100%'
// // // // // //   },
// // // // // //   leftArrow: {
// // // // // //     left: 0
// // // // // //   },
// // // // // //   rightArrow: {
// // // // // //     right: 0
// // // // // //   },
// // // // // //   contentContainer: {
// // // // // //     position: 'relative',
// // // // // //     display: 'flex',
// // // // // //     justifyContent: 'space-between',
// // // // // //     padding: '30px 0 60px'
// // // // // //   },
// // // // // //   contentBox: {
// // // // // //     width: '33%',
// // // // // //     position: 'relative',
// // // // // //     zIndex: 1
// // // // // //   },
// // // // // //   leftContent: {
// // // // // //     paddingLeft: '16px',
    
// // // // // //   },
// // // // // //   rightContent: {
// // // // // //     paddingRight: '16px',
// // // // // //     textAlign: 'right'
// // // // // //   },
// // // // // //   contentTitle: {
// // // // // //     fontSize: '20px',
// // // // // //     fontWeight: 'bold',
// // // // // //     marginBottom: '16px'
// // // // // //   },
// // // // // //   contentText: {
// // // // // //     color: '#4a5568'
// // // // // //   }
// // // // // // };

// // // // // // const ArrowSplitBreakdown = ({ 
// // // // // //   title = defaultContent.title, 
// // // // // //   leftContent = defaultContent.leftContent,
// // // // // //   rightContent = defaultContent.rightContent
// // // // // // }) => {
// // // // // //   return (
// // // // // //     <div style={styles.container}>
// // // // // //       <h2 style={styles.title}>
// // // // // //         {title}
// // // // // //       </h2>
// // // // // //       <div style={styles.contentWrapper}>
// // // // // //         {/* Left Arrow */}
// // // // // //         {/* <svg style={{...styles.arrow, ...styles.leftArrow}} viewBox="0 0 200 100">
// // // // // //           <path
// // // // // //             d="M10 50 C 70 50, 130 20, 190 50"
// // // // // //             stroke="#4A90E2"
// // // // // //             strokeWidth="40"
// // // // // //             fill="none"
// // // // // //             style={{ opacity: 0.8 }}
// // // // // //           />
// // // // // //         </svg> */}
        
// // // // // //         {/* Right Arrow */}
// // // // // //         {/* <svg style={{...styles.arrow, ...styles.rightArrow}} viewBox="0 0 200 100">
// // // // // //           <path
// // // // // //             d="M10 50 C 70 50, 130 80, 190 50"
// // // // // //             stroke="#87CEEB"
// // // // // //             strokeWidth="40"
// // // // // //             fill="none"
// // // // // //             style={{ opacity: 0.8 }}
// // // // // //           />
// // // // // //         </svg> */}

// // // // // //         <div style={styles.contentContainer}>
// // // // // //           <div style={{...styles.contentBox, ...styles.leftContent,
// // // // // //             backgroundColor:'red',width:'45%'}}>
// // // // // //             <h3 style={styles.contentTitle}>{leftContent.title}</h3>
// // // // // //             <p style={styles.contentText}>{leftContent.description}</p>
// // // // // //           </div>
          
// // // // // //           <div style={{...styles.contentBox, ...styles.rightContent,backgroundColor:'yellow'}}>
// // // // // //             <h3 style={styles.contentTitle}>{rightContent.title}</h3>
// // // // // //             <p style={styles.contentText}>{rightContent.description}</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ArrowSplitBreakdown;

// // // // // import React from 'react';

// // // // // const defaultContent = {
// // // // //   title: "Data Classification Challenges",
// // // // //   leftContent: {
// // // // //     title: "Complexity Issues",
// // // // //     description: "Complex algorithms require more computational resources and training time"
// // // // //   },
// // // // //   rightContent: {
// // // // //     title: "Data Quality Impact",
// // // // //     description: "Poor data quality can significantly affect model performance and accuracy"
// // // // //   }
// // // // // };

// // // // // const styles = {
// // // // //   container: {
// // // // //     width: '100%',
// // // // //     maxWidth: '1024px',
// // // // //     margin: '0 auto'
// // // // //   },
// // // // //   title: {
// // // // //     fontSize: '24px',
// // // // //     fontWeight: 'bold',
// // // // //     textAlign: 'center',
// // // // //     marginBottom: '40px'
// // // // //   },
// // // // //   contentWrapper: {
// // // // //     position: 'relative',
// // // // //     height: '200px'
// // // // //   },
// // // // //   arrow: {
// // // // //     position: 'absolute',
// // // // //     top: 0,
// // // // //     width: '50%',
// // // // //     height: '100%'
// // // // //   },
// // // // //   leftArrow: {
// // // // //     left: 0
// // // // //   },
// // // // //   rightArrow: {
// // // // //     right: 0
// // // // //   },
// // // // //   contentContainer: {
// // // // //     position: 'relative',
// // // // //     display: 'flex',
// // // // //     justifyContent: 'space-between',
// // // // //     padding: '30px 0 60px'
// // // // //   },
// // // // //   contentBox: {
// // // // //     width: '33%',
// // // // //     position: 'relative',
// // // // //     zIndex: 1,
// // // // //     padding: '20px',
// // // // //     borderRadius: '8px',
// // // // //     backgroundColor: '#f8f9fa'  // Light gray background
// // // // //   },
// // // // //   leftContent: {
// // // // //     paddingLeft: '16px'
// // // // //   },
// // // // //   rightContent: {
// // // // //     paddingRight: '16px',
// // // // //     textAlign: 'right'
// // // // //   },
// // // // //   contentTitle: {
// // // // //     fontSize: '20px',
// // // // //     fontWeight: 'bold',
// // // // //     marginBottom: '16px'
// // // // //   },
// // // // //   contentText: {
// // // // //     color: '#4a5568'
// // // // //   }
// // // // // };

// // // // // const ArrowSplitBreakdown = ({ 
// // // // //   title = defaultContent.title, 
// // // // //   leftContent = defaultContent.leftContent,
// // // // //   rightContent = defaultContent.rightContent
// // // // // }) => {
// // // // //   return (
// // // // //     <div style={styles.container}>
// // // // //       <h2 style={styles.title}>
// // // // //         {title}
// // // // //       </h2>
// // // // //       <div style={styles.contentWrapper}>
// // // // //         {/* Left Arrow */}
// // // // //         <svg style={{...styles.arrow, ...styles.leftArrow}} viewBox="0 0 200 100">
// // // // //           <path
// // // // //             d="M10 50 C 70 50, 130 20, 190 50"
// // // // //             stroke="#4A90E2"
// // // // //             strokeWidth="40"
// // // // //             fill="none"
// // // // //             style={{ opacity: 0.8 }}
// // // // //           />
// // // // //         </svg>
        
// // // // //         {/* Right Arrow */}
// // // // //         <svg style={{...styles.arrow, ...styles.rightArrow}} viewBox="0 0 200 100">
// // // // //           <path
// // // // //             d="M10 50 C 70 50, 130 80, 190 50"
// // // // //             stroke="#87CEEB"
// // // // //             strokeWidth="40"
// // // // //             fill="none"
// // // // //             style={{ opacity: 0.8 }}
// // // // //           />
// // // // //         </svg>

// // // // //         <div style={styles.contentContainer}>
// // // // //           <div style={{...styles.contentBox, ...styles.leftContent}}>
// // // // //             <h3 style={styles.contentTitle}>{leftContent.title}</h3>
// // // // //             <p style={styles.contentText}>{leftContent.description}</p>
// // // // //           </div>
          
// // // // //           <div style={{...styles.contentBox, ...styles.rightContent}}>
// // // // //             <h3 style={styles.contentTitle}>{rightContent.title}</h3>
// // // // //             <p style={styles.contentText}>{rightContent.description}</p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ArrowSplitBreakdown;


// // // // import React from 'react';

// // // // const defaultContent = {
// // // //   title: "Data Classification Challenges",
// // // //   leftContent: {
// // // //     title: "Complexity Issues",
// // // //     description: "Complex algorithms require more computational resources and training time"
// // // //   },
// // // //   rightContent: {
// // // //     title: "Data Quality Impact",
// // // //     description: "Poor data quality can significantly affect model performance and accuracy"
// // // //   }
// // // // };

// // // // const baseStyles = {
// // // //   container: {
// // // //     width: '100%',
// // // //     maxWidth: '1024px',
// // // //     margin: '0 auto'
// // // //   },
// // // //   title: {
// // // //     fontSize: '24px',
// // // //     fontWeight: 'bold',
// // // //     textAlign: 'center',
// // // //     marginBottom: '40px'
// // // //   },
// // // //   contentWrapper: {
// // // //     position: 'relative',
// // // //     height: '200px'
// // // //   },
// // // //   arrow: {
// // // //     position: 'absolute',
// // // //     top: 0,
// // // //     width: '50%',
// // // //     height: '100%'
// // // //   },
// // // //   leftArrow: {
// // // //     left: 0
// // // //   },
// // // //   rightArrow: {
// // // //     right: 0
// // // //   },
// // // //   contentContainer: {
// // // //     position: 'relative',
// // // //     display: 'flex',
// // // //     justifyContent: 'space-between',
// // // //     padding: '30px 0 60px'
// // // //   },
// // // //   contentBox: {
// // // //     width: '33%',
// // // //     position: 'relative',
// // // //     zIndex: 1,
// // // //     padding: '20px',
// // // //     borderRadius: '8px'
// // // //   },
// // // //   contentTitle: {
// // // //     fontSize: '20px',
// // // //     fontWeight: 'bold',
// // // //     marginBottom: '16px'
// // // //   },
// // // //   contentText: {
// // // //     color: '#4a5568'
// // // //   }
// // // // };

// // // // const ArrowSplitBreakdown = ({ 
// // // //   title = defaultContent.title, 
// // // //   leftContent = defaultContent.leftContent,
// // // //   rightContent = defaultContent.rightContent,
// // // //   styles = {},
// // // //   leftArrowColor = "#4A90E2",
// // // //   rightArrowColor = "#87CEEB"
// // // // }) => {
// // // //   // Merge custom styles with base styles
// // // //   const mergedStyles = {
// // // //     container: { ...baseStyles.container, ...styles.container },
// // // //     title: { ...baseStyles.title, ...styles.title },
// // // //     contentWrapper: { ...baseStyles.contentWrapper, ...styles.contentWrapper },
// // // //     arrow: { ...baseStyles.arrow, ...styles.arrow },
// // // //     contentContainer: { ...baseStyles.contentContainer, ...styles.contentContainer },
// // // //     contentBox: { ...baseStyles.contentBox, ...styles.contentBox },
// // // //     leftContent: { ...baseStyles.contentBox, textAlign: 'left', ...styles.leftContent },
// // // //     rightContent: { ...baseStyles.contentBox, textAlign: 'right', ...styles.rightContent },
// // // //     contentTitle: { ...baseStyles.contentTitle, ...styles.contentTitle },
// // // //     contentText: { ...baseStyles.contentText, ...styles.contentText }
// // // //   };

// // // //   return (
// // // //     <div style={mergedStyles.container}>
// // // //       <h2 style={mergedStyles.title}>
// // // //         {title}
// // // //       </h2>
// // // //       <div style={mergedStyles.contentWrapper}>
// // // //         {/* Left Arrow */}
// // // //         <svg style={{...mergedStyles.arrow, ...baseStyles.leftArrow}} viewBox="0 0 200 100">
// // // //           <path
// // // //             d="M10 50 C 70 50, 130 20, 190 50"
// // // //             stroke={leftArrowColor}
// // // //             strokeWidth="40"
// // // //             fill="none"
// // // //             style={{ opacity: 0.8 }}
// // // //           />
// // // //         </svg>
        
// // // //         {/* Right Arrow */}
// // // //         <svg style={{...mergedStyles.arrow, ...baseStyles.rightArrow}} viewBox="0 0 200 100">
// // // //           <path
// // // //             d="M10 50 C 70 50, 130 80, 190 50"
// // // //             stroke={rightArrowColor}
// // // //             strokeWidth="40"
// // // //             fill="none"
// // // //             style={{ opacity: 0.8 }}
// // // //           />
// // // //         </svg>

// // // //         <div style={mergedStyles.contentContainer}>
// // // //           <div style={mergedStyles.leftContent}>
// // // //             <h3 style={mergedStyles.contentTitle}>{leftContent.title}</h3>
// // // //             <p style={mergedStyles.contentText}>{leftContent.description}</p>
// // // //           </div>
          
// // // //           <div style={mergedStyles.rightContent}>
// // // //             <h3 style={mergedStyles.contentTitle}>{rightContent.title}</h3>
// // // //             <p style={mergedStyles.contentText}>{rightContent.description}</p>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ArrowSplitBreakdown;

// // // import React from 'react';

// // // const defaultContent = {
// // //   title: "Data Classification Challenges",
// // //   leftContent: {
// // //     title: "Complexity Issues",
// // //     description: "Complex algorithms require more computational resources and training time"
// // //   },
// // //   rightContent: {
// // //     title: "Data Quality Impact",
// // //     description: "Poor data quality can significantly affect model performance and accuracy"
// // //   }
// // // };

// // // const baseStyles = {
// // //   container: {
// // //     width: '100%',
// // //     maxWidth: '1024px',
// // //     margin: '0 auto'
// // //   },
// // //   title: {
// // //     fontSize: '24px',
// // //     fontWeight: 'bold',
// // //     textAlign: 'center',
// // //     marginBottom: '40px'
// // //   },
// // //   contentWrapper: {
// // //     position: 'relative',
// // //     height: '200px'
// // //   },
// // //   arrow: {
// // //     position: 'absolute',
// // //     top: 0,
// // //     width: '50%',
// // //     height: '100%'
// // //   },
// // //   leftArrow: {
// // //     left: 0
// // //   },
// // //   rightArrow: {
// // //     right: 0
// // //   },
// // //   contentContainer: {
// // //     position: 'relative',
// // //     display: 'flex',
// // //     justifyContent: 'space-between',
// // //     padding: '30px 0 60px'
// // //   },
// // //   contentBox: {
// // //     width: '33%',
// // //     position: 'relative',
// // //     zIndex: 1,
// // //     padding: '20px',
// // //     borderRadius: '8px'
// // //   },
// // //   contentTitle: {
// // //     fontSize: '20px',
// // //     fontWeight: 'bold',
// // //     marginBottom: '16px'
// // //   },
// // //   contentText: {
// // //     color: '#4a5568'
// // //   }
// // // };

// // // const ArrowSplitBreakdown = ({ 
// // //   title = defaultContent.title, 
// // //   leftContent = defaultContent.leftContent,
// // //   rightContent = defaultContent.rightContent,
// // //   styles = {},
// // //   leftArrowColor = "#4A90E2",
// // //   rightArrowColor = "#87CEEB"
// // // }) => {
// // //   // Merge custom styles with base styles
// // //   const mergedStyles = {
// // //     container: { ...baseStyles.container, ...styles.container },
// // //     title: { ...baseStyles.title, ...styles.title },
// // //     contentWrapper: { ...baseStyles.contentWrapper, ...styles.contentWrapper },
// // //     arrow: { ...baseStyles.arrow, ...styles.arrow },
// // //     contentContainer: { ...baseStyles.contentContainer, ...styles.contentContainer },
// // //     contentBox: { ...baseStyles.contentBox, ...styles.contentBox },
// // //     leftContent: { ...baseStyles.contentBox, textAlign: 'left', ...styles.leftContent },
// // //     rightContent: { ...baseStyles.contentBox, textAlign: 'right', ...styles.rightContent },
// // //     contentTitle: { ...baseStyles.contentTitle, ...styles.contentTitle },
// // //     contentText: { ...baseStyles.contentText, ...styles.contentText }
// // //   };

// // //   return (
// // //     <div style={mergedStyles.container}>
// // //       <h2 style={mergedStyles.title}>
// // //         {title}
// // //       </h2>
// // //       <div style={mergedStyles.contentWrapper}>
// // //         {/* Left Placeholder */}
// // //         <div style={{
// // //           ...mergedStyles.arrow,
// // //           ...baseStyles.leftArrow,
// // //           backgroundColor: leftArrowColor,
// // //           opacity: 0.8,
// // //           height: '100px',
// // //           margin: '20px'
// // //         }} />
        
// // //         {/* Right Placeholder */}
// // //         <div style={{
// // //           ...mergedStyles.arrow,
// // //           ...baseStyles.rightArrow,
// // //           backgroundColor: rightArrowColor,
// // //           opacity: 0.8,
// // //           height: '100px',
// // //           margin: '20px'
// // //         }} />

// // //         <div style={mergedStyles.contentContainer}>
// // //           <div style={mergedStyles.leftContent}>
// // //             <h3 style={mergedStyles.contentTitle}>{leftContent.title}</h3>
// // //             <p style={mergedStyles.contentText}>{leftContent.description}</p>
// // //           </div>
          
// // //           <div style={mergedStyles.rightContent}>
// // //             <h3 style={mergedStyles.contentTitle}>{rightContent.title}</h3>
// // //             <p style={mergedStyles.contentText}>{rightContent.description}</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ArrowSplitBreakdown;

// // import React from 'react';

// // const defaultContent = {
// //   title: "Data Classification Challenges",
// //   leftContent: {
// //     title: "Complexity Issues",
// //     description: "Complex algorithms require more computational resources and training time"
// //   },
// //   rightContent: {
// //     title: "Data Quality Impact",
// //     description: "Poor data quality can significantly affect model performance and accuracy"
// //   }
// // };

// // const baseStyles = {
// //   container: {
// //     width: '100%',
// //     maxWidth: '1024px',
// //     margin: '0 auto'
// //   },
// //   title: {
// //     fontSize: '24px',
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //     marginBottom: '40px'
// //   },
// //   contentContainer: {
// //     position: 'relative',
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     gap: '0',
// //     height: '200px'
// //   },
// //   leftContent: {
// //     width: '35%',
// //     padding: '20px',
// //     borderRadius: '8px'
// //   },
// //   rightContent: {
// //     width: '35%',
// //     padding: '20px',
// //     borderRadius: '8px'
// //   },
// //   leftPlaceholder: {
// //     width: '15%',
// //     height: '100px',
// //     backgroundColor: '#4A90E2',
// //     opacity: 0.8
// //   },
// //   rightPlaceholder: {
// //     width: '15%',
// //     height: '100px',
// //     backgroundColor: '#87CEEB',
// //     opacity: 0.8
// //   },
// //   contentTitle: {
// //     fontSize: '20px',
// //     fontWeight: 'bold',
// //     marginBottom: '16px'
// //   },
// //   contentText: {
// //     color: '#4a5568'
// //   }
// // };

// // const ArrowSplitBreakdown = ({ 
// //   title = defaultContent.title, 
// //   leftContent = defaultContent.leftContent,
// //   rightContent = defaultContent.rightContent,
// //   styles = {},
// //   leftArrowColor = "#4A90E2",
// //   rightArrowColor = "#87CEEB"
// // }) => {
// //   const mergedStyles = {
// //     container: { ...baseStyles.container, ...styles.container },
// //     title: { ...baseStyles.title, ...styles.title },
// //     contentContainer: { ...baseStyles.contentContainer, ...styles.contentContainer },
// //     leftContent: { ...baseStyles.leftContent, ...styles.leftContent },
// //     rightContent: { ...baseStyles.rightContent, ...styles.rightContent },
// //     leftPlaceholder: { 
// //       ...baseStyles.leftPlaceholder, 
// //       ...styles.leftPlaceholder,
// //       backgroundColor: leftArrowColor 
// //     },
// //     rightPlaceholder: { 
// //       ...baseStyles.rightPlaceholder, 
// //       ...styles.rightPlaceholder,
// //       backgroundColor: rightArrowColor 
// //     },
// //     contentTitle: { ...baseStyles.contentTitle, ...styles.contentTitle },
// //     contentText: { ...baseStyles.contentText, ...styles.contentText }
// //   };

// //   return (
// //     <div style={mergedStyles.container}>
// //       <h2 style={mergedStyles.title}>
// //         {title}
// //       </h2>
// //       <div style={mergedStyles.contentContainer}>
// //         <div style={mergedStyles.leftContent}>
// //           <h3 style={mergedStyles.contentTitle}>{leftContent.title}</h3>
// //           <p style={mergedStyles.contentText}>{leftContent.description}</p>
// //         </div>
        
// //         <div style={mergedStyles.leftPlaceholder} />
// //         <div style={mergedStyles.rightPlaceholder} />
        
// //         <div style={mergedStyles.rightContent}>
// //           <h3 style={mergedStyles.contentTitle}>{rightContent.title}</h3>
// //           <p style={mergedStyles.contentText}>{rightContent.description}</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ArrowSplitBreakdown;

// import React from 'react';
// import { processContent } from '@/app/utils/contentProcessor';

// const defaultContent = {
//   title: "Data Classification Challenges",
//   leftContent: {
//     title: "Complexity Issues",
//     description: "Complex algorithms require more computational resources and training time"
//   },
//   rightContent: {
//     title: "Data Quality Impact",
//     description: "Poor data quality can significantly affect model performance and accuracy"
//   }
// };

// const baseStyles = {
//   container: {
//     width: '100%',
//     maxWidth: '1024px',
//     margin: '0 auto'
//   },
//   title: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: '40px'
//   },
//   contentContainer: {
//     position: 'relative',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     gap: '0',
//     height: '200px'
//   },
//   leftContent: {
//     width: '35%',
//     padding: '20px',
//     borderRadius: '8px'
//   },
//   rightContent: {
//     width: '35%',
//     padding: '20px',
//     borderRadius: '8px'
//   },
//   leftPlaceholder: {
//     width: '15%',
//     height: '100px',
//     backgroundColor: '#4A90E2',
//     opacity: 0.8
//   },
//   rightPlaceholder: {
//     width: '15%',
//     height: '100px',
//     backgroundColor: '#87CEEB',
//     opacity: 0.8
//   },
//   contentTitle: {
//     fontSize: '20px',
//     fontWeight: 'bold',
//     marginBottom: '16px'
//   },
//   contentText: {
//     color: '#4a5568'
//   }
// };

// const ArrowSplitBreakdown = ({ 
//   title = defaultContent.title, 
//   leftContent = defaultContent.leftContent,
//   rightContent = defaultContent.rightContent,
//   styles = {},
//   leftArrowColor = "#4A90E2",
//   rightArrowColor = "#87CEEB"
// }) => {
//   const mergedStyles = {
//     container: { ...baseStyles.container, ...styles.container },
//     title: { ...baseStyles.title, ...styles.title },
//     contentContainer: { ...baseStyles.contentContainer, ...styles.contentContainer },
//     leftContent: { ...baseStyles.leftContent, ...styles.leftContent },
//     rightContent: { ...baseStyles.rightContent, ...styles.rightContent },
//     leftPlaceholder: { 
//       ...baseStyles.leftPlaceholder, 
//       ...styles.leftPlaceholder,
//       backgroundColor: leftArrowColor 
//     },
//     rightPlaceholder: { 
//       ...baseStyles.rightPlaceholder, 
//       ...styles.rightPlaceholder,
//       backgroundColor: rightArrowColor 
//     },
//     contentTitle: { ...baseStyles.contentTitle, ...styles.contentTitle },
//     contentText: { ...baseStyles.contentText, ...styles.contentText }
//   };

//   return (
//     <div style={mergedStyles.container}>
//       <h2 style={mergedStyles.title}>
//         {processContent(title)}
//       </h2>
//       <div style={mergedStyles.contentContainer}>
//         <div style={mergedStyles.leftContent}>
//           <h3 style={mergedStyles.contentTitle}>{processContent(leftContent.title)}</h3>
//           <div style={mergedStyles.contentText}>{processContent(leftContent.description)}</div>
//         </div>
        
//         <div style={mergedStyles.leftPlaceholder} />
//         <div style={mergedStyles.rightPlaceholder} />
        
//         <div style={mergedStyles.rightContent}>
//           <h3 style={mergedStyles.contentTitle}>{processContent(rightContent.title)}</h3>
//           <div style={mergedStyles.contentText}>{processContent(rightContent.description)}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArrowSplitBreakdown;

import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';

const defaultContent = {
  title: "Data Classification Challenges",
  leftContent: {
    title: "Complexity Issues",
    description: "Complex algorithms require more computational resources and training time"
  },
  rightContent: {
    title: "Data Quality Impact",
    description: "Poor data quality can significantly affect model performance and accuracy"
  }
};

const baseStyles = {
  container: {
    width: '100%',
    maxWidth: '1024px',
    margin: '0 auto'
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '40px'
  },
  contentContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '0',
    height: '200px'
  },
  leftContent: {
    width: '35%',
    padding: '20px',
    borderRadius: '8px'
  },
  rightContent: {
    width: '35%',
    padding: '20px',
    borderRadius: '8px'
  },
  leftPlaceholder: {
    width: '15%',
    height: '100px',
    backgroundColor: '#4A90E2',
    opacity: 0.8
  },
  rightPlaceholder: {
    width: '15%',
    height: '100px',
    backgroundColor: '#87CEEB',
    opacity: 0.8
  },
  contentTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '16px'
  },
  contentText: {
    color: '#4a5568'
  }
};

const ArrowSplitBreakdown = ({ 
  title = defaultContent.title, 
  leftContent = defaultContent.leftContent,
  rightContent = defaultContent.rightContent,
  styles = {},
  leftArrowColor = "#4A90E2",
  rightArrowColor = "#87CEEB"
}) => {
  const mergedStyles = {
    container: { ...baseStyles.container, ...styles.container },
    title: { ...baseStyles.title, ...styles.title },
    contentContainer: { ...baseStyles.contentContainer, ...styles.contentContainer },
    leftContent: { ...baseStyles.leftContent, ...styles.leftContent },
    rightContent: { ...baseStyles.rightContent, ...styles.rightContent },
    leftPlaceholder: { 
      ...baseStyles.leftPlaceholder, 
      ...styles.leftPlaceholder,
      backgroundColor: leftArrowColor 
    },
    rightPlaceholder: { 
      ...baseStyles.rightPlaceholder, 
      ...styles.rightPlaceholder,
      backgroundColor: rightArrowColor 
    },
    contentTitle: { ...baseStyles.contentTitle, ...styles.contentTitle },
    contentText: { ...baseStyles.contentText, ...styles.contentText }
  };

  return (
    <div style={mergedStyles.container}>
      <h2 style={mergedStyles.title}>
        {processContent(title)}
      </h2>
      <div style={mergedStyles.contentContainer}>
        <div style={mergedStyles.leftContent}>
          <h3 style={mergedStyles.contentTitle}>{processContent(leftContent.title)}</h3>
          <div style={mergedStyles.contentText}>{processContent(leftContent.description)}</div>
        </div>
        
        <div style={mergedStyles.leftPlaceholder}>
          <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" overflow="hidden">
            <path 
              d="M90 25 90 45C90 55 80 65 70 65L60 65 60 70 50 60 60 50 60 55 70 55C75 55 80 50 80 45L80 25Z" 
              stroke="#042433" 
              strokeWidth="1" 
              fill={leftArrowColor}
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div style={mergedStyles.rightPlaceholder}>
          {/* <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" overflow="hidden">
            <path 
              d="M10 75 10 55C10 45 20 35 30 35L40 35 40 30 50 40 40 50 40 45 30 45C25 45 20 50 20 55L20 75Z" 
              stroke="#042433" 
              strokeWidth="1" 
              fill={rightArrowColor}
              fillRule="evenodd"
            />
          </svg> */}
           {/* <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" overflow="hidden">
            <path 
              d="M10 75 10 55C10 45 20 35 30 35L40 35 40 30 50 40 40 50 40 45 30 45C25 45 20 50 20 55L20 75Z" 
              stroke="#042433" 
              strokeWidth="2" 
              fill={rightArrowColor}
              fillRule="evenodd"
            />
          </svg> */}

         {/* <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" overflow="hidden">
            <path 
              d="M10 75 10 55C10 45 20 35 30 35L40 35 40 30 50 40 40 50 40 45 30 45C25 45 20 50 20 55L20 75Z" 
              stroke="#042433" 
              strokeWidth="1" 
              fill={rightArrowColor}
              fillRule="evenodd"
            />
          </svg> */}

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-chevron-right"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m10 8 4 4-4 4"/></svg>
        </div>
        
        <div style={mergedStyles.rightContent}>
          <h3 style={mergedStyles.contentTitle}>{processContent(rightContent.title)}</h3>
          <div style={mergedStyles.contentText}>{processContent(rightContent.description)}</div>
        </div>
      </div>
    </div>
  );
};

export default ArrowSplitBreakdown;