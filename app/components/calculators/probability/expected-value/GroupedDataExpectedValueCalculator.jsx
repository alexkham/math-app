import { useState, useMemo } from 'react';

const GroupedDataExpectedValueCalculator = () => {
  const [groups, setGroups] = useState([
    { rangeMin: 10, rangeMax: 20, frequency: 5 },
    { rangeMin: 20, rangeMax: 30, frequency: 12 },
    { rangeMin: 30, rangeMax: 40, frequency: 8 }
  ]);
  const [activeTab, setActiveTab] = useState('distribution');

  const addGroup = () => {
    setGroups([...groups, { rangeMin: 0, rangeMax: 0, frequency: 0 }]);
  };

  const removeGroup = (index) => {
    if (groups.length > 1) {
      setGroups(groups.filter((_, i) => i !== index));
    }
  };

  const updateGroup = (index, field, value) => {
    const newGroups = [...groups];
    const numValue = parseFloat(value);
    
    if (value === '' || value === '-') {
      newGroups[index][field] = '';
    } else if (!isNaN(numValue)) {
      newGroups[index][field] = numValue;
    }
    
    setGroups(newGroups);
  };

  const handleReset = () => {
    setGroups([
      { rangeMin: 10, rangeMax: 20, frequency: 5 },
      { rangeMin: 20, rangeMax: 30, frequency: 12 },
      { rangeMin: 30, rangeMax: 40, frequency: 8 }
    ]);
    setActiveTab('distribution');
  };

  const calculations = useMemo(() => {
    // Validate groups
    const validGroups = groups.filter(g => {
      const min = typeof g.rangeMin === 'string' ? parseFloat(g.rangeMin) : g.rangeMin;
      const max = typeof g.rangeMax === 'string' ? parseFloat(g.rangeMax) : g.rangeMax;
      const freq = typeof g.frequency === 'string' ? parseFloat(g.frequency) : g.frequency;
      
      return !isNaN(min) && !isNaN(max) && !isNaN(freq) && freq > 0 && max > min;
    });

    if (validGroups.length === 0) {
      return {
        isValid: false,
        groups: [],
        totalFrequency: 0,
        expectedValue: 0,
        variance: 0,
        standardDeviation: 0,
        contributions: []
      };
    }

    // Calculate midpoints and probabilities
    const totalFrequency = validGroups.reduce((sum, g) => {
      const freq = typeof g.frequency === 'string' ? parseFloat(g.frequency) : g.frequency;
      return sum + freq;
    }, 0);

    const processedGroups = validGroups.map(g => {
      const min = typeof g.rangeMin === 'string' ? parseFloat(g.rangeMin) : g.rangeMin;
      const max = typeof g.rangeMax === 'string' ? parseFloat(g.rangeMax) : g.rangeMax;
      const freq = typeof g.frequency === 'string' ? parseFloat(g.frequency) : g.frequency;
      
      const midpoint = (min + max) / 2;
      const probability = freq / totalFrequency;
      
      return {
        rangeMin: min,
        rangeMax: max,
        frequency: freq,
        midpoint,
        probability,
        contribution: midpoint * probability
      };
    });

    // Calculate expected value
    const expectedValue = processedGroups.reduce((sum, g) => sum + g.contribution, 0);

    // Calculate variance
    const variance = processedGroups.reduce((sum, g) => {
      return sum + (g.probability * Math.pow(g.midpoint - expectedValue, 2));
    }, 0);

    const standardDeviation = Math.sqrt(variance);

    return {
      isValid: true,
      groups: processedGroups,
      totalFrequency,
      expectedValue,
      variance,
      standardDeviation,
      contributions: processedGroups.map(g => ({
        value: g.midpoint,
        probability: g.probability,
        contribution: g.contribution
      }))
    };
  }, [groups]);

  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>Expected Value Calculator - Grouped/Frequency Data Method</h2>
      
      <div style={styles.intro}>
        <p style={styles.introText}>
          Calculate expected value from grouped or binned data. Enter ranges (intervals) with their frequencies. 
          The calculator uses the midpoint of each range as the representative value and computes the weighted average. 
          This method is ideal for histogram data, survey responses with brackets, or any pre-grouped statistics.
        </p>
      </div>

      <div style={styles.mainLayout}>
        {/* LEFT COLUMN - INPUT */}
        <div style={styles.leftColumn}>
          <div style={styles.inputSection}>
            <div style={styles.inputHeader}>
              <h3 style={styles.h3}>Enter Ranges and Frequencies</h3>
              <button onClick={handleReset} style={styles.resetBtn}>
                Reset
              </button>
            </div>
            
            <div style={styles.tableHeader}>
              <span>Range Start</span>
              <span>Range End</span>
              <span>Frequency</span>
              <span>Midpoint</span>
              <span></span>
            </div>

            {groups.map((group, index) => {
              const min = typeof group.rangeMin === 'string' ? group.rangeMin : group.rangeMin;
              const max = typeof group.rangeMax === 'string' ? group.rangeMax : group.rangeMax;
              const freq = typeof group.frequency === 'string' ? group.frequency : group.frequency;
              
              const isValidMin = min !== '' && !isNaN(parseFloat(min));
              const isValidMax = max !== '' && !isNaN(parseFloat(max));
              const isValidFreq = freq !== '' && !isNaN(parseFloat(freq)) && parseFloat(freq) > 0;
              const isValidRange = isValidMin && isValidMax && parseFloat(max) > parseFloat(min);
              
              const midpoint = isValidRange ? ((parseFloat(min) + parseFloat(max)) / 2).toFixed(2) : '—';
              
              return (
                <div key={index} style={styles.inputRow}>
                  <input
                    type="number"
                    value={min}
                    onChange={(e) => updateGroup(index, 'rangeMin', e.target.value)}
                    placeholder="Min"
                    step="any"
                    style={{
                      ...styles.input,
                      ...(min !== '' && !isValidMin ? styles.inputInvalid : {}),
                      ...(min !== '' && max !== '' && !isValidRange ? styles.inputInvalid : {})
                    }}
                  />
                  <input
                    type="number"
                    value={max}
                    onChange={(e) => updateGroup(index, 'rangeMax', e.target.value)}
                    placeholder="Max"
                    step="any"
                    style={{
                      ...styles.input,
                      ...(max !== '' && !isValidMax ? styles.inputInvalid : {}),
                      ...(min !== '' && max !== '' && !isValidRange ? styles.inputInvalid : {})
                    }}
                  />
                  <input
                    type="number"
                    value={freq}
                    onChange={(e) => updateGroup(index, 'frequency', e.target.value)}
                    placeholder="Count"
                    min="0"
                    step="1"
                    style={{
                      ...styles.input,
                      ...(freq !== '' && !isValidFreq ? styles.inputInvalid : {})
                    }}
                  />
                  <div style={styles.midpoint}>
                    {midpoint}
                  </div>
                  <button
                    onClick={() => removeGroup(index)}
                    style={{
                      ...styles.removeBtn,
                      ...(groups.length === 1 ? styles.removeBtnDisabled : {})
                    }}
                    disabled={groups.length === 1}
                    title="Remove group"
                  >
                    ×
                  </button>
                </div>
              );
            })}

            <button onClick={addGroup} style={styles.addBtn}>
              + Add Range
            </button>

            <div style={styles.dataStats}>
              <div style={styles.statItem}>
                <strong>Total Frequency:</strong>
                <span style={calculations.isValid ? styles.validText : {}}>
                  {calculations.totalFrequency}
                </span>
              </div>
              <div style={styles.statItem}>
                <strong>Valid Groups:</strong>
                <span>{calculations.groups.length}</span>
              </div>
            </div>
          </div>

          {calculations.isValid && (
            <div style={styles.frequencySection}>
              <h3 style={styles.h3}>Group Summary</h3>
              <div style={styles.frequencyTable}>
                <div style={styles.frequencyHeader}>
                  <span>Range</span>
                  <span>Midpoint</span>
                  <span>Frequency</span>
                  <span>Probability</span>
                </div>
                {calculations.groups.map((group, index) => (
                  <div key={index} style={styles.frequencyRow}>
                    <span style={styles.frequencyRange}>
                      {group.rangeMin} - {group.rangeMax}
                    </span>
                    <span style={styles.frequencyMidpoint}>{group.midpoint.toFixed(2)}</span>
                    <span style={styles.frequencyCount}>{group.frequency}</span>
                    <span style={styles.frequencyProb}>{group.probability.toFixed(4)}</span>
                  </div>
                ))}
                <div style={styles.frequencyTotal}>
                  <span><strong>Total</strong></span>
                  <span></span>
                  <span><strong>{calculations.totalFrequency}</strong></span>
                  <span><strong>1.0000</strong></span>
                </div>
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
                  <div style={styles.resultSubLabel}>(Weighted Mean)</div>
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
                      <strong>Formula:</strong> E(X) = Σ(midpoint × probability)
                    </div>
                    
                    <div style={styles.steps}>
                      {calculations.groups.map((group, index) => (
                        <div key={index} style={styles.step}>
                          <span style={styles.stepLabel}>
                            Range {group.rangeMin}-{group.rangeMax}:
                          </span>
                          <span style={styles.stepCalc}>
                            {group.midpoint.toFixed(2)} × {group.probability.toFixed(4)} = {group.contribution.toFixed(4)}
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

                    <div style={styles.note}>
                      <strong>Note:</strong> Midpoint = (Range Start + Range End) / 2
                    </div>
                  </div>
                )}

                {activeTab === 'contributions' && (
                  <div style={styles.chart}>
                    <ContributionsChart 
                      contributions={calculations.contributions}
                      groups={calculations.groups}
                    />
                  </div>
                )}
              </div>
            </>
          ) : (
            <div style={styles.resultsPlaceholder}>
              <h3 style={styles.h3}>Results</h3>
              <p style={styles.placeholderText}>
                Enter valid ranges with frequencies to see results. Each range must have max &gt; min and frequency &gt; 0.
              </p>
            </div>
          )}
        </div>
      </div>

      <div style={styles.explanation}>
        <h3 style={styles.h3}>Understanding Grouped Data Expected Value</h3>
        
        <div style={styles.explainGrid}>
          <div style={styles.explainSection}>
            <h4 style={styles.h4}>What is This Method?</h4>
            <p style={styles.p}>
              When data is organized into ranges or bins (like a histogram), we use the midpoint of each range 
              as the representative value. The expected value is the weighted average of these midpoints, 
              weighted by the frequency (or probability) of each range.
            </p>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>How It Works</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><strong style={styles.liStrong}>Step 1:</strong> Calculate midpoint = (min + max) / 2</li>
              <li style={styles.li}><strong style={styles.liStrong}>Step 2:</strong> Calculate probability = frequency / total</li>
              <li style={styles.li}><strong style={styles.liStrong}>Step 3:</strong> Compute E(X) = Σ(midpoint × probability)</li>
              <li style={styles.li}><strong style={styles.liStrong}>Result:</strong> Weighted average of midpoints</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>When to Use This Method</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><strong style={styles.liStrong}>Histogram data:</strong> Pre-binned frequency distributions</li>
              <li style={styles.li}><strong style={styles.liStrong}>Survey brackets:</strong> Age ranges, income ranges, etc.</li>
              <li style={styles.li}><strong style={styles.liStrong}>Grouped statistics:</strong> Published data in ranges</li>
              <li style={styles.li}><strong style={styles.liStrong}>Census data:</strong> Population by age/income brackets</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Example Applications</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><strong style={styles.liStrong}>Age analysis:</strong> Average age from age brackets</li>
              <li style={styles.li}><strong style={styles.liStrong}>Income studies:</strong> Expected income from salary ranges</li>
              <li style={styles.li}><strong style={styles.liStrong}>Test scores:</strong> Average from grade ranges (0-50, 50-70, etc.)</li>
              <li style={styles.li}><strong style={styles.liStrong}>Response times:</strong> Average from time intervals</li>
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
                  <div style={styles.xAxisLabel}>{contrib.value.toFixed(1)}</div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div style={styles.xAxisTitle}>Midpoint Value</div>
      </div>
    </div>
  );
};

// Contributions Chart Component
const ContributionsChart = ({ contributions, groups }) => {
  const maxAbsContribution = Math.max(...contributions.map(c => Math.abs(c.contribution)));
  
  return (
    <div>
      {contributions.map((contrib, index) => {
        const barWidth = maxAbsContribution > 0 ? (Math.abs(contrib.contribution) / maxAbsContribution) * 100 : 0;
        const isNegative = contrib.contribution < 0;
        const group = groups[index];
        
        return (
          <div key={index} style={styles.barRow}>
            <div style={styles.barLabel}>
              {group.rangeMin}-{group.rangeMax}
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
    gridTemplateColumns: '600px 1fr',
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
  tableHeader: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 80px 40px',
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
    gridTemplateColumns: '1fr 1fr 1fr 80px 40px',
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
  midpoint: {
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
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
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
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
    gap: '10px',
    padding: '8px 10px',
    borderBottom: '1px solid #e9ecef',
    fontSize: '0.9rem',
  },
  frequencyRange: {
    fontWeight: 600,
    color: '#007bff',
  },
  frequencyMidpoint: {
    textAlign: 'center',
    color: '#495057',
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
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
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

export default GroupedDataExpectedValueCalculator;