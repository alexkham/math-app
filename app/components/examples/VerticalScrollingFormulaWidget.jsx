

// // // // // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // // // // import 'katex/dist/katex.min.css';
// // // // // // // // // import { InlineMath } from 'react-katex';

// // // // // // // // // const formulaData = [
// // // // // // // // //   { name: "Permutation (Full)", formula: "P_n^n = n!" },
// // // // // // // // //   { name: "Permutation with Repetition", formula: "P_{n1,n2,...nx} =\\frac{n!}{n_1! \\cdot n_2! \\cdot \\ldots \\cdot n_k!}" },
// // // // // // // // //   { name: "Permutation of Subset", formula: "P^n_r​ = n! / (n-r)!" },
// // // // // // // // //   { name: "Basic Combination", formula: "C^n_r = \\frac{n!}{r! \\cdot (n-r)!}" },
// // // // // // // // //   { name: "Combination Symmetry", formula: "C(n, r) = C(n, n-r)" },
// // // // // // // // // ];

// // // // // // // // // const VerticalScrollingFormulaWidget = () => {
// // // // // // // // //   const [scrollPosition, setScrollPosition] = useState(0);
// // // // // // // // //   const containerRef = useRef(null);
// // // // // // // // //   const contentRef = useRef(null);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const scrollInterval = setInterval(() => {
// // // // // // // // //       if (containerRef.current && contentRef.current) {
// // // // // // // // //         const { scrollTop, clientHeight } = containerRef.current;
// // // // // // // // //         const scrollHeight = contentRef.current.clientHeight;

// // // // // // // // //         if (scrollTop + clientHeight >= scrollHeight) {
// // // // // // // // //           setScrollPosition(1);
// // // // // // // // //         } else {
// // // // // // // // //           setScrollPosition((prevPosition) => prevPosition + 1);
// // // // // // // // //         }
// // // // // // // // //       }
// // // // // // // // //     }, 30);

// // // // // // // // //     return () => clearInterval(scrollInterval);
// // // // // // // // //   }, []);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (containerRef.current) {
// // // // // // // // //       containerRef.current.scrollTop = scrollPosition;
// // // // // // // // //     }
// // // // // // // // //   }, [scrollPosition]);

// // // // // // // // //   return (
// // // // // // // // //     <div style={{ position: 'relative', width: '55%', borderRadius: '10px', overflow: 'hidden' }}>
// // // // // // // // //       <div 
// // // // // // // // //         ref={containerRef}
// // // // // // // // //         style={{
// // // // // // // // //           backgroundColor: '#6d95db',
// // // // // // // // //           color: 'white',
// // // // // // // // //           height: '160px',
// // // // // // // // //           overflow: 'hidden',
// // // // // // // // //           scrollBehavior: 'smooth',
// // // // // // // // //           padding: '20px',
// // // // // // // // //         }}
// // // // // // // // //       >
// // // // // // // // //         <div ref={contentRef} style={{ textAlign: 'center' }}>
// // // // // // // // //           {formulaData.concat(formulaData).map((item, index) => (
// // // // // // // // //             <div key={index} style={{ marginBottom: '20px' }}>
// // // // // // // // //               <h2 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '8px' }}>{item.name}</h2>
// // // // // // // // //               <div style={{ fontSize: '1rem' }}>
// // // // // // // // //                 <InlineMath math={item.formula} />
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //       <div style={{ 
// // // // // // // // //         backgroundColor: '#2162d0', 
// // // // // // // // //         height: '35px', 
// // // // // // // // //         display: 'flex', 
// // // // // // // // //         alignItems: 'center', 
// // // // // // // // //         justifyContent: 'center' 
// // // // // // // // //       }}>
// // // // // // // // //         <a 
// // // // // // // // //           href="/more-formulas" 
// // // // // // // // //           style={{ 
// // // // // // // // //             color: 'white', 
// // // // // // // // //             textDecoration: 'none', 
// // // // // // // // //             fontWeight: '500',
// // // // // // // // //             padding: '5px 10px',
// // // // // // // // //             borderRadius: '3px',
// // // // // // // // //             background: 'transparent',
// // // // // // // // //             border: '1px solid white'
// // // // // // // // //           }}
// // // // // // // // //         >
// // // // // // // // //           See All Formulas
// // // // // // // // //         </a>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default VerticalScrollingFormulaWidget;
// // // // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // // // import 'katex/dist/katex.min.css';
// // // // // // // // import { InlineMath } from 'react-katex';

// // // // // // // // const VerticalScrollingFormulaWidget = ({ formulaData = [], moreFormulasLink = "#" }) => {
// // // // // // // //   const [scrollPosition, setScrollPosition] = useState(0);
// // // // // // // //   const containerRef = useRef(null);
// // // // // // // //   const contentRef = useRef(null);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const scrollInterval = setInterval(() => {
// // // // // // // //       if (containerRef.current && contentRef.current) {
// // // // // // // //         const { scrollTop, clientHeight } = containerRef.current;
// // // // // // // //         const scrollHeight = contentRef.current.clientHeight;

// // // // // // // //         if (scrollTop + clientHeight >= scrollHeight) {
// // // // // // // //           setScrollPosition(1);
// // // // // // // //         } else {
// // // // // // // //           setScrollPosition((prevPosition) => prevPosition + 1);
// // // // // // // //         }
// // // // // // // //       }
// // // // // // // //     }, 30);

// // // // // // // //     return () => clearInterval(scrollInterval);
// // // // // // // //   }, []);

// // // // // // // //   useEffect(() => {
// // // // // // // //     if (containerRef.current) {
// // // // // // // //       containerRef.current.scrollTop = scrollPosition;
// // // // // // // //     }
// // // // // // // //   }, [scrollPosition]);

// // // // // // // //   const displayData = formulaData.length > 0 ? [...formulaData, ...formulaData] : [];

// // // // // // // //   return (
// // // // // // // //     <div style={{ position: 'relative', width: '55%', borderRadius: '10px', overflow: 'hidden' }}>
// // // // // // // //       <div 
// // // // // // // //         ref={containerRef}
// // // // // // // //         style={{
// // // // // // // //           backgroundColor: '#6d95db',
// // // // // // // //           color: 'white',
// // // // // // // //           height: '180px',
// // // // // // // //           overflow: 'hidden',
// // // // // // // //           scrollBehavior: 'smooth',
// // // // // // // //           padding: '20px',
// // // // // // // //         }}
// // // // // // // //       >
// // // // // // // //         <div ref={contentRef} style={{ textAlign: 'center' }}>
// // // // // // // //           {displayData.map((item, index) => (
// // // // // // // //             <div key={index} style={{ marginBottom: '20px' }}>
// // // // // // // //               <h2 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '8px' }}>{item.name}</h2>
// // // // // // // //               <div style={{ fontSize: '1rem' }}>
// // // // // // // //                 <InlineMath math={item.formula.replace(/\$/g, '')} />
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //       <div style={{ 
// // // // // // // //         backgroundColor: '#2162d0', 
// // // // // // // //         height: '35px', 
// // // // // // // //         display: 'flex', 
// // // // // // // //         alignItems: 'center', 
// // // // // // // //         justifyContent: 'center' 
// // // // // // // //       }}>
// // // // // // // //         <a 
// // // // // // // //           href={moreFormulasLink}
// // // // // // // //           style={{ 
// // // // // // // //             color: 'white', 
// // // // // // // //             textDecoration: 'none', 
// // // // // // // //             fontWeight: '500',
// // // // // // // //             padding: '5px 10px',
// // // // // // // //             borderRadius: '5px',
// // // // // // // //             background: 'transparent',
// // // // // // // //             border: '1px solid white',
// // // // // // // //             transition: 'background-color 0.3s, color 0.3s'
// // // // // // // //           }}
// // // // // // // //           onMouseEnter={(e) => {
// // // // // // // //             e.target.style.backgroundColor = 'white';
// // // // // // // //             e.target.style.color = '#2162d0';
// // // // // // // //           }}
// // // // // // // //           onMouseLeave={(e) => {
// // // // // // // //             e.target.style.backgroundColor = 'transparent';
// // // // // // // //             e.target.style.color = 'white';
// // // // // // // //           }}
// // // // // // // //         >
// // // // // // // //           See All Formulas
// // // // // // // //         </a>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default VerticalScrollingFormulaWidget;
// // // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // // import 'katex/dist/katex.min.css';
// // // // // // // import { InlineMath } from 'react-katex';
// // // // // // // import { Pause, Play } from 'lucide-react';

// // // // // // // const VerticalScrollingFormulaWidget = ({ formulaData = [], moreFormulasLink = "#", title = "" }) => {
// // // // // // //   const [scrollPosition, setScrollPosition] = useState(0);
// // // // // // //   const [isPaused, setIsPaused] = useState(false);
// // // // // // //   const containerRef = useRef(null);
// // // // // // //   const contentRef = useRef(null);

// // // // // // //   useEffect(() => {
// // // // // // //     if (isPaused) return;

// // // // // // //     const scrollInterval = setInterval(() => {
// // // // // // //       if (containerRef.current && contentRef.current) {
// // // // // // //         const { scrollTop, clientHeight } = containerRef.current;
// // // // // // //         const scrollHeight = contentRef.current.clientHeight;

// // // // // // //         if (scrollTop + clientHeight >= scrollHeight) {
// // // // // // //           setScrollPosition(1);
// // // // // // //         } else {
// // // // // // //           setScrollPosition((prevPosition) => prevPosition + 1);
// // // // // // //         }
// // // // // // //       }
// // // // // // //     }, 30);

// // // // // // //     return () => clearInterval(scrollInterval);
// // // // // // //   }, [isPaused]);

// // // // // // //   useEffect(() => {
// // // // // // //     if (containerRef.current) {
// // // // // // //       containerRef.current.scrollTop = scrollPosition;
// // // // // // //     }
// // // // // // //   }, [scrollPosition]);

// // // // // // //   const displayData = formulaData.length > 0 ? [...formulaData, ...formulaData] : [];

// // // // // // //   return (
// // // // // // //     <div style={{ position: 'relative', width: '55%', borderRadius: '10px', overflow: 'hidden' }}>
// // // // // // //       <div style={{ 
// // // // // // //         backgroundColor: '#2162d0', 
// // // // // // //         height: '35px', 
// // // // // // //         display: 'flex', 
// // // // // // //         alignItems: 'center', 
// // // // // // //         justifyContent: 'center',
// // // // // // //         color: 'white',
// // // // // // //         fontWeight: '500'
// // // // // // //       }}>
// // // // // // //         {title}
// // // // // // //       </div>
// // // // // // //       <div 
// // // // // // //         ref={containerRef}
// // // // // // //         style={{
// // // // // // //           backgroundColor: '#6d95db',
// // // // // // //           color: 'white',
// // // // // // //           height: '180px',
// // // // // // //           overflow: 'hidden',
// // // // // // //           scrollBehavior: 'smooth',
// // // // // // //           padding: '20px',
// // // // // // //         }}
// // // // // // //       >
// // // // // // //         <div ref={contentRef} style={{ textAlign: 'center' }}>
// // // // // // //           {displayData.map((item, index) => (
// // // // // // //             <div key={index} style={{ marginBottom: '20px' }}>
// // // // // // //               <h2 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '8px' }}>{item.name}</h2>
// // // // // // //               <div style={{ fontSize: '1rem' }}>
// // // // // // //                 <InlineMath math={item.formula.replace(/\$/g, '')} />
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //       <div style={{ 
// // // // // // //         backgroundColor: '#2162d0', 
// // // // // // //         height: '35px', 
// // // // // // //         display: 'flex', 
// // // // // // //         alignItems: 'center', 
// // // // // // //         justifyContent: 'space-between',
// // // // // // //         padding: '0 10px'
// // // // // // //       }}>
// // // // // // //         <a 
// // // // // // //           href={moreFormulasLink}
// // // // // // //           style={{ 
// // // // // // //             color: 'white', 
// // // // // // //             textDecoration: 'none', 
// // // // // // //             fontWeight: '500',
// // // // // // //             padding: '5px 10px',
// // // // // // //             borderRadius: '3px',
// // // // // // //             background: 'transparent',
// // // // // // //             border: '1px solid white',
// // // // // // //             transition: 'background-color 0.3s, color 0.3s'
// // // // // // //           }}
// // // // // // //           onMouseEnter={(e) => {
// // // // // // //             e.target.style.backgroundColor = 'white';
// // // // // // //             e.target.style.color = '#2162d0';
// // // // // // //           }}
// // // // // // //           onMouseLeave={(e) => {
// // // // // // //             e.target.style.backgroundColor = 'transparent';
// // // // // // //             e.target.style.color = 'white';
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           See All Formulas
// // // // // // //         </a>
// // // // // // //         <button 
// // // // // // //           onClick={() => setIsPaused(!isPaused)} 
// // // // // // //           style={{ 
// // // // // // //             background: 'none', 
// // // // // // //             border: 'none', 
// // // // // // //             cursor: 'pointer', 
// // // // // // //             color: 'white'
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           {isPaused ? <Play size={24} /> : <Pause size={24} />}
// // // // // // //         </button>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default VerticalScrollingFormulaWidget;
// // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // import 'katex/dist/katex.min.css';
// // // // // // import { InlineMath } from 'react-katex';
// // // // // // import { Pause, Play, ChevronLeft, ChevronRight } from 'lucide-react';

// // // // // // const VerticalScrollingFormulaWidget = ({ formulaData = [], moreFormulasLink = "#", title = "" }) => {
// // // // // //   const [scrollPosition, setScrollPosition] = useState(0);
// // // // // //   const [isPaused, setIsPaused] = useState(false);
// // // // // //   const containerRef = useRef(null);
// // // // // //   const contentRef = useRef(null);

// // // // // //   useEffect(() => {
// // // // // //     if (isPaused) return;

// // // // // //     const scrollInterval = setInterval(() => {
// // // // // //       if (containerRef.current && contentRef.current) {
// // // // // //         const { scrollTop, clientHeight } = containerRef.current;
// // // // // //         const scrollHeight = contentRef.current.clientHeight;

// // // // // //         if (scrollTop + clientHeight >= scrollHeight) {
// // // // // //           setScrollPosition(1);
// // // // // //         } else {
// // // // // //           setScrollPosition((prevPosition) => prevPosition + 1);
// // // // // //         }
// // // // // //       }
// // // // // //     }, 30);

// // // // // //     return () => clearInterval(scrollInterval);
// // // // // //   }, [isPaused]);

// // // // // //   useEffect(() => {
// // // // // //     if (containerRef.current) {
// // // // // //       containerRef.current.scrollTop = scrollPosition;
// // // // // //     }
// // // // // //   }, [scrollPosition]);

// // // // // //   const displayData = formulaData.length > 0 ? [...formulaData, ...formulaData] : [];

// // // // // //   const handleBack = () => {
// // // // // //     if (containerRef.current) {
// // // // // //       containerRef.current.scrollTop -= containerRef.current.clientHeight;
// // // // // //     }
// // // // // //   };

// // // // // //   const handleForward = () => {
// // // // // //     if (containerRef.current) {
// // // // // //       containerRef.current.scrollTop += containerRef.current.clientHeight;
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div style={{ position: 'relative', width: '55%', borderRadius: '10px', overflow: 'hidden' }}>
// // // // // //       <div style={{ 
// // // // // //         backgroundColor: '#2162d0', 
// // // // // //         height: '35px', 
// // // // // //         display: 'flex', 
// // // // // //         alignItems: 'center', 
// // // // // //         justifyContent: 'center',
// // // // // //         color: 'white',
// // // // // //         fontWeight: '500'
// // // // // //       }}>
// // // // // //         {title}
// // // // // //       </div>
// // // // // //       <div 
// // // // // //         ref={containerRef}
// // // // // //         style={{
// // // // // //           backgroundColor: '#6d95db',
// // // // // //           color: 'white',
// // // // // //           height: '160px',
// // // // // //           overflow: 'hidden',
// // // // // //           scrollBehavior: 'smooth',
// // // // // //           padding: '20px',
// // // // // //         }}
// // // // // //       >
// // // // // //         <div ref={contentRef} style={{ textAlign: 'center' }}>
// // // // // //           {displayData.map((item, index) => (
// // // // // //             <div key={index} style={{ marginBottom: '20px' }}>
// // // // // //               <h2 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '8px' }}>{item.name}</h2>
// // // // // //               <div style={{ fontSize: '1rem' }}>
// // // // // //                 <InlineMath math={item.formula.replace(/\$/g, '')} />
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //       <div style={{ 
// // // // // //         backgroundColor: '#2162d0', 
// // // // // //         height: '35px', 
// // // // // //         display: 'flex', 
// // // // // //         alignItems: 'center', 
// // // // // //         justifyContent: 'space-between',
// // // // // //         padding: '0 10px'
// // // // // //       }}>
// // // // // //         <a 
// // // // // //           href={moreFormulasLink}
// // // // // //           style={{ 
// // // // // //             color: 'white', 
// // // // // //             textDecoration: 'none', 
// // // // // //             fontWeight: '500',
// // // // // //             padding: '5px 10px',
// // // // // //             borderRadius: '3px',
// // // // // //             background: 'transparent',
// // // // // //             border: '1px solid white',
// // // // // //             transition: 'background-color 0.3s, color 0.3s'
// // // // // //           }}
// // // // // //           onMouseEnter={(e) => {
// // // // // //             e.target.style.backgroundColor = 'white';
// // // // // //             e.target.style.color = '#2162d0';
// // // // // //           }}
// // // // // //           onMouseLeave={(e) => {
// // // // // //             e.target.style.backgroundColor = 'transparent';
// // // // // //             e.target.style.color = 'white';
// // // // // //           }}
// // // // // //         >
// // // // // //           See All Formulas
// // // // // //         </a>
// // // // // //         <div style={{ display: 'flex', gap: '10px' }}>
// // // // // //           <button 
// // // // // //             onClick={handleBack} 
// // // // // //             style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}
// // // // // //           >
// // // // // //             <ChevronLeft size={24} />
// // // // // //           </button>
// // // // // //           <button 
// // // // // //             onClick={() => setIsPaused(!isPaused)} 
// // // // // //             style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}
// // // // // //           >
// // // // // //             {isPaused ? <Play size={24} /> : <Pause size={24} />}
// // // // // //           </button>
// // // // // //           <button 
// // // // // //             onClick={handleForward} 
// // // // // //             style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}
// // // // // //           >
// // // // // //             <ChevronRight size={24} />
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default VerticalScrollingFormulaWidget;
// // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // import 'katex/dist/katex.min.css';
// // // // // import { InlineMath } from 'react-katex';
// // // // // import { Pause, Play, ChevronLeft, ChevronRight } from 'lucide-react';

// // // // // const Tooltip = ({ children, text }) => {
// // // // //   return (
// // // // //     <div style={{ position: 'relative', display: 'inline-block' }}>
// // // // //       {children}
// // // // //       <span style={{
// // // // //         visibility: 'hidden',
// // // // //         width: '180px',
// // // // //         backgroundColor: 'black',
// // // // //         color: '#fff',
// // // // //         textAlign: 'center',
// // // // //         borderRadius: '6px',
// // // // //         padding: '5px 0',
// // // // //         position: 'absolute',
// // // // //         zIndex: 1,
// // // // //         bottom: '125%',
// // // // //         left: '50%',
// // // // //         marginLeft: '-90px',
// // // // //         opacity: 0,
// // // // //         transition: 'opacity 0.3s',
// // // // //       }}>
// // // // //         {text}
// // // // //       </span>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // const VerticalScrollingFormulaWidget = ({ formulaData = [], moreFormulasLink = "#", title = "" }) => {
// // // // //   const [scrollPosition, setScrollPosition] = useState(0);
// // // // //   const [isPaused, setIsPaused] = useState(false);
// // // // //   const containerRef = useRef(null);
// // // // //   const contentRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     if (isPaused) return;

// // // // //     const scrollInterval = setInterval(() => {
// // // // //       if (containerRef.current && contentRef.current) {
// // // // //         const { scrollTop, clientHeight } = containerRef.current;
// // // // //         const scrollHeight = contentRef.current.clientHeight;

// // // // //         if (scrollTop + clientHeight >= scrollHeight) {
// // // // //           setScrollPosition(1);
// // // // //         } else {
// // // // //           setScrollPosition((prevPosition) => prevPosition + 1);
// // // // //         }
// // // // //       }
// // // // //     }, 30);

// // // // //     return () => clearInterval(scrollInterval);
// // // // //   }, [isPaused]);

// // // // //   useEffect(() => {
// // // // //     if (containerRef.current) {
// // // // //       containerRef.current.scrollTop = scrollPosition;
// // // // //     }
// // // // //   }, [scrollPosition]);

// // // // //   const displayData = formulaData.length > 0 ? [...formulaData, ...formulaData] : [];

// // // // //   const handleBack = () => {
// // // // //     if (containerRef.current) {
// // // // //       containerRef.current.scrollTop -= containerRef.current.clientHeight;
// // // // //     }
// // // // //   };

// // // // //   const handleForward = () => {
// // // // //     if (containerRef.current) {
// // // // //       containerRef.current.scrollTop += containerRef.current.clientHeight;
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div style={{ position: 'relative', width: '55%', borderRadius: '10px', overflow: 'hidden' }}>
// // // // //       <div style={{ 
// // // // //         backgroundColor: '#2162d0', 
// // // // //         height: '35px', 
// // // // //         display: 'flex', 
// // // // //         alignItems: 'center', 
// // // // //         justifyContent: 'center',
// // // // //         color: 'white',
// // // // //         fontWeight: '500'
// // // // //       }}>
// // // // //         {title}
// // // // //       </div>
// // // // //       <div 
// // // // //         ref={containerRef}
// // // // //         style={{
// // // // //           backgroundColor: '#6d95db',
// // // // //           color: 'white',
// // // // //           height: '160px',
// // // // //           overflow: 'hidden',
// // // // //           scrollBehavior: 'smooth',
// // // // //           padding: '20px',
// // // // //         }}
// // // // //       >
// // // // //         <div ref={contentRef} style={{ textAlign: 'center' }}>
// // // // //           {displayData.map((item, index) => (
// // // // //             <div key={index} style={{ marginBottom: '20px' }}>
// // // // //               <h2 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '8px' }}>{item.name}</h2>
// // // // //               <div style={{ fontSize: '1rem' }}>
// // // // //                 <InlineMath math={item.formula.replace(/\$/g, '')} />
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //       <div style={{ 
// // // // //         backgroundColor: '#2162d0', 
// // // // //         height: '35px', 
// // // // //         display: 'flex', 
// // // // //         alignItems: 'center', 
// // // // //         justifyContent: 'space-between',
// // // // //         padding: '0 10px'
// // // // //       }}>
// // // // //         <a 
// // // // //           href={moreFormulasLink}
// // // // //           style={{ 
// // // // //             color: 'white', 
// // // // //             textDecoration: 'none', 
// // // // //             fontWeight: '500',
// // // // //             padding: '5px 10px',
// // // // //             borderRadius: '3px',
// // // // //             background: 'transparent',
// // // // //             border: '1px solid white',
// // // // //             transition: 'background-color 0.3s, color 0.3s'
// // // // //           }}
// // // // //           onMouseEnter={(e) => {
// // // // //             e.target.style.backgroundColor = 'white';
// // // // //             e.target.style.color = '#2162d0';
// // // // //           }}
// // // // //           onMouseLeave={(e) => {
// // // // //             e.target.style.backgroundColor = 'transparent';
// // // // //             e.target.style.color = 'white';
// // // // //           }}
// // // // //         >
// // // // //           See All Formulas
// // // // //         </a>
// // // // //         <div style={{ display: 'flex', gap: '10px' }}>
// // // // //           <Tooltip text="Press Pause to Use This Button">
// // // // //             <button 
// // // // //               onClick={handleBack} 
// // // // //               style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}
// // // // //               disabled={!isPaused}
// // // // //             >
// // // // //               <ChevronLeft size={24} />
// // // // //             </button>
// // // // //           </Tooltip>
// // // // //           <button 
// // // // //             onClick={() => setIsPaused(!isPaused)} 
// // // // //             style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}
// // // // //           >
// // // // //             {isPaused ? <Play size={24} /> : <Pause size={24} />}
// // // // //           </button>
// // // // //           <Tooltip text="Press Pause to Use This Button">
// // // // //             <button 
// // // // //               onClick={handleForward} 
// // // // //               style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}
// // // // //               disabled={!isPaused}
// // // // //             >
// // // // //               <ChevronRight size={24} />
// // // // //             </button>
// // // // //           </Tooltip>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default VerticalScrollingFormulaWidget;
// // // // import React, { useState, useEffect, useRef } from 'react';
// // // // import 'katex/dist/katex.min.css';
// // // // import { InlineMath } from 'react-katex';
// // // // import { Pause, Play, ChevronLeft, ChevronRight } from 'lucide-react';

// // // // const Tooltip = ({ children, text }) => {
// // // //   const [isVisible, setIsVisible] = useState(false);

// // // //   return (
// // // //     <div 
// // // //       style={{ position: 'relative', display: 'inline-block' }}
// // // //       onMouseEnter={() => setIsVisible(true)}
// // // //       onMouseLeave={() => setIsVisible(false)}
// // // //     >
// // // //       {children}
// // // //       {isVisible && (
// // // //         <span style={{
// // // //           position: 'absolute',
// // // //           bottom: '100%',
// // // //           left: '50%',
// // // //           transform: 'translateX(-50%)',
// // // //           backgroundColor: 'rgba(0, 0, 0, 0.8)',
// // // //           color: 'white',
// // // //           padding: '5px 10px',
// // // //           borderRadius: '4px',
// // // //           whiteSpace: 'nowrap',
// // // //           fontSize: '12px',
// // // //           zIndex: 1000,
// // // //         }}>
// // // //           {text}
// // // //         </span>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // const VerticalScrollingFormulaWidget = ({ formulaData = [], moreFormulasLink = "#", title = "" }) => {
// // // //   const [scrollPosition, setScrollPosition] = useState(0);
// // // //   const [isPaused, setIsPaused] = useState(false);
// // // //   const containerRef = useRef(null);
// // // //   const contentRef = useRef(null);

// // // //   useEffect(() => {
// // // //     if (isPaused) return;

// // // //     const scrollInterval = setInterval(() => {
// // // //       if (containerRef.current && contentRef.current) {
// // // //         const { scrollTop, clientHeight } = containerRef.current;
// // // //         const scrollHeight = contentRef.current.clientHeight;

// // // //         if (scrollTop + clientHeight >= scrollHeight) {
// // // //           setScrollPosition(1);
// // // //         } else {
// // // //           setScrollPosition((prevPosition) => prevPosition + 1);
// // // //         }
// // // //       }
// // // //     }, 30);

// // // //     return () => clearInterval(scrollInterval);
// // // //   }, [isPaused]);

// // // //   useEffect(() => {
// // // //     if (containerRef.current) {
// // // //       containerRef.current.scrollTop = scrollPosition;
// // // //     }
// // // //   }, [scrollPosition]);

// // // //   const displayData = formulaData.length > 0 ? [...formulaData, ...formulaData] : [];

// // // //   const handleBack = () => {
// // // //     if (containerRef.current) {
// // // //       containerRef.current.scrollTop -= containerRef.current.clientHeight;
// // // //     }
// // // //   };

// // // //   const handleForward = () => {
// // // //     if (containerRef.current) {
// // // //       containerRef.current.scrollTop += containerRef.current.clientHeight;
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div style={{ position: 'relative', width: '55%', borderRadius: '10px', overflow: 'hidden' }}>
// // // //       <div style={{ 
// // // //         backgroundColor: '#2162d0', 
// // // //         height: '35px', 
// // // //         display: 'flex', 
// // // //         alignItems: 'center', 
// // // //         justifyContent: 'center',
// // // //         color: 'white',
// // // //         fontWeight: '500'
// // // //       }}>
// // // //         {title}
// // // //       </div>
// // // //       <div 
// // // //         ref={containerRef}
// // // //         style={{
// // // //           backgroundColor: '#6d95db',
// // // //           color: 'white',
// // // //           height: '160px',
// // // //           overflow: 'hidden',
// // // //           scrollBehavior: 'smooth',
// // // //           padding: '20px',
// // // //         }}
// // // //       >
// // // //         <div ref={contentRef} style={{ textAlign: 'center' }}>
// // // //           {displayData.map((item, index) => (
// // // //             <div key={index} style={{ marginBottom: '20px' }}>
// // // //               <h2 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '8px' }}>{item.name}</h2>
// // // //               <div style={{ fontSize: '1rem' }}>
// // // //                 <InlineMath math={item.formula.replace(/\$/g, '')} />
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //       <div style={{ 
// // // //         backgroundColor: '#2162d0', 
// // // //         height: '35px', 
// // // //         display: 'flex', 
// // // //         alignItems: 'center', 
// // // //         justifyContent: 'space-between',
// // // //         padding: '0 10px'
// // // //       }}>
// // // //         <a 
// // // //           href={moreFormulasLink}
// // // //           style={{ 
// // // //             color: 'white', 
// // // //             textDecoration: 'none', 
// // // //             fontWeight: '500',
// // // //             padding: '5px 10px',
// // // //             borderRadius: '3px',
// // // //             background: 'transparent',
// // // //             border: '1px solid white',
// // // //             transition: 'background-color 0.3s, color 0.3s'
// // // //           }}
// // // //           onMouseEnter={(e) => {
// // // //             e.target.style.backgroundColor = 'white';
// // // //             e.target.style.color = '#2162d0';
// // // //           }}
// // // //           onMouseLeave={(e) => {
// // // //             e.target.style.backgroundColor = 'transparent';
// // // //             e.target.style.color = 'white';
// // // //           }}
// // // //         >
// // // //           See All Formulas
// // // //         </a>
// // // //         <div style={{ display: 'flex', gap: '10px' }}>
// // // //           <Tooltip text="Press Pause to Use This Button">
// // // //             <button 
// // // //               onClick={handleBack} 
// // // //               style={{ background: 'none', border: 'none', cursor: isPaused ? 'pointer' : 'not-allowed', color: 'white' }}
// // // //               disabled={!isPaused}
// // // //             >
// // // //               <ChevronLeft size={24} />
// // // //             </button>
// // // //           </Tooltip>
// // // //           <button 
// // // //             onClick={() => setIsPaused(!isPaused)} 
// // // //             style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}
// // // //           >
// // // //             {isPaused ? <Play size={24} /> : <Pause size={24} />}
// // // //           </button>
// // // //           <Tooltip text="Press Pause to Use This Button">
// // // //             <button 
// // // //               onClick={handleForward} 
// // // //               style={{ background: 'none', border: 'none', cursor: isPaused ? 'pointer' : 'not-allowed', color: 'white' }}
// // // //               disabled={!isPaused}
// // // //             >
// // // //               <ChevronRight size={24} />
// // // //             </button>
// // // //           </Tooltip>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default VerticalScrollingFormulaWidget;
// // // import React, { useState, useEffect, useRef } from 'react';
// // // import 'katex/dist/katex.min.css';
// // // import { InlineMath } from 'react-katex';
// // // import { Pause, Play, ChevronLeft, ChevronRight } from 'lucide-react';

// // // const Tooltip = ({ children, text, show }) => {
// // //   const [isVisible, setIsVisible] = useState(false);

// // //   return (
// // //     <div 
// // //       style={{ position: 'relative', display: 'inline-block' }}
// // //       onMouseEnter={() => setIsVisible(true)}
// // //       onMouseLeave={() => setIsVisible(false)}
// // //     >
// // //       {children}
// // //       {isVisible && show && (
// // //         <span style={{
// // //           position: 'absolute',
// // //           bottom: '100%',
// // //           left: '50%',
// // //           transform: 'translateX(-50%)',
// // //           backgroundColor: 'rgba(0, 0, 0, 0.8)',
// // //           color: 'white',
// // //           padding: '5px 10px',
// // //           borderRadius: '4px',
// // //           whiteSpace: 'nowrap',
// // //           fontSize: '12px',
// // //           zIndex: 1000,
// // //         }}>
// // //           {text}
// // //         </span>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // const VerticalScrollingFormulaWidget = ({ formulaData = [], moreFormulasLink = "#", title = "" }) => {
// // //   const [scrollPosition, setScrollPosition] = useState(0);
// // //   const [isPaused, setIsPaused] = useState(false);
// // //   const containerRef = useRef(null);
// // //   const contentRef = useRef(null);

// // //   useEffect(() => {
// // //     if (isPaused) return;

// // //     const scrollInterval = setInterval(() => {
// // //       if (containerRef.current && contentRef.current) {
// // //         const { scrollTop, clientHeight } = containerRef.current;
// // //         const scrollHeight = contentRef.current.clientHeight;

// // //         if (scrollTop + clientHeight >= scrollHeight) {
// // //           setScrollPosition(1);
// // //         } else {
// // //           setScrollPosition((prevPosition) => prevPosition + 1);
// // //         }
// // //       }
// // //     }, 30);

// // //     return () => clearInterval(scrollInterval);
// // //   }, [isPaused]);

// // //   useEffect(() => {
// // //     if (containerRef.current) {
// // //       containerRef.current.scrollTop = scrollPosition;
// // //     }
// // //   }, [scrollPosition]);

// // //   const displayData = formulaData.length > 0 ? [...formulaData, ...formulaData] : [];

// // //   const handleBack = () => {
// // //     if (containerRef.current) {
// // //       containerRef.current.scrollTop -= containerRef.current.clientHeight;
// // //     }
// // //   };

// // //   const handleForward = () => {
// // //     if (containerRef.current) {
// // //       containerRef.current.scrollTop += containerRef.current.clientHeight;
// // //     }
// // //   };

// // //   return (
// // //     <div style={{ position: 'relative', width: '55%', borderRadius: '10px', overflow: 'hidden' }}>
// // //       <div style={{ 
// // //         backgroundColor: '#2162d0', 
// // //         height: '35px', 
// // //         display: 'flex', 
// // //         alignItems: 'center', 
// // //         justifyContent: 'center',
// // //         color: 'white',
// // //         fontWeight: '500'
// // //       }}>
// // //         {title}
// // //       </div>
// // //       <div 
// // //         ref={containerRef}
// // //         style={{
// // //           backgroundColor: '#6d95db',
// // //           color: 'white',
// // //           height: '160px',
// // //           overflow: 'hidden',
// // //           scrollBehavior: 'smooth',
// // //           padding: '20px',
// // //         }}
// // //       >
// // //         <div ref={contentRef} style={{ textAlign: 'center' }}>
// // //           {displayData.map((item, index) => (
// // //             <div key={index} style={{ marginBottom: '20px' }}>
// // //               <h2 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '8px' }}>{item.name}</h2>
// // //               <div style={{ fontSize: '1rem' }}>
// // //                 <InlineMath math={item.formula.replace(/\$/g, '')} />
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //       <div style={{ 
// // //         backgroundColor: '#2162d0', 
// // //         height: '35px', 
// // //         display: 'flex', 
// // //         alignItems: 'center', 
// // //         justifyContent: 'space-between',
// // //         padding: '0 10px'
// // //       }}>
// // //         <a 
// // //           href={moreFormulasLink}
// // //           style={{ 
// // //             color: 'white', 
// // //             textDecoration: 'none', 
// // //             fontWeight: '500',
// // //             padding: '5px 10px',
// // //             borderRadius: '3px',
// // //             background: 'transparent',
// // //             border: '1px solid white',
// // //             transition: 'background-color 0.3s, color 0.3s'
// // //           }}
// // //           onMouseEnter={(e) => {
// // //             e.target.style.backgroundColor = 'white';
// // //             e.target.style.color = '#2162d0';
// // //           }}
// // //           onMouseLeave={(e) => {
// // //             e.target.style.backgroundColor = 'transparent';
// // //             e.target.style.color = 'white';
// // //           }}
// // //         >
// // //           See All Formulas
// // //         </a>
// // //         <div style={{ display: 'flex', gap: '10px' }}>
// // //           <Tooltip text="Press Pause to Use This Button" show={!isPaused}>
// // //             <button 
// // //               onClick={handleBack} 
// // //               style={{ background: 'none', border: 'none', cursor: isPaused ? 'pointer' : 'not-allowed', color: 'white' }}
// // //               disabled={!isPaused}
// // //             >
// // //               <ChevronLeft size={24} />
// // //             </button>
// // //           </Tooltip>
// // //           <button 
// // //             onClick={() => setIsPaused(!isPaused)} 
// // //             style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}
// // //           >
// // //             {isPaused ? <Play size={24} /> : <Pause size={24} />}
// // //           </button>
// // //           <Tooltip text="Press Pause to Use This Button" show={!isPaused}>
// // //             <button 
// // //               onClick={handleForward} 
// // //               style={{ background: 'none', border: 'none', cursor: isPaused ? 'pointer' : 'not-allowed', color: 'white' }}
// // //               disabled={!isPaused}
// // //             >
// // //               <ChevronRight size={24} />
// // //             </button>
// // //           </Tooltip>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default VerticalScrollingFormulaWidget;
// // import React, { useState, useEffect, useRef } from 'react';
// // import 'katex/dist/katex.min.css';
// // import { InlineMath } from 'react-katex';
// // import { Pause, Play, ChevronLeft, ChevronRight } from 'lucide-react';

// // const Tooltip = ({ children, text, show }) => {
// //   const [isVisible, setIsVisible] = useState(false);

// //   return (
// //     <div 
// //       style={{ position: 'relative', display: 'inline-block' }}
// //       onMouseEnter={() => setIsVisible(true)}
// //       onMouseLeave={() => setIsVisible(false)}
// //     >
// //       {children}
// //       {isVisible && show && (
// //         <span style={{
// //           position: 'absolute',
// //           bottom: '100%',
// //           left: '80%',
// //           transform: 'translateX(-50%)',
// //           backgroundColor: 'rgba(0, 0, 0, 0.8)',
// //           color: 'white',
// //           padding: '5px 10px',
// //           borderRadius: '3px',
// //           whiteSpace: 'wrap',
// //           fontSize: '12px',
// //           zIndex: 10000,
// //           overflow:'visible'
// //         }}>
// //           {text}
// //         </span>
// //       )}
// //     </div>
// //   );
// // };

// // const VerticalScrollingFormulaWidget = ({ formulaData = [], moreFormulasLink = "#", title = "" }) => {
// //   const [scrollPosition, setScrollPosition] = useState(0);
// //   const [isPaused, setIsPaused] = useState(false);
// //   const containerRef = useRef(null);
// //   const contentRef = useRef(null);

// //   useEffect(() => {
// //     if (isPaused) return;

// //     const scrollInterval = setInterval(() => {
// //       if (containerRef.current && contentRef.current) {
// //         const { scrollTop, clientHeight } = containerRef.current;
// //         const scrollHeight = contentRef.current.clientHeight;

// //         if (scrollTop >= scrollHeight / 2) {
// //           setScrollPosition(0);
// //         } else {
// //           setScrollPosition((prevPosition) => prevPosition + 1);
// //         }
// //       }
// //     }, 30);

// //     return () => clearInterval(scrollInterval);
// //   }, [isPaused]);

// //   useEffect(() => {
// //     if (containerRef.current) {
// //       containerRef.current.scrollTop = scrollPosition;
// //     }
// //   }, [scrollPosition]);

// //   const displayData = [...formulaData, ...formulaData, ...formulaData];

// //   const handleBack = () => {
// //     if (containerRef.current) {
// //       containerRef.current.scrollTop -= containerRef.current.clientHeight;
// //     }
// //   };

// //   const handleForward = () => {
// //     if (containerRef.current) {
// //       containerRef.current.scrollTop += containerRef.current.clientHeight;
// //     }
// //   };

// //   return (
// //     <div style={{ position: 'relative', width: '55%', borderRadius: '3px', overflow: 'hidden' }}>
// //       <div style={{ 
// //         backgroundColor: '#407de5', 
// //         height: '35px', 
// //         display: 'flex', 
// //         alignItems: 'center', 
// //         justifyContent: 'center',
// //         color: 'white',
// //         fontWeight: '500',
// //          margin:'1px',
// //           borderRadius:'3px'
// //       }}>
// //         {title}
// //       </div>
// //       <div 
// //         ref={containerRef}
// //         style={{
// //           backgroundColor: '#6d95db',
// //           color: 'white',
// //           height: '180px',
// //           overflow: 'hidden',
// //           scrollBehavior: 'smooth',
// //           padding: '20px',
// //           margin:'1px'
// //         }}
// //       >
// //         <div ref={contentRef} style={{ textAlign: 'center' }}>
// //           {displayData.map((item, index) => (
// //             <div key={index} style={{ marginBottom: '20px' }}>
// //               <h2 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '8px' }}>{item.name}</h2>
// //               <div style={{ fontSize: '1rem' }}>
// //                 <InlineMath math={item.formula.replace(/\$/g, '')} />
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //       <div style={{ 
// //         backgroundColor: '#2162d0', 
// //         height: '35px', 
// //         display: 'flex', 
// //         alignItems: 'center', 
// //         justifyContent: 'space-between',
// //         padding: '0 10px',
// //          margin:'1px',
// //          borderRadius:'3px'
// //       }}>
// //         <a 
// //           href={moreFormulasLink}
// //           style={{ 
// //             color: 'white', 
// //             textDecoration: 'none', 
// //             fontWeight: '500',
// //             padding: '5px 10px',
// //             borderRadius: '3px',
// //             background: 'transparent',
// //             border: '1px solid white',
// //             transition: 'background-color 0.3s, color 0.3s',
// //             fontSize:'14px'
// //           }}
// //           onMouseEnter={(e) => {
// //             e.target.style.backgroundColor = 'white';
// //             e.target.style.color = '#2162d0';
// //           }}
// //           onMouseLeave={(e) => {
// //             e.target.style.backgroundColor = 'transparent';
// //             e.target.style.color = 'white';
// //           }}
// //         >
// //           See All Formulas
// //         </a>
// //         <div style={{ display: 'flex', gap: '10px' }}>
// //           <Tooltip text="Press Pause to Use" show={!isPaused}>
// //             <button 
// //               onClick={handleBack} 
// //               style={{ zIndex:'10000', background: 'none', border: 'none', cursor: isPaused ? 'pointer' : 'not-allowed', color: 'white' }}
// //               disabled={!isPaused}
// //             >
// //               <ChevronLeft size={24} />
// //             </button>
// //           </Tooltip>
// //           <button 
// //             onClick={() => setIsPaused(!isPaused)} 
// //             style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}
// //           >
// //             {isPaused ? <Play size={24} /> : <Pause size={24} />}
// //           </button>
// //           <Tooltip text="Press Pause to Use" show={!isPaused}>
// //             <button 
// //               onClick={handleForward} 
// //               style={{overflow:'visible', background: 'none', border: 'none', cursor: isPaused ? 'pointer' : 'not-allowed', color: 'white' }}
// //               disabled={!isPaused}
// //             >
// //               <ChevronRight size={24} />
// //             </button>
// //           </Tooltip>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VerticalScrollingFormulaWidget;

// import React, { useState, useEffect, useRef } from 'react';
// import 'katex/dist/katex.min.css';
// import { InlineMath } from 'react-katex';
// import { Pause, Play, ChevronLeft, ChevronRight } from 'lucide-react';

// const Tooltip = ({ children, text, show }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   return (
//     <div 
//       style={{ position: 'relative', display: 'inline-block' }}
//       onMouseEnter={() => setIsVisible(true)}
//       onMouseLeave={() => setIsVisible(false)}
//     >
//       {children}
//       {isVisible && show && (
//         <span style={{
//           position: 'absolute',
//           bottom: '100%',
//           left: '80%',
//           transform: 'translateX(-50%)',
//           backgroundColor: 'rgba(0, 0, 0, 0.8)',
//           color: 'white',
//           padding: '5px 10px',
//           borderRadius: '3px',
//           whiteSpace: 'nowrap',
//           fontSize: '12px',
//           zIndex: 10000,
//           overflow: 'visible'
//         }}>
//           {text}
//         </span>
//       )}
//     </div>
//   );
// };

// const VerticalScrollingFormulaWidget = ({ formulaData = [], moreFormulasLink = "#", title = "" }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const intervalRef = useRef(null);
  
//   useEffect(() => {
//     if (!isPaused) {
//       intervalRef.current = setInterval(() => {
//         setCurrentIndex(prev => (prev + 1) % formulaData.length);
//       }, 3000);
//     }
//     return () => clearInterval(intervalRef.current);
//   }, [isPaused, formulaData.length]);

//   const handleBack = () => {
//     setCurrentIndex(prev => 
//       prev === 0 ? formulaData.length - 1 : prev - 1
//     );
//   };

//   const handleForward = () => {
//     setCurrentIndex(prev => 
//       (prev + 1) % formulaData.length
//     );
//   };

//   return (
//     <div style={{ position: 'relative', width: '55%', borderRadius: '3px', overflow: 'hidden' }}>
//       <div style={{ 
//         backgroundColor: '#407de5', 
//         height: '35px', 
//         display: 'flex', 
//         alignItems: 'center', 
//         justifyContent: 'center',
//         color: 'white',
//         fontWeight: '500',
//         margin: '1px',
//         borderRadius: '3px'
//       }}>
//         {title}
//       </div>
      
//       <div style={{
//         backgroundColor: '#6d95db',
//         color: 'white',
//         height: '180px',
//         overflow: 'hidden',
//         padding: '20px',
//         margin: '1px'
//       }}>
//         <div style={{ textAlign: 'center' }}>
//           <div style={{ marginBottom: '20px' }}>
//             <h2 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '8px' }}>
//               {formulaData[currentIndex]?.name}
//             </h2>
//             <div style={{ fontSize: '1rem' }}>
//               <InlineMath math={formulaData[currentIndex]?.formula?.replace(/\$/g, '')} />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div style={{ 
//         backgroundColor: '#2162d0', 
//         height: '35px', 
//         display: 'flex', 
//         alignItems: 'center', 
//         justifyContent: 'space-between',
//         padding: '0 10px',
//         margin: '1px',
//         borderRadius: '3px'
//       }}>
//         <a 
//           href={moreFormulasLink}
//           style={{ 
//             color: 'white', 
//             textDecoration: 'none', 
//             fontWeight: '500',
//             padding: '5px 10px',
//             borderRadius: '3px',
//             background: 'transparent',
//             border: '1px solid white',
//             transition: 'background-color 0.3s, color 0.3s',
//             fontSize: '14px'
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.backgroundColor = 'white';
//             e.target.style.color = '#2162d0';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.backgroundColor = 'transparent';
//             e.target.style.color = 'white';
//           }}
//         >
//           See All Formulas
//         </a>
        
//         <div style={{ display: 'flex', gap: '10px' }}>
//           <Tooltip text="Press Pause to Use" show={!isPaused}>
//             <button 
//               onClick={handleBack} 
//               style={{ 
//                 background: 'none', 
//                 border: 'none', 
//                 cursor: isPaused ? 'pointer' : 'not-allowed', 
//                 color: 'white',
//                 zIndex: 10000 
//               }}
//               disabled={!isPaused}
//             >
//               <ChevronLeft size={24} />
//             </button>
//           </Tooltip>
          
//           <button 
//             onClick={() => setIsPaused(!isPaused)} 
//             style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}
//           >
//             {isPaused ? <Play size={24} /> : <Pause size={24} />}
//           </button>
          
//           <Tooltip text="Press Pause to Use" show={!isPaused}>
//             <button 
//               onClick={handleForward} 
//               style={{ 
//                 background: 'none', 
//                 border: 'none', 
//                 cursor: isPaused ? 'pointer' : 'not-allowed', 
//                 color: 'white',
//                 overflow: 'visible',
//                 zIndex: 10000
//               }}
//               disabled={!isPaused}
//             >
//               <ChevronRight size={24} />
//             </button>
//           </Tooltip>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerticalScrollingFormulaWidget;

import React, { useState, useEffect, useRef } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import { Pause, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const Tooltip = ({ children, text, show }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div 
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && show && (
        <span style={{
          position: 'absolute',
          bottom: '100%',
          left: '80%',
          transform: 'translateX(-80%)',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '3px',
          whiteSpace: 'nowrap',
          fontSize: '12px',
          zIndex: 10000,
          overflow: 'visible'
        }}>
          {text}
        </span>
      )}
    </div>
  );
};

const VerticalScrollingFormulaWidget = ({ 
  formulaData = [], 
  moreFormulasLink = "#", 
  title = "",
  backgroundColor = '#6d95db',
  headerColor = '#407de5',
  footerColor = '#2162d0'
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;

    const scrollInterval = setInterval(() => {
      if (containerRef.current && contentRef.current) {
        const { scrollTop, clientHeight } = containerRef.current;
        const scrollHeight = contentRef.current.clientHeight;

        if (scrollTop >= scrollHeight / 2) {
          setScrollPosition(0);
        } else {
          setScrollPosition((prevPosition) => prevPosition + 1);
        }
      }
    }, 30);

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = scrollPosition;
    }
  }, [scrollPosition]);

  const displayData = [...formulaData, ...formulaData];

  const handleBack = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop -= containerRef.current.clientHeight;
    }
  };

  const handleForward = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop += containerRef.current.clientHeight;
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', borderRadius: '3px', overflow: 'hidden' }}>
      <div style={{ 
        backgroundColor: headerColor, 
        height: '35px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: 'white',
        fontWeight: '500',
        margin: '1px',
        borderRadius: '3px'
      }}>
        {title}
      </div>
      
      <div 
        ref={containerRef}
        style={{
          backgroundColor: backgroundColor,
          color: 'white',
          height: '180px',
          overflow: 'hidden',
          scrollBehavior: 'smooth',
          padding: '20px',
          margin: '1px'
        }}
      >
        <div ref={contentRef} style={{ textAlign: 'center' }}>
          {displayData.map((item, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '8px' }}>{item.name}</h2>
              <div style={{ fontSize: '1rem' }}>
                <InlineMath math={item.formula.replace(/\$/g, '')} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ 
        backgroundColor: footerColor, 
        height: '35px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '0 10px',
        margin: '1px',
        borderRadius: '3px'
      }}>
        <a 
          href={moreFormulasLink}
          style={{ 
            color: 'white', 
            textDecoration: 'none', 
            fontWeight: '500',
            padding: '5px 10px',
            borderRadius: '3px',
            background: 'transparent',
            border: '1px solid white',
            transition: 'background-color 0.3s, color 0.3s',
            fontSize: '14px'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = footerColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'white';
          }}
        >
          See All Formulas
        </a>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <Tooltip text="Press Pause to Use" show={!isPaused}>
            <button 
              onClick={handleBack} 
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: isPaused ? 'pointer' : 'not-allowed', 
                color: 'white',
                zIndex: 10000 ,
               
              }}
              disabled={!isPaused}
            >
              <ChevronLeft size={24} />
            </button>
          </Tooltip>
          
          <button 
            onClick={() => setIsPaused(!isPaused)} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}
          >
            {isPaused ? <Play size={24} /> : <Pause size={24} />}
          </button>
          
          <Tooltip text="Press Pause to Use" show={!isPaused}>
            <button 
              onClick={handleForward} 
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: isPaused ? 'pointer' : 'not-allowed', 
                color: 'white',
                overflow: 'visible',
                zIndex: 10000,
                 
              }}
              disabled={!isPaused}
            >
              <ChevronRight size={24} />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default VerticalScrollingFormulaWidget;