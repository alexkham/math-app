import { useState, useMemo } from 'react';

const NormalExpectedValueCalculator = () => {
  const [dataInput, setDataInput] = useState('98, 102, 105, 97, 100, 103, 99, 101, 104, 98');
  const [activeTab, setActiveTab] = useState('visualization');
  const [showAdditionalStats, setShowAdditionalStats] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [comparisonData, setComparisonData] = useState('95, 100, 105, 98, 102, 97, 103, 99, 101, 96');

  const handleReset = () => {
    setDataInput('98, 102, 105, 97, 100, 103, 99, 101, 104, 98');
    setActiveTab('visualization');
    setShowAdditionalStats(false);
    setShowComparison(false);
  };

  const parseData = (input) => {
    if (!input || input.trim() === '') return [];
    
    // Split by commas, newlines, spaces, or tabs
    const values = input
      .split(/[\s,;]+/)
      .map(v => v.trim())
      .filter(v => v !== '')
      .map(v => parseFloat(v))
      .filter(v => !isNaN(v));
    
    return values;
  };

  const calculations = useMemo(() => {
    const data = parseData(dataInput);

    if (data.length < 2) {
      return {
        isValid: false,
        data: [],
        n: 0,
        expectedValue: 0,
        variance: 0,
        standardDeviation: 0
      };
    }

    const n = data.length;
    
    // Calculate sample mean (estimate of E(X) = μ)
    const mean = data.reduce((sum, x) => sum + x, 0) / n;
    
    // Calculate sample variance (unbiased estimator with n-1)
    const variance = data.reduce((sum, x) => sum + Math.pow(x - mean, 2), 0) / (n - 1);
    const standardDeviation = Math.sqrt(variance);
    
    // Calculate percentiles
    const sorted = [...data].sort((a, b) => a - b);
    const q1Index = Math.floor(n * 0.25);
    const medianIndex = Math.floor(n * 0.5);
    const q3Index = Math.floor(n * 0.75);
    
    const q1 = sorted[q1Index];
    const median = n % 2 === 0 ? (sorted[medianIndex - 1] + sorted[medianIndex]) / 2 : sorted[medianIndex];
    const q3 = sorted[q3Index];
    
    // Calculate 95% confidence interval for the mean
    const tCritical = 1.96; // Approximate for large samples; for small samples should use t-distribution
    const marginOfError = tCritical * (standardDeviation / Math.sqrt(n));
    const ciLower = mean - marginOfError;
    const ciUpper = mean + marginOfError;

    return {
      isValid: true,
      data: data,
      n: n,
      expectedValue: mean,
      variance: variance,
      standardDeviation: standardDeviation,
      q1: q1,
      median: median,
      q3: q3,
      min: sorted[0],
      max: sorted[n - 1],
      ciLower: ciLower,
      ciUpper: ciUpper,
      marginOfError: marginOfError
    };
  }, [dataInput]);

  const comparisonCalc = useMemo(() => {
    const data = parseData(comparisonData);
    
    if (data.length < 2) {
      return { isValid: false, expectedValue: 0 };
    }
    
    const mean = data.reduce((sum, x) => sum + x, 0) / data.length;
    
    return {
      isValid: true,
      expectedValue: mean,
      n: data.length
    };
  }, [comparisonData]);

  const getRealExample = () => {
    if (!calculations.isValid) return null;

    const ev = calculations.expectedValue;
    const sd = calculations.standardDeviation;
    const n = calculations.n;

    return {
      scenario: `Sample of ${n} observations`,
      examples: [
        `Sample mean (E(X) estimate): ${ev.toFixed(2)}`,
        `95% confident true mean is in [${calculations.ciLower.toFixed(2)}, ${calculations.ciUpper.toFixed(2)}]`,
        `Most values fall within ${(ev - sd).toFixed(1)} to ${(ev + sd).toFixed(1)} (±1σ)`
      ]
    };
  };

  const realExample = getRealExample();

  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>Expected Value Calculator - Normal Distribution (from Sample Data)</h2>
      
      <div style={styles.intro}>
        <p style={styles.introText}>
          Calculate the <strong>expected value</strong> E(X) = μ by estimating it from sample data. 
          Provide your dataset and the calculator will compute the sample mean as an estimate of the population mean, 
          assuming the data comes from a normal distribution.
        </p>
      </div>

      {/* KEY INSIGHT BOX */}
      {calculations.isValid && (
        <div style={styles.keyInsight}>
          <div style={styles.keyInsightIcon}>💡</div>
          <div style={styles.keyInsightContent}>
            <strong>Key Insight:</strong> From {calculations.n} data points, the estimated E(X) = {calculations.expectedValue.toFixed(2)}. 
            This is your sample mean x̄, which is the best estimate of the population mean μ. 
            We're 95% confident the true μ is between {calculations.ciLower.toFixed(2)} and {calculations.ciUpper.toFixed(2)}.
          </div>
        </div>
      )}

      <div style={styles.mainLayout}>
        {/* LEFT COLUMN - INPUT */}
        <div style={styles.leftColumn}>
          <div style={styles.inputSection}>
            <div style={styles.inputHeader}>
              <h3 style={styles.h3}>Sample Data</h3>
              <button onClick={handleReset} style={styles.resetBtn}>
                Reset
              </button>
            </div>
            
            <div style={styles.dataInputContainer}>
              <label style={styles.dataLabel}>
                <strong>Enter your data</strong> (comma, space, or newline separated)
              </label>
              <textarea
                value={dataInput}
                onChange={(e) => setDataInput(e.target.value)}
                style={styles.dataTextarea}
                placeholder="98, 102, 105, 97, 100, 103..."
                rows={6}
              />
              <div style={styles.dataInfo}>
                {calculations.isValid ? (
                  <span style={styles.dataValid}>✓ {calculations.n} valid data points</span>
                ) : (
                  <span style={styles.dataInvalid}>⚠ Need at least 2 numeric values</span>
                )}
              </div>
            </div>

            {calculations.isValid && (
              <div style={styles.infoBox}>
                <div style={styles.infoRow}>
                  <span>Sample size (n):</span>
                  <span><strong>{calculations.n}</strong></span>
                </div>
                <div style={styles.infoRow}>
                  <span>Formula:</span>
                  <span><strong>E(X) = μ ≈ x̄ = Σx / n</strong></span>
                </div>
                <div style={styles.infoRow}>
                  <span>Range:</span>
                  <span>[{calculations.min.toFixed(2)}, {calculations.max.toFixed(2)}]</span>
                </div>
              </div>
            )}
          </div>

          {/* COMPARISON FEATURE */}
          {calculations.isValid && (
            <div style={styles.comparisonSection}>
              <button 
                onClick={() => setShowComparison(!showComparison)}
                style={styles.comparisonToggle}
              >
                {showComparison ? '▼' : '▶'} Compare with Another Dataset
              </button>
              {showComparison && (
                <div style={styles.comparisonContent}>
                  <div style={styles.comparisonInputs}>
                    <label style={styles.comparisonLabel}>Alternative dataset:</label>
                    <textarea
                      value={comparisonData}
                      onChange={(e) => setComparisonData(e.target.value)}
                      style={styles.comparisonTextarea}
                      rows={3}
                    />
                  </div>
                  {comparisonCalc.isValid && (
                    <div style={styles.comparisonResults}>
                      <div style={styles.comparisonRow}>
                        <span style={styles.comparisonCurrent}>
                          Current: n={calculations.n}
                        </span>
                        <span style={styles.comparisonCurrentValue}>
                          E(X) = {calculations.expectedValue.toFixed(2)}
                        </span>
                      </div>
                      <div style={styles.comparisonRow}>
                        <span style={styles.comparisonAlt}>
                          Alt: n={comparisonCalc.n}
                        </span>
                        <span style={styles.comparisonAltValue}>
                          E(X) = {comparisonCalc.expectedValue.toFixed(2)}
                        </span>
                      </div>
                      <div style={styles.comparisonDiff}>
                        {comparisonCalc.expectedValue > calculations.expectedValue ? (
                          <span style={styles.comparisonHigher}>
                            ↑ {((comparisonCalc.expectedValue - calculations.expectedValue) / Math.abs(calculations.expectedValue) * 100).toFixed(1)}% higher
                          </span>
                        ) : comparisonCalc.expectedValue < calculations.expectedValue ? (
                          <span style={styles.comparisonLower}>
                            ↓ {((calculations.expectedValue - comparisonCalc.expectedValue) / Math.abs(calculations.expectedValue) * 100).toFixed(1)}% lower
                          </span>
                        ) : (
                          <span>Same mean</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* KEY STATISTICS */}
          {calculations.isValid && (
            <div style={styles.percentilesSection}>
              <h3 style={styles.h3}>Sample Statistics</h3>
              <div style={styles.percentilesTable}>
                <div style={styles.percentileRow}>
                  <span style={styles.percentileLabel}>Min:</span>
                  <span style={styles.percentileValue}>{calculations.min.toFixed(2)}</span>
                </div>
                <div style={styles.percentileRow}>
                  <span style={styles.percentileLabel}>Q1:</span>
                  <span style={styles.percentileValue}>{calculations.q1.toFixed(2)}</span>
                </div>
                <div style={styles.percentileRow}>
                  <span style={styles.percentileLabel}>Median:</span>
                  <span style={styles.percentileValue}>{calculations.median.toFixed(2)}</span>
                </div>
                <div style={styles.percentileRow}>
                  <span style={styles.percentileLabel}>Mean (E(X)):</span>
                  <span style={styles.percentileValue}>{calculations.expectedValue.toFixed(2)}</span>
                </div>
                <div style={styles.percentileRow}>
                  <span style={styles.percentileLabel}>Q3:</span>
                  <span style={styles.percentileValue}>{calculations.q3.toFixed(2)}</span>
                </div>
                <div style={styles.percentileRow}>
                  <span style={styles.percentileLabel}>Max:</span>
                  <span style={styles.percentileValue}>{calculations.max.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN - HERO, STATS, TABS & EXAMPLES */}
        <div style={styles.rightColumn}>
          {calculations.isValid ? (
            <>
              {/* HERO: Giant Expected Value Display */}
              <div style={styles.heroExpectedValue}>
                <div style={styles.heroLabel}>Estimated Expected Value</div>
                <div style={styles.heroValue}>E(X) ≈ {calculations.expectedValue.toFixed(2)}</div>
                <div style={styles.heroFormula}>
                  x̄ = Σx / n = {calculations.expectedValue.toFixed(2)}
                </div>
                <div style={styles.heroInterpretation}>
                  Sample mean from {calculations.n} observations
                </div>
              </div>

              {/* Additional Statistics - ABOVE TABS */}
              <div style={styles.additionalStats}>
                <button 
                  onClick={() => setShowAdditionalStats(!showAdditionalStats)}
                  style={styles.additionalStatsToggle}
                >
                  {showAdditionalStats ? '▼' : '▶'} Additional Statistics
                </button>
                {showAdditionalStats && (
                  <div style={styles.additionalStatsContent}>
                    <div style={styles.statRow}>
                      <span>Sample Variance (s²):</span>
                      <span>{calculations.variance.toFixed(4)}</span>
                    </div>
                    <div style={styles.statRow}>
                      <span>Sample Std Dev (s):</span>
                      <span>{calculations.standardDeviation.toFixed(4)}</span>
                    </div>
                    <div style={styles.statRow}>
                      <span>Standard Error:</span>
                      <span>{(calculations.standardDeviation / Math.sqrt(calculations.n)).toFixed(4)}</span>
                    </div>
                    <div style={styles.statRow}>
                      <span>95% CI for μ:</span>
                      <span>[{calculations.ciLower.toFixed(2)}, {calculations.ciUpper.toFixed(2)}]</span>
                    </div>
                    <div style={styles.statRow}>
                      <span>Margin of Error:</span>
                      <span>±{calculations.marginOfError.toFixed(3)}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Tabs & Visualization */}
              <div style={styles.visualization}>
                <div style={styles.tabContainer}>
                  <button
                    onClick={() => setActiveTab('visualization')}
                    style={{
                      ...styles.tab,
                      ...(activeTab === 'visualization' ? styles.tabActive : {})
                    }}
                  >
                    Visualization
                  </button>
                  <button
                    onClick={() => setActiveTab('calculation')}
                    style={{
                      ...styles.tab,
                      ...(activeTab === 'calculation' ? styles.tabActive : {})
                    }}
                  >
                    Calculation
                  </button>
                </div>

                {activeTab === 'visualization' && (
                  <div style={styles.chart}>
                    <NormalVisualization 
                      mean={calculations.expectedValue}
                      stdDev={calculations.standardDeviation}
                      data={calculations.data}
                      ciLower={calculations.ciLower}
                      ciUpper={calculations.ciUpper}
                    />
                  </div>
                )}

                {activeTab === 'calculation' && (
                  <div style={styles.calculationTab}>
                    <div style={styles.formulaBox}>
                      <div style={styles.formulaTitle}>Expected Value Estimation</div>
                      <div style={styles.formulaMain}>E(X) = μ ≈ x̄ = Σx / n</div>
                    </div>
                    
                    <div style={styles.steps}>
                      <div style={styles.stepTitle}>Calculation:</div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>1.</span>
                        <span style={styles.stepContent}>
                          Sum all data: Σx = {calculations.data.reduce((s, x) => s + x, 0).toFixed(2)}
                        </span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>2.</span>
                        <span style={styles.stepContent}>
                          Count observations: n = {calculations.n}
                        </span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>3.</span>
                        <span style={styles.stepContent}>
                          Sample mean: x̄ = {calculations.data.reduce((s, x) => s + x, 0).toFixed(2)} / {calculations.n}
                        </span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>4.</span>
                        <span style={styles.stepContent}>
                          <strong>E(X) ≈ {calculations.expectedValue.toFixed(4)}</strong>
                        </span>
                      </div>
                    </div>

                    <div style={styles.integralBox}>
                      <div style={styles.integralTitle}>Confidence Interval</div>
                      <div style={styles.integralStep}>
                        Standard Error: SE = s / √n = {calculations.standardDeviation.toFixed(3)} / √{calculations.n}
                      </div>
                      <div style={styles.integralStep}>
                        = {(calculations.standardDeviation / Math.sqrt(calculations.n)).toFixed(4)}
                      </div>
                      <div style={styles.integralStep}>
                        95% CI: x̄ ± 1.96 × SE
                      </div>
                      <div style={styles.integralStep}>
                        <strong>= [{calculations.ciLower.toFixed(3)}, {calculations.ciUpper.toFixed(3)}]</strong>
                      </div>
                    </div>

                    <div style={styles.insightBox}>
                      <strong>Interpretation:</strong> The sample mean x̄ = {calculations.expectedValue.toFixed(2)} is our best estimate 
                      of the true population mean μ. With 95% confidence, the true mean lies between {calculations.ciLower.toFixed(2)} and {calculations.ciUpper.toFixed(2)}. 
                      Larger samples give more precise estimates (smaller confidence intervals).
                    </div>
                  </div>
                )}
              </div>

              {/* REAL-WORLD EXAMPLES - Below visualization */}
              {realExample && (
                <div style={styles.examplesSection}>
                  <div style={styles.examplesHeader}>
                    <span style={styles.examplesIcon}>📊</span>
                    <span style={styles.examplesTitle}>{realExample.scenario}</span>
                  </div>
                  <ul style={styles.examplesList}>
                    {realExample.examples.map((example, index) => (
                      <li key={index} style={styles.exampleItem}>{example}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <div style={styles.resultsPlaceholder}>
              <div style={styles.placeholderIcon}>E(X)</div>
              <p style={styles.placeholderText}>
                Enter at least 2 numeric values
              </p>
            </div>
          )}
        </div>
      </div>

      <div style={styles.explanation}>
        <h3 style={styles.h3}>Understanding Expected Value Estimation for Normal Distribution</h3>
        
        <div style={styles.explainGrid}>
          <div style={styles.explainSection}>
            <h4 style={styles.h4}>What Does E(X) Mean?</h4>
            <p style={styles.p}>
              For a normal distribution, the expected value E(X) equals the population mean μ. 
              When we don't know μ, we estimate it from sample data using the sample mean x̄. 
              This x̄ is our best estimate of E(X).
            </p>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Interpreting Your Result</h4>
            <p style={styles.p}>
              With E(X) ≈ {calculations.isValid ? calculations.expectedValue.toFixed(2) : '___'}, this means:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>The average of your {calculations.isValid ? calculations.n : '___'} observations is {calculations.isValid ? calculations.expectedValue.toFixed(2) : '___'}</li>
              <li style={styles.li}>This estimates the center of the population distribution</li>
              <li style={styles.li}>Confidence interval quantifies estimation uncertainty</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Real-World Examples</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><strong style={styles.liStrong}>Test scores:</strong> Sample mean estimates average performance</li>
              <li style={styles.li}><strong style={styles.liStrong}>Heights:</strong> Average height from sample estimates population mean</li>
              <li style={styles.li}><strong style={styles.liStrong}>Manufacturing:</strong> Sample average part dimension estimates true mean</li>
              <li style={styles.li}><strong style={styles.liStrong}>Response times:</strong> Mean time from sample estimates typical response</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Why x̄ Estimates μ</h4>
            <p style={styles.p}>
              The sample mean x̄ is an unbiased estimator of the population mean μ. 
              This means that if we took many samples and computed x̄ for each, 
              the average of all those x̄ values would equal μ. The Central Limit Theorem 
              tells us x̄ follows a normal distribution centered at μ, allowing us to construct confidence intervals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Normal Distribution Visualization Component
const NormalVisualization = ({ mean, stdDev, data, ciLower, ciUpper }) => {
  // Generate points for normal curve
  const xMin = mean - 4 * stdDev;
  const xMax = mean + 4 * stdDev;
  const points = [];
  const numPoints = 100;
  
  // Normal PDF function
  const normalPDF = (x, mu, sigma) => {
    const exponent = -Math.pow(x - mu, 2) / (2 * Math.pow(sigma, 2));
    return (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(exponent);
  };
  
  for (let i = 0; i <= numPoints; i++) {
    const x = xMin + (i / numPoints) * (xMax - xMin);
    const y = normalPDF(x, mean, stdDev);
    points.push({ x, y });
  }
  
  const maxY = normalPDF(mean, mean, stdDev);
  
  return (
    <div style={styles.pdfChart}>
      <div style={styles.chartTitle}>Estimated Normal Distribution with E(X) = {mean.toFixed(2)}</div>
      
      <div style={styles.pdfContainer}>
        <div style={styles.yAxisLabelPDF}>Density</div>
        
        <div style={styles.pdfContent}>
          <div style={styles.pdfArea}>
            <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none">
              {/* Axes */}
              <line x1="0" y1="250" x2="1000" y2="250" stroke="#333" strokeWidth="2" />
              
              {/* Shaded region for ±1σ */}
              <path
                d={points.filter(p => p.x >= mean - stdDev && p.x <= mean + stdDev).map((p, i, arr) => {
                  const x = ((p.x - xMin) / (xMax - xMin)) * 1000;
                  const y = 250 - (p.y / maxY) * 200;
                  if (i === 0) return `M ${x} 250 L ${x} ${y}`;
                  if (i === arr.length - 1) return `L ${x} ${y} L ${x} 250`;
                  return `L ${x} ${y}`;
                }).join(' ') + ' Z'}
                fill="rgba(40, 167, 69, 0.15)"
                stroke="none"
              />
              
              {/* Fill area under curve */}
              <path
                d={`M 0 250 ${points.map((p) => {
                  const x = ((p.x - xMin) / (xMax - xMin)) * 1000;
                  const y = 250 - (p.y / maxY) * 200;
                  return `L ${x} ${y}`;
                }).join(' ')} L 1000 250 Z`}
                fill="rgba(0, 123, 255, 0.2)"
                stroke="none"
              />
              
              {/* Normal curve outline */}
              <path
                d={points.map((p, i) => {
                  const x = ((p.x - xMin) / (xMax - xMin)) * 1000;
                  const y = 250 - (p.y / maxY) * 200;
                  return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                }).join(' ')}
                fill="none"
                stroke="#007bff"
                strokeWidth="3"
              />
              
              {/* Mean line */}
              <line
                x1={((mean - xMin) / (xMax - xMin)) * 1000}
                y1="0"
                x2={((mean - xMin) / (xMax - xMin)) * 1000}
                y2="250"
                stroke="#dc3545"
                strokeWidth="4"
                strokeDasharray="8,4"
              />
              
              {/* ±1σ lines */}
              <line
                x1={((mean - stdDev - xMin) / (xMax - xMin)) * 1000}
                y1="0"
                x2={((mean - stdDev - xMin) / (xMax - xMin)) * 1000}
                y2="250"
                stroke="#28a745"
                strokeWidth="2"
                strokeDasharray="4,4"
              />
              <line
                x1={((mean + stdDev - xMin) / (xMax - xMin)) * 1000}
                y1="0"
                x2={((mean + stdDev - xMin) / (xMax - xMin)) * 1000}
                y2="250"
                stroke="#28a745"
                strokeWidth="2"
                strokeDasharray="4,4"
              />
            </svg>
            
            {/* Mean label */}
            <div 
              style={{
                ...styles.evLineLabel,
                left: `${((mean - xMin) / (xMax - xMin)) * 100}%`
              }}
            >
              x̄ = {mean.toFixed(2)}
            </div>
          </div>
          
          {/* X-axis labels */}
          <div style={styles.xAxisLabels}>
            <span style={{...styles.xLabel, left: '25%'}}>{(mean - 2*stdDev).toFixed(1)}</span>
            <span style={{...styles.xLabel, left: '50%'}}>{mean.toFixed(1)}</span>
            <span style={{...styles.xLabel, left: '75%'}}>{(mean + 2*stdDev).toFixed(1)}</span>
          </div>
        </div>
      </div>
      
      <div style={styles.pdfNote}>
        <strong>Note:</strong> Bell curve shows estimated normal distribution N(μ={mean.toFixed(2)}, σ={stdDev.toFixed(2)}). 
        Red line shows sample mean (E(X) estimate). Green shaded region shows ±1σ (≈68% of data). 
        Based on {data.length} sample observations.
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '20px',
  },
  h2: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#1a1a1a',
  },
  h3: {
    fontSize: '1.1rem',
    marginBottom: '10px',
    color: '#2c3e50',
  },
  h4: {
    fontSize: '1.1rem',
    marginBottom: '10px',
    color: '#495057',
  },
  intro: {
    background: '#f8f9fa',
    padding: '12px 15px',
    borderRadius: '8px',
    marginBottom: '15px',
    borderLeft: '4px solid #007bff',
  },
  introText: {
    margin: 0,
    lineHeight: 1.4,
    color: '#333',
    fontSize: '0.9rem',
  },
  keyInsight: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)',
    border: '2px solid #ffc107',
    padding: '12px 15px',
    borderRadius: '8px',
    marginBottom: '15px',
    boxShadow: '0 2px 8px rgba(255,193,7,0.2)',
  },
  keyInsightIcon: {
    fontSize: '1.5rem',
    lineHeight: 1,
  },
  keyInsightContent: {
    flex: 1,
    fontSize: '0.9rem',
    lineHeight: 1.4,
    color: '#856404',
  },
  mainLayout: {
    display: 'grid',
    gridTemplateColumns: '380px 1fr',
    gap: '20px',
    marginBottom: '40px',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputSection: {
    padding: '15px',
    background: '#fff',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
  },
  inputHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
  },
  resetBtn: {
    padding: '8px 16px',
    background: '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '0.9rem',
    cursor: 'pointer',
    fontWeight: 500,
  },
  dataInputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  dataLabel: {
    fontSize: '0.95rem',
    color: '#2c3e50',
  },
  dataTextarea: {
    padding: '10px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    fontSize: '0.95rem',
    fontFamily: "'Courier New', monospace",
    resize: 'vertical',
    width: '100%',
  },
  dataInfo: {
    fontSize: '0.85rem',
    marginTop: '5px',
  },
  dataValid: {
    color: '#28a745',
    fontWeight: 600,
  },
  dataInvalid: {
    color: '#dc3545',
    fontWeight: 600,
  },
  infoBox: {
    marginTop: '15px',
    padding: '15px',
    background: '#f8f9fa',
    borderRadius: '4px',
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    fontSize: '0.9rem',
    borderBottom: '1px solid #e9ecef',
  },
  comparisonSection: {
    background: '#fff',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
    overflow: 'hidden',
  },
  comparisonToggle: {
    width: '100%',
    padding: '12px 20px',
    background: '#f8f9fa',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.95rem',
    fontWeight: 500,
    color: '#495057',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  comparisonContent: {
    padding: '20px',
    background: 'white',
  },
  comparisonInputs: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginBottom: '15px',
  },
  comparisonLabel: {
    fontSize: '0.9rem',
    color: '#495057',
    fontWeight: 500,
  },
  comparisonTextarea: {
    padding: '8px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    fontSize: '0.9rem',
    fontFamily: "'Courier New', monospace",
    resize: 'vertical',
  },
  comparisonResults: {
    padding: '15px',
    background: '#f8f9fa',
    borderRadius: '4px',
  },
  comparisonRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #e9ecef',
    fontSize: '0.9rem',
  },
  comparisonCurrent: {
    color: '#495057',
  },
  comparisonCurrentValue: {
    fontWeight: 600,
    color: '#007bff',
  },
  comparisonAlt: {
    color: '#495057',
  },
  comparisonAltValue: {
    fontWeight: 600,
    color: '#6c757d',
  },
  comparisonDiff: {
    marginTop: '10px',
    paddingTop: '10px',
    borderTop: '2px solid #007bff',
    textAlign: 'center',
    fontSize: '1rem',
    fontWeight: 600,
  },
  comparisonHigher: {
    color: '#28a745',
  },
  comparisonLower: {
    color: '#dc3545',
  },
  percentilesSection: {
    padding: '15px',
    background: '#fff',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
  },
  percentilesTable: {
    width: '100%',
  },
  percentileRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '6px 0',
    borderBottom: '1px solid #e9ecef',
    fontSize: '0.85rem',
  },
  percentileLabel: {
    color: '#495057',
  },
  percentileValue: {
    fontWeight: 600,
    color: '#007bff',
    fontFamily: "'Courier New', monospace",
  },
  heroExpectedValue: {
    background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
    color: 'white',
    padding: '12px 18px',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,123,255,0.3)',
  },
  heroLabel: {
    fontSize: '0.75rem',
    opacity: 0.9,
    marginBottom: '4px',
    fontWeight: 500,
  },
  heroValue: {
    fontSize: '2rem',
    fontWeight: 700,
    marginBottom: '5px',
    letterSpacing: '-1px',
  },
  heroFormula: {
    fontSize: '0.8rem',
    opacity: 0.9,
    marginBottom: '6px',
    fontFamily: "'Courier New', monospace",
  },
  heroInterpretation: {
    fontSize: '0.7rem',
    opacity: 0.95,
    padding: '5px 8px',
    background: 'rgba(255,255,255,0.15)',
    borderRadius: '4px',
    lineHeight: 1.2,
  },
  examplesSection: {
    background: '#e7f3ff',
    border: '2px solid #007bff',
    borderRadius: '8px',
    padding: '10px 12px',
  },
  examplesHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '6px',
  },
  examplesIcon: {
    fontSize: '1rem',
  },
  examplesTitle: {
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#007bff',
  },
  examplesList: {
    margin: 0,
    paddingLeft: '16px',
  },
  exampleItem: {
    marginBottom: '4px',
    lineHeight: 1.25,
    color: '#495057',
    fontSize: '0.75rem',
  },
  additionalStats: {
    background: '#f8f9fa',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  additionalStatsToggle: {
    width: '100%',
    padding: '12px 20px',
    background: '#f8f9fa',
    border: 'none',
    borderBottom: '1px solid #dee2e6',
    cursor: 'pointer',
    fontSize: '0.95rem',
    fontWeight: 500,
    color: '#495057',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  additionalStatsContent: {
    padding: '15px 20px',
    background: 'white',
  },
  statRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #e9ecef',
    fontSize: '0.9rem',
  },
  visualization: {
    background: '#fff',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
    overflow: 'hidden',
  },
  tabContainer: {
    display: 'flex',
    borderBottom: '2px solid #dee2e6',
  },
  tab: {
    flex: 1,
    padding: '12px 20px',
    background: '#f8f9fa',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.95rem',
    fontWeight: 500,
    color: '#495057',
    transition: 'all 0.2s',
  },
  tabActive: {
    background: 'white',
    color: '#007bff',
    borderBottom: '2px solid #007bff',
    marginBottom: '-2px',
  },
  chart: {
    padding: '15px 15px 15px 50px',
    background: 'white',
  },
  chartTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#2c3e50',
    marginBottom: '20px',
    textAlign: 'center',
  },
  calculationTab: {
    padding: '15px',
    background: 'white',
  },
  formulaBox: {
    padding: '15px',
    background: '#e7f3ff',
    borderRadius: '8px',
    marginBottom: '15px',
    border: '2px solid #007bff',
  },
  formulaTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#007bff',
    marginBottom: '8px',
  },
  formulaMain: {
    fontSize: '1.6rem',
    fontWeight: 700,
    color: '#007bff',
    marginBottom: '8px',
    fontFamily: "'Courier New', monospace",
  },
  steps: {
    background: '#f8f9fa',
    padding: '12px',
    borderRadius: '8px',
    marginBottom: '12px',
  },
  stepTitle: {
    fontSize: '0.9rem',
    fontWeight: 600,
    marginBottom: '10px',
    color: '#2c3e50',
  },
  step: {
    display: 'flex',
    gap: '10px',
    padding: '6px 0',
    borderBottom: '1px solid #e9ecef',
  },
  stepNumber: {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#007bff',
    minWidth: '25px',
  },
  stepContent: {
    fontSize: '0.85rem',
    lineHeight: 1.4,
    color: '#333',
  },
  integralBox: {
    padding: '12px',
    background: '#fff3cd',
    border: '2px solid #ffc107',
    borderRadius: '8px',
    marginBottom: '12px',
  },
  integralTitle: {
    fontSize: '0.95rem',
    fontWeight: 600,
    color: '#856404',
    marginBottom: '10px',
  },
  integralStep: {
    fontSize: '0.8rem',
    lineHeight: 1.6,
    color: '#856404',
    fontFamily: "'Courier New', monospace",
  },
  insightBox: {
    padding: '12px',
    background: '#d4edda',
    border: '1px solid #28a745',
    borderRadius: '4px',
    fontSize: '0.85rem',
    lineHeight: 1.4,
    color: '#155724',
  },
  resultsPlaceholder: {
    padding: '60px 30px',
    background: '#f8f9fa',
    borderRadius: '8px',
    border: '2px dashed #dee2e6',
    textAlign: 'center',
  },
  placeholderIcon: {
    fontSize: '4rem',
    color: '#dee2e6',
    fontWeight: 700,
    marginBottom: '20px',
  },
  placeholderText: {
    color: '#6c757d',
    margin: 0,
    fontSize: '1.1rem',
  },
  explanation: {
    background: 'white',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '30px',
  },
  explainGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '30px',
  },
  explainSection: {
  },
  p: {
    lineHeight: 1.6,
    color: '#333',
    marginBottom: '10px',
    fontSize: '0.95rem',
  },
  ul: {
    margin: '10px 0',
    paddingLeft: '20px',
  },
  li: {
    marginBottom: '6px',
    lineHeight: 1.6,
    color: '#333',
    fontSize: '0.95rem',
  },
  liStrong: {
    color: '#007bff',
  },
  pdfChart: {
    width: '100%',
  },
  pdfContainer: {
    position: 'relative',
    marginBottom: '20px',
  },
  yAxisLabelPDF: {
    position: 'absolute',
    left: '-40px',
    top: '50%',
    transform: 'translateY(-50%) rotate(-90deg)',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#495057',
  },
  pdfContent: {
    position: 'relative',
    marginLeft: '10px',
  },
  pdfArea: {
    height: '300px',
    marginBottom: '10px',
    position: 'relative',
  },
  evLineLabel: {
    position: 'absolute',
    top: '10px',
    transform: 'translateX(-50%)',
    background: '#dc3545',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '4px',
    fontWeight: 700,
    fontSize: '0.8rem',
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 6px rgba(220,53,69,0.3)',
    zIndex: 10,
  },
  xAxisLabels: {
    position: 'relative',
    height: '30px',
    marginTop: '10px',
  },
  xLabel: {
    position: 'absolute',
    transform: 'translateX(-50%)',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#495057',
    whiteSpace: 'nowrap',
  },
  pdfNote: {
    marginTop: '15px',
    padding: '12px',
    background: '#e7f3ff',
    borderRadius: '4px',
    fontSize: '0.9rem',
    color: '#004085',
    lineHeight: 1.6,
  },
};

export default NormalExpectedValueCalculator;