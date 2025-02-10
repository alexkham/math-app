// // import React from 'react';
// // import { processContent } from '../utils/contentProcessor';

// // const alertStyles = {
// //   base: {
// //     position: 'relative',
// //     width: '100%',
// //     display: 'flex',
// //     padding: '1rem',
// //     marginBottom: '1rem',
// //     borderRadius: '0.375rem',
// //     fontSize: '0.875rem',
// //     lineHeight: '1.5',
// //   },
// //   info: {
// //     backgroundColor: 'rgb(239 246 255)',
// //     borderLeft: '4px solid rgb(59 130 246)',
// //     color: 'rgb(29 78 216)'
// //   },
// //   success: {
// //     backgroundColor: 'rgb(240 253 244)',
// //     borderLeft: '4px solid rgb(34 197 94)',
// //     color: 'rgb(21 128 61)'
// //   },
// //   warning: {
// //     backgroundColor: 'rgb(254 252 232)',
// //     borderLeft: '4px solid rgb(234 179 8)',
// //     color: 'rgb(161 98 7)'
// //   },
// //   error: {
// //     backgroundColor: 'rgb(254 242 242)',
// //     borderLeft: '4px solid rgb(239 68 68)',
// //     color: 'rgb(185 28 28)'
// //   },
// //   neutral: {
// //     backgroundColor: 'rgb(249 250 251)',
// //     borderLeft: '4px solid rgb(107 114 128)',
// //     color: 'rgb(55 65 81)'
// //   }
// // };

// // const Explanations = ({ 
// //   content,
// //   theme = 'neutral',
// //   style = {},
// //   className = ''
// // }) => {
// //   const combinedStyles = {
// //     container: {
// //       width: '100%',
// //       maxWidth: '100%',
// //       overflow: 'hidden',
// //       ...style
// //     },
// //     alert: {
// //       ...alertStyles.base,
// //       ...alertStyles[theme]
// //     }
// //   };

// //   return (
// //     <div style={combinedStyles.container} className={className}>
// //       <div style={combinedStyles.alert}>
// //         <span style={{ width: '100%' }}>
// //           {processContent(content)}
// //         </span>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Explanations;

// import React from 'react';
// import { processContent } from '../utils/contentProcessor';

// const alertStyles = {
//   base: {
//     padding: '1rem',
//     marginBottom: '1rem',
//     fontSize: '0.875rem',
//     lineHeight: '1.25rem',
//     borderRadius: '0.5rem',
//   },
//   info: {
//     backgroundColor: 'rgb(239 246 255)',
//     color: 'rgb(30 64 175)',
//   },
//   danger: {
//     backgroundColor: 'rgb(254 242 242)',
//     color: 'rgb(153 27 27)',
//   },
//   success: {
//     backgroundColor: 'rgb(240 253 244)',
//     color: 'rgb(22 101 52)',
//   },
//   warning: {
//     backgroundColor: 'rgb(254 252 232)',
//     color: 'rgb(133 77 14)',
//   },
//   dark: {
//     backgroundColor: 'rgb(249 250 251)',
//     color: 'rgb(31 41 55)',
//   }
// };

// // Dark mode styles
// const darkStyles = {
//   info: {
//     backgroundColor: 'rgb(31 41 55)',
//     color: 'rgb(96 165 250)',
//   },
//   danger: {
//     backgroundColor: 'rgb(31 41 55)',
//     color: 'rgb(248 113 113)',
//   },
//   success: {
//     backgroundColor: 'rgb(31 41 55)',
//     color: 'rgb(74 222 128)',
//   },
//   warning: {
//     backgroundColor: 'rgb(31 41 55)',
//     color: 'rgb(253 224 71)',
//   },
//   dark: {
//     backgroundColor: 'rgb(31 41 55)',
//     color: 'rgb(209 213 219)',
//   }
// };

// const Explanations = ({ 
//   content,
//   theme = 'info',
//   isDarkMode = false,
//   style = {}
// }) => {
//   const getStyles = () => {
//     const baseStyle = alertStyles.base;
//     const themeStyle = isDarkMode ? darkStyles[theme] : alertStyles[theme];
    
//     return {
//       ...baseStyle,
//       ...themeStyle,
//       ...style
//     };
//   };

//   return (
//     <div style={getStyles()} role="alert">
//       <div style={{ width: '100%' }}>
//         {processContent(content)}
//       </div>
//     </div>
//   );
// };

// export default Explanations;


import React from 'react';
import { processContent } from '../utils/contentProcessor';

const alertStyles = {
  base: {
    display: 'block',
    width: '100%',
    padding: '16px',
    marginBottom: '16px',
    fontSize: '14px',
    lineHeight: '20px',
    borderRadius: '8px',
  },
  info: {
    backgroundColor: 'rgb(239 246 255)',
    color: 'rgb(30 64 175)'
  },
  danger: {
    backgroundColor: 'rgb(254 242 242)',
    color: 'rgb(153 27 27)'
  },
  success: {
    backgroundColor: 'rgb(240 253 244)',
    color: 'rgb(22 101 52)'
  },
  warning: {
    backgroundColor: 'rgb(254 252 232)',
    color: 'rgb(133 77 14)'
  },
  dark: {
    backgroundColor: 'rgb(249 250 251)',
    color: 'rgb(31 41 55)'
  }
};

const darkModeStyles = {
  info: {
    backgroundColor: 'rgb(31 41 55)',
    color: 'rgb(96 165 250)'
  },
  danger: {
    backgroundColor: 'rgb(31 41 55)',
    color: 'rgb(248 113 113)'
  },
  success: {
    backgroundColor: 'rgb(31 41 55)',
    color: 'rgb(74 222 128)'
  },
  warning: {
    backgroundColor: 'rgb(31 41 55)',
    color: 'rgb(253 224 71)'
  },
  dark: {
    backgroundColor: 'rgb(31 41 55)',
    color: 'rgb(209 213 219)'
  }
};

const Explanations = ({ 
  content,
  theme = 'info',
  isDarkMode = false,
  style = {},
  className = ''
}) => {
  const getStyles = () => ({
    ...alertStyles.base,
    ...(isDarkMode ? darkModeStyles[theme] : alertStyles[theme]),
    ...style
  });

  return (
    <div 
      style={getStyles()} 
      role="alert"
      className={className}
    >
      {processContent(content)}
    </div>
  );
};

export default Explanations;