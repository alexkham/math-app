// // import React from 'react';

// // const SvgDiagram = ({ 
// //   data = {}, 
// //   scale = 0.7,
// //   containerStyle = {},
// //   frameStyle = {},
// //   explanationStyle = {},
// //   linksStyle = {},
// //   linkStyle = {},
// //   showFrame = true,
// //   showExplanation = true,
// //   showLinks = true,
// //   layout = 'vertical' // 'vertical', 'horizontal', 'svg-only'
// // }) => {
// //   // Extract data from first key if data is provided
// //   const diagramData = Object.keys(data).length > 0 ? Object.values(data)[0] : {};
// //   const { svg = '', explanation = '', links = [] } = diagramData;

// //   // Default styles
// //   const defaultContainerStyle = {
// //     display: 'flex',
// //     flexDirection: layout === 'horizontal' ? 'row' : 'column',
// //     alignItems: 'center',
// //     gap: '20px',
// //     margin: '20px auto',
// //     maxWidth: '100%',
// //     ...containerStyle
// //   };

// //   const defaultFrameStyle = {
// //     border: '2px solid #e0e0e0',
// //     borderRadius: '12px',
// //     padding: '20px',
// //     backgroundColor: '#fafafa',
// //     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
// //     ...frameStyle
// //   };

// //   const defaultSvgContainerStyle = {
// //     textAlign: 'center',
// //     transform: `scale(${scale})`,
// //     transformOrigin: 'center',
// //     marginTop: '10px',
// //     marginBottom: '10px'
// //   };

// //   const defaultExplanationStyle = {
// //     fontSize: '16px',
// //     lineHeight: '1.6',
// //     color: '#333',
// //     textAlign: 'center',
// //     maxWidth: '600px',
// //     margin: '0 auto',
// //     padding: '15px',
// //     backgroundColor: '#f8f9fa',
// //     borderRadius: '8px',
// //     border: '1px solid #dee2e6',
// //     ...explanationStyle
// //   };

// //   const defaultLinksStyle = {
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     gap: '10px',
// //     justifyContent: 'center',
// //     margin: '15px 0',
// //     ...linksStyle
// //   };

// //   const defaultLinkStyle = {
// //     padding: '8px 16px',
// //     backgroundColor: '#007bff',
// //     color: 'white',
// //     textDecoration: 'none',
// //     borderRadius: '6px',
// //     fontSize: '14px',
// //     fontWeight: '500',
// //     transition: 'all 0.2s ease',
// //     border: 'none',
// //     cursor: 'pointer',
// //     ':hover': {
// //       backgroundColor: '#0056b3',
// //       transform: 'translateY(-1px)'
// //     },
// //     ...linkStyle
// //   };

// //   // Return nothing if no SVG provided
// //   if (!svg) {
// //     return null;
// //   }

// //   // SVG-only layout
// //   if (layout === 'svg-only') {
// //     return (
// //       <div style={defaultContainerStyle}>
// //         <div 
// //           style={defaultSvgContainerStyle}
// //           dangerouslySetInnerHTML={{ __html: svg }}
// //         />
// //       </div>
// //     );
// //   }

// //   // Render explanation section
// //   const renderExplanation = () => {
// //     if (!showExplanation || !explanation) return null;
    
// //     return (
// //       <div style={defaultExplanationStyle}>
// //         {explanation}
// //       </div>
// //     );
// //   };

// //   // Render links section
// //   const renderLinks = () => {
// //     if (!showLinks || !links || links.length === 0) return null;
    
// //     return (
// //       <div style={defaultLinksStyle}>
// //         {links.map((link, index) => (
// //           <a
// //             key={index}
// //             href={link.url || '#'}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             style={defaultLinkStyle}
// //             onMouseEnter={(e) => {
// //               e.target.style.backgroundColor = '#0056b3';
// //               e.target.style.transform = 'translateY(-1px)';
// //             }}
// //             onMouseLeave={(e) => {
// //               e.target.style.backgroundColor = defaultLinkStyle.backgroundColor;
// //               e.target.style.transform = 'translateY(0)';
// //             }}
// //           >
// //             {link.text || 'Link'}
// //           </a>
// //         ))}
// //       </div>
// //     );
// //   };

// //   // Main content
// //   const content = (
// //     <>
// //       <div 
// //         style={defaultSvgContainerStyle}
// //         dangerouslySetInnerHTML={{ __html: svg }}
// //       />
// //       {renderExplanation()}
// //       {renderLinks()}
// //     </>
// //   );

// //   // Wrap in frame if enabled
// //   if (showFrame) {
// //     return (
// //       <div style={defaultContainerStyle}>
// //         <div style={defaultFrameStyle}>
// //           {content}
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div style={defaultContainerStyle}>
// //       {content}
// //     </div>
// //   );
// // };

// // export default SvgDiagram;


// import React from 'react';

// const SVGDiagram = ({ 
//   layout = 'vertical', // 'vertical', 'horizontal', 'side-by-side'
//   width = 'auto',
//   height = 'auto',
//   data = {}, // This is the single identity object: { svg: '', explanation: '', links: [] }
//   containerStyle = {},
//   diagramStyle = {
//     width: '100%',
//     height: 'auto',
//     minHeight: '200px',
//     border: '2px solid #e2e8f0',
//     borderRadius: '12px',
//     padding: '20px',
//     backgroundColor: '#fafbfc'
//   },
//   frameStyle = {
//     border: '2px solid #d1d5db',
//     borderRadius: '16px',
//     padding: '30px',
//     margin: '20px',
//     backgroundColor: '#ffffff',
//     boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
//   },
//   titleStyle = {
//     fontSize: '22px',
//     fontWeight: '600',
//     marginBottom: '20px',
//     color: '#2c3e50',
//     textAlign: 'center',
//     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif'
//   },
//   explanationStyle = {
//     fontSize: '16px',
//     lineHeight: '1.8',
//     marginTop: '25px',
//     marginBottom: '25px',
//     padding: '24px',
//     backgroundColor: '#f8fafc',
//     borderRadius: '12px',
//     color: '#1e293b',
//     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
//     border: '2px solid #e2e8f0',
//     fontWeight: '400'
//   },
//   linksContainerStyle = {
//     marginTop: '20px',
//     textAlign: 'center'
//   },
//   linkStyle = {
//     display: 'inline-block',
//     margin: '6px 12px',
//     padding: '10px 20px',
//     backgroundColor: '#6c757d',
//     color: 'white',
//     textDecoration: 'none',
//     borderRadius: '8px',
//     fontSize: '14px',
//     fontWeight: '500',
//     transition: 'all 0.2s ease',
//     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif'
//   },
//   linkHoverStyle = {
//     backgroundColor: '#495057',
//     transform: 'translateY(-1px)'
//   },
//   showFrame = true,
//   showTitle = true
// }) => {
//   const [hoveredLink, setHoveredLink] = React.useState(null);

//   // data is now the single identity object directly
//   const { svg = '', explanation = '', links = [], title = '' } = data;

//   if (!svg && !explanation && (!links || links.length === 0)) {
//     return (
//       <div style={{ ...frameStyle, textAlign: 'center', padding: '40px' }}>
//         <p style={{ color: '#999', fontSize: '16px' }}>No diagram data provided</p>
//       </div>
//     );
//   }

//   const containerStyleFinal = showFrame ? { 
//     ...frameStyle, 
//     width, 
//     height, 
//     ...containerStyle 
//   } : { 
//     width, 
//     height, 
//     ...containerStyle 
//   };

//   const renderContent = () => {
//     const svgElement = svg && (
//       <div 
//         style={diagramStyle}
//         dangerouslySetInnerHTML={{ __html: svg }}
//       />
//     );

//     const textContent = (
//       <>
//         {explanation && (
//           <div style={explanationStyle}>
//             {explanation}
//           </div>
//         )}
        
//         {links && links.length > 0 && (
//           <div style={linksContainerStyle}>
//             {links.map((link, index) => (
//               link.text && link.url ? (
//                 <a
//                   key={index}
//                   href={link.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={{
//                     ...linkStyle,
//                     ...(hoveredLink === index ? linkHoverStyle : {})
//                   }}
//                   onMouseEnter={() => setHoveredLink(index)}
//                   onMouseLeave={() => setHoveredLink(null)}
//                 >
//                   {link.text}
//                 </a>
//               ) : null
//             ))}
//           </div>
//         )}
//       </>
//     );

//     if (layout === 'horizontal') {
//       return (
//         <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
//           <div style={{ flex: '1', minWidth: '300px' }}>
//             {svgElement}
//           </div>
//           <div style={{ flex: '1', minWidth: '300px' }}>
//             {textContent}
//           </div>
//         </div>
//       );
//     }

//     if (layout === 'side-by-side') {
//       return (
//         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'start' }}>
//           <div>
//             {svgElement}
//           </div>
//           <div>
//             {textContent}
//           </div>
//         </div>
//       );
//     }

//     // Default vertical layout
//     return (
//       <div>
//         {svgElement}
//         {textContent}
//       </div>
//     );
//   };

//   return (
//     <div style={containerStyleFinal}>
//       {showTitle && title && (
//         <h2 style={titleStyle}>{title}</h2>
//       )}
      
//       {renderContent()}
//     </div>
//   );
// };

// export default SVGDiagram;


import React from 'react';

const SvgDiagram = ({ 
  layout = 'vertical', // 'vertical', 'horizontal', 'side-by-side'
  width = 'auto',
  height = 'auto',
  scale = 1.0,
  data = {}, // This is the single identity object: { svg: '', explanation: '', links: [] }
  containerStyle = {},
  diagramStyle = {
    width: '100%',
    height: 'auto',
    minHeight: '200px',
    border: '2px solid #e2e8f0',
    borderRadius: '12px',
    padding: '20px',
    backgroundColor: '#fafbfc'
  },
  frameStyle = {
    border: '2px solid #d1d5db',
    borderRadius: '16px',
    padding: '30px',
    margin: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
  },
  titleStyle = {
    fontSize: '22px',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#2c3e50',
    textAlign: 'center',
    fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif'
  },
  explanationStyle = {
    fontSize: '16px',
    lineHeight: '1.8',
    marginTop: '25px',
    marginBottom: '25px',
    padding: '24px',
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    color: '#1e293b',
    fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
    border: '2px solid #e2e8f0',
    fontWeight: '400'
  },
  linksContainerStyle = {
    marginTop: '20px',
    textAlign: 'center'
  },
  linkStyle = {
    display: 'inline-block',
    margin: '6px 12px',
    padding: '10px 20px',
    backgroundColor: '#6c757d',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif'
  },
  linkHoverStyle = {
    backgroundColor: '#495057',
    transform: 'translateY(-1px)'
  },
  showFrame = true,
  showTitle = true
}) => {
  const [hoveredLink, setHoveredLink] = React.useState(null);

  // data is now the single identity object directly
  const { svg = '', explanation = '', links = [], title = '' } = data;

  if (!svg && !explanation && (!links || links.length === 0)) {
    return (
      <div style={{ ...frameStyle, textAlign: 'center', padding: '40px' }}>
        <p style={{ color: '#999', fontSize: '16px' }}>No diagram data provided</p>
      </div>
    );
  }

  const containerStyleFinal = showFrame ? { 
    ...frameStyle, 
    width, 
    height,
    transform: `scale(${scale})`,
    transformOrigin: 'top center',
    ...containerStyle 
  } : { 
    width, 
    height,
    transform: `scale(${scale})`,
    transformOrigin: 'top center',
    ...containerStyle 
  };

  const renderContent = () => {
    const svgElement = svg && (
      <div 
        style={diagramStyle}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    );

    const textContent = (
      <>
        {explanation && (
          <div style={explanationStyle}>
            {explanation}
          </div>
        )}
        
        {links && links.length > 0 && (
          <div style={linksContainerStyle}>
            {links.map((link, index) => (
              link.text && link.url ? (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...linkStyle,
                    ...(hoveredLink === index ? linkHoverStyle : {})
                  }}
                  onMouseEnter={() => setHoveredLink(index)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.text}
                </a>
              ) : null
            ))}
          </div>
        )}
      </>
    );

    if (layout === 'horizontal') {
      return (
        <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            {svgElement}
          </div>
          <div style={{ flex: '1', minWidth: '300px' }}>
            {textContent}
          </div>
        </div>
      );
    }

    if (layout === 'side-by-side') {
      return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'start' }}>
          <div>
            {svgElement}
          </div>
          <div>
            {textContent}
          </div>
        </div>
      );
    }

    // Default vertical layout
    return (
      <div>
        {svgElement}
        {textContent}
      </div>
    );
  };

  return (
    <div style={containerStyleFinal}>
      {showTitle && title && (
        <h2 style={titleStyle}>{title}</h2>
      )}
      
      {renderContent()}
    </div>
  );
};

export default SvgDiagram;