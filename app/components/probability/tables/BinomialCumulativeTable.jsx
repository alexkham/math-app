
import React, { useState, useEffect, useRef } from 'react';

const BinomialCumulativeTable = () => {
  const [searchN, setSearchN] = useState('');
  const [searchX, setSearchX] = useState('');
  const [searchP, setSearchP] = useState('');
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

  const pValues = [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5];

  const binomialCoefficient = (n, k) => {
    if (k > n) return 0;
    if (k === 0 || k === n) return 1;
    let result = 1;
    for (let i = 1; i <= k; i++) {
      result *= (n - i + 1) / i;
    }
    return result;
  };

  const exactBinomial = (n, x, p) => {
    return binomialCoefficient(n, x) * Math.pow(p, x) * Math.pow(1 - p, n - x);
  };

  const cumulativeLeftBinomial = (n, x, p) => {
    let sum = 0;
    for (let i = 0; i <= x; i++) {
      sum += exactBinomial(n, i, p);
    }
    return sum;
  };

  const cumulativeRightBinomial = (n, x, p) => {
    let sum = 0;
    for (let i = x; i <= n; i++) {
      sum += exactBinomial(n, i, p);
    }
    return sum;
  };

  const calculateProbability = (n, x, p) => {
    switch (distributionType) {
      case 'exact':
        return exactBinomial(n, x, p);
      case 'cumulative-left':
        return cumulativeLeftBinomial(n, x, p);
      case 'cumulative-right':
        return cumulativeRightBinomial(n, x, p);
      default:
        return 0;
    }
  };

  const generateTableData = () => {
    const nValues = Array.from({length: 50}, (_, i) => i + 1);
    const tableData = [];

    nValues.forEach(n => {
      for (let x = 0; x <= n; x++) {
        const row = {
          n: n,
          x: x,
          showN: x === 0,
          probabilities: pValues.map(p => calculateProbability(n, x, p))
        };
        tableData.push(row);
      }
    });

    return tableData;
  };

  const tableData = generateTableData();

  const handleSearch = () => {
    setErrorMessage('');
    
    const n = parseInt(searchN);
    const x = parseInt(searchX);
    const p = parseFloat(searchP);

    if (isNaN(n) || isNaN(x) || isNaN(p)) {
      setErrorMessage('Please enter valid numbers for n, x, and p');
      return;
    }

    if (n < 1 || n > 50) {
      setErrorMessage('n must be between 1 and 50');
      return;
    }

    if (x < 0 || x > n) {
      setErrorMessage(`x must be between 0 and ${n} (cannot exceed n)`);
      return;
    }

    if (p < 0 || p > 1) {
      setErrorMessage('p must be between 0 and 1');
      return;
    }

    const rowIndex = tableData.findIndex(row => row.n === n && row.x === x);
    
    let colIndex = -1;
    let minDiff = Infinity;
    pValues.forEach((pVal, idx) => {
      const diff = Math.abs(pVal - p);
      if (diff < minDiff) {
        minDiff = diff;
        colIndex = idx;
      }
    });
    
    if (rowIndex !== -1 && colIndex !== -1) {
      setHighlightCell({ row: rowIndex, col: colIndex });
      
      if (Math.abs(pValues[colIndex] - p) > 0.005) {
        setErrorMessage(`Closest match: p=${pValues[colIndex].toFixed(2)}`);
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
    setSearchN('');
    setSearchX('');
    setSearchP('');
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
        return 'Probability of getting exactly x successes';
      case 'cumulative-left':
        return 'Probability of getting at most x successes (x or fewer)';
      case 'cumulative-right':
        return 'Probability of getting at least x successes (x or more)';
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
        
        .binomial-table {
          border-collapse: collapse;
          font-size: 10px;
          width: 100%;
        }
        
        .binomial-table thead tr th {
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
        
        .binomial-table td {
          padding: 4px 3px;
          border: 1px solid #ddd;
          text-align: center;
        }
        
        .n-col {
          background-color: #e0e0e0;
          font-weight: bold;
          position: sticky;
          left: 0;
          z-index: 50;
          min-width: 35px;
        }
        
        .x-col {
          background-color: #f0f0f0;
          font-weight: bold;
          position: sticky;
          left: 35px;
          z-index: 50;
          min-width: 35px;
        }

        .binomial-table thead tr th.n-col,
        .binomial-table thead tr th.x-col {
          z-index: 95;
        }
        
        .binomial-table tbody tr:hover td {
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
          min-width: 45px;
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
          width: 200px;
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

        .n-group-border {
          border-top: 2px solid #666;
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
            Select the Type of Probability Calculation
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
              placeholder="n (trials: 1-50)"
              value={searchN}
              onChange={(e) => setSearchN(e.target.value)}
              min="1"
              max="50"
            />
            <input
              type="number"
              placeholder="x (successes: 0-n)"
              value={searchX}
              onChange={(e) => setSearchX(e.target.value)}
              min="0"
            />
            <input
              type="number"
              placeholder="p (probability: 0-1)"
              value={searchP}
              onChange={(e) => setSearchP(e.target.value)}
              step="0.01"
              min="0"
              max="1"
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

        <table className="binomial-table" style={{ margin: 0, width: '100%'}}>
          <thead>
            <tr>
              <th className="n-col" style={{ backgroundColor: '#ffd814', position: 'static', width: '35px', minWidth: '35px', maxWidth: '35px' }}>n</th>
              <th className="x-col" style={{ backgroundColor: '#ffd814', position: 'static', width: '35px', minWidth: '35px', maxWidth: '35px' }}>x</th>
              {pValues.map((p, idx) => (
                <th key={idx} style={{ backgroundColor: '#ffd814', position: 'static', width: '45px', minWidth: '45px' }}>{p.toFixed(2)}</th>
              ))}
            </tr>
          </thead>
        </table>
      </div>

      <div className="table-section">
        <div className="table-container">
          <table className="binomial-table">
            <thead>
            </thead>
            <tbody>
              {tableData.map((row, rowIdx) => (
                <tr key={rowIdx} id={`row-${rowIdx}`} className={row.showN ? 'n-group-border' : ''}>
                  <td className="n-col">
                    {row.showN ? `n= ${row.n}` : ''}
                  </td>
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
                        n={row.n}, x={row.x}, p={pValues[colIdx].toFixed(2)}
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

export default BinomialCumulativeTable;