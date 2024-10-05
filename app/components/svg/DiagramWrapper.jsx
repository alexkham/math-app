// // // // // // // import React from 'react';

// // // // // // // const SvgImage = ({ svg, width = '100%', height = '300px' }) => {
// // // // // // //   const viewBoxMatch = svg.match(/viewBox=["']([^"']*)["']/);
// // // // // // //   const originalViewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 100 100';

// // // // // // //   const wrappedSvg = `
// // // // // // //     <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${originalViewBox}">
// // // // // // //       ${svg.replace(/<svg[^>]*>|<\/svg>/g, '')}
// // // // // // //     </svg>
// // // // // // //   `;

// // // // // // //   return <div dangerouslySetInnerHTML={{ __html: wrappedSvg }} />;
// // // // // // // };

// // // // // // // const DiagramWrapper = ({ diagrams }) => {
// // // // // // //   const pageStyle = {
// // // // // // //     maxWidth: '1200px',
// // // // // // //     margin: '0 auto',
// // // // // // //     padding: '20px',
// // // // // // //     fontFamily: 'Arial, sans-serif',
// // // // // // //   };

// // // // // // //   const headingStyle = {
// // // // // // //     textAlign: 'center',
// // // // // // //     fontSize: '28px',
// // // // // // //     marginBottom: '30px',
// // // // // // //     color: '#333',
// // // // // // //   };

// // // // // // //   const diagramStyle = {
// // // // // // //     border: '1px solid #ddd',
// // // // // // //     borderRadius: '8px',
// // // // // // //     margin: '20px 0',
// // // // // // //     overflow: 'hidden',
// // // // // // //     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
// // // // // // //     backgroundColor: '#fff',
// // // // // // //   };

// // // // // // //   const titleStyle = {
// // // // // // //     backgroundColor: '#f0f0f0',
// // // // // // //     padding: '15px',
// // // // // // //     margin: '0',
// // // // // // //     borderBottom: '1px solid #ddd',
// // // // // // //     fontSize: '20px',
// // // // // // //     fontWeight: 'bold',
// // // // // // //     color: '#333',
// // // // // // //   };

// // // // // // //   const contentStyle = {
// // // // // // //     padding: '15px',
// // // // // // //   };

// // // // // // //   const descriptionStyle = {
// // // // // // //     backgroundColor: '#f9f9f9',
// // // // // // //     padding: '15px',
// // // // // // //     borderTop: '1px solid #ddd',
// // // // // // //     fontSize: '14px',
// // // // // // //     color: '#555',
// // // // // // //     lineHeight: '1.4',
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div style={pageStyle}>
// // // // // // //       <h1 style={headingStyle}>SVG Diagrams</h1>
// // // // // // //       {Object.entries(diagrams).map(([key, diagram], index) => (
// // // // // // //         <div key={key} style={diagramStyle}>
// // // // // // //           {diagram.title && <h2 style={titleStyle}>{diagram.title}</h2>}
// // // // // // //           <div style={contentStyle}>
// // // // // // //             {diagram.svg && <SvgImage svg={diagram.svg} width="100%" height="auto" />}
// // // // // // //           </div>
// // // // // // //           {diagram.description && (
// // // // // // //             <div style={descriptionStyle}>
// // // // // // //               <strong>Diagram #{index + 1}: </strong>
// // // // // // //               {diagram.description}
// // // // // // //             </div>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       ))}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default DiagramWrapper;
// // // // // // import React from 'react';

// // // // // // const SvgImage = ({ svg, width = '100%', height = '400px' }) => {
// // // // // //   if (!svg) return null;

// // // // // //   // Extract viewBox from the original SVG
// // // // // //   const viewBoxMatch = svg.match(/viewBox=["']([^"']*)["']/);
// // // // // //   const originalViewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 100 100';

// // // // // //   // Create a wrapper SVG with consistent size
// // // // // //   const wrappedSvg = `
// // // // // //     <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${originalViewBox}">
// // // // // //       ${svg.replace(/<svg[^>]*>|<\/svg>/g, '')}
// // // // // //     </svg>
// // // // // //   `;

// // // // // //   return <div dangerouslySetInnerHTML={{ __html: wrappedSvg }} />;
// // // // // // };

// // // // // // const DiagramWrapper = ({ diagrams }) => {
// // // // // //   if (!diagrams || Object.keys(diagrams).length === 0) {
// // // // // //     return <div>No diagrams available</div>;
// // // // // //   }

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <h1>SVG Diagrams</h1>
// // // // // //       {Object.entries(diagrams).map(([key, diagram]) => (
// // // // // //         <div key={key} style={{ marginBottom: '20px' }}>
// // // // // //           <h2>{diagram.title}</h2>
// // // // // //           <SvgImage svg={diagram.svg} width="100%" height="400px" />
// // // // // //         </div>
// // // // // //       ))}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default DiagramWrapper;
// // // // // import React from 'react';

// // // // // const SvgImage = ({ svg, width = '100%', height = '400px' }) => {
// // // // //   if (!svg) return null;

// // // // //   const viewBoxMatch = svg.match(/viewBox=["']([^"']*)["']/);
// // // // //   const originalViewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 100 100';

// // // // //   const wrappedSvg = `
// // // // //     <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${originalViewBox}">
// // // // //       ${svg.replace(/<svg[^>]*>|<\/svg>/g, '')}
// // // // //     </svg>
// // // // //   `;

// // // // //   return <div dangerouslySetInnerHTML={{ __html: wrappedSvg }} />;
// // // // // };

// // // // // const DiagramWrapper = ({ diagrams }) => {
// // // // //   if (!diagrams || Object.keys(diagrams).length === 0) {
// // // // //     return <div>No diagrams available</div>;
// // // // //   }

// // // // //   const wrapperStyle = {
// // // // //     fontFamily: 'Arial, sans-serif',
// // // // //     maxWidth: '900px',
// // // // //     margin: '0 auto',
// // // // //     padding: '20px',
// // // // //   };

// // // // //   const titleStyle = {
// // // // //     fontSize: '28px',
// // // // //     color: '#333',
// // // // //     borderBottom: '2px solid #333',
// // // // //     paddingBottom: '10px',
// // // // //     marginBottom: '30px',
// // // // //   };

// // // // //   const diagramStyle = {
// // // // //     backgroundColor: '#f5f5f5',
// // // // //     border: '1px solid #ddd',
// // // // //     borderRadius: '8px',
// // // // //     padding: '20px',
// // // // //     marginBottom: '30px',
// // // // //     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
// // // // //   };

// // // // //   const diagramTitleStyle = {
// // // // //     fontSize: '22px',
// // // // //     color: '#444',
// // // // //     marginBottom: '15px',
// // // // //   };

// // // // //   const svgContainerStyle = {
// // // // //     backgroundColor: 'white',
// // // // //     border: '1px solid #ccc',
// // // // //     borderRadius: '4px',
// // // // //     padding: '10px',
// // // // //     marginBottom: '15px',
// // // // //   };

// // // // //   const descriptionStyle = {
// // // // //     fontSize: '14px',
// // // // //     color: '#666',
// // // // //     lineHeight: '1.5',
// // // // //   };

// // // // //   return (
// // // // //     <div style={wrapperStyle}>
// // // // //       <h1 style={titleStyle}>SVG Diagrams</h1>
// // // // //       {Object.entries(diagrams).map(([key, diagram], index) => (
// // // // //         <div key={key} style={diagramStyle}>
// // // // //           <h2 style={diagramTitleStyle}>{diagram.title}</h2>
// // // // //           <div style={svgContainerStyle}>
// // // // //             <SvgImage svg={diagram.svg} width="100%" height="400px" />
// // // // //           </div>
// // // // //           {diagram.description && (
// // // // //             <p style={descriptionStyle}>
// // // // //               <strong>Diagram #{index + 1}:</strong> {diagram.description}
// // // // //             </p>
// // // // //           )}
// // // // //         </div>
// // // // //       ))}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default DiagramWrapper;
// // // // // import React from 'react';

// // // // // const SvgImage = ({ svg, width, height }) => {
// // // // //   if (!svg) return null;

// // // // //   const viewBoxMatch = svg.match(/viewBox=["']([^"']*)["']/);
// // // // //   const originalViewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 100 100';

// // // // //   const wrappedSvg = `
// // // // //     <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${originalViewBox}">
// // // // //       ${svg.replace(/<svg[^>]*>|<\/svg>/g, '')}
// // // // //     </svg>
// // // // //   `;

// // // // //   return <div dangerouslySetInnerHTML={{ __html: wrappedSvg }} />;
// // // // // };

// // // // // const DiagramWrapper = ({ diagrams, svgWidth = '100%', svgHeight = '400px', customStyles = {} }) => {
// // // // //   if (!diagrams || Object.keys(diagrams).length === 0) {
// // // // //     return <div>No diagrams available</div>;
// // // // //   }

// // // // //   const defaultStyles = {
// // // // //     wrapper: {
// // // // //       fontFamily: 'Arial, sans-serif',
// // // // //       maxWidth: '900px',
// // // // //       margin: '0 auto',
// // // // //       padding: '20px',
// // // // //     },
// // // // //     title: {
// // // // //       fontSize: '28px',
// // // // //       color: '#333',
// // // // //       borderBottom: '2px solid #333',
// // // // //       paddingBottom: '10px',
// // // // //       marginBottom: '30px',
// // // // //     },
// // // // //     diagram: {
// // // // //       backgroundColor: '#f5f5f5',
// // // // //       border: '1px solid #ddd',
// // // // //       borderRadius: '8px',
// // // // //       padding: '20px',
// // // // //       marginBottom: '30px',
// // // // //       boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
// // // // //     },
// // // // //     diagramTitle: {
// // // // //       fontSize: '22px',
// // // // //       color: '#444',
// // // // //       marginBottom: '15px',
// // // // //     },
// // // // //     svgContainer: {
// // // // //       backgroundColor: 'white',
// // // // //       border: '1px solid #ccc',
// // // // //       borderRadius: '4px',
// // // // //       padding: '10px',
// // // // //       marginBottom: '15px',
// // // // //     },
// // // // //     description: {
// // // // //       fontSize: '14px',
// // // // //       color: '#666',
// // // // //       lineHeight: '1.5',
// // // // //     },
// // // // //   };

// // // // //   // Merge default styles with custom styles
// // // // //   const styles = {
// // // // //     wrapper: { ...defaultStyles.wrapper, ...customStyles.wrapper },
// // // // //     title: { ...defaultStyles.title, ...customStyles.title },
// // // // //     diagram: { ...defaultStyles.diagram, ...customStyles.diagram },
// // // // //     diagramTitle: { ...defaultStyles.diagramTitle, ...customStyles.diagramTitle },
// // // // //     svgContainer: { ...defaultStyles.svgContainer, ...customStyles.svgContainer },
// // // // //     description: { ...defaultStyles.description, ...customStyles.description },
// // // // //   };

// // // // //   return (
// // // // //     <div style={styles.wrapper}>
// // // // //       <h1 style={styles.title}>SVG Diagrams</h1>
// // // // //       {Object.entries(diagrams).map(([key, diagram], index) => (
// // // // //         <div key={key} style={styles.diagram}>
// // // // //           <h2 style={styles.diagramTitle}>{diagram.title}</h2>
// // // // //           <div style={styles.svgContainer}>
// // // // //             <SvgImage svg={diagram.svg} width={svgWidth} height={svgHeight} />
// // // // //           </div>
// // // // //           <p style={styles.description}>
// // // // //             <strong>Diagram #{index + 1}:</strong> 
// // // // //             {diagram.description ? ` ${diagram.description}` : ''}
// // // // //           </p>
// // // // //         </div>
// // // // //       ))}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default DiagramWrapper;
// // // // import React, { useState, useEffect } from 'react';

// // // // const SvgImage = ({ svg, width, height }) => {
// // // //   if (!svg) return null;
// // // //   const viewBoxMatch = svg.match(/viewBox=["']([^"']*)["']/);
// // // //   const originalViewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 100 100';
// // // //   const wrappedSvg = `
// // // //     <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${originalViewBox}">
// // // //       ${svg.replace(/<svg[^>]*>|<\/svg>/g, '')}
// // // //     </svg>
// // // //   `;
// // // //   return <div dangerouslySetInnerHTML={{ __html: wrappedSvg }} />;
// // // // };

// // // // const DiagramWrapper = ({ diagrams, svgWidth = '100%', svgHeight = '400px' }) => {
// // // //   const [searchTerm, setSearchTerm] = useState('');
// // // //   const [selectedCategory, setSelectedCategory] = useState('All');
// // // //   const [filteredDiagrams, setFilteredDiagrams] = useState(diagrams);

// // // //   const categories = ['All', ...new Set(Object.values(diagrams).map(diagram => diagram.category).filter(Boolean))];

// // // //   useEffect(() => {
// // // //     const filtered = Object.entries(diagrams).filter(([_, diagram]) => {
// // // //       const matchesSearch = diagram.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //                             (diagram.description && diagram.description.toLowerCase().includes(searchTerm.toLowerCase()));
// // // //       const matchesCategory = selectedCategory === 'All' || diagram.category === selectedCategory;
// // // //       return matchesSearch && matchesCategory;
// // // //     });
// // // //     setFilteredDiagrams(Object.fromEntries(filtered));
// // // //   }, [searchTerm, selectedCategory, diagrams]);

// // // //   const styles = {
// // // //     wrapper: {
// // // //       fontFamily: 'Arial, sans-serif',
// // // //       maxWidth: '900px',
// // // //       margin: '0 auto',
// // // //       padding: '20px',
// // // //     },
// // // //     title: {
// // // //       fontSize: '28px',
// // // //       color: '#333',
// // // //       borderBottom: '2px solid #333',
// // // //       paddingBottom: '10px',
// // // //       marginBottom: '30px',
// // // //     },
// // // //     searchBar: {
// // // //       width: '100%',
// // // //       padding: '10px',
// // // //       marginBottom: '20px',
// // // //       fontSize: '16px',
// // // //       border: '1px solid #ddd',
// // // //       borderRadius: '4px',
// // // //     },
// // // //     categorySelect: {
// // // //       width: '100%',
// // // //       padding: '10px',
// // // //       marginBottom: '20px',
// // // //       fontSize: '16px',
// // // //       border: '1px solid #ddd',
// // // //       borderRadius: '4px',
// // // //     },
// // // //     diagram: {
// // // //       backgroundColor: '#f5f5f5',
// // // //       border: '1px solid #ddd',
// // // //       borderRadius: '8px',
// // // //       padding: '20px',
// // // //       marginBottom: '30px',
// // // //       boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
// // // //     },
// // // //     diagramTitle: {
// // // //       fontSize: '22px',
// // // //       color: '#444',
// // // //       marginBottom: '15px',
// // // //     },
// // // //     svgContainer: {
// // // //       backgroundColor: 'white',
// // // //       border: '1px solid #ccc',
// // // //       borderRadius: '4px',
// // // //       padding: '10px',
// // // //       marginBottom: '15px',
// // // //     },
// // // //     description: {
// // // //       fontSize: '14px',
// // // //       color: '#666',
// // // //       lineHeight: '1.5',
// // // //     },
// // // //   };

// // // //   return (
// // // //     <div style={styles.wrapper}>
// // // //       <h1 style={styles.title}>SVG Diagrams</h1>
// // // //       <input
// // // //         type="text"
// // // //         placeholder="Search diagrams..."
// // // //         value={searchTerm}
// // // //         onChange={(e) => setSearchTerm(e.target.value)}
// // // //         style={styles.searchBar}
// // // //       />
// // // //       {/* <select
// // // //         value={selectedCategory}
// // // //         onChange={(e) => setSelectedCategory(e.target.value)}
// // // //         style={styles.categorySelect}
// // // //       >
// // // //         {categories.map(category => (
// // // //           <option key={category} value={category}>{category}</option>
// // // //         ))}
// // // //       </select> */}
// // // //       {Object.entries(filteredDiagrams).map(([key, diagram], index) => (
// // // //         <div key={key} style={styles.diagram}>
// // // //           <h2 style={styles.diagramTitle}>{diagram.title}</h2>
// // // //           <div style={styles.svgContainer}>
// // // //             <SvgImage svg={diagram.svg} width={svgWidth} height={svgHeight} />
// // // //           </div>
// // // //           <p style={styles.description}>
// // // //             <strong>Diagram #{index + 1}:</strong> 
// // // //             {diagram.description ? ` ${diagram.description}` : ''}
// // // //           </p>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default DiagramWrapper;
// // // import React, { useState, useEffect } from 'react';

// // // const SvgImage = ({ svg, width, height }) => {
// // //   if (!svg) return null;
// // //   const viewBoxMatch = svg.match(/viewBox=["']([^"']*)["']/);
// // //   const originalViewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 100 100';
// // //   const wrappedSvg = `
// // //     <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${originalViewBox}">
// // //       ${svg.replace(/<svg[^>]*>|<\/svg>/g, '')}
// // //     </svg>
// // //   `;
// // //   return <div dangerouslySetInnerHTML={{ __html: wrappedSvg }} />;
// // // };

// // // const DiagramWrapper = ({ diagrams, svgWidth = '100%', svgHeight = '400px' }) => {
// // //   const [searchTerm, setSearchTerm] = useState('');
// // //   const [selectedCategory, setSelectedCategory] = useState('All');
// // //   const [filteredDiagrams, setFilteredDiagrams] = useState(diagrams);

// // //   const categories = ['All', ...new Set(Object.values(diagrams).map(diagram => diagram.category).filter(Boolean))];

// // //   useEffect(() => {
// // //     const filtered = Object.entries(diagrams).filter(([_, diagram]) => {
// // //       const matchesSearch = diagram.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //                             (diagram.description && diagram.description.toLowerCase().includes(searchTerm.toLowerCase()));
// // //       const matchesCategory = selectedCategory === 'All' || diagram.category === selectedCategory;
// // //       return matchesSearch && matchesCategory;
// // //     });
// // //     setFilteredDiagrams(Object.fromEntries(filtered));
// // //   }, [searchTerm, selectedCategory, diagrams]);

// // //   const styles = {
// // //     wrapper: {
// // //       fontFamily: 'Georgia, serif',
// // //       maxWidth: '800px',
// // //       margin: '0 auto',
// // //       padding: '20px',
// // //       backgroundColor: '#f9f9f9',
// // //       color: '#333',
// // //     },
// // //     title: {
// // //       fontSize: '32px',
// // //       fontWeight: 'bold',
// // //       textAlign: 'center',
// // //       marginBottom: '30px',
// // //       borderBottom: '2px solid #333',
// // //       paddingBottom: '10px',
// // //     },
// // //     searchBar: {
// // //       width: '100%',
// // //       padding: '10px',
// // //       marginBottom: '20px',
// // //       fontSize: '16px',
// // //       border: '1px solid #ddd',
// // //       borderRadius: '4px',
// // //     },
// // //     categorySelect: {
// // //       width: '100%',
// // //       padding: '10px',
// // //       marginBottom: '20px',
// // //       fontSize: '16px',
// // //       border: '1px solid #ddd',
// // //       borderRadius: '4px',
// // //     },
// // //     diagramArticle: {
// // //       backgroundColor: 'white',
// // //       border: '1px solid #e0e0e0',
// // //       borderRadius: '8px',
// // //       padding: '30px',
// // //       marginBottom: '40px',
// // //       boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
// // //     },
// // //     diagramTitle: {
// // //       fontSize: '24px',
// // //       fontWeight: 'bold',
// // //       marginBottom: '20px',
// // //       borderBottom: '1px solid #e0e0e0',
// // //       paddingBottom: '10px',
// // //     },
// // //     beforeAfterContent: {
// // //       fontSize: '18px',
// // //       lineHeight: '1.6',
// // //       marginBottom: '20px',
// // //       padding: '15px',
// // //       backgroundColor: '#f0f0f0',
// // //       borderRadius: '4px',
// // //     },
// // //     svgContainer: {
// // //       marginBottom: '20px',
// // //     },
// // //     description: {
// // //       fontSize: '16px',
// // //       lineHeight: '1.5',
// // //       marginTop: '20px',
// // //     },
// // //   };

// // //   return (
// // //     <div style={styles.wrapper}>
// // //       <h1 style={styles.title}>SVG Diagrams</h1>
// // //       <input
// // //         type="text"
// // //         placeholder="Search diagrams..."
// // //         value={searchTerm}
// // //         onChange={(e) => setSearchTerm(e.target.value)}
// // //         style={styles.searchBar}
// // //       />
// // //       <select
// // //         value={selectedCategory}
// // //         onChange={(e) => setSelectedCategory(e.target.value)}
// // //         style={styles.categorySelect}
// // //       >
// // //         {categories.map(category => (
// // //           <option key={category} value={category}>{category}</option>
// // //         ))}
// // //       </select>
// // //       {Object.entries(filteredDiagrams).map(([key, diagram], index) => (
// // //         <article key={key} style={styles.diagramArticle}>
// // //           <h2 style={styles.diagramTitle}>{diagram.title}</h2>
// // //           {diagram.before && (
// // //             <div style={styles.beforeAfterContent}>
// // //               <h3>Before:</h3>
// // //               <p>{diagram.before}</p>
// // //             </div>
// // //           )}
// // //           <div style={styles.svgContainer}>
// // //             <SvgImage svg={diagram.svg} width={svgWidth} height={svgHeight} />
// // //           </div>
// // //           {diagram.after && (
// // //             <div style={styles.beforeAfterContent}>
// // //               <h3>After:</h3>
// // //               <p>{diagram.after}</p>
// // //             </div>
// // //           )}
// // //           <p style={styles.description}>
// // //             <strong>Diagram #{index + 1}:</strong> 
// // //             {diagram.description ? ` ${diagram.description}` : ''}
// // //           </p>
// // //         </article>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // export default DiagramWrapper;
// // import React, { useState } from 'react';

// // const SvgImage = ({ svg, width, height }) => {
// //   if (!svg) return null;
// //   const viewBoxMatch = svg.match(/viewBox=["']([^"']*)["']/);
// //   const originalViewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 100 100';
// //   const wrappedSvg = `
// //     <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${originalViewBox}">
// //       ${svg.replace(/<svg[^>]*>|<\/svg>/g, '')}
// //     </svg>
// //   `;
// //   return <div dangerouslySetInnerHTML={{ __html: wrappedSvg }} />;
// // };

// // const DiagramWrapper = ({ diagrams, svgWidth = '100%', svgHeight = '400px' }) => {
// //   const [searchTerm, setSearchTerm] = useState('');

// //   const filteredDiagrams = Object.entries(diagrams).filter(([_, diagram]) => 
// //     diagram.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //     (diagram.description && diagram.description.toLowerCase().includes(searchTerm.toLowerCase()))
// //   );

// //   return (
// //     <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
// //       <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>SVG Diagrams</h1>
// //       <input
// //         type="text"
// //         placeholder="Search diagrams..."
// //         value={searchTerm}
// //         onChange={(e) => setSearchTerm(e.target.value)}
// //         style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
// //       />
// //       {filteredDiagrams.map(([key, diagram], index) => (
// //         <div key={key} style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
// //           <h2>{diagram.title}</h2>
// //           {diagram.before && <div style={{ marginBottom: '15px' }}>{diagram.before}</div>}
// //           <SvgImage svg={diagram.svg} width={svgWidth} height={svgHeight} />
// //           {diagram.after && <div style={{ marginTop: '15px' }}>{diagram.after}</div>}
// //           <p style={{ marginTop: '15px' }}>
// //             <strong>Diagram #{index + 1}:</strong> 
// //             {diagram.description ? ` ${diagram.description}` : ''}
// //           </p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default DiagramWrapper;
// // import React, { useState } from 'react';

// // const SvgImage = ({ svg, width, height }) => {
// //   if (!svg) return null;
// //   const viewBoxMatch = svg.match(/viewBox=["']([^"']*)["']/);
// //   const originalViewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 100 100';
// //   const wrappedSvg = `
// //     <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${originalViewBox}">
// //       ${svg.replace(/<svg[^>]*>|<\/svg>/g, '')}
// //     </svg>
// //   `;
// //   return <div dangerouslySetInnerHTML={{ __html: wrappedSvg }} />;
// // };

// // const DiagramWrapper = ({ diagrams, svgWidth = '100%', svgHeight = '400px' }) => {
// //   const [searchTerm, setSearchTerm] = useState('');

// //   const filteredDiagrams = Object.entries(diagrams).filter(([_, diagram]) => 
// //     diagram.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //     (diagram.description && diagram.description.toLowerCase().includes(searchTerm.toLowerCase()))
// //   );

// //   return (
// //     <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
// //       <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>SVG Diagrams</h1>
// //       <input
// //         type="text"
// //         placeholder="Search diagrams..."
// //         value={searchTerm}
// //         onChange={(e) => setSearchTerm(e.target.value)}
// //         style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
// //       />
// //       {filteredDiagrams.map(([key, diagram], index) => (
// //         <div key={key} style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
// //           {diagram.before && <div style={{ marginBottom: '15px' }}>{diagram.before}</div>}
// //           <h2>{diagram.title}</h2>
// //           <SvgImage svg={diagram.svg} width={svgWidth} height={svgHeight} />
// //           <p style={{ marginTop: '15px' }}>
// //             <strong>Diagram #{index + 1}:</strong> 
// //             {diagram.description ? ` ${diagram.description}` : ''}
// //           </p>
// //           {diagram.after && <div style={{ marginTop: '15px' }}>{diagram.after}</div>}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default DiagramWrapper;
// import React, { useState } from 'react';

// const SvgImage = ({ svg, width, height }) => {
//   if (!svg) return null;
//   const viewBoxMatch = svg.match(/viewBox=["']([^"']*)["']/);
//   const originalViewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 100 100';
//   const wrappedSvg = `
//     <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${originalViewBox}">
//       ${svg.replace(/<svg[^>]*>|<\/svg>/g, '')}
//     </svg>
//   `;
//   return <div dangerouslySetInnerHTML={{ __html: wrappedSvg }} />;
// };

// const DiagramWrapper = ({ diagrams, svgWidth = '100%', svgHeight = '400px' }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredDiagrams = Object.entries(diagrams).filter(([_, diagram]) => 
//     diagram.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     (diagram.description && diagram.description.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   return (
//     <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
//       <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>SVG Diagrams</h1>
//       <input
//         type="text"
//         placeholder="Search diagrams..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
//       />
//       {filteredDiagrams.map(([key, diagram], index) => (
//         <div key={key} style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
//           {diagram.before && <div style={{ marginBottom: '15px' }}>{diagram.before}</div>}
//           <h2>{diagram.title}</h2>
//           <SvgImage svg={diagram.svg} width={svgWidth} height={svgHeight} />
//           <p style={{ marginTop: '15px' }}>
//             <strong>Diagram #{index + 1}:</strong> 
//             {diagram.description ? ` ${diagram.description}` : ''}
//           </p>
//           {diagram.after && <div style={{ marginTop: '15px' }}>{diagram.after}</div>}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DiagramWrapper;
import React, { useState, useEffect } from 'react';

const SvgImage = ({ svg, width, height }) => {
  if (!svg) return null;
  const viewBoxMatch = svg.match(/viewBox=["']([^"']*)["']/);
  const originalViewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 100 100';
  const wrappedSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${originalViewBox}">
      ${svg.replace(/<svg[^>]*>|<\/svg>/g, '')}
    </svg>
  `;
  return <div dangerouslySetInnerHTML={{ __html: wrappedSvg }} />;
};

const DiagramWrapper = ({ diagrams, svgWidth = '100%', svgHeight = '400px' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredDiagrams, setFilteredDiagrams] = useState(diagrams);

  const categories = ['All', ...new Set(Object.values(diagrams).map(diagram => diagram.category).filter(Boolean))];

  useEffect(() => {
    const filtered = Object.entries(diagrams).filter(([_, diagram]) => {
      const matchesSearch = diagram.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            (diagram.description && diagram.description.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || diagram.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredDiagrams(Object.fromEntries(filtered));
  }, [searchTerm, selectedCategory, diagrams]);

  const styles = {
    wrapper: {
      fontFamily: 'Georgia, serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      color: '#333',
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '30px',
      borderBottom: '2px solid #333',
      paddingBottom: '10px',
    },
    searchBar: {
      width: '100%',
      padding: '10px',
      marginBottom: '20px',
      fontSize: '16px',
      border: '1px solid #ddd',
      borderRadius: '4px',
    },
    categorySelect: {
      width: '100%',
      padding: '10px',
      marginBottom: '20px',
      fontSize: '16px',
      border: '1px solid #ddd',
      borderRadius: '4px',
    },
    diagramArticle: {
      backgroundColor: 'white',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '30px',
      marginBottom: '40px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    diagramTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      borderBottom: '1px solid #e0e0e0',
      paddingBottom: '10px',
    },
    beforeAfterContent: {
      fontSize: '18px',
      lineHeight: '1.6',
      marginBottom: '20px',
      padding: '15px',
      backgroundColor: '#f0f0f0',
      borderRadius: '4px',
    },
    svgContainer: {
      marginBottom: '20px',
    },
    description: {
      fontSize: '16px',
      lineHeight: '1.5',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>SVG Diagrams</h1>
      <input
        type="text"
        placeholder="Search diagrams..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchBar}
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={styles.categorySelect}
      >
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      {Object.entries(filteredDiagrams).map(([key, diagram], index) => (
        <article key={key} style={styles.diagramArticle}>
          {diagram.before && (
            <div style={styles.beforeAfterContent}>
              {diagram.before}
            </div>
          )}
          <h2 style={styles.diagramTitle}>{diagram.title}</h2>
          <div style={styles.svgContainer}>
            <SvgImage svg={diagram.svg} width={svgWidth} height={svgHeight} />
          </div>
          <p style={styles.description}>
            <strong>Diagram #{index + 1}</strong> 
            {diagram.description ? ` ${diagram.description}` : ''}
          </p>
          {diagram.after && (
            <div style={styles.beforeAfterContent}>
              {diagram.after}
            </div>
          )}
        </article>
      ))}
    </div>
  );
};

export default DiagramWrapper;