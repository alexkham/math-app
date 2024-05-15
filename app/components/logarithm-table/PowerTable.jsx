'use client';
import React, { useState, useRef } from 'react';
import './LogarithmTable.css';

const PowerTable = () => {
  const [baseValue, setBaseValue] = useState('');
  const [exponentValue, setExponentValue] = useState('');
  const [calculatedPower, setCalculatedPower] = useState('');
  const [highlightIndex, setHighlightIndex] = useState({ baseIndex: null, decimalIndex: null });
  const rowRefs = useRef([]);

  const handleBaseInputChange = (e) => {
    setBaseValue(e.target.value);
  };

  const handleExponentInputChange = (e) => {
    setExponentValue(e.target.value);
  };

  const handleCalculateClick = () => {
    const base = parseFloat(baseValue);
    const exponent = parseFloat(exponentValue);
    if (!isNaN(base) && base >= 1.0 && base <= 99.9 && !isNaN(exponent) && exponent >= 1.0 && exponent <= 10.0) {
      const fullIndex = Math.floor(base * 100) - 100; // This gives us a zero-based index for 1.00 to 99.99
  
      const baseIndex = Math.floor(fullIndex / 10);  // Determines which row based on integer and first decimal
      const decimalIndex = fullIndex % 10;  // Determines which column based on the second decimal
  
      const powerValue = formatPowerValue(Math.pow(base, exponent));
      setCalculatedPower(powerValue);
      setHighlightIndex({ baseIndex, decimalIndex });
      scrollToRow(baseIndex);
    } else {
      setCalculatedPower('Input out of range');
    }
  };

  const formatPowerValue = (value) => {
    const threshold = 10000; // Example threshold value
    return value >= threshold ? value.toExponential(4) : value.toFixed(4);
  };

  const calculatePowerValues = (exponent) => {
    const values = [];
    for (let i = 10; i <= 999; i++) {  // Adjusted for values 1.0 to 99.9 in steps of 0.1
      const row = [];
      for (let j = 0; j <= 9; j++) {
        const number = i / 10 + j / 100;
        const powerValue = formatPowerValue(Math.pow(number, exponent));
        row.push(powerValue);
      }
      values.push(row);
    }
    return values;
  };

  const powerTableValues = exponentValue ? calculatePowerValues(parseFloat(exponentValue)) : [];

  const resetAll = () => {
    setBaseValue('');
    setExponentValue('');
    setCalculatedPower('');
    setHighlightIndex({ baseIndex: null, decimalIndex: null });
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
      <div className='title'><h2>Power Table (x^n)</h2></div>
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
            value={baseValue}
            onChange={handleBaseInputChange}
            placeholder="Enter a base value between 1.0 and 99.9"
          />
          <input
            className='my-input'
            type="number"
            step="0.1"
            min="1.0"
            max="10.0"
            value={exponentValue}
            onChange={handleExponentInputChange}
            placeholder="Enter an exponent value between 1.0 and 10.0"
          />
          <button onClick={handleCalculateClick}>Calculate</button>
          <button style={{backgroundColor:'gray'}} onClick={resetAll}>Reset</button>
        </div>
        <br></br>
        <hr></hr>
        {calculatedPower && <div><p>Power Value: {calculatedPower}</p></div>}

      </div>
      <div className="flex-table-container" role="table" aria-label="Power Table">
        <div className="flex-table-header sticky-header" role="rowgroup">
          <div className="flex-table-cell header-cell" role="columnheader">N</div>
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="flex-table-cell header-cell" role="columnheader">{(index / 100).toFixed(2)}</div>
          ))}
        </div>
        {powerTableValues.map((row, rowIndex) => (
          <div key={rowIndex} ref={el => rowRefs.current[rowIndex] = el} className="flex-table-row" role="row">
            <div className="flex-table-cell first-column" role="cell">{(1.0 + rowIndex / 10).toFixed(1)}</div>
            {row.map((powerValue, columnIndex) => (
              <div
                key={columnIndex}
                className={`flex-table-cell tooltip-container ${highlightIndex.baseIndex === rowIndex && highlightIndex.decimalIndex === columnIndex ? 'highlight' : ''}`}
                role="cell"
                title={`Power value for ${(1.0 + rowIndex / 10 + columnIndex / 100).toFixed(2)}^${exponentValue}: ${powerValue}`}
                style={{ fontSize: 'small' }}
              >
                {powerValue}
                <span className="tooltip">Power value for {(1.0 + rowIndex / 10 + columnIndex / 100).toFixed(2)}^${exponentValue}: {powerValue}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );

};

export default PowerTable;
