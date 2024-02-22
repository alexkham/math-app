// 'use client'
// import { useState ,useRef ,useEffect} from 'react';
// import './TypeWriter.css';
// import Keyboard from './Keyboard';
// import layout from './keyboardsData'
// import MathKeyboard from './MathKeyboard';
// import math from './advanced_binary_operators.json'
// import general from './general_operations.json'

// // const layout = [
// //     "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
// //     "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
// //     "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
// //     "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
// //     "space"
// // ];

// const keyboard1Styles = {
//   keyboard: {
//     background: '#004134',
//     height:'200px'
//   },
//   keyboardKeys: {
//     padding: '5px'
//   },
//   keyboardKey: {
//     height: '30px'
//   }
// }

// const keyboard2Styles = {
//   keyboard: {
//     background: '#430b4a',
//     height:'200px'
//   },
//   keyboardKeys: {
//     padding: '5px',
    
//   },
//   keyboardKey: {
//     height: '30px'
//   }
// }

// function TypeWriter() {
//   const [showKeyboard, setShowKeyboard] = useState(false);
//   const [activeKeyboard, setActiveKeyboard] = useState(0)
//   const [input, setInput] = useState("");
//   const textareaRef = useRef(null);

//   const onChange = (e) => {
//     setInput(e.target.value);
//     if (textareaRef.current && document.activeElement !== textareaRef.current) {
//         textareaRef.current.focus();
//       }
//   }

//   const resetInput=()=>{
//     setInput('')
//   }

//   const showActiveKeyboard=(index)=>{
//     setShowKeyboard(true)
//     setActiveKeyboard(index);
//    // textareaRef.current && textareaRef.current.focus();
//    setTimeout(() => {
//     textareaRef.current && textareaRef.current.focus();
//   }, 0);

//   }

// //   useEffect(() => {
// //     const handleFocus = () => {
// //       // Check if the current active element is not the textarea, then focus it
// //       if (document.activeElement !== textareaRef.current) {
// //         textareaRef.current.focus();
// //       }
// //     };

// //     // Consider focusing after a slight delay after keyboard switch if needed
// //     setTimeout(() => {
// //       handleFocus();
// //     }, 100); // Adjust delay as necessary

// //     // Optional: Add a global click listener to refocus the textarea as needed
// //     // document.addEventListener('click', handleFocus);

// //     return () => {
// //       // Cleanup global click listener if used
// //       // document.removeEventListener('click', handleFocus);
// //     };
// //   }, [showKeyboard, activeKeyboard]);

// useEffect(() => {
//     // Auto-focus the textarea when the component mounts or the showKeyboard state changes
//     textareaRef.current && textareaRef.current.focus();
//   }, [showKeyboard]);  


// const copyToClipboard = () => {
//     // Create a temporary textarea element to hold the code
//     const textarea = document.createElement('textarea');
//     textarea.value = input;
//     document.body.appendChild(textarea);

//     // Select the text and copy it to the clipboard
//     textarea.select();
//     document.execCommand('copy');

//     // Clean up: remove the temporary textarea
//     document.body.removeChild(textarea);
//     // setCopied(true);

//     // Reset the copied state after a delay (e.g., 2000 milliseconds = 2 seconds)
//     // setTimeout(() => {
//     //     setCopied(false);
//     // }, 2000); // Adjust the time as needed
// };


//   return (
//     <div className="App">
//          {/* <h3>React keyboard</h3>
//         <span>{showKeyboard?'show':'no-show'}</span> */}
//         {/* <span>{activeKeyboard}</span> */}
         
//       <button 
//       title='Showing keyboard 1'
//       onClick={() => showActiveKeyboard('Regular')}>Show Keyboard1</button>
//       <button 
//       onClick={() => showActiveKeyboard(1)}>Show Keyboard2</button>
//       <div className='keyboard-group'>
//       <textarea value={input}
//       ref={textareaRef} 
//       onChange={onChange} 
//       className="keyboard-input" 
//       style={{ position: 'absolute', top: '30px', right: '30px', width: '300px' }}
//       //    onFocus={setShowKeyboard}  
//       ></textarea>
//        <button onClick={resetInput}>Reset</button>
//        <button onClick={copyToClipboard}>Copy</button>
//        </div>
//       {/* {
//         activeKeyboard === 0 ?
//           <Keyboard layout={layout} input={input} setInput={setInput} show={showKeyboard} setShow={setShowKeyboard} styles={keyboard1Styles} /> :
//           <Keyboard layout={layout} input={input} setInput={setInput} show={showKeyboard} setShow={setShowKeyboard} styles={keyboard2Styles} />
//       } */}
//       { activeKeyboard ==='Regular' ? 
//       <Keyboard layout={layout} 
//       input={input} 
//       setInput={setInput} 
//       show={showKeyboard} 
//       setShow={setShowKeyboard} 
//       styles={keyboard1Styles} /> :
      
//       <MathKeyboard 
//       layout={general} 
//       input={input} 
//       setInput={setInput} 
//       show={showKeyboard} 
//       setShow={setShowKeyboard} 
//       styles={keyboard1Styles}></MathKeyboard>      
//       }
//     </div>
//   );
// }

// export default TypeWriter;

'use client'
import React, { useState, useRef, useEffect } from 'react';
import './TypeWriter.css';
import Keyboard from './Keyboard';
import MathKeyboard from './MathKeyboard';
import layout from './keyboardsData';
import general from './general_operations.json';

const keyboard1Styles = {
  keyboard: {
    background: '#004134',
    height: '200px',
  },
  keyboardKeys: {
    padding: '5px',
  },
  keyboardKey: {
    height: '30px',
  },
};

function TypeWriter() {
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeKeyboard, setActiveKeyboard] = useState('Regular');
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const resetInput = () => {
    setInput('');
  };

  const showActiveKeyboard = (index) => {
    setShowKeyboard(true);
    setActiveKeyboard(index);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(input).then(() => {
      /* Clipboard successfully set */
    }, () => {
      /* Clipboard write failed */
    });
  };

  // Focus the textarea whenever it's rendered or updated, especially after keyboard switches
  useEffect(() => {
    if (showKeyboard) {
      textareaRef.current.focus();
    }
  }, [showKeyboard, input, activeKeyboard]);

  return (
    <div className="App">
      <button title='Showing keyboard 1' onClick={() => showActiveKeyboard('Regular')}>Show Keyboard 1</button>
      <button onClick={() => showActiveKeyboard('Math')}>Show Keyboard 2</button>
      <div className='keyboard-group'>
        <textarea
          ref={textareaRef}
          value={input}
          onChange={onChange}
          className="keyboard-input"
          style={{ position: 'absolute', top: '30px', right: '30px', width: '300px' }}
        ></textarea>
        <div className='buttons-container'>
        <button className='btn' onClick={copyToClipboard} style={{backgroundColor:'#037f61'}}>Copy</button>
        <button  className='btn' onClick={resetInput} style={{backgroundColor:'red'}}>Reset</button>
        </div>

      </div>
      {activeKeyboard === 'Regular' ?
        <Keyboard
          layout={layout}
          input={input}
          setInput={setInput}
          show={showKeyboard}
          setShow={setShowKeyboard}
          styles={keyboard1Styles} /> :
        <MathKeyboard
          layout={general}
          input={input}
          setInput={setInput}
          show={showKeyboard}
          setShow={setShowKeyboard}
          styles={keyboard1Styles} />}
    </div>
  );
}

export default TypeWriter;

