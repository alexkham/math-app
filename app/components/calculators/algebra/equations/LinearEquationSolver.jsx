


// // // // // import { useState, useRef } from 'react';
// // // // // import styles from './LinearEquationSolver.module.css';

// // // // // const LinearEquationSolver = () => {
// // // // //   const [equation, setEquation] = useState('');
// // // // //   const [solution, setSolution] = useState(null);
// // // // //   const [error, setError] = useState('');
// // // // //   const [steps, setSteps] = useState([]);
// // // // //   const [variable, setVariable] = useState('');
// // // // //   const [history, setHistory] = useState([]);
// // // // //   const [isHistoryExpanded, setIsHistoryExpanded] = useState(false);
// // // // //   const inputRef = useRef(null);

// // // // //   const parseFraction = (str) => {
// // // // //     if (!str || str === '') return 0;
    
// // // // //     // Handle negative signs
// // // // //     const isNegative = str.startsWith('-');
// // // // //     const cleanStr = str.replace(/^[+-]/, '');
    
// // // // //     if (cleanStr.includes('/')) {
// // // // //       const parts = cleanStr.split('/');
// // // // //       if (parts.length !== 2) return NaN;
      
// // // // //       const numerator = parseFloat(parts[0]);
// // // // //       const denominator = parseFloat(parts[1]);
      
// // // // //       if (isNaN(numerator) || isNaN(denominator) || denominator === 0) {
// // // // //         return NaN;
// // // // //       }
      
// // // // //       const result = numerator / denominator;
// // // // //       return isNegative ? -result : result;
// // // // //     }
    
// // // // //     const result = parseFloat(cleanStr);
// // // // //     return isNaN(result) ? NaN : (isNegative ? -result : result);
// // // // //   };

// // // // //   const expandParentheses = (equation) => {
// // // // //     const pattern = /([+-]?\d*\.?\d*(?:\/\d+)?)\(([^)]+)\)/g;
    
// // // // //     return equation.replace(pattern, (match, coef, inside) => {
// // // // //       if (coef === '' || coef === '+') coef = '1';
// // // // //       if (coef === '-') coef = '-1';
      
// // // // //       const coefficient = parseFraction(coef);
// // // // //       if (isNaN(coefficient)) {
// // // // //         throw new Error(`Invalid coefficient: ${coef}`);
// // // // //       }
      
// // // // //       const insideNormalized = inside.replace(/(?<!^|[+-])-/g, '+-');
// // // // //       const terms = insideNormalized.split('+').filter(term => term !== '');
      
// // // // //       const expandedTerms = terms.map(term => {
// // // // //         const variableMatch = term.match(/[a-z]/);
// // // // //         const variable = variableMatch ? variableMatch[0] : null;
        
// // // // //         if (variable) {
// // // // //           const coeffStr = term.replace(/[a-z]/g, '');
// // // // //           let termCoeff = 1;
          
// // // // //           if (coeffStr === '' || coeffStr === '+') {
// // // // //             termCoeff = 1;
// // // // //           } else if (coeffStr === '-') {
// // // // //             termCoeff = -1;
// // // // //           } else {
// // // // //             termCoeff = parseFraction(coeffStr);
// // // // //             if (isNaN(termCoeff)) {
// // // // //               throw new Error(`Invalid term coefficient: ${coeffStr}`);
// // // // //             }
// // // // //           }
          
// // // // //           const result = coefficient * termCoeff;
          
// // // // //           if (result === 1) {
// // // // //             return variable;
// // // // //           } else if (result === -1) {
// // // // //             return `-${variable}`;
// // // // //           } else {
// // // // //             return `${result}${variable}`;
// // // // //           }
// // // // //         } else {
// // // // //           const constValue = parseFraction(term);
// // // // //           if (isNaN(constValue)) {
// // // // //             throw new Error(`Invalid constant term: ${term}`);
// // // // //           }
// // // // //           return (coefficient * constValue).toString();
// // // // //         }
// // // // //       });
      
// // // // //       let result = expandedTerms[0];
// // // // //       for (let i = 1; i < expandedTerms.length; i++) {
// // // // //         const term = expandedTerms[i];
// // // // //         if (term.startsWith('-')) {
// // // // //           result += term;
// // // // //         } else {
// // // // //           result += '+' + term;
// // // // //         }
// // // // //       }
      
// // // // //       return result;
// // // // //     });
// // // // //   };

// // // // //   const parseLinearEquation = (eq) => {
// // // // //     let cleanEq = eq.replace(/\s+/g, '').toLowerCase();
// // // // //     cleanEq = expandParentheses(cleanEq);
    
// // // // //     if (!cleanEq.includes('=')) {
// // // // //       throw new Error('Equation must contain an equals sign (=)');
// // // // //     }
    
// // // // //     const sides = cleanEq.split('=');
// // // // //     if (sides.length !== 2) {
// // // // //       throw new Error('Equation must have exactly one equals sign');
// // // // //     }
    
// // // // //     const leftSide = sides[0];
// // // // //     const rightSide = sides[1];
    
// // // // //     if (!leftSide || !rightSide) {
// // // // //       throw new Error('Both sides of the equation must have content');
// // // // //     }
    
// // // // //     const variableMatch = cleanEq.match(/[a-z]/);
// // // // //     if (!variableMatch) {
// // // // //       throw new Error('No variable found in the equation');
// // // // //     }
// // // // //     const variable = variableMatch[0];
    
// // // // //     const parseExpression = (expr) => {
// // // // //       let coefficient = 0;
// // // // //       let constant = 0;
      
// // // // //       const normalized = expr.replace(/(?<!^)-/g, '+-');
// // // // //       const terms = normalized.split('+').filter(term => term !== '');
      
// // // // //       for (let term of terms) {
// // // // //         if (term.includes(variable)) {
// // // // //           const pattern = new RegExp(`^([+-]?\\d*\\.?\\d*(?:\\/\\d+)?)${variable}$`);
// // // // //           const coefMatch = term.match(pattern);
// // // // //           if (coefMatch) {
// // // // //             let coef = coefMatch[1];
// // // // //             if (coef === '' || coef === '+') coef = '1';
// // // // //             if (coef === '-') coef = '-1';
            
// // // // //             const parsedCoef = parseFraction(coef);
// // // // //             if (isNaN(parsedCoef)) {
// // // // //               throw new Error(`Invalid coefficient: ${coef}`);
// // // // //             }
// // // // //             coefficient += parsedCoef;
// // // // //           } else {
// // // // //             throw new Error(`Invalid term: ${term}`);
// // // // //           }
// // // // //         } else {
// // // // //           const constMatch = term.match(/^([+-]?\d*\.?\d*(?:\/\d+)?)$/);
// // // // //           if (constMatch && constMatch[1] !== '') {
// // // // //             const parsedConst = parseFraction(constMatch[1]);
// // // // //             if (isNaN(parsedConst)) {
// // // // //               throw new Error(`Invalid constant: ${constMatch[1]}`);
// // // // //             }
// // // // //             constant += parsedConst;
// // // // //           } else if (term !== '') {
// // // // //             throw new Error(`Invalid term: ${term}`);
// // // // //           }
// // // // //         }
// // // // //       }
      
// // // // //       return { coefficient, constant };
// // // // //     };
    
// // // // //     const left = parseExpression(leftSide);
// // // // //     const right = parseExpression(rightSide);
    
// // // // //     const finalCoeff = left.coefficient - right.coefficient;
// // // // //     const finalConstant = left.constant - right.constant;
    
// // // // //     return { 
// // // // //       coefficient: finalCoeff, 
// // // // //       constant: finalConstant, 
// // // // //       variable,
// // // // //       expandedEquation: cleanEq
// // // // //     };
// // // // //   };

// // // // //   const formatNumber = (num) => {
// // // // //     if (Number.isInteger(num)) {
// // // // //       return num.toString();
// // // // //     } else {
// // // // //       // Check if it's a simple fraction
// // // // //       const tolerance = 1e-10;
// // // // //       for (let denom = 2; denom <= 20; denom++) {
// // // // //         const numerator = Math.round(num * denom);
// // // // //         if (Math.abs(num - numerator / denom) < tolerance) {
// // // // //           if (numerator === denom) return '1';
// // // // //           if (numerator === -denom) return '-1';
// // // // //           return `${numerator}/${denom}`;
// // // // //         }
// // // // //       }
// // // // //       return num.toFixed(4).replace(/\.?0+$/, '');
// // // // //     }
// // // // //   };

// // // // //   const solveLinearEquation = (coefficient, constant, variable, originalEquation, leftSide, rightSide, expandedEquation) => {
// // // // //     const solutionSteps = [];
    
// // // // //     if (Math.abs(coefficient) < 1e-10) {
// // // // //       if (Math.abs(constant) < 1e-10) {
// // // // //         return { 
// // // // //           solution: 'infinitely many solutions', 
// // // // //           steps: [originalEquation, '0 = 0', `This is always true, so ${variable} can be any real number`] 
// // // // //         };
// // // // //       } else {
// // // // //         return { 
// // // // //           solution: 'no solution', 
// // // // //           steps: [originalEquation, `${formatNumber(constant)} = 0`, 'This is never true, so there is no solution'] 
// // // // //         };
// // // // //       }
// // // // //     }
    
// // // // //     const result = -constant / coefficient;
    
// // // // //     solutionSteps.push(`Original equation: ${originalEquation}`);
    
// // // // //     const hasParentheses = originalEquation.includes('(');
    
// // // // //     if (hasParentheses) {
// // // // //       const parenthesesMatch = originalEquation.match(/([+-]?\d*\.?\d*(?:\/\d+)?)\(([^)]+)\)/);
// // // // //       if (parenthesesMatch) {
// // // // //         let coef = parenthesesMatch[1];
// // // // //         if (coef === '' || coef === '+') coef = '1';
// // // // //         if (coef === '-') coef = '-1';
// // // // //         const insideTerms = parenthesesMatch[2];
        
// // // // //         solutionSteps.push(`Expand parentheses using distributive property: ${coef}(${insideTerms})`);
// // // // //       }
      
// // // // //       solutionSteps.push(`After expanding: ${expandedEquation}`);
      
// // // // //       const expSides = expandedEquation.split('=');
// // // // //       const expLeft = expSides[0];
// // // // //       const expRight = expSides[1];
// // // // //       const expLeftTerms = expLeft.match(/[+-]?[^+-]+/g) || [];
// // // // //       const expRightTerms = expRight.match(/[+-]?[^+-]+/g) || [];
      
// // // // //       let constantTermsLeft = [];
// // // // //       let variableTermsRight = [];
      
// // // // //       expLeftTerms.forEach(term => {
// // // // //         if (!term.includes(variable)) {
// // // // //           constantTermsLeft.push(term);
// // // // //         }
// // // // //       });
      
// // // // //       expRightTerms.forEach(term => {
// // // // //         if (term.includes(variable)) {
// // // // //           variableTermsRight.push(term);
// // // // //         }
// // // // //       });
      
// // // // //       if (variableTermsRight.length > 0) {
// // // // //         const termToMove = variableTermsRight[0];
// // // // //         solutionSteps.push(`Subtract ${termToMove} from both sides to move variables to left side`);
// // // // //       }
      
// // // // //       if (constantTermsLeft.length > 0) {
// // // // //         const termToMove = constantTermsLeft[0];
// // // // //         solutionSteps.push(`Subtract ${termToMove} from both sides to move constants to right side`);
// // // // //       }
      
// // // // //       solutionSteps.push(`Combine like terms: ${formatNumber(coefficient)}${variable} = ${formatNumber(-constant)}`);
      
// // // // //     } else {
// // // // //       const leftTerms = leftSide.match(/[+-]?[^+-]+/g) || [];
// // // // //       const rightTerms = rightSide.match(/[+-]?[^+-]+/g) || [];
      
// // // // //       let variableTermsLeft = [];
// // // // //       let constantTermsLeft = [];
// // // // //       let variableTermsRight = [];
      
// // // // //       leftTerms.forEach(term => {
// // // // //         if (term.includes(variable)) {
// // // // //           variableTermsLeft.push(term);
// // // // //         } else {
// // // // //           constantTermsLeft.push(term);
// // // // //         }
// // // // //       });
      
// // // // //       rightTerms.forEach(term => {
// // // // //         if (term.includes(variable)) {
// // // // //           variableTermsRight.push(term);
// // // // //         }
// // // // //       });
      
// // // // //       if (constantTermsLeft.length > 0) {
// // // // //         const termToMove = constantTermsLeft[0];
// // // // //         solutionSteps.push(`Subtract ${termToMove} from both sides to move it to the right`);
// // // // //       }
      
// // // // //       if (variableTermsRight.length > 0) {
// // // // //         const termToMove = variableTermsRight[0];
// // // // //         solutionSteps.push(`Subtract ${termToMove} from both sides to move it to the left`);
// // // // //       }
      
// // // // //       solutionSteps.push(`Combine like terms: ${formatNumber(coefficient)}${variable} = ${formatNumber(-constant)}`);
// // // // //     }
    
// // // // //     if (coefficient !== 1) {
// // // // //       solutionSteps.push(`Divide both sides by ${formatNumber(coefficient)}: ${variable} = ${formatNumber(-constant)}/${formatNumber(coefficient)}`);
// // // // //     }
    
// // // // //     solutionSteps.push(`Solution: ${variable} = ${formatNumber(result)}`);
    
// // // // //     return { solution: result, steps: solutionSteps };
// // // // //   };

// // // // //   const addToHistory = (equation, solution, variable) => {
// // // // //     const historyItem = {
// // // // //       equation: equation,
// // // // //       solution: solution,
// // // // //       variable: variable,
// // // // //       timestamp: new Date().toLocaleString()
// // // // //     };
    
// // // // //     setHistory(prevHistory => {
// // // // //       // Remove duplicate if exists
// // // // //       const filtered = prevHistory.filter(item => item.equation !== equation);
// // // // //       // Add new item at the beginning and keep only last 8 items
// // // // //       return [historyItem, ...filtered].slice(0, 8);
// // // // //     });
// // // // //   };

// // // // //   const handleSolve = () => {
// // // // //     try {
// // // // //       setError('');
// // // // //       setSolution(null);
// // // // //       setSteps([]);
// // // // //       setVariable('');
      
// // // // //       if (!equation.trim()) {
// // // // //         setError('Please enter an equation');
// // // // //         inputRef.current?.focus();
// // // // //         return;
// // // // //       }
      
// // // // //       const parsed = parseLinearEquation(equation);
// // // // //       const sides = equation.split('=');
// // // // //       const leftSide = sides[0].trim();
// // // // //       const rightSide = sides[1].trim();
// // // // //       const result = solveLinearEquation(
// // // // //         parsed.coefficient, 
// // // // //         parsed.constant, 
// // // // //         parsed.variable, 
// // // // //         equation, 
// // // // //         leftSide, 
// // // // //         rightSide,
// // // // //         parsed.expandedEquation
// // // // //       );
      
// // // // //       setVariable(parsed.variable);
// // // // //       setSolution(result.solution);
// // // // //       setSteps(result.steps);
      
// // // // //       // Add to history only for successful solutions
// // // // //       addToHistory(equation, result.solution, parsed.variable);
      
// // // // //       // Return focus to input after solving
// // // // //       setTimeout(() => inputRef.current?.focus(), 100);
      
// // // // //     } catch (err) {
// // // // //       setError(err.message);
// // // // //       setSolution(null);
// // // // //       setSteps([]);
// // // // //       setVariable('');
// // // // //       inputRef.current?.focus();
// // // // //     }
// // // // //   };

// // // // //   const handleClear = () => {
// // // // //     setEquation('');
// // // // //     setSolution(null);
// // // // //     setError('');
// // // // //     setSteps([]);
// // // // //     setVariable('');
// // // // //     inputRef.current?.focus();
// // // // //   };

// // // // //   const handleKeyDown = (e) => {
// // // // //     if (e.key === 'Enter') {
// // // // //       handleSolve();
// // // // //     } else if (e.key === 'Escape') {
// // // // //       handleClear();
// // // // //     }
// // // // //   };

// // // // //   const handleExampleClick = (exampleEquation) => {
// // // // //     setEquation(exampleEquation);
// // // // //     setError('');
// // // // //     setSolution(null);
// // // // //     setSteps([]);
// // // // //     setVariable('');
    
// // // // //     // Return focus to input
// // // // //     setTimeout(() => inputRef.current?.focus(), 100);
// // // // //   };

// // // // //   const handleHistoryClick = (historyItem) => {
// // // // //     setEquation(historyItem.equation);
// // // // //     setSolution(historyItem.solution);
// // // // //     setVariable(historyItem.variable);
// // // // //     setError('');
// // // // //     setSteps([]);
    
// // // // //     // Return focus to input
// // // // //     setTimeout(() => inputRef.current?.focus(), 100);
// // // // //   };

// // // // //   const clearHistory = () => {
// // // // //     setHistory([]);
// // // // //   };

// // // // //   const toggleHistory = () => {
// // // // //     setIsHistoryExpanded(!isHistoryExpanded);
// // // // //   };

// // // // //   const generateRandomEquation = (level) => {
// // // // //     const variables = ['x', 'y', 'z', 'a', 'b'];
// // // // //     const variable = variables[Math.floor(Math.random() * variables.length)];
    
// // // // //     let equation = '';
    
// // // // //     switch(level) {
// // // // //       case 'easy':
// // // // //         // ax = b or x + a = b
// // // // //         if (Math.random() < 0.5) {
// // // // //           const a = Math.floor(Math.random() * 8) + 2;
// // // // //           const b = a * (Math.floor(Math.random() * 10) + 1);
// // // // //           equation = `${a}${variable} = ${b}`;
// // // // //         } else {
// // // // //           const a = Math.floor(Math.random() * 10) + 1;
// // // // //           const x = Math.floor(Math.random() * 10) + 1;
// // // // //           const b = x + a;
// // // // //           equation = `${variable} + ${a} = ${b}`;
// // // // //         }
// // // // //         break;
        
// // // // //       case 'medium':
// // // // //         // ax + b = cx + d
// // // // //         const a = Math.floor(Math.random() * 5) + 2;
// // // // //         const b = Math.floor(Math.random() * 10) + 1;
// // // // //         const c = Math.floor(Math.random() * 3) + 1;
// // // // //         const d = Math.floor(Math.random() * 10) + 1;
// // // // //         equation = `${a}${variable} + ${b} = ${c}${variable} + ${d}`;
// // // // //         break;
        
// // // // //       case 'hard':
// // // // //         // a(x + b) = c
// // // // //         const coef = Math.floor(Math.random() * 4) + 2;
// // // // //         const inside = Math.floor(Math.random() * 8) + 1;
// // // // //         const result = coef * (Math.floor(Math.random() * 5) + inside + 1);
// // // // //         equation = `${coef}(${variable} + ${inside}) = ${result}`;
// // // // //         break;
        
// // // // //       case 'expert':
// // // // //         // Fraction coefficients
// // // // //         const num1 = Math.floor(Math.random() * 3) + 1;
// // // // //         const den1 = Math.floor(Math.random() * 3) + 2;
// // // // //         const num2 = Math.floor(Math.random() * 4) + 1;
// // // // //         const den2 = Math.floor(Math.random() * 4) + 2;
// // // // //         const const1 = Math.floor(Math.random() * 6) + 1;
// // // // //         const const2 = Math.floor(Math.random() * 8) + 1;
// // // // //         equation = `${num1}/${den1}${variable} + ${const1} = ${num2}/${den2}${variable} + ${const2}`;
// // // // //         break;
// // // // //     }
    
// // // // //     setEquation(equation);
// // // // //     setError('');
// // // // //     setSolution(null);
// // // // //     setSteps([]);
// // // // //     setVariable('');
    
// // // // //     // Return focus to input after generating
// // // // //     setTimeout(() => inputRef.current?.focus(), 100);
// // // // //   };

// // // // //   const formatSolution = (solution) => {
// // // // //     if (typeof solution === 'string') {
// // // // //       return solution;
// // // // //     }
// // // // //     return `${variable} = ${formatNumber(solution)}`;
// // // // //   };

// // // // //   const formatHistorySolution = (solution, variable) => {
// // // // //     if (typeof solution === 'string') {
// // // // //       return solution;
// // // // //     }
// // // // //     return `${variable} = ${formatNumber(solution)}`;
// // // // //   };

// // // // //   return (
// // // // //     <div className={styles.container}>
// // // // //       <div className={styles.mainLayout}>
// // // // //         <div className={styles.leftPanel}>
// // // // //           <div className={styles.inputSection}>
// // // // //             <label className={styles.label}>
// // // // //               Enter your linear equation with any variable (Press Enter to solve, Escape to clear):
// // // // //             </label>
// // // // //             <input
// // // // //               ref={inputRef}
// // // // //               type="text"
// // // // //               value={equation}
// // // // //               onChange={(e) => setEquation(e.target.value)}
// // // // //               placeholder="Enter equation like: 2x + 3 = 7, 2(x + 3) = 10, or 1.5x + 2/3 = 4"
// // // // //               className={styles.input}
// // // // //               onKeyDown={handleKeyDown}
// // // // //             />
// // // // //             <div className={styles.buttonGroup}>
// // // // //               <button onClick={handleSolve} className={styles.solveButton}>
// // // // //                 Solve
// // // // //               </button>
// // // // //               <button onClick={handleClear} className={styles.clearButton}>
// // // // //                 Clear
// // // // //               </button>
// // // // //             </div>
            
// // // // //             <div className={styles.generatorSection}>
// // // // //               <label className={styles.generatorLabel}>Generate random equation:</label>
// // // // //               <div className={styles.generatorButtons}>
// // // // //                 <button onClick={() => generateRandomEquation('easy')} className={styles.generatorButton}>
// // // // //                   Easy (ax = b)
// // // // //                 </button>
// // // // //                 <button onClick={() => generateRandomEquation('medium')} className={styles.generatorButton}>
// // // // //                   Medium (ax + b = cx + d)
// // // // //                 </button>
// // // // //                 <button onClick={() => generateRandomEquation('hard')} className={styles.generatorButton}>
// // // // //                   Hard (a(x + b) = c)
// // // // //                 </button>
// // // // //                 <button onClick={() => generateRandomEquation('expert')} className={styles.generatorButton}>
// // // // //                   Expert (fractions)
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {error && (
// // // // //             <div className={styles.error}>
// // // // //               <strong>Error:</strong> {error}
// // // // //             </div>
// // // // //           )}

// // // // //           {history.length > 0 && (
// // // // //             <div className={styles.historySection}>
// // // // //               <div className={styles.historyHeader} onClick={toggleHistory}>
// // // // //                 <h3 className={styles.historyTitle}>
// // // // //                   Recent Equations ({history.length})
// // // // //                   <span className={styles.historyToggle}>
// // // // //                     {isHistoryExpanded ? '▼' : '▶'}
// // // // //                   </span>
// // // // //                 </h3>
// // // // //                 {isHistoryExpanded && (
// // // // //                   <button onClick={(e) => {
// // // // //                     e.stopPropagation();
// // // // //                     clearHistory();
// // // // //                   }} className={styles.clearHistoryButton}>
// // // // //                     Clear History
// // // // //                   </button>
// // // // //                 )}
// // // // //               </div>
// // // // //               {isHistoryExpanded && (
// // // // //                 <div className={styles.historyList}>
// // // // //                   {history.map((item, index) => (
// // // // //                     <div 
// // // // //                       key={index} 
// // // // //                       className={styles.historyItem}
// // // // //                       onClick={() => handleHistoryClick(item)}
// // // // //                     >
// // // // //                       <div className={styles.historyEquation}>{item.equation}</div>
// // // // //                       <div className={styles.historySolution}>
// // // // //                         {formatHistorySolution(item.solution, item.variable)}
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>
// // // // //           )}
// // // // //         </div>

// // // // //         <div className={styles.rightPanel}>
// // // // //           {solution !== null ? (
// // // // //             <div className={styles.solutionSection}>
// // // // //               <h2 className={styles.solutionTitle}>Solution</h2>
// // // // //               <div className={styles.solution}>
// // // // //                 {formatSolution(solution)}
// // // // //               </div>
              
// // // // //               {steps.length > 0 && (
// // // // //                 <div className={styles.stepsSection}>
// // // // //                   <h3 className={styles.stepsTitle}>Step-by-step solution:</h3>
// // // // //                   <ol className={styles.stepsList}>
// // // // //                     {steps.map((step, index) => (
// // // // //                       <li key={index} className={styles.step}>
// // // // //                         {step}
// // // // //                       </li>
// // // // //                     ))}
// // // // //                   </ol>
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>
// // // // //           ) : (
// // // // //             <div className={styles.examples}>
// // // // //               <h3 className={styles.examplesTitle}>Example equations you can try:</h3>
// // // // //               <ul className={styles.examplesList}>
// // // // //                 <li onClick={() => handleExampleClick('2x + 3 = 7')}>2x + 3 = 7</li>
// // // // //                 <li onClick={() => handleExampleClick('3y - 5 = 2y + 1')}>3y - 5 = 2y + 1</li>
// // // // //                 <li onClick={() => handleExampleClick('5a = 15')}>5a = 15</li>
// // // // //                 <li onClick={() => handleExampleClick('2(x + 3) = 10')}>2(x + 3) = 10</li>
// // // // //                 <li onClick={() => handleExampleClick('-3(2y - 1) = 9')}>-3(2y - 1) = 9</li>
// // // // //                 <li onClick={() => handleExampleClick('4(z - 2) = 2z + 8')}>4(z - 2) = 2z + 8</li>
// // // // //                 <li onClick={() => handleExampleClick('1.5x + 2/3 = 4')}>1.5x + 2/3 = 4</li>
// // // // //                 <li onClick={() => handleExampleClick('3/4y - 1/2 = 2y + 1/4')}>3/4y - 1/2 = 2y + 1/4</li>
// // // // //                 <li onClick={() => handleExampleClick('0.25z + 1.5 = 2.75')}>0.25z + 1.5 = 2.75</li>
// // // // //               </ul>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default LinearEquationSolver;



// // // // import { useState, useRef } from 'react';
// // // // import styles from './LinearEquationSolver.module.css';

// // // // const LinearEquationSolver = ({ explanations }) => {
// // // //   const [equation, setEquation] = useState('');
// // // //   const [solution, setSolution] = useState(null);
// // // //   const [error, setError] = useState('');
// // // //   const [steps, setSteps] = useState([]);
// // // //   const [variable, setVariable] = useState('');
// // // //   const [history, setHistory] = useState([]);
// // // //   const [isHistoryExpanded, setIsHistoryExpanded] = useState(false);
// // // //   const inputRef = useRef(null);

// // // //   // Default explanations if none provided
// // // //   const defaultExplanations = {
// // // //     instructions: [
// // // //       "Enter any linear equation with one variable (x, y, z, etc.)",
// // // //       "Supports fractions: 2/3x + 1/4 = 5/6",
// // // //       "Supports decimals: 1.5x + 2.7 = 8.3", 
// // // //       "Supports parentheses: 3(x + 2) = 15",
// // // //       "Press Enter to solve or Escape to clear",
// // // //       "Use random generators for practice problems",
// // // //       "Click history items to reload previous equations",
// // // //       "View detailed step-by-step solutions"
// // // //     ],
// // // //     links: [
// // // //       {
// // // //         text: "Algebra Basics Tutorial",
// // // //         url: "/tutorials/algebra-basics"
// // // //       },
// // // //       {
// // // //         text: "Practice Problems",
// // // //         url: "/practice/linear-equations"
// // // //       }
// // // //     ],
// // // //     externalLinks: [
// // // //       {
// // // //         text: "Khan Academy - Linear Equations",
// // // //         url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-in-one-variable"
// // // //       },
// // // //       {
// // // //         text: "Math is Fun - Solving Equations",
// // // //         url: "https://www.mathsisfun.com/algebra/linear-equations.html"
// // // //       }
// // // //     ]
// // // //   };

// // // //   // Use provided explanations or fall back to defaults
// // // //   const currentExplanations = explanations || defaultExplanations;

// // // //   const parseFraction = (str) => {
// // // //     if (!str || str === '') return 0;
    
// // // //     // Handle negative signs
// // // //     const isNegative = str.startsWith('-');
// // // //     const cleanStr = str.replace(/^[+-]/, '');
    
// // // //     if (cleanStr.includes('/')) {
// // // //       const parts = cleanStr.split('/');
// // // //       if (parts.length !== 2) return NaN;
      
// // // //       const numerator = parseFloat(parts[0]);
// // // //       const denominator = parseFloat(parts[1]);
      
// // // //       if (isNaN(numerator) || isNaN(denominator) || denominator === 0) {
// // // //         return NaN;
// // // //       }
      
// // // //       const result = numerator / denominator;
// // // //       return isNegative ? -result : result;
// // // //     }
    
// // // //     const result = parseFloat(cleanStr);
// // // //     return isNaN(result) ? NaN : (isNegative ? -result : result);
// // // //   };

// // // //   const expandParentheses = (equation) => {
// // // //     const pattern = /([+-]?\d*\.?\d*(?:\/\d+)?)\(([^)]+)\)/g;
    
// // // //     return equation.replace(pattern, (match, coef, inside) => {
// // // //       if (coef === '' || coef === '+') coef = '1';
// // // //       if (coef === '-') coef = '-1';
      
// // // //       const coefficient = parseFraction(coef);
// // // //       if (isNaN(coefficient)) {
// // // //         throw new Error(`Invalid coefficient: ${coef}`);
// // // //       }
      
// // // //       const insideNormalized = inside.replace(/(?<!^|[+-])-/g, '+-');
// // // //       const terms = insideNormalized.split('+').filter(term => term !== '');
      
// // // //       const expandedTerms = terms.map(term => {
// // // //         const variableMatch = term.match(/[a-z]/);
// // // //         const variable = variableMatch ? variableMatch[0] : null;
        
// // // //         if (variable) {
// // // //           const coeffStr = term.replace(/[a-z]/g, '');
// // // //           let termCoeff = 1;
          
// // // //           if (coeffStr === '' || coeffStr === '+') {
// // // //             termCoeff = 1;
// // // //           } else if (coeffStr === '-') {
// // // //             termCoeff = -1;
// // // //           } else {
// // // //             termCoeff = parseFraction(coeffStr);
// // // //             if (isNaN(termCoeff)) {
// // // //               throw new Error(`Invalid term coefficient: ${coeffStr}`);
// // // //             }
// // // //           }
          
// // // //           const result = coefficient * termCoeff;
          
// // // //           if (result === 1) {
// // // //             return variable;
// // // //           } else if (result === -1) {
// // // //             return `-${variable}`;
// // // //           } else {
// // // //             return `${result}${variable}`;
// // // //           }
// // // //         } else {
// // // //           const constValue = parseFraction(term);
// // // //           if (isNaN(constValue)) {
// // // //             throw new Error(`Invalid constant term: ${term}`);
// // // //           }
// // // //           return (coefficient * constValue).toString();
// // // //         }
// // // //       });
      
// // // //       let result = expandedTerms[0];
// // // //       for (let i = 1; i < expandedTerms.length; i++) {
// // // //         const term = expandedTerms[i];
// // // //         if (term.startsWith('-')) {
// // // //           result += term;
// // // //         } else {
// // // //           result += '+' + term;
// // // //         }
// // // //       }
      
// // // //       return result;
// // // //     });
// // // //   };

// // // //   const parseLinearEquation = (eq) => {
// // // //     let cleanEq = eq.replace(/\s+/g, '').toLowerCase();
// // // //     cleanEq = expandParentheses(cleanEq);
    
// // // //     if (!cleanEq.includes('=')) {
// // // //       throw new Error('Equation must contain an equals sign (=)');
// // // //     }
    
// // // //     const sides = cleanEq.split('=');
// // // //     if (sides.length !== 2) {
// // // //       throw new Error('Equation must have exactly one equals sign');
// // // //     }
    
// // // //     const leftSide = sides[0];
// // // //     const rightSide = sides[1];
    
// // // //     if (!leftSide || !rightSide) {
// // // //       throw new Error('Both sides of the equation must have content');
// // // //     }
    
// // // //     const variableMatch = cleanEq.match(/[a-z]/);
// // // //     if (!variableMatch) {
// // // //       throw new Error('No variable found in the equation');
// // // //     }
// // // //     const variable = variableMatch[0];
    
// // // //     const parseExpression = (expr) => {
// // // //       let coefficient = 0;
// // // //       let constant = 0;
      
// // // //       const normalized = expr.replace(/(?<!^)-/g, '+-');
// // // //       const terms = normalized.split('+').filter(term => term !== '');
      
// // // //       for (let term of terms) {
// // // //         if (term.includes(variable)) {
// // // //           const pattern = new RegExp(`^([+-]?\\d*\\.?\\d*(?:\\/\\d+)?)${variable}$`);
// // // //           const coefMatch = term.match(pattern);
// // // //           if (coefMatch) {
// // // //             let coef = coefMatch[1];
// // // //             if (coef === '' || coef === '+') coef = '1';
// // // //             if (coef === '-') coef = '-1';
            
// // // //             const parsedCoef = parseFraction(coef);
// // // //             if (isNaN(parsedCoef)) {
// // // //               throw new Error(`Invalid coefficient: ${coef}`);
// // // //             }
// // // //             coefficient += parsedCoef;
// // // //           } else {
// // // //             throw new Error(`Invalid term: ${term}`);
// // // //           }
// // // //         } else {
// // // //           const constMatch = term.match(/^([+-]?\d*\.?\d*(?:\/\d+)?)$/);
// // // //           if (constMatch && constMatch[1] !== '') {
// // // //             const parsedConst = parseFraction(constMatch[1]);
// // // //             if (isNaN(parsedConst)) {
// // // //               throw new Error(`Invalid constant: ${constMatch[1]}`);
// // // //             }
// // // //             constant += parsedConst;
// // // //           } else if (term !== '') {
// // // //             throw new Error(`Invalid term: ${term}`);
// // // //           }
// // // //         }
// // // //       }
      
// // // //       return { coefficient, constant };
// // // //     };
    
// // // //     const left = parseExpression(leftSide);
// // // //     const right = parseExpression(rightSide);
    
// // // //     const finalCoeff = left.coefficient - right.coefficient;
// // // //     const finalConstant = left.constant - right.constant;
    
// // // //     return { 
// // // //       coefficient: finalCoeff, 
// // // //       constant: finalConstant, 
// // // //       variable,
// // // //       expandedEquation: cleanEq
// // // //     };
// // // //   };

// // // //   const formatNumber = (num) => {
// // // //     if (Number.isInteger(num)) {
// // // //       return num.toString();
// // // //     } else {
// // // //       // Check if it's a simple fraction
// // // //       const tolerance = 1e-10;
// // // //       for (let denom = 2; denom <= 20; denom++) {
// // // //         const numerator = Math.round(num * denom);
// // // //         if (Math.abs(num - numerator / denom) < tolerance) {
// // // //           if (numerator === denom) return '1';
// // // //           if (numerator === -denom) return '-1';
// // // //           return `${numerator}/${denom}`;
// // // //         }
// // // //       }
// // // //       return num.toFixed(4).replace(/\.?0+$/, '');
// // // //     }
// // // //   };

// // // //   const solveLinearEquation = (coefficient, constant, variable, originalEquation, leftSide, rightSide, expandedEquation) => {
// // // //     const solutionSteps = [];
    
// // // //     if (Math.abs(coefficient) < 1e-10) {
// // // //       if (Math.abs(constant) < 1e-10) {
// // // //         return { 
// // // //           solution: 'infinitely many solutions', 
// // // //           steps: [originalEquation, '0 = 0', `This is always true, so ${variable} can be any real number`] 
// // // //         };
// // // //       } else {
// // // //         return { 
// // // //           solution: 'no solution', 
// // // //           steps: [originalEquation, `${formatNumber(constant)} = 0`, 'This is never true, so there is no solution'] 
// // // //         };
// // // //       }
// // // //     }
    
// // // //     const result = -constant / coefficient;
    
// // // //     solutionSteps.push(`Original equation: ${originalEquation}`);
    
// // // //     const hasParentheses = originalEquation.includes('(');
    
// // // //     if (hasParentheses) {
// // // //       const parenthesesMatch = originalEquation.match(/([+-]?\d*\.?\d*(?:\/\d+)?)\(([^)]+)\)/);
// // // //       if (parenthesesMatch) {
// // // //         let coef = parenthesesMatch[1];
// // // //         if (coef === '' || coef === '+') coef = '1';
// // // //         if (coef === '-') coef = '-1';
// // // //         const insideTerms = parenthesesMatch[2];
        
// // // //         solutionSteps.push(`Expand parentheses using distributive property: ${coef}(${insideTerms})`);
// // // //       }
      
// // // //       solutionSteps.push(`After expanding: ${expandedEquation}`);
      
// // // //       const expSides = expandedEquation.split('=');
// // // //       const expLeft = expSides[0];
// // // //       const expRight = expSides[1];
// // // //       const expLeftTerms = expLeft.match(/[+-]?[^+-]+/g) || [];
// // // //       const expRightTerms = expRight.match(/[+-]?[^+-]+/g) || [];
      
// // // //       let constantTermsLeft = [];
// // // //       let variableTermsRight = [];
      
// // // //       expLeftTerms.forEach(term => {
// // // //         if (!term.includes(variable)) {
// // // //           constantTermsLeft.push(term);
// // // //         }
// // // //       });
      
// // // //       expRightTerms.forEach(term => {
// // // //         if (term.includes(variable)) {
// // // //           variableTermsRight.push(term);
// // // //         }
// // // //       });
      
// // // //       if (variableTermsRight.length > 0) {
// // // //         const termToMove = variableTermsRight[0];
// // // //         solutionSteps.push(`Subtract ${termToMove} from both sides to move variables to left side`);
// // // //       }
      
// // // //       if (constantTermsLeft.length > 0) {
// // // //         const termToMove = constantTermsLeft[0];
// // // //         solutionSteps.push(`Subtract ${termToMove} from both sides to move constants to right side`);
// // // //       }
      
// // // //       solutionSteps.push(`Combine like terms: ${formatNumber(coefficient)}${variable} = ${formatNumber(-constant)}`);
      
// // // //     } else {
// // // //       const leftTerms = leftSide.match(/[+-]?[^+-]+/g) || [];
// // // //       const rightTerms = rightSide.match(/[+-]?[^+-]+/g) || [];
      
// // // //       let variableTermsLeft = [];
// // // //       let constantTermsLeft = [];
// // // //       let variableTermsRight = [];
      
// // // //       leftTerms.forEach(term => {
// // // //         if (term.includes(variable)) {
// // // //           variableTermsLeft.push(term);
// // // //         } else {
// // // //           constantTermsLeft.push(term);
// // // //         }
// // // //       });
      
// // // //       rightTerms.forEach(term => {
// // // //         if (term.includes(variable)) {
// // // //           variableTermsRight.push(term);
// // // //         }
// // // //       });
      
// // // //       if (constantTermsLeft.length > 0) {
// // // //         const termToMove = constantTermsLeft[0];
// // // //         solutionSteps.push(`Subtract ${termToMove} from both sides to move it to the right`);
// // // //       }
      
// // // //       if (variableTermsRight.length > 0) {
// // // //         const termToMove = variableTermsRight[0];
// // // //         solutionSteps.push(`Subtract ${termToMove} from both sides to move it to the left`);
// // // //       }
      
// // // //       solutionSteps.push(`Combine like terms: ${formatNumber(coefficient)}${variable} = ${formatNumber(-constant)}`);
// // // //     }
    
// // // //     if (coefficient !== 1) {
// // // //       solutionSteps.push(`Divide both sides by ${formatNumber(coefficient)}: ${variable} = ${formatNumber(-constant)}/${formatNumber(coefficient)}`);
// // // //     }
    
// // // //     solutionSteps.push(`Solution: ${variable} = ${formatNumber(result)}`);
    
// // // //     return { solution: result, steps: solutionSteps };
// // // //   };

// // // //   const addToHistory = (equation, solution, variable) => {
// // // //     const historyItem = {
// // // //       equation: equation,
// // // //       solution: solution,
// // // //       variable: variable,
// // // //       timestamp: new Date().toLocaleString()
// // // //     };
    
// // // //     setHistory(prevHistory => {
// // // //       // Remove duplicate if exists
// // // //       const filtered = prevHistory.filter(item => item.equation !== equation);
// // // //       // Add new item at the beginning and keep only last 8 items
// // // //       return [historyItem, ...filtered].slice(0, 8);
// // // //     });
// // // //   };

// // // //   const handleSolve = () => {
// // // //     try {
// // // //       setError('');
// // // //       setSolution(null);
// // // //       setSteps([]);
// // // //       setVariable('');
      
// // // //       if (!equation.trim()) {
// // // //         setError('Please enter an equation');
// // // //         inputRef.current?.focus();
// // // //         return;
// // // //       }
      
// // // //       const parsed = parseLinearEquation(equation);
// // // //       const sides = equation.split('=');
// // // //       const leftSide = sides[0].trim();
// // // //       const rightSide = sides[1].trim();
// // // //       const result = solveLinearEquation(
// // // //         parsed.coefficient, 
// // // //         parsed.constant, 
// // // //         parsed.variable, 
// // // //         equation, 
// // // //         leftSide, 
// // // //         rightSide,
// // // //         parsed.expandedEquation
// // // //       );
      
// // // //       setVariable(parsed.variable);
// // // //       setSolution(result.solution);
// // // //       setSteps(result.steps);
      
// // // //       // Add to history only for successful solutions
// // // //       addToHistory(equation, result.solution, parsed.variable);
      
// // // //       // Return focus to input after solving
// // // //       setTimeout(() => inputRef.current?.focus(), 100);
      
// // // //     } catch (err) {
// // // //       setError(err.message);
// // // //       setSolution(null);
// // // //       setSteps([]);
// // // //       setVariable('');
// // // //       inputRef.current?.focus();
// // // //     }
// // // //   };

// // // //   const handleClear = () => {
// // // //     setEquation('');
// // // //     setSolution(null);
// // // //     setError('');
// // // //     setSteps([]);
// // // //     setVariable('');
// // // //     inputRef.current?.focus();
// // // //   };

// // // //   const handleKeyDown = (e) => {
// // // //     if (e.key === 'Enter') {
// // // //       handleSolve();
// // // //     } else if (e.key === 'Escape') {
// // // //       handleClear();
// // // //     }
// // // //   };

// // // //   const handleExampleClick = (exampleEquation) => {
// // // //     setEquation(exampleEquation);
// // // //     setError('');
// // // //     setSolution(null);
// // // //     setSteps([]);
// // // //     setVariable('');
    
// // // //     // Return focus to input
// // // //     setTimeout(() => inputRef.current?.focus(), 100);
// // // //   };

// // // //   const handleHistoryClick = (historyItem) => {
// // // //     setEquation(historyItem.equation);
// // // //     setSolution(historyItem.solution);
// // // //     setVariable(historyItem.variable);
// // // //     setError('');
// // // //     setSteps([]);
    
// // // //     // Return focus to input
// // // //     setTimeout(() => inputRef.current?.focus(), 100);
// // // //   };

// // // //   const clearHistory = () => {
// // // //     setHistory([]);
// // // //   };

// // // //   const toggleHistory = () => {
// // // //     setIsHistoryExpanded(!isHistoryExpanded);
// // // //   };

// // // //   const generateRandomEquation = (level) => {
// // // //     const variables = ['x', 'y', 'z', 'a', 'b'];
// // // //     const variable = variables[Math.floor(Math.random() * variables.length)];
    
// // // //     let equation = '';
    
// // // //     switch(level) {
// // // //       case 'easy':
// // // //         // ax = b or x + a = b
// // // //         if (Math.random() < 0.5) {
// // // //           const a = Math.floor(Math.random() * 8) + 2;
// // // //           const b = a * (Math.floor(Math.random() * 10) + 1);
// // // //           equation = `${a}${variable} = ${b}`;
// // // //         } else {
// // // //           const a = Math.floor(Math.random() * 10) + 1;
// // // //           const x = Math.floor(Math.random() * 10) + 1;
// // // //           const b = x + a;
// // // //           equation = `${variable} + ${a} = ${b}`;
// // // //         }
// // // //         break;
        
// // // //       case 'medium':
// // // //         // ax + b = cx + d
// // // //         const a = Math.floor(Math.random() * 5) + 2;
// // // //         const b = Math.floor(Math.random() * 10) + 1;
// // // //         const c = Math.floor(Math.random() * 3) + 1;
// // // //         const d = Math.floor(Math.random() * 10) + 1;
// // // //         equation = `${a}${variable} + ${b} = ${c}${variable} + ${d}`;
// // // //         break;
        
// // // //       case 'hard':
// // // //         // a(x + b) = c
// // // //         const coef = Math.floor(Math.random() * 4) + 2;
// // // //         const inside = Math.floor(Math.random() * 8) + 1;
// // // //         const result = coef * (Math.floor(Math.random() * 5) + inside + 1);
// // // //         equation = `${coef}(${variable} + ${inside}) = ${result}`;
// // // //         break;
        
// // // //       case 'expert':
// // // //         // Fraction coefficients
// // // //         const num1 = Math.floor(Math.random() * 3) + 1;
// // // //         const den1 = Math.floor(Math.random() * 3) + 2;
// // // //         const num2 = Math.floor(Math.random() * 4) + 1;
// // // //         const den2 = Math.floor(Math.random() * 4) + 2;
// // // //         const const1 = Math.floor(Math.random() * 6) + 1;
// // // //         const const2 = Math.floor(Math.random() * 8) + 1;
// // // //         equation = `${num1}/${den1}${variable} + ${const1} = ${num2}/${den2}${variable} + ${const2}`;
// // // //         break;
// // // //     }
    
// // // //     setEquation(equation);
// // // //     setError('');
// // // //     setSolution(null);
// // // //     setSteps([]);
// // // //     setVariable('');
    
// // // //     // Return focus to input after generating
// // // //     setTimeout(() => inputRef.current?.focus(), 100);
// // // //   };

// // // //   const formatSolution = (solution) => {
// // // //     if (typeof solution === 'string') {
// // // //       return solution;
// // // //     }
// // // //     return `${variable} = ${formatNumber(solution)}`;
// // // //   };

// // // //   const formatHistorySolution = (solution, variable) => {
// // // //     if (typeof solution === 'string') {
// // // //       return solution;
// // // //     }
// // // //     return `${variable} = ${formatNumber(solution)}`;
// // // //   };

// // // //   return (
// // // //     <div className={styles.container}>
// // // //       <div className={styles.mainLayout}>
// // // //         <div className={styles.leftPanel}>
// // // //           <div className={styles.inputSection}>
// // // //             <label className={styles.label}>
// // // //               Enter your linear equation with any variable (Press Enter to solve, Escape to clear):
// // // //             </label>
// // // //             <input
// // // //               ref={inputRef}
// // // //               type="text"
// // // //               value={equation}
// // // //               onChange={(e) => setEquation(e.target.value)}
// // // //               placeholder="Enter equation like: 2x + 3 = 7, 2(x + 3) = 10, or 1.5x + 2/3 = 4"
// // // //               className={styles.input}
// // // //               onKeyDown={handleKeyDown}
// // // //             />
// // // //             <div className={styles.buttonGroup}>
// // // //               <button onClick={handleSolve} className={styles.solveButton}>
// // // //                 Solve
// // // //               </button>
// // // //               <button onClick={handleClear} className={styles.clearButton}>
// // // //                 Clear
// // // //               </button>
// // // //             </div>
            
// // // //             <div className={styles.generatorSection}>
// // // //               <label className={styles.generatorLabel}>Generate random equation:</label>
// // // //               <div className={styles.generatorButtons}>
// // // //                 <button onClick={() => generateRandomEquation('easy')} className={styles.generatorButton}>
// // // //                   Easy (ax = b)
// // // //                 </button>
// // // //                 <button onClick={() => generateRandomEquation('medium')} className={styles.generatorButton}>
// // // //                   Medium (ax + b = cx + d)
// // // //                 </button>
// // // //                 <button onClick={() => generateRandomEquation('hard')} className={styles.generatorButton}>
// // // //                   Hard (a(x + b) = c)
// // // //                 </button>
// // // //                 <button onClick={() => generateRandomEquation('expert')} className={styles.generatorButton}>
// // // //                   Expert (fractions)
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {error && (
// // // //             <div className={styles.error}>
// // // //               <strong>Error:</strong> {error}
// // // //             </div>
// // // //           )}

// // // //           {history.length > 0 && (
// // // //             <div className={styles.historySection}>
// // // //               <div className={styles.historyHeader} onClick={toggleHistory}>
// // // //                 <h3 className={styles.historyTitle}>
// // // //                   Recent Equations ({history.length})
// // // //                   <span className={styles.historyToggle}>
// // // //                     {isHistoryExpanded ? '▼' : '▶'}
// // // //                   </span>
// // // //                 </h3>
// // // //                 {isHistoryExpanded && (
// // // //                   <button onClick={(e) => {
// // // //                     e.stopPropagation();
// // // //                     clearHistory();
// // // //                   }} className={styles.clearHistoryButton}>
// // // //                     Clear History
// // // //                   </button>
// // // //                 )}
// // // //               </div>
// // // //               {isHistoryExpanded && (
// // // //                 <div className={styles.historyList}>
// // // //                   {history.map((item, index) => (
// // // //                     <div 
// // // //                       key={index} 
// // // //                       className={styles.historyItem}
// // // //                       onClick={() => handleHistoryClick(item)}
// // // //                     >
// // // //                       <div className={styles.historyEquation}>{item.equation}</div>
// // // //                       <div className={styles.historySolution}>
// // // //                         {formatHistorySolution(item.solution, item.variable)}
// // // //                       </div>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //           )}

// // // //           {/* Instructions Section */}
// // // //           {currentExplanations.instructions && (
// // // //             <div className={styles.instructionsSection}>
// // // //               <h3 className={styles.instructionsTitle}>How to Use:</h3>
// // // //               <ul className={styles.instructionsList}>
// // // //                 {currentExplanations.instructions.map((instruction, index) => (
// // // //                   <li key={index} className={styles.instructionItem}>
// // // //                     {instruction}
// // // //                   </li>
// // // //                 ))}
// // // //               </ul>
// // // //             </div>
// // // //           )}

// // // //           {/* Links Section */}
// // // //           {(currentExplanations.links || currentExplanations.externalLinks) && (
// // // //             <div className={styles.linksSection}>
// // // //               <h3 className={styles.linksTitle}>Additional Resources:</h3>
              
// // // //               {currentExplanations.links && (
// // // //                 <div className={styles.internalLinks}>
// // // //                   <h4 className={styles.linkGroupTitle}>Internal Links:</h4>
// // // //                   <ul className={styles.linksList}>
// // // //                     {currentExplanations.links.map((link, index) => (
// // // //                       <li key={index} className={styles.linkItem}>
// // // //                         <a href={link.url} className={styles.link}>
// // // //                           {link.text}
// // // //                         </a>
// // // //                       </li>
// // // //                     ))}
// // // //                   </ul>
// // // //                 </div>
// // // //               )}

// // // //               {currentExplanations.externalLinks && (
// // // //                 <div className={styles.externalLinks}>
// // // //                   <h4 className={styles.linkGroupTitle}>External Resources:</h4>
// // // //                   <ul className={styles.linksList}>
// // // //                     {currentExplanations.externalLinks.map((link, index) => (
// // // //                       <li key={index} className={styles.linkItem}>
// // // //                         <a 
// // // //                           href={link.url} 
// // // //                           className={styles.link}
// // // //                           target="_blank"
// // // //                           rel="noopener noreferrer"
// // // //                         >
// // // //                           {link.text}
// // // //                         </a>
// // // //                       </li>
// // // //                     ))}
// // // //                   </ul>
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         <div className={styles.rightPanel}>
// // // //           {solution !== null ? (
// // // //             <div className={styles.solutionSection}>
// // // //               <h2 className={styles.solutionTitle}>Solution</h2>
// // // //               <div className={styles.solution}>
// // // //                 {formatSolution(solution)}
// // // //               </div>
              
// // // //               {steps.length > 0 && (
// // // //                 <div className={styles.stepsSection}>
// // // //                   <h3 className={styles.stepsTitle}>Step-by-step solution:</h3>
// // // //                   <ol className={styles.stepsList}>
// // // //                     {steps.map((step, index) => (
// // // //                       <li key={index} className={styles.step}>
// // // //                         {step}
// // // //                       </li>
// // // //                     ))}
// // // //                   </ol>
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //           ) : (
// // // //             <div className={styles.examples}>
// // // //               <h3 className={styles.examplesTitle}>Example equations you can try:</h3>
// // // //               <ul className={styles.examplesList}>
// // // //                 <li onClick={() => handleExampleClick('2x + 3 = 7')}>2x + 3 = 7</li>
// // // //                 <li onClick={() => handleExampleClick('3y - 5 = 2y + 1')}>3y - 5 = 2y + 1</li>
// // // //                 <li onClick={() => handleExampleClick('5a = 15')}>5a = 15</li>
// // // //                 <li onClick={() => handleExampleClick('2(x + 3) = 10')}>2(x + 3) = 10</li>
// // // //                 <li onClick={() => handleExampleClick('-3(2y - 1) = 9')}>-3(2y - 1) = 9</li>
// // // //                 <li onClick={() => handleExampleClick('4(z - 2) = 2z + 8')}>4(z - 2) = 2z + 8</li>
// // // //                 <li onClick={() => handleExampleClick('1.5x + 2/3 = 4')}>1.5x + 2/3 = 4</li>
// // // //                 <li onClick={() => handleExampleClick('3/4y - 1/2 = 2y + 1/4')}>3/4y - 1/2 = 2y + 1/4</li>
// // // //                 <li onClick={() => handleExampleClick('0.25z + 1.5 = 2.75')}>0.25z + 1.5 = 2.75</li>
// // // //               </ul>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default LinearEquationSolver;


// // // import { useState, useRef } from 'react';
// // // import styles from './LinearEquationSolver.module.css';

// // // const LinearEquationSolver = ({ explanations }) => {
// // //   const [equation, setEquation] = useState('');
// // //   const [solution, setSolution] = useState(null);
// // //   const [error, setError] = useState('');
// // //   const [steps, setSteps] = useState([]);
// // //   const [variable, setVariable] = useState('');
// // //   const [history, setHistory] = useState([]);
// // //   const [isHistoryExpanded, setIsHistoryExpanded] = useState(false);
// // //   const [activeTab, setActiveTab] = useState('examples');
// // //   const inputRef = useRef(null);

// // //   const parseFraction = (str) => {
// // //     if (!str || str === '') return 0;
    
// // //     // Handle negative signs
// // //     const isNegative = str.startsWith('-');
// // //     const cleanStr = str.replace(/^[+-]/, '');
    
// // //     if (cleanStr.includes('/')) {
// // //       const parts = cleanStr.split('/');
// // //       if (parts.length !== 2) return NaN;
      
// // //       const numerator = parseFloat(parts[0]);
// // //       const denominator = parseFloat(parts[1]);
      
// // //       if (isNaN(numerator) || isNaN(denominator) || denominator === 0) {
// // //         return NaN;
// // //       }
      
// // //       const result = numerator / denominator;
// // //       return isNegative ? -result : result;
// // //     }
    
// // //     const result = parseFloat(cleanStr);
// // //     return isNaN(result) ? NaN : (isNegative ? -result : result);
// // //   };

// // //   const expandParentheses = (equation) => {
// // //     const pattern = /([+-]?\d*\.?\d*(?:\/\d+)?)\(([^)]+)\)/g;
    
// // //     return equation.replace(pattern, (match, coef, inside) => {
// // //       if (coef === '' || coef === '+') coef = '1';
// // //       if (coef === '-') coef = '-1';
      
// // //       const coefficient = parseFraction(coef);
// // //       if (isNaN(coefficient)) {
// // //         throw new Error(`Invalid coefficient: ${coef}`);
// // //       }
      
// // //       const insideNormalized = inside.replace(/(?<!^|[+-])-/g, '+-');
// // //       const terms = insideNormalized.split('+').filter(term => term !== '');
      
// // //       const expandedTerms = terms.map(term => {
// // //         const variableMatch = term.match(/[a-z]/);
// // //         const variable = variableMatch ? variableMatch[0] : null;
        
// // //         if (variable) {
// // //           const coeffStr = term.replace(/[a-z]/g, '');
// // //           let termCoeff = 1;
          
// // //           if (coeffStr === '' || coeffStr === '+') {
// // //             termCoeff = 1;
// // //           } else if (coeffStr === '-') {
// // //             termCoeff = -1;
// // //           } else {
// // //             termCoeff = parseFraction(coeffStr);
// // //             if (isNaN(termCoeff)) {
// // //               throw new Error(`Invalid term coefficient: ${coeffStr}`);
// // //             }
// // //           }
          
// // //           const result = coefficient * termCoeff;
          
// // //           if (result === 1) {
// // //             return variable;
// // //           } else if (result === -1) {
// // //             return `-${variable}`;
// // //           } else {
// // //             return `${result}${variable}`;
// // //           }
// // //         } else {
// // //           const constValue = parseFraction(term);
// // //           if (isNaN(constValue)) {
// // //             throw new Error(`Invalid constant term: ${term}`);
// // //           }
// // //           return (coefficient * constValue).toString();
// // //         }
// // //       });
      
// // //       let result = expandedTerms[0];
// // //       for (let i = 1; i < expandedTerms.length; i++) {
// // //         const term = expandedTerms[i];
// // //         if (term.startsWith('-')) {
// // //           result += term;
// // //         } else {
// // //           result += '+' + term;
// // //         }
// // //       }
      
// // //       return result;
// // //     });
// // //   };

// // //   const parseLinearEquation = (eq) => {
// // //     let cleanEq = eq.replace(/\s+/g, '').toLowerCase();
// // //     cleanEq = expandParentheses(cleanEq);
    
// // //     if (!cleanEq.includes('=')) {
// // //       throw new Error('Equation must contain an equals sign (=)');
// // //     }
    
// // //     const sides = cleanEq.split('=');
// // //     if (sides.length !== 2) {
// // //       throw new Error('Equation must have exactly one equals sign');
// // //     }
    
// // //     const leftSide = sides[0];
// // //     const rightSide = sides[1];
    
// // //     if (!leftSide || !rightSide) {
// // //       throw new Error('Both sides of the equation must have content');
// // //     }
    
// // //     const variableMatch = cleanEq.match(/[a-z]/);
// // //     if (!variableMatch) {
// // //       throw new Error('No variable found in the equation');
// // //     }
// // //     const variable = variableMatch[0];
    
// // //     const parseExpression = (expr) => {
// // //       let coefficient = 0;
// // //       let constant = 0;
      
// // //       const normalized = expr.replace(/(?<!^)-/g, '+-');
// // //       const terms = normalized.split('+').filter(term => term !== '');
      
// // //       for (let term of terms) {
// // //         if (term.includes(variable)) {
// // //           const pattern = new RegExp(`^([+-]?\\d*\\.?\\d*(?:\\/\\d+)?)${variable}$`);
// // //           const coefMatch = term.match(pattern);
// // //           if (coefMatch) {
// // //             let coef = coefMatch[1];
// // //             if (coef === '' || coef === '+') coef = '1';
// // //             if (coef === '-') coef = '-1';
            
// // //             const parsedCoef = parseFraction(coef);
// // //             if (isNaN(parsedCoef)) {
// // //               throw new Error(`Invalid coefficient: ${coef}`);
// // //             }
// // //             coefficient += parsedCoef;
// // //           } else {
// // //             throw new Error(`Invalid term: ${term}`);
// // //           }
// // //         } else {
// // //           const constMatch = term.match(/^([+-]?\d*\.?\d*(?:\/\d+)?)$/);
// // //           if (constMatch && constMatch[1] !== '') {
// // //             const parsedConst = parseFraction(constMatch[1]);
// // //             if (isNaN(parsedConst)) {
// // //               throw new Error(`Invalid constant: ${constMatch[1]}`);
// // //             }
// // //             constant += parsedConst;
// // //           } else if (term !== '') {
// // //             throw new Error(`Invalid term: ${term}`);
// // //           }
// // //         }
// // //       }
      
// // //       return { coefficient, constant };
// // //     };
    
// // //     const left = parseExpression(leftSide);
// // //     const right = parseExpression(rightSide);
    
// // //     const finalCoeff = left.coefficient - right.coefficient;
// // //     const finalConstant = left.constant - right.constant;
    
// // //     return { 
// // //       coefficient: finalCoeff, 
// // //       constant: finalConstant, 
// // //       variable,
// // //       expandedEquation: cleanEq
// // //     };
// // //   };

// // //   const formatNumber = (num) => {
// // //     if (Number.isInteger(num)) {
// // //       return num.toString();
// // //     } else {
// // //       // Check if it's a simple fraction
// // //       const tolerance = 1e-10;
// // //       for (let denom = 2; denom <= 20; denom++) {
// // //         const numerator = Math.round(num * denom);
// // //         if (Math.abs(num - numerator / denom) < tolerance) {
// // //           if (numerator === denom) return '1';
// // //           if (numerator === -denom) return '-1';
// // //           return `${numerator}/${denom}`;
// // //         }
// // //       }
// // //       return num.toFixed(4).replace(/\.?0+$/, '');
// // //     }
// // //   };

// // //   const solveLinearEquation = (coefficient, constant, variable, originalEquation, leftSide, rightSide, expandedEquation) => {
// // //     const solutionSteps = [];
    
// // //     if (Math.abs(coefficient) < 1e-10) {
// // //       if (Math.abs(constant) < 1e-10) {
// // //         return { 
// // //           solution: 'infinitely many solutions', 
// // //           steps: [originalEquation, '0 = 0', `This is always true, so ${variable} can be any real number`] 
// // //         };
// // //       } else {
// // //         return { 
// // //           solution: 'no solution', 
// // //           steps: [originalEquation, `${formatNumber(constant)} = 0`, 'This is never true, so there is no solution'] 
// // //         };
// // //       }
// // //     }
    
// // //     const result = -constant / coefficient;
    
// // //     solutionSteps.push(`Original equation: ${originalEquation}`);
    
// // //     const hasParentheses = originalEquation.includes('(');
    
// // //     if (hasParentheses) {
// // //       const parenthesesMatch = originalEquation.match(/([+-]?\d*\.?\d*(?:\/\d+)?)\(([^)]+)\)/);
// // //       if (parenthesesMatch) {
// // //         let coef = parenthesesMatch[1];
// // //         if (coef === '' || coef === '+') coef = '1';
// // //         if (coef === '-') coef = '-1';
// // //         const insideTerms = parenthesesMatch[2];
        
// // //         solutionSteps.push(`Expand parentheses using distributive property: ${coef}(${insideTerms})`);
// // //       }
      
// // //       solutionSteps.push(`After expanding: ${expandedEquation}`);
      
// // //       const expSides = expandedEquation.split('=');
// // //       const expLeft = expSides[0];
// // //       const expRight = expSides[1];
// // //       const expLeftTerms = expLeft.match(/[+-]?[^+-]+/g) || [];
// // //       const expRightTerms = expRight.match(/[+-]?[^+-]+/g) || [];
      
// // //       let constantTermsLeft = [];
// // //       let variableTermsRight = [];
      
// // //       expLeftTerms.forEach(term => {
// // //         if (!term.includes(variable)) {
// // //           constantTermsLeft.push(term);
// // //         }
// // //       });
      
// // //       expRightTerms.forEach(term => {
// // //         if (term.includes(variable)) {
// // //           variableTermsRight.push(term);
// // //         }
// // //       });
      
// // //       if (variableTermsRight.length > 0) {
// // //         const termToMove = variableTermsRight[0];
// // //         solutionSteps.push(`Subtract ${termToMove} from both sides to move variables to left side`);
// // //       }
      
// // //       if (constantTermsLeft.length > 0) {
// // //         const termToMove = constantTermsLeft[0];
// // //         solutionSteps.push(`Subtract ${termToMove} from both sides to move constants to right side`);
// // //       }
      
// // //       solutionSteps.push(`Combine like terms: ${formatNumber(coefficient)}${variable} = ${formatNumber(-constant)}`);
      
// // //     } else {
// // //       const leftTerms = leftSide.match(/[+-]?[^+-]+/g) || [];
// // //       const rightTerms = rightSide.match(/[+-]?[^+-]+/g) || [];
      
// // //       let variableTermsLeft = [];
// // //       let constantTermsLeft = [];
// // //       let variableTermsRight = [];
      
// // //       leftTerms.forEach(term => {
// // //         if (term.includes(variable)) {
// // //           variableTermsLeft.push(term);
// // //         } else {
// // //           constantTermsLeft.push(term);
// // //         }
// // //       });
      
// // //       rightTerms.forEach(term => {
// // //         if (term.includes(variable)) {
// // //           variableTermsRight.push(term);
// // //         }
// // //       });
      
// // //       if (constantTermsLeft.length > 0) {
// // //         const termToMove = constantTermsLeft[0];
// // //         solutionSteps.push(`Subtract ${termToMove} from both sides to move it to the right`);
// // //       }
      
// // //       if (variableTermsRight.length > 0) {
// // //         const termToMove = variableTermsRight[0];
// // //         solutionSteps.push(`Subtract ${termToMove} from both sides to move it to the left`);
// // //       }
      
// // //       solutionSteps.push(`Combine like terms: ${formatNumber(coefficient)}${variable} = ${formatNumber(-constant)}`);
// // //     }
    
// // //     if (coefficient !== 1) {
// // //       solutionSteps.push(`Divide both sides by ${formatNumber(coefficient)}: ${variable} = ${formatNumber(-constant)}/${formatNumber(coefficient)}`);
// // //     }
    
// // //     solutionSteps.push(`Solution: ${variable} = ${formatNumber(result)}`);
    
// // //     return { solution: result, steps: solutionSteps };
// // //   };

// // //   const addToHistory = (equation, solution, variable) => {
// // //     const historyItem = {
// // //       equation: equation,
// // //       solution: solution,
// // //       variable: variable,
// // //       timestamp: new Date().toLocaleString()
// // //     };
    
// // //     setHistory(prevHistory => {
// // //       // Remove duplicate if exists
// // //       const filtered = prevHistory.filter(item => item.equation !== equation);
// // //       // Add new item at the beginning and keep only last 8 items
// // //       return [historyItem, ...filtered].slice(0, 8);
// // //     });
// // //   };

// // //   const handleSolve = () => {
// // //     try {
// // //       setError('');
// // //       setSolution(null);
// // //       setSteps([]);
// // //       setVariable('');
      
// // //       if (!equation.trim()) {
// // //         setError('Please enter an equation');
// // //         inputRef.current?.focus();
// // //         return;
// // //       }
      
// // //       const parsed = parseLinearEquation(equation);
// // //       const sides = equation.split('=');
// // //       const leftSide = sides[0].trim();
// // //       const rightSide = sides[1].trim();
// // //       const result = solveLinearEquation(
// // //         parsed.coefficient, 
// // //         parsed.constant, 
// // //         parsed.variable, 
// // //         equation, 
// // //         leftSide, 
// // //         rightSide,
// // //         parsed.expandedEquation
// // //       );
      
// // //       setVariable(parsed.variable);
// // //       setSolution(result.solution);
// // //       setSteps(result.steps);
      
// // //       // Add to history only for successful solutions
// // //       addToHistory(equation, result.solution, parsed.variable);
      
// // //       // Return focus to input after solving
// // //       setTimeout(() => inputRef.current?.focus(), 100);
      
// // //     } catch (err) {
// // //       setError(err.message);
// // //       setSolution(null);
// // //       setSteps([]);
// // //       setVariable('');
// // //       inputRef.current?.focus();
// // //     }
// // //   };

// // //   const handleClear = () => {
// // //     setEquation('');
// // //     setSolution(null);
// // //     setError('');
// // //     setSteps([]);
// // //     setVariable('');
// // //     inputRef.current?.focus();
// // //   };

// // //   const handleKeyDown = (e) => {
// // //     if (e.key === 'Enter') {
// // //       handleSolve();
// // //     } else if (e.key === 'Escape') {
// // //       handleClear();
// // //     }
// // //   };

// // //   const handleExampleClick = (exampleEquation) => {
// // //     setEquation(exampleEquation);
// // //     setError('');
// // //     setSolution(null);
// // //     setSteps([]);
// // //     setVariable('');
    
// // //     // Return focus to input
// // //     setTimeout(() => inputRef.current?.focus(), 100);
// // //   };

// // //   const handleHistoryClick = (historyItem) => {
// // //     setEquation(historyItem.equation);
// // //     setSolution(historyItem.solution);
// // //     setVariable(historyItem.variable);
// // //     setError('');
// // //     setSteps([]);
    
// // //     // Return focus to input
// // //     setTimeout(() => inputRef.current?.focus(), 100);
// // //   };

// // //   const clearHistory = () => {
// // //     setHistory([]);
// // //   };

// // //   const toggleHistory = () => {
// // //     setIsHistoryExpanded(!isHistoryExpanded);
// // //   };

// // //   const generateRandomEquation = (level) => {
// // //     const variables = ['x', 'y', 'z', 'a', 'b'];
// // //     const variable = variables[Math.floor(Math.random() * variables.length)];
    
// // //     let equation = '';
    
// // //     switch(level) {
// // //       case 'easy':
// // //         // ax = b or x + a = b
// // //         if (Math.random() < 0.5) {
// // //           const a = Math.floor(Math.random() * 8) + 2;
// // //           const b = a * (Math.floor(Math.random() * 10) + 1);
// // //           equation = `${a}${variable} = ${b}`;
// // //         } else {
// // //           const a = Math.floor(Math.random() * 10) + 1;
// // //           const x = Math.floor(Math.random() * 10) + 1;
// // //           const b = x + a;
// // //           equation = `${variable} + ${a} = ${b}`;
// // //         }
// // //         break;
        
// // //       case 'medium':
// // //         // ax + b = cx + d
// // //         const a = Math.floor(Math.random() * 5) + 2;
// // //         const b = Math.floor(Math.random() * 10) + 1;
// // //         const c = Math.floor(Math.random() * 3) + 1;
// // //         const d = Math.floor(Math.random() * 10) + 1;
// // //         equation = `${a}${variable} + ${b} = ${c}${variable} + ${d}`;
// // //         break;
        
// // //       case 'hard':
// // //         // a(x + b) = c
// // //         const coef = Math.floor(Math.random() * 4) + 2;
// // //         const inside = Math.floor(Math.random() * 8) + 1;
// // //         const result = coef * (Math.floor(Math.random() * 5) + inside + 1);
// // //         equation = `${coef}(${variable} + ${inside}) = ${result}`;
// // //         break;
        
// // //       case 'expert':
// // //         // Fraction coefficients
// // //         const num1 = Math.floor(Math.random() * 3) + 1;
// // //         const den1 = Math.floor(Math.random() * 3) + 2;
// // //         const num2 = Math.floor(Math.random() * 4) + 1;
// // //         const den2 = Math.floor(Math.random() * 4) + 2;
// // //         const const1 = Math.floor(Math.random() * 6) + 1;
// // //         const const2 = Math.floor(Math.random() * 8) + 1;
// // //         equation = `${num1}/${den1}${variable} + ${const1} = ${num2}/${den2}${variable} + ${const2}`;
// // //         break;
// // //     }
    
// // //     setEquation(equation);
// // //     setError('');
// // //     setSolution(null);
// // //     setSteps([]);
// // //     setVariable('');
    
// // //     // Return focus to input after generating
// // //     setTimeout(() => inputRef.current?.focus(), 100);
// // //   };

// // //   const formatSolution = (solution) => {
// // //     if (typeof solution === 'string') {
// // //       return solution;
// // //     }
// // //     return `${variable} = ${formatNumber(solution)}`;
// // //   };

// // //   const formatHistorySolution = (solution, variable) => {
// // //     if (typeof solution === 'string') {
// // //       return solution;
// // //     }
// // //     return `${variable} = ${formatNumber(solution)}`;
// // //   };

// // //   return (
// // //     <div className={styles.container}>
// // //       <div className={styles.mainLayout}>
// // //         <div className={styles.leftPanel}>
// // //           <div className={styles.inputSection}>
// // //             <label className={styles.label}>
// // //               Enter your linear equation with any variable (Press Enter to solve, Escape to clear):
// // //             </label>
// // //             <input
// // //               ref={inputRef}
// // //               type="text"
// // //               value={equation}
// // //               onChange={(e) => setEquation(e.target.value)}
// // //               placeholder="Enter equation like: 2x + 3 = 7, 2(x + 3) = 10, or 1.5x + 2/3 = 4"
// // //               className={styles.input}
// // //               onKeyDown={handleKeyDown}
// // //             />
// // //             <div className={styles.buttonGroup}>
// // //               <button onClick={handleSolve} className={styles.solveButton}>
// // //                 Solve
// // //               </button>
// // //               <button onClick={handleClear} className={styles.clearButton}>
// // //                 Clear
// // //               </button>
// // //             </div>
            
// // //             <div className={styles.generatorSection}>
// // //               <label className={styles.generatorLabel}>Generate random equation:</label>
// // //               <div className={styles.generatorButtons}>
// // //                 <button onClick={() => generateRandomEquation('easy')} className={styles.generatorButton}>
// // //                   Easy (ax = b)
// // //                 </button>
// // //                 <button onClick={() => generateRandomEquation('medium')} className={styles.generatorButton}>
// // //                   Medium (ax + b = cx + d)
// // //                 </button>
// // //                 <button onClick={() => generateRandomEquation('hard')} className={styles.generatorButton}>
// // //                   Hard (a(x + b) = c)
// // //                 </button>
// // //                 <button onClick={() => generateRandomEquation('expert')} className={styles.generatorButton}>
// // //                   Expert (fractions)
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {error && (
// // //             <div className={styles.error}>
// // //               <strong>Error:</strong> {error}
// // //             </div>
// // //           )}

// // //           {history.length > 0 && (
// // //             <div className={styles.historySection}>
// // //               <div className={styles.historyHeader} onClick={toggleHistory}>
// // //                 <h3 className={styles.historyTitle}>
// // //                   Recent Equations ({history.length})
// // //                   <span className={styles.historyToggle}>
// // //                     {isHistoryExpanded ? '▼' : '▶'}
// // //                   </span>
// // //                 </h3>
// // //                 {isHistoryExpanded && (
// // //                   <button onClick={(e) => {
// // //                     e.stopPropagation();
// // //                     clearHistory();
// // //                   }} className={styles.clearHistoryButton}>
// // //                     Clear History
// // //                   </button>
// // //                 )}
// // //               </div>
// // //               {isHistoryExpanded && (
// // //                 <div className={styles.historyList}>
// // //                   {history.map((item, index) => (
// // //                     <div 
// // //                       key={index} 
// // //                       className={styles.historyItem}
// // //                       onClick={() => handleHistoryClick(item)}
// // //                     >
// // //                       <div className={styles.historyEquation}>{item.equation}</div>
// // //                       <div className={styles.historySolution}>
// // //                         {formatHistorySolution(item.solution, item.variable)}
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               )}
// // //             </div>
// // //           )}
// // //         </div>

// // //         <div className={styles.rightPanel}>
// // //           {solution !== null ? (
// // //             <div className={styles.solutionSection}>
// // //               <h2 className={styles.solutionTitle}>Solution</h2>
// // //               <div className={styles.solution}>
// // //                 {formatSolution(solution)}
// // //               </div>
              
// // //               {steps.length > 0 && (
// // //                 <div className={styles.stepsSection}>
// // //                   <h3 className={styles.stepsTitle}>Step-by-step solution:</h3>
// // //                   <ol className={styles.stepsList}>
// // //                     {steps.map((step, index) => (
// // //                       <li key={index} className={styles.step}>
// // //                         {step}
// // //                       </li>
// // //                     ))}
// // //                   </ol>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           ) : (
// // //             <div className={styles.tabsContainer}>
// // //               <div className={styles.tabsHeader}>
// // //                 <button 
// // //                   onClick={() => setActiveTab('examples')} 
// // //                   className={`${styles.tab} ${activeTab === 'examples' ? styles.tabActive : ''}`}
// // //                 >
// // //                   Examples
// // //                 </button>
// // //                 <button 
// // //                   onClick={() => setActiveTab('instructions')} 
// // //                   className={`${styles.tab} ${activeTab === 'instructions' ? styles.tabActive : ''}`}
// // //                 >
// // //                   Instructions
// // //                 </button>
// // //                 <button 
// // //                   onClick={() => setActiveTab('links')} 
// // //                   className={`${styles.tab} ${activeTab === 'links' ? styles.tabActive : ''}`}
// // //                 >
// // //                   Resources
// // //                 </button>
// // //               </div>
              
// // //               <div className={styles.tabContent}>
// // //                 {activeTab === 'examples' && (
// // //                   <div className={styles.examples}>
// // //                     <h3 className={styles.examplesTitle}>Example equations you can try:</h3>
// // //                     <ul className={styles.examplesList}>
// // //                       <li onClick={() => handleExampleClick('2x + 3 = 7')}>2x + 3 = 7</li>
// // //                       <li onClick={() => handleExampleClick('3y - 5 = 2y + 1')}>3y - 5 = 2y + 1</li>
// // //                       <li onClick={() => handleExampleClick('5a = 15')}>5a = 15</li>
// // //                       <li onClick={() => handleExampleClick('2(x + 3) = 10')}>2(x + 3) = 10</li>
// // //                       <li onClick={() => handleExampleClick('-3(2y - 1) = 9')}>-3(2y - 1) = 9</li>
// // //                       <li onClick={() => handleExampleClick('4(z - 2) = 2z + 8')}>4(z - 2) = 2z + 8</li>
// // //                       <li onClick={() => handleExampleClick('1.5x + 2/3 = 4')}>1.5x + 2/3 = 4</li>
// // //                       <li onClick={() => handleExampleClick('3/4y - 1/2 = 2y + 1/4')}>3/4y - 1/2 = 2y + 1/4</li>
// // //                       <li onClick={() => handleExampleClick('0.25z + 1.5 = 2.75')}>0.25z + 1.5 = 2.75</li>
// // //                     </ul>
// // //                   </div>
// // //                 )}
                
// // //                 {activeTab === 'instructions' && explanations?.instructions && (
// // //                   <div className={styles.instructions}>
// // //                     <h3 className={styles.instructionsTitle}>How to use:</h3>
// // //                     <ul className={styles.instructionsList}>
// // //                       {explanations.instructions.map((instruction, index) => (
// // //                         <li key={index} className={styles.instructionItem}>
// // //                           {instruction}
// // //                         </li>
// // //                       ))}
// // //                     </ul>
// // //                   </div>
// // //                 )}
                
// // //                 {activeTab === 'links' && (explanations?.links || explanations?.externalLinks) && (
// // //                   <div className={styles.resources}>
// // //                     <h3 className={styles.resourcesTitle}>Additional Resources:</h3>
                    
// // //                     {explanations.links && (
// // //                       <div className={styles.internalLinks}>
// // //                         <h4 className={styles.linkGroupTitle}>Internal Links:</h4>
// // //                         <ul className={styles.linksList}>
// // //                           {explanations.links.map((link, index) => (
// // //                             <li key={index} className={styles.linkItem}>
// // //                               <a href={link.url} className={styles.link}>
// // //                                 {link.text}
// // //                               </a>
// // //                             </li>
// // //                           ))}
// // //                         </ul>
// // //                       </div>
// // //                     )}

// // //                     {explanations.externalLinks && (
// // //                       <div className={styles.externalLinks}>
// // //                         <h4 className={styles.linkGroupTitle}>External Resources:</h4>
// // //                         <ul className={styles.linksList}>
// // //                           {explanations.externalLinks.map((link, index) => (
// // //                             <li key={index} className={styles.linkItem}>
// // //                               <a 
// // //                                 href={link.url} 
// // //                                 className={styles.link}
// // //                                 target="_blank"
// // //                                 rel="noopener noreferrer"
// // //                               >
// // //                                 {link.text}
// // //                               </a>
// // //                             </li>
// // //                           ))}
// // //                         </ul>
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default LinearEquationSolver;


// // import { useState, useRef } from 'react';
// // import styles from './LinearEquationSolver.module.css';

// // const LinearEquationSolver = ({ explanations }) => {
// //   const [equation, setEquation] = useState('');
// //   const [solution, setSolution] = useState(null);
// //   const [error, setError] = useState('');
// //   const [steps, setSteps] = useState([]);
// //   const [variable, setVariable] = useState('');
// //   const [history, setHistory] = useState([]);
// //   const [isHistoryExpanded, setIsHistoryExpanded] = useState(false);
// //   const [activeTab, setActiveTab] = useState('examples');
// //   const inputRef = useRef(null);

// //   const parseFraction = (str) => {
// //     if (!str || str === '') return 0;
    
// //     // Handle negative signs
// //     const isNegative = str.startsWith('-');
// //     const cleanStr = str.replace(/^[+-]/, '');
    
// //     if (cleanStr.includes('/')) {
// //       const parts = cleanStr.split('/');
// //       if (parts.length !== 2) return NaN;
      
// //       const numerator = parseFloat(parts[0]);
// //       const denominator = parseFloat(parts[1]);
      
// //       if (isNaN(numerator) || isNaN(denominator) || denominator === 0) {
// //         return NaN;
// //       }
      
// //       const result = numerator / denominator;
// //       return isNegative ? -result : result;
// //     }
    
// //     const result = parseFloat(cleanStr);
// //     return isNaN(result) ? NaN : (isNegative ? -result : result);
// //   };

// //   const expandParentheses = (equation) => {
// //     const pattern = /([+-]?\d*\.?\d*(?:\/\d+)?)\(([^)]+)\)/g;
    
// //     return equation.replace(pattern, (match, coef, inside) => {
// //       if (coef === '' || coef === '+') coef = '1';
// //       if (coef === '-') coef = '-1';
      
// //       const coefficient = parseFraction(coef);
// //       if (isNaN(coefficient)) {
// //         throw new Error(`Invalid coefficient: ${coef}`);
// //       }
      
// //       const insideNormalized = inside.replace(/(?<!^|[+-])-/g, '+-');
// //       const terms = insideNormalized.split('+').filter(term => term !== '');
      
// //       const expandedTerms = terms.map(term => {
// //         const variableMatch = term.match(/[a-z]/);
// //         const variable = variableMatch ? variableMatch[0] : null;
        
// //         if (variable) {
// //           const coeffStr = term.replace(/[a-z]/g, '');
// //           let termCoeff = 1;
          
// //           if (coeffStr === '' || coeffStr === '+') {
// //             termCoeff = 1;
// //           } else if (coeffStr === '-') {
// //             termCoeff = -1;
// //           } else {
// //             termCoeff = parseFraction(coeffStr);
// //             if (isNaN(termCoeff)) {
// //               throw new Error(`Invalid term coefficient: ${coeffStr}`);
// //             }
// //           }
          
// //           const result = coefficient * termCoeff;
          
// //           if (result === 1) {
// //             return variable;
// //           } else if (result === -1) {
// //             return `-${variable}`;
// //           } else {
// //             return `${result}${variable}`;
// //           }
// //         } else {
// //           const constValue = parseFraction(term);
// //           if (isNaN(constValue)) {
// //             throw new Error(`Invalid constant term: ${term}`);
// //           }
// //           return (coefficient * constValue).toString();
// //         }
// //       });
      
// //       let result = expandedTerms[0];
// //       for (let i = 1; i < expandedTerms.length; i++) {
// //         const term = expandedTerms[i];
// //         if (term.startsWith('-')) {
// //           result += term;
// //         } else {
// //           result += '+' + term;
// //         }
// //       }
      
// //       return result;
// //     });
// //   };

// //   const parseLinearEquation = (eq) => {
// //     let cleanEq = eq.replace(/\s+/g, '').toLowerCase();
// //     cleanEq = expandParentheses(cleanEq);
    
// //     if (!cleanEq.includes('=')) {
// //       throw new Error('Equation must contain an equals sign (=)');
// //     }
    
// //     const sides = cleanEq.split('=');
// //     if (sides.length !== 2) {
// //       throw new Error('Equation must have exactly one equals sign');
// //     }
    
// //     const leftSide = sides[0];
// //     const rightSide = sides[1];
    
// //     if (!leftSide || !rightSide) {
// //       throw new Error('Both sides of the equation must have content');
// //     }
    
// //     const variableMatch = cleanEq.match(/[a-z]/);
// //     if (!variableMatch) {
// //       throw new Error('No variable found in the equation');
// //     }
// //     const variable = variableMatch[0];
    
// //     const parseExpression = (expr) => {
// //       let coefficient = 0;
// //       let constant = 0;
      
// //       const normalized = expr.replace(/(?<!^)-/g, '+-');
// //       const terms = normalized.split('+').filter(term => term !== '');
      
// //       for (let term of terms) {
// //         if (term.includes(variable)) {
// //           const pattern = new RegExp(`^([+-]?\\d*\\.?\\d*(?:\\/\\d+)?)${variable}$`);
// //           const coefMatch = term.match(pattern);
// //           if (coefMatch) {
// //             let coef = coefMatch[1];
// //             if (coef === '' || coef === '+') coef = '1';
// //             if (coef === '-') coef = '-1';
            
// //             const parsedCoef = parseFraction(coef);
// //             if (isNaN(parsedCoef)) {
// //               throw new Error(`Invalid coefficient: ${coef}`);
// //             }
// //             coefficient += parsedCoef;
// //           } else {
// //             throw new Error(`Invalid term: ${term}`);
// //           }
// //         } else {
// //           const constMatch = term.match(/^([+-]?\d*\.?\d*(?:\/\d+)?)$/);
// //           if (constMatch && constMatch[1] !== '') {
// //             const parsedConst = parseFraction(constMatch[1]);
// //             if (isNaN(parsedConst)) {
// //               throw new Error(`Invalid constant: ${constMatch[1]}`);
// //             }
// //             constant += parsedConst;
// //           } else if (term !== '') {
// //             throw new Error(`Invalid term: ${term}`);
// //           }
// //         }
// //       }
      
// //       return { coefficient, constant };
// //     };
    
// //     const left = parseExpression(leftSide);
// //     const right = parseExpression(rightSide);
    
// //     const finalCoeff = left.coefficient - right.coefficient;
// //     const finalConstant = left.constant - right.constant;
    
// //     return { 
// //       coefficient: finalCoeff, 
// //       constant: finalConstant, 
// //       variable,
// //       expandedEquation: cleanEq
// //     };
// //   };

// //   const formatNumber = (num) => {
// //     if (Number.isInteger(num)) {
// //       return num.toString();
// //     } else {
// //       // Check if it's a simple fraction
// //       const tolerance = 1e-10;
// //       for (let denom = 2; denom <= 20; denom++) {
// //         const numerator = Math.round(num * denom);
// //         if (Math.abs(num - numerator / denom) < tolerance) {
// //           if (numerator === denom) return '1';
// //           if (numerator === -denom) return '-1';
// //           return `${numerator}/${denom}`;
// //         }
// //       }
// //       return num.toFixed(4).replace(/\.?0+$/, '');
// //     }
// //   };

// //   const solveLinearEquation = (coefficient, constant, variable, originalEquation, leftSide, rightSide, expandedEquation) => {
// //     const solutionSteps = [];
    
// //     if (Math.abs(coefficient) < 1e-10) {
// //       if (Math.abs(constant) < 1e-10) {
// //         return { 
// //           solution: 'infinitely many solutions', 
// //           steps: [originalEquation, '0 = 0', `This is always true, so ${variable} can be any real number`] 
// //         };
// //       } else {
// //         return { 
// //           solution: 'no solution', 
// //           steps: [originalEquation, `${formatNumber(constant)} = 0`, 'This is never true, so there is no solution'] 
// //         };
// //       }
// //     }
    
// //     const result = -constant / coefficient;
    
// //     solutionSteps.push(`Original equation: ${originalEquation}`);
    
// //     const hasParentheses = originalEquation.includes('(');
    
// //     if (hasParentheses) {
// //       const parenthesesMatch = originalEquation.match(/([+-]?\d*\.?\d*(?:\/\d+)?)\(([^)]+)\)/);
// //       if (parenthesesMatch) {
// //         let coef = parenthesesMatch[1];
// //         if (coef === '' || coef === '+') coef = '1';
// //         if (coef === '-') coef = '-1';
// //         const insideTerms = parenthesesMatch[2];
        
// //         solutionSteps.push(`Expand parentheses using distributive property: ${coef}(${insideTerms})`);
// //       }
      
// //       solutionSteps.push(`After expanding: ${expandedEquation}`);
      
// //       const expSides = expandedEquation.split('=');
// //       const expLeft = expSides[0];
// //       const expRight = expSides[1];
// //       const expLeftTerms = expLeft.match(/[+-]?[^+-]+/g) || [];
// //       const expRightTerms = expRight.match(/[+-]?[^+-]+/g) || [];
      
// //       let constantTermsLeft = [];
// //       let variableTermsRight = [];
      
// //       expLeftTerms.forEach(term => {
// //         if (!term.includes(variable)) {
// //           constantTermsLeft.push(term);
// //         }
// //       });
      
// //       expRightTerms.forEach(term => {
// //         if (term.includes(variable)) {
// //           variableTermsRight.push(term);
// //         }
// //       });
      
// //       if (variableTermsRight.length > 0) {
// //         const termToMove = variableTermsRight[0];
// //         solutionSteps.push(`Subtract ${termToMove} from both sides to move variables to left side`);
// //       }
      
// //       if (constantTermsLeft.length > 0) {
// //         const termToMove = constantTermsLeft[0];
// //         solutionSteps.push(`Subtract ${termToMove} from both sides to move constants to right side`);
// //       }
      
// //       solutionSteps.push(`Combine like terms: ${formatNumber(coefficient)}${variable} = ${formatNumber(-constant)}`);
      
// //     } else {
// //       const leftTerms = leftSide.match(/[+-]?[^+-]+/g) || [];
// //       const rightTerms = rightSide.match(/[+-]?[^+-]+/g) || [];
      
// //       let variableTermsLeft = [];
// //       let constantTermsLeft = [];
// //       let variableTermsRight = [];
      
// //       leftTerms.forEach(term => {
// //         if (term.includes(variable)) {
// //           variableTermsLeft.push(term);
// //         } else {
// //           constantTermsLeft.push(term);
// //         }
// //       });
      
// //       rightTerms.forEach(term => {
// //         if (term.includes(variable)) {
// //           variableTermsRight.push(term);
// //         }
// //       });
      
// //       if (constantTermsLeft.length > 0) {
// //         const termToMove = constantTermsLeft[0];
// //         solutionSteps.push(`Subtract ${termToMove} from both sides to move it to the right`);
// //       }
      
// //       if (variableTermsRight.length > 0) {
// //         const termToMove = variableTermsRight[0];
// //         solutionSteps.push(`Subtract ${termToMove} from both sides to move it to the left`);
// //       }
      
// //       solutionSteps.push(`Combine like terms: ${formatNumber(coefficient)}${variable} = ${formatNumber(-constant)}`);
// //     }
    
// //     if (coefficient !== 1) {
// //       solutionSteps.push(`Divide both sides by ${formatNumber(coefficient)}: ${variable} = ${formatNumber(-constant)}/${formatNumber(coefficient)}`);
// //     }
    
// //     solutionSteps.push(`Solution: ${variable} = ${formatNumber(result)}`);
    
// //     return { solution: result, steps: solutionSteps };
// //   };

// //   const addToHistory = (equation, solution, variable) => {
// //     const historyItem = {
// //       equation: equation,
// //       solution: solution,
// //       variable: variable,
// //       timestamp: new Date().toLocaleString()
// //     };
    
// //     setHistory(prevHistory => {
// //       // Remove duplicate if exists
// //       const filtered = prevHistory.filter(item => item.equation !== equation);
// //       // Add new item at the beginning and keep only last 8 items
// //       return [historyItem, ...filtered].slice(0, 8);
// //     });
// //   };

// //   const handleSolve = () => {
// //     try {
// //       setError('');
// //       setSolution(null);
// //       setSteps([]);
// //       setVariable('');
      
// //       if (!equation.trim()) {
// //         setError('Please enter an equation');
// //         inputRef.current?.focus();
// //         return;
// //       }
      
// //       const parsed = parseLinearEquation(equation);
// //       const sides = equation.split('=');
// //       const leftSide = sides[0].trim();
// //       const rightSide = sides[1].trim();
// //       const result = solveLinearEquation(
// //         parsed.coefficient, 
// //         parsed.constant, 
// //         parsed.variable, 
// //         equation, 
// //         leftSide, 
// //         rightSide,
// //         parsed.expandedEquation
// //       );
      
// //       setVariable(parsed.variable);
// //       setSolution(result.solution);
// //       setSteps(result.steps);
      
// //       // Add to history only for successful solutions
// //       addToHistory(equation, result.solution, parsed.variable);
      
// //       // Return focus to input after solving
// //       setTimeout(() => inputRef.current?.focus(), 100);
      
// //     } catch (err) {
// //       setError(err.message);
// //       setSolution(null);
// //       setSteps([]);
// //       setVariable('');
// //       inputRef.current?.focus();
// //     }
// //   };

// //   const handleClear = () => {
// //     setEquation('');
// //     setSolution(null);
// //     setError('');
// //     setSteps([]);
// //     setVariable('');
// //     inputRef.current?.focus();
// //   };

// //   const handleKeyDown = (e) => {
// //     if (e.key === 'Enter') {
// //       handleSolve();
// //     } else if (e.key === 'Escape') {
// //       handleClear();
// //     }
// //   };

// //   const handleExampleClick = (exampleEquation) => {
// //     setEquation(exampleEquation);
// //     setError('');
// //     setSolution(null);
// //     setSteps([]);
// //     setVariable('');
    
// //     // Return focus to input
// //     setTimeout(() => inputRef.current?.focus(), 100);
// //   };

// //   const handleHistoryClick = (historyItem) => {
// //     setEquation(historyItem.equation);
// //     setSolution(historyItem.solution);
// //     setVariable(historyItem.variable);
// //     setError('');
// //     setSteps([]);
    
// //     // Return focus to input
// //     setTimeout(() => inputRef.current?.focus(), 100);
// //   };

// //   const clearHistory = () => {
// //     setHistory([]);
// //   };

// //   const toggleHistory = () => {
// //     setIsHistoryExpanded(!isHistoryExpanded);
// //   };

// //   const generateRandomEquation = (level) => {
// //     const variables = ['x', 'y', 'z', 'a', 'b'];
// //     const variable = variables[Math.floor(Math.random() * variables.length)];
    
// //     let equation = '';
    
// //     switch(level) {
// //       case 'easy':
// //         // ax = b or x + a = b
// //         if (Math.random() < 0.5) {
// //           const a = Math.floor(Math.random() * 8) + 2;
// //           const b = a * (Math.floor(Math.random() * 10) + 1);
// //           equation = `${a}${variable} = ${b}`;
// //         } else {
// //           const a = Math.floor(Math.random() * 10) + 1;
// //           const x = Math.floor(Math.random() * 10) + 1;
// //           const b = x + a;
// //           equation = `${variable} + ${a} = ${b}`;
// //         }
// //         break;
        
// //       case 'medium':
// //         // ax + b = cx + d
// //         const a = Math.floor(Math.random() * 5) + 2;
// //         const b = Math.floor(Math.random() * 10) + 1;
// //         const c = Math.floor(Math.random() * 3) + 1;
// //         const d = Math.floor(Math.random() * 10) + 1;
// //         equation = `${a}${variable} + ${b} = ${c}${variable} + ${d}`;
// //         break;
        
// //       case 'hard':
// //         // a(x + b) = c
// //         const coef = Math.floor(Math.random() * 4) + 2;
// //         const inside = Math.floor(Math.random() * 8) + 1;
// //         const result = coef * (Math.floor(Math.random() * 5) + inside + 1);
// //         equation = `${coef}(${variable} + ${inside}) = ${result}`;
// //         break;
        
// //       case 'expert':
// //         // Fraction coefficients
// //         const num1 = Math.floor(Math.random() * 3) + 1;
// //         const den1 = Math.floor(Math.random() * 3) + 2;
// //         const num2 = Math.floor(Math.random() * 4) + 1;
// //         const den2 = Math.floor(Math.random() * 4) + 2;
// //         const const1 = Math.floor(Math.random() * 6) + 1;
// //         const const2 = Math.floor(Math.random() * 8) + 1;
// //         equation = `${num1}/${den1}${variable} + ${const1} = ${num2}/${den2}${variable} + ${const2}`;
// //         break;
// //     }
    
// //     setEquation(equation);
// //     setError('');
// //     setSolution(null);
// //     setSteps([]);
// //     setVariable('');
    
// //     // Return focus to input after generating
// //     setTimeout(() => inputRef.current?.focus(), 100);
// //   };

// //   const formatSolution = (solution) => {
// //     if (typeof solution === 'string') {
// //       return solution;
// //     }
// //     return `${variable} = ${formatNumber(solution)}`;
// //   };

// //   const formatHistorySolution = (solution, variable) => {
// //     if (typeof solution === 'string') {
// //       return solution;
// //     }
// //     return `${variable} = ${formatNumber(solution)}`;
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <div className={styles.mainLayout}>
// //         <div className={styles.leftPanel}>
// //           <div className={styles.inputSection}>
// //             <label className={styles.label}>
// //               Enter your linear equation with any variable (Press Enter to solve, Escape to clear):
// //             </label>
// //             <input
// //               ref={inputRef}
// //               type="text"
// //               value={equation}
// //               onChange={(e) => setEquation(e.target.value)}
// //               placeholder="Enter equation like: 2x + 3 = 7, 2(x + 3) = 10, or 1.5x + 2/3 = 4"
// //               className={styles.input}
// //               onKeyDown={handleKeyDown}
// //             />
// //             <div className={styles.buttonGroup}>
// //               <button onClick={handleSolve} className={styles.solveButton}>
// //                 Solve
// //               </button>
// //               <button onClick={handleClear} className={styles.clearButton}>
// //                 Clear
// //               </button>
// //             </div>
            
// //             <div className={styles.generatorSection}>
// //               <label className={styles.generatorLabel}>Generate random equation:</label>
// //               <div className={styles.generatorButtons}>
// //                 <button onClick={() => generateRandomEquation('easy')} className={styles.generatorButton}>
// //                   Easy (ax = b)
// //                 </button>
// //                 <button onClick={() => generateRandomEquation('medium')} className={styles.generatorButton}>
// //                   Medium (ax + b = cx + d)
// //                 </button>
// //                 <button onClick={() => generateRandomEquation('hard')} className={styles.generatorButton}>
// //                   Hard (a(x + b) = c)
// //                 </button>
// //                 <button onClick={() => generateRandomEquation('expert')} className={styles.generatorButton}>
// //                   Expert (fractions)
// //                 </button>
// //               </div>
// //             </div>
// //           </div>

// //           {error && (
// //             <div className={styles.error}>
// //               <strong>Error:</strong> {error}
// //             </div>
// //           )}

// //           {history.length > 0 && (
// //             <div className={styles.historySection}>
// //               <div className={styles.historyHeader} onClick={toggleHistory}>
// //                 <h3 className={styles.historyTitle}>
// //                   Recent Equations ({history.length})
// //                   <span className={styles.historyToggle}>
// //                     {isHistoryExpanded ? '▼' : '▶'}
// //                   </span>
// //                 </h3>
// //                 {isHistoryExpanded && (
// //                   <button onClick={(e) => {
// //                     e.stopPropagation();
// //                     clearHistory();
// //                   }} className={styles.clearHistoryButton}>
// //                     Clear History
// //                   </button>
// //                 )}
// //               </div>
// //               {isHistoryExpanded && (
// //                 <div className={styles.historyList}>
// //                   {history.map((item, index) => (
// //                     <div 
// //                       key={index} 
// //                       className={styles.historyItem}
// //                       onClick={() => handleHistoryClick(item)}
// //                     >
// //                       <div className={styles.historyEquation}>{item.equation}</div>
// //                       <div className={styles.historySolution}>
// //                         {formatHistorySolution(item.solution, item.variable)}
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>
// //           )}
// //         </div>

// //         <div className={styles.rightPanel}>
// //           {solution !== null ? (
// //             <div className={styles.solutionSection}>
// //               <h2 className={styles.solutionTitle}>Solution</h2>
// //               <div className={styles.solution}>
// //                 {formatSolution(solution)}
// //               </div>
              
// //               {steps.length > 0 && (
// //                 <div className={styles.stepsSection}>
// //                   <h3 className={styles.stepsTitle}>Step-by-step solution:</h3>
// //                   <ol className={styles.stepsList}>
// //                     {steps.map((step, index) => (
// //                       <li key={index} className={styles.step}>
// //                         {step}
// //                       </li>
// //                     ))}
// //                   </ol>
// //                 </div>
// //               )}
// //             </div>
// //           ) : (
// //             <div className={styles.tabsContainer}>
// //               <div className={styles.tabsHeader}>
// //                 <button 
// //                   onClick={() => setActiveTab('examples')} 
// //                   className={`${styles.tab} ${activeTab === 'examples' ? styles.tabActive : ''}`}
// //                 >
// //                   Examples
// //                 </button>
// //                 <button 
// //                   onClick={() => setActiveTab('instructions')} 
// //                   className={`${styles.tab} ${activeTab === 'instructions' ? styles.tabActive : ''}`}
// //                 >
// //                   Instructions
// //                 </button>
// //                 <button 
// //                   onClick={() => setActiveTab('links')} 
// //                   className={`${styles.tab} ${activeTab === 'links' ? styles.tabActive : ''}`}
// //                 >
// //                   Resources
// //                 </button>
// //               </div>
              
// //               <div className={styles.tabContent}>
// //                 {activeTab === 'examples' && (
// //                   <div className={styles.examples}>
// //                     <h3 className={styles.examplesTitle}>Example equations you can try:</h3>
// //                     <ul className={styles.examplesList}>
// //                       <li onClick={() => handleExampleClick('2x + 3 = 7')}>2x + 3 = 7</li>
// //                       <li onClick={() => handleExampleClick('3y - 5 = 2y + 1')}>3y - 5 = 2y + 1</li>
// //                       <li onClick={() => handleExampleClick('5a = 15')}>5a = 15</li>
// //                       <li onClick={() => handleExampleClick('2(x + 3) = 10')}>2(x + 3) = 10</li>
// //                       <li onClick={() => handleExampleClick('-3(2y - 1) = 9')}>-3(2y - 1) = 9</li>
// //                       <li onClick={() => handleExampleClick('4(z - 2) = 2z + 8')}>4(z - 2) = 2z + 8</li>
// //                       <li onClick={() => handleExampleClick('1.5x + 2/3 = 4')}>1.5x + 2/3 = 4</li>
// //                       <li onClick={() => handleExampleClick('3/4y - 1/2 = 2y + 1/4')}>3/4y - 1/2 = 2y + 1/4</li>
// //                       <li onClick={() => handleExampleClick('0.25z + 1.5 = 2.75')}>0.25z + 1.5 = 2.75</li>
// //                     </ul>
// //                   </div>
// //                 )}
                
// //                 {activeTab === 'instructions' && (
// //                   <div className={styles.instructions}>
// //                     <h3 className={styles.instructionsTitle}>How to use:</h3>
// //                     <ul className={styles.instructionsList}>
// //                       {explanations?.instructions ? (
// //                         explanations.instructions.map((instruction, index) => (
// //                           <li key={index} className={styles.instructionItem}>
// //                             {instruction}
// //                           </li>
// //                         ))
// //                       ) : (
// //                         <>
// //                           <li className={styles.instructionItem}>Enter any linear equation with one variable (x, y, z, etc.)</li>
// //                           <li className={styles.instructionItem}>Supports fractions: 2/3x + 1/4 = 5/6</li>
// //                           <li className={styles.instructionItem}>Supports decimals: 1.5x + 2.7 = 8.3</li>
// //                           <li className={styles.instructionItem}>Supports parentheses: 3(x + 2) = 15</li>
// //                           <li className={styles.instructionItem}>Press Enter to solve or Escape to clear</li>
// //                           <li className={styles.instructionItem}>Use random generators for practice problems</li>
// //                           <li className={styles.instructionItem}>Click history items to reload previous equations</li>
// //                           <li className={styles.instructionItem}>View detailed step-by-step solutions</li>
// //                         </>
// //                       )}
// //                     </ul>
// //                   </div>
// //                 )}
                
// //                 {activeTab === 'links' && (
// //                   <div className={styles.resources}>
// //                     <h3 className={styles.resourcesTitle}>Additional Resources:</h3>
                    
// //                     {explanations?.links ? (
// //                       <div className={styles.internalLinks}>
// //                         <h4 className={styles.linkGroupTitle}>Internal Links:</h4>
// //                         <ul className={styles.linksList}>
// //                           {explanations.links.map((link, index) => (
// //                             <li key={index} className={styles.linkItem}>
// //                               <a href={link.url} className={styles.link}>
// //                                 {link.text}
// //                               </a>
// //                             </li>
// //                           ))}
// //                         </ul>
// //                       </div>
// //                     ) : (
// //                       <div className={styles.internalLinks}>
// //                         <h4 className={styles.linkGroupTitle}>Internal Links:</h4>
// //                         <ul className={styles.linksList}>
// //                           <li className={styles.linkItem}>
// //                             <a href="/tutorials/algebra-basics" className={styles.link}>
// //                               Algebra Basics Tutorial
// //                             </a>
// //                           </li>
// //                           <li className={styles.linkItem}>
// //                             <a href="/practice/linear-equations" className={styles.link}>
// //                               Practice Problems
// //                             </a>
// //                           </li>
// //                         </ul>
// //                       </div>
// //                     )}

// //                     {explanations?.externalLinks ? (
// //                       <div className={styles.externalLinks}>
// //                         <h4 className={styles.linkGroupTitle}>External Resources:</h4>
// //                         <ul className={styles.linksList}>
// //                           {explanations.externalLinks.map((link, index) => (
// //                             <li key={index} className={styles.linkItem}>
// //                               <a 
// //                                 href={link.url} 
// //                                 className={styles.link}
// //                                 target="_blank"
// //                                 rel="noopener noreferrer"
// //                               >
// //                                 {link.text}
// //                               </a>
// //                             </li>
// //                           ))}
// //                         </ul>
// //                       </div>
// //                     ) : (
// //                       <div className={styles.externalLinks}>
// //                         <h4 className={styles.linkGroupTitle}>External Resources:</h4>
// //                         <ul className={styles.linksList}>
// //                           <li className={styles.linkItem}>
// //                             <a 
// //                               href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-in-one-variable" 
// //                               className={styles.link}
// //                               target="_blank"
// //                               rel="noopener noreferrer"
// //                             >
// //                               Khan Academy - Linear Equations
// //                             </a>
// //                           </li>
// //                           <li className={styles.linkItem}>
// //                             <a 
// //                               href="https://www.mathsisfun.com/algebra/linear-equations.html" 
// //                               className={styles.link}
// //                               target="_blank"
// //                               rel="noopener noreferrer"
// //                             >
// //                               Math is Fun - Solving Equations
// //                             </a>
// //                           </li>
// //                         </ul>
// //                       </div>
// //                     )}
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LinearEquationSolver;


// import { useState, useRef } from 'react';
// import styles from './LinearEquationSolver.module.css';

// const LinearEquationSolver = ({ explanations }) => {
//   const [equation, setEquation] = useState('');
//   const [solution, setSolution] = useState(null);
//   const [error, setError] = useState('');
//   const [steps, setSteps] = useState([]);
//   const [variable, setVariable] = useState('');
//   const [history, setHistory] = useState([]);
//   const [isHistoryExpanded, setIsHistoryExpanded] = useState(false);
//   const [activeTab, setActiveTab] = useState('examples');
//   const inputRef = useRef(null);

//   const parseFraction = (str) => {
//     if (!str || str === '') return 0;
    
//     // Handle negative signs
//     const isNegative = str.startsWith('-');
//     const cleanStr = str.replace(/^[+-]/, '');
    
//     if (cleanStr.includes('/')) {
//       const parts = cleanStr.split('/');
//       if (parts.length !== 2) return NaN;
      
//       const numerator = parseFloat(parts[0]);
//       const denominator = parseFloat(parts[1]);
      
//       if (isNaN(numerator) || isNaN(denominator) || denominator === 0) {
//         return NaN;
//       }
      
//       const result = numerator / denominator;
//       return isNegative ? -result : result;
//     }
    
//     const result = parseFloat(cleanStr);
//     return isNaN(result) ? NaN : (isNegative ? -result : result);
//   };

//   const expandParentheses = (equation) => {
//     const pattern = /([+-]?\d*\.?\d*(?:\/\d+)?)\(([^)]+)\)/g;
    
//     return equation.replace(pattern, (match, coef, inside) => {
//       if (coef === '' || coef === '+') coef = '1';
//       if (coef === '-') coef = '-1';
      
//       const coefficient = parseFraction(coef);
//       if (isNaN(coefficient)) {
//         throw new Error(`Invalid coefficient: ${coef}`);
//       }
      
//       const insideNormalized = inside.replace(/(?<!^|[+-])-/g, '+-');
//       const terms = insideNormalized.split('+').filter(term => term !== '');
      
//       const expandedTerms = terms.map(term => {
//         const variableMatch = term.match(/[a-z]/);
//         const variable = variableMatch ? variableMatch[0] : null;
        
//         if (variable) {
//           const coeffStr = term.replace(/[a-z]/g, '');
//           let termCoeff = 1;
          
//           if (coeffStr === '' || coeffStr === '+') {
//             termCoeff = 1;
//           } else if (coeffStr === '-') {
//             termCoeff = -1;
//           } else {
//             termCoeff = parseFraction(coeffStr);
//             if (isNaN(termCoeff)) {
//               throw new Error(`Invalid term coefficient: ${coeffStr}`);
//             }
//           }
          
//           const result = coefficient * termCoeff;
          
//           if (result === 1) {
//             return variable;
//           } else if (result === -1) {
//             return `-${variable}`;
//           } else {
//             return `${result}${variable}`;
//           }
//         } else {
//           const constValue = parseFraction(term);
//           if (isNaN(constValue)) {
//             throw new Error(`Invalid constant term: ${term}`);
//           }
//           return (coefficient * constValue).toString();
//         }
//       });
      
//       let result = expandedTerms[0];
//       for (let i = 1; i < expandedTerms.length; i++) {
//         const term = expandedTerms[i];
//         if (term.startsWith('-')) {
//           result += term;
//         } else {
//           result += '+' + term;
//         }
//       }
      
//       return result;
//     });
//   };

//   const parseLinearEquation = (eq) => {
//     let cleanEq = eq.replace(/\s+/g, '').toLowerCase();
//     cleanEq = expandParentheses(cleanEq);
    
//     if (!cleanEq.includes('=')) {
//       throw new Error('Equation must contain an equals sign (=)');
//     }
    
//     const sides = cleanEq.split('=');
//     if (sides.length !== 2) {
//       throw new Error('Equation must have exactly one equals sign');
//     }
    
//     const leftSide = sides[0];
//     const rightSide = sides[1];
    
//     if (!leftSide || !rightSide) {
//       throw new Error('Both sides of the equation must have content');
//     }
    
//     const variableMatch = cleanEq.match(/[a-z]/);
//     if (!variableMatch) {
//       throw new Error('No variable found in the equation');
//     }
//     const variable = variableMatch[0];
    
//     const parseExpression = (expr) => {
//       let coefficient = 0;
//       let constant = 0;
      
//       const normalized = expr.replace(/(?<!^)-/g, '+-');
//       const terms = normalized.split('+').filter(term => term !== '');
      
//       for (let term of terms) {
//         if (term.includes(variable)) {
//           const pattern = new RegExp(`^([+-]?\\d*\\.?\\d*(?:\\/\\d+)?)${variable}$`);
//           const coefMatch = term.match(pattern);
//           if (coefMatch) {
//             let coef = coefMatch[1];
//             if (coef === '' || coef === '+') coef = '1';
//             if (coef === '-') coef = '-1';
            
//             const parsedCoef = parseFraction(coef);
//             if (isNaN(parsedCoef)) {
//               throw new Error(`Invalid coefficient: ${coef}`);
//             }
//             coefficient += parsedCoef;
//           } else {
//             throw new Error(`Invalid term: ${term}`);
//           }
//         } else {
//           const constMatch = term.match(/^([+-]?\d*\.?\d*(?:\/\d+)?)$/);
//           if (constMatch && constMatch[1] !== '') {
//             const parsedConst = parseFraction(constMatch[1]);
//             if (isNaN(parsedConst)) {
//               throw new Error(`Invalid constant: ${constMatch[1]}`);
//             }
//             constant += parsedConst;
//           } else if (term !== '') {
//             throw new Error(`Invalid term: ${term}`);
//           }
//         }
//       }
      
//       return { coefficient, constant };
//     };
    
//     const left = parseExpression(leftSide);
//     const right = parseExpression(rightSide);
    
//     const finalCoeff = left.coefficient - right.coefficient;
//     const finalConstant = left.constant - right.constant;
    
//     return { 
//       coefficient: finalCoeff, 
//       constant: finalConstant, 
//       variable,
//       expandedEquation: cleanEq
//     };
//   };

//   const formatNumber = (num) => {
//     if (Number.isInteger(num)) {
//       return num.toString();
//     } else {
//       // Check if it's a simple fraction
//       const tolerance = 1e-10;
//       for (let denom = 2; denom <= 20; denom++) {
//         const numerator = Math.round(num * denom);
//         if (Math.abs(num - numerator / denom) < tolerance) {
//           if (numerator === denom) return '1';
//           if (numerator === -denom) return '-1';
//           return `${numerator}/${denom}`;
//         }
//       }
//       return num.toFixed(4).replace(/\.?0+$/, '');
//     }
//   };

//   const solveLinearEquation = (coefficient, constant, variable, originalEquation, leftSide, rightSide, expandedEquation) => {
//     const solutionSteps = [];
    
//     if (Math.abs(coefficient) < 1e-10) {
//       if (Math.abs(constant) < 1e-10) {
//         return { 
//           solution: 'infinitely many solutions', 
//           steps: [originalEquation, '0 = 0', `This is always true, so ${variable} can be any real number`] 
//         };
//       } else {
//         return { 
//           solution: 'no solution', 
//           steps: [originalEquation, `${formatNumber(constant)} = 0`, 'This is never true, so there is no solution'] 
//         };
//       }
//     }
    
//     const result = -constant / coefficient;
    
//     solutionSteps.push(`Original equation: ${originalEquation}`);
    
//     const hasParentheses = originalEquation.includes('(');
    
//     if (hasParentheses) {
//       const parenthesesMatch = originalEquation.match(/([+-]?\d*\.?\d*(?:\/\d+)?)\(([^)]+)\)/);
//       if (parenthesesMatch) {
//         let coef = parenthesesMatch[1];
//         if (coef === '' || coef === '+') coef = '1';
//         if (coef === '-') coef = '-1';
//         const insideTerms = parenthesesMatch[2];
        
//         solutionSteps.push(`Expand parentheses using distributive property: ${coef}(${insideTerms})`);
//       }
      
//       solutionSteps.push(`After expanding: ${expandedEquation}`);
      
//       const expSides = expandedEquation.split('=');
//       const expLeft = expSides[0];
//       const expRight = expSides[1];
//       const expLeftTerms = expLeft.match(/[+-]?[^+-]+/g) || [];
//       const expRightTerms = expRight.match(/[+-]?[^+-]+/g) || [];
      
//       let constantTermsLeft = [];
//       let variableTermsRight = [];
      
//       expLeftTerms.forEach(term => {
//         if (!term.includes(variable)) {
//           constantTermsLeft.push(term);
//         }
//       });
      
//       expRightTerms.forEach(term => {
//         if (term.includes(variable)) {
//           variableTermsRight.push(term);
//         }
//       });
      
//       if (variableTermsRight.length > 0) {
//         const termToMove = variableTermsRight[0];
//         solutionSteps.push(`Subtract ${termToMove} from both sides to move variables to left side`);
//       }
      
//       if (constantTermsLeft.length > 0) {
//         const termToMove = constantTermsLeft[0];
//         solutionSteps.push(`Subtract ${termToMove} from both sides to move constants to right side`);
//       }
      
//       solutionSteps.push(`Combine like terms: ${formatNumber(coefficient)}${variable} = ${formatNumber(-constant)}`);
      
//     } else {
//       const leftTerms = leftSide.match(/[+-]?[^+-]+/g) || [];
//       const rightTerms = rightSide.match(/[+-]?[^+-]+/g) || [];
      
//       let variableTermsLeft = [];
//       let constantTermsLeft = [];
//       let variableTermsRight = [];
      
//       leftTerms.forEach(term => {
//         if (term.includes(variable)) {
//           variableTermsLeft.push(term);
//         } else {
//           constantTermsLeft.push(term);
//         }
//       });
      
//       rightTerms.forEach(term => {
//         if (term.includes(variable)) {
//           variableTermsRight.push(term);
//         }
//       });
      
//       if (constantTermsLeft.length > 0) {
//         const termToMove = constantTermsLeft[0];
//         solutionSteps.push(`Subtract ${termToMove} from both sides to move it to the right`);
//       }
      
//       if (variableTermsRight.length > 0) {
//         const termToMove = variableTermsRight[0];
//         solutionSteps.push(`Subtract ${termToMove} from both sides to move it to the left`);
//       }
      
//       solutionSteps.push(`Combine like terms: ${formatNumber(coefficient)}${variable} = ${formatNumber(-constant)}`);
//     }
    
//     if (coefficient !== 1) {
//       solutionSteps.push(`Divide both sides by ${formatNumber(coefficient)}: ${variable} = ${formatNumber(-constant)}/${formatNumber(coefficient)}`);
//     }
    
//     solutionSteps.push(`Solution: ${variable} = ${formatNumber(result)}`);
    
//     return { solution: result, steps: solutionSteps };
//   };

//   const addToHistory = (equation, solution, variable) => {
//     const historyItem = {
//       equation: equation,
//       solution: solution,
//       variable: variable,
//       timestamp: new Date().toLocaleString()
//     };
    
//     setHistory(prevHistory => {
//       // Remove duplicate if exists
//       const filtered = prevHistory.filter(item => item.equation !== equation);
//       // Add new item at the beginning and keep only last 8 items
//       return [historyItem, ...filtered].slice(0, 8);
//     });
//   };

//   const handleSolve = () => {
//     try {
//       setError('');
//       setSolution(null);
//       setSteps([]);
//       setVariable('');
      
//       if (!equation.trim()) {
//         setError('Please enter an equation');
//         inputRef.current?.focus();
//         return;
//       }
      
//       const parsed = parseLinearEquation(equation);
//       const sides = equation.split('=');
//       const leftSide = sides[0].trim();
//       const rightSide = sides[1].trim();
//       const result = solveLinearEquation(
//         parsed.coefficient, 
//         parsed.constant, 
//         parsed.variable, 
//         equation, 
//         leftSide, 
//         rightSide,
//         parsed.expandedEquation
//       );
      
//       setVariable(parsed.variable);
//       setSolution(result.solution);
//       setSteps(result.steps);
      
//       // Add to history only for successful solutions
//       addToHistory(equation, result.solution, parsed.variable);
      
//       // Return focus to input after solving
//       setTimeout(() => inputRef.current?.focus(), 100);
      
//     } catch (err) {
//       setError(err.message);
//       setSolution(null);
//       setSteps([]);
//       setVariable('');
//       inputRef.current?.focus();
//     }
//   };

//   const handleClear = () => {
//     setEquation('');
//     setSolution(null);
//     setError('');
//     setSteps([]);
//     setVariable('');
//     inputRef.current?.focus();
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       handleSolve();
//     } else if (e.key === 'Escape') {
//       handleClear();
//     }
//   };

//   const handleExampleClick = (exampleEquation) => {
//     setEquation(exampleEquation);
//     setError('');
//     setSolution(null);
//     setSteps([]);
//     setVariable('');
    
//     // Return focus to input
//     setTimeout(() => inputRef.current?.focus(), 100);
//   };

//   const handleHistoryClick = (historyItem) => {
//     setEquation(historyItem.equation);
//     setSolution(historyItem.solution);
//     setVariable(historyItem.variable);
//     setError('');
//     setSteps([]);
    
//     // Return focus to input
//     setTimeout(() => inputRef.current?.focus(), 100);
//   };

//   const clearHistory = () => {
//     setHistory([]);
//   };

//   const toggleHistory = () => {
//     setIsHistoryExpanded(!isHistoryExpanded);
//   };

//   const generateRandomEquation = (level) => {
//     const variables = ['x', 'y', 'z', 'a', 'b'];
//     const variable = variables[Math.floor(Math.random() * variables.length)];
    
//     let equation = '';
    
//     switch(level) {
//       case 'easy':
//         // ax = b or x + a = b
//         if (Math.random() < 0.5) {
//           const a = Math.floor(Math.random() * 8) + 2;
//           const b = a * (Math.floor(Math.random() * 10) + 1);
//           equation = `${a}${variable} = ${b}`;
//         } else {
//           const a = Math.floor(Math.random() * 10) + 1;
//           const x = Math.floor(Math.random() * 10) + 1;
//           const b = x + a;
//           equation = `${variable} + ${a} = ${b}`;
//         }
//         break;
        
//       case 'medium':
//         // ax + b = cx + d
//         const a = Math.floor(Math.random() * 5) + 2;
//         const b = Math.floor(Math.random() * 10) + 1;
//         const c = Math.floor(Math.random() * 3) + 1;
//         const d = Math.floor(Math.random() * 10) + 1;
//         equation = `${a}${variable} + ${b} = ${c}${variable} + ${d}`;
//         break;
        
//       case 'hard':
//         // a(x + b) = c
//         const coef = Math.floor(Math.random() * 4) + 2;
//         const inside = Math.floor(Math.random() * 8) + 1;
//         const result = coef * (Math.floor(Math.random() * 5) + inside + 1);
//         equation = `${coef}(${variable} + ${inside}) = ${result}`;
//         break;
        
//       case 'expert':
//         // Fraction coefficients
//         const num1 = Math.floor(Math.random() * 3) + 1;
//         const den1 = Math.floor(Math.random() * 3) + 2;
//         const num2 = Math.floor(Math.random() * 4) + 1;
//         const den2 = Math.floor(Math.random() * 4) + 2;
//         const const1 = Math.floor(Math.random() * 6) + 1;
//         const const2 = Math.floor(Math.random() * 8) + 1;
//         equation = `${num1}/${den1}${variable} + ${const1} = ${num2}/${den2}${variable} + ${const2}`;
//         break;
//     }
    
//     setEquation(equation);
//     setError('');
//     setSolution(null);
//     setSteps([]);
//     setVariable('');
    
//     // Return focus to input after generating
//     setTimeout(() => inputRef.current?.focus(), 100);
//   };

//   const formatSolution = (solution) => {
//     if (typeof solution === 'string') {
//       return solution;
//     }
//     return `${variable} = ${formatNumber(solution)}`;
//   };

//   const formatHistorySolution = (solution, variable) => {
//     if (typeof solution === 'string') {
//       return solution;
//     }
//     return `${variable} = ${formatNumber(solution)}`;
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.mainLayout}>
//         <div className={styles.leftPanel}>
//           <div className={styles.inputSection}>
//             <label className={styles.label}>
//               Enter your linear equation with any variable (Press Enter to solve, Escape to clear):
//             </label>
//             <input
//               ref={inputRef}
//               type="text"
//               value={equation}
//               onChange={(e) => setEquation(e.target.value)}
//               placeholder="Enter equation like: 2x + 3 = 7, 2(x + 3) = 10, or 1.5x + 2/3 = 4"
//               className={styles.input}
//               onKeyDown={handleKeyDown}
//             />
//             <div className={styles.buttonGroup}>
//               <button onClick={handleSolve} className={styles.solveButton}>
//                 Solve
//               </button>
//               <button onClick={handleClear} className={styles.clearButton}>
//                 Clear
//               </button>
//             </div>
            
//             <div className={styles.generatorSection}>
//               <label className={styles.generatorLabel}>Generate random equation:</label>
//               <div className={styles.generatorButtons}>
//                 <button onClick={() => generateRandomEquation('easy')} className={styles.generatorButton}>
//                   Easy (ax = b)
//                 </button>
//                 <button onClick={() => generateRandomEquation('medium')} className={styles.generatorButton}>
//                   Medium (ax + b = cx + d)
//                 </button>
//                 <button onClick={() => generateRandomEquation('hard')} className={styles.generatorButton}>
//                   Hard (a(x + b) = c)
//                 </button>
//                 <button onClick={() => generateRandomEquation('expert')} className={styles.generatorButton}>
//                   Expert (fractions)
//                 </button>
//               </div>
//             </div>
//           </div>

//           {error && (
//             <div className={styles.error}>
//               <strong>Error:</strong> {error}
//             </div>
//           )}

//           {history.length > 0 && (
//             <div className={styles.historySection}>
//               <div className={styles.historyHeader} onClick={toggleHistory}>
//                 <h3 className={styles.historyTitle}>
//                   Recent Equations ({history.length})
//                   <span className={styles.historyToggle}>
//                     {isHistoryExpanded ? '▼' : '▶'}
//                   </span>
//                 </h3>
//                 {isHistoryExpanded && (
//                   <button onClick={(e) => {
//                     e.stopPropagation();
//                     clearHistory();
//                   }} className={styles.clearHistoryButton}>
//                     Clear History
//                   </button>
//                 )}
//               </div>
//               {isHistoryExpanded && (
//                 <div className={styles.historyList}>
//                   {history.map((item, index) => (
//                     <div 
//                       key={index} 
//                       className={styles.historyItem}
//                       onClick={() => handleHistoryClick(item)}
//                     >
//                       <div className={styles.historyEquation}>{item.equation}</div>
//                       <div className={styles.historySolution}>
//                         {formatHistorySolution(item.solution, item.variable)}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           )}
//         </div>

//         <div className={styles.rightPanel}>
//           {solution !== null && (
//             <div className={styles.solutionSection}>
//               <h2 className={styles.solutionTitle}>Solution</h2>
//               <div className={styles.solution}>
//                 {formatSolution(solution)}
//               </div>
              
//               {steps.length > 0 && (
//                 <div className={styles.stepsSection}>
//                   <h3 className={styles.stepsTitle}>Step-by-step solution:</h3>
//                   <ol className={styles.stepsList}>
//                     {steps.map((step, index) => (
//                       <li key={index} className={styles.step}>
//                         {step}
//                       </li>
//                     ))}
//                   </ol>
//                 </div>
//               )}
//             </div>
//           )}
          
//           <div className={styles.tabsContainer}>
//             <div className={styles.tabsHeader}>
//               <button 
//                 onClick={() => setActiveTab('examples')} 
//                 className={`${styles.tab} ${activeTab === 'examples' ? styles.tabActive : ''}`}
//               >
//                 Examples
//               </button>
//               <button 
//                 onClick={() => setActiveTab('instructions')} 
//                 className={`${styles.tab} ${activeTab === 'instructions' ? styles.tabActive : ''}`}
//               >
//                 Instructions
//               </button>
//               <button 
//                 onClick={() => setActiveTab('links')} 
//                 className={`${styles.tab} ${activeTab === 'links' ? styles.tabActive : ''}`}
//               >
//                 Resources
//               </button>
//             </div>
            
//             <div className={styles.tabContent}>
//               {activeTab === 'examples' && (
//                 <div className={styles.examples}>
//                   <h3 className={styles.examplesTitle}>Example equations you can try:</h3>
//                   <ul className={styles.examplesList}>
//                     <li onClick={() => handleExampleClick('2x + 3 = 7')}>2x + 3 = 7</li>
//                     <li onClick={() => handleExampleClick('3y - 5 = 2y + 1')}>3y - 5 = 2y + 1</li>
//                     <li onClick={() => handleExampleClick('5a = 15')}>5a = 15</li>
//                     <li onClick={() => handleExampleClick('2(x + 3) = 10')}>2(x + 3) = 10</li>
//                     <li onClick={() => handleExampleClick('-3(2y - 1) = 9')}>-3(2y - 1) = 9</li>
//                     <li onClick={() => handleExampleClick('4(z - 2) = 2z + 8')}>4(z - 2) = 2z + 8</li>
//                     <li onClick={() => handleExampleClick('1.5x + 2/3 = 4')}>1.5x + 2/3 = 4</li>
//                     <li onClick={() => handleExampleClick('3/4y - 1/2 = 2y + 1/4')}>3/4y - 1/2 = 2y + 1/4</li>
//                     <li onClick={() => handleExampleClick('0.25z + 1.5 = 2.75')}>0.25z + 1.5 = 2.75</li>
//                   </ul>
//                 </div>
//               )}
              
//               {activeTab === 'instructions' && (
//                 <div className={styles.instructions}>
//                   <h3 className={styles.instructionsTitle}>How to use:</h3>
//                   <ul className={styles.instructionsList}>
//                     {explanations?.instructions ? (
//                       explanations.instructions.map((instruction, index) => (
//                         <li key={index} className={styles.instructionItem}>
//                           {instruction}
//                         </li>
//                       ))
//                     ) : (
//                       <>
//                         <li className={styles.instructionItem}>Enter any linear equation with one variable (x, y, z, etc.)</li>
//                         <li className={styles.instructionItem}>Supports fractions: 2/3x + 1/4 = 5/6</li>
//                         <li className={styles.instructionItem}>Supports decimals: 1.5x + 2.7 = 8.3</li>
//                         <li className={styles.instructionItem}>Supports parentheses: 3(x + 2) = 15</li>
//                         <li className={styles.instructionItem}>Press Enter to solve or Escape to clear</li>
//                         <li className={styles.instructionItem}>Use random generators for practice problems</li>
//                         <li className={styles.instructionItem}>Click history items to reload previous equations</li>
//                         <li className={styles.instructionItem}>View detailed step-by-step solutions</li>
//                       </>
//                     )}
//                   </ul>
//                 </div>
//               )}
              
//               {activeTab === 'links' && (
//                 <div className={styles.resources}>
//                   <h3 className={styles.resourcesTitle}>Additional Resources:</h3>
                  
//                   {explanations?.links ? (
//                     <div className={styles.internalLinks}>
//                       <h4 className={styles.linkGroupTitle}>Internal Links:</h4>
//                       <ul className={styles.linksList}>
//                         {explanations.links.map((link, index) => (
//                           <li key={index} className={styles.linkItem}>
//                             <a href={link.url} className={styles.link}>
//                               {link.text}
//                             </a>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ) : (
//                     <div className={styles.internalLinks}>
//                       <h4 className={styles.linkGroupTitle}>Internal Links:</h4>
//                       <ul className={styles.linksList}>
//                         <li className={styles.linkItem}>
//                           <a href="/tutorials/algebra-basics" className={styles.link}>
//                             Algebra Basics Tutorial
//                           </a>
//                         </li>
//                         <li className={styles.linkItem}>
//                           <a href="/practice/linear-equations" className={styles.link}>
//                             Practice Problems
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   )}

//                   {explanations?.externalLinks ? (
//                     <div className={styles.externalLinks}>
//                       <h4 className={styles.linkGroupTitle}>External Resources:</h4>
//                       <ul className={styles.linksList}>
//                         {explanations.externalLinks.map((link, index) => (
//                           <li key={index} className={styles.linkItem}>
//                             <a 
//                               href={link.url} 
//                               className={styles.link}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                             >
//                               {link.text}
//                             </a>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ) : (
//                     <div className={styles.externalLinks}>
//                       <h4 className={styles.linkGroupTitle}>External Resources:</h4>
//                       <ul className={styles.linksList}>
//                         <li className={styles.linkItem}>
//                           <a 
//                             href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-in-one-variable" 
//                             className={styles.link}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                           >
//                             Khan Academy - Linear Equations
//                           </a>
//                         </li>
//                         <li className={styles.linkItem}>
//                           <a 
//                             href="https://www.mathsisfun.com/algebra/linear-equations.html" 
//                             className={styles.link}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                           >
//                             Math is Fun - Solving Equations
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LinearEquationSolver;



import { useState, useRef } from 'react';
import styles from './LinearEquationSolver.module.css';

const LinearEquationSolver = ({ explanations, examples, resources, stepsByStepEnabled = true }) => {
  const [equation, setEquation] = useState('');
  const [solution, setSolution] = useState(null);
  const [error, setError] = useState('');
  const [steps, setSteps] = useState([]);
  const [variable, setVariable] = useState('');
  const [history, setHistory] = useState([]);
  const [isHistoryExpanded, setIsHistoryExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('examples');
  const inputRef = useRef(null);
  // Default examples if none provided
  const defaultExamples = [
    { equation: '2x + 3 = 7', label: '2x + 3 = 7' },
    { equation: '3y - 5 = 2y + 1', label: '3y - 5 = 2y + 1' },
    { equation: '5a = 15', label: '5a = 15' },
    { equation: '2(x + 3) = 10', label: '2(x + 3) = 10' },
    { equation: '-3(2y - 1) = 9', label: '-3(2y - 1) = 9' },
    { equation: '4(z - 2) = 2z + 8', label: '4(z - 2) = 2z + 8' },
    { equation: '1.5x + 2/3 = 4', label: '1.5x + 2/3 = 4' },
    { equation: '3/4y - 1/2 = 2y + 1/4', label: '3/4y - 1/2 = 2y + 1/4' },
    { equation: '0.25z + 1.5 = 2.75', label: '0.25z + 1.5 = 2.75' }
  ];

  // Default resources if none provided
  const defaultResources = {
    links: [
      {
        text: "Algebra Basics Tutorial",
        url: "/tutorials/algebra-basics"
      },
      {
        text: "Practice Problems",
        url: "/practice/linear-equations"
      }
    ],
    externalLinks: [
      {
        text: "Khan Academy - Linear Equations",
        url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-in-one-variable"
      },
      {
        text: "Math is Fun - Solving Equations",
        url: "https://www.mathsisfun.com/algebra/linear-equations.html"
      }
    ]
  };

  // Default explanations if none provided
  const defaultExplanations = {
    instructions: [
      "Enter any linear equation with one variable (x, y, z, etc.)",
      "Supports fractions: 2/3x + 1/4 = 5/6",
      "Supports decimals: 1.5x + 2.7 = 8.3", 
      "Supports parentheses: 3(x + 2) = 15",
      "Press Enter to solve or Escape to clear",
      "Use random generators for practice problems",
      "Click history items to reload previous equations",
      "View detailed step-by-step solutions"
    ]
  };

  // Use provided props or fall back to defaults
  const currentExamples = examples || defaultExamples;
  const currentExplanations = explanations || defaultExplanations;
  const currentResources = resources || defaultResources;

  const parseFraction = (str) => {
    if (!str || str === '') return 0;
    
    // Handle negative signs
    const isNegative = str.startsWith('-');
    const cleanStr = str.replace(/^[+-]/, '');
    
    if (cleanStr.includes('/')) {
      const parts = cleanStr.split('/');
      if (parts.length !== 2) return NaN;
      
      const numerator = parseFloat(parts[0]);
      const denominator = parseFloat(parts[1]);
      
      if (isNaN(numerator) || isNaN(denominator) || denominator === 0) {
        return NaN;
      }
      
      const result = numerator / denominator;
      return isNegative ? -result : result;
    }
    
    const result = parseFloat(cleanStr);
    return isNaN(result) ? NaN : (isNegative ? -result : result);
  };

  const expandParentheses = (equation) => {
    const pattern = /([+-]?\d*\.?\d*(?:\/\d+)?)\(([^)]+)\)/g;
    
    return equation.replace(pattern, (match, coef, inside) => {
      if (coef === '' || coef === '+') coef = '1';
      if (coef === '-') coef = '-1';
      
      const coefficient = parseFraction(coef);
      if (isNaN(coefficient)) {
        throw new Error(`Invalid coefficient: ${coef}`);
      }
      
      const insideNormalized = inside.replace(/(?<!^|[+-])-/g, '+-');
      const terms = insideNormalized.split('+').filter(term => term !== '');
      
      const expandedTerms = terms.map(term => {
        const variableMatch = term.match(/[a-z]/);
        const variable = variableMatch ? variableMatch[0] : null;
        
        if (variable) {
          const coeffStr = term.replace(/[a-z]/g, '');
          let termCoeff = 1;
          
          if (coeffStr === '' || coeffStr === '+') {
            termCoeff = 1;
          } else if (coeffStr === '-') {
            termCoeff = -1;
          } else {
            termCoeff = parseFraction(coeffStr);
            if (isNaN(termCoeff)) {
              throw new Error(`Invalid term coefficient: ${coeffStr}`);
            }
          }
          
          const result = coefficient * termCoeff;
          
          if (result === 1) {
            return variable;
          } else if (result === -1) {
            return `-${variable}`;
          } else {
            return `${result}${variable}`;
          }
        } else {
          const constValue = parseFraction(term);
          if (isNaN(constValue)) {
            throw new Error(`Invalid constant term: ${term}`);
          }
          return (coefficient * constValue).toString();
        }
      });
      
      let result = expandedTerms[0];
      for (let i = 1; i < expandedTerms.length; i++) {
        const term = expandedTerms[i];
        if (term.startsWith('-')) {
          result += term;
        } else {
          result += '+' + term;
        }
      }
      
      return result;
    });
  };

  const parseLinearEquation = (eq) => {
    let cleanEq = eq.replace(/\s+/g, '').toLowerCase();
    cleanEq = expandParentheses(cleanEq);
    
    if (!cleanEq.includes('=')) {
      throw new Error('Equation must contain an equals sign (=)');
    }
    
    const sides = cleanEq.split('=');
    if (sides.length !== 2) {
      throw new Error('Equation must have exactly one equals sign');
    }
    
    const leftSide = sides[0];
    const rightSide = sides[1];
    
    if (!leftSide || !rightSide) {
      throw new Error('Both sides of the equation must have content');
    }
    
    const variableMatch = cleanEq.match(/[a-z]/);
    if (!variableMatch) {
      throw new Error('No variable found in the equation');
    }
    const variable = variableMatch[0];
    
    const parseExpression = (expr) => {
      let coefficient = 0;
      let constant = 0;
      
      const normalized = expr.replace(/(?<!^)-/g, '+-');
      const terms = normalized.split('+').filter(term => term !== '');
      
      for (let term of terms) {
        if (term.includes(variable)) {
          const pattern = new RegExp(`^([+-]?\\d*\\.?\\d*(?:\\/\\d+)?)${variable}$`);
          const coefMatch = term.match(pattern);
          if (coefMatch) {
            let coef = coefMatch[1];
            if (coef === '' || coef === '+') coef = '1';
            if (coef === '-') coef = '-1';
            
            const parsedCoef = parseFraction(coef);
            if (isNaN(parsedCoef)) {
              throw new Error(`Invalid coefficient: ${coef}`);
            }
            coefficient += parsedCoef;
          } else {
            throw new Error(`Invalid term: ${term}`);
          }
        } else {
          const constMatch = term.match(/^([+-]?\d*\.?\d*(?:\/\d+)?)$/);
          if (constMatch && constMatch[1] !== '') {
            const parsedConst = parseFraction(constMatch[1]);
            if (isNaN(parsedConst)) {
              throw new Error(`Invalid constant: ${constMatch[1]}`);
            }
            constant += parsedConst;
          } else if (term !== '') {
            throw new Error(`Invalid term: ${term}`);
          }
        }
      }
      
      return { coefficient, constant };
    };
    
    const left = parseExpression(leftSide);
    const right = parseExpression(rightSide);
    
    const finalCoeff = left.coefficient - right.coefficient;
    const finalConstant = left.constant - right.constant;
    
    return { 
      coefficient: finalCoeff, 
      constant: finalConstant, 
      variable,
      expandedEquation: cleanEq
    };
  };

  const formatNumber = (num) => {
    if (Number.isInteger(num)) {
      return num.toString();
    } else {
      // Check if it's a simple fraction
      const tolerance = 1e-10;
      for (let denom = 2; denom <= 20; denom++) {
        const numerator = Math.round(num * denom);
        if (Math.abs(num - numerator / denom) < tolerance) {
          if (numerator === denom) return '1';
          if (numerator === -denom) return '-1';
          return `${numerator}/${denom}`;
        }
      }
      return num.toFixed(4).replace(/\.?0+$/, '');
    }
  };

  const solveLinearEquation = (coefficient, constant, variable, originalEquation, leftSide, rightSide, expandedEquation) => {
    const solutionSteps = [];
    
    if (Math.abs(coefficient) < 1e-10) {
      if (Math.abs(constant) < 1e-10) {
        return { 
          solution: 'infinitely many solutions', 
          steps: [originalEquation, '0 = 0', `This is always true, so ${variable} can be any real number`] 
        };
      } else {
        return { 
          solution: 'no solution', 
          steps: [originalEquation, `${formatNumber(constant)} = 0`, 'This is never true, so there is no solution'] 
        };
      }
    }
    
    const result = -constant / coefficient;
    
    solutionSteps.push(`Original equation: ${originalEquation}`);
    
    const hasParentheses = originalEquation.includes('(');
    
    if (hasParentheses) {
      const parenthesesMatch = originalEquation.match(/([+-]?\d*\.?\d*(?:\/\d+)?)\(([^)]+)\)/);
      if (parenthesesMatch) {
        let coef = parenthesesMatch[1];
        if (coef === '' || coef === '+') coef = '1';
        if (coef === '-') coef = '-1';
        const insideTerms = parenthesesMatch[2];
        
        solutionSteps.push(`Expand parentheses using distributive property: ${coef}(${insideTerms})`);
      }
      
      solutionSteps.push(`After expanding: ${expandedEquation}`);
      
      const expSides = expandedEquation.split('=');
      const expLeft = expSides[0];
      const expRight = expSides[1];
      const expLeftTerms = expLeft.match(/[+-]?[^+-]+/g) || [];
      const expRightTerms = expRight.match(/[+-]?[^+-]+/g) || [];
      
      let constantTermsLeft = [];
      let variableTermsRight = [];
      
      expLeftTerms.forEach(term => {
        if (!term.includes(variable)) {
          constantTermsLeft.push(term);
        }
      });
      
      expRightTerms.forEach(term => {
        if (term.includes(variable)) {
          variableTermsRight.push(term);
        }
      });
      
      if (variableTermsRight.length > 0) {
        const termToMove = variableTermsRight[0];
        solutionSteps.push(`Subtract ${termToMove} from both sides to move variables to left side`);
      }
      
      if (constantTermsLeft.length > 0) {
        const termToMove = constantTermsLeft[0];
        solutionSteps.push(`Subtract ${termToMove} from both sides to move constants to right side`);
      }
      
      solutionSteps.push(`Combine like terms: ${formatNumber(coefficient)}${variable} = ${formatNumber(-constant)}`);
      
    } else {
      const leftTerms = leftSide.match(/[+-]?[^+-]+/g) || [];
      const rightTerms = rightSide.match(/[+-]?[^+-]+/g) || [];
      
      let variableTermsLeft = [];
      let constantTermsLeft = [];
      let variableTermsRight = [];
      
      leftTerms.forEach(term => {
        if (term.includes(variable)) {
          variableTermsLeft.push(term);
        } else {
          constantTermsLeft.push(term);
        }
      });
      
      rightTerms.forEach(term => {
        if (term.includes(variable)) {
          variableTermsRight.push(term);
        }
      });
      
      if (constantTermsLeft.length > 0) {
        const termToMove = constantTermsLeft[0];
        solutionSteps.push(`Subtract ${termToMove} from both sides to move it to the right`);
      }
      
      if (variableTermsRight.length > 0) {
        const termToMove = variableTermsRight[0];
        solutionSteps.push(`Subtract ${termToMove} from both sides to move it to the left`);
      }
      
      solutionSteps.push(`Combine like terms: ${formatNumber(coefficient)}${variable} = ${formatNumber(-constant)}`);
    }
    
    if (coefficient !== 1) {
      solutionSteps.push(`Divide both sides by ${formatNumber(coefficient)}: ${variable} = ${formatNumber(-constant)}/${formatNumber(coefficient)}`);
    }
    
    solutionSteps.push(`Solution: ${variable} = ${formatNumber(result)}`);
    
    return { solution: result, steps: solutionSteps };
  };

  const addToHistory = (equation, solution, variable) => {
    const historyItem = {
      equation: equation,
      solution: solution,
      variable: variable,
      timestamp: new Date().toLocaleString()
    };
    
    setHistory(prevHistory => {
      // Remove duplicate if exists
      const filtered = prevHistory.filter(item => item.equation !== equation);
      // Add new item at the beginning and keep only last 8 items
      return [historyItem, ...filtered].slice(0, 8);
    });
  };

  const handleSolve = () => {
    try {
      setError('');
      setSolution(null);
      setSteps([]);
      setVariable('');
      
      if (!equation.trim()) {
        setError('Please enter an equation');
        inputRef.current?.focus();
        return;
      }
      
      const parsed = parseLinearEquation(equation);
      const sides = equation.split('=');
      const leftSide = sides[0].trim();
      const rightSide = sides[1].trim();
      const result = solveLinearEquation(
        parsed.coefficient, 
        parsed.constant, 
        parsed.variable, 
        equation, 
        leftSide, 
        rightSide,
        parsed.expandedEquation
      );
      
      setVariable(parsed.variable);
      setSolution(result.solution);
      setSteps(result.steps);
      
      // Add to history only for successful solutions
      addToHistory(equation, result.solution, parsed.variable);
      
      // Return focus to input after solving
      setTimeout(() => inputRef.current?.focus(), 100);
      
    } catch (err) {
      setError(err.message);
      setSolution(null);
      setSteps([]);
      setVariable('');
      inputRef.current?.focus();
    }
  };

  const handleClear = () => {
    setEquation('');
    setSolution(null);
    setError('');
    setSteps([]);
    setVariable('');
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSolve();
    } else if (e.key === 'Escape') {
      handleClear();
    }
  };

  const handleExampleClick = (exampleEquation) => {
    setEquation(exampleEquation);
    setError('');
    setSolution(null);
    setSteps([]);
    setVariable('');
    
    // Return focus to input
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleHistoryClick = (historyItem) => {
    setEquation(historyItem.equation);
    setSolution(historyItem.solution);
    setVariable(historyItem.variable);
    setError('');
    setSteps([]);
    
    // Return focus to input
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const toggleHistory = () => {
    setIsHistoryExpanded(!isHistoryExpanded);
  };

  const generateRandomEquation = (level) => {
    const variables = ['x', 'y', 'z', 'a', 'b'];
    const variable = variables[Math.floor(Math.random() * variables.length)];
    
    let equation = '';
    
    switch(level) {
      case 'easy':
        // ax = b or x + a = b
        if (Math.random() < 0.5) {
          const a = Math.floor(Math.random() * 8) + 2;
          const b = a * (Math.floor(Math.random() * 10) + 1);
          equation = `${a}${variable} = ${b}`;
        } else {
          const a = Math.floor(Math.random() * 10) + 1;
          const x = Math.floor(Math.random() * 10) + 1;
          const b = x + a;
          equation = `${variable} + ${a} = ${b}`;
        }
        break;
        
      case 'medium':
        // ax + b = cx + d
        const a = Math.floor(Math.random() * 5) + 2;
        const b = Math.floor(Math.random() * 10) + 1;
        const c = Math.floor(Math.random() * 3) + 1;
        const d = Math.floor(Math.random() * 10) + 1;
        equation = `${a}${variable} + ${b} = ${c}${variable} + ${d}`;
        break;
        
      case 'hard':
        // a(x + b) = c
        const coef = Math.floor(Math.random() * 4) + 2;
        const inside = Math.floor(Math.random() * 8) + 1;
        const result = coef * (Math.floor(Math.random() * 5) + inside + 1);
        equation = `${coef}(${variable} + ${inside}) = ${result}`;
        break;
        
      case 'expert':
        // Fraction coefficients
        const num1 = Math.floor(Math.random() * 3) + 1;
        const den1 = Math.floor(Math.random() * 3) + 2;
        const num2 = Math.floor(Math.random() * 4) + 1;
        const den2 = Math.floor(Math.random() * 4) + 2;
        const const1 = Math.floor(Math.random() * 6) + 1;
        const const2 = Math.floor(Math.random() * 8) + 1;
        equation = `${num1}/${den1}${variable} + ${const1} = ${num2}/${den2}${variable} + ${const2}`;
        break;
    }
    
    setEquation(equation);
    setError('');
    setSolution(null);
    setSteps([]);
    setVariable('');
    
    // Return focus to input after generating
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const formatSolution = (solution) => {
    if (typeof solution === 'string') {
      return solution;
    }
    return `${variable} = ${formatNumber(solution)}`;
  };

  const formatHistorySolution = (solution, variable) => {
    if (typeof solution === 'string') {
      return solution;
    }
    return `${variable} = ${formatNumber(solution)}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainLayout}>
        <div className={styles.leftPanel}>
          <div className={styles.inputSection}>
            <label className={styles.label}>
              Enter your linear equation with any variable (Press Enter to solve, Escape to clear):
            </label>
            <input
              ref={inputRef}
              type="text"
              value={equation}
              onChange={(e) => setEquation(e.target.value)}
              placeholder="Enter equation like: 2x + 3 = 7, 2(x + 3) = 10, or 1.5x + 2/3 = 4"
              className={styles.input}
              onKeyDown={handleKeyDown}
            />
            <div className={styles.buttonGroup}>
              <button onClick={handleSolve} className={styles.solveButton}>
                Solve
              </button>
              <button onClick={handleClear} className={styles.clearButton}>
                Clear
              </button>
            </div>
            
            <div className={styles.generatorSection}>
              <label className={styles.generatorLabel}>Generate random equation:</label>
              <div className={styles.generatorButtons}>
                <button onClick={() => generateRandomEquation('easy')} className={styles.generatorButton}>
                  Easy (ax = b)
                </button>
                <button onClick={() => generateRandomEquation('medium')} className={styles.generatorButton}>
                  Medium (ax + b = cx + d)
                </button>
                <button onClick={() => generateRandomEquation('hard')} className={styles.generatorButton}>
                  Hard (a(x + b) = c)
                </button>
                <button onClick={() => generateRandomEquation('expert')} className={styles.generatorButton}>
                  Expert (fractions)
                </button>
              </div>
            </div>
          </div>

          {error && (
            <div className={styles.error}>
              <strong>Error:</strong> {error}
            </div>
          )}

          {history.length > 0 && (
            <div className={styles.historySection}>
              <div className={styles.historyHeader} onClick={toggleHistory}>
                <h3 className={styles.historyTitle}>
                  Recent Equations ({history.length})
                  <span className={styles.historyToggle}>
                    {isHistoryExpanded ? '▼' : '▶'}
                  </span>
                </h3>
                {isHistoryExpanded && (
                  <button onClick={(e) => {
                    e.stopPropagation();
                    clearHistory();
                  }} className={styles.clearHistoryButton}>
                    Clear History
                  </button>
                )}
              </div>
              {isHistoryExpanded && (
                <div className={styles.historyList}>
                  {history.map((item, index) => (
                    <div 
                      key={index} 
                      className={styles.historyItem}
                      onClick={() => handleHistoryClick(item)}
                    >
                      <div className={styles.historyEquation}>{item.equation}</div>
                      <div className={styles.historySolution}>
                        {formatHistorySolution(item.solution, item.variable)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className={styles.rightPanel}>
          {solution !== null && (
            <div className={styles.solutionSection}>
              <h2 className={styles.solutionTitle}>Solution</h2>
              <div className={styles.solution}>
                {formatSolution(solution)}
              </div>
              
              {stepsByStepEnabled && steps.length > 0 && (
                <div className={styles.stepsSection}>
                  <h3 className={styles.stepsTitle}>Step-by-step solution:</h3>
                  <ol className={styles.stepsList}>
                    {steps.map((step, index) => (
                      <li key={index} className={styles.step}>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          )}
          
          <div className={styles.tabsContainer}>
            <div className={styles.tabsHeader}>
              <button 
                onClick={() => setActiveTab('examples')} 
                className={`${styles.tab} ${activeTab === 'examples' ? styles.tabActive : ''}`}
              >
                Examples
              </button>
              <button 
                onClick={() => setActiveTab('instructions')} 
                className={`${styles.tab} ${activeTab === 'instructions' ? styles.tabActive : ''}`}
              >
                Instructions
              </button>
              <button 
                onClick={() => setActiveTab('links')} 
                className={`${styles.tab} ${activeTab === 'links' ? styles.tabActive : ''}`}
              >
                Resources
              </button>
            </div>
            
            <div className={styles.tabContent}>
              {activeTab === 'examples' && (
                <div className={styles.examples}>
                  <h3 className={styles.examplesTitle}>Example equations you can try:</h3>
                  <ul className={styles.examplesList}>
                    {currentExamples.map((example, index) => (
                      <li key={index} onClick={() => handleExampleClick(example.equation)}>
                        {example.label}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {activeTab === 'instructions' && (
                <div className={styles.instructions}>
                  <h3 className={styles.instructionsTitle}>How to use:</h3>
                  <ul className={styles.instructionsList}>
                    {currentExplanations.instructions.map((instruction, index) => (
                      <li key={index} className={styles.instructionItem}>
                        {instruction}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {activeTab === 'links' && (
                <div className={styles.resources}>
                  <h3 className={styles.resourcesTitle}>Additional Resources:</h3>
{/*                   
                  {currentResources.links && (
                    <div className={styles.internalLinks}>
                      <h4 className={styles.linkGroupTitle}>Internal Links:</h4>
                      <ul className={styles.linksList}>
                        {currentResources.links.map((link, index) => (
                          <li key={index} className={styles.linkItem}>
                            <a href={link.url} className={styles.link}>
                              {link.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )} */}

                  {currentResources.externalLinks && (
                    <div className={styles.externalLinks}>
                      <h4 className={styles.linkGroupTitle}>External Resources:</h4>
                      <ul className={styles.linksList}>
                        {currentResources.externalLinks.map((link, index) => (
                          <li key={index} className={styles.linkItem}>
                            <a 
                              href={link.url} 
                              className={styles.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {link.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinearEquationSolver;