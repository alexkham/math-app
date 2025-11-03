import React, { useState, useEffect, useRef } from 'react';

const PoissonTable = () => {
  const [searchLambda, setSearchLambda] = useState('');
  const [searchX, setSearchX] = useState('');
  const [highlightCell, setHighlightCell] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [distributionType, setDistributionType] = useState('cumulative-left');
  const [controlsHeight, setControlsHeight] = useState(0);
  const controlsRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (controlsRef.current) {
        setControlsHeight(controlsRef.current.offsetHeight);
      }
    };
    updateHeight();
    const timer = setTimeout(updateHeight, 100);
    return () => clearTimeout(timer);
  }, [errorMessage]);

  // Lambda values from 0.1 to 10
  const lambdaValues = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0];

  // Factorial function
  const factorial = (n) => {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  // Exact Poisson probability: P(X = x) = (λ^x * e^(-λ)) / x!
  const exactPoisson = (lambda, x) => {
    return (Math.pow(lambda, x) * Math.exp(-lambda)) / factorial(x);
  };

  // Cumulative left: P(X ≤ x)
  const cumulativeLeftPoisson = (lambda, x) => {
    let sum = 0;
    for (let i = 0; i <= x; i++) {
      sum += exactPoisson(lambda, i);
    }
    return sum;
  };

  // Cumulative right: P(X ≥ x)
  const cumulativeRightPoisson = (lambda, x) => {
    return 1 - cumulativeLeftPoisson(lambda, x - 1);
  };

  const calculateProbability = (lambda, x) => {
    switch (distributionType) {
      case 'exact':
        return exactPoisson(lambda, x);
      case 'cumulative-left':
        return cumulativeLeftPoisson(lambda, x);
      case 'cumulative-right':
        return cumulativeRightPoisson(lambda, x);
      default:
        return 0;
    }
  };

  // Generate table data for x from 0 to 30
  const generateTableData = () => {
    const maxX = 30;
    const tableData = [];

    for (let x = 0; x <= maxX; x++) {
      const row = {
        x: x,
        probabilities: lambdaValues.map(lambda => calculateProbability(lambda, x))
      };
      tableData.push(row);
    }

    return tableData;
  };

  const tableData = generateTableData();

  const handleSearch = () => {
    setErrorMessage('');
    
    const lambda = parseFloat(searchLambda);
    const x = parseInt(searchX);

    if (isNaN(lambda) || isNaN(x)) {
      setErrorMessage('Please enter valid numbers for λ and x');
      return;
    }

    if (lambda <= 0 || lambda > 15) {
      setErrorMessage('λ must be between 0 and 15');
      return;
    }

    if (x < 0 || x > 30) {
      setErrorMessage('x must be between 0 and 30');
      return;
    }

    const rowIndex = x;
    
    let colIndex = -1;
    let minDiff = Infinity;
    lambdaValues.forEach((lambdaVal, idx) => {
      const diff = Math.abs(lambdaVal - lambda);
      if (diff < minDiff) {
        minDiff = diff;
        colIndex = idx;
      }
    });
    
    if (rowIndex !== -1 && colIndex !== -1) {
      setHighlightCell({ row: rowIndex, col: colIndex });
      
      if (Math.abs(lambdaValues[colIndex] - lambda) > 0.05) {
        setErrorMessage(`Closest match: λ=${lambdaValues[colIndex].toFixed(1)}`);
      }
      
      setTimeout(() => {
        const element = document.getElementById(`row-${rowIndex}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  };

  const clearSearch = () => {
    setSearchLambda('');
    setSearchX('');
    setHighlightCell(null);
    setErrorMessage('');
  };

  const getDistributionLabel = () => {
    switch (distributionType) {
      case 'exact':
        return 'P(X = x)';
      case 'cumulative-left':
        return 'P(X ≤ x)';
      case 'cumulative-right':
        return 'P(X ≥ x)';
      default:
        return '';
    }
  };

  const getDistributionDescription = () => {
    switch (distributionType) {
      case 'exact':
        return 'Probability of exactly x events occurring';
      case 'cumulative-left':
        return 'Probability of at most x events occurring (x or fewer)';
      case 'cumulative-right':
        return 'Probability of at least x events occurring (x or more)';
      default:
        return '';
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fff' }}>
      <style>{`
        body {
          margin: 0;
        }

        .controls-section {
          position: sticky;
          top: 0;
          background: white;
          z-index: 100;
          padding: 20px 20px 0 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .controls-content {
          padding-bottom: 10px;
        }
        
        .table-section {
          padding: 0 20px 20px 20px;
        }
        
        .table-container {
          overflow-x: auto;
        }
        
        .poisson-table {
          border-collapse: collapse;
          font-size: 10px;
          width: 100%;
        }
        
        .poisson-table thead tr th {
          background-color: #ffd814;
          color: #333;
          font-weight: bold;
          padding: 6px 3px;
          border: 1px solid #999;
          text-align: center;
          position: sticky;
          top: 0;
          z-index: 90;
        }
        
        .poisson-table td {
          padding: 4px 3px;
          border: 1px solid #ddd;
          text-align: center;
        }
        
        .x-col {
          background-color: #e0e0e0;
          font-weight: bold;
          position: sticky;
          left: 0;
          z-index: 50;
          min-width: 45px;
        }

        .poisson-table thead tr th.x-col {
          z-index: 95;
        }
        
        .poisson-table tbody tr:hover td {
          background-color: #f5f5f5;
        }
        
        .highlight-cell {
          background-color: #ffeb3b !important;
          border: 2px solid #ff9800 !important;
          font-weight: bold;
        }
        
        .prob-cell {
          cursor: pointer;
          position: relative;
          min-width: 50px;
        }
        
        .prob-cell:hover {
          background-color: #e3f2fd !important;
        }
        
        .tooltip {
          visibility: hidden;
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          background-color: #333;
          color: white;
          padding: 8px 12px;
          border-radius: 4px;
          font-size: 11px;
          white-space: nowrap;
          z-index: 1000;
          margin-bottom: 5px;
        }
        
        .prob-cell:hover .tooltip {
          visibility: visible;
        }
        
        input {
          padding: 8px;
          margin: 0 5px;
          border: 1px solid #2196F3;
          border-radius: 4px;
          font-size: 14px;
          width: 120px;
        }
        
        button {
          padding: 8px 16px;
          margin: 0 5px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }
        
        .search-btn {
          background-color: #2196F3;
          color: white;
        }
        
        .clear-btn {
          background-color: #757575;
          color: white;
        }
        
        .search-btn:hover {
          background-color: #1976D2;
        }
        
        .clear-btn:hover {
          background-color: #616161;
        }

        .error-message {
          color: #d32f2f;
          background-color: #ffebee;
          padding: 10px;
          border-radius: 4px;
          margin-top: 10px;
          text-align: center;
          font-size: 14px;
        }

        .distribution-buttons {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 15px;
        }

        .dist-btn {
          padding: 10px 20px;
          border: 2px solid #2196F3;
          background-color: white;
          color: #2196F3;
          font-size: 15px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dist-btn:hover {
          background-color: #e3f2fd;
        }

        .dist-btn.active {
          background-color: #2196F3;
          color: white;
        }

        .distribution-info {
          text-align: center;
          margin: 10px 0;
          padding: 10px;
          background-color: #e3f2fd;
          border-radius: 4px;
        }

        .distribution-info h3 {
          margin: 0 0 5px 0;
          color: #1976D2;
          font-size: 18px;
        }

        .distribution-info p {
          margin: 0;
          color: #555;
          font-size: 13px;
        }
      `}</style>

      <div className="controls-section" ref={controlsRef}>
        <div className="controls-content">
          <h2 style={{ textAlign: 'center', margin: '0 0 15px 0', color: '#333' }}>
            Poisson Distribution Table
          </h2>

          <div className="distribution-buttons">
            <button
              className={`dist-btn ${distributionType === 'exact' ? 'active' : ''}`}
              onClick={() => {
                setDistributionType('exact');
                setHighlightCell(null);
              }}
            >
              P(X = x)
            </button>
            <button
              className={`dist-btn ${distributionType === 'cumulative-left' ? 'active' : ''}`}
              onClick={() => {
                setDistributionType('cumulative-left');
                setHighlightCell(null);
              }}
            >
              P(X ≤ x)
            </button>
            <button
              className={`dist-btn ${distributionType === 'cumulative-right' ? 'active' : ''}`}
              onClick={() => {
                setDistributionType('cumulative-right');
                setHighlightCell(null);
              }}
            >
              P(X ≥ x)
            </button>
          </div>

          <div className="distribution-info">
            <h3>{getDistributionLabel()}</h3>
            <p>{getDistributionDescription()}</p>
          </div>
          
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <input
              type="number"
              placeholder="λ (lambda: 0.1-15)"
              value={searchLambda}
              onChange={(e) => setSearchLambda(e.target.value)}
              step="0.1"
              min="0.1"
              max="15"
            />
            <input
              type="number"
              placeholder="x (events: 0-30)"
              value={searchX}
              onChange={(e) => setSearchX(e.target.value)}
              min="0"
              max="30"
            />
            <button className="search-btn" onClick={handleSearch}>Find</button>
            <button className="clear-btn" onClick={clearSearch}>Clear</button>
          </div>
          
          {errorMessage && (
            <div className="error-message">
              {errorMessage}
            </div>
          )}
        </div>

        <table className="poisson-table" style={{ margin: 0, width: '100%'}}>
          <thead>
            <tr>
              <th className="x-col" style={{ backgroundColor: '#ffd814', position: 'static', width: '45px', minWidth: '45px', maxWidth: '45px' }}>x</th>
              {lambdaValues.map((lambda, idx) => (
                <th key={idx} style={{ backgroundColor: '#ffd814', position: 'static', width: '50px', minWidth: '50px' }}>
                  λ={lambda.toFixed(1)}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>

      <div className="table-section">
        <div className="table-container">
          <table className="poisson-table">
            <thead>
            </thead>
            <tbody>
              {tableData.map((row, rowIdx) => (
                <tr key={rowIdx} id={`row-${rowIdx}`}>
                  <td className="x-col">x= {row.x}</td>
                  {row.probabilities.map((prob, colIdx) => (
                    <td
                      key={colIdx}
                      className={`prob-cell ${
                        highlightCell && highlightCell.row === rowIdx && highlightCell.col === colIdx
                          ? 'highlight-cell'
                          : ''
                      }`}
                    >
                      {prob.toFixed(4)}
                      <span className="tooltip">
                        {getDistributionLabel()} = {prob.toFixed(6)}
                        <br />
                        x={row.x}, λ={lambdaValues[colIdx].toFixed(1)}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PoissonTable;