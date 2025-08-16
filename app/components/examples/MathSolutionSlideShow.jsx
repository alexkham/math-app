// // // // // // // 'use client';

// // // // // // // import React, { useState, useEffect } from 'react';

// // // // // // // const MathSolutionSlideshow = ({ initialData }) => {
// // // // // // //   const [jsonData, setJsonData] = useState(initialData);
// // // // // // //   const [currentStep, setCurrentStep] = useState(0);
// // // // // // //   const [isPlaying, setIsPlaying] = useState(false);
// // // // // // //   const [intervalId, setIntervalId] = useState(null);

// // // // // // //   useEffect(() => {
// // // // // // //     return () => {
// // // // // // //       if (intervalId) clearInterval(intervalId);
// // // // // // //     };
// // // // // // //   }, [intervalId]);

// // // // // // //   const playSlideshow = () => {
// // // // // // //     if (isPlaying) return;
// // // // // // //     const id = setInterval(() => {
// // // // // // //       setCurrentStep((prevStep) => (prevStep + 1) % jsonData.length);
// // // // // // //     }, 3000);
// // // // // // //     setIntervalId(id);
// // // // // // //     setIsPlaying(true);
// // // // // // //   };

// // // // // // //   const pauseSlideshow = () => {
// // // // // // //     if (intervalId) clearInterval(intervalId);
// // // // // // //     setIsPlaying(false);
// // // // // // //   };

// // // // // // //   const nextStep = () => {
// // // // // // //     setCurrentStep((prevStep) => (prevStep + 1) % jsonData.length);
// // // // // // //   };

// // // // // // //   const prevStep = () => {
// // // // // // //     setCurrentStep((prevStep) => (prevStep - 1 + jsonData.length) % jsonData.length);
// // // // // // //   };

// // // // // // //   const renderContent = (content) => {
// // // // // // //     if (typeof content === 'string') {
// // // // // // //       if (content.startsWith('<svg')) {
// // // // // // //         return <div dangerouslySetInnerHTML={{ __html: content }} />;
// // // // // // //       }
// // // // // // //       return <p>{content}</p>;
// // // // // // //     }
// // // // // // //     return null;
// // // // // // //   };

// // // // // // //   if (!jsonData || jsonData.length === 0) {
// // // // // // //     return <p>No data available.</p>;
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto',minHeight:'800px' }}>
// // // // // // //       <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
// // // // // // //         <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Math Solution Slideshow</h2>
// // // // // // //         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
// // // // // // //           <div style={{ width: '48%' }}>
// // // // // // //             <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Step {currentStep + 1}</h3>
// // // // // // //             {renderContent(jsonData[currentStep].content)}
// // // // // // //           </div>
// // // // // // //           <div style={{ width: '48%' }}>
// // // // // // //             <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Explanation</h3>
// // // // // // //             <p>{jsonData[currentStep].explanation}</p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //       <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
// // // // // // //         <button onClick={prevStep} style={buttonStyle}>Prev</button>
// // // // // // //         <button onClick={isPlaying ? pauseSlideshow : playSlideshow} style={buttonStyle}>
// // // // // // //           {isPlaying ? 'Pause' : 'Play'}
// // // // // // //         </button>
// // // // // // //         <button onClick={nextStep} style={buttonStyle}>Next</button>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // const buttonStyle = {
// // // // // // //   padding: '10px 20px',
// // // // // // //   fontSize: '16px',
// // // // // // //   backgroundColor: '#007bff',
// // // // // // //   color: 'white',
// // // // // // //   border: 'none',
// // // // // // //   borderRadius: '5px',
// // // // // // //   cursor: 'pointer',
// // // // // // // };

// // // // // // // export default MathSolutionSlideshow;
// // // // // // 'use client';

// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import styles from './MathSolutionSlideshow.module.css';

// // // // // // const MathSolutionSlideshow = ({ initialData }) => {
// // // // // //   const [jsonData] = useState(initialData);
// // // // // //   const [currentStep, setCurrentStep] = useState(0);
// // // // // //   const [isPlaying, setIsPlaying] = useState(false);
// // // // // //   const [intervalId, setIntervalId] = useState(null);

// // // // // //   useEffect(() => {
// // // // // //     return () => {
// // // // // //       if (intervalId) clearInterval(intervalId);
// // // // // //     };
// // // // // //   }, [intervalId]);

// // // // // //   const playSlideshow = () => {
// // // // // //     if (isPlaying) return;
// // // // // //     const id = setInterval(() => {
// // // // // //       setCurrentStep((prevStep) => (prevStep + 1) % jsonData.length);
// // // // // //     }, 3000);
// // // // // //     setIntervalId(id);
// // // // // //     setIsPlaying(true);
// // // // // //   };

// // // // // //   const pauseSlideshow = () => {
// // // // // //     if (intervalId) clearInterval(intervalId);
// // // // // //     setIsPlaying(false);
// // // // // //   };

// // // // // //   const nextStep = () => {
// // // // // //     setCurrentStep((prevStep) => (prevStep + 1) % jsonData.length);
// // // // // //   };

// // // // // //   const prevStep = () => {
// // // // // //     setCurrentStep((prevStep) => (prevStep - 1 + jsonData.length) % jsonData.length);
// // // // // //   };

// // // // // //   const renderContent = (content) => {
// // // // // //     if (typeof content === 'string') {
// // // // // //       if (content.startsWith('<svg')) {
// // // // // //         return <div dangerouslySetInnerHTML={{ __html: content }} />;
// // // // // //       }
// // // // // //       return <p>{content}</p>;
// // // // // //     }
// // // // // //     return null;
// // // // // //   };

// // // // // //   if (!jsonData || jsonData.length === 0) {
// // // // // //     return <p>No data available.</p>;
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className={styles.container}>
// // // // // //       <h2 className={styles.header}>Math Solution Slideshow</h2>
// // // // // //       <div className={styles.content}>
// // // // // //         <div className={styles.stepContent}>
// // // // // //           <h3>Step {currentStep + 1}</h3>
// // // // // //           {renderContent(jsonData[currentStep].content)}
// // // // // //         </div>
// // // // // //         <div className={styles.explanations}>
// // // // // //           {jsonData.slice(0, currentStep + 1).map((step, index) => (
// // // // // //             <div key={index} className={styles.step}>
// // // // // //               <h4>Step {index + 1}</h4>
// // // // // //               <p>{step.explanation}</p>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //       <div className={styles.stepCount}>
// // // // // //         Step {currentStep + 1} / {jsonData.length}
// // // // // //       </div>
// // // // // //       <div className={styles.controls}>
// // // // // //         <button onClick={prevStep} className={styles.button}>Prev</button>
// // // // // //         <button onClick={isPlaying ? pauseSlideshow : playSlideshow} className={styles.button}>
// // // // // //           {isPlaying ? 'Pause' : 'Play'}
// // // // // //         </button>
// // // // // //         <button onClick={nextStep} className={styles.button}>Next</button>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default MathSolutionSlideshow;
// // // // // 'use client';

// // // // // import React, { useState, useEffect ,useRef } from 'react';
// // // // // import styles from './MathSolutionSlideshow.module.css';

// // // // // const MathSolutionSlideshow = ({ initialData }) => {
// // // // //   const [jsonData] = useState(initialData);
// // // // //   const [currentStep, setCurrentStep] = useState(0);
// // // // //   const [isPlaying, setIsPlaying] = useState(false);
// // // // //   const [intervalId, setIntervalId] = useState(null);
// // // // //   const explanationsRef = useRef(null);


// // // // //   useEffect(() => {
// // // // //     if (explanationsRef.current) {
// // // // //       explanationsRef.current.scrollTop = explanationsRef.current.scrollHeight;
// // // // //     }
// // // // //   }, [currentStep]);

// // // // //   useEffect(() => {
// // // // //     return () => {
// // // // //       if (intervalId) clearInterval(intervalId);
// // // // //     };
// // // // //   }, [intervalId]);

// // // // //   const playSlideshow = () => {
// // // // //     if (isPlaying) return;
// // // // //     const id = setInterval(() => {
// // // // //       setCurrentStep((prevStep) => (prevStep + 1) % jsonData.length);
// // // // //     }, 3000);
// // // // //     setIntervalId(id);
// // // // //     setIsPlaying(true);
// // // // //   };

// // // // //   const pauseSlideshow = () => {
// // // // //     if (intervalId) clearInterval(intervalId);
// // // // //     setIsPlaying(false);
// // // // //   };

// // // // //   const nextStep = () => {
// // // // //     setCurrentStep((prevStep) => (prevStep + 1) % jsonData.length);
// // // // //   };

// // // // //   const prevStep = () => {
// // // // //     setCurrentStep((prevStep) => (prevStep - 1 + jsonData.length) % jsonData.length);
// // // // //   };

  

// // // // //   const renderContent = (content) => {
// // // // //     if (typeof content === 'string') {
// // // // //       if (content.startsWith('<svg')) {
// // // // //         return <div dangerouslySetInnerHTML={{ __html: content }} />;
// // // // //       }
// // // // //       return <p>{content}</p>;
// // // // //     }
// // // // //     return null;
// // // // //   };

// // // // //   if (!jsonData || jsonData.length === 0) {
// // // // //     return <p>No data available.</p>;
// // // // //   }

// // // // //   return (
// // // // //     <div className={styles.container}>
// // // // //       {/* <h2 className={styles.header}>Math Solution Slideshow</h2> */}
// // // // //       <div className={styles.content}>
// // // // //         <div className={styles.stepContent}>
// // // // //           <h3>Step {currentStep + 1}</h3>
// // // // //           <div className={styles.stepContentInner}>
// // // // //             {renderContent(jsonData[currentStep].content)}
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className={styles.explanations} ref={explanationsRef}>
// // // // //           <div className={styles.explanationsInner}>
// // // // //             {jsonData.slice(0, currentStep + 1).map((step, index) => (
// // // // //               <div key={index} className={styles.step}>
// // // // //                 <h4>Step {index + 1}</h4>
// // // // //                 <p>{step.explanation}</p>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //       <div className={styles.stepCount}>
// // // // //         Step {currentStep + 1} / {jsonData.length}
// // // // //       </div>
// // // // //       <div className={styles.controls}>
// // // // //         <button onClick={prevStep} className={styles.button}>Prev</button>
// // // // //         <button onClick={isPlaying ? pauseSlideshow : playSlideshow} className={styles.button}>
// // // // //           {isPlaying ? 'Pause' : 'Play'}
// // // // //         </button>
// // // // //         <button onClick={nextStep} className={styles.button}>Next</button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default MathSolutionSlideshow;
// // // // 'use client';

// // // // import React, { useState, useEffect, useRef } from 'react';
// // // // import styles from './MathSolutionSlideshow.module.css';

// // // // const MathSolutionSlideshow = ({ initialData }) => {
// // // //   const [jsonData] = useState(initialData);
// // // //   const [currentStep, setCurrentStep] = useState(0);
// // // //   const [isPlaying, setIsPlaying] = useState(false);
// // // //   const [intervalId, setIntervalId] = useState(null);
// // // //   const lastExplanationRef = useRef(null);

// // // //   useEffect(() => {
// // // //     if (lastExplanationRef.current) {
// // // //       lastExplanationRef.current.scrollIntoView({ behavior: 'smooth' });
// // // //     }
// // // //   }, [currentStep]);

// // // //   useEffect(() => {
// // // //     return () => {
// // // //       if (intervalId) clearInterval(intervalId);
// // // //     };
// // // //   }, [intervalId]);

// // // //   const playSlideshow = () => {
// // // //     if (isPlaying) return;
// // // //     const id = setInterval(() => {
// // // //       setCurrentStep((prevStep) => (prevStep + 1) % jsonData.length);
// // // //     }, 3000);
// // // //     setIntervalId(id);
// // // //     setIsPlaying(true);
// // // //   };

// // // //   const pauseSlideshow = () => {
// // // //     if (intervalId) clearInterval(intervalId);
// // // //     setIsPlaying(false);
// // // //   };

// // // //   const nextStep = () => {
// // // //     setCurrentStep((prevStep) => (prevStep + 1) % jsonData.length);
// // // //   };

// // // //   const prevStep = () => {
// // // //     setCurrentStep((prevStep) => (prevStep - 1 + jsonData.length) % jsonData.length);
// // // //   };

// // // //   const renderContent = (content) => {
// // // //     if (typeof content === 'string') {
// // // //       if (content.startsWith('<svg')) {
// // // //         return <div dangerouslySetInnerHTML={{ __html: content }} />;
// // // //       }
// // // //       return <p>{content}</p>;
// // // //     }
// // // //     return null;
// // // //   };

// // // //   if (!jsonData || jsonData.length === 0) {
// // // //     return <p>No data available.</p>;
// // // //   }

// // // //   return (
// // // //     <div className={styles.container}>
// // // //       <div className={styles.content}>
// // // //         <div className={styles.stepContent}>
// // // //           <h3>Step {currentStep + 1}</h3>
// // // //           <div className={styles.stepContentInner}>
// // // //             {renderContent(jsonData[currentStep].content)}
// // // //           </div>
// // // //         </div>
// // // //         <div className={styles.explanations}>
// // // //           <div className={styles.explanationsInner}>
// // // //             {jsonData.slice(0, currentStep + 1).map((step, index) => (
// // // //               <div 
// // // //                 key={index} 
// // // //                 className={styles.step}
// // // //                 ref={index === currentStep ? lastExplanationRef : null}
// // // //               >
// // // //                 <h4>Step {index + 1}</h4>
// // // //                 <p>{step.explanation}</p>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //       <div className={styles.stepCount}>
// // // //         Step {currentStep + 1} / {jsonData.length}
// // // //       </div>
// // // //       <div className={styles.controls}>
// // // //         <button onClick={prevStep} className={styles.button}>Prev</button>
// // // //         <button onClick={isPlaying ? pauseSlideshow : playSlideshow} className={styles.button}>
// // // //           {isPlaying ? 'Pause' : 'Play'}
// // // //         </button>
// // // //         <button onClick={nextStep} className={styles.button}>Next</button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default MathSolutionSlideshow;
// // // 'use client';

// // // import React, { useState, useEffect, useRef } from 'react';
// // // import styles from './MathSolutionSlideshow.module.css';

// // // const MathSolutionSlideshow = ({ initialData }) => {
// // //   const [jsonData] = useState(initialData);
// // //   const [currentStep, setCurrentStep] = useState(0);
// // //   const [isPlaying, setIsPlaying] = useState(false);
// // //   const [intervalId, setIntervalId] = useState(null);
// // //   const explanationsContainerRef = useRef(null);

// // //   useEffect(() => {
// // //     if (explanationsContainerRef.current) {
// // //       const container = explanationsContainerRef.current;
// // //       container.scrollTop = container.scrollHeight - container.clientHeight;
// // //     }
// // //   }, [currentStep]);

// // //   useEffect(() => {
// // //     return () => {
// // //       if (intervalId) clearInterval(intervalId);
// // //     };
// // //   }, [intervalId]);

// // //   const playSlideshow = () => {
// // //     if (isPlaying) return;
// // //     const id = setInterval(() => {
// // //       setCurrentStep((prevStep) => (prevStep + 1) % jsonData.length);
// // //     }, 3000);
// // //     setIntervalId(id);
// // //     setIsPlaying(true);
// // //   };

// // //   const pauseSlideshow = () => {
// // //     if (intervalId) clearInterval(intervalId);
// // //     setIsPlaying(false);
// // //   };

// // //   const nextStep = () => {
// // //     setCurrentStep((prevStep) => (prevStep + 1) % jsonData.length);
// // //   };

// // //   const prevStep = () => {
// // //     setCurrentStep((prevStep) => (prevStep - 1 + jsonData.length) % jsonData.length);
// // //   };

// // //   const renderContent = (content) => {
// // //     if (typeof content === 'string') {
// // //       if (content.startsWith('<svg')) {
// // //         return <div dangerouslySetInnerHTML={{ __html: content }} />;
// // //       }
// // //       return <p>{content}</p>;
// // //     }
// // //     return null;
// // //   };

// // //   if (!jsonData || jsonData.length === 0) {
// // //     return <p>No data available.</p>;
// // //   }

// // //   return (
// // //     <div className={styles.container}>
// // //       <div className={styles.content}>
// // //         <div className={styles.stepContent}>
// // //           <h3>Step {currentStep + 1}</h3>
// // //           <div className={styles.stepContentInner}>
// // //             {renderContent(jsonData[currentStep].content)}
// // //           </div>
// // //         </div>
// // //         <div className={styles.explanations} ref={explanationsContainerRef}>
// // //           <div className={styles.explanationsInner}>
// // //             {jsonData.slice(0, currentStep + 1).map((step, index) => (
// // //               <div key={index} className={styles.step}>
// // //                 <h4>Step {index + 1}</h4>
// // //                 <p>{step.explanation}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <div className={styles.stepCount}>
// // //         Step {currentStep + 1} / {jsonData.length}
// // //       </div>
// // //       <div className={styles.controls}>
// // //         <button onClick={prevStep} className={styles.button}>Prev</button>
// // //         <button onClick={isPlaying ? pauseSlideshow : playSlideshow} className={styles.button}>
// // //           {isPlaying ? 'Pause' : 'Play'}
// // //         </button>
// // //         <button onClick={nextStep} className={styles.button}>Next</button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default MathSolutionSlideshow;
// // 'use client';

// // import React, { useState, useEffect, useRef } from 'react';
// // import styles from './MathSolutionSlideshow.module.css';

// // const MathSolutionSlideshow = ({ initialData }) => {
// //   const [jsonData] = useState(initialData);
// //   const [currentStep, setCurrentStep] = useState(0);
// //   const [isPlaying, setIsPlaying] = useState(false);
// //   const [intervalId, setIntervalId] = useState(null);
// //   const explanationsContainerRef = useRef(null);

// //   useEffect(() => {
// //     if (explanationsContainerRef.current) {
// //       const container = explanationsContainerRef.current;
// //       container.scrollTop = container.scrollHeight;
// //     }
// //   }, [currentStep]);

// //   useEffect(() => {
// //     return () => {
// //       if (intervalId) clearInterval(intervalId);
// //     };
// //   }, [intervalId]);

// //   const playSlideshow = () => {
// //     if (isPlaying) return;
// //     const id = setInterval(() => {
// //       setCurrentStep((prevStep) => (prevStep + 1) % jsonData.length);
// //     }, 3000);
// //     setIntervalId(id);
// //     setIsPlaying(true);
// //   };

// //   const pauseSlideshow = () => {
// //     if (intervalId) clearInterval(intervalId);
// //     setIsPlaying(false);
// //   };

// //   const nextStep = () => {
// //     setCurrentStep((prevStep) => (prevStep + 1) % jsonData.length);
// //   };

// //   const prevStep = () => {
// //     setCurrentStep((prevStep) => (prevStep - 1 + jsonData.length) % jsonData.length);
// //   };

// //   const renderContent = (content) => {
// //     if (typeof content === 'string') {
// //       if (content.startsWith('<svg')) {
// //         return <div dangerouslySetInnerHTML={{ __html: content }} />;
// //       }
// //       return <p>{content}</p>;
// //     }
// //     return null;
// //   };

// //   if (!jsonData || jsonData.length === 0) {
// //     return <p>No data available.</p>;
// //   }

// //   return (
// //     <div className={styles.container}>
// //       <div className={styles.content}>
// //         <div className={styles.stepContent}>
// //           <h3>Step {currentStep + 1}</h3>
// //           <div className={styles.stepContentInner}>
// //             {renderContent(jsonData[currentStep].content)}
// //           </div>
// //         </div>
// //         <div className={styles.explanations}>
// //           <div className={styles.explanationsInner} ref={explanationsContainerRef}>
// //             {jsonData.slice(0, currentStep + 1).map((step, index) => (
// //               <div key={index} className={styles.step}>
// //                 <h4>Step {index + 1}</h4>
// //                 <p>{step.explanation}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //       <div className={styles.stepCount}>
// //         Step {currentStep + 1} / {jsonData.length}
// //       </div>
// //       <div className={styles.controls}>
// //         <button onClick={prevStep} className={styles.button}>Prev</button>
// //         <button onClick={isPlaying ? pauseSlideshow : playSlideshow} className={styles.button}>
// //           {isPlaying ? 'Pause' : 'Play'}
// //         </button>
// //         <button onClick={nextStep} className={styles.button}>Next</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MathSolutionSlideshow;
// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import { InlineMath, BlockMath } from 'react-katex';
// import 'katex/dist/katex.min.css';
// //import styles from './MathSolutionSlideshow.module.css';
// import styles from './Math.module.css';

// const MathSolutionSlideshow = ({ initialData }) => {
//   const [jsonData] = useState(initialData);
//   const [currentStep, setCurrentStep] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [intervalId, setIntervalId] = useState(null);
//   const explanationsContainerRef = useRef(null);

//   useEffect(() => {
//     if (explanationsContainerRef.current) {
//       const container = explanationsContainerRef.current;
//       container.scrollTop = container.scrollHeight;
//     }
//   }, [currentStep]);

//   useEffect(() => {
//     return () => {
//       if (intervalId) clearInterval(intervalId);
//     };
//   }, [intervalId]);

//   const playSlideshow = () => {
//     if (isPlaying) return;
//     const id = setInterval(() => {
//       setCurrentStep((prevStep) => (prevStep + 1) % jsonData.length);
//     }, 3000);
//     setIntervalId(id);
//     setIsPlaying(true);
//   };

//   const pauseSlideshow = () => {
//     if (intervalId) clearInterval(intervalId);
//     setIsPlaying(false);
//   };

//   const nextStep = () => {
//     setCurrentStep((prevStep) => (prevStep + 1) % jsonData.length);
//   };

//   const prevStep = () => {
//     setCurrentStep((prevStep) => (prevStep - 1 + jsonData.length) % jsonData.length);
//   };

//   const renderMathContent = (content) => {
//     if (typeof content !== 'string') return null;

//     const parts = content.split(/(\$\$[\s\S]+?\$\$|\$[\s\S]+?\$)/);
//     return parts.map((part, index) => {
//       if (part.startsWith('$$') && part.endsWith('$$')) {
//         return <BlockMath key={index} math={part.slice(2, -2)} />;
//       } else if (part.startsWith('$') && part.endsWith('$')) {
//         return <InlineMath key={index} math={part.slice(1, -1)} />;
//       } else if (part.startsWith('<svg')) {
//         return <div key={index} dangerouslySetInnerHTML={{ __html: part }} />;
//       } else {
//         return <span key={index}>{part}</span>;
//       }
//     });
//   };

//   if (!jsonData || jsonData.length === 0) {
//     return <p>No data available.</p>;
//   }

//   return (
//     <div className={styles.container}  >
//       <div className={styles.content} >
//         <div className={styles.stepContent}>
//           <h3>Step {currentStep + 1}</h3>
//           <div className={styles.stepContentInner}>
//             {renderMathContent(jsonData[currentStep].content)}
//           </div>
//         </div>
//         <div className={styles.explanations}>
//           <div className={styles.explanationsInner} ref={explanationsContainerRef}>
//             {jsonData.slice(0, currentStep + 1).map((step, index) => (
//               <div key={index} className={styles.step}>
//                 <h4>Step {index + 1}</h4>
//                 <div>{renderMathContent(step.explanation)}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className={styles.stepCount}>
//         Step {currentStep + 1} / {jsonData.length}
//       </div>
//       <div className={styles.controls}>
//         <button onClick={prevStep} className={styles.button}>Prev</button>
//         <button onClick={isPlaying ? pauseSlideshow : playSlideshow} className={styles.button}>
//           {isPlaying ? 'Pause' : 'Play'}
//         </button>
//         <button onClick={nextStep} className={styles.button}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default MathSolutionSlideshow;
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import styles from './Math.module.css';
// import styles from './MathSolutionSlideshow2.module.css'

const MathSolutionSlideshow = ({ problemData }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const explanationsContainerRef = useRef(null);

 

  useEffect(() => {
    if (explanationsContainerRef.current) {
      const container = explanationsContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  }, [currentStep]);

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  const playSlideshow = () => {
    if (isPlaying) return;
    const id = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % problemData.solution.length);
    }, 3000);
    setIntervalId(id);
    setIsPlaying(true);
  };

  const pauseSlideshow = () => {
    if (intervalId) clearInterval(intervalId);
    setIsPlaying(false);
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % problemData.solution.length);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep - 1 + problemData.solution.length) % problemData.solution.length);
  };

  const renderMathContent = (content) => {
    if (typeof content !== 'string') return null;

    const parts = content.split(/(\$\$[\s\S]+?\$\$|\$[\s\S]+?\$)/);
    return parts.map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        return <BlockMath key={index} math={part.slice(2, -2)} />;
      } else if (part.startsWith('$') && part.endsWith('$')) {
        return <InlineMath key={index} math={part.slice(1, -1)} />;
      } else if (part.startsWith('<svg')) {
        return <div key={index} dangerouslySetInnerHTML={{ __html: part }} />;
      } else {
        return <span key={index}>{part}</span>;
      }
    });
  };



  if (!problemData) {
    console.error('problemData is undefined or null');
    return <p>Error: No problem data provided.</p>;
  }

  if (!problemData.solution || !Array.isArray(problemData.solution) || problemData.solution.length === 0) {
    console.error('Invalid or empty solution data:', problemData.solution);
    return <p>Error: Invalid solution data.</p>;
  }

  return (
    <>
    <div className={styles.problem}>
    <h3 className={styles.problemTitle} >{problemData.title} </h3>
    <div>{renderMathContent(problemData.problem)}</div>
  </div>
    <div className={styles.container}>
      {/* <div className={styles.problem}>
        <h2 className={styles.problemTitle} >{problemData.title} </h2>
        <div>{renderMathContent(problemData.problem)}</div>
      </div> */}
      <div className={styles.content}>
        <div className={styles.stepContent}>
          <h3>Step {currentStep + 1}</h3>
          <div className={styles.stepContentInner}>
            {renderMathContent(problemData.solution[currentStep].content)}
          </div>
        </div>
        <div className={styles.explanations}>
          <div className={styles.explanationsInner} ref={explanationsContainerRef}>
            {problemData.solution.slice(0, currentStep + 1).map((step, index) => (
              <div key={index} className={styles.step}>
                <h4>Step {index + 1}</h4>
                <div>{renderMathContent(step.explanation)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.stepCount}>
        Step {currentStep + 1} / {problemData.solution.length}
      </div>
      <div className={styles.controls}>
        <button onClick={prevStep} className={styles.button}>Prev</button>
        <button onClick={isPlaying ? pauseSlideshow : playSlideshow} className={styles.button}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={nextStep} className={styles.button}>Next</button>
      </div>
    </div>
    </>
  );
};

export default MathSolutionSlideshow;