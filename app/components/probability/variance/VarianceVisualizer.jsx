'use client';

import { useState, useEffect } from 'react';

export default function VarianceVisualizer() {
  const [dataPoints, setDataPoints] = useState([12, 15, 18, 20, 22, 25, 28]);
  const [varianceType, setVarianceType] = useState('population'); // 'population' or 'sample'
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [decimals, setDecimals] = useState(2);
  const [showTooltip, setShowTooltip] = useState(false);
  const [headerTooltip, setHeaderTooltip] = useState(null);

  // Calculate statistics
  const mean = dataPoints.reduce((sum, val) => sum + val, 0) / dataPoints.length;
  const deviations = dataPoints.map(val => val - mean);
  const squaredDeviations = deviations.map(dev => dev * dev);
  const sumSquaredDeviations = squaredDeviations.reduce((sum, val) => sum + val, 0);
  const divisor = varianceType === 'population' ? dataPoints.length : dataPoints.length - 1;
  const variance = sumSquaredDeviations / divisor;
  const standardDeviation = Math.sqrt(variance);
  const range = Math.max(...dataPoints) - Math.min(...dataPoints);

  // Chart dimensions
  const chartWidth = 700;
  const chartHeight = 500;
  const padding = 60;
  const plotWidth = chartWidth - 2 * padding;
  const plotHeight = chartHeight - 2 * padding;

  // Scales
  const minVal = Math.min(...dataPoints) - 5;
  const maxVal = Math.max(...dataPoints) + 5;
  const yScale = (val) => chartHeight - padding - ((val - minVal) / (maxVal - minVal)) * plotHeight;
  const xScale = (index) => padding + (index / (dataPoints.length - 1)) * plotWidth;

  const handleMouseDown = (index) => {
    setDraggedIndex(index);
  };

  const handleMouseMove = (e) => {
    if (draggedIndex === null) return;
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const value = minVal + ((chartHeight - padding - y) / plotHeight) * (maxVal - minVal);
    const newData = [...dataPoints];
    newData[draggedIndex] = Math.round(value * 100) / 100;
    setDataPoints(newData);
  };

  const handleMouseUp = () => {
    setDraggedIndex(null);
  };

  const addPoint = () => {
    setDataPoints([...dataPoints, mean]);
  };

  const removePoint = (index) => {
    if (dataPoints.length > 2) {
      setDataPoints(dataPoints.filter((_, i) => i !== index));
    }
  };

  const updateValue = (index, value) => {
    const newValue = parseFloat(value);
    if (!isNaN(newValue)) {
      const newData = [...dataPoints];
      newData[index] = newValue;
      setDataPoints(newData);
    }
  };

  const loadPreset = (preset) => {
    const presets = {
      low: [20, 21, 20, 22, 21, 20, 22],
      high: [10, 30, 15, 35, 12, 38, 8],
      outliers: [15, 16, 15, 17, 16, 15, 40]
    };
    setDataPoints(presets[preset]);
  };

  const resetData = () => {
    setDataPoints([12, 15, 18, 20, 22, 25, 28]);
  };

  const formatNum = (num) => num.toFixed(decimals);

  return (
    <div style={styles.container}>
      {/* <h1 style={styles.title}>Variance Visualizer</h1> */}
      
      <div style={styles.instructions}>
        <strong>How to use:</strong> Drag points on chart to change values • Edit values directly in table • Hover over points to see deviation • Add/remove points or try presets to explore variance behavior
      </div>

      <div style={styles.controls}>
        <div style={styles.varianceTypeFrame}>
          <div style={styles.varianceTypeGroup}>
            <span style={styles.varianceLabel}>Variance Type:</span>
            <div style={styles.radioGroup}>
              <label style={{
                ...styles.radioLabel,
                backgroundColor: varianceType === 'population' ? '#E3F2FD' : '#f9f9f9',
                borderColor: varianceType === 'population' ? '#2196F3' : '#ddd',
              }}>
                <input
                  type="radio"
                  checked={varianceType === 'population'}
                  onChange={() => setVarianceType('population')}
                  style={styles.radioInput}
                />
                <span style={styles.radioText}>Population (σ²)</span>
              </label>
              <label style={{
                ...styles.radioLabel,
                backgroundColor: varianceType === 'sample' ? '#E3F2FD' : '#f9f9f9',
                borderColor: varianceType === 'sample' ? '#2196F3' : '#ddd',
              }}>
                <input
                  type="radio"
                  checked={varianceType === 'sample'}
                  onChange={() => setVarianceType('sample')}
                  style={styles.radioInput}
                />
                <span style={styles.radioText}>Sample (s²)</span>
              </label>
            </div>
            <div 
              style={styles.infoIcon}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              ?
              {showTooltip && (
                <div style={styles.tooltip}>
                  <div style={styles.tooltipTitle}>Population vs Sample Variance</div>
                  <div style={styles.tooltipSection}>
                    <strong>Population Variance (σ²):</strong> Use when you have data for the entire population. Divides by n.
                  </div>
                  <div style={styles.tooltipSection}>
                    <strong>Sample Variance (s²):</strong> Use when estimating from a sample. Divides by (n-1) to provide unbiased estimate.
                  </div>
                  <div style={styles.tooltipExample}>
                    Example: All students in a class → Population. A sample of students → Sample.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div style={styles.controlGroup}>
          <label style={styles.label}>
            Decimals:
            <select 
              value={decimals} 
              onChange={(e) => setDecimals(parseInt(e.target.value))}
              style={styles.select}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>
        </div>

        <div style={styles.controlGroup}>
          <button onClick={addPoint} style={styles.button}>Add Point</button>
          <button onClick={resetData} style={styles.button}>Reset</button>
        </div>

        <div style={styles.controlGroup}>
          <span style={styles.label}>Presets:</span>
          <button onClick={() => loadPreset('low')} style={styles.smallButton}>Low Variance</button>
          <button onClick={() => loadPreset('high')} style={styles.smallButton}>High Variance</button>
          <button onClick={() => loadPreset('outliers')} style={styles.smallButton}>With Outliers</button>
        </div>
      </div>

      <div style={styles.statsPanel}>
        <div style={styles.statBox}>
          <div style={styles.statLabel}>Mean (μ)</div>
          <div style={styles.statValue}>{formatNum(mean)}</div>
        </div>
        <div style={styles.statBox}>
          <div style={styles.statLabel}>Variance ({varianceType === 'population' ? 'σ²' : 's²'})</div>
          <div style={styles.statValue}>{formatNum(variance)}</div>
        </div>
        <div style={styles.statBox}>
          <div style={styles.statLabel}>Std Dev ({varianceType === 'population' ? 'σ' : 's'})</div>
          <div style={styles.statValue}>{formatNum(standardDeviation)}</div>
        </div>
        <div style={styles.statBox}>
          <div style={styles.statLabel}>Range</div>
          <div style={styles.statValue}>{formatNum(range)}</div>
        </div>
        <div style={styles.statBox}>
          <div style={styles.statLabel}>n</div>
          <div style={styles.statValue}>{dataPoints.length}</div>
        </div>
      </div>

      <div style={styles.mainLayout}>
        <div style={styles.chartContainer}>
          <svg 
            width={chartWidth} 
            height={chartHeight}
            style={styles.svg}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Grid lines */}
            {[0, 1, 2, 3, 4].map(i => {
              const y = padding + (i * plotHeight / 4);
              const value = maxVal - (i * (maxVal - minVal) / 4);
              return (
                <g key={i}>
                  <line
                    x1={padding}
                    y1={y}
                    x2={chartWidth - padding}
                    y2={y}
                    stroke="#e0e0e0"
                    strokeWidth="1"
                  />
                  <text
                    x={padding - 10}
                    y={y + 5}
                    textAnchor="end"
                    style={styles.axisText}
                  >
                    {formatNum(value)}
                  </text>
                </g>
              );
            })}

            {/* Mean line */}
            <line
              x1={padding}
              y1={yScale(mean)}
              x2={chartWidth - padding}
              y2={yScale(mean)}
              stroke="#2196F3"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <text
              x={padding - 35}
              y={yScale(mean) + 15}
              style={styles.meanLabel}
            >
              Mean = {formatNum(mean)}
            </text>

            {/* Deviation lines and bars */}
            {dataPoints.map((value, index) => {
              const x = xScale(index);
              const y = yScale(value);
              const yMean = yScale(mean);
              const isHighlighted = highlightedIndex === index;
              const deviation = deviations[index];
              const color = deviation > 0 ? '#4CAF50' : '#F44336';
              const opacity = isHighlighted ? 1 : 0.3;

              return (
                <g key={index}>
                  {/* Deviation bar */}
                  <line
                    x1={x}
                    y1={yMean}
                    x2={x}
                    y2={y}
                    stroke={color}
                    strokeWidth="3"
                    opacity={opacity}
                  />
                  
                  {/* Deviation label */}
                  {isHighlighted && (
                    <text
                      x={x + 15}
                      y={(y + yMean) / 2}
                      style={styles.deviationLabel}
                    >
                      Δ = {formatNum(deviation)}
                    </text>
                  )}
                </g>
              );
            })}

            {/* Data points */}
            {dataPoints.map((value, index) => {
              const x = xScale(index);
              const y = yScale(value);
              const isHighlighted = highlightedIndex === index;

              return (
                <g 
                  key={index}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  onMouseLeave={() => setHighlightedIndex(null)}
                >
                  <circle
                    cx={x}
                    cy={y}
                    r={isHighlighted ? 8 : 6}
                    fill="#FF9800"
                    stroke="#fff"
                    strokeWidth="2"
                    style={{ cursor: 'move' }}
                    onMouseDown={() => handleMouseDown(index)}
                  />
                  <text
                    x={x}
                    y={y - 15}
                    textAnchor="middle"
                    style={styles.pointLabel}
                  >
                    {formatNum(value)}
                  </text>
                </g>
              );
            })}

            {/* X-axis labels */}
            {dataPoints.map((_, index) => (
              <text
                key={index}
                x={xScale(index)}
                y={chartHeight - padding + 20}
                textAnchor="middle"
                style={styles.axisText}
              >
                x{index + 1}
              </text>
            ))}
          </svg>
        </div>

        <div style={styles.rightPanel}>
          <div style={styles.tableSection}>
            <h3 style={styles.sectionTitle}>Data Points</h3>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th 
                    style={styles.th}
                    onMouseEnter={() => setHeaderTooltip('index')}
                    onMouseLeave={() => setHeaderTooltip(null)}
                  >
                    <div style={styles.thContent}>
                      #
                      {headerTooltip === 'index' && (
                        <div style={styles.headerTooltip}>
                          Index number of the data point in the dataset
                        </div>
                      )}
                    </div>
                  </th>
                  <th 
                    style={styles.th}
                    onMouseEnter={() => setHeaderTooltip('value')}
                    onMouseLeave={() => setHeaderTooltip(null)}
                  >
                    <div style={styles.thContent}>
                      Value
                      {headerTooltip === 'value' && (
                        <div style={styles.headerTooltip}>
                          The actual value of the data point (x<sub>i</sub>). Edit directly or drag on chart.
                        </div>
                      )}
                    </div>
                  </th>
                  <th 
                    style={styles.th}
                    onMouseEnter={() => setHeaderTooltip('deviation')}
                    onMouseLeave={() => setHeaderTooltip(null)}
                  >
                    <div style={styles.thContent}>
                      Deviation
                      {headerTooltip === 'deviation' && (
                        <div style={styles.headerTooltip}>
                          How far this value is from the mean: (x<sub>i</sub> - μ). Positive means above mean, negative means below.
                        </div>
                      )}
                    </div>
                  </th>
                  <th 
                    style={styles.th}
                    onMouseEnter={() => setHeaderTooltip('squared')}
                    onMouseLeave={() => setHeaderTooltip(null)}
                  >
                    <div style={styles.thContent}>
                      Squared Dev
                      {headerTooltip === 'squared' && (
                        <div style={styles.headerTooltip}>
                          The squared deviation: (x<sub>i</sub> - μ)². Squaring eliminates negative values and emphasizes larger deviations.
                        </div>
                      )}
                    </div>
                  </th>
                  <th style={styles.th}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {dataPoints.map((value, index) => (
                  <tr 
                    key={index} 
                    style={{
                      ...styles.tr,
                      backgroundColor: highlightedIndex === index ? '#FFF3E0' : 'transparent'
                    }}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    onMouseLeave={() => setHighlightedIndex(null)}
                  >
                    <td style={styles.td}>{index + 1}</td>
                    <td style={styles.td}>
                      <input
                        type="number"
                        value={value}
                        onChange={(e) => updateValue(index, e.target.value)}
                        style={styles.input}
                        step="0.01"
                      />
                    </td>
                    <td style={styles.td}>{formatNum(deviations[index])}</td>
                    <td style={styles.td}>{formatNum(squaredDeviations[index])}</td>
                    <td style={styles.td}>
                      <button 
                        onClick={() => removePoint(index)} 
                        style={styles.deleteButton}
                        disabled={dataPoints.length <= 2}
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr style={styles.tfootRow}>
                  <td colSpan="3" style={styles.tfootLabel}>Total Squared Deviations:</td>
                  <td style={styles.tfootValue}>{formatNum(sumSquaredDeviations)}</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div style={styles.calculationSection}>
            <h3 style={styles.sectionTitle}>Step-by-Step Calculation</h3>
            
            <div style={styles.step}>
              <div style={styles.stepNumber}>1</div>
              <div style={styles.stepContent}>
                <div style={styles.stepTitle}>Calculate the mean</div>
                <div style={styles.formula}>
                  μ = ({dataPoints.join(' + ')}) / {dataPoints.length} = {formatNum(mean)}
                </div>
              </div>
            </div>

            <div style={styles.step}>
              <div style={styles.stepNumber}>2</div>
              <div style={styles.stepContent}>
                <div style={styles.stepTitle}>Calculate deviations from mean</div>
                {dataPoints.map((value, index) => (
                  <div key={index} style={styles.calculation}>
                    x{index + 1} - μ = {formatNum(value)} - {formatNum(mean)} = {formatNum(deviations[index])}
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.step}>
              <div style={styles.stepNumber}>3</div>
              <div style={styles.stepContent}>
                <div style={styles.stepTitle}>Square each deviation</div>
                {deviations.map((dev, index) => (
                  <div key={index} style={styles.calculation}>
                    ({formatNum(dev)})² = {formatNum(squaredDeviations[index])}
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.step}>
              <div style={styles.stepNumber}>4</div>
              <div style={styles.stepContent}>
                <div style={styles.stepTitle}>Sum the squared deviations</div>
                <div style={styles.formula}>
                  Σ(x - μ)² = {squaredDeviations.map(v => formatNum(v)).join(' + ')} = {formatNum(sumSquaredDeviations)}
                </div>
              </div>
            </div>

            <div style={styles.step}>
              <div style={styles.stepNumber}>5</div>
              <div style={styles.stepContent}>
                <div style={styles.stepTitle}>
                  Divide by {varianceType === 'population' ? 'n' : 'n - 1'}
                </div>
                <div style={styles.formula}>
                  {varianceType === 'population' ? 'σ²' : 's²'} = {formatNum(sumSquaredDeviations)} / {divisor} = {formatNum(variance)}
                </div>
              </div>
            </div>

            <div style={styles.finalResult}>
              <div style={styles.resultLabel}>
                {varianceType === 'population' ? 'Population' : 'Sample'} Variance:
              </div>
              <div style={styles.resultValue}>{formatNum(variance)}</div>
            </div>

            <div style={styles.finalResult}>
              <div style={styles.resultLabel}>Standard Deviation:</div>
              <div style={styles.resultValue}>√{formatNum(variance)} = {formatNum(standardDeviation)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '15px',
    fontSize: '32px',
  },
  instructions: {
    backgroundColor: '#E3F2FD',
    padding: '10px 20px',
    borderRadius: '6px',
    marginBottom: '12px',
    fontSize: '14px',
    color: '#1565C0',
    lineHeight: '1.5',
    textAlign: 'center',
  },
  controls: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '12px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  varianceTypeFrame: {
    border: '2px solid #2196F3',
    borderRadius: '8px',
    padding: '8px 12px',
    backgroundColor: '#F5FAFF',
  },
  varianceTypeGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    position: 'relative',
  },
  varianceLabel: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
  },
  radioGroup: {
    display: 'flex',
    gap: '8px',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: '6px',
    border: '2px solid',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontSize: '14px',
    fontWeight: '500',
  },
  radioInput: {
    cursor: 'pointer',
    width: '16px',
    height: '16px',
  },
  radioText: {
    userSelect: 'none',
  },
  infoIcon: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#2196F3',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '13px',
    fontWeight: 'bold',
    cursor: 'help',
    position: 'relative',
    flexShrink: 0,
  },
  tooltip: {
    position: 'absolute',
    top: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#fff',
    border: '2px solid #2196F3',
    borderRadius: '8px',
    padding: '15px',
    width: '320px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    zIndex: 1000,
    fontSize: '13px',
    lineHeight: '1.5',
  },
  tooltipTitle: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: '10px',
    borderBottom: '1px solid #E3F2FD',
    paddingBottom: '6px',
  },
  tooltipSection: {
    marginBottom: '8px',
    color: '#333',
  },
  tooltipExample: {
    marginTop: '10px',
    padding: '8px',
    backgroundColor: '#F5F5F5',
    borderRadius: '4px',
    fontSize: '12px',
    color: '#555',
    fontStyle: 'italic',
  },
  controlGroup: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '14px',
    color: '#555',
  },
  select: {
    padding: '5px 10px',
    fontSize: '14px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  button: {
    padding: '6px 14px',
    fontSize: '14px',
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  smallButton: {
    padding: '5px 10px',
    fontSize: '13px',
    backgroundColor: '#757575',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  statsPanel: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    marginBottom: '12px',
    flexWrap: 'wrap',
  },
  statBox: {
    backgroundColor: '#fff',
    padding: '8px 18px',
    borderRadius: '6px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    textAlign: 'center',
    minWidth: '90px',
  },
  statLabel: {
    fontSize: '11px',
    color: '#777',
    marginBottom: '3px',
  },
  statValue: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#2196F3',
  },
  mainLayout: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '20px',
    alignItems: 'start',
  },
  chartContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  svg: {
    backgroundColor: '#fafafa',
    borderRadius: '4px',
    display: 'block',
  },
  rightPanel: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  axisText: {
    fontSize: '12px',
    fill: '#666',
  },
  meanLabel: {
    fontSize: '12px',
    fill: '#2196F3',
    fontWeight: 'bold',
  },
  pointLabel: {
    fontSize: '12px',
    fill: '#333',
    fontWeight: 'bold',
  },
  deviationLabel: {
    fontSize: '11px',
    fill: '#666',
    fontWeight: 'bold',
  },
  tableSection: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  calculationSection: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  sectionTitle: {
    marginTop: '0',
    marginBottom: '12px',
    color: '#333',
    fontSize: '16px',
    borderBottom: '2px solid #2196F3',
    paddingBottom: '6px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '13px',
  },
  th: {
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#f5f5f5',
    fontWeight: 'bold',
    fontSize: '12px',
    color: '#555',
    borderBottom: '2px solid #ddd',
    position: 'relative',
    cursor: 'help',
  },
  thContent: {
    position: 'relative',
  },
  headerTooltip: {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: '8px',
    backgroundColor: '#fff',
    border: '2px solid #2196F3',
    borderRadius: '6px',
    padding: '10px',
    width: '220px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    zIndex: 1000,
    fontSize: '12px',
    lineHeight: '1.4',
    color: '#333',
    whiteSpace: 'normal',
  },
  tr: {
    transition: 'background-color 0.2s',
  },
  td: {
    padding: '8px',
    borderBottom: '1px solid #eee',
    fontSize: '13px',
  },
  tfootRow: {
    backgroundColor: '#E3F2FD',
    fontWeight: 'bold',
  },
  tfootLabel: {
    padding: '10px 8px',
    textAlign: 'right',
    fontSize: '13px',
    color: '#1976D2',
    borderTop: '2px solid #2196F3',
  },
  tfootValue: {
    padding: '10px 8px',
    fontSize: '14px',
    color: '#0D47A1',
    fontWeight: 'bold',
    borderTop: '2px solid #2196F3',
  },
  input: {
    width: '80px',
    padding: '4px 6px',
    fontSize: '13px',
    border: '1px solid #2196F3',
    borderRadius: '3px',
  },
  deleteButton: {
    padding: '4px 8px',
    fontSize: '12px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  step: {
    display: 'flex',
    gap: '10px',
    marginBottom: '15px',
    alignItems: 'flex-start',
  },
  stepNumber: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#2196F3',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '13px',
    flexShrink: 0,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontWeight: 'bold',
    marginBottom: '6px',
    color: '#333',
    fontSize: '13px',
  },
  formula: {
    backgroundColor: '#f5f5f5',
    padding: '8px',
    borderRadius: '4px',
    fontFamily: 'monospace',
    fontSize: '12px',
    color: '#555',
    overflowX: 'auto',
  },
  calculation: {
    fontSize: '12px',
    color: '#555',
    marginBottom: '3px',
    fontFamily: 'monospace',
  },
  finalResult: {
    backgroundColor: '#E3F2FD',
    padding: '10px',
    borderRadius: '5px',
    marginTop: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#1976D2',
  },
  resultValue: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#0D47A1',
  },
};