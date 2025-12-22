import { useState, useMemo } from 'react';

const DiscreteUniformExpectedValueCalculator = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(6);
  const [activeTab, setActiveTab] = useState('distribution');

  const handleReset = () => {
    setA(1);
    setB(6);
    setActiveTab('distribution');
  };

  const updateA = (value) => {
    if (value === '' || value === '-') {
      setA('');
    } else {
      const num = parseInt(value);
      if (!isNaN(num)) {
        setA(num);
      }
    }
  };

  const updateB = (value) => {
    if (value === '' || value === '-') {
      setB('');
    } else {
      const num = parseInt(value);
      if (!isNaN(num)) {
        setB(num);
      }
    }
  };

  const calculations = useMemo(() => {
    const aVal = typeof a === 'string' ? parseInt(a) : a;
    const bVal = typeof b === 'string' ? parseInt(b) : b;

    if (isNaN(aVal) || isNaN(bVal) || bVal < aVal) {
      return {
        isValid: false,
        a: aVal,
        b: bVal,
        outcomes: [],
        expectedValue: 0,
        variance: 0,
        standardDeviation: 0,
        contributions: []
      };
    }

    // Generate all outcomes
    const n = bVal - aVal + 1;
    const probability = 1 / n;
    
    const outcomes = [];
    for (let k = aVal; k <= bVal; k++) {
      outcomes.push({
        value: k,
        probability: probability,
        contribution: k * probability
      });
    }

    // Calculate expected value
    const expectedValue = (aVal + bVal) / 2;

    // Calculate variance: ((b - a + 1)² - 1) / 12
    const variance = (Math.pow(n, 2) - 1) / 12;
    const standardDeviation = Math.sqrt(variance);

    return {
      isValid: true,
      a: aVal,
      b: bVal,
      n: n,
      outcomes,
      expectedValue,
      variance,
      standardDeviation,
      contributions: outcomes.map(o => ({
        value: o.value,
        probability: o.probability,
        contribution: o.contribution
      }))
    };
  }, [a, b]);

  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>Expected Value Calculator - Discrete Uniform Distribution</h2>
      
      <div style={styles.intro}>
        <p style={styles.introText}>
          The <strong>discrete uniform distribution</strong> describes a scenario where all outcomes are equally likely. 
          Common examples include rolling a fair die, picking a random integer from a range, or selecting lottery numbers. 
          Each value has the same probability of occurring.
        </p>
      </div>

      <div style={styles.mainLayout}>
        {/* LEFT COLUMN - INPUT */}
        <div style={styles.leftColumn}>
          <div style={styles.inputSection}>
            <div style={styles.inputHeader}>
              <h3 style={styles.h3}>Distribution Parameters</h3>
              <button onClick={handleReset} style={styles.resetBtn}>
                Reset
              </button>
            </div>
            
            <div style={styles.parameterGrid}>
              <div style={styles.parameterItem}>
                <label style={styles.parameterLabel}>
                  <strong>a</strong> (Minimum Value)
                </label>
                <input
                  type="number"
                  value={a}
                  onChange={(e) => updateA(e.target.value)}
                  style={{
                    ...styles.parameterInput,
                    ...(a !== '' && (isNaN(parseInt(a)) || (b !== '' && parseInt(a) > parseInt(b))) ? styles.inputInvalid : {})
                  }}
                  step="1"
                />
                <span style={styles.parameterDescription}>Smallest possible outcome</span>
              </div>

              <div style={styles.parameterItem}>
                <label style={styles.parameterLabel}>
                  <strong>b</strong> (Maximum Value)
                </label>
                <input
                  type="number"
                  value={b}
                  onChange={(e) => updateB(e.target.value)}
                  style={{
                    ...styles.parameterInput,
                    ...(b !== '' && (isNaN(parseInt(b)) || (a !== '' && parseInt(b) < parseInt(a))) ? styles.inputInvalid : {})
                  }}
                  step="1"
                />
                <span style={styles.parameterDescription}>Largest possible outcome</span>
              </div>
            </div>

            {!calculations.isValid && a !== '' && b !== '' && (
              <div style={styles.errorMessage}>
                ⚠ Maximum value (b) must be greater than or equal to minimum value (a)
              </div>
            )}

            {calculations.isValid && (
              <div style={styles.infoBox}>
                <div style={styles.infoRow}>
                  <span><strong>Number of outcomes:</strong></span>
                  <span>{calculations.n}</span>
                </div>
                <div style={styles.infoRow}>
                  <span><strong>Probability each:</strong></span>
                  <span>1/{calculations.n} = {(1/calculations.n).toFixed(4)}</span>
                </div>
                <div style={styles.infoRow}>
                  <span><strong>Formula:</strong></span>
                  <span>E(X) = (a + b) / 2</span>
                </div>
              </div>
            )}
          </div>

          {calculations.isValid && calculations.n <= 20 && (
            <div style={styles.outcomesSection}>
              <h3 style={styles.h3}>All Outcomes</h3>
              <div style={styles.outcomesTable}>
                <div style={styles.outcomesHeader}>
                  <span>Value</span>
                  <span>Probability</span>
                  <span>Contribution</span>
                </div>
                {calculations.outcomes.map((outcome, index) => (
                  <div key={index} style={styles.outcomesRow}>
                    <span style={styles.outcomeValue}>{outcome.value}</span>
                    <span style={styles.outcomeProbability}>{outcome.probability.toFixed(4)}</span>
                    <span style={styles.outcomeContribution}>{outcome.contribution.toFixed(4)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {calculations.isValid && calculations.n > 20 && (
            <div style={styles.largeRangeNote}>
              <strong>Note:</strong> Range contains {calculations.n} outcomes. Individual values not displayed for ranges larger than 20.
            </div>
          )}
        </div>

        {/* RIGHT COLUMN - RESULTS & VISUALIZATIONS */}
        <div style={styles.rightColumn}>
          {calculations.isValid ? (
            <>
              <div style={styles.resultsSection}>
                <div style={styles.resultCard}>
                  <div style={styles.resultLabel}>Expected Value E(X)</div>
                  <div style={styles.resultValue}>
                    {calculations.expectedValue.toFixed(4)}
                  </div>
                  <div style={styles.resultFormula}>
                    ({calculations.a} + {calculations.b}) / 2
                  </div>
                </div>

                <div style={styles.resultCard}>
                  <div style={styles.resultLabel}>Variance Var(X)</div>
                  <div style={styles.resultValue}>
                    {calculations.variance.toFixed(4)}
                  </div>
                  <div style={styles.resultFormula}>
                    ({calculations.n}² - 1) / 12
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
                  {calculations.n <= 20 && (
                    <button
                      onClick={() => setActiveTab('contributions')}
                      style={{
                        ...styles.tab,
                        ...(activeTab === 'contributions' ? styles.tabActive : {})
                      }}
                    >
                      Contributions
                    </button>
                  )}
                </div>

                {activeTab === 'distribution' && (
                  <div style={styles.chart}>
                    {calculations.n <= 30 ? (
                      <ProbabilityDistributionChart 
                        contributions={calculations.contributions}
                        expectedValue={calculations.expectedValue}
                      />
                    ) : (
                      <div style={styles.largeRangeChart}>
                        <p>Range too large to display individual bars ({calculations.n} outcomes)</p>
                        <div style={styles.summaryStats}>
                          <div><strong>All values from {calculations.a} to {calculations.b}</strong></div>
                          <div>Each with probability: 1/{calculations.n} = {(1/calculations.n).toFixed(6)}</div>
                          <div style={styles.expectedValueHighlight}>
                            Expected Value E(X) = {calculations.expectedValue.toFixed(4)}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'breakdown' && (
                  <div style={styles.breakdownTab}>
                    <div style={styles.formula}>
                      <strong>Formula:</strong> E(X) = (a + b) / 2
                    </div>
                    
                    <div style={styles.steps}>
                      <div style={styles.step}>
                        <span style={styles.stepLabel}>Minimum (a):</span>
                        <span style={styles.stepCalc}>{calculations.a}</span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepLabel}>Maximum (b):</span>
                        <span style={styles.stepCalc}>{calculations.b}</span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepLabel}>Number of outcomes:</span>
                        <span style={styles.stepCalc}>b - a + 1 = {calculations.n}</span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepLabel}>Probability each:</span>
                        <span style={styles.stepCalc}>1/{calculations.n} = {(1/calculations.n).toFixed(6)}</span>
                      </div>
                      
                      <div style={styles.stepTotal}>
                        <span style={styles.stepTotalLabel}>Expected Value:</span>
                        <span style={styles.stepTotalCalc}>
                          ({calculations.a} + {calculations.b}) / 2 = {calculations.expectedValue.toFixed(4)}
                        </span>
                      </div>
                    </div>

                    <div style={styles.note}>
                      <strong>Alternative calculation:</strong> Since all outcomes are equally likely, E(X) is simply 
                      the average of the minimum and maximum values.
                    </div>
                  </div>
                )}

                {activeTab === 'contributions' && calculations.n <= 20 && (
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
                Enter valid parameters where b ≥ a to see results
              </p>
            </div>
          )}
        </div>
      </div>

      <div style={styles.explanation}>
        <h3 style={styles.h3}>Understanding Discrete Uniform Distribution</h3>
        
        <div style={styles.explainGrid}>
          <div style={styles.explainSection}>
            <h4 style={styles.h4}>What is Discrete Uniform Distribution?</h4>
            <p style={styles.p}>
              A discrete uniform distribution occurs when all outcomes in a finite set are equally likely. 
              Each value has the same probability: 1 / (number of outcomes). This is the fairest possible distribution.
            </p>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Key Properties</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><strong style={styles.liStrong}>Equal probability:</strong> P(X = k) = 1/(b - a + 1) for all k</li>
              <li style={styles.li}><strong style={styles.liStrong}>Expected value:</strong> E(X) = (a + b) / 2 (midpoint)</li>
              <li style={styles.li}><strong style={styles.liStrong}>Variance:</strong> Var(X) = ((b - a + 1)² - 1) / 12</li>
              <li style={styles.li}><strong style={styles.liStrong}>Symmetric:</strong> Distribution is symmetric around E(X)</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Common Examples</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><strong style={styles.liStrong}>Fair die:</strong> Rolling 1-6, each has probability 1/6</li>
              <li style={styles.li}><strong style={styles.liStrong}>Random selection:</strong> Picking a number from 1 to 100</li>
              <li style={styles.li}><strong style={styles.liStrong}>Lottery:</strong> Drawing numbers from a finite set</li>
              <li style={styles.li}><strong style={styles.liStrong}>Random assignment:</strong> Assigning people to equal groups</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Real-World Applications</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><strong style={styles.liStrong}>Games:</strong> Fair dice, card draws, spinners</li>
              <li style={styles.li}><strong style={styles.liStrong}>Sampling:</strong> Random selection from a list</li>
              <li style={styles.li}><strong style={styles.liStrong}>Simulations:</strong> Generating random integers</li>
              <li style={styles.li}><strong style={styles.liStrong}>Cryptography:</strong> Random number generation</li>
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
                        {contrib.probability.toFixed(3)}
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
        
        return (
          <div key={index} style={styles.barRow}>
            <div style={styles.barLabel}>
              Value {contrib.value}
            </div>
            <div style={styles.barContainer}>
              <div 
                style={{
                  ...styles.bar,
                  ...styles.barPositive,
                  width: `${barWidth}%`
                }}
              >
                <span style={styles.barValue}>{contrib.contribution.toFixed(4)}</span>
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
  parameterDescription: {
    fontSize: '0.85rem',
    color: '#6c757d',
    fontStyle: 'italic',
  },
  errorMessage: {
    marginTop: '15px',
    padding: '12px',
    background: '#fff3cd',
    border: '1px solid #ffc107',
    borderRadius: '4px',
    color: '#856404',
    fontSize: '0.9rem',
  },
  infoBox: {
    marginTop: '20px',
    padding: '15px',
    background: '#e7f3ff',
    borderRadius: '4px',
    border: '1px solid #007bff',
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #cce5ff',
    fontSize: '0.95rem',
  },
  outcomesSection: {
    padding: '20px',
    background: '#fff',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
  },
  outcomesTable: {
    width: '100%',
  },
  outcomesHeader: {
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
  outcomesRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '10px',
    padding: '8px 10px',
    borderBottom: '1px solid #e9ecef',
    fontSize: '0.9rem',
  },
  outcomeValue: {
    fontWeight: 600,
    color: '#007bff',
  },
  outcomeProbability: {
    textAlign: 'center',
    fontFamily: "'Courier New', monospace",
  },
  outcomeContribution: {
    textAlign: 'right',
    fontFamily: "'Courier New', monospace",
  },
  largeRangeNote: {
    padding: '15px',
    background: '#fff3cd',
    border: '1px solid #ffc107',
    borderRadius: '4px',
    fontSize: '0.9rem',
    color: '#856404',
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
    marginBottom: '4px',
  },
  resultFormula: {
    fontSize: '0.8rem',
    opacity: 0.8,
    fontFamily: "'Courier New', monospace",
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
  largeRangeChart: {
    padding: '40px',
    textAlign: 'center',
  },
  summaryStats: {
    marginTop: '20px',
    padding: '20px',
    background: '#f8f9fa',
    borderRadius: '4px',
  },
  expectedValueHighlight: {
    marginTop: '15px',
    padding: '10px',
    background: '#007bff',
    color: 'white',
    borderRadius: '4px',
    fontSize: '1.1rem',
    fontWeight: 600,
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
  note: {
    padding: '12px',
    background: '#e7f3ff',
    borderRadius: '4px',
    fontSize: '0.9rem',
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
    overflowX: 'auto',
  },
  barWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '40px',
    maxWidth: '80px',
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
    width: '80%',
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
    fontSize: '0.75rem',
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

export default DiscreteUniformExpectedValueCalculator;