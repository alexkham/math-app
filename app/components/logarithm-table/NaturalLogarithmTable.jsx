
'use client';
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

  const handleCalculateClick = () => {
    const value = parseFloat(inputValue);
    if (!isNaN(value) && value >= 1.0 && value <= 99.9) {
      const fullIndex = Math.floor(value * 100) - 100; // This gives us a zero-based index for 1.00 to 99.99
  
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
    for (let i = 10; i <= 999; i++) {  // Adjusted for values 1.0 to 99.9 in steps of 0.1
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
