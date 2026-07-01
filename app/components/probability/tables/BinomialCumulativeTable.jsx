

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
  const headerScrollRef = useRef(null);
  const dataScrollRef = useRef(null);

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

  // Sync horizontal scroll between header and data
  useEffect(() => {
    const headerScroll = headerScrollRef.current;
    const dataScroll = dataScrollRef.current;

    if (!headerScroll || !dataScroll) return;

    const syncHeaderToData = (e) => {
      if (headerScroll) {
        headerScroll.scrollLeft = e.target.scrollLeft;
      }
    };

    const syncDataToHeader = (e) => {
      if (dataScroll) {
        dataScroll.scrollLeft = e.target.scrollLeft;
      }
    };

    dataScroll.addEventListener('scroll', syncHeaderToData);
    headerScroll.addEventListener('scroll', syncDataToHeader);

    return () => {
      dataScroll.removeEventListener('scroll', syncHeaderToData);
      headerScroll.removeEventListener('scroll', syncDataToHeader);
    };
  }, []);

  const pValues = [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 0.99];

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

  const tableData = React.useMemo(() => {
    const nValues = Array.from({length: 50}, (_, i) => i + 1);
    const data = [];

    nValues.forEach(n => {
      for (let x = 0; x <= n; x++) {
        const row = {
          n: n,
          x: x,
          showN: x === 0,
          probabilities: pValues.map(p => {
            const prob = calculateProbability(n, x, p);
            return Number(prob.toFixed(10));
          })
        };
        data.push(row);
      }
    });

    return data;
  }, [distributionType]);

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
        setErrorMessage(`Closest match found: p = ${pValues[colIndex].toFixed(2)}`);
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
        return 'Probability of getting exactly x successes in n trials';
      case 'cumulative-left':
        return 'Probability of getting at most x successes (x or fewer) in n trials';
      case 'cumulative-right':
        return 'Probability of getting at least x successes (x or more) in n trials';
      default:
        return '';
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fff' }}>
      <style jsx>{`
        .controls-section {
          position: sticky;
          top: 0;
          background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);
          z-index: 10;
          padding: 15px 0 0 0;
          width: 100%;
          box-shadow: 0 3px 10px rgba(0,0,0,0.08);
          border-bottom: 2px solid #e0e0e0;
        }

        .controls-content {
          padding: 0 20px 10px 20px;
        }
        
        .table-section {
          padding: 0 0 20px 0;
          background-color: #fafafa;
          overflow-x: auto;
        }
        
        .table-container {
          overflow-x: auto;
        }
        
        .binomial-table {
          border-collapse: collapse;
          font-size: 13px;
          width: 1470px;
          background: white;
          table-layout: fixed;
          border-spacing: 0;
        }
        
        .binomial-table th,
        .binomial-table td {
          box-sizing: border-box;
        }
        
        .binomial-table thead tr th {
          background: linear-gradient(135deg, #37474F 0%, #546E7A 100%);
          color: #ffffff;
          font-weight: 700;
          padding: 10px 8px;
          border: 1px solid #263238;
          text-align: center;
          font-size: 14px;
          letter-spacing: 0.3px;
        }
        
        .binomial-table td {
          padding: 8px 6px;
          border: 1px solid #e0e0e0;
          text-align: center;
          font-size: 13px;
        }
        
        .n-col {
          background-color: #f5f5f5;
          font-weight: 700;
          position: sticky;
          left: 0;
          z-index: 10;
          width: 35px;
          min-width: 35px;
          max-width: 35px;
          color: #37474F;
          border-right: 2px solid #bdbdbd;
          font-size: 13px;
        }
        
        .x-col {
          background-color: #fafafa;
          font-weight: 700;
          position: sticky;
          left: 35px;
          z-index: 10;
          width: 35px;
          min-width: 35px;
          max-width: 35px;
          color: #455A64;
          border-right: 2px solid #bdbdbd;
          font-size: 13px;
        }

        
        .binomial-table tbody tr:hover td {
          background-color: #f0f4f8;
        }
        
        .binomial-table tbody tr:hover td.n-col {
          background-color: #e8eaf6;
        }
        
        .binomial-table tbody tr:hover td.x-col {
          background-color: #ede7f6;
        }
        
        .highlight-cell {
          background-color: #FFD54F !important;
          border: 2px solid #FFA726 !important;
          font-weight: bold;
          box-shadow: 0 0 8px rgba(255, 167, 38, 0.5);
          color: #E65100;
        }
        
        .prob-cell {
          cursor: pointer;
          position: relative;
          width: 50px;
          min-width: 50px;
          max-width: 50px;
          font-family: Arial, sans-serif;
          color: #37474F;
          font-size: 13px;
          font-weight: 500;
          background-color: white;
        }
        
        .prob-cell:hover {
          background-color: #E3F2FD !important;
          font-weight: 600;
        }
        
        .tooltip {
          visibility: hidden;
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #37474F 0%, #455A64 100%);
          color: white;
          padding: 10px 14px;
          border-radius: 6px;
          font-size: 11px;
          white-space: nowrap;
          z-index: 20;
          margin-bottom: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          font-family: Arial, sans-serif;
        }

        .tooltip::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 6px solid transparent;
          border-top-color: #37474F;
        }
        
        .prob-cell:hover .tooltip {
          visibility: visible;
        }

        .input-group {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 10px;
        }

        .input-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .input-label {
          font-size: 11px;
          color: #546E7A;
          font-weight: 600;
          margin-bottom: 3px;
          margin-left: 4px;
        }
        
        input {
          padding: 8px 10px;
          border: 2px solid #90A4AE;
          border-radius: 6px;
          font-size: 14px;
          width: 170px;
          transition: all 0.3s ease;
          background-color: white;
          color: #37474F;
        }

        input:focus {
          outline: none;
          border-color: #1976D2;
          box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);
        }

        input::placeholder {
          color: #90A4AE;
          font-size: 12px;
        }
        
        button {
          padding: 8px 18px;
          margin: 0 5px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .search-btn {
          background: linear-gradient(135deg, #1565C0 0%, #1976D2 100%);
          color: white;
          box-shadow: 0 2px 6px rgba(25, 118, 210, 0.3);
        }
        
        .clear-btn {
          background: linear-gradient(135deg, #546E7A 0%, #607D8B 100%);
          color: white;
          box-shadow: 0 2px 6px rgba(84, 110, 122, 0.3);
        }
        
        .search-btn:hover {
          background: linear-gradient(135deg, #0D47A1 0%, #1565C0 100%);
          box-shadow: 0 4px 10px rgba(25, 118, 210, 0.4);
          transform: translateY(-1px);
        }
        
        .clear-btn:hover {
          background: linear-gradient(135deg, #455A64 0%, #546E7A 100%);
          box-shadow: 0 4px 10px rgba(84, 110, 122, 0.4);
          transform: translateY(-1px);
        }

        .n-group-border {
          border-top: 2px solid #78909C;
        }

        .error-message {
          color: #D32F2F;
          background: linear-gradient(135deg, #FFEBEE 0%, #FFCDD2 100%);
          padding: 8px 15px;
          border-radius: 6px;
          margin-top: 8px;
          text-align: center;
          font-size: 13px;
          border-left: 4px solid #D32F2F;
          font-weight: 500;
        }

        .distribution-buttons {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .dist-btn {
          padding: 8px 20px;
          border: 2px solid #1976D2;
          background-color: white;
          color: #1976D2;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 8px;
          letter-spacing: 0.5px;
          min-width: 120px;
        }

        .dist-btn:hover {
          background-color: #E3F2FD;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(25, 118, 210, 0.2);
        }

        .dist-btn.active {
          background: linear-gradient(135deg, #1565C0 0%, #1976D2 100%);
          color: white;
          border-color: #1565C0;
          box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);
        }

        .distribution-info {
          text-align: center;
          margin: 10px auto;
          padding: 10px 15px;
          background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%);
          border-radius: 8px;
          border-left: 4px solid #1976D2;
          max-width: 800px;
        }

        .distribution-info h3 {
          margin: 0 0 5px 0;
          color: #0D47A1;
          font-size: 17px;
          font-weight: 700;
        }

        .distribution-info p {
          margin: 0;
          color: #37474F;
          font-size: 13px;
          line-height: 1.5;
        }

        .help-text {
          text-align: center;
          color: #607D8B;
          font-size: 12px;
          margin-top: 6px;
          font-style: italic;
        }
      `}</style>

      <div className="controls-section" ref={controlsRef}>
        <div className="controls-content">
          {/* <h2 style={{ 
            textAlign: 'center', 
            margin: '0 0 12px 0', 
            color: '#37474F',
            fontSize: '22px',
            fontWeight: '700'
          }}>
            Binomial Distribution Probability Table
          </h2> */}

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
          
          <div className="input-group">
            <div className="input-wrapper">
              <label className="input-label">Number of Trials (n)</label>
              <input
                type="number"
                placeholder="e.g., 10"
                value={searchN}
                onChange={(e) => setSearchN(e.target.value)}
                min="1"
                max="50"
              />
            </div>
            <div className="input-wrapper">
              <label className="input-label">Number of Successes (x)</label>
              <input
                type="number"
                placeholder="e.g., 3"
                value={searchX}
                onChange={(e) => setSearchX(e.target.value)}
                min="0"
              />
            </div>
            <div className="input-wrapper">
              <label className="input-label">Success Probability (p)</label>
              <input
                type="number"
                placeholder="e.g., 0.25"
                value={searchP}
                onChange={(e) => setSearchP(e.target.value)}
                step="0.01"
                min="0"
                max="1"
              />
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <button className="search-btn" onClick={handleSearch}>Find Probability</button>
            <button className="clear-btn" onClick={clearSearch}>Clear All</button>
          </div>

          <p className="help-text">
            💡 Tip: Hover over any cell to see detailed probability information
          </p>
          
          {errorMessage && (
            <div className="error-message">
              {errorMessage}
            </div>
          )}
        </div>

        <div ref={headerScrollRef} style={{ overflowX: 'hidden', width: '100%', padding: '0' }}>
          <table className="binomial-table" style={{ margin: '0 auto', width: '1470px' }}>
            <thead>
            <tr>
              <th className="n-col" style={{ width: '35px', minWidth: '35px', maxWidth: '35px' }}>n</th>
              <th className="x-col" style={{ width: '35px', minWidth: '35px', maxWidth: '35px' }}>x</th>
              {pValues.map((p, idx) => (
                <th key={idx} style={{ width: '50px', minWidth: '50px', maxWidth: '50px' }}>
                  {p.toFixed(2)}
                </th>
              ))}
            </tr>
          </thead>
        </table>
        </div>
      </div>

      <div ref={dataScrollRef} style={{ overflowX: 'auto', backgroundColor: '#fafafa', paddingBottom: '20px' }}>
        <table className="binomial-table" style={{ margin: '0 auto', width: '1470px' }}>
          <tbody>
            {tableData.map((row, rowIdx) => (
              <tr key={rowIdx} id={`row-${rowIdx}`} className={row.showN ? 'n-group-border' : ''}>
                <td className="n-col" style={{ width: '35px', minWidth: '35px', maxWidth: '35px' }}>
                    {row.showN ? `n=${row.n}` : ''}
                  </td>
                  <td className="x-col" style={{ width: '35px', minWidth: '35px', maxWidth: '35px' }}>x={row.x}</td>
                  {row.probabilities.map((prob, colIdx) => (
                    <td
                      key={colIdx}
                      className={`prob-cell ${
                        highlightCell && highlightCell.row === rowIdx && highlightCell.col === colIdx
                          ? 'highlight-cell'
                          : ''
                      }`}
                      style={{ width: '50px', minWidth: '50px', maxWidth: '50px' }}
                    >
                      {prob.toFixed(4)}
                      <span className="tooltip">
                        <strong>{getDistributionLabel()}</strong> = {prob.toFixed(6)}
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
    );
  };

export default BinomialCumulativeTable;