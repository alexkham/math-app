import { useState, useMemo } from 'react';

const ExpectedValueCalculator = () => {
  const [outcomes, setOutcomes] = useState([
    { value: 100, probability: 0.25 },
    { value: 50, probability: 0.5 },
    { value: -20, probability: 0.25 }
  ]);
  const [activeTab, setActiveTab] = useState('distribution');

  const addOutcome = () => {
    setOutcomes([...outcomes, { value: 0, probability: 0 }]);
  };

  const removeOutcome = (index) => {
    if (outcomes.length > 1) {
      setOutcomes(outcomes.filter((_, i) => i !== index));
    }
  };

  const updateOutcome = (index, field, value) => {
    const newOutcomes = [...outcomes];
    
    if (field === 'probability') {
      const numValue = parseFloat(value);
      if (value === '' || value === '-') {
        newOutcomes[index][field] = '';
      } else if (!isNaN(numValue)) {
        newOutcomes[index][field] = Math.max(0, Math.min(1, numValue));
      }
    } else if (field === 'value') {
      if (value === '' || value === '-') {
        newOutcomes[index][field] = value;
      } else {
        const numValue = parseFloat(value);
        if (!isNaN(numValue)) {
          newOutcomes[index][field] = numValue;
        }
      }
    }
    
    setOutcomes(newOutcomes);
  };

  const calculations = useMemo(() => {
    const validOutcomes = outcomes.filter(o => {
      const val = typeof o.value === 'string' ? parseFloat(o.value) : o.value;
      const prob = typeof o.probability === 'string' ? parseFloat(o.probability) : o.probability;
      return !isNaN(val) && !isNaN(prob);
    });

    const totalProbability = validOutcomes.reduce((sum, o) => {
      const prob = typeof o.probability === 'string' ? parseFloat(o.probability) : o.probability;
      return sum + prob;
    }, 0);
    
    const expectedValue = validOutcomes.reduce((sum, o) => {
      const val = typeof o.value === 'string' ? parseFloat(o.value) : o.value;
      const prob = typeof o.probability === 'string' ? parseFloat(o.probability) : o.probability;
      return sum + (val * prob);
    }, 0);
    
    const variance = validOutcomes.reduce((sum, o) => {
      const val = typeof o.value === 'string' ? parseFloat(o.value) : o.value;
      const prob = typeof o.probability === 'string' ? parseFloat(o.probability) : o.probability;
      return sum + (prob * Math.pow(val - expectedValue, 2));
    }, 0);
    
    const standardDeviation = Math.sqrt(variance);
    
    const contributions = validOutcomes.map(o => {
      const val = typeof o.value === 'string' ? parseFloat(o.value) : o.value;
      const prob = typeof o.probability === 'string' ? parseFloat(o.probability) : o.probability;
      return {
        value: val,
        probability: prob,
        contribution: val * prob
      };
    });

    return {
      totalProbability,
      expectedValue,
      variance,
      standardDeviation,
      contributions,
      isValid: Math.abs(totalProbability - 1.0) < 0.001 && validOutcomes.length > 0
    };
  }, [outcomes]);

  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>Expected Value Calculator - Direct Discrete Method</h2>
      
      <div style={styles.intro}>
        <p style={styles.introText}>
          The <strong>expected value</strong> (also called expectation or mean) represents the average 
          outcome you would expect if you repeated an experiment many times. It's calculated by multiplying 
          each possible outcome by its probability and summing the results.
        </p>
      </div>

      <div style={styles.mainLayout}>
        {/* LEFT COLUMN - INPUT ONLY */}
        <div style={styles.leftColumn}>
          <div style={styles.inputSection}>
            <h3 style={styles.h3}>Enter Outcomes and Probabilities</h3>
            
            <div style={styles.tableHeader}>
              <span>Value</span>
              <span>Probability</span>
              <span>Contribution</span>
              <span></span>
            </div>

            {outcomes.map((outcome, index) => {
              const val = typeof outcome.value === 'string' ? outcome.value : outcome.value;
              const prob = typeof outcome.probability === 'string' ? outcome.probability : outcome.probability;
              const isValidValue = val !== '' && val !== '-' && !isNaN(parseFloat(val));
              const isValidProb = prob !== '' && !isNaN(parseFloat(prob)) && parseFloat(prob) >= 0 && parseFloat(prob) <= 1;
              
              return (
                <div key={index} style={styles.inputRow}>
                  <input
                    type="number"
                    value={val}
                    onChange={(e) => updateOutcome(index, 'value', e.target.value)}
                    placeholder="Value"
                    step="any"
                    style={{
                      ...styles.input,
                      ...(val !== '' && !isValidValue ? styles.inputInvalid : {})
                    }}
                  />
                  <input
                    type="number"
                    value={prob}
                    onChange={(e) => updateOutcome(index, 'probability', e.target.value)}
                    placeholder="0.0 - 1.0"
                    min="0"
                    max="1"
                    step="0.01"
                    style={{
                      ...styles.input,
                      ...(prob !== '' && !isValidProb ? styles.inputInvalid : {})
                    }}
                  />
                  <div style={styles.contribution}>
                    {isValidValue && isValidProb ? (parseFloat(val) * parseFloat(prob)).toFixed(4) : '—'}
                  </div>
                  <button
                    onClick={() => removeOutcome(index)}
                    style={{
                      ...styles.removeBtn,
                      ...(outcomes.length === 1 ? styles.removeBtnDisabled : {})
                    }}
                    disabled={outcomes.length === 1}
                    title="Remove outcome"
                  >
                    ×
                  </button>
                </div>
              );
            })}

            <button onClick={addOutcome} style={styles.addBtn}>
              + Add Outcome
            </button>

            <div style={styles.probabilitySum}>
              <strong>Total Probability:</strong>
              <span style={calculations.isValid ? styles.valid : styles.invalid}>
                {calculations.totalProbability.toFixed(4)}
              </span>
              {!calculations.isValid && calculations.totalProbability > 0 && (
                <span style={styles.warning}>⚠ Must equal 1.0</span>
              )}
            </div>

            {!calculations.isValid && (
              <div style={styles.validationMessage}>
                {calculations.totalProbability === 0 ? 
                  'Please enter valid values and probabilities' : 
                  'Probabilities must sum to exactly 1.0 to calculate expected value'
                }
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN - RESULTS & TABS */}
        <div style={styles.rightColumn}>
          {calculations.isValid ? (
            <>
              <div style={styles.resultsSection}>
                <div style={styles.resultCard}>
                  <div style={styles.resultLabel}>Expected Value E(X)</div>
                  <div style={styles.resultValue}>
                    {calculations.expectedValue.toFixed(4)}
                  </div>
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
                      <strong>Formula:</strong> E(X) = Σ(value × probability)
                    </div>
                    
                    <div style={styles.steps}>
                      {calculations.contributions.map((contrib, index) => (
                        <div key={index} style={styles.step}>
                          <span style={styles.stepLabel}>Outcome {index + 1}:</span>
                          <span style={styles.stepCalc}>
                            {contrib.value} × {contrib.probability} = {contrib.contribution.toFixed(4)}
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
                Enter valid outcomes with probabilities that sum to 1.0 to see results
              </p>
            </div>
          )}
        </div>
      </div>

      <div style={styles.explanation}>
        <h3 style={styles.h3}>Understanding Expected Value</h3>
        
        <div style={styles.explainGrid}>
          <div style={styles.explainSection}>
            <h4 style={styles.h4}>What is Expected Value?</h4>
            <p style={styles.p}>
              Expected value represents the average outcome you would expect over many trials. It's a weighted 
              average where each outcome is weighted by its probability of occurring.
            </p>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Interpretation</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><strong style={styles.liStrong}>Positive E(X):</strong> On average, you gain value</li>
              <li style={styles.li}><strong style={styles.liStrong}>Negative E(X):</strong> On average, you lose value</li>
              <li style={styles.li}><strong style={styles.liStrong}>E(X) = 0:</strong> A fair game - neither gain nor loss on average</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Common Applications</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><strong style={styles.liStrong}>Games:</strong> Determining if a game is favorable</li>
              <li style={styles.li}><strong style={styles.liStrong}>Investments:</strong> Comparing expected returns</li>
              <li style={styles.li}><strong style={styles.liStrong}>Insurance:</strong> Calculating fair premiums</li>
              <li style={styles.li}><strong style={styles.liStrong}>Decision Making:</strong> Choosing between uncertain options</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Variance and Standard Deviation</h4>
            <p style={styles.p}>
              While expected value tells you the average outcome, <strong>variance</strong> and
              <strong> standard deviation</strong> measure how spread out the outcomes are:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}><strong style={styles.liStrong}>Low variance:</strong> Outcomes are clustered near the expected value</li>
              <li style={styles.li}><strong style={styles.liStrong}>High variance:</strong> Outcomes are more spread out (higher risk)</li>
              <li style={styles.li}><strong style={styles.liStrong}>Standard deviation (σ):</strong> Square root of variance, in same units as outcomes</li>
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
        
        <div style={styles.xAxisTitle}>Outcome Value</div>
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
              Outcome {index + 1}
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
  tableHeader: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 100px 40px',
    gap: '8px',
    padding: '8px',
    background: '#f1f3f5',
    borderRadius: '4px',
    fontWeight: 600,
    marginBottom: '10px',
    color: '#495057',
    fontSize: '0.9rem',
  },
  inputRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 100px 40px',
    gap: '8px',
    marginBottom: '8px',
    alignItems: 'center',
  },
  input: {
    padding: '8px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    fontSize: '0.95rem',
    width: '100%',
  },
  inputInvalid: {
    borderColor: '#dc3545',
    background: '#fff5f5',
  },
  contribution: {
    padding: '8px',
    background: '#e9ecef',
    borderRadius: '4px',
    textAlign: 'center',
    fontWeight: 500,
    color: '#495057',
    fontSize: '0.9rem',
  },
  removeBtn: {
    width: '40px',
    height: '40px',
    border: '1px solid #dc3545',
    background: 'white',
    color: '#dc3545',
    borderRadius: '4px',
    fontSize: '1.5rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeBtnDisabled: {
    opacity: 0.3,
    cursor: 'not-allowed',
  },
  addBtn: {
    padding: '10px 20px',
    background: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '0.95rem',
    cursor: 'pointer',
    marginTop: '10px',
    fontWeight: 500,
  },
  probabilitySum: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '15px',
    padding: '12px',
    background: '#f8f9fa',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  valid: {
    color: '#28a745',
    fontWeight: 600,
  },
  invalid: {
    color: '#dc3545',
    fontWeight: 600,
  },
  warning: {
    color: '#dc3545',
    fontSize: '0.85rem',
    marginLeft: '10px',
  },
  validationMessage: {
    marginTop: '12px',
    padding: '10px',
    background: '#fff3cd',
    border: '1px solid #ffc107',
    borderRadius: '4px',
    color: '#856404',
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

export default ExpectedValueCalculator;