import { useState, useMemo } from 'react';

const GeometricExpectedValueCalculator = () => {
  const [p, setP] = useState(0.2);
  const [activeTab, setActiveTab] = useState('distribution');
  const [maxDisplay, setMaxDisplay] = useState(20);

  const handleReset = () => {
    setP(0.2);
    setActiveTab('distribution');
    setMaxDisplay(20);
  };

  const updateP = (value) => {
    if (value === '' || value === '.') {
      setP(value);
    } else {
      const num = parseFloat(value);
      if (!isNaN(num)) {
        setP(Math.max(0.0001, Math.min(1, num))); // Avoid p=0
      }
    }
  };

  // Geometric PMF: P(X = k) = (1-p)^(k-1) * p
  const geometricPMF = (k, p) => {
    return Math.pow(1 - p, k - 1) * p;
  };

  const calculations = useMemo(() => {
    const pVal = typeof p === 'string' ? parseFloat(p) : p;

    if (isNaN(pVal) || pVal <= 0 || pVal > 1) {
      return {
        isValid: false,
        p: pVal,
        outcomes: [],
        expectedValue: 0,
        variance: 0,
        standardDeviation: 0,
        contributions: []
      };
    }

    // Generate outcomes up to maxDisplay or until cumulative prob > 0.999
    const outcomes = [];
    let cumulativeProb = 0;
    let k = 1;
    
    while (k <= maxDisplay && cumulativeProb < 0.999) {
      const probability = geometricPMF(k, pVal);
      outcomes.push({
        value: k,
        probability: probability,
        contribution: k * probability
      });
      cumulativeProb += probability;
      k++;
    }

    // Calculate expected value: E(X) = 1/p
    const expectedValue = 1 / pVal;

    // Calculate variance: Var(X) = (1-p) / p^2
    const variance = (1 - pVal) / Math.pow(pVal, 2);
    const standardDeviation = Math.sqrt(variance);

    return {
      isValid: true,
      p: pVal,
      q: 1 - pVal,
      outcomes,
      expectedValue,
      variance,
      standardDeviation,
      cumulativeProb,
      contributions: outcomes.map(o => ({
        value: o.value,
        probability: o.probability,
        contribution: o.contribution
      }))
    };
  }, [p, maxDisplay]);

  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>Expected Value Calculator - Geometric Distribution</h2>
      
      <div style={styles.intro}>
        <p style={styles.introText}>
          The <strong>geometric distribution</strong> models the number of trials needed to get the first success 
          in a sequence of independent Bernoulli trials. Common examples include the number of coin flips until 
          the first heads, the number of sales calls until the first sale, or the number of attempts until passing a test.
        </p>
      </div>

      <div style={styles.mainLayout}>
        {/* LEFT COLUMN - INPUT */}
        <div style={styles.leftColumn}>
          <div style={styles.inputSection}>
            <div style={styles.inputHeader}>
              <h3 style={styles.h3}>Distribution Parameter</h3>
              <button onClick={handleReset} style={styles.resetBtn}>
                Reset
              </button>
            </div>
            
            <div style={styles.parameterGrid}>
              <div style={styles.parameterItem}>
                <label style={styles.parameterLabel}>
                  <strong>p</strong> (Success Probability)
                </label>
                <input
                  type="number"
                  value={p}
                  onChange={(e) => updateP(e.target.value)}
                  style={{
                    ...styles.parameterInput,
                    ...(p !== '' && p !== '.' && (isNaN(parseFloat(p)) || parseFloat(p) <= 0 || parseFloat(p) > 1) ? styles.inputInvalid : {})
                  }}
                  min="0.0001"
                  max="1"
                  step="0.01"
                />
                <span style={styles.parameterDescription}>Probability of success on each trial (0 &lt; p ≤ 1)</span>
              </div>
            </div>

            {calculations.isValid && (
              <div style={styles.infoBox}>
                <div style={styles.infoRow}>
                  <span><strong>Success probability (p):</strong></span>
                  <span>{calculations.p}</span>
                </div>
                <div style={styles.infoRow}>
                  <span><strong>Failure probability (q):</strong></span>
                  <span>{calculations.q.toFixed(4)}</span>
                </div>
                <div style={styles.infoRow}>
                  <span><strong>Support:</strong></span>
                  <span>k = 1, 2, 3, ... (infinite)</span>
                </div>
                <div style={styles.infoRow}>
                  <span><strong>Formula:</strong></span>
                  <span>E(X) = 1 / p</span>
                </div>
              </div>
            )}

            {calculations.isValid && (
              <div style={styles.displayControl}>
                <label style={styles.displayLabel}>
                  <strong>Display outcomes:</strong>
                </label>
                <select 
                  value={maxDisplay} 
                  onChange={(e) => setMaxDisplay(parseInt(e.target.value))}
                  style={styles.displaySelect}
                >
                  <option value="10">First 10 outcomes</option>
                  <option value="20">First 20 outcomes</option>
                  <option value="30">First 30 outcomes</option>
                  <option value="50">First 50 outcomes</option>
                </select>
                <span style={styles.displayNote}>
                  Showing {calculations.outcomes.length} outcomes (cumulative prob: {(calculations.cumulativeProb * 100).toFixed(2)}%)
                </span>
              </div>
            )}
          </div>

          {calculations.isValid && calculations.outcomes.length <= 20 && (
            <div style={styles.outcomesSection}>
              <h3 style={styles.h3}>Probability Mass Function</h3>
              <div style={styles.outcomesTable}>
                <div style={styles.outcomesHeader}>
                  <span>Trial k</span>
                  <span>P(X = k)</span>
                  <span>Contribution</span>
                </div>
                {calculations.outcomes.map((outcome, index) => (
                  <div key={index} style={styles.outcomesRow}>
                    <span style={styles.outcomeValue}>{outcome.value}</span>
                    <span style={styles.outcomeProbability}>{outcome.probability.toFixed(6)}</span>
                    <span style={styles.outcomeContribution}>{outcome.contribution.toFixed(6)}</span>
                  </div>
                ))}
              </div>
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
                    1 / {calculations.p} = {calculations.expectedValue.toFixed(2)}
                  </div>
                </div>

                <div style={styles.resultCard}>
                  <div style={styles.resultLabel}>Variance Var(X)</div>
                  <div style={styles.resultValue}>
                    {calculations.variance.toFixed(4)}
                  </div>
                  <div style={styles.resultFormula}>
                    (1-p) / p² = {calculations.variance.toFixed(2)}
                  </div>
                </div>

                <div style={styles.resultCard}>
                  <div style={styles.resultLabel}>Standard Deviation σ</div>
                  <div style={styles.resultValue}>
                    {calculations.standardDeviation.toFixed(4)}
                  </div>
                  <div style={styles.resultFormula}>
                    √{calculations.variance.toFixed(2)} = {calculations.standardDeviation.toFixed(2)}
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
                  {calculations.outcomes.length <= 20 && (
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
                    <ProbabilityDistributionChart 
                      contributions={calculations.contributions}
                      expectedValue={calculations.expectedValue}
                    />
                  </div>
                )}

                {activeTab === 'breakdown' && (
                  <div style={styles.breakdownTab}>
                    <div style={styles.formula}>
                      <strong>Formula:</strong> E(X) = 1 / p
                    </div>
                    
                    <div style={styles.steps}>
                      <div style={styles.step}>
                        <span style={styles.stepLabel}>Success probability (p):</span>
                        <span style={styles.stepCalc}>{calculations.p}</span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepLabel}>Failure probability (q):</span>
                        <span style={styles.stepCalc}>1 - p = {calculations.q.toFixed(6)}</span>
                      </div>
                      
                      <div style={styles.stepTotal}>
                        <span style={styles.stepTotalLabel}>Expected Value:</span>
                        <span style={styles.stepTotalCalc}>
                          1 / {calculations.p} = {calculations.expectedValue.toFixed(4)}
                        </span>
                      </div>

                      <div style={styles.stepDivider}></div>

                      <div style={styles.step}>
                        <span style={styles.stepLabel}>Variance formula:</span>
                        <span style={styles.stepCalc}>Var(X) = (1 - p) / p²</span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepLabel}>Variance calculation:</span>
                        <span style={styles.stepCalc}>
                          {calculations.q.toFixed(4)} / {Math.pow(calculations.p, 2).toFixed(4)} = {calculations.variance.toFixed(4)}
                        </span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepLabel}>Standard deviation:</span>
                        <span style={styles.stepCalc}>
                          √{calculations.variance.toFixed(4)} = {calculations.standardDeviation.toFixed(4)}
                        </span>
                      </div>
                    </div>

                    <div style={styles.note}>
                      <strong>Interpretation:</strong> On average, you will need {calculations.expectedValue.toFixed(2)} trials 
                      to get the first success, with typical variation of ±{calculations.standardDeviation.toFixed(2)} trials. 
                      The distribution is right-skewed, meaning there's always a chance of needing many more trials than expected.
                    </div>
                  </div>
                )}

                {activeTab === 'contributions' && calculations.outcomes.length <= 20 && (
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
                Enter valid parameter: 0 &lt; p ≤ 1
              </p>
            </div>
          )}
        </div>
      </div>

      <div style={styles.explanation}>
        <h3 style={styles.h3}>Understanding Geometric Distribution</h3>
        
        <div style={styles.explainGrid}>
          <div style={styles.explainSection}>
            <h4 style={styles.h4}>What is Geometric Distribution?</h4>
            <p style={styles.p}>
              The geometric distribution models the number of independent trials needed to achieve the first success. 
              Each trial is independent with the same probability of success (p). The distribution is memoryless - 
              past failures don't affect future trials.
            </p>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Key Properties</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><strong style={styles.liStrong}>Expected value:</strong> E(X) = 1 / p</li>
              <li style={styles.li}><strong style={styles.liStrong}>Variance:</strong> Var(X) = (1 - p) / p²</li>
              <li style={styles.li}><strong style={styles.liStrong}>PMF:</strong> P(X = k) = (1-p)^(k-1) × p</li>
              <li style={styles.li}><strong style={styles.liStrong}>Memoryless:</strong> Past trials don't affect future probability</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Common Examples</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><strong style={styles.liStrong}>Coin flips:</strong> Flips until first heads</li>
              <li style={styles.li}><strong style={styles.liStrong}>Sales:</strong> Calls until first sale</li>
              <li style={styles.li}><strong style={styles.liStrong}>Testing:</strong> Attempts until passing an exam</li>
              <li style={styles.li}><strong style={styles.liStrong}>Manufacturing:</strong> Items inspected until first defect</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>When to Use Geometric Distribution</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><strong style={styles.liStrong}>First success:</strong> Counting trials until first success</li>
              <li style={styles.li}><strong style={styles.liStrong}>Binary outcomes:</strong> Each trial is success or failure</li>
              <li style={styles.li}><strong style={styles.liStrong}>Independent trials:</strong> Each trial doesn't affect others</li>
              <li style={styles.li}><strong style={styles.liStrong}>Constant probability:</strong> p stays the same for all trials</li>
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
          {valueRange > 0 && expectedValue <= maxValue && (
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
                      {contrib.probability > 0.01 && (
                        <span style={styles.distributionBarLabel}>
                          {contrib.probability.toFixed(3)}
                        </span>
                      )}
                    </div>
                  </div>
                  <div style={styles.xAxisLabel}>{contrib.value}</div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div style={styles.xAxisTitle}>Number of Trials</div>
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
              Trial {contrib.value}
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
  displayControl: {
    marginTop: '20px',
    padding: '15px',
    background: '#f8f9fa',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  displayLabel: {
    fontSize: '0.95rem',
    color: '#495057',
  },
  displaySelect: {
    padding: '8px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    fontSize: '0.95rem',
  },
  displayNote: {
    fontSize: '0.85rem',
    color: '#6c757d',
    fontStyle: 'italic',
  },
  outcomesSection: {
    padding: '20px',
    background: '#fff',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
    maxHeight: '400px',
    overflowY: 'auto',
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
    position: 'sticky',
    top: 0,
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
  stepDivider: {
    height: '1px',
    background: '#007bff',
    margin: '10px 0',
  },
  note: {
    padding: '12px',
    background: '#e7f3ff',
    borderRadius: '4px',
    fontSize: '0.9rem',
    lineHeight: 1.6,
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
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    height: '250px',
    gap: '5px',
    overflowX: 'auto',
  },
  barWrapper: {
    flex: '0 0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '35px',
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
    width: '100%',
    background: 'linear-gradient(180deg, #007bff, #204bc2)',
    borderRadius: '4px 4px 0 0',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: '8px',
    minHeight: '5px',
  },
  distributionBarLabel: {
    color: 'white',
    fontSize: '0.7rem',
    fontWeight: 600,
  },
  xAxisLabel: {
    marginTop: '8px',
    fontSize: '0.8rem',
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

export default GeometricExpectedValueCalculator;