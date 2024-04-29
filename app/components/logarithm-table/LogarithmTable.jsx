'use client'
import React ,{useState, useRef, useEffect} from 'react';
import './LogarithmTable.css'

// Placeholder mean differences data
// You will need to replace this with your actual data from the image
const meanDifferences = [
  [4, 8, 12, 17, 21, 25, 29, 33, 37],
  [4,8,11,15,19,23,26,30,34],
  [3,7,10,14,17,21,24,28,31],
  [3,6,10,13,16,19,23,26,29],
  [3,6,9,,12,15,18,21,24,27],
  [3,6,8,11,14,17,20,22,25],
  [3,5,8,11,13,16,18,21,24],
  [2,5,7,10,12,15,17,20,22],
  [2,5,7,9,12,14,16,19,21],
  [2,4,7,9,11,13,16,18,20],
  [2,4,6,8,11,13,15,17,19],
  [2,4,6,8,10,12,14,16,18],
  [2,4,6,8,10,12,14,15,17],
  [2,4,6,7,9,11,13,15,17],
  [2,4,5,7,9,11,12,14,16],
  [2,3,5,7,9,10,12,14,15],
  [2,3,5,7,8,10,11,13,15],
  [2,3,5,6,8,9,11,13,14],
  [2,3,5,6,8,9,11,12,14],
  [1,3,4,6,7,9,10,12,19],
  [1,3,4,6,7,9,10,11,13],
  [1,3,4,6,7,8,10,11,12],
  [1,3,4,5,7,8,9,11,12],
  [1,3,4,5,6,8,9,10,12],
  [1,3,4,5,6,8,9,10,11],
  [1,2,4,5,6,7,9,10,11],
  [1,2,4,5,6,7,8,10,11],
  [1,2,3,5,6,7,8,9,10],
  [1,2,3,5,6,7,8,9,10],
  [1,2,3,4,5,7,8,9,10],
  [1,2,3,4,5,6,8,9,10],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,7,8],
  [1,2,3,4,5,5,6,7,8],
  [1,2,3,4,4,5,6,7,8],
  [1,2,3,,4,4,5,6,7,8],
  [1,2,3,,3,4,5,6,7,8],
  [1,2,3,3,4,5,6,7,8],
  [1,2,2,3,4,5,6,7,7],
  [1,2,2,3,4,5,6,6,7],
  [1,2,2,3,4,5,6,6,7],
  [1,2,2,3,4,5,5,6,7],
  [1,2,2,3,4,5,5,6,7],
  [1,2,2,3,4,5,5,6,7],
  [1,1,2,3,4,4,5,6,7],
  [1,1,2,3,4,4,5,6,7],
  [1,1,2,3,4,4,5,6,6],
  [1,1,2,3,4,4,5,6,6],
  [1,1,2,3,3,4,5,6,6],
  [1,1,2,3,3,4,5,5,6],
  [1,1,2,3,3,4,5,5,6],
  [1,1,2,3,3,4,5,5,6],
  [1,1,2,3,3,4,5,5,6],
  [1,1,2,3,3,4,5,5,6],
  [1,1,2,3,3,4,4,5,6],
  [1,1,2,2,3,4,4,5,6],
  [1,1,2,2,3,4,4,5,6],
  [1,1,2,2,3,4,4,5,5],
  [1,1,2,2,3,4,4,5,5],
  [1,1,2,2,3,4,4,5,5],
  [1,1,2,2,3,4,4,5,5],
  [1,1,2,2,3,4,4,5,5],
  [1,1,2,2,3,4,4,5,5],
  [1,1,2,2,3,4,4,4,5],
  [1,1,2,2,3,4,4,4,5],
  [1,1,2,2,3,4,4,4,5],
  [1,1,2,2,3,3,4,4,5],
  [1,1,2,2,3,3,4,4,5],
  [1,1,2,2,3,3,4,4,5],
  [1,1,2,2,3,3,4,4,5],
  [1,1,2,2,3,3,4,4,5],
  [1,1,2,2,3,3,4,4,5],
  [1,1,2,2,3,3,4,4,5],
  [0,1,1,2,2,3,3,4,4],
  [0,1,1,2,2,3,3,4,4],
  [0,1,1,2,2,3,3,4,4],
  [0,1,1,2,2,3,3,4,4],
  [0,1,1,2,2,3,3,4,4],
  [0,1,1,2,2,3,3,4,4],
  [0,1,1,2,2,3,3,4,4],
  [0,1,1,2,2,3,3,4,4],
  [0,1,1,2,2,3,3,4,4],
  [0,1,1,2,2,3,3,4,4],
  [0,1,1,2,2,3,3,4,4],
  [0,1,1,2,2,3,3,4,4],
  [0,1,1,2,2,3,3,4,4]
  
];

// Logarithm Table Component
const LogarithmTable = () => {
  const [inputValue, setInputValue] = useState('');
  const [calculatedLog, setCalculatedLog] = useState('');
  const [highlightIndex, setHighlightIndex] = useState({ baseIndex: null, decimalIndex: null, meanDiffIndex: null });
 
  const rowRefs = useRef([]);


  

  const scrollToRow = (index) => {
    const rowElement = rowRefs.current[index];
    if (rowElement) {
      rowElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };
  

  // Function to handle input changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

 
const handleCalculateClick = () => {
  const value = parseFloat(inputValue);
  if (!isNaN(value) && value > 0) {
      const formattedInput = value.toFixed(2);
      const integerPart = Math.floor(value);
      const decimalPart = formattedInput.split('.')[1] || "00";

      const baseIndex = integerPart - 10; // Adjust based on table start value
      const decimalIndex = parseInt(decimalPart[0], 10); // First decimal digit as index

      if (baseIndex >= 0 && baseIndex < logTableValues.length) {
          let finalLogValue = parseFloat(logTableValues[baseIndex][decimalIndex]);

          // Processing for mean difference based on the second decimal
          let meanDiffValue=0;
          if (decimalPart.length > 1) {
              const secondDecimal = parseInt(decimalPart[1], 10);
              console.log(secondDecimal)
              if (secondDecimal > 0 && secondDecimal <= meanDifferences[baseIndex].length) {
                 
                  meanDiffValue = meanDifferences[baseIndex][secondDecimal-1] / 10000;
                  finalLogValue += meanDiffValue;  // Adding the mean difference
              }
          }
          console.log("Inside calculation function")
         console.log(meanDiffValue)
          // Normalize the log value before setting
          finalLogValue = (finalLogValue / 10000) + 1+meanDiffValue;
          const formattedFinalLogValue = finalLogValue.toFixed(4);

          setCalculatedLog(formattedFinalLogValue);
          setHighlightIndex({ baseIndex, decimalIndex, meanDiffIndex: decimalPart.length > 1 ? parseInt(decimalPart[1], 10) : -1 });
          scrollToRow(baseIndex);
                
      } else {
          setCalculatedLog('Input out of table range');
          setHighlightIndex({ baseIndex: -1, decimalIndex: -1, meanDiffIndex: -1 });
      }
  } else {
      setCalculatedLog('Invalid input');
      setHighlightIndex({ baseIndex: -1, decimalIndex: -1, meanDiffIndex: -1 });
  }
};










  // Function to calculate log values; returns a 2D array of log values
  const calculateLogValues = () => {
    const values = [];
    for (let i = 10; i <= 99; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) {
        const number = i + j / 10;
        const logValue = Math.log10(number).toFixed(4).substring(2);
        row.push(logValue);
      }
      values.push(row);
    }
    return values;
  };

  // Store the log values in a state or variable
  const logTableValues = calculateLogValues();


  
  return (
    <>
      <div className='title'><h2>Logarithm Table</h2></div>
      {/* Sticky input area */}
      <div className="input-area sticky">
        <div>
        <input
        className='my-input'
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a value"
        />
        <button onClick={handleCalculateClick}>Calculate</button>
        </div>
        <br></br>
        <hr></hr>
        {calculatedLog && (
         <div> <p>Logarithm: {calculatedLog}</p></div>
        )}
      </div>
      {/* Logarithm table */}
      <div className="flex-table-container" role="table" aria-label="Logarithm Table">
        <div className="flex-table-header sticky-header" role="rowgroup">
          <div className="flex-table-cell header-cell" role="columnheader">N</div>
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="flex-table-cell header-cell" role="columnheader">{index}</div>
          ))}
          {Array.from({ length: 9 }, (_, index) => (
            <div key={index} className="flex-table-cell header-cell" role="columnheader" style={{fontSize:'small'}}>Mean Diff {index + 1}</div>
          ))}
        </div>
        {/* Table body */}
        {logTableValues.map((row, rowIndex) => (
          <div key={rowIndex} ref={el => rowRefs.current[rowIndex] = el} className="flex-table-row" role="row">
            <div className="flex-table-cell first-column" role="cell">{rowIndex + 10}</div>
            {row.map((logValue, columnIndex) => (
              <div key={columnIndex} className={`flex-table-cell tooltip-container ${highlightIndex.baseIndex === rowIndex && highlightIndex.decimalIndex === columnIndex ? 'highlight' : ''}`} role="cell">
                {logValue}
                <span className="tooltip">Log value for {(rowIndex + 10) + columnIndex / 10}: {logValue}</span>
              </div>
            ))}
            {/* Include mean differences for each row */}
            {meanDifferences[rowIndex]?.map((diff, diffIndex) => (
              <div key={`diff-${diffIndex}`} className={`flex-table-cell tooltip-container ${highlightIndex.baseIndex === rowIndex && highlightIndex.meanDiffIndex === diffIndex+1 ? 'highlight' : ''}`} role="cell">
                {diff}
                <span className="tooltip">Mean difference {diff}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
  
  
};

export default LogarithmTable;
