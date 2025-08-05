// // // // import React from 'react';

// // // // const RenderItem = ({ item, styles }) => {
// // // //   if (typeof item === 'string') {
// // // //     return <div style={styles.item}>{item}</div>;
// // // //   }

// // // //   const { title, link, content } = item;
  
// // // //   const Content = () => (
// // // //     <>
// // // //       {title && <h4 style={styles.itemTitle}>{title}</h4>}
// // // //       {content && content.map((subItem, index) => (
// // // //         <div key={index} style={styles.itemContent}>{subItem}</div>
// // // //       ))}
// // // //     </>
// // // //   );

// // // //   if (link && title) {
// // // //     return (
// // // //       <div style={styles.item}>
// // // //         <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
// // // //           <Content />
// // // //         </a>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return <div style={styles.item}><Content /></div>;
// // // // };

// // // // const ThreeWayHorizontalBreakdown = ({ title, content, styles, centerContent, centerStyles }) => {
// // // //   const { firstTitle, secondTitle, thirdTitle, first = [], second = [], third = [] } = content || {};

// // // //   const defaultStyles = {
// // // //     container: {
// // // //       width: '100%',
// // // //       maxWidth: '1200px',
// // // //       margin: '0 auto',
// // // //       position: 'relative',
// // // //       height: '600px',
// // // //       display: 'flex',
// // // //       flexDirection: 'column',
// // // //       alignItems: 'center'
// // // //     },
// // // //     mainTitle: {
// // // //       fontSize: '24px',
// // // //       fontWeight: 'bold',
// // // //       textAlign: 'center',
// // // //       marginBottom: '40px'
// // // //     },
// // // //     section: {
// // // //       position: 'absolute',
// // // //       width: '280px',
// // // //       minHeight: '300px',
// // // //       padding: '25px',
// // // //       textAlign: 'center',
// // // //       display: 'flex',
// // // //       flexDirection: 'column',
// // // //       alignItems: 'center',
// // // //       borderRadius: '10px',
// // // //       backgroundColor: '#fff',
// // // //       boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
// // // //     },
// // // //     firstSection: {
// // // //       top: '120px',
// // // //       left: '50px',
// // // //       backgroundColor: '#ebf5ff'
// // // //     },
// // // //     secondSection: {
// // // //       top: '120px',
// // // //       left: '50%',
// // // //       transform: 'translateX(-50%)',
// // // //       backgroundColor: '#fdfdea'
// // // //     },
// // // //     thirdSection: {
// // // //       top: '120px',
// // // //       right: '50px',
// // // //       backgroundColor: '#f3f4f6'
// // // //     },
// // // //     centerWrapper: {
// // // //       position: 'absolute',
// // // //       top: '60px',
// // // //       left: '50%',
// // // //       transform: 'translateX(-50%)',
// // // //       zIndex: 2
// // // //     },
// // // //     centerCircle: {
// // // //       width: '120px',
// // // //       height: '120px',
// // // //       borderRadius: '50%',
// // // //       display: 'flex',
// // // //       alignItems: 'center',
// // // //       justifyContent: 'center',
// // // //       border: '2px solid #e5e7eb',
// // // //       backgroundColor: '#fff'
// // // //     },
// // // //     connectingLines: {
// // // //       position: 'absolute',
// // // //       top: 0,
// // // //       left: 0,
// // // //       width: '100%',
// // // //       height: '100%',
// // // //       pointerEvents: 'none'
// // // //     },
// // // //     sideTitle: {
// // // //       fontSize: '20px',
// // // //       fontWeight: 'bold',
// // // //       marginBottom: '20px',
// // // //       textAlign: 'center'
// // // //     },
// // // //     item: {
// // // //       padding: '10px 0',
// // // //       textAlign: 'center',
// // // //       width: '100%'
// // // //     },
// // // //     itemTitle: {
// // // //       fontSize: '18px',
// // // //       fontWeight: 'bold',
// // // //       marginBottom: '10px',
// // // //       textAlign: 'center'
// // // //     },
// // // //     itemContent: {
// // // //       fontSize: '14px',
// // // //       margin: '5px 0',
// // // //       textAlign: 'center'
// // // //     }
// // // //   };

// // // //   const finalStyles = { ...defaultStyles, ...styles };
// // // //   const finalCenterStyles = { ...defaultStyles.centerCircle, ...centerStyles };

// // // //   // Calculate horizontal line positions
// // // //   const centerX = 600;
// // // //   const centerY = 120;
// // // //   const circleRadius = 60;
// // // //   const lineLength = 150;

// // // //   // Left line (to first section)
// // // //   const leftLineStart = { x: centerX - circleRadius, y: centerY };
// // // //   const leftLineEnd = { x: centerX - lineLength, y: centerY };

// // // //   // Right line (to third section)
// // // //   const rightLineStart = { x: centerX + circleRadius, y: centerY };
// // // //   const rightLineEnd = { x: centerX + lineLength, y: centerY };

// // // //   // Center line (to second section)
// // // //   const centerLineStart = { x: centerX, y: centerY + circleRadius };
// // // //   const centerLineEnd = { x: centerX, y: centerY + lineLength };

// // // //   return (
// // // //     <div style={finalStyles.container}>
// // // //       {title && <h2 style={finalStyles.mainTitle}>{title}</h2>}

// // // //       <svg style={finalStyles.connectingLines} viewBox="0 0 1200 600">
// // // //         <line 
// // // //           x1={leftLineStart.x} y1={leftLineStart.y}
// // // //           x2={leftLineEnd.x} y2={leftLineEnd.y}
// // // //           stroke="#e5e7eb"
// // // //           strokeWidth="3"
// // // //         />
// // // //         <line 
// // // //           x1={rightLineStart.x} y1={rightLineStart.y}
// // // //           x2={rightLineEnd.x} y2={rightLineEnd.y}
// // // //           stroke="#e5e7eb"
// // // //           strokeWidth="3"
// // // //         />
// // // //         <line 
// // // //           x1={centerLineStart.x} y1={centerLineStart.y}
// // // //           x2={centerLineEnd.x} y2={centerLineEnd.y}
// // // //           stroke="#e5e7eb"
// // // //           strokeWidth="3"
// // // //         />
// // // //       </svg>
      
// // // //       <div style={{...finalStyles.section, ...finalStyles.firstSection}}>
// // // //         {firstTitle && <h3 style={finalStyles.sideTitle}>{firstTitle}</h3>}
// // // //         {first.map((item, index) => (
// // // //           <RenderItem key={index} item={item} styles={finalStyles} />
// // // //         ))}
// // // //       </div>

// // // //       {centerContent && (
// // // //         <div style={finalStyles.centerWrapper}>
// // // //           <div style={finalCenterStyles}>
// // // //             {centerContent}
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       <div style={{...finalStyles.section, ...finalStyles.secondSection}}>
// // // //         {secondTitle && <h3 style={finalStyles.sffideTitle}>{secondTitle}</h3>}
// // // //         {second.map((item, index) => (
// // // //           <RenderItem key={index} item={item} styles={finalStyles} />
// // // //         ))}
// // // //       </div>

// // // //       <div style={{...finalStyles.section, ...finalStyles.thirdSection}}>
// // // //         {thirdTitle && <h3 style={finalStyles.sideTitle}>{thirdTitle}</h3>}
// // // //         {third.map((item, index) => (
// // // //           <RenderItem key={index} item={item} styles={finalStyles} />
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ThreeWayHorizontalBreakdown;


// // // import React from 'react';

// // // const RenderItem = ({ item, styles }) => {
// // //   if (typeof item === 'string') {
// // //     return <div style={styles.item}>{item}</div>;
// // //   }

// // //   const { title, link, content } = item;
  
// // //   const Content = () => (
// // //     <>
// // //       {title && <h4 style={styles.itemTitle}>{title}</h4>}
// // //       {content && content.map((subItem, index) => (
// // //         <div key={index} style={styles.itemContent}>{subItem}</div>
// // //       ))}
// // //     </>
// // //   );

// // //   if (link && title) {
// // //     return (
// // //       <div style={styles.item}>
// // //         <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
// // //           <Content />
// // //         </a>
// // //       </div>
// // //     );
// // //   }

// // //   return <div style={styles.item}><Content /></div>;
// // // };

// // // const ThreeWayHorizontalBreakdown = ({ title, content, styles, centerContent, centerStyles }) => {
// // //   const { firstTitle, secondTitle, thirdTitle, first = [], second = [], third = [] } = content || {};

// // //   const defaultStyles = {
// // //     container: {
// // //       width: '100%',
// // //       maxWidth: '1200px',
// // //       margin: '0 auto',
// // //       position: 'relative',
// // //       height: '700px',
// // //       display: 'flex',
// // //       flexDirection: 'column',
// // //       alignItems: 'center'
// // //     },
// // //     mainTitle: {
// // //       fontSize: '24px',
// // //       fontWeight: 'bold',
// // //       textAlign: 'center',
// // //       marginBottom: '40px'
// // //     },
// // //     section: {
// // //       position: 'absolute',
// // //       width: '300px',
// // //       height: '350px',
// // //       padding: '25px',
// // //       textAlign: 'center',
// // //       display: 'flex',
// // //       flexDirection: 'column',
// // //       alignItems: 'center',
// // //       borderRadius: '10px',
// // //       backgroundColor: '#fff',
// // //       boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
// // //       overflow: 'auto'
// // //     },
// // //     firstSection: {
// // //       top: '250px',
// // //       left: '50px',
// // //       backgroundColor: '#ebf5ff'
// // //     },
// // //     secondSection: {
// // //       top: '250px',
// // //       left: '50%',
// // //       transform: 'translateX(-50%)',
// // //       backgroundColor: '#fdfdea'
// // //     },
// // //     thirdSection: {
// // //       top: '250px',
// // //       right: '50px',
// // //       backgroundColor: '#f3f4f6'
// // //     },
// // //     centerWrapper: {
// // //       position: 'absolute',
// // //       top: '80px',
// // //       left: '50%',
// // //       transform: 'translateX(-50%)',
// // //       zIndex: 2
// // //     },
// // //     centerCircle: {
// // //       width: '140px',
// // //       height: '140px',
// // //       borderRadius: '50%',
// // //       display: 'flex',
// // //       alignItems: 'center',
// // //       justifyContent: 'center',
// // //       border: '2px solid #e5e7eb',
// // //       backgroundColor: '#fff'
// // //     },
// // //     connectingLines: {
// // //       position: 'absolute',
// // //       top: 0,
// // //       left: 0,
// // //       width: '100%',
// // //       height: '100%',
// // //       pointerEvents: 'none'
// // //     },
// // //     sideTitle: {
// // //       fontSize: '20px',
// // //       fontWeight: 'bold',
// // //       marginBottom: '20px',
// // //       textAlign: 'center'
// // //     },
// // //     item: {
// // //       padding: '8px 0',
// // //       textAlign: 'center',
// // //       width: '100%'
// // //     },
// // //     itemTitle: {
// // //       fontSize: '16px',
// // //       fontWeight: 'bold',
// // //       marginBottom: '8px',
// // //       textAlign: 'center'
// // //     },
// // //     itemContent: {
// // //       fontSize: '13px',
// // //       margin: '3px 0',
// // //       textAlign: 'center'
// // //     }
// // //   };

// // //   const finalStyles = { ...defaultStyles, ...styles };
// // //   const finalCenterStyles = { ...defaultStyles.centerCircle, ...centerStyles };

// // //   // Calculate line positions - center circle to each section
// // //   const centerX = 600; // Center of container
// // //   const centerY = 150; // Center circle Y position
// // //   const circleRadius = 70;
  
// // //   // Section positions (matching the CSS positions)
// // //   const leftSectionX = 50 + 150; // left + half width
// // //   const middleSectionX = 600; // center
// // //   const rightSectionX = 1200 - 50 - 150; // right - offset - half width
// // //   const sectionsY = 250; // top of sections

// // //   // Line start points (edge of center circle)
// // //   const leftLineStart = {
// // //     x: centerX - Math.cos(Math.atan2(centerY - sectionsY, centerX - leftSectionX)) * circleRadius,
// // //     y: centerY + Math.sin(Math.atan2(centerY - sectionsY, centerX - leftSectionX)) * circleRadius
// // //   };

// // //   const middleLineStart = {
// // //     x: centerX,
// // //     y: centerY + circleRadius
// // //   };

// // //   const rightLineStart = {
// // //     x: centerX + Math.cos(Math.atan2(centerY - sectionsY, rightSectionX - centerX)) * circleRadius,
// // //     y: centerY + Math.sin(Math.atan2(centerY - sectionsY, rightSectionX - centerX)) * circleRadius
// // //   };

// // //   // Line end points (top of sections)
// // //   const leftLineEnd = { x: leftSectionX, y: sectionsY };
// // //   const middleLineEnd = { x: middleSectionX, y: sectionsY };
// // //   const rightLineEnd = { x: rightSectionX, y: sectionsY };

// // //   return (
// // //     <div style={finalStyles.container}>
// // //       {title && <h2 style={finalStyles.mainTitle}>{title}</h2>}

// // //       <svg style={finalStyles.connectingLines} viewBox="0 0 1200 700">
// // //         <line 
// // //           x1={leftLineStart.x} y1={leftLineStart.y}
// // //           x2={leftLineEnd.x} y2={leftLineEnd.y}
// // //           stroke="#e5e7eb"
// // //           strokeWidth="3"
// // //         />
// // //         <line 
// // //           x1={middleLineStart.x} y1={middleLineStart.y}
// // //           x2={middleLineEnd.x} y2={middleLineEnd.y}
// // //           stroke="#e5e7eb"
// // //           strokeWidth="3"
// // //         />
// // //         <line 
// // //           x1={rightLineStart.x} y1={rightLineStart.y}
// // //           x2={rightLineEnd.x} y2={rightLineEnd.y}
// // //           stroke="#e5e7eb"
// // //           strokeWidth="3"
// // //         />
// // //       </svg>

// // //       {centerContent && (
// // //         <div style={finalStyles.centerWrapper}>
// // //           <div style={finalCenterStyles}>
// // //             {centerContent}
// // //           </div>
// // //         </div>
// // //       )}
      
// // //       <div style={{...finalStyles.section, ...finalStyles.firstSection}}>
// // //         {firstTitle && <h3 style={finalStyles.sideTitle}>{firstTitle}</h3>}
// // //         {first.map((item, index) => (
// // //           <RenderItem key={index} item={item} styles={finalStyles} />
// // //         ))}
// // //       </div>

// // //       <div style={{...finalStyles.section, ...finalStyles.secondSection}}>
// // //         {secondTitle && <h3 style={finalStyles.sideTitle}>{secondTitle}</h3>}
// // //         {second.map((item, index) => (
// // //           <RenderItem key={index} item={item} styles={finalStyles} />
// // //         ))}
// // //       </div>

// // //       <div style={{...finalStyles.section, ...finalStyles.thirdSection}}>
// // //         {thirdTitle && <h3 style={finalStyles.sideTitle}>{thirdTitle}</h3>}
// // //         {third.map((item, index) => (
// // //           <RenderItem key={index} item={item} styles={finalStyles} />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ThreeWayHorizontalBreakdown;



// // import React from 'react';

// // const RenderItem = ({ item, styles }) => {
// //   if (typeof item === 'string') {
// //     return <div style={styles.item}>{item}</div>;
// //   }

// //   const { title, link, content } = item;
  
// //   const Content = () => (
// //     <>
// //       {title && <h4 style={styles.itemTitle}>{title}</h4>}
// //       {content && content.map((subItem, index) => (
// //         <div key={index} style={styles.itemContent}>{subItem}</div>
// //       ))}
// //     </>
// //   );

// //   if (link && title) {
// //     return (
// //       <div style={styles.item}>
// //         <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
// //           <Content />
// //         </a>
// //       </div>
// //     );
// //   }

// //   return <div style={styles.item}><Content /></div>;
// // };

// // const ThreeWayHorizontalBreakdown = ({ title, content, styles, centerContent, centerStyles }) => {
// //   const { firstTitle, secondTitle, thirdTitle, first = [], second = [], third = [] } = content || {};

// //   const defaultStyles = {
// //     container: {
// //       width: '100%',
// //       maxWidth: '1200px',
// //       margin: '0 auto',
// //       position: 'relative',
// //       minHeight: '700px',
// //       display: 'flex',
// //       flexDirection: 'column',
// //       alignItems: 'center'
// //     },
// //     mainTitle: {
// //       fontSize: '24px',
// //       fontWeight: 'bold',
// //       textAlign: 'center',
// //       marginBottom: '40px'
// //     },
// //     section: {
// //       position: 'absolute',
// //       width: '300px',
// //       minHeight: '200px',
// //       padding: '25px',
// //       textAlign: 'center',
// //       display: 'flex',
// //       flexDirection: 'column',
// //       alignItems: 'center',
// //       borderRadius: '10px',
// //       backgroundColor: '#fff',
// //       boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
// //     },
// //     firstSection: {
// //       top: '250px',
// //       left: '150px',
// //       backgroundColor: '#ebf5ff'
// //     },
// //     secondSection: {
// //       top: '250px',
// //       left: '50%',
// //       transform: 'translateX(-50%)',
// //       backgroundColor: '#fdfdea'
// //     },
// //     thirdSection: {
// //       top: '250px',
// //       right: '150px',
// //       backgroundColor: '#f3f4f6'
// //     },
// //     centerWrapper: {
// //       position: 'absolute',
// //       top: '80px',
// //       left: '50%',
// //       transform: 'translateX(-50%)',
// //       zIndex: 2
// //     },
// //     centerCircle: {
// //       width: '140px',
// //       height: '140px',
// //       borderRadius: '50%',
// //       display: 'flex',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       border: '2px solid #e5e7eb',
// //       backgroundColor: '#fff'
// //     },
// //     connectingLines: {
// //       position: 'absolute',
// //       top: 0,
// //       left: 0,
// //       width: '100%',
// //       height: '100%',
// //       pointerEvents: 'none'
// //     },
// //     sideTitle: {
// //       fontSize: '20px',
// //       fontWeight: 'bold',
// //       marginBottom: '20px',
// //       textAlign: 'center'
// //     },
// //     item: {
// //       padding: '8px 0',
// //       textAlign: 'center',
// //       width: '100%'
// //     },
// //     itemTitle: {
// //       fontSize: '16px',
// //       fontWeight: 'bold',
// //       marginBottom: '8px',
// //       textAlign: 'center'
// //     },
// //     itemContent: {
// //       fontSize: '13px',
// //       margin: '3px 0',
// //       textAlign: 'center'
// //     }
// //   };

// //   const finalStyles = { ...defaultStyles, ...styles };
// //   const finalCenterStyles = { ...defaultStyles.centerCircle, ...centerStyles };

// //   // Calculate line positions - center circle to each section
// //   const centerX = 600; // Center of container
// //   const centerY = 150; // Center circle Y position
// //   const circleRadius = 70;
  
// //   // Section positions (matching the CSS positions)
// //   const leftSectionX = 150 + 150; // left + half width
// //   const middleSectionX = 600; // center
// //   const rightSectionX = 1200 - 150 - 150; // right - offset - half width
// //   const sectionsY = 250; // top of sections

// //   // Line start points (edge of center circle)
// //   const leftLineStart = {
// //     x: centerX - Math.cos(Math.atan2(centerY - sectionsY, centerX - leftSectionX)) * circleRadius,
// //     y: centerY + Math.sin(Math.atan2(centerY - sectionsY, centerX - leftSectionX)) * circleRadius
// //   };

// //   const middleLineStart = {
// //     x: centerX,
// //     y: centerY + circleRadius
// //   };

// //   const rightLineStart = {
// //     x: centerX + Math.cos(Math.atan2(centerY - sectionsY, rightSectionX - centerX)) * circleRadius,
// //     y: centerY + Math.sin(Math.atan2(centerY - sectionsY, rightSectionX - centerX)) * circleRadius
// //   };

// //   // Line end points (top of sections)
// //   const leftLineEnd = { x: leftSectionX, y: sectionsY };
// //   const middleLineEnd = { x: middleSectionX, y: sectionsY };
// //   const rightLineEnd = { x: rightSectionX, y: sectionsY };

// //   return (
// //     <div style={finalStyles.container}>
// //       {title && <h2 style={finalStyles.mainTitle}>{title}</h2>}

// //       <svg style={finalStyles.connectingLines} viewBox="0 0 1200 700">
// //         <line 
// //           x1={leftLineStart.x} y1={leftLineStart.y}
// //           x2={leftLineEnd.x} y2={leftLineEnd.y}
// //           stroke="#e5e7eb"
// //           strokeWidth="3"
// //         />
// //         <line 
// //           x1={middleLineStart.x} y1={middleLineStart.y}
// //           x2={middleLineEnd.x} y2={middleLineEnd.y}
// //           stroke="#e5e7eb"
// //           strokeWidth="3"
// //         />
// //         <line 
// //           x1={rightLineStart.x} y1={rightLineStart.y}
// //           x2={rightLineEnd.x} y2={rightLineEnd.y}
// //           stroke="#e5e7eb"
// //           strokeWidth="3"
// //         />
// //       </svg>

// //       {centerContent && (
// //         <div style={finalStyles.centerWrapper}>
// //           <div style={finalCenterStyles}>
// //             {centerContent}
// //           </div>
// //         </div>
// //       )}
      
// //       <div style={{...finalStyles.section, ...finalStyles.firstSection}}>
// //         {firstTitle && <h3 style={finalStyles.sideTitle}>{firstTitle}</h3>}
// //         {first.map((item, index) => (
// //           <RenderItem key={index} item={item} styles={finalStyles} />
// //         ))}
// //       </div>

// //       <div style={{...finalStyles.section, ...finalStyles.secondSection}}>
// //         {secondTitle && <h3 style={finalStyles.sideTitle}>{secondTitle}</h3>}
// //         {second.map((item, index) => (
// //           <RenderItem key={index} item={item} styles={finalStyles} />
// //         ))}
// //       </div>

// //       <div style={{...finalStyles.section, ...finalStyles.thirdSection}}>
// //         {thirdTitle && <h3 style={finalStyles.sideTitle}>{thirdTitle}</h3>}
// //         {third.map((item, index) => (
// //           <RenderItem key={index} item={item} styles={finalStyles} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ThreeWayHorizontalBreakdown;


// import React, { useEffect, useRef, useState } from 'react';

// const RenderItem = ({ item, styles }) => {
//   if (typeof item === 'string') {
//     return <div style={styles.item}>{item}</div>;
//   }

//   const { title, link, content } = item;
  
//   const Content = () => (
//     <>
//       {title && <h4 style={styles.itemTitle}>{title}</h4>}
//       {content && content.map((subItem, index) => (
//         <div key={index} style={styles.itemContent}>{subItem}</div>
//       ))}
//     </>
//   );

//   if (link && title) {
//     return (
//       <div style={styles.item}>
//         <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
//           <Content />
//         </a>
//       </div>
//     );
//   }

//   return <div style={styles.item}><Content /></div>;
// };

// const ThreeWayHorizontalBreakdown = ({ title, content, styles, centerContent, centerStyles }) => {
//   const { firstTitle, secondTitle, thirdTitle, first = [], second = [], third = [] } = content || {};
//   const [sectionHeight, setSectionHeight] = useState('auto');
//   const firstRef = useRef(null);
//   const secondRef = useRef(null);
//   const thirdRef = useRef(null);

//   useEffect(() => {
//     const calculateHeight = () => {
//       if (firstRef.current && secondRef.current && thirdRef.current) {
//         const heights = [
//           firstRef.current.scrollHeight,
//           secondRef.current.scrollHeight,
//           thirdRef.current.scrollHeight
//         ];
//         const maxHeight = Math.max(...heights);
//         setSectionHeight(`${maxHeight}px`);
//       }
//     };

//     calculateHeight();
//     window.addEventListener('resize', calculateHeight);
//     return () => window.removeEventListener('resize', calculateHeight);
//   }, [first, second, third]);

//   const defaultStyles = {
//     container: {
//       width: '100%',
//       maxWidth: '1200px',
//       margin: '0 auto',
//       position: 'relative',
//       minHeight: '700px',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center'
//     },
//     mainTitle: {
//       fontSize: '24px',
//       fontWeight: 'bold',
//       textAlign: 'center',
//       marginBottom: '40px'
//     },
//     section: {
//       position: 'absolute',
//       width: '300px',
//       height: sectionHeight,
//       padding: '25px',
//       textAlign: 'center',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       borderRadius: '10px',
//       backgroundColor: '#fff',
//       boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//     },
//     firstSection: {
//       top: '250px',
//       left: '150px',
//       backgroundColor: '#ebf5ff'
//     },
//     secondSection: {
//       top: '250px',
//       left: '50%',
//       transform: 'translateX(-50%)',
//       backgroundColor: '#fdfdea'
//     },
//     thirdSection: {
//       top: '250px',
//       right: '150px',
//       backgroundColor: '#f3f4f6'
//     },
//     centerWrapper: {
//       position: 'absolute',
//       top: '80px',
//       left: '50%',
//       transform: 'translateX(-50%)',
//       zIndex: 2
//     },
//     centerCircle: {
//       width: '140px',
//       height: '140px',
//       borderRadius: '50%',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       border: '2px solid #e5e7eb',
//       backgroundColor: '#fff'
//     },
//     connectingLines: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       pointerEvents: 'none'
//     },
//     sideTitle: {
//       fontSize: '20px',
//       fontWeight: 'bold',
//       marginBottom: '20px',
//       textAlign: 'center'
//     },
//     item: {
//       padding: '8px 0',
//       textAlign: 'center',
//       width: '100%'
//     },
//     itemTitle: {
//       fontSize: '16px',
//       fontWeight: 'bold',
//       marginBottom: '8px',
//       textAlign: 'center'
//     },
//     itemContent: {
//       fontSize: '13px',
//       margin: '3px 0',
//       textAlign: 'center'
//     }
//   };

//   const finalStyles = { ...defaultStyles, ...styles };
//   const finalCenterStyles = { ...defaultStyles.centerCircle, ...centerStyles };

//   // Calculate line positions - center circle to each section
//   const centerX = 600; // Center of container
//   const centerY = 150; // Center circle Y position
//   const circleRadius = 70;
  
//   // Section positions (matching the CSS positions)
//   const leftSectionX = 150 + 150; // left + half width
//   const middleSectionX = 600; // center
//   const rightSectionX = 1200 - 150 - 150; // right - offset - half width
//   const sectionsY = 250; // top of sections

//   // Line start points (edge of center circle)
//   const leftLineStart = {
//     x: centerX - Math.cos(Math.atan2(centerY - sectionsY, centerX - leftSectionX)) * circleRadius,
//     y: centerY + Math.sin(Math.atan2(centerY - sectionsY, centerX - leftSectionX)) * circleRadius
//   };

//   const middleLineStart = {
//     x: centerX,
//     y: centerY + circleRadius
//   };

//   const rightLineStart = {
//     x: centerX + Math.cos(Math.atan2(centerY - sectionsY, rightSectionX - centerX)) * circleRadius,
//     y: centerY + Math.sin(Math.atan2(centerY - sectionsY, rightSectionX - centerX)) * circleRadius
//   };

//   // Line end points (top of sections)
//   const leftLineEnd = { x: leftSectionX, y: sectionsY };
//   const middleLineEnd = { x: middleSectionX, y: sectionsY };
//   const rightLineEnd = { x: rightSectionX, y: sectionsY };

//   return (
//     <div style={finalStyles.container}>
//       {title && <h2 style={finalStyles.mainTitle}>{title}</h2>}

//       <svg style={finalStyles.connectingLines} viewBox="0 0 1200 700">
//         <line 
//           x1={leftLineStart.x} y1={leftLineStart.y}
//           x2={leftLineEnd.x} y2={leftLineEnd.y}
//           stroke="#e5e7eb"
//           strokeWidth="3"
//         />
//         <line 
//           x1={middleLineStart.x} y1={middleLineStart.y}
//           x2={middleLineEnd.x} y2={middleLineEnd.y}
//           stroke="#e5e7eb"
//           strokeWidth="3"
//         />
//         <line 
//           x1={rightLineStart.x} y1={rightLineStart.y}
//           x2={rightLineEnd.x} y2={rightLineEnd.y}
//           stroke="#e5e7eb"
//           strokeWidth="3"
//         />
//       </svg>

//       {centerContent && (
//         <div style={finalStyles.centerWrapper}>
//           <div style={finalCenterStyles}>
//             {centerContent}
//           </div>
//         </div>
//       )}
      
//       <div ref={firstRef} style={{...finalStyles.section, ...finalStyles.firstSection}}>
//         {firstTitle && <h3 style={finalStyles.sideTitle}>{firstTitle}</h3>}
//         {first.map((item, index) => (
//           <RenderItem key={index} item={item} styles={finalStyles} />
//         ))}
//       </div>

//       <div ref={secondRef} style={{...finalStyles.section, ...finalStyles.secondSection}}>
//         {secondTitle && <h3 style={finalStyles.sideTitle}>{secondTitle}</h3>}
//         {second.map((item, index) => (
//           <RenderItem key={index} item={item} styles={finalStyles} />
//         ))}
//       </div>

//       <div ref={thirdRef} style={{...finalStyles.section, ...finalStyles.thirdSection}}>
//         {thirdTitle && <h3 style={finalStyles.sideTitle}>{thirdTitle}</h3>}
//         {third.map((item, index) => (
//           <RenderItem key={index} item={item} styles={finalStyles} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ThreeWayHorizontalBreakdown;


import React, { useEffect, useRef, useState } from 'react';
import { themes } from './themes';
import { processContent } from '@/app/utils/contentProcessor';

const RenderItem = ({ item, styles }) => {
  if (typeof item === 'string') {
    return <div style={styles.item}>{processContent(item)}</div>;
  }

  const { title, link, content } = item;
  
  const Content = () => (
    <>
      {title && <h4 style={styles.itemTitle}>{title}</h4>}
      {content && content.map((subItem, index) => (
        <div key={index} style={styles.itemContent}>{processContent(subItem)}</div>
      ))}
    </>
  );

  if (link && title) {
    return (
      <div style={styles.item}>
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Content />
        </a>
      </div>
    );
  }

  return <div style={styles.item}><Content /></div>;
};

const ThreeWayHorizontalBreakdown = ({ title, content, styles, centerContent, centerStyles, theme = 'default' }) => {
  const { firstTitle, secondTitle, thirdTitle, first = [], second = [], third = [] } = content || {};
  const [sectionHeight, setSectionHeight] = useState('auto');
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  useEffect(() => {
    const calculateHeight = () => {
      if (firstRef.current && secondRef.current && thirdRef.current) {
        const heights = [
          firstRef.current.scrollHeight,
          secondRef.current.scrollHeight,
          thirdRef.current.scrollHeight
        ];
        const maxHeight = Math.max(...heights);
        setSectionHeight(`${maxHeight}px`);
      }
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);
    return () => window.removeEventListener('resize', calculateHeight);
  }, [first, second, third]);

  const getThemeStyles = (themeName, sectionHeight) => {
    const baseTheme = themes[themeName] || themes.default;
    return {
      ...baseTheme,
      section: {
        ...baseTheme.section,
        height: sectionHeight
      }
    };
  };

  const finalStyles = { ...getThemeStyles(theme, sectionHeight), ...styles };
  const finalCenterStyles = { ...getThemeStyles(theme, sectionHeight).centerCircle, ...centerStyles };

  // Calculate line positions - center circle to each section
  const centerX = 600; // Center of container
  const centerY = 150; // Center circle Y position
  const circleRadius = 70;
  
  // Section positions (matching the CSS positions)
  const leftSectionX = 150 + 150; // left + half width
  const middleSectionX = 600; // center
  const rightSectionX = 1200 - 150 - 150; // right - offset - half width
  const sectionsY = 250; // top of sections

  // Line start points (edge of center circle)
  const leftLineStart = {
    x: centerX - Math.cos(Math.atan2(centerY - sectionsY, centerX - leftSectionX)) * circleRadius,
    y: centerY + Math.sin(Math.atan2(centerY - sectionsY, centerX - leftSectionX)) * circleRadius
  };

  const middleLineStart = {
    x: centerX,
    y: centerY + circleRadius
  };

  const rightLineStart = {
    x: centerX + Math.cos(Math.atan2(centerY - sectionsY, rightSectionX - centerX)) * circleRadius,
    y: centerY + Math.sin(Math.atan2(centerY - sectionsY, rightSectionX - centerX)) * circleRadius
  };

  // Line end points (top of sections)
  const leftLineEnd = { x: leftSectionX, y: sectionsY };
  const middleLineEnd = { x: middleSectionX, y: sectionsY };
  const rightLineEnd = { x: rightSectionX, y: sectionsY };

  return (
    <div style={finalStyles.container}>
      {title && <h2 style={finalStyles.mainTitle}>{title}</h2>}

      <svg style={finalStyles.connectingLines} viewBox="0 0 1200 700">
        <line 
          x1={leftLineStart.x} y1={leftLineStart.y}
          x2={leftLineEnd.x} y2={leftLineEnd.y}
          stroke="#e5e7eb"
          strokeWidth="3"
        />
        <line 
          x1={middleLineStart.x} y1={middleLineStart.y}
          x2={middleLineEnd.x} y2={middleLineEnd.y}
          stroke="#e5e7eb"
          strokeWidth="3"
        />
        <line 
          x1={rightLineStart.x} y1={rightLineStart.y}
          x2={rightLineEnd.x} y2={rightLineEnd.y}
          stroke="#e5e7eb"
          strokeWidth="3"
        />
      </svg>

      {centerContent && (
        <div style={finalStyles.centerWrapper}>
          <div style={finalCenterStyles}>
            {centerContent}
          </div>
        </div>
      )}
      
      <div ref={firstRef} style={{...finalStyles.section, ...finalStyles.firstSection}}>
        {firstTitle && <h3 style={finalStyles.sideTitle}>{firstTitle}</h3>}
        {first.map((item, index) => (
          <RenderItem key={index} item={item} styles={finalStyles} />
        ))}
      </div>
      
      <div ref={secondRef} style={{...finalStyles.section, ...finalStyles.secondSection}}>
        {secondTitle && <h3 style={finalStyles.sideTitle}>{secondTitle}</h3>}
        {second.map((item, index) => (
          <RenderItem key={index} item={item} styles={finalStyles} />
        ))}
      </div>
  
      <div ref={thirdRef} style={{...finalStyles.section, ...finalStyles.thirdSection}}>
        {thirdTitle && <h3 style={finalStyles.sideTitle}>{thirdTitle}</h3>}
        {third.map((item, index) => (
          <RenderItem key={index} item={item} styles={finalStyles} />
        ))}
      </div>
    </div>
  );
};

export default ThreeWayHorizontalBreakdown;