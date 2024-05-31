'use client';

import React, { useState, useRef, useEffect } from 'react';
import './LogicCalculator.css'

const logicalOperators = [
  { symbol: '∧', name: 'AND', description: 'Logical AND: Returns true if both operands are true' },
  { symbol: '∨', name: 'OR', description: 'Logical OR: Returns true if at least one operand is true' },
  { symbol: '¬', name: 'NOT', description: 'Logical NOT: Returns true if the operand is false' },
  { symbol: '⊕', name: 'XOR', description: 'Exclusive OR: Returns true if exactly one operand is true' },
  { symbol: '→', name: 'IMPLICATION', description: 'Logical Implication: Returns false if the first operand is true and the second operand is false' },
  { symbol: '↔', name: 'BICONDITIONAL', description: 'Logical Biconditional: Returns true if both operands are the same' },
  { symbol: '↑', name: 'NAND', description: 'Negated AND: Returns true if at least one operand is false' },
  { symbol: '↓', name: 'NOR', description: 'Negated OR: Returns true if both operands are false' },
  { symbol: '(', name: 'OPEN_PAREN', description: 'Open Parenthesis' },
  { symbol: ')', name: 'CLOSE_PAREN', description: 'Close Parenthesis' },
];

const parseExpression = (expression) => {
  const components = [];
  let level = 0;
  let start = 0;

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    if (char === '(') {
      if (level === 0) start = i;
      level++;
    } else if (char === ')') {
      level--;
      if (level === 0) {
        const component = expression.slice(start + 1, i).trim();
        if (component !== expression.trim()) {
          components.push(component);
        }
      }
    }
  }

  // Add the whole expression if no parentheses content matches it
  const trimmedExpression = expression.trim();
  if (!components.includes(trimmedExpression)) {
    components.push(trimmedExpression);
  }

  // Handle negations
  const negationPattern = /¬[^∧∨⊕\(\)]+/g;
  let match;
  while ((match = negationPattern.exec(expression)) !== null) {
    const negation = match[0].trim();
    if (negation.length > 1) {
      components.push(negation);
    }
  }

  console.log(components);
  return components;
};

const evaluateExpression = (expression, row) => {
  let evalExpression = expression;
  Object.keys(row).forEach((variable) => {
    evalExpression = evalExpression.replace(new RegExp(`\\b${variable}\\b`, 'g'), row[variable]);
  });

  evalExpression = evalExpression.replace(/¬/g, '!');
  evalExpression = evalExpression.replace(/∧/g, '&&');
  evalExpression = evalExpression.replace(/∨/g, '||');
  evalExpression = evalExpression.replace(/⊕/g, '!==');
  evalExpression = evalExpression.replace(/→/g, '<=');
  evalExpression = evalExpression.replace(/↔/g, '===');

  evalExpression = evalExpression.replace(/↑/g, '!($1 && $2)');
  evalExpression = evalExpression.replace(/↓/g, '!($1 || $2)');

  try {
    return eval(evalExpression);
  } catch {
    return 'Error';
  }
};

const LogicCalculator = () => {
  const [expression, setExpression] = useState('');
  const [table, setTable] = useState([]);
  const [error, setError] = useState('');
  const inputRef = useRef(null);
  const tableRef = useRef(null);


  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setExpression(e.target.value);
    setError('');
  };

  const insertOperator = (operator) => {
    setExpression(expression + ' ' + operator + ' ');
    inputRef.current.focus();
  };

  const insertLetter = (letter) => {
    setExpression(expression + letter);
    inputRef.current.focus();
  };

//   const handleGenerate = () => {
//     if (!expression.trim()) {
//       setError('No input provided. Please enter a logical expression.');
//       setTable([]);
//       return;
//     }

//     try {
//       const truthTable = generateTruthTable(expression);
//       setTable(truthTable);
//       setError('');
//     } catch (err) {
//       setError('Invalid expression. Please enter a valid logical expression.');
//       setTable([]);
//     }
//   };
// const handleGenerate = () => {
//     if (!expression.trim()) {
//       setError('No input provided. Please enter a logical expression.');
//       setTable([]);
//       return;
//     }
  
//     try {
//       const truthTable = generateTruthTable(expression);
//       setTable(truthTable);
//       setError('');
//       if (tableRef.current) {
//         tableRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
//       }
//     } catch (err) {
//       setError('Invalid expression. Please enter a valid logical expression.');
//       setTable([]);
//     }
//   };

const handleGenerate = () => {
    if (!expression.trim()) {
      setError('No input provided. Please enter a logical expression.');
      setTable([]);
      return;
    }
  
    try {
      const truthTable = generateTruthTable(expression);
      setTable(truthTable);
      setError('');
      if (tableRef.current) {
        window.scrollTo({
          top: tableRef.current.offsetTop - 50,
          behavior: 'smooth',
        });
      }
    } catch (err) {
      setError('Invalid expression. Please enter a valid logical expression.');
      setTable([]);
    }
  };
    
  const clearAll = () => {
    setExpression('');
    setTable([]);
    setError('');
    inputRef.current.focus();
  };

  const generateTruthTable = (expression) => {
    const variables = Array.from(new Set(expression.match(/[a-zA-Z]+/g)));
    const numRows = 2 ** variables.length;
    const table = [];
    const initialComponents = parseExpression(expression);
    const components = Array.from(new Set(initialComponents.map(c => c.trim())));

    for (let i = 0; i < numRows; i++) {
      const row = {};
      variables.forEach((variable, index) => {
        row[variable] = Boolean(i & (1 << (variables.length - 1 - index)));
      });

      components.forEach((component) => {
        if (component.toString().trim() === expression.toString().trim()) {
          return;
        }
        row[component] = evaluateExpression(component, row);
      });

      row[expression] = evaluateExpression(expression, row);
      table.push(row);
    }
    console.log(components);
    console.log(expression);
    return table;
  };

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Dynamic Truth Table Generator</h1>
      <div className='latin-letters'>
        {letters.map((letter) => (
          <button key={letter} onClick={() => insertLetter(letter)} style={{ padding: '10px', margin: '2px' }}>
            {letter}
          </button>
        ))}
      </div>
      <div className='logic-operators'>
        {logicalOperators.map((op) => (
          <div
            key={op.symbol}
            style={{ display: 'inline-block', margin: '5px', position: 'relative' }}
          >
            <button
              onClick={() => insertOperator(op.symbol)}
              style={{ padding: '10px', position: 'relative' }}
            >
              {op.symbol}
              <span className="tooltip">{op.description}</span>
            </button>
          </div>
        ))}
      </div>
      <input
        ref={inputRef}
        type="text"
        value={expression}
        onChange={handleChange}
        placeholder="Enter logical expression"
        style={{ width: '300px', padding: '10px', margin: '10px' }}
      />
      <div>
        <button onClick={handleGenerate} style={{ padding: '10px', margin: '5px' }}>
          Generate Truth Table
        </button>
        <button onClick={clearAll} style={{ padding: '10px', margin: '5px' }}>
          Reset
        </button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {table.length > 0 && (
        <table  ref={tableRef} border="1" style={{ margin: '20px auto', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {Object.keys(table[0]).map((key) => (
                <th key={key} style={{ padding: '10px', textAlign: 'center' }}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, i) => (
                  <td key={i} style={{ padding: '10px', textAlign: 'center' }}>{value?.toString()}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LogicCalculator;
