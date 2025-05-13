
'use client';
import React, { useState } from 'react';
import styles from './PercentageCalculator.module.css';

function PercentageCalculator() {
  const [mode, setMode] = useState('percentageOf');
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [addSubtractOption, setAddSubtractOption] = useState('add');

  const handleModeChange = (event) => {
    setMode(event.target.value);
    setNumber1('');
    setNumber2('');
    setResult('');
  };

  const handleNumber1Change = (event) => {
    setNumber1(event.target.value);
  };

  const handleNumber2Change = (event) => {
    setNumber2(event.target.value);
  };

  const handleAddSubtractChange = (event) => {
    setAddSubtractOption(event.target.value);
  };

  const calculatePercentage = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Error: Invalid input');
      return;
    }

    let calculatedResult;
    switch (mode) {
      case 'percentageOf':
        calculatedResult = (num1 / 100) * num2;
        break;
      case 'percentageChange':
        calculatedResult = ((num2 - num1) / num1) * 100;
        break;
      case 'reversePercentage':
        calculatedResult = (num1 * 100) / num2;
        break;
      case 'addSubtractPercentage':
        calculatedResult = addSubtractOption === 'add' 
          ? num2 * (1 + (num1 / 100))
          : num2 * (1 - (num1 / 100));
        break;
      case 'fractionToPercentage':
        calculatedResult = (num1 / num2) * 100;
        break;
      default:
        calculatedResult = 0;
    }

    setResult(calculatedResult.toFixed(2));
  };

  const resetAll = () => {
    setMode('percentageOf');
    setNumber1('');
    setNumber2('');
    setResult('');
    setAddSubtractOption('add');
  };

  const showTooltip = (tooltipId) => {
    setActiveTooltip(tooltipId);
  };

  const hideTooltip = () => {
    setActiveTooltip(null);
  };

  const getExplanation = () => {
    switch (mode) {
      case 'percentageOf':
        return "This calculation finds a percentage of a given number. It's useful for tasks like calculating discounts, tips, or portions of a whole.";
      case 'percentageChange':
        return "This calculation determines the percentage increase or decrease between two values. It's commonly used to analyze changes in prices, populations, or other quantities over time.";
      case 'reversePercentage':
        return "This calculation finds what percentage one number is of another. It's helpful when you want to express a part's relation to a whole as a percentage.";
      case 'addSubtractPercentage':
        return "This calculation adds or subtracts a percentage from a number. It's useful for calculating price increases, tax additions, or discounts.";
      case 'fractionToPercentage':
        return "This calculation converts a fraction to its equivalent percentage. It's useful for expressing fractions as percentages.";
      default:
        return '';
    }
  };

  const getTooltip = (field) => {
    switch (mode) {
      case 'percentageOf':
        return field === 'number1' ? 'Enter the percentage' : 'Enter the whole amount';
      case 'percentageChange':
        return field === 'number1' ? 'Enter the original value' : 'Enter the new value';
      case 'reversePercentage':
        return field === 'number1' ? 'Enter the part value' : 'Enter the whole value';
      case 'addSubtractPercentage':
        return field === 'number1' ? 'Enter the percentage to add/subtract' : 'Enter the base number';
      case 'fractionToPercentage':
        return field === 'number1' ? 'Enter the numerator' : 'Enter the denominator';
      default:
        return '';
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.baseSelection}>
        <label>Choose Calculation Mode</label>
        <div className={styles.radio_container}>
          <input 
            type="radio" 
            name="mode"
            checked={mode === 'percentageOf'} 
            value="percentageOf" 
            onChange={handleModeChange} 
            id="percentageOf"
          />
          <label htmlFor="percentageOf">Calculate Percentage of a Number</label>
          <input 
            type="radio" 
            name="mode"
            checked={mode === 'percentageChange'} 
            value="percentageChange" 
            onChange={handleModeChange} 
            id="percentageChange"
          />
          <label htmlFor="percentageChange">Calculate Percentage Change</label>
          <input 
            type="radio" 
            name="mode"
            checked={mode === 'reversePercentage'} 
            value="reversePercentage" 
            onChange={handleModeChange} 
            id="reversePercentage"
          />
          <label htmlFor="reversePercentage">Calculate Percentage Ratio</label>
          <input 
            type="radio" 
            name="mode"
            checked={mode === 'addSubtractPercentage'} 
            value="addSubtractPercentage" 
            onChange={handleModeChange} 
            id="addSubtractPercentage"
          />
          <label htmlFor="addSubtractPercentage">Add/Subtract Percentage</label>
          <input 
            type="radio" 
            name="mode"
            checked={mode === 'fractionToPercentage'} 
            value="fractionToPercentage" 
            onChange={handleModeChange} 
            id="fractionToPercentage"
          />
          <label htmlFor="fractionToPercentage">Fraction to Percentage</label>
        </div>
      </div>
      <div className={styles.calculatorBodyWrapper}>
        <div className={styles.calculatorBody}>
          <table className={styles.calcTable}>
            <tbody>
              <tr>
                <td style={{width:'200px'}} >
                  <div className={styles.inputWrapper}>
                    <span 
                      className={styles.tooltipTrigger}
                      onMouseEnter={() => showTooltip('number1')}
                      onMouseLeave={hideTooltip}
                    >
                      ?
                      {activeTooltip === 'number1' && (
                        <span className={styles.tooltip}>
                          {getTooltip('number1')}
                        </span>
                      )}
                    </span>
                    <input
                      className={styles.valueInput}
                      type="number"
                      value={number1}
                      onChange={handleNumber1Change}
                    />
                  </div>
                </td>
                <td style={{width:'100px'}} className={styles.operatorCell}>
                  {mode === 'percentageOf' && '% of'}
                  {mode === 'percentageChange' && 'changed to'}
                  {mode === 'reversePercentage' && 'is what % of'}
                  {mode === 'addSubtractPercentage' && (
                    <select value={addSubtractOption} onChange={handleAddSubtractChange} className={styles.selectInput}>
                      <option value="add">% added to</option>
                      <option value="subtract">% subtracted from</option>
                    </select>
                  )}
                  {mode === 'fractionToPercentage' && '/'}
                </td>
                <td>
                  <div className={styles.inputWrapper}>
                    <span 
                      className={styles.tooltipTrigger}
                      onMouseEnter={() => showTooltip('number2')}
                      onMouseLeave={hideTooltip}
                    >
                      ?
                      {activeTooltip === 'number2' && (
                        <span className={styles.tooltip}>
                          {getTooltip('number2')}
                        </span>
                      )}
                    </span>
                    <input
                      className={styles.valueInput}
                      type="number"
                      value={number2}
                      onChange={handleNumber2Change}
                    />
                  </div>
                </td>
                <td className={styles.resultCell}>
                  = {result}{(mode === 'percentageChange'&&result || mode === 'reversePercentage'&&result || mode === 'fractionToPercentage'&&result) ? '%' : ''}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button 
          onClick={calculatePercentage}
          className={styles.calculateButton}
        >
          Calculate
        </button>
        <button 
          onClick={resetAll}
          className={styles.resetButton}
        >
          Reset
        </button>
      </div>
      <br></br>
      <div className={styles.explanation}>
        {getExplanation()}
      </div>
    </div>
  );
}

export default PercentageCalculator;