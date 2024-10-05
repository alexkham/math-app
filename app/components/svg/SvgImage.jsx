// // import React from 'react';

// // const SvgImage = ({ svg, width = '100%', height = '300px' }) => {
// //   // Extract viewBox from the original SVG
// //   const viewBoxMatch = svg.match(/viewBox=["']([^"']*)["']/);
// //   const originalViewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 100 100';

// //   // Create a wrapper SVG with consistent size
// //   const wrappedSvg = `
// //     <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${originalViewBox}">
// //       ${svg.replace(/<svg[^>]*>|<\/svg>/g, '')}
// //     </svg>
// //   `;

// //   return <div dangerouslySetInnerHTML={{ __html: wrappedSvg }} />;
// // };

// // export default SvgImage;
// // const SvgImage = ({ svg, width = '100%', height = '300px' }) => {
// //     if (!svg) {
// //       return null; // or return a placeholder/loading state
// //     }
  
// //     // Extract viewBox from the original SVG
// //     const viewBoxMatch = svg.match(/viewBox=["']([^"']*)["']/);
// //     const originalViewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 100 100';
  
// //     // Create a wrapper SVG with consistent size
// //     const wrappedSvg = `
// //       <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${originalViewBox}">
// //         ${svg.replace(/<svg[^>]*>|<\/svg>/g, '')}
// //       </svg>
// //     `;
  
// //     return <div dangerouslySetInnerHTML={{ __html: wrappedSvg }} />;
// //   };
  
// //   export default SvgImage;
// import React from 'react';

// const SvgImage = ({ svg, width = '100%', height = '300px' }) => {
//   if (!svg) {
//     return null; // or return a placeholder/loading state
//   }

//   // Extract viewBox from the original SVG
//   const viewBoxMatch = svg.match(/viewBox=["']([^"']*)["']/);
//   const originalViewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 100 100';

//   // Create a wrapper SVG with consistent size
//   const wrappedSvg = `
//     <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="${originalViewBox}">
//       ${svg.replace(/<svg[^>]*>|<\/svg>/g, '')}
//     </svg>
//   `;

//   const styles = {
//     frame: {
//       border: '1px solid #e0e0e0',
//       borderRadius: '8px',
//       padding: '20px',
//       backgroundColor: 'white',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//       marginBottom: '20px',
//       width: width,
//       height: height,
//       overflow: 'hidden'
//     },
//     svgContainer: {
//       width: '100%',
//       height: '100%',
//     }
//   };

//   return (
//     <div style={styles.frame}>
//       <div 
//         style={styles.svgContainer}
//         dangerouslySetInnerHTML={{ __html: wrappedSvg }} 
//       />
//     </div>
//   );
// };

// export default SvgImage;
import React from 'react';

const SvgImage = ({ svg, width = '100%', height = '300px' }) => {
  if (!svg) {
    return null; // or return a placeholder/loading state
  }

  // Extract viewBox from the original SVG
  const viewBoxMatch = svg.match(/viewBox=["']([^"']*)["']/);
  const originalViewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 100 100';

  // Create a wrapper SVG with consistent size
  const wrappedSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="${originalViewBox}">
      ${svg.replace(/<svg[^>]*>|<\/svg>/g, '')}
    </svg>
  `;

  const styles = {
    frame: {
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '20px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      marginBottom: '20px',
      width: width,
      height: height,
      overflow: 'hidden'
    },
    svgContainer: {
      width: '100%',
      height: '100%',
    }
  };

  return (
    <div style={styles.frame}>
      <div
        style={styles.svgContainer}
        dangerouslySetInnerHTML={{ __html: wrappedSvg }}
      />
    </div>
  );
};

export default SvgImage;