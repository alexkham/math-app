// 'use client'
// import React, { useState, useRef } from 'react';
// import './LogarithmTable.css';

// const meanDifferences = [
//   // Include your mean differences data here
// ];

// const NaturalLogarithmTable = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [calculatedLn, setCalculatedLn] = useState('');
//   const [highlightIndex, setHighlightIndex] = useState({ baseIndex: null, decimalIndex: null, meanDiffIndex: null });
//   const rowRefs = useRef([]);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleCalculateClick = () => {
//     const value = parseFloat(inputValue);
//     if (!isNaN(value) && value > 0) {
//       const integerPart = Math.floor(value);
//       const decimalPart = (value - integerPart).toFixed(2).substring(2);
//       const baseIndex = integerPart - 10;
//       const decimalIndex = parseInt(decimalPart[0], 10);

//       if (baseIndex >= 0 && baseIndex < lnTableValues.length) {
//         let finalLnValue = parseFloat(lnTableValues[baseIndex][decimalIndex]);

//         let meanDiffValue = 0;
//         if (decimalPart.length > 1) {
//           const secondDecimal = parseInt(decimalPart[1], 10);
//           if (secondDecimal > 0 && secondDecimal <= meanDifferences[baseIndex].length) {
//             meanDiffValue = meanDifferences[baseIndex][secondDecimal - 1] / 10000;
//             finalLnValue += meanDiffValue;
//           }
//         }

//         finalLnValue = Math.log(finalLnValue + 1);  // Natural logarithm calculation
//         const formattedFinalLnValue = finalLnValue.toFixed(4);

//         setCalculatedLn(formattedFinalLnValue);
//         setHighlightIndex({ baseIndex, decimalIndex, meanDiffIndex: decimalPart.length > 1 ? parseInt(decimalPart[1], 10) : -1 });
//         scrollToRow(baseIndex);
//       } else {
//         setCalculatedLn('Input out of table range');
//         setHighlightIndex({ baseIndex: -1, decimalIndex: -1, meanDiffIndex: -1 });
//       }
//     } else {
//       setCalculatedLn('Invalid input');
//       setHighlightIndex({ baseIndex: -1, decimalIndex: -1, meanDiffIndex: -1 });
//     }
//   };

  

//   const calculateLnValues = () => {
//     const values = [];
//     for (let i = 10; i <= 99; i++) {
//       const row = [];
//       for (let j = 0; j < 10; j++) {
//         const number = i + j / 10;
//         const lnValue = Math.log(number + 1).toFixed(4);
//         row.push(lnValue);
//       }
//       values.push(row);
//     }
//     return values;
//   };

//   const lnTableValues = calculateLnValues();

//   const resetAll = () => {
//     setInputValue('');
//     setCalculatedLn('');
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
//       <div className='title'><h2>Natural Logarithm Table</h2></div>
//       <div className="input-area sticky">
//         <input
//           className='my-input'
//           type="number"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Enter a value"
//         />
//         <button onClick={handleCalculateClick}>Calculate</button>
//         <button style={{backgroundColor:'gray'}} onClick={resetAll}>Reset</button>
//         {calculatedLn && <div><p>Natural Logarithm: {calculatedLn}</p></div>}
//       </div>
//       <div className="flex-table-container" role="table" aria-label="Natural Logarithm Table">
//         <div className="flex-table-header sticky-header" role="rowgroup">
//           <div className="flex-table-cell header-cell" role="columnheader">N</div>
//           {Array.from({ length: 10 }, (_, index) => (
//             <div key={index} className="flex-table-cell header-cell" role="columnheader">{index}</div>
//           ))}
//         </div>
//         {lnTableValues.map((row, rowIndex) => (
//           <div key={rowIndex} ref={el => rowRefs.current[rowIndex] = el} className="flex-table-row" role="row">
//             <div className="flex-table-cell first-column" role="cell">{rowIndex + 10}</div>
//             {row.map((lnValue, columnIndex) => (
//               <div key={columnIndex} className={`flex-table-cell ${highlightIndex.baseIndex === rowIndex && highlightIndex.decimalIndex === columnIndex ? 'highlight' : ''}`} role="cell">
//                 {lnValue}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default NaturalLogarithmTable;

// 'use client'
// import React, { useState, useRef } from 'react';
// import './LogarithmTable.css';

// const meanDifferences = [
//   // Include your mean differences data here
// ];

// const NaturalLogarithmTable = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [calculatedLn, setCalculatedLn] = useState('');
//   const [highlightIndex, setHighlightIndex] = useState({ baseIndex: null, decimalIndex: null, meanDiffIndex: null });
//   const rowRefs = useRef([]);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleCalculateClick = () => {
//     const value = parseFloat(inputValue);
//     if (!isNaN(value) && value > 0) {
//       const integerPart = Math.floor(value);
//       const decimalPart = (value - integerPart).toFixed(2).substring(2);
//       const baseIndex = integerPart - 10;
//       const decimalIndex = parseInt(decimalPart[0], 10);

//       if (baseIndex >= 0 && baseIndex < lnTableValues.length) {
//         let finalLnValue = parseFloat(lnTableValues[baseIndex][decimalIndex]);

//         let meanDiffValue = 0;
//         if (decimalPart.length > 1) {
//           const secondDecimal = parseInt(decimalPart[1], 10);
//           if (secondDecimal > 0 && secondDecimal < meanDifferences[baseIndex].length) {
//             meanDiffValue = meanDifferences[baseIndex][secondDecimal] / 10000;
//             finalLnValue += meanDiffValue;
//           }
//         }

//         finalLnValue = Math.log(finalLnValue + 1);
//         const formattedFinalLnValue = finalLnValue.toFixed(4);

//         setCalculatedLn(formattedFinalLnValue);
//         setHighlightIndex({ baseIndex, decimalIndex, meanDiffIndex: decimalPart.length > 1 ? parseInt(decimalPart[1], 10) : -1 });
//         scrollToRow(baseIndex);
//       } else {
//         setCalculatedLn('Input out of table range');
//         setHighlightIndex({ baseIndex: -1, decimalIndex: -1, meanDiffIndex: -1 });
//       }
//     } else {
//       setCalculatedLn('Invalid input');
//       setHighlightIndex({ baseIndex: -1, decimalIndex: -1, meanDiffIndex: -1 });
//     }
//   };

//   const calculateLnValues = () => {
//     const values = [];
//     for (let i = 10; i <= 99; i++) {
//       const row = [];
//       for (let j = 0; j < 10; j++) {
//         const number = i + j / 10;
//         const lnValue = Math.log(number + 1).toFixed(4);
//         row.push(lnValue);
//       }
//       values.push(row);
//     }
//     return values;
//   };

//   const lnTableValues = calculateLnValues();

//   const resetAll = () => {
//     setInputValue('');
//     setCalculatedLn('');
//     setHighlightIndex({ baseIndex: null, decimalIndex: null, meanDiffIndex: null });
//   };

//   return (
//     <>
//       <div className='title'><h2>Natural Logarithm Table</h2></div>
//       <div className="input-area sticky">
//         <input
//           className='my-input'
//           type="number"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Enter a value"
//         />
//         <button onClick={handleCalculateClick}>Calculate</button>
//         <button style={{backgroundColor:'gray'}} onClick={resetAll}>Reset</button>
//         {calculatedLn && <div><p>Natural Logarithm: {calculatedLn}</p></div>}
//       </div>
//       <div className="flex-table-container" role="table" aria-label="Natural Logarithm Table">
//         <div className="flex-table-header sticky-header" role="rowgroup">
//           <div className="flex-table-cell header-cell" role="columnheader">N</div>
//           {Array.from({ length: 10 }, (_, index) => (
//             <div key={index} className="flex-table-cell header-cell" role="columnheader">{index}</div>
//           ))}
//         </div>
//         {lnTableValues.map((row, rowIndex) => (
//           <div key={rowIndex} ref={el => rowRefs.current[rowIndex] = el} className="flex-table-row" role="row">
//             <div className="flex-table-cell first-column" role="cell">{rowIndex + 10}</div>
//             {row.map((lnValue, columnIndex) => (
//               <div key={columnIndex} className={`flex-table-cell tooltip-container ${highlightIndex.baseIndex === rowIndex && highlightIndex.decimalIndex === columnIndex ? 'highlight' : ''}`} role="cell">
//                 {lnValue}
//                 <span className="tooltip">Ln value for {(rowIndex + 10) + columnIndex / 10}: {lnValue}</span>
//               </div>
//             ))}
//             {meanDifferences[rowIndex]?.map((diff, diffIndex) => (
//               <div key={`diff-${diffIndex}`} className={`flex-table-cell tooltip-container ${highlightIndex.baseIndex === rowIndex && highlightIndex.meanDiffIndex === diffIndex+1 ? 'highlight' : ''}`} role="cell">
//                 {diff}
//                 <span className="tooltip">Mean diff for index {diffIndex + 1}: {diff}</span>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default NaturalLogarithmTable;
'use client'
import React, { useState, useRef } from 'react';
import './LogarithmTable.css';

const NaturalLogarithmTable = () => {
  const [inputValue, setInputValue] = useState('');
  const [calculatedLn, setCalculatedLn] = useState('');
  const [highlightIndex, setHighlightIndex] = useState({ baseIndex: null, decimalIndex: null, meanDiffIndex: null });
  const rowRefs = useRef([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

//   const handleCalculateClick = () => {
//     const value = parseFloat(inputValue);
//     if (!isNaN(value) && value >= 1.0 && value <= 9.9) {
//       const integerPart = Math.floor(value * 10);  // Adjust for 0.1 steps
//       const lnValue = Math.log(value).toFixed(4);
//       setCalculatedLn(lnValue);
//       setHighlightIndex({ baseIndex: integerPart - 10, decimalIndex: 0, meanDiffIndex: null });
//       scrollToRow(integerPart - 10);
//     } else {
//       setCalculatedLn('Input out of range');
//     }
//   };

// const handleCalculateClick = () => {
//     const value = parseFloat(inputValue);
//     if (!isNaN(value) && value >= 1.0 && value <= 9.9) {
//       const integerPart = Math.floor(value * 10);
//       const decimalPart = Math.floor((value * 100) % 10); // New line to handle the second decimal
  
//       // Compute the overall index from the start of the table, considering up to two decimal places
//       const baseIndex = (integerPart - 10) * 10 + decimalPart; // Adjust base index calculation
  
//       const lnValue = Math.log(value).toFixed(4);
//       setCalculatedLn(lnValue);
//       setHighlightIndex({ baseIndex: baseIndex, decimalIndex: 0, meanDiffIndex: null });
//       scrollToRow(baseIndex);
//     } else {
//       setCalculatedLn('Input out of range');
//     }
//   };

const handleCalculateClick = () => {
    const value = parseFloat(inputValue);
    if (!isNaN(value) && value >= 1.0 && value <= 9.9) {
      const fullIndex = Math.floor(value * 100) - 100; // This gives us a zero-based index for 1.00 to 9.99
  
      const baseIndex = Math.floor(fullIndex / 10);  // Determines which row based on integer and first decimal
      const decimalIndex = fullIndex % 10;  // Determines which column based on the second decimal
  
      const lnValue = Math.log(value).toFixed(4);
      setCalculatedLn(lnValue);
      setHighlightIndex({ baseIndex, decimalIndex, meanDiffIndex: null });
      scrollToRow(baseIndex);
    } else {
      setCalculatedLn('Input out of range');
    }
  };
  
  

  const calculateLnValues = () => {
    const values = [];
    for (let i = 10; i <= 99; i++) {  // Adjusted for values 1.0 to 9.9 in steps of 0.1
      const row = [];
      for (let j = 0; j <= 9; j++) {
        const number = i / 10 + j / 100;
        const lnValue = Math.log(number).toFixed(4);
        row.push(lnValue);
      }
      values.push(row);
    }
    return values;
  };

  const lnTableValues = calculateLnValues();

  const resetAll = () => {
    setInputValue('');
    setCalculatedLn('');
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
      <div className='title'><h2>Natural Logarithm Table (Base e)</h2></div>
      <br></br>
      <br></br>
      <div className="input-area sticky">
        <div>
        <input
          className='my-input'
          type="number"
          step="0.1"
          min="1.0"
          max="9.9"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a value between 1.0 and 9.9"
        />
        <button onClick={handleCalculateClick}>Calculate</button>
        <button style={{backgroundColor:'gray'}} onClick={resetAll}>Reset</button>
        </div>
        <br></br>
        <hr></hr>
        {calculatedLn && <div><p>Natural Logarithm: {calculatedLn}</p></div>}

      </div>
      <div className="flex-table-container" role="table" aria-label="Natural Logarithm Table">
        <div className="flex-table-header sticky-header" role="rowgroup">
          <div className="flex-table-cell header-cell" role="columnheader">N</div>
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="flex-table-cell header-cell" role="columnheader">{(index / 100).toFixed(2)}</div>
          ))}
        </div>
        {lnTableValues.map((row, rowIndex) => (
          <div key={rowIndex} ref={el => rowRefs.current[rowIndex] = el} className="flex-table-row" role="row">
            <div className="flex-table-cell first-column" role="cell">{(1.0 + rowIndex / 10).toFixed(1)}</div>
            {row.map((lnValue, columnIndex) => (
              <div key={columnIndex} className={`flex-table-cell tooltip-container ${highlightIndex.baseIndex === rowIndex && highlightIndex.decimalIndex === columnIndex ? 'highlight' : ''}`} role="cell" title={`Ln value for ${(1.0 + rowIndex / 10 + columnIndex / 100).toFixed(2)}: ${lnValue}`}>
                {lnValue}
                <span className="tooltip">Natural Logarithm value for {(rowIndex + 10) + columnIndex / 10}: {lnValue}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );

  
  
};

export default NaturalLogarithmTable;
