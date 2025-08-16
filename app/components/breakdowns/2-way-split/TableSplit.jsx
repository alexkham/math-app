
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

// const TableSplitBreakdown = ({ content, styles }) => {
//   const { title, leftTitle, rightTitle, left = [], right = [] } = content || {};

//   const defaultStyles = {
//     container: {
//       width: '100%',
//       maxWidth: '1024px',
//       margin: '0 auto',
//       borderBottom:'2px solid lightgray',
//       paddingBottom:'1px'
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
//       alignItems: 'center',
//       backgroundColor:'#ebf5ff'
//     },
//     rightSide: {
//       width: '50%',
//       padding: '20px',
//       textAlign: 'center',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       backgroundColor:'#fdfdea'
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

//   const finalStyles = styles || defaultStyles;

//   return (
//     <div style={finalStyles.container}>
//       {title && <h2 style={finalStyles.title}>{title}</h2>}
//       <div style={finalStyles.splitContainer}>
//         <div style={finalStyles.divider} />
        
//         <div style={finalStyles.leftSide}>
//           {leftTitle && <h3 style={finalStyles.sideTitle}>{leftTitle}</h3>}
//           {left.map((item, index) => (
//             <RenderItem key={index} item={item} styles={finalStyles} />
//           ))}
//         </div>
        
//         <div style={finalStyles.vsBadge}>VS</div>
        
//         <div style={finalStyles.rightSide}>
//           {rightTitle && <h3 style={finalStyles.sideTitle}>{rightTitle}</h3>}
//           {right.map((item, index) => (
//             <RenderItem key={index} item={item} styles={finalStyles} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TableSplitBreakdown;

import React from 'react';
import { themes } from './themes.js';
import { processContent } from '@/app/utils/contentProcessor.js';

const RenderItem = ({ item, styles, theme = 'default' }) => {
  const currentTheme = themes[theme] || themes.default;
  const finalStyles = styles || currentTheme;

  if (typeof item === 'string') {
    return <div style={finalStyles.item}>{processContent(item)}</div>;
  }

  const { title, link, content } = item;
  
  const Content = () => (
    <>
      {title && <h4 style={finalStyles.itemTitle}>{processContent(title)}</h4>}
      {content && content.map((subItem, index) => (
        <div key={index} style={finalStyles.itemContent}>{processContent(subItem)}</div>
      ))}
    </>
  );

  if (link && title) {
    return (
      <div style={finalStyles.item}>
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Content />
        </a>
      </div>
    );
  }

  return <div style={finalStyles.item}><Content /></div>;
};

const TableSplitBreakdown = ({ content, styles, theme = 'default' }) => {
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

  const currentTheme = themes[theme] || themes.default;
  const finalStyles = styles || currentTheme || defaultStyles;

  return (
    <div style={finalStyles.container}>
      {title && <h2 style={finalStyles.title}>{processContent(title)}</h2>}
      <div style={finalStyles.splitContainer}>
        <div style={finalStyles.divider} />
        
        <div style={finalStyles.leftSide}>
          {leftTitle && <h3 style={finalStyles.sideTitle}>{processContent(leftTitle)}</h3>}
          {left.map((item, index) => (
            <RenderItem key={index} item={item} styles={finalStyles} theme={theme} />
          ))}
        </div>
        
        <div style={finalStyles.vsBadge}>VS</div>
        
        <div style={finalStyles.rightSide}>
          {rightTitle && <h3 style={finalStyles.sideTitle}>{processContent(rightTitle)}</h3>}
          {right.map((item, index) => (
            <RenderItem key={index} item={item} styles={finalStyles} theme={theme} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableSplitBreakdown;