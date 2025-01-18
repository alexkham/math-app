// // // // import React from 'react';

// // // // const defaultContent = {
// // // //   title: "Four-category classification",
// // // //   leftContent: [
// // // //     { title: "Detailed categorization" },
// // // //     { title: "Enhanced data analysis" },
// // // //     { title: "Specific targeting" }
// // // //   ],
// // // //   rightContent: [
// // // //     { title: "Complexity" },
// // // //     { title: "Data requirement" },
// // // //     { title: "Implementation cost" }
// // // //   ]
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
// // // //   splitContainer: {
// // // //     display: 'flex',
// // // //     position: 'relative',
// // // //     gap: '0'
// // // //   },
// // // //   side: {
// // // //     width: '50%',
// // // //     padding: '20px'
// // // //   },
// // // //   sideTitle: {
// // // //     fontSize: '20px',
// // // //     fontWeight: 'bold',
// // // //     marginBottom: '20px'
// // // //   },
// // // //   divider: {
// // // //     position: 'absolute',
// // // //     left: '50%',
// // // //     top: 0,
// // // //     bottom: 0,
// // // //     width: '1px',
// // // //     backgroundColor: '#ddd',
// // // //     transform: 'translateX(-50%)'
// // // //   },
// // // //   vsBadge: {
// // // //     position: 'absolute',
// // // //     left: '50%',
// // // //     top: '-15px',
// // // //     transform: 'translateX(-50%)',
// // // //     backgroundColor: '#333',
// // // //     color: 'white',
// // // //     width: '40px',
// // // //     height: '40px',
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //     fontWeight: 'bold',
// // // //     zIndex: 1
// // // //   }
// // // // };

// // // // const TableSplitBreakdown = ({
// // // //   title = defaultContent.title,
// // // //   leftContent = defaultContent.leftContent,
// // // //   rightContent = defaultContent.rightContent,
// // // //   styles = {}
// // // // }) => {
// // // //   const mergedStyles = {
// // // //     container: { ...baseStyles.container, ...styles.container },
// // // //     title: { ...baseStyles.title, ...styles.title },
// // // //     splitContainer: { ...baseStyles.splitContainer, ...styles.splitContainer },
// // // //     leftSide: { ...baseStyles.side, ...styles.leftSide },
// // // //     rightSide: { ...baseStyles.side, ...styles.rightSide },
// // // //     sideTitle: { ...baseStyles.sideTitle, ...styles.sideTitle },
// // // //     divider: { ...baseStyles.divider, ...styles.divider },
// // // //     vsBadge: { ...baseStyles.vsBadge, ...styles.vsBadge }
// // // //   };

// // // //   return (
// // // //     <div style={mergedStyles.container}>
// // // //       <h2 style={mergedStyles.title}>{title}</h2>
// // // //       <div style={mergedStyles.splitContainer}>
// // // //         <div style={mergedStyles.vsBadge}>VS</div>
// // // //         <div style={mergedStyles.divider} />
        
// // // //         <div style={mergedStyles.leftSide}>
// // // //           <h3 style={mergedStyles.sideTitle}>Pros</h3>
// // // //           {leftContent.map((item, index) => (
// // // //             <div key={index} style={mergedStyles.item}>
// // // //               {item.title}
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         <div style={mergedStyles.rightSide}>
// // // //           <h3 style={mergedStyles.sideTitle}>Cons</h3>
// // // //           {rightContent.map((item, index) => (
// // // //             <div key={index} style={mergedStyles.item}>
// // // //               {item.title}
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TableSplitBreakdown;

// // // import React from 'react';
// // // import { processContent } from '@/app/utils/contentProcessor';

// // // const defaultContent = {
// // //   title: "Four-category classification",
// // //   leftContent: [
// // //     { title: "Detailed categorization" },
// // //     { title: "Enhanced data analysis" },
// // //     { title: "Specific targeting" }
// // //   ],
// // //   rightContent: [
// // //     { title: "Complexity" },
// // //     { title: "Data requirement" },
// // //     { title: "Implementation cost" }
// // //   ]
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
// // //   splitContainer: {
// // //     display: 'flex',
// // //     position: 'relative',
// // //     gap: '0'
// // //   },
// // //   side: {
// // //     width: '50%',
// // //     padding: '20px'
// // //   },
// // //   sideTitle: {
// // //     fontSize: '20px',
// // //     fontWeight: 'bold',
// // //     marginBottom: '20px'
// // //   },
// // //   divider: {
// // //     position: 'absolute',
// // //     left: '50%',
// // //     top: 0,
// // //     bottom: 0,
// // //     width: '1px',
// // //     backgroundColor: '#ddd',
// // //     transform: 'translateX(-50%)'
// // //   },
// // //   vsBadge: {
// // //     position: 'absolute',
// // //     left: '50%',
// // //     top: '-15px',
// // //     transform: 'translateX(-50%)',
// // //     backgroundColor: '#333',
// // //     color: 'white',
// // //     width: '40px',
// // //     height: '40px',
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     fontWeight: 'bold',
// // //     zIndex: 1
// // //   }
// // // };

// // // const TableSplitBreakdown = ({
// // //   title = defaultContent.title,
// // //   leftContent = defaultContent.leftContent,
// // //   rightContent = defaultContent.rightContent,
// // //   styles = {}
// // // }) => {
// // //   const mergedStyles = {
// // //     container: { ...baseStyles.container, ...styles.container },
// // //     title: { ...baseStyles.title, ...styles.title },
// // //     splitContainer: { ...baseStyles.splitContainer, ...styles.splitContainer },
// // //     leftSide: { ...baseStyles.side, ...styles.leftSide },
// // //     rightSide: { ...baseStyles.side, ...styles.rightSide },
// // //     sideTitle: { ...baseStyles.sideTitle, ...styles.sideTitle },
// // //     divider: { ...baseStyles.divider, ...styles.divider },
// // //     vsBadge: { ...baseStyles.vsBadge, ...styles.vsBadge }
// // //   };

// // //   return (
// // //     <div style={mergedStyles.container}>
// // //       <h2 style={mergedStyles.title}>{processContent(title)}</h2>
// // //       <div style={mergedStyles.splitContainer}>
// // //         <div style={mergedStyles.vsBadge}>VS</div>
// // //         <div style={mergedStyles.divider} />
        
// // //         <div style={mergedStyles.leftSide}>
// // //           <h3 style={mergedStyles.sideTitle}>Pros</h3>
// // //           {leftContent.map((item, index) => (
// // //             <div key={index} style={mergedStyles.item}>
// // //               {processContent(item.title)}
// // //             </div>
// // //           ))}
// // //         </div>

// // //         <div style={mergedStyles.rightSide}>
// // //           <h3 style={mergedStyles.sideTitle}>Cons</h3>
// // //           {rightContent.map((item, index) => (
// // //             <div key={index} style={mergedStyles.item}>
// // //               {processContent(item.title)}
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TableSplitBreakdown;

// // import React from 'react';

// // const TableSplitBreakdown = ({
// //   title,
// //   leftTitle,
// //   rightTitle,
// //   leftContent = [],
// //   rightContent = [],
// //   styles = {}
// // }) => {
// //   const mergedStyles = {
// //     container: { 
// //       width: '100%',
// //       maxWidth: '1024px',
// //       margin: '0 auto',
// //       ...styles.container 
// //     },
// //     title: { 
// //       fontSize: '24px',
// //       fontWeight: 'bold',
// //       textAlign: 'center',
// //       marginBottom: '40px',
// //       ...styles.title 
// //     },
// //     splitContainer: { 
// //       display: 'flex',
// //       position: 'relative',
// //       gap: '0',
// //       ...styles.splitContainer 
// //     },
// //     leftSide: { 
// //       width: '50%',
// //       padding: '20px',
// //       ...styles.leftSide 
// //     },
// //     rightSide: { 
// //       width: '50%',
// //       padding: '20px',
// //       ...styles.rightSide 
// //     },
// //     sideTitle: { 
// //       fontSize: '20px',
// //       fontWeight: 'bold',
// //       marginBottom: '20px',
// //       ...styles.sideTitle 
// //     },
// //     divider: { 
// //       position: 'absolute',
// //       left: '50%',
// //       top: 0,
// //       bottom: 0,
// //       width: '1px',
// //       backgroundColor: '#ddd',
// //       transform: 'translateX(-50%)',
// //       ...styles.divider 
// //     },
// //     vsBadge: { 
// //       position: 'absolute',
// //       left: '50%',
// //       top: '-15px',
// //       transform: 'translateX(-50%)',
// //       backgroundColor: '#333',
// //       color: 'white',
// //       width: '40px',
// //       height: '40px',
// //       display: 'flex',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       fontWeight: 'bold',
// //       borderRadius: '50%',
// //       zIndex: 1,
// //       ...styles.vsBadge 
// //     },
// //     item: {
// //       padding: '10px 0',
// //       ...styles.item
// //     }
// //   };

// //   return (
// //     <div style={mergedStyles.container}>
// //       {title && <h2 style={mergedStyles.title}>{title}</h2>}
// //       <div style={mergedStyles.splitContainer}>
// //         <div style={mergedStyles.divider} />
        
// //         <div style={mergedStyles.leftSide}>
// //           {leftTitle && <h3 style={mergedStyles.sideTitle}>{leftTitle}</h3>}
// //           {leftContent.map((item, index) => (
// //             <div key={index} style={mergedStyles.item}>
// //               {item.title}
// //             </div>
// //           ))}
// //         </div>
        
// //         <div style={mergedStyles.vsBadge}>VS</div>
        
// //         <div style={mergedStyles.rightSide}>
// //           {rightTitle && <h3 style={mergedStyles.sideTitle}>{rightTitle}</h3>}
// //           {rightContent.map((item, index) => (
// //             <div key={index} style={mergedStyles.item}>
// //               {item.title}
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TableSplitBreakdown;

// const TableSplitBreakdown = ({ content, styles }) => {
//   const { title, leftTitle, rightTitle, left, right } = content;

//   const defaultStyles = {
//     container: {
//       width: '100%',
//       maxWidth: '1024px',
//       margin: '0 auto'
//     },
//     title: {
//       fontSize: '24px',
//       fontWeight: 'bold',
//       textAlign: 'center',
//       marginBottom: '40px'
//     },
//     splitContainer: {
//       display: 'flex',
//       position: 'relative',
//       gap: '0'
//     },
//     leftSide: {
//       width: '50%',
//       padding: '20px'
//     },
//     rightSide: {
//       width: '50%',
//       padding: '20px'
//     },
//     sideTitle: {
//       fontSize: '20px',
//       fontWeight: 'bold',
//       marginBottom: '20px'
//     },
//     divider: {
//       position: 'absolute',
//       left: '50%',
//       top: 0,
//       bottom: 0,
//       width: '1px',
//       backgroundColor: '#ddd',
//       transform: 'translateX(-50%)'
//     },
//     vsBadge: {
//       position: 'absolute',
//       left: '50%',
//       top: '-15px',
//       transform: 'translateX(-50%)',
//       backgroundColor: '#333',
//       color: 'white',
//       width: '40px',
//       height: '40px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       fontWeight: 'bold',
//       borderRadius: '50%',
//       zIndex: 1
//     },
//     item: {
//       padding: '10px 0'
//     }
//   };
  
//   const finalStyles = styles || defaultStyles;

//   return (
//     <div style={finalStyles.container}>
//       {title && <h2 style={finalStyles.title}>{title}</h2>}
//       <div style={finalStyles.splitContainer}>
//         <div style={finalStyles.divider} />
        
//         <div style={finalStyles.leftSide}>
//           {leftTitle && <h3 style={finalStyles.sideTitle}>{leftTitle}</h3>}
//           {left.map((item, index) => (
//             <div key={index} style={finalStyles.item}>
//               {item}
//             </div>
//           ))}
//         </div>
        
//         <div style={finalStyles.vsBadge}>VS</div>
        
//         <div style={finalStyles.rightSide}>
//           {rightTitle && <h3 style={finalStyles.sideTitle}>{rightTitle}</h3>}
//           {right.map((item, index) => (
//             <div key={index} style={finalStyles.item}>
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TableSplitBreakdown;


// const TableSplitBreakdown = ({ content, styles }) => {
//   const { title, leftTitle, rightTitle, left = [], right = [] } = content || {};

//   const defaultStyles = {
//     container: {
//       width: '100%',
//       maxWidth: '1024px',
//       margin: '0 auto'
//     },
//     title: {
//       fontSize: '24px',
//       fontWeight: 'bold',
//       textAlign: 'center',
//       marginBottom: '40px'
//     },
//     splitContainer: {
//       display: 'flex',
//       position: 'relative',
//       gap: '0'
//     },
//     leftSide: {
//       width: '50%',
//       padding: '20px',
//       textAlign: 'center',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center'
//     },
//     rightSide: {
//       width: '50%',
//       padding: '20px',
//       textAlign: 'center',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center'
//     },
//     sideTitle: {
//       fontSize: '20px',
//       fontWeight: 'bold',
//       marginBottom: '20px',
//       textAlign: 'center'
//     },
//     divider: {
//       position: 'absolute',
//       left: '50%',
//       top: 0,
//       bottom: 0,
//       width: '1px',
//       backgroundColor: '#ddd',
//       transform: 'translateX(-50%)'
//     },
//     vsBadge: {
//       position: 'absolute',
//       left: '50%',
//       top: '-15px',
//       transform: 'translateX(-50%)',
//       backgroundColor: '#333',
//       color: 'white',
//       width: '40px',
//       height: '40px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       fontWeight: 'bold',
//       borderRadius: '50%',
//       zIndex: 1
//     },
//     item: {
//       padding: '10px 0',
//       textAlign: 'center',
//       width: '100%'
//     }
//   };
  
//   const finalStyles = styles || defaultStyles;

//   return (
//     <div style={finalStyles.container}>
//       {title && <h2 style={finalStyles.title}>{title}</h2>}
//       <div style={finalStyles.splitContainer}>
//         <div style={finalStyles.divider} />
        
//         <div style={finalStyles.leftSide}>
//           {leftTitle && <h3 style={finalStyles.sideTitle}>{leftTitle}</h3>}
//           {left.map((item, index) => (
//             <div key={index} style={finalStyles.item}>
//               {item}
//             </div>
//           ))}
//         </div>
        
//         <div style={finalStyles.vsBadge}>VS</div>
        
//         <div style={finalStyles.rightSide}>
//           {rightTitle && <h3 style={finalStyles.sideTitle}>{rightTitle}</h3>}
//           {right.map((item, index) => (
//             <div key={index} style={finalStyles.item}>
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TableSplitBreakdown;


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

const TableSplitBreakdown = ({ content, styles }) => {
  const { title, leftTitle, rightTitle, left = [], right = [] } = content || {};

  const defaultStyles = {
    container: {
      width: '100%',
      maxWidth: '1024px',
      margin: '0 auto',
      borderBottom:'2px solid lightgray',
      paddingBottom:'1px'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '40px'
    },
    splitContainer: {
      display: 'flex',
      position: 'relative',
      gap: '0'
    },
    leftSide: {
      width: '50%',
      padding: '20px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor:'#ebf5ff'
    },
    rightSide: {
      width: '50%',
      padding: '20px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor:'#fdfdea'
    },
    sideTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'center'
    },
    divider: {
      position: 'absolute',
      left: '50%',
      top: 0,
      bottom: 0,
      width: '1px',
      backgroundColor: '#ddd',
      transform: 'translateX(-50%)'
    },
    vsBadge: {
      position: 'absolute',
      left: '50%',
      top: '-15px',
      transform: 'translateX(-50%)',
      backgroundColor: '#333',
      color: 'white',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      borderRadius: '50%',
      zIndex: 1
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

  const finalStyles = styles || defaultStyles;

  return (
    <div style={finalStyles.container}>
      {title && <h2 style={finalStyles.title}>{title}</h2>}
      <div style={finalStyles.splitContainer}>
        <div style={finalStyles.divider} />
        
        <div style={finalStyles.leftSide}>
          {leftTitle && <h3 style={finalStyles.sideTitle}>{leftTitle}</h3>}
          {left.map((item, index) => (
            <RenderItem key={index} item={item} styles={finalStyles} />
          ))}
        </div>
        
        <div style={finalStyles.vsBadge}>VS</div>
        
        <div style={finalStyles.rightSide}>
          {rightTitle && <h3 style={finalStyles.sideTitle}>{rightTitle}</h3>}
          {right.map((item, index) => (
            <RenderItem key={index} item={item} styles={finalStyles} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableSplitBreakdown;