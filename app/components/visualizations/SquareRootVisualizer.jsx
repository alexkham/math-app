// // // // // // // // // // SquareRootVisualizer.jsx
// // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // import './SquareRootVisualizer.css';

// // // // // // // // // const SquareRootVisualizer = () => {
// // // // // // // // //   const [number, setNumber] = useState(25);
// // // // // // // // //   const squareRoot = Math.sqrt(number);
// // // // // // // // //   const cellSize = 40;
// // // // // // // // //   const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  
// // // // // // // // //   const handleSliderChange = (e) => {
// // // // // // // // //     setNumber(parseFloat(e.target.value));
// // // // // // // // //   };

// // // // // // // // //   const getCellProperties = (row, col) => {
// // // // // // // // //     row = row + 1;
// // // // // // // // //     col = col + 1;
    
// // // // // // // // //     const isPerfectSquareCell = row === col;
// // // // // // // // //     const perfectSquare = isPerfectSquareCell ? row * row : null;
    
// // // // // // // // //     let color = 'white';
// // // // // // // // //     if (row <= 1 && col <= 1) {
// // // // // // // // //       color = 'rgb(0, 0, 255)';
// // // // // // // // //     } else if (row <= 2 && col <= 2) {
// // // // // // // // //       color = 'rgb(51, 102, 255)';
// // // // // // // // //     } else if (row <= 3 && col <= 3) {
// // // // // // // // //       color = 'rgb(102, 153, 255)';
// // // // // // // // //     } else if (row <= 4 && col <= 4) {
// // // // // // // // //       color = 'rgb(153, 204, 255)';
// // // // // // // // //     } else if (row <= 5 && col <= 5) {
// // // // // // // // //       color = 'rgb(204, 229, 255)';
// // // // // // // // //     } else if (row <= 6 && col <= 6) {
// // // // // // // // //       color = 'rgb(229, 240, 255)';
// // // // // // // // //     } else if (row <= 7 && col <= 7) {
// // // // // // // // //       color = 'rgb(240, 247, 255)';
// // // // // // // // //     } else if (row <= 8 && col <= 8) {
// // // // // // // // //       color = 'rgb(245, 250, 255)';
// // // // // // // // //     } else if (row <= 9 && col <= 9) {
// // // // // // // // //       color = 'rgb(250, 252, 255)';
// // // // // // // // //     } else if (row <= 10 && col <= 10) {
// // // // // // // // //       color = 'rgb(252, 253, 255)';
// // // // // // // // //     }
    
// // // // // // // // //     return { number: perfectSquare, color };
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="visualizer-card">
// // // // // // // // //       <div className="visualizer-content">
// // // // // // // // //         <div className="slider-container">
// // // // // // // // //           <span className="number-display">Number: {number}</span>
// // // // // // // // //           <input
// // // // // // // // //             type="range"
// // // // // // // // //             min="1"
// // // // // // // // //             max="100"
// // // // // // // // //             step="0.1"
// // // // // // // // //             value={number}
// // // // // // // // //             onChange={handleSliderChange}
// // // // // // // // //             className="custom-slider"
// // // // // // // // //           />
// // // // // // // // //           <span className="sqrt-display">√{number} = {squareRoot.toFixed(3)}</span>
// // // // // // // // //         </div>

// // // // // // // // //         <div className="grid-container">
// // // // // // // // //           {/* Top-left zero */}
// // // // // // // // //           <div className="axis-label zero-label">0</div>

// // // // // // // // //           {/* Top numbers */}
// // // // // // // // //           {numbers.map(num => (
// // // // // // // // //             <div
// // // // // // // // //               key={`top-${num}`}
// // // // // // // // //               className="axis-label top-label"
// // // // // // // // //               style={{
// // // // // // // // //                 left: `${(num * cellSize) + cellSize/2}px`,
// // // // // // // // //               }}
// // // // // // // // //             >
// // // // // // // // //               {num}
// // // // // // // // //             </div>
// // // // // // // // //           ))}

// // // // // // // // //           {/* Left numbers */}
// // // // // // // // //           {numbers.map(num => (
// // // // // // // // //             <div
// // // // // // // // //               key={`left-${num}`}
// // // // // // // // //               className="axis-label left-label"
// // // // // // // // //               style={{
// // // // // // // // //                 top: `${num * cellSize}px`,
// // // // // // // // //               }}
// // // // // // // // //             >
// // // // // // // // //               {num}
// // // // // // // // //             </div>
// // // // // // // // //           ))}

// // // // // // // // //           {/* Main grid with expanding frame */}
// // // // // // // // //           <div className="grid-wrapper">
// // // // // // // // //             {/* The expanding frame */}
// // // // // // // // //             <div 
// // // // // // // // //               className="expanding-frame"
// // // // // // // // //               style={{
// // // // // // // // //                 width: `${squareRoot * cellSize}px`,
// // // // // // // // //                 height: `${squareRoot * cellSize}px`,
// // // // // // // // //               }}
// // // // // // // // //             />
            
// // // // // // // // //             {/* Grid cells */}
// // // // // // // // //             <div className="grid">
// // // // // // // // //               {Array.from({ length: 10 }, (_, row) => (
// // // // // // // // //                 Array.from({ length: 10 }, (_, col) => {
// // // // // // // // //                   const { number, color } = getCellProperties(row, col);
// // // // // // // // //                   return (
// // // // // // // // //                     <div
// // // // // // // // //                       key={`${row}-${col}`}
// // // // // // // // //                       className="grid-cell"
// // // // // // // // //                       style={{
// // // // // // // // //                         backgroundColor: color,
// // // // // // // // //                       }}
// // // // // // // // //                     >
// // // // // // // // //                       {number || ''}
// // // // // // // // //                     </div>
// // // // // // // // //                   );
// // // // // // // // //                 })
// // // // // // // // //               )).flat()}
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default SquareRootVisualizer;

// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import './SquareRootVisualizer.css';

// // // // // // // // const SquareRootVisualizer = () => {
// // // // // // // //   const [number, setNumber] = useState(25);
// // // // // // // //   const squareRoot = Math.sqrt(number);
// // // // // // // //   const cellSize = 40;
// // // // // // // //   const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  
// // // // // // // //   const handleInputChange = (e) => {
// // // // // // // //     const value = parseFloat(e.target.value);
// // // // // // // //     if (!isNaN(value) && value >= 1 && value <= 100) {
// // // // // // // //       setNumber(value);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleSliderChange = (e) => {
// // // // // // // //     const value = parseFloat(e.target.value);
// // // // // // // //     setNumber(value);
// // // // // // // //   };
  
// // // // // // // //   const getCellProperties = (row, col) => {
// // // // // // // //     row = row + 1;
// // // // // // // //     col = col + 1;
    
// // // // // // // //     const isPerfectSquareCell = row === col;
// // // // // // // //     const perfectSquare = isPerfectSquareCell ? row * row : null;
    
// // // // // // // //     let color = 'white';
// // // // // // // //     if (row <= 1 && col <= 1) {
// // // // // // // //       color = 'rgb(0, 0, 255)';
// // // // // // // //     } else if (row <= 2 && col <= 2) {
// // // // // // // //       color = 'rgb(51, 102, 255)';
// // // // // // // //     } else if (row <= 3 && col <= 3) {
// // // // // // // //       color = 'rgb(102, 153, 255)';
// // // // // // // //     } else if (row <= 4 && col <= 4) {
// // // // // // // //       color = 'rgb(153, 204, 255)';
// // // // // // // //     } else if (row <= 5 && col <= 5) {
// // // // // // // //       color = 'rgb(204, 229, 255)';
// // // // // // // //     } else if (row <= 6 && col <= 6) {
// // // // // // // //       color = 'rgb(229, 240, 255)';
// // // // // // // //     } else if (row <= 7 && col <= 7) {
// // // // // // // //       color = 'rgb(240, 247, 255)';
// // // // // // // //     } else if (row <= 8 && col <= 8) {
// // // // // // // //       color = 'rgb(245, 250, 255)';
// // // // // // // //     } else if (row <= 9 && col <= 9) {
// // // // // // // //       color = 'rgb(250, 252, 255)';
// // // // // // // //     } else if (row <= 10 && col <= 10) {
// // // // // // // //       color = 'rgb(252, 253, 255)';
// // // // // // // //     }
    
// // // // // // // //     return { number: perfectSquare, color };
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="visualizer-card">
// // // // // // // //       <div className="visualizer-content">
// // // // // // // //         <div className="controls">
// // // // // // // //           <input
// // // // // // // //             type="number"
// // // // // // // //             value={number}
// // // // // // // //             onChange={handleInputChange}
// // // // // // // //             min="1"
// // // // // // // //             max="100"
// // // // // // // //             step="0.1"
// // // // // // // //             className="number-input"
// // // // // // // //           />
// // // // // // // //           <input
// // // // // // // //             type="range"
// // // // // // // //             min="1"
// // // // // // // //             max="100"
// // // // // // // //             step="0.1"
// // // // // // // //             value={number}
// // // // // // // //             onChange={handleSliderChange}
// // // // // // // //             className="custom-slider"
// // // // // // // //           />
// // // // // // // //           <div className="sqrt-display">√{number} = {squareRoot.toFixed(3)}</div>
// // // // // // // //         </div>

// // // // // // // //         <div className="grid-container">
// // // // // // // //           <div className="axis-label zero-label">0</div>

// // // // // // // //           {numbers.map(num => (
// // // // // // // //             <div
// // // // // // // //               key={`top-${num}`}
// // // // // // // //               className="axis-label top-label"
// // // // // // // //               style={{
// // // // // // // //                 left: `${(num * cellSize) + cellSize/2}px`,
// // // // // // // //               }}
// // // // // // // //             >
// // // // // // // //               {num}
// // // // // // // //             </div>
// // // // // // // //           ))}

// // // // // // // //           {numbers.map(num => (
// // // // // // // //             <div
// // // // // // // //               key={`left-${num}`}
// // // // // // // //               className="axis-label left-label"
// // // // // // // //               style={{
// // // // // // // //                 top: `${num * cellSize}px`,
// // // // // // // //               }}
// // // // // // // //             >
// // // // // // // //               {num}
// // // // // // // //             </div>
// // // // // // // //           ))}

// // // // // // // //           <div className="grid-wrapper">
// // // // // // // //             <div 
// // // // // // // //               className="expanding-frame"
// // // // // // // //               style={{
// // // // // // // //                 width: `${squareRoot * cellSize}px`,
// // // // // // // //                 height: `${squareRoot * cellSize}px`,
// // // // // // // //               }}
// // // // // // // //             />
            
// // // // // // // //             <div className="grid">
// // // // // // // //               {Array.from({ length: 10 }, (_, row) => (
// // // // // // // //                 Array.from({ length: 10 }, (_, col) => {
// // // // // // // //                   const { number: cellNumber, color } = getCellProperties(row, col);
// // // // // // // //                   return (
// // // // // // // //                     <div
// // // // // // // //                       key={`${row}-${col}`}
// // // // // // // //                       className="grid-cell"
// // // // // // // //                       style={{ backgroundColor: color }}
// // // // // // // //                     >
// // // // // // // //                       {cellNumber || ''}
// // // // // // // //                     </div>
// // // // // // // //                   );
// // // // // // // //                 })
// // // // // // // //               )).flat()}
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default SquareRootVisualizer;

// // // // // // // import React, { useState } from 'react';
// // // // // // // import './SquareRootVisualizer.css';

// // // // // // // const SquareRootVisualizer = () => {
// // // // // // //   const [number, setNumber] = useState(25);
// // // // // // //   const squareRoot = Math.sqrt(number);
// // // // // // //   const cellSize = 40;
// // // // // // //   const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  
// // // // // // //   const handleInputChange = (e) => {
// // // // // // //     const value = parseFloat(e.target.value);
// // // // // // //     if (!isNaN(value) && value >= 1 && value <= 100) {
// // // // // // //       setNumber(value);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleSliderChange = (e) => {
// // // // // // //     const value = parseFloat(e.target.value);
// // // // // // //     setNumber(value);
// // // // // // //   };
  
// // // // // // //   const getCellProperties = (row, col) => {
// // // // // // //     row = row + 1;
// // // // // // //     col = col + 1;
    
// // // // // // //     const isPerfectSquareCell = row === col;
// // // // // // //     const perfectSquare = isPerfectSquareCell ? row * row : null;
    
// // // // // // //     let color = 'white';
// // // // // // //     if (row <= 1 && col <= 1) {
// // // // // // //       color = 'rgb(0, 0, 255)';
// // // // // // //     } else if (row <= 2 && col <= 2) {
// // // // // // //       color = 'rgb(51, 102, 255)';
// // // // // // //     } else if (row <= 3 && col <= 3) {
// // // // // // //       color = 'rgb(102, 153, 255)';
// // // // // // //     } else if (row <= 4 && col <= 4) {
// // // // // // //       color = 'rgb(153, 204, 255)';
// // // // // // //     } else if (row <= 5 && col <= 5) {
// // // // // // //       color = 'rgb(204, 229, 255)';
// // // // // // //     } else if (row <= 6 && col <= 6) {
// // // // // // //       color = 'rgb(229, 240, 255)';
// // // // // // //     } else if (row <= 7 && col <= 7) {
// // // // // // //       color = 'rgb(240, 247, 255)';
// // // // // // //     } else if (row <= 8 && col <= 8) {
// // // // // // //       color = 'rgb(245, 250, 255)';
// // // // // // //     } else if (row <= 9 && col <= 9) {
// // // // // // //       color = 'rgb(250, 252, 255)';
// // // // // // //     } else if (row <= 10 && col <= 10) {
// // // // // // //       color = 'rgb(252, 253, 255)';
// // // // // // //     }
    
// // // // // // //     return { number: perfectSquare, color };
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="visualizer-card">
// // // // // // //       <div className="visualizer-content">
// // // // // // //         <div className="controls">
// // // // // // //           <input
// // // // // // //             type="number"
// // // // // // //             value={number}
// // // // // // //             onChange={handleInputChange}
// // // // // // //             min="1"
// // // // // // //             max="100"
// // // // // // //             step="0.1"
// // // // // // //             className="number-input"
// // // // // // //           />
// // // // // // //           <input
// // // // // // //             type="range"
// // // // // // //             min="1"
// // // // // // //             max="100"
// // // // // // //             step="0.1"
// // // // // // //             value={number}
// // // // // // //             onChange={handleSliderChange}
// // // // // // //             className="custom-slider"
// // // // // // //           />
// // // // // // //           <div className="sqrt-display">√{number} = {squareRoot.toFixed(3)}</div>
// // // // // // //         </div>

// // // // // // //         <div className="grid-container">
// // // // // // //           <div className="axis-label zero-label">0</div>

// // // // // // //           {numbers.map(num => (
// // // // // // //             <div
// // // // // // //               key={`top-${num}`}
// // // // // // //               className="axis-label top-label"
// // // // // // //               style={{
// // // // // // //                 left: `${(num * cellSize) + cellSize/2}px`,
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               {num}
// // // // // // //             </div>
// // // // // // //           ))}

// // // // // // //           {numbers.map(num => (
// // // // // // //             <div
// // // // // // //               key={`left-${num}`}
// // // // // // //               className="axis-label left-label"
// // // // // // //               style={{
// // // // // // //                 top: `${num * cellSize + cellSize/2}px`,
// // // // // // //                 left: '-24px',
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               {num}
// // // // // // //             </div>
// // // // // // //           ))}

// // // // // // //           <div className="grid-wrapper">
// // // // // // //             <div 
// // // // // // //               className="expanding-frame"
// // // // // // //               style={{
// // // // // // //                 width: `${squareRoot * cellSize}px`,
// // // // // // //                 height: `${squareRoot * cellSize}px`,
// // // // // // //               }}
// // // // // // //             />
            
// // // // // // //             <div className="grid">
// // // // // // //               {Array.from({ length: 10 }, (_, row) => (
// // // // // // //                 Array.from({ length: 10 }, (_, col) => {
// // // // // // //                   const { number: cellNumber, color } = getCellProperties(row, col);
// // // // // // //                   return (
// // // // // // //                     <div
// // // // // // //                       key={`${row}-${col}`}
// // // // // // //                       className="grid-cell"
// // // // // // //                       style={{ backgroundColor: color }}
// // // // // // //                     >
// // // // // // //                       {cellNumber || ''}
// // // // // // //                     </div>
// // // // // // //                   );
// // // // // // //                 })
// // // // // // //               )).flat()}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default SquareRootVisualizer;

// // // // // // import React, { useState } from 'react';
// // // // // // import './SquareRootVisualizer.css';

// // // // // // const SquareRootVisualizer = () => {
// // // // // //   const [number, setNumber] = useState(25);
// // // // // //   const [inputValue, setInputValue] = useState("25"); // Separate state for input
// // // // // //   const squareRoot = Math.sqrt(number);
// // // // // //   const cellSize = 40;
// // // // // //   const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  
// // // // // //   const handleInputChange = (e) => {
// // // // // //     const value = e.target.value;
// // // // // //     setInputValue(value); // Update the input value directly

// // // // // //     // Convert to number and validate
// // // // // //     const numValue = parseFloat(value);
// // // // // //     if (!isNaN(numValue) && numValue >= 1 && numValue <= 100) {
// // // // // //       setNumber(numValue);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleInputBlur = () => {
// // // // // //     // On blur, reformat the input to match the actual number
// // // // // //     setInputValue(number.toString());
// // // // // //   };

// // // // // //   const handleSliderChange = (e) => {
// // // // // //     const value = parseFloat(e.target.value);
// // // // // //     setNumber(value);
// // // // // //     setInputValue(value.toString());
// // // // // //   };
  
// // // // // //   // Rest of your code remains exactly the same
// // // // // //   const getCellProperties = (row, col) => {
// // // // // //     row = row + 1;
// // // // // //     col = col + 1;
    
// // // // // //     const isPerfectSquareCell = row === col;
// // // // // //     const perfectSquare = isPerfectSquareCell ? row * row : null;
    
// // // // // //     let color = 'white';
// // // // // //     if (row <= 1 && col <= 1) {
// // // // // //       color = 'rgb(0, 0, 255)';
// // // // // //     } else if (row <= 2 && col <= 2) {
// // // // // //       color = 'rgb(51, 102, 255)';
// // // // // //     } else if (row <= 3 && col <= 3) {
// // // // // //       color = 'rgb(102, 153, 255)';
// // // // // //     } else if (row <= 4 && col <= 4) {
// // // // // //       color = 'rgb(153, 204, 255)';
// // // // // //     } else if (row <= 5 && col <= 5) {
// // // // // //       color = 'rgb(204, 229, 255)';
// // // // // //     } else if (row <= 6 && col <= 6) {
// // // // // //       color = 'rgb(229, 240, 255)';
// // // // // //     } else if (row <= 7 && col <= 7) {
// // // // // //       color = 'rgb(240, 247, 255)';
// // // // // //     } else if (row <= 8 && col <= 8) {
// // // // // //       color = 'rgb(245, 250, 255)';
// // // // // //     } else if (row <= 9 && col <= 9) {
// // // // // //       color = 'rgb(250, 252, 255)';
// // // // // //     } else if (row <= 10 && col <= 10) {
// // // // // //       color = 'rgb(252, 253, 255)';
// // // // // //     }
    
// // // // // //     return { number: perfectSquare, color };
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="visualizer-card">
// // // // // //       <div className="visualizer-content">
// // // // // //         <div className="controls">
// // // // // //           <input
// // // // // //             type="text"
// // // // // //             value={inputValue}
// // // // // //             onChange={handleInputChange}
// // // // // //             onBlur={handleInputBlur}
// // // // // //             className="number-input"
// // // // // //             placeholder="1-100"
// // // // // //           />
// // // // // //           <input
// // // // // //             type="range"
// // // // // //             min="1"
// // // // // //             max="100"
// // // // // //             step="0.1"
// // // // // //             value={number}
// // // // // //             onChange={handleSliderChange}
// // // // // //             className="custom-slider"
// // // // // //           />
// // // // // //           <div className="sqrt-display">√{number} = {squareRoot.toFixed(3)}</div>
// // // // // //         </div>

// // // // // //         <div className="grid-container">
// // // // // //           <div className="axis-label zero-label">0</div>

// // // // // //           {numbers.map(num => (
// // // // // //             <div
// // // // // //               key={`top-${num}`}
// // // // // //               className="axis-label top-label"
// // // // // //               style={{
// // // // // //                 left: `${(num * cellSize) + cellSize/2}px`,
// // // // // //               }}
// // // // // //             >
// // // // // //               {num}
// // // // // //             </div>
// // // // // //           ))}

// // // // // //           {numbers.map(num => (
// // // // // //             <div
// // // // // //               key={`left-${num}`}
// // // // // //               className="axis-label left-label"
// // // // // //               style={{
// // // // // //                 top: `${num * cellSize + cellSize/2}px`,
// // // // // //                 left: '-24px',
// // // // // //               }}
// // // // // //             >
// // // // // //               {num}
// // // // // //             </div>
// // // // // //           ))}

// // // // // //           <div className="grid-wrapper">
// // // // // //             <div 
// // // // // //               className="expanding-frame"
// // // // // //               style={{
// // // // // //                 width: `${squareRoot * cellSize}px`,
// // // // // //                 height: `${squareRoot * cellSize}px`,
// // // // // //               }}
// // // // // //             />
            
// // // // // //             <div className="grid">
// // // // // //               {Array.from({ length: 10 }, (_, row) => (
// // // // // //                 Array.from({ length: 10 }, (_, col) => {
// // // // // //                   const { number: cellNumber, color } = getCellProperties(row, col);
// // // // // //                   return (
// // // // // //                     <div
// // // // // //                       key={`${row}-${col}`}
// // // // // //                       className="grid-cell"
// // // // // //                       style={{ backgroundColor: color }}
// // // // // //                     >
// // // // // //                       {cellNumber || ''}
// // // // // //                     </div>
// // // // // //                   );
// // // // // //                 })
// // // // // //               )).flat()}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default SquareRootVisualizer;

// // // // // import React, { useState } from 'react';
// // // // // import './SquareRootVisualizer.css';

// // // // // const SquareRootVisualizer = () => {
// // // // //   const [number, setNumber] = useState(25);
// // // // //   const [inputValue, setInputValue] = useState("25");
// // // // //   const [error, setError] = useState("");
// // // // //   const squareRoot = Math.sqrt(number);
// // // // //   const cellSize = 40;
// // // // //   const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  
// // // // //   const handleInputChange = (e) => {
// // // // //     const value = e.target.value;
// // // // //     setInputValue(value);
// // // // //     const numValue = parseFloat(value);

// // // // //     if (value.trim() === "") {
// // // // //       setError("Please enter a number");
// // // // //       return;
// // // // //     }

// // // // //     if (isNaN(numValue)) {
// // // // //       setError("Please enter a valid number");
// // // // //       return;
// // // // //     }

// // // // //     if (numValue < 0) {
// // // // //       setError("Number cannot be negative");
// // // // //       return;
// // // // //     }

// // // // //     if (numValue > 100) {
// // // // //       setError("Number cannot be greater than 100");
// // // // //       return;
// // // // //     }

// // // // //     setError("");
// // // // //     setNumber(numValue);
// // // // //   };

// // // // //   const handleSliderChange = (e) => {
// // // // //     const value = parseFloat(e.target.value);
// // // // //     setNumber(value);
// // // // //     setInputValue(value.toString());
// // // // //     setError("");
// // // // //   };
  
// // // // //   const getCellProperties = (row, col) => {
// // // // //     row = row + 1;
// // // // //     col = col + 1;
    
// // // // //     const isPerfectSquareCell = row === col;
// // // // //     const perfectSquare = isPerfectSquareCell ? row * row : null;
    
// // // // //     let color = 'white';
// // // // //     if (row <= 1 && col <= 1) {
// // // // //       color = 'rgb(0, 0, 255)';
// // // // //     } else if (row <= 2 && col <= 2) {
// // // // //       color = 'rgb(51, 102, 255)';
// // // // //     } else if (row <= 3 && col <= 3) {
// // // // //       color = 'rgb(102, 153, 255)';
// // // // //     } else if (row <= 4 && col <= 4) {
// // // // //       color = 'rgb(153, 204, 255)';
// // // // //     } else if (row <= 5 && col <= 5) {
// // // // //       color = 'rgb(204, 229, 255)';
// // // // //     } else if (row <= 6 && col <= 6) {
// // // // //       color = 'rgb(229, 240, 255)';
// // // // //     } else if (row <= 7 && col <= 7) {
// // // // //       color = 'rgb(240, 247, 255)';
// // // // //     } else if (row <= 8 && col <= 8) {
// // // // //       color = 'rgb(245, 250, 255)';
// // // // //     } else if (row <= 9 && col <= 9) {
// // // // //       color = 'rgb(250, 252, 255)';
// // // // //     } else if (row <= 10 && col <= 10) {
// // // // //       color = 'rgb(252, 253, 255)';
// // // // //     }
    
// // // // //     return { number: perfectSquare, color };
// // // // //   };

// // // // //   return (
// // // // //     <div className="visualizer-card">
// // // // //       <div className="visualizer-content">
// // // // //         <div className="controls">
// // // // //           <div className="input-group">
// // // // //             <input
// // // // //               type="text"
// // // // //               value={inputValue}
// // // // //               onChange={handleInputChange}
// // // // //               className={`number-input ${error ? 'input-error' : ''}`}
// // // // //               placeholder="Enter number (0-100)"
// // // // //             />
// // // // //             {error && <div className="error-message">{error}</div>}
// // // // //           </div>
// // // // //           <input
// // // // //             type="range"
// // // // //             min="0"
// // // // //             max="100"
// // // // //             step="0.1"
// // // // //             value={number}
// // // // //             onChange={handleSliderChange}
// // // // //             className="custom-slider"
// // // // //           />
// // // // //           <div className="sqrt-display">√{number} = {squareRoot.toFixed(3)}</div>
// // // // //         </div>

// // // // //         <div className="grid-container">
// // // // //           <div className="axis-label zero-label">0</div>

// // // // //           {numbers.map(num => (
// // // // //             <div
// // // // //               key={`top-${num}`}
// // // // //               className="axis-label top-label"
// // // // //               style={{
// // // // //                 left: `${(num * cellSize) + cellSize/2}px`,
// // // // //               }}
// // // // //             >
// // // // //               {num}
// // // // //             </div>
// // // // //           ))}

// // // // //           {numbers.map(num => (
// // // // //             <div
// // // // //               key={`left-${num}`}
// // // // //               className="axis-label left-label"
// // // // //               style={{
// // // // //                 top: `${num * cellSize + cellSize/2}px`,
// // // // //                 left: '-24px',
// // // // //               }}
// // // // //             >
// // // // //               {num}
// // // // //             </div>
// // // // //           ))}

// // // // //           <div className="grid-wrapper">
// // // // //             <div 
// // // // //               className="expanding-frame"
// // // // //               style={{
// // // // //                 width: `${squareRoot * cellSize}px`,
// // // // //                 height: `${squareRoot * cellSize}px`,
// // // // //               }}
// // // // //             />
            
// // // // //             <div className="grid">
// // // // //               {Array.from({ length: 10 }, (_, row) => (
// // // // //                 Array.from({ length: 10 }, (_, col) => {
// // // // //                   const { number: cellNumber, color } = getCellProperties(row, col);
// // // // //                   return (
// // // // //                     <div
// // // // //                       key={`${row}-${col}`}
// // // // //                       className="grid-cell"
// // // // //                       style={{ backgroundColor: color }}
// // // // //                     >
// // // // //                       {cellNumber || ''}
// // // // //                     </div>
// // // // //                   );
// // // // //                 })
// // // // //               )).flat()}
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default SquareRootVisualizer;


// // // // import React, { useState } from 'react';
// // // // import './SquareRootVisualizer.css';

// // // // const SquareRootVisualizer = () => {
// // // //   const [number, setNumber] = useState(25);
// // // //   const [inputValue, setInputValue] = useState("25");
// // // //   const [error, setError] = useState("");
// // // //   const squareRoot = Math.sqrt(number);
// // // //   const cellSize = 40;
// // // //   const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  
// // // //   const handleInputChange = (e) => {
// // // //     const value = e.target.value;
// // // //     setInputValue(value);
// // // //     const numValue = parseFloat(value);

// // // //     if (value.trim() === "") {
// // // //       setError("Please enter a number");
// // // //       return;
// // // //     }

// // // //     if (isNaN(numValue)) {
// // // //       setError("Please enter a valid number");
// // // //       return;
// // // //     }

// // // //     if (numValue < 0) {
// // // //       setError("Number cannot be negative");
// // // //       return;
// // // //     }

// // // //     if (numValue > 100) {
// // // //       setError("Number cannot be greater than 100");
// // // //       return;
// // // //     }

// // // //     setError("");
// // // //     setNumber(numValue);
// // // //   };

// // // //   const handleSliderChange = (e) => {
// // // //     const value = parseFloat(e.target.value);
// // // //     setNumber(value);
// // // //     setInputValue(value.toString());
// // // //     setError("");
// // // //   };
  
// // // //   const getCellProperties = (row, col) => {
// // // //     row = row + 1;
// // // //     col = col + 1;
    
// // // //     const isPerfectSquareCell = row === col;
// // // //     const perfectSquare = isPerfectSquareCell ? row * row : null;
    
// // // //     let color = 'white';
// // // //     if (row <= 1 && col <= 1) {
// // // //       color = 'rgb(0, 0, 255)';
// // // //     } else if (row <= 2 && col <= 2) {
// // // //       color = 'rgb(51, 102, 255)';
// // // //     } else if (row <= 3 && col <= 3) {
// // // //       color = 'rgb(102, 153, 255)';
// // // //     } else if (row <= 4 && col <= 4) {
// // // //       color = 'rgb(153, 204, 255)';
// // // //     } else if (row <= 5 && col <= 5) {
// // // //       color = 'rgb(204, 229, 255)';
// // // //     } else if (row <= 6 && col <= 6) {
// // // //       color = 'rgb(229, 240, 255)';
// // // //     } else if (row <= 7 && col <= 7) {
// // // //       color = 'rgb(240, 247, 255)';
// // // //     } else if (row <= 8 && col <= 8) {
// // // //       color = 'rgb(245, 250, 255)';
// // // //     } else if (row <= 9 && col <= 9) {
// // // //       color = 'rgb(250, 252, 255)';
// // // //     } else if (row <= 10 && col <= 10) {
// // // //       color = 'rgb(252, 253, 255)';
// // // //     }
    
// // // //     return { number: perfectSquare, color };
// // // //   };

// // // //   return (
// // // //     <div className="visualizer-card">
// // // //       <div className="visualizer-content">
// // // //         <div className="controls">
// // // //           <div className="input-group">
// // // //             <input
// // // //               type="text"
// // // //               value={inputValue}
// // // //               onChange={handleInputChange}
// // // //               className={`number-input ${error ? 'input-error' : ''}`}
// // // //               placeholder="Enter number (0-100)"
// // // //             />
// // // //             {error && <div className="error-message">{error}</div>}
// // // //           </div>
// // // //           <input
// // // //             type="range"
// // // //             min="0"
// // // //             max="100"
// // // //             step="0.1"
// // // //             value={number}
// // // //             onChange={handleSliderChange}
// // // //             className="custom-slider"
// // // //           />
// // // //           <div className="sqrt-display">√{number} = {squareRoot.toFixed(3)}</div>
// // // //         </div>

// // // //         <div className="grid-container">
// // // //           <div className="axis-label zero-label">0</div>

// // // //           {numbers.map(num => (
// // // //             <div
// // // //               key={`top-${num}`}
// // // //               className="axis-label top-label"
// // // //               style={{
// // // //                 left: `${(num * cellSize) + cellSize/2}px`,
// // // //               }}
// // // //             >
// // // //               {num}
// // // //             </div>
// // // //           ))}

// // // //           {numbers.map(num => (
// // // //             <div
// // // //               key={`left-${num}`}
// // // //               className="axis-label left-label"
// // // //               style={{
// // // //                 top: `${num * cellSize + cellSize/2}px`,
// // // //                 left: '-24px',
// // // //               }}
// // // //             >
// // // //               {num}
// // // //             </div>
// // // //           ))}

// // // //           <div className="grid-wrapper">
// // // //             <div className="expanding-frame-container">
// // // //               <div 
// // // //                 className="expanding-frame"
// // // //                 style={{
// // // //                   width: `${squareRoot * cellSize}px`,
// // // //                   height: `${squareRoot * cellSize}px`,
// // // //                 }}
// // // //               >
// // // //                 <div className="measure-tooltip left-tooltip">
// // // //                   {squareRoot.toFixed(2)}
// // // //                 </div>
// // // //                 <div className="measure-tooltip top-tooltip">
// // // //                   {squareRoot.toFixed(2)}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
            
// // // //             <div className="grid">
// // // //               {Array.from({ length: 10 }, (_, row) => (
// // // //                 Array.from({ length: 10 }, (_, col) => {
// // // //                   const { number: cellNumber, color } = getCellProperties(row, col);
// // // //                   return (
// // // //                     <div
// // // //                       key={`${row}-${col}`}
// // // //                       className="grid-cell"
// // // //                       style={{ backgroundColor: color }}
// // // //                     >
// // // //                       {cellNumber || ''}
// // // //                     </div>
// // // //                   );
// // // //                 })
// // // //               )).flat()}
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SquareRootVisualizer;


// // // import React, { useState } from 'react';
// // // import './SquareRootVisualizer.css';

// // // const SquareRootVisualizer = () => {
// // //   const [number, setNumber] = useState(25);
// // //   const [inputValue, setInputValue] = useState("25");
// // //   const [error, setError] = useState("");
// // //   const squareRoot = Math.sqrt(number);
// // //   const cellSize = 40;
// // //   const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  
// // //   const handleInputChange = (e) => {
// // //     const value = e.target.value;
// // //     setInputValue(value);
// // //     const numValue = parseFloat(value);

// // //     if (value.trim() === "") {
// // //       setError("Please enter a number");
// // //       return;
// // //     }

// // //     if (isNaN(numValue)) {
// // //       setError("Please enter a valid number");
// // //       return;
// // //     }

// // //     if (numValue < 0) {
// // //       setError("Number cannot be negative");
// // //       return;
// // //     }

// // //     if (numValue > 100) {
// // //       setError("Number cannot be greater than 100");
// // //       return;
// // //     }

// // //     setError("");
// // //     setNumber(numValue);
// // //   };

// // //   const handleSliderChange = (e) => {
// // //     const value = parseFloat(e.target.value);
// // //     setNumber(value);
// // //     setInputValue(value.toString());
// // //     setError("");
// // //   };
  
// // //   const getCellProperties = (row, col) => {
// // //     row = row + 1;
// // //     col = col + 1;
    
// // //     const isPerfectSquareCell = row === col;
// // //     const perfectSquare = isPerfectSquareCell ? row * row : null;
    
// // //     let color = 'white';
// // //     if (row <= 1 && col <= 1) {
// // //       color = 'rgb(0, 0, 255)';
// // //     } else if (row <= 2 && col <= 2) {
// // //       color = 'rgb(51, 102, 255)';
// // //     } else if (row <= 3 && col <= 3) {
// // //       color = 'rgb(102, 153, 255)';
// // //     } else if (row <= 4 && col <= 4) {
// // //       color = 'rgb(153, 204, 255)';
// // //     } else if (row <= 5 && col <= 5) {
// // //       color = 'rgb(204, 229, 255)';
// // //     } else if (row <= 6 && col <= 6) {
// // //       color = 'rgb(229, 240, 255)';
// // //     } else if (row <= 7 && col <= 7) {
// // //       color = 'rgb(240, 247, 255)';
// // //     } else if (row <= 8 && col <= 8) {
// // //       color = 'rgb(245, 250, 255)';
// // //     } else if (row <= 9 && col <= 9) {
// // //       color = 'rgb(250, 252, 255)';
// // //     } else if (row <= 10 && col <= 10) {
// // //       color = 'rgb(252, 253, 255)';
// // //     }
    
// // //     return { number: perfectSquare, color };
// // //   };

// // //   return (
// // //     <div className="visualizer-card">
// // //       <div className="visualizer-content">
// // //         <div className="controls">
// // //           <div className="input-group">
// // //             <input
// // //               type="text"
// // //               value={inputValue}
// // //               onChange={handleInputChange}
// // //               className={`number-input ${error ? 'input-error' : ''}`}
// // //               placeholder="Enter number (0-100)"
// // //             />
// // //             {error && <div className="error-message">{error}</div>}
// // //           </div>
// // //           <input
// // //             type="range"
// // //             min="0"
// // //             max="100"
// // //             step="0.1"
// // //             value={number}
// // //             onChange={handleSliderChange}
// // //             className="custom-slider"
// // //           />
// // //           <div className="sqrt-display">√{number} = {squareRoot.toFixed(3)}</div>
// // //         </div>

// // //         <div className="grid-container">
// // //           <div className="axis-label zero-label">0</div>

// // //           {numbers.map(num => (
// // //             <div
// // //               key={`top-${num}`}
// // //               className="axis-label top-label"
// // //               style={{
// // //                 left: `${(num * cellSize) + cellSize/2}px`,
// // //               }}
// // //             >
// // //               {num}
// // //             </div>
// // //           ))}

// // //           {numbers.map(num => (
// // //             <div
// // //               key={`left-${num}`}
// // //               className="axis-label left-label"
// // //               style={{
// // //                 top: `${num * cellSize + cellSize/2}px`,
// // //                 left: '-24px',
// // //               }}
// // //             >
// // //               {num}
// // //             </div>
// // //           ))}

// // //           <div className="grid-wrapper">
// // //             <div 
// // //               className="expanding-frame"
// // //               style={{
// // //                 width: `${squareRoot * cellSize}px`,
// // //                 height: `${squareRoot * cellSize}px`,
// // //               }}
// // //             >
// // //               <div className="measure-tooltip left-tooltip">
// // //                 {squareRoot.toFixed(2)}
// // //               </div>
// // //               <div className="measure-tooltip top-tooltip">
// // //                 {squareRoot.toFixed(2)}
// // //               </div>
// // //             </div>
            
// // //             <div className="grid">
// // //               {Array.from({ length: 10 }, (_, row) => (
// // //                 Array.from({ length: 10 }, (_, col) => {
// // //                   const { number: cellNumber, color } = getCellProperties(row, col);
// // //                   return (
// // //                     <div
// // //                       key={`${row}-${col}`}
// // //                       className="grid-cell"
// // //                       style={{ backgroundColor: color }}
// // //                     >
// // //                       {cellNumber || ''}
// // //                     </div>
// // //                   );
// // //                 })
// // //               )).flat()}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SquareRootVisualizer;


// // import React, { useState } from 'react';
// // import './SquareRootVisualizer.css';

// // const SquareRootVisualizer = () => {
// //   const [number, setNumber] = useState(25);
// //   const [inputValue, setInputValue] = useState("25");
// //   const [error, setError] = useState("");
// //   const squareRoot = Math.sqrt(number);
// //   const cellSize = 40;
// //   const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  
// //   const handleInputChange = (e) => {
// //     const value = e.target.value;
// //     setInputValue(value);
// //     const numValue = parseFloat(value);

// //     if (value.trim() === "") {
// //       setError("Please enter a number");
// //       return;
// //     }

// //     if (isNaN(numValue)) {
// //       setError("Please enter a valid number");
// //       return;
// //     }

// //     if (numValue < 0) {
// //       setError("Number cannot be negative");
// //       return;
// //     }

// //     if (numValue > 100) {
// //       setError("Number cannot be greater than 100");
// //       return;
// //     }

// //     setError("");
// //     setNumber(numValue);
// //   };

// //   const handleSliderChange = (e) => {
// //     const value = parseFloat(e.target.value);
// //     setNumber(value);
// //     setInputValue(value.toString());
// //     setError("");
// //   };
  
// //   const getCellProperties = (row, col) => {
// //     row = row + 1;
// //     col = col + 1;
    
// //     const isPerfectSquareCell = row === col;
// //     const perfectSquare = isPerfectSquareCell ? row * row : null;
    
// //     let color = 'white';
// //     if (row <= 1 && col <= 1) {
// //       color = 'rgb(0, 0, 255)';
// //     } else if (row <= 2 && col <= 2) {
// //       color = 'rgb(51, 102, 255)';
// //     } else if (row <= 3 && col <= 3) {
// //       color = 'rgb(102, 153, 255)';
// //     } else if (row <= 4 && col <= 4) {
// //       color = 'rgb(153, 204, 255)';
// //     } else if (row <= 5 && col <= 5) {
// //       color = 'rgb(204, 229, 255)';
// //     } else if (row <= 6 && col <= 6) {
// //       color = 'rgb(229, 240, 255)';
// //     } else if (row <= 7 && col <= 7) {
// //       color = 'rgb(240, 247, 255)';
// //     } else if (row <= 8 && col <= 8) {
// //       color = 'rgb(245, 250, 255)';
// //     } else if (row <= 9 && col <= 9) {
// //       color = 'rgb(250, 252, 255)';
// //     } else if (row <= 10 && col <= 10) {
// //       color = 'rgb(252, 253, 255)';
// //     }
    
// //     return { number: perfectSquare, color };
// //   };

// //   return (
// //     <div className="visualizer-card">
// //       <div className="visualizer-content">
// //         <div className="controls">
// //           <div className="input-group">
// //             <input
// //               type="text"
// //               value={inputValue}
// //               onChange={handleInputChange}
// //               className={`number-input ${error ? 'input-error' : ''}`}
// //               placeholder="Enter number (0-100)"
// //             />
// //             {error && <div className="error-message">{error}</div>}
// //           </div>
// //           <input
// //             type="range"
// //             min="0"
// //             max="100"
// //             step="0.1"
// //             value={number}
// //             onChange={handleSliderChange}
// //             className="custom-slider"
// //           />
// //           <div className="sqrt-display">√{number} = {squareRoot.toFixed(3)}</div>
// //         </div>

// //         <div className="grid-container">
// //           <div className="axis-label zero-label">0</div>

// //           {numbers.map(num => (
// //             <div
// //               key={`top-${num}`}
// //               className="axis-label top-label"
// //               style={{
// //                 left: `${(num * cellSize) + cellSize/2}px`,
// //               }}
// //             >
// //               {num}
// //             </div>
// //           ))}

// //           {numbers.map(num => (
// //             <div
// //               key={`left-${num}`}
// //               className="axis-label left-label"
// //               style={{
// //                 top: `${num * cellSize + cellSize/2}px`,
// //                 left: '-24px',
// //               }}
// //             >
// //               {num}
// //             </div>
// //           ))}

// //           <div className="grid-wrapper">
// //             <div 
// //               className="expanding-frame"
// //               style={{
// //                 width: `${squareRoot * cellSize + 1}px`,
// //                 height: `${squareRoot * cellSize + 1}px`,
// //               }}
// //             >
// //               <div className="measure-tooltip left-tooltip">
// //                 {squareRoot.toFixed(2)}
// //               </div>
// //               <div className="measure-tooltip top-tooltip">
// //                 {squareRoot.toFixed(2)}
// //               </div>
// //             </div>
            
// //             <div className="grid">
// //               {Array.from({ length: 10 }, (_, row) => (
// //                 Array.from({ length: 10 }, (_, col) => {
// //                   const { number: cellNumber, color } = getCellProperties(row, col);
// //                   return (
// //                     <div
// //                       key={`${row}-${col}`}
// //                       className="grid-cell"
// //                       style={{ backgroundColor: color }}
// //                     >
// //                       {cellNumber || ''}
// //                     </div>
// //                   );
// //                 })
// //               )).flat()}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SquareRootVisualizer;

// import React, { useState } from 'react';
// import './SquareRootVisualizer.css';

// const SquareRootVisualizer = () => {
//   const [number, setNumber] = useState(1);
//   const [inputValue, setInputValue] = useState("1");
//   const [error, setError] = useState("");
//   const squareRoot = Math.sqrt(number);
//   const cellSize = 40;
//   const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  
//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setInputValue(value);
//     const numValue = parseFloat(value);

//     if (value.trim() === "") {
//       setError("Please enter a number");
//       return;
//     }

//     if (isNaN(numValue)) {
//       setError("Please enter a valid number");
//       return;
//     }

//     if (numValue < 0) {
//       setError("Number cannot be negative");
//       return;
//     }

//     if (numValue > 100) {
//       setError("Number cannot be greater than 100");
//       return;
//     }

//     setError("");
//     setNumber(numValue);
//   };

//   const handleSliderChange = (e) => {
//     const value = parseFloat(e.target.value);
//     setNumber(value);
//     setInputValue(value.toString());
//     setError("");
//   };
  
//   const getCellProperties = (row, col) => {
//     row = row + 1;
//     col = col + 1;
    
//     const isPerfectSquareCell = row === col;
//     const perfectSquare = isPerfectSquareCell ? row * row : null;
    
//     let color = 'white';
//     // if (row <= 1 && col <= 1) {
//     //   color = 'rgb(0, 0, 255)';
//     // } else if (row <= 2 && col <= 2) {
//     //   color = 'rgb(51, 102, 255)';
//     // } else if (row <= 3 && col <= 3) {
//     //   color = 'rgb(102, 153, 255)';
//     // } else if (row <= 4 && col <= 4) {
//     //   color = 'rgb(153, 204, 255)';
//     // } else if (row <= 5 && col <= 5) {
//     //   color = 'rgb(204, 229, 255)';
//     // } else if (row <= 6 && col <= 6) {
//     //   color = 'rgb(229, 240, 255)';
//     // } else if (row <= 7 && col <= 7) {
//     //   color = 'rgb(240, 247, 255)';
//     // } else if (row <= 8 && col <= 8) {
//     //   color = 'rgb(245, 250, 255)';
//     // } else if (row <= 9 && col <= 9) {
//     //   color = 'rgb(250, 252, 255)';
//     // } else if (row <= 10 && col <= 10) {
//     //   color = 'rgb(252, 253, 255)';
//     // }
//     // if (row <= 1 && col <= 1) {
//     //     color = 'rgb(0, 0, 255)';      // Pure blue
//     //   } else if (row <= 2 && col <= 2) {
//     //     color = 'rgb(20, 20, 255)';    // Slightly lighter
//     //   } else if (row <= 3 && col <= 3) {
//     //     color = 'rgb(40, 40, 255)';
//     //   } else if (row <= 4 && col <= 4) {
//     //     color = 'rgb(60, 60, 255)';
//     //   } else if (row <= 5 && col <= 5) {
//     //     color = 'rgb(80, 80, 255)';
//     //   } else if (row <= 6 && col <= 6) {
//     //     color = 'rgb(100, 100, 255)';
//     //   } else if (row <= 7 && col <= 7) {
//     //     color = 'rgb(120, 120, 255)';
//     //   } else if (row <= 8 && col <= 8) {
//     //     color = 'rgb(140, 140, 255)';
//     //   } else if (row <= 9 && col <= 9) {
//     //     color = 'rgb(160, 160, 255)';
//     //   } else if (row <= 10 && col <= 10) {
//     //     color = 'rgb(180, 180, 255)';  // Still noticeably blue
//     //   }

//     if (row <= 1 && col <= 1) {
//         color = 'rgb(0, 0, 255)';      // Pure blue
//        } else if (row <= 2 && col <= 2) {
//         color = 'rgb(40, 40, 255)';    
//        } else if (row <= 3 && col <= 3) {
//         color = 'rgb(80, 80, 255)';
//        } else if (row <= 4 && col <= 4) {
//         color = 'rgb(120, 120, 255)';
//        } else if (row <= 5 && col <= 5) {
//         color = 'rgb(160, 160, 255)';
//        } else if (row <= 6 && col <= 6) {
//         color = 'rgb(180, 180, 255)';
//        } else if (row <= 7 && col <= 7) {
//         color = 'rgb(200, 200, 255)';
//        } else if (row <= 8 && col <= 8) {
//         color = 'rgb(220, 220, 255)';
//        } else if (row <= 9 && col <= 9) {
//         color = 'rgb(235, 235, 255)';
//        } else if (row <= 10 && col <= 10) {
//         color = 'rgb(245, 245, 255)';  
//        }

//     return { number: perfectSquare, color };
//   };

//   return (
//     <div className="visualizer-card">
//       <div className="visualizer-content">
//         {/* <div className="controls">
//           <div className="input-group">
//             <input
//               type="text"
//               value={inputValue}
//               onChange={handleInputChange}
//               className={`number-input ${error ? 'input-error' : ''}`}
//               placeholder="Enter number (0-100)"
//             />
//             {error && <div className="error-message">{error}</div>}
//           </div>
//           <input
//             type="range"
//             min="0"
//             max="100"
//             step="0.1"
//             value={number}
//             onChange={handleSliderChange}
//             className="custom-slider"
//           />
//           <div className="sqrt-display">√{number} = {squareRoot.toFixed(3)}</div>
//         </div> */}




// <div className="controls">
//   <div className="input-group">
//     <div className="input-wrapper">
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         className={`number-input ${error ? 'input-error' : ''}`}
//         placeholder="Enter number (0-100)"
//       />
//       {inputValue && (
//         <button 
//           className="reset-button"
//           onClick={() => {
//             setInputValue("");
//             setNumber(0);
//             setError("");
//           }}
//         >
//           ×
//         </button>
//       )}
//     </div>
//     {error && <div className="error-message">{error}</div>}
//   </div>
//   <input
//     type="range"
//     min="0"
//     max="100"
//     step="0.1"
//     value={number}
//     onChange={handleSliderChange}
//     className="custom-slider"
//   />
//   <div className="sqrt-display">√{number} = {squareRoot.toFixed(3)}</div>
// </div>

//         <div className="grid-container">
//           <div className="axis-label zero-label">0</div>

//           {numbers.map(num => (
//             <div
//               key={`top-${num}`}
//               className="axis-label top-label"
//               style={{
//                 left: `${(num * cellSize) + cellSize/2}px`,
//               }}
//             >
//               {num}
//             </div>
//           ))}

//           {numbers.map(num => (
//             <div
//               key={`left-${num}`}
//               className="axis-label left-label"
//               style={{
//                 top: `${num * cellSize + cellSize/2}px`,
//                 left: '-24px',
//               }}
//             >
//               {num}
//             </div>
//           ))}

//           <div className="grid-wrapper">
//             <div 
//               className="expanding-frame"
//               style={{
//                 width: `${squareRoot * cellSize+1}px`,
//                 height: `${squareRoot * cellSize+1.8*squareRoot}px`,
//                 transform: 'translate(-1px, -1px)'
//               }}
//             >
//               <div className="measure-tooltip left-tooltip">
//                 {squareRoot.toFixed(2)}
//               </div>
//               <div className="measure-tooltip top-tooltip">
//                 {squareRoot.toFixed(2)}
//               </div>
//             </div>
            
//             <div className="grid">
//               {Array.from({ length: 10 }, (_, row) => (
//                 Array.from({ length: 10 }, (_, col) => {
//                   const { number: cellNumber, color } = getCellProperties(row, col);
//                   return (
//                     <div
//                       key={`${row}-${col}`}
//                       className="grid-cell"
//                       style={{ backgroundColor: color }}
//                     >
//                       {cellNumber || ''}
//                     </div>
//                   );
//                 })
//               )).flat()}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SquareRootVisualizer;

import React, { useState } from 'react';
import './SquareRootVisualizer.css';
import { processContent } from '@/app/utils/contentProcessor';

const TabContent = ({ content, links,externalLinks }) => (
  <div className="tab-content">
    <div className="content-text">{processContent(content)}</div>
    {links && links.length > 0 && (
      <div className="content-links">
        <h4>Additional Resources</h4>
        {links.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            // target="_blank" -use for external links
            rel="noopener noreferrer"
            className="content-link"
          >
            {link.text}
          </a>
        ))}
      </div>
    )}

{externalLinks && externalLinks.length > 0 && (
      <div className="content-links">
        <h4>External Links</h4>
        {externalLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            // target="_blank" -use for external links
            rel="noopener noreferrer"
            className="content-link"
          >
            {link.text}
          </a>
        ))}
      </div>
    )}
  </div>
);

const SquareRootVisualizer = ({ explanations }) => {
  const [activeTab, setActiveTab] = useState('general');
  const [number, setNumber] = useState(1);
  const [inputValue, setInputValue] = useState("1");
  const [error, setError] = useState("");
  const squareRoot = Math.sqrt(number);
  const cellSize = 40;
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const numValue = parseFloat(value);

    if (value.trim() === "") {
      setError("Please enter a number");
      return;
    }

    if (isNaN(numValue)) {
      setError("Please enter a valid number");
      return;
    }

    if (numValue < 0) {
      setError("Number cannot be negative");
      return;
    }

    if (numValue > 100) {
      setError("Number cannot be greater than 100");
      return;
    }

    setError("");
    setNumber(numValue);
  };

  const handleSliderChange = (e) => {
    const value = parseFloat(e.target.value);
    setNumber(value);
    setInputValue(value.toString());
    setError("");
  };
  
  const getCellProperties = (row, col) => {
    row = row + 1;
    col = col + 1;
    
    const isPerfectSquareCell = row === col;
    const perfectSquare = isPerfectSquareCell ? row * row : null;
    
    let color = 'white';
    if (row <= 1 && col <= 1) {
        color = 'rgb(0, 0, 255)';      // Pure blue
       } else if (row <= 2 && col <= 2) {
        color = 'rgb(40, 40, 255)';    
       } else if (row <= 3 && col <= 3) {
        color = 'rgb(80, 80, 255)';
       } else if (row <= 4 && col <= 4) {
        color = 'rgb(120, 120, 255)';
       } else if (row <= 5 && col <= 5) {
        color = 'rgb(160, 160, 255)';
       } else if (row <= 6 && col <= 6) {
        color = 'rgb(180, 180, 255)';
       } else if (row <= 7 && col <= 7) {
        color = 'rgb(200, 200, 255)';
       } else if (row <= 8 && col <= 8) {
        color = 'rgb(220, 220, 255)';
       } else if (row <= 9 && col <= 9) {
        color = 'rgb(235, 235, 255)';
       } else if (row <= 10 && col <= 10) {
        color = 'rgb(245, 245, 255)';  
       }

    return { number: perfectSquare, color };
  };

  return (
    <div className="app-container">
      <div className="visualizer-card">
        <div className="visualizer-content">
          <div className="controls">
            <div className="input-group">
              <div className="input-wrapper">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  className={`number-input ${error ? 'input-error' : ''}`}
                  placeholder="Enter number (0-100)"
                />
                {inputValue && (
                  <button 
                    className="reset-button"
                    onClick={() => {
                      setInputValue("");
                      setNumber(0);
                      setError("");
                    }}
                  >
                    ×
                  </button>
                )}
              </div>
              {error && <div className="error-message">{error}</div>}
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={number}
              onChange={handleSliderChange}
              className="custom-slider"
            />
            <div className="sqrt-display">√{number} = {squareRoot.toFixed(3)}</div>
          </div>

          <div className="grid-container">
            <div className="axis-label zero-label">0</div>

            {numbers.map(num => (
              <div
                key={`top-${num}`}
                className="axis-label top-label"
                style={{
                  left: `${(num * cellSize) + cellSize/2}px`,
                }}
              >
                {num}
              </div>
            ))}

            {numbers.map(num => (
              <div
                key={`left-${num}`}
                className="axis-label left-label"
                style={{
                  top: `${num * cellSize + cellSize/2}px`,
                  left: '-24px',
                }}
              >
                {num}
              </div>
            ))}

            <div className="grid-wrapper">
              <div 
                className="expanding-frame"
                style={{
                  width: `${squareRoot * cellSize+1}px`,
                  height: `${squareRoot * cellSize+1.8*squareRoot}px`,
                  transform: 'translate(-1px, -1px)'
                }}
              >
                <div className="measure-tooltip left-tooltip">
                  {squareRoot.toFixed(2)}
                </div>
                <div className="measure-tooltip top-tooltip">
                  {squareRoot.toFixed(2)}
                </div>
              </div>
              
              <div className="grid">
                {Array.from({ length: 10 }, (_, row) => (
                  Array.from({ length: 10 }, (_, col) => {
                    const { number: cellNumber, color } = getCellProperties(row, col);
                    return (
                      <div
                        key={`${row}-${col}`}
                        className="grid-cell"
                        style={{ backgroundColor: color }}
                      >
                        {cellNumber || ''}
                      </div>
                    );
                  })
                )).flat()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {explanations && (
        <div className="explanation-card">
          <div className="tab-buttons">
            <button 
              className={`tab-button ${activeTab === 'general' ? 'active' : ''}`}
              onClick={() => setActiveTab('general')}
            >
              How to Use
            </button>
            <button 
              className={`tab-button ${activeTab === 'perfect' ? 'active' : ''}`}
              onClick={() => setActiveTab('perfect')}
            >
              Perfect Squares
            </button>
            <button 
              className={`tab-button ${activeTab === 'irrational' ? 'active' : ''}`}
              onClick={() => setActiveTab('irrational')}
            >
              Irrational Roots
            </button>
          </div>

          <div className="tab-content-container">
            {activeTab === 'general' && explanations.general && (
              <TabContent 
                content={explanations.general.content}
                links={explanations.general.links}
              />
            )}
            {activeTab === 'perfect' && explanations.perfect && (
              <TabContent 
                content={explanations.perfect.content}
                links={explanations.perfect.links}
              />
            )}
            {activeTab === 'irrational' && explanations.irrational && (
              <TabContent 
                content={explanations.irrational.content}
                links={explanations.irrational.links}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SquareRootVisualizer;