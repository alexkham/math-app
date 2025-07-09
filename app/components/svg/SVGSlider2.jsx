// // // import React, { useState, useEffect, useRef } from 'react';

// // // const ChevronLeft = () => (
// // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
// // //     <polyline points="15 18 9 12 15 6"></polyline>
// // //   </svg>
// // // );

// // // const ChevronRight = () => (
// // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
// // //     <polyline points="9 18 15 12 9 6"></polyline>
// // //   </svg>
// // // );

// // // const SVGSlider2 = ({ diagrams, title, link, height = 500, description = '' }) => {
// // //   const svgKeys = Object.keys(diagrams);
// // //   const [currentIndex, setCurrentIndex] = useState(0);
// // //   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
// // //   const svgContainerRef = useRef(null);

// // //   useEffect(() => {
// // //     if (!isAutoPlaying) return;
    
// // //     const timer = setInterval(() => {
// // //       setCurrentIndex((prevIndex) => (prevIndex + 1) % svgKeys.length);
// // //     }, 4000);

// // //     return () => clearInterval(timer);
// // //   }, [svgKeys.length, isAutoPlaying]);

// // //   useEffect(() => {
// // //     if (svgContainerRef.current) {
// // //       const svgElement = svgContainerRef.current.querySelector('svg');
// // //       if (svgElement) {
// // //         // Reset any previous styles
// // //         svgElement.style.width = '';
// // //         svgElement.style.height = '';
// // //         svgElement.style.maxWidth = '100%';
// // //         svgElement.style.maxHeight = '100%';
        
// // //         const viewBox = svgElement.getAttribute('viewBox');
// // //         if (viewBox) {
// // //           const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number);
// // //           const containerWidth = svgContainerRef.current.clientWidth - 40;
// // //           const containerHeight = svgContainerRef.current.clientHeight - 40;
          
// // //           // Calculate scale to fit container while maintaining aspect ratio
// // //           const scale = Math.min(containerWidth / vbWidth, containerHeight / vbHeight);
// // //           const scaledWidth = vbWidth * scale;
// // //           const scaledHeight = vbHeight * scale;
          
// // //           svgElement.style.width = `${scaledWidth}px`;
// // //           svgElement.style.height = `${scaledHeight}px`;
// // //         }
// // //       }
// // //     }
// // //   }, [currentIndex]);

// // //   const goToPrevious = () => {
// // //     setIsAutoPlaying(false);
// // //     setCurrentIndex((prevIndex) => 
// // //       prevIndex === 0 ? svgKeys.length - 1 : prevIndex - 1
// // //     );
// // //   };

// // //   const goToNext = () => {
// // //     setIsAutoPlaying(false);
// // //     setCurrentIndex((prevIndex) => 
// // //       (prevIndex + 1) % svgKeys.length
// // //     );
// // //   };

// // //   const handleDotClick = (index) => {
// // //     setIsAutoPlaying(false);
// // //     setCurrentIndex(index);
// // //   };

// // //   const currentDiagram = diagrams[svgKeys[currentIndex]];
// // //   const currentExplanation = currentDiagram?.explanation || '';
// // //   const currentLinks = currentDiagram?.links || [];

// // //   const styles = getStyles(height);

// // //   return (
// // //     <div style={styles.sliderContainer}>
// // //       {/* Header - Only show if title or link exists */}
// // //       {(title || link) && (
// // //         <div style={styles.headerContainer}>
// // //           <div style={styles.titleContainer}>
// // //             {title && <h3 style={styles.title}>{title}</h3>}
// // //           </div>
// // //           <div style={styles.headerControls}>
// // //             <button 
// // //               onClick={() => setIsAutoPlaying(!isAutoPlaying)} 
// // //               style={styles.playPauseButton}
// // //             >
// // //               {isAutoPlaying ? '⏸️' : '▶️'}
// // //             </button>
// // //             {link && (
// // //               <a href={link} style={styles.link} target="_blank" rel="noopener noreferrer">
// // //                 See all Diagrams
// // //               </a>
// // //             )}
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* Main Content */}
// // //       <div style={styles.mainContent}>
// // //         {/* SVG Display Area */}
// // //         <div style={styles.svgSection}>
// // //           <div style={styles.frame}>
// // //             <div 
// // //               ref={svgContainerRef}
// // //               style={styles.svgContainer} 
// // //               dangerouslySetInnerHTML={{ __html: currentDiagram?.svg || '' }} 
// // //             />
// // //             <button 
// // //               onClick={goToPrevious} 
// // //               style={{...styles.navButton, left: '15px'}}
// // //               onMouseEnter={(e) => e.target.style.opacity = '0.9'}
// // //               onMouseLeave={(e) => e.target.style.opacity = '0.6'}
// // //             >
// // //               <ChevronLeft />
// // //             </button>
// // //             <button 
// // //               onClick={goToNext} 
// // //               style={{...styles.navButton, right: '15px'}}
// // //               onMouseEnter={(e) => e.target.style.opacity = '0.9'}
// // //               onMouseLeave={(e) => e.target.style.opacity = '0.6'}
// // //             >
// // //               <ChevronRight />
// // //             </button>
// // //           </div>
          
// // //           {/* Navigation Dots */}
// // //           <div style={styles.dotsContainer}>
// // //             {svgKeys.map((_, index) => (
// // //               <div
// // //                 key={index}
// // //                 style={{
// // //                   ...styles.dot,
// // //                   backgroundColor: index === currentIndex ? '#4a90e2' : '#d1d5db',
// // //                   transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)',
// // //                 }}
// // //                 onClick={() => handleDotClick(index)}
// // //               />
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Explanation Panel */}
// // //         <div style={styles.explanationPanel}>
// // //           <div style={styles.explanationHeader}>
// // //             <h4 style={styles.explanationTitle}>
// // //               Step {currentIndex + 1} of {svgKeys.length}
// // //             </h4>
// // //             <div style={styles.stepCounter}>
// // //               {svgKeys[currentIndex]}
// // //             </div>
// // //           </div>
          
// // //           <div style={styles.explanationContent}>
// // //             {currentExplanation ? (
// // //               <p style={styles.explanationText}>{currentExplanation}</p>
// // //             ) : (
// // //               <p style={styles.placeholderText}>
// // //                 No explanation available for this diagram.
// // //               </p>
// // //             )}
// // //           </div>

// // //           {/* Links Section */}
// // //           {currentLinks.length > 0 && (
// // //             <div style={styles.linksSection}>
// // //               <div style={styles.linksSeparator}></div>
// // //               <div style={styles.linksHeader}>Related Links:</div>
// // //               <div style={styles.linksContainer}>
// // //                 {currentLinks.map((linkItem, index) => (
// // //                   <a 
// // //                     key={index}
// // //                     href={linkItem.url} 
// // //                     style={styles.explanationLink}
// // //                     target="_blank" 
// // //                     rel="noopener noreferrer"
// // //                   >
// // //                     {linkItem.text}
// // //                   </a>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           )}

// // //           <div style={styles.progressBar}>
// // //             <div 
// // //               style={{
// // //                 ...styles.progressFill,
// // //                 width: `${((currentIndex + 1) / svgKeys.length) * 100}%`
// // //               }}
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Description Footer */}
// // //       {description && (
// // //         <div style={styles.descriptionContainer}>
// // //           <p style={styles.description}>{description}</p>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // const getStyles = (height) => ({
// // //   sliderContainer: {
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     width: '100%',
// // //     height: `${height}px`,
// // //     backgroundColor: '#f8f9fa',
// // //     borderRadius: '8px',
// // //     border: '1px solid #e9ecef',
// // //     overflow: 'hidden',
// // //     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
// // //   },
// // //   headerContainer: {
// // //     display: 'flex',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     padding: '16px 20px',
// // //     borderBottom: '1px solid #e9ecef',
// // //     backgroundColor: '#ffffff',
// // //   },
// // //   titleContainer: {
// // //     flex: 1,
// // //   },
// // //   title: {
// // //     fontSize: '18px',
// // //     fontWeight: '600',
// // //     color: '#212529',
// // //     margin: '0',
// // //   },
// // //   headerControls: {
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     gap: '12px',
// // //   },
// // //   playPauseButton: {
// // //     backgroundColor: '#f8f9fa',
// // //     border: '1px solid #dee2e6',
// // //     borderRadius: '6px',
// // //     padding: '6px 10px',
// // //     color: '#495057',
// // //     cursor: 'pointer',
// // //     fontSize: '14px',
// // //     transition: 'all 0.2s ease',
// // //   },
// // //   link: {
// // //     color: '#4a90e2',
// // //     textDecoration: 'none',
// // //     fontWeight: '500',
// // //     fontSize: '14px',
// // //     padding: '6px 12px',
// // //     borderRadius: '6px',
// // //     border: '1px solid #4a90e2',
// // //     transition: 'all 0.2s ease',
// // //   },
// // //   mainContent: {
// // //     display: 'flex',
// // //     flex: 1,
// // //     gap: '0',
// // //   },
// // //   svgSection: {
// // //     flex: '2',
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     padding: '20px',
// // //   },
// // //   frame: {
// // //     position: 'relative',
// // //     flex: 1,
// // //     backgroundColor: '#4a5568',
// // //     borderRadius: '6px',
// // //     border: '1px solid #2d3748',
// // //     overflow: 'hidden',
// // //     marginBottom: '16px',
// // //     minHeight: '300px',
// // //   },
// // //   svgContainer: {
// // //     width: '100%',
// // //     height: '100%',
// // //     display: 'flex',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     padding: '20px',
// // //     position: 'relative',
// // //   },
// // //   navButton: {
// // //     position: 'absolute',
// // //     top: '50%',
// // //     transform: 'translateY(-50%)',
// // //     backgroundColor: '#ffffff',
// // //     opacity: '0.6',
// // //     border: '1px solid #dee2e6',
// // //     borderRadius: '50%',
// // //     width: '40px',
// // //     height: '40px',
// // //     display: 'flex',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     cursor: 'pointer',
// // //     transition: 'all 0.2s ease',
// // //     color: '#495057',
// // //     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
// // //     zIndex: 10,
// // //   },
// // //   dotsContainer: {
// // //     display: 'flex',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     gap: '8px',
// // //   },
// // //   dot: {
// // //     width: '8px',
// // //     height: '8px',
// // //     borderRadius: '50%',
// // //     cursor: 'pointer',
// // //     transition: 'all 0.2s ease',
// // //   },
// // //   explanationPanel: {
// // //     flex: '1',
// // //     backgroundColor: '#ffffff',
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     borderLeft: '1px solid #e9ecef',
// // //     minWidth: '320px',
// // //   },
// // //   explanationHeader: {
// // //     backgroundColor: '#f8f9fa',
// // //     borderBottom: '1px solid #e9ecef',
// // //     color: '#495057',
// // //     padding: '16px 20px',
// // //     display: 'flex',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //   },
// // //   explanationTitle: {
// // //     fontSize: '14px',
// // //     fontWeight: '600',
// // //     margin: '0',
// // //   },
// // //   stepCounter: {
// // //     fontSize: '12px',
// // //     backgroundColor: '#e9ecef',
// // //     color: '#6c757d',
// // //     padding: '4px 8px',
// // //     borderRadius: '4px',
// // //     fontWeight: '500',
// // //   },
// // //   explanationContent: {
// // //     flex: 1,
// // //     padding: '20px',
// // //     overflow: 'auto',
// // //   },
// // //   explanationText: {
// // //     fontSize: '14px',
// // //     color: '#495057',
// // //     lineHeight: '1.5',
// // //     margin: '0',
// // //   },
// // //   placeholderText: {
// // //     fontSize: '14px',
// // //     color: '#6c757d',
// // //     lineHeight: '1.5',
// // //     margin: '0',
// // //     fontStyle: 'italic',
// // //   },
// // //   linksSection: {
// // //     padding: '0 20px 20px',
// // //   },
// // //   linksSeparator: {
// // //     height: '1px',
// // //     backgroundColor: '#e9ecef',
// // //     margin: '0 0 12px 0',
// // //   },
// // //   linksHeader: {
// // //     fontSize: '12px',
// // //     fontWeight: '600',
// // //     color: '#6c757d',
// // //     marginBottom: '8px',
// // //     textTransform: 'uppercase',
// // //     letterSpacing: '0.5px',
// // //   },
// // //   linksContainer: {
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     gap: '6px',
// // //   },
// // //   explanationLink: {
// // //     fontSize: '13px',
// // //     color: '#4a90e2',
// // //     textDecoration: 'none',
// // //     padding: '4px 0',
// // //     borderBottom: '1px solid transparent',
// // //     transition: 'all 0.2s ease',
// // //   },
// // //   progressBar: {
// // //     height: '3px',
// // //     backgroundColor: '#e9ecef',
// // //     margin: '0',
// // //   },
// // //   progressFill: {
// // //     height: '100%',
// // //     backgroundColor: '#4a90e2',
// // //     transition: 'width 0.3s ease',
// // //   },
// // //   descriptionContainer: {
// // //     backgroundColor: '#f8f9fa',
// // //     borderTop: '1px solid #e9ecef',
// // //     padding: '12px 20px',
// // //   },
// // //   description: {
// // //     fontSize: '13px',
// // //     color: '#6c757d',
// // //     margin: '0',
// // //     textAlign: 'center',
// // //     lineHeight: '1.4',
// // //   },
// // // });

// // // export default SVGSlider2;



// // import React, { useState, useEffect, useRef } from 'react';

// // const ChevronLeft = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px' }}>
// //     <polyline points="15 18 9 12 15 6"></polyline>
// //   </svg>
// // );

// // const ChevronRight = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px' }}>
// //     <polyline points="9 18 15 12 9 6"></polyline>
// //   </svg>
// // );

// // const SVGSlider2 = ({ diagrams, title, link, height = 500, description = '' }) => {
// //   const svgKeys = Object.keys(diagrams);
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
// //   const svgContainerRef = useRef(null);

// //   useEffect(() => {
// //     if (!isAutoPlaying) return;
    
// //     const timer = setInterval(() => {
// //       setCurrentIndex((prevIndex) => (prevIndex + 1) % svgKeys.length);
// //     }, 4000);

// //     return () => clearInterval(timer);
// //   }, [svgKeys.length, isAutoPlaying]);

// //   useEffect(() => {
// //     if (svgContainerRef.current) {
// //       const svgElement = svgContainerRef.current.querySelector('svg');
// //       if (svgElement) {
// //         // Reset any previous styles
// //         svgElement.style.width = '';
// //         svgElement.style.height = '';
// //         svgElement.style.maxWidth = '100%';
// //         svgElement.style.maxHeight = '100%';
        
// //         const viewBox = svgElement.getAttribute('viewBox');
// //         if (viewBox) {
// //           const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number);
// //           const containerWidth = svgContainerRef.current.clientWidth - 40;
// //           const containerHeight = svgContainerRef.current.clientHeight - 40;
          
// //           // Calculate scale to fit container while maintaining aspect ratio
// //           const scale = Math.min(containerWidth / vbWidth, containerHeight / vbHeight);
// //           const scaledWidth = vbWidth * scale;
// //           const scaledHeight = vbHeight * scale;
          
// //           svgElement.style.width = `${scaledWidth}px`;
// //           svgElement.style.height = `${scaledHeight}px`;
// //         }
// //       }
// //     }
// //   }, [currentIndex]);

// //   const goToPrevious = () => {
// //     setIsAutoPlaying(false);
// //     setCurrentIndex((prevIndex) => 
// //       prevIndex === 0 ? svgKeys.length - 1 : prevIndex - 1
// //     );
// //   };

// //   const goToNext = () => {
// //     setIsAutoPlaying(false);
// //     setCurrentIndex((prevIndex) => 
// //       (prevIndex + 1) % svgKeys.length
// //     );
// //   };

// //   const handleDotClick = (index) => {
// //     setIsAutoPlaying(false);
// //     setCurrentIndex(index);
// //   };

// //   const currentDiagram = diagrams[svgKeys[currentIndex]];
// //   const currentExplanation = currentDiagram?.explanation || '';
// //   const currentLinks = currentDiagram?.links || [];

// //   const styles = getStyles(height);

// //   return (
// //     <div style={styles.sliderContainer}>
// //       {/* Header - Only show if title or link exists */}
// //       {(title || link) && (
// //         <div style={styles.headerContainer}>
// //           <div style={styles.titleContainer}>
// //             {title && <h3 style={styles.title}>{title}</h3>}
// //           </div>
// //           <div style={styles.headerControls}>
// //             <button 
// //               onClick={() => setIsAutoPlaying(!isAutoPlaying)} 
// //               style={styles.playPauseButton}
// //             >
// //               {isAutoPlaying ? '⏸️' : '▶️'}
// //             </button>
// //             {link && (
// //               <a href={link} style={styles.link} target="_blank" rel="noopener noreferrer">
// //                 See all Diagrams
// //               </a>
// //             )}
// //           </div>
// //         </div>
// //       )}

// //       {/* Main Content */}
// //       <div style={styles.mainContent}>
// //         {/* SVG Display Area */}
// //         <div style={styles.svgSection}>
// //           <div style={styles.frame}>
// //             <div 
// //               ref={svgContainerRef}
// //               style={styles.svgContainer} 
// //               dangerouslySetInnerHTML={{ __html: currentDiagram?.svg || '' }} 
// //             />
// //             <button 
// //               onClick={goToPrevious} 
// //               style={{...styles.navButton, left: '15px'}}
// //               onMouseEnter={(e) => e.target.style.opacity = '0.9'}
// //               onMouseLeave={(e) => e.target.style.opacity = '0.7'}
// //             >
// //               <ChevronLeft />
// //             </button>
// //             <button 
// //               onClick={goToNext} 
// //               style={{...styles.navButton, right: '15px'}}
// //               onMouseEnter={(e) => e.target.style.opacity = '0.9'}
// //               onMouseLeave={(e) => e.target.style.opacity = '0.7'}
// //             >
// //               <ChevronRight />
// //             </button>
// //           </div>
          
// //           {/* Navigation Dots */}
// //           <div style={styles.dotsContainer}>
// //             {svgKeys.map((_, index) => (
// //               <div
// //                 key={index}
// //                 style={{
// //                   ...styles.dot,
// //                   backgroundColor: index === currentIndex ? '#4a90e2' : '#d1d5db',
// //                   transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)',
// //                 }}
// //                 onClick={() => handleDotClick(index)}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         {/* Explanation Panel */}
// //         <div style={styles.explanationPanel}>
// //           <div style={styles.explanationHeader}>
// //             <h4 style={styles.explanationTitle}>
// //               Step {currentIndex + 1} of {svgKeys.length}
// //             </h4>
// //             <div style={styles.stepCounter}>
// //               {svgKeys[currentIndex]}
// //             </div>
// //           </div>
          
// //           <div style={styles.explanationContent}>
// //             {currentExplanation ? (
// //               <p style={styles.explanationText}>{currentExplanation}</p>
// //             ) : (
// //               <p style={styles.placeholderText}>
// //                 No explanation available for this diagram.
// //               </p>
// //             )}
// //           </div>

// //           {/* Links Section */}
// //           {currentLinks.length > 0 && (
// //             <div style={styles.linksSection}>
// //               <div style={styles.linksSeparator}></div>
// //               <div style={styles.linksHeader}>Related Links:</div>
// //               <div style={styles.linksContainer}>
// //                 {currentLinks.map((linkItem, index) => (
// //                   <a 
// //                     key={index}
// //                     href={linkItem.url} 
// //                     style={styles.explanationLink}
// //                     target="_blank" 
// //                     rel="noopener noreferrer"
// //                   >
// //                     {linkItem.text}
// //                   </a>
// //                 ))}
// //               </div>
// //             </div>
// //           )}

// //           <div style={styles.progressBar}>
// //             <div 
// //               style={{
// //                 ...styles.progressFill,
// //                 width: `${((currentIndex + 1) / svgKeys.length) * 100}%`
// //               }}
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       {/* Description Footer */}
// //       {description && (
// //         <div style={styles.descriptionContainer}>
// //           <p style={styles.description}>{description}</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // const getStyles = (height) => ({
// //   sliderContainer: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     width: '100%',
// //     height: `${height}px`,
// //     backgroundColor: '#ffffff',
// //     borderRadius: '8px',
// //     border: '1px solid gray',
// //     overflow: 'hidden',
// //     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
// //   },
// //   headerContainer: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     padding: '16px 20px',
// //     border: '1px solid #cccccc',
// //     backgroundColor: '#eff6ff',
// //     flexShrink: 0,
// //   },
// //   titleContainer: {
// //     flex: 1,
// //   },
// //   title: {
// //     fontSize: '18px',
// //     fontWeight: '600',
// //     color: '#212529',
// //     margin: '0',
// //   },
// //   headerControls: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '12px',
// //   },
// //   playPauseButton: {
// //     backgroundColor: '#f8f9fa',
// //     border: '1px solid #dee2e6',
// //     borderRadius: '6px',
// //     padding: '6px 10px',
// //     color: '#495057',
// //     cursor: 'pointer',
// //     fontSize: '14px',
// //     transition: 'all 0.2s ease',
// //   },
// //   link: {
// //     color: '#4a90e2',
// //     textDecoration: 'none',
// //     fontWeight: '500',
// //     fontSize: '14px',
// //     padding: '6px 12px',
// //     borderRadius: '6px',
// //     border: '1px solid #4a90e2',
// //     transition: 'all 0.2s ease',
// //   },
// //   mainContent: {
// //     display: 'flex',
// //     flex: 1,
// //     gap: '0',
// //     minHeight: 0,
// //   },
// //   svgSection: {
// //     flex: '2',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     padding: '20px',
// //     minHeight: 0,
// //   },
// //   frame: {
// //     position: 'relative',
// //     flex: 1,
// //     backgroundColor: '#f0f0f0',
// //     borderRadius: '8px',
// //     border: '1px solid #e6e6e6',
// //     overflow: 'hidden',
// //     marginBottom: '20px',
// //     minHeight: '200px',
// //   },
// //   svgContainer: {
// //     width: '100%',
// //     height: '100%',
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     padding: '20px',
// //     position: 'relative',
// //   },
// //   navButton: {
// //     position: 'absolute',
// //     top: '50%',
// //     transform: 'translateY(-50%)',
// //     backgroundColor: '#ffffff',
// //     opacity: '0.7',
// //     border: '2px solid #dee2e6',
// //     borderRadius: '50%',
// //     width: '50px',
// //     height: '50px',
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     cursor: 'pointer',
// //     transition: 'all 0.2s ease',
// //     color: '#495057',
// //     boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
// //     zIndex: 10,
// //   },
// //   dotsContainer: {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     gap: '12px',
// //     padding: '10px 0',
// //     flexShrink: 0,
// //   },
// //   dot: {
// //     width: '12px',
// //     height: '12px',
// //     borderRadius: '50%',
// //     cursor: 'pointer',
// //     transition: 'all 0.2s ease',
// //   },
// //   explanationPanel: {
// //     flex: '1',
// //     backgroundColor: '#ffffff',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     borderLeft: '1px solid #e9ecef',
// //     minWidth: '320px',
// //     minHeight: 0,
// //   },
// //   explanationHeader: {
// //     backgroundColor: '#f0f0f0',
// //     borderBottom: '1px solid #f2f2f2',
// //     color: '#495057',
// //     padding: '16px 20px',
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     flexShrink: 0,
// //   },
// //   explanationTitle: {
// //     fontSize: '14px',
// //     fontWeight: '600',
// //     margin: '0',
// //   },
// //   stepCounter: {
// //     fontSize: '12px',
// //     backgroundColor: '#e9ecef',
// //     color: '#6c757d',
// //     padding: '4px 8px',
// //     borderRadius: '4px',
// //     fontWeight: '500',
// //   },
// //   explanationContent: {
// //     flex: 1,
// //     padding: '20px',
// //     overflow: 'auto',
// //     minHeight: 0,
// //   },
// //   explanationText: {
// //     fontSize: '14px',
// //     color: '#495057',
// //     lineHeight: '1.5',
// //     margin: '0',
// //   },
// //   placeholderText: {
// //     fontSize: '14px',
// //     color: '#6c757d',
// //     lineHeight: '1.5',
// //     margin: '0',
// //     fontStyle: 'italic',
// //   },
// //   linksSection: {
// //     padding: '0 20px 20px',
// //     flexShrink: 0,
// //   },
// //   linksSeparator: {
// //     height: '1px',
// //     backgroundColor: '#e9ecef',
// //     margin: '0 0 12px 0',
// //   },
// //   linksHeader: {
// //     fontSize: '12px',
// //     fontWeight: '600',
// //     color: '#6c757d',
// //     marginBottom: '8px',
// //     textTransform: 'uppercase',
// //     letterSpacing: '0.5px',
// //   },
// //   linksContainer: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '6px',
// //   },
// //   explanationLink: {
// //     fontSize: '13px',
// //     color: '#4a90e2',
// //     textDecoration: 'none',
// //     padding: '4px 0',
// //     borderBottom: '1px solid transparent',
// //     transition: 'all 0.2s ease',
// //   },
// //   progressBar: {
// //     height: '4px',
// //     backgroundColor: '#e9ecef',
// //     margin: '0',
// //     flexShrink: 0,
// //   },
// //   progressFill: {
// //     height: '100%',
// //     backgroundColor: '#4a90e2',
// //     transition: 'width 0.3s ease',
// //   },
// //   descriptionContainer: {
// //     backgroundColor: '#f8f9fa',
// //     borderTop: '1px solid #e9ecef',
// //     padding: '12px 20px',
// //     flexShrink: 0,
// //   },
// //   description: {
// //     fontSize: '13px',
// //     color: '#6c757d',
// //     margin: '0',
// //     textAlign: 'center',
// //     lineHeight: '1.4',
// //   },
// // });

// // export default SVGSlider2;


// import React, { useState, useEffect, useRef } from 'react';

// const ChevronLeft = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
//     <polyline points="15 18 9 12 15 6"></polyline>
//   </svg>
// );

// const ChevronRight = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
//     <polyline points="9 18 15 12 9 6"></polyline>
//   </svg>
// );

// const SVGSlider2 = ({ diagrams, title, link, height = 500, description = '' }) => {
//   const svgKeys = Object.keys(diagrams);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const svgContainerRef = useRef(null);

//   useEffect(() => {
//     if (!isAutoPlaying) return;
    
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % svgKeys.length);
//     }, 4000);

//     return () => clearInterval(timer);
//   }, [svgKeys.length, isAutoPlaying]);

//   useEffect(() => {
//     if (svgContainerRef.current) {
//       const svgElement = svgContainerRef.current.querySelector('svg');
//       if (svgElement) {
//         // Reset any previous styles
//         svgElement.style.width = '';
//         svgElement.style.height = '';
//         svgElement.style.maxWidth = '100%';
//         svgElement.style.maxHeight = '100%';
        
//         const viewBox = svgElement.getAttribute('viewBox');
//         if (viewBox) {
//           const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number);
//           const containerWidth = svgContainerRef.current.clientWidth - 40;
//           const containerHeight = svgContainerRef.current.clientHeight - 40;
          
//           // Calculate scale to fit container while maintaining aspect ratio
//           const scale = Math.min(containerWidth / vbWidth, containerHeight / vbHeight);
//           const scaledWidth = vbWidth * scale;
//           const scaledHeight = vbHeight * scale;
          
//           svgElement.style.width = `${scaledWidth}px`;
//           svgElement.style.height = `${scaledHeight}px`;
//         }
//       }
//     }
//   }, [currentIndex]);

//   const goToPrevious = () => {
//     setIsAutoPlaying(false);
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? svgKeys.length - 1 : prevIndex - 1
//     );
//   };

//   const goToNext = () => {
//     setIsAutoPlaying(false);
//     setCurrentIndex((prevIndex) => 
//       (prevIndex + 1) % svgKeys.length
//     );
//   };

//   const handleDotClick = (index) => {
//     setIsAutoPlaying(false);
//     setCurrentIndex(index);
//   };

//   const currentDiagram = diagrams[svgKeys[currentIndex]];
//   const currentExplanation = currentDiagram?.explanation || '';
//   const currentLinks = currentDiagram?.links || [];

//   const styles = getStyles(height);

//   return (
//     <div style={styles.sliderContainer}>
//       {/* Header - Only show if title or link exists */}
//       {(title || link) && (
//         <div style={styles.headerContainer}>
//           <div style={styles.titleContainer}>
//             {title && <h3 style={styles.title}>{title}</h3>}
//           </div>
//           <div style={styles.headerControls}>
//             <button 
//               onClick={() => setIsAutoPlaying(!isAutoPlaying)} 
//               style={styles.playPauseButton}
//             >
//               {isAutoPlaying ? '⏸️' : '▶️'}
//             </button>
//             {link && (
//               <a href={link} style={styles.link} target="_blank" rel="noopener noreferrer">
//                 See all Diagrams
//               </a>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Main Content */}
//       <div style={styles.mainContent}>
//         {/* SVG Display Area */}
//         <div style={styles.svgSection}>
//           <div style={styles.frame}>
//             <div 
//               ref={svgContainerRef}
//               style={styles.svgContainer} 
//               dangerouslySetInnerHTML={{ __html: currentDiagram?.svg || '' }} 
//             />
//             <button 
//               onClick={goToPrevious} 
//               style={{...styles.navButton, left: '15px'}}
//               onMouseEnter={(e) => e.target.style.opacity = '1'}
//               onMouseLeave={(e) => e.target.style.opacity = '0.8'}
//             >
//               <ChevronLeft />
//             </button>
//             <button 
//               onClick={goToNext} 
//               style={{...styles.navButton, right: '15px'}}
//               onMouseEnter={(e) => e.target.style.opacity = '1'}
//               onMouseLeave={(e) => e.target.style.opacity = '0.8'}
//             >
//               <ChevronRight />
//             </button>
//           </div>
          
//           {/* Navigation Dots */}
//           <div style={styles.dotsContainer}>
//             {svgKeys.map((_, index) => (
//               <div
//                 key={index}
//                 style={{
//                   ...styles.dot,
//                   backgroundColor: index === currentIndex ? '#3b82f6' : '#d1d5db',
//                   transform: index === currentIndex ? 'scale(1.3)' : 'scale(1)',
//                 }}
//                 onClick={() => handleDotClick(index)}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Explanation Panel */}
//         <div style={styles.explanationPanel}>
//           <div style={styles.explanationHeader}>
//             <h4 style={styles.explanationTitle}>
//               Step {currentIndex + 1} of {svgKeys.length}
//             </h4>
//             <div style={styles.stepCounter}>
//               {svgKeys[currentIndex]}
//             </div>
//           </div>
          
//           <div style={styles.explanationContent}>
//             {currentExplanation ? (
//               <p style={styles.explanationText}>{currentExplanation}</p>
//             ) : (
//               <p style={styles.placeholderText}>
//                 No explanation available for this diagram.
//               </p>
//             )}
//           </div>

//           {/* Links Section */}
//           {currentLinks.length > 0 && (
//             <div style={styles.linksSection}>
//               <div style={styles.linksSeparator}></div>
//               <div style={styles.linksHeader}>Related Links:</div>
//               <div style={styles.linksContainer}>
//                 {currentLinks.map((linkItem, index) => (
//                   <a 
//                     key={index}
//                     href={linkItem.url} 
//                     style={styles.explanationLink}
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                   >
//                     {linkItem.text}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           )}

//           <div style={styles.progressBar}>
//             <div 
//               style={{
//                 ...styles.progressFill,
//                 width: `${((currentIndex + 1) / svgKeys.length) * 100}%`
//               }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Description Footer */}
//       {description && (
//         <div style={styles.descriptionContainer}>
//           <p style={styles.description}>{description}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// const getStyles = (height) => ({
//   sliderContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     width: '100%',
//     height: `${height}px`,
//     backgroundColor: '#f8fafc',
//     borderRadius: '12px',
//     border: '1px solid #e2e8f0',
//     overflow: 'hidden',
//     fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
//     boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
//   },
//   headerContainer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '20px 24px',
//     borderBottom: '1px solid #e2e8f0',
//     backgroundColor: '#ffffff',
//     flexShrink: 0,
//   },
//   titleContainer: {
//     flex: 1,
//   },
//   title: {
//     fontSize: '20px',
//     fontWeight: '600',
//     color: '#1e293b',
//     margin: '0',
//     letterSpacing: '-0.025em',
//   },
//   headerControls: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//   },
//   playPauseButton: {
//     backgroundColor: '#f1f5f9',
//     border: '1px solid #cbd5e1',
//     borderRadius: '8px',
//     padding: '8px 12px',
//     color: '#475569',
//     cursor: 'pointer',
//     fontSize: '14px',
//     transition: 'all 0.2s ease',
//     fontWeight: '500',
//   },
//   link: {
//     color: '#3b82f6',
//     textDecoration: 'none',
//     fontWeight: '500',
//     fontSize: '14px',
//     padding: '8px 16px',
//     borderRadius: '8px',
//     border: '1px solid #3b82f6',
//     transition: 'all 0.2s ease',
//     backgroundColor: 'transparent',
//   },
//   mainContent: {
//     display: 'flex',
//     flex: 1,
//     gap: '0',
//     minHeight: 0,
//   },
//   svgSection: {
//     flex: '2',
//     display: 'flex',
//     flexDirection: 'column',
//     padding: '24px',
//     minHeight: 0,
//     backgroundColor: '#f8fafc',
//   },
//   frame: {
//     position: 'relative',
//     flex: 1,
//     backgroundColor: '#64748b',
//     borderRadius: '12px',
//     border: '1px solid #475569',
//     overflow: 'hidden',
//     marginBottom: '20px',
//     minHeight: '200px',
//     boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
//   },
//   svgContainer: {
//     width: '100%',
//     height: '100%',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '20px',
//     position: 'relative',
//   },
//   navButton: {
//     position: 'absolute',
//     top: '50%',
//     transform: 'translateY(-50%)',
//     backgroundColor: '#ffffff',
//     opacity: '0.8',
//     border: 'none',
//     borderRadius: '50%',
//     width: '44px',
//     height: '44px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     cursor: 'pointer',
//     transition: 'all 0.2s ease',
//     color: '#374151',
//     boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
//     zIndex: 10,
//   },
//   dotsContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: '12px',
//     padding: '12px 0',
//     flexShrink: 0,
//   },
//   dot: {
//     width: '10px',
//     height: '10px',
//     borderRadius: '50%',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     border: '2px solid transparent',
//   },
//   explanationPanel: {
//     flex: '1',
//     backgroundColor: '#ffffff',
//     display: 'flex',
//     flexDirection: 'column',
//     borderLeft: '1px solid #e2e8f0',
//     minWidth: '320px',
//     minHeight: 0,
//   },
//   explanationHeader: {
//     backgroundColor: '#f8fafc',
//     borderBottom: '1px solid #e2e8f0',
//     color: '#475569',
//     padding: '20px 24px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     flexShrink: 0,
//   },
//   explanationTitle: {
//     fontSize: '15px',
//     fontWeight: '600',
//     margin: '0',
//     color: '#374151',
//   },
//   stepCounter: {
//     fontSize: '12px',
//     backgroundColor: '#e2e8f0',
//     color: '#64748b',
//     padding: '6px 12px',
//     borderRadius: '6px',
//     fontWeight: '500',
//     letterSpacing: '0.025em',
//   },
//   explanationContent: {
//     flex: 1,
//     padding: '24px',
//     overflow: 'auto',
//     minHeight: 0,
//   },
//   explanationText: {
//     fontSize: '15px',
//     color: '#374151',
//     lineHeight: '1.6',
//     margin: '0',
//   },
//   placeholderText: {
//     fontSize: '15px',
//     color: '#9ca3af',
//     lineHeight: '1.6',
//     margin: '0',
//     fontStyle: 'italic',
//   },
//   linksSection: {
//     padding: '0 24px 24px',
//     flexShrink: 0,
//   },
//   linksSeparator: {
//     height: '1px',
//     backgroundColor: '#e2e8f0',
//     margin: '0 0 16px 0',
//   },
//   linksHeader: {
//     fontSize: '12px',
//     fontWeight: '600',
//     color: '#6b7280',
//     marginBottom: '12px',
//     textTransform: 'uppercase',
//     letterSpacing: '0.05em',
//   },
//   linksContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '8px',
//   },
//   explanationLink: {
//     fontSize: '14px',
//     color: '#3b82f6',
//     textDecoration: 'none',
//     padding: '6px 0',
//     borderBottom: '1px solid transparent',
//     transition: 'all 0.2s ease',
//     fontWeight: '500',
//   },
//   progressBar: {
//     height: '4px',
//     backgroundColor: '#e2e8f0',
//     margin: '0',
//     flexShrink: 0,
//   },
//   progressFill: {
//     height: '100%',
//     backgroundColor: '#3b82f6',
//     transition: 'width 0.3s ease',
//     borderRadius: '0 2px 2px 0',
//   },
//   descriptionContainer: {
//     backgroundColor: '#f8fafc',
//     borderTop: '1px solid #e2e8f0',
//     padding: '16px 24px',
//     flexShrink: 0,
//   },
//   description: {
//     fontSize: '14px',
//     color: '#6b7280',
//     margin: '0',
//     textAlign: 'center',
//     lineHeight: '1.5',
//   },
// });

// export default SVGSlider2;


import React, { useState, useEffect, useRef } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const SVGSlider2 = ({ diagrams, title, link, height = 500, description = '' }) => {
  const svgKeys = Object.keys(diagrams);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const svgContainerRef = useRef(null);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % svgKeys.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [svgKeys.length, isAutoPlaying]);

  useEffect(() => {
    if (svgContainerRef.current) {
      const svgElement = svgContainerRef.current.querySelector('svg');
      if (svgElement) {
        // Reset any previous styles
        svgElement.style.width = '';
        svgElement.style.height = '';
        svgElement.style.maxWidth = '100%';
        svgElement.style.maxHeight = '100%';
        
        const viewBox = svgElement.getAttribute('viewBox');
        if (viewBox) {
          const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number);
          const containerWidth = svgContainerRef.current.clientWidth - 40;
          const containerHeight = svgContainerRef.current.clientHeight - 40;
          
          // Calculate scale to fit container while maintaining aspect ratio
          const scale = Math.min(containerWidth / vbWidth, containerHeight / vbHeight);
          const scaledWidth = vbWidth * scale;
          const scaledHeight = vbHeight * scale;
          
          svgElement.style.width = `${scaledWidth}px`;
          svgElement.style.height = `${scaledHeight}px`;
        }
      }
    }
  }, [currentIndex]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? svgKeys.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % svgKeys.length
    );
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentDiagram = diagrams[svgKeys[currentIndex]];
  const currentExplanation = currentDiagram?.explanation || '';
  const currentLinks = currentDiagram?.links || [];

  const styles = getStyles(height);

  return (
    <div style={styles.sliderContainer}>
      {/* Header - Always show */}
      <div style={styles.headerContainer}>
        <div style={styles.titleContainer}>
          {title && <h3 style={styles.title}>{title}</h3>}
        </div>
        <div style={styles.headerControls}>
          <button 
            onClick={() => setIsAutoPlaying(!isAutoPlaying)} 
            style={styles.playPauseButton}
          >
            {isAutoPlaying ? '⏸️' : '▶️'}
          </button>
          {link && (
            <a href={link} style={styles.link} target="_blank" rel="noopener noreferrer">
              See all Diagrams
            </a>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* SVG Display Area */}
        <div style={styles.svgSection}>
          <div style={styles.frame}>
            <div 
              ref={svgContainerRef}
              style={styles.svgContainer} 
              dangerouslySetInnerHTML={{ __html: currentDiagram?.svg || '' }} 
            />
            <button 
              onClick={goToPrevious} 
              style={{...styles.navButton, left: '15px'}}
              onMouseEnter={(e) => e.target.style.opacity = '1'}
              onMouseLeave={(e) => e.target.style.opacity = '0.8'}
            >
              <ChevronLeft />
            </button>
            <button 
              onClick={goToNext} 
              style={{...styles.navButton, right: '15px'}}
              onMouseEnter={(e) => e.target.style.opacity = '1'}
              onMouseLeave={(e) => e.target.style.opacity = '0.8'}
            >
              <ChevronRight />
            </button>
          </div>
          
          {/* Navigation Dots */}
          <div style={styles.dotsContainer}>
            {svgKeys.map((_, index) => (
              <div
                key={index}
                style={{
                  ...styles.dot,
                  backgroundColor: index === currentIndex ? '#3b82f6' : '#d1d5db',
                  transform: index === currentIndex ? 'scale(1.3)' : 'scale(1)',
                }}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>

        {/* Explanation Panel */}
        <div style={styles.explanationPanel}>
          <div style={styles.explanationHeader}>
            <h4 style={styles.explanationTitle}>
              Diagram {currentIndex + 1} of {svgKeys.length}
            </h4>
            <div style={styles.stepCounter}>
              {svgKeys[currentIndex]}
            </div>
          </div>
          
          <div style={styles.explanationContent}>
            {currentExplanation ? (
              <p style={styles.explanationText}>{processContent(currentExplanation)}</p>
            ) : (
              <p style={styles.placeholderText}>
                No explanation available for this diagram.
              </p>
            )}
          </div>

          {/* Links Section */}
          {currentLinks.length > 0 && (
            <div style={styles.linksSection}>
              <div style={styles.linksSeparator}></div>
              <div style={styles.linksHeader}>Related Links:</div>
              <div style={styles.linksContainer}>
                {currentLinks.map((linkItem, index) => (
                  <a 
                    key={index}
                    href={linkItem.url} 
                    style={styles.explanationLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {linkItem.text}
                  </a>
                ))}
              </div>
            </div>
          )}

          <div style={styles.progressBar}>
            <div 
              style={{
                ...styles.progressFill,
                width: `${((currentIndex + 1) / svgKeys.length) * 100}%`
              }}
            />
          </div>
        </div>
      </div>

      {/* Description Footer */}
      {description && (
        <div style={styles.descriptionContainer}>
          <p style={styles.description}>{description}</p>
        </div>
      )}
    </div>
  );
};

const getStyles = (height) => ({
  sliderContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: `${height}px`,
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    overflow: 'hidden',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 24px',
    borderBottom: '1px solid #e2e8f0',
    backgroundColor: '#ffffff',
    flexShrink: 0,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#1e293b',
    margin: '0',
    letterSpacing: '-0.025em',
  },
  headerControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  playPauseButton: {
    backgroundColor: '#f1f5f9',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    padding: '8px 12px',
    color: '#475569',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'all 0.2s ease',
    fontWeight: '500',
  },
  link: {
    color: '#3b82f6',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '14px',
    padding: '8px 16px',
    borderRadius: '8px',
    border: '1px solid #3b82f6',
    transition: 'all 0.2s ease',
    backgroundColor: 'transparent',
  },
  mainContent: {
    display: 'flex',
    flex: 1,
    gap: '0',
    minHeight: 0,
  },
  svgSection: {
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
    padding: '24px',
    minHeight: 0,
    backgroundColor: '#f8fafc',
  },
  frame: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    border: '3px solid #475569',
    overflow: 'hidden',
    marginBottom: '20px',
    minHeight: '200px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  svgContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    position: 'relative',
  },
  navButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#64748b',
    opacity: '0.6',
    border: 'none',
    borderRadius: '50%',
    width: '44px',
    height: '44px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    color: 'white',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    zIndex: 10,
  },
  dotsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 0',
    flexShrink: 0,
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: '2px solid transparent',
  },
  explanationPanel: {
    flex: '1',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    borderLeft: '1px solid #e2e8f0',
    minWidth: '320px',
    minHeight: 0,
  },
  explanationHeader: {
    backgroundColor: '#f8fafc',
    borderBottom: '1px solid #e2e8f0',
    color: '#475569',
    padding: '20px 24px',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexShrink: 0,
    
     },
  explanationTitle: {
    fontSize: '15px',
    fontWeight: '600',
    margin: '0',
    color: '#374151',
    marginBottom:'10px'
  },
  stepCounter: {
    fontSize: '16px',
    backgroundColor: '#e2e8f0',
    color: '#64748b',
    padding: '6px 12px',
    borderRadius: '6px',
    fontWeight: '500',
    letterSpacing: '0.025em',
  },
  explanationContent: {
    flex: 1,
    padding: '24px',
    overflow: 'auto',
    minHeight: 0,
  },
  explanationText: {
    fontSize: '15px',
    color: '#374151',
    lineHeight: '1.6',
    margin: '0',
  },
  placeholderText: {
    fontSize: '15px',
    color: '#9ca3af',
    lineHeight: '1.6',
    margin: '0',
    fontStyle: 'italic',
  },
  linksSection: {
    padding: '0 24px 24px',
    flexShrink: 0,
  },
  linksSeparator: {
    height: '1px',
    backgroundColor: '#e2e8f0',
    margin: '0 0 16px 0',
  },
  linksHeader: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#6b7280',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  linksContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  explanationLink: {
    fontSize: '14px',
    color: '#3b82f6',
    textDecoration: 'none',
    padding: '6px 0',
    borderBottom: '1px solid transparent',
    transition: 'all 0.2s ease',
    fontWeight: '500',
  },
  progressBar: {
    height: '4px',
    backgroundColor: '#e2e8f0',
    margin: '0',
    flexShrink: 0,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3b82f6',
    transition: 'width 0.3s ease',
    borderRadius: '0 2px 2px 0',
  },
  descriptionContainer: {
    backgroundColor: '#f8fafc',
    borderTop: '1px solid #e2e8f0',
    padding: '16px 24px',
    flexShrink: 0,
  },
  description: {
    fontSize: '14px',
    color: '#6b7280',
    margin: '0',
    textAlign: 'center',
    lineHeight: '1.5',
  },
});

export default SVGSlider2;