// 'use client';
// import React, { useState, useRef } from 'react';
// import './LogarithmTable.css';

// const ExponentialTable = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [calculatedExp, setCalculatedExp] = useState('');
//   const [highlightIndex, setHighlightIndex] = useState({ baseIndex: null, decimalIndex: null, meanDiffIndex: null });
//   const rowRefs = useRef([]);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleCalculateClick = () => {
//     const value = parseFloat(inputValue);
//     if (!isNaN(value) && value >= 1.0 && value <= 99.9) {
//       const fullIndex = Math.floor(value * 100) - 100; // This gives us a zero-based index for 1.00 to 99.99
  
//       const baseIndex = Math.floor(fullIndex / 10);  // Determines which row based on integer and first decimal
//       const decimalIndex = fullIndex % 10;  // Determines which column based on the second decimal
  
//       const expValue = Math.exp(value).toFixed(4);
//       setCalculatedExp(expValue);
//       setHighlightIndex({ baseIndex, decimalIndex, meanDiffIndex: null });
//       scrollToRow(baseIndex);
//     } else {
//       setCalculatedExp('Input out of range');
//     }
//   };

//   const calculateExpValues = () => {
//     const values = [];
//     for (let i = 10; i <= 999; i++) {  // Adjusted for values 1.0 to 99.9 in steps of 0.1
//       const row = [];
//       for (let j = 0; j <= 9; j++) {
//         const number = i / 10 + j / 100;
//         const expValue = Math.exp(number).toFixed(4);
//         row.push(expValue);
//       }
//       values.push(row);
//     }
//     return values;
//   };

//   const expTableValues = calculateExpValues();

//   const resetAll = () => {
//     setInputValue('');
//     setCalculatedExp('');
//     setHighlightIndex({ baseIndex: null, decimalIndex: null, meanDiffIndex: null });
//   };

//   const scrollToRow = (index) => {
//     const rowElement = rowRefs.current[index];
//     if (rowElement) {
//       rowElement.scrollIntoView({
//         behavior: 'smooth',
//         block: 'center'
//       });
//     }
//   };

//   return (
//     <>
//       <div className='title'><h2>Exponential Table (e^x)</h2></div>
//       <br></br>
//       <br></br>
//       <div className="input-area sticky">
//         <div>
//         <input
//           className='my-input'
//           type="number"
//           step="0.1"
//           min="1.0"
//           max="99.9"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Enter a value between 1.0 and 99.9"
//         />
//         <button onClick={handleCalculateClick}>Calculate</button>
//         <button style={{backgroundColor:'gray'}} onClick={resetAll}>Reset</button>
//         </div>
//         <br></br>
//         <hr></hr>
//         {calculatedExp && <div><p>Exponential Value: {calculatedExp}</p></div>}

//       </div>
//       <div className="flex-table-container" role="table" aria-label="Exponential Table">
//         <div className="flex-table-header sticky-header" role="rowgroup">
//           <div className="flex-table-cell header-cell" role="columnheader">N</div>
//           {Array.from({ length: 10 }, (_, index) => (
//             <div key={index} className="flex-table-cell header-cell" role="columnheader">{(index / 100).toFixed(2)}</div>
//           ))}
//         </div>
//         {expTableValues.map((row, rowIndex) => (
//           <div key={rowIndex} ref={el => rowRefs.current[rowIndex] = el} className="flex-table-row" role="row">
//             <div className="flex-table-cell first-column" role="cell">{(1.0 + rowIndex / 10).toFixed(1)}</div>
//             {row.map((expValue, columnIndex) => (
//               <div key={columnIndex} className={`flex-table-cell tooltip-container ${highlightIndex.baseIndex === rowIndex && highlightIndex.decimalIndex === columnIndex ? 'highlight' : ''}`} role="cell" title={`Exp value for ${(1.0 + rowIndex / 10 + columnIndex / 100).toFixed(2)}: ${expValue}`}>
//                 {expValue}
//                 <span className="tooltip">Exponential value for {(rowIndex + 10)/10 + columnIndex/100 }: {expValue}</span>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </>
//   );

// };

// export default ExponentialTable;
// 'use client';
// import React, { useState, useRef } from 'react';
// import './LogarithmTable.css';

// const ExponentialTable = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [calculatedExp, setCalculatedExp] = useState('');
//   const [highlightIndex, setHighlightIndex] = useState({ baseIndex: null, decimalIndex: null, meanDiffIndex: null });
//   const rowRefs = useRef([]);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleCalculateClick = () => {
//     const value = parseFloat(inputValue);
//     if (!isNaN(value) && value >= 1.0 && value <= 99.9) {
//       const fullIndex = Math.floor(value * 100) - 100; // This gives us a zero-based index for 1.00 to 99.99
  
//       const baseIndex = Math.floor(fullIndex / 10);  // Determines which row based on integer and first decimal
//       const decimalIndex = fullIndex % 10;  // Determines which column based on the second decimal
  
//       const expValue = Math.exp(value).toExponential(4);
//       setCalculatedExp(expValue);
//       setHighlightIndex({ baseIndex, decimalIndex, meanDiffIndex: null });
//       scrollToRow(baseIndex);
//     } else {
//       setCalculatedExp('Input out of range');
//     }
//   };

//   const calculateExpValues = () => {
//     const values = [];
//     for (let i = 10; i <= 999; i++) {  // Adjusted for values 1.0 to 99.9 in steps of 0.1
//       const row = [];
//       for (let j = 0; j <= 9; j++) {
//         const number = i / 10 + j / 100;
//         const expValue = Math.exp(number).toExponential(4);
//         row.push(expValue);
//       }
//       values.push(row);
//     }
//     return values;
//   };

//   const expTableValues = calculateExpValues();

//   const resetAll = () => {
//     setInputValue('');
//     setCalculatedExp('');
//     setHighlightIndex({ baseIndex: null, decimalIndex: null, meanDiffIndex: null });
//   };

//   const scrollToRow = (index) => {
//     const rowElement = rowRefs.current[index];
//     if (rowElement) {
//       rowElement.scrollIntoView({
//         behavior: 'smooth',
//         block: 'center'
//       });
//     }
//   };

//   return (
//     <>
//       <div className='title'><h2>Exponential Table (e^x)</h2></div>
//       <br></br>
//       <br></br>
//       <div className="input-area sticky">
//         <div>
//         <input
//           className='my-input'
//           type="number"
//           step="0.1"
//           min="1.0"
//           max="99.9"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Enter a value between 1.0 and 99.9"
//         />
//         <button onClick={handleCalculateClick}>Calculate</button>
//         <button style={{backgroundColor:'gray'}} onClick={resetAll}>Reset</button>
//         </div>
//         <br></br>
//         <hr></hr>
//         {calculatedExp && <div><p>Exponential Value: {calculatedExp}</p></div>}

//       </div>
//       <div className="flex-table-container" role="table" aria-label="Exponential Table">
//         <div className="flex-table-header sticky-header" role="rowgroup">
//           <div className="flex-table-cell header-cell" role="columnheader">N</div>
//           {Array.from({ length: 10 }, (_, index) => (
//             <div key={index} className="flex-table-cell header-cell" role="columnheader">{(index / 100).toFixed(2)}</div>
//           ))}
//         </div>
//         {expTableValues.map((row, rowIndex) => (
//           <div key={rowIndex} ref={el => rowRefs.current[rowIndex] = el} className="flex-table-row" role="row">
//             <div className="flex-table-cell first-column" role="cell">{(1.0 + rowIndex / 10).toFixed(1)}</div>
//             {row.map((expValue, columnIndex) => (
//               <div style={{fontSize:'small'}} key={columnIndex} className={`flex-table-cell tooltip-container ${highlightIndex.baseIndex === rowIndex && highlightIndex.decimalIndex === columnIndex ? 'highlight' : ''}`} role="cell" title={`Exp value for ${(1.0 + rowIndex / 10 + columnIndex / 100).toFixed(2)}: ${expValue}`}>
//                 {expValue}
//                 <span className="tooltip">Exponential value for {(1.0 + rowIndex / 10 + columnIndex / 100).toFixed(2)}: {expValue}</span>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </>
//   );

// };

// export default ExponentialTable;
'use client';
import React, { useState, useRef } from 'react';
import './LogarithmTable.css';

const ExponentialTable = () => {
  const [inputValue, setInputValue] = useState('');
  const [calculatedExp, setCalculatedExp] = useState('');
  const [highlightIndex, setHighlightIndex] = useState({ baseIndex: null, decimalIndex: null, meanDiffIndex: null });
  const rowRefs = useRef([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCalculateClick = () => {
    const value = parseFloat(inputValue);
    if (!isNaN(value) && value >= 1.0 && value <= 99.9) {
      const fullIndex = Math.floor(value * 100) - 100; // This gives us a zero-based index for 1.00 to 99.99
  
      const baseIndex = Math.floor(fullIndex / 10);  // Determines which row based on integer and first decimal
      const decimalIndex = fullIndex % 10;  // Determines which column based on the second decimal
  
      const expValue = formatExpValue(Math.exp(value));
      setCalculatedExp(expValue);
      setHighlightIndex({ baseIndex, decimalIndex, meanDiffIndex: null });
      scrollToRow(baseIndex);
    } else {
      setCalculatedExp('Input out of range');
    }
  };

  const formatExpValue = (value) => {
    const threshold = 10000; // Example threshold value
    return value >= threshold ? value.toExponential(4) : value.toFixed(4);
  };

  const calculateExpValues = () => {
    const values = [];
    for (let i = 10; i <= 999; i++) {  // Adjusted for values 1.0 to 99.9 in steps of 0.1
      const row = [];
      for (let j = 0; j <= 9; j++) {
        const number = i / 10 + j / 100;
        const expValue = formatExpValue(Math.exp(number));
        row.push(expValue);
      }
      values.push(row);
    }
    return values;
  };

  const expTableValues = calculateExpValues();

  const resetAll = () => {
    setInputValue('');
    setCalculatedExp('');
    setHighlightIndex({ baseIndex: null, decimalIndex: null, meanDiffIndex: null });
  };

  const scrollToRow = (index) => {
    const rowElement = rowRefs.current[index];
    if (rowElement) {
      rowElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <>
      <div className='title'><h2>Exponential Table (eˣ)</h2></div>
      <br></br>
      <br></br>
      <div className="input-area sticky">
        <div>
        <input
        style={{minWidth:'300px'}}
          className='my-input'
          type="number"
          step="0.1"
          min="1.0"
          max="99.9"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a value between 1.0 and 99.9"
        />
        <button onClick={handleCalculateClick}>Calculate</button>
        <button style={{backgroundColor:'gray'}} onClick={resetAll}>Reset</button>
        </div>
        <br></br>
        <hr></hr>
        {calculatedExp && <div><p>Exponential Value: {calculatedExp}</p></div>}

      </div>
      <div className="flex-table-container" role="table" aria-label="Exponential Table">
        <div className="flex-table-header sticky-header" role="rowgroup">
          <div className="flex-table-cell header-cell" role="columnheader">x</div>
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="flex-table-cell header-cell" role="columnheader">{(index / 100).toFixed(2)}</div>
          ))}
        </div>
        {expTableValues.map((row, rowIndex) => (
          <div key={rowIndex} ref={el => rowRefs.current[rowIndex] = el} className="flex-table-row" role="row">
            <div className="flex-table-cell first-column" role="cell">{(1.0 + rowIndex / 10).toFixed(1)}</div>
            {row.map((expValue, columnIndex) => (
              <div
                key={columnIndex}
                className={`flex-table-cell tooltip-container ${highlightIndex.baseIndex === rowIndex && highlightIndex.decimalIndex === columnIndex ? 'highlight' : ''}`}
                role="cell"
                title={`Exp value for ${(1.0 + rowIndex / 10 + columnIndex / 100).toFixed(2)}: ${expValue}`}
                style={{ fontSize: 'small' }}
              >
                {expValue}
                <span className="tooltip">Exponential value for {(1.0 + rowIndex / 10 + columnIndex / 100).toFixed(2)}: {expValue}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );

};

export default ExponentialTable;
