// // // // 'use client';

// // // // import React, { useState } from 'react';
// // // // import { keyboardLayout } from './data';
// // // // import { handleKeyAction } from './utils';
// // // // import styles from './CalculatorKeyboard.module.css';

// // // // const CalculatorKeyboard = ({ layout = keyboardLayout, onInput, onAction, className = '' }) => {
// // // //   const [isExpanded, setIsExpanded] = useState(false);

// // // //   const handleToggle = () => setIsExpanded(!isExpanded);

// // // //   const handleKeyClick = (action, value) => {
// // // //     handleKeyAction(action, value, onInput, onAction);
// // // //   };

// // // //   return (
// // // //     <div className={`${styles.container} ${className}`}>
// // // //       <button className={styles.toggle} onClick={handleToggle}>
// // // //         <div className={styles.icon} />
// // // //         <span>{isExpanded ? 'Hide' : 'Show'}</span>
// // // //       </button>
      
// // // //       <div className={`${styles.keyboard} ${isExpanded ? styles.expanded : ''}`}>
// // // //         {layout.map((row, rowIndex) => (
// // // //           <div key={rowIndex} className={styles.row}>
// // // //             {row.map((key, keyIndex) => (
// // // //               <button
// // // //                 key={keyIndex}
// // // //                 className={styles[key.type]}
// // // //                 onClick={() => handleKeyClick(key.action, key.value)}
// // // //                 dangerouslySetInnerHTML={{ __html: key.display }}
// // // //               />
// // // //             ))}
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CalculatorKeyboard;


// // // 'use client';

// // // import React, { useState } from 'react';
// // // import { keyboardLayout } from './data';
// // // import { handleKeyAction } from './utils';
// // // import styles from './CalculatorKeyboard.module.css';

// // // const CalculatorKeyboard = ({ layout = keyboardLayout, onInput, onAction, className = '' }) => {
// // //   const [isExpanded, setIsExpanded] = useState(false);

// // //   const handleToggle = () => setIsExpanded(!isExpanded);

// // //   const handleKeyClick = (action, value) => {
// // //     handleKeyAction(action, value, onInput, onAction);
// // //   };

// // //   return (
// // //     <div className={`${styles.container} ${className}`}>
// // //       <button className={styles.toggle} onClick={handleToggle}>
// // //         <div className={styles.icon} />
// // //         <span>{isExpanded ? 'Hide' : 'Show'}</span>
// // //       </button>
      
// // //       <div className={`${styles.keyboard} ${isExpanded ? styles.expanded : ''}`}>
// // //         {(layout || []).map((row, rowIndex) => (
// // //           <div key={rowIndex} className={styles.row}>
// // //             {row.map((key, keyIndex) => (
// // //               <button
// // //                 key={keyIndex}
// // //                 className={styles[key.type]}
// // //                 onClick={() => handleKeyClick(key.action, key.value)}
// // //                 dangerouslySetInnerHTML={{ __html: key.display }}
// // //               />
// // //             ))}
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CalculatorKeyboard;



// // 'use client';

// // import React, { useState } from 'react';
// // import styles from './CalculatorKeyboard.module.css';
// // import { keyboardLayout } from './data';

// // // const keyboardLayout = [
// // //   [
// // //     { display: '<span style="font-style: italic;">x</span>', type: 'key', action: 'insert', value: 'x' },
// // //     { display: '<span style="font-style: italic;">y</span>', type: 'key', action: 'insert', value: 'y' },
// // //     { display: '<span style="font-style: italic;">a</span><sup>2</sup>', type: 'key', action: 'insert', value: '^2' },
// // //     { display: '<span style="font-style: italic;">a</span><sup><span style="font-style: italic;">b</span></sup>', type: 'key', action: 'insert', value: '^' },
// // //     { display: '7', type: 'number', action: 'insert', value: '7' },
// // //     { display: '8', type: 'number', action: 'insert', value: '8' },
// // //     { display: '9', type: 'number', action: 'insert', value: '9' },
// // //     { display: '÷', type: 'operator', action: 'insert', value: '/' },
// // //     { display: 'functions', type: 'functions', action: 'functions' }
// // //   ],
// // //   [
// // //     { display: '(', type: 'key', action: 'insert', value: '(' },
// // //     { display: ')', type: 'key', action: 'insert', value: ')' },
// // //     { display: '&lt;', type: 'key', action: 'insert', value: '<' },
// // //     { display: '&gt;', type: 'key', action: 'insert', value: '>' },
// // //     { display: '4', type: 'number', action: 'insert', value: '4' },
// // //     { display: '5', type: 'number', action: 'insert', value: '5' },
// // //     { display: '6', type: 'number', action: 'insert', value: '6' },
// // //     { display: '×', type: 'operator', action: 'insert', value: '*' },
// // //     { display: '←', type: 'nav', action: 'navigate', value: '-1' },
// // //     { display: '→', type: 'nav', action: 'navigate', value: '1' }
// // //   ],
// // //   [
// // //     { display: '|<span style="font-style: italic;">a</span>|', type: 'key', action: 'function', value: 'abs(' },
// // //     { display: ';', type: 'key', action: 'insert', value: ';' },
// // //     { display: '≤', type: 'key', action: 'insert', value: '≤' },
// // //     { display: '≥', type: 'key', action: 'insert', value: '≥' },
// // //     { display: '1', type: 'number', action: 'insert', value: '1' },
// // //     { display: '2', type: 'number', action: 'insert', value: '2' },
// // //     { display: '3', type: 'number', action: 'insert', value: '3' },
// // //     { display: '−', type: 'operator', action: 'insert', value: '-' },
// // //     { display: '⌫', type: 'clear', action: 'backspace' }
// // //   ],
// // //   [
// // //     { display: 'ABC', type: 'key', action: 'toggleCase' },
// // //     { display: '🔊', type: 'key', action: 'sound' },
// // //     { display: '√', type: 'key', action: 'function', value: 'sqrt(' },
// // //     { display: 'π', type: 'key', action: 'insert', value: 'π' },
// // //     { display: '0', type: 'number', action: 'insert', value: '0' },
// // //     { display: '.', type: 'number', action: 'insert', value: '.' },
// // //     { display: '=', type: 'number', action: 'insert', value: '=' },
// // //     { display: '+', type: 'operator', action: 'insert', value: '+' },
// // //     { display: '⏎', type: 'action', action: 'calculate' }
// // //   ]
// // // ];

// // const handleKeyAction = (action, value, onInput, onAction) => {
// //   switch (action) {
// //     case 'insert':
// //     case 'function':
// //       onInput?.(value || '');
// //       break;
// //     case 'backspace':
// //       onAction?.('backspace');
// //       break;
// //     case 'navigate':
// //       onAction?.('navigate', value);
// //       break;
// //     case 'calculate':
// //       onAction?.('calculate');
// //       break;
// //     default:
// //       onAction?.(action, value);
// //   }
// // };

// // const CalculatorKeyboard = ({ layout = keyboardLayout, onInput, onAction, className = '' }) => {
// //   const [isExpanded, setIsExpanded] = useState(false);

// //   const handleToggle = () => setIsExpanded(!isExpanded);

// //   const handleKeyClick = (action, value) => {
// //     handleKeyAction(action, value, onInput, onAction);
// //   };

// //   return (
// //     <div className={`${styles.container} ${className}`}>
// //       <button className={styles.toggle} onClick={handleToggle}>
// //         <div className={styles.icon} />
// //         <span>{isExpanded ? 'Hide' : 'Show'}</span>
// //       </button>
      
// //       <div className={`${styles.keyboard} ${isExpanded ? styles.expanded : ''}`}>
// //         {layout.map((row, rowIndex) => (
// //           <div key={rowIndex} className={styles.row}>
// //             {row.map((key, keyIndex) => (
// //               <button
// //                 key={keyIndex}
// //                 className={styles[key.type]}
// //                 onClick={() => handleKeyClick(key.action, key.value)}
// //                 dangerouslySetInnerHTML={{ __html: key.display }}
// //               />
// //             ))}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CalculatorKeyboard;


// 'use client';

// import React, { useState } from 'react';
// import styles from './CalculatorKeyboard.module.css';
// import { keyboardLayout } from './data';

// const handleKeyAction = (action, value, onInput, onAction) => {
//   switch (action) {
//     case 'insert':
//     case 'function':
//       onInput?.(value || '');
//       break;
//     case 'backspace':
//       onAction?.('backspace');
//       break;
//     case 'navigate':
//       onAction?.('navigate', value);
//       break;
//     case 'calculate':
//       onAction?.('calculate');
//       break;
//     default:
//       onAction?.(action, value);
//   }
// };

// const CalculatorKeyboard = ({ layouts = [keyboardLayout], onInput, onAction, className = '' }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleToggle = () => setIsExpanded(!isExpanded);

//   const handleKeyClick = (action, value) => {
//     handleKeyAction(action, value, onInput, onAction);
//   };

//   // Combine all layouts into one
//   const combinedLayout = layouts.flat();

//   return (
//     <div className={`${styles.container} ${className}`}>
//       <button className={styles.toggle} onClick={handleToggle}>
//         <div className={styles.icon} />
//         <span>{isExpanded ? 'Hide' : 'Show'}</span>
//       </button>
      
//       <div className={`${styles.keyboard} ${isExpanded ? styles.expanded : ''}`}>
//         {combinedLayout.map((row, rowIndex) => (
//           <div key={rowIndex} className={styles.row}>
//             {row.map((key, keyIndex) => (
//               <button
//                 key={keyIndex}
//                 className={styles[key.type]}
//                 onClick={() => handleKeyClick(key.action, key.value)}
//                 dangerouslySetInnerHTML={{ __html: key.display }}
//               />
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CalculatorKeyboard;


'use client';

import React, { useState } from 'react';
import styles from './CalculatorKeyboard.module.css';
import { keyboardLayout } from './data';

const handleKeyAction = (action, value, onInput, onAction) => {
  switch (action) {
    case 'insert':
    case 'function':
      onInput?.(value || '');
      break;
    case 'backspace':
      onAction?.('backspace');
      break;
    case 'navigate':
      onAction?.('navigate', value);
      break;
    case 'calculate':
      onAction?.('calculate');
      break;
    default:
      onAction?.(action, value);
  }
};

const CalculatorKeyboard = ({ layouts = [keyboardLayout], direction = 'vertical', onInput, onAction, className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);

  const handleKeyClick = (action, value) => {
    handleKeyAction(action, value, onInput, onAction);
  };

  // Remove the flat() since we now handle layouts separately
  // const combinedLayout = layouts.flat();

  return (
    <div className={`${styles.container} ${className}`}>
      <button className={styles.toggle} onClick={handleToggle}>
        <div className={styles.icon} />
        <span>{isExpanded ? 'Hide' : 'Show'}</span>
      </button>
      
      <div className={`${styles.keyboard} ${styles[direction]} ${isExpanded ? styles.expanded : ''}`}>
        {layouts.map((layout, layoutIndex) => (
          <div key={layoutIndex} className={styles.layoutBlock}>
            {layout.map((row, rowIndex) => (
              <div key={rowIndex} className={styles.row}>
                {row.map((key, keyIndex) => (
                  <button
                    key={keyIndex}
                    className={styles[key.type]}
                    onClick={() => handleKeyClick(key.action, key.value)}
                    dangerouslySetInnerHTML={{ __html: key.display }}
                  />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalculatorKeyboard;