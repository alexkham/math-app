// // // // // // // // import React from 'react';

// // // // // // // // const SvgDiagram = ({ 
// // // // // // // //   layout = 'vertical', // 'vertical', 'horizontal', 'side-by-side'
// // // // // // // //   width = 'auto',
// // // // // // // //   height = 'auto',
// // // // // // // //   scale = 1.0,
// // // // // // // //   data = {}, // This is the single identity object: { svg: '', explanation: '', links: [] }
// // // // // // // //   showFrame = true,
// // // // // // // //   showTitle = true
// // // // // // // // }) => {
// // // // // // // //   const [hoveredLink, setHoveredLink] = React.useState(null);

// // // // // // // //   // Fixed styles
// // // // // // // //   const frameStyle = {
// // // // // // // //     border: '2px solid #d1d5db',
// // // // // // // //     borderRadius: '16px',
// // // // // // // //     padding: '30px',
// // // // // // // //     margin: '20px',
// // // // // // // //     backgroundColor: '#ffffff',
// // // // // // // //     boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
// // // // // // // //   };

// // // // // // // //   const diagramStyle = {
// // // // // // // //     width: '100%',
// // // // // // // //     height: 'auto',
// // // // // // // //     minHeight: '200px',
// // // // // // // //     border: '2px solid #e2e8f0',
// // // // // // // //     borderRadius: '12px',
// // // // // // // //     padding: '20px',
// // // // // // // //     backgroundColor: '#fafbfc'
// // // // // // // //   };

// // // // // // // //   const titleStyle = {
// // // // // // // //     fontSize: '22px',
// // // // // // // //     fontWeight: '600',
// // // // // // // //     marginBottom: '20px',
// // // // // // // //     color: '#2c3e50',
// // // // // // // //     textAlign: 'center',
// // // // // // // //     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif'
// // // // // // // //   };

// // // // // // // //   const explanationStyle = {
// // // // // // // //     fontSize: '16px',
// // // // // // // //     lineHeight: '1.8',
// // // // // // // //     marginTop: '25px',
// // // // // // // //     marginBottom: '25px',
// // // // // // // //     padding: '24px',
// // // // // // // //     backgroundColor: '#f8fafc',
// // // // // // // //     borderRadius: '12px',
// // // // // // // //     color: '#1e293b',
// // // // // // // //     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
// // // // // // // //     border: '2px solid #e2e8f0',
// // // // // // // //     fontWeight: '400'
// // // // // // // //   };

// // // // // // // //   const linksContainerStyle = {
// // // // // // // //     marginTop: '20px',
// // // // // // // //     textAlign: 'center'
// // // // // // // //   };

// // // // // // // //   const linkStyle = {
// // // // // // // //     display: 'inline-block',
// // // // // // // //     margin: '6px 12px',
// // // // // // // //     padding: '10px 20px',
// // // // // // // //     backgroundColor: '#6c757d',
// // // // // // // //     color: 'white',
// // // // // // // //     textDecoration: 'none',
// // // // // // // //     borderRadius: '8px',
// // // // // // // //     fontSize: '14px',
// // // // // // // //     fontWeight: '500',
// // // // // // // //     transition: 'all 0.2s ease',
// // // // // // // //     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif'
// // // // // // // //   };

// // // // // // // //   const linkHoverStyle = {
// // // // // // // //     backgroundColor: '#495057',
// // // // // // // //     transform: 'translateY(-1px)'
// // // // // // // //   };

// // // // // // // //   // data is now the single identity object directly
// // // // // // // //   const { svg = '', explanation = '', links = [], title = '' } = data;

// // // // // // // //   if (!svg && !explanation && (!links || links.length === 0)) {
// // // // // // // //     return (
// // // // // // // //       <div style={{ ...frameStyle, textAlign: 'center', padding: '40px' }}>
// // // // // // // //         <p style={{ color: '#999', fontSize: '16px' }}>No diagram data provided</p>
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   }

// // // // // // // //   const containerStyleFinal = showFrame ? { 
// // // // // // // //     ...frameStyle, 
// // // // // // // //     width, 
// // // // // // // //     height,
// // // // // // // //     transform: `scale(${scale})`,
// // // // // // // //     transformOrigin: 'top center'
// // // // // // // //   } : { 
// // // // // // // //     width, 
// // // // // // // //     height,
// // // // // // // //     transform: `scale(${scale})`,
// // // // // // // //     transformOrigin: 'top center'
// // // // // // // //   };

// // // // // // // //   const renderContent = () => {
// // // // // // // //     const svgElement = svg && (
// // // // // // // //       <div 
// // // // // // // //         style={diagramStyle}
// // // // // // // //         dangerouslySetInnerHTML={{ __html: svg }}
// // // // // // // //       />
// // // // // // // //     );

// // // // // // // //     const textContent = (
// // // // // // // //       <>
// // // // // // // //         {explanation && (
// // // // // // // //           <div style={explanationStyle}>
// // // // // // // //             {explanation}
// // // // // // // //           </div>
// // // // // // // //         )}
        
// // // // // // // //         {links && links.length > 0 && (
// // // // // // // //           <div style={linksContainerStyle}>
// // // // // // // //             {links.map((link, index) => (
// // // // // // // //               link.text && link.url ? (
// // // // // // // //                 <a
// // // // // // // //                   key={index}
// // // // // // // //                   href={link.url}
// // // // // // // //                   target="_blank"
// // // // // // // //                   rel="noopener noreferrer"
// // // // // // // //                   style={{
// // // // // // // //                     ...linkStyle,
// // // // // // // //                     ...(hoveredLink === index ? linkHoverStyle : {})
// // // // // // // //                   }}
// // // // // // // //                   onMouseEnter={() => setHoveredLink(index)}
// // // // // // // //                   onMouseLeave={() => setHoveredLink(null)}
// // // // // // // //                 >
// // // // // // // //                   {link.text}
// // // // // // // //                 </a>
// // // // // // // //               ) : null
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </>
// // // // // // // //     );

// // // // // // // //     if (layout === 'horizontal') {
// // // // // // // //       return (
// // // // // // // //         <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
// // // // // // // //           <div style={{ flex: '1', minWidth: '300px' }}>
// // // // // // // //             {svgElement}
// // // // // // // //           </div>
// // // // // // // //           <div style={{ flex: '1', minWidth: '300px' }}>
// // // // // // // //             {textContent}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       );
// // // // // // // //     }

// // // // // // // //     if (layout === 'side-by-side') {
// // // // // // // //       return (
// // // // // // // //         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'start' }}>
// // // // // // // //           <div>
// // // // // // // //             {svgElement}
// // // // // // // //           </div>
// // // // // // // //           <div>
// // // // // // // //             {textContent}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       );
// // // // // // // //     }

// // // // // // // //     // Default vertical layout
// // // // // // // //     return (
// // // // // // // //       <div>
// // // // // // // //         {svgElement}
// // // // // // // //         {textContent}
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div style={containerStyleFinal}>
// // // // // // // //       {showTitle && title && (
// // // // // // // //         <h2 style={titleStyle}>{title}</h2>
// // // // // // // //       )}
      
// // // // // // // //       {renderContent()}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default SvgDiagram;


// // // // // // // import React from 'react';

// // // // // // // const SvgDiagram = ({ 
// // // // // // //   layout = 'vertical', // 'vertical', 'horizontal', 'side-by-side'
// // // // // // //   width = 'auto',
// // // // // // //   height = 'auto',
// // // // // // //   scale = 1.0,
// // // // // // //   data = {}, // This is the single identity object: { svg: '', explanation: '', links: [] }
// // // // // // //   showFrame = true,
// // // // // // //   showTitle = true
// // // // // // // }) => {
// // // // // // //   const [hoveredLink, setHoveredLink] = React.useState(null);

// // // // // // //   // Fixed styles
// // // // // // //   const frameStyle = {
// // // // // // //     border: '2px solid #d1d5db',
// // // // // // //     borderRadius: '16px',
// // // // // // //     padding: '30px',
// // // // // // //     margin: '20px',
// // // // // // //     backgroundColor: '#ffffff',
// // // // // // //     boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
// // // // // // //   };

// // // // // // //   const diagramStyle = {
// // // // // // //     width: '100%',
// // // // // // //     height: 'auto',
// // // // // // //     minHeight: '200px',
// // // // // // //     border: '2px solid #e2e8f0',
// // // // // // //     borderRadius: '12px',
// // // // // // //     padding: '20px',
// // // // // // //     backgroundColor: '#fafbfc',
// // // // // // //     overflow: 'hidden',
// // // // // // //     display: 'flex',
// // // // // // //     justifyContent: 'center',
// // // // // // //     alignItems: 'center'
// // // // // // //   };

// // // // // // //   const titleStyle = {
// // // // // // //     fontSize: '22px',
// // // // // // //     fontWeight: '600',
// // // // // // //     marginBottom: '20px',
// // // // // // //     color: '#2c3e50',
// // // // // // //     textAlign: 'center',
// // // // // // //     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif'
// // // // // // //   };

// // // // // // //   const explanationStyle = {
// // // // // // //     fontSize: '16px',
// // // // // // //     lineHeight: '1.8',
// // // // // // //     marginTop: '25px',
// // // // // // //     marginBottom: '25px',
// // // // // // //     padding: '24px',
// // // // // // //     backgroundColor: '#f8fafc',
// // // // // // //     borderRadius: '12px',
// // // // // // //     color: '#1e293b',
// // // // // // //     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
// // // // // // //     border: '2px solid #e2e8f0',
// // // // // // //     fontWeight: '400'
// // // // // // //   };

// // // // // // //   const linksContainerStyle = {
// // // // // // //     marginTop: '20px',
// // // // // // //     textAlign: 'center'
// // // // // // //   };

// // // // // // //   const linkStyle = {
// // // // // // //     display: 'inline-block',
// // // // // // //     margin: '6px 12px',
// // // // // // //     padding: '10px 20px',
// // // // // // //     backgroundColor: '#6c757d',
// // // // // // //     color: 'white',
// // // // // // //     textDecoration: 'none',
// // // // // // //     borderRadius: '8px',
// // // // // // //     fontSize: '14px',
// // // // // // //     fontWeight: '500',
// // // // // // //     transition: 'all 0.2s ease',
// // // // // // //     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif'
// // // // // // //   };

// // // // // // //   const linkHoverStyle = {
// // // // // // //     backgroundColor: '#495057',
// // // // // // //     transform: 'translateY(-1px)'
// // // // // // //   };

// // // // // // //   // data is now the single identity object directly
// // // // // // //   const { svg = '', explanation = '', links = [], title = '' } = data;

// // // // // // //   if (!svg && !explanation && (!links || links.length === 0)) {
// // // // // // //     return (
// // // // // // //       <div style={{ ...frameStyle, textAlign: 'center', padding: '40px' }}>
// // // // // // //         <p style={{ color: '#999', fontSize: '16px' }}>No diagram data provided</p>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   const containerStyleFinal = showFrame ? { 
// // // // // // //     ...frameStyle, 
// // // // // // //     width, 
// // // // // // //     height,
// // // // // // //     transform: `scale(${scale})`,
// // // // // // //     transformOrigin: 'top center'
// // // // // // //   } : { 
// // // // // // //     width, 
// // // // // // //     height,
// // // // // // //     transform: `scale(${scale})`,
// // // // // // //     transformOrigin: 'top center'
// // // // // // //   };

// // // // // // //   const renderContent = () => {
// // // // // // //     const svgElement = svg && (
// // // // // // //       <div 
// // // // // // //         style={diagramStyle}
// // // // // // //         dangerouslySetInnerHTML={{ __html: svg }}
// // // // // // //       />
// // // // // // //     );

// // // // // // //     const textContent = (
// // // // // // //       <>
// // // // // // //         {explanation && (
// // // // // // //           <div style={explanationStyle}>
// // // // // // //             {explanation}
// // // // // // //           </div>
// // // // // // //         )}
        
// // // // // // //         {links && links.length > 0 && (
// // // // // // //           <div style={linksContainerStyle}>
// // // // // // //             {links.map((link, index) => (
// // // // // // //               link.text && link.url ? (
// // // // // // //                 <a
// // // // // // //                   key={index}
// // // // // // //                   href={link.url}
// // // // // // //                   target="_blank"
// // // // // // //                   rel="noopener noreferrer"
// // // // // // //                   style={{
// // // // // // //                     ...linkStyle,
// // // // // // //                     ...(hoveredLink === index ? linkHoverStyle : {})
// // // // // // //                   }}
// // // // // // //                   onMouseEnter={() => setHoveredLink(index)}
// // // // // // //                   onMouseLeave={() => setHoveredLink(null)}
// // // // // // //                 >
// // // // // // //                   {link.text}
// // // // // // //                 </a>
// // // // // // //               ) : null
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </>
// // // // // // //     );

// // // // // // //     if (layout === 'horizontal') {
// // // // // // //       return (
// // // // // // //         <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
// // // // // // //           <div style={{ flex: '1', minWidth: '300px' }}>
// // // // // // //             {svgElement}
// // // // // // //           </div>
// // // // // // //           <div style={{ flex: '1', minWidth: '300px' }}>
// // // // // // //             {textContent}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       );
// // // // // // //     }

// // // // // // //     if (layout === 'side-by-side') {
// // // // // // //       return (
// // // // // // //         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'start' }}>
// // // // // // //           <div>
// // // // // // //             {svgElement}
// // // // // // //           </div>
// // // // // // //           <div>
// // // // // // //             {textContent}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       );
// // // // // // //     }

// // // // // // //     // Default vertical layout
// // // // // // //     return (
// // // // // // //       <div>
// // // // // // //         {svgElement}
// // // // // // //         {textContent}
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div style={containerStyleFinal}>
// // // // // // //       {showTitle && title && (
// // // // // // //         <h2 style={titleStyle}>{title}</h2>
// // // // // // //       )}
      
// // // // // // //       {renderContent()}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default SvgDiagram;

// // // // // // import React from 'react';

// // // // // // const SvgDiagram = ({ 
// // // // // //   layout = 'vertical', // 'vertical', 'horizontal', 'side-by-side'
// // // // // //   width = 'auto',
// // // // // //   height = 'auto',
// // // // // //   scale = 1.0,
// // // // // //   data = {}, // This is the single identity object: { svg: '', explanation: '', links: [] }
// // // // // //   showFrame = true,
// // // // // //   showTitle = true
// // // // // // }) => {
// // // // // //   const [hoveredLink, setHoveredLink] = React.useState(null);

// // // // // //   // Fixed styles
// // // // // //   const frameStyle = {
// // // // // //     border: '2px solid #d1d5db',
// // // // // //     borderRadius: '16px',
// // // // // //     padding: '30px',
// // // // // //     margin: '20px',
// // // // // //     backgroundColor: '#ffffff',
// // // // // //     boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
// // // // // //   };

// // // // // //   const diagramStyle = {
// // // // // //     width: '100%',
// // // // // //     height: 'auto',
// // // // // //     minHeight: '200px',
// // // // // //     border: '2px solid #e2e8f0',
// // // // // //     borderRadius: '12px',
// // // // // //     padding: '20px',
// // // // // //     backgroundColor: '#fafbfc'
// // // // // //   };

// // // // // //   const svgContainerStyle = {
// // // // // //     width: '100%',
// // // // // //     height: 'auto',
// // // // // //     textAlign: 'center'
// // // // // //   };

// // // // // //   const titleStyle = {
// // // // // //     fontSize: '22px',
// // // // // //     fontWeight: '600',
// // // // // //     marginBottom: '20px',
// // // // // //     color: '#2c3e50',
// // // // // //     textAlign: 'center',
// // // // // //     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif'
// // // // // //   };

// // // // // //   const explanationStyle = {
// // // // // //     fontSize: '16px',
// // // // // //     lineHeight: '1.8',
// // // // // //     marginTop: '25px',
// // // // // //     marginBottom: '25px',
// // // // // //     padding: '24px',
// // // // // //     backgroundColor: '#f8fafc',
// // // // // //     borderRadius: '12px',
// // // // // //     color: '#1e293b',
// // // // // //     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
// // // // // //     border: '2px solid #e2e8f0',
// // // // // //     fontWeight: '400'
// // // // // //   };

// // // // // //   const linksContainerStyle = {
// // // // // //     marginTop: '20px',
// // // // // //     textAlign: 'center'
// // // // // //   };

// // // // // //   const linkStyle = {
// // // // // //     display: 'inline-block',
// // // // // //     margin: '6px 12px',
// // // // // //     padding: '10px 20px',
// // // // // //     backgroundColor: '#6c757d',
// // // // // //     color: 'white',
// // // // // //     textDecoration: 'none',
// // // // // //     borderRadius: '8px',
// // // // // //     fontSize: '14px',
// // // // // //     fontWeight: '500',
// // // // // //     transition: 'all 0.2s ease',
// // // // // //     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif'
// // // // // //   };

// // // // // //   const linkHoverStyle = {
// // // // // //     backgroundColor: '#495057',
// // // // // //     transform: 'translateY(-1px)'
// // // // // //   };

// // // // // //   // data is now the single identity object directly
// // // // // //   const { svg = '', explanation = '', links = [], title = '' } = data;

// // // // // //   if (!svg && !explanation && (!links || links.length === 0)) {
// // // // // //     return (
// // // // // //       <div style={{ ...frameStyle, textAlign: 'center', padding: '40px' }}>
// // // // // //         <p style={{ color: '#999', fontSize: '16px' }}>No diagram data provided</p>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   const containerStyleFinal = showFrame ? { 
// // // // // //     ...frameStyle, 
// // // // // //     width, 
// // // // // //     height,
// // // // // //     transform: `scale(${scale})`,
// // // // // //     transformOrigin: 'top center'
// // // // // //   } : { 
// // // // // //     width, 
// // // // // //     height,
// // // // // //     transform: `scale(${scale})`,
// // // // // //     transformOrigin: 'top center'
// // // // // //   };

// // // // // //   const renderContent = () => {
// // // // // //     const svgElement = svg && (
// // // // // //       <div style={diagramStyle}>
// // // // // //         <div 
// // // // // //           style={svgContainerStyle}
// // // // // //           dangerouslySetInnerHTML={{ 
// // // // // //             __html: svg.replace(/<svg([^>]*)>/, '<svg$1 style="width: 100%; height: auto; max-width: 100%;">') 
// // // // // //           }}
// // // // // //         />
// // // // // //       </div>
// // // // // //     );

// // // // // //     const textContent = (
// // // // // //       <>
// // // // // //         {explanation && (
// // // // // //           <div style={explanationStyle}>
// // // // // //             {explanation}
// // // // // //           </div>
// // // // // //         )}
        
// // // // // //         {links && links.length > 0 && (
// // // // // //           <div style={linksContainerStyle}>
// // // // // //             {links.map((link, index) => (
// // // // // //               link.text && link.url ? (
// // // // // //                 <a
// // // // // //                   key={index}
// // // // // //                   href={link.url}
// // // // // //                   target="_blank"
// // // // // //                   rel="noopener noreferrer"
// // // // // //                   style={{
// // // // // //                     ...linkStyle,
// // // // // //                     ...(hoveredLink === index ? linkHoverStyle : {})
// // // // // //                   }}
// // // // // //                   onMouseEnter={() => setHoveredLink(index)}
// // // // // //                   onMouseLeave={() => setHoveredLink(null)}
// // // // // //                 >
// // // // // //                   {link.text}
// // // // // //                 </a>
// // // // // //               ) : null
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </>
// // // // // //     );

// // // // // //     if (layout === 'horizontal') {
// // // // // //       return (
// // // // // //         <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
// // // // // //           <div style={{ flex: '1', minWidth: '300px' }}>
// // // // // //             {svgElement}
// // // // // //           </div>
// // // // // //           <div style={{ flex: '1', minWidth: '300px' }}>
// // // // // //             {textContent}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       );
// // // // // //     }

// // // // // //     if (layout === 'side-by-side') {
// // // // // //       return (
// // // // // //         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'start' }}>
// // // // // //           <div>
// // // // // //             {svgElement}
// // // // // //           </div>
// // // // // //           <div>
// // // // // //             {textContent}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       );
// // // // // //     }

// // // // // //     // Default vertical layout
// // // // // //     return (
// // // // // //       <div>
// // // // // //         {svgElement}
// // // // // //         {textContent}
// // // // // //       </div>
// // // // // //     );
// // // // // //   };

// // // // // //   return (
// // // // // //     <div style={containerStyleFinal}>
// // // // // //       {showTitle && title && (
// // // // // //         <h2 style={titleStyle}>{title}</h2>
// // // // // //       )}
      
// // // // // //       {renderContent()}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default SvgDiagram;

// // // // // import React from 'react';

// // // // // const SvgDiagram = ({ 
// // // // //   layout = 'vertical', // 'vertical', 'horizontal', 'side-by-side'
// // // // //   width = 'auto',
// // // // //   height = 'auto',
// // // // //   scale = 1.0,
// // // // //   data = {}, // This is the single identity object: { svg: '', explanation: '', links: [] }
// // // // //   showFrame = true,
// // // // //   showTitle = true
// // // // // }) => {
// // // // //   const [hoveredLink, setHoveredLink] = React.useState(null);

// // // // //   // Fixed styles
// // // // //   const frameStyle = {
// // // // //     border: '2px solid #d1d5db',
// // // // //     borderRadius: '16px',
// // // // //     padding: '30px',
// // // // //     margin: '20px',
// // // // //     backgroundColor: '#ffffff',
// // // // //     boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
// // // // //   };

// // // // //   const diagramStyle = {
// // // // //     width: '100%',
// // // // //     height: 'auto',
// // // // //     minHeight: '200px',
// // // // //     border: '2px solid #e2e8f0',
// // // // //     borderRadius: '12px',
// // // // //     padding: '20px',
// // // // //     backgroundColor: '#fafbfc',
// // // // //     boxSizing: 'border-box',
// // // // //     overflow: 'hidden'
// // // // //   };

// // // // //   const svgContainerStyle = {
// // // // //     width: '100%',
// // // // //     height: 'auto',
// // // // //     textAlign: 'center'
// // // // //   };

// // // // //   const titleStyle = {
// // // // //     fontSize: '22px',
// // // // //     fontWeight: '600',
// // // // //     marginBottom: '20px',
// // // // //     color: '#2c3e50',
// // // // //     textAlign: 'center',
// // // // //     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif'
// // // // //   };

// // // // //   const explanationStyle = {
// // // // //     fontSize: '16px',
// // // // //     lineHeight: '1.8',
// // // // //     marginTop: '25px',
// // // // //     marginBottom: '25px',
// // // // //     padding: '24px',
// // // // //     backgroundColor: '#f8fafc',
// // // // //     borderRadius: '12px',
// // // // //     color: '#1e293b',
// // // // //     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
// // // // //     border: '2px solid #e2e8f0',
// // // // //     fontWeight: '400'
// // // // //   };

// // // // //   const linksContainerStyle = {
// // // // //     marginTop: '20px',
// // // // //     textAlign: 'center'
// // // // //   };

// // // // //   const linkStyle = {
// // // // //     display: 'inline-block',
// // // // //     margin: '6px 12px',
// // // // //     padding: '10px 20px',
// // // // //     backgroundColor: '#6c757d',
// // // // //     color: 'white',
// // // // //     textDecoration: 'none',
// // // // //     borderRadius: '8px',
// // // // //     fontSize: '14px',
// // // // //     fontWeight: '500',
// // // // //     transition: 'all 0.2s ease',
// // // // //     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif'
// // // // //   };

// // // // //   const linkHoverStyle = {
// // // // //     backgroundColor: '#495057',
// // // // //     transform: 'translateY(-1px)'
// // // // //   };

// // // // //   // data is now the single identity object directly
// // // // //   const { svg = '', explanation = '', links = [], title = '' } = data;

// // // // //   if (!svg && !explanation && (!links || links.length === 0)) {
// // // // //     return (
// // // // //       <div style={{ ...frameStyle, textAlign: 'center', padding: '40px' }}>
// // // // //         <p style={{ color: '#999', fontSize: '16px' }}>No diagram data provided</p>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   const containerStyleFinal = showFrame ? { 
// // // // //     ...frameStyle, 
// // // // //     width, 
// // // // //     height,
// // // // //     transform: `scale(${scale})`,
// // // // //     transformOrigin: 'top center'
// // // // //   } : { 
// // // // //     width, 
// // // // //     height,
// // // // //     transform: `scale(${scale})`,
// // // // //     transformOrigin: 'top center'
// // // // //   };

// // // // //   const renderContent = () => {
// // // // //     const svgElement = svg && (
// // // // //       <div 
// // // // //         style={diagramStyle}
// // // // //         dangerouslySetInnerHTML={{ 
// // // // //           __html: svg.replace(/<svg([^>]*)>/, '<svg$1 style="width: 100%; height: auto; max-width: 100%; display: block;">') 
// // // // //         }}
// // // // //       />
// // // // //     );

// // // // //     const textContent = (
// // // // //       <>
// // // // //         {explanation && (
// // // // //           <div style={explanationStyle}>
// // // // //             {explanation}
// // // // //           </div>
// // // // //         )}
        
// // // // //         {links && links.length > 0 && (
// // // // //           <div style={linksContainerStyle}>
// // // // //             {links.map((link, index) => (
// // // // //               link.text && link.url ? (
// // // // //                 <a
// // // // //                   key={index}
// // // // //                   href={link.url}
// // // // //                   target="_blank"
// // // // //                   rel="noopener noreferrer"
// // // // //                   style={{
// // // // //                     ...linkStyle,
// // // // //                     ...(hoveredLink === index ? linkHoverStyle : {})
// // // // //                   }}
// // // // //                   onMouseEnter={() => setHoveredLink(index)}
// // // // //                   onMouseLeave={() => setHoveredLink(null)}
// // // // //                 >
// // // // //                   {link.text}
// // // // //                 </a>
// // // // //               ) : null
// // // // //             ))}
// // // // //           </div>
// // // // //         )}
// // // // //       </>
// // // // //     );

// // // // //     if (layout === 'horizontal') {
// // // // //       return (
// // // // //         <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
// // // // //           <div style={{ flex: '1', minWidth: '300px' }}>
// // // // //             {svgElement}
// // // // //           </div>
// // // // //           <div style={{ flex: '1', minWidth: '300px' }}>
// // // // //             {textContent}
// // // // //           </div>
// // // // //         </div>
// // // // //       );
// // // // //     }

// // // // //     if (layout === 'side-by-side') {
// // // // //       return (
// // // // //         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'start' }}>
// // // // //           <div>
// // // // //             {svgElement}
// // // // //           </div>
// // // // //           <div>
// // // // //             {textContent}
// // // // //           </div>
// // // // //         </div>
// // // // //       );
// // // // //     }

// // // // //     // Default vertical layout
// // // // //     return (
// // // // //       <div>
// // // // //         {svgElement}
// // // // //         {textContent}
// // // // //       </div>
// // // // //     );
// // // // //   };

// // // // //   return (
// // // // //     <div style={containerStyleFinal}>
// // // // //       {showTitle && title && (
// // // // //         <h2 style={titleStyle}>{title}</h2>
// // // // //       )}
      
// // // // //       {renderContent()}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default SvgDiagram;


// // // // import React from 'react';
// // // // import { processContent } from '@/app/utils/contentProcessor';

// // // // const SvgDiagram = ({ 
// // // //   layout = 'vertical', // 'vertical', 'horizontal', 'side-by-side'
// // // //   width = 'auto',
// // // //   height = 'auto',
// // // //   scale = 1.0,
// // // //   data = {}, // This is the single identity object: { svg: '', explanation: '', links: [] }
// // // //   showFrame = true,
// // // //   showTitle = true
// // // // }) => {
// // // //   const [hoveredLink, setHoveredLink] = React.useState(null);

// // // //   // Fixed styles
// // // //   const frameStyle = {
// // // //     border: '2px solid #d1d5db',
// // // //     borderRadius: '16px',
// // // //     padding: '30px',
// // // //     margin: '20px',
// // // //     backgroundColor: '#ffffff',
// // // //     boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
// // // //   };

// // // //   const diagramStyle = {
// // // //     width: '100%',
// // // //     height: 'auto',
// // // //     minHeight: '200px',
// // // //     border: '2px solid #e2e8f0',
// // // //     borderRadius: '12px',
// // // //     padding: '20px',
// // // //     backgroundColor: '#fafbfc',
// // // //     boxSizing: 'border-box',
// // // //     overflow: 'hidden'
// // // //   };

// // // //   const svgContainerStyle = {
// // // //     width: '100%',
// // // //     height: 'auto',
// // // //     textAlign: 'center'
// // // //   };

// // // //   const titleStyle = {
// // // //     fontSize: '22px',
// // // //     fontWeight: '600',
// // // //     marginBottom: '20px',
// // // //     color: '#2c3e50',
// // // //     textAlign: 'center',
// // // //     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif'
// // // //   };

// // // //   const explanationStyle = {
// // // //     fontSize: '16px',
// // // //     lineHeight: '1.8',
// // // //     marginTop: '0px',
// // // //     marginBottom: '25px',
// // // //     padding: '24px',
// // // //     backgroundColor: '#f8fafc',
// // // //     borderRadius: '12px',
// // // //     color: '#1e293b',
// // // //     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
// // // //     border: '2px solid #e2e8f0',
// // // //     fontWeight: '400'
// // // //   };

// // // //   const linksContainerStyle = {
// // // //     marginTop: '20px',
// // // //     textAlign: 'center'
// // // //   };

// // // //   const linkStyle = {
// // // //     display: 'inline-block',
// // // //     margin: '6px 12px',
// // // //     padding: '10px 20px',
// // // //     backgroundColor: '#6c757d',
// // // //     color: 'white',
// // // //     textDecoration: 'none',
// // // //     borderRadius: '8px',
// // // //     fontSize: '14px',
// // // //     fontWeight: '500',
// // // //     transition: 'all 0.2s ease',
// // // //     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif'
// // // //   };

// // // //   const linkHoverStyle = {
// // // //     backgroundColor: '#495057',
// // // //     transform: 'translateY(-1px)'
// // // //   };

// // // //   // data is now the single identity object directly
// // // //   const { svg = '', explanation = '', links = [], title = '' } = data;

// // // //   if (!svg && !explanation && (!links || links.length === 0)) {
// // // //     return (
// // // //       <div style={{ ...frameStyle, textAlign: 'center', padding: '40px' }}>
// // // //         <p style={{ color: '#999', fontSize: '16px' }}>No diagram data provided</p>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   const containerStyleFinal = showFrame ? { 
// // // //     ...frameStyle, 
// // // //     width, 
// // // //     height,
// // // //     transform: `scale(${scale})`,
// // // //     transformOrigin: 'top center'
// // // //   } : { 
// // // //     width, 
// // // //     height,
// // // //     transform: `scale(${scale})`,
// // // //     transformOrigin: 'top center'
// // // //   };

// // // //   const renderContent = () => {
// // // //     const svgElement = svg && (
// // // //       <div 
// // // //         style={diagramStyle}
// // // //         dangerouslySetInnerHTML={{ 
// // // //           __html: svg.replace(/<svg([^>]*)>/, '<svg$1 style="width: 100%; height: auto; max-width: 100%; display: block;">') 
// // // //         }}
// // // //       />
// // // //     );

// // // //     const textContent = (
// // // //       <>
// // // //         {explanation && (
// // // //           <div style={explanationStyle}>
// // // //             {explanation}
// // // //           </div>
// // // //         )}
        
// // // //         {links && links.length > 0 && (
// // // //           <div style={linksContainerStyle}>
// // // //             {links.map((link, index) => (
// // // //               link.text && link.url ? (
// // // //                 <a
// // // //                   key={index}
// // // //                   href={link.url}
// // // //                   target="_blank"
// // // //                   rel="noopener noreferrer"
// // // //                   style={{
// // // //                     ...linkStyle,
// // // //                     ...(hoveredLink === index ? linkHoverStyle : {})
// // // //                   }}
// // // //                   onMouseEnter={() => setHoveredLink(index)}
// // // //                   onMouseLeave={() => setHoveredLink(null)}
// // // //                 >
// // // //                   {link.text}
// // // //                 </a>
// // // //               ) : null
// // // //             ))}
// // // //           </div>
// // // //         )}
// // // //       </>
// // // //     );

// // // //     if (layout === 'horizontal') {
// // // //       return (
// // // //         <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
// // // //           <div style={{ flex: '1', minWidth: '300px' }}>
// // // //             {svgElement}
// // // //           </div>
// // // //           <div style={{ flex: '1', minWidth: '300px', marginTop: '0px' }}>
// // // //             {textContent}
// // // //           </div>
// // // //         </div>
// // // //       );
// // // //     }

// // // //     if (layout === 'side-by-side') {
// // // //       return (
// // // //         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'start' }}>
// // // //           <div>
// // // //             {svgElement}
// // // //           </div>
// // // //           <div>
// // // //             {textContent}
// // // //           </div>
// // // //         </div>
// // // //       );
// // // //     }

// // // //     // Default vertical layout
// // // //     return (
// // // //       <div>
// // // //         {svgElement}
// // // //         {textContent}
// // // //       </div>
// // // //     );
// // // //   };

// // // //   return (
// // // //     <div style={containerStyleFinal}>
// // // //       {showTitle && title && (
// // // //         <h2 style={titleStyle}>{title}</h2>
// // // //       )}
      
// // // //       {renderContent()}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SvgDiagram;


// // // import React from 'react';
// // // import { processContent } from '@/app/utils/contentProcessor';

// // // const SvgDiagram = ({ 
// // //   layout = 'vertical', // 'vertical', 'horizontal', 'side-by-side'
// // //   width = 'auto',
// // //   height = 'auto',
// // //   scale = 1.0,
// // //   data = {}, // This is the single identity object: { svg: '', explanation: '', links: [] }
// // //   showFrame = true,
// // //   showTitle = true
// // // }) => {
// // //   const [hoveredLink, setHoveredLink] = React.useState(null);

// // //   // Fixed styles
// // //   const frameStyle = {
// // //     border: '2px solid #d1d5db',
// // //     borderRadius: '16px',
// // //     padding: '30px',
// // //     margin: '20px',
// // //     backgroundColor: '#ffffff',
// // //     boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
// // //   };

// // //   const diagramStyle = {
// // //     width: '100%',
// // //     height: 'auto',
// // //     minHeight: '200px',
// // //     border: '2px solid #e2e8f0',
// // //     borderRadius: '12px',
// // //     padding: '20px',
// // //     backgroundColor: '#fafbfc',
// // //     boxSizing: 'border-box',
// // //     overflow: 'hidden'
// // //   };

// // //   const svgContainerStyle = {
// // //     width: '100%',
// // //     height: 'auto',
// // //     textAlign: 'center'
// // //   };

// // //   const titleStyle = {
// // //     fontSize: '22px',
// // //     fontWeight: '600',
// // //     marginBottom: '20px',
// // //     color: '#2c3e50',
// // //     textAlign: 'center',
// // //     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif'
// // //   };

// // //   const explanationStyle = {
// // //     fontSize: '16px',
// // //     lineHeight: '1.8',
// // //     marginTop: '0px',
// // //     marginBottom: '25px',
// // //     padding: '24px',
// // //     backgroundColor: '#f8fafc',
// // //     borderRadius: '12px',
// // //     color: '#1e293b',
// // //     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
// // //     border: '2px solid #e2e8f0',
// // //     fontWeight: '400'
// // //   };

// // //   const linksContainerStyle = {
// // //     marginTop: '20px',
// // //     textAlign: 'center'
// // //   };

// // //   const linkStyle = {
// // //     display: 'inline-block',
// // //     margin: '6px 12px',
// // //     padding: '10px 20px',
// // //     backgroundColor: '#6c757d',
// // //     color: 'white',
// // //     textDecoration: 'none',
// // //     borderRadius: '8px',
// // //     fontSize: '14px',
// // //     fontWeight: '500',
// // //     transition: 'all 0.2s ease',
// // //     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif'
// // //   };

// // //   const linkHoverStyle = {
// // //     backgroundColor: '#495057',
// // //     transform: 'translateY(-1px)'
// // //   };

// // //   // data is now the single identity object directly
// // //   const { svg = '', explanation = '', links = [], title = '' } = data;

// // //   if (!svg && !explanation && (!links || links.length === 0)) {
// // //     return (
// // //       <div style={{ ...frameStyle, textAlign: 'center', padding: '40px' }}>
// // //         <p style={{ color: '#999', fontSize: '16px' }}>No diagram data provided</p>
// // //       </div>
// // //     );
// // //   }

// // //   const containerStyleFinal = showFrame ? { 
// // //     ...frameStyle, 
// // //     width, 
// // //     height,
// // //     transform: `scale(${scale})`,
// // //     transformOrigin: 'top center'
// // //   } : { 
// // //     width, 
// // //     height,
// // //     transform: `scale(${scale})`,
// // //     transformOrigin: 'top center'
// // //   };

// // //   const renderContent = () => {
// // //     const svgElement = svg && (
// // //       <div 
// // //         style={diagramStyle}
// // //         dangerouslySetInnerHTML={{ 
// // //           __html: svg.replace(/<svg([^>]*)>/, '<svg$1 style="width: 100%; height: auto; max-width: 100%; display: block;">') 
// // //         }}
// // //       />
// // //     );

// // //     const textContent = (
// // //       <>
// // //         {explanation && (
// // //           <div style={explanationStyle}>
// // //             {processContent(explanation)}
// // //           </div>
// // //         )}
        
// // //         {links && links.length > 0 && (
// // //           <div style={linksContainerStyle}>
// // //             {links.map((link, index) => (
// // //               link.text && link.url ? (
// // //                 <a
// // //                   key={index}
// // //                   href={link.url}
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   style={{
// // //                     ...linkStyle,
// // //                     ...(hoveredLink === index ? linkHoverStyle : {})
// // //                   }}
// // //                   onMouseEnter={() => setHoveredLink(index)}
// // //                   onMouseLeave={() => setHoveredLink(null)}
// // //                 >
// // //                   {processContent(link.text)}
// // //                 </a>
// // //               ) : null
// // //             ))}
// // //           </div>
// // //         )}
// // //       </>
// // //     );

// // //     if (layout === 'horizontal') {
// // //       return (
// // //         <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
// // //           <div style={{ flex: '1', minWidth: '300px' }}>
// // //             {svgElement}
// // //           </div>
// // //           <div style={{ flex: '1', minWidth: '300px', marginTop: '0px' }}>
// // //             {textContent}
// // //           </div>
// // //         </div>
// // //       );
// // //     }

// // //     if (layout === 'side-by-side') {
// // //       return (
// // //         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'start' }}>
// // //           <div>
// // //             {svgElement}
// // //           </div>
// // //           <div>
// // //             {textContent}
// // //           </div>
// // //         </div>
// // //       );
// // //     }

// // //     // Default vertical layout
// // //     return (
// // //       <div>
// // //         {svgElement}
// // //         {textContent}
// // //       </div>
// // //     );
// // //   };

// // //   return (
// // //     <div style={containerStyleFinal}>
// // //       {showTitle && title && (
// // //         <h2 style={titleStyle}>
// // //           {processContent(title)}
// // //         </h2>
// // //       )}
      
// // //       {renderContent()}
// // //     </div>
// // //   );
// // // };

// // // export default SvgDiagram;


// // import React from 'react';
// // import { processContent } from '@/app/utils/contentProcessor';

// // const SvgDiagram = ({ 
// //   layout = 'vertical', // 'vertical', 'horizontal', 'side-by-side'
// //   width = 'auto',
// //   height = 'auto',
// //   scale = 1.0,
// //   data = {}, // This is the single identity object: { svg: '', explanation: '', links: [] }
// //   showFrame = true,
// //   showTitle = true
// // }) => {
// //   const [hoveredLink, setHoveredLink] = React.useState(null);

// //   // Fixed styles
// //   const frameStyle = {
// //     border: '2px solid #d1d5db',
// //     borderRadius: '16px',
// //     padding: '30px',
// //     margin: '20px',
// //     backgroundColor: '#ffffff',
// //     boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
// //   };

// //   const diagramStyle = {
// //     width: '100%',
// //     height: 'auto',
// //     minHeight: '200px',
// //     border: '2px solid #e2e8f0',
// //     borderRadius: '12px',
// //     padding: '20px',
// //     backgroundColor: '#fafbfc',
// //     boxSizing: 'border-box',
// //     overflow: 'hidden'
// //   };

// //   const svgContainerStyle = {
// //     width: '100%',
// //     height: 'auto',
// //     textAlign: 'center'
// //   };

// //   const titleStyle = {
// //     fontSize: '22px',
// //     fontWeight: '600',
// //     marginBottom: '20px',
// //     color: '#2c3e50',
// //     textAlign: 'center',
// //     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif'
// //   };

// //   const explanationStyle = {
// //     fontSize: '16px',
// //     lineHeight: '1.8',
// //     marginTop: '30px',
// //     marginBottom: '30px',
// //     padding: '24px',
// //     backgroundColor: '#f8fafc',
// //     borderRadius: '12px',
// //     color: '#1e293b',
// //     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
// //     border: '2px solid #e2e8f0',
// //     fontWeight: '400'
// //   };

// //   const linksContainerStyle = {
// //     marginTop: '20px',
// //     textAlign: 'center'
// //   };

// //   const linkStyle = {
// //     display: 'inline-block',
// //     margin: '6px 12px',
// //     padding: '12px 24px',
// //     backgroundColor: '#3b82f6',
// //     color: 'white',
// //     textDecoration: 'none',
// //     borderRadius: '8px',
// //     fontSize: '14px',
// //     fontWeight: '500',
// //     transition: 'all 0.2s ease',
// //     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
// //     boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)'
// //   };

// //   const linkHoverStyle = {
// //     backgroundColor: '#2563eb',
// //     transform: 'translateY(-1px)',
// //     boxShadow: '0 4px 8px rgba(59, 130, 246, 0.4)'
// //   };

// //   // data is now the single identity object directly
// //   const { svg = '', explanation = '', links = [], title = '' } = data;

// //   if (!svg && !explanation && (!links || links.length === 0)) {
// //     return (
// //       <div style={{ ...frameStyle, textAlign: 'center', padding: '40px' }}>
// //         <p style={{ color: '#999', fontSize: '16px' }}>No diagram data provided</p>
// //       </div>
// //     );
// //   }

// //   const containerStyleFinal = showFrame ? { 
// //     ...frameStyle, 
// //     width, 
// //     height,
// //     transform: `scale(${scale})`,
// //     transformOrigin: 'top center'
// //   } : { 
// //     width, 
// //     height,
// //     transform: `scale(${scale})`,
// //     transformOrigin: 'top center'
// //   };

// //   const renderContent = () => {
// //     const svgElement = svg && (
// //       <div 
// //         style={diagramStyle}
// //         dangerouslySetInnerHTML={{ 
// //           __html: svg.replace(/<svg([^>]*)>/, '<svg$1 style="width: 100%; height: auto; max-width: 100%; display: block;">') 
// //         }}
// //       />
// //     );

// //     const textContent = (
// //       <>
// //         {explanation && (
// //           <div style={explanationStyle}>
// //             {processContent(explanation)}
// //           </div>
// //         )}
        
// //         {links && links.length > 0 && (
// //           <div style={linksContainerStyle}>
// //             {links.map((link, index) => (
// //               link.text && link.url ? (
// //                 <a
// //                   key={index}
// //                   href={link.url}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   style={{
// //                     ...linkStyle,
// //                     ...(hoveredLink === index ? linkHoverStyle : {})
// //                   }}
// //                   onMouseEnter={() => setHoveredLink(index)}
// //                   onMouseLeave={() => setHoveredLink(null)}
// //                 >
// //                   {processContent(link.text)}
// //                 </a>
// //               ) : null
// //             ))}
// //           </div>
// //         )}
// //       </>
// //     );

// //     if (layout === 'horizontal') {
// //       return (
// //         <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
// //           <div style={{ flex: '1', minWidth: '300px' }}>
// //             {svgElement}
// //           </div>
// //           <div style={{ flex: '1', minWidth: '300px' }}>
// //             <div style={{ ...explanationStyle, marginTop: '0px' }}>
// //               {processContent(explanation)}
// //             </div>
// //             {links && links.length > 0 && (
// //               <div style={linksContainerStyle}>
// //                 {links.map((link, index) => (
// //                   link.text && link.url ? (
// //                     <a
// //                       key={index}
// //                       href={link.url}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       style={{
// //                         ...linkStyle,
// //                         ...(hoveredLink === index ? linkHoverStyle : {})
// //                       }}
// //                       onMouseEnter={() => setHoveredLink(index)}
// //                       onMouseLeave={() => setHoveredLink(null)}
// //                     >
// //                       {processContent(link.text)}
// //                     </a>
// //                   ) : null
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       );
// //     }

// //     if (layout === 'side-by-side') {
// //       return (
// //         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'start' }}>
// //           <div>
// //             {svgElement}
// //           </div>
// //           <div>
// //             {textContent}
// //           </div>
// //         </div>
// //       );
// //     }

// //     // Default vertical layout
// //     return (
// //       <div>
// //         {svgElement}
// //         {textContent}
// //       </div>
// //     );
// //   };

// //   return (
// //     <div style={containerStyleFinal}>
// //       {showTitle && title && (
// //         <h2 style={titleStyle}>
// //           {processContent(title)}
// //         </h2>
// //       )}
      
// //       {renderContent()}
// //     </div>
// //   );
// // };

// // export default SvgDiagram;


// import React from 'react';
// import { processContent } from '@/app/utils/contentProcessor';

// const SvgDiagram = ({ 
//   layout = 'vertical',
//   width = 'auto',
//   height = 'auto',
//   scale = 1.0,
//   data = {},
//   showFrame = true,
//   showTitle = true
// }) => {
//   const [hoveredLink, setHoveredLink] = React.useState(null);

//   const frameStyle = {
//     border: '2px solid #d1d5db',
//     borderRadius: '16px',
//     padding: '30px',
//     margin: '20px',
//     backgroundColor: '#ffffff',
//     boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
//   };

//   const diagramStyle = {
//     width: '100%',
//     height: 'auto',
//     minHeight: '200px',
//     border: '2px solid #e2e8f0',
//     borderRadius: '12px',
//     padding: '20px',
//     backgroundColor: '#fafbfc',
//     boxSizing: 'border-box',
//     overflow: 'hidden'
//   };

//   const titleStyle = {
//     fontSize: '22px',
//     fontWeight: '600',
//     marginBottom: '20px',
//     color: '#2c3e50',
//     textAlign: 'center',
//     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif'
//   };

//   const explanationStyle = {
//     fontSize: '16px',
//     lineHeight: '1.8',
//     marginTop: '30px',
//     marginBottom: '30px',
//     padding: '24px',
//     backgroundColor: '#f8fafc',
//     borderRadius: '12px',
//     color: '#1e293b',
//     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
//     border: '2px solid #e2e8f0',
//     fontWeight: '400'
//   };

//   const linksContainerStyle = {
//     marginTop: '20px',
//     textAlign: 'center'
//   };

//   const linkStyle = {
//     display: 'inline-block',
//     margin: '6px 12px',
//     padding: '12px 24px',
//     backgroundColor: '#3b82f6',
//     color: 'white',
//     textDecoration: 'none',
//     borderRadius: '8px',
//     fontSize: '14px',
//     fontWeight: '500',
//     transition: 'all 0.2s ease',
//     fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
//     boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)'
//   };

//   const linkHoverStyle = {
//     backgroundColor: '#2563eb',
//     transform: 'translateY(-1px)',
//     boxShadow: '0 4px 8px rgba(59, 130, 246, 0.4)'
//   };

//   React.useEffect(() => {
//     const style = document.createElement('style');
//     style.textContent = '.markdown-link { color: #3b82f6 !important; text-decoration: none !important; font-weight: 500; transition: color 0.2s ease; } .markdown-link:hover { color: #2563eb !important; text-decoration: underline !important; }';
//     document.head.appendChild(style);
    
//     return () => {
//       if (document.head.contains(style)) {
//         document.head.removeChild(style);
//       }
//     };
//   }, []);

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
//     transform: `scale(${scale})`,
//     transformOrigin: 'top center'
//   } : { 
//     width, 
//     height,
//     transform: `scale(${scale})`,
//     transformOrigin: 'top center'
//   };

//   const renderContent = () => {
//     const svgElement = svg && (
//       <div 
//         style={diagramStyle}
//         dangerouslySetInnerHTML={{ 
//           __html: svg.replace(/<svg([^>]*)>/, '<svg$1 style="width: 100%; height: auto; max-width: 100%; display: block;">') 
//         }}
//       />
//     );

//     const textContent = (
//       <>
//         {explanation && (
//           <div style={explanationStyle}>
//             {processContent(explanation)}
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
//                   {processContent(link.text)}
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
//             <div style={{ ...explanationStyle, marginTop: '0px' }}>
//               {processContent(explanation)}
//             </div>
//             {links && links.length > 0 && (
//               <div style={linksContainerStyle}>
//                 {links.map((link, index) => (
//                   link.text && link.url ? (
//                     <a
//                       key={index}
//                       href={link.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       style={{
//                         ...linkStyle,
//                         ...(hoveredLink === index ? linkHoverStyle : {})
//                       }}
//                       onMouseEnter={() => setHoveredLink(index)}
//                       onMouseLeave={() => setHoveredLink(null)}
//                     >
//                       {processContent(link.text)}
//                     </a>
//                   ) : null
//                 ))}
//               </div>
//             )}
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
//         <h2 style={titleStyle}>
//           {processContent(title)}
//         </h2>
//       )}
      
//       {renderContent()}
//     </div>
//   );
// };

// export default SvgDiagram;


import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';

// **
//  * SvgDiagram - A React component for rendering SVG diagrams with explanations and links
//  * 
//  * @param {Object} props - Component props
//  * @param {string} [props.layout='vertical'] - Layout type: 'vertical', 'horizontal', 'side-by-side'
//  * @param {string} [props.width='auto'] - Component width (CSS value)
//  * @param {string} [props.height='auto'] - Component height (CSS value)
//  * @param {number} [props.scale=1.0] - Scale factor for entire component
//  * @param {number} [props.splitRatio=0.5] - Horizontal layout split ratio (0.7 = 70% SVG, 30% text)
//  * @param {Object} props.data - Single identity object containing diagram content
//  * @param {string} [props.data.title] - Optional title
//  * @param {string} props.data.svg - SVG markup (required)
//  * @param {string} [props.data.explanation] - Text explanation
//  * @param {Array} [props.data.links] - Array of {text, url} objects
//  * @param {boolean} [props.showFrame=true] - Show/hide outer border frame
//  * @param {boolean} [props.showTitle=true] - Show/hide title
//  * 
//  * @example
//  * // Basic usage
//  * <SvgDiagram data={{svg: '<svg>...</svg>', explanation: 'Text'}} />
//  * 
//  * @example
//  * // Horizontal layout with custom split
//  * <SvgDiagram 
//  *   data={data}
//  *   layout="horizontal"
//  *   splitRatio={0.7}
//  *   scale={0.8}
//  * />
//  */

const SvgDiagram = ({ 
  layout = 'vertical',
  width = 'auto',
  height = 'auto',
  scale = 1.0,
  splitRatio = 0.5, // 0.6 = 60% SVG, 40% text
  data = {},
  showFrame = true,
  showTitle = true
}) => {
  const [hoveredLink, setHoveredLink] = React.useState(null);

  const frameStyle = {
    border: '2px solid #d1d5db',
    borderRadius: '16px',
    padding: '30px',
    margin: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
  };

  const diagramStyle = {
    width: '100%',
    height: 'auto',
    minHeight: '200px',
    border: '2px solid #e2e8f0',
    borderRadius: '12px',
    padding: '20px',
    backgroundColor: '#fafbfc',
    boxSizing: 'border-box',
    overflow: 'hidden'
  };

  const titleStyle = {
    fontSize: '22px',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#2c3e50',
    textAlign: 'center',
    fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif'
  };

  const explanationStyle = {
    fontSize: '16px',
    lineHeight: '1.8',
    marginTop: '30px',
    marginBottom: '30px',
    padding: '24px',
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    color: '#1e293b',
    fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
    border: '2px solid #e2e8f0',
    fontWeight: '400'
  };

  const linksContainerStyle = {
    marginTop: '20px',
    textAlign: 'center'
  };

  const linkStyle = {
    display: 'inline-block',
    margin: '6px 12px',
    padding: '12px 24px',
    backgroundColor: '#3b82f6',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
    boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)'
  };

  const linkHoverStyle = {
    backgroundColor: '#2563eb',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 8px rgba(59, 130, 246, 0.4)'
  };

  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = '.markdown-link { color: #3b82f6 !important; text-decoration: none !important; font-weight: 500; transition: color 0.2s ease; } .markdown-link:hover { color: #2563eb !important; text-decoration: underline !important; }';
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

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
    transformOrigin: 'top center'
  } : { 
    width, 
    height,
    transform: `scale(${scale})`,
    transformOrigin: 'top center'
  };

  const renderContent = () => {
    const svgElement = svg && (
      <div 
        style={diagramStyle}
        dangerouslySetInnerHTML={{ 
          __html: svg.replace(/<svg([^>]*)>/, '<svg$1 style="width: 100%; height: auto; max-width: 100%; display: block;">') 
        }}
      />
    );

    const textContent = (
      <>
        {explanation && (
          <div style={explanationStyle}>
            {processContent(explanation)}
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
                  {processContent(link.text)}
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
          <div style={{ flex: splitRatio, minWidth: '200px' }}>
            {svgElement}
          </div>
          <div style={{ flex: 1 - splitRatio, minWidth: '200px' }}>
            <div style={{ ...explanationStyle, marginTop: '0px' }}>
              {processContent(explanation)}
            </div>
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
                      {processContent(link.text)}
                    </a>
                  ) : null
                ))}
              </div>
            )}
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
        <h2 style={titleStyle}>
          {processContent(title)}
        </h2>
      )}
      
      {renderContent()}
    </div>
  );
};

export default SvgDiagram;