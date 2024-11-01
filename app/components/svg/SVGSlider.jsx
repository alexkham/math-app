// // // // // // // // // import React, { useState, useEffect } from 'react';

// // // // // // // // // const ChevronLeft = () => (
// // // // // // // // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // // // // // // // //     <polyline points="15 18 9 12 15 6"></polyline>
// // // // // // // // //   </svg>
// // // // // // // // // );

// // // // // // // // // const ChevronRight = () => (
// // // // // // // // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // // // // // // // //     <polyline points="9 18 15 12 9 6"></polyline>
// // // // // // // // //   </svg>
// // // // // // // // // );

// // // // // // // // // const SVGSlider = ({ diagrams }) => {
// // // // // // // // //   const svgKeys = Object.keys(diagrams);
// // // // // // // // //   const [currentIndex, setCurrentIndex] = useState(0);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const timer = setInterval(() => {
// // // // // // // // //       setCurrentIndex((prevIndex) => (prevIndex + 1) % svgKeys.length);
// // // // // // // // //     }, 3000);

// // // // // // // // //     return () => clearInterval(timer);
// // // // // // // // //   }, [svgKeys.length]);

// // // // // // // // //   const goToPrevious = () => {
// // // // // // // // //     setCurrentIndex((prevIndex) => 
// // // // // // // // //       prevIndex === 0 ? svgKeys.length - 1 : prevIndex - 1
// // // // // // // // //     );
// // // // // // // // //   };

// // // // // // // // //   const goToNext = () => {
// // // // // // // // //     setCurrentIndex((prevIndex) => 
// // // // // // // // //       (prevIndex + 1) % svgKeys.length
// // // // // // // // //     );
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div style={styles.sliderContainer}>
// // // // // // // // //       <div style={styles.frame}>
// // // // // // // // //         <div style={styles.svgContainer} dangerouslySetInnerHTML={{ __html: diagrams[svgKeys[currentIndex]].svg }} />
// // // // // // // // //         <button onClick={goToPrevious} style={{...styles.navButton, left: '10px'}}>
// // // // // // // // //           <ChevronLeft />
// // // // // // // // //         </button>
// // // // // // // // //         <button onClick={goToNext} style={{...styles.navButton, right: '10px'}}>
// // // // // // // // //           <ChevronRight />
// // // // // // // // //         </button>
// // // // // // // // //       </div>
// // // // // // // // //       <div style={styles.dotsContainer}>
// // // // // // // // //         {svgKeys.map((_, index) => (
// // // // // // // // //           <div
// // // // // // // // //             key={index}
// // // // // // // // //             style={{
// // // // // // // // //               ...styles.dot,
// // // // // // // // //               backgroundColor: index === currentIndex ? '#3498db' : '#bdc3c7',
// // // // // // // // //             }}
// // // // // // // // //             onClick={() => setCurrentIndex(index)}
// // // // // // // // //           />
// // // // // // // // //         ))}
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // const styles = {
// // // // // // // // //   sliderContainer: {
// // // // // // // // //     display: 'flex',
// // // // // // // // //     flexDirection: 'column',
// // // // // // // // //     alignItems: 'center',
// // // // // // // // //     justifyContent: 'center',
// // // // // // // // //     padding: '20px',
// // // // // // // // //     backgroundColor: '#f5f5f5',
// // // // // // // // //     width:'50%',
// // // // // // // // //   },
// // // // // // // // //   frame: {
// // // // // // // // //     position: 'relative',
// // // // // // // // //     width: '600px',
// // // // // // // // //     height: '250px',
// // // // // // // // //     backgroundColor: 'white',
// // // // // // // // //     borderRadius: '15px',
// // // // // // // // //     boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
// // // // // // // // //     overflow: 'hidden',
// // // // // // // // //     border: '20px solid #e0e0e0',
// // // // // // // // //   },
// // // // // // // // //   svgContainer: {
// // // // // // // // //     width: '100%',
// // // // // // // // //     height: '100%',
// // // // // // // // //     display: 'flex',
// // // // // // // // //     justifyContent: 'center',
// // // // // // // // //     alignItems: 'center',
// // // // // // // // //     padding: '20px',
// // // // // // // // //   },
// // // // // // // // //   navButton: {
// // // // // // // // //     position: 'absolute',
// // // // // // // // //     top: '50%',
// // // // // // // // //     transform: 'translateY(-50%)',
// // // // // // // // //     backgroundColor: 'rgba(255, 255, 255, 0.7)',
// // // // // // // // //     border: 'none',
// // // // // // // // //     borderRadius: '50%',
// // // // // // // // //     width: '40px',
// // // // // // // // //     height: '40px',
// // // // // // // // //     display: 'flex',
// // // // // // // // //     justifyContent: 'center',
// // // // // // // // //     alignItems: 'center',
// // // // // // // // //     cursor: 'pointer',
// // // // // // // // //     transition: 'background-color 0.3s ease',
// // // // // // // // //   },
// // // // // // // // //   dotsContainer: {
// // // // // // // // //     display: 'flex',
// // // // // // // // //     justifyContent: 'center',
// // // // // // // // //     marginTop: '20px',
// // // // // // // // //   },
// // // // // // // // //   dot: {
// // // // // // // // //     width: '10px',
// // // // // // // // //     height: '10px',
// // // // // // // // //     borderRadius: '50%',
// // // // // // // // //     margin: '0 5px',
// // // // // // // // //     cursor: 'pointer',
// // // // // // // // //     transition: 'background-color 0.3s ease',
// // // // // // // // //   },
// // // // // // // // // };

// // // // // // // // // export default SVGSlider;
// // // // // // // // // import React, { useState, useEffect, useRef } from 'react';

// // // // // // // // // const ChevronLeft = () => (
// // // // // // // // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // // // // // // // //     <polyline points="15 18 9 12 15 6"></polyline>
// // // // // // // // //   </svg>
// // // // // // // // // );

// // // // // // // // // const ChevronRight = () => (
// // // // // // // // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // // // // // // // //     <polyline points="9 18 15 12 9 6"></polyline>
// // // // // // // // //   </svg>
// // // // // // // // // );

// // // // // // // // // const SVGSlider = ({ diagrams }) => {
// // // // // // // // //   const svgKeys = Object.keys(diagrams);
// // // // // // // // //   const [currentIndex, setCurrentIndex] = useState(0);
// // // // // // // // //   const svgContainerRef = useRef(null);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const timer = setInterval(() => {
// // // // // // // // //       setCurrentIndex((prevIndex) => (prevIndex + 1) % svgKeys.length);
// // // // // // // // //     }, 3000);

// // // // // // // // //     return () => clearInterval(timer);
// // // // // // // // //   }, [svgKeys.length]);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (svgContainerRef.current) {
// // // // // // // // //       const svgElement = svgContainerRef.current.querySelector('svg');
// // // // // // // // //       if (svgElement) {
// // // // // // // // //         svgElement.setAttribute('width', '100%');
// // // // // // // // //         svgElement.setAttribute('height', '100%');
// // // // // // // // //         svgElement.style.maxWidth = '100%';
// // // // // // // // //         svgElement.style.maxHeight = '100%';
// // // // // // // // //       }
// // // // // // // // //     }
// // // // // // // // //   }, [currentIndex]);

// // // // // // // // //   const goToPrevious = () => {
// // // // // // // // //     setCurrentIndex((prevIndex) => 
// // // // // // // // //       prevIndex === 0 ? svgKeys.length - 1 : prevIndex - 1
// // // // // // // // //     );
// // // // // // // // //   };

// // // // // // // // //   const goToNext = () => {
// // // // // // // // //     setCurrentIndex((prevIndex) => 
// // // // // // // // //       (prevIndex + 1) % svgKeys.length
// // // // // // // // //     );
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div style={styles.sliderContainer}>
// // // // // // // // //       <div style={styles.frame}>
// // // // // // // // //         <div 
// // // // // // // // //           ref={svgContainerRef}
// // // // // // // // //           style={styles.svgContainer} 
// // // // // // // // //           dangerouslySetInnerHTML={{ __html: diagrams[svgKeys[currentIndex]].svg }} 
// // // // // // // // //         />
// // // // // // // // //         <button onClick={goToPrevious} style={{...styles.navButton, left: '10px'}}>
// // // // // // // // //           <ChevronLeft />
// // // // // // // // //         </button>
// // // // // // // // //         <button onClick={goToNext} style={{...styles.navButton, right: '10px'}}>
// // // // // // // // //           <ChevronRight />
// // // // // // // // //         </button>
// // // // // // // // //       </div>
// // // // // // // // //       <div style={styles.dotsContainer}>
// // // // // // // // //         {svgKeys.map((_, index) => (
// // // // // // // // //           <div
// // // // // // // // //             key={index}
// // // // // // // // //             style={{
// // // // // // // // //               ...styles.dot,
// // // // // // // // //               backgroundColor: index === currentIndex ? '#6d95db' : '#f5f5f5',
// // // // // // // // //             }}
// // // // // // // // //             onClick={() => setCurrentIndex(index)}
// // // // // // // // //           />
// // // // // // // // //         ))}
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // const styles = {
// // // // // // // // //   sliderContainer: {
// // // // // // // // //     display: 'flex',
// // // // // // // // //     flexDirection: 'column',
// // // // // // // // //     alignItems: 'center',
// // // // // // // // //     justifyContent: 'center',
// // // // // // // // //     padding: '20px',
// // // // // // // // //     backgroundColor: '#c4c4c4',
// // // // // // // // //     width:'50%',
// // // // // // // // //     marginLeft:'20px',
// // // // // // // // //     borderRadius:'10px',
// // // // // // // // //     paddingLeft:'20px'
// // // // // // // // //     // #6d95db
// // // // // // // // //     // #fb4834
// // // // // // // // //   },
// // // // // // // // //   frame: {
// // // // // // // // //     position: 'relative',
// // // // // // // // //     width: '600px',
// // // // // // // // //     height: '300px',
// // // // // // // // //     backgroundColor: 'white',
// // // // // // // // //     borderRadius: '15px',
// // // // // // // // //     boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
// // // // // // // // //     overflow: 'hidden',
// // // // // // // // //     // border: '10px solid #f5f5f5',
// // // // // // // // //   },
// // // // // // // // //   svgContainer: {
// // // // // // // // //     width: '100%',
// // // // // // // // //     height: '100%',
// // // // // // // // //     display: 'flex',
// // // // // // // // //     justifyContent: 'center',
// // // // // // // // //     alignItems: 'center',
// // // // // // // // //   },
// // // // // // // // //   navButton: {
// // // // // // // // //     position: 'absolute',
// // // // // // // // //     top: '50%',
// // // // // // // // //     transform: 'translateY(-50%)',
// // // // // // // // //     backgroundColor:'#c4c4c4',
// // // // // // // // //     opacity:'0.4',
// // // // // // // // //     //  'rgba(255, 255, 255, 0.6)',
// // // // // // // // //     border: 'none',
// // // // // // // // //     borderRadius: '50%',
// // // // // // // // //     width: '40px',
// // // // // // // // //     height: '40px',
// // // // // // // // //     display: 'flex',
// // // // // // // // //     justifyContent: 'center',
// // // // // // // // //     alignItems: 'center',
// // // // // // // // //     cursor: 'pointer',
// // // // // // // // //     transition: 'background-color 0.3s ease',
// // // // // // // // //   },
// // // // // // // // //   dotsContainer: {
// // // // // // // // //     display: 'flex',
// // // // // // // // //     justifyContent: 'center',
// // // // // // // // //     marginTop: '20px',
// // // // // // // // //   },
// // // // // // // // //   dot: {
// // // // // // // // //     width: '10px',
// // // // // // // // //     height: '10px',
// // // // // // // // //     borderRadius: '50%',
// // // // // // // // //     margin: '0 5px',
// // // // // // // // //     cursor: 'pointer',
// // // // // // // // //     transition: 'background-color 0.3s ease',
// // // // // // // // //   },
// // // // // // // // // };

// // // // // // // // // export default SVGSlider;
// // // // // // // // import React, { useState, useEffect, useRef } from 'react';

// // // // // // // // const ChevronLeft = () => (
// // // // // // // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // // // // // // //     <polyline points="15 18 9 12 15 6"></polyline>
// // // // // // // //   </svg>
// // // // // // // // );

// // // // // // // // const ChevronRight = () => (
// // // // // // // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // // // // // // //     <polyline points="9 18 15 12 9 6"></polyline>
// // // // // // // //   </svg>
// // // // // // // // );

// // // // // // // // const SVGSlider = ({ diagrams, title, explanation, link }) => {
// // // // // // // //   const svgKeys = Object.keys(diagrams);
// // // // // // // //   const [currentIndex, setCurrentIndex] = useState(0);
// // // // // // // //   const svgContainerRef = useRef(null);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const timer = setInterval(() => {
// // // // // // // //       setCurrentIndex((prevIndex) => (prevIndex + 1) % svgKeys.length);
// // // // // // // //     }, 3000);

// // // // // // // //     return () => clearInterval(timer);
// // // // // // // //   }, [svgKeys.length]);

// // // // // // // //   useEffect(() => {
// // // // // // // //     if (svgContainerRef.current) {
// // // // // // // //       const svgElement = svgContainerRef.current.querySelector('svg');
// // // // // // // //       if (svgElement) {
// // // // // // // //         svgElement.setAttribute('width', '100%');
// // // // // // // //         svgElement.setAttribute('height', '100%');
// // // // // // // //         svgElement.style.maxWidth = '100%';
// // // // // // // //         svgElement.style.maxHeight = '100%';
// // // // // // // //       }
// // // // // // // //     }
// // // // // // // //   }, [currentIndex]);

// // // // // // // //   const goToPrevious = () => {
// // // // // // // //     setCurrentIndex((prevIndex) => 
// // // // // // // //       prevIndex === 0 ? svgKeys.length - 1 : prevIndex - 1
// // // // // // // //     );
// // // // // // // //   };

// // // // // // // //   const goToNext = () => {
// // // // // // // //     setCurrentIndex((prevIndex) => 
// // // // // // // //       (prevIndex + 1) % svgKeys.length
// // // // // // // //     );
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div style={styles.sliderContainer}>
// // // // // // // //       {title && <span style={styles.title}>{title}</span>}
// // // // // // // //       <div style={styles.frame}>
// // // // // // // //         <div 
// // // // // // // //           ref={svgContainerRef}
// // // // // // // //           style={styles.svgContainer} 
// // // // // // // //           dangerouslySetInnerHTML={{ __html: diagrams[svgKeys[currentIndex]].svg }} 
// // // // // // // //         />
// // // // // // // //         <button onClick={goToPrevious} style={{...styles.navButton, left: '10px'}}>
// // // // // // // //           <ChevronLeft />
// // // // // // // //         </button>
// // // // // // // //         <button onClick={goToNext} style={{...styles.navButton, right: '10px'}}>
// // // // // // // //           <ChevronRight />
// // // // // // // //         </button>
// // // // // // // //       </div>
// // // // // // // //       <div style={styles.dotsContainer}>
// // // // // // // //         {svgKeys.map((_, index) => (
// // // // // // // //           <div
// // // // // // // //             key={index}
// // // // // // // //             style={{
// // // // // // // //               ...styles.dot,
// // // // // // // //               backgroundColor: index === currentIndex ? '#6d95db' : '#f5f5f5',
// // // // // // // //             }}
// // // // // // // //             onClick={() => setCurrentIndex(index)}
// // // // // // // //           />
// // // // // // // //         ))}
// // // // // // // //       </div>
// // // // // // // //       {explanation && (
// // // // // // // //         <div style={styles.explanationContainer}>
// // // // // // // //           <p style={styles.explanation}>{explanation}</p>
// // // // // // // //           {link && (
// // // // // // // //             <a href={link} style={styles.link} target="_blank" rel="noopener noreferrer">
// // // // // // // //               Learn More
// // // // // // // //             </a>
// // // // // // // //           )}
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const styles = {
// // // // // // // //   sliderContainer: {
// // // // // // // //     display: 'flex',
// // // // // // // //     flexDirection: 'column',
// // // // // // // //     alignItems: 'center',
// // // // // // // //     justifyContent: 'center',
// // // // // // // //     padding: '20px',
// // // // // // // //     backgroundColor: '#c4c4c4',
// // // // // // // //     width: '50%',
// // // // // // // //     marginLeft: '20px',
// // // // // // // //     borderRadius: '10px',
// // // // // // // //     paddingLeft: '20px'
// // // // // // // //   },
// // // // // // // //   title: {
// // // // // // // //     fontSize: '18px',
// // // // // // // //     fontWeight: '700',
// // // // // // // //     color: '#333',
// // // // // // // //     marginBottom: '10px',
// // // // // // // //     textAlign: 'center',
// // // // // // // //   },
// // // // // // // //   frame: {
// // // // // // // //     position: 'relative',
// // // // // // // //     width: '500px',
// // // // // // // //     height: '280px',
// // // // // // // //     backgroundColor: 'white',
// // // // // // // //     borderRadius: '15px',
// // // // // // // //     boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
// // // // // // // //     overflow: 'hidden',
// // // // // // // //   },
// // // // // // // //   svgContainer: {
// // // // // // // //     width: '100%',
// // // // // // // //     height: '100%',
// // // // // // // //     display: 'flex',
// // // // // // // //     justifyContent: 'center',
// // // // // // // //     alignItems: 'center',
// // // // // // // //   },
// // // // // // // //   navButton: {
// // // // // // // //     position: 'absolute',
// // // // // // // //     top: '50%',
// // // // // // // //     transform: 'translateY(-50%)',
// // // // // // // //     backgroundColor: '#c4c4c4',
// // // // // // // //     opacity: '0.4',
// // // // // // // //     border: 'none',
// // // // // // // //     borderRadius: '50%',
// // // // // // // //     width: '40px',
// // // // // // // //     height: '40px',
// // // // // // // //     display: 'flex',
// // // // // // // //     justifyContent: 'center',
// // // // // // // //     alignItems: 'center',
// // // // // // // //     cursor: 'pointer',
// // // // // // // //     transition: 'background-color 0.3s ease',
// // // // // // // //   },
// // // // // // // //   dotsContainer: {
// // // // // // // //     display: 'flex',
// // // // // // // //     justifyContent: 'center',
// // // // // // // //     marginTop: '20px',
// // // // // // // //   },
// // // // // // // //   dot: {
// // // // // // // //     width: '10px',
// // // // // // // //     height: '10px',
// // // // // // // //     borderRadius: '50%',
// // // // // // // //     margin: '0 5px',
// // // // // // // //     cursor: 'pointer',
// // // // // // // //     transition: 'background-color 0.3s ease',
// // // // // // // //   },
// // // // // // // //   explanationContainer: {
// // // // // // // //     marginTop: '5px',
// // // // // // // //     textAlign: 'center',
// // // // // // // //     maxWidth: '100%',
// // // // // // // //     // backgroundColor:'#6d95db',
// // // // // // // //     width:'100%',
// // // // // // // //     height:'20px'
// // // // // // // //   },
// // // // // // // //   explanation: {
// // // // // // // //     fontSize: '16px',
   
// // // // // // // //     color: 'black',
    
// // // // // // // //     lineHeight: '1.5',
// // // // // // // //     marginBottom: '0px',
// // // // // // // //   },
// // // // // // // //   link: {
// // // // // // // //     color: '#6d95db',
// // // // // // // //     textDecoration: 'none',
// // // // // // // //     fontWeight: 'bold',
// // // // // // // //     transition: 'color 0.3s ease',
    
// // // // // // // //   },
// // // // // // // // };

// // // // // // // // export default SVGSlider;
// // // // // // // import React, { useState, useEffect, useRef } from 'react';

// // // // // // // const ChevronLeft = () => (
// // // // // // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // // // // // //     <polyline points="15 18 9 12 15 6"></polyline>
// // // // // // //   </svg>
// // // // // // // );

// // // // // // // const ChevronRight = () => (
// // // // // // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // // // // // //     <polyline points="9 18 15 12 9 6"></polyline>
// // // // // // //   </svg>
// // // // // // // );

// // // // // // // const SVGSlider = ({ diagrams, title, explanation, link }) => {
// // // // // // //   const svgKeys = Object.keys(diagrams);
// // // // // // //   const [currentIndex, setCurrentIndex] = useState(0);
// // // // // // //   const svgContainerRef = useRef(null);

// // // // // // //   useEffect(() => {
// // // // // // //     const timer = setInterval(() => {
// // // // // // //       setCurrentIndex((prevIndex) => (prevIndex + 1) % svgKeys.length);
// // // // // // //     }, 3000);

// // // // // // //     return () => clearInterval(timer);
// // // // // // //   }, [svgKeys.length]);

// // // // // // //   useEffect(() => {
// // // // // // //     if (svgContainerRef.current) {
// // // // // // //       const svgElement = svgContainerRef.current.querySelector('svg');
// // // // // // //       if (svgElement) {
// // // // // // //         svgElement.setAttribute('width', '100%');
// // // // // // //         svgElement.setAttribute('height', '100%');
// // // // // // //         svgElement.style.maxWidth = '100%';
// // // // // // //         svgElement.style.maxHeight = '100%';
// // // // // // //       }
// // // // // // //     }
// // // // // // //   }, [currentIndex]);

// // // // // // //   const goToPrevious = () => {
// // // // // // //     setCurrentIndex((prevIndex) => 
// // // // // // //       prevIndex === 0 ? svgKeys.length - 1 : prevIndex - 1
// // // // // // //     );
// // // // // // //   };

// // // // // // //   const goToNext = () => {
// // // // // // //     setCurrentIndex((prevIndex) => 
// // // // // // //       (prevIndex + 1) % svgKeys.length
// // // // // // //     );
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div style={styles.wrapper}>
// // // // // // //       <div style={styles.sliderContainer}>
// // // // // // //         <div style={styles.frame}>
// // // // // // //           <div 
// // // // // // //             ref={svgContainerRef}
// // // // // // //             style={styles.svgContainer} 
// // // // // // //             dangerouslySetInnerHTML={{ __html: diagrams[svgKeys[currentIndex]].svg }} 
// // // // // // //           />
// // // // // // //           <button onClick={goToPrevious} style={{...styles.navButton, left: '10px'}}>
// // // // // // //             <ChevronLeft />
// // // // // // //           </button>
// // // // // // //           <button onClick={goToNext} style={{...styles.navButton, right: '10px'}}>
// // // // // // //             <ChevronRight />
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //         <div style={styles.dotsContainer}>
// // // // // // //           {svgKeys.map((_, index) => (
// // // // // // //             <div
// // // // // // //               key={index}
// // // // // // //               style={{
// // // // // // //                 ...styles.dot,
// // // // // // //                 backgroundColor: index === currentIndex ? '#6d95db' : '#f5f5f5',
// // // // // // //               }}
// // // // // // //               onClick={() => setCurrentIndex(index)}
// // // // // // //             />
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //       <div style={styles.infoSection}>
// // // // // // //         {title && <h4 style={styles.title}>{title}</h4>}
// // // // // // //         {explanation && <p style={styles.explanation}>{explanation}</p>}
// // // // // // //         {link && (
// // // // // // //           <a href={link} style={styles.link} target="_blank" rel="noopener noreferrer">
// // // // // // //             Learn More
// // // // // // //           </a>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // const styles = {
// // // // // // //   wrapper: {
// // // // // // //     display: 'flex',
// // // // // // //     alignItems: 'flex-start',
// // // // // // //     width: 'calc(50% + 150px)',
// // // // // // //     marginLeft: '20px',
// // // // // // //   },
// // // // // // //   sliderContainer: {
// // // // // // //     display: 'flex',
// // // // // // //     flexDirection: 'column',
// // // // // // //     alignItems: 'center',
// // // // // // //     justifyContent: 'center',
// // // // // // //     padding: '20px',
// // // // // // //     backgroundColor: '#c4c4c4',
// // // // // // //     width: '100%',
// // // // // // //     borderRadius: '10px',
// // // // // // //     paddingLeft: '20px',
// // // // // // //   },
// // // // // // //   frame: {
// // // // // // //     position: 'relative',
// // // // // // //     width: '600px',
// // // // // // //     height: '300px',
// // // // // // //     backgroundColor: 'white',
// // // // // // //     borderRadius: '15px',
// // // // // // //     boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
// // // // // // //     overflow: 'hidden',
// // // // // // //   },
// // // // // // //   svgContainer: {
// // // // // // //     width: '100%',
// // // // // // //     height: '100%',
// // // // // // //     display: 'flex',
// // // // // // //     justifyContent: 'center',
// // // // // // //     alignItems: 'center',
// // // // // // //   },
// // // // // // //   navButton: {
// // // // // // //     position: 'absolute',
// // // // // // //     top: '50%',
// // // // // // //     transform: 'translateY(-50%)',
// // // // // // //     backgroundColor: '#c4c4c4',
// // // // // // //     opacity: '0.4',
// // // // // // //     border: 'none',
// // // // // // //     borderRadius: '50%',
// // // // // // //     width: '40px',
// // // // // // //     height: '40px',
// // // // // // //     display: 'flex',
// // // // // // //     justifyContent: 'center',
// // // // // // //     alignItems: 'center',
// // // // // // //     cursor: 'pointer',
// // // // // // //     transition: 'background-color 0.3s ease',
// // // // // // //   },
// // // // // // //   dotsContainer: {
// // // // // // //     display: 'flex',
// // // // // // //     justifyContent: 'center',
// // // // // // //     marginTop: '20px',
// // // // // // //   },
// // // // // // //   dot: {
// // // // // // //     width: '10px',
// // // // // // //     height: '10px',
// // // // // // //     borderRadius: '50%',
// // // // // // //     margin: '0 5px',
// // // // // // //     cursor: 'pointer',
// // // // // // //     transition: 'background-color 0.3s ease',
// // // // // // //   },
// // // // // // //   infoSection: {
// // // // // // //     width: '150px',
// // // // // // //     marginLeft: '20px',
// // // // // // //     padding: '10px',
// // // // // // //     backgroundColor: '#f5f5f5',
// // // // // // //     borderRadius: '10px',
// // // // // // //     display: 'flex',
// // // // // // //     flexDirection: 'column',
// // // // // // //     justifyContent: 'flex-start',
// // // // // // //     height: '100%',
// // // // // // //   },
// // // // // // //   title: {
// // // // // // //     fontSize: '16px',
// // // // // // //     fontWeight: 'bold',
// // // // // // //     color: '#333',
// // // // // // //     marginBottom: '10px',
// // // // // // //   },
// // // // // // //   explanation: {
// // // // // // //     fontSize: '12px',
// // // // // // //     color: '#666',
// // // // // // //     lineHeight: '1.4',
// // // // // // //     marginBottom: '10px',
// // // // // // //   },
// // // // // // //   link: {
// // // // // // //     fontSize: '12px',
// // // // // // //     color: '#6d95db',
// // // // // // //     textDecoration: 'none',
// // // // // // //     fontWeight: 'bold',
// // // // // // //     marginTop: 'auto',
// // // // // // //   },
// // // // // // // };

// // // // // // // export default SVGSlider;
// // // // // // // import React, { useState, useEffect, useRef } from 'react';

// // // // // // // const ChevronLeft = () => (
// // // // // // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // // // // // //     <polyline points="15 18 9 12 15 6"></polyline>
// // // // // // //   </svg>
// // // // // // // );

// // // // // // // const ChevronRight = () => (
// // // // // // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // // // // // //     <polyline points="9 18 15 12 9 6"></polyline>
// // // // // // //   </svg>
// // // // // // // );

// // // // // // // const SVGSlider = ({ diagrams, title, explanation, link }) => {
// // // // // // //   const svgKeys = Object.keys(diagrams);
// // // // // // //   const [currentIndex, setCurrentIndex] = useState(0);
// // // // // // //   const svgContainerRef = useRef(null);

// // // // // // //   useEffect(() => {
// // // // // // //     const timer = setInterval(() => {
// // // // // // //       setCurrentIndex((prevIndex) => (prevIndex + 1) % svgKeys.length);
// // // // // // //     }, 3000);

// // // // // // //     return () => clearInterval(timer);
// // // // // // //   }, [svgKeys.length]);

// // // // // // //   useEffect(() => {
// // // // // // //     if (svgContainerRef.current) {
// // // // // // //       const svgElement = svgContainerRef.current.querySelector('svg');
// // // // // // //       if (svgElement) {
// // // // // // //         svgElement.setAttribute('width', '100%');
// // // // // // //         svgElement.setAttribute('height', '100%');
// // // // // // //         svgElement.style.maxWidth = '100%';
// // // // // // //         svgElement.style.maxHeight = '100%';
// // // // // // //       }
// // // // // // //     }
// // // // // // //   }, [currentIndex]);

// // // // // // //   const goToPrevious = () => {
// // // // // // //     setCurrentIndex((prevIndex) => 
// // // // // // //       prevIndex === 0 ? svgKeys.length - 1 : prevIndex - 1
// // // // // // //     );
// // // // // // //   };

// // // // // // //   const goToNext = () => {
// // // // // // //     setCurrentIndex((prevIndex) => 
// // // // // // //       (prevIndex + 1) % svgKeys.length
// // // // // // //     );
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div style={styles.sliderContainer}>
// // // // // // //       {title && <h3 style={styles.title}>{title}</h3>}
// // // // // // //       <div style={styles.contentContainer}>
// // // // // // //         <div style={styles.sliderWrapper}>
// // // // // // //           <div style={styles.frame}>
// // // // // // //             <div 
// // // // // // //               ref={svgContainerRef}
// // // // // // //               style={styles.svgContainer} 
// // // // // // //               dangerouslySetInnerHTML={{ __html: diagrams[svgKeys[currentIndex]].svg }} 
// // // // // // //             />
// // // // // // //             <button onClick={goToPrevious} style={{...styles.navButton, left: '10px'}}>
// // // // // // //               <ChevronLeft />
// // // // // // //             </button>
// // // // // // //             <button onClick={goToNext} style={{...styles.navButton, right: '10px'}}>
// // // // // // //               <ChevronRight />
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //           <div style={styles.dotsContainer}>
// // // // // // //             {svgKeys.map((_, index) => (
// // // // // // //               <div
// // // // // // //                 key={index}
// // // // // // //                 style={{
// // // // // // //                   ...styles.dot,
// // // // // // //                   backgroundColor: index === currentIndex ? '#6d95db' : '#f5f5f5',
// // // // // // //                 }}
// // // // // // //                 onClick={() => setCurrentIndex(index)}
// // // // // // //               />
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         {explanation && (
// // // // // // //           <div style={styles.explanationContainer}>
// // // // // // //             <p style={styles.explanation}>{explanation}</p>
// // // // // // //             {link && (
// // // // // // //               <a href={link} style={styles.link} target="_blank" rel="noopener noreferrer">
// // // // // // //                 Learn More
// // // // // // //               </a>
// // // // // // //             )}
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // const styles = {
// // // // // // //   sliderContainer: {
// // // // // // //     display: 'flex',
// // // // // // //     flexDirection: 'column',
// // // // // // //     alignItems: 'flex-start',
// // // // // // //     padding: '20px',
// // // // // // //     backgroundColor: '#d9d9d9',
// // // // // // //     borderRadius: '10px',
// // // // // // //     width: '100%',
// // // // // // //     maxWidth: '900px',
// // // // // // //     margin: '0 auto',
   
// // // // // // //   },
// // // // // // //   title: {
// // // // // // //     fontSize: '18px',
// // // // // // //     fontWeight: 'bold',
// // // // // // //     color: '#333',
// // // // // // //     marginBottom: '15px',
// // // // // // //     alignSelf: 'center',
// // // // // // //   },
// // // // // // //   contentContainer: {
// // // // // // //     display: 'flex',
// // // // // // //     width: '100%',
// // // // // // //     justifyContent: 'space-between',
// // // // // // //     alignItems: 'stretch',
// // // // // // //     height: '320px',  // Set a fixed height for the content container
// // // // // // //   },
// // // // // // //   sliderWrapper: {
// // // // // // //     display: 'flex',
// // // // // // //     flexDirection: 'column',
// // // // // // //     width: 'calc(100% - 200px)',  // Adjust width to account for explanation width
// // // // // // //   },
// // // // // // //   frame: {
// // // // // // //     position: 'relative',
// // // // // // //     width: '500px',
// // // // // // //     height: '320px',
// // // // // // //     backgroundColor: 'white',
// // // // // // //     borderRadius: '15px',
// // // // // // //     boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
// // // // // // //     overflow: 'hidden',
// // // // // // //   },
// // // // // // //   svgContainer: {
// // // // // // //     width: '100%',
// // // // // // //     height: '350px',
// // // // // // //     display: 'flex',
// // // // // // //     justifyContent: 'center',
// // // // // // //     alignItems: 'center',
// // // // // // //   },
// // // // // // //   navButton: {
// // // // // // //     position: 'absolute',
// // // // // // //     top: '50%',
// // // // // // //     transform: 'translateY(-50%)',
// // // // // // //     backgroundColor: '#c4c4c4',
// // // // // // //     opacity: '0.4',
// // // // // // //     border: 'none',
// // // // // // //     borderRadius: '50%',
// // // // // // //     width: '40px',
// // // // // // //     height: '40px',
// // // // // // //     display: 'flex',
// // // // // // //     justifyContent: 'center',
// // // // // // //     alignItems: 'center',
// // // // // // //     cursor: 'pointer',
// // // // // // //     transition: 'background-color 0.3s ease',
// // // // // // //   },
// // // // // // //   dotsContainer: {
// // // // // // //     display: 'flex',
// // // // // // //     justifyContent: 'center',
// // // // // // //     marginTop: '15px',
// // // // // // //   },
// // // // // // //   dot: {
// // // // // // //     width: '8px',
// // // // // // //     height: '8px',
// // // // // // //     borderRadius: '50%',
// // // // // // //     margin: '0 5px',
// // // // // // //     cursor: 'pointer',
// // // // // // //     transition: 'background-color 0.3s ease',
// // // // // // //   },
// // // // // // //   explanationContainer: {
// // // // // // //     width: '200px',
// // // // // // //    paddingLeft:'20px',
// // // // // // //     padding: '10px',
// // // // // // //     // backgroundColor: 'white',
// // // // // // //     borderRadius: '0 15px 15px 0',
// // // // // // //     display: 'flex',
// // // // // // //     flexDirection: 'column',
// // // // // // //     justifyContent: 'center',
// // // // // // //         height:'300px',
// // // // // // //     background:'none'
// // // // // // //   },
// // // // // // //   explanation: {
// // // // // // //     fontSize: '18px',
// // // // // // //     color: '#333',
// // // // // // //     lineHeight: '1.5',
// // // // // // //     marginBottom: '10px',

// // // // // // //   },
// // // // // // //   link: {
// // // // // // //     color: '#6d95db',
// // // // // // //     textDecoration: 'none',
// // // // // // //     fontWeight: 'bold',
// // // // // // //     fontSize: '18px',
// // // // // // //     transition: 'color 0.3s ease',
// // // // // // //     alignSelf: 'flex-start',
// // // // // // //   },
// // // // // // // };

// // // // // // // export default SVGSlider;
// // // // // // // import React, { useState, useEffect, useRef } from 'react';

// // // // // // // const ChevronLeft = () => (
// // // // // // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // // // // // //     <polyline points="15 18 9 12 15 6"></polyline>
// // // // // // //   </svg>
// // // // // // // );

// // // // // // // const ChevronRight = () => (
// // // // // // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // // // // // //     <polyline points="9 18 15 12 9 6"></polyline>
// // // // // // //   </svg>
// // // // // // // );

// // // // // // // const SVGSlider = ({ diagrams, title, explanation, link, width = 700, height = 320 }) => {
// // // // // // //   const svgKeys = Object.keys(diagrams);
// // // // // // //   const [currentIndex, setCurrentIndex] = useState(0);
// // // // // // //   const svgContainerRef = useRef(null);

// // // // // // //   useEffect(() => {
// // // // // // //     const timer = setInterval(() => {
// // // // // // //       setCurrentIndex((prevIndex) => (prevIndex + 1) % svgKeys.length);
// // // // // // //     }, 3000);

// // // // // // //     return () => clearInterval(timer);
// // // // // // //   }, [svgKeys.length]);

// // // // // // //   useEffect(() => {
// // // // // // //     if (svgContainerRef.current) {
// // // // // // //       const svgElement = svgContainerRef.current.querySelector('svg');
// // // // // // //       if (svgElement) {
// // // // // // //         const viewBox = svgElement.getAttribute('viewBox');
// // // // // // //         if (viewBox) {
// // // // // // //           const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number);
// // // // // // //           const scale = Math.min((width - 40) / vbWidth, (height - 40) / vbHeight);
// // // // // // //           svgElement.style.width = `${vbWidth * scale}px`;
// // // // // // //           svgElement.style.height = `${vbHeight * scale}px`;
// // // // // // //         }
// // // // // // //       }
// // // // // // //     }
// // // // // // //   }, [currentIndex, width, height]);

// // // // // // //   const goToPrevious = () => {
// // // // // // //     setCurrentIndex((prevIndex) => 
// // // // // // //       prevIndex === 0 ? svgKeys.length - 1 : prevIndex - 1
// // // // // // //     );
// // // // // // //   };

// // // // // // //   const goToNext = () => {
// // // // // // //     setCurrentIndex((prevIndex) => 
// // // // // // //       (prevIndex + 1) % svgKeys.length
// // // // // // //     );
// // // // // // //   };

// // // // // // //   const styles = getStyles(width, height);

// // // // // // //   return (
// // // // // // //     <div style={styles.sliderContainer}>
// // // // // // //       {title && <h3 style={styles.title}>{title}</h3>}
// // // // // // //       <div style={styles.contentContainer}>
// // // // // // //         <div style={styles.sliderWrapper}>
// // // // // // //           <div style={styles.frame}>
// // // // // // //             <div 
// // // // // // //               ref={svgContainerRef}
// // // // // // //               style={styles.svgContainer} 
// // // // // // //               dangerouslySetInnerHTML={{ __html: diagrams[svgKeys[currentIndex]].svg }} 
// // // // // // //             />
// // // // // // //             <button onClick={goToPrevious} style={{...styles.navButton, left: '10px'}}>
// // // // // // //               <ChevronLeft />
// // // // // // //             </button>
// // // // // // //             <button onClick={goToNext} style={{...styles.navButton, right: '10px'}}>
// // // // // // //               <ChevronRight />
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //           <div style={styles.dotsContainer}>
// // // // // // //             {svgKeys.map((_, index) => (
// // // // // // //               <div
// // // // // // //                 key={index}
// // // // // // //                 style={{
// // // // // // //                   ...styles.dot,
// // // // // // //                   backgroundColor: index === currentIndex ? '#6d95db' : '#f5f5f5',
// // // // // // //                 }}
// // // // // // //                 onClick={() => setCurrentIndex(index)}
// // // // // // //               />
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         {explanation && (
// // // // // // //           <div style={styles.explanationContainer}>
// // // // // // //             <p style={styles.explanation}>{explanation}</p>
// // // // // // //             {link && (
// // // // // // //               <a href={link} style={styles.link} target="_blank" rel="noopener noreferrer">
// // // // // // //                 Learn More
// // // // // // //               </a>
// // // // // // //             )}
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // const getStyles = (width, height) => ({
// // // // // // //   sliderContainer: {
// // // // // // //     display: 'flex',
// // // // // // //     flexDirection: 'column',
// // // // // // //     alignItems: 'flex-start',
// // // // // // //     padding: '20px',
// // // // // // //     backgroundColor: '#d9d9d9',
// // // // // // //     borderRadius: '10px',
// // // // // // //     width: `${width}px`,
// // // // // // //     margin: '0 auto',
// // // // // // //     marginLeft:'20px'
// // // // // // //   },
// // // // // // //   title: {
// // // // // // //     fontSize: '18px',
// // // // // // //     fontWeight: 'bold',
// // // // // // //     color: '#333',
// // // // // // //     marginBottom: '15px',
// // // // // // //     alignSelf: 'center',
// // // // // // //     width: '100%',
// // // // // // //     textAlign: 'center',
// // // // // // //   },
// // // // // // //   contentContainer: {
// // // // // // //     display: 'flex',
// // // // // // //     width: '100%',
// // // // // // //     justifyContent: 'space-between',
// // // // // // //     alignItems: 'stretch',
// // // // // // //     height: `${height}px`,
// // // // // // //   },
// // // // // // //   sliderWrapper: {
// // // // // // //     display: 'flex',
// // // // // // //     flexDirection: 'column',
// // // // // // //     width: `${width - 150}px`,
// // // // // // //   },
// // // // // // //   frame: {
// // // // // // //     position: 'relative',
// // // // // // //     width: `${width - 150}px`,
// // // // // // //     height: `${height}px`,
// // // // // // //     backgroundColor: 'white',
// // // // // // //     borderRadius: '15px',
// // // // // // //     boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
// // // // // // //     overflow: 'hidden',
// // // // // // //   },
// // // // // // //   svgContainer: {
// // // // // // //     width: '100%',
// // // // // // //     height: '100%',
// // // // // // //     display: 'flex',
// // // // // // //     justifyContent: 'center',
// // // // // // //     alignItems: 'center',
// // // // // // //   },
// // // // // // //   navButton: {
// // // // // // //     position: 'absolute',
// // // // // // //     top: '50%',
// // // // // // //     transform: 'translateY(-50%)',
// // // // // // //     backgroundColor: '#c4c4c4',
// // // // // // //     opacity: '0.4',
// // // // // // //     border: 'none',
// // // // // // //     borderRadius: '50%',
// // // // // // //     width: '40px',
// // // // // // //     height: '40px',
// // // // // // //     display: 'flex',
// // // // // // //     justifyContent: 'center',
// // // // // // //     alignItems: 'center',
// // // // // // //     cursor: 'pointer',
// // // // // // //     transition: 'background-color 0.3s ease',
// // // // // // //   },
// // // // // // //   dotsContainer: {
// // // // // // //     display: 'flex',
// // // // // // //     justifyContent: 'center',
// // // // // // //     marginTop: '15px',
// // // // // // //   },
// // // // // // //   dot: {
// // // // // // //     width: '8px',
// // // // // // //     height: '8px',
// // // // // // //     borderRadius: '50%',
// // // // // // //     margin: '0 5px',
// // // // // // //     cursor: 'pointer',
// // // // // // //     transition: 'background-color 0.3s ease',
// // // // // // //   },
// // // // // // //   explanationContainer: {
// // // // // // //     width: '200px',
    
// // // // // // //     padding: '10px',
// // // // // // //     borderRadius: '0 15px 15px 0',
// // // // // // //     display: 'flex',
// // // // // // //     flexDirection: 'column',
// // // // // // //     justifyContent: 'flex-start',
// // // // // // //     height: `${height}px`,
// // // // // // //     background: 'none',
// // // // // // //   },
// // // // // // //   explanation: {
// // // // // // //     fontSize: '18px',
// // // // // // //     color: '#333',
// // // // // // //     lineHeight: '1.5',
// // // // // // //     marginBottom: '10px',
// // // // // // //     paddingLeft: '30px',
// // // // // // //   },
// // // // // // //   link: {
// // // // // // //     color: '#6d95db',
// // // // // // //     textDecoration: 'none',
// // // // // // //     fontWeight: 'bold',
// // // // // // //     fontSize: '18px',
// // // // // // //     transition: 'color 0.3s ease',
// // // // // // //     alignSelf: 'flex-start',
// // // // // // //     paddingLeft: '30px',
// // // // // // //     marginTop:'30px'
// // // // // // //   },
// // // // // // // });

// // // // // // // export default SVGSlider;
// // // // // // import React, { useState, useEffect, useRef } from 'react';

// // // // // // const ChevronLeft = () => (
// // // // // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // // // // //     <polyline points="15 18 9 12 15 6"></polyline>
// // // // // //   </svg>
// // // // // // );

// // // // // // const ChevronRight = () => (
// // // // // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // // // // //     <polyline points="9 18 15 12 9 6"></polyline>
// // // // // //   </svg>
// // // // // // );

// // // // // // const SVGSlider = ({ diagrams, title, explanation, link, width = 700, height = 320 }) => {
// // // // // //   const svgKeys = Object.keys(diagrams);
// // // // // //   const [currentIndex, setCurrentIndex] = useState(0);
// // // // // //   const svgContainerRef = useRef(null);

// // // // // //   useEffect(() => {
// // // // // //     const timer = setInterval(() => {
// // // // // //       setCurrentIndex((prevIndex) => (prevIndex + 1) % svgKeys.length);
// // // // // //     }, 3000);

// // // // // //     return () => clearInterval(timer);
// // // // // //   }, [svgKeys.length]);

// // // // // //   useEffect(() => {
// // // // // //     if (svgContainerRef.current) {
// // // // // //       const svgElement = svgContainerRef.current.querySelector('svg');
// // // // // //       if (svgElement) {
// // // // // //         const viewBox = svgElement.getAttribute('viewBox');
// // // // // //         if (viewBox) {
// // // // // //           const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number);
// // // // // //           const scale = Math.min((width - 40) / vbWidth, (height - 40) / vbHeight);
// // // // // //           svgElement.style.width = `${vbWidth * scale}px`;
// // // // // //           svgElement.style.height = `${vbHeight * scale}px`;
// // // // // //         }
// // // // // //       }
// // // // // //     }
// // // // // //   }, [currentIndex, width, height]);

// // // // // //   const goToPrevious = () => {
// // // // // //     setCurrentIndex((prevIndex) => 
// // // // // //       prevIndex === 0 ? svgKeys.length - 1 : prevIndex - 1
// // // // // //     );
// // // // // //   };

// // // // // //   const goToNext = () => {
// // // // // //     setCurrentIndex((prevIndex) => 
// // // // // //       (prevIndex + 1) % svgKeys.length
// // // // // //     );
// // // // // //   };

// // // // // //   const styles = getStyles(width, height);

// // // // // //   return (
// // // // // //     <div style={styles.sliderContainer}>
// // // // // //       {title && <h3 style={styles.title}>{title}</h3>}
// // // // // //       <div style={styles.contentContainer}>
// // // // // //         <div style={styles.sliderWrapper}>
// // // // // //           <div style={styles.frame}>
// // // // // //             <div 
// // // // // //               ref={svgContainerRef}
// // // // // //               style={styles.svgContainer} 
// // // // // //               dangerouslySetInnerHTML={{ __html: diagrams[svgKeys[currentIndex]].svg }} 
// // // // // //             />
// // // // // //             <button onClick={goToPrevious} style={{...styles.navButton, left: '10px'}}>
// // // // // //               <ChevronLeft />
// // // // // //             </button>
// // // // // //             <button onClick={goToNext} style={{...styles.navButton, right: '10px'}}>
// // // // // //               <ChevronRight />
// // // // // //             </button>
// // // // // //           </div>
// // // // // //           <div style={styles.dotsContainer}>
// // // // // //             {svgKeys.map((_, index) => (
// // // // // //               <div
// // // // // //                 key={index}
// // // // // //                 style={{
// // // // // //                   ...styles.dot,
// // // // // //                   backgroundColor: index === currentIndex ? '#0a3784' : '#9fb4f1',
// // // // // //                 }}
// // // // // //                 onClick={() => setCurrentIndex(index)}
// // // // // //               />
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         {/* {explanation && (
// // // // // //           <div style={styles.explanationContainer}>
// // // // // //             <p style={styles.explanation}>{explanation}</p>
// // // // // //             {link && (
// // // // // //               <a href={link} style={styles.link} target="_blank" rel="noopener noreferrer">
// // // // // //                 See all Diagrams
// // // // // //               </a>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         )} */}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // const getStyles = (width, height) => ({
// // // // // //   sliderContainer: {
// // // // // //     display: 'flex',
// // // // // //     flexDirection: 'column',
// // // // // //     alignItems: 'flex-start',
// // // // // //     padding: '20px',
// // // // // //     backgroundColor: '#2e5ff4',
// // // // // //     borderRadius: '10px',
// // // // // //     width: `${width}px`,
// // // // // //     margin: '0 auto',
// // // // // //     marginLeft:'10px',
// // // // // //     marginRight:'1px'
// // // // // //   },
// // // // // //   title: {
// // // // // //     fontSize: '18px',
// // // // // //     fontWeight: 'bold',
// // // // // //     color: '#333',
// // // // // //     marginBottom: '15px',
// // // // // //     alignSelf: 'center',
// // // // // //     width: '100%',
// // // // // //     textAlign: 'center',
// // // // // //   },
// // // // // //   contentContainer: {
// // // // // //     display: 'flex',
// // // // // //     width: '100%',
// // // // // //     justifyContent: 'space-between',
// // // // // //     alignItems: 'stretch',
// // // // // //     height: `${height}px`,
// // // // // //   },
// // // // // //   sliderWrapper: {
// // // // // //     display: 'flex',
// // // // // //     flexDirection: 'column',
// // // // // //     width: `${width - 200}px`,
// // // // // //   },
// // // // // //   frame: {
// // // // // //     position: 'relative',
// // // // // //     width: `${width-100}px`,
// // // // // //     height: `${height}px`,
// // // // // //     backgroundColor: 'white',
// // // // // //     borderRadius: '15px',
// // // // // //     boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
// // // // // //     overflow: 'hidden',
// // // // // //   },
// // // // // //   svgContainer: {
// // // // // //     width: '100%',
// // // // // //     height: '100%',
// // // // // //     display: 'flex',
// // // // // //     justifyContent: 'center',
// // // // // //     alignItems: 'center',
// // // // // //   },
// // // // // //   navButton: {
// // // // // //     position: 'absolute',
// // // // // //     top: '50%',
// // // // // //     transform: 'translateY(-50%)',
// // // // // //     backgroundColor: '#cccccc',
// // // // // //     opacity: '0.4',
// // // // // //     border: 'none',
// // // // // //     borderRadius: '50%',
// // // // // //     width: '40px',
// // // // // //     height: '40px',
// // // // // //     display: 'flex',
// // // // // //     justifyContent: 'center',
// // // // // //     alignItems: 'center',
// // // // // //     cursor: 'pointer',
// // // // // //     transition: 'background-color 0.3s ease',
// // // // // //   },
// // // // // //   dotsContainer: {
// // // // // //     display: 'flex',
// // // // // //     justifyContent: 'center',
// // // // // //     marginTop: '15px',
// // // // // //   },
// // // // // //   dot: {
// // // // // //     width: '10px',
// // // // // //     height: '10px',
// // // // // //     borderRadius: '50%',
// // // // // //     margin: '0 5px',
// // // // // //     cursor: 'pointer',
// // // // // //     backgroundColor:'#99b3ff',
// // // // // //     transition: 'background-color 0.3s ease',
    
// // // // // //   },
// // // // // //   // explanationContainer: {
// // // // // //   //   width: '200px',
// // // // // //   //   paddingLeft: '30px',
// // // // // //   //   padding: '10px',
// // // // // //   //   borderRadius: '0 15px 15px 0',
// // // // // //   //   display: 'flex',
// // // // // //   //   flexDirection: 'column',
// // // // // //   //   justifyContent: 'flex-start',
// // // // // //   //   alignItems:'center',
// // // // // //   //   height: `${height}px`,
// // // // // //   //   background: 'none',
// // // // // //   // },
// // // // // //   explanation: {
// // // // // //     fontSize: '16px',
// // // // // //     color: '#333',
// // // // // //     lineHeight: '1.5',
// // // // // //     marginBottom: '10px',
// // // // // //     textAlign:'center'
// // // // // //   },
// // // // // //   link: {
// // // // // //     color: '#6d95db',
// // // // // //     textDecoration: 'none',
// // // // // //     fontWeight: 'bold',
// // // // // //     fontSize: '18px',
// // // // // //     transition: 'color 0.3s ease',
// // // // // //     alignSelf: 'center',
// // // // // //     marginTop:'30px'
// // // // // //   },
// // // // // // });

// // // // // // export default SVGSlider;

// // // // // // import React, { useState, useEffect, useRef } from 'react';

// // // // // // const ChevronLeft = () => (
// // // // // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // // // // //     <polyline points="15 18 9 12 15 6"></polyline>
// // // // // //   </svg>
// // // // // // );

// // // // // // const ChevronRight = () => (
// // // // // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // // // // //     <polyline points="9 18 15 12 9 6"></polyline>
// // // // // //   </svg>
// // // // // // );

// // // // // // const SVGSlider = ({ diagrams, title, explanation, link, width = 700, height = 320 }) => {
// // // // // //   const svgKeys = Object.keys(diagrams);
// // // // // //   const [currentIndex, setCurrentIndex] = useState(0);
// // // // // //   const svgContainerRef = useRef(null);

// // // // // //   useEffect(() => {
// // // // // //     const timer = setInterval(() => {
// // // // // //       setCurrentIndex((prevIndex) => (prevIndex + 1) % svgKeys.length);
// // // // // //     }, 3000);

// // // // // //     return () => clearInterval(timer);
// // // // // //   }, [svgKeys.length]);

// // // // // //   useEffect(() => {
// // // // // //     if (svgContainerRef.current) {
// // // // // //       const svgElement = svgContainerRef.current.querySelector('svg');
// // // // // //       if (svgElement) {
// // // // // //         const viewBox = svgElement.getAttribute('viewBox');
// // // // // //         if (viewBox) {
// // // // // //           const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number);
// // // // // //           const scale = Math.min(width / vbWidth, (height - 60) / vbHeight);
// // // // // //           svgElement.style.width = `${vbWidth * scale}px`;
// // // // // //           svgElement.style.height = `${vbHeight * scale}px`;
// // // // // //         }
// // // // // //       }
// // // // // //     }
// // // // // //   }, [currentIndex, width, height]);

// // // // // //   const goToPrevious = () => {
// // // // // //     setCurrentIndex((prevIndex) => 
// // // // // //       prevIndex === 0 ? svgKeys.length - 1 : prevIndex - 1
// // // // // //     );
// // // // // //   };

// // // // // //   const goToNext = () => {
// // // // // //     setCurrentIndex((prevIndex) => 
// // // // // //       (prevIndex + 1) % svgKeys.length
// // // // // //     );
// // // // // //   };

// // // // // //   const styles = getStyles(width, height);

// // // // // //   return (
// // // // // //     <div style={styles.sliderContainer}>
// // // // // //       <div style={styles.headerContainer}>
// // // // // //         <h3 style={styles.title}>{title}</h3>
// // // // // //         {link && (
// // // // // //           <a href={link} style={styles.link} target="_blank" rel="noopener noreferrer">
// // // // // //             See all Diagrams
// // // // // //           </a>
// // // // // //         )}
// // // // // //       </div>
// // // // // //       {explanation && <p style={styles.explanation}>{explanation}</p>}
// // // // // //       <div style={styles.frame}>
// // // // // //         <div 
// // // // // //           ref={svgContainerRef}
// // // // // //           style={styles.svgContainer} 
// // // // // //           dangerouslySetInnerHTML={{ __html: diagrams[svgKeys[currentIndex]].svg }} 
// // // // // //         />
// // // // // //         <button onClick={goToPrevious} style={{...styles.navButton, left: '10px'}}>
// // // // // //           <ChevronLeft />
// // // // // //         </button>
// // // // // //         <button onClick={goToNext} style={{...styles.navButton, right: '10px'}}>
// // // // // //           <ChevronRight />
// // // // // //         </button>
// // // // // //       </div>
// // // // // //       <div style={styles.dotsContainer}>
// // // // // //         {svgKeys.map((_, index) => (
// // // // // //           <div
// // // // // //             key={index}
// // // // // //             style={{
// // // // // //               ...styles.dot,
// // // // // //               backgroundColor: index === currentIndex ? '#0a3784' : '#9fb4f1',
// // // // // //             }}
// // // // // //             onClick={() => setCurrentIndex(index)}
// // // // // //           />
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // const getStyles = (width, height) => ({
// // // // // //   sliderContainer: {
// // // // // //     display: 'flex',
// // // // // //     flexDirection: 'column',
// // // // // //     alignItems: 'center',
// // // // // //     padding: '20px',
// // // // // //     backgroundColor: '#f2f2f2',
// // // // // //     borderRadius: '10px',
// // // // // //     width: `${width}px`,
// // // // // //     height: `${height}px`,
// // // // // //     margin: '0 auto',
// // // // // //   },
// // // // // //   headerContainer: {
// // // // // //     display: 'flex',
// // // // // //     justifyContent: 'space-between',
// // // // // //     alignItems: 'center',
// // // // // //     width: '100%',
// // // // // //     marginBottom: '5px',
// // // // // //   },
// // // // // //   title: {
// // // // // //     fontSize: '18px',
// // // // // //     fontWeight: 'bold',
// // // // // //     color: '#333',
// // // // // //     margin: 0,
// // // // // //   },
// // // // // //   explanation: {
// // // // // //     fontSize: '12px',
// // // // // //     color: '#666',
// // // // // //     marginBottom: '10px',
// // // // // //     textAlign: 'center',
// // // // // //     width: '100%',
// // // // // //   },
// // // // // //   frame: {
// // // // // //     position: 'relative',
// // // // // //     width: '100%',
// // // // // //     height: `${height - 100}px`,
// // // // // //     backgroundColor: 'white',
// // // // // //     borderRadius: '15px',
// // // // // //     boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
// // // // // //     overflow: 'hidden',
// // // // // //   },
// // // // // //   svgContainer: {
// // // // // //     width: '100%',
// // // // // //     height: '100%',
// // // // // //     display: 'flex',
// // // // // //     justifyContent: 'center',
// // // // // //     alignItems: 'center',
// // // // // //   },
// // // // // //   navButton: {
// // // // // //     position: 'absolute',
// // // // // //     top: '50%',
// // // // // //     transform: 'translateY(-50%)',
// // // // // //     backgroundColor: '#cccccc',
// // // // // //     opacity: '0.4',
// // // // // //     border: 'none',
// // // // // //     borderRadius: '50%',
// // // // // //     width: '40px',
// // // // // //     height: '40px',
// // // // // //     display: 'flex',
// // // // // //     justifyContent: 'center',
// // // // // //     alignItems: 'center',
// // // // // //     cursor: 'pointer',
// // // // // //     transition: 'background-color 0.3s ease',
// // // // // //   },
// // // // // //   dotsContainer: {
// // // // // //     display: 'flex',
// // // // // //     justifyContent: 'center',
// // // // // //     marginTop: '10px',
// // // // // //   },
// // // // // //   dot: {
// // // // // //     width: '10px',
// // // // // //     height: '10px',
// // // // // //     borderRadius: '50%',
// // // // // //     margin: '0 5px',
// // // // // //     cursor: 'pointer',
// // // // // //     backgroundColor: '#99b3ff',
// // // // // //     transition: 'background-color 0.3s ease',
// // // // // //   },
// // // // // //   link: {
// // // // // //     color: '#ffffff',
// // // // // //     backgroundColor: '#6d95db',
// // // // // //     textDecoration: 'none',
// // // // // //     fontWeight: 'bold',
// // // // // //     fontSize: '14px',
// // // // // //     padding: '5px 10px',
// // // // // //     borderRadius: '5px',
// // // // // //     transition: 'background-color 0.3s ease',
// // // // // //   },
// // // // // // });

// // // // // // export default SVGSlider;

// // // // // import React, { useState, useEffect, useRef } from 'react';

// // // // // const ChevronLeft = () => (
// // // // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // // // //     <polyline points="15 18 9 12 15 6"></polyline>
// // // // //   </svg>
// // // // // );

// // // // // const ChevronRight = () => (
// // // // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // // // //     <polyline points="9 18 15 12 9 6"></polyline>
// // // // //   </svg>
// // // // // );

// // // // // const SVGSlider = ({ diagrams, title, explanation, link, width = 700, height = 320 }) => {
// // // // //   const svgKeys = Object.keys(diagrams);
// // // // //   const [currentIndex, setCurrentIndex] = useState(0);
// // // // //   const svgContainerRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     const timer = setInterval(() => {
// // // // //       setCurrentIndex((prevIndex) => (prevIndex + 1) % svgKeys.length);
// // // // //     }, 3000);

// // // // //     return () => clearInterval(timer);
// // // // //   }, [svgKeys.length]);

// // // // //   useEffect(() => {
// // // // //     if (svgContainerRef.current) {
// // // // //       const svgElement = svgContainerRef.current.querySelector('svg');
// // // // //       if (svgElement) {
// // // // //         const viewBox = svgElement.getAttribute('viewBox');
// // // // //         if (viewBox) {
// // // // //           const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number);
// // // // //           const scale = Math.min((width - 20) / vbWidth, (height - 80) / vbHeight);
// // // // //           svgElement.style.width = `${vbWidth * scale}px`;
// // // // //           svgElement.style.height = `${vbHeight * scale}px`;
// // // // //         }
// // // // //       }
// // // // //     }
// // // // //   }, [currentIndex, width, height]);

// // // // //   const goToPrevious = () => {
// // // // //     setCurrentIndex((prevIndex) => 
// // // // //       prevIndex === 0 ? svgKeys.length - 1 : prevIndex - 1
// // // // //     );
// // // // //   };

// // // // //   const goToNext = () => {
// // // // //     setCurrentIndex((prevIndex) => 
// // // // //       (prevIndex + 1) % svgKeys.length
// // // // //     );
// // // // //   };

// // // // //   const styles = getStyles(width, height);

// // // // //   return (
// // // // //     <div style={styles.sliderContainer}>
// // // // //       <div style={styles.headerContainer}>
// // // // //         <div style={styles.titleExplanationContainer}>
// // // // //           {title && <h3 style={styles.title}>{title}</h3>}
// // // // //           {explanation && <p style={styles.explanation}>{explanation}</p>}
// // // // //         </div>
// // // // //         {link && (
// // // // //           <a href={link} style={styles.link} target="_blank" rel="noopener noreferrer">
// // // // //             See all Diagrams
// // // // //           </a>
// // // // //         )}
// // // // //       </div>
// // // // //       <div style={styles.frame}>
// // // // //         <div 
// // // // //           ref={svgContainerRef}
// // // // //           style={styles.svgContainer} 
// // // // //           dangerouslySetInnerHTML={{ __html: diagrams[svgKeys[currentIndex]].svg }} 
// // // // //         />
// // // // //         <button onClick={goToPrevious} style={{...styles.navButton, left: '10px'}}>
// // // // //           <ChevronLeft />
// // // // //         </button>
// // // // //         <button onClick={goToNext} style={{...styles.navButton, right: '10px'}}>
// // // // //           <ChevronRight />
// // // // //         </button>
// // // // //       </div>
// // // // //       <div style={styles.dotsContainer}>
// // // // //         {svgKeys.map((_, index) => (
// // // // //           <div
// // // // //             key={index}
// // // // //             style={{
// // // // //               ...styles.dot,
// // // // //               backgroundColor: index === currentIndex ? '#0a3784' : '#9fb4f1',
// // // // //             }}
// // // // //             onClick={() => setCurrentIndex(index)}
// // // // //           />
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // const getStyles = (width, height) => ({
// // // // //   sliderContainer: {
// // // // //     display: 'flex',
// // // // //     flexDirection: 'column',
// // // // //     alignItems: 'center',
// // // // //     padding: '5px',
// // // // //     backgroundColor: '#2e5ff4',
// // // // //     borderRadius: '10px',
// // // // //     width: `${width}px`,
// // // // //     height: `${height}px`,
// // // // //     margin: '0 auto',
// // // // //   },
// // // // //   headerContainer: {
// // // // //     display: 'flex',
// // // // //     justifyContent: 'space-between',
// // // // //     alignItems: 'flex-start',
// // // // //     width: '100%',
// // // // //     marginBottom: '5px',
// // // // //   },
// // // // //   titleExplanationContainer: {
// // // // //     display: 'flex',
// // // // //     flexDirection: 'column',
// // // // //     alignItems: 'flex-start',
// // // // //   },
// // // // //   title: {
// // // // //     fontSize: '18px',
// // // // //     fontWeight: 'bold',
// // // // //     color: '#ffffff',
// // // // //     margin: '0 0 5px 0',
// // // // //   },
// // // // //   explanation: {
// // // // //     fontSize: '12px',
// // // // //     color: '#e6e6e6',
// // // // //     margin: '0',
// // // // //     maxWidth: '70%',
// // // // //   },
// // // // //   frame: {
// // // // //     position: 'relative',
// // // // //     width: '100%',
// // // // //     height: `${height - 70}px`,
// // // // //     backgroundColor: 'white',
// // // // //     borderRadius: '10px',
// // // // //     overflow: 'hidden',
// // // // //   },
// // // // //   svgContainer: {
// // // // //     width: '100%',
// // // // //     height: '100%',
// // // // //     display: 'flex',
// // // // //     justifyContent: 'center',
// // // // //     alignItems: 'center',
// // // // //   },
// // // // //   navButton: {
// // // // //     position: 'absolute',
// // // // //     top: '50%',
// // // // //     transform: 'translateY(-50%)',
// // // // //     backgroundColor: '#cccccc',
// // // // //     opacity: '0.4',
// // // // //     border: 'none',
// // // // //     borderRadius: '50%',
// // // // //     width: '40px',
// // // // //     height: '40px',
// // // // //     display: 'flex',
// // // // //     justifyContent: 'center',
// // // // //     alignItems: 'center',
// // // // //     cursor: 'pointer',
// // // // //     transition: 'background-color 0.3s ease',
// // // // //   },
// // // // //   dotsContainer: {
// // // // //     display: 'flex',
// // // // //     justifyContent: 'center',
// // // // //     marginTop: '5px',
// // // // //   },
// // // // //   dot: {
// // // // //     width: '8px',
// // // // //     height: '8px',
// // // // //     borderRadius: '50%',
// // // // //     margin: '0 4px',
// // // // //     cursor: 'pointer',
// // // // //     backgroundColor: '#99b3ff',
// // // // //     transition: 'background-color 0.3s ease',
// // // // //   },
// // // // //   link: {
// // // // //     color: '#ffffff',
// // // // //     backgroundColor: '#0a3784',
// // // // //     textDecoration: 'none',
// // // // //     fontWeight: 'bold',
// // // // //     fontSize: '14px',
// // // // //     padding: '5px 10px',
// // // // //     borderRadius: '5px',
// // // // //     transition: 'background-color 0.3s ease',
// // // // //   },
// // // // // });

// // // // // export default SVGSlider;
// // // // // import React, { useState, useEffect, useRef } from 'react';

// // // // // const ChevronLeft = () => (
// // // // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // // // //     <polyline points="15 18 9 12 15 6"></polyline>
// // // // //   </svg>
// // // // // );

// // // // // const ChevronRight = () => (
// // // // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // // // //     <polyline points="9 18 15 12 9 6"></polyline>
// // // // //   </svg>
// // // // // );

// // // // // const SVGSlider = ({ diagrams, title, explanation, link, width = 700, height = 320 }) => {
// // // // //   const svgKeys = Object.keys(diagrams);
// // // // //   const [currentIndex, setCurrentIndex] = useState(0);
// // // // //   const svgContainerRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     const timer = setInterval(() => {
// // // // //       setCurrentIndex((prevIndex) => (prevIndex + 1) % svgKeys.length);
// // // // //     }, 3000);

// // // // //     return () => clearInterval(timer);
// // // // //   }, [svgKeys.length]);

// // // // //   useEffect(() => {
// // // // //     if (svgContainerRef.current) {
// // // // //       const svgElement = svgContainerRef.current.querySelector('svg');
// // // // //       if (svgElement) {
// // // // //         const viewBox = svgElement.getAttribute('viewBox');
// // // // //         if (viewBox) {
// // // // //           const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number);
// // // // //           const scale = Math.min((width - 20) / vbWidth, (height - 60) / vbHeight);
// // // // //           svgElement.style.width = `${vbWidth * scale}px`;
// // // // //           svgElement.style.height = `${vbHeight * scale}px`;
// // // // //         }
// // // // //       }
// // // // //     }
// // // // //   }, [currentIndex, width, height]);

// // // // //   const goToPrevious = () => {
// // // // //     setCurrentIndex((prevIndex) => 
// // // // //       prevIndex === 0 ? svgKeys.length - 1 : prevIndex - 1
// // // // //     );
// // // // //   };

// // // // //   const goToNext = () => {
// // // // //     setCurrentIndex((prevIndex) => 
// // // // //       (prevIndex + 1) % svgKeys.length
// // // // //     );
// // // // //   };

// // // // //   const styles = getStyles(width, height);

// // // // //   return (
// // // // //     <div style={styles.sliderContainer}>
// // // // //       <div style={styles.headerContainer}>
// // // // //         <div style={styles.titleExplanationContainer}>
// // // // //           {title && <h3 style={styles.title}>{title}</h3>}
// // // // //           {explanation && <p style={styles.explanation}>{explanation}</p>}
// // // // //         </div>
// // // // //         {link && (
// // // // //           <a href={link} style={styles.link} target="_blank" rel="noopener noreferrer">
// // // // //             See all Diagrams
// // // // //           </a>
// // // // //         )}
// // // // //       </div>
// // // // //       <div style={styles.frame}>
// // // // //         <div 
// // // // //           ref={svgContainerRef}
// // // // //           style={styles.svgContainer} 
// // // // //           dangerouslySetInnerHTML={{ __html: diagrams[svgKeys[currentIndex]].svg }} 
// // // // //         />
// // // // //         <button onClick={goToPrevious} style={{...styles.navButton, left: '10px'}}>
// // // // //           <ChevronLeft />
// // // // //         </button>
// // // // //         <button onClick={goToNext} style={{...styles.navButton, right: '10px'}}>
// // // // //           <ChevronRight />
// // // // //         </button>
// // // // //       </div>
// // // // //       <div style={styles.dotsContainer}>
// // // // //         {svgKeys.map((_, index) => (
// // // // //           <div
// // // // //             key={index}
// // // // //             style={{
// // // // //               ...styles.dot,
// // // // //               backgroundColor: index === currentIndex ? '#0a3784' : '#9fb4f1',
// // // // //             }}
// // // // //             onClick={() => setCurrentIndex(index)}
// // // // //           />
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // const getStyles = (width, height) => ({
// // // // //   sliderContainer: {
// // // // //     display: 'flex',
// // // // //     flexDirection: 'column',
// // // // //     alignItems: 'center',
// // // // //     padding: '5px',
// // // // //     backgroundColor: '#2e5ff4',
// // // // //     borderRadius: '10px',
// // // // //     width: `${width}px`,
// // // // //     // height: `${height+50}px`,
// // // // //     height:'400px',
// // // // //     margin: '0 auto',
// // // // //   },
// // // // //   headerContainer: {
// // // // //     display: 'flex',
// // // // //     justifyContent: 'space-between',
// // // // //     alignItems: 'flex-start',
// // // // //     width: '100%',
// // // // //     marginBottom: '5px',
// // // // //   },
// // // // //   titleExplanationContainer: {
// // // // //     display: 'flex',
// // // // //     flexDirection: 'column',
// // // // //     alignItems: 'flex-start',
// // // // //   },
// // // // //   title: {
// // // // //     fontSize: '16px',
// // // // //     fontWeight: 'bold',
// // // // //     color: '#ffffff',
// // // // //     margin: '0 0 2px 0',
// // // // //   },
// // // // //   explanation: {
// // // // //     fontSize: '11px',
// // // // //     color: '#e6e6e6',
// // // // //     margin: '0',
// // // // //     maxWidth: '70%',
// // // // //   },
// // // // //   frame: {
// // // // //     position: 'relative',
// // // // //     width: '100%',
// // // // //     height: `${height +20}px`,
// // // // //     backgroundColor: 'white',
// // // // //     borderRadius: '8px',
// // // // //     overflow: 'hidden',
// // // // //     marginBottom:'5px'
// // // // //   },
// // // // //   svgContainer: {
// // // // //     width: '100%',
// // // // //     height: '100%',
// // // // //     display: 'flex',
// // // // //     justifyContent: 'center',
// // // // //     alignItems: 'center',
// // // // //   },
// // // // //   navButton: {
// // // // //     position: 'absolute',
// // // // //     top: '50%',
// // // // //     transform: 'translateY(-50%)',
// // // // //     backgroundColor: '#cccccc',
// // // // //     opacity: '0.4',
// // // // //     border: 'none',
// // // // //     borderRadius: '50%',
// // // // //     width: '30px',
// // // // //     height: '30px',
// // // // //     display: 'flex',
// // // // //     justifyContent: 'center',
// // // // //     alignItems: 'center',
// // // // //     cursor: 'pointer',
// // // // //     transition: 'background-color 0.3s ease',
// // // // //   },
// // // // //   dotsContainer: {
// // // // //     display: 'flex',
// // // // //     justifyContent: 'center',
// // // // //     marginTop: '3px',
// // // // //   },
// // // // //   dot: {
// // // // //     width: '6px',
// // // // //     height: '6px',
// // // // //     borderRadius: '50%',
// // // // //     margin: '0 3px',
// // // // //     cursor: 'pointer',
// // // // //     backgroundColor: '#99b3ff',
// // // // //     transition: 'background-color 0.3s ease',
// // // // //   },
// // // // //   link: {
// // // // //     color: '#ffffff',
// // // // //     backgroundColor: '#0a3784',
// // // // //     textDecoration: 'none',
// // // // //     fontWeight: 'bold',
// // // // //     fontSize: '12px',
// // // // //     padding: '4px 8px',
// // // // //     borderRadius: '4px',
// // // // //     transition: 'background-color 0.3s ease',
// // // // //   },
// // // // // });

// // // // // export default SVGSlider;
// // // // import React, { useState, useEffect, useRef } from 'react';

// // // // const ChevronLeft = () => (
// // // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // // //     <polyline points="15 18 9 12 15 6"></polyline>
// // // //   </svg>
// // // // );

// // // // const ChevronRight = () => (
// // // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // // //     <polyline points="9 18 15 12 9 6"></polyline>
// // // //   </svg>
// // // // );

// // // // const SVGSlider = ({ diagrams, title, explanation, link, width = 700, height = 320 }) => {
// // // //   const svgKeys = Object.keys(diagrams);
// // // //   const [currentIndex, setCurrentIndex] = useState(0);
// // // //   const svgContainerRef = useRef(null);

// // // //   useEffect(() => {
// // // //     const timer = setInterval(() => {
// // // //       setCurrentIndex((prevIndex) => (prevIndex + 1) % svgKeys.length);
// // // //     }, 3000);

// // // //     return () => clearInterval(timer);
// // // //   }, [svgKeys.length]);

// // // //   useEffect(() => {
// // // //     if (svgContainerRef.current) {
// // // //       const svgElement = svgContainerRef.current.querySelector('svg');
// // // //       if (svgElement) {
// // // //         const viewBox = svgElement.getAttribute('viewBox');
// // // //         if (viewBox) {
// // // //           const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number);
// // // //           const containerWidth = width - 20;
// // // //           const containerHeight = height + 20;
// // // //           const scale = Math.min(containerWidth / vbWidth, containerHeight / vbHeight);
// // // //           const scaledWidth = vbWidth * scale;
// // // //           const scaledHeight = vbHeight * scale;
// // // //           svgElement.style.width = `${scaledWidth}px`;
// // // //           svgElement.style.height = `${scaledHeight}px`;
// // // //           svgElement.style.maxWidth = '100%';
// // // //           svgElement.style.maxHeight = '100%';
// // // //         }
// // // //       }
// // // //     }
// // // //   }, [currentIndex, width, height]);

// // // //   const goToPrevious = () => {
// // // //     setCurrentIndex((prevIndex) => 
// // // //       prevIndex === 0 ? svgKeys.length - 1 : prevIndex - 1
// // // //     );
// // // //   };

// // // //   const goToNext = () => {
// // // //     setCurrentIndex((prevIndex) => 
// // // //       (prevIndex + 1) % svgKeys.length
// // // //     );
// // // //   };

// // // //   const styles = getStyles(width, height);

// // // //   return (
// // // //     <div style={styles.sliderContainer}>
// // // //       <div style={styles.headerContainer}>
// // // //         <div style={styles.titleExplanationContainer}>
// // // //           {title && <h3 style={styles.title}>{title}</h3>}
// // // //           {explanation && <p style={styles.explanation}>{explanation}</p>}
// // // //         </div>
// // // //         {link && (
// // // //           <a href={link} style={styles.link} target="_blank" rel="noopener noreferrer">
// // // //             See all Diagrams
// // // //           </a>
// // // //         )}
// // // //       </div>
// // // //       <div style={styles.frame}>
// // // //         <div 
// // // //           ref={svgContainerRef}
// // // //           style={styles.svgContainer} 
// // // //           dangerouslySetInnerHTML={{ __html: diagrams[svgKeys[currentIndex]].svg }} 
// // // //         />
// // // //         <button onClick={goToPrevious} style={{...styles.navButton, left: '10px'}}>
// // // //           <ChevronLeft />
// // // //         </button>
// // // //         <button onClick={goToNext} style={{...styles.navButton, right: '10px'}}>
// // // //           <ChevronRight />
// // // //         </button>
// // // //       </div>
// // // //       <div style={styles.dotsContainer}>
// // // //         {svgKeys.map((_, index) => (
// // // //           <div
// // // //             key={index}
// // // //             style={{
// // // //               ...styles.dot,
// // // //               backgroundColor: index === currentIndex ? '#0a3784' : 'white',
// // // //             }}
// // // //             onClick={() => setCurrentIndex(index)}
// // // //           />
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const getStyles = (width, height) => ({
// // // //   sliderContainer: {
// // // //     display: 'flex',
// // // //     flexDirection: 'column',
// // // //     alignItems: 'center',
// // // //     padding: '5px',
// // // //     backgroundColor: '#2e5ff4',
// // // //     borderRadius: '10px',
// // // //     width: `${width-100}px`,
// // // //     height: '400px',
// // // //     margin: '0 auto',
// // // //   },
// // // //   headerContainer: {
// // // //     display: 'flex',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'flex-start',
// // // //     width: '100%',
// // // //     marginBottom: '5px',
// // // //   },
// // // //   titleExplanationContainer: {
// // // //     display: 'flex',
// // // //     flexDirection: 'column',
// // // //     alignItems: 'flex-start',
// // // //   },
// // // //   title: {
// // // //     fontSize: '16px',
// // // //     fontWeight: 'bold',
// // // //     color: '#ffffff',
// // // //     margin: '0 0 2px 0',
// // // //   },
// // // //   explanation: {
// // // //     fontSize: '11px',
// // // //     color: '#e6e6e6',
// // // //     margin: '0',
// // // //     maxWidth: '70%',
// // // //   },
// // // //   frame: {
// // // //     position: 'relative',
// // // //     width: '100%',
// // // //     height: `${height + 20}px`,
// // // //     backgroundColor: 'white',
// // // //     borderRadius: '8px',
// // // //     overflow: 'hidden',
// // // //     marginBottom: '5px',
// // // //   },
// // // //   svgContainer: {
// // // //     width: '100%',
// // // //     height: '100%',
// // // //     display: 'flex',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //   },
// // // //   navButton: {
// // // //     position: 'absolute',
// // // //     top: '50%',
// // // //     transform: 'translateY(-50%)',
// // // //     backgroundColor: '#cccccc',
// // // //     opacity: '0.4',
// // // //     border: 'none',
// // // //     borderRadius: '50%',
// // // //     width: '30px',
// // // //     height: '30px',
// // // //     display: 'flex',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     cursor: 'pointer',
// // // //     transition: 'background-color 0.3s ease',
// // // //   },
// // // //   dotsContainer: {
// // // //     display: 'flex',
// // // //     justifyContent: 'center',
// // // //     marginTop: '3px',
// // // //   },
// // // //   dot: {
// // // //     width: '8px',
// // // //     height: '8px',
// // // //     borderRadius: '50%',
// // // //     margin: '0 3px',
// // // //     cursor: 'pointer',
// // // //     backgroundColor: 'white',
// // // //     transition: 'background-color 0.3s ease',
// // // //   },
// // // //   link: {
// // // //     color: '#ffffff',
// // // //     backgroundColor: '#0a3784',
// // // //     textDecoration: 'none',
// // // //     fontWeight: 'bold',
// // // //     fontSize: '12px',
// // // //     padding: '4px 8px',
// // // //     borderRadius: '4px',
// // // //     transition: 'background-color 0.3s ease',
// // // //   },
// // // // });

// // // // export default SVGSlider;
// // // import React, { useState, useEffect, useRef } from 'react';

// // // const ChevronLeft = () => (
// // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // //     <polyline points="15 18 9 12 15 6"></polyline>
// // //   </svg>
// // // );

// // // const ChevronRight = () => (
// // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // //     <polyline points="9 18 15 12 9 6"></polyline>
// // //   </svg>
// // // );

// // // const SVGSlider = ({ diagrams, title, explanation, link, width = 650, height = 350 }) => {
// // //   const svgKeys = Object.keys(diagrams);
// // //   const [currentIndex, setCurrentIndex] = useState(0);
// // //   const svgContainerRef = useRef(null);

// // //   useEffect(() => {
// // //     const timer = setInterval(() => {
// // //       setCurrentIndex((prevIndex) => (prevIndex + 1) % svgKeys.length);
// // //     }, 3000);

// // //     return () => clearInterval(timer);
// // //   }, [svgKeys.length]);

// // //   useEffect(() => {
// // //     if (svgContainerRef.current) {
// // //       const svgElement = svgContainerRef.current.querySelector('svg');
// // //       if (svgElement) {
// // //         const viewBox = svgElement.getAttribute('viewBox');
// // //         if (viewBox) {
// // //           const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number);
// // //           const containerWidth = width - 20;
// // //           const containerHeight = height - 30;
// // //           const scale = Math.min(containerWidth / vbWidth, containerHeight / vbHeight);
// // //           const scaledWidth = vbWidth * scale;
// // //           const scaledHeight = vbHeight * scale;
// // //           svgElement.style.width = `${scaledWidth}px`;
// // //           svgElement.style.height = `${scaledHeight}px`;
// // //           svgElement.style.maxWidth = '100%';
// // //           svgElement.style.maxHeight = '100%';
// // //         }
// // //       }
// // //     }
// // //   }, [currentIndex, width, height]);

// // //   const goToPrevious = () => {
// // //     setCurrentIndex((prevIndex) => 
// // //       prevIndex === 0 ? svgKeys.length - 1 : prevIndex - 1
// // //     );
// // //   };

// // //   const goToNext = () => {
// // //     setCurrentIndex((prevIndex) => 
// // //       (prevIndex + 1) % svgKeys.length
// // //     );
// // //   };

// // //   const styles = getStyles(width, height);

// // //   return (
// // //     <div style={styles.sliderContainer}>
// // //       <div style={styles.headerContainer}>
// // //         <div style={styles.titleExplanationContainer}>
// // //           {title && <h3 style={styles.title}>{title}</h3>}
// // //           {explanation && <p style={styles.explanation}>{explanation}</p>}
// // //         </div>
// // //         {link && (
// // //           <a href={link} style={styles.link} target="_blank" rel="noopener noreferrer">
// // //             See all Diagrams
// // //           </a>
// // //         )}
// // //       </div>
// // //       <div style={styles.frame}>
// // //         <div 
// // //           ref={svgContainerRef}
// // //           style={styles.svgContainer} 
// // //           dangerouslySetInnerHTML={{ __html: diagrams[svgKeys[currentIndex]].svg }} 
// // //         />
// // //         <button onClick={goToPrevious} style={{...styles.navButton, left: '10px'}}>
// // //           <ChevronLeft />
// // //         </button>
// // //         <button onClick={goToNext} style={{...styles.navButton, right: '10px'}}>
// // //           <ChevronRight />
// // //         </button>
// // //       </div>
// // //       <div style={styles.dotsContainer}>
// // //         {svgKeys.map((_, index) => (
// // //           <div
// // //             key={index}
// // //             style={{
// // //               ...styles.dot,
// // //               backgroundColor: index === currentIndex ? '#0a3784' : '#9fb4f1',
// // //             }}
// // //             onClick={() => setCurrentIndex(index)}
// // //           />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const getStyles = (width, height) => ({
// // //   sliderContainer: {
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     alignItems: 'center',
// // //     padding: '5px',
// // //     backgroundColor: '#2e5ff4',
// // //     borderRadius: '10px',
// // //     width: `${width}px`,
// // //     height: `${height}px`,
// // //     margin: '0 auto',
// // //   },
// // //   headerContainer: {
// // //     display: 'flex',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'flex-start',
// // //     width: '100%',
// // //     marginBottom: '5px',
// // //   },
// // //   titleExplanationContainer: {
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     alignItems: 'flex-start',
// // //   },
// // //   title: {
// // //     fontSize: '16px',
// // //     fontWeight: 'bold',
// // //     color: '#ffffff',
// // //     margin: '0 0 2px 0',
// // //   },
// // //   explanation: {
// // //     fontSize: '11px',
// // //     color: '#e6e6e6',
// // //     margin: '0',
// // //     maxWidth: '70%',
// // //   },
// // //   frame: {
// // //     position: 'relative',
// // //     width: '100%',
// // //     height: `${height - 60}px`,
// // //     backgroundColor: 'white',
// // //     borderRadius: '8px',
// // //     overflow: 'hidden',
// // //     marginBottom: '5px',
// // //   },
// // //   svgContainer: {
// // //     width: '100%',
// // //     height: '100%',
// // //     display: 'flex',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   navButton: {
// // //     position: 'absolute',
// // //     top: '50%',
// // //     transform: 'translateY(-50%)',
// // //     backgroundColor: '#cccccc',
// // //     opacity: '0.4',
// // //     border: 'none',
// // //     borderRadius: '50%',
// // //     width: '30px',
// // //     height: '30px',
// // //     display: 'flex',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     cursor: 'pointer',
// // //     transition: 'background-color 0.3s ease',
// // //   },
// // //   dotsContainer: {
// // //     display: 'flex',
// // //     justifyContent: 'center',
// // //     marginTop: '3px',
// // //   },
// // //   dot: {
// // //     width: '6px',
// // //     height: '6px',
// // //     borderRadius: '50%',
// // //     margin: '0 3px',
// // //     cursor: 'pointer',
// // //     backgroundColor: '#99b3ff',
// // //     transition: 'background-color 0.3s ease',
// // //   },
// // //   link: {
// // //     color: '#ffffff',
// // //     backgroundColor: '#0a3784',
// // //     textDecoration: 'none',
// // //     fontWeight: 'bold',
// // //     fontSize: '12px',
// // //     padding: '4px 8px',
// // //     borderRadius: '4px',
// // //     transition: 'background-color 0.3s ease',
// // //   },
// // // });

// // // export default SVGSlider;
// // // import React, { useState, useEffect, useRef } from 'react';

// // // const ChevronLeft = () => (
// // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // //     <polyline points="15 18 9 12 15 6"></polyline>
// // //   </svg>
// // // );

// // // const ChevronRight = () => (
// // //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// // //     <polyline points="9 18 15 12 9 6"></polyline>
// // //   </svg>
// // // );

// // // const SVGSlider = ({ diagrams, title, explanation, link, width = 550, height = 400 }) => {
// // //   const svgKeys = Object.keys(diagrams);
// // //   const [currentIndex, setCurrentIndex] = useState(0);
// // //   const svgContainerRef = useRef(null);

// // //   useEffect(() => {
// // //     const timer = setInterval(() => {
// // //       setCurrentIndex((prevIndex) => (prevIndex + 1) % svgKeys.length);
// // //     }, 3000);

// // //     return () => clearInterval(timer);
// // //   }, [svgKeys.length]);

// // //   useEffect(() => {
// // //     if (svgContainerRef.current) {
// // //       const svgElement = svgContainerRef.current.querySelector('svg');
// // //       if (svgElement) {
// // //         const viewBox = svgElement.getAttribute('viewBox');
// // //         if (viewBox) {
// // //           const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number);
// // //           const containerWidth = width - 20;
// // //           const containerHeight = height - 60;
// // //           const scale = Math.min(containerWidth / vbWidth, containerHeight / vbHeight);
// // //           const scaledWidth = vbWidth * scale;
// // //           const scaledHeight = vbHeight * scale;
// // //           svgElement.style.width = `${scaledWidth}px`;
// // //           svgElement.style.height = `${scaledHeight}px`;
// // //           svgElement.style.maxWidth = '100%';
// // //           svgElement.style.maxHeight = '100%';
// // //         }
// // //       }
// // //     }
// // //   }, [currentIndex, width, height]);

// // //   const goToPrevious = () => {
// // //     setCurrentIndex((prevIndex) => 
// // //       prevIndex === 0 ? svgKeys.length - 1 : prevIndex - 1
// // //     );
// // //   };

// // //   const goToNext = () => {
// // //     setCurrentIndex((prevIndex) => 
// // //       (prevIndex + 1) % svgKeys.length
// // //     );
// // //   };

// // //   const styles = getStyles(width, height);

// // //   return (
// // //     <div style={styles.sliderContainer}>
// // //       <div style={styles.headerContainer}>
// // //         <div style={styles.titleExplanationContainer}>
// // //           {title && <h3 style={styles.title}>{title}</h3>}
// // //           {explanation && <p style={styles.explanation}>{explanation}</p>}
// // //         </div>
// // //         {link && (
// // //           <a href={link} style={styles.link} target="_blank" rel="noopener noreferrer">
// // //             See all Diagrams
// // //           </a>
// // //         )}
// // //       </div>
// // //       <div style={styles.frame}>
// // //         <div 
// // //           ref={svgContainerRef}
// // //           style={styles.svgContainer} 
// // //           dangerouslySetInnerHTML={{ __html: diagrams[svgKeys[currentIndex]].svg }} 
// // //         />
// // //         <button onClick={goToPrevious} style={{...styles.navButton, left: '10px'}}>
// // //           <ChevronLeft />
// // //         </button>
// // //         <button onClick={goToNext} style={{...styles.navButton, right: '10px'}}>
// // //           <ChevronRight />
// // //         </button>
// // //       </div>
// // //       <div style={styles.dotsContainer}>
// // //         {svgKeys.map((_, index) => (
// // //           <div
// // //             key={index}
// // //             style={{
// // //               ...styles.dot,
// // //               backgroundColor: index === currentIndex ? '#0a3784' : '#9fb4f1',
// // //             }}
// // //             onClick={() => setCurrentIndex(index)}
// // //           />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const getStyles = (width, height) => ({
// // //   sliderContainer: {
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     alignItems: 'center',
// // //     padding: '5px',
// // //     backgroundColor: '#2e5ff4',
// // //     borderRadius: '10px',
// // //     width: `${width}px`,
// // //     height: `${height-50}px`,
// // //     margin: '0 auto',
// // //   },
// // //   headerContainer: {
// // //     display: 'flex',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'flex-start',
// // //     width: '100%',
// // //     marginBottom: '5px',
// // //   },
// // //   titleExplanationContainer: {
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     alignItems: 'flex-start',
// // //   },
// // //   title: {
// // //     fontSize: '16px',
// // //     fontWeight: 'bold',
// // //     color: '#ffffff',
// // //     margin: '0 0 2px 0',
// // //   },
// // //   explanation: {
// // //     fontSize: '11px',
// // //     color: '#e6e6e6',
// // //     margin: '0',
// // //     maxWidth: '70%',
// // //   },
// // //   frame: {
// // //     position: 'relative',
// // //     width: '100%',
// // //     height: `${height - 80}px`,
// // //     backgroundColor: 'white',
// // //     borderRadius: '8px',
// // //     overflow: 'hidden',
// // //     marginBottom: '5px',
// // //   },
// // //   svgContainer: {
// // //     width: '100%',
// // //     height: '100%',
// // //     display: 'flex',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   navButton: {
// // //     position: 'absolute',
// // //     top: '50%',
// // //     transform: 'translateY(-50%)',
// // //     backgroundColor: '#cccccc',
// // //     opacity: '0.4',
// // //     border: 'none',
// // //     borderRadius: '50%',
// // //     width: '30px',
// // //     height: '30px',
// // //     display: 'flex',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     cursor: 'pointer',
// // //     transition: 'background-color 0.3s ease',
// // //   },
// // //   dotsContainer: {
// // //     display: 'flex',
// // //     justifyContent: 'center',
// // //     marginTop: '3px',
// // //   },
// // //   dot: {
// // //     width: '6px',
// // //     height: '6px',
// // //     borderRadius: '50%',
// // //     margin: '0 3px',
// // //     cursor: 'pointer',
// // //     backgroundColor: '#99b3ff',
// // //     transition: 'background-color 0.3s ease',
// // //   },
// // //   link: {
// // //     color: '#ffffff',
// // //     backgroundColor: '#0a3784',
// // //     textDecoration: 'none',
// // //     fontWeight: 'bold',
// // //     fontSize: '12px',
// // //     padding: '4px 8px',
// // //     borderRadius: '4px',
// // //     transition: 'background-color 0.3s ease',
// // //   },
// // // });

// // // export default SVGSlider;
// // import React, { useState, useEffect, useRef } from 'react';

// // const ChevronLeft = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// //     <polyline points="15 18 9 12 15 6"></polyline>
// //   </svg>
// // );

// // const ChevronRight = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
// //     <polyline points="9 18 15 12 9 6"></polyline>
// //   </svg>
// // );

// // const SVGSlider = ({ diagrams, title, explanation, link, width = 550, height = 400, description = '' }) => {
// //   const svgKeys = Object.keys(diagrams);
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const svgContainerRef = useRef(null);

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setCurrentIndex((prevIndex) => (prevIndex + 1) % svgKeys.length);
// //     }, 3000);

// //     return () => clearInterval(timer);
// //   }, [svgKeys.length]);

// //   useEffect(() => {
// //     if (svgContainerRef.current) {
// //       const svgElement = svgContainerRef.current.querySelector('svg');
// //       if (svgElement) {
// //         const viewBox = svgElement.getAttribute('viewBox');
// //         if (viewBox) {
// //           const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number);
// //           const containerWidth = width - 20;
// //           const containerHeight = height - 110; // Adjusted for new description div
// //           const scale = Math.min(containerWidth / vbWidth, containerHeight / vbHeight);
// //           const scaledWidth = vbWidth * scale;
// //           const scaledHeight = vbHeight * scale;
// //           svgElement.style.width = `${scaledWidth}px`;
// //           svgElement.style.height = `${scaledHeight}px`;
// //           svgElement.style.maxWidth = '100%';
// //           svgElement.style.maxHeight = '100%';
// //         }
// //       }
// //     }
// //   }, [currentIndex, width, height]);

// //   const goToPrevious = () => {
// //     setCurrentIndex((prevIndex) => 
// //       prevIndex === 0 ? svgKeys.length - 1 : prevIndex - 1
// //     );
// //   };

// //   const goToNext = () => {
// //     setCurrentIndex((prevIndex) => 
// //       (prevIndex + 1) % svgKeys.length
// //     );
// //   };

// //   const styles = getStyles(width, height);

// //   return (
// //     <div style={styles.sliderContainer}>
// //       <div style={styles.headerContainer}>
// //         <div style={styles.titleExplanationContainer}>
// //           {title && <h3 style={styles.title}>{title}</h3>}
// //           {explanation && <p style={styles.explanation}>{explanation}</p>}
// //         </div>
// //         {link && (
// //           <a href={link} style={styles.link} target="_blank" rel="noopener noreferrer">
// //             See all Diagrams
// //           </a>
// //         )}
// //       </div>
// //       <div style={styles.frame}>
// //         <div 
// //           ref={svgContainerRef}
// //           style={styles.svgContainer} 
// //           dangerouslySetInnerHTML={{ __html: diagrams[svgKeys[currentIndex]].svg }} 
// //         />
// //         <button onClick={goToPrevious} style={{...styles.navButton, left: '10px'}}>
// //           <ChevronLeft />
// //         </button>
// //         <button onClick={goToNext} style={{...styles.navButton, right: '10px'}}>
// //           <ChevronRight />
// //         </button>
// //       </div>
// //       <div style={styles.dotsContainer}>
// //         {svgKeys.map((_, index) => (
// //           <div
// //             key={index}
// //             style={{
// //               ...styles.dot,
// //               backgroundColor: index === currentIndex ? '#0a3784' : '#9fb4f1',
// //             }}
// //             onClick={() => setCurrentIndex(index)}
// //           />
// //         ))}
// //       </div>
// //       <div style={styles.descriptionContainer}>
// //         {description && <p style={styles.description}>{description}</p>}
// //       </div>
// //     </div>
// //   );
// // };

// // const getStyles = (width, height) => ({
// //   sliderContainer: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     padding: '5px',
// //     backgroundColor: '#2e5ff4',
// //     borderRadius: '10px',
// //     width: `${width}px`,
// //     height: `${height-50}px`,
// //     margin: '0 auto',
// //   },
// //   headerContainer: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'flex-start',
// //     width: '100%',
// //     marginBottom: '5px',
// //   },
// //   titleExplanationContainer: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'flex-start',
// //   },
// //   title: {
// //     fontSize: '16px',
// //     fontWeight: 'bold',
// //     color: '#ffffff',
// //     margin: '0 0 2px 0',
// //   },
// //   explanation: {
// //     fontSize: '11px',
// //     color: '#e6e6e6',
// //     margin: '0',
// //     maxWidth: '70%',
// //   },
// //   frame: {
// //     position: 'relative',
// //     width: '100%',
// //     height: `${height - 130}px`, // Adjusted for new description div
// //     backgroundColor: 'white',
// //     borderRadius: '8px',
// //     overflow: 'hidden',
// //     marginBottom: '5px',
// //   },
// //   svgContainer: {
// //     width: '100%',
// //     height: '100%',
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   navButton: {
// //     position: 'absolute',
// //     top: '50%',
// //     transform: 'translateY(-50%)',
// //     backgroundColor: '#cccccc',
// //     opacity: '0.4',
// //     border: 'none',
// //     borderRadius: '50%',
// //     width: '30px',
// //     height: '30px',
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     cursor: 'pointer',
// //     transition: 'background-color 0.3s ease',
// //   },
// //   dotsContainer: {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     marginTop: '3px',
// //     marginBottom: '5px',
// //   },
// //   dot: {
// //     width: '6px',
// //     height: '6px',
// //     borderRadius: '50%',
// //     margin: '0 3px',
// //     cursor: 'pointer',
// //     backgroundColor: '#99b3ff',
// //     transition: 'background-color 0.3s ease',
// //   },
// //   link: {
// //     color: '#ffffff',
// //     backgroundColor: '#0a3784',
// //     textDecoration: 'none',
// //     fontWeight: 'bold',
// //     fontSize: '12px',
// //     padding: '4px 8px',
// //     borderRadius: '4px',
// //     transition: 'background-color 0.3s ease',
// //   },
// //   descriptionContainer: {
// //     width: '100%',
// //     backgroundColor: '#e0e0e0',
// //     borderRadius: '0 0 8px 8px',
// //     padding: '5px',
// //     minHeight: '30px',
// //   },
// //   description: {
// //     fontSize: '12px',
// //     color: '#333333',
// //     margin: '0',
// //     textAlign: 'center',
// //   },
// // });

// // export default SVGSlider;
// import React, { useState, useEffect, useRef } from 'react';

// const ChevronLeft = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
//     <polyline points="15 18 9 12 15 6"></polyline>
//   </svg>
// );

// const ChevronRight = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
//     <polyline points="9 18 15 12 9 6"></polyline>
//   </svg>
// );

// const SVGSlider = ({ diagrams, title, explanation, link, width = 550, height = 400, description = '' }) => {
//   const svgKeys = Object.keys(diagrams);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const svgContainerRef = useRef(null);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % svgKeys.length);
//     }, 3000);

//     return () => clearInterval(timer);
//   }, [svgKeys.length]);

//   useEffect(() => {
//     if (svgContainerRef.current) {
//       const svgElement = svgContainerRef.current.querySelector('svg');
//       if (svgElement) {
//         const viewBox = svgElement.getAttribute('viewBox');
//         if (viewBox) {
//           const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number);
//           const containerWidth = width - 20;
//           const containerHeight = height - 60;
//           const scale = Math.min(containerWidth / vbWidth, containerHeight / vbHeight);
//           const scaledWidth = vbWidth * scale;
//           const scaledHeight = vbHeight * scale;
//           svgElement.style.width = `${scaledWidth}px`;
//           svgElement.style.height = `${scaledHeight}px`;
//           svgElement.style.maxWidth = '100%';
//           svgElement.style.maxHeight = '100%';
//         }
//       }
//     }
//   }, [currentIndex, width, height]);

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? svgKeys.length - 1 : prevIndex - 1
//     );
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => 
//       (prevIndex + 1) % svgKeys.length
//     );
//   };

//   const styles = getStyles(width, height);

//   return (
//     <div style={styles.sliderContainer}>
//       <div style={styles.headerContainer}>
//         <div style={styles.titleExplanationContainer}>
//           {title && <h3 style={styles.title}>{title}</h3>}
//           {explanation && <p style={styles.explanation}>{explanation}</p>}
//         </div>
//         {link && (
//           <a href={link} style={styles.link} target="_blank" rel="noopener noreferrer">
//             See all Diagrams
//           </a>
//         )}
//       </div>
//       <div style={styles.frame}>
//         <div 
//           ref={svgContainerRef}
//           style={styles.svgContainer} 
//           dangerouslySetInnerHTML={{ __html: diagrams[svgKeys[currentIndex]].svg }} 
//         />
//         <button onClick={goToPrevious} style={{...styles.navButton, left: '10px'}}>
//           <ChevronLeft />
//         </button>
//         <button onClick={goToNext} style={{...styles.navButton, right: '10px'}}>
//           <ChevronRight />
//         </button>
//       </div>
//       <div style={styles.dotsContainer}>
//         {svgKeys.map((_, index) => (
//           <div
//             key={index}
//             style={{
//               ...styles.dot,
//               backgroundColor: index === currentIndex ? '#0a3784' : '#9fb4f1',
//             }}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>
//       <div style={styles.descriptionContainer}>
//         {description && <p style={styles.description}>{description}</p>}
//       </div>
//     </div>
//   );
// };

// const getStyles = (width, height) => ({
//   sliderContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '5px',
//     backgroundColor: '#2e5ff4',
//     borderRadius: '10px',
//     width: `${width}px`,
//     height: `${height-50}px`,
//     margin: '0 auto',
//   },
//   headerContainer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     width: '100%',
//     marginBottom: '5px',
//   },
//   titleExplanationContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//   },
//   title: {
//     fontSize: '16px',
//     fontWeight: 'bold',
//     color: '#ffffff',
//     margin: '0 0 2px 0',
//   },
//   explanation: {
//     fontSize: '11px',
//     color: '#e6e6e6',
//     margin: '0',
//     maxWidth: '70%',
//   },
//   frame: {
//     position: 'relative',
//     width: '100%',
//     height: `${height - 80}px`,
//     backgroundColor: 'white',
//     borderRadius: '8px',
//     overflow: 'hidden',
//     marginBottom: '5px',
//   },
//   svgContainer: {
//     width: '100%',
//     height: '100%',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   navButton: {
//     position: 'absolute',
//     top: '50%',
//     transform: 'translateY(-50%)',
//     backgroundColor: '#cccccc',
//     opacity: '0.4',
//     border: 'none',
//     borderRadius: '50%',
//     width: '30px',
//     height: '30px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   },
//   dotsContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginTop: '3px',
//     marginBottom: '3px',
//   },
//   dot: {
//     width: '6px',
//     height: '6px',
//     borderRadius: '50%',
//     margin: '0 3px',
//     cursor: 'pointer',
//     backgroundColor: '#99b3ff',
//     transition: 'background-color 0.3s ease',
//   },
//   link: {
//     color: '#ffffff',
//     backgroundColor: '#0a3784',
//     textDecoration: 'none',
//     fontWeight: 'bold',
//     fontSize: '12px',
//     padding: '4px 8px',
//     borderRadius: '4px',
//     transition: 'background-color 0.3s ease',
//   },
//   descriptionContainer: {
//     width: '100%',
//     backgroundColor: '#e0e0e0',
//     borderRadius: '0 0 8px 8px',
//     padding: '5px',
//     minHeight: '30px',
//   },
//   description: {
//     fontSize: '12px',
//     color: '#333333',
//     margin: '0',
//     textAlign: 'center',
//   },
// });

// export default SVGSlider;
import React, { useState, useEffect, useRef } from 'react';

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const SVGSlider = ({ diagrams, title, explanation, link, width = 550, height = 400, description = '' }) => {
  const svgKeys = Object.keys(diagrams);
  const [currentIndex, setCurrentIndex] = useState(0);
  const svgContainerRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % svgKeys.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [svgKeys.length]);

  useEffect(() => {
    if (svgContainerRef.current) {
      const svgElement = svgContainerRef.current.querySelector('svg');
      if (svgElement) {
        const viewBox = svgElement.getAttribute('viewBox');
        if (viewBox) {
          const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number);
          const containerWidth = width - 20;
          const containerHeight = height - 60;
          const scale = Math.min(containerWidth / vbWidth, containerHeight / vbHeight);
          const scaledWidth = vbWidth * scale;
          const scaledHeight = vbHeight * scale;
          svgElement.style.width = `${scaledWidth}px`;
          svgElement.style.height = `${scaledHeight}px`;
          svgElement.style.maxWidth = '100%';
          svgElement.style.maxHeight = '100%';
        }
      }
    }
  }, [currentIndex, width, height]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? svgKeys.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % svgKeys.length
    );
  };

  const styles = getStyles(width, height);

  return (
    <div style={styles.sliderContainer}>
      <div style={styles.headerContainer}>
        <div style={styles.titleExplanationContainer}>
          {title && <h3 style={styles.title}>{title}</h3>}
          {explanation && <p style={styles.explanation}>{explanation}</p>}
        </div>
        {link && (
          <a href={link} style={styles.link} target="_blank" rel="noopener noreferrer">
            See all Diagrams
          </a>
        )}
      </div>
      <div style={styles.frame}>
        <div 
          ref={svgContainerRef}
          style={styles.svgContainer} 
          dangerouslySetInnerHTML={{ __html: diagrams[svgKeys[currentIndex]].svg }} 
        />
        <button onClick={goToPrevious} style={{...styles.navButton, left: '10px'}}>
          <ChevronLeft />
        </button>
        <button onClick={goToNext} style={{...styles.navButton, right: '10px'}}>
          <ChevronRight />
        </button>
      </div>
      <div style={styles.dotsContainer}>
        {svgKeys.map((_, index) => (
          <div
            key={index}
            style={{
              ...styles.dot,
              backgroundColor: index === currentIndex ? '#0a3784' : '#9fb4f1',
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <div style={styles.descriptionContainer}>
        <p style={styles.description}>{description}</p>
      </div>
    </div>
  );
};

const getStyles = (width, height) => ({
  sliderContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5px',
    backgroundColor: '#2e5ff4',
    borderRadius: '10px',
    width: `${width-30}px`,
    height: `${height-3}px`,
    // margin: '0 auto',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: '5px',
  },
  titleExplanationContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#ffffff',
    margin: '0 0 2px 0',
  },
  explanation: {
    fontSize: '11px',
    color: '#e6e6e6',
    margin: '0',
    maxWidth: '70%',
  },
  frame: {
    position: 'relative',
    width: '100%',
    height: `${height - 80}px`,
    backgroundColor: 'white',
    borderRadius: '8px 8px 0 0',
    overflow: 'hidden',
    marginBottom: '5px',
  },
  svgContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#cccccc',
    opacity: '0.4',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  dotsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3px',
    marginBottom: '3px',
  },
  dot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    margin: '0 3px',
    cursor: 'pointer',
    backgroundColor: '#99b3ff',
    transition: 'background-color 0.3s ease',
  },
  link: {
    color: '#ffffff',
    backgroundColor: '#0a3784',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '12px',
    padding: '4px 8px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  },
  descriptionContainer: {
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: '0 0 8px 8px',
    padding: '5px',
    minHeight: '50px',
  },
  description: {
    fontSize: '12px',
    color: '#333333',
    margin: '0',
    textAlign: 'center',
  },
});

export default SVGSlider;