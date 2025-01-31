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

// // // const ThreeWaysCircularSplitBreakdown = ({ content, styles, centerContent, centerStyles }) => {
// // //   const { 
// // //     title, 
// // //     firstTitle, 
// // //     secondTitle, 
// // //     thirdTitle, 
// // //     first = [], 
// // //     second = [], 
// // //     third = [] 
// // //   } = content || {};

// // //   const defaultStyles = {
// // //     container: {
// // //       width: '100%',
// // //       maxWidth: '1024px',
// // //       margin: '0 auto',
// // //       position: 'relative',
// // //       height: '600px'
// // //     },
// // //     title: {
// // //       fontSize: '24px',
// // //       fontWeight: 'bold',
// // //       textAlign: 'center',
// // //       marginBottom: '40px'
// // //     },
// // //     section: {
// // //       position: 'absolute',
// // //       width: '33%',
// // //       height: '33%',
// // //       padding: '20px',
// // //       textAlign: 'center',
// // //       display: 'flex',
// // //       flexDirection: 'column',
// // //       alignItems: 'center',
// // //       borderRadius: '10px'
// // //     },
// // //     firstSection: {
// // //       top: '5%',
// // //       left: '50%',
// // //       transform: 'translateX(-50%)',
// // //       backgroundColor: '#ebf5ff'
// // //     },
// // //     secondSection: {
// // //       bottom: '15%',
// // //       left: '15%',
// // //       backgroundColor: '#fdfdea'
// // //     },
// // //     thirdSection: {
// // //       bottom: '15%',
// // //       right: '15%',
// // //       backgroundColor: '#f3f4f6'
// // //     },
// // //     centerCircle: {
// // //       position: 'absolute',
// // //       top: '50%',
// // //       left: '50%',
// // //       transform: 'translate(-50%, -50%)',
// // //       width: '120px',
// // //       height: '120px',
// // //       borderRadius: '50%',
// // //       display: 'flex',
// // //       alignItems: 'center',
// // //       justifyContent: 'center',
// // //       zIndex: 2
// // //     },
// // //     sideTitle: {
// // //       fontSize: '20px',
// // //       fontWeight: 'bold',
// // //       marginBottom: '20px',
// // //       textAlign: 'center'
// // //     },
// // //     item: {
// // //       padding: '10px 0',
// // //       textAlign: 'center',
// // //       width: '100%'
// // //     },
// // //     itemTitle: {
// // //       fontSize: '18px',
// // //       fontWeight: 'bold',
// // //       marginBottom: '10px',
// // //       textAlign: 'center'
// // //     },
// // //     itemContent: {
// // //       fontSize: '14px',
// // //       margin: '5px 0',
// // //       textAlign: 'center'
// // //     }
// // //   };

// // //   const finalStyles = styles || defaultStyles;
// // //   const finalCenterStyles = centerStyles || {};

// // //   return (
// // //     <div style={finalStyles.container}>
// // //       {title && <h2 style={finalStyles.title}>{title}</h2>}
      
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

// // //       {centerContent && (
// // //         <div style={{...finalStyles.centerCircle, ...finalCenterStyles}}>
// // //           {centerContent}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default ThreeWaysCircularSplitBreakdown;

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

// // const ThreeWaySplitBreakdown = ({ title, content, styles, centerContent, centerStyles }) => {
// //   const { firstTitle, secondTitle, thirdTitle, first = [], second = [], third = [] } = content || {};

// //   const defaultStyles = {
// //     container: {
// //       width: '100%',
// //       maxWidth: '1024px',
// //       margin: '0 auto',
// //       position: 'relative',
// //       height: '700px',
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
// //       padding: '30px',
// //       textAlign: 'center',
// //       display: 'flex',
// //       flexDirection: 'column',
// //       alignItems: 'center',
// //       borderRadius: '10px',
// //       backgroundColor: '#fff',
// //       boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
// //     },
// //     firstSection: {
// //       top: '50px',
// //       left: '50%',
// //       transform: 'translateX(-50%)',
// //       backgroundColor: '#ebf5ff'
// //     },
// //     secondSection: {
// //       bottom: '50px',
// //       left: '15%',
// //       backgroundColor: '#fdfdea'
// //     },
// //     thirdSection: {
// //       bottom: '50px',
// //       right: '15%',
// //       backgroundColor: '#f3f4f6'
// //     },
// //     centerWrapper: {
// //       position: 'absolute',
// //       top: '50%',
// //       left: '50%',
// //       transform: 'translate(-50%, -50%)',
// //       zIndex: 2
// //     },
// //     centerCircle: {
// //       width: '100px',
// //       height: '100px',
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
// //       padding: '10px 0',
// //       textAlign: 'center',
// //       width: '100%'
// //     },
// //     itemTitle: {
// //       fontSize: '18px',
// //       fontWeight: 'bold',
// //       marginBottom: '10px',
// //       textAlign: 'center'
// //     },
// //     itemContent: {
// //       fontSize: '14px',
// //       margin: '5px 0',
// //       textAlign: 'center'
// //     }
// //   };

// //   const finalStyles = { ...defaultStyles, ...styles };
// //   const finalCenterStyles = { ...defaultStyles.centerCircle, ...centerStyles };

// //   return (
// //     <div style={finalStyles.container}>
// //       {title && <h2 style={finalStyles.mainTitle}>{title}</h2>}

// //       <svg style={finalStyles.connectingLines} viewBox="0 0 1024 700">
// //         <line 
// //           x1="512" y1="180" 
// //           x2="512" y2="300"
// //           stroke="#e5e7eb"
// //           strokeWidth="2"
// //         />
// //         <line 
// //           x1="512" y1="400"
// //           x2="250" y2="520"
// //           stroke="#e5e7eb"
// //           strokeWidth="2"
// //         />
// //         <line 
// //           x1="512" y1="400"
// //           x2="774" y2="520"
// //           stroke="#e5e7eb"
// //           strokeWidth="2"
// //         />
// //       </svg>
      
// //       <div style={{...finalStyles.section, ...finalStyles.firstSection}}>
// //         {firstTitle && <h3 style={finalStyles.sideTitle}>{firstTitle}</h3>}
// //         {first.map((item, index) => (
// //           <RenderItem key={index} item={item} styles={finalStyles} />
// //         ))}
// //       </div>

// //       {centerContent && (
// //         <div style={finalStyles.centerWrapper}>
// //           <div style={finalCenterStyles}>
// //             {centerContent}
// //           </div>
// //         </div>
// //       )}

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

// // export default ThreeWaySplitBreakdown;

// import React from 'react';

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

// const ThreeWaySplitBreakdown = ({ title, content, styles, centerContent, centerStyles }) => {
//   const { firstTitle, secondTitle, thirdTitle, first = [], second = [], third = [] } = content || {};

//   const defaultStyles = {
//     container: {
//       width: '100%',
//       maxWidth: '1024px',
//       margin: '0 auto',
//       position: 'relative',
//       height: '800px',
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
//       minHeight: '200px',
//       padding: '30px',
//       textAlign: 'center',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       borderRadius: '10px',
//       backgroundColor: '#fff',
//       boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//     },
//     firstSection: {
//       top: '20px',
//       left: '50%',
//       transform: 'translateX(-50%)',
//       backgroundColor: '#ebf5ff'
//     },
//     secondSection: {
//       bottom: '50px',
//       left: '10%',
//       backgroundColor: '#fdfdea'
//     },
//     thirdSection: {
//       bottom: '50px',
//       right: '10%',
//       backgroundColor: '#f3f4f6'
//     },
//     centerWrapper: {
//       position: 'absolute',
//       top: '45%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
//       zIndex: 2
//     },
//     centerCircle: {
//       width: '100px',
//       height: '100px',
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
//       padding: '10px 0',
//       textAlign: 'center',
//       width: '100%'
//     },
//     itemTitle: {
//       fontSize: '18px',
//       fontWeight: 'bold',
//       marginBottom: '10px',
//       textAlign: 'center'
//     },
//     itemContent: {
//       fontSize: '14px',
//       margin: '5px 0',
//       textAlign: 'center'
//     }
//   };

//   const finalStyles = { ...defaultStyles, ...styles };
//   const finalCenterStyles = { ...defaultStyles.centerCircle, ...centerStyles };

//   return (
//     <div style={finalStyles.container}>
//       {title && <h2 style={finalStyles.mainTitle}>{title}</h2>}

//       <svg style={finalStyles.connectingLines} viewBox="0 0 1024 800">
//         <line 
//           x1="512" y1="200" 
//           x2="512" y2="320"
//           stroke="#e5e7eb"
//           strokeWidth="2"
//         />
//         <line 
//           x1="512" y1="420"
//           x2="200" y2="600"
//           stroke="#e5e7eb"
//           strokeWidth="2"
//         />
//         <line 
//           x1="512" y1="420"
//           x2="824" y2="600"
//           stroke="#e5e7eb"
//           strokeWidth="2"
//         />
//       </svg>
      
//       <div style={{...finalStyles.section, ...finalStyles.firstSection}}>
//         {firstTitle && <h3 style={finalStyles.sideTitle}>{firstTitle}</h3>}
//         {first.map((item, index) => (
//           <RenderItem key={index} item={item} styles={finalStyles} />
//         ))}
//       </div>

//       {centerContent && (
//         <div style={finalStyles.centerWrapper}>
//           <div style={finalCenterStyles}>
//             {centerContent}
//           </div>
//         </div>
//       )}

//       <div style={{...finalStyles.section, ...finalStyles.secondSection}}>
//         {secondTitle && <h3 style={finalStyles.sideTitle}>{secondTitle}</h3>}
//         {second.map((item, index) => (
//           <RenderItem key={index} item={item} styles={finalStyles} />
//         ))}
//       </div>

//       <div style={{...finalStyles.section, ...finalStyles.thirdSection}}>
//         {thirdTitle && <h3 style={finalStyles.sideTitle}>{thirdTitle}</h3>}
//         {third.map((item, index) => (
//           <RenderItem key={index} item={item} styles={finalStyles} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ThreeWaySplitBreakdown;

// import React from 'react';

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

// const ThreeWaySplitBreakdown = ({ title, content, styles, centerContent, centerStyles }) => {
//   const { firstTitle, secondTitle, thirdTitle, first = [], second = [], third = [] } = content || {};

//   const defaultStyles = {
//     container: {
//       width: '100%',
//       maxWidth: '1024px',
//       margin: '0 auto',
//       position: 'relative',
//       height: '800px',
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
//       minHeight: '200px',
//       padding: '30px',
//       textAlign: 'center',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       borderRadius: '10px',
//       backgroundColor: '#fff',
//       boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//     },
//     firstSection: {
//       top: '20px',
//       left: '50%',
//       transform: 'translateX(-50%)',
//       backgroundColor: '#ebf5ff'
//     },
//     secondSection: {
//       bottom: '50px',
//       left: '10%',
//       backgroundColor: '#fdfdea'
//     },
//     thirdSection: {
//       bottom: '50px',
//       right: '10%',
//       backgroundColor: '#f3f4f6'
//     },
//     centerWrapper: {
//       position: 'absolute',
//       top: '47%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
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
//       padding: '10px 0',
//       textAlign: 'center',
//       width: '100%'
//     },
//     itemTitle: {
//       fontSize: '18px',
//       fontWeight: 'bold',
//       marginBottom: '10px',
//       textAlign: 'center'
//     },
//     itemContent: {
//       fontSize: '14px',
//       margin: '5px 0',
//       textAlign: 'center'
//     }
//   };

//   const finalStyles = { ...defaultStyles, ...styles };
//   const finalCenterStyles = { ...defaultStyles.centerCircle, ...centerStyles };

//   return (
//     <div style={finalStyles.container}>
//       {title && <h2 style={finalStyles.mainTitle}>{title}</h2>}

//       <svg style={finalStyles.connectingLines} viewBox="0 0 1024 800">
//         <line 
//           x1="512" y1="200" 
//           x2="512" y2="320"
//           stroke="#e5e7eb"
//           strokeWidth="3"
//         />
//         <line 
//           x1="512" y1="450"
//           x2="200" y2="600"
//           stroke="#e5e7eb"
//           strokeWidth="3"
//         />
//         <line 
//           x1="512" y1="450"
//           x2="824" y2="600"
//           stroke="#e5e7eb"
//           strokeWidth="3"
//         />
//       </svg>
      
//       <div style={{...finalStyles.section, ...finalStyles.firstSection}}>
//         {firstTitle && <h3 style={finalStyles.sideTitle}>{firstTitle}</h3>}
//         {first.map((item, index) => (
//           <RenderItem key={index} item={item} styles={finalStyles} />
//         ))}
//       </div>

//       {centerContent && (
//         <div style={finalStyles.centerWrapper}>
//           <div style={finalCenterStyles}>
//             {centerContent}
//           </div>
//         </div>
//       )}

//       <div style={{...finalStyles.section, ...finalStyles.secondSection}}>
//         {secondTitle && <h3 style={finalStyles.sideTitle}>{secondTitle}</h3>}
//         {second.map((item, index) => (
//           <RenderItem key={index} item={item} styles={finalStyles} />
//         ))}
//       </div>

//       <div style={{...finalStyles.section, ...finalStyles.thirdSection}}>
//         {thirdTitle && <h3 style={finalStyles.sideTitle}>{thirdTitle}</h3>}
//         {third.map((item, index) => (
//           <RenderItem key={index} item={item} styles={finalStyles} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ThreeWaySplitBreakdown;


import React from 'react';

const RenderItem = ({ item, styles }) => {
  if (typeof item === 'string') {
    return <div style={styles.item}>{item}</div>;
  }

  const { title, link, content } = item;
  
  const Content = () => (
    <>
      {title && <h4 style={styles.itemTitle}>{title}</h4>}
      {content && content.map((subItem, index) => (
        <div key={index} style={styles.itemContent}>{subItem}</div>
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

const ThreeWaySplitBreakdown = ({ title, content, styles, centerContent, centerStyles }) => {
  const { firstTitle, secondTitle, thirdTitle, first = [], second = [], third = [] } = content || {};

  const defaultStyles = {
    container: {
      width: '100%',
      maxWidth: '1024px',
      margin: '0 auto',
      position: 'relative',
      height: '800px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    mainTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '40px'
    },
    section: {
      position: 'absolute',
      width: '300px',
      minHeight: '200px',
      padding: '30px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '10px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    firstSection: {
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#ebf5ff'
    },
    secondSection: {
      bottom: '50px',
      left: '5%',
      backgroundColor: '#fdfdea'
    },
    thirdSection: {
      bottom: '50px',
      right: '5%',
      backgroundColor: '#f3f4f6'
    },
    centerWrapper: {
      position: 'absolute',
      top: '47%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2
    },
    centerCircle: {
      width: '140px',
      height: '140px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid #e5e7eb',
      backgroundColor: '#fff'
    },
    connectingLines: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none'
    },
    sideTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'center'
    },
    item: {
      padding: '10px 0',
      textAlign: 'center',
      width: '100%'
    },
    itemTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
      textAlign: 'center'
    },
    itemContent: {
      fontSize: '14px',
      margin: '5px 0',
      textAlign: 'center'
    }
  };

  const finalStyles = { ...defaultStyles, ...styles };
  const finalCenterStyles = { ...defaultStyles.centerCircle, ...centerStyles };

  // Calculate angles for each line (120° apart)
  const topAngle = -90; // Points straight up
  const leftAngle = topAngle + 120;
  const rightAngle = topAngle - 120;

  // Convert polar coordinates to cartesian for line endpoints
  const radius = 300; // Length of lines
  const centerX = 512;
  const centerY = 370;
  const circleRadius = 70;

  const toRadians = (angle) => angle * (Math.PI / 180);

  const getLineEnd = (angle) => ({
    x: centerX + Math.cos(toRadians(angle)) * radius,
    y: centerY + Math.sin(toRadians(angle)) * radius
  });

  const getLineStart = (angle) => ({
    x: centerX + Math.cos(toRadians(angle)) * circleRadius,
    y: centerY + Math.sin(toRadians(angle)) * circleRadius
  });

  const topEnd = getLineEnd(topAngle);
  const leftEnd = getLineEnd(leftAngle);
  const rightEnd = getLineEnd(rightAngle);

  const topStart = getLineStart(topAngle);
  const leftStart = getLineStart(leftAngle);
  const rightStart = getLineStart(rightAngle);

  return (
    <div style={finalStyles.container}>
      {title && <h2 style={finalStyles.mainTitle}>{title}</h2>}

      <svg style={finalStyles.connectingLines} viewBox="0 0 1024 800">
        <line 
          x1={topStart.x} y1={topStart.y}
          x2={topEnd.x} y2={topEnd.y}
          stroke="#e5e7eb"
          strokeWidth="3"
        />
        <line 
          x1={leftStart.x} y1={leftStart.y}
          x2={leftEnd.x} y2={leftEnd.y}
          stroke="#e5e7eb"
          strokeWidth="3"
        />
        <line 
          x1={rightStart.x} y1={rightStart.y}
          x2={rightEnd.x} y2={rightEnd.y}
          stroke="#e5e7eb"
          strokeWidth="3"
        />
      </svg>
      
      <div style={{...finalStyles.section, ...finalStyles.firstSection}}>
        {firstTitle && <h3 style={finalStyles.sideTitle}>{firstTitle}</h3>}
        {first.map((item, index) => (
          <RenderItem key={index} item={item} styles={finalStyles} />
        ))}
      </div>

      {centerContent && (
        <div style={finalStyles.centerWrapper}>
          <div style={finalCenterStyles}>
            {centerContent}
          </div>
        </div>
      )}

      <div style={{...finalStyles.section, ...finalStyles.secondSection}}>
        {secondTitle && <h3 style={finalStyles.sideTitle}>{secondTitle}</h3>}
        {second.map((item, index) => (
          <RenderItem key={index} item={item} styles={finalStyles} />
        ))}
      </div>

      <div style={{...finalStyles.section, ...finalStyles.thirdSection}}>
        {thirdTitle && <h3 style={finalStyles.sideTitle}>{thirdTitle}</h3>}
        {third.map((item, index) => (
          <RenderItem key={index} item={item} styles={finalStyles} />
        ))}
      </div>
    </div>
  );
};

export default ThreeWaySplitBreakdown;