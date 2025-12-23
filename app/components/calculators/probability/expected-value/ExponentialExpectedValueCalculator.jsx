import { useState, useMemo } from 'react';

const ExponentialExpectedValueCalculator = () => {
  const [lambda, setLambda] = useState(0.5);
  const [activeTab, setActiveTab] = useState('visualization');
  const [showAdditionalStats, setShowAdditionalStats] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [comparisonLambda, setComparisonLambda] = useState(1);

  const handleReset = () => {
    setLambda(0.5);
    setActiveTab('visualization');
    setShowAdditionalStats(false);
    setShowComparison(false);
  };

  const updateLambda = (value) => {
    if (value === '' || value === '.') {
      setLambda(value);
    } else {
      const num = parseFloat(value);
      if (!isNaN(num) && num > 0) {
        setLambda(num);
      }
    }
  };

  const calculations = useMemo(() => {
    const lambdaVal = typeof lambda === 'string' ? parseFloat(lambda) : lambda;

    if (isNaN(lambdaVal) || lambdaVal <= 0) {
      return {
        isValid: false,
        lambda: lambdaVal,
        expectedValue: 0,
        variance: 0,
        standardDeviation: 0
      };
    }

    // Calculate expected value: E(X) = 1 / λ
    const expectedValue = 1 / lambdaVal;

    // Calculate variance: Var(X) = 1 / λ²
    const variance = 1 / Math.pow(lambdaVal, 2);
    const standardDeviation = Math.sqrt(variance);

    return {
      isValid: true,
      lambda: lambdaVal,
      expectedValue,
      variance,
      standardDeviation,
      median: Math.log(2) / lambdaVal,
      mode: 0,
      q1: -Math.log(0.75) / lambdaVal,
      q3: -Math.log(0.25) / lambdaVal
    };
  }, [lambda]);

  const comparisonCalc = useMemo(() => {
    if (isNaN(comparisonLambda) || comparisonLambda <= 0) {
      return { isValid: false, expectedValue: 0 };
    }
    return {
      isValid: true,
      expectedValue: 1 / comparisonLambda
    };
  }, [comparisonLambda]);

  const getRealExample = () => {
    if (!calculations.isValid) return null;

    const ev = calculations.expectedValue;
    const lambda = calculations.lambda;

    // Generate contextual examples based on expected value
    if (ev < 1) {
      return {
        scenario: "High rate (short wait times)",
        examples: [
          `Average wait time: ${ev.toFixed(2)} time units`,
          `Rate λ = ${lambda.toFixed(2)} means events occur frequently`,
          `Median wait is ${calculations.median.toFixed(2)} (shorter than mean)`
        ]
      };
    } else if (ev <= 5) {
      return {
        scenario: "Moderate wait times",
        examples: [
          `Average: ${ev.toFixed(2)} time units between events`,
          `50% of waits are less than ${calculations.median.toFixed(2)} units`,
          `Very variable: std dev = ${calculations.standardDeviation.toFixed(2)}`
        ]
      };
    } else if (ev <= 20) {
      return {
        scenario: "Long wait times (rare events)",
        examples: [
          `Expect to wait ${ev.toFixed(1)} units on average`,
          `Rate λ = ${lambda.toFixed(3)} means events are infrequent`,
          `High variability: σ = ${calculations.standardDeviation.toFixed(1)}`
        ]
      };
    } else {
      return {
        scenario: "Very rare events",
        examples: [
          `Average ${ev.toFixed(0)} time units between occurrences`,
          `Extremely low rate: λ = ${lambda.toFixed(4)}`,
          `Most waits are much shorter than average`
        ]
      };
    }
  };

  const realExample = getRealExample();

  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>Expected Value Calculator - Exponential Distribution</h2>
      
      <div style={styles.intro}>
        <p style={styles.introText}>
          Calculate the <strong>expected value</strong> (average wait time) for an exponential distribution. 
          Perfect for modeling time between events: server response times, time until failure, or any memoryless waiting process.
        </p>
      </div>

      {/* KEY INSIGHT BOX */}
      {calculations.isValid && (
        <div style={styles.keyInsight}>
          <div style={styles.keyInsightIcon}>💡</div>
          <div style={styles.keyInsightContent}>
            <strong>Key Insight:</strong> E(X) = {calculations.expectedValue.toFixed(2)} is the reciprocal of the rate. 
            With λ = {calculations.lambda}, you expect 1/{calculations.lambda} = {calculations.expectedValue.toFixed(2)} time units between events on average.
          </div>
        </div>
      )}

      <div style={styles.mainLayout}>
        {/* LEFT COLUMN - INPUT */}
        <div style={styles.leftColumn}>
          <div style={styles.inputSection}>
            <div style={styles.inputHeader}>
              <h3 style={styles.h3}>Parameter</h3>
              <button onClick={handleReset} style={styles.resetBtn}>
                Reset
              </button>
            </div>
            
            <div style={styles.parameterGrid}>
              <div style={styles.parameterItem}>
                <label style={styles.parameterLabel}>
                  <strong>λ</strong> (Rate Parameter)
                </label>
                <input
                  type="range"
                  min="0.01"
                  max="5"
                  step="0.01"
                  value={typeof lambda === 'string' ? 0.5 : lambda}
                  onChange={(e) => setLambda(parseFloat(e.target.value))}
                  style={styles.slider}
                />
                <input
                  type="number"
                  value={lambda}
                  onChange={(e) => updateLambda(e.target.value)}
                  style={{
                    ...styles.parameterInput,
                    ...(lambda !== '' && lambda !== '.' && (isNaN(parseFloat(lambda)) || parseFloat(lambda) <= 0) ? styles.inputInvalid : {})
                  }}
                  min="0.01"
                  step="0.01"
                />
              </div>
            </div>

            {calculations.isValid && (
              <div style={styles.infoBox}>
                <div style={styles.infoRow}>
                  <span>Formula:</span>
                  <span><strong>E(X) = 1 / λ</strong></span>
                </div>
                <div style={styles.infoRow}>
                  <span>Variance:</span>
                  <span><strong>1 / λ²</strong></span>
                </div>
                <div style={styles.infoRow}>
                  <span>Memoryless:</span>
                  <span>P(X&gt;s+t | X&gt;s) = P(X&gt;t)</span>
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
                {showComparison ? '▼' : '▶'} Compare
              </button>
              {showComparison && (
                <div style={styles.comparisonContent}>
                  <div style={styles.comparisonInputs}>
                    <div style={styles.comparisonInput}>
                      <label style={styles.comparisonLabel}>Alt λ:</label>
                      <input
                        type="number"
                        value={comparisonLambda}
                        onChange={(e) => setComparisonLambda(parseFloat(e.target.value) || 0.01)}
                        style={styles.comparisonInputField}
                        min="0.01"
                        step="0.01"
                      />
                    </div>
                  </div>
                  {comparisonCalc.isValid && (
                    <div style={styles.comparisonResults}>
                      <div style={styles.comparisonRow}>
                        <span style={styles.comparisonCurrent}>
                          Current: λ={calculations.lambda}
                        </span>
                        <span style={styles.comparisonCurrentValue}>
                          E(X) = {calculations.expectedValue.toFixed(2)}
                        </span>
                      </div>
                      <div style={styles.comparisonRow}>
                        <span style={styles.comparisonAlt}>
                          Alt: λ={comparisonLambda}
                        </span>
                        <span style={styles.comparisonAltValue}>
                          E(X) = {comparisonCalc.expectedValue.toFixed(2)}
                        </span>
                      </div>
                      <div style={styles.comparisonDiff}>
                        {comparisonCalc.expectedValue > calculations.expectedValue ? (
                          <span style={styles.comparisonHigher}>
                            ↑ {((comparisonCalc.expectedValue - calculations.expectedValue) / calculations.expectedValue * 100).toFixed(1)}% longer wait
                          </span>
                        ) : comparisonCalc.expectedValue < calculations.expectedValue ? (
                          <span style={styles.comparisonLower}>
                            ↓ {((calculations.expectedValue - comparisonCalc.expectedValue) / calculations.expectedValue * 100).toFixed(1)}% shorter wait
                          </span>
                        ) : (
                          <span>Same</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* KEY PERCENTILES */}
          {calculations.isValid && (
            <div style={styles.percentilesSection}>
              <h3 style={styles.h3}>Percentiles</h3>
              <div style={styles.percentilesTable}>
                <div style={styles.percentileRow}>
                  <span style={styles.percentileLabel}>Mode:</span>
                  <span style={styles.percentileValue}>{calculations.mode.toFixed(2)}</span>
                </div>
                <div style={styles.percentileRow}>
                  <span style={styles.percentileLabel}>Q1 (25%):</span>
                  <span style={styles.percentileValue}>{calculations.q1.toFixed(2)}</span>
                </div>
                <div style={styles.percentileRow}>
                  <span style={styles.percentileLabel}>Median (50%):</span>
                  <span style={styles.percentileValue}>{calculations.median.toFixed(2)}</span>
                </div>
                <div style={styles.percentileRow}>
                  <span style={styles.percentileLabel}>Q3 (75%):</span>
                  <span style={styles.percentileValue}>{calculations.q3.toFixed(2)}</span>
                </div>
                <div style={styles.percentileRow}>
                  <span style={styles.percentileLabel}>Mean:</span>
                  <span style={styles.percentileValue}>{calculations.expectedValue.toFixed(2)}</span>
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
                <div style={styles.heroLabel}>Expected Value</div>
                <div style={styles.heroValue}>E(X) = {calculations.expectedValue.toFixed(3)}</div>
                <div style={styles.heroFormula}>
                  1 / λ = 1 / {calculations.lambda}
                </div>
                <div style={styles.heroInterpretation}>
                  Average time between events
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
                      <span>Variance:</span>
                      <span>{calculations.variance.toFixed(4)}</span>
                    </div>
                    <div style={styles.statRow}>
                      <span>Std Dev:</span>
                      <span>{calculations.standardDeviation.toFixed(4)} (equals mean!)</span>
                    </div>
                    <div style={styles.statRow}>
                      <span>Coefficient of Variation:</span>
                      <span>1.0 (always for exponential)</span>
                    </div>
                    <div style={styles.statRow}>
                      <span>Skewness:</span>
                      <span>2.0 (highly right-skewed)</span>
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
                    <PDFVisualization 
                      lambda={calculations.lambda}
                      expectedValue={calculations.expectedValue}
                      standardDeviation={calculations.standardDeviation}
                      median={calculations.median}
                    />
                  </div>
                )}

                {activeTab === 'calculation' && (
                  <div style={styles.calculationTab}>
                    <div style={styles.formulaBox}>
                      <div style={styles.formulaTitle}>Expected Value</div>
                      <div style={styles.formulaMain}>E(X) = 1 / λ</div>
                    </div>
                    
                    <div style={styles.steps}>
                      <div style={styles.stepTitle}>Calculation:</div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>1.</span>
                        <span style={styles.stepContent}>
                          λ = {calculations.lambda} (rate parameter)
                        </span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>2.</span>
                        <span style={styles.stepContent}>
                          E(X) = 1 / {calculations.lambda}
                        </span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>3.</span>
                        <span style={styles.stepContent}>
                          <strong>E(X) = {calculations.expectedValue.toFixed(4)}</strong>
                        </span>
                      </div>
                    </div>

                    <div style={styles.integralBox}>
                      <div style={styles.integralTitle}>Integration</div>
                      <div style={styles.integralStep}>
                        PDF: f(x) = λe<sup>-λx</sup> for x ≥ 0
                      </div>
                      <div style={styles.integralStep}>
                        E(X) = ∫<sub>0</sub><sup>∞</sup> x · λe<sup>-λx</sup> dx
                      </div>
                      <div style={styles.integralStep}>
                        Using integration by parts...
                      </div>
                      <div style={styles.integralStep}>
                        <strong>= 1 / λ</strong>
                      </div>
                    </div>

                    <div style={styles.insightBox}>
                      <strong>Why:</strong> Higher rate λ means events happen faster, so less time between them. 
                      The reciprocal relationship is intuitive: if events occur at rate λ = 2 per hour, 
                      you wait 1/2 = 0.5 hours on average!
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
                Enter valid: λ &gt; 0
              </p>
            </div>
          )}
        </div>
      </div>

      <div style={styles.explanation}>
        <h3 style={styles.h3}>Understanding Expected Value for Exponential Distribution</h3>
        
        <div style={styles.explainGrid}>
          <div style={styles.explainSection}>
            <h4 style={styles.h4}>What Does E(X) Mean?</h4>
            <p style={styles.p}>
              The expected value E(X) represents the average waiting time or time between events. 
              For exponential distributions, this is simply 1/λ where λ is the rate of events.
            </p>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Interpreting Your Result</h4>
            <p style={styles.p}>
              With E(X) = {calculations.isValid ? calculations.expectedValue.toFixed(2) : '___'}, this means:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>Average wait time: {calculations.isValid ? calculations.expectedValue.toFixed(2) : '___'} units</li>
              <li style={styles.li}>Median wait is shorter: {calculations.isValid ? calculations.median.toFixed(2) : '___'} units</li>
              <li style={styles.li}>High variability: σ = μ = {calculations.isValid ? calculations.expectedValue.toFixed(2) : '___'}</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Real-World Examples</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><strong style={styles.liStrong}>Server requests (λ=2/sec):</strong> E(X) = 0.5 sec between requests</li>
              <li style={styles.li}><strong style={styles.liStrong}>Equipment failure (λ=0.1/hour):</strong> E(X) = 10 hours until failure</li>
              <li style={styles.li}><strong style={styles.liStrong}>Customer arrivals (λ=5/min):</strong> E(X) = 0.2 min between customers</li>
              <li style={styles.li}><strong style={styles.liStrong}>Radioactive decay (λ=0.01/year):</strong> E(X) = 100 years</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Why E(X) = 1 / λ</h4>
            <p style={styles.p}>
              The exponential distribution models the time until an event occurs when events happen at constant rate λ. 
              If events occur at rate λ per time unit, the average time between events is naturally 1/λ. 
              This reciprocal relationship comes directly from integrating x·f(x) over the exponential PDF.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// PDF Visualization Component
const PDFVisualization = ({ lambda, expectedValue, standardDeviation, median }) => {
  // Generate points for exponential curve
  const maxX = Math.min(expectedValue * 5, 50); // Show up to 5× mean or 50 units
  const points = [];
  const numPoints = 100;
  
  for (let i = 0; i <= numPoints; i++) {
    const x = (i / numPoints) * maxX;
    const y = lambda * Math.exp(-lambda * x);
    points.push({ x, y });
  }
  
  const maxY = lambda; // PDF height at x=0
  
  return (
    <div style={styles.pdfChart}>
      <div style={styles.chartTitle}>Probability Density Function with E(X) = {expectedValue.toFixed(2)}</div>
      
      <div style={styles.pdfContainer}>
        <div style={styles.yAxisLabelPDF}>Density</div>
        
        <div style={styles.pdfContent}>
          <div style={styles.pdfArea}>
            <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none">
              {/* Axes */}
              <line x1="0" y1="250" x2="1000" y2="250" stroke="#333" strokeWidth="2" />
              
              {/* Fill area under exponential curve - PROPER PATH */}
              <path
                d={`M 0 250 ${points.map((p) => {
                  const x = (p.x / maxX) * 1000;
                  const y = 250 - (p.y / maxY) * 200;
                  return `L ${x} ${y}`;
                }).join(' ')} L 1000 250 Z`}
                fill="rgba(0, 123, 255, 0.2)"
                stroke="none"
              />
              
              {/* Exponential curve outline */}
              <path
                d={points.map((p, i) => {
                  const x = (p.x / maxX) * 1000;
                  const y = 250 - (p.y / maxY) * 200;
                  return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                }).join(' ')}
                fill="none"
                stroke="#007bff"
                strokeWidth="3"
              />
              
              {/* E(X) line */}
              {expectedValue <= maxX && (
                <line
                  x1={(expectedValue / maxX) * 1000}
                  y1="0"
                  x2={(expectedValue / maxX) * 1000}
                  y2="250"
                  stroke="#dc3545"
                  strokeWidth="4"
                  strokeDasharray="8,4"
                />
              )}
              
              {/* Median line */}
              {median <= maxX && (
                <line
                  x1={(median / maxX) * 1000}
                  y1="0"
                  x2={(median / maxX) * 1000}
                  y2="250"
                  stroke="#28a745"
                  strokeWidth="3"
                  strokeDasharray="4,4"
                />
              )}
            </svg>
            
            {/* E(X) label */}
            {expectedValue <= maxX && (
              <div 
                style={{
                  ...styles.evLineLabel,
                  left: `${(expectedValue / maxX) * 100}%`
                }}
              >
                E(X) = {expectedValue.toFixed(2)}
              </div>
            )}
            
            {/* Median label */}
            {median <= maxX && (
              <div 
                style={{
                  ...styles.medianLineLabel,
                  left: `${(median / maxX) * 100}%`
                }}
              >
                Median = {median.toFixed(2)}
              </div>
            )}
          </div>
          
          {/* X-axis labels */}
          <div style={styles.xAxisLabels}>
            <span style={{...styles.xLabel, left: '0%'}}>0</span>
            <span style={{...styles.xLabel, left: '50%'}}>{(maxX / 2).toFixed(1)}</span>
            <span style={{...styles.xLabel, left: '100%'}}>{maxX.toFixed(1)}</span>
          </div>
        </div>
      </div>
      
      <div style={styles.pdfNote}>
        <strong>Note:</strong> Exponential decay from λ = {lambda.toFixed(3)} at x=0. 
        Red line shows mean E(X), green shows median (always smaller for exponential). 
        Memoryless property: P(X&gt;s+t | X&gt;s) = P(X&gt;t).
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
    marginBottom: '20px',
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
  parameterGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
  },
  parameterItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  parameterLabel: {
    fontSize: '1rem',
    color: '#2c3e50',
  },
  slider: {
    width: '100%',
    height: '6px',
    borderRadius: '3px',
    outline: 'none',
    WebkitAppearance: 'none',
    background: '#ddd',
  },
  parameterInput: {
    padding: '12px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    fontSize: '1.1rem',
    width: '100%',
  },
  inputInvalid: {
    borderColor: '#dc3545',
    background: '#fff5f5',
  },
  infoBox: {
    marginTop: '20px',
    padding: '15px',
    background: '#f8f9fa',
    borderRadius: '4px',
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    fontSize: '0.95rem',
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
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '15px',
    marginBottom: '15px',
  },
  comparisonInput: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  comparisonLabel: {
    fontSize: '0.9rem',
    color: '#495057',
    fontWeight: 500,
  },
  comparisonInputField: {
    padding: '8px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    fontSize: '0.95rem',
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
    color: '#dc3545',
  },
  comparisonLower: {
    color: '#28a745',
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
  medianLineLabel: {
    position: 'absolute',
    top: '40px',
    transform: 'translateX(-50%)',
    background: '#28a745',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '4px',
    fontWeight: 700,
    fontSize: '0.8rem',
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 6px rgba(40,167,69,0.3)',
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

export default ExponentialExpectedValueCalculator;