import { useState, useMemo } from 'react';

const RawDataExpectedValueCalculator = () => {
  const [rawInput, setRawInput] = useState('5, 7, 5, 9, 5, 8, 7, 5, 6');
  const [activeTab, setActiveTab] = useState('distribution');

  const handleReset = () => {
    setRawInput('');
    setActiveTab('distribution');
  };

  const validation = useMemo(() => {
    if (rawInput.trim() === '') {
      return {
        isValid: false,
        errors: [],
        isEmpty: true
      };
    }

    // Parse input - split by comma, newline, or space
    const tokens = rawInput
      .split(/[,\n\s]+/)
      .map(v => v.trim())
      .filter(v => v !== '');

    const errors = [];
    const validValues = [];
    const invalidTokens = [];

    tokens.forEach(token => {
      const num = parseFloat(token);
      if (isNaN(num)) {
        invalidTokens.push(token);
      } else {
        validValues.push(num);
      }
    });

    if (invalidTokens.length > 0) {
      errors.push(`Invalid values detected: ${invalidTokens.join(', ')}`);
    }

    if (validValues.length === 0 && invalidTokens.length > 0) {
      errors.push('No valid numeric values found');
    }

    return {
      isValid: validValues.length > 0 && invalidTokens.length === 0,
      errors,
      isEmpty: false,
      hasInvalidTokens: invalidTokens.length > 0,
      validCount: validValues.length,
      invalidCount: invalidTokens.length
    };
  }, [rawInput]);

  const calculations = useMemo(() => {
    // Parse input - split by comma, newline, or space
    const values = rawInput
      .split(/[,\n\s]+/)
      .map(v => v.trim())
      .filter(v => v !== '')
      .map(v => parseFloat(v))
      .filter(v => !isNaN(v));

    if (values.length === 0) {
      return {
        isValid: false,
        values: [],
        frequencyMap: {},
        outcomes: [],
        totalCount: 0,
        expectedValue: 0,
        variance: 0,
        standardDeviation: 0,
        contributions: []
      };
    }

    // Calculate frequency for each unique value
    const frequencyMap = {};
    values.forEach(val => {
      frequencyMap[val] = (frequencyMap[val] || 0) + 1;
    });

    const totalCount = values.length;

    // Create outcomes with probabilities
    const outcomes = Object.entries(frequencyMap).map(([value, count]) => ({
      value: parseFloat(value),
      count: count,
      probability: count / totalCount
    }));

    // Sort by value
    outcomes.sort((a, b) => a.value - b.value);

    // Calculate expected value
    const expectedValue = outcomes.reduce((sum, o) => sum + (o.value * o.probability), 0);

    // Calculate variance
    const variance = outcomes.reduce((sum, o) => {
      return sum + (o.probability * Math.pow(o.value - expectedValue, 2));
    }, 0);

    const standardDeviation = Math.sqrt(variance);

    // Calculate contributions
    const contributions = outcomes.map(o => ({
      value: o.value,
      probability: o.probability,
      contribution: o.value * o.probability
    }));

    return {
      isValid: true,
      values,
      frequencyMap,
      outcomes,
      totalCount,
      expectedValue,
      variance,
      standardDeviation,
      contributions
    };
  }, [rawInput]);

  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>Expected Value Calculator - Raw Data Method</h2>
      
      <div style={styles.intro}>
        <p style={styles.introText}>
          Enter your raw data values to calculate the expected value (mean). The calculator will automatically 
          count frequencies, derive probabilities, and compute the expected value. This is useful when you have 
          actual observations rather than known probabilities.
        </p>
      </div>

      <div style={styles.mainLayout}>
        {/* LEFT COLUMN - INPUT */}
        <div style={styles.leftColumn}>
          <div style={styles.inputSection}>
            <div style={styles.inputHeader}>
              <h3 style={styles.h3}>Enter Raw Data</h3>
              <button onClick={handleReset} style={styles.resetBtn}>
                Reset
              </button>
            </div>
            <p style={styles.inputDescription}>
              Enter numbers separated by commas, spaces, or line breaks
            </p>
            
            <textarea
              value={rawInput}
              onChange={(e) => setRawInput(e.target.value)}
              placeholder="Example: 5, 7, 5, 9, 5, 8, 7, 5, 6"
              style={{
                ...styles.textarea,
                ...(validation.hasInvalidTokens ? styles.textareaInvalid : {})
              }}
              rows={8}
            />

            {!validation.isEmpty && validation.errors.length > 0 && (
              <div style={styles.errorMessages}>
                {validation.errors.map((error, index) => (
                  <div key={index} style={styles.errorMessage}>
                    ⚠ {error}
                  </div>
                ))}
              </div>
            )}

            <div style={styles.dataStats}>
              <div style={styles.statItem}>
                <strong>Valid Data Points:</strong>
                <span style={validation.validCount > 0 ? styles.validText : {}}>{validation.validCount}</span>
              </div>
              {validation.invalidCount > 0 && (
                <div style={{...styles.statItem, ...styles.statItemInvalid}}>
                  <strong>Invalid Entries:</strong>
                  <span>{validation.invalidCount}</span>
                </div>
              )}
              {calculations.isValid && (
                <div style={styles.statItem}>
                  <strong>Unique Values:</strong>
                  <span>{calculations.outcomes.length}</span>
                </div>
              )}
            </div>
          </div>

          {calculations.isValid && validation.isValid && (
            <div style={styles.frequencySection}>
              <h3 style={styles.h3}>Frequency Distribution</h3>
              <div style={styles.frequencyTable}>
                <div style={styles.frequencyHeader}>
                  <span>Value</span>
                  <span>Count</span>
                  <span>Probability</span>
                </div>
                {calculations.outcomes.map((outcome, index) => (
                  <div key={index} style={styles.frequencyRow}>
                    <span style={styles.frequencyValue}>{outcome.value}</span>
                    <span style={styles.frequencyCount}>{outcome.count}</span>
                    <span style={styles.frequencyProb}>{outcome.probability.toFixed(4)}</span>
                  </div>
                ))}
                <div style={styles.frequencyTotal}>
                  <span><strong>Total</strong></span>
                  <span><strong>{calculations.totalCount}</strong></span>
                  <span><strong>1.0000</strong></span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN - RESULTS & VISUALIZATIONS */}
        <div style={styles.rightColumn}>
          {calculations.isValid && validation.isValid ? (
            <>
              <div style={styles.resultsSection}>
                <div style={styles.resultCard}>
                  <div style={styles.resultLabel}>Expected Value E(X)</div>
                  <div style={styles.resultValue}>
                    {calculations.expectedValue.toFixed(4)}
                  </div>
                  <div style={styles.resultSubLabel}>(Mean)</div>
                </div>

                <div style={styles.resultCard}>
                  <div style={styles.resultLabel}>Variance Var(X)</div>
                  <div style={styles.resultValue}>
                    {calculations.variance.toFixed(4)}
                  </div>
                </div>

                <div style={styles.resultCard}>
                  <div style={styles.resultLabel}>Standard Deviation σ</div>
                  <div style={styles.resultValue}>
                    {calculations.standardDeviation.toFixed(4)}
                  </div>
                </div>
              </div>

              <div style={styles.visualization}>
                <div style={styles.tabContainer}>
                  <button
                    onClick={() => setActiveTab('distribution')}
                    style={{
                      ...styles.tab,
                      ...(activeTab === 'distribution' ? styles.tabActive : {})
                    }}
                  >
                    Probability Distribution
                  </button>
                  <button
                    onClick={() => setActiveTab('breakdown')}
                    style={{
                      ...styles.tab,
                      ...(activeTab === 'breakdown' ? styles.tabActive : {})
                    }}
                  >
                    Calculation Breakdown
                  </button>
                  <button
                    onClick={() => setActiveTab('contributions')}
                    style={{
                      ...styles.tab,
                      ...(activeTab === 'contributions' ? styles.tabActive : {})
                    }}
                  >
                    Contributions
                  </button>
                </div>

                {activeTab === 'distribution' && (
                  <div style={styles.chart}>
                    <ProbabilityDistributionChart 
                      contributions={calculations.contributions}
                      expectedValue={calculations.expectedValue}
                    />
                  </div>
                )}

                {activeTab === 'breakdown' && (
                  <div style={styles.breakdownTab}>
                    <div style={styles.formula}>
                      <strong>Formula:</strong> E(X) = Σ(value × probability) = (Σ values) / n
                    </div>
                    
                    <div style={styles.steps}>
                      {calculations.contributions.map((contrib, index) => (
                        <div key={index} style={styles.step}>
                          <span style={styles.stepLabel}>Value {contrib.value}:</span>
                          <span style={styles.stepCalc}>
                            {contrib.value} × {contrib.probability.toFixed(4)} = {contrib.contribution.toFixed(4)}
                          </span>
                        </div>
                      ))}
                      
                      <div style={styles.stepTotal}>
                        <span style={styles.stepTotalLabel}>Total:</span>
                        <span style={styles.stepTotalCalc}>
                          {calculations.expectedValue.toFixed(4)}
                        </span>
                      </div>
                    </div>

                    <div style={styles.alternativeCalc}>
                      <strong>Alternative:</strong> ({calculations.values.join(' + ')}) / {calculations.totalCount} = {calculations.expectedValue.toFixed(4)}
                    </div>
                  </div>
                )}

                {activeTab === 'contributions' && (
                  <div style={styles.chart}>
                    <ContributionsChart contributions={calculations.contributions} />
                  </div>
                )}
              </div>
            </>
          ) : (
            <div style={styles.resultsPlaceholder}>
              <h3 style={styles.h3}>Results</h3>
              <p style={styles.placeholderText}>
                {validation.isEmpty 
                  ? 'Enter valid numeric data to see results'
                  : validation.hasInvalidTokens
                  ? 'Remove invalid entries to see results'
                  : 'Enter valid numeric data to see results'
                }
              </p>
            </div>
          )}
        </div>
      </div>

      <div style={styles.explanation}>
        <h3 style={styles.h3}>Understanding Raw Data Expected Value</h3>
        
        <div style={styles.explainGrid}>
          <div style={styles.explainSection}>
            <h4 style={styles.h4}>What is This Method?</h4>
            <p style={styles.p}>
              When you have raw observations (actual data points), the expected value is simply the arithmetic mean. 
              The calculator counts how often each value appears, derives probabilities from frequencies, 
              and computes E(X) = average of all values.
            </p>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>How It Works</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><strong style={styles.liStrong}>Step 1:</strong> Count frequency of each unique value</li>
              <li style={styles.li}><strong style={styles.liStrong}>Step 2:</strong> Calculate probability = count / total</li>
              <li style={styles.li}><strong style={styles.liStrong}>Step 3:</strong> Compute E(X) = Σ(value × probability)</li>
              <li style={styles.li}><strong style={styles.liStrong}>Result:</strong> Same as arithmetic mean</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>When to Use This Method</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><strong style={styles.liStrong}>Surveys:</strong> Responses on a scale (1-5 ratings)</li>
              <li style={styles.li}><strong style={styles.liStrong}>Experiments:</strong> Recorded measurements or counts</li>
              <li style={styles.li}><strong style={styles.liStrong}>Sample data:</strong> Historical observations</li>
              <li style={styles.li}><strong style={styles.liStrong}>Real-world data:</strong> Any dataset of numeric values</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Example Applications</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><strong style={styles.liStrong}>Test scores:</strong> Average performance in a class</li>
              <li style={styles.li}><strong style={styles.liStrong}>Sales data:</strong> Expected daily sales based on history</li>
              <li style={styles.li}><strong style={styles.liStrong}>Dice rolls:</strong> Experimental probability from trials</li>
              <li style={styles.li}><strong style={styles.liStrong}>Survey responses:</strong> Average rating or response</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Probability Distribution Chart Component
const ProbabilityDistributionChart = ({ contributions, expectedValue }) => {
  const sortedContributions = [...contributions].sort((a, b) => a.value - b.value);
  const maxProb = Math.max(...sortedContributions.map(c => c.probability));
  const minValue = Math.min(...sortedContributions.map(c => c.value));
  const maxValue = Math.max(...sortedContributions.map(c => c.value));
  const valueRange = maxValue - minValue;
  
  return (
    <div style={styles.distributionChart}>
      <div style={styles.chartArea}>
        <div style={styles.yAxisLabel}>Probability</div>
        
        <div style={styles.chartContent}>
          {valueRange > 0 && (
            <div 
              style={{
                ...styles.dashedLine,
                left: `${((expectedValue - minValue) / valueRange) * 100}%`
              }}
            >
              <div style={styles.sideLabel}>
                E(X) = {expectedValue.toFixed(2)}
              </div>
            </div>
          )}
          
          <div style={styles.barsContainer}>
            {sortedContributions.map((contrib, index) => {
              const barHeight = maxProb > 0 ? (contrib.probability / maxProb) * 100 : 0;
              
              return (
                <div key={index} style={styles.barWrapper}>
                  <div style={styles.barColumn}>
                    <div 
                      style={{
                        ...styles.distributionBar,
                        height: `${barHeight}%`
                      }}
                    >
                      <span style={styles.distributionBarLabel}>
                        {contrib.probability.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div style={styles.xAxisLabel}>{contrib.value}</div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div style={styles.xAxisTitle}>Value</div>
      </div>
    </div>
  );
};

// Contributions Chart Component
const ContributionsChart = ({ contributions }) => {
  const maxAbsContribution = Math.max(...contributions.map(c => Math.abs(c.contribution)));
  
  return (
    <div>
      {contributions.map((contrib, index) => {
        const barWidth = maxAbsContribution > 0 ? (Math.abs(contrib.contribution) / maxAbsContribution) * 100 : 0;
        const isNegative = contrib.contribution < 0;
        
        return (
          <div key={index} style={styles.barRow}>
            <div style={styles.barLabel}>
              Value {contrib.value}
            </div>
            <div style={styles.barContainer}>
              <div 
                style={{
                  ...styles.bar,
                  ...(isNegative ? styles.barNegative : styles.barPositive),
                  width: `${barWidth}%`
                }}
              >
                <span style={styles.barValue}>{contrib.contribution.toFixed(2)}</span>
              </div>
            </div>
          </div>
        );
      })}
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
    fontSize: '1.3rem',
    marginBottom: '15px',
    color: '#2c3e50',
  },
  h4: {
    fontSize: '1.1rem',
    marginBottom: '10px',
    color: '#495057',
  },
  intro: {
    background: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '30px',
    borderLeft: '4px solid #007bff',
  },
  introText: {
    margin: 0,
    lineHeight: 1.6,
    color: '#333',
  },
  mainLayout: {
    display: 'grid',
    gridTemplateColumns: '550px 1fr',
    gap: '30px',
    marginBottom: '40px',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputSection: {
    padding: '20px',
    background: '#fff',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
  },
  inputHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
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
  inputDescription: {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '10px',
  },
  textarea: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    fontSize: '0.95rem',
    fontFamily: "'Courier New', monospace",
    resize: 'vertical',
  },
  textareaInvalid: {
    borderColor: '#dc3545',
    background: '#fff5f5',
  },
  errorMessages: {
    marginTop: '10px',
  },
  errorMessage: {
    padding: '10px',
    background: '#fff3cd',
    border: '1px solid #ffc107',
    borderRadius: '4px',
    color: '#856404',
    fontSize: '0.9rem',
    marginBottom: '8px',
  },
  dataStats: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    marginTop: '15px',
  },
  statItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    background: '#f8f9fa',
    borderRadius: '4px',
    fontSize: '0.9rem',
  },
  statItemInvalid: {
    background: '#fff3cd',
    border: '1px solid #ffc107',
  },
  validText: {
    color: '#28a745',
    fontWeight: 600,
  },
  frequencySection: {
    padding: '20px',
    background: '#fff',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
  },
  frequencyTable: {
    width: '100%',
  },
  frequencyHeader: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '10px',
    padding: '10px',
    background: '#f1f3f5',
    borderRadius: '4px',
    fontWeight: 600,
    marginBottom: '8px',
    color: '#495057',
    fontSize: '0.9rem',
  },
  frequencyRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '10px',
    padding: '8px 10px',
    borderBottom: '1px solid #e9ecef',
    fontSize: '0.9rem',
  },
  frequencyValue: {
    fontWeight: 600,
    color: '#007bff',
  },
  frequencyCount: {
    textAlign: 'center',
  },
  frequencyProb: {
    textAlign: 'right',
    fontFamily: "'Courier New', monospace",
  },
  frequencyTotal: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '10px',
    padding: '10px',
    borderTop: '2px solid #007bff',
    marginTop: '8px',
    fontSize: '0.9rem',
  },
  resultsSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '15px',
  },
  resultCard: {
    background: 'linear-gradient(135deg, #007bff 0%, #204bc2 100%)',
    color: 'white',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  resultLabel: {
    fontSize: '0.85rem',
    opacity: 0.9,
    marginBottom: '8px',
  },
  resultValue: {
    fontSize: '1.8rem',
    fontWeight: 700,
  },
  resultSubLabel: {
    fontSize: '0.8rem',
    opacity: 0.8,
    marginTop: '4px',
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
    padding: '20px',
    background: 'white',
  },
  breakdownTab: {
    padding: '20px',
    background: 'white',
  },
  formula: {
    padding: '12px',
    background: '#f8f9fa',
    borderLeft: '4px solid #007bff',
    marginBottom: '15px',
    fontSize: '1rem',
  },
  steps: {
    background: '#f8f9fa',
    padding: '15px',
    borderRadius: '4px',
    marginBottom: '15px',
  },
  step: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px',
    borderBottom: '1px solid #e9ecef',
    fontSize: '0.9rem',
  },
  stepLabel: {
    fontWeight: 600,
    color: '#495057',
  },
  stepCalc: {
    fontFamily: "'Courier New', monospace",
    color: '#212529',
  },
  stepTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 8px 8px',
    marginTop: '8px',
    borderTop: '2px solid #007bff',
    fontSize: '1rem',
  },
  stepTotalLabel: {
    color: '#007bff',
    fontWeight: 600,
  },
  stepTotalCalc: {
    color: '#007bff',
    fontWeight: 700,
    fontFamily: "'Courier New', monospace",
  },
  alternativeCalc: {
    padding: '12px',
    background: '#e7f3ff',
    borderRadius: '4px',
    fontSize: '0.9rem',
    fontFamily: "'Courier New', monospace",
    wordBreak: 'break-all',
  },
  distributionChart: {
    width: '100%',
  },
  chartArea: {
    position: 'relative',
  },
  yAxisLabel: {
    position: 'absolute',
    left: '-30px',
    top: '50%',
    transform: 'translateY(-50%) rotate(-90deg)',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#495057',
  },
  chartContent: {
    position: 'relative',
    marginLeft: '10px',
  },
  dashedLine: {
    position: 'absolute',
    top: 0,
    bottom: '40px',
    width: '2px',
    borderLeft: '3px dashed #dc3545',
    zIndex: 10,
  },
  sideLabel: {
    position: 'absolute',
    top: '50%',
    right: '-110px',
    transform: 'translateY(-50%)',
    background: '#dc3545',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '4px',
    fontWeight: 600,
    fontSize: '0.85rem',
    whiteSpace: 'nowrap',
  },
  barsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: '250px',
    gap: '10px',
  },
  barWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '100px',
  },
  barColumn: {
    width: '100%',
    height: '200px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'relative',
  },
  distributionBar: {
    width: '60%',
    background: 'linear-gradient(180deg, #007bff, #204bc2)',
    borderRadius: '4px 4px 0 0',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: '8px',
    minHeight: '30px',
  },
  distributionBarLabel: {
    color: 'white',
    fontSize: '0.8rem',
    fontWeight: 600,
  },
  xAxisLabel: {
    marginTop: '8px',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#495057',
  },
  xAxisTitle: {
    textAlign: 'center',
    marginTop: '15px',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#495057',
  },
  barRow: {
    marginBottom: '12px',
  },
  barLabel: {
    fontWeight: 600,
    marginBottom: '4px',
    color: '#495057',
    fontSize: '0.9rem',
  },
  barContainer: {
    position: 'relative',
    height: '35px',
    background: '#f1f3f5',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: '10px',
    transition: 'width 0.3s ease',
    minWidth: '60px',
  },
  barPositive: {
    background: 'linear-gradient(90deg, #007bff, #204bc2)',
  },
  barNegative: {
    background: 'linear-gradient(90deg, #dc3545, #c82333)',
  },
  barValue: {
    color: 'white',
    fontWeight: 600,
    fontSize: '0.85rem',
  },
  resultsPlaceholder: {
    padding: '30px',
    background: '#f8f9fa',
    borderRadius: '8px',
    border: '2px dashed #dee2e6',
    textAlign: 'center',
  },
  placeholderText: {
    color: '#6c757d',
    margin: 0,
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
};

export default RawDataExpectedValueCalculator;