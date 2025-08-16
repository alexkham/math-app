// // // // // // 'use client';

// // // // // // import React, { useState, useRef, useEffect } from 'react';
// // // // // // import styles from './CalculatorOutput.module.css';

// // // // // // const CalculatorOutput = ({ value = '', onChange, onCursorMove, cursorPosition = 0 }) => {
// // // // // //   const inputRef = useRef(null);

// // // // // //   useEffect(() => {
// // // // // //     if (inputRef.current) {
// // // // // //       inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
// // // // // //     }
// // // // // //   }, [cursorPosition]);

// // // // // //   const handleChange = (e) => {
// // // // // //     onChange?.(e.target.value);
// // // // // //   };

// // // // // //   const handleCursorChange = (e) => {
// // // // // //     onCursorMove?.(e.target.selectionStart);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className={styles.container}>
// // // // // //       <textarea
// // // // // //         ref={inputRef}
// // // // // //         className={styles.output}
// // // // // //         value={value}
// // // // // //         onChange={handleChange}
// // // // // //         onSelect={handleCursorChange}
// // // // // //         onClick={handleCursorChange}
// // // // // //         onKeyUp={handleCursorChange}
// // // // // //         placeholder="Enter your expression..."
// // // // // //         rows={3}
// // // // // //       />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default CalculatorOutput;


// // // // // 'use client';

// // // // // import React, { useState, useRef, useEffect } from 'react';
// // // // // import { InlineMath, BlockMath } from 'react-katex';
// // // // // import 'katex/dist/katex.min.css';
// // // // // import styles from './CalculatorOutput.module.css';
// // // // // import { processContent } from '@/app/utils/contentProcessor';

// // // // // // const renderMathContent = (content) => {
// // // // // //   if (!content) return null;
  
// // // // // //   const parts = content.split(/(\$\$[\s\S]+?\$\$|\$[\s\S]+?\$)/);
  
// // // // // //   return parts.map((part, index) => {
// // // // // //     if (part.startsWith('$$') && part.endsWith('$$')) {
// // // // // //       try {
// // // // // //         return <BlockMath key={`block-${index}`} math={part.slice(2, -2)} />;
// // // // // //       } catch (e) {
// // // // // //         return <span key={`error-${index}`} style={{color: 'red'}}>{part}</span>;
// // // // // //       }
// // // // // //     } else if (part.startsWith('$') && part.endsWith('$')) {
// // // // // //       try {
// // // // // //         return <InlineMath key={`inline-${index}`} math={part.slice(1, -1)} />;
// // // // // //       } catch (e) {
// // // // // //         return <span key={`error-${index}`} style={{color: 'red'}}>{part}</span>;
// // // // // //       }
// // // // // //     }
// // // // // //     return <span key={`text-${index}`}>{part}</span>;
// // // // // //   });
// // // // // // };

// // // // // const renderMathContent = (content) => {
// // // // //     return processContent(content);
// // // // //   };

// // // // // const CalculatorOutput = ({ value = '', onChange, onCursorMove, cursorPosition = 0 }) => {
// // // // //   const inputRef = useRef(null);
// // // // //   const [showRaw, setShowRaw] = useState(false);

// // // // //   useEffect(() => {
// // // // //     if (inputRef.current && showRaw) {
// // // // //       inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
// // // // //     }
// // // // //   }, [cursorPosition, showRaw]);

// // // // //   const handleChange = (e) => {
// // // // //     onChange?.(e.target.value);
// // // // //   };

// // // // //   const handleCursorChange = (e) => {
// // // // //     onCursorMove?.(e.target.selectionStart);
// // // // //   };

// // // // //   return (
// // // // //     <div className={styles.container}>
// // // // //       <div className={styles.header}>
// // // // //         <button 
// // // // //           className={styles.toggleButton}
// // // // //           onClick={() => setShowRaw(!showRaw)}
// // // // //         >
// // // // //           {showRaw ? 'Show Rendered' : 'Show Raw'}
// // // // //         </button>
// // // // //       </div>
      
// // // // //       {showRaw ? (
// // // // //         <textarea
// // // // //           ref={inputRef}
// // // // //           className={styles.output}
// // // // //           value={value}
// // // // //           onChange={handleChange}
// // // // //           onSelect={handleCursorChange}
// // // // //           onClick={handleCursorChange}
// // // // //           onKeyUp={handleCursorChange}
// // // // //           placeholder="Enter your expression..."
// // // // //           rows={3}
// // // // //         />
// // // // //       ) : (
// // // // //         <div 
// // // // //           className={styles.preview}
// // // // //           onClick={() => setShowRaw(true)}
// // // // //         >
// // // // //           {renderMathContent(value) || <span className={styles.placeholder}>Enter your expression...</span>}
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CalculatorOutput;


// // // // 'use client';

// // // // import React, { useState, useRef, useEffect } from 'react';
// // // // import { InlineMath, BlockMath } from 'react-katex';
// // // // import 'katex/dist/katex.min.css';
// // // // import styles from './CalculatorOutput.module.css';
// // // // import { processContent } from '@/app/utils/contentProcessor';

// // // // const renderMathContent = (content) => {
// // // //   return processContent(content);
// // // // };

// // // // const CalculatorOutput = ({ value = '', onChange, onCursorMove, cursorPosition = 0, onClear }) => {
// // // //   const inputRef = useRef(null);
// // // //   const [showRaw, setShowRaw] = useState(false);

// // // //   useEffect(() => {
// // // //     if (inputRef.current && showRaw) {
// // // //       inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
// // // //     }
// // // //   }, [cursorPosition, showRaw]);

// // // //   const handleChange = (e) => {
// // // //     onChange?.(e.target.value);
// // // //   };

// // // //   const handleCursorChange = (e) => {
// // // //     onCursorMove?.(e.target.selectionStart);
// // // //   };

// // // //   const handleClear = () => {
// // // //     onClear?.();
// // // //   };

// // // //   const handleCopy = async () => {
// // // //     try {
// // // //       await navigator.clipboard.writeText(value);
// // // //     } catch (err) {
// // // //       console.error('Copy failed:', err);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className={styles.container}>
// // // //       <div className={styles.header}>
// // // //         <button 
// // // //           className={styles.toggleButton}
// // // //           onClick={() => setShowRaw(!showRaw)}
// // // //         >
// // // //           {showRaw ? 'Show Rendered' : 'Show Raw'}
// // // //         </button>
// // // //         <div className={styles.buttons}>
// // // //           <button className={styles.clearButton} onClick={handleClear}>
// // // //             Clear All
// // // //           </button>
// // // //           <button className={styles.copyButton} onClick={handleCopy}>
// // // //             Copy
// // // //           </button>
// // // //         </div>
// // // //       </div>
      
// // // //       {showRaw ? (
// // // //         <textarea
// // // //           ref={inputRef}
// // // //           className={styles.output}
// // // //           value={value}
// // // //           onChange={handleChange}
// // // //           onSelect={handleCursorChange}
// // // //           onClick={handleCursorChange}
// // // //           onKeyUp={handleCursorChange}
// // // //           placeholder="Enter your expression..."
// // // //           rows={3}
// // // //         />
// // // //       ) : (
// // // //         <div 
// // // //           className={styles.preview}
// // // //           onClick={() => setShowRaw(true)}
// // // //         >
// // // //           {renderMathContent(value) || <span className={styles.placeholder}>Enter your expression...</span>}
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CalculatorOutput;


// // // 'use client';

// // // import React, { useState, useRef, useEffect } from 'react';
// // // import { InlineMath, BlockMath } from 'react-katex';
// // // import 'katex/dist/katex.min.css';
// // // import styles from './CalculatorOutput.module.css';
// // // import { processContent } from '@/app/utils/contentProcessor';

// // // const renderMathContent = (content) => {
// // //   return processContent(content);
// // // };

// // // const CalculatorOutput = ({ value = '', onChange, onCursorMove, cursorPosition = 0, onClear }) => {
// // //   const inputRef = useRef(null);
// // //   const [showRaw, setShowRaw] = useState(false);

// // //   useEffect(() => {
// // //     if (inputRef.current && showRaw) {
// // //       inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
// // //     }
// // //   }, [cursorPosition, showRaw]);

// // //   const handleChange = (e) => {
// // //     onChange?.(e.target.value);
// // //   };

// // //   const handleCursorChange = (e) => {
// // //     onCursorMove?.(e.target.selectionStart);
// // //   };

// // //   const handleClear = () => {
// // //     onChange?.('');
// // //     onClear?.();
// // //   };

// // //   const handleCopy = async () => {
// // //     try {
// // //       // Copy the raw content without $ wrappers
// // //       const rawContent = value.replace(/^\$|\$/g, '');
// // //       await navigator.clipboard.writeText(rawContent);
// // //     } catch (err) {
// // //       console.error('Copy failed:', err);
// // //     }
// // //   };

// // //   return (
// // //     <div className={styles.container}>
// // //       <div className={styles.header}>
// // //         <button 
// // //           className={styles.toggleButton}
// // //           onClick={() => setShowRaw(!showRaw)}
// // //         >
// // //           {showRaw ? 'Show Rendered' : 'Show Raw'}
// // //         </button>
// // //         <div className={styles.buttons}>
// // //           <button className={styles.clearButton} onClick={handleClear}>
// // //             Clear All
// // //           </button>
// // //           <button className={styles.copyButton} onClick={handleCopy}>
// // //             Copy
// // //           </button>
// // //         </div>
// // //       </div>
      
// // //       {showRaw ? (
// // //         <textarea
// // //           ref={inputRef}
// // //           className={styles.output}
// // //           value={value}
// // //           onChange={handleChange}
// // //           onSelect={handleCursorChange}
// // //           onClick={handleCursorChange}
// // //           onKeyUp={handleCursorChange}
// // //           placeholder="Enter your expression..."
// // //           rows={3}
// // //         />
// // //       ) : (
// // //         <div 
// // //           className={styles.preview}
// // //           onClick={() => setShowRaw(true)}
// // //         >
// // //           {renderMathContent(value) || <span className={styles.placeholder}>Enter your expression...</span>}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default CalculatorOutput;


// // // 'use client';

// // // import React, { useRef, useEffect } from 'react';
// // // import { InlineMath, BlockMath } from 'react-katex';
// // // import 'katex/dist/katex.min.css';
// // // import styles from './CalculatorOutput.module.css';
// // // import { processContent } from '@/app/utils/contentProcessor';

// // // const renderMathContent = (content) => {
// // //   return processContent(content);
// // // };

// // // const CalculatorOutput = ({ value = '', onChange, onCursorMove, cursorPosition = 0, onClear }) => {
// // //   const inputRef = useRef(null);

// // //   useEffect(() => {
// // //     if (inputRef.current) {
// // //       inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
// // //     }
// // //   }, [cursorPosition]);

// // //   const handleChange = (e) => {
// // //     onChange?.(e.target.value);
// // //   };

// // //   const handleCursorChange = (e) => {
// // //     onCursorMove?.(e.target.selectionStart);
// // //   };

// // //   const handleClear = () => {
// // //     onChange?.('');
// // //     onClear?.();
// // //   };

// // //   const handleCopy = async () => {
// // //     try {
// // //       const rawContent = value.replace(/^\$|\$$/g, '');
// // //       await navigator.clipboard.writeText(rawContent);
// // //     } catch (err) {
// // //       console.error('Copy failed:', err);
// // //     }
// // //   };

// // //   return (
// // //     <div className={styles.container}>
// // //       <div className={styles.header}>
// // //         <div className={styles.buttons}>
// // //           <button className={styles.clearButton} onClick={handleClear}>
// // //             Clear All
// // //           </button>
// // //           <button className={styles.copyButton} onClick={handleCopy}>
// // //             Copy
// // //           </button>
// // //         </div>
// // //       </div>
      
// // //       {/* <textarea
// // //         ref={inputRef}
// // //         className={styles.output}
// // //         value={value}
// // //         onChange={handleChange}
// // //         onSelect={handleCursorChange}
// // //         onClick={handleCursorChange}
// // //         onKeyUp={handleCursorChange}
// // //         placeholder="Enter your expression..."
// // //         rows={3}
// // //       /> */}
      
// // //       <div className={styles.preview}>
// // //         {renderMathContent(value) || <span className={styles.placeholder}>Enter your expression...</span>}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CalculatorOutput;

// // 'use client';

// // import React, { useRef, useEffect } from 'react';
// // import { InlineMath, BlockMath } from 'react-katex';
// // import 'katex/dist/katex.min.css';
// // import styles from './CalculatorOutput.module.css';
// // import { processContent } from '@/app/utils/contentProcessor';

// // const renderMathContent = (content) => {
// //   return processContent(content);
// // };

// // const CalculatorOutput = ({ value = '', onChange, onCursorMove, cursorPosition = 0, onClear }) => {
// //   const divRef = useRef(null);

// //   const handleClear = () => {
// //     onChange?.('');
// //     onClear?.();
// //   };

// //   const handleCopy = async () => {
// //     try {
// //       const rawContent = value.replace(/^\$|\$$/g, '');
// //       await navigator.clipboard.writeText(rawContent);
// //     } catch (err) {
// //       console.error('Copy failed:', err);
// //     }
// //   };

// //   const handleClick = () => {
// //     if (divRef.current) {
// //       divRef.current.focus();
// //     }
// //   };

// //   const handleKeyDown = (e) => {
// //     if (e.key.length === 1) {
// //       const newValue = value + e.key;
// //       onChange?.(newValue);
// //     } else if (e.key === 'Backspace') {
// //       const newValue = value.slice(0, -1);
// //       onChange?.(newValue);
// //     }
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <div className={styles.header}>
// //         <div className={styles.buttons}>
// //           <button className={styles.clearButton} onClick={handleClear}>
// //             Clear All
// //           </button>
// //           <button className={styles.copyButton} onClick={handleCopy}>
// //             Copy
// //           </button>
// //         </div>
// //       </div>
      
// //       <div 
// //         ref={divRef}
// //         className={styles.preview}
// //         onClick={handleClick}
// //         onKeyDown={handleKeyDown}
// //         tabIndex={0}
// //       >
// //         {renderMathContent(value) || <span className={styles.placeholder}>Enter your expression...</span>}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CalculatorOutput;


// 'use client';

// import React, { useRef, useEffect, useState } from 'react';
// import { InlineMath, BlockMath } from 'react-katex';
// import 'katex/dist/katex.min.css';
// import styles from './CalculatorOutput.module.css';
// import { processContent } from '@/app/utils/contentProcessor';

// const renderMathContent = (content) => {
//   return processContent(content);
// };

// const CalculatorOutput = ({ value = '', onChange, onCursorMove, cursorPosition = 0, onClear }) => {
//   const divRef = useRef(null);
//   const [isFocused, setIsFocused] = useState(false);

//   // Focus the div when component mounts or when clicked
//   useEffect(() => {
//     if (isFocused && divRef.current) {
//       divRef.current.focus();
//     }
//   }, [isFocused]);

//   // Handle cursor position changes
//   useEffect(() => {
//     if (divRef.current && isFocused) {
//       const selection = window.getSelection();
//       const range = document.createRange();
      
//       try {
//         // Set cursor position at the end by default
//         range.selectNodeContents(divRef.current);
//         range.collapse(false);
//         selection.removeAllRanges();
//         selection.addRange(range);
//       } catch (err) {
//         console.log('Cursor positioning failed:', err);
//       }
//     }
//   }, [cursorPosition, isFocused, value]);

//   const handleClear = () => {
//     onChange?.('');
//     onClear?.();
//   };

//   const handleCopy = async () => {
//     try {
//       const rawContent = value.replace(/^\$|\$$/g, '');
//       await navigator.clipboard.writeText(rawContent);
//     } catch (err) {
//       console.error('Copy failed:', err);
//     }
//   };

//   const handleClick = () => {
//     setIsFocused(true);
//     if (divRef.current) {
//       divRef.current.focus();
//     }
//   };

//   const handleFocus = () => {
//     setIsFocused(true);
//   };

//   const handleBlur = () => {
//     setIsFocused(false);
//   };

//   const handleKeyDown = (e) => {
//     e.preventDefault(); // Prevent default behavior
    
//     if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
//       // Regular character input
//       const newValue = value + e.key;
//       onChange?.(newValue);
//     } else if (e.key === 'Backspace') {
//       // Handle backspace
//       const newValue = value.slice(0, -1);
//       onChange?.(newValue);
//     } else if (e.key === 'Delete') {
//       // Handle delete key
//       const newValue = value.slice(0, -1);
//       onChange?.(newValue);
//     } else if (e.key === 'Enter') {
//       // Handle enter key - you might want to trigger calculation
//       e.preventDefault();
//     } else if (e.key === 'Escape') {
//       // Handle escape - blur the field
//       divRef.current?.blur();
//     } else if (e.ctrlKey || e.metaKey) {
//       // Handle Ctrl/Cmd shortcuts
//       if (e.key === 'a') {
//         // Select all - you might want to implement this
//         e.preventDefault();
//       } else if (e.key === 'c') {
//         // Copy
//         e.preventDefault();
//         handleCopy();
//       } else if (e.key === 'v') {
//         // Paste
//         e.preventDefault();
//         navigator.clipboard.readText().then(text => {
//           const newValue = value + text;
//           onChange?.(newValue);
//         }).catch(err => {
//           console.error('Paste failed:', err);
//         });
//       }
//     }
//   };

//   const handleInput = (e) => {
//     // This handles contenteditable input
//     const newValue = e.target.textContent || '';
//     onChange?.(newValue);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.header}>
//         <div className={styles.buttons}>
//           <button className={styles.clearButton} onClick={handleClear}>
//             Clear All
//           </button>
//           <button className={styles.copyButton} onClick={handleCopy}>
//             Copy
//           </button>
//         </div>
//       </div>
      
//       <div 
//         ref={divRef}
//         className={`${styles.preview} ${isFocused ? styles.focused : ''}`}
//         onClick={handleClick}
//         onFocus={handleFocus}
//         onBlur={handleBlur}
//         onKeyDown={handleKeyDown}
//         onInput={handleInput}
//         tabIndex={0}
//         role="textbox"
//         aria-label="Mathematical expression input"
//         contentEditable={false} // We handle input manually for better control
//       >
//         {value ? renderMathContent(value) : <span className={styles.placeholder}>Enter your expression...</span>}
//       </div>
//     </div>
//   );
// };

// export default CalculatorOutput;


'use client';

import React, { useRef, useEffect, useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import styles from './CalculatorOutput.module.css';
import { processContent } from '@/app/utils/contentProcessor';

const renderMathContent = (content) => {
  return processContent(content);
};

const CalculatorOutput = ({ value = '', onChange, onCursorMove, cursorPosition = 0, onClear }) => {
  const inputRef = useRef(null);
  const displayRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  // Sync cursor position
  useEffect(() => {
    if (inputRef.current && isFocused) {
      inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
    }
  }, [cursorPosition, isFocused]);

  const handleClear = () => {
    onChange?.('');
    onClear?.();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCopy = async () => {
    try {
      const rawContent = value.replace(/^\$|\$$/g, '');
      await navigator.clipboard.writeText(rawContent);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  const handleDisplayClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    onChange?.(newValue);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleKeyDown = (e) => {
    // Let the input handle most keys naturally
    // You can add special key handling here if needed
    if (e.key === 'Enter') {
      e.preventDefault();
      // Handle enter - maybe trigger calculation
    }
  };

  const handleSelectionChange = () => {
    if (inputRef.current && isFocused) {
      const cursorPos = inputRef.current.selectionStart;
      onCursorMove?.(cursorPos);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.buttons}>
          <button className={styles.clearButton} onClick={handleClear}>
            Clear All
          </button>
          <button className={styles.copyButton} onClick={handleCopy}>
            Copy
          </button>
        </div>
      </div>
      
      <div className={styles.inputContainer}>
        {/* Hidden input field for actual text input */}
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          onKeyUp={handleSelectionChange}
          onClick={handleSelectionChange}
          className={styles.hiddenInput}
        />
        
        {/* Display area showing rendered math */}
        <div 
          ref={displayRef}
          className={`${styles.preview} ${isFocused ? styles.focused : ''}`}
          onClick={handleDisplayClick}
        >
          {value ? renderMathContent(value) : <span className={styles.placeholder}>Enter your expression...</span>}
          {isFocused && <span className={styles.cursor}></span>}
        </div>
      </div>
    </div>
  );
};

export default CalculatorOutput;