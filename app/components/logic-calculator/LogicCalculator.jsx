'use client';

import React, { useState, useRef, useEffect } from 'react';
import './LogicCalculator.css';
import operatorDescriptions from './operatorDescriptions';
import MarkdownComponent from '../MarkdownComponent';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
// import rehypeReact from 'rehype-react';
import { Roboto } from '@next/font/google';

const markdown=`
# Understanding the Logical OR Operator (∨)

The logical OR operator, denoted by the symbol ∨, is a fundamental concept in logic, computer science, and mathematics. It is one of the basic operations in Boolean algebra, which is essential for understanding digital circuits, programming, and logical reasoning. This article aims to provide a simple yet comprehensive overview of the logical OR operator.

## Basic Definition

The logical OR operator takes two or more boolean values (true or false) and returns true if at least one of the values is true. If all the values are false, the result is false. This operation is crucial in decision-making processes, allowing for flexibility when multiple conditions can lead to the same outcome.

### Truth Table

A truth table is a helpful way to understand how the OR operator works. Here's a truth table for two boolean variables, A and B:

| A     | B     | A ∨ B |
|-------|-------|-------|
| false | false | false |
| false | true  | true  |
| true  | false | true  |
| true  | true  | true  |

From the table, you can see that the result of A ∨ B is true in all cases except when both A and B are false.

## Properties of the OR Operator

### Commutativity

The OR operator is commutative, which means the order of the operands does not affect the result:

\[ A ∨ B = B ∨ A \]

### Associativity

The OR operator is associative, meaning that when combining three or more boolean values, the grouping of the values does not affect the result:

\[ (A ∨ B) ∨ C = A ∨ (B ∨ C) \]

### Identity Element

The identity element for the OR operator is false. Combining any boolean value with false using the OR operator returns the original value:

\[ A ∨ false = A \]

### Domination

The domination property states that combining any boolean value with true using the OR operator always returns true:

\[ A ∨ true = true \]

## Practical Applications

### Digital Logic

In digital electronics, the OR gate is a basic building block used in circuits. It outputs true (1) if at least one of its inputs is true (1). This is critical in designing and implementing logic circuits that perform various functions in computers and other digital devices.

### Programming

In programming, the logical OR operator is used in conditional statements to control the flow of execution. It allows for flexibility by executing a block of code if at least one condition is met. For example, in an if statement, the OR operator can be used to check multiple conditions:



`
// const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});


const logicalOperators = [
  { symbol: '∧', name: 'AND', description: 'Logical AND: Returns true if both operands are true' },
  { symbol: '∨', name: 'OR', description: 'Logical OR: Returns true if at least one operand is true' },
  { symbol: '¬', name: 'NOT', description: 'Logical NOT: Returns true if the operand is false' },
  { symbol: '⊕', name: 'XOR', description: 'Exclusive OR: Returns true if exactly one operand is true' },
  { symbol: '→', name: 'IMPLICATION', description: 'Logical Implication: Returns false if the first operand is true and the second operand is false' },
  { symbol: '↔', name: 'BICONDITIONAL', description: 'Logical Biconditional: Returns true if both operands are the same' },
  { symbol: '↑', name: 'NAND', description: 'Negated AND (NAND): Returns true if at least one operand is false' },
  { symbol: '↓', name: 'NOR', description: 'Negated OR (NOR): Returns true if both operands are false' },
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

  // evalExpression = evalExpression.replace(/↑/g, '!($1 && $2)');
  // evalExpression = evalExpression.replace(/↓/g, '!($1 || $2)');
  evalExpression = evalExpression.replace(/(\w+)\s*↑\s*(\w+)/g, '!($1 && $2)');
  evalExpression = evalExpression.replace(/(\w+)\s*↓\s*(\w+)/g, '!($1 || $2)');

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
  const [selectedOperator, setSelectedOperator] = useState(null);
  const [info,setInfo]=useState('')
  const inputRef = useRef(null);
  const tableRef = useRef(null);

  useEffect(()=>{
    const information=operatorDescriptions[selectedOperator]?.description;
    setInfo(information);
    console.log('info'+info)
  },[selectedOperator])


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
    

  // const scrollToDescription = () => {
  //   const descriptionElement = document.getElementById('operator-info');
  //   if (descriptionElement) {
  //     descriptionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // };

  // const scrollToDescription = () => {
  //   const descriptionElement = document.getElementById('operator-info');
  //   if (descriptionElement) {
  //     setTimeout(() => {
  //       descriptionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //     }, 100); // Adjust the delay as needed
  //   }
  // };

  const scrollToDescription = () => {
    const descriptionElement = document.getElementById('operator-info');
    if (descriptionElement) {
      const topOffset = descriptionElement.offsetTop;
      window.scrollTo({
        top: topOffset - 20, // Adjust the offset as needed
        behavior: 'smooth',
      });
    }
  };


  useEffect(() => {
    if (selectedOperator) {
      scrollToDescription();
    }
  }, [selectedOperator]);


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
      <span
        className="info-link"
        onClick={(e) => {
          e.preventDefault();
          setSelectedOperator(op.symbol);
        }}
      >
        ?
      </span>
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
        <table id="truth-table" ref={tableRef} border="1" style={{ margin: '20px auto', borderCollapse: 'collapse' }}>
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

       <br></br>
       <br></br>
       <br></br>
       <br></br>
      

{selectedOperator && (
  <div id="operator-info">
    <h2>{selectedOperator} Operator</h2>
    <br></br>
    <br></br>
    <br></br>
    
    <div className={roboto.className}>
    <ReactMarkdown>{info}</ReactMarkdown>
    {/* <MarkdownComponent article={info}></MarkdownComponent>
    */}
    </div>
   
    <button className='btn-back' onClick={() => setSelectedOperator(null)}>Go Back</button>
  </div>
)}
    </div>
  );
};

export default LogicCalculator;
