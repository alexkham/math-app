'use client';
import React, { useState, useEffect, useCallback ,useMemo } from 'react';
import styles from './MatrixMultiplication.module.css'

const MatrixMultiplication = () => {
  const [matrixA, setMatrixA] = useState([[1, 2], [3, 4]]);
  const [matrixB, setMatrixB] = useState([[5, 6], [7, 8]]);
  const [result, setResult] = useState([[0, 0], [0, 0]]);
  const [step, setStep] = useState(0);
  const [highlightA, setHighlightA] = useState([]);
  const [highlightB, setHighlightB] = useState([]);
  const [intermediateResult, setIntermediateResult] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');
  const [currentStage, setCurrentStage] = useState({ row: 0, col: 0 });
  const [currentSubStage, setCurrentSubStage] = useState(0);
  const [stageSum, setStageSum] = useState(0);
  const [explanation, setExplanation] = useState('');
  const [highlightResult, setHighlightResult] = useState([]);
  const [explanations, setExplanations] = useState([]);
  const [animationStarted, setAnimationStarted] = useState(false);


  const resizeMatrix = (matrix, rows, cols) => {
    return Array(rows).fill().map((_, i) => 
      Array(cols).fill().map((_, j) => matrix[i]?.[j] || 0)
    );
  };

  const handleMatrixResize = useCallback((matrix, newRows, newCols) => {
    if (newRows < 1 || newCols < 1 || newRows > 10 || newCols > 10) {
      setError('Matrix dimensions must be between 1 and 10');
      return;
    }

    setMatrixA(prevA => matrix === 'A' ? resizeMatrix(prevA, newRows, newCols) : prevA);
    setMatrixB(prevB => matrix === 'B' ? resizeMatrix(prevB, newRows, newCols) : prevB);

    setResult(prevResult => {
      let resultRows, resultCols;
      if (matrix === 'A') {
        resultRows = newRows;
        resultCols = prevResult[0].length;
      } else { // matrix === 'B'
        resultRows = prevResult.length;
        resultCols = newCols;
      }
      return Array(resultRows).fill().map(() => Array(resultCols).fill(0));
    });

    setError('');
    setStep(0);
    setHighlightA([]);
    setHighlightB([]);
    setIntermediateResult(0);
    setIsRunning(false);
    setHistory([]);
    setCurrentStage({ row: 0, col: 0 });
    setCurrentSubStage(0);
    setStageSum(0);
    setExplanation('');
  }, []);

  useEffect(() => {
    if (matrixA[0].length !== matrixB.length) {
      setError('Number of columns in Matrix A must be equal to number of rows in Matrix B');
    } else {
      setError('');
    }
  }, [matrixA, matrixB]);

  const totalSteps = matrixA.length * matrixB[0].length * matrixA[0].length;

    
  const generateExplanation = useMemo(() => (i, j, k, currentResult) => {
    if (k === 0) {
      return {
        initial: `Calculating R[${i + 1}][${j + 1}]`,
        steps: [],
        result: ''
      };
    }
  
    // Check if the indices are valid before accessing the matrix elements
    const aValue = matrixA[i] && matrixA[i][k-1] !== undefined ? matrixA[i][k-1] : 'undefined';
    const bValue = matrixB[k-1] && matrixB[k-1][j] !== undefined ? matrixB[k-1][j] : 'undefined';
    const product = aValue !== 'undefined' && bValue !== 'undefined' ? aValue * bValue : 'undefined';
    const step = `A[${i + 1}][${k}] * B[${k}][${j + 1}] = ${aValue} * ${bValue} = ${product}`;
  
    if (k === matrixA[0].length) {
      return {
        initial: `Calculating R[${i + 1}][${j + 1}]`,
        steps: [step],
        result: `R[${i + 1}][${j + 1}] = ${currentResult[i] && currentResult[i][j] !== undefined ? currentResult[i][j] : 'undefined'}`
      };
    }
  
    return {
      initial: `Calculating R[${i + 1}][${j + 1}]`,
      steps: [step],
      result: ''
    };
  }, [matrixA, matrixB]);


  useEffect(() => {
    const { row, col } = currentStage;
    generateExplanation(row, col, currentSubStage - 1);
  }, [currentStage, currentSubStage, generateExplanation]);


  useEffect(() => {
    generateExplanation();
  }, [currentStage, currentSubStage, generateExplanation]);

  
  const performStep = useCallback(() => {
    if (step < totalSteps) {
      const i = Math.floor(step / (matrixB[0].length * matrixA[0].length));
      const j = Math.floor((step % (matrixB[0].length * matrixA[0].length)) / matrixA[0].length);
      const k = step % matrixA[0].length;
  
      const newHighlightA = [i, k];
      const newHighlightB = [k, j];
      const newHighlightResult = [i, j];
  
      setHighlightA(newHighlightA);
      setHighlightB(newHighlightB);
      setHighlightResult(newHighlightResult);
  
      setResult(prevResult => {
        const newResult = prevResult.map(row => [...row]);
        if (k === 0) {
          newResult[i] = newResult[i] || [];
          newResult[i][j] = 0;
        }
        if (matrixA[i] && matrixA[i][k] !== undefined && matrixB[k] && matrixB[k][j] !== undefined) {
          newResult[i] = newResult[i] || [];
          newResult[i][j] += matrixA[i][k] * matrixB[k][j];
        }
        return newResult;
      });
  
      setExplanations(prevExplanations => {
        const newExplanation = generateExplanation(i, j, k + 1, result);
        if (prevExplanations.length === 0 || k === 0) {
          return [...prevExplanations, newExplanation];
        } else {
          const lastExplanation = prevExplanations[prevExplanations.length - 1];
          const updatedLastExplanation = {
            ...lastExplanation,
            steps: [...(lastExplanation.steps || []), ...(newExplanation.steps || [])],
            result: `R[${i + 1}][${j + 1}] = ${result[i][j] + matrixA[i][k] * matrixB[k][j]}`
          };
          return [...prevExplanations.slice(0, -1), updatedLastExplanation];
        }
      });
  
      setHistory(prevHistory => [...prevHistory, {
        result: result,
        highlightA: newHighlightA,
        highlightB: newHighlightB,
        highlightResult: newHighlightResult,
        currentStage: { row: i, col: j },
        currentSubStage: k + 1,
        explanations: explanations
      }]);
  
      setStep(prevStep => prevStep + 1);
      setCurrentStage({ row: i, col: j });
      setCurrentSubStage(k + 1);
    } else {
      setIsRunning(false);
      setHighlightA([]);
      setHighlightB([]);
      setHighlightResult([]);
      setExplanations(prevExplanations => [...prevExplanations, {
        initial: "Matrix multiplication completed.",
        steps: [],
        result: ""
      }]);
    }
  }, [step, totalSteps, matrixA, matrixB, generateExplanation, result, explanations]);

  useEffect(() => {
    let timer;
    if (isRunning && step < totalSteps) {
      timer = setTimeout(performStep, 2000);
    }
    return () => clearTimeout(timer);
  }, [isRunning, step, totalSteps, performStep]);

  const handleInputChange = (matrix, i, j, value) => {
    const setter = matrix === 'A' ? setMatrixA : setMatrixB;
    setter(prevMatrix => {
      const newMatrix = [...prevMatrix];
      newMatrix[i] = [...newMatrix[i]];
      newMatrix[i][j] = value === '' ? '' : Number(value);
      return newMatrix;
    });
    setStep(0);
    setHighlightA([]);
    setHighlightB([]);
    setIntermediateResult(0);
    setIsRunning(false);
    setHistory([]);
    setCurrentStage({ row: 0, col: 0 });
    setCurrentSubStage(0);
    setStageSum(0);
    setExplanation('');
  };

  const handleGenerateRandom = (matrix) => {
    const min = parseInt(prompt(`Enter minimum value for random numbers in Matrix ${matrix}:`, "0")) || 0;
    const max = parseInt(prompt(`Enter maximum value for random numbers in Matrix ${matrix}:`, "10")) || 10;
  
    const generateRandomMatrix = (rows, cols) => {
      return Array(rows).fill().map(() => 
        Array(cols).fill().map(() => Math.floor(Math.random() * (max - min + 1) + min))
      );
    };
  
    if (matrix === 'A') {
      setMatrixA(generateRandomMatrix(matrixA.length, matrixA[0].length));
    } else {
      setMatrixB(generateRandomMatrix(matrixB.length, matrixB[0].length));
    }
  
    setResult(Array(matrixA.length).fill().map(() => Array(matrixB[0].length).fill(0)));
    setStep(0);
    setHighlightA([]);
    setHighlightB([]);
    setIntermediateResult(0);
    setIsRunning(false);
    setHistory([]);
    setError('');
    setCurrentStage({ row: 0, col: 0 });
    setCurrentSubStage(0);
    setStageSum(0);
    setExplanation('');
  };

  

  // const start = () => {
  //   if (matrixA[0].length !== matrixB.length) {
  //     setError('Cannot multiply: Number of columns in Matrix A must equal number of rows in Matrix B');
  //     return;
  //   }
  //   setError('');
  //   setExplanations([]); // Clear explanations when starting
  //   setIsRunning(true);
  // };

  const start = () => {
    if (matrixA[0].length !== matrixB.length) {
      setError('Cannot multiply: Number of columns in Matrix A must equal number of rows in Matrix B');
      return;
    }
    setError('');
    setExplanations([]);
    setIsRunning(true);
    setAnimationStarted(true);  // Add this line
  };

  const pause = () => setIsRunning(false);

  

  // const reset = () => {
  //   setStep(0);
  //   setResult(Array(matrixA.length).fill().map(() => Array(matrixB[0].length).fill(0)));
  //   setHighlightA([]);
  //   setHighlightB([]);
  //   setIntermediateResult(0);
  //   setIsRunning(false);
  //   setHistory([]);
  //   setCurrentStage({ row: 0, col: 0 });
  //   setCurrentSubStage(0);
  //   setStageSum(0);
  //   setExplanation('');
  //   setHighlightResult([]);
  //   setExplanations([]); // Clear explanations
  // };
   
  const reset = () => {
    setStep(0);
    setResult(Array(matrixA.length).fill().map(() => Array(matrixB[0].length).fill(0)));
    setHighlightA([]);
    setHighlightB([]);
    setIntermediateResult(0);
    setIsRunning(false);
    setHistory([]);
    setCurrentStage({ row: 0, col: 0 });
    setCurrentSubStage(0);
    setStageSum(0);
    setExplanation('');
    setHighlightResult([]);
    setExplanations([]);
    setAnimationStarted(false);  // Add this line
  };
  
  
  

  const stepBack = useCallback(() => {
    if (step > 0) {
      const newStep = step - 1;
      setStep(newStep);
  
      if (newStep === 0) {
        setResult(Array(matrixA.length).fill().map(() => Array(matrixB[0].length).fill(0)));
        setHighlightA([]);
        setHighlightB([]);
        setHighlightResult([]);
        setCurrentStage({ row: 0, col: 0 });
        setCurrentSubStage(0);
        setExplanations([]);
        setHistory([]);
      } else {
        const prevState = history[newStep - 1];
        
        if (prevState) {
          setResult(prevState.result);
          setHighlightA(prevState.highlightA);
          setHighlightB(prevState.highlightB);
          setHighlightResult(prevState.highlightResult);
          setCurrentStage(prevState.currentStage);
          setCurrentSubStage(prevState.currentSubStage);
          setExplanations(prevState.explanations);
        }
      }
  
      setHistory(prev => prev.slice(0, newStep));
    }
  }, [step, matrixA, matrixB, history]);



  const resetToInitial = () => {
    setMatrixA([[1, 2], [3, 4]]);
    setMatrixB([[5, 6], [7, 8]]);
    setResult([[0, 0], [0, 0]]);
    setStep(0);
    setHighlightA([]);
    setHighlightB([]);
    setIntermediateResult(0);
    setIsRunning(false);
    setHistory([]);
    setError('');
    setCurrentStage({ row: 0, col: 0 });
    setCurrentSubStage(0);
    setStageSum(0);
    setExplanation('');
    setHighlightResult([]);
  };

  const initializeToZero = () => {
    const newA = matrixA.map(row => row.map(() => 0));
    const newB = matrixB.map(row => row.map(() => 0));
    setMatrixA(newA);
    setMatrixB(newB);
    setResult(Array(matrixA.length).fill().map(() => Array(matrixB[0].length).fill(0)));
    setStep(0);
    setHighlightA([]);
    setHighlightB([]);
    setIntermediateResult(0);
    setIsRunning(false);
    setHistory([]);
    setError('');
    setCurrentStage({ row: 0, col: 0 });
    setCurrentSubStage(0);
    setStageSum(0);
    setExplanation('');
    setHighlightResult([]);
  };

  // return (
  //   <div>
  //     {/* <h2>Matrix Multiplication Visualization</h2> */}
  //     <button onClick={resetToInitial}>Reset to Initial</button>
  //       <button onClick={initializeToZero}>Initialize to Zero</button>
  //     {error && <div style={{ color: 'red' }}>{error}</div>}
  //     <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
       

  //         <MatrixDisplay 
  //           matrix={matrixA} 
  //           highlight={highlightA} 
  //           highlightRow={currentStage.row}
  //           highlightCol={-1}  // We don't highlight columns in matrix A
  //           label="Matrix A" 
  //           handleInputChange={(i, j, value) => handleInputChange('A', i, j, value)}
  //           handleMatrixResize={(rows, cols) => handleMatrixResize('A', rows, cols)}
  //           handleGenerateRandom={() => handleGenerateRandom('A')}
  //         />
  //       <div style={{ display: 'flex', alignItems: 'center' }}>×</div>
        

  //         <MatrixDisplay 
  //           matrix={matrixB} 
  //           highlight={highlightB} 
  //           highlightRow={-1}  // We don't highlight rows in matrix B
  //           highlightCol={currentStage.col}
  //           label="Matrix B" 
  //           handleInputChange={(i, j, value) => handleInputChange('B', i, j, value)}
  //           handleMatrixResize={(rows, cols) => handleMatrixResize('B', rows, cols)}
  //           handleGenerateRandom={() => handleGenerateRandom('B')}
  //         />
  //       <div style={{ display: 'flex', alignItems: 'center' }}>=</div>
  //       {/* <MatrixDisplay matrix={result} highlight={[]} label="Result" isResult={true} /> */}
  //       <MatrixDisplay 
  //         matrix={result} 
  //         highlight={highlightResult} 
  //         label="Matrix R" 
  //         isResult={true} 
  //       />
  //     </div>
  //     <br></br>
  //     <br></br>
      
  //     <div>
  //       <button onClick={start} disabled={isRunning || step === totalSteps || error}>Start</button>
  //       <button onClick={pause} disabled={!isRunning}>Pause</button>
  //       <button onClick={reset}>Reset</button>
  //       <button onClick={performStep} disabled={isRunning || step === totalSteps || error}>Step Forward</button>
  //       <button onClick={stepBack} disabled={isRunning || step === 0}>Step Back</button>
       
  //     </div>
  //     <br></br>
      
  //     {step > 0 && (
  //         <div>
  //           <h2>Calculating Element  R[{currentStage.row + 1}][{currentStage.col + 1}] of The Result Matrix</h2>
  //           <h3>Multiplying  Row #{currentStage.row + 1} of Matrix A by Column #{currentStage.col + 1} of Matrix B and Calculating the Dot Product (Scalar Product)</h3>
  //           {/* <p>Current Sub-stage: {currentSubStage}</p> */}
  //           {/* <h3>Explanation: {explanation}</h3> */}
  //            {/* <h3>Explanations:</h3>
  //             {explanations.map((explanation, index) => (
  //               <p key={index}>{explanation}</p>
  //             ))} */}
  //           {/* <h3>Current Explanation:</h3>
  //             {explanations.length > 0 ? (
  //               <p key={explanations.length}>{explanations[explanations.length - 1]}</p>
  //             ) : (
  //               <p>No steps performed yet.</p>
  //             )} */}
  //             <div>
  //               {/* <h3>Current Explanation:</h3> */}
  //               {explanations.length > 0 && (
  //                 <div>
  //                   <p>{explanations[explanations.length - 1].initial}</p>
  //                   {explanations[explanations.length - 1].steps.map((step, index) => (
  //                     <p key={index}>{step}</p>
  //                   ))}
  //                   {explanations[explanations.length - 1].result && (
  //                     <p>{explanations[explanations.length - 1].result}</p>
  //                   )}
  //                 </div>
  //               )}
  //             </div>
  //         </div>
  //       )}
  //   </div>
  // );

  // return (
  //   <div className={styles.container}>
  //     <div className={styles.buttonContainer}>
  //       <button className={styles.button} onClick={resetToInitial}>Reset to Initial</button>
  //       <button className={styles.button} onClick={initializeToZero}>Initialize to Zero</button>
  //     </div>
  //     {error && <div className={styles.error}>{error}</div>}
  //     <div className={styles.matrixContainer}>
  //       <MatrixDisplay 
  //         matrix={matrixA} 
  //         highlight={highlightA} 
  //         highlightRow={currentStage.row}
  //         highlightCol={-1}
  //         label="Matrix A" 
  //         handleInputChange={(i, j, value) => handleInputChange('A', i, j, value)}
  //         handleMatrixResize={(rows, cols) => handleMatrixResize('A', rows, cols)}
  //         handleGenerateRandom={() => handleGenerateRandom('A')}
  //       />
  //       <div>×</div>
  //       <MatrixDisplay 
  //         matrix={matrixB} 
  //         highlight={highlightB} 
  //         highlightRow={-1}
  //         highlightCol={currentStage.col}
  //         label="Matrix B" 
  //         handleInputChange={(i, j, value) => handleInputChange('B', i, j, value)}
  //         handleMatrixResize={(rows, cols) => handleMatrixResize('B', rows, cols)}
  //         handleGenerateRandom={() => handleGenerateRandom('B')}
  //       />
  //       <div>=</div>
  //       <MatrixDisplay 
  //         matrix={result} 
  //         highlight={highlightResult} 
  //         label="Matrix R" 
  //         isResult={true} 
  //       />
  //     </div>
      
  //     <div className={styles.buttonContainer}>
  //       <button className={styles.button} onClick={start} disabled={isRunning || step === totalSteps || error}>Start</button>
  //       <button className={styles.button} onClick={pause} disabled={!isRunning}>Pause</button>
  //       <button className={styles.button} onClick={reset}>Reset</button>
  //       <button className={styles.button} onClick={performStep} disabled={isRunning || step === totalSteps || error}>Step Forward</button>
  //       <button className={styles.button} onClick={stepBack} disabled={isRunning || step === 0}>Step Back</button>
  //     </div>
      
  //     {step > 0 && (
  //       <div className={styles.explanation}>
  //         <h2>Calculating Element R[{currentStage.row + 1}][{currentStage.col + 1}] of The Result Matrix</h2>
  //         <h3>Multiplying Row #{currentStage.row + 1} of Matrix A by Column #{currentStage.col + 1} of Matrix B and Calculating the Dot Product (Scalar Product)</h3>
  //         <div>
  //           {explanations.length > 0 && (
  //             <div>
  //               <p>{explanations[explanations.length - 1].initial}</p>
  //               {explanations[explanations.length - 1].steps.map((step, index) => (
  //                 <p key={index}>{step}</p>
  //               ))}
  //               {explanations[explanations.length - 1].result && (
  //                 <p>{explanations[explanations.length - 1].result}</p>
  //               )}
  //             </div>
  //           )}
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button className={`${styles.button} ${styles.buttonSecondary}`} onClick={resetToInitial}>Reset to Initial</button>
        <button className={`${styles.button} ${styles.buttonTertiary}`} onClick={initializeToZero}>Initialize to Zero</button>
      </div>
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles.matrixContainer}>
        {/* <MatrixDisplay 
          matrix={matrixA} 
          highlight={highlightA} 
          highlightRow={currentStage.row}
          highlightCol={-1}
          label="Matrix A" 
          handleInputChange={(i, j, value) => handleInputChange('A', i, j, value)}
          handleMatrixResize={(rows, cols) => handleMatrixResize('A', rows, cols)}
          handleGenerateRandom={() => handleGenerateRandom('A')}
        /> */}

        <MatrixDisplay 
          matrix={matrixA} 
          highlight={highlightA} 
          highlightRow={animationStarted ? currentStage.row : -1}  // Modify this line
          highlightCol={-1}
          label="Matrix A" 
          handleInputChange={(i, j, value) => handleInputChange('A', i, j, value)}
          handleMatrixResize={(rows, cols) => handleMatrixResize('A', rows, cols)}
          handleGenerateRandom={() => handleGenerateRandom('A')}
        />
        <div>×</div>
        {/* <MatrixDisplay 
          matrix={matrixB} 
          highlight={highlightB} 
          highlightRow={-1}
          highlightCol={currentStage.col}
          label="Matrix B" 
          handleInputChange={(i, j, value) => handleInputChange('B', i, j, value)}
          handleMatrixResize={(rows, cols) => handleMatrixResize('B', rows, cols)}
          handleGenerateRandom={() => handleGenerateRandom('B')}
        /> */}
        <MatrixDisplay 
            matrix={matrixB} 
            highlight={highlightB} 
            highlightRow={-1}
            highlightCol={animationStarted ? currentStage.col : -1}  // Modify this line
            label="Matrix B" 
            handleInputChange={(i, j, value) => handleInputChange('B', i, j, value)}
            handleMatrixResize={(rows, cols) => handleMatrixResize('B', rows, cols)}
            handleGenerateRandom={() => handleGenerateRandom('B')}
          />
        <div>=</div>
        <MatrixDisplay 
          matrix={result} 
          highlight={highlightResult} 
          label="Matrix R" 
          isResult={true} 
        />
      </div>
      
      <div className={styles.buttonContainer}>
        <button className={`${styles.button} ${styles.buttonPrimary}`} onClick={start} disabled={isRunning || step === totalSteps || error}>Start</button>
        <button className={`${styles.button} ${styles.buttonPrimary}`} onClick={pause} disabled={!isRunning}>Pause</button>
        <button className={`${styles.button} ${styles.buttonSecondary}`} onClick={reset}>Reset</button>
        <button className={`${styles.button} ${styles.buttonPrimary}`} onClick={performStep} disabled={isRunning || step === totalSteps || error}>Step Forward</button>
        <button className={`${styles.button} ${styles.buttonPrimary}`} onClick={stepBack} disabled={isRunning || step === 0}>Step Back</button>
      </div>
      
      {step > 0 && (
        <div className={styles.explanation}>
          <h2>Calculating Element R[{currentStage.row + 1}][{currentStage.col + 1}] of The Result Matrix</h2>
          <h3>Multiplying Row #{currentStage.row + 1} of Matrix A by Column #{currentStage.col + 1} of Matrix B and Calculating the Dot Product (Scalar Product)</h3>
          <div>
            {explanations.length > 0 && (
              <div>
                <p>{explanations[explanations.length - 1].initial}</p>
                {explanations[explanations.length - 1].steps.map((step, index) => (
                  <p key={index}>{step}</p>
                ))}
                {explanations[explanations.length - 1].result && (
                  <p>{explanations[explanations.length - 1].result}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );



};


const MatrixDisplay = ({ matrix, highlight, highlightRow, highlightCol, label, handleInputChange, handleMatrixResize, handleGenerateRandom, isResult = false }) => {
  const [rows, setRows] = useState(matrix.length);
  const [cols, setCols] = useState(matrix[0].length);

  useEffect(() => {
    setRows(matrix.length);
    setCols(matrix[0].length);
  }, [matrix]);

  // return (
  //   <div>
  //     <h3>{label}</h3>
  //     {!isResult && (
  //       <div>
  //         Rows: <input type="number" value={rows} onChange={(e) => setRows(parseInt(e.target.value))} min="1" max="10" />
  //         Cols: <input type="number" value={cols} onChange={(e) => setCols(parseInt(e.target.value))} min="1" max="10" />
  //         <button onClick={() => handleMatrixResize(rows, cols)}>Resize</button>
  //         <button onClick={handleGenerateRandom}>Generate Random</button>
  //       </div>
  //     )}
  //     <table>
  //       <tbody>
  //         {matrix.map((row, i) => (
  //           <tr key={i}>
  //             {row.map((cell, j) => (
  //               <td 
  //                 key={j} 
  //                 style={{
  //                   padding: '5px',
  //                   border: '1px solid black',
  //                   backgroundColor: 
  //                     (highlight[0] === i && highlight[1] === j) ? 'red' :
  //                     (!isResult && ((highlightRow === i && label === "Matrix A") || (highlightCol === j && label === "Matrix B"))) ? 'yellow' : 'white'
  //                 }}
  //               >
  //                 <input
  //                   type="text"
  //                   value={cell}
  //                   onChange={(e) => !isResult && handleInputChange(i, j, e.target.value)}
  //                   readOnly={isResult}
  //                   style={{ width: '50px' }}
  //                 />
  //               </td>
  //             ))}
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // );

  // return (
  //   <div className={styles.matrix}>
  //     <h3 className={styles.matrixTitle}>{label}</h3>
  //     {!isResult && (
  //       <div className={styles.matrixControls}>
  //         <input type="number" value={rows} onChange={(e) => setRows(parseInt(e.target.value))} min="1" max="10" />
  //         <input type="number" value={cols} onChange={(e) => setCols(parseInt(e.target.value))} min="1" max="10" />
  //         <button className={styles.button} onClick={() => handleMatrixResize(rows, cols)}>Resize</button>
  //         <button className={styles.button} onClick={handleGenerateRandom}>Random</button>
  //       </div>
  //     )}
  //     <table className={styles.matrixTable}>
  //       <tbody>
  //         {matrix.map((row, i) => (
  //           <tr key={i}>
  //             {row.map((cell, j) => (
  //               <td 
  //                 key={j} 
  //                 className={styles.matrixCell}
  //                 style={{
  //                   backgroundColor: 
  //                     (highlight[0] === i && highlight[1] === j) ? '#ff6b6b' :
  //                     (!isResult && ((highlightRow === i && label === "Matrix A") || (highlightCol === j && label === "Matrix B"))) ? '#feca57' : 'white'
  //                 }}
  //               >
  //                 <input
  //                   className={styles.matrixInput}
  //                   type="text"
  //                   value={cell}
  //                   onChange={(e) => !isResult && handleInputChange(i, j, e.target.value)}
  //                   readOnly={isResult}
  //                 />
  //               </td>
  //             ))}
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // );
  return (
    <div className={styles.matrix}>
      <h3 className={styles.matrixTitle}>{label}</h3>
      {!isResult && (
        <div className={styles.matrixControls}>
          <input className={styles.rows} type="number" value={rows} onChange={(e) => setRows(parseInt(e.target.value))} min="1" max="10" />
          <input className={styles.rows} type="number" value={cols} onChange={(e) => setCols(parseInt(e.target.value))} min="1" max="10" />
          <button className={`${styles.button} ${styles.buttonPrimary}`} onClick={() => handleMatrixResize(rows, cols)}>Resize</button>
          <button className={`${styles.button} ${styles.buttonTertiary}`} onClick={handleGenerateRandom}>Random</button>
        </div>
      )}
      <table className={styles.matrixTable}>
        <tbody>
          {matrix.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td 
                  key={j} 
                  className={styles.matrixCell}
                  style={{
                    backgroundColor: 
                      (highlight[0] === i && highlight[1] === j) ? '#ff6b6b' :
                      (!isResult && ((highlightRow === i && label === "Matrix A") || (highlightCol === j && label === "Matrix B"))) ? '#ffeb3b' : 'white'
                  }}
                >
                  <input
                    className={styles.matrixInput}
                    type="text"
                    value={cell}
                    onChange={(e) => !isResult && handleInputChange(i, j, e.target.value)}
                    readOnly={isResult}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );


};

export default MatrixMultiplication;
