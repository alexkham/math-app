// // // // // // // // import React from 'react';
// // // // // // // // import styles from './FormulaWidget.module.css';

// // // // // // // // const mockFormulaData = {
// // // // // // // //   name: "Quadratic Formula",
// // // // // // // //   formula: "x = (-b ± √(b² - 4ac)) / (2a)",
// // // // // // // //   fields: {
// // // // // // // //     a: "Coefficient of x²",
// // // // // // // //     b: "Coefficient of x",
// // // // // // // //     c: "Constant term",
// // // // // // // //     "Discriminant": "b² - 4ac",
// // // // // // // //     "Solutions": "Two solutions if discriminant > 0, one solution if discriminant = 0, no real solutions if discriminant < 0"
// // // // // // // //   }
// // // // // // // // };

// // // // // // // // const FormulaWidget = () => {
// // // // // // // //   return (
// // // // // // // //     <div className={styles.widget}>
// // // // // // // //       <div className={styles.header}>
// // // // // // // //         <h2 className={styles.title}>{mockFormulaData.name}</h2>
// // // // // // // //       </div>
// // // // // // // //       <div className={styles.content}>
// // // // // // // //         <div className={styles.formulaContainer}>
// // // // // // // //           <h3 className={styles.formulaTitle}>Formula:</h3>
// // // // // // // //           <div className={styles.formula}>
// // // // // // // //             {mockFormulaData.formula}
// // // // // // // //           </div>
// // // // // // // //         </div>
        
// // // // // // // //         <div className={styles.fieldsContainer}>
// // // // // // // //           {Object.entries(mockFormulaData.fields).map(([field, description]) => (
// // // // // // // //             <div key={field} className={styles.fieldPanel}>
// // // // // // // //               <div className={styles.fieldHeader}>
// // // // // // // //                 <h3 className={styles.fieldTitle}>{field}</h3>
// // // // // // // //               </div>
// // // // // // // //               <div className={styles.fieldContent}>
// // // // // // // //                 <p>{description}</p>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default FormulaWidget;
// // // // // // // import React from 'react';
// // // // // // // import styles from './FormulaWidget.module.css';

// // // // // // // const mockFormulaData = {
// // // // // // //   name: "Quadratic Formula",
// // // // // // //   formula: "x = (-b ± √(b² - 4ac)) / (2a)",
// // // // // // //   fields: {
// // // // // // //     a: "Coefficient of x²",
// // // // // // //     b: "Coefficient of x",
// // // // // // //     c: "Constant term",
// // // // // // //     "Discriminant": "b² - 4ac",
// // // // // // //     "Solutions": `Two solutions if discriminant > 0, one solution
    
// // // // // // //    
// // // // // // //     lorem
// // // // // // //     lorem
// // // // // // //     lorem
// // // // // // //     lorem
// // // // // // //     lorem
// // // // // // //     lorem
// // // // // // //     lorem
// // // // // // //     lorem
// // // // // // //     lorem
// // // // // // //     lorem
// // // // // // //     lorem
// // // // // // //     lorem
// // // // // // //     lorem
// // // // // // //     lorem
// // // // // // //   
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem\n
// // // // // // //     lorem
// // // // // // //     lorem
// // // // // // //     lorem
// // // // // // //     lorem
// // // // // // //     lorem
// // // // // // //     lorem
// // // // // // //     lorem
// // // // // // //     lorem
    
// // // // // // //     if discriminant = 0, no real solutions if discriminant < 0\n\n\n\n
    
// // // // // // //     `,
// // // // // // //     "new field":`something`,
// // // // // // //     "new field1":`something`,
// // // // // // //     "new field2":`something`,
// // // // // // //     "new field3":`something`,
// // // // // // //     "new field4":`something`,
// // // // // // //     "new field5":`something`,
// // // // // // //     "new field6":`something`,
// // // // // // //     "new field7":`something`,
// // // // // // //     "new field8":`something`,
// // // // // // //     "new field9":`something`,
// // // // // // //     "new field10":`something`,
// // // // // // //   }
// // // // // // // };

// // // // // // // const FormulaWidget = () => {
// // // // // // //   return (
// // // // // // //     <div className={styles.widget}>
// // // // // // //       <div className={styles.header}>
// // // // // // //         <h2 className={styles.title}>{mockFormulaData.name}</h2>
// // // // // // //       </div>
// // // // // // //       <div className={styles.content}>
// // // // // // //         <div className={styles.formulaContainer}>
// // // // // // //           <h3 className={styles.formulaTitle}>Formula:</h3>
// // // // // // //           <div className={styles.formula}>
// // // // // // //             {mockFormulaData.formula}
// // // // // // //           </div>
// // // // // // //         </div>
        
// // // // // // //         <div className={styles.tabsContainer}>
// // // // // // //           {Object.entries(mockFormulaData.fields).map(([field, description], index) => (
// // // // // // //             <React.Fragment key={field}>
// // // // // // //               <input type="radio" name="tabs" id={`tab${index}`} className={styles.tabInput} defaultChecked={index === 0} />
// // // // // // //               <label htmlFor={`tab${index}`} className={styles.tabLabel}>{field}</label>
// // // // // // //               <div className={styles.tabContent}>
// // // // // // //                 <p>{description}</p>
// // // // // // //               </div>
// // // // // // //             </React.Fragment>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default FormulaWidget;
// // // // // // import React from 'react';
// // // // // // import styles from './FormulaWidget.module.css';

// // // // // // const mockFormulaData = {
// // // // // //   name: "Quadratic Formula",
// // // // // //   formula: "x = (-b ± √(b² - 4ac)) / (2a)",
// // // // // //   fields: {
// // // // // //     a: "Coefficient of x²",
// // // // // //     b: "Coefficient of x",
// // // // // //     c: "Constant term",
// // // // // //     "Discriminant": "b² - 4ac",
// // // // // //     "Solutions": "Two solutions if discriminant > 0, one solution if discriminant = 0, no real solutions if discriminant < 0"
// // // // // //   }
// // // // // // };

// // // // // // const FormulaWidget = () => {
// // // // // //   return (
// // // // // //     <div className={styles.widget}>
// // // // // //       <div className={styles.header}>
// // // // // //         <h2 className={styles.title}>{mockFormulaData.name}</h2>
// // // // // //       </div>
// // // // // //       <div className={styles.content}>
// // // // // //         <div className={styles.formulaContainer}>
// // // // // //           <h3 className={styles.formulaTitle}>Formula:</h3>
// // // // // //           <div className={styles.formula}>
// // // // // //             {mockFormulaData.formula}
// // // // // //           </div>
// // // // // //         </div>
        
// // // // // //         <div className={styles.tabsContainer}>
// // // // // //           <div className={styles.tabLabels}>
// // // // // //             {Object.keys(mockFormulaData.fields).map((field, index) => (
// // // // // //               <React.Fragment key={field}>
// // // // // //                 <input type="radio" name="tabs" id={`tab${index}`} className={styles.tabInput} defaultChecked={index === 0} />
// // // // // //                 <label htmlFor={`tab${index}`} className={styles.tabLabel}>{field}</label>
// // // // // //               </React.Fragment>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //           <div className={styles.tabContents}>
// // // // // //             {Object.entries(mockFormulaData.fields).map(([field, description], index) => (
// // // // // //               <div key={field} className={styles.tabContent}>
// // // // // //                 <p>{description}</p>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default FormulaWidget;
// // // // // import React from 'react';
// // // // // import styles from './FormulaWidget.module.css';

// // // // // // const mockFormulaData = {
// // // // // //   name: "Mathematical Formulas",
// // // // // //   fields: [
// // // // // //     "Quadratic", "Pythagorean", "Euler's Identity", "Einstein's Mass-Energy",
// // // // // //     "Logarithmic", "Trigonometric", "Exponential Growth", "Fibonacci Sequence",
// // // // // //     "Taylor Series", "Fourier Transform", "Navier-Stokes", "Schrödinger Equation",
// // // // // //     "Maxwell's Equations", "Relativity", "Ideal Gas Law", "Thermodynamic Laws",
// // // // // //     "Bernoulli's Equation", "Wave Equation", "Laplace Transform", "Lorentz Factor"
// // // // // //   ]
// // // // // // };

// // // // // const mockFormulaData = {
// // // // //   name: "Quadratic Formula",
// // // // //   formula: "x = (-b ± √(b² - 4ac)) / (2a)",
// // // // //   fields: {
// // // // //     a: "Coefficient of x²",
// // // // //     b: "Coefficient of x",
// // // // //     c: "Constant term",
// // // // //     "Discriminant": "b² - 4ac",
// // // // //     "Solutions": "Two solutions if discriminant > 0, one solution if discriminant = 0, no real solutions if discriminant < 0"
// // // // //   }
// // // // // };


// // // // // const FormulaWidget = () => {
// // // // //   return (
// // // // //     <div className={styles.widget}>
// // // // //       <div className={styles.header}>
// // // // //         <h2 className={styles.title}>{mockFormulaData.name}</h2>
// // // // //       </div>
// // // // //       <div className={styles.content}>
// // // // //         <div className={styles.tabsContainer}>
// // // // //           <div className={styles.tabLabels}>
// // // // //             {mockFormulaData.fields.map((field, index) => (
// // // // //               <label key={field} className={styles.tabLabel}>
// // // // //                 <input 
// // // // //                   type="radio" 
// // // // //                   name="tabs" 
// // // // //                   className={styles.tabInput} 
// // // // //                   defaultChecked={index === 0} 
// // // // //                 />
// // // // //                 {field}
// // // // //               </label>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default FormulaWidget;
// // // // import React from 'react';
// // // // import styles from './FormulaWidget.module.css';

// // // // const mockFormulaData = {
// // // //   name: "Mathematical Formulas",
// // // //   fields: {
// // // //     "Quadratic": "x = (-b ± √(b² - 4ac)) / (2a)",
// // // //     "Pythagorean": "a² + b² = c²",
// // // //     "Euler's Identity": "e^(iπ) + 1 = 0",
// // // //     "Einstein's Mass-Energy": "E = mc²",
// // // //     "Logarithmic": "log_b(x) = y ⇔ b^y = x",
// // // //     "Trigonometric": "sin²θ + cos²θ = 1",
// // // //     "Exponential Growth": "A = P(1 + r)^t",
// // // //     "Fibonacci Sequence": "F_n = F_(n-1) + F_(n-2)",
// // // //     "Taylor Series": "f(x) = f(a) + f'(a)(x-a) + f''(a)(x-a)²/2! + ...",
// // // //     "Fourier Transform": "F(ω) = ∫f(t)e^(-iωt)dt",
// // // //     "Navier-Stokes": "ρ(∂u/∂t + u·∇u) = -∇p + μ∇²u + f",
// // // //     "Schrödinger Equation": "iℏ∂Ψ/∂t = ĤΨ",
// // // //     "Maxwell's Equations": "∇ · E = ρ/ε₀, ∇ × E = -∂B/∂t, ...",
// // // //     "Relativity": "E² = (mc²)² + (pc)²",
// // // //     "Ideal Gas Law": "PV = nRT",
// // // //     "Thermodynamic Laws": "dU = dQ - dW",
// // // //     "Bernoulli's Equation": "P + ½ρv² + ρgh = constant",
// // // //     "Wave Equation": "∂²u/∂t² = c²∇²u",
// // // //     "Laplace Transform": "F(s) = ∫₀^∞ f(t)e^(-st)dt",
// // // //     "Lorentz Factor": "γ = 1 / √(1 - v²/c²)"
// // // //   }
// // // // };

// // // // const FormulaWidget = () => {
// // // //   return (
// // // //     <div className={styles.widget}>
// // // //       <h2 className={styles.title}>{mockFormulaData.name}</h2>
// // // //       <div className={styles.tabsContainer}>
// // // //         {Object.entries(mockFormulaData.fields).map(([field, formula], index) => (
// // // //           <div key={field}>
// // // //             <input 
// // // //               type="radio" 
// // // //               id={`tab-${index}`} 
// // // //               name="tabs" 
// // // //               className={styles.tabInput}
// // // //               defaultChecked={index === 0}
// // // //             />
// // // //             <label htmlFor={`tab-${index}`} className={styles.tabLabel}>
// // // //               {field}
// // // //             </label>
// // // //             <div className={styles.tabContent}>
// // // //               {formula}
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default FormulaWidget;
// // // import React from 'react';
// // // import styles from './FormulaWidget.module.css';

// // // const mockFormulaData = {
// // //   name: "Quadratic Formula",
// // //   formula: "x = (-b ± √(b² - 4ac)) / (2a)",
// // //   fields: {
// // //     a: "Coefficient of x²",
// // //     b: "Coefficient of x",
// // //     c: "Constant term",
// // //     "Discriminant": `b² - 4ac
// // //   
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem\n
// // //     lorem
// // //     lorem
// // //     lorem
// // //     lorem
// // //     lorem
// // //     `,
// // //     "Solutions": "Two solutions if discriminant > 0, one solution if discriminant = 0, no real solutions if discriminant < 0",
// // //     "Solutions1": "2Two solutions if discriminant > 0, one solution if discriminant = 0, no real solutions if discriminant < 0",
// // //     "Solutions2": "3Two solutions if discriminant > 0, one solution if discriminant = 0, no real solutions if discriminant < 0",
// // //     "Solutions3": "Two solutions if discriminant > 0, one solution if discriminant = 0, no real solutions if discriminant < 0",
// // //     "Solutions4": "Two solutions if discriminant > 0, one solution if discriminant = 0, no real solutions if discriminant < 0",
// // //     "Solutions5": "Two solutions if discriminant > 0, one solution if discriminant = 0, no real solutions if discriminant < 0",
// // //     "Solutions6": "Two solutions if discriminant > 0, one solution if discriminant = 0, no real solutions if discriminant < 0",
// // //     "Solutions7": "Two solutions if discriminant > 0, one solution if discriminant = 0, no real solutions if discriminant < 0",
// // //     "Solutions8": "Two solutions if discriminant > 0, one solution if discriminant = 0, no real solutions if discriminant < 0",
// // //     "Solutions9": "Two solutions if discriminant > 0, one solution if discriminant = 0, no real solutions if discriminant < 0",
// // //   }
// // // };

// // // const FormulaWidget = ({title=mockFormulaData.name}) => {
// // //   return (
// // //     <div className={styles.widget}>
// // //       <div className={styles.header}>
// // //         <h2 className={styles.title}>{title}</h2>
// // //       </div>
// // //       <div className={styles.content}>
// // //         <div className={styles.formulaContainer}>
// // //           <h3 className={styles.formulaTitle}>Formula:</h3>
// // //           <div className={styles.formula}>
// // //             {mockFormulaData.formula}
// // //           </div>
// // //         </div>


// // //         {/* <div className={styles.tabsContainer}>
// // //         <div className={styles.tabLabels}>
// // //             {Object.entries(mockFormulaData.fields).map(([field, description], index) => (
// // //             <React.Fragment key={field}>
// // //                 <input type="radio" name="tabs" id={`tab${index}`} className={styles.tabInput} defaultChecked={index === 0} />
// // //                 <label htmlFor={`tab${index}`} className={styles.tabLabel}>{field}</label>
// // //             </React.Fragment>
// // //             ))}
// // //         </div>
// // //   {Object.entries(mockFormulaData.fields).map(([field, description], index) => (
// // //     <div key={field} className={styles.tabContent}>
// // //       <p>{description}</p>
// // //     </div>
// // //   ))}
// // // </div> */}
        
// // //         <div className={styles.tabsContainer}>
// // //           {Object.entries(mockFormulaData.fields).map(([field, description], index) => (
// // //             <React.Fragment key={field}>
// // //               <input type="radio" name="tabs" id={`tab${index}`} className={styles.tabInput} defaultChecked={index === 0} />
// // //               <label htmlFor={`tab${index}`} className={styles.tabLabel}>{field}</label>
// // //               <div className={styles.tabContent}>
// // //                 <p>{description}</p>
// // //               </div>
// // //             </React.Fragment>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default FormulaWidget;
// // import React from 'react';
// // import { InlineMath, BlockMath } from 'react-katex';
// // import 'katex/dist/katex.min.css';
// // import styles from './FormulaWidget.module.css';

// // const createSlug = (text) => {
// //   const cleanText = text.replace(/\s*\(.*?\)\s*/g, '').trim();
// //   return cleanText.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '_');
// // };

// // const renderMathContent = (content) => {
// //   if (typeof content !== 'string') return content;

// //   const parts = content.split(/(\$\$[\s\S]+?\$\$|\$[\s\S]+?\$)/);
// //   return parts.map((part, index) => {
// //     if (part.startsWith('$$') && part.endsWith('$$')) {
// //       return <BlockMath key={index} math={part.slice(2, -2)} />;
// //     } else if (part.startsWith('$') && part.endsWith('$')) {
// //       return <InlineMath key={index} math={part.slice(1, -1)} />;
// //     } else {
// //       return <span key={index}>{part}</span>;
// //     }
// //   });
// // };

// // const parseHTMLContent = (content) => {
// //   if (typeof content !== 'string') return content;

// //   if (content.trim().startsWith('<') && content.trim().endsWith('>')) {
// //     return <div dangerouslySetInnerHTML={{ __html: content }} />;
// //   }

// //   return content;
// // };

// // const processContent = (content) => {
// //   const svgs = [];
// //   const contentWithPlaceholders = content.replace(/<svg[\s\S]*?<\/svg>/g, (match) => {
// //     svgs.push(match);
// //     return `__SVG_PLACEHOLDER_${svgs.length - 1}__`;
// //   });

// //   const lines = contentWithPlaceholders.split('\n');
// //   let inList = false;
// //   let currentListItem = [];
// //   const elements = [];

// //   const processPart = (part, index) => {
// //     if (part.startsWith('__SVG_PLACEHOLDER_')) {
// //       const svgIndex = parseInt(part.match(/__SVG_PLACEHOLDER_(\d+)__/)[1]);
// //       return <div key={`svg-${index}`} dangerouslySetInnerHTML={{ __html: svgs[svgIndex] }} />;
// //     } else if (part.startsWith('**') && part.endsWith('**')) {
// //       return <strong key={`strong-${index}`}>{part.slice(2, -2)}</strong>;
// //     } else if (part.startsWith('$$') && part.endsWith('$$')) {
// //       return <BlockMath key={`block-math-${index}`} math={part.slice(2, -2)} />;
// //     } else if (part.startsWith('$') && part.endsWith('$')) {
// //       return <InlineMath key={`inline-math-${index}`} math={part.slice(1, -1)} />;
// //     } else if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
// //       const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
// //       if (linkMatch) {
// //         const [, text, url] = linkMatch;
// //         return <a key={`link-${index}`} href={url} target="_blank" rel="noopener noreferrer">{text}</a>;
// //       }
// //     } else if (part.trim().startsWith('<') && part.trim().endsWith('>')) {
// //       return parseHTMLContent(part);
// //     }
// //     return part;
// //   };

// //   lines.forEach((line, lineIndex) => {
// //     const tabCount = line.match(/^\t*/)[0].length;
// //     const trimmedLine = line.replace(/^\t+/, '');
    
// //     const parts = trimmedLine.split(/(__SVG_PLACEHOLDER_\d+__|\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\))/);
// //     const processedParts = parts.map((part, partIndex) => processPart(part, `${lineIndex}-${partIndex}`));

// //     if (trimmedLine.startsWith('- ')) {
// //       if (inList && currentListItem.length > 0) {
// //         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// //         currentListItem = [];
// //       }
// //       inList = true;
// //       currentListItem.push(
// //         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// //           {processedParts.slice(1)}
// //         </span>
// //       );
// //     } else if (inList) {
// //       if (trimmedLine === '') {
// //         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// //         currentListItem = [];
// //         inList = false;
// //         elements.push(<br key={`br-${elements.length}`} />);
// //       } else {
// //         currentListItem.push(<br key={`br-${currentListItem.length}`} />);
// //         currentListItem.push(
// //           <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// //             {processedParts}
// //           </span>
// //         );
// //       }
// //     } else {
// //       elements.push(
// //         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// //           {processedParts}
// //         </span>
// //       );
// //       if (lineIndex < lines.length - 1) {
// //         elements.push(<br key={`br-${elements.length}`} />);
// //       }
// //     }
// //   });

// //   if (inList && currentListItem.length > 0) {
// //     elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// //   }

// //   const hasListItems = elements.some(el => el.type === 'li');
// //   return hasListItems ? <ul>{elements}</ul> : <>{elements}</>;
// // };

// // const FormulaWidget = ({ data }) => {
// //   return (
// //     <div className={styles.widget}>
// //       <div className={styles.header}>
// //         <h2 className={styles.title}>{renderMathContent(data.name)}</h2>
// //       </div>
// //       <div className={styles.content}>
// //         <div className={styles.formulaContainer}>
// //           <h3 className={styles.formulaTitle}>Formula:</h3>
// //           <div className={styles.formula}>
// //             {renderMathContent(data.formula)}
// //           </div>
// //         </div>
        
// //         <div className={styles.tabsContainer}>
// //           {Object.entries(data.fields).map(([field, description], index) => (
// //             <React.Fragment key={field}>
// //               <input type="radio" name="tabs" id={`tab${index}`} className={styles.tabInput} defaultChecked={index === 0} />
// //               <label htmlFor={`tab${index}`} className={styles.tabLabel}>{renderMathContent(field)}</label>
// //               <div className={styles.tabContent}>
// //                 {processContent(description)}
// //               </div>
// //             </React.Fragment>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FormulaWidget;
// import React from 'react';
// import { InlineMath, BlockMath } from 'react-katex';
// import 'katex/dist/katex.min.css';
// import styles from './FormulaWidget.module.css';
// import { lora700, poppins500 } from '@/app/utils/fonts';

// const createSlug = (text) => {
//   const cleanText = text.replace(/\s*\(.*?\)\s*/g, '').trim();
//   return cleanText.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '_');
// };

// const renderMathContent = (content) => {
//   if (typeof content !== 'string') return content;

//   const parts = content.split(/(\$\$[\s\S]+?\$\$|\$[\s\S]+?\$)/);
//   return parts.map((part, index) => {
//     if (part.startsWith('$$') && part.endsWith('$$')) {
//       return <BlockMath key={index} math={part.slice(2, -2)} />;
//     } else if (part.startsWith('$') && part.endsWith('$')) {
//       return <InlineMath key={index} math={part.slice(1, -1)} />;
//     } else {
//       return <span key={index}>{part}</span>;
//     }
//   });
// };

// const parseHTMLContent = (content) => {
//   if (typeof content !== 'string') return content;

//   if (content.trim().startsWith('<') && content.trim().endsWith('>')) {
//     return <div dangerouslySetInnerHTML={{ __html: content }} />;
//   }

//   return content;
// };

// const processContent = (content) => {
//   const svgs = [];
//   const contentWithPlaceholders = content.replace(/<svg[\s\S]*?<\/svg>/g, (match) => {
//     svgs.push(match);
//     return `__SVG_PLACEHOLDER_${svgs.length - 1}__`;
//   });

//   const lines = contentWithPlaceholders.split('\n');
//   let inList = false;
//   let currentListItem = [];
//   const elements = [];

//   const processPart = (part, index) => {
//     if (part.startsWith('__SVG_PLACEHOLDER_')) {
//       const svgIndex = parseInt(part.match(/__SVG_PLACEHOLDER_(\d+)__/)[1]);
//       return <div key={`svg-${index}`} dangerouslySetInnerHTML={{ __html: svgs[svgIndex] }} />;
//     } else if (part.startsWith('**') && part.endsWith('**')) {
//       return <strong key={`strong-${index}`}>{part.slice(2, -2)}</strong>;
//     } else if (part.startsWith('$$') && part.endsWith('$$')) {
//       return <BlockMath key={`block-math-${index}`} math={part.slice(2, -2)} />;
//     } else if (part.startsWith('$') && part.endsWith('$')) {
//       return <InlineMath key={`inline-math-${index}`} math={part.slice(1, -1)} />;
//     } else if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
//       const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
//       if (linkMatch) {
//         const [, text, url] = linkMatch;
//         return <a key={`link-${index}`} href={url} target="_blank" rel="noopener noreferrer">{text}</a>;
//       }
//     } else if (part.trim().startsWith('<') && part.trim().endsWith('>')) {
//       return parseHTMLContent(part);
//     }
//     return part;
//   };

//   lines.forEach((line, lineIndex) => {
//     const tabCount = line.match(/^\t*/)[0].length;
//     const trimmedLine = line.replace(/^\t+/, '');
    
//     const parts = trimmedLine.split(/(__SVG_PLACEHOLDER_\d+__|\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\))/);
//     const processedParts = parts.map((part, partIndex) => processPart(part, `${lineIndex}-${partIndex}`));

//     if (trimmedLine.startsWith('- ')) {
//       if (inList && currentListItem.length > 0) {
//         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
//         currentListItem = [];
//       }
//       inList = true;
//       currentListItem.push(
//         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
//           {processedParts.slice(1)}
//         </span>
//       );
//     } else if (inList) {
//       if (trimmedLine === '') {
//         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
//         currentListItem = [];
//         inList = false;
//         elements.push(<br key={`br-${elements.length}`} />);
//       } else {
//         currentListItem.push(<br key={`br-${currentListItem.length}`} />);
//         currentListItem.push(
//           <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
//             {processedParts}
//           </span>
//         );
//       }
//     } else {
//       elements.push(
//         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
//           {processedParts}
//         </span>
//       );
//       if (lineIndex < lines.length - 1) {
//         elements.push(<br key={`br-${elements.length}`} />);
//       }
//     }
//   });

//   if (inList && currentListItem.length > 0) {
//     elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
//   }

//   const hasListItems = elements.some(el => el.type === 'li');
//   return hasListItems ? <ul>{elements}</ul> : <>{elements}</>;
// };

// const FormulaWidget = ({ data, title = data.name }) => {
//   return (
//     <div className={styles.widget}>
//       <div className={styles.header}>
//         <h2 className={`${styles.title} ${lora700.className}`}>{renderMathContent(title)}</h2>
//       </div>
//       <div className={`${styles.content} ${poppins500.className}`}>
//         <div className={styles.formulaContainer}>
//           <h3 className={styles.formulaTitle}>Formula:</h3>
//           <div className={styles.formula}>
//             {renderMathContent(data.formula)}
//           </div>
//         </div>
        
//         <div className={styles.tabsContainer}>
//           {Object.entries(data.fields).map(([field, description], index) => (
//             <React.Fragment key={field}>
//               <input type="radio" name="tabs" id={`tab${index}`} className={styles.tabInput} defaultChecked={index === 0} />
//               <label htmlFor={`tab${index}`} className={styles.tabLabel}>{renderMathContent(field)}</label>
//               <div className={styles.tabContent}>
//                 {processContent(description)}
//               </div>
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormulaWidget;
import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import styles from './FormulaWidget.module.css';
import { lora700, poppins500 } from '@/app/utils/fonts';

const createSlug = (text) => {
  const cleanText = text.replace(/\s*\(.*?\)\s*/g, '').trim();
  return cleanText.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '_');
};

const renderMathContent = (content) => {
  if (typeof content !== 'string') return content;

  const parts = content.split(/(\$\$[\s\S]+?\$\$|\$[\s\S]+?\$)/);
  return parts.map((part, index) => {
    if (part.startsWith('$$') && part.endsWith('$$')) {
      return <BlockMath key={index} math={part.slice(2, -2)} />;
    } else if (part.startsWith('$') && part.endsWith('$')) {
      return <InlineMath key={index} math={part.slice(1, -1)} />;
    } else {
      return <span key={index}>{part}</span>;
    }
  });
};

const parseHTMLContent = (content) => {
  if (typeof content !== 'string') return content;

  if (content.trim().startsWith('<') && content.trim().endsWith('>')) {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return content;
};

const processContent = (content) => {
  const svgs = [];
  const contentWithPlaceholders = content.replace(/<svg[\s\S]*?<\/svg>/g, (match) => {
    svgs.push(match);
    return `__SVG_PLACEHOLDER_${svgs.length - 1}__`;
  });

  const lines = contentWithPlaceholders.split('\n');
  let inList = false;
  let currentListItem = [];
  const elements = [];

  const processPart = (part, index) => {
    if (part.startsWith('__SVG_PLACEHOLDER_')) {
      const svgIndex = parseInt(part.match(/__SVG_PLACEHOLDER_(\d+)__/)[1]);
      return <div key={`svg-${index}`} dangerouslySetInnerHTML={{ __html: svgs[svgIndex] }} />;
    } else if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`strong-${index}`}>{part.slice(2, -2)}</strong>;
    } else if (part.startsWith('$$') && part.endsWith('$$')) {
      return <BlockMath key={`block-math-${index}`} math={part.slice(2, -2)} />;
    } else if (part.startsWith('$') && part.endsWith('$')) {
      return <InlineMath key={`inline-math-${index}`} math={part.slice(1, -1)} />;
    } else if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
      const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
      if (linkMatch) {
        const [, text, url] = linkMatch;
        return <a key={`link-${index}`} href={url} target="_blank" rel="noopener noreferrer">{text}</a>;
      }
    } else if (part.trim().startsWith('<') && part.trim().endsWith('>')) {
      return parseHTMLContent(part);
    }
    return part;
  };

  lines.forEach((line, lineIndex) => {
    const tabCount = line.match(/^\t*/)[0].length;
    const trimmedLine = line.replace(/^\t+/, '');
    
    const parts = trimmedLine.split(/(__SVG_PLACEHOLDER_\d+__|\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\))/);
    const processedParts = parts.map((part, partIndex) => processPart(part, `${lineIndex}-${partIndex}`));

    if (trimmedLine.startsWith('- ')) {
      if (inList && currentListItem.length > 0) {
        elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
        currentListItem = [];
      }
      inList = true;
      currentListItem.push(
        <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
          {processedParts.slice(1)}
        </span>
      );
    } else if (inList) {
      if (trimmedLine === '') {
        elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
        currentListItem = [];
        inList = false;
        elements.push(<br key={`br-${elements.length}`} />);
      } else {
        currentListItem.push(<br key={`br-${currentListItem.length}`} />);
        currentListItem.push(
          <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
            {processedParts}
          </span>
        );
      }
    } else {
      elements.push(
        <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
          {processedParts}
        </span>
      );
      if (lineIndex < lines.length - 1) {
        elements.push(<br key={`br-${elements.length}`} />);
      }
    }
  });

  if (inList && currentListItem.length > 0) {
    elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
  }

  const hasListItems = elements.some(el => el.type === 'li');
  return hasListItems ? <ul>{elements}</ul> : <>{elements}</>;
};

const FormulaWidget = ({ data, title = data.name }) => {
  return (
    <div>
      {data.before && (
        <div 
          className={`${styles.beforeContent} ${poppins500.className}`}
          // dangerouslySetInnerHTML={{ __html: data.before }}
        >{processContent(data.before)}</div>
      )}
    <div className={styles.widget}>
      
      <br />
      <br />
      <div className={styles.header}>
        <h2 className={`${styles.title} ${lora700.className}`}>{renderMathContent(title)}</h2>
      </div>
      <div className={`${styles.content} ${poppins500.className}`}>
        <div className={styles.formulaContainer}>
          <h3 className={styles.formulaTitle}>Formula:</h3>
          <div className={styles.formula}>
            {renderMathContent(data.formula)}
          </div>
        </div>
        
        <div className={styles.tabsContainer}>
          {Object.entries(data.fields).map(([field, description], index) => (
            <React.Fragment key={field}>
              <input type="radio" name="tabs" id={`tab${index}`} className={styles.tabInput} defaultChecked={index === 0} />
              <label htmlFor={`tab${index}`} className={styles.tabLabel}>{renderMathContent(field)}</label>
              <div className={styles.tabContent}>
                {processContent(description)}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
     
    </div>
    {data.after && (
        <div 
          className={`${styles.afterContent} ${poppins500.className}`}
          // dangerouslySetInnerHTML={{ __html: data.after }}
          
        >{processContent(data.after)}</div>
      )}
    </div>
  );
};

export default FormulaWidget;