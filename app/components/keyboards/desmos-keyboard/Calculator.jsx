// 'use client';

// import React, { useState } from 'react';
// import CalculatorOutput from './CalculatorOutput';
// import CalculatorKeyboard from './CalculatorKeyboard';
// import { keyboardLayout } from './data';

// const Calculator = () => {
//   const [expression, setExpression] = useState('');
//   const [cursorPosition, setCursorPosition] = useState(0);

//   const handleInput = (value) => {
//     const newExpression = 
//       expression.slice(0, cursorPosition) + 
//       value + 
//       expression.slice(cursorPosition);
    
//     setExpression(newExpression);
//     setCursorPosition(cursorPosition + value.length);
//   };

//   const handleAction = (action, value) => {
//     switch (action) {
//       case 'backspace':
//         if (cursorPosition > 0) {
//           const newExpression = 
//             expression.slice(0, cursorPosition - 1) + 
//             expression.slice(cursorPosition);
//           setExpression(newExpression);
//           setCursorPosition(cursorPosition - 1);
//         }
//         break;
        
//       case 'navigate':
//         const direction = parseInt(value);
//         const newPos = Math.max(0, Math.min(expression.length, cursorPosition + direction));
//         setCursorPosition(newPos);
//         break;
        
//       case 'calculate':
//         // Add your calculation logic here
//         console.log('Calculate:', expression);
//         break;
        
//       default:
//         console.log('Action:', action, value);
//     }
//   };

//   const handleExpressionChange = (newExpression) => {
//     setExpression(newExpression);
//   };

//   const handleCursorMove = (position) => {
//     setCursorPosition(position);
//   };

//   return (
//     <div>
//       <CalculatorOutput
//         value={expression}
//         onChange={handleExpressionChange}
//         onCursorMove={handleCursorMove}
//         cursorPosition={cursorPosition}
//       />
//       <CalculatorKeyboard
//         layouts={[keyboardLayout]}
//         onInput={handleInput}
//         onAction={handleAction}
//       />
//     </div>
//   );
// };

// export default Calculator;


'use client';

import React, { useState } from 'react';
import CalculatorOutput from './CalculatorOutput';
import CalculatorKeyboard from './CalculatorKeyboard';
import { mathKeyboardLayout } from './mathKeyboardLayout';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [cursorPosition, setCursorPosition] = useState(0);

  const handleInput = (value) => {
    const newExpression = 
      expression.slice(0, cursorPosition) + 
      value + 
      expression.slice(cursorPosition);
    
    setExpression(newExpression);
    setCursorPosition(cursorPosition + value.length);
  };

  const handleAction = (action, value) => {
    switch (action) {
      case 'backspace':
        if (cursorPosition > 0) {
          const newExpression = 
            expression.slice(0, cursorPosition - 1) + 
            expression.slice(cursorPosition);
          setExpression(newExpression);
          setCursorPosition(cursorPosition - 1);
        }
        break;
        
      case 'navigate':
        const direction = parseInt(value);
        const newPos = Math.max(0, Math.min(expression.length, cursorPosition + direction));
        setCursorPosition(newPos);
        break;
        
      case 'calculate':
        console.log('Calculate:', expression);
        break;
        
      default:
        console.log('Action:', action, value);
    }
  };

  const handleExpressionChange = (newExpression) => {
    const cleanExpression = newExpression.replace(/^\$|\$$/g, '');
    setExpression(cleanExpression);
  };

  const handleCursorMove = (position) => {
    setCursorPosition(position);
  };

  return (
    <div>
      <CalculatorOutput
        value={`$${expression}$`}
        onChange={handleExpressionChange}
        onCursorMove={handleCursorMove}
        cursorPosition={cursorPosition}
      />
      <CalculatorKeyboard
        layouts={[mathKeyboardLayout]}
        onInput={handleInput}
        onAction={handleAction}
      />
    </div>
  );
};

export default Calculator;