// import React from 'react';

// const defaultContent = {
//   title: "Four-category classification",
//   leftContent: [
//     { title: "Detailed categorization" },
//     { title: "Enhanced data analysis" },
//     { title: "Specific targeting" }
//   ],
//   rightContent: [
//     { title: "Complexity" },
//     { title: "Data requirement" },
//     { title: "Implementation cost" }
//   ]
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
//   splitContainer: {
//     display: 'flex',
//     position: 'relative',
//     gap: '0'
//   },
//   side: {
//     width: '50%',
//     padding: '20px'
//   },
//   sideTitle: {
//     fontSize: '20px',
//     fontWeight: 'bold',
//     marginBottom: '20px'
//   },
//   divider: {
//     position: 'absolute',
//     left: '50%',
//     top: 0,
//     bottom: 0,
//     width: '1px',
//     backgroundColor: '#ddd',
//     transform: 'translateX(-50%)'
//   },
//   vsBadge: {
//     position: 'absolute',
//     left: '50%',
//     top: '-15px',
//     transform: 'translateX(-50%)',
//     backgroundColor: '#333',
//     color: 'white',
//     width: '40px',
//     height: '40px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontWeight: 'bold',
//     zIndex: 1
//   }
// };

// const TableSplitBreakdown = ({
//   title = defaultContent.title,
//   leftContent = defaultContent.leftContent,
//   rightContent = defaultContent.rightContent,
//   styles = {}
// }) => {
//   const mergedStyles = {
//     container: { ...baseStyles.container, ...styles.container },
//     title: { ...baseStyles.title, ...styles.title },
//     splitContainer: { ...baseStyles.splitContainer, ...styles.splitContainer },
//     leftSide: { ...baseStyles.side, ...styles.leftSide },
//     rightSide: { ...baseStyles.side, ...styles.rightSide },
//     sideTitle: { ...baseStyles.sideTitle, ...styles.sideTitle },
//     divider: { ...baseStyles.divider, ...styles.divider },
//     vsBadge: { ...baseStyles.vsBadge, ...styles.vsBadge }
//   };

//   return (
//     <div style={mergedStyles.container}>
//       <h2 style={mergedStyles.title}>{title}</h2>
//       <div style={mergedStyles.splitContainer}>
//         <div style={mergedStyles.vsBadge}>VS</div>
//         <div style={mergedStyles.divider} />
        
//         <div style={mergedStyles.leftSide}>
//           <h3 style={mergedStyles.sideTitle}>Pros</h3>
//           {leftContent.map((item, index) => (
//             <div key={index} style={mergedStyles.item}>
//               {item.title}
//             </div>
//           ))}
//         </div>

//         <div style={mergedStyles.rightSide}>
//           <h3 style={mergedStyles.sideTitle}>Cons</h3>
//           {rightContent.map((item, index) => (
//             <div key={index} style={mergedStyles.item}>
//               {item.title}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TableSplitBreakdown;

import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';

const defaultContent = {
  title: "Four-category classification",
  leftContent: [
    { title: "Detailed categorization" },
    { title: "Enhanced data analysis" },
    { title: "Specific targeting" }
  ],
  rightContent: [
    { title: "Complexity" },
    { title: "Data requirement" },
    { title: "Implementation cost" }
  ]
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
  splitContainer: {
    display: 'flex',
    position: 'relative',
    gap: '0'
  },
  side: {
    width: '50%',
    padding: '20px'
  },
  sideTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px'
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
    zIndex: 1
  }
};

const TableSplitBreakdown = ({
  title = defaultContent.title,
  leftContent = defaultContent.leftContent,
  rightContent = defaultContent.rightContent,
  styles = {}
}) => {
  const mergedStyles = {
    container: { ...baseStyles.container, ...styles.container },
    title: { ...baseStyles.title, ...styles.title },
    splitContainer: { ...baseStyles.splitContainer, ...styles.splitContainer },
    leftSide: { ...baseStyles.side, ...styles.leftSide },
    rightSide: { ...baseStyles.side, ...styles.rightSide },
    sideTitle: { ...baseStyles.sideTitle, ...styles.sideTitle },
    divider: { ...baseStyles.divider, ...styles.divider },
    vsBadge: { ...baseStyles.vsBadge, ...styles.vsBadge }
  };

  return (
    <div style={mergedStyles.container}>
      <h2 style={mergedStyles.title}>{processContent(title)}</h2>
      <div style={mergedStyles.splitContainer}>
        <div style={mergedStyles.vsBadge}>VS</div>
        <div style={mergedStyles.divider} />
        
        <div style={mergedStyles.leftSide}>
          <h3 style={mergedStyles.sideTitle}>Pros</h3>
          {leftContent.map((item, index) => (
            <div key={index} style={mergedStyles.item}>
              {processContent(item.title)}
            </div>
          ))}
        </div>

        <div style={mergedStyles.rightSide}>
          <h3 style={mergedStyles.sideTitle}>Cons</h3>
          {rightContent.map((item, index) => (
            <div key={index} style={mergedStyles.item}>
              {processContent(item.title)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableSplitBreakdown;